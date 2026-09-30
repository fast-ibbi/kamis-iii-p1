---
marp: true
theme: academic
paginate: true
size: 16:9
title: "Bab 1 — Pengantar Frontend Development dan Web Design"
description: "Fondasi frontend development, posisi frontend dalam pengembangan sistem informasi, anatomi website, dan penulisan dokumen HTML pertama."
footer: "Bab 1 · Pengantar Frontend Development dan Web Design"
---

<!-- _class: lead -->
<!-- _paginate: skip -->

# Pengantar Frontend Development<br>dan Web Design

**Bab 1** · Pintu masuk seluruh buku · Studi kasus Tokosaya

<!--
Slide pembuka sekaligus janji satu semester. Tekankan bahwa bab ini bukan sekadar
daftar istilah: di akhir pertemuan mahasiswa sudah punya satu halaman HTML yang
berjalan di peramban. Tanyakan pembuka: "Siapa yang pernah membuka DevTools
tanpa sengaja?" Jawaban biasanya banyak, dan itu pintu masuk yang murah.
-->

---

# Tujuan Pembelajaran

Setelah menyelesaikan bab ini, mahasiswa mampu:

- Menjelaskan definisi dan lingkup kerja *frontend development*
- Membedakan tanggung jawab frontend dan backend pada sebuah website
- Menempatkan frontend dalam alur pengembangan sistem informasi
- Membedakan *web design*, UI, UX, HTML, dan CSS serta alur *design → code*
- Menulis halaman HTML pertama, menginspeksinya, dan menata folder proyek

<!--
Bacakan kelima butir dengan tempo cepat, jangan dijelaskan satu per satu sekarang.
Yang perlu ditegaskan hanya ini: butir 1 sampai 4 adalah pemahaman konsep (CPMK 1),
butir 5 adalah keterampilan yang langsung dinilai (CPMK 2) pada UTS dan UAS.
Tanyakan: "Mana butir yang menurut Anda paling menakutkan?" Catat jawabannya,
lalu tunjukkan lagi di akhir pertemuan untuk membandingkan.
-->

---

# Klien Berbicara Bahasa Kebutuhan

**Tokosaya** — toko online UMKM, berdiri 2019 di Jakarta, menjual aksesori dan elektronik komputer.
Tagline: **"Belanja Tepat, Kirim Cepat"**.

Selama bertahun-tahun penjualan lewat pesan singkat: pembeli menanyakan stok lewat chat, pemilik membalas satu per satu, pengiriman dicatat di buku. Usaha tetap jalan, tetapi pemilik mulai kewalahan.

> "Saya ingin toko saya ada di internet, orang bisa lihat produknya, dan bisa menghubungi saya."

- Tidak ada satu pun kata HTML, CSS, *server*, atau basis data
- Yang ia sebut hanya: bisa dilihat, bisa dicari, bisa dihubungi, tetap tepercaya

<!--
Poin utama slide ini: klien SI tidak pernah berbicara dengan bahasa teknologi, dan itu
normal. Jangan biarkan mahasiswa menyimpulkan pemilik Tokosaya "kurang paham"; justru
kalimat itu adalah rumusan kebutuhan yang paling jujur. Tanyakan: "Apa yang berubah
kalau kita menerima kalimat ini apa adanya sebagai spesifikasi?" (Jawaban: tidak ada
yang bisa dikerjakan, karena kebutuhan belum diterjemahkan.)
-->

---

<!-- _class: center -->

# Apa yang harus **tampil**, apa yang harus **tersimpan**?

Dua pertanyaan yang memisahkan pekerjaan frontend dan backend.

<!--
Interaksi lisan, jangan buka jawabannya sekarang. Gambar dua kolom di papan tulis
berlabel TAMPIL dan TERSIMPAN, lalu minta mahasiswa menyebutkan contoh dari kisah
Tokosaya. Catat semua usulan tanpa dikoreksi dulu; koreksinya menyusul pada slide
soal ruang kafe dan dapur. Batas waktunya dua menit saja, jangan sampai melebar.
-->

---

# Apa Itu *Frontend Development*

Pekerjaan membangun bagian website yang **dilihat, dibaca, dan diklik** pengguna di peramban.

- *Front* — sisi depan yang menghadap pengunjung
- Tiga lapisan: **HTML** (struktur), **CSS** (tampilan), **CSS framework** (komponen)
- Contoh konkret: judul besar di atas, foto produk di tengah, tombol di bawahnya

> Frontend adalah wilayah "segala sesuatu yang tampak di layar".

<!--
Tekankan kata "pekerjaan", bukan "hobi" atau "bakat seni". Lingkup kerja inilah yang
akan dinilai klien, dan yang membuat kartu produk di Tokosaya layak atau tidak layak.
Tanyakan: "Apakah memilih kata untuk tombol termasuk pekerjaan frontend?" (Jawaban:
ya, karena teks tombol dibaca dan diklik pengguna.) Salah paham yang sering muncul:
mahasiswa menganggap frontend hanya soal warna dan keindahan.
-->

