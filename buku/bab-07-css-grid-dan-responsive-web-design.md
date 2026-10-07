# BAB 7 — CSS Grid dan Responsive Web Design

## Deskripsi Singkat

Bab ini mengenalkan **CSS Grid**, sistem layout dua dimensi buat baris dan kolom, sekaligus **responsive web design** (desain web responsif) sebagai cara menampilkan satu halaman yang sama dengan rapi di berbagai ukuran layar. Di Bab 6 kamu udah memakai Flexbox buat membagi ruang pada satu arah (satu baris atau satu kolom). CSS Grid melengkapi kemampuan itu buat mengatur kerangka halaman secara menyeluruh, kayak halaman dashboard admin. Bab berikutnya (Bab 8) adalah Ujian Tengah Semester, dan kemampuan grid plus media query pada bab ini akan jadi bekal utama kamu buat membangun mini website Tokosaya yang responsif.

## Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda mampu:

1. Menjelaskan konsep CSS Grid sebagai layout dua dimensi dan membedakannya dari Flexbox beserta kasus penggunaan yang tepat masing-masing.
2. Membangun kerangka halaman dengan `grid-template-columns`, `grid-template-rows`, satuan `fr`, fungsi `repeat()`, dan properti `gap`.
3. Mengimplementasikan penempatan elemen menggunakan `grid-column`, `grid-row`, `span`, dan `grid-template-areas`.
4. Merancang strategi *mobile-first* (bergerak dulu dari layar kecil) dengan *breakpoint* yang konsisten pada proyek Tokosaya.
5. Menulis *media query* (kueri media) untuk menyesuaikan layout, tipografi dengan `clamp()`, dan gambar responsif.
6. Mengimplementasikan dashboard admin Tokosaya yang statis dan responsif serta halaman `katalog.html` yang responsif.
7. Menguji keberhasilan layout responsif menggunakan *device toolbar* pada DevTools Chrome.

## Capaian Pembelajaran

Bab ini mendukung dua sub-capaian utama:

- **S7.1** — Membangun layout halaman dengan CSS Grid (CPMK 4): menggunakan `grid-template-columns`/`grid-template-rows`, satuan `fr`, `repeat()`, `gap`, serta penempatan dengan `span` dan `grid-template-areas` untuk kerangka halaman seperti dashboard admin dan galeri produk.
- **S7.2** — Menerapkan media query dan breakpoint secara mobile-first (CPMK 5): menyusun gaya dasar untuk layar kecil, menaikkannya dengan `@media (min-width: ...)`, serta menyiapkan tipografi dan gambar responsif dengan `clamp()` dan aturan gambar berbasis persen.

Kegiatan pengujian di DevTools pada bab ini menjadi kontribusi awal bagi CPMK 11 (pengujian responsif), yang nanti dibahas lebih dalam pada Bab 13 dan Bab 15.

## Kata Kunci

**CSS Grid** (sistem kisi dua dimensi buat menata baris sekaligus kolom), **grid track** (jalur atau lintasan baris/kolom di dalam kerangka grid), **fr** (satuan pecahan *free space*, ruang sisa yang dibagi proporsional), **repeat()** (fungsi mengulang definisi track biar CSS ringkas), **gap** (jarak antar track yang menggantikan trik margin), **grid-area** (wilayah bernama buat memetakan elemen ke denah grid), **breakpoint** (titik lebar layar tempat gaya berubah), **media query** (kueri media: aturan "kalau layar memenuhi syarat, terapkan blok ini"), **mobile-first** (strategi menulis gaya dasar buat HP lebih dahulu), **clamp()** (fungsi CSS yang menahan nilai di antara batas minimum dan maksimum), **viewport** (area gambar halaman di layar perangkat).

## Apersepsi

Di akhir pertemuan minggu lalu, pemilik Tokosaya mengirim pesan: "Saya ingin satu ruang kerja tempat saya bisa lihat kondisi toko sekilas — penjualan hari ini, pesanan yang belum diproses, dan stok yang menipis." Intinya, yang diminta itu **dashboard admin**: satu halaman yang menggabungkan panel navigasi, kartu-kartu angka ringkasan, dan tabel pesanan terbaru.

Kebutuhan kedua datang dari sisi pelanggan. Pas kamu membuka `katalog.html` yang dibangun pada Bab 5 dan Bab 6 di monitor kantor, tampilannya rapi. Tetapi rekanmu membukanya dari HP dengan layar selebar 380 piksel, dan kartu produk tumpang tindih serta teksnya menyempit berantakan. Dua kebutuhan ini menunjukkan dua masalah yang berbeda: (1) mengatur banyak komponen pada **dua dimensi** sekaligus — baris dan kolom — yang ditangani CSS Grid, dan (2) memastikan halaman yang sama tetap layak dibaca di **berbagai ukuran layar** yang ditangani responsive web design.

Pegang dua frasa kunci bab ini: layout dua dimensi itu soal *struktur*, sedangkan desain responsif itu soal *strategi beradaptasi*. Keduanya saling menguatkan: grid menyusun denah, media query mengubah denah pas layar berubah. Ayo kuasai dua hal ini, lalu bangun dashboard admin Tokosaya sebagai buktinya.

## Materi Pembelajaran

### 7.1 Konsep CSS Grid dan Perbedaannya dengan Flexbox

CSS Grid adalah modul layout yang mengubah sebuah elemen jadi **wadah grid** (*grid container*) berikut anak-anaknya menjadi **butir grid** (*grid item*), lalu membagi wadah itu menjadi baris dan kolom sekaligus dalam **dua dimensi**. Kamu menentukan denahnya lebih dulu — beberapa kolom, beberapa baris, dengan lebar dan tinggi tertentu — baru menempatkan butir ke dalam sel-selnya, otomatis maupun manual. Analoginya kayak denah parkir: garis-garis tempat parkir (grid track) udah dilukis lebih dulu, dan mobil (butir grid) bisa diparkir ke slot mana pun, termasuk "meratakan dua slot" (span) buat kendaraan yang besar.

Bedanya dengan Flexbox bisa diringkas begini: **Flexbox menata konten pada satu arah** (baris horizontal atau kolom vertikal), sedangkan **Grid menata kedua arah serentak**. Flexbox bekerja dari konten menuju layout (*content-out*): item mengalir, lalu kita memilih cara mendistribusikannya. Grid bekerja dari denah menuju konten (*layout-out*): kita merancang kotak-kotaknya dulu, baru mengisinya. Contoh nyata: navigasi Tokosaya (logo kiri, menu kanan) itu persoalan satu baris — wilayah Flexbox. Dashboard admin (panel kiri, area konten, empat kartu statistik, tabel) itu persoalan dua dimensi — wilayah Grid.

```
Bagan struktur (ilustrasi, bukan file):
grid container (display: grid)
┌─────────── kolom 1 ────┬─── kolom 2 ────┬─── kolom 3 ────┐
│  sel (baris 1, kolom 1)│  sel (1, 2)    │  sel (1, 3)    │  ← baris 1
├────────────────────────┼────────────────┼────────────────┤
│  sel (2, 1)            │  sel (2, 2)    │  sel (2, 3)    │  ← baris 2
└────────────────────────┴────────────────┴────────────────┘
```

Bagan di atas menegaskan istilah yang akan dipakai sepanjang bab: **grid track** adalah jalur kolom atau baris; **sel** adalah perpotongan satu kolom dan satu baris; dan **area** adalah gabungan beberapa sel berbentuk persegi. Ketiga istilah ini yang nantinya disebut pas kita menentukan ukuran dengan `grid-template-columns` dan `grid-template-rows`, dan pas menempatkan butir dengan `grid-column` maupun `grid-area`.

Kapan pilih yang mana? Tabel berikut merangkum aturan praktis yang dipakai di buku ini.

| Situasi | Pilihan cocok | Alasan singkat |
|---|---|---|
| Navigasi horizontal, footer multi kolom, media object | Flexbox | Item mengalir pada satu arah dan menyesuaikan panjang konten |
| Kerangka halaman: header + sidebar + main + footer | Grid | Empat wilayah membentuk baris dan kolom serentak |
| Barisan kartu produk dengan panjang bervariasi | Flexbox *wrap* atau Grid | Flexbox memudah konten panjang beda; Grid rapi kalau kolom harus sama lebar |
| Kartu statistik dashboard yang harus sebaris sempurna | Grid | Kontrol kolom `1fr` menjaga lebar identik |
| Posisi satu elemen agak bergerak dari alurnya | `position` (Bab 5) | Bukan pekerjaan grid maupun flexbox |

Perlu diingat, Grid dan Flexbox bukan dua hal yang saling meniadakan. Di proyek profesional, pola yang paling masuk akal justru memadukan keduanya: Grid membentuk **kerangka halaman**, lalu di setiap selnya dipasang komponen kecil yang diatur Flexbox — misalnya di dashboard admin Tokosaya, kerangka `header-nav-main` ditata grid, sementara link-link navigasi di dalam panel dinata flex biar bisa menggulir horizontal di layar kecil. Dalam konteks sistem informasi, pola ini sering dijumpai pada halaman jadwal peminjaman ruang kelas (kolom hari, baris jam) dan halaman rekap nilai semester: keduanya menuntut keselarasan dua arah yang nggak mungkin diwujudkan cuma dengan satu dimensi.

### 7.2 Membangun Grid: grid-template-columns, grid-template-rows, fr, repeat(), dan gap

Dasar sebuah grid adalah menentukan **denah** (template). Properti `grid-template-columns` mendefinisikan kolom-kolom, dan `grid-template-rows` mendefinisikan baris; keduanya menerima daftar ukuran yang dipisahkan spasi, misalnya `200px 1fr` atau `repeat(4, 1fr)`. Ukuran boleh berupa `px` (tetap), `%` (relatif ke wadah), atau `fr`. Dua unit terakhir adalah inti fleksibilitas grid: satuan `fr`, kependekan dari *fraction*, membagi **ruang yang tersisa** setelah ukuran tetap dan gap dipotongkan. Analoginya kayak bagi kue: setelah satu potongan dikhususkan sebesar 240 piksel, sisanya dibagi proporsional menurut porsi yang ditulis.

```
Bagan fr (ilustrasi): grid-template-columns: 240px 1fr 2fr;
┌─────── 240 px (tetap) ─────┬──── 1fr (1 porsi) ────┬──── 2fr (2 porsi) ────┐
│ sidebar                    │ konten                │ konten (dua kali)     │
└────────────────────────────┴───────────────────────┴───────────────────────┘
```

