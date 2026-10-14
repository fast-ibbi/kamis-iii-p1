# Bank Soal Essay — Frontend Development & Web Design

> **Mata kuliah:** Frontend Development & Web Design · Semester III
> **Prodi:** Sistem Informasi / Teknik Informatika
> **Studi kasus proyek:** Tokosaya — toko online UMKM _"Belanja Tepat, Kirim Cepat"_
> **Cakupan:** 14 bab (Bab 1–7 dan 9–15) · 5 soal per bab · **Total 70 soal**
> **Tingkat kesulitan:** campuran (C2–C5)
> **Versi per bab:** `bab-NN/soal-essay.md` · poin jawaban: `bab-NN/jawaban.md` · **Kunci bank lengkap:** `jawaban.md`


**Daftar Bab:** Bab 01 · Bab 02 · Bab 03 · Bab 04 · Bab 05 · Bab 06 · Bab 07 · Bab 09 · Bab 10 · Bab 11 · Bab 12 · Bab 13 · Bab 14 · Bab 15


## Bab 01 — Pengantar Frontend Development dan Web Design

**Essay (5 soal)**

1. Di sebuah sistem informasi rumah sakit, nomor antrean yang dilihat pasien di layar dan rekam medis pasien yang tersimpan di server berada pada wilayah kerja yang berbeda. Jelaskan pembagian tanggung jawab frontend dan backend, lalu berikan dua contoh pekerjaan frontend dan dua contoh pekerjaan backend pada sistem tersebut. Kaitkan penjelasanmu dengan satu contoh dari Tokosaya.

2. Jelaskan urutan konseptual saat browser menampilkan halaman HTML. Setelah itu, jelaskan bagaimana kamu memakai Chrome DevTools (sebutkan panel dan fitur yang dipakai) untuk memeriksa bahwa struktur halaman sudah benar dan tampil wajar pada ukuran layar yang berbeda.

3. Perhatikan struktur folder hasil latihan seorang teman berikut.

```text
Web Toko Saya/
├── Halaman Produk.html
├── Index.html
├── Style-ku.css
└── Gambar Produk Keyboard.jpg
```

Identifikasi minimal tiga pelanggaran konvensi penataan folder dan penamaan file yang dipakai di buku ini, lalu tuliskan perbaikan untuk tiap pelanggaran beserta alasannya.

4. Bab ini menempatkan alur *design → code* sebagai kebiasaan kerja. Jelaskan mengapa rancangan antarmuka (misalnya dari Figma) sebaiknya diterjemahkan lebih dulu menjadi struktur HTML, baru ditata dengan CSS. Sertakan satu contoh komponen Tokosaya, misalnya lencana Best Seller pada kartu Keyboard Mekanis KX-210, dan jelaskan pembagian tugas HTML dan CSS pada contoh itu.

5. Seorang rekan melaporkan tiga hal tentang halaman latihannya: (a) kode sudah diubah dan disimpan, tetapi browser masih menampilkan tampilan lama; (b) foto profil tidak muncul, yang terlihat hanya ikon gambar rusak; (c) halaman tampak sangat kecil di layar HP sehingga harus di-zoom. Susun langkah diagnostik sistematis untuk ketiga laporan tersebut, tentukan penyebab yang paling mungkin, dan tuliskan usulan pencegahan agar masalah serupa tidak terulang.

---

## Bab 02 — HTML5 dan Struktur Semantik

**Essay (5 soal)**

1. Bab ini menyebut tiga manfaat markup semantik: aksesibilitas, SEO dasar, dan keterbacaan kode untuk pemeliharaan. Pilih dua manfaat, lalu jelaskan bagaimana markup semantik mewujudkannya pada halaman company profile Tokosaya. Sertakan minimal satu contoh elemen pada penjelasanmu.

2. Jelaskan perbedaan link absolut dan link relatif beserta situasi pemakaiannya pada proyek Tokosaya yang terdiri dari beberapa halaman. Jelaskan pula kapan atribut `target="_blank"` beserta `rel="noopener"` dipakai, dan mengapa teks link harus deskriptif. Berikan contoh perbaikan untuk teks link "klik di sini".

