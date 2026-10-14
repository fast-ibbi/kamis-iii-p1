# Kunci Jawaban & Rubrik — Bab 15: Final Project dan Quality Assurance

> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)
> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)

---

### Kunci Pilihan Ganda

1. **C** — Konvensi proyek memakai kebab-case huruf kecil tanpa spasi, dan nama gambar memuat kategori produk beserta kode produknya.
2. **A** — Pemindai lima titik dijalankan dengan urutan stabil: navigasi, hero, grid kartu, form, lalu footer pada setiap sel test matrix.
3. **B** — Langkah reproduksi memakai instruksi ringkas sehingga siapa pun yang bukan penemunya bisa mengulang gejala; bila langkahnya tidak bisa diikuti, temuan dianggap tidak valid.
4. **D** — Fieldset dan legend mengelompokkan kategori pesan sekaligus memberi judul kelompoknya, sehingga pembaca layar memahami konteks pilihannya.
5. **C** — `d-none` menyembunyikan blok pada layar kecil dan `d-md-block` menampilkannya kembali pada breakpoint md ke atas.
6. **A** — Tabel praktik terbaik subbab 15.4 menyebut `mb-3` sebagai contoh utilitas jarak; `mt-3`, `mx-3`, dan `p-3` mengatur sisi lain.
7. **B** — Radius yang tidak sesuai styleguide adalah kesalahan kecil yang tidak menghalangi penggunaan, sehingga masuk kategori Minor.
8. **D** — Urutan metode empat langkah adalah reproduksi, isolasi, hipotesis tunggal, lalu verifikasi; langkah pertama selalu mereproduksi temuan dengan bukti tangkapan layar.
9. **A** — Halaman Tokosaya mencantumkan komentar tersebut di `head` sebagai penanda bahwa tidak ada bundle JavaScript yang disertakan.
10. **C** — Satu tag yang tidak ditutup memicu kesimpulan berantai, jadi kesalahan teratas diperbaiki lebih dulu lalu validasi diulang sebelum lanjut.
11. **B** — Gambar dekoratif memakai `alt=""` yang sengaja dikosongkan agar tidak dibacakan sebagai konten; `alt="gambar"` justru menambah kebisingan bagi pembaca layar.
12. **D** — Perbedaan render lintas-browser dicatat sebagai temuan pengujian, bukan diabaikan dan bukan diselesaikan dengan mengganti framework.
13. **A** — Alat hanya membantu kriteria terukur, sedangkan makna dan urutan hanya bisa dinilai manusia lewat pengujian tab; skor tinggi bukan sertifikasi.
14. **C** — Seluruh item Wajib harus berstatus lulus sebelum proyek boleh dikunci sebagai rilis kandidat, sehingga temuan Kritis wajib diperbaiki dan diverifikasi lebih dulu.
15. **B** — Struktur demo yang terbukti menuntut perpindahan tiga breakpoint dengan dua form dan satu katalog, disertai cadangan tangkapan layar bila perangkat bermasalah.

### Jawaban Essay

1. **Poin inti:**
   - Alasan pemetaan: setiap bagian anatomi punya risiko khas dan fokus QA yang berbeda, sehingga tanpa peta pemeriksaan berubah menjadi petualangan; penyisiran menjadi terjadwal, setara, dan bisa dibuktikan.
   - Empat bagian pilihan beserta fokus QA-nya, misalnya: homepage (judul hero lengkap, tombol "Lihat Katalog" berfungsi, tanpa gulir horizontal); navigasi (empat menu baku aktif, tidak ada link mati); kartu/komponen (delapan produk baku tampil, badge semantik benar); form (label terhubung `for`–`id`, `autocomplete` terisi, pesan peringatan bermakna).
   - Boleh memilih bagian lain seperti hero (tagline konsisten, kontras WCAG), footer (kontak Tokosaya konsisten), layout responsif (test matrix 576/768/992), atau design system (token, font, radius mengacu styleguide).
   **Skor:** alasan pemetaan 2 + empat bagian dengan fokus QA benar masing-masing 0,75 = 5.

2. **Poin inti:**
   - Dampak 1: nama berkas dengan spasi dan huruf kapital membuat link bisa hidup secara lokal tetapi mati di hosting karena sistem berkas atau server memperlakukan `Produk Baru.html` berbeda dari `produk-baru.html`.
   - Dampak 2: folder berantakan dan dua berkas gaya yang saling menimpa membuat peer review lambat serta menyisakan blind spot saat pencarian cacat.
   - Dampak 3: nama gambar tanpa kategori dan kode produk (`photo3.svg`) menyulitkan pelacakan aset, dan kelas seperti `.merah` atau `.fix2` tidak mendeskripsikan peran sehingga pemeliharaan berikutnya rawan salah sasaran.
   - Usulan perbaikan: kebab-case huruf kecil tanpa karakter khusus, pola `blok-elemen`, satu berkas `css/style.css`, gambar memuat kategori dan kode produk seperti `produk-keyboard-kx210.svg`.
   **Skor:** tiga dampak benar masing-masing 1 = 3 + usulan konvensi 2 = 5.

