# BAB 2 — HTML5 dan Struktur Semantik

## Deskripsi Singkat

Bab ini membahas kerangka dokumen HTML5 dan elemen-elemen yang membentuk struktur halaman:
elemen teks, list, table, link, image, form dasar, serta elemen semantik kayak `header`,
`nav`, `main`, `section`, `article`, `aside`, dan `footer`. Di Bab 1 kamu sudah menulis
dokumen HTML pertama dan melihatnya di browser. Di bab ini, kamu akan belajar menyusun
halaman Tokosaya dengan struktur yang jelas dan bermakna. Struktur semantik ini juga
jadi bekal buat Bab 3, karena selector CSS bekerja pada elemen yang kamu susun.

## Tujuan Pembelajaran

Setelah menyelesaikan bab ini, Anda diharapkan bisa:

1. Menjelaskan struktur dasar dokumen HTML5: DOCTYPE, elemen `html` dengan atribut `lang`,
   `head`, dan `body`, beserta peran `meta charset`, `meta viewport`, dan `title`.
2. Mengenali elemen konten HTML5 (heading, paragraf, list, table, link, image, form)
   dan memilih elemen yang sesuai untuk tiap jenis konten.
3. Menggunakan elemen semantik HTML5 (`header`, `nav`, `main`, `section`,
   `article`, `aside`, `footer`) pada halaman profil Tokosaya.
4. Membedakan penggunaan `div`, `section`, dan `article` dalam struktur halaman.
5. Memahami manfaat markup semantik untuk aksesibilitas *screen reader*, SEO dasar,
   dan pemeliharaan kode.
6. Menyusun struktur halaman company profile (`index.html` dan `tentang.html`) yang
   konsisten satu sama lain.

## Capaian Pembelajaran

Bab ini melayani **CPMK 2**: *membuat struktur website multi-halaman menggunakan HTML5
semantik*. Sub-capaian yang dinilai pada bab ini adalah:

- **S2.1** — Menyusun dokumen HTML5 dengan struktur semantik yang benar: membuat
  kerangka `head` yang lengkap dan memetakan bagian halaman ke elemen semantik.
- **S2.2** — Menggunakan elemen konten (teks, gambar, list, table, form) dengan tepat:
  memilih elemen berdasarkan makna konten, bukan tampilannya.

Kedua sub-capaian ini dinilai lewat praktikum menyusun `index.html` dan `tentang.html`,
serta evaluasi di akhir bab. Keterampilan yang sama akan muncul lagi di UTS pada Bab 8.
Jadi, kebiasaan menulis markup semantik yang mulai dibangun sekarang akan berguna saat
Anda membuat website secara utuh.

## Kata Kunci

HTML5, HTML Living Standard yang mengatur struktur dokumen web; **DOCTYPE**, deklarasi
tipe dokumen pada baris pertama file; **semantik** (*semantic*), makna bawaan elemen yang
menjelaskan apa isi kontennya; **elemen semantik** (*semantic elements*), elemen kayak
`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`; **landmark**, wilayah
halaman yang dikenali pembacanya sebagai tujuan navigasi; **screen reader**, perangkat
lunak pembaca layar buat pengguna tunanetra; **SEO**, optimasi mesin pencari
(*search engine optimization*) buat halaman mudah ditemukan; **alt text**, teks alternatif
pada gambar; **hierarki heading**, urutan `h1` hingga `h6` yang menunjukkan tingkatan
informasi; **markup**, kode berupa tag yang menandai struktur dan makna konten.

## Apersepsi

Bayangkan tim pengembang Tokosaya pada awal 2020. Toko online UMKM ini baru berdiri,
dan satu-satunya halaman yang tersedia adalah file HTML panjang berisi ratusan baris
`div` tanpa nama yang jelas. Pas pemilik minta bagian "kisah Tokosaya" dipindah ke
halaman tersendiri, developer harus habiskan waktu mencari batas bagian itu di
antara `div` yang bertumpuk. Pas pelanggan tunanetra membuka halaman dengan
*screen reader*, alatnya cuma mengumumkan "region" tanpa nama lalu membaca semua isi
secara berurutan. Mesin pencari pun kesulitan memahami susunan halaman dan cuma bisa
mengandalkan teksnya.

Kisah ini menunjukkan bahwa markup bukan sekadar pembungkus teks. Dengan markup, kita
bisa **memberi nama pada struktur informasi**. Hal serupa bisa terjadi di sistem
informasi kampus: kalau strukturnya nggak jelas, pengumuman penting bisa tersembunyi
di bawah menu panjang dan pengguna alat bantu sulit menemukan jalan pintas. Dengan
semantik yang tepat, susunan halaman bisa dipahami tanpa harus membuka file:
"halaman ini punya navigasi di bagian atas, tiga bagian utama, dan kontak di bawah".

Di bab ini, kamu akan belajar mencegah masalah kayak yang dialami Tokosaya: mulai dari
menyusun `head`, memilih elemen konten sesuai maknanya, sampai membuat struktur halaman
company profile. Kita mulai dari dasar dulu: struktur dokumen HTML5.

## Materi Pembelajaran

### 2.1 Struktur Dokumen HTML5

Halaman web adalah dokumen HTML5, yaitu file teks biasa yang berisi konten dan **markup**.
Setiap dokumen diawali deklarasi `<!DOCTYPE html>`. Deklarasi ini memberi tahu browser
bahwa halaman mengikuti standar HTML5, sehingga browser menampilkan dokumen dalam
"mode standar" (*standards mode*) dan nggak mencoba meniru perilaku browser lawas.
Bayangkan DOCTYPE kayak kop surat. Tanpanya, penerima harus menebak jenis surat;
dengan kop, konteksnya langsung jelas. DOCTYPE selalu berdiri sendiri di baris
pertama, tanpa spasi di depannya.

Setelah DOCTYPE, elemen akar `<html lang="id">` membungkus seluruh isi dokumen. Atribut
`lang="id"` memberi tahu browser bahasa yang dipakai halaman (bahasa Indonesia).
Atribut ini mungkin terlihat sepele, tetapi membantu *screen reader* melafalkan kata,
kamus memeriksa ejaan, dan mesin menerjemahkan konten. Tanpa atribut ini, halaman
berbahasa Indonesia bisa dilafalkan dengan aturan bahasa Inggris. Karena semua konten
Tokosaya berbahasa Indonesia, setiap halamannya memakai `lang="id"`.

Di dalam `html` ada dua elemen utama: `<head>` dan `<body>`. `head` berisi informasi
*tentang* dokumen. Isinya memang nggak terlihat di halaman, tetapi dibaca browser,
mesin pencari, dan alat bantu. Sementara itu, `body` berisi konten yang tampil di layar.
Elemen penting di dalam `head` antara lain:

