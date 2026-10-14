# Kunci Jawaban & Rubrik — Bab 07: CSS Grid dan Responsive Web Design

> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)
> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)

---

### Kunci Pilihan Ganda

1. **B** — Grid track adalah jalur kolom atau baris yang ukurannya ditentukan template; perpotongan kolom dan baris disebut sel, gabungan sel disebut area, dan jaraknya diatur `gap`.
2. **A** — Pola `auto-fit` + `minmax(220px, 1fr)` menambah kolom selama ruang mencukupi, sehingga kartu menumpuk di HP lalu menjadi 2–4 kolom di monitor tanpa satu media query pun.
3. **D** — Dua aturan denah area: setiap baris kata wajib diapit tanda petik, dan jumlah kolom pada setiap baris harus sama; browser gagal membentuk denah bila jumlahnya tidak konsisten.
4. **C** — Breakpoint adalah keputusan desain berupa nilai lebar viewport tempat gaya berubah agar halaman tetap layak dibaca, bukan daftar perangkat maupun katalog merek.
5. **A** — `240px` dikhususkan lebih dulu, lalu sisa ruang (setelah ukuran tetap dan gap dipotongkan) dibagi proporsional dengan porsi 1 : 2.
6. **D** — Angka pertama menunjuk garis start, sedangkan `-1` menunjuk garis paling ujung; cara ini praktis karena jumlah kolom boleh berubah antar perangkat.
7. **B** — `width: 100%` mengikat gambar pada wadahnya, `height: auto` menjaga proporsi, dan `display: block` menghilangkan celah kecil akibat perilaku inline bawaan gambar.
8. **C** — Suku tengah bernilai 0.5rem + 2vw = 8 px + 16 px = 24 px, masih berada di antara batas minimum 16 px dan maksimum 32 px sehingga nilai itulah yang dipakai.
9. **A** — Nilai kueri tanpa satuan tidak pernah terpenuhi sehingga blok dua kolom tak pernah aktif; perbaikan minimalnya menambahkan `px` pada `min-width`.
10. **D** — `repeat(4, 1fr)` hanya menyediakan empat track per baris; kartu kelima dan keenam mengalir otomatis ke baris berikutnya, sehingga terlihat 4 + 2.
11. **B** — Mobile-first menulis gaya dasar satu kolom lebih dahulu, lalu menaikkan denah dengan `min-width: 992px` ketika ambang itu tercapai; pola `max-width` adalah kebiasaan desktop-first yang memaksa browser terus-menerus membatalkan gaya.
12. **C** — Setelah tabel terkurung rapi, penyebab sisa biasanya elemen berlebar tetap seperti gambar tanpa `width: 100%`; menelusurinya lewat device toolbar dan panel Elements adalah langkah diagnostik yang tepat.
13. **B** — Kebutuhan "persis dua lalu tiga kolom" adalah pola media query eksplisit yang bisa dijadwalkan bersama desainer; `auto-fit` justru menghasilkan jumlah kolom yang berubah bebas mengikuti ruang.
14. **D** — Pengujian yang benar adalah mengecil melewati beberapa breakpoint sekaligus (menyeret 320–1200 px) untuk menemukan *layout trap*, lalu memeriksa lebar-lebar uji yang baku.
15. **A** — Keempat blok sama-sama berlaku pada 1300 px dan spesifisitasnya setara, jadi untuk properti yang sama nilai dari aturan yang ditulis paling akhir—yaitu blok 768 px—yang menang; inilah alasan urutan `min-width` harus menaik.

### Jawaban Essay

1. **Poin inti:**
   - `fr` adalah satuan pecahan yang membagi **ruang sisa** setelah ukuran tetap dan `gap` dipotongkan; `1fr 1fr` berarti dua bagian sama besar, dan porsi boleh tak seimbang seperti `1fr 2fr`.
   - Pada `200px 40% 40%`, persentase dihitung dari lebar wadah, bukan dari sisa ruang: 200 + 400 + 400 = 1000 px sudah memenuhi wadah sebelum `gap: 20px` ditambahkan (total melampaui 1000 px), sehingga muncul luapan horizontal.
   - Pada `200px 1fr 1fr`, `gap` dipotongkan lebih dulu, lalu sisanya dibagi dua; hasilnya selalu pas di dalam wadah dan tetap benar ketika lebar wadah atau jumlah `gap` berubah.
   **Skor:** 2 (arti `fr` dan ruang sisa) + 3 (perhitungan dan luapan pada versi persen) + 3 (ketahanan versi `fr` terhadap perubahan gap/lebar) + 2 (kesimpulan) = 10

