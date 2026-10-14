# Soal Praktikum Lab — Bab 04: Tipografi dan Visual Design CSS

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 10 soal praktikum · estimasi 20–40 menit per soal
> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)

---

**Praktikum Lab (10 soal)**

### Lab 1 — Hero Tokosaya berbasis design token
**Konteks:** Landing page Tokosaya baru punya kerangka HTML, tetapi warna dan jaraknya masih ditulis sebagai nilai mentah. Kamu ditugaskan membangun satu hero yang seluruh keputusan visualnya mengalir dari token.

**Tugas:**
1. Buat `lab-4/lab-1/hero.html` + `css/style.css`. Di dalam `head`, pasang dua tag `preconnect` dan satu tag `<link>` Google Fonts untuk Poppins 400/500/600/700 dan Inter 400/500/600, lalu hubungkan berkas gaya.
2. Tulis blok `:root` berisi token baku Tokosaya (warna primary, primary-dark, accent, dark, body, bg, surface, border, success, danger, font heading, font body, radius, shadow, dan `--space-unit`).
3. Bangun hero berisi `h1` "Peralatan Kerja Digital untuk Semua", paragraf subjudul, dan tombol "Lihat Katalog"; latar hero memakai `linear-gradient` dari token primary menuju primary-dark dengan padding berkelipatan `--space-unit`.
4. Terapkan `clamp()` pada judul hero dan pastikan paragraf subjudul memakai `var(--font-body)`, sedangkan seluruh heading memakai `var(--font-heading)`.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tangkapan layar hero pada jendela lebar dan sempit, serta daftar token yang benar-benar dipanggil di halaman tersebut.

### Lab 2 — Empat badge semantik dan laporan kontras
**Konteks:** Kartu produk Tokosaya menandai status produk dengan badge: Best Seller, Tersedia, Stok Terbatas, dan Baru. Badge harus tetap terbaca di layar lapuk maupun terang.

**Tugas:**
1. Buat `lab-4/lab-2/badge.html` + `css/style.css` berisi empat `span` badge dengan empat varian status.
2. Terapkan pola bab ini: warna semantik dibawa latar tint `rgba(...)`, sedangkan teks memakai warna gelap dari token. Varian Best Seller boleh memakai latar amber solid dengan teks `--clr-dark`.
3. Buat tabel pengamatan berisi lima pasangan teks-latar milikmu, perkiraan rasio kontrasnya, dan status lolos/gagal terhadap ambang AA 4,5:1.
4. Perbaiki setiap pasangan yang gagal kontras, lalu catat perubahan yang kamu lakukan.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tabel rasio kontras, dan tangkapan layar keempat badge.

### Lab 3 — Memeriksa pemuatan font lewat DevTools
**Konteks:** Tim menerima laporan "font judul terlihat berbeda antar-laptop". Untuk memastikan penyebabnya, kamu harus membaca bukti dari browser, bukan dari dugaan.

**Tugas:**
1. Buka `lab-4/lab-1/hero.html` di Chrome, lalu buka DevTools.
2. Pada panel Elements, pilih `h1` dan catat nilai *computed* `font-family`, `font-size`, dan `line-height`.
3. Buka panel Network, filter permintaan bertipe font, lalu catat berapa berkas font terunduh, dari domain mana, dan berapa lama waktunya.
4. Uji urutan pemuatan: hapus sementara salah satu tag `preconnect`, muat ulang dengan opsi *Disable cache*, lalu bandingkan waktu unduh font sebelum dan sesudah.
5. Tulis temuan: apakah Poppins benar-benar termuat, dan apa peran tag `preconnect` bagi pengalaman pengguna.

**Bukti yang dikumpulkan:** tabel hasil pemeriksaan Details panel Network, tangkapan layar panel Elements dan Network, serta catatan temuan.

### Lab 4 — Debug rangkaian token yang rusak
**Konteks:** Sepuluh menit sebelum penilaian, halaman landing tampil nyaris tanpa warna: tombol transparan, badge putih polos, dan heading kembali abu-abu. Berkas gaya berisi dua kesalahan penulisan.

