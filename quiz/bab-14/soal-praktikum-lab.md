# Soal Praktikum Lab — Bab 14: Implementasi Desain Figma ke HTML CSS

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 10 soal praktikum · estimasi 20–40 menit per soal
> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)

---

**Praktikum Lab (10 soal)**

### Lab 1 — Bangun navbar Tokosaya dari spesifikasi

**Konteks:** Kamu akan membuat ulang navbar frame `P-DETAIL-01` pada berkas latihan terpisah agar hasilnya bisa diperiksa tanpa mengganggu `produk.html`. Navbar adalah contoh komponen yang seluruh susunannya bisa diselesaikan dengan utilitas flex Bootstrap.

**Tugas:**
1. Buat `tokosaya-bootstrap/latihan/navbar.html` yang memuat CDN Bootstrap 5.3.3, Bootstrap Icons 1.11.3, Google Fonts Poppins/Inter, dan pemanggilan `css/style.css` (salin dulu token yang dibutuhkan bila belum ada).
2. Susun `<header class="site-nav">` berisi merek "Tokosaya", empat link (Beranda, Katalog, Tentang, Kontak) dengan Katalog sebagai link aktif, serta ikon keranjang `bi bi-cart3` yang punya label aksesibel.
3. Atur susunannya memakai kelas utilitas (`d-flex flex-wrap align-items-center justify-content-between gap-3`), lalu tulis CSS kustom bertoken untuk warna dan ukuran presisi: latar `#FFFFFF`, garis bawah 1 px, padding vertikal 16 px, merek Poppins 700 20 px berwarna token primer, link Inter 15 px, dan jarak antarlink 32 px.
4. Buka di lebar 1440 px dan periksa dengan DevTools: tinggi navbar mendekati ± 72 px dan jarak antarlink 32 px. Catat setiap selisih yang kamu temukan.

**Bukti yang dikumpulkan:** Berkas `navbar.html`, cuplikan CSS kustom bertoken, tangkapan layar 1440 px, dan tangkapan panel Computed untuk `padding-top` serta `gap`.

### Lab 2 — Tabel pemetaan styles Figma menjadi token

**Konteks:** Seorang desainer mengirim daftar gaya tanpa berkas Figma: "Heading/Title 1" (Poppins 600, 32 px, line-height 1,25), "Body/Paragraph" (Inter 400, 16 px, line-height 1,6), "Warna/Accent" `#F59E0B`, dan "Warna/Border" `#E2E8F0`. Semuanya harus masuk ke proyek tanpa kehilangan asal-usulnya.

**Tugas:**
1. Buat berkas `catatan-token.md` berisi tabel pemetaan tiga kolom: label gaya Figma, token atau kelas tujuan, dan nilai yang disalin.
2. Tulis blok `:root` minimal yang memuat token warna dan token font dari daftar tersebut.
3. Tulis dua aturan tipografi berbasis token (satu untuk judul, satu untuk paragraf) dengan komentar asal gayanya.
4. Tambahkan satu paragraf penjelasan mengapa nilai gaya tidak ditulis langsung pada tiap elemen di HTML.

**Bukti yang dikumpulkan:** Berkas `catatan-token.md` dan potongan blok `:root` serta aturan tipografi yang kamu tulis.

### Lab 3 — Bangun panel produk sesuai urutan spesifikasi

**Konteks:** Panel kanan detail produk adalah komponen paling padat di halaman `produk.html`: isinya harus mengikuti urutan spesifikasi bagian F, dari badge sampai info bantuan.

**Tugas:**
1. Buat `tokosaya-bootstrap/latihan/panel-produk.html` dengan latar halaman token `--clr-bg` agar panel putih terlihat jelas.
2. Susun isi panel dengan urutan: badge "Best Seller" → `h2` nama produk → kategori → harga → deskripsi → tombol "Tambah ke Keranjang" berikon → dua baris info (pengiriman dan bantuan).
3. Gunakan kelas bertoken (`badge-populer`, `produk-nama`, `produk-harga`, `btn-tokosaya`, `produk-info`) dan pastikan panel berlatar putih, border 1 px, radius 12 px, padding 24 px, serta bayangan kartu dari token.
4. Sertakan minimal satu atribut ARIA pada ikon dekoratif dan satu `alt` deskriptif pada gambar produk.

