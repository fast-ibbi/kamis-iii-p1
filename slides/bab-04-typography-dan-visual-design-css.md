---
marp: true
theme: academic
paginate: true
size: 16:9
lang: id
title: "Bab 4 — Tipografi dan Visual Design CSS"
description: "Tipografi web, skala dan hierarki visual, sistem warna berkontras, serta design token di :root pada Tokosaya."
footer: "Bab 4 · Tipografi dan Visual Design CSS"
---

<!-- _class: lead -->
<!-- _paginate: skip -->
<!-- _footer: '' -->

# Tipografi dan Visual Design CSS

**Bab 4** · Bikin halaman Tokosaya berkarakter brand

Studi kasus: **Tokosaya**

<!--
Buka dengan mengingatkan hasil Bab 3: halaman udah kebaca, tapi belum punya
karakter. Tanyakan siapa yang pernah merasa halamannya kurang meyakinkan padahal
isinya udah benar. Sebutkan bahwa bab ini memberi dua senjata, tipografi dan
sistem warna, lalu menyatukan keduanya lewat design token.
-->

---

# Tujuan Pembelajaran

Setelah menyelesaikan bab ini, kamu bisa:

- Peran tipografi buat keterbacaan, identitas, dan pengalaman pengguna
- Google Fonts Poppins dan Inter dengan fallback stack yang aman
- Properti tipografi dasar dan skala rem dengan clamp()
- Sistem warna Tokosaya dengan warna semantik dan ambang kontras WCAG
- border-radius, box-shadow, opacity, dan background solid atau gradient
- Design token sebagai CSS custom properties di :root

<!--
Bacakan tujuan ini singkat, lalu tekankan CPMK-nya: menerapkan CSS buat visual
antarmuka, menuju mini design system di Bab 12. Katakan bahwa urutan babnya
disengaja: pilih font dulu, atur propertinya, baru bangun skala dan token.
Sepuluh menit terakhir dipakai buat praktikum, bukan buat teori baru.
-->

---

# Dua Beranda, Isi yang Sama

Manajer konten memaparkan dua tampilan beranda Tokosaya, lalu bertanya mana yang bikin pelanggan percaya.

| Bagian | Versi pertama | Versi kedua |
|---|---|---|
| Judul | kecil dan ragu | besar dan tegas |
| Paragraf | besar dan berat | tenang |
| Tombol | abu-abu tipis | indigo tegas dengan tagline |

> Pembaca nggak cuma membaca kata; ia membaca bentuknya.

<!--
Ceritakan ulang rapat pekanan itu: dua beranda, isi persis sama, hampir seluruh
ruangan memilih versi kedua tanpa ragu. Tanyakan kenapa versi kedua menang
padahal teksnya identik. Jawaban yang diharapkan: pembaca menangkap bentuk
hurufnya sebelum sampai ke isi kalimatnya.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Tipografi dan Web Font

## Pilih hurufnya, lalu atur tampilannya

<!--
Transisi dari keluhan pemilik toko ke pertanyaan teknis: huruf apa yang dipakai
dan gimana memuatnya biar sama di semua perangkat. Tahan dulu soal skala ukuran;
itu masuk di bagian kedua. Sebutkan bahwa semua yang dibahas di sini langsung
dipakai di landing page praktikum.
-->

---

# Menyusun Huruf, Bukan Cuma Memilih

- Tipografi menata ukuran, jarak, dan bobot huruf
- Tujuannya: teks mudah dibaca dan punya karakter
- Mayoritas antarmuka web isinya teks
- Judul produk, label form, pesan status, semuanya huruf

> Tipografi itu pakaian teks: nggak mengubah isi, tapi menentukan kesan pertama.

<!--
Tekankan analogi pakaian teks; ini pegangan buat seluruh bab. Tanyakan mana yang
lebih cepat bikin orang ragu: kalimat yang salah atau huruf yang sulit dibaca.
Jawaban yang diharapkan: hurufnya, karena pembaca berhenti sebelum sampai ke
isinya. Ingatkan bahwa tipografi bukan hiasan, tapi alat komunikasi layanan.
-->

---

# Typeface dan Font

Dua istilah ini sering dipakai saling menggantikan, padahal artinya beda.

| Istilah | Artinya | Contoh |
|---|---|---|
| Typeface | keluarga desain huruf | Poppins |
| Font | wujud spesifik dengan berat dan gaya | Poppins Bold 700 |

