# Kunci Kuis Ringkas — Frontend Development & Web Design

> **Mata kuliah:** Frontend Development & Web Design · Semester III
> **Prodi:** Sistem Informasi / Teknik Informatika
> **Isi:** kunci + pembahasan pilihan ganda (70) dan isian singkat (70) — 10 butir per bab · **Total 140 kunci**
> **Versi per bab:** `bab-NN/kunci-kuis-ringkas.md` · **File soal:** `kuis-ringkas.md`


**Daftar Bab:** Bab 01 · Bab 02 · Bab 03 · Bab 04 · Bab 05 · Bab 06 · Bab 07 · Bab 09 · Bab 10 · Bab 11 · Bab 12 · Bab 13 · Bab 14 · Bab 15


## Bab 01 — Pengantar Frontend Development dan Web Design

### Bagian A — Pilihan Ganda

1. **B** — memindahkan file ke server dan menghubungkannya dengan domain adalah *deployment*; domain (A) adalah alamatnya, hosting (C) adalah layanan penyimpanan filenya, dan rendering (D) adalah proses browser menampilkan halaman.
2. **D** — pada tabel tahapan, keluaran tahap desain adalah rancangan antarmuka seperti layout, warna, dan tombol; analisis menghasilkan spesifikasi kebutuhan, implementasi menghasilkan halaman HTML/CSS, dan pengujian menghasilkan catatan temuan.
3. **C** — Bab 1–8 memakai folder `tokosaya-css/` (HTML dan CSS dasar), sedangkan Bab 9–16 melanjutkan proyek dengan Bootstrap 5 di folder `tokosaya-bootstrap/`.
4. **A** — Live Server membuat halaman terbuka di browser dan diperbarui otomatis setiap kali file disimpan; memeriksa struktur tag adalah tugas DevTools (B), mengunggah ke hosting adalah deployment (C), dan pengodean UTF-8 diatur lewat penyimpanan file di editor (D).
5. **B** — urutan langkah bermakna sehingga dipakai `<ol>`; `<ul>` untuk daftar tanpa urutan seperti bidang minat. Pilihan elemen daftar berpengaruh terhadap makna dokumen, jadi opsi D juga salah.

### Bagian B — Isian Singkat

6. **`index.html` adalah nama yang dikenali server sebagai halaman default** — saat pengunjung membuka alamat tanpa menyebut nama file, server biasanya menampilkan file bernama `index.html`. Bila file itu tidak ada, alamat tersebut gagal menampilkan halaman utama.
7. **skema/protokol (`https`), domain (`tokosaya.id`), dan jalur menuju file (`/katalog.html`)** — skema menunjukkan cara pengaksesan, domain menunjukkan alamat website, dan jalur menunjukkan letak file di dalamnya.
8. **halaman = satu dokumen HTML; website = kumpulan halaman yang saling terhubung + aset pendukung** — aset seperti gambar, file CSS, font, dan ikon disimpan dalam folder proyek yang sama agar rapi dan mudah dipindahkan.
9. **teks pengganti saat gambar gagal dimuat atau tidak dapat dilihat** — terutama membantu pengguna *screen reader*; atribut `alt` juga tampil di slot gambar yang rusak sehingga isi halaman tetap terbayangkan.
10. **halaman yang masih menampilkan versi lama meski kode sudah diubah** — pesan pentingnya: browser membaca kode apa adanya, bukan menebak maksud kita, sehingga tampilan yang salah biasanya menandakan ada bagian HTML/CSS yang perlu diperiksa; karena itu biasakan menyimpan, memuat ulang, lalu memeriksa.

---

## Bab 02 — HTML5 dan Struktur Semantik

### Bagian A — Pilihan Ganda

1. **A** — atribut `lang` memberi tahu bahasa halaman sehingga pembaca layar melafalkan kata dengan aturan yang tepat, kamus memeriksa ejaan, dan mesin dapat menerjemahkan konten; pengodean karakter adalah tugas `meta charset` (B), cakupan pengunjung bukan urusan `lang` (C), dan penyesuaian lebar layar adalah tugas `meta viewport` (D).
2. **B** — `width` dan `height` membuat browser memesan ruang gambar sebelum file termuat sehingga halaman tidak melompat saat gambar muncul; atribut ini bukan ukuran cadangan saat gambar gagal dimuat (A), gambar tetap dapat ditata CSS (C), dan ukuran tersebut tidak mempercepat pengunduhan dengan cara itu (D).
3. **C** — pasangan `figure`–`figcaption` menyatakan bahwa gambar dan keterangannya saling berhubungan, sesuai kebutuhan ilustrasi hero; logo tidak memerlukan keterangan tambahan karena teks `alt`-nya sudah cukup sehingga `figure` tidak dipakai (B dan D salah), dan tidak ada ketentuan satu `figure` per halaman (A salah).
4. **D** — `article` dipakai untuk konten yang lengkap dan dapat berdiri sendiri; tes sederhananya, isi tetap masuk akal bila dipindah atau dibagikan. `aside` (A) untuk konten sampingan yang dapat dilepas, `div` (B) hanya dipakai bila tidak ada elemen semantik yang cocok, dan `section` (C) untuk himpunan tematik di dalam halaman.
5. **A** — level heading dipilih menurut tingkatan informasi, bukan ukuran huruf, sehingga `h3` tetap dipakai dan ukurannya diatur lewat CSS; menambahkan `h3` di akhir (B) tidak memperbaiki urutan, paragraf tebal (C) menghilangkan struktur heading, dan aturan larangan memakai `h3` (D) tidak ada.

### Bagian B — Isian Singkat

