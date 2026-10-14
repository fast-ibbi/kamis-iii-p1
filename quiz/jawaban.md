# Kunci Jawaban & Rubrik — Bank Soal Frontend Development & Web Design

> **Mata kuliah:** Frontend Development & Web Design · Semester III
> **Prodi:** Sistem Informasi / Teknik Informatika
> **Isi:** kunci + pembahasan pilihan ganda (210), poin jawaban + bobot skor essay (70),
> langkah solusi + kriteria penilaian praktikum lab (140)
> **Versi per bab:** `bab-NN/jawaban.md` · **File soal:** `soal-pilihan-ganda.md` · `soal-essay.md` · `soal-praktikum-lab.md`


**Daftar Bab:** Bab 01 · Bab 02 · Bab 03 · Bab 04 · Bab 05 · Bab 06 · Bab 07 · Bab 09 · Bab 10 · Bab 11 · Bab 12 · Bab 13 · Bab 14 · Bab 15


## Bab 01 — Pengantar Frontend Development dan Web Design

### Kunci Pilihan Ganda

1. **B** — frontend adalah bagian website yang dilihat, dibaca, dan diklik pengunjung; backend, hosting, dan deployment bukan istilah untuk bagian halaman yang tampil di browser.
2. **D** — UI adalah elemen antarmuka yang langsung dilihat dan digunakan, sedangkan UX adalah pengalaman menyeluruh saat memakainya. Opsi A membalik keduanya, sedangkan B dan C salah memetakan istilah.
3. **A** — HTML menyusun struktur konten, CSS menata rupa dan layout. Opsi lain menukar peran keduanya atau mencampurnya dengan pekerjaan backend.
4. **C** — alur konseptualnya: dokumen HTML diterima, pohon dokumen (DOM) disusun, gaya CSS diterapkan, lalu halaman ditampilkan.
5. **B** — pelayan mengantar pesanan (permintaan) ke dapur dan membawa hasilnya kembali, persis aliran permintaan–respons antara frontend dan backend. Dapur sendiri mewakili backend, bukan pelayannya.
6. **D** — proyek memakai satu file CSS bersama agar gaya konsisten dan perbaikannya cukup di satu tempat; nama file memakai huruf kecil dan tanda hubung (kebab-case). Opsi lain melanggar alasan `index.html`, konvensi huruf kecil, atau pembagian aset.
7. **A** — hosting menyimpan file website di server agar dapat diakses lewat internet; domain adalah alamatnya, sedangkan deployment adalah proses memindahkan file ke server dan menghubungkannya ke domain.
8. **C** — SVG menyimpan gambar sebagai bentuk sehingga tetap tajam saat ukuran diubah dan cocok untuk logo, ikon, serta ilustrasi sederhana; foto lebih lazim memakai JPEG/PNG.
9. **B** — device toolbar menyimulasikan berbagai lebar layar; panel Elements dipakai membaca pohon tag, sedangkan F12 hanya pintasan membuka DevTools.
10. **D** — `<meta charset="utf-8">` memastikan karakter khusus seperti "—" tampil benar, dan file juga harus disimpan dengan pengodean UTF-8. Mengganti karakternya hanya menutupi gejala.
11. **A** — hierarki heading tidak boleh melompat, jadi judul produk di bawah `h2` harus memakai `h3`. Menambah/mengubah level lain justru melanggar konvensi satu `h1` dan urutan heading.
12. **C** — link relatif hanya menemukan target bila file tujuan ada di folder yang sama dengan nama yang persis; browser tidak memerlukan JavaScript untuk link antarhalaman.
13. **B** — alur *design → code* menerjemahkan rancangan menjadi struktur HTML lebih dulu, lalu menata warna dan bentuknya dengan CSS. Menebak tanpa rancangan atau mengandalkan framework sebelum dasar dikuasai tidak sesuai alur bab ini.
14. **C** — bab menyarankan dua pemeriksaan awal saat laporan tampilan masuk: apakah elemennya masih ada di struktur (panel Elements) dan berapa lebar layar yang digunakan (device toolbar).
15. **A** — struktur yang sesuai konvensi: satu folder utama, satu CSS bersama di subfolder `css/`, aset terkelompok di `img/`, dan nama file kebab-case. Opsi lain melanggar aturan huruf kecil/spasi, ekstensi file, atau pemisahan berkas per halaman.

### Jawaban Essay

1. **Poin inti:**
   - Frontend adalah bagian website yang dilihat dan digunakan pengunjung di browser; tugasnya mengurus tampilan dan interaksi.
   - Backend bekerja di server: menerima permintaan, mengolah data, menyimpan ke basis data, dan mengirim hasilnya.
   - Contoh rumah sakit — frontend: nomor antrean yang terlihat pasien, formulir pendaftaran, papan jadwal; backend: rekam medis tersimpan aman, pembaruan nomor antrean, pencatatan pendaftaran.
   - Contoh Tokosaya: kartu produk "Keyboard Mekanis KX-210" beserta harga tampil adalah frontend; pengurangan stok saat tombol Beli ditekan dan pencatatan pesanan adalah backend.
   - Kriteria pemilahan: kebutuhan yang mengubah apa yang dilihat/digunakan pengunjung masuk frontend; kebutuhan yang berhubungan dengan data dan aturan bisnis masuk backend.
   **Skor:** 1 (definisi frontend + backend) + 2 (dua contoh frontend dan dua contoh backend rumah sakit) + 1 (contoh Tokosaya relevan) + 1 (kriteria pemilahan) = 5

2. **Poin inti:**
   - Empat langkah: dokumen HTML diterima → pohon dokumen (DOM) disusun dari tag → gaya CSS diterapkan pada elemen → halaman ditampilkan di layar.
   - DevTools dibuka dengan `F12` atau klik kanan → Inspect; panel Elements memperlihatkan pohon tag dan mengklik barisnya menyorot elemen terkait di halaman.
   - Device toolbar mengubah lebar layar (HP ke komputer) untuk mengamati bagaimana teks menyesuaikan ruang.
   - Kebiasaan verifikasi: simpan → muat ulang → periksa; kalau tampilan salah, ada bagian HTML/CSS yang perlu diperiksa karena browser membaca kode, bukan menebak maksud.
   **Skor:** 2 (urutan empat langkah) + 2 (panel Elements dan device toolbar beserta fungsinya) + 1 (kebiasaan simpan–muat ulang–periksa) = 5

3. **Poin inti:**
   - Nama folder dan file memakai spasi serta huruf kapital (`Web Toko Saya/`, `Halaman Produk.html`) — melanggar konvensi huruf kecil dan kebab-case; perbaikan: `web-toko-saya/`, `halaman-produk.html`.
   - Halaman utama tertulis `Index.html` — huruf I kapital membuat server tidak menemukan halaman default; perbaikan: `index.html`.
   - File gaya disimpan di folder utama (`Style-ku.css`) — konvensi menempatkan satu file gaya bersama di `css/style.css` agar cukup diperbaiki di satu tempat.
   - Gambar disimpan di folder utama (`Gambar Produk Keyboard.jpg`) — aset dikelompokkan ke subfolder `img/` dengan nama kebab-case, misalnya `produk-keyboard.jpg`, supaya rapi dan mudah dicari.
   **Skor:** 3 × 1 poin per temuan valid dengan perbaikan + 2 poin untuk alasan yang tepat = 5

4. **Poin inti:**
   - Alur *design → code*: kebutuhan → rancangan (Figma) → struktur HTML → gaya CSS; perubahan lebih mudah dilakukan ketika masih di tahap rancangan, dan rancangan menjadi acuan pemeriksaan hasil di browser.
   - Pada lencana Best Seller: HTML menempatkan dan menyusun isi kartu (teks lencana, nama produk, harga), CSS mengatur warna amber dan teks gelap lencana, bentuk kartu putih bersudut membulat, serta harga indigo.
   - Jika komponen yang sama dipakai berulang, CSS framework dapat mempercepat dan menjaga konsistensi, tetapi dasar HTML/CSS dipahami lebih dulu agar penggunaan framework sadar dan dapat disesuaikan.
   **Skor:** 2 (alasan urutan rancangan dulu sebelum kode) + 2 (pembagian tugas HTML dan CSS pada contoh lencana/kartu) + 1 (peran rancangan sebagai acuan pemeriksaan atau catatan framework) = 5

5. **Poin inti:**
   - (a) Tampilan lama: pastikan file benar-benar tersimpan (indikator belum tersimpan hilang), lalu muat ulang/hard refresh; kalau masih, periksa bahwa file yang dibuka di browser memang file yang diedit melalui panel Elements.
   - (b) Gambar tidak tampil: nilai `src` tidak cocok dengan lokasi atau nama file di folder `img/` (termasuk ekstensi keliru seperti `.jpg` padahal `.png`); cocokkan nama file, muat ulang, dan manfaatkan teks `alt` untuk mengenali gambar yang gagal dimuat.
   - (c) Halaman kecil di HP: `<meta name="viewport">` belum ada di `head`; tambahkan `width=device-width, initial-scale=1` dan uji dengan device toolbar.
   - Pencegahan: mulai setiap dokumen dari pola lengkap, tampilkan ekstensi file, simpan sebagai UTF-8, biasakan simpan–muat ulang–periksa, dan pakai nama file kebab-case yang disalin langsung dari panel Explorer.
   **Skor:** 3 (satu poin per laporan dengan penyebab dan langkah yang tepat) + 1 (usulan pencegahan) + 1 (sistematika penyajian) = 5

### Jawaban Praktikum Lab

1. **Langkah solusi:** Struktur kunci file `info-produk.html`:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tokosaya | Keyboard Mekanis KX-210</title>
</head>
<body>
  <h1>Keyboard Mekanis KX-210</h1>
  <p><img src="img/produk-keyboard-kx210.svg" alt="Keyboard mekanis KX-210 dengan 87 tombol" width="220" height="220"></p>
  <p>Harga: <strong>Rp650.000</strong></p>
  <ul>
    <li>87 tombol dengan switch biru</li>
    <li>Rangka kokoh untuk kerja harian</li>
    <li>Nyaman untuk pengetikan panjang</li>
  </ul>
  <p><a href="katalog.html">Lihat katalog lain</a> · <a href="mailto:halo@tokosaya.id">Tanya stok</a></p>
</body>
</html>
```

   **Kriteria penilaian:** pola dokumen lengkap 30%; struktur konten tepat (satu `h1`, `img` ber-`alt` dan berukuran, `ul`, link relatif dan `mailto`) 40%; bukti pemeriksaan judul tab dan catatan hasil 30%.

2. **Langkah solusi:** `head` dilengkapi DOCTYPE, `lang="id"`, charset, viewport, dan `title`. Tabel lima tag yang diharapkan, misalnya: `html` (elemen akar dokumen), `head` (informasi tentang dokumen), `body` (konten yang tampil), `h1` (judul utama), `ul`/`li` (daftar). Klik baris `h1` di panel Elements menyorot judul "Catatan Pesanan #TKS-001" di halaman. Pada 375 piksel teks lebih sering membungkus; pada 1280 piksel baris teks lebih panjang.
   **Kriteria penilaian:** file dan `head` lengkap 25%; kebenaran tabel lima tag 35%; catatan sorotan elemen dan hasil device toolbar 25%; tangkapan layar 15%.

3. **Langkah solusi:** Berkas pertama dinilai sebagai berkas teks karena berekstensi `.txt`; perbaikannya mengganti nama menjadi `index.html` (aktifkan tampilan ekstensi di Explorer atau simpan ulang lewat VS Code dengan nama `index.html`). Gambar gagal dimuat karena `src` menunjuk `.jpg` padahal berkasnya `.png`; perbaikan: ubah `src` menjadi `foto-profil.png`. Pencegahan: tampilkan ekstensi file sejak awal, salin nama file langsung dari panel Explorer ke atribut `src`, dan gunakan nama kebab-case.
   **Kriteria penilaian:** berkas pertama berfungsi dengan penjelasan penyebab 30%; gambar tampil dengan diagnosis `src` yang benar 30%; pencegahan masuk akal 20%; kerapian bukti 20%.

4. **Langkah solusi:** Hasil akhir memuat `<!DOCTYPE html>`, `html lang="id"`, charset, viewport, `title` deskriptif, tag huruf kecil, dan indentasi dua spasi. Perubahan yang diharapkan: menambah DOCTYPE dan atribut `lang`; melengkapi charset dan viewport; mengubah semua tag menjadi huruf kecil; merapikan indentasi; mempertahankan `strong` sebagai penanda penting (bukan sekadar tebal).
   **Kriteria penilaian:** dokumen lengkap sesuai pola 30%; konvensi huruf kecil dan indentasi 30%; daftar perubahan beserta alasan 25%; bukti judul tab 15%.

5. **Langkah solusi:** Struktur akhir:

```text
toko-latihan/
├── index.html
├── tentang.html
├── css/
│   └── style.css
└── img/
    └── logo-toko.svg
```

   Alasan `index.html`: saat pengunjung membuka alamat website tanpa menyebut nama file, server menampilkan halaman utama bernama `index.html`; karena itu proyek tidak memakai `halaman1.html` atau `utama.html`.
   **Kriteria penilaian:** struktur folder benar 40%; penamaan kebab-case benar 30%; alasan `index.html` tepat 30%.

6. **Langkah solusi:** Kedua berkas memakai konten identik; hanya meta viewport yang berbeda. Pada lebar 375 piksel, halaman tanpa viewport tampil menyusut dengan teks sangat kecil karena browser menganggap halaman berlebar besar, sedangkan halaman dengan viewport mengikuti lebar perangkat sehingga teks membungkus normal. Kesimpulan: meta viewport adalah prasyarat tampilan responsif dan wajib ada di `head`.
   **Kriteria penilaian:** dua berkas dibuat benar 25%; uji device toolbar dan tabel perbandingan 40%; kesimpulan tepat 25%; tangkapan layar 10%.

7. **Langkah solusi:** logo → SVG (bentuk vektor, tetap tajam); foto asli → JPEG (kaya warna, ukuran lebih wajar untuk foto); ikon sederhana → SVG (tajam dan kecil); tangkapan layar → PNG (teks dan garis tetap tajam); ilustrasi sederhana → SVG. Contoh nama: `logo-tokosaya.svg`, `foto-keyboard-kx210.jpg`, `ikon-keranjang.svg`, `tangkapan-katalog.png`, `hero-tokosaya.svg`. Ukuran berkas dijaga wajar agar halaman cepat dibuka, terutama lewat jaringan HP.
   **Kriteria penilaian:** lima keputusan format benar 50%; alasan tepat 25%; penamaan kebab-case dan paragraf ukuran berkas 25%.

8. **Langkah solusi:** Perbedaan: versi A tanpa `lang="id"`, tanpa meta viewport, judul tab generik "Promo", dan tag huruf besar; versi B memuat `lang="id"`, meta viewport, judul unik "Tokosaya | Promo Bulan Ini", dan tag huruf kecil. Versi B lebih sesuai konvensi. Perbaikan versi A: tambahkan `lang="id"` dan meta viewport, ganti judul menjadi unik-deskriptif, ubah tag huruf besar menjadi huruf kecil, dan rapikan indentasi.
   **Kriteria penilaian:** tabel perbandingan empat aspek 40%; pilihan versi dan alasan 30%; versi perbaikan sesuai konvensi 30%.

9. **Langkah solusi:** Kedua halaman memakai pola dokumen lengkap, satu `h1`, dan link relatif (`produk.html` dari daftar, `index.html` dari detail) yang tetap berfungsi setelah folder disalin karena jalurnya relatif terhadap lokasi halaman. Link eksternal memakai `target="_blank"` (idealnya berpasangan dengan `rel="noopener"`), ditambah satu link `mailto:`.
   **Kriteria penilaian:** dua halaman valid 30%; link internal dua arah, link eksternal, dan `mailto` benar 40%; catatan hasil uji pemindahan folder 30%.

10. **Langkah solusi:** Tabel audit mencatat status tiap aspek; temuan yang paling sering muncul adalah judul tab terlalu generik, gambar tanpa `alt`, atau `lang` belum diisi. Perbaikan dilakukan lalu dibuktikan dengan tangkapan layar Elements sebelum dan sesudah. Refleksi memuat temuan, perbaikan, dan kebiasaan baru (misalnya menulis dokumen dari pola lengkap dan memeriksa Elements setiap kali selesai mengetik).
    **Kriteria penilaian:** kelengkapan tabel audit 30%; perbaikan nyata pada file 30%; bukti sebelum–sesudah 20%; kedalaman refleksi 20%.

---

## Bab 02 — HTML5 dan Struktur Semantik

### Kunci Pilihan Ganda

1. **B** — landmark adalah wilayah halaman yang dikenali pembaca layar, mesin pencari, dan pembaca sebagai bagian penting, sehingga pengguna dapat berpindah cepat; `main` dan `nav` adalah contohnya.
2. **A** — `meta description` berisi ringkasan satu kalimat tujuan halaman yang kerap tampil di bawah hasil pencarian. Charset (B) dan viewport (C) adalah meta lain, sedangkan teks tab ditentukan `title` (D).
3. **C** — `mark` menandai teks yang relevan dalam konteks tertentu, misalnya kata kunci hasil pencarian. `strong` untuk hal penting dan `em` untuk penekanan baca, bukan sorotan kontekstual.
4. **D** — link eksternal yang dibuka di tab baru memakai `target="_blank"` dan dipasangkan `rel="noopener"` demi keamanan serta kinerja; link internal proyek cukup dibuka pada tab sekarang.
5. **B** — pembaca layar bisa menjumpai teks link tunggal di luar kalimatnya, sehingga frasa seperti "klik di sini" tidak bermakna; teks deskriptif tetap jelas di posisi mana pun.
6. **C** — `alt` yang baik mendeskripsikan fungsi dan isi gambar sesuai konteks halaman, termasuk menyampaikan polanya untuk grafik; menulis nama elemen atau nama berkas tidak membantu pengguna.
7. **A** — `aside` untuk konten terkait yang bisa dilepas tanpa merusak isi utama, seperti panel "terpopuler" atau tip; `main` menandai isi utama yang tidak boleh hilang.
8. **D** — `nav` dipakai untuk gugus navigasi yang paling menentukan, seperti menu utama (dan menu footer bila perlu), bukan untuk setiap kumpulan tautan.
9. **B** — `time datetime` menuliskan nilai mesin (format `YYYY-MM-DD`) sementara teksnya tampil ramah manusia; tidak ada hubungan dengan `h2`, JavaScript, atau zona waktu pengunjung.
10. **C** — dengan `caption`, `thead` ber-`th scope="col"`, dan nama produk memakai `th scope="row"`, pembaca layar menyebut konteks baris (nama produk) sebelum membaca isi sel harga.
11. **A** — `aria-label` membuat navigasi utama dapat dibedakan dari navigasi lain (misalnya menu footer) saat dibacakan pembaca layar; atribut ini tidak mengatur warna maupun status link eksternal.
12. **D** — contoh kontak Tokosaya memakai `post` karena formulir berisi data pesan yang diketik pengguna; metode `get` dan `post` sama-sama didukung halaman statis.
13. **B** — `main` adalah landmark isi utama, dan pembaca layar modern menyediakan daftar landmark untuk lompatan cepat, sehingga menu yang sama tidak perlu didengar berulang kali.
14. **C** — konsistensi `header`/`footer` memungkinkan penataan lewat satu set selector pada bab CSS, memudahkan pemeliharaan lintas halaman, dan memperkuat identitas website tanpa mengubah semantiknya.
15. **A** — pasangan istilah dan penjelasan paling tepat memakai `dl` dengan `dt` (istilah) dan `dd` (deskripsi); `ol` untuk urutan bermakna, `table` untuk data tabular, dan `aside` untuk konten tambahan.

### Jawaban Essay

1. **Poin inti:**
   - Aksesibilitas: landmark (`header`, `nav`, `main`, `aside`, `footer`) dan hierarki heading memudahkan pengguna pembaca layar menjelajah dan melompat ke bagian tertentu tanpa mendengar menu berulang; WCAG 2.2 mendorong halaman yang mudah dinavigasi.
   - SEO dasar: mesin pencari membaca HTML; `h1` melengkapi `title` bermakna, `article` menyatakan unit konten, dan `img alt` memberi deskripsi yang bisa muncul di hasil pencarian. SEO tetap punya dimensi lain di luar markup.
   - Pemeliharaan kode: `section class="layanan"` lebih mudah dipahami daripada pembungkus bernama kabur, sehingga rekan tim (atau diri sendiri enam bulan kemudian) cepat memahami batas dan peran tiap blok. Kontrasnya, halaman "div semua" kehilangan landmark, sinyal struktur, dan kejelasan bagian.
   - Contoh Tokosaya: `address` pada `footer` menandai kontak toko secara semantik; `main` hero-tabel-layanan menandai isi utama; `dl` pada halaman tentang memisahkan istilah dan penjelasan nilai layanan.
   **Skor:** 2 (penjelasan dua manfaat terpilih) + 2 (contoh elemen yang tepat pada halaman Tokosaya) + 1 (kontras dengan "div semua" atau batasan SEO) = 5

2. **Poin inti:**
   - Link absolut memuat alamat lengkap (misalnya `https://www.wikipedia.org/`); link relatif merujuk terhadap halaman sekarang, misalnya `tentang.html` atau `img/logo-tokosaya.svg`.
   - Proyek multi-halaman Tokosaya memakai link relatif antarhalaman (`index.html`, `katalog.html`, `tentang.html`, `kontak.html`) agar struktur tetap berfungsi walau folder dipindah.
   - `target="_blank"` hanya untuk sumber eksternal baru dan dipasangkan `rel="noopener"` demi keamanan serta kinerja; link internal cukup dibuka pada tab yang sama.
   - Teks link harus deskriptif karena pembaca layar dapat menjumpainya tunggal di luar kalimat; contoh perbaikan: "klik di sini" diubah menjadi "Baca aturan penukaran barang".
   **Skor:** 2 (perbedaan dan situasi pemakaian absolut vs relatif) + 2 (aturan `target="_blank"` + `rel="noopener"` dan alasan teks link) + 1 (contoh perbaikan teks link) = 5

