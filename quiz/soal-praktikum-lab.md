# Bank Soal Praktikum Lab — Frontend Development & Web Design

> **Mata kuliah:** Frontend Development & Web Design · Semester III
> **Prodi:** Sistem Informasi / Teknik Informatika
> **Studi kasus proyek:** Tokosaya — toko online UMKM _"Belanja Tepat, Kirim Cepat"_
> **Cakupan:** 14 bab (Bab 1–7 dan 9–15) · 10 soal per bab · **Total 140 soal**
> **Estimasi pengerjaan:** 20–40 menit per soal
> **Versi per bab:** `bab-NN/soal-praktikum-lab.md` · solusi: `bab-NN/jawaban.md` · **Kunci bank lengkap:** `jawaban.md`


**Daftar Bab:** Bab 01 · Bab 02 · Bab 03 · Bab 04 · Bab 05 · Bab 06 · Bab 07 · Bab 09 · Bab 10 · Bab 11 · Bab 12 · Bab 13 · Bab 14 · Bab 15


## Bab 01 — Pengantar Frontend Development dan Web Design

**Praktikum Lab (10 soal)**

### Lab 1 — Halaman Info Produk Pertama
**Konteks:** Tim Tokosaya ingin mulai memamerkan satu produk unggulannya, Keyboard Mekanis KX-210, meski CSS belum dipelajari. Halaman ini akan menjadi latihan markup pertamamu sebelum proyek `tokosaya-css/` dimulai.

**Tugas:**
1. Buat folder `latihan-bab01/` beserta subfolder `img/`, lalu siapkan satu gambar placeholder bernama `produk-keyboard-kx210.svg` di dalamnya.
2. Buat file `info-produk.html` dengan pola dokumen lengkap: DOCTYPE, `html lang="id"`, meta charset UTF-8, meta viewport, dan `title` berisi "Tokosaya | Keyboard Mekanis KX-210".
3. Susun isi `body`: satu `h1` berisi nama produk; satu `img` dengan `src`, `alt` deskriptif, serta `width` dan `height` 220; satu paragraf harga "Rp650.000" dengan `strong` pada harga; dan satu `ul` berisi tiga keunggulan produk.
4. Tambahkan dua link: link relatif ke `katalog.html` dan link `mailto:halo@tokosaya.id` untuk bertanya stok.
5. Simpan, buka di Chrome, lalu catat judul tab yang tampil.

**Bukti yang dikumpulkan:** file `info-produk.html`, tangkapan layar halaman dan tab browser, serta catatan tiga baris hasil pemeriksaan (apa yang dilihat, apa yang diperiksa, dan artinya bagi kode).

### Lab 2 — Membaca Pohon Dokumen di Chrome DevTools
**Konteks:** Sebelum mengubah struktur halaman, kamu perlu terbiasa membaca hasil pembacaan browser atas kode yang kamu tulis. Halaman kecil "catatan pesanan" berikut dipakai sebagai bahan latihan.

**Tugas:**
1. Ketik ulang potongan halaman berikut ke dalam `catatan-pesanan.html` (lengkapi bagian `head` sesuai pola dokumen yang benar terlebih dahulu):

```html
<body>
  <h1>Catatan Pesanan #TKS-001</h1>
  <p>Pesanan berisi <strong>Keyboard Mekanis KX-210</strong> dan Mouse Wireless MW-88.</p>
  <ul>
    <li>Status: dikemas</li>
    <li>Estimasi kirim: hari yang sama</li>
  </ul>
</body>
```

2. Buka file di Chrome, tekan `F12`, dan pastikan tab **Elements** aktif.
3. Buat tabel berisi lima tag yang terlihat di panel Elements beserta fungsinya menurut kode yang kamu tulis.
4. Klik baris `h1` di panel Elements, perhatikan bagian halaman yang tersorot, lalu catat apa yang terjadi.
5. Aktifkan device toolbar, ubah lebar layar dari 375 piksel (HP) ke 1280 piksel (komputer), lalu catat dua perbedaan penyajian teks.

**Bukti yang dikumpulkan:** file HTML, tabel lima tag, catatan hasil sorotan elemen, dan tangkapan layar panel Elements pada dua lebar layar.

### Lab 3 — Menelusuri Dua Kerusakan Berkas
**Konteks:** Dua berkas hasil unduhan dari grup kelas bermasalah: satu file dikenali sebagai teks biasa, satu gambar tidak muncul meski halamannya tampil. Sebagai anggota tim, kamu perlu membuat diagnosis sebelum memperbaiki.

**Tugas:**
1. Siapkan dua berkas: `index.html.txt` yang isinya kode halaman profil, dan halaman `profil.html` yang memuat `<img src="foto-profil.jpg">` padahal file yang tersedia bernama `foto-profil.png`.
2. Untuk berkas pertama: jelaskan mengapa Chrome menampilkan teks mentah bercampur tag, lalu perbaiki namanya supaya dikenali sebagai halaman.
3. Untuk gambar: jelaskan mengapa gambar tidak tampil, lalu perbaiki nilai `src` dan muat ulang halamannya.
4. Tuliskan masing-masing satu tindakan pencegahan untuk kedua kasus.

**Bukti yang dikumpulkan:** kedua berkas final yang sudah berfungsi, plus catatan diagnosis dan pencegahan untuk masing-masing kasus.

### Lab 4 — Merapikan Dokumen Sesuai Konvensi
**Konteks:** Di grup belajar ditemukan file latihan yang ditulis terburu-buru dengan tag huruf besar dan bagian `head` yang tidak lengkap. Sebelum dipakai lagi, file itu perlu dirapikan mengikuti konvensi bab ini.

**Tugas:**
1. Ketik ulang potongan kode berikut ke `profil-rapi.html`:

```html
<HTML>
<HEAD>
<TITLE>PROFILKU</TITLE>
</HEAD>
<BODY>
<H1>Profil Saya</H1>
<P>Nama saya Rani. <STRONG>Mahasiswa Sistem Informasi</STRONG></P>
</BODY>
</HTML>
```

2. Lengkapi `head` sesuai pola lima unsur (DOCTYPE, bahasa dokumen, charset, viewport, title).
3. Ubah semua tag menjadi huruf kecil dan rapikan indentasi dengan dua spasi.
4. Susun daftar perubahan yang kamu lakukan beserta alasan singkatnya (minimal empat perubahan).

**Bukti yang dikumpulkan:** file final, daftar perubahan beserta alasan, dan tangkapan layar judul tab pada browser.

### Lab 5 — Menata Folder Proyek Latihan
**Konteks:** Sebelum proyek Tokosaya dimulai, kamu menyiapkan folder latihan yang rapi supaya kebiasaan penamaan yang baik terbentuk sejak awal.

**Tugas:**
1. Buat folder `toko-latihan/` berisi `index.html` dan `tentang.html`.
2. Siapkan subfolder `css/` berisi `style.css` (boleh masih kosong) dan subfolder `img/` berisi `logo-toko.svg`.
3. Bereskan tiga berkas berkarakter bermasalah berikut menjadi kebab-case dan tempatkan pada folder yang benar: `Tentang Toko.html` menjadi `tentang.html`, `Style Utama.CSS` menjadi `style.css`, dan `Logo Toko.svg` menjadi `logo-toko.svg`.
4. Tampilkan struktur folder akhir (tulis manual atau jalankan perintah `tree`), lalu jelaskan mengapa halaman utama dinamai `index.html`, bukan `halaman1.html`.

**Bukti yang dikumpulkan:** struktur folder akhir dan paragraf alasan sepanjang tiga kalimat.

### Lab 6 — Uji Banding Viewport
**Konteks:** Klien Tokosaya mengeluh halaman tampak kecil saat dibuka di HP. Kamu menduga penyebabnya adalah meta viewport yang belum dipasang, tetapi ingin membuktikannya dengan uji banding sederhana.

**Tugas:**
1. Buat dua berkas dari konten yang sama: `tanpa-viewport.html` (tanpa meta viewport) dan `dengan-viewport.html` (memakai `<meta name="viewport" content="width=device-width, initial-scale=1">`).
2. Isi `body` keduanya dengan satu `h1` dan satu paragraf panjang.
3. Buka keduanya di Chrome, aktifkan device toolbar, dan amati pada lebar 375 piksel.
4. Catat perbedaan penyajian kedua berkas dalam tabel, lalu tuliskan kesimpulan tiga baris tentang peran meta viewport.

**Bukti yang dikumpulkan:** dua berkas HTML, tabel perbandingan, dua tangkapan layar device toolbar, dan kesimpulan.

### Lab 7 — Memilih Format Aset dan Penamaan
**Konteks:** Tokosaya akan menambah aset gambar. Sebelum tim lain mengumpulkan berkas, kamu diminta memutuskan format dan penamaan yang tepat agar halaman tetap cepat dibuka, terutama lewat jaringan HP.

**Tugas:**
1. Untuk tiap aset berikut, pilih format yang paling tepat (SVG, JPEG, atau PNG) dan tuliskan alasan satu kalimat: logo Tokosaya; foto asli keyboard dari kamera; ikon keranjang sederhana; tangkapan layar halaman katalog; ilustrasi hero bergaya sederhana.
2. Usulkan nama berkas kebab-case untuk kelima aset tersebut.
3. Jelaskan mengapa ukuran berkas gambar perlu dijaga tetap wajar.

**Bukti yang dikumpulkan:** tabel keputusan format (aset, format, alasan), daftar nama berkas usulan, dan paragraf singkat tentang ukuran berkas.

### Lab 8 — Membandingkan Dua Versi Halaman
**Konteks:** Dua versi halaman `promo.html` hasil kerja dua anggota tim dikumpulkan. Hanya satu versi yang mengikuti konvensi dokumen pada bab ini; tugasmu menilai keduanya berdasarkan bukti kode.

**Tugas:**
1. Bandingkan kedua dokumen berikut, lalu tuliskan tabel perbandingan pada aspek: atribut bahasa, meta viewport, judul tab, dan penulisan tag.

Versi A:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Promo</title>
</head>
<body>
  <H1>Promo Tokosaya</H1>
  <P>Diskon mouse wireless sampai akhir bulan.</P>
</body>
</html>
```

Versi B:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tokosaya | Promo Bulan Ini</title>
</head>
<body>
  <h1>Promo Tokosaya</h1>
  <p>Diskon mouse wireless sampai akhir bulan.</p>
</body>
</html>
```

2. Tentukan versi yang paling sesuai konvensi dan jelaskan alasanmu.
3. Perbaiki versi yang lemah sehingga sesuai konvensi, lalu buktikan judul tab barunya di browser.

**Bukti yang dikumpulkan:** tabel perbandingan, versi perbaikan, dan tangkapan layar judul tab pada browser.

### Lab 9 — Menghubungkan Dua Halaman
**Konteks:** Berpindah antarhalaman lewat link relatif adalah bekal penting sebelum proyek `tokosaya-css/` dimulai. Kamu akan membuat dua halaman sederhana yang saling terhubung.

**Tugas:**
1. Di dalam folder `navigasi-latihan/`, buat `index.html` (daftar produk sederhana) dan `produk.html` (detail satu produk). Setiap halaman memakai pola dokumen lengkap dan tepat satu `h1`.
2. Hubungkan keduanya: dari `index.html` ke `produk.html`, dan sebuah link kembali ke `index.html` dari halaman detail.
3. Tambahkan satu link eksternal ke situs kampus dengan `target="_blank"` dan satu link `mailto:`.
4. Uji dengan menyalin folder `navigasi-latihan/` ke lokasi lain di komputermu, buka lagi dari lokasi baru, dan pastikan seluruh link internal tetap bekerja. Catat hasilnya dalam dua kalimat.

**Bukti yang dikumpulkan:** dua file HTML, catatan hasil uji pemindahan folder, dan tangkapan layar kedua halaman.

### Lab 10 — Audit Mandiri Sebelum Dikumpulkan
**Konteks:** Sebelum mengumpulkan tugas latihan, kamu perlu memeriksa halamanmu sendiri dengan daftar cek. Kebiasaan ini akan terus dipakai sampai proyek akhir semester.

**Tugas:**
1. Ambil halaman `info-produk.html` dari Lab 1 (atau halaman lain yang kamu buat pada bab ini).
2. Periksa lima hal dan catat status beserta buktinya: pola dokumen lengkap (DOCTYPE, bahasa, charset, viewport, title), jumlah `h1`, keberadaan `alt` pada setiap gambar, penulisan tag huruf kecil, dan tautan yang berfungsi.
3. Perbaiki seluruh temuan yang belum sesuai, lalu buktikan lewat tangkapan layar panel Elements sebelum dan sesudah perbaikan.
4. Tuliskan refleksi lima baris: apa yang ditemukan, apa yang diperbaiki, dan apa yang akan kamu biasakan mulai sekarang.

**Bukti yang dikumpulkan:** tabel audit (aspek, status, bukti), tangkapan layar sebelum dan sesudah, serta refleksi lima baris.

---

## Bab 02 — HTML5 dan Struktur Semantik

**Praktikum Lab (10 soal)**

### Lab 1 — Kerangka Head untuk Halaman Baru
**Konteks:** Tim Tokosaya akan merilis halaman promo bulanan. Sebelum isi halaman ditulis, kamu diminta menyiapkan kerangka dokumen yang lengkap agar halaman baru tidak mengulang masalah `head` yang bolong seperti di berkas latihan lama.

**Tugas:**
1. Buat file `promo.html` di folder kerja Bab 2 dan tulis kerangka dokumen HTML5 lengkap: DOCTYPE, `html lang="id"`, `meta charset`, `meta viewport`, `meta description`, dan `title` unik "Tokosaya | Promo Bulan Ini".
2. Tulis satu kalimat `meta description` yang merangkum tujuan halaman promo (maksimal 20 kata) dan jelaskan alasan pilihan kalimatmu.
3. Isi `body` untuk sementara dengan satu `h1` "Promo Bulan Ini" dan satu paragraf pengantar.
4. Buka file di Chrome, pastikan judul tab sesuai, lalu periksa elemen `head` di panel Elements untuk membuktikan keempat meta/title hadir.

**Bukti yang dikumpulkan:** file `promo.html`, tangkapan layar judul tab dan panel Elements, plus alasan kalimat description.

### Lab 2 — Refactor dari "Div Semua" ke Elemen Semantik
**Konteks:** Halaman latihan temanmu masih dibangun dari pembungkus polos tanpa makna, seperti kisah awal Tokosaya di Apersepsi. Kamu diminta mengubahnya menjadi struktur semantik tanpa mengubah isi teksnya.

**Tugas:**
1. Ketik ulang potongan berikut ke `profil-tim.html`:

```html
<div class="site-header">
  <div class="brand">Tokosaya</div>
  <div class="menu">
    <a href="index.html">Beranda</a>
    <a href="katalog.html">Katalog</a>
  </div>
</div>
<div class="content">
  <h2>Produk Terbaru</h2>
  <div class="produk">Webcam Full HD WC-12</div>
</div>
<div class="foot">Jl. Digital Raya No. 10, Jakarta</div>
```

2. Ubah setiap pembungkus menjadi elemen semantik yang sesuai (`header`, `nav`, `main`, `footer`, dan `address` untuk kontak), lengkapi `head`, dan perbaiki hierarki heading agar hanya ada satu `h1`.
3. Tuliskan tiga keputusan struktur paling penting beserta alasannya.
4. Buka hasilnya di browser dan periksa landmark yang terbentuk melalui panel Elements.

**Bukti yang dikumpulkan:** file hasil refactor, daftar tiga keputusan beserta alasan, dan tangkapan layar panel Elements.

### Lab 3 — Membangun Tabel Ongkos Kirim yang Semantik
**Konteks:** Tokosaya ingin menampilkan ongkos kirim per wilayah di halaman layanan. Data harus terbaca jelas oleh semua pengguna, termasuk pembaca layar, dan tidak boleh memakai tabel sebagai alat layout.

**Tugas:**
1. Buat file `ongkir.html` dengan kerangka dokumen lengkap dan `h1` "Ongkos Kirim Tokosaya".
2. Bangun satu tabel dengan data berikut: Jakarta Rp15.000 (1–2 hari), Jawa Barat Rp25.000 (2–3 hari), Luar Jawa Rp45.000 (4–7 hari).
3. Lengkapi tabel dengan `caption` yang menjelaskan dasar data, `thead` berisi `th scope="col"` untuk kolom Wilayah, Ongkos Kirim, dan Estimasi, serta baris data yang memakai `th scope="row"` pada nama wilayah.
4. Jelaskan dalam tiga baris mengapa `caption` dan `scope` penting untuk tabel ini.

**Bukti yang dikumpulkan:** file `ongkir.html`, penjelasan tiga baris, dan tangkapan layar hasil di browser.

### Lab 4 — Form "Tanya Stok" dan Uji Fokus Label
**Konteks:** Halaman kontak Tokosaya versi penuh baru dibangun pada Bab 11, tetapi struktur dasar form sudah bisa dilatih sekarang. Kamu akan membuat form singkat dan membuktikan bahwa labelnya benar-benar terhubung ke kolom isian.

**Tugas:**
1. Buat `tanya-stok.html` dengan `h1` "Tanya Stok" dan satu `form` yang memakai `action` beralamat contoh serta `method="post"`.
2. Sediakan tiga kontrol: input teks Nama Lengkap, input `type="email"` untuk Alamat Email, dan `textarea` berisi Pesan dengan `rows="5"`. Setiap kolom memakai pasangan `label for` dan `id` yang nilainya sama, dan atribut `name` pada setiap kontrol.
3. Tambahkan tombol `type="submit"` berlabel "Kirim Pertanyaan".
4. Buka di browser, klik teks label "Pesan", lalu catat apa yang terjadi pada kursor dan jelaskan kaitannya dengan pasangan `for`/`id`.

**Bukti yang dikumpulkan:** file HTML, catatan hasil uji klik label, dan tangkapan layar form.

### Lab 5 — Alt yang Tepat dan Pasangan Figure
**Konteks:** Halaman profil Tokosaya memuat tiga gambar dengan peran berbeda: logo toko, ilustrasi hero, dan garis pemisah dekoratif. Kamu diminta memastikan tiap gambar punya keputusan `alt` yang tepat.

