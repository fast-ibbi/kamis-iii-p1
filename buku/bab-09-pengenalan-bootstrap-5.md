# BAB 9 — Pengenalan Bootstrap 5

## Deskripsi Singkat

Setelah delapan bab menulis HTML dan CSS dari nol, bab ini masuk ke babak kedua proyek Tokosaya dengan mengenalkan *CSS framework* (kerangka kerja CSS) untuk mempercepat dan merapikan pengerjaan antarmuka. Anda akan mengenal Bootstrap 5.3.3 — dengan batas yang jelas di buku ini: yang dipakai hanya berkas gaya, tanpa satu baris pun JavaScript — lalu mempraktikkannya lewat grid 12 kolom dan kelas *utility* untuk membangun ulang *landing page* Tokosaya versi 2 di folder `tokosaya-bootstrap/`. Bab berikutnya melanjutkan langkah ini ke komponen visual Bootstrap yang siap dipakai di halaman katalog.

## Tujuan Pembelajaran

1. Menjelaskan fungsi, manfaat, dan batasan *CSS framework* dalam pengembangan antarmuka website.
2. Mengidentifikasi arsitektur Bootstrap 5 beserta kelompok fasilitasnya: layout, content, forms, components, helpers, dan utilities.
3. Menyusun *starter template* Bootstrap 5.3.3 melalui CDN CSS tanpa satu baris JavaScript, lengkap dengan komentar penanda tanpa *bundle*.
4. Mengimplementasikan container, breakpoint, dan grid 12 kolom untuk tata letak responsif.
5. Menerapkan kelas *utility* — spacing, display, tipografi, dan warna — dengan pola penamaan yang benar.
6. Menganalisis kapan memakai *utility* Bootstrap dan kapan menulis CSS kustom berbasis token untuk menjaga identitas Tokosaya.
7. Mengevaluasi pilihan *framework* untuk kebutuhan website UMKM melalui pendekatan berbasis kebutuhan (*decision-based*).

## Capaian Pembelajaran

Bab ini mendukung **CPMK 5 — menerapkan CSS framework untuk membangun antarmuka website yang konsisten, responsif, dan tetap beridentitas**. Capaian itu dipecah menjadi empat sub-capaian bab:

- **CPMK 5.1** — menguraikan rasional pemakaian *CSS framework*: efisiensi, konsistensi, dan pola teruji, disertai pengakuan atas batasannya.
- **CPMK 5.2** — membangun tata letak halaman dengan container, breakpoint, dan grid 12 kolom Bootstrap yang responsif di tiga lebar layar.
- **CPMK 5.3** — menerapkan kelas *utility* Bootstrap sesuai pola nama kelasnya, dengan keputusan yang sadar antara *utility*, komponen, dan CSS kustom.
- **CPMK 5.4** — menimpa (overlay) rupa bawaan Bootstrap dengan *design token* Tokosaya melalui berkas CSS kustom, tanpa mengubah berkas pustaka dan tanpa JavaScript.

Ketiga proyek praktik pada bab ini menjadi fondasi langsung milestone M1 (brief dan pilihan kasus final project) yang tercantum pada peta milestone Bab 9–16.

## Kata Kunci

*CSS framework* (kerangka aturan CSS siap pakai beserta pola nama kelasnya), **Bootstrap 5.3.3** (versi Bootstrap yang terkunci di buku ini, termuat lewat CDN CSS), ***CDN*** (*Content Delivery Network* — jaringan penyaji berkas pustaka lewat URL tautan), ***starter template*** (kerangka awal halaman berisi meta viewport dan rangkaian tautan pustaka), ***container*** (pembungkus horizontal yang mengendalikan lebar maksimum isi), ***breakpoint*** (ambang lebar layar yang mengaktifkan perilaku responsif), **grid system** (tata letak 12 kolom untuk menyusun baris dan kolom), ***utility*** (kelas kecil satu-tujuan seperti `mb-3` atau `text-center`), **Bootstrap Icons** (pustaka ikon pendamping Bootstrap versi 1.11.3), **overlay CSS kustom** (teknik menimpa rupa bawaan Bootstrap lewat `css/style.css` yang dimuat setelah pustaka).

## Apersepsi

Kisah UTS pada Bab 8 berakhir manis: mini website Tokosaya tiga halaman lolos rubrik, responsif di tiga lebar perangkat, dan bebas JavaScript. Masalah baru justru muncul dari kabar baik itu. Pemilik Tokosaya meminta pengembangan lanjutan — halaman keranjang, proses checkout, blog promo, plus penyegaran *landing page* — dan mahasiswa magang yang menjadi tim front-end harus menyerahkannya pada minggu ke-9. Tim langsung sadar satu hal: menulis ulang *navbar*, kartu produk, dan *footer* dari nol di setiap halaman berarti menyalin ratusan baris CSS v1, lalu membetulkan selisih kecil seperti jarak 14 px yang terlewat. Di titik ini muncul pertanyaan yang sering muncul di dunia industri: "Bolehkah kita memakai kerangka yang sudah jadi?" Bab ini menjawabnya pelan-pelan — memperkenalkan Bootstrap sebagai alat bantu, bukan bos yang mengatur semuanya — sambil memakai pertanyaan pemandu berikut: bagian mana dari gaya yang benar-benar berulang, dan bagian mana yang harus tetap khas Tokosaya?

## Materi Pembelajaran

### 9.1 CSS Framework: Mengapa dan Kapan

Sebuah ***CSS framework*** adalah kumpulan aturan CSS siap pakai yang dikemas sebagai berkas pustaka, lengkap dengan pola penamaan kelas yang konsisten, sehingga tata letak dan komponen antarmuka bisa dibentuk dengan menambahkan kelas ke HTML, bukan menulis ulang aturan gaya dari nol. Bayangkannya seperti *kit* furnitur siap rak: semua panel, sekrup, dan panduan perakitan sudah tersedia; Anda tinggal memilih susunannya dan menambah sentuhan warna sendiri. Sebaliknya, HTML dan CSS murni pada Bab 18 lebih mirip menjahit pakaian dari pola kain — lebih bebas, tetapi butuh waktu dan keterampilan jahit yang lebih besar.

Mengapa *framework* layak dipakai? Pertama, **efisiensi waktu**: kartu, kolom responsif, dan navigasi yang biasa memakan puluhan baris CSS kini cukup kombinasi kelas. Kedua, **konsistensi**: seluruh angka tim memakai skala jarak, warna, dan ukuran yang sama, sehingga dua halaman yang ditulis orang berbeda tetap serumpun — hal yang sangat dituntut pada sistem informasi sekelas portal akademik atau sistem informasi rumah sakit yang punya puluhan tampilan. Ketiga, **pola responsif teruji**: *breakpoint* rapi dan perilaku tata letaknya sudah disaring pemakaian luas, sehingga mahasiswa lebih sedikit berpelesan dengan *bug* tata letak. Keempat, **dokumentasi dan komunitas**: saat Anda bingung dengan sebuah kelas, jawabannya biasanya sudah ada di dokumentasi resmi, jadi waktu mencari solusi lebih hemat.

Namun *framework* bukan jawaban untuk semua keadaan. Ada setidaknya empat batasan yang perlu Anda pertimbangkan. **Pertama**, tampilan cenderung seragam: ratusan situs yang tak memodifikasi pakai tombol biru khas bawaan, sehingga identitas merek bisa luntur bila tidak ditimpa dengan CSS kustom. **Kedua**, berkas gaya lebih besar dari yang dibutuhkan: halaman dengan tiga komponen tetap memuat seluruh pustaka. **Ketiga**, ada biaya belajar: pola nama kelas harus dihafalkan, dan kesalahan eja kelas punya efek senyap — markup tampak benar, gaya tak muncul. **Keempat**, rupa dan struktur mulai bercampur di HTML: keputusan gaya tersebar sebagai kelas per elemen, berbeda dengan pendekatan token pada Bab 4 yang memusatkan identitas di `:root`.

Kapan sebaiknya Anda menulis sendiri? Ada tiga situasi: (1) proyek kecil dengan satu-dua halaman dan desain sangat khas, misalnya *landing page* kampanye seni; (2) saat pembelajaran konsep dasar — inilah alasan Bab 1–8 sengaja tanpa *framework*, agar *box model*, flexbox, dan grid dipahami dari akarnya; (3) saat pustaka justru menebal berkas untuk kebutuhan yang sedikit. Praktik di kelas ini memakai aturan sederhana: *framework* untuk pola yang berulang dan tenggat yang ketat; CSS kustom untuk identitas. Sistem informasi perpustakaan universitas, misalnya, lazim memakai *framework* agar halaman pendaftaran anggota, katalog, dan dinding pengumuman tampil serupa — sambil menimpa warna sesuai identitas kampus. Itulah jalan yang akan ditempuh Tokosaya pada bab ini.

### 9.2 Bootstrap 5 dan Arsitekturnya

**Bootstrap** adalah *CSS framework* open-source yang awalnya lahir dari pekerjaan internal Twitter: dibuat oleh Mark Otto dan Jacob Thornton, dipublikasikan sebagai pustaka terbuka pada 2011, lalu berkembang menjadi salah satu pustaka gaya yang paling luas dipakai di dunia. Versi 5 dirilis tahun 2021 dan kini sampai pada **versi 5.3.3** — angka yang terkunci untuk seluruh bab kedua buku ini. Buku ini memilih Bootstrap karena tiga alasan: dokumentasi resminya di `getbootstrap.com` sangat lengkap dan mudah diikuti pemula, pemasangannya lewat CDN sangat sederhana, dan pola nama kelasnya mudah dibaca sehingga cocok untuk pembelajaran translasi desain — bukan untuk latihan konfigurasi alat *build*.

