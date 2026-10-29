#!/usr/bin/env node
// check-demos.mjs — menjaga berkas demo bab-05 tetap setia pada deck.
//
// Tiap berkas di demos/bab-05 menampilkan kode contoh dua kali: sebagai teks di dalam
// <pre><code> dan sebagai aturan yang benar-benar dipakai di dalam <style>. Skrip ini
// memastikan keduanya tidak melenceng, plus memeriksa hal-hal yang mudah salah saat
// menyunting manual:
//
//   1. setiap deklarasi di blok kode CSS ada pada satu aturan di <style> berkas itu;
//   2. setiap kelas yang dipakai blok kode HTML muncul di markup demo;
//   3. setiap baris hitungan (data-hitung) aritmetikanya benar, dan nilai px yang
//      disebutnya memang berasal dari <style> berkas itu;
//   4. tiap berkas tetap HTML+CSS murni (tanpa <script>), ber-encoding utf-8, dan
//      tautan sebelum/berikutnya menunjuk berkas yang ada.
//
// Dijalankan dengan `npm run check:demos`. Keluar dengan kode 1 bila ada temuan.

import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const DIR = join(resolve(process.cwd()), 'demos', 'bab-05')

const esc = (s) =>
  s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"')

const rapikan = (s) => s.trim().replace(/\s+/g, ' ')

