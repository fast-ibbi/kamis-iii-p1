# Soal Praktikum Lab — Bab 10: Komponen Bootstrap

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 10 soal praktikum · estimasi 20–40 menit per soal
> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)

---

**Praktikum Lab (10 soal)**

### Lab 1 — Navbar yang tidak mau menumpuk
**Konteks:** Seorang rekanmu ingin memakai *navbar* varian tanpa JavaScript pada `katalog.html` di proyek `tokosaya-bootstrap/`. Ia sudah menghapus tombol hamburger, tetapi hasilnya menu tetap mendatar padat di layar 375 piksel dan merek terdorong ke tengah.

**Tugas:**
1. Periksa potongan berikut, lalu temukan tiga kesalahan yang membuat perilakunya menyimpang dari pola Subbab 10.2.

```html
<nav class="navbar navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="index.html">Tokosaya</a>
    <ul class="navbar-nav">...</ul>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
```

2. Tulis versi perbaikan lengkap berisi merek, empat tautan baku (Beranda, Katalog, Tentang, Kontak) dengan `active` + `aria-current="page"` pada Katalog, dan tautan Keranjang berikon `bi bi-cart3`.
3. Uji hasilnya di DevTools pada lebar 375, 768, dan 1200 piksel.

**Bukti yang dikumpulkan:** file `katalog-uji.html`, daftar tiga kesalahan beserta alasannya, dan tiga tangkapan layar DevTools.

### Lab 2 — Membaca aturan CSS pemenang di DevTools
**Konteks:** Tim Tokosaya menduga gaya Bootstrap masih menang atas gaya kustom `.produk-card`, sehingga radius dan bayangan kartu tidak mengikuti token proyek.

**Tugas:**
1. Buka `katalog.html`, arahkan pengembang ke salah satu kartu produk, lalu catat nilai *computed* untuk `border-radius`, `box-shadow`, `height` gambar, dan `object-fit`.
2. Tentukan aturan mana yang berasal dari `bootstrap.min.css` dan mana yang berasal dari `css/style.css`, lalu tunjukkan di panel Styles berkas mana yang menang.
3. Ubah nilai `--radius` di `:root` menjadi `16px`, muat ulang halaman, lalu buktikan perubahannya terlihat pada kartu.
4. Jelaskan mengapa perubahan itu berhasil tanpa menambahkan `!important`.

**Bukti yang dikumpulkan:** tangkapan layar panel Styles + Accessibility tidak diperlukan; cukup panel Styles dan catatan nilai *computed* sebelum–sesudah.

### Lab 3 — Pemeriksaan aksesibilitas ikon
**Konteks:** Halaman Tokosaya memuat banyak ikon Bootstrap Icons. Lima potongan berikut dipotong dari halaman berbeda dan belum diperiksa dari sisi aksesibilitas.

```html
<a class="btn btn-outline-light btn-sm" href="keranjang.html"><i class="bi bi-cart3"></i> Keranjang</a>
<a class="nav-link" href="katalog.html"><i class="bi bi-search"></i></a>
<span class="fw-semibold"><i class="bi bi-funnel"></i> Urutkan:</span>
<span><i class="bi bi-book"></i> Konsep Sistem Informasi <span class="badge text-bg-success">Tersedia</span></span>
<li class="page-item"><a class="page-link" href="katalog.html"><i class="bi bi-chevron-right"></i></a></li>
```

**Tugas:**
1. Untuk setiap potongan, tentukan apakah ikonnya hiasan (`aria-hidden="true"`) atau punya makna sendiri (butuh `aria-label` atau teks rahasia).
2. Tulis versi perbaikan setiap potongan.
3. Buka DevTools pada salah satu perbaikanmu, panel Accessibility, dan buktikan nama yang dibacakan untuk tautan ikon berubah sesuai harapan.

**Bukti yang dikumpulkan:** tabel lima baris (potongan → perlakuan → *markup* perbaikan) dan satu tangkapan layar panel Accessibility.

### Lab 4 — Strip pengumuman di atas grid katalog
**Konteks:** Pemilik Tokosaya ingin menaruh pengumuman "Kirim Cepat gratis untuk pembelian di atas Rp500.000" di atas grid produk, ditambah baris legenda empat badge semantik.

**Tugas:**
1. Buat file `katalog-uji.html` (boleh menyalin kerangka `katalog.html`) dan sisipkan satu `alert` statis berisi pengumuman di atas `<div class="row g-4">`.
2. Tambahkan baris legenda berisi keempat badge baku Tokosaya beserta maknanya: Tersedia, Best Seller, Stok Terbatas, Baru.
3. Pastikan `alert` memakai `role="alert"` dan tidak memuat tombol tutup sama sekali.

**Bukti yang dikumpulkan:** file HTML dan satu tangkapan layar pada lebar 1200 piksel yang memperlihatkan strip pengumuman serta baris legenda.

### Lab 5 — List group yang berantakan
**Konteks:** Ini *markup* daftar produk pada halaman demo komponen. Status belum turun ke kanan, dan item yang sedang dipilih kehilangan penanda bagi pembaca layar.

```html
<ul class="list-group">
  <li class="list-group-item"><span>Keyboard Mekanis KX-210</span>
    <span class="badge text-bg-warning">Best Seller</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Mouse Wireless MW-88</li>
  <li class="list-group-item active">Monitor IPS 24" MR-241</li>
</ul>
```

