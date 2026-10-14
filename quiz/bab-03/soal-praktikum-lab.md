# Soal Praktikum Lab — Bab 03: Dasar-Dasar CSS

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 10 soal praktikum · estimasi 20–40 menit per soal
> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)

---

**Praktikum Lab (10 soal)**

### Lab 1 — Halaman promo kecil dengan CSS eksternal
**Konteks:** Tim Tokosaya ingin membuat halaman kampanye "Promo Akhir Bulan" yang berdiri sendiri, tanpa menumpuk gaya di dalam HTML. Semua keputusan visual harus tinggal di satu berkas gaya eksternal.

**Tugas:**
1. Buat folder `lab-3/lab-1/` berisi `promo.html` dan `css/style.css`, lalu hubungkan keduanya lewat `<link rel="stylesheet" href="css/style.css">` di dalam `head`.
2. Isi halaman dengan satu `h1` "Promo Akhir Bulan", satu paragraf pembuka ber-*class* `promo-lead`, dan satu daftar tiga butir keuntungan ber-*class* `promo-list`.
3. Tulis CSS yang memuat: aturan `body` (font sistem, `color: #334155`, `background-color: #F8FAFC`), aturan `h1` (`color: #1E293B`), aturan `.promo-lead` (`font-weight: 600`), dan satu utilitas `.text-center`.
4. Tulis satu aturan *grouping* yang membuat `h1` dan `h2` berbagi warna yang sama, lalu buktikan aturan itu bekerja.
5. Pastikan tidak ada satu pun atribut `style` di `promo.html`.

**Bukti yang dikumpulkan:** berkas `promo.html` dan `css/style.css`, tangkapan layar halaman, serta catatan tiga baris berisi selector yang dipakai dan alasan pemilihannya.

### Lab 2 — Membaca panel Styles untuk memetakan pemenang kaskade
**Konteks:** Seorang anggota tim menyerahkan berkas gaya "berkonflik" berisi beberapa aturan yang saling menimpa pada paragraf yang sama. Tugasmu melaporkan aturan mana yang menang, bukan menebak dari tampilan saja.

**Tugas:**
1. Buat `lab-3/lab-2/konflik.html` + `css/style.css` berisi empat paragraf dengan kombinasi berbeda: hanya selector elemen, elemen + class, class + ID, dan satu paragraf yang juga punya atribut `style` inline (khusus demonstrasi).
2. Sebelum membuka browser, hitung dan tuliskan nilai *specificity* setiap aturan pada sebuah tabel prediksi.
3. Buka halaman di Chrome, klik setiap paragraf, lalu buka panel Styles di DevTools. Catat aturan mana yang berlaku dan aturan mana yang dicoret browser.
4. Bandingkan tabel prediksimu dengan hasil DevTools; tandai bila ada perbedaan dan jelaskan sebabnya.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tabel prediksi vs hasil observasi, dan minimal dua tangkapan layar panel Styles pada elemen berbeda.

### Lab 3 — Memperbaiki gaya yang tidak termuat
**Konteks:** Seorang rekan memindahkan `style.css` ke dalam folder `css/`, tetapi tautan di HTML masih menunjuk `styles/style.css`. Ia juga mengetik `class="sitenav"` pada navigasi, padahal aturan CSS-nya bernama `.site-nav`. Akibatnya halaman tampil hampir tanpa gaya.

**Tugas:**
1. Buat ulang kondisi rusak tersebut di `lab-3/lab-3/index.html` dan `lab-3/lab-3/css/style.css` (halaman minimal: `header`, `nav` berisi tiga link, dan satu paragraf).
2. Buka DevTools, buka tab Console, dan catat pesan galat yang muncul beserta URL berkas yang diminta browser.
3. Perbaiki atribut `href` hingga cocok dengan struktur folder, lalu seragamkan penulisan nama class antara HTML dan CSS.
4. Muat ulang halaman dan pastikan gaya (warna link, latar header) sudah berlaku.

**Bukti yang dikumpulkan:** berkas sebelum dan sesudah perbaikan, tangkapan layar Console sebelum dan sesudah, serta catatan akar masalah dalam tiga baris.

### Lab 4 — Refactor gaya inline menjadi CSS eksternal
**Konteks:** Papan pengumuman kelas berikut dibagikan antar-mahasiswa lewat salinan berkas, sehingga setiap perubahan warna harus disunting di banyak tempat.

**Tugas:**
1. Salin kondisi awal berikut ke `lab-3/lab-4/papan.html`, lalu buat berkas `css/style.css` baru untuk menampung gayanya.

