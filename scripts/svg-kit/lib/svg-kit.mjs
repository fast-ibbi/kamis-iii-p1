// svg-kit.mjs — the diagram vocabulary for teaching slides.
//
// Design contract (these are not suggestions):
//   1. A spec names a PATTERN and supplies DATA. It never types a coordinate.
//      Geometry, spacing, wrapping and text fitting all live in here.
//   2. Text is measured before it is drawn. If a label cannot fit its box at a
//      projected-legible size, the build fails naming the exact string. Nothing
//      illegible is ever allowed to reach a slide.
//   3. Six patterns, closed set. If content fits none of them, that is the signal
//      that the slide should stay text — not a prompt to invent a seventh shape.
//
// Every pattern returns { svg, labels } where labels is every string drawn, in
// order, so the caller can check each one against the source slide.

import { loadTheme, toneOf } from './theme.mjs'

/* ------------------------------------------------------------------ limits */

export const PAD = 24
export const MAX_WIDTH = 1160
export const MAX_HEIGHT = 520
export const MIN_FONT = 14 // projected-legibility floor at 1120px display width
export const DEFAULT_CANVAS = { width: 1160, height: 474 }

/** Thrown when content does not fit its pattern. The message is the deliverable. */
export class FitError extends Error {
  constructor(message) {
    super(message)
    this.name = 'FitError'
  }
}

/* -------------------------------------------------------------- text metric */

// Helvetica/Arial advance widths in 1/1000 em. Used to measure before drawing.
// Unknown glyphs fall back to 0.6em, which over-estimates Latin-1 cover and
// therefore errs on the safe side (a box is never declared fitting when it isn't).
const ADV = {
  ' ': 0.278, '!': 0.278, '"': 0.355, '#': 0.556, '$': 0.556, '%': 0.889, '&': 0.667,
  "'": 0.191, '(': 0.333, ')': 0.333, '*': 0.389, '+': 0.584, ',': 0.278, '-': 0.333,
  '.': 0.278, '/': 0.278, ':': 0.278, ';': 0.278, '<': 0.584, '=': 0.584, '>': 0.584,
  '?': 0.556, '@': 1.015, '[': 0.278, '\\': 0.278, ']': 0.278, '^': 0.469, '_': 0.556,
  '`': 0.333, '{': 0.334, '|': 0.26, '}': 0.334, '~': 0.584,
  '0': 0.556, '1': 0.556, '2': 0.556, '3': 0.556, '4': 0.556,
  '5': 0.556, '6': 0.556, '7': 0.556, '8': 0.556, '9': 0.556,
  A: 0.667, B: 0.667, C: 0.722, D: 0.722, E: 0.667, F: 0.611, G: 0.778, H: 0.722,
  I: 0.278, J: 0.5, K: 0.667, L: 0.556, M: 0.833, N: 0.722, O: 0.778, P: 0.667,
  Q: 0.778, R: 0.722, S: 0.667, T: 0.611, U: 0.722, V: 0.667, W: 0.944, X: 0.667,
  Y: 0.667, Z: 0.611,
  a: 0.556, b: 0.556, c: 0.5, d: 0.556, e: 0.556, f: 0.278, g: 0.556, h: 0.556,
  i: 0.222, j: 0.222, k: 0.5, l: 0.222, m: 0.833, n: 0.556, o: 0.556, p: 0.556,
  q: 0.556, r: 0.333, s: 0.5, t: 0.278, u: 0.556, v: 0.5, w: 0.722, x: 0.5,
  y: 0.5, z: 0.5,
}

export function measure(text, size, { mono = false, bold = false } = {}) {
  const s = String(text ?? '')
  let em = 0
  for (const ch of s) em += mono ? 0.6 : (ADV[ch] ?? 0.6)
  if (bold) em *= 1.04
  return em * size
}

/**
 * Greedy word wrap. Throws instead of clipping.
 * A single unbreakable word wider than the box is a hard failure, not a scroll.
 */
export function wrap(text, maxWidth, size, opts = {}) {
  const { maxLines = 2, mono = false, bold = false, what = 'label' } = opts
  const words = String(text ?? '').trim().split(/\s+/).filter(Boolean)
  if (!words.length) throw new FitError(`${what}: empty text — every box needs a label`)

  const lines = []
  let line = ''
  for (const word of words) {
    const w = measure(word, size, { mono, bold })
    if (w > maxWidth) {
      throw new FitError(
        `${what}: the word "${word}" alone is ${Math.round(w)}px wide but the box allows ` +
          `${Math.round(maxWidth)}px at ${size}px. Shorten it or pick a pattern with more room.`,
      )
    }
    const next = line ? `${line} ${word}` : word
    if (measure(next, size, { mono, bold }) <= maxWidth) {
      line = next
    } else {
      lines.push(line)
      line = word
    }
  }
  if (line) lines.push(line)

  if (lines.length > maxLines) {
    throw new FitError(
      `${what}: "${String(text).trim()}" needs ${lines.length} lines at ${size}px but only ` +
        `${maxLines} fit in this box. Trim it to fit — do not shrink the font.`,
    )
  }
  return lines
}

/** Assert wrapped text occupies its box. Called after wrap, before drawing. */
function fitText(text, box, opts) {
  const lines = wrap(text, box.width, opts.size, opts)
  const lineHeight = opts.size * 1.32
  const height = lines.length * lineHeight
  if (height > box.height + 0.5) {
    throw new FitError(
      `${opts.what ?? 'label'}: "${String(text).trim()}" is ${Math.round(height)}px tall ` +
        `(${lines.length} lines) but the box is ${Math.round(box.height)}px. Reduce the text.`,
    )
  }
  return { lines, lineHeight, height }
}

/* --------------------------------------------------------------- primitives */

const xml = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const num = (n) => {
  const r = Math.round(n * 100) / 100
  return Number.isInteger(r) ? String(r) : String(r)
}

const TONE_KEYS = ['neutral', 'acc', 'ink', 'code', 'red', 'green', 'amber', 'slate']

function markerId(toneKey) {
  return `a-${toneKey}`
}

function defs(palette, tones) {
  const markers = TONE_KEYS.map((k) => {
    const t = tones[k]
    return (
      `<marker id="${markerId(k)}" viewBox="0 0 10 10" refX="9" refY="5" ` +
      `markerWidth="6" markerHeight="6" orient="auto-start-reverse">` +
      `<path d="M0 0 L10 5 L0 10 z" fill="${t.fg}"/></marker>`
    )
  }).join('')

  return (
    '<defs>' +
    markers +
    '<filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">' +
    '<feDropShadow dx="0" dy="1" stdDeviation="1.6" flood-color="#000" flood-opacity="0.06"/>' +
    '</filter>' +
    '</defs>'
  )
}

function styles(palette) {
  return (
    '<style>' +
    `.t{font-family:${palette.sans.replace(/"/g, "'")};fill:${palette.ink}}` +
    `.m{font-family:${palette.mono.replace(/"/g, "'")};fill:${palette.ink}}` +
    `.mu{fill:${palette.muted}}` +
    `.mid{text-anchor:middle}.end{text-anchor:end}` +
    `.b6{font-weight:600}.b7{font-weight:700}` +
    '.s13{font-size:13px}.s14{font-size:14px}.s15{font-size:15px}.s16{font-size:16px}' +
    '.s17{font-size:17px}.s18{font-size:18px}.s19{font-size:19px}.s20{font-size:20px}' +
    '.s22{font-size:22px}.s24{font-size:24px}' +
    '</style>'
  )
}

