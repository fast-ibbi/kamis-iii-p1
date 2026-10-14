# Soal Praktikum Lab — Bab 15: Final Project dan Quality Assurance

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 10 soal praktikum · estimasi 20–40 menit per soal
> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)

---

**Praktikum Lab (10 soal)**

### Lab 1 — Audit validasi W3C satu halaman

**Konteks:** Validasi markup adalah item pertama pada audit struktur QA sprint. Kesalahan yang menumpuk sering berasal dari satu akar, misalnya tag yang tidak ditutup, sehingga senarai validator bisa dipangkas drastis bila ditangani berurutan.

**Tugas:**
1. Pilih satu halaman proyekmu, lalu validasi berkasnya lewat layanan validator W3C dan salin senarai kesalahan serta peringatannya.
2. Tandai kesalahan paling atas pada senarai dan perbaiki akarnya saja, tanpa mengubah bagian lain.
3. Validasi ulang halaman dan bandingkan jumlah kesalahan sebelum dan sesudah.
4. Catat satu baris temuan berisi gejala, langkah reproduksi, dan status perbaikannya.

**Bukti yang dikumpulkan:** Tangkapan layar senarai validator sebelum dan sesudah perbaikan, potongan kode yang diperbaiki, dan satu baris temuan.

### Lab 2 — Inspeksi folder dan konvensi penamaan berkas

**Konteks:** Sebuah proyek latihan memiliki struktur berantakan berikut.

   ```
   Tokosaya-Final/
   ├── Produk Baru.html
   ├── katalog-final2.html
   ├── gambar/
   │   ├── photo3.svg
   │   └── keyboard.svg
   ├── style v2.css
   └── style.css
   ```

**Tugas:**
1. Susun ulang struktur folder agar sesuai konvensi proyek: berkas HTML di akar, satu folder `css/`, satu folder `img/`, dan satu berkas gaya utama.
2. Buat tabel penggantian nama berkas: nama lama, nama baru, dan alasan singkat.
3. Jelaskan dua risiko teknis dari penamaan lama, salah satunya dikaitkan dengan perilaku sistem berkas atau server.
4. Tuliskan satu aturan penamaan gambar produk Tokosaya lengkap dengan contoh yang benar.

**Bukti yang dikumpulkan:** Pohon folder hasil perbaikan, tabel penggantian nama, dan dua paragraf penjelasan risiko.

### Lab 3 — Refactor blok CSS dengan tiga penyakit

**Konteks:** Reviewer meninggalkan catatan pada potongan CSS navbar dan badge berikut.

   ```css
   /* kustom */
   .site-nav a { color: #4F46E5; }

   /* kustom */
   div .site-nav a { color: #4F46E5 !important; font-size: 15px; }

   /* kustom */
   .site-nav a { border-radius: 9px; font-weight: 700; }
   ```

**Tugas:**
1. Sebutkan tiga cacat kualitas pada potongan itu dan urutkan dari yang paling berbahaya bagi pemeliharaan.
2. Tulis ulang potongan tersebut menjadi satu aturan per maksud, tanpa `!important`, dengan nilai yang berasal dari token atau skala rem.
3. Tambahkan komentar pengenal yang menjelaskan peran aturan barunya.
4. Terapkan hasil refactor pada halaman latihan dan pastikan tampilannya tidak berubah secara tak sengaja.

**Bukti yang dikumpulkan:** Daftar tiga cacat, berkas CSS sebelum-sesudah, dan satu tangkapan layar hasil render.

### Lab 4 — Baca kaskade lewat panel Styles dan Computed

**Konteks:** Judul kartu produk tampil dengan warna yang tidak sesuai. Dua aturan bersaing di halaman latihan:

   ```css
   /* kustom */
   .card-title { font-size: 2rem; color: #111827; }

   /* kustom */
   .produk-card .card-title { font-size: 1.25rem; color: var(--clr-dark); }
   ```

**Tugas:**
1. Buka halaman di Chrome, pilih elemen judul kartu, lalu baca panel Styles: tentukan aturan mana yang menang dan mengapa (specificity, urutan, atau `!important`).
2. Verifikasi dugaanmu pada panel Computed: catat nilai `font-size` dan `color` akhir yang benar-benar dipakai.
3. Terapkan satu perubahan saja untuk menyelesaikan konflik, misalnya mempersempit selektor atau menghapus aturan yang tidak diperlukan.
4. Muat ulang halaman dan jalankan uji regresi mini pada satu halaman lain yang memakai komponen serupa.

**Bukti yang dikumpulkan:** Tangkapan panel Styles dan Computed, satu perubahan yang diterapkan, serta catatan hasil uji regresi mini.

### Lab 5 — Kejar penyebab gulir horizontal di 360 px

**Konteks:** Pada lebar 360 px, halaman katalog menampilkan gulir horizontal. Dalam kerangka QA bab ini, gulir horizontal adalah cacat, bukan selera, sehingga harus dicari elemen penyebabnya sampai ketemu.

**Tugas:**
1. Buka halaman katalog dengan device toolbar pada lebar 360 px dan konfirmasi gejala gulir horizontalnya.
2. Inspeksi elemen satu per satu memakai diagram kotak dan nilai box model untuk menemukan elemen yang lebarnya melewati lebar viewport.
3. Perbaiki penyebabnya, misalnya gambar tanpa `img-fluid`, padding tetap yang terlalu lebar, atau baris tanpa `g-4`.
4. Ambil tangkapan layar sebelum dan sesudah, lalu tulis satu baris temuan beserta langkah reproduksinya.

**Bukti yang dikumpulkan:** Dua tangkapan layar (sebelum/sesudah), elemen penyebab, dan baris temuan yang siap dimasukkan ke laporan.

### Lab 6 — Uji navigasi keyboard dan indikator fokus