const tanpaKomentar = (css) => css.replace(/\/\*[\s\S]*?\*\//g, '')

/** Potongan kode di dalam <pre><code class="language-…">…</code></pre>. */
function potonganKode(html) {
  const hasil = []
  const re = /<pre><code class="language-([a-z]+)">([\s\S]*?)<\/code><\/pre>/g
  let m
  while ((m = re.exec(html))) hasil.push({ bahasa: m[1], isi: esc(m[2]) })
  return hasil
}

/** Aturan CSS beserta daftar deklarasinya. */
function aturanCss(css) {
  const hasil = []
  const re = /([^{}]+)\{([^{}]*)\}/g
  let m
  while ((m = re.exec(css))) {
    hasil.push({
      selector: rapikan(m[1]),
      deklarasi: m[2]
        .split(';')
        .map(rapikan)
        .filter(Boolean),
    })
  }
  return hasil
}

/** Evaluator kecil untuk "300px + 16px*2": angka, + - * / dan tanda kurung. */
function hitung(ekspresi) {
  const token = ekspresi.replace(/px/g, '').match(/\d+(?:\.\d+)?|[+\-*/()]/g)
  if (!token || !token.length) throw new Error('ekspresi kosong')
  let i = 0
  const lihat = () => token[i]
  const ambil = () => token[i++]

  function faktor() {
    const t = ambil()
    if (t === '(') {
      const v = jumlah()
      if (ambil() !== ')') throw new Error('tanda kurung tidak tertutup')
      return v
    }
    if (t === '-') return -faktor()
    const n = Number(t)
    if (Number.isNaN(n)) throw new Error(`token tidak dikenal: ${t}`)
    return n
  }
  function suku() {
    let v = faktor()
    while (lihat() === '*' || lihat() === '/') {
      const op = ambil()
      const r = faktor()
      v = op === '*' ? v * r : v / r
    }
    return v
  }
  function jumlah() {
    let v = suku()
    while (lihat() === '+' || lihat() === '-') {
      const op = ambil()
      const r = suku()
      v = op === '+' ? v + r : v - r
    }
    return v
  }
  const v = jumlah()
  if (i !== token.length) throw new Error('ekspresi tidak habis terbaca')
  return v
}

/** Nilai px yang disebut sebuah baris hitungan harus ada di <style> berkas itu. */
function pxAdaDiGaya(nilai, css) {
  const angka = String(nilai).replace('.', '\\.')
  return new RegExp(`(^|[^\\d.])${angka}px`).test(css)
}

function periksaBerkas(nama, semuaNama) {
  const html = readFileSync(join(DIR, nama), 'utf8')
  const temuan = []
  const laporan = []

  const gaya = (html.match(/<style[^>]*>([\s\S]*?)<\/style>/) || [, ''])[1]
  const gayaBersih = tanpaKomentar(gaya)
  const daftarAturan = aturanCss(gayaBersih)
  const badan = html.slice(html.indexOf('<body'))

  // 1 — blok kode CSS harus ada padanannya di <style>
  const kodeCss = potonganKode(html).filter((k) => k.bahasa === 'css')
  let salahKode = 0
  for (const k of kodeCss) {
    const potonganAturan = aturanCss(tanpaKomentar(k.isi))
    if (!potonganAturan.length) {
      // blok tanpa selektor, mis. "box-sizing: content-box;"
      potonganAturan.push({
        selector: '',
        deklarasi: k.isi.split(';').map(rapikan).filter(Boolean),
      })
    }
    for (const pa of potonganAturan) {
      const cocok = daftarAturan.some((a) =>
        pa.deklarasi.every((d) => a.deklarasi.includes(d))
      )
      if (!cocok) {
        salahKode++
        temuan.push(`deklarasi tidak ditemukan di <style>: ${pa.deklarasi.join('; ')}`)
      }
    }
  }
  laporan.push(
    salahKode === 0
      ? `kode ↔ style   ok   (${kodeCss.length} blok)`
      : `kode ↔ style   GAGAL (${salahKode} deklarasi)`
  )

  // 2 — blok kode HTML: setiap kelasnya harus dipakai di markup demo
  const kodeHtml = potonganKode(html).filter((k) => k.bahasa === 'html')
  let salahHtml = 0
  for (const k of kodeHtml) {
    const kelas = [...k.isi.matchAll(/class="([^"]+)"/g)].flatMap((m) => m[1].split(/\s+/))
    for (const c of kelas) {
      if (!new RegExp(`class="[^"]*\\b${c}\\b`).test(badan)) {
        salahHtml++
        temuan.push(`kelas .${c} ada di blok kode HTML tetapi tidak dipakai di markup`)
      }
    }
  }
  if (kodeHtml.length) {
    laporan.push(
      salahHtml === 0 ? `kode html      ok   (${kodeHtml.length} blok)` : `kode html      GAGAL`
    )
  }

  // 3 — baris hitungan: aritmetika benar dan angka px berasal dari <style>
  const barisHitung = [...html.matchAll(/data-hitung="([^"]+)"/g)].map((m) => m[1])
  let salahHitung = 0
  for (const baris of barisHitung) {
    const [, ekspresi, hasilTeks] = baris.match(/^(.*?)=\s*([\d.]+)$/) || []
    if (!ekspresi) {
      salahHitung++
      temuan.push(`data-hitung tidak berpola "ekspresi = hasil": ${baris}`)
      continue
    }
    let nilai
    try {
      nilai = hitung(ekspresi)
    } catch (e) {
      salahHitung++
      temuan.push(`data-hitung tidak dapat dihitung (${baris}): ${e.message}`)
      continue
    }
    const hasil = Number(hasilTeks)
    if (Math.abs(nilai - hasil) > 0.001) {
      salahHitung++
      temuan.push(`data-hitung salah hitung: ${baris} → seharusnya ${nilai}`)
    }
    for (const m of ekspresi.matchAll(/(\d+(?:\.\d+)?)px/g)) {
      if (!pxAdaDiGaya(m[1], gayaBersih)) {
        salahHitung++
        temuan.push(`nilai ${m[1]}px pada hitungan tidak ada di <style> berkas ini`)
      }
    }
  }
  if (barisHitung.length) {
    laporan.push(
      salahHitung === 0
        ? `hitung         ok   (${barisHitung.length} baris)`
        : `hitung         GAGAL (${salahHitung} temuan)`
    )
  }

  // 4 — kerangka berkas: tanpa <script>, utf-8, dan tautan navigasi hidup
  if (/<script/i.test(html)) temuan.push('berkas memuat <script>; demo harus HTML+CSS murni')
  if (!/<meta charset="utf-8">/.test(html)) temuan.push('tidak ada <meta charset="utf-8">')
  if (!/<html lang="id">/.test(html)) temuan.push('tidak ada <html lang="id">')
  if (!/<meta name="viewport"/.test(html)) temuan.push('tidak ada <meta name="viewport">')
  if (!/<title>[^<]+<\/title>/.test(html)) temuan.push('tidak ada <title>')

  let tautanRusak = 0
  for (const m of html.matchAll(/<a href="([^"]+)"/g)) {
    const tujuan = m[1]
    if (/^https?:/.test(tujuan)) continue
    if (!semuaNama.includes(tujuan)) {
      tautanRusak++
      temuan.push(`tautan menuju berkas yang tidak ada: ${tujuan}`)
    }
  }
  laporan.push(tautanRusak === 0 ? 'tautan         ok' : 'tautan         GAGAL')

  return { nama, laporan, temuan }
}

/* --------------------------------------------------------------- jalankan */

if (!existsSync(DIR)) {
  console.error(`folder ${DIR} tidak ditemukan — jalankan dari akar repo.`)
  process.exit(2)
}

const semuaNama = readdirSync(DIR)
  .filter((f) => f.endsWith('.html'))
  .sort()

if (!semuaNama.length) {
  console.error('tidak ada berkas .html di demos/bab-05')
  process.exit(2)
}

let totalTemuan = 0
for (const nama of semuaNama) {
  const { laporan, temuan } = periksaBerkas(nama, semuaNama)
  console.log(nama)
  for (const baris of laporan) console.log(`  ${baris}`)
  for (const t of temuan) console.log(`  ✗ ${t}`)
  totalTemuan += temuan.length
}

console.log('')
console.log(`${semuaNama.length} berkas diperiksa, ${totalTemuan} temuan`)
process.exit(totalTemuan === 0 ? 0 : 1)
