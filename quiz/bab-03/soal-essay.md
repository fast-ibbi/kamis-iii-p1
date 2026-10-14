# Soal Essay — Bab 03: Dasar-Dasar CSS

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 5 soal essay · tingkat kesulitan campuran (C2–C5)
> Poin jawaban + bobot skor: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-essay.md](../soal-essay.md)

---

**Essay (5 soal)**

1. Jelaskan dengan bahasamu sendiri bagaimana kaskade menentukan gaya akhir sebuah elemen. Sebutkan urutan langkah keputusannya, kemudian berikan satu contoh dua aturan yang menyasar elemen yang sama dan uraikan bagaimana pemenangnya ditentukan.

2. *Pseudo-class* dipakai untuk menata keadaan elemen tanpa JavaScript. Pilih tiga dari lima *pseudo-class* dasar berikut — `:hover`, `:focus`, `:first-child`, `:last-child`, `:nth-child()` — lalu untuk masing-masing: tuliskan satu baris aturan CSS, jelaskan keadaan yang ditanganinya, dan sebutkan satu contoh nyata penggunaannya di halaman Tokosaya.

3. Perhatikan potongan CSS berikut.

```css
body {
  color: #334155;
  line-height: 1.6;
}

.site-header {
  border-bottom: 1px solid #E2E8F0;
  padding: 16px 24px;
}
```

Jelaskan mengapa seluruh teks halaman ikut berwarna `#334155` walau hanya selector `body` yang diberi `color`, tetapi garis `border-bottom` pada `.site-header` tidak ikut muncul di elemen-elemen di dalam header tersebut. Sebutkan pula dua properti lain yang berperilaku seperti `color` dan dua properti yang berperilaku seperti `border` pada kasus ini.

4. `index.html` Tokosaya sudah memuat `<link rel="stylesheet" href="css/style.css">`, tetapi halaman tetap tampil seperti tanpa gaya: link biru bergaris bawah dan judul memakai huruf serif bawaan. Sebutkan tiga penyebab yang paling mungkin, lengkap dengan langkah pemeriksaan untuk membuktikan masing-masing penyebab — gunakan alat yang memang dibahas di bab ini.

5. Sebuah company profile Tokosaya akan berisi empat halaman dan dikerjakan bergantian oleh tiga orang. Kamu ditunjuk untuk menetapkan aturan gaya. Tuliskan rekomendasimu tentang: kapan memakai selector elemen, *class*, atau ID; bagaimana pola penamaan *class*; dan bagaimana `style.css` diorganisasi. Sertakan alasan yang mengacu pada mekanisme kaskade dan kemudahan perawatan, lalu sebutkan satu praktik yang sebaiknya dihindari beserta alasannya.