const sizeClass = (n) => `s${Math.min(24, Math.max(13, Math.round(n)))}`

class Canvas {
  constructor(width, height, palette, tones) {
    this.width = width
    this.height = height
    this.palette = palette
    this.tones = tones
    this.parts = []
    this.labels = []
    this.rects = []
  }

  text(str, x, y, { size = 16, mono = false, bold = false, tone = null, anchor = 'start', cls = '', collected = true } = {}) {
    if (size < MIN_FONT) {
      throw new FitError(
        `text size ${size}px is below the ${MIN_FONT}px legibility floor — ` +
          `"${str}" would be unreadable when projected.`,
      )
    }
    if (collected) this.labels.push(String(str))
    const fg = tone ? `fill="${this.tones[tone].fg}"` : ''
    const fontCls = mono ? 'm' : 't'
    const weight = bold ? 'b7' : ''
    const anchorCls = anchor === 'middle' ? 'mid' : anchor === 'end' ? 'end' : ''
    this.parts.push(
      `<text class="${fontCls} ${sizeClass(size)} ${weight} ${anchorCls} ${cls}" ` +
        `x="${num(x)}" y="${num(y)}" ${fg}>${xml(str)}</text>`,
    )
  }

  lineOf(str, left, top, box, opts) {
    const { lines, lineHeight } = fitText(str, box, opts)
    const anchor = opts.anchor ?? 'start'
    const x = anchor === 'middle' ? left + box.width / 2 : anchor === 'end' ? left + box.width : left
    const blockTop = top + (box.height - lines.length * lineHeight) / 2
    lines.forEach((ln, i) => {
      const y = blockTop + i * lineHeight + opts.size * 0.8
      this.text(ln, x, y, { ...opts, anchor })
    })
    return lines.length
  }

  // `register: false` opts a rect out of finalize()'s overlap guard. Only the
  // mockup pattern uses it: a box model nests by definition, so containment is
  // asserted against the parent instead of being reported as an overlap.
  rect(x, y, w, h, { fill = 'none', stroke = 'none', rx = 0, sw = 1.5, dash = null, register = true } = {}) {
    if (x < -0.5 || y < -0.5 || x + w > this.width + 0.5 || y + h > this.height + 0.5) {
      throw new FitError(
        `a ${Math.round(w)}×${Math.round(h)} box at (${Math.round(x)},${Math.round(y)}) ` +
          `falls outside the ${this.width}×${this.height} canvas. Reduce the content.`,
      )
    }
    const dashAttr = dash ? ` stroke-dasharray="${dash}"` : ''
    this.parts.push(
      `<rect x="${num(x)}" y="${num(y)}" width="${num(w)}" height="${num(h)}" rx="${num(rx)}" ` +
        `fill="${fill}" stroke="${stroke}" stroke-width="${num(sw)}"${dashAttr}/>`,
    )
    if (register && (fill !== 'none' || stroke !== 'none')) this.rects.push({ x, y, w, h })
  }

  path(d, { fill = 'none', stroke = 'none', sw = 1.5, marker = null, dash = null } = {}) {
    const mEnd = marker ? ` marker-end="url(#${markerId(marker)})"` : ''
    const dashAttr = dash ? ` stroke-dasharray="${dash}"` : ''
    this.parts.push(
      `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${num(sw)}" ` +
        `stroke-linecap="round" stroke-linejoin="round"${mEnd}${dashAttr}/>`,
    )
  }

  arrow(x1, y1, x2, y2, { stroke, marker = true, sw = 1.5, dash = null } = {}) {
    const dashAttr = dash ? ` stroke-dasharray="${dash}"` : ''
    const mEnd = marker ? ` marker-end="url(#${markerId(stroke)})"` : ''
    this.parts.push(
      `<line x1="${num(x1)}" y1="${num(y1)}" x2="${num(x2)}" y2="${num(y2)}" ` +
        `stroke="${this.tones[stroke].fg}" stroke-width="${num(sw)}" ` +
        `stroke-linecap="round"${dashAttr}${mEnd}/>`,
    )
  }

  badge(cx, cy, label, { r = 13, tone = 'acc', size = 15 } = {}) {
    const t = this.tones[tone]
    this.parts.push(
      `<circle cx="${num(cx)}" cy="${num(cy)}" r="${num(r)}" fill="${t.soft}" ` +
        `stroke="${t.border}" stroke-width="1.5"/>`,
    )
    this.text(String(label), cx, cy + size * 0.36, {
      size,
      bold: true,
      tone,
      anchor: 'middle',
      collected: false,
    })
  }

  // Panels must not overlap; checked once at finalize.
  // `centered: true` is the label-only shape: one tinted box, label in the middle,
  // no header band. A header band with no body underneath reads as an empty card.
  panel(x, y, w, h, { title = null, tone = 'neutral', titleSize = 17, body = null, rx = 12, centered = false } = {}) {
    const t = this.tones[tone]
    this.rect(x, y, w, h, {
      fill: centered && tone !== 'neutral' ? t.soft : '#ffffff',
      stroke: t.border,
      rx,
      sw: 1.5,
    })
    if (centered) {
      if (!title) throw new FitError('a centered panel needs a title')
      this.lineOf(title, x + 14, y, { width: w - 28, height: h }, {
        size: titleSize,
        bold: true,
        anchor: 'middle',
        tone: tone === 'neutral' ? null : tone,
        what: `label on a ${tone} box`,
      })
      return { x, y, w, h, innerTop: y }
    }

    const headerH = title ? 46 : 0
    if (title) {
      // header band, then a flat-bottom patch so only the top corners round
      this.parts.push(
        `<path d="M${num(x)} ${num(y + rx)} a${rx} ${rx} 0 0 1 ${rx} ${-rx} h${num(w - 2 * rx)} ` +
          `a${rx} ${rx} 0 0 1 ${rx} ${rx} v${num(headerH - rx)} h${num(-w)} z" fill="${t.soft}"/>`,
      )
      this.parts.push(
        `<line x1="${num(x)}" y1="${num(y + headerH)}" x2="${num(x + w)}" y2="${num(y + headerH)}" ` +
          `stroke="${t.border}" stroke-width="1"/>`,
      )
      this.lineOf(title, x + 18, y, { width: w - 36, height: headerH }, {
        size: titleSize,
        bold: true,
        tone: tone === 'neutral' ? null : tone,
        what: `panel title on a ${tone} panel`,
      })
    }
    if (body !== null) {
      this.lineOf(body, x + 18, y + headerH + 10, { width: w - 36, height: h - headerH - 20 }, {
        size: 16,
        what: 'panel body',
      })
    }
    return { x, y, w, h, innerTop: y + headerH }
  }

  finalize(title, altText) {
    const overlaps = []
    const rs = this.rects
    for (let i = 0; i < rs.length; i++) {
      for (let j = i + 1; j < rs.length; j++) {
        const a = rs[i]
        const b = rs[j]
        const w = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)
        const h = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y)
        if (w > 1 && h > 1) overlaps.push(`${Math.round(w)}×${Math.round(h)}px`)
      }
    }
    if (overlaps.length) {
      throw new FitError(
        `panels overlap by ${overlaps.join(', ')} — the content is too wide for this canvas ` +
          `(${this.width}×${this.height}). Reduce the item count or shorten the text.`,
      )
    }

    const desc = altText || title || 'Diagram'
    return (
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this.width} ${this.height}" ` +
      `width="${this.width}" height="${this.height}" role="img" aria-label="${xml(desc)}">` +
      `<title>${xml(desc)}</title>` +
      defs(this.palette, this.tones) +
      styles(this.palette) +
      `<rect x="0" y="0" width="${this.width}" height="${this.height}" fill="#ffffff"/>` +
      this.parts.join('') +
      '</svg>\n'
    )
  }
}

