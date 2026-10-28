# Bab 15 — QA dan rilis

**Folder:** `bab-15-final/` · **Titik tolak:** `bab-14-figma/`
**Pratinjau:** `qa.html`, `index.html`, `tentang.html`, `styleguide.html`

## Inti bab ini

Tahap terakhir bukan menambah fitur, tetapi membuktikan bahwa yang sudah ada layak rilis.
Dua pekerjaan: halaman `qa.html` (checklist, matriks uji, laporan temuan, cuplikan
refactor) dan **satu perbaikan CSS** yang lahir langsung dari temuan pertama.

Ukuran keberhasilannya jelas: enam temuan dicatat, empat ditutup, satu ditunda, satu
diterima sebagai batasan sah.

## Yang berubah dari Bab 14

| Berkas | Perubahan |
| --- | --- |
| `qa.html` | **Berkas baru**, 241 baris |
| `css/style.css` | 299 → 301 baris. Dua deklarasi ditambahkan pada satu aturan (`.card-img-top`) |
| `index.html` | Satu baris: tautan footer "Checklist QA" |
| `tentang.html` | Satu baris: tautan footer "Checklist QA" |
| `styleguide.html` | Satu baris: tautan footer "Checklist QA" |

Hanya **dua baris CSS** yang berubah di seluruh bab ini — semuanya berasal dari temuan
yang tercatat, bukan dari selera.

## Rincian pekerjaan

### 1. `qa.html` — empat bagian

| Bagian | Isi |
| --- | --- |
| Checklist rilis | Tiga kartu sejajar (`col-lg-4`), total 11 butir bertanda centang |
| Matriks uji | Lima pemeriksaan × tiga lebar layar |
| Laporan temuan | Enam temuan dengan tingkat, tindakan, dan status |
| Refactor CSS | Cuplikan tiga aturan hasil temuan + tombol kembali |

#### Checklist rilis — 11 butir dalam tiga kelompok

| Kelompok | Butir |
| --- | --- |
| 1. Isi, merek, dan meta | Satu `h1` per halaman; `title` + `description` per halaman; nama/surel/telepon konsisten; satu penulisan merek dan tagline |
| 2. Kode, perangkat, dan akses | Tanpa heksa di luar `:root`; tiga breakpoint tanpa luber; skip link + fokus + urutan tab; kontras teks kecil ≥ 4,5:1 |
| 3. Aset, alat QA, dan paket | Semua gambar ber-`alt`; tidak ada berkas yatim di `img/`; `catatan-fidelity.txt` tersimpan; folder rilis bersih dari berkas kerja |

#### Matriks uji — 5 × 3

| Pemeriksaan | 375 px | 768 px | 1440 px |
| --- | --- | --- | --- |
| Tidak ada luber horizontal | lolos | lolos | lolos |
| Navigasi bisa dipakai tanpa JS | lolos | lolos | lolos |
| Kartu proyek tetap 16:9 | lolos | lolos | lolos |
| Tabel bisa digulir di dalam wadah | lolos | lolos | tidak perlu |
| Fokus keyboard terlihat | lolos | lolos | lolos |

Baris keempat sengaja berisi "tidak perlu" — bukan semua pemeriksaan berlaku di semua
lebar, dan itu ditulis apa adanya.

#### Laporan temuan — 6 baris

| No | Halaman | Temuan | Tingkat | Status |
| --- | --- | --- | --- | --- |
| 01 | `index.html` | Kartu proyek tanpa `width`/`height`, tinggi melompat saat gambar dimuat | Tinggi | Tutup |
| 02 | `index.html` | Fokus keyboard pada tautan kartu tidak terlihat di latar putih | Tinggi | Tutup |
| 03 | `tentang.html` | Tabel pendidikan meluber 12 px pada 375 px | Sedang | Tutup |
| 04 | `index.html` | Badge status hanya dibedakan warna | Sedang | Tutup |
| 05 | `styleguide.html` | Contoh tombol nonaktif masih bisa difokus | Rendah | Tunda |
| 06 | `index.html` | Menu tanpa keadaan buka-tutup di layar sempit | Rendah | Diterima |

Temuan 06 adalah pasangan dari butir `[!]` di `catatan-fidelity.txt` Bab 14: batasan yang
sama, kali ini dinyatakan sebagai keputusan rilis — "di luar cakupan: butuh JavaScript.
Menu ditumpuk, bukan disembunyikan."

### 2. Satu perbaikan CSS yang benar-benar diterapkan

```css
.proyek-card .card-img-top {
  border-bottom: 1px solid var(--clr-border);
  border-radius: 0;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

Dua baris ini menjawab temuan 01: tinggi kartu tidak lagi melompat saat gambar dimuat.
Dua temuan lain (02, 03) sudah tertutup oleh pekerjaan Bab 13 — bukan dikerjakan ulang di
sini, hanya diverifikasi.

### 3. Cuplikan refactor di `qa.html`

Halaman QA memuat `<pre><code>` berisi tiga aturan yang berubah karena temuan, lengkap
dengan komentar `/* kustom — temuan 0N: … */`. Tujuannya agar laporan dan kode bisa
dibaca berdampingan tanpa berpindah berkas.

### 4. Status rilis

- Tautan "Checklist QA" ditambahkan ke footer ketiga halaman.
- Footer `qa.html` menutup dengan `&copy; 2025 Rizky Ardiansyah · v1.0.0`.

## Berkas di folder ini

| Berkas | Isi |
| --- | --- |
| `index.html` | Beranda final (457 baris) |
| `tentang.html` | Halaman tentang final |
| `styleguide.html` | Styleguide final |
| `qa.html` | Checklist rilis, matriks uji, laporan temuan, cuplikan refactor |
| `css/style.css` | 301 baris — v3 final |
| `catatan-fidelity.txt` | Dibawa dari Bab 14, dirujuk di checklist |
| `img/` | Sembilan SVG, termasuk `avatar-rizky-lebar.svg` |

## Cara memeriksa

1. `qa.html`: tiga bagian checklist, matriks uji lima pemeriksaan, enam temuan — cocokkan
   jumlahnya dengan berkas ini.
2. Bandingkan `bab-14-figma/css/style.css` dan `bab-15-final/css/style.css`: yang berubah
   hanya **dua deklarasi** di dalam satu aturan, yaitu `aspect-ratio` dan `object-fit`
   pada `.proyek-card .card-img-top` — tidak ada aturan lain yang ditambah.
3. `aspect-ratio: 16 / 9` mencegah tinggi kartu melompat saat gambar dimuat. Matikan
   cache jaringan dan muat ulang berulang kali — kartu tidak bergeser.
4. Periksa temuan 05 dan 06 berstatus **Tunda** dan **Diterima**. Rilis yang baik tidak
   menutup semua temuan; ia menjelaskan mengapa sebagian tidak ditutup.

## Akhir dari contoh ini

Empat belas folder kumulatif, satu website CV, tanpa JavaScript dan tanpa berkas biner.
Yang dibawa keluar dari bab terakhir bukan hanya kode, tetapi tiga kebiasaan:

- Token lebih dulu, nilai mentah belakangan.
- Setiap komponen punya tempat dokumentasi (`styleguide.html`), bukan hanya pemakaian.
- Setiap keputusan penyimpangan dicatat (`catatan-fidelity.txt`, `qa.html`).
