# Soal Pilihan Ganda — Bab 03: Dasar-Dasar CSS

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)
> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)

---

**Pilihan Ganda (15 soal)**

1. Pasangan `properti: nilai;` seperti `color: #1E293B;` di dalam blok deklarasi disebut …
   - A. *selector*
   - B. *cascade*
   - C. *declaration*
   - D. *specificity*

2. Kamu ingin menguji satu ide gaya dan gaya itu cukup berlaku untuk satu halaman saja. Penempatan yang tepat beserta jangkauannya adalah …
   - A. atribut `style` pada elemen — jangkauannya satu elemen
   - B. elemen `<style>` di dalam `head` — jangkauannya satu halaman
   - C. berkas `style.css` di folder `css/` — jangkauannya satu elemen
   - D. elemen `<link>` di dalam `body` — jangkauannya satu halaman

3. Kata *cascading* pada nama *Cascading Style Sheets* paling tepat menjelaskan …
   - A. cara browser mengumpulkan banyak aturan lalu memilih pemenang saat ada nilai yang bertabrakan
   - B. cara nilai properti teks menurun dari elemen induk ke elemen anak
   - C. cara browser mengunduh berkas gaya sedikit demi sedikit supaya halaman cepat tampil
   - D. cara penulis menyusun aturan dari yang paling umum menuju yang paling khusus

4. Properti berikut yang nilainya diwariskan dari elemen induk ke elemen anak adalah …
   - A. `border`
   - B. `padding`
   - C. `margin`
   - D. `color`

5. Nilai *specificity* dari selector `.site-nav a:focus` adalah …
   - A. (0, 2, 1)
   - B. (0, 1, 1)
   - C. (1, 2, 1)
   - D. (0, 2, 2)

6. Pada halaman katalog Tokosaya, kamu ingin menyasar setiap `li` di dalam elemen ber-*class* `menu-list`, tanpa peduli seberapa dalam posisinya. Selector *descendant* yang tepat adalah …
   - A. `li .menu-list`
   - B. `li.menu-list`
   - C. `.menu-list li`
   - D. `.menu-list, li`

7. Perhatikan tabel jadwal pengiriman berikut.

```html
<table class="tabel-jadwal">
  <thead>
    <tr><th>Hari</th><th>Jam Kirim</th></tr>
  </thead>
  <tbody>
    <tr><td>Senin</td><td>08.00–15.00</td></tr>
    <tr><td>Selasa</td><td>08.00–15.00</td></tr>
    <tr><td>Rabu</td><td>08.00–15.00</td></tr>
  </tbody>
</table>
```

   Supaya **hanya baris isi** tabel (`tbody`) yang mendapat latar berselang-seling `#F8FAFC` sementara baris judul di `thead` tetap tanpa latar, aturan yang tepat adalah …
   - A. `.tabel-jadwal tr:nth-child(odd) { background-color: #F8FAFC; }`
   - B. `.tabel-jadwal tbody tr:nth-child(odd) { background-color: #F8FAFC; }`
   - C. `.tabel-jadwal tbody tr:first-child { background-color: #F8FAFC; }`
   - D. `.tabel-jadwal th:nth-child(odd) { background-color: #F8FAFC; }`

8. Perhatikan potongan gaya pada bagian CTA landing page Tokosaya berikut.

```css
a {
  color: #4F46E5;
}

.cta-button {
  color: #FFFFFF;
}

.cta .cta-button {
  color: #F59E0B;
}

#kontak .cta-button {
  color: #1E293B;
}
```

```html
<section class="cta" id="kontak">
  <a href="kontak.html" class="cta-button">Hubungi Kami</a>
</section>
```

   Warna teks yang akhirnya tampak pada tombol tersebut, beserta aturan pemenangnya, adalah …
   - A. `#4F46E5` — dari selector elemen `a`
   - B. `#FFFFFF` — dari selector class `.cta-button`
   - C. `#F59E0B` — dari selector `.cta .cta-button`
   - D. `#1E293B` — dari selector `#kontak .cta-button`

9. Rekan timmu menuliskan aturan pseudo-class seperti berikut.

