# Kunci Kuis Ringkas — Bab 04: Tipografi dan Visual Design CSS

> Frontend Development & Web Design · Semester III · _Kunci Kuis Ringkas per Bab_
> Penilaian: 10 butir × 10 poin (total 100) · kunci pilihan ganda + jawaban isian singkat + pembahasan ringkas
> File soal bab ini: [kuis-ringkas.md](kuis-ringkas.md) · Kunci lengkap 14 bab: [kunci-kuis-ringkas.md](../kunci-kuis-ringkas.md)

---

### Bagian A — Pilihan Ganda

1. **B** — dua tag `preconnect` adalah instruksi agar browser membuka koneksi lebih awal ke server font sehingga unduhan font sesudahnya lebih cepat; opsi A keliru karena preconnect bukan pengunduh berkas maupun penyimpanan offline, opsi C adalah tugas parameter `wght@` pada URL font, dan opsi D adalah perilaku `display=swap`.
2. **A** — judul besar tampil lebih bernapas bila jarak antarhurufnya dirapatkan sedikit (`-0.02em`), sementara label kapital kecil justru butuh jarak renggang (`0.08em`) agar tidak menyerupai gumpalan; opsi B membalik keduanya, sedangkan C dan D mengabaikan bahwa kebutuhan kedua ukuran itu berlawanan.
3. **C** — bab menganjurkan gradien seperti bumbu: satu–dua titik per halaman pada hero dan CTA, sedangkan permukaan membaca seperti kartu produk tetap solid putih; opsi A dan B melanggar batas itu, dan opsi D berlebihan sebab hero/CTA tetap boleh bergradien asalkan kontras teksnya terverifikasi.
4. **D** — `opacity` menyetel tembus pandang seluruh elemen dari `1` sampai `0`, sehingga kartu beserta isinya meredup dan tampak nonaktif; opsi A hanya memudarkan warna teks, opsi B hanya menyetel tembus pandang warna latar (sifat `rgba()`), dan opsi C justru memberi kesan kartu terangkat.
5. **B** — `--clr-accent: #F59E0B` adalah amber untuk badge dan sorotan seperti "Best Seller"; opsi A adalah `--clr-success` untuk status tersedia, opsi C adalah `--clr-primary-dark` untuk hover dan ujung gradien, dan opsi D adalah `--clr-danger` untuk sinyal urgensi.

### Bagian B — Isian Singkat

6. **Poppins untuk judul dan Inter untuk teks isi** — Poppins yang bulat dan geometris dipakai elemen judul (`h1`–`h3`) agar halaman terasa ramah dan modern, sedangkan Inter yang tenang dan dirancang untuk antarmuka dipakai paragraf serta deskripsi produk yang dibaca dalam waktu lama.
7. **`2.25rem` batas minimum, `5vw` ukuran ideal mengikuti lebar layar, `3rem` batas maksimum** — pada layar sempit judul tidak menyusut di bawah 2,25rem (36px) dan pada layar lebar tidak membengkak melebihi 3rem (48px), sehingga ukuran tetap proporsional tanpa media query berlapis.
8. **`text-transform` dengan nilai `uppercase`** — teks asli tetap ditulis normal di HTML dan bentuk kapital hanya hasil tampilan; pola yang sama dipakai untuk label kategori dan badge sehingga konten tidak perlu diubah hurufnya secara manual.
9. **warna semantik dibawa latar tint tipis (misalnya `rgba(22, 163, 74, 0.12)`), sedangkan teks memakai warna gelap seperti `--clr-body` atau `--clr-dark`** — hijau murni `#16A34A` di atas latar terang hanya ± 3,3:1 sehingga gagal ambang WCAG AA 4,5:1 untuk teks kecil; dengan pola tint + teks gelap, makna warnanya tetap terbaca (teks `--clr-body` di atas tint hijau ± 8,7:1).
10. **nama token mengungkap makna/perannya, bukan nilainya** — jika warna brand bergeser dari indigo ke warna lain, cukup nilai `--clr-primary` di `:root` yang diganti sementara semua komponen tetap memanggil `var(--clr-primary)`; token bernama `--indigo` akan langsung menyesatkan begitu warnanya bukan indigo lagi.
