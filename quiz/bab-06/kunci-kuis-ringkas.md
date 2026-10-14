# Kunci Kuis Ringkas — Bab 06: Flexbox untuk Web Layout

> Frontend Development & Web Design · Semester III · _Kunci Kuis Ringkas per Bab_
> Penilaian: 10 butir × 10 poin (total 100) · kunci pilihan ganda + jawaban isian singkat + pembahasan ringkas
> File soal bab ini: [kuis-ringkas.md](kuis-ringkas.md) · Kunci lengkap 14 bab: [kunci-kuis-ringkas.md](../kunci-kuis-ringkas.md)

---

### Bagian A — Pilihan Ganda

1. **B** — `display: flex` mengubah anak langsung wadah menjadi flex item; pada `.site-nav` itu merek dan pembungkus `.site-nav-kanan`. Cucu elemen seperti `<li>` baru menjadi flex item jika `<ul>`-nya sendiri juga dijadikan flex container, sehingga pilihan A (semua keturunan), C (berdasar kelas), dan D (elemen pertama) keliru.
2. **A** — `align-items` bekerja pada cross axis dan nilai defaultnya `stretch`, jadi kartu meregang setinggi baris; `flex: 0 1 250px` mengatur ukuran pada main axis (lebar), bukan tinggi (B), `flex-wrap` hanya mengurus penekukan baris (C), dan `gap` hanya memberi jarak antar-item (D).
3. **C** — `space-around` memberi setiap item ruang sama di kedua sisinya sehingga tepi terluar hanya kebagian setengah; `space-between` menempelkan item pertama dan terakhir ke tepi (A), `space-evenly` menyamakan semua celah termasuk tepi (B), dan `flex-start` tetap mengumpulkan semua item di awal sumbu (D).
4. **B** — auto margin menyerap sisa ruang di sisinya, sehingga `margin-left: auto` mendorong kelompok kanan ke ujung main axis. `justify-content` adalah properti container sehingga tidak berlaku pada item (A), `align-self` bekerja pada cross axis yang pada `row` berarti vertikal (C), dan `order` hanya mengubah urutan visual tanpa mendorong item ke ujung (D).
5. **D** — pada wadah `flex-wrap: wrap`, kolom yang tidak muat turun ke baris baru dan, karena `flex-grow: 1`, mengisi lebar baris barunya, sementara baris di atasnya tetap terbagi rata; itulah responsif tanpa media query. Pilihan A keliru karena penekukan terjadi sebelum item dipaksa menyusut, pilihan B keliru karena kolom yang turun tetap ikut tumbuh, dan flexbox tidak menyembunyikan item seperti pilihan C.

### Bagian B — Isian Singkat

6. **main axis (sumbu utama) dan cross axis (sumbu silang)** — `justify-content` bekerja pada main axis, sedangkan `align-items` bekerja pada cross axis; arah main axis ditentukan `flex-direction`, sehingga peran keduanya bertukar saat arah berubah.
7. **`space-between` bekerja rapi bila wadah punya dua anak langsung, dan kelompok kanan turun sebagai satu blok saat `flex-wrap` aktif** — tanpa pembungkus, sisa ruang menyebar di antara merek, menu, dan keranjang sehingga keranjang tidak konsisten menempel di pojok kanan dan baris kedua bisa pincang; dengan pembungkus, menu dan keranjang menekuk bersama.
8. **`align-self: stretch`** — `align-self` menimpa `align-items` milik wadah untuk satu item saja, jadi kartu unggulan meregang sendirian sementara kartu lain tetap mengikuti `flex-start`.
9. **`order` hanya mengubah urutan visual, sedangkan urutan dokumen HTML tetap asli** — pembaca *screen reader* dan navigasi tombol *Tab* menelusuri urutan dokumen, sehingga urutan yang dibaca bisa berbeda dari yang tampak di layar; batas amannya adalah penyesuaian kecil dengan urutan dokumen yang tetap logis.
10. **buka DevTools Chrome, lalu periksa lencana `flex` pada tab Elements** — flex container dan flex item diberi lencana khusus oleh DevTools sehingga mudah dilacak; periksa lencana itu pada `.produk-row` (posisi `.site-nav` juga bisa dicek sebagai pembanding).
