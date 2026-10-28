# Bab 3 — Dasar-dasar CSS

**Folder:** `bab-03-css-dasar/` · **Titik tolak:** `bab-02-semantik/`
**Pratinjau:** `index.html` dan `tentang.html`

## Inti bab ini

Memasang **satu** berkas CSS eksternal untuk dua halaman. Semua warna, ukuran, dan jarak
masih ditulis langsung dalam piksel dan heksadesimal — sengaja, supaya masalah
pengulangan nilai terlihat sebelum bab berikutnya memperkenalkan design token.

## Yang berubah dari Bab 2

| Berkas | Perubahan |
| --- | --- |
| `css/style.css` | **Berkas baru**, 198 baris |
| `index.html` | +`<link rel="stylesheet">`, tambah kolom tabel Status, class hook |
| `tentang.html` | +`<link rel="stylesheet">` (isi markup tidak diubah) |

## Rincian pekerjaan

### 1. Satu berkas CSS untuk dua halaman

- `css/style.css` dihubungkan lewat `<link rel="stylesheet" href="css/style.css">` di
  `head` kedua halaman — satu sumber kebenaran, bukan CSS di dalam `<style>`.
- Berkas dibuka dengan komentar versi: `/* Rizky CV style.css — v1 (Bab 3) */`.

### 2. Class hook dipasang di markup

Supaya CSS punya pegangan, beberapa elemen diberi class atau diganti namanya:

| Sebelum | Sesudah |
| --- | --- |
| `section.hero-section` | `section.hero` |
| `h1` tanpa class | `h1.hero-title` |
| Tautan ajakan tanpa class | `a.btn-cta` |

### 3. Kolom status pada tabel proyek

- Tabel proyek mendapat `th scope="col"` keempat: **Status**.
- Setiap baris mendapat `<span class="badge badge-berjalan/selesai">` — warna belum satu-
  satunya penanda karena teksnya tetap ditulis.

### 4. Isi `style.css`

| Bagian | Aturan yang ditulis |
| --- | --- |
| Dasar halaman | `body` `margin: 0`, `font-family` stack sistem, `color`, `background-color`, `line-height: 1.6` |
| Heading | `h1/h2/h3` 36/28/20 px, warna, `line-height: 1.25`, `margin-bottom: 16px` |
| Tautan | `a`, `a:hover` (garis bawah), `a:focus` (`outline` 2 px + `outline-offset`) |
| Header & nav | `.site-header` border bawah; `.site-nav li` `display: inline-block`; `li:last-child` tanpa margin |
| Hero | padding, latar putih, sudut gambar `border-radius: 12px` |
| Tabel | `border-collapse: collapse`, `width: 100%`, `th` berlatar, `caption` rata kiri |
| Baris selang-seling | `tbody tr:nth-child(even)` dan `tbody tr:first-child td` `border-top: 2px` |
| Badge | `display: inline-block`, `border-radius: 999px`, `font-size: 12px` |
| Tombol | `.btn-cta` + `.btn-cta:hover` |
| Footer | Latar gelap `#1E293B`, tautan terang |

### 5. Catatan specificity

Berkas ditutup komentar yang mendokumentasikan laboratorium kaskade:

```
.site-nav a   (0, 1, 1)  menang atas  a       (0, 0, 1)
#kontak       (1, 0, 0)  menang atas  .kontak (0, 1, 0)
```

## Berkas di folder ini

| Berkas | Isi |
| --- | --- |
| `index.html` | Beranda + `link` CSS + kolom Status + `.hero`, `.hero-title`, `.btn-cta` |
| `tentang.html` | Halaman tentang + `link` CSS |
| `css/style.css` | Seluruh gaya dua halaman dalam satu berkas |

## Cara memeriksa

1. DevTools › **Styles**: satu berkas `style.css` menata dua halaman sekaligus.
2. Bandingkan `.site-nav a` (0, 1, 1) dengan `a` (0, 0, 1) — yang lebih spesifik menang
   meski ditulis lebih dulu.
3. `:hover` dan `:focus` mengubah warna dan garis tautan tanpa JavaScript.
4. Cari nilai heksadesimal di `style.css`: masih bertebaran di banyak aturan. Ini utang
   teknis yang dibayar di Bab 4.

## Yang dibawa ke Bab 4

Nilai heksa, piksel, dan kelipatan jarak diulang di belasan aturan. Bab 4 memindahkan
semuanya ke `:root` sebagai design token, mengganti `px` dengan `rem`/`clamp()`, dan
memuat Google Fonts untuk dua keluarga huruf.
