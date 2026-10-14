# Kuis Ringkas — Bab 03: Dasar-Dasar CSS

> Frontend Development & Web Design · Semester III · _Kuis Ringkas per Bab_
> 10 soal (5 pilihan ganda + 5 isian singkat) · estimasi waktu ±15 menit · tingkat kesulitan campuran (C1–C4)
> Kunci + pembahasan: [kunci-kuis-ringkas.md](kunci-kuis-ringkas.md) · Bank lengkap 14 bab: [kuis-ringkas.md](../kuis-ringkas.md)

---

**Bagian A — Pilihan Ganda (5 soal)**

1. Ketika browser merender halaman Tokosaya, cara CSS menentukan gaya elemen yang paling tepat dijelaskan sebagai berikut...
   - A. aturan CSS dieksekusi berurutan seperti program; begitu aturan pertama cocok dengan elemen, proses berhenti dan aturan berikutnya diabaikan
   - B. browser mencocokkan setiap selector dengan elemen DOM, menggabungkan semua aturan yang cocok, lalu memutuskan nilai yang bertabrakan lewat kaskade
   - C. browser hanya memakai aturan yang ditulis paling akhir di berkas CSS untuk menentukan gaya seluruh elemen halaman
   - D. browser memilih lebih dahulu aturan dengan specificity tertinggi, lalu memeriksa apakah selector-nya benar-benar cocok dengan elemen

2. Bab ini memperingatkan salah satu kesalahan umum: memakai `!important` untuk menyelesaikan setiap konflik gaya. Alasan utamanya adalah...
   - A. `!important` hanya dikenali browser lama sehingga aturan yang memakainya berisiko diabaikan browser modern
   - B. `!important` menurunkan derajat specificity aturan itu ke tingkat selector elemen sehingga mudah dikalahkan aturan class
   - C. setelah `!important` dipakai, konflik berikutnya cenderung harus dilawan dengan `!important` lain yang lebih spesifik sehingga berkas gaya makin sulit dipercaya
   - D. `!important` membatalkan pewarisan nilai dari elemen induk ke elemen anak sehingga teks di dalamnya kembali ke gaya bawaan browser

3. Header sebuah halaman diberi `id="pengantar"`, sedangkan paragraf di dalamnya ber-class `lead`. Bila ditulis aturan dengan selector `#pengantar .lead:hover`, kekuatan selector itu dalam pasangan (id, class, elemen) adalah...
   - A. (1, 2, 0)
   - B. (1, 1, 0)
   - C. (0, 2, 0)
   - D. (1, 2, 1)

4. Tim Tokosaya ingin butir pertama daftar keunggulan tampil lebih tegas dan menuliskannya sebagai `.nilai-list li:first-child { font-weight: 600; }` alih-alih menambah class khusus pada `<li>` pertama. Alasan yang paling tepat adalah...
   - A. pseudo-class selalu menang atas selector class dalam kaskade, berapa pun specificity selector class itu
   - B. penambahan nama class pada elemen `<li>` tidak dianjurkan ditulis di HTML sehingga pilihan itu memang dihindari
   - C. `:first-child` hanya bekerja pada daftar yang isinya tidak pernah berubah sehingga hasilnya selalu dapat diprediksi
   - D. penekanan mengikuti posisi butir di HTML sehingga tidak perlu disunting ulang ketika isi daftar berubah

5. Pada `style.css` Tokosaya tertulis `.section-title { font-size: 1.75rem; }`. Dengan setelan ukuran font elemen akar 16px, ukuran teks yang dihasilkan adalah...
   - A. 17,5px
   - B. 24px
   - C. 28px
   - D. 32px

**Bagian B — Isian Singkat (5 soal)**

6. CSS dapat dipasang melalui tiga cara. Sebutkan ketiga cara itu beserta letak kodenya masing-masing.

7. Deklarasi `border: 1px solid #E2E8F0;` pada kartu produk Tokosaya adalah bentuk singkat dari tiga nilai. Sebutkan ketiga nilai itu.

8. `body { background-color: #F8FAFC; }` hanya mewarnai latar halaman, bukan latar setiap elemen di dalamnya. Jelaskan mengapa demikian, lalu uraikan apa yang terjadi bila semua properti kotak justru ikut diwariskan.

9. Bab ini menganjurkan satuan `rem` untuk ukuran font, bukan `px`. Jelaskan alasan anjuran itu dengan mengaitkannya pada setelan font pengguna.

10. Sebutkan urutan bagian yang disarankan untuk berkas `style.css` proyek Tokosaya (minimal empat bagian), lalu jelaskan satu alasan mengapa urutan penulisannya diperhatikan.
