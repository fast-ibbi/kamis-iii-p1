# BAB 14 — Implementasi Desain Figma ke HTML/CSS/Bootstrap

## Deskripsi Singkat

Bab ini mengajak Anda berlatih *handoff*: membaca desain UI di Figma lalu menerjemahkannya
dengan setia menjadi halaman HTML, CSS, dan Bootstrap. Anda akan belajar alur
designer–developer, cara membaca frame, layer, auto layout, grid, tipografi, dan warna,
lalu memetakan semuanya menjadi *design token* dan komponen nyata. Jika Bab 13 menutup audit
proyek `tokosaya-css/`, bab ini membuka sisi translasi desain pada `tokosaya-bootstrap/`
dan menyiapkan halaman `produk.html` yang akan diperiksa lagi mutunya pada Bab 15.

## Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda diharapkan mampu:

1. Menjelaskan alur *designer–developer handoff* dari prototip desain hingga implementasi kode.
2. Mengidentifikasi struktur layout di Figma: *frame*, *layer*, *auto layout*, ukuran, dan jarak.
3. Membaca *column grid* dua belas kolom beserta *gutter* dan *margin* kontainer pada frame.
4. Memetakan *text style* dan *color style* Figma menjadi *design token* CSS pada blok `:root`.
5. Mengimplementasikan frame `produk.html` Tokosaya menjadi halaman HTML/CSS lengkap dengan
   Bootstrap 5.3 sesuai spesifikasi desain tekstual yang diberikan.
6. Menilai kesetiaan implementasi terhadap desain menggunakan *fidelity checklist*.
7. Menganalisis informasi yang sering hilang pada momen *handoff* tim e-commerce dan
   merumuskan mitigasinya.

## Capaian Pembelajaran

Bab ini mendukung **CPMK 10**: menerjemahkan desain atau prototip (Figma) menjadi website
HTML/CSS/Bootstrap yang setia. Kompetensi ini menjadi puncak jalur *translasi* sejak Bab 1:
setelah Anda menguasai HTML semantik (CPMK 2), CSS (CPMK 3–4), responsif (CPMK 5),
Bootstrap (CPMK 6), serta prinsip UI dan *design system* (CPMK 7), kini semuanya digabung
menjadi satu keterampilan kerja yang lebih utuh. Sub-capaian bab ini mencakup membaca
spesifikasi desain, menyalin nilai desain dengan disiplin, memetakan token, dan menilai
hasil translasi dengan daftar periksa.

## Kata Kunci

*design-to-code* — proses menerjemahkan desain menjadi kode; *handoff* — serah terima hasil
kerja desain kepada pengembang; *frame* — kanvas desain berukuran perangkat; *layer* —
objek pembentuk desain; *auto layout* — penataan isi otomatis di dalam bingkai Figma;
*design token* — variabel desain (warna, font, radius, jarak) yang menjadi satu sumber
kebenaran; *text style* dan *color style* — gaya teks dan warna berlabel; *component
mapping* — pemetaan komponen desain ke komponen Bootstrap; *fidelity* — kesetiaan
implementasi terhadap desain; *spec desain tekstual* — deskripsi desain dalam teks berukuran
presisi sebagai pengganti berkas Figma.

## Apersepsi

Bayangkan sebuah UMKM aksesori komputer ingin memperbarui halaman detail produknya.
Desainer mengirim berkas Figma yang rapi: kartu produk, harga, *badge* "Best Seller",
tombol keranjang, sampai footer. Tapi pengembang yang membukanya cuma melihat gambar berwarna
yang terasa sudah "jadi". Ukuran akhirnya ditaksir pakai mata: warna tombol sedikit meleset,
jarak antarbagiannya ditebak, dan judul diperkecil sesuka hati. Seminggu kemudian desainer
membuka hasilnya lalu mengirim revisi: "warna badge salah", "jarak kartu berubah",
"font judul harus Poppins".

Itulah contoh *handoff* yang gagal. Di tim sistem informasi pun hal seperti ini sering
muncul — misalnya saat unit web kampus menerima desain portal penerimaan mahasiswa baru dari
unit publikasi. Yang jelas di kepala desainer belum tentu jelas juga di kepala pengembang.
Bab ini memberi Anda dua pegangan: membaca desain Figma secara sistematis, lalu
menerjemahkannya lewat spesifikasi tekstual dan *fidelity checklist*. Dengan dua hal itu,
janji desain yang sudah Anda pelajari sejak Bab 4 bisa benar-benar muncul di layar, bukan
sekadar dibayangkan.

## Materi Pembelajaran

### 14.1 Alur Desain → Kode (Designer–Developer Handoff)

*Handoff* adalah momen serah terima: desainer menyerahkan hasil kerja yang "selesai sebagai
gambar", lalu pengembang melanjutkannya menjadi kode. Bayangkan seperti proyek bangunan:
arsitek menyerahkan gambar kerja, kontraktor membangun gedung, dan kualitas hasilnya sangat
bergantung pada angka-angka di gambar itu. Kalau dimensi tidak tertulis, kontraktor akan
menebak — dan tebakan seperti ini sering jadi sumber masalah paling awal.

Dalam pengembangan web, alur ini bisa dilihat sebagai rantai lima tahap. Pertama,
*brief* menetapkan tujuan, audiens, dan konten. Kedua, arsitektur informasi dan *sitemap*
menyusun peta halaman. Ketiga, *wireframe* menata letak tanpa hiasan. Keempat, *UI design*
di Figma menghidupkan wireframe dengan warna, tipografi, ikon, dan *spacing* presisi.
Kelima, *handoff*: desain dibaca developer lalu diterjemahkan menjadi HTML/CSS. Kalau Anda
bisa menjaga alur ini tetap rapi, proses implementasi biasanya jauh lebih cepat karena
keputusan desain sudah beres sebelum baris kode pertama ditulis.

Bedakan dua hal yang sering tertukar: *prototip* dan *implementasi*. Prototip adalah
simulasi desain — biasanya interaktif di Figma — yang menunjukkan tampilan dan alur
perpindahan layar; ia cepat dibuat dan mudah diubah. Implementasi adalah kode sebenarnya:
HTML semantik, CSS yang mengikuti *design token*, komponen Bootstrap, dan perilaku responsif
yang benar-benar berjalan di berbagai perangkat. Prototip menjawab "seperti apa bentuknya",
sedangkan implementasi menjawab "bagaimana bentuk itu hidup di semua layar". Di sinilah
keterampilan translasi dibutuhkan: menjaga janji desain dengan cara yang tepat secara teknis.

Di konteks sistem informasi, pola ini sebenarnya sudah akrab. Analis sistem menerjemahkan
kebutuhan pengguna menjadi dokumen spesifikasi; programmer menerjemahkan spesifikasi itu
menjadi program; penguji lalu memeriksa kesesuaiannya. Bab 14 memindahkan pola yang sama ke
ranah web: Figma berperan sebagai spesifikasi visual, dan Anda menjadi pembaca spesifikasi
yang harus membedah lalu membangunnya. Karena mata kuliah ini fokus pada halaman statis,
ada batas penting sejak awal: interaktivitas berbasis JavaScript di luar cakupan, jadi
bagian desain seperti *toggle* atau *carousel* diterjemahkan sebagai tampilan statis plus
catatan perilakunya.

### 14.2 Membaca Layout Figma

Figma menyimpan desain sebagai hirarki objek yang bernama *layer*. Objek paling luar untuk
satu layar perangkat disebut *frame* — kanvas berukuran tetap, misalnya 1440 piksel untuk
desktop atau 375 piksel untuk ponsel. Di dalam frame ada *layer* bertumpuk: kotak, teks,
gambar, ikon, dan grup. Panel sisi kiri Figma menampilkan hirarki ini seperti daftar isi
buku. Pembaca yang disiplin selalu masuk dari frame terluar, lalu membedah layer pada anak
pertama hingga ke bawah — persis cara membaca struktur HTML dari elemen terluar hingga
konten.

Sebelum menulis kode, ada beberapa istilah Figma yang perlu Anda pegang. *Fill* adalah
warna latar objek; *stroke* adalah garis tepinya; keduanya ada di panel kanan dan nantinya
menjadi sumber nilai `background-color` dan `border` pada CSS. *Auto layout* adalah fitur
yang membuat kontainer mengatur anak-anaknya otomatis: bisa searah baris, kolom, atau
keduanya, lengkap dengan jarak (*gap*) dan *padding* di tepinya. Padanan konsepnya adalah
Flexbox yang sudah Anda pelajari di Bab 6: `flex-direction` menentukan arah, `gap` mengatur
jarak, dan `padding` melonggarkan tepi. Karena mirip, membaca *auto layout* di Figma akan
lebih mudah kalau Anda sudah paham Flexbox.

| Di Figma | Makna | Padanan HTML/CSS |
|---|---|---|
| *Frame* | Kanvas satu layar perangkat | `<section>`, `<footer>`, atau komponen kontainer |
| *Layer/grup* | Objek dan pengelompokan | elemen semantik (`<header>`, `<div>`) |
| *Auto layout* | Penataan anak otomatis | Flexbox (`display: flex`, `gap`) |
| *Fill* | Warna latar objek | `background-color` |
| *Stroke* | Garis tepi objek | `border` |
| *Gap / padding* | Jarak antar anak / tepi | `gap` / `padding` |

Cara membacanya di praktik cukup sederhana: pilih satu elemen di tiap area besar, catat
lebar dan tingginya, lihat *fill* dan *stroke* di panel kanan, lalu cek panel kiri untuk
memahami urutan layer. Kalau pengelompokan Figma sudah rapi — misalnya grup bernama "Nav",
"Page Head", "Produk Detail", "Produk Terkait", "Footer" — hirarki HTML biasanya
sudah mulai kelihatan sendiri. Mirip saat Anda membaca halaman transkrip: lihat dulu kepala,
isi, dan tanda tangan sebelum masuk ke angka-angkanya. Desain juga sebaiknya dibaca dari
kerangka dulu, baru detail.