Fungsi `repeat()` mengulang penulisan ukuran biar CSS tetap ringkas dan mudah dirawat. Menulis `grid-template-columns: repeat(3, 1fr);` adalah bentuk ringkas dari `1fr 1fr 1fr`. Fungsi ini juga menerima perulangan bertingkat, misalnya `repeat(2, 200px 1fr)` yang menghasilkan urutan `200px 1fr 200px 1fr`. Buat galeri yang jumlah kolomnya "sebanyak yang muat", tersedia pola `repeat(auto-fit, minmax(220px, 1fr))`: browser menaruh kolom selebar mungkin minimal 220 piksel, dan menambah kolom begitu ruang melebar — layout kartu yang menumpuk di HP lalu jadi 2–4 kolom di monitor, tanpa satu media query pun. Properti `grid-auto-flow`, `minmax()`, serta pilihan antara `auto-fit` dan `auto-fill` adalah fitur standar CSS Grid; kalau ragu soal perilaku detail, periksa dokumentasi resmi MDN Web Docs.

Properti `gap` menetapkan jarak antar track: `column-gap` buat jarak antar kolom, `row-gap` antar baris, dan `gap: 16px` menetapkan keduanya. Kenapa `gap` dipilih daripada `margin`? Karena gap dipahami browser sebagai **jarak di dalam kerangka**, sehingga nggak perlu jebakan "sel pertama boleh ber-margin, sel terakhir tidak" yang biasanya memaksa pemilihan pseudo-class kayak `:last-child`. Dengan gap, setiap sel punya hak yang sama dan kotak penampungnya tetap rapi. Dalam konteks SI, pola ini persis kebutuhan dashboard akademik: kartu statistik jumlah mahasiswa aktif, mata kuliah, dan dosen harus sama lebar dan berjarak seragam biar nggak memberi kesan "prioritas palsu" pada angka mana pun.

```css
File: tokosaya-css/css/admin.css

/* kustom — alternatif layout kartu statistik;
   pola auto-fit: kolom menyesuaikan lebar ruang tanpa media query */
.stat-kartu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: calc(var(--space-unit) * 3);
}
```

Penjelasan: potongan di atas memperlihatkan satu cara membangun barisan kartu statistik; wadah `.stat-kartu` dinyatakan sebagai grid, kolomnya diulang otomatis (`auto-fit`) dengan lebar minimal 200 piksel dan maksimal satu porsi sisa ruang, lalu gap mengambil nilai dari skala jarak token (Bab 5). Perlu dicatat: pada Praktikum nanti kita memilih varian lain — kolom yang didefinisikan memakai `repeat()` di dalam media query — biar cara berpikir *breakpoint* kamu ikut terlatih, bukan cuma mengandalkan perilaku otomatis.

### 7.3 Penempatan Elemen: grid-column, grid-row, span, dan grid-area

Secara default, butir grid diposisikan otomatis (*auto-placement*): item pertama memenuhi sel pertama, lalu mengalir ke kanan, turun baris pas kolom penuh. Cara otomatis ini nyaman, tetapi dashboard sungguhan hampir selalu butuh penempatan eksplisit — misalnya kartu "Total Aset" yang lebih penting harus membentang dua kolom. Buat itu kita memakai `grid-column` dan `grid-row`. Keduanya mendefinisikan butir "mulai dari garis ke berapa sampai garis ke berapa": `grid-column: 1 / 3` berarti butir berjalan dari *garis kolom 1* sampai *garis kolom 3* (mengalami dua track). Kalau nggak ingin menghitung posisi akhir, gunakan kata kunci `span`: `grid-column: 1 / span 2` membentang dua track mulai garis 1. Garis terakhir juga bisa ditulis `-1`, sehingga `grid-column: 2 / -1` berarti "dari kolom 2 sampai garis paling ujung", praktis pas jumlah kolom dirancang berubah antar perangkat.

Konsep *grid-area* punya dua wajah. Wajah pertama adalah **wilayah bernama**: kamu menggambar denah dengan kata-kata pada `grid-template-areas`, misalnya `"header header"` di baris pertama dan `"nav main"` di baris kedua, lalu setiap butir mengambil posisinya lewat `grid-area: header` — masing-masing satu kata menyatakan satu kolom pada baris itu. Wajah kedua adalah **singkatan posisi** berbentuk `grid-area: mulai-baris / mulai-kolom / akhir-baris / akhir-kolom`. Di buku ini kita lebih menekankan wajah pertama, karena membaca denah yang ditulis kata demi kata jauh lebih mudah dirawat pas desain berubah. Dua aturan penting pada denah wilayah: (1) setiap baris kata harus diapit tanda petik, dan (2) jumlah kolom pada setiap baris kata harus sama; browser akan gagal membentuk denah kalau jumlahnya nggak konsisten.

Kenapa penempatan eksplisit berguna banget buat sistem informasi? Karena informasi punya *tingkat kepentingan* yang nggak sama. Pada panel pemantau klinik, tile "Kamar ICU tersedia" harus tampak besar dan membentang dua kolom, sementara tile statistik rutin cukup satu sel — kemampuan menaruh bobot visual sesuai urgensi adalah alasan utama Grid dipilih buat halaman dashboard. Di Tokosaya nanti, kartu "Penjualan Hari Ini" akan membentang lebih lebar daripada kartu sekunder; penempatan itu ditulis tiga baris saja, tanpa menggeser satu elemen lain.

### 7.4 Mobile-First dan Breakpoint

*Mobile-first* (HP lebih dahulu) adalah strategi penulisan CSS yang udah lama dipakai di industri dan dijelaskan secara klasik oleh Wroblewski (2012): gaya dasar ditulis buat layar kecil, lalu gaya tambahan ditumpuk buat layar makin besar. Di CSS, tumpukan ini dilakukan dengan *media query* bernilai **min-width** (lebar minimum). Penulisan `@media (min-width: 768px) { ... }` berarti "mulai lebar 768 piksel ke atas, pakai blok di dalamnya". Karena gaya dasar tetap berlaku dan media query cuma menambah serta mengganti, kode bergerak naik kayak jalan yang dibangun dari jalan kecil lalu diperlebar — tanpa membongkar fondasi. Strategi sebaliknya (desktop-first dengan `max-width`) membuat browser terus-menerus **membatalkan** gaya desktop; kaskadenya jadi tempat berburu bug.

Sekarang kita tegaskan istilah yang udah sering muncul: **breakpoint adalah nilai lebar viewport tempat serangkaian gaya berubah buat menjaga halaman tetap layak dibaca**. Breakpoint bukan daftar perangkat, melainkan keputusan desain: kita mengamati pada lebar berapa layout mulai rusak — kartu terlalu sempit, teks membentang terlalu lebar — dan di titik itulah gaya berubah. Wroblewski (2012) menekankan bahwa keputusan breakpoint lahir dari konten dan tugas pengguna, bukan dari katalog merek HP yang tiap tahun berganti.

Meski begitu, konvensi industri bisa memudahkan kerja tim. Konvensi yang paling sering memengaruhi kerja web sekarang adalah rangkaian *breakpoint* yang dipakai Bootstrap 5 (getbootstrap.com, diakses 6 Januari 2026), dan kita mengadopsinya biar transisi ke Bab 9 mulus:

| Nama | Lebar minimum | Kebiasaan pemberian gaya di Tokosaya |
|---|---|---|
| Bawaan (*base*, HP) | tanpa media query | tumpukan satu kolom; font ukuran dasar |
| `sm` | 576 px | kartu statistik dua kolom |
| `md` | 768 px | panel navigasi bergeser ke sisi kiri (tablet) |
| `lg` | 992 px | jarak meluas; layout desktop ringan |
| `xl` | 1200 px | empat kartu statistik sebaris; lebar konten maksimum |
| `xxl` | 1400 px | konvensi Bootstrap; jarang dibutuhkan di proyek kecil |

Ada dua prinsip penulisan gaya yang dipakai di bab ini: pertama, **urutan media query min-width harus menaik** (576 lalu 768 lalu 992 lalu 1200) karena kaskade memakai urutan penulisan pas spesifisitas sama; kedua, proyek sebesar Tokosaya cukup memakai dua sampai tiga breakpoint — lebih banyak cuma kalau desainnya sungguh menuntut. Praktik yang dipakai di bab ini sederhana: tulis gaya dasar tanpa media query, lalu tambah blok `min-width` beriringan.

```css
File: tokosaya-css/css/style.css

/* kustom — pola umum mobile-first: gaya dasar buat HP dulu */
.stat-kartu {
  display: grid;
  grid-template-columns: 1fr;
  gap: calc(var(--space-unit) * 2);
}

/* breakpoint pertama: mulai lebar 576 piksel, kartu dua kolom */
@media (min-width: 576px) {
  .stat-kartu { grid-template-columns: repeat(2, 1fr); }
}
```

Penjelasan: pola di atas adalah tulang punggung mobile-first. Gaya dasar menetapkan satu kolom buat semua layar; pas layar mencapai 576 piksel, media query menaikkan jumlah kolom jadi dua dengan `repeat(2, 1fr)`. Nggak ada gaya yang dibatalkan; semuanya **bertumbuh**. Kalau dua aturan sama spesifik dan keduanya berlaku, aturan yang ditulis paling akhir menang — karena itu jaga urutan `min-width` dari kecil ke besar.

### 7.5 Media Query, clamp(), dan Gambar Responsif

Sebuah *media query* punya bentuk yang sederhana: `@media` diikuti satu atau lebih kondisi, lalu blok kurung kurawal berisi aturan yang cuma berlaku kalau kondisi terpenuhi. Kondisi paling lazim adalah `min-width`; kondisi lain yang bermanfaat: `orientation: portrait` atau `landscape`, dan `prefers-color-scheme` (pengaturan tema gelap perangkat). Lebih dari satu kondisi dihubungkan `and` — misalnya `@media (min-width: 768px) and (orientation: portrait)` memberi gaya khusus tablet berdiri. Koma berarti "atau". Di dalam blok query, kamu menulis aturan kayak biasa; nilai yang nggak disebut kembali akan **diwariskan dari gaya dasar**, dan di situlah enaknya mobile-first: media querymu pendek-pendek karena cuma memuat perbedaannya.