6. **mengatur pengodean karakter agar huruf dan simbol seperti tanda "—" tampil dengan benar** — tanpa deklarasi ini, karakter khusus dapat tampil berantakan karena browser menebak pengodean yang dipakai; `UTF-8` adalah pengodean baku proyek Tokosaya.
7. **`ul` berisi `li` untuk daftar merek, dan `ol` berisi `li` untuk langkah pembelian** — pilih list dari maknanya: langkah yang berurutan memakai `ol`, sedangkan himpunan yang setara memakai `ul`; keduanya memakai `li` untuk tiap butirnya.
8. **tabel dipakai untuk data tabular, bukan untuk layout** — tabel untuk layout memalsukan makna data sehingga pembaca layar berusaha membaca "tabel" yang sebenarnya bukan data, dan pemeliharaannya menyulitkan; layout adalah tugas CSS (Bab 6 dan Bab 7).
9. **`for` pada label dan `id` pada textarea dengan nilai yang sama, misalnya "pesan"** — tanpa pasangan itu, pengguna pembaca layar menemukan kontrol tanpa nama dan klik label tidak mengarahkan fokus ke kolom; atribut `name` hanya menentukan nama data yang dikirim.
10. **informasi kontak penulis atau organisasi pada halaman/bagian terkait** — `address` menandai blok kontak sehingga dikenali sebagai informasi kontak, bukan sekadar paragraf biasa; itulah sebabnya alamat Tokosaya pada footer memakai elemen ini.

---

## Bab 03 — Dasar-Dasar CSS

### Bagian A — Pilihan Ganda

1. **B** — CSS bekerja secara deklaratif: browser mencocokkan setiap selector dengan elemen DOM, menggabungkan semua aturan yang cocok, lalu memutuskan nilai yang bertabrakan lewat kaskade; CSS bukan urutan program yang berhenti di aturan pertama (A), bukan hanya aturan paling akhir (C), dan specificity diperiksa sesudah pencocokan, bukan sebelum (D).
2. **C** — sekali `!important` dipakai, konflik berikutnya biasanya harus dilawan dengan `!important` lain yang lebih spesifik sehingga berkas gaya makin sulit dipercaya; menurut bab ini `!important` hanya untuk keadaan darurat. Opsi lain keliru: `!important` tetap didukung browser modern (A), justru melompati tingkat specificity alih-alih menurunkannya (B), dan tidak menyentuh pewarisan (D).
3. **A** — pasangan (id, class, elemen): `#pengantar` menyumbang 1 id, sedangkan `.lead` dan `:hover` sama-sama masuk kolom class/pseudo-class sehingga berjumlah 2, dan tidak ada selector elemen. Opsi B melupakan `:hover`, opsi C melupakan id, dan opsi D menghitung satu elemen yang sebenarnya tidak ada.
4. **D** — `:first-child` mengikuti posisi butir di HTML sehingga penekanannya tetap tepat ketika isi daftar berubah, tanpa class khusus yang harus disunting ulang. Opsi A salah karena pseudo-class tidak otomatis menang atas class; opsi B salah karena class pada `<li>` tetap sah dipakai; opsi C salah karena justru daftar yang isinya berubah tetap tertangani.
5. **C** — `rem` berpatokan pada ukuran font elemen akar (`html`), jadi 1,75 × 16px = 28px. Opsi A berasal dari salah hitung 1,75 × 10px; opsi B setara 1,5rem; opsi D setara 2rem.

### Bagian B — Isian Singkat

6. **inline (atribut `style` pada elemen), internal (elemen `<style>` di `head`), dan external (berkas `.css` terpisah yang dihubungkan dengan `<link>`)** — jangkauannya bertingkat: satu elemen, satu halaman, lalu seluruh halaman proyek; karena bisa dipakai ulang dan mudah dirawat, external CSS menjadi default proyek.
7. **tebal `1px`, gaya garis `solid`, dan warna `#E2E8F0`** — `border` adalah deklarasi singkat yang menetapkan ketebalan, gaya garis (`solid`, `dashed`, atau `dotted`), dan warna sekaligus.
8. **karena `background-color`, seperti `border`, `padding`, dan `margin`, termasuk properti yang tidak diwariskan** — inheritance hanya berlaku pada properti tertentu (misalnya `color`, `font-family`, `line-height`); bila seluruh properti kotak ikut diwariskan, setiap elemen anak akan menyalin latar, tepi, dan jarak induknya sehingga tampilan halaman berantakan.
9. **`rem` mengikuti ukuran font elemen akar (`html`), sehingga teks ikut membesar ketika pengguna memperbesar font dasar browser** — `px` bernilai tetap dan mengabaikan setelan itu; karena itu `rem` dianjurkan untuk ukuran font demi aksesibilitas.
10. **komentar kepala berkas → dasar halaman (`body`) → tipografi dasar (heading, paragraf, link) → bagian halaman berurutan (header–navigasi, isi `main`, footer) → utilitas kecil** — urutan penulisan adalah bagian dari kaskade, sehingga gaya umum di awal dan gaya khusus di akhir membuat konflik dengan specificity setara lebih mudah diprediksi; komentar pemisah juga memudahkan anggota tim menemukan bagian yang dicari.

---

## Bab 04 — Tipografi dan Visual Design CSS

### Bagian A — Pilihan Ganda

