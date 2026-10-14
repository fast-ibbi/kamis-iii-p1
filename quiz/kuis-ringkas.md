# Bank Kuis Ringkas — Frontend Development & Web Design

> **Mata kuliah:** Frontend Development & Web Design · Semester III
> **Prodi:** Sistem Informasi / Teknik Informatika
> **Studi kasus proyek:** Tokosaya — toko online UMKM _"Belanja Tepat, Kirim Cepat"_
> **Cakupan:** 14 bab (Bab 1–7 dan 9–15) · 10 soal per bab (5 pilihan ganda + 5 isian singkat) · **Total 140 soal**
> **Estimasi waktu:** ±15 menit per bab
> **Versi per bab:** `bab-NN/kuis-ringkas.md` · kunci: `bab-NN/kunci-kuis-ringkas.md` · **Kunci bank lengkap:** `kunci-kuis-ringkas.md`


**Daftar Bab:** Bab 01 · Bab 02 · Bab 03 · Bab 04 · Bab 05 · Bab 06 · Bab 07 · Bab 09 · Bab 10 · Bab 11 · Bab 12 · Bab 13 · Bab 14 · Bab 15


## Bab 01 — Pengantar Frontend Development dan Web Design

**Bagian A — Pilihan Ganda (5 soal)**

1. Tim Tokosaya memindahkan seluruh file website dari komputer ke server penyedia, lalu menghubungkannya dengan alamat `tokosaya.id` sehingga website dapat diakses publik. Kegiatan ini disebut...
   - A. domain
   - B. deployment
   - C. hosting
   - D. rendering

2. Keluaran berupa rancangan antarmuka, layout, warna, dan tombol dihasilkan pada tahap...
   - A. analisis
   - B. implementasi
   - C. pengujian
   - D. desain

3. Pada peta isi buku ini, proyek Tokosaya fase kedua (Bab 9–16) dikembangkan dengan Bootstrap 5 dan disimpan di folder...
   - A. `tokosaya-css/`
   - B. `tokosaya-figma/`
   - C. `tokosaya-bootstrap/`
   - D. `tokosaya-final/`

4. Ekstensi **Live Server** pada VS Code digunakan untuk...
   - A. membuka halaman di browser dan memperbarui tampilannya otomatis setiap kali file disimpan
   - B. memeriksa struktur tag halaman seperti panel Elements pada DevTools
   - C. mengunggah folder proyek ke hosting agar dapat diakses lewat internet
   - D. mengubah pengodean berkas menjadi UTF-8 setiap kali file disimpan

5. Halaman Tentang memuat daftar langkah perawatan keyboard yang harus dikerjakan berurutan dari langkah 1 sampai 5. Pernyataan yang paling tepat adalah...
   - A. daftar itu memakai `<ul>` karena setiap daftar di HTML selalu diawali `<ul>`
   - B. daftar itu memakai `<ol>` karena urutan langkah bermakna, sedangkan daftar tanpa urutan lebih tepat memakai `<ul>`
   - C. daftar itu memakai `<ol>` karena `<ul>` hanya boleh dipakai untuk menu navigasi
   - D. pilihan `<ul>` atau `<ol>` tidak memengaruhi makna dokumen sehingga keduanya sama saja

**Bagian B — Isian Singkat (5 soal)**

6. Jelaskan mengapa halaman utama proyek Tokosaya dinamai `index.html`. Apa yang akan terjadi bila pengunjung membuka alamat `tokosaya.id/` tanpa menuliskan nama file?

7. Perhatikan alamat `https://tokosaya.id/katalog.html`. Sebutkan tiga bagian utama URL tersebut beserta istilah untuk masing-masing bagian.

8. Bab ini membedakan *halaman* (page) dan *website*. Jelaskan perbedaan keduanya dan di manakah aset pendukung disimpan.

9. Apa fungsi atribut `alt` pada elemen `<img>`, dan kepada siapa atribut itu terutama membantu?

10. Bab ini menganjurkan kebiasaan *simpan → muat ulang → periksa*. Masalah seperti apa yang biasa terdeteksi lewat kebiasaan itu, dan apa pesan pentingnya tentang cara browser bekerja?

---

## Bab 02 — HTML5 dan Struktur Semantik

**Bagian A — Pilihan Ganda (5 soal)**

1. Setiap halaman Tokosaya diawali elemen `<html lang="id">`. Tujuan utama atribut `lang="id"` adalah...
   - A. memberi tahu browser bahasa halaman sehingga pembaca layar melafalkan kata dengan aturan yang tepat, kamus memeriksa ejaan, dan mesin dapat menerjemahkan konten
   - B. mengatur pengodean karakter agar teks seperti "Kirim Cepat" dan tanda "—" tampil dengan benar
   - C. memberi tahu mesin pencari bahwa halaman hanya boleh ditampilkan kepada pengunjung dari Indonesia
   - D. menetapkan agar lebar halaman menyesuaikan lebar layar perangkat pengunjung

2. Pada ilustrasi hero Tokosaya, gambar ditulis sebagai `<img src="img/hero-tokosaya.svg" alt="Ilustrasi peralatan kerja digital: keyboard, mouse, dan monitor Tokosaya" width="800" height="320">`. Atribut `width` dan `height` disertakan terutama untuk...
   - A. memberi tahu browser ukuran alternatif yang dipakai bila gambar gagal dimuat
   - B. memesan ruang gambar sebelum file termuat sehingga halaman tidak melompat saat gambar muncul
   - C. mengunci ukuran tampilan gambar agar tidak dapat diubah oleh aturan CSS
   - D. mempercepat pengunduhan karena browser memakai ukuran itu untuk mengecilkan file gambar

3. Logo Tokosaya di header ditulis sebagai `<img src="img/logo-tokosaya.svg" alt="Logo Tokosaya" width="48" height="48">` tanpa `figure`, sedangkan ilustrasi hero dibungkus `<figure>` dengan `<figcaption>` di dalamnya. Alasan yang paling tepat untuk perbedaan itu adalah...
   - A. `figure` dan `figcaption` hanya boleh dipakai satu kali dalam satu halaman
   - B. logo merupakan gambar dekoratif sehingga teks alternatifnya seharusnya dikosongkan
   - C. ilustrasi hero memiliki keterangan yang perlu terikat pada gambarnya, sedangkan `alt` logo sudah cukup menjelaskan fungsinya
   - D. `figcaption` wajib menyertai setiap gambar yang berukuran lebih dari 300 piksel

4. Tim Tokosaya memilih elemen untuk satu kartu produk unggulan yang memuat nama, harga, dan deskripsi singkat. Ketika kartu itu dipindah ke halaman lain, isinya tetap lengkap dan masuk akal. Elemen yang paling tepat untuk kartu tersebut adalah...
   - A. `aside`, karena kartu ditempatkan di tepi halaman
   - B. `div`, karena kartu hanya berfungsi sebagai pembungkus penataan CSS
   - C. `section`, karena kartu merupakan bagian dari himpunan produk unggulan
   - D. `article`, karena isinya lengkap dan dapat berdiri sendiri di luar halaman asalnya

