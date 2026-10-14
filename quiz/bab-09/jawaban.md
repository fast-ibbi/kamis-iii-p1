# Kunci Jawaban & Rubrik — Bab 09: Pengenalan Bootstrap 5

> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)
> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)

---

### Kunci Pilihan Ganda

1. **C** — Navbar, kartu, badge, dan alert adalah komponen siap pakai; Layout berisi container dan grid, Utilities berisi kelas satu-tujuan, dan Helpers berisi kelas bantu seperti badge berwarna penuh serta clearfix.
2. **A** — Ikon tidak termuat di dalam file CSS inti Bootstrap, melainkan disediakan sebagai pustaka terpisah bernama Bootstrap Icons versi 1.11.3 yang wajib punya link tersendiri di setiap halaman.
3. **B** — Kelas warna Bootstrap 5.3 mengonsumsi variabel tema `--bs-primary-rgb`; mengubah nilainya ke RGB indigo (79, 70, 229) menggeser `text-primary`, `bg-primary`, dan badge ke identitas Tokosaya.
4. **D** — Lebar maksimum `.container` mengikuti breakpoint: 540/720/960/1140/1320 px mulai 576/768/992/1200/1400 px, sehingga pada 1400 px batasnya 1320 px.
5. **A** — Pola nama utility dibaca properti–sisi–breakpoint–nilai: `p` = padding, tanpa huruf sisi berarti keempat sisi, `lg` menandai ambang 992 px yang berlaku ke atas, dan `4` adalah skala spasi.
6. **B** — `col-lg-3` menindih tiga dari dua belas garis sehingga terbentuk empat kartu per baris mulai 992 px; delapan kartu menghasilkan dua baris rapi 4 + 4.
7. **C** — `mx` menunjuk margin kiri-kanan dan `auto` membuat keduanya terbagi otomatis, sehingga elemen blok tampil terletak di tengah wadahnya.
8. **D** — Kelompok Content berisi reboot, tipografi, tabel, gambar, dan kode; container serta grid masuk Layout, navbar dan kartu masuk Components, sedangkan `mb-3` dan `text-center` masuk Utilities.
9. **A** — Gutter diimplementasikan sebagai padding pada kolom yang dikompensasi margin negatif baris; tanpa `.row`, kompensasi itu tidak ada sehingga kolom kehilangan penyelajanan dan lebar kolom tidak tersusun sebagaimana mestinya.
10. **C** — Gejala "tampil polos" berarti stylesheet pustaka tidak terpakai; penyebab paling lazim adalah link CDN salah eja, gagal diambil, atau urutannya tertukar dengan `css/style.css`, sehingga pemeriksaan di panel Network adalah langkah diagnosis yang tepat.
11. **D** — Elemen `h3` menjaga struktur kepala tetap semantik dan terbaca pembaca layar, sementara kelas `h5` hanya mengubah ukuran visualnya; menulis `div` besar yang terlihat seperti judul merusak aksesibilitas.
12. **B** — Tombol bawaan mewarnai dirinya secara statis di dalam file pustaka, berbeda dari kelas warna semantik yang mengonsumsi variabel tema; karena itu identitas tombol dibentuk kelas kustom yang disandingkan dengan kelas `btn`.
13. **A** — Ketika pola yang sama berulang di banyak elemen, aturan bab ini menyarankan mengangkatnya menjadi kelas kustom berpola blok-elemen; utility tetap dipakai untuk gaya umum sekali pakai, dan menimpa file pustaka selalu dihindari.
14. **D** — Framework bermanfaat untuk pola yang berulang dan tenggat ketat; proyek satu halaman dengan desain khas dan tenggat longgar justru lebih tepat ditulis dengan HTML/CSS murni berbasis token.
15. **C** — Empat puluh tampilan serupa, tim pemula, tenggat tiga minggu, dan identitas kampus yang kuat persis pola keputusan pada studi kasus: Bootstrap menyuplai pola layout berulang sementara lapisan token menjaga identitas, semuanya tanpa JavaScript.

### Jawaban Essay

