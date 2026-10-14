# Kunci Jawaban & Rubrik — Bab 13: Website Responsif dan Accessibility

> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)
> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)

---

### Kunci Pilihan Ganda

1. **B** — meta viewport membuat lebar halaman mengikuti lebar perangkat sehingga media query dan grid Bootstrap bekerja sesuai rencana; ia tidak mengunci lebar dan tidak memuat CSS.
2. **C** — Tokosaya memilih subset base (di bawah 768 px), md 768 px, dan lg 992 px agar bahasa CSS kustom dan kelas utilitas Bootstrap 5.3 bicara dalam breakpoint yang sama.
3. **D** — `<picture>` mengganti komposisi atau rasio gambar antar kondisi media, sedangkan `srcset` menyediakan variasi resolusi dari konten yang komposisinya sama.
4. **A** — `:focus-visible` menampilkan cincin fokus hanya ketika input keyboard dipakai, sehingga jalur Tab tetap terlihat sementara klik mouse tidak memunculkan cincin.
5. **D** — `sizes` menjelaskan lebar area yang akan ditempati gambar pada kondisi layar berbeda, sehingga browser bisa memilih kandidat `srcset` yang paling pas.
6. **C** — `width` dan `height` membuat browser mencadangkan ruang sejak awal, menjaga rasio aspek, dan mencegah pergeseran layout saat gambar selesai dimuat.
7. **D** — keduanya adalah perlindungan luber: `overflow-wrap` mematahkan kata panjang dan `min-width: 0` membuat anak kontainer flex boleh menyempit, sehingga penggeser horizontal tidak muncul.
8. **A** — `d-none` menyembunyikan elemen pada lebar default (mobile) dan `d-md-block` menampilkannya mulai breakpoint md 768 px ke atas.
9. **C** — abu `#94A3B8` di atas putih jauh di bawah 4,5:1; perbaikan sebaiknya dilakukan di level token (`--clr-body`) lalu diverifikasi memakai color picker DevTools, bukan ditambal per halaman.
10. **B** — nilai tengah `clamp()` membuat ukuran tumbuh mengikuti lebar viewport dan berhenti di batas minimum serta maksimum, sehingga tidak ada loncatan mendadak seperti pada perpindahan media query.
11. **D** — teks di luar field tanpa `<label for>` yang menunjuk `id` input membuat pembaca layar membacakan kolom tanpa nama; pasangan `label` dan `id` adalah perbaikannya.
12. **A** — link ikon tanpa teks terlihat memerlukan nama aksesibel lewat `aria-label` pada link, sedangkan ikon dekoratifnya diberi `aria-hidden="true"` agar tidak dibacakan.
13. **A** — Lighthouse membantu mempercepat kerja, tetapi keputusan seperti urutan heading dalam konteks bisnis dan verifikasi di halaman nyata tetap memerlukan penilaian manusia.
14. **B** — prioritas ditentukan oleh dampak pengguna: informasi inti yang hilang karena `alt` tidak ada membuat layanan tidak terbaca, sedangkan tabel dan kontras menyusul sesuai urutan dampaknya.
15. **B** — pola kerja yang dilatih: uji responsif manual, Lighthouse Accessibility, catat temuan di tabel, perbaiki, lalu jalankan ulang kategori yang sama dan bandingkan; perbaikan satu kategori per putaran menjaga sebab akibat tetap jelas.

### Jawaban Essay

1. **Poin inti:**
   - **Perceivable** (dapat dipersepsi): konten punya alternatif, misalnya `alt` pada gambar produk dan teks untuk konten non-teks;
   - **Operable** (dapat dioperasikan): navigasi dan formulir bisa difungsikan lewat keyboard, misalnya seluruh tautan header dan tombol bisa dijangkau Tab;
   - **Understandable** (dapat dipahami): bahasa jelas, perilaku konsisten, label input tersambung — misalnya setiap input form kontak punya `label for`;
   - **Robust** (teguh): markup benar sehingga dibaca penuh oleh beragam *assistive technology* — misalnya urutan heading dan `lang="id"` pada elemen `html`.
   - Contoh butir masing-masing cukup satu; jawaban yang menyebut level A/AA sebagai target bab ini memperkuat nilai.
   **Skor:** 1 + 1 + 1 + 1 + 1 = 5.