**Tugas:**
1. Buat `aset-gambar.html` dengan `header` berisi logo `img/logo-tokosaya.svg` (ukuran 48×48) dan `main` berisi satu ilustrasi hero `img/hero-tokosaya.svg` (ukuran 800×320) serta satu garis pemisah dekoratif `img/pemisah.svg`.
2. Tulis `alt` untuk ketiga gambar: deskriptif untuk logo dan hero, dan `alt=""` untuk gambar dekoratif. Jelaskan alasan tiap pilihan dalam satu kalimat.
3. Bungkus ilustrasi hero dengan `figure` dan tambahkan `figcaption` berisi keterangan singkat.
4. Buktikan di browser bahwa logo dan hero tetap menyediakan ruang sebelum gambar dimuat berkat `width`/`height`.

**Bukti yang dikumpulkan:** file HTML, daftar alasan `alt`, dan tangkapan layar halaman beserta panel Elements untuk pasangan `figure`/`figcaption`.

### Lab 6 — Memburu Link yang Rusak
**Konteks:** Seorang rekan mengeluh, "Link Beranda kadang jalan di laptopku, tapi di server selalu gagal." Kamu menerima potongan navigasi berikut untuk diperiksa sebelum halaman diunggah.

**Tugas:**
1. Perhatikan potongan nav bermasalah berikut, lalu salin ke `navigasi-rusak.html`:

```html
<nav>
  <a href="Index.html">Beranda</a>
  <a href="katalog.html">Katalog</a>
  <a href="tentang.html.hmtl">Tentang</a>
  <a href="kontak.html">Kontak</a>
</nav>
```

2. Tuliskan penyebab tiap link bermasalah dan jelaskan mengapa huruf besar seperti `Index.html` berisiko gagal pada sistem yang peka huruf.
3. Perbaiki seluruh `href`, tambahkan `aria-label="Navigasi utama"`, dan susun daftar link di dalam `ul`/`li`.
4. Untuk halaman yang belum dibuat, tentukan perlakuan yang tepat agar tidak menjadi link mati, lalu jelaskan alasannya.

**Bukti yang dikumpulkan:** file perbaikan, tabel diagnosis (link, penyebab, perbaikan), dan tangkapan layar navigasi yang berfungsi.

### Lab 7 — Merapikan Hierarki Heading
**Konteks:** Rekan tim menulis bagian halaman tentang Tokosaya dengan level heading seadanya demi tampilan. Kamu diminta merapikan hierarkinya sehingga struktur informasinya benar sebelum CSS ditambahkan.

**Tugas:**
1. Ketik potongan berikut ke `tentang-rapi.html` (lengkapi `head` lengkap terlebih dahulu):

```html
<body>
  <h1>Tentang Tokosaya</h1>
  <h1>Profil Toko</h1>
  <p>Tokosaya berdiri sejak 2019 sebagai toko UMKM aksesori dan elektronik komputer.</p>
  <h4>Visi</h4>
  <p>Menjadi toko aksesori komputer UMKM paling terpercaya.</p>
  <h4>Misi</h4>
  <ol>
    <li>Menyediakan produk dengan harga transparan.</li>
    <li>Memproses pesanan dengan cepat.</li>
  </ol>
</body>
```

2. Perbaiki agar hanya ada satu `h1` dan seluruh level heading tidak melompat; pilih level berdasarkan tingkatan informasi, bukan ukuran huruf.
3. Setelah rapi, tulis "kerangka daftar isi" hasil akhirnya dalam bentuk daftar bertingkat (h1 → h2 → h3).
4. Jelaskan satu kalimat untuk tiap perubahan level yang kamu lakukan.

**Bukti yang dikumpulkan:** file hasil perbaikan, daftar isi bertingkat, dan penjelasan perubahan level.

### Lab 8 — Pemeriksaan Landmark dengan DevTools
**Konteks:** Sebelum mengumpulkan tugas, tim menetapkan daftar cek landmark: satu `nav` berlabel, satu `main`, `footer` berisi kontak, dan `alt` pada semua gambar. Kamu bertugas memeriksa satu halaman contoh menggunakan DevTools.

**Tugas:**
1. Gunakan hasil Lab 2 atau file `index.html`-mu sendiri sebagai objek pemeriksaan.
2. Buka panel Elements, lalu isi tabel pemeriksaan: elemen semantik yang ditemukan, jumlahnya, dan fungsinya (header, nav, main, footer, address).
3. Periksa setiap `img`: pastikan memiliki `alt`, dan periksa `nav` memiliki `aria-label`.
4. Tutup dengan catatan tiga baris gaya bab: apa yang dilihat, panel yang dipakai, dan artinya bagi kode.

**Bukti yang dikumpulkan:** tabel pemeriksaan landmark, tangkapan layar panel Elements, dan catatan tiga baris.

### Lab 9 — Menambah Aside dan Tanggal Bertime
**Konteks:** Halaman katalog Tokosaya ingin menampilkan panel samping "Tips Perawatan Keyboard" dan tanggal pembaruan "14 Februari 2026" yang bisa dipahami mesin. Kamu ditugaskan menguji kedua elemen itu pada struktur halaman yang ada.

**Tugas:**
1. Siapkan file `katalog-draf.html` dengan kerangka dokumen lengkap: `header` + `nav`, satu `main` berisi `h1` "Katalog Tokosaya" dan satu `section` "Produk Unggulan", lalu `footer`.
2. Tambahkan `aside` berisi `h2` "Tips Perawatan Keyboard" dan `ul` tiga tips di dalam `main`.
3. Pada `footer`, tulis tanggal pembaruan memakai `time datetime="2026-02-14"` dengan teks tampilan "14 Februari 2026".
4. Jelaskan mengapa `aside` boleh dihapus tanpa merusak isi utama, sementara `main` tidak, dan apa manfaat atribut `datetime` dibanding teks tanggal biasa.

**Bukti yang dikumpulkan:** file HTML, penjelasan `aside` vs `main` dan atribut `datetime`, serta tangkapan layar struktur di panel Elements.

### Lab 10 — Audit Laporan "Halaman Belum Semantik"
**Konteks:** Kamu menerima salinan halaman kontak yang dikerjakan terburu-buru oleh anggota tim lain. Sebelum halaman diserahkan ke klien, kamu harus menuliskan laporan temuan dan menentukan dua perbaikan paling mendesak.

**Tugas:**
1. Ketik potongan `body` berikut ke file `kontak-draf.html` dan lengkapi sendiri bagian `head`-nya sesuai pola dokumen HTML5:

```html
<body>
  <div class="atas">
    <span>Tokosaya</span>
    <div class="tautan">
      <a href="index.html">Beranda</a>
      <a href="kontak.html">Kontak</a>
    </div>
  </div>
  <main>
    <h2>Hubungi Tokosaya</h2>
    <p>Kami siap membantu pertanyaan seputar pesanan Anda.</p>
  </main>
  <main>
    <img src="img/logo-tokosaya.svg">
  </main>
  <p>Jl. Digital Raya No. 10, Jakarta · halo@tokosaya.id</p>
</body>
```

2. Audit enam hal: keberadaan `header`, `nav`, jumlah `main`, keberadaan `h1`, `alt` pada gambar, dan `footer` + `address` untuk kontak.
3. Tulis laporan temuan dalam format: temuan → dampak bagi pengguna → perbaikan (minimal empat baris temuan).
4. Tentukan dua perbaikan paling mendesak dan jelaskan alasan urutan prioritasmu.
5. Terapkan perbaikan pada file dan buktikan hasil akhirnya berstruktur semantik.

**Bukti yang dikumpulkan:** laporan temuan, daftar prioritas beserta alasan, dan file `kontak-draf.html` versi perbaikan.

---

## Bab 03 — Dasar-Dasar CSS

**Praktikum Lab (10 soal)**

### Lab 1 — Halaman promo kecil dengan CSS eksternal
**Konteks:** Tim Tokosaya ingin membuat halaman kampanye "Promo Akhir Bulan" yang berdiri sendiri, tanpa menumpuk gaya di dalam HTML. Semua keputusan visual harus tinggal di satu berkas gaya eksternal.

**Tugas:**
1. Buat folder `lab-3/lab-1/` berisi `promo.html` dan `css/style.css`, lalu hubungkan keduanya lewat `<link rel="stylesheet" href="css/style.css">` di dalam `head`.
2. Isi halaman dengan satu `h1` "Promo Akhir Bulan", satu paragraf pembuka ber-*class* `promo-lead`, dan satu daftar tiga butir keuntungan ber-*class* `promo-list`.
3. Tulis CSS yang memuat: aturan `body` (font sistem, `color: #334155`, `background-color: #F8FAFC`), aturan `h1` (`color: #1E293B`), aturan `.promo-lead` (`font-weight: 600`), dan satu utilitas `.text-center`.
4. Tulis satu aturan *grouping* yang membuat `h1` dan `h2` berbagi warna yang sama, lalu buktikan aturan itu bekerja.
5. Pastikan tidak ada satu pun atribut `style` di `promo.html`.

**Bukti yang dikumpulkan:** berkas `promo.html` dan `css/style.css`, tangkapan layar halaman, serta catatan tiga baris berisi selector yang dipakai dan alasan pemilihannya.

### Lab 2 — Membaca panel Styles untuk memetakan pemenang kaskade
**Konteks:** Seorang anggota tim menyerahkan berkas gaya "berkonflik" berisi beberapa aturan yang saling menimpa pada paragraf yang sama. Tugasmu melaporkan aturan mana yang menang, bukan menebak dari tampilan saja.

**Tugas:**
1. Buat `lab-3/lab-2/konflik.html` + `css/style.css` berisi empat paragraf dengan kombinasi berbeda: hanya selector elemen, elemen + class, class + ID, dan satu paragraf yang juga punya atribut `style` inline (khusus demonstrasi).
2. Sebelum membuka browser, hitung dan tuliskan nilai *specificity* setiap aturan pada sebuah tabel prediksi.
3. Buka halaman di Chrome, klik setiap paragraf, lalu buka panel Styles di DevTools. Catat aturan mana yang berlaku dan aturan mana yang dicoret browser.
4. Bandingkan tabel prediksimu dengan hasil DevTools; tandai bila ada perbedaan dan jelaskan sebabnya.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tabel prediksi vs hasil observasi, dan minimal dua tangkapan layar panel Styles pada elemen berbeda.

### Lab 3 — Memperbaiki gaya yang tidak termuat
**Konteks:** Seorang rekan memindahkan `style.css` ke dalam folder `css/`, tetapi tautan di HTML masih menunjuk `styles/style.css`. Ia juga mengetik `class="sitenav"` pada navigasi, padahal aturan CSS-nya bernama `.site-nav`. Akibatnya halaman tampil hampir tanpa gaya.

**Tugas:**
1. Buat ulang kondisi rusak tersebut di `lab-3/lab-3/index.html` dan `lab-3/lab-3/css/style.css` (halaman minimal: `header`, `nav` berisi tiga link, dan satu paragraf).
2. Buka DevTools, buka tab Console, dan catat pesan galat yang muncul beserta URL berkas yang diminta browser.
3. Perbaiki atribut `href` hingga cocok dengan struktur folder, lalu seragamkan penulisan nama class antara HTML dan CSS.
4. Muat ulang halaman dan pastikan gaya (warna link, latar header) sudah berlaku.

**Bukti yang dikumpulkan:** berkas sebelum dan sesudah perbaikan, tangkapan layar Console sebelum dan sesudah, serta catatan akar masalah dalam tiga baris.

### Lab 4 — Refactor gaya inline menjadi CSS eksternal
**Konteks:** Papan pengumuman kelas berikut dibagikan antar-mahasiswa lewat salinan berkas, sehingga setiap perubahan warna harus disunting di banyak tempat.

**Tugas:**
1. Salin kondisi awal berikut ke `lab-3/lab-4/papan.html`, lalu buat berkas `css/style.css` baru untuk menampung gayanya.

```html
<header style="background-color: #1E293B; padding: 16px; color: #FFFFFF;">
  <h1 style="font-size: 28px; margin: 0; color: #FFFFFF;">Papan Pengumuman Kelas</h1>
</header>
<main style="padding: 24px; font-family: Arial, sans-serif;">
  <h2 style="color: #1E293B;">Jadwal Respons Tugas</h2>
  <p style="color: #334155;">Tugas dikumpulkan paling lambat pukul 21.00 WIB.</p>
  <ul style="color: #334155; line-height: 1.7;">
    <li>Senin: laporan praktikum</li>
    <li style="color: #DC2626;">Rabu: batas revisi</li>
    <li>Jumat: kuis singkat</li>
  </ul>
</main>
```

2. Kelompokkan nilai gaya yang berulang, beri nama *class* berbasis peran dengan pola `blok-elemen`, lalu pindahkan seluruh nilainya ke `css/style.css`.
3. Hapus setiap atribut `style` pada HTML dan hubungkan berkas gaya dengan tag `<link>`.
4. Buka DevTools dan pastikan penampakan halaman setelah refactor sama seperti sebelum refactor (warna, jarak, dan ukuran tetap).

**Bukti yang dikumpulkan:** `papan.html` bersih tanpa atribut `style`, `css/style.css`, tabel pemetaan "nilai inline → nama class", dan tangkapan layar halaman hasil refactor.

### Lab 5 — Uji aksesibilitas fokus keyboard
**Konteks:** Tokosaya ingin memastikan navigasinya bisa dipakai tanpa mouse. Beberapa link masih memakai gaya bawaan browser, sementara satu tombol pernah dibersihkan outline-nya oleh rekan tim.

**Tugas:**
1. Buat `lab-3/lab-5/fokus.html` berisi navigasi dengan empat link: Beranda, Katalog, Tentang, Kontak.
2. Buka halaman, tekan tombol Tab berulang kali, dan catat elemen mana yang menerima fokus serta apakah indikatornya terlihat jelas.
3. Tambahkan aturan `a:focus { outline: 2px solid #4F46E5; outline-offset: 2px; }` pada berkas gaya, lalu uji ulang dengan Tab.
4. Buat versi kedua yang menambahkan `a:focus { outline: none; }` pada satu link, bandingkan hasilnya, dan jelaskan mengapa versi itu berbahaya.
5. Tulis tiga kalimat: apa fungsi `:focus` bagi pengguna keyboard dan mengapa gaya fokus tidak boleh dihapus demi alasan estetika.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tangkapan layar keadaan fokus yang terlihat dan yang dihapus, serta kesimpulan tertulis.

### Lab 6 — Tabel dan daftar interaktif dengan pseudo-class
**Konteks:** Halaman "Jadwal Pengiriman" Tokosaya menampilkan tabel jadwal kurir dan daftar catatan pengiriman. Semua penanda visual harus dibuat murni CSS, tanpa atribut *class* tambahan pada setiap baris.

**Tugas:**
1. Buat `lab-3/lab-6/jadwal.html` + `css/style.css` berisi tabel jadwal dengan `thead` (kolom Hari, Jam Kirim) dan `tbody` berisi lima baris data.
2. Beri latar `#F8FAFC` pada baris genap `tbody` memakai `:nth-child()`, dan beri garis pemisah `1px solid #E2E8F0` pada setiap sel.
3. Tambahkan daftar `ul` berisi tiga catatan pengiriman: butir pertama dibuat tebal (`:first-child`) dan butir terakhir diberi warna `#DC2626` (`:last-child`).
4. Muat ulang halaman dan pastikan penambahan atau penghapusan satu baris tabel tidak merusak pola warna berselang-seling.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tangkapan layar tabel, dan satu paragraf singkat yang menjelaskan mengapa cara ini lebih tahan perubahan dibandingkan memberi *class* manual pada baris ganjil.

### Lab 7 — Menyederhanakan selector yang terlalu spesifik
**Konteks:** Berkas gaya lama sebuah halaman katalog memakai rantai selector panjang yang sulit dipakai ulang dan sulit ditimpa ketika desain berubah.

**Tugas:**
1. Buat `lab-3/lab-7/katalog.html` + `css/style.css` dengan struktur sederhana: satu `main` ber-*id* `konten-utama`, satu daftar `ul.daftar-produk`, dan tiga link ber-*class* `tautan-produk`.
2. Tulis aturan awal yang berlebihan spesifik, lalu hitung *specificity*-nya.

```css
#konten-utama .daftar-produk li a.tautan-produk {
  color: #4F46E5;
  text-decoration: none;
}
```

3. Sederhanakan selector tersebut menjadi bentuk paling ringkas yang tetap menyasar elemen yang sama, lalu tuliskan nilai *specificity* sebelum dan sesudah.
4. Verifikasi di DevTools bahwa penampakan halaman tidak berubah setelah penyederhanaan.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tabel perbandingan selector lama dan baru beserta nilai *specificity*, serta tangkapan layar panel Styles sesudah refactor.

### Lab 8 — Konversi satuan: dari piksel ke rem dan persen
**Konteks:** Sebuah halaman laporan internal memakai satuan `px` untuk semua ukuran huruf dan lebar blok konten. Ketika pengguna memperbesar ukuran font bawaan browser, teksnya tidak ikut membesar.

**Tugas:**
1. Buat `lab-3/lab-8/laporan.html` + `css/style.css` dengan gaya awal serba `px`: `h1 { font-size: 36px; }`, `h2 { font-size: 24px; }`, `p { font-size: 16px; }`, dan `.konten { width: 960px; }`.
2. Konversi seluruh ukuran huruf ke `rem` dengan basis 16px, dan ubah `.konten` menjadi lebar berbasis persen agar mengikuti lebar kotak induknya.
3. Buka pengaturan font browser (Chrome: Settings → Appearance → Font size) dan naikkan ukuran font dasar menjadi 20px. Muat ulang halaman dan catat perubahan yang terjadi pada versi `rem`.
4. Tulis kesimpulan: bagian mana yang ikut menskala, bagian mana yang tetap, dan kapan satuan `px` masih lebih tepat dipakai.

**Bukti yang dikumpulkan:** berkas sebelum dan sesudah konversi, tangkapan layar perbandingan pada ukuran font dasar 16px dan 20px, serta kesimpulan tertulis.

### Lab 9 — Merapikan organisasi berkas style.css
**Konteks:** Berkas gaya hasil kerja berkelompok tumbuh tanpa urutan: aturan footer berada di paling atas, gaya heading tercecer, dan tidak ada komentar pemisah. Anggota tim baru kesulitan menemukan bagian yang ingin disunting.