1. **Poin inti:**
   - Layout: container dan grid system, yaitu inti pengaturan lebar dan penyusunan halaman.
   - Content: reboot (normalisasi gaya bawaan browser), tipografi, tabel, gambar, dan kode.
   - Forms: gaya elemen isian, dibangun penuh pada Bab 11.
   - Components: komponen siap pakai seperti navbar, kartu, badge, dan alert.
   - Helpers: kelas bantu kombinasi seperti badge berwarna penuh dan clearfix.
   - Utilities: kelas kecil satu-tujuan untuk jarak, tampilan, perataan, dan warna.
   - Pemetaan kebutuhan: (a) pembungkus lebar maksimum → Layout (`.container`); (b) normalisasi gaya bawaan browser → Content (reboot); (c) kelas satu-tujuan pengatur jarak → Utilities (`mb-3`, `p-4`); (d) navbar → Components.
   - Bootstrap Icons tidak berada di dalam file CSS inti, melainkan pustaka terpisah (versi 1.11.3) yang dipasang lewat link CDN tersendiri dan dipanggil dengan pola kelas `bi bi-nama-ikon`.
   **Skor:** 3 (enam kelompok dijelaskan) + 4 (pemetaan empat kebutuhan) + 2 (posisi Bootstrap Icons) + 1 (kerapian uraian) = 10

2. **Poin inti:**
   - Kontrak tiga lapis: `container` membungkus dan mengendalikan lebar maksimum, `row` menyusun kolom agar sejajar sekaligus menjadi flex container, dan `col-*` berisi konten seraya menerima padding yang membentuk gutter.
   - Kolom wajib anak langsung `row` karena gutter diimplementasikan sebagai padding kolom yang dikompensasi margin negatif baris; di luar `row`, kompensasi itu hilang sehingga lebar kolom dan penyelajanan tidak lagi benar.
   - `col-12` berlaku di semua ukuran (tanpa awalan breakpoint), `col-md-6` mulai 768 px ke atas, dan `col-lg-3` mulai 992 px ke atas; kelas tanpa awalan menjadi dasar dan tiap breakpoint yang lebih besar menimpanya bila kelasnya ditulis.
   - Pada 500 px: hanya `col-12` yang berlaku → satu kartu per baris (setiap kartu penuh).
   - Pada 800 px: `col-md-6` berlaku → dua kartu per baris.
   - Pada 1100 px: `col-lg-3` berlaku → empat kartu per baris.
   **Skor:** 3 (tiga lapis kontrak) + 3 (alasan kolom harus di dalam row) + 3 (perilaku pada tiga lebar uji beserta jumlah kartu per baris) + 1 (penegasan sifat mobile-first) = 10

3. **Poin inti:**
   - Aturan kaskade: bila dua aturan ber-*specificity* setara bertabrakan, aturan yang termuat paling belakang yang menang; karena itu `css/style.css` harus berada setelah stylesheet Bootstrap.
   - Urutan baku pada starter template: Bootstrap → Bootstrap Icons → Google Fonts → `css/style.css`; Google Fonts diletakkan di antara keduanya karena hanya memuat definisi font.
   - Mekanisme pertama overlay adalah urutan pemuatan berkas: kelas kustom seperti `btn-tokosaya`, `hero-cta`, `produk-card`, dan `badge-unggulan` menang atas rupa bawaan pada specificity setara.
   - Mekanisme kedua adalah penyesuaian variabel CSS: kelas warna Bootstrap 5.3 mengonsumsi `--bs-primary-rgb`, sehingga mengubah nilainya ke 79, 70, 229 menggeser `text-primary`, `bg-primary`, dan badge ke indigo tanpa menyentuh file pustaka.
   - Bila urutan link tertukar, seluruh gaya identitas Tokosaya tertelan gaya bawaan pustaka: tombol kembali biru, badge kembali ke palet Bootstrap, dan tipografi kustom tidak terlihat.
   - Kedua mekanisme itu menjaga pustaka tetap utuh sehingga pemutakhiran Bootstrap kelak tidak merusak berkas proyek.
   **Skor:** 2 (hukum kaskade) + 1 (urutan link baku) + 3 (mekanisme urutan pemuatan) + 2 (mekanisme variabel `--bs-primary-rgb`) + 2 (akibat bila urutan tertukar) = 10