- `<meta charset="UTF-8">` — mengatur pengodean karakter biar teks kayak
  "Kirim Cepat" dan tanda "—" tampil dengan benar; tanpa deklarasi ini, karakter khusus
  bisa terlihat berantakan.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` — memberi tahu
  browser biar menyesuaikan lebar halaman dengan lebar perangkat; elemen ini jadi
  prasyarat desain responsif pada Bab 7 dan wajib di setiap halaman proyek.
- `<meta name="description" content="...">` — ringkasan satu kalimat tujuan halaman;
  mesin pencari kerap menampilkannya di bawah hasil pencarian.
- `<title>...</title>` — judul dokumen yang tampil di tab browser dan dibacakan pertama
  oleh *screen reader*; setiap halaman wajib memakai `title` unik dan deskriptif.

Perlu diingat, isi `head` memang nggak terlihat di layar, tetapi menentukan bagaimana
dokumen dikenali. Di sistem informasi dengan banyak halaman, kayak portal akademik,
`title` yang unik membantu pengguna membedakan tab yang terbuka. Pas membuat halaman
baru buat Tokosaya, kita akan mulai dengan menyusun `head`. Pola ini dipakai di
`index.html`, `katalog.html`, `tentang.html`, dan `kontak.html`.

### 2.2 Elemen Teks: Heading, Paragraf, dan Penekanan

Sebagian besar halaman website berisi teks. HTML menyediakan elemen teks dengan makna
masing-masing. Salah satunya adalah **heading** `h1` hingga `h6`, yang fungsinya mirip
struktur bab dan subbab: `h1` adalah judul
dokumen, `h2` adalah judul bagian, `h3` adalah judul subbagian, dan seterusnya.
Ada tiga aturan yang perlu diingat: satu halaman punya **satu `h1`**; level heading
**nggak melompat** (misalnya, dari `h2` langsung ke `h4`); dan heading dipilih
berdasarkan **tingkatan informasi**, bukan ukuran huruf. Tampilan heading akan dibahas
di Bab 3. Buat pengguna *screen reader*, daftar heading berfungsi sebagai peta navigasi
buat berpindah bagian tanpa harus membaca seluruh halaman.

Elemen `<p>` menandai satu paragraf. Aturan sederhananya: satu `p` buat satu blok
pikiran, bukan satu kalimat; jangan menumpuk `p` kosong buat menciptakan jarak — jarak
adalah pekerjaan CSS, bukan pekerjaan struktur. Browser sendiri menampilkan `p` dengan
jarak bawaan antarparagraf, sehingga tanpa gaya apa pun halaman tetap terbaca.

Buat memberi penekanan, gunakan `<strong>` (bagian yang penting) dan `<em>` (bagian
yang perlu dibaca dengan penekanan). Keduanya bukan sekadar hiasan. Elemen `<mark>`
berguna buat menyorot teks, misalnya kata kunci hasil pencarian. Bedanya, `<strong>`
dan `<em>` memberi penekanan pada makna, sedangkan `<mark>` menandai teks yang relevan
dalam konteks tertentu. Singkatnya: pilih `strong` buat hal penting, `em` buat
penekanan pas dibaca, dan `mark` buat sorotan kontekstual.

Konteks sistem informasi mudah ditemukan. Halaman peraturan layanan (misalnya syarat
pengadaan perangkat di Tokosaya) dipecah menjadi `h2` per pasal dan `p` per ayat.
Kalau seseorang menulis semuanya dengan `p` besar, pembaca kehilangan struktur; kalau
heading dipilih sewenang-wenang, peta navigasi *screen reader* ikut kacau. Kebiasaan
yang ditanam sejak bab ini: tulis kerangka heading terlebih dahulu (sebagai kerangka
daftar isi halaman), baru isi tiap bagian dengan paragraf.

### 2.3 List dan Table

Daftar dan tabel sering muncul di halaman sistem informasi. HTML menyediakan tiga jenis
list. Pertama, `<ul>` (*unordered list*): daftar
berbutir yang urutannya nggak penting, misalnya daftar fasilitas layanan Tokosaya.
Setiap butir dibungkus `<li>` (*list item*). Kedua, `<ol>` (*ordered list*): daftar
yang urutannya penting, kayak langkah mengisi formulir atau alur menerima pesanan.
Ketiga, `<dl>` (*description list*): pasangan istilah dan penjelasannya, dengan
`<dt>` buat istilah dan `<dd>` buat deskripsi; cocok buat glosarium, daftar paket
layanan, atau definisi singkat. Pilih list dari maknanya: "langkah" berarti `ol`,
"rumpun kumpulan yang setara" berarti `ul`, "istilah–definisi" berarti `dl`.

Tabel digunakan buat data tabular — data yang memang cocok dibaca dalam baris dan kolom,
kayak rekap penjualan, jadwal perkuliahan, atau daftar produk. Struktur tabel yang
semantik memakai:

- `<table>` sebagai pembungkus;
- `<caption>` sebagai judul tabel — terbaca oleh *screen reader* sebelum data dibacakan
  dan membantu pembaca memahami isi tabel tanpa membaca seluruhnya;
- `<thead>` buat baris kepala tabel, `<tbody>` buat baris data;
- `<tr>` (*table row*) buat satu baris;
- `<th>` (*table header*) buat sel kepala, baik kolom maupun baris; atribut
  `scope="col"` atau `scope="row"` menyatakan sel header menggambarkan kolom atau baris
  apa;
- `<td>` (*table data*) buat sel isian biasa.

Penting banget buat nggak memakai tabel sebagai alat layout (misalnya meniru dua
kolom layout memakai `tr` dan `td`). Tabel buat layout memakai makna secara palsu:
*screen reader* akan berusaha "membaca tabel" yang sebenarnya bukan data, dan
pemeliharaan layout semacam itu menyakitkan. Layout adalah tugas CSS (Bab 6 dan Bab 7).
Dalam proyek Tokosaya, tabel dipakai secara sah di daftar produk unggulan — sel `th`
dengan `scope="row"` memuat nama produk sehingga pembaca layar menyebut nama produk
sebelum harga pas membaca baris.

### 2.4 Link dan Image

Web tumbuh karena link. Elemen `<a>` (*anchor*) menghubungkan satu halaman ke halaman
atau sumber lain melalui atribut `href`. Dua tipe `href` yang wajib dipahami adalah
link absolut dan relatif. Link **absolut** memuat alamat lengkap, misalnya
`https://www.wikipedia.org/`; link **relatif** merujuk relatif terhadap halaman
sekarang, misalnya `tentang.html` atau `img/logo-tokosaya.svg`. Pada proyek multi-halaman
kayak Tokosaya, link relatif antarhalaman (`index.html`, `katalog.html`,
`tentang.html`, `kontak.html`) menjaga struktur tetap berfungsi walau folder proyek
dipindah. Secara bawaan, link dibuka di tab yang sama. Gunakan `target="_blank"` cuma
pas link benar-benar membuka sumber eksternal baru, dan pasangkan dengan
`rel="noopener"` demi keamanan serta kinerja; link internal proyek cukup dibuka pada
tab sekarang.

Teks link adalah bagian penting aksesibilitas: *screen reader* bisa menjumpainya tunggal
di luar kalimatnya. Frasa "klik di sini" nggak mengatakan apa-apa pas dibaca
sendirian, sedangkan "Baca aturan penukaran barang" bermakna di posisi mana pun.
Kebiasaan menulis teks link deskriptif adalah bentuk sederhana dari disiplin
aksesibilitas yang diperdalam pada Bab 13.

Elemen `<img>` menampilkan gambar dengan atribut wajib `alt` — teks alternatif yang
menjelaskan gambar buat pengguna yang nggak bisa melihatnya (pengguna *screen reader*,
koneksi gagal memuat gambar, atau mesin pencari gambar). Menulis `alt` hanyalah mendeskripsi
fungsi gambar dalam konteks halaman: logo Tokosaya cukup "Logo Tokosaya"; grafik rekap
penjualan butuh kalimat yang menyampaikan polanya. Gambar murni dekoratif sebaiknya
`alt=""` (dibacakan kosong) — keputusan ini disertakan pas konten visual memang nggak
membawa informasi. Atribut `width` dan `height` disertakan biar browser memesan (*reserve*) ruang
gambar sebelum file termuat, menghindari lompatan layout (*layout shift*) — fondasi
kualitas yang diukur alat kayak Lighthouse pada Bab 13.

Kalau gambar perlu keterangan yang tampil bersamanya, gunakan `<figure>` dan
`<figcaption>`. Elemen *figure* membungkus gambar (atau kode, tabel, ilustrasi), sementara
*figcaption* memberi keterangannya. Beda dengan menaruh `p` biasa di bawah `img`,
pasangan `figure`–`figcaption` menunjukkan bahwa gambar dan keterangannya saling
berhubungan. Di Tokosaya, ilustrasi hero dan tangkapan layar proses pengiriman bisa
menggunakan pola ini.

### 2.5 Form dan Button: Struktur Dasar

Form menyediakan interaksi dasar pada web statis: pengguna memasukkan data, lalu data
dikirim ke alamat yang ditentukan oleh `action` dengan metode `method` (`get` atau `post`).
Di bab ini, kita cuma membahas struktur form. Pembahasan lebih lengkap — jenis input,
status validasi visual, layout responsif, dan aksesibilitas lanjutan — ada di Bab 11.
Meski begitu, struktur dasarnya perlu kamu kuasai karena form
kontak Tokosaya menjadi bagian standar halaman `kontak.html`.

Struktur form terdiri dari `<form>` yang membungkus kontrol, pasangan `<label>` dan
`<input>`, `textarea` buat teks panjang, dan `<button>` buat aksi. Pastikan setiap
`<label>` terhubung ke input melalui atribut `for` pada label dan `id` pada input.
Hubungan ini bukan cuma soal tampilan: klik label
akan mengarahkan fokus ke input, dan *screen reader* bisa menyebutkan nama kolom tersebut.
Tanpa pasangan itu, pengguna *screen reader* akan menemukan kontrol tanpa nama — kayak
mengisi formulir kertas yang kolomnya nggak diberi label.

Contoh sederhana: `<label for="pesan">Pesan</label>` diikuti
`<textarea id="pesan" name="pesan"></textarea>`. Atribut `name` menentukan nama data
yang dikirim. Sementara itu, `<input type="email">` memberi tahu browser bahwa kolom
ini buat alamat email, sehingga formatnya bisa diperiksa tanpa kode tambahan.
`<button type="submit">` menandai tombol buat mengirim form. Sekarang, pahami
dulu polanya; form ini akan dibahas lebih lengkap di Bab 11.

### 2.6 Elemen Semantik

Semua elemen yang sudah kita bahas punya makna semantik: `h2` berarti "judul bagian",
`p` berarti "paragraf", dan `table` berarti "data tabular". HTML5 juga menyediakan
elemen buat menamai **bagian-bagian halaman**, yaitu:

- `<header>` — kepala halaman atau bagian; biasanya memuat logo atau identitas website,
  dan kadang navigasi.
- `<nav>` — kumpulan link navigasi utama; nggak setiap gugus `a` adalah `nav`, cuma
  gugus navigasi yang paling menentukan (menu utama, menu footer bila perlu).
- `<main>` — isi utama halaman; gunakan satu `main` per halaman dan jangan letakkan
  di dalam elemen semantik lain kayak `header` atau `footer`.
- `<section>` — himpunan tematik konten, biasanya punya judul sendiri (h2, h3, ...).
- `<article>` — konten lengkap yang bisa berdiri sendiri, kayak berita, entri blog,
  atau profil produk. Tes sederhananya: kalau konten ini dipindah ke tempat lain,
  misalnya ke RSS, apakah isinya masih masuk akal?
- `<aside>` — konten yang terkait tetapi bisa dilepas tanpa merusak isi utama: kotak
  tips, "terpopuler", blok iklan.
- `<footer>` — bagian bawah halaman atau bagian tertentu; biasanya memuat identitas,
  kontak, kredit, atau kebijakan.
- `<address>` — informasi kontak penulis atau organisasi pada halaman/bagian terkait;
  dipakai buat alamat tokosaya pada footer.
- `<time datetime="2026-02-10">` — waktu yang dipahami mesin: teks tampil "10 Februari
  2026" namun nilai mesin tercantum pada `datetime`.