**Tugas:**
1. Buat `lab-3/lab-9/rapi.html` + `css/style.css` yang memuat dua belas aturan acak berikut (boleh menyusun kombinasi nilainya sendiri, asal cakupannya sama): aturan `body`, `h1`–`h3`, `a`, `a:hover`, `.site-header`, `.site-nav a`, `.hero`, `.hero-title`, `.btn-cta`, `.site-footer`, dan utilitas `.text-center`.
2. Susun ulang berkas mengikuti pola organisasi bab ini: komentar banner kepala berkas, dasar halaman, tipografi dan link, header dan navigasi, bagian utama halaman berurutan, footer, lalu utilitas.
3. Tambahkan komentar pemisah tiap bagian dengan gaya yang konsisten (`/* ---------- Nama bagian ---------- */`).
4. Pastikan penampakan halaman tidak berubah setelah penyusunan ulang, lalu serahkan "peta bagian" berisi urutan bagian dan nomor barisnya.

**Bukti yang dikumpulkan:** `css/style.css` hasil susun ulang, peta bagian berkas, dan tangkapan layar halaman sebelum vs sesudah.

### Lab 10 — Prediksi dan verifikasi kaskade
**Konteks:** Sebelum menyerahkan berkas gaya ke tim, kamu ingin memastikan pemahamanmu tentang kaskade benar-benar akurat — bukan sekadar merasa yakin.

**Tugas:**
1. Buat `lab-3/lab-10/kaskade.html` + `css/style.css` berisi empat paragraf dengan konflik bertingkat: (a) selector elemen vs *class*; (b) *class* vs kombinasi elemen + *class*; (c) ID vs dua *class*; (d) dua aturan dengan *specificity* setara yang berbeda urutan penulisan.
2. Tulis tabel prediksi: untuk setiap paragraf, catat warna yang kamu perkirakan menang beserta angka *specificity* pemenangnya.
3. Jalankan halaman di Chrome dan periksa setiap paragraf memakai panel Styles DevTools.
4. Laporkan setiap prediksi yang meleset, jelaskan sebabnya dengan istilah kaskade (*specificity* atau urutan penulisan), lalu perbaiki tabel prediksimu menjadi tabel hasil akhir.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tabel prediksi dan tabel hasil akhir, serta satu paragraf refleksi tentang bagian kaskade yang tadinya paling mudah disalahpahami.

---

## Bab 04 — Tipografi dan Visual Design CSS

**Praktikum Lab (10 soal)**

### Lab 1 — Hero Tokosaya berbasis design token
**Konteks:** Landing page Tokosaya baru punya kerangka HTML, tetapi warna dan jaraknya masih ditulis sebagai nilai mentah. Kamu ditugaskan membangun satu hero yang seluruh keputusan visualnya mengalir dari token.

**Tugas:**
1. Buat `lab-4/lab-1/hero.html` + `css/style.css`. Di dalam `head`, pasang dua tag `preconnect` dan satu tag `<link>` Google Fonts untuk Poppins 400/500/600/700 dan Inter 400/500/600, lalu hubungkan berkas gaya.
2. Tulis blok `:root` berisi token baku Tokosaya (warna primary, primary-dark, accent, dark, body, bg, surface, border, success, danger, font heading, font body, radius, shadow, dan `--space-unit`).
3. Bangun hero berisi `h1` "Peralatan Kerja Digital untuk Semua", paragraf subjudul, dan tombol "Lihat Katalog"; latar hero memakai `linear-gradient` dari token primary menuju primary-dark dengan padding berkelipatan `--space-unit`.
4. Terapkan `clamp()` pada judul hero dan pastikan paragraf subjudul memakai `var(--font-body)`, sedangkan seluruh heading memakai `var(--font-heading)`.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tangkapan layar hero pada jendela lebar dan sempit, serta daftar token yang benar-benar dipanggil di halaman tersebut.

### Lab 2 — Empat badge semantik dan laporan kontras
**Konteks:** Kartu produk Tokosaya menandai status produk dengan badge: Best Seller, Tersedia, Stok Terbatas, dan Baru. Badge harus tetap terbaca di layar lapuk maupun terang.

**Tugas:**
1. Buat `lab-4/lab-2/badge.html` + `css/style.css` berisi empat `span` badge dengan empat varian status.
2. Terapkan pola bab ini: warna semantik dibawa latar tint `rgba(...)`, sedangkan teks memakai warna gelap dari token. Varian Best Seller boleh memakai latar amber solid dengan teks `--clr-dark`.
3. Buat tabel pengamatan berisi lima pasangan teks-latar milikmu, perkiraan rasio kontrasnya, dan status lolos/gagal terhadap ambang AA 4,5:1.
4. Perbaiki setiap pasangan yang gagal kontras, lalu catat perubahan yang kamu lakukan.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tabel rasio kontras, dan tangkapan layar keempat badge.

### Lab 3 — Memeriksa pemuatan font lewat DevTools
**Konteks:** Tim menerima laporan "font judul terlihat berbeda antar-laptop". Untuk memastikan penyebabnya, kamu harus membaca bukti dari browser, bukan dari dugaan.

**Tugas:**
1. Buka `lab-4/lab-1/hero.html` di Chrome, lalu buka DevTools.
2. Pada panel Elements, pilih `h1` dan catat nilai *computed* `font-family`, `font-size`, dan `line-height`.
3. Buka panel Network, filter permintaan bertipe font, lalu catat berapa berkas font terunduh, dari domain mana, dan berapa lama waktunya.
4. Uji urutan pemuatan: hapus sementara salah satu tag `preconnect`, muat ulang dengan opsi *Disable cache*, lalu bandingkan waktu unduh font sebelum dan sesudah.
5. Tulis temuan: apakah Poppins benar-benar termuat, dan apa peran tag `preconnect` bagi pengalaman pengguna.

**Bukti yang dikumpulkan:** tabel hasil pemeriksaan Details panel Network, tangkapan layar panel Elements dan Network, serta catatan temuan.

### Lab 4 — Debug rangkaian token yang rusak
**Konteks:** Sepuluh menit sebelum penilaian, halaman landing tampil nyaris tanpa warna: tombol transparan, badge putih polos, dan heading kembali abu-abu. Berkas gaya berisi dua kesalahan penulisan.

**Tugas:**
1. Buat `lab-4/lab-4/rusak.html` + `css/style.css` dengan kondisi berikut, lalu perbaiki sampai halaman tampil normal.

```css
:root {
  --clr-primary: #4F46E5;
  --clr-dark: #1E293B;
  --radius: 12px;
}

.hero-cta {
  background-color: var(--clr-primari);
  border-radius: radius;
  color: #FFFFFF;
  padding: calc(var(--space-unit) * 2) calc(var(--space-unit) * 5);
}

.produk-name {
  color: var(--clr-dark);
}
```

2. Jelaskan nilai apa yang dipakai browser ketika `var(--clr-primari)` tidak ditemukan, dan apa yang terjadi pada `border-radius: radius;`.
3. Tambahkan token yang hilang, perbaiki penulisan pemanggilan yang salah, lalu uji ulang halaman.

**Bukti yang dikumpulkan:** berkas sebelum dan sesudah perbaikan, tangkapan layar halaman sesudah, serta daftar kesalahan beserta penjelasannya.

### Lab 5 — Menguji fallback stack pada jaringan buruk
**Konteks:** Sebagian pelanggan Tokosaya membuka katalog dari koneksi seluler yang lambat. Halaman harus tetap terbaca ketika web font gagal diunduh.

**Tugas:**
1. Siapkan `lab-4/lab-5/fallback.html` + `css/style.css` dengan dua versi deklarasi judul: satu memakai `font-family: 'Poppins';` saja, satu memakai `font-family: 'Poppins', 'Segoe UI', sans-serif;`.
2. Buka DevTools, aktifkan pemblokiran permintaan ke domain `fonts.googleapis.com` atau matikan jaringan, lalu muat ulang halaman.
3. Catat perbedaan penampakan antara kedua versi judul saat font gagal dimuat.
4. Perbaiki versi pertama menjadi *fallback stack* yang lengkap, lalu ulangi pengujian dan pastikan halaman tetap terbaca.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tangkapan layar kedua versi saat font diblokir, dan kesimpulan tiga kalimat tentang fungsi *fallback stack*.

### Lab 6 — Refactor nilai mentah menjadi token
**Konteks:** Berkas gaya lama landing page masih memakai heksadesimal yang diulang-ulang: indigo muncul di tombol, link, badge, dan gradien, sehingga perubahan warna brand menjadi pekerjaan berisiko.

**Tugas:**
1. Salin potongan gaya berikut ke `lab-4/lab-6/token.html` + `css/style.css`.

```css
.hero {
  background-image: linear-gradient(to bottom right, #4F46E5, #4338CA);
}

.hero-cta {
  background-color: #4F46E5;
  color: #FFFFFF;
  border-radius: 12px;
}

.produk-badge--baru {
  background-color: rgba(79, 70, 229, 0.12);
  color: #4338CA;
}

.produk-kategori {
  color: #334155;
}

h1, h2, h3 {
  color: #1E293B;
}
```

2. Tambahkan blok `:root` berisi token Tokosaya, lalu ganti setiap nilai mentah dengan `var()` yang sesuai.
3. Gunakan fitur pencarian di editor untuk membuktikan tidak ada lagi nilai heksadesimal mentah di luar `:root` (putih pada teks di atas gradien boleh tetap sebagai keputusan lokal).
4. Ubah nilai `--clr-primary` menjadi `#1D4ED8`, muat ulang, lalu catat minimal empat elemen yang ikut berubah.

**Bukti yang dikumpulkan:** berkas setelah refactor, hasil pencarian nilai heksadesimal, dan catatan elemen yang terdampak perubahan token.

### Lab 7 — Membangun halaman spesimen skala tipografi
**Konteks:** Design system kecil Tokosaya memerlukan satu halaman acuan agar seluruh anggota tim melihat ukuran teks yang sama saat menata halaman baru.

**Tugas:**
1. Buat `lab-4/lab-7/spesimen.html` + `css/style.css` yang menampilkan sembilan level skala: Display, Heading 1, Heading 2, Heading 3, Body besar, Subjudul kartu, Body, Kecil, dan Label.
2. Beri setiap level satu label kecil berisi nama level, nilai `rem`, dan nilai piksel padanannya pada basis 16px (label tidak boleh memakai ukuran yang salah level).
3. Atur `line-height` secara tepat: 1,1–1,25 untuk judul dan 1,6 untuk teks isi.
4. Periksa minimal tiga level di panel Computed DevTools dan pastikan nilai `font-size` serta `line-height` sesuai dengan label yang kamu tulis.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tangkapan layar halaman spesimen, dan tabel verifikasi nilai computed dari DevTools.

### Lab 8 — Eksperimen perilaku clamp() lintas lebar layar
**Konteks:** Judul hero harus proporsional di HP maupun monitor lebar tanpa deretan media query. `clamp()` dipakai untuk itu, tetapi perilakunya perlu dibuktikan, bukan diasumsikan.

**Tugas:**
1. Buat `lab-4/lab-8/clamp.html` + `css/style.css` dengan `h1 { font-size: clamp(2.25rem, 5vw, 3rem); }`.
2. Sebelum mengukur, tulis prediksi ukuran font (dalam piksel) untuk lebar jendela 360px, 800px, dan 1440px, lengkap dengan alasan mana dari min/preferred/max yang dipakai.
3. Ukur nilai `font-size` yang benar-benar dipakai pada ketiga lebar tersebut memakai panel Computed DevTools.
4. Bandingkan prediksi dengan hasil ukur, lalu jelaskan pada rentang lebar berapa batas minimum dan maksimum mulai aktif.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tabel prediksi vs hasil ukur, dan kesimpulan tentang titik kerja min/preferred/max.

### Lab 9 — Audit kontras dan perbaikan pasangan warna
**Konteks:** Halaman "Kebijakan Pengiriman" Tokosaya memakai lima kombinasi warna berbeda. Sebagai penulis gaya, kamu harus menyatakan mana yang lolos dan mana yang gagal sebelum halaman dirilis.

**Tugas:**
1. Buat `lab-4/lab-9/kontras.html` + `css/style.css` berisi lima blok teks kecil dengan pasangan warna: `#334155` di `#F8FAFC`, `#1E293B` di `#F59E0B`, putih di `#4F46E5`, `#16A34A` di putih, dan `#DC2626` di putih.
2. Untuk setiap pasangan, tentukan statusnya terhadap ambang AA 4,5:1 memakai pengetahuan dari bab ini, lalu tanda tangani hasilnya pada tabel.
3. Perbaiki setiap pasangan yang gagal memakai pola "warna semantik ke latar tint, teks ke warna gelap".
4. Ulangi pemeriksaan dan tunjukkan bukti perbaikan melalui tangkapan layar sebelum dan sesudah.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tabel status lima pasangan, dan tangkapan layar perbaikan.

### Lab 10 — Merancang token untuk komponen baru
**Konteks:** Tim Tokosaya akan menambah komponen "Kartu Testimoni Pelanggan". Komponen ini harus tampil senada dengan kartu produk, tetapi tetap punya identitas tersendiri.

**Tugas:**
1. Buat `lab-4/lab-10/testimoni.html` + `css/style.css` berisi satu kartu testimoni: nama pelanggan, kutipan ulasan, dan label kota.
2. Tambahkan ke `:root` token baru yang benar-benar dibutuhkan komponen ini, misalnya token warna latar kutipan, radius khusus, dan satu token jarak tambahan bila perlu. Jangan menambahkan token yang hanya dipakai satu kali tanpa alasan.
3. Terapkan seluruh nilai kartu lewat `var()`, dan gunakan `calc(var(--space-unit) * n)` untuk semua jarak agar tetap berada pada kelipatan 8px.
4. Tulis daftar token baru beserta alasan penambahannya, lalu tunjukkan dua komponen serupa (kartu produk dan kartu testimoni) di satu halaman untuk membuktikan konsistensinya.

**Bukti yang dikumpulkan:** berkas HTML + CSS, daftar token baru beserta alasannya, dan tangkapan layar kedua kartu yang berdampingan.

---

## Bab 05 — CSS Box Model dan Layout

**Praktikum Lab (10 soal)**

### Lab 1 — Kartu kategori dengan badge "Baru"
**Konteks:** Halaman katalog Tokosaya membutuhkan kartu kategori ringkas: judul kategori, jumlah produk, dan badge "Baru" yang menempel di pojok kanan atas kartu. Kerjakan pada file terpisah supaya `index.html` tidak terganggu.

**Tugas:**
1. Buat `tokosaya-css/lab-kategori.html` berisi dua kartu kategori berdampingan (mis. "Aksesori Input — 2 produk" dan "Audio — 2 produk").
2. Atur kartu: `width: 240px; padding: 16px; border: 1px solid #E2E8F0; border-radius: 12px;` dengan mode `border-box` aktif.
3. Tempelkan badge "Baru" di pojok kanan atas kartu memakai `position: absolute; top: 8px; right: 8px;` dan pastikan kotak landasan posisinya benar.
4. Susun kedua kartu berdampingan tanpa Flexbox: wadah memakai `inline-block` dengan trik `font-size: 0`, sedangkan kartu memakai `vertical-align: top` dan `font-size` eksplisit.

**Bukti yang dikumpulkan:** file HTML + CSS, tangkapan layar halaman, dan tangkapan diagram kotak satu kartu dari DevTools.

### Lab 2 — Debug: kartu meluber dari kontainer
**Konteks:** Kamu mewarisi kode katalog dari teman satu tim. Halaman menampilkan bilah gulir horizontal, padahal kontainer dibatasi 920 px dan tiap kartu ditulis 300 px.

**Tugas:**
1. Perhatikan potongan kode berikut, lalu hitung lebar kotak setiap kartu seperti yang diamati browser.

```css
.wadah { max-width: 920px; margin: 0 auto; }
.kartu {
  display: inline-block;
  width: 300px;
  padding: 16px;
  border: 2px solid #E2E8F0;
}
```

2. Tuliskan hitungan lebar tiap kartu, lalu jelaskan mengapa tiga kartu tidak muat dalam satu baris.
3. Tuliskan perbaikan minimal (satu blok aturan) dan buktikan hasilnya di browser.
4. Catat di komentar CSS mengapa mode itu dipilih.

**Bukti yang dikumpulkan:** tabel hitungan lebar, blok CSS perbaikan, dan tangkapan layar sebelum serta sesudah perbaikan.

### Lab 3 — Audit diagram kotak lewat DevTools
**Konteks:** Sebelum mengubah CSS, kebiasaan tim Tokosaya adalah membaca diagram kotak elemen terlebih dahulu.

**Tugas:**
1. Buka `tokosaya-css/index.html` (hasil Bab 5) di Chrome, sorot `.produk-card` pertama, lalu catat angka diagram kotak: `width`, `padding`, `border`, dan `margin`.
2. Verifikasi dengan hitungan: apakah lebar kotak yang dilaporkan sesuai dengan nilai `width: 280px` yang tertulis di CSS? Jelaskan.
3. Beri komentar sementara pada aturan global `box-sizing`, muat ulang halaman, lalu catat perubahan angka diagram kotak beserta gejala visualnya.
4. Kembalikan aturan tersebut, ulangi langkah 1, dan tuliskan kesimpulan tiga kalimat.

**Bukti yang dikumpulkan:** tabel angka diagram kotak (sebelum/sesudah), dua tangkapan layar DevTools, dan kesimpulan.

### Lab 4 — Refactor CSS dengan jarak "liar"
**Konteks:** Seorang anggota tim menulis jarak berdasarkan perasaan. Hasilnya halaman terasa tidak berirama: nilai jaraknya 14 px, 18 px, 30 px, dan 42 px.

**Tugas:**
1. Salin potongan CSS berikut ke file lab, lalu sunting seluruh nilainya ke skala 8 px proyek Tokosaya.

```css
.panel { padding: 14px; margin-bottom: 18px; }
.panel-judul { margin: 0 0 18px; }
.panel-aksi { margin-top: 30px; }
.bagian { padding: 42px 0; }
```

2. Untuk setiap nilai, tulis langkah skala yang dipilih (8 × n) pada komentar CSS.
3. Tulis satu paragraf: pada kasus di atas, kapan kamu memakai padding dan kapan memakai margin.

**Bukti yang dikumpulkan:** file CSS sebelum dan sesudah, tabel pemetaan nilai lama → langkah skala, dan satu paragraf alasan.

### Lab 5 — Cek aksesibilitas teks terpotong dan area sentuh
**Konteks:** Daftar arsip Tokosaya memuat nama dokumen yang panjang. Tiga baris pertama dipotong dengan elipsis supaya kolom tetap rapi.

