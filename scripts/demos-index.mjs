#!/usr/bin/env node
// demos-index.mjs — menulis daftar isi demo.
//
// Untuk tiap folder demos/bab-NN/ skrip ini membuat index.html yang menaut semua
// berkas demo berurutan, dan di demos/index.html sebuah daftar seluruh bab.
//
// Isinya diturunkan dari berkas demo itu sendiri — judul dari <title>, ringkasan
// dari <h1> dan paragraf pertamanya — jadi index tidak perlu disunting manual
// setiap kali satu demo ditambah atau diubah namanya.
//
// Pakai:
//   node scripts/demos-index.mjs            # semua bab
//   node scripts/demos-index.mjs 06 07      # bab tertentu
//
// Dijalankan otomatis oleh `npm run demos:index`; tidak mengubah berkas demo.

import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'

const ROOT = resolve(process.cwd())
const DEMOS = join(ROOT, 'demos')
const SLIDES = join(ROOT, 'slides')

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const teks = (s) =>
  String(s)
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

/** Bagian tengah <title>: "Bab 5 · 14 position — CSS Box Model…" → "14 position". */
function labelDariJudul(html, namaBerkas) {
  const t = (html.match(/<title>([^<]+)<\/title>/) || [, ''])[1]
  const bagian = t.split('·')[1]
  if (bagian) return bagian.split('—')[0].trim()
  return basename(namaBerkas, '.html')
}

/** Paragraf pertama sesudah <h1> sebagai ringkasan. */
function ringkasanDari(html) {
  const sesudahH1 = html.slice(html.indexOf('<h1'))
  const p = (sesudahH1.match(/<p>([\s\S]*?)<\/p>/) || [, ''])[1]
  const bersih = teks(p)
  return bersih.length > 180 ? `${bersih.slice(0, 177)}…` : bersih
}

