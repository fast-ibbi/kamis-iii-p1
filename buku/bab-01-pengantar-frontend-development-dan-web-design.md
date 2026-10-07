# BAB 1 — Pengantar Frontend Development dan Web Design

## Deskripsi Singkat

Bab ini menjadi pengantar untuk seluruh isi buku. Anda akan mengenal *frontend development* (pengembangan sisi depan website), kaitannya dengan *backend*, dan peran frontend dalam alur pengembangan sistem informasi. Anda juga akan membuat dokumen HTML pertama berupa halaman profil mahasiswa, lalu memeriksanya dengan Chrome DevTools. Kita juga akan mengenal peta isi buku dan Tokosaya, studi kasus yang akan muncul di bab-bab berikutnya. Di Bab 2, Anda akan belajar menyusun struktur dokumen dengan HTML5 semantik sebelum mulai menggunakan CSS.

## Tujuan Pembelajaran

Setelah menyelesaikan bab ini, Anda diharapkan bisa:

1. Menjelaskan apa itu *frontend development*, cakupan kerjanya, dan kaitannya dengan hal-hal yang dilihat pengguna di layar.
2. Membedakan tanggung jawab *frontend* dan *backend* pada sebuah website.
3. Menjelaskan posisi frontend dalam alur pengembangan sistem informasi, dari kebutuhan bisnis hingga implementasi, termasuk peran lulusan Sistem Informasi.
4. Membedakan *web design*, *user interface* (UI), *user experience* (UX), HTML, dan CSS, serta menjelaskan alur *design → code*.
5. Membuat halaman profil mahasiswa dengan HTML (heading, paragraf, gambar, daftar, dan tautan) yang valid.
6. Memeriksa struktur halaman dengan Chrome DevTools dan menjelaskan hasilnya.
7. Menyusun folder proyek web sederhana sesuai pola yang dipakai di buku ini.

## Capaian Pembelajaran

Sub-capaian bab ini mendukung capaian program studi (CPMK) berikut:

- **CPMK 1** — Mampu menjelaskan kerangka konseptual *frontend development* beserta posisinya dalam pengembangan sistem informasi dan desain web.
- **CPMK 2** — Mampu menulis dokumen HTML pertama yang valid, mengikuti konvensi penataan folder proyek, dan menginspeksi hasilnya dengan Chrome DevTools sebagai awal disiplin pengujian antarmuka.

Penjelasan tentang frontend–backend dan alur *design → code* mendukung CPMK 1. Praktik membuat halaman profil, menggunakan DevTools, dan menata folder proyek mendukung CPMK 2. Kedua capaian ini menjadi bekal untuk bab-bab berikutnya, yang dibangun bertahap lewat satu proyek yang sama.

## Kata Kunci

Kata kunci bab ini: *frontend development* (bagian website yang dilihat dan digunakan pengunjung), *backend* (sisi server yang mengelola data dan logika bisnis), *peramban* atau *browser* (perangkat lunak untuk membuka halaman web, seperti Google Chrome), *HTML* (HyperText Markup Language; bahasa markup untuk menyusun konten), *CSS* (Cascading Style Sheets; bahasa untuk mengatur tampilan dan tata letak), *CSS framework* (kumpulan gaya dan komponen siap pakai untuk membuat antarmuka), *user interface* atau UI (bagian antarmuka yang digunakan pengunjung), *user experience* atau UX (pengalaman pengguna saat memakai sistem), *Chrome DevTools* (alat bawaan Chrome untuk memeriksa halaman), dan *URL* (Uniform Resource Locator; alamat sumber daya web). Istilah-istilah ini akan sering muncul di bab berikutnya. Gunakan pengertian di atas sebagai panduan saat menjumpainya.

## Apersepsi

Mari kenalan dengan Tokosaya, toko online fiktif milik UMKM di Jakarta yang berdiri pada 2019. Toko ini menjual aksesori dan elektronik komputer, seperti keyboard, mouse, headphone, monitor, dan webcam. Prinsip pemiliknya sederhana: *harga jujur, layanan cepat*, dengan tagline **"Belanja Tepat, Kirim Cepat"**. Selama ini, transaksi dilakukan lewat pesan singkat: pembeli menanyakan stok lewat chat, pemilik membalas satu per satu, lalu pesanan dicatat di buku. Cara ini masih berjalan, tetapi makin sulit dikelola saat pesanan bertambah. Pertanyaan yang sama terus muncul, catatan pesanan berantakan, dan foto produk yang dikirim tidak selalu sama.

Pemilik Tokosaya lalu menemui tim mahasiswa Sistem Informasi di kampus Anda. Permintaannya sederhana: *saya ingin toko saya ada di internet, orang bisa melihat produk dan menghubungi saya.* Ia tidak menyebut HTML, CSS, server, atau basis data. Ia menjelaskan kebutuhannya: toko harus mudah ditemukan, produknya bisa dilihat, dan tampil meyakinkan.

Di sinilah peran mahasiswa Sistem Informasi: menerjemahkan kebutuhan tersebut menjadi rencana, lalu menjadi website yang bisa digunakan pengunjung. Kita belum membangun seluruh proyek di bab ini; kita mulai dengan mengenal frontend dan backend, melihat bagaimana desain diterjemahkan menjadi kode, dan membuat halaman web pertama. Proyek Tokosaya akan dimulai sebagai folder proyek pada bagian Contoh Kode, lalu dikembangkan sedikit demi sedikit—dari HTML dasar sampai website responsif yang siap dipresentasikan pada ujian akhir. Cerita Tokosaya akan menemani perjalanan belajar Anda selama satu semester.

Skenario seperti ini sering muncul di proyek Sistem Informasi: klien menjelaskan kebutuhannya, lalu tim menerjemahkannya menjadi sistem. Skalanya bisa berbeda. Tokosaya mungkin hanya membutuhkan beberapa halaman, sedangkan sistem akademik kampus bisa terdiri dari banyak modul. Namun, pertanyaan dasarnya sama: apa yang perlu ditampilkan, apa yang perlu disimpan, dan bagaimana keduanya saling terhubung. Di buku ini, Anda akan mempelajari bagian tersebut dari sudut pandang frontend.

## Materi Pembelajaran

Bagian ini terdiri dari sembilan subtopik, mulai dari pengertian dasar sampai praktik pertama Anda. Ikuti urutannya karena tiap subtopik menyiapkan konsep untuk bagian berikutnya.

### 1.1 Apa Itu Frontend Development

*Frontend development* adalah pekerjaan membuat bagian website yang dilihat dan digunakan pengunjung. Misalnya, judul di bagian atas halaman, foto produk, dan tombol: semua itu termasuk wilayah frontend. Kata *front* berarti sisi depan yang berhadapan langsung dengan pengunjung, berbeda dari sisi belakang tempat data dan logika dikelola.

Di buku ini, kita akan berkenalan dengan tiga bagian utama pekerjaan frontend. **HTML** menyusun konten—judul, paragraf, daftar, gambar, tautan, dan formulir—dalam urutan yang bermakna. **CSS** mengatur tampilannya, seperti warna, ukuran huruf, jarak, dan tata letak untuk ponsel maupun komputer. Untuk mempercepat pekerjaan, kita juga akan memakai **CSS framework** seperti Bootstrap, yaitu kumpulan gaya dan komponen antarmuka siap pakai yang bisa disesuaikan.

Perlu diketahui, pekerjaan frontend di dunia industri juga mencakup interaksi dinamis, seperti memperbarui isi keranjang tanpa memuat ulang halaman. Interaksi seperti ini biasanya dibuat dengan JavaScript, tetapi buku ini **tidak membahas JavaScript**. Fokus mata kuliah ini adalah *translasi desain*: menerjemahkan rancangan antarmuka menjadi website statis yang responsif, konsisten, dan mudah diakses dengan HTML dan CSS. Kebutuhan tampilan Tokosaya—seperti kartu produk, halaman hero, formulir kontak, dan katalog—bisa dibuat tanpa JavaScript. Interaksi yang lebih kompleks akan dipelajari di mata kuliah pemrograman web lanjutan.

Untuk membedakan kebutuhan frontend dan backend, tanyakan: *apakah kebutuhan ini mengubah apa yang dilihat, dibaca, atau digunakan pengunjung?* Kalau iya—misalnya, tombol kontak perlu mudah ditemukan—itu termasuk frontend. Kalau kebutuhannya berhubungan dengan data, seperti mencatat dan melacak transaksi, bagian utamanya ada di backend, meski hasilnya nanti juga terlihat di halaman. Cara memilah ini akan berguna saat menganalisis kebutuhan Tokosaya di bagian Studi Kasus.

