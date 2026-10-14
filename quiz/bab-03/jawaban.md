# Kunci Jawaban & Rubrik — Bab 03: Dasar-Dasar CSS

> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)
> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)

---

### Kunci Pilihan Ganda

1. **C** — `declaration` adalah pasangan properti dan nilai (`color: #1E293B;`). Selector menyebut elemen yang disasar, sedangkan *cascade* dan *specificity* adalah mekanisme pemilihan pemenang antaratuan.
2. **B** — CSS internal ditulis di elemen `<style>` dalam `head` dan jangkauannya satu halaman penuh. Atribut `style` hanya satu elemen, sedangkan `<link>` seharusnya berada di `head` dan jangkauannya seluruh halaman proyek.
3. **A** — *Cascading* adalah cara browser menyatukan banyak aturan yang mungkin bertabrakan lalu memilih pemenangnya. Pewarisan nilai ke anak adalah *inheritance*, dan urutan umum-ke-khusus hanyalah kebiasaan penataan berkas.
4. **D** — `color` termasuk properti teks yang diwariskan, sama seperti `font-family` dan `line-height`. `border`, `padding`, dan `margin` adalah properti kotak yang tidak diwariskan.
5. **A** — Hitungannya: 0 ID, 2 *class/pseudo-class* (`.site-nav` dan `:focus`), 1 elemen (`a`), sehingga menjadi (0, 2, 1). Pseudo-class dihitung setara *class*, bukan setara elemen.
6. **C** — *Descendant selector* ditulis dengan spasi: `.menu-list li` berarti "setiap `li` di dalam elemen ber-*class* `menu-list`". Opsi A membalik arah keturunan, opsi B menyasar `li` yang ber-*class* `menu-list`, opsi D adalah *grouping*.
7. **B** — Selector harus dibatasi pada `tbody` supaya baris judul di `thead` tidak ikut berwarna. Opsi A juga mengenai `tr` di dalam `thead`, opsi C hanya mewarnai satu baris pertama, dan opsi D menyasar sel judul.
8. **D** — `#kontak .cta-button` bernilai (1,1,0) dan mengalahkan `.cta .cta-button` (0,2,0), `.cta-button` (0,1,0), maupun `a` (0,0,1) karena angka *id* selalu lebih berbobot daripada tumpukan *class*.
9. **B** — Adanya spasi membuat selector dibaca "elemen apa pun di dalam link", bukan "link yang sedang di-*hover*". Penulisan yang benar adalah `a:hover` tanpa spasi.
10. **C** — `font-size: 0.875rem` sama dengan 14px pada basis 16px, sehingga `2em` dihitung dari ukuran font elemen itu sendiri: 2 × 14px = 28px. Nilai 32px akan muncul kalau `em` dihitung dari font akar 16px.
11. **B** — Kedua aturan sama-sama menyasar `p` dengan *specificity* setara, sehingga urutan penulisan menentukan. Karena `<link>` muncul setelah `<style>` di dalam dokumen, aturan eksternallah yang menang.
12. **A** — Gaya inline menang di kaskade, jadi memindahkannya ke berkas eksternal harus dibarengi penghapusan atribut `style` dan penggantiannya dengan class berbasis peran. Menambah `!important` atau menaikkan kekhususan hanya menumpuk masalah.
13. **C** — Outline fokus adalah satu-satunya penanda posisi bagi pengguna yang menyusuri halaman dengan tombol Tab. Menghapusnya tanpa pengganti membuat navigasi keyboard tak terlihat, padahal gaya fokus tidak mengganggu pengguna tetikus.
14. **A** — Konvensi bab ini adalah kebab-case dengan pola `blok-elemen` dan nama berbasis peran, bukan tampilan. Opsi C justru menamai komponen dengan sifat visualnya sehingga cepat usang saat desain berubah.
15. **D** — Class selector yang benar memakai titik di depan, dan pasangan warnanya tepat: teks putih di atas latar indigo dengan tepi `1px solid #E2E8F0`. Opsi A memakai selector ID yang tidak cocok dengan atribut class, opsi B menukar warna teks dan latar, opsi C menulis selector tanpa titik sehingga tidak pernah cocok.

