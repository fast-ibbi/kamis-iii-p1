# BAB 10 — Komponen Visual Bootstrap

## Deskripsi Singkat

Bab ini melanjutkan Bab 9 dari *grid* dan *utilitas* ke bagian yang lebih langsung terlihat oleh pengguna: **komponen visual Bootstrap** siap pakai. Kamu akan membangun halaman katalog `katalog.html` Tokosaya pakai *navbar*, kartu produk (*card*), *badge*, *pagination*, dan *Bootstrap Icons*. Bab berikutnya (Bab 11) memakai pola komponen yang sama buat merancang *form* yang enak dari sisi pengalaman pengguna.

## Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda diharapkan mampu:

1. **Menjelaskan** peran komponen antarmuka siap pakai dalam menekan biaya desain dan menjaga konsistensi tampilan.
2. **Mengidentifikasi** struktur *markup* dan kelas pembeda (*variant*) pada komponen *navbar*, *button*, *badge*, *alert*, *card*, *breadcrumb*, *pagination*, *list group*, serta *accordion*, *modal*, dan *carousel*.
3. **Mengimplementasikan** halaman katalog Tokosaya yang responsif dengan memadukan komponen Bootstrap dan CSS kustom mengikuti design token proyek.
4. **Menganalisis** batas perilaku komponen yang interaktifnya dibuka dengan JavaScript, lalu memilih alternatif presentasi statis yang jujur dan tetap fungsional.
5. **Merancang** komponen daftar buku dan kartu status untuk sistem informasi perpustakaan dengan pewarnaan semantik (*semantic color*).
6. **Mengevaluasi** pemakaian ikon dan *badge* dari sisi keterbacaan kontras serta aksesibilitas dasar.

## Capaian Pembelajaran

Bab ini berkontribusi pada sub-capaian berikut:

- **CPMK 4** — Mahasiswa mengimplementasikan komponen antarmuka sebuah *CSS framework* pada halaman web statis secara konsisten dengan design token.
- **CPMK 5** — Mahasiswa menganalisis dan mengevaluasi keputusan pemakaian komponen, termasuk batasannya tanpa JavaScript, serta kematangan responsif dan aksesibilitasnya.

## Kata Kunci

*komponen* (potongan antarmuka siap pakai dengan markup dan gaya baku), *navbar* (bilah navigasi), *card* (kartu berbingkai buat konten produk), *badge* (label kecil berwarna semantik), *breadcrumb* (jalur posisi halaman), *pagination* (navigasi halaman), *list group* (daftar berbingkai siap pakai), *status statis* (kelas status yang ditulis manual tanpa interaktif), *variant* (varian pewarnaan kayak `primary` dan `warning`), *Bootstrap Icons* (set ikon resmi berbentuk font).

## Apersepsi

Pas Bab 9, kamu merakit ulang *landing page* Tokosaya dengan sistem grid dan utilitas Bootstrap 5.3.3. Hasilnya terasa cepat, tapi ada bagian yang belum kamu sentuh: elemen-elemen yang pengguna benar-benar "menyentuh" tiap kunjungan, yaitu menu navigasi di atas halaman, kartu produk di tengah halaman, dan tanda-tanda kecil kayak label harga atau status stok. Bagian itulah yang disebut *komponen* (component) dalam istilah Bootstrap.

Bayangkan situasi yang sering muncul di proyek sistem informasi. Tim pengembang sistem informasi akademik sebuah kampus baru saja menerima rancangan antarmuka dari desainer. Kepala tim berkata: "Katalog e-layar perpustakaan selesai minggu ini; menu, kartu buku, dan status stok wajib seragam di semua halaman." Kalau setiap anggota tim menulis CSS kartu dari nol dengan gaya pribadi, hasilnya hampir pasti melenceng: satu menulis sudut tumpul, satu lagi menulis sudut tajam; satu pakai bayangan kuat, satu lagi nggak pakai bayangan sama sekali. Proses review pun jadi lama karena setiap file harus dicek satu per satu. Di sinilah komponen siap pakai jadi jawaban: sekali mempelajari struktur kelas `card`, seluruh tim menghasilkan kartu yang identik di website mana pun proyek dibangun.

Tokosaya adalah contoh latihan yang pas. Halaman `katalog.html` kamu di proyek `tokosaya-css/` (Bab 7 sampai Bab 8) dibangun dengan Flexbox dan CSS Grid murni. Sekarang tugasnya diulang di proyek baru `tokosaya-bootstrap/` dengan delapan produk baku yang sama, tapi pakai komponen resmi Bootstrap: *navbar* buat menu Beranda–Kontak, kartu buat produk, *badge* buat label stok, *pagination* biar kelihatan "berhalaman", serta ikon resmi dari Bootstrap Icons. Setelah mencoba dua cara membuat katalog yang sama, kamu punya pembanding yang nyata: kapan CSS kustom lebih pas, dan kapan komponen siap pakai lebih hemat. Pertanyaan pemandu bab ini: *gimana komponen siap pakai mempercepat translasi desain jadi halaman siap ditinjau?*

## Materi Pembelajaran

### 10.1 Komponen UI dan Konsistensinya

Sebuah **komponen antarmuka** (*component*) adalah potongan antarmuka yang udah dikemas lengkap: struktur *markup* standar, kelas-kelas gaya, dan aturan tampilan di berbagai ukuran layar. Bootstrap mengemas puluhan komponen kayak itu — dari *navbar* sampai *accordion*. Kamu nggak perlu menulis ulang gaya dasarnya; cukup susun *markup* sesuai resep dokumentasi, lalu pilih *variant* warna yang kamu mau. Ibarat merakit furnitur siap pasang: papan udah dipotong, lubang udah dibor, kamu tinggal menyusun dan memilih warna.

Kenapa komponen siap pakai menekan biaya desain? Ada tiga alasan utama. Pertama, **hemat waktu**: seluruh aturan *box model*, *radius*, dan ketersediaannya di ukuran layar tertentu udah ditulis oleh pihak Bootstrap; kamu nggak perlu "menemukan ulang roda". Kedua, **konsistensi antarhalaman**: karena semua kartu memakai kelas yang sama, kartu di halaman A otomatis mirip kartu di halaman B tanpa pengawasan tambahan. Ketiga, **memudahkan anggota tim baru masuk**: orang yang pernah membaca dokumentasi Bootstrap bisa langsung mengikuti dan melanjutkan kode rekan lain karena pola kelasnya sama. Konteks sistem informasi menegaskan alasan ketiga ini: proyek sistem informasi hampir selalu dikerjakan tim, dan bahasa bersama berupa nama kelas baku mempercepat peninjauan kode.

Tapi komponen siap pakai punya batas yang harus kamu kenali sejak sekarang. Komponen Bootstrap sebagian didesain buat bekerja lengkap bersama paket JavaScript resminya. Di mata kuliah ini JavaScript nggak diajarkan, jadi cuma lapisan **visual** komponen yang kita pakai: struktur, kelas *markup*, *variant* warna, dan kelas **status statis** — misalnya menulis kelas `show` secara manual biar sebuah panel tampil terbuka. Buat komponen yang aslinya berinteraksi (menu yang tersembunyi lalu terbuka pas diklik, kotak dialog yang muncul dan hilang, deret gambar yang berputar), kita mempelajari strukturnya, lalu memperlihatkan versi matinya kayak yang tampil di papan cerita (*storyboard*) desain. Pendekatan ini bukan kelemahan, justru lebih jujur: kamu jadi paham apa yang bisa dikerjakan HTML dan CSS saja, dan bagian mana yang di dunia kerja biasanya ditangani JavaScript.

Kerangka kerja bab ini sederhana dan berulang pada setiap komponen:

    Pilih komponen  ->  Baca resep markup  ->  Pilih variant/status  ->  Padukan dengan utilitas
     (navbar, card)     (navbar-brand, ...)    (active, show, ...)      (ms-auto, g-4, ...)

Empat langkah ini akan kamu jalankan sebanyak delapan kali di Praktikum, jadi di akhir bab polanya terasa makin alami.

### 10.2 Navbar

Sebuah **navbar** adalah bilah navigasi yang menampung merek (nama website), link menu utama, dan — kalau perlu — satu-dua elemen pendukung kayak ikon keranjang. Di Tokosaya, navigasi bakunya empat link (Beranda, Katalog, Tentang, Kontak) ditambah ikon keranjang di sisi kanan. Di Bootstrap, wadah utamanya adalah `navbar`, lalu dipadukan dengan kelas warna kayak `navbar-dark bg-dark` dan kelas responsif `navbar-expand-lg` yang menentukan mulai ukuran layar mana menu ditampilkan mendatar.

Anatomi kelas *markup* navbar yang perlu kamu kenali kayak ini:

| Kelas | Peran |
|---|---|
| `navbar` | Wadah komponen; memakai Flexbox di dalamnya |
| `navbar-brand` | Nama merek di sisi kiri |
| `navbar-nav`, `nav-item`, `nav-link` | Daftar menu dan linknya |
| `navbar-expand-lg` | Menu mendatar sejak *breakpoint* `lg` (tepi 992 piksel) |
| `navbar-dark bg-dark` | Latar gelap dengan teks terang |
| `navbar-toggler` | Tombol hamburger pada pola resmi (butuh JavaScript, lihat uraian) |
| `navbar-toggler-icon` | Ikon garis tiga pada tombol hamburger |
| `collapse navbar-collapse` | Panel yang dalam pola resmi tersembunyi-terbuka |
| `ms-auto` | Utilitas yang mendorong kelompok menu ke kanan |

Berikut pola *navbar* yang dipakai di proyek Tokosaya pada bab ini. Perhatikan bahwa panel `collapse` nggak diberi tombol pembuka karena tombol itu butuh paket JavaScript Bootstrap:

File: tokosaya-bootstrap/katalog.html

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

Penjelasan: Kelas `navbar` menyusun isi dengan Flexbox, sedangkan `container` menjaga lebar isi tetap selaras dengan bagian halaman lain. Link merek memakai `navbar-brand`, sedangkan daftar menu memakai trinitas kelas `navbar-nav`–`nav-item`–`nav-link` yang menata teks dan area sentuh dengan rapat. `active` pada link "Katalog" menandai halaman sedang terbuka, dikuatkan atribut `aria-current="page"` bagi pembaca layar. Manfaat `navbar-expand-lg` ada di dua kondisi: di layar besar (992 piksel ke atas) daftar menu berjajar mendatar ke kanan berkat `ms-auto`; di layar kecil menu kembali menumpuk vertikal. Bagian inilah yang tetap bekerja penuh tanpa JavaScript.

