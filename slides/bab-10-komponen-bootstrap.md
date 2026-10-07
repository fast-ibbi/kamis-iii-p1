---
marp: true
theme: academic
paginate: true
size: 16:9
lang: id
title: "Bab 10 — Komponen Bootstrap"
description: "Komponen visual Bootstrap 5.3.3 — navbar, kartu, badge, dan pagination — buat halaman katalog Tokosaya tanpa JavaScript."
footer: "Bab 10 · Komponen Bootstrap"
---

<!-- _class: lead -->
<!-- _paginate: skip -->
<!-- _footer: '' -->

# Komponen Bootstrap

**Bab 10** · Komponen visual siap pakai buat katalog Tokosaya

Studi kasus: **Tokosaya**

<!--
Buka dengan mengingatkan hasil Bab 9: landing page udah dirakit ulang dengan grid
dan utilitas. Tanyakan elemen apa yang pengguna benar-benar sentuh tiap kunjungan.
Jawaban yang diharapkan: menu navigasi, kartu produk, dan label status kecil.
Sebutkan bahwa seluruh praktikum bab ini berakhir di satu halaman `katalog.html`.
-->

---

# Tujuan Pembelajaran

Setelah menyelesaikan bab ini, kamu bisa:

- Peran komponen siap pakai dalam menekan biaya desain
- Struktur markup dan variant pada navbar, card, badge, dan lainnya
- Halaman katalog Tokosaya yang responsif dari komponen Bootstrap
- Batas komponen yang interaksinya butuh paket JavaScript
- Komponen daftar buku dan kartu status untuk perpustakaan
- Pemakaian ikon dan badge dari sisi kontras serta aksesibilitas

<!--
Bacakan tujuan ini singkat, lalu tekankan bahwa bab ini menopang CPMK 4 dan 5:
komponen dipakai konsisten, lalu batasannya dievaluasi. Sebutkan bahwa praktikumnya
membangun ulang katalog Tokosaya pakai komponen resmi, jadi hasilnya bisa
dibandingkan dengan versi CSS murni. Ingatkan bahwa JavaScript tetap di luar cakupan.
-->

---

# Elemen yang Benar-Benar Disentuh Pengguna

- Bab 9: landing page dirakit ulang dengan grid dan utilitas
- Tiga bagian belum disentuh: menu, kartu produk, label status
- Tim menulis CSS kartu sendiri: sudut dan bayangan melenceng
- Review jadi lama karena setiap file dicek satu per satu
- Komponen siap pakai: sekali belajar, kartu identik di mana pun
- Pertanyaan pemandu: gimana komponen mempercepat translasi desain?

<!--
Ceritakan situasinya: kepala tim minta menu, kartu buku, dan status stok seragam di
semua halaman. Tanyakan apa yang terjadi kalau tiap anggota tim menulis CSS kartu
sendiri dari nol. Jawaban yang diharapkan: sudut tumpul lawan sudut tajam, bayangan
kuat lawan tanpa bayangan, dan review ikut lama. Arahkan diskusi ke ide komponen.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Komponen UI dan Konsistensi

## Potongan antarmuka yang udah dikemas lengkap

<!--
Transisi dari keluhan konsistensi ke pertanyaan teknis: sebenarnya komponen itu apa
dan kenapa ia menghemat. Tahan dulu soal kelas-kelas navbar; itu masuk di bagian
berikutnya. Sebutkan bahwa pola yang sama bakal diulang buat delapan komponen.
-->

---

# Apa Itu Komponen Antarmuka

- Komponen: potongan antarmuka siap pakai dengan markup standar
- Bootstrap mengemas puluhan komponen, dari navbar sampai accordion
- Kamu cukup menyusun markup sesuai resep dokumentasi
- Lalu pilih variant warna yang kamu mau
- Ibarat merakit furnitur: papan udah dipotong, lubang udah dibor

> Sekali mempelajari struktur kelas `card`, seluruh tim menghasilkan kartu yang identik.

<!--
Tekankan kalimat furnitur siap pasang, karena itu pegangan buat seluruh bab.
Tanyakan apa saja yang udah disiapkan pihak Bootstrap pada sebuah komponen. Jawaban
yang diharapkan: markup standar, kelas-kelas gaya, dan aturan tampilan di berbagai
ukuran layar. Ingatkan bahwa kamu nggak perlu menemukan ulang roda box model.
-->

---

# Tiga Alasan Komponen Hemat Biaya