- Membedakannya bikin kamu bicara tepat dengan desainer
- Di percakapan sehari-hari keduanya kerap dianggap sama

<!--
Ini kosakata yang dipakai pas ngobrol dengan desainer, jadi bahas pelan-pelan.
Tanyakan: Poppins Bold 700 itu typeface atau font. Jawaban yang diharapkan: font,
karena ada berat dan gayanya. Tegaskan bahwa salah sebut nggak bikin kode error,
tapi bikin diskusi tim berputar tanpa hasil.
-->

---

# Kenapa Tipografi Penting

- Teks yang ditata buruk bikin pembaca lelah sebelum menemukan informasi
- Hierarki yang jelas: judul tampak kayak judul
- Penjelasan tampak kayak penjelasan, tombol tampak bisa ditekan
- Di portal rumah sakit, instruksi obat harus tetap jelas
- Di sistem akademik, kolom penting harus menonjol

> Desain yang baik jujur mengomunikasikan fungsinya.

<!--
Kaitkan tiga contoh itu dengan layanan yang ada di sekitar kampus, bukan dengan
toko online. Minta mahasiswa menyebut satu layar yang menurut mereka paling sulit
dibaca dan jelaskan kenapa. Tutup dengan kalimat Norman: desain yang baik jujur
soal fungsinya.
-->

---

# Poppins buat Judul, Inter buat Isi

- Poppins bulat dan geometris: terasa ramah dan modern
- Inter tenang dan tegak, dirancang buat antarmuka
- Judul Tokosaya pakai Poppins biar hangat kayak toko UMKM
- Teks isi pakai Inter karena pembeli lama membaca deskripsi produk
- Dua typeface dengan peran berbeda itu pola umum di industri

> Typeface itu kayak suara teks: ramah, tegas, atau tenang.

<!--
Tunjukkan beda hurufnya langsung di layar, jangan cuma dibacakan; ciri Poppins
paling kelihatan pada huruf "a" yang bulat. Tanyakan kenapa judul dan isi sengaja
beda keluarga. Jawaban yang diharapkan: judul cuma sebentar dilihat jadi boleh
berkarakter, isi dibaca lama jadi harus tenang.
-->

---

# Font Sistem Beda di Tiap Perangkat

- Browser secara bawaan memakai font sistem, bukan pilihan kita
- Windows, macOS, dan HP Android menampilkan keluarga yang berbeda
- Perbedaan itu melemahkan konsistensi identitas brand
- Solusinya web font: diunduh dari layanan daring pas halaman dibuka
- Google Fonts menyimpan ribuan typeface berlisensi terbuka

<!--
Tanyakan siapa yang pernah membuka website dan hurufnya terasa beda di HP. Jawaban
yang diharapkan: itu font sistem, bukan font brand. Tekankan bahwa alasan utamanya
konsistensi identitas, bukan soal cantik atau nggak. Sebutkan bahwa halaman tetap
harus terbuka pas fontnya gagal diunduh.
-->

---

<!-- _class: compact -->

# Memuat Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap">
```

`File: tokosaya-css/index.html`

- Ketiganya ditulis di dalam `<head>`
- Dua preconnect menyiapkan koneksi ke server font lebih awal
- `family=` meminta keluarga sekaligus daftar ketebalannya
- `display=swap` menampilkan font cadangan sementara

<!--
Buka fonts.google.com dan tunjukkan cara menyalin URL-nya, jangan cuma menampilkan
slide. Tekankan bahwa URL ini disalin persis dan nggak boleh diketik ulang, karena
satu huruf beda bikin fontnya nggak termuat. Tanyakan apa yang terjadi kalau
`<link>` ditaruh di luar `head`; jawaban yang diharapkan: urutan pemuatan jadi
nggak menentu.
-->

---

<!-- _class: compact -->

# Fallback Stack Wajib Ada

```css
html {
  /* fallback stack: Inter lalu sans-serif generik */
  font-family: 'Inter', sans-serif;
}

