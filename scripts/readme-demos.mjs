#!/usr/bin/env node
// readme-demos.mjs — menyelaraskan tautan demo di readme.md.
//
// Untuk tiap bab yang punya folder demos/bab-NN/, skrip ini menyisipkan satu baris
// "**Demo:** …" tepat setelah baris "**Link Slides:** …" pada bagian
// "### Pertemuan N — …". Baris demo lama diganti, jadi aman dijalankan berulang
// setelah jumlah demo berubah.
//
// Pakai: `node scripts/readme-demos.mjs` (dari akar repo).

import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const ROOT = resolve(process.cwd())
const README = join(ROOT, 'readme.md')
const DEMOS = join(ROOT, 'demos')
const SITUS = 'https://fast-ibbi.github.io/kamis-iii-p1'

if (!existsSync(README)) {
  console.error('readme.md tidak ditemukan — jalankan dari akar repo.')
  process.exit(2)
}
if (!existsSync(DEMOS)) {
  console.error('folder demos/ tidak ditemukan.')
  process.exit(2)
}

/** Jumlah demo tiap bab, dari isi folder. */
const jumlah = new Map()
for (const d of readdirSync(DEMOS)) {
  if (!/^bab-\d+$/.test(d)) continue
  const n = readdirSync(join(DEMOS, d)).filter((f) => f.endsWith('.html') && f !== 'index.html').length
  if (n) jumlah.set(d.replace('bab-', '').replace(/^0+/, ''), { folder: d, n })
}

let isi = readFileSync(README, 'utf8')
const baris = isi.split('\n')
const hasil = []

for (let i = 0; i < baris.length; i++) {
  hasil.push(baris[i])

  // "**Link Slides:** [Bab 5](…) · [PDF](…)" menandai awal bagian pertemuan.
  const m = /^\*\*Link Slides:\*\* \[Bab (\d+)\]/.exec(baris[i])
  if (!m) continue

  // Buang baris demo lama beserta satu baris kosong pemisahnya, supaya
  // menjalankan skrip dua kali tidak menumpuk tautan.
  while (
    baris[i + 1] !== undefined &&
    (baris[i + 1] === '' || /^\*\*Demo:\*\*/.test(baris[i + 1]))
  ) {
    if (/^\*\*Demo:\*\*/.test(baris[i + 1])) {
      i++
      if (baris[i + 1] === '') i++
      continue
    }
    if (baris[i + 2] !== undefined && /^\*\*Demo:\*\*/.test(baris[i + 2])) {
      i++
      continue
    }
    break
  }

  const bab = m[1]
  if (!jumlah.has(bab)) continue
  const { folder, n } = jumlah.get(bab)
  hasil.push('')
  hasil.push(
    `**Demo:** [${n} berkas demo Bab ${bab}](${SITUS}/demos/${folder}/) — satu berkas per konsep, ` +
      'HTML dan CSS murni tanpa JavaScript.'
  )
  // Baris kosong setelahnya menjaga blok markdown berikutnya tidak menempel.
  if (baris[i + 1] !== '') hasil.push('')
}

// Satu tautan ke daftar seluruh demo, disisipkan setelah baris "Website slide".
const teks = hasil.join('\n')
const denganTautan = teks.replace(
  /^(\*\*Website slide:\*\*.*)$/m,
  `$1\n\n**Demo penjelasan:** <${SITUS}/demos/> — halaman per konsep untuk tiap bab.`
)

writeFileSync(README, denganTautan)
console.log(`ok   readme.md diperbarui untuk ${jumlah.size} bab`)
