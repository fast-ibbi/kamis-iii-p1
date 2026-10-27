---
marp: true
theme: academic
paginate: true
size: 16:9
lang: id
title: "Bab 5 — CSS Box Model dan Layout"
description: "Anatomi box model, box-sizing, display, overflow, position, dan skala jarak 8px pada kartu produk Tokosaya."
footer: "Bab 5 · CSS Box Model dan Layout"
---

<!-- _class: lead -->
<!-- _paginate: skip -->
<!-- _footer: '' -->

# CSS Box Model dan Layout

**Bab 5** · Menghitung kotak, bukan menebak jarak

Studi kasus: **Tokosaya**

<!--
Buka dengan pertanyaan: kenapa halaman yang HTML-nya udah rapi masih bisa meleset
beberapa piksel? Sebutkan bahwa bab ini mengubah cara kerja dari menebak jarak jadi
menghitung kotak. Ingatkan bahwa hasil akhirnya adalah komponen kartu produk
Tokosaya yang bisa kamu inspeksi sendiri di DevTools.
-->

---

# Tujuan Pembelajaran

Setelah menyelesaikan bab ini, kamu bisa:

- Anatomi box model: content, padding, border, margin
- Hitungan lebar total kotak di content-box dan border-box
- Pemasangan `box-sizing: border-box` global dan alasannya
- Perilaku display: block, inline, dan inline-block
- Penanganan overflow dan pemenggalan teks panjang
- Position, z-index, dan sistem jarak skala 8px

<!--
Bacakan tujuan ini cepat saja, lalu tekankan kesinambungannya: Bab 4 menyiapkan
token warna dan huruf, bab ini menambahkan jarak dan penghitungan. Sebutkan bahwa
praktikumnya menghasilkan komponen kartu produk, bukan halaman baru. Tanyakan siapa
yang selama ini menebak nilai padding.
-->

---

# Tiga Gejala, Satu Akar

![w:1120 Tiga dugaan awal yang salah, dan penyebab sebenarnya di tiap baris: induk belum relative, mode content-box, dan belum ada skala jarak.](assets/diagrams/bab-05-css-box-model-dan-layout-03.svg)

Kamu magang di tim digital Tokosaya, dan halaman katalognya berulah.

> Ketiga gejala itu bukan kesalahan HTML, melainkan satu akar yang sama: kotak.

<!--
Ceritakan tiga gejalanya kayak pengalaman magang di buku, jangan cuma dibacakan:
badge terlempar ke pojok kanan, kartu ketiga meluber, dan jarak kartu 20, 18, lalu
28 px. Tanyakan dugaan awal mahasiswa buat gejala pertama; jawaban yang diharapkan:
itu bukan salah markup, tapi induknya belum diposisikan.

Dugaan awal ketiga gejala itu: salah tulis HTML, kontainer kekecilan, desainnya beda.
Yang sebenarnya: induknya belum relative, mode content-box menambah padding, belum ada
skala jarak tetap. Tekankan bahwa ketiga gejala punya satu akar, yaitu kotak, dan itu
yang dibongkar sepanjang bab.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Kotak dan Cara Menghitungnya

## Empat lapisan yang menentukan ruang elemen

<!--
Transisi dari gejala menuju alat ukurnya. Katakan bahwa bagian pertama ini paling
banyak mengubah cara berpikir: setelah paham lapisannya, layout jadi soal aritmetika.
Tahan dulu soal display dan position, itu masuk di bagian kedua.
-->

---

# Anatomi Kotak: Empat Lapisan

![Diagram kotak CSS berlapis: margin paling luar, di dalamnya border, lalu padding, dan content di tengah w:820](assets/diagrams/bab-05-box-model-01.svg)

- Urutan dari dalam ke luar: content, padding, border, margin
- Diagram kotak yang sama bisa kamu inspeksi di DevTools

<!--
Tunjuk langsung ke layar: dari tengah ke luar, content, padding, border, margin.
Tekankan bahwa padding ikut memakai warna latar elemen, sedangkan margin tetap
transparan. Minta mahasiswa menebak lapisan mana yang membuat kartu terasa lega pas
dibaca.
-->

---

# Analogi Poster Berbingkai

![w:1120 Empat lapisan kotak dianalogikan poster di dinding: content kanvas, padding passe-partout, border bingkai kayu, margin jarak ke poster lain.](assets/diagrams/bab-05-css-box-model-dan-layout-06.svg)

> Padding itu merapikan isi ke bingkainya; margin menjaga jarak antarbingkai.

<!--
Analogi ini paling berguna buat menjelaskan keputusan desain ke rekan non-teknis.
Padanannya: content = kanvas poster tempat gambar dicetak, padding = passe-partout di
sekeliling kanvas, border = bingkai kayu yang membatasi kanvas, margin = jarak ke
poster lain di dinding.

Tanyakan lapisan mana yang warnanya ikut berubah kalau latar elemen diberi warna.
Jawaban yang diharapkan: content dan padding, sedangkan border dan margin punya
hidup sendiri.
-->

---

# Padding dan Margin Bukan Hal yang Sama

![w:1120 Padding adalah bagian dari tubuh elemen, jadi latar dan area klik ikut memenuhinya; margin berada di luar kotak, transparan, dan cuma menahan jarak ke kotak tetangga.](assets/diagrams/bab-05-css-box-model-dan-layout-07.svg)

<!--
Tekankan bahwa padding adalah bagian dari tubuh elemen itu sendiri: klik dan latar ikut
memenuhi seluruh area padding, dan padding jadi alat utama memberi ruang napas dalam
kartu. Margin berada di luar kotak dan selalu transparan — cuma menahan jarak ke kotak
tetangga, jadi kartu berlatar putih dengan margin 32 px tetap menampakkan bidang kaca di
sekelilingnya. Border biasanya tipis, 1 sampai 2 px, dan ia yang memisahkan keduanya.

