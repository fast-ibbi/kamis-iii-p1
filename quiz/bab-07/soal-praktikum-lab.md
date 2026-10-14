# Soal Praktikum Lab — Bab 07: CSS Grid dan Responsive Web Design

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 10 soal praktikum · estimasi 20–40 menit per soal
> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)

---

**Praktikum Lab (10 soal)**

### Lab 1 — Membangun blok "Sorotan Toko" tiga breakpoint
**Konteks:** `index.html` Tokosaya versi CSS murni baru punya navigasi dan katalog. Pemilik toko ingin satu blok "Sorotan Toko" berisi tiga kartu (Produk Terlaris, Pengiriman Hari Ini, Ulasan Pelanggan) yang tetap nyaman dibaca dari HP hingga monitor kantor.

**Tugas:**
1. Buat `latihan-bab7/sorotan.html` dan `latihan-bab7/css/sorotan.css`, lalu definisikan token Tokosaya minimal `--clr-primary`, `--clr-surface`, `--clr-border`, `--clr-dark`, `--space-unit`, dan `--radius` di `:root`.
2. Buat wadah `.sorotan-grid` sebagai grid dengan `gap` berbasis `--space-unit` dan tiga `<article class="sorotan-kartu">` berisi judul serta satu kalimat singkat.
3. Terapkan pola mobile-first: satu kolom sebagai gaya dasar, dua kolom mulai 576 px, tiga kolom mulai 992 px, semuanya memakai `repeat()`. Tidak boleh ada media query `max-width`.
4. Uji dengan device toolbar pada 375 px, 576 px, 768 px, dan 992 px.

**Bukti yang dikumpulkan:** dua file yang dibuat, dua tangkapan layar (375 px dan 992 px), dan satu baris keterangan pengamatan per lebar uji.

### Lab 2 — Menambal denah grid yang rusak
**Konteks:** Rekan satu kelompok menyerahkan `admin-lama.css`. Dashboard-nya menolak berpindah ke denah dua kolom di tablet, dan satu area tampak hilang dari denah. Kamu diminta jadi peninjau kode.

**Tugas:**
1. Tinjau potongan kode berikut, temukan **dua cacat fungsional** yang membuat denah gagal dibentuk, dan jelaskan dampaknya masing-masing.

```css
.dasbor {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header header"
    "nav main"
    "footer";
  gap: 16px;
}

.dasbor-header { grid-area: header; }
.dasbor-nav    { grid-area: navv; }
.dasbor-main   { grid-area: main; }
.dasbor-footer { grid-area: footer; }

@media (min-width: 768px) {
  .dasbor {
    grid-template-columns: 220px 1fr;
    grid-template-areas:
      "header header"
      "nav main"
      "footer footer";
  }
}
```

2. Tulis versi perbaikannya ke `latihan-bab7/admin-perbaikan.css` dan tambahkan komentar penanda `/* denah versi mobile */` serta `/* denah versi tablet */`.
3. Buka halaman di 375 px dan 900 px untuk membuktikan perbaikannya bekerja.

**Bukti yang dikumpulkan:** file perbaikan, dua tangkapan layar, dan tiga kalimat penjelasan cacat yang ditemukan.

### Lab 3 — Inspeksi overlay grid di DevTools
**Konteks:** Kamu perlu memastikan `.stat-kartu` pada `admin.html` benar-benar membentuk jumlah track sesuai rancangan, dan tahu garis ke berapa saja yang terbentuk.

**Tugas:**
1. Buka `admin.html` di Chrome, aktifkan device toolbar, lalu setel lebar 1200 px.
2. Pilih elemen `.stat-kartu` di panel Elements, buka panel Layout, dan aktifkan overlay grid.
3. Catat jumlah track kolom, nomor garis yang tampak, dan jumlah baris yang terbentuk untuk empat kartu statistik.
4. Ulangi pada lebar 1100 px dan 560 px, lalu catat perubahan jumlah kolomnya.
5. Simpan temuan dalam bentuk tabel: lebar uji, jumlah kolom, media query yang berlaku.

**Bukti yang dikumpulkan:** tangkapan layar overlay grid pada 1200 px dan tabel temuan tiga lebar uji.

