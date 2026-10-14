# Kuis Ringkas — Bab 07: CSS Grid dan Responsive Web Design

> Frontend Development & Web Design · Semester III · _Kuis Ringkas per Bab_
> 10 soal (5 pilihan ganda + 5 isian singkat) · estimasi waktu ±15 menit · tingkat kesulitan campuran (C1–C4)
> Kunci + pembahasan: [kunci-kuis-ringkas.md](kunci-kuis-ringkas.md) · Bank lengkap 14 bab: [kuis-ringkas.md](../kuis-ringkas.md)

---

**Bagian A — Pilihan Ganda (5 soal)**

1. Pada kerangka grid dashboard Tokosaya, istilah untuk gabungan beberapa sel yang membentuk wilayah persegi adalah...
   - A. grid track
   - B. sel (cell)
   - C. area
   - D. gap

2. Pada latihan grid Tokosaya, Rina menulis `grid-template-columns: repeat(2, 200px 1fr);` pada sebuah wadah. Rangkaian track yang dihasilkan penulisan itu adalah...
   - A. dua kolom saja, satu kolom berukuran `200px` dan satu kolom berukuran `1fr`
   - B. `200px 200px 1fr 1fr`, karena semua ukuran tetap dikumpulkan lebih dahulu lalu porsi ruang sisa menyusul
   - C. `200px 2fr 2fr`, karena angka `2` mengalikan setiap ukuran di dalam pasangan
   - D. `200px 1fr 200px 1fr`, yaitu pasangan `200px 1fr` yang diulang dua kali

3. Bab ini menganjurkan `gap` alih-alih `margin` untuk memberi jarak antar kartu statistik. Alasan utamanya adalah...
   - A. `gap` dapat mengambil nilai `fr`, sedangkan `margin` hanya menerima satuan `px` dan `%`
   - B. `gap` dipahami browser sebagai jarak di dalam kerangka sehingga setiap sel mendapat hak yang sama, tanpa trik mengecualikan sel pertama atau sel terakhir lewat pseudo-class seperti `:last-child`
   - C. `gap` bekerja pada layout dua dimensi, sedangkan `margin` hanya boleh dipakai pada layout satu dimensi Flexbox
   - D. `gap` sekaligus menyamakan tinggi seluruh baris, sedangkan `margin` tidak memengaruhi tinggi baris

4. Di titik breakpoint 768 piksel, Rina menulis blok `@media (min-width: 768px) and (orientation: portrait) { ... }`. Blok itu diterapkan ketika...
   - A. lebar viewport minimal 768 piksel dan orientasi perangkat sedang portrait, karena kedua syarat harus terpenuhi
   - B. lebar viewport minimal 768 piksel atau orientasi portrait, karena salah satu syarat saja sudah cukup
   - C. lebar viewport paling banyak 768 piksel dan orientasi perangkat tidak lagi diperiksa
   - D. lebar viewport minimal 768 piksel, sedangkan orientasi portrait baru diperiksa bila kedua kondisi dipisah koma

5. Halaman `admin.html` ditulis dengan pendekatan mobile-first; gaya dasar sudah benar dan seluruh blok `min-width` ditulis lengkap bersatuan `px` dengan urutan menaik. Ketika dibuka dari HP, tampilannya tetap seperti versi desktop yang dikecilkan, seolah tidak ada blok media query yang berlaku. Penyebab paling mungkin beserta perbaikannya adalah...
   - A. blok media query berada pada file terpisah sehingga tidak pernah dibaca browser; seluruh aturan harus digabungkan ke satu file CSS
   - B. tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">` belum tertulis sehingga halaman diperlakukan selebar desktop; tag itu harus ditambahkan di `<head>`
   - C. nilai kueri harus diganti menjadi `max-width` supaya gaya baru berlaku di layar kecil; seluruh blok media query harus diubah
   - D. urutan blok media query harus dibalik dari besar ke kecil; susunan blok harus dirapikan dari 1200 px sampai 576 px

**Bagian B — Isian Singkat (5 soal)**

6. Sebuah halaman memuat `<div class="dasbor">` yang menampung `header`, `nav`, `main`, dan `footer` sebagai butir-butir grid dua dimensi. Tuliskan satu deklarasi pada `.dasbor` yang membuat hal itu terwujud.

7. Aturan `.katalog-grid img` dipakai agar gambar produk Tokosaya tidak pernah melebihi wadahnya. Tuliskan tiga deklarasi yang dipakai bab ini dan jelaskan singkat mengapa `display: block` ikut diperlukan.

8. Untuk baris navigasi (logo di kiri, menu di kanan) dan untuk kerangka halaman header–nav–main–footer, teknologi layout mana yang paling tepat? Sebutkan pasangannya beserta satu alasan singkat untuk masing-masing.

9. Judul dashboard Tokosaya memakai `font-size: clamp(1.5rem, 1.1rem + 1.8vw, 2.25rem);`. Sebutkan tiga argumen fungsi `clamp()` secara berurutan beserta peran masing-masing, tanpa perlu menghitung nilainya.

10. Wadah `.katalog-grid` memakai `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));` dan `gap: 20px;`. Anggap wadah tidak memiliki padding dan jendela browser selebar 800 piksel. Berapa kolom yang terbentuk? Sertakan perhitungan singkatnya.
