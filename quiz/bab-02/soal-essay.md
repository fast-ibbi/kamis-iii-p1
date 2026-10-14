# Soal Essay — Bab 02: HTML5 dan Struktur Semantik

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 5 soal essay · tingkat kesulitan campuran (C2–C5)
> Poin jawaban + bobot skor: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-essay.md](../soal-essay.md)

---

**Essay (5 soal)**

1. Bab ini menyebut tiga manfaat markup semantik: aksesibilitas, SEO dasar, dan keterbacaan kode untuk pemeliharaan. Pilih dua manfaat, lalu jelaskan bagaimana markup semantik mewujudkannya pada halaman company profile Tokosaya. Sertakan minimal satu contoh elemen pada penjelasanmu.

2. Jelaskan perbedaan link absolut dan link relatif beserta situasi pemakaiannya pada proyek Tokosaya yang terdiri dari beberapa halaman. Jelaskan pula kapan atribut `target="_blank"` beserta `rel="noopener"` dipakai, dan mengapa teks link harus deskriptif. Berikan contoh perbaikan untuk teks link "klik di sini".

3. Perhatikan potongan halaman yang sedang ditinjau tim berikut.

```html
<div class="kepala">
  <h1>Tokosaya</h1>
  <div class="menu">
    <a href="index.html">Beranda</a> |
    <a href="katalog.html">Katalog</a> |
    <a href="tentang.html">Tentang</a>
  </div>
</div>
<div class="isi">
  <h2>Produk Unggulan</h2>
  <img src="img/hero-tokosaya.svg">
  <p>Keyboard mekanis 87 tombol dengan switch biru.</p>
  <h4>Harga dan ketersediaan</h4>
</div>
```

Identifikasi minimal empat masalah semantik pada potongan di atas (kaitkan dengan landmark, hierarki heading, dan atribut gambar), lalu tuliskan bentuk perbaikannya.

4. Perhatikan potongan struktur form berikut.

```html
<form action="https://example.com/toko/kirim" method="post">
  <label>Nama Lengkap</label>
  <input type="text" name="nama">

  <label>Alamat Email</label>
  <input type="email" name="email">

  <textarea name="pesan" rows="5"></textarea>

  <button>Kirim Pesan</button>
</form>
```

Identifikasi minimal dua kelemahan aksesibilitas pada form tersebut, jelaskan dampaknya bagi pengguna pembaca layar, lalu tuliskan perbaikan markup-nya (sebutkan pasangan atribut yang nilainya harus sama).

5. Sebuah halaman Tokosaya dikembalikan dari hasil tinjauan dengan catatan: (a) tidak ada elemen `nav` yang membungkus menu utama; (b) satu `section` melompat dari `h2` ke `h4`; (c) dua gambar produk tidak memiliki `alt`; (d) belum ada elemen `main` sehingga pembaca layar tidak punya tujuan lompatan ke isi utama. Susun rencana perbaikan: urutkan prioritasnya, jelaskan alasan urutan itu, dan sebutkan dampak tiap perbaikan bagi pengguna, khususnya pengguna pembaca layar.