| Alasan | Yang terjadi |
|---|---|
| Hemat waktu | Box model, radius, dan responsifnya udah ditulis Bootstrap |
| Konsisten antarhalaman | Kartu di halaman A mirip kartu di halaman B |
| Tim baru cepat masuk | Pola kelasnya sama, jadi gampang melanjutkan kode |

- Proyek sistem informasi hampir selalu dikerjakan tim
- Bahasa bersama berupa nama kelas baku mempercepat peninjauan kode

<!--
Bahas baris konsistensi antarhalaman paling lama, karena itu yang paling terasa di
proyek tim. Tanyakan siapa yang paling diuntungkan pas ada anggota baru masuk.
Jawaban yang diharapkan: orang yang pernah membaca dokumentasi Bootstrap bisa
langsung mengikuti kode rekannya. Tekankan bahwa review jadi lebih cepat.
-->

---

# Batas Tanpa JavaScript

- Sebagian komponen dirancang jalan lengkap dengan paket JavaScript
- Mata kuliah ini cuma memakai lapisan visual komponen
- Status statis ditulis manual: `show`, `collapsed`, `active`, `disabled`
- Komponen interaktif diperlihatkan sebagai versi mati, kayak storyboard
- Pendekatan ini jujur: kamu tahu bagian mana yang butuh JavaScript

> Interaksi aslinya dirangkai paket JavaScript resmi Bootstrap.

<!--
Katakan dengan jelas bahwa mata kuliah ini nggak memuat paket JavaScript Bootstrap.
Tanyakan apa yang terjadi kalau tombol hamburger ditekan tanpa paket itu. Jawaban
yang diharapkan: nggak ada efek apa pun pada menu. Tegaskan bahwa versi statis bukan
kelemahan, tapi cara jujur menunjukkan batas HTML dan CSS.
-->

---

# Kerangka Kerja Empat Langkah

```text
1. Pilih komponen          navbar, card, badge
2. Baca resep markup       navbar-brand, card-body
3. Pilih variant/status    active, show, collapsed
4. Padukan dengan utilitas ms-auto, g-4, flex-wrap
```

- Empat langkah ini dijalankan sebanyak delapan kali di praktikum
- Di akhir bab polanya terasa makin alami

<!--
Minta mahasiswa menghafalkan urutan empat langkah ini. Tanyakan langkah mana yang
paling sering bikin salah. Jawaban yang diharapkan: langkah ketiga, karena status
harus ditulis manual tanpa bantuan paket JavaScript. Sebutkan bahwa langkah keempat
menyambung ke utilitas Bab 9.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Navbar, Tombol, Badge, dan Alert

## Komponen yang paling kelihatan di halaman

<!--
Masuk ke komponen yang paling sering dilihat pengguna. Sebutkan bahwa urutannya
mengikuti perjalanan pengguna: navbar di atas, tombol di tengah, label kecil di
dalam kartu. Ingatkan bahwa navbar Tokosaya memakai varian khusus tanpa JavaScript.
-->

---

# Anatomi Kelas Navbar

| Kelas | Peran |
|---|---|
| `navbar` | Wadah komponen; memakai Flexbox di dalamnya |
| `navbar-brand` | Nama merek di sisi kiri |
| `navbar-nav`, `nav-item`, `nav-link` | Daftar menu dan linknya |
| `navbar-expand-lg` | Menu mendatar sejak breakpoint 992 piksel |
| `navbar-dark bg-dark` | Latar gelap dengan teks terang |

- `navbar-toggler` dan `collapse navbar-collapse` ada di pola resmi
- Keduanya butuh paket JavaScript, jadi nggak kita pakai

<!--
Tunjukkan bahwa `navbar` sendiri sudah memakai Flexbox, jadi isinya sejajar otomatis.
Tanyakan kelas mana yang mengubah susunan menu pas lebar layar berubah. Jawaban yang
diharapkan: `navbar-expand-lg`. Sebutkan bahwa dua baris terakhir tabel adalah pola
resmi yang di buku ini sengaja nggak dipakai pada navbar Tokosaya.
-->

---

<!-- _class: compact -->

# Navbar Tokosaya Tanpa JavaScript

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand fw-semibold" href="index.html">Tokosaya</a>
    <!-- Menu selalu tampil; solusi tanpa JavaScript (lihat uraian di bawah) -->
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><a class="nav-link" href="index.html">Beranda</a></li>
      <li class="nav-item"><a class="nav-link active" aria-current="page" href="katalog.html">Katalog</a></li>
      <li class="nav-item"><a class="nav-link" href="tentang.html">Tentang</a></li>
      <li class="nav-item"><a class="nav-link" href="kontak.html">Kontak</a></li>
    </ul>
    <a class="btn btn-outline-light btn-sm ms-lg-3" href="keranjang.html">
      <i class="bi bi-cart3" aria-hidden="true"></i> Keranjang
    </a>
  </div>
