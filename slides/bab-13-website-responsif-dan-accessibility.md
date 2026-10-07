---
marp: true
theme: academic
paginate: true
size: 16:9
lang: id
title: "Bab 13 — Website Responsif dan Accessibility"
description: "Audit responsif dan accessibility tokosaya-bootstrap: breakpoint konsisten, gambar serta tipografi cair, dan WCAG POUR level A/AA."
footer: "Bab 13 · Website Responsif dan Accessibility"
---

<!-- _class: lead -->
<!-- _paginate: skip -->
<!-- _footer: '' -->

# Website Responsif dan Accessibility

**Bab 13** · Rapi di semua layar, bisa dipakai semua orang

Studi kasus: **Tokosaya**

<!--
Buka dengan mengingatkan posisi bab ini: Bab 12 baru selesai merapikan design system,
dan sekarang kita menguji hasilnya di perangkat nyata. Tanyakan siapa yang pernah
membuka halaman sendiri dari HP lalu merasa tampilannya beda jauh dari monitor.
Katakan bahwa bab ini nggak menambah halaman baru, tapi menaikkan kualitas lima
halaman yang sudah ada.
-->

---

# Tujuan Pembelajaran

Setelah menyelesaikan bab ini, kamu bisa:

- Bedanya mobile-first dan desktop-first, plus kompensasinya
- 2–3 breakpoint konsisten buat seluruh proyek
- Gambar responsif dan tipografi cair pakai `clamp()`
- Navigasi responsif CSS murni dan pola footer-nav
- WCAG POUR level A/AA: alt, heading, link, kontras
- Antarmuka ramah keyboard dan audit pakai DevTools

<!--
Bab ini menggarap sub-capaian S13.1 dengan CPMK 5, CPMK 9, dan CPMK 11, jadi bacakan
tujuan ini singkat saja. Tekankan bahwa urutan bab mengikuti alur kerja: strategi
responsif dulu, baru aksesibilitas, lalu audit yang terukur. Sebutkan bahwa dua
bagian besar itu bertemu di praktikum, waktu seluruh halaman Tokosaya dibenahi.
-->

---

# Rapi di Monitor, Ambruk di HP

- Di monitor laboratorium, semua halaman Tokosaya tampak baik
- Di HP di tengah bazar, kartu produk jadi sempit
- Teks makin susah dibaca, menu makan banyak ruang
- Pengguna harus geser ke samping buat lihat yang terpotong
- Pelanggan lain memakai screen reader tiap hari
- Gambar tanpa `alt` cuma terdengar "gambar"

<!--
Ceritakan pemilik toko yang membuka katalog.html dari HP di tengah bazar, persis kayak
di buku. Tanyakan siapa yang paling dirugikan oleh layout yang cuma dipikirkan buat
satu ukuran layar. Jawaban yang diharapkan: pengguna HP dan pengguna screen reader.
Tutup dengan alur kerja bab ini: audit dulu, perbaiki satu per satu, lalu cek ulang.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Strategi Responsif dan Breakpoint

## Dari layar kecil, lalu perlahan melebar

<!--
Alihkan perhatian dari keluhan pengguna ke keputusan teknis pertama: gimana gaya
ditulis. Katakan bahwa dua subbab berikut yang menentukan apakah layout Tokosaya rapi
atau jadi tambal sulam media query.
-->

---

# Mobile-First vs Desktop-First

| Aspek | Mobile-first | Desktop-first |
|---|---|---|
| Gaya dasar | layar kecil, satu kolom | layar besar, multi kolom |
| Arah media query | `min-width`, menaik | `max-width`, menurun |
| Cocok buat | website pelanggan umum | dashboard staf, data padat |
| Risiko utama | layar besar terasa kosong | HP jadi tambalan |
| Kompensasi | desain ruang buat layar lebar | uji 320–576 px sejak awal |

> Keduanya sama-sama sah; bedanya ada di cara berpikir dan risiko yang dijaga.

<!--
Bahas baris "arah media query" paling lama, karena itu yang bakal kelihatan di file
CSS mahasiswa. Tanyakan strategi mana yang cocok buat Tokosaya, lalu minta alasannya.
Jawaban yang diharapkan: mobile-first, karena pelanggan umumnya membuka dari HP.
-->

