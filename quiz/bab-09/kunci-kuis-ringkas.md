# Kunci Kuis Ringkas — Bab 09: Pengenalan Bootstrap 5

> Frontend Development & Web Design · Semester III · _Kunci Kuis Ringkas per Bab_
> Penilaian: 10 butir × 10 poin (total 100) · kunci pilihan ganda + jawaban isian singkat + pembahasan ringkas
> File soal bab ini: [kuis-ringkas.md](kuis-ringkas.md) · Kunci lengkap 14 bab: [kunci-kuis-ringkas.md](../kunci-kuis-ringkas.md)

---

### Bagian A — Pilihan Ganda

1. **B** — URL pustaka terkunci memakai nomor versi `bootstrap@5.3.3` pada jalur `dist/css/bootstrap.min.css`; opsi A tidak mengunci versi (`@latest`), opsi C adalah berkas *bundle* JavaScript yang sengaja tidak dipakai bab ini, dan opsi D adalah tautan Bootstrap Icons.
2. **C** — `g-4` mengatur *gutter* (jarak antarkolom dan antarbaris) pada `row` dengan skala 4; opsi A mendeskripsikan padding (misalnya `p-4`), opsi B salah menafsirkan angka 4 pada kelas kolom (yaitu tindihan 4 garis dari 12), dan opsi D mendeskripsikan margin pada baris.
3. **A** — `.container-fluid` selalu lebar penuh 100% pada semua ukuran sehingga bilah dapat menempel kiri-kanan; opsi B membatasi lebar mulai 576 px, sedangkan opsi C dan D hanya penuh sampai ambang tertentu lalu terbatas setelahnya.
4. **D** — pada 1000 px, breakpoint `lg` (992 px) sudah aktif sehingga `col-lg-8` dan `col-lg-4` tampil sebaris dengan rasio 8:4 alias 2:1; opsi A salah karena ambangnya sudah tercapai, opsi B salah karena lebar keduanya tidak sama, dan opsi C salah karena kedua kolom tetap tampil dengan kelas dasar `col-12`.
5. **C** — pola `text-bg-*` memberi latar penuh berwarna peran dengan warna teks yang otomatis kontras; `success` adalah nama peran warna (keadaan berhasil atau tersedia), bukan nama warna mentah, sehingga opsi yang menggambarkan tanpa latar, garis tepi saja, atau mengikuti tema sistem tidak sesuai.

### Bagian B — Isian Singkat

6. **768 px; kelas tetap berlaku mulai 768 px ke atas tanpa batas atas** — logika *min-width* mobile-first: kelas berawalan `md` tidak berhenti di 991 px, dan tiap breakpoint yang lebih besar menimpa kelas dasar sebelumnya bila ada.
7. **Bootstrap 5.3.3 → Bootstrap Icons 1.11.3 → Google Fonts (Poppins/Inter) → `css/style.css`; yang wajib paling belakang adalah `css/style.css`** — hukum kaskade: saat dua aturan ber-*specificity* setara bertabrakan, aturan yang termuat paling belakangan menang, sehingga gaya identitas Tokosaya harus dimuat setelah stylesheet pustaka.
8. **padding kanan-kiri skala 4 (1,5 rem) dan padding atas-bawah skala 2** — huruf pertama menunjuk properti (p = *padding*), huruf kedua menunjuk sisi (x = kiri-kanan, y = atas-bawah), dan angka terakhir menunjuk skala spasi.
9. **`col-12 col-md-6 col-xl-3`** — `col-12` menjadi dasar satu kartu per baris; `col-md-6` membuat dua kartu per baris mulai 768 px; `col-xl-3` membuat empat kartu per baris mulai 1200 px.
10. **utility-first; antarmuka disusun dari kelas-kelas atomik kecil yang dikomposisi langsung di HTML** — berbeda dari Bootstrap yang menyediakan kelas komponen siap pakai; pada pemakaian penuh, pendekatan Tailwind lazim ditemani alat perakit (*build tool*).
