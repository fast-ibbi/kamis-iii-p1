# Soal Pilihan Ganda — Bab 14: Implementasi Desain Figma ke HTML CSS

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)
> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)

---

**Pilihan Ganda (15 soal)**

1. Design token di blok `:root` Tokosaya diberi nama menurut perannya (`--clr-primary`, `--clr-accent`), bukan menurut warna mentahnya (misalnya `--indigo`). Alasan paling tepat untuk kebiasaan itu adalah…
   - A. nama berbasis peran membuat ukuran berkas CSS jadi lebih kecil
   - B. nama berbasis peran membuat browser memuat warna lebih cepat
   - C. nama berbasis peran tetap masuk akal ketika desainer mengganti nilai warnanya kelak
   - D. nama berbasis peran mewajibkan semua warna ditulis dalam format hex

2. Pada panel kanan Figma, properti yang menunjukkan warna latar sebuah objek adalah…
   - A. fill
   - B. stroke
   - C. gap
   - D. auto layout

3. Komponen desain yang di dunia nyata bersifat interaktif — misalnya menu yang membuka panel — diterjemahkan pada mata kuliah ini sebagai…
   - A. halaman terpisah yang dibuka tanpa navigasi
   - B. tampilan statis dengan kelas keadaan yang sesuai disertai catatan perilakunya
   - C. gambar animasi agar tampak berjalan sendiri
   - D. komponen yang dibiarkan tidak dibuat sampai skrip tersedia

4. Cara membaca frame Figma yang dianjurkan bab ini adalah…
   - A. mulai dari nilai hex terkecil menuju terbesar
   - B. mulai dari teks terpanjang menuju terpendek
   - C. mulai dari properti CSS paling rumit menuju paling sederhana
   - D. mulai dari frame terluar, lalu membedah layer anak dari atas ke bawah

5. Perhatikan aturan hasil salinan seorang mahasiswa untuk badge Tokosaya.

   ```css
   /* kustom */
   .badge-populer {
     background-color: #F59E0B;
     border-radius: 8px;
     padding: 6px 12px;
   }
   ```

   Penyimpangan aturan tersebut terhadap disiplin token Tokosaya adalah…
   - A. padding ditulis dengan dua nilai sehingga tidak dibaca browser
   - B. kelas memakai awalan `badge` yang sudah dipakai Bootstrap
   - C. warna aksen ditulis sebagai hex liar dan radius tidak memakai `var(--radius)`
   - D. selektor kelas tunggal terlalu lemah untuk menata badge

6. Spesifikasi bagian G menetapkan tiga kartu produk terkait sejajar di desktop, turun menjadi satu kolom penuh di layar kecil, dengan jarak antarkolom 24 px. Perhatikan kerangka markup berikut.

   ```html
   <div class="row ...">
     <article class="...">Kartu 1</article>
     <article class="...">Kartu 2</article>
     <article class="...">Kartu 3</article>
   </div>
   ```

   Isian kelas yang paling setia pada spesifikasi tersebut adalah…
   - A. `row`, lalu `col-12 col-md-4` pada tiap artikel
   - B. `row g-4`, lalu `col-12 col-md-4` pada tiap artikel
   - C. `row g-4`, lalu `col-4` pada tiap artikel
   - D. `row g-4`, lalu `col-12 col-lg-7` pada tiap artikel

7. Text style Figma "Heading/Card Title" bernilai Poppins 500, 18 px, line-height 1,4. Aturan CSS kustom yang paling setia pada gaya itu adalah…
   - A. `.produk-card-nama { font-family: var(--font-heading); font-weight: 500; font-size: 18px; line-height: 1.4; }`
   - B. `.produk-card-nama { font-family: var(--font-heading); font-weight: 700; font-size: 18px; line-height: 1.4; }`
   - C. `.produk-card-nama { font-family: var(--font-body); font-weight: 400; font-size: 16px; line-height: 1.6; }`
   - D. `.produk-card-nama { font-family: var(--font-heading); font-weight: 500; font-size: 28px; line-height: 1.25; }`

8. Spesifikasi panel produk menyatakan badge "Best Seller" berlatar `#F59E0B` dengan teks `#1E293B`. Aturan berbasis token yang paling tepat adalah…
   - A. `.badge-populer { background-color: var(--clr-surface); color: var(--clr-body); }`
   - B. `.badge-populer { background-color: #6C63FF; color: #1E293B; }`
   - C. `.badge-populer { background-color: var(--clr-accent); color: var(--clr-dark); }`
   - D. `.badge-populer { background-color: var(--clr-danger); color: #FFFFFF; }`