---

# Batas Lingkup: yang Bukan Frontend

Buku ini adalah mata kuliah **translasi desain** — HTML dan CSS, tanpa JavaScript.

- Interaksi dinamis (keranjang bertambah) — mata kuliah pemrograman lanjutan
- Data, logika bisnis, dan basis data — wilayah backend
- Kebutuhan tampilan Tokosaya tetap terpenuhi oleh halaman statis yang baik

> Uji cepat: apakah kebutuhan ini mengubah apa yang dilihat, dibaca, atau disentuh pengguna?

<!--
Mahasiswa semester awal sering frustrasi karena "kok tidak diajari JavaScript".
Jawab jujur dan tuntas: keputusan ini disengaja, karena mata kuliah ini adalah mata
kuliah translasi desain. Ingatkan bahwa sebagian besar kebutuhan tampilan Tokosaya
(kartu produk, hero, formulir kontak, katalog) cukup dengan halaman statis.
Peringatan: jangan sampai mahasiswa menyimpulkan JavaScript tidak penting; ia hanya
berada di mata kuliah lain.
-->

---

# Frontend dan Backend: Ruang Kafe dan Dapur

![w:1080](assets/diagrams/bab-01-pengantar-frontend-development-da-01.svg)

> Pengunjung tidak melihat dapur, tetapi tanpanya ruang kafe hanya berisi furnitur kosong.

<!--
Analogi ini akan dipakai ulang di seluruh buku, jadi pastikan tertanam. Minta satu
mahasiswa menceritakan analogi itu dengan kalimatnya sendiri sebelum Anda lanjut.
Pertanyaan pemandu: "Di kafe, siapa yang berperan sebagai pengantar pesan?"
(Jawaban: pelayan, yaitu permintaan dan respons antara peramban dan server.)
Peringatan: pelayan BUKAN backend; pelayan adalah penghubung keduanya.
-->

---

# Frontend vs Backend

| Aspek | Frontend | Backend |
|---|---|---|
| Bekerja pada | Peramban pengguna | Server |
| Teknologi inti | HTML, CSS, framework antarmuka | Bahasa server + basis data |
| Fokus yang diukur | Tampilan, responsif, aksesibilitas | Keandalan, keamanan, kinerja |
| Hasil yang terlihat | Kartu produk, tombol, formulir | Stok berkurang, pesanan tersimpan |
| Cara pengguna menilai | "Rapi dan mudah" | "Cepat, akurat, tidak bocor" |

<!--
Kunci pembeda yang harus dibawa keluar kelas: frontend mengurus penyajian dan
interaksi di layar, backend mengurus penyimpanan data dan aturan bisnis. Sebutkan
satu kalimat penolak miskonsepsi: frontend bukan bagian yang mudah dan backend bukan
bagian yang canggih, keduanya berbeda jenis tantangan. Tanyakan: "Baris mana yang
paling sulit diukur?" (Jawaban: aksesibilitas, karena tidak kasat mata.)
-->

---

# Memetakan Kebutuhan Tokosaya

| Kebutuhan klien | Kolom | Alasan singkat |
|---|---|---|
| Wujud kotak pencarian | Frontend | Bentuk, ikon, dan tata letaknya |
| Menyaring ratusan produk | Backend | Aturan penyaringan di server |
| Kolom nama dan surel formulir | Frontend | Label dan susunan isian |
| Kirim isi ke halo@tokosaya.id | Backend | Pengiriman dan pencatatan |
| Stok berkurang saat tombol Beli | Backend | Penyimpanan dan aturan bisnis |
| Harga Rp650.000 pada kartu | Frontend | Penyajian data yang sudah ada |

<!--
Kerjakan tabel ini bersama kelas, jangan dibacakan. Tutup kolom "Kolom" lalu minta
mahasiswa menebak untuk setiap baris; baru buka jawabannya. Baris terakhir biasanya
memancing perdebatan: harga datang sebagai data dari server, tetapi cara menulisnya
di kartu adalah kerja frontend. Tekankan pembedaan itu, karena di sini garis pemisah
terlihat paling kabur bagi pemula.
-->

---

<!-- _class: center -->

# Think-Pair-Share: Analogi Anda Sendiri

Cari pasangan analogi **selain** ruang kafe dan dapur untuk menjelaskan frontend dan backend.

2 menit berpasangan · 2 sampai 3 pasangan berbagi

<!--
Ini Latihan Mandiri nomor 1 di buku. Contoh arah jawaban: ruang perpustakaan sebagai
frontend dan gudang buku sebagai backend. Yang dinilai bukan keindahan analoginya,
melainkan alasannya: mana yang dilihat pengguna dan mana yang menyimpan. Jangan
mengoreksi analogi mahasiswa, koreksi alasannya. Bila tidak ada yang mau mulai,
beri satu contoh jelek lebih dulu agar mereka berani.
-->