3. Perhatikan potongan halaman yang sedang ditinjau tim berikut.

```html
<div class="kepala">
  <h1>Tokosaya</h1>
  <div class="menu">
    <a href="index.html">Beranda</a> |
    <a href="katalog.html">Katalog</a> |
    <a href="tentang.html">Tentang</a>
  </div>
</div>
<div class="isi">
  <h2>Produk Unggulan</h2>
  <img src="img/hero-tokosaya.svg">
  <p>Keyboard mekanis 87 tombol dengan switch biru.</p>
  <h4>Harga dan ketersediaan</h4>
</div>
```

Identifikasi minimal empat masalah semantik pada potongan di atas (kaitkan dengan landmark, hierarki heading, dan atribut gambar), lalu tuliskan bentuk perbaikannya.

4. Perhatikan potongan struktur form berikut.

```html
<form action="https://example.com/toko/kirim" method="post">
  <label>Nama Lengkap</label>
  <input type="text" name="nama">

  <label>Alamat Email</label>
  <input type="email" name="email">

  <textarea name="pesan" rows="5"></textarea>

  <button>Kirim Pesan</button>
</form>
```

Identifikasi minimal dua kelemahan aksesibilitas pada form tersebut, jelaskan dampaknya bagi pengguna pembaca layar, lalu tuliskan perbaikan markup-nya (sebutkan pasangan atribut yang nilainya harus sama).

5. Sebuah halaman Tokosaya dikembalikan dari hasil tinjauan dengan catatan: (a) tidak ada elemen `nav` yang membungkus menu utama; (b) satu `section` melompat dari `h2` ke `h4`; (c) dua gambar produk tidak memiliki `alt`; (d) belum ada elemen `main` sehingga pembaca layar tidak punya tujuan lompatan ke isi utama. Susun rencana perbaikan: urutkan prioritasnya, jelaskan alasan urutan itu, dan sebutkan dampak tiap perbaikan bagi pengguna, khususnya pengguna pembaca layar.

---

## Bab 03 — Dasar-Dasar CSS

**Essay (5 soal)**

1. Jelaskan dengan bahasamu sendiri bagaimana kaskade menentukan gaya akhir sebuah elemen. Sebutkan urutan langkah keputusannya, kemudian berikan satu contoh dua aturan yang menyasar elemen yang sama dan uraikan bagaimana pemenangnya ditentukan.

2. *Pseudo-class* dipakai untuk menata keadaan elemen tanpa JavaScript. Pilih tiga dari lima *pseudo-class* dasar berikut — `:hover`, `:focus`, `:first-child`, `:last-child`, `:nth-child()` — lalu untuk masing-masing: tuliskan satu baris aturan CSS, jelaskan keadaan yang ditanganinya, dan sebutkan satu contoh nyata penggunaannya di halaman Tokosaya.

3. Perhatikan potongan CSS berikut.

```css
body {
  color: #334155;
  line-height: 1.6;
}

.site-header {
  border-bottom: 1px solid #E2E8F0;
  padding: 16px 24px;
}
```

Jelaskan mengapa seluruh teks halaman ikut berwarna `#334155` walau hanya selector `body` yang diberi `color`, tetapi garis `border-bottom` pada `.site-header` tidak ikut muncul di elemen-elemen di dalam header tersebut. Sebutkan pula dua properti lain yang berperilaku seperti `color` dan dua properti yang berperilaku seperti `border` pada kasus ini.

4. `index.html` Tokosaya sudah memuat `<link rel="stylesheet" href="css/style.css">`, tetapi halaman tetap tampil seperti tanpa gaya: link biru bergaris bawah dan judul memakai huruf serif bawaan. Sebutkan tiga penyebab yang paling mungkin, lengkap dengan langkah pemeriksaan untuk membuktikan masing-masing penyebab — gunakan alat yang memang dibahas di bab ini.