2. **Poin inti:**
   - `srcset` (dipasangkan `sizes`) dipakai saat semua variasi berbagi komposisi yang sama dan hanya lebar/resolusi berkasnya yang berbeda;
   - `<picture>` dipakai saat rasio atau komposisi gambarnya benar-benar berubah, misalnya hero lebar di desktop dan potongan hero yang dibingkai berbeda di HP;
   - pada hero Tokosaya, `<picture>` tepat karena gubahan komposisi berubah antar breakpoint, dengan `source` `min-width: 992px` lebih dulu lalu `576px`, dan `img` sebagai pilihan terakhir;
   - `alt` tetap wajib karena alternatif teks adalah kebutuhan pengguna pembaca layar pada mekanisme apa pun, dan alt ditulis dengan bahasa pengguna, bukan nama berkas.
   **Skor:** 2 + 2 + 1 = 5.

3. **Poin inti:**
   - luber pada 360 px disebabkan kata panjang tanpa spasi di dalam anak kontainer flex yang tidak boleh menyempit (perilaku `min-width` otomatis pada flex item);
   - perbaikannya: `overflow-wrap: break-word` (atau `anywhere` untuk URL) pada judul/teks bermasalah dan `min-width: 0` pada anak langsung kontainer flex, ditambah kebiasaan `img-fluid` pada gambar;
   - ukuran judul hero yang statis menyebabkan masalah kedua: terlalu kecil di HP, berlebihan di layar besar;
   - perbaikannya memakai tipografi cair `clamp(min, ideal, max)`, misalnya `clamp(1.75rem, 4vw + 1rem, 2.75rem)`, dengan `line-height` yang tetap wajar;
   - pengujian dilakukan dari 320 px sampai 1400 px sampai tidak ada penggeser horizontal dan ukuran judul tetap nyaman.
   **Skor:** 1 + 2 + 1 + 2 = 6.

4. **Poin inti:**
   - (a) teks putih di atas badge amber → **Perceivable** (kontras teks tidak memenuhi AA 4,5:1); perbaikannya memakai kelas badge semantik dengan teks gelap di atas latar aksen;
   - (b) input tanpa `label for` → **Understandable** (juga Robust): pembaca layar membacakan kolom tanpa nama; perbaikannya memasangkan `label for` dengan `id` input;
   - (c) ikon keranjang tanpa nama → **Perceivable/Understandable**: tambahkan `aria-label` pada link dan `aria-hidden="true"` pada ikon dekoratif;
   - alasan perbaikan kontras di level token: kontras adalah keputusan sistemik, sehingga memperbaiki pasangan warna di token/styleguide sekaligus menghilangkan temuan serupa di seluruh halaman, dan dokumentasi pasangan yang lolos menjaga kepatuhan di masa depan.
   **Skor:** 1 + 1 + 1 + 3 = 6.

5. **Poin inti:**
   - skor tinggi bukan sertifikat: Lighthouse hanya menandai apa yang bisa dinilai mesin, sedangkan keputusan seperti urutan heading yang janggal pada konteks bisnis, makna alt, dan pengalaman Tab nyata tetap butuh penilaian manusia;
   - pemeriksaan manual yang tetap wajib: uji Tab sepuluh langkah, urutan heading, kejelasan teks link jika dibaca sebagai daftar, pengukuran kontras pada kombinasi baru, dan pengujian di lebar 320–1400 px;
   - urutan audit lima langkah: (1) uji responsif manual per breakpoint; (2) jalankan Lighthouse kategori Accessibility; (3) catat temuan pada tabel daftar periksa; (4) perbaiki di CSS/HTML; (5) jalankan ulang kategori yang sama dan bandingkan "sebelum–sesudah";
   - perbaikan satu kategori per putaran agar sebab akibat tetap jelas, dan hasil audit disalurkan ke daftar temuan berprioritas.
   **Skor:** 2 + 2 + 2 = 6.