/* ----------------------------------------------------------------- patterns */

function canvasSize(spec, fallbackHeight) {
  const [w, h] = Array.isArray(spec.canvas) ? spec.canvas : [MAX_WIDTH, fallbackHeight]
  if (w < 320 || w > MAX_WIDTH) {
    throw new FitError(`canvas width ${w} is outside the 320–${MAX_WIDTH} slide budget`)
  }
  if (h < 160 || h > MAX_HEIGHT) {
    throw new FitError(
      `canvas height ${h} is outside the 160–${MAX_HEIGHT} slide budget. A taller diagram ` +
        `cannot share a 16:9 slide with a heading.`,
    )
  }
  return { width: w, height: h }
}

// A diagram should be exactly as tall as its content. Fixed canvases leave dead
// space that pushes the picture away from its caption on the slide. An explicit
// `canvas: [w, h]` in the spec still wins when a layout needs forcing.
function resolveCanvas(data, neededHeight) {
  if (Array.isArray(data.canvas)) return canvasSize({ canvas: data.canvas }, neededHeight)
  const h = Math.round(Math.min(MAX_HEIGHT, Math.max(160, neededHeight)))
  return { width: MAX_WIDTH, height: h }
}

/* 1 — flow: a chain of stages joined by labelled edges --------------------- */
export const flow = {
  name: 'flow',
  use: 'A depends on B depends on C — data or control moving through fixed stages.',
  imgWidth: 1120,
  height: 300,
  render({ data }, ctx) {
    const steps = data.steps ?? []
    if (steps.length < 2 || steps.length > 5) {
      throw new FitError(
        `flow takes 2–5 stages, got ${steps.length}. A one-step "flow" is a definition; ` +
          `six or more stages need a table or a lower-detail diagram.`,
      )
    }
    const edges = data.edges ?? []
    if (edges.length !== steps.length - 1) {
      throw new FitError(
        `flow with ${steps.length} stages needs exactly ${steps.length - 1} edge labels, ` +
          `got ${edges.length}.`,
      )
    }

    const boxH = 76
    const noteH = 44
    const { width, height } = resolveCanvas(data, 2 * PAD + boxH + 16 + noteH)
    const c = new Canvas(width, height, ctx.palette, ctx.tones)

    const n = steps.length
    const gap = n <= 3 ? 118 : n === 4 ? 100 : 86
    const boxW = (width - 2 * PAD - (n - 1) * gap) / n
    const rowY = PAD

    steps.forEach((step, i) => {
      const x = PAD + i * (boxW + gap)
      const tone = step.tone ?? (i === n - 1 ? 'acc' : 'neutral')
      c.panel(x, rowY, boxW, boxH, {
        title: step.label,
        tone,
        titleSize: 17,
        centered: true,
      })
      if (step.note) {
        c.lineOf(step.note, x, rowY + boxH + 10, { width: boxW, height: noteH }, {
          size: 14,
          tone: 'muted',
          anchor: 'middle',
          what: `note under stage "${step.label}"`,
        })
      }
      if (i < n - 1) {
        const ax = x + boxW
        const ax2 = x + boxW + gap
        const ay = rowY + boxH / 2
        c.arrow(ax + 6, ay, ax2 - 6, ay, { stroke: 'slate' })
        const labW = gap - 12
        const labTone = edges[i].tone ?? 'acc'
        // edge labels sit above the arrow; wrap allows 2 lines in the gap
        const { lines, lineHeight } = fitText(edges[i], { width: labW, height: 40 }, {
          size: 14,
          maxLines: 2,
          what: `edge label "${edges[i]}" between stages ${i + 1} and ${i + 2}`,
        })
        lines.forEach((ln, k) => {
          c.text(ln, ax + gap / 2, ay - 10 - (lines.length - 1 - k) * lineHeight, {
            size: 14,
            tone: labTone,
            anchor: 'middle',
            bold: true,
          })
        })
      }
    })
    return c
  },
}

/* 2 — layers: a stack where each layer sits on the one below ----------------- */
export const layers = {
  name: 'layers',
  use: 'Architecture strata — app / bridge / native, or any containment stack.',
  imgWidth: 1120,
  height: 360,
  render({ data }, ctx) {
    const list = data.layers ?? []
    if (list.length < 2 || list.length > 6) {
      throw new FitError(
        `layers takes 2–6 layers, got ${list.length}. One layer is not a stack; ` +
          `seven or more belongs in a table.`,
      )
    }
    const n = list.length
    const gap = 6
    const bandH = 72
    const { width, height } = resolveCanvas(data, 2 * PAD + n * bandH + (n - 1) * gap)
    const c = new Canvas(width, height, ctx.palette, ctx.tones)
    if (bandH < 52) {
      throw new FitError(
        `${n} layers leave only ${Math.round(bandH)}px per band on a ${height}px canvas ` +
          `(minimum 52px). Raise canvas height or merge layers.`,
      )
    }

    list.forEach((layer, i) => {
      const y = PAD + i * (bandH + gap)
      const tone = layer.tone ?? (i === 0 ? 'acc' : 'neutral')
      const t = ctx.tones[tone]
      c.rect(PAD, y, width - 2 * PAD, bandH, {
        fill: tone === 'neutral' ? '#ffffff' : t.soft,
        stroke: t.border,
        rx: 10,
      })
      const hasNote = Boolean(layer.note)
      const labelW = hasNote ? (width - 2 * PAD) * 0.46 : width - 2 * PAD - 40
      c.lineOf(layer.label, PAD + 20, y, { width: labelW, height: bandH }, {
        size: 18,
        bold: true,
        tone: tone === 'neutral' ? null : tone,
        what: `layer label "${layer.label}"`,
      })
      if (hasNote) {
        c.lineOf(layer.note, PAD + 20 + labelW + 16, y, {
          width: width - 2 * PAD - labelW - 56,
          height: bandH,
        }, {
          size: 15,
          tone: 'muted',
          anchor: 'end',
          what: `note on layer "${layer.label}"`,
        })
      }
      if (i < n - 1) void 0
    })
    return c
  },
}