3. **Poin inti:**
   - Kepala halaman dan menu memakai `div` polos — seharusnya `header` berisi `nav` (dengan daftar `ul`/`li`) agar menjadi landmark yang dikenali pembaca layar.
   - Isi dokumen memakai `div class="isi"` — padahal itu isi utama halaman sehingga seharusnya `main` (dan `footer` untuk bagian bawah, yang bahkan belum ada).
   - Hierarki heading melompat: `h4` muncul setelah `h2`; seharusnya judul "Harga dan ketersediaan" memakai `h3` karena level tidak boleh melompat.
   - Gambar `img/hero-tokosaya.svg` tidak memiliki `alt`; seharusnya diberi teks alternatif deskriptif (dan atribut `width`/`height` agar ruang gambar dipesan sejak awal).
   - Perbaikan tambahan: menambahkan `footer` berisi kontak, atau minimal mempertahankan `lang="id"` dan meta lengkap bila dokumen ditulis utuh.
   **Skor:** 4 × 1 poin per masalah valid + 1 poin untuk perbaikan yang tepat dan konsisten = 5

4. **Poin inti:**
   - Kelemahan pertama: `label` belum terhubung ke input karena tidak ada `for` pada label dan `id` pada input, sehingga pembaca layar menemukan kontrol tanpa nama — seperti formulir kertas tanpa label kolom.
   - Kelemahan kedua: `textarea` tidak memiliki label sama sekali (tidak ada `label for` yang merujuk `id`-nya), sehingga kolom Pesan tidak dapat dikenali pengguna pembaca layar.
   - Efek lain: mengklik teks label tidak mengarahkan fokus ke kolom isian, sehingga pengguna mouse/touch kehilangan area klik yang nyaman.
   - Perbaikan: `<label for="nama">Nama Lengkap</label>` berpasangan dengan `<input id="nama" name="nama">`; begitu pula `email` dan `pesan`; tombol ditegaskan `type="submit"` karena fungsinya mengirim form.
   **Skor:** 2 (identifikasi dua kelemahan) + 2 (dampak aksesibilitas/klik label) + 1 (perbaikan pasangan `for`/`id` yang benar) = 5

5. **Poin inti:**
   - Prioritas tertinggi: menambahkan `main` karena pembaca layar kehilangan tujuan lompatan ke isi utama; ini memengaruhi seluruh pengalaman navigasi setiap halaman.
   - Berikutnya: menambahkan `nav` berisi menu utama (idealnya ber-`aria-label`) supaya struktur navigasi dikenali sebagai landmark, bukan sekadar deretan link.
   - Lalu: memperbaiki hierarki heading (`h2` → `h4` menjadi `h2` → `h3`) agar peta navigasi heading rapi dan tidak ada level yang hilang.
   - Terakhir atau sejalan: melengkapi `alt` pada dua gambar produk agar informasi produk tetap tersampaikan saat gambar gagal dimuat atau dibacakan pembaca layar; gambar dekoratif justru `alt=""`.
   - Urutan dapat dibenarkan selama alasan dikaitkan dengan dampak: struktur landmark lebih dulu (menentukan navigasi global), lalu perbaikan bagian yang lebih lokal.
   **Skor:** 2 (urutan prioritas logis) + 2 (alasan tiap prioritas dengan dampak bagi pengguna) + 1 (rencana perbaikan jelas dan dapat dikerjakan) = 5

### Jawaban Praktikum Lab

1. **Langkah solusi:** Kerangka kunci:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Promo bulan ini di Tokosaya: potongan harga aksesori dan elektronik komputer pilihan, berlaku sampai akhir bulan.">
  <title>Tokosaya | Promo Bulan Ini</title>
</head>
<body>
  <h1>Promo Bulan Ini</h1>
  <p>Nikmati potongan harga untuk aksesori dan elektronik komputer pilihan.</p>
</body>
</html>
```

   **Kriteria penilaian:** kelengkapan lima unsur `head` (DOCTYPE, lang, charset, viewport, title) 40%; kalimat `description` ringkas dan relevan 30%; bukti judul tab dan pemeriksaan Elements 30%.

2. **Langkah solusi:** Hasil refactor yang diharapkan: `div.site-header` → `header` berisi `nav` (link Beranda/Katalog disusun dalam `ul`/`li`); `div.content` → `main`; judul produk memakai heading yang tidak melompat dari `h2`; `div.produk` boleh tetap `div` karena hanya pembungkus tampilan; `div.foot` → `footer` berisi `address` untuk kontak. Tiga keputusan inti: landmark navigasi, pemisahan isi utama, dan kontak semantik.
   **Kriteria penilaian:** penggunaan elemen semantik tepat 40%; hierarki heading dan satu `h1` 25%; alasan keputusan 20%; tangkapan layar Elements 15%.

3. **Langkah solusi:** Tabel memakai `caption` (misalnya "Ongkos kirim Tokosaya berdasarkan wilayah"), `thead` dengan `th scope="col"` (Wilayah, Ongkos Kirim, Estimasi), dan `tbody` dengan `th scope="row"` pada Jakarta, Jawa Barat, dan Luar Jawa. Contoh baris: `<tr><th scope="row">Jakarta</th><td>Rp15.000</td><td>1–2 hari</td></tr>`. `caption` dan `scope` membuat pembaca layar menyebut nama wilayah sebelum nilai ongkir dibacakan.
   **Kriteria penilaian:** struktur tabel semantik lengkap 45%; data lima baris benar 20%; penjelasan caption/scope 20%; hasil di browser 15%.

4. **Langkah solusi:** Form memuat pasangan yang benar, misalnya `<label for="nama">Nama Lengkap</label>` lalu `<input type="text" id="nama" name="nama">`; hal yang sama untuk email (`type="email"`) dan pesan (`textarea id="pesan" name="pesan" rows="5"`), lalu `<button type="submit">Kirim Pertanyaan</button>`. Saat teks label diklik, fokus berpindah ke kolom isian yang sesuai karena nilai `for` dan `id` sama.
   **Kriteria penilaian:** pasangan `for`/`id` benar untuk ketiga kontrol 40%; atribut pendukung (`type`, `name`, `rows`, `method="post"`, `action`) 25%; hasil uji klik label 20%; tangkapan layar 15%.

5. **Langkah solusi:** Logo: `alt="Logo Tokosaya"` karena fungsinya mengidentifikasi brand; hero: `alt="Ilustrasi peralatan kerja digital: keyboard, mouse, dan monitor Tokosaya"`; garis pemisah: `alt=""` karena murni dekoratif. Hero dibungkus `figure` dan diberi `figcaption`, misalnya "Ilustrasi hero Tokosaya". Atribut `width`/`height` membuat browser memesan ruang sebelum gambar termuat sehingga tidak terjadi lompatan layout.
   **Kriteria penilaian:** tiga keputusan `alt` tepat beserta alasan 45%; pasangan `figure`/`figcaption` 25%; atribut ukuran 15%; bukti tangkapan layar 15%.

6. **Langkah solusi:** `Index.html` gagal di server peka huruf karena nama file nyata memakai `index.html`; `tentang.html.hmtl` salah ekstensi sehingga file tidak ditemukan; `katalog.html` belum ada, jadi perlu dibuatkan file (boleh kosong dengan kerangka lengkap) atau dicatat sebagai halaman yang menyusul agar tidak menjadi link mati. Hasil perbaikan: semua `href` huruf kecil dengan ekstensi `.html`, nav ber-`aria-label` dengan daftar `ul`/`li`.
   **Kriteria penilaian:** diagnosis tiga link bermasalah 40%; perbaikan `href` + `aria-label` + daftar 35%; perlakuan halaman yang belum ada 25%.

7. **Langkah solusi:** Perbaikan: hanya satu `h1` ("Tentang Tokosaya"); "Profil Toko" menjadi `h2`; "Visi" dan "Misi" menjadi `h3` di bawah `h2` "Visi dan Misi" (tambahkan `h2` tersebut atau jadikan Visi/Misi sebagai `h3` di bawah section yang tepat), sehingga tidak ada lompatan level. Daftar isi yang diharapkan: h1 Tentang Tokosaya → h2 Profil Toko → h2 Visi dan Misi → h3 Visi → h3 Misi.
   **Kriteria penilaian:** satu `h1` dan level tidak melompat 45%; daftar isi bertingkat benar 30%; alasan perubahan level 25%.

8. **Langkah solusi:** Tabel yang diharapkan mencatat: `header` (identitas website, 1×), `nav` (navigasi utama berlabel, 1×), `main` (isi utama, 1×), `footer` (kontak/hak cipta, 1×), `address` (kontak organisasi). Pemeriksaan `img`: setiap gambar punya `alt` (logo deskriptif), dan `nav` memuat `aria-label="Navigasi utama"`. Catatan tiga baris: apa yang dilihat di panel, panel/alat yang dipakai, dan arti temuan bagi kode.
   **Kriteria penilaian:** kelengkapan tabel landmark 40%; temuan pemeriksaan `alt` dan `aria-label` 30%; catatan tiga baris 30%.

9. **Langkah solusi:** `aside` berisi `h2` "Tips Perawatan Keyboard" dan `ul` tiga tips, ditempatkan menyertai isi utama. `aside` aman dilepas karena kontennya tambahan yang tidak membawa informasi pokok, sedangkan `main` menandai isi utama halaman sehingga tidak boleh dihapus. `time datetime="2026-02-14"` menyimpan nilai mesin format `YYYY-MM-DD` sambil menampilkan "14 Februari 2026" untuk pembaca manusia.
   **Kriteria penilaian:** struktur aside dan time benar 40%; penjelasan aside vs main 30%; manfaat `datetime` 15%; bukti Elements 15%.

10. **Langkah solusi:** Temuan yang diharapkan: (1) kepala halaman memakai `div` dan `span` tanpa landmark — perbaikan: `header` + `nav` (dengan `ul`/`li`); (2) terdapat dua `main` sehingga aturan satu `main` per halaman dilanggar — gabungkan menjadi satu `main`; (3) belum ada `h1` (hanya `h2`) — ubah "Hubungi Tokosaya" menjadi `h1`; (4) gambar logo tanpa `alt` — tambahkan deskripsi; (5) kontak berada di `p` biasa tanpa `footer`/`address` — pindahkan ke `footer` berisi `address`. Dua prioritas paling mendesak dapat dibenarkan, misalnya menggabungkan `main` (satu isi utama) dan menambahkan landmark `header`/`nav`, karena keduanya menentukan struktur navigasi seluruh halaman bagi pembaca layar.
    **Kriteria penilaian:** laporan temuan (temuan → dampak → perbaikan) 40%; prioritas dua perbaikan beserta alasan 30%; bukti file hasil perbaikan 30%.

---

## Bab 03 — Dasar-Dasar CSS

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

---

## Bab 04 — Tipografi dan Visual Design CSS

### Kunci Pilihan Ganda

1. **B** — *Typeface* adalah keluarga desain huruf (Poppins), sedangkan *font* adalah wujud spesifiknya dengan berat tertentu (Poppins Bold 700). Keduanya sering dipakai bergantian dalam percakapan, tetapi bedanya membantu berbicara tepat dengan desainer.
2. **A** — `display=swap` menyuruh browser menampilkan teks memakai font cadangan sementara web font belum selesai diunduh, sehingga pembaca di jaringan lambat tidak menatap ruang kosong. Opsi D justru menggambarkan perilaku tanpa `swap`.
3. **D** — `rem` mengacu pada `font-size` elemen akar (lazimnya 16px), sehingga skala tetap koheren dan ikut membesar ketika pengguna memperbesar font bawaan browser; aspek aksesibilitas yang penting.
4. **C** — `--space-unit: 8px` adalah basis ritme jarak: `calc(var(--space-unit) * 3)` menghasilkan 24px, dan seluruh jarak halaman mengikuti kelipatan 8/16/24/32/48/64.
5. **A** — `calc(var(--space-unit) * 3)` = 8px × 3 = 24px. Opsi C tidak memakai `calc()` sehingga tidak valid, sedangkan opsi D mengalikan panjang dengan panjang (`8px * 3px`) yang bukan nilai panjang.
6. **B** — Pada lebar 800px, `5vw` sama dengan 40px, dan nilai itu berada di antara batas minimum 2,25rem (36px) dan maksimum 3rem (48px), sehingga clamp memakai nilai tengahnya.
7. **C** — `1.25rem` sama dengan 20px, dan `line-height: 1.6` adalah faktor tanpa satuan sehingga tingginya 20px × 1,6 = 32px.
8. **D** — Hijau `#16A34A` di atas putih hanya sekitar 3,3:1, di bawah ambang 4,5:1 untuk teks kecil. Tiga pasangan lainnya masing-masing berada di kisaran 9,9:1, 6,3:1, dan 6,8:1 sehingga lolos.
9. **A** — Sintaks `box-shadow: offsetX offsetY blur spread warna`; pada nilai ini `0` adalah offset horizontal, `8px` offset vertikal, `24px` tingkat kekaburan, dan `rgba(15, 23, 42, 0.08)` adalah hitam-kebiru dengan tembus pandang 8%.
10. **A** — Nilai alpha ditulis sebagai desimal antara 0 dan 1, jadi 12% ditulis `0.12`. Opsi B membuat alpha bernilai 12 dan dijepit menjadi pekat, opsi C bukan sintaks warna yang sah, sedangkan opsi D memudarkan seluruh elemen termasuk teksnya sehingga pola badge rusak.
11. **B** — *Custom properties* diwariskan, tetapi properti `color` pada `h3` sudah diatur langsung oleh stylesheet (`h1, h2, h3 { color: var(--clr-dark); }`), sehingga nilainya tidak tertimpa oleh warisan dari `<article>`. Paragraf tidak punya aturan warna sendiri, jadi ia mewarisi `color` indigo dari induknya.
12. **C** — Kegagalan paling umum adalah URL Google Fonts salah ketik, tag `<link>` tertulis di luar `head` sehingga urutan pemuatan kacau, atau jaringan memblokir `fonts.googleapis.com`. Ketiganya bisa dibaca dari Console/Network sebelum menyentuh deklarasi CSS.
13. **C** — Amber terang menurunkan kontras teks putih, padahal teks pada gradien indigo saat ini berada di kisaran 6,3:1–7,9:1 dan aman. Bila usulan tetap dipakai, warna gradien harus dipergelap atau ditambah lapisan gelap di belakang teks agar kontras tetap di atas 4,5:1.
14. **B** — Token dipakai untuk nilai yang harus konsisten lintas komponen: warna brand, warna semantik, font, radius, bayangan, dan satuan jarak. Putih teks di atas gradien hero adalah keputusan lokal sekali pakai, dan token yang terlalu banyak sama buruknya dengan gaya yang berantakan.
15. **D** — Pola badge Tokosaya menaruh warna semantik pada latar tint `rgba()` bertembus pandang rendah dan memakai teks gelap (`--clr-body`, sekitar 8,7:1 pada tint) agar lolos ambang AA. Opsi C memakai teks merah murni di atas tint yang kontrasnya jauh di bawah ambang.

