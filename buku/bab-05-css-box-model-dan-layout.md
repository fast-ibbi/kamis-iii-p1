# BAB 5 — CSS Box Model dan Layout

## Deskripsi Singkat

Bab ini membahas *box model* (model kotak), fondasi yang menentukan bagaimana setiap elemen HTML menempati ruang di halaman: konten, padding, border, dan margin. Anda akan mempelajari cara menghitung lebar kotak, menukar model penghitungan dengan `box-sizing`, mengubah perilaku kotak lewat `display`, menangani konten yang meluber dengan `overflow`, mengatur posisi elemen dengan `position` dan `z-index`, serta menegakkan **skala jarak 8px** sebagai sistem *spacing*. Kemampuan ini memindahkan penguasaan tipografi dan warna dari Bab 4 ke ranah tata letak, dan menjadi pijakan wajib sebelum masuk ke Flexbox pada Bab 6.

## Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan mampu:

1. **Menjelaskan** anatomi *box model*: *content*, *padding*, *border*, dan *margin*, beserta urutannya dari dalam ke luar.
2. **Menghitung** lebar total elemen pada mode `content-box` dan `border-box` secara manual dan memverifikasinya melalui diagram kotak di DevTools.
3. **Mengimplementasikan** `box-sizing: border-box` secara global beserta alasan pendekatan ini.
4. **Membedakan** perilaku `display: block`, `inline`, dan `inline-block` serta memilih nilai yang tepat untuk komponen seperti *badge* dan tautan navigasi.
5. **Menerapkan** `overflow` (hidden, scroll, auto) dan teknik pemenggalan teks untuk konten yang panjang.
6. **Menerapkan** `position` (relative, absolute, fixed, sticky) dan `z-index` pada kasus nyata seperti *badge* kartu produk dan *header* yang menempel.
7. **Merancang** sistem jarak komponen dengan skala 8px dan memutuskan kapan memakai *margin* kapan memakai *padding*.

## Capaian Pembelajaran

Bab ini melayani **CPMK 3** (menerapkan CSS untuk membangun visual antarmuka: selector, tipografi, warna, box model) dan menyiapkan **CPMK 4** (menggunakan Flexbox dan CSS Grid untuk layout modern). Sub-capaian yang diukur adalah **S5.1** (menerapkan box model, box-sizing, display, dan position) serta **S5.2** (membangun komponen kartu dengan spacing system), pada pertemuan ke-5. Asesmennya berupa praktikum kartu produk Tokosaya, latihan mandiri, dan evaluasi bab: analisis kode, pilihan ganda, dan soal praktik. Pencapaian bab ini menjadi syarat teknis untuk UTS (Bab 8), karena setiap layout responsif pada UTS bertumpu pada penghitungan kotak yang benar.

## Kata Kunci

*box model* (lapisan kotak elemen dari content, padding, border, hingga margin), *padding* (ruang dalam antara konten dan border), *margin* (ruang luar antara kotak dan tetangganya, termasuk perilaku *margin collapse*), *box-sizing: border-box* (model penghitungan lebar yang menaungi padding dan border), *display* (perilaku kotak: block, inline, inline-block), *overflow* (penanganan konten meluber: hidden, scroll, auto), *position* (skema posisi: relative, absolute, fixed, sticky), *z-index* (urutan tumpukan elemen diposisikan), *spacing system* (skala jarak 8px yang konsisten), *badge* (label kecil menempel pada kartu).

## Apersepsi

Bayangkan Anda magang di tim digital Tokosaya, toko daring UMKM aksesori dan elektronik komputer. Desainer menyerahkan mockup katalog: setiap kartu produk punya gambar, *badge* "Best Seller" di pojok atas, nama produk, dan harga. Anda mengetik HTML dan CSS dengan hati-hati — tetapi hasilnya mengejutkan. *Badge* tidak menempel di pojok gambar, melainkan terlempar ke pojok kanan halaman. Kartu ketiga meluber melewati batas kontainer dan muncul bilah gulir horizontal di laptop kantor berukuran 14 inci. Jarak antarkartu terlihat tidak konsisten: 20 px, lalu 18 px, lalu 28 px — padahal ketikanya persis sama seperti di desain.

Ketiga gejala itu bukan kesalahan HTML, melainkan satu akar yang sama: **kotak**. Elemen HTML bukan teks mengambang; ia adalah kotak yang memiliki lapisan-lapisan, dan browser menghitung lebar serta tinggi kotak itu dengan aturan baku. Begitu aturan itu diabaikan, padding menambah lebar tanpa disadari, elemen *inline* menolak dimensi, dan elemen diposisikan melemparkan dirinya ke induk yang salah. Kebalikannya juga benar: setelah mahasiswa memahami *box model*, banyak "keajaiban" layout menjadi keputusan yang bisa dihitung — inilah keahlian yang diminta saat Anda menerjemahkan desain menjadi kode.

Bab ini membawa Anda dari "CSS terlihat bekerja" menuju "CSS bisa dihitung". Di akhir bab, komponen kartu produk Tokosaya akan Anda bangun dari nol dengan diagram kotak yang bisa Anda inspeksi sendiri di DevTools.

## Materi Pembelajaran

### 5.1 Box Model: Content, Padding, Border, dan Margin

Definisi paling ringkas: *box model* adalah model baku di CSS yang menggambarkan setiap elemen HTML sebagai kotak bersarang berlapis — dari dalam ke luar: *content*, *padding*, *border*, dan *margin*. Dokumentasi MDN menetapkan model ini sebagai dasar cara browser menghitung ruang suatu elemen. Artinya, saat Anda menulis `width`, `padding`, atau `border`, Anda sesungguhnya sedang menyusun keempat lapisan tersebut sekaligus. Memahami lapisan ini wajib karena semua layout — kartu produk, jadwal kuliah, halaman berita — pada dasarnya adalah penumpukan dan pengaturan kotak.

Analogi yang paling sering dipakai di ruang kelas: sebuah poster berbingkai di dinding kantor. Kanvas poster adalah *content* — area tempat konten sesungguhnya digambar. Passe-partout (papan berwarna di sekitar kanvas) adalah *padding*: ruang kosong bernapas yang ikut berwarna dengan latar elemen. Bingkai kayu adalah *border*: garis tepi yang bisa diberi ketebalan, gaya, dan warna. Jarak dari bingkai ke poster lain di dinding adalah *margin*: ruang luar yang transparan, milik kotak tetapi tidak ikut warnanya. Analogi ini membantu saat Anda perlu menjelaskan keputusan desain ke rekan non-teknis: "padding itu merapikan isi ke bingkainya; margin itu menjaga jarak antarbingkai."

Ilustrasi anatomi kotak berikut memetakan keempat lapisan.

File: ilustrasi/anatomi-box-model.txt

```
  ┌──────────────────── MARGIN ─────────────────────┐
  │  ┌──────────────── BORDER ───────────────────┐  │
  │  │  ┌─────────────── PADDING ────────────┐   │  │
  │  │  │  ┌───────────── CONTENT ────────┐  │   │  │
  │  │  │  │  teks, gambar, tautan,       │  │   │  │
  │  │  │  │ tombol, list . . .           │  │   │  │
  │  │  │  └──────────────────────────────┘  │   │  │
  │  │  └────────────────────────────────────┘   │  │
  │  └────────────────────────────────────────────┘  │
  └───────────────────────────────────────────────────┘
       margin: transparan  |  padding: ikut warna latar
```

Penjelasan: bagian terdalam adalah area *content* tempat teks dan gambar hidup; *padding* membungkusnya dan ikut memakai warna latar elemen; *border* adalah garis tepi; *margin* mendorong kotak menjauhi tetangganya dengan warna transparan.

Setiap lapisan punya peran yang berbeda secara semantik. *Padding* termasuk dalam "tubuh" elemen: klik dan latar berubah ikut memenuhinya, sehingga padding adalah alat utama memberi ruang napas di dalam kartu, tombol, atau sel tabel. *Border* biasanya tipis (1–2 px) dan berfungsi memisahkan komponen dari latar ketika kontras warna tidak cukup. *Margin* menahan jarak antar-komponen, misalnya 32 px antar kartu produk dan 64 px antar bagian halaman. Karakteristik penting *margin* di CSS adalah **collapse** (runtuh): margin bawah dan margin atas dua elemen *block* yang bertetangga tidak dijumlahkan, melainkan dipilih yang terbesar. Dua kartu berjarak `margin-bottom: 16px` lalu `margin-top: 24px` akan berjarak 24 px, bukan 40 px. Perilaku ini sering mengejutkan pemula, tetapi justru membuat jarak antarteks lebih aman daripada dijumlahkan.

Cara memverifikasi semua ini tidak perlu menebak: DevTools Chrome menyajikan diagram kotak yang persis seperti ilustrasi di atas. Buka *Elements*, pilih elemen, lalu gulir panel *Styles* ke bawah hingga diagram kotak berlapis muncul; setiap angkanya adalah nilai CSS yang sedang berlaku. Di panel *Computed*, diagram tersebut juga menampilkan nilai akhir setelah kaskade dihitung. Kebiasaan profesional: setiap kali layout terlihat "aneh" sedikit, buka diagram ini dulu sebelum mengedit CSS. Membaca diagram kotak adalah kebiasaan kerja wajib, bukan trik opsional.

Dalam konteks sistem informasi, *box model* adalah perangkat pikir untuk setiap antarmuka data. Kartu "Stok Hari Ini" di dashboard, baris mata kuliah di SIAKAD, atau panel antrean di layar klinik — semuanya dihitung dengan anatomi yang sama. Ketika analis sistem meminta "kartu ringkasan yang seragam", yang harus Anda jamin teknis: lebar kotak konsisten, jarak dalam (padding) seragam, dan jarak luar (margin) rata. Tanpa pemahaman ini, perbedaan satu pixel saja bisa membuat deretan kartu tergeletak tidak rapi — dan pengguna layanan publik sangat peka pada tampilan yang tidak seragam, sebab keragaman visual dibaca sebagai keraguan sistem.

### 5.2 width, height, min/max, dan box-sizing: border-box

Secara bawaan, CSS bekerja pada mode `box-sizing: content-box`: nilai yang Anda tulis di `width` dan `height` hanya mengukur *content*, sedangkan *padding* dan *border* ditambahkan di luar angka itu. Konsekuensinya bisa dihitung persis. Ambil sebuah panel lebar 280 px dengan `padding: 16px` dan `border: 4px`. Lebar kotak yang ditemati di layar — dan yang "dirasakan" elemen tetangga — adalah 280 + 16 + 16 + 4 + 4 = **304 px**. Tambahkan keduabelas-belasan pixel lain dari padding berbeda, dan angka itu meledak. Inilah sumber ilustratif dari kasus Apersepsi: kartu yang "seharusnya" muat tiga di satu baris ternyata meluber sepuluh pixel dan memunculkan bilah gulir.

