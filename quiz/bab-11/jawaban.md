# Kunci Jawaban & Rubrik — Bab 11: Form dan User Interface Design

> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)
> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)

---

### Kunci Pilihan Ganda

1. **B** — Prinsip CTA menuntut satu tombol utama per halaman dengan label yang menyatakan akibatnya; tombol ganda bergaya sama justru membuat pengguna berpikir dua kali.
2. **A** — Alasan bab ini: mata membaca dengan melompat sedikit melintasi baris, dan pada HP dua kolom membuat medan sempit sehingga salah ketik meningkat.
3. **D** — Radio yang satu kelompok wajib memakai nilai `name` yang sama supaya browser tahu pilihannya saling meniadakan, dan `fieldset` membawa konteks kelompoknya bagi pembaca layar.
4. **C** — Tabel *type* pada bab ini memasangkan `date` dengan pemilih tanggal bawaan, contohnya untuk tanggal pengambilan barang.
5. **A** — Teks bantuan yang tidak dihubungkan akan terdengar sebagai paragraf biasa; pola yang benar memberi `id` pada `form-text` lalu merujuknya lewat `aria-describedby` dari medan.
6. **B** — Subtotal 650.000 + 370.000 + 95.000 = Rp1.115.000; ditambah ongkir Reguler Rp20.000 menjadi Rp1.135.000. Nilai Rp1.150.000 adalah jebakan bila ongkir Same Day (Rp35.000) yang dipakai.
7. **C** — Di dalam `form`, tombol tanpa atribut `type` dianggap tombol kirim; memberi `type="button"` mencegah form terkirim tanpa sengaja.
8. **D** — `readonly` membuat medan tetap terlihat dan tetap terkirim tetapi tidak dapat diubah; `disabled` justru membuat medannya tidak ikut terkirim.
9. **A** — Secara bawaan aliran fokus mengikuti susunan elemen di dokumen HTML, karena itu prinsip "urutan visual = urutan DOM" penting sejak awal.
10. **B** — Nilai positif pada `tabindex` mengubah urutan alami fokus dan membingungkan pengguna keyboard; urutan terbaik biasanya justru tanpa `tabindex` sama sekali.
11. **C** — Pembungkus `invalid-feedback` hanya tampil ketika medan di atasnya memakai kelas `is-invalid`; pasangan kelas status dan pembungkus pesan harus cocok.
12. **D** — Satu tombol utama dengan label yang menyatakan akibatnya, sedangkan tombol pendamping diturunkan gayanya, adalah penerapan langsung prinsip CTA.
13. **A** — Kasus ini menuntut kontrol yang menstandarkan isian; `type="date"` mengunci format tanpa perlu skrip, sedangkan *placeholder* contoh justru tidak mengikat apa pun.
14. **B** — Rancangan itu menggabungkan pola dasar (pembungkus `mb-3` + `form-label`) dengan `input-group` untuk tombol lampiran `type="button"` dan `form-text` sebagai petunjuk format.
15. **C** — Blok berlangganan adalah kombinasi `input-group` (medan + tombol lampiran), `form-text` yang dihubungkan `aria-describedby`, dan `form-check` untuk persetujuan.

### Jawaban Essay

1. **Poin inti:**
   - Satu kolom: aliran baca vertikal, menjaga medan tetap lebar di HP sehingga salah ketik berkurang.
   - Label selalu terlihat: label adalah tanda alamat medan yang tetap ada saat pengguna mengetik; *placeholder* hilang dan tidak bisa diandalkan.
   - Pengelompokan dan progres: medan sebanding diguguskan (data pribadi, alamat, pembelian) dan proses panjang ditampilkan bertahap agar pengguna tahu posisinya.
   - Tombol aksi yang jelas: satu tombol utama berlabel yang menyatakan akibatnya; tombol ganda bergaya sama membingungkan.
   - Kaitan risiko data: tanpa label yang jelas pada checkout, alamat bisa terisi keliru dan tersimpan salah di basis data sehingga pesanan gagal diantar.
   **Skor:** 1 + 1 + 1 + 1 + 2 = 6