### Jawaban Essay

1. **Poin inti:**
   - *Fallback stack* adalah daftar font cadangan yang dibaca browser dari kiri ke kanan dan selalu ditutup kategori generik (`sans-serif`, `serif`, `monospace`) sebagai jaring pengaman terakhir.
   - `display=swap` membuat teks tampil lebih dahulu memakai font cadangan, lalu "berganti pakaian" saat web font selesai diunduh.
   - Tanpa keduanya: pembaca di jaringan lambat bisa menatap ruang kosong atau teks tak terlihat (perilaku menunda), dan bila unduhan gagal halaman berisiko tampil dengan font bawaan yang tidak terkendali.
   - Manfaat tambahan: konsistensi identitas antarperangkat tetap terjaga karena font cadangan pun dipilih dengan sengaja.
   **Skor:** penjelasan *fallback stack* 2 + penjelasan `display=swap` 2 + konsekuensi bila keduanya absen 1 = 5.

2. **Poin inti:**
   - Hierarki visual adalah tatanan penekanan yang memandu mata pembaca dari yang paling penting menuju pendukung; skala menyediakan jarak antarlevel yang konsisten sehingga tidak ada ukuran liar.
   - Peta penerapan: judul hero di level Display, judul section di Heading 2, nama produk di Subjudul kartu, deskripsi di Body, keterangan dan harga kecil di level Kecil, label kategori/badge di Label.
   - Semakin turun level, semakin kecil ukurannya dan semakin redup warnanya (dari `--clr-dark` ke `--clr-body`), sehingga mata menemukan pintu masuknya sendiri.
   - Properti lain yang ikut membangun hierarki: `font-weight`, warna, jarak/*spacing*, dan `line-height` yang lebih rapat pada judul.
   **Skor:** penjelasan konsep hierarki 1 + penerapan level pada halaman Tokosaya 2 + properti pendukung selain ukuran 2 = 5.

3. **Poin inti:**
   - Hierarki terbalik: `h1` 14px lebih kecil daripada paragraf 18px, sehingga judul tidak lagi tampak sebagai judul. Perbaikan: `h1` memakai level Display/Heading dari skala, misalnya `clamp(2.25rem, 5vw, 3rem)` atau 2.25rem, sementara paragraf tetap 1rem.
   - *Fallback stack* tidak lengkap: `'Poppins', Inter` tidak ditutup kategori generik, sehingga kalau keduanya gagal halaman bergantung pada bawaan browser. Perbaikan: `font-family: var(--font-heading);` dengan nilai `'Poppins', sans-serif`, dan pastikan Inter juga dimuat lewat tag `<link>` Google Fonts.
   - Kontras gagal: teks putih 10px di atas amber `#F59E0B` jauh di bawah ambang AA untuk teks kecil. Perbaikan: pakai teks `--clr-dark` di atas amber (sekitar 6,8:1) dan naikkan ukuran ke minimal 0.875rem.
   - `line-height: 1.1` pada paragraf terlalu sesak; teks isi membutuhkan 1,5–1,7.
   - Label kapital kecil perlu `letter-spacing` positif (misalnya 0.08em) dan `font-weight: 600` supaya tidak menjadi gumpalan.
   **Skor:** tiga masalah dikenali dan dijelaskan 3 + perbaikan yang tepat memakai skala/token 2 = 5.

4. **Poin inti:**
   - *Custom properties* ikut diwariskan ke seluruh elemen turunan dan bisa ditimpa ulang pada sub-pohon; penimpaan `--clr-primary` pada `<section class="cta">` hanya berlaku untuk elemen itu beserta keturunannya.
   - Karena `.cta-button` di dalamnya merujuk `var(--clr-primary)`, nilainya di-*resolve* memakai token hasil penimpaan, sehingga tombol berubah hijau tanpa menyentuh `:root`.
   - Paragraf tidak ikut hijau karena warnanya berasal dari `var(--clr-body)` yang diwarisi dari `html`; yang berubah hanya nilai token `--clr-primary`, bukan properti `color` milik paragraf.
   - Penimpaan seperti ini masih dapat diterima untuk kebutuhan terbatas dan terlokalisasi, misalnya versi gelap satu panel. Sebaiknya dihindari bila dipakai berulang, karena jejak nilai mana yang menang di tiap titik menjadi sulit ditelusuri.
   **Skor:** mekanisme pewarisan dan penimpaan token 2 + penjelasan mengapa tombol berubah 1 + penjelasan mengapa paragraf tidak berubah 1 + penilaian kapan layak dipakai 1 = 5.

5. **Poin inti:**
   - Argumen rekan tidak sepenuhnya salah untuk halaman satu kali pakai, tetapi tidak cocok untuk proyek Tokosaya yang tumbuh sampai empat halaman dan beberapa bab.
   - Alasan pertama, konsistensi: indigo `#4F46E5` muncul di tombol, link, keranjang, gradien hero, dan badge "Baru". Tanpa token, satu tempat bisa terlewat saat warna brand berganti sehingga kontrak visual retak.
   - Alasan kedua, pemeliharaan: mengubah `--clr-primary` di `:root` mengubah seluruh komponen sekaligus; menulis nilai mentah berarti mencari-ganti di banyak berkas dengan risiko kelalaian.
   - Alasan ketiga, kolaborasi: token memberi nama makna (`--clr-danger`) sehingga anggota tim baru membaca niat desain, bukan sekadar angka.
   - Alasan keempat, skala: `--space-unit` dan `calc()` menjaga ritme jarak kelipatan 8px, sementara nilai "rasa" menghasilkan jarak yang tidak konsisten.
   - Situasi ketika token tidak tepat: nilai keputusan lokal sekali pakai, seperti putih teks di atas gradien hero atau satu jarak ganjil yang hanya muncul sekali; token yang berlebihan sama merepotkannya dengan gaya yang berantakan.
   **Skor:** tiga alasan kuat dengan contoh Tokosaya 3 + penolakan/penilaian yang seimbang 1 + situasi tanpa token yang tepat 1 = 5.

### Jawaban Praktikum Lab

1. **Langkah solusi:** berkas HTML memuat dua `preconnect` ke `fonts.googleapis.com` dan `fonts.gstatic.com` (yang kedua dengan atribut `crossorigin`), satu `<link>` stylesheet Google Fonts dengan parameter `family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap`, lalu `<link>` ke `css/style.css`. Blok `:root` menampung seluruh token 4.8, dan `.hero { background-image: linear-gradient(to bottom right, var(--clr-primary), var(--clr-primary-dark)); padding: calc(var(--space-unit) * 9) calc(var(--space-unit) * 4); }`, `.hero-title { font-size: clamp(2.25rem, 5vw, 3rem); color: #FFFFFF; }`.
   **Kriteria penilaian:** blok token lengkap dan benar 35%, pemanggilan `var()` konsisten (tanpa nilai mentah selain putih teks) 25%, gradien dan `clamp()` bekerja 25%, bukti tangkapan layar lebar dan sempit 15%.

2. **Langkah solusi:** empat varian dibuat dengan pola `.produk-badge` sebagai basis lalu penimpaan latar: `--bestseller` latar `var(--clr-accent)` + teks `var(--clr-dark)`; `--tersedia` latar `rgba(22, 163, 74, 0.12)` + teks `var(--clr-body)`; `--stok-terbatas` latar `rgba(220, 38, 38, 0.12)` + teks `var(--clr-body)`; `--baru` latar `rgba(79, 70, 229, 0.12)` + teks `var(--clr-primary-dark)`. Pasangan yang gagal umumnya adalah teks hijau/merah murni di atas tint, dan perbaikannya adalah memindahkan teks ke warna gelap.
   **Kriteria penilaian:** keempat varian tampil benar 30%, pola tint dan teks gelap diterapkan 30%, tabel kontras lengkap 25%, bukti perbaikan pasangan yang gagal 15%.

3. **Langkah solusi:** pada panel Elements, `h1` menunjukkan `font-family` hasil *computed* `Poppins, sans-serif` bila font utama berhasil dimuat; pada panel Network terlihat berkas `woff2` dari `fonts.gstatic.com`. Menghapus salah satu `preconnect` umumnya memperpanjang waktu mulai unduh font karena browser harus membuka koneksi lebih dahulu. Bila font gagal, nilai computed turun ke `sans-serif`.
   **Kriteria penilaian:** pencatatan nilai computed 30%, bukti permintaan font di Network 25%, eksperimen preconnect 25%, kesimpulan peran preconnect 20%.

4. **Langkah solusi:** `var(--clr-primari)` tidak menemukan definisi sehingga properti jatuh ke nilai awalnya (latar transparan), sedangkan `border-radius: radius;` bukan nilai sah karena `radius` bukan token dan bukan satuan yang dikenali, sehingga deklarasi diabaikan. Perbaikan: samakan nama token menjadi `var(--clr-primary)`, tambahkan `--space-unit` dan token lain yang belum ada di `:root`, lalu ubah `border-radius: var(--radius);`.
   **Kriteria penilaian:** dua kesalahan teridentifikasi 35%, perbaikan nama token dan `var()` 25%, halaman kembali tampil benar 25%, penjelasan nilai fallback 15%.

5. **Langkah solusi:** ketika permintaan ke domain font diblokir, versi `font-family: 'Poppins';` tanpa cadangan membuat browser memakai font bawaan yang tidak terkendali, sedangkan versi ber-*fallback* turun ke `'Segoe UI'` lalu `sans-serif` sehingga tampilan tetap konsisten dan terbaca.
   **Kriteria penilaian:** dua versi disiapkan dengan benar 25%, simulasi pemblokiran font dilakukan 25%, bukti perbandingan visual 25%, kesimpulan fungsi *fallback stack* 25%.

6. **Langkah solusi:** nilai `#4F46E5` → `var(--clr-primary)`, `#4338CA` → `var(--clr-primary-dark)`, `#334155` → `var(--clr-body)`, `#1E293B` → `var(--clr-dark)`, `12px` → `var(--radius)`, dan nilai tint indigo ditulis `rgba(79, 70, 229, 0.12)` yang boleh tetap berupa tint atau dirujuk lewat token bila dibuat khusus. Setelah `--clr-primary` diubah, gradien hero, tombol CTA, dan teks badge ikut berubah.
   **Kriteria penilaian:** seluruh nilai berulang menjadi token 35%, blok `:root` lengkap dan penamaan benar 20%, bukti pencarian tanpa heksadesimal mentah 20%, catatan minimal empat elemen terdampak 25%.

7. **Langkah solusi:** setiap level dirender dengan `font-size` sesuai tabel skala (3 / 2.25 / 1.875 / 1.5 / 1.25 / 1.125 / 1 / 0.875 / 0.75 rem), label memakai 0.75–0.875rem, judul memakai `line-height: 1.2`, teks isi `1.6`. Verifikasi computed memastikan nilai pada panel DevTools sama dengan label (misalnya Heading 2 = 30px dan line-height 36px).
   **Kriteria penilaian:** kesembilan level lengkap dan benar 35%, label tidak mengganggu hierarki 20%, `line-height` tepat per kelompok 20%, tabel verifikasi computed 25%.

8. **Langkah solusi:** prediksi yang benar: 360px → 36px (batas minimum aktif karena `5vw` = 18px), 800px → 40px (`5vw` berada di antara min dan max), 1440px → 48px (batas maksimum aktif karena `5vw` = 72px). Min aktif pada lebar di bawah 720px dan max aktif pada lebar di atas 960px.
   **Kriteria penilaian:** prediksi ditulis lebih dahulu 25%, hasil ukur DevTools tepat 30%, penjelasan aturan min/preferred/max 30%, kesimpulan rentang lebar 15%.

9. **Langkah solusi:** pasangan yang lolos: `#334155` di `#F8FAFC`, `#1E293B` di `#F59E0B`, putih di `#4F46E5`, dan `#DC2626` di putih (lolos tipis sekitar 4,8:1). Yang gagal adalah `#16A34A` di putih (sekitar 3,3:1); perbaikannya memakai latar tint hijau `rgba(22, 163, 74, 0.12)` dengan teks `--clr-body` (sekitar 8,7:1).
   **Kriteria penilaian:** penandaan status lima pasangan benar 35%, perbaikan pasangan gagal sesuai pola 30%, bukti sebelum-sesudah 20%, penjelasan alasan pola tint 15%.

10. **Langkah solusi:** token baru ditambahkan hanya bila nilainya memang harus konsisten, misalnya `--clr-quote-bg` untuk latar kutipan dan satu token radius bila kartu testimoni berbeda dari kartu produk. Seluruh jarak memakai `calc(var(--space-unit) * n)`, misalnya `padding: calc(var(--space-unit) * 3)`, dan warna teks kutipan memakai `var(--clr-body)` sedangkan nama pelanggan memakai `var(--font-heading)` dengan `var(--clr-dark)`.
    **Kriteria penilaian:** token baru relevan dan dinamai sesuai makna 30%, penerapan `var()` dan `calc()` konsisten 30%, konsistensi visual dengan kartu produk 25%, daftar alasan penambahan token 15%.

---

## Bab 05 — CSS Box Model dan Layout

### Kunci Pilihan Ganda

1. **D** — Padding adalah ruang dalam elemen: ia ikut memakai warna latar dan memperluas area klik/sentuh; margin justru transparan dan berada di luar border.
2. **A** — Margin vertikal dua elemen block bertetangga *collapse*: yang dipakai adalah nilai terbesar (40 px), bukan hasil penjumlahan 64 px.
3. **A** — p, div, ul, dan h1–h6 berperilaku block (menempati baris sendiri); span, a, strong, em, b, dan i inline; img dan input adalah *replaced element* yang tetap menerima dimensi meski mengalir inline.
4. **D** — Pada `border-box`, angka `width: 320px` menaungi seluruh kotak: kontennya menyusut menjadi 320 − (24×2) − (4×2) = 264 px.
5. **B** — Inline-block memperlakukan spasi/baris baru antar tag HTML sebagai karakter spasi nyata; `font-size: 0` pada wadah menghapus celah itu, lalu ukuran teks dikembalikan pada kartu.
6. **A** — `overflow: hidden` membuat isi anak terpotong mengikuti lengkung tepi induk, sehingga sudut gambar ikut membulat.
7. **B** — `overflow-wrap: break-word` mematahkan kata tunggal yang sangat panjang agar pindah baris tanpa melebarkan panel; opsi A/C justru memotong dan menyembunyikan informasi, sedangkan `overflow: visible` membiarkan konten meluber.
8. **D** — `fixed` menempelkan kotak pada viewport sehingga tetap terlihat meski halaman digulir; `absolute` mengikuti leluhur diposisikan dan `relative` tetap berada di alur dokumen.
9. **C** — Sticky tetap "lengket" di atas baris yang tergulir; tanpa latar solid, tulisan yang lewat di belakangnya akan tembus terlihat dan mengganggu bacaan.
10. **C** — Nilai `vertical-align` bawaan elemen inline-block adalah *baseline*, sehingga tepi atas kartu tidak sejajar; `vertical-align: top` menyejajarkan tepi atas kotak.
11. **C** — `inline-block` mengalir seperti teks tetapi menerima `width`, `height`, dan padding penuh — tepat untuk chip; `block` memaksa baris baru dan `inline` mengabaikan dimensi serta padding vertikalnya.
12. **A** — 32 px adalah langkah skala 8 px terdekat dari 30 px; memakai 30 px atau membuat langkah baru merusak ritme skala proyek.
13. **B** — Kriteria WCAG 2.2 (2.5.8) *Target Size (Minimum)* menetapkan area sasaran minimal 24 × 24 px; tombol berpading 8 px dengan teks 16 px sudah melampaui ambang itu.
14. **C** — `display: none` mengeluarkan elemen dari layar sekaligus dari alur dokumen, sedangkan `visibility: hidden` (dan `opacity: 0`) hanya menyembunyikan secara visual sambil menyisakan ruangnya.
15. **B** — `max-width: 100%` membiarkan kartu menyusut mengikuti kontainer di layar sempit, sementara `width: 280px` mempertahankan ukuran di layar lebar; `min-width: 280px` justru memaksa melebar dan memunculkan bilah gulir.

### Jawaban Essay

1. **Poin inti:**
   - Padding berada di dalam kotak: ia termasuk "tubuh" elemen, terisi warna latar, dan memperluas area klik/sentuh (tombol besar mudah ditekan).
   - Margin berada di luar border: transparan, tidak ikut warna latar, dan berfungsi menahan jarak antarkomponen (32 px antarkartu, 64 px antarseksi).
   - Konsekuensi 1: latar elemen memenuhi sampai padding, sedangkan margin menyisakan celah transparan di sekeliling kotak.
   - Konsekuensi 2: margin vertikal dua elemen block bertetangga *collapse* (dipakai nilai terbesar), padding tidak; karena itu ritme antarseksi lebih aman distandarkan lewat padding kontainer, bukan margin anak.
   **Skor:** definisi padding/margin 2 + konsekuensi latar 1 + konsekuensi collapse 2 = 5

2. **Poin inti:**
   - a. 240 + 20 + 20 + 2 + 2 = 284 px; angka `width` hanya mengukur konten sehingga padding dan border ditambahkan di luar.
   - b. `width: 284px` untuk mempertahankan lebar visual yang sama; area kontennya kini menyusut menjadi 284 − 40 − 4 = 240 px.
   - c. Satu mode di seluruh proyek mencegah dua sistem hitung bercampur — sumber bug layout paling sunyi karena angka yang tertulis tidak lagi sama dengan lebar yang dirasakan elemen tetangga.
   **Skor:** hitungan benar 2 + nilai baru dan lebar konten 2 + alasan satu mode 1 = 5

3. **Poin inti:**
   - (a) Akar masalah badge adalah *containing block*: `.produk-media` belum diposisikan, sehingga badge `absolute` mencari leluhur diposisikan terdekat dan tidak menemukannya — landasannya jatuh ke halaman.
   - Perbaikan (a): tambahkan `position: relative;` pada `.produk-media`, sehingga `top/right: 8px` diukur dari tepi gambar/kartu.
   - (b) Akar masalah kartu meluber adalah *box model*: pada mode bawaan `content-box`, padding dan border ditambahkan di luar angka `width`.
   - Perbaikan (b): pasang global `*, *::before, *::after { box-sizing: border-box; }` (alternatif darurat: kurangi nilai `width` setara tambahan padding + border).
   **Skor:** diagnosis a 2 + perbaikan a 1 + diagnosis b 1 + perbaikan b 1 = 5

4. **Poin inti:**
   - (a) `<a>` berperilaku `inline`, sehingga `width` dan `height` diabaikan dan padding atas-bawah hanya "melukis" latar tanpa mengubah tinggi kotak.
   - (b) `inline-block` membuat link menerima dimensi dan padding penuh namun tetap mengalir sebaris; `block` juga menerima dimensi tetapi setiap link menempati baris sendiri sehingga navigasi menumpuk vertikal (baru cocok untuk menu vertikal).
   - (c) Dengan dimensi penuh, area sasaran dapat dibesarkan melewati ambang WCAG 2.5.8 (24 × 24 px) — bahkan mendekati anjuran target sentuh yang lebih lega — tanpa mengubah struktur HTML.
   **Skor:** sebab 2 + perbandingan dua pilihan 2 + kaitan WCAG 1 = 5

5. **Poin inti:**
   - (a) 18 px → 16 px (8 × 2), diwujudkan sebagai margin satu arah antarkartu agar tidak terpengaruh *collapse*.
   - (b) 12 px → 16 px (8 × 2) sebagai `margin-bottom` judul kartu; 12 px bukan langkah skala, dan 8 px hanya dipakai untuk koreksi mikro bila dianggap terlalu rapat.
   - (c) 50 px → 48 px (8 × 6) sebagai padding kontainer bagian, bukan margin anak, karena padding ikut latar dan tidak runtuh.
   - Alasan umum: setiap jarak harus jatuh pada satu langkah skala agar halaman terasa berirama dan keputusan jarak bisa dipertanggungjawabkan, bukan tebakan.
   **Skor:** tiga kasus (nilai + langkah + margin/padding) 4,5 + alasan konsistensi 0,5 = 5

### Jawaban Praktikum Lab

1. **Langkah solusi:** wadah `font-size: 0`; kartu `position: relative; display: inline-block; vertical-align: top; width: 240px; padding: 16px; border: 1px solid var(--clr-border); border-radius: var(--radius); font-size: 16px; margin-right: 16px;`; badge `position: absolute; top: 8px; right: 8px; padding: 4px 10px; border-radius: 999px; background: var(--clr-primary); color: #fff; font-size: 12px;`
   **Kriteria penilaian:** mode `border-box` global 25%, posisi badge benar (induk `relative` + anak `absolute`) 30%, deret inline-block tanpa celah (`font-size: 0` + `font-size` eksplisit + `vertical-align: top`) 25%, kerapian skala 8 px dan bukti DevTools 20%

2. **Langkah solusi:** lebar tiap kartu = 300 + (16×2) + (2×2) = 336 px; tiga kartu = 1008 px > 920 px sehingga tidak muat dan baris meluber. Perbaikan: `*, *::before, *::after { box-sizing: border-box; }` (atau turunkan `width` menjadi 264 px bila mode content-box dipertahankan). Setelah perbaikan, tiga kartu 300 px + dua margin 16 px memuat dengan sisa ruang.
   **Kriteria penilaian:** hitungan benar 35%, identifikasi mode content-box sebagai penyebab 25%, perbaikan CSS tepat 25%, bukti tangkapan layar sebelum/sesudah 15%

3. **Langkah solusi:** diagram kotak `.produk-card` menampilkan `width: 280px; padding: 0; border: 1px; margin: 0 16px 32px 0` — lebar di layar tetap 280 px karena border 1 px menaungi dari dalam. Setelah aturan global `box-sizing` dikomentari, kotak membengkak menjadi ± 282 px (280 konten + border kiri-kanan), sehingga kartu baris ketiga turun dan muncul indikator pergeseran baris.
   **Kriteria penilaian:** ketepatan angka diagram kotak 40%, penjelasan perubahan setelah `box-sizing` dinonaktifkan 30%, kelengkapan bukti dan kesimpulan 30%

4. **Langkah solusi:** 14 px → 16 px (8 × 2); 18 px → 16 px (8 × 2) — atau 24 px (8 × 3) bila konteksnya butuh jeda lebih lega; 30 px → 32 px (8 × 4); 42 px → 48 px (8 × 6) karena 48 adalah langkah skala terdekat. Padding dipakai untuk ruang dalam komponen (panel, jarak judul-isi yang ikut latar), margin untuk jarak antar-komponen (mis. jarak panel ke panel dan tombol aksi ke konten di atasnya).
   **Kriteria penilaian:** seluruh nilai jatuh pada skala 8 px 40%, alasan margin vs padding 30%, komentar `8 × n` konsisten 15%, bukti file sebelum/sesudah 15%

5. **Langkah solusi:** sarana bawaan HTML adalah atribut `title` pada elemen yang dipotong, sehingga teks penuh terbaca saat kursor diarahkan (tanpa perilaku dinamis). Ukur tinggi baris di DevTools: bila kurang dari 24 px, tambahkan padding dari skala 8 px agar ambang WCAG 2.5.8 terpenuhi; pastikan `:focus-visible` memberi `outline` yang terlihat saat halaman ditelusuri dengan papan tombol.
   **Kriteria penilaian:** pola tiga properti elipsis utuh 30%, `title` sebagai pengaman informasi 20%, pengukuran dan pemenuhan 24 × 24 px 25%, bukti fokus keyboard 25%

6. **Langkah solusi:** header `position: sticky; top: 0; z-index: 10; background-color: var(--clr-surface);` dan konten tergulir tidak tembus karena latar solid; tombol bantuan `position: fixed; right: 24px; bottom: 24px;` dengan `z-index` kecil. Catatan: sticky layak untuk navigasi atau header tabel yang terus dibutuhkan; fixed dipakai hemat karena menutupi konten; `z-index` dipilih dari skala kecil yang terdokumentasi (1, 2, 10).
   **Kriteria penilaian:** implementasi sticky + latar solid 35%, implementasi fixed 20%, tiga poin catatan 30%, bukti dua posisi gulir 15%

7. **Langkah solusi:** landasan badge adalah `.produk-card` karena satu-satunya leluhur diposisikan; akibatnya badge muncul ± sejauh tinggi media dari puncak kartu, bukan di pojok gambar. Perbaikan: pindahkan `position: relative` ke `.produk-media` sehingga badge mengukur dari tepi gambarnya. *Nearest positioned ancestor*: elemen `absolute` selalu mengambil titik nol koordinat dari leluhur terdekat yang nilainya bukan `static`, dan bila tidak ada, landasannya adalah halaman.
   **Kriteria penilaian:** prediksi benar 25%, perbaikan satu deklarasi 35%, penjelasan mekanisme containing block 25%, bukti sebelum/sesudah 15%

8. **Langkah solusi:** `.arsip { max-height: 320px; overflow-y: auto; }` sehingga daftar menggulir di dalam panel dan halaman utama tidak ikut bergulir; baris nama panjang memakai `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` plus `title`, sedangkan berkas dengan kata sangat panjang memakai `overflow-wrap: break-word` agar potongan kata pindah baris alih-alih melebarkan panel.
   **Kriteria penilaian:** struktur panel dan `max-height` 30%, `overflow-y: auto` tepat 20%, dua teknik pemenggalan beserta penjelasan 30%, halaman tanpa bilah gulir horizontal 20%

9. **Langkah solusi:** tabel masalah → solusi (mis. padding 40 px → 24 px + 16 px; jarak 12/17/28 px → 16/16/24 px; margin antarkartu 40 px + border 24 px → 32 px satu arah; tinggi terkunci → `min-height`). `min-height` dipakai karena konten bisa bertambah panjang — mengunci `height` berisiko memotong teks (kegagalan aksesibilitas). Header tabel jadwal memakai `position: sticky; top: 0;` dengan latar solid.
   **Kriteria penilaian:** tabel masalah → solusi 30%, konsistensi skala 8 px 25%, `min-height` beserta alasan 20%, sticky header 15%, bukti visual 10%

10. **Langkah solusi:** badge `inline` mengabaikan `width: 120px` sehingga lebarnya hanya selebar teks dan padding vertikalnya tidak mendorong baris; badge `block` selebar induk dan memaksa baris baru; badge `inline-block` tepat 120 px dan mengalir sebaris. Dua `inline-block` berdampingan menyisakan celah dari spasi HTML; celah hilang dengan `font-size: 0` pada wadah dan `font-size` eksplisit pada badge. Kesimpulan: chip kategori memakai `inline-block`.
   **Kriteria penilaian:** tiga kotak berjalan sesuai nilai display 30%, tabel lebar hasil pengukuran DevTools 25%, temuan celah + solusi `font-size: 0` 25%, kesimpulan pemilihan 20%

---

## Bab 06 — Flexbox untuk Web Layout

### Kunci Pilihan Ganda

1. **B** — `flex-direction` menentukan arah sumbu utama (`row` atau `column`); `justify-content` dan `align-items` hanya membagi ruang pada sumbu yang sudah ditentukan itu.
2. **D** — `wrap-reverse` mengizinkan penekukan dengan urutan baris terbalik; `wrap` menekuk normal, `nowrap` memaksa satu baris, dan `column-reverse` adalah nilai `flex-direction`.
3. **A** — `space-evenly` membagi semua celah sama besar termasuk dua celah di tepi; `space-around` menyisakan ruang tepi setengah ukuran, sedangkan `space-between` menempelkan item pertama dan terakhir ke tepi.
4. **C** — `flex-grow` membagi **sisa ruang** setelah basis semua item dihitung: bobot 2 memperoleh dua kali porsi, bukan dua kali lebar total kartu.
5. **B** — Di dalam flex `column`, auto margin menyerap sisa ruang; `margin-top: auto` mendorong harga ke dasar kartu sehingga harga delapan kartu berbaris sejajar meski deskripsinya berbeda panjang.
6. **A** — Ikon dibiarkan berukuran tetap, sedangkan elemen teks diberi `flex: 1` agar memakai seluruh ruang sisa — itulah pola *media object*.
7. **C** — `justify-content` adalah properti flex container; menulisnya pada elemen anak tidak berpengaruh karena anak mengatur dirinya lewat `flex`, `align-self`, atau `order`.
8. **D** — Pada `flex-direction: column`, sumbu silang bersifat horizontal sehingga `align-items: center` menengahkan secara horizontal; `justify-content` justru bekerja vertikal pada pola itu.
9. **A** — floor((976 + 24) / (250 + 24)) = floor(1000 / 274) = 3 kartu; sisa ruang 226 px tidak cukup untuk kartu keempat.
10. **B** — `row-gap` dan `column-gap` memisahkan jarak antar-baris dari jarak antar-kolom, sedangkan `gap` tunggal menerapkan nilai yang sama untuk keduanya.
11. **C** — Katalog dengan jumlah kolom pasti dan perataan antar-baris adalah kebutuhan dua dimensi; Grid mengatur baris dan kolom sekaligus, sementara flexbox mengatur setiap baris secara lokal.
12. **D** — Nilai default `order` adalah 0; angka kecil mendahului angka besar, tetapi urutan dokumen tetap menentukan urutan fokus dan pembacaan *assistive technology*.
13. **A** — `max-width` membatasi panjang baris supaya mata tidak menyapu teks sepanjang monitor lebar; tanpa batasan itu satu paragraf di monitor besar bisa memuat sekitar 160 karakter per baris.
14. **B** — `align-items: center` mematikan `stretch` sehingga kartu tidak diregangkan sama tinggi; kembalikan ke `stretch` dan dorong harga dengan `margin-top: auto` untuk menyelesaikan keduanya sekaligus.
15. **C** — Pendekatan *mobile first*: satu CTA yang jelas lebih mudah dipahami di layar kecil, sedangkan link tambahan cukup tampil sebagai link teks agar tidak berebut perhatian.

### Jawaban Essay

1. **Poin inti:**
   - Flexbox satu dimensi karena mengatur pembagian ruang pada satu arah saja: satu baris (row) atau satu kolom (column).
   - Masalah `float`: fitur itu awalnya dibuat untuk membiarkan teks mengalir di sekitar gambar, sehingga dipakai menyusun layout ia rawan — footer bisa "jatuh" dan butuh pembersihan.
   - Masalah `inline-block`: memunculkan celah whitespace antartag dan menuntut trik `font-size: 0` serta `vertical-align`.
   - Flexbox menyelesaikan keduanya: wadah membagi ruang secara otomatis, `gap` bebas margin ganda, dan item dapat sejajar serta menekuk tanpa media query.
   **Skor:** konsep satu dimensi 2 + masalah float 1,5 + masalah inline-block 1,5 = 5

2. **Poin inti:**
   - Margin per anak menyisakan jarak di tepi terluar dan menuntut pengecualian seperti `:last-child`; `gap` hanya menyisipkan jarak **di antara** item sehingga tepi wadah tetap bersih.
   - Saat baris menekuk, margin juga menggantung pada item yang pindah baris, sedangkan `gap` mengikuti penekukan dengan tetap rapi.
   - `row-gap` mengatur jarak antar-baris dan `column-gap` mengatur jarak antar-kolom; `gap` tunggal memakai nilai yang sama untuk keduanya.
   - Konsekuensinya, kebiasaan `font-size: 0` dari era inline-block tidak diperlukan lagi.
   **Skor:** beda margin vs gap 2 + perilaku saat menekuk 1,5 + row-gap/column-gap 1,5 = 5

3. **Poin inti:**
   - a. `flex: 1 1 160px` = grow 1, shrink 1, basis 160 px; `flex: 0 1 120px` = tidak tumbuh, boleh menyusut, basis 120 px.
   - b. Saat wadah longgar: basis dihitung lebih dulu, lalu sisa ruang dibagi proporsional hanya kepada item yang `grow` > 0; kolom samping tetap 120 px. Saat wadah menyempit: kedua item menyusut (shrink 1) secara proporsional hingga batas ukuran minimumnya.
   - c. `flex-basis` mengesampingkan `width` di sepanjang sumbu utama, sehingga `width: 300px` pada `.kolom-konten` diabaikan dan item tetap mulai dari basis 160 px.
   **Skor:** arti kedua nilai 2 + perilaku longgar/sempit 2 + flex-basis mengalahkan width 1 = 5

4. **Poin inti:**
   - Flexbox bersifat satu dimensi: setiap baris flex diatur secara lokal dan tidak "berkomunikasi" dengan baris lain, sehingga ketika delapan kartu tidak terbagi rata (mis. 3-3-2) baris terakhir merapat ke kiri dan menyisakan ruang kosong.
   - Setelah item menekuk, wadah memiliki beberapa baris flex dan `align-items` kini mengatur peletakan antar-baris di ruang sisa, bukan lagi per item dalam satu baris; jarak antar-baris lebih jelas diatur `row-gap`.
   - Perataan kolom antarbaris (jumlah kolom pasti dan rata) adalah kebutuhan dua dimensi — di situlah Grid (`grid-template-columns`) lebih tepat, sesuai tabel keputusan pada bab.
   **Skor:** sifat satu dimensi 2 + peran align-items setelah wrap 1,5 + keputusan pindah ke Grid 1,5 = 5

5. **Poin inti:**
   - Aturan yang dipilih: `.hero { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; min-height: 360px; text-align: center; }` (boleh tanpa `min-height` bila tinggi bukan syarat).
   - Karena `flex-direction: column`, sumbu utama menjadi vertikal sehingga `justify-content` bekerja vertikal (menengahkan atas-bawah), sedangkan sumbu silanghorizontal sehingga `align-items` yang menengahkan kiri-kanan.
   - Keputusan keterbacaan: beri `max-width` pada subjudul (praktisnya 640 px) supaya baris teks tidak membentang melelahkan mata pada monitor lebar.
   - Cukup satu CTA utama; link tambahan ditampilkan sebagai link teks agar perhatian tidak terpecah.
   **Skor:** daftar properti tepat 2 + penjelasan peran sumbu 2 + keputusan keterbacaan 1 = 5

### Jawaban Praktikum Lab

1. **Langkah solusi:** markup memakai `<a class="site-nav-brand">` dan satu pembungkus `<div class="site-nav-kanan">` berisi `<ul>` menu plus `<a>` keranjang; CSS:

```css
.site-nav { display: flex; flex-wrap: wrap; align-items: center;
            justify-content: space-between; gap: 16px; }
.site-nav-kanan { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; }
```

Penekukan dua lapis: kelompok kanan turun sebagai satu blok lebih dulu, lalu link menu ikut menekuk di dalamnya sehingga baris kedua tidak pincang.

   **Kriteria penilaian:** struktur dua anak langsung 30%, `space-between` + `flex-wrap` + `gap` 30%, bukti tiga ukuran jendela 25%, penjelasan pengelompokan 15%

2. **Langkah solusi:** `.hero { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; min-height: 360px; text-align: center; }`, CTA diberi `:hover` dan `:focus-visible` dengan `outline` yang terlihat, subjudul diberi `max-width: 640px` agar barisnya tidak membentang.

   **Kriteria penilaian:** flex column + dua sumbu 40%, `min-height` dan efeknya 15%, keputusan keterbacaan serta fokus 25%, bukti 20%

3. **Langkah solusi:** properti yang hilang `flex-wrap: wrap` pada `.produk-row`; nilai yang salah `flex: 0 0 250px` (shrink 0) seharusnya `flex: 0 1 250px`. Pada 360 px: `0 0` memaksa kartu tetap 250 px dan menolak menekuk sehingga muncul bilah gulir horizontal; `0 1` + `wrap` membuat kartu menyusut proporsional dan turun baris dengan rapi.

   **Kriteria penilaian:** identifikasi dua temuan 30%, perbaikan CSS 30%, tabel perbandingan 360 px 25%, kalimat pencegahan 15%

4. **Langkah solusi:** `align-items: center` menggantikan nilai default `stretch` sehingga kartu tidak lagi diregangkan setinggi baris; kartu menjadi sependek isinya lalu ditengahkan — itulah kesan bergelombang. Perbaikan: hapus `align-items: center` dan tambahkan `margin-top: auto` pada `.produk-harga` supaya harga menempel dasar kartu. `gap: 8px` di dalam kartu menjaga jarak antar elemen internal (gambar, nama, kategori, harga) tetap konsisten, terpisah dari urusan tinggi kartu.

   **Kriteria penilaian:** reproduksi dan penjelasan 30%, perbaikan 35%, verifikasi harga sejajar 20%, peran `gap` 15%

5. **Langkah solusi:** nilai komputasi yang dicatat (contoh): `.site-nav` → `display: flex`, `flex-wrap: wrap`, `gap: 16px`; `.site-nav-kanan` → `gap: 24px`; `.produk-row` → `display: flex`, `flex-wrap: wrap`, `gap: 24px`; anak `.produk-row` → `flex-basis: 250px`. Live edit: `nowrap` membuat delapan kartu dipaksa satu baris dan muncul bilah gulir horizontal; `justify-content: center` pada `.produk-row` membuat baris terakhir (yang hanya berisi 2 kartu) tertengah, padahal sebelumnya merapat kiri.

   **Kriteria penilaian:** kelengkapan tabel nilai komputasi 40%, akurasi hasil live edit 30%, bukti tangkapan layar 30%

6. **Langkah solusi:** versi Bab 5 memakai `.daftar-produk { font-size: 0; }` dan `.produk-card { display: inline-block; vertical-align: top; margin: 0 16px 32px 0; }`; versi flex memakai `.produk-row { display: flex; flex-wrap: wrap; gap: 24px; }` dan `.produk-card { flex: 0 1 250px; }`. Tiga hal yang berubah: (1) celah whitespace hilang tanpa trik `font-size: 0`; (2) jarak diatur `gap` tanpa margin kanan-bawah dan tanpa sisa jarak di tepi; (3) `vertical-align` dan masalah baseline tidak lagi diperlukan karena `stretch` default.

   **Kriteria penilaian:** dua versi kode 30%, tabel perbandingan 30%, tiga perubahan teridentifikasi 25%, kesimpulan 15%

7. **Langkah solusi:** `order` hanya mengubah **urutan visual**; urutan dokumen HTML — dan karena itu urutan fokus Tab serta pembacaan *screen reader* — tetap asli, sehingga pengguna keyboard bisa "melompat" tidak sesuai tampilan. Aman dipakai untuk penyesuaian kecil (satu kolom yang diprioritaskan) selama urutan dokumen tetap logis. Fokus diperlihatkan dengan `a:focus-visible { outline: 3px solid var(--clr-primary); outline-offset: 2px; }`.

   **Kriteria penilaian:** implementasi `order` 25%, catatan urutan fokus vs visual 30%, fokus terlihat 25%, kesimpulan 20%

8. **Langkah solusi:** `.chip-row { display: flex; flex-wrap: wrap; gap: 8px; }` dan `.chip { padding: 8px 16px; border: 1px solid var(--clr-border); border-radius: 999px; }`. Pada 360 px chip menekuk menjadi beberapa baris tanpa bilah gulir horizontal. `gap` lebih tepat karena jaraknya hanya hadir di antara chip dan tidak menyisakan margin pada tepi deret, sehingga celah tetap benar ketika chip berpindah baris.

   **Kriteria penilaian:** `flex-wrap` + `gap` 35%, area sentuh dan konsistensi skala 8 px 25%, uji layar sempit 25%, penjelasan `gap` 15%

9. **Langkah solusi:** lebar konten baris W = lebar jendela − 48 px (padding dua sisi); jumlah kartu ≈ floor((W + 24) / (250 + 24)). Prediksi: 1280 → W 1232 → floor(1256/274) = 4 kartu; 1024 → W 976 → floor(1000/274) = 3 kartu; 768 → W 720 → floor(744/274) = 2 kartu. Verifikasi di browser; bila ada selisih, penyebab umum adalah pembulatan ke bawah dan pengukuran lebar konten yang tidak persis. Komposisi berubah ketika lebar turun melewati kelipatan basis + gap.

   **Kriteria penilaian:** rumus dan tiga prediksi 40%, hasil pengukuran 25%, penjelasan selisih 20%, bukti 15%

10. **Langkah solusi:** `.dasbor-row { display: flex; gap: 24px; } .kartu { flex: 1; }` membuat tiga kartu membagi ruang secara merata; memberi satu kartu `flex: 2` membuatnya memperoleh dua kali porsi sisa ruang sehingga lebih lebar dari dua kartu lain (bukan berarti dua kali lebar total). `gap` hanya menambah jarak antar-kartu tanpa sisa ruang di tepi baris. `flex: 1` lebih tepat ketika lebar kartu harus mengikuti ruang secara proporsional dan responsif, sedangkan lebar tetap cocok untuk komponen yang ukurannya memang harus stabil.

   **Kriteria penilaian:** implementasi `flex: 1` 35%, pengukuran proporsi setelah `flex: 2` 25%, pembuktian `gap` 15%, kesimpulan 25%

---

## Bab 07 — CSS Grid dan Responsive Web Design

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

---

## Bab 09 — Pengenalan Bootstrap 5

### Kunci Pilihan Ganda

1. **C** — Navbar, kartu, badge, dan alert adalah komponen siap pakai; Layout berisi container dan grid, Utilities berisi kelas satu-tujuan, dan Helpers berisi kelas bantu seperti badge berwarna penuh serta clearfix.
2. **A** — Ikon tidak termuat di dalam file CSS inti Bootstrap, melainkan disediakan sebagai pustaka terpisah bernama Bootstrap Icons versi 1.11.3 yang wajib punya link tersendiri di setiap halaman.
3. **B** — Kelas warna Bootstrap 5.3 mengonsumsi variabel tema `--bs-primary-rgb`; mengubah nilainya ke RGB indigo (79, 70, 229) menggeser `text-primary`, `bg-primary`, dan badge ke identitas Tokosaya.
4. **D** — Lebar maksimum `.container` mengikuti breakpoint: 540/720/960/1140/1320 px mulai 576/768/992/1200/1400 px, sehingga pada 1400 px batasnya 1320 px.
5. **A** — Pola nama utility dibaca properti–sisi–breakpoint–nilai: `p` = padding, tanpa huruf sisi berarti keempat sisi, `lg` menandai ambang 992 px yang berlaku ke atas, dan `4` adalah skala spasi.
6. **B** — `col-lg-3` menindih tiga dari dua belas garis sehingga terbentuk empat kartu per baris mulai 992 px; delapan kartu menghasilkan dua baris rapi 4 + 4.
7. **C** — `mx` menunjuk margin kiri-kanan dan `auto` membuat keduanya terbagi otomatis, sehingga elemen blok tampil terletak di tengah wadahnya.
8. **D** — Kelompok Content berisi reboot, tipografi, tabel, gambar, dan kode; container serta grid masuk Layout, navbar dan kartu masuk Components, sedangkan `mb-3` dan `text-center` masuk Utilities.
9. **A** — Gutter diimplementasikan sebagai padding pada kolom yang dikompensasi margin negatif baris; tanpa `.row`, kompensasi itu tidak ada sehingga kolom kehilangan penyelajanan dan lebar kolom tidak tersusun sebagaimana mestinya.
10. **C** — Gejala "tampil polos" berarti stylesheet pustaka tidak terpakai; penyebab paling lazim adalah link CDN salah eja, gagal diambil, atau urutannya tertukar dengan `css/style.css`, sehingga pemeriksaan di panel Network adalah langkah diagnosis yang tepat.
11. **D** — Elemen `h3` menjaga struktur kepala tetap semantik dan terbaca pembaca layar, sementara kelas `h5` hanya mengubah ukuran visualnya; menulis `div` besar yang terlihat seperti judul merusak aksesibilitas.
12. **B** — Tombol bawaan mewarnai dirinya secara statis di dalam file pustaka, berbeda dari kelas warna semantik yang mengonsumsi variabel tema; karena itu identitas tombol dibentuk kelas kustom yang disandingkan dengan kelas `btn`.
13. **A** — Ketika pola yang sama berulang di banyak elemen, aturan bab ini menyarankan mengangkatnya menjadi kelas kustom berpola blok-elemen; utility tetap dipakai untuk gaya umum sekali pakai, dan menimpa file pustaka selalu dihindari.
14. **D** — Framework bermanfaat untuk pola yang berulang dan tenggat ketat; proyek satu halaman dengan desain khas dan tenggat longgar justru lebih tepat ditulis dengan HTML/CSS murni berbasis token.
15. **C** — Empat puluh tampilan serupa, tim pemula, tenggat tiga minggu, dan identitas kampus yang kuat persis pola keputusan pada studi kasus: Bootstrap menyuplai pola layout berulang sementara lapisan token menjaga identitas, semuanya tanpa JavaScript.

### Jawaban Essay

1. **Poin inti:**
   - Layout: container dan grid system, yaitu inti pengaturan lebar dan penyusunan halaman.
   - Content: reboot (normalisasi gaya bawaan browser), tipografi, tabel, gambar, dan kode.
   - Forms: gaya elemen isian, dibangun penuh pada Bab 11.
   - Components: komponen siap pakai seperti navbar, kartu, badge, dan alert.
   - Helpers: kelas bantu kombinasi seperti badge berwarna penuh dan clearfix.
   - Utilities: kelas kecil satu-tujuan untuk jarak, tampilan, perataan, dan warna.
   - Pemetaan kebutuhan: (a) pembungkus lebar maksimum → Layout (`.container`); (b) normalisasi gaya bawaan browser → Content (reboot); (c) kelas satu-tujuan pengatur jarak → Utilities (`mb-3`, `p-4`); (d) navbar → Components.
   - Bootstrap Icons tidak berada di dalam file CSS inti, melainkan pustaka terpisah (versi 1.11.3) yang dipasang lewat link CDN tersendiri dan dipanggil dengan pola kelas `bi bi-nama-ikon`.
   **Skor:** 3 (enam kelompok dijelaskan) + 4 (pemetaan empat kebutuhan) + 2 (posisi Bootstrap Icons) + 1 (kerapian uraian) = 10

2. **Poin inti:**
   - Kontrak tiga lapis: `container` membungkus dan mengendalikan lebar maksimum, `row` menyusun kolom agar sejajar sekaligus menjadi flex container, dan `col-*` berisi konten seraya menerima padding yang membentuk gutter.
   - Kolom wajib anak langsung `row` karena gutter diimplementasikan sebagai padding kolom yang dikompensasi margin negatif baris; di luar `row`, kompensasi itu hilang sehingga lebar kolom dan penyelajanan tidak lagi benar.
   - `col-12` berlaku di semua ukuran (tanpa awalan breakpoint), `col-md-6` mulai 768 px ke atas, dan `col-lg-3` mulai 992 px ke atas; kelas tanpa awalan menjadi dasar dan tiap breakpoint yang lebih besar menimpanya bila kelasnya ditulis.
   - Pada 500 px: hanya `col-12` yang berlaku → satu kartu per baris (setiap kartu penuh).
   - Pada 800 px: `col-md-6` berlaku → dua kartu per baris.
   - Pada 1100 px: `col-lg-3` berlaku → empat kartu per baris.
   **Skor:** 3 (tiga lapis kontrak) + 3 (alasan kolom harus di dalam row) + 3 (perilaku pada tiga lebar uji beserta jumlah kartu per baris) + 1 (penegasan sifat mobile-first) = 10

3. **Poin inti:**
   - Aturan kaskade: bila dua aturan ber-*specificity* setara bertabrakan, aturan yang termuat paling belakang yang menang; karena itu `css/style.css` harus berada setelah stylesheet Bootstrap.
   - Urutan baku pada starter template: Bootstrap → Bootstrap Icons → Google Fonts → `css/style.css`; Google Fonts diletakkan di antara keduanya karena hanya memuat definisi font.
   - Mekanisme pertama overlay adalah urutan pemuatan berkas: kelas kustom seperti `btn-tokosaya`, `hero-cta`, `produk-card`, dan `badge-unggulan` menang atas rupa bawaan pada specificity setara.
   - Mekanisme kedua adalah penyesuaian variabel CSS: kelas warna Bootstrap 5.3 mengonsumsi `--bs-primary-rgb`, sehingga mengubah nilainya ke 79, 70, 229 menggeser `text-primary`, `bg-primary`, dan badge ke indigo tanpa menyentuh file pustaka.
   - Bila urutan link tertukar, seluruh gaya identitas Tokosaya tertelan gaya bawaan pustaka: tombol kembali biru, badge kembali ke palet Bootstrap, dan tipografi kustom tidak terlihat.
   - Kedua mekanisme itu menjaga pustaka tetap utuh sehingga pemutakhiran Bootstrap kelak tidak merusak berkas proyek.
   **Skor:** 2 (hukum kaskade) + 1 (urutan link baku) + 3 (mekanisme urutan pemuatan) + 2 (mekanisme variabel `--bs-primary-rgb`) + 2 (akibat bila urutan tertukar) = 10

4. **Poin inti:**
   - Buku ini memakai hanya file CSS Bootstrap lewat CDN, tanpa `bootstrap.bundle`; sebabnya mata kuliah dan proyek berpijak pada HTML/CSS murni tanpa JavaScript, dan keputusan itu ditandai komentar di setiap `head` sebagai jejak keputusan, bukan kelalaian.
   - Konsekuensinya komponen yang aslinya interaktif—menu lipat, modal, carousel, accordion—hanya dipelajari dalam bentuk markup, kelas visual, dan status statis pada Bab 10.
   - Navigasi mobile disiasati dengan markup navbar Bootstrap yang dibiarkan selalu terlihat, dibungkus kelas flexbox seperti `d-flex flex-row flex-wrap gap-2` agar link menyusun baris dan dapat melentur di layar kecil; Bab 10 melanjutkan dengan pola navigasi mobile berbasis CSS kustom.
   - Risiko siasat itu: baris navigasi bisa menjadi panjang dan menurunkan kenyamanan karena semua tautan selalu tampil, serta tidak ada perilaku buka-tutup yang biasa diharapkan pengguna.
   - Peringanan: memakai `flex-wrap` dan `gap` agar tautan tetap menyusun rapi, membatasi jumlah tautan utama, dan secara jujur menjelaskan kepada pemilik UMKM bahwa perilaku lipat memerlukan JavaScript di luar cakupan mata kuliah—sementara secara industri tim profesional biasanya memang memuat bundle tersebut.
   **Skor:** 3 (batas keputusan dan alasannya) + 3 (konsekuensi bagi komponen interaktif) + 2 (siasat navigasi mobile) + 2 (satu risiko dan satu cara meringankannya) = 10

5. **Poin inti:**
   - Kriteria keputusan yang bisa dipakai, misalnya: jumlah halaman dan pola berulang, ukuran serta keterampilan tim, tenggat, kekuatan identitas merek, dan kebutuhan perilaku interaktif.
   - Bootstrap 5.3.3 via CDN + token kustom unggul pada jumlah halaman dan pola berulang (grid serta utility mempercepat), pada keterampilan pemula (kelas terbaca manusia dan dokumentasi tuntas), pada tenggat pendek, dan pada pemeliharaan tanpa alat pembangun karena cukup link CDN.
   - Kelemahan yang harus diakui: rupa bawaan cenderung seragam dan berkas gaya lebih besar dari kebutuhan, sehingga identitas merek menuntut lapisan overlay kustom.
   - Tailwind CSS utility-first memberi kebebasan bentuk besar karena kelasnya atomik dan tidak menyediakan komponen berantai, tetapi markup menjadi ramai, kurva awal lebih curam, dan pemakaian penuh lazim ditemani alat perakit.
   - Pada kondisi soal (delapan halaman berpola sama, dua mahasiswa pemula paruh waktu, dua minggu, identitas kuat, interaksi minimal) pilihan yang paling masuk akal adalah **Bootstrap + lapisan token kustom**.
   - Trade-off yang diterima secara sadar: seluruh identitas warna dan huruf bergantung pada lapisan kustom sehingga bila overlay dihapus, tampilan kembali seragam seperti bawaan pustaka; biaya ini ditutup dengan mendokumentasikan token pada satu berkas `style.css`.
   **Skor:** 3 (minimal tiga kriteria keputusan dipakai) + 3 (evaluasi kedua pilihan secara berimbang) + 2 (keputusan akhir disertai alasan yang sesuai kondisi soal) + 2 (satu trade-off diakui secara sadar) = 10

### Jawaban Praktikum Lab

1. **Langkah solusi:** Empat link berurutan: Bootstrap 5.3.3 (`cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`), Bootstrap Icons 1.11.3, Google Fonts Poppins + Inter, lalu `css/style.css` paling belakang. Komentar `<!-- Tanpa bootstrap.bundle (JavaScript di luar cakupan mata kuliah) -->` disimpan di `head`. Verifikasi di tab Network: kedua permintaan CDN berstatus 200, dan tombol uji tampil bergaya biru bawaan.
   **Kriteria penilaian:** empat link lengkap dan berurutan benar 35%; meta viewport serta komentar penanda ada 20%; bukti status permintaan di tab Network 25%; dua kalimat alasan urutan link tepat 20%.

2. **Langkah solusi:** `<section class="container py-5">` berisi `h2` lalu `<div class="row g-4">` dengan empat `<article class="col-12 col-sm-6 col-lg-3 text-center">`; setiap artikel memuat `<i class="bi bi-tags fs-1 text-primary" aria-hidden="true"></i>`, judul `h3`, dan paragraf berkelas `text-body-secondary`. Hasil: 1 kartu per baris pada 375 px, 2 kartu pada 768 px, dan 4 kartu pada 1200 px.
   **Kriteria penilaian:** struktur container → row → col benar 30%; kelas kolom menghasilkan 1/2/4 kartu per baris 30%; Bootstrap Icons termuat dan ikon dekoratif memakai `aria-hidden` 20%; tanpa satu baris CSS kustom 20%.

3. **Langkah solusi:** Tiga cacatnya: (1) nama ikon `bi-tag` tidak tersedia sehingga ikon tampil sebagai kotak kosong—perbaikan: pakai `bi-tags`; (2) kartu ketiga memakai `col-md-5` sehingga jumlah garis baris itu menjadi 4 + 4 + 5 = 13, melewati penggaris 12—akibatnya kartu ketiga terlempar ke baris berikutnya, dan perbaikannya mengubahnya menjadi `col-md-4` agar tiga kartu duduk sebaris; (3) kelas `mb-6` tidak ada pada skala spasi Bootstrap yang berkisar 0–5, sehingga jarak bawah judul seksi hilang secara senyap—perbaikan: pakai `mb-4`. Versi perbaikan mempertahankan `row g-4`, `text-center`, `fs-1`, dan `text-body-secondary`; kalimat penjelasan menyebut bahwa kesalahan eja kelas tidak menimbulkan galat tampilan apa pun (efek senyap), karena browser hanya mengabaikan kelas yang tidak dikenal.
   **Kriteria penilaian:** ketiga cacat diidentifikasi dan dijelaskan dengan dampak 45%; penjelasan penjumlahan garis 12 pada cacat `col-md-5` 20%; versi perbaikan berfungsi pada 768 px dan 1200 px 25%; kalimat penjelasan efek senyap ejaan kelas 10%.

4. **Langkah solusi:** Tabel hasil ukur: 375 px → 100%; 600 px → 540 px; 800 px → 720 px; 1000 px → 960 px; 1300 px → 1140 px; 1500 px → 1320 px. Paragraf: `.container` dipakai untuk isi yang dibaca manusia seperti seksi utama dan kartu produk karena baris teks tetap nyaman pada lebar maksimum, sedangkan `.container-fluid` dipakai untuk bilah yang memang menempel kiri-kanan seperti footer gelap atau bilah pengumuman.
   **Kriteria penilaian:** enam nilai pengukuran benar 45%; halaman uji memuat kedua jenis container 15%; paragraf pertimbangan relevan dan menyebut contoh elemen 25%; pemakaian panel Computed sebagai bukti 15%.

5. **Langkah solusi:** Gaya kustom grid diganti markup `<ul class="row g-4">` dengan empat `<li class="col-12 col-sm-6 col-xl-3">` (kartu tetap boleh memakai kelas kustom `stat-kartu-item` untuk identitas). Hasil visual sama: 1 kolom di bawah 576 px, 2 kolom mulai `sm`, 4 kolom mulai `xl`. Perbandingan: versi Bootstrap lebih ringkas karena tiga blok media query hilang, sedangkan versi CSS kustom lebih menjaga identitas karena seluruh ukuran memakai token `--space-unit` dan `--radius`; pada refactor ini identitas tetap aman karena kelas kustom dipertahankan sebagai pembungkus tiap kartu.
   **Kriteria penilaian:** markup hasil refactor benar dan berfungsi 40%; hasil visual sama pada tiga lebar uji 25%; perbandingan tiga sampai lima kalimat argumentatif 25%; kelas kustom identitas tidak hilang percuma 10%.

6. **Langkah solusi:** Pemeriksaan: (a) satu `h1` pada hero/latar utama dengan `h2` untuk setiap section dan `h3` untuk judul kartu; (b) setiap ikon dekoratif memakai `aria-hidden="true"` karena makna dibawa teks di sebelahnya; (c) `alt` gambar kartu menyebut nama produk, misalnya "Keyboard Mekanis KX-210"; (d) badge tetap memuat teks (Best Seller, Tersedia, Stok Terbatas, Baru) dan memakai kombinasi `text-bg-*` agar warna teks otomatis kontras; (e) tautan footer memakai `link-light` di atas `.footer-tokosaya` gelap; (f) teks tautan navigasi deskriptif (Beranda, Katalog, Tentang, Kontak, Keranjang). Perbaikan lazim: menambahkan `aria-hidden` pada ikon yang belum ditandai atau memperbaiki `alt` yang masih generik.
   **Kriteria penilaian:** enam poin diperiksa dengan status dan bukti 40%; satu perbaikan benar dan diuji 30%; screenshot sebelum-sesudah 20%; dua kalimat penjelasan keterkaitan aksesibilitas 10%.

7. **Langkah solusi:** `latihan-bootstrap/hero.html` memuat starter template, lalu `<header class="hero text-center py-5">` berisi `container`, `h1.hero-title.display-5.fw-bold.mb-3`, `p.lead.mb-4`, dan `a.btn.hero-cta.px-4`. Pada `css/style.css`: token Tokosaya di `:root`, `.hero { background: linear-gradient(135deg, var(--clr-primary) 0%, var(--clr-primary-dark) 100%); color: #FFFFFF; }`, `.hero-cta { background-color: var(--clr-accent); border-color: var(--clr-accent); color: var(--clr-dark); font-weight: 600; }`, dan `--bs-primary-rgb: 79, 70, 229`. Kelas Bootstrap yang dipertahankan: `py-5`, `display-5`, `fw-bold`, `mb-3`, `lead`, dan `px-4`, karena semuanya urusan ukuran dan jarak sementara warna serta latar berasal dari token.
   **Kriteria penilaian:** hero tampil sesuai rancangan di 375 px dan 1200 px 30%; seluruh warna dari token 25%; penyelarasan `--bs-primary-rgb` ada 20%; daftar kelas Bootstrap yang dipertahankan beserta alasan 25%.

8. **Langkah solusi:** Setiap kartu ditulis `<div class="col-12 col-md-6 col-lg-4"><article class="card produk-card h-100">` dengan `<div class="card-body d-flex flex-column">`, badge di awal, harga berkelas `produk-harga`, deskripsi berkelas `card-text small`, dan tombol `<a class="btn btn-tokosaya mt-auto">Lihat Detail</a>`. Badge memakai `text-bg-warning` (Stok Terbatas), `badge-unggulan` (Best Seller), dan `text-bg-primary` (Baru). Dengan `h-100` tinggi kartu mengikuti tinggi baris dan `mt-auto` menekan tombol ke dasar kartu, sehingga ketiga tombol duduk pada garis dasar yang sama pada 1200 px.
   **Kriteria penilaian:** `h-100`, `d-flex flex-column`, dan `mt-auto` dipakai benar 40%; badge tiga varian tampil sesuai 20%; bukti tombol sejajar pada tangkapan layar 1200 px 25%; kalimat kesimpulan tentang `mt-auto` 15%.

9. **Langkah solusi:** Nilai terhitung yang diharapkan: badge `text-bg-primary` berwarna indigo Tokosaya (RGB 79, 70, 229) karena kelas warna semantik Bootstrap mengonsumsi `--bs-primary-rgb`; tombol `btn-tokosaya` juga indigo karena kelas kustom memakai token `--clr-primary`; sedangkan tombol `btn btn-primary` tetap biru bawaan pustaka. Penjelasan: rupa tombol bawaan dikomposisi statis di dalam file pustaka sehingga variabel tema tidak menggesernya—itulah alasan bab ini membentuk tombol identitas sebagai kelas kustom yang disandingkan dengan kelas `btn`.
   **Kriteria penilaian:** tabel tiga nilai warna terhitung benar 40%; bukti dari panel Computed 20%; dua kalimat penjelasan tepat 30%; halaman uji memuat ketiga contoh 10%.

10. **Langkah solusi:** Dengan koneksi diputus, link CDN gagal diambil sehingga gaya pustaka tidak berlaku: tipografi kembali ke font fallback sistem, tombol dan badge tampil polos tanpa warna maupun padding bawaan, dan kolom kartu tidak lagi berjajar karena kelas `col-*` tidak memiliki aturan. Dua alternatif mitigasi: (1) mengunduh berkas CSS pustaka dan menyimpannya di folder proyek sebagai berkas lokal; (2) tetap memakai CDN namun menyiapkan salinan lokal hanya untuk keperluan demo. Untuk kebutuhan demo kelas, mitigasi salinan lokal lebih tepat karena halaman tetap tampil utuh tanpa jaringan, dengan konsekuensi berkas pustaka harus ikut disimpan dan dijaga versinya di dalam proyek (dan pemutakhiran versi dilakukan manual).
   **Kriteria penilaian:** tangkapan layar kondisi tanpa koneksi 20%; catatan tiga hal yang berubah benar 30%; dua mitigasi disusun 20%; evaluasi pemilihan mitigasi disertai alasan dan konsekuensi penyimpanan berkas 30%.

---

## Bab 10 — Komponen Bootstrap

### Kunci Pilihan Ganda

1. **B** — Komponen adalah potongan antarmuka yang sudah dikemas lengkap: struktur *markup* standar, kelas-kelas gaya, dan aturan tampilan di berbagai ukuran layar, sehingga tinggal disusun sesuai resep dokumentasi.
2. **C** — Salah satu dari tiga alasan bab ini adalah konsistensi antarhalaman: karena halaman A dan B memakai kelas kartu yang sama, tampilannya otomatis mirip tanpa pengawasan tambahan.
3. **A** — Tanpa paket JavaScript, menu `navbar-nav` yang tidak dibungkus tombol pembuka selalu tampil; di bawah 992 piksel susunannya menumpuk vertikal di bawah merek.
4. **D** — Tabel pewarnaan semantik Tokosaya memetakan "Stok Terbatas" ke `text-bg-danger` karena bermakna kritis dan mendesak.
5. **B** — Konvensi proyek: Bootstrap 5.3.3 CSS dulu, lalu Bootstrap Icons 1.11.3, lalu Google Fonts, dan `css/style.css` paling akhir supaya aturan kustom punya kesempatan menimpa gaya Bootstrap tanpa `!important`.
6. **A** — `navbar-expand-lg` membuat menu mendatar sejak 992 piksel, dan `ms-auto` mendorong kelompok menu ke sisi kanan sehingga merek tetap di kiri pada satu baris.
7. **C** — Halaman aktif dan tombol `disabled` bukan tautan tujuan; memakai `span` menghindari janji navigasi palsu kepada pengguna dan pembaca layar.
8. **D** — Sebagai anak dari wadah flex, badge tanpa `align-self-start` akan ikut meregang selebar wadah; kelas itu menahannya agar hanya selebar isinya.
9. **B** — Kelas `collapsed` pada tombol dan ketiadaan `show` pada panel menyatakan keadaan tertutup, dan tanpa paket JavaScript klik tidak memicu perubahan apa pun.
10. **D** — `card-group` menempelkan kartu menjadi satu bingkai rapi; katalog Tokosaya memilih kartu lewat grid karena jarak antarkartu bisa diatur dengan `g-4`.
11. **C** — Pola populer list group + badge memakai `d-flex justify-content-between align-items-center` sehingga label di kiri dan status di kanan sejajar.
12. **D** — Karena ikon adalah *glyph* font, ukurannya mengikuti ukuran teks wadah (kelas `fs-*`) dan warnanya mewarisi kelas `text-*`; tidak perlu `width`/`height` ataupun berkas SVG baru.
13. **A** — Ikon baru "bermakna" kalau diberi nama; status yang hanya disampaikan lewat warna dan lambang sulit dibaca sebagian pengguna, sedangkan badge semantik bertulis membawa maknanya lewat kata.
14. **C** — Pola inti kartu: `h-100` menyamakan tinggi kartu, `card-img-top` menempelkan gambar di tepi atas, `d-flex flex-column` menata isi menurun, dan `mt-auto` menempelkan baris terakhir (tombol) ke dasar kartu.
15. **A** — Buku ini memakai varian statis: panel dibungkus `<div class="collapse show navbar-collapse">` sehingga terbuka permanen; atribut `data-bs-*` justru menandakan pola yang butuh paket JavaScript.

### Jawaban Essay

1. **Poin inti:**
   - Pola "kelas dasar + kelas *variant*": kelas dasar menetapkan bentuk dasar, kelas *variant* menetapkan warna/makna.
   - Contoh tombol: `class="btn btn-primary"`; badge: `class="badge text-bg-success"`; alert: `class="alert alert-warning" role="alert"`.
   - Alert ditulis tanpa tombol tutup karena perilaku menutupnya dikendalikan paket JavaScript Bootstrap yang berada di luar cakupan mata kuliah; pesannya berdiri permanen seperti papan pengumuman.
   **Skor:** 2 + 2 + 1 = 5

2. **Poin inti:**
   - Breadcrumb: `active` + `aria-current="page"` pada `li.breadcrumb-item` terakhir, yang tidak lagi berupa tautan.
   - Pagination: `active` + `aria-current="page"` pada halaman sekarang, `disabled` pada panah yang tidak bisa dipakai; status ditulis pada elemen `span` di dalam `li.page-item`.
   - List group: `active` + `aria-current="true"` pada item yang sedang dipilih.
   - Status sebagai kelas aman untuk halaman statis karena semuanya diwujudkan oleh CSS tanpa memerlukan data interaktif atau skrip.
   **Skor:** 1 + 2 + 1 + 2 = 6

3. **Poin inti:**
   - Ukuran mengikuti teks: naikkan ukuran teks wadahnya, mis. `<i class="bi bi-funnel fs-4" aria-hidden="true"></i>`.
   - Warna mewarisi teks: `<i class="bi bi-cart3 text-primary" aria-hidden="true"></i>` pada tautan berwarna utama.
   - Ikon bermakna diberi nama: ikon berdiri sendiri tanpa kata pendamping diberi `aria-label` atau teks rahasia pada tautan; ikon hiasan di samping kata diberi `aria-hidden="true"` supaya tidak dibacakan dua kali.
   **Skor:** 2 + 2 + 2 = 6

4. **Poin inti:**
   - Accordion: keadaan dinyatakan kelas tambahan `collapsed` pada tombol dan kelas `show` pada panel `accordion-collapse collapse`; panel tanpa `show` tersimpan.
   - Modal: struktur bertingkat `modal` → `modal-dialog` → `modal-content` (header, body, footer) dengan kelas `show`, ditampilkan di aliran halaman memakai gaya *inline* berlabel khusus demonstrasi.
   - Carousel: kelas `active` pada `carousel-item` menentukan gambar yang tampak, sedangkan item lain tetap tersimpan.
   - Disebut lebih jujur karena mahasiswa jadi tahu bagian mana yang bisa dikerjakan HTML dan CSS saja, dan bagian mana yang di dunia kerja biasanya ditangani JavaScript.
   **Skor:** 2 + 2 + 1 + 2 = 7

5. **Poin inti:**
   - Keuntungan: tidak ada menu yang hilang, tidak ada tombol palsu yang menjanjikan interaksi, seluruh tautan tetap terjangkau di layar kecil, dan *markup*-nya lebih sederhana untuk dirawat.
   - Kerugian: menu memakan ruang vertikal lebih banyak di layar kecil dan tidak seluwes pola hamburger untuk daftar menu yang panjang.
   - Alasan beralih: ketika jumlah tautan menu bertambah banyak sehingga menumpuk mengganggu, atau ketika tim proyek memutuskan memuat paket JavaScript resmi Bootstrap.
   - Syarat pola hamburger: menyertakan tombol `navbar-toggler` beserta `navbar-toggler-icon`, panel `collapse navbar-collapse`, dan atribut `data-bs-*` yang dibaca paket JavaScript tersebut.
   **Skor:** 2 + 1 + 2 + 2 = 7

### Jawaban Praktikum Lab

1. **Langkah solusi:** Tiga kesalahan: (i) kelas `navbar-expand-lg` belum terpasang sehingga menu tidak dikembalikan ke pola mendatar pada layar besar; (ii) utilitas `ms-auto` belum dipasang pada `navbar-nav` sehingga menu tidak terdorong ke kanan; (iii) tombol `navbar-toggler` tetap ada padahal tanpa paket JavaScript ia hanya menjanjikan interaksi yang tidak akan terjadi. Perbaikan: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">` dengan `<ul class="navbar-nav ms-auto">` berisi empat `li.nav-item` (`nav-link`, dan `active` + `aria-current="page"` pada Katalog) plus tautan Keranjang berikon.
   **Kriteria penilaian:** struktur tiga kelas kunci tepat 40%; tombol toggler dihapus dan `aria-current` terpasang 25%; menu menumpuk di 375 piksel dan mendatar di 1200 piksel (terbukti dari tangkapan layar) 35%.

2. **Langkah solusi:** Pada kartu, nilai *computed* `border-radius` mengikuti `var(--radius)` dan `box-shadow` mengikuti `var(--shadow-card)` — keduanya berasal dari `css/style.css`, bukan `bootstrap.min.css`. Panel Styles menandai aturan aktif dan berkas asalnya. Setelah `--radius` diubah menjadi `16px`, radius kartu ikut berubah karena aturan kustom dimuat paling akhir sehingga menang atas gaya komponen Bootstrap tanpa perlu `!important`.
   **Kriteria penilaian:** identifikasi berkas aturan pemenang 35%; catatan nilai *computed* lengkap (radius, shadow, tinggi gambar 160 piksel, `object-fit: cover`) 35%; penjelasan urutan pemuatan CSS 30%.

3. **Langkah solusi:** Dua potongan pertama adalah ikon hiasan di samping kata, jadi diberi `aria-hidden="true"`. Tautan ikon pencarian tanpa kata pendamping butuh nama, mis. `<a class="nav-link" href="katalog.html" aria-label="Cari produk"><i class="bi bi-search" aria-hidden="true"></i></a>`. Ikon corong di samping kata "Urutkan:" dan ikon buku di samping judul buku cukup `aria-hidden="true"`. Panah pagination tanpa teks butuh nama: `aria-label="Halaman berikutnya"` pada tautan, ikonnya `aria-hidden="true"`. Panel Accessibility lalu membacakan nama dari `aria-label` atau teks tautan, bukan dari kelas ikon.
   **Kriteria penilaian:** pemilahan hiasan vs bermakna benar 40%; *markup* perbaikan valid 30%; bukti inspeksi Accessibility 30%.

4. **Langkah solusi:** Strip pengumuman ditulis `<div class="alert alert-info" role="alert">Kirim Cepat gratis untuk pembelian di atas Rp500.000.</div>` tanpa tombol tutup. Baris legenda memakai empat pasangan badge–teks: `text-bg-success` Tersedia, `text-bg-warning` Best Seller, `text-bg-danger` Stok Terbatas, `text-bg-primary` Baru.
   **Kriteria penilaian:** `role="alert"` dan ketiadaan tombol tutup 30%; keempat variant badge tepat 40%; penempatan di atas grid tanpa merusak kolom 30%.

5. **Langkah solusi:** Item pertama menjadi `<li class="list-group-item d-flex justify-content-between align-items-center">`. Item kedua memakai pola yang sama dengan badge `text-bg-success` bertulis "Tersedia". Item ketiga menjadi `<li class="list-group-item active" aria-current="true">` sehingga pembaca layar tahu item itu sedang dipilih.
   **Kriteria penilaian:** pola `d-flex justify-content-between align-items-center` benar 40%; badge semantik sesuai makna 30%; `active` + `aria-current` pada item terpilih 30%.

6. **Langkah solusi:** `<nav aria-label="breadcrumb"><ol class="breadcrumb mb-0">` dengan `li.breadcrumb-item` untuk Beranda (tautan ke `index.html`), Katalog (tautan ke `katalog.html`), dan tingkat terakhir `li.breadcrumb-item active` + `aria-current="page"` berisi teks "Keyboard Mekanis KX-210" tanpa tautan. `aria-label` diperlukan karena halaman sudah punya elemen `nav` lain; tanpa label, pembaca layar hanya mendengar "navigasi" tanpa tahu bahwa itu jalur posisi halaman.
   **Kriteria penilaian:** struktur `nav` + `ol` + `breadcrumb-item` 35%; status tingkat terakhir dan `aria-current` 35%; penjelasan fungsi `aria-label` 30%.

7. **Langkah solusi:** Di `css/style.css` tambahkan aturan `.produk-card { border: 1px solid var(--clr-border); border-radius: var(--radius); box-shadow: var(--shadow-card); overflow: hidden; transition: transform 0.2s ease; }`, `.produk-card:hover { transform: translateY(-4px); }`, dan `.produk-card .card-img-top { height: 160px; object-fit: cover; }`. Atribut `style` dihapus dari HTML dan kartu memakai `class="card h-100 produk-card"`.
   **Kriteria penilaian:** seluruh gaya *inline* berpindah ke CSS kustom 40%; pemakaian variabel token (tanpa nilai heksadesimal mentah) 30%; efek *hover* CSS murni dan tampilan identik sebelum–sesudah 30%.

8. **Langkah solusi:** Halaman 1 menjadi `<li class="page-item"><a class="page-link" href="katalog.html">1</a></li>`; halaman 2 menjadi `<li class="page-item active" aria-current="page"><span class="page-link">2</span></li>`; halaman 3 tetap tautan. Panah kiri menjadi tautan `<a class="page-link" href="katalog.html">` berikon `bi bi-chevron-left` dengan `aria-hidden="true"`, sedangkan panah kanan menjadi `<li class="page-item disabled"><span class="page-link">`. Deret tetap dibungkus `ul.pagination justify-content-center`.
   **Kriteria penilaian:** pemindahan `active` + `aria-current` ke halaman 2 dan pemakaian `span` 40%; status `disabled` pada panah kanan 30%; kerapian tautan halaman 1 dan 3 serta perataan tengah 30%.

9. **Langkah solusi:** Item pertama: tombol `accordion-button collapsed` dengan panel `accordion-collapse collapse` tanpa `show`. Item kedua: tombol tanpa kelas `collapsed` dengan panel `accordion-collapse collapse show`. Modal statis memakai struktur `modal show` → `modal-dialog` → `modal-content` (header/body/footer) dengan gaya *inline* `display: block; position: static;` berkomentar `<!-- khusus demonstrasi -->`. Tombol silang tidak berfungsi karena perilaku menutupnya dikendalikan paket JavaScript Bootstrap yang tidak dimuat.
   **Kriteria penilaian:** pasangan `collapsed`/`show` pada item yang benar 40%; struktur modal bertingkat 30%; komentar khusus demonstrasi dan penjelasan batas tanpa JavaScript 30%.

10. **Langkah solusi:** Hasil pengamatan yang diharapkan: 1 kartu per baris pada 360 dan 575 piksel (kelas `col-12`); 2 kartu per baris mulai 576 hingga 991 piksel (`col-sm-6`); 4 kartu per baris mulai 992 piksel ke atas (`col-lg-3`). Pada lebar 576 piksel batas sm mengambil alih, pada 992 piksel batas lg mengambil alih. Overlay grid DevTools menunjukkan setiap sel memakai kelipatan dua belas kolom (12 → 6 → 3).
   **Kriteria penilaian:** tabel enam baris dengan angka tepat 40%; penjelasan kelas pemenang di tiap batas 35%; bukti overlay grid dan kesimpulan 25%.

---

## Bab 11 — Form dan User Interface Design

### Kunci Pilihan Ganda

1. **B** — Prinsip CTA menuntut satu tombol utama per halaman dengan label yang menyatakan akibatnya; tombol ganda bergaya sama justru membuat pengguna berpikir dua kali.
2. **A** — Alasan bab ini: mata membaca dengan melompat sedikit melintasi baris, dan pada HP dua kolom membuat medan sempit sehingga salah ketik meningkat.
3. **D** — Radio yang satu kelompok wajib memakai nilai `name` yang sama supaya browser tahu pilihannya saling meniadakan, dan `fieldset` membawa konteks kelompoknya bagi pembaca layar.
4. **C** — Tabel *type* pada bab ini memasangkan `date` dengan pemilih tanggal bawaan, contohnya untuk tanggal pengambilan barang.
5. **A** — Teks bantuan yang tidak dihubungkan akan terdengar sebagai paragraf biasa; pola yang benar memberi `id` pada `form-text` lalu merujuknya lewat `aria-describedby` dari medan.
6. **B** — Subtotal 650.000 + 370.000 + 95.000 = Rp1.115.000; ditambah ongkir Reguler Rp20.000 menjadi Rp1.135.000. Nilai Rp1.150.000 adalah jebakan bila ongkir Same Day (Rp35.000) yang dipakai.
7. **C** — Di dalam `form`, tombol tanpa atribut `type` dianggap tombol kirim; memberi `type="button"` mencegah form terkirim tanpa sengaja.
8. **D** — `readonly` membuat medan tetap terlihat dan tetap terkirim tetapi tidak dapat diubah; `disabled` justru membuat medannya tidak ikut terkirim.
9. **A** — Secara bawaan aliran fokus mengikuti susunan elemen di dokumen HTML, karena itu prinsip "urutan visual = urutan DOM" penting sejak awal.
10. **B** — Nilai positif pada `tabindex` mengubah urutan alami fokus dan membingungkan pengguna keyboard; urutan terbaik biasanya justru tanpa `tabindex` sama sekali.
11. **C** — Pembungkus `invalid-feedback` hanya tampil ketika medan di atasnya memakai kelas `is-invalid`; pasangan kelas status dan pembungkus pesan harus cocok.
12. **D** — Satu tombol utama dengan label yang menyatakan akibatnya, sedangkan tombol pendamping diturunkan gayanya, adalah penerapan langsung prinsip CTA.
13. **A** — Kasus ini menuntut kontrol yang menstandarkan isian; `type="date"` mengunci format tanpa perlu skrip, sedangkan *placeholder* contoh justru tidak mengikat apa pun.
14. **B** — Rancangan itu menggabungkan pola dasar (pembungkus `mb-3` + `form-label`) dengan `input-group` untuk tombol lampiran `type="button"` dan `form-text` sebagai petunjuk format.
15. **C** — Blok berlangganan adalah kombinasi `input-group` (medan + tombol lampiran), `form-text` yang dihubungkan `aria-describedby`, dan `form-check` untuk persetujuan.

### Jawaban Essay

1. **Poin inti:**
   - Satu kolom: aliran baca vertikal, menjaga medan tetap lebar di HP sehingga salah ketik berkurang.
   - Label selalu terlihat: label adalah tanda alamat medan yang tetap ada saat pengguna mengetik; *placeholder* hilang dan tidak bisa diandalkan.
   - Pengelompokan dan progres: medan sebanding diguguskan (data pribadi, alamat, pembelian) dan proses panjang ditampilkan bertahap agar pengguna tahu posisinya.
   - Tombol aksi yang jelas: satu tombol utama berlabel yang menyatakan akibatnya; tombol ganda bergaya sama membingungkan.
   - Kaitan risiko data: tanpa label yang jelas pada checkout, alamat bisa terisi keliru dan tersimpan salah di basis data sehingga pesanan gagal diantar.
   **Skor:** 1 + 1 + 1 + 1 + 2 = 6

2. **Poin inti:**
   - Checkbox memperbolehkan lebih dari satu pilihan sekaligus (persetujuan, langganan); radio hanya satu pilihan dalam satu kelompok.
   - Radio sekelompok wajib memakai nilai `name` yang sama; dari situlah browser tahu pilihannya saling meniadakan.
   - `fieldset`/`legend` dipakai setiap kali ada lebih dari satu radio atau checkbox yang masih saling terkait, karena browser dan pembaca layar mengenalinya sebagai satu unit dan konteks kelompok tetap terbawa.
   - Contoh: `<fieldset><legend>Program Studi</legend>` dengan dua `input type="radio" name="prodi"` ber-`id` berbeda dan masing-masing `<label for="...">`.
   **Skor:** 2 + 2 + 2 + 2 = 8

3. **Poin inti:**
   - `row` mengelompokkan medan agar diatur grid; `g-3` memberi jarak antar sel di dalam `row`.
   - `col-md-6` membuat dua medan berdampingan sejak titik henti *medium* dan otomatis menumpuk satu kolom di HP, sesuai prinsip satu kolom pada layar kecil.
   - `col-12` dialokasikan untuk medan panjang yang jarang dipasangkan, seperti textarea, biar lebarnya penuh.
   - Bila `col-md-6` diganti `col-6`, medan tetap dua kolom di HP sehingga isian menjadi sempit dan salah ketik meningkat.
   **Skor:** 2 + 3 + 2 + 2 = 9

4. **Poin inti:**
   - *Placeholder* tanpa label melanggar prinsip "label selalu terlihat" dan ketentuan label eksplisit: teks hilang saat pengguna mengetik dan tidak andal bagi pembaca layar. Perbaikan: tambahkan `<label for="...">` yang terhubung ke setiap medan.
   - Dua radio dengan `name` berbeda tidak dikenali sebagai satu kelompok, sehingga keduanya bisa terpilih bersamaan. Perbaikan: samakan nilai `name` dan bungkus dalam `fieldset`/`legend`.
   - Satu pesan kesalahan umum melanggar ketentuan status per medan: informasi tidak boleh disampaikan lewat warna/makna umum saja. Perbaikan: pasangkan `is-invalid` + `invalid-feedback` bertulis di tiap medan bersangkutan.
   - Tombol berlabel "Proses" melanggar prinsip CTA karena tidak menyatakan akibatnya. Perbaikan: ganti dengan label yang jelas, misalnya "Kirim Pendaftaran".
   **Skor:** 2 + 2 + 2 + 1 = 7

5. **Poin inti:**
   - Medan email memakai `type="text"` padahal seharusnya `type="email"`, sehingga keyboard khusus dan pemeriksaan format bawaan browser tidak aktif. Perbaikan: ganti atribut `type` (paling mendesak karena memengaruhi isian).
   - Medan email tidak punya `autocomplete`, padahal bab ini menempatkan identifikasi tujuan medan sebagai bagian aksesibilitas (WCAG 1.3.5). Perbaikan: tambahkan `autocomplete="email"`.
   - *Placeholder* "Alamat email aktif" tidak boleh menggantikan bantuan berbentuk aturan; sebaiknya pindahkan ke `form-text` yang dihubungkan `aria-describedby`, dan sisakan *placeholder* sebagai contoh format.
   - Checkbox promo tidak punya `name` maupun `value`, sehingga isinya tidak terkirim sebagai satu kesatuan data; selain itu tidak ada pesan kesalahan bertulis yang menjelaskan bila persyaratan tidak dipenuhi (warna saja tidak cukup).
   - Urutan prioritas: perbaiki `type` dan `autocomplete` lebih dulu karena keduanya langsung memengaruhi masuknya data yang benar, baru penataan bantuan dan pesan bertulis.
   **Skor:** 2 + 2 + 2 + 2 + 1 = 9

### Jawaban Praktikum Lab

1. **Langkah solusi:** Kedua *placeholder* diganti label, mis. `<label for="email" class="form-label">Email Pelanggan</label>` dengan `<input type="email" id="email" name="email" autocomplete="email" class="form-control">`. Tombol Batal diberi `type="button"` karena di dalam `form` tombol tanpa atribut `type` dianggap tombol kirim sehingga form terkirim tanpa sengaja. *Placeholder* boleh disisakan hanya sebagai contoh format, misalnya `nama@contoh.id`, bukan sebagai nama medan.
   **Kriteria penilaian:** label eksplisit dengan pasangan `for`–`id` benar 40%; `type="button"` pada tombol batal beserta alasannya 30%; `autocomplete` tepat dan *placeholder* hanya untuk contoh format 30%.

2. **Langkah solusi:** Kelompok medan ditulis dalam `row g-3` dengan dua `div.col-md-6`, berisi `label.form-label` + `input` untuk tanggal (`type="date"`) dan jumlah (`type="number"` dengan `min="1" max="5"`). Teks bantuan ditulis `<div class="form-text" id="bantuan-ambil">...</div>` dan medan tanggal dihubungkan dengan `aria-describedby="bantuan-ambil"`.
   **Kriteria penilaian:** `type` semantik dan batas `min`/`max` benar 35%; layout `col-md-6` menumpuk di 375 piksel 30%; label eksplisit serta penghubungan teks bantuan 35%.

3. **Langkah solusi:** Nilai *computed* `outline` pada medan yang difokuskan mengikuti aturan `:focus-visible` di `css/style.css`, yaitu `3px solid var(--clr-primary)` dengan `outline-offset: 2px`. Setelah aturan dinonaktifkan di panel Styles, nilai *computed* berubah mengikuti gaya bawaan browser (atau hilang bila browser memakai `outline: none`). Aturan itu perlu ada supaya gaya fokus memakai warna token proyek dan konsisten di semua halaman.
   **Kriteria penilaian:** pengukuran *computed* dua kondisi lengkap 40%; identifikasi sumber aturan di `css/style.css` 30%; penjelasan alasan aksesibilitas gaya fokus 30%.

4. **Langkah solusi:** `row` diberi gutter `g-3`; medan nama dan telepon masing-masing menjadi `div.col-md-6`; `textarea` alamat menjadi `div.col-12`. Dengan begitu di 375 piksel setiap medan satu kolom penuh, sedangkan di 768 piksel nama–telepon berdampingan dan alamat tetap penuh. Jarak `g-*` mengatur jarak antarkolom di dalam `row`, sedangkan `mb-*` mengatur jarak antarkelompok medan di luar `row`; pilih satu pola dan pakai konsisten.
   **Kriteria penilaian:** perbaikan kelas kolom dan `col-12` untuk textarea 40%; penggunaan gutter `g-3` 25%; penjelasan beda `g-*` vs `mb-*` 20%; bukti tangkapan layar dua lebar 15%.

5. **Langkah solusi:** `<fieldset>` berisi `<legend>Waktu Pengambilan</legend>` dan tiga pasang radio–label: ketiganya `name="waktu-ambil"` dengan `id` berbeda (`ambil-pagi`, `ambil-siang`, `ambil-sore`), masing-masing dibungkus `div.form-check` dengan `input.form-check-input` dan `label.form-check-label for="..."`. Pilihan pertama diberi `checked`. Radio dipilih karena pilihan jendela waktu saling meniadakan; checkbox akan memperbolehkan pembeli memilih lebih dari satu jendela sekaligus.
   **Kriteria penilaian:** `fieldset` + `legend` 25%; `name` sama pada ketiga radio 30%; pasangan label–id lengkap dan satu pilihan `checked` 25%; penjelasan radio vs checkbox 20%.

6. **Langkah solusi:** Medan nama memakai `form-control is-valid` dengan `<div class="valid-feedback">Nama penerima terisi dengan benar.</div>`. Medan kupon memakai `form-control is-invalid` dengan `aria-describedby` ke teks bantuan, disertai `<div class="invalid-feedback">Kode kupon tidak ditemukan. Periksa kembali email promo Anda.</div>` dan `<div class="form-text" id="bantuan-kupon">Format contoh: TKSA-10.</div>`. Komentar HTML menegaskan kelas status ditulis manual karena verifikasi sungguhan memakai JavaScript Bootstrap di luar cakupan. Bila kelas status dihapus, kedua pesan otomatis tidak tampil, sedangkan `form-text` tetap tampil sebagai bantuan permanen.
   **Kriteria penilaian:** pasangan kelas status–pesan tepat 40%; penempatan `form-text` berdampingan dengan pesan status 25%; komentar latihan manual dan penjelasan penghapusan kelas 35%.

7. **Langkah solusi:** Temuan yang diharapkan: (i) medan nama tanpa `label` sama sekali dan memakai *placeholder* sebagai nama medan; (ii) label "Nomor Pokok Mahasiswa" tidak punya atribut `for` sehingga tidak terhubung ke medan mana pun; (iii) `aria-describedby="bnt-npm"` menunjuk `id` yang tidak ada, karena teks bantuannya ber-`id` `catatan-npm`; (iv) kedua radio sesi memakai `name` berbeda sehingga bisa terpilih bersamaan dan tidak dibungkus `fieldset`/`legend`; (v) checkbox tanpa label dan tanpa `name`. Perbaikan: label eksplisit untuk setiap medan, `for` yang cocok dengan `id` medan, `aria-describedby` diarahkan ke `catatan-npm`, radio memakai satu `name` yang sama di dalam `fieldset` ber-`legend`, dan checkbox diberi `name`, `value`, serta label pasangan.
   **Kriteria penilaian:** minimal empat temuan benar 40%; tabel temuan mengaitkan pelanggaran ke ketentuan bab 30%; file perbaikan valid dan lengkap 30%.

8. **Langkah solusi:** Struktur: `div.mb-3` berisi `label.form-label for="nominal"`, lalu `div.input-group` berisi `<span class="input-group-text">Rp</span>`, `<input type="number" class="form-control" id="nominal" name="nominal" min="10000" max="10000000" aria-describedby="bantuan-nominal">`, dan `<button type="button" class="btn btn-outline-primary">Isi Total Pesanan</button>`, ditutup `div.form-text id="bantuan-nominal"` berisi contoh format. Tombol wajib `type="button"` supaya tidak menyerahkan form.
   **Kriteria penilaian:** `input-group` + `input-group-text` Rp 35%; `type` angka dengan batas dan `type="button"` pada tombol 35%; label, teks bantuan, dan penghubungannya 30%.

9. **Langkah solusi:** Setiap medan mendapat label eksplisit, misalnya `<label for="nama" class="form-label">Nama Anda</label>` dengan `<input type="text" class="form-control" id="nama" name="nama" placeholder="Budi Santoso">`. Email memakai `type="email"` dengan *placeholder* `nama@domain.id`, telepon memakai `type="tel"` dengan *placeholder* `0812-3456-7890`, dan pesan tetap `<textarea>` berlabel dengan *placeholder* sebagai contoh. Medan identitas diberi `autocomplete="name"` dan `autocomplete="email"` (ditambah `autocomplete="tel"` pada telepon). Medan pesan diberi `form-text` yang dihubungkan `aria-describedby`, dan setiap kelompok dibungkus pembungkus berjarak seperti `mb-3`.
   **Kriteria penilaian:** label eksplisit pada keempat medan 35%; `type` semantik dan contoh format yang masuk akal 30%; `autocomplete` dan teks bantuan terhubung 35%.

10. **Langkah solusi:** Perhitungan: HS-15 2 × Rp425.000 = Rp850.000; CP-30 1 × Rp120.000 = Rp120.000; WC-720 1 × Rp310.000 = Rp310.000; subtotal Rp1.280.000; ongkos kirim Same Day Rp35.000; total Rp1.315.000. Struktur halaman: `<div class="row g-4">` dengan `<div class="col-lg-8">` berisi tabel item (dibungkus wadah yang mencegah luapan mendatar dan diberi `<caption class="visually-hidden">Daftar produk dalam keranjang</caption>`) serta satu tombol utama `type="button"` berlabel "Lanjut ke Pembayaran", dan `<div class="col-lg-4">` berisi `card` + `list-unstyled d-grid gap-2` untuk tiga baris biaya. Baris total diberi `fw-bold` dan `border-top pt-2`; di bawah titik henti `lg` kedua kolom menumpuk sehingga kartu ringkasan tampil satu kolom penuh. Tombol utama wajib `type="button"` karena di dalam `form` tombol tanpa atribut `type` dianggap tombol kirim.
   **Kriteria penilaian:** ketiga angka benar 30%; pembagian `col-lg-8`/`col-lg-4`, penekanan baris total, dan CTA tunggal 30%; `visually-hidden` pada keterangan tabel 15%; `type="button"` beserta alasannya 10%; perilaku menumpuk di HP 15%.

---

## Bab 12 — UI/UX dan Design System

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

---

## Bab 13 — Website Responsif dan Accessibility

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

---

## Bab 14 — Implementasi Desain Figma ke HTML CSS

### Kunci Pilihan Ganda

1. **C** — Token dinamai menurut peran agar tetap bermakna ketika desainer mengganti nilai warnanya; `--clr-primary` tetap masuk akal walau indigo berubah menjadi hijau.
2. **A** — Fill adalah warna latar objek (padanan `background-color`), sedangkan stroke adalah garis tepinya (padanan `border`).
3. **B** — Interaktivitas JavaScript di luar cakupan mata kuliah, sehingga bab ini melatih translasi keadaan sebagai tampilan statis dengan kelas status disertai catatan perilaku.
4. **D** — Pembaca yang disiplin masuk dari frame terluar, lalu membedah layer anak hingga ke bawah, seperti membaca struktur HTML dari elemen terluar.
5. **C** — Dua penyimpangan sekaligus: warna aksen ditulis sebagai hex mentah, bukan `var(--clr-accent)`, dan radius 8 px tidak memakai token `var(--radius)` yang bernilai 12 px.
6. **B** — Spesifikasi meminta gutter 24 px lewat `g-4` pada root 16 px sekaligus menuntut `col-12 col-md-4` agar tiga kartu sejajar di desktop dan satu kolom penuh di layar kecil.
7. **A** — Text style "Heading/Card Title" dipetakan apa adanya: Poppins (token `--font-heading`), ketebalan 500, 18 px, dan line-height 1,4.
8. **C** — Badge aksen memakai `var(--clr-accent)` untuk latar dan `var(--clr-dark)` untuk teks, bukan hex baru dan bukan token semantik lain.
9. **B** — `col-12` membuat kolom menumpuk penuh di bawah breakpoint lg, sedangkan `col-lg-7` dan `col-lg-5` memberlakukan rasio 7 : 5 pada layar ≥ 992 px.
10. **D** — Sesuai pola lima langkah translasi: utilitas Bootstrap mengurus susunan, sedangkan warna dan ukuran presisi ditangani kelas kustom yang mengonsumsi token.
11. **B** — Atribut dimensi tetap dipasangkan dengan `img-fluid` supaya ukuran aset tidak mengalahkan batas kolom dan gambar tidak mendorong kolom lain turun.
12. **A** — Utilitas `rounded-3` menimpa aturan kustom akibat kaskade; cara yang benar adalah menghapus utilitasnya, bukan memaksa kemenangan dengan `!important` atau mengubah token.
13. **C** — Pembaca layar butuh `alt` yang menjelaskan isi dan tujuan gambar; `alt="gambar"` tidak bermakna dan `role="img"` tidak menggantikan teks alternatif.
14. **A** — Checklist 14.7 diverifikasi lewat panel Computed DevTools dengan pembanding lembar spesifikasi; selisih kecil karena pembulatan dicatat sebagai toleransi ± 2 px.
15. **D** — Ketika berkas desain tidak tersedia, spesifikasi desain tekstual bernilai presisi plus fidelity checklist adalah mitigasi yang membuat keputusan desain tetap terukur.

### Jawaban Essay

1. **Poin inti:**
   - Sisi pengembang: ukuran, jarak, dan warna ditaksir dengan mata sehingga tombol meleset, jarak berubah-ubah, dan judul diperkecil sesuka hati; implementasi kehilangan keputusan desain yang seharusnya disalin.
   - Sisi pengembang: keadaan yang tidak tertulis (hover/focus, empty state keranjang kosong, batas baris nama produk, format harga) tidak pernah direncanakan sehingga muncul sebagai cacat di akhir.
   - Sisi desainer: menerima hasil yang tidak setia dan harus mengirim revisi berulang ("warna badge salah", "jarak kartu berubah", "font judul harus Poppins").
   - Sisi desainer: keputusan yang tidak tertulis akan ditafsir bebas, sehingga niat desain tidak pernah terbukti di layar.
   **Skor:** 1 + 1 + 1 + 1 + 1 = 5 (tiap akibat yang benar dan beralasan bernilai 1, kelengkapan sisi pengembang dan desainer masing-masing 2, kualitas alasan 1).

2. **Poin inti:**
   - Membaca frame: identifikasi frame terluar (1440/768/375 px), telusuri hirarki layer dari atas ke bawah, baca fill/stroke di panel kanan, baca auto layout (arah, gap, padding) sebagai padanan Flexbox.
   - Membaca grid dan tipografi: catat jumlah kolom, gutter, dan margin kontainer; baca text style dan color style berlabel dari daftar Local styles.
   - Lapis token: setiap color style menjadi satu CSS custom property di `:root`, dan setiap text style menjadi aturan tipografi yang menyalin nilai gaya.
   - Lapis utilitas: grid dan susunan diserahkan ke `.container`, `.row`, `col-*`, dan `g-4` sesuai spesifikasi.
   - Lapis kustom: warna, radius, dan ukuran presisi ditulis pada kelas komponen yang mengonsumsi token (`var(--clr-…)`, `var(--radius)`), dengan komentar `/* kustom */`.
   **Skor:** membaca frame dan grid 2 + pemetaan tiga lapis 3 = 5.

3. **Poin inti:**
   - Perhitungan: lebar kolom = (kontainer − 11 × gutter) ÷ 12 = (1140 − 11 × 24) ÷ 12 = 876 ÷ 12 = 73 px.
   - Kolom gabungan: dua kolom = 2 × 73 + 24 = 170 px, sehingga kombinasi 6+6, 4+4+4, atau 8+4 tetap terasa rapi karena 12 mudah dibagi.
   - Alasan 73 px tidak ditulis di CSS: Bootstrap sudah menyediakan penerjemah grid lewat `.row` dan `col-*`, sedangkan `.container` berhenti tumbuh di 1140 px pada breakpoint xl.
   - Nilai diwakili oleh kelas: `col-lg-7`, `col-lg-5`, `col-12 col-md-4` beserta `g-4` untuk gutter 24 px, dan token untuk jarak yang dipakai berulang.
   - Satu sumber kebenaran: menuliskan 73 px di tiap komponen justru membuat celah antarkartu berbeda-beda dan sulit diaudit.
   **Skor:** perhitungan benar 2 + penjelasan kolom gabungan 1 + alasan implementasi Bootstrap 2 = 5.

4. **Poin inti:**
   - Alat: DevTools Chrome dengan panel Inspect, membaca nilai terhitung pada tab Computed untuk elemen terpilih (tipografi, jarak, radius, grid, kontainer).
   - Prosedur: jalankan checklist sembilan item satu per satu, bandingkan nilai terhitung dengan lembar spesifikasi, bukan dengan perasaan "kurang mirip".
   - Selisih kecil: selisih akibat pembulatan browser dicatat sebagai toleransi ± 2 px dan tidak perlu diperbaiki.
   - Selisih besar atau arahnya salah: diperbaiki karena biasanya menandakan nilai yang disalin meleset, misalnya hex liar, radius di luar token, atau jarak di luar kelipatan 8 px.
   - Kebiasaan pendukung: uji bertahap per komponen (selesaikan satu komponen, bandingkan, lanjut) dan catat hasilnya dalam daftar berbentuk tabel.
   **Skor:** alat dan cara baca 2 + toleransi 1 + tindakan atas selisih besar 1 + kebiasaan uji bertahap 1 = 5.

5. **Poin inti:**
   - "Warna badge salah": kemungkinan penyebabnya nilai hex ditulis langsung pada selector komponen atau memakai utilitas warna Bootstrap, bukan `var(--clr-accent)`/`var(--clr-dark)`; pemeriksaannya panel `:root` DevTools plus pencarian karakter `#` pada CSS, lalu perbaiki ke pemanggilan token.
   - "Jarak kartu berubah": kemungkinan penyebabnya `row` ditulis tanpa `g-4` atau nilai padding di luar kelipatan 8 px; periksa `gap`/`padding` di panel Computed dan sesuaikan dengan spesifikasi.
   - "Font judul harus Poppins": kemungkinan penyebabnya keluarga font tidak dimuat lewat Google Fonts, urutan pemanggilan salah, atau kelas heading memakai font body; periksa daftar `@font-face`/link CDN dan `font-family` terhitung pada elemen judul, lalu pastikan fallback `sans-serif` tetap ada.
   **Skor:** tiga penyebab tepat 3 + tiga langkah perbaikan tepat 2 = 5.

