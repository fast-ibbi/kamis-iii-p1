#!/usr/bin/env node
/*
 * check-slides.mjs — periksa apakah isi tiap slide muat di dalam bingkai slide.
 *
 * Markdown tidak bisa memberi tahu apakah teks meluber keluar slide. Skrip ini
 * merender tiap deck ke HTML, menyuntikkan pengukur, lalu membuka HTML itu di
 * Chrome headless dan membaca hasil pengukurannya dari DOM.
 *
 * Kenapa perlu jeda sebelum mengukur: tema `academic` mendeklarasikan
 * `@auto-scaling fittingHeader,code,math`, sehingga Marp Core mengecilkan
 * heading dan blok kode lewat JavaScript sesudah halaman dimuat. Pengukuran yang
 * jalan sebelum itu selesai melihat layout yang belum disesuaikan dan melaporkan
 * luberan palsu (pernah kejadian: 69 px palsu di satu slide).
 *
 * Tanpa dependensi npm: hanya butuh Chrome/Edge yang sudah ada, dan marp-cli
 * yang diambil lewat npx seperti scripts/build-pages.mjs.
 *
 * Pakai:
 *   node scripts/check-slides.mjs                 # semua deck di slides/
 *   node scripts/check-slides.mjs bab-05 bab-06   # deck tertentu saja
 *   CHROME_PATH=/path/to/chrome node scripts/check-slides.mjs
 *
 * Keluar dengan kode 1 kalau ada slide meluber atau gambar gagal dimuat.
 */

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'

const ROOT = resolve(process.argv[1], '../..')
const SLIDES = join(ROOT, 'slides')
const WORK = join(SLIDES, 'out', '_check')

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean)

function chromeBin() {
  for (const p of CHROME_CANDIDATES) if (existsSync(p)) return p
  console.error('Chrome/Edge tidak ditemukan. Set CHROME_PATH.')
  process.exit(2)
}

function marpBin() {
  const local = join(ROOT, 'node_modules', '.bin', 'marp')
  if (existsSync(local)) return local
  return 'npx'
}

// shell:true dipakai karena npx adalah npx.cmd di Windows. Argumennya dikendalikan
// skrip ini sendiri, jadi DEP0190 tidak relevan di sini — dan peringatannya disaring
// supaya keluaran pemeriksaan tetap bersih.
process.removeAllListeners('warning')
process.on('warning', (w) => { if (w.code !== 'DEP0190') console.warn(w) })
const shellRun = (cmd, args, opts) => spawnSync(cmd, args, { ...opts, shell: true })

/* ------------------------------------------------------------------ pengukur */

const PROBE = `
<pre id="ovf-report" style="display:none"></pre>
<script>
function ovfMeasure(){
  var secs=[].slice.call(document.querySelectorAll('section'))
      .filter(function(s,i,a){return a.indexOf(s)===i});
  var out=[];
  secs.forEach(function(s,i){
    var sb=s.getBoundingClientRect(), cs=getComputedStyle(s);
    var padB=parseFloat(cs.paddingBottom)||0, padR=parseFloat(cs.paddingRight)||0;
    var scale=sb.height/(s.offsetHeight||1);
    var maxB=sb.top, maxR=sb.left, worst='';
    [].slice.call(s.children).forEach(function(el){
      if(el.tagName==='HEADER'||el.tagName==='FOOTER') return;
      var r=el.getBoundingClientRect();
      if(r.bottom>maxB){maxB=r.bottom; worst=(el.textContent||'').trim().replace(/[\\s]+/g,' ').slice(0,46);}
      if(r.right>maxR) maxR=r.right;
      [].slice.call(el.querySelectorAll('table,pre,img')).forEach(function(g){
        var b=g.getBoundingClientRect();
        if(b.bottom>maxB){maxB=b.bottom; worst='['+g.tagName+']';}
        if(b.right>maxR) maxR=b.right;
      });
    });
    var oB=Math.round((maxB-(sb.bottom-padB*scale))/scale);
    var oR=Math.round((maxR-(sb.right-padR*scale))/scale);
    if(oB>2||oR>2) out.push({slide:i+1,bawah:oB,kanan:oR,elemen:worst});
  });
  var bad=0;
  [].slice.call(document.querySelectorAll('img')).forEach(function(im){
    if(!im.complete||im.naturalWidth===0) bad++;
  });
  return {total:secs.length, overflow:out, gambarRusak:bad};
}
setTimeout(function(){
  var r=ovfMeasure();
  document.getElementById('ovf-report').textContent='OVFJSON'+JSON.stringify(r);
}, 1500);
</script>
`

