# BAB 6 — Flexbox untuk Web Layout

## Deskripsi Singkat

Di bab ini kamu akan berkenalan dengan *flexbox* (CSS Flexible Box Layout), yaitu model layout satu dimensi yang dipakai di banyak antarmuka web modern. Bab ini lanjutan *box model* dan `position` dari Bab 5: kalau di Bab 5 kamu fokus ke ukuran dan jarak tiap kotak, di Bab 6 kamu belajar gimana kotak-kotak itu dibagi ruangnya dan disejajarkan dalam satu baris atau satu kolom. Materinya mulai dari konsep sumbu utama (*main axis*) dan sumbu silang (*cross axis*), lalu masuk ke contoh nyata kayak navigasi horizontal, footer multi kolom, *media object*, hero dengan tombol ajakan (*call to action*/CTA), dan baris kartu produk Tokosaya. Setelah ini, Bab 7 lanjut ke CSS Grid buat layout dua dimensi yang lebih pas menata struktur halaman penuh.

## Tujuan Pembelajaran

1. Menjelaskan konsep flexbox dan sifat satu dimensinya, termasuk perbedaan *main axis* dan *cross axis*.
2. Mengidentifikasi fungsi properti flex container (`flex-direction`, `justify-content`, `align-items`, `gap`, `flex-wrap`) serta memilih yang tepat untuk suatu desain.
3. Mengimplementasikan properti flex item (`flex-grow`, `flex-shrink`, `flex-basis`, `order`, `align-self`) untuk mengatur perilaku tiap anak.
4. Mengimplementasikan pola navigasi responsif, footer multi kolom, *media object*, dan hero Tokosaya menggunakan flexbox.
5. Merancang baris kartu produk dengan `flex-wrap` dan mengevaluasi kapan pola tersebut perlu digantikan Grid (Bab 7).
6. Menganalisis cacat layout pada potongan kode flex dan memperbaikinya dengan alasan yang benar.

## Capaian Pembelajaran

Bab ini mendukung **CPMK 4** — Menggunakan Flexbox dan CSS Grid untuk membangun layout modern — terutama sub-capaian **S6.1**: membangun navigasi, hero, dan card layout dengan Flexbox (praktikum dan UTS). Kemampuan membaca perilaku flex lewat DevTools juga menyiapkan Anda untuk **CPMK 11** (pengujian dan *debugging* visual). Di bagian akhir, bab ini juga menunjukkan batas flexbox dibanding Grid supaya Anda lebih siap masuk ke **CPMK 5** (*responsive web design*) pada Bab 7.

## Kata Kunci

*flexbox* (model layout CSS satu dimensi buat mendistribusikan ruang), *flex container* (element induk dengan `display: flex` yang mengatur anak-anaknya), *flex item* (element anak langsung di dalam flex container), *main axis* (sumbu utama tempat item tersusun, ditentukan `flex-direction`), *cross axis* (sumbu silang tegak lurus main axis, tempat penyelarasan), *media object* (pola antarmuka ikon di sisi kiri dan teks di sisi kanan), *card layout* (susunan kartu konten yang mengalir antar-baris), *gap* (jarak antar-flex item tanpa margin ganda), *hero section* (banner pembuka halaman berisi judul, subjudul, dan CTA).

## Apersepsi

Coba lihat lagi website Tokosaya yang udah kamu bangun sampai Bab 5. Sekarang desainer proyek mengirim *wireframe* revisi: di bagian atas halaman, logo "Tokosaya" harus tetap di kiri, empat link — Beranda, Katalog, Tentang, Kontak — ada di kanan, lalu tombol "Keranjang" paling ujung. Di bawahnya, delapan kartu produk baku harus tetap rapi dari layar HP sempit sampai monitor 24 inci MR-241 yang dijual toko ini. Pas lebar layar berubah, kartunya nggak boleh gepeng; kalau nggak muat, item boleh turun ke baris baru dengan rapi.

Masalah *layout* kayak ini ternyata belum selesai kalau cuma mengandalkan Bab 5. *Box model* memang mengatur tiap kotak secara individual — lebar, *padding*, *border*, *margin* — tapi belum menjawab pertanyaan kayak "kalau ada tiga kotak dalam satu baris, sisa ruangnya dibagi gimana?". Dulu banyak developer menyiasatinya dengan `float` dan margin negatif, lalu repot sendiri pas footer tiba-tiba "jatuh" ke bawah. Nah, flexbox hadir buat kasus kayak gini: cukup satu properti di elemen induk, lalu anak-anaknya bisa otomatis sejajar, berjarak, dan pindah ke baris baru pas layar makin sempit.

Pertanyaan pemandu bab ini simpel: gimana menata satu baris elemen supaya jarak dan perataannya otomatis rapi di ukuran layar apa pun — dan kapan pekerjaan "satu dimensi" ini lebih baik diserahkan ke Grid di Bab 7?

## Materi Pembelajaran

### 6.1 Konsep Flexbox dan Sifat Satu Dimensinya

*Flexbox* adalah modul CSS buat menyusun elemen dalam **satu dimensi**: entah memanjang dalam satu baris (*row*) atau satu kolom (*column*). Caranya simpel: beri `display: flex` pada elemen induk, lalu elemen itu jadi *flex container* (wadah lentur). Semua anak langsungnya otomatis berubah jadi *flex item* (butir lentur) yang menempati baris atau kolom tersebut. Jadi kamu nggak perlu lagi mengatur posisi anak satu per satu; wadahnya yang membagi ruang.

Kenapa CSS butuh modul khusus kayak gini? Sebelum ada flexbox, menyusun elemen sejajar dalam satu baris sering terasa ribet. Developer mengandalkan `float`, padahal fitur itu awalnya dibuat supaya teks mengalir di sekitar gambar. Pilihan lainnya `display: inline-block`, tapi itu bikin kita berurusan dengan celah *whitespace* antartag HTML. Akibatnya, hal yang seharusnya simpel — menu rata kanan, tombol sejajar di tengah, kartu dengan tinggi seragam — jadi gampang rusak. Flexbox memang dibuat khusus buat antarmuka: membagi ruang antar-item dan merapikan item dalam satu arah. Duckett (2011) menekankan bahwa layout adalah soal memahami "kotak di dalam kotak"; flexbox melengkapi kotak-kotak Bab 5 dengan aturan pembagian ruang antar-kotak. Dukungan browser modern buat flexbox juga udah stabil, jadi aman dipakai di proyek produksi, kayak yang dirangkum MDN.

Konsep paling penting di awal bab ini adalah **dua sumbu**. Setiap flex container punya *main axis* (sumbu utama) — jalur item mengalir dan tempat `justify-content` bekerja — serta *cross axis* (sumbu silang) — arah tegak lurusnya, tempat `align-items` bekerja. Arah sumbu utama ditentukan `flex-direction`. Nilai defaultnya `row`, jadi sumbu utama bergerak horizontal (kiri ke kanan) dan sumbu silang vertikal (atas ke bawah). Kalau `flex-direction` diubah jadi `column`, perannya ikut bertukar: sumbu utama jadi vertikal dan sumbu silang jadi horizontal. Kesalahan yang paling sering terjadi adalah tertukar saat membaca dua sumbu ini, misalnya mengira `align-items` akan menggeser item ke kanan-kiri, padahal pada `row` properti itu justru bekerja ke atas-bawah. Simpan diagram berikut baik-baik.

```text
                    cross axis (sumbu silang)
                              ▲
                              │ align-items mengatur
                              │ posisi pada sumbu ini
    ┌─────────────────────────┴─────────────────────────────┐
    │                                                       │
    │   [ Tokosaya ]      [ Beranda  Katalog  Keranjang ]   │
    │                                                       │
    └───────────────────────────────────────────────────────┘
    ● flex-direction: row → item mengalir ke kanan
    ─────────────────────────────────────────────────────────▶
                    main axis (sumbu utama)
                    justify-content mengatur posisi
                    dan sisa ruang pada sumbu ini
```

Kalau arahnya berubah, perannya ikut pindah:

```text
flex-direction: row              flex-direction: column
┌──────────────────────────┐     ┌────────┐
│ [Logo] [Menu] [Keranjang]│     │ [Logo] │
└──────────────────────────┘     │ [Menu] │
main axis: horizontal            │ [Keranjang] │
cross axis: vertikal             └────────┘
                                 main axis: vertikal
                                 cross axis: horizontal
```

Analogi yang gampang diingat: flex container itu kayak lorong asrama satu lantai. Kamera (sumbu utama) bergerak menyusuri lorong dari ujung ke ujung mengikuti arah layout, sedangkan pintu kamar (sumbu silang) menghadap tegak lurus lorong. `justify-content` mengatur seberapa renggang penghuni berdiri sepanjang lorong, sedangkan `align-items` mengatur posisi mereka maju-mundur terhadap lebar lorong.

