# Soal Pilihan Ganda — Bab 12: UI/UX dan Design System

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)
> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)

---

**Pilihan Ganda (15 soal)**

1. Dalam design system, variabel bernama yang menyimpan nilai visual seperti warna, jarak, dan lengkung sudut disebut…
   - A. komponen
   - B. design token
   - C. varian
   - D. styleguide

2. Pembagian peran keluarga huruf pada sistem tipografi Tokosaya adalah…
   - A. Poppins untuk teks paragraf dan Inter untuk semua jenjang judul
   - B. Inter untuk judul dan Poppins untuk keterangan kecil
   - C. Poppins untuk semua jenjang judul dan Inter untuk teks paragraf
   - D. keduanya dipakai bergantian mengikuti panjang baris teks

3. Berikut yang **BUKAN** manfaat design system bagi tim pengembangan sistem informasi adalah…
   - A. halaman baru selesai lebih cepat karena polanya tinggal disalin
   - B. pemeliharaan ringan karena perubahan satu nilai token menjalar lewat `var()`
   - C. anggota baru cukup membaca satu halaman styleguide
   - D. varian baru lahir tanpa dokumentasi supaya tim bebas bereksperimen

4. Dua hukum gestalt yang diperkenalkan pada bab ini adalah…
   - A. hierarki dan konsistensi
   - B. usability dan affordance
   - C. alignment dan repetition
   - D. kedekatan (*proximity*) dan kemiripan (*similarity*)

5. Perhatikan kelas badge berikut.

```css
.badge-limited {
  background-color: var(--clr-danger);
  color: #FFFFFF;
}
```

   Badge dengan kelas ini paling tepat dipakai untuk menandai status…
   - A. Stok Terbatas
   - B. Best Seller
   - C. Tersedia
   - D. Baru

6. Perhatikan cuplikan grid katalog Tokosaya berikut.

```html
<div class="row g-4">
  <!-- delapan kartu produk dataset Tokosaya -->
</div>
```

   Jarak antarkartu yang dihasilkan kelas `g-4` adalah…
   - A. 24 piksel, sejajar dengan `gap-4` pada skala jarak Tokosaya
   - B. 8 piksel, sejajar dengan `gap-2` pada skala jarak Tokosaya
   - C. 16 piksel, sejajar dengan `gap-3` pada skala jarak Tokosaya
   - D. 48 piksel, sejajar dengan `gap-5` pada skala jarak Tokosaya

7. Perhatikan potongan CSS alert berikut.

```css
.alert-peringatan {
  background-color: rgba(245, 158, 11, 0.12);
  border-color: var(--clr-accent);
}
```

   Teknik yang dipakai penulisnya adalah…
   - A. menambah token warna kuning baru khusus untuk alert
   - B. menurunkan warna token jadi latar tipis (*tint*) tanpa menambah nilai baru ke sistem
   - C. mengganti token `--clr-accent` dengan nilai mentah di setiap halaman
   - D. menggantikan warna latar dengan bayangan kartu `--shadow-card`

8. Potongan markup tombol kustom Tokosaya yang benar untuk Bootstrap 5.3.3 adalah…
   - A. `<button type="button" class="btn btn-utama">Lihat Katalog</button>`
   - B. `<button type="button" class="btn-utama">Lihat Katalog</button>`
   - C. `<button type="button" class="btn-primary btn-utama-toko">Lihat Katalog</button>`
   - D. `<button type="button" class="btn-utama btn-outline-toko">Lihat Katalog</button>`

9. Delapan kartu produk Tokosaya di halaman katalog tampil dengan kelas `p-kartu` yang sama. Alat visual utama yang bekerja pada keputusan tersebut adalah…
   - A. whitespace
   - B. alignment
   - C. contrast
   - D. repetition

10. Pada `css/style.css` terdapat aturan `.p-kartu i { color: var(--clr-border); }`. Alasan ikon kategori sengaja diberi warna lembut adalah…
    - A. agar ikon tidak dibacakan oleh pembaca layar
    - B. agar ikon tidak berebut perhatian dengan judul sehingga hierarki kartu tetap jelas
    - C. agar ikon memenuhi ambang kontras elemen non-teks
    - D. agar ikon bisa diganti warna apa pun oleh Bootstrap

11. Dua kartu produk memakai badge berbeda — "Best Seller" dengan `--clr-accent` dan "Stok Terbatas" dengan `--clr-danger` — tetapi keduanya tetap memakai kelas `p-kartu`. Keputusan ini tepat karena…
    - A. badge adalah satu-satunya bagian kartu yang boleh berbeda antar varian
    - B. setiap kartu berhak memakai kelas bebas asal warnanya tetap dari token
    - C. varian kartu dibedakan lewat keadaan isinya (badge status), bukan lewat wujudnya, sehingga katalog tetap mudah dipindai
    - D. Bootstrap mewajibkan semua kartu memakai satu kelas dasar yang sama

12. Ketiga kelas varian tombol Tokosaya memuat properti `--bs-btn-focus-shadow-rgb: 79, 70, 229;` (nilai RGB dari indigo `#4F46E5`). Tujuan penulisan properti tersebut adalah…
    - A. mempercepat pemuatan CSS Bootstrap dari CDN
    - B. mengganti warna latar tombol saat disentuh kursor
    - C. menambahkan bayangan kartu pada tombol berstatus nonaktif
    - D. menyamakan warna sorotan fokus keyboard dengan warna utama Tokosaya, bukan biru bawaan Bootstrap

13. Seorang anggota tim perlu varian tombol baru untuk halaman promo. Tindakan yang paling sesuai dengan disiplin design system Tokosaya adalah…
    - A. menuliskan gaya tombol langsung pada elemen dengan atribut `style`
    - B. memakai kombinasi kelas Bootstrap yang berbeda dari styleguide tanpa mencatatnya
    - C. menambahkan kelas varian baru di `css/style.css` lalu langsung memasukkannya ke styleguide pada hari yang sama
    - D. membuat file CSS terpisah khusus halaman promo supaya halaman lain tidak terganggu

14. Tim promo mengajukan varian tombol "Beli Sekarang": latar `--clr-success`, sudut 4 piksel, dan hanya dipakai di halaman diskon. Evaluasi paling tepat menurut design system Tokosaya adalah…
    - A. diterima karena menambah keragaman visual halaman promo
    - B. ditolak karena 4 piksel melanggar token `--radius` dan warna sukses dipakai di luar perannya; varian sah sebaiknya diusulkan lewat matriks varian lalu didokumentasikan lebih dulu
    - C. diterima asalkan tombol itu hanya muncul satu kali per halaman
    - D. ditolak karena tombol tidak boleh memakai kelas kustom apa pun

15. Sebuah halaman baru Tokosaya terasa "kurang nyaman" padahal seluruh isinya sudah ada. Langkah diagnosis pertama yang paling tepat memakai kerangka bab ini adalah…
    - A. mengganti seluruh warna halaman mengikuti selera terbaru
    - B. menambah lebih banyak gambar agar halaman terasa penuh
    - C. memeriksa hierarki, konsistensi, usability, dan affordance, lalu menyebut alat visual (whitespace, alignment, contrast, repetition) yang bermasalah
    - D. menghapus aturan styleguide supaya halaman bebas berkreasi
