# Bab 4 — Tipografi dan design token

**Folder:** `bab-04-tipografi/` · **Titik tolak:** `bab-03-css-dasar/`
**Pratinjau:** `index.html` dan `tentang.html`

## Inti bab ini

Dua pekerjaan yang saling menguatkan: memilih dan memuat huruf yang benar, lalu
memindahkan semua nilai yang berulang ke satu blok `:root` sebagai design token. Setelah
bab ini, satu baris berubah di `:root` mengganti warna di seluruh halaman.

## Yang berubah dari Bab 3

| Berkas | Perubahan |
| --- | --- |
| `css/style.css` | 198 → 231 baris. Blok `:root` ditambahkan; semua nilai heksa dan `px` diganti token/`rem` |
| `index.html` | Tiga `link` Google Fonts; paragraf hero diberi class `.lead` |
| `tentang.html` | Tiga `link` Google Fonts saja |

## Rincian pekerjaan

### 1. Google Fonts di kedua halaman

Tiga baris ditambahkan **sebelum** `style.css`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="...family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet">
```

- `Poppins` untuk heading (`--font-heading`), `Inter` untuk teks isi (`--font-body`).
- `display=swap` supaya teks tetap terbaca dengan huruf fallback selama font dimuat.
- Setiap token huruf tetap menyertakan fallback stack: `'Poppins', 'Segoe UI', sans-serif`.

### 2. Blok `:root` — 18 token

| Kelompok | Token |
| --- | --- |
| Warna peran | `--clr-primary`, `--clr-primary-dark`, `--clr-accent`, `--clr-dark`, `--clr-body`, `--clr-muted`, `--clr-bg`, `--clr-surface`, `--clr-border`, `--clr-success`, `--clr-danger` |
| Huruf | `--font-heading`, `--font-body` |
| Bentuk | `--radius: 12px`, `--shadow-card` |
| Jarak | `--space-unit: 8px` |

Nama token berbasis **peran**, bukan warna: `--clr-primary`, bukan `--clr-teal`.

### 3. Skala tipografi

| Sebelum (Bab 3) | Sesudah (Bab 4) |
| --- | --- |
| `h1 { font-size: 36px }` | `h1 { font-size: clamp(2.25rem, 5vw, 3rem) }` |
| `h2 { font-size: 28px }` | `h2 { font-size: clamp(1.5rem, 3vw, 2.25rem) }` |
| `h3 { font-size: 20px }` | `h3 { font-size: 1.25rem }` |
| Badge `font-size: 12px` | `font-size: 0.75rem` |
| Figcaption `14px` | `0.875rem` |

`.hero-title` kehilangan `font-size: 40px` — sekarang mewarisi `clamp()` dari `h1`, jadi
tidak ada dua sumber ukuran untuk elemen yang sama.

### 4. Jarak memakai `--space-unit`

Setiap `8px`, `16px`, `24px`, `32px` diganti `var(--space-unit)`, `calc(var(--space-unit) * 2)`,
`* 3`, `* 7`, dst. Termasuk `margin-right` item navigasi (`* 1.5`) dan padding badge.

### 5. Paragraf pembuka hero

- Paragraf pertama hero diberi class `lead` di markup.
- Aturan baru `.hero .lead`: `font-size: 1.125rem`, `color: var(--clr-muted)`,
  `max-width: 46ch` — panjang baris dibatasi supaya mata tidak kehilangan tempat.

### 6. Perbaikan kecil

- `thead th` memakai `--font-heading` agar sel header setara dengan heading.
- `tbody tr:nth-child(even)` berlatar `--clr-bg` (sebelumnya putih, jadi selang-seling
  tidak terlihat).
- Naungan kartu `--shadow-card` dipasang pada avatar hero.
- Komentar catatan specificity dari Bab 3 dihapus — pelajarannya sudah selesai.

## Berkas di folder ini

| Berkas | Isi |
| --- | --- |
| `index.html` | Beranda + Google Fonts + `p.lead` |
| `tentang.html` | Halaman tentang + Google Fonts |
| `css/style.css` | v2: `:root` 18 token, skala `rem`/`clamp()`, jarak berbasis `--space-unit` |

## Cara memeriksa

1. DevTools › **Computed** pada `h1`: `font-family` menunjukkan `Poppins`; matikan
   jaringan untuk melihat rantai fallback bekerja.
2. Ubah lebar jendela: `h1` bergerak antara 36 dan 48 px (`clamp()`), bukan melompat.
3. Cari `#` di `style.css`: setiap heksadesimal hanya boleh berada di blok `:root`.
4. Ganti `--clr-primary` di DevTools — badge, tombol, tautan, dan fokus berubah serentak.

## Yang dibawa ke Bab 5

Tipografi dan warna sudah tertata, tetapi tabel proyek masih terasa seperti dokumen.
Bab 5 menggantinya dengan enam kartu proyek dan memperkenalkan box model secara
eksplisit: `border-box`, padding dalam kartu, badge `position: absolute`, dan elipsis
dua baris.
