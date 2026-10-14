# Kuis Ringkas — Bab 11: Form dan User Interface Design

> Frontend Development & Web Design · Semester III · _Kuis Ringkas per Bab_
> 10 soal (5 pilihan ganda + 5 isian singkat) · estimasi waktu ±15 menit · tingkat kesulitan campuran (C1–C4)
> Kunci + pembahasan: [kunci-kuis-ringkas.md](kunci-kuis-ringkas.md) · Bank lengkap 14 bab: [kuis-ringkas.md](../kuis-ringkas.md)

---

**Bagian A — Pilihan Ganda (5 soal)**

1. Pilihan pada `select` "Topik" di form kontak Tokosaya makin banyak dan perlu dikelompokkan, misalnya kelompok pertanyaan produk dan kelompok status pesanan. Elemen yang dipakai untuk menamai tiap kelompok pilihan di dalam `select` adalah...
   - A. `<option selected>` pada baris pertama setiap kelompok
   - B. `<optgroup label="…">` yang membungkus sekelompok `<option>`
   - C. `<fieldset>` yang disisipkan di antara `<option>`
   - D. `<legend>` di dalam `<select>`, tepat di atas kelompoknya

2. Sebagian besar pembeli Tokosaya membuka form kontak dari HP. Untuk medan Nomor Telepon, bab ini menganjurkan `type="tel"` karena...
   - A. isiannya otomatis ditolak browser bila mengandung karakter selain angka
   - B. angkanya disamarkan dengan tanda bintang agar tidak terbaca orang di sekitar
   - C. perangkat yang mendukung akan menampilkan pad angka saat medan difokuskan
   - D. formatnya langsung diperiksa kecocokannya dengan kode wilayah Indonesia

3. Medan Pesan pada halaman kontak dibangun dengan `<textarea>`, bukan `<input>`. Pernyataan yang benar tentang `<textarea>` adalah...
   - A. isi awalnya ditulis di antara tag pembuka dan penutup; `input` menyimpannya pada atribut `value`
   - B. isi awalnya ditulis pada atribut `value`, sama seperti `input` teks biasa
   - C. `textarea` hanya dapat menampung satu baris sehingga tidak cocok untuk pesan
   - D. tinggi tampilan `textarea` sepenuhnya tetap dan tidak dapat diubah pengguna

4. Form kontak memasang atribut `required` pada medan email. Ketika tombol "Kirim Pesan" ditekan dalam keadaan email masih kosong, perilaku bawaan browser adalah...
   - A. mengirim formulir dengan email kosong karena `required` hanya hiasan visual
   - B. mengosongkan seluruh medan form supaya pembeli mengisi ulang dari awal
   - C. memasang kelas `is-invalid` lalu menampilkan pesan `invalid-feedback`
   - D. menahan pengiriman dan menampilkan pesan bawaan bahwa medan wajib diisi

5. Seorang rekan tim mengusulkan menghapus cincin fokus pada semua medan kontak agar halaman tampak "lebih bersih". Sikap yang paling sesuai dengan bab ini adalah...
   - A. setuju, karena cincin fokus tidak diperlukan di perangkat sentuh
   - B. menolak; gaya fokus adalah penunjuk utama pengguna keyboard dan harus tetap terlihat, diatur misalnya lewat `:focus-visible`
   - C. setuju, asalkan warna bingkai medan diganti dengan warna kustom
   - D. menolak, tetapi cukup mempertahankannya pada medan teks dan menghapusnya dari tombol kirim

**Bagian B — Isian Singkat (5 soal)**

6. Halaman kontak memuat `form-text` di bawah medan telepon dan akan memuat `invalid-feedback` di bawah medan email. Jelaskan perbedaan peran kedua elemen itu dan kapan masing-masing tampil.

7. Jelaskan perbedaan peran `mb-3` pada pola dasar Bootstrap dan `g-3` pada layout `row` di dalam sebuah form.

8. Medan email pada form kontak memakai `autocomplete="email"`. Sebutkan dua manfaat atribut `autocomplete`.

9. Pada halaman keranjang, tim ingin pilihan pengiriman berupa `select` tidak dapat diubah oleh pembeli, lalu berencana memasang atribut `readonly` pada elemen itu. Apakah rencana tersebut tepat? Jelaskan singkat.

10. Atribut `autofocus` memindahkan fokus secara otomatis saat halaman dimuat. Kapan pemakaiannya wajar dan kapan sebaiknya dihindari? Beri satu contoh untuk masing-masing situasi.
