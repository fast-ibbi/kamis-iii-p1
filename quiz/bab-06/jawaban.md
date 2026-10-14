# Kunci Jawaban & Rubrik — Bab 06: Flexbox untuk Web Layout

> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)
> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)

---

### Kunci Pilihan Ganda

1. **B** — `flex-direction` menentukan arah sumbu utama (`row` atau `column`); `justify-content` dan `align-items` hanya membagi ruang pada sumbu yang sudah ditentukan itu.
2. **D** — `wrap-reverse` mengizinkan penekukan dengan urutan baris terbalik; `wrap` menekuk normal, `nowrap` memaksa satu baris, dan `column-reverse` adalah nilai `flex-direction`.
3. **A** — `space-evenly` membagi semua celah sama besar termasuk dua celah di tepi; `space-around` menyisakan ruang tepi setengah ukuran, sedangkan `space-between` menempelkan item pertama dan terakhir ke tepi.
4. **C** — `flex-grow` membagi **sisa ruang** setelah basis semua item dihitung: bobot 2 memperoleh dua kali porsi, bukan dua kali lebar total kartu.
5. **B** — Di dalam flex `column`, auto margin menyerap sisa ruang; `margin-top: auto` mendorong harga ke dasar kartu sehingga harga delapan kartu berbaris sejajar meski deskripsinya berbeda panjang.
6. **A** — Ikon dibiarkan berukuran tetap, sedangkan elemen teks diberi `flex: 1` agar memakai seluruh ruang sisa — itulah pola *media object*.
7. **C** — `justify-content` adalah properti flex container; menulisnya pada elemen anak tidak berpengaruh karena anak mengatur dirinya lewat `flex`, `align-self`, atau `order`.
8. **D** — Pada `flex-direction: column`, sumbu silang bersifat horizontal sehingga `align-items: center` menengahkan secara horizontal; `justify-content` justru bekerja vertikal pada pola itu.
9. **A** — floor((976 + 24) / (250 + 24)) = floor(1000 / 274) = 3 kartu; sisa ruang 226 px tidak cukup untuk kartu keempat.
10. **B** — `row-gap` dan `column-gap` memisahkan jarak antar-baris dari jarak antar-kolom, sedangkan `gap` tunggal menerapkan nilai yang sama untuk keduanya.
11. **C** — Katalog dengan jumlah kolom pasti dan perataan antar-baris adalah kebutuhan dua dimensi; Grid mengatur baris dan kolom sekaligus, sementara flexbox mengatur setiap baris secara lokal.
12. **D** — Nilai default `order` adalah 0; angka kecil mendahului angka besar, tetapi urutan dokumen tetap menentukan urutan fokus dan pembacaan *assistive technology*.
13. **A** — `max-width` membatasi panjang baris supaya mata tidak menyapu teks sepanjang monitor lebar; tanpa batasan itu satu paragraf di monitor besar bisa memuat sekitar 160 karakter per baris.
14. **B** — `align-items: center` mematikan `stretch` sehingga kartu tidak diregangkan sama tinggi; kembalikan ke `stretch` dan dorong harga dengan `margin-top: auto` untuk menyelesaikan keduanya sekaligus.
15. **C** — Pendekatan *mobile first*: satu CTA yang jelas lebih mudah dipahami di layar kecil, sedangkan link tambahan cukup tampil sebagai link teks agar tidak berebut perhatian.

### Jawaban Essay

1. **Poin inti:**
   - Flexbox satu dimensi karena mengatur pembagian ruang pada satu arah saja: satu baris (row) atau satu kolom (column).
   - Masalah `float`: fitur itu awalnya dibuat untuk membiarkan teks mengalir di sekitar gambar, sehingga dipakai menyusun layout ia rawan — footer bisa "jatuh" dan butuh pembersihan.
   - Masalah `inline-block`: memunculkan celah whitespace antartag dan menuntut trik `font-size: 0` serta `vertical-align`.
   - Flexbox menyelesaikan keduanya: wadah membagi ruang secara otomatis, `gap` bebas margin ganda, dan item dapat sejajar serta menekuk tanpa media query.
   **Skor:** konsep satu dimensi 2 + masalah float 1,5 + masalah inline-block 1,5 = 5

2. **Poin inti:**
   - Margin per anak menyisakan jarak di tepi terluar dan menuntut pengecualian seperti `:last-child`; `gap` hanya menyisipkan jarak **di antara** item sehingga tepi wadah tetap bersih.
   - Saat baris menekuk, margin juga menggantung pada item yang pindah baris, sedangkan `gap` mengikuti penekukan dengan tetap rapi.
   - `row-gap` mengatur jarak antar-baris dan `column-gap` mengatur jarak antar-kolom; `gap` tunggal memakai nilai yang sama untuk keduanya.
   - Konsekuensinya, kebiasaan `font-size: 0` dari era inline-block tidak diperlukan lagi.
   **Skor:** beda margin vs gap 2 + perilaku saat menekuk 1,5 + row-gap/column-gap 1,5 = 5