5. Sebuah company profile Tokosaya akan berisi empat halaman dan dikerjakan bergantian oleh tiga orang. Kamu ditunjuk untuk menetapkan aturan gaya. Tuliskan rekomendasimu tentang: kapan memakai selector elemen, *class*, atau ID; bagaimana pola penamaan *class*; dan bagaimana `style.css` diorganisasi. Sertakan alasan yang mengacu pada mekanisme kaskade dan kemudahan perawatan, lalu sebutkan satu praktik yang sebaiknya dihindari beserta alasannya.

---

## Bab 04 — Tipografi dan Visual Design CSS

**Essay (5 soal)**

1. Web font dari Google Fonts diunduh saat halaman dibuka, sehingga unduhannya bisa gagal atau lambat. Jelaskan peran *fallback stack* dan parameter `display=swap` dalam menghadapi kondisi tersebut, lalu uraikan apa yang akan dialami pembaca Tokosaya jika keduanya tidak dipakai.

2. Skala tipografi Tokosaya berisi level Display 3rem, Heading 2 1.875rem, Body 1rem, Kecil 0.875rem, dan Label 0.75rem. Jelaskan bagaimana rangkaian level itu membentuk *visual hierarchy* pada landing page Tokosaya, mulai dari judul hero sampai label badge. Sebutkan pula properti lain selain `font-size` yang ikut membangun hierarki tersebut.

3. Seorang anggota tim menyerahkan potongan CSS untuk halaman kampanye Tokosaya berikut.

```css
html {
  font-family: 'Poppins', Inter;
}

h1 {
  font-size: 14px;
}

.produk-hero p {
  font-size: 18px;
  line-height: 1.1;
}

.banner-ongkir {
  background-color: #F59E0B;
  color: #FFFFFF;
  font-size: 10px;
}

.label-kode {
  font-size: 0.75rem;
  text-transform: uppercase;
}
```

Identifikasi minimal tiga masalah pada potongan itu dari sisi hierarki, *fallback stack*, kontras, dan penataan label kecil. Untuk setiap masalah, jelaskan akibatnya bagi pembaca lalu tuliskan perbaikannya memakai skala dan token Tokosaya.

4. Perhatikan potongan berikut.

```html
<section class="cta" style="--clr-primary: #16A34A;">
  <p>Tanya dulu, baru beli.</p>
  <a href="kontak.html" class="cta-button">Hubungi Kami</a>
</section>
```

Dengan CSS `html { color: var(--clr-body); }` dan `.cta-button { background-color: var(--clr-primary); }`, jelaskan mengapa tombol pada section itu berubah warna padahal token `--clr-primary` di `:root` tidak diubah, dan mengapa paragraf di dalamnya juga tidak otomatis menjadi hijau. Kaitkan penjelasanmu dengan sifat *custom properties* dan kaskade, lalu nyatakan kapan penimpaan token seperti ini masih dapat diterima dan kapan sebaiknya dihindari.

5. Seorang rekan berargumen: "Untuk proyek sekecil Tokosaya, design token cuma menambah pekerjaan. Tulis saja warna dan ukurannya langsung di setiap aturan." Susun evaluasi terhadap argumen itu dengan minimal tiga alasan yang memakai contoh nyata dari landing page Tokosaya. Sertakan pula satu situasi ketika keputusan untuk tidak memakai token justru tepat.

---

## Bab 05 — CSS Box Model dan Layout

**Essay (5 soal)**

1. Bab ini membedakan peran padding dan margin: "padding adalah bagian dari komponen, margin adalah jarak antar-komponen". Jelaskan maksud pernyataan tersebut, lalu sebutkan dua konsekuensi teknisnya — satu terkait warna latar elemen dan satu terkait perilaku margin vertikal dua elemen block yang bertetangga.

2. Sebuah panel ditulis dengan mode bawaan `content-box`.

```css
.panel {
  width: 240px;
  padding: 20px;
  border: 2px solid #E2E8F0;
}
```