Cara memperoleh pustaka ada dua: mengunduh berkasnya lalu menyimpannya di folder proyek, atau menautkannya langsung dari server melalui **CDN** (*Content Delivery Network* — jaringan server penyaji berkas statis). Buku ini dan seluruh proyek `tokosaya-bootstrap/` memakai CDN dengan URL yang terkunci: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`. Untuk pembelajaran, CDN lebih praktis karena tidak perlu instalasi apa pun; cukup tautkan, simpan, dan buka. Kelemahannya sama jujurnya: pemakaian pertama memerlukan jaringan internet. Dokumen resmi Bootstrap juga menyediakan atribut keamanan tambahan (*integrity hash*) pada tautan CDN-nya; buku ini menomorkan tautan murni demi keterbacaan — bila Anda menyebarkan website sungguhan, lihat nilai atribut *integrity* terkini di dokumentasi. ⚠ *version-sensitive*: periksa dokumentasi resmi terbaru (getbootstrap.com).

Arsitektur Bootstrap 5.3 dipamerkan dokumentasi resmi dalam enam kelompok fasilitas. **Layout** berisi container dan *grid system* — inti Bab ini. **Content** berisi dasar-dasar rupa: *reboot* (normalisasi gaya bawaan browser), tipografi, tabel, gambar, dan kode. **Forms** mengatur gaya elemen isi (dibangun penuh di Bab 11). **Components** menyediakan komponen siap pakai — navbar, kartu, *badge*, *alert* — yang menjadi bintang Bab 10. **Helpers** berisi kelas bantu kombinasi seperti *badge* berwarna penuh dan *clearfix*. **Utilities** adalah kelas kecil satu-tujuan untuk jarak, tampilan, perataan, dan warna — materi utama 9.6 dan 9.7. Di sisi lain, ikon tidak termuat dalam berkas CSS inti; Bootstrap menyediakannya sebagai pustaka terpisah bernama **Bootstrap Icons** versi 1.11.3, juga dipasang via CDN. Dengan peta arsitektur ini, Anda tahu ke mana mencari bila suatu gaya "tidak terdapat": apakah itu urusan tata letak (layout), rupa dasar (content), atau kelas kecil (utilities).

Untuk Tokosaya, pembagian kerjanya jadi lebih jelas: Bab 9 menata tulang (container, grid, *utility*), Bab 10 mendandani tubuh (komponen visual: navbar, kartu, *badge*), Bab 11 menyambung urat (form dan keadaan isian), dan Bab 12 merangkum semuanya menjadi *design system* dalam halaman *styleguide*.

### 9.3 Starter Template tanpa JavaScript

Fondasi proyek `tokosaya-bootstrap/` adalah satu berkas *starter template* — kerangka minimal yang memuat seluruh tautan pustaka sekali lalu dipakai ulang untuk tiap halaman baru. *Starter template* penting karena tiga alasan: memastikan `meta viewport` tidak pernah terlupa (syarat responsif sejak Bab 2), membantu menjaga urutan pemanggilan berkas gaya tetap benar, dan membuat struktur tiap halaman proyek tetap seragam sehingga lebih mudah dirawat. Berikut kerangka baku yang dipakai sepanjang Bab 9–16:

File: tokosaya-bootstrap/index.html (versi template dasar)

    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Tokosaya — Belanja Tepat, Kirim Cepat</title>
      <!-- Bootstrap 5.3.3 — CSS via CDN -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
      <!-- Bootstrap Icons 1.11.3 -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
      <!-- Tanpa bootstrap.bundle (JavaScript di luar cakupan mata kuliah) -->
      <!-- Google Fonts: Poppins (heading) + Inter (isi) -->
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
      <!-- CSS kustom Tokosaya — selalu dimuat setelah Bootstrap -->
      <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
      <main class="container py-4">
        <p class="text-center mb-3">
          <a class="btn btn-primary" href="#">Tombol uji Bootstrap</a>
        </p>
        <h1 class="text-center">Selamat datang di Tokosaya</h1>
        <p class="text-center mb-0">
          Gaya Bootstrap termuat lewat CDN, tanpa satu baris JavaScript.
        </p>
      </main>
    </body>
    </html>

Penjelasan: template ini memuat empat tautan pustaka dengan urutan yang sengaja dijaga — Bootstrap, Bootstrap Icons, Google Fonts, lalu `css/style.css` — dan isi halamannya memuat tombol uji untuk memastikan gaya pustaka benar-benar dimuat. Tombol bawaan `.btn-primary` masih menampilkan biru bawaan Bootstrap; pada bagian akhir bab, `css/style.css` akan menggesernya ke indigo khas Tokosaya.

Sekarang masuk ke penjelasan yang paling terus terang di buku ini. Sebaran resmi Bootstrap tidak hanya berisi stylesheet; ia juga menyertakan berkas *bundle* JavaScript (bernama *bootstrap.bundle*) yang menghidupkan perilaku interaktif komponen — menu navigasi yang melipat pada layar kecil, modal yang terbuka-tutup, tab yang berpindah, dan sebagainya. **Buku ini sama sekali tidak memakai berkas tersebut.** Alasannya tegas dan diakui terbuka: mata kuliah dan proyek Tokosaya berpijak pada HTML dan CSS murni tanpa JavaScript, sedangkan *bundle* penuh kode JavaScript. Konsekuensinya dijelaskan apa adanya: komponen yang aslinya interaktif (menu lipat, modal, *carousel*, *accordion*) akan dipelajari dalam bentuk **markup, kelas visual, dan status statis** pada Bab 10; navigasi mobile diupayakan lewat CSS kustom; dan interaksi dinamis (buka-tutup) memang tidak hadir di buku ini. Sebagai catatan yang jujur: para profesional industri biasanya memang memakai *bundle* tersebut — bila kelak Anda belajar JavaScript di mata kuliah pemrograman web, Anda akan berjumpa lagi dengannya. Di dalam proyek buku ini, komentar `<!-- Tanpa bootstrap.bundle (JavaScript di luar cakupan mata kuliah) -->` disimpan di setiap *head* halaman sebagai tanda keputusan yang sadar, bukan kelalaian.

Perhatikan pula urutan tautan berperan besar. Ingat *cascading* dari Bab 3: saat dua aturan ber-*specificity* setara saling bertabrakan, aturan yang termuat **paling belakang menang**. Maka `css/style.css` wajib termuat setelah Bootstrap — jika urutannya tertukar, seluruh gaya identitas Tokosaya akan tertelan gaya bawaan. Google Fonts berada di antara keduanya karena berkasnya hanya memuat definisi *font* agar siap dipanggil.

Terakhir, cara mengecek pemuatannya sangat sederhana: buka halaman di Chrome, lalu di DevTools tab *Network* kedua tautan CDN harus berstatus sukses (angka 200). Bila tombol uji `.btn-primary` tampil dengan latar biru bawaan Bootstrap — berarti stylesheet termuat; bila tombolnya polos — tautan salah eja atau tidak tersambung internet.

### 9.4 Container dan Breakpoint Bootstrap

*Container* adalah wadah horizontal yang membungkus seluruh isi halaman dan mengatur lebar maksimumnya. Bootstrap menyediakan dua wadah utama. Kelas `.container` memberi lebar tetap terbatas: isinya memenuhi layar pada perangkat kecil, lalu berhenti bertambah dan tampil terletak di tengah pada layar lebar. Sebaliknya, kelas `.container-fluid` mengambil pendekatan lebar penuh 100% pada semua ukuran, hanya menyisakan ruang kecil di tepi. Terdapat pula penengahnya, `.container-md` dan seterusnya — penuh sampai breakpoint tertentu, lalu terbatas setelahnya. Angka lebar maksimum `.container` di Bootstrap 5.3 mengikuti breakpoint yang sudah Anda kenal pada Bab 7:

| Ambang viewport | Lebar maksimum `.container` |
|---|---|
| lebih kecil dari 576 px | 100% |
| ≥ 576 px (*sm*) | 540 px |
| ≥ 768 px (*md*) | 720 px |
| ≥ 992 px (*lg*) | 960 px |
| ≥ 1200 px (*xl*) | 1140 px |
| ≥ 1400 px (*xxl*) | 1320 px |

Breakpoint Bootstrap memakai enam nama: *xs* (di bawah 576 px, tanpa awalan kelas), *sm*, *md*, *lg*, *xl*, dan *xxl*. Semua kelas responsif Bootstrap bekerja **mobile-first** dengan logika *min-width*: kelas dengan awalan `md` aktif pada 768 px "ke atas, bukan di antara". Ini persis strategi yang Anda latih saat media query di Bab 7; Bootstrap hanya membungkusnya menjadi nama kelas sehingga aturannya bisa ditulis di HTML. Diagram berikut menggambarkan perkembangan lebar isi saat viewport melebar:

```
Ponsel (di bawah 576 px)   [===========================]  100%
≥576 px                     [====== 540 px ======]
≥768 px                     [======== 720 px ========]
≥992 px                     [========== 960 px ==========]
≥1200 px                    [============ 1140 px ============]
```

Kapan memilih salah satunya? `.container` adalah pilihan aman untuk isi yang dibaca manusia — teks terlalu lebar melemahkan keterbacaan, dan 1140 px membuat baris teks tetap nyaman. `.container-fluid` cocok untuk bilah yang memang ingin menempel kiri-kanan seperti *footer* gelap atau bilah pengumuman. Pada proyek Tokosaya, semua *section* utama memakai `.container` supaya tata letak terbaca nyaman dan konsisten, dan hal ini terwujud di Praktikum bab ini.

### 9.5 Grid System 12 Kolom

Sistem *grid* bisa dibilang jantung Bootstrap. Strukturnya terdiri dari tiga lapis: **container** membungkus, **row** (baris) menyusun kolom agar sejajar, dan **col** (kolom) berisi konten. Setiap `row` dibayangkan sebagai penggaris dengan 12 garis kolom yang memungkinkan pembagian paling lentur: dibagi dua (6+6), tiga (4+4+4), empat (3×4), enam (2×6), hingga kombinasi tidak seragam seperti 8+4. Angka 12 dipilih karena kaya faktor pemberian — setengah, sepertiga, seperempat, seperenam — sehingga hampir semua tata letak portal, katalog, dan panel laporan dapat diwakili tanpa memecah penggaris. Kombinasi yang paling sering dipakai untuk halaman administrasi adalah 8+4 (konten utama dan *sidebar*), persis pola tabel laporan yang Anda bangun dengan CSS Grid di Bab 7 — nanti di Bab 9 ini cukup tulis `col-lg-8` dan `col-lg-4`.

Teknisnya, `.row` adalah *flex container* (mewarisi logika flexbox Bab 6), sedangkan tiap `.col-*` menerima *padding* horizontal yang membentuk ***gutter*** (celah antarkolom). Jika Anda ingin mengatur jarak itu, kelas utilitas `g-3` hingga `g-5` pada `row` bisa dipakai untuk mengatur jarak antarkolom sekaligus antarbaris. Tiga kelas yang wajib Anda asah:

- `col-12` — kolom penuh pada **semua** ukuran (tanpa awalan breakpoint).
- `col-md-6` — setengah lebar mulai 768 px **ke atas**; di bawah itu tetap penuh.
- `col-lg-3` — seperempat lebar mulai 992 px **ke atas**.

Pola kombinasi lazim: `col-12 col-md-6 col-lg-3` berarti satu kartu per baris di ponsel, dua kartu di tablet, empat kartu di desktop. Karena mobile-first, kelas tanpa awalan menjadi dasar, lalu tiap breakpoint yang lebih besar menimpanya bila kelasnya ada. Bootstrap juga menyediakan `col` tanpa angka (membagi merata), `col-auto` (lebar mengikuti isi), dan *shorthand* `row-cols-*` untuk membagi baris sama lebar tanpa menulis kelas di tiapkolom. Berikut peta perilaku grid untuk daftar 8 produk baku Tokosaya:

```
8 kartu produk, kelas col-12 col-md-6 col-lg-3

Di ponsel (<768 px)   [ 100% ]              → 1 kartu per baris (8 baris)
Di tablet (≥768 px)   [ 50% ][ 50% ]        → 2 kartu per baris (4 baris)
Di desktop (≥992 px)  [25%][25%][25%][25%]  → 4 kartu per baris (2 baris)

