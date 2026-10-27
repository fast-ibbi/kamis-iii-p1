#!/usr/bin/env node
// build.mjs — turn diagram specs into SVG files, wire them into a Marp deck,
// and tell you the truth about what happened.
//
//   node build.mjs slides/bab-16-dasar-react.md
//   node build.mjs slides/bab-16-dasar-react.md --dry --json
//   node build.mjs slides/bab-16-dasar-react.md --png 05
//
// Contract:
//   · A spec is authored once and is NEVER overwritten by this script.
//   · An SVG is a derived artifact and is ALWAYS rebuilt from its spec.
//   · The deck is only ever touched additively: one image line per diagram,
//     inserted under its heading. No prose is reflowed or deleted.
//   · If a label cannot fit, the build fails and names the string. No exceptions.
//
// Exit codes: 0 ok, 1 build/validation failure, 2 bad usage.

import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { basename, dirname, extname, join, relative, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'

import { render, loadTheme, FitError, PATTERNS } from '../lib/svg-kit.mjs'

/* ------------------------------------------------------------------- usage */

function usage() {
  return `slide-diagrams — build teaching diagrams for a Marp deck

  node build.mjs <deck.md> [options]

Options
  --specs <dir>    where *.mjs diagram specs live   (default: <deckDir>/diagrams)
  --out <dir>      where *.svg files are written    (default: <deckDir>/assets/diagrams)
  --theme <css>    deck theme to take tokens from   (default: <deckDir>/theme/academic.css)
  --dry            validate and print the plan, write nothing
  --json           machine-readable report on stdout
  --strict         labels not found in the slide text become errors
  --no-insert      build SVGs without touching the deck
  --png <id>       rasterize one diagram for eyeballing (needs a rasterizer)
  --audit          print a per-slide facts table and exit (writes nothing)
  --help

--audit reports facts only — code blocks, tables, existing images, bullet count,
visible characters. It never says whether a slide *should* have a diagram; that
judgement is yours. See references/deck-audit.md.
`
}

function parseArgs(argv) {
  const opts = { deck: null, specs: null, out: null, theme: null, dry: false, json: false, strict: false, insert: true, png: null, audit: false, help: false }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    switch (a) {
      case '--help': case '-h': opts.help = true; break
      case '--dry': opts.dry = true; break
      case '--json': opts.json = true; break
      case '--strict': opts.strict = true; break
      case '--no-insert': opts.insert = false; break
      case '--specs': opts.specs = argv[++i]; break
      case '--out': opts.out = argv[++i]; break
      case '--theme': opts.theme = argv[++i]; break
      case '--png': opts.png = argv[++i]; break
      case '--audit': opts.audit = true; break
      default:
        if (a.startsWith('-')) throw new Error(`unknown flag ${a}`)
        if (opts.deck) throw new Error(`unexpected extra argument "${a}"`)
        opts.deck = a
    }
  }
  return opts
}

/* ------------------------------------------------------- deck parsing (Marp) */

