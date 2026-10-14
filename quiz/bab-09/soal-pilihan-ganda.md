# Soal Pilihan Ganda — Bab 09: Pengenalan Bootstrap 5

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)
> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)

---

**Pilihan Ganda (15 soal)**

1. Menurut arsitektur Bootstrap 5.3, navbar, kartu, badge, dan alert termasuk kelompok fasilitas ....
   - A. Layout
   - B. Utilities
   - C. Components
   - D. Helpers

2. Cara yang benar memasang Bootstrap Icons 1.11.3 pada starter template Tokosaya adalah ....
   - A. menambahkan link stylesheet tersendiri, karena ikon tidak termuat di dalam file CSS inti Bootstrap
   - B. menambahkan file bootstrap.bundle agar kelas ikon aktif
   - C. memanggil kelas `bi bi-cart3` langsung, karena paket ikon sudah menyatu di dalam `bootstrap.min.css`
   - D. mendaftarkan font ikon lewat Google Fonts bersama Poppins dan Inter

3. Pada `css/style.css` proyek `tokosaya-bootstrap/` ditulis baris `--bs-primary-rgb: 79, 70, 229;`. Tujuan baris itu adalah ....
   - A. mendefinisikan ulang token `--clr-primary` milik identitas Tokosaya
   - B. menyelaraskan kelas warna bawaan Bootstrap yang mengonsumsi variabel tema tersebut (`text-primary`, `bg-primary`, badge) ke indigo Tokosaya
   - C. memberi tahu file bootstrap.bundle agar memakai palet Tokosaya
   - D. mengganti warna tombol `.btn-primary` secara langsung di dalam file pustaka

4. Menurut Bootstrap 5.3, lebar maksimum `.container` pada viewport 1400 px adalah ....
   - A. 960 px
   - B. 1140 px
   - C. 1200 px
   - D. 1320 px

5. Perhatikan kelas `p-lg-4`. Makna kelas itu adalah ....
   - A. padding keempat sisi skala 4 yang berlaku mulai breakpoint `lg` (992 px) ke atas
   - B. padding kiri-kanan skala 4 yang hanya berlaku di bawah 992 px
   - C. padding atas-bawah skala 4 yang berlaku mulai breakpoint `lg`
   - D. padding skala 4 yang baru diterapkan setelah JavaScript Bootstrap dimuat pada 992 px

6. Grid produk Tokosaya memuat delapan kartu; setiap kartu memakai kelas `col-12 col-md-6 col-lg-3` dan wadahnya memakai `row g-4`. Pada viewport 992 px, susunan yang terbentuk adalah ....
   - A. delapan baris dengan satu kartu per baris
   - B. dua baris dengan empat kartu per baris
   - C. satu baris dengan delapan kartu yang lebarnya mengecil tak beraturan
   - D. tiga kartu per baris sehingga tersisa dua kartu pada baris terakhir

7. Kelas `mx-auto` pada sebuah elemen blok berguna untuk ....
   - A. menghapus seluruh margin sehingga elemen menempel pada tepi wadah
   - B. memberi jarak otomatis atas-bawah sehingga elemen turun ke dasar wadah
   - C. memberi margin kiri dan kanan otomatis sehingga elemen tampil terletak di tengah
   - D. mengunci lebar elemen menjadi 100% lebar container

8. Kelompok fasilitas **Content** pada arsitektur Bootstrap 5.3 memuat ....
   - A. container dan grid system
   - B. navbar, kartu, badge, dan alert
   - C. kelas satu-tujuan seperti `mb-3` dan `text-center`
   - D. reboot (normalisasi gaya bawaan browser), tipografi, tabel, gambar, dan kode

9. Seorang mahasiswa mengeluh kartu produknya tetap bertumpuk penuh di layar desktop walaupun sudah diberi `col-lg-3`. Setelah diperiksa, kelas kolom itu ternyata dipasang pada elemen yang menjadi anak langsung `.container`, bukan `.row`. Alasan kegagalan layout tersebut adalah ....
   - A. kolom kehilangan kalkulasi gutter dan penyelajanan, sebab padding kolom tidak lagi dikompensasi margin negatif baris
   - B. kolom otomatis dinonaktifkan browser ketika elemen induknya bukan `.row`
   - C. `.container` menambahkan gutter ganda sehingga kolom melebar melebihi baris
   - D. `meta viewport` diabaikan browser selama struktur row → col belum lengkap

