# Soal Pilihan Ganda — Bab 07: CSS Grid dan Responsive Web Design

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)
> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)

---

**Pilihan Ganda (15 soal)**

1. Dalam istilah CSS Grid, **grid track** adalah ....
   - A. perpotongan satu kolom dan satu baris tempat satu butir grid diletakkan
   - B. jalur atau lintasan kolom maupun baris di dalam kerangka grid
   - C. gabungan beberapa sel berbentuk persegi yang bisa diberi nama
   - D. jarak antar jalur grid yang diatur oleh properti gap

2. Pola `repeat(auto-fit, minmax(220px, 1fr))` pada wadah galeri berperilaku ....
   - A. browser menaruh kolom sebanyak yang muat dengan lebar minimal 220 px, lalu menambah kolom begitu ruang melebar, tanpa satu pun media query
   - B. browser mematok satu kolom selebar 220 px pada semua ukuran layar
   - C. browser membatasi lebar setiap kartu maksimal 220 px sehingga kartu makin sempit di monitor besar
   - D. browser membentuk 220 kolom yang masing-masing menerima satu porsi ruang sisa

3. Dua aturan penulisan `grid-template-areas` yang wajib dipatuhi agar browser berhasil membentuk denah adalah ....
   - A. setiap baris kata wajib diapit tanda petik, sedangkan jumlah kolom antar baris boleh berbeda
   - B. tanda petik hanya diperlukan pada baris pertama denah, sedangkan jumlah kolom wajib sama
   - C. setiap baris kata wajib dipisahkan tanda koma, sedangkan jumlah kolom wajib sama
   - D. setiap baris kata wajib diapit tanda petik dan jumlah kolom pada setiap baris wajib sama

4. Dalam desain web responsif, **breakpoint** paling tepat dipahami sebagai ....
   - A. daftar merek dan tipe perangkat yang paling banyak dipakai pengguna tahun ini
   - B. jumlah maksimum media query yang boleh ditulis pada satu file CSS
   - C. nilai lebar viewport tempat serangkaian gaya berubah agar halaman tetap layak dibaca
   - D. ukuran tetap 992 px yang wajib dipakai seluruh halaman dashboard

5. Sebuah wadah memakai `grid-template-columns: 240px 1fr 2fr;`. Pernyataan yang paling tepat tentang pembagian ruangnya adalah ....
   - A. kolom pertama selebar tetap 240 px, sedangkan ruang sisa dibagi ke kolom kedua dan ketiga dengan porsi 1 : 2
   - B. kolom pertama 240 px, kolom kedua 1 px, dan kolom ketiga 2 px
   - C. ketiga kolom sama lebar karena template memuat tiga nilai
   - D. kolom kedua dan ketiga masing-masing menerima 240 px sehingga lebarnya identik

6. Pada sebuah kartu dashboard tertulis `grid-column: 2 / -1;`. Pernyataan yang tepat adalah ....
   - A. kartu hanya menempati kolom kedua karena garis akhir bernilai negatif tidak dihitung
   - B. kartu mengulang isinya mulai kolom kedua sampai kolom terakhir
   - C. kartu dibatasi dua kolom berturut-turut mulai garis 2
   - D. kartu membentang dari garis kolom 2 sampai garis paling ujung, sehingga praktis ketika jumlah kolom berubah antar perangkat

7. Perhatikan blok CSS gambar katalog berikut.

```css
.katalog-grid img {
  width: 100%;
  height: auto;
  display: block;
}
```

Penjelasan yang paling tepat untuk blok di atas adalah ....
   - A. gambar dipatok pada lebar aslinya dan tingginya mengikuti wadah sehingga tetap terpotong
   - B. gambar tidak pernah melebihi lebar wadah, proporsinya terjaga, dan celah kecil di bawah gambar hilang karena perilaku inline-nya dihilangkan
   - C. gambar selalu melebar 100% dari viewport, bukan dari wadahnya, sehingga halaman ikut menggulir
   - D. gambar kehilangan proporsi karena `height: auto` menyesuaikan tinggi baris teks di sekitarnya

8. Perhatikan blok CSS berikut.

```css
.katalog-judul { font-size: clamp(1rem, 0.5rem + 2vw, 2rem); }
```

Kalau 1rem dianggap sama dengan 16 px, ukuran huruf yang benar-benar terpakai pada viewport 800 px adalah ....
   - A. 8 px, nilai dari suku 0.5rem
   - B. 16 px, nilai argumen minimum
   - C. 24 px, hasil hitungan suku tengah yang masih berada di antara kedua batas
   - D. 32 px, nilai argumen maksimum

9. Kartu statistik pada `admin.html` tetap menumpuk satu kolom walaupun jendela browser sudah dilebarkan melewati 576 px. Gaya dasar sudah memuat `display: grid`, dan blok media query-nya ditulis seperti berikut.

```css
@media (min-width: 576) {
  .stat-kartu { grid-template-columns: repeat(2, 1fr); }
}
```

