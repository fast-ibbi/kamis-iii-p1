# Soal Essay — Bab 09: Pengenalan Bootstrap 5

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 5 soal essay · tingkat kesulitan campuran (C2–C5)
> Poin jawaban + bobot skor: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-essay.md](../soal-essay.md)

---

**Essay (5 soal)**

1. Bootstrap 5.3 memamerkan arsitekturnya dalam enam kelompok fasilitas: Layout, Content, Forms, Components, Helpers, dan Utilities. Jelaskan pembagian keenam kelompok itu, lalu tentukan ke mana kamu mencari solusi untuk empat kebutuhan berikut: (a) pembungkus yang mengatur lebar maksimum isi halaman, (b) normalisasi gaya bawaan browser, (c) kelas satu-tujuan pengatur jarak, dan (d) komponen navbar. Sebutkan juga di mana Bootstrap Icons dipasang.

2. Jelaskan kontrak tiga lapis grid Bootstrap (container → row → col) dan mengapa kolom wajib menjadi anak langsung dari `row`. Setelah itu, uraikan perilaku kartu berkelas `col-12 col-md-6 col-lg-3` pada viewport 500 px, 800 px, dan 1100 px, serta sebutkan berapa kartu yang tampil per baris pada masing-masing lebar.

3. Pada proyek `tokosaya-bootstrap/`, `css/style.css` wajib dimuat setelah stylesheet Bootstrap. Jelaskan alasan kaskadenya, lalu uraikan dua mekanisme overlay yang dipakai bab ini — urutan pemuatan berkas dan penyesuaian variabel `--bs-primary-rgb` — dan sebutkan apa yang rusak bila urutan link itu tertukar.

4. Skenario: pemilik Tokosaya meminta menu navigasi yang bisa dilipat pada layar HP seperti navbar Bootstrap pada umumnya. Analisis batas keputusan "tanpa *bundle* JavaScript" yang dipegang buku ini: apa konsekuensinya bagi komponen yang aslinya interaktif, bagaimana bab ini menyiasati navigasi mobile, dan sebutkan satu risiko dari siasat tersebut beserta satu cara meringankannya.

5. Sebuah UMKM meminta rekomendasi teknologi untuk website berisi delapan halaman dengan pola tampilan yang berulang, dikerjakan dua mahasiswa pemula secara paruh waktu, tenggat dua minggu, identitas merek yang kuat, dan perilaku interaktif yang minimal. Evaluasi dua pilihan berikut — Bootstrap 5.3.3 via CDN dengan lapisan token kustom, melawan Tailwind CSS utility-first — memakai minimal tiga kriteria keputusan dari bab ini, lalu nyatakan pilihanmu beserta satu trade-off yang kamu terima secara sadar.