---

# Kenapa Mobile-First Banyak Dipakai

- Mulai dari layar kecil memaksa menentukan prioritas konten
- Gaya dasar sederhana jarang saling menimpa
- Media query `min-width` tinggal menambah, bukan menimpa
- HP dan jaringan seluler jadi kondisi paling menantang
- Contoh Tokosaya: satu kolom kartu, lalu melebar

<!--
Tekankan alasan pertama: layar kecil memaksa kelas memilih apa yang wajib muncul dulu.
Tanyakan apa yang terjadi kalau gaya dasar justru ditulis buat layar besar. Jawaban
yang diharapkan: layar kecil cuma jadi tambalan di akhir. Sebutkan bahwa gaya dasar
Tokosaya dimulai dari satu kolom kartu produk.
-->

---

# Desktop-First: Kapan Masih Masuk Akal

- Dashboard staf dan back office memang sering dibuka di desktop
- Kepadatan informasi bisa dirancang penuh sejak awal
- Risiko: gaya desktop berakhir jadi tambalan media query
- Risiko: konten cuma dipersempit, bukan ditata ulang
- Risiko: galeri besar dan tabel lebar susah disederhanakan
- Solusi: uji 320–576 px sejak iterasi pertama

<!--
Ini bagian yang sering dianggap "strategi yang salah", padahal bukan. Beri contoh
sistem akademik buat operator atau back office dengan tabel lebar. Tanyakan dua alasan
kenapa tim sistem informasi boleh memilih desktop-first, lalu catat jawabannya di
papan. Tutup dengan kompensasinya: uji layar kecil sejak awal, bukan di akhir.
-->

---

# Tangga Breakpoint Tokosaya

- Strategi proyek: pilih 2–3 breakpoint, sejajarkan Bootstrap
- `578px`, `693px`, dan `1024px` itu angka ajaib, susah dirawat

| Lebar | Panggilan | Grid katalog | Navigasi |
|---|---|---|---|
| 0 | base | 1 kolom | menumpuk |
| 576 | sm | 2 kolom | menumpuk |
| 768 | md | 3 kolom | 1 baris |
| 992 | lg | 4 kolom | 1 baris |
| 1200 | xl | 4 kolom | 1 baris |

<!--
Minta mahasiswa membaca tangga ini dari kiri ke kanan dan menyebutkan di lebar berapa
katalog berubah. Tanyakan kenapa 578px tergolong angka ajaib. Jawaban yang diharapkan:
angkanya nggak menceritakan maksud apa pun dan nggak selaras dengan Bootstrap. Tutup
dengan pesan bahwa keputusan breakpoint lahir dari kebutuhan konten, bukan daftar HP.
-->

---

# Satu Strategi, Dua Pihak Kode

```css
/* ============================================================
   Tokosaya — css/style.css (versi Bab 13)
   Strategi breakpoint: base (< 768px), md 768px, lg 992px
   (selaras dengan Bootstrap 5.3)
   ============================================================ */
```

- Kelas Bootstrap `col-md-4` dan `col-lg-3` ikut bicara 768 dan 992
- Media query kustom kita ditulis `min-width: 768px`
- Tulis keputusan breakpoint sebagai komentar di atas media query

<!--
Tunjukkan bahwa komentar kepala file ini yang menyelamatkan proyek enam bulan lagi.
Tanyakan apa yang terjadi kalau Bootstrap memakai md 768 px sementara CSS kustom pakai
700 px. Jawaban yang diharapkan: ada dua strategi yang bertabrakan dan layout berubah
di tempat yang nggak didokumentasikan. Ingatkan urutan link CSS: Bootstrap dulu,
kustom setelahnya.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Gambar, Tipografi, dan Navigasi

## Elemen yang paling cepat rusak pas layar berubah

<!--
Masuk ke tiga elemen yang paling sering bikin layout berantakan: gambar, teks judul,
dan menu navigasi. Sebutkan bahwa semuanya diurus CSS murni tanpa skrip.
-->

---

# Gambar Responsif: `srcset` dan `sizes`

