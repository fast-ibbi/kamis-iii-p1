#!/usr/bin/env node
// build-pages.mjs — melengkapi `marp -I slides -o dist`.
//
// `marp -I slides -o dist` hanya menghasilkan PDF (perilaku bawaan Marp CLI untuk
// mode input-dir). Skrip ini menambahkan apa yang dibutuhkan GitHub Pages:
//
//   1. versi HTML tiap deck (mode HTML menyimpan catatan penyaji; tekan `p` untuk
//      presenter view) — PDF tetap dipakai untuk handout dan arsip;
//   2. salinan slides/assets ke dist/assets, supaya gambar diagram pada HTML tidak
//      menunjuk berkas yang tidak ada (HTML Marp tidak menyalin gambar lokal);
//   3. dist/index.html sebagai halaman daftar deck;
//   4. dist/.nojekyll agar GitHub Pages tidak memproses hasil render.
//
// Dipanggil oleh `npm run build`; aman dijalankan ulang.

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync, cpSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'

const ROOT = resolve(process.cwd())

// marp.cmd (Windows) butuh shell, dan shell:true memicu peringatan DEP0190 soal
// argumen yang tidak di-escape. Argumen di sini dikendalikan skrip ini sendiri,
// jadi peringatan itu disaring supaya keluaran build tetap bersih.
process.removeAllListeners('warning')
process.on('warning', (w) => { if (w.code !== 'DEP0190') console.warn(w) })
const SLIDES = join(ROOT, 'slides')
const DIST = join(ROOT, 'dist')

if (!existsSync(SLIDES)) {
  console.error('folder slides/ tidak ditemukan — jalankan dari akar repo.')
  process.exit(2)
}

/* ------------------------------------------------------------ perintah marp */

function marpBin() {
  const bin = join(ROOT, 'node_modules', '.bin')
  // Di Windows npm memasang marp sebagai marp.cmd; nama tanpa ekstensi tidak bisa
  // dijalankan langsung oleh spawnSync.
  const local = join(bin, process.platform === 'win32' ? 'marp.cmd' : 'marp')
  if (existsSync(local)) return [local]
  return ['npx', '-y', '@marp-team/marp-cli@4.5.0']
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

/* --------------------------------------------------------------- front-matter */

function frontMatter(source) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source)
  const out = {}
  if (!m) return out
  for (const line of m[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z][\w-]*)\s*:\s*(.*)$/.exec(line)
    if (!kv) continue
    out[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, '')
  }
  return out
}

function slideCount(source) {
  // Hitung pemisah slide di luar blok kode, lalu kurangi dua pembatas front-matter.
  const lines = source.split(/\r?\n/)
  let fences = 0
  let separators = 0
  for (const line of lines) {
    if (/^\s*(`{3,}|~{3,})/.test(line)) fences++
    else if (fences % 2 === 0 && /^\s*-{3,}\s*$/.test(line)) separators++
  }
  const hasFrontMatter = /^---\r?\n/.test(source)
  return separators - (hasFrontMatter ? 2 : 0) + 1
}

/* --------------------------------------------------------------------- build */

mkdirSync(DIST, { recursive: true })

const decks = readdirSync(SLIDES)
  .filter((f) => f.endsWith('.md') && !f.startsWith('_') && !f.startsWith('.'))
  .sort()

if (decks.length === 0) {
  console.error('tidak ada deck .md di slides/')
  process.exit(1)
}

const [bin, ...binArgs] = marpBin()
let failed = 0
const built = []

for (const file of decks) {
  const slug = basename(file, '.md')
  const src = join(SLIDES, file)
  const out = join(DIST, `${slug}.html`)
  const res = spawnSync(bin, [...binArgs, src, '-o', out, '--allow-local-files'], {
    cwd: ROOT,
    encoding: 'utf8',
    // marp.cmd (Windows) adalah skrip batch, jadi butuh shell. Di Linux/macOS
    // node_modules/.bin/marp adalah skrip biasa dan shell tidak diperlukan.
    shell: process.platform === 'win32',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  if (res.status !== 0) {
    failed++
    const why = res.error
      ? String(res.error.message)
      : (res.stderr || res.stdout || '').trim().split('\n').slice(-4).join('\n')
    console.error(`GAGAL HTML ${slug}: ${why || 'kode keluar ' + res.status}`)
    continue
  }
  const meta = frontMatter(readFileSync(src, 'utf8'))
  built.push({
    slug,
    title: meta.title || slug,
    description: meta.description || '',
    slides: slideCount(readFileSync(src, 'utf8')),
    hasPdf: existsSync(join(DIST, `${slug}.pdf`)),
  })
  console.log(`ok   dist/${slug}.html`)
}

// HTML Marp tidak menyalin gambar lokal, jadi dist/assets harus ada agar
// referensi `assets/diagrams/...` pada deck HTML tetap menemukan berkasnya.
if (existsSync(join(SLIDES, 'assets'))) {
  cpSync(join(SLIDES, 'assets'), join(DIST, 'assets'), { recursive: true })
  console.log('ok   dist/assets/')
}

writeFileSync(join(DIST, '.nojekyll'), '')

const cards = built
  .map((d) => {
    const links = [
      `<a class="primary" href="./${esc(d.slug)}.html">HTML</a>`,
      d.hasPdf ? `<a href="./${esc(d.slug)}.pdf">PDF</a>` : '',
    ].filter(Boolean).join(' · ')
    const desc = d.description ? `<p>${esc(d.description)}</p>` : ''
    return `    <article>
      <h2>${esc(d.title)}</h2>
      ${desc}
      <p class="meta">${d.slides} slide · ${links}</p>
    </article>`
  })
  .join('\n')

const index = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Slide Kuliah</title>
<style>
  :root { --ink: #111827; --muted: #6b7280; --accent: #1d4ed8; --border: #e5e7eb; }
  * { box-sizing: border-box; }
  body { margin: 0; padding: 64px 24px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; color: var(--ink); line-height: 1.5; }
  main { max-width: 780px; margin: 0 auto; }
  h1 { font-size: 34px; margin: 0 0 8px; }
  .lead { color: var(--muted); margin: 0 0 40px; }
  article { border-top: 1px solid var(--border); padding: 22px 0; }
  article h2 { font-size: 20px; margin: 0 0 6px; }
  article p { margin: 0 0 6px; }
  .meta { color: var(--muted); font-size: 15px; }
  a { color: var(--accent); }
  a.primary { font-weight: 600; }
</style>
</head>
<body>
<main>
  <h1>Slide Kuliah</h1>
  <p class="lead">Buka versi HTML untuk mengajar (tekan <code>p</code> untuk presenter view), atau PDF untuk handout.</p>
${cards}
</main>
</body>
</html>
`
writeFileSync(join(DIST, 'index.html'), index)
console.log(`ok   dist/index.html (${built.length} deck)`)

if (failed > 0) {
  console.error(`\n${failed} deck gagal dirender.`)
  process.exit(1)
}