---

# Alur Pengembangan Sistem Informasi

Buka satu per satu; tanyakan "di tahap mana kita berada sekarang?" sebelum lanjut.

1) **Kebutuhan bisnis** — pemilik Tokosaya ingin toko yang dapat dilihat dan dihubungi
2) **Analisis** — siapa pengunjungnya dan proses apa yang mengalir sampai pesanan
3) **Desain** — tata letak halaman, warna, hierarki tombol
4) **Implementasi** — frontend mewujudkan rancangan; backend membangun layanan data
5) **Pengujian & pemeliharaan** — memeriksa keduanya, lalu menjaga sistem tetap hidup

<!--
Alur ini adalah tulang punggung analisis kebutuhan, jadi jalankan sebagai cerita
berurutan, bukan sebagai daftar hafalan. Tekankan bahwa urutannya tidak boleh
dibalik, dan itulah alasan buku ini menahan Bootstrap sampai Bab 9. Kesalahan umum
yang perlu dicegah: mahasiswa melompat langsung ke implementasi saat diberi tugas
kelompok, lalu bingung ketika rancangannya berubah di tengah jalan.
-->

---

# Keluaran Khas Tiap Tahap

| Tahap | Pertanyaan kunci | Keluaran |
|---|---|---|
| Kebutuhan bisnis | Apa masalah yang diselesaikan? | Daftar kebutuhan utama klien |
| Analisis | Apa yang sistem harus bisa? | Spesifikasi, peran pengguna |
| Desain | Bagaimana tampak dan terasa? | Rancangan antarmuka, tata letak |
| Implementasi | Bagaimana rancangan dihidupkan? | Halaman HTML/CSS + layanan data |
| Pengujian & pemeliharaan | Apakah sesuai dan tetap berguna? | Catatan temuan, perbaikan rutin |

<!--
Gunakan tabel ini sebagai alat orientasi, bukan hafalan. Tanyakan: "Anda sedang
memegang keluaran tahap apa saat menulis HTML profil mahasiswa di praktikum?"
(Jawaban: implementasi, karena rancangannya sudah ditentukan.) Sebutkan contoh dari
konteks lain: sistem perpustakaan kampus, di mana tahap analisis menghasilkan
kebutuhan "peminjam harus bisa melihat status ketersediaan buku".
-->

---

# Frontend Adalah Titik Temu

![w:730](assets/diagrams/bab-01-pengantar-frontend-development-da-02.svg)

> Ketajaman frontend bukan hiasan, melainkan syarat sistem informasi benar-benar dipakai.

<!--
Ini slide yang paling menjawab "kenapa saya, mahasiswa SI, belajar HTML". Ceritakan
skenario nyata: formulir tanpa label dan tombol dengan kata membingungkan membuat
pengguna berhenti di layar pertama, secerdas apa pun backendnya. Tanyakan: "Kalau
frontend buruk, apakah itu kesalahan desainer atau implementer?" (Jawaban: keduanya,
dan jawaban itu justru alasan satu orang memakai tiga topi di slide berikutnya.)
-->

---

# Tiga Topi di Tim Kecil

- **Analis** — mencatat apa yang klien butuhkan
- **Perancang** — menata pilihan visualnya
- **Implementer** — menuliskan HTML dan CSS

Lulusan SI berguna sejak pertemuan pertama dengan klien: mampu mendengarkan kalimat kebutuhan lalu mengubahnya menjadi halaman yang dapat dilihat.

<!--
Jelaskan bahwa tim kecil adalah situasi paling umum pada proyek SI di UMKM dan
lingkungan kampus, jadi tiga topi dalam satu kepala bukan pengecualian melainkan
normal. Buku ini melatih topi ketiga paling intens, tetapi selalu dalam bingkai dua
topi lainnya. Tanyakan: "Topi mana yang paling sering dilupakan mahasiswa saat
mengerjakan tugas?" (Jawaban: analis, karena mereka cenderung langsung menulis kode.)
-->

---

# Empat Istilah yang Sering Tertukar

| Istilah | Lapisan | Satu kalimat pembatas |
|---|---|---|
| Web design | Kerangka besar | Merancang tampilan dan pengalaman halaman |
| UI | Elemen yang disentuh | Tombol, kartu produk, ikon keranjang, formulir |
| UX | Pengalaman menyeluruh | Perjalanan pengguna menuju tujuannya |
| HTML | Struktur | Heading, paragraf, daftar, gambar, tautan |
| CSS | Rupa | Warna, huruf, jarak, tata letak |

> UI adalah *tampaknya*, UX adalah *rasanya*, dan web design menyelaraskan keduanya.

