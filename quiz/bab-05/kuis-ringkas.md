# Kuis Ringkas — Bab 05: CSS Box Model dan Layout

> Frontend Development & Web Design · Semester III · _Kuis Ringkas per Bab_
> 10 soal (5 pilihan ganda + 5 isian singkat) · estimasi waktu ±15 menit · tingkat kesulitan campuran (C1–C4)
> Kunci + pembahasan: [kunci-kuis-ringkas.md](kunci-kuis-ringkas.md) · Bank lengkap 14 bab: [kuis-ringkas.md](../kuis-ringkas.md)

---

**Bagian A — Pilihan Ganda (5 soal)**

1. Bab ini menganalogikan komponen kartu seperti poster berbingkai di dinding kantor. Lapisan yang berperan sebagai jarak dari bingkai ke poster lain — transparan dan tidak ikut memakai warna elemen — adalah...
   - A. content
   - B. padding
   - C. border
   - D. margin

2. Kartu-kartu produk Tokosaya dalam satu baris harus punya tinggi minimum yang seragam, tetapi tetap boleh memanjang bila deskripsi produk bertambah panjang. Deklarasi yang paling tepat untuk kebutuhan itu adalah...
   - A. `min-height: 240px;`
   - B. `height: 240px;`
   - C. `max-height: 240px;`
   - D. `height: 240px; overflow: hidden;`

3. Badge "Best Seller" pada kartu Tokosaya sudah diberi `display: inline-block` beserta padding penuh, tetapi ia masih mengalir bersama teks dan tidak menempel di pojok gambar. Penjelasan yang tepat menurut bab ini adalah...
   - A. cukup menambahkan `top: 8px; right: 8px;` pada badge yang sudah `inline-block`
   - B. penempatan bukan tugas `display`; badge memerlukan `position: absolute` dengan induk yang diberi `position: relative`
   - C. menambah nilai `z-index` akan memindahkan kotak badge ke pojok kanan atas gambar
   - D. badge harus diubah menjadi `display: block` agar dapat digeser ke sudut tujuan

4. Tabel pesanan di halaman admin Tokosaya berisi puluhan baris. Bab ini menganjurkan wadah tabel diberi tinggi terbatas dan `overflow-y: auto` supaya...
   - A. baris-baris yang melebihi wadah dipotong dan tidak lagi dapat dijangkau pengguna
   - B. bilah gulir muncul di dalam panel hanya bila isi melebihi tinggi wadah, sehingga halaman utama tidak ikut menggulir jauh dan konteks pengguna tetap terjaga
   - C. bilah gulir panel selalu tampil sejak awal sehingga tinggi tabel selalu dapat diprediksi
   - D. baris-baris keluar dari wadah dan menimpa elemen di bawahnya

5. Panel promo Tokosaya ditulis `width: 300px; padding: 20px; border: 2px solid;`. Pernyataan yang tepat tentang lebar panel itu adalah...
   - A. 300 px pada mode apa pun, karena `width` selalu menjadi ukuran kotak di layar
   - B. 344 px pada mode bawaan; setelah `border-box` dipasang, lebar kotak menyusut menjadi 256 px
   - C. 344 px pada mode bawaan; setelah `border-box` dipasang, lebar kotak tetap 300 px karena padding dan border dipotong dari dalam
   - D. 304 px pada mode bawaan; setelah `border-box` dipasang, lebar kotak menjadi 260 px

**Bagian B — Isian Singkat (5 soal)**

6. Gambar produk Tokosaya ditulis sebagai `<img>` yang berperilaku *inline*, namun atribut `width` dan `height` tetap bekerja padanya. Bab ini menyebut `<img>` dan `<input>` sebagai kelompok elemen apa?

7. Nama produk yang dipenggal dengan pola elipsis pada kartu Tokosaya tetap dapat dibaca penuh lewat sarana bawaan HTML apa — tanpa perilaku dinamis dan tanpa JavaScript?

8. Mengapa deklarasi `z-index: 5` tidak berpengaruh selama elemennya masih `position: static`?

9. Tuliskan skala jarak baku proyek Tokosaya yang dibangun di atas `--space-unit: 8px` (enam langkah).

10. Jelaskan singkat mengapa jarak vertikal antarseksi halaman Tokosaya lebih aman diwujudkan lewat padding pada kontainer bagian daripada margin pada elemen anaknya.