Sekarang masuk ke bagian yang paling penting. Dokumentasi resmi Bootstrap menampilkan pola *navbar* yang lebih panjang: ada elemen `<button class="navbar-toggler">` berisi `navbar-toggler-icon`, ada panel `<div class="collapse navbar-collapse">`, dan di tombol serta panel itu tertulis atribut `data-bs-toggle="collapse"` dan `data-bs-target="..."` (di dokumentasi terbaru, periksa lagi atribut yang dipakai ⚠ *version-sensitive*: periksa dokumentasi resmi terbaru di getbootstrap.com). Atribut-atribut itu adalah penanda yang dibaca oleh paket JavaScript resmi Bootstrap. Tanpa paket itu — dan di mata kuliah ini kita memang nggak memuatnya karena JavaScript di luar cakupan — penekanan tombol hamburger nggak berefek sama sekali: panel nggak akan terbuka. Batas ini perlu disebut dengan jelas: **struktur dan kelas *markup* pola resmi tetap diajarkan biar kamu bisa membaca kode dunia kerja, tapi perilaku buka-tutupnya nggak kita pelajari karena menuntut JavaScript.**

Solusi yang dipakai buku ini, dan yang kamu buat di Praktikum, murni memakai CSS tanpa JavaScript: **menu dibuat selalu tampil**. Tekniknya cuma dua keputusan kecil. Pertama, jangan sertakan tombol `navbar-toggler` sama sekali — nggak ada tombol, nggak ada janji penekanan. Kedua, biarkan daftar `navbar-nav` berdiri langsung di dalam `navbar` (atau bungkus dengan `<div class="collapse show navbar-collapse">` dan tambahkan kelas status `show` biar panel statis terbuka permanen). Hasilnya di layar kecil menu menumpuk dari atas ke bawah di bawah merek, dan di layar besar kembali mendatar ke kanan karena aturan `navbar-expand-lg`. Ilustrasinya:

    Layar besar (>= 992 piksel):
    +--------------------------------------------------------------+
    | Tokosaya   Beranda  Katalog  Tentang  Kontak    [Keranjang]  |
    +--------------------------------------------------------------+

    Layar kecil (< 992 piksel, tanpa JavaScript):
    +------------------------------+
    | Tokosaya                     |
    | Beranda                      |
    | Katalog                      |
    | Tentang                      |
    | Kontak                       |
    | [Keranjang]                  |
    +------------------------------+

Buat Tokosaya yang cuma punya empat link, menu yang selalu terlihat di layar kecil adalah pilihan yang bisa dipertanggungjawabkan: nggak ada menu yang hilang, nggak ada tombol palsu. Memang ada trik CSS murni lain berbasis kotak centang tersembunyi dan pemilih saudara buat membuka-tutup menu tanpa JavaScript. Tapi pola itu memakai elemen di luar tujuan semantiknya dan membuat review lebih rumit. Buat halaman sederhana, menu yang selalu tampil jauh lebih mudah dirawat. Di dunia kerja, pas tim memilih memuat paket JavaScript resmi Bootstrap, pola hamburger bukalah sesuai dokumentasi — dan kamu kini siap membaca *markup*-nya tanpa bingung.

### 10.3 Buttons, Badges, dan Alerts

Tiga komponen berikut adalah "ciri khas" Bootstrap yang paling sering kamu pakai: tombol, *badge* (label kecil), dan *alert* (pesan berwarna). Ketiganya berbagi satu mekanisme yang sama: **kelas dasar ditambah kelas *variant***. Kelas dasar menetapkan bentuk dasar, kelas *variant* menetapkan warna semantik.

Buat tombol, kelas dasarnya `btn` lalu dipasangkan dengan *variant* warna: `btn-primary` (warna utama merek), `btn-secondary` (abu-netral), `btn-success` (hijau aksi sukses), `btn-danger` (merah aksi destruktif), `btn-warning`, `btn-info`, `btn-light`, `btn-dark`, serta ketujuh pasangannya berbentuk garis tepi `btn-outline-*` buat aksi bersifat sekunder. Dua kelas ukuran melengkapi: `btn-sm` buat tombol kecil di bar alat, `btn-lg` buat ajakan utama. Pas sekelompok tombol memang satu aksi berdampingan, kelas bapak `btn-group` merapatkan mereka tanpa retakan:

File: tokosaya-bootstrap/katalog.html

```html
<!-- Kelompok tombol pengurutan: dua aksi berpasangan -->
<div class="btn-group" role="group" aria-label="Urutan harga">
  <button type="button" class="btn btn-primary btn-sm">Harga Terendah</button>
  <button type="button" class="btn btn-outline-secondary btn-sm">Harga Tertinggi</button>
</div>
```

Penjelasan: `btn-group` menempelkan kedua tombol jadi terbaca satu paket pilihan, bukan dua tindakan terpisah. Atribut `role="group"` dan `aria-label` menjelaskan tujuan kelompok buat pembaca layar. Tombol pertama memakai `btn-primary` karena status terpilih, sedangkan pasangannya `btn-outline-secondary` tampil lebih tenang — kontras dua *variant* inilah salah satu cara Bootstrap menyatakan "yang ini aktif".

Buat *badge*, polanya serupa: kelas dasar `badge` ganda kelas `text-bg-*` yang sekaligus mengatur latar dan warna teks biar kontrasnya tetap terbaca (kombinasi ini penanda versi Bootstrap 5.3; versi lama memakai pola dua kelas terpisah). Buat Tokosaya, pewarnaan semantik empat *badge* baku dipetakan kayak tabel berikut dan dipakai konsisten di seluruh buku:

| Badge baku | Kelas Bootstrap | Makna semantik |
|---|---|---|
| Tersedia | `text-bg-success` | stok penuh, bisa dipesan |
| Best Seller | `text-bg-warning` | penanda promosi berwarna sorot |
| Stok Terbatas | `text-bg-danger` | kritis, segera |
| Baru | `text-bg-primary` | identitas merek buat hal baru |

File: tokosaya-bootstrap/katalog.html

```html
<span class="badge text-bg-success">Tersedia</span>
<span class="badge text-bg-warning">Best Seller</span>
<span class="badge text-bg-danger">Stok Terbatas</span>
<span class="badge text-bg-primary">Baru</span>
```

Penjelasan: Keempat baris memakai pola kelas yang persis sama; yang berubah cuma *variant*-nya. Karena warna mengikuti makna (hijau buat tersedia, merah buat kritis), pengguna cukup belajar "bahasa warna" sekali lalu memakainya di semua halaman — sifat yang nantinya dirumuskan formal sebagai *design system* di Bab 12.

Buat *alert*, kelas dasarnya `alert` dengan *variant* `alert-primary`, `alert-success`, `alert-warning`, dan seterusnya. Atribut `role="alert"` membantu pembaca layar mengumumkan pesan. Perlu jujur di sini: dokumentasi resmi juga memperkenalkan tombol tutup pada *alert*, tapi perilaku menutupnya dikendalikan paket JavaScript Bootstrap — sekali lagi di luar cakupan mata kuliah. Jadi di buku ini *alert* selalu ditulis **tanpa tombol tutup**: pesan berdiri permanen, kayak papan pengumuman di muka perpustakaan:

File: tokosaya-bootstrap/demo-komponen.html

```html
<div class="alert alert-warning" role="alert">
  Stok terbatas pada Speaker Bluetooth BT-5 dan Webcam HD WC-720.
</div>
```

Penjelasan: Komponen *alert* cuma butuh kelas dasar dan *variant* — nggak ada perilaku tersembunyi. Pemilihan `alert-warning` tunduk pada tabel makna semantik: isi pesan menyinggung stok terbatas, maka warnanya kuning. Ketiganya — tombol, *badge*, dan *alert* — berbagi pola "kelas dasar + *variant*", jadi begitu kamu hafal satu, dua sisanya datang gratis.

### 10.4 Cards

Kalau cuma satu komponen yang paling layak kamu bawa dari bab ini, pilih **card** — kartu berbingkai yang jadi wadah paling serbaguna di web desain modern. Kartu produk e-commerce, kartu buku di katalog perpustakaan, kartu ruang ujian di sistem akademik: semuanya lahir dari kelas `card` yang sama. Anatomi dasarnya: `card` sebagai bingkai, `card-img-top` buat gambar yang menempel pada tepi atas (menikung mengikuti lingkar kartu), `card-body` buat ruang isi, `card-title` buat judul, `card-text` buat paragraf, serta `card-subtitle` buat keterangan kecil di bawah judul.

Struktur kartu Tokosaya bisa dibaca kayak papan nama toko berikut:

    +--------------------------------------+
    | [gambar produk]       .card-img-top  |
    |                                      |
    | .card-body                           |
    |   [Best Seller]              badge   |
    |   Keyboard Mekanis KX-210 .card-title|
    |   Aksesori Input      keterangan kecil|
    |   Keyboard mekanis 87 tombol ...card-text|
    |   Rp650.000                  harga    |
    |   [ Lihat Detail ]      tombol btn   |
    +--------------------------------------+

Berikut kartu produk pertama dalam bentuk lengkapnya:

File: tokosaya-bootstrap/katalog.html

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

Penjelasan: Kelas `card h-100` membuat kartu mengisi penuh tinggi kolom gridnya, jadi deretan kartu tampak rata di bagian atas dan bawah. Tubuh kartu memakai `d-flex flex-column` — utilitas Flexbox Bootstrap — buat konten tersusun menurun, lalu `mt-auto` pada baris harga mendorong harga dan tombol turun menempel dasar kartu. Akibatnya, walau deskripsi produk beragam panjangnya, harga dan tombol semua kartu sejajar rapi; inilah alasan pola "harga menempel dasar kartu" jadi pakem katalog Tokosaya. Judul ditulis dalam elemen `h3` tapi memakai kelas ukuran `h6`: semantik outline halaman tetap benar, sementara ukuran visualnya kecil. Badge ditempel di baris pertama tubuh kartu dengan `align-self-start` biar nggak melebar sendiri. Nama kelas `produk-card` (pola `blok-elemen` proyek) menampung gaya kustom tokoh Tokosaya yang ditulis terpisah di `css/style.css`.