### Jawaban Praktikum Lab

1. **Langkah solusi:** Buat berkas latihan dengan urutan pemuatan: Google Fonts → Bootstrap CSS → Bootstrap Icons → `css/style.css`. Susun `<header class="site-nav">` dengan `.container` dan utilitas `d-flex flex-wrap align-items-center justify-content-between gap-3`; daftar link memakai `<ul>` `list-unstyled d-flex gap-4 m-0`; link aktif diberi kelas `site-link--aktif` ditambah `aria-current="page"`; ikon keranjang memakai `<a class="site-ikon" aria-label="Keranjang belanja">` dengan ikon `aria-hidden="true"`. CSS kustom mengisi `.site-nav` (latar token surface, garis bawah 1 px token border, padding vertikal 16 px), `.site-brand` (Poppins 700, 20 px, token primer), `.site-link` (Inter 15 px, token body), dan `.site-ikon` (20 px).
   **Kriteria penilaian:** Struktur semantik dan urutan pemuatan aset 30%, ketepatan nilai spesifikasi via token (latar, border, padding, ukuran, warna) 40%, pemakaian utilitas untuk susunan dan bukti Computed (tinggi ± 72 px, gap 32 px) 20%, label aksesibel ikon 10%.

2. **Langkah solusi:** Tabel pemetaan berisi baris: "Heading/Title 1" → kelas `.page-title` → Poppins 600, 32 px, line-height 1,25; "Body/Paragraph" → aturan `body` → Inter 400, 16 px, line-height 1,6; "Warna/Accent" → `--clr-accent` → `#F59E0B`; "Warna/Border" → `--clr-border` → `#E2E8F0`. Blok `:root` memuat empat token tersebut plus `--font-heading` dan `--font-body`; aturan tipografi menyalin nilai gaya dan mengambil warna/font dari variabel. Penjelasan menegaskan pemetaan sekali pakai banyak: perubahan nilai cukup di `:root`.
   **Kriteria penilaian:** Kelengkapan dan ketepatan tabel pemetaan 40%, blok `:root` benar dan tanpa nilai liar 30%, dua aturan tipografi bertoken 20%, kualitas penjelasan 10%.