Tabel perbandingan berikut merangkum dua mode penghitungan itu dengan angka yang sama (width 280, padding 16 per sisi, border 4 per sisi, tanpa margin).

File: ilustrasi/content-box-vs-border-box.txt

```
   box-sizing: content-box (bawaan)        box-sizing: border-box
  ┌──────────────────────────────┐        ┌──────────────────────────────┐
  │      padding: 16             │        │      padding: 16             │
  │  ┌────────────────────────┐  │        │  ┌────────────────────────┐  │
  │  │  content: 280          │  │        │  │  content: 240          │  │
  │  └────────────────────────┘  │        │  └────────────────────────┘  │
  │      border: 4               │        │      border: 4               │
  └──────────────────────────────┘        └──────────────────────────────┘
   lebar kotak di tetangga = 304 px         lebar kotak di tetangga = 280 px
   (280 + 16 + 16 + 4 + 4)                  (content ikut menyusut)
```

Penjelasan: pada `content-box`, angka `width` hanya milik area konten sehingga lebar keseluruhan membengkak; pada `border-box`, angka `width` adalah lebar kotak utuh, padding dan border dipotong dari dalam.

Mode kedua, `box-sizing: border-box`, mengambil keputusan sebaliknya: angka `width` **menaungi** padding dan border, sehingga kotak selalu berukuran persis seperti yang Anda tulis. Konten ikut menyusut bila padding membesar. Konsekuensi praktisnya sangat besar: layout yang dihitung seperti perkiraan matematika sederhana langsung benar — tiga kotak 280 px dengan jarak 40 px pas di wadah seluas 920 px, tanpa kejutan. Karena itulah hampir semua proyek profesional memasang aturan berikut di awal file CSS utama.

File: tokosaya-css/css/style.css

```css
/* Aturan bagian penghitungan: semua kotak dihitung dari tepi border ke tepi border */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Penjelasan: selektor universal `*` menjangkau seluruh elemen, sementara `*::before` dan `*::after` diperlukan agar elemen semu (dibahas Bab 4 untuk hiasan tipografi) ikut konsisten. Setelah aturan ini aktif, dua kotak berlabel `width: 280px` selalu sama lebar di layar, seberapa pun padding dan bordernya — inilah alasan pola global `border-box` menjadi standar praktik yang disarankan hampir seluruh dokumentasi modern. Perbandingan dua mode di atas juga Anda tunjukkan pada perintah Praktikum: matikan aturan ini sebentar, lalu amati kartu meluber dan munculnya bilah gulir.

Pengaturan ukuran tidak berhenti di `width` dan `height`. Sifat `width` tanpa nilai lain pada elemen *block* berlaku persentase ke induk; sedangkan `auto` membiarkan browser menghitung. Yang lebih sering diperlukan adalah pasangan `min-*` dan `max-*`: `max-width` menahan kotak agar tidak melebar melewati batas (misal `max-width: 100%` membuat gambar tidak pernah meluber dari kartunya), dan `min-height` menahan area terlalu pendek. Kombinasi `width: 280px` + `max-width: 100%` yang dipakai di kartu produk Praktikum ini adalah pola klasik: pada layar lebar kartu tetap 280 px, pada layar sempit kartu memilih menyusut daripada memaksakan bilah gulir horizontal. Prinsip yang sama diterapkan pada kontainer halaman: `.container { max-width: 960px; }` menjaga baris teks tetap nyaman dibaca di monitor lebar — teks yang membentang luas terlalu melelahkan mata (lihat pula diskusi lebar bacaan pada Bab 4).

Kapan pendekatan mana yang dipakai? Aturan keputusannya ringkas: (1) pasang `border-box` global sekali di awal dan jangan pernah mencampurnya dengan `content-box` di proyek yang sama, sebab menghitung dua mode sekaligus adalah sumber bug layout paling sunyi; (2) beri ukuran *eksplisit* hanya pada elemen yang harus stabil, seperti kartu produk dan panel; (3) biarkan teks mengalir bebas — jangan pernah mengunci `height` pada paragraf yang isinya bisa bertambah, karena teks yang terpotong adalah kegagalan aksesibilitas; gunakan `min-height` jika ingin memberi ruang minimum. Dalam proyek sistem informasi, kunci ketiga ini sangat sering muncul: kartu jadwal harus punya tinggi minimal yang sama agar grid rapi, tetapi tetap boleh memanjang bila daftar sesinya lebih banyak.

### 5.3 display: block, inline, dan inline-block

Properti `display` menentukan **jenis kotak** yang akan dibangun browser untuk suatu elemen: apakah ia menumpang baris sendiri, mengalir di dalam teks, atau keduanya. Nilai bawaan setiap elemen HTML sudah ditetapkan oleh stylesheet browser — p, div, h1 hingga h6, ul, section, dan article berperilaku `block`; span, a, strong, dan em berperilaku `inline`; sedangkan img dan input adalah *inline* khusus (disebut *replaced element*) yang tetap menerima `width` dan `height`. Memahami bawaan ini penting karena banyak "kesalahan styling" sebenarnya adalah perilaku bawaan yang belum dipahami.

Elemen `block` adalah kotak besar yang suka sendiri: ia memenuhi lebar induk, mulai di baris baru, dan menerima seluruh properti kotak (width, height, padding, margin, border) tanpa pengecualian. Elemen `inline` adalah lawan typografinya: ia mengalir di baris seperti kata — tautan dalam paragraf, sorotan kata — dan inilah alasan mengapa propertinya dibatasi: `width` dan `height` diabaikan, `margin` atas-bawah tidak menggeser baris, dan `padding` atas-bawah hanya "melukis" latar tanpa mendorong teks di atas atau bawahnya. Nilai tengah yang sering Anda butuhkan adalah `inline-block`: kotaknya mengalir di baris seperti teks, tetapi menerima dimensi dan padding penuh seperti kotak blok.

Perbandingan ketiganya dirangkum berikut.

| Perilaku | block | inline | inline-block |
|---|---|---|---|
| Memulai baris baru | ya | tidak | tidak |
| `width`/`height` | berlaku | diabaikan | berlaku |
| `margin` atas/bawah | berlaku | diabaikan (efek layout) | berlaku |
| `padding` atas-bawah | mendorong teks | hanya melukis latar | mendorong baris |
| Contoh elemen | p, div, ul, h1–h6 | span, a, strong | badge, tombol kustom |

Kasus pemakaian paling khas di proyek Tokosaya: *badge*. Sebuah label kecil "Best Seller" yang harus punya padding penuh dan ditempel di dekat teks harga. Sebagai `inline`, padding dan dimensinya diabaikan sehingga bentuknya remuk; sebagai `block`, ia memaksa baris baru; sebagai `inline-block`, ia duduk rapi di aliran teks dengan kotak penuh. Teknik transformasi display adalah jembatan besar di bab ini: **Anda boleh mengubah jenis kotak elemen apa pun tanpa menyentuh HTML-nya**. Nav link yang terasa sempit menjadi lega setelah berubah `inline-block` dan diberi padding; daftar navigasi `ul > li` menjadi deretan horizontal karena setiap `li` diubah `inline-block`; dua `div` yang sebelumnya menumpuk bisa duduk berdampingan.

File: tokosaya-css/demo/bab-05-display.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demonstrasi display — Tokosaya</title>
  <link rel="stylesheet" href="css/bab-05-display.css">
</head>
<body>
  <main class="demo">
    <h1 class="demo-judul">Perilaku inline vs inline-block</h1>
    <!-- khusus demonstrasi konsep display -->
    <p class="teks-demo">Mouse wireless <span class="sorot-inline">MW-88</span>
      dengan sensor presisi kini tersedia di Tokosaya.</p>
    <ul class="daftar-badge">
      <li class="badge-item badge-item-accent">Best Seller</li>
      <li class="badge-item badge-item-success">Tersedia</li>
      <li class="badge-item badge-item-primary">Baru</li>
    </ul>
  </main>
</body>
</html>
```

Penjelasan: elemen `span.sorot-inline` sengaja diberi `width` dan `padding` besar untuk membuktikan batas perilaku inline (amati di DevTools bahwa kotaknya tidak melebar), sementara `li` pada `.daftar-badge` diubah menjadi `inline-block` agar padding dan latar warnanya berbenung penuh seperti badge sungguhan.

File: tokosaya-css/demo/css/bab-05-display.css

```css
.teks-demo {
  max-width: 480px;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
}

/* sorotan inline: width diabaikan, latar tetap membaur pada teks */
.sorot-inline {
  width: 120px;                 /* tidak berefek pada elemen inline */
  padding: 8px 12px;
  background-color: #F59E0B;
}

/* badge: kotak kecil yang mengalir namun menerima dimensi penuh */
.daftar-badge {
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
  font-size: 0;                 /* menghapus celah spasi antar inline-block */
}

.badge-item {
  display: inline-block;
  font-size: 14px;              /* mengembalikan ukuran teks pada badge */
  padding: 8px 16px;
  border-radius: 12px;
  margin-right: 8px;
}

.badge-item-accent { background-color: #F59E0B; }
.badge-item-success { background-color: #16A34A; color: #ffffff; }
.badge-item-primary { background-color: #4F46E5; color: #ffffff; }
```

Penjelasan: `font-size: 0` pada daftar dan `font-size` eksplisit pada badge adalah solusi baku untuk "celah kecil antar inline-block" — celah itu sebenarnya spasi yang Anda tulis di HTML antar item, dan karena inline-block memperlakukan kotak seperti kata, spasi itu ikut tergambar. Dengan nol mengecilkan whitespace hingga hilang, sementara teks badge dikembalikan sendiri.

Dua catatan hati-hati pada subbab ini. Pertama, `display: none` menghapus kotak dari layar (dan dari alur dokumen) — konstrk dengan `visibility: hidden` atau `opacity: 0` yang menyembunyikan hanya secara visual; pilih `none` hanya saat elemen memang tak seharusnya tampil pada keadaan tertentu (misal, kelas state di Bab 11). Kedua, jangan bingung `display` dengan penempatan: `inline-block` mengubah jenis kotak, bukan posisinya; bila Anda butuh badge yang menempel persis di pojok gambar — bukan mengalir di teks — itulah pekerjaan `position` di 5.5, bukan `display`. Flexbox pada Bab 6 kelak menawarkan cara yang lebih mulus untuk deretan kartu, dan deretan badge di sini akan Anda bandingkan nanti.

