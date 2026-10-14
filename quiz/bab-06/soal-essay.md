# Soal Essay — Bab 06: Flexbox untuk Web Layout

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 5 soal essay · tingkat kesulitan campuran (C2–C5)
> Poin jawaban + bobot skor: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-essay.md](../soal-essay.md)

---

**Essay (5 soal)**

1. Flexbox disebut sebagai model layout *satu dimensi*. Jelaskan maksudnya, lalu bandingkan dengan dua pendekatan lama yang pernah dipakai untuk menyusun menu horizontal — `float` dan `display: inline-block` — dan sebutkan masalah yang diselesaikan flexbox pada masing-masing pendekatan itu.

2. `gap` pada flex container sering menggantikan kebiasaan memberi `margin-right` pada setiap anak. Jelaskan bagaimana keduanya berbeda ketika baris menekuk (`flex-wrap: wrap`), lalu jelaskan bagaimana `row-gap`/`column-gap` mengatasi kebutuhan jarak yang berbeda antara antar-baris dan antar-kolom.

3. Perhatikan potongan CSS berikut.

```css
.baris { display: flex; gap: 16px; }
.kolom-konten { flex: 1 1 160px; }
.kolom-samping { flex: 0 1 120px; }
```

a. Tuliskan arti ketiga nilai pada `flex: 1 1 160px` dan pada `flex: 0 1 120px`. b. Jelaskan perilaku kedua kolom ketika wadah masih longgar, lalu ketika wadah menyempit. c. Jelaskan properti mana yang "menang" bila pada `.kolom-konten` kamu juga menulis `width: 300px`.

4. Katalog Tokosaya berisi delapan kartu dengan `.produk-row { display: flex; flex-wrap: wrap; gap: 24px; }` dan `.produk-card { flex: 0 1 250px; }`. Pada satu ukuran jendela tertentu kartu terbagi 3-3-2 sehingga baris terakhir menyisakan ruang kosong di kanan. Jelaskan mengapa hal itu terjadi pada flexbox, tuliskan apa yang terjadi pada `align-items` setelah baris menekuk, dan tentukan kapan masalah perataan itu sebaiknya diserahkan ke Grid.

5. Rancang aturan hero Tokosaya yang berisi judul, subjudul, dan satu tombol CTA. Tuliskan properti flex beserta nilai yang kamu pilih untuk menumpuk dan menengahkan ketiganya, lalu jelaskan mengapa pada `flex-direction: column` properti `align-items` bekerja horizontal sedangkan `justify-content` bekerja vertikal. Sertakan pula satu keputusan untuk menjaga keterbacaan subjudul.