Satu hal yang perlu diluruskan: frontend bukan berarti "bagian yang mudah", begitu juga backend bukan berarti "bagian yang lebih canggih". Keduanya punya tantangan berbeda. Saat membuat kartu produk, misalnya, kita perlu memikirkan tampilannya di ponsel, informasi yang tetap terbaca saat gambar lambat dimuat, dan cara menulis harga agar tidak tertukar dengan diskon.

Mengapa mahasiswa Sistem Informasi perlu mempelajari frontend? Dalam banyak proyek, lulusan SI bekerja bersama klien, desainer, dan programmer untuk memastikan kebutuhan bisnis benar-benar sampai ke layar. Contohnya ada di sistem nilai akademik, portal perpustakaan, aplikasi antrean rumah sakit, dan website layanan publik. Pengguna berinteraksi dengan semua sistem itu lewat antarmuka. Buku ini akan membantu Anda memahami hubungan antara sistem dan penggunanya, lalu membuat antarmuka dari dasar.

### 1.2 Frontend vs Backend

*Backend* adalah bagian website yang berjalan di server. Bagian ini menerima permintaan, mengolah data, lalu mengirim hasilnya untuk ditampilkan. Frontend dan backend saling bergantung. Untuk membayangkan hubungannya, kita bisa memakai analogi **ruang kafe dan dapur**.

Bayangkan Anda datang ke kafe. Menu, kasir, sajian, dan tempat duduk adalah bagian yang langsung Anda gunakan. Itulah **frontend**: bagian yang membantu pengunjung merasa nyaman dan tahu apa yang bisa dilakukan. Di balik pintu ada **dapur**, tempat bahan disimpan dan pesanan disiapkan. Pengunjung mungkin tidak melihat dapur, tetapi tanpa dapur kafe tidak bisa menyajikan makanan. Pelayan yang mengantar pesanan dari meja ke dapur dan membawa makanan kembali bisa diibaratkan sebagai penghubung antara frontend dan backend. Hubungan ketiganya terlihat di ilustrasi berikut:

File: ilustrasi/1-2-kafe-frontend-backend.txt

```
[ PENGUNJUNG KAFE ]
        |
        v
+--------------------------------------+
|  RUANG KAFE  =  FRONTEND             |
|  menu, kasir, saji-an, tata ruang    |
|  (segala yang dilihat dan diraba)    |
+-------------------|------------------+
                    |  pelayan = pengantar
                    |  pesan (permintaan <-> hasil)
+-------------------v------------------+
|  DAPUR & STOK  =  BACKEND            |
|  resep, persediaan, pembukuan        |
|  (bekerja tepat tanpa terlihat)     |
+--------------------------------------+
```

Dalam istilah teknis, frontend menggunakan markup dan gaya (HTML dan CSS, serta interaksi tertentu), sedangkan backend mengelola logika dan basis data. Tabel berikut membandingkan keduanya.

| Aspek | Frontend | Backend |
|---|---|---|
| Bekerja pada | Peramban pengguna | Server |
| Bahasa & teknologi inti | HTML, CSS (dan framework antarmuka) | Bahasa server (mis. PHP, Python, Java) + basis data |
| Fokus yang diukur | Tampilan, responsif, aksesibilitas, keterbacaan | Keandalan data, keamanan, kinerja pemrosesan |
| Hasil yang terlihat | Kartu produk, tombol, formulir | Stok berkurang, pesanan tersimpan, surel terkirim |
| Cara pengguna menilai | "Rapi dan mudah" | "Cepat, akurat, tidak bocor" |

Pada Tokosaya, pembagian ini cukup mudah dilihat. Kartu produk berisi nama *Keyboard Mekanis KX-210* dan harga Rp650.000 adalah bagian frontend: bentuk, teks, dan susunannya. Saat tombol "Beli" ditekan dan stok berkurang di sistem toko, backend yang mengurusnya. Begitu juga harga terbaru yang dikirim dari server; frontend menampilkannya. Contoh serupa ada di sistem informasi rumah sakit: nomor antrean yang terlihat pasien adalah frontend, sedangkan rekam medis yang disimpan dengan aman dikelola backend.

Pembagian ini kadang terasa kabur karena hasil kerja frontend dan backend sama-sama muncul di layar. Cara mudah membedakannya: frontend mengurus **tampilan dan interaksi**, sedangkan backend mengurus **data dan aturan bisnis**. Di kotak pencarian Tokosaya, bentuk kotak, ikon kaca pembesar, dan tata letaknya adalah frontend. Proses mencari produk berdasarkan kata kunci adalah backend. Pada formulir kontak, kolom nama dan email beserta labelnya termasuk frontend, sedangkan proses mengirim dan mencatat pesan termasuk backend. Membiasakan diri memilah kebutuhan seperti ini akan membantu Anda saat menganalisis kebutuhan klien.

Jadi, frontend **bukan** bagian yang mudah dan backend bukan bagian yang sulit. Tantangannya berbeda: backend berfokus pada logika dan keutuhan data, sedangkan frontend perlu memastikan antarmuka tetap jelas dan konsisten di berbagai ukuran layar. Buku ini berfokus pada frontend agar Anda bisa membuat antarmuka yang siap ditunjukkan kepada klien.

### 1.3 Posisi Frontend dalam Pengembangan Sistem Informasi

Sistem informasi tidak langsung dimulai dari kode. Biasanya, pengembang memulai dari kebutuhan, lalu melewati tahap **kebutuhan bisnis → analisis → desain → implementasi → pengujian → pemeliharaan**. Frontend berperan saat rancangan diterjemahkan menjadi halaman yang berjalan di peramban dan digunakan pengunjung.

Mari lihat tahap-tahapnya lewat contoh Tokosaya. Pada tahap **kebutuhan bisnis**, pemilik mengatakan bahwa ia ingin tokonya bisa dilihat dan dihubungi lewat internet. Pada tahap **analisis**, tim merinci siapa pengunjungnya, produk apa yang ditampilkan, informasi apa yang dibutuhkan, dan bagaimana proses dari pencarian sampai pemesanan. Tahap **desain** mengubah kebutuhan itu menjadi rancangan antarmuka, termasuk tata letak, warna, dan tombol. Pada tahap **implementasi**, frontend membuat halaman dengan HTML dan CSS, sementara backend menyiapkan layanan data. Tahap **pengujian** memeriksa hasilnya, lalu tahap **pemeliharaan** menjaga sistem tetap berjalan setelah diluncurkan.

Frontend menjadi **titik temu** antara beberapa hal: kebutuhan klien, rancangan antarmuka, dan data yang dikelola backend. Lulusan Sistem Informasi sering bekerja di antara sisi bisnis, teknologi, dan pengguna. Karena itu, mata kuliah ini melatih *translasi desain*: membaca keputusan desain lalu mengubahnya menjadi kode yang sesuai. Tabel berikut merangkum pertanyaan dan hasil dari tiap tahap:

| Tahap | Pertanyaan kunci | Keluaran khas |
|---|---|---|
| Kebutuhan bisnis | Apa masalah yang ingin diselesaikan? | daftar kebutuhan utama dari klien |
| Analisis | Apa yang sistem harus mau dan bisa? | spesifikasi kebutuhan, peran pengguna |
| Desain | Bagaimana tampak dan terasa di layar? | rancangan antarmuka, tata letak, warna |
| Implementasi | Bagaimana rancangan dihidupkan? | halaman HTML/CSS (frontend) + layanan data (backend) |
| Pengujian & pemeliharaan | Apakah sesuai dan tetap berguna? | catatan temuan, perbaikan, pembaruan rutin |

Contohnya, pada proyek sistem informasi perpustakaan kampus, hasil analisis mungkin menyatakan bahwa peminjam perlu melihat ketersediaan buku. Desainnya bisa berupa halaman daftar buku dan formulir peminjaman. Frontend kemudian membuat halaman tersebut dengan HTML dan CSS. Kalau formulir tidak punya label atau tombolnya membingungkan, pengguna bisa kesulitan meski backend bekerja dengan baik. Jadi, frontend bukan sekadar hiasan; antarmuka yang jelas membantu orang menggunakan sistem.

Dalam tim kecil, satu orang bisa menjalankan beberapa peran sekaligus: mencatat kebutuhan, merancang tampilan, dan menulis HTML serta CSS. Buku ini paling banyak melatih peran implementasi, tetapi Anda juga akan mempertimbangkan kebutuhan dan pilihan desain setiap kali membuat halaman Tokosaya. Perpaduan peran ini membantu lulusan SI menerjemahkan permintaan klien—seperti "saya ingin toko saya ada di internet"—menjadi rencana dan halaman yang bisa dilihat.

### 1.4 Web Design, UI, UX, HTML, dan CSS

