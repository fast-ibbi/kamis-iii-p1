# Kuis Ringkas — Bab 12: UI/UX dan Design System

> Frontend Development & Web Design · Semester III · _Kuis Ringkas per Bab_
> 10 soal (5 pilihan ganda + 5 isian singkat) · estimasi waktu ±15 menit · tingkat kesulitan campuran (C1–C4)
> Kunci + pembahasan: [kunci-kuis-ringkas.md](kunci-kuis-ringkas.md) · Bank lengkap 14 bab: [kuis-ringkas.md](../kuis-ringkas.md)

---

**Bagian A — Pilihan Ganda (5 soal)**

1. Rara menjelaskan perbedaan *user interface* (UI) dan *user experience* (UX) kepada anggota tim yang baru bergabung. Pernyataan yang paling tepat menurut bab ini adalah...
   - A. UI mencakup seluruh perasaan dan hasil yang dialami pengguna selama berbelanja, sedangkan UX adalah wajah visual seperti layout, warna, dan tombol
   - B. UI adalah seluruh wajah visual yang dilihat dan disentuh pengguna, sedangkan UX mencakup seluruh rasa dan hasil yang dialami pengguna dari awal membuka halaman sampai selesai berbelanja
   - C. UI dan UX adalah dua istilah yang berbeda untuk hal yang sama, yaitu susunan layout halaman
   - D. UI hanya mencakup elemen yang bisa diklik, sedangkan UX hanya mencakup pemilihan huruf dan warna

2. Menurut bab ini, design system Tokosaya tersusun dari empat lapisan. Urutan lapisan tersebut dari bawah ke atas adalah...
   - A. design token → komponen → pola dan aturan → dokumentasi
   - B. dokumentasi → pola dan aturan → komponen → design token
   - C. komponen → design token → dokumentasi → pola dan aturan
   - D. design token → pola dan aturan → dokumentasi → komponen

3. Sistem tipografi Tokosaya menjaga panjang baris paragraf sekitar 60–75 karakter per baris. Alasan yang paling tepat untuk aturan tersebut adalah...
   - A. agar jumlah kata pada setiap paragraf seragam di seluruh halaman
   - B. agar halaman dapat dicetak pada kertas berukuran A4 tanpa baris yang terpotong
   - C. agar browser tidak perlu mengunduh ulang keluarga huruf Inter saat berpindah halaman
   - D. agar mata tidak cepat lelah karena perpindahan baris terlalu sering dan pembaca tidak tersesat saat kembali ke baris berikutnya pada layar lebar

4. Seorang anggota tim perlu memberi jarak 32 piksel antar kelompok form pada `styleguide.html`, padahal 32 piksel bukan langkah langsung utilitas jarak Bootstrap. Tindakan yang paling sejalan dengan sistem jarak Tokosaya adalah...
   - A. memakai `gap-4` karena 24 piksel adalah nilai terdekat dan selisih 8 piksel tidak akan terasa
   - B. memakai kombinasi utilitas seperti `mt-5 mb-2` atau satu kelas kustom berisi `margin-block: 32px` yang mengikuti skala desain
   - C. menuliskan `style="margin-top: 32px"` pada setiap elemen form agar semua jaraknya pasti sama
   - D. memilih jarak 30 piksel agar semua form memakai satu nilai yang seragam

5. Notifikasi status pengiriman di halaman Tokosaya hanya dibedakan oleh warna — hijau untuk "terkirim" dan merah untuk "gagal" — tanpa ikon maupun teks status. Menurut aturan do and don't bab ini, cacat utamanya adalah...
   - A. warna hijau dan merah tidak boleh dipakai berdampingan dalam satu halaman
   - B. warna notifikasi seharusnya ditulis sebagai nilai heksa mentah, bukan lewat token
   - C. warna sebagai penyampai makna satu-satunya membuat pengguna dengan penglihatan warna terbatas kehilangan maknanya, sehingga perlu ditambahkan ikon atau teks
   - D. notifikasi semacam itu seharusnya memakai teks kuning `#F59E0B` di atas latar putih agar lebih mudah terlihat

**Bagian B — Isian Singkat (5 soal)**

6. Bab ini mengadopsi istilah dari Don Norman untuk isyarat visual bahwa sebuah elemen menyediakan cara interaksi tertentu — misalnya tombol berlatar warna dan berlengkung yang terlihat bisa ditekan. Istilah apakah itu?

7. Bab ini menyebut dua alasan mengapa konsistensi penting. Sebutkan kedua alasan tersebut.

8. Sebutkan enam nilai piksel yang menempati skala jarak 8 piksel Tokosaya.

9. Styleguide dipakai oleh tiga pembaca utama. Sebutkan ketiga pembaca tersebut.

10. Pada `styleguide.html`, navbar hanya ditampilkan dalam kondisi desktop statis. Jelaskan pembagian tanggung jawab antara dokumentasi statis dan JavaScript untuk komponen seperti navbar, modal, dan dropdown menurut subbab 12.7.
