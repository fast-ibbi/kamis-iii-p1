# Kunci Kuis Ringkas — Bab 05: CSS Box Model dan Layout

> Frontend Development & Web Design · Semester III · _Kunci Kuis Ringkas per Bab_
> Penilaian: 10 butir × 10 poin (total 100) · kunci pilihan ganda + jawaban isian singkat + pembahasan ringkas
> File soal bab ini: [kuis-ringkas.md](kuis-ringkas.md) · Kunci lengkap 14 bab: [kunci-kuis-ringkas.md](../kunci-kuis-ringkas.md)

---

### Bagian A — Pilihan Ganda

1. **D** — jarak dari bingkai ke poster lain di dinding melambangkan *margin*: ruang luar yang transparan dan tidak ikut warna elemen; content adalah kanvas posternya, padding adalah passe-partout, dan border adalah bingkai kayunya.
2. **A** — `min-height` memberi ruang minimum sambil tetap mengizinkan kotak memanjang saat isi bertambah; `height` mengunci tinggi sehingga isi yang bertambah bisa terpotong (kegagalan aksesibilitas), sedangkan `max-height` justru membatasi pertumbuhan.
3. **B** — `inline-block` mengubah jenis kotak, bukan penempatannya; `top`/`right` pada elemen `static` diabaikan (A), `z-index` hanya mengatur susunan tumpukan (C), dan `display: block` membuat badge memaksa baris baru, bukan menempel di pojok (D).
4. **B** — `auto` menampilkan bilah gulir hanya bila diperlukan sehingga halaman utama tidak ikut menggulir dan pengguna tidak kehilangan konteks; A melukiskan `hidden`, C melukiskan `scroll`, dan D melukiskan `visible`.
5. **C** — pada mode bawaan (`content-box`), lebar di layar = 300 + (20 × 2) + (2 × 2) = 344 px; setelah `border-box` dipasang, angka `width` menaungi padding dan border sehingga kotak tetap 300 px sementara area konten menyusut menjadi 256 px (300 − 44).

### Bagian B — Isian Singkat

6. **replaced element** — img dan input adalah elemen inline khusus yang isinya digantikan konten eksternal, sehingga `width` dan `height` tetap diperlakukan seperti pada kotak, bukan diabaikan seperti teks inline biasa.
7. **atribut `title`** — keterangan itu tampil saat pengguna mengarahkan kursor ke elemen sehingga teks penuh tetap teramati meski yang tampak hanya potongan berelipsis; solusinya statis, tanpa perilaku dinamis.
8. **karena `z-index` hanya bekerja pada elemen yang diposisikan (position bukan `static`)** — elemen static mengikuti alur dokumen biasa dan tidak dapat diberi urutan susunan; posisi seperti relative, absolute, fixed, atau sticky harus dipasang lebih dulu, baru z-index berlaku.
9. **8, 16, 24, 32, 48, dan 64 px** — seluruh langkah adalah kelipatan `--space-unit` 8 px; nilai di luarnya hanya untuk koreksi mikro 4 px yang sengaja dicatat di komentar CSS.
10. **karena margin vertikal dua blok bertetangga dapat runtuh (margin collapse) ke nilai terbesar, sedangkan padding tidak** — jarak antarseksi lewat padding kontainer karena itu selalu sesuai angka yang ditulis; lewat margin anak, jarak nyata bisa menyimpang dari perhitungan.
