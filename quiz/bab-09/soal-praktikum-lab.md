# Soal Praktikum Lab — Bab 09: Pengenalan Bootstrap 5

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 10 soal praktikum · estimasi 20–40 menit per soal
> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)

---

**Praktikum Lab (10 soal)**

### Lab 1 — Memasang dan memverifikasi starter template
**Konteks:** Folder `tokosaya-bootstrap/` baru berisi subfolder `css/` dan `img/` yang masih kosong. Seluruh halaman bab kedua akan dimulai dari satu starter template yang sama, jadi template ini harus benar sejak awal.

**Tugas:**
1. Tulis `tokosaya-bootstrap/index.html` mengikuti starter template: `DOCTYPE`, `html lang="id"`, meta charset, meta viewport, judul, lalu link Bootstrap 5.3.3 via CDN, Bootstrap Icons 1.11.3, komentar penanda tanpa *bundle*, Google Fonts, dan `css/style.css` paling belakang.
2. Isi halaman dengan satu `<main class="container py-4">` berisi tombol uji `btn btn-primary`, satu `h1`, dan satu paragraf singkat.
3. Buka halaman di Chrome, lalu buka DevTools tab *Network* dan catat status kedua permintaan CDN CSS.
4. Catat urutan keempat link di `head` beserta alasan urutan itu dalam dua kalimat.

**Bukti yang dikumpulkan:** berkas `index.html`, tangkapan layar tab Network dengan status permintaan, dan dua kalimat alasan urutan link.

### Lab 2 — Blok "Empat Alasan Berbelanja"
**Konteks:** Landing page Tokosaya perlu satu seksi keunggulan berisi empat poin: Harga Jujur, Layanan Cepat, Dukungan Lokal, dan Garansi Tukar. Seksi ini harus tampil satu kartu per baris di HP, dua di tablet, dan empat di desktop.

**Tugas:**
1. Buat `latihan-bootstrap/layanan.html` dari starter template (Bootstrap Icons wajib dimuat).
2. Bangun `<section class="container py-5">` berisi `h2` dan `row g-4`, dengan empat `<article class="col-12 col-sm-6 col-lg-3">` berisi ikon Bootstrap Icons, judul, dan satu kalimat penjelasan.
3. Pastikan tidak ada satu baris CSS kustom: seluruh jarak, perataan, dan tipografi dikerjakan kelas *utility* (misalnya `text-center`, `fs-1`, `text-primary`, `mt-3`, `text-body-secondary`).
4. Uji di device toolbar pada 375 px, 768 px, dan 1200 px, lalu catat jumlah kartu per baris di setiap lebar.

**Bukti yang dikumpulkan:** berkas halaman, tiga tangkapan layar, dan tabel jumlah kartu per baris.

### Lab 3 — Membetulkan seksi keunggulan yang berantakan
**Konteks:** Rekan magangmu menyerahkan markup seksi keunggulan Tokosaya. Setelah dibuka di desktop, dua kartu tampil sepertiga lebar tetapi kartu ketiga jatuh sendirian ke baris baru, satu ikon tampil sebagai kotak kosong, dan jarak bawah judul seksi tidak pernah muncul walaupun kelasnya sudah ditulis.

**Tugas:**
1. Tinjau potongan markup berikut, temukan **tiga cacat** beserta dampaknya, lalu jelaskan cacat mana yang membuat jumlah garis penggaris pada baris itu melewati 12.

```html
<section class="container py-5">
  <h2 class="text-center mb-6">Kenapa Belanja di Tokosaya</h2>
  <div class="row g-4">
    <article class="col-12 col-md-4 text-center">
      <i class="bi bi-tag fs-1 text-primary" aria-hidden="true"></i>
      <h3 class="h5 mt-3">Harga Jujur</h3>
      <p class="text-body-secondary mb-0">Harga dicantumkan apa adanya.</p>
    </article>
    <article class="col-12 col-md-4 text-center">
      <i class="bi bi-lightning-charge fs-1 text-primary" aria-hidden="true"></i>
      <h3 class="h5 mt-3">Layanan Cepat</h3>
      <p class="text-body-secondary mb-0">Pesanan diproses pada hari yang sama.</p>
    </article>
    <article class="col-12 col-md-5 text-center">
      <i class="bi bi-shop fs-1 text-primary" aria-hidden="true"></i>
      <h3 class="h5 mt-3">Dukungan Lokal</h3>
      <p class="text-body-secondary mb-0">UMKM lokal yang mengutamakan pelajar.</p>
    </article>
  </div>
</section>
```

