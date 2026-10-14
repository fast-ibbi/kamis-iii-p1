# Kuis Ringkas — Bab 02: HTML5 dan Struktur Semantik

> Frontend Development & Web Design · Semester III · _Kuis Ringkas per Bab_
> 10 soal (5 pilihan ganda + 5 isian singkat) · estimasi waktu ±15 menit · tingkat kesulitan campuran (C1–C4)
> Kunci + pembahasan: [kunci-kuis-ringkas.md](kunci-kuis-ringkas.md) · Bank lengkap 14 bab: [kuis-ringkas.md](../kuis-ringkas.md)

---

**Bagian A — Pilihan Ganda (5 soal)**

1. Setiap halaman Tokosaya diawali elemen `<html lang="id">`. Tujuan utama atribut `lang="id"` adalah...
   - A. memberi tahu browser bahasa halaman sehingga pembaca layar melafalkan kata dengan aturan yang tepat, kamus memeriksa ejaan, dan mesin dapat menerjemahkan konten
   - B. mengatur pengodean karakter agar teks seperti "Kirim Cepat" dan tanda "—" tampil dengan benar
   - C. memberi tahu mesin pencari bahwa halaman hanya boleh ditampilkan kepada pengunjung dari Indonesia
   - D. menetapkan agar lebar halaman menyesuaikan lebar layar perangkat pengunjung

2. Pada ilustrasi hero Tokosaya, gambar ditulis sebagai `<img src="img/hero-tokosaya.svg" alt="Ilustrasi peralatan kerja digital: keyboard, mouse, dan monitor Tokosaya" width="800" height="320">`. Atribut `width` dan `height` disertakan terutama untuk...
   - A. memberi tahu browser ukuran alternatif yang dipakai bila gambar gagal dimuat
   - B. memesan ruang gambar sebelum file termuat sehingga halaman tidak melompat saat gambar muncul
   - C. mengunci ukuran tampilan gambar agar tidak dapat diubah oleh aturan CSS
   - D. mempercepat pengunduhan karena browser memakai ukuran itu untuk mengecilkan file gambar

3. Logo Tokosaya di header ditulis sebagai `<img src="img/logo-tokosaya.svg" alt="Logo Tokosaya" width="48" height="48">` tanpa `figure`, sedangkan ilustrasi hero dibungkus `<figure>` dengan `<figcaption>` di dalamnya. Alasan yang paling tepat untuk perbedaan itu adalah...
   - A. `figure` dan `figcaption` hanya boleh dipakai satu kali dalam satu halaman
   - B. logo merupakan gambar dekoratif sehingga teks alternatifnya seharusnya dikosongkan
   - C. ilustrasi hero memiliki keterangan yang perlu terikat pada gambarnya, sedangkan `alt` logo sudah cukup menjelaskan fungsinya
   - D. `figcaption` wajib menyertai setiap gambar yang berukuran lebih dari 300 piksel

4. Tim Tokosaya memilih elemen untuk satu kartu produk unggulan yang memuat nama, harga, dan deskripsi singkat. Ketika kartu itu dipindah ke halaman lain, isinya tetap lengkap dan masuk akal. Elemen yang paling tepat untuk kartu tersebut adalah...
   - A. `aside`, karena kartu ditempatkan di tepi halaman
   - B. `div`, karena kartu hanya berfungsi sebagai pembungkus penataan CSS
   - C. `section`, karena kartu merupakan bagian dari himpunan produk unggulan
   - D. `article`, karena isinya lengkap dan dapat berdiri sendiri di luar halaman asalnya

5. Pada peninjauan `tentang.html`, tim menemukan urutan heading `h1` → `h2` → `h4`. Penulisnya beralasan `h3` tampil terlalu kecil sehingga ia memakai `h4`. Perbaikan yang tepat adalah...
   - A. memakai `h3` dan mengatur ukuran hurufnya lewat CSS, karena level heading dipilih menurut tingkatan informasi
   - B. memakai `h4` lalu menambahkan `h3` di bagian akhir agar semua level terpakai
   - C. mengganti heading tersebut dengan paragraf tebal supaya tidak ada level yang terlompati
   - D. memakai `h2` pada bagian itu karena satu halaman sebaiknya tidak memakai `h3`

**Bagian B — Isian Singkat (5 soal)**

6. Setiap halaman Tokosaya memuat `<meta charset="UTF-8">` di dalam `head`. Apa fungsi deklarasi itu, dan apa yang dapat terjadi bila deklarasi tersebut dihapus?

7. Halaman katalog akan menampilkan dua daftar: (a) daftar merek komputer yang kedudukannya setara tanpa urutan tertentu dan (b) langkah pembelian yang harus dijalankan berurutan. Sebutkan jenis list yang tepat untuk masing-masing beserta elemen butirnya.

8. Sebuah rancangan halaman menyusun dua kolom dengan `<table>`, `<tr>`, dan `<td>` agar tampak rapi sebelum CSS dipelajari. Mengapa pilihan itu keliru menurut bab ini?

9. Form kontak Tokosaya memuat kontrol `<textarea name="pesan">`. Agar labelnya terhubung dengan benar, pasangan atribut apa yang harus dipasang pada `<label>` dan `<textarea>`, dan apa akibatnya bila hubungan itu tidak dibuat?

10. Pada footer, alamat, email, dan telepon Tokosaya ditulis di dalam `<address>`, bukan `<p>` biasa. Apa yang ditandai elemen itu, dan mengapa pilihan tersebut lebih tepat?