3. **Poin inti:**
   - a. `flex: 1 1 160px` = grow 1, shrink 1, basis 160 px; `flex: 0 1 120px` = tidak tumbuh, boleh menyusut, basis 120 px.
   - b. Saat wadah longgar: basis dihitung lebih dulu, lalu sisa ruang dibagi proporsional hanya kepada item yang `grow` > 0; kolom samping tetap 120 px. Saat wadah menyempit: kedua item menyusut (shrink 1) secara proporsional hingga batas ukuran minimumnya.
   - c. `flex-basis` mengesampingkan `width` di sepanjang sumbu utama, sehingga `width: 300px` pada `.kolom-konten` diabaikan dan item tetap mulai dari basis 160 px.
   **Skor:** arti kedua nilai 2 + perilaku longgar/sempit 2 + flex-basis mengalahkan width 1 = 5

4. **Poin inti:**
   - Flexbox bersifat satu dimensi: setiap baris flex diatur secara lokal dan tidak "berkomunikasi" dengan baris lain, sehingga ketika delapan kartu tidak terbagi rata (mis. 3-3-2) baris terakhir merapat ke kiri dan menyisakan ruang kosong.
   - Setelah item menekuk, wadah memiliki beberapa baris flex dan `align-items` kini mengatur peletakan antar-baris di ruang sisa, bukan lagi per item dalam satu baris; jarak antar-baris lebih jelas diatur `row-gap`.
   - Perataan kolom antarbaris (jumlah kolom pasti dan rata) adalah kebutuhan dua dimensi — di situlah Grid (`grid-template-columns`) lebih tepat, sesuai tabel keputusan pada bab.
   **Skor:** sifat satu dimensi 2 + peran align-items setelah wrap 1,5 + keputusan pindah ke Grid 1,5 = 5

5. **Poin inti:**
   - Aturan yang dipilih: `.hero { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; min-height: 360px; text-align: center; }` (boleh tanpa `min-height` bila tinggi bukan syarat).
   - Karena `flex-direction: column`, sumbu utama menjadi vertikal sehingga `justify-content` bekerja vertikal (menengahkan atas-bawah), sedangkan sumbu silanghorizontal sehingga `align-items` yang menengahkan kiri-kanan.
   - Keputusan keterbacaan: beri `max-width` pada subjudul (praktisnya 640 px) supaya baris teks tidak membentang melelahkan mata pada monitor lebar.
   - Cukup satu CTA utama; link tambahan ditampilkan sebagai link teks agar perhatian tidak terpecah.
   **Skor:** daftar properti tepat 2 + penjelasan peran sumbu 2 + keputusan keterbacaan 1 = 5

### Jawaban Praktikum Lab

1. **Langkah solusi:** markup memakai `<a class="site-nav-brand">` dan satu pembungkus `<div class="site-nav-kanan">` berisi `<ul>` menu plus `<a>` keranjang; CSS:

```css
.site-nav { display: flex; flex-wrap: wrap; align-items: center;
            justify-content: space-between; gap: 16px; }
.site-nav-kanan { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; }
```

Penekukan dua lapis: kelompok kanan turun sebagai satu blok lebih dulu, lalu link menu ikut menekuk di dalamnya sehingga baris kedua tidak pincang.

   **Kriteria penilaian:** struktur dua anak langsung 30%, `space-between` + `flex-wrap` + `gap` 30%, bukti tiga ukuran jendela 25%, penjelasan pengelompokan 15%

2. **Langkah solusi:** `.hero { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; min-height: 360px; text-align: center; }`, CTA diberi `:hover` dan `:focus-visible` dengan `outline` yang terlihat, subjudul diberi `max-width: 640px` agar barisnya tidak membentang.

   **Kriteria penilaian:** flex column + dua sumbu 40%, `min-height` dan efeknya 15%, keputusan keterbacaan serta fokus 25%, bukti 20%

3. **Langkah solusi:** properti yang hilang `flex-wrap: wrap` pada `.produk-row`; nilai yang salah `flex: 0 0 250px` (shrink 0) seharusnya `flex: 0 1 250px`. Pada 360 px: `0 0` memaksa kartu tetap 250 px dan menolak menekuk sehingga muncul bilah gulir horizontal; `0 1` + `wrap` membuat kartu menyusut proporsional dan turun baris dengan rapi.

   **Kriteria penilaian:** identifikasi dua temuan 30%, perbaikan CSS 30%, tabel perbandingan 360 px 25%, kalimat pencegahan 15%

4. **Langkah solusi:** `align-items: center` menggantikan nilai default `stretch` sehingga kartu tidak lagi diregangkan setinggi baris; kartu menjadi sependek isinya lalu ditengahkan — itulah kesan bergelombang. Perbaikan: hapus `align-items: center` dan tambahkan `margin-top: auto` pada `.produk-harga` supaya harga menempel dasar kartu. `gap: 8px` di dalam kartu menjaga jarak antar elemen internal (gambar, nama, kategori, harga) tetap konsisten, terpisah dari urusan tinggi kartu.

   **Kriteria penilaian:** reproduksi dan penjelasan 30%, perbaikan 35%, verifikasi harga sejajar 20%, peran `gap` 15%