Kalau kamu membayangkan proyek Sistem Informasi, gunanya langsung terasa. Baris *toolbar* aplikasi kepegawaian, kartu statistik di dasbor akademik, menu profil mahasiswa, sampai notifikasi "pengumuman" di portal kampus semuanya berangkat dari masalah yang sama: "satu baris yang harus dibagi rapi". Begitu pola satu dimensi ini terasa masuk akal, kamu akan mulai melihatnya di banyak antarmuka sistem informasi.

### 6.2 Flex Container: flex-direction, justify-content, align-items, gap, dan flex-wrap

Bikin sebuah elemen jadi flex container cukup dengan `display: flex`. Begitu properti ini aktif, semua anak langsungnya ikut berubah perilaku: mereka tersusun di sepanjang sumbu utama, bisa menyesuaikan tinggi atau lebar terhadap wadah, dan nggak lagi mengikuti kebiasaan lama "block vs inline" dari Bab 3. Properti-properti berikut ditulis **pada wadah**, bukan pada anak. Kesalahan yang sering terjadi adalah menaruh `justify-content` di item, lalu bingung karena nggak ada efeknya.

**`flex-direction`** menentukan arah sumbu utama: `row` (default, mengalir ke kanan), `row-reverse` (kanan ke kiri), `column` (atas ke bawah), `column-reverse` (bawah ke atas). Buat antarmuka berbahasa Indonesia, `row` dan `column` adalah dua yang paling sering dipakai: `row` buat menu dan kartu, `column` buat tumpukan konten di dalam kartu.

**`justify-content`** membagi sisa ruang di sepanjang **main axis**. Nilai-nilainya: `flex-start` (menempel awal), `flex-end` (menempel akhir), `center` (di tengah), `space-between` (item pertama dan terakhir menempel tepi, sisa ruang dibagi di antara item), `space-around` (setiap item dapat ruang sama; ruang di tepi luar setengah dari ruang antar-item), `space-evenly` (semua celah sama besar, termasuk di tepi). Diagram berikut membandingkan tiga item kecil di dalam wadah yang lebih lebar.

```text
flex-start            center                flex-end
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│ A B C        │      │    A B C     │      │        A B C │
└──────────────┘      └──────────────┘      └──────────────┘

space-between         space-around          space-evenly
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│ A     B    C │      │  A   B   C   │      │  A   B   C   │
└──────────────┘      └──────────────┘      └──────────────┘
ruang hanya di        setiap item           semua celah,
antara item           berpeluk ruang;       termasuk dua tepi,
                      tepi setengah         sama besar
```

Di navigasi Tokosaya, kombinasi yang paling produktif adalah `space-between` buat mendorong kelompok kiri dan kelompok kanan ke tepi berseberangan. Di *toolbar* pencarian, `space-between` juga menyelesaikan "judul kiri, alat kanan" cuma dengan satu baris CSS.

**`align-items`** menyelaraskan flex item pada **cross axis**. Nilai defaultnya `stretch`: anak-anak meregang mengikuti tinggi wadah (pada `row`) — inilah alasan kartu di satu baris otomatis sama tinggi kalau kamu nggak mengganggunya. Nilai lain: `flex-start` (menempel puncak), `flex-end` (menempel dasar), `center` (menengah vertikal), `baseline` (menyetel garis dasar teks). Menu Tokosaya memakai `align-items: center` supaya logo tinggi, link teks, dan tombol keranjang berdiri seimbang meski tinggi aslinya beda.

**`gap`** memberi jarak antar-flex item tanpa margin ganda. Cara lama menulis `margin-right` di tiap anak — itu bikin margin menyusup di tepi terluar dan terpaksa dibersihkan dengan `:last-child`. Dengan `gap: 24px`, jarak cuma lahir **di antara** item; tepi wadah tetap bersih. Kalau kamu butuh jarak berbeda antar-baris dan antar-kolom (relevan pas `flex-wrap` aktif), tulis `row-gap` dan `column-gap`. Sejak flexbox, `gap` juga didukung Grid — kebiasaan ini akan terus terpakai di Bab 7.

**`flex-wrap`** mengizinkan baris menekuk: pas ruang main axis habis, item yang nggak muat pindah ke baris berikutnya, bukan dipaksa menyusut. Nilainya: `nowrap` (default: satu baris, item menyempit), `wrap` (menekuk ke baris baru), `wrap-reverse` (menekuk dengan urutan baris terbalik). Bedanya terlihat jelas pada deret kartu:

```text
nowrap — semua item dipaksa satu baris      wrap — item yang tak muat pindah baris
┌────┬────┬────┬────┐                       ┌────┬────┐
│ A  │ B  │ C  │ D  │  (masing-masing       │ A  │ B  │
└────┴────┴────┴────┘   menyempit paksa)    ├────┼────┤
                                            │ C  │ D  │
                                            └────┴────┘
```

Perhatikan satu konsekuensi penting: begitu item menekuk, wadah punya **beberapa baris flex**, dan `align-items` yang tadinya mengatur item satu baris kini mengatur peletakan **antar-baris** di ruang sisa. Cara yang lebih jelas buat mengatur jaraknya adalah menaikkan `row-gap`. Rangkuman cepat properti container: `flex-direction` (arah), `justify-content` (space di main axis), `align-items` (space di cross axis), `gap`/`row-gap`/`column-gap` (jarak), `flex-wrap` (izin menekuk). Lima nama ini menyelesaikan mayoritas layout satu baris yang akan kamu temui, termasuk navigasi, footer, dan *toolbar*.

### 6.3 Flex Item: flex-grow, flex-shrink, flex-basis, order, dan align-self

Kelompok properti kedua ditulis **pada anak**. Tiga properti pertama mengatur ukuran item: *flex-basis* menentukan ukuran awal item di sepanjang main axis **sebelum** ruang dibagi, *flex-grow* menentukan seberapa besar item boleh mengambil sisa ruang, dan *flex-shrink* menentukan seberapa jauh item boleh menyusut pas ruang kurang. Ketiganya memakai angka proporsi, bukan piksel, jadi nilainya selalu dibaca relatif terhadap item lain. Kalau satu item punya `flex-grow: 2`, item itu akan tumbuh dua kali porsi item yang punya `flex-grow: 1` dari sisa ruang yang sama.

Ketiganya punya bentuk singkat `flex: <grow> <shrink> <basis>;`. Coba baca dengan suara lantang supaya nggak bingung: `flex: 1 1 240px` berarti "ukuran awal 240 px, boleh tumbuh dengan bobot 1, boleh menyusut dengan bobot 1". Dua bentuk umum yang layak dihafal: `flex: 1` (setara `1 1 0%` — item membagi ruang wadah secara merata, cocok buat kolom konten) dan `flex: 0 1 250px` (kartu berukuran awal 250 px yang menyempit kalau sempit dan nggak dibesarkan kalau longgar — cocok buat baris kartu dengan `flex-wrap`). Perhatikan juga: pada *flex item*, `flex-basis` mengesampingkan properti `width` di sepanjang main axis. Jadi, jangan kira menambah `width: 300px` akan mengalahkan `flex: 1 1 200px`.

Teknik kecil yang berguna banget adalah **auto margin**. Kalau satu item diberi `margin-left: auto`, ruang kosong di sisinya akan melebar sampai penuh, sehingga item itu terdorong ke ujung main axis. Di flexbox, `auto` benar-benar menyerap sisa ruang, bukan sekadar memberi "jarak minimal" kayak pada blok biasa. Hal yang sama berlaku pada kartu berarah kolom: `margin-top: auto` di baris harga akan mendorong harga ke dasar kartu, sehingga posisi harga tetap sejajar walau deskripsinya nggak sama panjang.

**`align-self`** adalah pas khusus: satu item melanggar perataan wadah. Wadahnya tertata `align-items: flex-start`? Cukup beri `align-self: stretch` pada satu kartu supaya meregang sendirian, misalnya kartu unggulan di antara kartu biasa. Nilainya sama dengan `align-items` ditambah `auto` (ikut wadah).

**`order`** merangkum kebolehan menata ulang: flex item diurutkan berdasarkan nilai `order` (default 0); angka kecil mendahului angka besar. Ada dua catatan disiplin sebelum memakainya. Pertama, `order` cuma mengubah **urutan visual**; urutan dokumen HTML tetap asli, sehingga pembaca *screen reader* dan navigasi tombol *Tab* bisa berbeda dengan yang dilihat mata — pakai buat penyesuaian kecil, bukan buat menyusun ulang konten penting. Robbins (2018) mengingatkan agar urutan dokumen selalu logis sebelum gaya bekerja: HTML yang baik dulu, CSS menyusul. Kedua, jangan jadikan `order` alat utama layout; dia pemanis kecil di atas pola container yang benar.

Singkatnya, di flexbox ada dua level pengaturan: wadah mengatur pembagian ruang secara umum, sedangkan anak mengatur perilaku dirinya sendiri. Kalau layout terasa "nggak nurut", cek dulu properti itu seharusnya ditulis di level mana. DevTools Chrome membantu karena flex container dan *flex item* diberi lencana khusus, jadi kamu lebih gampang melacaknya.

### 6.4 Pola 1: Navigasi Horizontal dan Responsivitasnya

