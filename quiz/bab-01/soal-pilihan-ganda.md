# Soal Pilihan Ganda — Bab 01: Pengantar Frontend Development dan Web Design

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)
> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)

---

**Pilihan Ganda (15 soal)**

1. Istilah yang tepat untuk bagian website yang dilihat, dibaca, dan diklik pengunjung di dalam browser adalah...
   - A. backend
   - B. frontend
   - C. hosting
   - D. deployment

2. Pernyataan yang paling tepat membedakan *user interface* (UI) dan *user experience* (UX) adalah...
   - A. UI mencakup pengalaman menyeluruh pengguna, sedangkan UX hanya soal warna dan tipografi
   - B. UI adalah rancangan berbasis Figma, sedangkan UX adalah kode HTML dan CSS
   - C. UI dan UX sama saja; keduanya merupakan istilah lain dari web design
   - D. UI adalah bagian antarmuka yang langsung dilihat dan digunakan (tombol, kartu produk, formulir), sedangkan UX adalah pengalaman pengguna secara menyeluruh saat memakainya

3. Pasangan peran HTML dan CSS yang benar adalah...
   - A. HTML menyusun struktur konten (heading, paragraf, daftar, gambar, link), sedangkan CSS mengatur warna, huruf, jarak, dan layout
   - B. HTML mengatur warna dan jarak, sedangkan CSS menyusun struktur konten
   - C. HTML dan CSS sama-sama mengelola data produk di server
   - D. HTML mengatur keamanan data, sedangkan CSS mengatur kecepatan server

4. Urutan konseptual saat browser menampilkan halaman adalah...
   - A. gaya CSS diterapkan → dokumen HTML diterima → halaman ditampilkan → pohon dokumen disusun
   - B. pohon dokumen disusun → halaman ditampilkan → dokumen HTML diterima → gaya CSS diterapkan
   - C. dokumen HTML diterima → pohon dokumen (DOM) disusun → gaya CSS diterapkan → halaman ditampilkan
   - D. halaman ditampilkan → gaya CSS diterapkan → pohon dokumen disusun → dokumen HTML diterima

5. Pada analogi ruang kafe dan dapur, pelayan yang mengantar pesanan dari meja ke dapur lalu membawa hasilnya kembali paling tepat menggambarkan...
   - A. penyimpanan aset gambar dan file CSS proyek
   - B. penghubung antara frontend dan backend, yaitu aliran permintaan dan respons
   - C. peran CSS framework dalam menyusun komponen antarmuka
   - D. proses pemindahan file proyek dari komputer ke server

6. Perhatikan struktur folder proyek berikut.

```text
tokosaya-css/
├── index.html
├── katalog.html
├── tentang.html
├── css/
│   └── style.css
└── img/
    └── produk-keyboard-kx210.svg
```

Pernyataan yang tepat berdasarkan struktur folder di atas adalah...
   - A. setiap halaman wajib menyimpan salinan style.css sendiri di dalam subfolder css/
   - B. halaman utama sebaiknya dinamai utama.html agar dikenali server
   - C. nama file sebaiknya memakai huruf kapital agar terbaca oleh server
   - D. semua halaman memakai satu file `css/style.css` bersama sehingga perbaikan gaya cukup dilakukan di satu tempat, dan nama file memakai kebab-case

7. Layanan yang menyimpan file website di server supaya dapat diakses lewat internet disebut...
   - A. hosting
   - B. domain
   - C. deployment
   - D. CDN

8. Proyek Tokosaya memakai gambar SVG untuk logo dan ikon. Alasan yang paling tepat adalah...
   - A. SVG menyimpan gambar sebagai piksel beresolusi tinggi sehingga cocok untuk foto produk
   - B. SVG wajib dipakai untuk semua gambar agar ukuran file selalu besar
   - C. SVG menyimpan gambar sebagai bentuk seperti garis dan lingkaran sehingga tetap tajam saat ukurannya diubah
   - D. SVG hanya dapat ditampilkan oleh halaman yang memuat JavaScript

9. Fitur Chrome DevTools yang dipakai untuk mengubah lebar layar dari ukuran HP ke komputer agar tampilan halaman dapat diamati pada berbagai ukuran adalah...
   - A. panel Elements
   - B. device toolbar
   - C. menu Dock side
   - D. pintasan F12