Elemen-elemen ini jadi **landmark**: wilayah halaman yang dikenali
*screen reader*, mesin pencari, dan pembaca sebagai bagian-bagian penting.
*Screen reader* modern biasanya menyediakan daftar landmark biar pengguna bisa cepat
berpindah ke bagian tertentu. Misalnya, pengguna bisa langsung menuju `main` tanpa harus
mendengar menu yang sama di setiap halaman.

Gimana dengan `<div>` dan `<span>`? Keduanya bukan elemen yang perlu dihindari;
keduanya cuma pembungkus netral tanpa makna khusus. Pegang aturan ini: **pilih elemen
semantik yang sesuai; gunakan `div` kalau kamu cuma butuh pembungkus buat CSS/JS dan
nggak ada elemen semantik yang cocok**. `<div>` buat kartu produk pada Bab 5 bisa
dipadankan ke `article` bila kartu itu konten mandiri, atau tetap `div` bila ia cuma
kotak tampilan. `span` punya fungsi serupa buat potongan teks dalam paragraf. Intinya, gunakan elemen
yang tepat buat menandai struktur; urusan tampilan bisa menyusul.

Tabel pembanding singkat membantu mengingat:

| Situasi | Pilihan elemen | Alasan |
|---|---|---|
| Kepala website: logo + menu | `header` berisi `nav` | landmark standar yang mudah dikenali |
| Tepi konten: "Produk terpopuler" | `aside` | konten tambahan, bukan isi utama |
| Berita satu per satu | setiap berita = `article` | konten mandiri yang berdiri sendiri |
| Bagian "Visi & Misi" dalam halaman profil | `section + h2` | himpunan tematik dengan judul |
| Pembungkus kartu demi grid belaka | `div` | nggak ada makna baru yang perlu dinyatakan |
| Alamat toko pada footer | `address` di dalam `footer` | semantik kontak yang benar |

### 2.7 Mengapa Semantik Itu Penting

Pertama, **aksesibilitas**. Pengguna *screen reader* mengandalkan landmark dan hierarki
heading buat menelusuri halaman. Halaman Tokosaya yang memakai `header`, `nav`, `main`,
`aside`, dan `footer`
lebih mudah dijelajahi dengan lompatan cepat. Sebaliknya, kalau halaman cuma dibangun
dari `div`, pengguna harus mendengar menu yang sama berulang kali di setiap halaman.
Standar aksesibilitas *WCAG* (*Web Content Accessibility Guidelines*), termasuk
WCAG 2.2, mendorong halaman yang mudah dinavigasi. Markup semantik membantu mencapainya
dengan fitur bawaan HTML, tanpa perlu alat tambahan.

Kedua, **SEO dasar**. Mesin pencari membaca HTML, bukan tampilan layar.
Elemen semantik memberi sinyal struktur: `h1` melengkapi `title` bermakna pada
`head`, `article` menyatakan unit konten, `img` tanpa `alt` menyia-nyiakan peluang
deskripsi gambar pada hasil pencarian. SEO punya banyak dimensi di luar markup — kecepatan,
kompatibilitas perangkat seluler, dan kualitas konten — tetapi fondasi strukturnya tetap
dimulai dari markup. Kita menyebutnya "SEO dasar" karena bab selanjutnya, terutama
Bab 13, membahas aksesibilitas dan kualitas website dengan lebih lengkap.

Ketiga, **keterbacaan dan pemeliharaan kode**. `section class="layanan"` jauh lebih
mudah dipahami daripada `div class="bagian-tengah-bawah-kiri"` pas rekan tim — atau
kamu sendiri enam bulan kemudian — membuka file. Elemen semantik menyimpan informasi
tentang halaman di tempat yang tepat: batas bagian, urutan struktur, peran tiap blok.
Kesinambungan ini penting pada proyek tim kayak Tokosaya; penamaan yang konsisten
(pada Bab 3: kebiasaan `kebab-case` dan pola `blok-elemen`) bekerja baik hanya setelah
struktur semantiknya benar.

Markup semantik juga membantu browser dan alat pengembang memahami bahwa `nav` adalah
navigasi, `main` adalah isi utama, dan `footer` adalah bagian bawah. Pas mulai belajar
CSS di Bab 3, selector kayak `.site-nav a` jadi lebih mudah dipahami. Di Bab 13,
alat uji aksesibilitas juga bisa mengenali landmark yang sudah disiapkan. Sekali
strukturnya benar, browser dan alat lain bisa langsung memahaminya.

### 2.8 Anatomi Halaman Company Profile

Sekarang, mari gabungkan semua konsep tadi buat menyusun halaman company profile
Tokosaya. Tugas halaman ini sederhana: memperkenalkan perusahaan dengan struktur yang
mudah dijelajahi. Peta bagian dan pasangan semantiknya:

- **kepala website** — logo Tokosaya dan nama; elemen `header`, berisi `a > img`.
- **navigasi utama** — Beranda, Katalog, Tentang, Kontak, ditambah link keranjang di
  kanan; elemen `nav` di dalam `header`.
- **isi utama** — elemen `main`, memuat satu atau lebih `section`.
- **hero** — bagian pembuka: judul "Peralatan Kerja Digital untuk Semua", subjudul,
  ilustrasi, dan tombol "Lihat Katalog"; `section` dengan `h1` halaman berada di sini.
- **produk unggulan** — tabel produk pilihan dari 8 produk baku; `section + table`.
- **layanan** — daftar nilai layanan Tokosaya; `section + ul` (atau `dl` pada halaman
  tentang).
- **kaki website** — kontak (Jl. Digital Raya No. 10, Jakarta; halo@tokosaya.id;
  (021) 555-0199) dan hak cipta; `footer` berisi `address`.

Peta pohonnya dapat digambar sebagai struktur:

<pre>
index.html Tokosaya (struktur semantik)
├─ head    : charset + viewport + description + title
├─ header.site-header
│   ├─ a.site-brand &gt; img (logo)
│   └─ nav.site-nav &gt; ul &gt; li &gt; a (Beranda | Katalog | Tentang | Kontak | Keranjang)
├─ main
│   ├─ section.hero-section   : h1 + p + figure(img, figcaption) + a "Lihat Katalog"
│   ├─ section.unggulan        : h2 + table(caption, thead, tbody)
│   └─ section.layanan         : h2 + ul &gt; li
└─ footer.site-footer
    ├─ address : Jl. Digital Raya No. 10, Jakarta · email · telp
    └─ p       : tagline "Belanja Tepat, Kirim Cepat" + hak cipta
</pre>

Perhatikan, cuma ada satu `h1`, yaitu judul hero, karena halaman ini punya satu topik
utama. Heading berikutnya memakai `h2` di tiap `section`, tanpa melompati level.
Karena kontennya berbahasa Indonesia, `lang="id"` sudah sesuai. Meta description
merangkum Tokosaya buat mesin pencari. Struktur ini juga dipakai di
`tentang.html` — yang berbeda cuma isi bagian `main`: profil Tokosaya (2019, UMKM
aksesori dan elektronik komputer), visi dan misi, nilai layanan (`dl`), dan blok kontak.
Praktikum berikut membangun dua halaman itu utuh.

## Konsep Penting

| Konsep | Inti | Contoh pemakaian di Tokosaya |
|---|---|---|
| DOCTYPE | Deklarasi mode standar, baris pertama file | Baris pertama `index.html` |
| `html lang="id"` | Menentukan bahasa halaman buat pelafalan dan kamus | Semua halaman proyek |
| `meta charset` | Pengodean UTF-8 buat A–Z dan simbol aman | `head` setiap halaman |
| `meta viewport` | Lebar halaman mengikuti lebar perangkat | Prasyarat desain responsif Bab 7 |
| `title` unik | Judul tab dan identitas halaman pada hasil pencarian | "Tokosaya | Tentang Kami" |
| Hierarki heading | Satu `h1`, nggak melompat level | `h1` hero, `h2` per section |
| `ul / ol / dl` | Daftar tanpa urutan, dengan urutan, dan pasangan istilah | Layanan (`ul`), misi (`ol`), nilai (`dl`) |
| `table` semantik | `caption`, `thead`, `tbody`, `th scope` | Daftar produk unggulan |
| Link relatif | Path antarfile dalam folder proyek | `tentang.html`, `katalog.html` |
| `alt` informatif | Menjelaskan fungsi gambar, bukan sekadar menyebut gambarnya ada | `alt="Ilustrasi peralatan kerja digital"` |
| `figure/figcaption` | Pasangan gambar–keterangan yang terikat | Ilustrasi hero dengan penjelasan |
| `label for / id` | Setiap input memiliki label yang terhubung | Form kontak (versi penuh Bab 11) |
| Elemen semantik | `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` | Peta bagian company profile |
| `div` dan `span` | Pembagi netral, dipilih kalau nggak ada elemen semantik yang pas | Wrapper kartu produk (Bab 5) |
| Landmark | Wilayah halaman yang dikenali pembaca layar | `main` buat lompatan cepat |

## Contoh Kode

Contoh berikut mengikuti pola HTML5 yang umum dipakai. Coba ketik ulang kodenya dan
buka di browser buat melihat hasilnya.

Contoh pertama adalah kerangka minimal yang bisa kamu pakai setiap kali membuat halaman
baru di proyek ini.

File: latihan-html/kerangka-dasar.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Kerangka dasar dokumen HTML5 untuk latihan bab HTML5 dan Struktur Semantik.">
  <title>Kerangka Dasar HTML5</title>