Pola flexbox yang paling gampang dikenali adalah **navigasi satu baris: logo di kiri, menu di kanan**. Struktur HTML-nya sebenarnya sudah kamu kuasai sejak Bab 2: ada `<header>` berisi `<nav>`, lalu di dalamnya merek sebagai `<a>` dan daftar menu sebagai `<ul>` dengan beberapa `<li><a>`. Yang berubah di Bab 6 adalah cara menatanya. Strateginya ada tiga langkah: (1) jadikan `<nav>` sebagai flex container; (2) bungkus menu dan tombol keranjang dalam satu kelompok kanan supaya bergerak bersama; (3) dorong kelompok itu pakai `justify-content: space-between` atau, kalau mau lebih ringkas, `margin-left: auto` pada kelompok kanan.

Pengelompokan ini bukan cuma soal tampilan, tapi juga dasar responsivitasnya. Kalau nggak ada kelompok kanan, `flex-wrap` bisa bikin item turun satu per satu ke posisi acak, sehingga baris kedua terlihat pincang: misalnya "Beranda" tetap di kiri, sedangkan tiga link lain jatuh ke bawah. Dengan kelompok kanan, seluruh navigasi turun sebagai satu blok yang tetap rapi dan enak dibaca. Itulah maksud "responsif karena *wrap*": di layar sempit kita nggak menyembunyikan isi, tapi membiarkan baris menekuk dengan cara yang masih terkontrol.

Tombol keranjang boleh dibuat lebih menonjol dengan warna `--clr-primary`, radius `--radius`, dan teks "Keranjang (0)". Karena fitur keranjang baru benar-benar dipakai di Bab 11 (dan ikon yang rapi baru masuk lewat Bootstrap di Bab 10), di bab ini linknya cukup diarahkan ke tanda pagar sebagai prototipe statis. Perlu jujur juga: menu *hamburger* yang buka-tutup pas diklik memang umum dipakai, tapi pola itu butuh JavaScript yang belum dibahas di mata kuliah ini. Jadi, `flex-wrap` adalah alternatif CSS murni yang aman dan masuk akal buat website statis. Bab 13 nanti akan membandingkannya dengan pola navigasi responsif lain.

Detail kenyamanan menutup pola ini: `position: sticky` (Bab 5) pada `header` membuat navigasi menempel pas halaman digulir; `align-items: center` menyetel semua isi menu supaya sejajar di tengah vertikal; kelas aktif (mis. `site-nav-link-aktif`) menandai halaman yang sedang dibuka; dan `:focus-visible` memberi cincin jelas pas navigasi pakai papan tombol. Cincin fokus bukan hiasan — WCAG 2.2 menuntut indikator fokus yang terlihat supaya pengguna keyboard nggak tersesat di tengah menu.

### 6.5 Pola 2: Footer Multi Kolom dan Media Object

Pola kedua juga memanfaatkan `flex-wrap`, tapi buat kebutuhan yang beda: **footer multi kolom**. Tokosaya butuh tiga kolom — profil singkat, menu, dan kontak — yang di layar sempit boleh turun ke bawah tanpa media query (media query sendiri baru dibahas penuh di Bab 7). Caranya: jadikan footer sebagai flex container dengan `flex-wrap: wrap` dan `gap` yang cukup lega, lalu beri setiap kolom `flex: 1 1 240px`. Artinya, ukuran dasar tiap kolom 240 px; kalau masih muat, kolom akan berdampingan dan terbagi rata; kalau nggak muat, kolom paling kanan turun ke baris baru dengan lebar penuh. Sifat "menyesuaikan jumlah kolom sendiri" inilah yang membuat footer tetap hidup di berbagai ukuran layar.

Di dalam kolom kontak, muncul pola ketiga yang terkenal: ***media object*** — susunan "ikon di kiri, teks di kanan" yang sering muncul di daftar komentar, notifikasi, atau kontak. Struktur minimumnya sederhana: wadah `display: flex` dengan `gap`, anak pertama tetap kecil (misalnya ikon 40×40 px), lalu anak kedua diberi `flex: 1` supaya teks memakai semua ruang yang tersisa. Pas barisnya memanjang, ikon tetap di sisi kiri dan teks memanfaatkan ruang di kanan. Dulu pola kayak ini sering dicapai dengan `float`, tapi flexbox membuatnya jauh lebih rapi tanpa efek samping konten meluber.

Pas perangkatnya sempit banget, ada trik halus yang layak dikenali: pada kolom yang menumpuk, urutan visual bisa dibalik per-item dengan `order` tanpa mengubah HTML — misalnya meletakkan kolom kontak lebih dulu karena nomor telepon lebih sering dipakai daripada menu. Ini contoh `order` yang sehat: penyesuaian kecil, urutan dokumen tetap logis.

Footer yang baik juga menuntut kontras: teks terang di atas latar `--clr-dark` masih nyaman, tapi link pada latar gelap harus tetap tersorot jelas pas disorot atau difokuskan. Jangan menghilangkan garis bawah link di footer tanpa memberi tanda ganti; pengguna muda pun masih membaca hyperlink dengan tanda itu, apalagi pengguna layar bawah (*screen reader* tidak melihat warna sama sekali — urutan dan struktur HTML-lah yang mereka telusuri).

### 6.6 Pola 3: Hero Section, CTA, dan Centering

Pola ketiga menjawab permintaan desainer yang sering banget muncul: "tolong ini ditaruh di tengah". *Hero section* — banner pembuka yang berisi judul, subjudul, dan tombol ajakan — di Tokosaya memakai *copy* baku: judul "Peralatan Kerja Digital untuk Semua", subjudul tentang keyboard, mouse, dan monitor, lalu tombol "Lihat Katalog". Dengan `flex-direction: column` pada wadah hero, tiga elemen itu ditumpuk di sumbu utama yang sekarang vertikal. Setelah itu, `align-items: center` mengatur perataan horizontalnya, `gap` memberi jarak yang konsisten, dan `text-align: center` membuat baris teksnya tetap rapi pas membungkus.

Pengalaman mahasiswa biasanya kaget: dua properti "terbalik" ini memang kelihatan membingungkan, dan justru itulah pelajaran terbaik 6.1. Pada `column`, `justify-content` bekerja vertikal dan `align-items` horizontal — persis pertukaran peran yang kamu duga setelah melihat diagram sumbu. Kalau suatu saat kamu butuh menengahkan **vertikal dan horizontal sekaligus** (sering dipakai pas `min-height` besar pada banner), kompasnya tetap sama: `justify-content: center` mengurus sumbu utama, `align-items: center` mengurus sumbu silang, nggak peduli arahnya.

CTA (*call to action*) di hero bertugas mengarahkan perhatian pembaca. Karena itu, tombol utamanya boleh dibuat besar dengan warna `--clr-primary` dan status `:hover` menuju `--clr-primary-dark`. Cukup **satu** CTA utama di tiap hero; kalau perlu link tambahan, tampilkan saja sebagai link teks biasa di bawahnya. Wroblewski (2012) menekankan pendekatan *mobile first*: di layar kecil, satu tindakan yang jelas jauh lebih gampang dipahami daripada lima tombol yang berebut perhatian.

Terakhir, jaga keterbacaan subjudul hero: beri `max-width` (misal 46 karakter ke atas, praktisnya 640 px) supaya baris teks nggak membentang sepanjang monitor lebar. Tanpa batasan itu, sebuah paragraf di monitor MR-241 bisa memuat 160 karakter per baris — terlalu melelahkan buat mata. Batas `max-width` bukan pengecilan, melainkan penghormatan pada mata pembaca.

### 6.7 Card Layout dengan flex-wrap — dan Kapan Grid Lebih Baik

Kartu (*card*) adalah cara populer buat menampilkan informasi di web modern, dan Tokosaya memakainya di katalog: ada delapan produk baku, masing-masing berisi gambar, *badge* (Best Seller, Tersedia, Stok Terbatas, Baru), nama, kategori, harga, dan deskripsi singkat. Resep barisnya sederhana: wadah `.produk-row` memakai `display: flex; flex-wrap: wrap; gap: 24px;`, lalu tiap `.produk-card` memakai `flex: 0 1 250px`. Hasilnya, kartu akan berusaha memakai basis 250 px; pas ruang habis, kartu terakhir turun ke baris berikutnya; pas layar mengecil, kartu ikut menyempit secara proporsional; pas layar melebar, baris terisi lebih penuh. **Responsif tanpa media query** — inilah salah satu alasan `flex-wrap` disukai.

Kartunya sendiri juga flexbox kecil di dalam: `display: flex; flex-direction: column; gap: 8px` menyusun gambar, *badge*, nama, kategori, harga, deskripsi sebagai tumpukan berjarak rapi. Trik dari 6.3 kembali berguna: `margin-top: auto` pada harga menopang jarak dari konten di atasnya, sehingga harga delapan kartu berbaris di dasar kartu meski tinggi deskripsinya beda. Gambar produk diberi `width: 100%`, tinggi tetap, dan `object-fit: cover` supaya rasionya sama rapi.