### Jawaban Praktikum Lab

1. **Langkah solusi:** aktifkan panel perangkat, uji 360/576/768/992/1200 px pada `index.html` dan `katalog.html`; temuan yang diharapkan: katalog berubah 2 → 3 → 4 kolom tepat pada 768 px dan 992 px, menu menumpuk di bawah 768 px lalu satu baris mulai 768 px, dan tidak ada penggeser horizontal di semua lebar. Tulis temuan ke tabel dan simpulkan bahwa perubahan terjadi pada breakpoint proyek, bukan lebar acak.
   **Kriteria penilaian:** pengujian benar-benar dijalankan pada lima lebar 35%; temuan dicatat spesifik dan akurat 40%; kesimpulan menyebut strategi base–md–lg 25%.

2. **Langkah solusi:** temukan elemen penyebab luber lewat panel Elements; tambahkan `overflow-wrap: break-word` pada judul kartu (misalnya `.produk-card-title`) dan `min-width: 0` pada anak kontainer flex yang bermasalah; penjelasan: anak flex punya `min-width: auto` sehingga menolak menyempit di bawah lebar kontennya, dan `min-width: 0` mengizinkan elemen menyempit agar teks bisa membungkus.
   **Kriteria penilaian:** masalah teridentifikasi tepat 30%; kedua properti dipasang di tempat yang benar 40%; penjelasan perilaku flex 30%.

3. **Langkah solusi:** aturan dasar menuliskan `.site-nav ul { flex-direction: column; align-items: flex-start; }` lalu `@media (min-width: 768px) { .site-nav ul { flex-direction: row; align-items: center; gap: 1.5rem; } }`; komentar menjelaskan 768 px dipilih agar sejajar dengan breakpoint md Bootstrap 5.3 dan kelas `col-md-*` di halaman lain, dan tidak ada lagi `max-width`.
   **Kriteria penilaian:** pola mobile-first benar (dasar kecil, media query menaik) 45%; breakpoint 768 px sejajar Bootstrap 30%; komentar keputusan proyek dan hasil uji dua lebar 25%.

4. **Langkah solusi:** `<a class="skip-link" href="#konten-utama">Lewati ke konten utama</a>` sebagai elemen pertama `body`; CSS `.skip-link { position: absolute; top: -48px; left: 16px; }` dan `.skip-link:focus { top: 0; }`; `<main id="konten-utama" tabindex="-1">` supaya konten bisa menerima fokus setelah lompatan tanpa skrip; aturan `a:focus-visible, button:focus-visible { outline: 3px solid var(--clr-primary-dark); outline-offset: 2px; }`.
   **Kriteria penilaian:** skip link CSS murni berfungsi 40%; `#konten-utama` + `tabindex="-1"` beserta penjelasannya 30%; aturan fokus terlihat dan hasil uji Tab 30%.

5. **Langkah solusi:** ukur dengan color picker — teks putih di atas amber gagal 4,5:1 (perbaikannya memakai teks gelap di atas latar aksen atau warna token berbeda), abu terang di atas putih gagal (ganti ke `--clr-body`), dan `--clr-body` di atas `--clr-surface` lulus. Perbaikan dilakukan pada kelas/token sistem, bukan inline di satu halaman.
   **Kriteria penilaian:** pengukuran tiga kombinasi dengan angka rasio 40%; identifikasi lulus/gagal sesuai ambang 30%; perbaikan di level token + pengujian ulang 30%.