h1, h2, h3 {
  font-family: 'Poppins', sans-serif;
}
```

`File: tokosaya-css/css/style.css`

- Browser membaca daftar itu dari kiri ke kanan
- Kalau Inter gagal dimuat, pindah ke `sans-serif` perangkat
- Nama font yang memuat spasi ditutup tanda kutip
- Selalu akhiri stack dengan kategori generik

<!--
Jelaskan bahwa stack itu daftar cadangan, bukan daftar pilihan. Minta mahasiswa
menutup akses internet lalu memuat ulang halaman; teksnya tetap terbaca dengan
font sistem. Ingatkan bahwa stack tanpa kategori generik adalah kesalahan yang
sering lolos dari pemeriksaan sendiri, dan baru ketahuan di komputer orang lain.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Properti Tipografi dan Skala

## Ukuran dan jarak yang mengikuti sistem

<!--
Pindah dari memuat font ke mengatur tampilannya. Katakan bahwa bagian ini yang
paling sering dianggap remeh mahasiswa karena isinya angka semua. Sebutkan bahwa
skala di sini bakal dipakai terus sampai Bab 13, jadi jangan dilewati.
-->

---

# Properti Teks Setiap Hari

| Properti | Fungsi | Praktik di Tokosaya |
|---|---|---|
| `font-size` | ukuran huruf | dinyatakan dalam `rem` |
| `font-weight` | ketebalan huruf | 400 isi, 600 subjudul, 700 judul |
| `line-height` | tinggi baris | 1,6 paragraf, 1,2 judul |
| `letter-spacing` | jarak antarhuruf | sedikit negatif di judul besar |
| `text-align` | perataan | rata kiri; `center` cuma di hero |

- `font-family`, `color`, dan `line-height` diwarisi ke elemen anak
- `font-size` dan jarak nggak ikut diwarisi

<!--
Jangan hafalkan seluruh propertinya sekaligus; cukup tandai lima yang paling
sering dipakai. Tekankan dua baris terakhir soal pewarisan, karena itu yang
menjelaskan kenapa `body` atau `html` cukup ditulis sekali. Tanyakan properti mana
yang ikut turun ke elemen anak dan mana yang nggak.
-->

---

# Line-height: Nilai Tanpa Satuan

- Nilai `1.6` berarti 1,6 kali ukuran font elemen itu
- Angka tanpa satuan ikut membesar pas font diperbesar
- Itu sebabnya `1.6` lebih andal daripada `24px`
- Teks panjang nyaman di 1,5 sampai 1,7
- Judul besar justru terasa kuat di 1,1 sampai 1,25

> Kenyamanan membaca itu hasil pilihan angka yang disiplin, bukan magis.

<!--
Suruh mahasiswa membaca satu paragraf panjang dengan `1.2` lalu `1.6` di layar
proyektor supaya bedanya terasa. Tanyakan kenapa angka tanpa satuan lebih aman.
Jawaban yang diharapkan: nilainya ikut membesar pas pengguna memperbesar font di
pengaturan browser. Ingatkan bahwa `24px` mengunci jaraknya.
-->

---

# Ukuran yang Berubah Tanpa Aturan

- Bayangkan tiap judul ditulis dengan ukuran yang jualan
- 19px di sini, 21px sana, 23px di seberang
- Mata pembaca nggak menemukan pintu masuk halaman
- Keputusan ukuran berubah dari rasa jadi sistem
- "Kayaknya terlalu kecil" diganti "ini level 3, jadi 1.25rem"

> Skala mengubah tebakan jadi keputusan yang bisa diulang.

<!--
Minta mahasiswa membuka file latihan masing-masing dan menghitung berapa ukuran
judul berbeda yang mereka tulis. Tekankan bahwa yang diperbaiki lebih dulu adalah
kebiasaan menebak ukuran, bukan angkanya satu per satu. Sebutkan bahwa skala
datang di slide berikutnya.
-->

---

<!-- _class: compact -->

# Skala Tipografi Tokosaya

```text
Display        48px    3rem        judul hero beranda
Heading 1      36px    2.25rem     judul utama halaman
Heading 2      30px    1.875rem    judul section
Heading 3      24px    1.5rem      judul kartu atau kolom
Body besar     20px    1.25rem     subjudul hero dan CTA
Subjudul       18px    1.125rem    nama produk, lead section
Body           16px    1rem        paragraf standar
Kecil          14px    0.875rem    keterangan dan tabel
Label          12px    0.75rem     badge dan label form
```

- Satuan `rem` mengacu pada ukuran font akar `html`
- Basisnya 16px, jadi `3rem` sama dengan 48px
- Skala inilah yang menopang hierarki visual nanti

<!--
Tunjukkan bahwa semua ukuran ini beraturan, bukan angka acak. Minta mahasiswa
mencari padanan piksel dari `2.25rem` sebelum kamu membacakan jawabannya. Tekankan
nama levelnya, karena nama itulah yang dipakai pas ngobrol dengan desainer.
-->

---

# Hierarki Visual

- Hierarki memandu mata dari yang paling penting ke pendukung
- Bukan cuma urutan besar-kecil
- Ia memadukan ukuran, ketebalan, warna, dan ruang
- Judul hero menang karena paling besar dan paling tebal
- Teks pendukung menyerah karena paling kecil dan paling redup

> Skala mengatur ukuran tampilan; heading menyatakan makna.

<!--
Tanyakan kenapa menebalkan semua kalimat justru bikin nggak ada yang menonjol.
Jawaban yang diharapkan: penekanan cuma bekerja kalau ada bagian yang nggak
ditebalkan. Ingatkan bahwa skala dan heading bekerja berpasangan, kayak gelar
jabatan dan seragamnya.
-->

---

<!-- _class: compact -->

# clamp() Menjaga Ukuran Judul

```css
.hero-title {
  font-size: clamp(2.25rem, 5vw, 3rem);
}
```

`File: tokosaya-css/css/style.css`

- `clamp(min, preferred, max)` mengekang ukuran teks
- Minimal 2,25rem, idealnya 5 persen lebar layar
- Maksimal 3rem, jadi nggak terlalu raksasa di monitor lebar
- Judul tetap proporsional dari HP sampai desktop
- Belum butuh media query buat kasus ini

<!--
Peragakan `clamp()` sambil menggeser lebar jendela di layar proyektor. Tanyakan apa
fungsi angka tengah `5vw`. Jawaban yang diharapkan: ukuran ideal yang mengikuti
lebar layar, tapi tetap dibatasi batas atas dan batas bawah. Sebutkan bahwa media
query dibedah penuh di Bab 7.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Sistem Warna dan Kontras

## Warna yang membawa makna, bukan selera

<!--
Masuk ke bagian warna. Katakan bahwa di sini mahasiswa paling sering punya selera
tapi belum punya alasan. Sebutkan bahwa bab ini menyediakan angka, bukan pendapat,
buat membela setiap keputusan warna di depan tim.
-->

---

# Tiga Tugas Warna di Antarmuka

- Membangun identitas brand lewat warna utama
- Memandu alur perhatian dengan warna aksen
- Mengomunikasikan makna lewat warna semantik
- Tanpa peran yang jelas, warna berubah jadi kebisingan

> Ini yang membedakan toko berwarna dari toko berwarna-warni.

<!--
Tekankan tiga perannya satu per satu, lalu tunjukkan satu halaman yang warnanya
terlalu banyak. Tanyakan warna mana di halaman itu yang punya peran jelas. Jawaban
yang diharapkan: cuma satu atau dua; sisanya cuma jadi kebisingan visual.
-->

---

# Palet Tokosaya

| Peran | Warna | Dipakai untuk |
|---|---|---|
| Primary | `#4F46E5` indigo | tombol dan link utama |
| Primary dark | `#4338CA` | keadaan hover dan latar gradien |
| Accent | `#F59E0B` amber | badge dan sorotan |
| Netral slate | `#1E293B` sampai `#E2E8F0` | heading, paragraf, latar, garis |
| Semantik | `#16A34A` dan `#DC2626` | status sukses dan bahaya |

