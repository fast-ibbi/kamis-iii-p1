# BAB 13 — Website Responsif dan Aksesibilitas

## Deskripsi Singkat

Bab ini menutup dua aspek kualitas penting pada proyek **tokosaya-bootstrap/**: responsif yang rapi di semua ukuran layar dan aksesibilitas (*accessibility*) dasar yang bisa dicek jelas. Semua halaman proyek diaudit, dibenahi dengan strategi *breakpoint* yang konsisten, lalu diperiksa lagi memakai daftar periksa aksesibilitas yang nyata. Bab ini melanjutkan penguatan kualitas dari Bab 12 (*design system*) dan menyiapkan Anda untuk Bab 14, saat desain dari Figma mulai diterjemahkan menjadi kode yang tetap harus responsif dan aksesibel.

## Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa mampu:

1. Menjelaskan perbedaan strategi *mobile-first* dan *desktop-first* beserta kompensasi yang menyertainya.
2. Memilih dan menetapkan 2–3 *breakpoint* yang konsisten untuk satu proyek, bukan angka ajaib yang asal dituliskan.
3. Mengimplementasikan gambar responsif (`srcset`/`picture`) dan tipografi cair (`clamp()`) pada halaman Tokosaya.
4. Menerapkan pola navigasi responsif berbasis CSS murni, termasuk pola *footer-nav*.
5. Mengidentifikasi pelanggaran WCAG POUR level A/AA: `alt`, urutan heading, teks tautan, kontras, dan *focus state*.
6. Membangun antarmuka ramah keyboard dengan urutan tab yang logis dan skip link berbasis CSS.
7. Mengaudit halaman memakai panel perangkat dan Lighthouse pada DevTools sebagai alat bawaan perambah.

## Capaian Pembelajaran

Bab 13 menggarap sub-capaian **S13.1**: *mengaudit responsif dan aksesibilitas situs (kontras, alt, focus, keyboard)*. Tabel berikut memetakan kemampuan bab ke kode CPMK yang telah ditetapkan pada perkuliahan.

| Sub-capaian bab | Kode CPMK |
|---|---|
| RWD lanjutan: strategi mobile-first, breakpoint konsisten, gambar dan tipografi cair | CPMK 5 |
| Menerapkan aksesibilitas dasar WCAG level A/AA pada halaman dan navigasi | CPMK 9 |
| Melakukan pengujian responsif dan aksesibilitas memakai alat perambah | CPMK 11 |

Keterpaduan ini penting bagi Anda sebagai mahasiswa Sistem Informasi: layanan informasi yang baik tidak cukup hanya terlihat rapi, tetapi juga harus bisa diakses oleh semua pengguna di berbagai perangkat.

## Kata Kunci

responsif (*responsive*, halaman beradaptasi pada berbagai lebar layar), *mobile-first* (gaya dasar untuk layar kecil lalu meluas), *desktop-first* (gaya dasar untuk layar besar lalu menyempit), *breakpoint* (lebar layar tempat tata letak berubah), `clamp()` (fungsi CSS untuk nilai bergengsi antara batas minimum dan maksimum), `srcset` (daftar berkas gambar dengan lebar berbeda), *skip link* (tautan yang melompati navigasi menuju konten utama), WCAG (pedoman aksesibilitas konten web), kontras (*contrast*, perbandingan terang antara teks dan latar), *focus state* (tampilan saat elemen difokuskan lewat keyboard).

## Apersepsi

Coba lihat kondisi Tokosaya setelah Bab 12. Proyek **tokosaya-bootstrap/** sudah punya halaman beranda, katalog, tentang, kontak, keranjang, sampai halaman *styleguide*. Di monitor laboratorium yang besar, semuanya tampak baik-baik saja. Tapi saat pemilik toko membuka `katalog.html` dari ponsel di tengah bazar, pengalamannya beda jauh: kartu produk jadi sempit, teks makin susah dibaca, menu makan banyak ruang, dan pengguna harus geser ke samping untuk melihat bagian yang terpotong. Masalah ini bukan hal aneh, melainkan akibat tata letak yang cuma dipikirkan untuk satu ukuran layar.

Di sisi lain, ada pelanggan yang sehari-hari memakai *screen reader*, perangkat lunak yang membacakan isi halaman. Ketika gambar keyboard tidak memiliki `alt`, ia hanya mendengar "gambar" — tidak tahu produk apa yang ditawarkan. Ketika semua tautan bernama "klik di sini", ia tidak tahu ke mana tautan itu pergi. Situasi semacam ini sangat umum pada layanan publik dan sistem informasi organisasi: situs tampak bagus bagi pembuatnya, tetapi menghambat sebagian pengguna.

Dalam konteks sistem informasi, rapi saja belum cukup. Portal layanan warga, sistem akademik kampus, dan toko UMKM seperti Tokosaya dipakai oleh orang yang kebutuhannya berbeda-beda: ada yang memakai ponsel murah, ada yang mengandalkan *screen reader*, ada juga staf administrasi yang bekerja lewat *tablet*. Di bab ini Anda dilatih membiasakan alur kerja yang benar: **audit dulu, perbaiki satu per satu, lalu cek ulang**. Jadi, audit bukan pekerjaan tambahan di akhir, tetapi bagian dari cara kerja supaya kualitas website bisa diukur, bukan cuma dirasa.

## Materi Pembelajaran

### 13.1 Mobile-First vs Desktop-First — Strategi dan Kompensasi

*Mobile-first* berarti Anda menulis gaya mulai dari layar kecil: style dasar disiapkan untuk ponsel, lalu tata letaknya diperluas dengan media query `min-width`. Sebaliknya, *desktop-first* dimulai dari layar besar lebih dulu, lalu tampilannya "dikecilkan" memakai media query `max-width`. Secara teknis keduanya sama-sama valid; bedanya ada pada cara berpikir, cara menyusun kode, dan risiko yang harus Anda antisipasi.

Ada tiga alasan kenapa *mobile-first* banyak disukai praktisi (misalnya Wroblewski, 2012). Pertama, saat Anda mulai dari layar kecil, Anda dipaksa menentukan prioritas: mana yang wajib muncul dulu, mana yang bisa menunggu saat layar lebih lebar. Kedua, gaya dasar yang sederhana lebih sedikit saling menimpa; media query `min-width` tinggal *menambah* aturan, jadi alurnya lebih mudah diikuti. Ketiga, karena ponsel dan jaringan seluler biasanya lebih terbatas, desain otomatis dimulai dari kondisi yang paling menantang. Di Tokosaya, contohnya, gaya dasar bisa berupa satu kolom kartu produk, lalu `min-width` memperluasnya menjadi dua, tiga, dan empat kolom.

*Desktop-first* juga tetap berguna. Banyak sistem informasi organisasi memang lebih sering dibuka di komputer kerja: dashboard administrasi, sistem akademik untuk operator, atau *back office* dengan tabel lebar. Kalau mulai dari desktop, kepadatan informasi bisa dirancang penuh sejak awal. Tapi strategi ini punya tiga risiko yang perlu Anda jaga. Pertama, gaya untuk layar besar sering berakhir jadi tambalan media query yang saling menimpa; solusinya adalah disiplin menulis dan selalu menguji ulang setiap tambahan. Kedua, konten yang nyaman di desktop sering cuma dipersempit di ponsel, bukan ditata ulang; solusinya, uji dari 320 px ke atas sejak iterasi pertama. Ketiga, fitur berat seperti galeri besar atau tabel lebar cenderung muncul dulu lalu susah disederhanakan; solusinya, sembunyikan atau tunda elemen tambahan dengan utilitas seperti `d-none d-md-block`.

Di buku ini, Anda tetap memakai pendekatan *mobile-first* supaya konsisten: base CSS Tokosaya dimulai dari satu kolom, lalu setiap media query ditulis `@media (min-width: 768px)` dan seterusnya. Nanti saat Anda bertemu proyek lama yang masih bergaya *desktop-first* di dunia kerja, Anda diharapkan bisa menyebut strateginya, mengenali polanya, dan tahu cara "membalik" urutannya tanpa merusak tampilan. Kemampuan membaca dua strategi ini akan terus kepakai saat Anda membuka dokumentasi resmi maupun kode rekan kerja, karena keduanya sama-sama umum di industri.

Tabel berikut merangkum perbedaannya dalam konteks proyek Tokosaya.

| Aspek | Mobile-first | Desktop-first |
|---|---|---|
| Gaya dasar | Layar kecil (satu kolom) | Layar besar (multi kolom) |
| Arah media query | `min-width`, menaik | `max-width`, menurun |
| Prioritas konten | Wajib sejak awal | Sering muncul belakangan |
| Cocok untuk | Situs pelanggan umum, Tokosaya | Dashboard staf, data padat |
| Risiko utama | Layar besar "kosong" | Ponselu jadi tumpangan |
| Kompensasi | Desain ruang untuk layar lebar | Uji 320–576 px sejak awal |

### 13.2 Breakpoint Strategy yang Konsisten

*Breakpoint* (diperkenalkan pada Bab 7) adalah titik lebar layar tempat tata letak berubah. Masalahnya bukan menciptakan *breakpoint*, melainkan menjaga jumlahnya sedikit dan konsisten. Kesalahan umum pemula adalah "angka ajaib" (*magical px*): menulis `min-width: 578px`, lalu `693px`, lalu `1024px`, sekadar karena tata letak terasa rusak pada lebar itu. Code seperti itu bekerja hari ini, tetapi sulit dirawat: angka-angkanya tidak menceritakan maksud, tidak tersinkron dengan Bootstrap, dan menular ke semua halaman.

Strategi yang dilatih di buku ini sederhana: **pilih 2–3 breakpoint, sejajarkan dengan Bootstrap, dan tuliskan sekali sebagai keputusan proyek**. Bootstrap 5.3 memakai enam *breakpoint* (sm 576 px, md 768 px, lg 992 px, xl 1200 px, xxl 1400 px) ⚠ *version-sensitive*: periksa dokumentasi resmi terbaru (getbootstrap.com). Tokosaya mengambil subset: **base** (di bawah 768 px), **md 768 px**, dan **lg 992 px**. Dengan begitu, kelas utilitas Bootstrap seperti `col-md-4` dan media query kustom `min-width: 768px` berbicara dalam bahasa yang sama. Satu strategi, dua pihak kode, tidak ada pertentangan.

Istilah "angka ajaib" juga berarti Anda tidak menyesuaikan *breakpoint* untuk perangkat tertentu, misalnya `min-width: 375px` hanya "karena ponsel Andi". Keputusan tata letak harus lahir dari **kebutuhan konten**, bukan dari daftar perangkat: kapan kartu produk memang butuh dua kolom? Kapan menu masih muat dalam satu baris? Jawaban itu dipilih sekali, ditulis sebagai komentar di `style.css`, lalu dipakai konsisten di semua halaman. Ilustrasi tangga *breakpoint* Tokosaya berikut ini (gambar ASCII, bukan berkas kode) membantu memvisualisasikannya.

```text
Lebar layar :  0 ────── 576 ────── 768 ────── 992 ────── 1200
Panggilan   : (base)      sm          md          lg          xl
Grid katalog: 1 kolom   2 kolom   3 kolom      4 kolom     4 kolom
Nav Tokosaya: menumpuk  menumpuk   1 baris     1 baris     1 baris
```

Strategi *breakpoint* yang konsisten memberi tiga keuntungan. Pertama, pengujian jadi lebih ringan: Anda cukup mengecek tiga lebar utama, bukan sepuluh. Kedua, kolaborasi jadi lebih enak karena rekan tim langsung melihat konvensi yang sama, mirip manfaat *design token* pada Bab 12. Ketiga, Bootstrap dan CSS kustom tidak saling bertabrakan; masalah klasik seperti "kartu tiba-tiba jadi satu kolom di tablet" hampir selalu muncul karena dua strategi dicampur. Kalau suatu saat Anda perlu menambah *breakpoint* baru, tulis alasannya di komentar dan pastikan memang ada perubahan tata letak yang nyata, bukan sekadar beda dua piksel.

### 13.3 Responsive Image & Typography Lanjutan

Gambar sering jadi elemen paling berat dan paling mudah bikin layout berantakan saat layar berubah. CSS memberi fondasi: `img { max-width: 100%; }` (atau utilitas `img-fluid` Bootstrap) supaya gambar tidak meluber keluar wadah. Tapi itu belum benar-benar "responsif": file yang sama tetap dimuat untuk semua layar. Karena itu, HTML menyediakan dua mekanisme lanjutan yang dibahas singkat di sini: atribut `srcset` dan elemen `<picture>`.

Atribut `srcset` dipakai untuk **menyediakan beberapa file gambar dengan lebar berbeda** (misalnya 480 px, 960 px, dan 1440 px) dari satu konten yang sama, lalu perambah memilih mana yang paling pas. Pasangannya, `sizes`, menjelaskan lebar area yang akan ditempati gambar pada kondisi layar berbeda. Bentuknya bisa seperti ini: `srcset="hero-480.svg 480w, hero-1200.svg 1200w"` dengan `sizes="(min-width: 992px) 50vw, 92vw"`. Sementara itu, elemen `<picture>` punya tugas berbeda: dipakai untuk **mengganti komposisi gambar** (misalnya gambar lebar di desktop, versi potret di ponsel) lewat elemen `source` yang memakai atribut `media`. Di dalam `<picture>`, perambah memilih *source* pertama yang kondisi media-nya cocok. Jadi, kalau Anda memakai `min-width`, tulis urutannya dari kondisi terlebar ke yang lebih sempit, lalu `img` sebagai pilihan terakhir. Detail lengkapnya bisa Anda lihat lagi di MDN; yang penting diingat, `alt` tetap wajib dan tetap harus memakai bahasa pengguna.

Tipografi juga perlu ikut menyesuaikan diri. Kalau ukuran judul dipatok dalam piksel tetap, hasilnya sering terlalu kecil di ponsel dan baru terasa pas di desktop. Fungsi `clamp(nilai-minimum, nilai-ideal, nilai-maksimum)` menyelesaikan masalah ini dalam satu baris: `font-size: clamp(1.75rem, 4vw + 1rem, 2.75rem)` artinya ukuran judul tidak akan lebih kecil dari 1,75rem, tumbuh mengikuti lebar layar lewat `4vw`, lalu berhenti di 2,75rem. Nilai tengahnya boleh berupa kombinasi satuan; pola yang umum adalah menambahkan `vw` (satuan dari lebar *viewport*) ke ukuran dasar yang statis. Jadi, skala tipografi dari Bab 4 tetap dipakai, hanya sekarang mengalir mengikuti layar.

Hal yang sering terlupa adalah **perlindungan terhadap luber (*overflow*)**. Layout biasanya rusak bukan karena media query-nya salah, tetapi karena ada satu elemen yang "bandel": nama produk panjang tanpa spasi, URL panjang di tabel, atau gambar berukuran tetap di dalam baris *flex*. Perlindungan praktisnya meliputi `img-fluid` pada gambar, `overflow-wrap: break-word` atau `overflow-wrap: anywhere` pada teks yang berpotensi panjang, `min-width: 0` pada anak langsung kontainer *flex* supaya bisa ikut menyempit, dan menghindari lebar piksel tetap pada elemen yang seharusnya mengalir. Empat kebiasaan kecil ini menjaga halaman Tokosaya tetap rapi dari 320 px sampai 1400 px; tanpa itu, satu kata panjang saja bisa memunculkan penggeser horizontal di seluruh halaman.

### 13.4 Responsive Navigation Patterns

Navigasi adalah komponen pertama yang "retak" saat layar menyempit, karena daftar tautan horizontal butuh lebar yang tumbuh bersama banyak item. Buku ini mengajarkan pola **CSS murni**, tanpa memandalkan skrip apa pun, dan mahasiswa diarahkan mengenali pola industri yang aslinya membutuhkan JavaScript (di luar cakupan mata kuliah; contohnya menu *collapse* resmi Bootstrap yang mengandalkan berkas skripnya sendiri — di proyek kita markup-nya diabaikan dan tampilan mobile diatur CSS kustom). Tiga pola berikut praktis dan tahan uji.

**Pola A — *flex-wrap***: daftar tautan dibiarkan melipat ke baris baru saat sempit (`flex-wrap: wrap` pada `ul` kaskade). Sederhana, tanpa media query; cocok bila jumlah tautan sedikit (3–5). Tokosaya punya empat tautan sehingga pola ini layak, namun saat melipat, tautan terakhir menempel kiri dan terlihat "berantakan" bila tanpa jarak seragam.

**Pola B — menumpuk di layar kecil**: menu vertikal di bawah 768 px, menu horizontal melekat di baris atas pada 768 px ke atas (kembali ke `min-width: 768px`). Pola ini yang dipakai praktikum: setiap tautan menjadi *target* sentuh penuh, hierarki tetap terbaca, dan tidak ada ikon hamburger yang butuh skrip untuk membukanya. Kelemahannya, header jadi tinggi di ponselu; imbangi dengan jarak dan ketebalan garis yang ringkas.

**Pola C — *footer-nav***: pada layar kecil, tautan navigasi utama dipindahkan (secara desain) ke dekat bagian bawah halaman, mengikuti kebiasaan jempol yang mudah menjangkau bagian bawah. Implementasi CSS murni bisa berupa mengembalikan daftar navigasi yang juga ditulis di `<footer>` sehingga tautan itu "selalu ada" di dasar, dengan header tetap menampilkan *brand* dan ikon keranjang. Kelebihannya, *reach* nyaman; kekurangannya, pengguna baru perlu menemukan pola itu terlebih dahulu.

Ada dua kaidah yang berlaku untuk semua pola. Pertama, ukuran *target* sentuh harus layak: tautan minimal tingginya sekitar 44 px termasuk padding, supaya tetap nyaman disentuh jari. Kedua, status halaman aktif sebaiknya dinyatakan dengan `aria-current="page"` pada tautan yang sedang dibuka; atribut ini murni HTML, tetapi sangat membantu *screen reader*. Di Bab 10 Anda mempelajari navigasi Bootstrap sebagai *markup*; di bab ini navigasi responsif Tokosaya sengaja dibangun dengan CSS kustom karena pola buka-tutup ala industri itu bagian dari skrip, sedangkan buku ini menjaga tampilan tetap tanpa JavaScript.

### 13.5 Aksesibilitas Dasar (WCAG)

Aksesibilitas (*accessibility*) berarti halaman Anda bisa dipakai oleh orang dengan kondisi dan kebutuhan yang beragam: pengguna *screen reader*, pengguna yang hanya mengandalkan keyboard, pengguna dengan penglihatan terbatas, pengguna di bawah sinar matahari, sampai pengguna dengan koneksi lambat. Jadi, aksesibilitas bukan fitur tambahan. Dalam layanan publik dan sistem informasi organisasi, aksesibilitas menyangkut hak pengguna sekaligus memperluas jangkauan layanan. Tokosaya yang ramah *screen reader* juga biasanya lebih mudah diindeks mesin pencari karena struktur maknanya lebih jelas.

Standar acuannya adalah WCAG (*Web Content Accessibility Guidelines*), saat ini versi 2.2, diterbitkan W3C. Inti prinsipnya dirangkum empat kata **POUR**: **Perceivable** (dapat dipersepsi — konten punya alternatif, misal `alt` bagi gambar dan teks bagi audio), **Operable** (dapat dioperasikan — navigasi dan formulir dapat difungsikan lewat keyboard), **Understandable** (dapat dipahami — bahasa jelas, prediksi perilaku konsisten, label input jelas), dan **Robust** (teguh — markup benar sehingga dibaca penuh oleh beragam *assistive technology*). WCAG mendefinisikan tiga tingkat kepatuhan: **A** (dasar), **AA** (standar yang lazim diwajibkan di banyak sektor), dan **AAA** (tertinggi). Buku ini melatih bagian level A dan AA yang paling sering masalahnya sederhana namun dampaknya besar, dan sisa bab ini membahasnya satu per satu.

Sikap paling penting di bab ini adalah: aksesibilitas **bukan soal skor saja**. Alat bantu memang mempercepat kerja, tetapi keputusan seperti "alt ini perlu menjelaskan produk atau boleh kosong karena dekoratif" tetap harus diputuskan oleh manusia yang paham konteks. Tabel berikut merangkum butir level A/AA yang dibahas di bab ini beserta cara memeriksanya, supaya Anda punya peta mental yang jelas sebelum masuk ke praktikum.

| Prinsip | Butir buku ini | Pemeriksa cepat |
|---|---|---|
| Perceivable | `alt` pada setiap gambar; `alt=""` untuk dekoratif | Scan HTML + Lighthouse |
| Perceivable | Kontras teks cukup | Pemeriksa kontras DevTools |
| Operable | Semua interaksi bisa dengan keyboard | Uji Tab di atas halaman |
| Operable | Ada jalan menuju konten utama | Cek skip link |
| Understandable | Heading berurutan; tautan bermakna | Scan urutan h1–h2–h3 |
| Understandable | `lang="id"` pada `<html>` | Cek atribut lang |
| Robust | Label `for`/`id` terhubung | Cek setiap pasangan |

### 13.6 Alt Text, Heading, dan Link yang Bermakna

Tiga elemen kecil ini sangat menentukan pengalaman pengguna *screen reader*, dan semuanya sepenuhnya bergantung pada cara Anda menulis HTML. Aturannya memang singkat, tetapi penilaiannya tetap perlu konteks.

**Alt text**: setiap `<img>` wajib menyertakan `alt`. Alt yang baik menggambarkan **kegunaan gambar dalam konteks halaman**, bukan berkasnya; "keyboard-mekanis.svg" bukan alt, "Keyboard Mekanis KX-210 dengan 87 tombol" ya. Gambar dekoratif — pembatas, ilustrasi murni hiasan — memakai `alt=""` (disebut juga alt kosong): *screen reader* akan melewatkannya seperti orang tanpa kelainan penglihatan melewati hiasan. Kesalahan umum: mengulang nama produk di alt **dan** di judul kartu sehingga pengguna "mendengar dua kali"; cukup satu tempat yang paling bermakna. Jangan menulis "gambar keyboard" di awal alt karena *screen reader* sudah mengumumkan "gambar".

**Heading**: satu `<h1>` per halaman, lalu turun bertingkat tanpa melompat (h1 ke h2, bukan h1 ke h4). Bagi pengguna *screen reader*, heading itu seperti peta daftar isi karena mereka sering menelusuri halaman dari heading ke heading. Ukuran tampilannya tidak menentukan level; judul kartu produk yang kecil tetap boleh `h2` lalu dikecilkan dengan kelas, karena level itu soal semantik, bukan gaya visual. Urutan heading yang benar juga membuat halaman lebih mudah dipindai oleh siapa pun, bukan hanya pengguna *screen reader*.

**Link**: teks tautan harus tetap masuk akal saat dibaca terpisah dari kalimatnya, karena pengguna *screen reader* sering menelusuri halaman lewat daftar tautan saja. Teks seperti "Klik di sini", "baca", atau "selengkapnya >>" tidak cukup jelas; jauh lebih baik kalau tujuannya disebut langsung, misalnya "Lihat katalog keyboard" atau "Unduh panduan pesanan". Cara cek sederhananya begini: kalau semua teks tautan di halaman Anda dikumpulkan jadi satu daftar, apakah orang masih bisa menebak tujuan masing-masing? Di Tokosaya, tautan ikon seperti keranjang wajib punya `aria-label` karena tidak menampilkan teks yang terlihat.

### 13.7 Kontras Warna dan Focus State

Kontras diukur sebagai rasio terang antara warna teks dan warna latarnya. WCAG level AA menetapkan **4,5:1 untuk teks normal** dan **3:1 untuk teks besar** (kurang lebih 24 px biasa atau 18,66 px tebal), serta **3:1 untuk elemen antarmuka non-teks** seperti batas input, garis pemisah, dan ikon yang bermakna. Angka ini memang penting diingat, tetapi Anda tidak perlu menghitungnya manual: pemeriksa kontras di *color picker* DevTools Chrome bisa menampilkan rasionya langsung, dan Lighthouse juga akan melaporkannya sebagai daftar kegagalan. Yang penting, Anda memverifikasi, bukan menebak.

Kesalahan yang paling sering muncul di proyek pemula adalah kombinasi yang terlihat "aman" padahal kontrasnya lemah: misalnya teks putih di atas kuning-amber seperti warna aksen Tokosaya, teks abu-abu sangat terang di atas latar putih demi kesan lembut, atau placeholder input yang terlalu pucat. Perbaikannya sebaiknya dilakukan di level **design token**, bukan lewat tambalan kecil di sana-sini: pakai `--clr-dark` atau `--clr-body` untuk teks, gunakan warna aksen sebagai latar badge dengan teks gelap di atasnya, lalu periksa dan dokumentasikan setiap kombinasi baru di halaman *styleguide* Bab 12. Dengan begitu, kepatuhan kontras jadi keputusan sistemik, bukan pekerjaan berulang di tiap halaman.

*Focus state* adalah tampilan elemen saat sedang difokuskan lewat keyboard, biasanya berupa cincin (*ring*) di sekelilingnya. Banyak pemula menghapusnya dengan `outline: none` hanya karena cincin bawaan terasa kurang cantik; akibatnya, pengguna keyboard jadi mudah tersesat karena tidak tahu fokus sedang ada di mana. Aturan di buku ini sederhana: **jangan hapus indikator fokus, tapi rancang ulang**. Peramban modern punya pseudo-class `:focus-visible` yang hanya menampilkan cincin saat input keyboard dipakai, jadi klik mouse tetap terasa rapi sementara jalur Tab tetap kelihatan. Contoh ring kustom dengan `outline: 3px solid var(--clr-primary-dark); outline-offset: 2px;` memberi kontras yang jelas dan tetap konsisten dengan brand Tokosaya.

### 13.8 Interface yang Ramah Keyboard

Antarmuka ramah keyboard berarti seluruh perjalanan penting halaman dapat dijalani hanya dengan Tab, Shift+Tab, Enter, dan tombol spasi — tanpa tetikus. Ujiannya sederhana: buka halaman, lalu tabulasi. Urutan fokus harus mengikuti urutan DOM yang logis (atas ke bawah, kiri ke kanan), bukan urutan penulisan yang menyimpang karena seseorang menambah `tabindex` positif seperti `tabindex="5"` pada elemen acak. Karena itu aturan pentingnya: **hindari `tabindex` positif**; gunakan hanya `-1` (programatik, misal `tabindex="-1"` pada `main` agar menerima fokus setelah tautan lewati) dan `0` dalam kasus sangat spesifik, dan berupalah biarkan urutan DOM yang membawa urutan tab.

Pusat dari pola ini adalah **skip link** (*tautan lewati*): tautan kecil "Lewati ke konten utama" yang diletakkan paling awal di dalam `<body>`. Saat diklik, atau saat fokus lalu Enter ditekan, perambah akan melompat ke elemen `#konten-utama`, jadi pengguna keyboard tidak perlu melewati seluruh header di setiap halaman. Ini sesuai dengan kriteria "bypass blocks" pada WCAG. Implementasinya cukup dengan CSS murni: posisi normalnya berada di luar layar (`position: absolute`), lalu muncul saat `:focus`. Kode lengkapnya dipakai di Contoh Kode dan Praktikum; yang penting, tautan lewati harus jadi elemen pertama yang menerima fokus supaya langsung terlihat di Tab pertama.

Bentuk-bentuk elemen juga ikut ramah. Form memakai `label for` yang terhubung `id` (Bab 11) sehingga klik label menyalakan input dan *screen reader* membaca namanya. Tombol asli (`<button>`, link `<a>` ber-`href`) otomatis dapat difokuskan; elemen `<span>` atau `<div>` yang "terlihat seperti tombol" justru mematikan keyboard, jadi jangan pernah memalsukannya. Jarak antar target Tab ikut dipastikan lewat ukuran tap yang layak. Kebiasaan penutup untuk mahasiswa: setiap kali menyelesaikan satu halaman, **tabulasi sepuluh langkah dan catat apa yang terjadi** — jika urutannya kacau atau ada fokus yang lenyap, catat di daftar temuan sebelum melanjutkan.

### 13.9 Pengujian Responsif & Aksesibilitas

Pengujian di bagian ini memakai **alat bawaan perambah**, khususnya Chrome dan DevTools, bukan kode yang ditulis mahasiswa. Tekankan hal ini: **Lighthouse adalah fitur browser** — satu tab di DevTools — yang menilai halaman dan menampilkan skor; mahasiswa yang memakainya hanya membuka tab, menekan tombol "Analyses page load", membaca daftar temuan, lalu memverifikasi satu per satu. Tidak ada satu baris pun skrip yang perlu dipahami di mata kuliah ini; yang dituntut adalah kemampuan **membaca laporan alat** dan menerjemahkannya menjadi perbaikan CSS/HTML.

Dua alat DevTools paling terpakai. Pertama, **panel perangkat (*device toolbar*, Ctrl+Shift+M)**: pilih lebar preset atau atur sendiri 320–1400 px, periksa apakah ada penggeser horizontal, apakah teks tetap terbaca, dan apakah setiap tata letak berubah tepat pada breakpoint yang ditetapkan. Kedua, **tab Lighthouse**: jalankan kategori *Accessibility* (dan *Performance* bila ingin), lalu bacakan item yang gagal; Lighthouse mengelompokkan temuan berdasar prinsip WCAG dan menyediakan rujukan dokumen. Ingat, skor tinggi bukan sertifikat; beberapa isu seperti "urutan heading aneh pada konteks bisnis" tetap butuh penilaian manusia, sementara isu yang dianggap lolos otomatis tetap perlu dicek secara manual pada halaman nyata.

Pola kerja yang dilatih: (1) uji responsif manual per breakpoint, (2) jalankan Lighthouse Accessibility, (3) catat temuan di tabel daftar periksa, (4) perbaiki di CSS/HTML, lalu (5) jalankan ulang kategori yang sama dan bandingkan. Pola ini menjadikan perbaikan **terukur** — "sebelum" dan "sesudah" terdokumentasi, bukan klaim lisan. Pada iterasi selanjutnya, perbaiki hanya satu kategori per putaran agar sebab akibat tetap jelas; mahasiswa yang merapikan semuanya sekaligus tak akan tahu perubahan mana yang menurunkan atau menaikkan skor.

## Konsep Penting

| # | Konsep | Inti pentingnya |
|---|---|---|
| 1 | Mobile-first | Gaya dasar untuk layar kecil; media query `min-width` menaik. |
| 2 | Desktop-first | Gaya dasar layar besar; media query `max-width` menurun. |
| 3 | Kompensasi strategi | Mobile-first perlu desain ruang layar lebar; desktop-first perlu uji layar kecil lebih awal. |
| 4 | Breakpoint strategy | Tetapkan 2–3 breakpoint, sejajarkan Bootstrap (768/992), hindari angka ajaib. |
| 5 | `srcset` + `sizes` | Menyediakan variasi lebar berkas untuk satu gambar yang sama. |
| 6 | `<picture>` | Mengganti komposisi gambar per kondisi media; pilih `source` pertama yang cocok. |
| 7 | `clamp()` | Ukuran bergengsi antara minimum dan maksimum: `clamp(min, ideal, max)`. |
| 8 | Perlindungan luber | `img-fluid`, `overflow-wrap`, `min-width: 0`, hindari lebar tetap. |
| 9 | Pola navigasi responsif | Menumpuk di mobile, melipat (*flex-wrap*), atau *footer-nav*. |
| 10 | POUR | Perceivable, Operable, Understandable, Robust — kerangka WCAG. |
| 11 | Kontras AA | ≥ 4,5:1 teks normal; ≥ 3:1 teks besar dan elemen non-teks. |
| 12 | `:focus-visible` | Cincin fokus hanya saat keyboard, tanpa menghapus kemampuan melihat fokus. |
| 13 | Skip link | Melompati navigasi menuju `#konten-utama`; CSS murni. |
| 14 | Auditing | DevTools panel perangkat + Lighthouse: alat perambah, bukan kode mahasiswa. |

## Contoh Kode

Contoh berikut dipisah dari proyek utama sebagai **satu berkas demo mandiri** supaya bisa dibuka langsung tanpa memengaruhi halaman Tokosaya. Tiga demo memakai CSS internal karena memang khusus demonstrasi (diberi tanda `<!-- khusus demonstrasi -->`); dalam proyek sebenarnya gaya tetap ditempatkan di `css/style.css` sesuai konvensi.

### Contoh 1 — Tipografi cair dengan clamp()

File: tokosaya-bootstrap/demo-typografi-responsif.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Demo Tipografi Responsif</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap">
  <!-- khusus demonstrasi: CSS internal satu berkas -->
  <style>
    body { margin: 0; font-family: 'Inter', sans-serif; color: #334155; }
    .wadhah { padding: 16px; max-width: 100%; overflow-wrap: break-word; }
    /* ukuran judul mengalir antara 1,75rem dan 2,75rem */
    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: clamp(1.75rem, 4vw + 1rem, 2.75rem);
      line-height: 1.2;
    }
    p { font-size: clamp(1rem, 0.95rem + 0.2vw, 1.125rem); line-height: 1.6; }
  </style>
