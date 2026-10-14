# Kunci Jawaban & Rubrik — Bab 12: UI/UX dan Design System

> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)
> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)

---

### Kunci Pilihan Ganda

1. **B** — design token adalah variabel bernama yang menyimpan nilai visual (warna, jarak, lengkung, bayangan); komponen dan styleguide adalah lapisan lain dalam design system.
2. **C** — sistem tipografi Tokosaya memberi Poppins untuk semua jenjang judul dan Inter untuk teks paragraf, karena peran berbeda menuntut suara huruf yang berbeda.
3. **D** — justru sebaliknya: varian baru wajib lahir bersama dokumentasinya di styleguide pada hari yang sama; varian tanpa dokumentasi adalah pelanggaran disiplin sistem.
4. **D** — hukum kedekatan (proximity) menjelaskan elemen berdempel dibaca satu kelompok, dan hukum kemiripan (similarity) menjelaskan elemen serupa dibaca serumpun.
5. **A** — kelas `badge-limited` mengonsumsi `--clr-danger` dengan teks putih, dan mapping baku Tokosaya memakai merah untuk badge "Stok Terbatas".
6. **A** — pada tabel 12.6, 24 piksel dipetakan ke `gap-4`/`p-4`/`m-4` (1,5 rem), tepat untuk jarak antarkartu dalam satu grid.
7. **B** — `rgba(245, 158, 11, 0.12)` adalah tint dari token `--clr-accent` (nilai heksanya setara), sehingga latar tipis didapat tanpa menambah warna baru ke sistem.
8. **A** — pola Bootstrap adalah kelas dasar + kelas varian: `btn` menyediakan kerangka (padding, bentuk, transisi), sedangkan `btn-utama` menyediakan warna dari token.
9. **D** — repetition: pengulangan wujud yang serupa pada delapan kartu membuat pola cepat terbentuk dan pengguna cukup belajar sekali.
10. **B** — warna `--clr-border` membuat ikon tampak lembut sehingga tidak berebut perhatian dengan judul; hierarki kartu tetap satu tumpuan pada judul dan harga.
11. **C** — kartu dibedakan lewat isi (badge status), bukan lewat wujud, sehingga bagian tetapnya tetap sama dan katalog tetap bisa dipindai seperti rak yang tersusun rapi.
12. **D** — variabel internal Bootstrap `--bs-btn-focus-shadow-rgb` diisi nilai RGB indigo supaya lingkar fokus keyboard tetap konsisten dengan brand, bukan biru bawaan Bootstrap.
13. **C** — aturan design system: varian baru ditambahkan ke `css/style.css` dan langsung didokumentasikan di styleguide pada hari yang sama, tidak ada varian yang berjalan lebih dulu daripada dokumentasinya.
14. **B** — warna sukses semantiknya untuk pesan sukses, dan 4 piksel melanggar token `--radius` (12 piksel); usulan varian harus melalui matriks varian dan dokumentasi, bukan dipasang langsung.
15. **C** — diagnosis memakai kacamata bab ini: periksa prinsip (hierarki, konsistensi, usability, affordance) lalu sebut alat visual yang bermasalah, bukan memilih warna baru atau menghapus aturan.

### Jawaban Essay

1. **Poin inti:**
   - memberi napas supaya mata tidak sesak saat membaca;
   - menandai batas kelompok sesuai hukum kedekatan (jarak kecil di dalam kelompok, jarak besar antarkelompok);
   - memberi fokus pada elemen yang tersisa sehingga hierarki terbaca.
   - Contoh Tokosaya: padding kartu produk 16–24 piksel dan jarak antar bagian 8–16 piksel membuat badge, judul, deskripsi, harga, dan tombol aksi terbaca sebagai satu kelompok yang rapi.
   **Skor:** 1 + 2 + 1 + 2 = 6 (poin minimum 5, bonus 1 untuk contoh yang menyebut angka skala dengan tepat).

2. **Poin inti:**
   - warna primitif hanya menyebut nilai tanpa konteks atau peran (misalnya "indigo 600");
   - warna semantik menamai peran pemakaiannya (misalnya `--clr-danger` untuk pesan bahaya);
   - peran lebih stabil daripada nilai: merek boleh berganti warna, tetapi makna "bahaya" tidak berubah, sehingga semua pemakai token ikut menyesuaikan lewat `var()`;
   - contoh: `--clr-primary` (`#4F46E5`) untuk tombol utama dan link; `--clr-success` (`#16A34A`) untuk pesan sukses dan badge "Tersedia".
   **Skor:** 2 + 2 + 1 = 5.