a. Hitung lebar kotak panel yang diamati di layar, baris per baris. b. Kamu lalu mengaktifkan `box-sizing: border-box` secara global dan ingin lebar visual panel tidak berubah. Berapa nilai `width` yang harus ditulis, dan berapa lebar area kontennya sekarang? c. Jelaskan mengapa sebuah proyek disarankan hanya memakai satu mode penghitungan.

3. Dua cacat muncul bersamaan pada kartu produk Tokosaya: (a) badge "Best Seller" terlempar ke pojok kanan atas halaman, bukan ke pojok gambar; (b) kartu ketiga meluber melewati kontainer sehingga muncul bilah gulir horizontal. Analisis kedua cacat tersebut sebagai dua akar masalah yang berbeda — sebutkan properti/kondisi penyebabnya — lalu tuliskan perbaikan untuk masing-masing.

4. Seorang rekan menulis CSS berikut untuk link navigasi di dalam daftar horizontal.

```css
.nav-link {
  width: 160px;
  height: 44px;
  padding: 8px 16px;
  background-color: #4F46E5;
}
```

Link tetap setipis teksnya dan tingginya tidak berubah. a. Jelaskan penyebabnya. b. Bandingkan pilihan `display: inline-block` dan `display: block` untuk link itu di dalam `<li>` pada daftar navigasi horizontal. c. Kaitkan pilihanmu dengan kriteria WCAG 2.2 *Target Size (Minimum)*.

5. Tim desain mengirim tiga keputusan jarak untuk halaman katalog: (a) jarak antarkartu 18 px, (b) jarak judul ke deskripsi di dalam kartu 12 px, (c) jarak antarseksi 50 px. Rancang revisi ketiga keputusan itu memakai skala jarak 8/16/24/32/48/64 milik proyek Tokosaya. Untuk setiap kasus, tentukan nilai yang dipilih, langkah skalanya, serta apakah jarak itu sebaiknya diwujudkan sebagai padding atau margin — beserta alasan tiap keputusan.

---

## Bab 06 — Flexbox untuk Web Layout

**Essay (5 soal)**

1. Flexbox disebut sebagai model layout *satu dimensi*. Jelaskan maksudnya, lalu bandingkan dengan dua pendekatan lama yang pernah dipakai untuk menyusun menu horizontal — `float` dan `display: inline-block` — dan sebutkan masalah yang diselesaikan flexbox pada masing-masing pendekatan itu.

2. `gap` pada flex container sering menggantikan kebiasaan memberi `margin-right` pada setiap anak. Jelaskan bagaimana keduanya berbeda ketika baris menekuk (`flex-wrap: wrap`), lalu jelaskan bagaimana `row-gap`/`column-gap` mengatasi kebutuhan jarak yang berbeda antara antar-baris dan antar-kolom.

3. Perhatikan potongan CSS berikut.

```css
.baris { display: flex; gap: 16px; }
.kolom-konten { flex: 1 1 160px; }
.kolom-samping { flex: 0 1 120px; }
```

a. Tuliskan arti ketiga nilai pada `flex: 1 1 160px` dan pada `flex: 0 1 120px`. b. Jelaskan perilaku kedua kolom ketika wadah masih longgar, lalu ketika wadah menyempit. c. Jelaskan properti mana yang "menang" bila pada `.kolom-konten` kamu juga menulis `width: 300px`.

4. Katalog Tokosaya berisi delapan kartu dengan `.produk-row { display: flex; flex-wrap: wrap; gap: 24px; }` dan `.produk-card { flex: 0 1 250px; }`. Pada satu ukuran jendela tertentu kartu terbagi 3-3-2 sehingga baris terakhir menyisakan ruang kosong di kanan. Jelaskan mengapa hal itu terjadi pada flexbox, tuliskan apa yang terjadi pada `align-items` setelah baris menekuk, dan tentukan kapan masalah perataan itu sebaiknya diserahkan ke Grid.