**Tugas:**
1. Perbaiki susunan item pertama agar label produk di kiri dan badge di kanan.
2. Tambahkan badge semantik "Tersedia" pada item Mouse Wireless MW-88 mengikuti pola yang benar.
3. Lengkapi atribut penanda status pada item ketiga supaya pembaca layar tahu item itu yang sedang dipilih.

**Bukti yang dikumpulkan:** file HTML hasil perbaikan dan satu tangkapan layar daftar pada lebar 375 serta 1200 piksel.

### Lab 6 — Breadcrumb tiga tingkat halaman detail
**Konteks:** Tokosaya akan menambah halaman `detail-kx210.html` dan ingin pengguna tahu posisinya: Beranda → Katalog → Keyboard Mekanis KX-210.

**Tugas:**
1. Tulis potongan `nav` + `ol` breadcrumb tiga tingkat. Dua tingkat pertama berupa tautan ke `index.html` dan `katalog.html`.
2. Tandai tingkat terakhir sebagai posisi halaman sekarang tanpa dijadikan tautan.
3. Jelaskan kenapa label `aria-label` pada elemen `nav` diperlukan meski halaman sudah punya *navbar* di atasnya.

**Bukti yang dikumpulkan:** file `detail-kx210.html` (boleh berisi *navbar* + *breadcrumb* saja) dan dua kalimat penjelasan.

### Lab 7 — Refactor gaya *inline* ke `css/style.css`
**Konteks:** Seorang anggota tim menulis gaya kartu langsung pada atribut `style` agar cepat dilihat, padahal proyek punya token di `:root`.

```html
<div class="card h-100" style="border:1px solid #E2E8F0; border-radius:12px;
     box-shadow:0 8px 24px rgba(15,23,42,0.08); overflow:hidden;">
  <img src="img/produk-mouse-mw88.svg" class="card-img-top"
       style="height:160px; object-fit:cover;" alt="Mouse Wireless MW-88">
  <div class="card-body d-flex flex-column">
    <h3 class="card-title h6">Mouse Wireless MW-88</h3>
    <p class="fw-semibold text-primary mt-auto mb-0">Rp185.000</p>
  </div>
</div>
```

**Tugas:**
1. Pindahkan seluruh gaya *inline* ke satu aturan `.produk-card` (atau dua aturan bila perlu) di `css/style.css`, memakai variabel token `var(--radius)`, `var(--clr-border)`, dan `var(--shadow-card)`.
2. Tambahkan satu efek *hover* CSS murni yang mengangkat kartu tanpa JavaScript.
3. Pastikan *markup* kartu kembali bersih tanpa atribut `style`.

**Bukti yang dikumpulkan:** kedua berkas (HTML dan CSS) serta tangkapan layar kartu sebelum dan sesudah.

### Lab 8 — Mengubah status pagination
**Konteks:** Halaman `katalog.html` sedang mendemokan prototipe tiga halaman. Karena pengguna dianggap sedang membuka halaman 2, penanda statusnya harus dipindahkan.

**Tugas:**
1. Ubah deret *pagination* sehingga halaman 2 berstatus aktif dan penanda aksesibilitasnya benar.
2. Jadikan panah kiri sebagai tautan biasa ke `katalog.html`, dan biarkan panah kanan berstatus `disabled`.
3. Pastikan halaman 1 dan 3 tetap berupa tautan biasa, dan seluruh deret tetap terpusat di tengah.

**Bukti yang dikumpulkan:** potongan `nav` hasil perbaikan dan satu tangkapan layar *pagination*.

### Lab 9 — Halaman demo status statis
**Konteks:** Kamu ditugaskan menyiapkan halaman `demo-faq.html` berisi potongan FAQ dan satu kotak dialog statis untuk kebutuhan papan cerita desain. Pada demo FAQ, yang harus tampil terbuka justru panel **kedua**, bukan panel pertama.

**Tugas:**
1. Bangun satu `accordion` berisi dua item: item pertama tertutup, item kedua terbuka. Keduanya memakai tombol ber-`type="button"`.
2. Tambahkan satu `modal` statis berikut judul "Konfirmasi Pesanan", satu paragraf isi, dan dua tombol footer.
3. Beri komentar `<!-- khusus demonstrasi -->` pada gaya *inline* yang membuat modal tampil di aliran halaman, lalu jelaskan mengapa tombol silang pada modal itu tidak berfungsi.

**Bukti yang dikumpulkan:** file `demo-faq.html` dan satu paragraf penjelasan tentang kelas penanda status yang kamu pakai.

### Lab 10 — Audit responsif grid kartu
**Konteks:** Sebelum diserahkan ke pemilik Tokosaya, tim penjamin mutu ingin bukti bahwa grid katalog benar-benar berubah susunan mengikuti lebar layar.

**Tugas:**
1. Buka `katalog.html` di Chrome, lalu catat jumlah kartu per baris pada lebar 360, 575, 576, 991, 992, dan 1200 piksel.
2. Jelaskan kelas mana yang mengambil alih susunan tepat pada setiap batas yang kamu amati.
3. Aktifkan *overlay* grid di DevTools dan tunjukkan pembagian dua belas kolom yang dipakai sel produk.

**Bukti yang dikumpulkan:** tabel pengamatan enam baris, dua tangkapan layar DevTools (lebar 575 dan 992 piksel), dan satu paragraf kesimpulan.