Istilah-istilah ini sering tertukar, padahal maknanya berbeda. *Web design* mencakup perancangan tampilan dan pengalaman sebuah website—misalnya, apakah halaman mudah dibaca dan digunakan. *User interface* (UI) adalah bagian yang langsung dilihat dan digunakan, seperti tombol, kartu produk, ikon keranjang, dan formulir. *User experience* (UX) mencakup pengalaman pengguna secara keseluruhan: mudah atau tidaknya menemukan produk, memahami proses transaksi, dan merasa yakin saat menggunakan website. Singkatnya, UI adalah tampilan dan kontrol yang digunakan, UX adalah pengalaman saat menggunakannya, dan *web design* menyelaraskan keduanya.

HTML dan CSS digunakan untuk membangun rancangan tersebut. **HTML** (*HyperText Markup Language*) menyusun konten seperti heading, paragraf, daftar, gambar, tautan, dan formulir. **CSS** (*Cascading Style Sheets*) mengatur warna, huruf, jarak, dan tata letak. Keduanya punya tugas berbeda, seperti struktur bangunan dan catnya. Buku ini menggunakan HTML dan CSS untuk membuat halaman Tokosaya yang layak ditampilkan dan dipresentasikan.

Alur kerja yang akan sering dipakai di buku ini adalah **design → code**. Pertama, kebutuhan dibuat menjadi rancangan menggunakan alat seperti Figma (dibahas di Bab 14). Lalu, rancangan diterjemahkan menjadi struktur HTML—heading, paragraf, gambar, dan daftar—kemudian ditata dengan CSS, seperti memberi warna, mengatur ukuran, jarak, dan tata letak. Jika komponen yang sama digunakan berulang kali, CSS framework dapat membantu menghemat waktu dan menjaga konsistensi. Misalnya, desain kartu Keyboard Mekanis KX-210 memiliki lencana *Best Seller* kecil berwarna amber dengan teks gelap. HTML menempatkan teks lencana pada bagian yang tepat, CSS mengatur warna dan bentuknya, dan nanti komponen *badge* Bootstrap bisa digunakan untuk membuatnya. Begitu juga jika rancangan menetapkan kartu putih dengan sudut membulat dan harga berwarna indigo: HTML menyusun isi kartu, sedangkan CSS mengatur tampilannya. Dengan alur ini, Anda menerjemahkan rancangan, bukan memulai dari tebakan.

Mengapa desain dan implementasi kadang dikerjakan sebagai dua peran terpisah? Perubahan lebih mudah dilakukan saat rancangan belum diterjemahkan menjadi kode. Setelah kode dibuat, rancangan juga memberi acuan yang jelas untuk memeriksa hasilnya—misalnya, apakah sudut kartu dan warna tombol sudah sesuai. Mata kuliah ini melatih Anda membaca rancangan sekaligus menuliskan kodenya.

### 1.5 Anatomi Sebuah Website

Sebelum menulis kode, kenali dulu bagian-bagian website. **Halaman** (*page*) adalah satu dokumen HTML yang menampilkan konten tertentu, misalnya beranda atau katalog Tokosaya. Beberapa halaman yang saling terhubung membentuk **website**. Website juga biasanya memiliki **aset** pendukung, seperti gambar, file CSS, font, dan ikon. Semua berkas ini disimpan dalam folder proyek.

Pola folder proyek Tokosaya yang akan kita bangun sepanjang Bab 1–8 berbentuk seperti ini:

File: ilustrasi/1-5-struktur-folder-tokosaya.txt

```
tokosaya-css/
├── index.html              <- halaman beranda
├── katalog.html            <- daftar produk
├── tentang.html            <- profil toko
├── kontak.html             <- form kontak
├── css/
|   └── style.css           <- satu file gaya bersama
└── img/
    ├── produk-keyboard-kx210.svg
    ├── produk-mouse-mw88.svg
    └── logo-tokosaya.svg
```

Ada tiga hal yang bisa diperhatikan dari struktur folder tersebut. Pertama, semua halaman memakai satu file CSS bersama (`css/style.css`), jadi gaya bisa dijaga konsisten dan diperbaiki di satu tempat. Kedua, nama file menggunakan huruf kecil dan tanda hubung, atau *kebab-case*, misalnya `produk-keyboard-kx210.svg`. Pola ini membantu menghindari masalah penamaan antar sistem operasi. Ketiga, setiap halaman disimpan sebagai file `.html` terpisah, bukan digabung dalam satu file besar.

Sebelum lanjut, kenali beberapa istilah. **Domain** adalah alamat website, misalnya `tokosaya.id`, yang biasanya disewa dari penyedia domain. **Hosting** adalah layanan untuk menyimpan berkas website di server agar bisa diakses lewat internet. Saat berlatih di komputer sendiri, Anda menyimpan berkas di komputer dan membukanya di peramban. Website belum dipasang di internet. Proses memindahkan berkas ke server dan menghubungkannya ke domain disebut *deployment*. Untuk sekarang, cukup pahami gambaran dasarnya.

Nama `index.html` juga punya alasan. Saat pengunjung membuka alamat website tanpa menyebut nama file—misalnya `tokosaya.id/`—server biasanya menampilkan halaman utama bernama `index.html`. Karena itu, proyek di buku ini menggunakan `index.html` sebagai halaman utama, bukan `utama.html` atau `halaman1.html`.

Untuk gambar, ada dua jenis berkas yang akan sering Anda temui. **SVG** menyimpan gambar sebagai bentuk, seperti garis dan lingkaran. Karena itu, gambar SVG tetap tajam saat ukurannya diubah dan cocok untuk logo, ikon, serta ilustrasi sederhana. Proyek Tokosaya memakai gambar SVG. **JPEG** dan **PNG** menyimpan gambar sebagai piksel dan umum dipakai untuk foto serta tangkapan layar. Pilih jenis berkas sesuai kebutuhan dan jaga ukurannya tetap wajar agar halaman cepat dibuka, terutama lewat jaringan ponsel.

**URL** (*Uniform Resource Locator*) adalah alamat lengkap sebuah sumber daya web. Contohnya, pada `https://tokosaya.id/katalog.html`, `https` adalah skema atau protokol, `tokosaya.id` adalah domain, dan `/katalog.html` adalah jalur menuju berkas. Di Bab 2, Anda akan membuat tautan relatif seperti `<a href="katalog.html">`. Jalur ini dibaca berdasarkan lokasi halaman saat ini, bukan sebagai alamat lengkap.

### 1.6 Cara Browser Merender Halaman dan Pengenalan Chrome DevTools

Apa yang terjadi saat Anda membuka halaman web? Secara sederhana, ada empat langkah. Pertama, peramban **menerima dokumen HTML** dari server atau dari folder di komputer Anda. Kedua, peramban **membaca tag** dan menyusunnya menjadi pohon dokumen. Dalam pohon ini, elemen seperti `<html>` membungkus `<head>` dan `<body>`, sementara elemen seperti `<h1>` dan `<p>` menjadi bagian di dalamnya. Pohon ini disebut *DOM* (*Document Object Model*). Ketiga, peramban **menerapkan gaya CSS** pada elemen-elemen tersebut. Keempat, peramban **menampilkan hasilnya** di layar. Singkatnya: HTML diterima → pohon dokumen disusun → CSS diterapkan → halaman ditampilkan.

Ingat, **peramban membaca kode, bukan menebak maksud kita**. Kalau tampilan halaman salah, biasanya ada bagian HTML atau CSS yang perlu diperiksa. Di Bab 5–7, cara berpikir ini akan membantu Anda mencari penyebab masalah jarak dan tata letak.

Untuk memeriksa struktur halaman, Chrome menyediakan **Chrome DevTools**. Buka dengan menekan `F12` atau klik kanan halaman lalu pilih *Inspect*. Di panel **Elements**, Anda bisa melihat pohon tag halaman. Klik salah satu baris untuk menyorot elemen yang sesuai di halaman. Panel lain memiliki fungsi yang lebih lanjut; untuk sekarang, cukup kenali panel Elements dan dua kegunaan berikut.

Di bab ini, Anda akan memakai DevTools untuk memeriksa struktur halaman dan melihat tampilannya pada ukuran layar berbeda lewat *device toolbar*. Di Bab 7 dan Bab 13, alat ini akan dipakai lebih lanjut untuk menguji tampilan responsif dan aksesibilitas.

Biasakan menyimpan perubahan, memuat ulang halaman, lalu memeriksanya di browser. Kadang masalahnya bukan pada kode, melainkan halaman yang masih menampilkan versi lama. Langkah *simpan → muat ulang → periksa* akan sangat membantu saat tata letak mulai lebih rumit di bab-bab berikutnya.

Pemahaman ini juga membantu saat pengguna melaporkan masalah. Misalnya, klien berkata, "Tombolnya hilang di ponsel," atau "Tulisannya menabrak logo." Anda bisa mulai dengan dua pertanyaan: apakah elemennya ada di struktur (periksa lewat Elements), dan berapa lebar layar yang digunakan (periksa lewat *device toolbar*)? Dengan begitu, masalahnya bisa diperiksa langkah demi langkah.