5. Rancang aturan hero Tokosaya yang berisi judul, subjudul, dan satu tombol CTA. Tuliskan properti flex beserta nilai yang kamu pilih untuk menumpuk dan menengahkan ketiganya, lalu jelaskan mengapa pada `flex-direction: column` properti `align-items` bekerja horizontal sedangkan `justify-content` bekerja vertikal. Sertakan pula satu keputusan untuk menjaga keterbacaan subjudul.

---

## Bab 07 — CSS Grid dan Responsive Web Design

**Essay (5 soal)**

1. Dua penulisan template berikut diterapkan pada wadah selebar 1000 px yang juga memakai `gap: 20px`: (a) `grid-template-columns: 200px 1fr 1fr;` dan (b) `grid-template-columns: 200px 40% 40%;`. Jelaskan arti satuan `fr` sebagai pembagi ruang sisa, lalu tunjukkan perhitungan ringkas mengapa penulisan (b) berisiko pada wadah itu sementara penulisan (a) tidak.

2. Jelaskan strategi *mobile-first* dan peran media query `min-width` di dalamnya. Uraikan pula mengapa urutan blok media query harus menaik (576 → 768 → 992 → 1200 px) dan apa akibatnya bila urutan itu tertukar, padahal semua blok memiliki *specificity* yang setara.

3. Pada dashboard Tokosaya, denah `grid-template-areas` digambar ulang di dalam media query `min-width: 768px` sehingga navigasi berpindah ke kolom kiri "tanpa mengubah satu baris HTML pun". Jelaskan mekanisme ini, sebutkan dua aturan penulisan denah yang harus dipatuhi, dan sebutkan satu keterbatasan `grid-template-areas` yang disebutkan bab ini.

4. Skenario: pada 375 px, halaman `admin.html` tidak boleh memiliki pengguliran horizontal pada `<body>`, tetapi tabel pesanan yang punya lima kolom tetap harus terbaca. Analisis mengapa kombinasi wadah ber-`overflow-x: auto` dengan `min-width: 640px` pada tabel dipilih, apa risiko yang muncul bila pengguliran justru dibiarkan terjadi pada seluruh halaman, dan mengapa menyembunyikan sebagian kolom bukan pilihan yang baik di sini.

5. Dashboard admin akan menyoroti kartu "Penjualan Hari Ini" dengan membentangkannya dua kolom. Evaluasi dua pendekatan penempatan eksplisit yang dibahas bab ini — kata kunci `span` pada `grid-column`/`grid-row` dan denah bernama `grid-template-areas` — lalu tentukan mana yang kamu pakai untuk **kartu di dalam barisan kartu statistik** dan mana yang kamu pakai untuk **kerangka header–nav–main–footer**. Jelaskan pula satu risiko pemeliharaan dari pilihanmu ketika jumlah kolom berubah antar breakpoint.

---

## Bab 09 — Pengenalan Bootstrap 5

**Essay (5 soal)**

1. Bootstrap 5.3 memamerkan arsitekturnya dalam enam kelompok fasilitas: Layout, Content, Forms, Components, Helpers, dan Utilities. Jelaskan pembagian keenam kelompok itu, lalu tentukan ke mana kamu mencari solusi untuk empat kebutuhan berikut: (a) pembungkus yang mengatur lebar maksimum isi halaman, (b) normalisasi gaya bawaan browser, (c) kelas satu-tujuan pengatur jarak, dan (d) komponen navbar. Sebutkan juga di mana Bootstrap Icons dipasang.

2. Jelaskan kontrak tiga lapis grid Bootstrap (container → row → col) dan mengapa kolom wajib menjadi anak langsung dari `row`. Setelah itu, uraikan perilaku kartu berkelas `col-12 col-md-6 col-lg-3` pada viewport 500 px, 800 px, dan 1100 px, serta sebutkan berapa kartu yang tampil per baris pada masing-masing lebar.

3. Pada proyek `tokosaya-bootstrap/`, `css/style.css` wajib dimuat setelah stylesheet Bootstrap. Jelaskan alasan kaskadenya, lalu uraikan dua mekanisme overlay yang dipakai bab ini — urutan pemuatan berkas dan penyesuaian variabel `--bs-primary-rgb` — dan sebutkan apa yang rusak bila urutan link itu tertukar.

