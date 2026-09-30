# BAB 1 — Pengantar Frontend Development dan Web Design

## Deskripsi Singkat

Bab ini adalah pintu masuk seluruh buku. Anda akan mengenal apa itu *frontend development* (pengembangan sisi depan website), bagaimana pembagian kerjanya dengan *backend*, dan di posisi mana frontend berdiri dalam alur pengembangan sistem informasi. Bab ini juga menuntun Anda menulis dokumen HTML pertama — halaman profil mahasiswa — lalu menginspeksinya dengan Chrome DevTools. Seluruh peta buku dan studi kasus berjalan Tokosaya diperkenalkan sejak sekarang agar Anda selalu tahu ke arah mana setiap bab membawa Anda. Bab 2 melanjutkan perjalanan ini dengan memperdalam struktur dokumen menggunakan HTML5 semantik, fondasi sebelum masuk ke dunia CSS.

## Tujuan Pembelajaran

Setelah menyelesaikan bab ini, mahasiswa diharapkan:

1. Menjelaskan definisi dan lingkup kerja *frontend development* serta hubungannya dengan "apa yang dilihat pengguna di layar".
2. Membedakan tanggung jawab *frontend* dan *backend* pada sebuah website berdasarkan pengamatan nyata.
3. Mengidentifikasi posisi frontend dalam alur pengembangan sistem informasi, dari kebutuhan bisnis sampai implementasi, serta peran lulusan Sistem Informasi di dalamnya.
4. Membedakan konsep *web design*, *user interface* (UI), *user experience* (UX), HTML, dan CSS serta menjelaskan alur *design → code*.
5. Mengimplementasikan halaman profil mahasiswa dengan HTML murni (heading, paragraf, gambar, daftar, tautan) secara valid.
6. Menginspeksi struktur halaman yang ditulis menggunakan Chrome DevTools dan menjelaskan hasil pengamatan.
7. Merancang pola folder proyek web sederhana sesuai konvensi buku ini.

## Capaian Pembelajaran

Sub-capaian bab ini terhubung dengan capaian program studi (CPMK) sebagai berikut:

- **CPMK 1** — Mampu menjelaskan kerangka konseptual *frontend development* beserta posisinya dalam pengembangan sistem informasi dan desain web.
- **CPMK 2** — Mampu menulis dokumen HTML pertama yang valid, mengikuti konvensi penataan folder proyek, dan menginspeksi hasilnya dengan Chrome DevTools sebagai awal disiplin pengujian antarmuka.

Rincian pemetaan: penjelasan konsep frontend–backend dan alur *design → code* menunjang CPMK 1; praktikum halaman profil, penggunaan DevTools, dan pola folder proyek menunjang CPMK 2. Keduanya menjadi prasyarat seluruh CPMK di bab-bab berikutnya, karena buku ini dibangun secara bertahap atas satu proyek yang sama.

## Kata Kunci

Kata kunci: *frontend development* (pembangunan bagian halaman yang dilihat dan diklik pengguna di peramban), *backend* (sisi server yang mengelola data dan logika bisnis), *peramban* — *browser* (perangkat lunak pembaca halaman web seperti Google Chrome), *HTML* (HyperText Markup Language; bahasa markup untuk menata struktur konten), *CSS* (Cascading Style Sheets; bahasa gaya untuk tampilan dan tata letak), *CSS framework* (perangkat kelas gaya siap pakai untuk mempercepat pembangunan antarmuka), *user interface* / UI (lapisan antarmuka yang disentuh pengguna), *user experience* / UX (keseluruhan pengalaman pengguna saat memakai sistem), *Chrome DevTools* (perangkat inspeksi halaman bawaan Chrome), dan *URL* (Uniform Resource Locator; alamat sumber daya web). Kata-kata di atas akan terus dipakai dan semakin terasah dari bab ke bab; pastikan setiap istilah terbaca dengan satu makna yang sama seperti ringkasan di atas sebelum melanjutkan.

## Apersepsi

Perhatikan sebuah cerita yang akan terus berulang di buku ini. Tokosaya adalah toko online fiktif milik UMKM yang berdiri tahun 2019 di Jakarta, menjual aksesori dan elektronik komputer — keyboard, mouse, headphone, monitor, hingga webcam. Nilai yang dipegang pemiliknya sederhana: *harga jujur, layanan cepat*, dengan tagline **"Belanja Tepat, Kirim Cepat"**. Selama bertahun-tahun penjualan berjalan lewat percakapan pesan singkat: pembeli menanyakan stok lewat chat, pemilik membalas satu per satu, lalu pengiriman dicatat di buku. Usaha tetap jalan, tetapi pemilik mulai kewalahan ketika jumlah pesanan bertambah: pertanyaan yang sama terus diulang, catatan pesanan berantakan, dan gambar produk terkirim tidak konsisten.

Pemilik Tokosaya lalu datang ke tim kemahasiswaan Sistem Informasi di kampus Anda dan menyampaikan satu permintaan yang tampak sederhana: *saya ingin toko saya ada di internet, orang bisa lihat produknya, dan bisa menghubungi saya.* Perhatikan bahwa ia tidak menyebut kata HTML, CSS, server, atau basis data. Ia berbicara dengan bahasa kebutuhan: bisa dilihat, bisa dicari, bisa dihubungi, tetap terlihat tepercaya.

Tugas mahasiswa Sistem Informasi di sinilah menarik: menerjemahkan bahasa kebutuhan itu menjadi sebuah rencana, dan kemudian menjadi website yang benar-benar tampil rapi di layar pengunjung. Pada bab ini kita belum menjalankan seluruh proyeknya; kita baru mulai. Anda akan mengenal peta medan perang — apa itu frontend, apa itu backend, bagaimana desain berubah menjadi kode — dan menulis halaman web pertama Anda sebagai latihan pemanasan. Tokosaya sendiri mulai dibangun sebagai folder proyek pada bagian Contoh Kode dan akan tumbuh di bab demi bab berikutnya, dari HTML polos sampai website responsif yang siap dipresentasikan pada ujian akhir. Dengan kata lain: cerita awal di atas adalah peta perjalanan Anda selama satu semester.

Perhatikan pula bahwa skenario ini bukan cerita yang dilebih-lebihkan demi keperluan ajar: pola yang sama berulang di banyak proyek SI — klien berbicara dengan bahasa kebutuhan, tim mengubahnya menjadi sistem, dan bagian paling dilihat adalah antarmuka. Perbedaannya hanya pada skala: untuk Tokosaya, kebutuhannya cukup dipetakan dalam beberapa halaman; untuk sistem akademik kampus, ia membentang ke banyak modul. Namun sifat pertanyaannya serupa: apa yang harus tampil, apa yang harus tersimpan, dan bagaimana keduanya dipertemukan. Soal-soal itu yang akan Anda pelajari melalui kacamata frontend di buku ini.

## Materi Pembelajaran

Bagian ini menyajikan sembilan subtopik yang bergerak dari definisi paling dasar menuju keterampilan praktik pertama Anda. Ikuti urutannya; setiap subtopik membangun kosakata untuk subtopik sesudahnya.

### 1.1 Apa Itu Frontend Development

*Frontend development* adalah pekerjaan membangun bagian website yang dilihat, dibaca, dan diklik pengguna langsung di layar mereka. Jika sebuah halaman terdiri dari judul besar di atas, foto produk di tengah, dan tombol di bawahnya, justru itulah wilayah frontend: segala sesuatu yang "tampak di layar". Kata *front* sendiri memberi petunjuk — sisi depan yang menghadap pengunjung, berbanding dengan sisi belakang tempat data dan logika bekerja tanpa terlihat.

Lingkup kerja frontend dalam buku ini mencakup tiga lapisan teknologi dasar. Pertama, **HTML** memberi struktur: inilah judul, paragraf, daftar, gambar, tautan, dan formulir, tersusun dalam urutan yang bermakna. Kedua, **CSS** memberi tampilan: warna, ukuran huruf, jarak, tata letak satu kolom atau tiga kolom, serta penyesuaian tampilan untuk ponsel dan komputer. Ketiga, untuk mempercepat pekerjaan besar, frontend juga dapat memakai **CSS framework** seperti Bootstrap, yaitu kumpulan komponen antarmuka yang sudah dirancang dan dirapikan orang lain sehingga kita tinggal menata dan menyesuaikannya.