Dua catatan lanjutan soal kartu. Pertama, **kartu nggak berdiri sendiri**: ia berdiri di dalam sel grid `col-*` Bab 9. Satu baris `row g-4` memuat delapan kolom produk, dan kelas `col-12 col-sm-6 col-lg-3` memutar susunannya jadi 1-2-4 kolom pas layar melebar. Kedua, Bootstrap menyediakan `card-group` buat menempelkan beberapa kartu jadi satu bingkai rapi; bermanfaat buat galeri, tapi buat katalog Tokosaya kartu-melalui-grid lebih baik karena jarak antarkartu terkendali `g-4`. Membiasakan diri memisahkan "wadah konten" (kartu) dari "wadah layout" (grid) membuat komponenmu lebih mudah disusun ulang kapan pun susunannya berubah.

### 10.5 Breadcrumbs, Pagination, dan List Group

Tiga komponen navigasi-baca berikut kecil, tapi selalu hadir di sistem informasi. **Breadcrumb** (remah roti) adalah jalur posisi halaman: Beranda → Katalog. Di HTML, komponen ini ditulis sebagai elemen semantik `nav` yang berisi `ol`:

File: tokosaya-bootstrap/katalog.html

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="index.html">Beranda</a></li>
    <li class="breadcrumb-item active" aria-current="page">Katalog</li>
  </ol>
</nav>
```

Penjelasan: Pola berlapis `breadcrumb > breadcrumb-item` diakhiri item `active` + `aria-current="page"` buat posisi halaman sekarang, yang nggak perlu lagi jadi link. Label `aria-label="breadcrumb"` memberi nama wilayah itu buat pembaca layar. Di sistem informasi, *breadcrumb* muncul hampir di setiap halaman rinci (perpustakaan: Beranda → Katalog → Klasifikasi 000 → Data Komputer), jadi pengguna nggak pernah hilang arah.

**Pagination** adalah deret nomor halaman di dasar daftar panjang. Di website statis Tokosaya tanpa data dinamis, kita memakainya apa adanya: paginasi ini bersifat *visual* — halaman 1 diberi tanda aktif, halaman lain tetap ditampilkan biar desainnya lengkap, dan pas diklik pengguna tetap kembali ke halaman yang sama. Pola ini persis yang dibutuhkan prototip desain sebelum data nyata disambungkan:

File: tokosaya-bootstrap/katalog.html

```html
<nav aria-label="Halaman katalog">
  <ul class="pagination justify-content-center mb-0">
    <li class="page-item disabled"><span class="page-link"><i class="bi bi-chevron-left" aria-hidden="true"></i></span></li>
    <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
    <li class="page-item"><a class="page-link" href="katalog.html">2</a></li>
    <li class="page-item"><a class="page-link" href="katalog.html">3</a></li>
    <li class="page-item"><a class="page-link" href="katalog.html"><i class="bi bi-chevron-right" aria-hidden="true"></i></a></li>
  </ul>
</nav>
```

Penjelasan: Tanda status memakai dua kelas: `active` pada halaman sekarang dan `disabled` pada halaman sebelum (belum ada halaman 0). Buat status di atas link, Bootstrap menyarankan memakai `span` alih-alih `a` — itulah yang dilakukan pada item pertama dan kedua. Ikon panah berbentuk font masuk ke markah lewat kelas `bi bi-chevron-*` dari Bootstrap Icons (Subbab 10.7). Seluruh deret dikunci tengah dengan `justify-content-center`.

**List group** adalah daftar berbingkai siap pakai yang jadi bentuk bawaan banyak daftar di sistem informasi: daftar buku, daftar log kejadian, daftar mata kuliah. Ia menyediakan kelas status `active` buat item terpilih serta pemaduan dengan *badge* di sisi kanan tiap item — memakai utilitas `d-flex justify-content-between align-items-center`:

File: tokosaya-bootstrap/demo-komponen.html

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

Penjelasan: Kelas bapak `list-group` menyalakan gaya daftar berbingkai; `active` menyorot satu item (di sini Monitor MR-241, seolah sedang dipilih operaturnya). Item pertama memperlihatkan pola populer daftar + *badge*: link/label di kiri, status di kanan — pola yang sama yang kamu pakai di studi kasus perpustakaan. Ketiga komponen di bagian ini sama-sama bertumpu pada trik yang aman tanpa JavaScript: status direpresentasikan sebagai **kelas** (`active`, `disabled`), bukan data interaktif.

### 10.6 Accordion, Modal, dan Carousel

Tiga komponen berikut di dunia nyata adalah komponen **interaktif**: *accordion* membuka-tutup panelnya, *modal* muncul-menutup, *carousel* berputar. Sikap buku ini soal ketiganya sederhana dan perlu kamu ingat: **kita mempelajari struktur dan kelas statusnya sebagai pengetahuan membaca kode, kita nggak mengharapkan interaksi pada halaman statis.** Interaksi aslinya dirangkai paket JavaScript resmi Bootstrap, yang di luar cakupan mata kuliah ini.

**Accordion** menyusun potongan teks dalam panel yang terbuka-tutup. Struktur: kelas bapak `accordion` → item `accordion-item` → kepala `accordion-header` berisi tombol → panel `accordion-collapse collapse` berisi `accordion-body`. Status dinyatakan lewat kelas di dua tempat: tombol yang tertutup memakai kelas tambahan `collapsed`, dan panel yang terbuka memakai `show`. Demo statis berikut menampilkan panel pertama terbuka dan panel kedua tertutup — keduanya *berhenti* di status itu, persis kayak gambar pada papan cerita:

File: tokosaya-bootstrap/demo-status.html

```html
<div class="accordion" id="faqDemo">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button type="button" class="accordion-button">Apa itu Tokosaya?</button>
    </h2>
    <div class="accordion-collapse collapse show">
      <div class="accordion-body">Tokosaya adalah toko online UMKM aksesori dan elektronik komputer yang berdiri sejak 2019.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button type="button" class="accordion-button collapsed">Apakah ada garansi produk?</button>
    </h2>
    <div class="accordion-collapse collapse">
      <div class="accordion-body">Garansi diberikan sesuai ketentuan merek masing-masing produk.</div>
    </div>
  </div>
</div>
```

Penjelasan: Hal penting yang perlu kamu perhatikan ada pada struktur statusnya: tombol pertama tanpa kelas `collapsed` berarti keadaan terbuka, panelnya mendapat `show`; tombol kedua memakai `collapsed` dan panel tetangganya nggak memakai `show` sehingga tersimpan. Menyalin pola ini di sekolah lain (misal tanya-jawab muka sistem akademik) cukup mengganti isi teksnya. Catat pula bahwa pada dokumentasi resmi tombol itu memuat atribut pemantik data (atribut `data-bs-*`) yang dibaca paket JavaScript; kita cuma menulis `type="button"` karena atribut pemantik itu nggak memengaruhi tampilan tanpa paket JavaScript.

**Modal** adalah kotak dialog yang menempati lapisan di atas halaman. Strukturnya bertingkat: `modal` → `modal-dialog` → `modal-content` yang membelah lagi jadi `modal-header`, `modal-body`, `modal-footer`. Status statisnya ditandai kelas `show`. Buat halaman demonstrasi murni, kita tampilkan modalnya langsung di aliran halaman dengan gaya *inline* yang berlabel khusus demonstrasi:

File: tokosaya-bootstrap/demo-status.html

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
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary">Batal</button>
        <button type="button" class="btn btn-danger">Ya, Hapus</button>
      </div>
    </div>
  </div>
</div>
```

Penjelasan: Tanpa paket JavaScript, tombol silang (`btn-close`) dan kedua tombol footer *nggak berfungsi* — penekanan padanya nggak menutup dialog; itulah mengapa modal di halaman sungguhan Tokosaya nggak dipakai di bab ini. Meski begitu, memahami strukturnya tetap penting: pas kamu membaca prototip di Figma atau alat prototyping lain, modal sering ditampilkan sebagai keadaan statis — dan sekarang kamu udah tahu *markup*-nya. Atribut `tabindex="-1"` mengikuti resep dokumentasi resmi; gaya *inline* pada wadah pertama diawali komentar `<!-- khusus demonstrasi -->` sesuai kesepakatan buku ini.

**Carousel** menampilkan sebaris gambar bergeser berputar. Strukturnya `carousel` → `carousel-inner` → `carousel-item`, dengan kelas `active` pada gambar yang sedang tampil. Tanpa paket JavaScript, carousel berhenti di gambar pertama:

File: tokosaya-bootstrap/demo-status.html

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

Penjelasan: Kelas `active` menentukan gambar yang tampak; selain itu, semua item tetap tersimpan. Tombol panah kiri-kanan dan indikator titik yang pada website sungguhan menavigasi gambar nggak kita sertakan — mereka ikut bergantung paket JavaScript. Sebagai wawasan industri: di dunia nyata, ketiga komponen interaktif ini justru alasan utama tim memuat paket JavaScript resmi Bootstrap. Pemahamanmu atas strukturnya nggak sia-sia: membaca, meninjau, dan menata ulang markup komponen itu adalah keterampilan desain antarmuka yang dibutuhkan meski penggeraknya dibuat orang lain.

### 10.7 Bootstrap Icons

**Bootstrap Icons** adalah kumpulan ikon resmi yang dikemas sebagai *icon font*: setiap ikon adalah satu kelas yang merujuk *glyph* huruf. Ikon ini dihubungkan lewat link CSS versi 1.11.3 pada elemen `head`, lalu dipakai dengan pasangan kelas `bi bi-nama-ikon` pada elemen ikon, biasanya `<i class="bi ..."></i>`. Biar ikon bisa dipakai, tulis dua baris berikut di setiap file proyek tokosaya-bootstrap:

File: tokosaya-bootstrap/katalog.html

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
```

Penjelasan: Baris pertama memuat Ikon Bootstrap 1.11.3, baris kedua Bootstrap 5.3.3, sesuai alamat resmi yang dipakai bab ini. Ikon dipasang dengan kelas — misalnya `bi bi-cart3` buat keranjang dan `bi bi-search` buat pencarian — tanpa satu pun JavaScript. Nggak perlu markup tambahan: ikon otomatis mengikuti ukuran dan warna di sekitarnya.

Ada tiga aturan praktis biar ikon tetap rapi. Pertama, **ukuran mengikuti teks**: karena ikon adalah huruf, menaikkan ukuran teks wadah (kelas `fs-*`) menaikkan ikonnya. Kedua, **warna mewarisi teksnya**: kelas `text-*` pada wadah, atau langsung pada ikon, mengubah warna ikon. Ketiga, **ikon bermakna kalau diberi nama**: kalau ikon berdiri sendiri tanpa kata pendamping, beri atribut `aria-label` atau teks rahasia pada elemen link; kalau ikon cuma hiasan di sebelah kata "Keranjang", beri `aria-hidden="true"` biar pembaca layar nggak membacanya dua kali:

File: tokosaya-bootstrap/katalog.html

```html
<a class="btn btn-outline-light btn-sm" href="keranjang.html">
  <i class="bi bi-cart3" aria-hidden="true"></i> Keranjang