### 14.3 Membaca Grid dan Ukuran di Figma

Desain yang rapi hampir tidak pernah menaruh elemen secara acak; semuanya biasanya dikunci
ke *column grid*. Grid dua belas kolom jadi konvensi umum karena 12 gampang dibagi menjadi
setengah, sepertiga, dan seperempat ruang, jadi kombinasi seperti 6+6, 4+4+4, atau 8+4
tetap terasa rapi. Di Figma, grid ini muncul sebagai garis vertikal merah muda dengan dua
angka penting: *gutter* — lebar celah antarkolom — dan *margin* — jarak sisi kiri-kanan
frame. Menyalin angka-angka ini apa adanya adalah cara paling aman untuk menjaga kesetiaan
tata letak.

Mari hitung grid yang dipakai di bab ini. Frame desktop Tokosaya lebarnya 1440 piksel.
Kontainer konten maksimal 1140 piksel, jadi posisinya ada di tengah dengan sisi kosong
150 piksel di kiri dan kanan. Di dalam kontainer, grid terdiri atas 12 kolom dengan
*gutter* 24 piksel. Lebar satu kolom adalah (1140 − 11 × 24) ÷ 12 = 73 piksel. Kalau Anda
menggabungkan dua kolom, lebarnya menjadi 2 × 73 + 24 = 170 piksel, dan seterusnya. Angka
kecil seperti ini lalu menjadi dasar translasi: kontainer dipetakan ke kelas `.container`
Bootstrap, yang pada *breakpoint* xl (≥ 1200 px) memang berhenti tumbuh di 1140 piksel.

Bootstrap menyediakan penerjemahnya secara siap pakai. Kelas `.row` menangani perataan
kolom, sedangkan kelas `col-*` membagi baris menjadi 12 bagian sama — persis konsep grid
Figma. *Gutter* diatur lewat kelas `g-*`: pada root font 16 piksel (nilai bawaan), `g-4`
memberikan 24 piksel di setiap sisi kolom sehingga celah antar dua kolom justru 24 piksel —
sesuaikan dengan spesifikasi Figma. ⚠ *version-sensitive*: nilai *gutter* mengikuti root
font peramban; periksa dokumentasi resmi Bootstrap 5.3 bila root diubah. Selain kolom dan
celah, perhatikan juga *row gap* — jarak vertikal antar baris kartu — yang pada desain
Tokosaya juga 24 piksel.

Kebiasaan kerja yang paling aman seperti ini: saat membuka frame, nyalakan panel grid Figma
untuk memeriksa, lalu catat tiga angka — jumlah kolom, lebar *gutter*, dan *margin*
kontainer — sebelum Anda menulis kode. Setelah itu, terjemahkan nilainya sekali saja ke
kelas Bootstrap dan *token* CSS, bukan diulang di tiap komponen. Kalau langkah ini dilewatkan,
biasanya tiap kartu malah punya celah berbeda-beda — ciri klasik halaman yang dibangun
seolah-olah dari tangkapan layar. Satu sumber kebenaran untuk grid, satu untuk jarak, dan
satu untuk warna: itulah disiplin translasi.

### 14.4 Membaca Tipografi & Warna di Figma

Desainer yang rapi biasanya tidak mewarnai teks satu per satu; mereka memakai *text style*
— gaya tulisan berlabel yang berisi keluarga font, ketebalan, ukuran, *line-height*, dan
spasi antar huruf — serta *color style*, yaitu warna berlabel yang bisa dipakai berulang.
Panel "Local styles" (atau "Styles" pada mode pengembang Figma) mengumpulkan semua gaya ini
di satu tempat. Kalau Anda ingat Bab 12, konsep ini sebenarnya sudah familiar: inilah
*design token* dalam bentuk desain. Membaca daftar gaya berlabel jauh lebih andal daripada
mengklik teks satu per satu, karena gaya langsung menunjukkan konsistensi sekaligus niat
desainernya.

Pemetaan ke CSS berjalan dalam dua lapis. Lapis pertama: setiap *color style* menjadi satu
CSS *custom property* di blok `:root` — misalnya warna utama indigo menjadi `--clr-primary`.
Lapis kedua: setiap *text style* menjadi satu aturan tipografi (kelas atau selektor) yang
menyalin ukuran, ketebalan, dan *line-height* dari nilai style, bukan dari tebakan. Tabel
berikut merangkum pemetaan itu; nama token tetap mengikuti standar Tokosaya yang sudah Anda
pakai sejak Bab 4 dan dipertegas lagi di Bab 12.

| Gaya Figma (label style) | Nilai ringkas | Pemetaan ke CSS |
|---|---|---|
| *Heading/Title 1* | Poppins 600, 32 px, *line-height* 1,25 | `.page-title` untuk judul halaman |
| *Heading/Title 2* | Poppins 600, 28 px, *line-height* 1,25 | `.produk-nama`, `.section-title` |
| *Heading/Card Title* | Poppins 500, 18 px, *line-height* 1,4 | `.produk-card-nama` |
| *Body/Paragraph* | Inter 400, 16 px, *line-height* 1,6 | aturan `body` |
| *Body/Caption* | Inter 400, 14 px, *line-height* 1,5 | `.page-breadcrumb`, `.produk-info` |
| *Warna/Primary* | `#4F46E5` | `--clr-primary` |
| *Warna/Accent* | `#F59E0B` | `--clr-accent` |
| *Warna/Dark* | `#1E293B` | `--clr-dark` |
| *Warna/Body* | `#334155` | `--clr-body` |
| *Warna/BG* | `#F8FAFC` | `--clr-bg` |
| *Warna/Surface* | `#FFFFFF` | `--clr-surface` |
| *Warna/Border* | `#E2E8F0` | `--clr-border` |

Dua kehati-hatian perlu dicatat. Pertama, keluarga font harus tetap dipanggil lewat Google
Fonts (Poppins dan Inter pada ketebalan yang dipinjam Tokosaya) karena CSS tidak otomatis
"menaruh" font ke browser; bila panggilan gagal, *fallback* generik `sans-serif` menjaga
halaman tetap terbaca. Kedua, cek kontras sejak sini, bukan setelah halaman jadi: warna teks
dengan latar memenuhi ketentuan WCAG yang telah dibahas di Bab 13 — misalnya `#334155` di
atas `#FFFFFF` sangat kontras, dan itu bukan kebetulan, melainkan keputusan desain yang
diserahkan bersama *token*. Dengan begitu, penerjemah kode tidak sekadar menyalin angka,
tetapi juga menguatkan niat aksesibel desain tersebut.

### 14.5 Menerjemahkan Komponen (Navbar, Hero, Kartu)

Sekarang masuk ke inti kerja: mengubah komponen desain menjadi kode. Ada lima langkah yang
bisa Anda ulang untuk setiap komponen. Pertama, pilih komponennya dan tulis tujuannya
("navbar navigasi utama", "panel detail produk"). Kedua, pilih elemen semantik HTML —
bukan sekadar kotak; navbar memakai `<header>`, bagian konten memakai `<section>` dengan
judul `<h2>`, dan daftar tautan memakai `<ul>`. Ketiga, tentukan kelas Bootstrap: grid dan
utilitas mengatur susunan, sementara warna dan ukuran presisi ditangani CSS kustom berbasis
token. Keempat, tulis CSS kustom dengan komentar `/* kustom */`. Kelima, bandingkan hasilnya
dengan frame asli supaya tampilan dan susunannya tidak bergeser.

Pemetaan komponen Tokosaya pada halaman `produk.html` bisa dibaca seperti ini. Navbar
berupa `<header>` dengan ikon dan tautan yang diatur `d-flex` dan `gap`; tautan aktif
dibedakan lewat warna dan ketebalan. Page head (hero kecil halaman) adalah `<section>` putih
yang berisi jejak navigasi dan judul halaman; dibuat sengaja tenang supaya panel produk yang
lebih dominan tetap jadi fokus. Panel produk detail memakai `row` dua kolom: gambar ada di
`col-lg-7`, panel data di `col-lg-5` — rasio yang lahir dari pembacaan grid Figma. Kartu
produk terkait memakai `col-md-4`, jadi tiga kartu sejajar di desktop dan turun menjadi satu
kolom penuh di layar kecil. Footer memakai `footer` gelap dengan tiga kolom brand, navigasi,
dan kontak.

```
Frame P-DETAIL-01 (produk.html, 1440 px)
└── <header> .site-nav ......................... tautan Beranda/Katalog/Tentang/Kontak + ikon keranjang
└── <section> .page-head ....................... jejak navigasi + judul halaman
└── <section> .produk-detail ................... row g-4
│   ├── col-lg-7 ... <figure> gambar utama + <h3> spesifikasi
│   └── col-lg-5 ... .produk-panel: badge, <h2> nama, harga, deskripsi, CTA, info
└── <section> .produk-terkait .................. h2 "Produk Terkait"
│   └── row g-4 ... 3 × artikel .produk-card (MW-88, HS-15, BT-5)
└── <footer> .site-footer ...................... brand + navigasi + kontak + hak cipta
```

Saat Anda menemukan komponen yang di dunia nyata bersifat interaktif — misalnya menu yang
menutup atau keranjang yang membuka panel — keterampilan yang dibutuhkan adalah translasi
*status*: tampilkan bentuk buka/tutupnya secara statis dengan kelas yang sesuai, lalu catat
bahwa perilaku nyatanya nanti ditangani skrip di luar cakupan mata kuliah ini. Pendekatan
ini bukan langkah mundur; justru di sini Anda belajar membedah desain keadaan (*state*),
sesuatu yang sering diremehkan padahal sangat menentukan rasa jadi sebuah UI. Bab 11 sudah
pernah mengajak Anda menata formulir beserta keadaannya; sekarang latihannya lebih padat:
Anda membaca keadaan langsung dari desain, bukan dari imajinasi.

