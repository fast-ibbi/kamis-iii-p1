# Soal Praktikum Lab — Bab 05: CSS Box Model dan Layout

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 10 soal praktikum · estimasi 20–40 menit per soal
> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)

---

**Praktikum Lab (10 soal)**

### Lab 1 — Kartu kategori dengan badge "Baru"
**Konteks:** Halaman katalog Tokosaya membutuhkan kartu kategori ringkas: judul kategori, jumlah produk, dan badge "Baru" yang menempel di pojok kanan atas kartu. Kerjakan pada file terpisah supaya `index.html` tidak terganggu.

**Tugas:**
1. Buat `tokosaya-css/lab-kategori.html` berisi dua kartu kategori berdampingan (mis. "Aksesori Input — 2 produk" dan "Audio — 2 produk").
2. Atur kartu: `width: 240px; padding: 16px; border: 1px solid #E2E8F0; border-radius: 12px;` dengan mode `border-box` aktif.
3. Tempelkan badge "Baru" di pojok kanan atas kartu memakai `position: absolute; top: 8px; right: 8px;` dan pastikan kotak landasan posisinya benar.
4. Susun kedua kartu berdampingan tanpa Flexbox: wadah memakai `inline-block` dengan trik `font-size: 0`, sedangkan kartu memakai `vertical-align: top` dan `font-size` eksplisit.

**Bukti yang dikumpulkan:** file HTML + CSS, tangkapan layar halaman, dan tangkapan diagram kotak satu kartu dari DevTools.

### Lab 2 — Debug: kartu meluber dari kontainer
**Konteks:** Kamu mewarisi kode katalog dari teman satu tim. Halaman menampilkan bilah gulir horizontal, padahal kontainer dibatasi 920 px dan tiap kartu ditulis 300 px.

**Tugas:**
1. Perhatikan potongan kode berikut, lalu hitung lebar kotak setiap kartu seperti yang diamati browser.

```css
.wadah { max-width: 920px; margin: 0 auto; }
.kartu {
  display: inline-block;
  width: 300px;
  padding: 16px;
  border: 2px solid #E2E8F0;
}
```

2. Tuliskan hitungan lebar tiap kartu, lalu jelaskan mengapa tiga kartu tidak muat dalam satu baris.
3. Tuliskan perbaikan minimal (satu blok aturan) dan buktikan hasilnya di browser.
4. Catat di komentar CSS mengapa mode itu dipilih.

**Bukti yang dikumpulkan:** tabel hitungan lebar, blok CSS perbaikan, dan tangkapan layar sebelum serta sesudah perbaikan.

### Lab 3 — Audit diagram kotak lewat DevTools
**Konteks:** Sebelum mengubah CSS, kebiasaan tim Tokosaya adalah membaca diagram kotak elemen terlebih dahulu.

**Tugas:**
1. Buka `tokosaya-css/index.html` (hasil Bab 5) di Chrome, sorot `.produk-card` pertama, lalu catat angka diagram kotak: `width`, `padding`, `border`, dan `margin`.
2. Verifikasi dengan hitungan: apakah lebar kotak yang dilaporkan sesuai dengan nilai `width: 280px` yang tertulis di CSS? Jelaskan.
3. Beri komentar sementara pada aturan global `box-sizing`, muat ulang halaman, lalu catat perubahan angka diagram kotak beserta gejala visualnya.
4. Kembalikan aturan tersebut, ulangi langkah 1, dan tuliskan kesimpulan tiga kalimat.

**Bukti yang dikumpulkan:** tabel angka diagram kotak (sebelum/sesudah), dua tangkapan layar DevTools, dan kesimpulan.

### Lab 4 — Refactor CSS dengan jarak "liar"
**Konteks:** Seorang anggota tim menulis jarak berdasarkan perasaan. Hasilnya halaman terasa tidak berirama: nilai jaraknya 14 px, 18 px, 30 px, dan 42 px.

**Tugas:**
1. Salin potongan CSS berikut ke file lab, lalu sunting seluruh nilainya ke skala 8 px proyek Tokosaya.

```css
.panel { padding: 14px; margin-bottom: 18px; }
.panel-judul { margin: 0 0 18px; }
.panel-aksi { margin-top: 30px; }
.bagian { padding: 42px 0; }
```

2. Untuk setiap nilai, tulis langkah skala yang dipilih (8 × n) pada komentar CSS.
3. Tulis satu paragraf: pada kasus di atas, kapan kamu memakai padding dan kapan memakai margin.

**Bukti yang dikumpulkan:** file CSS sebelum dan sesudah, tabel pemetaan nilai lama → langkah skala, dan satu paragraf alasan.

### Lab 5 — Cek aksesibilitas teks terpotong dan area sentuh
**Konteks:** Daftar arsip Tokosaya memuat nama dokumen yang panjang. Tiga baris pertama dipotong dengan elipsis supaya kolom tetap rapi.