5. Pada peninjauan `tentang.html`, tim menemukan urutan heading `h1` → `h2` → `h4`. Penulisnya beralasan `h3` tampil terlalu kecil sehingga ia memakai `h4`. Perbaikan yang tepat adalah...
   - A. memakai `h3` dan mengatur ukuran hurufnya lewat CSS, karena level heading dipilih menurut tingkatan informasi
   - B. memakai `h4` lalu menambahkan `h3` di bagian akhir agar semua level terpakai
   - C. mengganti heading tersebut dengan paragraf tebal supaya tidak ada level yang terlompati
   - D. memakai `h2` pada bagian itu karena satu halaman sebaiknya tidak memakai `h3`

**Bagian B — Isian Singkat (5 soal)**

6. Setiap halaman Tokosaya memuat `<meta charset="UTF-8">` di dalam `head`. Apa fungsi deklarasi itu, dan apa yang dapat terjadi bila deklarasi tersebut dihapus?

7. Halaman katalog akan menampilkan dua daftar: (a) daftar merek komputer yang kedudukannya setara tanpa urutan tertentu dan (b) langkah pembelian yang harus dijalankan berurutan. Sebutkan jenis list yang tepat untuk masing-masing beserta elemen butirnya.

8. Sebuah rancangan halaman menyusun dua kolom dengan `<table>`, `<tr>`, dan `<td>` agar tampak rapi sebelum CSS dipelajari. Mengapa pilihan itu keliru menurut bab ini?

9. Form kontak Tokosaya memuat kontrol `<textarea name="pesan">`. Agar labelnya terhubung dengan benar, pasangan atribut apa yang harus dipasang pada `<label>` dan `<textarea>`, dan apa akibatnya bila hubungan itu tidak dibuat?

10. Pada footer, alamat, email, dan telepon Tokosaya ditulis di dalam `<address>`, bukan `<p>` biasa. Apa yang ditandai elemen itu, dan mengapa pilihan tersebut lebih tepat?

---

## Bab 03 — Dasar-Dasar CSS

**Bagian A — Pilihan Ganda (5 soal)**

1. Ketika browser merender halaman Tokosaya, cara CSS menentukan gaya elemen yang paling tepat dijelaskan sebagai berikut...
   - A. aturan CSS dieksekusi berurutan seperti program; begitu aturan pertama cocok dengan elemen, proses berhenti dan aturan berikutnya diabaikan
   - B. browser mencocokkan setiap selector dengan elemen DOM, menggabungkan semua aturan yang cocok, lalu memutuskan nilai yang bertabrakan lewat kaskade
   - C. browser hanya memakai aturan yang ditulis paling akhir di berkas CSS untuk menentukan gaya seluruh elemen halaman
   - D. browser memilih lebih dahulu aturan dengan specificity tertinggi, lalu memeriksa apakah selector-nya benar-benar cocok dengan elemen

2. Bab ini memperingatkan salah satu kesalahan umum: memakai `!important` untuk menyelesaikan setiap konflik gaya. Alasan utamanya adalah...
   - A. `!important` hanya dikenali browser lama sehingga aturan yang memakainya berisiko diabaikan browser modern
   - B. `!important` menurunkan derajat specificity aturan itu ke tingkat selector elemen sehingga mudah dikalahkan aturan class
   - C. setelah `!important` dipakai, konflik berikutnya cenderung harus dilawan dengan `!important` lain yang lebih spesifik sehingga berkas gaya makin sulit dipercaya
   - D. `!important` membatalkan pewarisan nilai dari elemen induk ke elemen anak sehingga teks di dalamnya kembali ke gaya bawaan browser

3. Header sebuah halaman diberi `id="pengantar"`, sedangkan paragraf di dalamnya ber-class `lead`. Bila ditulis aturan dengan selector `#pengantar .lead:hover`, kekuatan selector itu dalam pasangan (id, class, elemen) adalah...
   - A. (1, 2, 0)
   - B. (1, 1, 0)
   - C. (0, 2, 0)
   - D. (1, 2, 1)

4. Tim Tokosaya ingin butir pertama daftar keunggulan tampil lebih tegas dan menuliskannya sebagai `.nilai-list li:first-child { font-weight: 600; }` alih-alih menambah class khusus pada `<li>` pertama. Alasan yang paling tepat adalah...
   - A. pseudo-class selalu menang atas selector class dalam kaskade, berapa pun specificity selector class itu
   - B. penambahan nama class pada elemen `<li>` tidak dianjurkan ditulis di HTML sehingga pilihan itu memang dihindari
   - C. `:first-child` hanya bekerja pada daftar yang isinya tidak pernah berubah sehingga hasilnya selalu dapat diprediksi
   - D. penekanan mengikuti posisi butir di HTML sehingga tidak perlu disunting ulang ketika isi daftar berubah

5. Pada `style.css` Tokosaya tertulis `.section-title { font-size: 1.75rem; }`. Dengan setelan ukuran font elemen akar 16px, ukuran teks yang dihasilkan adalah...
   - A. 17,5px
   - B. 24px
   - C. 28px
   - D. 32px

**Bagian B — Isian Singkat (5 soal)**

6. CSS dapat dipasang melalui tiga cara. Sebutkan ketiga cara itu beserta letak kodenya masing-masing.

7. Deklarasi `border: 1px solid #E2E8F0;` pada kartu produk Tokosaya adalah bentuk singkat dari tiga nilai. Sebutkan ketiga nilai itu.

8. `body { background-color: #F8FAFC; }` hanya mewarnai latar halaman, bukan latar setiap elemen di dalamnya. Jelaskan mengapa demikian, lalu uraikan apa yang terjadi bila semua properti kotak justru ikut diwariskan.

9. Bab ini menganjurkan satuan `rem` untuk ukuran font, bukan `px`. Jelaskan alasan anjuran itu dengan mengaitkannya pada setelan font pengguna.

10. Sebutkan urutan bagian yang disarankan untuk berkas `style.css` proyek Tokosaya (minimal empat bagian), lalu jelaskan satu alasan mengapa urutan penulisannya diperhatikan.

---

## Bab 04 — Tipografi dan Visual Design CSS

**Bagian A — Pilihan Ganda (5 soal)**

1. Pada pola pemuatan Google Fonts untuk halaman Tokosaya, dua tag `<link rel="preconnect">` diletakkan sebelum tag stylesheet font. Tujuan kedua tag tersebut adalah...
   - A. mengunduh seluruh berkas font lebih dahulu agar halaman tetap menampilkan Poppins dan Inter saat komputer dibuka tanpa internet
   - B. membuka koneksi lebih awal ke server font sehingga proses unduhan berkas font sesudahnya berlangsung lebih cepat
   - C. mengunci daftar ketebalan font yang dipakai proyek agar tampilan konsisten di semua perangkat
   - D. menampilkan teks memakai font cadangan selama berkas web font belum selesai diunduh

2. Judul hero Tokosaya dicetak sangat besar, sedangkan badge dan label kategori berbentuk kapital berukuran kecil. Penerapan `letter-spacing` yang paling sesuai materi bab ini adalah...
   - A. judul dirapatkan (`-0.02em`) dan label kecil direnggangkan (`0.08em`)
   - B. judul direnggangkan (`0.08em`) dan label kecil dirapatkan (`-0.02em`)
   - C. keduanya direnggangkan sama besar (`0.08em`) supaya tampilan seragam
   - D. keduanya dirapatkan sama besar (`-0.02em`) supaya huruf saling mendekat