### 14.6 Implementasi Token & Component Mapping (Figma styles → :root CSS)

Bab 4 mengenalkan *design token* sebagai variabel desain di CSS, lalu Bab 12
merapikannya menjadi mini *design system* Tokosaya. Di bab ini lingkarannya lengkap: token
sekarang datang dari desain Figma dalam bentuk *color style* dan *text style*. Pemetaan ini
satu arah dan gampang diaudit — nama style Figma ada di kiri, nama variabel di kanan, dan
nilai hex di tengah. Aturan emasnya tetap sama: nama variabel mengikuti peran, bukan warna.
Karena itu `--clr-primary` tetap masuk akal walau suatu hari desainer mengganti indigo
menjadi hijau, sebab yang disebut adalah perannya, bukan warnanya.

Tabel di bawah ini adalah *component mapping* Tokosaya: setiap elemen kecil pada desain
dipetakan ke peran token dan kelas penerapannya. Tabel semacam ini sering dipakai tim
nyata sebagai lembar janji kesetiaan; semakin lengkap tabelnya, semakin jarang terjadi
interpretasi bebas di tengah pengerjaan. Untuk komponen Bootstrap, nilai token dipakai
melalui CSS kustom (selektor kelas sendiri), sehingga *utility* Bootstrap tidak ditimpa
secara diam-diam. Pendekatan resmi lainnya adalah menimpa variabel tema Bootstrap
(misalnya variabel tombol) lewat CSS custom properties; pendekatan itu valid di Bootstrap 5.3,
tetapi daftar variabelnya panjang dan dapat berubah antar versi. ⚠ *version-sensitive*:
periksa dokumentasi resmi Bootstrap 5.3 sebelum memakainya di proyek selain latihan.

| Elemen desain | Peran token | Penerapan |
|---|---|---|
| Tombol utama "Tambah ke Keranjang" | `--clr-primary`, `--radius` | kelas `btn-tokosaya` |
| *Badge* "Best Seller" | `--clr-accent`, warna teks `--clr-dark` | kelas `badge-populer` |
| *Badge* "Tersedia" | `--clr-success` | kelas `.badge-tersedia` |
| *Badge* "Stok Terbatas" | `--clr-danger` | kelas `badge-stok` |
| Harga produk | `--clr-primary`, Poppins 600 | kelas `.produk-harga` |
| Latar kartu | `--clr-surface`, `--shadow-card` | kelas `.produk-card` |
| Latar halaman | `--clr-bg` | aturan `body` |
| Sudut semua komponen | `--radius` 12 px | *border-radius* kustom |

Ingat lagi prinsip utama Bab 10: pakai utilitas Bootstrap lebih dulu, lalu tambah CSS
kustom secara terkontrol. Dua utilitas yang paling sering muncul di bab ini adalah `g-4`
(untuk `gutter` 24 piksel) dan `rounded-pill` (bentuk pil untuk *badge*). Sementara itu,
warna dan *font* tetap diatur lewat token karena utilitas warna Bootstrap memakai palet
bawaan yang berbeda dari Tokosaya. Dengan disiplin ini, peta token bekerja dalam tiga lapis:
Figma styles → blok `:root` CSS → pemakaian di kelas. Lapis ketiga itulah yang benar-benar
membangun komponen dengan *design system* yang sama di setiap halaman, sesuai tujuan mini
*design system* Bab 12.

### 14.7 Menjaga Fidelity: Checklist Kesinambungan

*Fidelity* (kesetiaan) adalah ukuran seberapa dekat hasil implementasi dengan desain.
Tujuannya bukan membuat piksel yang absolut sama — web hidup di layar dengan panjang yang
tidak terduga dan font sistem yang bisa berbeda — tetapi menjaga keputusan desain yang
penting: ukuran tipografi, jarak, warna, radius, dan perbandingan komponen. Translasi yang
setia patuh pada keputusan itu, tetapi tetap lentur terhadap teks yang bisa memanjang,
karena panjang konten memang bagian alami web. Itu sebabnya penilaian *fidelity* selalu
dikaitkan ke lembar spesifikasi, bukan ke perasaan "kok kurang mirip".

Checklist berikut menjadi pemeriksaan terakhir sebelum Anda bilang halaman ini selesai.
Jalankan lewat *DevTools* (panel Inspect di Chrome): pilih elemennya, baca nilai terhitung
di tab *Computed*, lalu bandingkan dengan spesifikasi. Kalau ada selisih kecil karena
pembulatan browser, catat sebagai toleransi ± 2 piksel. Kalau selisihnya besar atau arahnya
salah, perbaiki karena biasanya itu tanda nilai yang disalin meleset. Checklist ini juga
menjadi jembatan ke Bab 15, saat mutu implementasi akan diperiksa lebih luas.

| No. | Item pemeriksaan | Cara memeriksa |
|---|---|---|
| 1 | Tipografi: keluarga font, ukuran, ketabalan, *line-height* tiap level | *Computed* panel pada `h1`, `h2`, `h3`, `p` |
| 2 | Warna: token dipakai, tidak ada hex liar | Panel `:root` di DevTools + cari `#` di css |
| 3 | Jarak: *padding*/*margin* kelipatan 8 (8/16/24/32/48/64) | baca *Computed* pada kontainer & kartu |
| 4 | Radius: semua sudut 12 px (token `--radius`) | baca `border-radius` kartu, tombol, badge |
| 5 | Grid: `gutter` 24 px antar kolom desktop | inspect `row`/`col` |
| 6 | Kontainer maks 1140 px di desktop | `window.innerWidth` & lebar `container` |
| 7 | Ikon bertema: ikon Bootstrap Icons dipakai konsisten | bandingkan set ikon dengan desain |
| 8 | Responsif: 1440 / 768 / 375 tidak rusak | *Device Toolbar* Chrome |
| 9 | Aksesibilitas: kontras teks, `alt` gambar, urutan heading | checklist Bab 13 |

Ada dua kebiasaan yang membantu menjaga *fidelity* selama pengerjaan. Pertama, salin nilai,
bukan perasaan: angka piksel di desain dipindahkan apa adanya ke CSS, lalu diberi nama token
kalau dipakai lebih dari dua kali. Kedua, uji bertahap: selesaikan satu komponen,
bandingkan, lalu lanjut — jangan bangun seluruh halaman dulu baru mencari selisih satu per
satu. Capeknya biasanya muncul saat semua koreksi ditumpuk di akhir; jauh lebih enak kalau
Anda menutup checklist sedikit demi sedikit.

## Konsep Penting

| Konsep | Inti | Penerapan di Tokosaya |
|---|---|---|
| *Handoff* | Serah terima desain ke developer lengkap dengan spesifikasi | desainer → pengembang `produk.html` |
| *Prototip vs implementasi* | Gambar vs kode responsif sejati | Figma frame vs halaman hidup |
| *Frame Figma* | Kanvas satu layar (1440/768/375) | frame desktop `P-DETAIL-01` |
| *Auto layout* | Penataan anak otomatis, padanan Flexbox | baris kartu produk terkait |
| *Column grid 12* | 12 kolom, *gutter* 24, kontainer 1140 | kelas `.row`, `.col-lg-*`, `g-4` |
| *Text style* | Keluarga, ketebalan, ukuran, *line-height* | Poppins/Inter per level heading |
| *Color style* | Warna berlabel, sumber kebenaran | *token* `--clr-*` |
| *Design token* | Variabel desain berbasis peran | blok `:root` di `style.css` |
| *Component mapping* | Komponen desain → elemen + kelas | navbar → `header.site-nav` |
| *Spec desain tekstual* | Deskripsi teks berukuran presisi | spesifikasi frame `P-DETAIL-01` |
| *Fidelity checklist* | Daftar pemeriksaan kesetiaan | 9 item di 14.7 |
| *Toleransi piksel* | Selisih ± 2 px dari pembulatan | dicatat saat QA DevTools |

## Contoh Kode

Dua contoh pertama berfungsi sebagai demonstrasi konsep berlabel: keduanya file kecil yang
berdiri sendiri agar kalian bisa menyimak satu gagasan dalam satu halaman. Contoh pertama
menunjukkan translasi satu kartu produk dari spesifikasi; contoh kedua memetakan *styles*
Figma menjadi blok `:root`. Implementasi halaman `produk.html` yang sebenarnya — lengkap
navbar sampai footer — disajikan pada bagian Praktikum.

File: tokosaya-bootstrap/demo/kartu-produk-demo.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Demo Kartu Produk — Tokosaya</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <style>
    /* khusus demonstrasi — pada proyek sungguhan berada di css/style.css */
    :root {
      --clr-primary: #4F46E5;
      --clr-dark: #1E293B;
      --clr-border: #E2E8F0;
      --radius: 12px;
      --shadow-card: 0 8px 24px rgba(15, 23, 42, 0.08);
      --font-heading: sans-serif; /* sederhanakan demo: tanpa Google Fonts */
    }
    .produk-card {
      background-color: #FFFFFF;
      border: 1px solid var(--clr-border);
      border-radius: var(--radius);
      box-shadow: var(--shadow-card);
      padding: 16px; /* spesifikasi kartu: 16 px */
    }
    .produk-card-nama { font-size: 18px; font-weight: 500; color: var(--clr-dark); }
    .produk-card-harga { font-size: 18px; font-weight: 600; color: var(--clr-primary); }
  </style>
  <!-- Tanpa bundle JavaScript resmi (bootstrap-bundle) — interaktivitas di luar cakupan mata kuliah -->
</head>
<body>
  <main class="container py-5">
    <h1>Demo Satu Kartu Produk</h1>
    <div class="row g-4 mt-2">
      <article class="col-12 col-md-4">
        <div class="produk-card">
          <img src="img/produk-keyboard-kx210.svg" alt="Keyboard mekanis KX-210 dari sisi atas"
               width="200" height="140" class="img-fluid mb-3">
          <h2 class="produk-card-nama">Keyboard Mekanis KX-210</h2>
          <p class="produk-card-harga m-0">Rp650.000</p>
        </div>
      </article>
    </div>
  </main>
