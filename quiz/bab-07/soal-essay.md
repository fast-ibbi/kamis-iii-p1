# Soal Essay — Bab 07: CSS Grid dan Responsive Web Design

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 5 soal essay · tingkat kesulitan campuran (C2–C5)
> Poin jawaban + bobot skor: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-essay.md](../soal-essay.md)

---

**Essay (5 soal)**

1. Dua penulisan template berikut diterapkan pada wadah selebar 1000 px yang juga memakai `gap: 20px`: (a) `grid-template-columns: 200px 1fr 1fr;` dan (b) `grid-template-columns: 200px 40% 40%;`. Jelaskan arti satuan `fr` sebagai pembagi ruang sisa, lalu tunjukkan perhitungan ringkas mengapa penulisan (b) berisiko pada wadah itu sementara penulisan (a) tidak.

2. Jelaskan strategi *mobile-first* dan peran media query `min-width` di dalamnya. Uraikan pula mengapa urutan blok media query harus menaik (576 → 768 → 992 → 1200 px) dan apa akibatnya bila urutan itu tertukar, padahal semua blok memiliki *specificity* yang setara.

3. Pada dashboard Tokosaya, denah `grid-template-areas` digambar ulang di dalam media query `min-width: 768px` sehingga navigasi berpindah ke kolom kiri "tanpa mengubah satu baris HTML pun". Jelaskan mekanisme ini, sebutkan dua aturan penulisan denah yang harus dipatuhi, dan sebutkan satu keterbatasan `grid-template-areas` yang disebutkan bab ini.

4. Skenario: pada 375 px, halaman `admin.html` tidak boleh memiliki pengguliran horizontal pada `<body>`, tetapi tabel pesanan yang punya lima kolom tetap harus terbaca. Analisis mengapa kombinasi wadah ber-`overflow-x: auto` dengan `min-width: 640px` pada tabel dipilih, apa risiko yang muncul bila pengguliran justru dibiarkan terjadi pada seluruh halaman, dan mengapa menyembunyikan sebagian kolom bukan pilihan yang baik di sini.

5. Dashboard admin akan menyoroti kartu "Penjualan Hari Ini" dengan membentangkannya dua kolom. Evaluasi dua pendekatan penempatan eksplisit yang dibahas bab ini — kata kunci `span` pada `grid-column`/`grid-row` dan denah bernama `grid-template-areas` — lalu tentukan mana yang kamu pakai untuk **kartu di dalam barisan kartu statistik** dan mana yang kamu pakai untuk **kerangka header–nav–main–footer**. Jelaskan pula satu risiko pemeliharaan dari pilihanmu ketika jumlah kolom berubah antar breakpoint.
