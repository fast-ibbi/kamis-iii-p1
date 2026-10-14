# Kuis Ringkas — Bab 15: Final Project dan Quality Assurance

> Frontend Development & Web Design · Semester III · _Kuis Ringkas per Bab_
> 10 soal (5 pilihan ganda + 5 isian singkat) · estimasi waktu ±15 menit · tingkat kesulitan campuran (C1–C4)
> Kunci + pembahasan: [kunci-kuis-ringkas.md](kunci-kuis-ringkas.md) · Bank lengkap 14 bab: [kuis-ringkas.md](../kuis-ringkas.md)

---

**Bagian A — Pilihan Ganda (5 soal)**

1. Tim Tokosaya mengisi test matrix QA responsif untuk empat halaman pada tiga breakpoint. Sebuah test matrix dinyatakan tuntas apabila...
   - A. seluruh sel pertemuan halaman × breakpoint terisi status (lulus atau temuan) beserta catatan singkatnya
   - B. setiap halaman cukup diuji pada satu breakpoint yang paling berisiko saja
   - C. sel yang berisi temuan diberi catatan lengkap, sedangkan sel berstatus lulus boleh dikosongkan
   - D. pengujian dihentikan setelah seluruh halaman pernah dibuka melalui device toolbar

2. Bab ini menyederhanakan breakpoint baku Bootstrap menjadi tiga kolom praktis pada test matrix. Pembagian yang tepat adalah...
   - A. HP 320–575 px, tablet 576–767 px, dan desktop 768 px ke atas
   - B. HP 360–767 px, tablet 768–991 px, dan desktop 992–1199 px
   - C. HP 360–575 px, tablet 768–991 px, dan desktop 992 px ke atas
   - D. HP 360–575 px, tablet 576–991 px, dan desktop 1200 px ke atas

3. Rilis kandidat Tokosaya menyisakan tiga temuan: F-01 link navigasi katalog mati, F-02 kontras teks hero hanya 3 : 1, dan F-03 radius kartu 8 px sementara styleguide menetapkan 12 px. Urutan perbaikan dari prioritas tertinggi ke terendah adalah...
   - A. F-03 → F-02 → F-01
   - B. F-02 → F-01 → F-03
   - C. F-02 → F-03 → F-01
   - D. F-01 → F-02 → F-03

4. Kartu produk Tokosaya membutuhkan bayangan khas merek yang tidak tersedia sebagai utilitas Bootstrap. Tindakan yang paling sejalan dengan praktik terbaik subbab 15.4 adalah...
   - A. menuliskan `style="box-shadow: …"` langsung pada setiap elemen kartu agar tidak menyentuh file CSS
   - B. membuat kelas komponen sendiri di `css/style.css`, diberi penanda `/* kustom */`, dengan nilai yang mengacu token
   - C. menimpa kelas baku `.card` memakai `!important` supaya seluruh kartu ikut berubah sekaligus
   - D. menambah tautan CDN Bootstrap versi terbaru yang menyediakan utilitas bayangan merek

5. Seorang rekan menelusuri halaman `kontak.html` tanpa menyentuh mouse — hanya tombol tab dan enter — lalu mencatat bahwa urutan fokus mengalir logis dan indikator fokus terlihat. Pemeriksaan wajib audit aksesibilitas yang sedang dijalankan adalah...
   - A. teks alternatif — memastikan setiap `img` produk memakai `alt` yang menjelaskan konten dan tujuannya
   - B. kontras — memastikan teks utama mencapai rasio minimal 4,5 : 1 terhadap latarnya
   - C. keyboard dan fokus — memastikan halaman dapat dioperasikan tanpa mouse, termasuk skip link dan indikator fokus
   - D. struktur heading — memastikan satu `h1` per halaman dan tidak ada lompatan level heading

**Bagian B — Isian Singkat (5 soal)**

6. Bab ini menetapkan konvensi penamaan untuk berkas, folder, dan kelas CSS proyek Tokosaya. Sebutkan nama pola penamaannya beserta dua contoh nama kelas yang sesuai konvensi itu.

7. Saat men-debug aturan CSS yang bertabrakan di DevTools, panel manakah yang menampilkan nilai akhir yang benar-benar menyala setelah seluruh aturan bertanding? Jelaskan pula gunanya panel itu dalam metode debugging.

8. Bab ini membedakan *deployment* dan *rilis kandidat*. Jelaskan pengertian keduanya, lalu sebutkan dua bentuk deployment yang disebut bab ini.

9. Istilah apa yang dipakai bab ini untuk pengujian penerimaan oleh pengguna atau klien sebelum peluncuran resmi? Sebutkan pula siapa pengguna yang dimaksud pada studi kasus Tokosaya.

10. Peer review silang dijalankan setelah audit mandiri. Jelaskan tujuan peer review dan bagaimana pelaksanaannya agar tidak menjadi review satu arah.
