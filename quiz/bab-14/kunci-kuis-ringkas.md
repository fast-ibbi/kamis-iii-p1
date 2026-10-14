# Kunci Kuis Ringkas — Bab 14: Implementasi Desain Figma ke HTML CSS

> Frontend Development & Web Design · Semester III · _Kunci Kuis Ringkas per Bab_
> Penilaian: 10 butir × 10 poin (total 100) · kunci pilihan ganda + jawaban isian singkat + pembahasan ringkas
> File soal bab ini: [kuis-ringkas.md](kuis-ringkas.md) · Kunci lengkap 14 bab: [kunci-kuis-ringkas.md](../kunci-kuis-ringkas.md)

---

### Bagian A — Pilihan Ganda

1. **B** — rantai lima tahap berjalan dari brief, lalu arsitektur informasi dan sitemap, lalu wireframe, lalu UI design di Figma, dan terakhir handoff; opsi lain menukar-nukar urutan tahapnya.
2. **D** — prototip adalah simulasi desain yang menjawab "seperti apa bentuknya", sedangkan implementasi adalah kode sebenarnya yang menjawab "bagaimana bentuk itu hidup di semua layar"; keduanya menjawab pertanyaan berbeda, jadi opsi B dan C salah, dan opsi A keliru karena prototip bukan kode HTML.
3. **A** — gutter adalah celah antarkolom 24 px, sedangkan margin adalah jarak sisi kiri-kanan frame ke kontainer (150 px pada frame 1440 untuk kontainer 1140); opsi B menukar perannya, opsi C menyamakan gutter dengan lebar kolom, dan opsi D mengarang arti keduanya.
4. **B** — lapis pertama memetakan setiap color style menjadi CSS custom property di blok `:root`, lapis kedua memetakan setiap text style menjadi aturan tipografi yang menyalin ukuran, ketebalan, dan line-height; opsi A menukar kedua lapis, opsi C mencampur keduanya, dan opsi D melanggar disiplin token.
5. **C** — dua kolom berurutan berukuran 2 × 73 + 24 = 170 px; 146 px mengabaikan gutter, 194 px menghitung dua gutter, dan 219 px menghitung tiga kolom.

### Bagian B — Isian Singkat

6. **variabel desain berbasis peran (warna, font, radius, jarak) sebagai satu sumber kebenaran, dikumpulkan di blok `:root` pada `css/style.css`** — token dipetakan sekali dari Figma styles lalu dipakai ulang lewat `var(--…)`, sehingga ketika desain diperbarui cukup blok `:root` yang disalin ulang.
7. **karena 12 mudah dibagi rata menjadi 2, 3, dan 4 bagian** — kombinasi seperti 6+6 (setengah), 4+4+4 (sepertiga), dan 8+4 tetap rapi tanpa kolom bersisa.
8. **nilai disalin ke tabel token sendiri lalu ditulis ulang dengan disiplin token dan kelas Bootstrap proyek** — panel Inspect bisa menyarankan struktur CSS yang berbeda dari struktur proyekmu, sehingga salinan mentah berisiko menambah nilai liar dan aturan berulang yang sulit diaudit.
9. **tablet 768 px: gutter 24 px dan margin kontainer 32 px; HP 375 px: gutter 16 px dan margin kontainer 24 px** — kolom detail produk mulai menumpuk pada ≤ 767 px memakai `col-12`, dengan judul halaman menyusut ke 24 px.
10. **"Tersedia" memakai `--clr-success` `#16A34A`, sedangkan "Stok Terbatas" memakai `--clr-danger` `#DC2626`** — keduanya diwujudkan lewat kelas `.badge-tersedia` dan `.badge-stok` dengan teks putih pada format badge pil 12 px.