</head>
<body>
  <!-- bagian kepala dan isi diisi sesuai halaman yang dibangun -->
</body>
</html>
```

Penjelasan: kerangka ini memuat lima unsur penting — DOCTYPE, elemen `html` dengan
`lang="id"`, `meta charset`, `meta viewport`, dan `title` yang jelas. Isi `body` baru
disusun mengikuti bagian 2.6. Kerangka ini sengaja nggak menyertakan CSS; pemuatan gaya
dimulai di Bab 3 seiring pembuatan `css/style.css`.

Contoh kedua menunjukkan elemen teks, list, dan tabel semantik pada halaman informasi
perkuliahan. Polanya mirip dengan yang dipakai Tokosaya
buat tabel produk.

File: latihan-html/jadwal-kuliah.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Contoh elemen teks, list, dan tabel semantik pada halaman jadwal perkuliahan.">
  <title>Jadwal Perkuliahan Sistem Informasi</title>
</head>
<body>
  <header>
    <h1>Jadwal Perkuliahan Semester Genap</h1>
  </header>
  <main>
    <article>
      <h2>Program Studi Sistem Informasi</h2>
      <p>Jadwal di bawah ini berlaku untuk kelas <em>reguler</em>. Perubahan
         jadwal diumumkan paling lambat <strong>hari Jumat sebelum minggu berjalan</strong>.
         Mahasiswa yang mengambil <mark>Praktikum Basis Data</mark> wajib membawa
         laptop masing-masing.</p>
      <h3>Ketentuan mengikuti kuliah</h3>
      <ol>
        <li>Hadir paling lambat 15 menit setelah kelas dimulai.</li>
        <li>Tanda tangan daftar hadir setiap pertemuan.</li>
        <li>Menginformasikan izin lewat email program studi.</li>
      </ol>
      <h3>Peralatan yang perlu disiapkan</h3>
      <ul>
        <li>Laptop dengan browser terkini.</li>
        <li>Buku pencatatan (catatan elektronik juga diterima).</li>
      </ul>
    </article>

    <section>
      <h2>Tabel Jadwal Mata Kuliah</h2>
      <table>
        <caption>Jadwal perkuliahan hari Senin dan Selasa</caption>
        <thead>
          <tr>
            <th scope="col">Hari</th>
            <th scope="col">Waktu</th>
            <th scope="col">Mata Kuliah</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Senin</th>
            <td>08.00–09.40</td>
            <td>Frontend Development</td>
          </tr>
          <tr>
            <th scope="row">Senin</th>
            <td>13.00–14.40</td>
            <td>Analisis Sistem Informasi</td>
          </tr>
          <tr>
            <th scope="row">Selasa</th>
            <td>10.00–11.40</td>
            <td>Manajemen Data</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
  <footer>
    <p>Dipublikasikan <time datetime="2026-02-02">2 Februari 2026</time> oleh
       Program Studi Sistem Informasi.</p>
  </footer>
</body>
</html>
```

Penjelasan: dokumen ini menunjukkan hierarki heading yang rapi — satu `h1`,
lalu `h2`, lalu `h3` tanpa lompatan. Penekanan memakai `strong` buat kepentingan
(pengumuman batas kehadiran), `em` buat penekanan baca, dan `mark` buat sorotan
kontekstual. `article` dipilih buat pengumuman yang berdiri sendiri; `section` menampung
tabel; `footer` memuat publikasi bertanggal dengan `time datetime` yang mesin-dapat-baca.
Tabel memakai `caption`, `thead`, `tbody`, dan `th scope` sehingga pembaca layar
menyampaikan konteks kolom dan baris pas membaca sel.

Contoh ketiga menyiapkan halaman kontak Tokosaya dengan struktur form dasar. Halaman
ini akan dilengkapi di Bab 11, termasuk aturan layout dan tampilan statusnya.

File: tokosaya-css/kontak.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Hubungi Tokosaya: Jl. Digital Raya No. 10, Jakarta, email halo@tokosaya.id, telepon (021) 555-0199.">
  <title>Kontak Tokosaya</title>
</head>
<body>
  <header>
    <h1>Hubungi Tokosaya</h1>
  </header>
  <main>
    <section>
      <h2>Form Pesan</h2>
      <!-- Detail desain form dilanjutkan pada Bab 11 -->
      <form action="https://example.com/toko/kirim" method="post">
        <label for="nama">Nama Lengkap</label>
        <input type="text" id="nama" name="nama">

        <label for="email">Alamat Email</label>
        <input type="email" id="email" name="email">

        <label for="pesan">Pesan</label>
        <textarea id="pesan" name="pesan" rows="5"></textarea>

        <button type="submit">Kirim Pesan</button>
      </form>
    </section>
    <section>
      <h2>Alamat dan Layanan</h2>
      <address>
        Jl. Digital Raya No. 10, Jakarta · <a href="mailto:halo@tokosaya.id">halo@tokosaya.id</a>
      </address>
    </section>
  </main>
  <footer>
    <p>Tokosaya — <em>Belanja Tepat, Kirim Cepat</em></p>
  </footer>
</body>
</html>
```

Penjelasan: form memakai `post` karena berisi data pesan; atribut
`action` menunjuk alamat penerima data — pada proyek statis ini alamat contoh memakai
domain contoh `example.com` dan bisa diganti pas tim sudah punya layanan penerima
(pembahasan aliran data ada di Bab 1). Ketiga kolom memakai pasangan `label for` dan
`input id` yang nilainya sama. `type="email"` memberi tahu browser jenis data yang
dimasukkan, sedangkan `rows` mengatur tinggi awal `textarea`. Tombol memakai
`type="submit"` karena fungsinya mengirim form.

## Penjelasan Kode

Kerangka (contoh 1) menunjukkan kebiasaan yang akan dipakai di seluruh buku ini:
lengkapi `head` sebelum menulis isi halaman. Letakkan `meta charset` di awal `head`
biar browser langsung tahu pengodean karakternya. `viewport` juga dicantumkan
sejak awal, meski manfaatnya baru terasa di Bab 7, biar nggak lupa menambahkannya.
`title` dibuat jelas dan unik; pada proyek dengan banyak halaman, pola "Nama Website |
Nama Halaman" membantu membedakan tab.

Contoh jadwal kuliah (contoh 2) memakai `article` buat pengumuman karena konten itu
tetap masuk akal pas dibagikan sendiri — misalnya di portal akademik atau lewat
notifikasi. `section` di bawahnya menampung tabel. Bedanya, tabel itu bukan konten
mandiri buat dibagikan, melainkan bagian dari halaman.
Tabelnya menempatkan `th scope="row"` pada sel pertama tiap baris — nama hari — sehingga
pembaca layar bisa mengatakan "Senin, 08.00 sampai 09.40, Frontend Development" alih-alih
"sel, sel, sel". `time datetime` menuliskan tanggal dalam format mesin
(`YYYY-MM-DD`) sementara tampilannya memakai format Indonesia yang memang dibaca
manusia.

Contoh kontak (contoh 3) menunjukkan dua hal yang akan dipakai lagi di bab berikutnya.
Pertama, letakkan label sebelum input biar pengguna membaca label sebelum mengisi
kolomnya. Kedua, gunakan `address` buat kontak organisasi, bukan `p` biasa, biar
*screen reader* mengenalinya sebagai informasi kontak. Footer memakai `p` dengan `em`
buat tagline, bukan heading. Hal-hal kecil kayak ini membantu menjaga makna markup
meski halaman terus berkembang.

## Praktikum

### Tujuan Praktikum

Di praktikum ini, kamu akan membuat dua halaman company profile Tokosaya — `index.html`
dan `tentang.html` — dengan struktur semantik HTML5, tanpa CSS. Fokusnya memastikan
strukturnya sudah benar sebelum menambahkan tampilan: navigasi jelas, hierarki heading
rapi, data produk disusun sebagai tabel, dan tiap bagian halaman punya nama. Gaya
visualnya akan kita buat mulai Bab 3.

### Kebutuhan

- Visual Studio Code (opsional: ekstensi Live Server buat membuka dan menyegarkan
  halaman otomatis).
- Google Chrome atau browser modern lain + DevTools yang diperkenalkan di Bab 1.
- Folder proyek `tokosaya-css/` hasil Bab 1 (berisi file profil latihan Bab 1; file itu
  boleh disimpan atau dihapus, praktikum ini nggak menyentuhnya).
- Data Tokosaya yang sudah disiapkan: navigasi, hero, kontak, dan tiga produk pertama
  dari katalog (KX-210, MW-88, MR-241).

### Persiapan

1. Buat file kosong `tokosaya-css/index.html` dan `tokosaya-css/tentang.html`.
2. Buat folder `tokosaya-css/img/`. Dua file gambar placeholder disertakan pada bagian
   Kode di bawah; salinlah sebagai `img/logo-tokosaya.svg` dan `img/hero-tokosaya.svg`.
   Ini gambar placeholder berisi teks ilustratif; pada Bab 4 file ini bisa diganti
   visual yang lebih menawan tanpa mengubah markup.
3. Pastikan struktur folder proyek kayak peta berikut (file `katalog.html` dan
   `kontak.html` baru dibangun pada bab-bab berikutnya):

<pre>
tokosaya-css/
├─ img/
│  ├─ logo-tokosaya.svg      (placeholder logo, disusun di praktikum ini)
│  └─ hero-tokosaya.svg      (placeholder ilustrasi hero)
├─ index.html                (dibangun pada praktikum ini)
├─ tentang.html             (dibangun pada praktikum ini)
├─ katalog.html              (dibuat pada Bab 7)
├─ kontak.html               (di Bab 3+; contoh dasar sudah ada di bagian Contoh Kode)
└─ css/style.css             (dibuat pada Bab 3)
</pre>

### Langkah Kerja

1. Buka `index.html` dan tulis kerangka lengkap: DOCTYPE, `html lang="id"`, `head`
   berisi `charset`, `viewport`, `description`, dan `title` "Tokosaya | Belanja Tepat,
   Kirim Cepat".
2. Susun `header.site-header` yang memuat logo (link + gambar) dan `nav.site-nav`
   berisi daftar navigasi baku: Beranda, Katalog, Tentang, Kontak, Keranjang.
3. Susun `main` dengan tiga `section`: hero, produk unggulan, dan layanan. Beri `h2`
   pada dua `section` terakhir; judul hero adalah `h1` satu-satunya di halaman.
4. Isi `section` hero: judul hero baku, subjudul, `figure` memuat ilustrasi placeholder,
   dan link "Lihat Katalog" menuju `katalog.html`.
5. Bangun tabel produk unggulan: `caption`, `thead` berkolom Produk, Kategori, Harga,
   Status; lalu `tbody` memuat tiga produk baku dengan `th scope="row"` pada nama
   produknya.
6. Tutup `main` dan tulis `footer.site-footer` dengan `address` berisi alamat, email
   (link `mailto`), dan nomor telepon baku, disusul paragraf tagline dan hak cipta.
7. Salin struktur yang sama ke `tentang.html`, mengganti `title`, `description`, dan
   isi `main`: h1 "Tentang Tokosaya"; empat `section` (profil, visi dan misi, nilai
   layanan dengan `dl`, kunjungi kami dengan `address`).
8. Sesuaikan daftar navigasi di kedua halaman biar persis sama dan urutannya sama
   (konsistensi navigasi antarhalaman).
9. Buka `index.html` di browser; periksa judul tab, baca konten dari atas ke bawah,
   klik link "Tentang" buat berpindah halaman, lalu kembali.
10. Inspeksi dengan DevTools: pastikan satu `h1`, `nav` tunggal, `main` tunggal, dan
   setiap `img` memiliki `alt`.

### Kode

Logo placeholder ini berupa gambar vektor sederhana, ringan, dan bebas lisensi.
Simpan sebagai file terpisah:

File: tokosaya-css/img/logo-tokosaya.svg

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Logo Tokosaya">
  <!-- Aset placeholder logo Tokosaya (persegi indigo, inisial TS) -->
  <rect width="64" height="64" rx="14" fill="#4F46E5"/>
  <text x="32" y="40" font-family="sans-serif" font-size="24" font-weight="bold" fill="#F8FAFC" text-anchor="middle">TS</text>
</svg>
```

