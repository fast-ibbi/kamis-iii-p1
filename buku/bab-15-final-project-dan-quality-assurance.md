# BAB 15 — Final Project dan Quality Assurance Website

## Deskripsi Singkat

Bab ini adalah ruang menunggu terakhir menuju mahkota semester: final project website pada Bab 16. Setelah Bab 14 melatih translasi desain jadi halaman nyata, kini seluruh halaman proyek `tokosaya-bootstrap/` kamu harus dibersihkan, diverifikasi, dan dinyatakan siap rilis lewat disiplin *quality assurance* (QA). Bab ini mengajarkan QA *sprint* yang lengkap: perawatan kualitas berbasis *checklist*, *peer review* antarteman, perbaikan terarah, pengujian lintas perangkat, audit aksesibilitas, serta *debugging* CSS di DevTools. Output resmi bab ini adalah artefak milestone M7 pada pertemuan 15, berupa QA checklist dan satu versi *rilis kandidat* (release candidate).

## Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan mampu:

1. Menjelaskan anatomi final project website beserta keterkaitan setiap bagiannya dengan milestone M7 (QA + penyempurnaan) dan pedoman final project pada Bab 16.
2. Mengidentifikasi cacat organisasi folder dan penamaan file yang menghambat review, kolaborasi, serta pemeliharaan proyek web.
3. Menerapkan prinsip kode bersih (clean code) pada HTML dan CSS, termasuk kebiasaan komentar dan penghapusan kode mati.
4. Menerapkan praktik terbaik Bootstrap: memanfaatkan utilitas terlebih dahulu, membatasi CSS kustom, dan menghindari duplikasi serta `!important`.
5. Mengimplementasikan QA sprint: audit mandiri, peer review dengan checklist, pencatatan temuan, perbaikan berprioritas, uji ulang, dan penyiapan rilis kandidat.
6. Menganalisis temuan pengujian responsif, pengujian browser, audit aksesibilitas, serta inkonsistensi visual menggunakan toolset Chrome DevTools.
7. Mengevaluasi kesiapan rilis dengan checklist pra-deployment dan merancang skrip presentasi proyek sel tujuh menit.

## Capaian Pembelajaran

Bab ini menutup lingkar kompetensi teknis mata kuliah dan memperkuat **CPMK 6** (disiplin kualitas serta integrasi proyek akhir di ujian akhir semester), dengan menunjang **CPMK 5** (membangun layout responsif modern dengan framework CSS). Sub-capaian yang diukur pada bab ini adalah:

- **S15.1** — Menilai kesiapan struktur proyek (anatomi, folder, penamaan, kode bersih) terhadap checklist QA yang terukur.
- **S15.2** — Melaksanakan QA sprint pada draft final project: audit mandiri, peer review silang, pencatatan temuan, perbaikan, dan uji ulang regresi (regression).
- **S15.3** — Menyusun artefak milestone M7: QA checklist yang terisi, laporan temuan profesional, dan satu paket rilis kandidat yang siap dinilai pada Bab 16.

Pemetaannya: subbab Materi 15.1–15.4 menunjang S15.1; subbab 15.5–15.7 dan praktikum menunjang S15.2; subbab 15.8, studi kasus, dan tugas menunjang S15.3. Asesmennya berupa praktikum QA sprint, latihan mandiri, evaluasi bab, serta tugas laporan QA + rilis kandidat. Pedoman final project yang lengkap — struktur folder, rubrik, dan format pengumpulan — tersedia pada dokumen pendamping `bagian-project-akhir/panduan-final-project.md` dan pedoman ujian di Bab 16.

## Kata Kunci

*Quality assurance* (QA) — upaya sistematis memastikan produk memenuhi standar kualitas sebelum diserahkan, *checklist QA* — daftar periksa terukur biar audit nggak bergantung pada ingatan, *rilis kandidat* (release candidate) — versi proyek yang dinyatakan siap rilis menunggu persetujuan akhir, *peer review* — pemeriksaan hasil kerja oleh rekan sekelas dengan kriteria bersama, *test matrix* — matriks pengujian halaman × perangkat sebagai peta cakupan QA, *regression* — cacat yang kembali muncul setelah satu perubahan diterapkan, *W3C validator* — alat resmi memeriksa kesahihan (validitas) markup, *audit aksesibilitas* — pemeriksaan menyeluruh keterbacaan akses (accessibility) menurut WCAG 2.2, *debugging* — proses menelusuri dan memperbaiki cacat tampilan secara terarah, *user acceptance testing* (UAT) — pengujian penerimaan oleh pengguna/klien sebelum peluncuran resmi.

## Apersepsi

Bayangkan tim tiga mahasiswa Sistem Informasi yang menyelesaikan magang di Tokosaya pada pekan terakhir. Website `tokosaya-bootstrap/` udah tampak sempurna di laptop mereka: hero memukau, katalog rapi, checkout mengalir. Malam sebelum tayang, pemilik toko membukanya sendiri di HP-nya — dan menemukan halaman katalog menampilkan gulir horizontal, kartu produk menumpuk berantakan, sementara label form kontak hilang sehingga pembaca layar (screen reader) menyebut bidang surel sebagai "edit kosong". Website yang di laptop terlihat matang ternyata belum siap menerima pengunjung sungguhan.

Cerita di atas adalah kasus klasik pada pengembangan sistem informasi: kualitas nggak pernah tinggal, ia harus dirawat. Layanan informasi publik yang diluncurkan tanpa perawatan kualitas kerap mengecewakan pengguna justru di hari yang paling penting, walaupun seluruh fitur "terasa selesai". Analoginya kayak kalibrasi alat laboratorium: data nggak boleh diumumkan sebelum tim memastikan alat pengukurnya akurat, sebab kesalahan alat mengkontaminasi seluruh kesimpulan. Kualitas *diperiksa ulang* (recheck), bukan diasumsikan.

Karena itu semester ini kamu nggak berhenti di "website jadi". Pertemuan 15 adalah milestone M7. Isinya satu putaran QA + penyempurnaan seluruh proyek dengan tiga mesin yang saling menguatkan: checklist QA (biar audit terukur dan setara buat semua orang), peer review (biar mata segar menemukan yang terlewat), dan rilis kandidat (biar perubahan berhenti pada satu titik yang bisa dibuktikan). Bab ini memandu kamu menjalankan putaran itu secara utuh, memakai alat yang udah kamu kenal — DevTools, W3C validator, dan checklist aksesibilitas Bab 13 — lalu menyerahkan hasilnya dalam laporan yang profesional. Setelah rilis kandidat terbentuk, bab berikutnya akan menuntut kamu membawanya ke forum ujian: Bab 16.

## Materi Pembelajaran

Bab ini terdiri atas delapan subbab yang mengikuti alur kerja QA di dunia kerja: memahami bentuk jadi (15.1), merapikan struktur proyek (15.2–15.3), menerapkan praktik terbaik framework (15.4), menguji lintas perangkat dan browser (15.5), memeriksa aksesibilitas (15.6), men-debug konsistensi visual (15.7), lalu mengunci kesiapan rilis dan presentasi (15.8). Ikuti subbab ini berurutan, karena masing-masing menyiapkan bahasanya buat subbab berikutnya.

### 15.1 Anatomi Final Project Website

*Final project* adalah proyek akhir yang mengintegrasikan seluruh keterampilan mata kuliah — HTML semantik, CSS, framework, responsif, aksesibilitas, dan translasi desain — ke dalam satu website statis yang utuh. Pada buku ini bentuknya ditetapkan di Bab 16 sebagai ujian akhir semester: pilihan di antara delapan kasus (company profile, katalog produk, sistem informasi akademik, portal berita, landing page startup, website event, website travel, dan website UMKM) dengan ketentuan minimal empat halaman. Sebelum menguji apa pun, kamu harus paham dulu dari apa website itu dianatomi — sebab tiap bagian punya risiko khas yang berbeda, jadi butuh pemeriksaan yang berbeda pula.

Anatomi final project adalah peta bagian wajib website dan perannya. Terdapat sembilan bagian yang menurut pedoman Bab 16 wajib hadir: *homepage*, navigasi, hero, beberapa section konten, kartu/komponen, form, footer, layout responsif, dan design system sederhana. Pada proyek Tokosaya, sembilan bagian itu tinggal di empat halaman baku: `index.html` (hero + produk unggulan), `katalog.html` (grid produk delapan katalog baku: KX-210, MW-88, HS-15, MR-241, FD-64, CP-30, BT-5, dan WC-720), `produk.html` (detail satu produk), serta `kontak.html`/`checkout.html` (form). Setiap halaman berlayar di bawah tiga lebar layar (HP, tablet, desktop) dan menyerupai style guide yang kamu buat di Bab 12.

Tabel berikut memetakan bagian anatomi dengan fokus QA-nya — tabel ini sekaligus menjadi kerangka checklist pada Praktikum:

| Bagian anatomi | Peran dalam halaman | Fokus QA khas |
|---|---|---|
| Homepage | Pintu utama dan kesan pertama | Judul hero lengkap, tombol "Lihat Katalog" berfungsi, nggak ada gulir horizontal |
| Navigasi | Perpindahan antarhalaman | Empat menu baku aktif (Beranda, Katalog, Tentang, Kontak), link nggak mati |
| Hero | Penegasan pesan merek | Tagline "Belanja Tepat, Kirim Cepat" konsisten, kontras teks-latar memenuhi WCAG |
| Section konten | Narasi nilai produk | Hierarki heading nggak melompat, jarak mengikuti skala 8 px |
| Kartu/komponen | Wadah konten modular | 8 produk baku tampil, badge semantik benar, radius konsisten |
| Form | Titik kerja sama pengguna | Setiap label terhubung `for`–`id`, `autocomplete` terisi, pesan peringatan bermakna |
| Footer | Penutup dan kontak | Alamat Jl. Digital Raya No. 10, halo@tokosaya.id, (021) 555-0199 konsisten |
| Layout responsif | Kepatuhan lintas layar | Test matrix terisi buat tiga breakpoint 576/768/992 |
| Design system | Konsistensi antarhalaman | Token warna, font Poppins/Inter, dan radius mengacu ke styleguide |