- `img { max-width: 100%; }` bikin gambar nggak meluber
- Tapi file yang sama tetap dimuat di semua layar
- `srcset` menawarkan beberapa file dengan lebar berbeda
- Contoh isinya: `hero-480.svg 480w, hero-1200.svg 1200w`
- `sizes` menjelaskan lebar area yang ditempati gambar
- `alt` tetap wajib di setiap variasi gambar

<!--
Tanyakan berapa file gambar yang diunduh pengguna HP kalau `srcset` nggak dipakai.
Jawaban yang diharapkan: satu file besar yang sama buat semua layar. Tegaskan bahwa
`max-width: 100%` cuma mencegah luber, belum menghemat unduhan. Sebutkan bahwa browser
yang memilih file paling pas, bukan kita.
-->

---

<!-- _class: compact -->

# `picture`: Ganti Komposisi Gambar

```html
<picture>
  <!-- browser memilih source pertama yang medianya cocok -->
  <source media="(min-width: 992px)" srcset="img/hero-1200.svg">
  <source media="(min-width: 576px)" srcset="img/hero-768.svg">
  <img src="img/hero-480.svg"
       alt="Susunan keyboard, mouse, dan monitor Tokosaya"
       width="1200" height="675"
       class="hero-img">
</picture>
```

- Penulisan `min-width` dimulai dari kondisi terlebar
- Browser memilih `source` pertama yang cocok
- `width` dan `height` mengunci rasio biar layout nggak melompat

<!--
Tanyakan apa yang terjadi kalau urutan `source` dibalik, 576 px dulu di atas. Jawaban
yang diharapkan: source 576 px selalu cocok buat layar besar juga, padahal ia
ditujukan buat layar sempit. Jelaskan bedanya: `picture` mengganti komposisi gambar,
`srcset` pada `img` cuma mengganti resolusi dari komposisi yang sama.
-->

---

# Tipografi Cair dengan `clamp()`

```css
h1 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.75rem, 4vw + 1rem, 2.75rem);
  line-height: 1.2;
}
p { font-size: clamp(1rem, 0.95rem + 0.2vw, 1.125rem); line-height: 1.6; }
```

- Tiga nilai: minimum, ideal, dan maksimum
- `4vw + 1rem` bikin judul tumbuh mengikuti lebar layar
- Nggak pernah lebih kecil dari 1,75rem atau lebih dari 2,75rem
- Nggak ada loncatan mendadak antara 767px dan 768px

<!--
Tanyakan apa yang biasanya digantikan oleh satu baris clamp ini. Jawaban yang
diharapkan: tiga media query terpisah buat setiap ukuran judul. Tunjukkan di browser
sambil melebarkan jendela biar kelas melihat judulnya tumbuh terus, bukan melompat
pas 768 px. Sebutkan bahwa nilai tengahnya boleh gabungan satuan.
-->

---

# Perlindungan dari Luber

```css
h1, h2, h3, .hero-title {
  font-family: var(--font-heading);
  color: var(--clr-dark);
  overflow-wrap: break-word; /* kustom: proteksi luber judul */
}
```

- `img-fluid` bikin gambar ikut menyempit
- `overflow-wrap: break-word` atau `anywhere` buat teks panjang
- `min-width: 0` pada anak langsung kontainer flex
- Hindari lebar piksel tetap pada elemen yang harus mengalir

<!--
Tanyakan kenapa penggeser horizontal muncul padahal media querynya udah benar. Jawaban
yang diharapkan: ada satu elemen bandel, misalnya nama produk tanpa spasi atau gambar
berukuran tetap di dalam baris flex. Tekankan bahwa empat kebiasaan kecil di slide ini
yang menjaga halaman tetap rapi dari 320 px sampai 1400 px.
-->

---

# Tiga Pola Navigasi Responsif

| Pola | Cara kerja | Catatan |
|---|---|---|
| flex-wrap | daftar link melipat ke baris baru | cocok buat 3–5 link |
| Menumpuk | vertikal di bawah 768 px, horizontal di atasnya | header jadi tinggi di HP |
| footer-nav | link utama ikut ditulis di footer | nyaman dijangkau jempol |