</a>
```

Penjelasan: Ikon bersifat dekorasi (kata "Keranjang" udah menyampaikan makna), jadi `aria-hidden="true"` menyembunyikannya dari pembaca layar. Selain keranjang, ikon memang berulang di katalog Tokosaya: `bi bi-cart3` pada link keranjang, `bi bi-funnel` di baris penyaring, serta `bi bi-chevron-left`/`bi bi-chevron-right` pada *pagination*. Konteks sistem informasi menghargai aturan ikon ini: di katalog perpustakaan, misalnya, ikon `bi bi-book` menandai daftar buku, dan kontras ikon perlu diperiksa bersama *badge* — bukan sekadar "tampak indah".

## Konsep Penting

| Konsep | Ringkasan satu frasa |
|---|---|
| Komponen antarmuka | Potongan antarmuka baku dengan markup dan gaya siap pakai |
| *Navbar* | Bilah navigasi Tokosaya: brand + 4 link + link keranjang ikon |
| `navbar-expand-lg` | Mendatar sejak 992 piksel; di bawahnya menumpuk (tanpa JS) |
| Solusi tanpa JavaScript | Menu selalu tampil; nggak memuat tombol `navbar-toggler` |
| *Badge* | Label kecil `text-bg-*` dengan warna semantik (hijau/sorot/merah/utama) |
| *Card* | Kartu dengan `card-body` + utilitas Flexbox buat harga sejajar dasar |
| Pola harga Tokosaya | `Rp650.000` tanpa spasi, teks utama `text-primary` memakai font Poppins |
| *Breadcrumb* | Jalur posisi halaman; item terakhir `active` + `aria-current="page"` |
| *Pagination* visual | Deret halaman berhenti di status `active` dan `disabled` |
| *List group* | Daftar berbingkai dengan `active` dan *badge* semantik |
| Status statis | Kelas `show`, `collapsed`, `active`, `disabled` ditulis manual |
| Komponen interaktif | Accordion, modal, carousel: struktur diajarkan, interaksi butuh paket JS |
| Bootstrap Icons | Font ikon 1.11.3, kelas `bi bi-…`, ukuran dan warna turun dari teks |
| Token proyek | Warna, radius, shadow mengikuti variabel CSS `--clr-*` KONTRAK §5.3 |

## Contoh Kode

Tiga file demo kecil di folder `tokosaya-bootstrap/` membantu kamu mencoba komponen satu per satu tanpa harus menyusun halaman penuh. Masing-masing adalah halaman lengkap yang bisa dibuka langsung di Chrome. Ketiganya menambah file demo pada proyek; silakan dihapus setelah kamu paham isinya.

File: tokosaya-bootstrap/demo-komponen.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Demo Komponen — Tokosaya</title>
  <!-- Bootstrap 5.3.3 via CDN CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <!-- Bootstrap Icons 1.11.3 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <!-- Tanpa bundle JavaScript Bootstrap (di luar cakupan mata kuliah) -->
</head>
<body>
  <!-- Navbar varian tanpa JavaScript -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand fw-semibold" href="index.html">Tokosaya</a>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="index.html">Beranda</a></li>
        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Demo</a></li>
      </ul>
      <a class="btn btn-outline-light btn-sm ms-lg-3" href="keranjang.html">
        <i class="bi bi-cart3" aria-hidden="true"></i> Keranjang
      </a>
    </div>
  </nav>

  <main class="py-5">
    <div class="container">
      <h1 class="font-heading mb-3">Demo Komponen Tokosaya</h1>

      <!-- Alert statis tanpa tombol tutup -->
      <div class="alert alert-warning" role="alert">
        Stok terbatas pada Speaker Bluetooth BT-5 dan Webcam HD WC-720.
      </div>

      <!-- Baris badge semantik 8 produk baku -->
      <h2 class="font-heading h5 mt-4">Badge Produk</h2>
      <p>
        <span class="badge text-bg-success">Tersedia</span>
        <span class="badge text-bg-warning">Best Seller</span>
        <span class="badge text-bg-danger">Stok Terbatas</span>
        <span class="badge text-bg-primary">Baru</span>
      </p>

      <!-- Kelompok tombol urutkan -->
      <h2 class="font-heading h5 mt-4">Kelompok Tombol</h2>
      <div class="btn-group" role="group" aria-label="Urutan harga">
        <button type="button" class="btn btn-primary btn-sm">Harga Terendah</button>
        <button type="button" class="btn btn-outline-secondary btn-sm">Harga Tertinggi</button>
        <button type="button" class="btn btn-outline-secondary btn-sm">Terbaru</button>
      </div>

      <!-- List group produk -->
      <h2 class="font-heading h5 mt-4">Daftar Produk</h2>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Keyboard Mekanis KX-210
          <span class="badge text-bg-warning">Best Seller</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Mouse Wireless MW-88
          <span class="badge text-bg-success">Tersedia</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Speaker Bluetooth BT-5
          <span class="badge text-bg-danger">Stok Terbatas</span>
        </li>
      </ul>

      <!-- Pagination visual -->
      <h2 class="font-heading h5 mt-4">Halaman Katalog</h2>
      <nav aria-label="Halaman katalog">
        <ul class="pagination mb-0">
          <li class="page-item disabled"><span class="page-link"><i class="bi bi-chevron-left" aria-hidden="true"></i></span></li>
          <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
          <li class="page-item"><a class="page-link" href="katalog.html">2</a></li>
          <li class="page-item"><a class="page-link" href="katalog.html">3</a></li>
          <li class="page-item"><a class="page-link" href="katalog.html"><i class="bi bi-chevron-right" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    </div>
  </main>
</body>
</html>
```

File: tokosaya-bootstrap/demo-kartu.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Demo Kartu Produk — Tokosaya</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <link rel="stylesheet" href="css/style.css">
  <!-- Tanpa bundle JavaScript Bootstrap (di luar cakupan mata kuliah) -->
</head>
<body>
  <main class="py-5">
    <div class="container">
      <h1 class="font-heading mb-4">Anatomi Kartu Produk</h1>
      <h2 class="font-heading h5 mt-2">Kartu Produk KX-210</h2>

      <!-- kartu produk: wadah card + tubuh card-body (pola Tokosaya) -->
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="card h-100 produk-card">
            <!-- bagian atas kartu: gambar produk -->
            <img src="img/produk-keyboard-kx210.svg" class="card-img-top" alt="Keyboard Mekanis KX-210">
            <div class="card-body d-flex flex-column">
              <!-- badge semantik di baris pertama -->
              <p class="mb-2"><span class="badge text-bg-warning">Best Seller</span></p>
              <h3 class="card-title h6 font-heading">Keyboard Mekanis KX-210</h3>
              <p class="card-text small text-body-secondary mb-2">Aksesori Input</p>
              <p class="card-text small mb-3">Keyboard mekanis 87 tombol dengan switch biru untuk kerja lama yang nyaman.</p>
              <!-- mt-auto menempelkan harga dan tombol ke dasar kartu -->
              <p class="fw-semibold text-primary mb-3 mt-auto">Rp650.000</p>
              <a href="#" class="btn btn-primary btn-sm">Lihat Detail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</body>
</html>
```

File: tokosaya-bootstrap/demo-status.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Demo Status Statis — Tokosaya</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <!-- Tanpa bundle JavaScript Bootstrap (di luar cakupan mata kuliah) -->
</head>
<body>
  <main class="py-5">
    <div class="container">
      <h1 class="font-heading mb-4">Demo Status Statis Komponen</h1>

      <!-- Accordion: panel pertama dibuka dengan kelas show -->
      <h2 class="font-heading h5">Accordion</h2>
      <div class="accordion mb-5" id="faqDemo">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button type="button" class="accordion-button">Apa itu Tokosaya?</button>
          </h2>
          <div class="accordion-collapse collapse show">
            <div class="accordion-body">Toko online UMKM aksesori dan elektronik komputer sejak 2019.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button type="button" class="accordion-button collapsed">Apakah ada garansi produk?</button>
          </h2>
          <div class="accordion-collapse collapse">
            <div class="accordion-body">Garansi mengikuti ketentuan merek masing-masing produk.</div>
          </div>
        </div>
      </div>

      <!-- Modal: dibedakan sebagai status statis di aliran halaman -->
      <h2 class="font-heading h5">Modal (statis)</h2>
      <!-- khusus demonstrasi: status statis tanpa JavaScript -->
      <div class="modal show mb-5" tabindex="-1" style="display: block; position: static;">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title">Konfirmasi Pesanan</h3>
              <button type="button" class="btn-close" aria-label="Tutup"></button>
            </div>
            <div class="modal-body">
              <p>Hapus produk Flash Drive 64GB FD-64 dari keranjang?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary">Batal</button>
              <button type="button" class="btn btn-danger">Ya, Hapus</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel: berhenti pada item dengan kelas active -->
      <h2 class="font-heading h5">Carousel (statis)</h2>
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
    </div>
  </main>
</body>
</html>
```

## Penjelasan Kode

**Demo-komponen.html** menggabungkan lima komponen kecil dalam satu halaman biar kamu bisa menguji semuanya sekali buka. Perhatikan pola yang berulang: setiap komponen berdiri di atas kelas bapak (`list-group`, `btn-group`, `pagination`) lalu mengisi anak sesuai resep; status menyusul lewat kelas (`active`, `disabled`) dan atribut kesediaan lewat `aria-current`. *Navbar* memakai varian tanpa JavaScript: nggak ada tombol `navbar-toggler`, menu `navbar-nav` berdiri langsung, dan cuma `navbar-expand-lg` yang memutar susunannya mendatar di layar besar. Alert ditulis tanpa tombol tutup — kesepakatan bab: komponen yang menutupannya butuh paket JavaScript nggak dipakai perilaku itu pada halaman statis.

**Demo-kartu.html** menampilkan anatomi satu kartu Tokosaya secara terpisah. Komentar di dalam kode menata batas setiap bagian: gambar atas, *badge*, judul, kategori, deskripsi, harga, dan tombol. Kombinasi utilitas `d-flex flex-column` pada `card-body` dan `mt-auto` pada harga adalah inti pola Tokosaya: kartu tetap sejajar dasarnya meski deskripsi beragam. Kelas `produk-card` menunjuk gaya kustom (border, radius token, bayangan token, gambar tinggi seragam) yang didefinisikan di `css/style.css`, jadi batas "Bootstrap dulu, kustom pelengkap" tetap terjaga. Link pembuka "#" menandai prototipe statis yang nanti disambungkan ke halaman detail pas data halaman detail tersedia.

