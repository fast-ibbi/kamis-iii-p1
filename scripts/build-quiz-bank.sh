#!/usr/bin/env bash
# Rakit bank soal per bab (quiz/bab-NN/) menjadi file bank lengkap di quiz/.
# Sumber kebenaran = file di quiz/bab-NN/ (boleh disunting langsung per bab,
# lalu jalankan ulang skrip ini untuk memperbarui file bank lengkap).
#
# Cek kelengkapan:  bash scripts/build-quiz-bank.sh --check
# Rakit:            bash scripts/build-quiz-bank.sh
set -euo pipefail
cd "$(dirname "$0")/.."

CH_DIR="quiz"
LIST="scripts/quiz-chapters.txt"
CHECK_ONLY="${1:-}"

NUMS=(); TITLES=()
while IFS='|' read -r num title; do
  [ -z "$num" ] && continue
  NUMS+=("$num"); TITLES+=("$title")
done < "$LIST"

# Ambil isi setelah baris pemisah '---' pertama (melewati header file per bab)
body_of() { awk 'f{print; next} /^---$/{f=1}' "$1" | sed '/./,$!d'; }

fail=0
report=""

for i in "${!NUMS[@]}"; do
  bab="${NUMS[$i]}"
  pg="$CH_DIR/bab-$bab/soal-pilihan-ganda.md"
  essay="$CH_DIR/bab-$bab/soal-essay.md"
  lab="$CH_DIR/bab-$bab/soal-praktikum-lab.md"
  jwb="$CH_DIR/bab-$bab/jawaban.md"
  kuis="$CH_DIR/bab-$bab/kuis-ringkas.md"
  kunci_kuis="$CH_DIR/bab-$bab/kunci-kuis-ringkas.md"

  for f in "$pg" "$essay" "$lab" "$jwb" "$kuis" "$kunci_kuis"; do
    if [ ! -s "$f" ]; then
      report+="MISSING/EMPTY: $f"$'\n'; fail=1
    fi
  done
  [ -s "$pg" ] || continue
  [ -s "$essay" ] || continue
  [ -s "$lab" ] || continue
  [ -s "$jwb" ] || continue
  [ -s "$kuis" ] || continue
  [ -s "$kunci_kuis" ] || continue

  n_pg=$(grep -cE '^[0-9]+\. ' "$pg" || true)
  n_essay=$(grep -cE '^[0-9]+\. ' "$essay" || true)
  n_lab=$(grep -cE '^### Lab [0-9]+' "$lab" || true)
  n_kunci=$(grep -cE '^[0-9]+\. \*\*[A-D]\*\*' "$jwb" || true)
  n_kuis=$(grep -cE '^[0-9]+\. ' "$kuis" || true)
  n_kunci_kuis=$(grep -cE '^[0-9]+\. \*\*' "$kunci_kuis" || true)

  ok="OK"
  [ "$n_pg" = "15" ]         || { ok="PG=$n_pg(harus 15)"; fail=1; }
  [ "$n_essay" = "5" ]       || { ok="$ok ESSAY=$n_essay(harus 5)"; fail=1; }
  [ "$n_lab" = "10" ]        || { ok="$ok LAB=$n_lab(harus 10)"; fail=1; }
  [ "$n_kunci" = "15" ]      || { ok="$ok KUNCI=$n_kunci(harus 15)"; fail=1; }
  [ "$n_kuis" = "10" ]       || { ok="$ok KUIS=$n_kuis(harus 10)"; fail=1; }
  [ "$n_kunci_kuis" = "10" ] || { ok="$ok KUNCI-KUIS=$n_kunci_kuis(harus 10)"; fail=1; }
  report+="Bab $bab: PG=$n_pg essay=$n_essay lab=$n_lab kunci=$n_kunci kuis=$n_kuis kunci-kuis=$n_kunci_kuis [$ok]"$'\n'
done

echo "=== Laporan kelengkapan ==="
echo "$report"

if [ "$CHECK_ONLY" = "--check" ]; then
  if [ $fail -eq 0 ]; then echo "SEMUA LENGKAP"; else echo "ADA YANG BELUM LENGKAP"; fi
  exit $fail
fi

if [ $fail -ne 0 ]; then echo "Perakitan dibatalkan: ada bagian yang belum lengkap."; exit 1; fi

echo "=== Merakit file bank lengkap ==="