- Target sentuh link minimal sekitar 44 px termasuk padding
- Halaman aktif ditandai `aria-current="page"`

<!--
Ini slide yang paling sering ditanyakan waktu praktikum. Tanyakan pola mana yang cocok
buat empat link Tokosaya, lalu minta alasannya. Jawaban yang diharapkan: pola menumpuk,
karena nggak butuh ikon hamburger dan tiap link jadi target sentuh penuh. Ingatkan
bahwa ikon hamburger resmi Bootstrap bergantung pada file skrip, jadi di luar cakupan.
-->

---

<!-- _class: compact -->

# Navigasi Menumpuk Tanpa Skrip

```css
/* mobile: menu menumpuk lebar penuh */
.site-nav ul { flex-direction: column; align-items: flex-start; }
@media (min-width: 768px) {
  /* tablet & lebih: menu horizontal satu baris */
  .site-nav ul {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }
}
```

- Tanpa ikon hamburger, jadi nggak perlu skrip apa pun
- Link jadi target sentuh penuh di layar kecil

<!--
Tunjukkan halaman yang sama di 360 px dan 992 px lewat panel perangkat biar kelas
melihat perubahannya nyata. Tanyakan kenapa kelemahan pola ini adalah header jadi
tinggi di HP. Jawaban yang diharapkan: karena semua link ditumpuk vertikal di bawah
brand. Tambahkan bahwa jarak dan ketebalan garis perlu diringkas buat mengimbanginya.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Aksesibilitas: WCAG Level A/AA

## Bisa dipakai, bukan cuma kelihatan bagus

<!--
Beri jeda sebelum bagian ini dan katakan bahwa bagian ini paling murah diperbaiki tapi
paling sering gagal di dunia nyata. Ingatkan bahwa semuanya murni HTML dan CSS, tanpa
satu atribut pun yang meminta skrip.
-->

---

# Aksesibilitas Itu Soal Siapa yang Bisa Pakai

- Pengguna screen reader dan pengguna yang cuma pakai keyboard
- Pengguna dengan penglihatan terbatas dan pengguna di bawah matahari
- Pengguna dengan koneksi lambat
- Bukan fitur tambahan; di layanan publik ini soal hak pengguna
- Ramah screen reader biasanya lebih mudah diindeks mesin pencari

<!--
Tanyakan siapa di kelas yang pernah memakai halaman cuma dengan tombol Tab, tanpa
tetikus. Katakan bahwa kelompok itu nyata dan jumlahnya nggak kecil di layanan publik.
Tekankan bahwa aksesibilitas memperluas jangkauan layanan, bukan sekadar memenuhi
aturan. Sebutkan bahwa struktur makna yang rapi juga membantu mesin pencari.
-->

---

# POUR: Empat Prinsip WCAG

| Prinsip | Artinya | Contoh |
|---|---|---|
| Perceivable | dapat dipersepsi | `alt` buat gambar, teks buat audio |
| Operable | dapat dioperasikan | navigasi dan form jalan lewat keyboard |
| Understandable | dapat dipahami | bahasa jelas, label input jelas |
| Robust | teguh | markup benar, dibaca penuh alat bantu |

- Tingkat kepatuhan: A dasar, AA lazim diwajibkan, AAA tertinggi
- Acuannya WCAG 2.2 terbitan W3C

<!--
Minta mahasiswa menebak prinsip mana yang menaungi `alt` sebelum kamu menjawabnya.
Jawaban yang diharapkan: Perceivable. Lanjutkan dengan label form yang terhubung,
dan tanyakan prinsipnya. Jawaban yang diharapkan: Understandable dan Robust. Tegaskan
bahwa target buku ini cuma butir level A dan AA, jadi jangan tenggelam di AAA.
-->

---

<!-- _class: compact -->

# Peta Butir A/AA yang Dibahas

- Perceivable: `alt` tiap gambar dan `alt=""` buat dekoratif
- Perceivable: kontras teks cukup, diperiksa di color picker
- Operable: semua interaksi jalan lewat keyboard
- Operable: ada jalan menuju konten utama lewat skip link
- Understandable: heading berurutan, link bermakna, `lang="id"`
- Robust: pasangan label `for` dan `id` terhubung