Penggaris 12 garis:  |--|--|--|--|--|--|--|--|--|--|--|--|
col-lg-3 menindih 3 garis; 4 kolom × 3 garis = 12 garis penuh.
```

Prinsip yang perlu Anda pegang di sini: **kolom harus menjadi anak langsung dari `row`**. Menaruh `.col-*` di luar `.row` melepas kolom dari perhitungan *gutter* dan penyelajanan, sebab *padding* kolom tak lagi dikompensasi margin negatif baris. Kesalahan ini begitu lumrah pada pemula sehingga Praktikum menyisipkan *troubleshooting* khusus untuknya.

### 9.6 Utilities: Spacing, Display, Color, dan Pola Nama Kelas

Inilah definisi resmi istilah yang jadi pusat bab ini: ***utility*** adalah kelas CSS kecil yang bertugas mengubah **satu properti visual** saja — satu kelas, satu maksud, tanpa aturan tambahan. Analoginya seperti label stiker: "tebal", "jauh 3 satuan", "rata tengah" — tempel, langsung berlaku, mudah dibaca. Bootstrap 5 membangun kekuatannya justru dari ratusan *utility* seperti `mb-3`, `p-4`, `text-center`, dan `d-none`. Dengan begitu, gaya sekali pakai tidak perlu menambah baris di `css/style.css` — dan tetap lebih rapi daripada gaya *inline* karena masih mengikuti skala dan nama yang seragam.

Pola nama kelas *utility* Bootstrap menurut pola **properti – sisi – (breakpoint) – nilai**. Dibaca seperti titik ganda (dashed) yang digabung: `mb-3` berarti *m*argin-*b*ottom skala 3; `p-lg-4` berarti *p*adding seluruh sisi mulai *lg*; `d-md-block` berarti *d*isplay *block* mulai breakpoint *md*. Skala angka 0–5 merujuk satuan spasi bawaan: 0 = 0, 3 = 1 rem, 5 = 3 rem — bertalian dengan skala jarak 8 px yang Anda latih di Bab 5 dan 7. Tabel berikut merangkum pola yang paling sering dipakai:

| Kelas | Arti | Perilaku |
|---|---|---|
| `mb-3` | *margin-bottom* skala 3 | jarak bawah 1 rem (16 px) |
| `p-4` | *padding* keempat sisi skala 4 | jarak dalam 1,5 rem |
| `px-4 py-2` | *padding* kanan-kiri 4, atas-bawah 2 | jarak asimetris |
| `mx-auto` | *margin* kiri-kanan otomatis | elemen tampil di tengah |
| `d-flex` | *display: flex* | anak elemen jadi item flex |
| `d-none d-md-block` | sembunyi bawaan, tampil ≥768 px | kontrol responsif |
| `text-center` | *text-align: center* | teks diatur ke tengah |
| `col-md-4` | kolom sepertiga lebar ≥768 px | grid responsif |
| `fw-semibold` | *font-weight* 600 | penekanan sedang |
| `g-4` | *gutter* skala 4 | jarak antarkolom pada `row` |

Pola `d-none d-md-block` layak Anda hafalkan karena sangat berguna: elemen disembunyikan di ponsel (d-*none*), lalu mulai 768 px muncul kembali sebagai *block* (d-*md*-block). Kombinasi dua kelas ini menghadirkan logika *min-width* ke layar tanpa satu baris media query.

Kapan memilih *utility* dan kapan menulis CSS kustom? Buku ini memakai tiga aturan sederhana. **Pertama**, *utility* dipakai untuk gaya umum sekali pakai: jarak, perataan, tampil, sembunyi, warna semantik. **Kedua**, ketika pola sama berulang dalam banyak elemen — seperti tampilan kartu produk dan rupa harganya — buat kelas kustom berpola `blok-elemen` (misal `produk-card`, `produk-harga`) di `css/style.css`; memperbarui satu kelas mengubah seluruh tempat pemakaiannya sekaligus. **Ketiga**, identitas merek tetap berpangkal pada *design token* Bab 4 di `:root`; *utility* Bootstrap hanya menyusun bentuk, sedangkan warna dan huruf identitas tetap dikendalikan token. HTML yang dipenuhi belasan kelas *utility* pada satu elemen adalah sinyal bagi pemula: pola berulang sebaiknya diangkat menjadi kelas kustom.

### 9.7 Utilities Tipografi dan Warna

Kelompok *utility* berikut mengambil alih urusan tipografi dan warna yang pada Bab 4 Anda tulis sendiri sebagai aturan CSS. Untuk ukuran huruf, Bootstrap menyediakan `fs-1` sampai `fs-6` (sebanding hierarki `h1`–`h6`), kelas `display-1` sampai `display-6` untuk judul berukuran menonjol, `lead` untuk paragraf pengantar berukuran lebih besar, dan tebal huruf lewat `fw-normal`, `fw-semibold`, dan `fw-bold`. Tata letak teks diatur `text-start`, `text-center`, dan `text-end`, masing-masing dapat diawali breakpoint seperti `text-md-start`. Satu aturan aksesibilitas penting tetap berlaku dari Bab 2: gunakan elemen `h1`–`h6` yang semantik untuk judul, lalu **tambahkan** kelas ukuran bila perlu — `h3 class="fs-5"` — alih-alih membuat `div` besar yang terlihat seperti judul. Pembaca layar (*screen reader*) tidak membaca div sebagai kepala bagian, dan struktur kepala yang benar adalah kunci aksesibilitas yang akan diaudit penuh di Bab 13.

Untuk warna, Bootstrap membagi dua arah: kelas **teks** (`text-primary`, `text-success`, `text-danger`, `text-body`, `text-body-secondary`) dan kelas **latar** (`bg-body`, `bg-body-tertiary`, `bg-dark`, `bg-success`). Nama-nama berbasis peran (*semantic naming*) ini — *primary*, *secondary*, *success*, *danger*, *warning* — bukan nama warna mentah, melainkan peran warna: `text-danger` berarti "teks untuk pesan bahaya", bukan "warna merah tertentu". Pola gabungan `text-bg-*` (misal `text-bg-success`) memberi badge latar penuh dengan warna teks yang otomatis kontras.

Ada satu penyesuaian penting yang khusus untuk proyek Tokosaya: palet bawaan Bootstrap **tidak sama** dengan palet identitas kita. Warna *primary* bawaan Bootstrap adalah biru, bukan indigo `#4F46E5` milik Tokosaya; begitu pula nuansa kuning *warning*-nya berasal dari palet Bootstrap, bukan amber `#F59E0B` bawaan Bab 4. Karena palet indigo–amber adalah bagian identitas yang sudah ditetapkan sejak Bab 4, rupa bawaan pustaka ini perlu ditimpa dengan **overlay CSS kustom** — tanpa menyentuh berkas Bootstrap dan tanpa JavaScript. Caranya: `css/style.css` memuat *design token* Tokosaya di `:root`, lalu menimpa kelas komponen dengan kelas kustom (`btn-tokosaya`, `badge-unggulan`) dan menyelaraskan warna *primary* lewat variabel `--bs-primary-rgb` yang dikonsumsi kelas warna teks dan latar Bootstrap 5.3. Cuplikannya seperti berikut (versi lengkap ada di Praktikum):

File: tokosaya-bootstrap/css/style.css (cuplikan overlay; versi lengkap ada di Praktikum)

```css
/* kustom — overlay dua token utama Tokosaya di atas Bootstrap */
:root {
  --clr-primary: #4F46E5;
  --clr-primary-dark: #4338CA;
  /* menyelaraskan warna *primary* Bootstrap (kelas text-*, bg-*, badge) */
  --bs-primary-rgb: 79, 70, 229;
}

/* tombol utama Tokosaya dibentuk dari kelas btn + kelas kustom */
.btn-tokosaya {
  background-color: var(--clr-primary);
  border-color: var(--clr-primary);
  color: #FFFFFF;
}
```

Penjelasan: overlay bekerja lewat dua mekanisme kaskade. Pertama, urutan pemuatan — `css/style.css` termuat setelah stylesheet Bootstrap sehingga aturan ber-*specificity* setara menang oleh urutan. Kedua, penyesuaian variabel CSS — kelas warna Bootstrap 5.3 mengonsumsi `--bs-primary-rgb`, sehingga mengubah nilai variabelnya menggeser warna kelas-kelas tersebut ke indigo. Perhatikan pembagian kerjanya dengan jujur: kelas warna semantik Bootstrap dipertahankan bila perannya cocok (*success* untuk badge "Tersedia"), sedangkan identitas merek dibentuk kelas kustom. Perilaku variabel tema antar rilis dapat berbeda, sehingga overlay tombol dikerjakan kelas kustom yang eksplisit dan tahan perubahan. ⚠ *version-sensitive*: periksa dokumentasi resmi terbaru (getbootstrap.com) bila memakai versi lain.

### 9.8 Wawasan Industri: Bootstrap vs Tailwind CSS

Supaya gambaran industri Anda lebih utuh, Anda juga perlu mengenal rival utama Bootstrap: **Tailwind CSS** (versi 3.x). Keduanya sama-sama *framework* CSS populer, tetapi berbeda filosofi. Bootstrap lahir sebagai pustaka **komponen-siaw**: kelas seperti `.card` atau `.btn-primary` mendandani satu kesatuan utuh sekaligus, sehingga antarmuka cepat jadi namun rupa cenderung seragam. Tailwind memilih arah **utility-first**: antarmuka disusun dari kelas-kelas atomik yang sangat kecil dan dikomposisi langsung di HTML, memberi kebebasan bentuk besar namun menuntut penggabungan banyak kelas pada tiap elemen — dan pada pemakaian penuhnya lazim ditemani alat perakit (*build tool*) untuk mengurus berkas CSS akhir. Keduanya pada inti paling murni adalah sekumpulan CSS; perilaku interaktif di dunia industri tetap datang dari kode JavaScript terpisah di luar cakupan buku ini. Buku ini memilih Bootstrap karena komponen siap pakai dan dokumentasinya ramah untuk pemula, sementara Tailwind cukup dikenal namanya tanpa contoh kode — sebagaimana ketentuan kontrak buku ini. ⚠ *version-sensitive*: periksa dokumentasi resmi terbaru (getbootstrap.com / tailwindcss.com).

| Aspek | Bootstrap 5.3 | Tailwind CSS 3.x |
|---|---|---|
| Filosofi | komponen siap pakai | utility-first (kelas atomik) |
| Bentuk kelas | kelas komponen + utility standar | ribuan kelas atomik |
| Komponen siap pakai | banyak (navbar, kartu, badge, form) | tak disediakan berantai; disusun sendiri |
| Proses pembangunan | cukup tautan CDN, tanpa alat pembangun | lazim dengan alat pembangun pada pemakaian penuh |
| Identitas merek | perlu overlay kustom agar tak seragam | bebas bentuk, tetapi markupnya ramai |
| Kurva awal bagi pemula | lebih landai: kelas terbaca manusia | lebih curam: hafalan pola kelas |
| Posisi dalam buku ini | dipakai sepanjang Bab 9–15 | hanya disebut pada bab ini |

## Konsep Penting

| Konsep | Inti pemahaman |
|---|---|
| *CSS framework* | kumpulan aturan dan kelas siap pakai yang mempercepat serta menyelaraskan gaya antarmuka. |
| Bootstrap 5.3.3 | versi terkunci buku; dipakai hanya berkas CSS-nya lewat CDN, tanpa *bundle* JavaScript. |
| CDN | jaringan penyaji berkas pustaka; pustaka termuat hanya dengan menautkan URL di `<head>`. |
| *Starter template* | kerangka minimal tiap halaman: meta viewport, CDN Bootstrap, Bootstrap Icons, Google Fonts, `css/style.css` terakhir. |
| `.container` vs `.container-fluid` | lebar terkuratur per breakpoint (540/720/960/1140/1320 px) melawan lebar penuh 100%. |
| *Breakpoint* Bootstrap | xs/sm/md/lg/xl/xxl = 576/768/992/1200/1400 px; berlaku *min-width* (mobile-first, berlaku ke atas). |
| `.row` | baris flex yang mengurung kolom; wajib agar *gutter* dan lebar kolom tersusun benar. |
| `col-{bp}-{n}` | lebar kolom per breakpoint: `col-12`, `col-md-6`, `col-lg-3`; angka menindih 12 garis penggaris. |
| *Gutter* | jarak antarkolom; diatur kelas `g-3`–`g-5` pada `row`. |
| *Utility* | kelas satu-properti (`mb-3`, `p-4`, `d-none`, `text-center`, `fs-5`, `fw-bold`). |
| Pola nama *utility* | properti–sisi–breakpoint–nilai; kelas berawalan breakpoint berlaku mulai ambang itu ke atas. |
| `text-*` / `bg-*` / `text-bg-*` | paket kelas warna semantik berperan (primary, success, danger, warna berlapis pada badge). |
| *Overlay* CSS kustom | `css/style.css` dimuat setelah Bootstrap; token dan kelas Tokosaya mengubah rupa tanpa menyentuh pustaka. |
| Bootstrap Icons 1.11.3 | pustaka ikon terpisah yang memerlukan tautan tersendiri; dipanggil kelas `bi bi-nama-ikon`. |

## Contoh Kode

Dua berkas latihan berikut adalah halaman penuh yang *runnable* — silakan salin, simpan, lalu buka di browser: yang pertama melatih grid 12 kolom dengan kolaborasi container-row-col, dan yang kedua melatih kelompok kelas *utility*.

