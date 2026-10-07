# BAB 3 — Dasar-Dasar CSS

## Deskripsi Singkat

Bab ini mengajak kamu mengenal *Cascading Style Sheets* (CSS) sebagai bahasa buat mengatur tampilan halaman web: warna, huruf, jarak, dan perbedaan status antarelemen. Kamu akan mempelajari anatomi blok aturan CSS, tiga cara memasang CSS beserta praktik terbaiknya, jenis-jenis *selector* dasar, *pseudo-class*, satuan ukuran, serta mekanisme kaskade, *inheritance*, dan *specificity* yang menentukan gaya mana yang "menang". Materi ini langsung dipraktikkan pada `css/style.css` v1 buat company profile Tokosaya, lalu ditutup dengan studi kasus refactor halaman layanan publik. Kalau di Bab 2 kamu membangun struktur HTML semantik, di bab ini kamu mulai memberi "pakaian" pada kerangka itu. Bab 4 lalu menyempurnakannya dengan tipografi profesional dan sistem warna berbasis token.

## Tujuan Pembelajaran

Setelah menyelesaikan bab ini, mahasiswa dapat:

1. **Menjelaskan** cara kerja CSS sebagai bahasa yang menerapkan gaya melalui pencocokan *selector* terhadap elemen HTML.
2. **Membedakan** tiga cara memasang CSS (inline, internal, external) dan **mengidentifikasi** alasan external CSS menjadi praktik default proyek web.
3. **Mengimplementasikan** selector elemen, *class*, *ID*, *grouping*, dan *descendant* untuk menata halaman Tokosaya.
4. **Menerapkan** *pseudo-class* dasar (`:hover`, `:focus`, `:first-child`, `:last-child`, `:nth-child()`) untuk menata keadaan interaktif tanpa JavaScript.
5. **Menganalisis** konflik gaya dengan tabel *specificity* dan aturan urutan penulisan dalam kaskade.
6. **Merancang** struktur file `style.css` yang terorganisasi menggunakan komentar bagian dan penamaan *class* konsisten.
7. **Mengevaluasi** perubahan gaya pada halaman nyata menggunakan browser dan DevTools.

## Capaian Pembelajaran

Sub-capaian bab ini bermuara pada **CPMK 3** — mahasiswa mampu menerapkan HTML5 dan CSS3 secara semantik untuk membangun halaman web statis yang konsisten dan mudah dirawat. Secara khusus, bab ini menyumbang kemampuan: menata rupa halaman dengan CSS eksternal, memilih *selector* secara sengaja dan terdokumentasi, menguraikan bagaimana browser menentukan gaya final ketika terjadi konflik, serta menata file gaya agar selaras dengan kerja tim pengembangan sistem informasi. Kemampuan ini menjadi prasyarat langsung Bab 4 (tipografi dan sistem warna), Bab 5 (box model), serta Bab 6–7 (layout dan *responsive web design*).

## Kata Kunci

CSS (*Cascading Style Sheets*) — bahasa buat menata rupa halaman web, *selector* — pola pencocokan elemen yang akan diberi gaya, *declaration* — pasangan properti dan nilai di dalam blok aturan, external stylesheet — file CSS terpisah yang dihubungkan ke dokumen, *pseudo-class* — keadaan khusus elemen kayak pas kursor menghampiri, *kaskade* (cascade) — algoritma browser memilih pemenang kalau aturan bertentangan, *specificity* — ukuran kekhususan selector dalam kaskade, *inheritance* — pewarisan nilai properti dari elemen induk ke elemen anak, class dan penamaan *kebab-case* — konvensi nama gaya `blok-elemen`, satuan CSS — px, %, em, rem, vw, dan vh.

## Apersepsi

Pada akhir Bab 2, struktur company profile Tokosaya udah selesai: `index.html` dan `tentang.html` kini semantik dengan `header`, `nav`, `main`, dan `footer`. Terus pemilik toko membuka link pratinjau, melihatnya sebentar, lalu bertanya: "Strukturnya udah rapi, tapi kenapa tampilannya kayak dokumen lama? Semua hurufnya sama, linknya biru tua bergaris bawah, dan tak ada satu warna pun dari brand kami."

Komentar itu memang tepat. HTML menyimpan struktur dan isi. Tetapi tanpa instruksi penataan, browser akan menampilkan semuanya dengan "pakaian default": huruf *serif* bawaan, link biru khas tahun 1990-an, dan tanpa warna brand Tokosaya. Sementara itu, website toko pesaing udah tampil dengan warna ungu khas mereka, tombol yang benar-benar terlihat kayak tombol, dan heading yang terasa kayak judul sungguhan. Jadi bedanya bukan pada struktur HTML — keduanya sama-sama semantik — melainkan pada lapisan penataannya.

Di sinilah CSS mulai terasa gunanya. Tokosaya nggak butuh kode yang rumit; cukup satu file `css/style.css` yang berisi keputusan visual: font dasar yang enak dibaca, warna indigo buat link dan tombol, heading yang tegas, dan status interaktif link (pas kursor di atasnya atau pas menerima fokus keyboard). Karena keputusan itu ditulis sekali dalam satu file, keempat halaman Tokosaya bisa berbagi gaya dan tetap konsisten — kebiasaan penting pas proyek nanti tumbuh menjadi sistem informasi dengan banyak halaman.

Analogi sederhananya begini: HTML itu manekin, CSS itu pakaiannya. Di bab ini kamu mulai merakit pakaian pertamanya. Kamu juga akan melihat bahwa perubahan warna, ukuran huruf, sampai respons *hover* bisa dibuat *murni dengan CSS tanpa JavaScript satu baris pun*.

## Materi Pembelajaran

### 3.1 CSS dan Cara Kerjanya

CSS adalah bahasa deklaratif buat menjelaskan tampilan dokumen HTML. Nama lengkapnya, *Cascading Style Sheets*, memuat dua gagasan penting: *style sheets* berarti kumpulan aturan gaya yang dipisahkan dari struktur, sedangkan *cascading* menjelaskan cara browser menyatukan banyak aturan yang mungkin saling bertabrakan (mekanismenya dibahas penuh di subbab 3.7). Kalau HTML menjawab "apa isi halaman ini", CSS menjawab "gimana isi itu tampil".

Satuan terkecil dalam CSS adalah **blok aturan** (*rule*). Satu blok aturan terdiri dari *selector* — pola yang menunjukkan elemen mana yang dipilih — dan blok deklarasi yang berisi pasangan properti—nilai, atau *declaration*, di antara kurung kurawal. Properti menyebut bagian yang ingin diubah (misalnya `color`), sedangkan nilai menyebut hasil yang diinginkan (misalnya `#1E293B`).

File CSS di bawah ini memuat satu blok aturan: selector `h1` dan dua deklarasi.

```css
File: latihan-css/anatomi-rule.css
/* Satu blok aturan: selector h1 dan blok deklarasinya */
h1 {
  color: #1E293B;
  font-size: 32px;
}
```

Penjelasan: baris pertama cuma komentar (ditulis dengan `/* ... */`). `h1` adalah *selector*, sedangkan bagian di antara kurung kurawal adalah blok deklarasi. `color: #1E293B;` dan `font-size: 32px;` adalah dua *declaration*, dan masing-masing diakhiri titik koma. Nilai `#1E293B` adalah kode warna heksadesimal, format yang juga dipakai di seluruh proyek Tokosaya.

Terus gimana CSS "bekerja"? Pas browser merender halaman, ia mencocokkan (*matching*) setiap aturan CSS dengan setiap elemen DOM (pohon yang dibangun dari HTML — lihat lagi kajian render pada Bab 1). Aturan yang *selector*-nya cocok dengan suatu elemen akan digabung. Kalau ada dua aturan yang memberi nilai berbeda buat properti yang sama, browser memilih pemenangnya lewat kaskade. Setelah itu, hasil akhirnya dirender ke layar. Jadi, CSS nggak punya "urutan program" kayak logika aplikasi: hasilnya ditentukan oleh kecocokan *selector* dengan elemen, bukan oleh alur eksekusi dari atas ke bawah dokumen.

Contoh berikut memperlihatkan pencocokan tersebut. File HTML memuat satu `h1` dan dua `p`.

```html
File: latihan-css/pencocokan/index.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Laporan Status Aplikasi Peminjaman Ruang</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Laporan Status Aplikasi Peminjaman Ruang</h1>
  <p>Perbaikan pencarian ruang terselesaikan pada pekan ini.</p>
  <p>Uji tampilan cetak rekap peminjaman dijadwalkan hari Rabu.</p>
</body>
</html>
```

```css
File: latihan-css/pencocokan/css/style.css
h1 {
  color: #4F46E5;
}
p {
  color: #334155;
}
```

