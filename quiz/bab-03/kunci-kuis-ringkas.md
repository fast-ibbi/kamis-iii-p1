# Kunci Kuis Ringkas — Bab 03: Dasar-Dasar CSS

> Frontend Development & Web Design · Semester III · _Kunci Kuis Ringkas per Bab_
> Penilaian: 10 butir × 10 poin (total 100) · kunci pilihan ganda + jawaban isian singkat + pembahasan ringkas
> File soal bab ini: [kuis-ringkas.md](kuis-ringkas.md) · Kunci lengkap 14 bab: [kunci-kuis-ringkas.md](../kunci-kuis-ringkas.md)

---

### Bagian A — Pilihan Ganda

1. **B** — CSS bekerja secara deklaratif: browser mencocokkan setiap selector dengan elemen DOM, menggabungkan semua aturan yang cocok, lalu memutuskan nilai yang bertabrakan lewat kaskade; CSS bukan urutan program yang berhenti di aturan pertama (A), bukan hanya aturan paling akhir (C), dan specificity diperiksa sesudah pencocokan, bukan sebelum (D).
2. **C** — sekali `!important` dipakai, konflik berikutnya biasanya harus dilawan dengan `!important` lain yang lebih spesifik sehingga berkas gaya makin sulit dipercaya; menurut bab ini `!important` hanya untuk keadaan darurat. Opsi lain keliru: `!important` tetap didukung browser modern (A), justru melompati tingkat specificity alih-alih menurunkannya (B), dan tidak menyentuh pewarisan (D).
3. **A** — pasangan (id, class, elemen): `#pengantar` menyumbang 1 id, sedangkan `.lead` dan `:hover` sama-sama masuk kolom class/pseudo-class sehingga berjumlah 2, dan tidak ada selector elemen. Opsi B melupakan `:hover`, opsi C melupakan id, dan opsi D menghitung satu elemen yang sebenarnya tidak ada.
4. **D** — `:first-child` mengikuti posisi butir di HTML sehingga penekanannya tetap tepat ketika isi daftar berubah, tanpa class khusus yang harus disunting ulang. Opsi A salah karena pseudo-class tidak otomatis menang atas class; opsi B salah karena class pada `<li>` tetap sah dipakai; opsi C salah karena justru daftar yang isinya berubah tetap tertangani.
5. **C** — `rem` berpatokan pada ukuran font elemen akar (`html`), jadi 1,75 × 16px = 28px. Opsi A berasal dari salah hitung 1,75 × 10px; opsi B setara 1,5rem; opsi D setara 2rem.

### Bagian B — Isian Singkat

6. **inline (atribut `style` pada elemen), internal (elemen `<style>` di `head`), dan external (berkas `.css` terpisah yang dihubungkan dengan `<link>`)** — jangkauannya bertingkat: satu elemen, satu halaman, lalu seluruh halaman proyek; karena bisa dipakai ulang dan mudah dirawat, external CSS menjadi default proyek.
7. **tebal `1px`, gaya garis `solid`, dan warna `#E2E8F0`** — `border` adalah deklarasi singkat yang menetapkan ketebalan, gaya garis (`solid`, `dashed`, atau `dotted`), dan warna sekaligus.
8. **karena `background-color`, seperti `border`, `padding`, dan `margin`, termasuk properti yang tidak diwariskan** — inheritance hanya berlaku pada properti tertentu (misalnya `color`, `font-family`, `line-height`); bila seluruh properti kotak ikut diwariskan, setiap elemen anak akan menyalin latar, tepi, dan jarak induknya sehingga tampilan halaman berantakan.
9. **`rem` mengikuti ukuran font elemen akar (`html`), sehingga teks ikut membesar ketika pengguna memperbesar font dasar browser** — `px` bernilai tetap dan mengabaikan setelan itu; karena itu `rem` dianjurkan untuk ukuran font demi aksesibilitas.
10. **komentar kepala berkas → dasar halaman (`body`) → tipografi dasar (heading, paragraf, link) → bagian halaman berurutan (header–navigasi, isi `main`, footer) → utilitas kecil** — urutan penulisan adalah bagian dari kaskade, sehingga gaya umum di awal dan gaya khusus di akhir membuat konflik dengan specificity setara lebih mudah diprediksi; komentar pemisah juga memudahkan anggota tim menemukan bagian yang dicari.