### Jawaban Essay

1. **Poin inti:**
   - Kaskade adalah algoritma browser dalam kumpulan aturan yang saling bertabrakan pada elemen yang sama.
   - Langkahnya: kumpulkan seluruh aturan yang menyasar elemen, saring berdasar asal (gaya bawaan browser kalah dari aturan yang kita tulis), urutkan dengan *specificity* (inline > id > class > elemen), dan bila semuanya setara, aturan yang ditulis paling akhir menang.
   - Contoh: `p { color: #334155; }` versus `.catatan { color: #F59E0B; }` pada elemen `<p class="catatan">`; aturan class menang karena (0,1,0) lebih kuat daripada (0,0,1).
   - Menyebut `!important` sebagai keadaan darurat yang memotong antrean kaskade (nilai tambah).
   **Skor:** kelengkapan langkah 2 + ketepatan perhitungan *specificity* 2 + contoh yang benar dan relevan 1 = 5.

2. **Poin inti:**
   - Tiga *pseudo-class* dipilih dari daftar dan masing-masing disertai satu baris aturan yang valid, misalnya `.site-nav a:hover { color: #4F46E5; }`, `.site-nav a:focus { outline: 2px solid #4F46E5; }`, `tbody tr:nth-child(odd) { background-color: #F8FAFC; }`, `li:first-child { font-weight: 600; }`, `li:last-child { color: #DC2626; }`.
   - Penjelasan keadaan: `:hover` saat kursor berada di atas elemen, `:focus` saat elemen menerima fokus keyboard, `:first-child`/`:last-child` untuk anak pertama/terakhir, `:nth-child()` untuk pola urutan seperti baris berselang-seling.
   - Contoh diterapkan di Tokosaya: link navigasi yang berubah warna saat di-*hover*, tombol CTA yang tetap terlihat saat ditabrak Tab, tabel katalog dengan latar selang-seling, atau butir daftar keunggulan pertama yang ditebalkan.
   - Menegaskan semuanya berjalan murni CSS tanpa JavaScript dan alasan gaya fokus dipertahankan.
   **Skor:** tiga aturan CSS benar 3 × 1 = 3 (1 poin per pseudo-class yang lengkap), relevansi contoh Tokosaya 1, penjelasan keadaan yang tepat 1 = 5.

3. **Poin inti:**
   - `color` dan `line-height` diwariskan, sehingga nilainya menurun dari `body` ke seluruh elemen anak; cukup satu aturan untuk mewarnai hampir seluruh teks halaman.
   - `border` dan `padding` bukan properti yang diwariskan; keduanya hanya berlaku pada elemen yang disasar. Kalau diwariskan, setiap anak akan menyalin tepi dan jarak induk dan tampilannya justru berantakan.
   - Dua contoh properti seperilaku `color`: `font-family` dan `font-size`/`line-height` (properti teks lain). Dua contoh seperilaku `border`: `margin` dan `background-color`.
   **Skor:** penjelasan mekanisme pewarisan 2 + contoh tepat pada tiap kelompok 2 + kesimpulan implikasi praktis 1 = 5.

4. **Poin inti:**
   - Penyebab pertama: jalur `href` tidak cocok dengan struktur folder (misalnya `styles/style.css` padahal berkasnya di `css/`) atau ekstensi berkas salah. Pemeriksaan: buka tab Console dan cari pesan "Failed to load stylesheet" beserta URL yang diminta browser, lalu cocokkan dengan struktur folder.
   - Penyebab kedua: selector CSS tidak benar-benar menjangkau elemen karena salah ketik nama *class* (misalnya `sitenav` vs `site-nav`) atau aturan yang lebih spesifik menang dalam kaskade. Pemeriksaan: pilih elemen di DevTools dan periksa panel Styles — aturan yang tidak berlaku akan tampak tercoret.
   - Penyebab ketiga: browser masih memakai `style.css` versi lama dari cache atau berkas belum disimpan di editor. Pemeriksaan: hard refresh (Ctrl+F5), aktifkan "Disable cache" pada panel Network, dan pastikan penanda penyuntingan pada tab editor hilang.
   - Tambahan yang diterima: keberadaan `<link>` di luar `head` sehingga urutan pemuatan kacau.
   **Skor:** tiga penyebab 3 × 1 = 3, langkah pemeriksaan yang bisa dijalankan 2 = 5.