- Warna utama gelap dipakai buat keadaan hover tombol
- Keluarga slate jadi tulang punggung netral halaman

<!--
Tempel palet ini di folder proyek biar mahasiswa sering melihatnya. Minta mereka
menyebut di mana tiap warna dipakai sebelum kamu menunjukkan jawabannya. Ingatkan
bahwa palet ini terkunci, jadi warna di luar tabel nggak dipakai tanpa alasan.
-->

---

# Warna Semantik

- Pembaca paham maknanya tanpa membaca teksnya
- Hijau buat status berhasil atau tersedia
- Merah buat error atau stok habis
- Amber buat hal yang perlu perhatian
- Di Tokosaya: hijau tersedia, amber Best Seller, indigo Baru

> Hijau dan merah bukan pilihan rasa, tapi janji makna.

<!--
Tanyakan kenapa pembaca layanan publik lebih cepat paham badge berwarna daripada
membaca statusnya. Jawaban yang diharapkan: maknanya langsung terbaca tanpa harus
membaca teks. Sebutkan bahayanya: warna semantik yang dipakai buat hiasan bikin
maknanya pudar.
-->

---

# Contrast Ratio dan Ambang AA

- Perbandingan luminansi warna teks dengan warna latarnya
- Rentangnya dari 1:1 nggak terlihat sampai 21:1 hitam di putih
- WCAG 2.2 menetapkan ambang AA buat teks
- Teks berukuran normal butuh minimal 4,5:1
- Teks besar sekitar 24px cukup 3:1

