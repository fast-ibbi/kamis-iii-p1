# Contoh Proyek: Website CV Rizky Ardiansyah

Contoh proyek untuk mata kuliah **Frontend Development dan Web Design**. Empat belas
folder kumulatif, satu per bab yang berdeck (Bab 1–7 dan 9–15), semuanya membangun
**satu website CV** milik persona fiktif:

> **Rizky Ardiansyah** — mahasiswa semester 5 Program Studi Sistem Informasi,
> Universitas Teknologi Nusantara, Yogyakarta.

Proyek berjalan di slide memakai studi kasus **Tokosaya** (toko online). Contoh ini
memindahkan seluruh pelajarannya ke kasus **CV**, dengan kosakata kelas, nama token, dan
urutan langkah yang sama supaya slide dan berkas bisa dibaca berdampingan.

---

## Cara menjalankan

Folder-folder ini hanya berkas statis, jadi bisa dibuka dengan dua cara.

```bash
# 1. langsung: klik dua kali index.html, atau
# 2. server lokal (disarankan, jalur relatif lebih mirip hosting):
cd contoh-cv
python3 -m http.server 8000
# lalu buka http://localhost:8000/
```

Mulai Bab 9 halaman memuat Bootstrap dan Google Fonts dari CDN, sehingga butuh koneksi.
Tanpa koneksi, halaman tetap terbaca karena setiap keluarga huruf punya fallback stack.

---

## Peta bab → folder

| Bab | Folder | Yang ditambahkan | Berkas |
| --- | --- | --- | --- |
| 1 | `bab-01-profil-html/` | Halaman profil pertama: heading, gambar, daftar, dua halaman bertaut | `index.html`, `rencana.html`, `img/` |
| 2 | `bab-02-semantik/` | Landmark semantik untuk beranda dan halaman tentang | `index.html`, `tentang.html` |
| 3 | `bab-03-css-dasar/` | Satu CSS eksternal: selector, class hook, pseudo-class, specificity | `+ css/style.css` |
| 4 | `bab-04-tipografi/` | Google Fonts, skala `rem`, `clamp()`, design token pertama | `css/style.css` |
| 5 | `bab-05-box-model/` | Kartu proyek: `border-box`, padding/margin, badge `position`, elipsis | `index.html`, `css/style.css` |
| 6 | `bab-06-flexbox/` | Nav, hero, baris kartu, dan footer jadi flex container | `css/style.css` |
| 7 | `bab-07-grid/` | Grid kartu, media query mobile-first, tabel bisa digulir | `css/style.css` |
| 9 | `bab-09-bootstrap/` | Bootstrap 5.3.3: container, grid 12 kolom, utility; layout CSS lama dibuang | `index.html`, `tentang.html`, `css/style.css` |
| 10 | `bab-10-komponen/` | Navbar, kartu, badge, alert, breadcrumb, pagination, list group, komponen statis | `+ komponen.html` |
| 11 | `bab-11-form/` | Form kontak: label terlihat, fieldset, input-group, status, autocomplete | `index.html`, `komponen.html` |
| 12 | `bab-12-design-system/` | Styleguide 14 bagian bernomor: token, tipe, jarak, tombol, badge, alert, kartu, navigasi, list group, accordion/modal/carousel, form, ikon, do/don't | `komponen.html` → `styleguide.html` |
| 13 | `bab-13-a11y/` | Skip link, cincin fokus, `picture`, navigasi menumpuk, `prefers-reduced-motion` | Ketiga halaman, `css/style.css` |
| 14 | `bab-14-figma/` | Panel detail proyek 7:5, proyek terkait, catatan fidelity | `index.html` (§`proyek-detail`), `catatan-fidelity.txt` |
| 15 | `bab-15-final/` | Checklist rilis, matriks uji, laporan temuan, refactor CSS | `+ qa.html` |

Folder `index.html` di akar adalah daftar klik-able keempat belas tahap itu.

Ingin membandingkan kode antar tahap tanpa mengunduh zip tiap tag? Lihat
[`PERBANDINGAN.md`](PERBANDINGAN.md) — berisi tautan diff GitHub antar tahap, daftar
tag → commit, dan pemakaian `scripts/compare-contoh-cv.sh`.

Setiap folder punya `README.md` sendiri yang menjelaskan **pekerjaan pada bab itu**: apa
yang berubah dari folder sebelumnya (berkas mana, baris berapa, aturan CSS apa), cara
memeriksanya di DevTools, dan apa yang diwariskan ke bab berikutnya. Mulailah dari
`bab-01-profil-html/README.md` bila ingin membaca proyek sebagai urutan pekerjaan,
bukan sebagai hasil akhir.

### Halaman di setiap tahap