### 1.7 HTML, CSS, dan CSS Framework

Sekarang, mari bedakan tiga teknologi yang akan digunakan. **HTML mengatur struktur** konten, seperti judul, isi, dan footer. **CSS mengatur tampilannya**, mulai dari warna tautan sampai tata letak beberapa kolom. **CSS framework** menyediakan komponen siap pakai agar pembuatan antarmuka lebih cepat dan konsisten. Buku ini menggunakan **Bootstrap 5** melalui CDN (file gaya dimuat dari internet), mulai Bab 9.

Kenapa Bootstrap baru dibahas di Bab 9? Supaya Anda memahami dasar HTML dan CSS sebelum menggunakan komponen siap pakai. Tanpa dasar tersebut, Anda mungkin bisa memakai komponen, tetapi sulit memahami cara kerjanya atau menyesuaikannya saat ada masalah. Urutannya adalah belajar dasar dulu (Bab 2–7), baru memakai framework (Bab 9–11). Setelah membuat kartu produk dengan CSS, Anda akan lebih mudah memahami kartu Bootstrap. Anda juga bisa menimbang manfaat framework—seperti kecepatan dan konsistensi—serta hal yang perlu dipertimbangkan, seperti waktu belajar dan batas penyesuaiannya.

Berikut peta isi buku agar Anda tahu apa yang akan dipelajari di tiap bab:

| Bab | Fokus | Kemampuan yang dibangun |
|---|---|---|
| 1 (bab ini) | Fondasi & HTML pertama | konsep frontend, halaman profil |
| 2 | HTML5 & struktur semantik | elemen semantik, kerangka Tokosaya |
| 3 | Dasar-dasar CSS | selector, kaskade, specificity |
| 4 | Tipografi & visual dengan CSS | Google Fonts, sistem warna, design token |
| 5 | Box model & layout dasar | jarak, kotak, display, position |
| 6 | Flexbox | navigasi, footer, kartu satu baris |
| 7 | CSS Grid & responsif | grid dua dimensi, media query |
| 8 | UTS: mini website Tokosaya | integrasi Bab 1–7 |
| 9–11 | Bootstrap 5 | landing page, katalog, form |
| 12 | UI/UX & design system | prinsip UI, halaman styleguide |
| 13 | Responsif & aksesibilitas | mobile-first, WCAG dasar |
| 14 | Figma → kode | translasi desain ke halaman |
| 15 | QA & penyempurnaan | pengujian, perbaikan, rilis |
| 16 | UAS: final project | proyek utuh pilihan kasus |

Secara garis besar, Bab 1–8 membangun dasar HTML dan CSS di proyek `tokosaya-css/`. Bab 9–15 melanjutkan proyek dengan Bootstrap 5 di folder `tokosaya-bootstrap/`. Bab 8 dan 16 menjadi kesempatan untuk menggabungkan kemampuan yang sudah dipelajari. Jadi, tiap bab membawa Anda selangkah lebih dekat ke proyek yang utuh.

Framework juga membantu menjaga konsistensi. Jika kartu produk dibuat dari komponen yang sama, warna, jarak, dan bentuknya lebih mudah diseragamkan di seluruh halaman. Tanpa framework, Anda tetap bisa menjaga konsistensi dengan *design token*—nilai warna dan jarak yang digunakan berulang. Konsep ini mulai dibahas di Bab 4 dan diperdalam di Bab 12. Framework membantu pekerjaan ini, tetapi bukan pengganti perhatian pada konsistensi.

### 1.8 Tools Pengembangan

Untuk mengikuti mata kuliah ini, Anda hanya perlu dua alat utama: **editor kode** dan **peramban**. Buku ini menggunakan **Visual Studio Code (VS Code)** sebagai editor. Aplikasi ini gratis dan tersedia di berbagai sistem operasi. Fitur seperti pewarnaan kode, pelengkapan otomatis, dan panel *Explorer* bisa membantu saat belajar. Anda juga boleh memasang ekstensi **Live Server** agar halaman terbuka di peramban dan diperbarui otomatis setiap kali berkas disimpan. Ekstensi ini opsional; semua materi juga bisa dibuka dengan mengeklik dua kali file HTML atau menyeretnya ke Chrome.

Peramban yang digunakan di buku ini adalah **Google Chrome**, termasuk Chrome DevTools yang dikenalkan di Subbab 1.6. Biasakan melihat hasil setiap kali menulis atau mengubah kode. Kalau tampilannya tidak sesuai, buka DevTools dan periksa strukturnya. Bab 13 dan 15 akan membahas fitur DevTools lainnya; untuk sekarang, panel Elements dan *device toolbar* sudah cukup.

Kita juga akan menggunakan **Figma**, aplikasi desain antarmuka berbasis peramban yang dibahas di Bab 14. Anda akan belajar membaca rancangan di Figma, bukan membuatnya dari nol. Fitur DevTools yang lebih lanjut, seperti pemeriksaan kinerja, akan diperkenalkan di Bab 13 dan 15 saat dibutuhkan. Dengan begitu, alat baru dikenalkan ketika Anda mulai memerlukannya.

Untuk **menata folder proyek**, gunakan satu folder utama, seperti `profil-mahasiswa/` untuk latihan atau `tokosaya-css/` untuk proyek utama. Simpan file HTML di folder utama, lalu kelompokkan aset ke subfolder seperti `css/` dan `img/`. Gunakan nama file huruf kecil dengan pola *kebab-case*, misalnya `index.html`, `katalog.html`, atau `produk-keyboard-kx210.svg`. Hindari spasi dan huruf kapital agar nama file mudah dicari dan konsisten. Folder yang rapi akan makin membantu saat proyek dan tim berkembang.

Biasakan menekan `Ctrl+S` setelah menulis kode. Jangan menulis kode di aplikasi pengolah kata karena aplikasi itu bisa menambahkan karakter yang mengganggu HTML. Sebelum mencoba perubahan besar, buat salinan folder kerja. Kebiasaan sederhana ini membantu Anda kembali ke versi yang masih berfungsi kalau terjadi kesalahan.

### 1.9 Menulis Dokumen HTML Pertama

Sekarang, mari lihat struktur dasar dokumen HTML. Dokumen dimulai dengan `<!DOCTYPE html>` untuk memberi tahu peramban bahwa halaman menggunakan HTML5. Elemen `<html lang="id">` membungkus seluruh dokumen dan menunjukkan bahwa bahasanya adalah bahasa Indonesia. Bagian `<head>` menyimpan informasi tentang halaman: `<meta charset="utf-8">` mengatur pengodean karakter, `<meta name="viewport" ...>` membantu halaman mengikuti lebar layar, dan `<title>` menentukan judul pada tab peramban. Bagian `<body>` berisi konten yang ditampilkan kepada pengunjung.

Anda akan mengetik pola lengkap ini di bagian Contoh Kode dan Praktikum. Dari awal, biasakan menyusun struktur dokumen dengan rapi: satu dokumen, satu `<h1>` (judul terpenting halaman); heading tidak melompat level tanpa alasan (`h1` → `h2` → `h3`, bukan `h1` → `h3`); setiap gambar sediakan `alt` berupa deskripsi singkat; dan penulisan tag selain huruf kecil. Kedengarannya detail kecil, tetapi keempat kebiasaan itu adalah fondasi aksesibilitas dan keterbacaan kode yang akan diuji pada Bab 8 dan Bab 16.

Sebelum mulai mengetik, ingat tiga hal ini. Pertama, gunakan tag HTML yang sudah tersedia; tag yang tidak dikenal bisa saja tidak ditampilkan seperti yang diharapkan. Kedua, lengkapi tag pembuka dengan tag penutup jika diperlukan agar susunan dokumen tetap benar. Ketiga, simpan dokumen dengan ekstensi `.html` dan pengodean UTF-8 sejak awal. Jika ada masalah, bagian Troubleshooting Praktikum bisa membantu Anda memeriksanya.

Sekarang saatnya mencoba. Di bagian berikutnya, Anda akan melihat contoh kode dan membuat halaman profil sendiri di Praktikum.

## Konsep Penting