Perlu jujur sejak awal tentang satu hal: di dunia industri, frontend juga meliputi interaksi dinamis — keranjang yang bertambah tanpa memuat ulang halaman, misalnya — yang biasanya ditulis dengan bahasa pemrograman JavaScript. Buku ini sengaja **tidak mengajarkan JavaScript sama sekali**. Mata kuliah ini berdiri sebagai mata kuliah *translasi desain*: Anda belajar menerjemahkan desain antarmuka menjadi website statis yang responsif, konsisten, dan aksesibel menggunakan HTML dan CSS. Terlebih lagi, sebagian besar kebutuhan tampilan Tokosaya — kartu produk, halaman hero, formulir kontak, tata letak katalog — dapat dipenuhi dengan halaman statis yang baik. Interaksi yang sesungguhnya menjadi tugas mata kuliah pemrograman web lanjutan.

Dari sudut pandang proyek SI, garis pemisah yang rapi antara yang termasuk dan tidak termasuk cakupan frontend dapat diuji dengan satu pertanyaan: *apakah kebutuhan ini mengubah apa yang dilihat, dibaca, atau disentuh pengguna?* Bila iya — misalnya klien ingin tombol kontak mudah ditemukan tanpa menggulir — itu pekerjaan frontend: penataan, teks, dan bentuk tombol diurus di sisi sini. Bila kebutuhannya berat pada data — "tiap transaksi harus tercatat dan dapat dilacak" — pusat pekerjaannya ada di backend, meskipun buktinya kelak juga tampil di antarmuka. Mahasiswa SI yang terbiasa menguji kebutuhan dengan kalimat tersebut akan jarang salah menempatkan pekerjaan pada tahap perencanaan, dan kebiasaan itulah yang dipakai ulang pada analisis kebutuhan Tokosaya di bagian Studi Kasus.

Sebelum lanjut, luruskan satu salah paham yang sering muncul: frontend bukan berarti "bagian yang mudah" dan backend bukan berarti "bagian yang canggih". Pada kartu produk, pekerjaan frontend mencakup keputusan yang tidak mudah: bagaimana kartu produk terlihat di layar ponsel kecil, keterangan apa yang harus selalu tampak saat gambar lambat termuat, bagaimana harga ditulis agar tak tertukar dengan diskon. Kedalaman masalahnya berbeda jenis, bukan berbeda tingkat.

Mengapa mahasiswa Sistem Informasi perlu mempelajari ini? Karena dalam banyak proyek, lulusan SI adalah orang yang duduk di antara klien, desainer, dan pemrogram, lalu memastikan kebutuhan bisnis benar-benar sampai ke layar: sistem nilai akademik, portal perpustakaan, aplikasi antrean rumah sakit, website layanan publik — semuanya dinilai pengguna dari apa yang mereka lihat dan rasakan di antarmuka. Memahami frontend berarti memahami titik temu antara sistem dan manusia yang memakainya, dan buku ini diarahkan untuk keterampilan menulis antarmuka tersebut dari dasar.

### 1.2 Frontend vs Backend

*Backend* adalah sisi "belakang" website: program dan data yang bekerja di server, jauh dari mata pengguna, yang menerima permintaan, mengolah data, dan mengirim hasilnya kembali untuk ditampilkan. Frontend dan backend adalah dua sisi keping uang yang saling bergantung. Analogi yang paling sering dipakai dan mudah diingat adalah **ruang kafe dan dapur**.

Bayangkan Anda datang ke kafe. Bagian yang Anda alami adalah ruang kafe: menu di meja, kasir, aroma kopi, sajian makanan yang rapi, dan tempat duduk pelanggan yang nyaman. Itulah **frontend** — segala sesuatu yang dirancang agar pengunjung merasa nyaman dan mengerti apa yang harus dilakukan. Sementara itu, di belakang pintu ada **dapur**: resep rahasia, persediaan bahan, pesanan yang antre, dan mesin kopi yang bekerja keras. Pengunjung tidak melihatnya, tetapi tanpanya ruang kafe hanya berisi furnitur kosong. Pelayan yang membawa pesanan dari meja ke dapur dan membawa makanan dari dapur ke meja berperan sebagai pengantar pesan antara kedua dunia. Ilustrasi hubungan ketiganya:

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

Dalam bahasa teknis, frontend berbicara dengan markup dan gaya (HTML, CSS, dan sesekali interaksi), sedangkan backend berbicara dengan logika pelayan dan basis data. Tabel berikut membandingkan keduanya dari sudut yang relevan bagi mahasiswa SI.

| Aspek | Frontend | Backend |
|---|---|---|
| Bekerja pada | Peramban pengguna | Server |
| Bahasa & teknologi inti | HTML, CSS (dan framework antarmuka) | Bahasa server (mis. PHP, Python, Java) + basis data |
| Fokus yang diukur | Tampilan, responsif, aksesibilitas, keterbacaan | Keandalan data, keamanan, kinerja pemrosesan |
| Hasil yang terlihat | Kartu produk, tombol, formulir | Stok berkurang, pesanan tersimpan, surel terkirim |
| Cara pengguna menilai | "Rapi dan mudah" | "Cepat, akurat, tidak bocor" |

Pada Tokosaya, pembagian ini mudah diamati. Kartu produk dengan nama *Keyboard Mekanis KX-210* dan harga Rp650.000 adalah pekerjaan frontend — bentuk, teks, susunannya. Ketika tombol "Beli" ditekan dan stok benar-benar berkurang di penyimpanan toko, itu pekerjaan backend. Harga terbaru yang datang sebagai data dari server juga hasil kerja backend; frontend hanya menampilkannya. Dalam sistem informasi rumah sakit, polanya sama: antrean yang tampil di layar pasien adalah frontend, sedangkan rekam medis yang tersimpan dan dijaga integritasnya adalah backend.

Garis pemisah itu kadang tampak kabur bagi pemula karena hasil kerja keduanya muncul di layar yang sama. Kunci pembeda yang dapat dibawa keluar kelas: frontend mengurus **penyajian dan interaksi di layar**, backend mengurus **penyimpanan data dan aturan bisnis**. Kotak pencarian di kepala halaman Tokosaya misalnya: wujud kotak, tanda kaca pembesar, dan tata letaknya adalah pekerjaan frontend; apa yang terjadi setelah tombol ditekan — sistem menyaring ratusan produk sesuai kata kunci dan mengembalikan daftar yang cocok — itu kerja backend. Atau pada formulir kontak: kolom nama dan surel beserta labelnya milik frontend, sedangkan pengiriman isi formulir ke `halo@tokosaya.id` dan pencatatannya adalah urusan backend. Mahasiswa SI yang terbiasa memetakan setiap kebutuhan klien ke satu dari dua kolom ini sudah memegang setengah keterampilan analisis kebutuhan.

Penting untuk menghindari kesan salah yang umum di mahasiswa semester awal: frontend **bukan** bagian mudah dan backend bagian sulit. Keduanya berbeda jenis tantangan. Backend ditantang oleh logika dan integritas data; frontend ditantang oleh kejelasan, konsistensi, dan beragamnya layar pengguna — dari ponsel sempit sampai monitor lebar. Buku ini menempuh jalur frontend karena itulah jalan yang paling cepat menghubungkan mahasiswa SI dengan keterampilan memproduksi antarmuka yang dapat dipresentasikan kepada klien.

### 1.3 Posisi Frontend dalam Pengembangan Sistem Informasi

Sistem informasi tidak lahir dari kode begitu saja. Jalur yang lazim dalam pengembangan sistem informasi bergerak dari kebutuhan menuju sistem yang berjalan: **kebutuhan bisnis → analisis → desain → implementasi → pengujian → pemeliharaan**. Frontend menempati posisi yang sangat khas: ia menerima keluaran desain dan menerjemahkannya menjadi sesuatu yang berjalan di peramban, sekaligus menjadi wajah yang dinilai pengguna di setiap langkah.

Mari telusuri jalurnya satu per satu. Di tahap **kebutuhan bisnis**, pemilik Tokosaya mengatakan ingin toko yang dapat dilihat dan dihubungi. Tahap **analisis** menerjemahkan kalimat itu menjadi daftar rinci: siapa pengunjungnya, produk apa yang harus ditampilkan, informasi apa yang wajib ada, dan proses apa yang mengalir dari pencarian sampai pesanan. Tahap **desain** mengubah daftar itu menjadi rancangan antarmuka — tata letak halaman, warna, hierarki tombol — dilakukan oleh pihak desainer (atau oleh analis SI yang merangkap peran ini). Pada tahap **implementasi**, pekerjaan terbagi: frontend mewujudkan rancangan menjadi halaman HTML dan CSS, backend membangun layanan data di belakangnya. Tahap **pengujian** memeriksa keduanya, dan tahap **pemeliharaan** menjaga sistem tetap hidup setelah diluncurkan.