3. **Langkah solusi:** Panel disusun dalam `<div class="produk-panel">` dengan urutan sesuai spesifikasi: `<span class="badge-populer">Best Seller</span>`, `<h2 class="produk-nama">`, `<p class="produk-kategori">`, `<p class="produk-harga">`, deskripsi, `<a class="btn-tokosaya">` berisi ikon `bi bi-cart3` dengan `aria-hidden="true"`, lalu dua `<p class="produk-info">` berisi ikon `bi bi-truck` dan `bi bi-headset`. CSS panel: latar `var(--clr-surface)`, border 1 px `var(--clr-border)`, `border-radius: var(--radius)`, padding 24 px, `box-shadow: var(--shadow-card)`. Nilai Computed yang diharapkan: radius 12 px, padding 24 px, harga 24 px warna `#4F46E5`, nama 28 px/600.
   **Kriteria penilaian:** Urutan isi panel sesuai spesifikasi 30%, seluruh warna/ukuran dari token 30%, radius–padding–bayangan tepat 20%, atribut aksesibilitas ikon dan gambar 10%, bukti Computed lengkap 10%.

4. **Langkah solusi:** Struktur: `<section class="produk-terkait">` dengan `<h2 class="section-title">Produk Terkait</h2>` lalu `<div class="row g-4">` berisi tiga `<article class="col-12 col-md-4">`. Tiap kartu memakai `.produk-card` dengan gambar `img-fluid` berdimensi 332×160 dan `alt` deskriptif, badge `.badge-tersedia` (MW-88 dan HS-15) atau `.badge-stok` (BT-5), nama `h3 .produk-card-nama`, harga `.produk-card-harga`, dan tautan `.produk-card-tautan`. Pada 1440 px tiga kartu sejajar; pada 768 px tiap kartu menempati 12 kolom dan bertumpuk dengan jarak vertikal 24 px dari `g-4`; pada 375 px tumpukan tetap satu kolom penuh tanpa teks terpotong.
   **Kriteria penilaian:** Kelas grid `row g-4` + `col-12 col-md-4` tepat 30%, isi dan urutan kartu sesuai spesifikasi G 25%, badge memakai token semantik benar 15%, perilaku responsif terbukti pada tiga lebar 20%, kelengkapan bukti tangkapan layar 10%.