// Split a Marp deck into slides without being fooled by `---` inside fenced code
// or inside presenter-note HTML comments (both are common in these decks).
function splitSlides(source) {
  const lines = source.split('\n')
  const slides = []
  let current = { startLine: 0, lines: [] }
  let fence = null
  let inComment = false

  const push = () => {
    slides.push(current)
    current = { startLine: 0, lines: [] }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    if (fence) {
      if (trimmed.startsWith(fence)) fence = null
      current.lines.push(line)
      continue
    }
    if (inComment) {
      if (trimmed.includes('-->')) inComment = false
      current.lines.push(line)
      continue
    }
    const fenceMatch = /^(\s*)(`{3,}|~{3,})/.exec(line)
    if (fenceMatch) {
      fence = fenceMatch[2]
      current.lines.push(line)
      continue
    }
    if (trimmed.startsWith('<!--') && !trimmed.includes('-->')) {
      inComment = true
      current.lines.push(line)
      continue
    }
    if (/^---+$/.test(trimmed) && current.lines.some((l) => l.trim() !== '')) {
      push()
      current.startLine = i + 1
      continue
    }
    current.lines.push(line)
  }
  push()

  // Drop the front-matter block if it is the first thing in the file.
  let trimmedSlides = slides
  if (slides[0]?.lines[0]?.trim() === '---') {
    trimmedSlides = slides.slice(1)
  }

  return trimmedSlides
    .map((s, index) => {
      const text = s.lines.join('\n')
      // FORK: decks in this repo title each slide with `# ` (Marp h1), not `## `.
      // Accept either level; the first heading in a slide wins, so a divider slide
      // whose subtitle is `## ` still binds to its own `# ` title.
      const headingLine = s.lines.findIndex((l) => /^#{1,2}\s+\S/.test(l))
      const heading = headingLine >= 0 ? s.lines[headingLine].replace(/^#{1,2}\s+/, '').trim() : null
      return { index, startLine: s.startLine, heading, text, lines: s.lines, headingLine }
    })
    .filter((s) => s.text.trim() !== '')
}

/* --------------------------------------------------------------- spec loading */

function readSpecs(specsDir, deckSlug) {
  if (!existsSync(specsDir)) {
    return {
      specs: [],
      errors: [
        `specs directory not found: ${specsDir}\n` +
          `      Create it and add one ${deckSlug}-NN.mjs spec per diagram ` +
          `(shape: templates/spec-template.mjs in the skill).`,
      ],
    }
  }
  const files = readdirSync(specsDir).filter((f) => extname(f) === '.mjs')
    // FORK: satu folder spec dipakai bersama oleh 14 deck, sedangkan `id` sebuah
    // spec hanya unik DI DALAM satu deck. Tanpa saringan ini setiap deck memuat
    // seluruh spec repo, saling bertabrakan soal id, dan gagal mengikat heading
    // milik deck lain. Nama berkas spec sudah membawa slug deck: pakai itu.
    .filter((f) => !deckSlug || f.startsWith(`${deckSlug}-`)).sort()
  const specs = []
  const errors = []
  for (const f of files) {
    const idMatch = /-(\d+)\.mjs$/.exec(f)
    const rel = join(specsDir, f)
    specs.push({ file: rel, fileName: f, fallbackId: idMatch ? idMatch[1] : null })
  }
  return { specs, errors }
}

async function loadSpec(entry) {
  const mod = await import(`${pathToFileURL(resolve(entry.file)).href}?t=${Date.now()}`)
  const spec = mod.default
  if (!spec || typeof spec !== 'object') {
    throw new Error(`${entry.fileName}: must \`export default { … }\``)
  }
  const id = spec.id ?? entry.fallbackId
  if (!id) throw new Error(`${entry.fileName}: needs an "id" (or a -NN.mjs filename)`)
  if (!spec.slide) throw new Error(`${entry.fileName}: needs "slide" — the exact # heading it draws`)
  if (!spec.pattern) throw new Error(`${entry.fileName}: needs "pattern" — one of ${Object.keys(PATTERNS).join(', ')}`)
  return { ...spec, id: String(id), file: entry.file, fileName: entry.fileName }
}

/* ------------------------------------------------------------------ binding */

const norm = (s) =>
  String(s ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

function bindSlide(spec, slides) {
  const want = norm(spec.slide)
  const exact = slides.filter((s) => s.heading && norm(s.heading) === want)
  if (exact.length === 1) return { slide: exact[0] }
  if (exact.length > 1) {
    return { error: `spec ${spec.id} matches ${exact.length} slides with heading "${spec.slide}" — headings must be unique.` }
  }
  const loose = slides.filter((s) => s.heading && norm(s.heading).includes(want))
  if (loose.length === 1) return { slide: loose[0] }
  const headings = slides.filter((s) => s.heading).map((s) => s.heading)
  const near = headings
    .map((h) => ({ h, d: levenshtein(norm(h), want) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, 3)
    .map((x) => `        · ${x.h}`)
    .join('\n')
  return {
    error:
      `spec ${spec.id} (${spec.fileName}) names slide "${spec.slide}" but no # heading matches.\n` +
      `      Headings in this deck:\n${near || '        (none found)'}\n` +
      `      Fix the spec's "slide" value to the exact heading text.`,
  }
}

function levenshtein(a, b) {
  if (!a.length) return b.length
  if (!b.length) return a.length
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    const cur = [i]
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1))
    }
    prev = cur
  }
  return prev[b.length]
}

/* ----------------------------------------------------------------- insertion */

// FORK: sertakan `alt` supaya Marp menghasilkan <img alt="…"> dan bukan alt kosong.
// Tanpa ini seluruh diagram tidak terbaca pembaca layar padahal SVG-nya punya
// aria-label; teks alt pada markdown Marp menempati slot yang sama dengan direktif w:.
const IMG_LINE = (width, alt, src) => {
  const text = String(alt ?? '')
    .replace(/[\[\]]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return `![w:${width}${text ? ` ${text}` : ''}](${src})`
}

function imageRefLine(slideText, src) {
  const re = new RegExp(`^!\\[[^\\]]*\\]\\(${src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)\\s*$`, 'm')
  return re.exec(slideText)
}

/**
 * Add or refresh one image line under a slide's heading. Returns the new source
 * and what changed. Existing prose is never touched.
 */
function wireImage(source, slide, line) {
  const lines = source.split('\n')

  // Absolute index of this slide's first line.
  const start = slide.startLine
  const end = start + slide.lines.length

  const existing = lines.slice(start, end).findIndex((l) => /^!\[[^\]]*\]\(assets\/diagrams\/.*\)\s*$/.test(l) && l.includes(extractSrc(line)))
  if (existing >= 0) {
    const abs = start + existing
    if (lines[abs].trim() === line) return { source, status: 'unchanged' }
    lines[abs] = line
    return { source: lines.join('\n'), status: 'updated' }
  }

  // Insert directly under the heading, preserving the blank line that follows it.
  const headingAbs = start + slide.headingLine
  const insertAt = lines[headingAbs + 1]?.trim() === '' ? headingAbs + 2 : headingAbs + 1
  const block = lines[headingAbs + 1]?.trim() === '' ? [line, ''] : ['', line, '']
  lines.splice(insertAt, 0, ...block)
  return { source: lines.join('\n'), status: 'inserted' }
}

function extractSrc(line) {
  const m = /\(([^)]+)\)/.exec(line)
  return m ? m[1] : ''
}