### 5.4 overflow dan Penanganannya

*Overflow* adalah kondisi ketika konten melebihi ukuran kotaknya: nama produk terlalu panjang untuk kolom 280 px, gambar lebih lebar dari panel, atau tabel jadwal lebih lebar dari layar ponsel. Nilai bawaan `overflow: visible` membiarkan konten menumpang keluar kotak — sesekali diinginkan (menggantung), tetapi sering kali jadi cacat visual. Empat nilai utama yang perlu Anda kuasai: `hidden` memotong tanpa bilah gulir; `scroll` selalu menampilkan bilah gulir dua dimensi walaupun konten muat; `auto` menampilkan bilah gulir **hanya bila diperlukan** — dan itulah pilihan default yang aman untuk panel yang kontennya dinamis. Nilai yang lebih baru, `overflow: clip`, memotong tanpa membuat kotak menjadi wadah gulir; dokumen MDN memuat detail dukungan browsernya (⚠ version-sensitive: periksa dokumentasi resmi terbaru — MDN).

Perhatikan detail perilaku: `overflow` hanya menggembari konten yang melintasi tepi kotak; ia tidak mengubah penghitungan lebar. Karena itu pola yang benar hampir selalu: `border-box` dulu di 5.2, baru `overflow` dipakai sebagai pengaman visual. Dua pola pemanfaatan yang sangat umum: pertama, **potong melingkar** — kotak kartu ber-radius 12 px akan menampakkan sudut gambar yang tajam kecuali `.produk-media` ditutup `overflow: hidden` supaya gambar anak ikut terpotong bersama sudut kartu; kedua, **gulir dalam panel** — tabel presensi panjang diberi wadah dengan tinggi terbatas dan `overflow-y: auto`, sehingga halaman tidak ikut menggulir dan pengguna tidak kehilangan konteks.

Pola ketiga, teks terlalu panjang, punya resep baku empat baris: sembilan-lah baris berikut menjelaskannya.

File: tokosaya-css/css/style.css

```css
/* Pola pemenggal satu baris: ganti sisa teks dengan elipsis */
.nama-terpotong {
  white-space: nowrap;          /* larang teks menurun ke baris baru */
  overflow: hidden;             /* potong bagian yang keluar */
  text-overflow: ellipsis;      /* tampilkan "..." pada potongan */
}
```

Penjelasan: ketiga properti itu bekerja sebagai satu kesatuan — tanpa `overflow: hidden` elipsis tidak muncul, tanpa `white-space: nowrap` teks akan menurun sehingga tak ada sisa yang terpotong. Pola ini cocok untuk nama produk, path dokumen, atau kolom tabel; sempurnakan dengan atribut `title` pada elemen yang sama agar teks penuh terbaca saat pengguna mengarahkan kursor — solusi statis tanpa perilaku dinamis apapun.

Untuk nama produk yang boleh menurun tetapi dibatasi dua baris, pola umumnya memakai `-webkit-line-clamp`. Teknik ini didukung luas di browser modern, namun tergolung dengan prefiks vendor (⚠ version-sensitive: periksa dokumentasi resmi terbaru — MDN / web.dev); bila ragu, pendekatan aman adalah membiarkan deskripsi menurun penuh dan memangkas isi teks di sisi penyunting konten. Berbeda dari keduanya, kasus "kata tunggal super panjang" (URL, nama berkas seperti `laporan-sistem-akademik-tahun-akademik-2025-2026-final-revisi.pdf`) membutuhkan kata yang boleh dipatahkan: `overflow-wrap: break-word` membuat potongan kata pindah baris, mencegah panel melebar.

Dalam konteks sistem informasi, *overflow* adalah komoditas visual: layar antrean klinik, jadwal bus, dan daftar tugas kuliah hampir seluarnya berisi teks yang panjangnya tak terkendali oleh penulis kode. Putusan desain yang sehat berbunyi: kotak ditetapkan ukurannya, bukan kontennya. Bila isi tumbuh, konten menurun (dengan clamp bila perlu), menggulir di panel (`overflow-y: auto`) — bukan mendorong seluruh halaman tergulir. Putusan ini Anda akan menegaskan lagi pada Bab 7 saat *katalog.html* dibangun responsif dengan Grid.

### 5.5 position: relative, absolute, fixed, sticky dan z-index

Properti `position` menentukan **konteks penempatan** kotak. Nilai bawaan `static` berarti kotak mengikuti alur dokumen biasa — tak bisa diatur melainkan lewat margin. Empat nilai berikutnya mengikat kotak ke koordinat tertentu. `relative` menggeser kotak relatif terhadap posisi alurnya sendiri (top/right/bottom/left) tanpa melepas tempatnya di alur — elemen di sekitarnya tidak ikut geser mengikuti geser-nya. Lebih penting lagi: kotak `relative` menjadi **landasan** untuk anak-anaknya yang `absolute`. `absolute` melepaskan kotak dari alur dokumen dan menempelkannya pada leluhur diposisikan terdekat (nearest positioned ancestor) — bila tidak ada sama sekali, landasannya adalah halaman itu sendiri, dan inilah akar dari *badge* yang terlempar ke pojok layar pada kasus Apersepsi: induknya belum diberi `position: relative`.

Kasus *badge* kartu produk memperlihatkan polanya dengan jelas: `.produk-media { position: relative; }` membuat kotak gambar menjadi landasan, lalu `.produk-badge { position: absolute; top: 8px; right: 8px; }` menempelkan label di pojok kanan atas gambar, 8 px dari kedua tepi. *Badge* ini tidak menggeser teks apa pun di bawahnya karena telah keluar dari alur. `fixed` menempel kotak pada jendela browser (viewport): tetap diam meski halaman berguna digulir; umum untuk tombol bantuan menggantung atau pita cookie — pakai hemat, karena kotak *fixed* menutupi konten di bawahnya dan mudah jadi penghambat bacaan. `sticky` adalah hibrida: kotak mengikuti alur sampai melewati titik geser tertentu, lalu "lengket" — pola berlaku untuk header kolom tabel presensi yang harus terus terlihat saat daftar mahasiswa digulir, atau *nav* halaman informasi. Dukungan `sticky` di browser modern penuh; untuk versi lama, dokumentasi MDN memuat catatan kompatibilitasnya.

Properti `z-index` mengatur **susunan** kotak-kotak yang bertumpuk pada satu titik: bilangan lebih besar berada di depan kotak berbilangan kecil. Dua aturan perlu dipegang: `z-index` hanya bekerja pada elemen yang diposisikan (position bukan `static`), dan nilainya sebaiknya dari skala kecil yang direncanakan (misal 1, 2, 10) — bukan loncatan berdegradasi ke 9999, yang membuat debug susunan berikutnya menyelit. Ingat juga bahwa `position: absolute` di dalam kotak yang *di-*`z-index`-kan membentuk *stacking context* baru; konsepnya cukup dipegang: susunan bekerja pada elemen diposisikan, dan nilai kecil yang terdokumentasi lebih mudah diatur daripada nilai besar yang diingkari.

File: tokosaya-css/css/style.css

```css
/* Landasan: kotak media menampung anak yang diposisikan */
.produk-media {
  position: relative;           /* badge diukur dari tepi GAMBAR, bukan halaman */
}

/* Badge menempel di pojok kanan atas gambar */
.produk-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;                   /* di atas gambar, di bawah elemen modal di masa depan */
}

/* Contoh header tabel yang menempel saat digulir (halaman admin Bab 7) */
.kolom-tuju {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: var(--clr-surface);
}
```

Penjelasan: aturan pertama memperbaiki akar masalah Apersepsi — `relative` pada induk menetapkan titik nol koordinat bagi badge, sehingga `top: 8px; right: 8px` menjadi jarak dari tepi gambar. Aturan kedua menunjukkan pemakaian `sticky` untuk header kolom, diberi latar solid agar baris yang digulir tidak tembus ke belakangnya, dengan `z-index` kecil yang cukup. Segala pilihan di sini disengaja dan terdokumentasi: posisi punya biaya (menghalangi bacaan), jadi tempatkan kotak *fixed*/*sticky* hanya di mana pengguna memang terus membutuhkannya — dan uji selalu dengan DevTools bila bimbang.

Satu jebakan terakhir perlu disorot karena paling sering muncul di kelas: elemen `absolute` diwarisi ukuran dari landasannya (relative parent), tetapi tanpa batas lebar ia bisa melebihi landasan bila isinya panjang. Solusinya adalah menahan lebar pada induk (`max-width`) dan mengizinkan potongan pada anak (`overflow`, 5.4). Position, display, dan overflow adalah tiga kunci yang hampir selalu dikerjakan bersama — kartu produk di Praktikum memakai keduanya sekaligus.

### 5.6 Spacing System: Skala 8px dan Aturan Margin vs Padding

Dua subbab terakhir menyelesaikan "bagaimana kotak bekerja"; subbab ini menjawab "berapa besar". *Spacing system* adalah himpunan nilai jarak yang dilisensikan oleh desain dan dilaksanakan di CSS, dibangun di atas basis `--space-unit: 8px` (token dari Bab 4). Skala baku proyek Tokosaya adalah **8 / 16 / 24 / 32 / 48 / 64** px. Prinsipnya sederhana: setiap jarak — padding kartu, margin antarkartu, jarak judul ke subjudul — harus jatuh di salah satu langkah itu. Hasilnya, halaman terasa "berirama": bagian-bagian yang tidak berkaitan muncul pada takaran yang seragam, mata pengguna tidak perlu mengganti "ukuran kaca pembesarnya" untuk setiap blok.

Kenapa 8 px? Karena angkanya membagi rata lebar layar umum (320, 640, 960, 1280) tanpa sisa — setiap deretan kotak dengan jarak skala 8 bisa disusun rapi di lebar-kanvas itu — dan memberi langkah yang cukup halus pembedaan (8, 16, 24 masih terbedakan mata) namun cukup langka agar desainer tak bebas memilih 18 px atau 21 px yang merusak ritme. Basis empat piksel (4, 8, 12) dipakai beberapa tim sebagai skala lebih halus; proyek Tokosaya menetapkan skala 8 sebagai utama dan mengizinkan langkah 4 px hanya untuk koreksi mikro di dalam komponen kecil (misal selisih garis dasar) — dicatat di komentar CSS, bukan menjadi kebiasaan liar.

Aturan putusan *margin* atau *padding* ikut kebutuhan ruang: **padding adalah bagian dari komponen sendiri** — memperluas latar dan tepi kliknya (bayangkan tombol besar yang mudah disentuh); **margin adalah jarak antar-komponen** — tetap transparan dan tidak ikut latar. Padanan di dunia fisik: padding adalah jarak foto ke tepi paspotor, margin adalah jarak antar paspotor di dinding. Konsekuensi teknis kedua aturan itu: (1) margin vertikal antar blok bisa *collapse* (5.1), padding tidak — karena itu ritme vertikal antarseksi sering lebih aman distandarkan lewat padding bagian kontainer, bukan margin anak; (2) latar ikut padding tetapi tidak margin — kartu berlatar putih dengan margin 32 px menampakkan bidang kaca di sekelilingnya; bila Anda ingin bidang itu ikut warna, padding-lah jawabannya.

Standar jarak baku yang dipakai di seluruh proyek: kontainer halaman `padding: 0 24px`; bagian antarseksi `padding: 48px 0 64px`; kartu produk padding badan 16 px dan jarak antarkartu 32 px; tombol utama padding 8 px × 32 px — semuanya kelipatan 8. Skala ini juga terkait aksesibilitas: kriteria *Target Size (Minimum)* WCAG 2.2 (2.5.8) menetapkan area sasaran yang dapat disentuh minimal 24 × 24 px, sehingga tombol berpadding 8 px dengan teks 16 px otomatis melampaui ambang itu — jarak yang dirangkai sistem, bukan kebetulan per-komponen. Dalam praktik tim desain yang bekerja dengan mockup, skala spacing sering dinomori (`space-1`, `space-2`, dst.); di Bab 12 konsep itu akan dirumuskan penuh sebagai bagian dari *design system*.

File: tokosaya-css/css/style.css

```css
/* Skala jarak memakai token Bab 4; langkah = kelipatan 8 px */
.hero {
  padding: 64px 0;              /* 8 × 8 — jeda besar antarseksi */
}