Perhatikan posisi frontend pada gambaran itu: ia adalah **titik temu**, bukan tempat terpencil. Di satu sisi berdiri klien yang berbicara tentang barang dan harga; di sisi lain berdiri rancangan desain berisi kotak, warna, dan huruf; di sisi lain lagi berdiri backend yang berbicara tentang data. Peran lulusan Sistem Informasi persis berdiri di tengah titik temu itu, karena SI adalah bidang yang mempelajari sistem dari tiga sisi sekaligus: bisnis, teknologi, dan manusia penggunanya. Ini pula alasan mata kuliah ini melatih *translasi desain* — kemampuan membaca keputusan desain dan mengubahnya menjadi kode yang setia pada rancangan. Karena itu pula penting mengetahui keluaran khas tiap tahap, agar Anda selalu tahu bentuk benda yang sedang Anda kerjakan:

| Tahap | Pertanyaan kunci | Keluaran khas |
|---|---|---|
| Kebutuhan bisnis | Apa masalah yang ingin diselesaikan? | daftar kebutuhan utama dari klien |
| Analisis | Apa yang sistem harus mau dan bisa? | spesifikasi kebutuhan, peran pengguna |
| Desain | Bagaimana tampak dan terasa di layar? | rancangan antarmuka, tata letak, warna |
| Implementasi | Bagaimana rancangan dihidupkan? | halaman HTML/CSS (frontend) + layanan data (backend) |
| Pengujian & pemeliharaan | Apakah sesuai dan tetap berguna? | catatan temuan, perbaikan, pembaruan rutin |

Untuk konteks SI yang lebih spesifik, bayangkan proyek sistem informasi perpustakaan kampus. Tahap analisis menghasilkan kebutuhan seperti "peminjam harus bisa melihat status ketersediaan buku". Desain kemudian membentuk halaman daftar buku dan formulir peminjaman. Implementasi frontend mengubah keduanya menjadi halaman HTML dengan daftar dan formulir yang rapi. Jika frontend dilakukan buruk — misalnya formulir tanpa label, tombol dengan kata-kata membingungkan — pengguna tidak peduli seberapa cerdas backendnya; mereka akan berhenti di layar pertama. Ketajaman frontend, karenanya, bukan hiasan, melainkan syarat sistem informasi benar-benar dipakai.

Dalam tim kecil — situasi paling umum pada proyek SI di UMKM dan lingkungan kampus — satu orang kerap memainkan tiga topi sekaligus: analis yang mencatat kebutuhan, perancang yang menatanya, dan implementer yang menulis HTML dan CSS. Buku ini melatih topi ketiga secara paling intens, tetapi selalu dalam bingkai dua topi lainnya: setiap kali Anda menambah halaman Tokosaya, Anda diminta pula menimbang kebutuhannya (topi analis) dan pilihan visualnya (topi perancang). Kombinasi tiga topi itulah yang menjadikan lulusan SI berguna sejak pertemuan pertama dengan klien: ia mampu mendengarkan "saya ingin toko saya ada di internet" dan mengubah kalimat itu menjadi rencana yang dapat dikerjakan lalu halaman yang dapat dilihat.

### 1.4 Web Design, UI, UX, HTML, dan CSS

Empat istilah berikut sering tertukar pada percakapan sehari-hari, padahal masing-masing menunjuk lapisan yang berbeda. *Web design* adalah disiplin merancang tampilan dan pengalaman halaman web secara keseluruhan — seberapa terbaca, seberapa jelas, seberapa menyenangkan. *User interface* (UI) menunjuk lapisan yang paling konkret: kumpulan elemen yang dilihat dan disentuh pengguna, seperti tombol, kartu produk, ikon keranjang, dan formulir. *User experience* (UX) lebih luas lagi: pengalaman menyeluruh pengguna ketika menempuh tujuannya, mulai dari mudah-tidaknya menemukan produk, sejelas-tidaknya langkah transaksi, sampai rasa percaya yang tumbuh selama proses itu. Satu kalimat pembatas yang ringkas: UI adalah *tampaknya*, UX adalah *rasanyanya*, dan web design adalah kerja menyelaraskan keduanya.

HTML dan CSS adalah bahan bangun yang menghidupkan rancangan itu. **HTML** (*HyperText Markup Language*) menata konten menjadi struktur bermakna: inilah heading, paragraf, daftar, gambar, tautan, dan formulir. **CSS** (*Cascading Style Sheets*) mengatur rupa: warna, huruf, jarak, dan tata letak. Keduanya bekerja sebagai pasangan yang sengaja dipisah — ibarat bangunan dan catnya. Sekali lagi tanpa JavaScript: buku ini bekerja dengan pasangan HTML + CSS sampai halaman-halaman Tokosaya selesai dibangun, dan hasilnya sudah cukup untuk memenuhi standar tampilan yang layak dipresentasikan.

Alur kerja yang akan dilatih berulang-ulang di buku ini adalah **design → code**. Pertama, kebutuhan diubah menjadi rancangan (yang dikerjakan dengan alat desain seperti Figma, dibahas di Bab 14). Kedua, rancangan diuraikan menjadi struktur: bagian mana heading, mana paragraf, mana gambar, mana daftar — bahasa HTML. Ketiga, struktur diberi rupa: warna, ukuran, jarak, tata letak — bahasa CSS. Keempat, bila kebutuhan berulang, komponen siap pakai dari CSS framework dipakai agar hemat waktu dan konsisten. Latihkan alur itu pada satu komponen kecil Tokosaya, lencana *Best Seller* pada kartu Keyboard Mekanis KX-210. Desain menetapkan: lencana kecil berwarna amber di pojok kartu produk dengan teks gelap. Alur *design → code* menerjemahkannya berlapis: HTML menuliskan teks lencana pada bagian kartu yang tepat; CSS memberi latar warna, bentuk bulat, dan ukuran huruf; kelak komponen *badge* Bootstrap dapat mengambil alih tugas itu dengan satu kelas saja. Contoh kecil ini memperlihatkan seluruh filosofi buku: desain yang jelas membuat kode menemukan jalannya, bukan mencarinya sendiri. Pada Tokosaya, katakanlah rancangan menetapkan kartu produk putih dengan sudut membulat dan harga berwarna indigo: HTML menyimpan data dan struktur kartu, CSS mewujudkan putihnya, membulatnya, dan warna harganya. Ketika alur ini dipahami, pekerjaan frontend terasa seperti menerjemahkan, bukan mengarang dari kosong.

Sekadar melengkapi, kenapa desain dan implementasi sengaja dipisah dua peran itu dan bukan disatukan? Pengalaman praktik SI menjawab: perubahan pada rancangan murah-murah dilakukan sebelum ada kode yang harus dirombak; dan setelah kode ada, kerapian rancangan menjadi tolok ukur obyektif — apakah kartu benar-benar berbentuk membulat dua belas piksel, apakah warna tombol sama seperti rancangan. Memisahkan keduanya, lalu menyambungnya lewat alur translasi yang disiplin, menekan biaya perubahan yang biasanya jadi pos paling mahal dalam proyek sistem informasi. Mata kuliah ini memberi Anda dua sisi keterampilan itu sekaligus: membaca rancangan dan menuliskan kodenya.

### 1.5 Anatomi Sebuah Website

Sebelum menulis kode, pahami dulu dari apa sebuah website itu tersusun. Unit terkecil yang dialami pengguna adalah **halaman** (page): satu dokumen HTML yang menampilkan satu "layar konten", misalnya halaman beranda Tokosaya atau halaman katalognya. Sejumlah halaman yang saling terhubung lewat tautan membentuk **website**. Selain dokumen HTML, sebuah website hampir selalu membawa **aset**: file gambar, file CSS untuk seluruh gaya, kadang font, dan ikon. Aset-aset inilah yang membuat folder proyek web terasa seperti kecil-kecilan sebuah perusahaan: ada dokumen utama, ada gudang gambar, ada lembar gaya bersama.

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

Perhatikan tiga kebiasaan yang sudah terlihat pada pohon folder di atas. Pertama, satu file CSS bersama (`css/style.css`) dipakai oleh semua halaman agar gaya konsisten dan mudah diperbaiki di satu tempat. Kedua, nama file ditulis dengan huruf kecil dan tanda hubung, pola yang disebut *kebab-case* — `produk-keyboard-kx210.svg`, bukan `Produk Keyboard KX210.svg` — supaya tautan gambar tidak rontok karena perbedaan besar-kecil huruf antar sistem operasi. Ketiga, setiap halaman berdiri sebagai file `.html` sendiri; tidak ada satu file raksasa yang memuat semuanya.