Tanyakan: kalau bidang kaca itu mau ikut berwarna, properti mana yang dipakai? Jawabannya
padding, bukan margin. Ingatkan juga bahwa area klik tombol bertambah lewat padding, bukan
margin.
-->

---

# Margin Vertikal Bisa Runtuh

![w:1120 Margin bawah dan margin atas bertetangga tidak dijumlahkan, yang dipakai nilai paling besar; padding tidak punya perilaku runtuh ini.](assets/diagrams/bab-05-css-box-model-dan-layout-08.svg)

> Ritme vertikal antarseksi lebih aman distandarkan lewat padding kontainer.

<!--
Perilaku ini yang paling sering bikin mahasiswa menuduh CSS-nya rusak. Hitung
bareng-bareng: 16px bawah bertemu 24px atas, jaraknya jadi 24 px, bukan 40 px.
Aturannya: margin bawah dan margin atas bertetangga tidak dijumlahkan, dan yang
dipakai adalah nilai yang paling besar. Padding tidak punya perilaku runtuh ini, jadi
ritme antarseksi lebih aman distandarkan lewat padding kontainer.

Lanjutkan dengan pertanyaan kenapa padding dipilih buat ritme antarseksi, dan jawaban
yang diharapkan: padding tidak runtuh sehingga jaraknya bisa diprediksi. Jarak satu
arah juga lebih aman: pakai `margin-bottom` saja.
-->

---

# Angka width Cuma Sepotong Kotak

![w:1120 Lebar 280 piksel hanya area konten; padding 16 piksel kiri-kanan dan border 4 piksel kiri-kanan ditambahkan di luarnya, sehingga lebarnya 304 piksel.](assets/diagrams/bab-05-css-box-model-dan-layout-09.svg)

Bawaannya CSS memakai mode `box-sizing: content-box`.

```css
.panel {
  width: 280px;                 /* hanya mengukur area konten */
  padding: 16px;                /* ditambahkan di luar angka itu */
  border: 4px solid #4F46E5;
}
```

<!--
Minta mahasiswa menghitung sendiri sebelum kamu tunjukkan 304 px di layar. Angka
`width` cuma milik area konten: 280 px ditambah padding (kiri 16 px, kanan 16 px)
ditambah border (kiri 4 px, kanan 4 px), jadi lebar di layar 304 px. Buka panel
Computed di DevTools dan tunjukkan angka yang sama persis.

Selisih 24 px inilah yang memunculkan bilah gulir. Tanyakan kenapa kartu yang
"seharusnya" muat tiga di satu baris jadi meluber sepuluh piksel.
-->

---

<!-- _class: compact -->

# Satu Aturan border-box Global