```html
<header style="background-color: #1E293B; padding: 16px; color: #FFFFFF;">
  <h1 style="font-size: 28px; margin: 0; color: #FFFFFF;">Papan Pengumuman Kelas</h1>
</header>
<main style="padding: 24px; font-family: Arial, sans-serif;">
  <h2 style="color: #1E293B;">Jadwal Respons Tugas</h2>
  <p style="color: #334155;">Tugas dikumpulkan paling lambat pukul 21.00 WIB.</p>
  <ul style="color: #334155; line-height: 1.7;">
    <li>Senin: laporan praktikum</li>
    <li style="color: #DC2626;">Rabu: batas revisi</li>
    <li>Jumat: kuis singkat</li>
  </ul>
</main>
```

2. Kelompokkan nilai gaya yang berulang, beri nama *class* berbasis peran dengan pola `blok-elemen`, lalu pindahkan seluruh nilainya ke `css/style.css`.
3. Hapus setiap atribut `style` pada HTML dan hubungkan berkas gaya dengan tag `<link>`.
4. Buka DevTools dan pastikan penampakan halaman setelah refactor sama seperti sebelum refactor (warna, jarak, dan ukuran tetap).

**Bukti yang dikumpulkan:** `papan.html` bersih tanpa atribut `style`, `css/style.css`, tabel pemetaan "nilai inline → nama class", dan tangkapan layar halaman hasil refactor.

### Lab 5 — Uji aksesibilitas fokus keyboard
**Konteks:** Tokosaya ingin memastikan navigasinya bisa dipakai tanpa mouse. Beberapa link masih memakai gaya bawaan browser, sementara satu tombol pernah dibersihkan outline-nya oleh rekan tim.

**Tugas:**
1. Buat `lab-3/lab-5/fokus.html` berisi navigasi dengan empat link: Beranda, Katalog, Tentang, Kontak.
2. Buka halaman, tekan tombol Tab berulang kali, dan catat elemen mana yang menerima fokus serta apakah indikatornya terlihat jelas.
3. Tambahkan aturan `a:focus { outline: 2px solid #4F46E5; outline-offset: 2px; }` pada berkas gaya, lalu uji ulang dengan Tab.
4. Buat versi kedua yang menambahkan `a:focus { outline: none; }` pada satu link, bandingkan hasilnya, dan jelaskan mengapa versi itu berbahaya.
5. Tulis tiga kalimat: apa fungsi `:focus` bagi pengguna keyboard dan mengapa gaya fokus tidak boleh dihapus demi alasan estetika.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tangkapan layar keadaan fokus yang terlihat dan yang dihapus, serta kesimpulan tertulis.

### Lab 6 — Tabel dan daftar interaktif dengan pseudo-class
**Konteks:** Halaman "Jadwal Pengiriman" Tokosaya menampilkan tabel jadwal kurir dan daftar catatan pengiriman. Semua penanda visual harus dibuat murni CSS, tanpa atribut *class* tambahan pada setiap baris.

**Tugas:**
1. Buat `lab-3/lab-6/jadwal.html` + `css/style.css` berisi tabel jadwal dengan `thead` (kolom Hari, Jam Kirim) dan `tbody` berisi lima baris data.
2. Beri latar `#F8FAFC` pada baris genap `tbody` memakai `:nth-child()`, dan beri garis pemisah `1px solid #E2E8F0` pada setiap sel.
3. Tambahkan daftar `ul` berisi tiga catatan pengiriman: butir pertama dibuat tebal (`:first-child`) dan butir terakhir diberi warna `#DC2626` (`:last-child`).
4. Muat ulang halaman dan pastikan penambahan atau penghapusan satu baris tabel tidak merusak pola warna berselang-seling.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tangkapan layar tabel, dan satu paragraf singkat yang menjelaskan mengapa cara ini lebih tahan perubahan dibandingkan memberi *class* manual pada baris ganjil.

### Lab 7 — Menyederhanakan selector yang terlalu spesifik
**Konteks:** Berkas gaya lama sebuah halaman katalog memakai rantai selector panjang yang sulit dipakai ulang dan sulit ditimpa ketika desain berubah.

**Tugas:**
1. Buat `lab-3/lab-7/katalog.html` + `css/style.css` dengan struktur sederhana: satu `main` ber-*id* `konten-utama`, satu daftar `ul.daftar-produk`, dan tiga link ber-*class* `tautan-produk`.
2. Tulis aturan awal yang berlebihan spesifik, lalu hitung *specificity*-nya.

