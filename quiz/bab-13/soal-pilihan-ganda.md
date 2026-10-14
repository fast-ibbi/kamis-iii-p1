# Soal Pilihan Ganda — Bab 13: Website Responsif dan Accessibility

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)
> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)

---

**Pilihan Ganda (15 soal)**

1. Fungsi `<meta name="viewport" content="width=device-width, initial-scale=1">` pada halaman Tokosaya adalah…
   - A. mengunci lebar halaman pada 768 piksel di semua perangkat
   - B. membuat halaman mengikuti lebar perangkat sehingga media query bekerja sesuai rencana
   - C. memuat berkas CSS Bootstrap 5.3.3 dari CDN
   - D. mematikan penggeser horizontal secara otomatis di semua halaman

2. Subset breakpoint yang diputuskan sebagai strategi proyek Tokosaya adalah…
   - A. 375 px, 414 px, dan 768 px mengikuti merek HP yang populer
   - B. sm 576 px, md 768 px, lg 992 px, dan xl 1200 px
   - C. base (di bawah 768 px), md 768 px, dan lg 992 px
   - D. 578 px, 693 px, dan 941 px sesuai hasil pengujian lapangan

3. Elemen `<picture>` berisi beberapa `<source media="...">` dipakai ketika…
   - A. gambar perlu dianimasikan saat halaman pertama dibuka
   - B. setiap variasi gambar berbagi komposisi yang sama persis
   - C. gambar ingin dimuat lebih lambat daripada gambar biasa
   - D. komposisi atau rasio gambar memang berubah antar lebar layar, sedangkan variasi resolusi dari konten yang sama cukup memakai `srcset`

4. Pseudo-class `:focus-visible` pada aturan fokus Tokosaya berarti…
   - A. cincin fokus tampil ketika input keyboard dipakai, sementara klik mouse tetap terasa rapi
   - B. cincin fokus dihapus pada semua kondisi supaya tampilan bersih
   - C. cincin fokus tampil permanen pada setiap elemen interaktif
   - D. warna latar elemen berubah setiap kali elemen diklik

5. Gambar hero Tokosaya memakai `srcset="img/hero-480.svg 480w, img/hero-1200.svg 1200w"` dengan pasangan `sizes="(min-width: 992px) 50vw, 92vw"`. Tugas atribut `sizes` adalah…
   - A. menyebut ukuran berkas gambar dalam kilobita
   - B. mengunci tinggi gambar agar tidak pernah berubah
   - C. menandai gambar sebagai elemen dekoratif
   - D. memberi tahu browser lebar area yang akan ditempati gambar pada kondisi layar berbeda

6. Atribut `width` dan `height` pada `<img>` produk Tokosaya berguna karena…
   - A. menentukan ukuran akhir gambar di semua lebar layar
   - B. mengompres berkas gambar sehingga lebih ringan
   - C. mencadangkan ruang sejak awal sehingga layout tidak "melompat" saat gambar selesai dimuat
   - D. menggantikan kewajiban menulis `alt`

7. Pada nama produk panjang tanpa spasi, kombinasi `overflow-wrap: break-word` dan `min-width: 0` pada anak kontainer flex bekerja untuk…
   - A. mempercepat pemuatan judul produk
   - B. menyembunyikan teks yang terlalu panjang di layar sempit
   - C. mengatur urutan tab pada kartu produk
   - D. mencegah kata panjang meluber dan memunculkan penggeser horizontal di seluruh halaman

8. Utilitas Bootstrap `d-none d-md-block` pada sebuah elemen tambahan berarti…
   - A. elemen disembunyikan di bawah 768 px dan tampil mulai 768 px ke atas
   - B. elemen tampil hanya di bawah 768 px
   - C. elemen disembunyikan pada semua ukuran layar
   - D. elemen hanya tampil ketika halaman dicetak

9. Perhatikan potongan CSS berikut yang dipakai untuk keterangan produk di atas latar putih.