**Demo-status.html** adalah halaman buat belajar, bukan halaman produk: tiga komponen interaktif ditampilkan sebagai status beku. Pada accordion, status terbuka/tertutup dinyatakan sepenuhnya dengan kelas `show`/`collapsed` di panel dan tombolnya. Modal dibuat tampil di aliran halaman lewat gaya `inline` bertanda `<!-- khusus demonstrasi -->` — cara aman memeriksa tampilan kotaknya tanpa memuat paket JavaScript. Carousel menampilkan item pertama saja karena `active` nggak bergeser tanpa JavaScript. Halaman ini juga memperkenalkan kebiasaan baik: komponen yang aslinya interaktif boleh dirapikan dalam file demo terpisah biar nggak membingungkan halaman resmi kayak `katalog.html`.

## Praktikum

### Tujuan Praktikum

Membangun halaman `katalog.html` Tokosaya di proyek `tokosaya-bootstrap/` dengan Bootstrap 5.3.3: *navbar* tanpa JavaScript, *breadcrumb*, bar penyaring, delapan kartu produk baku KONTRAK §5.2 dengan *badge* semantik, *pagination* visual, dan ikon Bootstrap Icons — semuanya responsif pada tiga rentang layar.

### Kebutuhan

1. Browser Google Chrome (beserta DevTools) dan Visual Studio Code.
2. Proyek `tokosaya-bootstrap/` hasil Bab 9 (memuat `index.html` dan `css/style.css`); kalau belum ada, buat folder baru dengan mengikuti langkah Persiapan.
3. Folder `img/` berisi delapan file gambar produk kebab-case dari proyek `tokosaya-css/` milikmu.
4. Jaringan internet tersambung buat memuat dua file CDN: Bootstrap 5.3.3 CSS dan Bootstrap Icons 1.11.3.

### Persiapan

1. Duplikat atau buat folder proyek `tokosaya-bootstrap/` berisi `index.html` hasil Bab 9 dan folder `css/` berisi `style.css`.
2. Salin seluruh isi folder `img/` dari proyek `tokosaya-css/` (file `produk-keyboard-kx210.svg` dan teman-temannya) ke `tokosaya-bootstrap/img/`.
3. Buka proyek di Visual Studio Code dan buat file kosong `katalog.html`. Pratinjau bisa kamu buka lewat ekstensi Live Server atau dengan membuka filenya langsung di Chrome.

### Langkah Kerja

1. **Buat kerangka `katalog.html`.** Tulis `<!DOCTYPE html>`, `<html lang="id">`, bagian `head` lengkap: `charset`, `viewport`, judul halaman, link Bootstrap 5.3.3 CSS, Bootstrap Icons 1.11.3, Google Fonts Poppins + Inter, dan `css/style.css`. Tambahkan komentar HTML `<!-- Tanpa bundle JavaScript Bootstrap (di luar cakupan mata kuliah) -->`.
2. **Tulis *navbar* tanpa JavaScript.** Pakai pola Subbab 10.2: `navbar navbar-expand-lg navbar-dark bg-dark`, merek `Tokosaya`, empat link baku dengan `active` + `aria-current="page"` pada Katalog, dan link Keranjang berikon `bi bi-cart3`.
3. **Buat *header* katalog.** Di bawah *navbar*, buat `container` yang berisi *breadcrumb* Beranda → Katalog, judul `h1` "Katalog Produk", dan tagline "Belanja Tepat, Kirim Cepat" sebagai teks sekunder.
4. **Susun bar penyaring.** Baris `d-flex flex-wrap gap-2` memuat ikon `bi bi-funnel`, label "Urutkan:", dan tiga tombol (satu warna utama, dua garis tepi) sesuai Subbab 10.3.
5. **Susun grid produk.** Buat `<div class="row g-4">`; setiap produk menempati `<article class="col-12 col-sm-6 col-lg-3">` jadi susunan 1-2-4 kolom tercapai.
6. **Tulis kartu produk pertama (KX-210).** Ikuti pola Subbab 10.4 berikut: `card h-100 produk-card`, gambar `card-img-top`, `card-body d-flex flex-column`, *badge*, judul, kategori, deskripsi, harga `fw-semibold text-primary` dengan format `Rp650.000` tanpa spasi, tombol detail.
7. **Ulangi kartu buat tujuh produk sisa** dengan data baku berikut (urutan sesuai KONTRAK §5.2):

   | Produk | Badge baku | Kelas badge |
   |---|---|---|
   | Mouse Wireless MW-88 | Tersedia | `text-bg-success` |
   | Headphone Studio HS-15 | Tersedia | `text-bg-success` |
   | Monitor IPS 24" MR-241 | Best Seller | `text-bg-warning` |
   | Flash Drive 64GB FD-64 | Tersedia | `text-bg-success` |
   | Charger Cepat 30W CP-30 | Tersedia | `text-bg-success` |
   | Speaker Bluetooth BT-5 | Stok Terbatas | `text-bg-danger` |
   | Webcam HD WC-720 | Baru | `text-bg-primary` |

8. **Tutup grid lalu tambahkan *pagination* visual** di dasar konten memakai pola Subbab 10.5: halaman 1 `active`, dua halaman berikutnya link biasa ke `katalog.html`, panah kiri `disabled`.
9. **Tulis `css/style.css`** berisi token §5.3, aturan `body`/`.font-heading`, dan gaya kustom `.produk-card` (lihat blok `### Kode` berikut).
10. **Uji di Chrome** pakai panel perangkat DevTools: periksa tampilan pada lebar 360 piksel (1 kolom), 768 piksel (2 kolom), dan 1200 piksel (4 kolom).

### Kode

File: tokosaya-bootstrap/katalog.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Katalog Produk — Tokosaya</title>
  <!-- Bootstrap 5.3.3 via CDN CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <!-- Bootstrap Icons 1.11.3 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <!-- Google Fonts Poppins + Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <!-- CSS kustom Tokosaya -->
  <link rel="stylesheet" href="css/style.css">
  <!-- Tanpa bundle JavaScript Bootstrap (di luar cakupan mata kuliah) -->
</head>
<body>
  <!-- Navbar varian tanpa JavaScript: menu selalu tampil -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand fw-semibold" href="index.html">Tokosaya</a>
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

  <!-- Header katalog -->
  <header class="py-4 border-bottom bg-body-tertiary">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><a href="index.html">Beranda</a></li>
          <li class="breadcrumb-item active" aria-current="page">Katalog</li>
        </ol>
      </nav>
      <h1 class="font-heading mt-2 mb-1">Katalog Produk</h1>
      <p class="text-body-secondary mb-0">Belanja Tepat, Kirim Cepat — pilih perangkat kerja Anda dengan harga UMKM yang jujur.</p>
    </div>
  </header>

  <main class="py-5">
    <div class="container">
      <!-- Bar penyaring (tombol simulasi pilihan) -->
      <div class="d-flex flex-wrap align-items-center gap-2 mb-4">
        <span class="fw-semibold me-2"><i class="bi bi-funnel" aria-hidden="true"></i> Urutkan:</span>
        <button type="button" class="btn btn-primary btn-sm">Harga Terendah</button>
        <button type="button" class="btn btn-outline-secondary btn-sm">Harga Tertinggi</button>
        <button type="button" class="btn btn-outline-secondary btn-sm">Terbaru</button>
      </div>

      <h2 class="font-heading h5 mb-4">Daftar Produk (8)</h2>

      <!-- Grid kartu produk: 1 kolom (HP) / 2 (tablet) / 4 (desktop) -->
      <div class="row g-4">

        <article class="col-12 col-sm-6 col-lg-3">
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
        </article>

        <article class="col-12 col-sm-6 col-lg-3">
          <div class="card h-100 produk-card">
            <img src="img/produk-mouse-mw88.svg" class="card-img-top" alt="Mouse Wireless MW-88">
            <div class="card-body d-flex flex-column">
              <p class="mb-2"><span class="badge text-bg-success">Tersedia</span></p>
              <h3 class="card-title h6 font-heading">Mouse Wireless MW-88</h3>
              <p class="card-text small text-body-secondary mb-2">Aksesori Input</p>
              <p class="card-text small mb-3">Mouse wireless 2,4 GHz dengan sensor presisi 1600 DPI.</p>
              <p class="fw-semibold text-primary mb-3 mt-auto">Rp185.000</p>
              <a href="#" class="btn btn-primary btn-sm">Lihat Detail</a>
            </div>
          </div>
        </article>

        <article class="col-12 col-sm-6 col-lg-3">
          <div class="card h-100 produk-card">
            <img src="img/produk-headphone-hs15.svg" class="card-img-top" alt="Headphone Studio HS-15">
            <div class="card-body d-flex flex-column">
              <p class="mb-2"><span class="badge text-bg-success">Tersedia</span></p>
              <h3 class="card-title h6 font-heading">Headphone Studio HS-15</h3>
              <p class="card-text small text-body-secondary mb-2">Audio</p>
              <p class="card-text small mb-3">Headphone over-ear dengan bantalan lembut untuk rapat audio jangka panjang.</p>
              <p class="fw-semibold text-primary mb-3 mt-auto">Rp425.000</p>
              <a href="#" class="btn btn-primary btn-sm">Lihat Detail</a>
            </div>
          </div>
        </article>

        <article class="col-12 col-sm-6 col-lg-3">
          <div class="card h-100 produk-card">
            <img src="img/produk-monitor-mr241.svg" class="card-img-top" alt="Monitor IPS 24 inci MR-241">
            <div class="card-body d-flex flex-column">
              <p class="mb-2"><span class="badge text-bg-warning">Best Seller</span></p>
              <h3 class="card-title h6 font-heading">Monitor IPS 24" MR-241</h3>
              <p class="card-text small text-body-secondary mb-2">Layar</p>
              <p class="card-text small mb-3">Monitor IPS 24 inci full HD yang jernih untuk kerja tabel dan laporan.</p>
              <p class="fw-semibold text-primary mb-3 mt-auto">Rp1.899.000</p>
              <a href="#" class="btn btn-primary btn-sm">Lihat Detail</a>
            </div>
          </div>
        </article>

        <article class="col-12 col-sm-6 col-lg-3">
          <div class="card h-100 produk-card">
            <img src="img/produk-flashdrive-fd64.svg" class="card-img-top" alt="Flash Drive 64GB FD-64">
            <div class="card-body d-flex flex-column">
              <p class="mb-2"><span class="badge text-bg-success">Tersedia</span></p>
              <h3 class="card-title h6 font-heading">Flash Drive 64GB FD-64</h3>
              <p class="card-text small text-body-secondary mb-2">Penyimpanan</p>
              <p class="card-text small mb-3">Flash drive 64GB untuk arsip dokumen dan tugas mahasiswa.</p>
              <p class="fw-semibold text-primary mb-3 mt-auto">Rp95.000</p>
              <a href="#" class="btn btn-primary btn-sm">Lihat Detail</a>
            </div>
          </div>
        </article>

        <article class="col-12 col-sm-6 col-lg-3">
          <div class="card h-100 produk-card">
            <img src="img/produk-charger-cp30.svg" class="card-img-top" alt="Charger Cepat 30W CP-30">
            <div class="card-body d-flex flex-column">
              <p class="mb-2"><span class="badge text-bg-success">Tersedia</span></p>
              <h3 class="card-title h6 font-heading">Charger Cepat 30W CP-30</h3>
              <p class="card-text small text-body-secondary mb-2">Daya</p>
              <p class="card-text small mb-3">Charger 30W untuk pengisian cepat ponsel dan tablet saat mengetik di kafe.</p>
              <p class="fw-semibold text-primary mb-3 mt-auto">Rp120.000</p>
              <a href="#" class="btn btn-primary btn-sm">Lihat Detail</a>
            </div>
          </div>
        </article>

        <article class="col-12 col-sm-6 col-lg-3">
          <div class="card h-100 produk-card">
            <img src="img/produk-speaker-bt5.svg" class="card-img-top" alt="Speaker Bluetooth BT-5">
            <div class="card-body d-flex flex-column">
              <p class="mb-2"><span class="badge text-bg-danger">Stok Terbatas</span></p>
              <h3 class="card-title h6 font-heading">Speaker Bluetooth BT-5</h3>
              <p class="card-text small text-body-secondary mb-2">Audio</p>
              <p class="card-text small mb-3">Speaker bluetooth portabel dengan suara bersih untuk presentasi kelompok.</p>
              <p class="fw-semibold text-primary mb-3 mt-auto">Rp285.000</p>
              <a href="#" class="btn btn-primary btn-sm">Lihat Detail</a>
            </div>
          </div>
        </article>

        <article class="col-12 col-sm-6 col-lg-3">
          <div class="card h-100 produk-card">
            <img src="img/produk-webcam-wc720.svg" class="card-img-top" alt="Webcam HD WC-720">
            <div class="card-body d-flex flex-column">
              <p class="mb-2"><span class="badge text-bg-primary">Baru</span></p>
              <h3 class="card-title h6 font-heading">Webcam HD WC-720</h3>
              <p class="card-text small text-body-secondary mb-2">Video</p>
              <p class="card-text small mb-3">Webcam 720p dengan mikrofon bawaan untuk kelas online dan wawancara.</p>
              <p class="fw-semibold text-primary mb-3 mt-auto">Rp310.000</p>
              <a href="#" class="btn btn-primary btn-sm">Lihat Detail</a>
            </div>
          </div>
        </article>

      </div>

      <!-- Pagination visual: prototipe statis, halaman 1 aktif -->
      <div class="row mt-5">
        <div class="col-12 text-center">
          <nav aria-label="Halaman katalog">
            <ul class="pagination justify-content-center mb-0">
              <li class="page-item disabled"><span class="page-link"><i class="bi bi-chevron-left" aria-hidden="true"></i></span></li>
              <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
              <li class="page-item"><a class="page-link" href="katalog.html">2</a></li>
              <li class="page-item"><a class="page-link" href="katalog.html">3</a></li>
              <li class="page-item"><a class="page-link" href="katalog.html"><i class="bi bi-chevron-right" aria-hidden="true"></i></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer Tokosaya -->
  <footer class="py-4 bg-dark">
    <div class="container text-center">
      <p class="text-white mb-0 small">Tokosaya — Jl. Digital Raya No. 10, Jakarta · halo@tokosaya.id · (021) 555-0199</p>
    </div>
  </footer>