Buat tipografi, `clamp()` adalah alat yang paling praktis. Fungsi ini menerima tiga argumen — nilai minimum, nilai *dipilih* (biasanya bercampur satuan rem dan vw), dan nilai maksimum — lalu memilih nilai tengah selama ia berada di antara tepiannya. Artinya, ukuran huruf **ikut menyesuaikan lebar layar tetapi tetap tertahan** di dua batas, persis kayak termostat: dingin dijaga nggak terlalu dingin, panas dijaga nggak meledak. Contoh: `font-size: clamp(1.5rem, 1.1rem + 1.5vw, 2rem);` — pada layar 375 piksel, terhitung `1.1rem + 1.5vw` ≈ `17,6 + 5,6` = 23,2 piksel, di bawah minimum 24 piksel, sehingga browser memakai 24 piksel; pada layar 1440 piksel nilai tengah ≈ 17,6 + 21,6 = 39,2 piksel, melebihi maksimum 32 piksel, sehingga terpotong ke 32 piksel.

```css
File: tokosaya-css/css/style.css

/* kustom — tipografi dan gambar responsif buat katalog (Bab 7) */
.katalog-judul { font-size: clamp(1.5rem, 1.1rem + 1.5vw, 2rem); }

.katalog-grid img {
  width: 100%;
  height: auto;
  display: block;
}
```

Penjelasan: baris pertama membuat judul halaman katalog bernafas antara 24 dan 32 piksel tanpa satu media query pun. Blok setelahnya adalah resep gambar responsif yang paling sering dipakai: `width: 100%` mengikat lebar gambar kepada wadahnya, `height: auto` menjaga proporsinya tetap, dan `display: block` menghilangkan celah kecil di bawah gambar (gambar secara bawaan berperilaku *inline* sehingga menyisakan ruang kayak huruf). Pada gambar yang berisi objek dengan rasio lain, properti `object-fit: cover` menyesuaikan pemotongan biar bingkai tetap rapi. Buat mengirim file berbeda ke perangkat berbeda (`srcset`, elemen `picture`), pembahasan lengkap ditunda ke Bab 13; di bab ini keterampilan wajibnya adalah gambar yang nggak pernah melebihi wadahnya.

### 7.6 Pola Layout Responsif

Pola pertama — dan pola utama Praktikum bab ini — adalah **dashboard admin** dengan tiga area: *header* buat identitas dan judul, *sidebar* buat navigasi, dan *main* buat konten (kartu statistik dan tabel). Kuncinya sederhana: kerangkanya dibangun dengan `grid-template-areas`, dan perubahan antar breakpoint dilakukan cuma dengan **menggambar ulang denah**. Di layar kecil, area ditumpuk vertikal; mulai 768 piksel, denah berubah jadi kolom samping plus kolom konten. Tanpa mengubah satu baris HTML pun, bentuk halaman ikut berubah — karena layoutnya memang milik CSS Grid, bukan milik markup.

```
Diagram 1 (ilustrasi, bukan file): dashboard Tokosaya pada dua ukuran layar.

Desktop (≥ 768 px)                    Ponsel (< 768 px)
┌──────────────┬─────────────────┐    ┌─────────────────────┐
│   header     │     header      │    │       header        │
├──────────────┼─────────────────┤    ├─────────────────────┤
│              │                 │    │  nav (baris chip)   │
│   nav        │      main       │    ├─────────────────────┤
│  (kolom)     │  ┌────┬────┬──┐ │    │   kartu statistik   │
│              │  │kartu (grid)  │ │    │   menumpuk 1 kolom  │
│              │  └────┴────┴──┘ │    ├─────────────────────┤
│              │  tabel pesanan  │    │   tabel (gulir-X)   │
└──────────────┴─────────────────┘    └─────────────────────┘
```

Diagram di atas merangkum transformasi dua arah yang sama yang akan kamu tulis pada `css/admin.css`. Pada sisi mobile, tabel harus dibungkus wadah penggulir (`overflow-x: auto`) karena tabel data memang punya lebar minimum buat keterbacaan kolomnya; dengan begitu, satu-satunya pengguliran horizontal adalah **di dalam wadah tabel**, bukan pada halaman — detail kecil yang membantu banget, karena pengguliran pada seluruh halaman adalah cacat responsif paling tampak.

Pola kedua adalah **galeri produk** (katalog atau halaman koleksi perpustakaan). Di sini tugasmu memilih dua jalan: (a) pola media query eksplisit — jumlah kolom ditetapkan per breakpoint (`repeat(2, ...)` di 768, `repeat(3, ...)` di 992); atau (b) pola otomatis `repeat(auto-fit, minmax(220px, 1fr))` yang menentukan sendiri jumlah kolom sesuai ruang. Jalan (a) memberi kendali yang bisa dijadwalkan bersama desainer — "di tablet harus tepat dua kolom ini"; jalan (b) memberi daya lentur pada konten yang jumlah kartunya berubah-ubah. Keduanya sah; yang penting **satu halaman satu pola**, biar hasilnya bisa diprediksi pas diinspeksi.

### 7.7 Pengujian Responsif di DevTools

Menulis media query tanpa menguji itu kayak membuat jalan tanpa pernah melewatinya. Chrome menyediakan **device toolbar**: buka DevTools (`F12` atau `Ctrl+Shift+I` di Windows), lalu aktifkan mode perangkat dengan `Ctrl+Shift+M`. Alat ini meniru layar sesuai lebar yang kamu pilih — cobalah 375, 576, 768, 992, dan 1200 piksel, tepat di sekitar breakpoint Tokosaya — dan di bagian atas ruler muncul penanda garis buat setiap media query yang aktif, sehingga kamu bisa melihat batas gaya bergeser pas menyeret lebar. Mode *Responsive* memungkinkanmu menyeret lebar bebas buat mencari titik masalah (*layout trap*): titik lebar di mana elemen tumpang tindih atau teks terpotong.

DevTools juga punya panel khusus grid: pada tab *Elements*, pilih elemen wadah grid, lalu pada panel *Layout* aktifkan overlaynya; nomor garis grid akan tercetak di halaman, mirip kartu rancangan — membantu banget pas menelusuri kenapa sebuah kartu menolak menempati kolom yang diinginkan. Gunakan panel *Elements* juga buat melihat aturan mana yang sedang menang (ingat kembali kaskade dan specificity dari Bab 3). Tiga kebiasaan sederhana buat menutup bab ini: uji dengan **mengecil melewati** breakpoint (bukan setop di satu lebar), cek kemunculan pengguliran horizontal seluruh halaman, dan ingat bahwa emulasi nggak menggantikan uji sempurna pada perangkat sungguhan — sentuhan, kamera, dan kecepatan jaringan HP berbeda perilaku, dan pengujian menyeluruh kembali dibahas pada Bab 13 dan Bab 15.

## Konsep Penting

| Konsep | Inti | Contoh di Tokosaya |
|---|---|---|
| Grid container | Elemen dengan `display: grid` yang membagi ruang dua dimensi | `.dasbor` pada `admin.html` |
| Grid track | Jalur kolom/baris yang ukurannya didefinisikan template | `.stat-kartu` empat kartu |
| `fr` | Pecahan sisa ruang setelah ukuran tetap | kolom content `1fr` |
| `repeat()` | Penulis ringkas buat track berulang | `repeat(2, 1fr)` pada kartu |
| `gap` | Jarak antar track, tanpa trik margin | jarak 24 px antar kartu |
| `span` | Membentang n track mulai garis tertentu | kartu utama 2 kolom |
| `grid-template-areas` | Denah berbasis nama yang mudah digambar ulang | `header / nav / main` |
| Breakpoint | Lebar layar tempat gaya berubah; bukan daftar perangkat | 576/768/992/1200 |
| Mobile-first | Gaya dasar buat HP, naik dengan `min-width` | urutan query menaik |
| `clamp()` | Nilai bernafas dengan batas min–maks | judul dashboard 24–32 px |
| Gambar responsif | `width: 100%`, `height: auto`, `object-fit` | gambar produk katalog |
| Pengguliran tabel | Wadah `overflow-x: auto` buat tabel lebar di HP | tabel pesanan admin |

## Contoh Kode

Tiga contoh berikut adalah halaman latihan mandiri (folder `latihan-bab7/`) yang sengaja dibuat kecil dan mandiri biar fokus pada satu konsep per file. Setiap file CSS mendefinisikan token bawaan Tokosaya biar bisa berdiri sendiri.

```html
File: latihan-bab7/grid-dasar.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Latihan Grid Dasar</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/grid-dasar.css">
</head>
<body>
  <main class="latihan">
    <h1>Grid Dasar: tiga kolom, dua baris, satu kartu besar</h1>
    <div class="kotak-grid">
      <div class="kotak kotak-utama">A — membentang dua kolom</div>
      <div class="kotak">B</div>
      <div class="kotak">C</div>
      <div class="kotak">D</div>
      <div class="kotak">E</div>
      <div class="kotak">F</div>
    </div>
  </main>
</body>
</html>
```

Penjelasan: halaman ini cuma menyusun wadah `.kotak-grid` berisi enam kotak; kartu pertama membawa kelas tambahan `.kotak-utama` yang nantinya membentang dua kolom, sehingga sisa kotak mengalir otomatis menurut penempatan bawaan.

```css
File: latihan-bab7/css/grid-dasar.css
/* Token diambil dari design token Tokosaya (Bab 4) biar latihan mandiri */
:root {
  --clr-primary: #4F46E5;
  --clr-surface: #FFFFFF;
  --clr-border: #E2E8F0;
  --clr-dark: #1E293B;
  --font-body: 'Inter', sans-serif;
  --radius: 12px;
}

body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--clr-dark);
  background: #F8FAFC;
}

.kotak-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 120px);
  gap: 16px;
}

.kotak {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  padding: 16px;
  display: flex;
  align-items: center;
}

.kotak-utama {
  grid-column: 1 / span 2;
  background: var(--clr-primary);
  color: #FFFFFF;
}
```

Penjelasan: `.kotak-grid` mendeklarasikan grid tiga kolom serata yang dibagikan `1fr`, dua baris tinggi tetap 120 piksel, dengan `gap` 16 piksel sebagai jarak tunggal. `.kotak-utama` menempati mulai garis 1 membentang dua track — bentangan `span` yang dibahas pada 7.3. Kotak sisanya mengalir otomatis, membuktikan penempatan bawaan browser.