**Tugas:**
1. Buat daftar berisi tiga nama dokumen; setiap baris memakai pola pemenggalan satu baris: `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`.
2. Pastikan teks penuh tetap dapat diamati pengguna melalui sarana bawaan HTML, dan sebutkan sarana itu.
3. Ukur tinggi area sasaran setiap baris daftar di DevTools, bandingkan dengan ambang WCAG 2.2 (2.5.8) 24 × 24 px, lalu tambahkan padding dari skala 8 px bila belum memenuhi.
4. Uji navigasi dengan papan tombol dan tunjukkan bahwa indikator fokus terlihat.

**Bukti yang dikumpulkan:** file HTML/CSS, catatan ukuran area sasaran, dan tangkapan layar fokus keyboard.

### Lab 6 — Header sticky dan tombol bantuan fixed
**Konteks:** Halaman bantuan Tokosaya punya header yang harus tetap terlihat dan tombol "Butuh bantuan?" di sudut kanan bawah.

**Tugas:**
1. Buat halaman lab dengan header `position: sticky; top: 0;` berlatar solid dan tombol bantuan `position: fixed` di sudut kanan bawah.
2. Gulir halaman ke bawah dan amati keduanya; pastikan tulisan pada konten yang tergulir tidak tembus terlihat di belakang header.
3. Tuliskan tiga poin catatan: kapan `sticky` layak dipakai, kapan `fixed` justru mengganggu, dan bagaimana `z-index` kecil dipakai untuk menata keduanya.

**Bukti yang dikumpulkan:** file lab, tangkapan layar pada dua posisi gulir, dan tiga poin catatan.

### Lab 7 — Debug: badge menempel pada kotak yang salah
**Konteks:** Pada revisi kartu produk, badge "Tersedia" tidak lagi muncul di pojok gambar melainkan bergeser jauh ke bawah, karena landasan posisinya berpindah.

**Tugas:**
1. Perhatikan CSS berikut; tentukan kotak mana yang menjadi landasan badge, dan prediksikan posisi badge sebelum membuka browser.

```css
.produk-card  { position: relative; }
.produk-media { /* tidak ada deklarasi position */ }
.produk-badge { position: absolute; top: 8px; right: 8px; }
```

2. Buktikan prediksimu di browser, lalu perbaiki dengan satu deklarasi pada `.produk-media`.
3. Jelaskan mekanisme *nearest positioned ancestor* dengan bahasamu sendiri dalam dua kalimat.

**Bukti yang dikumpulkan:** prediksi tertulis, tangkapan layar sebelum dan sesudah perbaikan, serta dua kalimat penjelasan.

### Lab 8 — Panel arsip dengan gulir internal
**Konteks:** Panel "Arsip Dokumen" menampilkan 12 baris dokumen. Halaman utama tidak boleh ikut menggulir hanya karena daftar ini panjang.

**Tugas:**
1. Buat wadah daftar dengan `max-height` setara delapan baris dan `overflow-y: auto`.
2. Isi dengan 12 nama dokumen, dua di antaranya sangat panjang (lebih dari 50 karakter).
3. Tangani nama panjang dengan dua cara: baris biasa memakai elipsis satu baris, satu baris khusus memakai `overflow-wrap: break-word`; jelaskan perbedaan pemakaian keduanya.
4. Pastikan kontainer halaman tetap `max-width: 960px` tanpa bilah gulir horizontal.

**Bukti yang dikumpulkan:** file HTML/CSS, tangkapan layar panel sebelum dan sesudah digulir, serta penjelasan dua kalimat.

### Lab 9 — Revisi tata letak kartu dashboard akademik
**Konteks:** Studi kasus SIAKAD pada bab mencatat tiga kartu informasi dengan padding 40 px, jarak liar (12/17/28 px), dan margin antarkartu 40 px yang bertetangga dengan border bagian 24 px.

**Tugas:**
1. Buat tabel masalah → solusi untuk minimal lima nilai jarak pada kartu tersebut.
2. Tulis versi revisi CSS: padding badan kartu 24 px, padding media 16 px, jarak antarkartu 32 px satu arah, dan tanpa tinggi yang dikunci.
3. Ganti tinggi tetap kartu dengan `min-height`, lalu jelaskan alasannya dalam satu kalimat.
4. Tambahkan header tabel jadwal yang menempel saat daftar digulir.

**Bukti yang dikumpulkan:** tabel masalah → solusi, file CSS revisi, dan tangkapan layar sebelum serta sesudah.

### Lab 10 — Eksperimen tiga nilai display
**Konteks:** Kamu ingin membuktikan sendiri perilaku `inline`, `block`, dan `inline-block` sebelum memutuskan jenis kotak untuk deretan badge kategori.

**Tugas:**
1. Buat satu halaman berisi tiga kotak badge dengan angka CSS identik (`width: 120px; padding: 8px 16px;`) tetapi nilai `display` berbeda: `inline`, `block`, dan `inline-block`.
2. Di DevTools, catat lebar kotak yang benar-benar terbentuk pada masing-masing badge.
3. Tambahkan dua kotak `inline-block` berdampingan, catat celah yang muncul, lalu hilangkan celah itu dengan trik `font-size: 0`.
4. Tulis kesimpulan: nilai `display` mana yang tepat untuk chip kategori, dan mengapa.

**Bukti yang dikumpulkan:** file HTML/CSS, tabel lebar kotak hasil pengukuran, dan kesimpulan.
