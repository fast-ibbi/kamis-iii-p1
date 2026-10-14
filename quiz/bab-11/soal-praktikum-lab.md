# Soal Praktikum Lab — Bab 11: Form dan User Interface Design

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 10 soal praktikum · estimasi 20–40 menit per soal
> Langkah solusi + kriteria penilaian: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-praktikum-lab.md](../soal-praktikum-lab.md)

---

**Praktikum Lab (10 soal)**

### Lab 1 — Form login yang mengandalkan *placeholder*
**Konteks:** Tokosaya menyiapkan halaman `masuk.html` untuk pelanggan lama. Rekanmu menulis form ini cepat-cepat; ia mengaku "labelnya sudah ada, cuma di dalam kotak".

```html
<form action="#" method="get">
  <div class="mb-3">
    <input type="email" class="form-control" placeholder="Email pelanggan">
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" placeholder="Kata sandi">
  </div>
  <button class="btn btn-primary">Masuk</button>
  <button class="btn btn-outline-secondary">Batal</button>
</form>
```

**Tugas:**
1. Ganti kedua *placeholder* menjadi label yang benar-benar terlihat dan terhubung ke medannya, lalu pertahankan *placeholder* hanya bila memang berguna sebagai contoh format.
2. Tambahkan atribut `autocomplete` yang sesuai pada medan email menurut daftar *token* pada Subbab 11.7.
3. Perbaiki tombol "Batal" supaya tidak menyerahkan form saat ditekan, dan jelaskan perilaku bawaan HTML yang mendasari perbaikan itu.

**Bukti yang dikumpulkan:** file `masuk.html` hasil perbaikan, daftar tiga perubahan beserta alasannya, dan satu tangkapan layar form pada lebar 375 piksel.

### Lab 2 — Medan tanggal dan jumlah pada opsi Ambil di Toko
**Konteks:** Opsi "Ambil di Toko" pada halaman keranjang belum punya medan pengambilan. Pemilik toko ingin tanggalnya seragam dan jumlah unitnya dibatasi satu sampai lima.

**Tugas:**
1. Tambahkan satu kelompok medan berisi medan Tanggal Pengambilan Barang dan satu medan Jumlah Unit.
2. Pakai atribut `type` yang mengunci format tanggal, dan batasi jumlah unit dengan `min` serta `max`.
3. Susun keduanya berdampingan pada layar sedang ke atas dan menumpuk di HP, dengan satu teks bantuan berisi alasan data tanggal diminta.
4. Hubungkan teks bantuan itu ke medannya secara semantik.

**Bukti yang dikumpulkan:** file HTML dan tangkapan layar pada lebar 375 dan 768 piksel.

### Lab 3 — DevTools: mengukur cincin fokus
**Konteks:** Tim Tokosaya ingin memastikan bahwa pengguna keyboard tetap bisa melihat medan yang sedang aktif, karena proyek ini akan diaudit pada Bab 13.

**Tugas:**
1. Buat halaman kecil `latihan/uji-fokus.html` berisi tiga medan berkelas `form-control` di dalam kelompok `mb-3`, ditulis seperti halaman praktikum lain (CDN Bootstrap 5.3.3 dan `css/style.css`).
2. Di DevTools, fokuskan medan pertama dengan tombol Tab, lalu catat nilai *computed* `outline-color`, `outline-width`, dan `outline-offset`.
3. Nonaktifkan sementara aturan `:focus-visible` pada panel Styles, lalu bandingkan nilai *computed*-nya lagi.
4. Jelaskan mengapa aturan itu ada di `css/style.css` dan bukan sekadar mengandalkan gaya bawaan browser.

**Bukti yang dikumpulkan:** tabel dua baris (sebelum dan sesudah aturan dinonaktifkan), tangkapan layar panel Styles, dan satu paragraf penjelasan.

### Lab 4 — Merapikan layout form yang terlalu sempit di HP
**Konteks:** Halaman pendaftaran keanggotaan Tokosaya memakai semua medan dalam `col-6` supaya "hemat tempat". Akibatnya di HP tiap medan hanya selebar separuh layar.