</nav>
```

`File: tokosaya-bootstrap/katalog.html`

<!--
Baca kodenya dari atas ke bawah sambil ditunjuk di layar. Tekankan bahwa daftar
`navbar-nav` berdiri langsung di dalam `navbar`, tanpa panel `collapse`. Tanyakan
kenapa `active` ditemani atribut `aria-current="page"`. Jawaban yang diharapkan:
biar pembaca layar juga tahu halaman mana yang sedang dibuka.
-->

---

<!-- _class: compact -->

# Kenapa Tanpa Tombol Hamburger

```text
Layar besar (>= 992 piksel)
Tokosaya   Beranda  Katalog  Tentang  Kontak    [Keranjang]

Layar kecil (< 992 piksel), tanpa JavaScript
Tokosaya
Beranda
Katalog
Tentang
Kontak
[Keranjang]
```

- Nggak ada tombol, jadi nggak ada janji penekanan
- Menu kecil menumpuk dari atas ke bawah di bawah merek
- Menu besar kembali mendatar ke kanan

<!--
Jelaskan dua keadaan lebar layar pakai contoh konkret: proyektor di kelas dan HP di
tangan mahasiswa. Tanyakan kenapa menu yang selalu tampil bisa dipertanggungjawabkan
buat Tokosaya. Jawaban yang diharapkan: menunya cuma empat, jadi nggak ada yang
hilang dan nggak ada tombol palsu. Sebutkan bahwa pola centang tersembunyi sengaja
nggak dipakai karena lebih sulit dirawat.
-->

---

<!-- _class: compact -->

# Tombol: Kelas Dasar + Variant

```html
<div class="btn-group" role="group" aria-label="Urutan harga">
  <button type="button" class="btn btn-primary btn-sm">Harga Terendah</button>
  <button type="button" class="btn btn-outline-secondary btn-sm">Harga Tertinggi</button>
</div>
```

- Kelas dasar `btn` dipasangkan dengan variant warna
- Varian warna: `btn-primary`, `btn-secondary`, `btn-success`, `btn-danger`
- Lengkapnya: `btn-warning`, `btn-info`, `btn-light`, `btn-dark`
- Ukuran: `btn-sm` buat tombol kecil, `btn-lg` buat ajakan utama
- `btn-group` merapatkan tombol yang memang satu aksi
- `btn-primary` menandai status terpilih, pasangannya tampil tenang

<!--
Tekankan pola kelas dasar ditambah variant: begitu paham `btn`, komponen lain datang
gratis. Tanyakan bedanya dua tombol di kelompok itu. Jawaban yang diharapkan: yang
pertama menandai pilihan terpilih, yang kedua tampil lebih tenang sebagai alternatif.
Sebutkan bahwa `role="group"` dan `aria-label` menjelaskan tujuan kelompoknya.
-->

---

<!-- _class: compact -->

# Empat Badge Semantik

| Badge baku | Kelas Bootstrap | Makna semantik |
|---|---|---|
| Tersedia | `text-bg-success` | Stok penuh, bisa dipesan |
| Best Seller | `text-bg-warning` | Penanda promosi berwarna sorot |
| Stok Terbatas | `text-bg-danger` | Kritis, segera |
| Baru | `text-bg-primary` | Identitas merek buat hal baru |

```html
<span class="badge text-bg-success">Tersedia</span>
<span class="badge text-bg-warning">Best Seller</span>
<span class="badge text-bg-danger">Stok Terbatas</span>
<span class="badge text-bg-primary">Baru</span>
```

- Kelas `text-bg-*` mengatur latar dan warna teks sekaligus

<!--
Bahas tabel makna semantik baris demi baris, jangan cuma warnanya. Tanyakan kenapa
warna mengikuti makna, bukan selera. Jawaban yang diharapkan: pengguna cukup belajar
bahasa warna sekali lalu memakainya di semua halaman. Ingatkan bahwa empat variant
inilah yang dipakai konsisten sepanjang buku.
-->

---

<!-- _class: compact -->

# Alert Statis Tanpa Tombol Tutup

```html
<div class="alert alert-warning" role="alert">
  Stok terbatas pada Speaker Bluetooth BT-5 dan Webcam HD WC-720.