4. **Poin inti:**
   - Buku ini memakai hanya file CSS Bootstrap lewat CDN, tanpa `bootstrap.bundle`; sebabnya mata kuliah dan proyek berpijak pada HTML/CSS murni tanpa JavaScript, dan keputusan itu ditandai komentar di setiap `head` sebagai jejak keputusan, bukan kelalaian.
   - Konsekuensinya komponen yang aslinya interaktif—menu lipat, modal, carousel, accordion—hanya dipelajari dalam bentuk markup, kelas visual, dan status statis pada Bab 10.
   - Navigasi mobile disiasati dengan markup navbar Bootstrap yang dibiarkan selalu terlihat, dibungkus kelas flexbox seperti `d-flex flex-row flex-wrap gap-2` agar link menyusun baris dan dapat melentur di layar kecil; Bab 10 melanjutkan dengan pola navigasi mobile berbasis CSS kustom.
   - Risiko siasat itu: baris navigasi bisa menjadi panjang dan menurunkan kenyamanan karena semua tautan selalu tampil, serta tidak ada perilaku buka-tutup yang biasa diharapkan pengguna.
   - Peringanan: memakai `flex-wrap` dan `gap` agar tautan tetap menyusun rapi, membatasi jumlah tautan utama, dan secara jujur menjelaskan kepada pemilik UMKM bahwa perilaku lipat memerlukan JavaScript di luar cakupan mata kuliah—sementara secara industri tim profesional biasanya memang memuat bundle tersebut.
   **Skor:** 3 (batas keputusan dan alasannya) + 3 (konsekuensi bagi komponen interaktif) + 2 (siasat navigasi mobile) + 2 (satu risiko dan satu cara meringankannya) = 10

5. **Poin inti:**
   - Kriteria keputusan yang bisa dipakai, misalnya: jumlah halaman dan pola berulang, ukuran serta keterampilan tim, tenggat, kekuatan identitas merek, dan kebutuhan perilaku interaktif.
   - Bootstrap 5.3.3 via CDN + token kustom unggul pada jumlah halaman dan pola berulang (grid serta utility mempercepat), pada keterampilan pemula (kelas terbaca manusia dan dokumentasi tuntas), pada tenggat pendek, dan pada pemeliharaan tanpa alat pembangun karena cukup link CDN.
   - Kelemahan yang harus diakui: rupa bawaan cenderung seragam dan berkas gaya lebih besar dari kebutuhan, sehingga identitas merek menuntut lapisan overlay kustom.
   - Tailwind CSS utility-first memberi kebebasan bentuk besar karena kelasnya atomik dan tidak menyediakan komponen berantai, tetapi markup menjadi ramai, kurva awal lebih curam, dan pemakaian penuh lazim ditemani alat perakit.
   - Pada kondisi soal (delapan halaman berpola sama, dua mahasiswa pemula paruh waktu, dua minggu, identitas kuat, interaksi minimal) pilihan yang paling masuk akal adalah **Bootstrap + lapisan token kustom**.
   - Trade-off yang diterima secara sadar: seluruh identitas warna dan huruf bergantung pada lapisan kustom sehingga bila overlay dihapus, tampilan kembali seragam seperti bawaan pustaka; biaya ini ditutup dengan mendokumentasikan token pada satu berkas `style.css`.
   **Skor:** 3 (minimal tiga kriteria keputusan dipakai) + 3 (evaluasi kedua pilihan secara berimbang) + 2 (keputusan akhir disertai alasan yang sesuai kondisi soal) + 2 (satu trade-off diakui secara sadar) = 10

### Jawaban Praktikum Lab

1. **Langkah solusi:** Empat link berurutan: Bootstrap 5.3.3 (`cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`), Bootstrap Icons 1.11.3, Google Fonts Poppins + Inter, lalu `css/style.css` paling belakang. Komentar `<!-- Tanpa bootstrap.bundle (JavaScript di luar cakupan mata kuliah) -->` disimpan di `head`. Verifikasi di tab Network: kedua permintaan CDN berstatus 200, dan tombol uji tampil bergaya biru bawaan.
   **Kriteria penilaian:** empat link lengkap dan berurutan benar 35%; meta viewport serta komentar penanda ada 20%; bukti status permintaan di tab Network 25%; dua kalimat alasan urutan link tepat 20%.

2. **Langkah solusi:** `<section class="container py-5">` berisi `h2` lalu `<div class="row g-4">` dengan empat `<article class="col-12 col-sm-6 col-lg-3 text-center">`; setiap artikel memuat `<i class="bi bi-tags fs-1 text-primary" aria-hidden="true"></i>`, judul `h3`, dan paragraf berkelas `text-body-secondary`. Hasil: 1 kartu per baris pada 375 px, 2 kartu pada 768 px, dan 4 kartu pada 1200 px.
   **Kriteria penilaian:** struktur container → row → col benar 30%; kelas kolom menghasilkan 1/2/4 kartu per baris 30%; Bootstrap Icons termuat dan ikon dekoratif memakai `aria-hidden` 20%; tanpa satu baris CSS kustom 20%.