```css
/* Semua kotak dihitung dari tepi border ke tepi border */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

`File: tokosaya-css/css/style.css`

<!--
Tekankan bahwa satu aturan ini mengubah arti semua angka lebar di seluruh file:
selector `*` menjangkau seluruh elemen, `*::before` dan `*::after` ikut disamakan,
angka `width` jadi lebar kotak utuh, dan konten menyusut kalau padding membesar.
Pasang sekali di awal, jangan dicampur dua mode.

Sebutkan bahwa mencampur `content-box` dan `border-box` di satu proyek adalah sumber
bug layout yang paling sunyi. Tanyakan apa yang terjadi pada konten kalau padding
diperbesar di mode ini; jawabannya: konten yang menyusut, bukan kotaknya.
-->

---

# Menahan Kotak dengan min dan max

- `width` tanpa nilai lain mengikuti lebar induk
- `auto` membiarkan browser menghitung sendiri
- `max-width: 100%` mencegah gambar meluber dari kartu
- `min-height` menahan area biar tidak terlalu pendek
- `width: 280px` plus `max-width: 100%` pola klasik kartu
- `.container` dibatasi 960 px supaya baris teks nyaman dibaca

<!--
Tunjukkan perilaku pola klasiknya: di layar lebar kartu tetap 280 px, di layar
sempit kartu memilih menyusut daripada memaksa bilah gulir. Tanyakan kenapa kita
nggak mengunci `height` pada paragraf yang isinya bisa bertambah. Jawaban yang
diharapkan: teks yang terpotong adalah kegagalan aksesibilitas, jadi pakai
`min-height`.
-->

---

# Contoh: Menahan Kotak dengan min dan max

![w:1120 Kotak gambar produk: content 240 x 96 piksel, padding 16 piksel, border 4 piksel, lebar total 280 piksel setelah max-width 100 persen.](assets/diagrams/bab-05-css-box-model-dan-layout-12.svg)

Gambar produk dipatok 280 px, tapi induk kartunya cuma 240 px. Aturan `max-width: 100%` yang menang, jadi lebar content turun ke 240 × 96 px; padding 16 px dan border 4 px tetap ditambahkan di luarnya, sehingga lebar total 280 px dan halaman tidak bergulir ke samping.

<!--
Minta kelas menghitung sendiri sebelum kamu tunjukkan angkanya: 240 + 16 + 16 + 4 + 4
= 280 px. Jawaban yang diharapkan: `max-width` tidak mengecilkan isi kotak, ia cuma
memberi batas atas, jadi yang berubah hanya lebar kontennya. Sebutkan nama baris
"lebar total" di gambar — angka terakhir itu jumlah semua pita di atasnya, bukan
angka yang ditulis di CSS. Bandingkan dengan kartu yang content-nya dibiarkan 280 px
di induk 240 px: itulah yang memaksa bilah gulir muncul.
-->

---

# Studi Kasus: Dashboard SIAKAD

Fakultas merancang ulang dashboard mahasiswa: tiga kartu informasi utama.

- Padding 40 px bikin kartu terlalu tinggi
- Jarak di dalam kartu campur: 12, 17, dan 28 px
- Kartu ketiga terlempar keluar layar laptop
- Kolom kartu tidak sejajar di tepi atas
- Perbaikan: padding 24 px dan 16 px dari skala 8
- Jarak antarkartu 32 px lewat margin satu arah

> Box model bukan urusan estetika, tapi kecepatan pengguna memahami data.

<!--
Ceritakan dampaknya dari perilaku layar, bukan dari angka statistik. Tanyakan
kenapa jarak 17 px antara label dan nilainya justru memecah kelompok informasi.
Jawaban yang diharapkan: mata membacanya kayak dua blok berbeda. Sebutkan bahwa
pola yang sama bakal dibangun ulang dengan Grid di Bab 7.
-->

---

# Contoh: Studi Kasus: Dashboard SIAKAD

![w:1120 Dua panel kartu statistik SIAKAD dengan isi dan border yang sama: kiri padding 40 px per sisi dengan tinggi kartu 152 px, kanan padding 24 px per sisi dengan tinggi kartu 120 px.](assets/diagrams/bab-05-css-box-model-dan-layout-15.svg)

Satu kartu statistik SIAKAD, content 240 × 64 px dan border 4 px tiap sisi, jadi yang bisa digeser cuma paddingnya. Dengan padding 40 px per sisi, tinggi kartu 152 px (64 + 40 + 40 + 4 + 4), dan kartu terlalu tinggi. Dengan padding 24 px per sisi, angka dari skala 8, tinggi kartu 120 px (64 + 24 + 24 + 4 + 4): hemat 32 px per kartu tanpa mengubah satu pun isinya. Tinggi 64 px itu tetap dua baris teks — label 24 px, jarak 8 px, angka 32 px.

<!--
Minta kelas menghitung tinggi kartunya sendiri sebelum kamu tunjukkan angka 152 px. Jawaban yang diharapkan: 64 + 40 + 40 + 4 + 4 = 152 px, sedangkan padding 24 px cuma 64 + 24 + 24 + 4 + 4 = 120 px. Tunjuk dua panel di gambar: kiri padding 40 px, kanan padding 24 px, dan baris pertama kedua panel sama persis — jadi yang dibandingkan memang paddingnya, bukan bentuk kartunya. Tekankan hasilnya per kartu: 32 px lebih pendek, dan karena ketiga kartu berbagi satu baris, tinggi barisnya ikut turun 32 px tanpa satu pun data hilang. Sebutkan bahwa 40 px tidak ada di daftar langkah 8, 16, 24, 32, 48, dan 64 px, sementara 24 px jatuh tepat di salah satunya — jadi perbaikannya bukan angka asal.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Jenis Kotak dan Konten Meluber

## Display, overflow, dan teks yang tidak muat

<!--
Masuk ke bagian yang paling banyak memunculkan pertanyaan di kelas. Katakan bahwa
banyak "kesalahan styling" sebenarnya cuma perilaku bawaan elemen yang belum
dipahami. Ingatkan bahwa semua contoh di bagian ini langsung dipakai di praktikum.
-->

---

# display Menentukan Jenis Kotak

- Properti `display` memilih jenis kotak elemen
- Nilai bawaannya ditetapkan stylesheet browser
- `p`, `div`, `h1`, dan `ul` berperilaku `block`
- `span`, `a`, `strong`, dan `em` berperilaku `inline`
- `img` dan `input` inline khusus, tetap menerima dimensi
- Jenis kotak bisa diubah tanpa menyentuh HTML

<!--
Tanyakan elemen apa yang bakal kamu beri padding penuh: link di dalam paragraf atau
badge di dalam daftar. Jawaban yang diharapkan: keduanya perlu perlakuan berbeda,
dan itu inti subbab ini. Sebutkan bahwa mengubah jenis kotak lewat CSS jauh lebih
murah daripada menambah pembungkus di HTML.
-->

---

# Contoh: display Menentukan Jenis Kotak

![w:1000 Pohon display: cabang block berisi p dan div, cabang inline berisi span, a, dan badge — bawaannya inline; cabang inline-block — ditulis di CSS, tanpa anggota bawaan.](assets/diagrams/bab-05-css-box-model-dan-layout-18.svg)

Lima elemen kartu produk Tokosaya. Dua cabang pertama dipilihkan stylesheet browser: block berisi p dan div, inline berisi span dan a. Lalu badge — bawaannya inline, karena badge itu memang span. Cabang inline-block — ditulis di CSS: baru terisi setelah display: inline-block.

<!--
Minta kelas menebak jenis kotak tiap elemen sebelum gambarnya dibuka. Jawaban yang diharapkan: p dan div block, span dan a inline, dan badge ikut inline — bawaannya, karena dia span. Badge baru jadi inline-block setelah CSS menulis display: inline-block di kartu produk, dan itu kerjaan penulis CSS, bukan pilihan stylesheet browser. Tunjuk ketiga cabangnya, lalu tekankan bahwa cabang inline-block tidak pernah datang sendiri: satu properti display memindahkan badge tanpa menyentuh HTML sama sekali.
-->

---

# block, inline, dan inline-block

| Perilaku | block | inline | inline-block |
|---|---|---|---|
| Mulai baris baru | ya | tidak | tidak |
| `width` dan `height` | berlaku | diabaikan | berlaku |
| `margin` atas dan bawah | berlaku | diabaikan | berlaku |
| `padding` atas dan bawah | mendorong teks | cuma melukis latar | mendorong baris |
| Contoh | `p`, `div`, `ul` | `span`, `a` | badge, tombol |

<!--
Bahas kolom `inline` paling lama, karena di situ letak kebingungannya: padding atas
bawahnya terlihat tapi tidak menggeser apa pun. Minta mahasiswa menebak kenapa
`width: 120px` pada `span` tidak berpengaruh sama sekali. Jawaban yang diharapkan:
dimensi elemen inline memang diabaikan browser.
-->

---

# Badge Tokosaya Butuh inline-block

- Badge "Best Seller" adalah label kecil dekat harga
- Sebagai `inline`, padding dan dimensinya diabaikan
- Sebagai `block`, badge memaksa baris baru
- Sebagai `inline-block`, kotak penuh tapi tetap mengalir
- Pola yang sama dipakai buat item navigasi
- `ul > li` jadi deretan horizontal karena diubah `inline-block`

<!--
Jadikan badge sebagai contoh tunggal yang diulang terus: satu properti, tiga
perilaku berbeda. Tanyakan apa yang terjadi kalau badge dibiarkan `inline` padahal
padding-nya 8 px 16 px. Jawaban yang diharapkan: bentuknya remuk dan latarnya
menempel di teks tanpa mendorong baris.
-->

---

# Contoh: Badge Tokosaya Butuh inline-block

![w:1120 Badge Best Seller: content 88 x 22 piksel, padding 8 16 8 16 piksel, lebar total 120 piksel, sebagai display inline-block.](assets/diagrams/bab-05-css-box-model-dan-layout-21.svg)

Badge "Best Seller" di kartu produk: content 88 × 22 px, diberi padding 8 px 16 px — ditulis 8 16 8 16 px, atas bawah dulu lalu kiri kanan. Lebar totalnya 88 + 16 + 16 = 120 px dan tingginya 22 + 8 + 8 = 38 px, angka yang cuma dihormati browser kalau badge-nya display: inline-block.

<!--
Minta kelas menghitung dulu sebelum kamu tunjukkan angkanya: 88 + 16 + 16 jadi berapa, dan 22 + 8 + 8 jadi berapa. Jawaban yang diharapkan: 120 × 38 px, dan itu kotak yang benar-benar dipakai browser. Lalu tanyakan apa yang terjadi kalau badge-nya dibiarkan inline — padding atas bawahnya cuma melukis latar tanpa mendorong baris, jadi bentuknya remuk. Tunjuk pita padding di gambar: di situlah latar dan area klik badge berhenti.
-->

---

<!-- _class: compact -->

# Trik Celah Antar Kotak

```css
.daftar-produk {
  font-size: 0;                /* hapus celah spasi antar item */
}