Sedikit kosakata juga perlu diperbaiki sejak sekarang. **Domain** adalah nama alamat website, misalnya `tokosaya.id` — biasanya disewa tahunan dari penyedia domain. **Hosting** adalah layanan yang menyimpan berkas website pada sebuah server yang selalu menyala, sehingga berkas dapat diakses orang lain lewat internet. Untuk pengembangan di komputer sendiri, Anda menulis berkas di komputer sendiri dan membukanya langsung di peramban — konsepnya sama, hanya belum "dipasang" di internet. Menyalin berkas ke server dan mengaitkannya dengan domain disebut *deployment*, dan pada level konsep cukup itulah yang Anda perlukan saat ini.

Nama `index.html` juga bukan koinciden. Bila pengunjung mengetik alamat situs tanpa nama berkas — hanya `tokosaya.id/` — peramban dan server menganggap bahwa yang dimaksud adalah berkas halaman utama bernama `index.html`. Konvensi yang sama bekerja di komputer Anda: dobel klik `index.html` menghasilkan tampilan yang sama dengan mengetik alamat foldernya. Itulah sebabnya seluruh proyek buku ini menamai halaman utamanya `index.html`, bukan `utama.html` atau `halaman1.html`.

Soal aset gambar, dua keluarga berkas paling sering Anda jumpai dan cukup itu yang perlu dikenali di awal. **SVG** menyimpan gambar sebagai kumpulan definisi bentuk (garis, kotak, lingkaran), sehingga tetap tajam pada ukuran apa pun dan cocok untuk logo, ikon, serta ilustrasi produk sederhana — inilah sebab seluruh gambar proyek Tokosaya dipakai dengan akhiran `.svg`. **JPEG** dan **PNG** menyimpan piksel; keduanya lazim untuk foto dan tangkapan layar. Konsekuensinya praktis: pilih SVG untuk logo dan ikon, JPEG/PNG untuk foto nyata, dan jaga ukuran berkas gambar tetap kecil bila halaman ingin tetap ringan dibuka di jaringan ponsel.

Terakhir, **URL** (*Uniform Resource Locator*) adalah alamat lengkap setiap sumber daya web, dan strukturnya dapat dibaca bagian demi bagian: `https` adalah skema (protokol), `tokosaya.id` adalah domain, dan `/katalog.html` adalah jalur menuju berkas di dalam website. Ketika di Bab 2 Anda menulis tautan seperti `<a href="katalog.html">`, yang Anda tulis adalah jalur relatif — alamat dibaca relatif terhadap folder halaman yang sedang membukanya, bukan alamat penuh.

### 1.6 Cara Browser Merender Halaman dan Pengenalan Chrome DevTools

Ketika sebuah halaman dibuka, apa sebenarnya yang terjadi? Pada level konseptual cukup empat gerakan yang perlu Anda pegang. Pertama, peramban **menerima dokumen HTML** — dari server, atau dari folder Anda sendiri. Kedua, peramban **membaca tag demi tag** dokumen itu dan menyusunnya menjadi pohon dokumen — struktur bertingkat di mana elemen bungkusan (mis. `<html>`) memayungi elemen di dalamnya (`<head>`, `<body>`), dan elemen konten (`<h1>`, `<p>`) menggantung di cabang-cabangnya. Pemahaman umum menyebut pohon ini *DOM* (*Document Object Model*), dan untuk mata kuliah ini cukup dipahami sebagai wujud struktur dokumen di dalam peramban. Ketiga, peramban **menerapkan gaya**: aturan CSS dicari dan dicocokkan ke elemen-elemen pohon tersebut; dari sini keputusan warna, ukuran, dan tata letak lahir. Keempat, peramban **menggambar** hasil akhirnya ke layar — teks pada tempatnya, gambar pada ukurannya, jarak sesuai aturan. Alur ringkasnya: dokumen HTML → pohon dokumen → gaya diberlakukan → halaman digambar di layar.

Kesadaran akan alur ini membongkar rahasia kecil yang sering menyelamatkan mahasiswa pemula: **browser tidak menebak, browser membaca**. Jika tampilan terlihat salah, hampir selalu ada baris dokumen atau gaya yang membuatnya begitu — dan pekerjaan debugging antarmuka adalah mengunjungi kembali baris itu. Kebiasaan ini pula yang menyiapkan diskusi layout di Bab 5–7: kesalahan jarak dan tata letak bukan misteri, melainkan konsekuensi terbaca yang bisa dilacak.

Untuk melihat "di balik layar" halaman ini, Chrome menyediakan **Chrome DevTools**, panel inspeksi yang terbuka dengan menekan `F12` atau klik kanan lalu *Inspect*. Panel yang paling sering dipakai di awal adalah **Elements**: di sanalah pohon tag halaman tampil sebagai garis-garis yang dapat dibuka dan ditutup, dan mengklik satu baris pada panel itu langsung menyorot elemen yang bersangkutan di halaman. Sebagian panel lain terkait fitur yang di luar cakupan mata kuliah ini — cukup kenali Elements dan dua kemampuan berikut.

Dua kemampuan DevTools yang akan Anda pakai — memeriksa struktur halaman dan menguji ukuran layar lewat *device toolbar* — keduanya adalah pekerjaan *mengamati*, bukan *mengeksekusi*; di Bab 7 dan Bab 13 kemampuan ini naik grade menjadi alat pengujian responsif dan aksesibilitas yang serius.

Satu kebiasaan QA kecil yang murah: setelah setiap perubahan kode, muat ulang halaman dan periksa kembalinya panel Elements sebelum menyimpulkan tampilannya benar atau salah. Banyak "bug" pemula sebenarnya bukan cacat kode, melainkan versi berkas lama yang masih tampil karena halaman belum dimuat ulang. Membiasakan pasangan *simpan → muat ulang → periksa* sejak Bab 1 akan menghemat jam-jam debugging di Bab 5 ke atas, saat tata letak mulai rumit.

Kesadaran akan cara merender ini juga mengubah cara Anda mendengar keluhan pengguna — kemampuan yang paling dibutuhkan analis SI. Anggap saja klien berkata "tombolnya hilang saat dibuka dari ponsel" atau "tulisannya menabrak logo". Kalimat demikian tidak perlu dibayangkan sebagai layar misterius: di belakangnya selalu ada pasangan pertanyaan yang dapat dilacak — elemen apa yang seharusnya ada di struktur (periksakan lewat Elements) dan berapa lebar layar yang digunakan pengguna (periksakan lewat device toolbar). Dua pertanyaan itu mengubah keluhan yang tampak mistis menjadi daftar pemeriksaan yang bisa dikerjakan.

### 1.7 HTML, CSS, dan CSS Framework

Sampai di sini tiga teknologi yang berdampingan dalam kerja frontend perlu duduk di kursi masing-masing. **HTML mengurus struktur**: dokumen bermakna yang bisa dibaca mesin dan manusia — judul di atasnya, isi di tengahnya, footer di dasarnya. **CSS mengurus rupa**: dari warna tautan sampai tata letak empat kolom di monitor lebar. **CSS framework** mengurus komponen siap pakai: keringkasan dan konsistensi yang datang siap jadi, seperti mengambil rak dari tukang kayu alih-alih mengetuk kayu sendiri. Framework yang dipakai di buku ini adalah **Bootstrap 5** via CDN (berkas gaya dimuat langsung dari jaringan), dan dia baru masuk pada **Bab 9**.

Mengapa baru Bab 9? Karena framework yang dipakai tanpa memahami dasarnya berubah menjadi penjara: Anda tahu cara mengambil komponen, tetapi tidak tahu mengapa tampilannya begitu, tidak bisa menyesuaikannya, dan bingung saat merusak hal lain. Urutan buku ini membaliknya: dasar dulu (Bab 2–7), baru framework (Bab 9–11). Setelah Anda bisa membangun kartu produk dengan CSS murni, memakai kartu Bootstrap terasa seperti memakai alat ukur yang sudah Anda pahami cara kerjanya — bukan kotak hitam. Ketika itu terjadi, keputusan memakai framework pun menjadi keputusan berbasis risiko-manfaat yang layak dibicarakan siapa pun dalam tim: manfaatnya adalah kecepatan dan konsistensi antarmuka; biayanya adalah waktu belajarnya dan keterbatasan penyesuaiannya terhadap desain yang tidak standar. Dengan paham dasar, Anda bisa menimbang kapan framework menghemat waktu dan kapan komponen siap pakai itu justru membatasi penyesuaian ketika desain berbeda dari pattern standarnya.

