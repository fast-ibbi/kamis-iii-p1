# Soal Pilihan Ganda — Bab 11: Form dan User Interface Design

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 15 soal pilihan ganda · tingkat kesulitan campuran (C1–C6)
> Kunci + pembahasan: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-pilihan-ganda.md](../soal-pilihan-ganda.md)

---

**Pilihan Ganda (15 soal)**

1. Bab ini merumuskan empat prinsip desain form: satu kolom, label yang selalu terlihat, pengelompokan dan progres, serta tombol aksi yang jelas. Manakah pernyataan yang termasuk prinsip "tombol aksi yang jelas"?
   - A. Menampilkan sebanyak mungkin tombol berlabel "OK" agar pengguna cepat selesai
   - B. Satu tombol utama per halaman dengan label yang menyatakan akibatnya, misalnya "Kirim Pesan"
   - C. Memberi semua tombol kelas `btn-outline-secondary` supaya tampilannya seragam
   - D. Menyembunyikan tombol utama sampai seluruh medan terisi
2. Mengapa bab ini menyarankan medan disusun dalam satu kolom?
   - A. Mata membaca dengan melompat sedikit melintasi baris, dan di HP dua kolom membuat medan sempit serta salah ketik meningkat
   - B. Dua kolom hanya mungkin dibentuk dengan CSS Grid, bukan utilitas grid Bootstrap
   - C. Satu kolom memastikan *placeholder* bisa dipakai sebagai pengganti label
   - D. Satu kolom membuat pengguna tidak perlu menekan tombol Tab
3. Form pendaftaran ujian meminta mahasiswa memilih satu sesi ujian: pagi atau sore. Kombinasi elemen dan atribut yang tepat adalah …
   - A. Dua `checkbox` dengan nilai `name` berbeda, tanpa pembungkus kelompok
   - B. Satu `select` tanpa atribut `multiple` dengan dua `option` yang keduanya `selected`
   - C. Dua `input type="text"` dengan label berbeda untuk masing-masing sesi
   - D. Dua `input type="radio"` dengan nilai `name` yang sama di dalam satu `fieldset`
4. Pada halaman keranjang Tokosaya, pembeli yang memilih opsi "Ambil di Toko" mengisi medan Tanggal Pengambilan Barang. Agar browser menyediakan pemilih tanggal bawaan dan format isiannya seragam, atribut `type` yang paling tepat adalah …
   - A. `text`, supaya pembeli bebas menulis "besok" atau "5 Jan"
   - B. `search`
   - C. `date`
   - D. `password`
5. Kelas `form-text` dipakai untuk teks bantuan permanen di bawah medan. Supaya teks itu ikut dibacakan pembaca layar, medannya perlu dihubungkan dengan atribut …
   - A. `aria-describedby` yang menunjuk `id` teks bantuan
   - B. `aria-hidden`
   - C. `aria-current`
   - D. `autofocus`
6. Isi keranjang Tokosaya: Keyboard Mekanis KX-210 1 unit (Rp650.000), Mouse Wireless MW-88 2 unit (Rp185.000 per unit), dan Flash Drive 64GB FD-64 1 unit (Rp95.000). Pembeli memilih pengiriman Reguler seharga Rp20.000. Angka pada baris Total di kartu Ringkasan Pesanan adalah …
   - A. Rp1.115.000
   - B. Rp1.135.000
   - C. Rp1.150.000
   - D. Rp1.325.000
7. Kode kupon pada keranjang ditulis seperti potongan berikut, dan setiap kali tombol "Pakai" diklik halaman memuat ulang.

```html
<form action="#" method="get">
  <div class="input-group">
    <input type="text" class="form-control" id="kupon" name="kupon">
    <button class="btn btn-outline-primary">Pakai</button>
  </div>
</form>
```

Perbaikan yang paling tepat adalah …
   - A. mengganti kelas tombol menjadi `btn-primary`
   - B. memindahkan tombol ke luar `input-group`
   - C. menambahkan `type="button"` pada elemen tombol
   - D. menambahkan atribut `required` pada medan kupon