/* 3 — beforeAfter: two panels, parallel rows -------------------------------- */
export const beforeAfter = {
  name: 'beforeAfter',
  use: 'A mental-model shift: imperative vs declarative, class vs hooks, wrong vs right.',
  imgWidth: 1120,
  height: 430,
  render({ data }, ctx) {
    for (const side of ['left', 'right']) {
      if (!data[side]?.title) throw new FitError(`${side}: beforeAfter needs a title on each panel`)
      const items = data[side].items ?? []
      if (items.length < 1 || items.length > 5) {
        throw new FitError(
          `${side} panel has ${items.length} items; beforeAfter allows 1–5 per side. ` +
            `More than five rows per half cannot stay legible side by side.`,
        )
      }
    }
    const { width, height } = resolveCanvas(
      data,
      2 * PAD + 46 + Math.max(data.left.items?.length ?? 0, data.right.items?.length ?? 0) * 58 + 12,
    )
    const c = new Canvas(width, height, ctx.palette, ctx.tones)

    const gap = 32
    const panelW = (width - 2 * PAD - gap) / 2
    const panelH = height - 2 * PAD

    ;['left', 'right'].forEach((side, idx) => {
      const spec = data[side]
      const x = PAD + idx * (panelW + gap)
      const tone = spec.tone ?? (idx === 0 ? 'red' : 'acc')
      const box = c.panel(x, PAD, panelW, panelH, { title: spec.title, tone, titleSize: 18 })

      const items = spec.items
      // monospace is a property of the panel, not of the row: mixing mono and
      // sans inside one list looks like a rendering accident rather than intent.
      const codeish = /[(){}[\];=<>]|=>|\bconst\b|\bfunction\b/
      const mono = spec.mono ?? items.filter((s) => codeish.test(s)).length * 2 >= items.length
      const rowH = 58
      const top = box.innerTop + 12
      items.forEach((item, i) => {
        const y = top + i * rowH
        c.badge(x + 30, y + rowH / 2, i + 1, { tone, r: 13, size: 14 })
        c.lineOf(item, x + 52, y, { width: panelW - 52 - 18, height: rowH }, {
          size: mono ? 15 : 16,
          mono,
          what: `${side} item ${i + 1} — "${item}"`,
        })
      })
      if (spec.footer) {
        c.lineOf(spec.footer, x + 18, PAD + panelH - 32, { width: panelW - 36, height: 26 }, {
          size: 14,
          tone,
          what: `${side} footer`,
        })
      }
    })
    return c
  },
}

/* 4 — tree: a root and who hangs off it ------------------------------------- */
export const tree = {
  name: 'tree',
  use: 'Containment — component tree, project structure, navigation stack.',
  imgWidth: 1120,
  height: 430,
  render({ data }, ctx) {
    const root = data.root
    if (!root?.label) throw new FitError('tree needs a root label')
    const kids = root.children ?? data.children ?? []
    if (!kids.length) throw new FitError('tree needs at least one child under the root')

    let total = 1
    let maxDepth = 0
    const count = (node, depth) => {
      total++
      maxDepth = Math.max(maxDepth, depth)
      for (const k of node.children ?? []) count(k, depth + 1)
    }
    for (const k of kids) count(k, 2)
    if (total > 9) {
      throw new FitError(
        `tree has ${total} nodes; the limit is 9 — beyond that the picture stops being ` +
          `readable at slide size. Group siblings or split into two diagrams.`,
      )
    }
    if (maxDepth > 3) {
      throw new FitError(`tree is ${maxDepth} levels deep; the limit is 3. Flatten one level.`)
    }

    const levelW = [218, 300, 300]
    const levelX = [PAD]
    for (let i = 1; i < 3; i++) levelX.push(levelX[i - 1] + levelW[i - 1] + 84)

    // Leaf-based vertical allocation. Every leaf gets a fixed slot; a parent is
    // centred on its children and the root on the whole set. Fixed slots are what
    // stop grandchildren from colliding inside one parent's slice.
    const SLOT = 62
    const NODE_H = 54
    const boxes = []
    let cursor = PAD

    for (const kid of kids) {
      const grand = kid.children ?? []
      if (grand.length) {
        const centers = []
        for (const g of grand) {
          const y = cursor + (SLOT - NODE_H) / 2
          centers.push(y + NODE_H / 2)
          boxes.push({ node: g, level: 2, x: levelX[2], y, w: levelW[2], h: NODE_H })
          cursor += SLOT
        }
        const mid = (centers[0] + centers[centers.length - 1]) / 2
        boxes.push({
          node: kid,
          level: 1,
          x: levelX[1],
          y: mid - NODE_H / 2,
          w: levelW[1],
          h: NODE_H,
        })
      } else {
        const y = cursor + (SLOT - NODE_H) / 2
        boxes.push({ node: kid, level: 1, x: levelX[1], y, w: levelW[1], h: NODE_H })
        cursor += SLOT
      }
    }

    const { width, height } = resolveCanvas(data, cursor + PAD)
    const c = new Canvas(width, height, ctx.palette, ctx.tones)

    const lvl1 = boxes.filter((b) => b.level === 1)
    const topY = Math.min(...lvl1.map((b) => b.y + b.h / 2))
    const botY = Math.max(...lvl1.map((b) => b.y + b.h / 2))
    const rootH = 66
    const rootY = (topY + botY) / 2 - rootH / 2

    // connect: root -> level 1
    const rootBox = { x: levelX[0], y: rootY, w: levelW[0], h: rootH }
    const midX = levelX[0] + levelW[0] + 42
    for (const b of boxes.filter((b) => b.level === 1)) {
      const y1 = rootY + rootH / 2
      const y2 = b.y + b.h / 2
      c.path(
        `M${num(rootBox.x + rootBox.w)} ${num(y1)} H${num(midX)} V${num(y2)} H${num(b.x - 8)}`,
        { stroke: ctx.tones.slate.fg, sw: 1.5 },
      )
      c.parts.push(
        `<path d="M${num(b.x - 8)} ${num(y2)} l-7 -4 v8 z" fill="${ctx.tones.slate.fg}"/>`,
      )
    }
    // connect: level 1 -> level 2
    for (const parent of boxes.filter((b) => b.level === 1)) {
      const grand = boxes.filter(
        (b) => b.level === 2 && (parent.node.children ?? []).includes(b.node),
      )
      if (!grand.length) continue
      const px = parent.x + parent.w + 16
      for (const g of grand) {
        const y1 = parent.y + parent.h / 2
        const y2 = g.y + g.h / 2
        c.path(
          `M${num(parent.x + parent.w)} ${num(y1)} H${num(px)} V${num(y2)} H${num(g.x - 8)}`,
          { stroke: ctx.tones.slate.fg, sw: 1.5 },
        )
        c.parts.push(
          `<path d="M${num(g.x - 8)} ${num(y2)} l-7 -4 v8 z" fill="${ctx.tones.slate.fg}"/>`,
        )
      }
    }

    // draw nodes last so connectors sit behind them
    c.rect(rootBox.x, rootBox.y, rootBox.w, rootBox.h, {
      fill: ctx.tones.acc.soft,
      stroke: ctx.tones.acc.border,
      rx: 10,
    })
    c.lineOf(root.label, rootBox.x + 16, rootBox.y, { width: rootBox.w - 32, height: rootBox.h }, {
      size: 18,
      bold: true,
      tone: 'acc',
      anchor: 'middle',
      what: `root label "${root.label}"`,
    })
    for (const b of boxes) {
      const tone = b.node.tone ?? 'neutral'
      const t = ctx.tones[tone]
      c.rect(b.x, b.y, b.w, b.h, {
        fill: tone === 'neutral' ? '#ffffff' : t.soft,
        stroke: t.border,
        rx: 9,
      })
      c.lineOf(b.node.label, b.x + 14, b.y, { width: b.w - 28, height: b.h }, {
        size: 16,
        mono: /[./<>]/.test(b.node.label),
        what: `node label "${b.node.label}"`,
      })
    }
    return c
  },
}