**Bukti yang dikumpulkan:** Berkas HTML, cuplikan CSS kustom, dan tangkapan layar 1440 px; sertakan daftar 5 pasang properti:nilai dari panel Computed.

### Lab 4 — Baris produk terkait yang tunduk pada grid

**Konteks:** Baris "Produk Terkait" adalah ujian translasi grid: tiga kartu sejajar di desktop, satu kolom penuh di layar kecil, dengan jarak antarkolom 24 px dari spesifikasi.

**Tugas:**
1. Buat `tokosaya-bootstrap/latihan/produk-terkait.html` berisi judul section dan satu baris tiga kartu (Mouse Wireless MW-88, Headphone Studio HS-15, Speaker Bluetooth BT-5) lengkap dengan gambar, badge status, nama, harga, dan tautan katalog.
2. Wajib memakai `row g-4` dan `col-12 col-md-4`; badge memakai token yang benar ("Tersedia" hijau, "Stok Terbatas" merah).
3. Uji halaman pada lebar 1440, 768, dan 375 px, lalu ambil tangkapan layar untuk masing-masing lebar.
4. Catat perilaku jarak vertikal antarkartu saat kartu bertumpuk pada 375 px.

**Bukti yang dikumpulkan:** Berkas HTML, tiga tangkapan layar, dan catatan hasil pengamatan jarak serta tumpukan kartu.

### Lab 5 — Perbaiki aturan CSS yang menyimpang dari token

**Konteks:** Seorang rekan menyerahkan aturan CSS berikut untuk panel produk dan harga. Aturan itu berjalan, tetapi tidak setia pada spesifikasi dan token Tokosaya.

   ```css
   /* kustom */
   .produk-panel { padding: 20px; border-radius: 8px; background-color: #FFFFFF; }
   .produk-harga { color: #4F46E5 !important; font-size: 22px; }
   .produk-info { color: #94A3B8; font-size: 14px; }
   ```

**Tugas:**
1. Temukan minimal empat penyimpangan terhadap spesifikasi bagian F dan disiplin token, lalu tuliskan dalam tabel: baris aturan, penyimpangan, dan nilai yang benar.
2. Perbaiki aturan tersebut sehingga seluruh nilai berasal dari token atau spesifikasi (perhatikan nilai yang bukan kelipatan 8 px, radius yang tidak sesuai token, dan warna teks info yang terlalu pucat).
3. Jelaskan mengapa `!important` tidak diperlukan pada kasus ini.

**Bukti yang dikumpulkan:** Tabel temuan dan berkas CSS sebelum-sesudah; sertakan satu tangkapan layar hasil tampilan akhir.

### Lab 6 — Rapikan urutan dan hapus kode mati

**Konteks:** Berkas latihan `latihan/demo-kotor.css` berisi aturan yang tercecer: kelas peninggalan eksperimen, aturan yang tidak mengenai elemen apa pun di halamanmu, dan satu nama kelas berantakan.

   ```css
   /* kustom */
   .judulBesarMerah { color: red; font-size: 30px; }

   /* kustom */
   .panel-hilang { background-color: pink; }

   :root { --clr-primary: #4F46E5; --radius: 12px; }

   body { font-family: Arial, sans-serif; }

   /* kustom */
   .produk-panel { padding: 24px; border-radius: var(--radius); }
   ```

**Tugas:**
1. Susun ulang berkas itu mengikuti urutan token `:root` → gaya dasar → komponen.
2. Hapus minimal satu aturan yang tidak pernah mengenai elemen apa pun dan jelaskan dasarnya.
3. Ganti nama kelas yang berantakan mengikuti pola blok-elemen kebab-case, lalu samakan namanya jika kelas itu dipakai di HTML.
4. Sertakan komentar singkat berbahasa Indonesia pada setiap blok yang kamu rapikan.

**Bukti yang dikumpulkan:** Berkas CSS sebelum dan sesudah beserta daftar perubahan satu baris per item.

### Lab 7 — Audit nilai terhitung lewat panel Computed

**Konteks:** Setelah komponen jadi, pekerjaan berikutnya adalah membuktikan kesetiaannya, bukan merasakannya. Panel Computed pada DevTools menunjukkan nilai akhir yang benar-benar menyala pada elemen terpilih.