2. Tulis versi perbaikannya ke `latihan-bootstrap/keunggulan-perbaikan.html`, lalu uji pada 768 px dan 1200 px.
3. Tulis satu kalimat yang menjelaskan mengapa kesalahan eja kelas bisa membuat markup "tampak benar" tetapi gayanya tidak muncul.

**Bukti yang dikumpulkan:** versi perbaikan, daftar tiga cacat beserta dampaknya, tangkapan layar sesudah perbaikan pada 1200 px, dan satu kalimat penjelasan.

### Lab 4 — Mendokumentasikan lebar `.container`
**Konteks:** Tim ingin memastikan halaman Tokosaya tidak memakai lebar konten yang berbeda dari pustaka, sehingga hasil review desain tetap konsisten.

**Tugas:**
1. Buat halaman uji berisi satu `div` ber-`container` dengan latar `bg-body-tertiary` dan satu `div` ber-`container-fluid` dengan latar berbeda.
2. Ukur lebar terhitung `div.container` pada 375 px, 600 px, 800 px, 1000 px, 1300 px, dan 1500 px memakai panel Computed DevTools.
3. Susun tabel hasil ukur dan bandingkan dengan tabel lebar maksimum yang kamu pelajari dari bab ini.
4. Tulis satu paragraf yang menjelaskan kapan proyek sebaiknya memakai `.container` dan kapan `.container-fluid`, dengan satu contoh elemen untuk masing-masing.

**Bukti yang dikumpulkan:** berkas halaman uji, tabel enam baris hasil pengukuran, dan satu paragraf pertimbangan.

### Lab 5 — Refactor dashboard Bab 7 ke grid Bootstrap
**Konteks:** Dashboard `admin.html` dari bab sebelumnya memakai CSS Grid kustom untuk barisan kartu statistiknya. Tim memutuskan seluruh bab kedua memakai grid Bootstrap agar gaya halaman seragam.

**Tugas:**
1. Ambil blok kartu statistik Bab 7 berikut dan gantikan mekanisme gridnya dengan kelas Bootstrap, tanpa mengubah hasil visual.

```css
.stat-kartu {
  display: grid;
  grid-template-columns: 1fr;
  gap: calc(var(--space-unit) * 2);
}
@media (min-width: 576px) { .stat-kartu { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1200px) { .stat-kartu { grid-template-columns: repeat(4, 1fr); } }
```

2. Tulis markup barunya memakai `row` dan `col-*` sehingga empat kartu tampil satu kolom di HP, dua kolom mulai `sm`, dan empat kolom mulai `xl`.
3. Buktikan hasil visualnya sama pada 375 px, 768 px, dan 1200 px.
4. Tulis tiga sampai lima kalimat yang membandingkan kedua pendekatan: mana yang lebih ringkas, dan mana yang lebih menjaga identitas karena masih memakai token.

**Bukti yang dikumpulkan:** markup sebelum dan sesudah, tiga tangkapan layar, dan paragraf perbandingan.

### Lab 6 — Audit aksesibilitas halaman landing
**Konteks:** Sebelum dipresentasikan ke pemilik Tokosaya, halaman landing perlu diperiksa dari sisi aksesibilitas karena sebagian pengguna memakai pembaca layar dan keyboard.

**Tugas:**
1. Periksa enam hal pada halaman hasil praktikum: (a) hanya ada satu `h1` dan hierarki `h2`/`h3` berurutan, (b) setiap ikon dekoratif memakai `aria-hidden="true"`, (c) setiap gambar kartu punya teks `alt` yang bermakna, (d) badge "Best Seller" dan badge semantik lain tetap terbaca teksnya pada latar berwarna, (e) tautan footer memakai kelas `link-light` sehingga kontrasnya cukup di atas latar gelap, (f) setiap tautan navigasi punya teks yang menjelaskan tujuannya.
2. Dokumentasikan hasil setiap pemeriksaan dengan status lolos atau belum lolos, beserta bukti pengamatan.
3. Perbaiki satu temuan yang belum lolos dan buktikan perbaikannya.

**Bukti yang dikumpulkan:** daftar periksa enam poin, satu tangkapan layar sebelum dan sesudah perbaikan, serta dua kalimat penjelasan.