<!--
Istilah ini dipakai sehari-hari secara bergantian, termasuk oleh dosen lain, jadi
perlu dikunci sekarang. Pertanyaan pemandu: "Kasus 'sulit menemukan tombol kontak'
itu masalah UI atau UX?" (Jawaban: keduanya, karena tombolnya ada tetapi perjalanan
menemukannya yang gagal.) Ingatkan bahwa HTML dan CSS bukan istilah desain,
melainkan bahan bangun yang menghidupkan rancangan.
-->

---

# Alur Design → Code

1) **Kebutuhan** diubah menjadi **rancangan** — alat desain seperti Figma (Bab 14)
2) Rancangan diuraikan menjadi **struktur** — bahasa HTML
3) Struktur diberi **rupa** — warna, ukuran, jarak, tata letak
4) Bila kebutuhan berulang, pakai **komponen siap pakai** dari CSS framework

> Desain yang jelas membuat kode menemukan jalannya, bukan mencarinya sendiri.

<!--
Empat langkah ini adalah alur kerja yang akan dilatih berulang di seluruh buku, jadi
tuliskan urutannya di papan dan biarkan tertulis sampai akhir pertemuan. Tekankan
bahwa langkah pertama bukan pekerjaan mahasiswa di mata kuliah ini: Figma dibahas di
Bab 14, dan perannya di sana adalah membaca rancangan, bukan membuatnya dari nol.
Peringatan: mahasiswa cenderung melewati langkah rancangan lalu mengarang tampilan.
-->

---

# Contoh Kecil: Lencana *Best Seller*

Rancangan: lencana kecil berwarna *amber* di pojok kartu Keyboard Mekanis KX-210, teks gelap.

- **HTML** — menuliskan teks lencana pada bagian kartu yang tepat
- **CSS** — memberi latar warna, bentuk bulat, dan ukuran huruf
- **Bootstrap** — kelak menyelesaikannya dengan satu kelas `badge`

Contoh lain: kartu produk putih bersudut membulat dengan harga berwarna indigo.

<!--
Ini contoh yang paling murah untuk memperlihatkan seluruh filosofi buku: rancangan →
struktur → rupa → komponen. Jalankan sebagai cerita, bukan sebagai kode. Tanyakan:
"Kalau Bootstrap menyelesaikannya dengan satu kelas, kenapa kita belajar CSS dulu?"
(Jawaban: agar tahu apa yang kelas itu lakukan dan bisa menyesuaikannya ketika
rancangan tidak mengikuti pola standar.)
-->

---

<!-- _class: center -->

# Mini Kuis: Pilih Lapisan yang Tepat

1. Klien ingin tombol kontak mudah ditemukan tanpa menggulir — frontend atau backend?
2. Tombol "Beli" ditekan dan stok benar-benar berkurang — frontend atau backend?
3. Halaman tampak menyusut di ponsel sampai perlu cubit-zoom — apa penyebabnya?

<!--
Beri 60 detik, minta angkat tangan untuk tiap butir, jangan dibahas panjang. Kunci
ada di slide berikutnya, jadi jangan dibocorkan. Butir 3 sengaja memancing jawaban
"salah tulis CSS", padahal penyebabnya meta viewport yang belum ada di head. Ingat
jawaban yang salah itu, karena dibahas pada slide tentang DevTools.
-->

---

# Kunci Mini Kuis

1. **Frontend** — kebutuhannya mengubah apa yang dilihat dan disentuh pengguna
2. **Backend** — stok berkurang berarti data tersimpan dan aturan bisnis bekerja
3. **`<meta name="viewport">` belum ada** — peramban mengasumsikan lebar meja standar

> Frontend mengurus penyajian dan interaksi di layar; backend mengurus penyimpanan data dan aturan bisnis.

<!--
Ulangi sebab butir 3, karena ini kesalahan paling mahal di praktikum: mahasiswa
menghabiskan waktu mengutak-atik CSS padahal meta viewport tidak pernah ditulis.
Sebutkan rambu yang akan datang: mulai setiap dokumen dari pola lengkap yang sudah
berisi charset dan viewport, jangan menulis dokumen dari nol.
-->

---

# Anatomi Sebuah Website

- **Halaman** (*page*) — satu dokumen HTML yang menampilkan satu layar konten
- **Website** — sejumlah halaman yang saling terhubung lewat tautan
- **Aset** — gambar, berkas CSS, kadang font dan ikon
- **`index.html`** — berkas yang dibuka ketika pengunjung hanya mengetik `tokosaya.id/`

<!--
Poin yang paling sering terlewat adalah baris terakhir. Jelaskan konvensi index:
alamat tanpa nama berkas dianggap menunjuk halaman utama, dan konvensi yang sama
bekerja di komputer sendiri saat kita dobel klik index.html. Itulah sebabnya seluruh
proyek buku ini memakai nama index.html, bukan utama.html atau halaman1.html.
Tanyakan: "Apa jadinya folder tanpa index.html?" (Jawaban: pengunjung melihat daftar
berkas, bukan halaman.)
-->