3. Landing page Tokosaya memuat hero, section Sorotan Produk dengan delapan kartu, dan section CTA. Penerapan latar bergradien yang paling sesuai anjuran bab ini adalah...
   - A. setiap kartu produk diberi `linear-gradient` berbeda supaya katalog tidak monoton
   - B. gradien dipakai pada seluruh permukaan halaman, termasuk kartu dan badan teks
   - C. gradien dipakai terbatas pada hero dan CTA, sedangkan kartu produk tetap berlatar solid putih
   - D. gradien dihindari sama sekali karena halaman UMKM harus tampil polos

4. Kartu Speaker Bluetooth BT-5 berstatus habis stok dan tim ingin kartunya tampak nonaktif — meredup seluruhnya — tanpa menghapus isinya. Deklarasi CSS yang paling tepat untuk maksud tersebut adalah...
   - A. `color: rgba(51, 65, 85, 0.6);`
   - B. `background-color: rgba(255, 255, 255, 0.6);`
   - C. `box-shadow: var(--shadow-card);`
   - D. `opacity: 0.6;`

5. Token `--clr-accent` pada blok `:root` Tokosaya berisi nilai ... dan disediakan untuk ...
   - A. `#16A34A`; status sukses seperti badge "Tersedia"
   - B. `#F59E0B`; sorotan seperti badge "Best Seller"
   - C. `#4338CA`; keadaan hover tombol dan salah satu ujung gradien indigo
   - D. `#DC2626`; sinyal urgensi seperti badge "Stok Terbatas"

**Bagian B — Isian Singkat (5 soal)**

6. Proyek Tokosaya memakai dua keluarga font dari Google Fonts. Sebutkan kedua nama font tersebut beserta peran masing-masing pada halaman.

7. Deklarasi `font-size: clamp(2.25rem, 5vw, 3rem);` dipakai pada judul hero Tokosaya. Jelaskan arti ketiga argumen `clamp()` tersebut dan apa yang terjadi pada ukuran judul saat layar sangat sempit maupun sangat lebar.

8. Di HTML, badge Tokosaya ditulis `Best Seller` apa adanya, tetapi tampil sebagai `BEST SELLER`. Properti tipografi apa yang dipakai beserta nilainya?

9. Badge semantik Tokosaya tidak memakai teks berwarna hijau murni `#16A34A`. Jelaskan pola yang dipakai: apa yang membawa warna semantiknya, warna apa yang dipakai untuk teks, dan mengapa pola itu dipilih.

10. Token Tokosaya dinamai `--clr-primary`, bukan `--indigo`. Jelaskan alasan penamaan seperti itu dan apa keuntungannya ketika warna brand suatu hari diganti.

---

## Bab 05 — CSS Box Model dan Layout

**Bagian A — Pilihan Ganda (5 soal)**

1. Bab ini menganalogikan komponen kartu seperti poster berbingkai di dinding kantor. Lapisan yang berperan sebagai jarak dari bingkai ke poster lain — transparan dan tidak ikut memakai warna elemen — adalah...
   - A. content
   - B. padding
   - C. border
   - D. margin

2. Kartu-kartu produk Tokosaya dalam satu baris harus punya tinggi minimum yang seragam, tetapi tetap boleh memanjang bila deskripsi produk bertambah panjang. Deklarasi yang paling tepat untuk kebutuhan itu adalah...
   - A. `min-height: 240px;`
   - B. `height: 240px;`
   - C. `max-height: 240px;`
   - D. `height: 240px; overflow: hidden;`

3. Badge "Best Seller" pada kartu Tokosaya sudah diberi `display: inline-block` beserta padding penuh, tetapi ia masih mengalir bersama teks dan tidak menempel di pojok gambar. Penjelasan yang tepat menurut bab ini adalah...
   - A. cukup menambahkan `top: 8px; right: 8px;` pada badge yang sudah `inline-block`
   - B. penempatan bukan tugas `display`; badge memerlukan `position: absolute` dengan induk yang diberi `position: relative`
   - C. menambah nilai `z-index` akan memindahkan kotak badge ke pojok kanan atas gambar
   - D. badge harus diubah menjadi `display: block` agar dapat digeser ke sudut tujuan

4. Tabel pesanan di halaman admin Tokosaya berisi puluhan baris. Bab ini menganjurkan wadah tabel diberi tinggi terbatas dan `overflow-y: auto` supaya...
   - A. baris-baris yang melebihi wadah dipotong dan tidak lagi dapat dijangkau pengguna
   - B. bilah gulir muncul di dalam panel hanya bila isi melebihi tinggi wadah, sehingga halaman utama tidak ikut menggulir jauh dan konteks pengguna tetap terjaga
   - C. bilah gulir panel selalu tampil sejak awal sehingga tinggi tabel selalu dapat diprediksi
   - D. baris-baris keluar dari wadah dan menimpa elemen di bawahnya

5. Panel promo Tokosaya ditulis `width: 300px; padding: 20px; border: 2px solid;`. Pernyataan yang tepat tentang lebar panel itu adalah...
   - A. 300 px pada mode apa pun, karena `width` selalu menjadi ukuran kotak di layar
   - B. 344 px pada mode bawaan; setelah `border-box` dipasang, lebar kotak menyusut menjadi 256 px
   - C. 344 px pada mode bawaan; setelah `border-box` dipasang, lebar kotak tetap 300 px karena padding dan border dipotong dari dalam
   - D. 304 px pada mode bawaan; setelah `border-box` dipasang, lebar kotak menjadi 260 px

**Bagian B — Isian Singkat (5 soal)**

6. Gambar produk Tokosaya ditulis sebagai `<img>` yang berperilaku *inline*, namun atribut `width` dan `height` tetap bekerja padanya. Bab ini menyebut `<img>` dan `<input>` sebagai kelompok elemen apa?

7. Nama produk yang dipenggal dengan pola elipsis pada kartu Tokosaya tetap dapat dibaca penuh lewat sarana bawaan HTML apa — tanpa perilaku dinamis dan tanpa JavaScript?

8. Mengapa deklarasi `z-index: 5` tidak berpengaruh selama elemennya masih `position: static`?

9. Tuliskan skala jarak baku proyek Tokosaya yang dibangun di atas `--space-unit: 8px` (enam langkah).

10. Jelaskan singkat mengapa jarak vertikal antarseksi halaman Tokosaya lebih aman diwujudkan lewat padding pada kontainer bagian daripada margin pada elemen anaknya.

---

## Bab 06 — Flexbox untuk Web Layout

**Bagian A — Pilihan Ganda (5 soal)**

1. Elemen `<nav class="site-nav">` pada Tokosaya diberi `display: flex`. Elemen yang otomatis berubah menjadi flex item adalah...
   - A. semua elemen di dalamnya, termasuk anak dari anak
   - B. hanya anak langsungnya, seperti merek dan pembungkus kelompok kanan
   - C. hanya elemen yang diberi kelas khusus oleh penulis CSS
   - D. hanya elemen pertama di dalam wadah

