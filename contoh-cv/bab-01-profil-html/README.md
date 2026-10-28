# Bab 1 — Profil HTML pertama

**Folder:** `bab-01-profil-html/` · **Titik tolak:** titik nol proyek (belum ada apa pun)
**Pratinjau:** klik dua kali `index.html`, lalu ikuti tautan ke `rencana.html`

## Inti bab ini

Membangun dokumen HTML pertama tanpa CSS sama sekali. Tujuannya bukan tampilan, tetapi
memastikan struktur dokumen benar: satu `h1`, heading berurutan, daftar yang tepat jenis,
gambar yang punya `alt`, dan dua halaman yang saling bertaut.

Semua pekerjaan di bab ini adalah penambahan baru — tidak ada berkas dari bab sebelumnya
yang diubah, karena bab sebelumnya belum ada.

## Rincian pekerjaan

### 1. Kerangka dokumen

- `<!DOCTYPE html>` dan `<html lang="id">` — bahasa dokumen ditulis eksplisit supaya
  pembaca layar memakai pelafalan Indonesia.
- `head` hanya berisi tiga hal: `meta charset="utf-8"`, `meta name="viewport"`, dan
  `title` per halaman.
- Belum ada `meta description`, belum ada `link` ke CSS, belum ada class.

### 2. Halaman profil — `index.html`

- Satu `h1`: "Rizky Ardiansyah".
- Gambar avatar di dalam `p`, dengan `alt` deskriptif dan atribut `width="160" height="160"`
  (menjaga ruang supaya halaman tidak melompat saat gambar dimuat).
- Paragraf perkenalan: program studi, semester, universitas, kota.
- `h2` **Bidang Minat** berisi `ul` tiga butir.
- `h2` **Keterampilan Awal** berisi `ol` tiga butir — sengaja `ol`, bukan `ul`, untuk
  membedakan daftar yang berurutan dari yang tidak.
- `h2` **Rencana Belajar** berisi tautan ke halaman kedua.
- Kontak berupa tautan `mailto:`.

### 3. Halaman kedua — `rencana.html`

Dibuat untuk menguji navigasi dua arah, bukan untuk isi:

- `ol` berisi target lima pertemuan (kerangka semantik → CSS eksternal → token →
  box model → Flexbox).
- `ul` berisi alat kerja, dengan `<code>` untuk nama folder.
- Tautan kembali ke `index.html`.

### 4. Aset

- `img/avatar-rizky.svg` — ilustrasi vektor tulisan sendiri. Tidak ada berkas biner di
  seluruh proyek.

## Berkas di folder ini

| Berkas | Isi |
| --- | --- |
| `index.html` | Halaman profil, 1 `h1`, 3 `h2`, `ul` + `ol`, satu gambar, tautan `mailto:` |
| `rencana.html` | Halaman kedua: target lima pertemuan, alat kerja, cara menilai kemajuan |
| `img/avatar-rizky.svg` | Ilustrasi profil 160 × 160 |

## Cara memeriksa

1. Buka DevTools › **Elements**: urutan `html > head > meta` lalu `body` berisi `h1`,
   `img`, `p`, `ul`/`ol`.
2. Klik baris elemen di panel Elements — kawasan elemen tersorot di halaman.
3. Nyalakan device toolbar pada ±360 px: teks mengalir kembali sendiri, membuktikan
   halaman memang belum punya CSS dan tetap terbaca.
4. Klik tautan ke `rencana.html`, lalu kembali — kedua arah harus bekerja.

## Yang dibawa ke Bab 2

Struktur isi sudah lengkap tetapi belum punya makna: semuanya masih `div`-kurang dan
`p` bertumpuk. Bab 2 memasang landmark semantik (`header`, `nav`, `main`, `footer`),
menambah halaman `tentang.html` sebagai pengganti `rencana.html`, dan memperkenalkan
tabel proyek serta gambar pratinjau.