3. **Poin inti:**
   - token dideklarasikan sekali di `:root` dan hanya dikonsumsi lewat `var()`, sehingga nilai visual hidup di satu tempat (satu sumber kebenaran);
   - ketika nilai `--clr-primary` diganti, semua aturan yang memanggil `var(--clr-primary)` mengikuti nilai terbaru seketika: `.btn-utama`, `--bs-btn-focus-shadow-rgb` untuk lingkar fokus, badge `badge-baru`, latar ikon alert, sampai kelas swatch di styleguide;
   - akibatnya perubahan identitas visual cukup satu perubahan, bukan penelusuran semua halaman;
   - sifat ini memanfaatkan kaskade CSS: yang perlu diganti hanyalah nilai di blok token.
   **Skor:** 2 + 2 + 1 = 5.

4. **Poin inti:**
   - tombol jingga bersudut 4 piksel: lengkung melanggar token `--radius` (12 piksel) dan warna jingga di luar token yang ada;
   - jarak 13 piksel: melanggar skala 8 piksel, karena jarak hanya boleh berhenti di 8/16/24/32/48/64;
   - nilai heksa `#4F46E5` langsung di stylesheet: melanggar disiplin token, sehingga perubahan warna merek nanti tidak ikut memengaruhi halaman ini;
   - urutan perbaikan: (1) ganti nilai heksa menjadi `var(--clr-primary)`; (2) kembalikan lengkung ke `var(--radius)`; (3) ganti jarak 13 piksel ke nilai skala terdekat (16 atau 24 piksel) memakai utilitas Bootstrap yang sejajar; (4) bila varian tombol memang dibutuhkan, usulkan lewat matriks varian dan dokumentasikan di styleguide pada hari yang sama.
   **Skor:** 1 + 1 + 1 + 3 = 6.

5. **Poin inti:**
   - aturan *don't* pada bab ini tegas: jangan membuat warna pembeda kedua yang mirip (merah bata, merah oranye, merah tua) — pilih satu merah, yaitu `--clr-danger`;
   - menambah "merah promo" akan mengkhianati prinsip peran lebih stabil daripada nilai dan memecah kepercayaan pengguna, sebab pengguna belajar makna merah sekali;
   - alternatif yang sah: pakai `--clr-danger` langsung, atau bila hanya butuh latar tipis, gunakan tint `rgba()` dari token yang ada (misalnya `rgba(220, 38, 38, 0.10)` seperti alert bahaya) tanpa menambah nilai baru;
   - bila kebutuhannya benar-benar peran baru (bukan sekadar nuansa merah), peran itu harus dinamai, didokumentasikan di styleguide, dan disetujui sebagai bagian sistem — bukan ditempel sebagai warna ad hoc.
   **Skor:** 2 + 1 + 2 + 1 = 6.

### Jawaban Praktikum Lab

1. **Langkah solusi:** buat `<section id="warna" class="mb-5">` dengan `<h2>` bernomor dan `<p>` pengantar; setiap swatch ditulis sebagai `<div class="swatch">` berisi `<div class="swatch-blok warna-primary"></div>` dan `<p class="swatch-nama mb-0">clr-primary<br><small>#4F46E5</small></p>`; keempat token diulang dengan kelas `warna-accent`, `warna-success`, `warna-danger`; grid memakai `row row-cols-2 row-cols-md-4 g-3` sehingga jeda mengikuti utilitas pada skala jarak.
   **Kriteria penilaian:** kelas token dipakai benar (`swatch`, `swatch-blok`, `warna-*`) 40%; nama dan nilai heksa tampil lengkap dan hanya sebagai label 30%; grid rapi, sejajar, dan jaraknya dari skala 8 piksel 30%.

2. **Langkah solusi:** tulis empat badge dataset — `badge-terjual` "Best Seller", `badge-tersedia` "Tersedia", `badge-limited` "Stok Terbatas", `badge-baru` "Baru" — plus satu `badge-netral`; badge aksen diberi teks gelap (`--clr-dark`) karena latar amber terang tidak cukup kontras untuk teks putih.
   **Kriteria penilaian:** pemetaan kelas-token-benar 50%; tabel dokumentasi (badge, token, makna) 30%; penjelasan kontras badge aksen 20%.

3. **Langkah solusi:** dua `<div class="alert alert-toko alert-sukses d-flex align-items-center gap-2" role="alert">` dan varian `alert-bahaya`; ikon misalnya `bi bi-check-circle-fill` dan `bi bi-x-circle-fill` dengan `aria-hidden="true"`; penjelasan: `rgba()` adalah tint dari token warna yang sudah ada, jadi latar tipis didapat tanpa menambah warna baru dan kemiripan dengan warna asal tetap terjaga.
   **Kriteria penilaian:** struktur alert dan `role="alert"` 40%; ikon dekoratif `aria-hidden` dan struktur flex `gap` sesuai skala 30%; penjelasan tint 30%.