</div>
```

- Kelas dasar `alert` dipasangkan variant: `alert-primary`, `alert-success`, `alert-warning`
- Atribut `role="alert"` membantu pembaca layar mengumumkan pesan
- Tanpa tombol tutup: pesan berdiri permanen kayak papan pengumuman
- Komponen ini nggak punya perilaku tersembunyi

<!--
Katakan bahwa alert di buku ini selalu ditulis tanpa tombol tutup, sesuai kesepakatan
bab, karena perilaku menutupnya butuh paket JavaScript. Tanyakan kenapa warnanya
kuning, bukan merah. Jawaban yang diharapkan: isinya soal stok terbatas, jadi memakai
variant peringatan. Ingatkan bahwa pemilihan warna selalu ikut tabel makna.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Card dan Navigasi Baca

## Kartu produk dan penanda posisi halaman

<!--
Sebutkan bahwa kartu adalah komponen yang paling layak dibawa dari bab ini. Bagian
ini juga memuat tiga komponen navigasi-baca yang kecil tapi selalu hadir di sistem
informasi. Ingatkan bahwa kartu nanti dipakai lagi di Bab 12 sebagai design system.
-->

---

# Anatomi Kelas Card

| Kelas | Peran |
|---|---|
| `card` | Bingkai kartu |
| `card-img-top` | Gambar menempel tepi atas dan menikung ikut lingkar kartu |
| `card-body` | Ruang isi kartu |
| `card-title` | Judul kartu |
| `card-text` | Paragraf isi kartu |

- `card-subtitle` buat keterangan kecil di bawah judul
- `card h-100` bikin kartu mengisi penuh tinggi kolom grid

<!--
Tekankan bahwa satu kelas `card` melahirkan kartu produk, kartu buku, sampai kartu
ruang ujian. Tanyakan kelas mana yang bikin gambar menempel tepi atas kartu. Jawaban
yang diharapkan: `card-img-top`. Sebutkan bahwa tanpa kelas itu gambar tetap tampil,
tapi nggak menyatu dengan bingkai kartunya.
-->

---

<!-- _class: compact -->

# Papan Nama Kartu Produk

```text
+------------------------------------------+
| [gambar produk]            .card-img-top |
|                                          |
| .card-body                               |
|   [Best Seller]                   badge  |
|   Keyboard Mekanis KX-210  .card-title   |
|   Aksesori Input       keterangan kecil  |
|   Keyboard mekanis 87 tombol ...card-text|
|   Rp650.000                       harga  |
|   [ Lihat Detail ]              tombol   |
+------------------------------------------+
```

- Semua kartu lahir dari kelas dasar yang sama

<!--
Gunakan diagram ini sebagai papan nama kartu: minta mahasiswa menunjuk bagian yang
disebut. Tanyakan bagian mana yang paling sering dilupakan pas menulis kartu. Jawaban
yang diharapkan: badge dan keterangan kecil. Sebutkan bahwa urutan bagian ini bakal
disalin persis di praktikum, jadi perhatikan posisinya.
-->

---

<!-- _class: compact -->

# Kartu Produk KX-210

```html
<div class="card h-100 produk-card">
  <img src="img/produk-keyboard-kx210.svg" class="card-img-top" alt="Keyboard Mekanis KX-210">
  <div class="card-body d-flex flex-column">
    <p class="mb-2"><span class="badge text-bg-warning">Best Seller</span></p>
    <h3 class="card-title h6 font-heading">Keyboard Mekanis KX-210</h3>
    <p class="card-text small text-body-secondary mb-2">Aksesori Input</p>
    <p class="card-text small mb-3">Keyboard mekanis 87 tombol dengan switch biru untuk kerja lama yang nyaman.</p>
    <p class="fw-semibold text-primary mb-3 mt-auto">Rp650.000</p>
    <a href="#" class="btn btn-primary btn-sm">Lihat Detail</a>
  </div>
</div>
```

`File: tokosaya-bootstrap/katalog.html`

<!--
Buka file aslinya di editor, jangan cuma menampilkan slide ini. Tanyakan kenapa judul
memakai elemen `h3` tapi kelas ukuran `h6`. Jawaban yang diharapkan: outline halaman
tetap benar sementara ukuran visualnya kecil. Sebutkan bahwa kelas `produk-card`
menunjuk gaya kustom yang ditulis terpisah di `css/style.css`.
-->

---

# Kenapa Harga Sejajar di Dasar

- `h-100` menyamakan tinggi kartu dengan kolom gridnya
- `d-flex flex-column` menyusun isi kartu menurun
- `mt-auto` mendorong harga dan tombol menempel dasar kartu
- Deskripsi produk boleh beda panjang, harga tetap sejajar
- Itulah pakem harga menempel dasar kartu di Tokosaya
- Judul `h3` memakai kelas ukuran `h6` biar outline tetap benar

<!--
Ketiga utilitas ini sering dilupakan, padahal inilah pakem katalog Tokosaya.
Tanyakan apa yang terjadi kalau deskripsi delapan produk panjangnya beda-beda.
Jawaban yang diharapkan: kartu tetap rata atas dan bawah karena harga menempel dasar.
Minta mahasiswa menulis ketiga kelas itu sekali, lalu menyalinnya buat tujuh kartu
sisa, bukan menulis ulang dari nol.
-->

---

# Kartu Hidup di Dalam Grid

```html
<div class="row g-4">
  <article class="col-12 col-sm-6 col-lg-3">
    <div class="card h-100 produk-card">...</div>
  </article>