Kenapa anatomi perlu diuraikan sejauh ini? Karena QA tanpa peta berubah jadi petualangan: mahasiswa memeriksa halaman yang dia suka, lalu melewatkan halaman yang sepi. Dengan anatomi, pengecekan jadi penyisiran sistematis yang bisa dijadwalkan dan dibuktikan. Ini pola yang sama dengan struktur laporan sistem informasi: tiap bagian punya tujuan terukur dan reviewer tahu ke mana harus melihat. Pas dosen membuka final project kamu di sesi Bab 16 — UAS: Final Project Website, bagian yang paling cepat ketemu cacatnya adalah bagian yang kamu lewatkan — jadi peta ini melindungi kamu dari kelemahan itu. Peta anatomi di atas selaras dengan dokumen pendamping `bagian-project-akhir/panduan-final-project.md`, sehingga nggak ada bagian proyek yang menguji sendiri tanpa pedoman.

### 15.2 Organisasi Folder dan Naming Convention

Setelah peta jelas, langkah pertama QA menyangkut rumahnya kode, bukan warna dan jadwal. Website yang isinya bagus tapi foldernya kacau bikin review susah, memicu link mati, dan memberi tanda bahaya ke penguji bahwa pemeliharaannya akan sulit. Dua disiplin yang menopang rumah kode adalah organisasi folder (penataan grup file) dan *naming convention* (kesepakatan penamaan file, folder, dan kelas). Keduanya murah dikerjakan di awal, tapi mahal diperbaiki belakangan.

Pola folder proyek siap tim pada buku ini udah kamu tahu dari Bab 9: satu folder akar proyek, satu folder `css/`, satu folder `img/`, dan file HTML datar di akar. Struktur akhir buat QA sprint jadi seperti berikut.

```
tokosaya-bootstrap/
├── index.html
├── katalog.html
├── produk.html
├── kontak.html
├── checkout.html
├── styleguide.html
├── qa-checklist.html
├── laporan-temuan.html
├── css/
│   └── style.css
└── img/
    ├── logo-tokosaya.svg
    ├── produk-keyboard-kx210.svg
    ├── produk-mouse-mw88.svg
    ├── produk-headphone-hs15.svg
    ├── produk-monitor-mr241.svg
    ├── produk-flashdrive-fd64.svg
    ├── produk-charger-cp30.svg
    ├── produk-speaker-bt5.svg
    └── produk-webcam-wc720.svg
```

Struktur di atas diberi ilustrasi tree biar mudah diverifikasi — dalam praktiknya folder inilah yang kamu serahkan sebagai rilis kandidat. Perhatikan empat konvensi yang memakai pola `blok-elemen` seragam (kebab-case, huruf kecil, tanda hubung): nama file deskriptif tapi ringkas, nama gambar memuat kategori produk beserta kode produk (`produk-keyboard-kx210.svg`, bukan `photo3.svg`), satu file CSS di `css/style.css`, dan alat QA ditaruh di akar biar mudah ditemukan reviewer. Nama file nggak pernah memuat spasi, huruf kapital, atau karakter khusus, sebab beberapa sistem file dan server memperlakukan `Produk Baru.html` berbeda dari `produk-baru.html`. Akibatnya, link yang baik secara lokal bisa mati begitu masuk *hosting*.

Kenapa disiplin ini penting buat QA? Pertama, *peer review* jalan cepat kalau reviewer menemukan semua file di tempat yang bisa diprediksi. Kedua, pencarian cacat menyapu folder secara menyeluruh, dan folder tertata bikin penyisiran nggak menyisakan blind spot. Ketiga, penamaan konsisten mengurangi salah ketik jalur (`src`, `href`) — salah satu sumber link mati paling umum pada proyek pemula. Terakhir, di dunia sistem informasi nyata, folder yang tertata adalah dokumen arsitektur: pengelola baru bisa membaca sejarah pemikiran tim cuma dari pohon folder. Pas ujian Bab 16, struktur folder yang rapi juga dipandang langsung oleh rubrik (kriteria "kualitas kode", khususnya).

### 15.3 Clean HTML & Clean CSS

Kode bersih (*clean code*) adalah kode yang mudah dibaca, mudah diubah, dan sulit disalahgunakan. Di bab-bab awal kamu udah belajar aturan kebersihannya secara terpencar; di sini kaidah itu terkumpul jadi paket audit final project. Ada dua pembaca kode kamu: manusia (mentor, reviewer, rekan satu tim, dosen) dan mesin (browser, validator, pembaca layar). Kode bersih melayani keduanya sekaligus, dan justru karena itu ia jadi pekerjaan QA yang paling murah sebelum pengujian menyeluruh dimulai.

Pada HTML, kaidah paketnya ringkas. Pakai DOCTYPE HTML5 dan `lang="id"` pada elemen `html`; sertakan `<meta name="viewport">` di setiap halaman; tuliskan satu `h1` per halaman dengan hierarki heading yang nggak melompat (`h1 → h2 → h3`); beri `alt` bermakna pada setiap `img`; hubungkan tiap `label` ke inputnya lewat pasangan `for`–`id`; pakai elemen semantik (Bab 2) daripada `div` buat header, nav, main, dan footer; indentasi dua spasi; tulis tag dan atribut dengan huruf kecil. Komentar dipakai seperlunya dan berbahasa Indonesia — cukup buat mengelompokkan bagian, bukan buat menceritakan ulang penjelasan teks.

Pada CSS, kebersihan ditentukan oleh tiga hal. Pertama, urutan file: token `:root` paling atas (Bab 4), kelanjutannya gaya dasar (base), komponen (kartu, nav), lalu perbaikan halaman spesifik. Kedua, penamaan kelas kebab-case dengan pola `blok-elemen` kayak `produk-card` dan `hero-title`, sehingga nama kelas mendeskripsikan peran, bukan tampilan sesaat (`font-biru-besar` adalah nama yang matang begitu desain berubah). Ketiga, kejujuran isi: hapus kode mati (aturan yang nggak pernah mengenai elemen apa pun), hapus duplikasi, dan jangan pakai `!important` sebagai jalan pintas — kalau tampilan melawan kamu, hampir selalu masalah kaskade atau *specificity* yang bisa dibereskan secara jujur (Bab 3).

Tabel kecil berikut menjadi alat audit cepat; pakai persis kayak ini pas peer review:

| Pemegang | Kebiasaan baik | Kebiasaan buruk pada proyek pemula |
|---|---|---|
| HTML | satu `h1`, heading berurutan | tiga `h1`, `h2` melompat ke `h5` |
| HTML | `label for` terhubung `id` input | label bebas tanpa link |
| HTML | `alt` deskriptif pada gambar produk | `alt="gambar"`, atau atribut hilang |
| CSS | satu file `css/style.css` berurutan | gaya tercecer di banyak file saling menimpa |
| CSS | penamaan `blok-elemen` kebab-case | `.merah`, `.aa`, `.fix2`, `.x1finalFIX` |
| CSS | token dipakai (`var(--clr-primary)`) | warna hex ditulis ulang di sepuluh tempat |
| CSS | dead code dihapus pas refactor | 120 baris tak pernah dipakai, tak ada yang berani menghapus |

Konteks sistem informasi memberi alasan yang kuat buat kebersihan ini. Laporan informasi rumah sakit, portal akademik, dan website layanan publik hidup bertahun-tahun, dan pengelolanya sering bukan penulis awalnya. Kode bersih itulah yang memungkinkan orang yang nggak menyusunnya memperbaikinya dengan aman. Pas QA sprint dijalankan (Praktikum), kebersihan kodemu menentukan seberapa cepat temuan bisa dilacak: aturan yang ganda dan komentar berbahasa lain menambah waktu cari — dan pada QA, waktu itu disebut biaya pemeliharaan.

### 15.4 Bootstrap Best Practices

Memakai Bootstrap bukan sekadar menyalin kelas dari daftar; ada praktik terbaik yang menjaga proyek tetap sehat selama bulan-bulan kerja. Prinsip kepalanya satu kalimat: *manfaatkan utilitas terlebih dahulu, tulis kustom seperlunya, dan jangan pernah berjuang melawan framework*. Prinsip ini disebut pola *utility-first*: sebelum bikin aturan CSS kustom, tanya dulu apa Bootstrap udah menyediakan jawabannya — `mb-3` buat jarak bawah, `text-center` buat perataan, `d-none d-md-block` buat penyembunyian per breakpoint, `rounded-3` buat sudut bulat. Kalau jawabannya ya, utilitas itulah yang dipakai.

Kalau utilitas nggak cukup — misalnya kartu butuh bayangan khas merek atau hero butuh latar gradien — barulah CSS kustom boleh menemani, dengan tiga aturan jaga. Pertama, kustom diberi komentar `/* kustom */` biar pembatasnya terlihat di review berikutnya. Kedua, kustom menumpang nilai dari token (Bab 4), bukan menulis ulang hex secara acak, sehingga perubahan merek cukup terjadi di satu tempat. Ketiga, jangan menimpa kelas baku Bootstrap dengan `!important`; kalau kamu butuh variasi komponen, buat kelas komponen sendiri di `css/style.css` dan pakai itu secara konsisten. Duplikasi adalah penyakit ketiga dan paling licik: dua aturan buat tujuan sama yang berbeda nilainya akan memangsa waktu debugging kamu di subbab 15.7.

Tabel pilihan berikut merangkum kapan memakai utilitas dan kapan memakai CSS kustom:

| Situation | Gunakan utilitas Bootstrap | Gunakan CSS kustom |
|---|---|---|
| Jarak, ukuran, perataan teks | `mb-3`, `px-4`, `text-center` — | — |
| Responsif display/hide | `d-none d-md-block`, `col-md-4` | — |
| Bentuk baku kartu, badge, tombol | `.card`, `.btn btn-primary`, `.text-bg-danger` | — |
| Identitas merek (warna, font, radius khas) | — | token + `/* konten kustom */` |
| Latar gradien hero, bayangan khas | — | kelas `hero-...`, `konten-kartu` |
| Pengecualian satu kasus langka | — | kelas tunggal, diberi komentar alasan |