Penjelasan: logo placeholder ini dibuat dari bentuk persegi bersudut membulat
dan teks inisial. Warna mengikuti palet baku Tokosaya (indigo `#4F46E5` dan latar
`#F8FAFC`) biar aset ini tetap cocok pas palet warna dipakai di Bab 4.

File: tokosaya-css/img/hero-tokosaya.svg

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 320" role="img" aria-label="Ilustrasi peralatan kerja digital">
  <!-- Aset placeholder ilustrasi hero Tokosaya -->
  <rect width="800" height="320" fill="#F8FAFC"/>
  <rect x="40" y="40" width="720" height="240" rx="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
  <text x="400" y="150" font-family="sans-serif" font-size="26" fill="#1E293B" text-anchor="middle">Peralatan Kerja Digital</text>
  <text x="400" y="190" font-family="sans-serif" font-size="16" fill="#334155" text-anchor="middle">Keyboard · Mouse · Monitor</text>
</svg>
```

Penjelasan: ilustrasi hero memakai warna latar halaman `--clr-bg` (`#F8FAFC`) dan
permukaan putih dengan garis tepi `#E2E8F0`, sesuai token warna yang akan dibahas di
Bab 4. Ukuran kanvas 800×320 juga dicantumkan pada atribut `width`/`height` di `img`
biar browser menyediakan ruang buat gambar.

File: tokosaya-css/index.html

```html
<!DOCTYPE html>
<!-- halaman beranda Tokosaya; hanya HTML, tanpa CSS (dimulai Bab 3) -->
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Tokosaya - toko online UMKM aksesori dan elektronik komputer. Keyboard, mouse, hingga monitor dengan harga jujur; pesanan diproses cepat.">
  <title>Tokosaya | Belanja Tepat, Kirim Cepat</title>
</head>
<body>

  <header class="site-header">
    <a href="index.html" class="site-brand">
      <img src="img/logo-tokosaya.svg" alt="Logo Tokosaya" width="48" height="48">
    </a>
    <nav class="site-nav" aria-label="Navigasi utama">
      <ul>
        <li><a href="index.html">Beranda</a></li>
        <li><a href="katalog.html">Katalog</a></li>
        <li><a href="tentang.html">Tentang</a></li>
        <li><a href="kontak.html">Kontak</a></li>
        <!-- Halaman keranjang disiapkan pada Bab 11; sementara linknya menunjuk beranda -->
        <li><a href="index.html">Keranjang</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="hero-section" id="hero">
      <h1>Peralatan Kerja Digital untuk Semua</h1>
      <p>Keyboard, mouse, hingga monitor — pilih perangkat kerja Anda dengan harga
         UMKM yang jujur.</p>
      <figure>
        <img src="img/hero-tokosaya.svg" alt="Ilustrasi peralatan kerja digital: keyboard, mouse, dan monitor Tokosaya" width="800" height="320">
        <figcaption>Ilustrasi hero Tokosaya (aset placeholder).</figcaption>
      </figure>
      <p><a href="katalog.html" class="hero-button">Lihat Katalog</a></p>
    </section>

    <section class="unggulan-section" id="produk-unggulan">
      <h2>Produk Unggulan</h2>
      <table>
        <caption>Tiga produk paling laris berdasarkan catatan penjualan Tokosaya</caption>
        <thead>
          <tr>
            <th scope="col">Produk</th>
            <th scope="col">Kategori</th>
            <th scope="col">Harga</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Keyboard Mekanis KX-210</th>
            <td>Aksesori Input</td>
            <td>Rp650.000</td>
            <td>Best Seller</td>
          </tr>
          <tr>
            <th scope="row">Mouse Wireless MW-88</th>
            <td>Aksesori Input</td>
            <td>Rp185.000</td>
            <td>Tersedia</td>
          </tr>
          <tr>
            <th scope="row">Monitor IPS 24 inci MR-241</th>
            <td>Layar</td>
            <td>Rp1.899.000</td>
            <td>Best Seller</td>
          </tr>
        </tbody>
      </table>
      <p><a href="katalog.html">Lihat seluruh katalog</a></p>
    </section>

    <section class="layanan-section" id="layanan">
      <h2>Layanan Tokosaya</h2>
      <ul>
        <li><strong>Harga jujur</strong>: harga tercetak adalah harga yang dibayar.</li>
        <li><strong>Layanan cepat</strong>: pesanan diproses pada hari yang sama pada jam kerja.</li>
        <li><strong>Konsultasi perangkat</strong>: saran pemilihan sesuai kebutuhan pekerjaan Anda.</li>
      </ul>
    </section>
  </main>

  <footer class="site-footer">
    <address>
      Jl. Digital Raya No. 10, Jakarta ·
      <a href="mailto:halo@tokosaya.id">halo@tokosaya.id</a> ·
      (021) 555-0199
    </address>
    <p>© 2026 Tokosaya — <em>Belanja Tepat, Kirim Cepat</em>.</p>
  </footer>

</body>
</html>
```

Penjelasan: Ada tiga keputusan struktur yang perlu diperhatikan pada file beranda. Pertama, `h1`
cuma muncul sekali — pada judul hero — sedangkan judul website di header memakai
link logo tanpa heading, karena judul tiga halaman Tokosaya yang dibandingkan
adalah isi `main` masing-masing, bukan nama toko yang sama berulang. Kedua, tabel
produk memakai `th scope="row"` per baris dan `caption` yang menuliskan dasar data
("paling laris berdasarkan catatan penjualan") — pembaca layar lalu menyusun kalimat
"Keyboard Mekanis KX-210, Aksesori Input, Rp650.000, Best Seller" kayak pembaca
visual yang melihat baris yang sama. Ketiga, `nav` memakai `aria-label="Navigasi utama"`
sehingga bila kelak halaman memiliki navigasi kedua (mis. menu footer), keduanya jelas
dibedakan oleh pembaca layar.

File: tokosaya-css/tentang.html