> Aksesibilitas bukan soal skor saja; alt yang tepat tetap keputusan manusia.

<!--
Gunakan slide ini sebagai peta mental sebelum masuk ke praktikum. Tanyakan butir mana
yang paling murah diperbaiki tapi paling besar dampaknya. Jawaban yang diharapkan:
`alt` dan teks link. Ingatkan bahwa alat bantu mempercepat kerja, tapi keputusan soal
gambar dekoratif atau bermakna tetap butuh orang yang paham konteks.
-->

---

# Alt Text yang Bermakna

```html
alt="Keyboard Mekanis KX-210 dengan 87 tombol"
```

- Alt menggambarkan kegunaan gambar dalam konteks halaman
- `keyboard-mekanis.svg` bukan alt; sebut nama produknya
- Gambar dekoratif pakai `alt=""` biar dilewati
- Jangan ulangi nama produk di alt dan judul kartu
- Jangan mulai dengan "gambar", screen reader sudah mengumumkannya

<!--
Minta kelas menulis alt buat garis pemisah ornamen, baru tunjukkan jawabannya. Jawaban
yang diharapkan: `alt=""`, karena gambar itu murni hiasan. Lanjutkan dengan kesalahan
paling umum, yaitu mengulang nama produk di alt dan di judul kartu sehingga pengguna
mendengar dua kali. Tekankan cukup satu tempat yang paling bermakna.
-->

---

# Heading Berurutan, Bukan Soal Ukuran

```html
<h2 class="h6 produk-card-title">Keyboard Mekanis KX-210</h2>
```

- Satu `h1` per halaman, turun bertingkat tanpa melompat
- Heading itu peta daftar isi buat pengguna screen reader
- Ukuran tampilan nggak menentukan level heading
- Judul kartu produk tetap `h2`, dikecilkan lewat kelas

<!--
Tanyakan level yang tepat buat bagian "Jam Layanan" di halaman kontak. Jawaban yang
diharapkan: `h2`, bukan `h4` cuma karena ukurannya terasa pas. Tekankan pemisahan
level semantik dan ukuran visual, lalu tunjukkan `class="h6"` pada `h2` di katalog
sebagai buktinya. Ingatkan bahwa urutan heading yang benar juga memudahkan siapa pun
memindai halaman.
-->

---

# Link yang Jelas Dibaca Sendiri

- Teks link harus tetap masuk akal dibaca terpisah
- "Klik di sini" atau "selengkapnya" nggak menyebut tujuan
- Sebut tujuannya: "Lihat katalog keyboard"
- Uji: kumpulkan semua link jadi satu daftar, masih jelas?
- Link ikon kayak keranjang wajib punya `aria-label`

<!--
Jalankan uji daftar link bareng-bareng: minta kelas membayangkan semua teks link di
satu halaman dikumpulkan tanpa kalimat di sekitarnya. Tanyakan mana yang masih bisa
ditebak. Jawaban yang diharapkan: yang menyebut tujuannya, bukan yang bilang "baca".
Sebutkan bahwa link ikon keranjang nggak punya teks terlihat, jadi `aria-label` wajib.
-->

---

# Kontras AA: 4,5:1 dan 3:1

- Kontras adalah rasio terang antara warna teks dan latarnya
- Teks normal butuh rasio minimal 4,5:1
- Teks besar dan teks tebal butuh 3:1
- Elemen non-teks kayak batas input dan ikon butuh 3:1
- Kombinasi berisiko: teks putih di atas warna amber
- Perbaiki di level design token, bukan tambalan per halaman

<!--
Tanyakan kenapa teks putih di atas amber sering dipakai padahal gagal. Jawaban yang
diharapkan: pasangan itu terasa aman di mata, padahal rasionya di bawah 4,5:1.
Tunjukkan cara membaca rasio di color picker DevTools, bukan menghitung manual.
Tekankan bahwa perbaikannya dilakukan sekali di token, bukan diulang di tiap halaman.
-->

---

<!-- _class: compact -->

# Focus State: Rancang Ulang, Jangan Hapus