4. Skenario: pemilik Tokosaya meminta menu navigasi yang bisa dilipat pada layar HP seperti navbar Bootstrap pada umumnya. Analisis batas keputusan "tanpa *bundle* JavaScript" yang dipegang buku ini: apa konsekuensinya bagi komponen yang aslinya interaktif, bagaimana bab ini menyiasati navigasi mobile, dan sebutkan satu risiko dari siasat tersebut beserta satu cara meringankannya.

5. Sebuah UMKM meminta rekomendasi teknologi untuk website berisi delapan halaman dengan pola tampilan yang berulang, dikerjakan dua mahasiswa pemula secara paruh waktu, tenggat dua minggu, identitas merek yang kuat, dan perilaku interaktif yang minimal. Evaluasi dua pilihan berikut — Bootstrap 5.3.3 via CDN dengan lapisan token kustom, melawan Tailwind CSS utility-first — memakai minimal tiga kriteria keputusan dari bab ini, lalu nyatakan pilihanmu beserta satu trade-off yang kamu terima secara sadar.

---

## Bab 10 — Komponen Bootstrap

**Essay (5 soal)**

1. Tombol, badge, dan alert di Bootstrap berbagi satu pola yang sama, yaitu "kelas dasar + kelas *variant*". Jelaskan cara kerja pola itu dan berikan satu contoh *markup* untuk masing-masing komponen. Setelah itu, jelaskan mengapa alert pada buku ini selalu ditulis tanpa tombol tutup.

2. Komponen breadcrumb, pagination, dan list group sama-sama menyatakan status lewat kelas, bukan lewat data interaktif. Uraikan status apa saja yang dipakai ketiganya (`active`, `disabled`, `aria-current`), di elemen mana status itu diletakkan, dan mengapa pendekatan "status sebagai kelas" lebih aman untuk halaman statis.

3. Bab ini merumuskan tiga aturan praktis pemakaian Bootstrap Icons: ukuran mengikuti teks, warna mewarisi teks, dan ikon bermakna diberi nama. Tuliskan satu contoh *markup* untuk masing-masing aturan, lalu jelaskan perbedaan perlakuan antara ikon hiasan dan ikon yang berdiri sendiri tanpa kata pendamping.

4. Accordion, modal, dan carousel di dunia nyata adalah komponen interaktif, tetapi pada bab ini ketiganya ditampilkan sebagai "status beku". Jelaskan bagaimana masing-masing komponen menandai keadaan aktif atau terbukanya (kelas apa yang dipakai dan diletakkan di mana), lalu berikan alasan mengapa pendekatan ini disebut lebih jujur untuk pembelajaran.

5. Tokosaya memilih pola *navbar* "menu selalu tampil" alih-alih pola hamburger resmi. Evaluasi pilihan itu: sebutkan keuntungan dan kerugiannya bagi Tokosaya yang hanya punya empat tautan menu, lalu jelaskan kondisi apa yang membuat kamu beralih ke pola hamburger dan apa yang dibutuhkan agar pola itu benar-benar berfungsi.

---

## Bab 11 — Form dan User Interface Design

**Essay (5 soal)**

1. Uraikan empat prinsip desain form yang dibahas pada Subbab 11.1 dan jelaskan alasan di balik masing-masing prinsip. Kaitkan salah satu prinsip dengan risiko kualitas data yang bisa muncul bila prinsip itu diabaikan pada form checkout Tokosaya.

2. Jelaskan perbedaan peran `checkbox` dan `radio` pada form HTML, lalu terangkan kapan pasangan `fieldset` dan `legend` perlu dipakai. Sertakan satu contoh *markup* singkat untuk kelompok radio yang benar, termasuk penanganan labelnya.

3. Kamu diminta menyusun layout form kontak Tokosaya agar pasangan medan pendek tampil berdampingan pada layar sedang ke atas, sementara medan panjang tetap selebar penuh. Sebutkan kelas-kelas yang kamu pakai (`row`, `g-3`, `col-md-6`, `col-12`), jelaskan fungsi masing-masing, dan jelaskan akibatnya bila `col-md-6` diganti menjadi `col-6`.

