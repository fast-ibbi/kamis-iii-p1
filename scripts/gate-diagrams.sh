#!/usr/bin/env bash
# Gerbang akhir untuk rollout diagram SVG — dijalankan koordinator SETELAH semua
# agen selesai. Tidak dijalankan bersamaan dengan agen, karena check-slides.mjs
# memakai slides/out/_check bersama.
set -u
cd "$(dirname "$0")/../.." 2>/dev/null || cd /Users/jimmy/ibbi/kamis-iii-p1
fail=0

echo "=== 1. build --strict per deck (SVG harus dapat dibangun ulang dari spec) ==="
for f in slides/*.md; do
  out=$(node scripts/svg-kit/scripts/build.mjs "$f" --strict 2>&1)
  if echo "$out" | grep -qE "^\s*error |error\(s\)"; then
    echo "GAGAL  $f"; echo "$out" | grep -E "error" | head -5; fail=1
  else
    n=$(echo "$out" | grep -oE "[0-9]+ diagram\(s\)" | head -1)
    echo "ok     $(basename "$f")  ${n:-0 diagram}"
  fi
done

echo
echo "=== 2. jumlah slide harus sama dengan baseline yang di-versioning ==="
node scripts/svg-kit/scripts/build.mjs slides/bab-05-css-box-model-dan-layout.md --audit --json >/dev/null 2>&1
node - <<'EOF'
const { execFileSync } = require('node:child_process')
const { readdirSync, readFileSync } = require('node:fs')
// Baseline tinggal di dalam repo, bukan di /tmp: berkas di /tmp tidak pernah
// bisa jadi baseline yang jujur karena hilang begitu mesin restart dan tidak
// pernah ikut ke CI. Mengubah jumlah slide itu boleh — yang dilarang adalah
// mengubahnya tanpa mengubah berkas ini di commit yang sama.
const base = JSON.parse(readFileSync('scripts/slide-baseline.json', 'utf8'))
let bad = 0
for (const f of readdirSync('slides').filter((x) => x.endsWith('.md')).sort()) {
  const j = JSON.parse(execFileSync('node', ['scripts/svg-kit/scripts/build.mjs', `slides/${f}`, '--audit', '--json'], { encoding: 'utf8' }))
  const imgs = j.slides.filter((s) => s.images > 0).length
  const b = base[f]
  const note = !b ? 'BARU' : j.slides.length !== b.slides ? 'JUMLAH SLIDE BERUBAH' : `img ${b.withImage} -> ${imgs}`
  if (!b || j.slides.length !== b.slides) bad++
  console.log(`${(f.slice(0, 11)).padEnd(12)} ${String(j.slides.length).padStart(3)} slide  ${note}`)
}
process.exit(bad ? 1 : 0)
EOF
[ $? -ne 0 ] && fail=1

echo
echo "=== 3. artefak yang tidak boleh tertinggal ==="
stray=$(git status --porcelain | grep -E '\.png$|slides/out/' || true)
if [ -n "$stray" ]; then echo "$stray"; fail=1; else echo "ok     tidak ada PNG/sampah"; fi
touched=$(git status --porcelain | grep -E 'scripts/svg-kit|package\.json|readme\.md|\.github/' || true)
if [ -n "$touched" ]; then echo "DIUBAH DI LUAR IZIN:"; echo "$touched"; fail=1; else echo "ok     kit/CI/readme tidak tersentuh"; fi

echo
echo "=== 4. check-slides: tidak ada slide meluber di seluruh deck ==="
node scripts/check-slides.mjs 2>&1 | grep -E "bab-|deck,|meluber" | tail -20
node scripts/check-slides.mjs >/dev/null 2>&1 || { echo "GAGAL check-slides"; fail=1; }

echo
echo "=== 5. PDF: jumlah halaman harus sama dengan baseline ==="
mkdir -p /tmp/gate-pdf
for f in slides/*.md; do
  slug=$(basename "$f" .md)
  npx --no-install marp "$f" -o "/tmp/gate-pdf/$slug.pdf" --allow-local-files >/dev/null 2>&1
  got=$(pdfinfo "/tmp/gate-pdf/$slug.pdf" 2>/dev/null | awk '/^Pages:/{print $2}')
  want=$(node -e "const j=require('./scripts/slide-baseline.json');process.stdout.write(String(j['$slug'].slides))")
  if [ "$got" = "$want" ]; then echo "ok     $slug  $got halaman"; else echo "GAGAL  $slug  $got != $want"; fail=1; fi
done

echo
if [ "$fail" -eq 0 ]; then echo "SEMUA GERBANG LOLOS"; else echo "ADA GERBANG GAGAL — jangan push"; fi
exit $fail
