# Bab 10 — Komponen

**Folder:** `bab-10-komponen/` · **Titik tolak:** `bab-09-bootstrap/`
**Pratinjau:** `index.html`, `tentang.html`, `komponen.html`

## Inti bab ini

Halaman internal baru — `komponen.html` — menjadi *rig* tempat setiap komponen Bootstrap
ditampilkan pada satu keadaan yang tetap. Ini bab yang menegakkan **Batas Tanpa
JavaScript**: accordion tidak membuka, modal tidak muncul, carousel tidak bergeser.
Yang dinilai adalah markup dan kelasnya, bukan perilakunya.

Selain rig, beranda dan halaman tentang juga mendapat komponen yang benar-benar dipakai.

`css/style.css` **tidak berubah** pada bab ini — seluruh pekerjaan adalah markup.

## Yang berubah dari Bab 9

| Berkas | Perubahan |
| --- | --- |
| `komponen.html` | **Berkas baru**, 278 baris, 10 seksi komponen |
| `index.html` | 235 → 272 baris. Keahlian jadi list group, pagination, alert kontak |
| `tentang.html` | +breadcrumb (166 baris) |
| Footer ketiga halaman | +tautan `komponen.html` |

## Rincian pekerjaan

### 1. Halaman rig `komponen.html`

Sepuluh seksi, masing-masing `section` dengan `h2.h3`:

| Seksi | Komponen | Keadaan |
| --- | --- | --- |
| Tombol | `btn btn-cv`, `btn btn-outline-cv`, `btn` nonaktif | Statis |
| Badge status proyek | `badge-unggulan`, `badge-selesai`, `badge-berjalan` | Selalu berteks |
| Alert statis | `alert` success/warning/danger | Tanpa tombol tutup |
| Kartu proyek | `card` + `card-img-top` + `proyek-badge` | Hover hanya CSS |
| Breadcrumb dan pagination | `breadcrumb`, `pagination` | Item aktif `span` |
| List group | `list-group` + badge tingkat | — |
| Accordion statis | `accordion` + `accordion-button` | Satu panel `show`, sisanya `collapsed` |
| Modal statis | `div.modal.show` dengan `style="display:block; position:static"` | Selalu terbuka, di dalam alur dokumen |
| Carousel statis | `carousel` + `carousel-item.active` | Satu slide, tanpa kontrol |
| Ikon | `bi bi-*` | Dekoratif `aria-hidden="true"` |

Catatan penting di dalam rig: accordion, modal, dan carousel diberi keterangan tertulis
bahwa komponen itu **butuh JavaScript** untuk berfungsi, dan di proyek ini hanya
ditampilkan satu keadaan.

### 2. Keahlian berubah menjadi list group

| Sebelum (Bab 9) | Sesudah (Bab 10) |
| --- | --- |
| `ul.list-inline` berisi badge | `ul.list-group` berisi `li.list-group-item.d-flex.justify-content-between.align-items-center` |
| Satu baris badge nama keahlian | Ikon + nama di kiri, badge tingkat di kanan |
| 8 keahlian | 7 keahlian + catatan sumber penilaian |

Setiap item memakai ikon Bootstrap (`bi-code-slash`, `bi-bounding-box`,
`bi-distribute-horizontal`, `bi-grid-3x3-gap`, `bi-bootstrap`, `bi-vector-pen`,
`bi-universal-access`) dengan `aria-hidden="true"`, dan badge tingkat: Mahir, Menengah,
Dasar. Ditutup kalimat: "Tingkat dinilai dari tugas yang sudah dinilai dosen, bukan dari
perkiraan sendiri."

### 3. Pagination di bawah daftar proyek

```html
<nav aria-label="Halaman proyek">
  <ul class="pagination justify-content-center mb-0">
    <li class="page-item disabled"><span class="page-link">...</span></li>
    <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
    <li class="page-item"><a class="page-link" href="#proyek">2</a></li>
    <li class="page-item"><a class="page-link" href="#proyek">3</a></li>
  </ul>
</nav>
```

Perhatikan pola aksesibilitasnya: item aktif memakai `span` + `aria-current="page"`,
bukan `a` yang tidak ke mana-mana.

### 4. Alert di bagian kontak

```html
<div class="alert alert-success d-flex align-items-start gap-2" role="status">
  <i class="bi bi-check-circle mt-1" aria-hidden="true"></i>
  <p class="mb-0">Terbuka untuk magang frontend mulai Februari 2026 …</p>
</div>
```

`role="status"` dipakai karena isinya informasi, bukan peringatan.

### 5. Breadcrumb di `tentang.html`

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="index.html">Beranda</a></li>
    <li class="breadcrumb-item active" aria-current="page">Tentang</li>
  </ol>
</nav>
```

### 6. Tautan ke rig

Footer ketiga halaman mendapat `<a href="komponen.html">Komponen</a>` — halaman internal
tetap bisa dijangkau tanpa masuk navigasi utama.

## Berkas di folder ini

| Berkas | Isi |
| --- | --- |
| `index.html` | Beranda: list group keahlian, pagination, alert, kartu |
| `tentang.html` | Halaman tentang + breadcrumb |
| `komponen.html` | **Rig** 10 seksi komponen dalam keadaan statis |
| `css/style.css` | Sama seperti Bab 9 (178 baris) |

## Cara memeriksa

1. Buka `komponen.html`: accordion, modal, dan carousel berhenti di keadaan statis —
   klik tidak melakukan apa pun, dan itu memang tujuannya.
2. Setiap badge membawa teks; matikan warna di DevTools dan status tetap terbaca. Warna
   bukan satu-satunya penanda.
3. Pagination: item aktif `span` + `aria-current`, item lain `a`. Cek DevTools ›
   Accessibility pada `<nav>`.
4. Keahlian: `list-group-item` memakai `d-flex justify-content-between` sehingga nama dan
   tingkat terpisah ke dua ujung.

## Yang dibawa ke Bab 11

Rig komponen belum punya satu pun medan isian. Bab 11 menambahkan form kontak sungguhan
di beranda (label terlihat, `fieldset`, `input-group`, `autocomplete`) dan seksi status
validasi di halaman komponen — semuanya tetap tanpa JavaScript.