</head>
<body>
  <div class="wadhah">
    <h1>Peralatan Kerja Digital untuk Semua</h1>
    <p>Kecilkan dan besarkan jendela perambah: judul dan teks ikut
       melar, namun tidak pernah melampaui batas kenyamanan.</p>
  </div>
</body>
</html>
```

Penjelasan: demo ini menunjukkan `clamp()` melakukan pekerjaan yang biasanya dikerjakan banyak media query. Perhatikan `line-height` tetap wajar pada ukuran judul terbesar dan `overflow-wrap` menjaga kata panjang tidak meluber.

### Contoh 2 — Gambar responsif dengan picture dan srcset

File: tokosaya-bootstrap/demo-gambar-responsif.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Demo Gambar Responsif</title>
</head>
<body>
  <!-- khusus demonstrasi: aset svg di folder img/ -->
  <picture>
    <!-- perambah memilih source pertama yang media-nya cocok -->
    <source media="(min-width: 992px)" srcset="img/hero-1200.svg">
    <source media="(min-width: 576px)" srcset="img/hero-768.svg">
    <img src="img/hero-480.svg"
         alt="Susunan keyboard, mouse, dan monitor Tokosaya"
         width="1200" height="675"
         class="hero-img">
  </picture>
</body>
</html>
```