```html
File: latihan-bab7/kartu-responsif.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Latihan Galeri Responsif</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/kartu-responsif.css">
</head>
<body>
  <main class="latihan">
    <h1 class="galeri-judul">Galeri Produk</h1>
    <div class="galeri-grid">
      <article class="kartu">
        <h2>Keyboard Mekanis KX-210</h2>
        <p>Rp650.000</p>
      </article>
      <article class="kartu">
        <h2>Mouse Wireless MW-88</h2>
        <p>Rp185.000</p>
      </article>
      <article class="kartu">
        <h2>Headphone Studio HS-15</h2>
        <p>Rp425.000</p>
      </article>
      <article class="kartu">
        <h2>Webcam HD WC-720</h2>
        <p>Rp310.000</p>
      </article>
    </div>
  </main>
</body>
</html>
```

Penjelasan: empat kartu produk baku Tokosaya disusun tanpa kelas kolom di tiap kartu — **semua keputusan layout ada di CSS wadah**; inilah perbedaan mental grid: denah milik wadah, bukan milik item.

```css
File: latihan-bab7/css/kartu-responsif.css
/* Token diambil dari design token Tokosaya (Bab 4) */
:root {
  --clr-primary: #4F46E5;
  --clr-surface: #FFFFFF;
  --clr-border: #E2E8F0;
  --clr-dark: #1E293B;
  --clr-body: #334155;
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  --radius: 12px;
  --shadow-card: 0 8px 24px rgba(15, 23, 42, 0.08);
}

body {
  margin: 0;
  padding: 24px;
  font-family: var(--font-body);
  color: var(--clr-body);
  background: #F8FAFC;
}

.galeri-judul {
  font-family: var(--font-heading);
  color: var(--clr-dark);
  font-size: clamp(1.5rem, 1.1rem + 1.5vw, 2rem);
}

.galeri-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.kartu {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  padding: 24px;
}

.kartu h2 {
  font-family: var(--font-heading);
  color: var(--clr-dark);
  margin: 0 0 8px;
}

.kartu p {
  margin: 0;
  font-weight: 600;
  color: var(--clr-primary);
}
```

Penjelasan: wadah `.galeri-grid` memakai pola `auto-fit` + `minmax(220px, 1fr)`: di layar sempit kolomnya satu, di 560 piksel dua, dan makin melebar makin banyak kolom — perubahan jumlah kolom terjadi otomatis, bukan oleh media query. Judul memakai `clamp()` sehingga tumbuh terkendali antara 24 dan 32 piksel.

```html
File: latihan-bab7/pola-area.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Latihan Pola Area</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/pola-area.css">
</head>
<body>
  <div class="hlm">
    <header class="hlm-header">Header</header>
    <nav class="hlm-nav" aria-label="Navigasi latihan">
      <ul>
        <li><a href="#">Beranda</a></li>
        <li><a href="#">Katalog</a></li>
        <li><a href="#">Kontak</a></li>
      </ul>
    </nav>
    <main class="hlm-main">Konten utama</main>
    <footer class="hlm-footer">Footer</footer>
  </div>
</body>
</html>
```

Penjelasan: markup memuat empat area semantik tanpa kelas posisi apa pun — posisi semata-mata ditentukan oleh `grid-area` di CSS, sehingga pembacaan kembali kode jauh lebih mudah.

```css
File: latihan-bab7/css/pola-area.css
/* Token diambil dari design token Tokosaya (Bab 4) */
:root {
  --clr-border: #E2E8F0;
  --clr-dark: #1E293B;
  --font-body: 'Inter', sans-serif;
  --radius: 12px;
}

body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--clr-dark);
  background: #F8FAFC;
}

/* Mobile-first: tumpukan satu kolom */
.hlm {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "footer";
  gap: 16px;
}

.hlm-header { grid-area: header; }
.hlm-nav { grid-area: nav; }
.hlm-main { grid-area: main; }
.hlm-footer { grid-area: footer; }

.hlm-header, .hlm-nav, .hlm-main, .hlm-footer {
  background: #FFFFFF;
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  padding: 24px;
}

/* Breakpoint pertama: denah berubah jadi kolom samping */
@media (min-width: 768px) {
  .hlm {
    grid-template-columns: 240px 1fr;
    grid-template-areas:
      "header header"
      "nav main"
      "footer footer";
  }
}
```

Penjelasan: inilah pola denah yang akan kamu tulis pada Praktikum dalam ukuran penuh. Versi dasar menumpuk semua area; pada `min-width: 768px` denah digambar ulang — `header` membentang dua kolom (`"header header"`), `nav` menghuni kolom 240 piksel, `main` mengambil sisanya. Nilai penempatan tiap area nggak berubah; cuma denahnya yang berubah.

## Penjelasan Kode

**Contoh 1 (grid-dasar).** Tiga teknik bekerja bersama dalam file kecil ini. Pertama, `repeat(3, 1fr)` membagi lebar wadah ke tiga kolom identik — `fr` yang memastikan proporsional terhadap sisa ruang, bukan terhadap ukuran font maupun tetap tertentu. Kedua, `grid-template-rows: repeat(2, 120px)` memberi tinggi terukur biar latihan mudah diamati; pada proyek nyata, baris sering dibiarkan membesar sesuai konten (`grid-auto-rows` atau tinggi otomatis). Ketiga, `grid-column: 1 / span 2` memperlihatkan bentangan tanpa menghitung garis akhir. Alasan penggunaan `gap` daripada margin tetap sama kayak 7.2: jarak adalah wilayah kerangka, bukan tanggung jawab tiap item, sehingga nggak perlu koreksi `:first-child` atau `:last-child`.

**Contoh 2 (kartu-responsif).** Nilai teknis utama contoh ini adalah pergeseran cara berpikir: pada pola Flexbox Bab 6, `flex-wrap` dan proporsi item mengatur penumpukan; pada galeri grid, satu properti wadah — `repeat(auto-fit, minmax(220px, 1fr))` — memikirkan seluruh jumlah kolom. `auto-fit` artinya "taruh sebanyak mungkin kolom minimal 220 piksel, lalu kalau sisa ruang lebih besar, buang kolom kosong dan bagikan ruang sisa ke kartu yang ada". Pilih 220 piksel dengan nalar: 220 px cukup lebar buat nama produk dan harga Tokosaya tanpa membuat kartu sesak. `clamp()` pada judul menerapkan layout yang terkendali ganda: ukuran ikut naik seiring `vw`, namun tertahan di 32 piksel sehingga nggak memaksakan baris judul berlipat pada monitor besar.

**Contoh 3 (pola-area).** File ini adalah embrio dashboard. Kuncinya penggunaan `grid-template-areas` dua kali: versi mobile (denah tumpuk) dan versi 768 px (denah bercabang). Penamaan area — `header`, `nav`, `main`, `footer` — dipetakan ke elemen lewat `grid-area`, sehingga membaca CSS terasa kayak membaca denah kamar. Perhatikan pula bahwa versi tablet memindahkan `nav` ke kolom kiri **tanpa mengubah tag HTML**: inilah alasan pola ini jadi bawaan Praktikum. Satu pembatasan yang patut diingat: `grid-template-areas` cuma merancang denah persegi — bentuk tangga dan area berlekuk nggak bisa digambar dengan kata-kata, gunakan `grid-column`/`grid-row` buat kasus itu.

## Praktikum

### Tujuan Praktikum

Praktikum ini mengajakmu membangun **dashboard admin Tokosaya yang statis dan responsif** — lengkap dengan header, sidebar navigasi, empat kartu statistik, dan tabel pesanan terbaru — memakai CSS Grid sebagai kerangka dan media query *mobile-first* sebagai strategi. Praktikum juga membuat halaman `katalog.html` jadi responsif dengan mengganti layout kartu menjadi grid. Semua data adalah data contoh statis sesuai cakupan mata kuliah (tanpa JavaScript, tanpa server); dashboard ini membangun kemampuan S7.1 dan S7.2 yang diujikan pada UTS Bab 8.

### Kebutuhan

- VS Code dan Google Chrome (DevTools) sesuai pin teknologi buku.
- Folder proyek `tokosaya-css/` hasil Bab 1–6, minimal berisi `index.html`, `katalog.html`, `tentang.html`, `kontak.html`, dan `css/style.css` yang udah memuat *design token* Tokosaya (Bab 4), aturan `box-sizing` dan gambar dasar (Bab 5), serta gaya flexbox navigasi (Bab 6).
- Dua file baru: `admin.html` (di akar folder) dan `css/admin.css`.
- Data produk baku 8 item Tokosaya (Bab kontrak §5.2) buat memastikan isi tabel dan kartu konsisten dengan katalog.
- Opsional: ekstensi Live Server biar penyimpanan langsung memuat ulang halaman di browser.

### Persiapan

1. Cek apakah `css/style.css` kamu memuat blok `:root` dengan token Tokosaya (paling kurang `--clr-primary`, `--clr-surface`, `--clr-bg`, `--clr-border`, `--clr-dark`, `--clr-body`, `--font-heading`, `--font-body`, `--radius`, `--shadow-card`, `--space-unit`). Kalau belum lengkap, lengkapi menurut Bab 4 dulu, karena admin.css akan memanggil token itu.
2. Buat file baru `admin.html` dan `css/admin.css` di dalam `tokosaya-css/`.
3. Buka `katalog.html` dan pastikan daftar produkmu berada di dalam satu elemen wadah (misalnya `<section>` yang memuat kartu-kartu `produk-card` dari Bab 5–6); catat class wadahnya, karena nanti diberi kelas grid baru.
4. Sediakan daftar pesanan contoh (lima baris) dalam tabel — data lengkap udah ditulis pada blok Kode; kamu tinggal mengetik ulang.
5. Siapkan Chrome DevTools: tekan `F12`, aktifkan device toolbar (`Ctrl+Shift+M`) biar siap menguji pada langkah terakhir.

### Langkah Kerja

