# Kuis Ringkas — Bab 14: Implementasi Desain Figma ke HTML CSS

> Frontend Development & Web Design · Semester III · _Kuis Ringkas per Bab_
> 10 soal (5 pilihan ganda + 5 isian singkat) · estimasi waktu ±15 menit · tingkat kesulitan campuran (C1–C4)
> Kunci + pembahasan: [kunci-kuis-ringkas.md](kunci-kuis-ringkas.md) · Bank lengkap 14 bab: [kuis-ringkas.md](../kuis-ringkas.md)

---

**Bagian A — Pilihan Ganda (5 soal)**

1. Bab ini menggambarkan alur desain ke kode sebagai rantai lima tahap, dari brief sampai handoff. Urutan yang benar dari hulu ke hilir adalah...
   - A. brief → wireframe → arsitektur informasi dan sitemap → UI design di Figma → handoff
   - B. brief → arsitektur informasi dan sitemap → wireframe → UI design di Figma → handoff
   - C. arsitektur informasi dan sitemap → UI design di Figma → brief → wireframe → handoff
   - D. wireframe → brief → handoff → arsitektur informasi dan sitemap → UI design di Figma

2. Pernyataan yang paling tepat mengenai perbedaan prototip dan implementasi adalah...
   - A. prototip adalah kode HTML yang belum diberi CSS, sedangkan implementasi adalah kode yang sudah dirapikan
   - B. prototip dan implementasi menjawab pertanyaan yang sama sehingga keduanya tidak perlu dibedakan saat handoff
   - C. implementasi dikerjakan lebih dahulu, lalu prototip menyalin hasilnya sebagai acuan desainer
   - D. prototip adalah simulasi desain yang menjawab "seperti apa bentuknya", sedangkan implementasi adalah kode sebenarnya yang menjawab "bagaimana bentuk itu hidup di semua layar"

3. Pada column grid frame desktop Tokosaya, dua angka penting yang dibaca dari garis grid adalah gutter dan margin. Pernyataan yang tepat mengenai keduanya adalah...
   - A. gutter adalah celah antarkolom 24 px, sedangkan margin adalah jarak 150 px dari tepi frame ke tepi kontainer di sisi kiri dan kanan
   - B. gutter adalah ruang kosong 150 px di sisi kiri-kanan frame, sedangkan margin adalah celah antarkolom 24 px
   - C. gutter adalah lebar satu kolom grid 73 px, sedangkan margin adalah celah antarkolom 24 px
   - D. gutter adalah jarak antarbaris teks di dalam kolom, sedangkan margin adalah lebar kontainer konten

4. Pemetaan Figma styles ke CSS dijalankan dalam dua lapis. Pasangan contoh yang tepat untuk kedua lapis itu adalah...
   - A. color style "Warna/Accent" menjadi kelas `.badge-populer`, sedangkan text style "Body/Paragraph" menjadi variabel `--clr-body`
   - B. color style "Warna/Accent" menjadi variabel `--clr-accent` di blok `:root`, sedangkan text style "Body/Paragraph" menjadi aturan `body` (Inter 400, 16 px, line-height 1,6)
   - C. color style dan text style sama-sama menjadi variabel di blok `:root`, lalu dipanggil lewat `var()` dari setiap komponen
   - D. color style disalin sebagai nilai hex langsung di tiap selector komponen, sedangkan text style disalin sebagai atribut di markup HTML

5. Spesifikasi frame desktop Tokosaya menyebut kontainer 1140 px, grid 12 kolom, gutter 24 px, dan lebar satu kolom 73 px. Bila desain menempatkan satu komponen pada dua kolom berurutan, lebar area komponen itu adalah...
   - A. 219 px
   - B. 194 px
   - C. 170 px
   - D. 146 px

**Bagian B — Isian Singkat (5 soal)**

6. Bab ini menyebut design token sebagai satu sumber kebenaran. Jelaskan secara singkat apa itu design token dan di bagian mana ia diletakkan di dalam file CSS proyek Tokosaya.

7. Grid desain yang dipakai Tokosaya memiliki dua belas kolom. Mengapa angka 12 dipilih, dan sebutkan dua contoh kombinasi kolom yang bisa dibentuk dari grid itu.

8. Praktikum menganjurkan menyalin nilai dari panel Inspect, bukan menyalin mentah semua propertinya. Ke mana nilai hasil salinan itu ditulis, dan mengapa salinan mentah bisa justru merugikan proyek?

9. Selain frame desktop 1440 px, Tokosaya menyiapkan frame tablet 768 px dan HP 375 px. Tuliskan gutter dan margin kontainer untuk kedua frame itu, lalu sebutkan pada lebar berapa kolom detail produk mulai menumpuk.

10. Badge status pada kartu produk terkait memakai token semantik, bukan warna aksen. Sebutkan token beserta nilai hex untuk badge "Tersedia" dan badge "Stok Terbatas".