1. **B** — dua tag `preconnect` adalah instruksi agar browser membuka koneksi lebih awal ke server font sehingga unduhan font sesudahnya lebih cepat; opsi A keliru karena preconnect bukan pengunduh berkas maupun penyimpanan offline, opsi C adalah tugas parameter `wght@` pada URL font, dan opsi D adalah perilaku `display=swap`.
2. **A** — judul besar tampil lebih bernapas bila jarak antarhurufnya dirapatkan sedikit (`-0.02em`), sementara label kapital kecil justru butuh jarak renggang (`0.08em`) agar tidak menyerupai gumpalan; opsi B membalik keduanya, sedangkan C dan D mengabaikan bahwa kebutuhan kedua ukuran itu berlawanan.
3. **C** — bab menganjurkan gradien seperti bumbu: satu–dua titik per halaman pada hero dan CTA, sedangkan permukaan membaca seperti kartu produk tetap solid putih; opsi A dan B melanggar batas itu, dan opsi D berlebihan sebab hero/CTA tetap boleh bergradien asalkan kontras teksnya terverifikasi.
4. **D** — `opacity` menyetel tembus pandang seluruh elemen dari `1` sampai `0`, sehingga kartu beserta isinya meredup dan tampak nonaktif; opsi A hanya memudarkan warna teks, opsi B hanya menyetel tembus pandang warna latar (sifat `rgba()`), dan opsi C justru memberi kesan kartu terangkat.
5. **B** — `--clr-accent: #F59E0B` adalah amber untuk badge dan sorotan seperti "Best Seller"; opsi A adalah `--clr-success` untuk status tersedia, opsi C adalah `--clr-primary-dark` untuk hover dan ujung gradien, dan opsi D adalah `--clr-danger` untuk sinyal urgensi.

### Bagian B — Isian Singkat

6. **Poppins untuk judul dan Inter untuk teks isi** — Poppins yang bulat dan geometris dipakai elemen judul (`h1`–`h3`) agar halaman terasa ramah dan modern, sedangkan Inter yang tenang dan dirancang untuk antarmuka dipakai paragraf serta deskripsi produk yang dibaca dalam waktu lama.
7. **`2.25rem` batas minimum, `5vw` ukuran ideal mengikuti lebar layar, `3rem` batas maksimum** — pada layar sempit judul tidak menyusut di bawah 2,25rem (36px) dan pada layar lebar tidak membengkak melebihi 3rem (48px), sehingga ukuran tetap proporsional tanpa media query berlapis.
8. **`text-transform` dengan nilai `uppercase`** — teks asli tetap ditulis normal di HTML dan bentuk kapital hanya hasil tampilan; pola yang sama dipakai untuk label kategori dan badge sehingga konten tidak perlu diubah hurufnya secara manual.
9. **warna semantik dibawa latar tint tipis (misalnya `rgba(22, 163, 74, 0.12)`), sedangkan teks memakai warna gelap seperti `--clr-body` atau `--clr-dark`** — hijau murni `#16A34A` di atas latar terang hanya ± 3,3:1 sehingga gagal ambang WCAG AA 4,5:1 untuk teks kecil; dengan pola tint + teks gelap, makna warnanya tetap terbaca (teks `--clr-body` di atas tint hijau ± 8,7:1).
10. **nama token mengungkap makna/perannya, bukan nilainya** — jika warna brand bergeser dari indigo ke warna lain, cukup nilai `--clr-primary` di `:root` yang diganti sementara semua komponen tetap memanggil `var(--clr-primary)`; token bernama `--indigo` akan langsung menyesatkan begitu warnanya bukan indigo lagi.

---

## Bab 05 — CSS Box Model dan Layout

### Bagian A — Pilihan Ganda

1. **D** — jarak dari bingkai ke poster lain di dinding melambangkan *margin*: ruang luar yang transparan dan tidak ikut warna elemen; content adalah kanvas posternya, padding adalah passe-partout, dan border adalah bingkai kayunya.
2. **A** — `min-height` memberi ruang minimum sambil tetap mengizinkan kotak memanjang saat isi bertambah; `height` mengunci tinggi sehingga isi yang bertambah bisa terpotong (kegagalan aksesibilitas), sedangkan `max-height` justru membatasi pertumbuhan.
3. **B** — `inline-block` mengubah jenis kotak, bukan penempatannya; `top`/`right` pada elemen `static` diabaikan (A), `z-index` hanya mengatur susunan tumpukan (C), dan `display: block` membuat badge memaksa baris baru, bukan menempel di pojok (D).
4. **B** — `auto` menampilkan bilah gulir hanya bila diperlukan sehingga halaman utama tidak ikut menggulir dan pengguna tidak kehilangan konteks; A melukiskan `hidden`, C melukiskan `scroll`, dan D melukiskan `visible`.
5. **C** — pada mode bawaan (`content-box`), lebar di layar = 300 + (20 × 2) + (2 × 2) = 344 px; setelah `border-box` dipasang, angka `width` menaungi padding dan border sehingga kotak tetap 300 px sementara area konten menyusut menjadi 256 px (300 − 44).

### Bagian B — Isian Singkat

6. **replaced element** — img dan input adalah elemen inline khusus yang isinya digantikan konten eksternal, sehingga `width` dan `height` tetap diperlakukan seperti pada kotak, bukan diabaikan seperti teks inline biasa.
7. **atribut `title`** — keterangan itu tampil saat pengguna mengarahkan kursor ke elemen sehingga teks penuh tetap teramati meski yang tampak hanya potongan berelipsis; solusinya statis, tanpa perilaku dinamis.
8. **karena `z-index` hanya bekerja pada elemen yang diposisikan (position bukan `static`)** — elemen static mengikuti alur dokumen biasa dan tidak dapat diberi urutan susunan; posisi seperti relative, absolute, fixed, atau sticky harus dipasang lebih dulu, baru z-index berlaku.
9. **8, 16, 24, 32, 48, dan 64 px** — seluruh langkah adalah kelipatan `--space-unit` 8 px; nilai di luarnya hanya untuk koreksi mikro 4 px yang sengaja dicatat di komentar CSS.
10. **karena margin vertikal dua blok bertetangga dapat runtuh (margin collapse) ke nilai terbesar, sedangkan padding tidak** — jarak antarseksi lewat padding kontainer karena itu selalu sesuai angka yang ditulis; lewat margin anak, jarak nyata bisa menyimpang dari perhitungan.

