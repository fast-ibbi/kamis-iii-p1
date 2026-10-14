# Bank Soal Pilihan Ganda — Frontend Development & Web Design

> **Mata kuliah:** Frontend Development & Web Design · Semester III
> **Prodi:** Sistem Informasi / Teknik Informatika
> **Studi kasus proyek:** Tokosaya — toko online UMKM _"Belanja Tepat, Kirim Cepat"_
> **Cakupan:** 14 bab (Bab 1–7 dan 9–15) · 15 soal per bab · **Total 210 soal**
> **Tingkat kesulitan:** campuran (C1–C6)
> **Versi per bab:** `bab-NN/soal-pilihan-ganda.md` · kunci: `bab-NN/jawaban.md` · **Kunci bank lengkap:** `jawaban.md`


**Daftar Bab:** Bab 01 · Bab 02 · Bab 03 · Bab 04 · Bab 05 · Bab 06 · Bab 07 · Bab 09 · Bab 10 · Bab 11 · Bab 12 · Bab 13 · Bab 14 · Bab 15


## Bab 01 — Pengantar Frontend Development dan Web Design

**Pilihan Ganda (15 soal)**

1. Istilah yang tepat untuk bagian website yang dilihat, dibaca, dan diklik pengunjung di dalam browser adalah...
   - A. backend
   - B. frontend
   - C. hosting
   - D. deployment

2. Pernyataan yang paling tepat membedakan *user interface* (UI) dan *user experience* (UX) adalah...
   - A. UI mencakup pengalaman menyeluruh pengguna, sedangkan UX hanya soal warna dan tipografi
   - B. UI adalah rancangan berbasis Figma, sedangkan UX adalah kode HTML dan CSS
   - C. UI dan UX sama saja; keduanya merupakan istilah lain dari web design
   - D. UI adalah bagian antarmuka yang langsung dilihat dan digunakan (tombol, kartu produk, formulir), sedangkan UX adalah pengalaman pengguna secara menyeluruh saat memakainya

3. Pasangan peran HTML dan CSS yang benar adalah...
   - A. HTML menyusun struktur konten (heading, paragraf, daftar, gambar, link), sedangkan CSS mengatur warna, huruf, jarak, dan layout
   - B. HTML mengatur warna dan jarak, sedangkan CSS menyusun struktur konten
   - C. HTML dan CSS sama-sama mengelola data produk di server
   - D. HTML mengatur keamanan data, sedangkan CSS mengatur kecepatan server

4. Urutan konseptual saat browser menampilkan halaman adalah...
   - A. gaya CSS diterapkan → dokumen HTML diterima → halaman ditampilkan → pohon dokumen disusun
   - B. pohon dokumen disusun → halaman ditampilkan → dokumen HTML diterima → gaya CSS diterapkan
   - C. dokumen HTML diterima → pohon dokumen (DOM) disusun → gaya CSS diterapkan → halaman ditampilkan
   - D. halaman ditampilkan → gaya CSS diterapkan → pohon dokumen disusun → dokumen HTML diterima

5. Pada analogi ruang kafe dan dapur, pelayan yang mengantar pesanan dari meja ke dapur lalu membawa hasilnya kembali paling tepat menggambarkan...
   - A. penyimpanan aset gambar dan file CSS proyek
   - B. penghubung antara frontend dan backend, yaitu aliran permintaan dan respons
   - C. peran CSS framework dalam menyusun komponen antarmuka
   - D. proses pemindahan file proyek dari komputer ke server

6. Perhatikan struktur folder proyek berikut.

```text
tokosaya-css/
├── index.html
├── katalog.html
├── tentang.html
├── css/
│   └── style.css
└── img/
    └── produk-keyboard-kx210.svg
```

Pernyataan yang tepat berdasarkan struktur folder di atas adalah...
   - A. setiap halaman wajib menyimpan salinan style.css sendiri di dalam subfolder css/
   - B. halaman utama sebaiknya dinamai utama.html agar dikenali server
   - C. nama file sebaiknya memakai huruf kapital agar terbaca oleh server
   - D. semua halaman memakai satu file `css/style.css` bersama sehingga perbaikan gaya cukup dilakukan di satu tempat, dan nama file memakai kebab-case

7. Layanan yang menyimpan file website di server supaya dapat diakses lewat internet disebut...
   - A. hosting
   - B. domain
   - C. deployment
   - D. CDN

8. Proyek Tokosaya memakai gambar SVG untuk logo dan ikon. Alasan yang paling tepat adalah...
   - A. SVG menyimpan gambar sebagai piksel beresolusi tinggi sehingga cocok untuk foto produk
   - B. SVG wajib dipakai untuk semua gambar agar ukuran file selalu besar
   - C. SVG menyimpan gambar sebagai bentuk seperti garis dan lingkaran sehingga tetap tajam saat ukurannya diubah
   - D. SVG hanya dapat ditampilkan oleh halaman yang memuat JavaScript

9. Fitur Chrome DevTools yang dipakai untuk mengubah lebar layar dari ukuran HP ke komputer agar tampilan halaman dapat diamati pada berbagai ukuran adalah...
   - A. panel Elements
   - B. device toolbar
   - C. menu Dock side
   - D. pintasan F12

10. Perhatikan potongan dokumen berikut.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <title>Tokosaya — Belanja Tepat, Kirim Cepat</title>
</head>
<body>
  <h1>Peralatan Kerja Digital untuk Semua</h1>
  <p>Keyboard, mouse, hingga monitor — pilih perangkat kerja Anda dengan harga UMKM yang jujur.</p>
</body>
</html>
```

Ketika dibuka di browser, tanda "—" tampil sebagai karakter aneh. Perbaikan yang paling tepat adalah...
   - A. mengganti tanda "—" dengan tanda hubung biasa agar tidak bermasalah
   - B. menambahkan atribut `lang="en"` pada elemen `html`
   - C. memindahkan tanda "—" dari paragraf ke elemen `title`
   - D. menambahkan `<meta charset="utf-8">` di dalam `head` dan menyimpan file dalam pengodean UTF-8

11. Perhatikan potongan dokumen berikut.

```html
<body>
  <h1>Tokosaya</h1>
  <h2>Produk Unggulan</h2>
  <h4>Keyboard Mekanis KX-210</h4>
</body>
```

Perbaikan yang paling tepat untuk potongan tersebut sesuai konvensi struktur dokumen adalah...
   - A. mengubah `h4` menjadi `h3` agar level heading tidak melompat dari `h2`
   - B. mengubah `h2` menjadi `h1` agar dua judul teratas setingkat
   - C. mengubah `h1` menjadi `h3` agar seluruh judul setingkat
   - D. menghapus `h2` karena satu halaman hanya boleh memiliki satu heading

12. Halaman `tokosaya-css/index.html` memuat link `<a href="katalog.html">Lihat Katalog</a>`, tetapi saat diklik browser menampilkan pesan file tidak ditemukan. Penyebab yang paling mungkin adalah...
   - A. tag `a` tidak boleh dipakai sebelum CSS diajarkan
   - B. browser membutuhkan JavaScript untuk membuka link antarhalaman
   - C. file `katalog.html` belum dibuat di folder yang sama atau nama file pada `href` tidak cocok
   - D. link harus selalu memakai alamat lengkap beserta domain dan protokol

13. Rancangan kartu produk Keyboard Mekanis KX-210 menetapkan lencana Best Seller berwarna amber dengan teks gelap, kartu putih bersudut membulat, dan harga berwarna indigo. Sesuai alur *design → code*, langkah kerja yang paling tepat adalah...
   - A. langsung menulis aturan CSS warna dan bentuk tanpa membaca rancangan, lalu menyesuaikan HTML belakangan
   - B. menyusun struktur kartu dengan HTML (nama produk, kategori, harga, lencana), lalu menata warna dan bentuknya dengan CSS mengikuti rancangan
   - C. memasang CSS framework lebih dulu agar semua keputusan warna kartu langsung diambil alih komponen siap pakai
   - D. menyalin kartu ke setiap halaman dengan gaya masing-masing agar tampilannya lebih bervariasi

14. Klien Tokosaya melapor, "Tombolnya hilang saat dibuka di HP" dan "Tulisan menabrak logo". Langkah pemeriksaan pertama yang paling tepat berdasarkan bab ini adalah...
   - A. mengganti logo dengan format JPEG berukuran besar agar lebih terlihat
   - B. menambahkan JavaScript supaya tombol muncul kembali di layar kecil
   - C. memeriksa apakah elemennya masih ada di struktur lewat panel Elements, lalu memeriksa lebar layar yang digunakan lewat device toolbar
   - D. mengganti domain dan hosting karena halaman mungkin dipasang di server yang salah

15. Kamu memulai latihan baru dan ingin menata folder sesuai konvensi buku ini. Struktur yang paling tepat adalah...
   - A. satu folder utama berisi `index.html`, subfolder `css/` berisi satu `style.css` bersama, dan subfolder `img/` berisi gambar bernama kebab-case seperti `foto-profil.png`
   - B. satu folder "Profil Kelas" berisi `Halaman1.html`, `Style.CSS`, dan `Foto Profil.jpg` pada level yang sama
   - C. folder `profil-kelas/` berisi `utama.txt` dan dua file CSS terpisah, satu untuk setiap halaman
   - D. satu file `gabungan.html` yang memuat seluruh konten agar tidak perlu membuat subfolder

---

## Bab 02 — HTML5 dan Struktur Semantik

**Pilihan Ganda (15 soal)**

1. Wilayah halaman seperti `main` dan `nav` yang dikenali pembaca layar sebagai tujuan navigasi cepat disebut...
   - A. markup
   - B. landmark
   - C. hierarki heading
   - D. meta description

2. Fungsi `<meta name="description" content="...">` pada bagian `head` adalah...
   - A. ringkasan satu kalimat tentang tujuan halaman yang kerap ditampilkan mesin pencari di bawah hasil pencarian
   - B. mengatur pengodean karakter agar tanda "—" tampil benar
   - C. membuat lebar halaman mengikuti lebar perangkat
   - D. menentukan teks yang tampil pada tab browser

3. Untuk menyorot kata kunci hasil pencarian di dalam sebuah paragraf, elemen yang paling tepat adalah...
   - A. `strong`, karena menandai bagian yang penting
   - B. `em`, karena menandai bagian yang perlu dibaca dengan penekanan
   - C. `mark`, karena menandai teks yang relevan dalam konteks tertentu
   - D. `h3`, karena berfungsi sebagai subjudul kata kunci

4. Ketika sebuah link mengarah ke sumber eksternal dan sengaja dibuka di tab baru, pasangan atribut yang tepat dipakai adalah...
   - A. `href` dan `lang`
   - B. `method` dan `name`
   - C. `scope` dan `id`
   - D. `target="_blank"` dan `rel="noopener"`

5. Mengapa teks link sebaiknya deskriptif, misalnya "Baca aturan penukaran barang" alih-alih "klik di sini"?
   - A. karena teks link deskriptif membuat halaman otomatis lebih cepat dimuat
   - B. karena pembaca layar dapat menjumpai teks link tunggal di luar kalimatnya, sehingga frasa yang kabur kehilangan makna
   - C. karena mesin pencari menolak halaman yang memuat frasa "klik di sini"
   - D. karena teks link yang panjang menghilangkan kebutuhan atribut `alt` pada gambar

6. Sebuah gambar memuat grafik rekap penjualan yang menunjukkan kenaikan pesanan bulan ini. Teks `alt` yang paling tepat untuk gambar itu adalah...
   - A. `alt="gambar"`
   - B. `alt="grafik-penjualan.png"`
   - C. `alt="Grafik penjualan bulan ini menunjukkan kenaikan pesanan sekitar 20 persen dibanding bulan lalu"`
   - D. `alt="klik di sini"`

7. Panel "Produk Terlaris" di tepi halaman Tokosaya berisi tautan produk populer dan dapat dihapus tanpa merusak isi utama. Elemen semantik yang paling tepat untuk panel itu adalah...
   - A. `aside`
   - B. `main`
   - C. `footer`
   - D. `nav`

8. Menurut bab ini, tidak setiap gugus link harus dibungkus `nav`. Gugus link yang paling tepat memakai `nav` adalah...
   - A. deretan tautan sumber di dalam satu paragraf artikel
   - B. seluruh teks yang kebetulan memuat tanda hubung
   - C. tautan surel `mailto:` di dalam `address`
   - D. menu navigasi utama situs, dan bila perlu menu di footer

9. Potongan `<time datetime="2026-02-10">10 Februari 2026</time>` pada footer menunjukkan bahwa...
   - A. tanggal itu otomatis dibacakan sebagai `h2` oleh pembaca layar
   - B. waktu ditulis dengan teks yang mudah dibaca manusia sekaligus nilai mesin yang dapat dipahami mesin
   - C. waktu hanya tampil bila halaman memuat JavaScript
   - D. atribut `datetime` mengubah format tanggal mengikuti zona waktu pengunjung

10. Perhatikan potongan tabel berikut.

```html
<table>
  <caption>Produk unggulan</caption>
  <thead>
    <tr>
      <th scope="col">Produk</th>
      <th scope="col">Harga</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Keyboard Mekanis KX-210</th>
      <td>Rp650.000</td>
    </tr>
  </tbody>