5. **Langkah solusi:** nilai komputasi yang dicatat (contoh): `.site-nav` → `display: flex`, `flex-wrap: wrap`, `gap: 16px`; `.site-nav-kanan` → `gap: 24px`; `.produk-row` → `display: flex`, `flex-wrap: wrap`, `gap: 24px`; anak `.produk-row` → `flex-basis: 250px`. Live edit: `nowrap` membuat delapan kartu dipaksa satu baris dan muncul bilah gulir horizontal; `justify-content: center` pada `.produk-row` membuat baris terakhir (yang hanya berisi 2 kartu) tertengah, padahal sebelumnya merapat kiri.

   **Kriteria penilaian:** kelengkapan tabel nilai komputasi 40%, akurasi hasil live edit 30%, bukti tangkapan layar 30%

6. **Langkah solusi:** versi Bab 5 memakai `.daftar-produk { font-size: 0; }` dan `.produk-card { display: inline-block; vertical-align: top; margin: 0 16px 32px 0; }`; versi flex memakai `.produk-row { display: flex; flex-wrap: wrap; gap: 24px; }` dan `.produk-card { flex: 0 1 250px; }`. Tiga hal yang berubah: (1) celah whitespace hilang tanpa trik `font-size: 0`; (2) jarak diatur `gap` tanpa margin kanan-bawah dan tanpa sisa jarak di tepi; (3) `vertical-align` dan masalah baseline tidak lagi diperlukan karena `stretch` default.

   **Kriteria penilaian:** dua versi kode 30%, tabel perbandingan 30%, tiga perubahan teridentifikasi 25%, kesimpulan 15%

7. **Langkah solusi:** `order` hanya mengubah **urutan visual**; urutan dokumen HTML — dan karena itu urutan fokus Tab serta pembacaan *screen reader* — tetap asli, sehingga pengguna keyboard bisa "melompat" tidak sesuai tampilan. Aman dipakai untuk penyesuaian kecil (satu kolom yang diprioritaskan) selama urutan dokumen tetap logis. Fokus diperlihatkan dengan `a:focus-visible { outline: 3px solid var(--clr-primary); outline-offset: 2px; }`.

   **Kriteria penilaian:** implementasi `order` 25%, catatan urutan fokus vs visual 30%, fokus terlihat 25%, kesimpulan 20%

8. **Langkah solusi:** `.chip-row { display: flex; flex-wrap: wrap; gap: 8px; }` dan `.chip { padding: 8px 16px; border: 1px solid var(--clr-border); border-radius: 999px; }`. Pada 360 px chip menekuk menjadi beberapa baris tanpa bilah gulir horizontal. `gap` lebih tepat karena jaraknya hanya hadir di antara chip dan tidak menyisakan margin pada tepi deret, sehingga celah tetap benar ketika chip berpindah baris.

   **Kriteria penilaian:** `flex-wrap` + `gap` 35%, area sentuh dan konsistensi skala 8 px 25%, uji layar sempit 25%, penjelasan `gap` 15%

9. **Langkah solusi:** lebar konten baris W = lebar jendela − 48 px (padding dua sisi); jumlah kartu ≈ floor((W + 24) / (250 + 24)). Prediksi: 1280 → W 1232 → floor(1256/274) = 4 kartu; 1024 → W 976 → floor(1000/274) = 3 kartu; 768 → W 720 → floor(744/274) = 2 kartu. Verifikasi di browser; bila ada selisih, penyebab umum adalah pembulatan ke bawah dan pengukuran lebar konten yang tidak persis. Komposisi berubah ketika lebar turun melewati kelipatan basis + gap.

   **Kriteria penilaian:** rumus dan tiga prediksi 40%, hasil pengukuran 25%, penjelasan selisih 20%, bukti 15%

10. **Langkah solusi:** `.dasbor-row { display: flex; gap: 24px; } .kartu { flex: 1; }` membuat tiga kartu membagi ruang secara merata; memberi satu kartu `flex: 2` membuatnya memperoleh dua kali porsi sisa ruang sehingga lebih lebar dari dua kartu lain (bukan berarti dua kali lebar total). `gap` hanya menambah jarak antar-kartu tanpa sisa ruang di tepi baris. `flex: 1` lebih tepat ketika lebar kartu harus mengikuti ruang secara proporsional dan responsif, sedangkan lebar tetap cocok untuk komponen yang ukurannya memang harus stabil.

   **Kriteria penilaian:** implementasi `flex: 1` 35%, pengukuran proporsi setelah `flex: 2` 25%, pembuktian `gap` 15%, kesimpulan 25%
