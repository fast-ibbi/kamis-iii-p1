# Kunci Kuis Ringkas — Bab 10: Komponen Bootstrap

> Frontend Development & Web Design · Semester III · _Kunci Kuis Ringkas per Bab_
> Penilaian: 10 butir × 10 poin (total 100) · kunci pilihan ganda + jawaban isian singkat + pembahasan ringkas
> File soal bab ini: [kuis-ringkas.md](kuis-ringkas.md) · Kunci lengkap 14 bab: [kunci-kuis-ringkas.md](../kunci-kuis-ringkas.md)

---

### Bagian A — Pilihan Ganda

1. **B** — kelas ukuran `h6` hanya mengecilkan tampilan judul, sedangkan elemen `h3` menjaga susunan judul dokumen tetap benar; opsi A keliru karena pembaca layar tetap membacanya, opsi C membalik hubungan semantik dan ukuran, dan opsi D tidak ada kaitannya dengan judul kartu.
2. **A** — `container` menjaga lebar isi navbar selaras dengan bagian halaman lain; menu yang mendatar sejak 992 piksel berasal dari `navbar-expand-lg` (opsi C), dan daftar menu maupun tombol hamburger tidak mensyaratkan `container` (opsi B dan D).
3. **C** — pada Bootstrap 5.3 kelas `text-bg-*` mengatur warna latar sekaligus warna teks supaya kontrasnya tetap terbaca; kelas dasar `badge` tetap dibutuhkan (opsi B salah), dan kelas ini tidak menyentuh ikon di dalam badge (opsi D salah).
4. **D** — konvensi bab ini menulis harga sebagai `Rp650.000`: tanpa spasi setelah "Rp" dan tanpa desimal; opsi A memakai spasi, opsi B menambah desimal, dan opsi C memakai huruf kecil.
5. **B** — modal statis memakai kelas `show` plus gaya *inline* `display: block; position: static;` bertanda komentar khusus demonstrasi; `open` dan `active` bukan mekanisme modal Bootstrap (opsi A dan C), sedangkan `data-bs-backdrop` hanya dibaca paket JavaScript (opsi D).

### Bagian B — Isian Singkat

6. **font ikon yang dipanggil lewat pasangan kelas `bi bi-nama-ikon`, misalnya `bi bi-cart3`** — Bootstrap Icons 1.11.3 dikemas sebagai *icon font*; ikon keranjang Tokosaya ditulis `<i class="bi bi-cart3" aria-hidden="true"></i>` karena hanya hiasan di samping kata "Keranjang".
7. **`role="alert"`** — atribut itu membuat pembaca layar mengumumkan pesan alert, sehingga peringatan seperti stok terbatas tetap tersampaikan kepada pengguna yang tidak melihatnya secara visual.
8. **kelas `active` dengan atribut `aria-current="page"` pada kedua komponen** — pada breadcrumb penanda itu diletakkan di item terakhir (`breadcrumb-item active`) yang tidak lagi berupa tautan, sedangkan pada pagination di item `page-item active` yang isinya ditulis sebagai `span` ber-`page-link`.
9. **Batal memakai `btn-secondary`, "Ya, Hapus" memakai `btn-danger`** — pembatalan adalah aksi netral sehingga memakai warna abu, sedangkan penghapusan adalah aksi destruktif sehingga memakai merah sesuai bahasa warna semantik komponen.
10. **item pertama, yang berkelas `carousel-item active`** — kelas `active` menandai gambar yang tampil; item kedua tetap tersimpan di markup tetapi tidak terlihat karena tanpa paket JavaScript carousel berhenti pada item aktif itu.