.produk-card {
  display: inline-block;
  font-size: 16px;             /* kembalikan ukuran teks kartu */
}
```

`File: tokosaya-css/css/style.css`

<!--
Tunjukkan celahnya dulu di browser sebelum kamu jelaskan triknya, karena gejalanya
kelihatan kayak bug. Celah itu sebenarnya spasi yang kamu tulis di HTML, dan
`inline-block` memperlakukan kotak kayak kata. Tekankan pasangan aturannya: wadah
`font-size: 0`, anggota `font-size` eksplisit — wadah disetel nol, anggotanya
dikembalikan sendiri.

Sebutkan bahwa Bab 6 akan mengganti seluruh trik ini dengan `gap` pada Flexbox, jadi
ini bekal memahami kenapa Flexbox ada.
-->

---

# overflow: Nasib Konten Meluber

| Nilai | Perilaku |
|---|---|
| `visible` | bawaan; konten menumpang keluar kotak |
| `hidden` | memotong tanpa bilah gulir |
| `scroll` | selalu menampilkan bilah gulir |
| `auto` | bilah gulir cuma kalau diperlukan |

- `auto` adalah pilihan aman buat panel yang isinya dinamis
- `overflow` tidak mengubah hitungan lebar kotak

<!--
Tanyakan bedanya `scroll` dan `auto`; jawaban yang diharapkan: `scroll` menampilkan
bilah walaupun kontennya muat, jadi terlihat berlebihan. Tekankan urutan kerjanya:
`border-box` dulu, baru `overflow` sebagai pengaman visual. Sebutkan bahwa `clip`
lebih baru dan dukungan browsernya perlu diperiksa di dokumentasi resmi.
-->

---

# Potong Melingkar dan Gulir Panel

- Kartu ber-radius 12 px masih menampakkan sudut gambar yang tajam
- `overflow: hidden` di media memotong gambar ikut sudut kartu
- Tabel presensi panjang dibungkus wadah bertinggi terbatas
- `overflow-y: auto` bikin panel menggulir sendiri
- Halaman tidak ikut tergulir, konteks pengguna tetap terjaga

<!--
Tunjukkan sudut kartu yang masih tajam sebelum `overflow: hidden` dipasang; itu
perbedaan yang paling mudah dilihat kelas. Tekankan prinsip besarnya: yang dibatasi
adalah kotaknya, bukan isinya. Tanyakan apa akibatnya kalau seluruh halaman yang
menggulir buat tabel yang panjang.
-->

---

# Contoh: Potong Melingkar dan Gulir Panel

![w:1120 Dua keadaan berdampingan. Tanpa aturan: sudut gambar tetap tajam walau kartu beradius 12 px, dan tabel 480 px memanjangkan seluruh halaman. Dengan overflow: overflow hidden memotong gambar ikut sudut kartu, dan overflow y auto menggulir panel 200 px saja.](assets/diagrams/bab-05-css-box-model-dan-layout-25.svg)

Kartu Tokosaya beradius 12 px. Tanpa aturan, dua hal tetap bocor: sudut gambar tetap tajam walau kartu beradius 12 px, dan tabel 480 px memanjangkan seluruh halaman. Dengan overflow, dua-duanya beres tanpa isinya diubah: overflow: hidden memotong gambar ikut sudut kartu, dan overflow-y: auto menggulir panel 200 px saja — 480 − 200 = 280 px sisanya menunggu di dalam panel.

<!--
Tunjukkan sudut kartu yang masih tajam sebelum `overflow: hidden` dipasang; itu perbedaan yang paling mudah dilihat kelas. Tekankan prinsip besarnya: yang dibatasi adalah kotaknya, bukan isinya — radius 12 px di kartu tidak memotong sudut gambar di dalamnya sampai wadah gambarnya sendiri yang memotong lewat overflow: hidden. Lalu pindah ke panel presensi: tabel 480 px tinggi di dalam kotak 200 px, jadi 480 − 200 = 280 px menunggu di dalam panel dan halaman tidak ikut memanjang.

Tanyakan dulu kenapa halaman tidak boleh ikut menggulir buat tabel yang panjang. Jawaban yang diharapkan: konteks pengguna hilang, header dan menu ikut tergeser. Tanyakan juga kapan `overflow: hidden` lebih tepat daripada `auto`: saat kontennya memang hiasan yang boleh terpotong, bukan data yang perlu dibaca sampai habis.
-->

---

<!-- _class: compact -->

# Elipsis: Tiga Properti Satu Kesatuan

```css
.nama-terpotong {
  white-space: nowrap;         /* larang teks turun ke baris baru */
  overflow: hidden;            /* potong bagian yang keluar */
  text-overflow: ellipsis;     /* tampilkan tanda potong */
}
```

`File: tokosaya-css/css/style.css`

<!--
Minta mahasiswa menghapus satu properti satu per satu dan mengamati akibatnya;
ketiganya memang satu kesatuan. Tanpa `overflow: hidden` tanda potongnya tidak muncul,
dan tanpa `white-space: nowrap` tidak ada yang terpotong.

Tekankan bagian `title`: tambahkan atribut `title` supaya nama penuh tetap terbaca,
karena memotong teks yang tidak bisa diamati kembali adalah kegagalan informasi, bukan
keindahan tipografi. Tanyakan di mana pola ini bakal dipakai di kartu produk.
-->

---

# Teks Panjang: Dua Resep Lain

- `overflow-wrap: break-word` mematahkan kata yang super panjang
- Cocok buat URL atau nama file yang tidak boleh melebar
- `-webkit-line-clamp` membatasi deskripsi jadi dua baris
- Teknik clamp masih memakai prefiks vendor
- Kalau ragu, biarkan deskripsi menurun penuh
- Putusan desainnya tetap sama: kotak yang dibatasi, bukan konten

<!--
Tunjukkan nama file panjang kayak laporan tahunan yang bikin panel melebar tanpa
`break-word`. Sebutkan bahwa `line-clamp` tergolong prefiks vendor dan dukungannya
perlu diperiksa di dokumentasi resmi. Tanyakan mana yang lebih aman buat teks yang
penting: memangkas di sisi penyunting konten atau memotong otomatis.
-->

---

# Contoh: Teks Panjang: Dua Resep Lain

![w:1120 Dua resep berdampingan untuk nama 60 huruf yang sama. Resep 1 break-word: kata 60 huruf dipatahkan di tengah, kotak tetap 280 px, tanpa prefiks vendor. Resep 2 line-clamp: nama berhenti di dua baris, sisanya diganti tanda elipsis, masih butuh prefiks webkit.](assets/diagrams/bab-05-css-box-model-dan-layout-29.svg)

Nama produk WC-720 di kartu 280 px, dua resep buat masalah yang sama. Resep 1 — break-word: kata 60 huruf dipatahkan di tengah, kotak tetap 280 px, teks turun baris, tanpa prefiks vendor. Resep 2 — line-clamp: nama berhenti di dua baris, sisanya diganti tanda elipsis, masih butuh prefiks webkit. Contoh kartu Tokosaya di bab ini memakai resep 2. Kartunya tetap 280 px: 280 − 16 − 16 − 1 − 1 = 246 px content, padding 16 px, border 1 px.

<!--
Minta kelas menyelesaikan pengurangannya: 280 − 16 − 16 − 1 − 1 jadi berapa. Jawaban yang diharapkan: 246 px, dan itulah lebar yang tersisa buat teks di dalam padding 16 px dan border 1 px. Tekankan bahwa dua resep ini menjawab dua masalah berbeda: `overflow-wrap: break-word` mematahkan satu kata yang tidak boleh melebar, sedangkan `-webkit-line-clamp` memangkas isi yang boleh dipendekkan. Contoh kartu di bab ini memakai resep kedua, jadi deskripsi berhenti di dua baris dan tingginya tidak ikut memanjang walaupun namanya 60 huruf.

Tanyakan mana yang lebih aman buat nama produk: dipatahkan dengan overflow-wrap: break-word atau dipangkas dua baris dengan prefiks vendor. Jawaban yang diharapkan: dipatahkan, kalau nama itu harus terbaca utuh; dipangkas hanya kalau nama penuhnya masih bisa dibaca di tempat lain.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Posisi Kotak dan Irama Jarak

## Mengatur tumpukan kotak, lalu menetapkan skalanya

<!--
Pindah dari "kotak jenis apa ini" ke "di mana kotak ini duduk dan berapa jaraknya".
Katakan bahwa bagian inilah yang menyelesaikan kasus Apersepsi: badge yang terlempar
dan jarak yang tidak konsisten.
-->

---

# Lima Nilai position

![w:1120 Properti position punya lima nilai: static ikut alur dokumen, relative bergeser dari posisinya, absolute lepas dari alur, fixed menempel viewport, sticky ikut alur sampai titik geser.](assets/diagrams/bab-05-css-box-model-dan-layout-23.svg)

<!--
Tekankan kalimat paling penting di slide ini: relative lebih sering dipakai sebagai
landasan daripada penggeser, dan `relative` adalah landasan buat anaknya yang
`absolute`. Tanyakan apa landasan sebuah kotak `absolute` kalau tidak ada satu pun
leluhur yang diposisikan. Jawaban yang diharapkan: halaman itu sendiri, dan itulah
badge yang terlempar ke pojok layar.

Lima nilainya: static: bawaan, ikut alur dokumen; relative: bergeser dari posisinya;
absolute: lepas dari alur; fixed: menempel viewport; sticky: ikut alur sampai titik
geser.
-->

---

<!-- _class: compact -->

# Badge Menempel di Pojok Gambar

```css
.produk-media {
  position: relative;        /* badge diukur dari tepi gambar */
}