Dua kejujuran praktis ikut menutup subbab ini. Pertama, beberapa komponen Bootstrap (navbar collapse, modal, carousel, accordion, dropdown) yang aslinya interaktif butuh file bundle JavaScript Bootstrap buat berfungsi — JavaScript ada di luar cakupan mata kuliah ini, jadi pada buku ini kamu cukup pakai struktur markup dan kelas status statisnya (sebagaimana dilatih Bab 10), lalu menulis komentar `<!-- Tanpa bundle JavaScript Bootstrap: interaksi di luar cakupan mata kuliah -->` di `head` setiap halaman. Kedua, kaitkan CDN pada versi pin yang terkunci: Bootstrap 5.3.3 dan Bootstrap Icons 1.11.3 — jangan menambah versi lain di tengah sprint QA, sebab mengganti versi framework menjelang rilis adalah sumber *regression* yang spektakuler. *⚠ version-sensitive: periksa getbootstrap.com buat perubahan mayor (Bootstrap 6).*

### 15.5 Responsive & Browser Testing

Website yang bagus di laptop kamu belum meyakinkan siapa pun; yang meyakinkan adalah website yang bagus di tiga puluh lebar layar yang berbeda. Pengujian responsif pada final project dijalankan lewat *test matrix*: tabel baris halaman × kolom breakpoint, tempat setiap sel diisi status (lulus atau temuan) dan catatan singkat. Matrix mengubah kerja pengujian dari "lihat-lihat sana-sini" jadi penyisiran yang bisa dijadwalkan dan dilaporkan: kalau satu sel belum terisi, kerja belum selesai — nggak ada tebing "sudah cukup".

Pilih breakpoint yang konsisten, yaitu breakpoint baku Bootstrap 576/768/992/1200 px yang udah kamu kenal sejak Bab 7 dan Bab 9. Disiplinkan jadi tiga kolom praktis: HP (360–575 px), tablet (768–991 px), dan desktop (992 px ke atas). Di setiap sel matrix, jalankan pemindaian lima titik yang urutannya stabil: (1) navigasi — menu terbaca, link hidup, nggak meluber; (2) hero — judul dan tombol muat tanpa terpotong; (3) grid kartu — kolom berubah wajar antartitik potong (collapsing atau multi-kolom, bukan menumpuk kacau); (4) form — label, input, dan tombol sejajar dan nggak melebar melebihi layar; (5) footer — link dan kontak tersusun kembali. Gulir horizontal pada lebar layar apa pun otomatis jadi temuan; ia bukan selera, ia cacat.

Alat utamanya adalah *device toolbar* pada Chrome DevTools (Bab 1 dan 7). Atur mode responsif, geser lebar 360 → 576 → 768 → 992 → 1200 sambil memperhatikan kelima titik di atas; simpan tangkapan layar buat setiap temuan biar laporan QA punya bukti. Lengkapi dengan *browser testing* antar-browser: Chrome sebagai browser utama plus satu browser lain (Firefox, Edge, atau Safari kalau tersedia) buat memastikan font bawaan, radius, dan media query dirender setara. Kamu nggak perlu menghafal perbedaan mesin rendering; cukup catat tampilan yang menyimpang sebagai temuan — browser lain sering mengaku-cacat pada hal yang tak terpikirkan, misalnya jarak bawaan elemen form.

Kalau perubahan gaya diterapkan di tengah sprint, jalankan uji ulang regresi (regression): pengujian ulang area yang sebelumnya sehat buat memastikan nggak pecah. Aturan praktisnya: setiap perubahan kaskade wajib disertai penyapuan cepat seluruh navigasi bawah dan satu halaman katalog — karena aturan CSS kustom buat satu halaman kadang diam-diam mengenai halaman lain. Contoh test matrix untuk Tokosaya kamu lihat pada Praktikum; polanya tinggal dipindai halaman demi halaman sampai seluruh sel memuat status dan tangkapan layar.

### 15.6 Accessibility Checking

Aksesibilitas bukan bab tambahan yang bisa ditunda sampai rilis; ia adalah kriteria rilis itu sendiri. Bab 13 udah membangun fondasinya: empat prinsip POUR (dapat dipersepsi, dapat dioperasikan, dapat dipahami, tangguh — *perceivable, operable, understandable, robust*) dan checklist WCAG 2.2 level A/AA. Subbab ini mengubah checklist itu jadi audit mandiri yang bisa kamu jalankan berkala selama QA sprint, memakai sumber WCAG 2.2 sebagai acuan resmi, sehingga temuan aksesibilitas pun punya nomor pasal yang bisa dilaporkan.

Lima pemeriksaan wajib membentuk inti audit. Pertama, teks alternatif (alt): setiap `img` produk memakai teks yang menjelaskan konten dan tujuan ("Keyboard Mekanis KX-210 dengan switch biru"), dan gambar dekoratif memakai `alt=""` (atribut kosong yang disengaja). Kedua, kontras: teks utama minimal rasio 4,5 : 1 terhadap latarnya (verifikasi rasio bisa dibantu pembaca warna pada DevTools), sesuai kriteria WCAG 2.2 level AA. Ketiga, struktur heading: satu `h1` per halaman dan nggak ada lompatan level. Keempat, form: setiap label terhubung, pesan status bermakna, dan urutan tab mengalir logis — uji dengan menelusuri halaman tanpa menyentuh mouse, hanya tombol tab dan tombol enter. Kelima, keyboard dan fokus: skip link bekerja, indikator fokus terlihat, nggak ada elemen yang "terkunci" dari navigasi keyboard.

Verifikasi manual di atas bisa diperkuat alat. Chrome DevTools menyediakan panel aksesibilitas pada inspeksi elemen buat melihat nama dan peran elemen, dan Lighthouse — audit yang dibangun ke dalam Chrome, bukan kode yang kamu tulis — memberi skor aksesibilitas beserta daftar temuan teknisnya. Ingatlah keterbatasannya secara jujur: skor tinggi bukan sertifikasi kualitas, dan pembacaan urutan serta makna cuma bisa dinilai manusia. Karena itu kombinasi terbaik adalah alat buat kriteria terukur (kontras, nama, peran) dan pengujian manual buat pengalaman (tab, makna, urutan).

Kenapa porsi ini dianggarkan begitu besar? Karena layanan informasi publik adalah tempat aksesibilitas bukan sikap baik, melainkan kewajiban: portal layanan kampus, website informasi faskes, dan katalog perpustakaan diakses oleh pengguna dengan ragam kemampuan. Website Tokosaya pun sama: pembeli dengan pembaca layar berhak menelusuri katalog KX-210 sampai tombol "Lihat Katalog". Pas peer review nanti, auditor aksesibilitas kamu adalah rekan yang memeriksa halaman tanpa sentuh mouse — beri orang itu waktu, dan kamu akan menerima daftar perbaikan yang mahal harganya kalau ditunda ke fase rilis.

### 15.7 Visual Consistency & Debugging CSS

*Debugging* CSS adalah proses menjawab satu pertanyaan secara terarah: kenapa elemen ini tampil kayak ini, padahal seharusnya begitu? Pemula biasanya menjawabnya dengan menebak: menambah aturan di sana, mengubah angka di sini, dan kalau tampilan belum berubah, menambah `!important`. Cara menebak itu buang-buang waktu dan menyimpan *regression* di mana-mana. QA profesional menjawab pertanyaan itu dengan membaca kaskade: aturan mana yang menang, kenapa menang, dan di file mana aturan itu berasal. Prasyaratnya udah kamu punya sejak Bab 3: kaskade, inheritance, dan specificity.

Alatnya adalah inspector elemen di Chrome DevTools. Buka panel Elements, pilih elemen yang bermasalah, lalu baca dua informasi sebelum menulis satu baris perbaikan apa pun. Panel *Styles* menampilkan seluruh aturan yang menyentuh elemen: yang membatalkan lainnya tampil dengan garis coret, dan urutannya menunjukkan pemenang kaskade — beginilah cara kamu membuktikan bahwa `style.css` kalah oleh utilitas Bootstrap atau sebaliknya. Panel *Computed* menampilkan hasil akhir yang benar-benar menyala setelah seluruh aturan bertanding (misalnya nilai `font-size` final dan warna final), sehingga hipotesis kamu bisa diverifikasi, bukan dipakai sebagai tebakan. Diagram kotak dan nilai *box model* di panel yang sama membantu melacak jarak tak terduga (Bab 5).

Metode kerja yang disiplin punya empat langkah yang tegas. Pertama, reproduksi: temukan syarat tampilan cacat (lebar layar, kombinasi elemen) dan buat tangkapan layar sebelum/sesudah. Kedua, isolasi: pilih elemen terkecil yang gagal, bukan halaman yang gagal. Ketiga, hipotesis tunggal: satu penjelasan terkuat ("aturan `.daftar-produk .card` memberi radius 12 px, tapi aturan lama `.card` memberi 8 px dan muncul di bawahnya") — dan satu perubahan saja yang diterapkan. Keempat, verifikasi: muat ulang halaman, lalu jalankan uji regresi mini pada satu halaman lain yang memakai komponen yang sama. Empat langkah ini terasa berat pada cacat pertama dan jadi instan pada cacat sepuluh.

Konsistensi visual akhirnya dihasilkan bukan oleh penglihatan, melainkan oleh pembanding yang sah: styleguide `styleguide.html` yang kamu bangun di Bab 12. Bandingkan setiap komponen halaman produksi dengan sampel styleguide-nya: radius kartu (`--radius: 12px`), jarak mengikuti kelipatan 8 px (8/16/24/32/48/64), warna semantik badge (hijau `--clr-success` buat "Tersedia", amber `--clr-accent` buat "Stok Terbatas"), serta pasangan font Poppins (heading) dan Inter (teks). Setiap penyimpangan adalah temuan QA dengan lokasi, bukan perbedaan selera yang bisa ditoleransi. Di proyek besar, subbab ini jadi bagian paling sering dipakai: sebagian besar jam pengembangan web dihabiskan bukan buat menambah fitur, melainkan buat men-debug dan menjaga konsistensi.