---

# Pola Folder Proyek Tokosaya

| Berkas / Folder | Peran |
|---|---|
| `index.html` | Halaman beranda |
| `katalog.html` | Daftar produk |
| `tentang.html`, `kontak.html` | Profil toko dan formulir kontak |
| `css/style.css` | Satu berkas gaya bersama untuk semua halaman |
| `img/` | Gambar produk dan logo, semuanya berakhiran `.svg` |

Tiga kebiasaan: satu CSS bersama · nama *kebab-case* · satu halaman satu berkas.

<!--
Tuliskan pohon folder ini di papan dan biarkan terlihat selama praktikum. Tiga
kebiasaan itu terlihat remeh tetapi punya alasan: satu CSS agar perbaikan di satu
tempat menular ke semua halaman; kebab-case agar tautan tidak rontok karena
perbedaan besar kecil huruf antar sistem operasi; satu berkas per halaman agar tidak
ada dokumen raksasa. Peringatan: spasi dan huruf kapital pada nama berkas adalah
sumber bug tautan paling umum bagi pemula.
-->

---

# Domain, Hosting, dan URL

- **Domain** — nama alamat website, mis. `tokosaya.id`, disewa tahunan
- **Hosting** — layanan penyimpan berkas pada server yang selalu menyala
- **Deployment** — menyalin berkas ke server lalu mengaitkannya dengan domain
- `https` adalah skema · `tokosaya.id` adalah domain · `/katalog.html` adalah jalur berkas

> Tautan `<a href="katalog.html">` memakai **jalur relatif**: dibaca dari folder halaman yang membukanya.

<!--
Bedakan domain dan hosting dengan pertanyaan: "Mana yang berupa nama, mana yang berupa
tempat?" Domain adalah nama, hosting adalah tempat berkas disimpan, dan keduanya
disewa terpisah. Untuk latihan bab ini, keduanya belum dibutuhkan sama sekali: berkas
dibuka langsung dari komputer sendiri, konsepnya sama, hanya belum dipasang di
internet. Baris terakhir penting untuk Bab 2, saat tautan antarhalaman mulai ditulis.
-->

---

# Cara Browser Merender Halaman

![w:1080](assets/diagrams/bab-01-pengantar-frontend-development-da-03.svg)

> Pohon dokumen inilah yang disebut *DOM* dan yang akan Anda lihat di panel Elements.

<!--
Jelaskan keempat gerakan itu sebagai urutan yang tidak bisa ditukar, lalu minta
mahasiswa mengulanginya lisan dalam empat kata: diterima, disusun, diberi gaya,
digambar. Pemahaman umum menyebut pohon ini DOM; cukup pahami sebagai wujud struktur
dokumen di dalam peramban. Tanyakan: "Pada langkah mana warna tombol ditentukan?"
(Jawaban: langkah tiga, saat aturan CSS dicocokkan ke elemen pohon.)
-->

---

# Chrome DevTools: Mengamati, Bukan Mengeksekusi

Buka dengan `F12` atau klik kanan halaman lalu pilih **Inspect**.

- **Elements** — pohon tag halaman; mengklik satu baris menyorot elemen itu di halaman
- **Device toolbar** — uji lebar layar dari ponsel sekitar 360 px sampai komputer meja
- Kebiasaan QA yang murah: *simpan → muat ulang → periksa* setiap kali kode berubah

> Browser tidak menebak, browser membaca. Tampilan yang salah selalu punya baris penyebabnya.

<!--
Dua kemampuan di slide ini dikategorikan sebagai pekerjaan mengamati, bukan
mengeksekusi, dan keduanya naik kelas menjadi alat pengujian serius di Bab 7, 13, dan
15. Tekankan kalimat "browser membaca": ini fondasi seluruh mentalitas debugging yang
akan dipakai sampai akhir semester. Peringatan: banyak "bug" pemula sebenarnya hanya
berkas lama yang masih tampil karena halaman belum dimuat ulang.
-->

---

<!-- _class: center -->

# Apa yang Terjadi Jika `<meta name="viewport">` Hilang?

Jawaban dan cara melacaknya ada di slide berikutnya.

<!--
Tahan dulu, jangan dijawab sekarang. Minta mahasiswa berpasangan satu menit lalu
angkat tangan: apakah halaman menjadi rusak, atau tetap tampil dengan cara yang
berbeda? Dua jawaban itu akan muncul, dan keduanya berguna untuk mengoreksi. Bila
kelas terdiam, beri petunjuk bahwa jawabannya muncul di device toolbar pada praktikum
nanti.
-->

---

# Membaca Gejala, Bukan Menebak

**Jika viewport hilang:** halaman tetap tampil, tetapi tidak mengikuti lebar layar perangkat — umumnya tampak besar dan perlu cubit-zoom.

