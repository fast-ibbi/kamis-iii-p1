# Kunci Jawaban & Rubrik — Bab 10: Komponen Bootstrap

> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)
> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)

---

### Kunci Pilihan Ganda

1. **B** — Komponen adalah potongan antarmuka yang sudah dikemas lengkap: struktur *markup* standar, kelas-kelas gaya, dan aturan tampilan di berbagai ukuran layar, sehingga tinggal disusun sesuai resep dokumentasi.
2. **C** — Salah satu dari tiga alasan bab ini adalah konsistensi antarhalaman: karena halaman A dan B memakai kelas kartu yang sama, tampilannya otomatis mirip tanpa pengawasan tambahan.
3. **A** — Tanpa paket JavaScript, menu `navbar-nav` yang tidak dibungkus tombol pembuka selalu tampil; di bawah 992 piksel susunannya menumpuk vertikal di bawah merek.
4. **D** — Tabel pewarnaan semantik Tokosaya memetakan "Stok Terbatas" ke `text-bg-danger` karena bermakna kritis dan mendesak.
5. **B** — Konvensi proyek: Bootstrap 5.3.3 CSS dulu, lalu Bootstrap Icons 1.11.3, lalu Google Fonts, dan `css/style.css` paling akhir supaya aturan kustom punya kesempatan menimpa gaya Bootstrap tanpa `!important`.
6. **A** — `navbar-expand-lg` membuat menu mendatar sejak 992 piksel, dan `ms-auto` mendorong kelompok menu ke sisi kanan sehingga merek tetap di kiri pada satu baris.
7. **C** — Halaman aktif dan tombol `disabled` bukan tautan tujuan; memakai `span` menghindari janji navigasi palsu kepada pengguna dan pembaca layar.
8. **D** — Sebagai anak dari wadah flex, badge tanpa `align-self-start` akan ikut meregang selebar wadah; kelas itu menahannya agar hanya selebar isinya.
9. **B** — Kelas `collapsed` pada tombol dan ketiadaan `show` pada panel menyatakan keadaan tertutup, dan tanpa paket JavaScript klik tidak memicu perubahan apa pun.
10. **D** — `card-group` menempelkan kartu menjadi satu bingkai rapi; katalog Tokosaya memilih kartu lewat grid karena jarak antarkartu bisa diatur dengan `g-4`.
11. **C** — Pola populer list group + badge memakai `d-flex justify-content-between align-items-center` sehingga label di kiri dan status di kanan sejajar.
12. **D** — Karena ikon adalah *glyph* font, ukurannya mengikuti ukuran teks wadah (kelas `fs-*`) dan warnanya mewarisi kelas `text-*`; tidak perlu `width`/`height` ataupun berkas SVG baru.
13. **A** — Ikon baru "bermakna" kalau diberi nama; status yang hanya disampaikan lewat warna dan lambang sulit dibaca sebagian pengguna, sedangkan badge semantik bertulis membawa maknanya lewat kata.
14. **C** — Pola inti kartu: `h-100` menyamakan tinggi kartu, `card-img-top` menempelkan gambar di tepi atas, `d-flex flex-column` menata isi menurun, dan `mt-auto` menempelkan baris terakhir (tombol) ke dasar kartu.
15. **A** — Buku ini memakai varian statis: panel dibungkus `<div class="collapse show navbar-collapse">` sehingga terbuka permanen; atribut `data-bs-*` justru menandakan pola yang butuh paket JavaScript.

### Jawaban Essay

1. **Poin inti:**
   - Pola "kelas dasar + kelas *variant*": kelas dasar menetapkan bentuk dasar, kelas *variant* menetapkan warna/makna.
   - Contoh tombol: `class="btn btn-primary"`; badge: `class="badge text-bg-success"`; alert: `class="alert alert-warning" role="alert"`.
   - Alert ditulis tanpa tombol tutup karena perilaku menutupnya dikendalikan paket JavaScript Bootstrap yang berada di luar cakupan mata kuliah; pesannya berdiri permanen seperti papan pengumuman.
   **Skor:** 2 + 2 + 1 = 5

2. **Poin inti:**
   - Breadcrumb: `active` + `aria-current="page"` pada `li.breadcrumb-item` terakhir, yang tidak lagi berupa tautan.
   - Pagination: `active` + `aria-current="page"` pada halaman sekarang, `disabled` pada panah yang tidak bisa dipakai; status ditulis pada elemen `span` di dalam `li.page-item`.
   - List group: `active` + `aria-current="true"` pada item yang sedang dipilih.
   - Status sebagai kelas aman untuk halaman statis karena semuanya diwujudkan oleh CSS tanpa memerlukan data interaktif atau skrip.
   **Skor:** 1 + 2 + 1 + 2 = 6