5. **Poin inti:**
   - Selector elemen hanya untuk aturan global (font dasar, warna teks `body`, gaya link).
   - *Class* adalah pengait utama karena bisa dipakai ulang di banyak elemen; penamaannya kebab-case dengan pola `blok-elemen` dan berbasis peran (`site-nav`, `hero-title`, `badge-tersedia`).
   - ID dipakai hemat, hanya untuk titik jangkar yang benar-benar unik, karena *specificity*-nya tinggi dan membuat aturan susah ditimpa.
   - Organisasi `style.css`: komentar kepala berkas berisi versi dan urutan bagian, lalu dasar halaman, tipografi dan link, bagian halaman sesuai urutan kemunculan (header, konten, footer), diakhiri utilitas.
   - Praktik yang dihindari: gaya inline di HTML produksi dan `!important` sebagai penyelesai konflik; keduanya membuat kaskade sulit ditelusuri dan membuat perubahan warna berikutnya makin mahal.
   **Skor:** rekomendasi selector 1,5 + pola penamaan dan organisasi 1,5 + alasan berbasis kaskade dan pemeliharaan 1 + praktik yang dihindari 1 = 5.

### Jawaban Praktikum Lab

1. **Langkah solusi:** struktur akhir berisi `promo.html` dengan `<link rel="stylesheet" href="css/style.css">` di `head`, `h1`, `p.promo-lead`, dan `ul.promo-list`; berkas gaya memuat `body { font-family: system-ui, sans-serif; color: #334155; margin: 0; background-color: #F8FAFC; }`, `h1, h2 { color: #1E293B; }`, `.promo-lead { font-weight: 600; }`, serta `.text-center { text-align: center; }`. Tidak ada atribut `style` di HTML.
   **Kriteria penilaian:** tautan eksternal benar dan halaman menerima gaya 40%, penggunaan selector elemen/class/grouping sesuai kebutuhan 30%, kebersihan HTML (tanpa `style` inline) 20%, catatan alasan pemilihan selector 10%.

2. **Langkah solusi:** contek contoh determinan — paragraf yang hanya terkena selector elemen menerima warna elemen; paragraf dengan elemen + class mengikuti aturan (0,1,1); paragraf dengan ID mengikuti aturan (1,0,0); paragraf dengan gaya inline selalu paling kuat. Di panel Styles DevTools, aturan yang kalah tampak dicoret dan aturan pemenang muncul paling atas pada daftar "Styles".
   **Kriteria penilaian:** prediksi ditulis sebelum observasi 20%, perhitungan *specificity* benar 30%, bukti tangkapan layar panel Styles 30%, penjelasan atas perbedaan prediksi vs hasil 20%.

3. **Langkah solusi:** Console menampilkan error gagal memuat stylesheet dengan URL `.../styles/style.css` yang tidak ada; perbaikan pertama adalah mengubah `href` menjadi `css/style.css`. Perbaikan kedua menyeragamkan nama class menjadi `.site-nav`/`class="site-nav"` di kedua berkas. Setelah keduanya dilakukan, warna link dan latar header muncul.
   **Kriteria penilaian:** diagnosis Console/Network yang tepat 30%, perbaikan jalur berkas 25%, perbaikan konsistensi nama class 25%, dokumentasi akar masalah 20%.

4. **Langkah solusi:** nilai berulang dikelompokkan menjadi class berbasis peran seperti `.papan-header`, `.papan-title`, `.papan-content`, `.tugas-list`, dan `.tugas-urgent`; warna `#334155` cukup ditulis sekali di `body` karena diwariskan, sementara `border`/`padding`/`background-color` harus ditulis di elemen yang disasar (misalnya `.papan-header` dan `.tugas-list`). Atribut `style` dihapus seluruhnya setelah class siap.
   **Kriteria penilaian:** seluruh atribut `style` hilang 30%, penamaan class berbasis peran dan kebab-case 25%, penampakan halaman identik sebelum-sesudah 25%, tabel pemetaan nilai inline ke class 20%.