Kini peta perjalanan buku ini, agar setiap bab punya alamat yang jelas:

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

Amati tiga gerbang besar di tabel itu: Bab 1–8 membangun fondasi HTML dan CSS murni pada proyek `tokosaya-css/`; Bab 9–15 menciptakan versi profesionalnya di proyek `tokosaya-bootstrap/` dengan Bootstrap 5; Bab 8 dan 16 adalah dua ujian integrasi. Jika Anda ingat halaman yang sedang Anda buka adalah halaman N dari peta itu, setiap jam belajar terasa sebagai satu langkah menuju proyek utuh, bukan potongan-potongan lepas.

Manfaat framework yang tidak kalah pentingnya adalah konsistensi. Ketika seluruh kartu produk datang dari komponen yang sama, warna, jarak, dan bentuknya otomatis seragam antarhalaman — hal yang mahal dirawat bila setiap kartu dibuat manual berulang-ulang. Bila komponen dibuat sendiri, keseragaman itu harus dirawat dengan disiplin design token (nilai warna dan jarak baku yang dipakai ulang), dipelajari mulai Bab 4 dan dirumuskan formal pada Bab 12. Dengan kata lain, framework bukan pengganti tanggung jawab konsistensi; ia hanya salah satu cara membayarnya.

### 1.8 Tools Pengembangan

Perangkat utama di mata kuliah ini hanya dua: **editor kode** dan **peramban**. Untuk editor, buku ini memakai **Visual Studio Code (VS Code)** — gratis, ringan, dan tersedia di semua sistem operasi. Beberapa keunggulan yang relevan bagi pemula: pewarnaan teks yang menandai tag pembuka dan penutup, pelengkapan otomatis saat mengetik `<`, dan tampilan pohon berkas (*Explorer*) di sisi kiri sehingga pola folder proyek selama terlihat. Ekstensi yang sering menolong adalah **Live Server**: satu klik lalu halaman dibuka di peramban dan memuat ulang sendiri setiap kali berkas disimpan. Ekstensi ini opsional — membuka file HTML langsung (dobel klik atau seret ke Chrome) bekerja dengan baik untuk seluruh materi yang diambil di buku ini.

Peramban pilihan adalah **Google Chrome**, dengan Chrome DevTools yang telah dikenalkan di Subbab 1.6. Kebiasaan yang diharapkan terbentuk sejak hari pertama: setiap kali menulis atau mengubah kode, lihat hasilnya di peramban, dan setiap kali hasilnya aneh, buka DevTools untuk melihat struktur yang sebenarnya. Bab 13 dan Bab 15 akan menambah perangkat bantu pengujian di dalam DevTools; hingga saat itu, panel Elements dan device toolbar sudah cukup untuk keseharian.

Dua perangkat lain menyusul pada waktunya masing-masing, untuk diberi tahu saja di sini. **Figma** — aplikasi desain antarmuka yang bekerja di peramban — dibahas di Bab 14, dan perannya bagi Anda adalah membaca rancangan, bukan membuatnya dari nol. Sementara itu, panel-panel DevTools yang lebih dalam (mis. pemeriksaan kinerja) akan diperkenalkan seperlunya pada Bab 13 dan Bab 15 untuk pengujian. Cara belajar buku ini adalah memperkenalkan alat tepat ketika masalahnya muncul, bukan menumpuk semua alat sejak hari pertama — pola yang sama yang memandu urutan HTML, CSS, lalu Bootstrap.

Berikutnya soal **penataan folder proyek**. Aturan buku ini sederhana: satu folder proyek (mis. `profil-mahasiswa/` untuk latihan bab ini, `tokosaya-css/` untuk proyek utama), berisi dokumen HTML di tingkat atas dan subfolder `css/` serta `img/` untuk aset. Nama file selalu *kebab-case* huruf kecil — `index.html`, `katalog.html`, `produk-keyboard-kx210.svg` — dan hindari spasi serta huruf kapital pada nama file. Aturan ini terlihat remeh, tetapi di Bab 15 saat proyek bertambah besar dan tim Anda bertambah banyak, folder yang rapi adalah perbedaan antara menemukan berkas dalam lima detik dan lima menit.

Kebiasaan kecil lain yang murah tapi berharga: tekan `Ctrl+S` setiap kali selesai menulis, jangan mengetik kode di aplikasi pengolah kata (ia menyelipkan karakter tak terlihat yang merusak file HTML), dan selalu buat salinan folder kerja sebelum mencoba perubahan besar. Dua detik menyimpan dan menyalin dapat menghemat waktu berjam-jam ketika perubahan besar ternyata keliru dan versi terakhir yang baik masih tersedia.

### 1.9 Menulis Dokumen HTML Pertama

Kini saatnya mengenal wajah minimal sebuah dokumen HTML. Dokumen HTML yang layak digali ditulis dengan pola tetap. Baris pertama, `<!DOCTYPE html>`, memberitahu peramban bahwa dokumen ditulis dalam HTML5. Elemen `<html lang="id">` membungkus seluruh dokumen dan menyatakan bahasa isinya — dalam hal ini Indonesia — yang berguna bagi peramban dan pembaca layar. Bagian `<head>` menyimpan informasi tentang halaman: `<meta charset="utf-8">` menyatakan pengodean agar teks Indonesia dengan tanda petik dan tanda seru tetap tampil normal; `<meta name="viewport" ...>` mengatur agar halaman mengikuti lebar layar perangkat — fondasi seluruh pembahasan responsif; dan `<title>` memberi judul yang tampil di tab peramban. Barulah `<body>` memuat apa yang benar-benar dilihat pengunjung.

Seluruh pola itu akan Anda ketik utuh pada bagian Contoh Kode dan Praktikum. Yang perlu dibiasakan sejak tulisan pertama adalah **disiplin struktur**: satu dokumen, satu `<h1>` (judul terpenting halaman); heading tidak melompat level tanpa alasan (`h1` → `h2` → `h3`, bukan `h1` → `h3`); setiap gambar sediakan `alt` berupa deskripsi singkat; dan penulisan tag selain huruf kecil. Kedengarannya detail kecil, tetapi keempat kebiasaan itu adalah fondasi aksesibilitas dan keterbacaan kode yang akan diuji pada Bab 8 dan Bab 16.

Sebelum mengetik pertama kali, pasang tiga rambu kesalahan pemula. Pertama, jangan mengarang tag sendiri: kekuatan HTML justru pada kumpulan elemen baku yang pengertiannya disepakati seluruh peramban; tag yang tidak dikenal justru diabaikan tanpa pesan, sehingga kesalahan hanya terlihat dari hasil tampilan tanpa keterangan mengapa. Kedua, jangan menutup dokumen setengah jadi: tag pembuka tanpa pasangan penutupnya tidak selalu membuat halaman rusak mendadak, tetapi struktur pohon di dalamnya bergeser — dan pergeseran itu yang kelak bermasalah saat gaya diterapkan. Ketiga, simpan dokumen dengan akhiran `.html` dan pengodean UTF-8 sejak penulisan pertama, bukan setelah hasilnya kelihatan aneh. Ketiga rambu itu kini terang: seluruh detailnya dipakai ulang di bagian Troubleshooting Praktikum.

Sudah cukup percakapan — saatnya mengetik. Dua halaman penuh menanti Anda: contoh terpisah di bagian berikutnya dan halaman profil Anda sendiri di bagian Praktikum.

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

Dua contoh berikut adalah dokumen HTML lengkap dan dapat diketik utuh lalu dibuka langsung di peramban. Contoh pertama adalah dokumen paling sederhana; contoh kedua memperlihatkan hal yang sama diterapkan pada pengenal halaman Tokosaya.

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

Penjelasan: dokumen minimal ini memuat seluruh tulang punggung yang akan dipakai di setiap halaman sepanjang buku — deklarasi HTML5, bahasa dokumen, pengodean, viewport, judul tab, dan tubuh halaman berisi heading serta paragraf.

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

Penjelasan: contoh kedua hanya memakai paragraf dan tautan demi tetap mudah dibaca pada pertemuan pertama. Target `katalog.html` menuntut Anda membuat berkas tersebut — atau tautan itu sementara "mati" hingga Bab 2, dan justru pada tahap itulah pemahaman Anda soal halaman dan tautan terbentuk.

## Penjelasan Kode