.hero-subtitle {
  margin: 0 0 32px;             /* 8 × 4 — jarak ke tombol CTA */
}

.produk-body {
  padding: 16px;                /* 8 × 2 — ruang napas dalam kartu */
}

.produk-card {
  margin: 0 16px 32px 0;        /* 8 × 2 horizontal; 8 × 4 antar kartu */
}
```

Penjelasan: pada praktiknya, komentar `8 × n` inilah yang menegakkan disiplin skala — setiap angka baru di file CSS harus punya pasangan di skala (atau langkah 4 px yang disengaja), sehingga saat sebuah kartu perlu lebih "beruang", angkanya melompat 16 → 24 → 32, bukan menjerayang ke 21. Rasa "berirama" itu yang nantinya menyulap grid Bootstrap (Bab 9) dan utilities spacing (Bab 9) jadi keputusan yang konsisten, bukan tebakan per-baris.

Skala 8 px juga mempermudah pemeriksaan: buka halaman, sorot dua komponen, dan tanyakan "berapa selisih jaraknya dan apakah itu kelipatan 8?" Bila jawabannya tidak, keputusannya bukan "geser 3 px" — melainkan memilih langkah skala yang terdekat. Disiplin kecil ini yang membedakan proyek mahasiswa level akhir dari proyek latihan: layout yang punya mata tak perlu menebak dua kali.

## Konsep Penting

| # | Konsep | Inti | Catatan penerapan di proyek |
|---|---|---|---|
| 1 | *Box model* | Setiap elemen = content + padding + border + margin | Semua layout Tokosaya dibangun di atas anatomi ini |
| 2 | *Content* | Area teks/gambar inti, diukur `width`/`height` | Gambar kartu memenuhi lebar media (`width: 100%`) |
| 3 | *Padding* | Ruang dalam; ikut latar dan area sentuh | Badan kartu 16 px, tombol utama 8×32 px |
| 4 | *Border* | Garis tepi; memisahkan kartu dari latar | Kartu memakai 1 px `--clr-border` |
| 5 | *Margin* | Ruang luar; transparan; vertikal bisa *collapse* | Jarak antarkartu 32 px via margin bawah |
| 6 | *box-sizing: border-box* | `width` menaungi padding + border | Pasang global di awal `style.css`; satu mode untuk semua |
| 7 | min/max | Menahan pertumbuhan kotak | `.produk-card` 280 px + `max-width: 100%` |
| 8 | `display: block` | Kotak penuh baris, semua properti kotak | Kartu, section, p, ul |
| 9 | `display: inline` | Mengalir di teks; dimensi diabaikan | span, a, strong |
| 10 | `display: inline-block` | Kotak kecil mengalir + dimensi penuh | Badge, item navigasi, deretan kartu (sebelum Flexbox) |
| 11 | *overflow* | Konten meluber: hidden/scroll/auto | Sudut gambar terpotong radius; tabel menggulir di panel |
| 12 | *position* | relative=landasan; absolute=menempel; fixed/sticky=khusus | Badge kartu; header tabel admin |
| 13 | *z-index* | Urutan susunan elemen diposisikan | Skala kecil (1, 2, 10) yang terdokumentasi |
| 14 | *Spacing system* | Skala 8/16/24/32/48/64 px berbasis token | Semua jarak proyek ikut langkah ini |
| 15 | margin vs padding | padding=kompnen sendiri; margin=antar-komponen | Kartu → padding; jarak antar kartu → margin |

## Contoh Kode

Tiga contoh berikut melengkapi materi: perbandingan `box-sizing`, transformasi `display`, dan penanganan `overflow`. Semuanya file mandiri yang bisa dibuka langsung di browser.

File: tokosaya-css/demo/bab-05-box-sizing.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demonstrasi box-sizing — Tokosaya</title>
  <link rel="stylesheet" href="css/bab-05-box-sizing.css">
</head>
<body>
  <main class="demo">
    <h1 class="demo-judul">content-box vs border-box</h1>
    <div class="panel panel-content">
      <span class="panel-label">content-box</span>
      <span class="panel-angka">280 + 16 + 16 + 4 + 4 = 304 px</span>
    </div>
    <div class="panel panel-border">
      <span class="panel-label">border-box</span>
      <span class="panel-angka">keseluruhan tetap 280 px</span>
    </div>
  </main>
</body>
</html>
```

File: tokosaya-css/demo/css/bab-05-box-sizing.css

```css
.demo {
  font-family: 'Inter', sans-serif;
  padding: 24px;
}

.demo-judul {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
}

/* Kedua panel menulis angka yang SAMA */
.panel {
  width: 280px;
  padding: 16px;
  border: 4px solid #4F46E5;
  background-color: #F8FAFC;
  margin-bottom: 16px;
  display: inline-block;   /* khusus demonstrasi: biarkan berdampingan */
}

/* Satu-satunya perbedaan ada di sini */
.panel-content {
  box-sizing: content-box; /* bawaan: 280 hanya content */
}

.panel-border {
  box-sizing: border-box;  /* 280 mencakup padding + border */
}

.panel-label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
}
```

File: tokosaya-css/demo/bab-05-overflow.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demonstrasi overflow — Tokosaya</title>
  <link rel="stylesheet" href="css/bab-05-overflow.css">
</head>
<body>
  <main class="demo">
    <h1 class="demo-judul">Nama terlalu panjang untuk kolom</h1>
    <ul class="daftar-kategori">
      <li class="kategori-item" title="Keyboard Mekanis KX-210 Edisi Pengembang Warna Arang">
        Keyboard Mekanis KX-210 Edisi Pengembang Warna Arang
      </li>
      <li class="kategori-item" title="Charger Cepat 30W CP-30 Paket Travel Kafe">
        Charger Cepat 30W CP-30 Paket Travel Kafe
      </li>
      <li class="kategori-item" title="Headphone Studio HS-15">
        Headphone Studio HS-15
      </li>
    </ul>
  </main>
</body>
</html>
```

File: tokosaya-css/demo/css/bab-05-overflow.css

```css
.demo {
  font-family: 'Inter', sans-serif;
  padding: 24px;
}