Penjelasan: selector `h1` cocok dengan satu elemen judul, jadi judulnya berwarna indigo (#4F46E5). Selector `p` cocok dengan dua elemen paragraf, dan keduanya menerima warna slate (#334155) dari satu aturan yang sama. Di sinilah efisiensi utama CSS terasa: gaya ditulis sekali, lalu dipakai di banyak elemen sekaligus.

Dalam konteks sistem informasi, memisahkan struktur dan tampilan itu penting banget. Bayangkan website layanan akademik dengan lima puluh halaman: tanpa CSS, penataan harus diulang di setiap halaman; dengan satu stylesheet terpusat, perubahan warna status "selesai" cukup dilakukan sekali dan langsung terasa di seluruh website. Itulah sebabnya unit kerja SI — dari sistem akademik sampai informasi rumah sakit — butuh gaya yang terpusat, bukan tersebar di banyak file halaman. Kalau gayanya konsisten, pengguna juga lebih yakin bahwa seluruh sistem memang dikelola dengan rapi.

### 3.2 Inline, Internal, dan External CSS

Aturan CSS bisa diletakkan di tiga tempat, dan pilihan yang terlihat kecil ini ternyata berpengaruh besar ke urusan pemeliharaan.

**Inline CSS** menempel langsung pada satu elemen lewat atribut `style`. Gaya ini cuma berlaku buat elemen itu, menang atas hampir semua gaya lain, dan nggak bisa dipakai ulang. **Internal CSS** ditulis di dalam elemen `<style>` pada `head` dokumen, sehingga berlaku buat satu halaman penuh. **External CSS** disimpan di file terpisah (umumnya `style.css`) lalu dihubungkan dengan elemen `<link>`, sehingga satu file bisa dipakai banyak halaman. Secara teknis ketiganya sama-sama sah, tetapi dalam praktik profesional perannya jelas berbeda.

| Aspek | Inline | Internal | External |
|---|---|---|---|
| Letak kode | atribut `style` pada elemen | elemen `<style>` di `head` | file `.css` terpisah |
| Jangkauan | satu elemen | satu halaman | seluruh halaman proyek |
| Dapat dipakai ulang | nggak | antarelemen 1 halaman | antar semua halaman |
| Kemudahan pemeliharaan | buruk, tersebar | sedang | baik, satu pusat |
| Posisi dalam proyek | demonstrasi konsep | eksperimen cepat 1 halaman | default proyek |

Praktik terbaik di proyek web adalah ini: **external CSS jadi pilihan default**. Internal CSS masih berguna buat eksperimen cepat di satu halaman (misalnya pas kamu sedang mencoba ide sebelum dipindahkan ke file proyek), tetapi gayanya tetap ikut bercampur dalam kaskade halaman itu. Sementara itu, inline CSS di mata kuliah ini sebaiknya hanya muncul sebagai demonstrasi konsep — kayak pada contoh berikut yang sengaja menampilkan ketiganya sekaligus biar gampang dibandingkan.

```html
File: latihan-css/tiga-cara-css/index.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiga Cara Memasang CSS</title>
  <!-- Cara 2: internal CSS di dalam head -->
  <style>
    p {
      color: #334155;
    }
  </style>
  <!-- Cara 3: external CSS melalui elemen link -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Cara 1: gaya inline — khusus demonstrasi perbandingan, bukan pola proyek -->
  <p style="color: #DC2626;">Paragraf ini memakai gaya inline.</p>
  <p>Paragraf ini menerima warna dari aturan internal.</p>
  <h1>Judul ini berwarna indigo dari berkas eksternal</h1>
</body>
</html>
```

```css
File: latihan-css/tiga-cara-css/css/style.css
h1 {
  color: #4F46E5;
}
```

Penjelasan: halaman ini memperlihatkan ketiga cara secara berdampingan. Paragraf pertama berwarna merah karena gaya inline menang atas aturan lain (lihat subbab 3.7). Paragraf kedua berwarna slate dari aturan internal. Judulnya berwarna indigo karena `<link>` memuat `style.css`. Perhatikan urutan di `head`: internal ditulis lebih dulu, external setelahnya. Kalau keduanya menyasar elemen yang sama dengan kekuatan setara, aturan yang ditulis belakangan akan menang. Karena itu, biasakan menaruh `<link>` stylesheet sebagai bagian tetap di `head` setiap halaman proyek.

Kenapa urusan pemeliharaan penting? Lihat saja Tokosaya yang menata empat halaman (Beranda, Katalog, Tentang, Kontak). Kalau warna indigo ditulis inline di setiap halaman, mengganti warna brand berarti kamu harus menyusuri puluhan baris di empat file. Dengan external CSS, cukup ubah satu baris di `style.css`. Buat unit layanan publik yang punya ratusan halaman informasi, selisih ini bukan soal selera — tetapi soal biaya pemeliharaan dan risiko inkonsistensi antarhalaman.

### 3.3 Element, Class, dan ID Selector

*Selector* menentukan elemen mana yang akan menerima gaya. Tiga selector dasar yang paling sering dipakai adalah selector elemen, selector *class*, dan selector *ID*.

**Element selector** menulis nama tag secara langsung (`p`, `h1`, `a`, `li`). Gaya akan berlaku buat semua elemen dengan tipe itu di halaman, jadi cocok buat aturan global kayak warna teks dasar. Namun selector ini nggak melihat konteks: mengubah semua `p` berarti paragraf di footer juga ikut berubah.

**Class selector** memakai nama *class* yang ditulis dengan titik di depan (`.lead`). *Class* adalah atribut HTML yang bisa ditempelkan ke elemen apa pun dan dipakai ulang di banyak elemen sekaligus — inilah pengait gaya yang paling sering dipakai di proyek nyata. Buat penamaan, pakai **kebab-case** (huruf kecil dengan tanda hubung) dan pola `blok-elemen`, misalnya `site-nav`, `hero-title`, `produk-card`, `badge-tersedia`. Dengan pola ini, orang yang membaca HTML bisa langsung menebak posisi atau peran elemen di halaman.

**ID selector** memakai atribut `id` dengan tanda pagar di depan (`#pengantar`). Karena sebuah *ID* harus unik di satu halaman, selector ini sebaiknya dipakai hemat: cocok buat satu titik jangkar yang benar-benar khusus, bukan buat gaya yang berulang. Patokan mudahnya begini: kalau kamu merasa gaya itu akan muncul lagi di tempat lain, kemungkinan besar yang kamu butuhkan adalah *class*, bukan ID.

Dua "kombinator" sederhana melengkapi ketiganya. **Grouping** (koma) menggabungkan selector yang berbagi aturan, misalnya `h1, h2 { ... }`. **Descendant selector** (spasi) menyasar elemen di dalam elemen lain: `.laporan-section p` berarti "setiap `p` di dalam elemen ber-*class* `laporan-section`", nggak peduli seberapa dalam posisinya.

```html
File: latihan-css/selector-dasar/index.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Laporan Status Aplikasi Layanan Mahasiswa</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header id="pengantar">
    <h1>Laporan Status Aplikasi Layanan Mahasiswa</h1>
    <p class="lead">Ringkasan pekan keenam pengembangan aplikasi peminjaman ruang.</p>
  </header>
  <section class="laporan-section">
    <h2>Temuan Utama</h2>
    <p>Formulir pinjam dan kembali kini tampil dalam satu kolom yang runtut.</p>
    <p>Petugas perpustakaan menilai warna status peminjaman masih membingungkan.</p>
  </section>
</body>
</html>
```

```css
File: latihan-css/selector-dasar/css/style.css
/* Element selector: menyasar semua elemen p */
p {
  color: #334155;
}

/* Class selector: menyasar setiap elemen ber-class lead */
.lead {
  font-weight: 600;
}

/* ID selector: menyasar elemen ber-id pengantar */
#pengantar {
  border-bottom: 1px solid #E2E8F0;
  padding-bottom: 24px;
}

/* Descendant selector: p di dalam laporan-section */
.laporan-section p {
  line-height: 1.7;
}

/* Grouping: dua selector berbagi satu blok aturan */
h1, h2 {
  color: #1E293B;
}
```

Penjelasan: kelima aturan ini mewakili pola kerja yang akan sering kamu temui di seluruh buku. Element selector `p` menjadi dasar warna teks global. `.lead` menandai satu paragraf pembuka yang ingin dibuat lebih tegas. `#pengantar` memanfaatkan sifat unik karena bagian pengantar memang hanya satu. `.laporan-section p` mempersempit jangkauan gaya ke area tertentu, sedangkan grouping `h1, h2` mencegah duplikasi deklarasi warna pada judul. Hal yang sebaiknya dihindari sejak awal adalah nama *class* yang menggambarkan tampilan literal (`.merah-kecil`, `.huruf-besar`) karena pas desain berubah, nama itu justru membingungkan. Lebih aman pilih nama berbasis peran (`btn-cta`, `section-title`) lalu biarkan gayanya yang berubah.

### 3.4 Pseudo-class Dasar

Elemen di halaman nggak selalu berada dalam keadaan statis: kadang dihampiri kursor, kadang menerima fokus keyboard, atau berbeda karena posisinya di antara elemen saudara. *Pseudo-class* dipakai buat mendeskripsikan keadaan kayak itu, dan penulisannya menempel pada selector dengan tanda titik dua, misalnya `a:hover`. Bagian menariknya, semua keadaan ini bisa ditangani **murni oleh CSS** — tanpa satu baris JavaScript pun, sesuai cakupan mata kuliah ini.

Lima *pseudo-class* dasar yang cukup buat sebagian besar kebutuhan Bab 3–8:

- **`:hover`** — aktif pas kursor berada di atas elemen: warna link berubah, garis bawah muncul.
- **`:focus`** — aktif pas elemen menerima fokus, biasanya karena ditabrak tombol Tab atau diklik. Link dan elemen form punya fokus. Gaya fokus yang jelas penting banget buat pengguna yang menyusuri halaman dengan keyboard (kajian penuh mengikuti di Bab 13 tentang aksesibilitas).
- **`:first-child`** — menyasar elemen yang merupakan anak pertama elemen induknya; berguna buat memberi penekanan pada butir daftar pertama.
- **`:last-child`** — menyasar anak terakhir; misalnya menghapus jarak bawah butir terakhir.
- **`:nth-child()`** — menyasar anak sesuai pola urutan: `odd` (ganjil), `even` (genap), atau rumus kayak `2n`. Pola baris silih ganti pada tabel (pewarna berselang, *zebra striping*) dibuat dari satu baris aturan ini.

```html
File: latihan-css/pseudo-class/index.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menu dan Statistik Kafe Kampus</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <nav class="site-nav">
    <a href="#beranda">Beranda</a>
    <a href="#katalog">Katalog</a>
    <a href="#tentang">Tentang</a>
  </nav>
  <ul class="menu-list">
    <li>Kopi gayo</li>
    <li>Teh tarik</li>
    <li>Roti bakar</li>
  </ul>
  <table class="statistik-table">
    <thead>
      <tr>
        <th>Bulan</th>
        <th>Pesanan</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Januari</td>
        <td>120</td>
      </tr>
      <tr>
        <td>Februari</td>
        <td>135</td>
      </tr>
      <tr>
        <td>Maret</td>
        <td>98</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

```css
File: latihan-css/pseudo-class/css/style.css
/* :hover pas kursor berada di atas link */
.site-nav a:hover {
  color: #4F46E5;
}

/* :focus pas link menerima fokus keyboard */
.site-nav a:focus {
  outline: 2px solid #4F46E5;
}

/* Anak pertama pada daftar menu */
.menu-list li:first-child {
  font-weight: 600;
  color: #1E293B;
}

/* Anak terakhir pada daftar menu diberi warna perhatian */
.menu-list li:last-child {
  color: #DC2626;
}

/* Baris ganjil pada isi tabel diberi latar lembut */
.statistik-table tbody tr:nth-child(odd) {
  background-color: #F8FAFC;
}
```

Penjelasan: setiap *pseudo-class* di sini benar-benar berguna buat pengguna. `:hover` pada `.site-nav a` memberi umpan balik langsung bahwa link itu aktif; tanpa perubahan tampilan, orang bisa ragu apakah linknya bisa diklik. `:focus` menggambar kotak indigo pas pengguna menyusuri halaman dengan Tab — gaya fokus nggak boleh dihapus begitu saja karena itulah pengganti kursor buat pengguna keyboard. `:first-child` dan `:last-child` membantu kamu menghindari penambahan *class* khusus pada butir pertama atau terakhir yang bisa "rusak" pas isi daftar berubah. `:nth-child(odd)` membuat latar selang-seling pada tabel statistik; satu baris CSS bisa menggantikan class tambahan di setiap baris HTML. Perhatikan juga bahwa nggak ada atribut kejadian di HTML — semua keadaan itu ditangani oleh CSS.

### 3.5 Properti Inti Visual

Empat properti menjadi fondasi warna dan tepi pada bab ini: `color`, `background-color`, `border`, dan `opacity`.

**`color`** menetapkan warna "tinta" — teks dan dekorasi garis pada elemen. Nilainya bisa kode heksadesimal (`#4F46E5`), kata kunci (`red`), atau fungsi warna kayak `rgb(79, 70, 229)`. Proyek ini konsisten memakai heksadesimal enam digit karena inilah format yang kelak dipakai oleh design token pada Bab 4. **`background-color`** memberi warna latar kotak elemen; latar nggak diwariskan ke anak, kayak yang akan kamu lihat di subbab 3.7. **`border`** adalah singkatan ( shorthand) yang menetapkan tiga hal sekaligus: tebal (`1px`), gaya (`solid`, `dashed`, atau `dotted`), dan warna. Kebanyakan tepi halaman Tokosaya — garis di bawah header, tepi kartu — memanfaatkan pola ini. **`opacity`** menerima nilai antara 0 dan 1; 0,9 sedikit memudarkan seluruh elemen beserta isinya, sesuatu yang berguna buat keadaan nonaktif.

Satu catatan penting: warna bukan sekadar soal selera, tetapi juga soal keterbacaan. Teks gelap pada latar hampir putih (#334155 di atas #F8FAFC) nyaman dibaca; teks terang di atas latar terang nggak. Soal kontras ini akan dibahas lebih resmi di Bab 4 dan dikaitkan dengan standar WCAG di Bab 13. Buat Bab 3, pegang dulu kebiasaan sederhananya: jangan memasangkan warna hanya karena "menurut kamu bedanya udah cukup".

```html
File: latihan-css/properti-inti/index.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contoh Properti Inti Visual</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <main>
    <h1>Status Produk yang Anda Tandai</h1>
    <p class="lead">Dua badge status memakai latar, tepi, dan tinta berbeda.</p>
    <p>
      <span class="badge-tersedia">Tersedia</span>
      <span class="badge-laris">Best Seller</span>
    </p>
    <p>Keyboard Mekanis KX-210 termasuk produk bertanda Best Seller.</p>
  </main>
</body>
</html>
```

```css
File: latihan-css/properti-inti/css/style.css
h1 {
  color: #1E293B;
}

.lead {
  color: #334155;
}

.badge-tersedia {
  color: #FFFFFF;
  background-color: #16A34A;
  border: 1px solid #E2E8F0;
}

.badge-laris {
  color: #1E293B;
  background-color: #F59E0B;
  border: 1px solid #E2E8F0;
  opacity: 0.95;
}
```

Penjelasan: dua *span* dengan class berbeda ini mewakili dua status katalog Tokosaya — "Tersedia" (hijau #16A34A, warna semantik sukses) dan "Best Seller" (amber #F59E0B, warna sorotan). `badge-tersedia` memakai teks putih di atas latar hijau, sedangkan `badge-laris` memakai teks gelap #1E293B di atas amber karena kontrasnya lebih nyaman dibaca. `border` dengan garis tipis 1px #E2E8F0 memberi batas lembut tanpa terasa berlebihan. `opacity: 0.95` pada badge kedua menunjukkan bahwa properti itu bekerja: elemennya hampir penuh, tetapi sedikit pudar. Nanti di Bab 5, *padding* akan membuat badge ini benar-benar terasa kayak kapsul; di Bab 4, tampilannya akan dibuat lebih halus lagi dengan *border-radius*.

### 3.6 Satuan CSS

CSS punya banyak satuan, dan memilihnya adalah keputusan desain, bukan sekadar urusan sintaks. Lima kelompok berikut dipakai sepanjang buku ini:

- **`px`** (piksel CSS): satuan tetap. Nggak terpengaruh ukuran font pengaturan pengguna; tepat buat garis tepi, bayangan, dan jarak kecil yang ingin stabil.
- **`%`** (persen): relatif terhadap kotak induknya. `width: 90%` berarti 90% lebar kotak induk — dasar dari pola konten yang fleksibel sebelum layout penuh dibahas Bab 7.
- **`em`**: relatif terhadap ukuran font elemen itu sendiri (atau induknya, kalau dipakai buat `font-size`). Berguna pas jarak harus ikut menskala bersama huruf, tetapi berhati-hatilah: nilai `em` yang bersarang bisa menumpuk dan mengejutkan.
- **`rem`** (root em): relatif terhadap `font-size` elemen akar (`html`), yang lazimnya 16px. `1rem = 16px`, `2rem = 32px`. Rem adalah pilihan unggulan buat `font-size` karena mengikuti pengaturan font bawaan browser pengguna (misal pengguna memperbesar font dasar) — aspek aksesibilitas yang berulang kali muncul di bab-bab berikutnya.
- **`vw` dan `vh`**: 1/100 dari lebar/tinggi *viewport* (area pandang browser). `min-height: 60vh` menjadikan banner tingginya sekurang-kurangnya 60% layar; pemakaian penuhnya menyusul pas membahas halaman responsif.

| Website penggunaan | Satuan disarankan | Alasan singkat |
|---|---|---|
| Ukuran font teks | `rem` | mengikuti pengaturan pengguna, ramah aksesibilitas |
| Jarak internal kecil | `px` atau `em` | tetap, mudah difiksasi terhadap desain |
| Lebar blok konten | `%` | mengikuti lebar layar, dasar halaman elastis |
| Tinggi banner/hero | `vh` | mengikuti tinggi layar, memenuhi kesan penuh |
| Ketebalan garis | `px` | nilai kecil stabil lintas satuan |

```css
File: latihan-css/satuan-css/css/style.css
/* px: nilai tetap, cocok buat garis dan nilai kecil yang stabil */
.hero-title {
  font-size: 40px;
}

/* rem: berpatokan pada ukuran font elemen akar */
.section-title {
  font-size: 1.75rem;
}

/* em: berpatokan pada ukuran font elemen itu sendiri */
.catatan {
  padding-left: 2em;
}

/* persen: mengikuti lebar kotak induk */
.content-wrap {
  width: 90%;
}

/* vw dan vh: mengikuti lebar serta tinggi viewport */
.hero-banner {
  min-height: 60vh;
}
```

Penjelasan: setiap aturan di atas menunjukkan satu satuan pada kasus yang paling khas. `40px` pada judul hero terasa mantap di komputer, tetapi `1.75rem` pada judul bagian lebih ramah karena kalau pengguna memperbesar font dasar browser, judul ikut membesar secara proporsional. `padding-left: 2em` membuat jarak kiri `catatan` ikut bergerak sesuai besar huruf yang berlaku pas itu. `width: 90%` menjaga blok konten nggak menempel ke tepi layar sempit dan juga nggak melebar liar di layar lebar. `min-height: 60vh` memberi ruang napas pada banner tanpa mengunci tinggi secara mutlak. Kebiasaan yang disarankan di proyek Tokosaya: huruf memakai `rem`, lebar memakai `%`, tebal garis memakai `px`, dan skala jarak nanti dirapikan lagi dengan basis 8px di Bab 4 lewat design token.

### 3.7 Kaskade, Inheritance, dan Specificity

Tiga mekanisme bekerja bersama buat menentukan gaya akhir setiap elemen: **kaskade** (*cascade*), **inheritance** (pewarisan), dan **specificity** (kekhususan). Memahami ketiganya adalah inti bab ini. Dalam praktiknya, CSS yang terasa "berantakan" biasanya bukan karena properti yang ditulis salah, tetapi karena kaskadenya belum benar-benar dipahami.

**Kaskade** adalah cara browser memutuskan pemenang kalau lebih dari satu aturan memberi nilai berbeda buat properti yang sama pada elemen yang sama. Bayangkan pemilihan seragam di sekolah. Ada **kebijakan pemerintah** (gaya bawaan browser, atau *user-agent stylesheet* — link biru bergaris, font *serif*, tanpa gaya apa pun dari kita), lalu ada **aturan sekolah** (file `style.css` yang kita tulis — inilah lapisan yang bisa kita kendalikan). Pas dua aturan sekolah bertabrakan, browser melihat dua hal: **seberapa khusus aturannya** dan, kalau tingkat kekhususannya sama, **siapa yang ditulis paling akhir**. `!important` bisa dibayangkan kayak surat keputusan terakhir yang memotong antrean — sah, tetapi bikin aturan berikutnya makin susah diatur, jadi pakailah hanya kalau darurat.

Alur keputusan kaskade secara ringkas:

```
  1. Kumpulkan semua aturan yang menyasar elemen.
  2. Saring berdasar asal: user-agent < aturan yang kita tulis.
  3. Urutkan dengan specificity: inline > id > class > elemen.
  4. Bila semuanya setara, aturan yang ditulis paling akhir menang.
```

**Specificity** dinilai sebagai pasangan tiga angka `(id, class, elemen)` — sering ditulis `(1,2,3)`: jumlah *ID selector*, jumlah *class* dan *pseudo-class*, jumlah tipe elemen. Aturan dengan angka id lebih besar selalu menang; kalau id setara, jumlah class menentukan; kalau itu setara pula, jumlah elemen menentukan; kalau seluruhnya setara, aturan terakhir dalam urutan penulisan yang menang. Tabel berikut merangkum gradasinya, termasuk gaya inline:

| Bentuk aturan | Contoh selector | Specificity | Kekuatan |
|---|---|---|---|
| Selector elemen | `p` | (0, 0, 1) | paling lemah |
| Selector class atau *pseudo-class* | `.note`, `:hover` | (0, 1, 0) | menang atas elemen |
| Elemen + class | `p.note` | (0, 1, 1) | menang atas `.note` |
| Selector ID | `#pengumuman` | (1, 0, 0) | menang atas segala class |
| Kombinasi id, class, elemen | `p#pengumuman.note` | (1, 1, 1) | menang atas `#pengumuman` |
| Gaya inline | `style="color: #DC2626"` | tertinggi (di atas id) | menang atas semua di atas |
| `!important` | `color: #4F46E5 !important` | melompati tingkat | darurat, hindari kebiasaan |

**Inheritance** hanya berlaku pada properti tertentu. `color`, `font-family`, `line-height`, dan sebagian besar properti teks akan mewarisi nilai dari elemen induk ke elemen anak — mirip kayak warna mata yang diwariskan dari orang tua. Itulah sebabnya menetapkan `color` pada `body` udah cukup buat memberi warna default ke hampir seluruh teks halaman. Sebaliknya, properti kotak kayak `border`, `padding`, `margin`, dan `background-color` **nggak diwariskan**. Kalau sampai diwariskan, setiap elemen anak akan ikut menyalin tepi dan latar induknya, dan hasilnya justru berantakan.

```css
File: latihan-css/kaskade-demo/css/style.css
/* Aturan 1: hanya menyasar elemen p, specificity (0, 0, 1) */
p {
  color: #334155;
}

/* Aturan 2: class menang atas selector elemen, (0, 1, 0) */
.note {
  color: #F59E0B;
}

/* Aturan 3: id menang atas class, (1, 0, 0) */
#pengurusan {
  color: #4F46E5;
}

/* Aturan 4: kombinasi id, class, dan elemen paling spesifik, (1, 1, 1) */
p#pengurusan.note {
  color: #16A34A;
}

/* Aturan 5: id penutup. Di HTML, paragraf ini malah diberi gaya inline
   sehingga warna merah inline mengalahkan warna hijau id ini */
#penutup {
  color: #16A34A;
}
```

```html
File: latihan-css/kaskade-demo/index.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Laboratorium Kaskade</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <p>Status server perpustakaan kembali normal.</p>
  <p class="note">Antrean sirkulasi dipindah ke pintu timur.</p>
  <p id="pengurusan" class="note">Uji sirkulasi dipindah ke aula tengah.</p>
  <p id="penutup" style="color: #DC2626;">Kurir terakhir berangkat pukul 16.00.</p>
</body>
</html>
```

Penjelasan: paragraf pertama hanya terkena Aturan 1, jadi warnanya slate. Paragraf kedua punya class `note`, sehingga Aturan 2 (0,1,0) mengalahkan Aturan 1 (0,0,1) dan menghasilkan warna amber. Paragraf ketiga cocok dengan Aturan 3 dan 4 sekaligus; karena `p#pengurusan.note` (1,1,1) lebih spesifik daripada `#pengurusan` (1,0,0), warna hijau yang menang. Paragraf keempat sengaja dibuat menarik: atribut `style` — **khusus demonstrasi** — punya specificity tertinggi dan memaksa warna merah walau ada aturan id yang memberi warna hijau. Empat warna, empat aturan kaskade, dan semuanya bisa kamu telusuri satu per satu di panel Styles DevTools.

Ada beberapa kesalahan umum di sekitar kaskade yang sebaiknya kamu waspadai sejak awal. Pertama, memakai `!important` buat menyelesaikan semua konflik. Sekali dipakai, konflik berikutnya biasanya harus dilawan dengan `!important` lain yang lebih spesifik, dan file CSS jadi makin sulit dipercaya. Kedua, menulis selector terlalu panjang kayak `#navigasi ul li a.tautan` padahal `.nav-link` udah cukup; specificity yang terlalu tinggi bikin aturan susah diganti nanti. Ketiga, menyebarkan aturan serupa ke banyak file sehingga pemenang kaskade makin sulit ditebak. Keempat, menaruh gaya inline di HTML produksi sehingga gayanya nggak terlihat jelas di `style.css` dan susah diaudit. Kebiasaan yang lebih aman sederhana saja: satu file gaya, selector spesifik seperlunya, dan biarkan kaskade bekerja sebagaimana mestinya.

### 3.8 Mengorganisasi style.css

File CSS yang baik nggak hanya dibaca browser — ia dibaca anggota tim berikutnya, termasuk kamu enam bulan dari sekarang. Struktur yang disarankan buat proyek Tokosaya:

1. **Komentar kepala file**: nama proyek, versi, ringkasan urutan bagian.
2. **Dasar halaman**: aturan buat `body` — font dasar, warna teks, latar.
3. **Tipografi dasar**: aturan `h1–h3`, paragraf, link.
4. **Bagian halaman berurutan**: header dan navigasi, lalu setiap bagian `main` sesuai urutan kemunculannya, diakhiri footer.
5. **Utilitas kecil**: *class* serbaguna kayak `text-center`.

Susunan ini penting karena tiga alasan. Pertama, urutan penulisan adalah bagian dari aturan kaskade; menaruh gaya global di awal dan gaya khusus di akhir membuat konflik dengan specificity serupa lebih mudah diprediksi. Kedua, komentar pemisah membantu anggota tim baru menemukan bagian yang dicari dengan cepat (apalagi banyak editor mendukung navigasi berbasis komentar). Ketiga, nama *class* yang konsisten dengan pola `blok-elemen` membuat HTML dan CSS saling menunjuk tanpa perlu banyak dokumentasi tambahan. Dua kebiasaan lain yang juga membantu banget: hindari duplikasi (dua aturan identik di dua tempat hanya menunggu jadi konflik kaskade), dan usahakan satu properti punya satu tempat utama yang jelas.

```css
File: tokosaya-css/css/style.css
/* =====================================================================
   Tokosaya style.css — v1 (Bab 3)
   Urutan bagian: dasar halaman, tipografi, link, header dan navigasi,
   hero, bagian konten, footer, utilitas.
   Font Poppins/Inter dan design token menyusul pada Bab 4.
   ===================================================================== */

/* ---------- Dasar halaman ---------- */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  color: #334155;
  background-color: #F8FAFC;
}

/* ---------- Tipografi dan link ---------- */
h1, h2, h3 {
  color: #1E293B;
}

a {
  color: #4F46E5;
}

/* ---------- Header dan navigasi ---------- */
.site-header {
  background-color: #FFFFFF;
}

/* ---------- Hero ---------- */
.hero {
  background-color: #FFFFFF;
}

/* ---------- Bagian konten ---------- */
.nilai-section {
  background-color: #FFFFFF;
}

/* ---------- Footer ---------- */
.site-footer {
  border-top: 1px solid #E2E8F0;
}

/* ---------- Utilitas ---------- */
.text-center {
  text-align: center;
}
```

Penjelasan: kerangka di atas adalah peta ringkas organisasi `style.css`. Blok komentar banner dengan garis tanda sama membuat tiap bagian mudah terlihat di ikhtisar editor. Urutan bagiannya mengikuti anatomi halaman (dasar, lalu header, lalu isi, lalu footer), bukan urutan "apa yang kepikiran duluan" — dan itulah yang membuat file tetap mudah dinavigasi pas aturannya nanti makin banyak. `text-center` dipakai sebagai satu-satunya utilitas karena sifatnya kecil, umum, dan nggak mengganggu struktur utama. Di Bab 4–7 file ini akan tumbuh buat menampung token warna, layout kartu, dan media query. Justru karena itu, disiplin organisasi perlu dibiasakan sejak aturan pertama.

## Konsep Penting

| Konsep | Ringkasan |
|---|---|
| Blok aturan (rule) | selector + blok deklarasi; satuan terkecil CSS. |
| Declaration | pasangan `properti: nilai;` di dalam blok deklarasi. |
| Element selector | menyasar semua elemen tipe tertentu; specificity (0, 0, 1). |
| Class selector | titik + nama (`.hero-title`); reusable; pola `blok-elemen` kebab-case. |
| ID selector | pagar + nama (`#pengantar`); unik per halaman; gunakan hemat. |
| Pseudo-class | keadaan elemen: `:hover`, `:focus`, `:first-child`, `:last-child`, `:nth-child()`. |
| Properti inti visual | `color`, `background-color`, `border`, `opacity`. |
| Satuan CSS | font diukur `rem`, lebar `%`, garis `px`, tinggi area `vh`. |
| Kaskade | algoritma pemilih pemenang: asal → specificity → urutan penulisan. |
| Specificity | pasangan (id, class, elemen); inline paling atas; `!important` hanya darurat. |
| Inheritance | `color`, `font-family` diwariskan; `border`, `padding` nggak. |
| External CSS | default proyek: satu `style.css` dipakai seluruh halaman. |
| Inline/internal CSS | hanya buat demonstrasi konsep dan eksperimen satu halaman. |
| Organisasi style.css | komentar banner, urutan konsisten, penamaan `blok-elemen`. |

## Contoh Kode

Dua contoh berikut melatih pola inti bab ini dalam konteks sistem informasi yang berbeda dari Tokosaya, supaya pola selector dan kaskade terasa sebagai kebiasaan umum, bukan cuma milik satu proyek. Contoh pertama adalah halaman pengumuman ujian program studi; contoh kedua adalah "laboratorium" kecil yang memang dibuat untuk mengamati kaskade bekerja.

**Contoh 1 — halaman pengumuman ujian.** Halaman ini pakai spektrum selector lengkap: elemen, class, ID, descendant, grouping, dan *pseudo-class* pada link serta baris tabel.

```html
File: contoh-bab-03/pengumuman/index.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pengumuman Ujian — Program Studi Sistem Informasi</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <p class="site-brand">Program Studi Sistem Informasi</p>
    <nav class="site-nav" aria-label="Navigasi pengumuman">
      <a href="#jadwal">Jadwal</a>
      <a href="#peraturan">Peraturan</a>
      <a href="#kontak">Kontak</a>
    </nav>
  </header>
  <main>
    <section class="intro-section">
      <h1>Pengumuman Ujian Tengah Semester 2026</h1>
      <p class="lead">Bacalah jadwal berikut sebelum hari ujian pertama Anda.</p>
    </section>
    <section id="jadwal">
      <h2>Jadwal Ujian</h2>
      <table class="tabel-jadwal">
        <thead>
          <tr>
            <th>Mata Kuliah</th>
            <th>Tanggal</th>
            <th>Ruang</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Analisis dan Perancangan Sistem</td>
            <td>20 April 2026</td>
            <td>R-201</td>
          </tr>
          <tr>
            <td>Basis Data</td>
            <td>22 April 2026</td>
            <td>R-103</td>
          </tr>
          <tr>
            <td>Frontend Development</td>
            <td>24 April 2026</td>
            <td>R-305</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section id="peraturan">
      <h2>Peraturan Singkat</h2>
      <ul class="aturan-list">
        <li>Hadir 15 menit sebelum ujian dimulai.</li>
        <li>Berhenti menulis segera saat aba-aba dikumandangkan.</li>
        <li>Barang yang tidak dipakai diletakkan di meja depan.</li>
      </ul>
    </section>
    <section id="kontak">
      <h2>Narasiswa</h2>
      <p>Silakan hubungi sekretariat melalui <a href="mailto:sia@kampus.id">sia@kampus.id</a>.</p>
    </section>
  </main>
  <footer class="site-footer">
    <p>Sekretariat Program Studi Sistem Informasi.</p>
  </footer>
</body>
</html>
```

```css
File: contoh-bab-03/pengumuman/css/style.css
/* Dasar halaman */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  line-height: 1.6;
  color: #334155;
  background-color: #F8FAFC;
}

/* Tipografi dan link */
h1, h2 {
  color: #1E293B;
}

a {
  color: #4F46E5;
}

a:hover {
  text-decoration: underline;
}

/* Header dan navigasi */
.site-header {
  background-color: #FFFFFF;
  padding: 16px 24px;
  border-bottom: 1px solid #E2E8F0;
}

.site-brand {
  font-weight: 700;
  color: #1E293B;
  margin: 0 0 8px;
}

.site-nav a {
  margin-right: 16px;
  text-decoration: none;
}

.site-nav a:hover {
  color: #4F46E5;
}

.site-nav a:focus {
  outline: 2px solid #4F46E5;
}

/* Bagian halaman menggunakan id sebagai penanda area */
.intro-section, #jadwal, #peraturan, #kontak {
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  margin: 16px 24px;
  padding: 24px;
}

/* Tabel jadwal dengan baris silih ganti */
.tabel-jadwal {
  border-collapse: collapse;
  width: 100%;
}

.tabel-jadwal th, .tabel-jadwal td {
  border: 1px solid #E2E8F0;
  padding: 8px;
  text-align: left;
}

.tabel-jadwal tbody tr:nth-child(odd) {
  background-color: #F8FAFC;
}

/* Butir pertama daftar aturan diberi penekanan */
.aturan-list li:first-child {
  font-weight: 600;
  color: #1E293B;
}

/* Footer */
.site-footer {
  padding: 24px;
  font-size: 0.875rem;
  border-top: 1px solid #E2E8F0;
}
```

Penjelasan: halaman ini nyambungin teori sama praktik. `.lead` bedain paragraf pembuka pakai satu *class* yang cuma dipakai sekali. `#jadwal`, `#peraturan`, dan `#kontak` dikasih gaya berkelompok lewat grouping berisi selector ID. `:hover` dan `:focus` di navigasi nunjukin bahwa umpan balik interaktif nggak butuh JavaScript. Yang menarik: `.tabel-jadwal th, .tabel-jadwal td` itu *descendant + grouping* sekaligus, dan satu baris `:nth-child(odd)` ngasih lapisan visual ke tabel tanpa nyentuh HTML sama sekali.

**Contoh 2 — laboratorium specificity.** Halaman ini sengaja nata tiga paragraf dengan aturan yang berkonflik, biar efek kaskade bisa kamu amati langsung di browser.

```html
File: contoh-bab-03/lab-spesifisitas/index.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Laboratorium Specificity</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <main>
    <p class="pesan">Antrean konsultasi akademik dibuka setiap Kamis.</p>
    <p class="pesan" id="pesan-kampus">Anggaran laboratorium komputer naik pada 2026.</p>
    <p class="pesan" id="pesan-lab" style="color: #DC2626;">Salinan katalog baru turun pada Desember 2026.</p>
  </main>
</body>
</html>
```

Gaya inline di paragraf ketiga — **khusus demonstrasi** — sengaja dipasang buat nunjukin posisi gaya inline di puncak specificity. Ini bukan pola yang disaranin buat proyek.

```css
File: contoh-bab-03/lab-spesifisitas/css/style.css
/* Aturan 1: elemen p. Specificity (0, 0, 1) */
p {
  color: #334155;
}

/* Aturan 2: class pesan. (0, 1, 0) menang atas Aturan 1 */
.pesan {
  color: #F59E0B;
}

/* Aturan 3: id pesan-kampus. (1, 0, 0) menang atas Aturan 2 */
#pesan-kampus {
  color: #4F46E5;
}

/* Aturan 4: id pesan-lab. (1, 0, 0); kalah dari gaya inline
   pada paragraf ketiga karena inline berada di atas id */
#pesan-lab {
  color: #4F46E5;
}
```

Penjelasan: paragraf pertama berwarna amber karena class ngalahin elemen. Paragraf kedua berwarna indigo karena id ngalahin class. Paragraf ketiga, walaupun punya id dengan warna indigo, tetap tampil merah karena gaya inline menang atas semua selector. Teks komentarnya sengaja dibikin buat bantu kamu ngitung specificity pas meriksa panel Styles di DevTools.

## Penjelasan Kode

**Contoh 1 (halaman pengumuman).** Struktur CSS mengikuti pola organisasi 3.8 mulai dari dasar halaman hingga footer, jadi pembahasannya bergerak dari yang umum ke yang lebih khusus. Element selector `body` menetapkan font dasar dan warna global; grouping `h1, h2` mengatur warna judul sekali saja — ini efisien karena kalau warna judul berubah, kamu cukup mengedit satu tempat. Ada tiga teknik yang layak disorot. Pertama, `.site-nav a` adalah *descendant selector*: garis bawah link dihapus (`text-decoration: none`) hanya di navigasi, sementara link di isi tetap bergaris bawah — keputusan kecil yang penting buat keterbacaan dan aksesibilitas karena teks link tetap mudah dibedakan dari teks biasa. Kedua, `:nth-child(odd)` memberi latar lembut pada baris tabel ganjil biar mata lebih mudah mengikuti baris pas tabel melebar. Ketiga, `a:focus { outline: 2px solid #4F46E5; }` memastikan pengguna keyboard tetap tahu posisi fokusnya; outline dibiarkan terlihat, bukan dihapus, karena menghapusnya tanpa pengganti akan merugikan pengguna keyboard.

**Contoh 2 (laboratorium specificity).** File CSS ini sengaja "berkonflik": satu elemen `p` ditangkap dua atau tiga aturan dengan tingkat kekhususan berbeda. Nilai utamanya bukan pada tampilannya, tapi pada latihan membaca *panel Styles*: buka DevTools (F12), pilih elemennya, lalu browser akan menampilkan daftar aturan sesuai urutan kaskade, lengkap dengan label *user agent stylesheet* pada aturan bawaannya. Di situ kamu bisa melihat langsung kenapa id menggantikan class, dan kenapa satu atribut `style` bisa mengalahkan semuanya. Coba juga eksperimen kecil ini: ubah urutan aturan di file CSS dan amati bahwa hasilnya nggak selalu berubah (karena specificity masih menentukan pemenang), lalu tukar dua aturan yang setara spesifikasinya dan lihat gimana pemenangnya ikut berpindah.

## Praktikum

### Tujuan Praktikum

Praktikum ini menghasilkan `css/style.css` v1 buat company profile Tokosaya: file gaya eksternal pertama yang menyetel font dasar, warna brand, gaya link, dan arsitektur heading. Praktikum melatih seluruh materi bab — selector, *pseudo-class*, properti visual — dalam konteks proyek yang akan dipakai hingga Bab 8.

### Kebutuhan

- Visual Studio Code (atau editor teks lain).
- Google Chrome dengan DevTools.
- Folder proyek `tokosaya-css/` berisi `index.html` dan `tentang.html` dari Bab 2.
- Pemahaman struktur elemen semantik dari Bab 2.

### Persiapan

1. Buka folder `tokosaya-css/` di Visual Studio Code. Struktur yang diharapkan: `index.html`, `tentang.html`, dan folder kosong yang akan kamu isi.
2. Buat folder baru bernama `css`, lalu di dalamnya buat file `style.css`.
3. Buka `index.html` dari Bab 2. Pada praktikum ini kamu akan menambahkan atribut *class* pada elemen-elemen utama sebagai "kail" (hook) gaya; nama class mengikuti pola `blok-elemen` kebab-case.
4. Pastikan `index.html` memuat `<meta name="viewport">` dan `<link rel="stylesheet" href="css/style.css">` di dalam `head`; tambahkan `<link>` yang sama pada `tentang.html` biar kedua halaman berbagi gaya.

### Langkah Kerja

1. Buka `index.html`, tambahkan `class="site-header"` pada `header`, `class="brand"` pada teks brand, dan `class="site-nav"` pada `nav`.
2. Beri `class="hero"`, `class="hero-title"`, `class="hero-subtitle"`, dan `class="btn-cta"` pada bagian hero dan tombol katalognya.
3. Beri `class="nilai-section"` dan `class="nilai-item"` pada bagian keunggulan, serta `class="kontak-section"` pada bagian kontak.
4. Beri `class="site-footer"` pada `footer`.
5. Di `css/style.css`, tulis banner komentar kepala file beserta aturan `body` (font dasar, warna teks #334155, latar #F8FAFC).
6. Tambahkan aturan heading: `h1, h2, h3` berwarna #1E293B dengan ukuran bertingkat (h1 2.25rem, h2 1.75rem, h3 1.25rem).
7. Setel gaya link: warna indigo #4F46E5, `:hover` menuju indigo gelap #4338CA, dan `:focus` dengan outline indigo.
8. Gaya `site-header`, `brand`, dan `site-nav`: latar putih, garis tepi bawah #E2E8F0, link navigasi tanpa garis bawah hingga di-*hover*.
9. Gaya `hero`, `hero-title`, `hero-subtitle`, dan `btn-cta` (tombol indigo berteks putih; `:hover` berubah indigo gelap).
10. Gaya sisa bagian (nilai, kontak, footer) dengan jarak dan latar sesuai tabel keputusan di bawah.
11. Simpan kedua file, lalu muat ulang `index.html` di Chrome dan bandingkan tampilan sebelum-sesudah.
12. Buka DevTools, pilih judul hero, dan amati panel Styles: catat aturan mana yang berlaku dan urutannya.

### Kode

Dua file berikut adalah hasil utuh praktikum. `index.html` berada di root proyek; gayanya di `css/style.css`. Navigasi ke `katalog.html` dan `kontak.html` sengaja memakai link kosong `href="#"` karena kedua halaman itu baru lahir pada bab-bab berikutnya.

```html
File: tokosaya-css/index.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tokosaya — Belanja Tepat, Kirim Cepat</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <p class="brand">Tokosaya</p>
    <nav class="site-nav" aria-label="Navigasi utama">
      <a href="index.html">Beranda</a>
      <a href="katalog.html">Katalog</a>
      <a href="tentang.html">Tentang</a>
      <a href="kontak.html">Kontak</a>
      <a href="#" class="nav-cart">Keranjang</a>
    </nav>
  </header>
  <main>
    <section class="hero">
      <h1 class="hero-title">Peralatan Kerja Digital untuk Semua</h1>
      <p class="hero-subtitle">Keyboard, mouse, hingga monitor — pilih perangkat kerja Anda dengan harga UMKM yang jujur.</p>
      <a href="#" class="btn-cta">Lihat Katalog</a>
    </section>
    <section class="nilai-section">
      <h2>Mengapa Belanja di Tokosaya</h2>
      <article class="nilai-item">
        <h3>Harga Jujur</h3>
        <p>Setiap produk tampil dengan harga akhir, tanpa biaya tersembunyi di tahap pembayaran.</p>
      </article>
      <article class="nilai-item">
        <h3>Layanan Cepat</h3>
        <p>Pesanan sebelum pukul 15.00 dikemas dan diserahkan ke kurir pada hari itu juga.</p>
      </article>
      <article class="nilai-item">
        <h3>Dukungan Ramah</h3>
        <p>Tim layanan membantu memilih perangkat kerja yang sesuai anggaran dan kebutuhan.</p>
      </article>
    </section>
    <section class="kontak-section">
      <h2>Hubungi Kami</h2>
      <p>Jl. Digital Raya No. 10, Jakarta.</p>
      <p><a href="mailto:halo@tokosaya.id">halo@tokosaya.id</a></p>
      <p>(021) 555-0199</p>
    </section>
  </main>
  <footer class="site-footer">
    <p>Tokosaya — toko aksesori &amp; elektronik komputer sejak 2019. Belanja Tepat, Kirim Cepat.</p>
  </footer>
</body>
</html>
```

Penjelasan singkat: struktur `index.html` dari Bab 2 sekarang udah diberi kail style: lima class pada bagian identitas (header, brand, nav), empat class pada hero, dan satu class buat tiap bagian konten. Perhatikan `href="#"` pada Katalog, Kontak, dan tombol CTA — halaman tujuannya memang belum dibuat; ini hanya link sementara, bukan bagian dari pembahasan gaya.

```css
File: tokosaya-css/css/style.css
/* =====================================================================
   Tokosaya style.css — v1 (Bab 3)
   Isu inti: font dasar, warna, link, heading.
   Font Poppins/Inter dan design token menyusul pada Bab 4.
   ===================================================================== */

/* ---------- Dasar halaman ---------- */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  color: #334155;
  background-color: #F8FAFC;
  line-height: 1.6;
}

/* ---------- Heading ---------- */
h1, h2, h3 {
  color: #1E293B;
  line-height: 1.25;
  margin: 0 0 16px;
}

h1 {
  font-size: 2.25rem;
}

h2 {
  font-size: 1.75rem;
}

h3 {
  font-size: 1.25rem;
}

/* ---------- Link global ---------- */
a {
  color: #4F46E5;
  text-decoration: underline;
}

a:hover {
  color: #4338CA;
}

a:focus {
  outline: 2px solid #4F46E5;
  outline-offset: 2px;
}

/* ---------- Header dan navigasi ---------- */
.site-header {
  background-color: #FFFFFF;
  border-bottom: 1px solid #E2E8F0;
  padding: 16px 24px;
}

.brand {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1E293B;
  margin: 0 0 8px;
}

.site-nav a {
  color: #1E293B;
  text-decoration: none;
  margin-right: 16px;
}

.site-nav a:hover {
  color: #4F46E5;
}

/* ---------- Hero ---------- */
.hero {
  background-color: #FFFFFF;
  border-bottom: 1px solid #E2E8F0;
  padding: 48px 24px;
}

.hero-title {
  font-size: 2.5rem;
}

.hero-subtitle {
  font-size: 1.125rem;
  max-width: 640px;
}

.btn-cta {
  /* display: inline-block menjadikan tombol menghargai padding;
     pembahasan penuh properti display pada Bab 5 */
  display: inline-block;
  background-color: #4F46E5;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 24px;
}

.btn-cta:hover {
  background-color: #4338CA;
  color: #FFFFFF;
  text-decoration: none;
}

/* ---------- Bagian nilai Tokosaya ---------- */
.nilai-section {
  background-color: #FFFFFF;
  padding: 32px 24px;
  border-bottom: 1px solid #E2E8F0;
}

.nilai-item {
  margin: 0 0 24px;
}

/* ---------- Bagian kontak ---------- */
.kontak-section {
  padding: 32px 24px;
}

/* ---------- Footer ---------- */
.site-footer {
  background-color: #FFFFFF;
  border-top: 1px solid #E2E8F0;
  padding: 24px;
  font-size: 0.875rem;
  color: #334155;
}
```

Penjelasan singkat: `style.css` v1 masih memakai warna hex Tokosaya secara langsung (indigo #4F46E5 buat link dan tombol, slate buat teks, dan garis #E2E8F0 sebagai pemisah halus) karena design token baru dibahas di Bab 4. Perhatikan juga bahwa urutan bagiannya mengikuti anatomi halaman, lengkap dengan komentar banner pada tiap blok.

### Penjelasan Kode

File `index.html` menerapkan prinsip "HTML membawa identitas, CSS membawa keputusan": nama class `hero-title` dan `btn-cta` menunjukkan peran elemen, bukan warna atau bentuknya, jadi kalau Tokosaya nanti mengganti warna, HTML nggak perlu ikut berubah. Gaya link diatur dalam dua lapis: aturan global `a` memberi warna indigo dan garis bawah biar link tetap jelas terlihat, lalu `.site-nav a` menghapus garis bawah khusus di navigasi karena bagian itu udah punya tampilan sendiri. Ini contoh kaskade yang rapi — id nggak dipakai, class udah cukup. Tombol `btn-cta` berupa `<a>` dengan latar indigo; `:hover` membuat warnanya lebih gelap (#4338CA) sebagai umpan balik interaktif, dan `:focus` global memastikan pengguna keyboard tetap tahu link mana yang sedang tersorot. `line-height: 1.6` pada `body` diwariskan ke seluruh teks sebagai contoh langsung *inheritance*, sedangkan `border-bottom` pada header hanya berlaku di header karena border memang nggak diwariskan.

### Hasil yang Diharapkan

Setelah praktikum, hasil berikut diharapkan teramati pada `index.html` di Chrome:

- Seluruh teks tampil sans-serif dengan jarak baris 1.6; heading tegas berwarna #1E293B dengan ukuran bertingkat (h1 36px, h2 28px, h3 20px pada setelan font dasar 16px).
- Latar halaman putih kebiruan #F8FAFC dengan panel putih pada header, hero, nilai, dan footer; garis pemisah #E2E8F0 menghubungkan panel-panel itu.
- Link berwarna indigo #4F46E5, mempergelap pas di-*hover*, dan menggambar kotak fokus indigo pas ditabrak tombol Tab.
- Tombol "Lihat Katalog" tampil sebagai blok indigo berteks putih; hover-nya mempergelap menjadi #4338CA.

Terukur: tampilan dimuat tanpa aset tambahan (satu file teks CSS), jumlah aturan gaya di `style.css` sekitar dua puluh, dan file yang sama ikut menata `tentang.html` karena kedua halaman menautkan `<link>` yang sama — tanpa duplikasi aturan di mana pun.

### Troubleshooting

**Masalah:** Halaman tampak persis sebelum praktikum; semua gaya CSS nggak terlihat.
**Penyebab:** Paling sering jalur `<link>` salah — misal file berada di `css/style.css` tetapi HTML menyebut `styles/style.css`, atau file diberi nama `style.css.txt` karena ekstensi tersembunyi di Windows.
**Solusi:** Buka DevTools, tab Console: cari error "Failed to load stylesheet" beserta URL yang diminta; betulkan atribut `href` hingga cocok dengan struktur folder, pastikan ekstensi benar `.css`.
**Pencegahan:** Biasakan membuat folder `css/` bersamaan dengan file `style.css` pada langkah persiapan, dan selalu periksa tab Network/Console setelah menautkan file gaya baru.

**Masalah:** Beberapa aturan berlaku, tetapi warna link tetap biru default browser.
**Penyebab:** Selector nggak benar-benar menjangkau elemen — salah ketik nama class di HTML atau CSS (misal `site-nav` vs `sitenav`), atau aturan yang lebih spesifik menang dalam kaskade.
**Solusi:** Klik link di halaman, buka panel Styles DevTools, dan lihat aturan mana yang tercoret mana yang berlaku; perbaiki pengejaan atau naikkan ketepatan selector (misal `.site-nav a`).
**Pencegahan:** Salin nama class antara HTML dan CSS, jangan ketik ulang; gunakan penamaan konsisten kebab-case biar perbedaan huruf nggak muncul.

**Masalah:** Perubahan warna nggak tampak padahal aturan jelas ditulis, lalu baru tampil setelah beberapa refresh.
**Penyebab:** Browser memakai versi lama `style.css` dari cache, atau file belum disimpan di editor pas halaman di-muat ulang.
**Solusi:** Hard refresh (Ctrl+F5 di Chrome) buat memaksa unduh ulang file gaya; pastikan titik tersimpan di editor (dot pada tab berubah hilang).
**Pencegahan:** Biasakan simpan lalu muat ulang; aktifkan "Disable cache" pada panel Network DevTools pas sedang menyunting gaya.

**Masalah:** `:hover` nggak berpengaruh pada link navigasi.
**Penyebab:** Ada aturan lain dengan specificity lebih tinggi (misal gaya inline yang tersisa dari eksperimen), atau *pseudo-class* ditulis dengan spasi salah sehingga menyasar hal lain: `a :hover` (dengan spasi) berarti "elemen apa pun di dalam a", bukan keadaan hover link itu.
**Solusi:** Tulis `:hover` tanpa spasi setelah elemen (`a:hover`), hapus gaya inline sisa eksperimen, dan gunakan panel Styles buat memeriksa aturan mana yang menang.
**Pencegahan:** Satu konvensi penulisan *pseudo-class* (menempel tanpa spasi) dan audit berkala pada HTML biar nggak ada gaya inline menunggu di tag.

## Studi Kasus

Sebuah dinas layanan publik perpustakaan dan administrasi wilayah punya halaman informasi jam layanan yang sering dibuka warga sebelum datang ke loket. Halaman ini dulu dibuat dengan cara yang pas itu terasa praktis: hampir setiap elemen diberi gaya **inline** — atribut `style` menempel pada `header`, `p`, bahkan tiap `li`. Warna header, ukuran huruf, sampai warna status tutup cepat semuanya ditulis langsung di HTML. Masalah baru terasa pas muncul tiga halaman serupa (jam layanan, biaya layanan, kelengkapan file). Pas warna identitas unit diganti dari biru ke warna yang lebih tegas, petugas harus menyalin ulang atribut `style` di puluhan tag; dua halaman ikut berubah, satu halaman tertinggal, dan jam layanan Jumat pun tampil dengan warna berbeda. Inilah biaya pemeliharaan yang sering nggak kelihatan di awal — persis kayak yang dibahas di 3.2 dan 3.7: gaya inline menang di kaskade, nggak bisa dipakai ulang, dan membuat struktur gaya sulit dibaca. Berikut potongan kondisi sebelum refactor (disajikan sebagai demonstrasi kondisi awal — gaya inline inilah yang nanti dihapus):

```html
File: kasus-bab-03/layanan-publik/versi-inline.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jam Layanan — Kantor Pelayanan Wilayah Timur</title>
</head>
<body>
  <header style="background-color: #1E293B; padding: 16px; color: #FFFFFF;">
    <h1 style="font-size: 28px; margin: 0; color: #FFFFFF;">Kantor Pelayanan Wilayah Timur</h1>
  </header>
  <main style="padding: 24px; font-family: Arial, sans-serif;">
    <h2 style="color: #1E293B;">Jam Layanan Pekan Ini</h2>
    <p style="color: #334155;">Layanan administrasi kependudukan melayani penduduk pada jam kerja.</p>
    <ul style="line-height: 1.7; color: #334155;">
      <li>Senin sampai Kamis: 08.00 sampai 16.00</li>
      <li style="color: #DC2626;">Jumat: 08.00 sampai 11.30</li>
      <li>Sabtu: 09.00 sampai 13.00</li>
    </ul>
    <p style="color: #16A34A;">Layanan mengikuti kalender resmi pada hari nasional.</p>
  </main>
</body>
</html>
```

Penjelasan: dalam kondisi kayak ini, setiap perubahan warna berarti kamu harus menyentuh atribut `style` satu per satu. Karena gaya inline menang atas CSS apa pun (specificity paling tinggi — lihat 3.7), memindahkan gaya halaman ke `style.css` tanpa menghapus atribut inline nggak akan mengubah apa-apa. Maka refactor harus dimulai dari audit: kelompokkan nilai gaya yang berulang, beri nama class sesuai perannya, pindahkan ke file eksternal, lalu kosongkan atribut `style`. Hasilnya kayak berikut.

```html
File: kasus-bab-03/layanan-publik/index.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jam Layanan — Kantor Pelayanan Wilayah Timur</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <h1 class="site-title">Kantor Pelayanan Wilayah Timur</h1>
  </header>
  <main class="page-content">
    <h2>Jam Layanan Pekan Ini</h2>
    <p>Layanan administrasi kependudukan melayani penduduk pada jam kerja.</p>
    <ul class="jam-list">
      <li>Senin sampai Kamis: 08.00 sampai 16.00</li>
      <li class="jam-short">Jumat: 08.00 sampai 11.30</li>
      <li>Sabtu: 09.00 sampai 13.00</li>
    </ul>
    <p class="page-note">Layanan mengikuti kalender resmi pada hari nasional.</p>
  </main>
  <footer class="site-footer">
    <p>Informasi diperbarui setiap Senin oleh petugas data layanan.</p>
  </footer>
</body>
</html>
```

```css
File: kasus-bab-03/layanan-publik/css/style.css
/* Dasar halaman */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  color: #334155;
  line-height: 1.6;
}

/* Header */
.site-header {
  background-color: #1E293B;
  padding: 16px 24px;
}

.site-title {
  color: #FFFFFF;
  font-size: 1.75rem;
  margin: 0;
}

/* Konten */
.page-content {
  padding: 24px;
}

.page-content h2 {
  color: #1E293B;
}

.jam-list {
  line-height: 1.7;
}

.jam-short {
  color: #DC2626;
}

.page-note {
  color: #16A34A;
}

/* Footer */
.site-footer {
  border-top: 1px solid #E2E8F0;
  padding: 16px 24px;
  font-size: 0.875rem;
}
```

Penjelasan: markup sekarang udah memakai nama peran (`site-header`, `jam-list`, `jam-short`) dan nggak lagi punya atribut `style`. Semua keputusan visual pindah ke satu file yang bisa dipakai ulang di dua halaman serupa lainnya, dan penggantian warna brand kini berpotensi selesai hanya dengan mengubah satu-dua aturan di `body` dan `site-header`. Dari sisi pemeliharaan, versi sesudah refactor juga lebih sehat: identitas halaman dipegang oleh *class* (`site-header`, `site-title`), bukan ID, karena memang nggak ada bagian unik yang butuh gaya khusus di luar class. Kebiasaan memberi ID ke setiap blok hanya menaikkan specificity tanpa manfaat yang jelas. Studi kasus ini menegaskan lagi pola 3.7: setelah gaya inline dihapus, kaskade bisa bekerja sebagaimana mestinya dan aturan yang sama berlaku seragam di semua halaman. Inilah fondasi yang nanti dipakai Tokosaya pas membangun empat halaman dengan satu file gaya yang sama.

## Latihan Mandiri

1. Dengan kata-kata kamu sendiri, jelaskan perbedaan selector elemen dan selector *class* — lalu tunjuk di `index.html` Tokosaya satu tempat yang tepat dipakainya masing-masing.
2. Tulis satu blok aturan CSS buat badge "Baru" produk Webcam HD WC-720: teks putih di atas latar indigo, tepi 1px #E2E8F0, dengan class bernama `badge-baru`; sertakan satu kalimat kenapa kamu memilih class, bukan ID.
3. Buka sebuah website layanan publik Indonesia (misal website kampus atau portal informasi kesehatan); daftarkan minimal tiga gaya visual yang kamu amati dan tebak properti CSS di baliknya (misal "heading tiba-tiba besar — kemungkinan `font-size`").
4. Pada `latihan-css/kaskade-demo`, tukar posisi Aturan 1 dan Aturan 2, muat ulang, dan deskripsikan hasilnya; jelaskan kenapa hasil nggak berubah, lalu cari pasangan aturan di file itu yang hasilnya justru berubah kalau ditukar.
5. Tulis ulang halaman `latihan-css/tiga-cara-css` menjadi pola penuh external CSS (hapus `<style>` dan setiap atribut `style`); catat langkah yang kamu lakukan dan jumlah atribut yang dihapus.
6. Rancang daftar tiga situasi pada website Tokosaya yang membutuhkan *pseudo-class* berbeda (misal `:hover` pada tombol, `:focus` pada link, `:nth-child()` pada daftar) dan tulis draf satu baris aturan CSS buat masing-masing.

## Tugas

**Tugas 1 — Style v1 lengkap (individu).** Terapkan hasil Praktikum di atas ke seluruh halaman yang ada pada folder `tokosaya-css/` (`index.html` dan `tentang.html`), sehingga kedua halaman tampil satu keluarga visual. Keluaran yang dikumpulkan: (a) file `css/style.css`, (b) kedua file HTML dengan class yang rapi, dan (c) catatan singkat 150 kata: tiga keputusan warna kamu dan alasannya. Kriteria penilaian singkat: external CSS benar dihubungkan di kedua halaman (30%), gaya link dan heading lengkap dengan keadaan `:hover`/`:focus` (30%), organisasi file dengan komentar banner (20%), kecocokan warna Tokosaya (20%).

**Tugas 2 — Refleksi refactor (kelompok 3–4 orang).** Pilih satu halaman web publik sederhana (satu halaman, bukan aplikasi kompleks), amati gaya visual utamanya, lalu susun tabel "gaya yang terlihat → properti CSS yang menduga mewakilinya → nama class yang akan kamu pakai" buat 10 elemen. Keluaran: tabel dalam dokumen teks (1 halaman) beserta satu paragraf penutup: bagian mana yang paling sulit diubah bila gayanya inline, dan kenapa. Kriteria: ketepatan tebakan properti (40%), kegunaan nama class yang diusulkan (30%), kedalaman analisis pemeliharaan (30%).

## Refleksi

1. Pas kamu mengubah satu baris `style.css` dan seluruh halaman ikut berubah, bagian mana dari mekanisme CSS yang membuat itu mungkin — dan kapan mekanisme yang sama justru membuat perilaku gaya terasa "tak bisa diprediksi"?
2. Kamu diminta memakai warna yang sama di `hover` tombol dan link navigasi. Kapan kamu memilih menulis dua aturan terpisah, dan kapan memilih satu selector gabungan? Apa yang kamu pertimbangkan?
3. Menurut kamu, kenapa spesifikasi web menempatkan gaya inline di puncak specificity alih-alih mengabdiakannya kayak aturan biasa? Apa konsekuensi desain keputusan itu bagi pemeliharaan?
4. Setelah praktikum ini, bagian mana dari `style.css` v1 yang menurut kamu paling rentan meledak jadi nggak teratur pas Bab 4–7 menambah tipografi, kartu produk, dan layout? Apa yang bisa kamu lakukan sekarang (misal komentar bagian atau penamaan) buat mengantisipasinya?

## Rangkuman

- CSS menata rupa dokumen HTML melalui blok aturan: *selector* yang mencocokkan elemen dan blok deklarasi properti–nilai.
- Tiga cara memasang CSS: inline (demonstrasi saja), internal (eksperimen satu halaman), dan external (default seluruh proyek: satu `style.css` dihubungkan dari setiap halaman).
- Selector inti: elemen (global), class (dapat dipakai ulang, penamaan `kebab-case` pola `blok-elemen`), ID (unik per halaman, hemat), ditambah grouping dan *descendant*.
- *Pseudo-class* menata keadaan elemen — `:hover`, `:focus`, `:first-child`, `:last-child`, `:nth-child()` — seluruhnya *murni CSS* tanpa JavaScript.
- Properti inti visual bab ini: `color`, `background-color`, `border`, `opacity`; warna dijaga kontrasnya terhadap latar.
- Satuan penting: `rem` buat font (mengikuti setelan pengguna), `%` buat lebar, `px` buat garis kecil, `vw`/`vh` buat ukuran berbasis layar.
- Kaskade memilih pemenang aturan kalau konflik, dengan urutan: asal aturan, lalu specificity (inline > id > class > elemen), lalu aturan terbawah dalam file kalau setara.
- `color` dan `font-family` diwarisi elemen anak; `border`, `padding`, `margin`, `background-color` nggak.
- File `style.css` yang baik: banner komentar, urutan dasar→bagian halaman→footer→utilitas, nama class peran.

Jembatan ke bab berikutnya: `style.css` v1 yang baru saja kamu bangun masih memakai keluarga font sistem dan warna hex yang ditulis berulang di banyak aturan. Bab 4 menaikkan standar keduanya: tipografi profesional dengan Google Fonts (Poppins buat heading, Inter buat teks) — skala, jarak baris, dan hierarki visual — serta sistem warna yang terpusat dalam *design token*: setiap warna brand didefinisikan satu kali sebagai variabel warna bernama, lalu dipanggil di semua aturan yang membutuhkannya. Dasar selector, kaskade, dan specificity yang kamu kuasai di bab ini adalah pisau utama buat menerapkan token itu dengan terkendali.

## Evaluasi

Bagian ini mengukur pemahaman konsep selector, kaskade, dan specificity serta penerapannya pada proyek Tokosaya.

### Pilihan Ganda

1. Pada deklarasi `color: #1E293B;`, bagian yang disebut *property* adalah …
   A. `color`
   B. `#1E293B`
   C. `:`
   D. kurung kurawal `{ }`

2. Aturan yang menyasar seluruh elemen paragraf pada halaman ditulis dengan selector …
   A. `.p`
   B. `#p`
   C. `p`
   D. `*p`

3. Keunggulan utama external CSS dibanding internal CSS adalah …
   A. penulisannya paling pendek per elemen
   B. satu file dipakai banyak halaman sehingga gaya konsisten dan mudah dirawat
   C. gayanya otomatis menang atas semua aturan lain
   D. tidak perlu dimuat oleh browser

4. Urutan kekuatan *specificity* dari yang terendah ke tertinggi adalah …
   A. inline, id, class, elemen
   B. elemen, class, id, inline
   C. id, class, elemen, inline
   D. class, elemen, inline, id

5. *Pseudo-class* yang aktif ketika kursor berada di atas elemen adalah …
   A. `:focus`
   B. `:active`
   C. `:hover`
   D. `:first-child`

6. Perbedaan utama satuan `rem` dan `em` adalah …
   A. `rem` berpatokan pada ukuran font elemen akar, sedangkan `em` pada ukuran font elemen sendiri
   B. `rem` hanya berlaku pada heading, `em` pada paragraf
   C. `em` berpatokan pada lebar layar, `rem` pada tinggi layar
   D. keduanya identik saling menggantikan tanpa perbedaan

7. Dua aturan dengan *specificity* setara menyasar elemen sama dan ditulis berturut-turut dalam satu file CSS. Aturan yang berlaku adalah …
   A. aturan yang ditulis pertama
   B. aturan yang ditulis terakhir
   C. keduanya digabungkan nilainya
   D. browser melempar error dan memakai gaya default

### Benar atau Salah

Tandai B jika pernyataan benar, S jika salah.

1. Selector *ID* memiliki *specificity* lebih tinggi daripada selector *class*.
2. Gaya inline adalah cara terbaik untuk menyusun seluruh halaman proyek karena tercepat ditulis.
3. Properti `border` diwariskan oleh setiap elemen anak dari induknya.
4. Bila *specificity* dua aturan setara, urutan penulisan di file CSS menentukan pemenang.
5. `:focus` hanya berguna bagi pengguna tetikus, sehingga boleh diabaikan desainnya.

### Analisis Kode

(Butir analisis — tingkat ringan.)

**Butir 1.** Perhatikan file CSS dan elemen HTML berikut.

```css
File: latihan-css/evaluasi-analisis-1.css
.info {
  color: #334155;
}

#pengumuman-halaman {
  color: #4F46E5;
}

p.info {
  color: #16A34A;
}
```

```html
File: latihan-css/evaluasi-analisis-1.html
<p class="info" id="pengumuman-halaman">Layanan sirkulasi normal pekan ini.</p>
```

a) Warna apa yang akhirnya tampak pada paragraf tersebut, dan urutan perhitungan specificity-nya seperti apa? b) Desainer ingin paragraf ini berwarna hijau (#16A34A) tanpa mengubah HTML sama sekali — sebutkan dua langkah berbeda yang mungkin (termasuk keputusan menyingkirkan aturan yang konflik), dan jelaskan pilihan mana yang paling bersih untuk dirawat.

**Butir 2.** Potongan berikut diambil dari file gaya halaman admin yang disunting dua orang pada dua waktu yang berbeda.

```css
File: latihan-css/evaluasi-analisis-2.css
#admin-nav .site-nav li a.site-nav-link {
  color: #4F46E5;
}

#admin-nav .site-nav li a.site-nav-link {
  color: #4338CA;
}
```

a) Warna berapa yang tampak, dan berdasar mekanisme kaskade yang mana? b) Identifikasi dua cacat pemeliharaan pada gaya di atas (petunjuk: kelebihan kekhususan selector dan duplikasi blok aturan), lalu usulkan bentuk perbaikannya.

### Soal Praktik

1. Pada proyek `tokosaya-css/`, tambahkan gaya keadaan fokus (`a:focus`) bagi seluruh link `tentang.html` dengan outline 2px indigo #4F46E5 dan `outline-offset: 2px`; jelaskan dalam 2–3 kalimat mengapa gaya fokus jangan dihapus demi "tampak bersih".
2. Buat halaman mini `jadwal.html` Tokosaya (struktur minimal: satu `h1`, tabel tiga baris jadwal pengiriman) dengan external CSS; setel baris ganjil `tbody` diberi latar #F8FAFC memakai `:nth-child`, dan tulis satu kalimat mengapa `:nth-child` lebih tahan perubahan daripada memberi class manual pada baris ganjil.

### Kunci Jawaban

<details>
<summary>Klik untuk membuka kunci jawaban</summary>

**Pilihan Ganda**

1. A — `color` adalah nama properti; `#1E293B` nilainya; selector tidak ada pada baris deklarasi.
2. C — selector elemen ditulis sebagai nama tag polos (`p`); `.p` menyasar class, `#p` menyasar ID.
3. B — external CSS dipakai ulang oleh seluruh halaman proyek sehingga konsisten dan mudah dirawat; internal hanya satu halaman, inline satu elemen.
4. B — gradasinya: elemen (0,0,1) paling lemah, lalu class (0,1,0), id (1,0,0), dan gaya inline; `!important` berada di luar tangga ini sebagai darurat.
5. C — `:hover` berlaku saat kursor menghampiri; `:focus` aktif lewat fokus keyboard/tombol.
6. A — `em` relatif terhadap ukuran font elemen sendiri/induknya (dapat menumpuk), sedangkan `rem` relatif terhadap `html` (lazimnya 16px) sehingga stabil dan tunduk mengikuti preferensi pengguna.
7. B — ketika semua tingkat kaskade setara, aturan yang ditulis lebih belakang menang (urutan sumber).

**Benar atau Salah**

1. B — id (1,0,0) selalu mengalahkan class dengan berapa pun jumlahnya; reason: angka id berada pada posisi paling berbobot.
2. S — inline sulit dipakai ulang, menang atas semua gaya, dan menyulitkan audit; external CSS adalah default proyek.
3. S — hanya properti tertentu (misal `color`, `font-family`, `line-height`) yang diwariskan; border tidak.
4. B — urutan sumber (source order) adalah penentu terakhir ketika specificity setara.
5. S — gaya fokus adalah pengganti kursor bagi pengguna keyboard; menghapusnya membuat posisi navigasi tak terlihat.

**Analisis Kode — Butir 1.** a) Warna akhirnya indigo (#4F46E5): `#pengumuman-halaman` (id, 1,0,0) mengalahkan `p.info` (0,1,1) dan `.info` (0,1,0). b) Dua langkah: hapus aturan ID dari file (sehingga `p.info` hijau menang), atau naikkan kekhususan aturan hijau agar memuat id (misal `p#pengumuman-halaman.info`) — tapi pilihan paling bersih adalah menyatukan satu sumber gaya: pilih satu aturan pemenang sengaja, hapus aturan lain, karena menyusun konflik untuk "membisanya" kaskade membuat file sulit dinalar.

**Analisis Kode — Butir 2.** a) Warna yang tampak #4338CA: kedua blok setara se specificity-nya sempurna (identik), maka pemenang ditentukan urutan sumber — aturan kedua. b) Cacat: (1) selector terlalu spesifik dan rapuh (menyebut rantai panjang termasuk `li` yang tidak penting), sulit dipakai ulang; (2) dua blok identik dengan nilai berbeda — duplikasi yang menunggu kebingungan. Perbaikan: sederhanakan menjadi `.site-nav a { color: #4338CA; }` satu-satunya aturan (atau simpan dua nilai dalam dua class berbeda bila dua warna memang diperlukan).

**Soal Praktik — ringkasan jawaban.** 1) Tambahkan pada `style.css`: `a:focus { outline: 2px solid #4F46E5; outline-offset: 2px; }` — alasan: pengguna keyboard menyusuri halaman lewat Tab tanpa kursor, sehingga indikasi fokus visual adalah satu-satunya isyarat posisi (terkait WCAG, dibahas Bab 13); menghapusnya justru membutakan pengguna keyboard. 2) Aturan `.tabel-jadwal tbody tr:nth-child(odd) { background-color: #F8FAFC; }` pada file gaya halaman; `:nth-child` berdasar pada urutan baris dalam HTML sehingga menambah/menghapus baris tidak merusak pewarnaan — sedangkan class manual harus disunting ulang setiap kali struktur tabel berubah.

</details>

## Referensi

1. MDN Web Docs. (2025). *CSS basics* (diakses 15 Juni 2025). https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics
2. MDN Web Docs. (2025). *Cascade, specificity, and inheritance* (diakses 15 Juni 2025). https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance
3. Duckett, J. (2011). *HTML & CSS: Design and Build Websites*. Indianapolis: John Wiley & Sons.
4. Robbins, J. N. (2018). *Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics* (5th ed.). Sebastopol: O'Reilly Media.
5. Google. (2025). *Learn CSS* (web.dev, diakses 20 Juni 2025). https://web.dev/learn/css