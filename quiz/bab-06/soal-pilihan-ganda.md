# Soal Pilihan Ganda — Bab 06: Flexbox untuk Web Layout

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)
> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)

---

**Pilihan Ganda (15 soal)**

1. Properti yang ditulis pada *flex container* untuk menentukan arah *main axis* adalah ...
   - A. `align-items`
   - B. `flex-direction`
   - C. `justify-content`
   - D. `flex-wrap`

2. Nilai `flex-wrap` yang mengizinkan item turun ke baris baru dengan urutan baris terbalik adalah ...
   - A. `nowrap`
   - B. `wrap`
   - C. `column-reverse`
   - D. `wrap-reverse`

3. Tiga chip berdiri di dalam wadah yang lebih lebar daripada total lebarnya. Nilai `justify-content` yang membuat **semua** celah — termasuk dua celah di tepi kiri dan kanan — sama besar adalah ...
   - A. `space-evenly`
   - B. `space-around`
   - C. `space-between`
   - D. `flex-start`

4. Perhatikan aturan baris flex berikut.

```css
.baris { display: flex; }
.kolom { flex: 1 1 160px; }
.kolom-unggulan { flex-grow: 2; }
```

Makna perubahan `flex-grow: 2` pada `.kolom-unggulan` adalah ...
   - A. kartu itu selalu dua kali lebih lebar daripada kartu `flex: 1` di layar
   - B. kartu itu menyusut dua kali lebih cepat saat ruang berkurang
   - C. kartu itu memperoleh dua kali porsi dari sisa ruang yang dibagikan setelah basis semua item terhitung
   - D. kartu itu didahulukan dua tingkat pada urutan visual

5. Pada kartu produk Tokosaya, `.produk-harga` diberi `margin-top: auto` di dalam kartu yang bertipe `display: flex; flex-direction: column;`. Efek deklarasi itu adalah ...
   - A. harga digeser ke tengah kartu secara horizontal
   - B. sisa ruang vertikal diserap margin sehingga harga menempel dasar kartu dan sejajar antarkartu
   - C. jarak antar-item dari `gap` dihapus khusus untuk elemen harga
   - D. harga dilekatkan pada elemen di atasnya sehingga tidak bisa diberi jarak

6. Komponen kontak pada footer memakai pola *media object*: ikon 40 × 40 px di kiri, teks di kanan. Agar teks memakai seluruh ruang sisa di samping ikon, deklarasi yang tepat adalah ...
   - A. `flex: 1` pada elemen teks
   - B. `flex: 1` pada elemen ikon
   - C. `justify-content: flex-end` pada wadah
   - D. `flex-basis: 40px` pada elemen teks

7. Seorang mahasiswa menulis `justify-content: space-between` pada setiap `.produk-card`, bukan pada `.produk-row`, dan heran karena tidak ada efek apa pun. Penyebabnya adalah ...
   - A. `justify-content` hanya bekerja kalau item juga diberi `flex: 1`
   - B. `justify-content` hanya bekerja saat `flex-wrap` aktif
   - C. `justify-content` adalah properti *container*; pada anak (flex item) nilainya tidak berlaku
   - D. `justify-content` menggeser item pada *cross axis*, bukan *main axis*

8. Hero Tokosaya memakai `display: flex; flex-direction: column;`. Properti yang menengahkan judul, subjudul, dan CTA secara horizontal pada pola tersebut adalah ...
   - A. `justify-content: center`
   - B. `text-align: center`
   - C. `flex: 1`
   - D. `align-items: center`

9. Baris kartu produk memakai `gap: 24px` dan `.produk-card { flex: 0 1 250px; }`. Pada jendela 1024 px dengan padding kiri-kanan 24 px (lebar konten baris 976 px), jumlah kartu yang muat berdampingan adalah ...
   - A. 3 kartu
   - B. 2 kartu
   - C. 4 kartu
   - D. 6 kartu

10. Ketika `flex-wrap: wrap` aktif dan kamu perlu jarak antar-baris yang berbeda dari jarak antarkolom, properti yang dipakai adalah ...
   - A. `gap` saja
   - B. `row-gap` dan `column-gap`
   - C. `align-self`
   - D. `justify-content`

11. Untuk kebutuhan berikut, kasus yang lebih tepat diserahkan ke CSS Grid daripada Flexbox adalah ...
   - A. deret chip filter yang panjangnya alami dan boleh menekuk
   - B. baris kartu yang boleh mengalir lalu mengganti basisnya saat layar menyempit
   - C. katalog dengan jumlah kolom pasti yang harus rata antar-baris
   - D. menengahkan satu gugus konten di tengah halaman

12. Nilai default properti `order` pada setiap flex item adalah ...
   - A. 10
   - B. 1
   - C. `auto`
   - D. 0

13. `.hero-subtitle` di proyek Tokosaya diberi `max-width: 640px`. Alasan utamanya adalah ...
   - A. menjaga panjang baris teks agar tidak membentang melelahkan mata di monitor lebar
   - B. mencegah subjudul menutupi tombol CTA di bawahnya
   - C. agar teks subjudul terbaca oleh *screen reader*
   - D. agar subjudul otomatis terbagi menjadi dua kolom

14. Baris kartu produk tampak "bergelombang": kartu tidak sama tinggi dan harga tidak sejajar. Ditemukan aturan `.produk-row { display: flex; align-items: center; }`. Perbaikan yang tepat adalah ...
   - A. memberi `height` tetap pada setiap `.produk-card`
   - B. menghapus `align-items: center` (kembali ke `stretch`) dan memberi `margin-top: auto` pada `.produk-harga`
   - C. mengubah `flex-wrap` menjadi `nowrap`
   - D. memberi `align-self: center` pada semua kartu

15. Hero Tokosaya sengaja hanya memuat satu CTA utama "Lihat Katalog"; link tambahan, jika perlu, ditampilkan sebagai link teks biasa. Alasannya adalah ...
   - A. hero hanya boleh memuat satu elemen agar validasi HTML lolos
   - B. tombol kedua tidak dapat memakai token warna proyek
   - C. di layar kecil satu tindakan yang jelas lebih mudah dipahami daripada beberapa tombol yang berebut perhatian
   - D. hanya satu elemen yang boleh memakai `flex: 1` di dalam sebuah flex container