2. **Poin inti:**
   - Checkbox memperbolehkan lebih dari satu pilihan sekaligus (persetujuan, langganan); radio hanya satu pilihan dalam satu kelompok.
   - Radio sekelompok wajib memakai nilai `name` yang sama; dari situlah browser tahu pilihannya saling meniadakan.
   - `fieldset`/`legend` dipakai setiap kali ada lebih dari satu radio atau checkbox yang masih saling terkait, karena browser dan pembaca layar mengenalinya sebagai satu unit dan konteks kelompok tetap terbawa.
   - Contoh: `<fieldset><legend>Program Studi</legend>` dengan dua `input type="radio" name="prodi"` ber-`id` berbeda dan masing-masing `<label for="...">`.
   **Skor:** 2 + 2 + 2 + 2 = 8

3. **Poin inti:**
   - `row` mengelompokkan medan agar diatur grid; `g-3` memberi jarak antar sel di dalam `row`.
   - `col-md-6` membuat dua medan berdampingan sejak titik henti *medium* dan otomatis menumpuk satu kolom di HP, sesuai prinsip satu kolom pada layar kecil.
   - `col-12` dialokasikan untuk medan panjang yang jarang dipasangkan, seperti textarea, biar lebarnya penuh.
   - Bila `col-md-6` diganti `col-6`, medan tetap dua kolom di HP sehingga isian menjadi sempit dan salah ketik meningkat.
   **Skor:** 2 + 3 + 2 + 2 = 9

4. **Poin inti:**
   - *Placeholder* tanpa label melanggar prinsip "label selalu terlihat" dan ketentuan label eksplisit: teks hilang saat pengguna mengetik dan tidak andal bagi pembaca layar. Perbaikan: tambahkan `<label for="...">` yang terhubung ke setiap medan.
   - Dua radio dengan `name` berbeda tidak dikenali sebagai satu kelompok, sehingga keduanya bisa terpilih bersamaan. Perbaikan: samakan nilai `name` dan bungkus dalam `fieldset`/`legend`.
   - Satu pesan kesalahan umum melanggar ketentuan status per medan: informasi tidak boleh disampaikan lewat warna/makna umum saja. Perbaikan: pasangkan `is-invalid` + `invalid-feedback` bertulis di tiap medan bersangkutan.
   - Tombol berlabel "Proses" melanggar prinsip CTA karena tidak menyatakan akibatnya. Perbaikan: ganti dengan label yang jelas, misalnya "Kirim Pendaftaran".
   **Skor:** 2 + 2 + 2 + 1 = 7

5. **Poin inti:**
   - Medan email memakai `type="text"` padahal seharusnya `type="email"`, sehingga keyboard khusus dan pemeriksaan format bawaan browser tidak aktif. Perbaikan: ganti atribut `type` (paling mendesak karena memengaruhi isian).
   - Medan email tidak punya `autocomplete`, padahal bab ini menempatkan identifikasi tujuan medan sebagai bagian aksesibilitas (WCAG 1.3.5). Perbaikan: tambahkan `autocomplete="email"`.
   - *Placeholder* "Alamat email aktif" tidak boleh menggantikan bantuan berbentuk aturan; sebaiknya pindahkan ke `form-text` yang dihubungkan `aria-describedby`, dan sisakan *placeholder* sebagai contoh format.
   - Checkbox promo tidak punya `name` maupun `value`, sehingga isinya tidak terkirim sebagai satu kesatuan data; selain itu tidak ada pesan kesalahan bertulis yang menjelaskan bila persyaratan tidak dipenuhi (warna saja tidak cukup).
   - Urutan prioritas: perbaiki `type` dan `autocomplete` lebih dulu karena keduanya langsung memengaruhi masuknya data yang benar, baru penataan bantuan dan pesan bertulis.
   **Skor:** 2 + 2 + 2 + 2 + 1 = 9

### Jawaban Praktikum Lab

1. **Langkah solusi:** Kedua *placeholder* diganti label, mis. `<label for="email" class="form-label">Email Pelanggan</label>` dengan `<input type="email" id="email" name="email" autocomplete="email" class="form-control">`. Tombol Batal diberi `type="button"` karena di dalam `form` tombol tanpa atribut `type` dianggap tombol kirim sehingga form terkirim tanpa sengaja. *Placeholder* boleh disisakan hanya sebagai contoh format, misalnya `nama@contoh.id`, bukan sebagai nama medan.
   **Kriteria penilaian:** label eksplisit dengan pasangan `for`–`id` benar 40%; `type="button"` pada tombol batal beserta alasannya 30%; `autocomplete` tepat dan *placeholder* hanya untuk contoh format 30%.