2. Pada `.produk-row` di katalog Tokosaya, kartu-kartu dalam satu baris ternyata sudah sama tinggi walaupun panjang deskripsinya berbeda dan belum ada aturan tinggi yang ditulis. Hal itu terjadi karena...
   - A. `align-items: stretch` adalah nilai default, sehingga kartu meregang mengikuti tinggi baris
   - B. `flex: 0 1 250px` memaksa setiap kartu sama tinggi 250 px
   - C. `flex-wrap: wrap` menyeragamkan tinggi semua kartu di setiap baris
   - D. `gap: 24px` menyamakan tinggi kartu selama baris masih longgar

3. Empat tombol filter kategori berdiri di toolbar katalog dan wadahnya masih menyisakan ruang. Tim ingin tiap tombol memiliki jarak sama di kedua sisinya, sehingga jarak di tepi paling kiri dan paling kanan hanya setengah jarak antartombol. Nilai `justify-content` yang dipakai adalah...
   - A. `space-between`
   - B. `space-evenly`
   - C. `space-around`
   - D. `flex-start`

4. Agar kelompok `.site-nav-kanan` (menu dan tombol Keranjang) selalu menempel di ujung kanan baris navigasi tanpa mengubah `justify-content` wadah `.site-nav`, satu deklarasi yang dapat ditulis pada `.site-nav-kanan` adalah...
   - A. `justify-content: flex-end;`
   - B. `margin-left: auto;`
   - C. `align-self: flex-end;`
   - D. `order: 1;`

5. Footer multi kolom Tokosaya dibangun dengan `.site-footer { display: flex; flex-wrap: wrap; gap: 32px; }` dan setiap kolom memakai `flex: 1 1 240px;`. Ketika jendela makin sempit sehingga tiga kolom tidak lagi muat, yang terjadi adalah...
   - A. seluruh kolom menyusut proporsional dan tetap satu baris karena `flex-grow: 1`
   - B. kolom yang tidak muat turun ke baris baru tetapi hanya selebar 240 px
   - C. kolom ketiga disembunyikan otomatis agar baris tetap rapi
   - D. kolom yang tidak muat turun ke baris baru dan memakai lebar penuh baris, sementara baris di atasnya tetap terbagi rata; responsifnya berjalan tanpa media query

**Bagian B — Isian Singkat (5 soal)**

6. Flexbox memiliki dua sumbu. Sebutkan nama kedua sumbu tersebut beserta properti yang membagi atau menyelaraskan item pada masing-masing sumbu.

7. Pada navigasi Tokosaya, `<ul>` menu dan tombol Keranjang dibungkus satu elemen `.site-nav-kanan`. Jelaskan dua alasan pengelompokan itu, dikaitkan dengan `justify-content: space-between` dan `flex-wrap`.

8. Wadah kartu memakai `align-items: flex-start` supaya kartu pendek tidak ikut meregang, tetapi satu kartu unggulan tetap harus meregang penuh setinggi baris. Properti apa yang ditulis pada kartu unggulan itu saja?

9. Bab ini mengizinkan `order` untuk penyesuaian kecil, misalnya mendahulukan kolom kontak di footer pada layar sempit. Apa risiko `order` terhadap pembaca *screen reader*, dan bagaimana batas aman pemakaiannya?

10. Bagaimana cara memastikan di Chrome DevTools bahwa `.produk-row` sudah benar-benar aktif sebagai flex container?

---

## Bab 07 — CSS Grid dan Responsive Web Design

**Bagian A — Pilihan Ganda (5 soal)**

1. Pada kerangka grid dashboard Tokosaya, istilah untuk gabungan beberapa sel yang membentuk wilayah persegi adalah...
   - A. grid track
   - B. sel (cell)
   - C. area
   - D. gap

2. Pada latihan grid Tokosaya, Rina menulis `grid-template-columns: repeat(2, 200px 1fr);` pada sebuah wadah. Rangkaian track yang dihasilkan penulisan itu adalah...
   - A. dua kolom saja, satu kolom berukuran `200px` dan satu kolom berukuran `1fr`
   - B. `200px 200px 1fr 1fr`, karena semua ukuran tetap dikumpulkan lebih dahulu lalu porsi ruang sisa menyusul
   - C. `200px 2fr 2fr`, karena angka `2` mengalikan setiap ukuran di dalam pasangan
   - D. `200px 1fr 200px 1fr`, yaitu pasangan `200px 1fr` yang diulang dua kali

3. Bab ini menganjurkan `gap` alih-alih `margin` untuk memberi jarak antar kartu statistik. Alasan utamanya adalah...
   - A. `gap` dapat mengambil nilai `fr`, sedangkan `margin` hanya menerima satuan `px` dan `%`
   - B. `gap` dipahami browser sebagai jarak di dalam kerangka sehingga setiap sel mendapat hak yang sama, tanpa trik mengecualikan sel pertama atau sel terakhir lewat pseudo-class seperti `:last-child`
   - C. `gap` bekerja pada layout dua dimensi, sedangkan `margin` hanya boleh dipakai pada layout satu dimensi Flexbox
   - D. `gap` sekaligus menyamakan tinggi seluruh baris, sedangkan `margin` tidak memengaruhi tinggi baris

4. Di titik breakpoint 768 piksel, Rina menulis blok `@media (min-width: 768px) and (orientation: portrait) { ... }`. Blok itu diterapkan ketika...
   - A. lebar viewport minimal 768 piksel dan orientasi perangkat sedang portrait, karena kedua syarat harus terpenuhi
   - B. lebar viewport minimal 768 piksel atau orientasi portrait, karena salah satu syarat saja sudah cukup
   - C. lebar viewport paling banyak 768 piksel dan orientasi perangkat tidak lagi diperiksa
   - D. lebar viewport minimal 768 piksel, sedangkan orientasi portrait baru diperiksa bila kedua kondisi dipisah koma

5. Halaman `admin.html` ditulis dengan pendekatan mobile-first; gaya dasar sudah benar dan seluruh blok `min-width` ditulis lengkap bersatuan `px` dengan urutan menaik. Ketika dibuka dari HP, tampilannya tetap seperti versi desktop yang dikecilkan, seolah tidak ada blok media query yang berlaku. Penyebab paling mungkin beserta perbaikannya adalah...
   - A. blok media query berada pada file terpisah sehingga tidak pernah dibaca browser; seluruh aturan harus digabungkan ke satu file CSS
   - B. tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">` belum tertulis sehingga halaman diperlakukan selebar desktop; tag itu harus ditambahkan di `<head>`
   - C. nilai kueri harus diganti menjadi `max-width` supaya gaya baru berlaku di layar kecil; seluruh blok media query harus diubah
   - D. urutan blok media query harus dibalik dari besar ke kecil; susunan blok harus dirapikan dari 1200 px sampai 576 px

**Bagian B — Isian Singkat (5 soal)**

6. Sebuah halaman memuat `<div class="dasbor">` yang menampung `header`, `nav`, `main`, dan `footer` sebagai butir-butir grid dua dimensi. Tuliskan satu deklarasi pada `.dasbor` yang membuat hal itu terwujud.

7. Aturan `.katalog-grid img` dipakai agar gambar produk Tokosaya tidak pernah melebihi wadahnya. Tuliskan tiga deklarasi yang dipakai bab ini dan jelaskan singkat mengapa `display: block` ikut diperlukan.

8. Untuk baris navigasi (logo di kiri, menu di kanan) dan untuk kerangka halaman header–nav–main–footer, teknologi layout mana yang paling tepat? Sebutkan pasangannya beserta satu alasan singkat untuk masing-masing.