```css
#konten-utama .daftar-produk li a.tautan-produk {
  color: #4F46E5;
  text-decoration: none;
}
```

3. Sederhanakan selector tersebut menjadi bentuk paling ringkas yang tetap menyasar elemen yang sama, lalu tuliskan nilai *specificity* sebelum dan sesudah.
4. Verifikasi di DevTools bahwa penampakan halaman tidak berubah setelah penyederhanaan.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tabel perbandingan selector lama dan baru beserta nilai *specificity*, serta tangkapan layar panel Styles sesudah refactor.

### Lab 8 — Konversi satuan: dari piksel ke rem dan persen
**Konteks:** Sebuah halaman laporan internal memakai satuan `px` untuk semua ukuran huruf dan lebar blok konten. Ketika pengguna memperbesar ukuran font bawaan browser, teksnya tidak ikut membesar.

**Tugas:**
1. Buat `lab-3/lab-8/laporan.html` + `css/style.css` dengan gaya awal serba `px`: `h1 { font-size: 36px; }`, `h2 { font-size: 24px; }`, `p { font-size: 16px; }`, dan `.konten { width: 960px; }`.
2. Konversi seluruh ukuran huruf ke `rem` dengan basis 16px, dan ubah `.konten` menjadi lebar berbasis persen agar mengikuti lebar kotak induknya.
3. Buka pengaturan font browser (Chrome: Settings → Appearance → Font size) dan naikkan ukuran font dasar menjadi 20px. Muat ulang halaman dan catat perubahan yang terjadi pada versi `rem`.
4. Tulis kesimpulan: bagian mana yang ikut menskala, bagian mana yang tetap, dan kapan satuan `px` masih lebih tepat dipakai.

**Bukti yang dikumpulkan:** berkas sebelum dan sesudah konversi, tangkapan layar perbandingan pada ukuran font dasar 16px dan 20px, serta kesimpulan tertulis.

### Lab 9 — Merapikan organisasi berkas style.css
**Konteks:** Berkas gaya hasil kerja berkelompok tumbuh tanpa urutan: aturan footer berada di paling atas, gaya heading tercecer, dan tidak ada komentar pemisah. Anggota tim baru kesulitan menemukan bagian yang ingin disunting.

**Tugas:**
1. Buat `lab-3/lab-9/rapi.html` + `css/style.css` yang memuat dua belas aturan acak berikut (boleh menyusun kombinasi nilainya sendiri, asal cakupannya sama): aturan `body`, `h1`–`h3`, `a`, `a:hover`, `.site-header`, `.site-nav a`, `.hero`, `.hero-title`, `.btn-cta`, `.site-footer`, dan utilitas `.text-center`.
2. Susun ulang berkas mengikuti pola organisasi bab ini: komentar banner kepala berkas, dasar halaman, tipografi dan link, header dan navigasi, bagian utama halaman berurutan, footer, lalu utilitas.
3. Tambahkan komentar pemisah tiap bagian dengan gaya yang konsisten (`/* ---------- Nama bagian ---------- */`).
4. Pastikan penampakan halaman tidak berubah setelah penyusunan ulang, lalu serahkan "peta bagian" berisi urutan bagian dan nomor barisnya.

**Bukti yang dikumpulkan:** `css/style.css` hasil susun ulang, peta bagian berkas, dan tangkapan layar halaman sebelum vs sesudah.

### Lab 10 — Prediksi dan verifikasi kaskade
**Konteks:** Sebelum menyerahkan berkas gaya ke tim, kamu ingin memastikan pemahamanmu tentang kaskade benar-benar akurat — bukan sekadar merasa yakin.

**Tugas:**
1. Buat `lab-3/lab-10/kaskade.html` + `css/style.css` berisi empat paragraf dengan konflik bertingkat: (a) selector elemen vs *class*; (b) *class* vs kombinasi elemen + *class*; (c) ID vs dua *class*; (d) dua aturan dengan *specificity* setara yang berbeda urutan penulisan.
2. Tulis tabel prediksi: untuk setiap paragraf, catat warna yang kamu perkirakan menang beserta angka *specificity* pemenangnya.
3. Jalankan halaman di Chrome dan periksa setiap paragraf memakai panel Styles DevTools.
4. Laporkan setiap prediksi yang meleset, jelaskan sebabnya dengan istilah kaskade (*specificity* atau urutan penulisan), lalu perbaiki tabel prediksimu menjadi tabel hasil akhir.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tabel prediksi dan tabel hasil akhir, serta satu paragraf refleksi tentang bagian kaskade yang tadinya paling mudah disalahpahami.
