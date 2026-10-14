# Soal Praktikum Lab — Bab 13: Website Responsif dan Accessibility

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 10 soal praktikum · estimasi 20–40 menit per soal
> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)

---

**Praktikum Lab (10 soal)**

### Lab 1 — Audit Responsif Tiga Breakpoint

**Konteks:** Proyek `tokosaya-bootstrap/` sudah selesai dibangun pada Bab 9–12, tetapi belum pernah diuji pada lebar layar kecil. Kamu bertugas memeriksa perilaku halamannya memakai panel perangkat DevTools.

**Tugas:**
1. Buka `index.html` dan `katalog.html` di Chrome, lalu aktifkan panel perangkat (Ctrl+Shift+M).
2. Uji berurutan pada 360 px, 576 px, 768 px, 992 px, hingga 1200 px. Catat apakah muncul penggeser horizontal, jumlah kolom katalog, dan pada lebar berapa layout berubah.
3. Isi tabel temuan dengan kolom: halaman, lebar uji, temuan, status (sesuai/tidak sesuai strategi base–md–lg).
4. Beri kesimpulan singkat: apakah perubahan layout terjadi tepat pada breakpoint proyek atau pada lebar acak.

**Bukti yang dikumpulkan:** tabel temuan dan tangkapan layar panel perangkat pada satu lebar yang bermasalah.

### Lab 2 — Memperbaiki Luber di Layar 360 px

**Konteks:** Salah satu kartu produk di `katalog.html` memuat nama produk panjang tanpa spasi di dalam baris flex. Saat dibuka di 360 px, seluruh halaman ikut bergeser ke samping.

**Tugas:**
1. Reproduksi masalahnya di panel perangkat pada 360 px dan pastikan dari elemen mana luber itu berasal (gunakan panel Elements).
2. Perbaiki dengan menambahkan `overflow-wrap` pada teks yang berpotensi panjang dan `min-width: 0` pada anak langsung kontainer flex yang bermasalah.
3. Jelaskan mengapa `min-width: 0` diperlukan khusus pada kontainer flex.
4. Uji ulang pada 320 px dan pastikan penggeser horizontal sudah hilang.

**Bukti yang dikumpulkan:** potongan CSS sebelum/sesudah, tangkapan layar 360 px sesudah perbaikan, dan penjelasan singkat.

### Lab 3 — Refactor Media Query Desktop-First pada Navigasi

**Konteks:** File `css/style.css` warisan masih mengatur `.site-nav ul` dengan gaya dasar horizontal lalu menumpukkannya lewat `max-width: 768px`. Proyek Tokosaya memakai pendekatan *mobile-first*.

**Tugas:**
1. Tulis ulang aturan navigasi menjadi *mobile-first*: gaya dasar menumpuk penuh, lalu media query `min-width: 768px` membuatnya horizontal satu baris dengan jarak antar link yang layak.
2. Selaraskan angka breakpoint dengan Bootstrap 5.3 (768 px), bukan angka lain.
3. Tulis komentar di atas media query yang menjelaskan mengapa 768 px dipilih sebagai keputusan proyek.
4. Pastikan hasil visualnya sama dengan sebelumnya pada 360 px dan 1200 px.

**Bukti yang dikumpulkan:** CSS hasil refactor, komentar breakpoint, dan tangkapan layar dua lebar uji.

### Lab 4 — Skip Link dan Fokus pada Halaman Baru

**Konteks:** Tokosaya menambah halaman baru bernama `promo.html` yang memakai header dan navigasi seperti halaman lain. Halaman ini belum punya jalan pintas menuju konten utama.

**Tugas:**
1. Tambahkan skip link CSS murni sebagai elemen pertama di dalam `body`, dengan sasaran `#konten-utama`.
2. Beri elemen `main` atribut `id="konten-utama"` dan `tabindex="-1"`, lalu jelaskan fungsi `tabindex="-1"` di sini.
3. Tambahkan aturan `:focus-visible` untuk link dan tombol dengan outline yang jelas serta `outline-offset`.
4. Uji dengan Tab dari awal halaman (bukan klik): pastikan skip link muncul, dan setelah Enter fokus berpindah ke konten utama.

**Bukti yang dikumpulkan:** potongan CSS dan HTML yang ditambahkan serta catatan hasil uji Tab.

### Lab 5 — Cek Kontras dengan Color Picker DevTools

**Konteks:** Halaman Tokosaya memiliki tiga kombinasi warna teks dan latar yang perlu diverifikasi terhadap ambang WCAG level AA: teks putih di atas badge amber, teks abu terang di atas kartu putih, dan teks `--clr-body` di atas `--clr-surface`.

**Tugas:**
1. Ukur rasio kontras ketiga kombinasi memakai color picker pada panel Styles DevTools.
2. Catat hasil pengukuran dalam tabel: kombinasi, rasio, ambang yang berlaku (4,5:1 untuk teks normal, 3:1 untuk teks besar/elemen non-teks), dan status lulus/gagal.
3. Perbaiki kombinasi yang gagal langsung di aras token atau kelas sistemnya, bukan dengan tambalan warna ad hoc di satu halaman.
4. Uji ulang dan tunjukkan rasio barunya.

**Bukti yang dikumpulkan:** tabel pengukuran sebelum dan sesudah serta penjelasan singkat keputusan perbaikannya.

