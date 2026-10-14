# Kuis Ringkas — Bab 13: Website Responsif dan Accessibility

> Frontend Development & Web Design · Semester III · _Kuis Ringkas per Bab_
> 10 soal (5 pilihan ganda + 5 isian singkat) · estimasi waktu ±15 menit · tingkat kesulitan campuran (C1–C4)
> Kunci + pembahasan: [kunci-kuis-ringkas.md](kunci-kuis-ringkas.md) · Bank lengkap 14 bab: [kuis-ringkas.md](../kuis-ringkas.md)

---

**Bagian A — Pilihan Ganda (5 soal)**

1. Tim Tokosaya menulis gaya dasar satu kolom untuk layar kecil, lalu memperluasnya dengan `@media (min-width: 768px)`. Menurut bab ini, salah satu alasan pendekatan *mobile-first* banyak disukai praktisi adalah...
   - A. media query menjadi tidak diperlukan sehingga berkas CSS lebih pendek
   - B. gaya dasar yang sederhana lebih sedikit saling menimpa sehingga `min-width` tinggal menambah aturan
   - C. setiap perangkat otomatis menampilkan layout yang sama tanpa penyesuaian
   - D. *breakpoint* tidak perlu ditetapkan karena mengikuti perangkat pengguna

2. Bab ini menolak pemakaian "angka ajaib" (*magical px*) pada strategi *breakpoint*. Contoh yang paling tepat disebut angka ajaib adalah...
   - A. `min-width: 576px` karena nilainya sama dengan *breakpoint* sm Bootstrap
   - B. `min-width: 768px` karena dipakai untuk grid `col-md-*`
   - C. `min-width: 992px` karena dipakai untuk grid `col-lg-*`
   - D. `min-width: 693px` karena dipilih hanya ketika layout terasa rusak di lebar itu, bukan dari kebutuhan konten

3. Judul hero Tokosaya memakai `font-size: clamp(1.75rem, 4vw + 1rem, 2.75rem);`. Pernyataan yang paling tepat tentang perilaku ukuran judul itu adalah...
   - A. ukurannya tidak turun di bawah 1,75rem, berhenti tumbuh di 2,75rem, dan di antara keduanya mengalir mengikuti lebar *viewport*
   - B. ukurannya selalu tepat 2,75rem pada semua ukuran layar
   - C. ukurannya terus tumbuh mengikuti `4vw` tanpa batas maksimum
   - D. ukurannya mengecil dari 1,75rem menuju 2,75rem saat layar melebar

4. Setiap halaman Tokosaya ditulis dengan `<html lang="id">`. Menurut tabel butir pemeriksaan bab ini, atribut tersebut terutama menopang prinsip POUR...
   - A. Perceivable
   - B. Operable
   - C. Understandable
   - D. Robust

5. Seorang rekan menambahkan `tabindex="5"` pada tombol keranjang agar dianggap "lebih cepat dijangkau". Tanggapan yang sesuai dengan aturan bab ini adalah...
   - A. tepat, karena `tabindex` positif mempercepat fokus ke elemen penting
   - B. sebaiknya dihindari karena urutan fokus harus mengikuti urutan DOM yang logis; `tabindex` positif membuat urutan menyimpang
   - C. tepat, asalkan nilainya tidak melebihi sepuluh dan diuji di semua browser
   - D. sebaiknya diganti `tabindex="0"` supaya keranjang selalu menjadi fokus pertama di halaman

**Bagian B — Isian Singkat (5 soal)**

6. Hasil audit `katalog.html` menemukan dua `<h1>` pada satu halaman dan ada bagian yang melompat dari `h2` ke `h5`. Sebutkan dua aturan heading yang dilanggar, lalu jelaskan mengapa urutan heading penting bagi pengguna *screen reader*.

7. Atribut `alt` sebuah foto produk di kartu katalog ditulis `alt="produk-keyboard-kx210.svg"`. Tuliskan perbaikan `alt` yang sesuai dengan aturan bab ini beserta alasan singkatnya.

8. Pengguna keyboard mengeluh harus melewati seluruh menu header di setiap halaman Tokosaya. Solusi yang diajarkan bab ini adalah *skip link*. Sebutkan tempat peletakannya, sasaran lompatannya, dan atribut yang diperlukan elemen tujuan.

9. Sebutkan tiga pola navigasi responsif CSS murni yang dilatih bab ini, lalu sebutkan tinggi *target* sentuh minimal sebuah link (termasuk padding) yang dianggap layak.

10. Bab ini menyebut ambang kontras WCAG level AA dalam tiga angka. Sebutkan berturut-turut ambang untuk teks normal, teks besar, dan elemen antarmuka non-teks seperti batas input atau ikon bermakna.
