# Soal Pilihan Ganda — Bab 04: Tipografi dan Visual Design CSS

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)
> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)

---

**Pilihan Ganda (15 soal)**

1. Poppins Regular 400 dan Poppins Bold 700, keduanya adalah dua … dari satu …
   - A. *typeface*; *font*
   - B. *font*; *typeface*
   - C. design token; *fallback stack*
   - D. *font-weight*; *font-size*

2. Parameter `display=swap` pada URL Google Fonts dimaksudkan agar …
   - A. teks tetap tampil memakai font cadangan selama web font belum selesai diunduh
   - B. font selalu dibaca dari berkas lokal ketika jaringan terputus
   - C. ketebalan font otomatis ditukar mengikuti lebar layar
   - D. browser menunda seluruh teks sampai web font selesai diunduh

3. Skala tipografi Tokosaya dinyatakan dalam satuan `rem`. Alasan utama pemilihan satuan itu adalah …
   - A. `rem` tidak memerlukan blok token di `:root`
   - B. `rem` membuat ukuran teks sama besar di semua perangkat tanpa kecuali
   - C. `rem` adalah satu-satunya satuan yang dikenali browser modern
   - D. `rem` mengacu pada ukuran font elemen akar sehingga skala tetap koheren sekaligus mengikuti setelan pengguna

4. Token `--space-unit: 8px` pada `:root` Tokosaya dipakai lewat pola `calc(var(--space-unit) * n)`. Fungsi token tersebut adalah …
   - A. menggantikan kebutuhan `line-height` pada seluruh teks
   - B. menetapkan lebar maksimum setiap section halaman
   - C. menjadi basis skala jarak 8/16/24/32/48/64 supaya ritme jarak konsisten
   - D. menyimpan nilai rasio kontras minimum untuk badge semantik

5. Kamu ingin memberi jarak dalam elemen sebesar 24px dengan memanfaatkan token `--space-unit: 8px`. Deklarasi yang tepat adalah …
   - A. `padding: calc(var(--space-unit) * 3);`
   - B. `padding: calc(var(--space-unit) + 3);`
   - C. `padding: var(--space-unit) * 3;`
   - D. `padding: calc(var(--space-unit) * 3px);`

6. Judul hero Tokosaya memakai `font-size: clamp(2.25rem, 5vw, 3rem);` dengan basis 16px. Ketika jendela browser diperlebar menjadi 800px, ukuran font yang dipakai adalah …
   - A. 36px
   - B. 40px
   - C. 48px
   - D. 64px

7. Sebuah paragraf kartu produk memakai `font-size: 1.25rem` dan `line-height: 1.6`. Tinggi satu baris teks yang dihasilkan pada basis 16px adalah …
   - A. 20px
   - B. 26px
   - C. 32px
   - D. 36px

8. Menurut tabel kontras pada bab ini, pasangan warna berikut yang gagal ambang WCAG AA (4,5:1) untuk teks berukuran kecil adalah …
   - A. `#334155` di atas `#F8FAFC`
   - B. putih `#FFFFFF` di atas `#4F46E5`
   - C. `#1E293B` di atas `#F59E0B`
   - D. `#16A34A` di atas putih

9. Token bayangan kartu Tokosaya ditulis `--shadow-card: 0 8px 24px rgba(15, 23, 42, 0.08);`. Pernyataan yang benar tentang nilai tersebut adalah …
   - A. offset vertikal 8px, blur 24px, warna hitam-kebiru bertembus pandang 8%
   - B. offset horizontal 8px, blur 24px, warna biru pekat tanpa tembus pandang
   - C. spread 8px, offset vertikal 24px, warna abu-abu penuh
   - D. offset vertikal 24px, blur 8px, warna indigo transparan

10. Badge "Baru" Tokosaya memakai pola tint: warna indigo dibawa oleh latar bertembus pandang 12%, sedangkan teksnya tetap gelap. Deklarasi latar yang tepat adalah …
   - A. `background-color: rgba(79, 70, 229, 0.12);`
   - B. `background-color: rgb(79, 70, 229, 12);`
   - C. `background-color: #4F46E5 12%;`
   - D. `background-color: var(--clr-primary); opacity: 0.12;`

11. Perhatikan potongan markup dan gaya berikut.

```html
<main class="produk-panel">
  <p>Semua warna dikendalikan oleh token.</p>
  <article style="color: var(--clr-primary);">
    <h3>Keyboard Mekanis KX-210</h3>
    <p>Keyboard mekanis 87 tombol dengan switch biru.</p>
  </article>
</main>
```

```css
html {
  color: var(--clr-body);
}

h1, h2, h3 {
  color: var(--clr-dark);
}
```

   Pernyataan yang benar tentang warna teks akhir di dalam `<article>` adalah …
   - A. seluruh teks di dalam `<article>` menjadi indigo, termasuk `h3`
   - B. paragraf di dalam `<article>` menjadi indigo, sedangkan `h3` tetap `--clr-dark` karena warnanya diatur langsung oleh stylesheet
   - C. seluruh teks menjadi `--clr-dark` karena selector `h3` lebih spesifik daripada gaya inline
   - D. paragraf menjadi `--clr-body` karena properti `color` tidak diwariskan

12. Halaman sudah memuat `css/style.css` dan di dalamnya tertulis `h1, h2, h3 { font-family: 'Poppins', sans-serif; }`, tetapi judul tetap tampil memakai font sistem. Langkah pemeriksaan pertama yang paling tepat adalah …
   - A. mengganti kata `sans-serif` menjadi `serif` supaya perbedaan font lebih mudah terlihat
   - B. menambahkan `!important` pada deklarasi `font-family` judul
   - C. memeriksa tiga tag `<link>` Google Fonts: kecocokan URL huruf demi huruf, keberadaannya di dalam `head`, dan pesan gagal muat di Console atau Network
   - D. mengubah `font-size` judul karena ukuran huruf memengaruhi keberhasilan pemuatan font

13. Hero Tokosaya memakai `linear-gradient(to bottom right, var(--clr-primary), var(--clr-primary-dark))` dengan teks putih. Desainer mengusulkan mengganti ujung gradien dengan amber terang agar hero terlihat lebih hidup. Tanggapan yang paling tepat adalah …
   - A. menerima usulan karena amber adalah warna aksen resmi Tokosaya
   - B. menolak gradien sepenuhnya dan mengganti latar hero dengan amber solid
   - C. menerima usulan dengan catatan warna gradien dipergelap atau ditambah lapisan gelap di belakang teks agar kontras tetap di atas 4,5:1
   - D. menerima usulan lalu memindahkan seluruh teks hero ke luar area gradien

14. Kamu mengaudit `css/style.css` dan memilah nilai yang layak menjadi design token. Nilai yang paling tepat **tidak** dijadikan token adalah …
   - A. warna aksen amber `#F59E0B` beserta varian gelapnya
   - B. putih `#FFFFFF` yang hanya dipakai sekali untuk teks di atas gradien hero
   - C. keluarga font heading dan font body
   - D. `--radius` 12px dan `--shadow-card`

15. Kamu membuat badge baru "Stok Terbatas" untuk kartu produk Tokosaya. Sesuai pola badge semantik bab ini — warna semantik dibawa latar tint, teks tetap gelap — kombinasi deklarasi yang tepat adalah …
   - A. `background-color: var(--clr-danger); color: #FFFFFF;`
   - B. `background-color: var(--clr-bg); color: var(--clr-danger);`
   - C. `background-color: rgba(220, 38, 38, 0.12); color: var(--clr-danger);`
   - D. `background-color: rgba(220, 38, 38, 0.12); color: var(--clr-body);`