### 15.8 Checklist Sebelum Deployment & Presentasi

Pintu terakhir QA adalah *checklist* pra-penyiapan publikasi (*pre-deployment checklist*): daftar periksa tetap yang memutuskan kapan sebuah draft boleh disebut rilis kandidat. Definisikan dulu dua kata itu. *Deployment* adalah proses menaruh website ke tempat yang bisa diakses orang lain (layanan *hosting statis* atau satu paket ZIP yang dikirim sebagai artefak penilaian). *Rilis kandidat* adalah versi yang dinyatakan siap rilis dan menunggu persetujuan terakhir — pada buku ini, persetujuan peer review dan dosen pada Bab 16. Keduanya dibedakan biar keputusan rilis jadi tindakan yang terdokumentasi, bukan suasana hati.

Checklist penguncian kualitasnya terbentang dua belas item. (1) Seluruh link dan navigasi hidup: klik satu per satu, nggak ada rujukan mati. (2) Konten brand konsisten: tagline, navigasi baku, dan kontak Tokosaya identik di semua halaman. (3) Delapan produk katalog baku tampil dengan nama, kategori, harga (format `Rp650.000` tanpa spasi), dan badge yang benar. (4) Meta lengkap: `charset`, `viewport`, `title` deskriptif per halaman. (5) Google Fonts Poppins/Inter dan Bootstrap via CDN versi terkunci dengan urutan pemuatan yang benar. (6) HTML lolos W3C validator tanpa kesalahan. (7) CSS kustom terorganisasi dengan token, tanpa kode mati dan tanpa `!important`. (8) Test matrix tiga breakpoint terisi penuh tanpa gulir horizontal. (9) Checklist aksesibilitas Bab 13 lolos: alt, kontras, label, tab, fokus. (10) Gambar teroptimasi: nama kebab-case, dimensi wajar, format tetap. (11) Alat QA nggak ikut terkirim tanpa maksud publikasi yang jelas: halaman `qa-checklist.html` dan `laporan-temuan.html` ditempatkan sesuai kesepakatan kelompok. (12) Versi akhir disimpan sebagai rilis kandidat berlabel (mis. `tokosaya-bootstrap-v1.0.0.zip`) dengan catatan perubahan.

Setelah ke dua belas kotak dicentang, artefak M7 pada pertemuan 15 siap: QA checklist terisi, laporan temuan, dan paket rilis kandidat. Dosen menilai milestone ini sebelum Bab 16 menyuntikkan persetujuan akhirnya; website yang melewati rilis kandidat pun berjalan ke forum UAS dengan tiga keunggulan nyata: nggak akan ada kejutan pada demo, perbaikan punya bukti, dan presentasi nggak perlu mengarang.

Skrip presentasinya sendiri diatur ketat oleh Bab 16: tujuh menit presentasi dan tiga menit QA demo responsif. Struktur yang terbukti efektif buat tujuh menit adalah: (1) satu menit masalah yang dipecahkan dan audiensnya; (2) sekitar sembilan puluh detik arah penyelesaian—sistem konten, design system, arsitektur halaman; (3) tiga menit demo live yang pergi ke tiga breakpoint dan menunjukkan dua form dan satu katalog; (4) satu menit bukti QA — checklist, temuan terbuka vs diperbaiki; (5) satu menit refleksi dan rencana pemeliharaan. Siapkan cadangan: tangkapan layar responsif pada PDF atau gambar, sehingga demo tetap terlihat seandainya perangkat presentasi bermasalah.

## Konsep Penting

| Konsep | Inti bab | Rujukan |
|---|---|---|
| Anatomi final project | Sembilan bagian wajib dan halaman baku Tokosaya menjadi peta audit | Subbab 15.1; Bab 16 |
| Organisasi folder | Struktur siap tim: HTML di akar, `css/`, `img/` kebab-case | Subbab 15.2 |
| Naming convention | `kebab-case`, pola `blok-elemen`, deskriptif, tanpa spasi/kapital | Subbab 15.2; Bab 3 |
| Clean HTML | Satu `h1`, meta viewport, alt, label-for, semantik, indentasi 2 spasi | Subbab 15.3; Bab 2 |
| Clean CSS | Urutan token → komponen → halaman, hapus dead code, tanpa `!important` | Subbab 15.3; Bab 3 |
| Bootstrap best practice | Utilitas dulu, kustom terkomentar, token, CDN terkunci 5.3.3 | Subbab 15.4; Bab 9 |
| Test matrix | Halaman × breakpoint sebagai peta pengujian terukur | Subbab 15.5; Bab 7 |
| Regression | Perubahan kecil bisa memecah halaman lain; wajib uji ulang | Subbab 15.5 |
| Checklist aksesibilitas | Alt, kontras 4,5:1, heading, label, keyboard — WCAG 2.2 | Subbab 15.6; Bab 13 |
| Debugging CSS | Styles (terpakai/coret) dan Computed (nilai akhir) + metode 4 langkah | Subbab 15.7 |
| Rilis kandidat | Versi siap rilis, dilabel, menunggu persetujuan Bab 16 | Subbab 15.8 |
| Laporan QA profesional | ID temuan, langkah reproduksi, severitas, status, bukti | Studi Kasus |

## Contoh Kode

Tiga contoh berikut menyiapkan artefak QA proyek `tokosaya-bootstrap/`: halaman checklist QA, perbaikan (refactor) CSS yang khas ditemukan sprint QA, dan bagian form kontak yang udah lolos kaidah QA. Ketiganya HTML dan CSS murni sesuai batas mata kuliah, dan bisa kamu ketik ulang dari atas ke bawah.

**Contoh 1 — Halaman checklist QA.** Berikut adalah `qa-checklist.html`, sebuah alat kerja (bukan halaman produk; kamu bebas menyimpannya di akar proyek atau di luar paket rilis). Halaman ini menampung checklist QA inti dalam dua kartu: struktur/HTML dan responsif/aksesibilitas.

File: tokosaya-bootstrap/qa-checklist.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Checklist QA — Tokosaya</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <!-- Tanpa bundle JavaScript Bootstrap: interaksi di luar cakupan mata kuliah -->
</head>
<body class="bg-body-tertiary">
  <header class="bg-white border-bottom">
    <div class="container py-3">
      <h1 class="h4 mb-1">Checklist QA Final Project — Tokosaya</h1>
      <p class="text-body-secondary mb-0 small">Milestone M7 — QA + penyempurnaan (pertemuan 15)</p>
    </div>
  </header>

  <main class="container py-4">
    <div class="row g-3">
      <div class="col-md-6">
        <article class="card h-100 shadow-sm">
          <div class="card-body">
            <h2 class="h5 card-title">
              <i class="bi bi-clipboard-check text-success"></i> Struktur dan HTML
            </h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <span>HTML tervalidasi W3C tanpa kesalahan di semua halaman</span>
                <span class="badge text-bg-danger">Wajib</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <span>Satu <code>h1</code> per halaman, hierarki heading tidak melompat</span>
                <span class="badge text-bg-danger">Wajib</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <span>Semua <code>img</code> memiliki <code>alt</code> yang bermakna</span>
                <span class="badge text-bg-danger">Wajib</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <span>Nama berkas dan kelas memakai kebab-case konsisten</span>
                <span class="badge text-bg-secondary">Disarankan</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div class="col-md-6">
        <article class="card h-100 shadow-sm">
          <div class="card-body">
            <h2 class="h5 card-title">
              <i class="bi bi-phone text-primary"></i> Responsif dan Aksesibilitas
            </h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <span>Tidak ada gulir horizontal pada 360/768/992 px</span>
                <span class="badge text-bg-danger">Wajib</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <span>Kontras teks utama minimal 4,5 : 1</span>
                <span class="badge text-bg-danger">Wajib</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <span>Form dapat ditelusuri penuh dengan tombol tab tanpa mouse</span>
                <span class="badge text-bg-danger">Wajib</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <span>Komponen identik dengan sampel styleguide</span>
                <span class="badge text-bg-secondary">Disarankan</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>

    <div class="alert alert-info mt-4 mb-0">
      <p class="mb-0">
        Seluruh item berlabel <span class="badge text-bg-danger">Wajib</span> harus berstatus
        <strong>lulus</strong> sebelum proyek boleh dikunci sebagai
        <em>rilis kandidat</em>. Item <span class="badge text-bg-secondary">Disarankan</span>
        dicatat sebagai temuan minor bila belum terpenuhi.
      </p>
    </div>
  </main>

  <footer class="bg-white border-top">
    <div class="container py-3 text-center text-body-secondary small">
      Tokosaya — Belanja Tepat, Kirim Cepat | QA M7
    </div>
  </footer>
</body>
</html>
```

**Contoh 2 — Refactor CSS hasil temuan QA.** Berikut `css/style.css` sebelum dan sesudah refactor khas yang dilakukan pas QA sprint. Blok "SEBELUM" ditampilkan buat bahan diskusi review — hapus pola itu dan pertahankan cuma blok "SESUDAH" pada file riil kamu.

File: tokosaya-bootstrap/css/style.css

```css
/* ============ SEBELUM (bahan review — jangan dipertahankan) ============ */
/* kustom */
.card-produk-title { font-size: 22px; }

/* kustom */
div .card-produk-title { font-size: 20px !important; }