9. Judul dashboard Tokosaya memakai `font-size: clamp(1.5rem, 1.1rem + 1.8vw, 2.25rem);`. Sebutkan tiga argumen fungsi `clamp()` secara berurutan beserta peran masing-masing, tanpa perlu menghitung nilainya.

10. Wadah `.katalog-grid` memakai `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));` dan `gap: 20px;`. Anggap wadah tidak memiliki padding dan jendela browser selebar 800 piksel. Berapa kolom yang terbentuk? Sertakan perhitungan singkatnya.

---

## Bab 09 — Pengenalan Bootstrap 5

**Bagian A — Pilihan Ganda (5 soal)**

1. Tim Tokosaya membuka halaman baru di folder `tokosaya-bootstrap/` dan memasang Bootstrap 5.3.3 melalui CDN. URL link yang tepat sesuai versi terkunci pada bab ini adalah...
   - A. `https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/css/bootstrap.min.css`
   - B. `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`
   - C. `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js`
   - D. `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css`

2. Section keunggulan Tokosaya ditulis sebagai `<div class="row g-4">`. Fungsi kelas `g-4` pada elemen tersebut adalah...
   - A. memberi padding skala 4 pada keempat sisi setiap kolom
   - B. membagi lebar baris menjadi empat bagian yang sama besar
   - C. mengatur *gutter*, yaitu jarak antarkolom sekaligus antarbaris, pada skala 4
   - D. menambah jarak luar elemen baris terhadap container sebesar skala 4

3. Footer gelap dan bilah pengumuman landing page Tokosaya harus memenuhi lebar layar dari tepi ke tepi pada semua ukuran perangkat. Kelas wadah yang paling tepat untuk kebutuhan tersebut adalah...
   - A. `.container-fluid`
   - B. `.container`
   - C. `.container-md`
   - D. `.container-xl`

4. Pada `tokosaya-bootstrap/latihan-grid.html` terdapat satu baris berisi `<div class="col-12 col-lg-8">` dan `<div class="col-12 col-lg-4">`. Ketika halaman dibuka pada viewport 1000 px, susunan yang tampil adalah...
   - A. kedua panel bertumpuk penuh karena breakpoint `lg` belum tercapai
   - B. kedua panel tampil sebaris dengan lebar yang sama besar
   - C. panel sidebar tersembunyi karena sisa garis penggaris tidak mencukupi
   - D. kedua panel tampil sebaris dengan konten utama dua kali lebih lebar daripada sidebar

5. Badge "Tersedia" pada kartu produk Tokosaya memakai kelas `text-bg-success`. Makna pola kelas `text-bg-*` tersebut adalah...
   - A. memberi warna hijau pada teks badge tanpa mengubah latarnya
   - B. memberi garis tepi hijau dengan latar transparan agar badge tampak ringan
   - C. memberi latar penuh berwarna peran `success` dengan warna teks otomatis kontras; `success` menunjuk peran warnanya, bukan nama warna mentah
   - D. menyesuaikan warna badge dengan tema gelap atau terang perangkat pengunjung

**Bagian B — Isian Singkat (5 soal)**

6. Kelas responsif Bootstrap bekerja *mobile-first*. Sebutkan lebar viewport saat kelas berawalan `md` mulai berlaku, lalu jelaskan sampai lebar berapa kelas itu tetap aktif.

7. *Starter template* proyek `tokosaya-bootstrap/` memuat empat link berurutan di dalam `head`. Tuliskan urutan keempat link tersebut dan sebutkan link yang wajib berada paling belakang.

8. Terjemahkan pasangan kelas `px-4 py-2` menjadi kalimat sisi dan nilai, mengikuti pola pembacaan *utility* pada bab ini (contoh pola: "`mb-3` = margin bawah 1 rem").

9. Galeri "Kategori Populer" Tokosaya ingin menampilkan 1 kartu per baris di HP, 2 kartu per baris mulai breakpoint `md`, dan 4 kartu per baris mulai breakpoint `xl`. Tuliskan rangkaian kelas kolom yang dipasang pada setiap kartu.

10. Bab ini menyandingkan Bootstrap dengan Tailwind CSS 3.x. Sebutkan nama filosofi yang dipegang Tailwind dan jelaskan bagaimana antarmuka disusun dalam pendekatan tersebut.

---

## Bab 10 — Komponen Bootstrap

**Bagian A — Pilihan Ganda (5 soal)**

1. Kartu produk Tokosaya menulis judul produk sebagai `<h3 class="card-title h6 font-heading">`. Tujuan pemakaian kelas ukuran `h6` pada elemen `h3` tersebut adalah...
   - A. agar pembaca layar melewati judul produk karena ukurannya kecil
   - B. menjaga susunan judul dokumen tetap benar, sementara ukuran tampilannya dibuat kecil
   - C. menurunkan tingkat judul dokumen seakan-akan halaman tidak memiliki judul di atasnya
   - D. agar judul produk otomatis berubah menjadi tautan menuju halaman detail

2. Navbar Tokosaya membungkus seluruh isinya dengan `<div class="container">`. Alasan pemasangan elemen itu adalah...
   - A. agar lebar isi navbar selaras dengan bagian halaman lain di bawahnya
   - B. karena daftar `navbar-nav` hanya boleh ditulis di dalam `container`
   - C. agar isi navbar otomatis tersusun mendatar sejak layar kecil
   - D. karena tombol `navbar-toggler` hanya bekerja di dalam `container`

3. Badge Tokosaya ditulis dengan satu kelas warna, misalnya `<span class="badge text-bg-warning">Best Seller</span>`. Keistimewaan pola `text-bg-*` pada Bootstrap 5.3 adalah...
   - A. hanya mengubah warna latar, sedangkan warna teks diwarisi dari halaman
   - B. menggantikan kelas `badge` sehingga badge cukup ditulis dengan satu kelas
   - C. mengatur warna latar dan warna teks sekaligus supaya kontrasnya tetap terbaca
   - D. mengubah semua ikon di dalam badge agar warnanya mengikuti latar

4. Sesuai kesepakatan bab ini, harga pada kartu produk Tokosaya ditulis dengan format...
   - A. `Rp 650.000`
   - B. `Rp650.000,00`
   - C. `rp650.000`
   - D. `Rp650.000`

5. Untuk memperlihatkan modal "Konfirmasi Pesanan" sebagai status beku di aliran halaman demo tanpa memuat JavaScript, pola yang dipakai buku ini adalah...
   - A. `<div class="modal">` dengan atribut `open` pada elemennya
   - B. `<div class="modal show" tabindex="-1" style="display: block; position: static;">`
   - C. `<div class="modal active">` dengan kelas `carousel-item` di dalamnya
   - D. `<div class="modal fade">` dengan atribut `data-bs-backdrop="static"`

**Bagian B — Isian Singkat (5 soal)**

6. Bootstrap Icons dikemas dalam bentuk apa, dan bagaimana satu ikon dipanggil pada halaman? Sebutkan contoh pasangan kelas untuk ikon keranjang Tokosaya.

7. Atribut apa yang dipasang pada komponen alert agar pembaca layar turut mengumumkan pesannya?