| # | Konsep | Inti pemahaman |
|---|---|---|
| 1 | Frontend | Bagian website yang dilihat, dibaca, dan diklik pengguna di peramban |
| 2 | Backend | Sisi server: data, logika bisnis, dan basis data yang bekerja tanpa terlihat |
| 3 | Peramban | Perangkat lunak (mis. Chrome) yang membaca HTML/CSS dan menampilkan halaman |
| 4 | HTML | Menata struktur konten: heading, paragraf, daftar, gambar, tautan, formulir |
| 5 | CSS | Menata rupa dan tata letak: warna, huruf, jarak, susunan kolom |
| 6 | CSS framework | Komponen antarmuka siap pakai; Bootstrap 5 baru masuk di Bab 9 |
| 7 | Frontend vs backend | Ruang kafe vs dapur; pengantar pesan antara keduanya adalah permintaan dan respons |
| 8 | Web design / UI / UX | Desain keseluruhan / elemen yang disentuh / pengalaman menyeluruh pengguna |
| 9 | Alur design → code | Rancangan → struktur HTML → gaya CSS → framework bila berulang |
| 10 | Halaman & aset | Website = kumpulan halaman + berkas pendukung (gambar, CSS) dalam folder rapi |
| 11 | Domain & hosting | Nama alamat dan layanan penyimpanan berkas supaya dapat diakses lewat internet |
| 12 | URL | Alamat lengkap sumber daya: skema + domain + jalur berkas |
| 13 | Pohon dokumen | Peta konseptual hasil pembacaan peramban atas tag HTML halaman |
| 14 | Chrome DevTools | Panel Elements dan device toolbar untuk mengamati struktur dan ukuran layar |
| 15 | Pola folder buku | `tokosaya-css/` untuk Bab 1–8, `tokosaya-bootstrap/` untuk Bab 9–16 |

## Contoh Kode

Dua contoh berikut adalah dokumen HTML lengkap yang bisa Anda ketik dan buka di peramban. Contoh pertama sangat sederhana, sedangkan contoh kedua menerapkan pola serupa pada halaman Tokosaya.

File: latihan/01-halo-dunia.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Halaman Pertama Saya</title>
</head>
<body>
  <h1>Halo, Dunia!</h1>
  <p>Ini adalah halaman web pertama yang saya tulis dengan HTML.</p>
  <p>Halaman ini terdiri dari satu judul dan dua paragraf.</p>
</body>
</html>
```

Penjelasan: dokumen sederhana ini sudah memuat bagian dasar yang akan digunakan di seluruh buku: deklarasi HTML5, bahasa dokumen, pengodean karakter, viewport, judul tab, serta isi halaman berupa heading dan paragraf.

File: tokosaya-css/index.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tokosaya — Belanja Tepat, Kirim Cepat</title>
</head>
<body>
  <!-- Navigasi masih dalam bentuk teks; versi semantik menyusul di Bab 2 -->
  <p>Beranda | Katalog | Tentang | Kontak | Keranjang</p>
  <h1>Peralatan Kerja Digital untuk Semua</h1>
  <p>Keyboard, mouse, hingga monitor — pilih perangkat kerja Anda dengan harga UMKM yang jujur.</p>
  <p><a href="katalog.html">Lihat Katalog</a></p>
  <h2>Produk Unggulan</h2>
  <p>Keyboard Mekanis KX-210 — Rp650.000</p>
  <p>Mouse Wireless MW-88 — Rp185.000</p>
</body>
</html>
```

Penjelasan: contoh kedua hanya memakai paragraf dan tautan agar mudah diikuti saat pertama kali belajar. Tautan `katalog.html` belum berfungsi sampai halaman tersebut dibuat. Anda akan belajar menghubungkan halaman lebih lanjut di Bab 2.

## Penjelasan Kode

**Contoh 1 (`latihan/01-halo-dunia.html`).** `<!DOCTYPE html>` memberi tahu peramban bahwa dokumen menggunakan HTML5. `<html lang="id">` menunjukkan bahasa dokumen, sehingga pembaca layar dapat memilih pelafalan yang sesuai. Di dalam `<head>`, `<meta charset="utf-8">` mengatur pengodean karakter agar teks tampil benar, sedangkan `<meta name="viewport">` membantu halaman mengikuti lebar layar perangkat. `<title>` menentukan nama yang muncul pada tab peramban. Bagian `<body>` berisi konten yang terlihat, termasuk `<h1>` sebagai judul utama dan `<p>` sebagai paragraf.

**Contoh 2 (`tokosaya-css/index.html`).** Halaman ini sengaja ditulis "berongga gaya" — tanpa satu pun CSS — agar Anda melihat peramban menyediakan tampilan dasarnya sendiri: heading besar dan tebal, tautan berwarna biru bergaris bawah. Ini pemahaman penting: peramban punya *style* bawaan, dan tugas CSS nantinya sebagian besar menggantikan gaya bawaan itu. Tautan `<a href="katalog.html">` memakai jalur relatif: peramban mencari `katalog.html` di folder yang sama dengan halaman yang sedang dibuka, sehingga seluruh folder tetap bekerja saat dipindah ke komputer atau host lain — inilah alasan struktur folder rapi di Subbab 1.5 begitu bernilai. Judul hero di `<h1>` dan subjudul pada `<p>` mengikuti konten hero baku Tokosaya, termasuk tombol "Lihat Katalog" (sementara berupa tautan polos; penyamaran visual tombol adalah pekerjaan CSS di Bab 9). Perhatikan juga tanda `<!-- -->
```
: komentar HTML tidak tampil di halaman, tapi sangat berguna untuk meninggalkan catatan bagi pembaca berikutnya — termasuk diri Anda sebulan kemudian. Contoh ini pula titik lahir folder proyek `tokosaya-css/` yang akan terus diisi hingga UTS.

## Praktikum

### Tujuan Praktikum

Di praktikum ini, Anda akan membuat halaman profil mahasiswa dengan HTML, berisi nama, foto, bidang minat, keterampilan, dan tautan. Setelah itu, Anda akan membukanya di Google Chrome dan memeriksa kodenya dengan Chrome DevTools. Anda akan berlatih menulis dokumen HTML lengkap, mengenali fungsi tiap bagiannya, dan melihat strukturnya di panel Elements.

### Kebutuhan

- Komputer dengan **Visual Studio Code** (unduh dari situs resminya jika belum terpasang).
- **Google Chrome** untuk membuka halaman dan menggunakan Chrome DevTools.
- Satu gambar untuk foto profil (boleh foto Anda atau gambar lain; nama filenya akan diubah saat persiapan).
- Folder kerja di tempat yang mudah diingat, misalnya `D:\praktikum\bab-01\`.

### Persiapan

1. Buat folder `profil-mahasiswa/`, lalu buat subfolder `img/` di dalamnya.
2. Salin gambar pilihan Anda ke folder `img/` dan ubah namanya menjadi `foto-profil.png`. Aktifkan tampilan ekstensi file di File Explorer agar nama file tidak berakhir ganda, seperti `foto-profil.png.jpg`.
3. Buka Visual Studio Code, pilih *File → Open Folder*, lalu buka `profil-mahasiswa/`. Isi folder akan terlihat di panel Explorer.
4. Siapkan Chrome. Selama praktikum, Anda akan bergantian memakai editor dan peramban.

### Langkah Kerja

1. Di folder `profil-mahasiswa/`, buat file baru bernama `index.html` dengan mengeklik ikon *New File* di panel Explorer.
2. Ketik seluruh kode pada bagian **Kode** di bawah ini.
3. Tekan `Ctrl+S` untuk menyimpan file. Pastikan tanda titik yang menunjukkan file belum disimpan sudah hilang dari tab editor.
4. Buka `index.html` di Chrome dengan mengeklik dua kali file di File Explorer atau menyeretnya ke jendela Chrome.
5. Periksa isi halaman: judul tab, nama, foto, daftar, dan tautan.
6. Buka Chrome DevTools dengan menekan `F12` atau mengeklik kanan halaman lalu memilih *Inspect*. Pastikan tab **Elements** aktif.
7. Cari baris `<h1 ...>` di panel Elements dan klik baris tersebut. Perhatikan bagian halaman yang tersorot.
8. Lihat pohon dokumen di panel **Elements** (`html`, `head`, `body`, dan isinya). Bandingkan susunannya dengan kode yang Anda tulis.
9. Aktifkan *device toolbar* (ikon ponsel dan tablet di kiri atas DevTools), lalu ubah lebar layar dari ukuran ponsel ke komputer. Perhatikan bagaimana teks menyesuaikan ruang yang tersedia.
10. Tutup DevTools dan muat ulang halaman dengan `F5` agar versi terbaru tampil.

### Kode

File: profil-mahasiswa/index.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Profil Mahasiswa — Andi Pratama</title>
</head>
<body>
  <h1>Andi Pratama</h1>
  <p><img src="img/foto-profil.png" alt="Foto profil Andi Pratama" width="160" height="160"></p>
  <p><strong>Mahasiswa S1 Sistem Informasi — Angkatan 2024</strong></p>
  <h2>Bidang Minat</h2>
  <ul>
    <li>Desain antarmuka web</li>
    <li>Sistem informasi manajemen</li>
    <li>Analisis data untuk pengambilan keputusan</li>
  </ul>
  <h2>Keterampilan</h2>
  <ol>
    <li>Menuliskan dokumen HTML dasar</li>
    <li>Memakai lembar kerja (spreadsheet) untuk laporan sederhana</li>
    <li>Menyusun garis besar proses bisnis</li>
  </ol>
  <h2>Tautan</h2>
  <ul>
    <li><a href="https://kampus.example" target="_blank">Situs kampus saya</a></li>
    <li><a href="mailto:andi.pratama@kampus.example">Surel saya</a></li>
  </ul>
</body>
</html>
```