/* kustom */
.card-produk-title { border-radius: 8px; color: #4F46E5; font-weight: 700; }

/* ============ SESUDAH (tetap dipertahankan) ============ */
/* kustom — judul kartu produk; nilai mengikuti token dan skala rem */
.produk-card .card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--clr-dark);
  border-radius: var(--radius);
}
```

**Contoh 3 — Form kontak siap QA (fragmen halaman).** Berikut bagian form pada `kontak.html` yang memenuhi kaidah aksesibilitas dan Bootstrap form (Bab 11). Salin fragmen ini ke dalam elemen `main` halaman kalau diperlukan.

File: tokosaya-bootstrap/kontak.html (fragmen bagian form)

```html
<div class="row justify-content-center">
  <div class="col-md-8">
    <form action="#" method="get" class="card card-body shadow-sm">
      <h2 class="h5 mb-3">Kirim Pesan ke Tokosaya</h2>
      <div class="mb-3">
        <label for="nama" class="form-label">Nama Lengkap</label>
        <input type="text" class="form-control" id="nama" name="nama"
               placeholder="Mis. Sinta Dewi" autocomplete="name">
        <div class="form-text">Gunakan nama lengkap seperti pada identitas resmi.</div>
      </div>
      <div class="mb-3">
        <label for="surel" class="form-label">Surel</label>
        <input type="email" class="form-control" id="surel" name="surel"
               placeholder="nama@contoh.id" autocomplete="email"
               aria-describedby="bantuan-surel" required>
        <div id="bantuan-surel" class="form-text">Kami membalas dalam satu hari kerja.</div>
      </div>
      <div class="mb-3">
        <label for="pesan" class="form-label">Pesan</label>
        <textarea class="form-control" id="pesan" name="pesan" rows="4"></textarea>
      </div>
      <fieldset class="mb-3">
        <legend class="fs-6">Kategori pesan</legend>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="kategori"
                 id="kategori-beli" value="beli" checked>
          <label for="kategori-beli" class="form-check-label">Pertanyaan pembelian</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="kategori"
                 id="kategori-keluhan" value="keluhan">
          <label for="kategori-keluhan" class="form-check-label">Keluhan pesanan</label>
        </div>
      </fieldset>
      <button type="submit" class="btn btn-primary">Kirim Pesan</button>
    </form>
  </div>
</div>
```

## Penjelasan Kode

**Contoh 1.** Halaman `qa-checklist.html` dibangun sepenuhnya dengan utilitas Bootstrap — nggak ada satu baris CSS kustom yang diperlukan, dan itu demonstrasi langsung prinsip utilitas-pertama pada subbab 15.4: kebutuhan layout sederhana (grid dua kartu, jarak, badge) nggak menuntut CSS buatan tangan. Struktur semantik dipelihara: satu `h1` memuat judul seluruh halaman, kartu-kartu memakai `h2` berikutnya sehingga hierarki nggak melompat; `code` dan `<em>` membawa makna, bukan gaya. Badge memakai pola warna semantik `text-bg-danger`/`text-bg-secondary` (Bab 10) sehingga prioritas item terbaca dari warna, bukan ditebak dari posisi. Comment `<!-- Tanpa bundle JavaScript ... -->` menegaskan ke reviewer bahwa nggak ada halaman yang menyertakan file skrip — kepatuhan pada keterbatasan mata kuliah ini sendiri tercantum sebagai item checklist.

**Contoh 2.** Blok "SEBELUM" memperlihatkan tiga penyakit sekali baca. Pertama, tiga aturan yang menyasar selector sama ditaruh di tiga tempat yang berbeda-beda; kaskade memilih aturan terakhir, dan pas itulah "menang" berhenti dikaitkan dengan maksudnya. Kedua, `div .card-produk-title` menambah bobot (specificity) dan memakai `!important` buat memaksa kemenangan — kombinasi yang dilarang pada subbab 15.3, karena perbaikan setelahnya harus memikul senjata yang lebih besar lagi. Ketiga, nilai acak (`22px`, `8px`, hex yang ditulis telanjang) melanggar token (Bab 4) dan skala rem sehingga satu perubahan merek menuntut pencarian manual di sepuluh tempat. Blok "SESUDAH" menyembuhkan ketiganya: selector tunggal yang deskriptif (`produk-card` pada pola blok-elemen), tanpa `!important`, semua nilai mengacu pada token (`var(--clr-dark)`, `var(--radius)`), dan ukuran pada skala rem. Prinsip refactor yang paling penting: pilih satu aturan per maksud, biarkan token memikul nilai, dan biarkan kaskade bekerja tanpa dipaksa.

**Contoh 3.** Form kontak ini memenuhi checklist aksesibilitas yang akan dijalankan peer review. Setiap label memakai kaitan `for`–`id` yang tegas ("nama", "surel", "pesan", "kategori-beli", "kategori-keluhan") sehingga pembaca layar menyebutkan nama bidang dengan benar ke titik mana pun kursor kognitifnya — kesalahan klasik yang tercantum pada tabel anatomi pada subbab 15.1 adalah label bebas tanpa link. Atribut `autocomplete` memberi isian cepat ("name", "email") yang memenuhi kriteria WCAG 2.2 tentang mengidentifikasi tujuan isian; `aria-describedby` menautkan teks bantuan ke bidang surel sehingga ia dibacakan bersama labelnya. Atribut `required` pada surel memicu pemeriksaan natif browser (tipe `email`, isian wajib) tanpa satu baris JavaScript pun, sebab pemeriksaan tersebut bagian dari browser, bukan dari skrip halaman. Fieldset/legend mengelompokkan kategori pesan; ini praktik Bab 11 buat form yang menolak jadi tebakan. Perhatikan pula bahwa semua tampilan menyerahkan diri ke kelas Bootstrap (`form-label`, `form-control`, `form-check`), dan kelas kustom nggak dituliskan.

## Praktikum

### Tujuan Praktikum

Melatih QA sprint lengkap atas draft final project: melakukan audit mandiri berasas checklist, melakukan peer review antarteman, mencatat temuan dalam laporan profesional berseveritas, memperbaiki cacat secara terarah, melakukan uji ulang regresi, dan mengunci versi *rilis kandidat* sebagai artefak milestone M7 (pertemuan 15).

### Kebutuhan

1. Draft final project `tokosaya-bootstrap/` hasil milestone M6 — minimal empat halaman (index, katalog, produk, kontak/checkout) yang navigasinya menyambung penuh, ditambah `styleguide.html` dari Bab 12.
2. Google Chrome (atau browser modern lain) dengan DevTools; fitur W3C validator daring (validator.w3.org) lewat browser.
3. Alat QA dari bab ini: `qa-checklist.html` dan `laporan-temuan.html` (kode praktikum) yang disimpan di akar folder proyek.
4. Lembar sebar peer review yang disepakati kelas (checklist Bab 13 boleh dipakai ulang), serta alat pembuat arsip ZIP di sistem kamu.

### Persiapan

1. Simpan `qa-checklist.html` dan `laporan-temuan.html` (bagian Kode di bawah) di akar folder `tokosaya-bootstrap/` berdampingan dengan halaman-halaman produksi; pastikan keduanya terbuka di Chrome.
2. Salin isi laporan temuan dengan baris contoh (F-01–F-03) dulu — lalu hapus dan ganti dengan temuan milik proyek kamu; baris contoh ada biar formatnya terdemonstrasi.
3. Siapkan tiga jendela kerja di DevTools: tab browser utama, tab yang memanggil laporan-temuan (buat menyalin temuan), dan satu tab validator daring. Tetapkan satu file ringkasan QA bernama `laporan-qa.md` di luar folder proyek buat bukti M7.

### Langkah Kerja

1. **Konfirmasi draft M6.** Pastikan seluruh halaman final project lengkap (index, katalog, produk, kontak atau checkout, tentang kalau ada, styleguide) dan setiap link nav hidup. Kalau ada halaman rusak, selesaikan dulu — QA sprint bukan tempat menulis halaman baru.
2. **Audit struktur (QA mandiri I).** Jalankan pengujian `qa-checklist.html` secara top-down pada bagian "Struktur dan HTML": lakukan proses validasi satu per satu halaman utama (index, katalog, produk, kontak) pada validator W3C, catat setiap kesalahan dan peringatan berikut halamannya. Catat ke `laporan-temuan.html` dengan ID naik.
3. **Audit responsif (QA mandiri II).** Buka setiap halaman pada mode responsif device toolbar Chrome; jalankan pemindai lima titik (nav, hero, grid kartu, form, footer) pada lebar 360/768/992 px; isi test matrix di lembar ringkasan: sel yang ada temuan diberi catatan singkat dan tangkapan layar.
4. **Audit aksesibilitas (QA mandiri III).** Uji tiap halaman dengan checklist lima pemeriksaan subbab 15.6: alt bermakna, kontras 4,5:1 pada teks utama, heading nggak melompat, form bisa dijelajahi tab tanpa mouse, dan indikator fokus terlihat. Catat temuan.
5. **Peer review silang.** Tukar website dengan satu rekan sekelas selama 45 menit: reviewer menjalankan langkah 2–4 yang sama pada proyek kamu, menemukan temuan baru dengan format sama, dan menandai setiap temuan yang terkonfirmasi. Kamu secara bersamaan men-review miliknya. Perjanjian yang setara mencegah review satu arah.
6. **Konsolidasi dan prioritas temuan.** Gabungkan temuan mandiri dan peer review; beri severitas (*severity*): Kritis (menghalangi penggunaan — link mati, form tak berlabel, gulir horizontal), Mayor (memperburuk penggunaan — kontras kurang, kartu tak sejajar), Minor (kesalahan kecil — radius, jarak nggak sesuai styleguide). Urutkan tabel dari Kritis.
7. **Perbaikan terarah.** Mulai dari Kritis. Di setiap perbaikan, jalankan metode debugging empat langkah subbab 15.7: pastikan reproduksinya → isolasi elemen terkecil → terapkan satu perubahan → verifikasi muat ulang. Jangan melipatgandakan perubahan dalam satu putaran.
8. **Uji ulang regresi.** Setelah setiap perbaikan, jalankan penyapuan cepat: tekan setiap link nav pada halaman sebelumnya, buka satu halaman katalog pada tiga breakpoint, dan periksa styleguide: pastikan tak ada komponen yang ikut berubah tak terduga.
9. **Tutup temuan.** Ubah status temuan yang udah diperbaiki di laporan-temuan (kolom Status) hanya setelah verifikasi ulang; biarkan temuan "Terbuka" kalau memang belum diperbaiki dan catat alasannya.
10. **Kunci rilis kandidat.** Pastikan seluruh item Wajib pada qa-checklist berstatus lulus; beri label paket `tokosaya-bootstrap-v1.0.0-rc1.zip` (rc = rilis kandidat); salin ringkasan checklist ke `laporan-qa.md` dan kirim keduanya sebagai artefak M7.

### Kode

Berikut halaman `laporan-temuan.html` — tabel temuan profesional yang memuat kolom: ID, halaman, temuan, langkah reproduksi, severitas, dan status. Isi baris berikut menggambarkan formatnya; ganti baris contoh dengan temuan proyek kamu sendiri.

File: tokosaya-bootstrap/laporan-temuan.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Laporan Temuan QA — Tokosaya</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <!-- Tanpa bundle JavaScript Bootstrap: interaksi di luar cakupan mata kuliah -->
</head>
<body class="bg-body-tertiary">
  <header class="bg-white border-bottom">
    <div class="container py-3">
      <h1 class="h4 mb-1">Laporan Temuan QA — Draft Final Project Tokosaya</h1>
      <p class="text-body-secondary mb-0 small">QA M7 — peer review pertemuan 15</p>
    </div>
  </header>

  <main class="container py-4">
    <table class="table table-striped table-hover align-middle bg-white shadow-sm">
      <caption class="small text-body-secondary">
        Severitas: Kritis = menghalangi penggunaan; Mayor = memperburuk; Minor = kosmetik-fungsional.
        Baris contoh F-01 sampai F-03 diganti dengan temuan proyek Anda.
      </caption>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Halaman</th>
          <th scope="col">Temuan</th>
          <th scope="col">Langkah reproduksi</th>
          <th scope="col">Severitas</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">F-01</th>
          <td>kontak.html</td>
          <td>Label "Surel" tidak terhubung dengan pasangan for–id; pembaca layar menyebut bidang tanpa nama.</td>
          <td>Buka kontak.html; luluskan bidang surel; periksa atribut label.</td>
          <td><span class="badge text-bg-danger">Kritis</span></td>
          <td><span class="badge text-bg-success">Diperbaiki</span></td>
        </tr>
        <tr>
          <th scope="row">F-02</th>
          <td>katalog.html</td>
          <td>Gulir horizontal pada 360 px; baris kartu menumpang tindih di ponsel kecil.</td>
          <td>Device toolbar 360 px; buka katalog; amati baris produk teratas.</td>
          <td><span class="badge text-bg-warning text-body">Mayor</span></td>
          <td><span class="badge text-bg-success">Diperbaiki</span></td>
        </tr>
        <tr>
          <th scope="row">F-03</th>
          <td>index.html</td>
          <td>Radius kartu unggulan 8 px; styleguide menetapkan 12 px.</td>
          <td>Bandingkan kartu unggulan index dengan sampel styleguide.</td>
          <td><span class="badge text-bg-info text-body">Minor</span></td>
          <td><span class="badge text-bg-secondary">Terbuka</span></td>
        </tr>
      </tbody>
    </table>

    <div class="alert alert-info mt-3 mb-0">
      <p class="mb-0 small">
        <i class="bi bi-info-circle"></i> Status "Diperbaiki" hanya diberikan setelah verifikasi ulang
        pada perangkat dan halaman bersangkutan; status "Terbuka" memerlukan keterangan.
      </p>
    </div>
  </main>
</body>
</html>
```

