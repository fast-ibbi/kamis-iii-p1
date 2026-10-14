# Soal Praktikum Lab — Bab 12: UI/UX dan Design System

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 10 soal praktikum · estimasi 20–40 menit per soal
> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)

---

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