</body>
</html>
```

File: tokosaya-bootstrap/css/style.css

```css
/* Tokosaya Bootstrap — css/style.css
   Token mengikuti KONTRAK §5.3; utilitas Bootstrap dipakai terlebih dahulu. */

:root {
  --clr-primary: #4F46E5;      /* indigo — tombol dan link utama */
  --clr-primary-dark: #4338CA;
  --clr-accent: #F59E0B;       /* amber — badge dan sorotan */
  --clr-dark: #1E293B;         /* heading dan teks tegas */
  --clr-body: #334155;
  --clr-bg: #F8FAFC;
  --clr-surface: #FFFFFF;
  --clr-border: #E2E8F0;
  --clr-success: #16A34A;
  --clr-danger: #DC2626;
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  --radius: 12px;
  --shadow-card: 0 8px 24px rgba(15, 23, 42, 0.08);
}

/* kustom — dasar tipografi Tokosaya */
body {
  font-family: var(--font-body);
  color: var(--clr-body);
  background-color: var(--clr-bg);
}

/* kustom — kelas judul merek Tokosaya */
.font-heading {
  font-family: var(--font-heading);
  color: var(--clr-dark);
}

/* kustom — kartu produk Tokosaya */
.produk-card {
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  overflow: hidden;               /* potong gambar mengikuti radius kartu */
  transition: transform 0.2s ease;
}

/* kustom — kartu mengangkat sedikit pas diarahkan (tanpa JavaScript) */
.produk-card:hover {
  transform: translateY(-4px);
}

/* kustom — tinggi gambar kartu diseragamkan */
.produk-card .card-img-top {
  height: 160px;
  object-fit: cover;
}
```

### Penjelasan Kode

Pada `katalog.html`, urutan link di `head` penting: Bootstrap 5.3.3 CSS dimuat lebih dulu, lalu Bootstrap Icons 1.11.3, lalu `css/style.css` paling akhir. Dengan urutan itu, aturan kustom Tokosaya selalu berkesempatan menimpa gaya umum Bootstrap tanpa perlu *important*. Komentar di atas `</head>` menegaskan pilihan proyek: halaman ini nggak memuat paket JavaScript apa pun, dan seluruh tampilan dijamin jalan oleh CSS komponen dan utilitas saja.

Di bagian isi, ada tiga peran yang perlu kamu ingat. Pertama, peran **wilayah**: `nav` buat menu, `header` buat keterangan halaman, `main` buat daftar produk, `footer` buat alamat — sama kayak kerangka `tokosaya-css/` di Bab 7, jadi pengalamanmu terbawa tanpa kehilangan semantik. Kedua, peran **grid**: `row g-4` dengan sel `col-12 col-sm-6 col-lg-3` membuat pola 1-2-4 kolom muncul otomatis sesuai layar. Ketiga, peran **kartu**: `card h-100` menyamakan tinggi, `d-flex flex-column` menata isi menurun, dan `mt-auto` menempelkan harga-tombol ke dasar; itulah sebabnya seluruh kartu terlihat sejajar walaupun deskripsinya beragam panjang.

Pada `css/style.css`, ada tiga aturan kustom yang melengkapi hal-hal yang nggak disediakan utilitas singkat Bootstrap: token warna `--clr-*` dari KONTRAK §5.3 (biar proyek tokosaya-bootstrap sepenuhnya setara tokosaya-css), kelas `.font-heading` buat judul Poppins, dan `.produk-card` sebagai pelengkap kartu (garis tepi token, radius token, bayangan token, efek mengangkat pada `:hover`, serta tinggi gambar tetap 160 piksel dengan `object-fit: cover` biar delapan kartu memakai bingkai gambar yang sama). Semua aturan kustom diberi komentar `/* kustom */` sesuai kesepakatan bab — kalau nanti kamu melihat kelas kustom di markup, cek keberadaannya di file ini dulu.

### Hasil yang Diharapkan

- **Teramati pada layar desktop (≥ 992 piksel):** bilah *navbar* gelap dengan merek Tokosaya di kiri, empat link mendatar ke kanan, link Keranjang berikon di ujung kanan; *breadcrumb* "Beranda / Katalog"; bar penyaring dengan tiga tombol; delapan kartu dalam empat kolom dengan tinggi seragam; *badge* berwarna sesuai tabel; *pagination* di tengah dengan "1" tertandai aktif dan panah kiri pudar.
- **Teramati pada tablet (576–991 piksel):** kartu menumpuk dua kolom; menu *navbar* menumpuk vertikal di bawah merek tanpa tombol apa pun (sifat pola tanpa JavaScript).
- **Teramati pada HP (< 576 piksel):** satu kolom kartu memenuhi lebar; ikon ikut tampil; seluruh link tetap dapat ditekan dengan target sentuh lapang.
- **Terukur:** jumlah kartu dalam grid tepat 8; setiap kartu memuat nama produk, kategori, harga berformat `Rp650.000` (tanpa spasi), *badge*, dan tombol; jumlah *variant* badge berbeda = 4; gambar kartu seluruhnya bertingkat sama (160 piksel).
- **Efek kustom terlihat:** pas penunjuk tetikus diarahkan ke kartu, kartu terangkat 4 piksel senyap; itu hasil `.produk-card:hover` pada CSS kustom, bukan hasil interaksi JavaScript.

### Troubleshooting

**Masalah:** Ikon keranjang dan panah *pagination* tampil sebagai nama teks (misalnya "bi bi-cart3") atau kotak kosong.
**Penyebab:** File CSS Bootstrap Icons belum terhubung ke halaman — link CDN ikon lupa ditulis, URL salah mengetik, atau halaman dibuka tanpa jaringan, jadi file CDN gagal dimuat.
**Solusi:** Periksa urutan link di `head`: baris `bootstrap-icons@1.11.3` harus sebelum `css/style.css`, lalu pastikan penulisan kelas ganda `bi bi-nama-ikon` persis sesuai daftar resmi di website ikon Bootstrap.
**Pencegahan:** Pas menyalin kerangka `head`, salin penuh empat link baku (Bootstrap CSS, Icons, Google Fonts, `css/style.css`) tanpa memangkas satu baris pun; tes pertama setiap halaman adalah memastikan ikon keranjang tampil.

**Masalah:** Gaya kustom (kartu terangkat, font Poppins) nggak berlaku sama sekali.
**Penyebab:** Urutan link terbalik — `css/style.css` ditulis sebelum `bootstrap.min.css` — jadi gaya komponen Bootstrap menimpa kustom, atau file `style.css` nggak ditemukan karena penulisan jalurnya salah.
**Solusi:** Pindahkan link `css/style.css` ke urutan terakhir di `head`; periksa huruf besar-kecil dan nama folder `css/` persis sama dengan struktur proyek.
**Pencegahan:** Jadikan konvensi: kelima file CDN dan kustom selalu dalam urutan resmi sama di semua halaman proyek Tokosaya, jadi salin-tempel antarhalaman selalu aman.

**Masalah:** Harga dan tombol pada kartu nggak sejajar dasar; kartu tampak berantakan kalau deretnya bertinggi berbeda.
**Penyebab:** Tubuh kartu dibiarkan tanpa utilitas penata — `h-100`, `d-flex flex-column`, dan `mt-auto` nggak lengkap terpasang.
**Solusi:** Tambahkan `h-100` pada elemen `card`, `d-flex flex-column` pada `card-body`, dan `mt-auto` pada paragraf harga, jadi harga dan tombol turun menempel dasar kartu.
**Pencegahan:** Tuliskan ketiga kelas itu sekali pada kartu pertama, lalu salin pola penuh kartu pertama buat kartu kedua sampai kedelapan — bukan menulis ulang kartu dari nol.

**Masalah:** Menu navbar tampak mendatar padat ke kanan di layar HP, nggak menumpuk kayak contoh.
**Penyebab:** Kelas `navbar-expand-lg` nggak terpasang (atau salah mengetik), jadi menu ditampilkan mendatar sejak layar kecil; atau `ms-auto` tertaruh di ul yang salah.
**Solusi:** Pastikan kelas `navbar-expand-lg` ada pada elemen `nav`, dan `ms-auto` ditaruh pada `navbar-nav`; dalam pola buku ini memang menu menumpuk di layar kecil tanpa tombol — itulah solusi tanpa JavaScript, bukan cacat.
**Pencegahan:** Setelah menulis *navbar*, uji tiga lebar layar (360, 768, 1200 piksel) sebelum lanjut ke bagian lain halaman.

**Masalah:** Kartu terlihat melar karena gambar produk terlalu tinggi atau gepeng.
**Penyebab:** Aturan kustom `.produk-card .card-img-top` belum ada di `style.css`, atau file gambar SVG punya rasio berbeda, jadi tampilan berbeda antarkartu.
**Solusi:** Tambahkan aturan tinggi 160 piksel dengan `object-fit: cover` pada CSS kustom; kalau perlu, sesuaikan tinggi itu pas meninjau di tiga ukuran layar.
**Pencegahan:** Selalu tetapkan tinggi gambar kartu lewat satu kelas kustom biar delapan kartu memakai bingkai sama tingkatannya.

## Studi Kasus

**Konteks:** Perpustakaan sebuah politeknik memelihara sistem informasi perpustakaan berbasis web. Petugas ingin halaman OPAC (katalog daring) yang menampilkan daftar buku hasil pencarian beserta status ketersediaan: tersedia atau dipinjam. Kendalanya berasal dari kebijakan laboratorium: komputer milik kampus nggak diperkenankan memuat file JavaScript dari luar jaringan kampus. Kasus ini nyata memotret materi bab ini, sebab kebutuhannya adalah komponen visual status, bukan interaksi.

Tiga penerapan komponen bab ini cocok di sini. Pertama, **daftar buku** sebagai `list-group`: setiap baris memuat judul di kiri dan *badge* status di kanan, dipisah `d-flex justify-content-between`. Kedua, **kartu status buku** sebagai `card` dengan *badge*: kartu unggulan ada di atas halaman berisi sampul buku dan statusnya. Ketiga, **warna semantik** dipetakan: hijau `text-bg-success` buat tersedia, abu `text-bg-secondary` buat dipinjam, merah `text-bg-danger` buat terlambat dikembalikan, dan sorot `text-bg-warning` buat sedang direservasi. Berikut pola daftar buku yang bisa ditiru:

File: sistem-perpustakaan/daftar-buku.html

```html
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span><i class="bi bi-book" aria-hidden="true"></i> Konsep Sistem Informasi</span>
    <span class="badge text-bg-success">Tersedia</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span><i class="bi bi-book" aria-hidden="true"></i> Desain Basis Data</span>
    <span class="badge text-bg-secondary">Dipinjam</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span><i class="bi bi-book" aria-hidden="true"></i> Sistem Penunjang Keputusan</span>
    <span class="badge text-bg-danger">Terlambat</span>
  </li>