**Tugas:**
1. Buat daftar berisi tiga nama dokumen; setiap baris memakai pola pemenggalan satu baris: `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`.
2. Pastikan teks penuh tetap dapat diamati pengguna melalui sarana bawaan HTML, dan sebutkan sarana itu.
3. Ukur tinggi area sasaran setiap baris daftar di DevTools, bandingkan dengan ambang WCAG 2.2 (2.5.8) 24 × 24 px, lalu tambahkan padding dari skala 8 px bila belum memenuhi.
4. Uji navigasi dengan papan tombol dan tunjukkan bahwa indikator fokus terlihat.

**Bukti yang dikumpulkan:** file HTML/CSS, catatan ukuran area sasaran, dan tangkapan layar fokus keyboard.

### Lab 6 — Header sticky dan tombol bantuan fixed
**Konteks:** Halaman bantuan Tokosaya punya header yang harus tetap terlihat dan tombol "Butuh bantuan?" di sudut kanan bawah.

**Tugas:**
1. Buat halaman lab dengan header `position: sticky; top: 0;` berlatar solid dan tombol bantuan `position: fixed` di sudut kanan bawah.
2. Gulir halaman ke bawah dan amati keduanya; pastikan tulisan pada konten yang tergulir tidak tembus terlihat di belakang header.
3. Tuliskan tiga poin catatan: kapan `sticky` layak dipakai, kapan `fixed` justru mengganggu, dan bagaimana `z-index` kecil dipakai untuk menata keduanya.

**Bukti yang dikumpulkan:** file lab, tangkapan layar pada dua posisi gulir, dan tiga poin catatan.

### Lab 7 — Debug: badge menempel pada kotak yang salah
**Konteks:** Pada revisi kartu produk, badge "Tersedia" tidak lagi muncul di pojok gambar melainkan bergeser jauh ke bawah, karena landasan posisinya berpindah.

**Tugas:**
1. Perhatikan CSS berikut; tentukan kotak mana yang menjadi landasan badge, dan prediksikan posisi badge sebelum membuka browser.

```css
.produk-card  { position: relative; }
.produk-media { /* tidak ada deklarasi position */ }
.produk-badge { position: absolute; top: 8px; right: 8px; }
```

2. Buktikan prediksimu di browser, lalu perbaiki dengan satu deklarasi pada `.produk-media`.
3. Jelaskan mekanisme *nearest positioned ancestor* dengan bahasamu sendiri dalam dua kalimat.

**Bukti yang dikumpulkan:** prediksi tertulis, tangkapan layar sebelum dan sesudah perbaikan, serta dua kalimat penjelasan.

### Lab 8 — Panel arsip dengan gulir internal
**Konteks:** Panel "Arsip Dokumen" menampilkan 12 baris dokumen. Halaman utama tidak boleh ikut menggulir hanya karena daftar ini panjang.

**Tugas:**
1. Buat wadah daftar dengan `max-height` setara delapan baris dan `overflow-y: auto`.
2. Isi dengan 12 nama dokumen, dua di antaranya sangat panjang (lebih dari 50 karakter).
3. Tangani nama panjang dengan dua cara: baris biasa memakai elipsis satu baris, satu baris khusus memakai `overflow-wrap: break-word`; jelaskan perbedaan pemakaian keduanya.
4. Pastikan kontainer halaman tetap `max-width: 960px` tanpa bilah gulir horizontal.

**Bukti yang dikumpulkan:** file HTML/CSS, tangkapan layar panel sebelum dan sesudah digulir, serta penjelasan dua kalimat.

### Lab 9 — Revisi tata letak kartu dashboard akademik
**Konteks:** Studi kasus SIAKAD pada bab mencatat tiga kartu informasi dengan padding 40 px, jarak liar (12/17/28 px), dan margin antarkartu 40 px yang bertetangga dengan border bagian 24 px.

**Tugas:**
1. Buat tabel masalah → solusi untuk minimal lima nilai jarak pada kartu tersebut.
2. Tulis versi revisi CSS: padding badan kartu 24 px, padding media 16 px, jarak antarkartu 32 px satu arah, dan tanpa tinggi yang dikunci.
3. Ganti tinggi tetap kartu dengan `min-height`, lalu jelaskan alasannya dalam satu kalimat.
4. Tambahkan header tabel jadwal yang menempel saat daftar digulir.

**Bukti yang dikumpulkan:** tabel masalah → solusi, file CSS revisi, dan tangkapan layar sebelum serta sesudah.

### Lab 10 — Eksperimen tiga nilai display
**Konteks:** Kamu ingin membuktikan sendiri perilaku `inline`, `block`, dan `inline-block` sebelum memutuskan jenis kotak untuk deretan badge kategori.

**Tugas:**
1. Buat satu halaman berisi tiga kotak badge dengan angka CSS identik (`width: 120px; padding: 8px 16px;`) tetapi nilai `display` berbeda: `inline`, `block`, dan `inline-block`.
2. Di DevTools, catat lebar kotak yang benar-benar terbentuk pada masing-masing badge.
3. Tambahkan dua kotak `inline-block` berdampingan, catat celah yang muncul, lalu hilangkan celah itu dengan trik `font-size: 0`.
4. Tulis kesimpulan: nilai `display` mana yang tepat untuk chip kategori, dan mengapa.

**Bukti yang dikumpulkan:** file HTML/CSS, tabel lebar kotak hasil pengukuran, dan kesimpulan.

---

## Bab 06 — Flexbox untuk Web Layout

**Praktikum Lab (10 soal)**

### Lab 1 — Navigasi dua anak yang menekuk rapi
**Konteks:** Wireframe revisi Tokosaya menuntut logo di kiri, empat link menu plus tombol "Keranjang (0)" di kanan. Halaman harus tetap rapi ketika jendela disempitkan.

**Tugas:**
1. Bangun struktur `nav` dengan **dua anak langsung**: merek dan satu pembungkus kelompok kanan.
2. Jadikan `<nav>` flex container dengan spasi antar-kelompok di tepi dan `flex-wrap: wrap`; beri `gap` pada `<nav>` dan pada kelompok kanan.
3. Uji tiga lebar jendela (± 1280 px, 768 px, 360 px) dan catat bagaimana penekukan terjadi dua lapis: kelompok kanan turun lebih dulu, lalu link menu ikut menekuk di dalamnya.
4. Jelaskan alasan pengelompokan itu dalam dua kalimat.

**Bukti yang dikumpulkan:** file HTML/CSS, tiga tangkapan layar ukuran berbeda, dan catatan penekukan.

### Lab 2 — Hero terpusat penuh
**Konteks:** Hero Tokosaya perlu judul, subjudul, dan satu CTA yang berdiri tepat di tengah — horizontal maupun vertikal — di dalam area setinggi 360 px.

**Tugas:**
1. Susun hero sebagai flex container bertipe `column` dengan `gap` dari skala 8 px.
2. Pusatkan konten pada sumbu utama dan sumbu silang, lalu beri `min-height: 360px`.
3. Beri CTA keadaan `:hover` dan uji jangkauan tombol dengan papan tombol.
4. Tuliskan satu keputusan keterbacaan untuk subjudul beserta alasannya.

**Bukti yang dikumpulkan:** file hero, tangkapan layar, dan catatan keputusan.

### Lab 3 — Debug: delapan kartu memaksa satu baris
**Konteks:** Katalog menampilkan bilah gulir horizontal; delapan kartu memanjang keluar layar. Kecurigaan mengarah ke dua deklarasi berikut.

**Tugas:**
1. Perhatikan potongan kode berikut, lalu sebutkan satu properti yang hilang dan satu nilai yang salah.

```css
.produk-row { display: flex; }
.produk-card { flex: 0 0 250px; }
```

2. Perbaiki agar kartu boleh menekuk ke baris berikutnya dan boleh menyusut saat layar sempit.
3. Bandingkan perilaku `flex: 0 0 250px` dan `flex: 0 1 250px` pada lebar jendela 360 px, lalu catat hasilnya.
4. Tulis satu kalimat pencegahan agar kekeliruan ini tidak terulang.

**Bukti yang dikumpulkan:** catatan dua temuan, CSS perbaikan, tabel perbandingan, dan tangkapan layar.

### Lab 4 — Debug: kartu tidak sama tinggi dan harga tidak sejajar
**Konteks:** Baris kartu produk terlihat bergelombang. Kartu dengan deskripsi panjang lebih tinggi, sementara harga tidak berbaris rapi di dasar kartu.

**Tugas:**
1. Reproduksi gejala dengan memberi `.produk-row { align-items: center; }` pada empat kartu yang panjang isinya berbeda.
2. Jelaskan mengapa `align-items: center` menimbulkan gejala itu.
3. Perbaiki dengan nilai default (`stretch`) ditambah pengaturan posisi harga, lalu buktikan seluruh harga sejajar.
4. Jelaskan peran `gap: 8px` di dalam kartu pada hasil akhir.

**Bukti yang dikumpulkan:** kode sebelum/sesudah, tangkapan layar, dan dua paragraf penjelasan singkat.

### Lab 5 — Inspeksi lencana flex di DevTools
**Konteks:** Tim ingin memiliki catatan teknis nilai komputasi flex pada proyek sebelum menghadapi UTS.

**Tugas:**
1. Buka katalog Tokosaya, lalu periksa lencana `flex` pada `.site-nav` dan `.produk-row` di tab Elements.
2. Catat nilai komputasi `display`, `flex-wrap`, `gap`, dan `flex-basis` anak pada kedua wadah.
3. Ubah langsung (*live edit*) nilai `flex-wrap` menjadi `nowrap`, amati efeknya, lalu kembalikan.
4. Ubah `justify-content` `.produk-row` menjadi `center` dan catat apa yang berubah pada baris terakhir.

**Bukti yang dikumpulkan:** tabel nilai komputasi, dua tangkapan layar, dan catatan hasil live edit.

### Lab 6 — Refactor deret inline-block menjadi flex
**Konteks:** Deret kartu versi Bab 5 memakai `inline-block`, trik `font-size: 0`, dan `vertical-align: top`. Kamu diminta membandingkannya dengan versi flexbox.

**Tugas:**
1. Salin deret kartu versi Bab 5 ke file lab, lalu ukur dan catat: celah antar item, trik yang dipakai, dan jumlah deklarasi pengatur jarak.
2. Tulis ulang deret itu memakai `display: flex; flex-wrap: wrap; gap: 24px;` pada wadah dan `flex: 0 1 250px` pada kartu.
3. Hapus trik yang tidak lagi diperlukan dan catat minimal tiga hal yang berubah.
4. Tulis kesimpulan dua kalimat: kapan versi flex lebih menguntungkan.

**Bukti yang dikumpulkan:** dua versi kode, tabel perbandingan, dan kesimpulan.

### Lab 7 — Cek aksesibilitas: urutan visual vs urutan fokus
**Konteks:** Desainer ingin nomor telepon Tokosaya muncul lebih dulu di footer pada layar sempit. Cara termudah adalah mengubah urutan visual dengan properti `order`.

**Tugas:**
1. Bangun footer dengan tiga kolom (profil, menu, kontak), lalu pada layar sempit angkat kolom kontak dengan `order`.
2. Telusuri halaman memakai tombol Tab; catat urutan fokus dan bandingkan dengan urutan visual.
3. Buat `:focus-visible` terlihat pada link footer (misalnya `outline` 3 px) dan tunjukkan buktinya.
4. Simpulkan batas aman pemakaian `order` dalam satu-dua kalimat.

**Bukti yang dikumpulkan:** kode, catatan urutan fokus vs urutan visual, dan tangkapan layar fokus.

### Lab 8 — Baris chip filter kategori
**Konteks:** Halaman katalog Tokosaya membutuhkan deretan chip kategori produk (mis. Aksesori Input, Audio, Layar, Penyimpanan, Daya, Video, ditambah dua kategori versimu) di atas daftar kartu.

**Tugas:**
1. Bangun deret chip memakai `display: flex; flex-wrap: wrap; gap: 8px;` dalam satu baris.
2. Beri setiap chip padding dari skala 8 px supaya area sentuhnya nyaman dan bentuknya tetap utuh.
3. Uji pada lebar 360 px dan pastikan chip menekuk tanpa menimbulkan bilah gulir horizontal.
4. Jelaskan mengapa `gap` lebih tepat daripada `margin-right` per chip pada deret yang menekuk.

**Bukti yang dikumpulkan:** file HTML/CSS, tangkapan layar pada layar sempit, dan penjelasan.

### Lab 9 — Prediksi dan verifikasi jumlah kartu per baris
**Konteks:** Sebelum demo kepada dosen, kamu diminta memperkirakan berapa kartu yang tampil berdampingan pada beberapa ukuran jendela.

**Tugas:**
1. Dengan basis kartu 250 px, `gap` 24 px, dan padding baris 24 px di kiri-kanan, hitung prediksi jumlah kartu per baris pada lebar jendela 1280 px, 1024 px, dan 768 px.
2. Verifikasi setiap prediksi di browser dan catat jumlah sebenarnya.
3. Jelaskan selisih prediksi dan kenyataan bila ada (mis. pembulatan ke bawah, pengaruh padding).
4. Catat pada lebar berapa komposisi kartu berubah, dan mengapa.

**Bukti yang dikumpulkan:** tabel prediksi vs hasil ukur, catatan lebar perubahan komposisi, dan tangkapan layar salah satu ukuran.

### Lab 10 — Baris tiga kartu ringkasan dasbor
**Konteks:** Dasbor akademik menampilkan tiga kartu ringkasan: Status Akademik, Jadwal Hari Ini, dan Tanggungan Keuangan. Ketiganya harus mengisi lebar halaman secara merata.

**Tugas:**
1. Bangun baris flex berisi tiga kartu dan beri setiap kartu `flex: 1`, lalu amati pembagian ruangnya.
2. Ubah satu kartu menjadi `flex: 2`, lalu catat perubahan proporsi dengan membandingkan lebar tiap kartu di DevTools.
3. Tambahkan `gap: 24px` dan buktikan jaraknya hanya muncul di antara kartu, tanpa sisa ruang di tepi.
4. Simpulkan dalam satu paragraf kapan `flex: 1` lebih tepat daripada lebar tetap.

**Bukti yang dikumpulkan:** kode, tabel lebar kartu hasil pengukuran, dan satu paragraf kesimpulan.

---

## Bab 07 — CSS Grid dan Responsive Web Design

**Praktikum Lab (10 soal)**

### Lab 1 — Membangun blok "Sorotan Toko" tiga breakpoint
**Konteks:** `index.html` Tokosaya versi CSS murni baru punya navigasi dan katalog. Pemilik toko ingin satu blok "Sorotan Toko" berisi tiga kartu (Produk Terlaris, Pengiriman Hari Ini, Ulasan Pelanggan) yang tetap nyaman dibaca dari HP hingga monitor kantor.

**Tugas:**
1. Buat `latihan-bab7/sorotan.html` dan `latihan-bab7/css/sorotan.css`, lalu definisikan token Tokosaya minimal `--clr-primary`, `--clr-surface`, `--clr-border`, `--clr-dark`, `--space-unit`, dan `--radius` di `:root`.
2. Buat wadah `.sorotan-grid` sebagai grid dengan `gap` berbasis `--space-unit` dan tiga `<article class="sorotan-kartu">` berisi judul serta satu kalimat singkat.
3. Terapkan pola mobile-first: satu kolom sebagai gaya dasar, dua kolom mulai 576 px, tiga kolom mulai 992 px, semuanya memakai `repeat()`. Tidak boleh ada media query `max-width`.
4. Uji dengan device toolbar pada 375 px, 576 px, 768 px, dan 992 px.

**Bukti yang dikumpulkan:** dua file yang dibuat, dua tangkapan layar (375 px dan 992 px), dan satu baris keterangan pengamatan per lebar uji.

### Lab 2 — Menambal denah grid yang rusak
**Konteks:** Rekan satu kelompok menyerahkan `admin-lama.css`. Dashboard-nya menolak berpindah ke denah dua kolom di tablet, dan satu area tampak hilang dari denah. Kamu diminta jadi peninjau kode.

**Tugas:**
1. Tinjau potongan kode berikut, temukan **dua cacat fungsional** yang membuat denah gagal dibentuk, dan jelaskan dampaknya masing-masing.

```css
.dasbor {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header header"
    "nav main"
    "footer";
  gap: 16px;
}

.dasbor-header { grid-area: header; }
.dasbor-nav    { grid-area: navv; }
.dasbor-main   { grid-area: main; }
.dasbor-footer { grid-area: footer; }

@media (min-width: 768px) {
  .dasbor {
    grid-template-columns: 220px 1fr;
    grid-template-areas:
      "header header"
      "nav main"
      "footer footer";
  }
}
```

2. Tulis versi perbaikannya ke `latihan-bab7/admin-perbaikan.css` dan tambahkan komentar penanda `/* denah versi mobile */` serta `/* denah versi tablet */`.
3. Buka halaman di 375 px dan 900 px untuk membuktikan perbaikannya bekerja.

**Bukti yang dikumpulkan:** file perbaikan, dua tangkapan layar, dan tiga kalimat penjelasan cacat yang ditemukan.

### Lab 3 — Inspeksi overlay grid di DevTools
**Konteks:** Kamu perlu memastikan `.stat-kartu` pada `admin.html` benar-benar membentuk jumlah track sesuai rancangan, dan tahu garis ke berapa saja yang terbentuk.

**Tugas:**
1. Buka `admin.html` di Chrome, aktifkan device toolbar, lalu setel lebar 1200 px.
2. Pilih elemen `.stat-kartu` di panel Elements, buka panel Layout, dan aktifkan overlay grid.
3. Catat jumlah track kolom, nomor garis yang tampak, dan jumlah baris yang terbentuk untuk empat kartu statistik.
4. Ulangi pada lebar 1100 px dan 560 px, lalu catat perubahan jumlah kolomnya.
5. Simpan temuan dalam bentuk tabel: lebar uji, jumlah kolom, media query yang berlaku.

**Bukti yang dikumpulkan:** tangkapan layar overlay grid pada 1200 px dan tabel temuan tiga lebar uji.

### Lab 4 — Refactor dari desktop-first ke mobile-first
**Konteks:** Seorang mahasiswa menulis gaya galeri katalog dengan pendekatan desktop-first. Tim memutuskan seluruh berkas CSS harus memakai pola mobile-first agar seragam dengan `admin.css`.