File: tokosaya-bootstrap/latihan-grid.html

    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Latihan Grid 12 Kolom — Tokosaya</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
      <!-- Tanpa bootstrap.bundle (JavaScript di luar cakupan mata kuliah) -->
    </head>
    <body>
      <main class="container py-4">
        <h1>Latihan Grid 12 Kolom</h1>
        <p class="mb-4 text-body-secondary">Ubah lebar jendela dan amati perpindahan tata letak.</p>

        <!-- Tiga panel sama lebar mulai breakpoint md -->
        <section class="row g-3 mb-4">
          <div class="col-12 col-md-4"><div class="p-3 bg-body-tertiary rounded-3">Panel Menu</div></div>
          <div class="col-12 col-md-4"><div class="p-3 bg-body-tertiary rounded-3">Panel Katalog</div></div>
          <div class="col-12 col-md-4"><div class="p-3 bg-body-tertiary rounded-3">Panel Kontak</div></div>
        </section>

        <!-- Konten utama 8 garis, sidebar 4 garis, mulai breakpoint lg -->
        <section class="row g-3">
          <div class="col-12 col-lg-8"><div class="p-3 bg-body-tertiary">Konten Utama Laporan</div></div>
          <div class="col-12 col-lg-4"><div class="p-3 bg-body-tertiary">Sidebar Ringkasan</div></div>
        </section>
      </main>
    </body>
    </html>

Penjelasan: berkas ini memuat satu `<h1>` dan seluruh tata letak bersandar di satu `.container`. Section pertama memakai `col-12 col-md-4` — tiga panel bertumpuk penuh di ponsel lalu sepertiga lebar mulai 768 px — dan `g-3` memberi jarak antarpanel tanpa menambah CSS. Section kedua mereplikasi pola tata letak panel laporan 8+4 yang lazim pada sistem informasi: konten dua kali lipat lebar *sidebar* mulai 992 px, keduanya bertumpuk di layar sempit. Bagian dalam tiap kolom diberi kelas `p-3 bg-body-tertiary rounded-3` agar batas kotak terlihat saat latihan, tanpa satu baris CSS kustom.

File: tokosaya-bootstrap/latihan-utilitas.html

    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Latihan Kelas Utility — Tokosaya</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
      <!-- Tanpa bootstrap.bundle (JavaScript di luar cakupan mata kuliah) -->
    </head>
    <body>
      <main class="container py-4">
        <h1 class="mb-3">Latihan Kelas Utility</h1>
        <p class="mb-4 text-body-secondary">Satu kelas, satu maksud: setiap utility mengubah satu properti.</p>

        <section class="mb-4">
          <h2 class="h4 mb-3">Spacing</h2>
          <div class="p-3 mb-2 bg-body-tertiary">Kotak dengan p-3 dan mb-2</div>
          <div class="px-4 py-2 bg-body-tertiary">Kotak dengan px-4 dan py-2</div>
        </section>

        <section class="mb-4">
          <h2 class="h4 mb-3">Display dan perataan</h2>
          <div class="d-flex flex-wrap gap-3 mb-3">
            <span class="d-inline-block px-3 py-2 bg-body-tertiary">Item pertama</span>
            <span class="d-inline-block px-3 py-2 bg-body-tertiary">Item kedua</span>
            <span class="d-none d-md-inline-block px-3 py-2 bg-body-tertiary">Hanya tampil mulai md</span>
          </div>
          <p class="text-center fw-semibold mb-0">Teks ini rata tengah dan setengah tebal</p>
        </section>

        <section>
          <h2 class="h4 mb-3">Tipografi dan warna</h2>
          <p class="fs-3 fw-semibold text-primary mb-1">Judul bergaya fs-3 dengan warna primary bawaan</p>
          <p class="text-body-secondary mb-0">Teks sekunder lebih redup untuk keterangan pendukung.</p>
        </section>
      </main>
    </body>
    </html>

Penjelasan: halaman ini seperti etalase kecil untuk kelas *utility*. Bagian *spacing* membandingkan `p-3` (semua sisi) dengan `px-4 py-2` (horizontal-lebar, vertikal-rendah) — pola dua huruf pertama menunjuk properti dan sisi. Bagian display menunjukkan `d-flex flex-wrap gap-3` menggantikan pola flexbox manual dari Bab 6 tanpa satu baris CSS, dan kombinasi `d-none d-md-inline-block` menyembunyikan satu label di ponsel lalu memunculkannya mulai 768 px. Bagian terakhir memakai `fs-3`, `fw-semibold`, `text-primary`, dan `text-body-secondary` — perhatikan bahwa `text-primary` pada halaman latihan ini masih warna biru bawaan Bootstrap karena berkas `css/style.css` tidak termuat; overlay indigo baru bekerja setelah CSS kustom di Praktikum.

## Penjelasan Kode

Penjelasan: **Contoh 1 — `latihan-grid.html`.** Kepala berkas mengikuti *starter template*: kedua tautan CDN CSS persis versi terkunci (Bootstrap 5.3.3 dan Bootstrap Icons 1.11.3), lalu komentar penanda tanpa *bundle*. Tubuh halaman menunjukkan kontrak tiga lapis grid: `.container` mengurung, `.row` menyusun kolom agar sejajar, `.col-*` mengisi. Angka di belakang `col-` adalah jumlah garis penggaris yang ditindih: `col-4` = 3 garis, `col-8` = 8 garis dari 12 (4×3 = 12 dan 8+4 = 12, karenanya baris selalu kembali penuh 12 sehingga rapi). Kelas `g-3` pada `row` menetapkan jarak antarkolom lewat mekanisme *gutter* bawaan, mengalihkan tugas *gap* di CSS Grid Bab 7 — alasan di baliknya: *gutter* diimplementasikan sebagai *padding* pada kolom yang dikompensasi margin negatif pada baris, sehingga tepi luar kolom tetap segaris dengan *container*.

Penjelasan: **Contoh 2 — `latihan-utilitas.html`.** Halaman ini memperlihatkan pola nama kelas yang dibacakan pada 9.6. Perhatikan tiga hal. Pertama, `p-3` dan `px-4 py-2` memakai pasangan huruf: huruf pertama menunjuk properti (p = *padding*, m = *margin*), huruf kedua menunjuk sisi (b = bawah, t = atas, x = kiri-kanan, y = atas-bawah) — sehingga `mb-3` bisa dibaca "margin bawah, skala 3". Kedua, `d-none d-md-block` adalah pola dua kelas yang berkolaborasi: pertama menyembunyikan di semua ukuran, lalu memunculkannya balik mulai *md* — inilah cara mobile-first diekspresikan lewat kelas. Ketiga, kelas `h4` ditempelkan pada elemen `h2` bukan untuk menggantikan semantik, melainkan mengurunkan ukurannya: struktural tetap `h2` (bacaan perekam layar tetap benar), visual ukuran `h4` — pemisahan semantik dan rupa yang akan dipakai terus di Bab 10.

Penjelasan: **Cuplikan overlay pada materi 9.7 — `css/style.css`.** Berkas kustom dibaca SETELAH stylesheet Bootstrap karena urutan tautan di *head*: Bootstrap → Icons → Fonts → kustom. Dari dua aturan ber-*specificity* setara, aturan yang termuat belakangan menang (kaskade Bab 3). Variabel `--bs-primary-rgb` disesuaikan ke `79, 70, 229` — padanan RGB dari `#4F46E5` — supaya kelas warna Bootstrap yang mengonsumsinya (*text-primary*, *bg-primary*, *badge* berwarna) berpindah ke indigo Tokosaya; tombol bawaan sengaja tidak disentuh langsung karena warnanya dikomposisi statis, dan itulah sebabnya tombol khas dibentuk sebagai kelas kustom `btn-tokosaya` yang dikomposisikan bersama kelas `btn`. Strategi ini menjaga pustaka tetap utuh: pembaruan Bootstrap kelak tidak merusak satu pun berkas karena tidak ada berkas pustaka yang diedit.

## Praktikum

### Tujuan Praktikum

Membangun ulang *landing page* Tokosaya versi 2 di folder `tokosaya-bootstrap/` dengan Bootstrap 5.3.3 murni (grid + *utility*) ditambah CSS kustom minimal berbasis token — tanpa satu baris JavaScript. Hasilnya adalah halaman satu berkas `index.html` yang terukur konsisten responsif dari ponsel hingga desktop, dengan palet indigo–amber Tokosaya tetap menjadi identitas.

### Kebutuhan

1. Pengetahuan Bab 1–8 (HTML semantik, token CSS, flexbox, media query) — grid Bootstrap akan memetakan semuanya ke kelas jadi.
2. Editor Visual Studio Code dan Google Chrome dengan DevTools.
3. Folder proyek baru `tokosaya-bootstrap/` beserta subfolder `css/` dan `img/`.
4. Koneksi internet saat pertama kali membuka halaman, karena pustaka termuat dari CDN.
5. Data 8 produk baku Tokosaya dan aset gambar dari proyek `tokosaya-css/` (folder `img/`) — atau gambar kotak sederhana buatan sendiri dengan nama berkas sama.

### Persiapan

1. Buat folder `tokosaya-bootstrap/`, di dalamnya subfolder `css/` dan `img/`. Salin isi folder `img/` dari `tokosaya-css/` ke `tokosaya-bootstrap/img/` bila sudah tersedia; berkas antar proyek dapat dipakai ulang karena namanya baku: `produk-keyboard-kx210.svg`, `produk-mouse-mw88.svg`, `produk-headphone-hs15.svg`, `produk-monitor-mr241.svg`, `produk-flashdrive-fd64.svg`, `produk-charger-cp30.svg`, `produk-speaker-bt5.svg`, `produk-webcam-wc720.svg`. Bila folder belum ada, siapkan gambar kotak SVG sederhana dengan nama-nama berkas tersebut.
2. Sebelum mulai, tuliskan tiga baris poin tata letak ini di kertas: navigasi (logo kiri, 4 tautan + keranjang), hero teks tengah, 8 kartu produk, keunggulan 3 poin, footer 3 kolom.
3. Kumpulkan data produk baku dari tabel §5.2: nama, kategori, harga tanpa spasi (`Rp650.000`), badge, dan deskripsi singkat — yang akan diisikan ke kartu.
4. Buka halaman dokumentasi resmi getbootstrap.com docs 5.3 sebagai rujukan ejaan kelas selama praktik.

### Langkah Kerja

1. **Buat kerangka halaman.** Tulis `index.html` mengikuti *starter template* 9.3 — meta viewport, CDN Bootstrap 5.3.3, Bootstrap Icons 1.11.3, komentar tanpa *bundle*, Google Fonts, lalu tautan `css/style.css` paling belakang. Simpan, buka di browser, dan pastikan tombol uji `.btn-primary` tampil bergaya (berarti stylesheet CDN termuat).
2. **Tulis navigasi statis.** Di dalam `<nav class="navbar bg-body-tertiary">`, letakkan `.container` berisi `.navbar-brand` Tokosaya dan daftar tautan Beranda, Katalog, Tentang, Kontak, plus Keranjang dengan ikon `bi bi-cart3`. Karena tidak memakai *bundle* JavaScript, tautan dibiarkan selalu terlihat dengan `d-flex flex-row flex-wrap gap-2` — menu lipat interaktif memang di luar cakupan dan akan dibahas pola CSS-nya di Bab 10.
3. **Bangun hero.** Di bawah nav, buat `<header class="hero">` berisi judul "Peralatan Kerja Digital untuk Semua", subjudul baku, dan tombol "Lihat Katalog" menuju `katalog.html`. Judul diberi kelas `display-5 fw-bold`, paragraf diberi `lead`, dan tombol diberi kelas kustom `hero-cta` (nantinya amber). Latar dan warna teks dikendalikan kelas `.hero` di `style.css`.
4. **Susun section keunggulan.** Buat `<section class="container py-5">` dengan `h2` lalu `row g-4` berisi tiga `article` bermuatan ikon (`bi bi-tags`, `bi bi-lightning-charge`, `bi bi-shop`) dan `col-12 col-md-4`. Ikon diberi kelas `text-primary` dan `fs-1`.
5. **Susun grid produk.** Buat `<section class="container py-5">` berjudul "Produk Unggulan" dan `row g-4`. Buat delapan kartu untuk 8 produk baku (tabel §5.2), setiap kartu kelas `col-12 col-md-6 col-lg-3` dan isi kartu memakai `.card produk-card h-100` dengan badge (`text-bg-success` untuk Tersedia, `text-bg-warning` untuk Stok Terbatas, `text-bg-primary` untuk Baru, kelas kustom `badge-unggulan` untuk Best Seller), judul produk, kategori, harga, deskripsi, dan tombol `btn btn-tokosaya` bertuliskan "Lihat Detail".
6. **Tutup dengan footer.** Buat `<footer class="footer-tokosaya pt-5 pb-4">` berisi `container` dan `row` tiga kolom: profil singkat Tokosaya, navigasi tautan, dan kontak baku (Jl. Digital Raya No. 10, Jakarta; halo@tokosaya.id; (021) 555-0199) berikut baris tagline "Belanja Tepat, Kirim Cepat".
7. **Tulis `css/style.css`.** Isikan token Tokosaya di `:root`, tipografi Poppins/Inter, kelas `.hero`, `hero-cta`, `produk-card`, `produk-harga`, `badge-unggulan`, `btn-tokosaya`, dan `footer-tokosaya`, termasuk perhatikan penyelarasan `--bs-primary-rgb` ke indigo. Simpan.
8. **Uji responsif dan periksa konsistensi.** Di DevTools *device toolbar*, amati 375 px (semua kartu penuh), 768 px (dua kartu per baris), dan 1200 px (empat kartu per baris; 8 produk = dua baris rapi). Pastikan tidak ada berkas `.js` di folder proyek dan halaman tak memanggil pustaka JavaScript apa pun.