/* 5 — sequence: messages exchanged over time -------------------------------- */
export const sequence = {
  name: 'sequence',
  use: 'A protocol exchange — client/server calls, auth handshake, event order.',
  imgWidth: 1120,
  height: 470,
  render({ data }, ctx) {
    const actors = data.actors ?? []
    const messages = data.messages ?? []
    if (actors.length < 2 || actors.length > 4) {
      throw new FitError(`sequence takes 2–4 actors, got ${actors.length}`)
    }
    if (messages.length < 2 || messages.length > 7) {
      throw new FitError(
        `sequence takes 2–7 messages, got ${messages.length}. Beyond seven the lifelines ` +
          `get shorter than the text beside them.`,
      )
    }
    const { width, height } = resolveCanvas(data, 2 * PAD + 46 + messages.length * 56)
    const c = new Canvas(width, height, ctx.palette, ctx.tones)

    const usable = width - 2 * PAD
    const colW = usable / actors.length
    const headH = 46
    const actorX = actors.map((_, i) => PAD + colW * (i + 0.5))
    // Actor headers are labels, not banners: cap the width and centre them on
    // their column so the lifeline reads as belonging to a named participant.
    const headW = Math.min(260, colW - 40)

    actors.forEach((actor, i) => {
      const x = actorX[i] - headW / 2
      c.rect(x, PAD, headW, headH, {
        fill: i === 0 ? ctx.tones.acc.soft : ctx.tones.neutral.soft,
        stroke: i === 0 ? ctx.tones.acc.border : ctx.tones.border,
        rx: 9,
      })
      c.lineOf(actor, x + 10, PAD, { width: headW - 20, height: headH }, {
        size: 16,
        bold: true,
        anchor: 'middle',
        tone: i === 0 ? 'acc' : null,
        what: `actor "${actor}"`,
      })
      // Lifelines must be visible from across a room; the theme border colour is
      // too pale for a 1.5px dashed line, so use the slate tone instead.
      c.parts.push(
        `<line x1="${num(actorX[i])}" y1="${num(PAD + headH + 6)}" ` +
          `x2="${num(actorX[i])}" y2="${num(height - PAD)}" ` +
          `stroke="${ctx.tones.slate.fg}" stroke-width="1.5" stroke-dasharray="5 5" ` +
          `stroke-linecap="round"/>`,
      )
    })

    const top = PAD + headH + 26
    const stepH = (height - PAD - top) / messages.length
    const minStep = 34
    if (stepH < minStep) {
      throw new FitError(
        `${messages.length} messages leave ${Math.round(stepH)}px each on a ${height}px canvas ` +
          `(minimum ${minStep}px). Drop a message or raise the canvas height.`,
      )
    }

    messages.forEach((msg, i) => {
      const y = top + stepH * i + stepH / 2
      const from = actors.indexOf(msg.from)
      const to = actors.indexOf(msg.to)
      if (from < 0) throw new FitError(`message ${i + 1} names unknown actor "${msg.from}"`)
      if (to < 0) throw new FitError(`message ${i + 1} names unknown actor "${msg.to}"`)
      const tone = msg.tone ?? 'slate'

      if (from === to) {
        // self-call: a small loop to the right of the lifeline
        const x = actorX[from]
        c.path(`M${num(x)} ${num(y - 12)} h34 v24 h-34`, { stroke: ctx.tones[tone].fg, sw: 1.5 })
        c.parts.push(
          `<path d="M${num(x + 6)} ${num(y + 12)} l8 -4 v8 z" fill="${ctx.tones[tone].fg}"/>`,
        )
        c.text(msg.label, x + 46, y + 5, { size: 14, anchor: 'start', bold: true })
        return
      }

      const x1 = actorX[from] + (to > from ? 12 : -12)
      const x2 = actorX[to] + (to > from ? -12 : 12)
      c.arrow(x1, y, x2, y, { stroke: tone })
      const labW = Math.abs(x2 - x1) - 16
      const { lines, lineHeight } = fitText(msg.label, { width: labW, height: 38 }, {
        size: 14,
        maxLines: 2,
        what: `message ${i + 1} "${msg.label}"`,
      })
      lines.forEach((ln, k) => {
        c.text(ln, (x1 + x2) / 2, y - 8 - (lines.length - 1 - k) * lineHeight, {
          size: 14,
          anchor: 'middle',
          bold: true,
        })
      })
    })
    return c
  },
}

