# Bab 12 — Design system

**Folder:** `bab-12-design-system/` · **Titik tolak:** `bab-11-form/`
**Pratinjau:** `styleguide.html`, `index.html`, `tentang.html`

## Inti bab ini

`komponen.html` dinaikkan statusnya menjadi **styleguide**: dokumen bernomor yang tidak
lagi hanya memajang komponen, tetapi menetapkan aturan pemakaiannya. Empat belas bagian
berurutan, ditutup seksi **Do dan Don't**.

Perbedaan penting dari rig Bab 10: styleguide punya tiga pembaca sekaligus — desainer,
penulis kode, dan penjaga merek — dan setiap bagian menjelaskan **mengapa**, bukan hanya
menampilkan hasilnya.

## Yang berubah dari Bab 11

| Berkas | Perubahan |
| --- | --- |
| `komponen.html` | **Dihapus**, digantikan `styleguide.html` (408 baris) |
| `styleguide.html` | **Berkas baru**, 14 bagian bernomor + Do/Don't |
| `css/style.css` | 201 → 238 baris. Warna `code`, `.swatch` (10 varian), `.space-bar`, dua kelas teks token |
| `index.html` | Satu baris berubah di footer: tautan `Komponen` → `Styleguide` |
| `tentang.html` | Satu baris berubah di footer: idem |

Markup beranda dan tentang **tidak** berubah selain tautan footer.

## Rincian pekerjaan

### 1. Empat belas bagian styleguide

| # | Bagian | Isi |
| --- | --- | --- |
| 1 | Token warna | Sepuluh swatch bernama + nilai heksa + catatan kontras |
| 2 | Skala tipografi | `h1` 36 px sampai teks kecil, memakai kelas `h1`/`h2`/`h3` |
| 3 | Skala jarak 8 piksel | `.space-bar` dengan lebar kelipatan `--space-unit` |
| 4 | Tombol | Varian utama, outline, dan nonaktif |
| 5 | Badge status proyek | Unggulan, selesai, berjalan |
| 6 | Alert statis | Tiga varian, tanpa tombol tutup |
| 7 | Kartu proyek | `.proyek-card` lengkap dengan badge dan meta |
| 8 | Navigasi, breadcrumb, pagination | Tiga pola navigasi dalam satu bagian |
| 9 | List group | Daftar keahlian + badge tingkat |
| 10 | Accordion statis | Satu panel terbuka, sisanya tertutup |
| 11 | Modal statis | Ditampilkan di dalam alur dokumen |
| 12 | Carousel statis | Satu slide aktif, tanpa kontrol |
| 13 | Status validasi form | `is-valid`, `is-invalid`, `disabled`, `readonly` |
| 14 | Ikon | Ikon dekoratif vs ikon bermakna |
| — | Do dan Don't | Pasangan aturan pemakaian |

Setiap bagian dibuka kalimat alasan. Contoh bagian 1: "Nama mengikuti peran, bukan
warna. Ganti nilainya, nama tetap masuk akal."

### 2. Sepuluh swatch bernama

`--clr-primary`, `--clr-primary-dark`, `--clr-accent`, `--clr-dark`, `--clr-success`,
`--clr-danger`, `--clr-body`, `--clr-border`, `--clr-bg`, `--clr-surface` — masing-masing
kotak 56 px, nama token dalam `<code>`, dan nilai heksanya. Swatch hanya ada di
styleguide; komponen tetap memakai `var(--clr-*)`.

### 3. Tambahan CSS

| Aturan | Isi |
| --- | --- |
| `code` | Warna `--clr-primary-dark`, latar `--clr-bg`, padding 1 × 4 px, radius 4 px — mengganti warna bawaan Bootstrap |
| `.swatch` | Kotak 56 px, border, radius |
| `.swatch-*` | Sepuluh varian, masing-masing satu baris `background-color: var(...)` |
| `.space-bar` | Batang 16 px untuk memvisualkan kelipatan `--space-unit` |
| `.text-token-success` / `.text-token-danger` | Kelas bantu untuk teks berwarna token |

Tidak ada aturan komponen baru — styleguide memakai komponen yang sudah ada, hanya
ditambah alat bantu visual untuk token.

### 4. Status halaman internal

- Judul halaman: "Styleguide Rizky".
- Keterangan pembuka: "Satu halaman, semua token dan komponen. Tiga pembaca: desainer,
  penulis kode, dan penjaga merek. **Halaman ini tidak masuk navigasi utama.**"
- Hanya dapat dijangkau dari tautan footer — keputusan sadar, sama seperti rig Bab 10.

## Berkas di folder ini

| Berkas | Isi |
| --- | --- |
| `index.html` | Beranda; hanya tautan footer berubah |
| `tentang.html` | Halaman tentang; hanya tautan footer berubah |
| `styleguide.html` | 14 bagian bernomor + Do/Don't |
| `css/style.css` | v3 lanjutan: `code`, `.swatch` × 11, `.space-bar`, dua kelas teks token |

## Cara memeriksa

1. `styleguide.html` membuka dengan swatch bernama beserta nilai heksanya — cocokkan
   dengan blok `:root` di `style.css`.
2. Bagian 4: matriks varian tombol — satu varian utama, satu outline, satu nonaktif.
3. Bagian 3: bandingkan lebar `.space-bar`; semuanya kelipatan 8 px.
4. Inspect kartu di bagian 7: 24 px antar kartu (`g-4`), 24 px padding dalam kartu
   (`p-4`).
5. Cari heksadesimal di luar `:root`: hanya ada di styleguide sebagai **dokumentasi**,
   tidak di aturan komponen.

## Yang dibawa ke Bab 13

Styleguide mendokumentasikan bentuk, tetapi belum mendokumentasikan siapa yang memakai
keyboard atau pembaca layar. Bab 13 menyisir ketiga halaman: skip link, cincin fokus
`focus-visible`, `aria-current`, `<picture>` untuk art-direction, dan
`prefers-reduced-motion`.
