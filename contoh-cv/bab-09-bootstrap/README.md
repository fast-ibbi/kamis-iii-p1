# Bab 9 — Bootstrap 5

**Folder:** `bab-09-bootstrap/` · **Titik tolak:** `bab-07-grid/` (Bab 8 tidak berdeck)
**Pratinjau:** `index.html` dan `tentang.html` — butuh koneksi untuk CDN

## Inti bab ini

Titik balik proyek. Seluruh aturan tata letak yang ditulis tangan di Bab 3–7 dibuang dan
diganti kelas Bootstrap 5.3.3. Yang tersisa di `style.css` hanya tiga hal: design token,
tipografi, dan overlay palet — 410 baris menjadi 178 baris.

Perubahan ini bukan sekadar memakai pustaka; yang diajarkan adalah **urutan pemuatan**
dan **disiplin menumpang di atas token**, bukan menimpa Bootstrap dengan `!important`.

## Yang berubah dari Bab 7

| Berkas | Perubahan |
| --- | --- |
| `index.html` | 167 → 235 baris. Ditulis ulang: container, grid 12 kolom, kelas utility |
| `tentang.html` | Ditulis ulang dengan pola yang sama |
| `css/style.css` | 410 → 178 baris. Ditulis ulang sebagai v3 — semua tata letak hilang |
| `index.html`/`tentang.html` `head` | Empat tautan: Bootstrap, Icons, Google Fonts, `style.css` |

## Rincian pekerjaan

### 1. Urutan empat tautan di `head`

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter…&family=Poppins…&display=swap" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
```

`style.css` **selalu terakhir**, supaya token proyek menang atas nilai bawaan Bootstrap
tanpa perlu `!important`.

### 2. Tata letak pindah ke kelas Bootstrap

| Kawasan | Sebelum (CSS sendiri) | Sesudah (Bootstrap) |
| --- | --- | --- |
| Pembungkus halaman | tidak ada | `div.container` |
| Hero | `.hero` flex kolom + media query | `div.row.align-items-center.g-4.g-lg-5` + `col-lg-7` / `col-lg-5` |
| Navigasi | `.site-nav ul` flex + `gap` | `ul.nav.flex-wrap.gap-3` + `li.nav-item` + `a.nav-link` |
| Daftar keahlian | `ul` biasa | `ul.list-inline` + `li.list-inline-item` + `span.badge.text-bg-light.border` |
| Kartu proyek | `.proyek-list` Grid `auto-fit` | `div.row.row-cols-1.row-cols-md-2.row-cols-lg-3.g-4` + `article.card.h-100` |
| Isi kartu | `.proyek-body` flex kolom | `div.card-body.d-flex.flex-column` + `p.proyek-meta.mt-auto` |
| Tabel | `.table-scroll` | `div.table-responsive` |
| Footer | `.site-footer` flex | `footer.site-footer` + `div.container.d-flex.flex-wrap.justify-content-between` |

Kelas layout lama (`.site-nav ul`, `.proyek-list`, `.proyek-body`, `.table-scroll`,
`@media` 768/992) **dihapus dari CSS**, bukan dibiarkan menumpuk.

### 3. `style.css` v3 — apa yang tersisa

| Bagian | Isi |
| --- | --- |
| Header berkas | Komentar v3: "Semua aturan tata letak pindah ke kelas Bootstrap" |
| `:root` | 18 token dari Bab 4, tidak berubah |
| Overlay tombol | `.btn-cv` dan `.btn-outline-cv` menimpa variabel Bootstrap (`--bs-btn-bg`, `--bs-btn-hover-bg`, `--bs-btn-focus-shadow-rgb`, dst.) |
| Tipografi | `h1`–`h4` memakai `--font-heading`, `clamp()` untuk `h1`/`h2`, `.font-heading`, `.lead` |
| Hero | `.hero figure img { max-width: 360px; margin-inline: auto }` |
| Navigasi | `.site-header .nav-link` warna token + hover, `.site-brand` inline-flex |
| Komponen | `.proyek-card` border/radius/shadow + hover `translateY(-4px)`, `.proyek-badge` absolute, `.proyek-meta` |
| Footer | `.site-footer` latar `--clr-dark` |
| Badge | `.badge-unggulan/selesai/berjalan` memakai token |

Teknik penting: `.btn-cv` **tidak** menulis `background-color` biasa, melainkan
menyetel variabel milik Bootstrap. Hasilnya hover, active, dan fokus bawaan Bootstrap
ikut memakai palet proyek.

### 4. Detail markup yang baru

- Logo header: `alt=""` (dekoratif) dan `width="40" height="40"`.
- Hero: dua tombol — `btn btn-cv` "Lihat proyek" dan `btn btn-outline-cv` "Hubungi saya".
- Kartu: `article.card.proyek-card.h-100`, gambar `card-img-top`, badge dibungkus
  `div.position-relative` agar `absolute` punya acuan.
- Kontak: `row` dengan `col-lg-7` (address) dan `col-lg-5` (ajakan + ikon
  `bi bi-envelope` `aria-hidden="true"`).
- Footer: `address` + `nav` + `p` dalam satu baris flex.
- Ikon Bootstrap Icons dipakai pertama kali, selalu `aria-hidden="true"` bila dekoratif.

## Berkas di folder ini

| Berkas | Isi |
| --- | --- |
| `index.html` | Beranda versi Bootstrap: container, row/col, card, badge, tombol |
| `tentang.html` | Halaman tentang versi Bootstrap |
| `css/style.css` | v3, 178 baris: token + tipografi + overlay palet, tanpa tata letak |

## Cara memeriksa

1. Urutan empat tautan di `head`: Bootstrap → Icons → Fonts → `style.css`. Tukar dua
   baris terakhir di DevTools dan lihat tombol kehilangan warnanya.
2. Cari `.site-nav ul`, `.proyek-list`, dan `@media` di `style.css` — semuanya hilang.
3. DevTools: `.row > .col` mengikuti grid 12 kolom; `g-4` = 24 px, `row-cols-lg-3`
   berarti tiga kartu per baris.
4. Hapus koneksi internet: halaman kehilangan grid dan ikon, tetapi tipografi dan warna
   token tetap bekerja karena `style.css` lokal.

## Yang dibawa ke Bab 10

Tata letak sudah ditangani pustaka, tetapi belum ada tempat untuk mencatat komponen
mana yang dipakai dan bagaimana keadaannya. Bab 10 menambahkan halaman internal
`komponen.html` sebagai rig: tombol, badge, alert, kartu, breadcrumb, pagination,
list group, accordion, modal, carousel, dan ikon — semuanya dalam keadaan statis.