### Penjelasan Kode

Bagian `<head>` memuat tiga elemen yang sudah Anda kenal: `charset` agar teks Indonesia tampil benar, `viewport` agar halaman mengikuti lebar perangkat, dan `<title>` sebagai nama tab. Atribut `lang="id"` memberi tahu peramban dan alat bantu bahwa konten halaman berbahasa Indonesia.

Bagian `<body>` memperlihatkan beberapa elemen dasar. `<h1>` dan `<h2>` membentuk hierarki heading: satu judul utama, lalu judul-judul bagian. Elemen `<img>` menampilkan foto. Atribut `src` menunjukkan lokasi file, `alt` memberi teks alternatif jika gambar tidak tampil atau dibaca oleh *screen reader*, sedangkan `width` dan `height` memberi tahu browser ukuran gambar. `<ul>` cocok untuk daftar bidang minat yang urutannya tidak penting, sedangkan `<ol>` digunakan untuk daftar keterampilan yang memiliki urutan. Contoh ini juga memuat tautan web yang dibuka di tab baru dan tautan `mailto:` yang membuka aplikasi email. Alamat `kampus.example` hanya contoh; ganti dengan alamat Anda saat berlatih.

Ada dua hal yang perlu diingat dari contoh ini. Pertama, pilih `<ul>` atau `<ol>` berdasarkan isi daftarnya: `ul` untuk bidang minat yang tidak perlu diurutkan, `ol` untuk keterampilan yang memiliki urutan. Kedua, `<strong>` menandai informasi yang penting, bukan sekadar membuat teks terlihat tebal. Jika digunakan terlalu sering, penekanannya justru tidak terasa. Anda akan terus berlatih memilih elemen berdasarkan maknanya, terutama di Bab 2.

### Hasil yang Diharapkan

Jika kodenya benar, halaman akan menampilkan judul tab *Profil Mahasiswa — Andi Pratama*, nama, foto berukuran 160 piksel, informasi program studi, dua daftar, dan dua tautan. Tautan kampus terbuka di tab baru, sedangkan tautan email membuka aplikasi email.

Di DevTools, panel **Elements** akan menampilkan struktur `html`, `head`, dan `body`, beserta elemen di dalamnya. Klik satu baris elemen untuk melihat bagian yang disorot di halaman. Dengan *device toolbar*, ubah lebar layar dan perhatikan bagaimana teks menyesuaikan ruangnya. Ini menunjukkan bagaimana peramban membaca dan menampilkan dokumen yang Anda tulis.

Catat pengamatan Anda dalam tiga baris: apa yang dilihat, panel yang digunakan, dan artinya bagi kode. Ini latihan awal untuk menjelaskan hasil pengujian. Di tugas-tugas berikutnya, Anda juga akan diminta mendukung penjelasan dengan bukti dari struktur halaman.

### Troubleshooting

**Masalah:** File terbuka di aplikasi lain, tidak dikenali peramban, atau memiliki ekstensi ganda seperti `index.html.txt`.
**Penyebab:** Windows menyembunyikan ekstensi file secara default. Akibatnya, nama tambahan bisa tidak terlihat atau file tersimpan dengan jenis yang salah.
**Solusi:** Di Windows Explorer, buka tab *View* dan aktifkan *File name extensions*. Periksa nama file dan hapus ekstensi ganda jika ada. Pastikan file berakhiran `.html`; jika perlu, simpan ulang dari VS Code dengan nama `index.html`.
**Pencegahan:** Tampilkan ekstensi file sejak awal dan periksa nama lengkapnya di panel Explorer VS Code.

**Masalah:** Gambar profil tidak tampil; yang terlihat hanya ikon gambar rusak dan teks alternatif.
**Penyebab:** Nilai `src` tidak sesuai dengan lokasi atau nama file gambar. Bisa jadi file tidak ada di folder `img/`, namanya berbeda, atau ekstensinya keliru.
**Solusi:** Pastikan `foto-profil.png` ada di folder `img/`. Cocokkan nama file pada `src`, lalu muat ulang halaman.
**Pencegahan:** Salin gambar ke folder proyek terlebih dahulu, gunakan nama *kebab-case*, lalu salin nama file itu ke atribut `src`.

**Masalah:** Teks Indonesia atau simbol seperti "—" tampil sebagai kotak atau tanda tanya.
**Penyebab:** Halaman tidak memuat `<meta charset="utf-8">`, atau berkas disimpan dengan pengodean yang berbeda dari UTF-8.
**Solusi:** Pastikan baris `<meta charset="utf-8">` ada di `<head>`; lalu di VS Code pilih *Save with Encoding* dan simpan ulang sebagai UTF-8.
**Pencegahan:** Mulai setiap dokumen dari pola lengkap yang sudah berisi charset dan viewport; jangan menulis dokumen dari nol tanpa pola.

**Masalah:** Halaman tampak sangat kecil di layar ponsel sehingga Anda perlu memperbesar tampilannya.
**Penyebab:** Atribut `<meta name="viewport">` tidak ada di `<head>`, sehingga peramban menganggap halaman memiliki lebar yang lebih besar dari layar ponsel.
**Solusi:** Tambahkan `<meta name="viewport" content="width=device-width, initial-scale=1">` di dalam `<head>`, lalu muat ulang.
**Pencegahan:** Selalu sertakan viewport dalam kerangka dokumen baru. Anda akan menguji tampilan pada berbagai ukuran layar di bab-bab berikutnya.

**Masalah:** Tautan "Lihat Katalog" gagal dibuka dengan pesan berkas tidak ditemukan.
**Penyebab:** Jalur relatif pada `href` tidak cocok dengan nama file tujuan, atau halaman tujuan memang belum dibuat.
**Solusi:** Periksa nama file di folder proyek, lalu cocokkan dengan nilai `href`. Jika halaman tujuan belum dibuat, tautan memang belum bisa dibuka. Tambahkan catatan di HTML bahwa halaman tersebut akan dibuat di bab berikutnya.
**Pencegahan:** Gunakan nama file huruf kecil dan tanda hubung secara konsisten sejak awal proyek.

**Masalah:** Panel DevTools tidak terbuka meski tombol `F12` ditekan.
**Penyebab:** Kursor tidak berada di dalam jendela peramban, atau papan tombol mengharuskan menekan `Fn+F12`, atau jendela DevTools disematkan terpisah dan tak terlihat.
**Solusi:** Klik kanan halaman dan pilih *Inspect*. Jika DevTools terbuka di jendela terpisah, buka menu titik tiga di kanan atas DevTools lalu pilih *Dock side*.
**Pencegahan:** Gunakan klik kanan → *Inspect* jika pintasan keyboard tidak berfungsi.

## Studi Kasus

Sekarang, mari gunakan konsep tadi untuk melihat perjalanan seorang pembeli di Tokosaya. Pengunjung membuka website lewat ponsel, mencari produk, membuka halaman *Keyboard Mekanis KX-210*, menekan tombol "Beli", lalu mengisi formulir kontak saat punya pertanyaan. Dari contoh ini, kita bisa melihat bagian mana yang menjadi pekerjaan frontend dan backend.

Semua yang berhubungan dengan **tampilan dan interaksi** termasuk frontend. Contohnya: menu yang mudah digunakan di ponsel, kartu produk yang memuat gambar dan harga, warna yang konsisten, formulir yang mudah diisi, dan halaman yang tetap rapi di layar kecil. Sementara itu, **data dan aturan bisnis** termasuk backend. Misalnya, mengurangi stok setelah pembelian, mengambil harga dari daftar resmi, mencari produk, mencatat pesanan, dan mengirim pemberitahuan ke `halo@tokosaya.id`. Informasi seperti "keyboard mekanis 87 tombol dengan switch biru" berasal dari data produk yang disediakan backend, tetapi cara informasi itu disusun dan ditampilkan adalah bagian frontend.

Kebutuhan klien biasanya disampaikan dengan bahasa sehari-hari. Contohnya, "Kenapa menu toko saya berantakan di ponsel?" berkaitan dengan desain responsif (Bab 7 dan 13). "Warna tombol diskon beda-beda di setiap halaman" berkaitan dengan konsistensi antarmuka (Bab 4 dan 12). "Pelanggan sulit mengisi formulir pemesanan" berkaitan dengan desain form (Bab 11). "Tulisan sulit dibaca orang tua saya" berkaitan dengan tipografi dan kontras (Bab 4 dan 13). Sementara itu, pertanyaan seperti *bagaimana stok berkurang setelah pembelian* berhubungan dengan backend, yang akan dibahas di mata kuliah lain.