---

## Bab 06 — Flexbox untuk Web Layout

### Bagian A — Pilihan Ganda

1. **B** — `display: flex` mengubah anak langsung wadah menjadi flex item; pada `.site-nav` itu merek dan pembungkus `.site-nav-kanan`. Cucu elemen seperti `<li>` baru menjadi flex item jika `<ul>`-nya sendiri juga dijadikan flex container, sehingga pilihan A (semua keturunan), C (berdasar kelas), dan D (elemen pertama) keliru.
2. **A** — `align-items` bekerja pada cross axis dan nilai defaultnya `stretch`, jadi kartu meregang setinggi baris; `flex: 0 1 250px` mengatur ukuran pada main axis (lebar), bukan tinggi (B), `flex-wrap` hanya mengurus penekukan baris (C), dan `gap` hanya memberi jarak antar-item (D).
3. **C** — `space-around` memberi setiap item ruang sama di kedua sisinya sehingga tepi terluar hanya kebagian setengah; `space-between` menempelkan item pertama dan terakhir ke tepi (A), `space-evenly` menyamakan semua celah termasuk tepi (B), dan `flex-start` tetap mengumpulkan semua item di awal sumbu (D).
4. **B** — auto margin menyerap sisa ruang di sisinya, sehingga `margin-left: auto` mendorong kelompok kanan ke ujung main axis. `justify-content` adalah properti container sehingga tidak berlaku pada item (A), `align-self` bekerja pada cross axis yang pada `row` berarti vertikal (C), dan `order` hanya mengubah urutan visual tanpa mendorong item ke ujung (D).
5. **D** — pada wadah `flex-wrap: wrap`, kolom yang tidak muat turun ke baris baru dan, karena `flex-grow: 1`, mengisi lebar baris barunya, sementara baris di atasnya tetap terbagi rata; itulah responsif tanpa media query. Pilihan A keliru karena penekukan terjadi sebelum item dipaksa menyusut, pilihan B keliru karena kolom yang turun tetap ikut tumbuh, dan flexbox tidak menyembunyikan item seperti pilihan C.

### Bagian B — Isian Singkat

6. **main axis (sumbu utama) dan cross axis (sumbu silang)** — `justify-content` bekerja pada main axis, sedangkan `align-items` bekerja pada cross axis; arah main axis ditentukan `flex-direction`, sehingga peran keduanya bertukar saat arah berubah.
7. **`space-between` bekerja rapi bila wadah punya dua anak langsung, dan kelompok kanan turun sebagai satu blok saat `flex-wrap` aktif** — tanpa pembungkus, sisa ruang menyebar di antara merek, menu, dan keranjang sehingga keranjang tidak konsisten menempel di pojok kanan dan baris kedua bisa pincang; dengan pembungkus, menu dan keranjang menekuk bersama.
8. **`align-self: stretch`** — `align-self` menimpa `align-items` milik wadah untuk satu item saja, jadi kartu unggulan meregang sendirian sementara kartu lain tetap mengikuti `flex-start`.
9. **`order` hanya mengubah urutan visual, sedangkan urutan dokumen HTML tetap asli** — pembaca *screen reader* dan navigasi tombol *Tab* menelusuri urutan dokumen, sehingga urutan yang dibaca bisa berbeda dari yang tampak di layar; batas amannya adalah penyesuaian kecil dengan urutan dokumen yang tetap logis.
10. **buka DevTools Chrome, lalu periksa lencana `flex` pada tab Elements** — flex container dan flex item diberi lencana khusus oleh DevTools sehingga mudah dilacak; periksa lencana itu pada `.produk-row` (posisi `.site-nav` juga bisa dicek sebagai pembanding).

---

## Bab 07 — CSS Grid dan Responsive Web Design

### Bagian A — Pilihan Ganda

1. **C** — area adalah gabungan beberapa sel yang membentuk wilayah persegi; grid track (A) adalah jalur kolom atau baris, sel (B) adalah perpotongan satu kolom dan satu baris, dan gap (D) adalah jarak antar track.
2. **D** — `repeat(2, 200px 1fr)` mengulang seluruh pasangan dua kali sehingga terbentuk `200px 1fr 200px 1fr` atau empat track; angka `2` mengulang pasangan, bukan menggandakan tiap ukuran (C) maupun menyusun ulang urutannya (B).
3. **B** — `gap` dipahami browser sebagai jarak di dalam kerangka sehingga setiap sel mendapat hak yang sama tanpa trik menyisihkan sel pertama atau sel terakhir dari `margin`, misalnya lewat `:last-child`. `gap` juga tidak menerima satuan `fr` (A) dan `margin` tetap boleh dipakai di dalam grid (C); yang menyamakan tinggi baris bukan `gap` melainkan ukuran track (D).
4. **A** — kondisi yang dihubungkan kata `and` menuntut keduanya terpenuhi: lebar viewport minimal 768 piksel dan orientasi portrait. Koma berarti "atau" sehingga B dan D salah, sedangkan C terbalik arahnya karena `min-width` diperlakukan sebagai batas atas.
5. **B** — tanpa tag meta viewport, browser memperlakukan halaman sebagai desktop melebar sehingga pemicu `min-width` seolah tidak pernah tercapai; penulisan kueri sendiri sudah benar, jadi menggabungkan file (A), mengganti arah kueri (C), atau membalik urutan blok (D) bukan penyebab sekaligus perbaikan yang tepat.

