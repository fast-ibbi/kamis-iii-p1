# Bab 14 — Figma ke kode

**Folder:** `bab-14-figma/` · **Titik tolak:** `bab-13-a11y/`
**Pratinjau:** `index.html` → gulir ke bagian **Detail proyek**

## Inti bab ini

Menerjemahkan satu frame desain — `P-PROYEK-01`, halaman detail produk Tokosaya — menjadi
kode, lalu **mengukur hasilnya** pada tiga lebar layar. Yang dinilai bukan hasilnya saja,
tetapi catatan penyimpangannya.

Hasilnya: seksi baru `#proyek-detail` di beranda pada rasio 7:5, proyek terkait di
bawahnya, dan `catatan-fidelity.txt` berisi sembilan butir checklist.

`css/style.css` **tidak berubah** pada bab ini. Seluruh pekerjaan memakai komponen,
token, dan grid yang sudah ada — itulah inti pelajarannya.

## Yang berubah dari Bab 13

| Berkas | Perubahan |
| --- | --- |
| `index.html` | 349 → 456 baris. Seksi `#proyek-detail` (107 baris) + satu tautan footer |
| `catatan-fidelity.txt` | **Berkas baru**, 41 baris |
| `css/style.css` | Tidak berubah — bukti bahwa desain bisa ditranslasi tanpa aturan baru |

## Rincian pekerjaan

### 1. Struktur `#proyek-detail`

Seksi disisipkan **di antara** `#proyek` dan `#kontak`:

| Lapis | Isi |
| --- | --- |
| Breadcrumb | Beranda › Proyek › Dashboard SIAKAD (`aria-current="page"` di item terakhir) |
| Kepala halaman | `h2` "Detail proyek: Dashboard SIAKAD" + keterangan frame dan lebar uji |
| Grid utama | `row g-4 align-items-start` → `col-lg-7` dan `col-lg-5` |
| Kiri (7) | `figure` pratinjau + `figcaption`, lalu kartu "Spesifikasi singkat" berisi tabel 5 baris |
| Kanan (5) | `.produk-panel`: badge Unggulan, nama, kategori, angka utama, "Hasil" (`ul` 3 butir), tombol CTA |
| Bawah | `section.proyek-terkait`: tiga kartu dalam `row-cols-1 row-cols-md-3` |

### 2. Rasio 7:5 sebagai keputusan, bukan kebetulan

`col-lg-7` / `col-lg-5` sama dengan frame desain. Yang diajarkan: rasio di Figma
diterjemahkan ke grid 12 kolom (7 + 5 = 12), bukan ke lebar piksel tetap.

`proyek-terkait` memakai `row-cols-1 row-cols-md-3`: tiga kartu sejajar di desktop,
menumpuk di ponsel.

### 3. Panel produk

```html
<div class="produk-panel bg-white border rounded-3 p-4">
  <span class="badge badge-unggulan mb-3">Unggulan</span>
  <h3 class="produk-nama h3 mb-2">Dashboard SIAKAD</h3>
  <p class="produk-kategori text-secondary mb-2">Magang · Sistem Informasi Akademik</p>
  <p class="produk-harga h4 mb-3">12.480 mahasiswa aktif</p>
  ...
```

  - Angka utama memakai skala `h4` sesuai *text style* di Figma.
  - Semua warna dari token: `--clr-accent` untuk badge, `--radius` untuk sudut,
    `--shadow-card` untuk naungan.
  - Tidak ada satu pun nilai heksa baru.

### 4. Spesifikasi singkat

Tabel `table table-sm align-middle` di dalam `div.table-responsive`, dengan
`caption.visually-hidden` untuk pembaca layar. Baris memakai `th scope="row"`:

| Peran | Lingkup | Teknologi | Durasi | Kontribusi |
| --- | --- | --- | --- | --- |
| Frontend (magang) | 4 halaman statis | HTML, Bootstrap 5.3, CSS Grid | 6 minggu | Grid dasbor, tabel rekap, state fokus |

### 5. `catatan-fidelity.txt`

Dokumen teks 41 baris dengan tujuh bagian. Format penandanya `[ok]`, `[!]`, `[perbaiki]`:

| Bagian | Butir |
| --- | --- |
| Rasio dan grid | 7:5, tiga kartu terkait, jarak 24 px antarkartu dan dalam kartu |
| Token | Tanpa heksa baru, `--radius`, `--shadow-card` |
| Tipografi | `--font-heading` untuk judul, `--font-body` untuk isi, skala `h4` untuk angka |
| Komponen | Badge, `.btn-cv`, `aria-current` pada breadcrumb |
| Keadaan interaktif | Hover, fokus keyboard, satu `[!]` batasan tanpa JavaScript |
| Catatan perbaikan | Dua temuan yang sudah dibetulkan |
| Kesimpulan | 9 dari 9 butir lolos pada 1440, 768, dan 375 px |

Dua perbaikan yang tercatat:

1. Jarak judul ke breadcrumb awalnya 24 px, seharusnya 16 px (`--space-unit * 2`).
2. Tinggi gambar panel sempat 1:1 karena `width`/`height` tidak ditulis; diberi
   `width="480" height="270"` agar rasio 16:9 terjaga.

Butir `[!]` — menu dan tombol tutup pada desain asli butuh JavaScript, ditampilkan statis
— dicatat sebagai **keterbatasan, bukan kegagalan**. Ini kebiasaan yang dinilai: menuliskan
apa yang sengaja tidak dikerjakan.

## Berkas di folder ini

| Berkas | Isi |
| --- | --- |
| `index.html` | Beranda + seksi `#proyek-detail` + `proyek-terkait` + tautan footer "Detail proyek" |
| `tentang.html` | Sama seperti Bab 13 |
| `styleguide.html` | Sama seperti Bab 13 |
| `css/style.css` | Sama seperti Bab 13 (299 baris) |
| `catatan-fidelity.txt` | Checklist kesesuaian desain → kode, tiga lebar uji |

## Cara memeriksa

1. `#proyek-detail` memakai `col-lg-7` dan `col-lg-5` — persis frame 7:5. Ubah ke 6:6
   di DevTools dan bandingkan proporsinya.
2. Panel memakai token, bukan heksa: `--clr-accent` untuk badge, `--radius` untuk sudut.
   Cari `#` di dalam seksi ini — tidak ada.
3. `catatan-fidelity.txt` mencatat hasil pada 1440, 768, dan 375 px; ulangi pengukuran
   di ketiga lebar itu.
4. Perkecil ke 375 px: panel kanan turun ke bawah gambar, proyek terkait menumpuk satu
   kolom.

## Yang dibawa ke Bab 15

Desain sudah menjadi kode, tetapi belum ada bukti bahwa kode itu layak rilis. Bab 15
menambahkan `qa.html` — checklist tiga bagian, matriks uji lima pemeriksaan, enam temuan —
dan satu perbaikan CSS yang lahir langsung dari temuan tersebut.