8. Pada form pengembalian barang, medan "Nomor Pesanan" harus tetap ikut terkirim bersama form, tetapi isinya tidak boleh diubah pengguna. Atribut yang tepat adalah …
   - A. `disabled`
   - B. `required`
   - C. `autocomplete="off"`
   - D. `readonly`
9. Urutan fokus (aliran tab) sebuah form pada dasarnya mengikuti …
   - A. urutan elemen di dalam dokumen HTML
   - B. abjad nilai atribut `id` setiap medan
   - C. urutan kelas pada *stylesheet* Bootstrap
   - D. nilai `name` medan dari yang paling pendek
10. Bab ini menyarankan menghindari nilai positif pada atribut `tabindex` karena …
   - A. membuat elemen tidak dapat difokuskan sama sekali
   - B. mengubah urutan fokus alami sehingga pengguna keyboard bisa bingung
   - C. hanya dikenali oleh pembaca layar
   - D. menghapus cincin fokus bawaan Bootstrap
11. Pada `kontak.html`, medan nama memakai status statis dan medan email ditulis dengan pesan "Format email belum tepat — contoh: nama@domain.id." Supaya pesan itu benar-benar muncul di bawah medan email, syaratnya adalah …
   - A. medan email diberi atribut `disabled`
   - B. halaman memuat paket JavaScript Bootstrap
   - C. medan email memakai kelas `is-invalid` dan pesannya dibungkus `invalid-feedback`
   - D. pembungkus pesannya diberi `role="alert"`
12. Sebuah halaman pendaftaran menampilkan tiga tombol yang sama-sama bergaya primer dengan label "Proses", "Lanjut", dan "Kirim". Evaluasi yang paling sesuai prinsip tombol aksi pada bab ini adalah …
   - A. ketiganya sudah benar karena semuanya membawa pengguna maju
   - B. ketiganya sebaiknya diganti menjadi tautan biasa
   - C. ketiganya sebaiknya diberi `type="submit"` agar konsisten
   - D. sisakan satu tombol utama berlabel yang menyatakan akibatnya (misalnya "Kirim Pendaftaran") dan turunkan gaya tombol pendamping
13. Petugas penerimaan kesulitan mencocokkan tanggal ujian yang diisi bebas oleh mahasiswa, mulai dari "5/1", "5 Jan", sampai "besok". Perbaikan yang paling tepat menurut bab ini adalah …
   - A. memakai `type="date"` dengan label permanen sehingga formatnya terkunci sejak awal
   - B. menambah *placeholder* berisi contoh "5/1" pada medan tanggal
   - C. menambah satu pesan kesalahan umum "ada kolom yang salah"
   - D. mengganti label tombol pengiriman menjadi "OK"
14. Kamu diminta merancang medan "Kode Promo" pada checkout Tokosaya: punya label, petunjuk format, dan satu tombol pengujian kupon yang menempel di ujung kanan medan. Rancangan yang paling tepat adalah …
   - A. satu `<input type="text" class="form-control" placeholder="Kode Promo">` tanpa label
   - B. pembungkus `mb-3` berisi `label.form-label`, `input-group` berisi medan `form-control` dan tombol `type="button"`, serta `form-text` berisi contoh format
   - C. `form-select` berisi daftar seluruh kode promo yang berlaku di sistem
   - D. `textarea` dengan `rows="2"` supaya kode promo panjang tetap terbaca
15. Kamu diminta menambahkan blok "Berlangganan Info Produk" pada `kontak.html`: satu medan email, satu tombol "Daftar" yang menempel di ujung medan, satu teks bantuan, dan satu checkbox persetujuan. Susunan kelas yang tepat adalah …
   - A. `form-text` pada label, `is-valid` pada medan, dan `form-check` pada tombol
   - B. `form-control` pada tombol, `form-select` pada checkbox, dan `visually-hidden` pada teks bantuan
   - C. medan `form-control` di dalam `input-group`, tombol lampiran bergaya `btn`, teks bantuan `form-text` yang dihubungkan `aria-describedby`, dan `form-check` untuk checkbox
   - D. `card` untuk medan, `alert` untuk tombol, dan `badge` untuk teks bantuan