```css
.site-nav a {
  color: #1E293B;
  text-decoration: none;
}

.site-nav a :hover {
  color: #4F46E5;
}
```

   Ketika kursor diarahkan ke link navigasi, warna indigo tidak pernah muncul. Penyebabnya adalah …
   - A. `:hover` hanya bekerja pada elemen `button` dan `input`
   - B. ada spasi antara `a` dan `:hover`, sehingga selector menyasar elemen di dalam link, bukan keadaan link itu sendiri
   - C. `:hover` harus ditulis pada baris paling akhir berkas CSS
   - D. warna `#4F46E5` sudah dipakai aturan global `a`, sehingga nilainya ditimpa

10. Pada berkas gaya sebuah halaman Tokosaya dituliskan:

```css
.catatan {
  font-size: 0.875rem;
  padding-left: 2em;
}
```

   Dengan setelan ukuran font akar 16px, jarak kiri yang dihasilkan oleh `padding-left: 2em` pada elemen tersebut adalah …
   - A. 14px
   - B. 16px
   - C. 28px
   - D. 32px

11. Perhatikan susunan tag di dalam `head` sebuah dokumen dan berkas eksternalnya.

```html
<head>
  <style>
    p { color: #DC2626; }
  </style>
  <link rel="stylesheet" href="css/style.css">
</head>
```

```css
/* css/style.css */
p {
  color: #334155;
}
```

   Warna yang tampak pada paragraf halaman tersebut adalah …
   - A. `#DC2626`, karena blok `<style>` selalu menang atas berkas eksternal
   - B. `#334155`, karena kekuatan keduanya setara sehingga aturan yang muncul belakangan dalam dokumen menang
   - C. `#DC2626`, karena selector pada blok internal dihitung lebih spesifik daripada selector eksternal
   - D. kedua warna diterapkan bergantian oleh browser pada tiap pemuatan ulang

12. Halaman "Jam Layanan" sebuah kantor pelayanan menempelkan atribut `style` di hampir setiap tag. Ketika warna identitas unit berubah, hanya sebagian halaman ikut berubah dan biaya perawatan membengkak. Tindakan perbaikan yang paling tepat adalah …
   - A. menghapus atribut `style` sambil memindahkan nilainya ke class berbasis peran di satu berkas `style.css` eksternal
   - B. menambah aturan baru di blok `<style>` setiap halaman sampai bisa menimpa gaya inline
   - C. menaikkan kekhususan selector dengan `#id` pada setiap elemen yang masih punya gaya inline
   - D. menambahkan `!important` pada semua deklarasi baru supaya konsisten menang

13. Tim desain meminta outline fokus dihapus dari semua link supaya tampilan terlihat lebih bersih. Evaluasi yang paling tepat terhadap permintaan itu adalah …
   - A. permintaan itu aman diikuti karena outline hanya muncul di browser lama
   - B. permintaan itu sebaiknya diikuti, tetapi dikompensasi dengan mempertebal garis bawah link
   - C. permintaan itu ditolak; indikator fokus yang jelas seperti `outline: 2px solid #4F46E5` adalah penanda posisi utama bagi pengguna keyboard
   - D. permintaan itu ditolak hanya untuk elemen form, sedangkan link bebas dihapus outline-nya

14. Kamu membuat komponen badge status stok yang menempel di kartu produk Tokosaya dan akan dipakai berulang di banyak kartu. Nama class yang paling sesuai dengan konvensi penamaan bab ini adalah …
   - A. `.badge-stok`
   - B. `.badgeStok`
   - C. `.badge_stok_kecil_putih`
   - D. `.BadgeStok`

15. Kamu memberi atribut `class="badge-baru"` pada elemen `<span>` badge produk unggulan Tokosaya. Badge ingin tampil dengan teks putih, latar indigo brand, dan tepi tipis 1px abu terang. Aturan CSS yang benar adalah …
   - A. `#badge-baru { color: #FFFFFF; background-color: #4F46E5; border: 1px solid #E2E8F0; }`
   - B. `.badge-baru { color: #4F46E5; background-color: #FFFFFF; border: 1px solid #E2E8F0; }`
   - C. `badge-baru { color: #FFFFFF; background-color: #4F46E5; border: 1px solid #E2E8F0; }`
   - D. `.badge-baru { color: #FFFFFF; background-color: #4F46E5; border: 1px solid #E2E8F0; }`