10. Halaman `index.html` Tokosaya tampil polos: huruf kembali ke fallback, tombol uji tidak bergaya, dan kolom kartu tidak berjajar, padahal markup serta nama kelas sudah benar. Langkah diagnosis paling tepat adalah ....
   - A. menambahkan kembali `bootstrap.bundle`, karena seluruh gaya komponen bergantung padanya
   - B. memeriksa `meta viewport`, sebab tanpa tag itu semua kelas gaya tidak akan termuat
   - C. membuka panel Network DevTools untuk memastikan kedua link CDN CSS berstatus sukses (200) dan berada sebelum `css/style.css`
   - D. mengunduh ZIP Bootstrap lalu menyalinnya ke folder proyek sebagai pengganti CDN

11. Pada section keunggulan Tokosaya, judul kartu ditulis sebagai `<h3 class="h5">`. Alasan pemakaian pola itu adalah ....
   - A. karena elemen `div` tidak boleh memuat kelas ukuran milik Bootstrap
   - B. karena `h3` memiliki specificity lebih tinggi sehingga warna token pasti menang
   - C. karena kelas `h5` otomatis menambahkan struktur kepala yang hilang pada `div`
   - D. karena struktur kepala yang semantik tetap terbaca pembaca layar, sedangkan kelas ukuran hanya mengubah tampilan visualnya

12. Setelah `--bs-primary-rgb` disesuaikan ke nilai indigo Tokosaya, kelas `text-primary` dan badge `text-bg-primary` ikut berpindah warna, tetapi tombol bawaan `.btn-primary` tetap biru. Evaluasi yang paling tepat adalah ....
   - A. tombol akan berubah warna hanya bila file `bootstrap.bundle` ikut dimuat
   - B. warna tombol bawaan dikomposisi statis di dalam file pustaka, sehingga identitas tombol dibentuk kelas kustom (`btn-tokosaya`) yang disandingkan dengan kelas `btn`
   - C. variabel `--bs-primary-rgb` hanya berlaku untuk kelas berbasis teks, tidak untuk latar maupun tombol
   - D. tombol bawaan memakai variabel tema yang hanya bisa diubah dengan mengedit file `bootstrap.min.css`

13. Pada landing page Tokosaya, rupa kartu produk dan rupa harga muncul berulang pada delapan kartu. Keputusan yang paling sesuai dengan aturan pembagian utility dan kelas kustom pada bab ini adalah ....
   - A. mengangkatnya menjadi kelas kustom berpola blok-elemen (`produk-card`, `produk-harga`) di `css/style.css`, sehingga satu perubahan memperbarui seluruh tempat pemakaiannya
   - B. menempelkan belasan kelas utility pada setiap kartu karena cara itu paling ringkas dibaca
   - C. memakai atribut `style` pada tiap elemen kartu agar tidak ada baris baru di `css/style.css`
   - D. menimpa kelas `.card` dan `.card-body` milik Bootstrap langsung di dalam file pustaka

14. Sebuah UMKM memesan satu landing page kampanye seni berisi satu halaman, desainnya sangat khas dan hampir tidak ada pola yang berulang, serta tenggatnya longgar. Keputusan teknologi paling tepat menurut kerangka bahasan bab ini adalah ....
   - A. Bootstrap dengan overlay token, karena pustaka selalu mempercepat pekerjaan
   - B. Bootstrap plus `bootstrap.bundle` agar komponennya hidup
   - C. Tailwind CSS karena markup wajib memuat banyak kelas atomik
   - D. HTML/CSS murni berbasis design token, karena polanya tidak berulang dan identitas khas justru jadi prioritas

15. Portal akademik dengan 40 tampilan serupa harus dikerjakan tiga anggota tim yang masih pemula dalam tiga minggu, sementara warna dan huruf identitas kampus wajib dipertahankan. Keputusan dan alasan yang paling sesuai dengan bab ini adalah ....
   - A. Tailwind CSS, dengan alasan kelas atomik menjamin markup yang ringkas pada proyek besar
   - B. HTML/CSS murni dari nol, dengan alasan identitas pasti terjaga tanpa perlu belajar pustaka
   - C. Bootstrap 5.3.3 via CDN plus lapisan design token kustom, dengan alasan pola tampilan berulang, tenggat ketat, kurva awal yang landai, dan identitas dijaga lapisan overlay
   - D. Bootstrap tanpa lapisan kustom, dengan alasan warna bawaan pustaka sudah cukup konsisten