9. Pada lebar ≥ 992 px, gambar produk dan panel data harus bersebelahan dengan pembagian 7 : 5, lalu menumpuk penuh di bawah titik itu. Kombinasi kelas kolom yang paling tepat adalah…
   - A. `col-lg-7` dan `col-lg-5`
   - B. `col-12 col-lg-7` dan `col-12 col-lg-5`
   - C. `col-md-7` dan `col-md-5`
   - D. `col-7` dan `col-5`

10. Perhatikan penggalan navbar Tokosaya berikut.

    ```html
    <header class="site-nav">
      <div class="container d-flex flex-wrap align-items-center justify-content-between gap-3">
        <a href="index.html" class="site-brand">Tokosaya</a>
        ...
      </div>
    </header>
    ```

    Pernyataan yang paling tepat mengenai pembagian tugas kelas pada penggalan itu adalah…
   - A. seluruh gaya navbar ditulis di kelas kustom, utilitas tidak dipakai
   - B. utilitas `d-flex` membuat navbar berjalan interaktif tanpa skrip
   - C. kelas kustom wajib menimpa utilitas dengan `!important` agar menang
   - D. utilitas mengatur susunan (flex, gap), sedangkan warna dan ukuran presisi diatur kelas kustom bertoken

11. Gambar produk di panel detail tampil melebar melebihi kotak dan mendorong kolom kanan turun saat dibuka di tablet, padahal atribut `width`/`height` sudah ditulis. Perbaikan yang paling tepat adalah…
   - A. menghapus atribut `width`/`height` dari elemen gambar
   - B. menambahkan kelas `img-fluid` pada elemen `img`
   - C. menambahkan `!important` pada aturan lebar gambar
   - D. memindahkan gambar menjadi latar belakang CSS pada `figure`

12. Seorang mahasiswa menambahkan `rounded-3` pada kartu produk, sementara kelas kustom `.produk-card` sudah memberi `border-radius: var(--radius)`. Nilai radius yang akhirnya dipakai tidak sesuai token 12 px. Keputusan paling tepat adalah…
   - A. hapus `rounded-3` dan biarkan kelas kustom bertoken yang menetapkan radius
   - B. tambahkan `!important` pada aturan kustom agar menang
   - C. ubah token `--radius` menjadi 8 px supaya semua komponen seragam
   - D. hapus kelas kustom dan serahkan radius kartu ke utilitas

13. Pada pemeriksaan kartu produk, ditemukan elemen berikut.

    ```html
    <img src="img/produk-mouse-mw88.svg" width="332" height="160"
         class="produk-card-gambar img-fluid mb-3">
    ```

    Perbaikan yang paling tepat untuk masalah aksesibilitas elemen itu adalah…
   - A. menambahkan `alt="gambar"` agar halaman lolos validator
   - B. menambahkan `role="img"` pada elemen gambar
   - C. menambahkan `alt` deskriptif yang menjelaskan isi dan tujuan gambar
   - D. membiarkannya, karena gambar sudah berada di dalam elemen `article`

14. Cara yang paling tepat untuk membuktikan bahwa nilai panel produk sudah setia pada spesifikasi desain adalah…
   - A. membaca nilai akhir pada panel Computed DevTools, membandingkannya dengan spesifikasi, dan mencatat selisih kecil sebagai toleransi ± 2 px
   - B. menilai kemiripan dengan perasaan setelah menatap tangkapan layar desain
   - C. menambah `!important` sampai tampilannya kelihatan sama
   - D. meminta rekan menilai "mirip atau tidak" tanpa membuka spesifikasi

15. Sebuah UMKM hanya bisa menyerahkan tangkapan layar halaman toko lain sebagai acuan desain — tanpa berkas Figma dan tanpa angka ukuran. Langkah paling tepat agar hasil implementasimu tetap terkendali adalah…
   - A. menaksir ukuran dari gambar lalu langsung menuangkannya ke kode secepat mungkin
   - B. menolak pekerjaan sampai klien menyediakan berkas Figma
   - C. meminta izin membuka halaman toko aslinya untuk mengukur setiap elemen
   - D. menyusun spesifikasi desain tekstual bernilai presisi (ukuran, jarak, warna, keadaan) lalu mengaudit hasilnya dengan fidelity checklist