3. **Poin inti:**
   - Kelemahan: skor alat hanya mengukur kriteria teknis terukur; ia tidak menilai makna, urutan tab, dan pengalaman pengguna, dan skor tinggi bukan sertifikasi kualitas.
   - Pemeriksaan 1: teks alternatif — setiap `img` produk memakai `alt` yang menjelaskan konten dan tujuan, gambar dekoratif memakai `alt=""`.
   - Pemeriksaan 2: kontras — teks utama minimal 4,5 : 1 terhadap latarnya, diverifikasi dengan pembaca warna DevTools atau pemeriksa kontras.
   - Pemeriksaan 3: struktur heading — satu `h1` per halaman tanpa lompatan level.
   - Pemeriksaan 4: form — label terhubung ke input, pesan status bermakna, urutan tab logis diuji tanpa mouse.
   - Pemeriksaan 5: keyboard dan fokus — skip link bekerja, indikator fokus terlihat, tidak ada elemen yang terkunci dari navigasi keyboard.
   - Kesimpulan: kombinasi alat untuk kriteria terukur dan pengujian manual untuk pengalaman.
   **Skor:** evaluasi kelemahan 1 + kelima pemeriksaan lengkap dengan cara uji masing-masing 0,7 + kesimpulan 0,5 = 5.

4. **Poin inti:**
   - Versi CDN terkunci (Bootstrap 5.3.3 dan Bootstrap Icons 1.11.3) mencegah regression spektakuler; mengganti versi framework menjelang rilis dapat mengubah utilitas, radius, dan gaya bawaan secara tak terduga.
   - Penamaan gambar memuat kategori dan kode produk serta memakai kebab-case; nama yang memuat spasi atau huruf kapital menjadi sumber link mati paling umum karena beda perlakuan sistem berkas dan server.
   - Kaitan dengan QA: item checklist yang diukur menghilangkan keputusan berbasis suasana hati, sehingga kesiapan rilis terdokumentasi dan bisa diperiksa penguji.
   - Kaitan dengan pengalaman pengguna: gambar yang dimensinya wajar dan formatnya tetap menjaga performa serta mencegah tampilan rusak pada layout responsif.
   **Skor:** alasan versi terkunci 1,5 + alasan penamaan/format gambar 1,5 + kaitan regression 1 + kaitan link mati 1 = 5.

5. **Poin inti:**
   - Penilaian: lima perubahan sekaligus melanggar semangat metode empat langkah (reproduksi, isolasi, hipotesis tunggal, verifikasi) karena penyebab dan akibatnya bercampur, sehingga sulit diketahui perubahan mana yang memecah halaman lain.
   - Konsekuensi: muncul regression, yaitu cacat yang muncul kembali di area yang sebelumnya sehat; bila tumpukan perubahan dibiarkan, biaya debugging berikutnya makin besar.
   - Protokol usulan: perbaiki satu temuan pada satu elemen terkecil, terapkan satu perubahan, verifikasi dengan muat ulang, lalu jalankan penyapuan cepat seluruh navigasi dan satu halaman katalog.
   - Tambahan: batasi selektor kustom dengan kelas induk (pola blok-elemen), catat hasil verifikasi pada laporan temuan, dan baru ubah status temuan menjadi "Diperbaiki" setelah verifikasi ulang.
   - Penutup: setiap perubahan kaskade wajib disertai uji regresi, dan perubahan berikutnya menunggu putaran sebelumnya selesai.
   **Skor:** penilaian terhadap praktik 1,5 + penjelasan konsekuensi/regression 1 + protokol langkah demi langkah 2 + kebijakan penutupan status temuan 0,5 = 5.

### Jawaban Praktikum Lab

1. **Langkah solusi:** Buka validator W3C, unggah atau tempel berkas halaman. Catat senarai kesalahan dan peringatan. Perbaiki kesalahan teratas — sering berupa tag yang tidak ditutup (misalnya `div` atau `ul`) yang memicu kesimpulan berantai di baris setelahnya — lalu validasi ulang untuk melihat senarai menyusut. Temuan dicatat dengan gejala (jumlah kesalahan), langkah reproduksi (validasi berkas pada validator), dan status (diperbaiki).
   **Kriteria penilaian:** Bukti validasi awal 25%, ketepatan identifikasi akar kesalahan 30%, penurunan jumlah kesalahan setelah perbaikan 25%, kualitas baris temuan (langkah reproduksi jelas) 20%.