5. **Langkah solusi:** Empat penyimpangan yang diharapkan: (1) `padding: 20px` bukan kelipatan skala 8 px — seharusnya 24 px sesuai spesifikasi panel; (2) `border-radius: 8px` tidak memakai token — seharusnya `var(--radius)` (12 px); (3) latar dan warna ditulis sebagai hex mentah (`#FFFFFF`, `#4F46E5`) — seharusnya `var(--clr-surface)` dan `var(--clr-primary)`; (4) `!important` tidak diperlukan karena tidak ada konflik kaskade, cukup selektor yang tepat; (5) warna info `#94A3B8` terlalu pucat dan di luar token — seharusnya `var(--clr-body)`. Hasil akhir misalnya `.produk-panel { padding: 24px; border-radius: var(--radius); background-color: var(--clr-surface); }`.
   **Kriteria penilaian:** Ketepatan identifikasi penyimpangan (minimal empat) 40%, hasil perbaikan bertoken 30%, penjelasan `!important` 15%, bukti visual akhir 15%.

6. **Langkah solusi:** Urutan akhir: blok `:root` paling atas, lanjut gaya dasar (`body`), lalu komponen (`.produk-panel`), dan terakhir penyesuaian halaman bila ada. Aturan `.panel-hilang` dihapus karena tidak ada elemen di halaman yang memakainya (kode mati). Kelas `.judulBesarMerah` diganti menjadi pola blok-elemen kebab-case (misalnya `.judul-promo`) dengan nilai memakai token (`var(--clr-danger)` dan ukuran pada skala yang disepakati), lalu nama kelas pada HTML disamakan. Komentar `/* kustom */` dipertahankan pada blok yang memang kustom.
   **Kriteria penilaian:** Urutan blok token → dasar → komponen benar 35%, identifikasi dan penghapusan kode mati disertai alasan 25%, penamaan kelas kebab-case pola blok-elemen 25%, kualitas komentar 15%.

