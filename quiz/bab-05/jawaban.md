# Kunci Jawaban & Rubrik — Bab 05: CSS Box Model dan Layout

> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)
> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)

---

### Kunci Pilihan Ganda

1. **D** — Padding adalah ruang dalam elemen: ia ikut memakai warna latar dan memperluas area klik/sentuh; margin justru transparan dan berada di luar border.
2. **A** — Margin vertikal dua elemen block bertetangga *collapse*: yang dipakai adalah nilai terbesar (40 px), bukan hasil penjumlahan 64 px.
3. **A** — p, div, ul, dan h1–h6 berperilaku block (menempati baris sendiri); span, a, strong, em, b, dan i inline; img dan input adalah *replaced element* yang tetap menerima dimensi meski mengalir inline.
4. **D** — Pada `border-box`, angka `width: 320px` menaungi seluruh kotak: kontennya menyusut menjadi 320 − (24×2) − (4×2) = 264 px.
5. **B** — Inline-block memperlakukan spasi/baris baru antar tag HTML sebagai karakter spasi nyata; `font-size: 0` pada wadah menghapus celah itu, lalu ukuran teks dikembalikan pada kartu.
6. **A** — `overflow: hidden` membuat isi anak terpotong mengikuti lengkung tepi induk, sehingga sudut gambar ikut membulat.
7. **B** — `overflow-wrap: break-word` mematahkan kata tunggal yang sangat panjang agar pindah baris tanpa melebarkan panel; opsi A/C justru memotong dan menyembunyikan informasi, sedangkan `overflow: visible` membiarkan konten meluber.
8. **D** — `fixed` menempelkan kotak pada viewport sehingga tetap terlihat meski halaman digulir; `absolute` mengikuti leluhur diposisikan dan `relative` tetap berada di alur dokumen.
9. **C** — Sticky tetap "lengket" di atas baris yang tergulir; tanpa latar solid, tulisan yang lewat di belakangnya akan tembus terlihat dan mengganggu bacaan.
10. **C** — Nilai `vertical-align` bawaan elemen inline-block adalah *baseline*, sehingga tepi atas kartu tidak sejajar; `vertical-align: top` menyejajarkan tepi atas kotak.
11. **C** — `inline-block` mengalir seperti teks tetapi menerima `width`, `height`, dan padding penuh — tepat untuk chip; `block` memaksa baris baru dan `inline` mengabaikan dimensi serta padding vertikalnya.
12. **A** — 32 px adalah langkah skala 8 px terdekat dari 30 px; memakai 30 px atau membuat langkah baru merusak ritme skala proyek.
13. **B** — Kriteria WCAG 2.2 (2.5.8) *Target Size (Minimum)* menetapkan area sasaran minimal 24 × 24 px; tombol berpading 8 px dengan teks 16 px sudah melampaui ambang itu.
14. **C** — `display: none` mengeluarkan elemen dari layar sekaligus dari alur dokumen, sedangkan `visibility: hidden` (dan `opacity: 0`) hanya menyembunyikan secara visual sambil menyisakan ruangnya.
15. **B** — `max-width: 100%` membiarkan kartu menyusut mengikuti kontainer di layar sempit, sementara `width: 280px` mempertahankan ukuran di layar lebar; `min-width: 280px` justru memaksa melebar dan memunculkan bilah gulir.

### Jawaban Essay

1. **Poin inti:**
   - Padding berada di dalam kotak: ia termasuk "tubuh" elemen, terisi warna latar, dan memperluas area klik/sentuh (tombol besar mudah ditekan).
   - Margin berada di luar border: transparan, tidak ikut warna latar, dan berfungsi menahan jarak antarkomponen (32 px antarkartu, 64 px antarseksi).
   - Konsekuensi 1: latar elemen memenuhi sampai padding, sedangkan margin menyisakan celah transparan di sekeliling kotak.
   - Konsekuensi 2: margin vertikal dua elemen block bertetangga *collapse* (dipakai nilai terbesar), padding tidak; karena itu ritme antarseksi lebih aman distandarkan lewat padding kontainer, bukan margin anak.
   **Skor:** definisi padding/margin 2 + konsekuensi latar 1 + konsekuensi collapse 2 = 5

2. **Poin inti:**
   - a. 240 + 20 + 20 + 2 + 2 = 284 px; angka `width` hanya mengukur konten sehingga padding dan border ditambahkan di luar.
   - b. `width: 284px` untuk mempertahankan lebar visual yang sama; area kontennya kini menyusut menjadi 284 − 40 − 4 = 240 px.
   - c. Satu mode di seluruh proyek mencegah dua sistem hitung bercampur — sumber bug layout paling sunyi karena angka yang tertulis tidak lagi sama dengan lebar yang dirasakan elemen tetangga.
   **Skor:** hitungan benar 2 + nilai baru dan lebar konten 2 + alasan satu mode 1 = 5