/* ---------------------------------------------------------------- provenance */

function provenance(spec, slide, labels) {
  const haystack = norm(slide.text)
  const seen = new Set()
  const missing = []
  for (const label of labels) {
    const n = norm(label)
    if (!n || seen.has(n)) continue
    seen.add(n)
    if (!haystack.includes(n)) missing.push(label)
  }
  return missing
}

/* -------------------------------------------------------------------- raster */

// Best-effort SVG → PNG. Deliberately tries several local rasterizers rather
// than adding a dependency; reports which one worked, or that none exist.
// Stops at the first success, and each tool writes to its own filename, so a
// later tool can never overwrite a correct raster with a browser-screenshot one.
function rasterize(svgPath, outDir) {
  const has = (bin) => spawnSync('which', [bin], { encoding: 'utf8' }).status === 0
  const tried = []
  const take = (tool, out, status) => (status === 0 && existsSync(out) ? { ok: true, tool, out } : null)

  if (has('rsvg-convert')) {
    tried.push('rsvg-convert')
    const out = join(outDir, basename(svgPath).replace(/\.svg$/, '.png'))
    const r = spawnSync('rsvg-convert', ['-w', '1400', '-o', out, svgPath], { encoding: 'utf8' })
    const hit = take('rsvg-convert', out, r.status)
    if (hit) return { ...hit, tried }
  }
  if (has('qlmanage')) {
    tried.push('qlmanage')
    const r = spawnSync('qlmanage', ['-t', '-s', '1400', '-o', outDir, svgPath], { encoding: 'utf8' })
    const hit = take('qlmanage', join(outDir, `${basename(svgPath)}.png`), r.status)
    if (hit) return { ...hit, tried }
  }
  const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  if (existsSync(chrome)) {
    tried.push('chrome')
    const out = join(outDir, basename(svgPath).replace(/\.svg$/, '.chrome.png'))
    const r = spawnSync(
      chrome,
      ['--headless', '--disable-gpu', `--screenshot=${out}`, '--window-size=1400,900', `file://${svgPath}`],
      { encoding: 'utf8' },
    )
    const hit = take('chrome', out, r.status)
    if (hit) return { ...hit, tried }
  }

  return { ok: false, tool: null, out: null, tried }
}

/* ---------------------------------------------------------------------- main */

const COL = { ok: '\x1b[32m', warn: '\x1b[33m', err: '\x1b[31m', dim: '\x1b[2m', off: '\x1b[0m' }
const c = (s, k) => (process.stdout.isTTY ? `${COL[k]}${s}${COL.off}` : s)

/* ------------------------------------------------------------------- audit */

