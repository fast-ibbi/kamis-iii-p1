# Kunci Kuis Ringkas — Bab 12: UI/UX dan Design System

> Frontend Development & Web Design · Semester III · _Kunci Kuis Ringkas per Bab_
> Penilaian: 10 butir × 10 poin (total 100) · kunci pilihan ganda + jawaban isian singkat + pembahasan ringkas
> File soal bab ini: [kuis-ringkas.md](kuis-ringkas.md) · Kunci lengkap 14 bab: [kunci-kuis-ringkas.md](../kunci-kuis-ringkas.md)

---

### Bagian A — Pilihan Ganda

1. **B** — UI adalah seluruh wajah visual yang dilihat dan disentuh pengguna, mulai dari layout, warna, huruf, tombol, sampai ikon; UX cakupannya lebih luas, yaitu seluruh rasa dan hasil yang dialami pengguna dari awal membuka halaman sampai selesai berbelanja. Opsi A membalik kedua definisi, sedangkan opsi C dan D mempersempit UI atau UX menjadi satu bagian saja.
2. **A** — keempat lapisan design system tersusun dari bawah ke atas: design token, lalu komponen, lalu pola dan aturan, dan terakhir dokumentasi berupa `styleguide.html`; setiap lapisan mengonsumsi lapisan di bawahnya, sehingga komponen memakai token dan halaman memakai komponen.
3. **D** — panjang baris dijaga sekitar 60–75 karakter karena baris yang terlalu panjang membuat pembaca tersesat saat kembali ke baris berikutnya di layar lebar, sedangkan perpindahan baris yang terlalu sering membuat mata cepat lelah; aturan ini tidak berkaitan dengan keseragaman jumlah kata, pencetakan A4, maupun pengunduhan huruf.
4. **B** — 32 piksel tetap bagian skala 8 piksel Tokosaya, tetapi utilitas Bootstrap melangkah 4 piksel sehingga nilai ini didapat dengan menumpuk utilitas (misalnya `mt-5 mb-2`) atau satu kelas kustom seperti `margin-block: 32px`. Opsi A menyimpang ke 24 piksel, opsi D memakai 30 piksel yang bukan kelipatan 8, dan opsi C menaruh nilai mentah berulang di markup, padahal aturan jarak seharusnya tinggal di CSS sebagai kelas.
5. **C** — aturan do and don't melarang warna dijadikan penyampai makna satu-satunya karena pengguna dengan penglihatan warna terbatas akan kehilangan makna, sehingga perlu ditambahkan ikon atau teks status. Opsi A bukan aturan apa pun, opsi B terbalik karena nilai mentah justru dilarang, dan opsi D melanggar aturan "jangan teks kuning di atas putih untuk teks paragraf".

### Bagian B — Isian Singkat

6. **affordance** — istilah dari Don Norman untuk isyarat visual bahwa sebuah objek menyediakan cara interaksi tertentu; tombol berlatar warna dan berlengkung terlihat bisa ditekan, sedangkan teks biru `--clr-primary` terlihat bisa disentuh sebagai link. Antarmuka melanggar affordance ketika sesuatu yang seharusnya tombol tampil sebagai teks polos tanpa batas atau lengkungan.
7. **pengguna cukup belajar sekali lalu bisa mengulangi polanya, dan perilaku yang seragam memberi kesan organisasi yang rapi** — dari sisi desain, konsistensi membentuk pola sehingga pengguna tidak perlu belajar ulang; dari sisi kepercayaan, elemen yang berlaku seragam membuat pengguna yakin organisasinya tertata, kebalikan dari dua fakultas yang menamai menu akademik dengan label berbeda.
8. **8, 16, 24, 32, 48, dan 64 piksel** — semuanya kelipatan 8 sesuai `--space-unit: 8px`, sehingga keputusan jarak tinggal memilih dari enam opsi; pemetaan lazimnya: 8 piksel jarak dalam komponen, 16 piksel antar elemen berpasangan seperti label–input, 24 piksel antar kartu, 32 piksel antar kelompok form, 48 piksel antar section, dan 64 piksel jarak besar header/footer.
9. **desainer, penulis kode, dan penjaga merek/pemilik produk** — desainer memakai styleguide sebagai palet saat memilih varian yang tepat, penulis kode (termasuk anggota baru) menyalin pola markup agar markup produksi dan dokumentasi tidak saling menjauh, sedangkan penjaga merek/pemilik produk memakainya untuk review karena semua contoh terkumpul dalam satu tampilan.
10. **status visual tetap didokumentasikan di styleguide, sedangkan perilaku interaktif diserahkan kepada JavaScript** — navbar desktop dapat tampil penuh tanpa JavaScript sehingga sampelnya didokumentasikan statis; tombol buka-tutup (hamburger) di layar sempit, modal, dan dropdown membutuhkan paket JavaScript Bootstrap sehingga perilaku interaktifnya di luar cakupan dan dijelaskan lewat catatan dokumentasi, sementara kelas `.show` dan layout panelnya tetap dicatat.