/* 6 — stateMachine: named states and the transitions between them ------------ */
//
// Laid out as a single row of state chips. The reason is legibility: transitions
// that skip over a neighbour, or that loop back, are the whole content of a state
// diagram, and they need vertical room above and below the row to be readable.
// A grid wastes that room and forces arrows straight through unrelated boxes.
export const stateMachine = {
  name: 'stateMachine',
  use: 'A mode set that changes on events — auth, loading, form states.',
  imgWidth: 1040,
  height: 272,
  render({ data }, ctx) {
    const states = data.states ?? []
    const transitions = data.transitions ?? []
    if (states.length < 2 || states.length > 5) {
      throw new FitError(
        `stateMachine takes 2–5 states, got ${states.length}. A row of six cannot keep its ` +
          `transitions readable — split it or use a table.`,
      )
    }
    if (!transitions.length) {
      throw new FitError('stateMachine needs at least one transition — otherwise it is a list')
    }

    const NODE_W = 150
    const NODE_H = 62
    const GAP = 90
    const TOP_ROOM = 96
    const BOTTOM_ROOM = 66

    const rowW = states.length * NODE_W + (states.length - 1) * GAP
    const { width, height } = resolveCanvas(data, 2 * PAD + TOP_ROOM + NODE_H + BOTTOM_ROOM)
    const c = new Canvas(width, height, ctx.palette, ctx.tones)

    const startX = (width - rowW) / 2
    const cy = PAD + TOP_ROOM + NODE_H / 2

    const pos = new Map()
    states.forEach((s, i) => {
      const x = startX + i * (NODE_W + GAP)
      pos.set(s.id, { i, x, y: cy - NODE_H / 2, w: NODE_W, h: NODE_H, cx: x + NODE_W / 2, cy, s })
    })

    const quad = (p0, p1, p2, t) => ({
      x: (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x,
      y: (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y,
    })

    // Does this curve pass through a state it is not attached to?
    const crossesBox = (p0, p1, p2, skip) => {
      for (const [id, b] of pos) {
        if (skip.has(id)) continue
        for (let t = 0.04; t <= 0.96; t += 0.02) {
          const p = quad(p0, p1, p2, t)
          if (p.x > b.x - 8 && p.x < b.x + b.w + 8 && p.y > b.y - 8 && p.y < b.y + b.h + 8) {
            return true
          }
        }
      }
      return false
    }

    // Sample the curve into a polyline and trim the ends to the chip borders, so
    // an arrow starts at an edge instead of at a centre buried under a label.
    const curveInto = (p0, p1, p2, from, to, tone) => {
      const pts = []
      for (let i = 0; i <= 48; i++) pts.push(quad(p0, p1, p2, i / 48))
      const outside = (p, b, pad) =>
        p.x < b.x - pad || p.x > b.x + b.w + pad || p.y < b.y - pad || p.y > b.y + b.h + pad
      let a = 0
      while (a < pts.length - 2 && !outside(pts[a], from, 3)) a++
      let z = pts.length - 1
      while (z > a + 2 && !outside(pts[z], to, 6)) z--
      const d = `M${num(pts[a].x)} ${num(pts[a].y)}` +
        pts.slice(a + 1, z + 1).map((p) => ` L${num(p.x)} ${num(p.y)}`).join('')
      c.parts.push(
        `<path d="${d}" fill="none" stroke="${ctx.tones[tone].fg}" stroke-width="1.6" ` +
          `stroke-linecap="round" stroke-linejoin="round" ` +
          `marker-end="url(#${markerId(tone)})"/>`,
      )
    }

    // Choose the shallowest bow that clears every intervening chip.
    const route = (a, b, up) => {
      const skip = new Set([a.s.id, b.s.id])
      const p0 = { x: a.cx, y: a.cy }
      const p2 = { x: b.cx, y: b.cy }
      const base = up ? 104 : 88
      for (const bow of [base, base + 22, base + 44]) {
        const p1 = { x: (p0.x + p2.x) / 2, y: a.cy + (up ? -bow : bow) }
        if (!crossesBox(p0, p1, p2, skip)) return { p0, p1, p2, bow }
      }
      throw new FitError(
        `stateMachine cannot route "${a.s.label ?? a.s.id}" → "${b.s.label ?? b.s.id}" without ` +
          `crossing another state. Drop an intermediate state or split the diagram.`,
      )
    }

    let drewAny = 0
    for (const tr of transitions) {
      const a = pos.get(tr.from)
      const b = pos.get(tr.to)
      if (!a) throw new FitError(`transition "${tr.label ?? ''}" leaves unknown state "${tr.from}"`)
      if (!b) throw new FitError(`transition "${tr.label ?? ''}" enters unknown state "${tr.to}"`)
      const tone = tr.tone ?? 'slate'

      if (a.i === b.i) {
        // self-transition: a loop above the chip
        const lx = a.cx - 18
        c.path(`M${num(lx)} ${num(a.y)} q0 -46 36 -30`, { stroke: ctx.tones[tone].fg, sw: 1.6 })
        c.parts.push(
          `<path d="M${num(lx + 30)} ${num(a.y - 33)} l6 12 l-13 1 z" fill="${ctx.tones[tone].fg}"/>`,
        )
        if (tr.label) {
          const box = { width: 130, height: 20 }
          c.lineOf(tr.label, a.cx - 65, a.y - 62, box, {
            size: 14,
            anchor: 'middle',
            what: `self-transition label "${tr.label}"`,
          })
        }
        drewAny++
        continue
      }

      if (b.i === a.i + 1) {
        // adjacent forward: a straight arrow, label above the shaft
        const y = a.cy
        c.arrow(a.x + a.w + 4, y, b.x - 4, y, { stroke: tone, sw: 1.6 })
        if (tr.label) {
          c.lineOf(tr.label, a.x + a.w, y - 26, { width: GAP, height: 20 }, {
            size: 14,
            anchor: 'middle',
            what: `transition label "${tr.label}"`,
          })
        }
        drewAny++
        continue
      }

      const up = b.i < a.i
      const { p0, p1, p2 } = route(a, b, up)
      curveInto(p0, p1, p2, a, b, tone)
      if (tr.label) {
        const mid = quad(p0, p1, p2, 0.5)
        c.lineOf(tr.label, mid.x - 70, up ? mid.y - 24 : mid.y + 6, { width: 140, height: 20 }, {
          size: 14,
          anchor: 'middle',
          what: `transition label "${tr.label}"`,
        })
      }
      drewAny++
    }
    void drewAny

    for (const { x, y, w, h, s } of pos.values()) {
      const tone = s.tone ?? (s.id === data.initial ? 'acc' : 'neutral')
      const t = ctx.tones[tone]
      c.rect(x, y, w, h, {
        fill: tone === 'neutral' ? '#ffffff' : t.soft,
        stroke: t.border,
        rx: 12,
        sw: 1.5,
      })
      c.lineOf(s.label ?? s.id, x + 12, y, { width: w - 24, height: h }, {
        size: 16,
        bold: true,
        anchor: 'middle',
        tone: tone === 'neutral' ? null : tone,
        what: `state label "${s.label ?? s.id}"`,
      })
    }

    if (data.initial && pos.has(data.initial)) {
      const p = pos.get(data.initial)
      const sx = p.x - 34
      if (sx > 8) {
        c.parts.push(`<circle cx="${num(sx)}" cy="${num(p.cy)}" r="6" fill="${ctx.palette.ink}"/>`)
        c.arrow(sx + 8, p.cy, p.x - 3, p.cy, { stroke: 'ink' })
      }
    }
    return c
  },
}

/* 7 — mockup: CSS geometry, drawn to scale -------------------------------- */
//
// Every other pattern lays out TEXT: chips, panels, rows. A mockup lays out
// BOXES, so the relationship it draws is geometric — what sits inside what,
// how wide each part really is, and where the leftover space goes. That is the
// one thing a student cannot reconstruct from prose, which is why the pattern
// exists at all.
//
// Containment is legal here and is therefore ASSERTED rather than rejected:
// finalize()'s overlap guard would fire on every nested zone. Zones are drawn
// with `register: false` and checked against their parent by `nested()`.

function fourSides(value, what) {
  const v = Array.isArray(value) ? value : [value, value, value, value]
  if (v.length !== 4 || v.some((n) => !Number.isFinite(n) || n < 0)) {
    throw new FitError(
      `${what} must be a non-negative number or [top, right, bottom, left], got ${JSON.stringify(value)}`,
    )
  }
  return v
}

function nested(outer, inner, what) {
  const eps = 0.5
  if (
    inner.x < outer.x - eps ||
    inner.y < outer.y - eps ||
    inner.x + inner.w > outer.x + outer.w + eps ||
    inner.y + inner.h > outer.y + outer.h + eps
  ) {
    throw new FitError(
      `${what} does not sit inside its parent box — the mockup's own dimensions are inconsistent.`,
    )
  }
}

const mockupWidth = (data) => (Array.isArray(data.canvas) ? data.canvas[0] : MAX_WIDTH)

function mockupBox(data, ctx) {
  const pad = fourSides(data.padding ?? 0, 'padding')
  const bor = fourSides(data.border ?? 0, 'border')
  const mar = fourSides(data.margin ?? 0, 'margin')
  const cw = data.content?.w ?? 240
  const ch = data.content?.h ?? 88
  if (!Number.isFinite(cw) || cw <= 0 || !Number.isFinite(ch) || ch <= 0) {
    throw new FitError('content needs a positive { w, h } in px — the box model math starts there')
  }

  const totalW = cw + pad[1] + pad[3] + bor[1] + bor[3] + mar[1] + mar[3]
  const totalH = ch + pad[0] + pad[2] + bor[0] + bor[2] + mar[0] + mar[2]

  const width = mockupWidth(data)
  const LIST_W = 360
  const GAP_X = 40
  const drawW = width - 2 * PAD - LIST_W - GAP_X
  const drawHMax = 300
  const scale = Math.min(drawW / totalW, drawHMax / totalH)

  const same = (v) => v.every((n) => n === v[0])
  const rows = []
  if (mar.some((n) => n > 0)) {
    rows.push({ tone: 'amber', name: 'margin', value: same(mar) ? `${mar[0]} px` : `${mar.join(' ')} px` })
  }
  if (bor.some((n) => n > 0)) {
    rows.push({
      tone: 'border',
      name: 'border',
      value: same(bor) ? `${bor[0]} px` : `${bor.join(' ')} px`,
    })
  }
  if (pad.some((n) => n > 0)) {
    rows.push({ tone: 'green', name: 'padding', value: same(pad) ? `${pad[0]} px` : `${pad.join(' ')} px` })
  }
  rows.push({ tone: 'acc', name: 'content', value: `${cw} × ${ch} px` })

  const ROW_H = 34
  const listH = rows.length * ROW_H + 8 + 26
  const footerH = data.footer ? 30 : 0
  const neededH = 2 * PAD + Math.max(totalH * scale, listH) + footerH
  const { height } = resolveCanvas(data, neededH)

  const c = new Canvas(width, height, ctx.palette, ctx.tones)
  const areaH = height - 2 * PAD - footerH
  const x0 = PAD + (drawW - totalW * scale) / 2
  const y0 = PAD + (areaH - totalH * scale) / 2
  const R = (mx, my, mw, mh) => ({ x: x0 + mx * scale, y: y0 + my * scale, w: mw * scale, h: mh * scale })

  const marginBox = R(0, 0, totalW, totalH)
  const borderBox = R(mar[3], mar[0], totalW - mar[3] - mar[1], totalH - mar[0] - mar[2])
  const paddingBox = R(
    mar[3] + bor[3],
    mar[0] + bor[0],
    borderBox.w / scale - bor[3] - bor[1],
    borderBox.h / scale - bor[0] - bor[2],
  )
  const contentBox = R(mar[3] + bor[3] + pad[3], mar[0] + bor[0] + pad[0], cw, ch)
  nested(marginBox, borderBox, 'the border box')
  nested(borderBox, paddingBox, 'the padding box')
  nested(paddingBox, contentBox, 'the content box')

  if (mar.some((n) => n > 0)) {
    c.rect(marginBox.x, marginBox.y, marginBox.w, marginBox.h, {
      fill: ctx.tones.amber.soft,
      stroke: ctx.tones.amber.border,
      rx: 6,
      dash: '6 4',
      register: false,
    })
  }
  c.rect(borderBox.x, borderBox.y, borderBox.w, borderBox.h, {
    fill: ctx.palette.border,
    stroke: ctx.palette.muted,
    rx: 4,
    register: false,
  })
  c.rect(paddingBox.x, paddingBox.y, paddingBox.w, paddingBox.h, {
    fill: ctx.tones.green.soft,
    stroke: ctx.tones.green.border,
    rx: 2,
    register: false,
  })
  c.rect(contentBox.x, contentBox.y, contentBox.w, contentBox.h, {
    fill: '#ffffff',
    stroke: ctx.tones.acc.border,
    sw: 1.5,
    rx: 2,
    register: false,
  })

  if (data.content?.label) {
    c.lineOf(data.content.label, contentBox.x + 8, contentBox.y, {
      width: contentBox.w - 16,
      height: contentBox.h,
    }, {
      size: 16,
      bold: true,
      anchor: 'middle',
      what: `content label "${data.content.label}" — shorten it or drop the label`,
    })
  }

  const listX = PAD + drawW + GAP_X
  const listTop = PAD + Math.max(0, (areaH - listH) / 2)
  rows.forEach((row, i) => {
    const y = listTop + i * ROW_H
    // `border` has no tone of its own: the band is the theme's own border colour,
    // which is exactly what the swatch should show.
    const swatch =
      row.tone === 'border'
        ? { fill: ctx.palette.border, stroke: ctx.palette.muted }
        : { fill: ctx.tones[row.tone].soft, stroke: ctx.tones[row.tone].border }
    c.rect(listX, y + 6, 22, 16, { ...swatch, rx: 3, register: false })
    c.text(row.name, listX + 34, y + 20, { size: 16 })
    c.text(row.value, listX + LIST_W, y + 20, { size: 16, anchor: 'end', tone: 'muted' })
  })
  const totalY = listTop + rows.length * ROW_H + 8
  c.text('lebar total', listX, totalY + 18, { size: 16, bold: true })
  c.text(`${totalW} px`, listX + LIST_W, totalY + 18, { size: 16, bold: true, anchor: 'end', tone: 'acc' })

  if (data.footer) {
    c.text(data.footer, PAD, height - 16, { size: 15, tone: 'muted' })
  }
  return c
}

function mockupFlex(data, ctx) {
  const container = data.container ?? 1000
  const items = data.items ?? []
  if (items.length < 2 || items.length > 5) {
    throw new FitError(
      `mockup flex takes 2–5 items, got ${items.length}. One item shows nothing about distribution; ` +
        `six or more cannot stay legible at 14px.`,
    )
  }
  const gap = data.gap ?? 0
  const basis = items.map((it, i) => {
    const b = it.basis
    if (!Number.isFinite(b) || b <= 0) {
      throw new FitError(`flex item ${i + 1} needs a positive "basis" in px — the free space is that arithmetic`)
    }
    return b
  })
  const used = basis.reduce((a, b) => a + b, 0) + gap * (items.length - 1)
  const free = container - used
  if (free < -0.5) {
    throw new FitError(
      `items plus gaps need ${Math.round(used)}px but the container is ${container}px — over by ` +
        `${Math.round(used - container)}px. Fix the numbers, not the picture.`,
    )
  }
  const justify = data.justify ?? 'flex-start'
  const KNOWN = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']
  if (!KNOWN.includes(justify)) {
    throw new FitError(`unknown justify-content "${justify}" — one of ${KNOWN.join(', ')}`)
  }

  let cursor = 0
  let extra = 0
  if (justify === 'flex-end') cursor = free
  else if (justify === 'center') cursor = free / 2
  else if (justify === 'space-around') {
    extra = free / items.length
    cursor = extra / 2
  } else if (justify === 'space-evenly') {
    extra = free / (items.length + 1)
    cursor = extra
  } else if (justify === 'space-between') {
    extra = items.length > 1 ? free / (items.length - 1) : 0
  }

  const spans = []
  items.forEach((it, i) => {
    spans.push({ x: cursor, w: basis[i], item: it })
    cursor += basis[i]
    if (i < items.length - 1) cursor += gap + extra
  })

  const segs = []
  if (spans[0].x > 0.5) segs.push({ x: 0, w: spans[0].x })
  for (let i = 0; i < spans.length - 1; i++) {
    const endA = spans[i].x + spans[i].w
    const leftover = spans[i + 1].x - endA - gap
    if (leftover > 0.5) segs.push({ x: endA + gap, w: leftover })
  }
  const last = spans[spans.length - 1]
  const tail = container - (last.x + last.w)
  if (tail > 0.5) segs.push({ x: container - tail, w: tail })

  const width = mockupWidth(data)
  const bandH = 104
  const neededH = 2 * PAD + 30 + bandH + 46
  const { height } = resolveCanvas(data, neededH)
  const c = new Canvas(width, height, ctx.palette, ctx.tones)

  c.text(`justify-content: ${justify}`, PAD, PAD + 14, { size: 16, bold: true, tone: 'acc' })

  const scale = (width - 2 * PAD) / container
  const bandY = PAD + 30
  const X = (v) => PAD + v * scale

  c.rect(PAD, bandY, container * scale, bandH, {
    fill: '#ffffff',
    stroke: ctx.tones.slate.border,
    rx: 8,
    dash: '6 4',
    register: false,
  })

  for (const seg of segs) {
    c.rect(X(seg.x), bandY + 6, seg.w * scale, bandH - 12, {
      fill: ctx.tones.amber.soft,
      stroke: ctx.tones.amber.border,
      rx: 4,
      dash: '4 3',
      register: false,
    })
    if (seg.w * scale >= 58) {
      c.lineOf(`${Math.round(seg.w)} px`, X(seg.x), bandY + 6, { width: seg.w * scale, height: bandH - 12 }, {
        size: 14,
        anchor: 'middle',
        tone: 'amber',
        what: `free-space label in a ${Math.round(seg.w * scale)}px segment`,
      })
    }
  }

  spans.forEach((span, i) => {
    // Items are peers, not stages: one tone for all of them, so the only
    // contrast in the picture is items versus free space.
    const tone = span.item.tone ?? 'acc'
    const t = ctx.tones[tone]
    c.rect(X(span.x), bandY + 6, span.w * scale, bandH - 12, {
      fill: tone === 'neutral' ? ctx.palette.surface : t.soft,
      stroke: t.border,
      rx: 6,
      register: false,
    })
    c.lineOf(span.item.label ?? `item ${i + 1}`, X(span.x), bandY + 6, {
      width: span.w * scale,
      height: bandH - 12,
    }, {
      size: 15,
      bold: true,
      anchor: 'middle',
      what: `flex item label "${span.item.label}" in a ${Math.round(span.w * scale)}px box`,
    })
    // The basis is what makes the free-space arithmetic checkable by eye:
    // basis sum + gaps + free must land on the container width.
    c.text(`${span.w} px`, X(span.x + span.w / 2), bandY + bandH - 14, {
      size: 14,
      anchor: 'middle',
      tone: 'muted',
    })
  })

  const baseY = bandY + bandH + 20
  // The declared gap needs its own mark. Without it the picture asserts a gap
  // size while drawing only the free spaces, so 24 px is unverifiable by eye —
  // and the whole point of this mockup is that the reader can check the numbers.
  if (gap > 0 && spans.length > 1) {
    const a = spans[0]
    const x1 = X(a.x + a.w)
    const x2 = X(a.x + a.w + gap)
    const tick = bandY + bandH + 5
    c.path(`M${num(x1)} ${num(tick)} v6 H${num(x2)} v-6`, { stroke: ctx.palette.muted, sw: 1.2 })
    c.text(`gap ${gap} px`, (x1 + x2) / 2, tick + 20, { size: 14, anchor: 'middle', tone: 'muted' })
  }
  // One fact per label: provenance matches labels against the slide text, and a
  // compound "wadah X · sisa Y" line can never be quoted naturally in prose.
  c.text(`sisa ${Math.round(free)} px`, width - PAD, baseY + 4, { size: 14, anchor: 'end', tone: 'muted' })
  if (data.footer) {
    c.text(data.footer, width - PAD, baseY + 24, { size: 14, anchor: 'end', tone: 'amber' })
  }
  return c
}

function mockupGrid(data, ctx) {
  const columns = data.columns ?? 12
  if (!Number.isInteger(columns) || columns < 2 || columns > 12) {
    throw new FitError(`mockup grid needs 2–12 columns, got ${JSON.stringify(columns)}`)
  }
  const rows = data.rows ?? []
  if (rows.length < 1 || rows.length > 4) {
    throw new FitError(`mockup grid takes 1–4 rows, got ${rows.length}. More rows cannot stay legible.`)
  }
  const gutter = data.gutter ?? 16
  const container = data.container ?? 1120
  const track = (container - gutter * (columns - 1)) / columns

  const rowSpans = rows.map((row, ri) => {
    if (!row.length) throw new FitError(`grid row ${ri + 1} is empty`)
    const spans = row.map((cell, ci) => {
      const s = cell.span ?? 1
      if (!Number.isInteger(s) || s < 1) {
        throw new FitError(`row ${ri + 1} cell ${ci + 1} needs a positive integer "span"`)
      }
      return s
    })
    const sum = spans.reduce((a, b) => a + b, 0)
    if (sum > columns) {
      throw new FitError(`row ${ri + 1} spans ${sum} of ${columns} columns — over by ${sum - columns}`)
    }
    return spans
  })

  const rowH = 54
  const rowGap = 14
  const legendH = 28
  const RULER_H = 24
  const neededH = 2 * PAD + RULER_H + 10 + rows.length * rowH + (rows.length - 1) * rowGap + legendH
  const width = mockupWidth(data)
  const { height } = resolveCanvas(data, neededH)
  const c = new Canvas(width, height, ctx.palette, ctx.tones)

  const scale = (width - 2 * PAD) / container
  const gutterS = gutter * scale
  const trackS = track * scale
  const X = (v) => PAD + v * scale

  // The ruler is the point of a grid mockup: cells fill the space where the
  // tracks would be, so without stating the tracks the picture shows a stack of
  // boxes and teaches nothing about columns. Drawn once, above the rows.
  for (let col = 0; col < columns; col++) {
    const x = PAD + col * (trackS + gutterS)
    c.rect(x, PAD, trackS, RULER_H, {
      fill: ctx.tones.slate.soft,
      stroke: ctx.tones.slate.border,
      dash: '3 3',
      rx: 2,
      register: false,
    })
    if (trackS >= 18) {
      c.text(String(col + 1), x + trackS / 2, PAD + RULER_H - 7, {
        size: 14,
        anchor: 'middle',
        tone: 'muted',
        collected: false,
      })
    }
  }

  const gridTop = PAD + RULER_H + 10
  for (let r = 0; r < rows.length; r++) {
    const y = gridTop + r * (rowH + rowGap)
    let col = 0
    rowSpans[r].forEach((span, ci) => {
      const cell = rows[r][ci]
      const x = PAD + col * (trackS + gutterS)
      const w = span * trackS + (span - 1) * gutterS
      const tone = cell.tone ?? 'acc'
      const t = ctx.tones[tone]
      c.rect(x, y, w, rowH, {
        fill: t.soft,
        stroke: t.border,
        sw: 1.5,
        rx: 4,
        register: false,
      })
      c.lineOf(cell.label ?? `col-${span}`, x, y, { width: w, height: rowH }, {
        size: 15,
        bold: true,
        anchor: 'middle',
        what: `grid cell label "${cell.label}" in a ${span}-span cell`,
      })
      col += span
    })
  }

  c.text(`${columns} kolom`, PAD, height - 14, { size: 14, tone: 'muted' })
  if (data.footer) {
    c.text(data.footer, width - PAD, height - 14, { size: 14, anchor: 'end', tone: 'muted' })
  }
  return c
}

export const mockup = {
  name: 'mockup',
  use: 'CSS geometry to scale — box-model zones, flex free space, grid spans.',
  imgWidth: 1120,
  height: 380,
  render({ data }, ctx) {
    const kind = data.kind
    if (kind === 'box') return mockupBox(data, ctx)
    if (kind === 'flex') return mockupFlex(data, ctx)
    if (kind === 'grid') return mockupGrid(data, ctx)
    throw new FitError(
      `mockup needs "kind": "box", "flex" or "grid" — got ${JSON.stringify(kind)}. ` +
        `Boxes with no geometry in them belong in flow/beforeAfter, not here.`,
    )
  },
}

export const PATTERNS = { flow, layers, beforeAfter, tree, sequence, stateMachine, mockup }

/* --------------------------------------------------------------- dispatcher */

/**
 * Render one spec.
 *
 * @param {object} spec  { id, slide, pattern, data, canvas?, imgWidth?, alt? }
 * @param {object} ctx   { palette, tones }
 * @returns {{ svg: string, labels: string[], imgWidth: number, pattern: string }}
 */
export function render(spec, ctx) {
  const pattern = PATTERNS[spec.pattern]
  if (!pattern) {
    throw new FitError(
      `unknown pattern "${spec.pattern}". The set is closed: ${Object.keys(PATTERNS).join(', ')}. ` +
        `If the content fits none of these, the slide should stay text.`,
    )
  }
  const canvas = pattern.render({ data: spec.data ?? {} }, ctx)
  const svg = canvas.finalize(spec.alt, spec.alt)
  return {
    svg,
    labels: canvas.labels,
    imgWidth: spec.imgWidth ?? pattern.imgWidth,
    pattern: pattern.name,
  }
}

export { loadTheme, toneOf }