</div>
```

- Kartu nggak berdiri sendiri: ia duduk di dalam sel grid
- Delapan kartu berputar jadi 1-2-4 kolom pas layar melebar
- Satu baris `row g-4` mengendalikan jarak antarkartu
- `card-group` menempelkan kartu jadi satu bingkai, cocok buat galeri
- Pisahkan wadah konten (kartu) dari wadah layout (grid)

<!--
Tekankan pemisahan wadah konten dan wadah layout, karena itu yang bikin komponen
gampang disusun ulang. Tanyakan apa untungnya kartu duduk di dalam sel grid, bukan
di `card-group`. Jawaban yang diharapkan: jarak antarkartu terkendali `g-4` dan
susunannya bisa diubah kapan pun. Sebutkan bahwa pola 1-2-4 kolom berasal dari Bab 9.
-->

---

<!-- _class: compact -->

# Breadcrumb: Jalur Posisi Halaman

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="index.html">Beranda</a></li>
    <li class="breadcrumb-item active" aria-current="page">Katalog</li>
  </ol>
</nav>
```

- Breadcrumb adalah jalur posisi halaman: Beranda → Katalog
- Ditulis sebagai elemen semantik `nav` yang berisi `ol`
- Item terakhir memakai `active` + `aria-current="page"` dan bukan link
- Di halaman rinci, jalurnya bisa lebih panjang, misalnya Klasifikasi 000

<!--
Tanyakan di halaman mana breadcrumb paling dibutuhkan. Jawaban yang diharapkan:
halaman rinci, kayak Beranda → Katalog → Klasifikasi 000 → Data Komputer. Ingatkan
bahwa item terakhir nggak perlu jadi link karena itu posisi pengguna sekarang.
Sebutkan bahwa label `aria-label` memberi nama wilayah itu buat pembaca layar.
-->

---

<!-- _class: compact -->

# Pagination Visual

```html
<nav aria-label="Halaman katalog">
  <ul class="pagination justify-content-center mb-0">
    <li class="page-item disabled"><span class="page-link">...</span></li>
    <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
    <li class="page-item"><a class="page-link" href="katalog.html">2</a></li>
    <li class="page-item"><a class="page-link" href="katalog.html">3</a></li>
  </ul>
</nav>
```

- Dua kelas status: `active` buat halaman, `disabled` buat panah
- Bootstrap menyarankan `span` alih-alih `a` buat item berstatus
- Paginasi ini visual: pas diklik pengguna tetap di halaman sama
- Deret dikunci tengah dengan `justify-content-center`

<!--
Jujur saja ke kelas: paginasi ini visual dan isinya belum berganti pas diklik.
Tanyakan kenapa pola ini tetap berguna. Jawaban yang diharapkan: prototip desain
butuh bentuk lengkap sebelum data nyata disambungkan. Sebutkan bahwa tanda `...`
di slide ini mewakili ikon panah `bi bi-chevron-left` yang dibahas nanti.
-->

---

<!-- _class: compact -->

# List Group

```html
<ul class="list-group">
  <li class="list-group-item">
    <p class="mb-0 fw-semibold">Keyboard Mekanis KX-210
      <span class="badge text-bg-warning ms-1">Best Seller</span></p>
  </li>
  <li class="list-group-item">Mouse Wireless MW-88</li>
  <li class="list-group-item active" aria-current="true">Monitor IPS 24" MR-241</li>
</ul>
```

- Daftar berbingkai siap pakai: daftar buku, log, mata kuliah
- `active` menyorot satu item yang seolah sedang dipilih
- Badge di kanan item pakai `d-flex justify-content-between align-items-center`

<!--
Minta mahasiswa menyebutkan daftar di sistem informasi yang cocok memakai komponen
ini. Jawaban yang diharapkan: daftar buku, daftar log kejadian, daftar mata kuliah.
Tunjukkan pola isi di kiri dan status di kanan, karena pola itu yang dipakai lagi di
studi kasus perpustakaan.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Komponen Interaktif dan Ikon

