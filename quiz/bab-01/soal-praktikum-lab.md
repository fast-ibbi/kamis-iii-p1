# Soal Praktikum Lab — Bab 01: Pengantar Frontend Development dan Web Design

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 10 soal praktikum · estimasi 20–40 menit per soal
> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)

---

**Praktikum Lab (10 soal)**

### Lab 1 — Halaman Info Produk Pertama
**Konteks:** Tim Tokosaya ingin mulai memamerkan satu produk unggulannya, Keyboard Mekanis KX-210, meski CSS belum dipelajari. Halaman ini akan menjadi latihan markup pertamamu sebelum proyek `tokosaya-css/` dimulai.

**Tugas:**
1. Buat folder `latihan-bab01/` beserta subfolder `img/`, lalu siapkan satu gambar placeholder bernama `produk-keyboard-kx210.svg` di dalamnya.
2. Buat file `info-produk.html` dengan pola dokumen lengkap: DOCTYPE, `html lang="id"`, meta charset UTF-8, meta viewport, dan `title` berisi "Tokosaya | Keyboard Mekanis KX-210".
3. Susun isi `body`: satu `h1` berisi nama produk; satu `img` dengan `src`, `alt` deskriptif, serta `width` dan `height` 220; satu paragraf harga "Rp650.000" dengan `strong` pada harga; dan satu `ul` berisi tiga keunggulan produk.
4. Tambahkan dua link: link relatif ke `katalog.html` dan link `mailto:halo@tokosaya.id` untuk bertanya stok.
5. Simpan, buka di Chrome, lalu catat judul tab yang tampil.

**Bukti yang dikumpulkan:** file `info-produk.html`, tangkapan layar halaman dan tab browser, serta catatan tiga baris hasil pemeriksaan (apa yang dilihat, apa yang diperiksa, dan artinya bagi kode).

### Lab 2 — Membaca Pohon Dokumen di Chrome DevTools
**Konteks:** Sebelum mengubah struktur halaman, kamu perlu terbiasa membaca hasil pembacaan browser atas kode yang kamu tulis. Halaman kecil "catatan pesanan" berikut dipakai sebagai bahan latihan.

**Tugas:**
1. Ketik ulang potongan halaman berikut ke dalam `catatan-pesanan.html` (lengkapi bagian `head` sesuai pola dokumen yang benar terlebih dahulu):

```html
<body>
  <h1>Catatan Pesanan #TKS-001</h1>
  <p>Pesanan berisi <strong>Keyboard Mekanis KX-210</strong> dan Mouse Wireless MW-88.</p>
  <ul>
    <li>Status: dikemas</li>
    <li>Estimasi kirim: hari yang sama</li>
  </ul>
</body>
```

2. Buka file di Chrome, tekan `F12`, dan pastikan tab **Elements** aktif.
3. Buat tabel berisi lima tag yang terlihat di panel Elements beserta fungsinya menurut kode yang kamu tulis.
4. Klik baris `h1` di panel Elements, perhatikan bagian halaman yang tersorot, lalu catat apa yang terjadi.
5. Aktifkan device toolbar, ubah lebar layar dari 375 piksel (HP) ke 1280 piksel (komputer), lalu catat dua perbedaan penyajian teks.

**Bukti yang dikumpulkan:** file HTML, tabel lima tag, catatan hasil sorotan elemen, dan tangkapan layar panel Elements pada dua lebar layar.

### Lab 3 — Menelusuri Dua Kerusakan Berkas
**Konteks:** Dua berkas hasil unduhan dari grup kelas bermasalah: satu file dikenali sebagai teks biasa, satu gambar tidak muncul meski halamannya tampil. Sebagai anggota tim, kamu perlu membuat diagnosis sebelum memperbaiki.

**Tugas:**
1. Siapkan dua berkas: `index.html.txt` yang isinya kode halaman profil, dan halaman `profil.html` yang memuat `<img src="foto-profil.jpg">` padahal file yang tersedia bernama `foto-profil.png`.
2. Untuk berkas pertama: jelaskan mengapa Chrome menampilkan teks mentah bercampur tag, lalu perbaiki namanya supaya dikenali sebagai halaman.
3. Untuk gambar: jelaskan mengapa gambar tidak tampil, lalu perbaiki nilai `src` dan muat ulang halamannya.
4. Tuliskan masing-masing satu tindakan pencegahan untuk kedua kasus.