```css
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 3px solid var(--clr-primary-dark);
  outline-offset: 2px;
  border-radius: 4px;
}
```

- Cincin fokus satu-satunya tanda posisi pengguna keyboard
- `outline: none` tanpa pengganti bikin mereka tersesat
- `:focus-visible` cuma muncul pas keyboard dipakai

<!--
Tanyakan kenapa `outline: none` digemari pemula. Jawaban yang diharapkan: cincin
bawaannya terasa kurang cantik waktu diklik pakai mouse. Jelaskan bahwa
`:focus-visible` menyelesaikan masalah itu: mouse tetap rapi, jalur Tab tetap
kelihatan. Sebutkan juga bahwa `outline-offset` menggambar cincin di luar elemen
supaya tampilannya nggak ketutupan.
-->

---

# Antarmuka Ramah Keyboard

- Perjalanan penting cukup dengan Tab, Shift+Tab, Enter, dan spasi
- Urutan fokus mengikuti urutan DOM yang logis
- Hindari `tabindex` positif di elemen mana pun
- Pakai `-1` buat target programatik, `0` buat kasus khusus
- Tombol asli dan link ber-`href` otomatis bisa difokuskan
- Elemen yang cuma terlihat kayak tombol mematikan keyboard

<!--
Tanyakan apa yang rusak kalau seseorang menambah `tabindex="5"` di tengah halaman.
Jawaban yang diharapkan: urutan tab jadi menyimpang dari urutan visual dan pengguna
mudah tersesat. Tekankan bahwa urutan DOM yang seharusnya membawa urutan tab.
Tutup dengan kebiasaan penutup: tabulasi sepuluh langkah setiap halaman selesai, lalu
catat apa yang terjadi.
-->

---

# Skip Link: Link Pertama di Body

```html
<a class="skip-link" href="#konten-utama">Lewati ke konten utama</a>
```

- Link ini diletakkan paling awal di dalam `body`
- Jadi elemen pertama yang menerima fokus pas Tab ditekan
- `<main id="konten-utama" tabindex="-1">` jadi sasaran lompatan
- Sesuai kriteria "bypass blocks" pada WCAG

<!--
Tegaskan bahwa posisi elemen ini bukan pilihan gaya, melainkan syarat: harus jadi
fokus pertama. Uji selalu dengan keyboard, bukan klik, karena klik nggak akan
menyingkap masalah fokus. Tanyakan apa yang terjadi kalau skip link tertutup elemen
lain karena `z-index` lebih rendah. Jawaban yang diharapkan: linknya nggak kelihatan
meski fokusnya udah pindah ke sana.
-->

---

<!-- _class: compact -->

# CSS Skip Link: Muncul Pas Fokus

```css
.skip-link {
  position: absolute;
  top: -48px;
  left: 16px;
  z-index: 1080;
  background: var(--clr-primary-dark);
  color: #fff;
  padding: 10px 16px;
  border-radius: 0 0 8px 8px;
  text-decoration: none;
  transition: top 0.15s ease-in-out;
}
.skip-link:focus { top: 0; }
```

- Normalnya disembunyikan di atas layar lewat `top: -48px`
- Muncul ke `top: 0` pas menerima fokus

<!--
Tanyakan kenapa link ini nggak disimpan pakai `display: none`. Jawaban yang
diharapkan: elemen yang disembunyikan begitu nggak bisa menerima fokus, jadi
pengguna keyboard nggak akan pernah sampai ke sana. Tekankan bahwa teknik ini murni
CSS dan nggak butuh satu baris skrip. Sebutkan nama kelas di HTML dan CSS harus
identik, karena salah ketik di sini adalah penyebab kegagalan paling sering.
-->

---

<!-- _class: compact -->

# Form yang Ramah Keyboard

```html
<div class="mb-3">
  <label for="email" class="form-label">Alamat email</label>
  <input type="email" class="form-control" id="email" name="email"
         autocomplete="email" required>
</div>
<fieldset class="mb-3">
  <legend class="fs-6">Kebutuhan Anda</legend>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="topik" id="topik-beli" value="beli">
    <label class="form-check-label" for="topik-beli">Pertanyaan produk</label>
  </div>
</fieldset>
```