### Bagian B — Isian Singkat

6. **`display: grid;`** — deklarasi itu mengubah `.dasbor` menjadi wadah grid sehingga `header`, `nav`, `main`, dan `footer` otomatis diperlakukan sebagai butir grid dan penempatan dua dimensi baru bisa bekerja.
7. **`width: 100%; height: auto; display: block;`** — `width: 100%` mengikat lebar gambar pada wadahnya, `height: auto` menjaga proporsi, dan `display: block` menghilangkan celah kecil di bawah gambar karena gambar secara bawaan berperilaku inline.
8. **navigasi → Flexbox, kerangka halaman → Grid** — baris navigasi hanya mengalir pada satu arah sehingga cukup ditangani Flexbox, sedangkan kerangka header–nav–main–footer membentuk baris dan kolom serentak sehingga tepat ditangani Grid; keduanya boleh dipadukan, Grid untuk kerangka dan Flexbox untuk isi komponennya.
9. **nilai minimum, nilai yang dipilih/dihitung (biasanya campuran `rem` dan `vw`), lalu nilai maksimum** — browser memakai nilai tengah selama berada di antara kedua batas sehingga ukuran huruf ikut menyesuaikan lebar layar namun tetap tertahan pada minimum dan maksimum.
10. **3 kolom** — tiga kolom menuntut 3 × 220 px + 2 × 20 px = 700 px sehingga masih muat di wadah 800 px, sedangkan empat kolom menuntut 4 × 220 px + 3 × 20 px = 940 px dan sudah melebihi; pola `auto-fit` menaruh kolom sebanyak yang muat dengan lebar minimal 220 px, lalu membagikan sisa ruang ke kolom yang ada.

---

## Bab 09 — Pengenalan Bootstrap 5

### Bagian A — Pilihan Ganda

1. **B** — URL pustaka terkunci memakai nomor versi `bootstrap@5.3.3` pada jalur `dist/css/bootstrap.min.css`; opsi A tidak mengunci versi (`@latest`), opsi C adalah berkas *bundle* JavaScript yang sengaja tidak dipakai bab ini, dan opsi D adalah tautan Bootstrap Icons.
2. **C** — `g-4` mengatur *gutter* (jarak antarkolom dan antarbaris) pada `row` dengan skala 4; opsi A mendeskripsikan padding (misalnya `p-4`), opsi B salah menafsirkan angka 4 pada kelas kolom (yaitu tindihan 4 garis dari 12), dan opsi D mendeskripsikan margin pada baris.
3. **A** — `.container-fluid` selalu lebar penuh 100% pada semua ukuran sehingga bilah dapat menempel kiri-kanan; opsi B membatasi lebar mulai 576 px, sedangkan opsi C dan D hanya penuh sampai ambang tertentu lalu terbatas setelahnya.
4. **D** — pada 1000 px, breakpoint `lg` (992 px) sudah aktif sehingga `col-lg-8` dan `col-lg-4` tampil sebaris dengan rasio 8:4 alias 2:1; opsi A salah karena ambangnya sudah tercapai, opsi B salah karena lebar keduanya tidak sama, dan opsi C salah karena kedua kolom tetap tampil dengan kelas dasar `col-12`.
5. **C** — pola `text-bg-*` memberi latar penuh berwarna peran dengan warna teks yang otomatis kontras; `success` adalah nama peran warna (keadaan berhasil atau tersedia), bukan nama warna mentah, sehingga opsi yang menggambarkan tanpa latar, garis tepi saja, atau mengikuti tema sistem tidak sesuai.

### Bagian B — Isian Singkat

6. **768 px; kelas tetap berlaku mulai 768 px ke atas tanpa batas atas** — logika *min-width* mobile-first: kelas berawalan `md` tidak berhenti di 991 px, dan tiap breakpoint yang lebih besar menimpa kelas dasar sebelumnya bila ada.
7. **Bootstrap 5.3.3 → Bootstrap Icons 1.11.3 → Google Fonts (Poppins/Inter) → `css/style.css`; yang wajib paling belakang adalah `css/style.css`** — hukum kaskade: saat dua aturan ber-*specificity* setara bertabrakan, aturan yang termuat paling belakangan menang, sehingga gaya identitas Tokosaya harus dimuat setelah stylesheet pustaka.
8. **padding kanan-kiri skala 4 (1,5 rem) dan padding atas-bawah skala 2** — huruf pertama menunjuk properti (p = *padding*), huruf kedua menunjuk sisi (x = kiri-kanan, y = atas-bawah), dan angka terakhir menunjuk skala spasi.
9. **`col-12 col-md-6 col-xl-3`** — `col-12` menjadi dasar satu kartu per baris; `col-md-6` membuat dua kartu per baris mulai 768 px; `col-xl-3` membuat empat kartu per baris mulai 1200 px.
10. **utility-first; antarmuka disusun dari kelas-kelas atomik kecil yang dikomposisi langsung di HTML** — berbeda dari Bootstrap yang menyediakan kelas komponen siap pakai; pada pemakaian penuh, pendekatan Tailwind lazim ditemani alat perakit (*build tool*).

---

## Bab 10 — Komponen Bootstrap

### Bagian A — Pilihan Ganda