> Jangan mempercayai mata di layar yang terlalu terang.

<!--
Jangan masuk ke rumus luminansinya; cukup tunjukkan ambangnya dan cara memakainya.
Buka penghitung kontras sekali di depan kelas sebagai contoh. Tekankan kalimat
penutupnya, lalu sebutkan bahwa audit formalnya diulang di Bab 13.
-->

---

# Kontras Palet Tokosaya

| Pasangan warna | Rasio | Status teks kecil |
|---|---|---|
| `#334155` di atas `#F8FAFC` | ± 9,9:1 | lolos |
| `#1E293B` di atas `#F8FAFC` | ± 14:1 | lolos |
| Putih di atas `#4F46E5` | ± 6,3:1 | lolos |
| `#1E293B` di atas `#F59E0B` | ± 6,8:1 | lolos |
| `#16A34A` di atas putih | ± 3,3:1 | TIDAK lolos |

- Hijau murni di latar terang cuma buat teks besar

<!--
Bahas baris terakhir paling lama; itu inti pelajarannya. Tanyakan kenapa hijau
murni gampang dipakai salah padahal tampak jelas. Jawaban yang diharapkan:
rasionya cuma 3,3:1, cukup buat teks besar tapi gagal buat label kecil. Ingatkan
solusinya: warna semantik ke latar tint, teks ke warna gelap.
-->

---

<!-- _class: compact -->

# Solid dan Gradient

```css
/* Permukaan membaca: satu warna solid */
.produk-card {
  background-color: var(--clr-surface);
}

/* Hero: gradien indigo dari primary menuju primary-dark */
.hero {
  background-image: linear-gradient(to bottom right, #4F46E5, #4338CA);
}
```

`File: tokosaya-css/css/style.css`

- `to bottom right` bergerak dari kiri atas ke kanan bawah
- Gradien dipakai kayak bumbu: satu-dua titik per halaman
- Amati kontras teks di atasnya, jangan cuma melihat gradiennya

<!--
Bandingkan kartu putih solid dengan hero bergradien di layar proyektor. Tanyakan
kenapa kartu produk sengaja nggak diberi gradien. Jawaban yang diharapkan:
permukaan yang dibaca lama lebih nyaman kalau datar. Sebutkan bahwa gradien di
halaman ini cuma muncul di hero, CTA, dan footer.
-->

---

<!-- _class: section -->
<!-- _footer: '' -->

# Permukaan dan Design Token

## Satu pusat kendali buat seluruh halaman

<!--
Bagian terakhir menyatukan semuanya. Katakan bahwa token itu jawaban buat masalah
yang bakal mereka rasakan sendiri pas file CSS-nya membesar. Sebutkan bahwa Bab 12
bakal menaikkan token ini jadi design system penuh.
-->

---

<!-- _class: compact -->

# Membulat, Melembutkan, Meredupkan

```css
.produk-card {
  border-radius: 12px;
  box-shadow: var(--shadow-card);
}

.produk-badge {
  border-radius: 999px;
}
```

`File: tokosaya-css/css/style.css`

- `999px` selalu jadi bentuk pill di semua ukuran elemen
- `--shadow-card` berisi `0 8px 24px rgba(15, 23, 42, 0.08)`
- Bayangan lembut bikin kartu terasa terangkat dari halaman
- `opacity` menyetel tembus pandang seluruh elemen
- `rgba()` cuma menyetel tembus pandang warnanya