Kasus Tokosaya menunjukkan bahwa kebutuhan antarmuka perlu dirancang dengan sengaja. Website yang membingungkan bisa merugikan toko: harga yang tidak jelas membuat pembeli ragu, formulir yang rumit bisa membuat mereka batal memesan, dan tampilan ponsel yang berantakan bisa membuat pengunjung pergi. Karena itu, buku ini berpegang pada gagasan: "desain adalah janji; kode yang rapi dan responsif adalah cara memenuhinya." Kita akan menerapkannya saat membangun Tokosaya, dari halaman HTML pertama hingga website final di Bab 16.

Dari cerita ini, kita bisa merangkum kebutuhan antarmuka Tokosaya:

1. Menu Beranda, Katalog, Tentang, dan Kontak, serta ikon keranjang yang mudah digunakan di layar ponsel.
2. Halaman beranda dengan judul *"Peralatan Kerja Digital untuk Semua"*, penjelasan tentang harga UMKM yang jujur, dan tombol *Lihat Katalog*.
3. Kartu katalog untuk delapan produk, dengan nama, kategori, harga, dan lencana status yang konsisten.
4. Informasi kontak lengkap: *Jl. Digital Raya No. 10, Jakarta; halo@tokosaya.id; (021) 555-0199*.
5. Teks dan warna yang mudah dibaca oleh pengunjung dari berbagai usia.

Gunakan daftar ini sebagai acuan saat membuat halaman baru di folder `tokosaya-css/` atau `tokosaya-bootstrap/`.

## Latihan Mandiri

1. Jelaskan dengan kata-kata Anda sendiri perbedaan frontend dan backend. Buat juga analogi lain selain ruang kafe dan dapur.
2. Sebutkan empat pekerjaan frontend dan empat pekerjaan backend pada website perpustakaan kampus. Susun jawaban dalam dua kolom.
3. Pilih website layanan kampus, misalnya portal kuliah atau perpustakaan digital. Catat lima elemen antarmuka yang Anda gunakan dan tiga pekerjaan server yang mungkin berjalan di belakangnya.
4. Buat dokumen HTML sederhana berisi judul halaman, satu `h1`, dan satu paragraf tentang profil Anda. Simpan sebagai `latihan-2.html`, buka di Chrome, lalu periksa judul tabnya.
5. Buat halaman profil mahasiswa dengan satu `h1`, satu gambar ber-`alt`, dua daftar (`ul` dan `ol`), serta minimal tiga tautan. Periksa halaman dengan Chrome DevTools dan catat lima tag yang terlihat di panel Elements.
6. Pada URL contoh `https://tokosaya.id/katalog.html`, tunjukkan bagian yang merupakan skema, domain, dan jalur file.
7. Buka halaman profil praktikum pada ukuran ponsel melalui *device toolbar*, lalu pada ukuran komputer. Catat dua perbedaan yang Anda lihat, seperti aliran teks atau posisi foto.
8. Buat tiga pertanyaan yang mungkin diajukan klien UMKM berdasarkan Studi Kasus Tokosaya. Untuk tiap pertanyaan, tunjukkan bab yang bisa membantu menjawabnya.

## Tugas

**Tugas 1 (individu).** Kembangkan halaman profil praktikum menjadi dua halaman: `index.html` untuk profil dan `rencana.html` untuk rencana belajar selama mata kuliah. Isi `rencana.html` dengan daftar `ul` berisi hal-hal yang ingin Anda kuasai. Hubungkan kedua halaman dengan tautan, lalu pastikan masing-masing memiliki `meta viewport`, gambar dengan `alt`, dan satu `h1`. Kumpulkan folder proyek dalam file ZIP. Penilaian mencakup kelengkapan struktur, tautan dua arah yang berfungsi, dan kode yang rapi (indentasi dua spasi, tag huruf kecil).

**Tugas 2 (kelompok, 3–4 orang).** Amati dua website layanan, misalnya portal akademik dan marketplace. Buat tabel perbandingan yang berisi lima elemen frontend, tiga kemungkinan pekerjaan backend, dan satu catatan tentang konsistensi antarmuka. Kumpulkan tabel satu halaman dan satu paragraf kesimpulan untuk dipresentasikan pada pertemuan berikutnya. Penilaian mencakup pengamatan langsung pada kedua situs, alasan pemisahan pekerjaan frontend dan backend, serta kejelasan catatan konsistensi.

## Refleksi

1. Sebelum membaca bab ini, apa yang Anda bayangkan tentang membuat website? Apakah ada yang berubah setelah membaca?
2. Anda lebih tertarik mengerjakan antarmuka—seperti desain dan tata letak—atau bagian belakang, seperti data dan logika? Apa pengaruhnya terhadap peran yang ingin Anda ambil dalam proyek kelompok?
3. Apa hal paling menarik atau mengejutkan yang Anda temukan saat memeriksa halaman sendiri di DevTools?
4. Dari 16 bab di buku ini, mana yang menurut Anda paling menantang? Apa rencana Anda untuk menghadapinya?

## Rangkuman

1. *Frontend development* adalah pekerjaan membuat bagian website yang dilihat dan digunakan pengunjung. Buku ini berfokus pada website statis dengan HTML dan CSS.
2. Frontend mengatur tampilan dan interaksi, sedangkan backend mengelola data dan logika. Keduanya saling terhubung.
3. Dalam pengembangan sistem informasi, frontend menerjemahkan rancangan menjadi antarmuka dan menghubungkan kebutuhan bisnis, desain, teknologi, serta pengguna.
4. *Web design* mencakup perancangan website; UI adalah bagian yang dilihat dan digunakan; UX adalah pengalaman secara keseluruhan. HTML menyusun konten, CSS mengatur tampilannya.
5. Website terdiri dari halaman dan aset. Buku ini menggunakan struktur folder yang rapi dan nama file *kebab-case*.
6. Secara sederhana, peramban menerima HTML, menyusun pohon dokumen, menerapkan gaya, lalu menampilkan halaman. Panel Elements di DevTools membantu Anda melihat pohon tersebut.
7. HTML menyusun struktur, CSS mengatur tampilan, dan CSS framework menyediakan komponen siap pakai. Bootstrap 5 dibahas mulai Bab 9.
8. Alat utama yang digunakan adalah VS Code dan Chrome dengan DevTools. Live Server bisa dipasang sebagai pilihan.
9. Proyek Tokosaya dikembangkan bertahap di folder `tokosaya-css/` (Bab 1–8) dan `tokosaya-bootstrap/` (Bab 9–16).

Sekarang Anda sudah punya dua bekal: **peta belajar** dan **halaman HTML pertama**. Sepanjang semester, Anda akan mengembangkan proyek Tokosaya dari halaman sederhana menjadi website responsif. Halaman pertama tadi sudah bisa dibaca peramban, tetapi strukturnya masih sederhana—misalnya, navigasi masih berupa paragraf biasa. Di Bab 2, Anda akan belajar menggunakan elemen HTML5 semantik agar setiap bagian halaman memiliki makna yang lebih jelas.

## Evaluasi

### Pilihan Ganda

Pilih satu jawaban terbaik pada tiap butir. Butir dengan tanda (A) menekan pemahaman konsep, butir dengan tanda (P) menguji penerapan.

1. (A) Definisi yang paling tepat untuk *frontend development* adalah...
   - A. pembangunan basis data dan logika transaksi di server
   - B. membangun bagian halaman yang dilihat dan diklik pengguna di peramban
   - C. penyewaan domain dan hosting untuk website
   - D. penulisan algoritma pencarian data produk

2. (A) Pasangan teknologi inti yang dipakai sepanjang buku ini untuk membangun halaman statis adalah...
   - A. HTML dan CSS
   - B. HTML dan JavaScript
   - C. CSS dan SQL
   - D. Python dan HTML

3. (A) Pada analogi ruang kafe dan dapur, bagian yang mewakili *backend* adalah...
   - A. menu yang dibaca pengunjung
   - B. meja dan kursi ruang kafe
   - C. dapur, resep, dan persediaan bahan
   - D. pelayan yang membawa pesanan

4. (A) Urutan tahapan pengembangan sistem informasi yang dicontohkan di bab ini adalah...
   - A. desain → kebutuhan → analisis → implementasi
   - B. kebutuhan → analisis → desain → implementasi
   - C. implementasi → pengujian → desain → kebutuhan
   - D. analisis → kebutuhan → implementasi → desain

5. (A) Manakah pernyataan peran HTML dan CSS yang tepat?
   - A. HTML mengurus tampilan; CSS mengurus struktur
   - B. HTML mengurus struktur konten; CSS mengurus tampilan dan tata letak
   - C. keduanya mengurus data di server
   - D. HTML mengurus ketercepatan server; CSS mengurus keamanan