6. **Langkah solusi:** temuan (a) `h1` melompat ke `h4` → ganti `h2`; (b) gambar tanpa `alt` → tambahkan `alt` deskriptif, misalnya "Banner promo akhir tahun Tokosaya dengan potongan harga aksesori"; (c) link "klik di sini" → ganti "Lihat katalog Tokosaya"; (d) input hanya memakai `placeholder` → pasangkan `<label for="email">Email</label>` dengan `id="email"` karena placeholder bukan pengganti label; (e) `<hr>` adalah pembatas dekoratif sehingga elemen dekoratif serupa boleh memakai `alt=""`. Penjelasan: pengguna pembaca layar menelusuri halaman lewat daftar link, sehingga "klik di sini" tidak menyebut tujuan apa pun saat dibaca terpisah dari kalimatnya.
   **Kriteria penilaian:** minimal lima temuan dengan perbaikan tepat 50%; kualitas alt dan teks link 25%; penjelasan daftar link dan alasan `alt=""` 25%.

7. **Langkah solusi:** `<picture><source media="(min-width: 992px)" srcset="img/hero-1200.svg"><source media="(min-width: 576px)" srcset="img/hero-768.svg"><img src="img/hero-480.svg" alt="Susunan keyboard, mouse, dan monitor Tokosaya di meja kerja" width="1200" height="800" class="img-fluid"></picture>`. Urutan penting karena browser memilih `source` pertama yang kondisi medianya cocok; dengan `min-width`, urutan ditulis dari kondisi terlebar ke sempit agar source lebar tidak "menelan" layar kecil. Panel Network menunjukkan hero-480 pada 400 px dan hero-1200 pada 1200 px.
   **Kriteria penilaian:** urutan dan atribut `source` benar 40%; `alt`, `width`/`height`, dan `img-fluid` lengkap 30%; bukti panel Network dan penjelasan urutan 30%.

8. **Langkah solusi:** urutan Tab yang bermasalah berasal dari `tabindex="5"` yang menyimpang dari urutan DOM; hapus tabindex positif (pertahankan hanya `-1` untuk target programatik), ganti teks penanda kolom menjadi `<label for="...">` yang mengarah ke `id` input, dan ganti `<span>` menjadi `<button type="submit">`. Penjelasan: urutan fokus harus mengikuti urutan DOM (atas ke bawah, kiri ke kanan) supaya logis bagi semua pengguna; `tabindex` positif membuat lompatan tak terduga dan sulit dirawat.
   **Kriteria penilaian:** catatan urutan tab sebelum/sesudah 30%; tiga perbaikan benar 45%; penjelasan urutan DOM dan bukti cincin fokus 25%.

9. **Langkah solusi:** jalankan Lighthouse kategori Accessibility, catat skor dan temuan (misalnya kegagalan kontras), perbaiki satu temuan di level token/kelas sistem, jalankan ulang, lalu sajikan tabel perbandingan skor dan daftar temuan yang hilang beserta penyebabnya. Penjelasan: perbaikan satu kategori per putaran menjaga sebab akibat tetap jelas, sehingga perubahan skor benar-benar bisa dikaitkan dengan perubahan kode yang dilakukan.
   **Kriteria penilaian:** laporan Lighthouse sebelum dan sesudah lengkap 40%; perbaikan nyata di kode dan bukan klaim 35%; penjelasan strategi satu kategori per putaran 25%.

10. **Langkah solusi:** pola mobile-first: dasar `.site-nav ul { flex-direction: column; align-items: flex-start; }` (menumpuk) lalu `@media (min-width: 768px) { flex-direction: row; align-items: center; gap: 1.5rem; }`; link diberi padding (misalnya `10px 4px`) sehingga tinggi target sentuh sekitar 44 px terverifikasi di panel Computed; link aktif memakai `aria-current="page"` dan CSS `a[aria-current="page"] { color: var(--clr-primary); border-bottom: 2px solid var(--clr-accent); }`; footer memuat daftar link utama yang sama sebagai pola *footer-nav* agar navigasi tetap dekat jempol di layar kecil.
    **Kriteria penilaian:** pola menumpuk ke horizontal benar dan CSS murni 35%; target sentuh ±44 px terbukti 25%; `aria-current` beserta gaya CSS-nya 20%; pola footer-nav beserta alasannya 20%.