## Struktur diajarkan, interaksi butuh JavaScript

<!--
Bagian terakhir materi: tiga komponen yang aslinya berinteraksi, plus ikon resmi
Bootstrap. Katakan terus terang bahwa perilaku buka-tutupnya nggak dipelajari di mata
kuliah ini, tapi strukturnya tetap penting buat membaca kode dunia kerja.
-->

---

<!-- _class: compact -->

# Accordion: Struktur dan Status Statis

```html
<div class="accordion" id="faqDemo">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button type="button" class="accordion-button">Apa itu Tokosaya?</button>
    </h2>
    <div class="accordion-collapse collapse show">
      <div class="accordion-body">Toko online UMKM aksesori dan elektronik komputer sejak 2019.</div>
    </div>
  </div>
  <div class="accordion-item">...</div>
</div>
```

- Struktur: `accordion` → `accordion-item` → `accordion-header` → `accordion-body`
- Tombol tertutup memakai `collapsed`, panel terbuka memakai `show`
- Keduanya berhenti di status itu, kayak gambar di papan cerita

<!--
Ajari kelas membaca status, bukan mengkliknya. Tanyakan kenapa tombol pertama tanpa
kelas `collapsed` dan panelnya memakai `show`. Jawaban yang diharapkan: keduanya
menandai keadaan terbuka. Sebutkan bahwa menyalin pola ini di sistem lain cukup
dengan mengganti isi teksnya.
-->

---

<!-- _class: compact -->

# Modal: Kotak Dialog Statis

```html
<!-- khusus demonstrasi: status statis tanpa JavaScript -->
<div class="modal show" tabindex="-1" style="display: block; position: static;">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Konfirmasi Pesanan</h3>
        <button type="button" class="btn-close" aria-label="Tutup"></button>
      </div>
      <div class="modal-body">
        <p>Hapus produk Flash Drive 64GB FD-64 dari keranjang?</p>
      </div>
      <div class="modal-footer">...</div>
    </div>
  </div>
</div>
```

- Struktur: `modal` → `modal-dialog` → `modal-content` yang membelah jadi tiga
- Tombol silang nggak menutup apa pun tanpa paket JavaScript
- Gaya inline ini cuma buat demonstrasi, bukan pola halaman

<!--
Tunjukkan bahwa gaya inline pada wadah itu ditandai komentar khusus demonstrasi.
Tanyakan kenapa tombol silang nggak menutup apa pun. Jawaban yang diharapkan:
perilaku menutup dikendalikan paket JavaScript resmi. Sebutkan bahwa markup modal
tetap berguna buat membaca prototip statis di alat desain.
-->

---

<!-- _class: compact -->

# Carousel: Berhenti di Item Aktif

```html
<div class="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/produk-keyboard-kx210.svg" class="d-block w-100" alt="Banner keyboard mekanis KX-210">
    </div>
    <div class="carousel-item">
      <img src="img/produk-monitor-mr241.svg" class="d-block w-100" alt="Banner monitor IPS MR-241">
    </div>
  </div>
</div>
```

- `active` menentukan gambar yang tampak, sisanya tetap tersimpan
- Tombol panah dan indikator titik sengaja nggak disertakan
- Komponen interaktif inilah alasan tim memuat paket JavaScript

<!--
Tanyakan kenapa cuma gambar pertama yang tampak. Jawaban yang diharapkan: kelas
`active` menandai item yang sedang tampil. Sebutkan bahwa tanpa paket JavaScript
carousel berhenti di gambar itu dan nggak bergeser sendiri. Tutup dengan wawasan:
ketiga komponen interaktif ini alasan utama tim memuat paket JavaScript resmi.
-->

---

<!-- _class: compact -->