/* Wadah terbatas: 240 px */
.daftar-kategori {
  width: 240px;
  max-width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Satu baris; sisanya dipotong dengan elipsis */
.kategori-item {
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## Penjelasan Kode

**Contoh 1 — box-sizing.** Dua panel menulis angka identik (`width: 280px; padding: 16px; border: 4px`), tetapi hanya satu properti membedakan hasilnya: `box-sizing`. Alasan demonstrasi ini penting adalah agar Anda tidak sekadar menghafal rumus, melainkan melihat langsung bahwa `content-box` menuliskan lebar konten yang kemudian diberi tambahan padding dan border, sehingga totalnya 304 px; sedangkan `border-box` memotong konten dari dalam sehingga keseluruhan tetap 280 px. Buka DevTools dan inspaksi kedua panel: diagram kotaknya menunjukkan angka yang persis seperti label pada panel. Inilah alasan global `border-box` dipasang sekali di proyek — agar setiap angka yang Anda tulis adalah **lebar kotak di layar**, bukan lebar konten saja.

**Contoh 2 — display: block, inline, dan inline-block.** Struktur `.sorot-inline` memakai span bawaan inline yang diberi `width` besar: amati di DevTools bahwa kotaknya *tidak* diperlebar, karena dimensi elemen inline diabaikan; yang terlihat hanya latar berwarna yang mengikuti teks. Sebaliknya, list badge mengubah setiap `li` menjadi `inline-block`, sehingga padding penuh dan *border-radius* bekerja, namun kotaknya tetap mengalir berdampingan di baris. `font-size: 0` pada `.daftar-badge` menghapus celah antar item yang berasal dari spasi di HTML — kunci kecil yang menjadikan deretan inline-block terlihat berjarak persis sesuai margin yang Anda tetapkan. Teknik ini sama persis dengan yang nanti diulang pada kartu produk Praktikum.

**Contoh 3 — overflow.** `.daftar-kategori` dibatasi `240px`, sedangkan item pertama jauh lebih panjang dari itu. Tiga properti bekerja sebagai satu kesatuan: `white-space: nowrap` mencegah teks menurun, `overflow: hidden` memotong kelebihan, `text-overflow: ellipsis` menampilkan penanda potong pada tepi. Atribut `title` di HTML memastikan pengguna tetap bisa melihat nama penuh lewat keterangan bawaan browser — penting di antarmuka sistem informasi, karena memotong teks yang tidak dapat diamati kembali adalah kegagalan informasi, bukan keindahan tipografi. Kombinasi ketiga pola ini akan muncul lagi pada kartu produk: gambar terpotong radius, nama terpotong elipsis, badge menempel absolut.

## Praktikum

### Tujuan Praktikum

Membangun komponen **kartu produk Tokosaya** (`.produk-card`) lengkap dengan *badge* semantik, plus *hero* Tokosaya yang jaraknya diperketat sesuai skala 8 px. Praktikum menutup siklus materi: mengaktifkan `box-sizing: border-box` global, menata kartu berderet lewat `inline-block`, menempel badge dengan `position: absolute`, membatasi lebar dengan `min/max`, serta memeriksa semua hasil lewat diagram kotak DevTools. Pada akhir praktikum, halaman `index.html` proyek Tokosaya berisi hero dan delapan produk baku yang tertata.

### Kebutuhan

1. Visual Studio Code (atau editor teks lain) dengan ekstensi *Live Server* opsional; file HTML juga bisa dibuka langsung di browser.
2. Google Chrome + DevTools untuk inspeksi diagram kotak dan pengujian lebar viewport.
3. Folder proyek `tokosaya-css/` dari bab-bab sebelumnya, berisi `css/style.css` dan `img/`. Bila folder belum lengkap, buat sesuai langkah Persiapan.
4. Gambar delapan produk baku (format SVG sederhana); pola pembuatannya diberikan pada Langkah 2.
5. Koneksi internet sekali saja saat pertama memuat Google Fonts (halaman tetap terbuka tanpa koneksi, hanya font memakai bawaan).

### Persiapan

Pastikan struktur folder minimal berikut ada; buat berkas yang belum ada (kosong boleh, akan diisi pada Langkah 3).

1. `tokosaya-css/index.html` — halaman utama (ditulis ulang di Langkah 3).
2. `tokosaya-css/css/style.css` — stylesheet utama (ditulis ulang di Langkah 4).
3. `tokosaya-css/img/` — direktori gambar produk.

Bila gambar belum ada, gunakan pola SVG sederhana berikut untuk `img/produk-keyboard-kx210.svg`; duplikasi pola ini untuk tujuh produk lain dengan teks dan warna latar berbeda.

File: tokosaya-css/img/produk-keyboard-kx210.svg

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="280" height="160" viewBox="0 0 280 160">
  <rect width="280" height="160" fill="#E2E8F0"/>
  <rect x="76" y="52" width="128" height="56" rx="8" fill="#4F46E5"/>
  <text x="140" y="86" font-family="sans-serif" font-size="16" fill="#FFFFFF" text-anchor="middle">KX-210</text>
</svg>
```

Penjelasan: SVG ini hanya placeholder visual berukuran persis 280×160 dan berisi satu kotak serta label kode produk; yang penting bagi praktikum adalah rasionya sama dengan `width`/`height` pada `<img>` agar layout tidak bergerak saat gambar asli menggantikannya. Gunakan nama berkas `kebab-case` untuk sembilan produk sisa: `produk-mouse-mw88.svg`, `produk-headphone-hs15.svg`, `produk-monitor-mr241.svg`, `produk-flashdrive-fd64.svg`, `produk-charger-cp30.svg`, `produk-speaker-bt5.svg`, `produk-webcam-wc720.svg`.

### Langkah Kerja

1. Buka folder `tokosaya-css/` di Visual Studio Code.
2. Siapkan delapan gambar produk di `img/` mengikuti pola SVG pada Persiapan.
3. Tulis ulang `index.html` persis seperti blok kode pada subbab **Kode** (hero + 8 kartu).
4. Tulis ulang `css/style.css` dengan blok CSS pada subbab **Kode** (token + reset + kartu). Pastikan aturan `box-sizing: border-box` global berada di paling atas setelah token.
5. Simpan file, lalu buka `index.html` di Chrome. Pastikan hero dan delapan kartu tampil tanpa bilah gulir horizontal pada lebar jendela ≥ 1024 px.
6. Buka DevTools (F12), pilih elemen `.produk-card` pertama, dan baca diagram kotak di panel *Styles/Computed*: catat margin 0 16 32 0, padding body 16, border 1.
7. Uji dampak `box-sizing`: beri komentar `/* */` pada aturan `box-sizing`, simpan, dan amati kartu meluber melebihi kontainer (muncul bilah gulir horizontal). Kembalikan aturannya — inilah perbandingan `content-box` vs `border-box` pada proyek nyata.
8. Sorot badge "Best Seller" di kartu pertama; di panel *Styles* hapus sementara `position: relative` pada `.produk-media` dan amati badge terlempar ke pojok kanan halaman. Kembalikan — inilah kebutuhan landasan bagi `absolute` (5.5).
9. Persempit jendela browser perlahan ke 480 px: kartu turun menyusun satu per satu dan `max-width: 100%` menjaga tanpa scrollbar horizontal.
10. Rekam pengamatan Anda (lebar kotak, jarak, perilaku badge) dalam 5–10 poin; bawa ke pertemuan berikutnya sebagai bahan diskusi.

### Kode

Berkas pertama adalah halaman utama proyek dengan hero Tokosaya dan 8 produk baku dari dataset §5.2.

File: tokosaya-css/index.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tokosaya — Peralatan Kerja Digital</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <div class="container">
      <p class="site-logo">Tokosaya</p>
      <nav class="site-nav" aria-label="Navigasi utama">
        <ul class="nav-list">
          <li class="nav-item"><a class="nav-link" href="index.html">Beranda</a></li>
          <li class="nav-item"><a class="nav-link" href="katalog.html">Katalog</a></li>
          <li class="nav-item"><a class="nav-link" href="tentang.html">Tentang</a></li>
          <li class="nav-item"><a class="nav-link" href="kontak.html">Kontak</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">Peralatan Kerja Digital untuk Semua</h1>
        <p class="hero-subtitle">Keyboard, mouse, hingga monitor — pilih perangkat kerja Anda dengan harga UMKM yang jujur.</p>
        <a class="hero-button" href="katalog.html">Lihat Katalog</a>
      </div>
    </section>

    <section class="bagian-produk">
      <div class="container">
        <h2 class="bagian-title">Produk Unggulan</h2>
        <p class="bagian-deskripsi">Delapan produk baku yang dipakai konsisten di seluruh materi Tokosaya.</p>
        <ul class="daftar-produk">
          <li class="produk-card">
            <div class="produk-media">
              <img src="img/produk-keyboard-kx210.svg" alt="Keyboard mekanis KX-210 berwarna gelap dengan 87 tombol" width="280" height="160">
              <span class="produk-badge produk-badge-accent">Best Seller</span>
            </div>
            <div class="produk-body">
              <p class="produk-kategori">Aksesori Input</p>
              <h3 class="produk-nama">Keyboard Mekanis KX-210</h3>
              <p class="produk-deskripsi">Keyboard mekanis 87 tombol dengan switch biru untuk kerja lama yang nyaman.</p>
              <p class="produk-harga">Rp650.000</p>
            </div>
          </li>
          <li class="produk-card">
            <div class="produk-media">
              <img src="img/produk-mouse-mw88.svg" alt="Mouse wireless 2,4 GHz dengan sensor presisi 1600 DPI" width="280" height="160">
              <span class="produk-badge produk-badge-success">Tersedia</span>
            </div>
            <div class="produk-body">
              <p class="produk-kategori">Aksesori Input</p>
              <h3 class="produk-nama">Mouse Wireless MW-88</h3>
              <p class="produk-deskripsi">Mouse wireless 2,4 GHz dengan sensor presisi 1600 DPI.</p>
              <p class="produk-harga">Rp185.000</p>
            </div>
          </li>
          <li class="produk-card">
            <div class="produk-media">
              <img src="img/produk-headphone-hs15.svg" alt="Headphone over-ear dengan bantalan telinga yang lembut" width="280" height="160">
              <span class="produk-badge produk-badge-success">Tersedia</span>
            </div>
            <div class="produk-body">
              <p class="produk-kategori">Audio</p>
              <h3 class="produk-nama">Headphone Studio HS-15</h3>
              <p class="produk-deskripsi">Headphone over-ear dengan bantalan lembut untuk rapat audio jangka panjang.</p>
              <p class="produk-harga">Rp425.000</p>
            </div>
          </li>
          <li class="produk-card">
            <div class="produk-media">
              <img src="img/produk-monitor-mr241.svg" alt="Monitor IPS 24 inci full HD untuk kerja tabel dan laporan" width="280" height="160">
              <span class="produk-badge produk-badge-accent">Best Seller</span>
            </div>
            <div class="produk-body">
              <p class="produk-kategori">Layar</p>
              <h3 class="produk-nama">Monitor IPS 24" MR-241</h3>
              <p class="produk-deskripsi">Monitor IPS 24 inci full HD yang jernih untuk kerja tabel &amp; laporan.</p>
              <p class="produk-harga">Rp1.899.000</p>
            </div>
          </li>
          <li class="produk-card">
            <div class="produk-media">
              <img src="img/produk-flashdrive-fd64.svg" alt="Flash drive 64GB untuk arsip dokumen dan tugas" width="280" height="160">
              <span class="produk-badge produk-badge-success">Tersedia</span>
            </div>
            <div class="produk-body">
              <p class="produk-kategori">Penyimpanan</p>
              <h3 class="produk-nama">Flash Drive 64GB FD-64</h3>
              <p class="produk-deskripsi">Flash drive 64GB untuk arsip dokumen dan tugas mahasiswa.</p>
              <p class="produk-harga">Rp95.000</p>
            </div>
          </li>
          <li class="produk-card">
            <div class="produk-media">
              <img src="img/produk-charger-cp30.svg" alt="Charger cepat 30W untuk ponsel dan tablet" width="280" height="160">
              <span class="produk-badge produk-badge-success">Tersedia</span>
            </div>
            <div class="produk-body">
              <p class="produk-kategori">Daya</p>
              <h3 class="produk-nama">Charger Cepat 30W CP-30</h3>
              <p class="produk-deskripsi">Charger 30W untuk pengisian cepat ponsel dan tablet saat mengetik di kafe.</p>
              <p class="produk-harga">Rp120.000</p>
            </div>
          </li>
          <li class="produk-card">
            <div class="produk-media">
              <img src="img/produk-speaker-bt5.svg" alt="Speaker bluetooth portabel bersuara bersih" width="280" height="160">
              <span class="produk-badge produk-badge-danger">Stok Terbatas</span>
            </div>
            <div class="produk-body">
              <p class="produk-kategori">Audio</p>
              <h3 class="produk-nama">Speaker Bluetooth BT-5</h3>
              <p class="produk-deskripsi">Speaker bluetooth portabel dengan suara bersih untuk presentasi kelompok.</p>
              <p class="produk-harga">Rp285.000</p>
            </div>
          </li>
          <li class="produk-card">
            <div class="produk-media">
              <img src="img/produk-webcam-wc720.svg" alt="Webcam 720p dengan mikrofon bawaan untuk kelas online" width="280" height="160">
              <span class="produk-badge produk-badge-primary">Baru</span>
            </div>
            <div class="produk-body">
              <p class="produk-kategori">Video</p>
              <h3 class="produk-nama">Webcam HD WC-720</h3>
              <p class="produk-deskripsi">Webcam 720p dengan mikrofon bawaan untuk kelas online dan wawancara.</p>
              <p class="produk-harga">Rp310.000</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p class="footer-text">Tokosaya — Jl. Digital Raya No. 10, Jakarta</p>
      <p class="footer-text">halo@tokosaya.id · (021) 555-0199</p>
      <p class="footer-tagline">Belanja Tepat, Kirim Cepat</p>
    </div>
  </footer>
</body>
</html>
```

Berkas kedua adalah `css/style.css` lengkap untuk keadaan bab ini: token Bab 4, aturan dasar, hero, dan komponen kartu.

File: tokosaya-css/css/style.css

```css
/* ============== DESIGN TOKEN — tokosaya (Bab 4) ============== */
:root {
  --clr-primary: #4F46E5;      /* indigo — tombol & tautan utama */
  --clr-primary-dark: #4338CA;
  --clr-accent: #F59E0B;       /* amber — badge & sorotan */
  --clr-dark: #1E293B;         /* heading & teks tegas */
  --clr-body: #334155;         /* teks paragraf */
  --clr-bg: #F8FAFC;           /* latar halaman */
  --clr-surface: #FFFFFF;      /* kartu & panel */
  --clr-border: #E2E8F0;
  --clr-success: #16A34A;
  --clr-danger: #DC2626;
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  --radius: 12px;
  --shadow-card: 0 8px 24px rgba(15, 23, 42, 0.08);
  --space-unit: 8px;           /* basis skala jarak 8/16/24/32/48/64 */
}

/* ============== DASAR ============== */
*,
*::before,
*::after {
  box-sizing: border-box;      /* lebar kotak termasuk padding + border */
}

body {
  margin: 0;
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: var(--clr-body);
  background-color: var(--clr-bg);
}

img {
  display: block;              /* hilangkan celah bawah gambar inline */
  max-width: 100%;
  height: auto;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding-left: 24px;          /* skala 8: 8 × 3 */
  padding-right: 24px;
}

/* ============== HEADER ============== */
.site-header {
  background-color: var(--clr-surface);
  border-bottom: 1px solid var(--clr-border);
  padding: 16px 0;
}

.site-logo {
  margin: 0;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 20px;
  color: var(--clr-dark);
}

.nav-list {
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  font-size: 0;                /* menghapus celah antar item inline-block */
}

.nav-item {
  display: inline-block;
  font-size: 16px;             /* kembalikan ukuran teks pada item */
}

.nav-link {
  display: inline-block;
  padding: 8px 16px;           /* area sentuh memenuhi WCAG 2.5.8 */
  color: var(--clr-body);
  text-decoration: none;
}

.nav-link:hover {
  color: var(--clr-primary);
}

/* ============== HERO (skala 8 px) ============== */
.hero {
  padding: 64px 0;             /* 8 × 8 — jeda besar antarseksi */
  background-color: var(--clr-surface);
  border-bottom: 1px solid var(--clr-border);
}

.hero-title {
  margin: 0 0 16px;            /* 8 × 2 */
  font-family: var(--font-heading);
  font-size: 32px;
  line-height: 1.25;
  color: var(--clr-dark);
}

.hero-subtitle {
  margin: 0 0 32px;            /* 8 × 4 */
  max-width: 560px;
  font-size: 18px;
}

.hero-button {
  display: inline-block;       /* tautan jadi kotak berpadding */
  padding: 8px 32px;           /* 8 × 1 dan 8 × 4 */
  background-color: var(--clr-primary);
  color: #ffffff;
  border-radius: var(--radius);
  font-weight: 600;
  text-decoration: none;
}

.hero-button:hover {
  background-color: var(--clr-primary-dark);
}

/* ============== BAGIAN PRODUK ============== */
.bagian-produk {
  padding: 48px 0 64px;        /* 8 × 6 dan 8 × 8 */
}

.bagian-title {
  margin: 0 0 8px;
  font-family: var(--font-heading);
  font-size: 24px;
  color: var(--clr-dark);
}

.bagian-deskripsi {
  margin: 0 0 24px;            /* 8 × 3 */
}

/* Trik deret kartu: font-size 0 meniadakan celah inline-block */
.daftar-produk {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0;
}

/* ============== KOMPONEN KARTU PRODUK ============== */
.produk-card {
  display: inline-block;       /* kartu berdampingan sebelum Flexbox (Bab 6) */
  vertical-align: top;
  width: 280px;
  max-width: 100%;             /* penyelamat layar sempit (5.2) */
  margin: 0 16px 32px 0;       /* 8 × 2 kanan, 8 × 4 bawah */
  background-color: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
}

.produk-media {
  position: relative;          /* landasan bagi badge absolute */
}

.produk-media img {
  width: 100%;
}

.produk-badge {
  position: absolute;
  top: 8px;                    /* 8 × 1 dari tepi gambar */
  right: 8px;
  display: inline-block;
  padding: 8px 16px;
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 600;
  border-radius: var(--radius);
  z-index: 2;
}

.produk-badge-accent  { background-color: var(--clr-accent);  color: var(--clr-dark); }
.produk-badge-success { background-color: var(--clr-success); color: #ffffff; }
.produk-badge-danger  { background-color: var(--clr-danger);  color: #ffffff; }
.produk-badge-primary { background-color: var(--clr-primary); color: #ffffff; }

.produk-body {
  padding: 16px;               /* 8 × 2 — ruang napas kartu */
}

.produk-kategori {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--clr-primary);
}

.produk-nama {
  margin: 0 0 8px;
  font-family: var(--font-heading);
  font-size: 18px;
  color: var(--clr-dark);
}

.produk-deskripsi {
  margin: 0 0 16px;
  font-size: 14px;
}

.produk-harga {
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  color: var(--clr-dark);
}

/* ============== FOOTER ============== */
.site-footer {
  padding: 32px 0;             /* 8 × 4 */
  background-color: var(--clr-surface);
  border-top: 1px solid var(--clr-border);
}

.footer-text {
  margin: 0 0 8px;
  font-size: 14px;
}

.footer-tagline {
  margin: 0;
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--clr-primary);
}
```

### Penjelasan Kode

**index.html.** Struktur halaman memakai semantik Bab 2: `header` berisi logo dan `nav` (list tautan), `main` berisi dua `section` (hero dan produk), `footer` memuat kontak baku. Setiap kartu adalah `li.produk-card` — satu daftar produk bermakna, bukan sekumpulan div — dengan anatomi: `.produk-media` (gambat + badge), `.produk-body` (kategori, nama, deskripsi, harga). Badge diberi kelas varian dua tingkat (`produk-badge-accent` dst.) seperti pola warna semantik Bab 4. Perhatikan atribut `width` dan `height` pada `<img>`: angkanya disamakan rasio SVG, sehingga layout tidak lompat ketika gambar termuat. Tidak ada satu pun *inline style* di berkas ini; semua keputusan visual hidup di `style.css` — pola yang menempatkan HTML sebagai struktur dan CSS sebagai penampilan.

**style.css.** Urutan berkas punya alasan: token dulu (basis keputusan), lalu aturan global (`box-sizing`), lalu halaman (header, hero, bagian), lalu komponen (kartu). Hero dipisah dengan padding `64px 0`, judul berjarak `16px` ke subjudul, subjudul `32px` ke tombol — ketemu skala 8/16/32/64 lewat satu token `--space-unit`. Deret kartu memakai `inline-block` + `font-size: 0` pada daftar (trik 5.3) dan `vertical-align: top` agar kartu bertingkat sejajar atas. `.produk-media` bersifat `relative` menjadi landasan badge `absolute` yang menempel `8px` dari pojok; `border-radius` kartu memotong sudut pada tepi luar, sementara sudut gambar di dalam juga tampak membulat karena gambar memenuhi media dan kartu memotongnya secara visual pada tepi; bila di kemudian hari Anda menambahkan latar pada media, tambahkan `overflow: hidden` pada `.produk-media` agar potongan sudut ditegaskan secara teknis, bukan sekadar optik. Terakhir, `width: 280px; max-width: 100%` pada kartu adalah aplikasi langsung subbab 5.2: tampil tetap pada layar lebar, menyusut bermartabat pada layar kecil.

### Hasil yang Diharapkan

Teramati (visual, pada jendela ≥ 1024 px):

1. Header putih dengan logo "Tokosaya" dan empat tautan navigasi berderet horizontal berpadding rapi.
2. Hero putih berhias border bawah: judul Poppins besar, subjudul abu, tombol indigo melengkung "Lihat Katalog".
3. Delapan kartu produk berbaris tiga per baris, dengan *badge* berwarna di pojok kanan- atas gambar: Best Seller (amber), Tersedia (hijau), Stok Terbatas (merah), Baru (indigo).
4. Sudut gambar terpotong ikut radius kartu sehingga terlihat bulat; bayangan lembut `--shadow-card` tampil merata.
5. Footer putih memuat alamat, kontak, dan tagline warna indigo.

Terukur di DevTools:

1. Diagram kotak `.produk-card` menampilkan `width: 280px; padding: 0; border: 1px; margin: 0 16px 32px`.
2. Diagram kotak `.produk-body`: padding 16 px empat sisi; total tinggi badan bertahan walaupun deskripsi berubah panjang (tinggi kartu menyesuaikan, lebar tetap).
3. Mematikan `box-sizing: border-box` dan memuat ulang: kartu membengkak ke ~282 px dan baris ketiga kartu turun — indikator kuantitatif perbedaan `content-box`.
4. Dengan menghapus `position: relative` sementara: badge berpindah ke tepi kanan viewport — membuktikan kebutuhan `relative` pada `.produk-media`.
5. Menyusutkan jendela ke < 480 px: kartu menyesuaikan lebar tanpa munculnya scrollbar horizontal (hasil `max-width: 100%`).

### Troubleshooting

**Masalah:** Kartu-kartu sejajar tepi bawah berbeda; kartu pertama tampak lebih tinggi dan deret terlihat bergerigi.
**Penyebab:** `vertical-align` bawaan elemen inline-block adalah *baseline*, sehingga kartu dengan tinggi isi berbeda tidak duduk sejajar di atas.
**Solusi:** Tambahkan `vertical-align: top;` pada `.produk-card`
**Pencegahan:** Jadikan kebiasaan: setiap `inline-block` komponen utuh selalu disertai `vertical-align: top` sejak deklarasi pertama.

**Masalah:** Ada celah tipis tak terduga (sekitar beberapa piksel) antarkartu sekalipun margin sudah diatur 8 px.
**Penyebab:** Spasi/baris baru di antara tag HTML menjadi karakter spasi nyata pada elemen inline-block (mengalir seperti antarkata).
**Solusi:** Beri `font-size: 0;` pada `.daftar-produk` lalu setel `font-size` eksplisit pada `.produk-card`/anaknya (sudah diterapkan dalam listing, pastikan tidak terhapus).
**Pencegahan:** Ingat aturan: container inline-block = font-size 0; anggota = font-size eksplisit. Bab 6 mengganti teknik ini dengan `gap` Flexbox yang bebas masalah semacam ini.

**Masalah:** Jarak antar kartu terlihat lebih pendek dari angka margin yang diatur; jarak antar judul-bagian aneh.
**Penyebab:** *Margin collapse* — margin bawah dan margin atas dua blok bertetangga tidak dijumlahkan, melainkan dipilih terbesar.
**Solusi:** Tetapkan jarak dalam satu arah saja (misal selalu `margin-bottom`), atau gunakan padding pada kontainer bagian alih-alih margin pada anak.
**Pencegahan:** Tulis komentar `/* jarak satu arah: bawah saja */` di file sebagai perjanjian tim.

**Masalah:** Badge "Best Seller" menempel di pojok kanan atas halaman, bukan di pojok gambar kartu.
**Penyebab:** `.produk-media` belum diposisikan relatif; badge `absolute` mencari leluhur diposisikan terdekat dan tak menemukannya sehingga memakai halaman.
**Solusi:** Tambahkan `position: relative;` pada `.produk-media` (pastikan tidak tertimpa aturan lain).
**Pencegahan:** Pasangan yang wajib diingat: `absolute` selalu punya `relative` (atau landasan lain) pada induknya; periksa di panel *Computed* bila bimbang.

**Masalah:** Setelah menambah `border` atau `padding`, kartu meluber dari baris dan memunculkan bilah gulir horizontal.
**Penyebab:** Mode `content-box` (bawaan) menambahkan padding dan border di luar angka `width`.
**Solusi:** Pastikan aturan global `* { box-sizing: border-box; }` tersedia dan tidak terkesan komentar; verifikasi di diagram kotak bahwa pembatas `width` sudah menaungi border.
**Pencegahan:** Selalu tulis reset `border-box` sebagai blok pertama file CSS utama proyek.

## Studi Kasus

Fakultas teknologi sebuah universitas mendesain ulang **dashboard SIAKAD mahasiswa**. Halaman awal menampilkan tiga kartu informasi: "Status Akademik" (IPK, SKS, semester), "Jadwal Hari Ini", dan "Tanggungan Keuangan". Desain pertama dari ketua tim tampak marwah di Figma, tetapi saat diterjemahkan ke CSS, dashboard jadi masalah pengguna: tiap kartu diberi `padding: 40px`, jarak antar-elemen di dalamnya dicampur tak beraturan (12 px, 17 px, 28 px), sementara margin antarkartu ditulis `40px` yang bertetangga dengan border bagian `24px`.

Dampaknya diukur dari perilaku layar, bukan angka statitik yang tak terverifikasi: kartu jadi terlalu tinggi sehingga kartu ketiganya terlepas dari layar laptop standa dan wajib digulir meski hanya berisi tiga baris data; baris tak seragam membuat kolom kartu tak sejajar atas dan terlihat "bergelombang"; jarak 17 px antara label dan nilai menyisakan ruang kosong yang membuat kelompok informasi terpecah visual — pengguna membaca "IPK" dan angkanya seperti dua blok berbeda. Di sini teori Bab 5 bekerja: padding berlebih memperbesar kotak tanpa menambah informasi; jarak skala liar merusak ritme; *collapse* margin membuat jarak vertikal nyata menyimpang dari angka yang ditulis.

Remidiasinya memakai lima keputusan bab ini. (1) `box-sizing: border-box` global, lalu ukur lebar kartu dari tepi border. (2) padding kartu diturunkan ke skala: 24 px pada badan, 16 px pada media, mengikut `--space-unit` 8 px. (3) Jarak antar kartu distandarkan 32 px lewat margin satu arah. (4) `min-height` jadikan kualitas seragam kartu, bukan tinggi kunci yang memaksa kosong. (5) header tabel jadwal dibuat `sticky` agar laporan panjang tetap terbaca kolomnya. Hasilnya dinilai kualitatif oleh perhatian pengguna: lebih banyak kartu muat satu layar, kolom sejajar, dan setiap kelompok info tergolong satu unit — bukti bahwa *box model* dan skala jarak bukan urusan estetika saja, melainkan **kecepatan memahami data** dalam sistem informasi. Pola yang sama akan Anda bangun ulang dengan Grid pada Bab 7.

## Latihan Mandiri

1. Dengan analogi Anda sendiri (bukan menyalin bab), jelaskan urutan *content → padding → border → margin* dalam lima kalimat, lalu gambar diagram kotak ASCII untuk kartu produk MW-88.
2. Hitung lebar keseluruhan dua kotak berikut dan nyatakan perbedaannya: kotak A `width: 260px; padding: 16px; border: 4px;` (content-box) dan kotak B angka identik (border-box). Tuliskan perhitungan Anda baris per baris.
3. Dua kartu bertetangga memakai `margin-bottom: 28px` dan `margin-top: 20px`. Berapa jarak nyata di layar, dan properti apa yang diperjuangkan bila Anda ingin jarangnya menjadi 20 px tanpa mengubah urutan aturan?
4. Ubah `.nav-item` pada style.css menjadi `display: block`, amati hasilnya di browser, jelaskan mengapa navigasi berantakan, lalu kembalikan ke `inline-block`. Sertakan kesimpulan satu paragraf tentang kapan *inline* tak cukup untuk komponen interaktif.
5. Tambahkan kelas `.nama-terpotong` memakai pola empat baris `white-space/overflow/text-overflow` pada nama produk di kartu WC-720, lalu uji: ganti nama menjadi kalimat 60 huruf dan verifikasi munculnya elipsis. Tulis pengamatan Anda.
6. Inspeksi badge kartu MR-241 via DevTools: catat `top/right` badge, lalu hapus `position: relative` di `.produk-media`, catat posisi badge baru, dan rangkum dalam dua kalimat alasan `relative` wajib dipasang.
7. Audit skala 8 px pada style.css: buat tabel tiga kolom (properti, nilai, langkah skala 8 px) untuk seluruh `padding`/`margin` di berkas; tandai nilai yang bukan kelipatan 8 (bila ada) dan tangani dengan langkah terdekat.

## Tugas

1. **Tugas individu — Komponensi delapan kartu + panel statistik.** Susun berkas `tokosaya-css/statistik.html` yang memuat panel "Ringkasan Tokosaya": empat kotak statistik (Jumlah Produk 8, Kategori 7, Produk Best Seller 2, Stok Terbatas 1) berderet `inline-block`, memakai `border-box` global, seluruh jarak dari skala 8 px, dan satu kartu mencontohkan `position: absolute` untuk badge "Baru" seperti kartu WC-720. Keluaran yang dikumpulkan: berkas HTML + CSS + tangkapan layar diagram kotak satu kartu + catatan singkat (maks 10 baris) pilihan margin vs padding pada tiap jarak. Kriteria ringkas: tanpa bilah gulir horizontal di 1280 px, semua jarak kelipatan 8, satu `<h1>`, seluruh gambar ber-`alt`.
2. **Tugas kelompok (3 orang) — Audit spacing dashboard akademik.** Berdasarkan studi kasus SIAKAD, buat draf revisi tiga kartu: daftar masalah jarak (tabel: elemen, nilai lama, nilai baru, alasan), draf CSS per kartu memakai token Tokosaya, dan tangkapan layar sebelum-sesudah dari peragaan sederhana HTML/CSS. Keluaran: satu dokumen ringkas (2–3 halaman) + satu draf berkas CSS. Kriteria: konsistensi skala, keterbacaan kelompok informasi, dan kesesuaian `min/max` (5.2).

## Refleksi

1. Sebelum bab ini, keputusan jarak Anda kemungkinan berupa tebakan ("coba 20 px"). Setelah memahami *box model*, bagaimana cara Anda kini menjelaskan pilihan jarak kepada diri sendiri atau rekan desain?
2. Kapan Anda akan memilih `overflow: hidden` daripada `auto`? Adakah resiko menghilangkan informasi yang penting bagi pengguna sistem informasi yang membutuhkan teks penuh (misal nama mata kuliah)?
3. Aturan "padding = bagian komponen, margin = jarak antar komponen" sering dilang di proyek awal. Apa akibat memakai keduannya di tempat yang salah terhadap ritme halaman?
4. Bagaimana pengalaman Anda saat memanfaatkan `max-width: 100%` pada kartu? Kapan pendekatan ini memadai dan bila perlu diganti pola responsif di Bab 7?

## Rangkuman

1. *Box model* menyusun semua elemen sebagai kotak berlapis: content → padding → border → margin; padding ikut latar, margin transparan.
2. Margin vertikal dua blok bertetangga *collapse* ke nilai terbesar; jarak satu arah menghindari kebingungan ini.
3. `box-sizing: border-box` yang dipasang global membuat angka `width` berarti lebar kotak utuh — dasar semua penghitungan layout yang stabil.
4. `min-*`/`max-*` menjaga pertumbuhan kotak; `max-width: 100%` mencegah scrollbar horizontal di layar kecil.
5. `display` menentukan jenis kotak: block penuh baris, inline mengalir di teks (dimensi diabaikan), inline-block menjadi solusi kotak kecil yang berdampingan.
6. `overflow` memerintahkan nasib konten meluber: hidden (potong), scroll (selalu bilah), auto (bilah bila perlu); plus pola elipsis untuk teks panjang.
7. `position: relative` adalah landasan bagi `absolute` (badge kartu); `fixed` menempel viewport; `sticky` menahan header saat gulir; `z-index` mengurusi susunan dengan skala kecil terdokumentasi.
8. *Spacing system* Tokosaya: skala 8/16/24/32/48/64 px berbasis `--space-unit`, dengan aturan padding=bagian komponen dan margin=jarak antarkomponen.
9. Komponen `.produk-card` Tokosaya merupakan gabungan praktik seluruh konsep: border-box, inline-block, overflow (radius), position (badge), dan skala 8 px.

Jembatan ke bab berikutnya: *inline-block* adalah cara satu baris menyusun elemen berdampingan, tetapi ia punya celah spasi dan butur yang menjengkelkan — dan ia butuh trik `font-size: 0`. Bab 6 memperkenalkan **Flexbox**, model layout satu dimensi modern yang menggantikan seluruh trik itu: deret kartu, navigasi, dan hero Tokosaya akan disusun ulang dengan `display: flex`, `gap`, dan `justify-content` — dengan diagram main axis dan cross axis sebagai peta barunya.

## Evaluasi

### Pilihan Ganda

1. Urutan lapisan *box model* dari yang terdalam ke terluar adalah ... (ringan)
   A. margin → border → padding → content
   B. content → padding → border → margin
   C. content → border → padding → margin
   D. padding → content → margin → border
2. Sebuah panel `width: 200px; padding: 20px; border: 4px; margin: 0;` pada mode `content-box` (bawaan). Lebar kotak yang ditemati di layar adalah ... (ringan)
   A. 200 px
   B. 224 px
   C. 248 px
   D. 264 px
3. Efek memasang `* { box-sizing: border-box; }` global pada proyek adalah ... (ringan)
   A. padding dan border ditambahkan di luar nilai `width`
   B. nilai `width` mencakup padding dan border, sehingga lebar kotak di layar = nilai yang ditulis
   C. margin ikut masuk dalam hitungan `width`
   D. tinggi elemen otomatis disetel sama dengan lebar
4. Elemen `span` yang diberi `width: 120px` dan `padding: 8px` (masih inline) akan ... (sedang)
   A. menjadi kotak berukuran penuh sebagaimana ditulis
   B. memindahkan teks sekitarnya sesuai padding
   C. mengabaikan `width`; latar padding tampak menempel namun tidak mendorong baris di atas dan di bawahnya
   D. otomatis berubah menjadi elemen block
5. Nilai `overflow` yang **hanya** menampilkan bilah gulir bila konten benar-benar melebihi kotak adalah ... (ringan)
   A. visible
   B. hidden
   C. scroll
   D. auto
6. Badge `position: absolute; top: 8px; right: 8px;` meletakkan diri di pojok kanan atas **halaman** alih-alih pojok gambar kartu. Penyebabnya ... (sedang)
   A. `z-index` terlalu besar
   B. induk kartu belum memiliki `position: relative`, sehingga landasan absolute jatuh ke halaman
   C. badge harus ditulis sebelum tag `<img>`
   D. `top` dan `right` harus ditulis dalam persen
7. Header kolom tabel yang harus tetap terlihat saat daftar panjang digulir paling tepat memakai ... (sedang)
   A. `position: fixed`
   B. `position: sticky`
   C. `position: absolute`
   D. `overflow: scroll`
8. Pada *spacing system* Tokosaya, padding dalam badan kartu produk yang sesuai skala 8 px adalah ... (ringan)
   A. 14 px
   B. 18 px
   C. 24 px
   D. 30 px

### Benar atau Salah

1. Padding ikut memakai warna latar elemen, sedangkan margin selalu transparan. (B/S)
2. Margin bawah dan margin atas dua elemen *block* bertetangga saling dijumlahkan menjadi total jarak vertikal. (B/S)
3. Elemen `<img>` bersifat inline, oleh sebab itu `width` dan `height` tidak dapat diterapkan padanya. (B/S)
4. `overflow: hidden` memotong konten yang keluar kotak tanpa menampilkan bilah gulir. (B/S)
5. Nilai `z-index` berpengaruh pada elemen apa pun, termasuk yang masih `position: static`. (B/S)

### Analisis Kode

1. Perhatikan potongan berikut (proyek memakai mode bawaan, tanpa `box-sizing: border-box` di manapun):

File: soal/bab-05-analisis-1.html

```html
<div class="konten" style="width: 240px; border: 1px solid #E2E8F0;"> <!-- khusus demonstrasi -->
  <div class="kartu" style="width: 260px; padding: 16px; border: 4px solid #4F46E5;">
    Keyboard Mekanis KX-210
  </div>
</div>
<!-- khusus demonstrasi -->
```

a. Berapa lebar kotak `.kartu` yang ditemati di dalam `.konten`, dan apakah kartu muat di dalamnya? b. Cacat apa yang menyebabkannya? c. Sebut dua cara memperbaikinya (satu di level semua elemen, satu di level komponen ini).

2. Perhatikan CSS badge berikut yang berjalan di atas markup `<div class="kartu"><span class="tandai">Baru</span>...</div>`:

File: soal/bab-05-analisis-2.html

```html
<style>
  /* khusus demonstrasi */
  .kartu  { width: 280px; }
  .tandai { position: absolute; top: 8px; right: 8px; }
  /* khusus demonstrasi */
</style>
```

Apakah badge akan duduk di pojok kanan atas kartu? Jelaskan mekanisme *containing block* yang bekerja, kemudian perbaiki dengan satu deklarasi properti tambahan pada `.kartu`.

### Soal Praktik

1. Bangun panel "Ringkasan Tokosaya" (empat kotak statistik berderet `inline-block`) dalam satu halaman mandiri: atur `box-sizing: border-box` global, lebar panel 200 px, padding 16 px, jarak antar kotak 16 px, radius 12 px memakai token Tokosaya. Sertakan tangkapan diagram kotak sebuah panel dan catatan seluruh jarak yang dipakai beserta langkah skalanya.
2. Buat halaman demo pemenggalan teks: sebuah daftar berisi tiga nama produk, satu di antaranya lebih dari 50 huruf; tampilkan potongan elipsis pada kolom 240 px dan pastikan nama penuh tetap dapat diamati pengguna lewat sarana bawaan HTML (tanpa perilaku dinamis). Jelaskan tiga properti yang bekerja dan mengapa ketiganya tidak boleh terpisah.

### Kunci Jawaban

<details>
<summary>Klik untuk melihat kunci jawaban</summary>

**Pilihan Ganda.**
1. B — content paling dalam, lalu padding, border, margin terluar; urutan ini dipakai diagram DevTools.
2. C — 200 + (20×2) + (4×2) = 248 px karena content-box menambahkan padding dan border di luar width.
3. B — border-box menaungi padding dan border; konten ikut menyusut, lebar kotak di layar stabil.
4. C — elemen inline mengabaikan width/height dan padding vertikalnya tidak mendorong alur baris.
5. D — `auto` menampilkan bilah gulir hanya saat dibutuhkan; `scroll` selalu menampilkan.
6. B — absolute mengukur dari leluhur diposisikan terdekat; tanpa `relative` landasannya menjadi halaman.
7. B — sticky mengikuti alur lalu menahan diri saat melewati `top: 0`; fixed menempel sejak awal pada viewport.
8. C — 24 px = 8 × 3, satu langkah skala Tokosaya; angka lain bukan kelipatan 8.

**Benar atau Salah.**
1. Benar — padding bagian dari tubuh elemen; margin di luar kotak dan transparan.
2. Salah — keduanya *collapse*: dipilih nilai terbesar (28 px), bukan dijumlahkan.
3. Salah — img adalah *replaced element* yang tetap menerima width/height meski berperilaku inline.
4. Benar — hidden memotong tanpa bilah gulir; bilah ada pada scroll/auto.
5. Salah — z-index bekerja pada elemen diposisikan (bukan static) atau yang membentuk stacking context.

**Analisis Kode 1.** Lebar kartu = 260 + 16×2 + 4×2 = 300 px, sedangkan wadah hanya 240 px → kartu meluber 60 px; cacatnya: mode content-box menambahkan padding/border di luar width. Perbaikan: (a) pasang global `* { box-sizing: border-box; }` sehingga kartu tetap 260 px; (b) atau ubah kartu menjadi `width: 216px` (240 − 24) dengan content-box — namun pilihan global border-box lebih disarankan.

**Analisis Kode 2.** Belum: karena `.kartu` adalah elemen static, landasan absolute menuju leluhur diposisikan terdekat; bila tidak ada, landasannya halaman (viewport/awal dokumen) sehingga badge duduk di pojok kanan atas halaman. Perbaikan: tambahkan `position: relative;` pada `.kartu` agar `.tandai` mengukur dari tepi kartu.

**Soal Praktik 1 (poin penilaian).** Empat kotak berderat via inline-block + `font-size: 0` pada wadah; seluruh jarak 8/16/24; panel 200 px dengan border-box menahan lebar; diagram kotak memperlihatkan padding 16 dan border sesuai; radius memakai `var(--radius)`; tanpa bilah gulir pada jendela ≥ 1024 px.

**Soal Praktik 2 (ringkasan).** `white-space: nowrap` menahan teks di satu baris; `overflow: hidden` memotong lebihi; `text-overflow: ellipsis` menampilkan penanda potong; ketiganya satu kesatuan — tanpa nowrap tidak ada yang terpotong, tanpa overflow sisa tetap tampak. Nama penuh tetap tersedia lewat atribut `title` pada item.

</details>

## Referensi

1. MDN Web Docs. (2025). *The box model — CSS: Cascading style sheets*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model (diases 9 November 2025).
2. MDN Web Docs. (2025). *overflow — CSS: Cascading style sheets*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/overflow (diases 9 November 2025).
3. web.dev. (2025). *Learn CSS: Box model and spacing*. Google. https://web.dev/learn/css (diases 9 November 2025).
4. Duckett, J. (2011). *HTML & CSS: Design and build websites*. Indianapolis, IN: Wiley.
5. Robbins, J. N. (2018). *Learning web design: A beginner's guide to HTML, CSS, JavaScript, and Web Graphics* (5th ed.). Sebastopol, CA: O'Reilly Media.
6. W3C. (2024). *Web content accessibility guidelines (WCAG) 2.2 — Kriteria 2.5.8 Target size (minimum)*. https://www.w3.org/TR/WCAG22/ (diases 9 November 2025).