// Presenter notes live in <!-- --> blocks and are not what an audience sees, so
// every count below is taken from the visible text only.
function stripNotes(text) {
  return text.replace(/<!--[\s\S]*?-->/g, '')
}

function slideFacts(slide) {
  const lines = stripNotes(slide.text).split('\n')
  const body = []
  let fence = null
  let codeBlocks = 0
  let codeLines = 0

  for (const line of lines) {
    const trimmed = line.trim()
    if (fence) {
      if (trimmed.startsWith(fence)) fence = null
      codeLines++
      continue
    }
    const m = /^\s*(`{3,}|~{3,})/.exec(line)
    if (m) { fence = m[1]; codeBlocks++; continue }
    body.push(line)
  }

  const bullets = body.filter((l) => /^\s{0,2}[-*+]\s+\S/.test(l)).length
  const tableRows = body.filter((l) => /^\s*\|.*\|\s*$/.test(l)).length
  const hasTable = tableRows >= 2 && body.some((l) => /\|\s*:?-{3,}/.test(l))
  const images = body.filter((l) => /!\[[^\]]*\]\([^)]*\)/.test(l)).length
  const chars = body.join(' ').replace(/\s+/g, ' ').trim().length

  return {
    heading: slide.heading,
    hasHeading: Boolean(slide.heading),
    codeBlocks,
    codeLines,
    tableRows: hasTable ? tableRows : 0,
    images,
    bullets,
    chars,
  }
}

// Facts only. This deliberately does not classify slides as drawn/skipped: a
// script can see that a slide holds a table, never that the table is already the
// clearest possible form. The judgement belongs to references/deck-audit.md.
function auditDeck(deckPath, slides, opts) {
  const rows = slides.map((s, i) => ({ n: i + 1, ...slideFacts(s) }))

  if (opts.json) {
    process.stdout.write(`${JSON.stringify({ deck: deckPath, slideCount: rows.length, slides: rows }, null, 2)}\n`)
    return
  }

  const y = (v, w) => String(v).padStart(w)
  const out = []
  out.push(`slide-diagrams — audit ${deckPath}`)
  out.push(`  ${rows.length} slides · read-only, nothing written`)
  out.push('')
  out.push(`  ${y('NN', 3)}  ${y('CODE', 4)}  ${y('TBL', 3)}  ${y('IMG', 3)}  ${y('BUL', 3)}  ${y('CHARS', 5)}  HEADING`)
  for (const r of rows) {
    const heading = r.hasHeading ? r.heading : '(no # heading)'
    out.push(
      `  ${y(r.n, 3)}  ${y(r.codeBlocks || '-', 4)}  ${y(r.tableRows || '-', 3)}  ${y(r.images || '-', 3)}  ` +
        `${y(r.bullets || '-', 3)}  ${y(r.chars, 5)}  ${heading}`,
    )
  }
  out.push('')
  const withImg = rows.filter((r) => r.images > 0).length
  const withCode = rows.filter((r) => r.codeBlocks > 0).length
  const withTable = rows.filter((r) => r.tableRows > 0).length
  const bare = rows.filter((r) => !r.hasHeading).length
  out.push(
    `  already carry an image: ${withImg} · contain code: ${withCode} · ` +
      `contain a table: ${withTable} · no ## heading: ${bare}`,
  )
  out.push('  Next: apply the selection test in references/deck-audit.md, then present the verdict table.')
  process.stdout.write(`${out.join('\n')}\n`)
}

/* -------------------------------------------------------------- legibility */

// The kit's 14px floor is in SVG units. On the slide the whole canvas is scaled
// by imgWidth/canvasWidth, so a perfectly legal 14px label can still land at
// 8.7px on the projector when a 1160-unit canvas is placed at w:720. Measure the
// number the audience will actually get.
function legibility(svg, imgWidth) {
  const vb = /viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(svg)
  const canvas = vb ? parseFloat(vb[1]) : null
  let minFont = null
  for (const tag of svg.match(/<text\b[^>]*>/g) ?? []) {
    const cls = /class="([^"]*)"/.exec(tag)
    if (!cls) continue
    const m = /\bs(\d+)\b/.exec(cls[1])
    if (!m) continue
    const size = parseInt(m[1], 10)
    if (minFont === null || size < minFont) minFont = size
  }
  if (!canvas || !minFont) return { warn: false }
  const width = imgWidth || 1120
  const effective = minFont * (width / canvas)
  return { warn: effective < 13, font: minFont, canvas, width, effective }
}

