# Soal Pilihan Ganda — Bab 05: CSS Box Model dan Layout

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)
> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)

---

**Pilihan Ganda (15 soal)**

1. Ruang di antara konten dan garis tepi elemen, yang ikut memakai warna latar serta memperluas area sentuh elemen, disebut ...
   - A. margin
   - B. border
   - C. gap
   - D. padding

2. Dua elemen block bertetangga: elemen atas memakai `margin-bottom: 24px`, elemen bawah memakai `margin-top: 40px`. Jarak vertikal yang tampil di layar adalah ...
   - A. 40 px, karena margin vertikal dua blok bertetangga runtuh ke nilai terbesar
   - B. 64 px, karena kedua margin dijumlahkan
   - C. 24 px, karena margin atas selalu diabaikan
   - D. 16 px, karena yang dipakai adalah selisih keduanya

3. Kelompok elemen yang secara bawaan (tanpa CSS tambahan) berperilaku `block` adalah ...
   - A. p, div, ul, dan h1–h6
   - B. span, a, dan strong
   - C. img dan input, karena keduanya menerima `width` dan `height`
   - D. em, b, dan i

4. Perhatikan deklarasi berikut.

```css
.panel {
  width: 320px;
  padding: 24px;
  border: 4px solid #4F46E5;
  box-sizing: border-box;
}
```

Lebar area konten di dalam panel tersebut adalah ...
   - A. 320 px
   - B. 296 px
   - C. 288 px
   - D. 264 px

5. Pada proyek Tokosaya, wadah deret kartu `.daftar-produk` diberi `font-size: 0`, sedangkan setiap `.produk-card` diberi `font-size` eksplisit. Tujuan aturan itu adalah ...
   - A. memadatkan teks deskripsi supaya kartu lebih pendek
   - B. menghilangkan celah spasi antarkartu yang berasal dari whitespace antar tag HTML
   - C. menyeragamkan jarak antarkartu menjadi 8 px
   - D. mencegah kartu menyusut ketika layar bertambah sempit

6. Gambar produk diletakkan di dalam `.produk-media` yang mengikuti lengkung `border-radius` kartu, tetapi sudut gambar tetap tampak tajam. Deklarasi yang menambahkan pemotongan agar gambar ikut melengkung adalah ...
   - A. `.produk-media { overflow: hidden; }`
   - B. `.produk-media { display: block; }`
   - C. `.produk-media { z-index: 2; }`
   - D. `.produk-media { max-width: 100%; }`

7. Sebuah kolom sempit harus menampilkan nama berkas `laporan-sistem-akademik-tahun-akademik-2025-2026-final-revisi.pdf`. Supaya kata tunggal yang sangat panjang tidak memaksa panel melebar, properti yang paling tepat adalah ...
   - A. `white-space: nowrap`
   - B. `overflow-wrap: break-word`
   - C. `text-overflow: ellipsis` tanpa properti pendamping
   - D. `overflow: visible`

8. Tombol bantuan pada halaman pengaturan harus tetap terlihat di sudut kanan bawah jendela meskipun halaman digulir jauh ke bawah. Nilai `position` yang tepat untuk tombol itu adalah ...
   - A. `static`
   - B. `relative`
   - C. `absolute`
   - D. `fixed`

9. Header kolom tabel presensi ditulis `position: sticky; top: 0;` dan diberi `background-color` solid. Alasan pemberian latar solid adalah ...
   - A. syarat teknis agar `position: sticky` aktif di browser modern
   - B. agar tinggi baris header tidak ikut bertambah
   - C. agar baris data yang tergulir di belakang header tidak tembus terlihat
   - D. agar `z-index` header otomatis naik satu tingkat

10. Deretan kartu produk tampak "bergerigi": kartu pertama lebih tinggi sehingga tepi atas kartu-kartu berikutnya tidak sejajar. Perbaikan yang sesuai pola proyek adalah ...
   - A. memberi `display: block` pada `.produk-card`
   - B. memberi `overflow: hidden` pada `.daftar-produk`
   - C. memberi `vertical-align: top` pada `.produk-card`
   - D. memberi `font-size: 0` pada `.produk-card`

11. Kamu harus membuat deretan chip kategori yang tetap mengalir dalam baris teks, tetapi menerima padding, latar, dan radius penuh. Karena proyek pada bab ini belum memakai Flexbox, nilai `display` yang paling tepat untuk setiap chip adalah ...
   - A. `block`
   - B. `inline`
   - C. `inline-block`
   - D. `table-cell`

12. Mockup menetapkan jarak antarkartu 30 px, sedangkan proyek Tokosaya memakai skala jarak 8/16/24/32/48/64. Keputusan yang paling sesuai disiplin skala adalah ...
   - A. memakai 32 px, langkah skala terdekat dari 30 px
   - B. memakai 30 px apa adanya supaya sesuai mockup
   - C. memakai 24 px karena selalu dipilih langkah terkecil
   - D. menambahkan langkah 30 px ke daftar token proyek

13. Kriteria WCAG 2.2 *Target Size (Minimum)* (2.5.8) menetapkan ukuran minimal area sasaran yang dapat disentuh sebesar ...
   - A. 16 × 16 px
   - B. 24 × 24 px
   - C. 44 × 44 px
   - D. 48 × 48 px

14. Bandingkan dua cara menyembunyikan elemen: `display: none` dan `visibility: hidden`. Perbedaan perilaku keduanya adalah ...
   - A. keduanya menyembunyikan elemen dari layar dan tetap menyisakan ruang di alur dokumen
   - B. `visibility: hidden` mengeluarkan elemen dari alur dokumen, sedangkan `display: none` hanya menyembunyikannya secara visual
   - C. `display: none` mengeluarkan elemen dari layar dan dari alur dokumen, sedangkan `visibility: hidden` hanya menyembunyikan secara visual sehingga ruangnya tetap ada
   - D. keduanya identik; perbedaannya hanya pada dukungan versi browser

15. Kartu produk Tokosaya harus tetap berukuran 280 px di layar lebar, tetapi tidak boleh memunculkan bilah gulir horizontal saat jendela dipersempit ke 360 px. Deklarasi `.produk-card` yang paling tepat adalah ...
   - A. `width: 280px;` saja
   - B. `width: 280px; max-width: 100%;`
   - C. `width: 100%; min-width: 280px;`
   - D. `min-width: 280px; max-width: 280px;`