3. **Poin inti:**
   - Ukuran mengikuti teks: naikkan ukuran teks wadahnya, mis. `<i class="bi bi-funnel fs-4" aria-hidden="true"></i>`.
   - Warna mewarisi teks: `<i class="bi bi-cart3 text-primary" aria-hidden="true"></i>` pada tautan berwarna utama.
   - Ikon bermakna diberi nama: ikon berdiri sendiri tanpa kata pendamping diberi `aria-label` atau teks rahasia pada tautan; ikon hiasan di samping kata diberi `aria-hidden="true"` supaya tidak dibacakan dua kali.
   **Skor:** 2 + 2 + 2 = 6

4. **Poin inti:**
   - Accordion: keadaan dinyatakan kelas tambahan `collapsed` pada tombol dan kelas `show` pada panel `accordion-collapse collapse`; panel tanpa `show` tersimpan.
   - Modal: struktur bertingkat `modal` → `modal-dialog` → `modal-content` (header, body, footer) dengan kelas `show`, ditampilkan di aliran halaman memakai gaya *inline* berlabel khusus demonstrasi.
   - Carousel: kelas `active` pada `carousel-item` menentukan gambar yang tampak, sedangkan item lain tetap tersimpan.
   - Disebut lebih jujur karena mahasiswa jadi tahu bagian mana yang bisa dikerjakan HTML dan CSS saja, dan bagian mana yang di dunia kerja biasanya ditangani JavaScript.
   **Skor:** 2 + 2 + 1 + 2 = 7

5. **Poin inti:**
   - Keuntungan: tidak ada menu yang hilang, tidak ada tombol palsu yang menjanjikan interaksi, seluruh tautan tetap terjangkau di layar kecil, dan *markup*-nya lebih sederhana untuk dirawat.
   - Kerugian: menu memakan ruang vertikal lebih banyak di layar kecil dan tidak seluwes pola hamburger untuk daftar menu yang panjang.
   - Alasan beralih: ketika jumlah tautan menu bertambah banyak sehingga menumpuk mengganggu, atau ketika tim proyek memutuskan memuat paket JavaScript resmi Bootstrap.
   - Syarat pola hamburger: menyertakan tombol `navbar-toggler` beserta `navbar-toggler-icon`, panel `collapse navbar-collapse`, dan atribut `data-bs-*` yang dibaca paket JavaScript tersebut.
   **Skor:** 2 + 1 + 2 + 2 = 7

### Jawaban Praktikum Lab

1. **Langkah solusi:** Tiga kesalahan: (i) kelas `navbar-expand-lg` belum terpasang sehingga menu tidak dikembalikan ke pola mendatar pada layar besar; (ii) utilitas `ms-auto` belum dipasang pada `navbar-nav` sehingga menu tidak terdorong ke kanan; (iii) tombol `navbar-toggler` tetap ada padahal tanpa paket JavaScript ia hanya menjanjikan interaksi yang tidak akan terjadi. Perbaikan: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">` dengan `<ul class="navbar-nav ms-auto">` berisi empat `li.nav-item` (`nav-link`, dan `active` + `aria-current="page"` pada Katalog) plus tautan Keranjang berikon.
   **Kriteria penilaian:** struktur tiga kelas kunci tepat 40%; tombol toggler dihapus dan `aria-current` terpasang 25%; menu menumpuk di 375 piksel dan mendatar di 1200 piksel (terbukti dari tangkapan layar) 35%.

2. **Langkah solusi:** Pada kartu, nilai *computed* `border-radius` mengikuti `var(--radius)` dan `box-shadow` mengikuti `var(--shadow-card)` — keduanya berasal dari `css/style.css`, bukan `bootstrap.min.css`. Panel Styles menandai aturan aktif dan berkas asalnya. Setelah `--radius` diubah menjadi `16px`, radius kartu ikut berubah karena aturan kustom dimuat paling akhir sehingga menang atas gaya komponen Bootstrap tanpa perlu `!important`.
   **Kriteria penilaian:** identifikasi berkas aturan pemenang 35%; catatan nilai *computed* lengkap (radius, shadow, tinggi gambar 160 piksel, `object-fit: cover`) 35%; penjelasan urutan pemuatan CSS 30%.

3. **Langkah solusi:** Dua potongan pertama adalah ikon hiasan di samping kata, jadi diberi `aria-hidden="true"`. Tautan ikon pencarian tanpa kata pendamping butuh nama, mis. `<a class="nav-link" href="katalog.html" aria-label="Cari produk"><i class="bi bi-search" aria-hidden="true"></i></a>`. Ikon corong di samping kata "Urutkan:" dan ikon buku di samping judul buku cukup `aria-hidden="true"`. Panah pagination tanpa teks butuh nama: `aria-label="Halaman berikutnya"` pada tautan, ikonnya `aria-hidden="true"`. Panel Accessibility lalu membacakan nama dari `aria-label` atau teks tautan, bukan dari kelas ikon.
   **Kriteria penilaian:** pemilahan hiasan vs bermakna benar 40%; *markup* perbaikan valid 30%; bukti inspeksi Accessibility 30%.