/** Judul bab dari front-matter deck: `title:` pada slides/bab-NN-*.md. */
function judulBab(kode, fallback) {
  if (!existsSync(SLIDES)) return fallback
  const berkas = readdirSync(SLIDES).find((f) => f.startsWith(`bab-${kode}-`) && f.endsWith('.md'))
  if (!berkas) return fallback
  const src = readFileSync(join(SLIDES, berkas), 'utf8')
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(src)
  if (!m) return fallback
  const t = /^title\s*:\s*(.+)$/m.exec(m[1])
  if (!t) return fallback
  // Nilai front-matter berbentuk "Bab 5 — CSS Box Model dan Layout"; nomor bab
  // ditulis terpisah di halaman index.
  return t[1].trim().replace(/^["']|["']$/g, '').replace(/^Bab\s+\d+\s*[—-]\s*/, '')
}

const GAYA = `<style>
  :root { --ink: #111827; --muted: #6b7280; --accent: #1d4ed8; --border: #e5e7eb; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 48px 20px 64px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    color: var(--ink);
    line-height: 1.5;
    background: #ffffff;
  }
  .wrap { max-width: 820px; margin-inline: auto; }
  .kepala {
    margin: 0 0 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
    font-size: 13px;
    color: var(--muted);
  }
  .kepala a { color: var(--accent); text-decoration: none; }
  h1 { margin: 0 0 10px; font-size: 28px; line-height: 1.25; }
  .pengantar { margin: 0 0 32px; color: var(--muted); font-size: 16px; }
  ol { margin: 0; padding: 0; list-style: none; counter-reset: demo; }
  li {
    counter-increment: demo;
    border-top: 1px solid var(--border);
    padding: 16px 0;
  }
  li a {
    display: block;
    font-size: 18px;
    font-weight: 600;
    color: var(--accent);
    text-decoration: none;
  }
  li a::before {
    content: counter(demo, decimal-leading-zero) "  ";
    color: var(--muted);
    font-variant-numeric: tabular-nums;
  }
  li p { margin: 4px 0 0; font-size: 15px; color: var(--muted); }
  code { font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace; }
</style>`

function tulisIndexBab(namaBab, kode, berkas, demo) {
  const nomor = kode.replace(/^0+/, '')
  const judul = judulBab(kode, namaBab)
  const item = demo
    .map(
      (d) => `    <li>
      <a href="${esc(d.nama)}">${esc(d.label)}</a>
      ${d.ringkasan ? `<p>${esc(d.ringkasan)}</p>` : ''}
    </li>`
    )
    .join('\n')

  const html = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Demo Bab ${nomor} — ${esc(judul)}</title>
${GAYA}
</head>
<body>
  <div class="wrap">
    <p class="kepala"><a href="../index.html">← Semua bab</a> · Demo Bab ${nomor}</p>
    <h1>Demo Bab ${nomor} — ${esc(judul)}</h1>
    <p class="pengantar">${demo.length} berkas contoh, satu berkas per konsep slide. Tiap berkas
    menampilkan kode contoh beserta hasil yang benar-benar dirender, tanpa JavaScript.</p>
    <ol>
${item}
    </ol>
  </div>
</body>
</html>
`
  writeFileSync(join(DEMOS, namaBab, 'index.html'), html)
  return { nomor, judul, jumlah: demo.length, namaBab }
}

function tulisIndexAkar(daftar) {
  const item = daftar
    .map(
      (b) => `    <li>
      <a href="${esc(b.namaBab)}/index.html">Bab ${b.nomor} — ${esc(b.judul)}</a>
      <p>${b.jumlah} berkas demo</p>
    </li>`
    )
    .join('\n')

  const html = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Demo Frontend Development &amp; Web Design</title>
${GAYA}
</head>
<body>
  <div class="wrap">
    <p class="kepala">Demo · Frontend Development &amp; Web Design</p>
    <h1>Demo Penjelasan per Bab</h1>
    <p class="pengantar">Tiap berkas demo memperlihatkan satu konsep dari deck: kode contoh di
    atas, hasil yang benar-benar dirender di bawahnya. Semua halaman ini HTML dan CSS murni —
    tidak ada JavaScript.</p>
    <ol>
${item}
    </ol>
  </div>
</body>
</html>
`
  writeFileSync(join(DEMOS, 'index.html'), html)
}

/* ------------------------------------------------------------ navigasi demo */

/**
 * Menulis ulang blok <nav class="nav"> tiap demo agar nomor urut, jumlah berkas,
 * dan tautan sebelum/berikutnya selalu cocok dengan isi folder. Teks tautan yang
 * sudah ditulis tangan dipertahankan; hanya berkas baru yang memakai label dari
 * <title>-nya sendiri.
 */
function rapikanNav(dir, semuaNama) {
  const label = new Map()
  const isi = new Map()
  for (const nama of semuaNama) {
    const html = readFileSync(join(dir, nama), 'utf8')
    isi.set(nama, html)
    label.set(nama, labelDariJudul(html, nama))
  }

  const total = String(semuaNama.length).padStart(2, '0')
  let berubah = 0

  for (const [i, nama] of semuaNama.entries()) {
    const html = isi.get(nama)
    const blok = html.match(/<nav class="nav">([\s\S]*?)<\/nav>/)
    if (!blok) {
      console.warn(`  ! ${nama}: tidak ada <nav class="nav">, dilewati`)
      continue
    }

    // Teks lama disimpan per tujuan, supaya label tulisan tangan tidak hilang.
    const teksLama = new Map()
    for (const m of blok[1].matchAll(/<a href="([^"]+)">([^<]*)<\/a>/g)) {
      teksLama.set(m[1], m[2].replace(/^←\s*/, '').replace(/\s*→$/, '').trim())
    }
    const labelUntuk = (target) => teksLama.get(target) || label.get(target)

    const sebelum = semuaNama[i - 1]
    const sesudah = semuaNama[i + 1]
    const urut = String(i + 1).padStart(2, '0')
    const kiri = sebelum
      ? `<a href="${esc(sebelum)}">← ${esc(labelUntuk(sebelum))}</a>`
      : '<span>—</span>'
    const kanan = sesudah
      ? `<a href="${esc(sesudah)}">${esc(labelUntuk(sesudah))} →</a>`
      : '<span>—</span>'

    const navBaru = `<nav class="nav">\n      ${kiri}\n      <span>${urut} / ${total}</span>\n      ${kanan}\n    </nav>`
    const hasil = html.replace(/<nav class="nav">[\s\S]*?<\/nav>/, navBaru)
    if (hasil !== html) {
      writeFileSync(join(dir, nama), hasil)
      berubah++
    }
  }
  return berubah
}

/* --------------------------------------------------------------- jalankan */

if (!existsSync(DEMOS)) {
  console.error(`folder ${DEMOS} tidak ditemukan — jalankan dari akar repo.`)
  process.exit(2)
}

const diminta = process.argv.slice(2).filter((a) => !a.startsWith('-'))
const folders = readdirSync(DEMOS)
  .filter((d) => /^bab-\d+$/.test(d))
  .filter((d) => diminta.length === 0 || diminta.some((w) => d === `bab-${w}` || d.includes(w)))
  .sort()

if (!folders.length) {
  console.error('tidak ada folder demos/bab-* yang cocok.')
  process.exit(2)
}

// Nomor urut dan tautan tetangga ditata per folder bab yang diminta. Penomoran
// hanya bergantung pada isi folder itu sendiri, jadi aman dijalankan per bab.
for (const namaBab of folders) {
  const dir = join(DEMOS, namaBab)
  const berkas = readdirSync(dir)
    .filter((f) => f.endsWith('.html') && !f.startsWith('.') && f !== 'index.html')
    .sort()
  if (berkas.length) rapikanNav(dir, berkas)
}

const daftar = []
for (const namaBab of folders) {
  const kode = namaBab.replace('bab-', '')
  const berkas = readdirSync(join(DEMOS, namaBab))
    .filter((f) => f.endsWith('.html') && !f.startsWith('.') && f !== 'index.html')
    .sort()
  if (!berkas.length) {
    console.log(`lewati ${namaBab} — belum ada berkas demo`)
    continue
  }
  const demo = berkas.map((nama) => {
    const html = readFileSync(join(DEMOS, namaBab, nama), 'utf8')
    return { nama, label: labelDariJudul(html, nama), ringkasan: ringkasanDari(html) }
  })
  daftar.push(tulisIndexBab(namaBab, kode, berkas, demo))
  console.log(`ok   demos/${namaBab}/index.html (${berkas.length} demo)`)
}

if (diminta.length === 0) {
  // Daftar akar hanya ditulis saat semua bab diproses, supaya tidak pernah
  // kehilangan bab yang tidak ikut diperiksa.
  const semua = readdirSync(DEMOS)
    .filter((d) => /^bab-\d+$/.test(d))
    .sort()
    .map((namaBab) => {
      const kode = namaBab.replace('bab-', '')
      const jumlah = readdirSync(join(DEMOS, namaBab)).filter(
        (f) => f.endsWith('.html') && f !== 'index.html'
      ).length
      return { namaBab, nomor: kode.replace(/^0+/, ''), judul: judulBab(kode, namaBab), jumlah }
    })
    .filter((b) => b.jumlah > 0)
  tulisIndexAkar(semua)
  console.log(`ok   demos/index.html (${semua.length} bab)`)
}
