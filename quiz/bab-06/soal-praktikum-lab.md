# Soal Praktikum Lab — Bab 06: Flexbox untuk Web Layout

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 10 soal praktikum · estimasi 20–40 menit per soal
> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)

---

**Praktikum Lab (10 soal)**

### Lab 1 — Navigasi dua anak yang menekuk rapi
**Konteks:** Wireframe revisi Tokosaya menuntut logo di kiri, empat link menu plus tombol "Keranjang (0)" di kanan. Halaman harus tetap rapi ketika jendela disempitkan.

**Tugas:**
1. Bangun struktur `nav` dengan **dua anak langsung**: merek dan satu pembungkus kelompok kanan.
2. Jadikan `<nav>` flex container dengan spasi antar-kelompok di tepi dan `flex-wrap: wrap`; beri `gap` pada `<nav>` dan pada kelompok kanan.
3. Uji tiga lebar jendela (± 1280 px, 768 px, 360 px) dan catat bagaimana penekukan terjadi dua lapis: kelompok kanan turun lebih dulu, lalu link menu ikut menekuk di dalamnya.
4. Jelaskan alasan pengelompokan itu dalam dua kalimat.

**Bukti yang dikumpulkan:** file HTML/CSS, tiga tangkapan layar ukuran berbeda, dan catatan penekukan.

### Lab 2 — Hero terpusat penuh
**Konteks:** Hero Tokosaya perlu judul, subjudul, dan satu CTA yang berdiri tepat di tengah — horizontal maupun vertikal — di dalam area setinggi 360 px.

**Tugas:**
1. Susun hero sebagai flex container bertipe `column` dengan `gap` dari skala 8 px.
2. Pusatkan konten pada sumbu utama dan sumbu silang, lalu beri `min-height: 360px`.
3. Beri CTA keadaan `:hover` dan uji jangkauan tombol dengan papan tombol.
4. Tuliskan satu keputusan keterbacaan untuk subjudul beserta alasannya.

**Bukti yang dikumpulkan:** file hero, tangkapan layar, dan catatan keputusan.

### Lab 3 — Debug: delapan kartu memaksa satu baris
**Konteks:** Katalog menampilkan bilah gulir horizontal; delapan kartu memanjang keluar layar. Kecurigaan mengarah ke dua deklarasi berikut.

**Tugas:**
1. Perhatikan potongan kode berikut, lalu sebutkan satu properti yang hilang dan satu nilai yang salah.

```css
.produk-row { display: flex; }
.produk-card { flex: 0 0 250px; }
```

2. Perbaiki agar kartu boleh menekuk ke baris berikutnya dan boleh menyusut saat layar sempit.
3. Bandingkan perilaku `flex: 0 0 250px` dan `flex: 0 1 250px` pada lebar jendela 360 px, lalu catat hasilnya.
4. Tulis satu kalimat pencegahan agar kekeliruan ini tidak terulang.

**Bukti yang dikumpulkan:** catatan dua temuan, CSS perbaikan, tabel perbandingan, dan tangkapan layar.

### Lab 4 — Debug: kartu tidak sama tinggi dan harga tidak sejajar
**Konteks:** Baris kartu produk terlihat bergelombang. Kartu dengan deskripsi panjang lebih tinggi, sementara harga tidak berbaris rapi di dasar kartu.

**Tugas:**
1. Reproduksi gejala dengan memberi `.produk-row { align-items: center; }` pada empat kartu yang panjang isinya berbeda.
2. Jelaskan mengapa `align-items: center` menimbulkan gejala itu.
3. Perbaiki dengan nilai default (`stretch`) ditambah pengaturan posisi harga, lalu buktikan seluruh harga sejajar.
4. Jelaskan peran `gap: 8px` di dalam kartu pada hasil akhir.

**Bukti yang dikumpulkan:** kode sebelum/sesudah, tangkapan layar, dan dua paragraf penjelasan singkat.

### Lab 5 — Inspeksi lencana flex di DevTools
**Konteks:** Tim ingin memiliki catatan teknis nilai komputasi flex pada proyek sebelum menghadapi UTS.

**Tugas:**
1. Buka katalog Tokosaya, lalu periksa lencana `flex` pada `.site-nav` dan `.produk-row` di tab Elements.
2. Catat nilai komputasi `display`, `flex-wrap`, `gap`, dan `flex-basis` anak pada kedua wadah.
3. Ubah langsung (*live edit*) nilai `flex-wrap` menjadi `nowrap`, amati efeknya, lalu kembalikan.
4. Ubah `justify-content` `.produk-row` menjadi `center` dan catat apa yang berubah pada baris terakhir.

