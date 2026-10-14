# Kunci Kuis Ringkas — Bab 07: CSS Grid dan Responsive Web Design

> Frontend Development & Web Design · Semester III · _Kunci Kuis Ringkas per Bab_
> Penilaian: 10 butir × 10 poin (total 100) · kunci pilihan ganda + jawaban isian singkat + pembahasan ringkas
> File soal bab ini: [kuis-ringkas.md](kuis-ringkas.md) · Kunci lengkap 14 bab: [kunci-kuis-ringkas.md](../kunci-kuis-ringkas.md)

---

### Bagian A — Pilihan Ganda

1. **C** — area adalah gabungan beberapa sel yang membentuk wilayah persegi; grid track (A) adalah jalur kolom atau baris, sel (B) adalah perpotongan satu kolom dan satu baris, dan gap (D) adalah jarak antar track.
2. **D** — `repeat(2, 200px 1fr)` mengulang seluruh pasangan dua kali sehingga terbentuk `200px 1fr 200px 1fr` atau empat track; angka `2` mengulang pasangan, bukan menggandakan tiap ukuran (C) maupun menyusun ulang urutannya (B).
3. **B** — `gap` dipahami browser sebagai jarak di dalam kerangka sehingga setiap sel mendapat hak yang sama tanpa trik menyisihkan sel pertama atau sel terakhir dari `margin`, misalnya lewat `:last-child`. `gap` juga tidak menerima satuan `fr` (A) dan `margin` tetap boleh dipakai di dalam grid (C); yang menyamakan tinggi baris bukan `gap` melainkan ukuran track (D).
4. **A** — kondisi yang dihubungkan kata `and` menuntut keduanya terpenuhi: lebar viewport minimal 768 piksel dan orientasi portrait. Koma berarti "atau" sehingga B dan D salah, sedangkan C terbalik arahnya karena `min-width` diperlakukan sebagai batas atas.
5. **B** — tanpa tag meta viewport, browser memperlakukan halaman sebagai desktop melebar sehingga pemicu `min-width` seolah tidak pernah tercapai; penulisan kueri sendiri sudah benar, jadi menggabungkan file (A), mengganti arah kueri (C), atau membalik urutan blok (D) bukan penyebab sekaligus perbaikan yang tepat.

### Bagian B — Isian Singkat

6. **`display: grid;`** — deklarasi itu mengubah `.dasbor` menjadi wadah grid sehingga `header`, `nav`, `main`, dan `footer` otomatis diperlakukan sebagai butir grid dan penempatan dua dimensi baru bisa bekerja.
7. **`width: 100%; height: auto; display: block;`** — `width: 100%` mengikat lebar gambar pada wadahnya, `height: auto` menjaga proporsi, dan `display: block` menghilangkan celah kecil di bawah gambar karena gambar secara bawaan berperilaku inline.
8. **navigasi → Flexbox, kerangka halaman → Grid** — baris navigasi hanya mengalir pada satu arah sehingga cukup ditangani Flexbox, sedangkan kerangka header–nav–main–footer membentuk baris dan kolom serentak sehingga tepat ditangani Grid; keduanya boleh dipadukan, Grid untuk kerangka dan Flexbox untuk isi komponennya.
9. **nilai minimum, nilai yang dipilih/dihitung (biasanya campuran `rem` dan `vw`), lalu nilai maksimum** — browser memakai nilai tengah selama berada di antara kedua batas sehingga ukuran huruf ikut menyesuaikan lebar layar namun tetap tertahan pada minimum dan maksimum.
10. **3 kolom** — tiga kolom menuntut 3 × 220 px + 2 × 20 px = 700 px sehingga masih muat di wadah 800 px, sedangkan empat kolom menuntut 4 × 220 px + 3 × 20 px = 940 px dan sudah melebihi; pola `auto-fit` menaruh kolom sebanyak yang muat dengan lebar minimal 220 px, lalu membagikan sisa ruang ke kolom yang ada.