<!--
Tunjukkan `999px` pada elemen sempit dan elemen lebar biar kelas melihat bentuknya
selalu pill. Tanyakan bedanya `opacity` dengan `rgba()`. Jawaban yang diharapkan:
`opacity` memengaruhi seluruh elemen beserta isinya, `rgba()` cuma warnanya.
Ingatkan bahwa bayangan dipakai hemat, cuma buat yang memang terangkat.
-->

---

<!-- _class: compact -->

# Blok Design Token Tokosaya

```css
:root {
  --clr-primary: #4F46E5;
  --clr-primary-dark: #4338CA;
  --clr-accent: #F59E0B;
  --clr-dark: #1E293B;
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
  --space-unit: 8px;
}
```

`File: tokosaya-css/css/style.css` — blok ini dipakai persis di seluruh proyek.

<!--
Buka file aslinya di editor biar mahasiswa melihat blok ini di awal `style.css`.
Tanyakan kenapa namanya `--clr-primary` bukan `--indigo`. Jawaban yang diharapkan:
nama mengungkap peran, jadi ganti warna brand nggak bikin namanya bohong.
Ingatkan bahwa salah ketik satu huruf bikin seluruh warna kembali abu-abu.
-->

---

<!-- _class: compact -->

# Token Jarak dan calc()

```css
.section {
  padding: calc(var(--space-unit) * 7) calc(var(--space-unit) * 4);
}

.produk-card {
  padding: calc(var(--space-unit) * 4);
}
```

`File: tokosaya-css/css/style.css`

- `--space-unit: 8px` jadi basis seluruh skala jarak
- `calc(var(--space-unit) * 3)` menghasilkan 24px
- Jarak halaman mengikuti kelipatan 8/16/24/32/48/64
- Penamaan kebab-case: `--clr-` buat warna, `--font-` buat tipografi
- Token cuma buat nilai yang memang harus konsisten

<!--
Hitung bareng-bareng `calc(var(--space-unit) * 7)` sebelum kamu menunjukkan
jawabannya. Tekankan bahwa seluruh ritme jarak halaman mengikuti kelipatan 8px.
Sebutkan bahwa token yang berlebihan sama buruknya dengan warna yang berantakan,
jadi simpan cuma nilai yang memang berulang.
-->

---

# Langkah Praktikum

1. Tulis kerangka `index.html` dengan tiga tag `<link>` Google Fonts
2. Bangun `header` berisi logo teks dan navbar statis
3. Bangun hero: judul, paragraf subjudul, dan tombol "Lihat Katalog"
4. Bangun section `#produk` dengan grid delapan kartu produk
5. Bangun section CTA bergradien, lalu tutup dengan `footer` kontak
6. Tulis `:root` lengkap, reset ringkas, lalu seluruh komponen

<!--
Jalankan langkah ini sambil didemokan di layar, jangan cuma dibacakan. Berhenti di
langkah pertama buat memastikan tiga tag font disalin persis, karena di situ
kesalahan paling sering terjadi. Ingatkan menyimpan kedua file sebelum memuat
ulang browser.
-->

---

<!-- _class: compact -->

# Kerangka index.html

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tokosaya — Belanja Tepat, Kirim Cepat</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="css/style.css">
</head>
```

`File: tokosaya-css/index.html`

- File HTML-nya cuma bertambah beberapa baris dari Bab 3
- `css/style.css` dimuat setelah font
- Tiga tag font lengkapnya ada di slide Memuat Google Fonts
- Satu `h1` unik, heading menurun tanpa melompat level

<!--
Tekankan bahwa yang berubah di HTML cuma bagian `head`. Tanyakan kenapa
`css/style.css` dimuat setelah tag font. Jawaban yang diharapkan: biar gaya kita
sendiri dievaluasi belakangan, jadi keputusan kita yang menang. Periksa juga
bahwa heading di halaman itu tetap menurun tanpa melompat.
-->

---

<!-- _class: compact -->

# Token dan Tipografi di style.css

```css
html {
  font-family: var(--font-body);
  color: var(--clr-body);
  background-color: var(--clr-bg);
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: var(--font-heading);
  color: var(--clr-dark);
  line-height: 1.2;
}