</ul>
```

Penjelasan: Setiap baris memakai pola isi-di-kiri status-di-kanan; ikon `bi bi-book` bersifat dekorasi dan diberi `aria-hidden="true"`. Warna badge memindahkan bahasa warna Tokosaya ke dunia perpustakaan — bukti bahwa design token warna berlaku lintas sistem informasi.

Sementara itu, kartu status buat satu buku unggulan memakai pola kartu Tokosaya dengan penyesuaian kecil:

File: sistem-perpustakaan/daftar-buku.html

```html
<div class="card h-100" style="max-width: 320px;"> <!-- khusus demonstrasi: batas lebar demo -->
  <img src="img/sampul-buku-01.svg" class="card-img-top" alt="Sampul buku Desain Basis Data">
  <div class="card-body d-flex flex-column">
    <span class="badge text-bg-secondary mb-2 align-self-start">Dipinjam</span>
    <h3 class="card-title h6">Desain Basis Data</h3>
    <p class="card-text small">Penerbit Andi, 2020 — klasifikasi 005.74</p>
    <p class="mt-auto mb-0 small">Estimasi kembali: 12 Februari</p>
  </div>
</div>
```

Penjelasan: Kartu memakai struktur inti Tokosaya (`card`, `card-img-top`, `card-body`, *badge*, `mt-auto`) hanya dengan pengisian data perpustakaan — sampul, nomor klasifikasi, estimasi kembali. Gaya `inline` `max-width` diberi komentar khusus demonstrasi karena cuma membatasi kotak contoh. Kesimpulan studi kasus: komponen yang sama (`list-group`, `card`, `badge`) memecahkan kebutuhan dua sistem yang beda banget, karena komponen adalah **kerangka** yang diisikan konteks; inilah manfaat besar mempelajari komponen, bukan tampilan sekali jadi.

## Latihan Mandiri

1. Tanpa JavaScript, jelaskan apa yang terjadi pada menu *navbar* Tokosaya pas lebar layar turun dari 991 piksel ke 480 piksel, dan kenapa hal itu beda dari perilaku website yang memuat paket JavaScript resmi Bootstrap.
2. Tuliskan *markup* *badge* lengkap buat kedelapan produk baku KONTRAK §5.2 — setiap baris produk mencantumkan nama produk dan baris kelas *badge* semantiknya.
3. Kalau kamu ingin pola kolom katalog jadi 1–2–4 kolom, tulislah satu baris kelas `col-*` yang harus dipasang pada setiap sel produk dan cantumkan rentang layar setiap kelasnya.
4. Identifikasi tiga utilitas yang membuat harga setiap kartu sejajar dasar kartu, lalu jelaskan secara rinci kenapa masing-masing utilitas itu diperlukan.
5. Tuliskan *markup* *pagination* visual dengan halaman 3 dalam keadaan aktif, halaman 1 dan 2 berupa link biasa, dan panah kanan dalam keadaan `disabled`; tambahkan `aria-*` yang perlu.
6. Bandingkan kartu produk Tokosaya pada proyek `tokosaya-css/` (Bab 7) dan `tokosaya-bootstrap/` (Bab ini): sebutkan dua kelas Bootstrap yang menggantikan gaya kustom CSS dan satu gaya kustom yang tetap perlu ditulis tangan.

## Tugas

1. **Tugas individu — kartu status buku.** Buat halaman `buku.html` di folder proyekmu sendiri yang menampilkan tiga kartu buku dengan status Tersedia, Dipinjam, dan Terlambat pakai `card` + *badge* semantik + ikon Bootstrap Icons. Keluaran yang dikumpulkan: file HTML, tangkapan layar pada tiga lebar layar (360, 768, 1200 piksel), dan satu paragraf yang menjelaskan pilihan warna *badge*. Kriteria singkat: *badge* semantik benar, kartu sejajar, ikon dekoratif memakai `aria-hidden`.
2. **Tugas kelompok (2–3 orang) — tabel komparasi pendekatan.** Susun tabel satu halaman membandingkan kartu produk Tokosaya di `tokosaya-css/` (CSS murni) dan `tokosaya-bootstrap/` (komponen Bootstrap): jumlah baris kode, jumlah kelas, kemudahan konsistensi, dan fleksibilitas gaya. Keluaran yang dikumpulkan: tabel + satu paragraf rekomendasi tim. Kriteria singkat: perbandingan jujur, contoh kelas nyata dari kedua proyek, nggak ada klaim tanpa dasar.

## Refleksi

1. Komponen siap pakai memang cepat; dalam keadaan apa kamu justru menolaknya dan menulis CSS sendiri?
2. Kapan sebuah status "aktif/terpilih" lebih tepat disampaikan lewat kelas Bootstrap, dan kapan lewat atribut ARIA juga?
3. Pola tanpa JavaScript yang dipakai buku ini (menu selalu tampil) punya kelebihan dan kekurangan; kapan kamu menerima kekurangan itu?
4. Gimana kamu menjelaskan ke pemangku kepentingan non-teknis soal batas prototipe statis — misalnya "pagination" yang belum mengganti isinya?

## Rangkuman

- Komponen antarmuka adalah potongan antarmuka baku dengan *markup* dan gaya siap pakai; ia menekan biaya desain dan menjaga konsistensi antarhalaman.
- *Navbar* Tokosaya memakai `navbar-expand-lg navbar-dark bg-dark` dengan varian **tanpa JavaScript**: tombol pembuka resmi nggak disertakan, menu `navbar-nav` selalu tampil (menumpuk di layar kecil, mendatar di 992 piksel ke atas).
- Tombol, *badge*, dan *alert* berbagi pola "kelas bapak + *variant*": `btn-*`, `text-bg-*`, `alert-*`; Tokosaya memakai empat warna *badge* semantik baku.
- *Card* adalah komponen inti katalog: `card-img-top`, `card-body`, `card-title`, `card-text`, dan pola harga sejajar dasar lewat `h-100` + `d-flex flex-column` + `mt-auto`.
- *Breadcrumb*, *pagination*, dan *list group* menyediakan navigasi posisi, halaman, dan daftar berbingkai yang statusnya dinyatakan kelas (`active`, `disabled`).
- Accordion, modal, dan carousel diajarkan sebagai **struktur + status statis** (`show`, `collapsed`, `active`); interaksi aslinya butuh paket JavaScript resmi Bootstrap yang berada di luar cakupan mata kuliah.
- Bootstrap Icons 1.11.3 dipasang lewat CSS CDN dan dipakai lewat kelas `bi bi-…`; ukuran mengikuti teks, warna mewarisi, ikon dekoratif diberi `aria-hidden="true"`.
- Praktikum membuktikan delapan produk baku KONTRAK §5.2 tampil sebagai kartu 1-2-4 kolom bersama *badge* dan *pagination* visual — seluruhnya tanpa satu baris pun JavaScript.
- Kesepakatan warna, ikon, dan status di bab ini adalah calon *design token* formal yang dibubuhkan pada design system Bab 12.

**Jembatan ke Bab berikutnya.** Katalog kini udah memenuhi standar komponen, tapi Tokosaya belum punya jalur transaksi: tempat pengguna mengisi data sebelum membeli. Bab 11 membuka gerbang itu — kamu akan belajar **mendesain *form*** yang baik dari sisi pengalaman pengguna (form keranjang dan kontak) dengan memakai tombol yang baru dikuasai plus komponen form Bootstrap, termasuk status tampilan `is-valid`/`is-invalid` sebagai pola statis.

## Evaluasi

### Pilihan Ganda

1. Kelas *badge* Bootstrap 5.3 yang mengatur warna latar kuning sekaligus teks gelap agar kontras pasti terbaca adalah … .
   A. `badge bg-warning text-dark` — B. `badge text-bg-warning` — C. `badge warning-bg` — D. `badge text-warning`

2. Pada proyek Tokosaya yang tidak memuat paket JavaScript Bootstrap, menekan tombol `navbar-toggler` (bila ada) akan … .
   A. membuka menu seperti biasa — B. menutup menu — C. tidak berpengaruh apa pun pada tampilan menu — D. menyembunyikan `navbar` seluruhnya

3. Kelas pada elemen `nav` yang membuat menu *navbar* mendatar mulai breakpoint 992 piksel adalah … .
   A. `navbar-expand-lg` — B. `navbar-expand-sm` — C. `menu-lg` — D. `navbar-dark`

4. Kombinasi utilitas yang menempelkan harga dan tombol ke dasar setiap kartu sekaligus menyamakan tinggi kartu adalah … .
   A. `h-100` pada kartu, `d-flex flex-column` pada tubuh, `mt-auto` pada baris harga
   B. `h-100` pada tubuh, `mt-auto` pada kartu, `d-flex` pada tombol
   C. `mt-auto` pada gambar, `h-100` pada tombol, `d-flex` pada kartu (sulit ringan)
   D. `d-grid` pada kartu, `h-100` pada harga, `flex-column` pada kolom

5. Untuk menyatakan halaman terkini pada komponen *pagination*, pasangan yang benar adalah … .
   A. `<li class="page-item">` dengan `aria-current="true"` — B. `<li class="page-item active">` dengan `aria-current="page"` — C. `<li class="page-item current">` tanpa atribut — D. `<li class="active">` dengan `role="page"`

6. Tanda status statis yang membuat panel *accordion* tampil terbuka pada halaman tanpa JavaScript adalah … .
   A. `open` pada elemen `div` — B. `display: open` pada CSS — C. kelas `show` pada panel `.accordion-collapse` — D. atribut `expanded="true"`

7. Ikon keranjang yang benar memakai Bootstrap Icons 1.11.3 secara aksesibel (ikon dekat kata "Keranjang") ditulis … .
   A. `<i class="bi bi-cart3">Keranjang</i>` — B. `<i class="bi bi-cart3" aria-hidden="true"></i> Keranjang` — C. `<img src="cart3.svg">` — D. `<span class="icon-cart">`

8. Bila kelas pada gambar kartu ditulis `card-img` alih-alih `card-img-top`, maka … . (sulit ringan)
   A. tampilan tidak berubah — B. gambar tidak dipotong mengikuti lingkar tepi atas kartu dan tidak menempel pada sudut atas bingkai — C. kartu gagal memuat gambar sama sekali — D. gambar menutupi seluruh tubuh kartu

### Benar atau Salah

1. Komponen Bootstrap dapat dipakai pada halaman statis tanpa memuat paket JavaScript Bootstrap; yang hilang hanya perilaku interaktif bagian yang membutuhkannya.
2. Kelas `text-bg-success` pada *badge* menghasilkan latar hijau dengan teks putih yang kontrasnya siap terbaca.
3. Item *pagination* dengan kelas `disabled` tetap dapat diklik pengguna pada halaman statis.
4. Carousel yang memakai kelas `carousel-item active` pada gambar pertama akan bergantian menampilkan semua gambar dengan sendirinya.

### Analisis Kode

1. Perhatikan potongan berikut dari percobaan seorang mahasiswa membangun kartu produk Tokosaya:

File: tokosaya-bootstrap/kasus-analisis-1.html

```html
<div class="row">
  <div class="col-12 col-lg-6">
    <div class="card">
      <img src="img/produk-webcam-wc720.svg" class="w-100" alt="Webcam HD WC-720">
      <div class="card-body">
        <span class="badge text-bg-primary">Baru</span>
        <h3 class="card-title h6">Webcam HD WC-720</h3>
        <p class="card-text">Webcam 720p untuk kelas online.</p>
        <p class="fw-semibold text-primary">Rp310.000</p>
      </div>
    </div>
  </div>