**Tugas:**
1. Buat `lab-4/lab-4/rusak.html` + `css/style.css` dengan kondisi berikut, lalu perbaiki sampai halaman tampil normal.

```css
:root {
  --clr-primary: #4F46E5;
  --clr-dark: #1E293B;
  --radius: 12px;
}

.hero-cta {
  background-color: var(--clr-primari);
  border-radius: radius;
  color: #FFFFFF;
  padding: calc(var(--space-unit) * 2) calc(var(--space-unit) * 5);
}

.produk-name {
  color: var(--clr-dark);
}
```

2. Jelaskan nilai apa yang dipakai browser ketika `var(--clr-primari)` tidak ditemukan, dan apa yang terjadi pada `border-radius: radius;`.
3. Tambahkan token yang hilang, perbaiki penulisan pemanggilan yang salah, lalu uji ulang halaman.

**Bukti yang dikumpulkan:** berkas sebelum dan sesudah perbaikan, tangkapan layar halaman sesudah, serta daftar kesalahan beserta penjelasannya.

### Lab 5 — Menguji fallback stack pada jaringan buruk
**Konteks:** Sebagian pelanggan Tokosaya membuka katalog dari koneksi seluler yang lambat. Halaman harus tetap terbaca ketika web font gagal diunduh.

**Tugas:**
1. Siapkan `lab-4/lab-5/fallback.html` + `css/style.css` dengan dua versi deklarasi judul: satu memakai `font-family: 'Poppins';` saja, satu memakai `font-family: 'Poppins', 'Segoe UI', sans-serif;`.
2. Buka DevTools, aktifkan pemblokiran permintaan ke domain `fonts.googleapis.com` atau matikan jaringan, lalu muat ulang halaman.
3. Catat perbedaan penampakan antara kedua versi judul saat font gagal dimuat.
4. Perbaiki versi pertama menjadi *fallback stack* yang lengkap, lalu ulangi pengujian dan pastikan halaman tetap terbaca.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tangkapan layar kedua versi saat font diblokir, dan kesimpulan tiga kalimat tentang fungsi *fallback stack*.

### Lab 6 — Refactor nilai mentah menjadi token
**Konteks:** Berkas gaya lama landing page masih memakai heksadesimal yang diulang-ulang: indigo muncul di tombol, link, badge, dan gradien, sehingga perubahan warna brand menjadi pekerjaan berisiko.

**Tugas:**
1. Salin potongan gaya berikut ke `lab-4/lab-6/token.html` + `css/style.css`.

```css
.hero {
  background-image: linear-gradient(to bottom right, #4F46E5, #4338CA);
}

.hero-cta {
  background-color: #4F46E5;
  color: #FFFFFF;
  border-radius: 12px;
}

.produk-badge--baru {
  background-color: rgba(79, 70, 229, 0.12);
  color: #4338CA;
}

.produk-kategori {
  color: #334155;
}

h1, h2, h3 {
  color: #1E293B;
}
```

2. Tambahkan blok `:root` berisi token Tokosaya, lalu ganti setiap nilai mentah dengan `var()` yang sesuai.
3. Gunakan fitur pencarian di editor untuk membuktikan tidak ada lagi nilai heksadesimal mentah di luar `:root` (putih pada teks di atas gradien boleh tetap sebagai keputusan lokal).
4. Ubah nilai `--clr-primary` menjadi `#1D4ED8`, muat ulang, lalu catat minimal empat elemen yang ikut berubah.

**Bukti yang dikumpulkan:** berkas setelah refactor, hasil pencarian nilai heksadesimal, dan catatan elemen yang terdampak perubahan token.

### Lab 7 — Membangun halaman spesimen skala tipografi
**Konteks:** Design system kecil Tokosaya memerlukan satu halaman acuan agar seluruh anggota tim melihat ukuran teks yang sama saat menata halaman baru.

