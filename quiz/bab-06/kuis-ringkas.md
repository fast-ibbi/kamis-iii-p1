# Kuis Ringkas — Bab 06: Flexbox untuk Web Layout

> Frontend Development & Web Design · Semester III · _Kuis Ringkas per Bab_
> 10 soal (5 pilihan ganda + 5 isian singkat) · estimasi waktu ±15 menit · tingkat kesulitan campuran (C1–C4)
> Kunci + pembahasan: [kunci-kuis-ringkas.md](kunci-kuis-ringkas.md) · Bank lengkap 14 bab: [kuis-ringkas.md](../kuis-ringkas.md)

---

**Bagian A — Pilihan Ganda (5 soal)**

1. Elemen `<nav class="site-nav">` pada Tokosaya diberi `display: flex`. Elemen yang otomatis berubah menjadi flex item adalah...
   - A. semua elemen di dalamnya, termasuk anak dari anak
   - B. hanya anak langsungnya, seperti merek dan pembungkus kelompok kanan
   - C. hanya elemen yang diberi kelas khusus oleh penulis CSS
   - D. hanya elemen pertama di dalam wadah

2. Pada `.produk-row` di katalog Tokosaya, kartu-kartu dalam satu baris ternyata sudah sama tinggi walaupun panjang deskripsinya berbeda dan belum ada aturan tinggi yang ditulis. Hal itu terjadi karena...
   - A. `align-items: stretch` adalah nilai default, sehingga kartu meregang mengikuti tinggi baris
   - B. `flex: 0 1 250px` memaksa setiap kartu sama tinggi 250 px
   - C. `flex-wrap: wrap` menyeragamkan tinggi semua kartu di setiap baris
   - D. `gap: 24px` menyamakan tinggi kartu selama baris masih longgar

3. Empat tombol filter kategori berdiri di toolbar katalog dan wadahnya masih menyisakan ruang. Tim ingin tiap tombol memiliki jarak sama di kedua sisinya, sehingga jarak di tepi paling kiri dan paling kanan hanya setengah jarak antartombol. Nilai `justify-content` yang dipakai adalah...
   - A. `space-between`
   - B. `space-evenly`
   - C. `space-around`
   - D. `flex-start`

4. Agar kelompok `.site-nav-kanan` (menu dan tombol Keranjang) selalu menempel di ujung kanan baris navigasi tanpa mengubah `justify-content` wadah `.site-nav`, satu deklarasi yang dapat ditulis pada `.site-nav-kanan` adalah...
   - A. `justify-content: flex-end;`
   - B. `margin-left: auto;`
   - C. `align-self: flex-end;`
   - D. `order: 1;`

5. Footer multi kolom Tokosaya dibangun dengan `.site-footer { display: flex; flex-wrap: wrap; gap: 32px; }` dan setiap kolom memakai `flex: 1 1 240px;`. Ketika jendela makin sempit sehingga tiga kolom tidak lagi muat, yang terjadi adalah...
   - A. seluruh kolom menyusut proporsional dan tetap satu baris karena `flex-grow: 1`
   - B. kolom yang tidak muat turun ke baris baru tetapi hanya selebar 240 px
   - C. kolom ketiga disembunyikan otomatis agar baris tetap rapi
   - D. kolom yang tidak muat turun ke baris baru dan memakai lebar penuh baris, sementara baris di atasnya tetap terbagi rata; responsifnya berjalan tanpa media query

**Bagian B — Isian Singkat (5 soal)**

6. Flexbox memiliki dua sumbu. Sebutkan nama kedua sumbu tersebut beserta properti yang membagi atau menyelaraskan item pada masing-masing sumbu.

7. Pada navigasi Tokosaya, `<ul>` menu dan tombol Keranjang dibungkus satu elemen `.site-nav-kanan`. Jelaskan dua alasan pengelompokan itu, dikaitkan dengan `justify-content: space-between` dan `flex-wrap`.

8. Wadah kartu memakai `align-items: flex-start` supaya kartu pendek tidak ikut meregang, tetapi satu kartu unggulan tetap harus meregang penuh setinggi baris. Properti apa yang ditulis pada kartu unggulan itu saja?

9. Bab ini mengizinkan `order` untuk penyesuaian kecil, misalnya mendahulukan kolom kontak di footer pada layar sempit. Apa risiko `order` terhadap pembaca *screen reader*, dan bagaimana batas aman pemakaiannya?

10. Bagaimana cara memastikan di Chrome DevTools bahwa `.produk-row` sudah benar-benar aktif sebagai flex container?
