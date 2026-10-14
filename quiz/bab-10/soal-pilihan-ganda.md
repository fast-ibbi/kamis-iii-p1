# Soal Pilihan Ganda — Bab 10: Komponen Bootstrap

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)
> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)

---

**Pilihan Ganda (15 soal)**

1. Komponen antarmuka (*component*) di Bootstrap adalah potongan antarmuka yang sudah dikemas lengkap. Manakah yang paling tepat menggambarkan isi kemasan itu?
   - A. Daftar tautan dokumentasi resmi beserta nomor versinya
   - B. Struktur *markup* standar, kelas-kelas gaya, dan aturan tampilan di berbagai ukuran layar
   - C. Berkas JavaScript penggerak interaksi beserta berkas konfigurasi temanya
   - D. Kumpulan gambar produk dan ikon siap pakai yang tinggal disisipkan
2. Bab ini menyebut tiga alasan komponen siap pakai menekan biaya desain. Manakah pernyataan yang termasuk ketiganya?
   - A. Seluruh CSS kustom boleh dihapus dari proyek
   - B. Komponen menggantikan peran server dalam menyimpan data produk
   - C. Kartu di halaman berbeda otomatis mirip karena memakai kelas yang sama
   - D. Halaman tetap tampil utuh meski berkas CDN gagal dimuat
3. Tokosaya tidak memuat paket JavaScript Bootstrap sama sekali. Bagaimana menu `navbar-nav` yang ditulis tanpa tombol pembuka tampil pada lebar layar 480 piksel?
   - A. Menumpuk vertikal di bawah merek
   - B. Tetap mendatar berjajar ke kanan
   - C. Tersembunyi sampai tombol hamburger ditekan
   - D. Berubah menjadi daftar tarik-turun
4. Produk Speaker Bluetooth BT-5 berstatus "Stok Terbatas" pada katalog Tokosaya. Markup badge yang benar sekaligus sesuai makna semantiknya adalah …
   - A. `<span class="badge text-bg-warning">Stok Terbatas</span>`
   - B. `<span class="badge text-bg-primary">Stok Terbatas</span>`
   - C. `<span class="badge text-bg-success">Stok Terbatas</span>`
   - D. `<span class="badge text-bg-danger">Stok Terbatas</span>`
5. Empat berkas berikut ditulis di dalam `head`. Urutan yang benar agar aturan kustom Tokosaya berkesempatan menimpa gaya Bootstrap adalah …
   - A. `css/style.css`, Bootstrap 5.3.3 CSS, Bootstrap Icons 1.11.3, Google Fonts
   - B. Bootstrap 5.3.3 CSS, Bootstrap Icons 1.11.3, Google Fonts, `css/style.css`
   - C. Bootstrap Icons 1.11.3, `css/style.css`, Bootstrap 5.3.3 CSS, Google Fonts
   - D. Google Fonts, `css/style.css`, Bootstrap 5.3.3 CSS, Bootstrap Icons 1.11.3
6. Perhatikan potongan *navbar* berikut.

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand fw-semibold" href="index.html">Tokosaya</a>
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><a class="nav-link" href="index.html">Beranda</a></li>
      <li class="nav-item"><a class="nav-link active" aria-current="page" href="katalog.html">Katalog</a></li>
    </ul>
  </div>
</nav>
```

Susunan yang teramati pada lebar 1200 piksel adalah …
   - A. Merek di kiri, daftar menu berjajar mendatar di sisi kanan pada satu baris
   - B. Merek di atas, daftar menu menumpuk vertikal di bawahnya
   - C. Daftar menu di kiri, merek terdorong ke kanan
   - D. Merek tampil, tetapi daftar menu tidak terlihat karena tidak ada tombol pembuka
7. Pada *pagination*, Bootstrap menyarankan item berstatus aktif maupun `disabled` ditulis memakai elemen `span`, bukan `a`. Alasan yang paling tepat adalah …
   - A. elemen `a` tidak dapat diberi kelas `page-link`
   - B. elemen `span` membuat nomor halaman tampil lebih tebal
   - C. item aktif dan item `disabled` bukan tautan tujuan, jadi tidak pantas menjanjikan perpindahan halaman
   - D. elemen `a` hanya boleh dipakai di dalam komponen *navbar*
8. Pada contoh kartu produk Tokosaya, badge di baris pertama `card-body` diberi utilitas `align-self-start`. Manfaat kelas itu adalah …
   - A. memindahkan badge ke sudut kanan atas kartu
   - B. menyembunyikan badge sampai kartu diarahkan penunjuk tetikus
   - C. membuat badge melebar mengikuti lebar kartu
   - D. membuat badge hanya selebar isinya, tidak melar mengikuti lebar wadah flex
9. Perhatikan potongan *accordion* statis berikut.

```html
<div class="accordion-item">
  <h2 class="accordion-header">
    <button type="button" class="accordion-button collapsed">Apakah ada garansi produk?</button>
  </h2>
  <div class="accordion-collapse collapse">
    <div class="accordion-body">Garansi mengikuti ketentuan merek masing-masing produk.</div>
  </div>