2. **Poin inti:**
   - Mobile-first menulis gaya dasar untuk layar kecil lebih dahulu, lalu menambahkan gaya untuk layar lebih besar dengan media query bernilai `min-width`; gaya dasar tetap berlaku dan tidak dibatalkan.
   - `@media (min-width: 768px)` berarti "mulai 768 px ke atas pakai blok di dalamnya", sehingga kode bertumbuh dari kecil ke besar seperti jalan yang diperlebar.
   - Karena blok-blok ber-*specificity* setara dan kondisinya saling tumpang tindih di layar lebar, aturan yang ditulis **paling akhir** yang menang; itulah sebabnya urutan 576 → 768 → 992 → 1200 wajib menaik.
   - Bila urutannya tertukar, pada layar lebar justru nilai dari ambang yang lebih kecil (yang ditulis belakangan) yang menang, sehingga jumlah kolom atau jarak yang tampak tidak sesuai rencana.
   - Pendekatan sebaliknya (`max-width`) memaksa browser terus-menerus membatalkan gaya desktop dan membuat kaskade jadi tempat berburu bug.
   **Skor:** 2 (definisi dan peran `min-width`) + 3 (mekanisme kaskade dan urutan menaik) + 2 (akibat bila urutan tertukar) + 3 (perbandingan dengan desktop-first) = 10

3. **Poin inti:**
   - `grid-template-areas` menggambar denah dengan kata-kata; setiap elemen mengambil posisinya lewat `grid-area: nama`, sehingga membaca CSS terasa membaca denah kamar.
   - Dua aturan penulisan: setiap baris kata wajib diapit tanda petik, dan jumlah kolom pada setiap baris harus sama; pelanggaran salah satunya membuat browser mengabaikan denah.
   - Perubahan antar breakpoint cukup dengan menggambar ulang denah di dalam media query (`"header header" / "nav main" / "footer footer"` pada 768 px), sementara nilai `grid-area` pada tiap elemen dan seluruh markup HTML tidak berubah.
   - Keterbatasan: `grid-template-areas` hanya bisa merancang denah persegi; bentuk tangga atau area berlekuk tidak dapat digambar dengan kata-kata dan harus memakai `grid-column`/`grid-row`.
   **Skor:** 2 (mekanisme nama area) + 2 (dua aturan penulisan) + 3 (denah digambar ulang tanpa mengubah HTML) + 2 (keterbatasan denah persegi) + 1 (contoh blok denah) = 10

4. **Poin inti:**
   - Tabel data punya lebar minimum demi keterbacaan kolom (`min-width: 640px`), sehingga di 375 px tabel memang lebih lebar dari viewport.
   - Dengan wadah `.tabel-scroll` ber-`overflow-x: auto`, satu-satunya pengguliran horizontal terjadi **di dalam** wadah tabel; halaman tetap tenang dan navigasi lain tetap terjangkau.
   - Bila pengguliran dibiarkan pada seluruh halaman, seluruh antarmuka (header, sidebar, footer) ikut tergeser: itu cacat responsif paling tampak dan tanda layout belum beres.
   - Menyembunyikan kolom akan menurunkan kegunaan dashboard—nomor pesanan, pelanggan, total, dan status semuanya dibutuhkan petugas; memadatkan teks juga tidak menyelesaikan masalah lebar.
   - Alternatif yang lebih buruk adalah mengecilkan ukuran huruf sampai tabel muat, karena keterbacaan justru rusak.
   **Skor:** 2 (alasan lebar minimum tabel) + 3 (mekanisme `overflow-x: auto` pada wadah) + 3 (analisis risiko pengguliran seluruh halaman) + 2 (evaluasi alternatif yang ditolak) = 10

5. **Poin inti:**
   - `span` pada `grid-column`/`grid-row` menempatkan butir relatif pada jumlah track ("mulai garis 1 membentang dua track"), cocok untuk penempatan lokal yang tidak menyusun kerangka halaman.
   - `grid-template-areas` menyusun denah keseluruhan berbasis nama dan mudah digambar ulang per breakpoint, cocok untuk struktur makro halaman.
   - Untuk **kartu "Penjualan Hari Ini" di dalam barisan kartu statistik**, pilihan yang lebih tepat adalah `grid-column: 1 / span 2` pada kartu itu, karena barisan kartu dibiarkan mengalir otomatis dan hanya satu kartu yang diberi bobot visual.
   - Untuk **kerangka header–nav–main–footer**, pilihan yang lebih tepat adalah `grid-template-areas`, karena area-area itu memang membentuk kerangka halaman dan posisinya berubah antar breakpoint.
   - Risiko pemeliharaan: penempatan eksplisit dengan angka garis bisa salah posisi ketika jumlah kolom per breakpoint diubah (misalnya dari dua ke empat kolom); solusinya memakai `span` ketimbang menghitung garis akhir, atau menyesuaikan denah area bersama media query dan memberi komentar penanda versi.
   **Skor:** 3 (perbandingan dua pendekatan) + 3 (pemilihan tepat per kasus beserta alasan) + 3 (risiko pemeliharaan ketika jumlah kolom berubah) + 1 (usulan mitigasi) = 10