async function main() {
  let opts
  try {
    opts = parseArgs(process.argv.slice(2))
  } catch (err) {
    process.stderr.write(`${err.message}\n\n${usage()}`)
    process.exit(2)
  }
  if (opts.help) { process.stdout.write(usage()); return }
  if (!opts.deck) { process.stderr.write(`missing <deck.md>\n\n${usage()}`); process.exit(2) }

  const deckPath = resolve(opts.deck)
  if (!existsSync(deckPath)) { process.stderr.write(`deck not found: ${deckPath}\n`); process.exit(2) }

  const deckDir = dirname(deckPath)
  const deckSlug = basename(deckPath, '.md')
  const specsDir = resolve(opts.specs ?? join(deckDir, 'diagrams'))
  const outDir = resolve(opts.out ?? join(deckDir, 'assets', 'diagrams'))
  const themePath = resolve(opts.theme ?? join(deckDir, 'theme', 'academic.css'))
  const relOut = (p) => relative(deckDir, p).split('\\').join('/')

  const report = {
    deck: deckPath,
    theme: themePath,
    specsDir,
    outDir,
    themeFallbacks: [],
    diagrams: [],
    errors: [],
    warnings: [],
  }

  const deckSource = readFileSync(deckPath, 'utf8')
  const slides = splitSlides(deckSource)

  // --audit stops here: before any spec is read, before anything is written.
  if (opts.audit) {
    auditDeck(deckPath, slides, opts)
    return
  }

  const theme = loadTheme(themePath)
  report.themeFallbacks = theme.defaults
  const ctx = { palette: theme.palette, tones: theme.tones }

  const { specs: entries, errors: specErrors } = readSpecs(specsDir, deckSlug)
  report.errors.push(...specErrors)

  if (!entries.length) {
    if (!report.errors.length) {
      report.warnings.push(`no specs found in ${specsDir} — nothing to build`)
    }
    return finish(report, opts, deckSource)
  }

  const specs = []
  for (const entry of entries) {
    try {
      specs.push(await loadSpec(entry))
    } catch (err) {
      report.errors.push(err.message)
    }
  }

  const ids = new Map()
  const slideUse = new Map()
  for (const spec of specs) {
    if (ids.has(spec.id)) report.errors.push(`duplicate id "${spec.id}" in ${spec.fileName} and ${ids.get(spec.id)}`)
    ids.set(spec.id, spec.fileName)

    const bound = bindSlide(spec, slides)
    if (bound.error) { report.errors.push(bound.error); continue }
    const prior = slideUse.get(bound.slide.index)
    if (prior) {
      report.errors.push(
        `specs ${prior} and ${spec.id} both target slide "${spec.slide}". One diagram per slide maximum — ` +
          `merge them into a single, lower-detail diagram.`,
      )
      continue
    }
    slideUse.set(bound.slide.index, spec.id)

    let rendered
    try {
      rendered = render(spec, ctx)
    } catch (err) {
      if (err instanceof FitError) {
        report.errors.push(`spec ${spec.id} (${spec.fileName}) does not fit its pattern:\n      ${err.message}`)
      } else {
        report.errors.push(`spec ${spec.id} (${spec.fileName}) crashed: ${err.message}`)
      }
      continue
    }

    const svgPath = join(outDir, `${deckSlug}-${spec.id}.svg`)
    const src = relOut(svgPath)
    const missing = provenance(spec, bound.slide, rendered.labels)
    if (missing.length) {
      const msg = `spec ${spec.id}: ${missing.length} label(s) not found in the slide text — ${missing
        .map((m) => `"${m}"`)
        .join(', ')}`
      if (opts.strict) report.errors.push(`${msg}\n      Under --strict these must appear on the slide, or the spec drops them.`)
      else report.warnings.push(msg)
    }

    report.diagrams.push({
      id: spec.id,
      pattern: rendered.pattern,
      slideHeading: spec.slide,
      slideNumber: bound.slide.index + 1,
      svgPath,
      src,
      bytes: rendered.svg.length,
      labels: rendered.labels.length,
      missing,
      svg: rendered.svg,
      imgWidth: rendered.imgWidth,
      alt: spec.alt ?? spec.slide,
    })

    const leg = legibility(rendered.svg, rendered.imgWidth)
    if (leg.warn) {
      report.warnings.push(
        `spec ${spec.id}: legibility — smallest label is ${leg.font}px in a ${leg.canvas}px canvas, ` +
          `so it renders at ${leg.effective.toFixed(1)}px on the slide (imgWidth ${Math.round(leg.width)}). ` +
          `It fits the frame and fails the student: raise imgWidth, or split the slide so the picture gets the width.`,
      )
    }
  }

  if (report.errors.length) return finish(report, opts, deckSource)

  // Write SVG artifacts (pure derived output — always rebuilt).
  if (!opts.dry) {
    mkdirSync(outDir, { recursive: true })
    for (const d of report.diagrams) {
      writeFileSync(d.svgPath, d.svg)
      d.bytes = statSync(d.svgPath).size
    }
  }

  // Wire references into the deck (additive only).
  if (opts.insert && !opts.dry) {
    let source = deckSource
    // Re-bind against a freshly parsed deck each time: insertion shifts line numbers.
    for (const d of report.diagrams) {
      const fresh = splitSlides(source)
      const bound = fresh.find((s) => norm(s.heading) === norm(d.slideHeading))
      if (!bound) { report.errors.push(`internal: lost slide "${d.slideHeading}" while inserting`); continue }
      const line = IMG_LINE(d.imgWidth, d.alt, d.src)
      const res = wireImage(source, bound, line)
      source = res.source
      d.wired = res.status
    }
    if (!report.errors.length) writeFileSync(deckPath, source)
  }

  if (opts.png) {
    const d = report.diagrams.find((x) => x.id === opts.png)
    if (!d) {
      report.errors.push(`--png ${opts.png}: no diagram with that id`)
    } else if (!opts.dry) {
      const r = rasterize(d.svgPath, outDir)
      d.png = r
      if (!r.ok) {
        report.warnings.push(
          `--png: no usable rasterizer found (tried ${r.tried.join(', ') || 'nothing'}). ` +
            `Install rsvg-convert or open the SVG directly: ${d.svgPath}`,
        )
      }
    }
  }

  return finish(report, opts, deckSource)
}