</div>
```

Pada halaman yang tidak memuat paket JavaScript, keadaan panel itu beserta yang terjadi saat tombolnya diklik adalah …
   - A. panel terbuka dan klik menutupnya
   - B. panel tertutup dan tetap tertutup karena klik tidak mengubah apa pun
   - C. panel tertutup, tetapi klik membukanya karena itu efek CSS murni
   - D. panel tampil tanpa bingkai sebab kelas `collapse` tidak dikenali CSS
10. Katalog Tokosaya menyusun kartu produk lewat `row g-4` dan sel `col-*`, bukan lewat `card-group`. Alasan yang paling tepat untuk pilihan itu adalah …
   - A. `card-group` tidak mendukung gambar `card-img-top`
   - B. `card-group` hanya sanggup memuat tiga kartu sekaligus
   - C. `card-group` baru bekerja kalau paket JavaScript Bootstrap dimuat
   - D. `card-group` menempelkan kartu menjadi satu bingkai, sedangkan lewat grid jarak antarkartu bisa dikendalikan `g-4`
11. Sebuah item *list group* belum menampilkan status di sisi kanan seperti contoh bab ini.

```html
<ul class="list-group">
  <li class="list-group-item">
    <span>Keyboard Mekanis KX-210</span>
    <span class="badge text-bg-warning">Best Seller</span>
  </li>
</ul>
```

Kelas yang perlu ditambahkan pada elemen `li` agar isi kiri dan status kanan terpisah rapi adalah …
   - A. `d-grid gap-2`
   - B. `flex-row-reverse`
   - C. `d-flex justify-content-between align-items-center`
   - D. `position-absolute end-0`
12. Ikon pencarian pada bar penyaring katalog ingin dibuat lebih besar dan diwarnai indigo sesuai token proyek. Cara yang paling sesuai aturan pemakaian Bootstrap Icons adalah …
   - A. membuat berkas SVG baru berukuran besar
   - B. menuliskan `width` dan `height` *inline* pada elemen `<i>`
   - C. mengganti elemen `<i>` menjadi `<img>` berisi ikon
   - D. menaikkan ukuran teks wadahnya dengan kelas `fs-*` dan memberi warna dengan kelas `text-*`
13. Sebuah katalog memasang status "Terlambat" hanya sebagai ikon merah tanpa kata pendamping di ujung baris daftar buku. Evaluasi yang paling sesuai dengan ketentuan ikon dan badge pada bab ini adalah …
   - A. ganti ikon itu menjadi badge berwarna semantik (`text-bg-danger`) bertulis "Terlambat" agar maknanya tidak bergantung pada warna dan lambang saja
   - B. ikon merah sudah cukup karena warnanya mencolok dan menarik perhatian
   - C. ikon diperbesar dan dipindahkan ke sisi kanan baris supaya lebih terlihat
   - D. statusnya dihapus saja karena dapat menyinggung peminjam
14. Kamu merancang kartu ruang ujian untuk sistem informasi akademik. Syaratnya: foto ruang di tepi atas, badge status kapasitas, judul ruang, dan baris tombol yang tetap menempel dasar kartu walau nama ruangnya panjang-pendek. Kombinasi kelas yang tepat adalah …
   - A. `card-body` + `d-grid` + `text-end`
   - B. `card` + `card-img-top` + `card-body` + `align-self-start`
   - C. `card h-100` + `card-img-top` + `card-body d-flex flex-column` + `mt-auto` pada baris tombol
   - D. `card` + `card-group` + `card-subtitle` + `text-nowrap`
15. Alternatif statis yang dipakai buku ini agar panel menu tetap tampil tanpa JavaScript adalah …
   - A. membungkus daftar menu dengan `<div class="collapse show navbar-collapse">` sehingga panel terbuka permanen
   - B. menambahkan atribut `data-bs-toggle="collapse"` pada tautan menu
   - C. menyembunyikan panel dengan `d-none` lalu memunculkannya lewat `:hover`
   - D. memberi atribut `tabindex="-1"` pada panel menu