1. Tulis dulu kerangka `admin.html`: DOCTYPE, `html lang="id"`, meta charset, meta viewport (wajib, tanpa itu semua media query gagal), judul halaman, Google Fonts, serta dua `<link>` stylesheet: `css/style.css` lalu `css/admin.css`.
2. Susun struktur semantik: `<div class="dasbor">` sebagai wadah grid; di dalamnya `<header class="dasbor-header">` (brand, `h1` judul, keterangan data contoh), `<nav class="dasbor-nav">` dengan `<ul>` link panel (Dashboard sebagai link aktif dengan atribut `aria-current="page"`), `<main class="dasbor-main">` berisi seksi ringkasan (list empat kartu statistik) dan seksi pesanan (tabel dalam wadah `.tabel-scroll`), serta `<footer class="dasbor-footer">`.
3. Isi tabel pesanan contoh lima baris dengan produk baku Tokosaya (KX-210, BT-5, MW-88, MR-241, WC-720) lengkap dengan kolom nomor pesanan, pelanggan, produk, total, dan status.
4. Susun `css/admin.css` secara **mobile-first**: gaya dasar menumpuk area `header → nav → main → footer` satu kolom; kartu statistik satu kolom; navigasi berganti chip horizontal yang bisa menggulir.
5. Tambahkan media query bertahap: `576` (kartu dua kolom), `768` (sidebar vertikal kolom 220 px lewat penggambaran ulang `grid-template-areas`), `992` (sidebar 240 px, jarak meluas), `1200` (empat kartu sebaris, lebar konten maksimum 1200 px terpusat).
6. Atur tabelnya: bungkus `<table>` dengan `.tabel-scroll` beraliran `overflow-x: auto` dan beri tabel `min-width: 640px` biar di HP ia menggulir di dalam wadahnya, bukan melar seluruh halaman.
7. Buat katalog jadi responsif: buka `katalog.html`, beri kelas `katalog-grid` pada wadah daftar produk, lalu tambahkan blok CSS katalog (grid + media query + gambar responsif) pada **bagian akhir** `css/style.css`.
8. Lengkapi `admin.css` dengan aturan fokus `:focus-visible` buat link navigasi, kelas warna status pesanan (`status-lunas`, `status-diproses`, `status-dikirim`) berbasis token warna semantik.
9. Uji di DevTools device toolbar pada 375, 576, 768, 992, 1200 px: cek tumpukan, perpindahan sidebar, jumlah kolom kartu, dan pengguliran tabel; catat hasil buat bagian `Hasil yang Diharapkan`.

### Kode

```html
File: tokosaya-css/admin.html
<!DOCTYPE html>
<html lang="id">
<head>
  <!-- Proyek Bab 1-8: HTML/CSS murni, tanpa Bootstrap (lihat Bab 9) -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard Admin — Tokosaya</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/admin.css">
</head>
<body>
  <div class="dasbor">

    <header class="dasbor-header">
      <p class="dasbor-brand">Tokosaya</p>
      <h1 class="dasbor-judul">Dashboard Admin</h1>
      <p class="dasbor-waktu">Data contoh statis — pembaruan terakhir: Senin, 6 Oktober 2025, 09.10 WIB</p>
    </header>

    <nav class="dasbor-nav" aria-label="Navigasi panel admin">
      <ul>
        <li><a class="dasbor-tautan aktif" href="admin.html" aria-current="page">Dashboard</a></li>
        <li><a class="dasbor-tautan" href="katalog.html">Katalog</a></li>
        <li><a class="dasbor-tautan" href="admin.html">Pesanan</a></li>
        <li><a class="dasbor-tautan" href="tentang.html">Tentang</a></li>
        <li><a class="dasbor-tautan" href="kontak.html">Kontak</a></li>
      </ul>
    </nav>

    <main class="dasbor-main">

      <section class="ringkasan" aria-labelledby="judul-ringkasan">
        <h2 id="judul-ringkasan" class="judul-seksi">Ringkasan Hari Ini</h2>
        <ul class="stat-kartu">
          <li class="stat-kartu-item">
            <p class="stat-kartu-label">Penjualan Hari Ini</p>
            <p class="stat-kartu-nilai">Rp1.240.000</p>
            <p class="stat-kartu-keterangan">Data contoh statis dashboard</p>
          </li>
          <li class="stat-kartu-item">
            <p class="stat-kartu-label">Pesanan Baru</p>
            <p class="stat-kartu-nilai">27</p>
            <p class="stat-kartu-keterangan">Menunggu diproses</p>
          </li>
          <li class="stat-kartu-item">
            <p class="stat-kartu-label">Produk Aktif</p>
            <p class="stat-kartu-nilai">8</p>
            <p class="stat-kartu-keterangan">Katalog Tokosaya</p>
          </li>
          <li class="stat-kartu-item">
            <p class="stat-kartu-label">Status Stok</p>
            <p class="stat-kartu-nilai">2</p>
            <p class="stat-kartu-keterangan">Perlu perhatian (stok terbatas)</p>
          </li>
        </ul>
      </section>

      <section class="pesanan" aria-labelledby="judul-pesanan">
        <h2 id="judul-pesanan" class="judul-seksi">Pesanan Terbaru</h2>
        <div class="tabel-scroll">
          <table>
            <caption>Lima pesanan teratas (data contoh statis)</caption>
            <thead>
              <tr>
                <th scope="col">No. Pesanan</th>
                <th scope="col">Pelanggan</th>
                <th scope="col">Produk</th>
                <th scope="col">Total</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">TKS-2418</th>
                <td>Rina Pratiwi</td>
                <td>Keyboard Mekanis KX-210</td>
                <td>Rp650.000</td>
                <td><span class="status-lunas">Lunas</span></td>
              </tr>
              <tr>
                <th scope="row">TKS-2417</th>
                <td>Dimas Arjuna</td>
                <td>Speaker Bluetooth BT-5</td>
                <td>Rp285.000</td>
                <td><span class="status-diproses">Diproses</span></td>
              </tr>
              <tr>
                <th scope="row">TKS-2416</th>
                <td>Sari Wulandari</td>
                <td>Mouse Wireless MW-88 &times; 2</td>
                <td>Rp370.000</td>
                <td><span class="status-dikirim">Dikirim</span></td>
              </tr>
              <tr>
                <th scope="row">TKS-2415</th>
                <td>Budi Santoso</td>
                <td>Monitor IPS 24" MR-241</td>
                <td>Rp1.899.000</td>
                <td><span class="status-lunas">Lunas</span></td>
              </tr>
              <tr>
                <th scope="row">TKS-2414</th>
                <td>Ayu Lestari</td>
                <td>Webcam HD WC-720</td>
                <td>Rp310.000</td>
                <td><span class="status-diproses">Diproses</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </main>

    <footer class="dasbor-footer">
      <p>&copy; 2026 Tokosaya — Belanja Tepat, Kirim Cepat · Jl. Digital Raya No. 10, Jakarta · halo@tokosaya.id · (021) 555-0199</p>
    </footer>

  </div>
</body>
</html>
```

Penjelasan: struktur mengikuti pola `grid-template-areas`: wadah `.dasbor` menampung `header`, `nav`, `main`, `footer` sebagai empat area. Halaman cuma punya satu `h1` (judul dashboard), seksi ringkasan dan pesanan ber-`h2`, tabel lengkap dengan `caption`, `thead`/`tbody`, dan `th scope` biar terbaca oleh pembaca layar. Seluruh data adalah contoh statis; kartu "Produk Aktif = 8" sengaja dikoordinasikan dengan jumlah produk baku katalog.