</body>
</html>
```

Penjelasan: file demo ini sengaja mini: satu kartu, satu kolom, satu kelas kustom. Perhatikan
tiga hal. Pertama, kelas Bootstrap `col-12 col-md-4` dan `g-4` mengurus tata letak dan
*gutter* 24 piksel, jadi CSS kustom menangani warna dan radius — utilitas dulu, kustom
sesudahnya. Kedua, nilai-nilai penting (padding 16, radius 12, ukuran 18) disalin dari
spesifikasi, bukan ditaksir; itulah pekerjaan inti bab ini. Ketiga, komentar di awal blok
`<style>` menegaskan bahwa *inline styles* hanya boleh di file demo berlabel; pada proyek
Tokosaya, semua aturan berpindah ke `css/style.css`.

File: tokosaya-bootstrap/demo/token-demo.css

```css
/* token-demo.css — pemetaan Figma styles ke token (khusus demonstrasi) */

:root {
  /* Color style "Warna/Primary"  → token peran */
  --clr-primary: #4F46E5;
  /* Color style "Warna/Accent"  → token peran */
  --clr-accent: #F59E0B;
  /* Text style menggunakan keluarga font yang sama dan warna "Warna/Dark" */
  --clr-dark: #1E293B;
  --font-heading: 'Poppins', sans-serif;
}

/* Text style "Heading/Title 2" → aturan tipografi */
.section-title {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 28px;
  line-height: 1.25;
  color: var(--clr-dark);
}

/* Text style "Body/Caption" → aturan tipografi */
.page-breadcrumb {
  font-size: 14px;
  line-height: 1.5;
}
```

Penjelasan: berkas `token-demo.css` memperlihatkan dua bentuk pemetaan sekaligus.
Garis-garis komentar mengingatkan asal setiap nilai sehingga siapa pun yang membuka berkas
tahu perjanjiannya: nilai tersebut bukan selera penulis, melainkan hasil salinan dari
*styles* desain. Perhatikan bahwa `.section-title` tidak menulis nilai warna mentah; ia
menitipkan pada variabel, sehingga bila desain diperbarui, cukup blok `:root` yang disalin
ulang. Pada praktiknya berkas demo ini dipindahkan ke `css/style.css` proyek utama.

## Penjelasan Kode

Contoh `kartu-produk-demo.html` mengajarkan tiga keputusan. Keputusan pertama: struktur HTML
tetap semantik — `<article>` untuk kartu dan `<h2>` untuk nama produk — karena mesin pencari
dan pembaca layar mengenal arti elemen, bukan bentuk kotaknya. Keputusan kedua: kelas
responsif `col-12 col-md-4` menerjemahkan aturan grid desain — satu kolom penuh pada layar
seluler, sepertiga baris dari 768 piksel ke atas; kelas `g-4` menyalin *gutter* 24 piksel
dari spesifikasi. Keputusan ketiga: seluruh nilai visual (putih kartu, radius 12, bayangan
kartu, warna harga indigo) berasal dari token, bukan angka liar; inilah yang membuat kartu
lain nanti otomatis setia.

Contoh `token-demo.css` menegaskan disiplin lain: token dipetakan sekali, lalu dipakai
banyak kali. Ketika nilai `--clr-accent` diubah, setiap *badge* "Best Seller" di seluruh
halaman mengikuti tanpa penyuntingan berulang. Selain itu, aturan `.page-breadcrumb`
menunjukkan cara menyimpan *text style* Figma menjadi kelas kecil yang dapat digabung dengan
kelas lain di HTML. Latihan penjelasan ini menuntut kebiasaan penting: setiap aturan CSS
dapat menjawab "nilai ini berasal dari gaya mana di desain" — pertanyaan yang kelak akan
anda tanyakan sendiri saat audit QA pada Bab 15, dan yang kini dilatih sejak baris pertama.

## Praktikum

### Tujuan Praktikum

Mempraktikkan alur *design-to-code* secara utuh: menerima spesifikasi desain tekstual frame
`produk.html` Tokosaya, membaca nilai ukuran, warna, dan jaraknya, lalu menulis halaman
`produk.html` beserta `css/style.css` yang setia terhadap spesifikasi tersebut menggunakan
Bootstrap 5.3. Praktikum juga melatih pembacaan panel Inspect Figma bagi yang memiliki akses.

### Kebutuhan

1. Visual Studio Code dengan folder proyek `tokosaya-bootstrap/` yang dibangun sejak Bab 9.
2. Google Chrome dengan DevTools untuk pemeriksaan nilai terhitung.
3. File gambar produk: `img/produk-keyboard-kx210.svg`, `img/produk-mouse-mw88.svg`,
   `img/produk-headphone-hs15.svg`, `img/produk-speaker-bt5.svg` (boleh digambar sederhana
   atau memakai berkas dari folder `img/` proyek Bab 1–8).
4. Koneksi internet untuk CDN Bootstrap 5.3.3, Bootstrap Icons 1.11.3, dan Google Fonts.
5. Spesifikasi desain tekstual pada Langkah 3 (standar kesetiaannya diperiksa bersama dosen).

### Persiapan

1. Buka folder `tokosaya-bootstrap/` dan pastikan `katalog.html` dari Bab 10 masih terbuka
   normal; halaman baru akan berdiri di sebelahnya.
2. Ruang kerja praktikum adalah file `produk.html` baru serta pengembangan `css/style.css`;
   dua contoh kode di atas hanya demonstrasi konsep, praktikum membangun versi proyek
   utama yang lengkap.
3. Buka `css/style.css` dan cari blok `:root`; pastikan token Tokosaya lengkap seperti pada
   Bab 4 dan Bab 12. Bila ada token yang hilang, salin dari spesifikasi pada Langkah 3.
4. Mahasiswa berlisensi Figma: siapkan akses ke berkas desain (versi pengajar atau buatan
   sendiri dari spesifikasi di Langkah 3).

### Langkah Kerja

1. Baca spesifikasi pada Langkah 3 dengan disiplin: baca urut dari kanvas, grid, tipografi,
   komponen. Jangan menulis kode sebelum daftar nilai terbaca semua.
2. (Opsional, hanya bagi yang berlisensi Figma) Membaca desain lewat panel Inspect.
   - Buka berkas Figma dan pilih frame desktop 1440.
   - Tekan panel kanan; bila mode pengembang tersedia pada paket Anda, panel akan memperlihat
     data teknis layer terpilih (ukuran, *fill*, teks). Nama tampilannya berbeda antar paket
     dan versi. ⚠ *version-sensitive*: periksa *Figma Help Center* mengenai mode pengembang
     pada paket yang Anda miliki.
   - Baca secara berurutan pada setiap layer utama: lebar-tingginya; isi *fill* (hex/rgba);
     *stroke*; keluarga dan ketebalan font; *line-height*; jarak *auto layout*.
   - Salin nilai ke tabel token Anda sendiri, jangan salin mentah semua properti — panel
     Inspect bisa menyarankan struktur CSS berbeda dari proyek Anda; ambil nilainya,
     tulis ulang dengan disiplin token dan kelas Bootstrap.
3. Salin dan lengkapi tabel spesifikasi berikut (Spesifikasi Desain Tekstual — Frame
   `P-DETAIL-01`, produk.html Tokosaya).

   **A. Kanvas dan grid.** Frame desktop 1440 piksel lebar; kontainer maksimum 1140 piksel,
   terpusat (sisi kosong 150 px). *Column grid* 12 kolom, *gutter* 24 px, lebar kolom
   73 px. *Gutter* vertikal antar kartu juga 24 px. Frame tambahan: tablet 768 px
   (*gutter* 24, margin kontainer 32), ponsel 375 px (*gutter* 16, margin kontainer 24).
   Implementasi: `.container`, `.row`, `col-12 col-lg-7` / `col-lg-5` untuk detail,
   `col-12 col-md-4` untuk kartu terkait, kelas `g-4` untuk *gutter* 24 (root 16 px).

   **B. Token warna dan font.** Sama seperti `:root` Tokosaya: `--clr-primary` `#4F46E5`,
   `--clr-accent` `#F59E0B`, `--clr-dark` `#1E293B`, `--clr-bg` `#F8FAFC`,
   `--clr-surface` `#FFFFFF`, `--clr-border` `#E2E8F0`, `--clr-success` `#16A34A`,
   `--clr-danger` `#DC2626`, radius 12 px, bayangan kartu `0 8px 24px rgba(15,23,42,0.08)`,
   satuan jarak 8 px. Font judul Poppins (600, 500), font teks Inter (400, 600), keduanya
   dimuat via Google Fonts dengan *fallback* `sans-serif`.

   **C. Tipografi per level.** Judul halaman `h1`: Poppins 600, 32 px, *line-height* 1,25,
   warna `#1E293B` (mobile 24 px). Judul panel `h2` (nama produk): 28 px, Poppins 600,
   1,25, `#1E293B` (mobile 24 px). Judul sebutan `h2` (Produk Terkait, footer): 28 px/16 px
   (footer) Poppins 600. Judul kartu `h3`: Poppins 500, 18 px, 1,4, `#1E293B`. Teks badan:
   Inter 400, 16 px, 1,6, `#334155`. Keterangan/jejak navigasi: Inter 400, 14 px, 1,5,
   `#334155`. Harga: Poppins 600, 24 px, `#4F46E5`. Harga kartu: 18 px/600. Tautan nav:
   Inter 400, 15 px; tautan aktif 600 dan berwarna `#4F46E5`.

   **D. Navbar (tinggi ±72 px).** Latar `#FFFFFF`, garis bawah 1 px `#E2E8F0`. Kiri: merek
   "Tokosaya" Poppins 700, 20 px, warna `#4F46E5`. Kanan: tautan Beranda, Katalog, tentang,
   Kontak — Inter 15 px, warna `#334155`, jarak antartautan 32 px; tautan aktif Katalog.
   Ikon keranjang (Bootstrap Icons `bi-cart3`) 20 px di ujung kanan, dipisah 24 px.
   Implementasi: `header.site-nav` + `.container` + `d-flex flex-wrap align-items-center justify-content-between gap-3`, padding vertikal 16 px.

   **E. Page head (hero).** Latar `#FFFFFF`, garis bawah 1 px `#E2E8F0`, padding 24 px atas
   dan bawah (tinggi isi ±112 px). Isi: jejak navigasi (Beranda / Katalog / Keyboard Mekanis
   KX-210) 14 px, di bawahnya `h1` "Detail Produk" 32 px Poppins 600.

   **F. Bagian detail (padding 32 dan 48 px).** Baris `row g-4`: kolom kiri `col-lg-7`
   menampung kotak gambar (lebar mengikuti kolom ±655 px, latar `#FFFFFF`, border 1 px
   `#E2E8F0`, radius 12, padding 16, gambar `img-fluid` dengan width/height 520×360,
   *alt* deskriptif) lalu `h2` "Spesifikasi Singkat" 28 px dengan daftar 3 butir (87 tombol;
   switch biru; nyaman untuk kerja lama) 16 px/1,6. Kolom kanan `col-lg-5` memuat panel:
   latar `#FFFFFF`, border 1 px, radius 12, padding 24, bayangan kartu. Urutan isi panel:
   *badge* "Best Seller" (latar `#F59E0B`, teks `#1E293B`, Inter 600, 12 px, padding
   6 px 12 px, radius 999 px) — `h2` nama (margin atas 16) — kategori "Aksesori Input"
   (14 px, margin atas 8) — harga `Rp650.000` (24 px/600/`#4F46E5`, margin atas 8) —
   deskripsi produk baku 16 px/1,6 (margin atas 16) — tombol "Tambah ke Keranjang"
   (latar `#4F46E5`, teks putih, Poppins 600, 16 px, padding 14 px 28 px, radius 12,
   margin atas 24, ikon `bi-cart3`, tinggi ±48 px) — info kirim "Kirim dari Jakarta"
   dan info bantuan dengan kontak baku `(021) 555-0199` (14 px, ikon `bi-truck` dan
   `bi-headset`, margin atas 16).

   **G. Produk Terkait.** `h2` 28 px, jarak bawah 24 px. Baris `row g-4`: tiga kartu
   `col-12 col-md-4` lebar ±364 px; kartu: latar putih, border 1 px `#E2E8F0`, radius 12,
   bayangan kartu, padding 16. Isi tiap kartu: gambar lebar penuh ±332×160 px, radius 12,
   margin bawah 16 — *badge* status (MW-88 "Tersedia" `#16A34A` teks putih; HS-15
   "Tersedia" `#16A34A`; BT-5 "Stok Terbatas" `#DC2626` teks putih; format badge sama: 12 px,
   600, pil) — nama produk 18 px — harga 18 px/600/`#4F46E5` — tautan "Lihat di Katalog"
   14 px/600/`#4F46E5`.

   **H. Footer.** Latar `#1E293B`, padding atas 48 dan bawah 24, teks putih. Tiga kolom
   (`col-12 col-md-4`): merek + tagline "Belanja Tepat, Kirim Cepat"; kolom Navigasi (4
   tautan, 14 px, *line-height* 1,8); kolom Kontak: Jl. Digital Raya No. 10, Jakarta;
   halo@tokosaya.id; (021) 555-0199. Baris hak cipta 14 px, dipisah garis tipis putih
   transparan 20 %, margin atas 32.

   **I. Responsif.** ≤ 1199 px: kontainer memakai lebar Bootstrap. ≤ 767 px: kolom detail
   menumpuk (`col-12`), judul 24 px, padding bagian 24/32, kartu terkait satu kolom.