.produk-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
}
```

`File: tokosaya-css/css/style.css`

<!--
Demonstrasikan ini langsung: hapus `position: relative` sebentar, muat ulang, dan
biarkan kelas melihat badge terlempar. Kembalikan lalu tekankan bahwa 8 px itu jarak
dari tepi gambar, bukan dari halaman.

`absolute` mencari leluhur yang diposisikan. Tanpa `relative` di induk, badge lari ke
pojok halaman. Ingatkan bahwa kotak `absolute` tidak menggeser teks di bawahnya karena
sudah keluar dari alur.
-->

---

# z-index pada Elemen Diposisikan

- `z-index` mengatur urutan tumpukan kotak yang bertumpuk
- Bilangan yang lebih besar tampil di depan
- Hanya bekerja kalau `position` bukan `static`
- Pakai skala kecil yang direncanakan: 1, 2, dan 10
- Hindari loncatan ke 9999 yang bikin susah di-debug
- `absolute` di dalam kotak ber-`z-index` membuat tumpukan baru

<!--
Tanyakan kenapa `z-index: 9999` dianggap kebiasaan buruk walaupun hasilnya kelihatan
benar. Jawaban yang diharapkan: nilainya tidak terdokumentasi, jadi aturan berikutnya
terpaksa menulis angka lebih besar lagi. Sebutkan bahwa susunan cukup diurus di
elemen yang diposisikan.
-->

---

# Contoh: z-index pada Elemen Diposisikan

![w:1120 Tiga strata di dalam produk-media: badge Best Seller dengan position absolute, z-index 2 paling depan; gambar produk yang static, ikut alur di bawahnya; dan produk-media sendiri sebagai landasan karena position relative.](assets/diagrams/bab-05-css-box-model-dan-layout-33.svg)

Tiga strata di dalam produk-media. Paling depan badge Best Seller — position absolute, z-index 2 — dan angka 2 itu satu-satunya z-index di style.css. Di bawahnya gambar produk yang static, ikut alur; kotak seperti itu tidak butuh z-index karena hanya yang diposisikan bisa diurutkan. Paling bawah produk-media sendiri: position relative, landasan badge mengukur 8 px dari tepi gambar.

<!--
Tanyakan dulu apa yang terjadi kalau badge-nya position: static — jawaban yang diharapkan: z-index diabaikan sekaligus top dan right tidak berlaku, jadi badge balik ke alur di bawah gambar dan tidak lagi menempel di pojok. Tunjuk tiga pita di gambar dari atas ke bawah: badge, gambar produk, lalu produk-media sebagai landasan tumpukan. Tekankan dua hal: gambar produk yang static tidak butuh z-index sama sekali, dan angka 2 di style.css itu satu-satunya z-index di kartu ini — tidak ada z-index 1 di file mana pun. Tutup dengan pesan slide berikutnya: pakai skala kecil 1, 2, dan 10, jangan melompat ke 9999 supaya tumpukannya masih bisa dibaca ulang.
-->

---

# Skala Jarak Delapan Piksel

- Sistem jarak dibangun dari basis `--space-unit: 8px`
- Langkahnya 8, 16, 24, 32, 48, dan 64 px
- Setiap jarak harus jatuh di salah satu langkah itu
- Delapan membagi rata lebar layar 320, 640, 960, dan 1280
- Langkahnya halus tapi cukup langka buat menjaga irama
- Langkah 4 px cuma buat koreksi mikro, ditulis di komentar

<!--
Tanyakan kenapa 8 dipilih, bukan 5 atau 7. Jawaban yang diharapkan: karena angkanya
membagi rata lebar layar umum tanpa sisa. Tekankan efeknya ke pengguna: bagian yang
tidak berkaitan muncul pada takaran seragam, jadi mata tidak perlu mengganti ukuran
kaca pembesarnya tiap blok.
-->

---

# Contoh: Skala Jarak Delapan Piksel

![w:1120 Tiga kartu 280 piksel di wadah 1120 piksel dengan gap 24 piksel; space-between membagi sisa 232 piksel menjadi dua celah 116 piksel.](assets/diagrams/bab-05-css-box-model-dan-layout-28.svg)

Tiga kartu produk 280 px berjajar di wadah 1120 px dengan `gap 24 px`. Sisa 232 px dibagi rata oleh `justify-content: space-between`, jadi tiap celah membengkak jadi 116 px — dan 116 bukan kelipatan 8, irama jaraknya langsung patah.

<!--
Ini contoh paling berguna di bab ini: minta kelas membagi 116 dengan 8 dan temukan
sisanya. Jawaban yang diharapkan: `space-between` membagi sisa ruang tanpa peduli
skala jarak, jadi celahnya keluar dari sistem 8 px. Tekankan bahwa `gap` tetap 24 px
— yang membengkak cuma sisa ruang di antaranya. Pesan praktisnya: kalau irama jarak
harus dijaga, jangan biarkan `space-between` yang menentukan celah. Sebutkan Kartu 1,
Kartu 2, dan Kartu 3 dari kiri ke kanan supaya kelas mengikuti gambarnya.
-->

---

# Kapan padding, Kapan margin

- Padding adalah bagian dari komponen itu sendiri
- Padding memperluas latar sekaligus area klik tombol
- Margin memisahkan komponen dari tetangganya
- Margin tetap transparan dan tidak ikut latar
- Jarak vertikal antarseksi lebih aman lewat padding kontainer
- Tombol berpadding 8 px sudah melampaui ambang WCAG 24 px

<!--
Ulangi padanan fisiknya: padding adalah jarak foto ke tepi paspotor, margin adalah
jarak antar paspotor di dinding. Tanyakan siapa yang selama ini memakai margin buat
melebarkan tombol; itu kebiasaan yang paling sering muncul di tugas. Sebutkan bahwa
kriteria Target Size WCAG 2.2 menetapkan area sentuh minimal 24 × 24 px.
-->

---

# Contoh: Kapan padding, Kapan margin

![w:1120 Tombol dengan content 120 x 40 piksel, padding 16 piksel, border 1 piksel, dan margin 16 piksel; pita padding ikut berwarna, pita margin tetap transparan.](assets/diagrams/bab-05-css-box-model-dan-layout-30.svg)

Tombol `Tambah ke Keranjang` punya content 120 × 40 px, diberi padding 16 px, border 1 px, dan margin 16 px. Angka padding dan margin sama, tapi cuma padding yang ikut mewarnai latar dan memperluas area klik; margin cuma mendorong tetangganya menjauh.

<!--
Tanyakan mana dari dua pita 16 px itu yang bisa diklik. Jawaban yang diharapkan:
pita padding, karena ia bagian dari kotak tombol, sedangkan pita margin transparan dan
bukan milik elemen. Sebutkan lebar total 186 px sebagai hasil 120 + 16 + 16 + 1 + 1 +
16 + 16, lalu bandingkan dengan ambang Target Size WCAG 24 × 24 px: tombol ini lolos
karena content-nya sudah 40 px. Ingatkan bahwa margin tetap tidak kelihatan walau
diberi latar, karena latar elemen berhenti di batas border.
-->

---

<!-- _class: compact -->

# Jarak Baku Proyek Tokosaya

```css
.hero {
  padding: 64px 0;             /* 8 × 8 — jeda besar antarseksi */
}