7. **Langkah solusi:** Tabel audit memuat pasangan nilai spesifikasi versus Computed, misalnya: `h3` kartu 18 px/500/1,4; `border-radius` kartu 12 px; `padding` kartu 16 px; jarak antarkolom 24 px; lebar `.container` 1140 px pada viewport ≥ 1200 px. Selisih 0–2 px dicatat sebagai toleransi pembulatan; selisih lebih besar ditandai temuan dan diperbaiki dengan menyamakan nilai ke spesifikasi/token.
   **Kriteria penilaian:** Kelengkapan enam pemeriksaan 30%, ketepatan pembacaan panel Computed 30%, penerapan aturan toleransi ± 2 px 20%, perbaikan dan bukti ulang 20%.

8. **Langkah solusi:** Pemeriksaan alt: setiap gambar konten diberi `alt` deskriptif yang menyebut produk dan sudutnya; gambar hias boleh `alt=""`. Pemeriksaan heading: halaman hanya punya satu `h1`, lalu `h2` pada judul section dan `h3` pada nama kartu tanpa lompatan. Pemeriksaan kontras: badge amber `#F59E0B` dengan teks `#1E293B` dan tombol indigo `#4F46E5` dengan teks putih dibaca lewat pembaca warna DevTools; bila salah satu rasio di bawah 4,5 : 1 untuk teks normal, ganti pasangan warnanya ke token yang lebih aman.
   **Kriteria penilaian:** Ketepatan penulisan `alt` 30%, kebenaran urutan heading 25%, pengukuran kontras dan interpretasinya 25%, kualitas perbaikan serta penjelasan dampak 20%.