### Lab 7 — Hero Tokosaya dengan overlay token
**Konteks:** Hero adalah bagian pertama yang dilihat pengunjung: latar gradasi indigo, judul besar, subjudul, dan satu tombol amber menuju katalog. Seluruh warna harus berasal dari token, bukan nilai bawaan pustaka.

**Tugas:**
1. Buat `latihan-bootstrap/hero.html` dari starter template.
2. Susun `<header class="hero text-center py-5">` berisi `container`, judul berkelas `display-5 fw-bold mb-3`, paragraf berkelas `lead mb-4`, dan tautan berkelas `btn hero-cta px-4`.
3. Tulis `latihan-bootstrap/css/style.css` memuat token Tokosaya, aturan `.hero` (gradasi indigo → indigo gelap), `.hero-cta` (amber dengan teks gelap), dan penyelarasan `--bs-primary-rgb: 79, 70, 229`.
4. Uji pada 375 px dan 1200 px, lalu catat kelas Bootstrap mana yang tetap dipakai untuk ukuran dan jarak.

**Bukti yang dikumpulkan:** dua berkas, dua tangkapan layar, dan daftar kelas Bootstrap yang dipertahankan beserta alasannya.

### Lab 8 — Membuat kartu produk sama tinggi
**Konteks:** Pada katalog, panjang deskripsi delapan produk berbeda-beda sehingga tombol "Lihat Detail" bergeser-geser dan barisannya terlihat berantakan.

**Tugas:**
1. Bangun tiga kartu produk (Keyboard Mekanis KX-210, Speaker Bluetooth BT-5, Webcam HD WC-720) di dalam satu `row g-4`, masing-masing memakai `col-12 col-md-6 col-lg-4` dengan deskripsi yang sengaja dibuat berbeda panjangnya.
2. Terapkan pola kartu yang benar: `h-100` pada elemen kartu, `d-flex flex-column` pada `card-body`, dan `mt-auto` pada tombol "Lihat Detail".
3. Tambahkan badge berbeda pada tiap kartu: `text-bg-warning` untuk Stok Terbatas, `badge-unggulan` untuk Best Seller, dan `text-bg-primary` untuk produk Baru.
4. Uji pada 1200 px dan buktikan ketiga tombol duduk pada garis dasar yang sama.

**Bukti yang dikumpulkan:** berkas halaman, tangkapan layar 1200 px, dan satu kalimat kesimpulan tentang peran `mt-auto`.

### Lab 9 — Membuktikan overlay warna bekerja
**Konteks:** Pemilik Tokosaya masih melihat tombol biru di salah satu halaman. Kamu perlu memisahkan mana bagian yang mengikuti tema Bootstrap dan mana yang harus dibentuk kelas kustom.

**Tugas:**
1. Siapkan satu halaman berisi tiga contoh: badge `text-bg-primary`, tombol `btn btn-primary`, dan tombol `btn btn-tokosaya`.
2. Muat `css/style.css` yang memuat token Tokosaya dan `--bs-primary-rgb: 79, 70, 229`.
3. Baca nilai warna terhitung (`background-color`) ketiga elemen di panel Computed DevTools, lalu susun tabel hasilnya.
4. Tulis dua kalimat yang menjelaskan mengapa satu elemen tetap berwarna bawaan pustaka, sedangkan dua elemen lain mengikuti identitas Tokosaya.

**Bukti yang dikumpulkan:** berkas halaman, tabel nilai warna terhitung, dan dua kalimat penjelasan.

### Lab 10 — Menguji ketergantungan pada CDN
**Konteks:** Tokosaya akan dipresentasikan pada sesi kelas dengan jaringan kampus yang tidak selalu stabil. Tim perlu tahu apa yang terjadi bila pustaka CDN gagal dimuat, dan apa mitigasinya.

**Tugas:**
1. Buka halaman hasil praktikum, lalu putuskan koneksi jaringan (atau pakai opsi *Offline* pada panel Network DevTools) dan muat ulang halaman.
2. Catat apa yang terjadi pada tiga hal: tipografi, tampilan tombol dan badge, serta susunan kolom kartu.
3. Tuliskan dua alternatif mitigasi yang mungkin, lalu evaluasi mana yang lebih tepat untuk kebutuhan demo di kelas beserta alasannya.
4. Jelaskan dalam satu kalimat konsekuensi pilihan itu terhadap cara kamu menyimpan berkas proyek.

**Bukti yang dikumpulkan:** tangkapan layar halaman tanpa koneksi, catatan tiga hal yang berubah, dan paragraf evaluasi mitigasi.