**Konteks:** Pengujian aksesibilitas manual dilakukan tanpa menyentuh mouse. Halaman yang tampak rapi sering gagal pada urutan tab dan indikator fokus yang tidak terlihat.

**Tugas:**
1. Buka satu halaman proyekmu, lalu telusuri seluruh halaman hanya dengan tombol Tab dan Enter: navigasi, katalog, sampai tombol kirim pada form.
2. Catat urutan perpindahan fokus dan tandai setiap tempat di mana fokus terlihat "tersesat" atau tidak mengikuti urutan visual.
3. Periksa apakah indikator fokus terlihat jelas pada link nav, tombol utama, dan bidang form.
4. Tulis dua temuan berformat laporan (ID, halaman, temuan, langkah reproduksi, severitas, status), lalu perbaiki satu di antaranya dengan gaya `:focus-visible`.

**Bukti yang dikumpulkan:** Catatan urutan tab, dua baris temuan, dan potongan CSS fokus yang diperbaiki.

### Lab 7 — Audit alt, heading, dan nama elemen di panel aksesibilitas

**Konteks:** Panel aksesibilitas DevTools memperlihatkan nama dan peran yang diterima teknologi bantu dari sebuah elemen. Lab ini melatih pembacaan panel itu, bukan sekadar menebak dari tampilan.

**Tugas:**
1. Pilih tiga elemen pada halamanmu: gambar produk, judul section, dan satu bidang input.
2. Baca nama serta peran ketiga elemen pada panel aksesibilitas DevTools, lalu catat hasilnya.
3. Perbaiki minimal tiga cacat yang kamu temukan, misalnya `alt="gambar"` yang tidak bermakna, heading yang melompat level, atau label yang tidak terhubung ke input.
4. Verifikasi ulang dengan panel yang sama setelah perbaikan.

**Bukti yang dikumpulkan:** Tabel hasil pembacaan sebelum-sesudah, potongan kode yang diperbaiki, dan tangkapan panel aksesibilitas.

### Lab 8 — Bangun tabel laporan temuan profesional

**Konteks:** Temuan QA harus dapat difilter dan diulang oleh orang lain, sehingga bentuk tabel lebih tepat daripada catatan bebas. Halaman laporan ini adalah alat kerja, bukan halaman produk.

**Tugas:**
1. Buat `laporan-temuan.html` memakai CDN Bootstrap 5.3.3 dengan struktur satu `h1` dan satu tabel.
2. Tabel wajib memuat kolom ID, halaman, temuan, langkah reproduksi, severitas, dan status; sertakan `caption` yang menjelaskan aturan severitas serta `th scope="col"` pada kepala tabel dan `th scope="row"` pada kolom ID.
3. Isi tiga baris temuan karangan yang mewakili severitas Kritis, Mayor, dan Minor, dengan badge semantik `text-bg-danger`, `text-bg-warning`, dan `text-bg-info`.
4. Tulis komentar `head` yang menyatakan tidak ada berkas skrip yang disertakan di halaman ini.

**Bukti yang dikumpulkan:** Berkas `laporan-temuan.html` dan tangkapan layar tabel pada lebar 992 px.

### Lab 9 — Peer review terhadap fragmen proyek rekan

**Konteks:** Kamu menerima fragmen kartu berikut dari proyek teman sekelas untuk direview dengan checklist QA.

   ```html
   <div class="row">
     <div class="col-md-4">
       <div class="card">
         <img src="img/produk-speaker-bt5.svg" class="card-img-top">
         <div class="card-body">
           <h5 class="card-title">Speaker Bluetooth BT-5</h5>
           <p class="card-text">Rp285.000</p>
           <a href="#" class="btn btn-primary">Klik di sini</a>
         </div>
       </div>
     </div>
   </div>
   ```

**Tugas:**
1. Temukan minimal tiga cacat QA pada fragmen itu dan kaitkan tiap cacat dengan aspeknya (aksesibilitas, teks tautan, kelas, atau konten).
2. Tulis hasilnya dalam format tabel temuan lengkap: ID, halaman, temuan, langkah reproduksi, severitas, dan status.
3. Urutkan temuan dari Kritis ke Minor dan beri satu rekomendasi perbaikan untuk masing-masing temuan.
4. Tuliskan satu kalimat penutup yang netral dan tidak menyalahkan pemilik proyek.

**Bukti yang dikumpulkan:** Tabel temuan berisi minimal tiga baris, daftar prioritas perbaikan, dan kalimat penutup review.

### Lab 10 — Kunci paket rilis kandidat dan ringkasannya

**Konteks:** Rilis kandidat adalah versi yang dinyatakan siap rilis dan menunggu persetujuan terakhir. Penguncian versi harus terdokumentasi agar keputusan rilis bukan suasana hati.

**Tugas:**
1. Periksa lima item wajib berikut pada proyekmu: seluruh link nav hidup, kontak Tokosaya konsisten, delapan produk katalog tampil, meta dasar lengkap (`charset`, `viewport`, `title`), dan tidak ada gulir horizontal pada 360/768/992 px.
2. Beri label paket proyek mengikuti pola versi rilis kandidat (misalnya `tokosaya-bootstrap-v1.0.0-rc1.zip`) dan buat arsipnya.
3. Tulis `catatan-perubahan.md` berisi versi, daftar perubahan terakhir, status seluruh temuan (terbuka versus diperbaiki), dan satu paragraf kesimpulan kesiapan rilis.
4. Sebutkan satu temuan yang sengaja dibiarkan terbuka beserta alasan dan rencana penanganannya.

**Bukti yang dikumpulkan:** Berkas ZIP berlabel rilis kandidat, `catatan-perubahan.md`, dan daftar centang lima item wajib beserta statusnya.