/* ---------------------------------------------------------------------- main */

if (!existsSync(SLIDES)) {
  console.error('folder slides/ tidak ditemukan — jalankan dari akar repo.')
  process.exit(2)
}

mkdirSync(WORK, { recursive: true })

const wanted = process.argv.slice(2).filter((a) => !a.startsWith('-'))
const decks = readdirSync(SLIDES)
  .filter((f) => f.endsWith('.md') && !f.startsWith('_') && !f.startsWith('.'))
  .filter((f) => wanted.length === 0 || wanted.some((w) => f.startsWith(w)))
  .sort()

if (decks.length === 0) {
  console.error('tidak ada deck yang cocok.')
  process.exit(2)
}

const mbin = marpBin()
const mbArgs = ['-y', '@marp-team/marp-cli@4.5.0']
const browser = chromeBin()

let failed = 0
const rows = []

for (const file of decks) {
  const slug = basename(file, '.md')
  const src = join(SLIDES, file)
  const html = join(WORK, `${slug}.html`)
  const probe = join(WORK, `${slug}.probe.html`)

  const r = shellRun(mbin, [...mbArgs, src, '-o', html, '--allow-local-files'], {
    cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'],
  })
  if (r.status !== 0) {
    const why = r.error ? String(r.error.message) : (r.stderr || r.stdout || '').trim().split('\n').slice(-3).join('\n')
    console.error(`GAGAL render ${slug}: ${why || 'kode keluar ' + r.status}`)
    failed++
    continue
  }

  writeFileSync(probe, readFileSync(html, 'utf8').replace('</body>', PROBE + '</body>'))

  const dom = spawnSync(browser, [
    '--headless=new', '--disable-gpu', '--no-sandbox',
    '--allow-file-access-from-files',
    '--virtual-time-budget=9000',
    '--dump-dom',
    `file:///${probe.replace(/\\/g, '/')}`,
  ], { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] })

  const m = /OVFJSON(\{.*?\})<\/pre>/s.exec(dom.stdout || '')
  if (!m) {
    const why = dom.error ? String(dom.error.message) : `Chrome keluar ${dom.status} tanpa laporan`
    console.error(`GAGAL ukur ${slug} — ${why}`)
    failed++
    continue
  }
  const res = JSON.parse(m[1])
  rows.push({ slug, ...res })
  if (res.overflow.length || res.gambarRusak) failed++
}

console.log('')
console.log('  deck                                     slide  meluber  gambar-rusak')
for (const r of rows) {
  const ok = r.overflow.length === 0 && r.gambarRusak === 0
  console.log(
    `  ${r.slug.slice(0, 40).padEnd(40)} ${String(r.total).padStart(5)}  ` +
    `${String(r.overflow.length).padStart(7)}  ${String(r.gambarRusak).padStart(12)}` +
    (ok ? '' : '   <-- PERIKSA')
  )
  for (const o of r.overflow) {
    console.log(`       slide ${o.slide}: lewat ${o.bawah}px bawah, ${o.kanan}px kanan — ${o.elemen}`)
  }
}

console.log('')
if (failed) {
  console.log(`  ${failed} deck bermasalah dari ${rows.length} yang diperiksa.`)
  process.exit(1)
}
console.log(`  ${rows.length} deck, semua slide muat, 0 gambar rusak.`)