| Keluhan klien | Yang diperiksa |
|---|---|
| "Tombolnya hilang saat dibuka dari ponsel" | Elemen benar ada di struktur? (Elements) |
| "Tulisannya menabrak logo" | Berapa lebar layar pengguna? (device toolbar) |
| "Masih tampil versi yang lama" | Halaman sudah dimuat ulang dengan `F5`? |

<!--
Kunci dari pasangan slide ini: keluhan pengguna hampir selalu datang dalam bahasa
antarmuka, dan tugas analis SI adalah menerjemahkannya menjadi daftar periksa yang
bisa dilacak. Dua pertanyaan pengubah segalanya: elemen apa yang seharusnya ada di
struktur, dan berapa lebar layar yang digunakan. Ingatkan bahwa jawaban butir ketiga
mini kuis sebelumnya ada di baris pertama slide ini.
-->

---

# HTML, CSS, dan CSS Framework

| Teknologi | Mengurus | Contoh |
|---|---|---|
| **HTML** | Struktur konten yang bermakna | Judul, paragraf, daftar, gambar, tautan |
| **CSS** | Rupa dan tata letak | Warna, huruf, jarak, susunan kolom |
| **CSS framework** | Komponen siap pakai | Bootstrap 5, masuk Bab 9 lewat CDN |

> Framework yang dipakai tanpa memahami dasarnya berubah menjadi penjara.

<!--
Kalimat kunci untuk slide ini adalah kutipan di bawah: tanpa memahami dasar, mahasiswa
tahu cara mengambil komponen tetapi tidak tahu mengapa tampilannya begitu, tidak bisa
menyesuaikannya, dan bingung saat komponen itu merusak hal lain. Tanyakan: "Kalau
Bootstrap masuk Bab 9, apa yang membuat kita siap?" (Jawaban: sudah bisa membangun
kartu produk dengan CSS murni, jadi komponen Bootstrap bukan kotak hitam lagi.)
-->

---

# Perangkat Kerja: VS Code dan Chrome

- **VS Code** — pewarnaan tag, pelengkapan otomatis saat mengetik `<`, pohon berkas di Explorer
- **Live Server** (opsional) — memuat ulang halaman sendiri setiap berkas disimpan
- **Google Chrome** — peramban pilihan, dengan DevTools yang siap dipakai
- **Figma** menyusul di Bab 14; panel DevTools yang lebih dalam menyusul di Bab 13 dan 15

Kebiasaan kecil: `Ctrl+S` setiap selesai menulis · jangan mengetik kode di pengolah kata · salin folder sebelum perubahan besar.

<!--
Pesan utamanya bukan daftar alat, melainkan cara buku ini memperkenalkan alat: tepat
ketika masalahnya muncul, bukan menumpuk semua alat sejak hari pertama. Pola yang sama
memandu urutan HTML, CSS, lalu Bootstrap. Sebutkan jebakan pengolah kata secara
eksplisit, karena ia menyelipkan karakter tak terlihat yang merusak berkas HTML dan
gejalanya sulit dilacak. Tekankan juga kebiasaan menyimpan: dua detik menyimpan dapat
menghemat berjam-jam.
-->

---

# Peta 16 Bab: Tiga Gerbang Besar

| Rentang | Fokus | Proyek |
|---|---|---|
| Bab 1 | Fondasi dan halaman HTML pertama | `profil-mahasiswa/` |
| Bab 2–7 | HTML5 semantik, CSS, box model, Flexbox, Grid | `tokosaya-css/` |
| Bab 8 | UTS — integrasi Bab 1–7 | `tokosaya-css/` |
| Bab 9–15 | Bootstrap 5, UI/UX, responsif, Figma, QA | `tokosaya-bootstrap/` |
| Bab 16 | UAS — final project pilihan kasus | Proyek utuh |

> Jika Anda tahu sedang berada di halaman N dari peta ini, setiap jam belajar terasa sebagai satu langkah.

<!--
Slide ini ada untuk menenangkan mahasiswa yang cemas menghadapi satu semester penuh.
Tunjukkan bahwa mereka hanya perlu menempuh satu langkah sekarang: satu halaman HTML.
Tanyakan: "Dari tabel ini, bab mana yang Anda duga paling menantang dan kenapa?"
Simpan jawabannya, karena Refleksi nomor 4 di buku menanyakan hal yang sama dan
mahasiswa akan membandingkan tebakannya di akhir semester.
-->

---

# Kepala Dokumen: Pola yang Tidak Pernah Berubah

`profil-mahasiswa/index.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Profil Mahasiswa — Andi Pratama</title>
</head>
```

> Deklarasi HTML5 · bahasa dokumen · pengodean · viewport · judul tab.