- `label for` harus cocok persis dengan `id` input
- `fieldset` dan `legend` memberi konteks pada radio group
- `type="email"` menyaring keyboard HP ke layout surel

<!--
Tanyakan apa dua hal yang hilang kalau label nggak terhubung ke input. Jawaban yang
diharapkan: klik label nggak menyalakan input, dan screen reader nggak membaca nama
kolomnya. Tunjukkan radio group tanpa `fieldset` biar kelas mendengar bedanya.
Ingatkan juga untuk nggak pernah memalsukan tombol pakai elemen netral.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Praktik: Audit dan Refactor Tokosaya

## Lima halaman, satu daftar periksa

<!--
Masuk ke praktikum. Ingatkan bahwa hasilnya jadi milestone M5 yang dipakai pada Final
Project, jadi kerjakan di proyek masing-masing. Tujuan praktikumnya bukan halaman
cantik, tapi perbaikan yang terdokumentasi dan bisa diukur.
-->

---

<!-- _class: compact -->

# Praktikum: Tujuan dan Kebutuhan

- Audit kelima halaman proyek tokosaya-bootstrap
- Rapikan jadi responsif penuh: base, md 768, lg 992
- Perbaiki `alt`, urutan heading, dan kontras AA
- Tampilkan focus state dan tambahkan skip link
- Semua temuan dicatat di daftar periksa 14 butir
- Alatnya Chrome DevTools, bukan kode yang ditulis

<!--
Bacakan kebutuhan praktikum lalu pastikan semua orang punya lima halaman dan folder
`img`. Tekankan bahwa panel perangkat dan Lighthouse adalah fitur browser: mahasiswa
cuma membuka tab, menekan tombol, dan membaca temuan. Katakan bahwa nggak ada satu
baris pun skrip yang perlu dipahami di mata kuliah ini.
-->

---

<!-- _class: compact -->

# Langkah Kerja 1–7: Audit Dulu

- Audit visual per breakpoint: 360 px sampai 1200 px
- Audit struktur: semua `img` punya `alt`?
- Audit keyboard: tekan Tab dari awal halaman
- Audit kontras lewat color picker di DevTools
- Jalankan Lighthouse kategori Accessibility
- Tambahkan skip link dan `#konten-utama` di semua halaman

<!--
Demokan langkah ini di layar, jangan cuma dibacakan. Berhenti di langkah audit
keyboard karena di situlah temuan paling banyak muncul. Ingatkan bahwa skip link
biasanya belum ada di proyek Bab 12, dan itu memang bagian refactor di bab ini.
Sebutkan kolom tabel temuan: temuan, status sebelum, dan status sesudah.
-->

---

<!-- _class: compact -->

# Langkah Kerja 8–14: Refactor dan Uji Ulang

- Perbaiki urutan heading yang melompat
- Perbaiki `alt` produk dan pembatas dekoratif
- Terapkan tipografi cair pakai `clamp()`
- Tetapkan breakpoint 768 dan 992, rapikan navigasi
- Rapikan focus state, kontras, dan label form
- Uji ulang langkah 1–5, lalu bandingkan hasilnya

<!--
Ingatkan aturan penting: perbaiki satu kategori per putaran biar sebab akibatnya
jelas. Tanyakan apa yang terjadi kalau semua dirapikan sekaligus. Jawaban yang
diharapkan: nggak ada yang tahu perubahan mana yang menaikkan skor. Sebutkan juga
bahwa nilai `alt` produk diambil dari dataset Tokosaya, satu sampai dua kalimat.
-->

---

<!-- _class: compact -->

# Hasil yang Diharapkan

- Nggak ada penggeser horizontal dari 320 px sampai 1400 px
- Katalog berubah 2, 3, lalu 4 kolom pada 768/992 px
- Tab pertama memunculkan skip link di semua halaman
- Satu `h1` per halaman, heading nggak melompat
- Cincin fokus tampak dan nggak ada yang menghapusnya
- Semua pasangan warna bacaan minimal 4,5:1