### Jawaban Praktikum Lab

1. **Langkah solusi:** Definisikan token di `:root`, lalu tulis `.sorotan-grid { display: grid; grid-template-columns: 1fr; gap: calc(var(--space-unit) * 3); }`, diikuti `@media (min-width: 576px) { .sorotan-grid { grid-template-columns: repeat(2, 1fr); } }` dan `@media (min-width: 992px) { .sorotan-grid { grid-template-columns: repeat(3, 1fr); } }`. Kartu memakai `var(--clr-surface)`, `var(--clr-border)`, `var(--radius)`.
   **Kriteria penilaian:** token dipakai bukan nilai heksadesimal mentah 20%; struktur grid dan `gap` benar 30%; urutan media query menaik dan tanpa `max-width` 30%; hasil uji 375/576/768/992 px sesuai (1/2/2/3 kolom) 20%.

2. **Langkah solusi:** Dua cacatnya: (1) denah gaya dasar menyatakan dua kolom (`"header header"`, `"nav main"`) padahal `grid-template-columns: 1fr` hanya menyediakan satu kolom, sehingga denah dasar diabaikan browser—perbaikan: satu kata per baris (`"header"`, `"nav"`, `"main"`, `"footer"`); (2) `grid-area: navv` tidak sama dengan nama area `nav` pada denah, sehingga elemen navigasi tidak mendapat posisi bernama dan jatuh ke penempatan otomatis—perbaikan: tulis `grid-area: nav`. Versi perbaikan mempertahankan denah tablet apa adanya karena sudah konsisten jumlah kolomnya.
   **Kriteria penilaian:** kedua cacat ditemukan dan dinamai 40%; perbaikan CSS benar dan dijalankan 30%; komentar penanda denah versi ada 10%; bukti tangkapan layar 375 px (tumpuk) dan 900 px (nav di kiri) 20%.

3. **Langkah solusi:** Pada 1200 px media query yang aktif adalah `min-width: 576px`, `768px`, `992px`, dan `1200px`; aturan `repeat(4, 1fr)` di blok 1200 px-lah yang menang untuk `grid-template-columns`, sehingga terbentuk empat track kolom dan satu baris untuk empat kartu. Pada 1100 px blok 1200 px belum berlaku, jadi jumlah kolom dua (hasil blok 576 px) dan kartu mengalir menjadi dua baris. Pada 560 px hanya gaya dasar yang berlaku, sehingga satu kolom.
   **Kriteria penilaian:** overlay grid berhasil diaktifkan dan terlihat 25%; jumlah track serta nomor garis dicatat dengan benar pada 1200 px 30%; tabel tiga lebar uji lengkap dan menyebut media query yang berlaku 35%; keterangan ringkas 10%.

4. **Langkah solusi:** Versi mobile-first: `.katalog-grid { grid-template-columns: 1fr; }`, lalu `@media (min-width: 576px) { repeat(2, 1fr) }`, `@media (min-width: 768px) { repeat(3, 1fr) }`, dan `@media (min-width: 992px) { repeat(4, 1fr) }`. Hasil pada 375/600/900/1300 px identik dengan versi lama (1/2/3/4 kolom). Versi baru lebih mudah dirawat karena gaya dasar tetap berlaku dan tiap blok hanya menaikkan nilai, tidak membatalkan gaya desktop; tidak ada blok `max-width` yang saling bertabrakan saat urutan berkas berubah.
   **Kriteria penilaian:** hasil visual identik pada empat lebar uji 40%; penulisan mobile-first dan urutan menaik 30%; tiga kalimat penjelasan argumentatif 20%; tidak ada sisa blok `max-width` 10%.

5. **Langkah solusi:** Gaya dasar `.promo-grid { grid-template-columns: 1fr; }`; 576 px `repeat(2, 1fr)`; 992 px `repeat(3, 1fr)`. Kartu pertama diberi `.promo-utama { grid-column: 1 / span 2; }` di blok 576 px ke atas. Pada 576 px: baris pertama terisi kartu "Gratis Ongkir" (dua track), lalu kartu kedua dan ketiga mengisi baris kedua, dan kartu keempat turun ke baris ketiga. Pada 992 px: baris pertama terisi kartu promosi (track 1–2) dan kartu kedua pada track 3, sedangkan kartu ketiga dan keempat mengisi baris kedua.
   **Kriteria penilaian:** struktur grid dan token benar 25%; bentangan `span` diletakkan pada breakpoint yang tepat 30%; alur kartu diamati dan dilaporkan tepat 25%; bukti tangkapan layar 375 px dan 900 px 20%.

