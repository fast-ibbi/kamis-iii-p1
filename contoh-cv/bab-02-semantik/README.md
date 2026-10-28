# Bab 2 — Struktur semantik

**Folder:** `bab-02-semantik/` · **Titik tolak:** `bab-01-profil-html/`
**Pratinjau:** `index.html` dan `tentang.html`

## Inti bab ini

Mengubah halaman "yang benar secara HTML" menjadi halaman "yang bermakna". Isi dokumen
sama-sama teks, tetapi sekarang setiap kawasan punya elemen yang menjelaskan perannya
kepada browser, mesin pencari, dan pembaca layar. Belum ada CSS: seluruh perubahan
adalah markup.

## Yang berubah dari Bab 1

| Berkas | Perubahan |
| --- | --- |
| `index.html` | 38 → 102 baris. Ditulis ulang dengan landmark dan enam bagian isi |
| `rencana.html` | **Dihapus** |
| `tentang.html` | **Berkas baru**, 105 baris |
| `img/` | 1 → 8 berkas: logo dan enam pratinjau proyek |

## Rincian pekerjaan

### 1. Landmark di kedua halaman

- `header.site-header` berisi `a.site-brand` (logo 48 × 48) dan `nav[aria-label="Navigasi utama"]`.
- `nav` berisi `ul` lima tautan: Beranda, Keahlian, Proyek, Tentang, Kontak — dua di
  antaranya menunjuk anchor di halaman yang sama (`#keahlian`, `#proyek`, `#kontak`).
- Seluruh isi dibungkus `main`.
- `footer.site-footer` berisi `address` (surel), tagline, dan baris hak cipta.
- `header` dan `footer` ditulis **sama persis** di kedua halaman; hanya `main` yang
  berbeda. Itu yang membuat navigasi terasa konsisten tanpa CSS.

### 2. Beranda dipecah menjadi bagian

- `section.hero-section#beranda`: `h1`, paragraf, `figure` + `figcaption` untuk avatar
  (240 × 240), dan tautan ajakan ke `#proyek`.
- `section.proyek-unggulan#proyek`: **tabel** tiga proyek dengan `caption`, `thead`, dan
  `th scope="col"` (Proyek, Jenis, Teknologi).
- `section.keahlian#keahlian`: `ul` lima keahlian.
- `section.kontak#kontak`: `address` berisi surel (`mailto:`), telepon (`tel:`), dan domisili.

### 3. Halaman baru `tentang.html`

Menggantikan `rencana.html`, dengan empat bagian:

| Bagian | Elemen yang dilatih |
| --- | --- |
| Profil | `section` + paragraf naratif |
| Pendidikan | `table` dengan `caption`, `thead`, `th scope="col"` |
| Organisasi | Dua `article`, masing-masing `h3` + paragraf |
| Ketersediaan | `dl` dengan tiga pasang `dt`/`dd` — daftar istilah, bukan daftar butir |

### 4. Metadata

- `meta name="description"` ditambahkan per halaman, isinya berbeda.
- `title` diperbaiki: `Rizky Ardiansyah — Mahasiswa Sistem Informasi` (beranda) dan
  `Tentang Rizky Ardiansyah`.

### 5. Aset baru

`logo-rizky.svg` plus enam pratinjau proyek: `proyek-siakad`, `proyek-katalog-umkm`,
`proyek-landing-kelas`, `proyek-profil-desa`, `proyek-form-seminar`, `proyek-tokosaya`.

## Berkas di folder ini

| Berkas | Isi |
| --- | --- |
| `index.html` | Beranda semantik: hero, tabel proyek unggulan, keahlian, kontak |
| `tentang.html` | Profil, tabel pendidikan, organisasi, ketersediaan (`dl`) |
| `img/` | Logo + avatar + enam pratinjau proyek (SVG) |

## Cara memeriksa

1. Satu `h1`, satu `nav`, satu `main` per halaman — tidak lebih.
2. `header` dan `footer` identik di kedua halaman; hanya `main` yang berganti.
3. Tabel proyek memakai `caption`, `thead`, dan `th scope="col"`; cek di DevTools ›
   Accessibility bahwa tabel terbaca sebagai tabel, bukan tumpukan teks.
4. Klik tiap tautan navigasi: yang berawalan `#` menggulir, yang berakhiran `.html`
   berpindah halaman.

## Yang dibawa ke Bab 3

Markup sudah bermakna, tetapi masih hitam-putih dengan font bawaan browser. Bab 3
menambahkan satu berkas CSS eksternal dan memasang *class hook* pada elemen yang sudah
ada — tanpa mengubah struktur semantiknya.