3. **Poin inti:**
   - (a) Akar masalah badge adalah *containing block*: `.produk-media` belum diposisikan, sehingga badge `absolute` mencari leluhur diposisikan terdekat dan tidak menemukannya — landasannya jatuh ke halaman.
   - Perbaikan (a): tambahkan `position: relative;` pada `.produk-media`, sehingga `top/right: 8px` diukur dari tepi gambar/kartu.
   - (b) Akar masalah kartu meluber adalah *box model*: pada mode bawaan `content-box`, padding dan border ditambahkan di luar angka `width`.
   - Perbaikan (b): pasang global `*, *::before, *::after { box-sizing: border-box; }` (alternatif darurat: kurangi nilai `width` setara tambahan padding + border).
   **Skor:** diagnosis a 2 + perbaikan a 1 + diagnosis b 1 + perbaikan b 1 = 5

4. **Poin inti:**
   - (a) `<a>` berperilaku `inline`, sehingga `width` dan `height` diabaikan dan padding atas-bawah hanya "melukis" latar tanpa mengubah tinggi kotak.
   - (b) `inline-block` membuat link menerima dimensi dan padding penuh namun tetap mengalir sebaris; `block` juga menerima dimensi tetapi setiap link menempati baris sendiri sehingga navigasi menumpuk vertikal (baru cocok untuk menu vertikal).
   - (c) Dengan dimensi penuh, area sasaran dapat dibesarkan melewati ambang WCAG 2.5.8 (24 × 24 px) — bahkan mendekati anjuran target sentuh yang lebih lega — tanpa mengubah struktur HTML.
   **Skor:** sebab 2 + perbandingan dua pilihan 2 + kaitan WCAG 1 = 5

5. **Poin inti:**
   - (a) 18 px → 16 px (8 × 2), diwujudkan sebagai margin satu arah antarkartu agar tidak terpengaruh *collapse*.
   - (b) 12 px → 16 px (8 × 2) sebagai `margin-bottom` judul kartu; 12 px bukan langkah skala, dan 8 px hanya dipakai untuk koreksi mikro bila dianggap terlalu rapat.
   - (c) 50 px → 48 px (8 × 6) sebagai padding kontainer bagian, bukan margin anak, karena padding ikut latar dan tidak runtuh.
   - Alasan umum: setiap jarak harus jatuh pada satu langkah skala agar halaman terasa berirama dan keputusan jarak bisa dipertanggungjawabkan, bukan tebakan.
   **Skor:** tiga kasus (nilai + langkah + margin/padding) 4,5 + alasan konsistensi 0,5 = 5

### Jawaban Praktikum Lab

1. **Langkah solusi:** wadah `font-size: 0`; kartu `position: relative; display: inline-block; vertical-align: top; width: 240px; padding: 16px; border: 1px solid var(--clr-border); border-radius: var(--radius); font-size: 16px; margin-right: 16px;`; badge `position: absolute; top: 8px; right: 8px; padding: 4px 10px; border-radius: 999px; background: var(--clr-primary); color: #fff; font-size: 12px;`
   **Kriteria penilaian:** mode `border-box` global 25%, posisi badge benar (induk `relative` + anak `absolute`) 30%, deret inline-block tanpa celah (`font-size: 0` + `font-size` eksplisit + `vertical-align: top`) 25%, kerapian skala 8 px dan bukti DevTools 20%

2. **Langkah solusi:** lebar tiap kartu = 300 + (16×2) + (2×2) = 336 px; tiga kartu = 1008 px > 920 px sehingga tidak muat dan baris meluber. Perbaikan: `*, *::before, *::after { box-sizing: border-box; }` (atau turunkan `width` menjadi 264 px bila mode content-box dipertahankan). Setelah perbaikan, tiga kartu 300 px + dua margin 16 px memuat dengan sisa ruang.
   **Kriteria penilaian:** hitungan benar 35%, identifikasi mode content-box sebagai penyebab 25%, perbaikan CSS tepat 25%, bukti tangkapan layar sebelum/sesudah 15%

3. **Langkah solusi:** diagram kotak `.produk-card` menampilkan `width: 280px; padding: 0; border: 1px; margin: 0 16px 32px 0` — lebar di layar tetap 280 px karena border 1 px menaungi dari dalam. Setelah aturan global `box-sizing` dikomentari, kotak membengkak menjadi ± 282 px (280 konten + border kiri-kanan), sehingga kartu baris ketiga turun dan muncul indikator pergeseran baris.
   **Kriteria penilaian:** ketepatan angka diagram kotak 40%, penjelasan perubahan setelah `box-sizing` dinonaktifkan 30%, kelengkapan bukti dan kesimpulan 30%