Penyebab paling mungkin beserta perbaikannya adalah ....
   - A. satuan `px` hilang pada nilai kueri sehingga kondisi tidak pernah terpenuhi; perbaiki menjadi `min-width: 576px`
   - B. fungsi `repeat()` tidak boleh dipakai di dalam media query sehingga aturannya diabaikan; ganti menjadi `1fr 1fr`
   - C. kelas `.stat-kartu` harus dideklarasikan ulang `display: grid` di dalam blok media query; tambahkan baris itu
   - D. token warna belum termuat sehingga browser mengabaikan seluruh aturan grid; pindahkan blok `:root` ke `admin.css`

10. Pada 1200 px, `.stat-kartu` memakai `grid-template-columns: repeat(4, 1fr)`. Pemilik Tokosaya lalu meminta dua kartu ringkasan tambahan sehingga totalnya enam kartu. Susunan yang terbentuk pada 1200 px adalah ....
   - A. keenam kartu menumpuk vertikal karena jumlah kartu melampaui jumlah kolom template
   - B. grid gagal dibentuk dan seluruh kartu keluar dari wadah
   - C. keenam kartu dipaksa muat dalam satu baris dengan lebar yang mengecil tidak beraturan
   - D. baris pertama berisi empat kartu dan dua kartu sisanya mengalir ke baris kedua mengikuti penempatan otomatis

11. Pola kode yang **paling sesuai** dengan strategi mobile-first untuk menaikkan panel ringkasan dari satu kolom menjadi tiga kolom mulai 992 px adalah ....
   - A. `.panel-ringkas { grid-template-columns: repeat(3, 1fr); }` lalu `@media (max-width: 991px) { .panel-ringkas { grid-template-columns: 1fr; } }`
   - B. `.panel-ringkas { grid-template-columns: 1fr; }` lalu `@media (min-width: 992px) { .panel-ringkas { grid-template-columns: repeat(3, 1fr); } }`
   - C. `@media (min-width: 992px) { .panel-ringkas { grid-template-columns: 1fr; } }` lalu `.panel-ringkas { grid-template-columns: repeat(3, 1fr); }`
   - D. `.panel-ringkas { grid-template-columns: 1fr; }` lalu `@media (max-width: 992px) { .panel-ringkas { grid-template-columns: repeat(3, 1fr); } }`

12. Diukur pada 375 px, halaman `admin.html` menampilkan pengguliran horizontal pada `<body>` sehingga seluruh antarmuka tergeser. Tabel sudah dibungkus `.tabel-scroll` yang memuat `overflow-x: auto`, dan tabel memakai `min-width: 640px`. Langkah diagnosis paling tepat untuk sisa masalahnya adalah ....
   - A. menambahkan `overflow-x: hidden` pada `body` agar gejalanya hilang, lalu melanjutkan pekerjaan
   - B. menghapus `.tabel-scroll` lalu menguji kembali halaman tanpa tabel
   - C. memakai device toolbar pada 375 px, mengenali elemen yang melebar dari viewport saat halaman digulir, lalu memeriksa lebar terhitung elemen itu di panel Elements
   - D. mengganti seluruh satuan px pada file CSS menjadi persen agar tidak ada elemen yang melebihi layar

13. Pemilik Tokosaya meminta katalog produknya persis dua kolom di tablet dan tiga kolom di desktop, tanpa penambahan atau pengurangan kolom ketika jendela dilebarkan. Pola yang paling tepat dipakai adalah ....
   - A. `repeat(auto-fit, minmax(220px, 1fr))` karena jumlah kolom menyesuaikan ruang secara otomatis
   - B. media query eksplisit `min-width` dengan `repeat(2, 1fr)` di 768 px dan `repeat(3, 1fr)` di 992 px
   - C. `grid-template-columns: repeat(3, 220px)` pada gaya dasar agar selalu tiga kolom di semua layar
   - D. `grid-auto-flow: column` pada wadah agar seluruh kartu mengalir ke samping dalam satu baris

14. Sebuah halaman dashboard harus dipastikan bebas dari *layout trap*. Rangkaian pengujian yang paling sesuai dengan praktik bab ini adalah ....
   - A. menguji pada tiga merek ponsel berbeda saja agar hasilnya nyata
   - B. menguji satu lebar saja, yaitu 375 px, karena mayoritas pengguna memakai ponsel
   - C. menguji pada 1200 px dan memastikan tampilan desktop rapi karena halaman dibuka di lab
   - D. menyeret lebar dari 320 px sampai 1200 px pada mode Responsive device toolbar untuk menemukan titik layout rusak, lalu memeriksa 375, 576, 768, 992, dan 1200 px

15. Seorang mahasiswa menulis empat blok media query ber-*specificity* setara dengan urutan 992 px, 576 px, 1200 px, lalu 768 px; semuanya memakai `min-width` dan menyetel properti yang sama. Pada viewport 1300 px, hasil yang terlihat adalah ....
   - A. untuk properti yang muncul di lebih dari satu blok, nilai dari blok terakhir (768 px) yang menang, karena keempat blok sama-sama berlaku dan kaskade memilih aturan yang ditulis paling akhir
   - B. nilai dari blok 1200 px yang menang karena angka ambangnya paling besar
   - C. nilai dari blok 992 px yang menang karena ditulis paling awal dan berlaku sebagai fondasi
   - D. browser menolak seluruh blok karena urutan media query tidak menaik sehingga halaman kembali ke gaya dasar