```css
File: tokosaya-css/css/admin.css
/* ====== Admin Tokosaya — Bab 7 (mobile-first) ======
   Asumsi: css/style.css udah memuat token :root (Bab 4)
   dan reset dasar (Bab 3-5). File ini cuma aturan panel admin. */

/* Pengaman kecil biar panel tetap rapi walau style.css diubah */
html, body {
  margin: 0;
  padding: 0;
}

/* Mobile-first: seluruh area bertumpuk satu kolom */
.dasbor {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "footer";
  background: var(--clr-bg);
  color: var(--clr-body);
  font-family: var(--font-body);
}

/* --- Header --- */
.dasbor-header {
  grid-area: header;
  background: var(--clr-surface);
  border-bottom: 1px solid var(--clr-border);
  padding: calc(var(--space-unit) * 2) calc(var(--space-unit) * 3);
}

.dasbor-brand {
  margin: 0 0 calc(var(--space-unit));
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--clr-primary);
}

.dasbor-judul {
  margin: 0;
  font-family: var(--font-heading);
  color: var(--clr-dark);
  line-height: 1.2;
  font-size: clamp(1.5rem, 1.1rem + 1.8vw, 2.25rem);
}

.dasbor-waktu {
  margin: calc(var(--space-unit)) 0 0;
  font-size: 0.875rem;
}

/* --- Navigasi: chip horizontal di HP, kolom di tablet ke atas --- */
.dasbor-nav {
  grid-area: nav;
  background: var(--clr-surface);
  border-bottom: 1px solid var(--clr-border);
  padding: calc(var(--space-unit) * 2) calc(var(--space-unit) * 3);
}

.dasbor-nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: calc(var(--space-unit) * 2);
  overflow-x: auto;
}

.dasbor-tautan {
  display: block;
  padding: calc(var(--space-unit)) calc(var(--space-unit) * 2);
  border: 1px solid var(--clr-border);
  border-radius: 999px;
  color: var(--clr-body);
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap;
}

.dasbor-tautan:hover {
  border-color: var(--clr-primary);
  color: var(--clr-primary);
}

.dasbor-tautan:focus-visible {
  outline: 2px solid var(--clr-primary);
  outline-offset: 2px;
}

.dasbor-tautan.aktif {
  background: var(--clr-primary);
  border-color: var(--clr-primary);
  color: #FFFFFF;
}

/* --- Main --- */
.dasbor-main {
  grid-area: main;
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding: calc(var(--space-unit) * 3);
}

.ringkasan {
  margin-bottom: calc(var(--space-unit) * 4);
}

.judul-seksi {
  font-family: var(--font-heading);
  color: var(--clr-dark);
  font-size: 1.25rem;
  margin: 0 0 calc(var(--space-unit) * 2);
}

/* --- Kartu statistik (grid, dasar 1 kolom) --- */
.stat-kartu {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: calc(var(--space-unit) * 2);
}

.stat-kartu-item {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  padding: calc(var(--space-unit) * 3);
}

.stat-kartu-label {
  margin: 0 0 calc(var(--space-unit));
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.stat-kartu-nilai {
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 1.3rem + 2vw, 2.5rem);
  font-weight: 700;
  color: var(--clr-dark);
}

.stat-kartu-keterangan {
  margin: calc(var(--space-unit)) 0 0;
  font-size: 0.875rem;
}

/* --- Tabel pesanan dalam wadah penggulir --- */
.tabel-scroll {
  overflow-x: auto;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
}

.tabel-scroll table {
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
}

.tabel-scroll caption {
  caption-side: bottom;
  padding: calc(var(--space-unit) * 2);
  font-size: 0.85rem;
}

.tabel-scroll th,
.tabel-scroll td {
  padding: calc(var(--space-unit) * 2);
  text-align: left;
  border-bottom: 1px solid var(--clr-border);
  font-size: 0.9rem;
}

.tabel-scroll thead th {
  background: var(--clr-bg);
  font-family: var(--font-heading);
  color: var(--clr-dark);
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.tabel-scroll tbody tr:last-child th,
.tabel-scroll tbody tr:last-child td {
  border-bottom: none;
}

.status-lunas  { color: var(--clr-success); font-weight: 600; }
.status-diproses { color: var(--clr-accent); font-weight: 600; }
.status-dikirim { color: var(--clr-primary); font-weight: 600; }

/* --- Footer --- */
.dasbor-footer {
  grid-area: footer;
  background: var(--clr-surface);
  border-top: 1px solid var(--clr-border);
  text-align: center;
  padding: calc(var(--space-unit) * 3);
  font-size: 0.85rem;
}

/* ====== Breakpoint menaik (mobile-first) ====== */

/* sm: kartu dua kolom */
@media (min-width: 576px) {
  .stat-kartu { grid-template-columns: repeat(2, 1fr); }
}

/* md: sidebar bergeser ke kolom kiri (denah digambar ulang) */
@media (min-width: 768px) {
  .dasbor {
    grid-template-columns: 220px 1fr;
    grid-template-areas:
      "header header"
      "nav main"
      "footer footer";
  }

  .dasbor-nav {
    padding: calc(var(--space-unit) * 3) calc(var(--space-unit) * 2);
    border-bottom: none;
    border-right: 1px solid var(--clr-border);
  }

  .dasbor-nav ul {
    flex-direction: column;
    overflow-x: visible;
  }

  .dasbor-tautan {
    border: none;
    border-left: 4px solid transparent;
    border-radius: 0;
    padding: calc(var(--space-unit)) calc(var(--space-unit) * 2);
  }

  .dasbor-tautan.aktif {
    background: transparent;
    color: var(--clr-primary);
    border-left-color: var(--clr-primary);
  }
}

/* lg: sidebar lebih lega, jarak kartu meluas */
@media (min-width: 992px) {
  .dasbor { grid-template-columns: 240px 1fr; }
  .stat-kartu { gap: calc(var(--space-unit) * 3); }
  .dasbor-main { padding: calc(var(--space-unit) * 4); }
}

/* xl: empat kartu sebaris, konten terpusat maksimal 1200px */
@media (min-width: 1200px) {
  .stat-kartu { grid-template-columns: repeat(4, 1fr); }
  .dasbor { grid-template-columns: 260px 1fr; }
}
```

Penjelasan: file ini adalah demonstrasi lengkap strategi 7.4–7.6. Gaya dasar menggambar denah tumpuk; empat media query menaik cuma mengganti yang harus diubah — jumlah kolom kartu, lebar kolom navigasi, dan penggambaran ulang `grid-template-areas` pada 768 px. Perhatikan bahwa di tablet ke atas navigasi berubah bentuk (pembatas kiri, garis aktif), semua murni dengan CSS: **markup nggak tersentuh sejak langkah pertama**. Penggunaan token (`--clr-*`, `--space-unit`, `--radius`) menuntut `css/style.css` ikut ter-link sebelum `admin.css` — urutan ini memang ditulis pada `admin.html`.

```html
File: tokosaya-css/katalog.html
<!-- Potongan integrasi: ganti wadah daftar produkmu jadi
     struktur berikut (kelas produk-card, badge, dan harga tetap dari Bab 4-6). -->
<section class="katalog" aria-labelledby="judul-katalog">
  <h2 id="judul-katalog" class="katalog-judul">Katalog Produk</h2>
  <p class="katalog-intro">Perangkat kerja digital pilihan dengan harga jujur.</p>
  <div class="katalog-grid">
    <!-- Kartu pertama sebagai pola; ulangi pola ini buat tujuh produk baku lainnya:
         MW-88, HS-15, MR-241, FD-64, CP-30, BT-5, WC-720. -->
    <article class="produk-card">
      <img src="img/produk-keyboard-kx210.svg" alt="Keyboard mekanis KX-210 hitam dengan switch biru" width="640" height="360">
      <p class="badge-produk">Best Seller</p>
      <h3 class="produk-card-nama">Keyboard Mekanis KX-210</h3>
      <p class="produk-card-kategori">Aksesori Input</p>
      <p class="produk-card-harga">Rp650.000</p>
      <p class="produk-card-deskripsi">Keyboard mekanis 87 tombol dengan switch biru untuk kerja lama yang nyaman.</p>
    </article>
    <!-- ... tujuh kartu produk baku Tokosaya lainnya di sini ... -->
  </div>
</section>
```

Penjelasan: perubahan pada `katalog.html` sekecil mungkin: wadah daftar produk diberi kelas `katalog-grid`, dan isinya tetap kartu-kartu `produk-card` yang udah kamu bangun pada Bab 5–6. Dengan begitu, perubahan layout seluruhnya berada di CSS — prinsip *denah milik wadah* yang ditegaskan Contoh 2.

```css
File: tokosaya-css/css/style.css

/* ===== Bab 7 — tambahan: katalog responsif (letakkan di akhir style.css) ===== */
.katalog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: calc(var(--space-unit) * 3);
}

@media (min-width: 576px) {
  .katalog-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 992px) {
  .katalog-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1200px) {
  .katalog-grid { grid-template-columns: repeat(4, 1fr); }
}

.katalog-grid .produk-card img {
  width: 100%;
  height: auto;
  display: block;
}
```

Penjelasan: blok ini menaikkan jumlah kolom kartu produk menurut breakpoint yang sama dengan panel admin, sehingga kedua halaman berbicara bahasa "breakpoint" yang sama. Semua aturan ditulis pada bagian akhir file dan diberi komentar penanda — kaskade lama (Bab 3–6) tetap berlaku, aturan baru cuma menimpa jumlah kolom daftar produk. Karena `katalog.html` memuat delapan produk baku, di 1200 px grid jadi 4 kolom × 2 baris yang pas penuh; di 992 jadi 3 kolom dengan sisa dua kartu, dan di 576 jadi 2 kolom — wajar diadaptasi kalau desain kamu memilih pola `auto-fit` ala Contoh 2.

### Hasil yang Diharapkan

Teramati (di DevTools device toolbar, tanpa JavaScript):

- Pada **375 px**: area tersusun `header → nav (chip horizontal) → main → footer`; empat kartu statistik tumpuk satu kolom; tabel menggulir **di dalam** wadah `.tabel-scroll` (nggak ada pengguliran horizontal pada `<body>`); judul memakai ukuran minimum clamp (24 piksel).
- Pada **576 px**: kartu statistik jadi dua kolom; area lain tak berubah.
- Pada **768 px**: denah berubah — navigasi bergeser ke kolom kiri selebar 220 piksel (tanpa pembatas bawah, dengan garis aktif berwarna indigo); kartu tetap dua kolom.
- Pada **992 px**: kolom navigasi melebar ke 240 px, jarak antarkartu membesar, padding konten melebar.
- Pada **1200 px**: empat kartu statistik sebaris `repeat(4, 1fr)`, konten terpusat maksimal 1200 piksel; katalog tampil 4 kolom × 2 baris.
- Terukur: seluruh lima lebar uji memberi nol pengguliran horizontal di halaman; link navigasi memiliki area sentuh paling kurang 40 piksel; satu kartu nggak pernah berbeda tinggi lebih dari satu baris teks keterangan.

### Troubleshooting

**Masalah:** Kartu statistik tetap menumpuk vertikal walau jendela udah di atas 576 piksel.
**Penyebab:** Wadah `.stat-kartu` nggak dideklarasikan `display: grid` di gaya dasar, atau media query `min-width: 576px` salah ketik (misalnya `min-width: 576` tanpa `px`), sehingga aturan dua kolom nggak pernah berlaku.
**Solusi:** Inspeksi `.stat-kartu` di panel Elements → Computed: pastikan nilai `display: grid` ada; lalu lihat panel Styles, cari blok `@media` dan periksa sintaks kurung serta satuan `px` pada nilai query; perbaiki ketikan dan simpan kembali.
**Pencegahan:** Ikuti urutan menulis yang baku pada bab ini — gaya dasar dulu, media query menaik di bagian akhir file — dan uji setiap breakpoint langsung setelah menulisnya, bukan setelah semua selesai.

**Masalah:** Sidebar nggak pindah ke sisi kiri pada tablet (768 piksel ke atas); area tetap bertumpuk.
**Penyebab:** Denah `grid-template-areas` versi 768 px jumlah kolomnya nggak konsisten dengan versi dasar (misalnya baris `"nav main"` ditulis dengan jumlah kolom yang berbeda-beda), atau nama area pada `grid-area` nggak sama persis dengan nama denah, sehingga browser mengabaikan denah baru tersebut.
**Solusi:** Bandingkan dua blok `grid-template-areas` di admin.css: pastikan setiap baris kata berjumlah dua kolom (`"header header"`, `"nav main"`, `"footer footer"`), dan setiap elemen memakai `grid-area: header|nav|main|footer` dengan nama yang identik; perbaiki, simpan, muat ulang.
**Pencegahan:** Bangun kebiasaan menggambar denah di komentar dulu sebelum menulis string `grid-template-areas`, dan beri komentar penanda `/* denah versi mobile */` / `/* denah versi tablet */` biar dua denah mudah dibaca berdampingan.

