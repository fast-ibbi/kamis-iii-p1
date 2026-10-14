# Soal Pilihan Ganda — Bab 02: HTML5 dan Struktur Semantik

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)
> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)

---

**Pilihan Ganda (15 soal)**

1. Wilayah halaman seperti `main` dan `nav` yang dikenali pembaca layar sebagai tujuan navigasi cepat disebut...
   - A. markup
   - B. landmark
   - C. hierarki heading
   - D. meta description

2. Fungsi `<meta name="description" content="...">` pada bagian `head` adalah...
   - A. ringkasan satu kalimat tentang tujuan halaman yang kerap ditampilkan mesin pencari di bawah hasil pencarian
   - B. mengatur pengodean karakter agar tanda "—" tampil benar
   - C. membuat lebar halaman mengikuti lebar perangkat
   - D. menentukan teks yang tampil pada tab browser

3. Untuk menyorot kata kunci hasil pencarian di dalam sebuah paragraf, elemen yang paling tepat adalah...
   - A. `strong`, karena menandai bagian yang penting
   - B. `em`, karena menandai bagian yang perlu dibaca dengan penekanan
   - C. `mark`, karena menandai teks yang relevan dalam konteks tertentu
   - D. `h3`, karena berfungsi sebagai subjudul kata kunci

4. Ketika sebuah link mengarah ke sumber eksternal dan sengaja dibuka di tab baru, pasangan atribut yang tepat dipakai adalah...
   - A. `href` dan `lang`
   - B. `method` dan `name`
   - C. `scope` dan `id`
   - D. `target="_blank"` dan `rel="noopener"`

5. Mengapa teks link sebaiknya deskriptif, misalnya "Baca aturan penukaran barang" alih-alih "klik di sini"?
   - A. karena teks link deskriptif membuat halaman otomatis lebih cepat dimuat
   - B. karena pembaca layar dapat menjumpai teks link tunggal di luar kalimatnya, sehingga frasa yang kabur kehilangan makna
   - C. karena mesin pencari menolak halaman yang memuat frasa "klik di sini"
   - D. karena teks link yang panjang menghilangkan kebutuhan atribut `alt` pada gambar

6. Sebuah gambar memuat grafik rekap penjualan yang menunjukkan kenaikan pesanan bulan ini. Teks `alt` yang paling tepat untuk gambar itu adalah...
   - A. `alt="gambar"`
   - B. `alt="grafik-penjualan.png"`
   - C. `alt="Grafik penjualan bulan ini menunjukkan kenaikan pesanan sekitar 20 persen dibanding bulan lalu"`
   - D. `alt="klik di sini"`

7. Panel "Produk Terlaris" di tepi halaman Tokosaya berisi tautan produk populer dan dapat dihapus tanpa merusak isi utama. Elemen semantik yang paling tepat untuk panel itu adalah...
   - A. `aside`
   - B. `main`
   - C. `footer`
   - D. `nav`

8. Menurut bab ini, tidak setiap gugus link harus dibungkus `nav`. Gugus link yang paling tepat memakai `nav` adalah...
   - A. deretan tautan sumber di dalam satu paragraf artikel
   - B. seluruh teks yang kebetulan memuat tanda hubung
   - C. tautan surel `mailto:` di dalam `address`
   - D. menu navigasi utama situs, dan bila perlu menu di footer

9. Potongan `<time datetime="2026-02-10">10 Februari 2026</time>` pada footer menunjukkan bahwa...
   - A. tanggal itu otomatis dibacakan sebagai `h2` oleh pembaca layar
   - B. waktu ditulis dengan teks yang mudah dibaca manusia sekaligus nilai mesin yang dapat dipahami mesin
   - C. waktu hanya tampil bila halaman memuat JavaScript
   - D. atribut `datetime` mengubah format tanggal mengikuti zona waktu pengunjung

10. Perhatikan potongan tabel berikut.

```html
<table>
  <caption>Produk unggulan</caption>
  <thead>
    <tr>
      <th scope="col">Produk</th>
      <th scope="col">Harga</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Keyboard Mekanis KX-210</th>
      <td>Rp650.000</td>
    </tr>
  </tbody>
</table>
```

Saat pengguna pembaca layar berpindah ke sel harga "Rp650.000", konteks yang paling mungkin diumumkan adalah...
   - A. "Rp650.000, sel" tanpa konteks apa pun
   - B. "Produk, Harga, Rp650.000" karena hanya judul kolom yang dibacakan
   - C. "Keyboard Mekanis KX-210, Rp650.000" karena nama produk berperan sebagai header baris
   - D. "caption, thead, tbody, Rp650.000" karena nama elemen tabel dibacakan

11. Navigasi utama Tokosaya memakai atribut `aria-label="Navigasi utama"`. Tujuan utama atribut itu adalah...
   - A. membedakan navigasi utama dari navigasi lain, misalnya menu di footer, saat dibacakan pembaca layar
   - B. memberi warna khusus pada menu utama ketika CSS dipasang
   - C. memberi tahu mesin pencari bahwa halaman hanya memiliki satu `h1`
   - D. menandai bahwa semua link di dalamnya bersifat eksternal

12. Halaman kontak Tokosaya memuat formulir pesan yang datanya akan dikirim ke layanan penerima melalui atribut `action`. Pilihan metode yang paling tepat beserta alasannya adalah...
   - A. `get`, karena data pesan lebih mudah dibaca pada bilah alamat
   - B. `get`, karena halaman statis tidak mendukung metode `post`
   - C. `post`, karena formulir tanpa metode akan gagal dikirim oleh browser
   - D. `post`, karena formulir itu berisi data pesan yang diketik pengguna

13. Seorang pelanggan tunanetra ingin melewati menu yang sama di setiap halaman dan langsung menuju isi utama. Markup yang paling membantu kebutuhan itu adalah...
   - A. `meta description` pada `head`
   - B. elemen `main` sebagai landmark, karena pembaca layar menyediakan lompatan cepat ke wilayah tersebut
   - C. atribut `width` dan `height` pada setiap gambar
   - D. `caption` pada setiap tabel halaman

14. Halaman `index.html` dan `tentang.html` Tokosaya memakai `header` dan `footer` dengan markup yang identik. Manfaat utama konsistensi itu adalah...
   - A. setiap halaman otomatis memiliki dua elemen `main`
   - B. tag pada kedua halaman menjadi lebih pendek sehingga ukuran file mengecil
   - C. penataan memakai satu set selector dan pemeliharaan lintas halaman lebih mudah, sekaligus memperkuat identitas website
   - D. mesin pencari menolak halaman yang headernya berbeda antarhalaman

15. Kamu diminta menyusun bagian "Nilai Layanan Tokosaya" yang memuat pasangan istilah dan penjelasan: Harga jujur, Layanan cepat, dan Dampingan memilih. Potongan markup yang paling tepat adalah...
   - A. `dl` berisi pasangan `dt` (istilah) dan `dd` (penjelasan) untuk tiap nilai layanan
   - B. `ol` berisi tiga `li` karena nilai layanan harus dibaca berurutan
   - C. `table` berisi tiga baris `td` untuk istilah dan penjelasannya
   - D. `aside` berisi satu paragraf yang menggabungkan ketiga nilai layanan