</div>
```

   Identifikasi minimal dua cacat pada kartu itu, jelaskan akibatnya bagi tampilan bila kartu ditempatkan berderet dengan kartu lain, lalu tuliskan perbaikannya.

2. Potongan *pagination* berikut gagal menampilkan sorotan "Halaman 1 aktif" yang diharapkan:

File: tokosaya-bootstrap/kasus-analisis-2.html

```html
<nav aria-label="Halaman katalog">
  <ul class="pagination">
    <li class="page-link active"><span>1</span></li>
    <li class="page-link"><a href="katalog.html">2</a></li>
    <li class="page-item"><a class="page-link" href="katalog.html">3</a></li>
  </ul>
</nav>
```

   Apa penyebabnya dan bagaimana perbaikan yang tepat?

### Soal Praktik

1. Buat halaman `katalog-klasifikasi.html` (boleh menyalin dari Praktikum) yang menampilkan kelima produk pertama KONTRAK §5.2 dalam pola kolom 1-2-3 (`col-12 col-md-6 col-lg-4`), lengkap dengan *badge* semantik masing-masing produk dan satu *alert* statis peringatan stok terbatas di atas grid. Kumpulkan file HTML beserta tangkapan layar desktop dan HP.
2. Terapkan pola studi kasus perpustakaan pada halaman baru `daftar-buku.html`: satu `list-group` empat buku (tiga status berbeda) plus satu kartu buku unggulan dengan *badge* status dan baris keterangan klasifikasi. Pastikan setiap ikon dekoratif memakai `aria-hidden="true"`.

### Kunci Jawaban

<details>
<summary>Buka kunci jawaban</summary>

**Pilihan Ganda:** 1-b (kelas `text-bg-*` mengatur latar dan warna teks sekaligus pada Bootstrap 5.2 ke atas); 2-c (tanpa paket JavaScript, klik tombol pembuka tidak memicu apa pun karena perilakunya dikerjakan paket tersebut); 3-a (`navbar-expand-lg` menyalakan menu mendatar sejak 992 piksel); 4-a (kombinasinya: `h-100` menyamakan tinggi kartu, `d-flex flex-column` menyusun isi menurun, dan `mt-auto` mendorong blok harga-tombol ke dasar); 5-b (status aktif pagination memakai `page-item active` plus `aria-current="page"`); 6-c (panel memakai kelas `show`; `open`/`expanded` bukan mekanisme CSS Bootstrap); 7-b (ikon dekoratif di samping teks diberi `aria-hidden="true"`); 8-b (kelas `card-img-top` dibutuhkan agar gambar menempel dan menikung mengikuti tepi atas kartu; tanpanya gambar tetap tampil namun tidak menyatu dengan bingkai).

**Benar atau Salah:** 1-benar (komponen visual berjalan penuh dari CSS; hanya perilaku interaktif yang hilang); 2-b (pasangan warna semantik memang mengatur latar sekaligus kontras teks); 3-s (status `disabled` menampilkan tombol pudar, namun pada halaman statis tidak ada perilaku yang dipicu); 4-s (carousel menampilkan item `active` saja dan berhenti — pergantian gambar membutuhkan paket JavaScript).

**Analisis Kode 1:** (i) gambar tanpa kelas `card-img-top` sehingga tidak menempel bingkai atas kartu; (ii) tanpa `h-100`/`d-flex flex-column`/`mt-auto`, tinggi kartu dan posisi harga melenceng bila berderet dengan kartu lain; (iii) kelas kolom juga belum memakai tingkat medium (`col-sm`/`col-md`) sehingga peralihan layar sedikit melompat. Perbaikan: `class="card-img-top"` pada `img`, `h-100` pada kartu, `d-flex flex-column` pada `card-body`, dan `mt-auto` pada harga agar mengikuti pola Praktikum.

**Analisis Kode 2:** Kelas ditaruh salah lapis: status pagination dibaca dari `<li class="page-item active">` yang memuat `<span class="page-link">`, sedangkan potongan menaruh `page-link active` langsung pada elemen `li`. Perbaikan: `<li class="page-item active" aria-current="page"><span class="page-link">1</span></li>`, dan baris 3 sebaiknya `<a class="page-link" href="katalog.html">2</a>` agar pola link dan `page-item` konsisten.

**Soal Praktik:** dinyatakan memadai bila pola kolom 1-2-3 terbaca pada tiga rentang layar, seluruh *badge* mengikuti makna semantik tabel §10.3, alert statis tanpa tombol tutup, dan ikon dekoratif bermata `aria-hidden` — penilaian menelusuri kelas, bukan sekadar gambar akhir.

</details>

## Referensi

1. Bootstrap Team. (2024). *Bootstrap 5.3 documentation — Components*. Diakses 12 Januari 2026, dari https://getbootstrap.com/docs/5.3/
2. Bootstrap Team. (2024). *Bootstrap Icons — Icons*. Diakses 12 Januari 2026, dari https://icons.getbootstrap.com/
3. MDN Web Docs. (2025). *HTML element reference: nav, ul, ol, button*. Diakses 12 Januari 2026, dari https://developer.mozilla.org/
4. Duckett, J. (2011). *HTML & CSS: Design and Build Websites*. Indianapolis: Wiley.
5. Krug, S. (2014). *Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability* (3rd ed.). San Francisco: New Riders.