**Tugas:**
1. Konversi blok berikut menjadi mobile-first dengan media query `min-width` yang urutannya menaik, tanpa mengubah hasil visual di lebar mana pun.

```css
.katalog-grid { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 991px) { .katalog-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 767px) { .katalog-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 575px) { .katalog-grid { grid-template-columns: 1fr; } }
```

2. Uji kedua versi pada 375 px, 600 px, 900 px, dan 1300 px, lalu buktikan jumlah kolomnya identik.
3. Tulis tiga kalimat yang menjelaskan mengapa versi mobile-first lebih mudah dirawat.

**Bukti yang dikumpulkan:** file CSS hasil refactor, delapan tangkapan layar (empat lebar untuk dua versi) atau tabel perbandingan, dan tiga kalimat penjelasan.

### Lab 5 — Kartu promosi yang membentang dua kolom
**Konteks:** Tokosaya punya empat kartu promo: "Gratis Ongkir", "Cashback 5%", "Bundling Keyboard", dan "Tukar Tambah". Kartu "Gratis Ongkir" harus paling menonjol karena programnya paling utama.

**Tugas:**
1. Bangun `latihan-bab7/promo.html` berisi wadah `.promo-grid` dan empat kartu, memakai token Tokosaya.
2. Terapkan pola: satu kolom sebagai gaya dasar, dua kolom mulai 576 px, tiga kolom mulai 992 px.
3. Mulai 576 px, buat kartu "Gratis Ongkir" membentang dua track memakai `grid-column: 1 / span 2`. Gunakan kata kunci `span`, bukan menghitung garis akhir.
4. Amati dan catat kemana kartu sisanya mengalir pada 576 px dan pada 992 px.

**Bukti yang dikumpulkan:** file HTML dan CSS, tangkapan layar 375 px dan 900 px, serta catatan alur kartu pada kedua lebar itu.

### Lab 6 — Audit aksesibilitas panel navigasi dashboard
**Konteks:** Sebelum UTS, panel navigasi `admin.html` perlu diaudit karena dipakai dengan keyboard dan pembaca layar oleh tim gudang.

**Tugas:**
1. Periksa lima hal pada `.dasbor-nav` dan halaman `admin.html`: (a) apakah tautan aktif memakai `aria-current="page"`, (b) apakah tautan punya aturan `:focus-visible` yang terlihat, (c) apakah area sentuh tiap tautan paling kurang 40 piksel pada lebar 375 px, (d) apakah tautan disusun dalam elemen daftar (`ul`/`li`), (e) apakah halaman hanya punya satu `h1`.
2. Dokumentasikan hasil tiap pemeriksaan dengan status lolos atau belum.
3. Perbaiki satu temuan yang belum lolos, lalu buktikan perbaikannya.

**Bukti yang dikumpulkan:** daftar periksa lima poin, satu tangkapan layar cincin fokus atau area sentuh setelah perbaikan, dan dua kalimat penjelasan.

### Lab 7 — Tipografi clamp dan gambar responsif
**Konteks:** Halaman katalog Tokosaya memuat gambar produk berukuran asli 1200 px dan judul seksi. Kamu diminta memastikan keduanya tidak pernah merusak layout di layar sempit.

**Tugas:**
1. Buat `latihan-bab7/katalog-uji.html` berisi satu judul `.katalog-judul` dan empat kartu bergambar (boleh memakai gambar kotak berukuran besar).
2. Terapkan `font-size: clamp(1.5rem, 1.1rem + 1.5vw, 2rem)` pada judul dan resep gambar responsif (`width: 100%`, `height: auto`, `display: block`) pada gambar di dalam kartu.
3. Buka panel Computed DevTools, lalu catat nilai `font-size` yang benar-benar terpakai pada 375 px dan 1440 px, dan bandingkan dengan perhitungan manual.
4. Buktikan tidak ada gambar yang melebihi lebar kartunya pada 375 px.

**Bukti yang dikumpulkan:** file halaman, tabel dua baris (lebar 375 px dan 1440 px) berisi nilai hitungan manual dan nilai Computed, serta tangkapan layar 375 px.

### Lab 8 — Menuntaskan pengguliran horizontal di 375 px
**Konteks:** Halaman `admin.html` versi lain dipakai di HP petugas gudang. Saat dibuka pada 375 px, seluruh antarmuka bergeser dan tabel menyeret halaman ikut menggulir.

**Tugas:**
1. Reproduksi masalahnya: buat halaman dengan tabel lima kolom yang tidak dibungkus wadah penggulir, dan satu gambar selebar tetap 640 px di dalam seksi ringkasan.
2. Telusuri penyebabnya memakai device toolbar 375 px: gulirkan halaman untuk mengenali elemen yang melebar, lalu pilih elemen itu di panel Elements dan periksa lebar terhitungnya pada panel Computed. Catat elemen yang lebih lebar dari viewport.
3. Perbaiki kedua penyebab: bungkus tabel dengan wadah penggulir ber-`overflow-x: auto` serta `min-width: 640px` pada tabelnya, dan berikan gambar aturan `width: 100%; height: auto`.
4. Verifikasi: pada 375 px pengguliran horizontal hanya terjadi **di dalam** wadah tabel, bukan pada halaman.
5. Jangan menyelesaikan masalah dengan `overflow-x: hidden` pada `body`; tuliskan satu kalimat alasan larangan itu.

**Bukti yang dikumpulkan:** dua tangkapan layar sebelum dan sesudah perbaikan, daftar elemen penyebab sebelum perbaikan, dan satu kalimat alasan larangan `overflow-x: hidden`.

### Lab 9 — Kerangka halaman tiga kolom dengan denah area
**Konteks:** Halaman rekap Tokosaya memerlukan tiga kolom pada desktop: navigasi, konten rekap, dan panel samping berisi tips. Di HP seluruhnya bertumpuk.

**Tugas:**
1. Bangun `latihan-bab7/rekap.html` beserta CSS-nya dengan empat area semantik: `header`, `nav`, `main`, dan `aside`, ditutup `footer`.
2. Pada gaya dasar, susun semuanya bertumpuk satu kolom memakai `grid-template-areas` yang diapit tanda petik dan konsisten jumlah kolomnya.
3. Mulai 992 px, gambar ulang denah menjadi tiga kolom dengan `header` dan `footer` membentang penuh tiga track, `nav` dan `aside` mengapit `main`. Gunakan kolom tetap untuk `nav` (220 px) dan `aside` (200 px), serta `1fr` untuk `main`.
4. Pastikan tidak ada satu pun kelas posisi di HTML; seluruh posisi ditentukan `grid-area` di CSS.

**Bukti yang dikumpulkan:** file HTML dan CSS, tangkapan layar 375 px dan 1200 px, serta potongan denah mobile dan desktop yang kamu tulis.

### Lab 10 — Investigasi kaskade media query yang bentrok
**Konteks:** Seorang mahasiswa mengeluh kartu statistiknya "kadang dua kolom, kadang empat kolom". Ia menyerahkan berkas CSS berikut apa adanya.

**Tugas:**
1. Prediksi lebih dulu, tanpa membuka browser: pada 1300 px dan pada 700 px, berapa kolom yang terbentuk dan dari blok mana nilai itu diambil, serta berapa nilai `gap` yang berlaku.

```css
@media (min-width: 1200px) { .stat-kartu { grid-template-columns: repeat(4, 1fr); } }
@media (min-width: 576px)  { .stat-kartu { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 992px)  { .stat-kartu { gap: calc(var(--space-unit) * 3); } }
```

2. Buktikan prediksimu di panel Styles DevTools: perhatikan aturan yang dicoret dan aturan yang menang pada tiap lebar uji. Catat selisih antara prediksi dan kenyataan bila ada.
3. Tulis ulang blok tersebut menjadi urutan mobile-first yang benar tanpa mengubah perilaku akhir yang diinginkan (1 kolom di bawah 576 px, 2 kolom mulai 576 px, 4 kolom mulai 1200 px, `gap` meluas mulai 992 px).
4. Tulis dua kalimat simpulan tentang aturan kaskade yang berlaku ketika dua aturan sama spesifik.

**Bukti yang dikumpulkan:** tabel prediksi versus hasil DevTools untuk 700 px dan 1300 px, file CSS hasil penulisan ulang, dan dua kalimat simpulan.

---

## Bab 09 — Pengenalan Bootstrap 5

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

---

## Bab 10 — Komponen Bootstrap

**Praktikum Lab (10 soal)**

### Lab 1 — Navbar yang tidak mau menumpuk
**Konteks:** Seorang rekanmu ingin memakai *navbar* varian tanpa JavaScript pada `katalog.html` di proyek `tokosaya-bootstrap/`. Ia sudah menghapus tombol hamburger, tetapi hasilnya menu tetap mendatar padat di layar 375 piksel dan merek terdorong ke tengah.

**Tugas:**
1. Periksa potongan berikut, lalu temukan tiga kesalahan yang membuat perilakunya menyimpang dari pola Subbab 10.2.

```html
<nav class="navbar navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="index.html">Tokosaya</a>
    <ul class="navbar-nav">...</ul>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
```

2. Tulis versi perbaikan lengkap berisi merek, empat tautan baku (Beranda, Katalog, Tentang, Kontak) dengan `active` + `aria-current="page"` pada Katalog, dan tautan Keranjang berikon `bi bi-cart3`.
3. Uji hasilnya di DevTools pada lebar 375, 768, dan 1200 piksel.

**Bukti yang dikumpulkan:** file `katalog-uji.html`, daftar tiga kesalahan beserta alasannya, dan tiga tangkapan layar DevTools.

### Lab 2 — Membaca aturan CSS pemenang di DevTools
**Konteks:** Tim Tokosaya menduga gaya Bootstrap masih menang atas gaya kustom `.produk-card`, sehingga radius dan bayangan kartu tidak mengikuti token proyek.

**Tugas:**
1. Buka `katalog.html`, arahkan pengembang ke salah satu kartu produk, lalu catat nilai *computed* untuk `border-radius`, `box-shadow`, `height` gambar, dan `object-fit`.
2. Tentukan aturan mana yang berasal dari `bootstrap.min.css` dan mana yang berasal dari `css/style.css`, lalu tunjukkan di panel Styles berkas mana yang menang.
3. Ubah nilai `--radius` di `:root` menjadi `16px`, muat ulang halaman, lalu buktikan perubahannya terlihat pada kartu.
4. Jelaskan mengapa perubahan itu berhasil tanpa menambahkan `!important`.

**Bukti yang dikumpulkan:** tangkapan layar panel Styles + Accessibility tidak diperlukan; cukup panel Styles dan catatan nilai *computed* sebelum–sesudah.

### Lab 3 — Pemeriksaan aksesibilitas ikon
**Konteks:** Halaman Tokosaya memuat banyak ikon Bootstrap Icons. Lima potongan berikut dipotong dari halaman berbeda dan belum diperiksa dari sisi aksesibilitas.

```html
<a class="btn btn-outline-light btn-sm" href="keranjang.html"><i class="bi bi-cart3"></i> Keranjang</a>
<a class="nav-link" href="katalog.html"><i class="bi bi-search"></i></a>
<span class="fw-semibold"><i class="bi bi-funnel"></i> Urutkan:</span>
<span><i class="bi bi-book"></i> Konsep Sistem Informasi <span class="badge text-bg-success">Tersedia</span></span>
<li class="page-item"><a class="page-link" href="katalog.html"><i class="bi bi-chevron-right"></i></a></li>
```

**Tugas:**
1. Untuk setiap potongan, tentukan apakah ikonnya hiasan (`aria-hidden="true"`) atau punya makna sendiri (butuh `aria-label` atau teks rahasia).
2. Tulis versi perbaikan setiap potongan.
3. Buka DevTools pada salah satu perbaikanmu, panel Accessibility, dan buktikan nama yang dibacakan untuk tautan ikon berubah sesuai harapan.

**Bukti yang dikumpulkan:** tabel lima baris (potongan → perlakuan → *markup* perbaikan) dan satu tangkapan layar panel Accessibility.

### Lab 4 — Strip pengumuman di atas grid katalog
**Konteks:** Pemilik Tokosaya ingin menaruh pengumuman "Kirim Cepat gratis untuk pembelian di atas Rp500.000" di atas grid produk, ditambah baris legenda empat badge semantik.

**Tugas:**
1. Buat file `katalog-uji.html` (boleh menyalin kerangka `katalog.html`) dan sisipkan satu `alert` statis berisi pengumuman di atas `<div class="row g-4">`.
2. Tambahkan baris legenda berisi keempat badge baku Tokosaya beserta maknanya: Tersedia, Best Seller, Stok Terbatas, Baru.
3. Pastikan `alert` memakai `role="alert"` dan tidak memuat tombol tutup sama sekali.

**Bukti yang dikumpulkan:** file HTML dan satu tangkapan layar pada lebar 1200 piksel yang memperlihatkan strip pengumuman serta baris legenda.

### Lab 5 — List group yang berantakan
**Konteks:** Ini *markup* daftar produk pada halaman demo komponen. Status belum turun ke kanan, dan item yang sedang dipilih kehilangan penanda bagi pembaca layar.

```html
<ul class="list-group">
  <li class="list-group-item"><span>Keyboard Mekanis KX-210</span>
    <span class="badge text-bg-warning">Best Seller</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Mouse Wireless MW-88</li>
  <li class="list-group-item active">Monitor IPS 24" MR-241</li>
</ul>
```

**Tugas:**
1. Perbaiki susunan item pertama agar label produk di kiri dan badge di kanan.
2. Tambahkan badge semantik "Tersedia" pada item Mouse Wireless MW-88 mengikuti pola yang benar.
3. Lengkapi atribut penanda status pada item ketiga supaya pembaca layar tahu item itu yang sedang dipilih.

**Bukti yang dikumpulkan:** file HTML hasil perbaikan dan satu tangkapan layar daftar pada lebar 375 serta 1200 piksel.

### Lab 6 — Breadcrumb tiga tingkat halaman detail
**Konteks:** Tokosaya akan menambah halaman `detail-kx210.html` dan ingin pengguna tahu posisinya: Beranda → Katalog → Keyboard Mekanis KX-210.

**Tugas:**
1. Tulis potongan `nav` + `ol` breadcrumb tiga tingkat. Dua tingkat pertama berupa tautan ke `index.html` dan `katalog.html`.
2. Tandai tingkat terakhir sebagai posisi halaman sekarang tanpa dijadikan tautan.
3. Jelaskan kenapa label `aria-label` pada elemen `nav` diperlukan meski halaman sudah punya *navbar* di atasnya.

**Bukti yang dikumpulkan:** file `detail-kx210.html` (boleh berisi *navbar* + *breadcrumb* saja) dan dua kalimat penjelasan.

### Lab 7 — Refactor gaya *inline* ke `css/style.css`
**Konteks:** Seorang anggota tim menulis gaya kartu langsung pada atribut `style` agar cepat dilihat, padahal proyek punya token di `:root`.

```html
<div class="card h-100" style="border:1px solid #E2E8F0; border-radius:12px;
     box-shadow:0 8px 24px rgba(15,23,42,0.08); overflow:hidden;">
  <img src="img/produk-mouse-mw88.svg" class="card-img-top"
       style="height:160px; object-fit:cover;" alt="Mouse Wireless MW-88">
  <div class="card-body d-flex flex-column">
    <h3 class="card-title h6">Mouse Wireless MW-88</h3>
    <p class="fw-semibold text-primary mt-auto mb-0">Rp185.000</p>
  </div>
</div>
```

**Tugas:**
1. Pindahkan seluruh gaya *inline* ke satu aturan `.produk-card` (atau dua aturan bila perlu) di `css/style.css`, memakai variabel token `var(--radius)`, `var(--clr-border)`, dan `var(--shadow-card)`.
2. Tambahkan satu efek *hover* CSS murni yang mengangkat kartu tanpa JavaScript.
3. Pastikan *markup* kartu kembali bersih tanpa atribut `style`.

**Bukti yang dikumpulkan:** kedua berkas (HTML dan CSS) serta tangkapan layar kartu sebelum dan sesudah.

### Lab 8 — Mengubah status pagination
**Konteks:** Halaman `katalog.html` sedang mendemokan prototipe tiga halaman. Karena pengguna dianggap sedang membuka halaman 2, penanda statusnya harus dipindahkan.

**Tugas:**
1. Ubah deret *pagination* sehingga halaman 2 berstatus aktif dan penanda aksesibilitasnya benar.
2. Jadikan panah kiri sebagai tautan biasa ke `katalog.html`, dan biarkan panah kanan berstatus `disabled`.
3. Pastikan halaman 1 dan 3 tetap berupa tautan biasa, dan seluruh deret tetap terpusat di tengah.

**Bukti yang dikumpulkan:** potongan `nav` hasil perbaikan dan satu tangkapan layar *pagination*.

### Lab 9 — Halaman demo status statis
**Konteks:** Kamu ditugaskan menyiapkan halaman `demo-faq.html` berisi potongan FAQ dan satu kotak dialog statis untuk kebutuhan papan cerita desain. Pada demo FAQ, yang harus tampil terbuka justru panel **kedua**, bukan panel pertama.

**Tugas:**
1. Bangun satu `accordion` berisi dua item: item pertama tertutup, item kedua terbuka. Keduanya memakai tombol ber-`type="button"`.
2. Tambahkan satu `modal` statis berikut judul "Konfirmasi Pesanan", satu paragraf isi, dan dua tombol footer.
3. Beri komentar `<!-- khusus demonstrasi -->` pada gaya *inline* yang membuat modal tampil di aliran halaman, lalu jelaskan mengapa tombol silang pada modal itu tidak berfungsi.

**Bukti yang dikumpulkan:** file `demo-faq.html` dan satu paragraf penjelasan tentang kelas penanda status yang kamu pakai.

### Lab 10 — Audit responsif grid kartu
**Konteks:** Sebelum diserahkan ke pemilik Tokosaya, tim penjamin mutu ingin bukti bahwa grid katalog benar-benar berubah susunan mengikuti lebar layar.

**Tugas:**
1. Buka `katalog.html` di Chrome, lalu catat jumlah kartu per baris pada lebar 360, 575, 576, 991, 992, dan 1200 piksel.
2. Jelaskan kelas mana yang mengambil alih susunan tepat pada setiap batas yang kamu amati.
3. Aktifkan *overlay* grid di DevTools dan tunjukkan pembagian dua belas kolom yang dipakai sel produk.

