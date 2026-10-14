# Bank Soal — Frontend Development & Web Design

Bank soal untuk mata kuliah **Frontend Development & Web Design** (Semester III, Prodi Sistem
Informasi / Teknik Informatika), disusun dari isi `buku/`. Studi kasus proyek: **Tokosaya**.

**Total 560 butir:** 210 pilihan ganda · 140 kuis ringkas (70 pilihan ganda + 70 isian singkat) ·
70 essay · 140 praktikum lab — tersebar di 14 bab (Bab 8/UTS dan Bab 16/UAS tidak berisi materi
sehingga tidak punya bank soal).

## Struktur

### 1. Per bab — folder `bab-NN/`

Setiap bab punya foldernya sendiri, termasuk `kuis-ringkas.md` yang siap dipakai untuk kuis mingguan:

| Folder | Bab | Muatan |
| --- | --- | --- |
| [`bab-01/`](bab-01/) | Pengantar Frontend Development dan Web Design | 15 PG · 5+5 kuis · 5 essay · 10 lab |
| [`bab-02/`](bab-02/) | HTML5 dan Struktur Semantik | 15 PG · 5+5 kuis · 5 essay · 10 lab |
| [`bab-03/`](bab-03/) | Dasar-Dasar CSS | 15 PG · 5+5 kuis · 5 essay · 10 lab |
| [`bab-04/`](bab-04/) | Tipografi dan Visual Design CSS | 15 PG · 5+5 kuis · 5 essay · 10 lab |
| [`bab-05/`](bab-05/) | CSS Box Model dan Layout | 15 PG · 5+5 kuis · 5 essay · 10 lab |
| [`bab-06/`](bab-06/) | Flexbox untuk Web Layout | 15 PG · 5+5 kuis · 5 essay · 10 lab |
| [`bab-07/`](bab-07/) | CSS Grid dan Responsive Web Design | 15 PG · 5+5 kuis · 5 essay · 10 lab |
| [`bab-09/`](bab-09/) | Pengenalan Bootstrap 5 | 15 PG · 5+5 kuis · 5 essay · 10 lab |
| [`bab-10/`](bab-10/) | Komponen Bootstrap | 15 PG · 5+5 kuis · 5 essay · 10 lab |
| [`bab-11/`](bab-11/) | Form dan User Interface Design | 15 PG · 5+5 kuis · 5 essay · 10 lab |
| [`bab-12/`](bab-12/) | UI/UX dan Design System | 15 PG · 5+5 kuis · 5 essay · 10 lab |
| [`bab-13/`](bab-13/) | Website Responsif dan Accessibility | 15 PG · 5+5 kuis · 5 essay · 10 lab |
| [`bab-14/`](bab-14/) | Implementasi Desain Figma ke HTML CSS | 15 PG · 5+5 kuis · 5 essay · 10 lab |
| [`bab-15/`](bab-15/) | Final Project dan Quality Assurance | 15 PG · 5+5 kuis · 5 essay · 10 lab |

"5+5 kuis" = 5 pilihan ganda + 5 isian singkat pada `kuis-ringkas.md`.

Isi tiap folder:

- `soal-pilihan-ganda.md` — 15 soal, 4 opsi
- `soal-essay.md` — 5 soal
- `soal-praktikum-lab.md` — 10 soal lab (konteks + tugas + bukti), estimasi 20–40 menit per soal
- `jawaban.md` — kunci + pembahasan PG, poin jawaban + bobot skor essay, langkah solusi + kriteria penilaian lab — khusus bab tersebut
- `kuis-ringkas.md` — 10 soal kuis kilat mingguan (5 pilihan ganda + 5 isian singkat), estimasi ±15 menit
- `kunci-kuis-ringkas.md` — kunci + pembahasan singkat kuis ringkas; sengaja dipisah agar berkas soal bisa dibagikan tanpa kunci

### 2. Bank lengkap 14 bab — file di root `quiz/`

Agregasi seluruh bab untuk kebutuhan UTS/UAS atau arsip:

| File | Isi |
| --- | --- |
| [`soal-pilihan-ganda.md`](soal-pilihan-ganda.md) | Seluruh 210 soal PG |
| [`soal-essay.md`](soal-essay.md) | Seluruh 70 soal essay |
| [`soal-praktikum-lab.md`](soal-praktikum-lab.md) | Seluruh 140 soal lab |
| [`jawaban.md`](jawaban.md) | Seluruh kunci + pembahasan + rubrik bank soal inti (420 butir) |
| [`kuis-ringkas.md`](kuis-ringkas.md) | Seluruh 140 soal kuis ringkas (70 PG + 70 isian singkat) |
| [`kunci-kuis-ringkas.md`](kunci-kuis-ringkas.md) | Seluruh 140 kunci + pembahasan kuis ringkas |

## Konvensi

- Tingkat kesulitan soal campuran (C1–C6), tetapi **tag level tidak ditampilkan** di awal soal.
- Penomoran dimulai dari 1 di setiap bab, per tipe; nomor di `jawaban.md` selalu
  berkorespondensi dengan nomor di file soal.
- Kunci PG disebar merata antar opsi A–D; distraktor homogen dan plausibel.
- Soal bertingkat: ±4 butir C1/C2, ±8 butir C3/C4, ±3 butir C5/C6 per bab (PG).
- Kuis ringkas: 10 butir per bab (5 PG + 5 isian singkat), tiap butir 10 poin; kunci PG disebar
  merata A–D dan kunci selalu berada di `kunci-kuis-ringkas.md`, bukan di berkas soal.

## Regenerasi

File bank lengkap di root dirakit ulang dari folder per bab:

```bash
bash scripts/build-quiz-bank.sh           # validasi jumlah lalu rakit ulang
bash scripts/build-quiz-bank.sh --check   # cek kelengkapan saja
node scripts/quiz-qa.mjs                  # QA struktur (opsi, sebaran kunci, kebocoran, blok kode)
```

Untuk memperbaiki/menambah soal: sunting langsung file di `quiz/bab-NN/`, lalu jalankan
`build-quiz-bank.sh` agar file bank lengkap ikut diperbarui. Daftar bab dan judulnya ada di
`scripts/quiz-chapters.txt`.