</table>
```

Saat pengguna pembaca layar berpindah ke sel harga "Rp650.000", konteks yang paling mungkin diumumkan adalah...
   - A. "Rp650.000, sel" tanpa konteks apa pun
   - B. "Produk, Harga, Rp650.000" karena hanya judul kolom yang dibacakan
   - C. "Keyboard Mekanis KX-210, Rp650.000" karena nama produk berperan sebagai header baris
   - D. "caption, thead, tbody, Rp650.000" karena nama elemen tabel dibacakan

11. Navigasi utama Tokosaya memakai atribut `aria-label="Navigasi utama"`. Tujuan utama atribut itu adalah...
   - A. membedakan navigasi utama dari navigasi lain, misalnya menu di footer, saat dibacakan pembaca layar
   - B. memberi warna khusus pada menu utama ketika CSS dipasang
   - C. memberi tahu mesin pencari bahwa halaman hanya memiliki satu `h1`
   - D. menandai bahwa semua link di dalamnya bersifat eksternal

12. Halaman kontak Tokosaya memuat formulir pesan yang datanya akan dikirim ke layanan penerima melalui atribut `action`. Pilihan metode yang paling tepat beserta alasannya adalah...
   - A. `get`, karena data pesan lebih mudah dibaca pada bilah alamat
   - B. `get`, karena halaman statis tidak mendukung metode `post`
   - C. `post`, karena formulir tanpa metode akan gagal dikirim oleh browser
   - D. `post`, karena formulir itu berisi data pesan yang diketik pengguna

13. Seorang pelanggan tunanetra ingin melewati menu yang sama di setiap halaman dan langsung menuju isi utama. Markup yang paling membantu kebutuhan itu adalah...
   - A. `meta description` pada `head`
   - B. elemen `main` sebagai landmark, karena pembaca layar menyediakan lompatan cepat ke wilayah tersebut
   - C. atribut `width` dan `height` pada setiap gambar
   - D. `caption` pada setiap tabel halaman

14. Halaman `index.html` dan `tentang.html` Tokosaya memakai `header` dan `footer` dengan markup yang identik. Manfaat utama konsistensi itu adalah...
   - A. setiap halaman otomatis memiliki dua elemen `main`
   - B. tag pada kedua halaman menjadi lebih pendek sehingga ukuran file mengecil
   - C. penataan memakai satu set selector dan pemeliharaan lintas halaman lebih mudah, sekaligus memperkuat identitas website
   - D. mesin pencari menolak halaman yang headernya berbeda antarhalaman

15. Kamu diminta menyusun bagian "Nilai Layanan Tokosaya" yang memuat pasangan istilah dan penjelasan: Harga jujur, Layanan cepat, dan Dampingan memilih. Potongan markup yang paling tepat adalah...
   - A. `dl` berisi pasangan `dt` (istilah) dan `dd` (penjelasan) untuk tiap nilai layanan
   - B. `ol` berisi tiga `li` karena nilai layanan harus dibaca berurutan
   - C. `table` berisi tiga baris `td` untuk istilah dan penjelasannya
   - D. `aside` berisi satu paragraf yang menggabungkan ketiga nilai layanan

---

## Bab 03 — Dasar-Dasar CSS

**Pilihan Ganda (15 soal)**

1. Pasangan `properti: nilai;` seperti `color: #1E293B;` di dalam blok deklarasi disebut …
   - A. *selector*
   - B. *cascade*
   - C. *declaration*
   - D. *specificity*

2. Kamu ingin menguji satu ide gaya dan gaya itu cukup berlaku untuk satu halaman saja. Penempatan yang tepat beserta jangkauannya adalah …
   - A. atribut `style` pada elemen — jangkauannya satu elemen
   - B. elemen `<style>` di dalam `head` — jangkauannya satu halaman
   - C. berkas `style.css` di folder `css/` — jangkauannya satu elemen
   - D. elemen `<link>` di dalam `body` — jangkauannya satu halaman

3. Kata *cascading* pada nama *Cascading Style Sheets* paling tepat menjelaskan …
   - A. cara browser mengumpulkan banyak aturan lalu memilih pemenang saat ada nilai yang bertabrakan
   - B. cara nilai properti teks menurun dari elemen induk ke elemen anak
   - C. cara browser mengunduh berkas gaya sedikit demi sedikit supaya halaman cepat tampil
   - D. cara penulis menyusun aturan dari yang paling umum menuju yang paling khusus

4. Properti berikut yang nilainya diwariskan dari elemen induk ke elemen anak adalah …
   - A. `border`
   - B. `padding`
   - C. `margin`
   - D. `color`

5. Nilai *specificity* dari selector `.site-nav a:focus` adalah …
   - A. (0, 2, 1)
   - B. (0, 1, 1)
   - C. (1, 2, 1)
   - D. (0, 2, 2)

6. Pada halaman katalog Tokosaya, kamu ingin menyasar setiap `li` di dalam elemen ber-*class* `menu-list`, tanpa peduli seberapa dalam posisinya. Selector *descendant* yang tepat adalah …
   - A. `li .menu-list`
   - B. `li.menu-list`
   - C. `.menu-list li`
   - D. `.menu-list, li`

7. Perhatikan tabel jadwal pengiriman berikut.

```html
<table class="tabel-jadwal">
  <thead>
    <tr><th>Hari</th><th>Jam Kirim</th></tr>
  </thead>
  <tbody>
    <tr><td>Senin</td><td>08.00–15.00</td></tr>
    <tr><td>Selasa</td><td>08.00–15.00</td></tr>
    <tr><td>Rabu</td><td>08.00–15.00</td></tr>
  </tbody>
</table>
```

   Supaya **hanya baris isi** tabel (`tbody`) yang mendapat latar berselang-seling `#F8FAFC` sementara baris judul di `thead` tetap tanpa latar, aturan yang tepat adalah …
   - A. `.tabel-jadwal tr:nth-child(odd) { background-color: #F8FAFC; }`
   - B. `.tabel-jadwal tbody tr:nth-child(odd) { background-color: #F8FAFC; }`
   - C. `.tabel-jadwal tbody tr:first-child { background-color: #F8FAFC; }`
   - D. `.tabel-jadwal th:nth-child(odd) { background-color: #F8FAFC; }`

8. Perhatikan potongan gaya pada bagian CTA landing page Tokosaya berikut.

```css
a {
  color: #4F46E5;
}

.cta-button {
  color: #FFFFFF;
}

.cta .cta-button {
  color: #F59E0B;
}

#kontak .cta-button {
  color: #1E293B;
}
```

```html
<section class="cta" id="kontak">
  <a href="kontak.html" class="cta-button">Hubungi Kami</a>
</section>
```

   Warna teks yang akhirnya tampak pada tombol tersebut, beserta aturan pemenangnya, adalah …
   - A. `#4F46E5` — dari selector elemen `a`
   - B. `#FFFFFF` — dari selector class `.cta-button`
   - C. `#F59E0B` — dari selector `.cta .cta-button`
   - D. `#1E293B` — dari selector `#kontak .cta-button`

9. Rekan timmu menuliskan aturan pseudo-class seperti berikut.

```css
.site-nav a {
  color: #1E293B;
  text-decoration: none;
}

.site-nav a :hover {
  color: #4F46E5;
}
```

   Ketika kursor diarahkan ke link navigasi, warna indigo tidak pernah muncul. Penyebabnya adalah …
   - A. `:hover` hanya bekerja pada elemen `button` dan `input`
   - B. ada spasi antara `a` dan `:hover`, sehingga selector menyasar elemen di dalam link, bukan keadaan link itu sendiri
   - C. `:hover` harus ditulis pada baris paling akhir berkas CSS
   - D. warna `#4F46E5` sudah dipakai aturan global `a`, sehingga nilainya ditimpa

10. Pada berkas gaya sebuah halaman Tokosaya dituliskan:

```css
.catatan {
  font-size: 0.875rem;
  padding-left: 2em;
}
```

   Dengan setelan ukuran font akar 16px, jarak kiri yang dihasilkan oleh `padding-left: 2em` pada elemen tersebut adalah …
   - A. 14px
   - B. 16px
   - C. 28px
   - D. 32px

11. Perhatikan susunan tag di dalam `head` sebuah dokumen dan berkas eksternalnya.

```html
<head>
  <style>
    p { color: #DC2626; }
  </style>
  <link rel="stylesheet" href="css/style.css">
</head>
```

```css
/* css/style.css */
p {
  color: #334155;
}
```

   Warna yang tampak pada paragraf halaman tersebut adalah …
   - A. `#DC2626`, karena blok `<style>` selalu menang atas berkas eksternal
   - B. `#334155`, karena kekuatan keduanya setara sehingga aturan yang muncul belakangan dalam dokumen menang
   - C. `#DC2626`, karena selector pada blok internal dihitung lebih spesifik daripada selector eksternal
   - D. kedua warna diterapkan bergantian oleh browser pada tiap pemuatan ulang

12. Halaman "Jam Layanan" sebuah kantor pelayanan menempelkan atribut `style` di hampir setiap tag. Ketika warna identitas unit berubah, hanya sebagian halaman ikut berubah dan biaya perawatan membengkak. Tindakan perbaikan yang paling tepat adalah …
   - A. menghapus atribut `style` sambil memindahkan nilainya ke class berbasis peran di satu berkas `style.css` eksternal
   - B. menambah aturan baru di blok `<style>` setiap halaman sampai bisa menimpa gaya inline
   - C. menaikkan kekhususan selector dengan `#id` pada setiap elemen yang masih punya gaya inline
   - D. menambahkan `!important` pada semua deklarasi baru supaya konsisten menang

13. Tim desain meminta outline fokus dihapus dari semua link supaya tampilan terlihat lebih bersih. Evaluasi yang paling tepat terhadap permintaan itu adalah …
   - A. permintaan itu aman diikuti karena outline hanya muncul di browser lama
   - B. permintaan itu sebaiknya diikuti, tetapi dikompensasi dengan mempertebal garis bawah link
   - C. permintaan itu ditolak; indikator fokus yang jelas seperti `outline: 2px solid #4F46E5` adalah penanda posisi utama bagi pengguna keyboard
   - D. permintaan itu ditolak hanya untuk elemen form, sedangkan link bebas dihapus outline-nya

14. Kamu membuat komponen badge status stok yang menempel di kartu produk Tokosaya dan akan dipakai berulang di banyak kartu. Nama class yang paling sesuai dengan konvensi penamaan bab ini adalah …
   - A. `.badge-stok`
   - B. `.badgeStok`
   - C. `.badge_stok_kecil_putih`
   - D. `.BadgeStok`

15. Kamu memberi atribut `class="badge-baru"` pada elemen `<span>` badge produk unggulan Tokosaya. Badge ingin tampil dengan teks putih, latar indigo brand, dan tepi tipis 1px abu terang. Aturan CSS yang benar adalah …
   - A. `#badge-baru { color: #FFFFFF; background-color: #4F46E5; border: 1px solid #E2E8F0; }`
   - B. `.badge-baru { color: #4F46E5; background-color: #FFFFFF; border: 1px solid #E2E8F0; }`
   - C. `badge-baru { color: #FFFFFF; background-color: #4F46E5; border: 1px solid #E2E8F0; }`
   - D. `.badge-baru { color: #FFFFFF; background-color: #4F46E5; border: 1px solid #E2E8F0; }`

---

## Bab 04 — Tipografi dan Visual Design CSS

**Pilihan Ganda (15 soal)**

1. Poppins Regular 400 dan Poppins Bold 700, keduanya adalah dua … dari satu …
   - A. *typeface*; *font*
   - B. *font*; *typeface*
   - C. design token; *fallback stack*
   - D. *font-weight*; *font-size*

2. Parameter `display=swap` pada URL Google Fonts dimaksudkan agar …
   - A. teks tetap tampil memakai font cadangan selama web font belum selesai diunduh
   - B. font selalu dibaca dari berkas lokal ketika jaringan terputus
   - C. ketebalan font otomatis ditukar mengikuti lebar layar
   - D. browser menunda seluruh teks sampai web font selesai diunduh

3. Skala tipografi Tokosaya dinyatakan dalam satuan `rem`. Alasan utama pemilihan satuan itu adalah …
   - A. `rem` tidak memerlukan blok token di `:root`
   - B. `rem` membuat ukuran teks sama besar di semua perangkat tanpa kecuali
   - C. `rem` adalah satu-satunya satuan yang dikenali browser modern
   - D. `rem` mengacu pada ukuran font elemen akar sehingga skala tetap koheren sekaligus mengikuti setelan pengguna

4. Token `--space-unit: 8px` pada `:root` Tokosaya dipakai lewat pola `calc(var(--space-unit) * n)`. Fungsi token tersebut adalah …
   - A. menggantikan kebutuhan `line-height` pada seluruh teks
   - B. menetapkan lebar maksimum setiap section halaman
   - C. menjadi basis skala jarak 8/16/24/32/48/64 supaya ritme jarak konsisten
   - D. menyimpan nilai rasio kontras minimum untuk badge semantik

5. Kamu ingin memberi jarak dalam elemen sebesar 24px dengan memanfaatkan token `--space-unit: 8px`. Deklarasi yang tepat adalah …
   - A. `padding: calc(var(--space-unit) * 3);`
   - B. `padding: calc(var(--space-unit) + 3);`
   - C. `padding: var(--space-unit) * 3;`
   - D. `padding: calc(var(--space-unit) * 3px);`

6. Judul hero Tokosaya memakai `font-size: clamp(2.25rem, 5vw, 3rem);` dengan basis 16px. Ketika jendela browser diperlebar menjadi 800px, ukuran font yang dipakai adalah …
   - A. 36px
   - B. 40px
   - C. 48px
   - D. 64px

7. Sebuah paragraf kartu produk memakai `font-size: 1.25rem` dan `line-height: 1.6`. Tinggi satu baris teks yang dihasilkan pada basis 16px adalah …
   - A. 20px
   - B. 26px
   - C. 32px
   - D. 36px