**Bukti yang dikumpulkan:** tabel pengamatan enam baris, dua tangkapan layar DevTools (lebar 575 dan 992 piksel), dan satu paragraf kesimpulan.

---

## Bab 11 — Form dan User Interface Design

**Praktikum Lab (10 soal)**

### Lab 1 — Form login yang mengandalkan *placeholder*
**Konteks:** Tokosaya menyiapkan halaman `masuk.html` untuk pelanggan lama. Rekanmu menulis form ini cepat-cepat; ia mengaku "labelnya sudah ada, cuma di dalam kotak".

```html
<form action="#" method="get">
  <div class="mb-3">
    <input type="email" class="form-control" placeholder="Email pelanggan">
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" placeholder="Kata sandi">
  </div>
  <button class="btn btn-primary">Masuk</button>
  <button class="btn btn-outline-secondary">Batal</button>
</form>
```

**Tugas:**
1. Ganti kedua *placeholder* menjadi label yang benar-benar terlihat dan terhubung ke medannya, lalu pertahankan *placeholder* hanya bila memang berguna sebagai contoh format.
2. Tambahkan atribut `autocomplete` yang sesuai pada medan email menurut daftar *token* pada Subbab 11.7.
3. Perbaiki tombol "Batal" supaya tidak menyerahkan form saat ditekan, dan jelaskan perilaku bawaan HTML yang mendasari perbaikan itu.

**Bukti yang dikumpulkan:** file `masuk.html` hasil perbaikan, daftar tiga perubahan beserta alasannya, dan satu tangkapan layar form pada lebar 375 piksel.

### Lab 2 — Medan tanggal dan jumlah pada opsi Ambil di Toko
**Konteks:** Opsi "Ambil di Toko" pada halaman keranjang belum punya medan pengambilan. Pemilik toko ingin tanggalnya seragam dan jumlah unitnya dibatasi satu sampai lima.

**Tugas:**
1. Tambahkan satu kelompok medan berisi medan Tanggal Pengambilan Barang dan satu medan Jumlah Unit.
2. Pakai atribut `type` yang mengunci format tanggal, dan batasi jumlah unit dengan `min` serta `max`.
3. Susun keduanya berdampingan pada layar sedang ke atas dan menumpuk di HP, dengan satu teks bantuan berisi alasan data tanggal diminta.
4. Hubungkan teks bantuan itu ke medannya secara semantik.

**Bukti yang dikumpulkan:** file HTML dan tangkapan layar pada lebar 375 dan 768 piksel.

### Lab 3 — DevTools: mengukur cincin fokus
**Konteks:** Tim Tokosaya ingin memastikan bahwa pengguna keyboard tetap bisa melihat medan yang sedang aktif, karena proyek ini akan diaudit pada Bab 13.

**Tugas:**
1. Buat halaman kecil `latihan/uji-fokus.html` berisi tiga medan berkelas `form-control` di dalam kelompok `mb-3`, ditulis seperti halaman praktikum lain (CDN Bootstrap 5.3.3 dan `css/style.css`).
2. Di DevTools, fokuskan medan pertama dengan tombol Tab, lalu catat nilai *computed* `outline-color`, `outline-width`, dan `outline-offset`.
3. Nonaktifkan sementara aturan `:focus-visible` pada panel Styles, lalu bandingkan nilai *computed*-nya lagi.
4. Jelaskan mengapa aturan itu ada di `css/style.css` dan bukan sekadar mengandalkan gaya bawaan browser.

**Bukti yang dikumpulkan:** tabel dua baris (sebelum dan sesudah aturan dinonaktifkan), tangkapan layar panel Styles, dan satu paragraf penjelasan.

### Lab 4 — Merapikan layout form yang terlalu sempit di HP
**Konteks:** Halaman pendaftaran keanggotaan Tokosaya memakai semua medan dalam `col-6` supaya "hemat tempat". Akibatnya di HP tiap medan hanya selebar separuh layar.

```html
<form action="#" method="get">
  <div class="row">
    <div class="col-6">
      <label for="nm" class="form-label">Nama</label>
      <input type="text" class="form-control" id="nm" name="nm">
    </div>
    <div class="col-6">
      <label for="tlp" class="form-label">Telepon</label>
      <input type="tel" class="form-control" id="tlp" name="tlp">
    </div>
    <div class="col-6">
      <label for="alm" class="form-label">Alamat</label>
      <textarea class="form-control" id="alm" name="alm" rows="3"></textarea>
    </div>
  </div>
</form>
```

**Tugas:**
1. Ubah susunan sehingga pasangan medan pendek berdampingan hanya mulai titik henti *medium*, dan tetap satu kolom penuh di HP.
2. Beri jarak antarkolom sesuai pola bab ini, dan biarkan `textarea` mengambil lebar penuh pada semua ukuran layar.
3. Jelaskan beda peran jarak `g-*` pada `row` dengan utilitas `mb-*` pada kelompok medan.

**Bukti yang dikumpulkan:** file hasil perbaikan, tangkapan layar pada 375 dan 768 piksel, dan dua kalimat penjelasan.

### Lab 5 — Kelompok radio "Waktu Pengambilan"
**Konteks:** Tokosaya membuka layanan ambil di toko dengan tiga jendela waktu: Pagi (09.00–12.00), Siang (13.00–16.00), dan Sore (17.00–20.00). Pembeli hanya boleh memilih satu jendela.

**Tugas:**
1. Bangun satu kelompok pilihan memakai elemen radio yang saling meniadakan, dengan satu judul kelompok yang terbaca pembaca layar.
2. Beri pilihan pertama status terpilih sejak awal.
3. Pastikan setiap label pilihan terhubung ke radio pasangannya.
4. Jelaskan alasan memakai radio alih-alih checkbox untuk kasus ini.

**Bukti yang dikumpulkan:** file HTML, tangkapan layar kelompok pilihan, dan satu paragraf penjelasan.

### Lab 6 — Status visual statis pada medan kupon
**Konteks:** Panel demonstrasi status Tokosaya akan diperlihatkan ke dosen pembimbing. Kamu diminta menampilkan dua keadaan sekaligus: satu medan yang isiannya memenuhi syarat, dan satu medan kupon yang bermasalah.

**Tugas:**
1. Buat medan "Nama Penerima" yang berstatus memenuhi syarat lengkap dengan pesan centangnya.
2. Buat medan "Kode Kupon" yang berstatus bermasalah lengkap dengan pesan kesalahan berisi petunjuk format, sekaligus tetap menampilkan teks bantuan permanen di bawahnya.
3. Beri komentar HTML yang menyatakan bahwa kelas status itu ditulis manual sebagai latihan *styling*.
4. Jelaskan apa yang terjadi pada kedua pesan itu bila kelas status pada medannya dihapus.

**Bukti yang dikumpulkan:** file `demo-status.html`, tangkapan layar kedua medan, dan satu paragraf penjelasan.

### Lab 7 — Audit aksesibilitas lima medan
**Konteks:** Sebuah form pendaftaran bimbingan akademik beredar dengan potongan-potongan berikut. Kamu berperan sebagai pemeriksa aksesibilitas.

```html
<input type="text" class="form-control" placeholder="Nama lengkap">
<label class="form-label">Nomor Pokok Mahasiswa</label>
<input type="text" class="form-control" id="npm" aria-describedby="bnt-npm">
<div class="form-text" id="catatan-npm">Tulis 9 digit angka.</div>
<input type="radio" class="form-check-input" name="sesi-1" id="pg" value="pagi">
<input type="radio" class="form-check-input" name="sesi-2" id="sr" value="sore">
<input type="checkbox" class="form-check-input" id="makan">
```

**Tugas:**
1. Temukan minimal empat pelanggaran pada potongan itu dan sebutkan ketentuan bab ini yang dilanggar.
2. Tulis versi perbaikan setiap medan beserta label, atribut penunjuk, dan pengelompokan yang tepat.
3. Jelaskan mengapa radio sesi harus berbagi `name` yang sama.

**Bukti yang dikumpulkan:** tabel temuan (potongan → pelanggaran → perbaikan) dan satu file HTML berisi versi perbaikannya.

### Lab 8 — *Input group* untuk satuan Rupiah
**Konteks:** Halaman pengembalian dana Tokosaya meminta nominal transfer. Angka telanjang tanpa satuan sering membuat pelanggan ragu apakah yang diminta rupiah atau ribuan rupiah.

**Tugas:**
1. Bangun medan "Nominal Transfer" dengan lampiran statis `Rp` di sisi kiri dan tombol "Isi Total Pesanan" di sisi kanan medan.
2. Pakai `type` yang tepat untuk angka, batasi nilai minimum dan maksimumnya, dan beri satu teks bantuan berisi contoh format.
3. Pastikan tombol lampiran tidak menyerahkan form, dan teks bantuan terhubung ke medannya.

**Bukti yang dikumpulkan:** file HTML dan satu tangkapan layar medan pada lebar 375 serta 768 piksel.

### Lab 9 — Refactor "label dalam kotak" pada form pesan
**Konteks:** Ini form hubungi-kami versi lama. Seluruh identitas medan hanya hidup di dalam *placeholder*.

```html
<form action="#" method="get">
  <p><input type="text" class="form-control" placeholder="Nama Anda"></p>
  <p><input type="text" class="form-control" placeholder="Email anda"></p>
  <p><input type="text" class="form-control" placeholder="No HP"></p>
  <p><textarea class="form-control" rows="4" placeholder="Tulis pesan"></textarea></p>
</form>
```

**Tugas:**
1. Tulis ulang form itu memakai label eksplisit yang terhubung ke setiap medan, dan pilih `type` yang semantik untuk email serta telepon.
2. Pertahankan *placeholder* hanya untuk contoh format, lalu tuliskan contoh format yang masuk akal untuk masing-masing medan.
3. Tambahkan atribut `autocomplete` pada dua medan identitas dan satu teks bantuan pada medan pesan.
4. Pastikan setiap kelompok medan memakai pembungkus berjarak antar-kelompok.

**Bukti yang dikumpulkan:** file hasil refactor beserta tabel empat baris (medan → `type` → *placeholder* contoh format → *token* `autocomplete`).

### Lab 10 — Kartu ringkasan pesanan dengan perhitungan baru
**Konteks:** Pesanan pelanggan berisi Headphone Studio HS-15 2 unit (Rp425.000 per unit), Charger Cepat 30W CP-30 1 unit (Rp120.000), dan Webcam HD WC-720 1 unit (Rp310.000). Pelanggan memilih pengiriman Same Day Rp35.000.

**Tugas:**
1. Hitung subtotal (jumlah unit), ongkos kirim, dan total pesanan itu, lalu tuliskan angkanya memakai format harga baku Tokosaya (tanpa spasi setelah `Rp`).
2. Bangun halaman dua kolom: kolom kiri (`col-lg-8`) berisi tabel item yang tetap rapi tanpa meluap di layar sempit, kolom kanan (`col-lg-4`) berisi kartu ringkasan dengan tiga baris biaya dan satu tombol utama berlabel "Lanjut ke Pembayaran".
3. Tandai baris total dengan penekanan visual dan garis pemisah, lalu pastikan kartu ringkasan tetap nyaman dibaca sebagai satu kolom di HP.
4. Tambahkan keterangan tabel yang hanya terbaca pembaca layar, dan satu catatan *checkout* prototipe statis di bawah tombol. Jelaskan pula atribut `type` yang harus dipasang pada tombol utama itu supaya tidak menyerahkan formulir secara tidak sengaja.

**Bukti yang dikumpulkan:** file `keranjang-uji.html`, perhitungan tertulis, dua kalimat penjelasan tentang `type` tombol, dan tangkapan layar pada lebar 1200 dan 375 piksel.

---

## Bab 12 — UI/UX dan Design System

**Praktikum Lab (10 soal)**

### Lab 1 — Seksi "Palet Warna" untuk Styleguide

**Konteks:** `styleguide.html` Tokosaya baru punya kerangka halaman, sedangkan bagian dokumentasi warna masih kosong. Kamu diminta menambahkan seksi pertama yang menampilkan palet token sebagai kartu warna.

**Tugas:**
1. Buat satu `<section id="warna">` baru di `styleguide.html` dengan judul seksi bernomor dan satu paragraf pengantar singkat.
2. Tampilkan empat token: `--clr-primary`, `--clr-accent`, `--clr-success`, dan `--clr-danger`, masing-masing sebagai kartu warna memakai kelas `swatch`, `swatch-blok`, dan kelas `warna-*` yang sudah ada di `css/style.css`.
3. Cantumkan nama token dan nilai heksanya sebagai teks label dengan kelas `swatch-nama`. Nilai heksa hanya boleh muncul sebagai label dokumentasi, bukan sebagai properti gaya.
4. Susun kartu-kartu itu dalam grid yang rapi dan sejajar dengan skala jarak Tokosaya.

**Bukti yang dikumpulkan:** cuplikan markup seksi warna dan tangkapan layar hasilnya di Chrome.

### Lab 2 — Matriks Varian Badge

**Konteks:** Badge status dipakai berulang di kartu katalog Tokosaya. Sebelum dipakai di banyak halaman, semua varian sahnya harus terdokumentasi.

**Tugas:**
1. Bangun empat badge memakai kelas `badge-terjual`, `badge-tersedia`, `badge-limited`, dan `badge-baru` dengan teks dataset Tokosaya yang sesuai.
2. Tambahkan satu badge netral sebagai pembanding.
3. Pastikan setiap badge memakai pasangan warna teks dan latar yang tetap terbaca, lalu jelaskan secara singkat mengapa badge aksen memakai teks gelap.
4. Buat tabel dokumentasi kecil (Markdown atau list) berisi tiga kolom: badge, token yang dipakai, dan makna yang disampaikan.

**Bukti yang dikumpulkan:** tangkapan layar kelima badge dan tabel dokumentasinya.

### Lab 3 — Alert Berlatar Tint Tanpa Warna Baru

**Konteks:** Halaman checkout Tokosaya membutuhkan dua pesan status: pesanan berhasil dan keranjang kosong.

**Tugas:**
1. Tambahkan seksi alert ke `styleguide.html` berisi dua contoh: alert sukses dan alert bahaya, memakai kelas `alert-toko` beserta kelas variasinya.
2. Setiap alert wajib memakai `role="alert"`, satu ikon Bootstrap Icons, dan teks pesan bergaya Tokosaya.
3. Beri ikon dekoratif atribut `aria-hidden="true"` dan beri warna ikon dari token yang sesuai.
4. Tuliskan satu kalimat penjelasan: mengapa latar alert memakai `rgba()` dan bukan nilai heksa baru.

**Bukti yang dikumpulkan:** markup kedua alert, cuplikan CSS tint yang dipakai, dan tangkapan layar.

### Lab 4 — Debug: Tombol yang Tampil Polos

**Konteks:** Di halaman promo Tokosaya, seorang anggota tim menulis `<button type="button" class="btn-utama btn-lg">Beli Sekarang</button>` dan `<button type="button" class="btn-outline-toko">Lihat Detail</button>`. Hasilnya, kedua tombol tampil seperti teks polos tanpa latar dan padding.

**Tugas:**
1. Periksa kedua potongan markup tersebut dan temukan penyebab tombol kehilangan bentuknya.
2. Perbaiki kedua markup itu tanpa mengubah CSS.
3. Jelaskan pola dua lapis Bootstrap (kelas dasar dan kelas varian) dalam maksimal dua kalimat, serta sebutkan apa akibatnya kalau pola itu dilanggar.
4. Cek hasil perbaikan dengan DevTools pada panel Elements untuk memastikan kelas dasar sudah terpasang.

**Bukti yang dikumpulkan:** kode sebelum dan sesudah perbaikan plus penjelasan singkat penyebabnya.

### Lab 5 — Debug: Tombol Tetap Biru meski Kelas Kustom Ada

**Konteks:** Kelas `btn-utama` sudah ditulis di `styleguide.html` dan aturannya ada di `css/style.css`, tetapi semua tombol tetap berwarna biru bawaan Bootstrap.

**Tugas:**
1. Buka DevTools, periksa panel Network dan Styles, lalu lacak urutan pemuatan berkas CSS di dalam `<head>`.
2. Tentukan penyebab masalah ini berdasarkan sifat kaskade CSS.
3. Perbaiki urutan link CSS dengan pola yang benar (CDN Bootstrap dan ikon lebih dulu, Google Fonts, lalu `css/style.css` paling bawah).
4. Muat ulang halaman dan tunjukkan bukti perubahan pada panel Styles.

**Bukti yang dikumpulkan:** tangkapan layar panel Styles sebelum dan sesudah, serta urutan `<link>` final.

### Lab 6 — Refactor Nilai Mentah menjadi Token

**Konteks:** Sebuah blok CSS warisan dari halaman lama masih menuliskan nilai warna dan lengkung secara mentah:

```css
.btn-promo {
  background-color: #4F46E5;
  border-color: #4F46E5;
  color: #FFFFFF;
  border-radius: 4px;
}
```

**Tugas:**
1. Tulis ulang blok tersebut supaya semua nilainya dikonsumsi lewat `var()` dari token Tokosaya.
2. Jelaskan token mana yang dipakai untuk tiap properti dan mengapa `border-radius: 4px` termasuk pelanggaran.
3. Sebutkan satu akibat nyata bila nilai mentah dibiarkan: apa yang terjadi pada blok ini ketika warna utama merek berubah?
4. Pastikan hasil refactor tidak menambah warna atau token baru.

**Bukti yang dikumpulkan:** kode hasil refactor dan tabel perubahan (properti, nilai lama, token pengganti, alasan).

### Lab 7 — Inspeksi Kartu Produk dengan DevTools

**Konteks:** Dua kartu produk di `styleguide.html` (MR-241 dan BT-5) dibangun dari design token. Kamu diminta membuktikan bahwa kartu itu benar-benar mengonsumsi token, bukan angka yang ditulis manual.

**Tugas:**
1. Buka `styleguide.html`, klik kanan salah satu kartu, lalu pilih **Inspect**.
2. Catat nilai computed `border-radius`, `box-shadow`, dan `background-color` kartu tersebut, dan tunjukkan pada panel Styles bahwa nilainya berasal dari `var()`.
3. Ukur jarak antarkartu dalam grid dan jarak antar elemen di dalam kartu, lalu bandingkan hasilnya dengan skala jarak Tokosaya.
4. Tuliskan hasilnya dalam tabel dan simpulkan apakah kartu itu patuh pada spacing system.