### Kode

File: tokosaya-bootstrap/index.html

    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Tokosaya — toko online UMKM aksesori dan elektronik komputer. Belanja Tepat, Kirim Cepat.">
      <title>Tokosaya — Belanja Tepat, Kirim Cepat</title>
      <!-- Bootstrap 5.3.3 — CSS via CDN -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
      <!-- Bootstrap Icons 1.11.3 -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
      <!-- Tanpa bootstrap.bundle (JavaScript di luar cakupan mata kuliah) -->
      <!-- Google Fonts: Poppins (heading) + Inter (isi) -->
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
      <!-- CSS kustom dimuat paling belakang agar dapat menimpa rupa bawaan -->
      <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
      <!-- Navigasi statis: markup Bootstrap, tanpa perilaku interaktif -->
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand fw-semibold" href="index.html">Tokosaya</a>
          <ul class="navbar-nav d-flex flex-row flex-wrap gap-2 mb-0">
            <li class="nav-item"><a class="nav-link" href="index.html">Beranda</a></li>
            <li class="nav-item"><a class="nav-link" href="katalog.html">Katalog</a></li>
            <li class="nav-item"><a class="nav-link" href="tentang.html">Tentang</a></li>
            <li class="nav-item"><a class="nav-link" href="kontak.html">Kontak</a></li>
            <li class="nav-item">
              <a class="nav-link" href="keranjang.html">
                <i class="bi bi-cart3" aria-hidden="true"></i> Keranjang
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Hero Tokosaya: latar gradasi dari kelas .hero pada style.css -->
      <header class="hero text-center py-5">
        <div class="container">
          <h1 class="hero-title display-5 fw-bold mb-3">
            Peralatan Kerja Digital untuk Semua
          </h1>
          <p class="lead mb-4">
            Keyboard, mouse, hingga monitor — pilih perangkat kerja Anda dengan harga UMKM yang jujur.
          </p>
          <a class="btn hero-cta px-4" href="katalog.html">Lihat Katalog</a>
        </div>
      </header>

      <main>
        <!-- Keunggulan Tokosaya: tiga poin dengan ikon -->
        <section class="container py-5">
          <h2 class="text-center mb-4">Kenapa Belanja di Tokosaya</h2>
          <div class="row g-4">
            <article class="col-12 col-md-4 text-center">
              <i class="bi bi-tags fs-1 text-primary" aria-hidden="true"></i>
              <h3 class="h5 mt-3">Harga Jujur</h3>
              <p class="text-body-secondary mb-0">Harga dicantumkan apa adanya, tanpa biaya tersembunyi di kasir.</p>
            </article>
            <article class="col-12 col-md-4 text-center">
              <i class="bi bi-lightning-charge fs-1 text-primary" aria-hidden="true"></i>
              <h3 class="h5 mt-3">Layanan Cepat</h3>
              <p class="text-body-secondary mb-0">Pesanan diproses pada hari yang sama untuk stok yang tersedia.</p>
            </article>
            <article class="col-12 col-md-4 text-center">
              <i class="bi bi-shop fs-1 text-primary" aria-hidden="true"></i>
              <h3 class="h5 mt-3">Dukungan Lokal</h3>
              <p class="text-body-secondary mb-0">UMKM lokal yang mengutamakan pelajar dan pekerja lepas.</p>
            </article>
          </div>
        </section>

        <!-- Grid produk: 8 produk baku, 1/2/4 kolom per breakpoint -->
        <section class="container py-5">
          <h2 class="text-center mb-4">Produk Unggulan</h2>
          <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-3">
              <article class="card produk-card h-100">
                <img class="card-img-top" src="img/produk-keyboard-kx210.svg" alt="Keyboard Mekanis KX-210">
                <div class="card-body d-flex flex-column">
                  <span class="badge badge-unggulan align-self-start mb-2">Best Seller</span>
                  <h3 class="card-title h6">Keyboard Mekanis KX-210</h3>
                  <p class="card-text small text-body-secondary mb-2">Aksesori Input</p>
                  <p class="produk-harga mb-2">Rp650.000</p>
                  <p class="card-text small">Keyboard mekanis 87 tombol dengan switch biru untuk kerja lama yang nyaman.</p>
                  <a class="btn btn-tokosaya mt-auto" href="katalog.html">Lihat Detail</a>
                </div>
              </article>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <article class="card produk-card h-100">
                <img class="card-img-top" src="img/produk-mouse-mw88.svg" alt="Mouse Wireless MW-88">
                <div class="card-body d-flex flex-column">
                  <span class="badge text-bg-success align-self-start mb-2">Tersedia</span>
                  <h3 class="card-title h6">Mouse Wireless MW-88</h3>
                  <p class="card-text small text-body-secondary mb-2">Aksesori Input</p>
                  <p class="produk-harga mb-2">Rp185.000</p>
                  <p class="card-text small">Mouse wireless 2,4 GHz dengan sensor presisi 1600 DPI.</p>
                  <a class="btn btn-tokosaya mt-auto" href="katalog.html">Lihat Detail</a>
                </div>
              </article>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <article class="card produk-card h-100">
                <img class="card-img-top" src="img/produk-headphone-hs15.svg" alt="Headphone Studio HS-15">
                <div class="card-body d-flex flex-column">
                  <span class="badge text-bg-success align-self-start mb-2">Tersedia</span>
                  <h3 class="card-title h6">Headphone Studio HS-15</h3>
                  <p class="card-text small text-body-secondary mb-2">Audio</p>
                  <p class="produk-harga mb-2">Rp425.000</p>
                  <p class="card-text small">Headphone over-ear dengan bantalan lembut untuk rapat audio jangka panjang.</p>
                  <a class="btn btn-tokosaya mt-auto" href="katalog.html">Lihat Detail</a>
                </div>
              </article>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <article class="card produk-card h-100">
                <img class="card-img-top" src="img/produk-monitor-mr241.svg" alt="Monitor IPS 24 inci MR-241">
                <div class="card-body d-flex flex-column">
                  <span class="badge badge-unggulan align-self-start mb-2">Best Seller</span>
                  <h3 class="card-title h6">Monitor IPS 24" MR-241</h3>
                  <p class="card-text small text-body-secondary mb-2">Layar</p>
                  <p class="produk-harga mb-2">Rp1.899.000</p>
                  <p class="card-text small">Monitor IPS 24 inci full HD yang jernih untuk kerja tabel dan laporan.</p>
                  <a class="btn btn-tokosaya mt-auto" href="katalog.html">Lihat Detail</a>
                </div>
              </article>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <article class="card produk-card h-100">
                <img class="card-img-top" src="img/produk-flashdrive-fd64.svg" alt="Flash Drive 64GB FD-64">
                <div class="card-body d-flex flex-column">
                  <span class="badge text-bg-success align-self-start mb-2">Tersedia</span>
                  <h3 class="card-title h6">Flash Drive 64GB FD-64</h3>
                  <p class="card-text small text-body-secondary mb-2">Penyimpanan</p>
                  <p class="produk-harga mb-2">Rp95.000</p>
                  <p class="card-text small">Flash drive 64GB untuk arsip dokumen dan tugas mahasiswa.</p>
                  <a class="btn btn-tokosaya mt-auto" href="katalog.html">Lihat Detail</a>
                </div>
              </article>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <article class="card produk-card h-100">
                <img class="card-img-top" src="img/produk-charger-cp30.svg" alt="Charger Cepat 30W CP-30">
                <div class="card-body d-flex flex-column">
                  <span class="badge text-bg-success align-self-start mb-2">Tersedia</span>
                  <h3 class="card-title h6">Charger Cepat 30W CP-30</h3>
                  <p class="card-text small text-body-secondary mb-2">Daya</p>
                  <p class="produk-harga mb-2">Rp120.000</p>
                  <p class="card-text small">Charger 30W untuk pengisian cepat ponsel dan tablet saat mengetik di kafe.</p>
                  <a class="btn btn-tokosaya mt-auto" href="katalog.html">Lihat Detail</a>
                </div>
              </article>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <article class="card produk-card h-100">
                <img class="card-img-top" src="img/produk-speaker-bt5.svg" alt="Speaker Bluetooth BT-5">
                <div class="card-body d-flex flex-column">
                  <span class="badge text-bg-warning align-self-start mb-2">Stok Terbatas</span>
                  <h3 class="card-title h6">Speaker Bluetooth BT-5</h3>
                  <p class="card-text small text-body-secondary mb-2">Audio</p>
                  <p class="produk-harga mb-2">Rp285.000</p>
                  <p class="card-text small">Speaker bluetooth portabel dengan suara bersih untuk presentasi kelompok.</p>
                  <a class="btn btn-tokosaya mt-auto" href="katalog.html">Lihat Detail</a>
                </div>
              </article>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <article class="card produk-card h-100">
                <img class="card-img-top" src="img/produk-webcam-wc720.svg" alt="Webcam HD WC-720">
                <div class="card-body d-flex flex-column">
                  <span class="badge text-bg-primary align-self-start mb-2">Baru</span>
                  <h3 class="card-title h6">Webcam HD WC-720</h3>
                  <p class="card-text small text-body-secondary mb-2">Video</p>
                  <p class="produk-harga mb-2">Rp310.000</p>
                  <p class="card-text small">Webcam 720p dengan mikrofon bawaan untuk kelas online dan wawancara.</p>
                  <a class="btn btn-tokosaya mt-auto" href="katalog.html">Lihat Detail</a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer 3 kolom -->
      <footer class="footer-tokosaya pt-5 pb-4">
        <div class="container">
          <div class="row g-4">
            <div class="col-12 col-md-4">
              <h3 class="h5 text-white">Tokosaya</h3>
              <p class="small mb-0">
                Toko online UMKM aksesori dan elektronik komputer sejak 2019.
                Belanja Tepat, Kirim Cepat.
              </p>
            </div>
            <div class="col-6 col-md-4">
              <h3 class="h5 text-white">Navigasi</h3>
              <ul class="list-unstyled small mb-0">
                <li><a class="link-light" href="index.html">Beranda</a></li>
                <!-- katalog.html dibangun pada Bab 10 -->
                <li><a class="link-light" href="katalog.html">Katalog</a></li>
                <!-- tentang.html dibangun pada bab selanjutnya -->
                <li><a class="link-light" href="tentang.html">Tentang</a></li>
                <!-- kontak.html dibangun pada Bab 11 -->
                <li><a class="link-light" href="kontak.html">Kontak</a></li>
              </ul>
            </div>
            <div class="col-12 col-md-4">
              <h3 class="h5 text-white">Kontak</h3>
              <ul class="list-unstyled small mb-0">
                <li><i class="bi bi-geo-alt me-2" aria-hidden="true"></i>Jl. Digital Raya No. 10, Jakarta</li>
                <li><i class="bi bi-envelope me-2" aria-hidden="true"></i>halo@tokosaya.id</li>
                <li><i class="bi bi-telephone me-2" aria-hidden="true"></i>(021) 555-0199</li>
              </ul>
            </div>
          </div>
          <p class="small mb-0 mt-4">© 2026 Tokosaya — Belanja Tepat, Kirim Cepat.</p>
        </div>
      </footer>
    </body>
    </html>