### Lab 6 — Audit Markup Aksesibilitas

**Konteks:** Berikut potongan halaman yang dikirim anggota tim untuk ditinjau:

```html
<h1>Promo Akhir Tahun Tokosaya</h1>
<h4>Syarat dan Ketentuan</h4>
<img src="img/promo.svg">
<a href="katalog.html">klik di sini</a>
<input type="text" class="form-control" placeholder="Email">
<hr>
```

**Tugas:**
1. Temukan minimal lima cacat aksesibilitas pada potongan tersebut.
2. Tuliskan perbaikan untuk setiap cacat, termasuk nilai `alt` yang tepat untuk gambar dan teks link yang bermakna.
3. Jelaskan mengapa teks link "klik di sini" menghambat pengguna pembaca layar yang menelusuri halaman lewat daftar link.
4. Sebutkan satu elemen pada potongan itu yang boleh memakai `alt=""` dan alasan yang benar untuk itu.

**Bukti yang dikumpulkan:** tabel temuan dan potongan markup hasil perbaikan.

### Lab 7 — Gambar Hero Responsif dengan Picture

**Konteks:** Hero `index.html` perlu mengganti komposisi gambarnya antar breakpoint: versi lebar penuh untuk desktop dan versi sederhana untuk layar kecil. Tersedia aset `img/hero-1200.svg`, `img/hero-768.svg`, dan `img/hero-480.svg`.

**Tugas:**
1. Tulis elemen `<picture>` dengan dua `<source>` memakai `min-width` dan satu `<img>` sebagai pilihan terakhir.
2. Susun urutan `source` dengan benar dan jelaskan mengapa urutan itu penting bagi cara browser memilih gambar.
3. Lengkapi `img` dengan `alt` deskriptif, `width`, `height`, serta kelas `img-fluid`.
4. Buka panel Network DevTools pada lebar 400 px dan 1200 px, lalu catat berkas gambar mana yang dimuat pada masing-masing lebar.

**Bukti yang dikumpulkan:** markup `<picture>`, penjelasan urutan source, dan catatan hasil panel Network.

### Lab 8 — Uji Tab Sepuluh Langkah dan Perbaikan Form

**Konteks:** Form kontak berisi input tanpa `label for` dan sebuah tombol kirim yang ditulis sebagai `<span>` yang "terlihat seperti tombol". Ada juga `tabindex="5"` pada salah satu elemen.

**Tugas:**
1. Uji keyboard: tekan Tab sepuluh kali dari awal halaman dan catat urutan fokus yang terjadi, termasuk fokus yang hilang atau melompat tidak wajar.
2. Perbaiki tiga hal: hilangkan `tabindex` positif, hubungkan setiap input dengan `<label for>` yang menunjuk `id`, dan ganti tombol palsu menjadi elemen `<button>` asli.
3. Jelaskan mengapa urutan fokus sebaiknya mengikuti urutan DOM dan bukan ditentukan `tabindex` positif.
4. Uji ulang dan pastikan cincin fokus terlihat pada setiap elemen yang menerima fokus.

**Bukti yang dikumpulkan:** catatan urutan tab sebelum/sesudah, kode perbaikan, dan satu tangkapan layar cincin fokus.

### Lab 9 — Lighthouse Sebelum dan Sesudah Satu Perbaikan

**Konteks:** Kamu ingin membuktikan bahwa perbaikan kontras benar-benar menaikkan kualitas halaman, bukan sekadar klaim lisan.

**Tugas:**
1. Buka tab Lighthouse pada DevTools, jalankan kategori *Accessibility* pada `katalog.html`, lalu catat skor dan daftar temuan.
2. Pilih satu temuan kontras, perbaiki di level token atau kelas sistem, kemudian jalankan ulang kategori yang sama.
3. Sajikan perbandingan "sebelum" dan "sesudah" dalam tabel: skor, temuan yang hilang/muncul, dan penyebab perubahannya.
4. Jelaskan mengapa sebaiknya hanya satu kategori yang diperbaiki per putaran.

**Bukti yang dikumpulkan:** tabel perbandingan skor dan temuan, ditambah cuplikan kode perbaikannya.

### Lab 10 — Navigasi Responsif CSS Murni dengan Target Sentuh Layak

**Konteks:** Header Tokosaya harus tetap bisa dipakai tanpa JavaScript: menumpuk di layar kecil, satu baris mulai 768 px, dan tetap nyaman disentuh jempol di HP.

**Tugas:**
1. Terapkan pola navigasi menumpuk pada layar kecil dan horizontal pada `min-width: 768px`, memakai kelas `site-nav` dan struktur `ul` yang ada.
2. Pastikan setiap link memiliki tinggi target sentuh sekitar 44 piksel termasuk padding, lalu buktikan ukurannya lewat panel Computed DevTools.
3. Tandai halaman aktif dengan `aria-current="page"` dan tuliskan bagaimana gaya CSS memanfaatkan atribut itu.
4. Tambahkan pola *footer-nav* dengan menampilkan daftar link utama yang sama di footer, dan jelaskan singkat keuntungan pola itu di layar kecil.

**Bukti yang dikumpulkan:** CSS navigasi, hasil pengukuran tinggi target sentuh, dan tangkapan layar tampilan 360 px serta 768 px.