**Bukti yang dikumpulkan:** tabel nilai hasil inspeksi dan tangkapan layar panel Styles/Computed.

### Lab 8 — Audit Struktur Aksesibilitas Halaman Styleguide

**Konteks:** Seseorang mengirim potongan `styleguide.html` berikut untuk ditinjau:

```html
<h1>Styleguide Tokosaya</h1>
<h1>Panduan Visual Tim</h1>
<section>
  <h4>Warna</h4>
  <div class="swatch">
    <div class="swatch-blok" style="background-color: #4F46E5;"></div>
    <p>Warna utama</p>
  </div>
  <label>Nama pengelola styleguide</label>
  <input type="text" class="form-control">
  <i class="bi bi-palette"></i>
</section>
```

**Tugas:**
1. Temukan minimal empat cacat pada potongan itu (petunjuk: jumlah `h1`, lompatan jenjang heading, pasangan label dan input, ikon dekoratif, serta asal nilai warna).
2. Tuliskan perbaikan untuk setiap cacat yang kamu temukan.
3. Jelaskan dalam satu kalimat mengapa dokumentasi yang cacat strukturnya justru berbahaya bagi design system.

**Bukti yang dikumpulkan:** tabel temuan (cacat, alasan, perbaikan) dan potongan markup hasil perbaikan.

### Lab 9 — Skala Jarak dalam Bentuk Visual

**Konteks:** Bagian "Spasi" pada styleguide harus membuat orang langsung melihat bedanya 8 piksel dan 48 piksel tanpa menghitung.

**Tugas:**
1. Bangun daftar enam bar memakai kelas `sp-bar` dan kelas lebar `sp-8`, `sp-16`, `sp-24`, `sp-32`, `sp-48`, serta `sp-64` yang sudah tersedia.
2. Setiap bar diberi label nilai dan satu contoh pemakaiannya di Tokosaya (misalnya jarak label-input atau jarak antar section).
3. Pastikan tidak ada nilai di luar enam angka skala tersebut, baik pada bar maupun pada jarak antarbarisnya.
4. Tuliskan satu komentar singkat di CSS: mengapa proyek memakai basis 8 piksel.

**Bukti yang dikumpulkan:** tangkapan layar seksi spasi dan komentar yang dituliskan.

### Lab 10 — Audit Varian Tombol terhadap Matriks

**Konteks:** Halaman promo Tokosaya menyisipkan empat tombol berbeda di luar styleguide: satu tombol utama, satu outline, satu netral, dan satu tombol baru "Diskon 10%" berlatar `--clr-success` dengan sudut 4 piksel dan tanpa tampilan fokus yang jelas.

**Tugas:**
1. Bandingkan keempat tombol itu dengan matriks varian tombol Tokosaya (jenis × status: normal, hover, fokus keyboard, nonaktif).
2. Tandai varian mana yang sah dan mana yang melanggar, dengan menyebut aturan yang dilanggar, bukan sekadar selera.
3. Perbaiki tombol yang melanggar memakai token yang sudah ada, lalu tentukan apakah tombol itu perlu diusulkan sebagai varian resmi.
4. Tulis catatan *do and don't* singkat untuk halaman promo tersebut.

**Bukti yang dikumpulkan:** tabel audit berisi kolom tombol, status (sah/melanggar), aturan yang dirujuk, dan kode perbaikan.

---

## Bab 13 — Website Responsif dan Accessibility

**Praktikum Lab (10 soal)**

### Lab 1 — Audit Responsif Tiga Breakpoint

**Konteks:** Proyek `tokosaya-bootstrap/` sudah selesai dibangun pada Bab 9–12, tetapi belum pernah diuji pada lebar layar kecil. Kamu bertugas memeriksa perilaku halamannya memakai panel perangkat DevTools.

**Tugas:**
1. Buka `index.html` dan `katalog.html` di Chrome, lalu aktifkan panel perangkat (Ctrl+Shift+M).
2. Uji berurutan pada 360 px, 576 px, 768 px, 992 px, hingga 1200 px. Catat apakah muncul penggeser horizontal, jumlah kolom katalog, dan pada lebar berapa layout berubah.
3. Isi tabel temuan dengan kolom: halaman, lebar uji, temuan, status (sesuai/tidak sesuai strategi base–md–lg).
4. Beri kesimpulan singkat: apakah perubahan layout terjadi tepat pada breakpoint proyek atau pada lebar acak.

**Bukti yang dikumpulkan:** tabel temuan dan tangkapan layar panel perangkat pada satu lebar yang bermasalah.

### Lab 2 — Memperbaiki Luber di Layar 360 px

**Konteks:** Salah satu kartu produk di `katalog.html` memuat nama produk panjang tanpa spasi di dalam baris flex. Saat dibuka di 360 px, seluruh halaman ikut bergeser ke samping.

**Tugas:**
1. Reproduksi masalahnya di panel perangkat pada 360 px dan pastikan dari elemen mana luber itu berasal (gunakan panel Elements).
2. Perbaiki dengan menambahkan `overflow-wrap` pada teks yang berpotensi panjang dan `min-width: 0` pada anak langsung kontainer flex yang bermasalah.
3. Jelaskan mengapa `min-width: 0` diperlukan khusus pada kontainer flex.
4. Uji ulang pada 320 px dan pastikan penggeser horizontal sudah hilang.

**Bukti yang dikumpulkan:** potongan CSS sebelum/sesudah, tangkapan layar 360 px sesudah perbaikan, dan penjelasan singkat.

### Lab 3 — Refactor Media Query Desktop-First pada Navigasi

**Konteks:** File `css/style.css` warisan masih mengatur `.site-nav ul` dengan gaya dasar horizontal lalu menumpukkannya lewat `max-width: 768px`. Proyek Tokosaya memakai pendekatan *mobile-first*.

**Tugas:**
1. Tulis ulang aturan navigasi menjadi *mobile-first*: gaya dasar menumpuk penuh, lalu media query `min-width: 768px` membuatnya horizontal satu baris dengan jarak antar link yang layak.
2. Selaraskan angka breakpoint dengan Bootstrap 5.3 (768 px), bukan angka lain.
3. Tulis komentar di atas media query yang menjelaskan mengapa 768 px dipilih sebagai keputusan proyek.
4. Pastikan hasil visualnya sama dengan sebelumnya pada 360 px dan 1200 px.

**Bukti yang dikumpulkan:** CSS hasil refactor, komentar breakpoint, dan tangkapan layar dua lebar uji.

### Lab 4 — Skip Link dan Fokus pada Halaman Baru

**Konteks:** Tokosaya menambah halaman baru bernama `promo.html` yang memakai header dan navigasi seperti halaman lain. Halaman ini belum punya jalan pintas menuju konten utama.

**Tugas:**
1. Tambahkan skip link CSS murni sebagai elemen pertama di dalam `body`, dengan sasaran `#konten-utama`.
2. Beri elemen `main` atribut `id="konten-utama"` dan `tabindex="-1"`, lalu jelaskan fungsi `tabindex="-1"` di sini.
3. Tambahkan aturan `:focus-visible` untuk link dan tombol dengan outline yang jelas serta `outline-offset`.
4. Uji dengan Tab dari awal halaman (bukan klik): pastikan skip link muncul, dan setelah Enter fokus berpindah ke konten utama.

**Bukti yang dikumpulkan:** potongan CSS dan HTML yang ditambahkan serta catatan hasil uji Tab.

### Lab 5 — Cek Kontras dengan Color Picker DevTools

**Konteks:** Halaman Tokosaya memiliki tiga kombinasi warna teks dan latar yang perlu diverifikasi terhadap ambang WCAG level AA: teks putih di atas badge amber, teks abu terang di atas kartu putih, dan teks `--clr-body` di atas `--clr-surface`.

**Tugas:**
1. Ukur rasio kontras ketiga kombinasi memakai color picker pada panel Styles DevTools.
2. Catat hasil pengukuran dalam tabel: kombinasi, rasio, ambang yang berlaku (4,5:1 untuk teks normal, 3:1 untuk teks besar/elemen non-teks), dan status lulus/gagal.
3. Perbaiki kombinasi yang gagal langsung di aras token atau kelas sistemnya, bukan dengan tambalan warna ad hoc di satu halaman.
4. Uji ulang dan tunjukkan rasio barunya.

**Bukti yang dikumpulkan:** tabel pengukuran sebelum dan sesudah serta penjelasan singkat keputusan perbaikannya.

### Lab 6 — Audit Markup Aksesibilitas

**Konteks:** Berikut potongan halaman yang dikirim anggota tim untuk ditinjau:

```html
<h1>Promo Akhir Tahun Tokosaya</h1>
<h4>Syarat dan Ketentuan</h4>
<img src="img/promo.svg">
<a href="katalog.html">klik di sini</a>
<input type="text" class="form-control" placeholder="Email">
<hr>
```

**Tugas:**
1. Temukan minimal lima cacat aksesibilitas pada potongan tersebut.
2. Tuliskan perbaikan untuk setiap cacat, termasuk nilai `alt` yang tepat untuk gambar dan teks link yang bermakna.
3. Jelaskan mengapa teks link "klik di sini" menghambat pengguna pembaca layar yang menelusuri halaman lewat daftar link.
4. Sebutkan satu elemen pada potongan itu yang boleh memakai `alt=""` dan alasan yang benar untuk itu.

**Bukti yang dikumpulkan:** tabel temuan dan potongan markup hasil perbaikan.

### Lab 7 — Gambar Hero Responsif dengan Picture

**Konteks:** Hero `index.html` perlu mengganti komposisi gambarnya antar breakpoint: versi lebar penuh untuk desktop dan versi sederhana untuk layar kecil. Tersedia aset `img/hero-1200.svg`, `img/hero-768.svg`, dan `img/hero-480.svg`.

**Tugas:**
1. Tulis elemen `<picture>` dengan dua `<source>` memakai `min-width` dan satu `<img>` sebagai pilihan terakhir.
2. Susun urutan `source` dengan benar dan jelaskan mengapa urutan itu penting bagi cara browser memilih gambar.
3. Lengkapi `img` dengan `alt` deskriptif, `width`, `height`, serta kelas `img-fluid`.
4. Buka panel Network DevTools pada lebar 400 px dan 1200 px, lalu catat berkas gambar mana yang dimuat pada masing-masing lebar.

**Bukti yang dikumpulkan:** markup `<picture>`, penjelasan urutan source, dan catatan hasil panel Network.

### Lab 8 — Uji Tab Sepuluh Langkah dan Perbaikan Form

**Konteks:** Form kontak berisi input tanpa `label for` dan sebuah tombol kirim yang ditulis sebagai `<span>` yang "terlihat seperti tombol". Ada juga `tabindex="5"` pada salah satu elemen.

**Tugas:**
1. Uji keyboard: tekan Tab sepuluh kali dari awal halaman dan catat urutan fokus yang terjadi, termasuk fokus yang hilang atau melompat tidak wajar.
2. Perbaiki tiga hal: hilangkan `tabindex` positif, hubungkan setiap input dengan `<label for>` yang menunjuk `id`, dan ganti tombol palsu menjadi elemen `<button>` asli.
3. Jelaskan mengapa urutan fokus sebaiknya mengikuti urutan DOM dan bukan ditentukan `tabindex` positif.
4. Uji ulang dan pastikan cincin fokus terlihat pada setiap elemen yang menerima fokus.

**Bukti yang dikumpulkan:** catatan urutan tab sebelum/sesudah, kode perbaikan, dan satu tangkapan layar cincin fokus.

### Lab 9 — Lighthouse Sebelum dan Sesudah Satu Perbaikan

**Konteks:** Kamu ingin membuktikan bahwa perbaikan kontras benar-benar menaikkan kualitas halaman, bukan sekadar klaim lisan.

**Tugas:**
1. Buka tab Lighthouse pada DevTools, jalankan kategori *Accessibility* pada `katalog.html`, lalu catat skor dan daftar temuan.
2. Pilih satu temuan kontras, perbaiki di level token atau kelas sistem, kemudian jalankan ulang kategori yang sama.
3. Sajikan perbandingan "sebelum" dan "sesudah" dalam tabel: skor, temuan yang hilang/muncul, dan penyebab perubahannya.
4. Jelaskan mengapa sebaiknya hanya satu kategori yang diperbaiki per putaran.

**Bukti yang dikumpulkan:** tabel perbandingan skor dan temuan, ditambah cuplikan kode perbaikannya.

### Lab 10 — Navigasi Responsif CSS Murni dengan Target Sentuh Layak

**Konteks:** Header Tokosaya harus tetap bisa dipakai tanpa JavaScript: menumpuk di layar kecil, satu baris mulai 768 px, dan tetap nyaman disentuh jempol di HP.

**Tugas:**
1. Terapkan pola navigasi menumpuk pada layar kecil dan horizontal pada `min-width: 768px`, memakai kelas `site-nav` dan struktur `ul` yang ada.
2. Pastikan setiap link memiliki tinggi target sentuh sekitar 44 piksel termasuk padding, lalu buktikan ukurannya lewat panel Computed DevTools.
3. Tandai halaman aktif dengan `aria-current="page"` dan tuliskan bagaimana gaya CSS memanfaatkan atribut itu.
4. Tambahkan pola *footer-nav* dengan menampilkan daftar link utama yang sama di footer, dan jelaskan singkat keuntungan pola itu di layar kecil.

**Bukti yang dikumpulkan:** CSS navigasi, hasil pengukuran tinggi target sentuh, dan tangkapan layar tampilan 360 px serta 768 px.

---

## Bab 14 — Implementasi Desain Figma ke HTML CSS

**Praktikum Lab (10 soal)**

### Lab 1 — Bangun navbar Tokosaya dari spesifikasi

**Konteks:** Kamu akan membuat ulang navbar frame `P-DETAIL-01` pada berkas latihan terpisah agar hasilnya bisa diperiksa tanpa mengganggu `produk.html`. Navbar adalah contoh komponen yang seluruh susunannya bisa diselesaikan dengan utilitas flex Bootstrap.

**Tugas:**
1. Buat `tokosaya-bootstrap/latihan/navbar.html` yang memuat CDN Bootstrap 5.3.3, Bootstrap Icons 1.11.3, Google Fonts Poppins/Inter, dan pemanggilan `css/style.css` (salin dulu token yang dibutuhkan bila belum ada).
2. Susun `<header class="site-nav">` berisi merek "Tokosaya", empat link (Beranda, Katalog, Tentang, Kontak) dengan Katalog sebagai link aktif, serta ikon keranjang `bi bi-cart3` yang punya label aksesibel.
3. Atur susunannya memakai kelas utilitas (`d-flex flex-wrap align-items-center justify-content-between gap-3`), lalu tulis CSS kustom bertoken untuk warna dan ukuran presisi: latar `#FFFFFF`, garis bawah 1 px, padding vertikal 16 px, merek Poppins 700 20 px berwarna token primer, link Inter 15 px, dan jarak antarlink 32 px.
4. Buka di lebar 1440 px dan periksa dengan DevTools: tinggi navbar mendekati ± 72 px dan jarak antarlink 32 px. Catat setiap selisih yang kamu temukan.

**Bukti yang dikumpulkan:** Berkas `navbar.html`, cuplikan CSS kustom bertoken, tangkapan layar 1440 px, dan tangkapan panel Computed untuk `padding-top` serta `gap`.

### Lab 2 — Tabel pemetaan styles Figma menjadi token

**Konteks:** Seorang desainer mengirim daftar gaya tanpa berkas Figma: "Heading/Title 1" (Poppins 600, 32 px, line-height 1,25), "Body/Paragraph" (Inter 400, 16 px, line-height 1,6), "Warna/Accent" `#F59E0B`, dan "Warna/Border" `#E2E8F0`. Semuanya harus masuk ke proyek tanpa kehilangan asal-usulnya.

**Tugas:**
1. Buat berkas `catatan-token.md` berisi tabel pemetaan tiga kolom: label gaya Figma, token atau kelas tujuan, dan nilai yang disalin.
2. Tulis blok `:root` minimal yang memuat token warna dan token font dari daftar tersebut.
3. Tulis dua aturan tipografi berbasis token (satu untuk judul, satu untuk paragraf) dengan komentar asal gayanya.
4. Tambahkan satu paragraf penjelasan mengapa nilai gaya tidak ditulis langsung pada tiap elemen di HTML.

**Bukti yang dikumpulkan:** Berkas `catatan-token.md` dan potongan blok `:root` serta aturan tipografi yang kamu tulis.

### Lab 3 — Bangun panel produk sesuai urutan spesifikasi

**Konteks:** Panel kanan detail produk adalah komponen paling padat di halaman `produk.html`: isinya harus mengikuti urutan spesifikasi bagian F, dari badge sampai info bantuan.

**Tugas:**
1. Buat `tokosaya-bootstrap/latihan/panel-produk.html` dengan latar halaman token `--clr-bg` agar panel putih terlihat jelas.
2. Susun isi panel dengan urutan: badge "Best Seller" → `h2` nama produk → kategori → harga → deskripsi → tombol "Tambah ke Keranjang" berikon → dua baris info (pengiriman dan bantuan).
3. Gunakan kelas bertoken (`badge-populer`, `produk-nama`, `produk-harga`, `btn-tokosaya`, `produk-info`) dan pastikan panel berlatar putih, border 1 px, radius 12 px, padding 24 px, serta bayangan kartu dari token.
4. Sertakan minimal satu atribut ARIA pada ikon dekoratif dan satu `alt` deskriptif pada gambar produk.

**Bukti yang dikumpulkan:** Berkas HTML, cuplikan CSS kustom, dan tangkapan layar 1440 px; sertakan daftar 5 pasang properti:nilai dari panel Computed.

### Lab 4 — Baris produk terkait yang tunduk pada grid

**Konteks:** Baris "Produk Terkait" adalah ujian translasi grid: tiga kartu sejajar di desktop, satu kolom penuh di layar kecil, dengan jarak antarkolom 24 px dari spesifikasi.