1. **B** — kelas ukuran `h6` hanya mengecilkan tampilan judul, sedangkan elemen `h3` menjaga susunan judul dokumen tetap benar; opsi A keliru karena pembaca layar tetap membacanya, opsi C membalik hubungan semantik dan ukuran, dan opsi D tidak ada kaitannya dengan judul kartu.
2. **A** — `container` menjaga lebar isi navbar selaras dengan bagian halaman lain; menu yang mendatar sejak 992 piksel berasal dari `navbar-expand-lg` (opsi C), dan daftar menu maupun tombol hamburger tidak mensyaratkan `container` (opsi B dan D).
3. **C** — pada Bootstrap 5.3 kelas `text-bg-*` mengatur warna latar sekaligus warna teks supaya kontrasnya tetap terbaca; kelas dasar `badge` tetap dibutuhkan (opsi B salah), dan kelas ini tidak menyentuh ikon di dalam badge (opsi D salah).
4. **D** — konvensi bab ini menulis harga sebagai `Rp650.000`: tanpa spasi setelah "Rp" dan tanpa desimal; opsi A memakai spasi, opsi B menambah desimal, dan opsi C memakai huruf kecil.
5. **B** — modal statis memakai kelas `show` plus gaya *inline* `display: block; position: static;` bertanda komentar khusus demonstrasi; `open` dan `active` bukan mekanisme modal Bootstrap (opsi A dan C), sedangkan `data-bs-backdrop` hanya dibaca paket JavaScript (opsi D).

### Bagian B — Isian Singkat

6. **font ikon yang dipanggil lewat pasangan kelas `bi bi-nama-ikon`, misalnya `bi bi-cart3`** — Bootstrap Icons 1.11.3 dikemas sebagai *icon font*; ikon keranjang Tokosaya ditulis `<i class="bi bi-cart3" aria-hidden="true"></i>` karena hanya hiasan di samping kata "Keranjang".
7. **`role="alert"`** — atribut itu membuat pembaca layar mengumumkan pesan alert, sehingga peringatan seperti stok terbatas tetap tersampaikan kepada pengguna yang tidak melihatnya secara visual.
8. **kelas `active` dengan atribut `aria-current="page"` pada kedua komponen** — pada breadcrumb penanda itu diletakkan di item terakhir (`breadcrumb-item active`) yang tidak lagi berupa tautan, sedangkan pada pagination di item `page-item active` yang isinya ditulis sebagai `span` ber-`page-link`.
9. **Batal memakai `btn-secondary`, "Ya, Hapus" memakai `btn-danger`** — pembatalan adalah aksi netral sehingga memakai warna abu, sedangkan penghapusan adalah aksi destruktif sehingga memakai merah sesuai bahasa warna semantik komponen.
10. **item pertama, yang berkelas `carousel-item active`** — kelas `active` menandai gambar yang tampil; item kedua tetap tersimpan di markup tetapi tidak terlihat karena tanpa paket JavaScript carousel berhenti pada item aktif itu.

---

## Bab 11 — Form dan User Interface Design

### Bagian A — Pilihan Ganda

1. **B** — `optgroup` membungkus `option` yang sejenis dan atribut `label`-nya memberi nama kelompok di dalam `select`; `fieldset`/`legend` mengelompokkan medan, bukan pilihan di dalam `select`.
2. **C** — `type="tel"` menyesuaikan jenis keyboard sehingga perangkat yang mendukung biasanya menampilkan pad angka; ia tidak otomatis menolak karakter, tidak menyamarkan isian, dan tidak memeriksa kode wilayah.
3. **A** — `textarea` menyimpan isi di antara tag pembuka dan penutup, sedangkan `input` pada atribut `value`; atribut `rows` hanya mengatur tinggi awalnya, sehingga baris yang tampak masih dapat berubah.
4. **D** — `required` memicu pemeriksaan bawaan browser: pengiriman ditahan dan pesan wajib isi ditampilkan, semuanya tanpa JavaScript. Kelas `is-invalid` dan `invalid-feedback` adalah status statis yang ditulis manual, bukan efek `required`.
5. **B** — gaya fokus yang terlihat adalah penunjuk utama bagi pengguna keyboard; bab ini menegaskan cincin fokus jangan dihapus, dan pembedaan `:focus`—`:focus-visible` justru membuat fokus keyboard tetap menonjol tanpa berlebihan.

### Bagian B — Isian Singkat

6. **`form-text` adalah bantuan permanen, sedangkan `invalid-feedback` pesan status yang baru tampil saat medannya memakai `is-invalid`** — teks bantuan menjelaskan format atau alasan data diminta dan selalu ada; pesan status hanya aktif berpasangan dengan kelas status medannya.
7. **`mb-3` memberi jarak antarkelompok medan di luar `row`, sedangkan `g-3` memberi gutter antarsel grid di dalam `row`** — keduanya menjaga ritme jarak; pilih satu pola lalu pakai konsisten agar jaraknya tidak terasa acak.
8. **browser dapat mengisi ulang data yang tersimpan sehingga salah ketik berkurang dan pengisian lebih cepat, sekaligus menyatakan tujuan medan dengan cara yang bisa diprogram (WCAG 1.3.5)** — dua manfaat itu diperoleh dari satu atribut yang sama.
9. **tidak tepat — `select` berisi pilihan tertutup, bukan teks bebas, sehingga status "tidak dapat diubah" untuk `select` memakai `disabled`, dengan konsekuensi isinya tidak ikut terkirim** — `readonly` memang ditujukan untuk medan teks yang isinya tetap terkirim bersama form.
10. **wajar bila medan itu memang tugas utama halaman, contohnya medan pencarian pada halaman pencarian sederhana; dihindari bila bukan, contohnya medan nama pada halaman kontak** — perpindahan fokus otomatis dapat membingungkan pengguna keyboard yang mulai membaca halaman dari awal.