**Contoh 1 (`latihan/01-halo-dunia.html`).** `<!DOCTYPE html>` bukan tag konten melainkan deklarasi mode: ia memberi tahu peramban bahwa dokumen mengikuti HTML5, sehingga peramban memakai mode pembacaan standar terbaru. `<html lang="id">` menandai bahasa dokumen; bahasa yang dinyatakan membantu pembaca layar memilih pelafalan dan membantu mesin pencari menilai konten. Di dalam `<head>`, `<meta charset="utf-8">` wajib karena tanpa dia karakter khas Indonesia pada teks dapat berubah jadi simbol aneh; `<meta name="viewport">` memastikan halaman disajikan sesuai lebar layar perangkat dan menjadi titik tolak seluruh pekerjaan responsif Bab 7 dan 13. `<title>` adalah satu-satunya elemen `head` yang terlihat pengguna — teksnya muncul di tab peramban dan pada riwayat halaman. Bagian `<body>` memuat dua macam elemen yang sudah Anda kenal: `<h1>` sebagai judul terpenting halaman (satu per halaman, buat kebiasaan ini sejak contoh pertama) dan `<p>` untuk paragraf.

**Contoh 2 (`tokosaya-css/index.html`).** Halaman ini sengaja ditulis "berongga gaya" — tanpa satu pun CSS — agar Anda melihat peramban menyediakan tampilan dasarnya sendiri: heading besar dan tebal, tautan berwarna biru bergaris bawah. Ini pemahaman penting: peramban punya *style* bawaan, dan tugas CSS nantinya sebagian besar menggantikan gaya bawaan itu. Tautan `<a href="katalog.html">` memakai jalur relatif: peramban mencari `katalog.html` di folder yang sama dengan halaman yang sedang dibuka, sehingga seluruh folder tetap bekerja saat dipindah ke komputer atau host lain — inilah alasan struktur folder rapi di Subbab 1.5 begitu bernilai. Judul hero di `<h1>` dan subjudul pada `<p>` mengikuti konten hero baku Tokosaya, termasuk tombol "Lihat Katalog" (sementara berupa tautan polos; penyamaran visual tombol adalah pekerjaan CSS di Bab 9). Perhatikan juga tanda `<!-- -->
```
: komentar HTML tidak tampil di halaman, tapi sangat berguna untuk meninggalkan catatan bagi pembaca berikutnya — termasuk diri Anda sebulan kemudian. Contoh ini pula titik lahir folder proyek `tokosaya-css/` yang akan terus diisi hingga UTS.

## Praktikum

### Tujuan Praktikum

Membuat halaman profil mahasiswa menggunakan HTML murni yang memuat nama, foto, bidang minat, daftar keterampilan, dan tautan; kemudian membukanya di Google Chrome dan menginspeksinya dengan Chrome DevTools. Setelah praktikum, Anda mampu mengetik dokumen HTML utuh dari pola minimal, memahami peran tiap bagian dokumen, dan menggunakan panel Elements untuk melihat struktur halaman yang barusan Anda tulis.

### Kebutuhan

- Komputer dengan **Visual Studio Code** terpasang (instal dari situs resmi bila belum ada).
- **Google Chrome** sebagai peramban utama (Chrome DevTools wajib tersedia).
- Satu berkas gambar untuk foto profil (potret Anda sendiri, atau gambar apa pun; akan dinamai ulang pada langkah persiapan).
- Folder kerja di tempat yang mudah diingat, misalnya `D:\praktikum\bab-01\`.

### Persiapan

1. Buat folder utama bernama `profil-mahasiswa/` dan di dalamnya buat subfolder `img/`.
2. Salin gambar pilihan Anda ke `img/` lalu ubah namanya menjadi `foto-profil.png` (pastikan tampilan ekstensi berkas diaktifkan di File Explorer agar pengubahan nama tidak menyisakan akhiran ganda seperti `foto-profil.png.jpg`).
3. Buka Visual Studio Code, pilih menu *File → Open Folder*, dan buka folder `profil-mahasiswa/` agar pohon berkasnya tampil di panel Explorer.
4. Siapkan peramban Chrome; Anda akan sering berpindah antara editor dan peramban selama praktikum.

### Langkah Kerja

1. Di dalam folder `profil-mahasiswa/`, buat berkas baru bernama `index.html` (klik ikon *New File* pada Explorer di VS Code).
2. Ketik seluruh kode pada bagian **Kode** di bawah ini, dari baris pertama sampai terakhir, tanpa memotong bagian mana pun.
3. Simpan berkas dengan `Ctrl+S` dan pastikan judul tab editor tidak lagi bertanda titik kosong (indikator berkas belum disimpan).
4. Buka `index.html` di Chrome — caranya dobel klik berkas di Windows Explorer, atau seret berkasnya ke jendela Chrome.
5. Amati halaman yang tampil: judul tab, nama besar, foto, dua daftar, dan tautan.
6. Buka Chrome DevTools dengan menekan `F12` (atau klik kanan halaman lalu pilih *Inspect*); pastikan tab **Elements** aktif.
7. Pada pohon berkas di panel Elements, cari dan klik satu baris `<h1 ...>`; amati bahwa elemen yang bersangkutan tersorot di halaman.
8. Amati panel **Elements** yang memuat pohon dokumen lengkap (`html`, `head`, `body`, dan isi `body`); amati bahwa pohon di panel itu persis mencerminkan baris yang Anda ketik — inilah bukti konsep pohon dokumen dari Subbab 1.6.
9. Aktifkan *device toolbar* (ikon berbentuk ponsel+tablet di pojok kiri atas DevTools) lalu ubah lebar layar dari ponsel ke komputer meja; amati bagaimana teks mengalir kembali mengikuti lebar yang berubah.
10. Tutup DevTools, muat ulang halaman (`F5` untuk memastikan versi tersimpan yang tampil), dan gunakan halaman itu sebagai tolok ukur pemahaman Anda sebelum lanjut ke bagian berikutnya.

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

Bagian `<head>` memuat tiga meta yang sudah Anda kenal: `charset` agar teks Indonesia tampil normal, `viewport` agar halaman mengikuti lebar layar perangkat ketika diuji pada device toolbar, dan `<title>` memberi nama tab halaman. Bahasa dokumen dinyatakan `lang="id"` sehingga peramban dan alat bantu memahami bahwa kontennya berbahasa Indonesia.

Bagian `<body>` memperlihatkan lima keluarga elemen dasar sekaligus. `<h1>` dan dua `<h2>` membentuk hierarki yang tidak melompat level: satu judul paling penting, lalu tiga subjudul setara. Elemen `<img>` menampilkan foto dengan atribut `src` (berkasnya di mana), `alt` (tulis apa bila gambar tidak tampil atau dibacakan bagi pengguna dengan kebutuhan khusus), serta `width` dan `height` agar slot gambarnya terukur sejak tampil. Elemen `<ul>` adalah daftar berpoin tanpa nomor — cocok untuk bidang minat yang tidak berurutan — sedangkan `<ol>` daftar bernomor, cocok untuk keterampilan yang diurutkan. Blok tautan memuat dua jenis tautan berbeda: tautan halaman web biasa (`https://...` dengan `target="_blank"` agar dibuka di tab baru) dan `mailto:` yang meminta peramban membuka aplikasi surel. Perlu diingatkan: nama pada contoh memakai domain `kampus.example` sebagai ilustrasi; ganti dengan data Anda sendiri saat mengetik ulang.

Dua keputusan penulisan pada halaman ini layak dijadikan kebiasaan. Pertama, pilihan `<ul>` versus `<ol>` bukan selera, melainkan makna: bila isi daftar tidak mengenal urutan — seperti bidang minat — pakai `ul`; bila urutannya bermakna — seperti daftar keterampilan yang disusun dari yang paling dikuasai — pakai `ol`. Kedua, `<strong>` dipakai pada kalimat sambutan untuk menandai pentingnya kalimat itu bagi makna isi, bukan sekadar agar terlihat tebal; pembalikannya — menyebar `<strong>` di semua tempat agar tampil "menyala" — justru meredupkan penekanan itu sendiri. Setelah praktikum ini, kebiasaan memilih elemen berdasarkan maknanya akan terus menyertai seluruh proyek, dan Bab 2 yang akan mematangkannya dengan sistematis.

### Hasil yang Diharapkan

Bila kode diketik dengan benar, halaman yang tampil memuat: judul tab *Profil Mahasiswa — Andi Pratama*; nama besar pada bagian atas; foto persegi berukuran 160 piksel; satu paragraf tebal dengan nama program studi; dua daftar (berpoin untuk bidang minat dan bernomor untuk keterampilan); serta dua tautan berwarna biru bergaris bawah yang berfungsi (menekan tautan kampus membuka tab baru, tautan surel membuka aplikasi surel).