6. (P) Fungsi `<meta name="viewport" content="width=device-width, initial-scale=1">` adalah...
   - A. mengatur pengodean karakter agar teks Indonesia tampil normal
   - B. memberi judul yang tampil di tab peramban
   - C. membuat halaman mengikuti lebar layar perangkat saat disajikan
   - D. menghubungkan halaman dengan berkas gaya eksternal

7. (P) Urutan konseptual saat peramban menampilkan halaman adalah...
   - A. dokumen HTML diterima → pohon dokumen disusun → gaya diberlakukan → halaman digambar
   - B. gaya diberlakukan → dokumen HTML diterima → halaman digambar → pohon dokumen disusun
   - C. halaman digambar → gaya diberlakukan → pohon dokumen disusun → dokumen HTML diterima
   - D. pohon dokumen disusun → halaman digambar → dokumen HTML diterima → gaya diberlakukan

8. (P) Alasan buku ini menempatkan pembelajaran CSS framework (Bootstrap) setelah dasar HTML dan CSS adalah...
   - A. framework hanya berlaku untuk website besar
   - B. dasar dulu agar pemakaian framework berlangsung sadar dan dapat disesuaikan, bukan sekadar menghitung komponen
   - C. CSS framework tidak boleh dipakai sebelum UTS
   - D. dasar HTML/CSS justru lebih cepat daripada framework

### Benar atau Salah

1. CSS bertugas menata struktur konten halaman, sedangkan HTML bertugas menentukan warna dan jarak.
2. Panel **Elements** pada Chrome DevTools memperlihatkan struktur tag halaman yang sedang terbuka.
3. Satu dokumen HTML yang baik memiliki lebih dari satu `h1` pada bagian `body`.
4. Hosting adalah layanan yang menyimpan berkas website pada server agar dapat diakses lewat internet.
5. Halaman yang belum memuat `<meta name="viewport">` tetap tampil di ponsel, tetapi penyajiannya tidak mengikuti lebar layar secara tepat.

### Analisis Kode

1. Perhatikan potongan berikut (file: `latihan-evaluasi/analisis-1.html`):

File: latihan-evaluasi/analisis-1.html

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Tokosaya</title>
</head>
<body>
  <h1>Tokosaya</h1>
  <h1>Katalog Produk</h1>
  <p><img src="img/produk-mouse-mw88.svg" width="180" height="180"></p>
</body>
</html>
```

Identifikasi minimal tiga kelemahan pada potongan tersebut dan jelaskan bagaimana memperbaikinya.

2. Perhatikan potongan berikut (file: `latihan-evaluasi/analisis-2.html`):

File: latihan-evaluasi/analisis-2.html

```html
<p><a href="katalog.html">Lihat Katalog</a></p>
<p><img src="img/produk-keyboard-kx210.svg" alt="Keyboard Mekanis KX-210" width="220" height="220"></p>
```

Tuliskan: (a) fungsi atribut `alt` dan bagi siapa dia berperan penting; (b) apa yang tampak di halaman bila berkas `produk-keyboard-kx210.svg` tidak ada; (c) mengapa `href` berupa jalur relatif (`katalog.html`) lebih praktis dibanding menulis alamat penuh.

### Soal Praktik

1. Tulis halaman `profil-saya.html` dengan syarat: pola dokumen lengkap (DOCTYPE, `lang="id"`, charset, viewport, title), satu `h1`, satu gambar ber-`alt`, satu `ul`, satu `ol`, dan minimal tiga tautan (satunya `mailto:`). Buka di Chrome, inspeksi dengan DevTools, dan catat dalam dua-tiga kalimat apa yang terlihat pada panel Elements.
2. Dengan mengacu pada cerita Tokosaya di Studi Kasus, klasifikasikan kebutuhan berikut ke kolom frontend/backend: (a) tampilan kartu produk; (b) stok berkurang saat transaksi; (c) konsistensi warna tombol antarhalaman; (d) harga terdapat dari daftar harga resmi toko; (e) formulir kontak yang mudah dipakai; (f) pencarian produk di antara ratusan item. Berikan alasan sepatah-duapatah kata per butir.

### Kunci Jawaban

<details>
<summary>Kunci Jawaban (klik untuk melihat)</summary>

**Pilihan Ganda:**

1. **B** — frontend adalah pekerjaan membangun bagian halaman yang dialami pengguna langsung di peramban; basis data dan logika server adalah wilayah backend (Opsi A), domain/hosting bukan pekerjaan frontend (C), algoritma pencarian adalah kerja server (D).
2. **A** — buku ini membangun halaman statis dengan pasangan HTML (struktur) + CSS (tampilan); JavaScript dan SQL berada di luar cakupan.
3. **C** — dapur, resep, dan persediaan bekerja tanpa terlihat pengunjung, persis seperti backend; pelayan (D) berperan sebagai pengantar pesan antara keduanya, bukan backend itu sendiri.
4. **B** — alur baku: kebutuhan bisnis → analisis → desain → implementasi → pengujian → pemeliharaan.
5. **B** — HTML menata struktur konten; CSS menata rupa dan tata letak; kebalikannya (A) adalah salah paham klasik.
6. **C** — viewport membuat penyajian mengikuti lebar layar perangkat; charset (A) dan title (B) adalah meta lain; penghubung gaya eksternal bukan fungsi meta viewport (D).
7. **A** — urutan konseptual: dokumen diterima → pohon dokumen → gaya → digambar.
8. **B** — framework dipelajari setelah dasar agar mahasiswa memahami apa yang terjadi di balik komponen dan dapat menyesuaikannya, bukan sekadar memakainya.

**Benar atau Salah:**

1. **Salah** — tugasnya terbalik: HTML menata struktur; CSS menata rupa dan tata letak.
2. **Benar** — panel Elements memperlihatkan pohon tag halaman; mengklik barisnya menyorot elemen terkait.
3. **Salah** — satu halaman satu `h1` sebagai judul terpenting; subjudul memakai `h2` dan seterusnya.
4. **Benar** — hosting menyimpan berkas pada server yang selalu menyala; domain (nama) dan hosting (tempat berkas) adalah dua layanan berbeda.
5. **Benar** — halaman tetap tersaji, tetapi tanpa viewport penyajiannya tidak mengikuti lebar layar perangkat dengan tepat (umumnya tampak menyusut/kecil pada ponsel).

**Analisis Kode (ringkas):**

1. Kelemahan yang diharapkan: (i) ada dua `h1` — seharusnya satu `h1` ("Tokosaya") dan "Katalog Produk" menjadi `h2`; (ii) `<img>` tanpa atribut `alt` — tambahkan deskripsi produk untuk alat bantu dan bila gambar gagal tampil; (iii) `<html>` tanpa `lang="id"`; (iv) `<meta name="viewport">` tidak ada sehingga penyajian di ponsel tidak tepat; (v) baris `<h1>` kedua sebaiknya diakhiri dengan `</h1>` yang tepat (dalam potongan demikian, pastikan setiap tag berpasangan lengkap).
2. (a) `alt` menyediakan teks pengganti bagi pengguna pembaca layar dan tampil bila gambar gagal dimuat; (b) bila berkas tidak ada, slot gambar menampakkan ikon rusak beserta teks `alt`-nya; (c) jalur relatif membuat halaman tetap menemukan targetnya saat folder dipindah atau dinamai — cocok untuk tautan antarhalaman di dalam proyek yang sama.

**Soal Praktik (ringkasan kriteria):**

1. Diterima bila pola dokumen lengkap, hierarki heading tidak melompat, `alt` ada, meta viewport ada, dan catatan DevTools menyebut minimal `html`, `head`, `body`, `h1`, serta nama tag lain yang dipakai — bukti mahasiswa benar-benar menginspeksi strukturnya sendiri.
2. Frontend: (a), (c), (e) — semuanya soal tampilan dan pengalaman antarmuka. Backend: (b), (d), (f) — semuanya soal data dan aturan di server. Jawaban penuh dinilai dari kepadatan alasannya, bukan sekadar rute kolomnya.

</details>

## Referensi

1. Duckett, J. (2011). *HTML & CSS: Design and Build Websites*. Indianapolis, IN: John Wiley & Sons.
2. Robbins, J. N. (2018). *Learning Web Design* (5th ed.). Sebastopol, CA: O'Reilly Media.
3. Krug, S. (2014). *Don't Make Me Think, Revisited* (3rd ed.). San Francisco, CA: New Riders.
4. MDN Web Docs. (n.d.). *Getting started with the Web — Structuring the web with HTML*. Mozilla. Diakses 2026, dari https://developer.mozilla.org/
5. Google web.dev. (n.d.). *Learn HTML*. Diakses 2026, dari https://web.dev/learn/html