**Bukti yang dikumpulkan:** kedua berkas final yang sudah berfungsi, plus catatan diagnosis dan pencegahan untuk masing-masing kasus.

### Lab 4 — Merapikan Dokumen Sesuai Konvensi
**Konteks:** Di grup belajar ditemukan file latihan yang ditulis terburu-buru dengan tag huruf besar dan bagian `head` yang tidak lengkap. Sebelum dipakai lagi, file itu perlu dirapikan mengikuti konvensi bab ini.

**Tugas:**
1. Ketik ulang potongan kode berikut ke `profil-rapi.html`:

```html
<HTML>
<HEAD>
<TITLE>PROFILKU</TITLE>
</HEAD>
<BODY>
<H1>Profil Saya</H1>
<P>Nama saya Rani. <STRONG>Mahasiswa Sistem Informasi</STRONG></P>
</BODY>
</HTML>
```

2. Lengkapi `head` sesuai pola lima unsur (DOCTYPE, bahasa dokumen, charset, viewport, title).
3. Ubah semua tag menjadi huruf kecil dan rapikan indentasi dengan dua spasi.
4. Susun daftar perubahan yang kamu lakukan beserta alasan singkatnya (minimal empat perubahan).

**Bukti yang dikumpulkan:** file final, daftar perubahan beserta alasan, dan tangkapan layar judul tab pada browser.

### Lab 5 — Menata Folder Proyek Latihan
**Konteks:** Sebelum proyek Tokosaya dimulai, kamu menyiapkan folder latihan yang rapi supaya kebiasaan penamaan yang baik terbentuk sejak awal.

**Tugas:**
1. Buat folder `toko-latihan/` berisi `index.html` dan `tentang.html`.
2. Siapkan subfolder `css/` berisi `style.css` (boleh masih kosong) dan subfolder `img/` berisi `logo-toko.svg`.
3. Bereskan tiga berkas berkarakter bermasalah berikut menjadi kebab-case dan tempatkan pada folder yang benar: `Tentang Toko.html` menjadi `tentang.html`, `Style Utama.CSS` menjadi `style.css`, dan `Logo Toko.svg` menjadi `logo-toko.svg`.
4. Tampilkan struktur folder akhir (tulis manual atau jalankan perintah `tree`), lalu jelaskan mengapa halaman utama dinamai `index.html`, bukan `halaman1.html`.

**Bukti yang dikumpulkan:** struktur folder akhir dan paragraf alasan sepanjang tiga kalimat.

### Lab 6 — Uji Banding Viewport
**Konteks:** Klien Tokosaya mengeluh halaman tampak kecil saat dibuka di HP. Kamu menduga penyebabnya adalah meta viewport yang belum dipasang, tetapi ingin membuktikannya dengan uji banding sederhana.

**Tugas:**
1. Buat dua berkas dari konten yang sama: `tanpa-viewport.html` (tanpa meta viewport) dan `dengan-viewport.html` (memakai `<meta name="viewport" content="width=device-width, initial-scale=1">`).
2. Isi `body` keduanya dengan satu `h1` dan satu paragraf panjang.
3. Buka keduanya di Chrome, aktifkan device toolbar, dan amati pada lebar 375 piksel.
4. Catat perbedaan penyajian kedua berkas dalam tabel, lalu tuliskan kesimpulan tiga baris tentang peran meta viewport.

**Bukti yang dikumpulkan:** dua berkas HTML, tabel perbandingan, dua tangkapan layar device toolbar, dan kesimpulan.

### Lab 7 — Memilih Format Aset dan Penamaan
**Konteks:** Tokosaya akan menambah aset gambar. Sebelum tim lain mengumpulkan berkas, kamu diminta memutuskan format dan penamaan yang tepat agar halaman tetap cepat dibuka, terutama lewat jaringan HP.