---

## Bab 12 — UI/UX dan Design System

### Bagian A — Pilihan Ganda

1. **B** — UI adalah seluruh wajah visual yang dilihat dan disentuh pengguna, mulai dari layout, warna, huruf, tombol, sampai ikon; UX cakupannya lebih luas, yaitu seluruh rasa dan hasil yang dialami pengguna dari awal membuka halaman sampai selesai berbelanja. Opsi A membalik kedua definisi, sedangkan opsi C dan D mempersempit UI atau UX menjadi satu bagian saja.
2. **A** — keempat lapisan design system tersusun dari bawah ke atas: design token, lalu komponen, lalu pola dan aturan, dan terakhir dokumentasi berupa `styleguide.html`; setiap lapisan mengonsumsi lapisan di bawahnya, sehingga komponen memakai token dan halaman memakai komponen.
3. **D** — panjang baris dijaga sekitar 60–75 karakter karena baris yang terlalu panjang membuat pembaca tersesat saat kembali ke baris berikutnya di layar lebar, sedangkan perpindahan baris yang terlalu sering membuat mata cepat lelah; aturan ini tidak berkaitan dengan keseragaman jumlah kata, pencetakan A4, maupun pengunduhan huruf.
4. **B** — 32 piksel tetap bagian skala 8 piksel Tokosaya, tetapi utilitas Bootstrap melangkah 4 piksel sehingga nilai ini didapat dengan menumpuk utilitas (misalnya `mt-5 mb-2`) atau satu kelas kustom seperti `margin-block: 32px`. Opsi A menyimpang ke 24 piksel, opsi D memakai 30 piksel yang bukan kelipatan 8, dan opsi C menaruh nilai mentah berulang di markup, padahal aturan jarak seharusnya tinggal di CSS sebagai kelas.
5. **C** — aturan do and don't melarang warna dijadikan penyampai makna satu-satunya karena pengguna dengan penglihatan warna terbatas akan kehilangan makna, sehingga perlu ditambahkan ikon atau teks status. Opsi A bukan aturan apa pun, opsi B terbalik karena nilai mentah justru dilarang, dan opsi D melanggar aturan "jangan teks kuning di atas putih untuk teks paragraf".

### Bagian B — Isian Singkat

6. **affordance** — istilah dari Don Norman untuk isyarat visual bahwa sebuah objek menyediakan cara interaksi tertentu; tombol berlatar warna dan berlengkung terlihat bisa ditekan, sedangkan teks biru `--clr-primary` terlihat bisa disentuh sebagai link. Antarmuka melanggar affordance ketika sesuatu yang seharusnya tombol tampil sebagai teks polos tanpa batas atau lengkungan.
7. **pengguna cukup belajar sekali lalu bisa mengulangi polanya, dan perilaku yang seragam memberi kesan organisasi yang rapi** — dari sisi desain, konsistensi membentuk pola sehingga pengguna tidak perlu belajar ulang; dari sisi kepercayaan, elemen yang berlaku seragam membuat pengguna yakin organisasinya tertata, kebalikan dari dua fakultas yang menamai menu akademik dengan label berbeda.
8. **8, 16, 24, 32, 48, dan 64 piksel** — semuanya kelipatan 8 sesuai `--space-unit: 8px`, sehingga keputusan jarak tinggal memilih dari enam opsi; pemetaan lazimnya: 8 piksel jarak dalam komponen, 16 piksel antar elemen berpasangan seperti label–input, 24 piksel antar kartu, 32 piksel antar kelompok form, 48 piksel antar section, dan 64 piksel jarak besar header/footer.
9. **desainer, penulis kode, dan penjaga merek/pemilik produk** — desainer memakai styleguide sebagai palet saat memilih varian yang tepat, penulis kode (termasuk anggota baru) menyalin pola markup agar markup produksi dan dokumentasi tidak saling menjauh, sedangkan penjaga merek/pemilik produk memakainya untuk review karena semua contoh terkumpul dalam satu tampilan.
10. **status visual tetap didokumentasikan di styleguide, sedangkan perilaku interaktif diserahkan kepada JavaScript** — navbar desktop dapat tampil penuh tanpa JavaScript sehingga sampelnya didokumentasikan statis; tombol buka-tutup (hamburger) di layar sempit, modal, dan dropdown membutuhkan paket JavaScript Bootstrap sehingga perilaku interaktifnya di luar cakupan dan dijelaskan lewat catatan dokumentasi, sementara kelas `.show` dan layout panelnya tetap dicatat.

---

## Bab 13 — Website Responsif dan Accessibility

### Bagian A — Pilihan Ganda

1. **B** — gaya dasar untuk layar kecil yang sederhana lebih sedikit saling menimpa sehingga media query `min-width` tinggal menambah aturan; media query tetap diperlukan (A), tiap perangkat punya lebar berbeda (C), dan *breakpoint* tetap ditetapkan sebagai keputusan proyek (D).
2. **D** — angka ajaib adalah nilai seperti 578 px, 693 px, atau 1024 px yang dipilih hanya karena layout terasa rusak di lebar itu sehingga sulit dirawat dan tidak menceritakan maksud; pilihan yang selaras Bootstrap pada opsi A–C justru pola yang dianjurkan.
3. **A** — `clamp(min, ideal, max)` mengurung ukuran antara 1,75rem dan 2,75rem, dengan nilai tengah `4vw + 1rem` yang membuatnya mengalir mengikuti lebar *viewport*; bukan selalu 2,75rem (B), tidak tumbuh tanpa batas (C), dan tidak mengecil saat layar melebar (D).
4. **C** — tabel butir pemeriksaan menempatkan `lang="id"` pada `<html>` di bawah prinsip Understandable karena bahasa halaman harus dapat dipahami; Perceivable berkaitan dengan alternatif konten, Operable dengan operasi keyboard, dan Robust dengan markup yang terbaca teknologi bantu.
5. **B** — aturan bab ini adalah hindari `tabindex` positif dan biarkan urutan DOM yang membawa urutan tab, sementara `-1` dipakai secara programatik dan `0` hanya pada kasus sangat spesifik; nilai `0` tidak menjadikan elemen fokus pertama (D), dan nilai positif tidak berkaitan dengan kecepatan fokus (A) maupun batas angka (C).