### Penjelasan Kode

Halaman ini adalah templat pelaporan QA yang dipakai berulang; kenapa perlu bentuk tabel daripada catatan bebas? Karena laporan profesional (Studi Kasus) selalu bisa difilter: reviewer menanyakan temuan tertinggi ("Kritis yang terbuka?"), penelusuran per ID (F-01), atau kecocokan keterangan; tabel menghadirkan semuanya dalam satu pandangan. Setiap sel memakai penanda semantik: `th scope="row"` menandai baris ID sehingga pembaca layar menautkan setiap baris dengan labelnya; `caption` menjelaskan aturan severitas sebelum tabel terbaca. Badge severitas memakai warna semantik yang sama dengan badge katalog Tokosaya (Bab 10), dan itu bukan kebetulan: satu design system yang sama melayani halaman yang berbeda. Kolom langkah reproduksi memakai instruksi tiga langkah yang ringkas sehingga siapa pun (yang bukan penemunya) bisa mengulang temuan — kalau langkah nggak bisa diikuti, temuan dianggap nggak valid. Kolom Status menutup lingkaran: temuan bergerak dari "Terbuka" ke "Diperbaiki" hanya setelah uji ulang.

### Hasil yang Diharapkan

Di akhir praktikum, lima bukti terlihat: (1) `qa-checklist.html` menampilkan seluruh item Wajib berstatus lulus dan tanpa item kritis tersisa; (2) `laporan-temuan.html` memuat minimal tiga temuan milik proyek sendiri dengan kolom lengkap, yang udah berubah dari tumpukan Kritis ke campuran Diperbaiki/Terbuka (kalau kebijakan kelompok mencatat beberapa temuan minor tetap Terbuka); (3) test matrix tiga breakpoint × empat halaman terisi penuh tanpa sel kosong; (4) zip paket `tokosaya-bootstrap-v1.0.0-rc1.zip` bisa dibuka dan halamannya berpindah benar tanpa link mati; (5) `laporan-qa.md` memuat ringkasan checklist dan daftar perubahan akhir. Ukuran yang terukur: temuan Kritis = 0 tersisa pada rilis kandidat.

### Troubleshooting

**Masalah:** Perubahan pada `css/style.css` nggak terpantau di halaman walau udah dimuat ulang.
**Penyebab:** Halaman masih memakai salinan lama dari cache browser, file belum tersimpan di editor, atau jalur `href` ke CSS salah ketik sehingga CSS kustom nggak ikut termuat sama sekali.
**Solusi:** Pastikan file tersimpan; tekan muat ulang cepat (Ctrl+F5) buat memaksa pembaruan; periksa jalur `href="css/style.css"` di setiap halaman; kalau perlu, buka panel Styles pada elemen bersangkutan buat melihat apakah aturan kamu tampil di senarai.
**Pencegahan:** Biasakan menyimpan sebelum menguji; gunakan satu file `css/style.css` di seluruh halaman sehingga hanya satu jalur yang bisa salah; beri komentar `/* kustom */` biar aturan kustom mudah dicari.

**Masalah:** Validator W3C menampilkan banyak kesalahan sekaligus sehingga membingungkan.
**Penyebab:** Satu tag yang nggak ditutup (misalnya `div` atau `ul`) bikin parser menarik kesimpulan berantai di baris-baris setelahnya, sehingga satu akar kesalahan muncul sebagai lima catatan.
**Solusi:** Perbaiki kesalahan paling atas dalam senarai validator, lakukan validasi ulang, dan lanjut ke kesalahan berikut; kerja satu per satu akan memangkas senarai drastis.
**Pencegahan:** Tulis tag penutup segera setelah tag pembuka pas mengetik kode; lakukan proses validasi satu halaman tepat setelah selesai ditulis, bukan memeriksa seluruh proyek di akhir.

**Masalah:** Temuan katalog tetap muncul pada halaman lain setelah satu perbaikan diterapkan.
**Penyebab:** Selector CSS kustom yang ditulis terlalu luas (misalnya `.card-title` tanpa konteks) ikut mengenai komponen lain lewat kaskade, atau file yang diubah ternyata disertakan pada halaman yang tak sengaja ikut memuatnya.
**Solusi:** Batasi kembali seleksi ke konteks komponen yang dimaksud (pola `blok-elemen`, kayak `.produk-card .card-title`), lalu jalankan uji ulang regresi pada satu halaman lain yang memakai komponen tersebut.
**Pencegahan:** Beri penyokong (parent class) pada setiap aturan kustom biar cakupannya jelas, dan jalankan penyapuan nav dan satu halaman katalog setiap kali berakhir sprint perbaikan.

**Masalah:** Peer review menemukan halaman yang gagal dibuka (404 pada beberapa link).
**Penyebab:** Huruf kapital, spasi, atau kutipan berbeda pada jalur `href`/`src` dibanding nama file sesungguhnya — sering muncul karena nama di disk dan nama di HTML nggak pernah dibandingkan.
**Solusi:** Samakan nama file pada disk dan markup (kebab-case, huruf kecil tanpa spasi), lalu uji klik seluruh link pada menu nav dan footer.
**Pencegahan:** Sepakati nama file sebelum halaman mulai ditulis dan jalankan pengujian klik satu kali pada setiap rilis kandidat sebelum dikirim.

## Studi Kasus

**Konteks:** Tim internal Tokosaya (UMKM aksesori dan elektronik komputer) bersama seorang praktikan Sistem Informasi menyiapkan peluncuran website `tokosaya.id`. Pemilik toko — pengguna akhir yang nggak menyentuh kode — akan menilai website itu sendiri: bisa-jangka-pelanggan, katalognya, dan formulir pesanannya. Inilah *user acceptance testing* (UAT): uji penerimaan oleh pengguna nyata sebelum peluncuran resmi, berbeda dari QA teknis yang udah kamu jalankan sendiri sebagai pengembang. Pada UAT, praktikan berperan mencatat keluhan pemilik (yang kadang menyampaikannya dengan bahasa non-teknis: "yang ini beda sama yang tadi", "warnanya beda dengan yang di gambar"), menerjemahkannya ke temuan teknis, dan melaporkannya balik secara profesional.