8. Breadcrumb dan pagination sama-sama menandai posisi halaman yang sedang dibuka. Sebutkan kelas dan atribut kunci penanda posisi itu pada masing-masing komponen.

9. Pada modal konfirmasi penghapusan produk dari keranjang tersedia tombol "Batal" dan "Ya, Hapus". Tentukan variant tombol Bootstrap untuk keduanya, lalu jelaskan singkat alasan makna semantik warnanya.

10. Pada carousel statis `demo-status.html`, dua gambar ditulis sebagai `carousel-item`. Tanpa JavaScript, item mana yang tampil, dan apa yang terjadi pada item lainnya?

---

## Bab 11 — Form dan User Interface Design

**Bagian A — Pilihan Ganda (5 soal)**

1. Pilihan pada `select` "Topik" di form kontak Tokosaya makin banyak dan perlu dikelompokkan, misalnya kelompok pertanyaan produk dan kelompok status pesanan. Elemen yang dipakai untuk menamai tiap kelompok pilihan di dalam `select` adalah...
   - A. `<option selected>` pada baris pertama setiap kelompok
   - B. `<optgroup label="…">` yang membungkus sekelompok `<option>`
   - C. `<fieldset>` yang disisipkan di antara `<option>`
   - D. `<legend>` di dalam `<select>`, tepat di atas kelompoknya

2. Sebagian besar pembeli Tokosaya membuka form kontak dari HP. Untuk medan Nomor Telepon, bab ini menganjurkan `type="tel"` karena...
   - A. isiannya otomatis ditolak browser bila mengandung karakter selain angka
   - B. angkanya disamarkan dengan tanda bintang agar tidak terbaca orang di sekitar
   - C. perangkat yang mendukung akan menampilkan pad angka saat medan difokuskan
   - D. formatnya langsung diperiksa kecocokannya dengan kode wilayah Indonesia

3. Medan Pesan pada halaman kontak dibangun dengan `<textarea>`, bukan `<input>`. Pernyataan yang benar tentang `<textarea>` adalah...
   - A. isi awalnya ditulis di antara tag pembuka dan penutup; `input` menyimpannya pada atribut `value`
   - B. isi awalnya ditulis pada atribut `value`, sama seperti `input` teks biasa
   - C. `textarea` hanya dapat menampung satu baris sehingga tidak cocok untuk pesan
   - D. tinggi tampilan `textarea` sepenuhnya tetap dan tidak dapat diubah pengguna

4. Form kontak memasang atribut `required` pada medan email. Ketika tombol "Kirim Pesan" ditekan dalam keadaan email masih kosong, perilaku bawaan browser adalah...
   - A. mengirim formulir dengan email kosong karena `required` hanya hiasan visual
   - B. mengosongkan seluruh medan form supaya pembeli mengisi ulang dari awal
   - C. memasang kelas `is-invalid` lalu menampilkan pesan `invalid-feedback`
   - D. menahan pengiriman dan menampilkan pesan bawaan bahwa medan wajib diisi

5. Seorang rekan tim mengusulkan menghapus cincin fokus pada semua medan kontak agar halaman tampak "lebih bersih". Sikap yang paling sesuai dengan bab ini adalah...
   - A. setuju, karena cincin fokus tidak diperlukan di perangkat sentuh
   - B. menolak; gaya fokus adalah penunjuk utama pengguna keyboard dan harus tetap terlihat, diatur misalnya lewat `:focus-visible`
   - C. setuju, asalkan warna bingkai medan diganti dengan warna kustom
   - D. menolak, tetapi cukup mempertahankannya pada medan teks dan menghapusnya dari tombol kirim

**Bagian B — Isian Singkat (5 soal)**

6. Halaman kontak memuat `form-text` di bawah medan telepon dan akan memuat `invalid-feedback` di bawah medan email. Jelaskan perbedaan peran kedua elemen itu dan kapan masing-masing tampil.

7. Jelaskan perbedaan peran `mb-3` pada pola dasar Bootstrap dan `g-3` pada layout `row` di dalam sebuah form.

8. Medan email pada form kontak memakai `autocomplete="email"`. Sebutkan dua manfaat atribut `autocomplete`.

9. Pada halaman keranjang, tim ingin pilihan pengiriman berupa `select` tidak dapat diubah oleh pembeli, lalu berencana memasang atribut `readonly` pada elemen itu. Apakah rencana tersebut tepat? Jelaskan singkat.

10. Atribut `autofocus` memindahkan fokus secara otomatis saat halaman dimuat. Kapan pemakaiannya wajar dan kapan sebaiknya dihindari? Beri satu contoh untuk masing-masing situasi.

---

## Bab 12 — UI/UX dan Design System

**Bagian A — Pilihan Ganda (5 soal)**

1. Rara menjelaskan perbedaan *user interface* (UI) dan *user experience* (UX) kepada anggota tim yang baru bergabung. Pernyataan yang paling tepat menurut bab ini adalah...
   - A. UI mencakup seluruh perasaan dan hasil yang dialami pengguna selama berbelanja, sedangkan UX adalah wajah visual seperti layout, warna, dan tombol
   - B. UI adalah seluruh wajah visual yang dilihat dan disentuh pengguna, sedangkan UX mencakup seluruh rasa dan hasil yang dialami pengguna dari awal membuka halaman sampai selesai berbelanja
   - C. UI dan UX adalah dua istilah yang berbeda untuk hal yang sama, yaitu susunan layout halaman
   - D. UI hanya mencakup elemen yang bisa diklik, sedangkan UX hanya mencakup pemilihan huruf dan warna

2. Menurut bab ini, design system Tokosaya tersusun dari empat lapisan. Urutan lapisan tersebut dari bawah ke atas adalah...
   - A. design token → komponen → pola dan aturan → dokumentasi
   - B. dokumentasi → pola dan aturan → komponen → design token
   - C. komponen → design token → dokumentasi → pola dan aturan
   - D. design token → pola dan aturan → dokumentasi → komponen

3. Sistem tipografi Tokosaya menjaga panjang baris paragraf sekitar 60–75 karakter per baris. Alasan yang paling tepat untuk aturan tersebut adalah...
   - A. agar jumlah kata pada setiap paragraf seragam di seluruh halaman
   - B. agar halaman dapat dicetak pada kertas berukuran A4 tanpa baris yang terpotong
   - C. agar browser tidak perlu mengunduh ulang keluarga huruf Inter saat berpindah halaman
   - D. agar mata tidak cepat lelah karena perpindahan baris terlalu sering dan pembaca tidak tersesat saat kembali ke baris berikutnya pada layar lebar

4. Seorang anggota tim perlu memberi jarak 32 piksel antar kelompok form pada `styleguide.html`, padahal 32 piksel bukan langkah langsung utilitas jarak Bootstrap. Tindakan yang paling sejalan dengan sistem jarak Tokosaya adalah...
   - A. memakai `gap-4` karena 24 piksel adalah nilai terdekat dan selisih 8 piksel tidak akan terasa
   - B. memakai kombinasi utilitas seperti `mt-5 mb-2` atau satu kelas kustom berisi `margin-block: 32px` yang mengikuti skala desain
   - C. menuliskan `style="margin-top: 32px"` pada setiap elemen form agar semua jaraknya pasti sama
   - D. memilih jarak 30 piksel agar semua form memakai satu nilai yang seragam