### Bagian B — Isian Singkat

6. **satu `<h1>` per halaman dan heading turun bertingkat tanpa melompat (`h1→h2→h3`, bukan `h2` ke `h5`)** — pengguna *screen reader* sering menelusuri halaman dari heading ke heading sehingga heading berfungsi seperti peta atau daftar isi; urutan yang melompat membingungkan orientasi mereka. Ukuran tampilan tidak menentukan level heading.
7. **`alt="Keyboard Mekanis KX-210 dengan 87 tombol"`** — `alt` yang baik menggambarkan kegunaan gambar dalam konteks halaman, bukan nama berkasnya; teks inilah yang dibacakan *screen reader* dan yang tampil saat gambar gagal dimuat.
8. **elemen pertama di dalam `<body>`; melompat ke `#konten-utama`; elemen tujuan seperti `<main>` memakai `tabindex="-1"`** — pola CSS murni ini memenuhi kriteria *bypass blocks* WCAG: link tersembunyi di luar layar sampai menerima fokus, lalu halaman melompat melewati seluruh header.
9. **Pola A *flex-wrap*, Pola B menumpuk di layar kecil, dan Pola C *footer-nav*; tinggi *target* sentuh sekitar 44 px termasuk padding** — Pola B yang dipakai praktikum Tokosaya (menu vertikal di bawah 768 px, horizontal mulai 768 px), sedangkan *target* 44 px menjaga link tetap nyaman disentuh jari.
10. **4,5:1 untuk teks normal; 3:1 untuk teks besar; 3:1 untuk elemen antarmuka non-teks** — teks besar kira-kira 24 px biasa atau 18,66 px tebal; angka-angka ini diverifikasi lewat pemeriksa kontras di DevTools, bukan ditebak.

---

## Bab 14 — Implementasi Desain Figma ke HTML CSS

### Bagian A — Pilihan Ganda

1. **B** — rantai lima tahap berjalan dari brief, lalu arsitektur informasi dan sitemap, lalu wireframe, lalu UI design di Figma, dan terakhir handoff; opsi lain menukar-nukar urutan tahapnya.
2. **D** — prototip adalah simulasi desain yang menjawab "seperti apa bentuknya", sedangkan implementasi adalah kode sebenarnya yang menjawab "bagaimana bentuk itu hidup di semua layar"; keduanya menjawab pertanyaan berbeda, jadi opsi B dan C salah, dan opsi A keliru karena prototip bukan kode HTML.
3. **A** — gutter adalah celah antarkolom 24 px, sedangkan margin adalah jarak sisi kiri-kanan frame ke kontainer (150 px pada frame 1440 untuk kontainer 1140); opsi B menukar perannya, opsi C menyamakan gutter dengan lebar kolom, dan opsi D mengarang arti keduanya.
4. **B** — lapis pertama memetakan setiap color style menjadi CSS custom property di blok `:root`, lapis kedua memetakan setiap text style menjadi aturan tipografi yang menyalin ukuran, ketebalan, dan line-height; opsi A menukar kedua lapis, opsi C mencampur keduanya, dan opsi D melanggar disiplin token.
5. **C** — dua kolom berurutan berukuran 2 × 73 + 24 = 170 px; 146 px mengabaikan gutter, 194 px menghitung dua gutter, dan 219 px menghitung tiga kolom.

### Bagian B — Isian Singkat

6. **variabel desain berbasis peran (warna, font, radius, jarak) sebagai satu sumber kebenaran, dikumpulkan di blok `:root` pada `css/style.css`** — token dipetakan sekali dari Figma styles lalu dipakai ulang lewat `var(--…)`, sehingga ketika desain diperbarui cukup blok `:root` yang disalin ulang.
7. **karena 12 mudah dibagi rata menjadi 2, 3, dan 4 bagian** — kombinasi seperti 6+6 (setengah), 4+4+4 (sepertiga), dan 8+4 tetap rapi tanpa kolom bersisa.
8. **nilai disalin ke tabel token sendiri lalu ditulis ulang dengan disiplin token dan kelas Bootstrap proyek** — panel Inspect bisa menyarankan struktur CSS yang berbeda dari struktur proyekmu, sehingga salinan mentah berisiko menambah nilai liar dan aturan berulang yang sulit diaudit.
9. **tablet 768 px: gutter 24 px dan margin kontainer 32 px; HP 375 px: gutter 16 px dan margin kontainer 24 px** — kolom detail produk mulai menumpuk pada ≤ 767 px memakai `col-12`, dengan judul halaman menyusut ke 24 px.
10. **"Tersedia" memakai `--clr-success` `#16A34A`, sedangkan "Stok Terbatas" memakai `--clr-danger` `#DC2626`** — keduanya diwujudkan lewat kelas `.badge-tersedia` dan `.badge-stok` dengan teks putih pada format badge pil 12 px.

---

## Bab 15 — Final Project dan Quality Assurance

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

---