**Tugas:**
1. Buat `tokosaya-bootstrap/latihan/produk-terkait.html` berisi judul section dan satu baris tiga kartu (Mouse Wireless MW-88, Headphone Studio HS-15, Speaker Bluetooth BT-5) lengkap dengan gambar, badge status, nama, harga, dan tautan katalog.
2. Wajib memakai `row g-4` dan `col-12 col-md-4`; badge memakai token yang benar ("Tersedia" hijau, "Stok Terbatas" merah).
3. Uji halaman pada lebar 1440, 768, dan 375 px, lalu ambil tangkapan layar untuk masing-masing lebar.
4. Catat perilaku jarak vertikal antarkartu saat kartu bertumpuk pada 375 px.

**Bukti yang dikumpulkan:** Berkas HTML, tiga tangkapan layar, dan catatan hasil pengamatan jarak serta tumpukan kartu.

### Lab 5 — Perbaiki aturan CSS yang menyimpang dari token

**Konteks:** Seorang rekan menyerahkan aturan CSS berikut untuk panel produk dan harga. Aturan itu berjalan, tetapi tidak setia pada spesifikasi dan token Tokosaya.

   ```css
   /* kustom */
   .produk-panel { padding: 20px; border-radius: 8px; background-color: #FFFFFF; }
   .produk-harga { color: #4F46E5 !important; font-size: 22px; }
   .produk-info { color: #94A3B8; font-size: 14px; }
   ```

**Tugas:**
1. Temukan minimal empat penyimpangan terhadap spesifikasi bagian F dan disiplin token, lalu tuliskan dalam tabel: baris aturan, penyimpangan, dan nilai yang benar.
2. Perbaiki aturan tersebut sehingga seluruh nilai berasal dari token atau spesifikasi (perhatikan nilai yang bukan kelipatan 8 px, radius yang tidak sesuai token, dan warna teks info yang terlalu pucat).
3. Jelaskan mengapa `!important` tidak diperlukan pada kasus ini.

**Bukti yang dikumpulkan:** Tabel temuan dan berkas CSS sebelum-sesudah; sertakan satu tangkapan layar hasil tampilan akhir.

### Lab 6 — Rapikan urutan dan hapus kode mati

**Konteks:** Berkas latihan `latihan/demo-kotor.css` berisi aturan yang tercecer: kelas peninggalan eksperimen, aturan yang tidak mengenai elemen apa pun di halamanmu, dan satu nama kelas berantakan.

   ```css
   /* kustom */
   .judulBesarMerah { color: red; font-size: 30px; }

   /* kustom */
   .panel-hilang { background-color: pink; }

   :root { --clr-primary: #4F46E5; --radius: 12px; }

   body { font-family: Arial, sans-serif; }

   /* kustom */
   .produk-panel { padding: 24px; border-radius: var(--radius); }
   ```

**Tugas:**
1. Susun ulang berkas itu mengikuti urutan token `:root` → gaya dasar → komponen.
2. Hapus minimal satu aturan yang tidak pernah mengenai elemen apa pun dan jelaskan dasarnya.
3. Ganti nama kelas yang berantakan mengikuti pola blok-elemen kebab-case, lalu samakan namanya jika kelas itu dipakai di HTML.
4. Sertakan komentar singkat berbahasa Indonesia pada setiap blok yang kamu rapikan.

**Bukti yang dikumpulkan:** Berkas CSS sebelum dan sesudah beserta daftar perubahan satu baris per item.

### Lab 7 — Audit nilai terhitung lewat panel Computed

**Konteks:** Setelah komponen jadi, pekerjaan berikutnya adalah membuktikan kesetiaannya, bukan merasakannya. Panel Computed pada DevTools menunjukkan nilai akhir yang benar-benar menyala pada elemen terpilih.

**Tugas:**
1. Buka halaman hasil Lab 3 atau Lab 4 pada lebar 1440 px.
2. Isi tabel audit berisi minimal enam pemeriksaan: ukuran dan ketabalan `h3` kartu, `line-height` paragraf, `border-radius` kartu, `padding` kartu, jarak antarkolom pada `row`, dan lebar `.container`.
3. Tuliskan nilai spesifikasi, nilai hasil Computed, dan selisihnya; tandai setiap selisih yang melewati toleransi ± 2 px.
4. Perbaiki satu temuan dengan selisih terbesar, lalu ambil tangkapan ulang sebagai bukti.

**Bukti yang dikumpulkan:** Tabel audit terisi, tangkapan panel Computed, dan tangkapan hasil perbaikan.

### Lab 8 — Cek aksesibilitas komponen hasil translasi

**Konteks:** Nilai kontras dan `alt` sebaiknya diperiksa sejak fase translasi, bukan setelah halaman selesai. Fokus lab ini adalah tiga pemeriksaan cepat pada komponen milikmu sendiri.

**Tugas:**
1. Periksa seluruh `img` pada halaman latihanmu: pastikan setiap gambar konten punya `alt` deskriptif dan tidak ada `alt="gambar"`.
2. Periksa urutan heading halaman: satu `h1`, lalu `h2`, lalu `h3` tanpa lompatan level.
3. Ukur kontras dua pasangan warna memakai pembaca warna pada DevTools: teks badge "Best Seller" di atas latarnya, dan teks tombol "Tambah ke Keranjang" di atas latarnya. Catat rasionya.
4. Perbaiki satu kekurangan yang kamu temukan, lalu tulis dampaknya bagi pengguna pembaca layar atau pengguna berkontras rendah.

**Bukti yang dikumpulkan:** Tabel hasil tiga pemeriksaan, nilai rasio kontras, dan cuplikan perbaikan yang dilakukan.

### Lab 9 — Translasi keadaan (state) secara statis

**Konteks:** Desain keranjang belanja memiliki dua tampilan: panel tertutup dan panel terbuka. Karena JavaScript di luar cakupan mata kuliah, keadaan itu harus diterjemahkan sebagai tampilan statis dengan catatan perilakunya.

**Tugas:**
1. Tambahkan satu panel keranjang sederhana pada halaman latihanmu, lalu tandai keadaannya dengan kelas status, misalnya `.keranjang-panel--terbuka`.
2. Tulis aturan CSS untuk keadaan terbuka (posisi, latar, border, radius, bayangan) memakai token yang tersedia.
3. Tambahkan gaya `:focus-visible` pada tombol utama agar jejak fokus terlihat jelas.
4. Tulis komentar di HTML yang menerangkan bahwa perilaku buka/tutup sesungguhnya ditangani skrip di luar cakupan mata kuliah.

**Bukti yang dikumpulkan:** Berkas HTML dan CSS, tangkapan layar keadaan terbuka, serta tangkapan layar saat tombol utama menerima fokus keyboard.

### Lab 10 — Jalankan fidelity checklist sembilan item

**Konteks:** Checklist 14.7 adalah pemeriksaan terakhir sebelum sebuah halaman dinyatakan selesai. Kali ini kamu menjalankannya atas halaman hasil latihanmu sendiri dan menyimpan hasilnya sebagai catatan.

**Tugas:**
1. Jalankan sembilan item checklist (tipografi, warna, jarak, radius, grid, kontainer, ikon, responsif, aksesibilitas) pada satu halaman latihan pilihanmu.
2. Isi berkas `catatan-fidelity.txt` berisi tabel: nomor item, hasil pemeriksaan, nilai yang dibandingkan, dan status lulus/temuan.
3. Tandai setiap item yang belum lulus beserta rencana tindak lanjutnya.
4. Sertakan dua tangkapan layar halaman pada 1440 px dan 375 px sebagai lampiran catatan.

**Bukti yang dikumpulkan:** Berkas `catatan-fidelity.txt`, dua tangkapan layar responsif, dan daftar prioritas perbaikan bila ada temuan.

---

## Bab 15 — Final Project dan Quality Assurance

**Praktikum Lab (10 soal)**

### Lab 1 — Audit validasi W3C satu halaman

**Konteks:** Validasi markup adalah item pertama pada audit struktur QA sprint. Kesalahan yang menumpuk sering berasal dari satu akar, misalnya tag yang tidak ditutup, sehingga senarai validator bisa dipangkas drastis bila ditangani berurutan.

**Tugas:**
1. Pilih satu halaman proyekmu, lalu validasi berkasnya lewat layanan validator W3C dan salin senarai kesalahan serta peringatannya.
2. Tandai kesalahan paling atas pada senarai dan perbaiki akarnya saja, tanpa mengubah bagian lain.
3. Validasi ulang halaman dan bandingkan jumlah kesalahan sebelum dan sesudah.
4. Catat satu baris temuan berisi gejala, langkah reproduksi, dan status perbaikannya.

**Bukti yang dikumpulkan:** Tangkapan layar senarai validator sebelum dan sesudah perbaikan, potongan kode yang diperbaiki, dan satu baris temuan.

### Lab 2 — Inspeksi folder dan konvensi penamaan berkas

**Konteks:** Sebuah proyek latihan memiliki struktur berantakan berikut.

   ```
   Tokosaya-Final/
   ├── Produk Baru.html
   ├── katalog-final2.html
   ├── gambar/
   │   ├── photo3.svg
   │   └── keyboard.svg
   ├── style v2.css
   └── style.css
   ```

**Tugas:**
1. Susun ulang struktur folder agar sesuai konvensi proyek: berkas HTML di akar, satu folder `css/`, satu folder `img/`, dan satu berkas gaya utama.
2. Buat tabel penggantian nama berkas: nama lama, nama baru, dan alasan singkat.
3. Jelaskan dua risiko teknis dari penamaan lama, salah satunya dikaitkan dengan perilaku sistem berkas atau server.
4. Tuliskan satu aturan penamaan gambar produk Tokosaya lengkap dengan contoh yang benar.

**Bukti yang dikumpulkan:** Pohon folder hasil perbaikan, tabel penggantian nama, dan dua paragraf penjelasan risiko.

### Lab 3 — Refactor blok CSS dengan tiga penyakit

**Konteks:** Reviewer meninggalkan catatan pada potongan CSS navbar dan badge berikut.

   ```css
   /* kustom */
   .site-nav a { color: #4F46E5; }

   /* kustom */
   div .site-nav a { color: #4F46E5 !important; font-size: 15px; }

   /* kustom */
   .site-nav a { border-radius: 9px; font-weight: 700; }
   ```

**Tugas:**
1. Sebutkan tiga cacat kualitas pada potongan itu dan urutkan dari yang paling berbahaya bagi pemeliharaan.
2. Tulis ulang potongan tersebut menjadi satu aturan per maksud, tanpa `!important`, dengan nilai yang berasal dari token atau skala rem.
3. Tambahkan komentar pengenal yang menjelaskan peran aturan barunya.
4. Terapkan hasil refactor pada halaman latihan dan pastikan tampilannya tidak berubah secara tak sengaja.

**Bukti yang dikumpulkan:** Daftar tiga cacat, berkas CSS sebelum-sesudah, dan satu tangkapan layar hasil render.

### Lab 4 — Baca kaskade lewat panel Styles dan Computed

**Konteks:** Judul kartu produk tampil dengan warna yang tidak sesuai. Dua aturan bersaing di halaman latihan:

   ```css
   /* kustom */
   .card-title { font-size: 2rem; color: #111827; }

   /* kustom */
   .produk-card .card-title { font-size: 1.25rem; color: var(--clr-dark); }
   ```

**Tugas:**
1. Buka halaman di Chrome, pilih elemen judul kartu, lalu baca panel Styles: tentukan aturan mana yang menang dan mengapa (specificity, urutan, atau `!important`).
2. Verifikasi dugaanmu pada panel Computed: catat nilai `font-size` dan `color` akhir yang benar-benar dipakai.
3. Terapkan satu perubahan saja untuk menyelesaikan konflik, misalnya mempersempit selektor atau menghapus aturan yang tidak diperlukan.
4. Muat ulang halaman dan jalankan uji regresi mini pada satu halaman lain yang memakai komponen serupa.

**Bukti yang dikumpulkan:** Tangkapan panel Styles dan Computed, satu perubahan yang diterapkan, serta catatan hasil uji regresi mini.

### Lab 5 — Kejar penyebab gulir horizontal di 360 px

**Konteks:** Pada lebar 360 px, halaman katalog menampilkan gulir horizontal. Dalam kerangka QA bab ini, gulir horizontal adalah cacat, bukan selera, sehingga harus dicari elemen penyebabnya sampai ketemu.

**Tugas:**
1. Buka halaman katalog dengan device toolbar pada lebar 360 px dan konfirmasi gejala gulir horizontalnya.
2. Inspeksi elemen satu per satu memakai diagram kotak dan nilai box model untuk menemukan elemen yang lebarnya melewati lebar viewport.
3. Perbaiki penyebabnya, misalnya gambar tanpa `img-fluid`, padding tetap yang terlalu lebar, atau baris tanpa `g-4`.
4. Ambil tangkapan layar sebelum dan sesudah, lalu tulis satu baris temuan beserta langkah reproduksinya.

**Bukti yang dikumpulkan:** Dua tangkapan layar (sebelum/sesudah), elemen penyebab, dan baris temuan yang siap dimasukkan ke laporan.

### Lab 6 — Uji navigasi keyboard dan indikator fokus

**Konteks:** Pengujian aksesibilitas manual dilakukan tanpa menyentuh mouse. Halaman yang tampak rapi sering gagal pada urutan tab dan indikator fokus yang tidak terlihat.

**Tugas:**
1. Buka satu halaman proyekmu, lalu telusuri seluruh halaman hanya dengan tombol Tab dan Enter: navigasi, katalog, sampai tombol kirim pada form.
2. Catat urutan perpindahan fokus dan tandai setiap tempat di mana fokus terlihat "tersesat" atau tidak mengikuti urutan visual.
3. Periksa apakah indikator fokus terlihat jelas pada link nav, tombol utama, dan bidang form.
4. Tulis dua temuan berformat laporan (ID, halaman, temuan, langkah reproduksi, severitas, status), lalu perbaiki satu di antaranya dengan gaya `:focus-visible`.

**Bukti yang dikumpulkan:** Catatan urutan tab, dua baris temuan, dan potongan CSS fokus yang diperbaiki.

### Lab 7 — Audit alt, heading, dan nama elemen di panel aksesibilitas

**Konteks:** Panel aksesibilitas DevTools memperlihatkan nama dan peran yang diterima teknologi bantu dari sebuah elemen. Lab ini melatih pembacaan panel itu, bukan sekadar menebak dari tampilan.

**Tugas:**
1. Pilih tiga elemen pada halamanmu: gambar produk, judul section, dan satu bidang input.
2. Baca nama serta peran ketiga elemen pada panel aksesibilitas DevTools, lalu catat hasilnya.
3. Perbaiki minimal tiga cacat yang kamu temukan, misalnya `alt="gambar"` yang tidak bermakna, heading yang melompat level, atau label yang tidak terhubung ke input.
4. Verifikasi ulang dengan panel yang sama setelah perbaikan.

**Bukti yang dikumpulkan:** Tabel hasil pembacaan sebelum-sesudah, potongan kode yang diperbaiki, dan tangkapan panel aksesibilitas.

### Lab 8 — Bangun tabel laporan temuan profesional

**Konteks:** Temuan QA harus dapat difilter dan diulang oleh orang lain, sehingga bentuk tabel lebih tepat daripada catatan bebas. Halaman laporan ini adalah alat kerja, bukan halaman produk.

**Tugas:**
1. Buat `laporan-temuan.html` memakai CDN Bootstrap 5.3.3 dengan struktur satu `h1` dan satu tabel.
2. Tabel wajib memuat kolom ID, halaman, temuan, langkah reproduksi, severitas, dan status; sertakan `caption` yang menjelaskan aturan severitas serta `th scope="col"` pada kepala tabel dan `th scope="row"` pada kolom ID.
3. Isi tiga baris temuan karangan yang mewakili severitas Kritis, Mayor, dan Minor, dengan badge semantik `text-bg-danger`, `text-bg-warning`, dan `text-bg-info`.
4. Tulis komentar `head` yang menyatakan tidak ada berkas skrip yang disertakan di halaman ini.

**Bukti yang dikumpulkan:** Berkas `laporan-temuan.html` dan tangkapan layar tabel pada lebar 992 px.

### Lab 9 — Peer review terhadap fragmen proyek rekan

**Konteks:** Kamu menerima fragmen kartu berikut dari proyek teman sekelas untuk direview dengan checklist QA.

   ```html
   <div class="row">
     <div class="col-md-4">
       <div class="card">
         <img src="img/produk-speaker-bt5.svg" class="card-img-top">
         <div class="card-body">
           <h5 class="card-title">Speaker Bluetooth BT-5</h5>
           <p class="card-text">Rp285.000</p>
           <a href="#" class="btn btn-primary">Klik di sini</a>
         </div>
       </div>
     </div>
   </div>
   ```

**Tugas:**
1. Temukan minimal tiga cacat QA pada fragmen itu dan kaitkan tiap cacat dengan aspeknya (aksesibilitas, teks tautan, kelas, atau konten).
2. Tulis hasilnya dalam format tabel temuan lengkap: ID, halaman, temuan, langkah reproduksi, severitas, dan status.
3. Urutkan temuan dari Kritis ke Minor dan beri satu rekomendasi perbaikan untuk masing-masing temuan.
4. Tuliskan satu kalimat penutup yang netral dan tidak menyalahkan pemilik proyek.

**Bukti yang dikumpulkan:** Tabel temuan berisi minimal tiga baris, daftar prioritas perbaikan, dan kalimat penutup review.

### Lab 10 — Kunci paket rilis kandidat dan ringkasannya

**Konteks:** Rilis kandidat adalah versi yang dinyatakan siap rilis dan menunggu persetujuan terakhir. Penguncian versi harus terdokumentasi agar keputusan rilis bukan suasana hati.

**Tugas:**
1. Periksa lima item wajib berikut pada proyekmu: seluruh link nav hidup, kontak Tokosaya konsisten, delapan produk katalog tampil, meta dasar lengkap (`charset`, `viewport`, `title`), dan tidak ada gulir horizontal pada 360/768/992 px.
2. Beri label paket proyek mengikuti pola versi rilis kandidat (misalnya `tokosaya-bootstrap-v1.0.0-rc1.zip`) dan buat arsipnya.
3. Tulis `catatan-perubahan.md` berisi versi, daftar perubahan terakhir, status seluruh temuan (terbuka versus diperbaiki), dan satu paragraf kesimpulan kesiapan rilis.
4. Sebutkan satu temuan yang sengaja dibiarkan terbuka beserta alasan dan rencana penanganannya.

**Bukti yang dikumpulkan:** Berkas ZIP berlabel rilis kandidat, `catatan-perubahan.md`, dan daftar centang lima item wajib beserta statusnya.

---