8. Menurut tabel kontras pada bab ini, pasangan warna berikut yang gagal ambang WCAG AA (4,5:1) untuk teks berukuran kecil adalah …
   - A. `#334155` di atas `#F8FAFC`
   - B. putih `#FFFFFF` di atas `#4F46E5`
   - C. `#1E293B` di atas `#F59E0B`
   - D. `#16A34A` di atas putih

9. Token bayangan kartu Tokosaya ditulis `--shadow-card: 0 8px 24px rgba(15, 23, 42, 0.08);`. Pernyataan yang benar tentang nilai tersebut adalah …
   - A. offset vertikal 8px, blur 24px, warna hitam-kebiru bertembus pandang 8%
   - B. offset horizontal 8px, blur 24px, warna biru pekat tanpa tembus pandang
   - C. spread 8px, offset vertikal 24px, warna abu-abu penuh
   - D. offset vertikal 24px, blur 8px, warna indigo transparan

10. Badge "Baru" Tokosaya memakai pola tint: warna indigo dibawa oleh latar bertembus pandang 12%, sedangkan teksnya tetap gelap. Deklarasi latar yang tepat adalah …
   - A. `background-color: rgba(79, 70, 229, 0.12);`
   - B. `background-color: rgb(79, 70, 229, 12);`
   - C. `background-color: #4F46E5 12%;`
   - D. `background-color: var(--clr-primary); opacity: 0.12;`

11. Perhatikan potongan markup dan gaya berikut.

```html
<main class="produk-panel">
  <p>Semua warna dikendalikan oleh token.</p>
  <article style="color: var(--clr-primary);">
    <h3>Keyboard Mekanis KX-210</h3>
    <p>Keyboard mekanis 87 tombol dengan switch biru.</p>
  </article>
</main>
```

```css
html {
  color: var(--clr-body);
}

h1, h2, h3 {
  color: var(--clr-dark);
}
```

   Pernyataan yang benar tentang warna teks akhir di dalam `<article>` adalah …
   - A. seluruh teks di dalam `<article>` menjadi indigo, termasuk `h3`
   - B. paragraf di dalam `<article>` menjadi indigo, sedangkan `h3` tetap `--clr-dark` karena warnanya diatur langsung oleh stylesheet
   - C. seluruh teks menjadi `--clr-dark` karena selector `h3` lebih spesifik daripada gaya inline
   - D. paragraf menjadi `--clr-body` karena properti `color` tidak diwariskan

12. Halaman sudah memuat `css/style.css` dan di dalamnya tertulis `h1, h2, h3 { font-family: 'Poppins', sans-serif; }`, tetapi judul tetap tampil memakai font sistem. Langkah pemeriksaan pertama yang paling tepat adalah …
   - A. mengganti kata `sans-serif` menjadi `serif` supaya perbedaan font lebih mudah terlihat
   - B. menambahkan `!important` pada deklarasi `font-family` judul
   - C. memeriksa tiga tag `<link>` Google Fonts: kecocokan URL huruf demi huruf, keberadaannya di dalam `head`, dan pesan gagal muat di Console atau Network
   - D. mengubah `font-size` judul karena ukuran huruf memengaruhi keberhasilan pemuatan font

13. Hero Tokosaya memakai `linear-gradient(to bottom right, var(--clr-primary), var(--clr-primary-dark))` dengan teks putih. Desainer mengusulkan mengganti ujung gradien dengan amber terang agar hero terlihat lebih hidup. Tanggapan yang paling tepat adalah …
   - A. menerima usulan karena amber adalah warna aksen resmi Tokosaya
   - B. menolak gradien sepenuhnya dan mengganti latar hero dengan amber solid
   - C. menerima usulan dengan catatan warna gradien dipergelap atau ditambah lapisan gelap di belakang teks agar kontras tetap di atas 4,5:1
   - D. menerima usulan lalu memindahkan seluruh teks hero ke luar area gradien

14. Kamu mengaudit `css/style.css` dan memilah nilai yang layak menjadi design token. Nilai yang paling tepat **tidak** dijadikan token adalah …
   - A. warna aksen amber `#F59E0B` beserta varian gelapnya
   - B. putih `#FFFFFF` yang hanya dipakai sekali untuk teks di atas gradien hero
   - C. keluarga font heading dan font body
   - D. `--radius` 12px dan `--shadow-card`

15. Kamu membuat badge baru "Stok Terbatas" untuk kartu produk Tokosaya. Sesuai pola badge semantik bab ini — warna semantik dibawa latar tint, teks tetap gelap — kombinasi deklarasi yang tepat adalah …
   - A. `background-color: var(--clr-danger); color: #FFFFFF;`
   - B. `background-color: var(--clr-bg); color: var(--clr-danger);`
   - C. `background-color: rgba(220, 38, 38, 0.12); color: var(--clr-danger);`
   - D. `background-color: rgba(220, 38, 38, 0.12); color: var(--clr-body);`

---

## Bab 05 — CSS Box Model dan Layout

**Pilihan Ganda (15 soal)**

1. Ruang di antara konten dan garis tepi elemen, yang ikut memakai warna latar serta memperluas area sentuh elemen, disebut ...
   - A. margin
   - B. border
   - C. gap
   - D. padding

2. Dua elemen block bertetangga: elemen atas memakai `margin-bottom: 24px`, elemen bawah memakai `margin-top: 40px`. Jarak vertikal yang tampil di layar adalah ...
   - A. 40 px, karena margin vertikal dua blok bertetangga runtuh ke nilai terbesar
   - B. 64 px, karena kedua margin dijumlahkan
   - C. 24 px, karena margin atas selalu diabaikan
   - D. 16 px, karena yang dipakai adalah selisih keduanya

3. Kelompok elemen yang secara bawaan (tanpa CSS tambahan) berperilaku `block` adalah ...
   - A. p, div, ul, dan h1–h6
   - B. span, a, dan strong
   - C. img dan input, karena keduanya menerima `width` dan `height`
   - D. em, b, dan i

4. Perhatikan deklarasi berikut.

```css
.panel {
  width: 320px;
  padding: 24px;
  border: 4px solid #4F46E5;
  box-sizing: border-box;
}
```

Lebar area konten di dalam panel tersebut adalah ...
   - A. 320 px
   - B. 296 px
   - C. 288 px
   - D. 264 px

5. Pada proyek Tokosaya, wadah deret kartu `.daftar-produk` diberi `font-size: 0`, sedangkan setiap `.produk-card` diberi `font-size` eksplisit. Tujuan aturan itu adalah ...
   - A. memadatkan teks deskripsi supaya kartu lebih pendek
   - B. menghilangkan celah spasi antarkartu yang berasal dari whitespace antar tag HTML
   - C. menyeragamkan jarak antarkartu menjadi 8 px
   - D. mencegah kartu menyusut ketika layar bertambah sempit

6. Gambar produk diletakkan di dalam `.produk-media` yang mengikuti lengkung `border-radius` kartu, tetapi sudut gambar tetap tampak tajam. Deklarasi yang menambahkan pemotongan agar gambar ikut melengkung adalah ...
   - A. `.produk-media { overflow: hidden; }`
   - B. `.produk-media { display: block; }`
   - C. `.produk-media { z-index: 2; }`
   - D. `.produk-media { max-width: 100%; }`

7. Sebuah kolom sempit harus menampilkan nama berkas `laporan-sistem-akademik-tahun-akademik-2025-2026-final-revisi.pdf`. Supaya kata tunggal yang sangat panjang tidak memaksa panel melebar, properti yang paling tepat adalah ...
   - A. `white-space: nowrap`
   - B. `overflow-wrap: break-word`
   - C. `text-overflow: ellipsis` tanpa properti pendamping
   - D. `overflow: visible`

8. Tombol bantuan pada halaman pengaturan harus tetap terlihat di sudut kanan bawah jendela meskipun halaman digulir jauh ke bawah. Nilai `position` yang tepat untuk tombol itu adalah ...
   - A. `static`
   - B. `relative`
   - C. `absolute`
   - D. `fixed`

9. Header kolom tabel presensi ditulis `position: sticky; top: 0;` dan diberi `background-color` solid. Alasan pemberian latar solid adalah ...
   - A. syarat teknis agar `position: sticky` aktif di browser modern
   - B. agar tinggi baris header tidak ikut bertambah
   - C. agar baris data yang tergulir di belakang header tidak tembus terlihat
   - D. agar `z-index` header otomatis naik satu tingkat

10. Deretan kartu produk tampak "bergerigi": kartu pertama lebih tinggi sehingga tepi atas kartu-kartu berikutnya tidak sejajar. Perbaikan yang sesuai pola proyek adalah ...
   - A. memberi `display: block` pada `.produk-card`
   - B. memberi `overflow: hidden` pada `.daftar-produk`
   - C. memberi `vertical-align: top` pada `.produk-card`
   - D. memberi `font-size: 0` pada `.produk-card`

11. Kamu harus membuat deretan chip kategori yang tetap mengalir dalam baris teks, tetapi menerima padding, latar, dan radius penuh. Karena proyek pada bab ini belum memakai Flexbox, nilai `display` yang paling tepat untuk setiap chip adalah ...
   - A. `block`
   - B. `inline`
   - C. `inline-block`
   - D. `table-cell`

12. Mockup menetapkan jarak antarkartu 30 px, sedangkan proyek Tokosaya memakai skala jarak 8/16/24/32/48/64. Keputusan yang paling sesuai disiplin skala adalah ...
   - A. memakai 32 px, langkah skala terdekat dari 30 px
   - B. memakai 30 px apa adanya supaya sesuai mockup
   - C. memakai 24 px karena selalu dipilih langkah terkecil
   - D. menambahkan langkah 30 px ke daftar token proyek

13. Kriteria WCAG 2.2 *Target Size (Minimum)* (2.5.8) menetapkan ukuran minimal area sasaran yang dapat disentuh sebesar ...
   - A. 16 × 16 px
   - B. 24 × 24 px
   - C. 44 × 44 px
   - D. 48 × 48 px

14. Bandingkan dua cara menyembunyikan elemen: `display: none` dan `visibility: hidden`. Perbedaan perilaku keduanya adalah ...
   - A. keduanya menyembunyikan elemen dari layar dan tetap menyisakan ruang di alur dokumen
   - B. `visibility: hidden` mengeluarkan elemen dari alur dokumen, sedangkan `display: none` hanya menyembunyikannya secara visual
   - C. `display: none` mengeluarkan elemen dari layar dan dari alur dokumen, sedangkan `visibility: hidden` hanya menyembunyikan secara visual sehingga ruangnya tetap ada
   - D. keduanya identik; perbedaannya hanya pada dukungan versi browser

15. Kartu produk Tokosaya harus tetap berukuran 280 px di layar lebar, tetapi tidak boleh memunculkan bilah gulir horizontal saat jendela dipersempit ke 360 px. Deklarasi `.produk-card` yang paling tepat adalah ...
   - A. `width: 280px;` saja
   - B. `width: 280px; max-width: 100%;`
   - C. `width: 100%; min-width: 280px;`
   - D. `min-width: 280px; max-width: 280px;`

---

## Bab 06 — Flexbox untuk Web Layout

**Pilihan Ganda (15 soal)**

1. Properti yang ditulis pada *flex container* untuk menentukan arah *main axis* adalah ...
   - A. `align-items`
   - B. `flex-direction`
   - C. `justify-content`
   - D. `flex-wrap`

2. Nilai `flex-wrap` yang mengizinkan item turun ke baris baru dengan urutan baris terbalik adalah ...
   - A. `nowrap`
   - B. `wrap`
   - C. `column-reverse`
   - D. `wrap-reverse`

3. Tiga chip berdiri di dalam wadah yang lebih lebar daripada total lebarnya. Nilai `justify-content` yang membuat **semua** celah — termasuk dua celah di tepi kiri dan kanan — sama besar adalah ...
   - A. `space-evenly`
   - B. `space-around`
   - C. `space-between`
   - D. `flex-start`

4. Perhatikan aturan baris flex berikut.

```css
.baris { display: flex; }
.kolom { flex: 1 1 160px; }
.kolom-unggulan { flex-grow: 2; }
```

Makna perubahan `flex-grow: 2` pada `.kolom-unggulan` adalah ...
   - A. kartu itu selalu dua kali lebih lebar daripada kartu `flex: 1` di layar
   - B. kartu itu menyusut dua kali lebih cepat saat ruang berkurang
   - C. kartu itu memperoleh dua kali porsi dari sisa ruang yang dibagikan setelah basis semua item terhitung
   - D. kartu itu didahulukan dua tingkat pada urutan visual

5. Pada kartu produk Tokosaya, `.produk-harga` diberi `margin-top: auto` di dalam kartu yang bertipe `display: flex; flex-direction: column;`. Efek deklarasi itu adalah ...
   - A. harga digeser ke tengah kartu secara horizontal
   - B. sisa ruang vertikal diserap margin sehingga harga menempel dasar kartu dan sejajar antarkartu
   - C. jarak antar-item dari `gap` dihapus khusus untuk elemen harga
   - D. harga dilekatkan pada elemen di atasnya sehingga tidak bisa diberi jarak

6. Komponen kontak pada footer memakai pola *media object*: ikon 40 × 40 px di kiri, teks di kanan. Agar teks memakai seluruh ruang sisa di samping ikon, deklarasi yang tepat adalah ...
   - A. `flex: 1` pada elemen teks
   - B. `flex: 1` pada elemen ikon
   - C. `justify-content: flex-end` pada wadah
   - D. `flex-basis: 40px` pada elemen teks