4. **Langkah solusi:** 14 px → 16 px (8 × 2); 18 px → 16 px (8 × 2) — atau 24 px (8 × 3) bila konteksnya butuh jeda lebih lega; 30 px → 32 px (8 × 4); 42 px → 48 px (8 × 6) karena 48 adalah langkah skala terdekat. Padding dipakai untuk ruang dalam komponen (panel, jarak judul-isi yang ikut latar), margin untuk jarak antar-komponen (mis. jarak panel ke panel dan tombol aksi ke konten di atasnya).
   **Kriteria penilaian:** seluruh nilai jatuh pada skala 8 px 40%, alasan margin vs padding 30%, komentar `8 × n` konsisten 15%, bukti file sebelum/sesudah 15%

5. **Langkah solusi:** sarana bawaan HTML adalah atribut `title` pada elemen yang dipotong, sehingga teks penuh terbaca saat kursor diarahkan (tanpa perilaku dinamis). Ukur tinggi baris di DevTools: bila kurang dari 24 px, tambahkan padding dari skala 8 px agar ambang WCAG 2.5.8 terpenuhi; pastikan `:focus-visible` memberi `outline` yang terlihat saat halaman ditelusuri dengan papan tombol.
   **Kriteria penilaian:** pola tiga properti elipsis utuh 30%, `title` sebagai pengaman informasi 20%, pengukuran dan pemenuhan 24 × 24 px 25%, bukti fokus keyboard 25%

6. **Langkah solusi:** header `position: sticky; top: 0; z-index: 10; background-color: var(--clr-surface);` dan konten tergulir tidak tembus karena latar solid; tombol bantuan `position: fixed; right: 24px; bottom: 24px;` dengan `z-index` kecil. Catatan: sticky layak untuk navigasi atau header tabel yang terus dibutuhkan; fixed dipakai hemat karena menutupi konten; `z-index` dipilih dari skala kecil yang terdokumentasi (1, 2, 10).
   **Kriteria penilaian:** implementasi sticky + latar solid 35%, implementasi fixed 20%, tiga poin catatan 30%, bukti dua posisi gulir 15%

7. **Langkah solusi:** landasan badge adalah `.produk-card` karena satu-satunya leluhur diposisikan; akibatnya badge muncul ± sejauh tinggi media dari puncak kartu, bukan di pojok gambar. Perbaikan: pindahkan `position: relative` ke `.produk-media` sehingga badge mengukur dari tepi gambarnya. *Nearest positioned ancestor*: elemen `absolute` selalu mengambil titik nol koordinat dari leluhur terdekat yang nilainya bukan `static`, dan bila tidak ada, landasannya adalah halaman.
   **Kriteria penilaian:** prediksi benar 25%, perbaikan satu deklarasi 35%, penjelasan mekanisme containing block 25%, bukti sebelum/sesudah 15%

8. **Langkah solusi:** `.arsip { max-height: 320px; overflow-y: auto; }` sehingga daftar menggulir di dalam panel dan halaman utama tidak ikut bergulir; baris nama panjang memakai `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` plus `title`, sedangkan berkas dengan kata sangat panjang memakai `overflow-wrap: break-word` agar potongan kata pindah baris alih-alih melebarkan panel.
   **Kriteria penilaian:** struktur panel dan `max-height` 30%, `overflow-y: auto` tepat 20%, dua teknik pemenggalan beserta penjelasan 30%, halaman tanpa bilah gulir horizontal 20%

9. **Langkah solusi:** tabel masalah → solusi (mis. padding 40 px → 24 px + 16 px; jarak 12/17/28 px → 16/16/24 px; margin antarkartu 40 px + border 24 px → 32 px satu arah; tinggi terkunci → `min-height`). `min-height` dipakai karena konten bisa bertambah panjang — mengunci `height` berisiko memotong teks (kegagalan aksesibilitas). Header tabel jadwal memakai `position: sticky; top: 0;` dengan latar solid.
   **Kriteria penilaian:** tabel masalah → solusi 30%, konsistensi skala 8 px 25%, `min-height` beserta alasan 20%, sticky header 15%, bukti visual 10%

10. **Langkah solusi:** badge `inline` mengabaikan `width: 120px` sehingga lebarnya hanya selebar teks dan padding vertikalnya tidak mendorong baris; badge `block` selebar induk dan memaksa baris baru; badge `inline-block` tepat 120 px dan mengalir sebaris. Dua `inline-block` berdampingan menyisakan celah dari spasi HTML; celah hilang dengan `font-size: 0` pada wadah dan `font-size` eksplisit pada badge. Kesimpulan: chip kategori memakai `inline-block`.
   **Kriteria penilaian:** tiga kotak berjalan sesuai nilai display 30%, tabel lebar hasil pengukuran DevTools 25%, temuan celah + solusi `font-size: 0` 25%, kesimpulan pemilihan 20%