Sisi DevTools yang wajib teramati: (1) panel **Elements** memperlihatkan struktur `html > head > meta...` dan `body` berisi `h1`, `img`, `p`, `ul`/`ol` — persis urutan yang Anda ketik; (2) mengklik baris elemen di panel menyorot kawasan elemen tersebut di halaman; (3) device toolbar memungkinkan lebar halaman dijalankan dari sekitar 360 piksel sampai lebarnya, dan teramati teks mengalir kembali mengikuti lebar yang baru. Ketiga pengamatan itu adalah bukti bahwa halaman Anda dibaca peramban sebagai struktur, setia pada Subbab 1.6.

Kebermaknaan pengamatan itu naik bila Anda mencatatnya. Siapkan catatan pendek (tiga baris: apa yang dilihat, di panel apa, apa artinya bagi kode) setiap kali DevTools dibuka; catatan itu menjadi latihan pertama menyusun bukti pengujian. Mulai tugas akhir nanti — dari UTS hingga UAS — kemampuan menjelaskan antarmuka lewat bukti struktur semacam ini menjadi bagian dari penilaian, bukan sekadar kebiasaan pribadi.

### Troubleshooting

**Masalah:** Berkas terbuka di aplikasi lain / ikonnya tidak dikenali peramban, atau ganda ekstensi seperti `index.html.txt`.
**Penyebab:** Windows secara bawaan menyembunyikan ekstensi berkas, sehingga penamaan dapat menambah akhiran tersembunyi dan VS Code dapat menyimpan sebagai jenis berkas lain.
**Solusi:** Di Windows Explorer buka tab *View* lalu centang *File name extensions*; periksa nama berkas, hapus akhiran ganda bila ada, dan pastikan berkas bertipe `.html` (bila perlu, simpan ulang dari VS Code dengan nama `index.html` dengan *Save as type* yang menampung semua jenis berkas).
**Pencegahan:** Selalu tampilkan ekstensi berkas sejak awal sebelum mulai menulis kode, dan periksa nama lengkap berkas di panel Explorer VS Code.

**Masalah:** Gambar profil tidak tampil; hanya ikon berkas rusak dan teks alternatif yang muncul.
**Penyebab:** Alamat pada atribut `src` tidak cocok dengan berkas sebenarnya — umumnya karena berkas tidak ada di folder `img/`, salah nama (besar-kecil huruf atau salah akhiran seperti `.jpg` vs `.png`), atau foto belum dipindahkan ke subfolder `img/`.
**Solusi:** Pastikan nama berkas `foto-profil.png` berada tepat di `img/` sejajar folder HTML; cocokkan penulisan pada atribut `src` huruf demi huruf, lalu muat ulang halaman.
**Pencegahan:** Biasakan menyalin gambar ke folder proyek lebih dahulu, menatanya dengan nama *kebab-case*, lalu menuliskan `src` dengan cara menyalin nama berkas (jangan diketik dari ingatan).

**Masalah:** Teks Indonesia dengan petik atau simbol (mis. "—") tampak sebagai kotak atau tanda tanya.
**Penyebab:** Halaman tidak memuat `<meta charset="utf-8">`, atau berkas disimpan dengan pengodean yang berbeda dari UTF-8.
**Solusi:** Pastikan baris `<meta charset="utf-8">` ada di `<head>`; lalu di VS Code pilih *Save with Encoding* dan simpan ulang sebagai UTF-8.
**Pencegahan:** Mulai setiap dokumen dari pola lengkap yang sudah berisi charset dan viewport; jangan menulis dokumen dari nol tanpa pola.

**Masalah:** Halaman tampil sangat besar di layar ponsel (teks kecil, perlu cubit-zoom) dalam pengujian device toolbar.
**Penyebab:** Atribut `<meta name="viewport">` tidak ada di `<head>`, sehingga peramban mengasumsikan lebar meja standar.
**Solusi:** Tambahkan `<meta name="viewport" content="width=device-width, initial-scale=1">` di dalam `<head>`, lalu muat ulang.
**Pencegahan:** Jadikan viewport sebagai bagian wajib pola dokumen minimal di setiap halaman baru, karena tiga bab ke depan akan selalu menguji halaman lewat ukuran layar perangkat.

**Masalah:** Tautan "Lihat Katalog" gagal dibuka dengan pesan berkas tidak ditemukan.
**Penyebab:** Jalur relatif pada `href` tidak cocok dengan berkas yang seharusnya, karena halaman target belum dibuat atau namanya berbeda (besar-kecil huruf atau salah nama).
**Solusi:** Daftar berkas yang ada di folder proyek dan samakan penulisan nama pada `href` secara persis; di tahap ini bila tujuan tautan memang belum ada berkasnya, itu wajar — beri komentar pada HTML bahwa halaman itu dibuat di bab berikutnya.
**Pencegahan:** Catat konvensi nama berkas proyek (huruf kecil, tanda hubung) dan ikuti secara konsisten untuk seluruh nama di mulai proyek pertama.

**Masalah:** Panel DevTools tidak terbuka meski tombol `F12` ditekan.
**Penyebab:** Kursor tidak berada di dalam jendela peramban, atau papan tombol mengharuskan menekan `Fn+F12`, atau jendela DevTools disematkan terpisah dan tak terlihat.
**Solusi:** Gunakan klik kanan halaman lalu pilih *Inspect* — jalan masuk yang paling andal; bila panel terbuka terpisah, kembalikan melalui menu titik tiga di pojok kanan atas DevTools (pilihan *Dock side*).
**Pencegahan:** Biasakan membuka DevTools lewat klik kanan → *Inspect* agar tidak bergantung pada kombinasi tombol yang berbeda antar papan tombol.

## Studi Kasus

Kembali ke Tokosaya, kini dengan mata yang terlatih. Tim pengembangan diminta menganalisis satu putaran kegiatan pembeli berikut: pengunjung membuka website di ponsel, menelusuri katalog, membuka halaman produk *Keyboard Mekanis KX-210*, menekan tombol "Beli", lalu mengisi formulir kontak ketika satu pertanyaan muncul di benaknya. Dari satu putaran itu, tanggung jawab frontend dan backend dapat dipisahkan dengan jelas.

Segala yang berhubungan dengan **yang dilihat** adalah domain frontend: penataan navigasi *Beranda, Katalog, Tentang, Kontak* agar dapat disentuh jari di layar kecil; kartu produk yang memuat gambar, nama, harga Rp650.000, dan lencana *Best Seller*; huruf dan warna yang konsisten dari halaman satu ke halaman lain; formulir yang memudahkan mengisi; serta halaman yang tetap rapi pada ponsel sekecil apa pun. Semua itu lahir dari HTML, CSS, dan disiplin desain antarmuka — seluruh materi buku ini. Sementara itu, segala yang berhubungan dengan **data dan aturan** adalah domain backend: stok yang berkurang saat transaksi dibuat, harga yang diambil dari daftar harga resmi (bukan ditebak di halaman), pencarian produk di antara ratusan item, serta pesanan yang masuk ke pembukuan dan pemberitahuan yang terkirim ke surel `halo@tokosaya.id`. Perhatikan bahwa *keyboard mekanis 87 tombol dengan switch biru* pada deskripsi produk adalah data yang disimpan — backend menyediakannya — tetapi urutan tampilnya, ukurannya, dan kerapian tulisannya adalah kerja frontend.

Sekarang perhatikan pertanyaan yang masuk dari klien, karena kebutuhan klien hampir selalu datang dalam bahasa antarmuka. "Kenapa menu toko saya kacau di ponsel?" — itu pertanyaan responsivitas (Bab 7, 13). "Warna tombol diskon di toko saya beda-beda tiap halaman" — itu masalah konsistensi antarmuka dan token (Bab 4, 12). "Kenapa pelanggan sulit mengisi formulir pemesanan?" — itu masalah desain form (Bab 11). "Kenapa tulisannya sulit dibaca orang tua saya?" — itu soal tipografi dan kontras (Bab 4, 13). Dan pertanyaan "kenapa semua perpustakaan kota tampak beda-beda padahal layanannya mirip" — itu soal pola desain dan design system (Bab 12). Satu-satunya yang tidak diajari di bab ini adalah pertanyaan tentang data dan logika — *bagaimana stok tahu kapan berkurang* — karena itu kerja backend di mata kuliah lain.