Penjelasan: halaman penuh ini merupakan rangkaian tiga kontrak yang dilatih sepanjang bab. *Head* mengikuti *starter template* — dua URL CDN persis, komentar penanda tanpa *bundle*, lalu `css/style.css` termuat paling belakang menurut hukum kaskade. Navigasi memakai markup navbar Bootstrap tetap **statis**: tanpa tombol lipat dan tanpa *bundle*, tautan selalu terlihat dan dibungkus `d-flex flex-row flex-wrap gap-2` agar menyusun baris pada layar kecil — batasnya diakui jujur: menu yang berpindah-kondisi (lipat) di layar sempit adalah pekerjaan interaktif yang butuh JavaScript, sehingga Bab 10 membahas pola navigasi mobile berbasis CSS kustom. Grid produk memakai `col-12 col-md-6 col-lg-3` pada delapan kartu, dan `h-100` membuat tinggi kartu sebanding dalam satu baris; tombol mendapat kelas kustom `btn-tokosaya` (indigo Tokosaya) dan *badge* memanfaatkan kelas semantik `text-bg-*` yang di 5.3 ikut bergeser ke indigo karena `--bs-primary-rgb` disesuaikan di `:root`. Tautan ke halaman yang belum dibuat (`katalog.html`, `keranjang.html`, dan seterusnya) adalah bagian dari kesinambungan proyek: berkas akan menyusul pada bab-bab berikutnya, dan tautan yang masih mengarah ke berkas yang belum ada adalah keadaan normal pengembangan bertahap.

File: tokosaya-bootstrap/css/style.css

```css
/* kustom — style.css Tokosaya v2 (dimuat SETELAH stylesheet Bootstrap) */

/* Design token Tokosaya (Bab 4) */
:root {
  --clr-primary: #4F46E5;      /* indigo — tombol dan tautan utama */
  --clr-primary-dark: #4338CA;
  --clr-accent: #F59E0B;       /* amber — badge dan sorotan */
  --clr-dark: #1E293B;         /* heading dan teks tegas */
  --clr-body: #334155;         /* teks paragraf */
  --clr-bg: #F8FAFC;           /* latar halaman */
  --clr-surface: #FFFFFF;      /* kartu dan panel */
  --clr-border: #E2E8F0;
  --clr-success: #16A34A;
  --clr-danger: #DC2626;
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  --radius: 12px;
  --shadow-card: 0 8px 24px rgba(15, 23, 42, 0.08);
  /* kustom: menyelaraskan warna *primary* Bootstrap 5.3 dengan indigo Tokosaya */
  --bs-primary-rgb: 79, 70, 229;
}

/* kustom: tipografi dan latar halaman */
body {
  font-family: var(--font-body);
  background-color: var(--clr-bg);
  color: var(--clr-body);
}

h1, h2, h3, .navbar-brand {
  font-family: var(--font-heading);
  color: var(--clr-dark);
}

/* kustom: hero Tokosaya */
.hero {
  background: linear-gradient(135deg, var(--clr-primary) 0%, var(--clr-primary-dark) 100%);
  color: #FFFFFF;
}

.hero-title {
  color: #FFFFFF;
}

/* kustom: tombol sorotan hero berwarna amber */
.hero-cta {
  background-color: var(--clr-accent);
  border-color: var(--clr-accent);
  color: var(--clr-dark);
  font-weight: 600;
}

.hero-cta:hover,
.hero-cta:focus {
  background-color: #B45309;
  border-color: #B45309;
  color: var(--clr-dark);
}

/* kustom: kartu produk Tokosaya */
.produk-card {
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
}

.produk-harga {
  color: var(--clr-primary-dark);
  font-weight: 600;
}

/* kustom: badge Best Seller berwarna amber (aksesori palet identitas) */
.badge-unggulan {
  background-color: var(--clr-accent);
  color: var(--clr-dark);
}

/* kustom: tombol utama Tokosaya (disandingkan dengan kelas btn) */
.btn-tokosaya {
  background-color: var(--clr-primary);
  border-color: var(--clr-primary);
  color: #FFFFFF;
}

.btn-tokosaya:hover,
.btn-tokosaya:focus {
  background-color: var(--clr-primary-dark);
  border-color: var(--clr-primary-dark);
  color: #FFFFFF;
}

/* kustom: footer gelap Tokosaya */
.footer-tokosaya {
  background-color: var(--clr-dark);
  color: #CBD5E1;
}
```

Penjelasan: berkas ini memperagakan overlay identitas di atas pustaka — tanpa menyentuh satu byte berkas Bootstrap, tanpa JavaScript. Tiga ide berlapis di situ. Pertama, *design token* Bab 4 dibawa utuh ke `:root`, jadi seluruh gaya kustom tetap memakai token yang sama dengan proyek `tokosaya-css/` versi 1. Kedua, penyesuaian `--bs-primary-rgb` menggeser kelas warna Bootstrap (`text-primary`, `bg-primary`, dan badge `text-bg-primary`) ke indigo Tokosaya — kelas-kelas ini mengonsumsi variabel tema, berbeda dari tombol yang warnanya tertanam statis dalam berkas pustaka; karena itu tombol dikeraskan lewat kelas kustom `btn-tokosaya` yang disandingkan dengan kelas `btn`. Ketiga, perhatikan hukum urutan: selector `.hero-cta:hover` berada di berkas yang termuat belakangan sehingga menimpa gaya bawaan `:hover` tombol Bootstrap pada *specificity* setara. Perilaku variabel tema dapat bergeser antar rilis kecil; kelas kustom eksplisit dijamin stabil. ⚠ *version-sensitive*: periksa dokumentasi resmi terbaru (getbootstrap.com) bila memakai versi Bootstrap lain.

### Penjelasan Kode

Penjelasan: **Struktur head.** Empat tautan berurutan — Bootstrap, Icons, Fonts, kustom — bukan urutan acak, tetapi strategi kaskade: gaya kustom wajib berada paling akhir agar selalu menimpa rupa pustaka pada specificity setara. Komentar `<!-- Tanpa bootstrap.bundle (JavaScript di luar cakupan mata kuliah) -->` berdiri sebagai pernyataan keputusan: sebab asli kejadian interaktif di Bootstrap memang dipegang berkas *bundle* JavaScript, dan keputusan menunda pemakaiannya disimpan di mark-up, justru agar pembaca kode tahu ini bukan lupa.

Penjelasan: **Navigasi dan hero.** Navbar memakai `bg-body-tertiary` bawaan 5.3 sebagai latar, dan daftar tautan diatur `d-flex flex-row flex-wrap gap-2` agar tetap sebaris dan dapat melentur (wrap) saat layar sempit — pemahaman flexbox Bab 6 langsung terbawa sebagai *utility* `d-flex` dan `gap-2`. Hero memakai kelas kustom `.hero` untuk gradasi indigo (Bab 4), sedangkan ukuran huruf dan jarak tetap serahkan ke *utility* (`py-5`, `display-5`, `mb-3`, `lead`) — penerapan aturan "utility dahulu, kustom untuk identitas".

Penjelasan: **Grid produk dan kartu.** Kombinasi `col-12 col-md-6 col-lg-3` disusun mobile-first: ponsel satu kolom, tablet lima-puluh-persen, desktop seperempat; `g-4` mengatur jarak antar kartu; `h-100` bersama `d-flex flex-column` di `card-body` membuat kartu tetap sama tinggi meski deskripsinya beda panjang, dan `mt-auto` menekan tombol ke dasar kartu pada kartu yang lebih pendek — kombinasi kecil yang memperindah tampilan katalog tanpa CSS tambahan. Tipografi kartu memakai `card-title h6` — struktural `h3`, ukuran visual `h6` — menunjukkan kelas skala tipografi dapat memodifikasi elemen semantik tanpa merusak hierarki kepala.

Penjelasan: **Overlay CSS kustom.** Latar hero, warna badge, tombol, dan footer semuanya dibentuk kelas kustom yang mengonsumsi token `--clr-*`; hanya variabel tema `--bs-primary-rgb` yang dipesan ulang untuk menyelaraskan kelas warna bawaan. Palet indigo–amber tetap menjadi identitas, justru karena pustaka punya warna bawaan yang beda — overlay inilah yang menjaga Tokosaya tak tampak seragam dengan ribuan situs *framework* lain.

### Hasil yang Diharapkan

Praktikum bisa dianggap berhasil bila hal-hal berikut terlihat dan terukur:

1. Halaman terbuka dengan gaya Bootstrap termuat (tab *Network* menayakan kedua CDN CSS sukses diambil, dan tombol/tulisan tampil bergaya).
2. Navigasi memuat 5 item: Beranda, Katalog, Tentang, Kontak, dan Keranjang dengan ikon keranjang bawaan Bootstrap Icons; brand "Tokosaya" di sisi kiri.
3. Hero menampilkan judul, subjudul, dan tombol sesuai konten baku §5.1, dengan latar gradasi indigo → indigo gelap dan tombol amber "Lihat Katalog".
4. Delapan produk baku tampil sesuai tabel §5.2 (nama, kategori, harga tanpa spasi, badge, deskripsi) dengan pola kolom terukur: 1 kartu per baris pada 375 px, 2 kartu pada 768 px, 4 kartu pada 1200 px.
5. Section keunggulan memuat 3 poin dengan ikon Bootstrap Icons; footer menampilkan 3 kolom (profil, navigasi, kontak baku) dan baris tagline.
6. Perilaku warna: ikon keunggulan dan badge "Baru" berwarna indigo (bukan biru bawaan), menandai overlay `--bs-primary-rgb` bekerja.
7. Folder `tokosaya-bootstrap/` TIDAK memuat satu pun berkas `.js`, dan halaman tetap tampil utuh bila pengaturan JavaScript browser dimatikan — karena seluruh tampilan murni HTML + CSS.
8. Tautan menuju halaman yang belum dibangun (`katalog.html`, `tentang.html`, `kontak.html`, `keranjang.html`) memang belum menghalaui berkas — itu normal: halaman-halaman itu dibuat pada Bab 10–12 sebagai bagian peta proyek; fokus bab ini adalah tata letak dan *utility*.

### Troubleshooting

**Masalah:** Halaman tampak polos tanpa gaya — tombol tampak abu-abu polos, kartu tanpa garis tepi, kolom tidak berjajar.
**Penyebab:** Tautan CDN Bootstrap salah eja, tak terkirim karena koneksi, atau tautan tertulis di bawah `css/style.css` sehingga gaya identitas termuat lebih dulu dan tertelan.
**Solusi:** Salin dua URL CDN persis dari *starter template* (bootstrap@5.3.3 dan bootstrap-icons@1.11.3), taruh seluruh tautan CDN sebelum `css/style.css`, lalu buka DevTools tab *Network* dan pastikan kedua berkas CSS berstatus sukses (200).
**Pencegahan:** Selalu mulai halaman baru dari salinan *starter template* 9.3 dan uji satu tombol `.btn-primary` dahulu sebelum menulis markup panjang.