7. Seorang mahasiswa menulis `justify-content: space-between` pada setiap `.produk-card`, bukan pada `.produk-row`, dan heran karena tidak ada efek apa pun. Penyebabnya adalah ...
   - A. `justify-content` hanya bekerja kalau item juga diberi `flex: 1`
   - B. `justify-content` hanya bekerja saat `flex-wrap` aktif
   - C. `justify-content` adalah properti *container*; pada anak (flex item) nilainya tidak berlaku
   - D. `justify-content` menggeser item pada *cross axis*, bukan *main axis*

8. Hero Tokosaya memakai `display: flex; flex-direction: column;`. Properti yang menengahkan judul, subjudul, dan CTA secara horizontal pada pola tersebut adalah ...
   - A. `justify-content: center`
   - B. `text-align: center`
   - C. `flex: 1`
   - D. `align-items: center`

9. Baris kartu produk memakai `gap: 24px` dan `.produk-card { flex: 0 1 250px; }`. Pada jendela 1024 px dengan padding kiri-kanan 24 px (lebar konten baris 976 px), jumlah kartu yang muat berdampingan adalah ...
   - A. 3 kartu
   - B. 2 kartu
   - C. 4 kartu
   - D. 6 kartu

10. Ketika `flex-wrap: wrap` aktif dan kamu perlu jarak antar-baris yang berbeda dari jarak antarkolom, properti yang dipakai adalah ...
   - A. `gap` saja
   - B. `row-gap` dan `column-gap`
   - C. `align-self`
   - D. `justify-content`

11. Untuk kebutuhan berikut, kasus yang lebih tepat diserahkan ke CSS Grid daripada Flexbox adalah ...
   - A. deret chip filter yang panjangnya alami dan boleh menekuk
   - B. baris kartu yang boleh mengalir lalu mengganti basisnya saat layar menyempit
   - C. katalog dengan jumlah kolom pasti yang harus rata antar-baris
   - D. menengahkan satu gugus konten di tengah halaman

12. Nilai default properti `order` pada setiap flex item adalah ...
   - A. 10
   - B. 1
   - C. `auto`
   - D. 0

13. `.hero-subtitle` di proyek Tokosaya diberi `max-width: 640px`. Alasan utamanya adalah ...
   - A. menjaga panjang baris teks agar tidak membentang melelahkan mata di monitor lebar
   - B. mencegah subjudul menutupi tombol CTA di bawahnya
   - C. agar teks subjudul terbaca oleh *screen reader*
   - D. agar subjudul otomatis terbagi menjadi dua kolom

14. Baris kartu produk tampak "bergelombang": kartu tidak sama tinggi dan harga tidak sejajar. Ditemukan aturan `.produk-row { display: flex; align-items: center; }`. Perbaikan yang tepat adalah ...
   - A. memberi `height` tetap pada setiap `.produk-card`
   - B. menghapus `align-items: center` (kembali ke `stretch`) dan memberi `margin-top: auto` pada `.produk-harga`
   - C. mengubah `flex-wrap` menjadi `nowrap`
   - D. memberi `align-self: center` pada semua kartu

15. Hero Tokosaya sengaja hanya memuat satu CTA utama "Lihat Katalog"; link tambahan, jika perlu, ditampilkan sebagai link teks biasa. Alasannya adalah ...
   - A. hero hanya boleh memuat satu elemen agar validasi HTML lolos
   - B. tombol kedua tidak dapat memakai token warna proyek
   - C. di layar kecil satu tindakan yang jelas lebih mudah dipahami daripada beberapa tombol yang berebut perhatian
   - D. hanya satu elemen yang boleh memakai `flex: 1` di dalam sebuah flex container

---

## Bab 07 — CSS Grid dan Responsive Web Design

**Pilihan Ganda (15 soal)**

1. Dalam istilah CSS Grid, **grid track** adalah ....
   - A. perpotongan satu kolom dan satu baris tempat satu butir grid diletakkan
   - B. jalur atau lintasan kolom maupun baris di dalam kerangka grid
   - C. gabungan beberapa sel berbentuk persegi yang bisa diberi nama
   - D. jarak antar jalur grid yang diatur oleh properti gap

2. Pola `repeat(auto-fit, minmax(220px, 1fr))` pada wadah galeri berperilaku ....
   - A. browser menaruh kolom sebanyak yang muat dengan lebar minimal 220 px, lalu menambah kolom begitu ruang melebar, tanpa satu pun media query
   - B. browser mematok satu kolom selebar 220 px pada semua ukuran layar
   - C. browser membatasi lebar setiap kartu maksimal 220 px sehingga kartu makin sempit di monitor besar
   - D. browser membentuk 220 kolom yang masing-masing menerima satu porsi ruang sisa

3. Dua aturan penulisan `grid-template-areas` yang wajib dipatuhi agar browser berhasil membentuk denah adalah ....
   - A. setiap baris kata wajib diapit tanda petik, sedangkan jumlah kolom antar baris boleh berbeda
   - B. tanda petik hanya diperlukan pada baris pertama denah, sedangkan jumlah kolom wajib sama
   - C. setiap baris kata wajib dipisahkan tanda koma, sedangkan jumlah kolom wajib sama
   - D. setiap baris kata wajib diapit tanda petik dan jumlah kolom pada setiap baris wajib sama

4. Dalam desain web responsif, **breakpoint** paling tepat dipahami sebagai ....
   - A. daftar merek dan tipe perangkat yang paling banyak dipakai pengguna tahun ini
   - B. jumlah maksimum media query yang boleh ditulis pada satu file CSS
   - C. nilai lebar viewport tempat serangkaian gaya berubah agar halaman tetap layak dibaca
   - D. ukuran tetap 992 px yang wajib dipakai seluruh halaman dashboard

5. Sebuah wadah memakai `grid-template-columns: 240px 1fr 2fr;`. Pernyataan yang paling tepat tentang pembagian ruangnya adalah ....
   - A. kolom pertama selebar tetap 240 px, sedangkan ruang sisa dibagi ke kolom kedua dan ketiga dengan porsi 1 : 2
   - B. kolom pertama 240 px, kolom kedua 1 px, dan kolom ketiga 2 px
   - C. ketiga kolom sama lebar karena template memuat tiga nilai
   - D. kolom kedua dan ketiga masing-masing menerima 240 px sehingga lebarnya identik

6. Pada sebuah kartu dashboard tertulis `grid-column: 2 / -1;`. Pernyataan yang tepat adalah ....
   - A. kartu hanya menempati kolom kedua karena garis akhir bernilai negatif tidak dihitung
   - B. kartu mengulang isinya mulai kolom kedua sampai kolom terakhir
   - C. kartu dibatasi dua kolom berturut-turut mulai garis 2
   - D. kartu membentang dari garis kolom 2 sampai garis paling ujung, sehingga praktis ketika jumlah kolom berubah antar perangkat

7. Perhatikan blok CSS gambar katalog berikut.

```css
.katalog-grid img {
  width: 100%;
  height: auto;
  display: block;
}
```

Penjelasan yang paling tepat untuk blok di atas adalah ....
   - A. gambar dipatok pada lebar aslinya dan tingginya mengikuti wadah sehingga tetap terpotong
   - B. gambar tidak pernah melebihi lebar wadah, proporsinya terjaga, dan celah kecil di bawah gambar hilang karena perilaku inline-nya dihilangkan
   - C. gambar selalu melebar 100% dari viewport, bukan dari wadahnya, sehingga halaman ikut menggulir
   - D. gambar kehilangan proporsi karena `height: auto` menyesuaikan tinggi baris teks di sekitarnya

8. Perhatikan blok CSS berikut.

```css
.katalog-judul { font-size: clamp(1rem, 0.5rem + 2vw, 2rem); }
```

Kalau 1rem dianggap sama dengan 16 px, ukuran huruf yang benar-benar terpakai pada viewport 800 px adalah ....
   - A. 8 px, nilai dari suku 0.5rem
   - B. 16 px, nilai argumen minimum
   - C. 24 px, hasil hitungan suku tengah yang masih berada di antara kedua batas
   - D. 32 px, nilai argumen maksimum

9. Kartu statistik pada `admin.html` tetap menumpuk satu kolom walaupun jendela browser sudah dilebarkan melewati 576 px. Gaya dasar sudah memuat `display: grid`, dan blok media query-nya ditulis seperti berikut.

```css
@media (min-width: 576) {
  .stat-kartu { grid-template-columns: repeat(2, 1fr); }
}
```

Penyebab paling mungkin beserta perbaikannya adalah ....
   - A. satuan `px` hilang pada nilai kueri sehingga kondisi tidak pernah terpenuhi; perbaiki menjadi `min-width: 576px`
   - B. fungsi `repeat()` tidak boleh dipakai di dalam media query sehingga aturannya diabaikan; ganti menjadi `1fr 1fr`
   - C. kelas `.stat-kartu` harus dideklarasikan ulang `display: grid` di dalam blok media query; tambahkan baris itu
   - D. token warna belum termuat sehingga browser mengabaikan seluruh aturan grid; pindahkan blok `:root` ke `admin.css`

10. Pada 1200 px, `.stat-kartu` memakai `grid-template-columns: repeat(4, 1fr)`. Pemilik Tokosaya lalu meminta dua kartu ringkasan tambahan sehingga totalnya enam kartu. Susunan yang terbentuk pada 1200 px adalah ....
   - A. keenam kartu menumpuk vertikal karena jumlah kartu melampaui jumlah kolom template
   - B. grid gagal dibentuk dan seluruh kartu keluar dari wadah
   - C. keenam kartu dipaksa muat dalam satu baris dengan lebar yang mengecil tidak beraturan
   - D. baris pertama berisi empat kartu dan dua kartu sisanya mengalir ke baris kedua mengikuti penempatan otomatis

11. Pola kode yang **paling sesuai** dengan strategi mobile-first untuk menaikkan panel ringkasan dari satu kolom menjadi tiga kolom mulai 992 px adalah ....
   - A. `.panel-ringkas { grid-template-columns: repeat(3, 1fr); }` lalu `@media (max-width: 991px) { .panel-ringkas { grid-template-columns: 1fr; } }`
   - B. `.panel-ringkas { grid-template-columns: 1fr; }` lalu `@media (min-width: 992px) { .panel-ringkas { grid-template-columns: repeat(3, 1fr); } }`
   - C. `@media (min-width: 992px) { .panel-ringkas { grid-template-columns: 1fr; } }` lalu `.panel-ringkas { grid-template-columns: repeat(3, 1fr); }`
   - D. `.panel-ringkas { grid-template-columns: 1fr; }` lalu `@media (max-width: 992px) { .panel-ringkas { grid-template-columns: repeat(3, 1fr); } }`

12. Diukur pada 375 px, halaman `admin.html` menampilkan pengguliran horizontal pada `<body>` sehingga seluruh antarmuka tergeser. Tabel sudah dibungkus `.tabel-scroll` yang memuat `overflow-x: auto`, dan tabel memakai `min-width: 640px`. Langkah diagnosis paling tepat untuk sisa masalahnya adalah ....
   - A. menambahkan `overflow-x: hidden` pada `body` agar gejalanya hilang, lalu melanjutkan pekerjaan
   - B. menghapus `.tabel-scroll` lalu menguji kembali halaman tanpa tabel
   - C. memakai device toolbar pada 375 px, mengenali elemen yang melebar dari viewport saat halaman digulir, lalu memeriksa lebar terhitung elemen itu di panel Elements
   - D. mengganti seluruh satuan px pada file CSS menjadi persen agar tidak ada elemen yang melebihi layar

13. Pemilik Tokosaya meminta katalog produknya persis dua kolom di tablet dan tiga kolom di desktop, tanpa penambahan atau pengurangan kolom ketika jendela dilebarkan. Pola yang paling tepat dipakai adalah ....
   - A. `repeat(auto-fit, minmax(220px, 1fr))` karena jumlah kolom menyesuaikan ruang secara otomatis
   - B. media query eksplisit `min-width` dengan `repeat(2, 1fr)` di 768 px dan `repeat(3, 1fr)` di 992 px
   - C. `grid-template-columns: repeat(3, 220px)` pada gaya dasar agar selalu tiga kolom di semua layar
   - D. `grid-auto-flow: column` pada wadah agar seluruh kartu mengalir ke samping dalam satu baris

14. Sebuah halaman dashboard harus dipastikan bebas dari *layout trap*. Rangkaian pengujian yang paling sesuai dengan praktik bab ini adalah ....
   - A. menguji pada tiga merek ponsel berbeda saja agar hasilnya nyata
   - B. menguji satu lebar saja, yaitu 375 px, karena mayoritas pengguna memakai ponsel
   - C. menguji pada 1200 px dan memastikan tampilan desktop rapi karena halaman dibuka di lab
   - D. menyeret lebar dari 320 px sampai 1200 px pada mode Responsive device toolbar untuk menemukan titik layout rusak, lalu memeriksa 375, 576, 768, 992, dan 1200 px

15. Seorang mahasiswa menulis empat blok media query ber-*specificity* setara dengan urutan 992 px, 576 px, 1200 px, lalu 768 px; semuanya memakai `min-width` dan menyetel properti yang sama. Pada viewport 1300 px, hasil yang terlihat adalah ....
   - A. untuk properti yang muncul di lebih dari satu blok, nilai dari blok terakhir (768 px) yang menang, karena keempat blok sama-sama berlaku dan kaskade memilih aturan yang ditulis paling akhir
   - B. nilai dari blok 1200 px yang menang karena angka ambangnya paling besar
   - C. nilai dari blok 992 px yang menang karena ditulis paling awal dan berlaku sebagai fondasi
   - D. browser menolak seluruh blok karena urutan media query tidak menaik sehingga halaman kembali ke gaya dasar

