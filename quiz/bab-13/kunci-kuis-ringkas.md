# Kunci Kuis Ringkas — Bab 13: Website Responsif dan Accessibility

> Frontend Development & Web Design · Semester III · _Kunci Kuis Ringkas per Bab_
> Penilaian: 10 butir × 10 poin (total 100) · kunci pilihan ganda + jawaban isian singkat + pembahasan ringkas
> File soal bab ini: [kuis-ringkas.md](kuis-ringkas.md) · Kunci lengkap 14 bab: [kunci-kuis-ringkas.md](../kunci-kuis-ringkas.md)

---

### Bagian A — Pilihan Ganda

1. **B** — gaya dasar untuk layar kecil yang sederhana lebih sedikit saling menimpa sehingga media query `min-width` tinggal menambah aturan; media query tetap diperlukan (A), tiap perangkat punya lebar berbeda (C), dan *breakpoint* tetap ditetapkan sebagai keputusan proyek (D).
2. **D** — angka ajaib adalah nilai seperti 578 px, 693 px, atau 1024 px yang dipilih hanya karena layout terasa rusak di lebar itu sehingga sulit dirawat dan tidak menceritakan maksud; pilihan yang selaras Bootstrap pada opsi A–C justru pola yang dianjurkan.
3. **A** — `clamp(min, ideal, max)` mengurung ukuran antara 1,75rem dan 2,75rem, dengan nilai tengah `4vw + 1rem` yang membuatnya mengalir mengikuti lebar *viewport*; bukan selalu 2,75rem (B), tidak tumbuh tanpa batas (C), dan tidak mengecil saat layar melebar (D).
4. **C** — tabel butir pemeriksaan menempatkan `lang="id"` pada `<html>` di bawah prinsip Understandable karena bahasa halaman harus dapat dipahami; Perceivable berkaitan dengan alternatif konten, Operable dengan operasi keyboard, dan Robust dengan markup yang terbaca teknologi bantu.
5. **B** — aturan bab ini adalah hindari `tabindex` positif dan biarkan urutan DOM yang membawa urutan tab, sementara `-1` dipakai secara programatik dan `0` hanya pada kasus sangat spesifik; nilai `0` tidak menjadikan elemen fokus pertama (D), dan nilai positif tidak berkaitan dengan kecepatan fokus (A) maupun batas angka (C).

### Bagian B — Isian Singkat

6. **satu `<h1>` per halaman dan heading turun bertingkat tanpa melompat (`h1→h2→h3`, bukan `h2` ke `h5`)** — pengguna *screen reader* sering menelusuri halaman dari heading ke heading sehingga heading berfungsi seperti peta atau daftar isi; urutan yang melompat membingungkan orientasi mereka. Ukuran tampilan tidak menentukan level heading.
7. **`alt="Keyboard Mekanis KX-210 dengan 87 tombol"`** — `alt` yang baik menggambarkan kegunaan gambar dalam konteks halaman, bukan nama berkasnya; teks inilah yang dibacakan *screen reader* dan yang tampil saat gambar gagal dimuat.
8. **elemen pertama di dalam `<body>`; melompat ke `#konten-utama`; elemen tujuan seperti `<main>` memakai `tabindex="-1"`** — pola CSS murni ini memenuhi kriteria *bypass blocks* WCAG: link tersembunyi di luar layar sampai menerima fokus, lalu halaman melompat melewati seluruh header.
9. **Pola A *flex-wrap*, Pola B menumpuk di layar kecil, dan Pola C *footer-nav*; tinggi *target* sentuh sekitar 44 px termasuk padding** — Pola B yang dipakai praktikum Tokosaya (menu vertikal di bawah 768 px, horizontal mulai 768 px), sedangkan *target* 44 px menjaga link tetap nyaman disentuh jari.
10. **4,5:1 untuk teks normal; 3:1 untuk teks besar; 3:1 untuk elemen antarmuka non-teks** — teks besar kira-kira 24 px biasa atau 18,66 px tebal; angka-angka ini diverifikasi lewat pemeriksa kontras di DevTools, bukan ditebak.