```html
<!DOCTYPE html>
<!-- halaman tentang Tokosaya; struktur identik dengan index.html, isi main berbeda -->
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Tentang Tokosaya: toko online UMKM aksesori dan elektronik komputer berdiri sejak 2019 dengan nilai harga jujur dan layanan cepat.">
  <title>Tokosaya | Tentang Kami</title>
</head>
<body>

  <header class="site-header">
    <a href="index.html" class="site-brand">
      <img src="img/logo-tokosaya.svg" alt="Logo Tokosaya" width="48" height="48">
    </a>
    <nav class="site-nav" aria-label="Navigasi utama">
      <ul>
        <li><a href="index.html">Beranda</a></li>
        <li><a href="katalog.html">Katalog</a></li>
        <li><a href="tentang.html">Tentang</a></li>
        <li><a href="kontak.html">Kontak</a></li>
        <!-- Halaman keranjang disiapkan pada Bab 11; sementara link menunjuk beranda -->
        <li><a href="index.html">Keranjang</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h1>Tentang Tokosaya</h1>

    <section class="profil-section" id="profil">
      <h2>Profil Toko</h2>
      <p>Tokosaya adalah toko online UMKM yang bergerak di bidang aksesori dan
         elektronik komputer, berdiri sejak 2019. Kami percaya pekerjaan digital
         terasa ringan bila perangkatnya tepat, sehingga kami menyediakan
         perlengkapan kerja elektronik yang andal dengan pembelian yang jujur
         dan mudah bagi pelanggan.</p>
    </section>

    <section class="visi-misi-section" id="visi-misi">
      <h2>Visi dan Misi</h2>
      <h3>Visi</h3>
      <p>Menjadi toko aksesori komputer UMKM paling terpercaya bagi pekerja digital.</p>
      <h3>Misi</h3>
      <ol>
        <li>Menyediakan produk perangkat kerja dengan harga yang transparan.</li>
        <li>Memproses pesanan dengan cepat dan komunikasi yang jernih.</li>
        <li>Mendampingi pelanggan memilih perangkat sesuai kebutuhan dan anggaran.</li>
      </ol>
    </section>

    <section class="nilai-section" id="nilai">
      <h2>Nilai Layanan</h2>
      <dl>
        <dt>Harga jujur</dt>
        <dd>Harga tercantum adalah harga akhir; tidak ada biaya tambahan yang
            muncul di pembayaran.</dd>
        <dt>Layanan cepat</dt>
        <dd>Pesanan diproses pada hari yang sama pada jam kerja dan pengiriman
            segera disusun.</dd>
        <dt>Dampingan memilih</dt>
        <dd>Tim Tokosaya menolong pelanggan memilih produk sesuai kebutuhan pekerjaan,
            bukan yang paling mahal.</dd>
      </dl>
    </section>

    <section class="kunjungi-section" id="kunjungi">
      <h2>Kunjungi Kami</h2>
      <address>
        Jl. Digital Raya No. 10, Jakarta<br>
        <a href="mailto:halo@tokosaya.id">halo@tokosaya.id</a><br>
        (021) 555-0199
      </address>
    </section>
  </main>

  <footer class="site-footer">
    <address>
      Jl. Digital Raya No. 10, Jakarta ·
      <a href="mailto:halo@tokosaya.id">halo@tokosaya.id</a> ·
      (021) 555-0199
    </address>
    <p>© 2026 Tokosaya — <em>Belanja Tepat, Kirim Cepat</em>.</p>
  </footer>

</body>
</html>
```

Penjelasan: halaman tentang menunjukkan cara memakai elemen semantik yang berbeda
buat jenis konten yang berbeda.
`dl` dipilih buat nilai layanan karena polanya berupa "istilah–penjelasan";
`ol` dipakai buat misi karena urutannya bermakna; `address` menandai blok kontak;
dan `section class="visi-misi-section"`
menunjukkan hierarki `h2` → `h3` tanpa lompatan. `footer` dua halaman identik —
konsistensi antarhalaman adalah bagian dari identitas website, dan penulisan berulang
pada tahap ini disengaja karena pemusatan markup bersama (memakai CSS/Bootstrap)
baru dipelajari belakangan.

### Penjelasan Kode

Ketiga bagian file praktikum ini saling melengkapi. **Kerangka `head`:** setiap halaman
memakai pola lima unsur yang sama (DOCTYPE, `lang`, charset, viewport, title) dengan
`title` dan `description` yang berbeda — cara mengeceknya mudah: judul tab
berubah pas berpindah dari beranda ke halaman tentang, dan tiap halaman punya deskripsi
pencari sendiri. **Konsistensi header dan footer:** kedua halaman memakai markup yang
persis sama pada `header` dan `footer`; konsistensi ini nanti memungkinkan Bab 3
menata keduanya dengan satu set selector, dan Bab 9 menggantikannya tanpa mengubah
semantik. **Konten semantik `main`:** setiap himpunan konten menangkap maknanya lewat
elemen yang tepat — tabel buat data produk, `ol` buat misi yang berurutan, dan `dl`
buat pasangan nilai–penjelasan. Dengan begitu, pas menambahkan CSS nanti, struktur
halaman nggak perlu diubah lagi.

Ada dua hal yang sering terlewat pemula: (1) link "Keranjang"
sementara menunjuk `index.html` dengan komentar penjelas, karena halaman keranjang
baru dibangun pada Bab 11; mengarang `href="keranjang.html"` akan menghasilkan link
mati pada pratinjau. (2) `figure/figcaption` cuma dipakai pada ilustrasi hero,
bukan pada logo — logo nggak perlu keterangan tambahan karena teks `alt`-nya sudah
cukup: "Logo Tokosaya".

### Hasil yang Diharapkan

Pas membuka `index.html` di browser, halaman tampil dengan gaya bawaan browser (tanpa
CSS khusus). Kamu akan melihat judul tab "Tokosaya | Belanja Tepat, Kirim Cepat",
link navigasi (Beranda, Katalog, Tentang, Kontak, Keranjang), judul utama
"Peralatan Kerja Digital untuk Semua", tabel produk, daftar layanan, dan footer berisi
alamat, email, serta tagline miring.
Pas memeriksa kodenya, pastikan ada satu elemen `main`, satu elemen `h1`, satu elemen
`nav` berlabel, setiap `img` memiliki atribut `alt`, dan `meta viewport` hadir pada
kedua halaman. Klik "Tentang" harus mengarah ke halaman tentang dengan struktur
sama; kembali lewat "Beranda" berhasil karena navigasi relatif.

### Troubleshooting

**Masalah:** Halaman dibuka menampilkan teks mentah yang bercampur dengan tag kayak
`<html>` dan `<!DOCTYPE html>`, atau muncul sebagai teks tanpa struktur sama sekali.
**Penyebab:** File tersimpan dengan ekstensi `.txt` (mis. `index.html.txt`) sehingga
browser membacanya sebagai teks biasa, atau file disimpan dari editor Word yang
memasukkan karakter aneh.
**Solusi:** Ganti nama file jadi `index.html` (hidupkan tampilan ekstensi di
Windows: File Explorer → View → File name extensions), atau simpan ulang lewat VS Code
(File → Save As) dengan ekstensi `.html`.
**Pencegahan:** Selalu buat file lewat VS Code, perhatikan ekstensi pada bilah judul,
dan buka pratinjau lewat Live Server atau klik dua kali file `.html` (bukan `.txt`).

**Masalah:** Klik link "Tentang" atau "Katalog" menampilkan halaman error 404
"file not found" di browser.
**Penyebab:** File yang dituju belum ada pada folder yang sama (`katalog.html` dan
`kontak.html` baru dibangun pada bab berikutnya), atau link salah tulis
(mis. `tentang.html.hmtl` / huruf besar `Tentang.html` pada sistem peka huruf).
**Solusi:** Perlu diingat, link Katalog dan Kontak memang belum aktif di bab ini.
Kalau linknya sudah aktif, pastikan nama file tujuan persis sama
dan berada satu folder dengan file pemanggil.
**Pencegahan:** Tulis link relatif setelah membuat file tujuan, atau awali
pembuatan semua halaman dengan file kosong biar `href` nggak menunjuk file yang
nggak pernah ada; biasakan nama file `lowercase` dan `kebab-case` dari awal.

**Masalah:** Gambar logo atau hero nggak tampil dan browser menampilkan ikon kertas
sobek dengan teks alt.
**Penyebab:** Path `src` nggak cocok dengan struktur folder — file SVG belum dibuat
di `img/`, atau ditulis `src="img\logo-tokosaya.svg"` dengan garis miring terbalik,
atau ditulis dari folder berbeda setelah file dipindah.
**Solusi:** Pastikan file `img/logo-tokosaya.svg` dan `img/hero-tokosaya.svg` ada,
pastikan `src` memakai garis miring maju (`img/logo-tokosaya.svg`), dan coba muat
ulang halaman dengan hard refresh (Ctrl+F5).
**Pencegahan:** Sejak awal buat folder `img/` dan salin kedua aset; gunakan path
relatif dengan garis miring maju di semua atribut `src` dan `href`.

**Masalah:** *Screen reader* atau lighthouse audit DevTools menunjukkan "heading order"
atau "one h1" bermasalah pada halaman.
**Penyebab:** Level heading melompat (misalnya, dari `h1` ke `h3` karena `h2` dianggap
"terlalu kecil" buat tampilan), atau ada lebih dari
satu `h1` dalam satu halaman.
**Solusi:** Atur hierarkinya jadi satu `h1` (judul hero atau konten utama), diikuti
`h2` buat tiap `section` dan `h3` buat subbagian. Ukuran hurufnya nanti diatur dengan
CSS, bukan dengan memilih level heading.
**Pencegahan:** Tulis kerangka heading lebih dahulu sebagai daftar isi sebelum
mengisi paragraf, lalu jalankan pernyataan inspeksi di DevTools (Elements) buat
memeriksa urutan heading sebelum melanjutkan ke bab berikutnya.

## Studi Kasus

Bayangkan kamu diminta meninjau halaman beranda portal berita kampus. Halaman itu sudah
berfungsi buat kebanyakan pembaca, tetapi tim ingin memastikan strukturnya mudah
digunakan semua orang, termasuk mahasiswa tunanetra, dan mudah dipahami mesin pencari.