<!--
Ketik ulang baris ini di depan kelas, jangan tampilkan slide jadi. Setiap baris punya
satu alasan yang bisa ditanyakan: mengapa charset wajib (agar tanda petik dan tanda
seru pada teks Indonesia tidak berubah jadi simbol aneh), mengapa viewport wajib
(fondasi seluruh pekerjaan responsif Bab 7 dan 13), dan mengapa title penting
(satu-satunya elemen head yang dilihat pengguna, muncul di tab dan riwayat).
Peringatan: jangan menulis dokumen dari nol tanpa pola lengkap ini.
-->

---

# Isi Halaman: Lima Keluarga Elemen

`profil-mahasiswa/index.html` (lanjutan)

```html
<body>
  <h1>Andi Pratama</h1>
  <p><img src="img/foto-profil.png" alt="Foto profil Andi Pratama"
          width="160" height="160"></p>
  <h2>Bidang Minat</h2>
  <ul>
    <li>Desain antarmuka web</li>
    <li>Sistem informasi manajemen</li>
  </ul>
  <h2>Keterampilan</h2>
  <ol>
    <li>Menuliskan dokumen HTML dasar</li>
  </ol>
</body>
```

<!--
Lanjutkan mengetik dari slide sebelumnya. Yang diuji di sini adalah pilihan elemen
berdasarkan makna, bukan selera: ul untuk isi yang tidak mengenal urutan, ol untuk isi
yang urutannya bermakna. Minta mahasiswa menilai sendiri: "Bidang Minat seharusnya ul
atau ol?" (Jawaban: ul, karena tidak ada urutan di antara minat.) Sebutkan bahwa sisa
berkasnya, termasuk blok Tautan dengan tautan mailto, dilanjutkan di praktikum.
-->

---

# Empat Disiplin Struktur

- Satu dokumen, satu `<h1>` — judul terpenting halaman
- Heading tidak melompat level: `h1` → `h2` → `h3`, bukan `h1` → `h3`
- Setiap gambar diberi `alt` berisi deskripsi singkat
- Semua tag ditulis dengan huruf kecil

> Keempat kebiasaan ini adalah fondasi aksesibilitas, dan diuji pada Bab 8 dan Bab 16.

<!--
Kedengarannya seperti detail kecil, jadi jelaskan konsekuensinya: alt adalah satunya
teks yang dibacakan pembaca layar dan yang tampil saat gambar gagal dimuat, sedangkan
lompatan level heading merusak peta dokumen bagi alat bantu. Tuliskan keempatnya di
papan sebagai daftar periksa, karena ini dipakai sebagai rubrik penilaian.
Peringatan: mahasiswa cenderung menulis alt berisi nama berkas, bukan deskripsi.
-->

---

# Tiga Rambu Kesalahan Pemula

1. **Jangan mengarang tag sendiri** — tag tak dikenal diabaikan tanpa pesan kesalahan
2. **Jangan menutup dokumen setengah jadi** — struktur pohon bergeser tanpa gejala
3. **Simpan sebagai `.html` dengan pengodean UTF-8** sejak penulisan pertama

> Bila teks Indonesia tampil sebagai kotak atau tanda tanya, periksa charset dan pengodean berkasnya.

<!--
Ketiga rambu ini seluruhnya muncul lagi di bagian Troubleshooting pada praktikum, jadi
perkenalkan sekali di sini dan jangan diulang panjang lebar. Rambu pertama paling
penting: kekuatan HTML justru pada kumpulan elemen baku yang pengertiannya disepakati
seluruh peramban, dan pelanggarannya tidak memberi pesan apa pun. Tanyakan: "Mengapa
kesalahan tag lebih sulit dilacak daripada kesalahan CSS?" (Jawaban: karena tidak ada
peringatan sama sekali, hanya tampilan yang bergeser.)
-->

---

# Praktikum: Yang Wajib Teramati

- Siapkan `profil-mahasiswa/` dengan subfolder `img/` berisi `foto-profil.png`
- Panel **Elements** memperlihatkan `html > head > meta` dan `body` berisi `h1`, `img`, `p`, `ul`/`ol`
- Mengklik baris elemen menyorot kawasan elemen itu di halaman
- **Device toolbar** menjalankan lebar dari sekitar 360 px ke layar meja, teks mengalir kembali

Catat tiga baris setiap kali DevTools dibuka: apa yang dilihat, di panel apa, apa artinya bagi kode.

<!--
Ini slide yang menyambungkan teori penuh di depan dengan praktikum. Tekankan bahwa
pengamatan yang dicatat lebih bernilai daripada pengamatan yang hanya dilihat: catatan
tiga baris itu adalah latihan pertama menyusun bukti pengujian, dan mulai UTS
kemampuan menjelaskan antarmuka lewat bukti struktur ikut dinilai. Peringatan yang
sering terjadi: gambar tidak tampil, dan penyebabnya hampir selalu nama berkas yang
tidak cocok. Sarankan menyalin nama berkas, jangan mengetiknya dari ingatan.
-->

---

# Ringkasan (1/2)