3. **Langkah solusi:** Tiga cacatnya: (1) nama ikon `bi-tag` tidak tersedia sehingga ikon tampil sebagai kotak kosong—perbaikan: pakai `bi-tags`; (2) kartu ketiga memakai `col-md-5` sehingga jumlah garis baris itu menjadi 4 + 4 + 5 = 13, melewati penggaris 12—akibatnya kartu ketiga terlempar ke baris berikutnya, dan perbaikannya mengubahnya menjadi `col-md-4` agar tiga kartu duduk sebaris; (3) kelas `mb-6` tidak ada pada skala spasi Bootstrap yang berkisar 0–5, sehingga jarak bawah judul seksi hilang secara senyap—perbaikan: pakai `mb-4`. Versi perbaikan mempertahankan `row g-4`, `text-center`, `fs-1`, dan `text-body-secondary`; kalimat penjelasan menyebut bahwa kesalahan eja kelas tidak menimbulkan galat tampilan apa pun (efek senyap), karena browser hanya mengabaikan kelas yang tidak dikenal.
   **Kriteria penilaian:** ketiga cacat diidentifikasi dan dijelaskan dengan dampak 45%; penjelasan penjumlahan garis 12 pada cacat `col-md-5` 20%; versi perbaikan berfungsi pada 768 px dan 1200 px 25%; kalimat penjelasan efek senyap ejaan kelas 10%.

4. **Langkah solusi:** Tabel hasil ukur: 375 px → 100%; 600 px → 540 px; 800 px → 720 px; 1000 px → 960 px; 1300 px → 1140 px; 1500 px → 1320 px. Paragraf: `.container` dipakai untuk isi yang dibaca manusia seperti seksi utama dan kartu produk karena baris teks tetap nyaman pada lebar maksimum, sedangkan `.container-fluid` dipakai untuk bilah yang memang menempel kiri-kanan seperti footer gelap atau bilah pengumuman.
   **Kriteria penilaian:** enam nilai pengukuran benar 45%; halaman uji memuat kedua jenis container 15%; paragraf pertimbangan relevan dan menyebut contoh elemen 25%; pemakaian panel Computed sebagai bukti 15%.

5. **Langkah solusi:** Gaya kustom grid diganti markup `<ul class="row g-4">` dengan empat `<li class="col-12 col-sm-6 col-xl-3">` (kartu tetap boleh memakai kelas kustom `stat-kartu-item` untuk identitas). Hasil visual sama: 1 kolom di bawah 576 px, 2 kolom mulai `sm`, 4 kolom mulai `xl`. Perbandingan: versi Bootstrap lebih ringkas karena tiga blok media query hilang, sedangkan versi CSS kustom lebih menjaga identitas karena seluruh ukuran memakai token `--space-unit` dan `--radius`; pada refactor ini identitas tetap aman karena kelas kustom dipertahankan sebagai pembungkus tiap kartu.
   **Kriteria penilaian:** markup hasil refactor benar dan berfungsi 40%; hasil visual sama pada tiga lebar uji 25%; perbandingan tiga sampai lima kalimat argumentatif 25%; kelas kustom identitas tidak hilang percuma 10%.

6. **Langkah solusi:** Pemeriksaan: (a) satu `h1` pada hero/latar utama dengan `h2` untuk setiap section dan `h3` untuk judul kartu; (b) setiap ikon dekoratif memakai `aria-hidden="true"` karena makna dibawa teks di sebelahnya; (c) `alt` gambar kartu menyebut nama produk, misalnya "Keyboard Mekanis KX-210"; (d) badge tetap memuat teks (Best Seller, Tersedia, Stok Terbatas, Baru) dan memakai kombinasi `text-bg-*` agar warna teks otomatis kontras; (e) tautan footer memakai `link-light` di atas `.footer-tokosaya` gelap; (f) teks tautan navigasi deskriptif (Beranda, Katalog, Tentang, Kontak, Keranjang). Perbaikan lazim: menambahkan `aria-hidden` pada ikon yang belum ditandai atau memperbaiki `alt` yang masih generik.
   **Kriteria penilaian:** enam poin diperiksa dengan status dan bukti 40%; satu perbaikan benar dan diuji 30%; screenshot sebelum-sesudah 20%; dua kalimat penjelasan keterkaitan aksesibilitas 10%.