**Tugas:**
1. Untuk tiap aset berikut, pilih format yang paling tepat (SVG, JPEG, atau PNG) dan tuliskan alasan satu kalimat: logo Tokosaya; foto asli keyboard dari kamera; ikon keranjang sederhana; tangkapan layar halaman katalog; ilustrasi hero bergaya sederhana.
2. Usulkan nama berkas kebab-case untuk kelima aset tersebut.
3. Jelaskan mengapa ukuran berkas gambar perlu dijaga tetap wajar.

**Bukti yang dikumpulkan:** tabel keputusan format (aset, format, alasan), daftar nama berkas usulan, dan paragraf singkat tentang ukuran berkas.

### Lab 8 — Membandingkan Dua Versi Halaman
**Konteks:** Dua versi halaman `promo.html` hasil kerja dua anggota tim dikumpulkan. Hanya satu versi yang mengikuti konvensi dokumen pada bab ini; tugasmu menilai keduanya berdasarkan bukti kode.

**Tugas:**
1. Bandingkan kedua dokumen berikut, lalu tuliskan tabel perbandingan pada aspek: atribut bahasa, meta viewport, judul tab, dan penulisan tag.

Versi A:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Promo</title>
</head>
<body>
  <H1>Promo Tokosaya</H1>
  <P>Diskon mouse wireless sampai akhir bulan.</P>
</body>
</html>
```

Versi B:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tokosaya | Promo Bulan Ini</title>
</head>
<body>
  <h1>Promo Tokosaya</h1>
  <p>Diskon mouse wireless sampai akhir bulan.</p>
</body>
</html>
```

2. Tentukan versi yang paling sesuai konvensi dan jelaskan alasanmu.
3. Perbaiki versi yang lemah sehingga sesuai konvensi, lalu buktikan judul tab barunya di browser.

**Bukti yang dikumpulkan:** tabel perbandingan, versi perbaikan, dan tangkapan layar judul tab pada browser.

### Lab 9 — Menghubungkan Dua Halaman
**Konteks:** Berpindah antarhalaman lewat link relatif adalah bekal penting sebelum proyek `tokosaya-css/` dimulai. Kamu akan membuat dua halaman sederhana yang saling terhubung.

**Tugas:**
1. Di dalam folder `navigasi-latihan/`, buat `index.html` (daftar produk sederhana) dan `produk.html` (detail satu produk). Setiap halaman memakai pola dokumen lengkap dan tepat satu `h1`.
2. Hubungkan keduanya: dari `index.html` ke `produk.html`, dan sebuah link kembali ke `index.html` dari halaman detail.
3. Tambahkan satu link eksternal ke situs kampus dengan `target="_blank"` dan satu link `mailto:`.
4. Uji dengan menyalin folder `navigasi-latihan/` ke lokasi lain di komputermu, buka lagi dari lokasi baru, dan pastikan seluruh link internal tetap bekerja. Catat hasilnya dalam dua kalimat.

**Bukti yang dikumpulkan:** dua file HTML, catatan hasil uji pemindahan folder, dan tangkapan layar kedua halaman.

### Lab 10 — Audit Mandiri Sebelum Dikumpulkan
**Konteks:** Sebelum mengumpulkan tugas latihan, kamu perlu memeriksa halamanmu sendiri dengan daftar cek. Kebiasaan ini akan terus dipakai sampai proyek akhir semester.

**Tugas:**
1. Ambil halaman `info-produk.html` dari Lab 1 (atau halaman lain yang kamu buat pada bab ini).
2. Periksa lima hal dan catat status beserta buktinya: pola dokumen lengkap (DOCTYPE, bahasa, charset, viewport, title), jumlah `h1`, keberadaan `alt` pada setiap gambar, penulisan tag huruf kecil, dan tautan yang berfungsi.
3. Perbaiki seluruh temuan yang belum sesuai, lalu buktikan lewat tangkapan layar panel Elements sebelum dan sesudah perbaikan.
4. Tuliskan refleksi lima baris: apa yang ditemukan, apa yang diperbaiki, dan apa yang akan kamu biasakan mulai sekarang.

**Bukti yang dikumpulkan:** tabel audit (aspek, status, bukti), tangkapan layar sebelum dan sesudah, serta refleksi lima baris.