5. Notifikasi status pengiriman di halaman Tokosaya hanya dibedakan oleh warna — hijau untuk "terkirim" dan merah untuk "gagal" — tanpa ikon maupun teks status. Menurut aturan do and don't bab ini, cacat utamanya adalah...
   - A. warna hijau dan merah tidak boleh dipakai berdampingan dalam satu halaman
   - B. warna notifikasi seharusnya ditulis sebagai nilai heksa mentah, bukan lewat token
   - C. warna sebagai penyampai makna satu-satunya membuat pengguna dengan penglihatan warna terbatas kehilangan maknanya, sehingga perlu ditambahkan ikon atau teks
   - D. notifikasi semacam itu seharusnya memakai teks kuning `#F59E0B` di atas latar putih agar lebih mudah terlihat

**Bagian B — Isian Singkat (5 soal)**

6. Bab ini mengadopsi istilah dari Don Norman untuk isyarat visual bahwa sebuah elemen menyediakan cara interaksi tertentu — misalnya tombol berlatar warna dan berlengkung yang terlihat bisa ditekan. Istilah apakah itu?

7. Bab ini menyebut dua alasan mengapa konsistensi penting. Sebutkan kedua alasan tersebut.

8. Sebutkan enam nilai piksel yang menempati skala jarak 8 piksel Tokosaya.

9. Styleguide dipakai oleh tiga pembaca utama. Sebutkan ketiga pembaca tersebut.

10. Pada `styleguide.html`, navbar hanya ditampilkan dalam kondisi desktop statis. Jelaskan pembagian tanggung jawab antara dokumentasi statis dan JavaScript untuk komponen seperti navbar, modal, dan dropdown menurut subbab 12.7.

---

## Bab 13 — Website Responsif dan Accessibility

**Bagian A — Pilihan Ganda (5 soal)**

1. Tim Tokosaya menulis gaya dasar satu kolom untuk layar kecil, lalu memperluasnya dengan `@media (min-width: 768px)`. Menurut bab ini, salah satu alasan pendekatan *mobile-first* banyak disukai praktisi adalah...
   - A. media query menjadi tidak diperlukan sehingga berkas CSS lebih pendek
   - B. gaya dasar yang sederhana lebih sedikit saling menimpa sehingga `min-width` tinggal menambah aturan
   - C. setiap perangkat otomatis menampilkan layout yang sama tanpa penyesuaian
   - D. *breakpoint* tidak perlu ditetapkan karena mengikuti perangkat pengguna

2. Bab ini menolak pemakaian "angka ajaib" (*magical px*) pada strategi *breakpoint*. Contoh yang paling tepat disebut angka ajaib adalah...
   - A. `min-width: 576px` karena nilainya sama dengan *breakpoint* sm Bootstrap
   - B. `min-width: 768px` karena dipakai untuk grid `col-md-*`
   - C. `min-width: 992px` karena dipakai untuk grid `col-lg-*`
   - D. `min-width: 693px` karena dipilih hanya ketika layout terasa rusak di lebar itu, bukan dari kebutuhan konten

3. Judul hero Tokosaya memakai `font-size: clamp(1.75rem, 4vw + 1rem, 2.75rem);`. Pernyataan yang paling tepat tentang perilaku ukuran judul itu adalah...
   - A. ukurannya tidak turun di bawah 1,75rem, berhenti tumbuh di 2,75rem, dan di antara keduanya mengalir mengikuti lebar *viewport*
   - B. ukurannya selalu tepat 2,75rem pada semua ukuran layar
   - C. ukurannya terus tumbuh mengikuti `4vw` tanpa batas maksimum
   - D. ukurannya mengecil dari 1,75rem menuju 2,75rem saat layar melebar

4. Setiap halaman Tokosaya ditulis dengan `<html lang="id">`. Menurut tabel butir pemeriksaan bab ini, atribut tersebut terutama menopang prinsip POUR...
   - A. Perceivable
   - B. Operable
   - C. Understandable
   - D. Robust

5. Seorang rekan menambahkan `tabindex="5"` pada tombol keranjang agar dianggap "lebih cepat dijangkau". Tanggapan yang sesuai dengan aturan bab ini adalah...
   - A. tepat, karena `tabindex` positif mempercepat fokus ke elemen penting
   - B. sebaiknya dihindari karena urutan fokus harus mengikuti urutan DOM yang logis; `tabindex` positif membuat urutan menyimpang
   - C. tepat, asalkan nilainya tidak melebihi sepuluh dan diuji di semua browser
   - D. sebaiknya diganti `tabindex="0"` supaya keranjang selalu menjadi fokus pertama di halaman

**Bagian B — Isian Singkat (5 soal)**

6. Hasil audit `katalog.html` menemukan dua `<h1>` pada satu halaman dan ada bagian yang melompat dari `h2` ke `h5`. Sebutkan dua aturan heading yang dilanggar, lalu jelaskan mengapa urutan heading penting bagi pengguna *screen reader*.

7. Atribut `alt` sebuah foto produk di kartu katalog ditulis `alt="produk-keyboard-kx210.svg"`. Tuliskan perbaikan `alt` yang sesuai dengan aturan bab ini beserta alasan singkatnya.

8. Pengguna keyboard mengeluh harus melewati seluruh menu header di setiap halaman Tokosaya. Solusi yang diajarkan bab ini adalah *skip link*. Sebutkan tempat peletakannya, sasaran lompatannya, dan atribut yang diperlukan elemen tujuan.

9. Sebutkan tiga pola navigasi responsif CSS murni yang dilatih bab ini, lalu sebutkan tinggi *target* sentuh minimal sebuah link (termasuk padding) yang dianggap layak.

10. Bab ini menyebut ambang kontras WCAG level AA dalam tiga angka. Sebutkan berturut-turut ambang untuk teks normal, teks besar, dan elemen antarmuka non-teks seperti batas input atau ikon bermakna.

---

## Bab 14 — Implementasi Desain Figma ke HTML CSS

**Bagian A — Pilihan Ganda (5 soal)**

1. Bab ini menggambarkan alur desain ke kode sebagai rantai lima tahap, dari brief sampai handoff. Urutan yang benar dari hulu ke hilir adalah...
   - A. brief → wireframe → arsitektur informasi dan sitemap → UI design di Figma → handoff
   - B. brief → arsitektur informasi dan sitemap → wireframe → UI design di Figma → handoff
   - C. arsitektur informasi dan sitemap → UI design di Figma → brief → wireframe → handoff
   - D. wireframe → brief → handoff → arsitektur informasi dan sitemap → UI design di Figma

2. Pernyataan yang paling tepat mengenai perbedaan prototip dan implementasi adalah...
   - A. prototip adalah kode HTML yang belum diberi CSS, sedangkan implementasi adalah kode yang sudah dirapikan
   - B. prototip dan implementasi menjawab pertanyaan yang sama sehingga keduanya tidak perlu dibedakan saat handoff
   - C. implementasi dikerjakan lebih dahulu, lalu prototip menyalin hasilnya sebagai acuan desainer
   - D. prototip adalah simulasi desain yang menjawab "seperti apa bentuknya", sedangkan implementasi adalah kode sebenarnya yang menjawab "bagaimana bentuk itu hidup di semua layar"