Pengalaman Tokosaya juga memperkenalkan kebutuhan yang muncul hampir setiap proyek SI: **kebutuhan antarmuka yang harus diperlakukan secara sengaja**, bukan hasil sisa. Toko yang "ada di internet" yang buruk justru dapat merugikan pemiliknya: harga tidak jelas membuat pembeli tidak yakin, formulir yang rumit membuat pesanan berhenti, dan tampilan yang berantakan di ponsel membuat pengunjung berpaling ke toko lain. Itulah alasan "desain adalah janji; kode yang rapi dan responsif adalah cara memenuhi janji itu di layar" menjadi moto buku ini — Tokosaya adalah klien yang menagih janji itu, dan seluruh bab akan membangun proyek untuknya, dari HTML pertama Anda di bab ini sampai website final di Bab 16.

Sebagai penutup analisis, rumusan kebutuhan antarmuka Tokosaya yang dapat dipertanggungjawabkan dari kisah ini adalah sebagai berikut: (1) navigasi dengan empat menu baku — Beranda, Katalog, Tentang, Kontak — ditambah ikon keranjang di ujung kanan, semua dapat disentuh jari di layar kecil; (2) halaman beranda dengan hero yang menyajikan judul *"Peralatan Kerja Digital untuk Semua"*, subjudul berisi penawaran harga UMKM yang jujur, dan tombol memanggil *Lihat Katalog*; (3) kartu katalog delapan produk baku dengan nama, kategori, harga tanpa spasi (mis. Rp650.000), dan lencana status yang konsisten; (4) informasi kontak lengkap: *Jl. Digital Raya No. 10, Jakarta; halo@tokosaya.id; (021) 555-0199*; (5) keterbacaan dan kontras yang aman untuk pengguna dari semua umur. Lima butir ini menjadi rujukan bersama setiap latihan praktik di bab-bab berikutnya: setiap kali Anda menambah halaman ke folder `tokosaya-css/` atau `tokosaya-bootstrap/`, cek kembali apakah butir-butir ini tetap terjaga.

## Latihan Mandiri

1. Jelaskan dengan kalimat Anda sendiri perbedaan frontend dan backend pada sebuah website, lalu temukan pasangan analogi Anda sendiri yang berbeda dari analogi ruang kafe dan dapur (mis. ruang perpustakaan dan gudang buku?).
2. Sebutkan empat pekerjaan yang jelas termasuk lingkup frontend dan empat pekerjaan yang jelas termasuk backend pada website perpustakaan kampus; tulis dalam dua kolom berdamping.
3. Pilih satu website layanan kampus (mis. informasi kuliah atau perpustakaan digital), lalu daftar lima elemen antarmuka yang Anda alami dan tiga kemungkinan pekerjaan server yang berjalan di belakangnya.
4. Tulis dokumen HTML minimal (judul halaman, satu `h1`, satu paragraf) yang menyebut versi Anda sendiri dari konten profil; simpan sebagai `latihan-2.html`, buka di Chrome, dan pastikan judul tabnya benar.
5. Tulis satu halaman profil mahasiswa versi Anda sendiri dengan syarat: satu `h1`, satu foto dengan `alt`, dua daftar (`ul` dan `ol`), dan minimal tiga tautan; kemudian inspeksi di Chrome DevTools dan catat lima nama tag yang muncul di panel Elements.
6. Buka halaman mana pun lewat tautan `https://tokosaya.id/katalog.html` (contoh) dan tuliskan di mana skema, domain, dan jalur berkasnya masing-masing terletak.
7. Cobalah membuka halaman profil Praktikum Anda pada dua ukuran layar (ponsel melalui device toolbar di DevTools dan layar komputer meja) lalu catat dua perbedaan penyajian yang teramati, misalnya aliran teks dan posisi foto.
8. Tulis tiga pertanyaan khas klien UMKM sebagaimana muncul pada Studi Kasus Tokosaya (mis. soal menu yang berantakan di ponsel), lalu tunjukkan bab mana pada peta belajar buku ini yang paling menampung jawaban tiap pertanyaan.

## Tugas

**Tugas 1 (individu).** Kembangkan halaman profil Praktikum menjadi dua halaman: `index.html` (profil utama) dan `rencana.html` (rencana belajar Anda selama mata kuliah ini, berisi daftar `ul` berisi hal-hal yang ingin Anda kuasai). Kedua halaman harus saling bertautan, lengkap dengan `meta viewport`, `alt` pada gambar, dan satu `h1` per halaman. Kumpulkan folder dizip; kriteria: kelengkapan struktur, berfungsinya tautan dua arah, dan kerapian penulisan kode (indentasi dua spasi, tag huruf kecil).

**Tugas 2 (kelompok, 3–4 orang).** Amati dua website layanan berbeda (mis. portal akademik kampus dan satu marketplace). Susun satu tabel perbandingan berisi: lima elemen frontend yang khas, tiga kemungkinan pekerjaan backend yang dugaan tim, dan satu catatan konsistensi antarmuka (elemen yang tampak seragam antarhalaman). Keluaran: satu halaman tabel + satu paragraf kesimpulan siap presentasi di pertemuan berikutnya. Kriteria penilaian: cakupan pengamatan (kedua situs benar-benar ditelaah, bukan dikira-kira), kecermatan pemisahan kerja front/back beserta alasannya, dan kejelasan catatan konsistensi.

## Refleksi

1. Sebelum membaca bab ini, apa bayangan Anda tentang "pembuatan website"? Setelah membaca, bagian mana yang berubah dari bayangan awal Anda?
2. Manakah yang lebih Anda nikmati: pekerjaan yang menghadap klien (desain, tata letak) atau pekerjaan di baliknya (data, logika)? Apa artinya bagi cara Anda memilih peran di proyek kelompok nanti?
3. Saat menginspeksi halaman di DevTools, apa hal yang paling menarik atau mengejutkan pada struktur halaman yang Anda tulis sendiri?
4. Dari 16 bab di peta buku, bab mana yang Anda duga paling menantang bagi Anda, dan kenapa? Siapkan rencana kecil untuk menghadapinya.

## Rangkuman

1. *Frontend development* adalah pekerjaan membangun bagian website yang dilihat, dibaca, dan diklik pengguna di peramban; buku ini menekankan sisi statis: HTML dan CSS.
2. Frontend dan backend adalah dua sisi satu keping: ruang kafe (tampilan) dan dapur (data dan logika); keduanya bekerja lewat pengantar pesan antara keduanya.
3. Dalam alur pengembangan SI — kebutuhan → analisis → desain → implementasi → pengujian → pemeliharaan — frontend menempati posisi implementasi antarmuka dan menjadi titik temu antara bisnis, desain, dan teknologi.
4. *Web design* adalah kerangka besarnya; UI adalah elemen yang disentuh; UX adalah pengalaman menyeluruh; HTML menyusun struktur, CSS menyusun rupa.
5. Sebuah website tersusun atas halaman dan aset; pola folder rapi (`index.html`, `css/style.css`, `img/...`) dan nama berkas *kebab-case* adalah standar proyek buku ini.
6. Peramban merender halaman dengan alur konseptual: menerima dokumen HTML → menyusun pohon dokumen → menerapkan gaya → menggambar hasilnya ke layar; DevTools memperlihatkan pohon itu lewat panel Elements.
7. HTML, CSS, dan CSS framework berperan berbeda: struktur, rupa, dan komponen siap pakai; Bootstrap 5 baru dibahas setelah dasar-dasarnya kuat (Bab 9).
8. Perangkat kerja utama: VS Code (dengan Live Server opsional) dan Chrome + DevTools; keduanya cukup untuk seluruh latihan buku ini.
9. Proyek buku bergerak di dua folder bertahap: `tokosaya-css/` (Bab 1–8) dan `tokosaya-bootstrap/` (Bab 9–16), dengan Tokosaya sebagai klien yang konsisten.

Sampai di sini Anda telah memiliki dua aset penting: **peta** dan **tulisan pertama**. Peta telah menunjukkan bahwa seluruh semester bergerak ke arah satu proyek nyata — Tokosaya, dari halaman paling sederhana di contoh sebelumnya sampai website responsif yang diuji pada Bab 8 dan Bab 16. Tulisan pertama telah membuktikan bahwa Anda mampu mengubah teks menjadi struktur yang dibaca peramban. Namun tulisan itu masih "berongga": struktur dan kontennya benar, tetapi elemen-elemen yang dipilih belum menyatakan maknanya — navigasi masih berupa paragraf biasa, subjudul belum berdiri sebagai bagian konten. Mengapa hal itu penting, dan bagaimana menyatakannya, adalah materi **Bab 2: HTML5 dan Struktur Semantik**, di mana Anda akan mengganti paragraf-paragraf tersebut dengan elemen yang *bermakna* — dan halaman Tokosaya Anda akan tumbuh kerangkanya yang sebenarnya.

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