pg_header() {
cat <<'EOF'
# Bank Soal Pilihan Ganda — Frontend Development & Web Design

> **Mata kuliah:** Frontend Development & Web Design · Semester III
> **Prodi:** Sistem Informasi / Teknik Informatika
> **Studi kasus proyek:** Tokosaya — toko online UMKM _"Belanja Tepat, Kirim Cepat"_
> **Cakupan:** 14 bab (Bab 1–7 dan 9–15) · 15 soal per bab · **Total 210 soal**
> **Tingkat kesulitan:** campuran (C1–C6)
> **Versi per bab:** `bab-NN/soal-pilihan-ganda.md` · kunci: `bab-NN/jawaban.md` · **Kunci bank lengkap:** `jawaban.md`


EOF
}
essay_header() {
cat <<'EOF'
# Bank Soal Essay — Frontend Development & Web Design

> **Mata kuliah:** Frontend Development & Web Design · Semester III
> **Prodi:** Sistem Informasi / Teknik Informatika
> **Studi kasus proyek:** Tokosaya — toko online UMKM _"Belanja Tepat, Kirim Cepat"_
> **Cakupan:** 14 bab (Bab 1–7 dan 9–15) · 5 soal per bab · **Total 70 soal**
> **Tingkat kesulitan:** campuran (C2–C5)
> **Versi per bab:** `bab-NN/soal-essay.md` · poin jawaban: `bab-NN/jawaban.md` · **Kunci bank lengkap:** `jawaban.md`


EOF
}
lab_header() {
cat <<'EOF'
# Bank Soal Praktikum Lab — Frontend Development & Web Design

> **Mata kuliah:** Frontend Development & Web Design · Semester III
> **Prodi:** Sistem Informasi / Teknik Informatika
> **Studi kasus proyek:** Tokosaya — toko online UMKM _"Belanja Tepat, Kirim Cepat"_
> **Cakupan:** 14 bab (Bab 1–7 dan 9–15) · 10 soal per bab · **Total 140 soal**
> **Estimasi pengerjaan:** 20–40 menit per soal
> **Versi per bab:** `bab-NN/soal-praktikum-lab.md` · solusi: `bab-NN/jawaban.md` · **Kunci bank lengkap:** `jawaban.md`


EOF
}
jawaban_header() {
cat <<'EOF'
# Kunci Jawaban & Rubrik — Bank Soal Frontend Development & Web Design

> **Mata kuliah:** Frontend Development & Web Design · Semester III
> **Prodi:** Sistem Informasi / Teknik Informatika
> **Isi:** kunci + pembahasan pilihan ganda (210), poin jawaban + bobot skor essay (70),
> langkah solusi + kriteria penilaian praktikum lab (140)
> **Versi per bab:** `bab-NN/jawaban.md` · **File soal:** `soal-pilihan-ganda.md` · `soal-essay.md` · `soal-praktikum-lab.md`


EOF
}
kuis_header() {
cat <<'EOF'
# Bank Kuis Ringkas — Frontend Development & Web Design

> **Mata kuliah:** Frontend Development & Web Design · Semester III
> **Prodi:** Sistem Informasi / Teknik Informatika
> **Studi kasus proyek:** Tokosaya — toko online UMKM _"Belanja Tepat, Kirim Cepat"_
> **Cakupan:** 14 bab (Bab 1–7 dan 9–15) · 10 soal per bab (5 pilihan ganda + 5 isian singkat) · **Total 140 soal**
> **Estimasi waktu:** ±15 menit per bab
> **Versi per bab:** `bab-NN/kuis-ringkas.md` · kunci: `bab-NN/kunci-kuis-ringkas.md` · **Kunci bank lengkap:** `kunci-kuis-ringkas.md`


EOF
}
kunci_kuis_header() {
cat <<'EOF'
# Kunci Kuis Ringkas — Frontend Development & Web Design

> **Mata kuliah:** Frontend Development & Web Design · Semester III
> **Prodi:** Sistem Informasi / Teknik Informatika
> **Isi:** kunci + pembahasan pilihan ganda (70) dan isian singkat (70) — 10 butir per bab · **Total 140 kunci**
> **Versi per bab:** `bab-NN/kunci-kuis-ringkas.md` · **File soal:** `kuis-ringkas.md`


EOF
}

emit() { # $1=header fn  $2=namafile di folder bab  $3=outfile
  "$1" > "$3"
  db=""
  for i in "${!NUMS[@]}"; do db="$db Bab ${NUMS[$i]} ·"; done
  db="${db% ·}"
  printf '**Daftar Bab:**%s\n\n\n' "$db" >> "$3"
  for i in "${!NUMS[@]}"; do
    bab="${NUMS[$i]}"; title="${TITLES[$i]}"
    printf '## Bab %s — %s\n\n' "$bab" "$title" >> "$3"
    body_of "$CH_DIR/bab-$bab/$2" >> "$3"
    printf '\n---\n\n' >> "$3"
  done
  printf '\n' >> "$3"
  echo "  ✓ $3 ($(wc -l < "$3" | tr -d ' ') baris)"
}

emit pg_header         "soal-pilihan-ganda.md"  "quiz/soal-pilihan-ganda.md"
emit essay_header      "soal-essay.md"          "quiz/soal-essay.md"
emit lab_header        "soal-praktikum-lab.md"  "quiz/soal-praktikum-lab.md"
emit jawaban_header    "jawaban.md"             "quiz/jawaban.md"
emit kuis_header       "kuis-ringkas.md"        "quiz/kuis-ringkas.md"
emit kunci_kuis_header "kunci-kuis-ringkas.md"  "quiz/kunci-kuis-ringkas.md"

echo "Selesai. File bank lengkap diperbarui di quiz/."