1. *Frontend development* membangun bagian website yang dilihat dan diklik pengguna
2. Frontend dan backend adalah dua sisi satu keping: ruang kafe dan dapur
3. Frontend adalah titik temu antara bisnis, desain, dan teknologi
4. Web design adalah kerangka besar, UI elemen yang disentuh, UX pengalaman menyeluruh
5. Website = halaman + aset; pola folder `index.html`, `css/style.css`, `img/`

<!--
Bacakan cepat, satu kalimat per butir, jangan ditambahi. Butir 2 dan 3 adalah dua
kalimat yang paling sering muncul lagi di ujian, jadi minta mahasiswa menuliskannya
ulang dengan kata sendiri sebagai tiket keluar. Butir 5 akan langsung dipraktikkan
pada Tugas 1, jadi pastikan bentuk foldernya sudah terbayang.
-->

---

# Ringkasan (2/2)

1. Peramban merender: dokumen HTML → pohon dokumen → gaya → digambar ke layar
2. DevTools memperlihatkan pohon itu lewat panel Elements dan device toolbar
3. HTML mengurus struktur, CSS mengurus rupa, framework menyediakan komponen siap pakai
4. Bootstrap 5 baru dibahas di Bab 9, setelah dasar-dasarnya kuat
5. Dua folder proyek: `tokosaya-css/` dan `tokosaya-bootstrap/`

<!--
Butir 4 adalah pertanyaan pilihan ganda nomor 8 di Evaluasi, jadi ulangi alasannya:
dasar dulu agar pemakaian framework berlangsung sadar dan dapat disesuaikan.
Tutup ringkasan dengan mengulang janji pembuka: mahasiswa sekarang punya peta, dan
sebentar lagi punya tulisan pertama. Yang masih "berongga" dari tulisan itu dijelaskan
di slide penutup.
-->

---

# Diskusi dan Latihan

| Fokus | Yang dikerjakan | Yang dinilai |
|---|---|---|
| Analogi | Cari pasangan analogi selain kafe dan dapur | Ketepatan alasan, bukan keindahan analogi |
| Analisis | Empat pekerjaan frontend dan empat backend di perpustakaan kampus | Ketepatan memisahkan tanggung jawab |
| Kode | `latihan-2.html` lalu catat lima tag dari Elements | Kelengkapan pola dokumen dan bukti inspeksi |
| Tugas 1 | `index.html` dan `rencana.html` saling bertautan | Struktur, tautan dua arah, kerapian kode |
| Tugas 2 | Tabel perbandingan dua website layanan | Cakupan pengamatan dan alasan pemisahan kerja |

Pilih satu baris untuk dikerjakan di kelas; sisanya menjadi pekerjaan rumah pertemuan berikutnya.

<!--
Bagi kelas menjadi empat kuadran dan beri satu baris per kuadran, supaya semua baris
tergarap tanpa ada yang menunggu. Kumpulkan dalam sepuluh menit terakhir dan minta
satu perwakilan per kuadran berbicara satu menit. Yang dinilai selalu alasan, bukan
rute jawabannya, jadi tahan diri untuk tidak mengoreksi jawaban yang kolomnya benar
tetapi alasannya kosong.
-->

---

# Referensi

1. Duckett, J. (2011). *HTML & CSS: Design and Build Websites*. John Wiley & Sons.
2. Robbins, J. N. (2018). *Learning Web Design* (5th ed.). O'Reilly Media.
3. Krug, S. (2014). *Don't Make Me Think, Revisited* (3rd ed.). New Riders.
4. MDN Web Docs. *Structuring the web with HTML*. https://developer.mozilla.org/
5. Google web.dev. *Learn HTML*. https://web.dev/learn/html

Materi: Bab 1 — Pengantar Frontend Development dan Web Design.

<!--
Sebutkan bahwa nomor 1 dan 2 adalah rujukan utama untuk HTML dan CSS pada Bab 1
sampai 8, sedangkan nomor 3 adalah rujukan untuk pembahasan UI dan UX di Bab 12.
Tidak perlu mahasiswa membeli semuanya; nomor 4 dan 5 cukup sebagai rujukan harian
karena gratis dan selalu diperbarui. Peringatan: jangan mengandalkan tutorial video
yang tidak menyebut versi, karena HTML dan CSS di sana sering sudah tertinggal.
-->

---

<!-- _class: lead -->
<!-- _paginate: skip -->

# Bab 2: HTML5 dan Struktur Semantik

Paragraf navigasi berganti elemen yang bermakna — kerangka Tokosaya tumbuh.

<!--
Tutup dengan mengaitkan "tulisan yang masih berongga": struktur dan konten halaman
profil sudah benar, tetapi elemennya belum menyatakan makna. Bab 2 menggantinya
dengan elemen semantik. Tugas persiapan: pastikan folder profil-mahasiswa sudah rapi,
karena ia akan disalin menjadi folder tokosaya-css pada pertemuan berikutnya.
-->