7. **Langkah solusi:** `latihan-bootstrap/hero.html` memuat starter template, lalu `<header class="hero text-center py-5">` berisi `container`, `h1.hero-title.display-5.fw-bold.mb-3`, `p.lead.mb-4`, dan `a.btn.hero-cta.px-4`. Pada `css/style.css`: token Tokosaya di `:root`, `.hero { background: linear-gradient(135deg, var(--clr-primary) 0%, var(--clr-primary-dark) 100%); color: #FFFFFF; }`, `.hero-cta { background-color: var(--clr-accent); border-color: var(--clr-accent); color: var(--clr-dark); font-weight: 600; }`, dan `--bs-primary-rgb: 79, 70, 229`. Kelas Bootstrap yang dipertahankan: `py-5`, `display-5`, `fw-bold`, `mb-3`, `lead`, dan `px-4`, karena semuanya urusan ukuran dan jarak sementara warna serta latar berasal dari token.
   **Kriteria penilaian:** hero tampil sesuai rancangan di 375 px dan 1200 px 30%; seluruh warna dari token 25%; penyelarasan `--bs-primary-rgb` ada 20%; daftar kelas Bootstrap yang dipertahankan beserta alasan 25%.

8. **Langkah solusi:** Setiap kartu ditulis `<div class="col-12 col-md-6 col-lg-4"><article class="card produk-card h-100">` dengan `<div class="card-body d-flex flex-column">`, badge di awal, harga berkelas `produk-harga`, deskripsi berkelas `card-text small`, dan tombol `<a class="btn btn-tokosaya mt-auto">Lihat Detail</a>`. Badge memakai `text-bg-warning` (Stok Terbatas), `badge-unggulan` (Best Seller), dan `text-bg-primary` (Baru). Dengan `h-100` tinggi kartu mengikuti tinggi baris dan `mt-auto` menekan tombol ke dasar kartu, sehingga ketiga tombol duduk pada garis dasar yang sama pada 1200 px.
   **Kriteria penilaian:** `h-100`, `d-flex flex-column`, dan `mt-auto` dipakai benar 40%; badge tiga varian tampil sesuai 20%; bukti tombol sejajar pada tangkapan layar 1200 px 25%; kalimat kesimpulan tentang `mt-auto` 15%.

9. **Langkah solusi:** Nilai terhitung yang diharapkan: badge `text-bg-primary` berwarna indigo Tokosaya (RGB 79, 70, 229) karena kelas warna semantik Bootstrap mengonsumsi `--bs-primary-rgb`; tombol `btn-tokosaya` juga indigo karena kelas kustom memakai token `--clr-primary`; sedangkan tombol `btn btn-primary` tetap biru bawaan pustaka. Penjelasan: rupa tombol bawaan dikomposisi statis di dalam file pustaka sehingga variabel tema tidak menggesernya—itulah alasan bab ini membentuk tombol identitas sebagai kelas kustom yang disandingkan dengan kelas `btn`.
   **Kriteria penilaian:** tabel tiga nilai warna terhitung benar 40%; bukti dari panel Computed 20%; dua kalimat penjelasan tepat 30%; halaman uji memuat ketiga contoh 10%.

10. **Langkah solusi:** Dengan koneksi diputus, link CDN gagal diambil sehingga gaya pustaka tidak berlaku: tipografi kembali ke font fallback sistem, tombol dan badge tampil polos tanpa warna maupun padding bawaan, dan kolom kartu tidak lagi berjajar karena kelas `col-*` tidak memiliki aturan. Dua alternatif mitigasi: (1) mengunduh berkas CSS pustaka dan menyimpannya di folder proyek sebagai berkas lokal; (2) tetap memakai CDN namun menyiapkan salinan lokal hanya untuk keperluan demo. Untuk kebutuhan demo kelas, mitigasi salinan lokal lebih tepat karena halaman tetap tampil utuh tanpa jaringan, dengan konsekuensi berkas pustaka harus ikut disimpan dan dijaga versinya di dalam proyek (dan pemutakhiran versi dilakukan manual).
   **Kriteria penilaian:** tangkapan layar kondisi tanpa koneksi 20%; catatan tiga hal yang berubah benar 30%; dua mitigasi disusun 20%; evaluasi pemilihan mitigasi disertai alasan dan konsekuensi penyimpanan berkas 30%.