6. **Langkah solusi:** Yang diperiksa: (a) tautan aktif memakai `aria-current="page"` (ya pada markup contoh); (b) `:focus-visible` dengan `outline: 2px solid var(--clr-primary)` dan `outline-offset: 2px`; (c) area sentuh ≥ 40 px dapat diperiksa dari tinggi terhitung tautan di panel Computed; (d) navigasi disusun `ul` + `li`; (e) halaman hanya punya satu `h1` (judul dashboard) sedangkan seksi memakai `h2`. Temuan lazim yang perlu diperbaiki: padding tautan kurang tinggi, `:focus` tanpa `:focus-visible`, atau tautan aktif tanpa `aria-current`.
   **Kriteria penilaian:** lima poin diperiksa dengan status jelas 40%; temuan dinyatakan dengan bukti pengukuran atau tangkapan layar 20%; satu perbaikan fungsional dilakukan dan diuji 30%; penjelasan keterkaitan aksesibilitas dan pengguna keyboard 10%.

7. **Langkah solusi:** `clamp(1.5rem, 1.1rem + 1.5vw, 2rem)` menghasilkan 24 px pada 375 px (nilai tengah terhitung ≈ 23,2 px, di bawah minimum, sehingga browser memakai batas minimum 1.5rem = 24 px) dan 32 px pada 1440 px (nilai tengah ≈ 39,2 px melampaui maksimum, sehingga terpotong ke 2rem = 32 px). Gambar dengan aturan `width: 100%; height: auto; display: block` tidak pernah melebihi lebar kartu, termasuk gambar berukuran asli 1200 px.
   **Kriteria penilaian:** aturan `clamp()` dan gambar responsif ditulis benar 30%; dua nilai Computed sesuai hasil hitungan 35%; bukti gambar tidak melampaui kartu pada 375 px 25%; kerapian laporan pengamatan 10%.

8. **Langkah solusi:** Dua penyebab yang dilaporkan: tabel tanpa wadah penggulir (sehingga `min-width: 640px` mendorong `body`) dan gambar selebar tetap 640 px tanpa `width: 100%`. Perbaikan: `<div class="tabel-scroll">` ber-`overflow-x: auto` yang mengurung tabel ber-`min-width: 640px`, serta aturan `.katalog-grid img { width: 100%; height: auto; }` (atau setara) untuk gambar. Verifikasi: pada 375 px hanya wadah tabel yang menggulir. Larangan `overflow-x: hidden` pada `body`: ia menyembunyikan gejala, bukan penyebab, dan bisa memotong isi yang justru perlu dibaca.
   **Kriteria penilaian:** dua penyebab diidentifikasi dengan bukti dari panel Computed 35%; kedua perbaikan CSS benar dan diuji 35%; bukti sebelum/sesudah 20%; alasan larangan `overflow-x: hidden` 10%.

9. **Langkah solusi:** Gaya dasar: `.rekap { display: grid; grid-template-columns: 1fr; grid-template-areas: "header" "nav" "main" "aside" "footer"; gap: 16px; }` dengan pemetaan `.rekap-header { grid-area: header; }` dan seterusnya. Mulai 992 px: `grid-template-columns: 220px 1fr 200px;` dengan denah `"header header header" / "nav main aside" / "footer footer footer"`. Setiap baris dua denah memiliki jumlah kata yang konsisten dengan jumlah kolomnya, dan tidak ada kelas posisi apa pun di HTML.
   **Kriteria penilaian:** denah dasar dan denah 992 px keduanya valid (jumlah kolom konsisten) 35%; pemetaan `grid-area` lengkap dan benar 25%; tanpa perubahan kelas posisi di HTML 15%; hasil uji 375 px dan 1200 px sesuai rancangan 25%.

10. **Langkah solusi:** Prediksi: pada 1300 px blok 1200 px dan 576 px sama-sama berlaku untuk `grid-template-columns`, dan karena blok 576 px ditulis belakangan maka **dua kolom** yang terbentuk, bukan empat; `gap` dari blok 992 px tetap berlaku karena tidak ada aturan `gap` lain yang menimpanya. Pada 700 px hanya blok 576 px yang berlaku, sehingga dua kolom dan `gap` bawaan. Penulisan ulang yang benar: gaya dasar satu kolom, lalu `@media (min-width: 576px)` dua kolom, `@media (min-width: 992px)` menambah `gap`, dan `@media (min-width: 1200px)` empat kolom—karena urutan menaik, blok 1200 px ditulis terakhir dan menang pada layar lebar. Aturan yang berlaku: bila dua aturan sama spesifik dan keduanya berlaku, aturan yang ditulis paling akhir yang menang.
   **Kriteria penilaian:** prediksi ditulis sebelum pengujian dan akurat 30%; bukti panel Styles (aturan dicoret lawan aturan yang menang) 25%; penulisan ulang mobile-first benar dan sesuai perilaku target 30%; simpulan kaskade tepat 15%.