4. Sebuah panitia seminar kampus merilis form pendaftaran daring dengan gejala berikut: setiap medan hanya diberi *placeholder* tanpa label; pilihan "Ikut makan siang" dan "Butuh sertifikat" ditulis sebagai radio dengan `name` berbeda; seluruh pesan kesalahan disatukan menjadi "ada isian yang salah" di bawah form; dan tombol pengirimnya diberi label "Proses". Diagnosis keempat gejala itu dengan mengaitkannya pada prinsip atau ketentuan bab ini, lalu usulkan perbaikan konkret untuk masing-masing gejala.

5. Perhatikan potongan form berikut, lalu susun evaluasi aksesibilitasnya.

```html
<div class="mb-3">
  <label for="surel" class="form-label">Email</label>
  <input type="text" class="form-control" id="surel" name="surel"
         placeholder="Alamat email aktif">
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="promo">
  <label class="form-check-label" for="promo">Kirimi saya info promo.</label>
</div>
```

Temukan minimal tiga hal yang belum memenuhi checklist aksesibilitas bab ini (label, tujuan medan, gaya fokus, pesan yang dibaca), jelaskan dampaknya bagi pengguna pembaca layar, dan urutkan perbaikannya dari yang paling mendesak.

---

## Bab 12 — UI/UX dan Design System

**Essay (5 soal)**

1. Pada subbab 12.2 dikatakan bahwa whitespace bukan ruang yang terbuang. Jelaskan tiga tugas whitespace dalam sebuah antarmuka, lalu berikan satu contoh penerapannya pada kartu produk Tokosaya.

2. Jelaskan perbedaan antara warna primitif dan warna semantik. Setelah itu, jelaskan mengapa design system Tokosaya lebih memilih token semantik, dan sertakan dua contoh token beserta peran masing-masing.

3. Sebuah halaman baru Tokosaya dikerjakan oleh anggota tim yang berbeda. Jelaskan bagaimana perubahan satu nilai pada token `--clr-primary` di blok `:root` dapat membuat tombol utama, badge "Baru", dan garis fokus di seluruh halaman ikut berubah sekaligus, tanpa mengedit satu per satu aturan komponennya.

4. Seorang developer menempelkan ke halaman `promo.html`: sebuah tombol berlatar jingga dengan `border-radius: 4px`, jarak antarkartu sebesar 13 piksel, dan satu nilai heksa `#4F46E5` yang ditulis langsung di stylesheet halaman itu. Analisis pelanggaran yang terjadi terhadap design system Tokosaya, lalu susun urutan langkah perbaikannya.

5. Tim Tokosaya mengusulkan menambah satu warna baru, "merah promo", di samping `--clr-danger` yang sudah ada. Evaluasi usulan tersebut memakai aturan *do and don't* pada bab ini, dan tawarkan satu alternatif yang tetap menjaga keutuhan sistem.

---

## Bab 13 — Website Responsif dan Accessibility

**Essay (5 soal)**

1. Jelaskan empat prinsip POUR versi ringkas bab ini, dan berikan satu contoh butir pemeriksaan nyata untuk setiap prinsip pada halaman Tokosaya.

2. Jelaskan kapan kamu memilih `srcset` beserta `sizes` dan kapan memilih elemen `<picture>`. Terapkan pilihanmu pada gambar hero Tokosaya beserta alasannya, lalu jelaskan mengapa atribut `alt` tetap wajib pada keduanya.

3. Skenario: ketikan `katalog.html` dibuka pada lebar 360 px, muncul penggeser horizontal akibat satu nama produk panjang tanpa spasi; di saat yang sama judul hero terasa terlalu kecil di HP dan berlebihan di monitor 1400 px. Analisis penyebab kedua masalah itu dan susun langkah perbaikannya.