---

## Bab 09 — Pengenalan Bootstrap 5

**Pilihan Ganda (15 soal)**

1. Menurut arsitektur Bootstrap 5.3, navbar, kartu, badge, dan alert termasuk kelompok fasilitas ....
   - A. Layout
   - B. Utilities
   - C. Components
   - D. Helpers

2. Cara yang benar memasang Bootstrap Icons 1.11.3 pada starter template Tokosaya adalah ....
   - A. menambahkan link stylesheet tersendiri, karena ikon tidak termuat di dalam file CSS inti Bootstrap
   - B. menambahkan file bootstrap.bundle agar kelas ikon aktif
   - C. memanggil kelas `bi bi-cart3` langsung, karena paket ikon sudah menyatu di dalam `bootstrap.min.css`
   - D. mendaftarkan font ikon lewat Google Fonts bersama Poppins dan Inter

3. Pada `css/style.css` proyek `tokosaya-bootstrap/` ditulis baris `--bs-primary-rgb: 79, 70, 229;`. Tujuan baris itu adalah ....
   - A. mendefinisikan ulang token `--clr-primary` milik identitas Tokosaya
   - B. menyelaraskan kelas warna bawaan Bootstrap yang mengonsumsi variabel tema tersebut (`text-primary`, `bg-primary`, badge) ke indigo Tokosaya
   - C. memberi tahu file bootstrap.bundle agar memakai palet Tokosaya
   - D. mengganti warna tombol `.btn-primary` secara langsung di dalam file pustaka

4. Menurut Bootstrap 5.3, lebar maksimum `.container` pada viewport 1400 px adalah ....
   - A. 960 px
   - B. 1140 px
   - C. 1200 px
   - D. 1320 px

5. Perhatikan kelas `p-lg-4`. Makna kelas itu adalah ....
   - A. padding keempat sisi skala 4 yang berlaku mulai breakpoint `lg` (992 px) ke atas
   - B. padding kiri-kanan skala 4 yang hanya berlaku di bawah 992 px
   - C. padding atas-bawah skala 4 yang berlaku mulai breakpoint `lg`
   - D. padding skala 4 yang baru diterapkan setelah JavaScript Bootstrap dimuat pada 992 px

6. Grid produk Tokosaya memuat delapan kartu; setiap kartu memakai kelas `col-12 col-md-6 col-lg-3` dan wadahnya memakai `row g-4`. Pada viewport 992 px, susunan yang terbentuk adalah ....
   - A. delapan baris dengan satu kartu per baris
   - B. dua baris dengan empat kartu per baris
   - C. satu baris dengan delapan kartu yang lebarnya mengecil tak beraturan
   - D. tiga kartu per baris sehingga tersisa dua kartu pada baris terakhir

7. Kelas `mx-auto` pada sebuah elemen blok berguna untuk ....
   - A. menghapus seluruh margin sehingga elemen menempel pada tepi wadah
   - B. memberi jarak otomatis atas-bawah sehingga elemen turun ke dasar wadah
   - C. memberi margin kiri dan kanan otomatis sehingga elemen tampil terletak di tengah
   - D. mengunci lebar elemen menjadi 100% lebar container

8. Kelompok fasilitas **Content** pada arsitektur Bootstrap 5.3 memuat ....
   - A. container dan grid system
   - B. navbar, kartu, badge, dan alert
   - C. kelas satu-tujuan seperti `mb-3` dan `text-center`
   - D. reboot (normalisasi gaya bawaan browser), tipografi, tabel, gambar, dan kode

9. Seorang mahasiswa mengeluh kartu produknya tetap bertumpuk penuh di layar desktop walaupun sudah diberi `col-lg-3`. Setelah diperiksa, kelas kolom itu ternyata dipasang pada elemen yang menjadi anak langsung `.container`, bukan `.row`. Alasan kegagalan layout tersebut adalah ....
   - A. kolom kehilangan kalkulasi gutter dan penyelajanan, sebab padding kolom tidak lagi dikompensasi margin negatif baris
   - B. kolom otomatis dinonaktifkan browser ketika elemen induknya bukan `.row`
   - C. `.container` menambahkan gutter ganda sehingga kolom melebar melebihi baris
   - D. `meta viewport` diabaikan browser selama struktur row → col belum lengkap

10. Halaman `index.html` Tokosaya tampil polos: huruf kembali ke fallback, tombol uji tidak bergaya, dan kolom kartu tidak berjajar, padahal markup serta nama kelas sudah benar. Langkah diagnosis paling tepat adalah ....
   - A. menambahkan kembali `bootstrap.bundle`, karena seluruh gaya komponen bergantung padanya
   - B. memeriksa `meta viewport`, sebab tanpa tag itu semua kelas gaya tidak akan termuat
   - C. membuka panel Network DevTools untuk memastikan kedua link CDN CSS berstatus sukses (200) dan berada sebelum `css/style.css`
   - D. mengunduh ZIP Bootstrap lalu menyalinnya ke folder proyek sebagai pengganti CDN

11. Pada section keunggulan Tokosaya, judul kartu ditulis sebagai `<h3 class="h5">`. Alasan pemakaian pola itu adalah ....
   - A. karena elemen `div` tidak boleh memuat kelas ukuran milik Bootstrap
   - B. karena `h3` memiliki specificity lebih tinggi sehingga warna token pasti menang
   - C. karena kelas `h5` otomatis menambahkan struktur kepala yang hilang pada `div`
   - D. karena struktur kepala yang semantik tetap terbaca pembaca layar, sedangkan kelas ukuran hanya mengubah tampilan visualnya

12. Setelah `--bs-primary-rgb` disesuaikan ke nilai indigo Tokosaya, kelas `text-primary` dan badge `text-bg-primary` ikut berpindah warna, tetapi tombol bawaan `.btn-primary` tetap biru. Evaluasi yang paling tepat adalah ....
   - A. tombol akan berubah warna hanya bila file `bootstrap.bundle` ikut dimuat
   - B. warna tombol bawaan dikomposisi statis di dalam file pustaka, sehingga identitas tombol dibentuk kelas kustom (`btn-tokosaya`) yang disandingkan dengan kelas `btn`
   - C. variabel `--bs-primary-rgb` hanya berlaku untuk kelas berbasis teks, tidak untuk latar maupun tombol
   - D. tombol bawaan memakai variabel tema yang hanya bisa diubah dengan mengedit file `bootstrap.min.css`

13. Pada landing page Tokosaya, rupa kartu produk dan rupa harga muncul berulang pada delapan kartu. Keputusan yang paling sesuai dengan aturan pembagian utility dan kelas kustom pada bab ini adalah ....
   - A. mengangkatnya menjadi kelas kustom berpola blok-elemen (`produk-card`, `produk-harga`) di `css/style.css`, sehingga satu perubahan memperbarui seluruh tempat pemakaiannya
   - B. menempelkan belasan kelas utility pada setiap kartu karena cara itu paling ringkas dibaca
   - C. memakai atribut `style` pada tiap elemen kartu agar tidak ada baris baru di `css/style.css`
   - D. menimpa kelas `.card` dan `.card-body` milik Bootstrap langsung di dalam file pustaka

14. Sebuah UMKM memesan satu landing page kampanye seni berisi satu halaman, desainnya sangat khas dan hampir tidak ada pola yang berulang, serta tenggatnya longgar. Keputusan teknologi paling tepat menurut kerangka bahasan bab ini adalah ....
   - A. Bootstrap dengan overlay token, karena pustaka selalu mempercepat pekerjaan
   - B. Bootstrap plus `bootstrap.bundle` agar komponennya hidup
   - C. Tailwind CSS karena markup wajib memuat banyak kelas atomik
   - D. HTML/CSS murni berbasis design token, karena polanya tidak berulang dan identitas khas justru jadi prioritas

15. Portal akademik dengan 40 tampilan serupa harus dikerjakan tiga anggota tim yang masih pemula dalam tiga minggu, sementara warna dan huruf identitas kampus wajib dipertahankan. Keputusan dan alasan yang paling sesuai dengan bab ini adalah ....
   - A. Tailwind CSS, dengan alasan kelas atomik menjamin markup yang ringkas pada proyek besar
   - B. HTML/CSS murni dari nol, dengan alasan identitas pasti terjaga tanpa perlu belajar pustaka
   - C. Bootstrap 5.3.3 via CDN plus lapisan design token kustom, dengan alasan pola tampilan berulang, tenggat ketat, kurva awal yang landai, dan identitas dijaga lapisan overlay
   - D. Bootstrap tanpa lapisan kustom, dengan alasan warna bawaan pustaka sudah cukup konsisten

---

## Bab 10 — Komponen Bootstrap

**Pilihan Ganda (15 soal)**

1. Komponen antarmuka (*component*) di Bootstrap adalah potongan antarmuka yang sudah dikemas lengkap. Manakah yang paling tepat menggambarkan isi kemasan itu?
   - A. Daftar tautan dokumentasi resmi beserta nomor versinya
   - B. Struktur *markup* standar, kelas-kelas gaya, dan aturan tampilan di berbagai ukuran layar
   - C. Berkas JavaScript penggerak interaksi beserta berkas konfigurasi temanya
   - D. Kumpulan gambar produk dan ikon siap pakai yang tinggal disisipkan
2. Bab ini menyebut tiga alasan komponen siap pakai menekan biaya desain. Manakah pernyataan yang termasuk ketiganya?
   - A. Seluruh CSS kustom boleh dihapus dari proyek
   - B. Komponen menggantikan peran server dalam menyimpan data produk
   - C. Kartu di halaman berbeda otomatis mirip karena memakai kelas yang sama
   - D. Halaman tetap tampil utuh meski berkas CDN gagal dimuat
3. Tokosaya tidak memuat paket JavaScript Bootstrap sama sekali. Bagaimana menu `navbar-nav` yang ditulis tanpa tombol pembuka tampil pada lebar layar 480 piksel?
   - A. Menumpuk vertikal di bawah merek
   - B. Tetap mendatar berjajar ke kanan
   - C. Tersembunyi sampai tombol hamburger ditekan
   - D. Berubah menjadi daftar tarik-turun
4. Produk Speaker Bluetooth BT-5 berstatus "Stok Terbatas" pada katalog Tokosaya. Markup badge yang benar sekaligus sesuai makna semantiknya adalah …
   - A. `<span class="badge text-bg-warning">Stok Terbatas</span>`
   - B. `<span class="badge text-bg-primary">Stok Terbatas</span>`
   - C. `<span class="badge text-bg-success">Stok Terbatas</span>`
   - D. `<span class="badge text-bg-danger">Stok Terbatas</span>`
5. Empat berkas berikut ditulis di dalam `head`. Urutan yang benar agar aturan kustom Tokosaya berkesempatan menimpa gaya Bootstrap adalah …
   - A. `css/style.css`, Bootstrap 5.3.3 CSS, Bootstrap Icons 1.11.3, Google Fonts
   - B. Bootstrap 5.3.3 CSS, Bootstrap Icons 1.11.3, Google Fonts, `css/style.css`
   - C. Bootstrap Icons 1.11.3, `css/style.css`, Bootstrap 5.3.3 CSS, Google Fonts
   - D. Google Fonts, `css/style.css`, Bootstrap 5.3.3 CSS, Bootstrap Icons 1.11.3
6. Perhatikan potongan *navbar* berikut.

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand fw-semibold" href="index.html">Tokosaya</a>
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><a class="nav-link" href="index.html">Beranda</a></li>
      <li class="nav-item"><a class="nav-link active" aria-current="page" href="katalog.html">Katalog</a></li>
    </ul>
  </div>
</nav>
```

Susunan yang teramati pada lebar 1200 piksel adalah …
   - A. Merek di kiri, daftar menu berjajar mendatar di sisi kanan pada satu baris
   - B. Merek di atas, daftar menu menumpuk vertikal di bawahnya
   - C. Daftar menu di kiri, merek terdorong ke kanan
   - D. Merek tampil, tetapi daftar menu tidak terlihat karena tidak ada tombol pembuka
7. Pada *pagination*, Bootstrap menyarankan item berstatus aktif maupun `disabled` ditulis memakai elemen `span`, bukan `a`. Alasan yang paling tepat adalah …
   - A. elemen `a` tidak dapat diberi kelas `page-link`
   - B. elemen `span` membuat nomor halaman tampil lebih tebal
   - C. item aktif dan item `disabled` bukan tautan tujuan, jadi tidak pantas menjanjikan perpindahan halaman
   - D. elemen `a` hanya boleh dipakai di dalam komponen *navbar*
8. Pada contoh kartu produk Tokosaya, badge di baris pertama `card-body` diberi utilitas `align-self-start`. Manfaat kelas itu adalah …
   - A. memindahkan badge ke sudut kanan atas kartu
   - B. menyembunyikan badge sampai kartu diarahkan penunjuk tetikus
   - C. membuat badge melebar mengikuti lebar kartu
   - D. membuat badge hanya selebar isinya, tidak melar mengikuti lebar wadah flex
9. Perhatikan potongan *accordion* statis berikut.

```html
<div class="accordion-item">
  <h2 class="accordion-header">
    <button type="button" class="accordion-button collapsed">Apakah ada garansi produk?</button>
  </h2>
  <div class="accordion-collapse collapse">
    <div class="accordion-body">Garansi mengikuti ketentuan merek masing-masing produk.</div>
  </div>