### Lab 4 — Refactor dari desktop-first ke mobile-first
**Konteks:** Seorang mahasiswa menulis gaya galeri katalog dengan pendekatan desktop-first. Tim memutuskan seluruh berkas CSS harus memakai pola mobile-first agar seragam dengan `admin.css`.

**Tugas:**
1. Konversi blok berikut menjadi mobile-first dengan media query `min-width` yang urutannya menaik, tanpa mengubah hasil visual di lebar mana pun.

```css
.katalog-grid { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 991px) { .katalog-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 767px) { .katalog-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 575px) { .katalog-grid { grid-template-columns: 1fr; } }
```

2. Uji kedua versi pada 375 px, 600 px, 900 px, dan 1300 px, lalu buktikan jumlah kolomnya identik.
3. Tulis tiga kalimat yang menjelaskan mengapa versi mobile-first lebih mudah dirawat.

**Bukti yang dikumpulkan:** file CSS hasil refactor, delapan tangkapan layar (empat lebar untuk dua versi) atau tabel perbandingan, dan tiga kalimat penjelasan.

### Lab 5 — Kartu promosi yang membentang dua kolom
**Konteks:** Tokosaya punya empat kartu promo: "Gratis Ongkir", "Cashback 5%", "Bundling Keyboard", dan "Tukar Tambah". Kartu "Gratis Ongkir" harus paling menonjol karena programnya paling utama.

**Tugas:**
1. Bangun `latihan-bab7/promo.html` berisi wadah `.promo-grid` dan empat kartu, memakai token Tokosaya.
2. Terapkan pola: satu kolom sebagai gaya dasar, dua kolom mulai 576 px, tiga kolom mulai 992 px.
3. Mulai 576 px, buat kartu "Gratis Ongkir" membentang dua track memakai `grid-column: 1 / span 2`. Gunakan kata kunci `span`, bukan menghitung garis akhir.
4. Amati dan catat kemana kartu sisanya mengalir pada 576 px dan pada 992 px.

**Bukti yang dikumpulkan:** file HTML dan CSS, tangkapan layar 375 px dan 900 px, serta catatan alur kartu pada kedua lebar itu.

### Lab 6 — Audit aksesibilitas panel navigasi dashboard
**Konteks:** Sebelum UTS, panel navigasi `admin.html` perlu diaudit karena dipakai dengan keyboard dan pembaca layar oleh tim gudang.

**Tugas:**
1. Periksa lima hal pada `.dasbor-nav` dan halaman `admin.html`: (a) apakah tautan aktif memakai `aria-current="page"`, (b) apakah tautan punya aturan `:focus-visible` yang terlihat, (c) apakah area sentuh tiap tautan paling kurang 40 piksel pada lebar 375 px, (d) apakah tautan disusun dalam elemen daftar (`ul`/`li`), (e) apakah halaman hanya punya satu `h1`.
2. Dokumentasikan hasil tiap pemeriksaan dengan status lolos atau belum.
3. Perbaiki satu temuan yang belum lolos, lalu buktikan perbaikannya.

**Bukti yang dikumpulkan:** daftar periksa lima poin, satu tangkapan layar cincin fokus atau area sentuh setelah perbaikan, dan dua kalimat penjelasan.

### Lab 7 — Tipografi clamp dan gambar responsif
**Konteks:** Halaman katalog Tokosaya memuat gambar produk berukuran asli 1200 px dan judul seksi. Kamu diminta memastikan keduanya tidak pernah merusak layout di layar sempit.

**Tugas:**
1. Buat `latihan-bab7/katalog-uji.html` berisi satu judul `.katalog-judul` dan empat kartu bergambar (boleh memakai gambar kotak berukuran besar).
2. Terapkan `font-size: clamp(1.5rem, 1.1rem + 1.5vw, 2rem)` pada judul dan resep gambar responsif (`width: 100%`, `height: auto`, `display: block`) pada gambar di dalam kartu.
3. Buka panel Computed DevTools, lalu catat nilai `font-size` yang benar-benar terpakai pada 375 px dan 1440 px, dan bandingkan dengan perhitungan manual.
4. Buktikan tidak ada gambar yang melebihi lebar kartunya pada 375 px.

**Bukti yang dikumpulkan:** file halaman, tabel dua baris (lebar 375 px dan 1440 px) berisi nilai hitungan manual dan nilai Computed, serta tangkapan layar 375 px.