**Tugas:**
1. Buka halaman hasil Lab 3 atau Lab 4 pada lebar 1440 px.
2. Isi tabel audit berisi minimal enam pemeriksaan: ukuran dan ketabalan `h3` kartu, `line-height` paragraf, `border-radius` kartu, `padding` kartu, jarak antarkolom pada `row`, dan lebar `.container`.
3. Tuliskan nilai spesifikasi, nilai hasil Computed, dan selisihnya; tandai setiap selisih yang melewati toleransi ± 2 px.
4. Perbaiki satu temuan dengan selisih terbesar, lalu ambil tangkapan ulang sebagai bukti.

**Bukti yang dikumpulkan:** Tabel audit terisi, tangkapan panel Computed, dan tangkapan hasil perbaikan.

### Lab 8 — Cek aksesibilitas komponen hasil translasi

**Konteks:** Nilai kontras dan `alt` sebaiknya diperiksa sejak fase translasi, bukan setelah halaman selesai. Fokus lab ini adalah tiga pemeriksaan cepat pada komponen milikmu sendiri.

**Tugas:**
1. Periksa seluruh `img` pada halaman latihanmu: pastikan setiap gambar konten punya `alt` deskriptif dan tidak ada `alt="gambar"`.
2. Periksa urutan heading halaman: satu `h1`, lalu `h2`, lalu `h3` tanpa lompatan level.
3. Ukur kontras dua pasangan warna memakai pembaca warna pada DevTools: teks badge "Best Seller" di atas latarnya, dan teks tombol "Tambah ke Keranjang" di atas latarnya. Catat rasionya.
4. Perbaiki satu kekurangan yang kamu temukan, lalu tulis dampaknya bagi pengguna pembaca layar atau pengguna berkontras rendah.

**Bukti yang dikumpulkan:** Tabel hasil tiga pemeriksaan, nilai rasio kontras, dan cuplikan perbaikan yang dilakukan.

### Lab 9 — Translasi keadaan (state) secara statis

**Konteks:** Desain keranjang belanja memiliki dua tampilan: panel tertutup dan panel terbuka. Karena JavaScript di luar cakupan mata kuliah, keadaan itu harus diterjemahkan sebagai tampilan statis dengan catatan perilakunya.

**Tugas:**
1. Tambahkan satu panel keranjang sederhana pada halaman latihanmu, lalu tandai keadaannya dengan kelas status, misalnya `.keranjang-panel--terbuka`.
2. Tulis aturan CSS untuk keadaan terbuka (posisi, latar, border, radius, bayangan) memakai token yang tersedia.
3. Tambahkan gaya `:focus-visible` pada tombol utama agar jejak fokus terlihat jelas.
4. Tulis komentar di HTML yang menerangkan bahwa perilaku buka/tutup sesungguhnya ditangani skrip di luar cakupan mata kuliah.

**Bukti yang dikumpulkan:** Berkas HTML dan CSS, tangkapan layar keadaan terbuka, serta tangkapan layar saat tombol utama menerima fokus keyboard.

### Lab 10 — Jalankan fidelity checklist sembilan item

**Konteks:** Checklist 14.7 adalah pemeriksaan terakhir sebelum sebuah halaman dinyatakan selesai. Kali ini kamu menjalankannya atas halaman hasil latihanmu sendiri dan menyimpan hasilnya sebagai catatan.

**Tugas:**
1. Jalankan sembilan item checklist (tipografi, warna, jarak, radius, grid, kontainer, ikon, responsif, aksesibilitas) pada satu halaman latihan pilihanmu.
2. Isi berkas `catatan-fidelity.txt` berisi tabel: nomor item, hasil pemeriksaan, nilai yang dibandingkan, dan status lulus/temuan.
3. Tandai setiap item yang belum lulus beserta rencana tindak lanjutnya.
4. Sertakan dua tangkapan layar halaman pada 1440 px dan 375 px sebagai lampiran catatan.

**Bukti yang dikumpulkan:** Berkas `catatan-fidelity.txt`, dua tangkapan layar responsif, dan daftar prioritas perbaikan bila ada temuan.