**Bukti yang dikumpulkan:** tabel nilai komputasi, dua tangkapan layar, dan catatan hasil live edit.

### Lab 6 — Refactor deret inline-block menjadi flex
**Konteks:** Deret kartu versi Bab 5 memakai `inline-block`, trik `font-size: 0`, dan `vertical-align: top`. Kamu diminta membandingkannya dengan versi flexbox.

**Tugas:**
1. Salin deret kartu versi Bab 5 ke file lab, lalu ukur dan catat: celah antar item, trik yang dipakai, dan jumlah deklarasi pengatur jarak.
2. Tulis ulang deret itu memakai `display: flex; flex-wrap: wrap; gap: 24px;` pada wadah dan `flex: 0 1 250px` pada kartu.
3. Hapus trik yang tidak lagi diperlukan dan catat minimal tiga hal yang berubah.
4. Tulis kesimpulan dua kalimat: kapan versi flex lebih menguntungkan.

**Bukti yang dikumpulkan:** dua versi kode, tabel perbandingan, dan kesimpulan.

### Lab 7 — Cek aksesibilitas: urutan visual vs urutan fokus
**Konteks:** Desainer ingin nomor telepon Tokosaya muncul lebih dulu di footer pada layar sempit. Cara termudah adalah mengubah urutan visual dengan properti `order`.

**Tugas:**
1. Bangun footer dengan tiga kolom (profil, menu, kontak), lalu pada layar sempit angkat kolom kontak dengan `order`.
2. Telusuri halaman memakai tombol Tab; catat urutan fokus dan bandingkan dengan urutan visual.
3. Buat `:focus-visible` terlihat pada link footer (misalnya `outline` 3 px) dan tunjukkan buktinya.
4. Simpulkan batas aman pemakaian `order` dalam satu-dua kalimat.

**Bukti yang dikumpulkan:** kode, catatan urutan fokus vs urutan visual, dan tangkapan layar fokus.

### Lab 8 — Baris chip filter kategori
**Konteks:** Halaman katalog Tokosaya membutuhkan deretan chip kategori produk (mis. Aksesori Input, Audio, Layar, Penyimpanan, Daya, Video, ditambah dua kategori versimu) di atas daftar kartu.

**Tugas:**
1. Bangun deret chip memakai `display: flex; flex-wrap: wrap; gap: 8px;` dalam satu baris.
2. Beri setiap chip padding dari skala 8 px supaya area sentuhnya nyaman dan bentuknya tetap utuh.
3. Uji pada lebar 360 px dan pastikan chip menekuk tanpa menimbulkan bilah gulir horizontal.
4. Jelaskan mengapa `gap` lebih tepat daripada `margin-right` per chip pada deret yang menekuk.

**Bukti yang dikumpulkan:** file HTML/CSS, tangkapan layar pada layar sempit, dan penjelasan.

### Lab 9 — Prediksi dan verifikasi jumlah kartu per baris
**Konteks:** Sebelum demo kepada dosen, kamu diminta memperkirakan berapa kartu yang tampil berdampingan pada beberapa ukuran jendela.

**Tugas:**
1. Dengan basis kartu 250 px, `gap` 24 px, dan padding baris 24 px di kiri-kanan, hitung prediksi jumlah kartu per baris pada lebar jendela 1280 px, 1024 px, dan 768 px.
2. Verifikasi setiap prediksi di browser dan catat jumlah sebenarnya.
3. Jelaskan selisih prediksi dan kenyataan bila ada (mis. pembulatan ke bawah, pengaruh padding).
4. Catat pada lebar berapa komposisi kartu berubah, dan mengapa.

**Bukti yang dikumpulkan:** tabel prediksi vs hasil ukur, catatan lebar perubahan komposisi, dan tangkapan layar salah satu ukuran.

### Lab 10 — Baris tiga kartu ringkasan dasbor
**Konteks:** Dasbor akademik menampilkan tiga kartu ringkasan: Status Akademik, Jadwal Hari Ini, dan Tanggungan Keuangan. Ketiganya harus mengisi lebar halaman secara merata.

**Tugas:**
1. Bangun baris flex berisi tiga kartu dan beri setiap kartu `flex: 1`, lalu amati pembagian ruangnya.
2. Ubah satu kartu menjadi `flex: 2`, lalu catat perubahan proporsi dengan membandingkan lebar tiap kartu di DevTools.
3. Tambahkan `gap: 24px` dan buktikan jaraknya hanya muncul di antara kartu, tanpa sisa ruang di tepi.
4. Simpulkan dalam satu paragraf kapan `flex: 1` lebih tepat daripada lebar tetap.

**Bukti yang dikumpulkan:** kode, tabel lebar kartu hasil pengukuran, dan satu paragraf kesimpulan.