4. Susun kerangka HTML di `produk.html`: `<!DOCTYPE html>`, meta viewport, title, tautan
   Google Fonts, CDN Bootstrap, Bootstrap Icons, `css/style.css`, lalu lima bagian utama
   pada peta komponen (navbar, page head, detail, terkait, footer).
5. Tulis `css/style.css`: blok `:root` penuh, aturan dasar `body` dan heading, lalu kelas
   tiap komponen mengikuti angka spesifikasi. Ingat pemisahan: aturan posisi memakai kelas
   utilitas Bootstrap; aturan warna/ukuran presisi memakai kelas kustom bertoken.
6. Buka `produk.html` di Chrome untuk tiga lebar: 1440, 768, dan 375 piksel via *Device
   Toolbar*. Perbaiki penyimpangan sebelum lanjut.
7. Jalankan checklist *fidelity* (14.7) satu per satu; catat hasilnya di daftar berbentuk
   tabel sederhana lalu simpan sebagai `catatan-fidelity.txt` di folder proyek.
8. Simpan semua perubahan; halaman ini adalah input pemeriksaan mutu pada bab berikutnya.

### Kode

File: tokosaya-bootstrap/produk.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Keyboard Mekanis KX-210 — Tokosaya</title>
  <meta name="description" content="Detail Keyboard Mekanis KX-210 di Tokosaya — Belanja Tepat, Kirim Cepat.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <link rel="stylesheet" href="css/style.css">
  <!-- Tanpa bundle JavaScript resmi (bootstrap-bundle) — interaktivitas di luar cakupan mata kuliah -->
</head>
<body>

  <!-- Navbar: flex statis, tinggi ±72 px -->
  <header class="site-nav">
    <div class="container d-flex flex-wrap align-items-center justify-content-between gap-3">
      <a href="index.html" class="site-brand">Tokosaya</a>
      <ul class="site-menu list-unstyled d-flex flex-wrap align-items-center gap-4 m-0">
        <li><a href="index.html" class="site-link">Beranda</a></li>
        <li><a href="katalog.html" class="site-link site-link--aktif" aria-current="page">Katalog</a></li>
        <li><a href="tentang.html" class="site-link">Tentang</a></li>
        <li><a href="kontak.html" class="site-link">Kontak</a></li>
        <li>
          <a href="keranjang.html" class="site-ikon" aria-label="Keranjang belanja">
            <i class="bi bi-cart3" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </header>

  <!-- Page head: jejak navigasi + judul halaman -->
  <section class="page-head">
    <div class="container">
      <p class="page-breadcrumb m-0">
        <a href="index.html">Beranda</a> / <a href="katalog.html">Katalog</a> /
        <span>Keyboard Mekanis KX-210</span>
      </p>
      <h1 class="page-title m-0">Detail Produk</h1>
    </div>
  </section>

  <!-- Detail produk: grid 7-5, gutter 24 px -->
  <section class="produk-detail">
    <div class="container">
      <div class="row g-4 align-items-start">
        <div class="col-12 col-lg-7">
          <figure class="produk-gambar m-0">
            <img src="img/produk-keyboard-kx210.svg" width="520" height="360"
                 alt="Keyboard mekanis KX-210 hitam dengan switch biru dari sisi atas"
                 class="img-fluid">
          </figure>
          <h2 class="produk-spes-judul mt-4">Spesifikasi Singkat</h2>
          <ul class="produk-spes-daftar list-unstyled m-0">
            <li>87 tombol kompakt untuk meja kerja yang rapi</li>
            <li>Switch biru memberi umpan tekanan yang jelas</li>
            <li>Nyaman dipakai untuk kerja lama sehari penuh</li>
          </ul>
        </div>
        <div class="col-12 col-lg-5">
          <div class="produk-panel">
            <span class="badge-populer">Best Seller</span>
            <h2 class="produk-nama mt-3">Keyboard Mekanis KX-210</h2>
            <p class="produk-kategori m-0 mt-2">Aksesori Input</p>
            <p class="produk-harga m-0 mt-2">Rp650.000</p>
            <p class="produk-deskripsi mt-3">
              Keyboard mekanis 87 tombol dengan switch biru untuk kerja lama yang nyaman.
            </p>
            <a href="keranjang.html" class="btn-tokosaya produk-cta">
              <i class="bi bi-cart3 me-2" aria-hidden="true"></i> Tambah ke Keranjang
            </a>
            <p class="produk-info m-0 mt-3">
              <i class="bi bi-truck me-2" aria-hidden="true"></i> Kirim dari Jakarta — kemasan aman
            </p>
            <p class="produk-info m-0 mt-2">
              <i class="bi bi-headset me-2" aria-hidden="true"></i>
              Butuh bantuan? (021) 555-0199 atau halo@tokosaya.id
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Produk terkait: 3 kartu dari katalog baku -->
  <section class="produk-terkait">
    <div class="container">
      <h2 class="section-title">Produk Terkait</h2>
      <div class="row g-4">
        <article class="col-12 col-md-4">
          <div class="produk-card">
            <img src="img/produk-mouse-mw88.svg" width="332" height="160"
                 alt="Mouse wireless MW-88 kecil berwarna gelap di atas meja"
                 class="produk-card-gambar img-fluid mb-3">
            <span class="badge-tersedia">Tersedia</span>
            <h3 class="produk-card-nama">Mouse Wireless MW-88</h3>
            <p class="produk-card-harga m-0">Rp185.000</p>
            <a href="katalog.html" class="produk-card-tautan">Lihat di Katalog</a>
          </div>
        </article>
        <article class="col-12 col-md-4">
          <div class="produk-card">
            <img src="img/produk-headphone-hs15.svg" width="332" height="160"
                 alt="Headphone studio HS-15 warna gelap diletakkan menghadap ke atas"
                 class="produk-card-gambar img-fluid mb-3">
            <span class="badge-tersedia">Tersedia</span>
            <h3 class="produk-card-nama">Headphone Studio HS-15</h3>
            <p class="produk-card-harga m-0">Rp425.000</p>
            <a href="katalog.html" class="produk-card-tautan">Lihat di Katalog</a>
          </div>
        </article>
        <article class="col-12 col-md-4">
          <div class="produk-card">
            <img src="img/produk-speaker-bt5.svg" width="332" height="160"
                 alt="Speaker bluetooth BT-5 berbentuk kotak kecil di atas meja"
                 class="produk-card-gambar img-fluid mb-3">
            <span class="badge-stok">Stok Terbatas</span>
            <h3 class="produk-card-nama">Speaker Bluetooth BT-5</h3>
            <p class="produk-card-harga m-0">Rp285.000</p>
            <a href="katalog.html" class="produk-card-tautan">Lihat di Katalog</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Footer tiga kolom -->
  <footer class="site-footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-12 col-md-4">
          <p class="site-footer-brand m-0">Tokosaya</p>
          <p class="site-footer-teks mt-2 m-0">Belanja Tepat, Kirim Cepat. Toko aksesori dan
            elektronik komputer untuk kebutuhan kerja digital sejak 2019.</p>
        </div>
        <div class="col-12 col-md-4">
          <h2 class="site-footer-judul">Navigasi</h2>
          <ul class="site-footer-daftar list-unstyled m-0">
            <li><a href="index.html">Beranda</a></li>
            <li><a href="katalog.html">Katalog</a></li>
            <li><a href="tentang.html">Tentang</a></li>
            <li><a href="kontak.html">Kontak</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-4">
          <h2 class="site-footer-judul">Kontak</h2>
          <ul class="site-footer-daftar list-unstyled m-0">
            <li>Jl. Digital Raya No. 10, Jakarta</li>
            <li>halo@tokosaya.id</li>
            <li>(021) 555-0199</li>
          </ul>
        </div>
      </div>
      <p class="site-footer-copy">© 2026 Tokosaya — Belanja Tepat, Kirim Cepat.</p>
    </div>
  </footer>