.hero-subtitle {
  margin: 0 0 32px;            /* 8 × 4 — jarak ke tombol CTA */
}

.produk-body {
  padding: 16px;               /* 8 × 2 — ruang napas dalam kartu */
}

.produk-card {
  margin: 0 16px 32px 0;       /* 8 × 2 dan 8 × 4 */
}
```

`File: tokosaya-css/css/style.css`

<!--
Buka file aslinya dan hitung satu per satu langkah skalanya bareng kelas. Yang
menegakkan disiplinnya adalah komentar `8 × n`. Kalau butuh lebih lega, lompat ke
langkah berikutnya; jangan geser 3 px, pilih langkah skala yang terdekat.

Tekankan kebiasaan yang dituntut: setiap angka baru harus punya pasangan di skala.
Tanyakan apa yang harus dilakukan kalau kartu terasa perlu lebih beruang; jawaban
yang diharapkan: naik dari 16 ke 24 atau 32, bukan ke 21.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Praktik: Kartu Produk Tokosaya

## Delapan kartu dengan jarak yang bisa dihitung

<!--
Masuk ke praktikum. Ingatkan bahwa hasil akhirnya bukan halaman cantik, melainkan
satu komponen kartu yang setiap jaraknya bisa kamu pertanggungjawabkan. Sebutkan
bahwa kartu inilah yang nanti disusun ulang dengan Flexbox di Bab 6.
-->

---

# Langkah Praktikum

1. Buka folder proyek `tokosaya-css/` dan siapkan delapan gambar produk
2. Tulis ulang `index.html` dengan hero dan delapan kartu
3. Tulis ulang `css/style.css` dengan token, reset, dan komponen
4. Pastikan aturan `box-sizing` ada di paling atas setelah token
5. Buka di browser, pastikan tidak ada bilah gulir horizontal
6. Periksa diagram kotak `.produk-card`, lalu matikan `box-sizing` sebentar

<!--
Jalankan langkah ini sambil didemokan di layar, jangan cuma dibacakan. Langkah tujuh
dan delapan yang paling berharga: kelas melihat sendiri pembeda `content-box` dan
`border-box` di proyek nyata. Ingatkan menyimpan file sebelum memuat ulang, dan
periksa jalur `<link>` dulu kalau gaya tidak muncul sama sekali.
-->

---

<!-- _class: compact -->

# Anatomi Kartu di index.html

```html
<li class="produk-card">
  <div class="produk-media">
    <img src="img/produk-keyboard-kx210.svg"
         alt="Keyboard mekanis KX-210 berwarna gelap"
         width="280" height="160">
    <span class="produk-badge produk-badge-accent">Best Seller</span>
  </div>
  <div class="produk-body">
    <p class="produk-kategori">Aksesori Input</p>
    <h3 class="produk-nama">Keyboard Mekanis KX-210</h3>
    <p class="produk-harga">Rp650.000</p>
  </div>