</div>
```

Pada halaman yang tidak memuat paket JavaScript, keadaan panel itu beserta yang terjadi saat tombolnya diklik adalah …
   - A. panel terbuka dan klik menutupnya
   - B. panel tertutup dan tetap tertutup karena klik tidak mengubah apa pun
   - C. panel tertutup, tetapi klik membukanya karena itu efek CSS murni
   - D. panel tampil tanpa bingkai sebab kelas `collapse` tidak dikenali CSS
10. Katalog Tokosaya menyusun kartu produk lewat `row g-4` dan sel `col-*`, bukan lewat `card-group`. Alasan yang paling tepat untuk pilihan itu adalah …
   - A. `card-group` tidak mendukung gambar `card-img-top`
   - B. `card-group` hanya sanggup memuat tiga kartu sekaligus
   - C. `card-group` baru bekerja kalau paket JavaScript Bootstrap dimuat
   - D. `card-group` menempelkan kartu menjadi satu bingkai, sedangkan lewat grid jarak antarkartu bisa dikendalikan `g-4`
11. Sebuah item *list group* belum menampilkan status di sisi kanan seperti contoh bab ini.

```html
<ul class="list-group">
  <li class="list-group-item">
    <span>Keyboard Mekanis KX-210</span>
    <span class="badge text-bg-warning">Best Seller</span>
  </li>
</ul>
```

Kelas yang perlu ditambahkan pada elemen `li` agar isi kiri dan status kanan terpisah rapi adalah …
   - A. `d-grid gap-2`
   - B. `flex-row-reverse`
   - C. `d-flex justify-content-between align-items-center`
   - D. `position-absolute end-0`
12. Ikon pencarian pada bar penyaring katalog ingin dibuat lebih besar dan diwarnai indigo sesuai token proyek. Cara yang paling sesuai aturan pemakaian Bootstrap Icons adalah …
   - A. membuat berkas SVG baru berukuran besar
   - B. menuliskan `width` dan `height` *inline* pada elemen `<i>`
   - C. mengganti elemen `<i>` menjadi `<img>` berisi ikon
   - D. menaikkan ukuran teks wadahnya dengan kelas `fs-*` dan memberi warna dengan kelas `text-*`
13. Sebuah katalog memasang status "Terlambat" hanya sebagai ikon merah tanpa kata pendamping di ujung baris daftar buku. Evaluasi yang paling sesuai dengan ketentuan ikon dan badge pada bab ini adalah …
   - A. ganti ikon itu menjadi badge berwarna semantik (`text-bg-danger`) bertulis "Terlambat" agar maknanya tidak bergantung pada warna dan lambang saja
   - B. ikon merah sudah cukup karena warnanya mencolok dan menarik perhatian
   - C. ikon diperbesar dan dipindahkan ke sisi kanan baris supaya lebih terlihat
   - D. statusnya dihapus saja karena dapat menyinggung peminjam
14. Kamu merancang kartu ruang ujian untuk sistem informasi akademik. Syaratnya: foto ruang di tepi atas, badge status kapasitas, judul ruang, dan baris tombol yang tetap menempel dasar kartu walau nama ruangnya panjang-pendek. Kombinasi kelas yang tepat adalah …
   - A. `card-body` + `d-grid` + `text-end`
   - B. `card` + `card-img-top` + `card-body` + `align-self-start`
   - C. `card h-100` + `card-img-top` + `card-body d-flex flex-column` + `mt-auto` pada baris tombol
   - D. `card` + `card-group` + `card-subtitle` + `text-nowrap`
15. Alternatif statis yang dipakai buku ini agar panel menu tetap tampil tanpa JavaScript adalah …
   - A. membungkus daftar menu dengan `<div class="collapse show navbar-collapse">` sehingga panel terbuka permanen
   - B. menambahkan atribut `data-bs-toggle="collapse"` pada tautan menu
   - C. menyembunyikan panel dengan `d-none` lalu memunculkannya lewat `:hover`
   - D. memberi atribut `tabindex="-1"` pada panel menu

---

## Bab 11 — Form dan User Interface Design

**Pilihan Ganda (15 soal)**

1. Bab ini merumuskan empat prinsip desain form: satu kolom, label yang selalu terlihat, pengelompokan dan progres, serta tombol aksi yang jelas. Manakah pernyataan yang termasuk prinsip "tombol aksi yang jelas"?
   - A. Menampilkan sebanyak mungkin tombol berlabel "OK" agar pengguna cepat selesai
   - B. Satu tombol utama per halaman dengan label yang menyatakan akibatnya, misalnya "Kirim Pesan"
   - C. Memberi semua tombol kelas `btn-outline-secondary` supaya tampilannya seragam
   - D. Menyembunyikan tombol utama sampai seluruh medan terisi
2. Mengapa bab ini menyarankan medan disusun dalam satu kolom?
   - A. Mata membaca dengan melompat sedikit melintasi baris, dan di HP dua kolom membuat medan sempit serta salah ketik meningkat
   - B. Dua kolom hanya mungkin dibentuk dengan CSS Grid, bukan utilitas grid Bootstrap
   - C. Satu kolom memastikan *placeholder* bisa dipakai sebagai pengganti label
   - D. Satu kolom membuat pengguna tidak perlu menekan tombol Tab
3. Form pendaftaran ujian meminta mahasiswa memilih satu sesi ujian: pagi atau sore. Kombinasi elemen dan atribut yang tepat adalah …
   - A. Dua `checkbox` dengan nilai `name` berbeda, tanpa pembungkus kelompok
   - B. Satu `select` tanpa atribut `multiple` dengan dua `option` yang keduanya `selected`
   - C. Dua `input type="text"` dengan label berbeda untuk masing-masing sesi
   - D. Dua `input type="radio"` dengan nilai `name` yang sama di dalam satu `fieldset`
4. Pada halaman keranjang Tokosaya, pembeli yang memilih opsi "Ambil di Toko" mengisi medan Tanggal Pengambilan Barang. Agar browser menyediakan pemilih tanggal bawaan dan format isiannya seragam, atribut `type` yang paling tepat adalah …
   - A. `text`, supaya pembeli bebas menulis "besok" atau "5 Jan"
   - B. `search`
   - C. `date`
   - D. `password`
5. Kelas `form-text` dipakai untuk teks bantuan permanen di bawah medan. Supaya teks itu ikut dibacakan pembaca layar, medannya perlu dihubungkan dengan atribut …
   - A. `aria-describedby` yang menunjuk `id` teks bantuan
   - B. `aria-hidden`
   - C. `aria-current`
   - D. `autofocus`
6. Isi keranjang Tokosaya: Keyboard Mekanis KX-210 1 unit (Rp650.000), Mouse Wireless MW-88 2 unit (Rp185.000 per unit), dan Flash Drive 64GB FD-64 1 unit (Rp95.000). Pembeli memilih pengiriman Reguler seharga Rp20.000. Angka pada baris Total di kartu Ringkasan Pesanan adalah …
   - A. Rp1.115.000
   - B. Rp1.135.000
   - C. Rp1.150.000
   - D. Rp1.325.000
7. Kode kupon pada keranjang ditulis seperti potongan berikut, dan setiap kali tombol "Pakai" diklik halaman memuat ulang.

```html
<form action="#" method="get">
  <div class="input-group">
    <input type="text" class="form-control" id="kupon" name="kupon">
    <button class="btn btn-outline-primary">Pakai</button>
  </div>
</form>
```

Perbaikan yang paling tepat adalah …
   - A. mengganti kelas tombol menjadi `btn-primary`
   - B. memindahkan tombol ke luar `input-group`
   - C. menambahkan `type="button"` pada elemen tombol
   - D. menambahkan atribut `required` pada medan kupon
8. Pada form pengembalian barang, medan "Nomor Pesanan" harus tetap ikut terkirim bersama form, tetapi isinya tidak boleh diubah pengguna. Atribut yang tepat adalah …
   - A. `disabled`
   - B. `required`
   - C. `autocomplete="off"`
   - D. `readonly`
9. Urutan fokus (aliran tab) sebuah form pada dasarnya mengikuti …
   - A. urutan elemen di dalam dokumen HTML
   - B. abjad nilai atribut `id` setiap medan
   - C. urutan kelas pada *stylesheet* Bootstrap
   - D. nilai `name` medan dari yang paling pendek
10. Bab ini menyarankan menghindari nilai positif pada atribut `tabindex` karena …
   - A. membuat elemen tidak dapat difokuskan sama sekali
   - B. mengubah urutan fokus alami sehingga pengguna keyboard bisa bingung
   - C. hanya dikenali oleh pembaca layar
   - D. menghapus cincin fokus bawaan Bootstrap
11. Pada `kontak.html`, medan nama memakai status statis dan medan email ditulis dengan pesan "Format email belum tepat — contoh: nama@domain.id." Supaya pesan itu benar-benar muncul di bawah medan email, syaratnya adalah …
   - A. medan email diberi atribut `disabled`
   - B. halaman memuat paket JavaScript Bootstrap
   - C. medan email memakai kelas `is-invalid` dan pesannya dibungkus `invalid-feedback`
   - D. pembungkus pesannya diberi `role="alert"`
12. Sebuah halaman pendaftaran menampilkan tiga tombol yang sama-sama bergaya primer dengan label "Proses", "Lanjut", dan "Kirim". Evaluasi yang paling sesuai prinsip tombol aksi pada bab ini adalah …
   - A. ketiganya sudah benar karena semuanya membawa pengguna maju
   - B. ketiganya sebaiknya diganti menjadi tautan biasa
   - C. ketiganya sebaiknya diberi `type="submit"` agar konsisten
   - D. sisakan satu tombol utama berlabel yang menyatakan akibatnya (misalnya "Kirim Pendaftaran") dan turunkan gaya tombol pendamping
13. Petugas penerimaan kesulitan mencocokkan tanggal ujian yang diisi bebas oleh mahasiswa, mulai dari "5/1", "5 Jan", sampai "besok". Perbaikan yang paling tepat menurut bab ini adalah …
   - A. memakai `type="date"` dengan label permanen sehingga formatnya terkunci sejak awal
   - B. menambah *placeholder* berisi contoh "5/1" pada medan tanggal
   - C. menambah satu pesan kesalahan umum "ada kolom yang salah"
   - D. mengganti label tombol pengiriman menjadi "OK"
14. Kamu diminta merancang medan "Kode Promo" pada checkout Tokosaya: punya label, petunjuk format, dan satu tombol pengujian kupon yang menempel di ujung kanan medan. Rancangan yang paling tepat adalah …
   - A. satu `<input type="text" class="form-control" placeholder="Kode Promo">` tanpa label
   - B. pembungkus `mb-3` berisi `label.form-label`, `input-group` berisi medan `form-control` dan tombol `type="button"`, serta `form-text` berisi contoh format
   - C. `form-select` berisi daftar seluruh kode promo yang berlaku di sistem
   - D. `textarea` dengan `rows="2"` supaya kode promo panjang tetap terbaca
15. Kamu diminta menambahkan blok "Berlangganan Info Produk" pada `kontak.html`: satu medan email, satu tombol "Daftar" yang menempel di ujung medan, satu teks bantuan, dan satu checkbox persetujuan. Susunan kelas yang tepat adalah …
   - A. `form-text` pada label, `is-valid` pada medan, dan `form-check` pada tombol
   - B. `form-control` pada tombol, `form-select` pada checkbox, dan `visually-hidden` pada teks bantuan
   - C. medan `form-control` di dalam `input-group`, tombol lampiran bergaya `btn`, teks bantuan `form-text` yang dihubungkan `aria-describedby`, dan `form-check` untuk checkbox
   - D. `card` untuk medan, `alert` untuk tombol, dan `badge` untuk teks bantuan

---

## Bab 12 — UI/UX dan Design System

**Pilihan Ganda (15 soal)**

1. Dalam design system, variabel bernama yang menyimpan nilai visual seperti warna, jarak, dan lengkung sudut disebut…
   - A. komponen
   - B. design token
   - C. varian
   - D. styleguide

2. Pembagian peran keluarga huruf pada sistem tipografi Tokosaya adalah…
   - A. Poppins untuk teks paragraf dan Inter untuk semua jenjang judul
   - B. Inter untuk judul dan Poppins untuk keterangan kecil
   - C. Poppins untuk semua jenjang judul dan Inter untuk teks paragraf
   - D. keduanya dipakai bergantian mengikuti panjang baris teks

3. Berikut yang **BUKAN** manfaat design system bagi tim pengembangan sistem informasi adalah…
   - A. halaman baru selesai lebih cepat karena polanya tinggal disalin
   - B. pemeliharaan ringan karena perubahan satu nilai token menjalar lewat `var()`
   - C. anggota baru cukup membaca satu halaman styleguide
   - D. varian baru lahir tanpa dokumentasi supaya tim bebas bereksperimen

4. Dua hukum gestalt yang diperkenalkan pada bab ini adalah…
   - A. hierarki dan konsistensi
   - B. usability dan affordance
   - C. alignment dan repetition
   - D. kedekatan (*proximity*) dan kemiripan (*similarity*)

5. Perhatikan kelas badge berikut.

```css
.badge-limited {
  background-color: var(--clr-danger);
  color: #FFFFFF;
}
```

   Badge dengan kelas ini paling tepat dipakai untuk menandai status…
   - A. Stok Terbatas
   - B. Best Seller
   - C. Tersedia
   - D. Baru

6. Perhatikan cuplikan grid katalog Tokosaya berikut.

```html
<div class="row g-4">
  <!-- delapan kartu produk dataset Tokosaya -->