4. **Langkah solusi:** Strip pengumuman ditulis `<div class="alert alert-info" role="alert">Kirim Cepat gratis untuk pembelian di atas Rp500.000.</div>` tanpa tombol tutup. Baris legenda memakai empat pasangan badge–teks: `text-bg-success` Tersedia, `text-bg-warning` Best Seller, `text-bg-danger` Stok Terbatas, `text-bg-primary` Baru.
   **Kriteria penilaian:** `role="alert"` dan ketiadaan tombol tutup 30%; keempat variant badge tepat 40%; penempatan di atas grid tanpa merusak kolom 30%.

5. **Langkah solusi:** Item pertama menjadi `<li class="list-group-item d-flex justify-content-between align-items-center">`. Item kedua memakai pola yang sama dengan badge `text-bg-success` bertulis "Tersedia". Item ketiga menjadi `<li class="list-group-item active" aria-current="true">` sehingga pembaca layar tahu item itu sedang dipilih.
   **Kriteria penilaian:** pola `d-flex justify-content-between align-items-center` benar 40%; badge semantik sesuai makna 30%; `active` + `aria-current` pada item terpilih 30%.

6. **Langkah solusi:** `<nav aria-label="breadcrumb"><ol class="breadcrumb mb-0">` dengan `li.breadcrumb-item` untuk Beranda (tautan ke `index.html`), Katalog (tautan ke `katalog.html`), dan tingkat terakhir `li.breadcrumb-item active` + `aria-current="page"` berisi teks "Keyboard Mekanis KX-210" tanpa tautan. `aria-label` diperlukan karena halaman sudah punya elemen `nav` lain; tanpa label, pembaca layar hanya mendengar "navigasi" tanpa tahu bahwa itu jalur posisi halaman.
   **Kriteria penilaian:** struktur `nav` + `ol` + `breadcrumb-item` 35%; status tingkat terakhir dan `aria-current` 35%; penjelasan fungsi `aria-label` 30%.

7. **Langkah solusi:** Di `css/style.css` tambahkan aturan `.produk-card { border: 1px solid var(--clr-border); border-radius: var(--radius); box-shadow: var(--shadow-card); overflow: hidden; transition: transform 0.2s ease; }`, `.produk-card:hover { transform: translateY(-4px); }`, dan `.produk-card .card-img-top { height: 160px; object-fit: cover; }`. Atribut `style` dihapus dari HTML dan kartu memakai `class="card h-100 produk-card"`.
   **Kriteria penilaian:** seluruh gaya *inline* berpindah ke CSS kustom 40%; pemakaian variabel token (tanpa nilai heksadesimal mentah) 30%; efek *hover* CSS murni dan tampilan identik sebelum–sesudah 30%.

8. **Langkah solusi:** Halaman 1 menjadi `<li class="page-item"><a class="page-link" href="katalog.html">1</a></li>`; halaman 2 menjadi `<li class="page-item active" aria-current="page"><span class="page-link">2</span></li>`; halaman 3 tetap tautan. Panah kiri menjadi tautan `<a class="page-link" href="katalog.html">` berikon `bi bi-chevron-left` dengan `aria-hidden="true"`, sedangkan panah kanan menjadi `<li class="page-item disabled"><span class="page-link">`. Deret tetap dibungkus `ul.pagination justify-content-center`.
   **Kriteria penilaian:** pemindahan `active` + `aria-current` ke halaman 2 dan pemakaian `span` 40%; status `disabled` pada panah kanan 30%; kerapian tautan halaman 1 dan 3 serta perataan tengah 30%.

9. **Langkah solusi:** Item pertama: tombol `accordion-button collapsed` dengan panel `accordion-collapse collapse` tanpa `show`. Item kedua: tombol tanpa kelas `collapsed` dengan panel `accordion-collapse collapse show`. Modal statis memakai struktur `modal show` → `modal-dialog` → `modal-content` (header/body/footer) dengan gaya *inline* `display: block; position: static;` berkomentar `<!-- khusus demonstrasi -->`. Tombol silang tidak berfungsi karena perilaku menutupnya dikendalikan paket JavaScript Bootstrap yang tidak dimuat.
   **Kriteria penilaian:** pasangan `collapsed`/`show` pada item yang benar 40%; struktur modal bertingkat 30%; komentar khusus demonstrasi dan penjelasan batas tanpa JavaScript 30%.

10. **Langkah solusi:** Hasil pengamatan yang diharapkan: 1 kartu per baris pada 360 dan 575 piksel (kelas `col-12`); 2 kartu per baris mulai 576 hingga 991 piksel (`col-sm-6`); 4 kartu per baris mulai 992 piksel ke atas (`col-lg-3`). Pada lebar 576 piksel batas sm mengambil alih, pada 992 piksel batas lg mengambil alih. Overlay grid DevTools menunjukkan setiap sel memakai kelipatan dua belas kolom (12 → 6 → 3).
   **Kriteria penilaian:** tabel enam baris dengan angka tepat 40%; penjelasan kelas pemenang di tiap batas 35%; bukti overlay grid dan kesimpulan 25%.
