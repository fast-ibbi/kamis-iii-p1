# Soal Praktikum Lab — Bab 02: HTML5 dan Struktur Semantik

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 10 soal praktikum · estimasi 20–40 menit per soal
> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)

---

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