function finish(report, opts, deckSource) {
  for (const d of report.diagrams) delete d.svg

  if (opts.json) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`)
    return report.errors.length ? 1 : 0
  }

  const out = []
  out.push(`slide-diagrams — ${relative(process.cwd(), report.deck)}`)
  out.push(`  theme  ${relative(process.cwd(), report.theme)}${report.themeFallbacks.length ? c(` (defaulted: ${report.themeFallbacks.join(', ')})`, 'warn') : ''}`)
  out.push(`  specs  ${relative(process.cwd(), report.specsDir)}`)
  out.push(`  out    ${relative(process.cwd(), report.outDir)}`)
  out.push('')

  for (const d of report.diagrams) {
    out.push(`  ${d.id.padEnd(3)} ${d.pattern.padEnd(13)} ${d.slideHeading}`)
    out.push(`      slide ${d.slideNumber} · ${(d.bytes / 1024).toFixed(1)} KB · ${d.labels} labels · ${d.wired ?? (opts.dry ? 'would insert' : 'not wired')}`)
    out.push(`      ${d.src}`)
    if (d.png) {
      out.push(
        d.png.ok
          ? `      png via ${d.png.tool}: ${relative(process.cwd(), d.png.out)}`
          : `      png: none of ${d.png.tried.join(', ')} worked`,
      )
    }
    if (d.missing?.length) {
      out.push(`      ${c('not on the slide:', 'warn')} ${d.missing.map((m) => `"${m}"`).join(', ')}`)
    }
  }

  for (const w of report.warnings) out.push(c(`warn  ${w}`, 'warn'))
  for (const e of report.errors) out.push(c(`error ${e}`, 'err'))

  const built = report.diagrams.length
  const inserted = report.diagrams.filter((d) => d.wired === 'inserted').length
  const updated = report.diagrams.filter((d) => d.wired === 'updated').length
  const same = report.diagrams.filter((d) => d.wired === 'unchanged').length
  out.push('')
  out.push(
    `${built} diagram(s) · ${inserted} inserted · ${updated} refreshed · ${same} unchanged` +
      (report.errors.length ? ` · ${c(`${report.errors.length} error(s)`, 'err')}` : ''),
  )
  if (opts.dry) out.push(c('dry run — nothing written', 'dim'))

  process.stdout.write(`${out.join('\n')}\n`)
  return report.errors.length ? 1 : 0
}

const code = await main()
process.exit(typeof code === 'number' ? code : 0)