**Masalah:** Halaman muncul pengguliran horizontal di HP; seluruh antarmuka tergeser.
**Penyebab:** Tabel nggak dibungkus wadah penggulir sehingga lebar `min-width: 640px` tabel melebihi viewport dan mendorong `body`, atau ada elemen selebar tetap melebihi viewport — misalnya gambar tanpa `width: 100%` atau panjang teks tanpa `overflow` yang aman.
**Solusi:** Buka DevTools device toolbar pada 375 px; gulirkan halaman buat mengenali elemen yang melebar; bungkus tabel dengan `<div class="tabel-scroll">` yang memuat `overflow-x: auto` dan pastikan `overflow-y: hidden` nggak ikut menyekat; buat gambar, pastikan aturan `width: 100%; height: auto` udah tertulis.
**Pencegahan:** Uji setiap halaman baru dengan menyeret device toolbar dari 320 px ke 1200 px sekali sekaligus; kalau ada pengguliran pada `<body>`, anggap itu cacat yang mesti dituntaskan sebelum lanjut.

**Masalah:** Semua token warna di admin.css terbaca `var() = kosong` (warna tak muncul, font nggak berlaku).
**Penyebab:** `css/style.css` nggak di-link pada admin.html, atau tertulis setelah admin.css sehingga `:root` token dideklarasikan setelah dipakai; token CSS nggak memeriksa urutan aturan di file yang berbeda, cuma urutan file yang di-link.
**Solusi:** Pastikan `<link rel="stylesheet" href="css/style.css">` tertulis sebelum `<link rel="stylesheet" href="css/admin.css">` di `<head>` admin.html, dan cek jalan file nggak salah folder (`css/`).
**Pencegahan:** Tetapkan kebiasaan template `<head>`: charset → viewport → judul → font → stylesheet utama → stylesheet modul; uji satu token (misalnya ubah `--clr-primary` sementara) buat memastikan kabelnya tersambung sebelum menulis gaya penuh.

**Masalah:** Media query dianggap nggak bekerja sama sekali di HP/emulasi, semua tampil kayak gaya dasar.
**Penyebab:** Tag `<meta name="viewport" ...>` hilang dari `admin.html`; tanpa itu browser emulasi memperlakukan halaman sebagai halaman desktop melebar dan melebih-lebih skala, sehingga semua pemicu `min-width` seolah nggak tercapai.
**Solusi:** Tambahkan `<meta name="viewport" content="width=device-width, initial-scale=1.0">` di `<head>` dan muat ulang; pastikan juga nggak ada salah tulis kayak `min-width:576px;` di luar kurung `@media`.
**Pencegahan:** Jadikan meta viewport bagian checklist template setiap halaman baru (ia juga jadi prasyarat UTS); tulis koma dan satuan query lengkap sejak mengetik pertama.

## Studi Kasus

**Konteks:** Rumah sakit umum daerah "RS Sumber Sehat" ingin menata *informasi dashboard* di tiga titik: meja pendaftaran (desktop di konter), kunjungan visum di sekitar ruang rawat (tablet dibawa dokter dan perawat dalam pemeriksaan harian), dan petugas on-call yang memeriksa status kamar dari HP pas berjaga di malam. Tim sistem informasi diminta menentukan breakpoint — soal yang persis memakai materi 7.4–7.6.

Langkah pertama tim adalah **mencatat konteks penggunaan**, bukan daftar model gadget: siapa memakai apa, di mana, dalam postur apa, buat tugas apa. Dari situ terlihat tiga tugas utama: (1) meja pendaftaran beroperasi dengan tabel antrean lebar — membutuhkan tabulasi penuh, jadi wadah tabel dengan pengguliran dalam justru *nggak* disukai di desktop; (2) kunjungan perawat membaca status kamar sambil bergerak — kartu besar, angka sedikit, target sentuh besar; (3) petugas malam mengecek antrean ICU — satu angka besar di HP lebih bernilai daripada grafik lengkap.

Dari analisis itu, tim memilih dua breakpoint: **768 px** — tablet, pas denah dua kolom aktif (kartu kamar di kiri, ringkasan di kanan), dan **992 px** — desktop, pas kolom tabel meluas penuh dan denah area menetap. 576 px sengaja dilewati karena jenis data dashboard (angka ringkasan) nggak menuntut layout tambahan di kisaran itu; dengan `clamp()` buat angka kamar dan antrean, font udah menyediakan penyesuaian yang halus. Keputusan ini mirip dengan Tokosaya (breakpoint sama, urutan denah sama), tetapi isinya berbeda: di klinik, *prioritas informasi kritis* menentukan area mana yang membentang (`grid-area` dua kolom untuk status kamar ICU), bukan estetika kartu. Pelajaran buat konteks SI: **breakpoint adalah keputusan rancangan informasi, bukan keputusan teknis semata** — mulailah dari tugas pengguna, tulis denah gridnya, baru pilih `min-width` terkecil yang membuat tugas itu tetap bisa dikerjakan sempurna.

## Latihan Mandiri

1. Jelaskan perbedaan layout satu dimensi (Flexbox) dan dua dimensi (CSS Grid) dengan satu contoh halaman sistem informasi masing-masing (misalnya navigasi dan jadwal perkuliahan). Tuliskan dalam satu paragraf per teknologi.
2. Tulis satu baris `grid-template-columns` buat halaman yang memuat kolom navigasi tetap 220 piksel dan area konten yang terbagi tiga kolom sama lebar. Jelaskan kenapa memakai satuan `fr` pada bagian konten.
3. Buat wadah `.kotak-grafik` yang berisi tiga kartu; kartu pertama harus membentang dua kolom dan dua baris. Tulis CSS lengkapnya di `latihan-bab7/latihan-1.css` dan jelaskan urutan garis kolom yang menyebutkan (tuliskan nilai `grid-column` dan `grid-row` yang dipakai).
4. Rancang grid jadwal perkuliahan 4 kolom × 3 baris dengan jarak 16 piksel dan judul kolom berwarna latar `--clr-primary`. Tulis `grid-template-columns`, `grid-template-rows`, dan pola `repeat()` yang dipakai, lalu tuliskan juga HTML semantik minimal tabel atau list yang menyusunnya.
5. Konversi pola berikut yang ditulis desktop-first menjadi mobile-first dengan `min-width`, lalu jelaskan dalam dua kalimat kenapa versi baru lebih mudah dirawat: `@media (max-width: 991px) { .kartu-grid { grid-template-columns: repeat(2, 1fr); } }` dengan gaya dasar `repeat(4, 1fr)` buat desktop.
6. Hitung manual: buat `font-size: clamp(1.5rem, 1rem + 2vw, 2.5rem)`, berapa nilai terpakai pada lebar viewport 375 px dan 1440 px? Tuliskan langkah hitungnya (anggap 1rem = 16 px) dan simpulkan kapan argumen minimum atau maksimum yang menang.

## Tugas

1. **Tugas 1 (individu) — Kartu Agenda Gudang.** Tambahkan seksi "Agenda Gudang" pada `admin.html`: daftar tiga kartu (misalnya “Audit stok BT-5”, “Restok CP-30”, “Foto produk WC-720”) yang di atas 768 px menjadikan kartu pertama membentang dua kolom (`grid-column: 1 / span 2`). Kumpulkan: `admin.html`, `css/admin.css` terbaru, laporan singkat (maks. 200 kata) berisi tiga tangkapan layar (375, 768, 1200 px) beserta satu kalimat keterangan per ukuran, dan checklist: (a) media query ternotasi `min-width`, (b) nggak ada pengguliran horizontal halaman, (c) komentar CSS berbahasa Indonesia, (d) token Tokosaya dipakai tanpa nilai warna yang diketik manual.
2. **Tugas 2 (kelompok 2–3 orang) — Bedah Breakpoint Website Publik.** Pilih tiga website layanan publik atau perpustakaan/kampus, inspeksi masing-masing dengan device toolbar (375/576/768/992/1200 px), dan catat: pada lebar berapa layout berubah (perkirakan lebar dengan menyeret lebar hingga tampilan berubah, bukan membaca kodennya), pola apa yang dipakai (sidebar geser, denah area, kartu auto-fit), serta satu hal yang patut diimiti Tokosaya. Kumpulkan tabel perbandingan dan rekomendasi 150 kata. Pakai cuma pengamatan tampilan — nggak boleh membuka file sumber website.

## Refleksi

1. Sebelum bab ini, bagian mana dari proyek Tokosaya kamu yang mengandalkan Flexbox padahal sebenarnya persoalan dua dimensi? Apa tanda-tandanya di layar?
2. Gimana kesanmu soal mobile-first pas baru pertama menulis gaya dasar tanpa media query — terasa membatasi atau justru menyederhanakan keputusanmu?
3. Pas memilih empat kartu statistik dua kolom di 576 px dan empat kolom di 1200 px, apa yang kamu pertimbangkan dari sisi pembaca angka di layar sesungguhnya?
4. Dashboard Tokosaya seluruhnya statis. Menurutmu, bagian mana dari tulisan CSS ini yang tetap berguna begitu sistem informasi nyata menambah data dinamis dari server di masa depan?

## Rangkuman

- CSS Grid menata **dua dimensi** sekaligus; Flexbox tetap andal buat aliran satu arah, dan keduanya bekerja bersama (Grid kerangka, Flex isi komponen).
- `grid-template-columns`/`rows` menentukan track; `fr` membagi sisa ruang; `repeat()` merapikan penulisan; `gap` menempatkan jarak di dalam kerangka.
- `span` dan `grid-template-areas` memberi wewenang menempatkan dan membentangkan butir, yang berguna banget buat menonjolkan informasi prioritas.
- *Mobile-first* menulis gaya dasar HP lebih dahulu, lalu menaikkan dengan media query `min-width` yang urutannya menaik.
- *Breakpoint* dipilih dari kebutuhan konten dan tugas pengguna; konvensi 576/768/992/1200 dipakai di buku ini biar serasi dengan Bab 9.
- `clamp()` mengendalikan tipografi responsif dalam satu baris; gambar responsif berbasis `width: 100%`, `height: auto`, dan `object-fit` mencegah gambar melar halaman.
- Pola dashboard admin (header + sidebar + kartu + tabel) dan pola galeri produk adalah dua pola yang terbukti langsung dipakai pada proyek; pengujian lewat device toolbar DevTools menutup alur kerja.
- Dashboard admin Tokosaya yang kamu bangun tetap statis dan sepenuhnya tanpa JavaScript, sesuai cakupan mata kuliah.