```html
<form action="#" method="get">
  <div class="row">
    <div class="col-6">
      <label for="nm" class="form-label">Nama</label>
      <input type="text" class="form-control" id="nm" name="nm">
    </div>
    <div class="col-6">
      <label for="tlp" class="form-label">Telepon</label>
      <input type="tel" class="form-control" id="tlp" name="tlp">
    </div>
    <div class="col-6">
      <label for="alm" class="form-label">Alamat</label>
      <textarea class="form-control" id="alm" name="alm" rows="3"></textarea>
    </div>
  </div>
</form>
```

**Tugas:**
1. Ubah susunan sehingga pasangan medan pendek berdampingan hanya mulai titik henti *medium*, dan tetap satu kolom penuh di HP.
2. Beri jarak antarkolom sesuai pola bab ini, dan biarkan `textarea` mengambil lebar penuh pada semua ukuran layar.
3. Jelaskan beda peran jarak `g-*` pada `row` dengan utilitas `mb-*` pada kelompok medan.

**Bukti yang dikumpulkan:** file hasil perbaikan, tangkapan layar pada 375 dan 768 piksel, dan dua kalimat penjelasan.

### Lab 5 — Kelompok radio "Waktu Pengambilan"
**Konteks:** Tokosaya membuka layanan ambil di toko dengan tiga jendela waktu: Pagi (09.00–12.00), Siang (13.00–16.00), dan Sore (17.00–20.00). Pembeli hanya boleh memilih satu jendela.

**Tugas:**
1. Bangun satu kelompok pilihan memakai elemen radio yang saling meniadakan, dengan satu judul kelompok yang terbaca pembaca layar.
2. Beri pilihan pertama status terpilih sejak awal.
3. Pastikan setiap label pilihan terhubung ke radio pasangannya.
4. Jelaskan alasan memakai radio alih-alih checkbox untuk kasus ini.

**Bukti yang dikumpulkan:** file HTML, tangkapan layar kelompok pilihan, dan satu paragraf penjelasan.

### Lab 6 — Status visual statis pada medan kupon
**Konteks:** Panel demonstrasi status Tokosaya akan diperlihatkan ke dosen pembimbing. Kamu diminta menampilkan dua keadaan sekaligus: satu medan yang isiannya memenuhi syarat, dan satu medan kupon yang bermasalah.

**Tugas:**
1. Buat medan "Nama Penerima" yang berstatus memenuhi syarat lengkap dengan pesan centangnya.
2. Buat medan "Kode Kupon" yang berstatus bermasalah lengkap dengan pesan kesalahan berisi petunjuk format, sekaligus tetap menampilkan teks bantuan permanen di bawahnya.
3. Beri komentar HTML yang menyatakan bahwa kelas status itu ditulis manual sebagai latihan *styling*.
4. Jelaskan apa yang terjadi pada kedua pesan itu bila kelas status pada medannya dihapus.

**Bukti yang dikumpulkan:** file `demo-status.html`, tangkapan layar kedua medan, dan satu paragraf penjelasan.

### Lab 7 — Audit aksesibilitas lima medan
**Konteks:** Sebuah form pendaftaran bimbingan akademik beredar dengan potongan-potongan berikut. Kamu berperan sebagai pemeriksa aksesibilitas.

```html
<input type="text" class="form-control" placeholder="Nama lengkap">
<label class="form-label">Nomor Pokok Mahasiswa</label>
<input type="text" class="form-control" id="npm" aria-describedby="bnt-npm">
<div class="form-text" id="catatan-npm">Tulis 9 digit angka.</div>
<input type="radio" class="form-check-input" name="sesi-1" id="pg" value="pagi">
<input type="radio" class="form-check-input" name="sesi-2" id="sr" value="sore">
<input type="checkbox" class="form-check-input" id="makan">
```

**Tugas:**
1. Temukan minimal empat pelanggaran pada potongan itu dan sebutkan ketentuan bab ini yang dilanggar.
2. Tulis versi perbaikan setiap medan beserta label, atribut penunjuk, dan pengelompokan yang tepat.
3. Jelaskan mengapa radio sesi harus berbagi `name` yang sama.