**Masalah:** Kartu produk tetap bertumpuk penuh di layar desktop meski kelas `col-md-6` / `col-lg-3` sudah ditulis.
**Penyebab:** Kelas `col-*` keselip eja (misal `col-md6` atau `col-md-06`), kolom ditempatkan di luar `.row`, jadwal struktur `row → col` putus, atau `meta viewport` tak terbaca sehingga perangkat sungguhan mengukur layar salah.
**Solusi:** Periksa urutan tiga lapis `container → row → col` dan ejaan kelas di dokumentasi; pastikan `<meta name="viewport" content="width=device-width, initial-scale=1.0">` ada di `head`; uji ulang lewat DevTools *device toolbar* di 375, 768, dan 1200 px.
**Pencegahan:** Bangun kerangka dengan tiga kotak teks pendek dulu (misal satu-dua-tiga di `row`), verifikasi responsifnya, baru kembangkan isi kartu.

**Masalah:** Font Poppins/Inter tidak tampak; huruf tampil dengan *fallback* serif yang berbeda.
**Penyebab:** Tautan Google Fonts salah ketik atau tertukar urutan pemanggilan, sehingga `font-family` token mengacu pada *font* yang belum dimuat browser.
**Solusi:** Salin URL Google Fonts persis dari *starter template*, pastikan tulisan tautan bersebelahan dengan tautan `css/style.css`, lalu di DevTools *Network* periksa berkas *font* telah dimuat; keterlambatan *font* menyebabkan *fallback* tampil sementara — bila durasinya panjang, periksa koneksi.
**Pencegahan:** Jangan memecah tautan font per halaman; salin dari *starter template* yang sama untuk konsistensi seluruh bab.

**Masalah:** Ikon BootstrapIcons tidak tampil — yang muncul kotak kosong, teks nama kelas, atau karakter yang bentuknya beda.
**Penyebab:** Tautan `bootstrap-icons.css` tak termuat, atau nama kelas ikon salah (misal `bi-tags` ditulis `bi-tag` padahal ikon yang dimaksud tak tersedia dengan nama itu).
**Solusi:** Pastikan tautan `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css` ada pada tiap halaman, dan rujuk ejaan nama ikon di ikon.getbootstrap.com (misal `bi-tags`, `bi-lightning-charge`, `bi-cart3`, `bi-geo-alt`).
**Pencegahan:** Uji satu ikon di halaman kosong dahulu, baru memakai ikon berjamaah di halaman penuh.

**Masalah:** Tinggi kartu dalam satu baris tidak sama sehingga tombol "Lihat Detail" bergeser-geser.
**Penyebab:** Kartu kekurangan kelas `h-100` atau `card-body` tidak memakai `d-flex flex-column`, sehingga tinggi kartu mengikuti panjang deskripsi masing-masing.
**Solusi:** Tambahkan `h-100` pada elemen `.card` dan `d-flex flex-column` pada `.card-body`, lalu `mt-auto` pada tombol agar tombol menempel dasar kartu.
**Pencegahan:** Buat pola kartu yang konsisten: kartu → `h-100`, `card-body` → `d-flex flex-column`, elemen yang ingin tertambat bawah → `mt-auto`.

## Studi Kasus

Sebuah UMKM aksesori komputer di Bandung — sebut saja "Nusa Device" — memesan website berisi 8 halaman: beranda, katalog, 5 halaman kategori, tentang, dan kontak, dengan batas waktu dua minggu. Tim penerimanya hanya dua mahasiswa Sistem Informasi yang sudah lulus mata kuliah translasi desain ini, tanpa programmer JavaScript. Tugas besarnya adalah memilih strategi: menulis seluruh CSS dari nol, memakai *CSS framework*, atau kombinasinya. Ini persis pertanyaan 9.1 diangkat ke dunia nyata, dan keputusannya harus berbasis kebutuhan, bukan popularitas.

Tim menyusun matriks kebutuhan terlebih dahulu. Delapan halaman berulang pola sama: navigasi, hero, kartu produk, *footer* — persis pola berulang yang oleh 9.6 disarankan diangkat menjadi komponen. Waktu hanya dua minggu, dengan pemeliharaan lanjutan oleh pemilik yang pemula CSS. Identitas merek kuat (palet khas dan huruf tertentu) sehingga rupa seragam bawaan pustaka tidak boleh menenggelamkan identitas itu. Semua persyaratan buku berlaku juga: tanpa JavaScript, responsif penuh. Dari situ, arah pilihannya jadi cukup jelas:

| Kriteria keputusan | Kebutuhan Nusa Device | Implikasi strategi |
|---|---|---|
| Jumlah halaman | 8 halaman dengan pola berulang | pola siap pakai menghemat waktu signifikan |
| Tenaga | 2 mahasiswa pemula, part-time | kerangka menekan beban menulis ulang |
| Waktu | 2 minggu sampai rilis | *utility* dan grid menangani responsively dasar |
| Identitas merek | kuat dan harus konsisten | perlu lapisan token kustom di atas pustaka |
| Keterampilan pustaka | pemula, dokumentasi harus ramah | Bootstrap 5 (dokumentasi resmi tuntas) |
| Perilaku interaktif | minimal, statis diperbolehkan | tanpa *bundle* JavaScript terasa wajar |

Keputusan akhirnya begini: **Bootstrap 5.3.3 via CDN CSS + lapisan *design token* kustom** — justru pola yang dipraktikkan pada bab ini. Alasannya tiga lapis: pola tata letak berulang diserahkan ke grid dan *utility* (menghemat waktu); identitas dipertahankan lewat `css/style.css` yang menimpa warna, huruf, dan kartu khas; dan seluruh keputusan dapat didokumentasikan satu halaman bagi pemilik UMKM yang akan merawatnya. Skenario lawannya juga dijelaskan dengan jujur: bila proyek adalah satu *landing page* artistik dengan desain tak lazim, CSS murni bisa lebih ringkas; dan bila tim adalah desainer senior CSS yang mengingat bentuk bebas penuh, pustaka komponen justru mengikat. Inilah inti literasi SI yang ingin ditekankan di sini: kerangka itu alat keputusan, bukan status idiom — pilih karena kebutuhan tim, tenggat, dan pemeliharaan, bukan karena nama besar pustaka.

## Latihan Mandiri

1. Uraikan tiga alasan menggunakan *CSS framework* dan dua batasannya, lalu kaitkan masing-masing dengan satu keputusan nyata pada proyek `tokosaya-bootstrap/` (misal: kenapa grid dipakai untuk produk, kenapa warna tetap ditulis sendiri di `style.css`).
2. Ubah `latihan-grid.html` menjadi tata letak laporan akademik: konten utama 8 kolom dan panel ringkasan 4 kolom mulai breakpoint `xl`, dan keduanya berubah menjadi bertumpuk penuh di bawahnya. Tulis keluaran markup bagian `row` dan `col` saja, sebutkan ambang piksel yang berperan.
3. Transliterasikan pola nama kelas berikut ke pernyataan CSS: `px-4`, `mt-auto`, `d-none d-md-block`, `fw-semibold`, `text-bg-success`, `g-4` — tulis masing-masing sebagai kalimat sisi + nilai (misal: "mb-3 = margin bawah 1 rem").
4. Rancang markup grid untuk galeri UMKM dengan kebutuhan: 1 kolom di ponsel, 2 kolom mulai `md`, 4 kolom mulai `xl`. Tulis baris markup minimal dari `container`, `row`, dan satu contoh `col` lengkap dengan kelasnya, dan jelaskan urutan kelasnya mobile-first.
5. Bandingkan `container` dan `container-fluid` untuk header portal berita: mana yang Anda pilih dan mengapa? Sertakan satu risiko dari pilihan Anda dan cara menambannya.
6. Perbaiki cacat tata letak berikut: sebuah `<div class="col-md-4">` ditempatkan langsung di dalam `.container` tanpa `.row`. Jelaskan dua dampak yang mungkin muncul dan perbaiki markupnya, lalu uji hasilnya di `latihan-grid.html`.

## Tugas

**Tugas 1 (individu) — Laporan Pemilihan Pola Gaya.** Buka `index.html` hasil Praktikum dan buat tabel berisi 10 pilihan gaya yang Anda temukan di sana (misal `mb-3`, `text-center`, `py-5`, `h-100`, `badge text-bg-warning`, `btn-tokosaya`, `produk-card`, `hero-cta`). Tentukan untuk setiap pilihan: pemakaiannya sekali pakai atau berulang, dan keputusan Anda *utility* vs kelas kustom — dengan satu kalimat alasan berbasis tiga aturan 9.6. **Keluaran:** file PDF atau dokumen berisi tabel 2 kolom + satu paragraf simpulan. **Kriteria:** keputusan tidak boleh seragam semua satu tipe; minimal 3 argumen harus mengutip alasan konsistensi token Tokosaya.

**Tugas 2 (kelompok 3 orang) — Brief Final Project (Milestone M1).** Sesuai peta milestone Bab 9–16, tuliskan brief 1 halaman untuk proyek final kelompok Anda: tema terpilih (salah satu dari 8 pilihan kasus Bab 16), audiens utama, tujuan website, daftar halaman awal, dan tiga keputusan teknologi awal (contoh: pustaka gaya, strategi responsif, lapisan token kustom) beserta alasannya masing-masing. Brief memanfaatkan kerangka berpikir 9.1 dan studi kasus bab ini. **Keluaran:** satu halaman brief baku berformat PDF, dikumpulkan pada pertemuan 9. **Kriteria:** kelengkapan 5 bagian, kejelasan alasan tiap keputusan (bukan tren melulu), dan konsistensi tema dengan pilihan kasus.

## Refleksi

1. Sebelum bab ini, pernahkah Anda merasa "waktu habis untuk menulis CSS yang sama berulang"? Setelah menguji grid Bootstrap, bagian mana dari kerja yang kini terasa bisa diserahkan ke pustaka — dan bagian mana yang justru harus tetap di tangan Anda?
2. Komentar "tanpa bundle JavaScript" pada tiap `head` halaman adalah jejak keputusan, bukan tanda lupa. Bagaimana cara Anda menjelaskan keputusan itu kepada klien UMKM yang bertanya "kok menunya tak bisa dilipat?" — dengan bahasa awam yang jujur?
3. Bila overlay CSS kustom dihapus, tampilan Tokosaya akan balik ke rupa bawaan pustaka. Apa arti itu bagi pemisahan tanggung jawab antara "sistem" (pustaka) dan "identitas" (token)? Apa peran *design token* dari Bab 4 dalam pemandangan tersebut?
4. Saat tim Anda kelak memilih antara pustaka komponen-siaw dan pustaka utility-first, data apa yang harus dikumpulkan sebelum memutuskan? Susun tiga pertanyaan berbasis kebutuhan yang akan Anda tanyakan kepada klien terlebih dahulu.

## Rangkuman