**Masalah:** Melaporkan temuan QA ke klien kecil dengan format yang bisa ditindaklanjuti. Laporan yang buruk meraung: "ada banyak bug, mohon maaf" — nggak ada yang bisa diputuskan dari kalimat itu. Laporan yang baik menghadirkan lima bagian yang ringkas: (1) ringkasan eksekutif tiga kalimat (kesimpulan penerimaan: lulus, lulus dengan catatan, atau nggak lulus — dan alasan utamanya); (2) lingkup pengujian (halaman mana, perangkat apa, skenario apa); (3) tabel temuan berkategori severitas dengan ID, langkah reproduksi, dan bukti tangkapan layar; (4) rekomendasi prioritas urutan perbaikan; (5) kesimpulan dan tawaran sesi klarifikasi. Formatnya persis yang dipraktikkan pada `laporan-temuan.html` — hanya dituang buat pembaca bisnis: pemilik Tokosaya nggak membaca kode, ia membaca dampak dan prioritas.

**Pelajaran buat mahasiswa Sistem Informasi:** Kamu adalah jembatan; melaporkan temuan adalah keterampilan profesional, bukan keberuntungan. Tiga kaidah menjaga nada laporan tetap berwibawa. Pertama, faktual dan bisa diperiksa ulang: laporkan gejala plus langkah reproduksi ("pada 360 px, kolom produk meluber ke 2 baris dan muncul gulir horizontal — tangkapan layar dilampirkan"), bukan penilaian pribadi. Kedua, netral tanpa menyalahkan: kesalahan bertuliskan cara perbaikannya, bukan siapa yang salah; nada menyalahkan menutup kerja sama, dan pemberitaan kering-kering menurunkan kepercayaan klien. Ketiga, berprioritas dan membatasi klaim: Kritis diperbaiki dulu; temuan yang kamu nggak pasti ditandai dengan jujur sebagai "perlu verifikasi", bukan dibungkus seolah kepastian. Pada Bab 16 kamu akan melaporkan rekap temuan selama QA sebagai bagian presentasi; laporan yang terlatih pada studi kasus inilah yang menghasilkan bukti kesiapan proyek itu.

## Latihan Mandiri

1. Jelaskan perbedaan *quality assurance*, pengujian (testing), dan UAT dengan masing-masing satu paragraf pendek, lalu temukan satu contoh aktivitas pada Bab 15 yang termasuk masing-masing kategori.
2. Buat test matrix sendiri untuk empat halaman Tokosaya (index, katalog, produk, kontak) × tiga breakpoint (360, 768, 992) berbentuk tabel; isi kolom status dengan asumsi proyek kamu saat ini, dan tandai tiga sel yang paling berisiko beserta alasannya.
3. Dibentangkan blok CSS berikut yang ditemukan reviewer pada `css/style.css` proyek: `/* kustom */ .daftar-produk { font-size: 1rem; }`, `/* kustom */ div .daftar-produk { font-size: 0.9rem !important; }`, `/* kustom */ .daftar-produk { border-radius: 9px; }`. Tuliskan tiga cacat, urutkan dari yang paling menyebar bahayanya, dan susun satu file CSS penggantinya yang mengikuti kaidah subbab 15.3–15.4.
4. Jalankan audit aksesibilitas mandiri pada satu halaman `kontak.html` proyek kamu memakai kaidah lima pemeriksaan (alt, kontras, heading, label-tab, fokus); tuliskan hasilnya sebagai daftar temuan berkategori severitas pada format tabel temuan, lengkap dengan langkah reproduksi.
5. Buat skrip presentasi tujuh menit untuk final project kamu (masalah → solusi → demo responsif → bukti QA → refleksi) yang memakai tabel alokasi waktu per detik; tuliskan bagian satu paragraf pembuka yang menutup dengan kalimat "mengapa website ini siap dirilis".
6. Jelaskan satu situasi pada proyek kamu pas peer review menemukan cacat yang nggak kamu temukan sendiri. Analisa alasan (kelebihan mata segar, asumsi tersamar, kebiasaan melihat sendiri), dan tulis satu langkah proses yang mencegahnya berulang.

## Tugas

**Tugas 1 (individu): QA sprint dan rilis kandidat.** Jalankan praktikum bab ini pada draft final project kamu, lalu kumpulkan tiga artefak milestone M7: QA checklist yang terisi (`qa-checklist.html` disalin dan diberi status pada setiap item), `laporan-temuan.html` berisi minimal tiga temuan riil (terbuka/diperbaiki) dengan langkah reproduksi dan tangkapan layar, serta `tokosaya-bootstrap-v1.0.0-rc1.zip`. Kriteria singkat: kelengkapan checklist (30%), kualitas temuan (reproduksi, severitas, bukti — 40%), perbaikan tercatat dan uji ulang regresi (20%), kesiapan paket rilis (10%). Batas: sebelum pertemuan 16.

**Tugas 2 (kelompok 3 mahasiswa): UAT lintas proyek.** Ketiga anggota kelompok saling bertukar rilis kandidat final project; setiap anggota menguji dua proyek lain (bukan miliknya) selama 45 menit per proyek dengan checklist Bab 13/15 dan menyusun satu laporan UAT sepanjang 2–3 halaman berformat lima bagian studi kasus (ringkasan, lingkup, tabel temuan, rekomendasi, kesimpulan). Keluaran dikumpulkan: dua laporan per anggota plus satu refleksi kecil penerimaan masukan. Kriteria: kesopanan profesional nada (temuan faktual tanpa menyalahkan), kedalaman temuan, dan rekomendasi yang bisa diikuti langsung oleh pemilik proyek.

## Refleksi

1. Bagian mana dari QA sprint yang paling banyak mengubah cara kamu membaca kode sendiri — dan kenapa itu terjadi di fase ini, bukan di awal semester?
2. Apa temuan yang hanya bisa ditemukan oleh peer review (bukan pengujian mandiri), dan apa batas kemampuan yang jujur pada review teman sekelas?
3. Pas kamu memperbaiki temuan, seberapa sering kamu mengikuti metode empat langkah (reproduksi → isolasi → hipotesis → verifikasi) dibandingkan langsung mengubah kode — dan apa harga dari setiap menebak?
4. Gimana laporan QA kamu diganggu oleh suara "ini bukan pekerjaan penting, selesaikan fiturnya saja"? Apa yang kamu jawab ke diri sendiri pada situasi itu?
5. Setelah final project terbuka buat Bab 16, bagian dari proyek yang paling sering kamu terpaksa mohon maaf karena lalai — dan langkah apa yang akan kamu letakkan di checklist berikutnya biar lalai itu nggak terulang?

## Rangkuman

- QA (perawatan kualitas) adalah proses sistematis — bukan tindakan akhir sembarangan — yang membuktikan bahwa proyek memenuhi standar sebelum diserahkan; pada buku ini ia adalah milestone M7 pada pertemuan 15.
- Anatomi final project memaparkan sembilan bagian wajib di empat halaman baku Tokosaya dan mendefinisikan fokus QA masing-masing bagian.
- Organisasi folder dan penamaan `kebab-case` pola `blok-elemen` membuat audit dapat disisir tanpa sisa dan memudahkan peer review.
- Kode bersih diterapkan pada dua file: HTML (satu `h1`, meta viewport, alt, label-terhubung) dan CSS (urutan token → komponen → halaman, tanpa kode mati dan `!important`).
- Praktik terbaik Bootstrap pada Bab 15: utilitas-pertama, kustom terkomentar, tak ada duplikasi, dan CDN dikunci pada 5.3.3.
- Test matrix halaman × breakpoint + pemindai lima titik menjadikan pengujian responsif terencana; uji ulang regresi menyapu cacat yang kembali.
- Audit aksesibilitas menurunkan kaidah WCAG 2.2 Bab 13 ke lima pemeriksaan wajib yang bisa dijalankan sendiri, diperkuat audit Lighthouse.
- Debugging CSS memakai panel Styles (aturan terpakai/tercoret) dan Computed (nilai akhir) dengan metode empat langkah — bukan menebak.
- Checklist pra-publikasi dua belas titik mengunci versi `v1.0.0-rc1`; laporan temuan profesional berformat ID/reproduksi/severitas/status/bukti.
- Presentasi tujuh menit + tiga menit QA demo responsif disusun sebagai skrip (masalah → solusi → demo → bukti QA → refleksi) dengan cadangan tangkapan layar.

Jembatan ke bab berikutnya: setiap artefak yang kamu kunci di bab ini — QA checklist yang terisi, laporan temuan yang menunjukkan sejarah perbaikan, paket rilis kandidat, dan skrip presentasi tujuh menit — adalah bahan mentah ujian akhir semester. **Bab 16 (UAS: Final Project Website)** menyambutnya dengan pedoman ujian resmi: delapan pilihan studi kasus, persyaratan minimum empat halaman, rubrik penilaian berbobot yang dinormalisasikan ke 100 poin, format pengumpulan (ZIP/repo + README + tangkapan layar responsif), serta presentasi tujuh menit dengan tiga menit QA demo responsif. Website kamu udah jadi; pada bab berikutnya, website itu menyamai gelar dan nilai kamu.

## Evaluasi

### Pilihan Ganda

Pilih satu jawaban paling tepat untuk setiap butir.

1. Berikut yang paling tepat menggambarkan *quality assurance* (QA) pada proyek web statis adalah...
   A. Mencari kesalahan tampilan hanya pada hari pengumpulan.
   B. Proses sistematis memastikan produk memenuhi kriteria kualitas yang terukur sebelum diserahkan.
   C. Menambahkan lebih banyak komponen agar website tampak kaya.
   D. Menulis ulang seluruh halaman memakai framework yang berbeda.
2. Pada metode utilitas-pertama (subbab 15.4), langkah pertama sebelum menulis CSS kustom adalah...
   A. Mencari perluasan CDN dengan versi terbaru.
   B. Membuat kelas baru dengan nama acak.
   C. Memeriksa apakah Bootstrap sudah menyediakan kelas utilitas untuk kebutuhan tampilan itu.
   D. Mengganti token dengan warna yang berbeda agar unik.