2. **Langkah solusi:** Struktur hasil perbaikan mengikuti pola proyek: HTML datar di akar (`produk-baru.html`, `katalog.html`), satu `css/style.css`, dan `img/` berisi gambar bernama deskriptif (`produk-keyboard-kx210.svg`). Tabel penggantian memuat: `Produk Baru.html` → `produk-baru.html` (huruf kapital dan spasi berisiko beda perlakuan sistem berkas), `gambar/` → `img/` (menyamakan konvensi proyek), `photo3.svg` → `produk-keyboard-kx210.svg` (memuat kategori dan kode produk), `style v2.css` + `style.css` → satu `css/style.css` (menghindari gaya saling menimpa). Risiko yang dijelaskan: link hidup secara lokal tetapi mati di hosting, dan gaya tercecer yang membuat reviewer sulit melacak aturan.
   **Kriteria penilaian:** Struktur akhir sesuai konvensi 30%, tabel penggantian nama lengkap dan beralasan 30%, dua risiko teknis dijelaskan benar 25%, aturan penamaan gambar dengan contoh tepat 15%.

3. **Langkah solusi:** Tiga cacat: (1) tiga aturan menyasar selektor yang sama dan ditaruh terpisah sehingga kaskade "menang" tanpa kaitan dengan maksud; (2) `!important` beserta selektor bertingkat `div .site-nav a` memaksa kemenangan dan menghambat refactor berikutnya; (3) nilai acak yang di luar token dan skala rem (`#4F46E5`, radius 9 px, font-weight 700 pada link). Hasil refactor berupa satu aturan per maksud, misalnya `/* kustom — link navigasi utama; warna dari token */` dengan `.site-link { color: var(--clr-primary); font-size: 15px; text-decoration: none; }` dan aturan terpisah untuk keadaan aktif, tanpa `!important` dan tanpa selector bertingkat.
   **Kriteria penilaian:** Identifikasi tiga cacat dan urutan prioritas 30%, hasil refactor satu aturan per maksud dan bertoken 35%, tanpa `!important` serta tanpa nilai liar 20%, komentar pengenal dan bukti render tidak berubah 15%.

4. **Langkah solusi:** Panel Styles menunjukkan aturan yang menang; aturan `.produk-card .card-title` punya bobot (specificity) lebih tinggi daripada `.card-title` dan juga muncul belakangan, sehingga nilai `font-size: 1.25rem` dan `color: var(--clr-dark)` yang dipakai. Panel Computed memverifikasi nilai akhir tersebut. Perbaikan: hapus aturan `.card-title` yang tidak lagi diperlukan atau persempit penggunaannya, lalu muat ulang. Uji regresi mini dilakukan pada satu halaman lain yang memakai komponen kartu serupa untuk memastikan tidak ada komponen yang ikut berubah.
   **Kriteria penilaian:** Ketepatan membaca panel Styles (pemenang dan alasannya) 30%, verifikasi nilai di panel Computed 25%, satu perubahan yang tepat dan minimal 25%, catatan uji regresi 20%.

5. **Langkah solusi:** Reproduksi gejala pada device toolbar 360 px, lalu periksa elemen satu per satu memakai diagram kotak untuk mencari lebar yang melewati viewport — kandidat umum: gambar tanpa `img-fluid`, padding tetap yang terlalu lebar, atau baris tanpa `g-4`. Perbaiki penyebab (misalnya tambahkan `img-fluid` atau kurangi padding), lalu konfirmasi gulir horizontal hilang dengan tangkapan layar setelah perbaikan. Temuan ditulis dengan gejala, langkah reproduksi (buka katalog pada 360 px, amati baris produk teratas), severitas Kritis, dan status.
   **Kriteria penilaian:** Reproduksi gejala dengan bukti 20%, ketepatan menemukan elemen penyebab lewat box model 30%, perbaikan yang benar dan tidak menimbulkan efek samping 30%, baris temuan lengkap dengan severitas tepat 20%.