**Bukti yang dikumpulkan:** tabel temuan (potongan → pelanggaran → perbaikan) dan satu file HTML berisi versi perbaikannya.

### Lab 8 — *Input group* untuk satuan Rupiah
**Konteks:** Halaman pengembalian dana Tokosaya meminta nominal transfer. Angka telanjang tanpa satuan sering membuat pelanggan ragu apakah yang diminta rupiah atau ribuan rupiah.

**Tugas:**
1. Bangun medan "Nominal Transfer" dengan lampiran statis `Rp` di sisi kiri dan tombol "Isi Total Pesanan" di sisi kanan medan.
2. Pakai `type` yang tepat untuk angka, batasi nilai minimum dan maksimumnya, dan beri satu teks bantuan berisi contoh format.
3. Pastikan tombol lampiran tidak menyerahkan form, dan teks bantuan terhubung ke medannya.

**Bukti yang dikumpulkan:** file HTML dan satu tangkapan layar medan pada lebar 375 serta 768 piksel.

### Lab 9 — Refactor "label dalam kotak" pada form pesan
**Konteks:** Ini form hubungi-kami versi lama. Seluruh identitas medan hanya hidup di dalam *placeholder*.

```html
<form action="#" method="get">
  <p><input type="text" class="form-control" placeholder="Nama Anda"></p>
  <p><input type="text" class="form-control" placeholder="Email anda"></p>
  <p><input type="text" class="form-control" placeholder="No HP"></p>
  <p><textarea class="form-control" rows="4" placeholder="Tulis pesan"></textarea></p>
</form>
```

**Tugas:**
1. Tulis ulang form itu memakai label eksplisit yang terhubung ke setiap medan, dan pilih `type` yang semantik untuk email serta telepon.
2. Pertahankan *placeholder* hanya untuk contoh format, lalu tuliskan contoh format yang masuk akal untuk masing-masing medan.
3. Tambahkan atribut `autocomplete` pada dua medan identitas dan satu teks bantuan pada medan pesan.
4. Pastikan setiap kelompok medan memakai pembungkus berjarak antar-kelompok.

**Bukti yang dikumpulkan:** file hasil refactor beserta tabel empat baris (medan → `type` → *placeholder* contoh format → *token* `autocomplete`).

### Lab 10 — Kartu ringkasan pesanan dengan perhitungan baru
**Konteks:** Pesanan pelanggan berisi Headphone Studio HS-15 2 unit (Rp425.000 per unit), Charger Cepat 30W CP-30 1 unit (Rp120.000), dan Webcam HD WC-720 1 unit (Rp310.000). Pelanggan memilih pengiriman Same Day Rp35.000.

**Tugas:**
1. Hitung subtotal (jumlah unit), ongkos kirim, dan total pesanan itu, lalu tuliskan angkanya memakai format harga baku Tokosaya (tanpa spasi setelah `Rp`).
2. Bangun halaman dua kolom: kolom kiri (`col-lg-8`) berisi tabel item yang tetap rapi tanpa meluap di layar sempit, kolom kanan (`col-lg-4`) berisi kartu ringkasan dengan tiga baris biaya dan satu tombol utama berlabel "Lanjut ke Pembayaran".
3. Tandai baris total dengan penekanan visual dan garis pemisah, lalu pastikan kartu ringkasan tetap nyaman dibaca sebagai satu kolom di HP.
4. Tambahkan keterangan tabel yang hanya terbaca pembaca layar, dan satu catatan *checkout* prototipe statis di bawah tombol. Jelaskan pula atribut `type` yang harus dipasang pada tombol utama itu supaya tidak menyerahkan formulir secara tidak sengaja.

**Bukti yang dikumpulkan:** file `keranjang-uji.html`, perhitungan tertulis, dua kalimat penjelasan tentang `type` tombol, dan tangkapan layar pada lebar 1200 dan 375 piksel.
