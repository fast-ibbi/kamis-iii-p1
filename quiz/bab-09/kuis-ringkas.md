# Kuis Ringkas — Bab 09: Pengenalan Bootstrap 5

> Frontend Development & Web Design · Semester III · _Kuis Ringkas per Bab_
> 10 soal (5 pilihan ganda + 5 isian singkat) · estimasi waktu ±15 menit · tingkat kesulitan campuran (C1–C4)
> Kunci + pembahasan: [kunci-kuis-ringkas.md](kunci-kuis-ringkas.md) · Bank lengkap 14 bab: [kuis-ringkas.md](../kuis-ringkas.md)

---

**Bagian A — Pilihan Ganda (5 soal)**

1. Tim Tokosaya membuka halaman baru di folder `tokosaya-bootstrap/` dan memasang Bootstrap 5.3.3 melalui CDN. URL link yang tepat sesuai versi terkunci pada bab ini adalah...
   - A. `https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/css/bootstrap.min.css`
   - B. `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`
   - C. `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js`
   - D. `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css`

2. Section keunggulan Tokosaya ditulis sebagai `<div class="row g-4">`. Fungsi kelas `g-4` pada elemen tersebut adalah...
   - A. memberi padding skala 4 pada keempat sisi setiap kolom
   - B. membagi lebar baris menjadi empat bagian yang sama besar
   - C. mengatur *gutter*, yaitu jarak antarkolom sekaligus antarbaris, pada skala 4
   - D. menambah jarak luar elemen baris terhadap container sebesar skala 4

3. Footer gelap dan bilah pengumuman landing page Tokosaya harus memenuhi lebar layar dari tepi ke tepi pada semua ukuran perangkat. Kelas wadah yang paling tepat untuk kebutuhan tersebut adalah...
   - A. `.container-fluid`
   - B. `.container`
   - C. `.container-md`
   - D. `.container-xl`

4. Pada `tokosaya-bootstrap/latihan-grid.html` terdapat satu baris berisi `<div class="col-12 col-lg-8">` dan `<div class="col-12 col-lg-4">`. Ketika halaman dibuka pada viewport 1000 px, susunan yang tampil adalah...
   - A. kedua panel bertumpuk penuh karena breakpoint `lg` belum tercapai
   - B. kedua panel tampil sebaris dengan lebar yang sama besar
   - C. panel sidebar tersembunyi karena sisa garis penggaris tidak mencukupi
   - D. kedua panel tampil sebaris dengan konten utama dua kali lebih lebar daripada sidebar

5. Badge "Tersedia" pada kartu produk Tokosaya memakai kelas `text-bg-success`. Makna pola kelas `text-bg-*` tersebut adalah...
   - A. memberi warna hijau pada teks badge tanpa mengubah latarnya
   - B. memberi garis tepi hijau dengan latar transparan agar badge tampak ringan
   - C. memberi latar penuh berwarna peran `success` dengan warna teks otomatis kontras; `success` menunjuk peran warnanya, bukan nama warna mentah
   - D. menyesuaikan warna badge dengan tema gelap atau terang perangkat pengunjung

**Bagian B — Isian Singkat (5 soal)**

6. Kelas responsif Bootstrap bekerja *mobile-first*. Sebutkan lebar viewport saat kelas berawalan `md` mulai berlaku, lalu jelaskan sampai lebar berapa kelas itu tetap aktif.

7. *Starter template* proyek `tokosaya-bootstrap/` memuat empat link berurutan di dalam `head`. Tuliskan urutan keempat link tersebut dan sebutkan link yang wajib berada paling belakang.

8. Terjemahkan pasangan kelas `px-4 py-2` menjadi kalimat sisi dan nilai, mengikuti pola pembacaan *utility* pada bab ini (contoh pola: "`mb-3` = margin bawah 1 rem").

9. Galeri "Kategori Populer" Tokosaya ingin menampilkan 1 kartu per baris di HP, 2 kartu per baris mulai breakpoint `md`, dan 4 kartu per baris mulai breakpoint `xl`. Tuliskan rangkaian kelas kolom yang dipasang pada setiap kartu.

10. Bab ini menyandingkan Bootstrap dengan Tailwind CSS 3.x. Sebutkan nama filosofi yang dipegang Tailwind dan jelaskan bagaimana antarmuka disusun dalam pendekatan tersebut.