3. Panel DevTools yang menampilkan seluruh aturan yang menyentuh elemen — termasuk aturan yang tercoret (timpa) — adalah...
   A. Panel Styles.
   B. Panel Network.
   C. Panel Console.
   D. Panel Computed.
4. Dalam pipeline QA pada subbab 15.8, status "Terbuka" pada laporan temuan berubah menjadi "Diperbaiki" hanya setelah...
   A. Pengembang merasa selesai dan menutup laptop.
   B. Verifikasi ulang di perangkat dan halaman yang bersangkutan.
   C. Anggota kelompok lain menyetujui ide perbaikannya.
   D. Judul temuan diganti agar terdengar positif.
5. Rasio kontras minimal untuk teks utama normal menurut WCAG 2.2 level AA adalah...
   A. 2 : 1.
   B. 3 : 1 pada HP dan 2 : 1 pada desktop.
   C. 4,5 : 1.
   D. 10 : 1 untuk semua teks tanpa kecuali.
6. Artefak yang diserahkan pada milestone M7 (pertemuan 15) menurut pedoman buku adalah...
   A. Brief kasus dan pilihan tema.
   B. Sitemap dan wireframe tiga halaman.
   C. QA checklist + paket rilis kandidat.
   D. Slide presentasi tujuh menit.
7. "Setelah perbaikan radius kartu, header halaman lain ikut berubah wajar-tidak-wajar" adalah gejala ... dan langkah pencegahannya adalah...
   A. Deployment; menghentikan semua perubahan.
   B. Regression; uji ulang halaman yang memakai komponen yang diubah.
   C. Kaskade; menghapus seluruh CSS kustom.
   D. Inline style; menambah `!important`.
8. Cara paling tepat menyalakan pengecekan responsif di DevTools adalah...
   A. Mengubah tinggi jendela browser secara manual dan mengamati.
   B. Memakai device toolbar dengan lebar tetap satu titik lalu berpindah breakpoint.
   C. Meminta pengguna nyata membuka website dari ponselnya tanpa catatan.
   D. Menonaktifkan CSS lalu membaca HTML.

### Benar atau Salah

1. QA adalah tugas tim terpisah; pengembang yang menulis kode tidak perlu menjalankan audit mandiri.
2. Rilis kandidat adalah versi yang dinyatakan siap rilis dan menunggu persetujuan terakhir.
3. Menulis CSS kustom tanpa komentar pengenal diperbolehkan karena urutan file sudah cukup.
4. Nada laporan temuan yang efektif menyalahkan pengembang agar perbaikan berjalan cepat.
5. Checklist aksesibilitas Bab 13 tetap dipakai pada bab ini sebagai audit mandiri.

### Analisis Kode

1. Perhatikan fragmen berikut dari satu halaman katalog:

File: tokosaya-bootstrap/latihan/fragmen-soal.html

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="card">
        <img src="img/produk-keyboard-kx210.svg" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Keyboard Mekanis KX-210</h5>
          <p class="card-text">Rp650.000</p>
          <a href="#" class="btn btn-primary">Klik di sini</a>
        </div>
      </div>
      <form action="#" method="get">
        <label class="form-label">Surel</label>
        <input type="email" class="form-control">
        <button type="submit" class="btn btn-secondary">Kirim</button>
      </form>
    </div>
  </div>
</div>
```

Fragmen di atas adalah kartu produk beserta form kecil pada sebuah halaman katalog. Identifikasi minimal tiga cacat QA yang ada pada fragmen (aspek: aksesibilitas, teks link, pasangan label–input) dan tulis perbaikannya, sebagaimana akan Anda catat pada `laporan-temuan.html`.

2. Perhatikan potongan CSS berikut di `css/style.css`:

File: tokosaya-bootstrap/latihan/fragmen-soal.css

```css
/* kustom */
.card-title { font-size: 2rem; }

/* kustom */
div .produk-card .card-title { font-size: 1.1rem !important; color: #DC2626; }

/* kustom */
.produk-card .card-title { font-size: 1.1rem; color: var(--clr-dark); }
```

Pertanyaan: aturan mana yang menang pada judul kartu produk mengapa; apa dua cacat kualitas pada potongan di atas mengapa ia berbahaya untuk pemeliharaan; dan bagaimana refactor paling benar menurut kaidah subbab 15.3–15.4.

### Soal Praktik

1. Jalankan QA sprint mini pada satu halaman proyek Anda (misalnya `kontak.html` selama 30 menit): jalankan checklist lima pemeriksaan aksesibilitas dan pemeriksaan W3C validator, catat minimal tiga temuan berkategori severitas pada format tabel temuan (ID, halaman, temuan, langkah reproduksi, severitas, status), perbaiki satu temuan Kritis, lalu jalankan uji ulang regresi. Kumpulkan tabel temuan dan tangkapan layar sebelum/sesudah perbaikan.
2. Susun skrip presentasi tujuh menit untuk final project Anda (bagian per bagian dengan alokasi waktu menit) dan satu entri ringkasan rilis kandidat beserta daftar perubahan terakhir; pastikan ringkasan menyebut status seluruh temuan (terbuka vs diperbaiki) dan satu paragraf penutup "mengapa website ini siap dirilis".

### Kunci Jawaban

<details>
<summary>Kunci Jawaban Evaluasi Bab 15</summary>

**Pilihan Ganda:**
1. **B.** QA adalah proses sistematis dan terukur, bukan seruan hari pengumpulan; ia membandingkan hasil dengan kriteria (checklist), bukan menambahkan fitur.
2. **C.** Pola utilitas-pertama menyuruh memeriksa kategori utilitas Bootstrap terlebih dahulu; CSS kustom hanya masuk bila utilitas tidak mencukupi.
3. **A.** Panel Styles memuat senarai aturan menyeluruh (termasuk yang tercoret/timpa; panel Computed menampilkan nilai akhir yang menyala).
4. **B.** Status temuan hanya bergeser setelah verifikasi ulang pada halaman/perangkat yang terdampak; persetujuan ide saja tidak cukup.
5. **C.** 4,5 : 1 untuk teks utama normal (WCAG 2.2 level AA); 3 : 1 berlaku untuk teks besar (≥24 px atau ≥18,66 px tebal).
6. **C.** M7 = QA + penyempurnaan: QA checklist terisi dan paket rilis kandidat; slide adalah artefak M8 pada pertemuan 16.
7. **B.** Perubahan kecil yang memecah bagian lain disebut regression; pencegahannya adalah penyapuan cepat halaman yang memakai komponen yang diubah.
8. **B.** Device toolbar dengan perpindahan breakpoint menyediakan catatan yang terukur dan terdokumentasi; perubahan manual jendela bukan penguian yang disiplin.

**Benar atau Salah:**
1. **Salah.** QA adalah kewajiban pembuat; review mandiri adalah bagian pertama dari setiap QA sprint.
2. **Benar.** Rilis kandidat berarti versi siap rilis menunggu persetujuan terakhir; begitu disetujui, ia menjadi rilis final.
3. **Salah.** CSS kustom wajib diberi komentar pengenal (`/* kustom */`) agar reviewer dapat membedakannya dari gaya bawaan framework.
4. **Salah.** Laporan profesional faktual dan netral; nada menyalahkan menurunkan kerja sama dan tidak menyediakan langkah perbaikan.
5. **Benar.** Checklist aksesibilitas Bab 13 adalah fondasinya; Bab 15 menerapkannya kembali sebagai pemeriksaan wajib.

**Analisis Kode (ringkasan):**
1. Cacat yang diharapkan ditemukan (minimal tiga): (a) `img` tanpa atribut `alt` — tambahkan `alt` deskriptif ("Keyboard Mekanis KX-210 dengan switch biru"); (b) teks link "Klik di sini" tidak bermakna — ganti menjadi "Lihat detail Keyboard Mekanis KX-210"; (c) label tanpa kaitan `for` dan input tanpa `id` — tambahkan `for="surel"` dan `id="surel"`; (d) `h5` di kartu berpotensi melompat level bila halaman memulai dari `h1` di header — pakai `h2`/`h3` sesuai hierarki; (e) `href="#"` membuat link mati — ganti `href="produk.html"`.
2. Aturan kedua (dengan `!important` dan selector bertingkat `div .produk-card .card-title`) yang menang karena kombinasi bobot lebih tinggi plus `!important`. Dua cacat: `!important` (menekan kaskade secara paksa dan mengikat refactoring masa depan) dan duplikasi nilai yang terpencar (dua deklarasi `font-size` untuk tujuan sama). Perbaikan: hapus aturan `!important`, sederhanakan ke satu selector `.produk-card .card-title`, dan ganti nilai literal dengan token/skala rem.

**Soal Praktik (kerangka jawaban):**
1. Tabel temuan yang lulus harus memuat ID, halaman, gejala, langkah reproduksi yang bisa diulang, severitas yang benar (Kritis murni untuk yang menghalangi), dan status yang berubah hanya setelah verifikasi ulang; tangkapan layar sebelum/sesudah menjadi bukti.
2. Skrip tujuh menit dibagi: 1 menit masalah, 1,5 menit solusi/design, 3 menit demo pada tiga breakpoint, 1 menit bukti QA, 1 menit refleksi; ringkasan rilis menyebut versi (v1.0.0-rc1), daftar perubahan, status semua temuan, dan kesimpulan kesiapan.

</details>

## Referensi

1. Bootstrap. (2024). *Bootstrap 5.3 documentation*. Diases 10 Maret 2026, dari https://getbootstrap.com/docs/5.3/
2. MDN Web Docs. (2026). *Debugging CSS* dan dokumentasi perkakas pengembang browser. Diases 10 Maret 2026, dari https://developer.mozilla.org/
3. W3C. (2023). *Web Content Accessibility Guidelines (WCAG) 2.2 — W3C Recommendation*. Diases 10 Maret 2026, dari https://www.w3.org/TR/wcag22/
4. Krug, S. (2014). *Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability* (ed. ke-3). San Francisco: New Riders.
5. Robbins, J. N. (2018). *Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics* (ed. ke-5). Sebastopol: O'Reilly Media.