10. Perhatikan potongan dokumen berikut.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <title>Tokosaya — Belanja Tepat, Kirim Cepat</title>
</head>
<body>
  <h1>Peralatan Kerja Digital untuk Semua</h1>
  <p>Keyboard, mouse, hingga monitor — pilih perangkat kerja Anda dengan harga UMKM yang jujur.</p>
</body>
</html>
```

Ketika dibuka di browser, tanda "—" tampil sebagai karakter aneh. Perbaikan yang paling tepat adalah...
   - A. mengganti tanda "—" dengan tanda hubung biasa agar tidak bermasalah
   - B. menambahkan atribut `lang="en"` pada elemen `html`
   - C. memindahkan tanda "—" dari paragraf ke elemen `title`
   - D. menambahkan `<meta charset="utf-8">` di dalam `head` dan menyimpan file dalam pengodean UTF-8

11. Perhatikan potongan dokumen berikut.

```html
<body>
  <h1>Tokosaya</h1>
  <h2>Produk Unggulan</h2>
  <h4>Keyboard Mekanis KX-210</h4>
</body>
```

Perbaikan yang paling tepat untuk potongan tersebut sesuai konvensi struktur dokumen adalah...
   - A. mengubah `h4` menjadi `h3` agar level heading tidak melompat dari `h2`
   - B. mengubah `h2` menjadi `h1` agar dua judul teratas setingkat
   - C. mengubah `h1` menjadi `h3` agar seluruh judul setingkat
   - D. menghapus `h2` karena satu halaman hanya boleh memiliki satu heading

12. Halaman `tokosaya-css/index.html` memuat link `<a href="katalog.html">Lihat Katalog</a>`, tetapi saat diklik browser menampilkan pesan file tidak ditemukan. Penyebab yang paling mungkin adalah...
   - A. tag `a` tidak boleh dipakai sebelum CSS diajarkan
   - B. browser membutuhkan JavaScript untuk membuka link antarhalaman
   - C. file `katalog.html` belum dibuat di folder yang sama atau nama file pada `href` tidak cocok
   - D. link harus selalu memakai alamat lengkap beserta domain dan protokol

13. Rancangan kartu produk Keyboard Mekanis KX-210 menetapkan lencana Best Seller berwarna amber dengan teks gelap, kartu putih bersudut membulat, dan harga berwarna indigo. Sesuai alur *design → code*, langkah kerja yang paling tepat adalah...
   - A. langsung menulis aturan CSS warna dan bentuk tanpa membaca rancangan, lalu menyesuaikan HTML belakangan
   - B. menyusun struktur kartu dengan HTML (nama produk, kategori, harga, lencana), lalu menata warna dan bentuknya dengan CSS mengikuti rancangan
   - C. memasang CSS framework lebih dulu agar semua keputusan warna kartu langsung diambil alih komponen siap pakai
   - D. menyalin kartu ke setiap halaman dengan gaya masing-masing agar tampilannya lebih bervariasi

14. Klien Tokosaya melapor, "Tombolnya hilang saat dibuka di HP" dan "Tulisan menabrak logo". Langkah pemeriksaan pertama yang paling tepat berdasarkan bab ini adalah...
   - A. mengganti logo dengan format JPEG berukuran besar agar lebih terlihat
   - B. menambahkan JavaScript supaya tombol muncul kembali di layar kecil
   - C. memeriksa apakah elemennya masih ada di struktur lewat panel Elements, lalu memeriksa lebar layar yang digunakan lewat device toolbar
   - D. mengganti domain dan hosting karena halaman mungkin dipasang di server yang salah

15. Kamu memulai latihan baru dan ingin menata folder sesuai konvensi buku ini. Struktur yang paling tepat adalah...
   - A. satu folder utama berisi `index.html`, subfolder `css/` berisi satu `style.css` bersama, dan subfolder `img/` berisi gambar bernama kebab-case seperti `foto-profil.png`
   - B. satu folder "Profil Kelas" berisi `Halaman1.html`, `Style.CSS`, dan `Foto Profil.jpg` pada level yang sama
   - C. folder `profil-kelas/` berisi `utama.txt` dan dua file CSS terpisah, satu untuk setiap halaman
   - D. satu file `gabungan.html` yang memuat seluruh konten agar tidak perlu membuat subfolder