</div>
```

   Jarak antarkartu yang dihasilkan kelas `g-4` adalah…
   - A. 24 piksel, sejajar dengan `gap-4` pada skala jarak Tokosaya
   - B. 8 piksel, sejajar dengan `gap-2` pada skala jarak Tokosaya
   - C. 16 piksel, sejajar dengan `gap-3` pada skala jarak Tokosaya
   - D. 48 piksel, sejajar dengan `gap-5` pada skala jarak Tokosaya

7. Perhatikan potongan CSS alert berikut.

```css
.alert-peringatan {
  background-color: rgba(245, 158, 11, 0.12);
  border-color: var(--clr-accent);
}
```

   Teknik yang dipakai penulisnya adalah…
   - A. menambah token warna kuning baru khusus untuk alert
   - B. menurunkan warna token jadi latar tipis (*tint*) tanpa menambah nilai baru ke sistem
   - C. mengganti token `--clr-accent` dengan nilai mentah di setiap halaman
   - D. menggantikan warna latar dengan bayangan kartu `--shadow-card`

8. Potongan markup tombol kustom Tokosaya yang benar untuk Bootstrap 5.3.3 adalah…
   - A. `<button type="button" class="btn btn-utama">Lihat Katalog</button>`
   - B. `<button type="button" class="btn-utama">Lihat Katalog</button>`
   - C. `<button type="button" class="btn-primary btn-utama-toko">Lihat Katalog</button>`
   - D. `<button type="button" class="btn-utama btn-outline-toko">Lihat Katalog</button>`

9. Delapan kartu produk Tokosaya di halaman katalog tampil dengan kelas `p-kartu` yang sama. Alat visual utama yang bekerja pada keputusan tersebut adalah…
   - A. whitespace
   - B. alignment
   - C. contrast
   - D. repetition

10. Pada `css/style.css` terdapat aturan `.p-kartu i { color: var(--clr-border); }`. Alasan ikon kategori sengaja diberi warna lembut adalah…
    - A. agar ikon tidak dibacakan oleh pembaca layar
    - B. agar ikon tidak berebut perhatian dengan judul sehingga hierarki kartu tetap jelas
    - C. agar ikon memenuhi ambang kontras elemen non-teks
    - D. agar ikon bisa diganti warna apa pun oleh Bootstrap

11. Dua kartu produk memakai badge berbeda — "Best Seller" dengan `--clr-accent` dan "Stok Terbatas" dengan `--clr-danger` — tetapi keduanya tetap memakai kelas `p-kartu`. Keputusan ini tepat karena…
    - A. badge adalah satu-satunya bagian kartu yang boleh berbeda antar varian
    - B. setiap kartu berhak memakai kelas bebas asal warnanya tetap dari token
    - C. varian kartu dibedakan lewat keadaan isinya (badge status), bukan lewat wujudnya, sehingga katalog tetap mudah dipindai
    - D. Bootstrap mewajibkan semua kartu memakai satu kelas dasar yang sama

12. Ketiga kelas varian tombol Tokosaya memuat properti `--bs-btn-focus-shadow-rgb: 79, 70, 229;` (nilai RGB dari indigo `#4F46E5`). Tujuan penulisan properti tersebut adalah…
    - A. mempercepat pemuatan CSS Bootstrap dari CDN
    - B. mengganti warna latar tombol saat disentuh kursor
    - C. menambahkan bayangan kartu pada tombol berstatus nonaktif
    - D. menyamakan warna sorotan fokus keyboard dengan warna utama Tokosaya, bukan biru bawaan Bootstrap

13. Seorang anggota tim perlu varian tombol baru untuk halaman promo. Tindakan yang paling sesuai dengan disiplin design system Tokosaya adalah…
    - A. menuliskan gaya tombol langsung pada elemen dengan atribut `style`
    - B. memakai kombinasi kelas Bootstrap yang berbeda dari styleguide tanpa mencatatnya
    - C. menambahkan kelas varian baru di `css/style.css` lalu langsung memasukkannya ke styleguide pada hari yang sama
    - D. membuat file CSS terpisah khusus halaman promo supaya halaman lain tidak terganggu

14. Tim promo mengajukan varian tombol "Beli Sekarang": latar `--clr-success`, sudut 4 piksel, dan hanya dipakai di halaman diskon. Evaluasi paling tepat menurut design system Tokosaya adalah…
    - A. diterima karena menambah keragaman visual halaman promo
    - B. ditolak karena 4 piksel melanggar token `--radius` dan warna sukses dipakai di luar perannya; varian sah sebaiknya diusulkan lewat matriks varian lalu didokumentasikan lebih dulu
    - C. diterima asalkan tombol itu hanya muncul satu kali per halaman
    - D. ditolak karena tombol tidak boleh memakai kelas kustom apa pun

15. Sebuah halaman baru Tokosaya terasa "kurang nyaman" padahal seluruh isinya sudah ada. Langkah diagnosis pertama yang paling tepat memakai kerangka bab ini adalah…
    - A. mengganti seluruh warna halaman mengikuti selera terbaru
    - B. menambah lebih banyak gambar agar halaman terasa penuh
    - C. memeriksa hierarki, konsistensi, usability, dan affordance, lalu menyebut alat visual (whitespace, alignment, contrast, repetition) yang bermasalah
    - D. menghapus aturan styleguide supaya halaman bebas berkreasi

---

## Bab 13 — Website Responsif dan Accessibility

**Pilihan Ganda (15 soal)**

1. Fungsi `<meta name="viewport" content="width=device-width, initial-scale=1">` pada halaman Tokosaya adalah…
   - A. mengunci lebar halaman pada 768 piksel di semua perangkat
   - B. membuat halaman mengikuti lebar perangkat sehingga media query bekerja sesuai rencana
   - C. memuat berkas CSS Bootstrap 5.3.3 dari CDN
   - D. mematikan penggeser horizontal secara otomatis di semua halaman

2. Subset breakpoint yang diputuskan sebagai strategi proyek Tokosaya adalah…
   - A. 375 px, 414 px, dan 768 px mengikuti merek HP yang populer
   - B. sm 576 px, md 768 px, lg 992 px, dan xl 1200 px
   - C. base (di bawah 768 px), md 768 px, dan lg 992 px
   - D. 578 px, 693 px, dan 941 px sesuai hasil pengujian lapangan

3. Elemen `<picture>` berisi beberapa `<source media="...">` dipakai ketika…
   - A. gambar perlu dianimasikan saat halaman pertama dibuka
   - B. setiap variasi gambar berbagi komposisi yang sama persis
   - C. gambar ingin dimuat lebih lambat daripada gambar biasa
   - D. komposisi atau rasio gambar memang berubah antar lebar layar, sedangkan variasi resolusi dari konten yang sama cukup memakai `srcset`

4. Pseudo-class `:focus-visible` pada aturan fokus Tokosaya berarti…
   - A. cincin fokus tampil ketika input keyboard dipakai, sementara klik mouse tetap terasa rapi
   - B. cincin fokus dihapus pada semua kondisi supaya tampilan bersih
   - C. cincin fokus tampil permanen pada setiap elemen interaktif
   - D. warna latar elemen berubah setiap kali elemen diklik

5. Gambar hero Tokosaya memakai `srcset="img/hero-480.svg 480w, img/hero-1200.svg 1200w"` dengan pasangan `sizes="(min-width: 992px) 50vw, 92vw"`. Tugas atribut `sizes` adalah…
   - A. menyebut ukuran berkas gambar dalam kilobita
   - B. mengunci tinggi gambar agar tidak pernah berubah
   - C. menandai gambar sebagai elemen dekoratif
   - D. memberi tahu browser lebar area yang akan ditempati gambar pada kondisi layar berbeda

6. Atribut `width` dan `height` pada `<img>` produk Tokosaya berguna karena…
   - A. menentukan ukuran akhir gambar di semua lebar layar
   - B. mengompres berkas gambar sehingga lebih ringan
   - C. mencadangkan ruang sejak awal sehingga layout tidak "melompat" saat gambar selesai dimuat
   - D. menggantikan kewajiban menulis `alt`

7. Pada nama produk panjang tanpa spasi, kombinasi `overflow-wrap: break-word` dan `min-width: 0` pada anak kontainer flex bekerja untuk…
   - A. mempercepat pemuatan judul produk
   - B. menyembunyikan teks yang terlalu panjang di layar sempit
   - C. mengatur urutan tab pada kartu produk
   - D. mencegah kata panjang meluber dan memunculkan penggeser horizontal di seluruh halaman

8. Utilitas Bootstrap `d-none d-md-block` pada sebuah elemen tambahan berarti…
   - A. elemen disembunyikan di bawah 768 px dan tampil mulai 768 px ke atas
   - B. elemen tampil hanya di bawah 768 px
   - C. elemen disembunyikan pada semua ukuran layar
   - D. elemen hanya tampil ketika halaman dicetak

9. Perhatikan potongan CSS berikut yang dipakai untuk keterangan produk di atas latar putih.

```css
.teks-lembut { color: #94A3B8; }
```

   Diagnosis dan perbaikan yang paling tepat adalah…
   - A. kontrasnya terlalu tinggi sehingga menyilaukan; ganti ke abu yang lebih gelap
   - B. tidak ada masalah; keterangan memang harus tampak pucat agar hierarkinya lemah
   - C. rasio kontrasnya di bawah ambang AA 4,5:1 sehingga gagal; perbaiki di level token dengan `--clr-body` lalu verifikasi lewat color picker DevTools
   - D. nilai heksa cukup diganti menjadi nama warna CSS seperti `lightgray`

10. Fungsi `clamp()` lebih disarankan daripada tiga media query terpisah untuk ukuran judul karena…
    - A. `clamp()` membuat berkas CSS lebih kecil sehingga halaman lebih cepat dibuka
    - B. ukuran mengalir dan berhenti di batas minimum serta maksimum, tanpa loncatan mendadak di sekitar breakpoint
    - C. media query tidak mampu mengubah properti `font-size`
    - D. `clamp()` hanya bekerja pada kelas-kelas Bootstrap

11. Perhatikan potongan form berikut.

```html
<p>Nama lengkap</p>
<input type="text" class="form-control" id="nama" name="nama">
```

    Masalah aksesibilitasnya serta perbaikan yang tepat adalah…
    - A. input perlu atribut `placeholder` yang isinya sama dengan teks di atasnya
    - B. `type="text"` harus diganti `type="search"` supaya terbaca pembaca layar
    - C. tidak ada masalah karena input sudah punya `id`
    - D. teks "Nama lengkap" tidak terhubung sebagai label sehingga pembaca layar membacakan kolom tanpa nama; ganti menjadi `<label for="nama">Nama lengkap</label>`

12. Perhatikan link ikon keranjang pada header Tokosaya.

```html
<a href="checkout.html"><i class="bi bi-cart3 fs-4"></i></a>
```

    Perbaikan aksesibilitas yang paling tepat adalah…
    - A. tambahkan `aria-label="Buka keranjang belanja"` pada link dan `aria-hidden="true"` pada ikon dekoratif
    - B. tambahkan atribut `alt` pada elemen ikon
    - C. tambahkan `tabindex="-1"` pada link supaya tidak membingungkan pengguna
    - D. tambahkan atribut `title` pada ikon saja tanpa mengubah link

13. Tentang skor Lighthouse Accessibility pada proyek Tokosaya, pernyataan yang paling tepat adalah…
    - A. skor tinggi bukan sertifikat; temuan seperti urutan heading yang janggal dalam konteks bisnis tetap butuh penilaian manusia dan verifikasi manual di halaman nyata
    - B. skor 100 berarti halaman sudah bebas dari semua masalah aksesibilitas
    - C. Lighthouse menggantikan kebutuhan menguji Tab di halaman nyata
    - D. skor rendah selalu berarti markup HTML salah

14. Audit Portal Layanan Warga Kota Arunika menemukan tiga hal: (1) gambar papan pengumuman tanpa `alt`, (2) tabel syarat dokumen lebar tetap yang memaksa penggeser horizontal, (3) kontras lemah pada area pemberitahuan. Perbaikan yang paling tepat didahulukan adalah…
    - A. tabel, karena perbaikannya paling rumit sehingga paling lama
    - B. alt pada papan pengumuman, karena informasi intinya ikut hilang sehingga layanan tidak terbaca oleh sebagian pengguna
    - C. kontras, karena perbaikannya paling cepat selesai
    - D. ketiganya diacak saja karena dampaknya dianggap sama

15. Urutan pola kerja audit yang dilatih pada bab ini adalah…
    - A. perbaiki semua kategori sekaligus, lalu jalankan Lighthouse sekali di akhir
    - B. uji responsif manual per breakpoint, jalankan Lighthouse Accessibility, catat temuan di tabel, perbaiki di CSS/HTML, lalu jalankan ulang dan bandingkan hasil "sebelum" dengan "sesudah"
    - C. cukup percaya pada skor otomatis tanpa uji manual di halaman nyata
    - D. jalankan Lighthouse lebih dulu, hapus cincin fokus, lalu nilai ulang halaman

---

## Bab 14 — Implementasi Desain Figma ke HTML CSS

**Pilihan Ganda (15 soal)**

1. Design token di blok `:root` Tokosaya diberi nama menurut perannya (`--clr-primary`, `--clr-accent`), bukan menurut warna mentahnya (misalnya `--indigo`). Alasan paling tepat untuk kebiasaan itu adalah…
   - A. nama berbasis peran membuat ukuran berkas CSS jadi lebih kecil
   - B. nama berbasis peran membuat browser memuat warna lebih cepat
   - C. nama berbasis peran tetap masuk akal ketika desainer mengganti nilai warnanya kelak
   - D. nama berbasis peran mewajibkan semua warna ditulis dalam format hex