**Jembatan ke Bab 8.** Kamu kini punya seluruh senjata UTS: HTML semantik (Bab 2), CSS rapi (Bab 3), tipografi dan token (Bab 4), kartu dan box model (Bab 5), navigasi flexbox (Bab 6), serta grid dan responsivitas (bab ini). Bab 8 adalah **Ujian Tengah Semester** berupa mini website Tokosaya tiga halaman (`index.html`, `katalog.html`, `produk.html`) yang harus responsif pada tiga breakpoint — persis kemampuan yang baru saja kamu praktikkan. Mulai dari sini: rapikan `katalog.html` versi grid ini, pastikan delapan produk baku tampil tuntas, dan kenali checklist UTS pada bab berikutnya dengan tenang — kamu sudah melangkah di jalur yang tepat.

## Evaluasi

### Pilihan Ganda

1. Ciri utama CSS Grid yang membedakannya dari Flexbox adalah ....
   A. hanya menata item pada satu arah sepanjang *main axis*
   B. menata item pada baris dan kolom sekaligus (dua dimensi)
   C. mengatur posisi elemen dengan properti `float`
   D. hanya dapat dipakai di dalam tabel HTML
2. Satuan `1fr` pada `grid-template-columns` berarti ....
   A. satu piksel per baris
   B. satu porsi dari ruang sisa yang dibagi proporsional
   C. satu persen dari lebar perangkat
   D. satu kali ukuran font dasar
3. Penulisan `grid-template-columns: repeat(3, 1fr);` menghasilkan ....
   A. tiga kolom sama lebar
   B. tiga baris sama tinggi
   C. tiga kata pada satu baris
   D. media query tiga titik
4. Properti yang mengatur jarak antar baris sekaligus antar kolom grid adalah ....
   A. `margin`
   B. `gap`
   C. `padding-row`
   D. `border-space`
5. Aturan `grid-column: 2 / span 2` berarti kartu ....
   A. menempati kolom kedua dengan lebar dua piksel
   B. mulai dari garis kolom 2 dan membentang dua track
   C. menyisipkan dua kartu baru
   D. menduplikasi isi dua kolom
6. Penulisan media query yang sesuai strategi *mobile-first* pada proyek bab ini adalah ....
   A. `@media (max-width: 768px) { ... }`
   B. `@media (min-width: 768px) { ... }`
   C. `@media device-tablet { ... }`
   D. `@media screen.tablet { ... }`
7. Fungsi `clamp(1.5rem, 2vw, 3rem)` pada `font-size` berarti ukuran huruf ....
   A. selalu 2vw tanpa batas
   B. dibekukan di 3rem pada semua layar
   C. mengikuti 2vw namun tertahan di antara 1.5rem dan 3rem
   D. berukuran tetap 1.5rem karena nilai pertama utama
8. *(analisis, sulit ringan)* Breakpoint proyek ditulis secara mobile-first: gaya dasar, lalu `min-width: 576px`, `min-width: 768px`, dan `min-width: 992px`. Pada lebar viewport 820 px, aturan yang sedang berlaku adalah ....
   A. hanya gaya dasar
   B. gaya dasar + 576 + 768 + 992
   C. gaya dasar + 576 + 768
   D. hanya 992

### Benar atau Salah

1. CSS Grid hanya memungkinkan penataan baris; penataan kolom harus memakai Flexbox.
2. Dalam pendekatan mobile-first, gaya dasar ditulis untuk layar kecil, lalu media query `min-width` menambah gaya untuk layar lebih besar.
3. Properti `gap` pada grid hanya berlaku antar kolom, tidak antar baris.
4. `grid-template-areas` membuat perubahan posisi area (header, sidebar, main) antar breakpoint cukup dilakukan dengan menggambar ulang denah kata.
5. Media query menggantikan kebutuhan markup HTML yang semantik.

### Analisis Kode

1. Perhatikan file berikut dari galeri latihan:

```css
File: latihan-analisis/analisis-1.css
.galeri {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

Jawablah: (a) berapa jumlah kolom yang akan terbentuk kira-kira pada viewport 360 px, 760 px, dan 1260 px? (b) apa yang terjadi jika nilai `minmax` diganti menjadi `minmax(500px, 1fr)` pada layar HP — dan mengapa pola itu tidak cocok untuk kartu produk? (c) sebutkan satu kelebihan pola ini dibandingkan media query eksplisit dan satu kelemahannya bila jumlah kartu sangat sedikit.

2. Rekan satu kelompok menulis kode dashboard berikut dan mengeluh: "di HP, denah dua kolom tetap aktif dan sidebar sempit sekali". Temukan cacatnya dan tuliskan versi perbaikan.

```css
File: latihan-analisis/analisis-2.css
/* kode milik mahasiswa */
.dasbor {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-areas:
    "nav main";
}

@media (max-width: 767px) {
  .dasbor {
    grid-template-columns: 1fr;
    grid-template-areas:
      "nav"
      "main";
  }
}
```

### Soal Praktik

1. Bangun halaman `katalog-grid.html` (folder `latihan-bab7/`) berisi grid delapan produk baku Tokosaya dengan ketentuan: satu kolom di bawah 576 px, dua kolom di 576–991 px, tiga kolom di 992–1199 px, dan empat kolom mulai 1200 px; seluruh gaya ditulis mobile-first dengan media query `min-width`, memakai token Tokosaya, dan gambar memakai aturan responsif bab ini. Cantumkan tabel "kartu yang saya tata" berisi nama kelas wadah dan kelas kartu Anda.
2. Perbaiki halaman `admin.html` milik Anda: tambahkan kartu statistik kelima berjudul "Pesanan Diproses" dengan nilai contoh `5`, lalu pastikan pada 1200 px ke atas seluruh kartu tetap seata dan sejajar; pada 576–1199 px kartu berdiri dua kolom; di bawah 576 px bertumpuk satu kolom. Tuliskan perubahan CSS yang Anda lakukan dan satu paragraf hasil pengamatan pada ketiga ukuran layar.

### Kunci Jawaban

<details>
  <summary>Kunci Jawaban — klik untuk membuka</summary>

**Pilihan Ganda**

1. **B** — Grid membagi wadah menjadi baris dan kolom serentak (dua dimensi); Flexbox menata satu arah.
2. **B** — `fr` membagi ruang sisa setelah ukuran tetap dan gap dikurangi; proporsinya mengikuti jumlah porsi.
3. **A** — `repeat(3, 1fr)` setara `1fr 1fr 1fr`, tiga kolom identik.
4. **B** — `gap` (atau `row-gap`/`column-gap`) adalah jarak wadah grid; margin ialah milik item dan menimbulkan jarak tak seragam.
5. **B** — angka pertama menunjuk garis start, `span 2` membentang dua track mulai garis itu.
6. **B** — strategi mobile-first menaikkan gaya lewat `min-width`; `max-width` adalah gaya desktop-first yang melanggar pola bab.
7. **C** — `clamp(min, dipilih, maks)`: nilai tengah 2vw bergerak mengikuti viewport namun tertahan dua batas.
8. **C** — syarat 992 masih belum terpenuhi (992 > 820), sehingga yang berlaku gaya dasar, 576, dan 768; inilah yang menegaskan pentingnya urutan query menaik.

**Benar atau Salah**

1. **Salah** — Grid justru menata baris dan kolom sekaligus; Flexbox yang satu arah.
2. **Benar** — gaya dasar HP tetap berlaku; query menaik menumpuk penyesuaian tanpa membatalkan banyak gaya.
3. **Salah** — `gap` berlaku dua arah; ada pula `row-gap` dan `column-gap` bila ingin beda.
4. **Benar** — denah berbasis kata membuat perubahan posisi area menjadi pengeditan string saja.
5. **Salah** — media query menyusun layout; semantik tetap menentukan makna, aksesibilitas, dan keterbacaan kode.

**Analisis Kode**

1. (a) 360 px → 1 kolom (200 tidak muat × 2 dengan gap), 760 px → 3 kolom, 1260 px → 5–6 kolom bergantung penghitungan track; (b) dengan `minmax(500px, 1fr)` HP selalu 1 kolom dan desktop terlalu lebar per kartu — nilai minimum terlalu besar untuk kartu produk; (c) kelebihan: jumlah kolom menyesuaikan ruang tanpa media query; kelemahan: tidak bisa dijadwalkan persis bersama desainer, dan bila kartu sangat sedikit, `auto-fit` membuat kartu melebar penuh sehingga keterbacaan baris teks panjang menurun.
2. Cacat: penulisan desktop-first — gaya dasar memuat denah dua kolom lalu media query `max-width` mencabutnya di layar kecil; pola ini memaksa browser membatalkan gaya dan rawan berbenturan urutan file. Perbaikan: gaya dasar satu kolom, lalu `@media (min-width: 768px)` menggambar denah `"nav main"` dengan `grid-template-columns: 240px 1fr` — bertumbuh, bukan membongkar.

**Soal Praktik**

1. Rujukan pola: `.katalog-grid` dengan `grid-template-columns: 1fr` (dasar), `repeat(2, 1fr)` di 576, `repeat(3, 1fr)` di 992, `repeat(4, 1fr)` di 1200; wajib `gap`, token warna, dan aturan gambar `width: 100%; height: auto`. Nilai kunci penilaian: urutan query menaik, tidak ada `max-width`, dan semua ukuran memakai token.
2. Kartu kelima cukup ditambahkan sebagai item baru pada `ul.stat-kartu`; media query yang ada menjangkau lima kartu secara otomatis — pada 1200 px lima kartu di empat kolom menyebabkan kartu kelima turun; jelas barisnya rapi karena setiap kartu menempati satu sel. Jawaban dinilai dari kejujuran pengamatan: tuliskan apa yang Anda lihat per lebar (2 kolom lalu 4 kolom + 1 kartu di baris kedua), atau ubah ke `repeat(5, 1fr)` bila ingin satu baris penuh — keduanya benar bila disertai alasan.

</details>

## Referensi

1. MDN Web Docs. (2025). *Grid layout — CSS: Cascading Style Sheets*. Diakses 6 Januari 2026, dari https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
2. MDN Web Docs. (2025). *Using media queries*. Diakses 6 Januari 2026, dari https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
3. Google. (2025). *Learn responsive design* (web.dev). Diakses 6 Januari 2026, dari https://web.dev/learn/design
4. Marcotte, E. (2011). *Responsive Web Design*. New York: A Book Apart.
5. Wroblewski, L. (2012). *Mobile First*. New York: A Book Apart.