| Berkas | Sifat | Isi |
| --- | --- | --- |
| `index.html` | publik | Beranda panjang: hero → keahlian → proyek → detail proyek → kontak |
| `tentang.html` | publik | Profil, pendidikan (tabel), organisasi, ketersediaan (`dl`) |
| `komponen.html` | internal | Ada di Bab 10–11: rig komponen Bootstrap |
| `styleguide.html` | internal | Mulai Bab 12: 14 bagian bernomor (token, tipe, jarak, komponen, do/don't) |
| `qa.html` | internal | Hanya Bab 15: checklist rilis dan laporan temuan |

---

## Yang diamati di tiap bab

Tiga titik observasi per bab, sepadan dengan catatan praktikum di slide.

### Bab 1 — Profil HTML pertama
1. DevTools › Elements: `html > head > meta` lalu `body` berisi `h1`, `img`, `p`, `ul`/`ol`.
2. Klik baris elemen: kawasan elemen tersorot di halaman.
3. Device toolbar dari ±360 px: teks mengalir kembali tanpa CSS.

### Bab 2 — Struktur semantik
1. Satu `h1`, satu `nav`, satu `main` per halaman.
2. `header` dan `footer` sama persis di kedua halaman; hanya `main` yang berbeda.
3. Tabel proyek memakai `caption`, `thead`, dan `th scope="col"`.

### Bab 3 — Dasar-dasar CSS
1. DevTools › Styles: satu berkas `style.css` menata dua halaman.
2. Bandingkan `.site-nav a` (0,1,1) dengan `a` (0,0,1) — yang lebih spesifik menang.
3. `:hover` dan `:focus` mengubah warna tautan tanpa JavaScript.

### Bab 4 — Tipografi dan visual
1. DevTools › Computed: `font-family` jatuh ke fallback bila font gagal dimuat.
2. Ubah lebar jendela: `h1` bergerak antara 36 dan 48 px karena `clamp()`.
3. Cari `#` di `style.css`: semua warna heksa hanya boleh ada di blok `:root`.

### Bab 5 — Box model
1. DevTools › Layout: tiap kartu punya padding 24 px, border 1 px, dan `border-box`.
2. Badge memakai `position: absolute` dengan induk `position: relative`.
3. Deskripsi lebih dari dua baris terpotong elipsis karena `-webkit-line-clamp`.

### Bab 6 — Flexbox
1. `.site-nav ul` adalah flex container; jarak antar item dari `gap`, bukan margin.
2. `.proyek-card` memakai `flex-direction: column` agar meta menempel di dasar.
3. `.footer-nav` memakai `margin-left: auto` untuk mendorong menu ke kanan.

### Bab 7 — Grid dan responsif
1. `.proyek-list` memakai `repeat(auto-fit, minmax(280px, 1fr))` sebelum 992 px.
2. Ubah lebar dari 375 → 768: hero berubah dari satu kolom menjadi dua.
3. Tabel pendidikan digulir di dalam `.table-scroll`, bukan meluber ke halaman.

### Bab 9 — Bootstrap
1. Urutan empat tautan di `head`: Bootstrap, Icons, Google Fonts, `style.css`.
2. Kelas layout lama (`.site-nav ul`, `.proyek-list`, media query) hilang dari CSS.
3. DevTools: `.row > .col` mengikuti grid 12 kolom; `g-4` = 24 px.

### Bab 10 — Komponen
1. `komponen.html`: accordion, modal, dan carousel berhenti di keadaan statis.
2. Setiap badge membawa teks; warna bukan satu-satunya penanda.
3. Pagination memakai `span` untuk item aktif dan `a` untuk halaman lain.

### Bab 11 — Form
1. Setiap `input` punya `label` dengan `for` yang cocok, bukan placeholder.
2. Tab dari keyboard: urutan fokus mengikuti urutan dokumen, cincin fokus terlihat.
3. `autocomplete="name"` dan `autocomplete="email"` terbaca di DevTools › Accessibility.

### Bab 12 — Design system
1. `styleguide.html` membuka dengan swatch bernama beserta nilai heksanya.
2. Matriks varian tombol: satu varian utama, satu outline, satu nonaktif.
3. Inspect kartu: 24 px antar kartu, 24 px padding dalam kartu.

### Bab 13 — Responsif dan aksesibilitas
1. Tekan Tab dari awal halaman: skip link muncul lebih dulu.
2. DevTools › Lighthouse: tidak ada gambar tanpa `alt`, heading berurutan.
3. Di bawah 768 px, `picture` memuat `avatar-rizky-lebar.svg` (komposisi berbeda).

### Bab 14 — Figma ke kode
1. `#proyek-detail` memakai `col-lg-7` dan `col-lg-5`, sama seperti frame 7:5.
2. Panel memakai token, bukan heksa: `--clr-accent` untuk badge, `--radius` untuk sudut.
3. `catatan-fidelity.txt` mencatat hasil pada 1440, 768, dan 375 piksel.

### Bab 15 — QA dan rilis
1. `qa.html`: tiga bagian checklist, matriks uji lima pemeriksaan, enam temuan.
2. Bandingkan `bab-14` dan `bab-15` pada `css/style.css`: tiga aturan bertambah.
3. `aspect-ratio: 16 / 9` mencegah tinggi kartu melompat saat gambar dimuat.

---

## Batasan yang disengaja

- **Tanpa JavaScript.** Semua komponen interaktif (accordion, modal, carousel, tombol
  buka-tutup menu) hanya ditampilkan pada satu keadaan. Ini mengikuti Batas Tanpa
  JavaScript pada Bab 10.
- **Gambar berupa SVG tulisan sendiri.** Tidak ada foto asli, tidak ada berkas biner.
  Konsekuensinya `srcset` tidak didemonstrasikan; Bab 13 memakai `<picture>` untuk
  art-direction, yang memang tujuan elemen itu.
- **Satu palet, satu persona.** Token memakai anatomi Bab 4 dengan nilai berbeda
  (teal `#0F766E` sebagai primer). Nama token tetap berbasis peran.
- **Tidak masuk `dist/`.** Build GitHub Pages tetap hanya memuat slide; contoh ini
  dibuka dari hasil klon atau server lokal.

---

## Konvensi kode

| Hal | Aturan |
| --- | --- |
| Kelas kustom | kebab-case, berbasis peran: `.proyek-card`, `.site-nav`, `.badge-unggulan` |
| Penanda CSS | mulai Bab 04, setiap aturan non-Bootstrap diberi komentar `/* kustom — … */` |
| Warna | heksa hanya di `:root`; komponen memakai `var(--clr-*)` |
| Jarak | kelipatan `--space-unit: 8px`, ditulis `calc(var(--space-unit) * n)` |
| Bootstrap | utilitas dulu, CSS kustom hanya untuk token, tipografi, dan komponen beridentitas |
