#!/usr/bin/env bash
# (Sekali pakai / migrasi) Bentuk folder per bab quiz/bab-NN/ dari file parsial quiz/.build/.
# Setelah folder per bab terbentuk, quiz/.build/ boleh dihapus; sumber kebenaran = quiz/bab-NN/.
set -euo pipefail
cd "$(dirname "$0")/.."

SRC="quiz/.build"
DEST="quiz"
LIST="scripts/quiz-chapters.txt"

# buang baris H2 judul bab + baris kosong di awalnya
body_of() { sed '1{/^## Bab /d;}' "$1" | sed '/./,$!d'; }

while IFS='|' read -r num title; do
  [ -z "$num" ] && continue
  dir="$DEST/bab-$num"
  mkdir -p "$dir"

  src_pg="$SRC/bab-$num-pg.md"
  src_essay="$SRC/bab-$num-essay.md"
  src_lab="$SRC/bab-$num-lab.md"
  src_jwb="$SRC/bab-$num-jawaban.md"
  for f in "$src_pg" "$src_essay" "$src_lab" "$src_jwb"; do
    [ -s "$f" ] || { echo "GAGAL: $f tidak ada/kosong"; exit 1; }
  done

  {
    echo "# Soal Pilihan Ganda — Bab $num: $title"
    echo
    echo "> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_"
    echo "> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)"
    echo "> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)"
    echo
    echo "---"
    echo
    body_of "$src_pg"
  } > "$dir/soal-pilihan-ganda.md"

  {
    echo "# Soal Essay — Bab $num: $title"
    echo
    echo "> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_"
    echo "> 5 soal essay · tingkat kesulitan campuran (C2–C5)"
    echo "> Poin jawaban + bobot skor: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-essay.md](../soal-essay.md)"
    echo
    echo "---"
    echo
    body_of "$src_essay"
  } > "$dir/soal-essay.md"

  {
    echo "# Soal Praktikum Lab — Bab $num: $title"
    echo
    echo "> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_"
    echo "> 10 soal praktikum · estimasi 20–40 menit per soal"
    echo "> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)"
    echo
    echo "---"
    echo
    body_of "$src_lab"
  } > "$dir/soal-praktikum-lab.md"

  {
    echo "# Kunci Jawaban & Rubrik — Bab $num: $title"
    echo
    echo "> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)"
    echo "> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)"
    echo
    echo "---"
    echo
    body_of "$src_jwb"
  } > "$dir/jawaban.md"

  echo "  ✓ quiz/bab-$num/ (4 file)"
done < "$LIST"

echo "Selesai. Folder per bab dibuat di quiz/bab-NN/."