</body>
</html>
```

File: tokosaya-bootstrap/css/style.css

```css
/* style.css — Tokosaya v2 (tokosaya-bootstrap) */
/* Melanjutkan style.css Bab 9–13; blok token tetap satu sumber kebenaran. */

/* kustom — design token hasil pemetaan Figma styles (14.6) */
:root {
  --clr-primary: #4F46E5;      /* indigo — tombol & tautan utama */
  --clr-primary-dark: #4338CA;
  --clr-accent: #F59E0B;       /* amber — badge & sorotan */
  --clr-dark: #1E293B;         /* heading & teks tegas */
  --clr-body: #334155;         /* teks paragraf */
  --clr-bg: #F8FAFC;           /* latar halaman */
  --clr-surface: #FFFFFF;      /* kartu & panel */
  --clr-border: #E2E8F0;
  --clr-success: #16A34A;
  --clr-danger: #DC2626;
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  --radius: 12px;
  --shadow-card: 0 8px 24px rgba(15, 23, 42, 0.08);
  --space-unit: 8px;           /* basis skala jarak 8/16/24/32/48/64 */
}

/* kustom — dasar halaman */
body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: var(--clr-body);
  background-color: var(--clr-bg);
}
h1, h2, h3 {
  font-family: var(--font-heading);
  color: var(--clr-dark);
}

/* kustom — navbar (tinggi ±72 px: padding 16 + baris tautan) */
.site-nav {
  background-color: var(--clr-surface);
  border-bottom: 1px solid var(--clr-border);
  padding-top: 16px;
  padding-bottom: 16px;
}
.site-brand {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 20px;
  color: var(--clr-primary);
  text-decoration: none;
}
.site-menu .site-link {
  font-size: 15px;
  color: var(--clr-body);
  text-decoration: none;
}
.site-menu .site-link:hover { color: var(--clr-primary); }
.site-menu .site-link--aktif { font-weight: 600; color: var(--clr-primary); }
.site-ikon { font-size: 20px; color: var(--clr-dark); }

/* kustom — page head */
.page-head {
  background-color: var(--clr-surface);
  border-bottom: 1px solid var(--clr-border);
  padding-top: 24px;
  padding-bottom: 24px;
}
.page-breadcrumb { font-size: 14px; }
.page-breadcrumb a { color: var(--clr-body); text-decoration: none; }
.page-breadcrumb span { color: var(--clr-dark); }
.page-title {
  margin-top: 8px;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.25;
  color: var(--clr-dark);
}

/* kustom — bagian detail */
.produk-detail { padding-top: 32px; padding-bottom: 48px; }
.produk-gambar {
  background-color: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  padding: 16px;
}
.produk-spes-judul { font-weight: 600; font-size: 28px; line-height: 1.25; }
.produk-spes-daftar li {
  padding-left: 16px;
  border-left: 3px solid var(--clr-accent);
  margin-bottom: 8px;
}

/* kustom — panel produk */
.produk-panel {
  background-color: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  padding: 24px;
}
.produk-nama { font-weight: 600; font-size: 28px; line-height: 1.25; }
.produk-kategori { font-size: 14px; color: var(--clr-body); }
.produk-harga {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 24px;
  color: var(--clr-primary);
}
.produk-deskripsi { line-height: 1.6; }