6. **Langkah solusi:** Telusuri halaman hanya dengan Tab dan Enter: periksa urutan fokus dari navbar, katalog, sampai tombol kirim form, lalu tandai tempat fokus yang melompat tak logis atau hilang. Periksa indikator fokus pada link nav, tombol utama, dan bidang form; perbaikan dilakukan dengan `:focus-visible` (misalnya outline tebal berwarna aksen dengan jeda 2 px). Dua temuan ditulis dalam format tabel berisi ID, halaman, temuan, langkah reproduksi, severitas, dan status; satu temuan langsung diperbaiki dan diverifikasi ulang.
   **Kriteria penilaian:** Kelengkapan penelusuran keyboard 25%, ketepatan identifikasi masalah fokus/urutan tab 30%, kualitas dua baris temuan dan severitas 25%, perbaikan `:focus-visible` beserta verifikasi 20%.

7. **Langkah solusi:** Panel aksesibilitas DevTools menampilkan nama dan peran elemen. Gambar produk dengan `alt="gambar"` memunculkan nama yang tidak bermakna sehingga diperbaiki menjadi `alt` deskriptif; judul section yang melompat dari `h1` ke `h3` diperbaiki menjadi `h2`; bidang input yang labelnya tidak terhubung memunculkan nama kosong sehingga ditambahkan pasangan `for`–`id`. Setelah perbaikan, panel yang sama diperiksa ulang untuk memastikan peran dan namanya sudah benar.
   **Kriteria penilaian:** Pembacaan nama dan peran pada panel aksesibilitas 30%, ketepatan tiga perbaikan 35%, verifikasi ulang lewat panel yang sama 20%, kelengkapan tabel sebelum-sesudah 15%.

8. **Langkah solusi:** Halaman laporan dibangun dengan utilitas Bootstrap (`table table-striped table-hover align-middle`, `caption`, badge semantik) dan satu `h1`; tidak ada CSS kustom maupun berkas skrip. Kepala tabel memakai `th scope="col"` untuk enam kolom, baris data memakai `th scope="row"` pada kolom ID, dan `caption` menjelaskan aturan severitas. Tiga baris contoh mewakili Kritis (link menuju halaman mati), Mayor (kontras teks kurang), dan Minor (radius kartu 8 px dari styleguide 12 px) dengan badge `text-bg-danger`, `text-bg-warning`, dan `text-bg-info`.
   **Kriteria penilaian:** Struktur tabel dan atribut semantik (`caption`, `scope`) 35%, kelengkapan enam kolom 25%, ketepatan badge severitas 20%, halaman tanpa CSS kustom dan skrip serta responsif di 992 px 20%.

9. **Langkah solusi:** Tiga cacat yang diharapkan: (1) `img` tanpa atribut `alt`, diperbaiki dengan `alt` deskriptif seperti "Speaker Bluetooth BT-5 kotak kecil di atas meja" dan severitas Mayor; (2) teks tautan "Klik di sini" tidak bermakna, diganti misalnya "Lihat detail Speaker Bluetooth BT-5"; (3) `href="#"` adalah link mati yang menghalangi penggunaan, sehingga severitas Kritis dan diarahkan ke `produk.html`. Cacat tambahan yang dapat diterima: `row` tanpa `g-4` dan `h5` yang berpotensi melompat level heading. Prioritas diurutkan dari Kritis (link mati) ke Minor, tiap baris dilengkapi langkah reproduksi, dan penutup review bernada netral, misalnya "Tiga temuan di atas dapat ditindaklanjuti tanpa mengubah struktur halaman."
   **Kriteria penilaian:** Minimal tiga cacat tepat dengan aspeknya 30%, kelengkapan kolom tabel temuan 25%, ketepatan severitas dan prioritas 25%, nada penutup yang faktual dan netral 20%.

10. **Langkah solusi:** Kelima item wajib diperiksa satu per satu: klik seluruh link nav dan footer, bandingkan tagline/navigasi/kontak di semua halaman, periksa delapan produk katalog (nama, kategori, format harga `Rp650.000`, badge), verifikasi meta `charset`/`viewport`/`title` deskriptif di setiap halaman, dan jalankan device toolbar pada 360/768/992 px untuk memastikan tidak ada gulir horizontal. Paket diberi label `tokosaya-bootstrap-v1.0.0-rc1.zip`. `catatan-perubahan.md` memuat versi, daftar perubahan, status temuan (misalnya F-01 dan F-02 diperbaiki, F-03 terbuka dengan alasan dan rencana penanganan), serta satu paragraf kesimpulan kesiapan rilis.
    **Kriteria penilaian:** Hasil verifikasi lima item wajib lengkap 35%, label paket dan arsip benar 20%, isi catatan perubahan lengkap (versi, perubahan, status temuan) 25%, kejujuran dan kejelasan temuan yang dibiarkan terbuka 20%.