Meski begitu, flexbox punya batas yang perlu kamu pahami dari sekarang. Karena flexbox bersifat **satu dimensi**, tiap baris diatur secara lokal: baris pertama nggak benar-benar "berkomunikasi" dengan baris kedua. Akibatnya ada dua hal yang sering muncul. Pertama, kartu di baris terakhir cenderung merapat ke kiri dan menyisakan ruang kosong di kanan — misalnya pas 8 kartu terbagi 3-3-2. Kedua, menjaga ukuran kolom tetap sama di banyak baris (misalnya selalu 4 kolom sama lebar di layar besar) butuh perhitungan basis yang konsisten, tapi tetap nggak menjamin perataan kolom antarbaris. Buat kebutuhan "katalog yang benar-benar terasa kayak kisi", bab ini sengaja menyerahkannya ke **CSS Grid di Bab 7** — model dua dimensi dengan `grid-template-columns` yang mengatur baris dan kolom sekaligus.

Kapan pilih yang satu? Tabel ringkas:

| Situasi | Pilih |
|---|---|
| Sebaris item yang panjangnya alami (menu, chip filter, kartu mengalir) | Flexbox + `flex-wrap` |
| Kolom footer yang boleh menumpuk bebas | Flexbox + `flex-wrap` |
| Menengahkan satu gugus konten | Flexbox |
| Katalog/kartu dengan jumlah kolom pasti dan rata antar-baris | Grid (Bab 7) |
| Struktur halaman dua dimensi (header, sidebar, konten, footer) | Grid (Bab 7) |

Dalam praktik nyata, keduanya justru sering dipakai bareng: Grid menangani rangka halaman dan kisi katalog, sedangkan flexbox merapikan tiap kartu dan baris kecil di dalamnya. Setelah Bab 7, kamu akan melihat keduanya sebagai pasangan kerja yang alami banget.

## Konsep Penting

| Istilah/Properti | Level | Fungsi Ringkas |
|---|---|---|
| `display: flex` | container | Bikin elemen jadi flex container; anaknya jadi flex item. |
| `flex-direction` | container | Menentukan arah main axis: `row` atau `column` (plus varian `reverse`). |
| `justify-content` | container | Membagi ruang sisa pada **main axis**. |
| `align-items` | container | Menyelaraskan item pada **cross axis**; default `stretch`. |
| `gap` | container | Jarak antar item; `row-gap`/`column-gap` lebih rinci pas `wrap` aktif. |
| `flex-wrap` | container | Memberi izin baris menekuk: `nowrap`/`wrap`/`wrap-reverse`. |
| `flex-basis` | item | Ukuran awal item sebelum ruang dibagi. |
| `flex-grow` | item | Porsi sisa ruang yang boleh ditelan item. |
| `flex-shrink` | item | Porsi penyusutan pas ruang kurang. |
| `flex: 1` | item | Singkatan `1 1 0%`: item membagi ruang merata. |
| `margin-left: auto` | item | Menekan item ke ujung akhir main axis dengan menyerap ruang sisa. |
| `align-self` | item | Menimpa `align-items` untuk satu item tertentu. |
| `order` | item | Mengubah urutan visual; urutan dokumen nggak berubah — pakai hemat. |
| *media object* | pola | Ikon tetap kecil di kiri + `flex: 1` pada teks di kanan. |
| *card layout* | pola | `flex-wrap` + `flex: 0 1 250px` = baris kartu responsif tanpa media query. |

## Contoh Kode

Tiga contoh berikut memberimu laboratorium berukuran kecil sebelum praktikum. Contoh 6-1 membuka kembali wawasan properti container; Contoh 6-2 menunjukkan perilaku item dan trik `margin-top: auto` pada kartu; keduanya file *standalone* sehingga aman dicoba tanpa menyentuh proyek utama. Semua contoh memakai token warna Bab 4 supaya tampilannya konsisten dengan Tokosaya.

### Contoh 6-1: Halaman Demonstrasi Properti Container

File: tokosaya-css/demo-flex.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demonstrasi Flex Container — Tokosaya</title>
  <link rel="stylesheet" href="css/demo-flex.css">
</head>
<body>

  <h1>Demonstrasi Properti Flex Container</h1>
  <p>Halaman latihan; bukan bagian situs Tokosaya final.</p>

  <section class="demo">
    <h2>flex-direction: row</h2>
    <div class="demo-box demo-row">
      <div class="demo-item">Beranda</div>
      <div class="demo-item">Katalog</div>
      <div class="demo-item">Tentang</div>
    </div>
  </section>

  <section class="demo">
    <h2>flex-direction: column</h2>
    <div class="demo-box demo-col">
      <div class="demo-item">Beranda</div>
      <div class="demo-item">Katalog</div>
      <div class="demo-item">Tentang</div>
    </div>
  </section>

  <section class="demo">
    <h2>justify-content: space-between</h2>
    <div class="demo-box demo-between">
      <div class="demo-item">Kiri</div>
      <div class="demo-item">Tengah</div>
      <div class="demo-item">Kanan</div>
    </div>
  </section>

  <section class="demo">
    <h2>align-items: center + gap</h2>
    <div class="demo-box demo-align">
      <div class="demo-item demo-cilik">Logo</div>
      <div class="demo-item">Menu</div>
      <div class="demo-item demo-cilik">Keranjang</div>
    </div>
  </section>

</body>
</html>
```

Penjelasan: halaman ini sengaja menampilkan empat kotak demo dengan konten navigasi Tokosaya supaya kamu lebih gampang menghubungkan sifat wadah dengan pola nyata. Tiap `<section>` cuma memuat satu kotak berlabel, jadi satu perubahan CSS cukup buat menunjukkan satu perilaku. Pola eksperimen satu variabel kayak ini juga berguna pas kamu sedang *debugging*.

File: tokosaya-css/css/demo-flex.css

```css
/* Demo konsep flex container — halaman latihan, berdiri sendiri. */

