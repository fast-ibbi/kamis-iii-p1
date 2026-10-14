# Kunci Kuis Ringkas — Bab 01: Pengantar Frontend Development dan Web Design

> Frontend Development & Web Design · Semester III · _Kunci Kuis Ringkas per Bab_
> Penilaian: 10 butir × 10 poin (total 100) · kunci pilihan ganda + jawaban isian singkat + pembahasan ringkas
> File soal bab ini: [kuis-ringkas.md](kuis-ringkas.md) · Kunci lengkap 14 bab: [kunci-kuis-ringkas.md](../kunci-kuis-ringkas.md)

---

### Bagian A — Pilihan Ganda

1. **B** — memindahkan file ke server dan menghubungkannya dengan domain adalah *deployment*; domain (A) adalah alamatnya, hosting (C) adalah layanan penyimpanan filenya, dan rendering (D) adalah proses browser menampilkan halaman.
2. **D** — pada tabel tahapan, keluaran tahap desain adalah rancangan antarmuka seperti layout, warna, dan tombol; analisis menghasilkan spesifikasi kebutuhan, implementasi menghasilkan halaman HTML/CSS, dan pengujian menghasilkan catatan temuan.
3. **C** — Bab 1–8 memakai folder `tokosaya-css/` (HTML dan CSS dasar), sedangkan Bab 9–16 melanjutkan proyek dengan Bootstrap 5 di folder `tokosaya-bootstrap/`.
4. **A** — Live Server membuat halaman terbuka di browser dan diperbarui otomatis setiap kali file disimpan; memeriksa struktur tag adalah tugas DevTools (B), mengunggah ke hosting adalah deployment (C), dan pengodean UTF-8 diatur lewat penyimpanan file di editor (D).
5. **B** — urutan langkah bermakna sehingga dipakai `<ol>`; `<ul>` untuk daftar tanpa urutan seperti bidang minat. Pilihan elemen daftar berpengaruh terhadap makna dokumen, jadi opsi D juga salah.

### Bagian B — Isian Singkat

6. **`index.html` adalah nama yang dikenali server sebagai halaman default** — saat pengunjung membuka alamat tanpa menyebut nama file, server biasanya menampilkan file bernama `index.html`. Bila file itu tidak ada, alamat tersebut gagal menampilkan halaman utama.
7. **skema/protokol (`https`), domain (`tokosaya.id`), dan jalur menuju file (`/katalog.html`)** — skema menunjukkan cara pengaksesan, domain menunjukkan alamat website, dan jalur menunjukkan letak file di dalamnya.
8. **halaman = satu dokumen HTML; website = kumpulan halaman yang saling terhubung + aset pendukung** — aset seperti gambar, file CSS, font, dan ikon disimpan dalam folder proyek yang sama agar rapi dan mudah dipindahkan.
9. **teks pengganti saat gambar gagal dimuat atau tidak dapat dilihat** — terutama membantu pengguna *screen reader*; atribut `alt` juga tampil di slot gambar yang rusak sehingga isi halaman tetap terbayangkan.
10. **halaman yang masih menampilkan versi lama meski kode sudah diubah** — pesan pentingnya: browser membaca kode apa adanya, bukan menebak maksud kita, sehingga tampilan yang salah biasanya menandakan ada bagian HTML/CSS yang perlu diperiksa; karena itu biasakan menyimpan, memuat ulang, lalu memeriksa.