**Tugas:**
1. Buat `lab-4/lab-7/spesimen.html` + `css/style.css` yang menampilkan sembilan level skala: Display, Heading 1, Heading 2, Heading 3, Body besar, Subjudul kartu, Body, Kecil, dan Label.
2. Beri setiap level satu label kecil berisi nama level, nilai `rem`, dan nilai piksel padanannya pada basis 16px (label tidak boleh memakai ukuran yang salah level).
3. Atur `line-height` secara tepat: 1,1–1,25 untuk judul dan 1,6 untuk teks isi.
4. Periksa minimal tiga level di panel Computed DevTools dan pastikan nilai `font-size` serta `line-height` sesuai dengan label yang kamu tulis.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tangkapan layar halaman spesimen, dan tabel verifikasi nilai computed dari DevTools.

### Lab 8 — Eksperimen perilaku clamp() lintas lebar layar
**Konteks:** Judul hero harus proporsional di HP maupun monitor lebar tanpa deretan media query. `clamp()` dipakai untuk itu, tetapi perilakunya perlu dibuktikan, bukan diasumsikan.

**Tugas:**
1. Buat `lab-4/lab-8/clamp.html` + `css/style.css` dengan `h1 { font-size: clamp(2.25rem, 5vw, 3rem); }`.
2. Sebelum mengukur, tulis prediksi ukuran font (dalam piksel) untuk lebar jendela 360px, 800px, dan 1440px, lengkap dengan alasan mana dari min/preferred/max yang dipakai.
3. Ukur nilai `font-size` yang benar-benar dipakai pada ketiga lebar tersebut memakai panel Computed DevTools.
4. Bandingkan prediksi dengan hasil ukur, lalu jelaskan pada rentang lebar berapa batas minimum dan maksimum mulai aktif.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tabel prediksi vs hasil ukur, dan kesimpulan tentang titik kerja min/preferred/max.

### Lab 9 — Audit kontras dan perbaikan pasangan warna
**Konteks:** Halaman "Kebijakan Pengiriman" Tokosaya memakai lima kombinasi warna berbeda. Sebagai penulis gaya, kamu harus menyatakan mana yang lolos dan mana yang gagal sebelum halaman dirilis.

**Tugas:**
1. Buat `lab-4/lab-9/kontras.html` + `css/style.css` berisi lima blok teks kecil dengan pasangan warna: `#334155` di `#F8FAFC`, `#1E293B` di `#F59E0B`, putih di `#4F46E5`, `#16A34A` di putih, dan `#DC2626` di putih.
2. Untuk setiap pasangan, tentukan statusnya terhadap ambang AA 4,5:1 memakai pengetahuan dari bab ini, lalu tanda tangani hasilnya pada tabel.
3. Perbaiki setiap pasangan yang gagal memakai pola "warna semantik ke latar tint, teks ke warna gelap".
4. Ulangi pemeriksaan dan tunjukkan bukti perbaikan melalui tangkapan layar sebelum dan sesudah.

**Bukti yang dikumpulkan:** berkas HTML + CSS, tabel status lima pasangan, dan tangkapan layar perbaikan.

### Lab 10 — Merancang token untuk komponen baru
**Konteks:** Tim Tokosaya akan menambah komponen "Kartu Testimoni Pelanggan". Komponen ini harus tampil senada dengan kartu produk, tetapi tetap punya identitas tersendiri.

**Tugas:**
1. Buat `lab-4/lab-10/testimoni.html` + `css/style.css` berisi satu kartu testimoni: nama pelanggan, kutipan ulasan, dan label kota.
2. Tambahkan ke `:root` token baru yang benar-benar dibutuhkan komponen ini, misalnya token warna latar kutipan, radius khusus, dan satu token jarak tambahan bila perlu. Jangan menambahkan token yang hanya dipakai satu kali tanpa alasan.
3. Terapkan seluruh nilai kartu lewat `var()`, dan gunakan `calc(var(--space-unit) * n)` untuk semua jarak agar tetap berada pada kelipatan 8px.
4. Tulis daftar token baru beserta alasan penambahannya, lalu tunjukkan dua komponen serupa (kartu produk dan kartu testimoni) di satu halaman untuk membuktikan konsistensinya.

**Bukti yang dikumpulkan:** berkas HTML + CSS, daftar token baru beserta alasannya, dan tangkapan layar kedua kartu yang berdampingan.