body {
  font-family: system-ui, sans-serif;
  background-color: var(--clr-bg, #F8FAFC);
  color: #334155;
  padding: 24px;
  margin: 0;
}

.demo { margin-bottom: 32px; }
.demo h2 { font-size: 1.1rem; color: #1E293B; }

.demo-box {
  display: flex;
  min-height: 90px;
  background-color: #FFFFFF;
  border: 2px dashed #94A3B8;
  padding: 12px;
}

.demo-item {
  background-color: #4F46E5;
  color: #FFFFFF;
  font-weight: 600;
  padding: 12px 20px;
  border-radius: 8px;
}

.demo-cilik { font-size: 0.8rem; padding: 6px 12px; }

.demo-col { flex-direction: column; min-height: 220px; }
.demo-between { justify-content: space-between; }
.demo-align { align-items: center; gap: 16px; }
```

Penjelasan: satu file CSS ini melayani empat kelas perilaku (`demo-col`, `demo-between`, `demo-align`), dan `.demo-box` sejak awal sudah bertindak sebagai flex container sehingga tiap kelas tinggal menambahkan satu properti. Warna `#4F46E5` adalah token `--clr-primary`; penulisan `var(--clr-primary, #4F46E5)` menunjukkan bentuk *fallback* — nilai kedua dipakai kalau token belum tertulis, trik yang aman buat halaman latihan.

### Contoh 6-2: Perilaku Flex Item pada Tiga Kartu

File: tokosaya-css/demo-flex-item.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demonstrasi Flex Item — Tokosaya</title>
  <link rel="stylesheet" href="css/demo-flex.css">
</head>
<body>

  <h1>Demonstrasi flex: dan align-self</h1>

  <div class="baris">
    <div class="kartu kartu-konten">
      <p>Kolom Konten</p>
      <p class="isi">Basis 160 px, grow 1 — bersaing merata.</p>
    </div>
    <div class="kartu kartu-konten">
      <p>Kolom Konten</p>
      <p class="isi">Basis 160 px, grow 2 — dua kali tumpang saingi.</p>
    </div>
    <div class="kartu kartu-samping">
      <p>Sidebar</p>
      <p class="isi">Basis 120 px, grow 0 — tetap ramping.</p>
    </div>
  </div>

  <div class="baris kartu-tinggi">
    <div class="kartu kartu-dasar">
      <p>align-self: flex-end</p>
      <p class="isi">Saya meluruh ke dasar.</p>
    </div>
    <div class="kartu kartu-auto">
      <p>margin-top: auto</p>
      <p class="isi">Isi saya makan ruang; teks ini turun ke dasar.</p>
    </div>
  </div>

</body>
</html>
```

File: tokosaya-css/css/demo-flex-item.css

```css
/* Demo perilaku flex item pada kartu. */

body {
  font-family: system-ui, sans-serif;
  background-color: #F8FAFC;
  color: #334155;
  padding: 24px;
  margin: 0;
}

.baris {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  border: 2px dashed #94A3B8;
  padding: 12px;
  min-height: 140px;
}

.kartu {
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.kartu-konten { flex: 1 1 160px; }
.kartu-konten:nth-of-type(2) { flex-grow: 2; }
.kartu-samping { flex: 0 1 120px; }

.kartu-dasar { align-self: flex-end; }
.kartu-auto { flex: 1; }
.kartu-auto p:last-child { margin-top: auto; text-align: right; color: #4F46E5; }
```

Penjelasan: `flex: 1 1 160px` dan `flex: 0 1 120px` di sini menunjukkan bentuk lengkap pengaturan ukuran. Kolom konten memakai `flex-basis` 160 px lalu mengambil sisa ruang sampai wadah penuh, sedangkan sidebar sengaja nggak ikut tumbuh. Baris `align-self: flex-end` menaruh satu kartu di dasar wadah; lalu pada kartu kedua di baris bawah, `margin-top: auto` pada paragraf terakhir mendorong teks ke bawah. Pola yang sama nanti dipakai buat merapikan posisi harga produk.

## Penjelasan Kode

**Contoh 6-1 — container: `.demo-box`** adalah inti pelajaran. Karena sudah `display: flex`, setiap kelas tambahan cuma menunjuk satu perilaku: `demo-col` memutar sumbu utama ke bawah, `demo-between` membagi ruang sisa di antara tiga item, dan `demo-align` menyelipkan `gap` sambil menengahkan item pendek-pendek. Perhatikan `min-height` pada kotak: pada `row`, tinggi wadah mengikuti item tertinggi, tapi `min-height` menaikkan panggungnya sehingga `justify-content: space-between` punya "sisa ruang" buat dibagikan. Tanpa ruang sisa, pembagian ruang nggak punya bahan.

**Contoh 6-2 — item:** membandingkan dua kolom konten memperlihatkan makna bobot: `flex: 1 1 160px` versus `flex-grow: 2` nggak membuat kartu kedua dua kali lebih lebar secara keseluruhan, melainkan dua kali **porsi dari sisa ruang** — basis tiga kartu tetap dihitung dulu, barulah kelebihannya dibagi menurut bobot, sehingga kedua kolom konten nggak berhenti pada perbandingan lebar pangkalnya. Kartu `kartu-auto` menunjukkan auto-margin: teksnya menempel dasar kartu karena seluruh sisa ruang vertikal "dimakan" margin sebelum teks — pola yang nanti kita pakai buat menyejajarkan harga produk Tokosaya tanpa `position: absolute`.

## Praktikum

### Tujuan Praktikum

Di praktikum ini, kamu akan menambah dua komponen flexbox ke `tokosaya-css/`: (1) *site-nav* responsif — logo Tokosaya di kiri, menu Beranda/Katalog/Tentang/Kontak dan tombol "Keranjang (0)" di kanan — yang tetap rapi pas layar menyempit; (2) baris kartu produk dengan `flex-wrap` berisi **delapan produk baku** Tokosaya. Praktikum ini langsung terhubung dengan milestone Bab 6 (navigasi responsif + card layout) dan bisa jadi bahan latihan buat UTS.

### Kebutuhan

- Visual Studio Code dan Google Chrome (teknologi terkunci bab ini).
- Folder `tokosaya-css/` hasil Bab 5; kalau memulai bersih, ikuti langkah 1 di bagian Persiapan.
- 8 file SVG di `img/` buat gambar produk (dibuat di langkah 3).
- Koneksi internet buat memuat Google Fonts Poppins dan Inter.
- Chrome DevTools buat memeriksa lencana `flex` dan mengubah ukuran jendela.

### Persiapan

1. Pastikan struktur proyek memuat: `index.html`, `css/style.css`, dan folder `img/`.
2. Pastikan token baku §5.3 berada di bagian atas `css/style.css` (blok token sudah termasuk pada kode di bawah ini, jadi menyalin kembali nggak merusak apa pun).
3. Buat delapan SVG penanda produk di `img/`. Bentuknya bebas asalkan valid; contoh satu file (kotak indigo dengan lingkaran):

File: tokosaya-css/img/produk-keyboard-kx210.svg

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250">
  <rect width="400" height="250" fill="#E2E8F0"/>
  <rect x="60" y="80" width="280" height="90" rx="12" fill="#4F46E5"/>
  <circle cx="120" cy="125" r="10" fill="#F8FAFC"/>
  <circle cx="160" cy="125" r="10" fill="#F8FAFC"/>
  <circle cx="200" cy="125" r="10" fill="#F8FAFC"/>
  <circle cx="240" cy="125" r="10" fill="#F8FAFC"/>
  <circle cx="280" cy="125" r="10" fill="#F8FAFC"/>
  <text x="200" y="215" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#1E293B">Keyboard Mekanis KX-210</text>
</svg>
```

Penjelasan: SVG ini cuma *placeholder* gambar produk yang ringan dan tetap valid. Kamu bisa menyalin polanya ke tujuh file lain, lalu mengganti nama dan labelnya sesuai daftar produk pada kode utama.

### Langkah Kerja

1. Buka `tokosaya-css/index.html` dan ganti seluruh isinya dengan markup utama di bagian Kode.
2. Perhatikan `header.site-header` → `nav.site-nav`: satu *flex container*, dua anak (merek dan kelompok kanan).
3. Periksa `site-nav-kanan`: kelompok flex berisi `<ul>` menu dan `<a>` keranjang, berjarak 24 px.
4. Ganti `css/style.css` dengan file utama pada bagian Kode (token tetap di atas).
5. Buka `index.html` di Chrome; pastikan logo di kiri, menu dan keranjang di kanan.
6. Susutkan jendela perlahan; amati kelompok kanan turun menjadi baris kedua secara utuh.
7. Buka DevTools → tab Elements; periksa lencana `flex` pada `.site-nav` dan `.produk-row`.
8. Amati baris kartu: cari lebar jendela pas jumlah kartu per baris berubah (4-3-1 atau 3-3-2) dan catat angkanya buat Laporan.

### Kode

File: tokosaya-css/index.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tokosaya — Belanja Tepat, Kirim Cepat</title>
  <!-- Google Fonts: Poppins (heading) + Inter (body), token Bab 4 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Navigasi: flex container, logo kiri, menu + keranjang kanan -->
  <header class="site-header">
    <nav class="site-nav" aria-label="Navigasi utama">
      <a class="site-nav-brand" href="index.html">Tokosaya</a>
      <div class="site-nav-kanan">
        <ul class="site-nav-menu">
          <li><a href="index.html" class="site-nav-link site-nav-link-aktif">Beranda</a></li>
          <li><a href="katalog.html" class="site-nav-link">Katalog</a></li>
          <li><a href="tentang.html" class="site-nav-link">Tentang</a></li>
          <li><a href="kontak.html" class="site-nav-link">Kontak</a></li>
        </ul>
        <!-- Halaman keranjang dibangun di Bab 11; prototipe memakai tanda pagar -->
        <a class="site-nav-keranjang" href="#">Keranjang (0)</a>
      </div>
    </nav>
  </header>

  <!-- Hero: flex column, konten di tengah -->
  <section class="hero">
    <h1 class="hero-title">Peralatan Kerja Digital untuk Semua</h1>
    <p class="hero-subtitle">Keyboard, mouse, hingga monitor — pilih perangkat kerja Anda dengan harga UMKM yang jujur.</p>
    <a class="hero-cta" href="katalog.html">Lihat Katalog</a>
  </section>

  <!-- Baris kartu produk: flex-wrap, 8 produk baku -->
  <main>
    <section class="produk-unggulan">
      <h2>Katalog Produk</h2>
      <div class="produk-row">

        <article class="produk-card">
          <img class="produk-gambar" src="img/produk-keyboard-kx210.svg" alt="Keyboard Mekanis KX-210" width="400" height="250">
          <span class="produk-flag produk-flag-best">Best Seller</span>
          <h3 class="produk-nama">Keyboard Mekanis KX-210</h3>
          <p class="produk-kategori">Aksesori Input</p>
          <p class="produk-harga">Rp650.000</p>
          <p class="produk-deskripsi">Keyboard mekanis 87 tombol dengan switch biru untuk kerja lama yang nyaman.</p>
        </article>

        <article class="produk-card">
          <img class="produk-gambar" src="img/produk-mouse-mw88.svg" alt="Mouse Wireless MW-88" width="400" height="250">
          <span class="produk-flag produk-flag-tersedia">Tersedia</span>
          <h3 class="produk-nama">Mouse Wireless MW-88</h3>
          <p class="produk-kategori">Aksesori Input</p>
          <p class="produk-harga">Rp185.000</p>
          <p class="produk-deskripsi">Mouse wireless 2,4 GHz dengan sensor presisi 1600 DPI.</p>
        </article>

        <article class="produk-card">
          <img class="produk-gambar" src="img/produk-headphone-hs15.svg" alt="Headphone Studio HS-15" width="400" height="250">
          <span class="produk-flag produk-flag-tersedia">Tersedia</span>
          <h3 class="produk-nama">Headphone Studio HS-15</h3>
          <p class="produk-kategori">Audio</p>
          <p class="produk-harga">Rp425.000</p>
          <p class="produk-deskripsi">Headphone over-ear dengan bantalan lembut untuk rapat audio jangka panjang.</p>
        </article>

        <article class="produk-card">
          <img class="produk-gambar" src="img/produk-monitor-mr241.svg" alt="Monitor IPS 24 inci MR-241" width="400" height="250">
          <span class="produk-flag produk-flag-best">Best Seller</span>
          <h3 class="produk-nama">Monitor IPS 24&#8243; MR-241</h3>
          <p class="produk-kategori">Layar</p>
          <p class="produk-harga">Rp1.899.000</p>
          <p class="produk-deskripsi">Monitor IPS 24 inci full HD yang jernih untuk kerja tabel &amp; laporan.</p>
        </article>

        <article class="produk-card">
          <img class="produk-gambar" src="img/produk-flashdrive-fd64.svg" alt="Flash Drive 64GB FD-64" width="400" height="250">
          <span class="produk-flag produk-flag-tersedia">Tersedia</span>
          <h3 class="produk-nama">Flash Drive 64GB FD-64</h3>
          <p class="produk-kategori">Penyimpanan</p>
          <p class="produk-harga">Rp95.000</p>
          <p class="produk-deskripsi">Flash drive 64GB untuk arsip dokumen dan tugas mahasiswa.</p>
        </article>

        <article class="produk-card">
          <img class="produk-gambar" src="img/produk-charger-cp30.svg" alt="Charger Cepat 30W CP-30" width="400" height="250">
          <span class="produk-flag produk-flag-tersedia">Tersedia</span>
          <h3 class="produk-nama">Charger Cepat 30W CP-30</h3>
          <p class="produk-kategori">Daya</p>
          <p class="produk-harga">Rp120.000</p>
          <p class="produk-deskripsi">Charger 30W untuk pengisian cepat ponsel dan tablet saat mengetik di kafe.</p>
        </article>

        <article class="produk-card">
          <img class="produk-gambar" src="img/produk-speaker-bt5.svg" alt="Speaker Bluetooth BT-5" width="400" height="250">
          <span class="produk-flag produk-flag-stok">Stok Terbatas</span>
          <h3 class="produk-nama">Speaker Bluetooth BT-5</h3>
          <p class="produk-kategori">Audio</p>
          <p class="produk-harga">Rp285.000</p>
          <p class="produk-deskripsi">Speaker bluetooth portabel dengan suara bersih untuk presentasi kelompok.</p>
        </article>

        <article class="produk-card">
          <img class="produk-gambar" src="img/produk-webcam-wc720.svg" alt="Webcam HD WC-720" width="400" height="250">
          <span class="produk-flag produk-flag-baru">Baru</span>
          <h3 class="produk-nama">Webcam HD WC-720</h3>
          <p class="produk-kategori">Video</p>
          <p class="produk-harga">Rp310.000</p>
          <p class="produk-deskripsi">Webcam 720p dengan mikrofon bawaan untuk kelas online dan wawancara.</p>
        </article>

      </div>
    </section>
  </main>

  <!-- Footer sederhana: flex satu baris, menekuk pas sempit -->
  <footer class="site-footer">
    <p class="footer-brand">Tokosaya</p>
    <p class="footer-teks">Belanja Tepat, Kirim Cepat — Jl. Digital Raya No. 10, Jakarta &middot; halo@tokosaya.id &middot; (021) 555-0199</p>
  </footer>

</body>
</html>
```

Penjelasan: dokumen ini memakai `<a>` sebagai tombol buat keranjang dan CTA karena keduanya memang berfungsi sebagai link tujuan. Nama kelasnya mengikuti pola `blok-elemen` (`site-nav-keranjang`, `produk-flag`) sesuai konvensi proyek. Karakter `&#8243;` dan `&amp;` menunjukkan penggunaan entitas supaya karakter khusus nggak dibaca sebagai markup.

File: tokosaya-css/css/style.css

```css
/* Tokosaya — Bab 6: flexbox buat navigasi, hero, dan baris kartu produk. */

/* 1) Design token baku (Bab 4) */
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

/* 2) Reset ringan dan dasar */
* { box-sizing: border-box; margin: 0; }

body {
  font-family: var(--font-body);
  color: var(--clr-body);
  background-color: var(--clr-bg);
  line-height: 1.6;
}

h1, h2, h3 { font-family: var(--font-heading); color: var(--clr-dark); }

img { display: block; max-width: 100%; }

a:focus-visible {
  outline: 3px solid var(--clr-primary);
  outline-offset: 2px;
}

/* 3) Site-nav: flex container satu baris */
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--clr-surface);
  border-bottom: 1px solid var(--clr-border);
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 24px;
}

.site-nav-brand {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--clr-primary);
  text-decoration: none;
}

.site-nav-kanan {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
}

.site-nav-menu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.site-nav-link {
  color: var(--clr-body);
  text-decoration: none;
  font-weight: 500;
}

.site-nav-link:hover { color: var(--clr-primary); }

.site-nav-link-aktif { color: var(--clr-primary); font-weight: 600; }

.site-nav-keranjang {
  background-color: var(--clr-primary);
  color: #FFFFFF;
  padding: 8px 16px;
  border-radius: var(--radius);
  text-decoration: none;
  font-weight: 600;
}

.site-nav-keranjang:hover { background-color: var(--clr-primary-dark); }

/* 4) Hero: flex column di tengah */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 64px 24px;
  text-align: center;
  background: linear-gradient(180deg, #FFFFFF 0%, var(--clr-bg) 100%);
}

.hero-title { font-size: clamp(1.5rem, 4vw, 2.5rem); color: var(--clr-dark); }

.hero-subtitle { max-width: 640px; }

.hero-cta {
  background-color: var(--clr-primary);
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: var(--radius);
  text-decoration: none;
  font-weight: 600;
}

.hero-cta:hover { background-color: var(--clr-primary-dark); }

/* 5) Baris kartu produk: flex-wrap */
.produk-unggulan { padding: 48px 24px; }

.produk-unggulan h2 {
  text-align: center;
  margin-bottom: 32px;
}

.produk-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.produk-card {
  flex: 0 1 250px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  padding: 16px;
}

.produk-gambar {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  background-color: var(--clr-bg);
}

.produk-flag {
  align-self: flex-start;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 4px 10px;
  border-radius: 999px;
}

.produk-flag-best { background-color: var(--clr-accent); }
.produk-flag-tersedia { background-color: var(--clr-success); }
.produk-flag-stok { background-color: var(--clr-danger); }
.produk-flag-baru { background-color: var(--clr-primary); }

.produk-nama { font-size: 1rem; }

.produk-kategori { font-size: 0.85rem; color: var(--clr-primary); }

.produk-harga {
  font-weight: 700;
  color: var(--clr-dark);
  margin-top: auto;
}

.produk-deskripsi { font-size: 0.9rem; }

/* 6) Footer sederhana */
.site-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 32px 24px;
  background-color: var(--clr-dark);
}

.footer-brand {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.1rem;
  color: #FFFFFF;
}

.footer-teks { color: #E2E8F0; }
```

Penjelasan: file ini dibagi jadi enam blok bernomor supaya alurnya mudah diikuti, mirip pola organisasi Bab 3. Bagian menu dan kelompok kanan sama-sama memakai `flex-wrap`, jadi penekukannya terjadi dua lapis: mula-mula seluruh kelompok kanan turun ke baris berikutnya, lalu kalau layar makin sempit link menunya ikut menekuk di dalam kelompok itu. `margin-top: auto` pada `.produk-harga` adalah trik dari 6.3 buat merapikan posisi harga di dasar kartu.

### Penjelasan Kode

Ada tiga keputusan penting di sini yang layak kamu lihat lagi. `justify-content: space-between` pada `.site-nav` bekerja paling pas kalau ada **dua anak langsung** (merek dan kelompok kanan). Itulah alasan `.site-nav-kanan` perlu dibuat: kalau anak langsungnya lebih dari dua, ruang kosong justru menyebar ke tengah menu dan baris kedua bisa terlihat pincang. `align-items: center` pada `.site-nav` membuat logo, link, dan tombol tetap sejajar vertikal tanpa perlu akrobat padding. Terakhir, `object-fit: cover` pada `.produk-gambar` menjaga tinggi tetap 140 px, jadi gambar apa pun akan dipotong secukupnya dari tengah supaya delapan kartu tetap terlihat seragam walau sumber SVG-nya berbeda-beda.

### Hasil yang Diharapkan

**Teramati:** navigasi satu baris di layar lebar dengan logo di pojok kiri kekuningan-ungu (`--clr-primary`) dan keranjang di pojok kanan; pas jendela disusut, kelompok kanan turun sebagai satu blok ke baris kedua, tetap bersisian dengan merek; baris kartu tersusun 4-4 atau 3-3-2 sesuai lebar; *badge* berwarna semantik (kuning Best Seller, hijau Tersedia, merah Stok Terbatas, indigo Baru); harga sejajar dasar kartu; hero tertengah penuh dengan satu CTA.

**Terukur:** pada lebar wadah W, jumlah kartu per baris kira-kira `floor((W + 24) / (250 + 24))` (basis `flex-basis` 250 px, gap 24 px). Pada jendela 1280 px, lebar konten baris jadi 1232 px (dikurangi dua sisi padding 24 px), sehingga diharapkan 4 kartu per baris dan delapan kartu menghasilkan dua baris. Lencana `flex` muncul di DevTools pada `.site-nav` dan `.produk-row`; pada ukuran sempit 320 px, lebar `.produk-card` mengikuti lebar layar tanpa *horizontal scrollbar* (periksa panel Elements — lebar dokumen nggak melebihi ukuran viewport).

### Troubleshooting

**Masalah:** Kartu produk tergulir keluar layar; muncul *horizontal scrollbar* pas jendela susut.
**Penyebab:** `.produk-row` belum menjadi flex container (properti `display: flex` tertinggal), sehingga `flex-wrap` nggak berefek dan delapan kartu memaksa satu baris `block` biasa.
**Solusi:** Pastikan `.produk-row` memuat `display: flex;` dan `flex-wrap: wrap;`, lalu pastikan `.produk-card` memakai `flex: 0 1 250px;` (dengan nilai `shrink` 1) bukan `flex: 0 0 ...`.
**Pencegahan:** Tulis pasangan `display: flex` dan `flex-wrap: wrap` sekaligus setiap kali membangun baris kartu; beri catatan komentar di CSS sebagai penanda kebiasaan.

**Masalah:** Logo dan menu berjajar aneh; keranjang muncul di tengah, bukan di pojok kanan.
**Penyebab:** Kelompok kanan nggak pernah dibungkus satu elemen sehingga `space-between` membagi ruang di antara tiga-tiga anak (merek, menu, keranjang), atau pembungkusnya lupa diberi kelas.
**Solusi:** Pastikan markup memakai `.site-nav-kanan` sebagai pembungkus `<ul>` dan `<a>` keranjang, dan CSS `site-nav` benar-benar memilih elemen induknya (cek nama kelas di DevTools).
**Pencegahan:** Kebiasaan membangun navigasi: tentukan dulu anak-anak langsung dari flex container (dianjurkan jumlahnya dua), lalu tulis pembungkusnya sebelum konten menu.

**Masalah:** Tinggi kartu nggak seragam; baris kartu tampak bergelombang.
**Penyebab:** Wadah kartu diberi `align-items: center` (warisan dari bagian lain file CSS), sehingga `stretch` default nggak terjadi; kartu jadi sependek isi masing-masing lalu di tengahkan.
**Solusi:** Hapus `align-items: center` pada `.produk-row` (biarkan default `stretch`), lalu pakai `margin-top: auto` pada `.produk-harga` buat menyejajarkan harga ke dasar.
**Pencegahan:** Pas menata baris kartu, tulis properti penyelarasan cuma kalau alasan perataannya tertulis di komentar; jangan meniru properti wadah dari pola lain tanpa mengecek ulang.

**Masalah:** Pas layar sempit banget, teks menu menumpuk bertabrakan dengan logo; baris kedua tampak berantakan.
**Penyebab:** `gap` pada `.site-nav` terlewat sehingga baris kedua nggak punya jarak vertikal yang memisahkan diri (padahal `flex-wrap` bekerja). 
**Solusi:** Tambahkan `gap: 16px;` (atau `row-gap: 16px`) pada `.site-nav` dan `site-nav-kanan`, lalu kalau perlu memperlancar jarak per-baris pakai `row-gap`.
**Pencegahan:** Pas `flex-wrap` aktif, selalu tulis `row-gap` bareng `gap` karena jarak antar-baris dan antar-kolom sering butuh nilai berbeda.

## Studi Kasus

Aplikasi informasi perpustakaan kampus (Sistem Informasi Perpustakaan) butuh **toolbar** di atas halaman katalog buku: judul aplikasi di kiri, bilah pencarian di tengah, lalu tombol filter kategori dan link "Bantuan" di kanan. Semua elemen itu idealnya tetap satu baris di monitor lab komputer, tapi tetap rapi pas dibuka di HP. Ini contoh kasus yang pas buat flexbox: `.toolbar` dijadikan flex container dengan `gap: 16px`, `align-items: center`, dan `flex-wrap: wrap`; bilah pencarian diberi `flex: 1 1 240px` supaya mengisi sisa ruang di tengah; lalu kelompok kanan didorong dengan `margin-left: auto`.

Ada detail teknis yang menarik di sini: fitur pencarian itu cukup berupa `<form method="get" action="katalog.html">` dengan `<label for>` yang terhubung ke `<input type="search">`. Semuanya masih HTML murni tanpa JavaScript, dan pengiriman `GET` dari browser udah cukup buat memindahkan pengguna ke hasil. Yang perlu kamu jaga adalah aksesibilitasnya: label harus jelas, tombol "Cari" harus bermakna, target sentuh minimal 44×44 px sesuai WCAG, dan `:focus-visible` harus tetap kelihatan pas halaman dipakai dengan keyboard. Dalam skenario nyata, tombol "Pinjam" dan "Kembali" yang diletakkan berdampingan juga lebih enak dipilih karena **jarak kelompok** (`gap`) memberi ruang buat jari, bukan margin yang cuma menempel di satu sisi. Pertanyaan diskusinya: kalau isi toolbar bertambah jadi sembilan butir, apakah `flex-wrap` masih cukup, atau justru lebih enak diatur pakai Grid pada Bab 7?

## Latihan Mandiri

1. Dalam satu paragraf (3-5 kalimat), jelaskan perbedaan *main axis* dan *cross axis* menggunakan analogi lorong asrama dari 6.1, lalu tunjukkan apa yang bergeser pas `flex-direction` berubah ke `column`.
2. Pada `.produk-row` proyekmu, ganti `flex: 0 1 250px` jadi `flex: 0 1 200px`. Susutkan jendela dan catat lebar pas jumlah kartu per baris berganti; jelaskan kenapa basis mengubah momen penekukan.
3. Ubah footer praktikum jadi tiga kolom ala 6.5: kolom pertama merek dan tagline, kolom kedua menu `ul`, kolom ketiga *media object* email dan telepon Tokosaya. Kumpulkan kode CSS lengkapnya.
4. Buat *media object* baru (komponen `berita-item`) buat dua pengumuman perpustakaan: ikon bulat di kiri, judul dan tanggal di kanan. Kumpulkan potongan HTML dan CSS-nya.
5. Di halaman hero, tambahkan link teks "Lihat harga terbaru" di bawah CTA dengan kelas `hero-link` dan jarak `gap`; pastikan cuma satu CTA utama yang tetap menonjol. Jelaskan alasannya satu-dua kalimat.
6. Cek potongan `.produk-row { display: flex; align-items: center; }` dan jelaskan gejala apa yang akan muncul pada kartu, lalu tulis versi yang benar beserta alasan satu kalimat.

## Tugas

1. **Individu — Navigasi dan footer v6:** Terapkan pola Bab 6 pada `tentang.html` dan `kontak.html` di `tokosaya-css/`: tambahkan `site-nav` yang sama, dan footer multi kolom dengan *media object* kontak (data baku §5.1). Yang dikumpulkan: dua file HTML, `style.css`, dan tangkapan layar buat tiga ukuran jendela (± 360 px, 768 px, 1280 px — pakai device toolbar DevTools). Kriteria singkat: konsistensi kelas, penekukan yang rapi, fokus terlihat, tanpa CSS inline di luar demonstrasi.
2. **Kelompok (2-3 orang) — Katalog mini toolbar perpustakaan:** Bangun satu halaman `baca.html` di luar proyek utama berisi toolbar (judul, form pencarian, tombol filter) dan deret kartu buku `flex-wrap`, pakai minimal enam properti flex yang dibahas. Keluaran: satu file HTML, satu CSS, dan daftar penggunaan (tabel "properti → alasan"). Kriteria: markup semantik, pola berdasar 6.2-6.7, dan penjelasan singkat pilihan `justify-content`-nya.

## Refleksi

1. Di bagian mana kamu merasa flexbox "menghemat kerja" dibanding pendekatan blok dan margin manual di Bab 3-5?
2. Kapan kamu akan memilih `margin-left: auto` alih-alih `justify-content: space-between`? Apa beda perilakunya pas anak berjumlah tiga?
3. Apa risiko moral `order` terhadap pengguna *screen reader*, dan batas kecil mana yang membuatnya tetap layak dipakai?
4. Setelah mengerjakan kartu 8 produk, kapan kamu menyimpulkan butuh Grid? Apa sinyal desain yang memberi tahu itu?
5. Gimana kebiasaan mengubah ukuran jendela mengubah caramu menilai kualitas layout sendiri?

## Rangkuman

- Flexbox adalah sistem layout **satu dimensi**: satu baris atau satu kolom, bukan kisi dua arah.
- *Main axis* diatur `flex-direction`; `justify-content` membagi ruang di sana; `align-items` mengurusi *cross axis*; `flex-wrap` mengizinkan baris menekuk.
- `gap` menghilangkan margin ganda; `row-gap`/`column-gap` mengatur antar-baris.
- Item punya `flex-basis`/`flex-grow`/`flex-shrink` (singkat: `flex`), `align-self`, dan `order` (hemat).
- Navigasi Tokosaya: wadah `flex` + dua anak; `margin-left: auto` atau `space-between`; menekuk berlapis pas sempit.
- Footer multi kolom hidup dari `flex-wrap` + basis tetap; *media object* dari ikon tetap + teks `flex: 1`.
- Hero diatur `flex-direction: column` + `align-items: center` + satu CTA tebal.
- Baris kartu 8 produk baku memakai `flex: 0 1 250px` + `wrap` → responsif tanpa media query, dengan catatan keterbatasan perataan baris.

**Jembatan ke Bab 7:** Flexbox menyelesaikan satu sumbu dengan elegan, tapi katalog Tokosaya dan dasbor admin dua arah menginginkan jumlah kolom yang pasti, rata antar-baris, dan area header-sidebar-konten yang terkelola. Bab 7 memperkenalkan Grid dua dimensi, `fr`, media query *breakpoint*, dan strategi *mobile first* — layout yang akan dipadukan dengan flexbox di setiap halaman proyek, dan jadi bahan utama UTS.

## Evaluasi

### Pilihan Ganda

1. Saat Anda menulis `display: flex` pada sebuah elemen, elemen itu menjadi... 
A. flex item yang menyusut otomatis
B. flex container, dan anak-anaknya menjadi flex item
C. blok biasa dengan jarak internal otomatis
D. tabel dengan kolom otomatis

2. Pada `flex-direction: row`, `justify-content: space-between` membagi... 
A. ruang sisa pada sumbu silang agar item sama tinggi
B. ruang sisa pada main axis, tanpa ruang di tepi luar pertama-terakhir
C. ruang pada sumbu silang agar teks sejajar atas
D. ukuran font agar semua item muat

3. Properti dengan efek "menyelaraskan item pada sumbu silang" adalah... 
A. `justify-content`
B. `align-items`
C. `order`
D. `flex-wrap`

4. Untuk membuat delapan kartu pindah baris dengan rapi ketika ruang habis, perlu ditambahkan... 
A. `overflow: hidden`
B. `flex-wrap: wrap`
C. `position: sticky`
D. `justify-content: space-evenly`

5. `flex: 1 1 200px;` berarti... 
A. grow 1, shrink 1, basis 200 px
B. grow 200, shrink 1, basis 1
C. order 1, align 1, ukuran 200%
D. basis 1, grow 1, shrink 200

6. Berbeda dengan margin antar-item, keunggulan `gap` adalah... 
A. hanya bekerja pada arah vertikal
B. memberi jarak hanya di antara item, tidak menambah ruang di tepi luar
C. mencegah item menyusut
D. mengubah urutan visual anak

7. Manakah pasangan yang memengaruhi **sumbu yang sama** ketika `flex-direction: column`? 
A. `justify-content` dan `align-items`
B. `order` dan `gap`
C. `justify-content` dan `gap` (keduanya di main axis vertikal)
D. `flex-wrap` dan `align-self`

8. Perhatikan CSS: `.row { display:flex; flex-wrap:wrap; } .item { flex: 0 1 260px; }` dengan wadah lebar 560 px, tanpa gap. Berapa item yang muat berdampingan? *(butir analisis — sulit ringan)*
A. 2 item per baris; sisanya turun baris dan merapat ke kiri
B. 3 item per baris karena basis dibagi merata
C. 1 item, karena flex item tidak boleh berjajar
D. semua item menyusut paksa muat satu baris

### Benar atau Salah

1. `align-items: center` pada wadah `flex-direction: row` menengahkan item secara vertikal. 
2. `order` mengubah urutan dokumen HTML sehingga *screen reader* membaca sesuai nilai `order`. 
3. `margin-left: auto` pada satu flex item mendorong item itu ke ujung akhir main axis. 
4. `flex-basis` mengesampingkan lebar `width` untuk flex item sepanjang main axis (bila keduanya ditulis). 
5. Nilai `stretch` adalah default `align-items`, sehingga kartu pada `.produk-row` otomatis sama tinggi selama tidak ditimpa. 

### Analisis Kode

1. Perhatikan potongan ini dan jawab: gejala apa yang timbul di baris kartu produk, dan bagaimana perbaikannya (tulis nilai properti yang benar serta alasannya)?
File: tokosaya-css/css/soal-analisis.css

```css
.produk-row {
  display: flex;
  align-items: center;
}

.produk-card {
  flex: 0 0 300px;
}
```

2. Potongan kedua berasal dari versi nav Tokosaya; amati dan jawab: mengapa keranjang tergeser dari pojok kanan dan baris kedua pincang saat layar sempit? Tunjukkan perbaikan markup/CSS minimal.

File: tokosaya-css/css/soal-analisis-2.css

```css
.site-nav {
  display: flex;
  align-items: center;
}
.site-nav-brand { margin-right: 24px; }
.site-nav-menu { display: flex; gap: 16px; }
.site-nav-keranjang { margin-left: 24px; }
```

### Soal Praktik

1. Bangun halaman `toolbar.html` aplikasi perpustakaan sesuai studi kasus: judul kiri, form pencarian (label + input + tombol) di tengah dengan `flex: 1 1 240px`, dua tombol filter di kanan; wadah memakai `flex-wrap` dan `gap`. Kumpulkan HTML dan CSS lengkap plus tangkapan layar dua ukuran jendela.
2. Terapkan footer multi kolom tiga kolom (merek, menu, media object kontak) pada `tentang.html` milik Anda, memakai basis kolom 240 px dan gap 48 px, lalu jelaskan satu kalimat apa yang berubah bila viewport menyempit.

### Kunci Jawaban

<details>
<summary>Buka kunci jawaban Evaluasi</summary>

**Pilihan Ganda:** 1. B — `display: flex` mengangkat wadah dan anak-anaknya menjadi flex item. 2. B — `space-between` menghabiskan sisa ruang di antara item; tepi luar pertama-terakhir menempel. 3. B — `align-items` bekerja di cross axis. 4. B — `flex-wrap: wrap` mengizinkan penekukan baris. 5. A — urutan nilai `flex` adalah `grow shrink basis`. 6. B — gap menyelipkan jarak di antara item saja. 7. C — pada `column`, main axis vertikal sehingga `justify-content` (mengatur main axis) dan `gap` sama-sama menyusuri arah itu. 8. A — dua kartu basis 260 px muat di 560 px; tanpa `gap`, sisanya turun baris berikutnya merapat kiri.

**Benar atau Salah:** 1. Benar — cross axis `row` adalah vertikal. 2. Salah — `order` hanya mengubah urutan visual; urutan dokumen dan pembacaan assistive tetap mengikuti HTML. 3. Benar — auto margin menyerap ruang sisa di sisinya. 4. Benar — itulah alasan kartu pada proyek seragam tanpa aturan tinggi manual.

**Analisis Kode:** (1) `flex: 0 0 300px` melarang penyusutan sehingga baris melebihi lebar wadah dan muncul *horizontal scrollbar*; `align-items: center` membuat kartu tidak sama tinggi. Perbaikan: `flex: 0 1 300px` atau `flex: 0 1 260px` plus `flex-wrap: wrap` dan biarkan `align-items` default (`stretch`). (2) Pada potongan kedua, tidak ada pembungkus kelompok kanan sehingga tepi kiri-kanan tak bisa didorong rapi, penekukan tak diatur (`flex-wrap` hilang), dan jarak diatur margin per-item yang menyusahkan ketika item turun baris. Perbaikan: beri `flex-wrap: wrap` di `.site-nav`, bungkus menu dan keranjang dalam satu elemen `.site-nav-kanan` ber-`gap`, lalu ganti margin manual dengan `justify-content: space-between` atau `margin-left: auto` pada bungkus.

**Soal Praktik:** (1) Wadah `.toolbar` bertipe `display:flex; flex-wrap:wrap; gap:16px; align-items:center;`; pencarian `flex: 1 1 240px`; tombol kanan dirapatkan kelompok `margin-left: auto`. (2) Footer memakai tiga anak `flex: 1 1 240px` di wadah `flex-wrap` — saat menyempit, kolom paling kanan turun baris dengan lebar penuh dan jarak antar-kolom tetap 24-32 px oleh `gap`.

</details>

## Referensi

1. MDN Web Docs. (2026). *Basic concepts of flexbox*. Diambil 5 September 2026, dari https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
2. Google. (2026). *Learn CSS: Flexbox*. web.dev. Diambil 5 September 2026, dari https://web.dev/learn/css/flexbox/
3. Duckett, J. (2011). *HTML & CSS: Design and Build Websites*. Indianapolis: Wiley.
4. Robbins, J. N. (2018). *Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics* (5th ed.). Sebastopol: O'Reilly Media.
5. Marcotte, E. (2011). *Responsive Web Design: Crafting an Experience for a Broad Range of Screens and Devices*. Brooklyn: A Book Apart.