# Bootstrap Icons dan Tiga Aturan Praktis

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
```

- Ikon dipasang dengan pasangan kelas `bi bi-nama-ikon`
- Ukuran mengikuti teks, warna mewarisi kelas `text-*` wadahnya
- Ikon dekoratif di sebelah kata diberi `aria-hidden="true"`
- Ikon berdiri sendiri tanpa kata pendamping butuh `aria-label`
- Ikon memang berulang: `bi bi-cart3`, `bi bi-funnel`, `bi bi-chevron-left`

<!--
Tunjukkan ikon keranjang langsung di layar, lalu matikan sementara link CDN-nya.
Tanyakan apa yang muncul. Jawaban yang diharapkan: nama kelas ikon atau kotak kosong,
tanda file ikon belum termuat. Ingatkan urutan link: Icons sebelum `css/style.css`.
-->

---

<!-- _class: compact -->

# Praktikum: katalog.html Tokosaya

- Tujuan: halaman katalog Bootstrap 5.3.3 yang responsif tanpa JavaScript
- Siapkan folder `tokosaya-bootstrap/` plus `img/` dari proyek lama
- Head memuat empat link baku sesuai urutan resmi
- Susun navbar tanpa JavaScript dengan empat link baku
- Tambahkan breadcrumb, judul, dan tagline di header katalog
- Bar penyaring: ikon `bi bi-funnel` dan tiga tombol urutan

<!--
Jalankan langkah ini sambil didemokan, jangan cuma dibacakan. Berhenti di langkah head,
karena urutan empat link paling sering salah di praktikum. Ingatkan membuka pratinjau
lewat Live Server atau langsung di Chrome. Sebutkan bahwa dua slide berikutnya
melanjutkan langkah grid sampai pengujian.
-->

---

<!-- _class: compact -->

# Praktikum: Grid Kartu dan Delapan Produk

- Susun `<div class="row g-4">` dan sel `col-12 col-sm-6 col-lg-3`
- Tulis kartu KX-210 penuh, lalu salin buat tujuh produk sisa
- Setiap kartu memuat gambar, badge, judul, kategori, deskripsi, harga, tombol
- Tutup grid dengan pagination visual di dasar konten

| Produk | Badge | Kelas |
|---|---|---|
| Mouse Wireless MW-88 | Tersedia | `text-bg-success` |
| Headphone Studio HS-15 | Tersedia | `text-bg-success` |
| Monitor IPS 24" MR-241 | Best Seller | `text-bg-warning` |
| Flash Drive 64GB FD-64 | Tersedia | `text-bg-success` |
| Charger Cepat 30W CP-30 | Tersedia | `text-bg-success` |

- Speaker BT-5 dapat `text-bg-danger`, Webcam WC-720 dapat `text-bg-primary`

<!--
Tekankan bahwa kartu kedua sampai kedelapan itu hasil salin pola kartu pertama, bukan
tulis ulang dari nol. Minta mahasiswa memeriksa delapan gambar dan delapan badge
sebelum lanjut ke pengujian. Tanyakan berapa variant badge berbeda yang dipakai.
Jawaban yang diharapkan: empat.
-->

---

<!-- _class: compact -->

# Praktikum: style.css Kustom

```css
/* kustom — kartu produk Tokosaya */
.produk-card {
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  overflow: hidden;
}
/* kustom — kartu mengangkat sedikit pas diarahkan */
.produk-card:hover {
  transform: translateY(-4px);
}
```

- Urutan link penting: Bootstrap, Icons, Google Fonts, lalu `css/style.css`
- Tiga aturan kustom pelengkap: token, `.font-heading`, `.produk-card`
- Semua aturan kustom ditandai komentar `kustom`

<!--
Kaitkan urutan link dengan kaskade yang udah dipelajari di Bab 3: yang ditulis
belakangan menang pas kekuatannya setara. Tanyakan kenapa `css/style.css` ditaruh
paling akhir. Jawaban yang diharapkan: biar aturan kustom punya kesempatan menimpa
gaya umum Bootstrap tanpa perlu important. Sebutkan bahwa `overflow: hidden` yang
memotong gambar mengikuti radius kartu.
-->

---

# Uji Tiga Lebar Layar

| Lebar layar | Yang harus tampak |
|---|---|
| 360 piksel (HP) | Satu kolom kartu memenuhi lebar; menu menumpuk |
| 768 piksel (tablet) | Dua kolom kartu; menu masih menumpuk |
| 1200 piksel (desktop) | Empat kolom kartu; menu mendatar ke kanan |

- Jumlah kartu dalam grid tepat delapan
- Harga berformat `Rp650.000` tanpa spasi
- Arahkan tetikus ke kartu: kartu terangkat 4 piksel
- Ikon ikut tampil dan seluruh link tetap bisa ditekan

<!--
Uji ketiga lebar layar langsung di panel perangkat DevTools, bukan cuma dibacakan.
Tanyakan apa yang berubah dari 360 ke 1200 piksel. Jawaban yang diharapkan: kartu
berubah dari satu kolom jadi empat kolom, dan menu berubah jadi mendatar. Sebutkan
bahwa efek mengangkat pada kartu itu dari CSS kustom, bukan JavaScript.
-->

---

<!-- _class: compact -->

# Troubleshooting yang Sering Muncul

| Masalah | Penyebab | Solusi |
|---|---|---|
| Ikon tampil sebagai teks | Link CDN ikon belum terhubung | Periksa urutan link di `head` |
| Gaya kustom nggak berlaku | `style.css` ditulis sebelum Bootstrap | Pindahkan link ke urutan terakhir |
| Harga kartu nggak sejajar | `h-100`, `d-flex flex-column`, `mt-auto` kurang | Lengkapi ketiga kelas itu |
| Menu mendatar padat di HP | `navbar-expand-lg` nggak terpasang | Pasang kelas itu di elemen `nav` |
| Gambar kartu melar | Aturan `.card-img-top` belum ada | Tetapkan tinggi 160 piksel |

- Pencegahan: salin pola kartu pertama, jangan menulis ulang dari nol

<!--
Bahas dua masalah teratas, karena itulah yang paling sering muncul di kelas.
Tanyakan langkah pertama pas ikon tampil sebagai nama teks. Jawaban yang diharapkan:
periksa link CDN di `head` dan pastikan jaringan tersambung. Tutup dengan pesan
pencegahan: satu pola kartu yang disalin delapan kali jauh lebih aman.
-->

---

# Latihan

- Jelaskan apa yang terjadi pada navbar di layar 480 piksel
- Tuliskan markup badge buat kedelapan produk baku
- Sebutkan tiga utilitas yang bikin harga kartu sejajar dasar
- Tuliskan pagination dengan halaman 3 aktif dan panah kanan `disabled`
- Bandingkan kartu Tokosaya di `tokosaya-css/` dan `tokosaya-bootstrap/`

> Nggak ada klaim tanpa dasar; sebutkan kelas nyata dari kedua proyek.

<!--
Kerjakan butir ketiga bareng-bareng di papan, sisanya buat latihan mandiri.
Perhatikan butir terakhir: tujuannya bukan mencari jawaban benar, tapi menyadari
kapan CSS kustom lebih pas. Tanyakan kelas Bootstrap mana di proyek baru yang
menggantikan gaya kustom di proyek lama.
-->

---

# Cek Daftar katalog.html

- Navbar gelap: merek di kiri, empat link mendatar, keranjang berikon
- Tanpa satu pun tombol `navbar-toggler` di halaman
- Delapan kartu dalam grid `row g-4` dengan tinggi seragam
- Empat variant badge dipakai sesuai makna semantik
- Pagination visual: "1" aktif dan panah kiri pudar
- Ikon dekoratif memakai `aria-hidden="true"`

<!--
Minta mahasiswa saling memeriksa halaman pakai daftar ini dan menunjukkan buktinya
langsung di kode. Periksa bareng di DevTools pada tiga lebar layar. Ingatkan bahwa
yang dinilai bukan halaman yang cantik, tapi pola kelas yang konsisten dan markup
yang rapi.
-->

---

# Rangkuman

- Komponen antarmuka: potongan siap pakai yang menekan biaya desain
- Navbar Tokosaya memakai varian tanpa JavaScript, menu selalu tampil
- Tombol, badge, dan alert berbagi pola kelas dasar + variant
- Card jadi inti katalog: `h-100` + `d-flex flex-column` + `mt-auto`
- Accordion, modal, dan carousel diajarkan sebagai struktur dan status
- Bootstrap Icons dipasang lewat CSS CDN dan kelas `bi bi-...`

<!--
Tutup dengan pesan utama: komponen itu kerangka yang diisikan konteks, jadi pola yang
sama memecahkan kebutuhan sistem yang beda. Sebutkan bahwa kesepakatan warna, ikon,
dan status di bab ini jadi calon design token di Bab 12. Ingatkan bahwa Bab 11 memakai
tombol yang baru dikuasai buat merancang form keranjang dan kontak.
-->

---

<!-- _class: lead -->
<!-- _footer: '' -->

# Tugas dan Refleksi

Buat halaman `buku.html` berisi tiga kartu buku dengan status Tersedia, Dipinjam, dan Terlambat memakai `card`, badge semantik, dan ikon Bootstrap Icons.

Kumpulkan file HTML plus tangkapan layar pada 360, 768, dan 1200 piksel.

**Pertanyaan refleksi:** dalam keadaan apa kamu menolak komponen siap pakai dan menulis CSS sendiri?

<!--
Tugas individu: kumpulkan file HTML, tiga tangkapan layar, dan satu paragraf
penjelasan pilihan warna badge. Nilai ketepatan badge semantik, kartu yang sejajar,
dan `aria-hidden` pada ikon dekoratif. Sebutkan bahwa tugas ini jembatan menuju
Bab 11 soal form.
-->