2. **Langkah solusi:** Kelompok medan ditulis dalam `row g-3` dengan dua `div.col-md-6`, berisi `label.form-label` + `input` untuk tanggal (`type="date"`) dan jumlah (`type="number"` dengan `min="1" max="5"`). Teks bantuan ditulis `<div class="form-text" id="bantuan-ambil">...</div>` dan medan tanggal dihubungkan dengan `aria-describedby="bantuan-ambil"`.
   **Kriteria penilaian:** `type` semantik dan batas `min`/`max` benar 35%; layout `col-md-6` menumpuk di 375 piksel 30%; label eksplisit serta penghubungan teks bantuan 35%.

3. **Langkah solusi:** Nilai *computed* `outline` pada medan yang difokuskan mengikuti aturan `:focus-visible` di `css/style.css`, yaitu `3px solid var(--clr-primary)` dengan `outline-offset: 2px`. Setelah aturan dinonaktifkan di panel Styles, nilai *computed* berubah mengikuti gaya bawaan browser (atau hilang bila browser memakai `outline: none`). Aturan itu perlu ada supaya gaya fokus memakai warna token proyek dan konsisten di semua halaman.
   **Kriteria penilaian:** pengukuran *computed* dua kondisi lengkap 40%; identifikasi sumber aturan di `css/style.css` 30%; penjelasan alasan aksesibilitas gaya fokus 30%.

4. **Langkah solusi:** `row` diberi gutter `g-3`; medan nama dan telepon masing-masing menjadi `div.col-md-6`; `textarea` alamat menjadi `div.col-12`. Dengan begitu di 375 piksel setiap medan satu kolom penuh, sedangkan di 768 piksel nama–telepon berdampingan dan alamat tetap penuh. Jarak `g-*` mengatur jarak antarkolom di dalam `row`, sedangkan `mb-*` mengatur jarak antarkelompok medan di luar `row`; pilih satu pola dan pakai konsisten.
   **Kriteria penilaian:** perbaikan kelas kolom dan `col-12` untuk textarea 40%; penggunaan gutter `g-3` 25%; penjelasan beda `g-*` vs `mb-*` 20%; bukti tangkapan layar dua lebar 15%.

5. **Langkah solusi:** `<fieldset>` berisi `<legend>Waktu Pengambilan</legend>` dan tiga pasang radio–label: ketiganya `name="waktu-ambil"` dengan `id` berbeda (`ambil-pagi`, `ambil-siang`, `ambil-sore`), masing-masing dibungkus `div.form-check` dengan `input.form-check-input` dan `label.form-check-label for="..."`. Pilihan pertama diberi `checked`. Radio dipilih karena pilihan jendela waktu saling meniadakan; checkbox akan memperbolehkan pembeli memilih lebih dari satu jendela sekaligus.
   **Kriteria penilaian:** `fieldset` + `legend` 25%; `name` sama pada ketiga radio 30%; pasangan label–id lengkap dan satu pilihan `checked` 25%; penjelasan radio vs checkbox 20%.

6. **Langkah solusi:** Medan nama memakai `form-control is-valid` dengan `<div class="valid-feedback">Nama penerima terisi dengan benar.</div>`. Medan kupon memakai `form-control is-invalid` dengan `aria-describedby` ke teks bantuan, disertai `<div class="invalid-feedback">Kode kupon tidak ditemukan. Periksa kembali email promo Anda.</div>` dan `<div class="form-text" id="bantuan-kupon">Format contoh: TKSA-10.</div>`. Komentar HTML menegaskan kelas status ditulis manual karena verifikasi sungguhan memakai JavaScript Bootstrap di luar cakupan. Bila kelas status dihapus, kedua pesan otomatis tidak tampil, sedangkan `form-text` tetap tampil sebagai bantuan permanen.
   **Kriteria penilaian:** pasangan kelas status–pesan tepat 40%; penempatan `form-text` berdampingan dengan pesan status 25%; komentar latihan manual dan penjelasan penghapusan kelas 35%.

