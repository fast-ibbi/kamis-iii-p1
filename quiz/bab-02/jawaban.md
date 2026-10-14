# Kunci Jawaban & Rubrik — Bab 02: HTML5 dan Struktur Semantik

> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)
> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)

---

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