</li>
```

`File: tokosaya-css/index.html`

<!--
Tekankan pembagian tugasnya: HTML membawa peran, CSS membawa keputusan visual. Satu
kartu satu `li`, bukan kumpulan `div`; `produk-media` menampung gambar sekaligus badge;
`width` dan `height` disamakan rasio gambar; dan tidak ada satu pun gaya inline di HTML.

Tanyakan kenapa angka `width` dan `height` disamakan rasio gambarnya. Jawaban yang
diharapkan: supaya layout tidak melompat pas gambar selesai termuat. Pastikan semua
nama class konsisten kebab-case sebelum kelas lanjut ke file gaya.
-->

---

<!-- _class: compact -->

# Aturan Kartu di style.css

```css
.produk-card {
  display: inline-block;
  vertical-align: top;
  width: 280px;
  max-width: 100%;
  margin: 0 16px 32px 0;
  background-color: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
}

.produk-body {
  padding: 16px;
}
```

`File: tokosaya-css/css/style.css`

<!--
Tunjukkan gejala sebelum `vertical-align: top`: kartu dengan isi lebih panjang bikin
deretnya bergerigi. `vertical-align: top` bikin deret kartu sejajar atas, `width`
280 px ditahan `max-width: 100%`, margin 16 dan 32 px ikut langkah skala 8, dan
padding badan kartu 16 px memberi ruang napas.

Tanyakan kenapa `max-width: 100%` penting walaupun kartunya sudah punya lebar tetap.
Jawaban yang diharapkan: biar kartu menyusut di layar sempit daripada memaksa bilah
gulir. Sebutkan bahwa `overflow: hidden` di media akan ditambahkan kalau latar media
diberi warna.
-->

---

# Hasil yang Diharapkan

- Header putih dengan empat link navigasi berderet
- Hero dengan judul besar dan tombol indigo
- Delapan kartu berbaris tiga per baris
- Badge berwarna di pojok kanan atas setiap gambar
- Sudut gambar membulat ikut radius kartu
- Kartu menyusut tanpa bilah gulir di lebar 480 px

<!--
Bandingkan tampilan sebelum dan sesudah langsung di browser, jangan cuma
menampilkan slide ini. Kalau ada yang belum berubah, curigai jalur `<link>` dulu
sebelum menuduh kodenya salah. Ingatkan hard refresh dengan Ctrl+F5 kalau browser
masih memakai file gaya dari cache.
-->

---

# Troubleshooting Paling Sering

![w:1120 Lima gejala kartu produk dan penyebabnya: vertical-align baseline, spasi antar inline-block, margin runtuh, induk tanpa position relative, dan mode content-box yang masih aktif.](assets/diagrams/bab-05-css-box-model-dan-layout-34.svg)

<!--
Jadikan gambar ini daftar periksa pas kelas praktikum, bukan bahan bacaan. Gejala dan
penyebabnya: kartu sejajar tepi bawah berbeda karena vertical-align bawaan masih
baseline; ada celah tipis antarkartu karena spasi di HTML antar inline-block; jarak
terasa lebih pendek karena margin vertikal runtuh; badge lari ke pojok halaman karena
induk belum position: relative; kartu meluber dan muncul bilah gulir karena mode
content-box masih aktif.

Tanyakan gejala mana yang paling sering mereka temui di tugas sebelumnya. Tekankan
bahwa semua gejala ini bisa dipastikan lewat diagram kotak di DevTools sebelum satu
baris CSS diubah.
-->

---

# Latihan

- Hitung lebar kotak A `width: 260px; padding: 16px; border: 4px;` di mode content-box
- Dua kartu bermargin bawah 28 px dan atas 20 px: berapa jarak nyatanya?
- Ubah `.nav-item` jadi `display: block`, amati, lalu jelaskan kenapa berantakan
- Pasang pola elipsis pada nama produk WC-720, uji dengan nama 60 huruf
- Audit seluruh `padding` dan `margin` di `style.css` terhadap skala 8 px

> Tuliskan perhitungan dan alasannya, bukan cuma nama propertinya.

<!--
Kerjakan butir pertama bareng-bareng di papan, sisanya buat latihan mandiri.
Perhatikan butir kedua: tujuan soalnya bukan mencari angka, tapi menyadari bahwa
margin vertikal runtuh ke nilai terbesar. Untuk butir audit, minta mahasiswa
menandai nilai yang bukan kelipatan 8 kalau memang ada.
-->

---

# Cek Daftar Komponen Kartu

- `box-sizing: border-box` dipasang global di awal file
- Semua jarak di `style.css` kelipatan 8 px
- `.produk-media` diposisikan `relative` buat landasan badge
- Kartu memakai `inline-block` dan `vertical-align: top`
- Deret kartu bersih dari celah spasi `inline-block`
- Tidak ada bilah gulir horizontal pada lebar 1280 px

<!--
Minta mahasiswa saling memeriksa file pakai daftar ini dan menunjukkan buktinya
langsung di kode. Tanyakan nilai mana yang ternyata bisa dihapus karena sudah
diwarisi atau sudah diatur induknya. Ingatkan bahwa satu properti sebaiknya punya
satu tempat utama yang jelas.
-->

---

# Rangkuman

- Box model berlapis dari content sampai margin
- Margin vertikal bertetangga runtuh ke nilai terbesar
- `border-box` global membuat `width` jadi lebar kotak utuh
- `display` memilih jenis kotak; `overflow` mengatur konten meluber
- `relative` landasan `absolute`; `z-index` pakai skala kecil
- Skala jarak 8 px dengan padding dan margin pada tempatnya

<!--
Tutup dengan pesan utama: layout yang bisa dihitung jauh lebih mudah dirawat
daripada layout yang di tebak. Sebutkan bahwa Bab 6 mengganti trik `inline-block`
dan `font-size: 0` dengan Flexbox, `gap`, dan `justify-content`. Ingatkan bahwa
penghitungan kotak di bab ini tetap berlaku di semua model layout berikutnya.
-->

---

<!-- _class: lead -->
<!-- _footer: '' -->

# Tugas dan Refleksi

Susun `tokosaya-css/statistik.html` berisi panel "Ringkasan Tokosaya": empat kotak statistik berderet `inline-block`, seluruh jarak dari skala 8 px, dan satu badge `position: absolute`.

**Pertanyaan refleksi:** kapan kamu memilih `overflow: hidden` daripada `auto`?

<!--
Tugas individu: kumpulkan file HTML, CSS, tangkapan diagram kotak satu kartu, dan
catatan singkat pilihan margin atau padding pada tiap jarak. Nilai ketepatan skala 8
px, badge yang benar-benar menempel di kartu, dan tidak adanya bilah gulir horizontal
pada lebar 1280 px. Tekankan bahwa yang dinilai bukan jarak yang cantik, tapi jarak
yang bisa dipertanggungjawabkan.
-->
