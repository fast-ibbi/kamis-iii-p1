# Kunci Jawaban & Rubrik — Bab 01: Pengantar Frontend Development dan Web Design

> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)
> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)

---

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