<!--
Bandingkan kondisi sebelum dan sesudah langsung di browser, jangan cuma menampilkan
slide ini. Tanyakan apa arti "area kosong boleh ada, geseran wajib tidak". Jawaban
yang diharapkan: ruang kosong itu pilihan desain, sedangkan penggeser horizontal
selalu cacat. Ingatkan bahwa skor Lighthouse yang naik tetap perlu dicatat di tabel
temuan, dan skor tinggi bukan sertifikat.
-->

---

# Latihan

- Jelaskan beda mobile-first dan desktop-first, lalu pilih buat back office
- Tulis media query nav: menumpuk, lalu horizontal di 768 px
- Sebut kenapa 578px, 693px, dan 941px tergolong angka ajaib
- Tulis nilai `alt` lima gambar, termasuk pembatas ornamen
- Uji `index.html` dengan Tab sepuluh kali, catat satu cacatnya

> Tulis alasannya, bukan cuma nilainya.

<!--
Kerjakan butir pertama bareng-bareng di papan, sisanya buat latihan mandiri. Perhatikan
butir angka ajaib: tujuannya bukan mencari jawaban benar, tapi menyadari bahwa angka
nggak menceritakan maksud dan nggak selaras dengan proyek. Tanyakan juga butir alt
kelima gambar, karena di situ penilaian konteks benar-benar dilatih.
-->

---

<!-- _class: compact -->

# Cek Daftar Audit

- Ada `<meta name="viewport">` di semua halaman
- Skip link di awal `body` plus target `#konten-utama`
- Semua `img` punya `alt`, atau `alt=""` kalau dekoratif
- Satu `h1`, urutan h1 sampai h3 tanpa lompat
- Link bermakna, ikon keranjang punya `aria-label`
- Kontras bacaan minimal 4,5:1 dan focus selalu terlihat

> Daftar lengkapnya 14 butir; isi kolom halaman, lalu coret dengan jujur.

<!--
Minta mahasiswa saling memeriksa proyek pakai daftar ini dan menunjukkan buktinya
langsung di kode atau di DevTools. Katakan bahwa temuan harus terverifikasi, bukan
tebakan. Tegaskan bahwa mencoret tanpa bukti cuma memindahkan masalah ke pengguna
berikutnya.
-->

---

# Rangkuman

- Mobile-first menulis gaya dasar layar kecil, `min-width` menaik
- Strategi breakpoint sehat: 768 dan 992 px, bukan angka ajaib
- `srcset` dan `picture` mengurus variasi gambar, `alt` tetap wajib
- `clamp()` bikin tipografi mengalir, `overflow-wrap` menahan luber
- WCAG POUR: alt, heading, link, kontras, dan focus
- Pengujian pakai panel perangkat dan Lighthouse DevTools

<!--
Tutup dengan pesan utama: rapi di satu layar belum cukup, halaman harus bisa dipakai
di semua perangkat dan oleh semua orang. Sebutkan bahwa Bab 14 menerima desain dari
Figma, dan di situ seluruh disiplin responsif dan aksesibilitas bab ini jadi syarat
kelulusan desain. Ingatkan bahwa audit bukan pekerjaan tambahan di akhir, tapi bagian
dari cara kerja.
-->

---

<!-- _class: lead -->
<!-- _footer: '' -->

# Tugas dan Refleksi

Tukar proyek tokosaya-bootstrap dengan rekan sebangku, lalu audit pakai daftar periksa 14 butir. Kumpulkan tabel temuan, daftar keparahan, dan satu halaman yang memperbaiki tiga temuan tertinggi.

**Pertanyaan refleksi:** bagian mana dari proyekmu yang paling nggak siap dibuka pengguna screen reader?

<!--
Tugas individu plus pasangan: yang dinilai adalah temuan yang terverifikasi, perbaikan
yang disertai alasan, dan kode yang tetap mematuhi kontrak proyek tanpa skrip. Tekankan
bahwa yang dinilai bukan "websitenya bagus atau nggak", melainkan daftar temuan yang
terukur dan bisa dikerjakan orang lain. Minta mahasiswa menuliskan alasan prioritasnya,
karena itulah peran auditor sistem informasi.
-->