Penjelasan: elemen `<picture>` mengganti **komposisi** gambar antar lebar layar, sedangkan `srcset` (yang juga bisa dipakai langsung pada `img`) memadatkan variasi resolusi berkas sama. Atribut `width`/`height` mengunci rasio aspek supaya tata letak tidak "melompat" saat gambar selesai dimuat — kontribusi penting terhadap kestabilan halaman.

### Contoh 3 — Skip link CSS murni dan focus state

File: tokosaya-bootstrap/demo-skiplink.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Demo Skip Link</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap">
  <!-- khusus demonstrasi: CSS internal satu berkas -->
  <style>
    body { margin: 0; font-family: 'Inter', sans-serif; color: #334155; }
    .skip-link {
      position: absolute;
      top: -48px;
      left: 16px;
      z-index: 1080;
      background: #4338CA;
      color: #fff;
      padding: 8px 16px;
      border-radius: 0 0 8px 8px;
      text-decoration: none;
      transition: top 0.15s ease-in-out;
    }
    .skip-link:focus { top: 0; }
    a:focus-visible,
    button:focus-visible {
      outline: 3px solid #4338CA;
      outline-offset: 2px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <!-- Jembatan lewati: elemen pertama agar tercapai lewat Tab -->
  <a class="skip-link" href="#konten-utama">Lewati ke konten utama</a>
  <header style="padding: 12px 16px;"> <!-- khusus demonstrasi -->
    Navigasi sementara (header nyata ada di halaman Tokosaya)
  </header>
  <main id="konten-utama" tabindex="-1">
    <h1>Konten utama halaman</h1>
    <p>Tekan Tab: tautan lewati muncul, tekan Enter, halaman melompat ke sini.</p>
  </main>
</body>
</html>
```

Penjelasan: tautan lewati biasanya "tersembunyi" di atas layar (`top: -48px`) lalu turun saat menerima fokus; `tabindex="-1"` pada `main` memastikan elemen konten dapat menjadi target fokus setelah lompatan, tanpa skrip apapun. Aturan `:focus-visible` memberi cincin fokus seragam sesuai warna brand hanya saat keyboard dipakai.

## Penjelasan Kode

**Contoh 1 (tipografi cair).** Fungsi `clamp()` menerima tiga nilai: minimum, ideal, maksimum. Nilai ideal `4vw + 1rem` berarti ukuran dasar 1rem "disewakan" sedikit pada lebar layar melalui `4vw`, sehingga judul tumbuh perlahan saat perambah melebar dan berhenti di 2,75rem. Alasan pendekatan ini lebih baik daripada tiga media query per ukuran judul adalah kelanggaran titik lompat: tidak ada loncatan mendadak antara 767px dan 768px, melainkan pertumbuhan berkelanjutan. `line-height: 1.2` pada judul perlu mengecil ketika teks besar, dan karena sifat clamp tetap menjaga keterbacaan di layar sempit, demo ini sekaligus menjadi templat yang dapat disalin ke `tokosaya-bootstrap/css/style.css`.

**Contoh 2 (gambar responsif).** Urutan penulisan `source` terpenting: perambah membaca dari atas dan mengambil yang pertama cocok, sehingga dengan `min-width` kita menulis dari kondisi terlebar (992 px) ke sempit (576 px) sebelum `img` pilihan dasar. Jika urutannya terbalik, source 576 px akan selalu cocok untuk layar besar juga padahal ia dimaksudkan untuk layar kecil. Alternatifnya adalah `srcset`+"sizes" pada `img` biasa ketika semua variasi berbagi komposisi sama; pilihan `<picture>` dipakai ketika rasio atau komposisi **berubah**, misalkan potongan hero yang dibingkai berbeda di ponselu. `width`/`height` memastikan perambah mencadangkan ruang dari awal, mencegah pergeseran tata letak yang mengganggu pembacaan.

**Contoh 3 (skip link).** Teknik CSS murni memindahkan tautan lewati dari atas layar (`top: -48px`) ke posisi terlihat saat menerima fokus (`.skip-link:focus { top: 0; }`). Karena tautan ini elemen pertama dalam `body`, ia adalah fokus pertama yang dicapai Tab — pola yang disarankan standar. Aturan `a:focus-visible, button:focus-visible` menambahkan *outline* tebal dengan offset; outline yang digambar **di luar** elemen menjaga tombol tidak "dilindas" oleh ring dan memberi tanda jelas pada semua warna latar. Perhatikan pemakaian `outline` **bukan** `outline: none`: menghapus tanpa pengganti adalah salah satuk kesalahan aksesibilitas paling sering di dunia nyata.

## Praktikum

Audit ini bukan latihan teoretis: seluruh proyek **tokosaya-bootstrap/** Anda benar-benar dibenahi. Hasil praktikum menjadi milestone M5 (responsif + audit aksesibilitas) yang dipakai pada Final Project.

### Tujuan Praktikum

Mengaudit kelima halaman proyek tokosaya-bootstrap dan merapikannya menjadi responsif penuh dengan strategi *breakpoint* konsisten (base/m 768/lg 992), disertai perbaikan aksesibilitas nyata: `alt` yang bermakna, urutan heading benar, kontras memenuhi AA, *focus state* yang tampak, *skip link* CSS murni, dan form ramah keyboard — semuanya terdokumentasi pada daftar periksa yang dicoret secara jujur.

### Kebutuhan

1. Proyek tokosaya-bootstrap/ hasil Bab 9–12 (minimun: `index.html`, `katalog.html`, `tentang.html`, `kontak.html`, `checkout.html`, `css/style.css`).
2. Google Chrome beserta DevTools (F12); panel perangkat dan Lighthouse adalah fitur browser, bukan kode tambahan.
3. Visual Studio Code untuk refactor (ekstensi Live Server opsional; file pun boleh dibuka langsung).
4. Asset gambar dari bab-bab sebelumnya pada folder `img/`.
5. Kertas tabel daftar periksa di bagian akhir ("Hasil yang Diharapkan") — boleh dicetak atau dicermat di lembar catatan.

### Persiapan

1. Buka folder `tokosaya-bootstrap/` di VS Code dan layari keempat halaman utama di Chrome.
2. Tekan Ctrl+Shift+M untuk mengaktifkan panel perangkat; atur lebar secara berurutan 360 px, 768 px, dan 1200 px.
3. Sebaiknya beri anotasi pada tabel temuan di bawah ini — satu baris per halaman; kolom "Temuan" diisi singkat, kolom "Status" diisi sebelum dan sesudah perbaikan.

| Halaman | Temuan responsif | Temuan aksesibilitas | Status sebelum | Status sesudah |
|---|---|---|---|---|
| index.html | | | | |
| katalog.html | | | | |
| tentang.html | | | | |
| kontak.html | | | | |
| checkout.html | | | | |

4. Simpan salinan `style.css` lama sebagai `style-before13.css` hanya untuk perbandingan (jangan ditautkan ke halaman).

### Langkah Kerja

1. **Audit visual per breakpoint**: pada tiap halaman geser lebar 360 → 576 → 768 → 992 → 1200 px; catat elemen yang luber, teks yang terkecil-kecilan, dan menu yang menyempit.
2. **Audit struktur**: buka `View page source` (Ctrl+U) dan periksa: apakah semua `<img>` memiliki `alt`? Apakah setiap halaman punya tepat satu `<h1>` dan turunannya tidak melompat level?
3. **Audit keyboard**: tekan Tab dari awal halaman; catat apakah cincin fokus selalu terlihat, urutannya masuk akal, dan apakah tautan lewati ada (biasanya belum ada — itu bagian refactor).
4. **Audit kontras**: buka DevTools, klik elemen teks, dan pada panel *Styles* arahkan ke kotak warna; *color picker* menampilkan rasio kontras berbanding latar di belakangnya. Catat kombinasi di bawah 4,5:1.
5. **Jalankan Lighthouse**: tab *Lighthouse* pada DevTools, kategori *Accessibility*, tombol *Analyze page load*; catat skor dan daftar temuan (fitur browser, bukan kode yang ditulis).
6. **Tambahkan skip link** di semua halaman: salin elemen `<a class="skip-link">` paling awal dalam `<body>` dan `<main id="konten-utama" tabindex="-1">` sebagai elemen utama konten.
7. **Perbaiki urutan heading** yang melompat (ubah level agar `h1 → h2 → h3`; sesuaikan kelas visualnya lewat utilitas Bootstrap seperti `h6` pada `h2` agar tampilan tetap sama).
8. **Perbaiki alt**: alt dekriptif produk baku 1–2 kalimat (lihat tab produk dataset Tokosaya), dan `alt=""` untuk pembatas murni dekoratif.
9. **Terapkan tipografi cair**: ganti ukuran `h1`/`.hero-title` dengan `clamp()`; cek pada 320 px dan 1400 px agar tidak ekstrem.
10. **Tetapkan strategi breakpoint**: putuskan dua breakpoint kustom (768/992) yang selaras dengan Bootstrap; tulis sebagai komentar di atas media query pada `style.css`, lalu rapikan media query yang melenceng.
11. **Refactor navigasi responsif**: pilih pola (menumpuk di mobile atau *footer-nav*) dan terapkan media query `min-width: 768px`; pastikan *target* tap tiap tautan setidaknya sekitar 44 px.
12. **Rapikan tampilan fokus dan kontras**: tambahkan aturan `:focus-visible` di `style.css`; ganti teks putih di atas warna aksen terang dengan teks gelap; verifikasi kombinasi baru di *color picker* DevTools.
13. **Ramahkan keyboard pada form** kontak/kerja: pastikan pasangan `label for`/`id` di semua input (termasuk `textarea` dan `select`), urutan elemen logis, dan tombol kirim memakai `<button>` asli.
14. **Uji ulang**: ulangi langkah 1–5; coret tabel periksa; bandingkan catatan "sebelum" dan "sesudah".

### Kode

Berikut adalah kondisi akhir berkas utama setelah refactor. CSS ditulis penuh (termasuk design token Bab 4 yang dipertahankan) agar mahasiswa bisa mengetik ulang dari atas ke bawah.

File: tokosaya-bootstrap/css/style.css

```css
/* ============================================================
   Tokosaya — css/style.css (versi Bab 13)
   Strategi breakpoint: base (< 768px), md 768px, lg 992px
   (selaras dengan Bootstrap 5.3)
   ============================================================ */

/* ===== Design token (Bab 4, konsisten seluruh bab) ===== */
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
  --space-unit: 8px;
}

/* ===== Dasar halaman (mobile-first) ===== */
body {
  background: var(--clr-bg);
  color: var(--clr-body);
  font-family: var(--font-body);
}

h1, h2, h3, .hero-title {
  font-family: var(--font-heading);
  color: var(--clr-dark);
  overflow-wrap: break-word; /* kustom: proteksi luber judul */
}

/* tipografi cair — clamp() */
h1, .hero-title {
  font-size: clamp(1.75rem, 4vw + 1rem, 2.75rem);
}
h2 { font-size: clamp(1.375rem, 2vw + 1rem, 1.75rem); }

/* ===== Navigasi atas (CSS kustom, tanpa skrip) ===== */
.site-header { background: var(--clr-surface); }
.brand-link {
  color: var(--clr-dark);
  font-family: var(--font-heading);
  text-decoration: none;
}
.site-nav a {
  /* kustom: target sentuh cukup besar */
  display: inline-block;
  padding: 10px 4px;
  color: var(--clr-body);
  text-decoration: none;
  font-weight: 500;
}
.site-nav a:hover { color: var(--clr-primary); }
.site-nav a[aria-current="page"] {
  color: var(--clr-primary);
  font-weight: 600;
  border-bottom: 2px solid var(--clr-accent);
}
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

/* ===== Skip link (CSS murni) ===== */
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

/* ===== Focus state terlihat (semua elemen interaktif) ===== */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 3px solid var(--clr-primary-dark);
  outline-offset: 2px;
  border-radius: 4px;
}

