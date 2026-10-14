# Soal Essay — Bab 05: CSS Box Model dan Layout

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 5 soal essay · tingkat kesulitan campuran (C2–C5)
> Poin jawaban + bobot skor: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-essay.md](../soal-essay.md)

---

**Essay (5 soal)**

1. Bab ini membedakan peran padding dan margin: "padding adalah bagian dari komponen, margin adalah jarak antar-komponen". Jelaskan maksud pernyataan tersebut, lalu sebutkan dua konsekuensi teknisnya — satu terkait warna latar elemen dan satu terkait perilaku margin vertikal dua elemen block yang bertetangga.

2. Sebuah panel ditulis dengan mode bawaan `content-box`.

```css
.panel {
  width: 240px;
  padding: 20px;
  border: 2px solid #E2E8F0;
}
```

a. Hitung lebar kotak panel yang diamati di layar, baris per baris. b. Kamu lalu mengaktifkan `box-sizing: border-box` secara global dan ingin lebar visual panel tidak berubah. Berapa nilai `width` yang harus ditulis, dan berapa lebar area kontennya sekarang? c. Jelaskan mengapa sebuah proyek disarankan hanya memakai satu mode penghitungan.

3. Dua cacat muncul bersamaan pada kartu produk Tokosaya: (a) badge "Best Seller" terlempar ke pojok kanan atas halaman, bukan ke pojok gambar; (b) kartu ketiga meluber melewati kontainer sehingga muncul bilah gulir horizontal. Analisis kedua cacat tersebut sebagai dua akar masalah yang berbeda — sebutkan properti/kondisi penyebabnya — lalu tuliskan perbaikan untuk masing-masing.

4. Seorang rekan menulis CSS berikut untuk link navigasi di dalam daftar horizontal.

```css
.nav-link {
  width: 160px;
  height: 44px;
  padding: 8px 16px;
  background-color: #4F46E5;
}
```

Link tetap setipis teksnya dan tingginya tidak berubah. a. Jelaskan penyebabnya. b. Bandingkan pilihan `display: inline-block` dan `display: block` untuk link itu di dalam `<li>` pada daftar navigasi horizontal. c. Kaitkan pilihanmu dengan kriteria WCAG 2.2 *Target Size (Minimum)*.

5. Tim desain mengirim tiga keputusan jarak untuk halaman katalog: (a) jarak antarkartu 18 px, (b) jarak judul ke deskripsi di dalam kartu 12 px, (c) jarak antarseksi 50 px. Rancang revisi ketiga keputusan itu memakai skala jarak 8/16/24/32/48/64 milik proyek Tokosaya. Untuk setiap kasus, tentukan nilai yang dipilih, langkah skalanya, serta apakah jarak itu sebaiknya diwujudkan sebagai padding atau margin — beserta alasan tiap keputusan.