/* kustom — badge status memakai token */
.badge-populer,
.badge-tersedia,
.badge-stok {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}
.badge-populer { background-color: var(--clr-accent); color: var(--clr-dark); }
.badge-tersedia { background-color: var(--clr-success); color: #FFFFFF; }
.badge-stok { background-color: var(--clr-danger); color: #FFFFFF; }

/* kustom — tombol utama dari token */
.btn-tokosaya {
  display: inline-block;
  background-color: var(--clr-primary);
  color: #FFFFFF;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  padding: 14px 28px;
  border-radius: var(--radius);
  text-decoration: none;
}
.btn-tokosaya:hover { background-color: var(--clr-primary-dark); color: #FFFFFF; }
.btn-tokosaya:focus-visible { outline: 3px solid var(--clr-accent); outline-offset: 2px; }
.produk-info { font-size: 14px; color: var(--clr-body); }

/* kustom — produk terkait */
.produk-terkait { padding-top: 32px; padding-bottom: 48px; }
.section-title { font-weight: 600; font-size: 28px; margin-bottom: 24px; }
.produk-card {
  background-color: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  padding: 16px;
}
.produk-card-gambar {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: var(--radius);
  background-color: var(--clr-bg);
}
.produk-card-nama { font-weight: 500; font-size: 18px; line-height: 1.4; margin-top: 8px; }
.produk-card-harga {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 18px;
  color: var(--clr-primary);
  margin-bottom: 8px;
}
.produk-card-tautan {
  font-size: 14px;
  font-weight: 600;
  color: var(--clr-primary);
  text-decoration: none;
}
.produk-card-tautan:hover { text-decoration: underline; }

/* kustom — footer gelap */
.site-footer {
  background-color: var(--clr-dark);
  color: #FFFFFF;
  padding-top: 48px;
  padding-bottom: 24px;
}
.site-footer-brand {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
}
.site-footer-teks { font-size: 14px; color: var(--clr-border); }
.site-footer-judul {
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  margin-bottom: 12px;
}
.site-footer-daftar { font-size: 14px; line-height: 1.8; color: var(--clr-border); }
.site-footer-daftar a {
  color: #FFFFFF;
  text-decoration: none;
}
.site-footer-daftar a:hover { text-decoration: underline; }
.site-footer-copy {
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 14px;
  color: var(--clr-border);
}

/* kustom — penyesuaian layar kecil */
@media (max-width: 767.98px) {
  .page-head { padding-top: 16px; padding-bottom: 16px; }
  .page-title { font-size: 24px; }
  .produk-detail { padding-top: 24px; padding-bottom: 32px; }
  .produk-nama { font-size: 24px; }
  .produk-spes-judul { font-size: 24px; }
  .section-title { font-size: 22px; margin-bottom: 16px; }
  .produk-terkait { padding-top: 24px; padding-bottom: 32px; }
}
```

### Penjelasan Kode

Penjelasan: file HTML adalah hasil translasi utuh frame `P-DETAIL-01`. Setiap komponen
mengikuti spesifikasi: navbar memakai flex utilitas Bootstrap (`d-flex`,
`justify-content-between`) sehingga tidak melibatkan perilaku skrip sama sekali; page head
menampung jejak navigasi dan `h1` per halaman; detail berbagi baris `row g-4` dua kolom
(7-5) persis rasio grid; panel kanan menyusun badge — nama — kategori — harga — deskripsi —
CTA — info sesuai urutan spesifikasi; tiga kartu terkait memakai data katalog baku MW-88,
HS-15, BT-5; footer menyalin kontak baku Tokosaya. Semua gambar membawa `alt`, semua tautan
membawa tujuan nyata, dan tidak ada atribut perilaku sama sekali.

Penjelasan: berkas CSS dibangun dalam lima blok utama. Blok `:root` menyalin token dari
spesifikasi kata demi kata — inilah penerapan 14.6. Blok dasar menentukan font dan warna
teks halaman sekali saja, sehingga seluruh paragraf mewarisi gaya body tanpa aturan
berulang. Blok per komponen menyusun navbar, page head, panel, badge, tombol, kartu, dan
footer — setiap kelas kustom mengonsumsi token (`var(--clr-…)`, `var(--radius)`,
`var(--shadow-card)`) alih-alih menuliskan ulang nilai. Blok responsif kecil menyetel
tipografi dan padding pada layar ponsel sesuai spesifikasi bagian I, karena utilitas
Bootstrap mengurus tata letak kolom namun bukan ukuran huruf halaman Anda.

### Hasil yang Diharapkan

1. Pada 1440 piksel: navbar putih bertepi tipis, page head berisi jejak navigasi, area
   detail memakai dua kolom (gambar di kiri ±655 px, panel di kanan ±461 px), panel dengan
   badge amber, harga indigo 24 px, tombol indigo radius 12, tiga kartu terkait sejajar.
2. Pada 768 piksel, kolom bertumpuk dengan jarak 24 px; pada 375 piksel, kartu terkait
   menjadi satu kolom dan judul menyusut ke 24 px tanpa teks terpotong.
3. Pemeriksaan DevTools menunjukkan: *gutter* kolom 24 px, radius 12 px pada kartu, panel,
   tombol; semua warna komponen datang dari variabel di blok `:root`, bukan nilai hex liar.
4. Checklist kesembilan item pada 14.7 terpenuhi; catatannya tersimpan di
   `catatan-fidelity.txt`.

### Troubleshooting

**Masalah:** Kartu produk terkait sejajar di desktop tetapi bertumpuk terlalu rapat di
layar ponsel tanpa jalan napas.
**Penyebab:** Baris kartu ditulis tanpa kelas `g-4`, sehingga kolom `col-12` menumpuk
tanpa jarak vertikal 24 px dari spesifikasi.
**Solusi:** Tambahkan `g-4` pada `row` kartu terkait dan pastikan setiap kartu berada di
`col-12 col-md-4` sesuai Langkah 3 bagian G.
**Pencegahan:** Jadikan `g-4` kelas wajib pada setiap `row` baru; gunakan checklist 14.7
item grid sebelum menyatakan halaman selesai.

**Masalah:** Warna *badge* "Best Seller" tampak ungu keunguan, bukan amber seperti desain.
**Penyebab:** Nilai hex ditulis langsung di CSS (misalnya warna ungu bawaan utilitas),
bukan memanggil `var(--clr-accent)`, sehingga token tidak ikut berbicara.
**Solusi:** Ganti latar `badge-populer` menjadi `background-color: var(--clr-accent)` dan
hapus setiap hex duplikat yang menempel pada selektor komponen.
**Pencegahan:** Terapkan aturan "tanpa hex di luar `:root`" pada seluruh file kustom; jalankan
pemeriksaan warna checklist item 2.

**Masalah:** Gambar produk di panel detail tampil melebar melebihi kotak dan mendorong
kolom kanan turun saat layar tablet.
**Penyebab:** Atribut `width`/`height` dibaca sebagai ukuran tetap karena kelas `img-fluid`
lupa diberikan pada elemen `img`.
**Solusi:** Tambahkan `img-fluid` pada gambar utama dan gambar kartu; pastikan `figure`
yang membungkusnya membawa padding 16 dan border token.
**Pencegahan:** Selalu pasangkan atribut dimensi (520×360, 332×160) dengan `img-fluid`
agar ukuran aset dan batasan kolom tidak saling mengalahkan.

**Masalah:** Judul kartu muncul dengan warna hitam pekat berbeda dari desain yang memakai
warna gelap samar.
**Penyebab:** Pemilih `h1, h2, h3` di blok dasar memakai `var(--clr-dark)`, sedangkan
spesifikasi kartu meminta Poppins 500; kebiasaan menimpa warna per kelas menyebabkan dua
aturan berbeda saling menimpa tanpa urutan yang pasti.
**Solusi:** Kembalikan warna hanya pada blok dasar; kelas `produk-card-nama` cukup menata
ukuran dan ketebalan, tidak mengulang warna.
**Pencegahan:** Tulis warna heading satu kali di satu tempat; bila komponen butuh berbeda,
beri kelas khusus dan komentari alasannya (`/* kustom */`).

## Studi Kasus

Sebuah startup e-commerce yang diisi lulusan sistem informasi berumur tiga semester
berinisiatif memformalkan prosesnya: desainer menghabiskan dua minggu menyempurnakan desain
beranda dan
halaman produk, lalu menyampaikan berkas Figma kepada pengembang dengan satu pesan singkat:
"inilah desainnya, tolong bangun". Dua minggu kemudian, halaman jadi melahirkan perdebatan:
tombol utama memakai warna yang hampir serupa (tetapi bukan token), kartu punya jarak
berubah-ubah, *state* keranjang kosong tidak pernah direncanakan, dan nama produk panjang
membuat kartu "tumbuh" berbeda-beda tingginya.

Investigasi rapat menemukan daftar barang yang hilang di jalan: barang-barang kecil yang
tidak tampak di gambar statis. Tabel berikut merangkum temuan umumnya — dan polanya mirip
di banyak tim.

| Barang yang hilang saat *handoff* | Dampak di implementasi | Mitigasi yang dipakai |
|---|---|---|
| Keadaan samping (*hover, focus*) | tombol terasa mati bagi pengguna keyboard | tulis keadaan dalam spesifikasi + `:focus-visible` |
| *Empty state* hasil filter kosong | halaman tampak rusak saat tidak ada produk | definisikan pesan kosong di *spec* |
| Nama produk sangat panjang | kartu tumbuh tidak sejajar | batas baris (1–2 baris) di spesifikasi |
| Format harga `Rp1.899.000` | tampil `1.9 juta` atau pemisah salah | contoh format harga di *spec* |
| *Fallback* font & ketebalan | teks menghilang saat font gagal dimuat | daftar font + *fallback* wajib |
| *Breakpoint* turun | kartu remuk di tablet | aturan tumpuk per *breakpoint* |
| Teks alternatif gambar | aksesibilitas turun tanpa terlihat | kolom `alt` pada daftar aset |
| Kontras *badge* di latar gelap | *badge* tak terbaca | uji kontras saat menetapkan token |

Pelajaran bagi mahasiswa sistem informasi jelas: *handoff* bukan sekadar mengirim berkas,
melainkan mengirim *keputusan* — dan keputusan yang tidak tertulis akan ditafsir bebas.
Makanya bab ini berlatih bentuk ekstremnya: spesifikasi desain tekstual lengkap dengan
angka piksel. Ketika desainer menulis spesifikasi dan pengembang menaati checklist, rapat
revisi berkurang, dan keduanya berbicara dalam bahasa yang sama: token, grid, keadaan.
Frasa "desain adalah janji" dari awal buku ini berlaku dua arah — janji desainer dicapai
dengan kebiasaan menulis, dan janji pengembang dicapai dengan disiplin membaca.

## Latihan Mandiri

1. Jelaskan dengan kalimat Anda sendiri perbedaan *prototip* dan *implementasi* dalam alur
   desain ke kode, lalu beri satu contoh keputusan yang boleh berbeda di kedua tahap.
2. Buka demo `kartu-produk-demo.html` di Chrome, ganti kelas `col-12 col-md-4` menjadi
   `col-12 col-md-6`, lalu deskripsikan perubahan tata letak yang teramati dan kaitkan
   dengan pembagian grid dua belas kolom.
3. Susun tabel pemetaan sendiri untuk dua *color style* fiktif "Warna/Info" dan
   "Warna/Warning" beserta nama variabel CSS yang sesuai pola penamaan Tokosaya.
4. Terjemahkan spesifikasi tipografi bagian C Langkah 3 menjadi dua kelas CSS
   (`.judul-promo` 28 px Poppins 600 dan `.keterangan-promo` 14 px Inter 400) — tulis
   aturannya di buku kerja Anda tanpa nilai hex.
5. Pilih salah satu produk baku lain (misalnya Webcam HD WC-720) dan tulis spesifikasi
   tekstual satu kartu produknya mengikuti format bagian G; lengkapi angka padding, radius,
   dan warna *badge*-nya.
6. Buat halaman `produk-mw88.html` dengan menyalin struktur praktikum dan mengganti data
   menjadi Mouse Wireless MW-88 (harga Rp185.000, *badge* "Tersedia"); catat berapa tempat
   yang wajib disunting dan mengapa token membuat sisanya aman.

## Tugas

1. **Individu — Spesifikasi dan translasi setengah halaman.** Tulis spesifikasi desain
   tekstual untuk *page head* dan panel detail Webcam HD WC-720 (mengikuti format
   bagian A–F Langkah Kerja), lalu implementasikan keduanya pada file `produk-wc720.html`
   dengan token yang sama. Keluaran yang dikumpulkan: berkas HTML, CSS, dan tabel
   *fidelity* kesembilan item. Kriteria ringkas: kelengkapan spesifikasi (angka px),
   kesetiaan kode, kelas utilitas dipakai dulu, tanpa warna di luar token.
2. **Kelompok (2 orang) — Role-play *handoff* dan audit silang.** Anggota A menulis
   spesifikasi tekstual satu komponen (navbar atau kartu) dari desain fiktif; anggota B
   mengimplementasikannya tanpa bertanya, hanya dari spesifikasi; kemudian B menilai dengan
   checklist 14.7 dan mencatat setiap barang yang terasa hilang. Keluaran: satu halaman
   laporan "hilang saat *handoff*" berisi minimal 4 temuan beserta usulan melengkapi
   spesifikasi; presentasi 3 menit di kelas.

## Refleksi

1. Nilai berapa persen keputusan desain yang Anda salin secara presisi tadi, dan bagian
   mana yang paling sering Anda "takan" dengan selera pribadi?
2. Ketika spesifikasi tekstual menggantikan berkas gambar, kehilangan dan kelebihan apa
   yang Anda alami sebagai pembaca?
3. Selama pekerjaan ini, komponen mana yang paling sulit disetiaikan (navbar, panel,
   kartu, footer) dan mengapa?
4. Jika UMKM yang Anda kenal hanya menyerahkan tangkapan layar, pertanyaan apa yang akan
   Anda ajukan sebelum menulis satu baris kode?

## Rangkuman

Poin utama bab ini:

1. *Handoff* adalah serah terima keputusan desain; kualitasnya menentukan jumlah revisi.
2. Membaca Figma berarti membaca *frame*, *layer*, *auto layout*, ukuran, *fill*, *stroke*
   secara berurutan dari kerangka ke detail.
3. *Column grid* dua belas kolom Tokosaya: kontainer 1140, *gutter* 24, kolom 73 — diterjemahkan
   ke `.container`, `.row`, `col-*`, dan `g-4`.
4. *Text style* dan *color style* adalah bentuk desain dari *design token*: keluarga font,
   ukuran, *line-height*, dan hex dipetakan ke `:root`.
5. Translasi komponen memakai pola lima langkah: baca — pilih elemen semantik — pilih kelas
   utilitas — tulis kustom bertoken — bandingkan dengan frame.
6. *Badge* semantik Tokosaya memakai token aksen, sukses, dan bahaya; komponen interaktif
   ditranslasi sebagai keadaan statis disertai catatan perilakunya di dunia kerja.
7. *Fidelity* dijaga checklist sembilan item dengan toleransi memakai ± 2 px; DevTools
   panel *Computed* menjadi alat pembandingnya.

Jembatan ke bab berikutnya: halaman `produk.html` yang baru Anda translasi inilah bahan
uji mutu pada Bab 15. Di sana, hasil kerja akan melalui pemeriksaan seluruh halaman,
perilaku responsif, aksesibilitas, serta *debugging* visual untuk menuju rilis kandidat
final project — *fidelity* checklist bab ini menjadi modul pertama checklist QA tersebut.

## Evaluasi

### Pilihan Ganda

1. Pernyataan yang paling tepat mengenai *handoff* adalah…
   A. serah terima berkas desain lengkap dengan keputusan ukuran, warna, dan keadaan
   B. pengiriman tangkapan layar agar pengembang menebak sisa detailnya
   C. proses desain berulang oleh pengembang setelah desainer selesai
   D. kontrak kerja antara perusahaan dan desainer lepas-las

2. Fitur *auto layout* di Figma paling dekat padanannya pada CSS adalah…
   A. CSS Grid
   B. Flexbox
   C. media query
   D. *position absolute*

3. Pada grid 12 kolom dengan kontainer 1140 px dan *gutter* 24 px, lebar satu kolom Figma adalah…
   A. 66 px
   B. 73 px
   C. 87 px
   D. 95 px

4. *Text style* Figma paling tepat dipetakan ke…
   A. aturan tipografi berbasis token (keluarga font, ketebalan, ukuran, *line-height*) di CSS
   B. penulisan ulang teks menjadi gambar agar tak berubah
   C. tag presentasi usang yang memformat teks
   D. daftar keinginan pengembang berupa font apa pun

5. Panel *Inspect* pada mode pengembang Figma membantu penulis kode karena…
   A. menampilkan data teknis layer terpilih (ukuran, warna, font) yang dapat disalin sebagai nilai CSS
   B. menghasilkan halaman siap pakai termasuk seluruh keadaan interaktif
   C. menyusun sitemap website secara otomatis
   D. menerbitkan halaman ke internet

6. Pada kondisi root 16 px, kelas `g-4` Bootstrap 5.3 memberikan *gutter* sebesar…
   A. 8 px
   B. 16 px
   C. 24 px
   D. 32 px
   (penerapan)

7. Tujuan utama *fidelity checklist* adalah…
   A. mempercepat penulisan kode dengan mengabaikan keputusan desainer
   B. memastikan keputusan desain (ukuran, jarak, warna, radius) benar-benar diterapkan dalam kode
   C. menguji kecerdasan pengembang terhadap desain
   D. mengganti pemeriksaan aksesibilitas halaman

8. *Badge* "Best Seller" dengan latar amber dan teks gelap paling tepat ditulis memakai…
   A. kelas kustom yang memanggil `var(--clr-accent)` dan warna teks gelap token
   B. warna hex baru yang mirip amber agar cepat
   C. latar hitam karena lebih tegas
   D. gambar *badge* berformat PNG yang disalin dari desain

### Benar atau Salah

1. *Prototip* Figma menampilkan halaman yang berperilaku persis seperti kode pada semua
   perangkat, sehingga implementasi tidak perlu diuji responsif.
2. Nilai padding dan margin dalam spesifikasi Tokosaya sebaiknya mengikuti skala kelipatan
   8 px agar konsisten dengan `--space-unit`.
3. Kelas `col-lg-7` dan `col-lg-5` pada praktikum dipilih dari membaca pembagian grid
   pada frame Figma, bukan dari selera.
4. Salin-menyalin semua properti dari panel *Inspect* Figma ke stylesheet selalu menghasilkan
   kode yang ideal tanpa perlu dibereskan.

### Analisis Kode

1. Periksa potongan kartu berikut (potong dari halaman katalog yang memiliki `h1` di atasnya):

File: demo/bab-14/analisis-1.html

```html
<div class="row">
  <div class="col-12 col-md-4">
    <div class="produk-card">
      <img src="img/produk-speaker-bt5.svg" width="332" height="160" class="img-fluid">
      <h3 class="produk-card-nama">Speaker Bluetooth BT-5</h3>
      <p class="produk-card-harga">Rp285.000</p>
      <span class="badge-stok">Stok Terbatas</span>
    </div>
  </div>
</div>
```

   a) Atribut apa yang hilang pada `img` dan mengapa bermasalah bagi aksesibilitas?
   b) Urutan tampilan isi kartu menyimpang dari spesifikasi praktikum; apa yang salah dan
      di posisi mana elemen *badge* seharusnya berada?
   c) `row` pada potongan ini tidak membawa `g-4`; dampak apa yang muncul pada tumpukan
      kartu di layar ponsel?

2. Periksa aturan CSS berikut yang ditulis seorang mahasiswa untuk panel produk:

File: demo/bab-14/analisis-2.css

```css
.produk-panel {
  padding: 24px;
  margin: 50px 100px;
  border-radius: 8px;
  background-color: #6366F1;
  color: var(--clr-body);
}
```

   a) Sebutkan tiga penyimpangan aturan ini terhadap spesifikasi dan token Tokosaya.
   b) Perbaiki aturan tersebut sehingga setia pada spesifikasi bagian F Langkah Kerja.

### Soal Praktik

1. Berdasarkan spesifikasi bagian F pada Langkah Kerja, tulis markup HTML panel kanan
   (badge, nama produk, kategori, harga, deskripsi, tombol, dua baris info) untuk produk
   Webcam HD WC-720 — "Baru", kategori Video, harga Rp310.000 — beserta kelas-kelas utilitas
   yang terhubung tata letaknya.
2. Buat media query layar kecil untuk halaman `produk.html` yang mengecilkan `h1` ke 24 px
   dan padding bagian detail menjadi 24 px atas dan 32 px bawah, lalu jelaskan mengapa
   penyesuaian ini tidak dilakukan lewat kelas utilitas Bootstrap.

### Kunci Jawaban

<details>
<summary>Kunci Jawaban Evaluasi Bab 14</summary>

**Pilihan Ganda:**
1. A — *handoff* adalah serah terima keputusan desain, bukan sekadar gambar.
2. B — *auto layout* menata anak searah baris/kolom dengan jarak, analog Flexbox.
3. B — (1140 − 11 × 24) / 12 = 73 px.
4. A — gaya teks diterjemahkan sebagai aturan tipografi berbasis token di CSS.
5. A — panel *Inspect/mode pengembang* memaparkan ukuran, *fill*, huruf layer terpilih.
6. C — pada root 16 px, `g-4` memberi 24 px per sisi kolom.
7. B — checklist memastikan keputusan desain diterapkan dan terukur.
8. A — badge aksen memakai token, bukan hex liar atau gambar.

**Benar atau Salah:**
1. Salah — prototip menirukan alur secara visual, namun uji responsif tetap wajib di kode.
2. Benar — skala 8 px (8/16/24/32/48/64) menjaga kesetiaan dan konsistensi jarak.
3. Benar — rasio 7-5 keluar dari grid 12 kolom frame, bukan dari selera.
4. Salah — hasil salinan mentah perlu ditulis ulang dengan disiplin token dan struktur proyek.

**Analisis Kode:**
1. a) Atribut `alt` hilang; pembaca layar kehilangan makna gambar. b) *Badge* menempel
   di akhir kartu; padahal spesifikasi menempatkannya paling atas di isi kartu (sebelum
   nama). c) Tanpa `g-4` kartu bertumpuk tanpa jarak 24 px dari spesifikasi.
2. a) Radius 8 px melanggar token `--radius` 12 px; latar `#6366F1` bukan token — panel
   wajib `var(--clr-surface)`; margin 50/100 di luar skala jarak (harus kelipatan 8:
   48/64). b) Perbaikan: `padding: 24px; margin: 48px 0; border-radius: var(--radius); background-color: var(--clr-surface); color: var(--clr-body);`.

**Soal Praktik (garis besar):**
1. Panel memakai struktur identik praktikum dengan `badge-baru` berlatar `var(--clr-primary)`
   teks putih, `h2` nama "Webcam HD WC-720", kategori Video, harga Rp310.000, deskripsi
   baku 720p dengan mikrofon bawaan, tombol kelas `btn-tokosaya`, dua baris info 14 px.
2. Media `@media (max-width: 767.98px)` pada `css/style.css` mengecilkan `.page-title`
   24 px dan menyetel padding `.produk-detail`; Bootstrap tidak menyediakan utilitas media
   untuk *font-size* atau *padding* seluruh bagian pada semua nilai spesifikasi ini, dan
   ukuran presisi dari spesifikasi desain menjadi tanggung jawab CSS kustom bertoken, bukan
   utilitas umum.

</details>

## Referensi

1. Figma Help Center. (2025). *Inspect dan mode pengembang; membuat styles*. Diakses
   10 Januari 2026, dari https://help.figma.com
2. Bootstrap. (2024). *Bootstrap 5.3 documentation — grids, utilities, theming*. Diakses
   10 Januari 2026, dari https://getbootstrap.com/docs/5.3/
3. MDN Web Docs. (2025). *CSS: using CSS custom properties (variables)*. Diakses
   10 Januari 2026, dari https://developer.mozilla.org
4. Duckett, J. (2011). *HTML & CSS: Design and Build Websites*. Indianapolis: Wiley.
5. Marcotte, E. (2011). *Responsive Web Design*. New York: A Book Apart.