Deskripsi halaman: pita atas berisi logo portal dan link masuk, diikuti bilah
menu (Beranda, Mahasiswa, Riset, Kontak); blok berita utama memuat satu berita
utama dan delapan berita lain; panel samping menampilkan artikel terpopuler;
bagian bawah memuat alamat redaksi, surel redaksi, dan kebijakan portal.

Cara membacanya: pita atas dan bilah menu adalah `header` + `nav`; deretan berita adalah
`main`, dan tiap berita adalah `article` karena masing-masing berdiri sendiri
(bisa dibagikan, bisa dibaca tanpa tetangganya); blok "terpopuler" adalah `aside`
karena bisa dihapus tanpa merusak berita; alamat redaksi dan kebijakan adalah
`footer`. Versi yang sehat memisahkan itu secara semantik, sehingga pembaca layar
bisa melompat langsung ke `main`, dan bot pencari membedakan isi berita dari
navigasi.

Bandingkan dua contoh berikut, berdasarkan pola yang sering ditemukan di portal serupa.
Versi pertama memakai pembungkus polos tanpa makna:

File: latihan-html/berita-sebelum.html

```html
<!-- Versi "div semua": nggak ada makna yang bisa dibaca alat -->
<div>
  <div>
    <div>Portal Mahasiswa</div>
    <div>
      <span><a>Beranda</a></span>
      <span><a>Riset</a></span>
      <span><a>Kontak</a></span>
    </div>
  </div>
  <div>
    <div>
      <div>Berita kampus: peluncuran layanan bimbingan daring</div>
      <div>Berita: jadwal ujian tengah semester diperbarui</div>
    </div>
  </div>
</div>
```

Penjelasan: markup ini tetap "berfungsi" di browser karena urutan tampilannya benar,
tetapi nama tiap bagian hilang — nggak ada `header`, `nav`, `main`, atau `article`.
Pembaca layar menganggap halaman sebagai satu bagian panjang, dan bot pencari sulit
mengenali bagian mana yang menjadi isi utama.

Versi semantiknya memetakan konten yang sama ke elemen bermakna:

File: latihan-html/berita-sesudah.html

```html
<!-- Versi semantik: setiap wilayah memiliki nama -->
<header>
  <p>Portal Mahasiswa</p>
  <nav aria-label="Navigasi berita">
    <ul>
      <li><a href="index.html">Beranda</a></li>
      <li><a href="riset.html">Riset</a></li>
      <li><a href="kontak.html">Kontak</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h2>Peluncuran layanan bimbingan daring untuk mahasiswa</h2>
    <p>Redaksi melaporkan rilis layanan bimbingan daring mulai pekan ini.</p>
  </article>
  <article>
    <h2>Jadwal ujian tengah semester diperbarui</h2>
    <p>Baik yang mengikuti ujian luring maupun daring perlu memeriksa slot terbarinya.</p>
  </article>
</main>
<aside>
  <h2>Berita Terpopuler</h2>
  <ul>
    <li><a href="berita-pendaftaran.html">Pendaftaran ekstrakurikuler dibuka</a></li>
  </ul>
</aside>
<footer>
  <address>Redaksi: Gedung B Lantai 2, Kampus Utama</address>
</footer>
```

Penjelasan: pemetaan itu memperjelas peran tiga sumber informasi: landmark buat
pembaca layar (`header`, `nav`, `main`, `aside`, `footer`), hierarki heading
(`article` menyediakan judulnya sendiri melalui `h2`, karena `h1` disediakan oleh
konteks halaman), dan sinyal SEO dasar (bot pencari menandai `article` sebagai
unit konten bermakna, judul `h2`-nya sebagai judul berita). Latihan mandiri nomor
6 memintamu menganalisis portal berita pilihan sendiri dengan kerangka yang sama.

## Latihan Mandiri

1. Jelaskan fungsi `<!DOCTYPE html>` pada dokumen HTML5. Apa dampaknya kalau
   deklarasi ini nggak ada di halaman Tokosaya?
2. Buat kerangka `head` lengkap buat halaman `katalog.html` (halaman ini akan dibuat
   di bab lain). Tulis DOCTYPE, elemen `html` dengan atribut bahasa, serta elemen
   `meta` dan `title` yang diperlukan. Buat `title` dan `description` yang cocok
   buat halaman katalog.
3. Tokosaya perlu menampilkan langkah-langkah memesan (5 langkah), daftar merek
   komputer, dan pasangan nilai–penjelasan layanan. Pilih jenis list yang paling
   tepat (`ul`, `ol`, atau `dl`) buat tiap konten, lalu jelaskan alasannya dalam
   satu kalimat.
4. Tabel laporan penjualan Tokosaya punya 6 kolom dan 40 baris. Kenapa `thead`,
   `th scope`, dan `caption` penting buat tabel sebesar ini? Apa dampaknya bagi
   pengguna *screen reader* kalau elemen-elemen itu nggak ada?
5. Buat markup `<img>` buat foto produk "Headphone Studio HS-15" (nama file
   `produk-headphone-hs15.svg`), lengkap dengan teks alternatif dan ukuran
   400×400 piksel. Jelaskan alasanmu memilih teks `alt` tersebut.
6. Buka halaman portal berita atau website layanan informasi pilihanmu. Baca
   strukturnya dari atas ke bawah, lalu buat peta semantiknya dalam daftar
   bertingkat. Tunjukkan bagian yang menjadi `header`, `nav`, `main`, `section`,
   `article`, `aside`, dan `footer`. Catat juga satu bagian yang masih memakai
   `div` padahal ada elemen semantik yang lebih cocok.

## Tugas

1. **Tugas individu — halaman profil brand Tokosaya.**
   Tambahkan satu `section` baru, "Jam Layanan" (Senin–Sabtu, 09.00–17.00 WIB), pada
   `tentang.html`. Gunakan `section` dan tabel (atau `dl`) semantik.
   Kumpulkan file `tentang.html` final dan satu paragraf (maksimal 150 kata) yang
   menjelaskan pilihan elemenmu. Kriterianya: satu `h1`,
   hierarki heading nggak melompat, tabel/`dl` semantik benar, nggak ada
   style/kelas styling yang belum diajarkan.
2. **Tugas kelompok (2–3 orang) — peta semantik kampus.** Pilih dua jenis halaman
   dari website sistem informasi yang sama (misalnya halaman pengumuman dan halaman
   profil laboratorium). Buat peta semantik tiap halaman dalam satu tabel
   (Bagian halaman → Elemen semantik → Alasan), maksimal satu halaman A4.
   Kumpulkan dokumen peta semantik dan link halaman yang dianalisis. Kriterianya:
   pemetaan elemen akurat, alasan lengkap, dan ada catatan satu perbaikan markup
   yang terlihat dari hasil analisis.

## Refleksi

1. Kalau gaya visual di halaman Tokosaya dihilangkan, struktur semantiknya masih
   bisa dibaca dari atas ke bawah. Apa yang hilang dan apa yang tetap terasa
   dari pengalaman pengguna?
2. Kapan kamu memilih `section`, dan kapan memakai `div`? Berikan satu contoh
   dari proyek Tokosaya pas keduanya bisa terlihat sama, tetapi maknanya berbeda.
3. Dari tiga manfaat semantik (aksesibilitas, SEO, dan pemeliharaan kode), mana
   yang paling memengaruhi keputusanmu pas menyusun halaman? Kenapa?
4. Kalau orang lain melanjutkan pengembangan Tokosaya, gimana struktur semantik
   membantu mereka memahami halaman tanpa perlu penjelasan panjang darimu?

## Rangkuman

- HTML5 adalah standar dokumen web; setiap file dimulai `<!DOCTYPE html>` dan
  `html lang="id"`.
- Bagian `head` memuat tiga kebutuhan wajib beserta satu meta tambahan: charset,
  viewport, dan `title` unik; `meta description` melayani ringkasan mesin pencari.
- Heading membentuk hierarki: satu `h1` per halaman, tanpa lompatan level.
- `ul` buat daftar setara, `ol` buat urutan bermakna, `dl` buat pasangan
  istilah–deskripsi; tabel semantik memakai `caption`, `thead`, `tbody`, dan
  `th scope`; tabel bukan alat layout.
- Link relatif menghubungkan halaman proyek; teks link harus deskriptif; gambar
  perlu memiliki `alt` serta atribut ukuran biar ruangnya tersedia sebelum gambar dimuat.
- Form pada bab ini cuma pola dasar (`label for`/`id`, `input`, `textarea`,
  `button`); pemetaan lengkap pada Bab 11.
- Elemen semantik (`header`, `nav`, `main`, `section`, `article`, `aside`,
  `footer`, `address`, `time`) menamai wilayah halaman sebagai landmark.
- `div`/`span` dipakai hanya kalau nggak ada elemen semantik yang cocok.
- Semantik memberi manfaat berlapis: aksesibilitas pembaca layar, SEO dasar,
  keterbacaan kode, dan pemeliharaan jangka panjang.
- Anatomi company profile Tokosaya: `header+nav`, `main` berisi hero, unggulan,
  dan layanan, lalu `footer` berisi kontak dan tagline.

Struktur semantik yang kamu buat hari ini masih tampil polos: belum ada warna,
tipografi, atau layout khusus. Bab 3 akan mengajakmu mengenal dasar-dasar CSS
dan menambahkan `css/style.css` ke proyek Tokosaya. Pertama kalinya, kamu akan
mewarnai dan menata struktur yang baru saja dibuat.

## Evaluasi

### Pilihan Ganda