5. **Langkah solusi:** aturan `a:focus { outline: 2px solid #4F46E5; outline-offset: 2px; }` ditambahkan pada berkas gaya dan diuji dengan tombol Tab; versi `outline: none` diperlihatkan sebagai pembanding yang gagal. Kesimpulan: pengguna keyboard tidak melihat posisi fokusnya, sehingga sulit menavigasi halaman.
   **Kriteria penilaian:** aturan `:focus` benar dan terpasang 35%, pengujian dengan Tab terdokumentasi 25%, pembanding `outline: none` beserta analisis risikonya 25%, kesimpulan tertulis 15%.

6. **Langkah solusi:** aturan kunci `.tabel-jadwal tbody tr:nth-child(even) { background-color: #F8FAFC; }`, sel diberi `border: 1px solid #E2E8F0`, butir pertama `.catatan-list li:first-child { font-weight: 600; }`, dan butir terakhir `.catatan-list li:last-child { color: #DC2626; }`. Karena pewarnaan mengikuti posisi baris, menambah atau menghapus satu baris tidak merusak pola.
   **Kriteria penilaian:** penggunaan `:nth-child()` tepat 35%, `:first-child` dan `:last-child` tepat 25%, tampilan tabel terbaca (border dan latar) 20%, paragraf alasan tahan-perubahan 20%.

7. **Langkah solusi:** selector awal bernilai (1,1,2) karena memuat satu ID, satu class, dan dua elemen. Bentuk ringkasnya cukup `.daftar-produk a { color: #4F46E5; text-decoration: none; }` atau `.tautan-produk { ... }` dengan nilai (0,1,1) atau (0,1,0); keduanya menyasar elemen yang sama tanpa mengunci kekhususan tinggi. Hasil di DevTools harus sama secara visual.
   **Kriteria penilaian:** perhitungan *specificity* sebelum-sesudah benar 35%, selector ringkas tetap menyasar elemen yang benar 30%, verifikasi visual di DevTools 20%, penjelasan manfaat pemeliharaan 15%.

8. **Langkah solusi:** `36px → 2.25rem`, `24px → 1.5rem`, `16px → 1rem`, dan `.konten { width: 80%; }` atau `width: 100%; max-width: 960px` bila tetap ingin dibatasi. Pada font dasar 20px, seluruh ukuran `rem` ikut membesar sebanding, sedangkan nilai `px` tidak berubah. Satuan `px` tetap tepat untuk garis tepi, bayangan, dan jarak kecil yang ingin stabil.
   **Kriteria penilaian:** konversi `rem` tepat 35%, lebar berbasis persen 20%, uji pada font dasar 20px terdokumentasi 25%, kesimpulan penggunaan satuan 20%.

9. **Langkah solusi:** urutan akhir berkas: komentar banner kepala, dasar halaman (`body`), tipografi dan link (`h1`–`h3`, `a`, `a:hover`), header dan navigasi (`.site-header`, `.site-nav a`), bagian halaman berurutan (`.hero`, `.hero-title`, `.btn-cta`), footer (`.site-footer`), lalu utilitas (`.text-center`). Penampakan halaman tidak boleh berubah karena *specificity* antaraturan setara dan urutannya tetap umum ke khusus.
   **Kriteria penilaian:** urutan bagian sesuai pola 35%, komentar pemisah konsisten 25%, halaman tampil identik dengan sebelumnya 25%, peta bagian berkas disertakan 15%.

10. **Langkah solusi:** prediksi benar untuk (a) *class* menang atas elemen, (b) elemen + *class* (0,1,1) menang atas *class* tunggal (0,1,0), (c) ID (1,0,0) menang atas dua *class* (0,2,0), dan (d) dua aturan setara membuat aturan terakhir menang. Verifikasi di panel Styles menunjukkan aturan yang kalah dicoret browser.
    **Kriteria penilaian:** tabel prediksi lengkap dengan *specificity* 35%, verifikasi di DevTools 25%, penjelasan setiap prediksi yang meleset 25%, refleksi pemahaman 15%.