3. Pada column grid frame desktop Tokosaya, dua angka penting yang dibaca dari garis grid adalah gutter dan margin. Pernyataan yang tepat mengenai keduanya adalah...
   - A. gutter adalah celah antarkolom 24 px, sedangkan margin adalah jarak 150 px dari tepi frame ke tepi kontainer di sisi kiri dan kanan
   - B. gutter adalah ruang kosong 150 px di sisi kiri-kanan frame, sedangkan margin adalah celah antarkolom 24 px
   - C. gutter adalah lebar satu kolom grid 73 px, sedangkan margin adalah celah antarkolom 24 px
   - D. gutter adalah jarak antarbaris teks di dalam kolom, sedangkan margin adalah lebar kontainer konten

4. Pemetaan Figma styles ke CSS dijalankan dalam dua lapis. Pasangan contoh yang tepat untuk kedua lapis itu adalah...
   - A. color style "Warna/Accent" menjadi kelas `.badge-populer`, sedangkan text style "Body/Paragraph" menjadi variabel `--clr-body`
   - B. color style "Warna/Accent" menjadi variabel `--clr-accent` di blok `:root`, sedangkan text style "Body/Paragraph" menjadi aturan `body` (Inter 400, 16 px, line-height 1,6)
   - C. color style dan text style sama-sama menjadi variabel di blok `:root`, lalu dipanggil lewat `var()` dari setiap komponen
   - D. color style disalin sebagai nilai hex langsung di tiap selector komponen, sedangkan text style disalin sebagai atribut di markup HTML

5. Spesifikasi frame desktop Tokosaya menyebut kontainer 1140 px, grid 12 kolom, gutter 24 px, dan lebar satu kolom 73 px. Bila desain menempatkan satu komponen pada dua kolom berurutan, lebar area komponen itu adalah...
   - A. 219 px
   - B. 194 px
   - C. 170 px
   - D. 146 px

**Bagian B — Isian Singkat (5 soal)**

6. Bab ini menyebut design token sebagai satu sumber kebenaran. Jelaskan secara singkat apa itu design token dan di bagian mana ia diletakkan di dalam file CSS proyek Tokosaya.

7. Grid desain yang dipakai Tokosaya memiliki dua belas kolom. Mengapa angka 12 dipilih, dan sebutkan dua contoh kombinasi kolom yang bisa dibentuk dari grid itu.

8. Praktikum menganjurkan menyalin nilai dari panel Inspect, bukan menyalin mentah semua propertinya. Ke mana nilai hasil salinan itu ditulis, dan mengapa salinan mentah bisa justru merugikan proyek?

9. Selain frame desktop 1440 px, Tokosaya menyiapkan frame tablet 768 px dan HP 375 px. Tuliskan gutter dan margin kontainer untuk kedua frame itu, lalu sebutkan pada lebar berapa kolom detail produk mulai menumpuk.

10. Badge status pada kartu produk terkait memakai token semantik, bukan warna aksen. Sebutkan token beserta nilai hex untuk badge "Tersedia" dan badge "Stok Terbatas".

---

## Bab 15 — Final Project dan Quality Assurance

**Bagian A — Pilihan Ganda (5 soal)**

1. Tim Tokosaya mengisi test matrix QA responsif untuk empat halaman pada tiga breakpoint. Sebuah test matrix dinyatakan tuntas apabila...
   - A. seluruh sel pertemuan halaman × breakpoint terisi status (lulus atau temuan) beserta catatan singkatnya
   - B. setiap halaman cukup diuji pada satu breakpoint yang paling berisiko saja
   - C. sel yang berisi temuan diberi catatan lengkap, sedangkan sel berstatus lulus boleh dikosongkan
   - D. pengujian dihentikan setelah seluruh halaman pernah dibuka melalui device toolbar

2. Bab ini menyederhanakan breakpoint baku Bootstrap menjadi tiga kolom praktis pada test matrix. Pembagian yang tepat adalah...
   - A. HP 320–575 px, tablet 576–767 px, dan desktop 768 px ke atas
   - B. HP 360–767 px, tablet 768–991 px, dan desktop 992–1199 px
   - C. HP 360–575 px, tablet 768–991 px, dan desktop 992 px ke atas
   - D. HP 360–575 px, tablet 576–991 px, dan desktop 1200 px ke atas

3. Rilis kandidat Tokosaya menyisakan tiga temuan: F-01 link navigasi katalog mati, F-02 kontras teks hero hanya 3 : 1, dan F-03 radius kartu 8 px sementara styleguide menetapkan 12 px. Urutan perbaikan dari prioritas tertinggi ke terendah adalah...
   - A. F-03 → F-02 → F-01
   - B. F-02 → F-01 → F-03
   - C. F-02 → F-03 → F-01
   - D. F-01 → F-02 → F-03

4. Kartu produk Tokosaya membutuhkan bayangan khas merek yang tidak tersedia sebagai utilitas Bootstrap. Tindakan yang paling sejalan dengan praktik terbaik subbab 15.4 adalah...
   - A. menuliskan `style="box-shadow: …"` langsung pada setiap elemen kartu agar tidak menyentuh file CSS
   - B. membuat kelas komponen sendiri di `css/style.css`, diberi penanda `/* kustom */`, dengan nilai yang mengacu token
   - C. menimpa kelas baku `.card` memakai `!important` supaya seluruh kartu ikut berubah sekaligus
   - D. menambah tautan CDN Bootstrap versi terbaru yang menyediakan utilitas bayangan merek

5. Seorang rekan menelusuri halaman `kontak.html` tanpa menyentuh mouse — hanya tombol tab dan enter — lalu mencatat bahwa urutan fokus mengalir logis dan indikator fokus terlihat. Pemeriksaan wajib audit aksesibilitas yang sedang dijalankan adalah...
   - A. teks alternatif — memastikan setiap `img` produk memakai `alt` yang menjelaskan konten dan tujuannya
   - B. kontras — memastikan teks utama mencapai rasio minimal 4,5 : 1 terhadap latarnya
   - C. keyboard dan fokus — memastikan halaman dapat dioperasikan tanpa mouse, termasuk skip link dan indikator fokus
   - D. struktur heading — memastikan satu `h1` per halaman dan tidak ada lompatan level heading

**Bagian B — Isian Singkat (5 soal)**

6. Bab ini menetapkan konvensi penamaan untuk berkas, folder, dan kelas CSS proyek Tokosaya. Sebutkan nama pola penamaannya beserta dua contoh nama kelas yang sesuai konvensi itu.

7. Saat men-debug aturan CSS yang bertabrakan di DevTools, panel manakah yang menampilkan nilai akhir yang benar-benar menyala setelah seluruh aturan bertanding? Jelaskan pula gunanya panel itu dalam metode debugging.

8. Bab ini membedakan *deployment* dan *rilis kandidat*. Jelaskan pengertian keduanya, lalu sebutkan dua bentuk deployment yang disebut bab ini.

9. Istilah apa yang dipakai bab ini untuk pengujian penerimaan oleh pengguna atau klien sebelum peluncuran resmi? Sebutkan pula siapa pengguna yang dimaksud pada studi kasus Tokosaya.

10. Peer review silang dijalankan setelah audit mandiri. Jelaskan tujuan peer review dan bagaimana pelaksanaannya agar tidak menjadi review satu arah.

---