9. **Langkah solusi:** Panel keranjang dibungkus elemen dengan dua keadaan kelas, misalnya `.keranjang-panel` dan `.keranjang-panel--terbuka`; keadaan terbuka ditata dengan `position: absolute` atau `fixed`, latar `var(--clr-surface)`, border token, radius `var(--radius)`, dan `box-shadow: var(--shadow-card)`. Tombol utama menerima `:focus-visible` dengan outline `3px solid var(--clr-accent)` dan `outline-offset: 2px`. Komentar HTML menyatakan bahwa perilaku buka/tutup sesungguhnya ditangani skrip di luar cakupan mata kuliah.
   **Kriteria penilaian:** Kelas keadaan statis terbentuk dan terlihat jelas 30%, penataan bertoken 25%, gaya fokus yang terlihat dan tidak terpotong 25%, catatan perilaku yang jelas dan jujur 20%.

10. **Langkah solusi:** `catatan-fidelity.txt` berbentuk tabel sembilan baris sesuai checklist 14.7, tiap baris memuat nomor, item pemeriksaan, nilai hasil (misalnya `h1` 32 px, radius 12 px, gutter 24 px, kontainer 1140 px, lebar 1440/768/375 px tanpa kerusakan), dan status lulus/temuan. Item yang gagal diberi tindak lanjut konkret, misalnya "padding 20 px → 24 px" atau "ikon kartu belum konsisten → samakan ke set Bootstrap Icons".
    **Kriteria penilaian:** Sembilan item terisi lengkap 35%, nilai yang dicatat terukur dan sesuai spesifikasi 30%, status temuan disertai tindak lanjut 20%, lampiran tangkapan layar 1440 px dan 375 px 15%.

---

## Bab 15 — Final Project dan Quality Assurance

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

---