### Lab 8 — Menuntaskan pengguliran horizontal di 375 px
**Konteks:** Halaman `admin.html` versi lain dipakai di HP petugas gudang. Saat dibuka pada 375 px, seluruh antarmuka bergeser dan tabel menyeret halaman ikut menggulir.

**Tugas:**
1. Reproduksi masalahnya: buat halaman dengan tabel lima kolom yang tidak dibungkus wadah penggulir, dan satu gambar selebar tetap 640 px di dalam seksi ringkasan.
2. Telusuri penyebabnya memakai device toolbar 375 px: gulirkan halaman untuk mengenali elemen yang melebar, lalu pilih elemen itu di panel Elements dan periksa lebar terhitungnya pada panel Computed. Catat elemen yang lebih lebar dari viewport.
3. Perbaiki kedua penyebab: bungkus tabel dengan wadah penggulir ber-`overflow-x: auto` serta `min-width: 640px` pada tabelnya, dan berikan gambar aturan `width: 100%; height: auto`.
4. Verifikasi: pada 375 px pengguliran horizontal hanya terjadi **di dalam** wadah tabel, bukan pada halaman.
5. Jangan menyelesaikan masalah dengan `overflow-x: hidden` pada `body`; tuliskan satu kalimat alasan larangan itu.

**Bukti yang dikumpulkan:** dua tangkapan layar sebelum dan sesudah perbaikan, daftar elemen penyebab sebelum perbaikan, dan satu kalimat alasan larangan `overflow-x: hidden`.

### Lab 9 — Kerangka halaman tiga kolom dengan denah area
**Konteks:** Halaman rekap Tokosaya memerlukan tiga kolom pada desktop: navigasi, konten rekap, dan panel samping berisi tips. Di HP seluruhnya bertumpuk.

**Tugas:**
1. Bangun `latihan-bab7/rekap.html` beserta CSS-nya dengan empat area semantik: `header`, `nav`, `main`, dan `aside`, ditutup `footer`.
2. Pada gaya dasar, susun semuanya bertumpuk satu kolom memakai `grid-template-areas` yang diapit tanda petik dan konsisten jumlah kolomnya.
3. Mulai 992 px, gambar ulang denah menjadi tiga kolom dengan `header` dan `footer` membentang penuh tiga track, `nav` dan `aside` mengapit `main`. Gunakan kolom tetap untuk `nav` (220 px) dan `aside` (200 px), serta `1fr` untuk `main`.
4. Pastikan tidak ada satu pun kelas posisi di HTML; seluruh posisi ditentukan `grid-area` di CSS.

**Bukti yang dikumpulkan:** file HTML dan CSS, tangkapan layar 375 px dan 1200 px, serta potongan denah mobile dan desktop yang kamu tulis.

### Lab 10 — Investigasi kaskade media query yang bentrok
**Konteks:** Seorang mahasiswa mengeluh kartu statistiknya "kadang dua kolom, kadang empat kolom". Ia menyerahkan berkas CSS berikut apa adanya.

**Tugas:**
1. Prediksi lebih dulu, tanpa membuka browser: pada 1300 px dan pada 700 px, berapa kolom yang terbentuk dan dari blok mana nilai itu diambil, serta berapa nilai `gap` yang berlaku.

```css
@media (min-width: 1200px) { .stat-kartu { grid-template-columns: repeat(4, 1fr); } }
@media (min-width: 576px)  { .stat-kartu { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 992px)  { .stat-kartu { gap: calc(var(--space-unit) * 3); } }
```

2. Buktikan prediksimu di panel Styles DevTools: perhatikan aturan yang dicoret dan aturan yang menang pada tiap lebar uji. Catat selisih antara prediksi dan kenyataan bila ada.
3. Tulis ulang blok tersebut menjadi urutan mobile-first yang benar tanpa mengubah perilaku akhir yang diinginkan (1 kolom di bawah 576 px, 2 kolom mulai 576 px, 4 kolom mulai 1200 px, `gap` meluas mulai 992 px).
4. Tulis dua kalimat simpulan tentang aturan kaskade yang berlaku ketika dua aturan sama spesifik.

**Bukti yang dikumpulkan:** tabel prediksi versus hasil DevTools untuk 700 px dan 1300 px, file CSS hasil penulisan ulang, dan dua kalimat simpulan.