a {
  color: var(--clr-primary);
  text-decoration: none;
}
```

`File: tokosaya-css/css/style.css`

<!--
Baca blok ini dari atas kayak kalimat: font badan, warna badan, latar badan.
Tunjukkan bahwa di sini nggak ada satu pun kode heksadesimal warna, semuanya lewat
`var()`. Ingatkan bahwa `a` tanpa `text-decoration` bikin menu lebih bersih, tapi
link di dalam paragraf sebaiknya tetap bergaris bawah.
-->

---

# Hasil yang Diharapkan

- Judul terlihat bulat-geometris Poppins, isi memakai Inter
- Hero berlatar gradien indigo diagonal dengan teks putih
- Judul `h1` menurun halus pas jendela dipersempit
- Delapan kartu: latar putih, pojok 12px, bayangan lembut
- Badge amber, tint hijau, tint merah, dan tint indigo
- Di layar ≤ 576px, kartu tersusun satu kolom

<!--
Bandingkan halaman sebelum dan sesudah langsung di browser, jangan cuma
menampilkan slide. Kalau fontnya tetap standar, periksa URL dan letak `<link>`
dulu sebelum menuduh kodenya salah. Ingatkan uji lebar jendela sampai di bawah
576px buat melihat kartu jadi satu kolom.
-->

---

# Latihan

- Jelaskan bedanya typeface dan font dengan contoh di luar buku
- Perbaiki `font-family: Poppins;` yang tanpa tanda kutip dan tanpa fallback
- Hitung nilai piksel skala 3rem sampai 0.75rem pada basis 16px
- Dari tabel kontras, mana yang lolos AA: `#4F46E5`, `#16A34A`, `#1E293B`?
- Ubah `--clr-primary` jadi `#4338CA`, lalu catat lima elemen yang berubah
- Bangun hierarki empat tingkat memakai skala rem dan token Tokosaya

> Jelaskan alasannya, bukan cuma nama propertinya.

<!--
Kerjakan butir pertama bareng-bareng di papan, sisanya buat latihan mandiri. Butir
keempat paling berguna buat ujian karena melatih membaca tabel kontras, bukan
menghafal angkanya. Ingatkan bahwa jawabannya harus memuat alasan, bukan cuma kata
lolos atau gagal.
-->

---

# Cek Daftar Bab 4

- Poppins dan Inter dimuat di `head` dengan fallback lengkap
- Semua ukuran teks diambil dari skala `rem`, bukan angka liar
- `line-height` unitless: 1,6 buat isi dan 1,2 buat judul
- Setiap pasangan teks dan latar lolos ambang 4,5:1
- Badge memakai tint sebagai latar dan teks gelap sebagai tinta
- Di luar `:root`, cuma `#FFFFFF` yang ditulis langsung

<!--
Minta mahasiswa saling memeriksa file pakai daftar ini dan menunjukkan buktinya
langsung di kode. Tanyakan baris mana yang paling sering belum terpenuhi. Jawaban
yang diharapkan: ukuran teks yang masih ditulis pakai `px` liar, bukan dari skala.
-->

---

# Rangkuman

- Tipografi menentukan keterbacaan, hierarki, dan identitas halaman
- Web font menjaga konsistensi lintas perangkat, fallback jadi pengaman
- Ukuran pakai `rem`, `line-height` tanpa satuan, letter-spacing seperlunya
- Type scale 3rem sampai 0.75rem jadi tulang punggung hierarki
- Warna Tokosaya bermakna: indigo, amber, slate, hijau, dan merah
- Design token di `:root` menyatukan keputusan; ubah sekali, semua ikut

<!--
Tutup dengan dua gagasan: huruf dan warna itu keputusan desain, bukan selera.
Sebutkan bahwa Bab 5 bakal mengatur jarak dan lapisan, jadi token `--space-unit`
mulai bekerja penuh di sana. Ingatkan bahwa skala dan token di bab ini dipakai
terus sampai bab akhir.
-->

---

<!-- _class: lead -->
<!-- _footer: '' -->

# Tugas dan Refleksi

Tugas kelompok: susun palet alternatif Tokosaya memakai struktur token `:root` yang sama, plus tabel kontras minimal empat baris.

**Pertanyaan refleksi:** apa yang menolong halaman tetap enak dibaca pas font gagal diunduh?

<!--
Bagi kelompok tiga sampai empat orang dan minta mereka menyiapkan tabel kontras
sebelum mulai mengubah nilai token. Nilai apakah semua pasangan teks utama lolos
4,5:1, bukan warna yang menurut mereka paling bagus. Tekankan bahwa yang dinilai
file yang gampang dibaca orang lain, bukan yang paling artistik.
-->