```css
.teks-lembut { color: #94A3B8; }
```

   Diagnosis dan perbaikan yang paling tepat adalah…
   - A. kontrasnya terlalu tinggi sehingga menyilaukan; ganti ke abu yang lebih gelap
   - B. tidak ada masalah; keterangan memang harus tampak pucat agar hierarkinya lemah
   - C. rasio kontrasnya di bawah ambang AA 4,5:1 sehingga gagal; perbaiki di level token dengan `--clr-body` lalu verifikasi lewat color picker DevTools
   - D. nilai heksa cukup diganti menjadi nama warna CSS seperti `lightgray`

10. Fungsi `clamp()` lebih disarankan daripada tiga media query terpisah untuk ukuran judul karena…
    - A. `clamp()` membuat berkas CSS lebih kecil sehingga halaman lebih cepat dibuka
    - B. ukuran mengalir dan berhenti di batas minimum serta maksimum, tanpa loncatan mendadak di sekitar breakpoint
    - C. media query tidak mampu mengubah properti `font-size`
    - D. `clamp()` hanya bekerja pada kelas-kelas Bootstrap

11. Perhatikan potongan form berikut.

```html
<p>Nama lengkap</p>
<input type="text" class="form-control" id="nama" name="nama">
```

    Masalah aksesibilitasnya serta perbaikan yang tepat adalah…
    - A. input perlu atribut `placeholder` yang isinya sama dengan teks di atasnya
    - B. `type="text"` harus diganti `type="search"` supaya terbaca pembaca layar
    - C. tidak ada masalah karena input sudah punya `id`
    - D. teks "Nama lengkap" tidak terhubung sebagai label sehingga pembaca layar membacakan kolom tanpa nama; ganti menjadi `<label for="nama">Nama lengkap</label>`

12. Perhatikan link ikon keranjang pada header Tokosaya.

```html
<a href="checkout.html"><i class="bi bi-cart3 fs-4"></i></a>
```

    Perbaikan aksesibilitas yang paling tepat adalah…
    - A. tambahkan `aria-label="Buka keranjang belanja"` pada link dan `aria-hidden="true"` pada ikon dekoratif
    - B. tambahkan atribut `alt` pada elemen ikon
    - C. tambahkan `tabindex="-1"` pada link supaya tidak membingungkan pengguna
    - D. tambahkan atribut `title` pada ikon saja tanpa mengubah link

13. Tentang skor Lighthouse Accessibility pada proyek Tokosaya, pernyataan yang paling tepat adalah…
    - A. skor tinggi bukan sertifikat; temuan seperti urutan heading yang janggal dalam konteks bisnis tetap butuh penilaian manusia dan verifikasi manual di halaman nyata
    - B. skor 100 berarti halaman sudah bebas dari semua masalah aksesibilitas
    - C. Lighthouse menggantikan kebutuhan menguji Tab di halaman nyata
    - D. skor rendah selalu berarti markup HTML salah

14. Audit Portal Layanan Warga Kota Arunika menemukan tiga hal: (1) gambar papan pengumuman tanpa `alt`, (2) tabel syarat dokumen lebar tetap yang memaksa penggeser horizontal, (3) kontras lemah pada area pemberitahuan. Perbaikan yang paling tepat didahulukan adalah…
    - A. tabel, karena perbaikannya paling rumit sehingga paling lama
    - B. alt pada papan pengumuman, karena informasi intinya ikut hilang sehingga layanan tidak terbaca oleh sebagian pengguna
    - C. kontras, karena perbaikannya paling cepat selesai
    - D. ketiganya diacak saja karena dampaknya dianggap sama

15. Urutan pola kerja audit yang dilatih pada bab ini adalah…
    - A. perbaiki semua kategori sekaligus, lalu jalankan Lighthouse sekali di akhir
    - B. uji responsif manual per breakpoint, jalankan Lighthouse Accessibility, catat temuan di tabel, perbaiki di CSS/HTML, lalu jalankan ulang dan bandingkan hasil "sebelum" dengan "sesudah"
    - C. cukup percaya pada skor otomatis tanpa uji manual di halaman nyata
    - D. jalankan Lighthouse lebih dulu, hapus cincin fokus, lalu nilai ulang halaman