1. Baris pertama setiap dokumen HTML5 yang menetapkan mode standar browser adalah...
   A. `<html lang="id">`
   B. `<!DOCTYPE html>`
   C. `<meta charset="UTF-8">`
   D. `<head type="html">`

2. Elemen paling tepat untuk unit konten yang lengkap dan dapat berdiri sendiri,
   misalnya satu berita pada halaman portal, adalah...
   A. `<section>`
   B. `<div>`
   C. `<article>`
   D. `<aside>`

3. Hubungan label dan input yang benar secara semantik adalah...
   A. `<label id="nama">Nama</label><input name="nama">`
   B. `<label for="nama">Nama</label><input id="nama">`
   C. `<label for="Nama">Nama</label><input name="nama">`
   D. `<input label="nama">Nama</input>`

4. Pada tabel produk, pemilihan `<th scope="row">` untuk sel nama produk dimaksudkan agar...
   A. sel tersebut dicetak tebal oleh browser
   B. sel dinyatakan sebagai header yang menjelaskan barisnya bagi pembaca layar
   C. baris dapat disortir oleh mesin pencari
   D. baris menjadi kategori data pada `caption`

5. Pada halaman Tokosaya, elemen yang tepat membungkus kontak toko (alamat, e-mail,
   telepon) pada footer adalah...
   A. `<p>` karena teksnya pendek
   B. `<aside>` karena berada di samping
   C. `<address>` di dalam `<footer>`
   D. `<span>` di dalam `<main>`

6. Konsekuensi memakai elemen `div` untuk semua bagian halaman adalah...
   A. halaman gagal dimuat di browser modern
   B. halaman tampil normal tetapi kehilangan landmark bagi pembaca layar dan sinyal
      struktur bagi mesin pencari
   C. CSS menjadi tidak dapat membaca elemen halaman
   D. halaman otomatis diperlakukan sebagai gambar oleh browser

7. Meta berikut yang wajib ada karena menjadi prasyarat desain responsif adalah...
   A. `<meta name="keywords" content="keyboard">`
   B. `<meta name="author" content="Tokosaya">`
   C. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
   D. `<meta http-equiv="refresh" content="5">`

8. Manfaat `figcaption` dibandingkan paragraf biasa di bawah gambar adalah...
   A. teksnya otomatis dicetak miring dan berwarna
   B. keterkaitan keterangan dengan gambar dinyatakan secara bawaan
   C. mesin pencari mengindeksnya sebagai heading
   D. pembaca layar memperlakukannya sebagai `h2`

### Benar atau Salah

1. Satu halaman Tokosaya boleh memiliki lebih dari satu `main`.
2. `alt=""` pada gambar murni dekoratif adalah pilihan yang benar.
3. Tabel boleh dipakai untuk menyusun layout dua kolom bila CSS belum diajarkan.
4. Link ke halaman lain dalam proyek Tokosaya lebih aman ditulis relatif
   (mis. `tentang.html`) daripada absolut.
5. `div` dan `span` dilarang dipakai dalam proyek buku ini.

### Analisis Kode

Perhatikan potongan berikut diambil dari halaman yang sedang ditinjau tim.

File: latihan-html/tinjau-1.html

```html
<section>
  <h2>Produk Unggulan</h2>
  <table>
    <tr>
      <td>Keyboard Mekanis KX-210</td>
      <td>Rp650.000</td>
    </tr>
    <tr>
      <td>Mouse Wireless MW-88</td>
      <td>Rp185.000</td>
    </tr>
  </table>
</section>
```

Pertanyaan: sebutkan minimal tiga cacat aksesibilitas pada tabel di atas dan
tulis perbaikannya dengan elemen semantik tabel yang benar.

File: latihan-html/tinjau-2.html

```html
<div class="hero-section">
  <h5>Peralatan Kerja Digital untuk Semua</h5>
  <div class="hero-sub">Keyboard, mouse, hingga monitor — pilih perangkat kerja
    Anda dengan harga UMKM yang jujur.</div>
  <a href="katalog.html" class="hero-button">Lihat Katalog</a>
</div>
```

Pertanyaan: identifikasi dua keputusan markup yang tidak semantik pada blok di
atas (kaitkan dengan aturan hierarki heading dan pilihan `div` vs elemen semantik),
lalu tulis ulang bloknya dalam bentuk yang benar.

### Soal Praktik

1. Bangun halaman `layanan.html` untuk proyek Tokosaya dengan struktur semantik
   penuh: `header` + `nav` yang konsisten dengan halaman yang telah Anda buat,
   `main` berisi `h1` "Layanan Tokosaya" dan tiga `section` (garansi 7 hari,
   pengiriman, konsultasi perangkat) dengan hierarki heading benar, serta `footer`
   sama dengan halaman lain. Kumpulkan file `layanan.html` dan tambahkan link
   ke halaman ini dari `tentang.html`.
2. Periksa halaman beranda teman Anda: buka `index.html` miliknya, lalu buat daftar
   cek singkat (minimal 7 hal: viewport, charset, satu `h1`, hierarki heading,
   `alt`, label `for`, dan navigasi yang konsisten). Catat hasil pemeriksaan dan
   usulan perbaikannya.

### Kunci Jawaban

<details>
<summary>Klik untuk menampilkan kunci jawaban</summary>

**Pilihan Ganda:**

1. **B** — `<!DOCTYPE html>` menetapkan mode standar; tanpanya browser memakai
   mode quirks dan perilaku render bisa menyimpang.
2. **C** — `article` untuk konten mandiri; `section` untuk himpunan tematik yang
   tetap bagian halaman, bukan unit berdiri sendiri.
3. **B** — pasangan `for` pada label dan `id` pada input harus sama persis;
   nilai `for` merujuk nilai `id`, bukan `name`.
4. **B** — `scope="row"` menyatakan sel header menjelaskan baris, sehingga pembaca
   layar menyebut konteks ketika membaca sel berikutnya.
5. **C** — informasi kontak organisasi memakai `address`, dan elemen paling tepat
   menampungnya di situ adalah `footer`.
6. **B** — `div` tetap valid dan dapat digaya CSS, tetapi tidak menyumbang makna:
   landmark hilang dan struktur tak terbaca alat.
7. **C** — `meta viewport` menjadi dasar agar lebar halaman mengikuti lebar
   perangkat (diperdalam pada Bab 7).
8. **B** — `figcaption` mengikat penjelasan dengan gambar secara semantik; gaya
   visualnya tetap pekerjaan CSS, bukan bagian dari makna pasangan.

**Benar atau Salah:**

1. **Salah** — `main` hanya satu per halaman karena ia menandai isi utama
   tunggal; bagian pendukung lain dapat memakai `section` atau `aside`.
2. **Benar** — `alt` kosong pada gambar dekoratif menyembunyikan gambar dari
   pembaca layar (hanya untuk gambar tidak membawa informasi).
3. **Salah** — tabel dipertahankan untuk data tabular; layout adalah tugas CSS
   (Bab 6 dan 7), dan tabel untuk layout memalsukan makna data.
4. **Benar** — link relatif tetap berfungsi ketika folder proyek dipindah;
   link absolut menyertakan domain sehingga rapuh pada pemindahan.
5. **Salah** — `div`/`span` boleh dipakai ketika tidak ada elemen semantik yang
   pas; yang dilarang adalah menggantikan elemen bermakna dengan pembagi netral.

**Analisis Kode:**

- Butir 1 (tabel): cacatnya — (a) tanpa `thead` dan `th` kolom, (b) tanpa
  `caption`, (c) nama produk ditulis dengan `td` alih-alih `th scope="row"`.
  Perbaikan: bungkus baris judul dalam `thead` dengan `th scope="col"`
  (Produk, Harga), sel nama produk memakai `th scope="row"`, tambahkan
  `caption` seperti "Dua produk terlaris berdasarkan catatan penjualan".
- Butir 2 (hero): keputusan yang keliru — judul halaman memakai `h5` (melompat
  level dan melanggar pola satu `h1` per halaman); pembungkus dan subjudul
  memakai pembagi netral padahal maknanya jelas (bagian hero dan paragraf
  subjudul). Perbaikan: `section class="hero-section"` dengan `h1` dan `p`,
  tetap mempertahankan link tombol ke katalog.

**Soal Praktik:**

- Butir 1: kriteria utama jawaban — struktur `header`/`nav`/`main`/`footer`
  konsisten dengan halaman lain; satu `h1` di bagian layanan; tiga
  `section` dengan `h2`; hierarki heading tidak melompat; link dari
  `tentang.html` memakai path relatif `layanan.html`.
- Butir 2: kriteria penilaian kualitas audit — daftar periksa memuat tujuh
  pemeriksaan yang diminta dan dijalankan satu per satu; temuan ditulis
  berdasarkan bukti yang dilihat (baris kode yang dirujuk); rancangan
  perbaikan menyebut elemen pengganti yang tepat, bukan sekadar "tambah
  div di sini".

</details>

## Referensi

- MDN Web Docs. (2025). *HTML elements reference*. Diakses Januari 2026, dari
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- WHATWG. (2025). *HTML Living Standard: The head element and text-level elements*.
  Diakses Januari 2026, dari https://html.spec.whatwg.org/
- W3C. (2023). *Web Content Accessibility Guidelines (WCAG) 2.2*. Diakses Januari
  2026, dari https://www.w3.org/TR/wcag22/
- Duckett, J. (2011). *HTML & CSS: Design and Build Websites*. Indianapolis: Wiley.
- Robbins, J. N. (2018). *Learning Web Design* (5th ed.). Sebastopol: O'Reilly Media.