- *CSS framework* adalah kerangka aturan CSS siap pakai dengan pola nama kelas konsisten; manfaatnya efisiensi, konsistensi, pola responsif, dan dokumentasi — batasannya seragam rupa, berkas lebih berat, dan biaya belajar ejaan kelas.
- Bootstrap 5.3.3 dipakai di buku ini hanya berkas CSS-nya via CDN: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css` plus Bootstrap Icons 1.11.3 — dan secara eksplisit **tanpa** berkas *bundle* JavaScript, dengan alasan yang dipahami dan ditandai komentar di setiap *head*.
- *Starter template* mengurung meta viewport, empat tautan pustaka berurutan (Bootstrap → Icons → Fonts → `css/style.css`); urutan tautan menentukan siapa menang di kaskade.
- `.container` mengatur lebar terkuratur per breakpoint (540/720/960/1140/1320 px) dan `.container-fluid` lebar penuh; breakpoint Bootstrap 576/768/992/1200/1400 px bekerja mobile-first dan berlaku ke atas.
- Grid 12 kolom tersusun `container → row → col`; kombinasi `col-12 col-md-6 col-lg-3` memberikan 1/2/4 kartu per baris pada ponsel/tablet/desktop; `g-3`…`g-5` mengatur jarak antarkolom.
- *Utility* adalah kelas satu-properti dengan pola nama properti–sisi–(breakpoint)–nilai: `mb-3`, `p-4`, `text-center`, `d-none d-md-block`, `fs-5`, `fw-semibold`.
- Kelas warna semantik (`text-*`, `bg-*`, `text-bg-*`) dibagi peran, bukan warna mentah; warna *primary* bawaan Bootstrap adalah biru, bukan indigo Tokosaya.
- Overlay CSS kustom menjaga identitas: `css/style.css` memuat token Tokosaya, menyelaraskan `--bs-primary-rgb` ke indigo, dan membentuk kelas kustom (`btn-tokosaya`, `produk-card`, `hero-cta`, `badge-unggulan`) — semuanya tanpa JavaScript dan tanpa mengedit pustaka.
- Keputusan memakai pustaka dipandu kebutuhan: jumlah halaman, ukuran tim, tenggat, identitas merek, dan pemeliharaan — sama seperti matriks keputusan UMKM pada studi kasus.

Dari sini arahnya sudah jelas: *utility* dan grid yang Anda pegang hari ini adalah fondasi untuk Bab 10, yang mengemas pola-pola yang sama menjadi komponen visual Bootstrap siap bawa — navbar, kartu, *badge*, dan *alert* — yang akan memayungi halaman katalog Tokosaya dengan struktur yang lebih maju; kembali kita tetap berpegang pada satu batas yang sama: tampilannya indah, tetap statis, dan tetap tanpa satu baris JavaScript.

## Evaluasi

### Pilihan Ganda

**1.** Pernyataan yang paling tepat mengenai fungsi sebuah *CSS framework* adalah ... 
A. menggantikan HTML semantik sehingga markup bebas apa pun bentuknya. 
B. menyediakan kelas dan pola siap pakai yang mempercepat pelaksanaan serta menyelaraskan gaya antarmarga. 
C. memaksa setiap proyek memasang pustaka JavaScript tambahan agar tampilan tetap hidup. 
D. mencegah halaman punya identitas merek pribadi.

**2.** Di seluruh Bab 9–16, pustaka Bootstrap 5.3.3 dipasang melalui ... 
A. satu tautan stylesheet CDN dengan URL jsdelivr yang terkunci di kontrak buku. 
B. berkas unduhan ZIP yang diisikan ke folder proyek. 
C. perintah *package manager* di terminal. 
D. berkas *bundle* JavaScript resmi Bootstrap.

**3.** Sistem grid Bootstrap membayar jumlah kolom default sebanyak ... 
A. 10 kolom. 
B. 12 kolom. 
C. 16 kolom. 
D. 24 kolom.

**4.** Makna kelas `mb-3` pada *utility* Bootstrap adalah ... 
A. margin bawah sebesar 3 piksel. 
B. margin bawah sebesar skala 3, setara 1 rem. 
C. margin pada keempat sisi sebesar skala 3. 
D. garis bawah setebal 3 piksel.

**5.** Perilaku kelas `.container` pada lebar viewport 992 px adalah ... 
A. lebar penuh 100% tanpa batas. 
B. lebar maksimum 960 px dan tampil terletak di tengah. 
C. lebar maksimum 720 px. 
D. ikut lebar jendela, minimal 992 px.

**6.** Kelas `col-md-6` diterapkan pada layar 400 px akan berperilaku ... 
A. setengah lebar karena 6 dari 12. 
B. penuh (100%), karena prefix `md` baru berlaku mulai 768 px ke atas. 
C. hilang dari baris. 
D. tiga per empat lebar.

**7.** Kombinasi `d-none d-md-block` efektif untuk ... 
A. menyembunyikan elemen di bawah 768 px dan menampilkannya mulai `md`. 
B. menyembunyikan elemen pada segala ukuran. 
C. menampilkan elemen hanya di ponsel. 
D. mengubah lebar kolom menjadi penuh di desktop.

**8.** Alasan utama buku ini TIDAK memuat *bundle* JavaScript Bootstrap adalah ... 
A. berkasnya tidak diizinkan CDN. 
B. mata kuliah dan seluruh proyek berpatokan pada HTML/CSS murni tanpa JavaScript. 
C. *bundle* hanya berlaku untuk jaringan internal kampus. 
D. *bundle* tidak kompatibel dengan Google Fonts.

### Benar atau Salah

Tentukan benar atau salah dengan alasan singkat:

**1.** Kelas `.container-fluid` membatasi lebar isi pada 540 px ketika layar berlebar 700 px.

**2.** Kelas `col-lg-3` membuat kolom sepertiga lebar mulai viewport 992 px dan tetap berlaku ke atas.

**3.** Pada proyek Tokosaya, `css/style.css` sengaja ditempatkan sebelum tautan CDN Bootstrap agar identitas merek pasti menang.

**4.** Bootstrap Icons dipasang dari berkas berbeda dan memerlukan tautan stylesheet tersendiri di `head`.

### Analisis Kode

**1.** Perhatikan potongan berikut:

File: latihan/analisis-01.html

```html
<div class="container">
  <div class="col-md-4 p-3 bg-body-tertiary">Panel A</div>
  <div class="col-md-4 p-3 bg-body-tertiary">Panel B</div>
</div>
```

Pertanyaan: (a) Apa cacat struktur pada tata letak grid di atas? (b) Bagaimana dampaknya pada jarak antar panel dan penggaris kolom? (c) Bagaimana perbaikan minimal markup-nya?

**2.** Perhatikan potongan berikut pada halaman katalog UMKM:

```html
<div class="container">
  <div class="row g-3">
    <div class="col-md-4"><div class="p-3 bg-body-tertiary">Menu</div></div>
    <div class="col-md-4"><div class="p-3 bg-body-tertiary">Katalog</div></div>
    <div class="col-md-4"><div class="p-3 bg-body-tertiary">Kontak</div></div>
  </div>
</div>
```

Pertanyaan: (a) Pada 375 px, bagaimana tiga panel itu tersusun dan mengapa? (b) Kelas kolom apa yang perlu diwakilkan bila penulis menginginkan tampilan bertumpuk penuh di ponsel dan tiga-sebelah mulai 768 px? (c) Apa fungsi `g-3` di `row`?

### Soal Praktik

**1.** Tambahkan section baru "Kategori Populer" pada `tokosaya-bootstrap/index.html` berisi 4 kartu kategori (Aksesori Input, Audio, Layar, Penyimpanan) dengan pola kolom: 1 kolom di ponsel, 2 kolom mulai `md`, 4 kolom mulai `lg`. Simpan sebagai `latihan-kategori.html` dan kumpulkan kode berikut tiga tangkapan layar pada 375 px, 768 px, dan 1200 px.

**2.** Pada `index.html` Praktikum, tambahkan bilah promo di bawah hero: sebuah `div` kelas `d-flex justify-content-between align-items-center p-4 mb-5 bg-body-tertiary` berisi teks "Promo Kirim Cepat minggu ini" dan tombol `btn btn-tokosaya`, dan pastikan bilah hanya tampil mulai breakpoint `md` (sembunyikan di ponsel). Kumpulkan markup dan satu kalimat yang menjelaskan perilaku responsif yang diharapkan.

### Kunci Jawaban

<details>
<summary>Kunci Jawaban — klik untuk membuka</summary>

**Pilihan Ganda:**

1. **B** — *Framework* memberi kelas dan pola jadi yang mempercepat serta menyelaraskan gaya; ia tak menggantikan HTML semantik (A), tak memaksa JavaScript (C), dan identitas merek tetap dibentuk lapisan kustom (D).
2. **A** — Buku memakai URL CDN terkunci untuk Bootstrap 5.3.3 dan Bootstrap Icons 1.11.3; unduhan ZIP atau *package manager* bukan pola buku ini.
3. **B** — Grid Bootstrap 5 dibagi 12; sehingga pembagian setengah (6), sepertiga (4), seperempat (3), dan seperenam (2) selalu pas.
4. **B** — Huruf pertama menunjuk properti (`m` = margin), `b` menunjuk sisi bawah, angka 3 adalah skala utilitas spasi yang setara 1 rem.
5. **B** — Pada ≥992 px, `.container` mencapai maksimum 960 px (≥1200 px menjadi 1140 px), sedangkan `.container-fluid` tetap lebar penuh.
6. **B** — *Utility* bersifat mobile-first dan *min-width*: tanpa kelas dasar pada ponsel, kolom memenuhi penuh; efek `md` baru berlaku dari 768 px.
7. **A** — `d-none` menyembunyikan pada bawaan (ponsel), `d-md-block` memunculkan kembali mulai 768 px; pola ini dipakai menyembunyikan konten sekunder di layar sempit.
8. **B** — Keputusan dijelaskan jujur pada 9.3: *bundle* memang menghidupkan interaksi komponen di dunia nyata, tapi mata kuliah dan proyek buku ini berpijak pada HTML/CSS murni, sehingga interaksi digantikan status statis.

**Benar atau Salah:**

1. **Salah** — `.container-fluid` justru selalu lebar penuh 100% pada segala ukuran; pembatasan lebar bertahap per breakpoint adalah perilaku `.container`.
2. **Benar** — `lg` berlaku mulai 992 px ke atas (logika *min-width* mobile-first).
3. **Salah** — justru sebaliknya: CSS kustom harus dimuat SETELAH Bootstrap agar aturan setara *specificity* ikut menang lewat urutan kaskade.
4. **Benar** — ikon tersedia sebagai pustaka terpisah (versi 1.11.3) dan wajib tautannya sendiri di setiap halaman.

**Analisis Kode:**

1. (a) Kedua `col-md-4` berdiri langsung di dalam `.container` tanpa `.row` sebagai induk. (b) *Gutter* tidak terbentuk karena kompensasi margin negatif baris tidak hadir; kolom kehilangan penyusunan sebaris yang benar dan tepinya tidak segaris dengan *container*. (c) Perbaikan minimal: bungkus kedua div di dalam `<div class="row g-3">` sebelum kelas kolomnya.
2. (a) Pada 375 px ketiga panel bertumpuk penuh, sebab prefix `md` baru aktif mulai 768 px; di bawahnya kolom tanpa kelas dasar otomatis penuh. (b) Pola `col-12 col-md-4` pada tiap kolom menghasilkan tumpuk di ponsel dan sepertiga lebar mulai 768 px. (c) `g-3` mengatur *gutter* (jarak antarkolom dan antarbaris) pada seluruh isi baris.

**Soal Praktik:**

1. Markup yang diharapkan: `<section class="container py-5"><h2 class="text-center mb-4">Kategori Populer</h2><div class="row g-4">` berisi empat `<article class="col-12 col-md-6 col-lg-3">…</article>`; tiga tangkapan layar harus menampilkan 1/2/4 kartu per baris sesuai lebar.
2. Bilah promo tampil pada ≥768 px karena pasangan `d-none d-md-flex` (atau dibiarkan tampil di semua ukuran bila kelas `d-none d-md-flex` tidak ditambahkan; cara tegasnya: `d-none d-md-flex` menggantikan `d-flex`); perilaku yang dinantikan: bilah memudar dan tak muncul di 375 px lalu tampil bersusun antara teks kiri dan tombol kanan mulai 768 px.

</details>

## Referensi

1. Bootstrap. (2025). *Bootstrap v5.3 documentation*. Diakses 5 Januari 2026, dari https://getbootstrap.com/docs/5.3/
2. Bootstrap. (2025). *Bootstrap Icons v1.11.3 documentation*. Diakses 5 Januari 2026, dari https://icons.getbootstrap.com/
3. MDN Web Docs. (2025). *Learn web development: CSS layout basics*. Diakses 5 Januari 2026, dari https://developer.mozilla.org/
4. Duckett, J. (2011). *HTML & CSS: Design and Build Websites*. Indianapolis: Wiley.
5. Robbins, J. N. (2018). *Learning Web Design* (5th ed.). Sebastopol: O'Reilly Media.