4. Tiga temuan audit proyek Tokosaya: (a) teks putih di atas badge amber, (b) input tanpa `label for`, dan (c) ikon keranjang tanpa nama. Klasifikasikan setiap temuan pada prinsip POUR yang paling tepat, usulkan perbaikannya, dan jelaskan mengapa perbaikan kontras sebaiknya dikerjakan di level token.

5. Setelah menjalankan Lighthouse, satu halaman Tokosaya meraih skor Accessibility yang tinggi. Jelaskan hal-hal apa yang tetap harus diperiksa manual dan mengapa, lalu rancang urutan audit lima langkah agar perbaikan halaman itu bisa dibuktikan secara terukur.

---

## Bab 14 — Implementasi Desain Figma ke HTML CSS

**Essay (5 soal)**

1. Bab ini menyebut *handoff* sebagai serah terima keputusan desain, bukan sekadar pengiriman berkas gambar. Uraikan dua akibat yang muncul di sisi pengembang dan dua akibat yang muncul di sisi desainer ketika nilai ukuran, jarak, warna, dan keadaan (*state*) tidak dituliskan dalam spesifikasi desain.

2. Jelaskan alur membaca sebuah frame Figma dari kerangka ke detail (frame, layer, fill/stroke, auto layout, grid), lalu terangkan bagaimana hasil bacaan itu dipetakan ke tiga lapis pekerjaan: token di blok `:root`, utilitas Bootstrap, dan CSS kustom bertoken.

3. Spesifikasi frame desktop Tokosaya menetapkan kontainer maksimum 1140 px, grid 12 kolom, dan gutter 24 px. Tunjukkan perhitungan yang menghasilkan lebar satu kolom Figma sebesar 73 px, lalu jelaskan mengapa angka 73 px tidak perlu kamu tulis di CSS dan bagaimana nilainya justru diwakili di kode.

4. Sebuah halaman dinyatakan "sudah setia" hanya karena sekilas tampak mirip dengan desain. Rancang prosedur pemeriksaan yang bisa dipertanggungjawabkan: sebutkan alat yang dipakai, cara membaca nilainya, perlakuan terhadap selisih kecil, dan tindakan yang diambil bila ditemukan selisih besar.

5. Desainer mengirim tiga butir revisi: "warna badge salah", "jarak kartu berubah", dan "font judul harus Poppins". Untuk setiap keluhan, sebutkan satu kemungkinan penyebab di sisi kode beserta satu langkah pemeriksaan atau perbaikan yang sesuai.

---

## Bab 15 — Final Project dan Quality Assurance

**Essay (5 soal)**

1. Final project diuraikan menjadi sembilan bagian anatomi sebelum QA dimulai. Jelaskan mengapa pemetaan itu diperlukan, lalu pilih empat bagian anatomi dan sebutkan satu fokus QA khas untuk masing-masing bagian.

2. Sebuah proyek berisi berkas `Produk Baru.html`, gambar `photo3.svg`, dan kelas CSS `.merah`, `.fix2`, serta `.x1finalFIX`. Jelaskan tiga dampak pola itu terhadap proses QA dan pemeliharaan proyek, lalu usulkan perbaikan konvensinya mengikuti kaidah penamaan Tokosaya.

3. Seorang mahasiswa menyatakan QA selesai karena Lighthouse memberi skor aksesibilitas yang tinggi. Evaluasi kelemahan cara berpikir itu, lalu susun langkah audit aksesibilitas yang benar menurut lima pemeriksaan wajib pada bab ini beserta cara pengujian tiap poin secara singkat.

4. Mengapa versi CDN yang terkunci dan konvensi penamaan serta format gambar dimasukkan ke dalam checklist pra-deployment? Hubungkan jawabanmu dengan risiko regression dan link mati yang dibahas pada bab ini.

5. Saat sprint perbaikan, timmu menerapkan lima perubahan CSS sekaligus dalam satu putaran, lalu menemukan halaman lain ikut rusak. Nilailah praktik itu terhadap metode debugging empat langkah dan uji regresi, kemudian usulkan protokol perbaikan yang lebih aman langkah demi langkah.

---


