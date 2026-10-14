# Kunci Kuis Ringkas — Bab 02: HTML5 dan Struktur Semantik

> Frontend Development & Web Design · Semester III · _Kunci Kuis Ringkas per Bab_
> Penilaian: 10 butir × 10 poin (total 100) · kunci pilihan ganda + jawaban isian singkat + pembahasan ringkas
> File soal bab ini: [kuis-ringkas.md](kuis-ringkas.md) · Kunci lengkap 14 bab: [kunci-kuis-ringkas.md](../kunci-kuis-ringkas.md)

---

### Bagian A — Pilihan Ganda

1. **A** — atribut `lang` memberi tahu bahasa halaman sehingga pembaca layar melafalkan kata dengan aturan yang tepat, kamus memeriksa ejaan, dan mesin dapat menerjemahkan konten; pengodean karakter adalah tugas `meta charset` (B), cakupan pengunjung bukan urusan `lang` (C), dan penyesuaian lebar layar adalah tugas `meta viewport` (D).
2. **B** — `width` dan `height` membuat browser memesan ruang gambar sebelum file termuat sehingga halaman tidak melompat saat gambar muncul; atribut ini bukan ukuran cadangan saat gambar gagal dimuat (A), gambar tetap dapat ditata CSS (C), dan ukuran tersebut tidak mempercepat pengunduhan dengan cara itu (D).
3. **C** — pasangan `figure`–`figcaption` menyatakan bahwa gambar dan keterangannya saling berhubungan, sesuai kebutuhan ilustrasi hero; logo tidak memerlukan keterangan tambahan karena teks `alt`-nya sudah cukup sehingga `figure` tidak dipakai (B dan D salah), dan tidak ada ketentuan satu `figure` per halaman (A salah).
4. **D** — `article` dipakai untuk konten yang lengkap dan dapat berdiri sendiri; tes sederhananya, isi tetap masuk akal bila dipindah atau dibagikan. `aside` (A) untuk konten sampingan yang dapat dilepas, `div` (B) hanya dipakai bila tidak ada elemen semantik yang cocok, dan `section` (C) untuk himpunan tematik di dalam halaman.
5. **A** — level heading dipilih menurut tingkatan informasi, bukan ukuran huruf, sehingga `h3` tetap dipakai dan ukurannya diatur lewat CSS; menambahkan `h3` di akhir (B) tidak memperbaiki urutan, paragraf tebal (C) menghilangkan struktur heading, dan aturan larangan memakai `h3` (D) tidak ada.

### Bagian B — Isian Singkat

6. **mengatur pengodean karakter agar huruf dan simbol seperti tanda "—" tampil dengan benar** — tanpa deklarasi ini, karakter khusus dapat tampil berantakan karena browser menebak pengodean yang dipakai; `UTF-8` adalah pengodean baku proyek Tokosaya.
7. **`ul` berisi `li` untuk daftar merek, dan `ol` berisi `li` untuk langkah pembelian** — pilih list dari maknanya: langkah yang berurutan memakai `ol`, sedangkan himpunan yang setara memakai `ul`; keduanya memakai `li` untuk tiap butirnya.
8. **tabel dipakai untuk data tabular, bukan untuk layout** — tabel untuk layout memalsukan makna data sehingga pembaca layar berusaha membaca "tabel" yang sebenarnya bukan data, dan pemeliharaannya menyulitkan; layout adalah tugas CSS (Bab 6 dan Bab 7).
9. **`for` pada label dan `id` pada textarea dengan nilai yang sama, misalnya "pesan"** — tanpa pasangan itu, pengguna pembaca layar menemukan kontrol tanpa nama dan klik label tidak mengarahkan fokus ke kolom; atribut `name` hanya menentukan nama data yang dikirim.
10. **informasi kontak penulis atau organisasi pada halaman/bagian terkait** — `address` menandai blok kontak sehingga dikenali sebagai informasi kontak, bukan sekadar paragraf biasa; itulah sebabnya alamat Tokosaya pada footer memakai elemen ini.
