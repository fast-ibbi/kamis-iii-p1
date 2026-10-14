# Soal Pilihan Ganda — Bab 15: Final Project dan Quality Assurance

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)
> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)

---

**Pilihan Ganda (15 soal)**

1. Berkas gambar produk yang penamaannya sesuai konvensi proyek Tokosaya adalah…
   - A. `photo3.svg`
   - B. `Produk_Keyboard_KX210.svg`
   - C. `produk-keyboard-kx210.svg`
   - D. `produk keyboard kx210.svg`

2. Saat menguji satu sel test matrix, pemindai lima titik yang dijalankan berurutan memeriksa…
   - A. navigasi, hero, grid kartu, form, dan footer
   - B. hero, navigasi, footer, form, dan grid kartu
   - C. form, footer, hero, navigasi, dan grid kartu
   - D. footer, grid kartu, hero, navigasi, dan form

3. Pada `laporan-temuan.html`, kolom yang membuat pembaca lain dapat mengulang gejala yang sama persis adalah…
   - A. ID temuan
   - B. langkah reproduksi
   - C. severitas
   - D. halaman

4. Sekelompok tombol radio "Kategori pesan" beserta judul kelompoknya paling tepat dibungkus dengan…
   - A. `<div class="form-group">` dan `<h3>`
   - B. `<ul>` dan `<li>`
   - C. `<section>` dan `<p>`
   - D. `<fieldset>` dan `<legend>`

5. Kebutuhan menampilkan sebuah blok hanya pada layar ≥ 768 px paling tepat dipenuhi dengan…
   - A. `d-md-none`
   - B. `d-block d-md-none`
   - C. `d-none d-md-block`
   - D. `d-lg-block`

6. Menurut tabel praktik terbaik subbab 15.4, kebutuhan "jarak bawah pada kartu" diselesaikan dengan utilitas…
   - A. `mb-3`
   - B. `mt-3`
   - C. `mx-3`
   - D. `p-3`

7. Temuan QA "radius kartu unggulan 8 px, sementara styleguide menetapkan 12 px" paling tepat diberi severitas…
   - A. Kritis
   - B. Minor
   - C. Mayor
   - D. perlu verifikasi ulang sebelum berstatus temuan

8. Langkah pertama metode debugging empat langkah pada subbab 15.7 adalah…
   - A. menyusun hipotesis tunggal penyebab
   - B. mengisolasi elemen terkecil yang gagal
   - C. memverifikasi ulang dengan memuat ulang halaman
   - D. mereproduksi temuan beserta tangkapan layar sebelum/sesudah

9. Karena JavaScript berada di luar cakupan mata kuliah, setiap halaman Tokosaya menuliskan komentar berikut pada bagian `head`…
   - A. `<!-- Tanpa bundle JavaScript Bootstrap: interaksi di luar cakupan mata kuliah -->`
   - B. `<!-- kustom -->`
   - C. `<!-- CDN dikunci pada versi 5.3.3 -->`
   - D. `<!-- TODO: tambahkan skrip setelah rilis -->`

10. Validator W3C menampilkan lima kesalahan pada satu halaman sekaligus. Penanganan yang paling tepat adalah…
   - A. mengabaikan peringatan dan memperbaiki kesalahan terbawah lebih dulu
   - B. menulis ulang seluruh halaman memakai framework lain
   - C. memperbaiki kesalahan paling atas, memvalidasi ulang, lalu lanjut ke kesalahan berikutnya
   - D. menambahkan `!important` pada CSS agar validator berhenti mengeluh

11. Gambar hias yang murni dekoratif dan tidak membawa makna konten paling tepat diberi atribut `alt` berupa…
   - A. `alt="dekorasi"`
   - B. `alt=""` yang sengaja dikosongkan
   - C. `alt="gambar"` agar tidak kosong
   - D. `title` sebagai pengganti `alt`

12. Ketika halaman dibuka di Firefox, jarak bawaan elemen form terlihat berbeda dari Chrome. Sikap paling tepat menurut prosedur pengujian bab ini adalah…
   - A. mengabaikannya karena Chrome adalah browser acuan utama
   - B. mengganti framework agar tampilan identik di semua browser
   - C. membandingkan skor Lighthouse kedua browser lalu memilih yang tertinggi
   - D. mencatat tampilan yang menyimpang sebagai temuan pengujian lintas-browser

13. Lighthouse memberi skor aksesibilitas 95, tetapi penelusuran halaman dengan tombol tab ternyata berantakan. Kesimpulan yang paling tepat adalah…
   - A. skor alat bukan sertifikasi kualitas; pengujian manual untuk makna dan urutan tetap wajib
   - B. skor 95 sudah membuktikan aksesibilitas halaman selesai
   - C. urutan tab bukan bagian dari kriteria aksesibilitas
   - D. cukup menaikkan skor hingga 100 agar seluruh masalah selesai

14. Menjelang penguncian rilis kandidat, masih ada dua temuan berstatus Kritis dan terbuka. Keputusan paling tepat adalah…
   - A. mengunci rilis karena seluruh item Disarankan sudah terpenuhi
   - B. menurunkan severitas kedua temuan menjadi Minor agar checklist lulus
   - C. menunda penguncian, memperbaiki dan memverifikasi kedua temuan tersebut lebih dulu
   - D. mengirim paket apa adanya sambil melampirkan permintaan maaf

15. Rencana demo tiga menit pada sesi QA presentasi paling tepat disusun sebagai…
   - A. mendemokan seluruh halaman pada satu breakpoint agar aman
   - B. menyiapkan urutan halaman dan titik breakpoint yang diuji (dua form dan satu katalog) beserta tangkapan layar cadangan
   - C. menyerahkan berkas ZIP agar penguji mencoba sendiri
   - D. meminta tambahan waktu bila perangkat presentasi bermasalah