7. **Langkah solusi:** Temuan yang diharapkan: (i) medan nama tanpa `label` sama sekali dan memakai *placeholder* sebagai nama medan; (ii) label "Nomor Pokok Mahasiswa" tidak punya atribut `for` sehingga tidak terhubung ke medan mana pun; (iii) `aria-describedby="bnt-npm"` menunjuk `id` yang tidak ada, karena teks bantuannya ber-`id` `catatan-npm`; (iv) kedua radio sesi memakai `name` berbeda sehingga bisa terpilih bersamaan dan tidak dibungkus `fieldset`/`legend`; (v) checkbox tanpa label dan tanpa `name`. Perbaikan: label eksplisit untuk setiap medan, `for` yang cocok dengan `id` medan, `aria-describedby` diarahkan ke `catatan-npm`, radio memakai satu `name` yang sama di dalam `fieldset` ber-`legend`, dan checkbox diberi `name`, `value`, serta label pasangan.
   **Kriteria penilaian:** minimal empat temuan benar 40%; tabel temuan mengaitkan pelanggaran ke ketentuan bab 30%; file perbaikan valid dan lengkap 30%.

8. **Langkah solusi:** Struktur: `div.mb-3` berisi `label.form-label for="nominal"`, lalu `div.input-group` berisi `<span class="input-group-text">Rp</span>`, `<input type="number" class="form-control" id="nominal" name="nominal" min="10000" max="10000000" aria-describedby="bantuan-nominal">`, dan `<button type="button" class="btn btn-outline-primary">Isi Total Pesanan</button>`, ditutup `div.form-text id="bantuan-nominal"` berisi contoh format. Tombol wajib `type="button"` supaya tidak menyerahkan form.
   **Kriteria penilaian:** `input-group` + `input-group-text` Rp 35%; `type` angka dengan batas dan `type="button"` pada tombol 35%; label, teks bantuan, dan penghubungannya 30%.

9. **Langkah solusi:** Setiap medan mendapat label eksplisit, misalnya `<label for="nama" class="form-label">Nama Anda</label>` dengan `<input type="text" class="form-control" id="nama" name="nama" placeholder="Budi Santoso">`. Email memakai `type="email"` dengan *placeholder* `nama@domain.id`, telepon memakai `type="tel"` dengan *placeholder* `0812-3456-7890`, dan pesan tetap `<textarea>` berlabel dengan *placeholder* sebagai contoh. Medan identitas diberi `autocomplete="name"` dan `autocomplete="email"` (ditambah `autocomplete="tel"` pada telepon). Medan pesan diberi `form-text` yang dihubungkan `aria-describedby`, dan setiap kelompok dibungkus pembungkus berjarak seperti `mb-3`.
   **Kriteria penilaian:** label eksplisit pada keempat medan 35%; `type` semantik dan contoh format yang masuk akal 30%; `autocomplete` dan teks bantuan terhubung 35%.

10. **Langkah solusi:** Perhitungan: HS-15 2 × Rp425.000 = Rp850.000; CP-30 1 × Rp120.000 = Rp120.000; WC-720 1 × Rp310.000 = Rp310.000; subtotal Rp1.280.000; ongkos kirim Same Day Rp35.000; total Rp1.315.000. Struktur halaman: `<div class="row g-4">` dengan `<div class="col-lg-8">` berisi tabel item (dibungkus wadah yang mencegah luapan mendatar dan diberi `<caption class="visually-hidden">Daftar produk dalam keranjang</caption>`) serta satu tombol utama `type="button"` berlabel "Lanjut ke Pembayaran", dan `<div class="col-lg-4">` berisi `card` + `list-unstyled d-grid gap-2` untuk tiga baris biaya. Baris total diberi `fw-bold` dan `border-top pt-2`; di bawah titik henti `lg` kedua kolom menumpuk sehingga kartu ringkasan tampil satu kolom penuh. Tombol utama wajib `type="button"` karena di dalam `form` tombol tanpa atribut `type` dianggap tombol kirim.
   **Kriteria penilaian:** ketiga angka benar 30%; pembagian `col-lg-8`/`col-lg-4`, penekanan baris total, dan CTA tunggal 30%; `visually-hidden` pada keterangan tabel 15%; `type="button"` beserta alasannya 10%; perilaku menumpuk di HP 15%.