4. **Langkah solusi:** kode yang benar adalah `<button type="button" class="btn btn-utama btn-lg">` dan `<button type="button" class="btn btn-outline-toko">`; penyebabnya kelas dasar `btn` tidak dipasang sehingga kerangka Bootstrap (padding, bentuk, transisi) tidak ikut terpasang. Penjelasan pola dua lapis: `btn` menyediakan bentuk, kelas kustom menyediakan warna dari token; melanggar pola ini membuat komponen tampil "telanjang" dan tidak lagi sesuai styleguide.
   **Kriteria penilaian:** diagnosis tepat 40%; perbaikan markup benar untuk kedua tombol 40%; penjelasan pola dua lapis 20%.

5. **Langkah solusi:** urutan harus CSS Bootstrap 5.3.3 dan Bootstrap Icons lebih dulu, lalu Google Fonts, lalu `css/style.css` paling bawah; sebab dengan spesifisitas setara, aturan yang dimuat paling akhir menang sehingga aturan kustom menimpa nilai baku Bootstrap. Bukti dari panel Network/Styles (garis yang menang diberi tanda, bukan dicoret).
   **Kriteria penilaian:** pelacakan urutan link dengan bukti DevTools 40%; perbaikan urutan benar 40%; penjelasan kaskade 20%.

6. **Langkah solusi:** hasil refactor `background-color: var(--clr-primary); border-color: var(--clr-primary); color: #FFFFFF; border-radius: var(--radius);`. Radius 4 piksel melanggar token `--radius` 12 piksel; bila nilai mentah dibiarkan, perubahan `--clr-primary` tidak ikut memengaruhi tombol ini sehingga identitas visual pecah.
   **Kriteria penilaian:** semua properti memakai token yang tepat 50%; tabel perubahan lengkap 30%; penjelasan dampak nilai mentah 20%.

7. **Langkah solusi:** panel Styles harus menunjukkan `border-radius: var(--radius)`, `box-shadow: var(--shadow-card)`, dan `background-color: var(--clr-surface)`; jarak antarkartu pada grid `g-4` 24 piksel dan jarak dalam kartu mengikuti `gap-2`/padding 16–24 piksel. Kesimpulan: komponen mengonsumsi token dan patuh pada skala 8 piksel.
   **Kriteria penilaian:** ketiga nilai computed dicatat benar 40%; pengukuran jarak sesuai skala 30%; kesimpulan memakai istilah bab (token, spacing system) 30%.

8. **Langkah solusi:** temuan (a) dua `h1` pada satu halaman → sisakan satu; (b) lompatan `h1` ke `h4` → ganti menjadi `h2` (dan kelas visual Bootstrap buat mengatur ukuran); (c) `<label>` tanpa `for` dan input tanpa `id` → hubungkan `for="pengelola"` dan `id="pengelola"`; (d) ikon dekoratif tanpa `aria-hidden` → tambahkan `aria-hidden="true"`; (e) nilai warna mentah sebagai gaya inline → ganti ke kelas `warna-primary` dari token. Bahaya dokumentasi cacat: anggota tim menyalin pola yang salah ke halaman produksi, sehingga kesalahan menyebar.
   **Kriteria penilaian:** minimal empat temuan benar 50%; perbaikan sintaks tepat 30%; kalimat penjelasan bahaya dokumentasi cacat 20%.

9. **Langkah solusi:** daftar berisi `<li class="d-flex align-items-center gap-3 mb-2"><span class="sp-bar sp-8"></span><span class="sp-label">8px - jarak ikon-teks</span></li>` dan seterusnya untuk 16 (label-input), 24 (antar kartu), 32 (antar kelompok form), 48 (antar section), 64 (header/footer). Komentar CSS menjelaskan basis 8 piksel dipilih supaya keputusan jarak tinggal memilih dari enam nilai dan dua anggota tim tetap menghasilkan hasil serasi.
   **Kriteria penilaian:** enam bar dengan kelas lebar benar 40%; label nilai dan pemakaian tepat 30%; tidak ada nilai di luar skala + komentar alasan 30%.

10. **Langkah solusi:** tiga tombol pertama sah bila strukturnya mengikuti matriks varian (normal, hover, fokus keyboard, nonaktif) dan memakai kelas dasar `btn` + kelas varian; tombol "Diskon 10%" melanggar karena latar `--clr-success` memakai warna semantik di luar perannya dan sudut 4 piksel melanggar `--radius`; langkah perbaikan: kembalikan lengkung ke `var(--radius)`, ganti latar ke `--clr-primary` (aksi penting) atau buat usulan varian resmi lengkap dengan status fokus, lalu tambahkan ke styleguide. Catatan *do and don't* dituliskan untuk tiap temuan.
   **Kriteria penilaian:** tabel audit lengkap dengan rujukan aturan 40%; kode perbaikan memakai token 35%; catatan do and don't spesifik dan bukan penilaian selera 25%.
