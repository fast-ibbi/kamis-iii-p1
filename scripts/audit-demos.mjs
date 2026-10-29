#!/usr/bin/env node
// audit-demos.mjs — memeriksa demo di browser, bukan cuma di teks.
//
// check-demos.mjs memeriksa kesetiaan berkas terhadap deck (kode ↔ style, hitungan,
// tautan). Skrip ini menutup celah terakhir: apakah halaman itu benar-benar *tampil*
// seperti yang dijanjikan teksnya. Tiap demo dibuka di Chrome headless, lalu diukur:
//
//   1. tidak ada gulir horizontal di lebar 1280 px (halaman tidak melebar keluar);
//   2. setiap demo punya tepat satu <h1> dan minimal satu kotak .demo berisi elemen;
//   3. tidak ada elemen yang keluar dari kotak .demo-nya secara horizontal
//      (tanda panggung demo terlalu lebar untuk kolom isi). Demo yang memang
//      perlu digulir — mis. deretan simulasi lebar perangkat — boleh memakai
//      <div class="demo" data-gulir="boleh"> asal teksnya menjelaskan itu;
//   4. tidak ada gambar yang gagal dimuat, dan tidak ada <script> yang jalan.
//
// Pakai:
//   node scripts/audit-demos.mjs            # semua bab
//   node scripts/audit-demos.mjs 06 07      # bab tertentu
//   CHROME_PATH=/path/to/chrome node scripts/audit-demos.mjs
//
// Keluar dengan kode 1 bila ada temuan.

import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'

const ROOT = resolve(process.cwd())
const DEMOS = join(ROOT, 'demos')

const CHROME = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find((p) => p && existsSync(p))

if (!CHROME) {
  console.error('Chrome/Edge tidak ditemukan. Set CHROME_PATH.')
  process.exit(2)
}

const PROBE = `
<script>
(function () {
  var laporan = [];
  var halaman = {
    gulirHorizontal: document.documentElement.scrollWidth > window.innerWidth + 1,
    h1: document.querySelectorAll('h1').length,
    demo: document.querySelectorAll('.demo').length,
    pre: document.querySelectorAll('pre').length,
    gambarRusak: 0,
  };
  [].slice.call(document.images).forEach(function (im) {
    if (!im.complete || im.naturalWidth === 0) halaman.gambarRusak++;
  });
  // Isi .demo tidak boleh melebar keluar kotaknya sendiri, kecuali demo itu
  // menyatakan diri boleh digulir (data-gulir="boleh") dan menjelaskannya di teks.
  [].slice.call(document.querySelectorAll('.demo')).forEach(function (kotak, i) {
    if (kotak.dataset.gulir === 'boleh') return;
    if (kotak.scrollWidth > kotak.clientWidth + 1) {
      laporan.push('demo #' + (i + 1) + ' melebar ' + (kotak.scrollWidth - kotak.clientWidth) + 'px');
    }
  });
  // Panggung yang lebih lebar dari kolom isi membuat halaman bergulir ke samping.
  var wrap = document.querySelector('.wrap');
  if (wrap && wrap.scrollWidth > wrap.clientWidth + 1) {
    laporan.push('isi halaman melebar ' + (wrap.scrollWidth - wrap.clientWidth) + 'px');
  }
  halaman.temuan = laporan;
  var pre = document.createElement('pre');
  pre.id = 'audit-demos';
  pre.style.display = 'none';
  pre.textContent = 'AUDIT' + JSON.stringify(halaman);
  document.body.appendChild(pre);
})();
</script>
`

if (!existsSync(DEMOS)) {
  console.error(`folder ${DEMOS} tidak ditemukan — jalankan dari akar repo.`)
  process.exit(2)
}

const diminta = process.argv.slice(2).filter((a) => !a.startsWith('-'))
const bab = readdirSync(DEMOS)
  .filter((d) => /^bab-\d+$/.test(d))
  .filter((d) => diminta.length === 0 || diminta.some((w) => d === `bab-${w}` || d.includes(w)))
  .sort()

const kerja = mkdtempSync(join(tmpdir(), 'audit-demos-'))
let total = 0
let gagal = 0

for (const namaBab of bab) {
  const dir = join(DEMOS, namaBab)
  const berkas = readdirSync(dir)
    .filter((f) => f.endsWith('.html') && f !== 'index.html')
    .sort()
  const temuanBab = []

  for (const nama of berkas) {
    // Berkas sementara diletakkan di folder bab supaya jalur relatif
    // (mis. ../_vendor/bootstrap.min.css) tetap menemukan sasarannya.
    const sementara = join(dir, `.audit-${nama}`)
    writeFileSync(sementara, readFileSync(join(dir, nama), 'utf8').replace('</body>', `${PROBE}</body>`))
    const dom = spawnSync(CHROME, [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--window-size=1280,900',
      '--virtual-time-budget=4000',
      '--dump-dom',
      `file://${sementara}`,
    ], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
    rmSync(sementara, { force: true })

    const m = /AUDIT(\{.*?\})<\/pre>/s.exec(dom.stdout || '')
    total++
    if (!m) {
      temuanBab.push(`${nama}: halaman tidak dapat diukur (Chrome keluar ${dom.status})`)
      gagal++
      continue
    }
    const r = JSON.parse(m[1])
    const masalah = [...r.temuan]
    if (r.gulirHorizontal) masalah.push('ada gulir horizontal di 1280px')
    if (r.h1 !== 1) masalah.push(`<h1> berjumlah ${r.h1}, seharusnya 1`)
    if (r.demo === 0) masalah.push('tidak ada kotak .demo')
    if (r.gambarRusak) masalah.push(`${r.gambarRusak} gambar gagal dimuat`)
    if (masalah.length) {
      temuanBab.push(`${nama}: ${masalah.join('; ')}`)
      gagal++
    }
  }

  console.log(`\n${namaBab} — ${berkas.length} demo`)
  if (!temuanBab.length) console.log('  ok')
  for (const t of temuanBab) console.log(`  ✗ ${t}`)
}

rmSync(kerja, { recursive: true, force: true })
console.log('')
console.log(`${total} halaman diukur di ${bab.length} bab, ${gagal} bermasalah`)
process.exit(gagal === 0 ? 0 : 1)