2. Pada panel kanan Figma, properti yang menunjukkan warna latar sebuah objek adalah…
   - A. fill
   - B. stroke
   - C. gap
   - D. auto layout

3. Komponen desain yang di dunia nyata bersifat interaktif — misalnya menu yang membuka panel — diterjemahkan pada mata kuliah ini sebagai…
   - A. halaman terpisah yang dibuka tanpa navigasi
   - B. tampilan statis dengan kelas keadaan yang sesuai disertai catatan perilakunya
   - C. gambar animasi agar tampak berjalan sendiri
   - D. komponen yang dibiarkan tidak dibuat sampai skrip tersedia

4. Cara membaca frame Figma yang dianjurkan bab ini adalah…
   - A. mulai dari nilai hex terkecil menuju terbesar
   - B. mulai dari teks terpanjang menuju terpendek
   - C. mulai dari properti CSS paling rumit menuju paling sederhana
   - D. mulai dari frame terluar, lalu membedah layer anak dari atas ke bawah

5. Perhatikan aturan hasil salinan seorang mahasiswa untuk badge Tokosaya.

   ```css
   /* kustom */
   .badge-populer {
     background-color: #F59E0B;
     border-radius: 8px;
     padding: 6px 12px;
   }
   ```

   Penyimpangan aturan tersebut terhadap disiplin token Tokosaya adalah…
   - A. padding ditulis dengan dua nilai sehingga tidak dibaca browser
   - B. kelas memakai awalan `badge` yang sudah dipakai Bootstrap
   - C. warna aksen ditulis sebagai hex liar dan radius tidak memakai `var(--radius)`
   - D. selektor kelas tunggal terlalu lemah untuk menata badge

6. Spesifikasi bagian G menetapkan tiga kartu produk terkait sejajar di desktop, turun menjadi satu kolom penuh di layar kecil, dengan jarak antarkolom 24 px. Perhatikan kerangka markup berikut.

   ```html
   <div class="row ...">
     <article class="...">Kartu 1</article>
     <article class="...">Kartu 2</article>
     <article class="...">Kartu 3</article>
   </div>
   ```

   Isian kelas yang paling setia pada spesifikasi tersebut adalah…
   - A. `row`, lalu `col-12 col-md-4` pada tiap artikel
   - B. `row g-4`, lalu `col-12 col-md-4` pada tiap artikel
   - C. `row g-4`, lalu `col-4` pada tiap artikel
   - D. `row g-4`, lalu `col-12 col-lg-7` pada tiap artikel

7. Text style Figma "Heading/Card Title" bernilai Poppins 500, 18 px, line-height 1,4. Aturan CSS kustom yang paling setia pada gaya itu adalah…
   - A. `.produk-card-nama { font-family: var(--font-heading); font-weight: 500; font-size: 18px; line-height: 1.4; }`
   - B. `.produk-card-nama { font-family: var(--font-heading); font-weight: 700; font-size: 18px; line-height: 1.4; }`
   - C. `.produk-card-nama { font-family: var(--font-body); font-weight: 400; font-size: 16px; line-height: 1.6; }`
   - D. `.produk-card-nama { font-family: var(--font-heading); font-weight: 500; font-size: 28px; line-height: 1.25; }`

8. Spesifikasi panel produk menyatakan badge "Best Seller" berlatar `#F59E0B` dengan teks `#1E293B`. Aturan berbasis token yang paling tepat adalah…
   - A. `.badge-populer { background-color: var(--clr-surface); color: var(--clr-body); }`
   - B. `.badge-populer { background-color: #6C63FF; color: #1E293B; }`
   - C. `.badge-populer { background-color: var(--clr-accent); color: var(--clr-dark); }`
   - D. `.badge-populer { background-color: var(--clr-danger); color: #FFFFFF; }`

9. Pada lebar ≥ 992 px, gambar produk dan panel data harus bersebelahan dengan pembagian 7 : 5, lalu menumpuk penuh di bawah titik itu. Kombinasi kelas kolom yang paling tepat adalah…
   - A. `col-lg-7` dan `col-lg-5`
   - B. `col-12 col-lg-7` dan `col-12 col-lg-5`
   - C. `col-md-7` dan `col-md-5`
   - D. `col-7` dan `col-5`

10. Perhatikan penggalan navbar Tokosaya berikut.

    ```html
    <header class="site-nav">
      <div class="container d-flex flex-wrap align-items-center justify-content-between gap-3">
        <a href="index.html" class="site-brand">Tokosaya</a>
        ...
      </div>
    </header>
    ```

    Pernyataan yang paling tepat mengenai pembagian tugas kelas pada penggalan itu adalah…
   - A. seluruh gaya navbar ditulis di kelas kustom, utilitas tidak dipakai
   - B. utilitas `d-flex` membuat navbar berjalan interaktif tanpa skrip
   - C. kelas kustom wajib menimpa utilitas dengan `!important` agar menang
   - D. utilitas mengatur susunan (flex, gap), sedangkan warna dan ukuran presisi diatur kelas kustom bertoken

11. Gambar produk di panel detail tampil melebar melebihi kotak dan mendorong kolom kanan turun saat dibuka di tablet, padahal atribut `width`/`height` sudah ditulis. Perbaikan yang paling tepat adalah…
   - A. menghapus atribut `width`/`height` dari elemen gambar
   - B. menambahkan kelas `img-fluid` pada elemen `img`
   - C. menambahkan `!important` pada aturan lebar gambar
   - D. memindahkan gambar menjadi latar belakang CSS pada `figure`

12. Seorang mahasiswa menambahkan `rounded-3` pada kartu produk, sementara kelas kustom `.produk-card` sudah memberi `border-radius: var(--radius)`. Nilai radius yang akhirnya dipakai tidak sesuai token 12 px. Keputusan paling tepat adalah…
   - A. hapus `rounded-3` dan biarkan kelas kustom bertoken yang menetapkan radius
   - B. tambahkan `!important` pada aturan kustom agar menang
   - C. ubah token `--radius` menjadi 8 px supaya semua komponen seragam
   - D. hapus kelas kustom dan serahkan radius kartu ke utilitas

13. Pada pemeriksaan kartu produk, ditemukan elemen berikut.

    ```html
    <img src="img/produk-mouse-mw88.svg" width="332" height="160"
         class="produk-card-gambar img-fluid mb-3">
    ```

    Perbaikan yang paling tepat untuk masalah aksesibilitas elemen itu adalah…
   - A. menambahkan `alt="gambar"` agar halaman lolos validator
   - B. menambahkan `role="img"` pada elemen gambar
   - C. menambahkan `alt` deskriptif yang menjelaskan isi dan tujuan gambar
   - D. membiarkannya, karena gambar sudah berada di dalam elemen `article`

14. Cara yang paling tepat untuk membuktikan bahwa nilai panel produk sudah setia pada spesifikasi desain adalah…
   - A. membaca nilai akhir pada panel Computed DevTools, membandingkannya dengan spesifikasi, dan mencatat selisih kecil sebagai toleransi ± 2 px
   - B. menilai kemiripan dengan perasaan setelah menatap tangkapan layar desain
   - C. menambah `!important` sampai tampilannya kelihatan sama
   - D. meminta rekan menilai "mirip atau tidak" tanpa membuka spesifikasi

15. Sebuah UMKM hanya bisa menyerahkan tangkapan layar halaman toko lain sebagai acuan desain — tanpa berkas Figma dan tanpa angka ukuran. Langkah paling tepat agar hasil implementasimu tetap terkendali adalah…
   - A. menaksir ukuran dari gambar lalu langsung menuangkannya ke kode secepat mungkin
   - B. menolak pekerjaan sampai klien menyediakan berkas Figma
   - C. meminta izin membuka halaman toko aslinya untuk mengukur setiap elemen
   - D. menyusun spesifikasi desain tekstual bernilai presisi (ukuran, jarak, warna, keadaan) lalu mengaudit hasilnya dengan fidelity checklist

---

## Bab 15 — Final Project dan Quality Assurance

**Pilihan Ganda (15 soal)**

1. Berkas gambar produk yang penamaannya sesuai konvensi proyek Tokosaya adalah…
   - A. `photo3.svg`
   - B. `Produk_Keyboard_KX210.svg`
   - C. `produk-keyboard-kx210.svg`
   - D. `produk keyboard kx210.svg`

2. Saat menguji satu sel test matrix, pemindai lima titik yang dijalankan berurutan memeriksa…
   - A. navigasi, hero, grid kartu, form, dan footer
   - B. hero, navigasi, footer, form, dan grid kartu
   - C. form, footer, hero, navigasi, dan grid kartu
   - D. footer, grid kartu, hero, navigasi, dan form

3. Pada `laporan-temuan.html`, kolom yang membuat pembaca lain dapat mengulang gejala yang sama persis adalah…
   - A. ID temuan
   - B. langkah reproduksi
   - C. severitas
   - D. halaman

4. Sekelompok tombol radio "Kategori pesan" beserta judul kelompoknya paling tepat dibungkus dengan…
   - A. `<div class="form-group">` dan `<h3>`
   - B. `<ul>` dan `<li>`
   - C. `<section>` dan `<p>`
   - D. `<fieldset>` dan `<legend>`

5. Kebutuhan menampilkan sebuah blok hanya pada layar ≥ 768 px paling tepat dipenuhi dengan…
   - A. `d-md-none`
   - B. `d-block d-md-none`
   - C. `d-none d-md-block`
   - D. `d-lg-block`

6. Menurut tabel praktik terbaik subbab 15.4, kebutuhan "jarak bawah pada kartu" diselesaikan dengan utilitas…
   - A. `mb-3`
   - B. `mt-3`
   - C. `mx-3`
   - D. `p-3`

7. Temuan QA "radius kartu unggulan 8 px, sementara styleguide menetapkan 12 px" paling tepat diberi severitas…
   - A. Kritis
   - B. Minor
   - C. Mayor
   - D. perlu verifikasi ulang sebelum berstatus temuan

8. Langkah pertama metode debugging empat langkah pada subbab 15.7 adalah…
   - A. menyusun hipotesis tunggal penyebab
   - B. mengisolasi elemen terkecil yang gagal
   - C. memverifikasi ulang dengan memuat ulang halaman
   - D. mereproduksi temuan beserta tangkapan layar sebelum/sesudah

9. Karena JavaScript berada di luar cakupan mata kuliah, setiap halaman Tokosaya menuliskan komentar berikut pada bagian `head`…
   - A. `<!-- Tanpa bundle JavaScript Bootstrap: interaksi di luar cakupan mata kuliah -->`
   - B. `<!-- kustom -->`
   - C. `<!-- CDN dikunci pada versi 5.3.3 -->`
   - D. `<!-- TODO: tambahkan skrip setelah rilis -->`

10. Validator W3C menampilkan lima kesalahan pada satu halaman sekaligus. Penanganan yang paling tepat adalah…
   - A. mengabaikan peringatan dan memperbaiki kesalahan terbawah lebih dulu
   - B. menulis ulang seluruh halaman memakai framework lain
   - C. memperbaiki kesalahan paling atas, memvalidasi ulang, lalu lanjut ke kesalahan berikutnya
   - D. menambahkan `!important` pada CSS agar validator berhenti mengeluh

11. Gambar hias yang murni dekoratif dan tidak membawa makna konten paling tepat diberi atribut `alt` berupa…
   - A. `alt="dekorasi"`
   - B. `alt=""` yang sengaja dikosongkan
   - C. `alt="gambar"` agar tidak kosong
   - D. `title` sebagai pengganti `alt`

12. Ketika halaman dibuka di Firefox, jarak bawaan elemen form terlihat berbeda dari Chrome. Sikap paling tepat menurut prosedur pengujian bab ini adalah…
   - A. mengabaikannya karena Chrome adalah browser acuan utama
   - B. mengganti framework agar tampilan identik di semua browser
   - C. membandingkan skor Lighthouse kedua browser lalu memilih yang tertinggi
   - D. mencatat tampilan yang menyimpang sebagai temuan pengujian lintas-browser

13. Lighthouse memberi skor aksesibilitas 95, tetapi penelusuran halaman dengan tombol tab ternyata berantakan. Kesimpulan yang paling tepat adalah…
   - A. skor alat bukan sertifikasi kualitas; pengujian manual untuk makna dan urutan tetap wajib
   - B. skor 95 sudah membuktikan aksesibilitas halaman selesai
   - C. urutan tab bukan bagian dari kriteria aksesibilitas
   - D. cukup menaikkan skor hingga 100 agar seluruh masalah selesai

14. Menjelang penguncian rilis kandidat, masih ada dua temuan berstatus Kritis dan terbuka. Keputusan paling tepat adalah…
   - A. mengunci rilis karena seluruh item Disarankan sudah terpenuhi
   - B. menurunkan severitas kedua temuan menjadi Minor agar checklist lulus
   - C. menunda penguncian, memperbaiki dan memverifikasi kedua temuan tersebut lebih dulu
   - D. mengirim paket apa adanya sambil melampirkan permintaan maaf

15. Rencana demo tiga menit pada sesi QA presentasi paling tepat disusun sebagai…
   - A. mendemokan seluruh halaman pada satu breakpoint agar aman
   - B. menyiapkan urutan halaman dan titik breakpoint yang diuji (dua form dan satu katalog) beserta tangkapan layar cadangan
   - C. menyerahkan berkas ZIP agar penguji mencoba sendiri
   - D. meminta tambahan waktu bila perangkat presentasi bermasalah

---


