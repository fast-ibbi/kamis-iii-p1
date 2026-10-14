# Kunci Kuis Ringkas — Bab 15: Final Project dan Quality Assurance

> Frontend Development & Web Design · Semester III · _Kunci Kuis Ringkas per Bab_
> Penilaian: 10 butir × 10 poin (total 100) · kunci pilihan ganda + jawaban isian singkat + pembahasan ringkas
> File soal bab ini: [kuis-ringkas.md](kuis-ringkas.md) · Kunci lengkap 14 bab: [kunci-kuis-ringkas.md](../kunci-kuis-ringkas.md)

---

### Bagian A — Pilihan Ganda

1. **A** — test matrix adalah tabel halaman × breakpoint, dan setiap selnya wajib diisi status (lulus atau temuan) beserta catatan singkat; selama masih ada satu sel kosong, kerja pengujian belum dianggap selesai. Opsi B dan D memangkas cakupan tanpa dasar, sedangkan opsi C membalik aturannya karena yang terisi hanya sel bertemuan.
2. **C** — subbab 15.5 menyederhanakan breakpoint baku Bootstrap 576/768/992/1200 px menjadi tiga kolom praktis: HP 360–575 px, tablet 768–991 px, dan desktop 992 px ke atas. Opsi A menaikkan tablet ke 576 px, opsi B memangkas desktop pada 1199 px, dan opsi D memindahkan desktop ke 1200 px sehingga rentang 992–1199 px tidak terwakili.
3. **D** — severitas menentukan urutan perbaikan: Kritis (F-01, link mati menghalangi penggunaan) dikerjakan lebih dahulu, lalu Mayor (F-02, kontras 3 : 1 memperburuk keterbacaan), dan terakhir Minor (F-03, radius menyimpang dari styleguide 12 px). Opsi A, B, dan C menaruh temuan Mayor atau temuan kosmetik di depan temuan Kritis.
4. **B** — prinsip utilitas-pertama membolehkan CSS kustom ketika utilitas tidak mencukupi, asalkan kustom diberi penanda `/* kustom */`, nilainya mengacu token, dan kelas baku Bootstrap tidak ditimpa dengan `!important`. Opsi A memindahkan gaya ke markup, opsi C merusak kaskade dan mempersulit refactor, dan opsi D mengganti versi framework yang justru sumber regression menjelang rilis.
5. **C** — menelusuri halaman hanya dengan tombol tab dan enter menguji pemeriksaan aksesibilitas keyboard dan fokus: urutan tab mengalir logis, skip link bekerja, dan indikator fokus terlihat. Opsi A, B, dan D adalah pemeriksaan wajib lain yang diverifikasi dengan cara berbeda, yaitu membaca `alt` pada markup, mengukur rasio warna, dan memeriksa hierarki heading.

### Bagian B — Isian Singkat

6. **kebab-case dengan pola `blok-elemen`, misalnya `produk-card` dan `hero-title`** — nama kelas ditulis huruf kecil bersambung tanda hubung dan mendeskripsikan peran komponen, bukan tampilan sesaat; karena itu nama seperti `.merah`, `.fix2`, atau `.x1finalFIX` tidak punya tempat di `css/style.css`.
7. **panel Computed** — panel ini menampilkan nilai akhir yang benar-benar menyala setelah seluruh aturan bertanding (misalnya nilai final `font-size` dan warna), sehingga hipotesis penyebab cacat bisa diverifikasi dengan angka nyata, bukan ditebak; senarai aturan yang tercoret dan urutan pemenang kaskade tetap dibaca di panel Styles.
8. **deployment = menaruh website ke tempat yang dapat diakses orang lain; rilis kandidat = versi yang dinyatakan siap rilis dan menunggu persetujuan terakhir** — dua bentuk deployment yang disebut bab ini adalah layanan hosting statis dan satu paket ZIP yang dikirim sebagai artefak penilaian; paket rilis kandidat diberi label, misalnya `tokosaya-bootstrap-v1.0.0-rc1.zip`, beserta catatan perubahan.
9. **user acceptance testing (UAT)** — pengujian penerimaan yang dijalankan pengguna atau klien sebelum peluncuran resmi; pada studi kasus Tokosaya penguji itu adalah pemilik toko yang tidak menyentuh kode dan menilai website dengan caranya sendiri, sehingga berbeda dari QA teknis yang dijalankan pengembang.
10. **menemukan temuan yang lolos dari audit mandiri karena diperiksa mata segar; kedua pihak bertukar website dan menjalankan langkah audit yang sama** — peer review silang berjalan sekitar 45 menit dengan checklist dan format temuan yang seragam, sehingga kesepakatan yang setara mencegah review satu arah; temuan yang terkonfirmasi ditandai, lalu digabung dengan temuan audit mandiri dan diurutkan menurut severitas.
