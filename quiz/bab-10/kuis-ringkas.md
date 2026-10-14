# Kuis Ringkas — Bab 10: Komponen Bootstrap

> Frontend Development & Web Design · Semester III · _Kuis Ringkas per Bab_
> 10 soal (5 pilihan ganda + 5 isian singkat) · estimasi waktu ±15 menit · tingkat kesulitan campuran (C1–C4)
> Kunci + pembahasan: [kunci-kuis-ringkas.md](kunci-kuis-ringkas.md) · Bank lengkap 14 bab: [kuis-ringkas.md](../kuis-ringkas.md)

---

**Bagian A — Pilihan Ganda (5 soal)**

1. Kartu produk Tokosaya menulis judul produk sebagai `<h3 class="card-title h6 font-heading">`. Tujuan pemakaian kelas ukuran `h6` pada elemen `h3` tersebut adalah...
   - A. agar pembaca layar melewati judul produk karena ukurannya kecil
   - B. menjaga susunan judul dokumen tetap benar, sementara ukuran tampilannya dibuat kecil
   - C. menurunkan tingkat judul dokumen seakan-akan halaman tidak memiliki judul di atasnya
   - D. agar judul produk otomatis berubah menjadi tautan menuju halaman detail

2. Navbar Tokosaya membungkus seluruh isinya dengan `<div class="container">`. Alasan pemasangan elemen itu adalah...
   - A. agar lebar isi navbar selaras dengan bagian halaman lain di bawahnya
   - B. karena daftar `navbar-nav` hanya boleh ditulis di dalam `container`
   - C. agar isi navbar otomatis tersusun mendatar sejak layar kecil
   - D. karena tombol `navbar-toggler` hanya bekerja di dalam `container`

3. Badge Tokosaya ditulis dengan satu kelas warna, misalnya `<span class="badge text-bg-warning">Best Seller</span>`. Keistimewaan pola `text-bg-*` pada Bootstrap 5.3 adalah...
   - A. hanya mengubah warna latar, sedangkan warna teks diwarisi dari halaman
   - B. menggantikan kelas `badge` sehingga badge cukup ditulis dengan satu kelas
   - C. mengatur warna latar dan warna teks sekaligus supaya kontrasnya tetap terbaca
   - D. mengubah semua ikon di dalam badge agar warnanya mengikuti latar

4. Sesuai kesepakatan bab ini, harga pada kartu produk Tokosaya ditulis dengan format...
   - A. `Rp 650.000`
   - B. `Rp650.000,00`
   - C. `rp650.000`
   - D. `Rp650.000`

5. Untuk memperlihatkan modal "Konfirmasi Pesanan" sebagai status beku di aliran halaman demo tanpa memuat JavaScript, pola yang dipakai buku ini adalah...
   - A. `<div class="modal">` dengan atribut `open` pada elemennya
   - B. `<div class="modal show" tabindex="-1" style="display: block; position: static;">`
   - C. `<div class="modal active">` dengan kelas `carousel-item` di dalamnya
   - D. `<div class="modal fade">` dengan atribut `data-bs-backdrop="static"`

**Bagian B — Isian Singkat (5 soal)**

6. Bootstrap Icons dikemas dalam bentuk apa, dan bagaimana satu ikon dipanggil pada halaman? Sebutkan contoh pasangan kelas untuk ikon keranjang Tokosaya.

7. Atribut apa yang dipasang pada komponen alert agar pembaca layar turut mengumumkan pesannya?

8. Breadcrumb dan pagination sama-sama menandai posisi halaman yang sedang dibuka. Sebutkan kelas dan atribut kunci penanda posisi itu pada masing-masing komponen.

9. Pada modal konfirmasi penghapusan produk dari keranjang tersedia tombol "Batal" dan "Ya, Hapus". Tentukan variant tombol Bootstrap untuk keduanya, lalu jelaskan singkat alasan makna semantik warnanya.

10. Pada carousel statis `demo-status.html`, dua gambar ditulis sebagai `carousel-item`. Tanpa JavaScript, item mana yang tampil, dan apa yang terjadi pada item lainnya?
