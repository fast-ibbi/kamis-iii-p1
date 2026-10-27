// theme.mjs — read a Marp theme's design tokens so diagrams match the deck.
//
// The kit is shared across projects; the palette is not. Every diagram colour and
// font comes from the deck's own `slides/theme/*.css`, parsed out of the `:root`
// custom properties block. Change the theme once, rebuild, and every diagram follows.
//
// Degrades honestly: a missing token or a missing file falls back to the academic
// defaults below, and the caller is told which tokens were defaulted.

import { readFileSync, existsSync } from 'node:fs'

/* --------------------------------------------------------------- fallbacks */

// Mirrors marp-slides/templates/theme-academic.css. Used only when the deck
// theme is absent or a token is missing — never silently for a token that exists.
export const FALLBACK = {
  accent: '#1d4ed8',
  accentSoft: '#eef2ff',
  ink: '#111827',
  muted: '#6b7280',
  surface: '#f8fafc',
  border: '#e5e7eb',
  codeBg: '#f6f8fa',
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
  mono: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace",
}

// Semantic tones are derived, not read from the theme: the theme supplies one
// accent and neutrals, while teaching diagrams need pass / fail / caution hues.
// These are tuned to sit beside --accent without competing with it.
const SEMANTIC = {
  red: { fg: '#b91c1c', soft: '#fef2f2', border: '#fecaca' },
  green: { fg: '#15803d', soft: '#f0fdf4', border: '#bbf7d0' },
  amber: { fg: '#b45309', soft: '#fffbeb', border: '#fde68a' },
  slate: { fg: '#94a3b8', soft: '#f8fafc', border: '#e5e7eb' },
}

// --accent-soft and friends are often missing from small themes; derive them
// from the base token instead of pretending a default belongs here.
const CSS_VAR = {
  accent: ['--accent'],
  accentSoft: ['--accent-soft'],
  ink: ['--ink', '--text'],
  muted: ['--muted', '--text-muted'],
  surface: ['--surface', '--bg-soft'],
  border: ['--border', '--rule'],
  codeBg: ['--code-bg', '--code'],
  sans: ['--sans', '--font-sans'],
  mono: ['--mono', '--font-mono'],
}

/* ------------------------------------------------------------------ parsing */

// Pull `name: value;` pairs out of every :root { … } block. Deliberately small:
// it never needs to understand the cascade, only the deck's own token declarations.
function parseRootVars(css) {
  const vars = new Map()
  const rootBlocks = css.matchAll(/:root\s*\{([\s\S]*?)\}/g)
  for (const [, body] of rootBlocks) {
    for (const decl of body.split(';')) {
      const at = decl.indexOf(':')
      if (at < 0) continue
      const name = decl.slice(0, at).trim()
      let value = decl.slice(at + 1).trim()
      if (!name.startsWith('--') || !value) continue
      value = value.replace(/^['"]|['"]$/g, '').trim()
      vars.set(name, value)
    }
  }
  return vars
}

function alpha(hex, a) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim())
  if (!m) return hex
  const n = parseInt(m[1], 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return `rgba(${r},${g},${b},${a})`
}

function darken(hex, amount) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim())
  if (!m) return hex
  const n = parseInt(m[1], 16)
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) =>
    Math.max(0, Math.round(c * (1 - amount))),
  )
  return `#${ch.map((c) => c.toString(16).padStart(2, '0')).join('')}`
}

/* --------------------------------------------------------------------- load */

/**
 * Resolve the palette for a deck.
 *
 * @param {string|null} themePath  path to the deck's theme CSS (may not exist)
 * @returns {{ palette: object, tones: object, source: string, defaults: string[] }}
 */
export function loadTheme(themePath) {
  const defaults = []
  let vars = new Map()
  let source = 'built-in fallbacks'

  if (themePath && existsSync(themePath)) {
    try {
      vars = parseRootVars(readFileSync(themePath, 'utf8'))
      source = themePath
    } catch (err) {
      defaults.push(`unreadable theme (${err.message})`)
    }
  } else if (themePath) {
    defaults.push(`theme file not found: ${themePath}`)
  }

  const palette = {}
  for (const [key, names] of Object.entries(CSS_VAR)) {
    const hit = names.map((n) => vars.get(n)).find((v) => v !== undefined)
    if (hit) {
      palette[key] = hit
    } else {
      palette[key] = FALLBACK[key]
      // Font stacks legitimately live outside a theme; don't cry about them.
      if (key !== 'sans' && key !== 'mono') defaults.push(key)
    }
  }

  // Derived tokens. Only computed when the theme did not supply them, so a theme
  // that defines --accent-soft always wins over our guess.
  if (!vars.get('--accent-soft') && !defaults.includes('accentSoft')) {
    palette.accentSoft = alpha(palette.accent, 0.08)
  }
  if (!vars.get('--border')) palette.border = alpha(palette.ink, 0.12)

  const tones = {
    neutral: { fg: palette.ink, soft: palette.surface, border: palette.border },
    muted: { fg: palette.muted, soft: palette.surface, border: palette.border },
    acc: { fg: palette.accent, soft: palette.accentSoft, border: alpha(palette.accent, 0.28) },
    ink: { fg: '#ffffff', soft: palette.ink, border: palette.ink },
    code: { fg: palette.ink, soft: palette.codeBg, border: palette.border },
    ...SEMANTIC,
    // keep the derived accent border if the theme gave us a real accent
    accBorder: alpha(palette.accent, 0.28),
    accentDeep: darken(palette.accent, 0.18),
  }

  return { palette, tones, source, defaults }
}

export function toneOf(tones, name) {
  const t = tones[name]
  if (!t) {
    const known = Object.keys(tones).filter((k) => !k.endsWith('Border') && !k.endsWith('Deep'))
    throw new Error(`unknown tone "${name}" — valid tones: ${known.join(', ')}`)
  }
  return t
}