/* ===== Hero ===== */
.hero-section { padding: 3rem 0; }
.hero-title { overflow-wrap: break-word; }
.hero-lead { max-width: 46ch; }

/* ===== Tombol utama memakai token (di luar utilitas Bootstrap) ===== */
/* kustom */
.tombol-utama {
  background: var(--clr-primary);
  color: #fff;
}
.tombol-utama:hover { background: var(--clr-primary-dark); color: #fff; }

/* ===== Produk kustom ===== */
.produk-card {
  border-radius: var(--radius);
  overflow: hidden;
}
.produk-card-title {
  color: var(--clr-dark);
  overflow-wrap: break-word;
}
.produk-card-price {
  color: var(--clr-dark);
  font-weight: 600;
}
/* kustom — teks kecil "muted" tetap diperiksa kontrasnya */
.teks-lembut { color: var(--clr-body); }

/* ===== Footer ===== */
.site-footer {
  margin-top: 3rem;
  padding: 2rem 0;
  background: var(--clr-dark);
  color: #E2E8F0;
}
.site-footer a { color: #E2E8F0; text-decoration: none; padding: 6px 0; display: inline-block; }
.site-footer a:hover { color: #fff; text-decoration: underline; }
```

Penjelasan: berkas CSS ini adalah inti refactor. Bagian `:root` mempertahankan token baku (Bab 4) agar warna dan aksen tetap satu sumber kebenaran. Bagian navigasi memakai pola B: menumpuk di bawah 768 px lalu horizontal padak `min-width: 768px`, dan `padding` 10px memastikan tinggi target sentuh mencapai kisaran 44 px dengan jarak utilitas. Bagian skip link dan fokus memakai teknik dari Contoh 3, kini memakai token agar konsisten dengan brand. Tipografi cair `clamp()` menggantikan ukuran statis judul. Perhatikan `/* kustom */` dipakai sesuai konvensi bab-bab sebelumnya untuk gaya di luar utilitas Bootstrap.

File: tokosaya-bootstrap/index.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tokosaya — Belanja Tepat, Kirim Cepat</title>
  <!-- Bootstrap 5.3.3 (hanya CSS: tanpa bundle JavaScript) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Jembatan lewati: elemen pertama, tercapai lewat Tab -->
  <a class="skip-link" href="#konten-utama">Lewati ke konten utama</a>

  <header class="site-header border-bottom py-3">
    <div class="container d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-4">
      <a href="index.html" class="brand-link fs-5 fw-bold">Tokosaya</a>
      <nav class="site-nav" aria-label="Navigasi utama">
        <ul class="navbar-nav list-unstyled d-flex gap-2 mb-0">
          <li><a href="index.html" aria-current="page">Beranda</a></li>
          <li><a href="katalog.html">Katalog</a></li>
          <li><a href="tentang.html">Tentang</a></li>
          <li><a href="kontak.html">Kontak</a></li>
        </ul>
      </nav>
      <a href="checkout.html" class="ms-md-auto text-dark" aria-label="Buka keranjang belanja">
        <i class="bi bi-cart3 fs-4" aria-hidden="true"></i>
      </a>
    </div>
  </header>

  <main id="konten-utama" tabindex="-1">
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center g-4">
          <div class="col-12 col-lg-6">
            <h1 class="hero-title">Peralatan Kerja Digital untuk Semua</h1>
            <p class="hero-lead">Keyboard, mouse, hingga monitor — pilih perangkat
              kerja Anda dengan harga UMKM yang jujur.</p>
            <a href="katalog.html" class="btn btn-lg tombol-utama">
              Lihat Katalog
            </a>
          </div>
          <div class="col-12 col-lg-6">
            <picture>
              <source media="(min-width: 992px)" srcset="img/hero-1200.svg">
              <source media="(min-width: 576px)" srcset="img/hero-768.svg">
              <img src="img/hero-480.svg"
                   class="img-fluid rounded"
                   alt="Susunan keyboard, mouse, dan monitor Tokosaya di meja kerja"
                   width="1200" height="800">
            </picture>
          </div>
        </div>
      </div>
    </section>

    <section class="py-4">
      <div class="container">
        <h2>Produk Unggulan</h2>
        <div class="row g-4 mt-1">
          <article class="col-12 col-sm-6 col-lg-6">
            <div class="card h-100 produk-card shadow-sm">
              <div class="card-body">
                <span class="badge text-bg-warning mb-2">Best Seller</span>
                <h3 class="h6 produk-card-title">Keyboard Mekanis KX-210</h3>
                <p class="teks-lembut small mb-2">Keyboard mekanis 87 tombol dengan
                  switch biru untuk kerja lama yang nyaman.</p>
                <p class="produk-card-price fs-5">Rp650.000</p>
              </div>
            </div>
          </article>
          <article class="col-12 col-sm-6 col-lg-6">
            <div class="card h-100 produk-card shadow-sm">
              <div class="card-body">
                <span class="badge text-bg-warning mb-2">Best Seller</span>
                <h3 class="h6 produk-card-title">Monitor IPS 24" MR-241</h3>
                <p class="teks-lembut small mb-2">Monitor IPS 24 inci full HD yang
                  jernih untuk kerja tabel &amp; laporan.</p>
                <p class="produk-card-price fs-5">Rp1.899.000</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-12 col-md-6">
          <h2 class="h6 text-white">Tokosaya</h2>
          <p class="small mb-2">Belanja Tepat, Kirim Cepat</p>
          <p class="small mb-0">Jl. Digital Raya No. 10, Jakarta</p>
          <p class="small mb-0">halo@tokosaya.id</p>
          <p class="small mb-0">(021) 555-0199</p>
        </div>
        <div class="col-12 col-md-6">
          <!-- pola footer-nav: tautan utama ikut tersedia di dasar halaman -->
          <nav aria-label="Navigasi footer">
            <ul class="list-unstyled d-flex flex-wrap gap-3">
              <li><a href="index.html">Beranda</a></li>
              <li><a href="katalog.html">Katalog</a></li>
              <li><a href="tentang.html">Tentang</a></li>
              <li><a href="kontak.html">Kontak</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
```

Penjelasan: halaman beranda kini menjadi templat halaman Tokosaya yang sehat. Elemen pertama `body` adalah skip link, `main` membawa `id="konten-utama"` dan `tabindex="-1"`, navigasi memakai pola B (fleksibel: menumpuk di ponsel, horizontal pada `min-width: 768px` lewat CSS di atas) dan tautan aktif memakai `aria-current="page"`. Ikon keranjang yang tidak punya teks diberi `aria-label` pada tautannya, dan ikon dekoratif diberi `aria-hidden="true"`. Hero memakai `<picture>` untuk komposisi gambar yang berubah antar breakpoint, dan tombol utama memakai token warna sehingga kontras teks putih di atas indigo dapat dijaga. Footer memuat pola *footer-nav* sehingga navigasi tetap dekat jempol di layar kecil.

File: tokosaya-bootstrap/katalog.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Katalog Produk — Tokosaya</title>
  <!-- Bootstrap 5.3.3 (hanya CSS: tanpa bundle JavaScript) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <a class="skip-link" href="#konten-utama">Lewati ke konten utama</a>

  <header class="site-header border-bottom py-3">
    <div class="container d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-4">
      <a href="index.html" class="brand-link fs-5 fw-bold">Tokosaya</a>
      <nav class="site-nav" aria-label="Navigasi utama">
        <ul class="navbar-nav list-unstyled d-flex gap-2 mb-0">
          <li><a href="index.html">Beranda</a></li>
          <li><a href="katalog.html" aria-current="page">Katalog</a></li>
          <li><a href="tentang.html">Tentang</a></li>
          <li><a href="kontak.html">Kontak</a></li>
        </ul>
      </nav>
      <a href="checkout.html" class="ms-md-auto text-dark" aria-label="Buka keranjang belanja">
        <i class="bi bi-cart3 fs-4" aria-hidden="true"></i>
      </a>
    </div>
  </header>

  <main id="konten-utama" tabindex="-1">
    <section class="py-4">
      <div class="container">
        <h1>Katalog Produk Tokosaya</h1>
        <p class="teks-lembut mb-4">Delapan produk andalan Tokosaya, diperbarui tiap pekan.</p>

        <div class="row g-3">
          <article class="col-6 col-md-4 col-lg-3">
            <div class="card h-100 produk-card shadow-sm">
              <img src="img/produk-keyboard-kx210.svg" class="card-img-top img-fluid"
                   alt="Keyboard Mekanis KX-210 dengan 87 tombol" width="640" height="480">
              <div class="card-body d-flex flex-column">
                <span class="badge text-bg-warning align-self-start mb-2">Best Seller</span>
                <h2 class="h6 produk-card-title">Keyboard Mekanis KX-210</h2>
                <p class="teks-lembut small mb-2">Aksesori Input</p>
                <p class="produk-card-price mt-auto">Rp650.000</p>
              </div>
            </div>
          </article>

          <article class="col-6 col-md-4 col-lg-3">
            <div class="card h-100 produk-card shadow-sm">
              <img src="img/produk-mouse-mw88.svg" class="card-img-top img-fluid"
                   alt="Mouse Wireless MW-88 dengan sensor presisi" width="640" height="480">
              <div class="card-body d-flex flex-column">
                <span class="badge text-bg-success align-self-start mb-2">Tersedia</span>
                <h2 class="h6 produk-card-title">Mouse Wireless MW-88</h2>
                <p class="teks-lembut small mb-2">Aksesori Input</p>
                <p class="produk-card-price mt-auto">Rp185.000</p>
              </div>
            </div>
          </article>

          <article class="col-6 col-md-4 col-lg-3">
            <div class="card h-100 produk-card shadow-sm">
              <img src="img/produk-headphone-hs15.svg" class="card-img-top img-fluid"
                   alt="Headphone Studio HS-15 over-ear" width="640" height="480">
              <div class="card-body d-flex flex-column">
                <span class="badge text-bg-success align-self-start mb-2">Tersedia</span>
                <h2 class="h6 produk-card-title">Headphone Studio HS-15</h2>
                <p class="teks-lembut small mb-2">Audio</p>
                <p class="produk-card-price mt-auto">Rp425.000</p>
              </div>
            </div>
          </article>

          <article class="col-6 col-md-4 col-lg-3">
            <div class="card h-100 produk-card shadow-sm">
              <img src="img/produk-monitor-mr241.svg" class="card-img-top img-fluid"
                   alt="Monitor IPS 24 inci MR-241 full HD" width="640" height="480">
              <div class="card-body d-flex flex-column">
                <span class="badge text-bg-warning align-self-start mb-2">Best Seller</span>
                <h2 class="h6 produk-card-title">Monitor IPS 24" MR-241</h2>
                <p class="teks-lembut small mb-2">Layar</p>
                <p class="produk-card-price mt-auto">Rp1.899.000</p>
              </div>
            </div>
          </article>

          <article class="col-6 col-md-4 col-lg-3">
            <div class="card h-100 produk-card shadow-sm">
              <img src="img/produk-flashdrive-fd64.svg" class="card-img-top img-fluid"
                   alt="Flash Drive 64GB FD-64" width="640" height="480">
              <div class="card-body d-flex flex-column">
                <span class="badge text-bg-success align-self-start mb-2">Tersedia</span>
                <h2 class="h6 produk-card-title">Flash Drive 64GB FD-64</h2>
                <p class="teks-lembut small mb-2">Penyimpanan</p>
                <p class="produk-card-price mt-auto">Rp95.000</p>
              </div>
            </div>
          </article>

          <article class="col-6 col-md-4 col-lg-3">
            <div class="card h-100 produk-card shadow-sm">
              <img src="img/produk-charger-cp30.svg" class="card-img-top img-fluid"
                   alt="Charger Cepat 30W CP-30" width="640" height="480">
              <div class="card-body d-flex flex-column">
                <span class="badge text-bg-success align-self-start mb-2">Tersedia</span>
                <h2 class="h6 produk-card-title">Charger Cepat 30W CP-30</h2>
                <p class="teks-lembut small mb-2">Daya</p>
                <p class="produk-card-price mt-auto">Rp120.000</p>
              </div>
            </div>
          </article>

          <article class="col-6 col-md-4 col-lg-3">
            <div class="card h-100 produk-card shadow-sm">
              <img src="img/produk-speaker-bt5.svg" class="card-img-top img-fluid"
                   alt="Speaker Bluetooth BT-5 portabel" width="640" height="480">
              <div class="card-body d-flex flex-column">
                <span class="badge text-bg-danger align-self-start mb-2">Stok Terbatas</span>
                <h2 class="h6 produk-card-title">Speaker Bluetooth BT-5</h2>
                <p class="teks-lembut small mb-2">Audio</p>
                <p class="produk-card-price mt-auto">Rp285.000</p>
              </div>
            </div>
          </article>

          <article class="col-6 col-md-4 col-lg-3">
            <div class="card h-100 produk-card shadow-sm">
              <img src="img/produk-webcam-wc720.svg" class="card-img-top img-fluid"
                   alt="Webcam HD WC-720 dengan mikrofon bawaan" width="640" height="480">
              <div class="card-body d-flex flex-column">
                <span class="badge text-bg-info align-self-start mb-2">Baru</span>
                <h2 class="h6 produk-card-title">Webcam HD WC-720</h2>
                <p class="teks-lembut small mb-2">Video</p>
                <p class="produk-card-price mt-auto">Rp310.000</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-12 col-md-6">
          <h2 class="h6 text-white">Tokosaya</h2>
          <p class="small mb-0">Jl. Digital Raya No. 10, Jakarta — halo@tokosaya.id — (021) 555-0199</p>
        </div>
        <div class="col-12 col-md-6">
          <nav aria-label="Navigasi footer">
            <ul class="list-unstyled d-flex flex-wrap gap-3">
              <li><a href="index.html">Beranda</a></li>
              <li><a href="katalog.html">Katalog</a></li>
              <li><a href="tentang.html">Tentang</a></li>
              <li><a href="kontak.html">Kontak</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
```

Penjelasan: grid katalog memakai strategi satu sumber: kelas utilitas Bootstrap `col-6 col-md-4 col-lg-3` menerjemahkan strategi breakpoint proyek (2 kolom di ponselu, 3 pada 768 px, 4 pada 992 px) tanpa menulis media query ganda di CSS kustom. Setiap produk memakai kelas dataset baku Tokosaya (nama, kategori, harga tanpa spasi, badge semantik yang memakai `text-bg-*` agar teksnya gelap dan kontras aman). Nama produk memakai `h2` semantik walau tampil kecil (`class="h6"`), menegaskan bahwa **ukuran visual bukan level semantik**. Gambar memakai `alt` deskriptif serta `width`/`height` untuk menjaga rasio tata letak.

File: tokosaya-bootstrap/kontak.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Kontak — Tokosaya</title>
  <!-- Bootstrap 5.3.3 (hanya CSS: tanpa bundle JavaScript) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <a class="skip-link" href="#konten-utama">Lewati ke konten utama</a>

  <header class="site-header border-bottom py-3">
    <div class="container d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-4">
      <a href="index.html" class="brand-link fs-5 fw-bold">Tokosaya</a>
      <nav class="site-nav" aria-label="Navigasi utama">
        <ul class="navbar-nav list-unstyled d-flex gap-2 mb-0">
          <li><a href="index.html">Beranda</a></li>
          <li><a href="katalog.html">Katalog</a></li>
          <li><a href="tentang.html">Tentang</a></li>
          <li><a href="kontak.html" aria-current="page">Kontak</a></li>
        </ul>
      </nav>
      <a href="checkout.html" class="ms-md-auto text-dark" aria-label="Buka keranjang belanja">
        <i class="bi bi-cart3 fs-4" aria-hidden="true"></i>
      </a>
    </div>
  </header>

  <main id="konten-utama" tabindex="-1">
    <section class="py-4">
      <div class="container">
        <h1>Hubungi Tokosaya</h1>
        <p class="teks-lembut mb-4">Isi form berikut; tim kami membalas pada hari kerja.</p>

        <!-- Form ramah keyboard: semua input punya label terhubung id -->
        <form action="#" method="post" class="col-12 col-md-8 col-lg-6">
          <div class="mb-3">
            <label for="nama" class="form-label">Nama lengkap</label>
            <input type="text" class="form-control" id="nama" name="nama"
                   autocomplete="name" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Alamat email</label>
            <input type="email" class="form-control" id="email" name="email"
                   autocomplete="email" required>
          </div>
          <div class="mb-3">
            <label for="pesan" class="form-label">Pesan</label>
            <textarea class="form-control" id="pesan" name="pesan" rows="4"></textarea>
          </div>
          <fieldset class="mb-3">
            <legend class="fs-6">Kebutuhan Anda</legend>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="topik" id="topik-beli" value="beli">
              <label class="form-check-label" for="topik-beli">Pertanyaan produk</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="topik" id="topik-servis" value="servis">
              <label class="form-check-label" for="topik-servis">Keluhan pesanan</label>
            </div>
          </fieldset>
          <button type="submit" class="btn tombol-utama">
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  </main>
</body>
</html>
```

Penjelasan: form kontak memenuhi pilar aksesibilitas yang diamati pada Bab 11 dan ditegaskan di bab ini. Setiap input memiliki `<label for>` yang terhubung eksak dengan `id`; *radio group* dibungkus `fieldset/legend` agar *screen reader* membacakan konteksnya; urutan `Tab` mengikuti urutan DOM sehingga wajar; `type="email"` menyaring keyboard ponselu ke tata letak surel; dan `autocomplete` membantu pengisiyan otomatis. Cincin fokus dari `css/style.css` memastikan lokasi fokus selalu terlihat saat navigasi keyboard.

### Penjelasan Kode

Refactor ini disusun sebagai **pola, bukan patch tempel**. Keputusan paling penting adalah menyamakan bahasa: kelas utilitas Bootstrap (`col-md-4`, `col-lg-3`) dan media query kustom (`min-width: 768px`, `min-width: 992px`) memakai breakpoint yang persis sama dengan Bootstrap 5.3, sehingga tidak ada strategi yang saling bertabrakan dan tata letak berubah hanya pada tiga titik yang didokumentasikan. Dengan itu, halaman katalog berhenti "menyusut" secara tidak teratur pada lebar di antara dua breakpoint.

Semua perubahan aksesibilitas murni HTML/CSS dan terdokumentasi: skip link CSS `top: -48px → top: 0` di setiap halaman; `main#konten-utama` sebagai sasaran lompat dengan `tabindex="-1"`; satu `h1` per halaman dengan turunan yang tidak melompat; `aria-current="page"` untuk halaman aktif dan `aria-label` bagi tautan ikon; pasangan `label/for` penuh pada form; serta badge semantik `text-bg-*` yang menjaga teks kontras. Tidak ada satu atribut yang meminta skrip: `aria-*` hanyalah keterangan semantik, dan perilaku bawaan perambah (lompat `href="#id"`, tab alami) yang dipakai seluruhnya.

Perhatikan pula dua kebiasaan kecil yang menyelamatkan proyek: (1) `img` selalu punya `width`/`height` sehingga ruangnya sudah tercadang sebelum berkas selesai dimuat — halaman tidak "melompat" saat menyala; dan (2) semua gaya brand datang dari token (`var(--clr-primary)`) sehingga saat warna berubah di masa depan, kombinasi kontras hanya perlu diperiksa sekali di satu tempat.

### Hasil yang Diharapkan

Setelah refactor, kondisi berikut **teramati** pada proyek Anda:

1. Semua halaman bebas penggeser horizontal pada lebar 320 px hingga 1400 px (uji per panel perangkat; area kosong boleh ada, geseran wajib tidak).
2. Katalog berubah 2 → 3 → 4 kolom tepat pada 768 px dan 992 px, bukan di lebar acak lain.
3. Menekan Tab dari awal halaman memunculkan skip link (di semua halaman); Enter atau klik membawa fokus ke konten utama.
4. Setiap gambar tersendiri dibaca dengan deskripsi; `alt` kosong hanya pada pembatas dekoratif.
5. Setiap halaman punya tepat satu `h1`; urutan heading tidak melompat.
6. Cincin fokus tampak di setiap tautan, tombol, dan input saat navigasi Tab; tidak ada elemen yang "menghilangkan" fokus.
7. Tidak ada teks putih di atas warna aksen terang; semua kombinasi bacaan menghasilkan rasio kontras setidaknya 4,5:1 (verifikasi pemeriksa di DevTools).
8. Skor Lighthouse kategori *Accessibility* naik dibanding sebelum audit (dibandingkan dan dicatat dalam tabel temuan).

**Checklist Audit — coret saat selesai** (salin ke lembar kerja; kolom halaman diisi titik-titik):

| No | Butir pemeriksaan | Halaman yang diperiksa | Selesai |
|---|---|---|---|
| 1 | Ada `<meta name="viewport">` di semua halaman | ......................... | ☐ |
| 2 | Skip link di awal `body` + `#konten-utama` | ......................... | ☐ |
| 3 | Semua `<img>` punya `alt` (atau `alt=""` bila dekoratif) | ......................... | ☐ |
| 4 | Satu `h1` per halaman, urutan h1→h2→h3 tanpa lompat | ......................... | ☐ |
| 5 | Tautan bermakna (tidak ada "klik di sini") | ......................... | ☐ |
| 6 | Ikon keranjang punya `aria-label`; ikon hias `aria-hidden` | ......................... | ☐ |
| 7 | Kontras teks ≥ 4,5:1 (cek *color picker* DevTools) | ......................... | ☐ |
| 8 | `:focus-visible` muncul pada Tab untuk semua interaktif | ......................... | ☐ |
| 9 | Urutan Tab logis; `tabindex` positif tidak dipakai | ......................... | ☐ |
| 10 | Form: semua input punya label `for`, tautan autocomplete | ......................... | ☐ |
| 11 | Navigasi: menumpuk di mobile, horizontal pada 768 px | ......................... | ☐ |
| 12 | Katalog 2 → 3 → 4 kolom pada breakpoint proyek | ......................... | ☐ |
| 13 | Teks panjang/luber: `overflow-wrap` bekerja | ......................... | ☐ |
| 14 | Lighthouse Accessibility: temuan disalurkan ke daftar | ......................... | ☐ |

### Troubleshooting

**Masalah:** Skip link tidak pernah muncul meski sudah ditulis di paling atas `body`.
**Penyebab:** Rule `.skip-link:focus` tertulis salah nama kelas (misal `skip-link` di HTML tetapi `.skiplink` di CSS), atau tautan tertutup elemen lain karena `z-index` lebih rendah dari header.
**Solusi:** Pastikan nama kelas identik di HTML dan CSS; tambahkan `position: relative` atau `z-index` tinggi pada `.skip-link`, lalu uji dengan Tab dari awal halaman (bukan klik).
**Pencegahan:** Selalu uji skip link dengan **keyboard**, bukan klik: klik tidak akan menyingkap masalah fokus.

**Masalah:** Media query kustom tidak berpengaruh, grid katalog tetap satu kolom di semua lebar.
**Penyebab:** Media query ditulis `max-width` sementara aturan dasar yang lebih spesifik menimpa; atau stylesheet kustom ditautkan **sebelum** Bootstrap sehingga dimenangkan urutan kaskade.
**Solusi:** Samakan strategi (mobile-first: aturan dasar untuk mobile, `@media (min-width: 768px)` untuk tablet ke atas) dan pastikan `<link rel="stylesheet" href="css/style.css">` berada **setelah** tautan Bootstrap.
**Pencegahan:** Tetapkan urutan tautan CSS (Bootstrap dulu, kustom kemudian) sebagai kesepakatan proyek di awal.

**Masalah:** Laporan Lighthouse menandai "Elements do not have sufficient color contrast" meski halaman terlihat jelas.
**Penyebab:** Kombinasi berisiko yang terasa oke secara mata: teks putih di atas badge kuning/amber, teks abu terang pada latar `bg-body-tertiary`, atau placeholder sangat terang.
**Solusi:** Periksa pasangan warna di *color picker* DevTools; ubah warna teks badge menjadi gelap (`text-bg-warning`), ganti warna teks lembut ke token `--clr-body`, lalu jalankan ulang Lighthouse.
**Pencegahan:** Tetapkan pasangan warna yang lolos di design system (Bab 12) dan selalu memakai token, bukan warna ad hoc.

**Masalah:** Saat halaman diperkecil ke 360 px, satu kata panjang (misal nama produk atau URL) meluber melewati layar.
**Penyebab:** Kata tanpa spasi berada di kontainer `flex` yang tidak boleh menyempit (`min-width` otomatis anak flex).
**Solusi:** Tambahkan `overflow-wrap: break-word` (atau `anywhere` untuk URL panjang) pada judul/teks bermasalah dan `min-width: 0` pada anak langsung kontainer `d-flex` yang bermasalah.
**Pencegahan:** Jadikan `overflow-wrap` pada judul bagian dari templat kartu Tokosaya sejak awal.

## Studi Kasus

Sebuah tim mahasiswa magang pada unit pengembangan SI pemerintah daerah diminta meninjau **Portal Layanan Warga Kota Arunika** (situs fiktif berbasis pola nyata layanan publik). Portal itu sudah terhubung sistem pemerintahan, namun laporan pengguna datang dari berbagai arah: warga tua mengeluh teks kecil, warga memakai *screen reader* tidak dapat membedakan antrean, dan pengguna ponsel menemukan tabel syarat dokumen yang menuntut penggeser horizontal panjang. Diagnosisnya menarik: tidak ada satu pun "fitur yang hilang", semua masalah ada di **kualitas implementasi** yang belum pernah diaudit.

Temuan yang terdokumentasi dari kategori umum adalah sebagai berikut. Pertama, **gambar papan pengumuman tanpa `alt`**: informasi penting hanya tersaji sebagai gambar, sehingga pembacaan layar melihat sekadar "gambar". Kedua, **urutan heading kacau**: beranda memakai empat `h1` dan langsung loncat ke `h4` pada bagian layanan. Ketiga, **kontras lemah** di area pemberitahuan: teks putih di atas kuning terang. Keempat, **form pendaftaran tanpa label terlihat** — nama kolom hanya ditulis sebagai teks pembanding di luar field, tidak terhubung `for`, sehingga *screen reader* dan pengguna ponselu kehilangan petunjuk saat fokus. Kelima, **tautan ikon tanpa nama** di bilah navigasi: tampilannya hanya simbol, yang dibaca sebagai "tautan, tautan, tautan". Keenam, **tabel syarat dokumen lebar tetap** yang memaksa penggeser horizontal pada ponselu.

Hasil dari audit tidak boleh berhenti pada daftar; ia harus menjadi urutan kerja. Tim menata prioritas seperti tangga berikut: (1) segera perbaiki `alt` pada papan pengumuman karena informasi inti ikut hilang; (2) perbaiki label form karena menyangkut data masukan warga; (3) rapikan kontras area peringatan; (4) rapikan urutan heading; (5) baru kemudian kerapian tata letak tabel. Urutan ini dipilih dari **dampak pengguna**: mana yang menghilangkan informasi atau menahan layanan dibanding mana yang menurunkan kenyamanan kosmetik. Inilah peran auditor sistem informasi: bukan menilai "situsnya bagus/tidak", melainkan memberi daftar temuan yang terukur, berkelanjutan, dan bisa dilaksanakan developer lain dengan prioritas jelas.

## Latihan Mandiri

1. Jelaskan dengan kalimat Anda sendiri perbedaan strategi *mobile-first* dan *desktop-first*, lalu tentukan strategi yang lebih cocok untuk sistem informasi *back office* yang utamanya dipakai operator desktop, dengan dua alasan.
2. Tuliskan media query untuk navigasi Tokosaya yang menyusun tautan menumpuk pada layar di bawah 768 px dan menjadi horizontal satu baris mulai 768 px, dan sertakan komentar `/* kustom */` yang menjelaskan breakpoint proyek.
3. Sebuah halaman memakai tiga breakpoint: `578px`, `693px`, `941px`. Jelaskan mengapa nilai-nilai itu tergolong "angka ajaib" dan berikan strategi perbaikan yang Anda usulkan.
4. Susun keputusan `alt` untuk lima gambar ini: (a) logo Tokosaya di header; (b) foto produk keyboard KX-210; (c) garis pemisah ornamen; (d) grafik laporan di halaman tentang; (e) ikon panah di samping teks "Selengkapnya di halaman katalog keyboard". Tulis nilai `alt` yang tepat beserta alasannya.
5. Potongan halaman memuat dua `h1` dan urutan `h1 → h4 → h2`. Sebutkan dua risiko yang ditimbulkan pada pengguna *screen reader*, lalu tuliskan urutan heading yang benar.
6. Uji halaman `index.html` proyek Anda dengan Tab sepuluh kali (tanpa mouse). Catat urutan fokus yang terjadi dan identifikasi satu cacat urutan atau fokus yang hilang, lengkap dengan usulan perbaikan CSS yang spesifik.

## Tugas

1. **Audit Silang Antarteman (individu + pasangan).** Tukar salinan proyek tokosaya-bootstrap dengan rekan sebangku, lalu lakukan audit aksesibilitas memakai daftar periksa (14 butir) pada bagian "Hasil yang Diharapkan". Keluaran yang dikumpulkan: (a) tabel daftar periksa teman Anda yang Anda coret; (b) daftar temuan beserta keparahan (tinggi/sedang/rendah); (c) satu halaman yang memperbaiki tiga temuan tertinggi. Kriteria singkat: temuan nyata dan terverifikasi (bukan tebakan), perbaikan disertai alasan, dan setiap kode mematuhi kontrak proyek (tanpa skrip).
2. **Mini-audit Layanan Publik (kelompok 3–4).** Pilih situs layanan publik nyata (kampus, kota, atau RS yang diizinkan dosen), luluskan setiap halaman melalui pemeriksaan manual (panel perangkat, Tab, `alt`, kontras) dan jalankan Lighthouse kategori Accessibility. Keluaran: laporan tiga halaman temuan umum dengan klasifikasi POUR, prioritas perbaikan, dan satu halaman mockup perbaikan (HTML/CSS, tanpa skrip). Kriteria singkat: akurasi verifikasi (setiap temuan punya bukti langkah atau tangkapan DevTools), konsistensi istilah WCAG, dan kelayakan usulan perbaikan.

## Refleksi

1. Kesulitan terbesar yang Anda temui saat mengaudit proyek sendiri adalah apa — mengenali masalah, atau memutuskan prioritas perbaikan? Mengapa?
2. Setelah mengetahui bahwa sebagian peramban pengguna layanan publik memakai *screen reader*, aspek mana dari proyek Tokosaya yang menurut Anda paling tidak siap jika dibuka oleh kelompok itu?
3. Apakah penggunaan Lighthouse membuat pemeriksaan manual menjadi tak perlu? Uraikan hal yang **tetap perlu dilakukan manual** meski skornya tinggi.
4. Kapan seseorang layak mempertahankan strategi *desktop-first* pada pekerjaan yang nyata? Contoh konteks SI apa yang mendukung keputusan itu?

## Rangkuman

1. *Mobile-first* menulis gaya dasar dari layar kecil dengan media query `min-width` menaik; *desktop-first* kebalikannya; keduanya sah asal kompensasinya disiplin.
2. Strategi breakpoint yang sehat memilih 2–3 lebar yang sejajar dengan Bootstrap 5.3 (proyek Tokosaya: 768/992) dan menolak angka ajaib.
3. Gambar responsif disusun dari `srcset`/`sizes` (variasi resolusi) dan `<picture>` (variasi komposisi), keduanya memakai `alt` wajib.
4. Tipografi cair `clamp(min, ideal, max)` memindahkan ukuran teks dari statis menjadi mengalir, dengan perlindungan luber `overflow-wrap` dan `min-width: 0`.
5. Navigasi responsif CSS murni tersedia berupa menumpuk, *flex-wrap*, dan *footer-nav*; komponen yang membutuhkan skrip hanya dikenali sebagai catatan industri.
6. WCAG dirangkum POUR (Perceivable, Operable, Understandable, Robust) dengan level A/AA sebagai target buku ini.
7. Alt, heading, dan teks tautan adalah tiga pilar aksesibilitas yang termurah namun paling sering gagal di dunia nyata.
8. Kontras AA adalah 4,5:1 (teks normal) dan 3:1 (teks besar, elemen non-teks); `:focus-visible` menggantikan tampilan fokus yang dihapus.
9. Antarmuka ramah keyboard memperketat urutan DOM logis, menolak `tabindex` positif, dan memakai skip link CSS murni menuju `#konten-utama`.
10. Pengujian memakai panel perangkat dan Lighthouse DevTools — dua-dua fitur browser (*tool*), bukan kode yang ditulis mahasiswa.

Sepanjang bab ini proyek Tokosaya telah melewati audit dan keluar dengan tata letak yang konsisten tiga breakpoint, aksesibilitas yang diperiksa, dan daftar periksa yang bisa dicoret. Namun satu kemampuan besar belum Anda latih: **menerima desain dari orang lain**. Bab 14 memasuki wilayahnya: memahami berkas desain di Figma — frame, auto layout, grid 12 kolom, teks dan gaya warna — lalu menerjemahkannya menjadi halaman HTML/CSS/Bootstrap yang setia, dan di situlah seluruh disiplin responsif dan aksesibilitas bab ini menjadi syarat kelulusan desain.

## Evaluasi

### Pilihan Ganda

1. Strategi *mobile-first* ditandai dengan gaya dasar yang ditulis untuk layar kecil dan media query yang ditambahkan dengan pola...
   A. `max-width` dari terkecil ke terbesar
   B. `min-width` menaik dari kondisi dasar
   C. seluruhnya `max-width` acak
   D. `min-height` menurun
2. Risiko utama strategi *desktop-first* yang wajib dikompensasi adalah...
   A. kode menjadi terlalu pendek
   B. konten padat muncul dulu dan ponselu hanya menjadi tambalan
   C. tidak perlu media query
   D. Bootstrap tidak berjalan
3. Fungsi `clamp(1rem, 0.95rem + 0.2vw, 1.125rem)` menjelaskan bahwa ukuran teks akan...
   A. tetap 1rem selamanya
   B. tumbuh mengikuti lebar layar namun tidak melebihi 1,125rem
   C. mengecil sampai 1rem lalu naik tak terbatas
   D. berganti font bila layar berganti ukuran
4. Atribut `srcset` pada `<img>` dipakai untuk...
   A. menawarkan beberapa berkas gambar berbeda lebar/resolusi dari konten sama
   B. mengganti warna gambar sesuai breakpoint
   C. menambahkan animasi transisi gambar
   D. menautkan gambar ke tabel data
5. Urutan penulisan elemen `source` di dalam `<picture>` yang memakai kondisi `min-width` yang tepat adalah...
   A. dari yang terkecil ke terbesar
   B. urutan bebas karena perambah memilih sembarangan
   C. dari kondisi terlebar ke sempit karena yang dicocokkan pertama dipilih
   D. semuanya ditulis pada atribut `alt`
6. WCAG menyusun kepatuhan ke dalam prinsip POUR. Yang **bukan** bagian POUR adalah...
   A. Perceivable
   B. Operable
   C. Underlined
   D. Robust
7. Batas kontras minimum WCAG level AA untuk teks normal (bukan besar) adalah...
   A. 2:1
   B. 3:1
   C. 4,5:1
   D. 10:1
8. Pada industri, komponen Bootstrap yang membuka-tutup menu dan memang memerlukan berkas skrip resminya adalah...
   A. card
   B. badge
   C. navbar dengan tombol *collapse*
   D. table

### Benar atau Salah

1. `alt=""` pada gambar pembatas dekoratif adalah praktik yang benar karena pembaca layar akan melewatinya.
2. Menambah `tabindex="5"` dan `tabindex="2"` adalah cara terbaik untuk merapikan urutan fokus.
3. Lighthouse adalah alat bawaan perambah: mahasiswa menjalankannya lewat panel DevTools, bukan menulis kode apapun.
4. Menghapus cincin fokus bawaan (`outline: none`) tanpa menggantinya memperburuk aksesibilitas.

### Analisis Kode

1. Perhatikan potongan berikut dan identifikasi setidaknya tiga cacat aksesibilitas, lalu tulis versi perbaikannya:

   File: analisis-kasus/kontak-cacat.html (potongan kasus — bukan bagian proyek)

   ```html
   <h1>Kontak Tokosaya</h1>
   <h4>Jam Layanan</h4>
   <p>Layanan dibuka setiap hari kecuali Minggu.</p>
   <img src="img/kunjungan.svg">
   <a href="katalog.html">klik di sini</a>
   ```
2. Berikut media query proyek lama. Apa strateginya, apa risikonya bagi proyek Tokosaya, dan bagaimana bentuk refactor *mobile-first* yang setara (perlihatkan hasilnya)?

   File: analisis-kasus/judul-lama.css (potongan kasus — bukan bagian proyek)

   ```css
   .produk-card-title { font-size: 2rem; }
   @media (max-width: 992px) { .produk-card-title { font-size: 1.5rem; } }
   @media (max-width: 768px) { .produk-card-title { font-size: 1.25rem; } }
   ```

### Soal Praktik

1. Ambil satu halaman proyek rekan Anda (bukan milik sendiri). Jalankan tiga langkah audit: panel perangkat 360/768/1200 px, uji Tab, dan Lighthouse Accessibility. Kumpulkan: (a) tabel temuan minimal 5 butir dengan butir POUR masing-masing; (b) satu perbaikan nyata di CSS atau HTML; (c) perbandingan skor Lighthouse sebelum/sesudah.
2. Tambahkan pada `tokosaya-bootstrap/tentang.html` hal berikut: skip link CSS murni, `#konten-utama` dengan `tabindex="-1"`, perbaikan semua heading agar tidak melompat, dan pasangan `label/for` penuh pada form jika ada. Lampirkan daftar periksa yang memperlihatkan butir yang telah dicoret.

### Kunci Jawaban

<details>
<summary>Klik untuk membuka kunci jawaban</summary>

**Pilihan Ganda**

1. **B** — Mobile-first memulai dari gaya dasar layar kecil lalu menambah gaya pada `min-width` yang menaik, tidak kebalikannya.
2. **B** — Desktop-first dirancang untuk kepadatan layar besar; layar kecil akhirnya dikempiskan lewat tambalan `max-width`.
3. **B** — Nilai tengah clamp adalah ukuran ideal yang bergantung lebar layar, terkurung antara minimum dan maksimum.
4. **A** — `srcset` melayangkan pilihan berkas lebar berbeda dari satu konten gambar; perambah yang memilih pas.
5. **C** — Perambah mengambil *source* pertama yang syarat media-nya terpenuhi, sehingga `min-width` ditulis dari terbesar.
6. **C** — POUR adalah Perceivable, Operable, Understandable, Robust; "Underlined" bukan prinsip WCAG.
7. **C** — Level AA menetapkan 4,5:1 untuk teks normal; teks besar dan elemen non-teks 3:1.
8. **C** — Tombol menu *collapse* resminya membutuhkan berkas skrip Bootstrap; di buku ini navigasi mobile diatur CSS kustom tanpa skrip.

**Benar atau Salah**

1. **Benar** — alt kosong membuat pembaca layar melewati gambar murni dekoratif.
2. **Salah** — `tabindex` positif melanggar aturan urutan fokus alami; urutan harus mengikuti DOM.
3. **Benar** — Lighthouse berjalan di panel DevTools; mahasiswa menjalankan alat, bukan menulis skrip.
4. **Benar** — pengguna keyboard kehilangan satu-satunya tanda lokasi fokus; yang benar merancang ulang cincin memakai `:focus-visible`.

**Ringkasan Analisis Kode**

1. Cacat: (a) `h1` melompat langsung ke `h4` — ganti menjadi `h2`; (b) gambar tanpa `alt` — tambahkan `alt` deskriptif konteks; (c) teks tautan "klik di sini" tidak menyebut tujuan — ganti "Lihat katalog Tokosaya".
2. Strategi *desktop-first*: gaya dasar layar besar lalu menyempit via `max-width`. Risiko: banyak penimpaan dan kaskade mudah bertabrakan. Refaktor *mobile-first*:

   File: tokosaya-bootstrap/css/style.css (potongan hasil refactor)

   ```css
   .produk-card-title { font-size: 1.25rem; }
   @media (min-width: 768px) { .produk-card-title { font-size: 1.5rem; } }
   @media (min-width: 992px) { .produk-card-title { font-size: 2rem; } }
   ```

   Nilai dasar kini ditulis untuk layar kecil, dan media query menaik menambah ukuran judul pada 768 dan 992 px — hasil visual sama, pola kode berlawanan arah.

**Ringkasan Soal Praktik**

1. Jawaban benar bila tiga langkah audit benar-benar dijalankan, temuan diklasifikasikan POUR dengan bukti, dan perbaikan mematuhi kontrak tanpa skrip.
2. Jawaban benar memuat skip link di awal `body`, `main#konten-utama`, urutan heading yang rapat, dan daftar periksa yang dicoret dengan jujur.

</details>

## Referensi

1. MDN Web Docs. (2026). *Responsive design*. Diakses 30 September 2026, dari https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
2. W3C. (2023). *Web Content Accessibility Guidelines (WCAG) 2.2*. Diakses 30 September 2026, dari https://www.w3.org/TR/wcag22/
3. Bootstrap. (2024). *Bootstrap v5.3 documentation*. Diakses 30 September 2026, dari https://getbootstrap.com/docs/5.3/
4. Wroblewski, L. (2012). *Mobile First*. A Book Apart.
5. Marcotte, E. (2011). *Responsive Web Design*. A Book Apart.