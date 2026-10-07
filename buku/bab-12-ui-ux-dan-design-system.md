# BAB 12 — Web UI/UX dan Design System

## Deskripsi Singkat

Bab ini menjembatani kemampuan teknis Bootstrap kamu (Bab 9–11) dengan cara berpikir seorang desainer antarmuka: kenapa satu halaman terasa rapi dan layak dipercaya, sementara halaman lain terasa berantakan padahal isinya sama. Kamu akan mempelajari prinsip dasar UI/UX, empat alat visual utama (whitespace, alignment, contrast, repetition), lalu menyusunnya jadi *design system* mini yang terdokumentasi dalam satu halaman `styleguide.html` Tokosaya. Bab 13 nanti mengaudit halaman yang udah kamu bangun dari sisi responsif dan aksesibilitas.

## Tujuan Pembelajaran

Setelah mempelajari bab ini, Anda diharapkan mampu:

1. Menjelaskan prinsip dasar UI (hierarki, konsistensi, usability, affordance) dan dua hukum gestalt (proximity, similarity) beserta alasannya.
2. Mengidentifikasi penggunaan whitespace, alignment, contrast, dan repetition pada contoh halaman web baik maupun buruk.
3. Mendefinisikan design system beserta manfaatnya bagi tim pengembangan sistem informasi.
4. Merancang sistem warna, tipografi, dan jarak sebagai design token semantik yang konsisten.
5. Mengimplementasikan halaman `styleguide.html` statis Tokosaya menggunakan Bootstrap 5.3.3 yang menampilkan seluruh token dan komponen inti.
6. Mengevaluasi perbedaan antarmuka buruk dan baik menggunakan matriks varian komponen sebagai alat perbandingan objektif.

## Capaian Pembelajaran

Bab ini menunjang **CPMK 7**: menerapkan prinsip dasar UI/UX dan menyusun mini design system. Sub-capaian yang diukur pada bab ini:

- Menguraikan prinsip UI dan hukum gestalt dari sudut pandang pengalaman pengguna layanan sistem informasi.
- Merancang design token semantik (warna, tipografi, jarak) yang menjadi satu sumber kebenaran visual proyek.
- Membangun dan mendokumentasikan `styleguide.html` sebagai wajah design system Tokosaya yang dapat dibagikan ke seluruh anggota tim.
- Menganalisis cacat desain pada antarmuka nyata dan mengusulkan perbaikan melalui empat alat visual utama.

## Kata Kunci

*design system* (kumpulan token, komponen, dan aturan visual yang jadi satu sumber kebenaran suatu tim), *design token* (variabel bernama buat nilai visual kayak warna dan jarak), *usability* (kemudahan penggunaan antarmuka), *affordance* (isyarat visual bahwa elemen bisa berinteraksi), *whitespace* (ruang kosong yang sengaja disediakan buat penataan), *contrast* (perbedaan mencolok antar elemen), *styleguide* (halaman dokumentasi visual token dan komponen), *variant* (wujud lain dari komponen, misalnya ukuran atau status), *hukum gestalt* (prinsip persepsi tentang kedekatan dan kemiripan)

## Apersepsi

Pada Desember 2025, tokoh fiktif kita—Rara, pemimpin proyek web Tokosaya—menghadapi masalah yang sering muncul di banyak tim sistem informasi: proyek tumbuh lebih cepat daripada aturan mainnya. Sejak 2019 Tokosaya dibangun oleh dua orang; sampul, katalog, dan kontak dikerjakan oleh tangan yang sama, jadi tampilannya otomatis seragam. Pas kamu mulai membangun ulang Tokosaya dengan Bootstrap pada Bab 9, timnya juga masih kecil dan konsistensinya masih terjaga.

Masalah mulai muncul pas halaman baru dibuka buat pihak lain. Rara merekrut dua desainer lepas buat membuat halaman promo dan satu penulis konten buat halaman informasi pengiriman. Dalam dua minggu, tampilan Tokosaya mulai pecah: tombol indigo berubah jadi tiga warna berbeda, lengkung sudut tombol berubah dari 12 piksel menjadi 4 piksel di satu halaman dan 20 piksel di halaman lain, dan jarak antarkartu katalog yang tadinya seragam kini berbeda-beda di tiap baris. Pengguna pun ikut bingung; seorang pembeli sampai mengirim pesan, "Apakah tombol berwarna jingga itu tombol resmi? Saya takut salah klik pada website palsu."

Masalah Rara sebenarnya bukan soal kemampuan—semua orang bisa menata tampilan—melainkan soal nggak adanya kesepakatan tertulis. Pas keputusan visual cuma ada di kepala orang, setiap anggota baru akan menafsirkan ulang, dan tiap tafsir baru makan waktu sekaligus mengikis kepercayaan. Pertanyaan pemantik bab ini adalah: **gimana cara membuat "aturan main visual" yang tertulis, bisa dibuka semua orang, dan membuat setiap halaman baru langsung lahir dengan tampilan yang seragam?** Jawabannya bertahap: mulai dari prinsip UI yang benar (kenapa satu desain terasa baik), lalu *design system* (kumpulan aturan dan token), dan akhirnya halaman *styleguide* (dokumentasi visualnya). Di bab ini, kamu akan membangun ketiganya di atas fondasi token Tokosaya yang udah dikenal sejak Bab 4.

## Materi Pembelajaran

### 12.1 Prinsip Dasar UI: Hierarki, Konsistensi, Usability, dan Affordance

Antarmuka pengguna, atau *user interface* (UI), adalah seluruh wajah visual yang dilihat dan disentuh pengguna: layout, warna, huruf, tombol, sampai ikon kecil di bilah navigasi. Sementara itu, pengalaman pengguna, atau *user experience* (UX), cakupannya lebih luas: seluruh rasa dan hasil yang dialami pengguna dari awal membuka halaman sampai selesai berbelanja. Hubungan keduanya mirip restoran dan makanannya: UI adalah suasana ruangan, menu, dan desain piring; UX adalah keseluruhan pengalaman makan, termasuk kecepatan pelayanan dan rasa lega setelah kenyang. Prinsip dasar UI/UX pada subbab ini membantumu merancang keduanya sekaligus. Dalam konteks sistem informasi, keduanya menentukan apakah portal akademik, sistem rekam medis, atau toko daring benar-benar dipakai orang—bukan sekadar selesai dibangun.

Prinsip pertama adalah **hierarki visual** (*visual hierarchy*): menata informasi menurut tingkat pentingnya, dari yang paling menonjol sampai yang pelengkap. Alasannya sederhana: pengguna nggak membaca halaman kata demi kata, melainkan memindai layar dalam hitungan detik lalu memutuskan ke mana perhatian mereka bergerak. Hierarki yang jelas mengarahkan pemindaian itu, kayak papan pengumuman kampus yang judulnya dicetak besar dan tebal, lalu rincian tanggalnya diletakkan lebih kecil di bawah. Mirip juga dengan surat resmi: kop besar di atas, isi paragraf di tengah, tanda tangan di bawah—pembaca tahu urutan membacanya tanpa perlu diarahkan.

Ilustrasi berikut membandingkan sisi hero halaman utama Tokosaya yang hierarkinya kacau dengan yang tertata. Perhatikan gimana versi buruk menarik mata ke arah yang keliru:

```text
Ilustrasi: hierarki visual sisi hero Tokosaya

TANPA HIERARKI (buruk):
+--------------------------------------------------------------+
| BELANJA TEPAT KIRIM CEPAT      LIHAT KATALOG klik promo      |
| Peralatan kerja digital... keyboard mouse monitor semua        |
| [tombol kecil]  Rp diskon  keranjang  kontak  tentang          |
+--------------------------------------------------------------+
   Semua teks berukuran sama, semua warna sama,
   mata tidak tahu tumpuan awal.

DENGAN HIERARKI (baik):
+--------------------------------------------------------------+
|   Peralatan Kerja Digital untuk Semua        -> H1, Poppins   |
|   Keyboard, mouse, hingga monitor...         -> subjudul kecil |
|   [ Lihat Katalog ]                          -> tombol indigo |
+--------------------------------------------------------------+
   Satu tumpuan besar, penjelas di bawah, aksi paling mudah dicari.
```

Pada versi yang baik, urutan mata bergerak dari judul besar, ke subjudul yang merangkum isi, lalu ke tombol utama; itulah alur pikir yang kita harapkan. Hierarki biasanya dibangun oleh beberapa "pegas" sekaligus—ukuran (judul lebih besar), ketebalan (judul lebih tebal), warna (tombol lebih kontras), posisi (ada di atas), dan jarak (judul dekat dengan subjudulnya). Satu pegas saja biasanya nggak cukup; semuanya akan kita uraikan satu per satu pada subbab 12.2.

Prinsip kedua adalah **konsistensi** (*consistency*): elemen yang mirip harus tampil dan bekerja dengan cara yang mirip di seluruh halaman. Tombol utama selalu berwarna indigo `--clr-primary`, kartu produk selalu berlengkung 12 piksel, dan link aktif di navigasi selalu ditebalkan. Alasannya ada dua: dari sisi desain, konsistensi membentuk pola sehingga pengguna cukup belajar sekali lalu bisa mengulanginya; dari sisi kepercayaan, perilaku yang seragam memberi kesan bahwa organisasinya rapi. Bayangkan dua fakultas dalam satu kampus menamai menu akademik secara berbeda — "SIA" di satu sisi dan "Portal Mahasiswa" di sisi lain; mahasiswa baru akan mudah tersesat padahal sistemnya sama. Kekacauan label dan wujud kayak gitu biasanya muncul bukan karena pengguna kurang cekatan, melainkan karena nggak ada aturan baku.

Prinsip ketiga adalah **usability**: sejauh mana antarmuka membantu pengguna mencapai tujuan mereka dengan efektif, efisien, dan memuaskan. Cara paling praktis buat memeriksanya bisa dimulai dari pertanyaan Steve Krug: apakah pengguna harus berpikir keras cuma buat memahami tombol ini? Kalau iya, berarti labelnya belum cukup baik. "Klik di sini" memaksa pengguna mencari konteks di sekitarnya, sedangkan "Lihat Katalog" langsung menyampaikan tujuan. Dalam proyek sistem informasi, masalah usability biasanya bukan ada di halaman utama yang sederhana, melainkan di halaman penting yang rumit—formulir pendaftaran wisuda, antrean rawat jalan, atau keranjang checkout—pas pengguna sedang tertekan dan salah klik terasa mahal.

Prinsip keempat masih dekat dengan tiga prinsip sebelumnya: **affordance**, istilah dari Don Norman buat menyebut isyarat visual bahwa sebuah objek menyediakan cara interaksi tertentu. Tombol gerbang memberi kesan buat ditekan; gagang pintu memberi kesan buat ditarik atau diputar; di web, tombol dengan latar warna dan lengkungan terlihat bisa ditekan, sedangkan teks biru `--clr-primary` terlihat bisa disentuh sebagai link. Antarmuka yang buruk melanggar affordance pas sesuatu yang seharusnya tombol justru tampil sebagai teks putih polos tanpa batas atau lengkungan—pengguna jadi ragu buat mengklik, dan keraguan itu bisa memperlebar rasa nggak percaya pada layanan publik.

Dua hukum ringkas dari aliran *gestalt* melengkapi empat prinsip di atas. **Hukum kedekatan** (*proximity*) menyatakan bahwa elemen yang berdekatan akan dipersepsi sebagai satu kelompok; **hukum kemiripan** (*similarity*) menyatakan bahwa elemen yang wajahnya mirip akan dipersepsi sebagai satu rumpun. Bayangkan penumpang bus yang duduk dempet terlihat kayak satu rombongan, atau seragam sekolah yang langsung menandai satu angkatan. Di web, kedekatan membuat label form dan kolomnya terasa satu pasangan, sedangkan kemiripan membuat semua badge status "Tersedia" terasa satu keluarga. Perhatikan ilustrasi berikut:

```text
Ilustrasi: hukum kedekatan pada form kontak Tokosaya

SALAH BAGI (kelompok samar):
  Nama Lengkap   [__________________]
  Email          [__________________]
  Kota           [________]
  Propinsi       [________]
  Pesan          [______________________]
   (semua jaraknya 8 piksel, tak tampak mana satu pengaman)

BENAR BAGI (dua kelompok jelas):
  -- Identitas --                jarang 16 piksel di dalam
  Nama Lengkap   [__________________]   kelompok,
  Email          [__________________]
                                         24-32 piksel
  -- Pengiriman --               antara kelompok
  Kota           [________]
  Propinsi       [________]
```

Lima konsep ini akan jadi kacamatamu sepanjang bab. Pas meninjau satu halaman, kamu nggak lagi sekadar bertanya, "kelihatannya bagus atau nggak?" melainkan "hierarkinya jelas, konsisten, mudah dipakai, affordancenya benar, dan kelompok elemennya terbaca?" Pertanyaan kayak gini nanti akan memandumu pas membuat `styleguide.html` di Praktikum.

### 12.2 Whitespace, Alignment, Contrast, Repetition — Empat Alat Visual Utama

Empat prinsip pada 12.1 menjawab pertanyaan "kenapa desain harus tertata". Pertanyaan lanjutannya: "alat apa yang dipakai buat menegakkan ketertataan itu?" Jawabannya ada pada empat alat visual yang sering disebut bareng: *whitespace*, *alignment*, *contrast*, dan *repetition*. Alat-alat ini bekerja tanpa bahasa pemrograman apa pun; semuanya murni keputusan layout yang nanti kita terjemahkan jadi token dan kelas utilitas Bootstrap.

**Whitespace** adalah ruang kosong yang sengaja disediakan di sekeliling dan di antara elemen, dan ruang ini bukan ruang yang terbuang. Reaksi awal orang awam sering begini: "masih ada ruang kosong, berarti harus diisi". Padahal ruang kosong punya tiga tugas penting: memberi napas biar mata nggak sesak, menandai batas kelompok (sesuai hukum kedekatan), dan memberi fokus pada elemen yang tersisa. Bandingkan dua layar berikut:

```text
Ilustrasi: whitespace pada kartu produk

TAK BERNAFAS (jarak 0 piksel, semua nempel):
+-------------------------------------------+
|Monitor IPS 24" MR-241                     |
|LayarBest Seller                           |
|Monitor IPS 24 inci full HD yang jernih    |
|Rp1.899.000[Tambah ke Keranjang][Detail]   |
+-------------------------------------------+

BERNAFAS (jarak sesuai skala):
+-------------------------------------------+
|  Badge Best Seller          (ikon)        |
|                                           |
|  Monitor IPS 24" MR-241                   |
|  Monitor IPS 24 inci full HD ...          |
|                                           |
|  Rp1.899.000                              |
|  [Tambah ke Keranjang]  [Detail]          |
+-------------------------------------------+
  padding kartu 16-24 piksel; jarak antar
  bagian 8-16 piksel; kelompok terbaca jelas.
```

**Alignment** adalah menempatkan elemen pada garis tak terlihat biar semuanya terasa rapi. Garis-garis ini memang nggak digambar, tapi mata pengguna tetap menangkapnya: semua teks kartu produk mulai dari garis vertikal yang sama, sehingga pemindaian naik-turun jadi lebih cepat. Aturan termudah yang bisa kamu pegang: ratakan teks paragraf panjang ke kiri, pakai rata tengah cuma buat elemen tunggal (satu judul, satu grafik), dan jangan mencampur terlalu banyak perataan dalam satu kolom. Di Bootstrap, kelas utilitas `text-start`, `text-center`, dan struktur baris-kolom membantu urusan ini; yang kamu perlukan adalah disiplin pas memilihnya.

**Contrast** adalah perbedaan yang cukup mencolok antara dua elemen yang memang harus dibedakan. Contrast bisa muncul dari warna (teks `--clr-body` `#334155` di atas kartu putih tetap nyaman dibaca), ukuran (judul 32 piksel dibanding keterangan 14 piksel), atau bobot (H1 tebal 700, kutipan tipis). Yang penting diingat: contrast bukan berarti halaman penuh warna-warni; justru ia bekerja pas satu perbedaan tajam muncul di tengah elemen lain yang tenang. Kalau semuanya sama-sama kontras, berarti nggak ada lagi yang benar-benar kontras—dan hierarki pun hilang. Prinsip ini juga dekat dengan aksesibilitas: contrast teks dan latar punya ambang minimal yang akan diuji lebih jauh pada Bab 13.

**Repetition** adalah pengulangan wujud yang serupa biar pola cepat terbentuk dan keputusan pengguna jadi lebih mudah. Delapan kartu produk memakai kelas `produk-card` yang sama; bilah header muncul dengan bentuk yang sama di semua halaman; badge status selalu berupa kapsul kecil di pojok kiri atas kartu. Pengulangan mengubah halaman yang beragam menjadi satu bahasa. Di sinilah empat alat tadi saling mengunci: alignment menjaga semua kartu tetap berada pada grid yang sama, whitespace memberi jarak yang konsisten, contrast menonjolkan bagian penting di kartu, dan repetition membuat semuanya terasa satu keluarga.

Pas memeriksa halaman, biasakan matamu menyebut alat di balik setiap keputusan: "kartu ini punya padding 16 piksel" (whitespace), "judul dan harga rata kiri" (alignment), "tombol utama indigo ada di tengah tombol netral" (contrast), dan "badge status selalu berbentuk bulat kecil" (repetition). Bahasa kayak gini akan jadi obrolan sehari-hari tim desain Tokosaya.

### 12.3 Design System: Definisi, Manfaat, dan Komponen Utama

```text
Ilustrasi: struktur design system Tokosaya

+------------------------------------------------------+
|                 DESIGN SYSTEM TOKOSAYA               |
|                                                      |
|  [ Design token ]  warna / huruf / jarak / lengkung   |
|       |                                              |
|  [ Komponen ]      tombol / kartu / badge / alert    |
|                    form / navigasi (+ varian)         |
|       |                                              |
|  [ Pola & aturan ] hero, grid katalog, do & don't    |
|       |                                              |
|  [ Dokumentasi ]   styleguide.html - satu halaman    |
|                    semua token & komponen tampil      |
+------------------------------------------------------+
      setiap lapisan dipakai lapisan di bawahnya:
      komponen mengonsumsi token, halaman
      mengonsumsi komponen, pengguna melihat halaman.
```

*Design system*—sistem desain—adalah kumpulan standar yang mencakup design token, komponen antarmuka, pola susunan halaman, aturan pemakaian, dan dokumentasi yang bisa dibuka semua anggota tim. Frasa kuncinya adalah *one source of truth* (satu sumber kebenaran): semua keputusan visual tinggal di satu tempat, bukan di kepala seseorang atau tersebar di komentar lama. Analogi yang pas adalah *stylebook* di kantor berita—aturan tata tulis yang membuat semua wartawan menulis seragam—atau buku resep di jaringan kafe: tanpa resep itu, tiap cabang akan menghasilkan rasa sendiri dan merek pun pecah.

Sistem yang lengkap terdiri dari empat lapisan, dari bawah ke atas, kayak pada ilustrasi: (1) **design token**—nilai baku buat warna, huruf, jarak, lengkung, dan bayangan; (2) **komponen**—unit antarmuka siap pakai kayak tombol, kartu, badge, alert, form, dan navigasi beserta variannya; (3) **pola dan aturan**—cara menyusun komponen dalam halaman (hero, grid katalog) serta batas baik-buruk pemakaiannya; dan (4) **dokumentasi**—halaman yang menampilkan semuanya secara jelas dan bisa langsung dibaca. Sistem yang dipelajari di buku ini memang mini, tetapi susunannya sama kayak yang dipakai tim industri.

Manfaat utamanya ada lima. Pertama, **konsistensi**: semua halaman lahir dari token dan komponen yang sama, jadi kepercayaan pengguna nggak tergores setiap kali ada halaman baru. Kedua, **kecepatan**: anggota tim nggak mulai dari nol; mereka tinggal menyalin pola yang udah ada, dan halaman promo Rara pun bisa selesai di hari yang sama. Ketiga, **pemeliharaan**: pas warna utama diubah, cukup ganti satu nilai token, lalu tombol, badge, dan ikon di semua halaman ikut menyesuaikan; ini memanfaatkan sifat kaskade CSS yang udah kamu pelajari di Bab 3. Keempat, **komunikasi**: dua orang akan lebih cepat paham kalau sama-sama menyebut "badge stok terbatas pakai `--clr-danger`" daripada "yang merah lucu itu". Kelima, **adaptasi anggota baru**: membaca satu halaman styleguide jauh lebih efisien daripada harus bertanya ke enam orang berbeda.

Contohnya nggak jauh. Google mempublikasikan *Material Design*—design system yang mengikat aplikasi-aplikasinya di banyak perangkat. Bootstrap yang kamu pakai sejak Bab 9 juga sebenarnya design system publik: ada token warna dan tipografi bawaan, koleksi komponen (tombol, kartu, alert), dan website dokumentasi yang pada dasarnya adalah styleguide raksasa. Design system buat kampus, rumah sakit, atau UMKM mengikuti pola yang sama, cuma skalanya lebih ramping. Bedanya cuma pada jangkauan: Material Design dipakai di seluruh ekosistem Google, sedangkan design system Tokosaya cukup buat satu tim—dan justru karena itu bisa dibuat pas banget dengan kebutuhannya.

Biar nggak tertukar, bedakan dua istilah ini: **design token** udah diperkenalkan di Bab 4 sebagai variabel CSS bernama (misalnya `--clr-primary`), sedangkan **design system** adalah bangunan yang lebih besar dan menjadikan token itu sebagai lantai dasarnya. Praktikum bab ini akan menyusun token yang udah ada jadi sistem yang utuh dan terdokumentasi.

### 12.4 Color System pada Design System

**Sistem warna** (*color system*) adalah lapisan design system yang mengatur pemakaian warna di seluruh proyek. Pusatnya tetap design token, tetapi pada level sistem ada satu keputusan penting yang sering terlewat: kapan sebuah warna diperlakukan sebagai warna *primitif* dan kapan jadi warna *semantik*. Warna primitif hanya menyebut nilai tanpa konteks, misalnya "indigo 600". Warna semantik menyebut peran, misalnya `--clr-danger` buat pesan bahaya. Design system yang baik dibangun dengan token semantik karena **peran lebih stabil daripada nilai**: merek Tokosaya boleh saja berganti dari indigo ke hijau, tetapi makna "bahaya" nggak berubah, sehingga semua halaman yang memakai `--clr-danger` otomatis ikut menyesuaikan.

Tabel berikut berisi token warna baku Tokosaya beserta perannya. Nanti, setiap baris harus muncul sebagai kartu warna (*swatch*) di `styleguide.html`:

| Token | Nilai | Peran semantik |
|---|---|---|
| `--clr-primary` | `#4F46E5` | tombol utama, link, aksi paling penting |
| `--clr-primary-dark` | `#4338CA` | warna tombol pas disentuh (hover) |
| `--clr-accent` | `#F59E0B` | badge penanda, nomor bagian, sorotan |
| `--clr-dark` | `#1E293B` | judul dan teks yang harus tegas |
| `--clr-body` | `#334155` | teks paragraf utama |
| `--clr-bg` | `#F8FAFC` | latar halaman |
| `--clr-surface` | `#FFFFFF` | latar kartu dan panel |
| `--clr-border` | `#E2E8F0` | garis pembatas kartu dan input |
| `--clr-success` | `#16A34A` | pesan sukses, badge "Tersedia" |
| `--clr-danger` | `#DC2626` | pesan bahaya, badge "Stok Terbatas" |

Untuk warna utama, indigo `#4F46E5` dipilih karena dua alasan. Secara karakter, indigo sering diasosiasikan dengan teknologi dan rasa tepercaya, cocok dengan produk aksesori komputer. Secara teknis, warna ini cukup gelap biar teks putih di atasnya tetap nyaman dibaca, dan ia juga cukup berbeda dari biru bawaan Bootstrap sehingga identitas Tokosaya tetap terasa. Ingat aturan dari Bab 4: token dideklarasikan sekali di `:root` lalu dikonsumsi lewat `var()`, bukan diulang sebagai nilai mentah.

Lalu gimana token ini berdampingan dengan Bootstrap? Bootstrap 5.3 udah membawa warna bawaannya sendiri (misalnya biru pada tombol `btn-primary`), dan mengubah seluruh sistem internalnya jelas bukan target mata kuliah ini. Pola yang kita pakai sejak Bab 10–11 lebih ringan: pertahankan kelas Bootstrap buat bentuk (`btn`, `card`, `alert`), lalu tambahkan kelas varian kustom yang mengonsumsi token (`.btn-utama`, `.badge-terjual`) di atasnya. Ada satu teknik turunan yang perlu kamu kuasai, yaitu **tint**: menurunkan warna token jadi latar tipis dengan `rgba()`—misalnya `rgba(22, 163, 74, 0.1)` buat latar alert sukses yang memancarkan `--clr-success`—tanpa menambah warna baru ke sistem. Tint ini tetap menjaga kemiripan (gestalt) dengan warna asal, sambil membuat teks di atasnya tetap gelap dan mudah dibaca.

Aturan pakai (do and don't) berikut menjadi batu bata design system:

- **Do:** satu warna utama (indigo) dipakai di mana pun aksi penting tampil; warna semantik justru tak menyulitkan (hijau buat sukses, merah buat bahaya, kuning buat sorotan); teks utama selalu warna gelap di atas latar terang; semua pasangan warna-teks pada komponen tercatat di styleguide.
- **Don't:** jangan membuat warna pembeda kedua yang mirip (merah bata baru, merah oranye, merah tua — pilih satu merah, yaitu `--clr-danger`); jangan gunakan warna sebagai penyampai makna satu-satunya (tambahkan ikon atau teks) karena pengguna dengan penglihatan warna terbatas akan kehilangan makna — topik lanjut Bab 13; jangan tempatkan teks kuning `#F59E0B` di atas putih buat teks paragraf karena contrastnya lemah; jangan menempatkan gaya mentah `#4F46E5` di halaman — selalu lewat `var(--clr-primary)`.

Aturan terakhir ini penting karena di situlah design system benar-benar diuji: kalau satu halaman memakai nilai mentah dan halaman lain memakai token, perubahan warna utama nanti hanya akan memengaruhi sebagian tombol. Disiplin memakai `var()` adalah tanda bahwa sistem desain kamu benar-benar hidup.

### 12.5 Typography System

**Sistem tipografi** (*typography system*) adalah kumpulan aturan tentang keluarga huruf, ukuran, dan peran tiap tipe teks di seluruh antarmuka. Tokosaya memakai dua keluarga huruf: **Poppins** (geometris, bulat, tegas di ujung) buat judul, dan **Inter** yang dirancang nyaman dibaca di layar buat teks paragraf. Pembagian peran ini bukan sekadar soal selera; idenya sederhana: "peran berbeda, suara berbeda". Judul dengan Poppins 700 terasa kayak berbicara, sementara paragraf dengan Inter 400 terasa kayak bercerita. Pas pengguna memindai halaman, pergantian keluarga huruf ini sendiri udah jadi sinyal hierarki, bahkan tanpa mengubah hal lain.

Selain itu, sistem tipografi juga menetapkan **skala ukuran** dari judul terbesar sampai keterangan terkecil. Bootstrap udah menyediakan dasarnya: kelas `display-*` buat tampilan besar, `h1` sampai `h6` buat jenjang judul, dan `lead` buat paragraf pengantar. Tugasmu adalah menambahkan peran khas Tokosaya di atas skala Bootstrap itu:

| Peran di Tokosaya | Elemen/kelas | Huruf & bobot |
|---|---|---|
| Judul hero | `h1` | Poppins 700 |
| Judul halaman/section | `h2` | Poppins 600 |
| Judul kartu/komponen | `h3`/`h5` | Poppins 600 |
| Subjudul | `.lead` | Inter 400 |
| Teks paragraf | `body` (bawaan) | Inter 400 |
| Keterangan/badge kecil | `.small` | Inter 500 |

Menggabungkannya dengan Bootstrap juga sederhana, dan pola ini udah kamu pakai sejak Bab 9–11: Bootstrap menangani ukuran dan jarak, sedangkan `css/style.css` menggantungkan keluarga huruf dari token:

```css
File: tokosaya-bootstrap/css/style.css

body {
  font-family: var(--font-body);   /* Inter - pakai token, bukan nilai mentah */
  color: var(--clr-body);
}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading); /* Poppins buat semua jenjang judul */
  color: var(--clr-dark);
}
.type-contoh {
  font-family: var(--font-heading); /* kelas sampel di styleguide */
  color: var(--clr-dark);
}
```

Penjelasan: aturan `body` menetapkan bawaan buat seluruh halaman (semua turunannya mewarisi Inter kecuali kalau dioverride), aturan heading menggantungkan semua keluarga judul pada satu selector biar judul baru otomatis tetap serasi, dan `.type-contoh` dipakai khusus di styleguide buat menampilkan sampel huruf pada elemen `<p>` yang memakai kelas `.h*` Bootstrap—jadi dokumentasinya terlihat persis kayak hasil produksi.

Sistem tipografi juga punya aturan disiplin: satu `h1` per halaman, jenjang heading nggak melompat (`h1` ke `h2` ke `h3`), panjang baris paragraf dijaga biar nyaman dibaca (sekitar 60–75 karakter per baris; dibatasi oleh lebar kontainer Bootstrap), dan `line-height` paragraf dibiarkan lega mengikuti bawaan Bootstrap. Aturan panjang baris ini bukan detail sepele: kalau perpindahan baris terlalu sering, mata cepat lelah; kalau baris terlalu panjang di layar lebar, pembaca mudah tersesat pas kembali ke baris berikutnya.

### 12.6 Spacing System

**Sistem jarak** (*spacing system*) menentukan semua jarak di antarmuka biar ritmenya bisa dihitung. Tokosaya memakai **skala 8 piksel**: nilai jarak hanya berhenti di 8, 16, 24, 32, 48, dan 64 piksel—semuanya kelipatan 8, sesuai token `--space-unit: 8px`. Alasannya praktis dan mendasar: keputusan jarak jadi tinggal memilih dari enam opsi, bukan menebak dari ratusan kemungkinan; dua anggota tim yang mengerjakan halaman berbeda tetap bisa sampai ke hasil yang serasi; dan perbandingan antarmuka jadi terukur ("jarak antar kartu 24 piksel, jarak dalam kartu 16 piksel"). Skala 8 piksel ini juga pas dipetakan ke utilitas Bootstrap yang melangkah 4 piksel (0,25 rem), jadi hubungan keduanya cukup fleksibel.

| Jarak Tokosaya | Utilitas Bootstrap | Pemakaian lazim |
|---|---|---|
| 8 piksel | `gap-2`, `p-2`, `m-2` (0,5 rem) | jarak dalam komponen (ikon–teks) |
| 16 piksel | `gap-3`, `p-3`, `m-3` (1 rem) | jarak antar baris elemen yang berpasangan |
| 24 piksel | `gap-4`, `p-4`, `m-4` (1,5 rem) | jarak antar kartu dalam satu grid |
| 32 piksel | kombinasi utilitas atau CSS kustom | jarak antar kelompok form |
| 48 piksel | `gap-5`, `p-5`, `m-5` (3 rem) | jarak antar section dalam halaman |
| 64 piksel | utilitas + CSS kustom | jarak besar header/footer |

Perhatikan nilai 32 piksel: utilitas Bootstrap melangkah 4 piksel, jadi 8, 16, 24, dan 48 piksel punya kelas yang langsung siap dipakai, sedangkan 32 dan 64 piksel bisa didapat dengan menumpuk utilitas (misalnya `mt-5 mb-2`) atau memakai satu kelas kustom kayak `margin-block: 32px`. Detail kecil kayak gini penting buat dipahami: skala 8 piksel adalah **aturan desain**, sedangkan utilitas adalah **alat implementasi**. Keduanya nggak harus identik, asalkan hasil akhirnya tetap konsisten.

Pemakaian sistem jarak mengikuti logika hukum kedekatan: elemen yang saling berhubungan didekatkan (jarak kecil), sedangkan kelompok yang berbeda diberi jarak lebih besar. Di Tokosaya, contohnya begini: label dan input berjarak 8 piksel; dua input yang bersebelahan dalam satu kolom berjarak 16 piksel; dua kartu produk dalam grid berjarak 24 piksel; dan dua section dalam halaman berjarak 48 piksel. Kalau satu halaman memunculkan 8, 13, 20, dan 37 piksel sekaligus, sistemnya udah kalah karena nilai-nilai itu sulit ditelusuri; setiap angka baru berarti satu hal lagi yang harus diingat oleh tiap anggota tim.

### 12.7 Component System: Button, Card, dan Navigation

**Komponen** adalah unit antarmuka yang bisa diulang dengan struktur dan wajah yang tetap: tombol, kartu, badge, alert, form, dan navigasi. **Varian** (*variant*) adalah wujud baku dari komponen itu: sebuah tombol bisa punya varian berdasarkan jenis (utama/sekunder), ukuran (besar/biasa/kecil), atau status (biasa/disentuh/nonaktif). Design system yang baik memakai **matriks varian**: tabel yang mencantumkan semua varian sah dari satu komponen, sehingga varian yang "aneh" bisa dikenali sejak awal dan nggak lolos ke produksi tanpa alasan.

Matriks varian tombol Tokosaya berisi tiga jenis dikali empat status:

| Jenis \ Status | Normal | Hover | Fokus keyboard | Nonaktif |
|---|---|---|---|---|
| **Utama** `.btn-utama` | indigo, teks putih | indigo gelap `--clr-primary-dark` | lingkar fokus indigo | redup, nonklikable |
| **Outline** `.btn-outline-toko` | tanda garis indigo | latar indigo, teks putih | lingkar fokus indigo | garis tipis, nonklikable |
| **Netral** `.btn-netral` | putih, garis `--clr-border` | garis indigo, teks indigo | lingkar fokus indigo | garis tipis, nonklikable |

Aturan pemakaiannya ditulis jelas di styleguide supaya kamu nggak perlu menghafal: **utama** dipakai buat satu tindakan paling bernilai di setiap layar ("Lihat Katalog" di hero, "Kirim" di form kontak, "Tambah ke Keranjang" di kartu produk utama); **outline** dipakai buat tindakan penting tapi urutan kedua; **netral** buat tindakan pendamping atau turunan; **ukuran** `.btn-lg`/`.btn-sm` cuma dipakai pas konteks memang menuntut (hero memakai ukuran besar, kartu produk memakai ukuran kecil); dan **nonaktif** diberi atribut `disabled` pada elemen `<button>` statis, bukan sekadar dihilangkan.

**Kartu produk** punya enam bagian tetap: badge status, ikon/lampiran kategori, judul produk, keterangan singkat, harga, dan deretan tombol aksi. Urutannya nggak boleh berubah-ubah di halaman lain—justru kekonsistenan inilah yang membuat pengguna bisa memindai katalog secepat melihat rak minuman. Varian kartu dibedakan lewat isi, bukan lewat wajah: kartu "Best Seller" memakai badge aksen, kartu "Stok Terbatas" memakai badge `--clr-danger`, tetapi keduanya tetap berbagi satu kelas `p-kartu`. Kalau keduanya dibuat dengan wujud lain di luar varian itu, berarti kamu diam-diam menambah komponen baru tanpa alasan yang kuat.

| Bagian kartu | Kelas/token | Alasan |
|---|---|---|
| Wadah | `.p-kartu` | lengkung `--radius`, bayangan `--shadow-card` |
| Badge status | `.badge-*` (lihat tabel di 12.7) | kemiripan badge antar kartu |
| Judul | `h3.h5.card-title` | jenjang heading sah di dalam `article` |
| Kategori | `.text-secondary.small` | hierarki lemah, nggak menggoyang judul |
| Harga | `.h5.text-harga` | contrast ukuran/bobot, Poppins |
| Aksi | `.btn-utama.btn-sm` + `.btn-netral.btn-sm` | satu utama, sisanya pendamping |

**Navigasi** memakai tiga elemen: navbar (brand + menu baku "Beranda, Katalog, Tentang, Kontak" + ikon keranjang di kanan), breadcrumb buat halaman dalam, dan link aktif yang ditandai `aria-current="page"`. Di Bootstrap, navbar pada kondisi desktop bisa tampil penuh tanpa JavaScript. Sebaliknya, tombol buka-tutup (hamburger) yang dibutuhkan di layar sempit butuh paket JavaScript Bootstrap, dan itu memang di luar cakupan mata kuliah ini. Karena itu, di styleguide sampel navigasi ditampilkan statis pas status desktop, sedangkan perilaku interaktifnya cukup dijelaskan lewat catatan dokumentasi. Pola yang sama berlaku buat modal dan dropdown Bootstrap: status visualnya (kelas `.show`, layout panel) tetap dipelajari dan didokumentasikan, sementara perilaku interaktifnya diserahkan ke alat industri yang JavaScript-nya udah matang. Intinya, **setiap varian sah harus ada di styleguide**; kalau satu varian nggak masuk dokumentasi, anggota tim yang belum tahu aturannya bisa saja melanggar—dan itu salah sistem, bukan salah orangnya.

**Badge**, meskipun kecil, tetap bagian dari sistem. Mapping baku Tokosaya adalah sebagai berikut:

| Badge dataset | Token | Makna yang disampaikan |
|---|---|---|
| Best Seller | `--clr-accent` | produk terlaris, penyorotan ramah |
| Tersedia | `--clr-success` | stok aman, hijau sehat |
| Stok Terbatas | `--clr-danger` | urgensi, merah menuntut keputusan |
| Baru | `--clr-primary` | masuk katalog terbaru, aksi menelusuri |

### 12.8 Mendokumentasikan di Halaman Styleguide

*Styleguide* adalah satu halaman yang menampilkan seluruh design token dan komponen design system secara nyata di layar, lengkap dengan nama, nilai, dan aturan pakainya. Prinsipnya sederhana: **satu halaman, semua token**. Siapa pun yang membuka `styleguide.html` di browser biasa harus bisa langsung menjawab pertanyaan kayak "warna apa yang dipakai tombol utama?", "berapa jarak antar kartu?", dan "gimana bentuk alert sukses?" tanpa perlu alat lain.

Kenapa harus satu halaman? Karena styleguide adalah jendela utama design system buat tiga pembaca sekaligus. **Desainer** memakainya sebagai palet buat memilih varian tombol yang tepat sebelum menyesuaikan halaman lain. **Penulis kode** (termasuk kamu dan anggota baru) menyalin pola markup dari styleguide, bukan mengarang dari nol, sehingga markup produksi dan dokumentasi nggak saling menjauh. **Penjaga merek atau pemilik produk** memakainya buat review karena semua contoh terkumpul dalam satu tampilan. Styleguide juga berguna banget pas serah terima proyek—pas anggota baru bergabung, halaman pertama yang mereka buka seharusnya halaman ini, bukan file CSS ratusan baris.

Isi minimumnya adalah: (1) daftar token warna sebagai swatch bernama + nilai heksa; (2) sampel tipografi dari H1 sampai teks kecil; (3) skala jarak dalam bentuk visual; (4) setiap komponen dalam semua varian sahnya; (5) catatan do and don't; dan (6) baris meta berisi versi, tanggal, pemilik, dan tagline biar identitasnya tercatat. Yang perlu dihindari adalah styleguide yang cuma berisi daftar nama tanpa tampilan nyata, karena dokumentasi yang nggak bisa dilihat biasanya juga nggak akan dipatuhi.

Cara memakai styleguide dalam proyek sebenarnya sederhana: token tinggal di `css/style.css`; `styleguide.html` jadi konsumen pertama dan paling teliti; lalu halaman riil (`index.html`, `katalog.html`, form kontak) dibangun dengan menyalin pola komponen dari styleguide. Pas varian baru dibutuhkan (misalnya tombol buat kondisi khusus), varian itu ditambahkan ke `css/style.css` dan **langsung** dimasukkan ke styleguide pada hari yang sama—nggak ada varian yang berjalan lebih dulu daripada dokumentasinya. Berkat kaskade, memeriksa styleguide adalah cara tercepat buat meninjau seluruh wajah produk: satu halaman, semua token, semua komponen, sekali buka.

Praktikum bab ini akan membangun tepat satu halaman kayak gitu buat Tokosaya. Setelah selesai, halaman ini akan dipakai lagi di Bab 13 (audit aksesibilitas dan responsif), Bab 14 (penjajakan translasi desain), dan Bab 15 (QA). Jadi, styleguide ini adalah investasi kecil yang terus dipakai sampai akhir proyek.

## Konsep Penting

| Konsep | Inti | Relevansi Tokosaya |
|---|---|---|
| Hierarki visual | membaca halaman dari yang penting ke pelengkap | hero: H1 besar, subjudul kecil, CTA indigo |
| Konsistensi | elemen serupa tampil dan berlaku serupa | navigasi & token sama di semua halaman |
| Usability | tujuan tercapai tanpa berpikir keras | label "Lihat Katalog", bukan "Klik di sini" |
| Affordance | isyarat keterinteraksian pada wajah elemen | tombol berlatar terlihat ditekan | 
| Hukum kedekatan | berdempel satu-kelompok, jauh beda-kelompok | label–input dekat, kelompok form terpisah |
| Whitespace | ruang kosong yang disengaja memandu mata | padding kartu dan jarak antar section |
| Alignment | garis tak terlihat yang diikuti elemen | teks kartu rata kiri pada grid |
| Contrast | perbedaan mencolok sebagai alat fokus | harga tegas, keterangan kecil pucat |
| Repetition | pengulangan wujud membentuk pola | 8 kartu katalog satu kelas `p-kartu` |
| Design system | token + komponen + aturan + dokumentasi | styleguide Tokosaya sebagai satu sumber |
| Token semantik | nilai menamai peran, bukan menyimpan nilai mentah | `--clr-primary`, `--clr-danger`, `--space-unit` |
| Skala 8 piksel | jarak hanya 8/16/24/32/48/64 | `gap-3` buat 16 piksel, `m-5` buat 48 piksel |
| Styleguide | satu halaman semua token & komponen | `styleguide.html` v1 di Bab 12 | 

## Contoh Kode

Dua contoh berikut berdiri sendiri: masing-masing berupa satu file HTML yang bisa langsung dibuka di Chrome tanpa file lain. Contoh pertama memperlihatkan empat alat visual (12.2) lewat pasangan desain buruk dan baik; contoh kedua memperlihatkan kartu produk Tokosaya yang dibangun penuh dari design token. Di dalam contoh, CSS ditulis langsung di `<style>`—ini cuma buat kebutuhan demonstrasi biar file bisa berdiri sendiri. Di proyek nyata, gaya kayak gini tetap dipindahkan ke `css/style.css`.

```html
File: tokosaya-bootstrap/demo-prinsip-visual.html

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contoh Prinsip Visual Tokosaya</title>
  <!-- Tanpa paket JavaScript Bootstrap (JavaScript di luar cakupan mata kuliah) -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <!-- khusus demonstrasi: CSS internal biar contoh berdiri sendiri -->
  <style>
    body {
      font-family: 'Inter', sans-serif;
      color: #334155;
      background-color: #F8FAFC;
      margin: 32px;
    }
    h1, h2, .judul-demo { font-family: 'Poppins', sans-serif; color: #1E293B; }
    .panel {
      background-color: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      padding: 24px;
      max-width: 560px;
      margin-bottom: 24px;
    }
    /* ===== Pasangan 1: whitespace + kedekatan pada form ===== */
    .tanduk { font-family: 'Poppins', sans-serif; color: #1E293B; }
    .buruk-form .kelompok { margin-bottom: 8px; }  /* semua serba seragam */
    .buruk-form .kolom {
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 8px;
      width: 220px;
    }
    .baik-form .kolom {
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 8px;
      width: 220px;
      display: block;
      margin-bottom: 8px;        /* jarak dalam kelompok */
    }
    .baik-form .kelompok { margin-bottom: 24px; } /* jarak antar kelompok */
    /* ===== Pasangan 2: alignment ===== */
    .buruk-align .info-nama { text-align: center; margin: 0; }
    .buruk-align .info-harga { text-align: right; margin: 0; }
    .buruk-align .info-ket { text-align: left; margin: 0; }
    .baik-align .baris-info { margin: 0 0 4px 0; } /* semua rata kiri */
    /* ===== Pasangan 3: contrast ===== */
    .buruk-contrast p { font-size: 16px; margin: 0 0 4px 0; }
    .baik-contrast .judul-utama { font-size: 28px; font-weight: 700; color: #1E293B; margin: 0; }
    .baik-contrast .subjudul { font-size: 18px; color: #334155; margin: 0; }
    .baik-contrast .keterangan { font-size: 14px; color: #64748B; margin: 0; }
  </style>
</head>
<body>
  <h1>Bandingkan Desain Buruk dan Baik</h1>
  <p>Tiga pasangan yang membandingkan tiga alat visual: whitespace/kedekatan, alignment, contrast.</p>

  <!-- Pasangan 1: kedekatan -->
  <section class="panel">
    <h2>1. Whitespace dan Kedekatan pada Form</h2>
    <div class="buruk-form">
      <div class="kelompok">Semua jarak 8 piksel - kelompoknya tak terbaca</div>
      <div class="kelompok">
        <p class="tanduk">Nama</p>
        <span class="kolom">kolom teks</span>
        <p class="tanduk">Email</p>
        <span class="kolom">kolom teks</span>
        <p class="tanduk">Kota</p>
        <span class="kolom">kolom teks</span>
        <p class="tanduk">Propinsi</p>
        <span class="kolom">kolom teks</span>
      </div>
    </div>
    <div class="baik-form">
      <div class="kelompok">
        <p class="tanduk">Identitas: kelompok dekat, 16 piksel</p>
        <label class="tanduk" for="demo-nama">Nama</label>
        <input class="kolom" id="demo-nama" type="text">
        <label class="tanduk" for="demo-email">Email</label>
        <input class="kolom" id="demo-email" type="email">
      </div>
      <div class="kelompok">
        <p class="tanduk">Pengiriman: terpisah 24 piksel</p>
        <label class="tanduk" for="demo-kota">Kota</label>
        <input class="kolom" id="demo-kota" type="text">
      </div>
    </div>
  </section>

  <!-- Pasangan 2: alignment -->
  <section class="panel baik-align">
    <h2>2. Alignment pada Info Produk</h2>
    <div class="buruk-align">
      <p class="info-nama">Mouse Wireless MW-88</p>
      <p class="info-harga">Rp185.000</p>
      <p class="info-ket">Sensor presisi 1600 DPI</p>
    </div>
    <hr>
    <div class="baik-align">
      <p class="baris-info judul-utama">Mouse Wireless MW-88</p>
      <p class="baris-info">Rp185.000</p>
      <p class="baris-info">Sensor presisi 1600 DPI</p>
    </div>
  </section>

  <!-- Pasangan 3: contrast -->
  <section class="panel">
    <h2>3. Contrast pada Hierarki Hero</h2>
    <div class="buruk-contrast">
      <p>Peralatan Kerja Digital untuk Semua</p>
      <p>Keyboard, mouse, hingga monitor tersedia.</p>
      <p>Semua teks 16 piksel - tak ada tumpuan.</p>
    </div>
    <hr>
    <div class="baik-contrast">
      <p class="judul-utama">Peralatan Kerja Digital untuk Semua</p>
      <p class="subjudul">Keyboard, mouse, hingga monitor tersedia.</p>
      <p class="keterangan">Harga jujur untuk pekerja digital.</p>
    </div>
  </section>
</body>
</html>
```

Penjelasan: contoh ini sengaja dibuat tanpa Bootstrap biar prinsipnya terlihat dalam bentuk paling murni. Pasangan pertama mengatur jarak dengan dua tingkat sah dari skala 8 piksel (8 di dalam kelompok, 24 antarkelompok), sehingga hukum kedekatan terasa bekerja tanpa perlu garis pembatas tambahan. Pasangan kedua memperlihatkan tiga perataan acak (tengah, kanan, kiri) yang lalu disatukan jadi rata kiri; perhatikan gimana pada versi baik mata bisa turun dari satu baris ke baris berikutnya tanpa harus mundur. Pasangan ketiga membandingkan tiga teks berukuran sama dengan tiga tingkat ukuran dan kegelapan yang membangun hierarki; nilai warnanya memakai token sebagai demonstrasi (`#334155` = `--clr-body`, `#1E293B` = `--clr-dark`).

```html
File: tokosaya-bootstrap/demo-kartu-token.html

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kartu Produk dari Design Token — Tokosaya</title>
  <!-- Tanpa paket JavaScript Bootstrap (JavaScript di luar cakupan mata kuliah) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <!-- khusus demonstrasi: token disalin biar contoh berdiri sendiri; di proyek nyata token tinggal di css/style.css -->
  <style>
    :root {
      --clr-primary: #4F46E5;
      --clr-primary-dark: #4338CA;
      --clr-accent: #F59E0B;
      --clr-dark: #1E293B;
      --clr-body: #334155;
      --clr-bg: #F8FAFC;
      --clr-surface: #FFFFFF;
      --clr-border: #E2E8F0;
      --clr-success: #16A34A;
      --clr-danger: #DC2626;
      --font-heading: 'Poppins', sans-serif;
      --font-body: 'Inter', sans-serif;
      --radius: 12px;
      --shadow-card: 0 8px 24px rgba(15, 23, 42, 0.08);
      --space-unit: 8px;
    }
    body {
      font-family: var(--font-body);
      color: var(--clr-body);
      background-color: var(--clr-bg);
      padding: 32px;
    }
    h1 { font-family: var(--font-heading); color: var(--clr-dark); font-size: 20px; }
    /* kustom */
    .demo-kartu {
      max-width: 360px;
      background-color: var(--clr-surface);
      border: 1px solid var(--clr-border);
      border-radius: var(--radius);
      box-shadow: var(--shadow-card);
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .demo-baris-badge {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .demo-badge {
      background-color: var(--clr-accent);
      color: var(--clr-dark);
      font-size: 12px;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 999px;
    }
    .demo-ikon { font-size: 24px; color: var(--clr-border); }
    .demo-kartu h2 {
      font-family: var(--font-heading);
      color: var(--clr-dark);
      font-size: 18px;
      margin: 0;
    }
    .demo-kategori { font-size: 14px; margin: 0; }
    .demo-harga {
      font-family: var(--font-heading);
      font-weight: 600;
      color: var(--clr-dark);
      margin: 0;
    }
    .demo-aksi { display: flex; gap: 8px; margin-top: 8px; }
    .demo-btn-utama {
      background-color: var(--clr-primary);
      color: #FFFFFF;
      border: none;
      border-radius: var(--radius);
      padding: 8px 16px;
    }
    .demo-btn-netral {
      background-color: var(--clr-surface);
      color: var(--clr-body);
      border: 1px solid var(--clr-border);
      border-radius: var(--radius);
      padding: 8px 16px;
    }
  </style>
</head>
<body>
  <h1>Kartu Produk MR-241 dari Design Token</h1>
  <article class="demo-kartu">
    <div class="demo-baris-badge">
      <span class="demo-badge">Best Seller</span>
      <i class="bi bi-display demo-ikon" aria-hidden="true"></i>
    </div>
    <h2>Monitor IPS 24" MR-241</h2>
    <p class="demo-kategori">Layar</p>
    <p>Monitor IPS 24 inci full HD yang jernih untuk kerja tabel dan laporan.</p>
    <p class="demo-harga">Rp1.899.000</p>
    <div class="demo-aksi">
      <button type="button" class="demo-btn-utama">Tambah ke Keranjang</button>
      <button type="button" class="demo-btn-netral">Detail</button>
    </div>
  </article>
</body>
</html>
```

Penjelasan: satu kartu ini merangkum sebagian besar materi bab dalam satu wujud. Badge memakai `--clr-accent` dengan teks gelap (contrast aman); judul dan harga memakai Poppins dari token `--font-heading` buat menegaskan hierarki; padding 24 piksel dan gap 8 piksel diambil langsung dari skala 8 piksel (`--space-unit` jadi dokumentasinya); bayangan memakai `--shadow-card` biar kartu tampak sedikit terangkat tanpa kesan berat; dan warna ikon memilih `--clr-border` supaya tetap lembut dan nggak berebut perhatian dengan judul. Ikon Bootstrap Icons memakai `aria-hidden="true"` karena fungsinya murni dekoratif; informasi kategorinya udah tersedia sebagai teks.

## Penjelasan Kode

**Contoh 1 (demo-prinsip-visual.html).** Struktur halaman menempatkan tiga pasangan di dalam `<section>` terpisah biar tiap prinsip bisa diperiksa satu per satu. CSS internal bertanda `<!-- khusus demonstrasi -->` dipakai supaya satu file bisa dibuka tanpa koneksi dan tanpa file lain—cara yang pas buat latihan mandiri, meski pada proyek nyata kamu tetap memindahkannya ke `css/style.css` sesuai aturan buku ini. Perhatikan tiga keputusan khas design system: (1) pada pasangan kedekatan, dua nilai jarak ditulis sebagai varian kelas (`.baik-form .kolom` 8 piksel, `.baik-form .kelompok` 24 piksel), sehingga aturan tinggal di CSS, bukan tercecer sebagai angka ajaib di markup; (2) label dipasang dengan `<label for>` yang menunjuk ke `id` input, karena form contoh tetap harus memakai struktur yang benar sejak awal; dan (3) setiap pasangan memakai konten dataset Tokosaya yang asli (MW-88, hero baku), supaya kamu belajar dari kasus yang sama dengan proyek utamanya.

**Contoh 2 (demo-kartu-token.html).** Kartu ini dibangun tanpa kelas Bootstrap buat menunjukkan bahwa komponen bisa lahir langsung dari token murni. Nanti, Bootstrap memang membantu menghemat kerja, tapi urutannya tetap sama: token dulu, komponen menyusul. `display: flex; flex-direction: column; gap: 8px` mengatur jarak vertikal yang seragam antarbagiannya (Flexbox dibahas di Bab 6); `justify-content: space-between` menaruh badge di kiri dan ikon di kanan tanpa angka posisi; `border-radius: var(--radius)` dan `box-shadow: var(--shadow-card)` memanggil token sehingga kartu ini otomatis ikut berubah kalau identitas Tokosaya diperbarui. Tombol aksinya memakai dua varian (utama + netral) persis kayak matriks pada 12.7, dan `max-width: 360px` menjaga lebar kartu biar tetap satu kolom walau dibuka di layar lebar.

## Praktikum

### Tujuan Praktikum

Tujuan praktikum ini adalah membangun halaman `styleguide.html`—mini design system Tokosaya—dalam satu halaman statis yang menampilkan seluruh design token (warna, tipografi, jarak) dan contoh semua komponen inti (tombol dengan matriksnya, kartu, alert, badge, dan form sampel), dikelola dengan Bootstrap 5.3.3 dan design token semantik pada `css/style.css`.

### Kebutuhan

1. Komputer dengan Visual Studio Code serta browser Chrome (DevTools buat inspeksi).
2. Folder proyek `tokosaya-bootstrap/` hasil Bab 9–11: `index.html`, `katalog.html`, halaman form/keranjang, dan `css/style.css` udah ada; token `:root` udah dikenal dari Bab 4.
3. Koneksi internet buat CDN Bootstrap 5.3.3, Bootstrap Icons 1.11.3, dan Google Fonts.
4. Dataset baku Tokosaya dari kontrak buku (KONTRAK §5): navigasi baku, hero baku, 8 produk, dan token warna/fungsi beserta nilai heksanya.

### Persiapan

Buka folder `tokosaya-bootstrap/` di VS Code. Pastikan `css/style.css` udah memuat blok token `:root` dari Bab 4; kalau belum, salin blok token dari Kode pada langkah 2. Halaman styleguide akan memakai dua file: `css/style.css` (token + kelas komponen kustom) dan `styleguide.html` (dokumentasi satu halaman). Keduanya diperkaya dengan Bootstrap CDN kayak pada Bab 9–11, ditambah Bootstrap Icons buat ikon. Simpan salinan `css/style.css` sebelum mengedit biar perubahan bab ini lebih mudah kamu lacak.

### Langkah Kerja

1. **Siapkan file.** Di dalam folder `tokosaya-bootstrap/`, pastikan `css/style.css` ada; buat file baru bernama `styleguide.html`; keduanya akan diperkaya pada langkah 2 dan 4.
2. **Tulis design token pada `css/style.css`.** Letakkan blok token lengkap di paling atas file (sesuai Kode di bawah); token lama dari Bab 4 diganti sekaligus blok ini supaya nggak ada nilai ganda.
3. **Tambahkan kelas komponen.** Di bawah blok token, tulis seluruh kelas komponen styleguide: tombol varian, kartu, swatch, skala jarak, badge, alert, dan navigasi (blok lengkap pada bagian Kode).
4. **Tulis kerangka `styleguide.html`.** Buat halaman baru lengkap sesuai Kode: `header` dengan `h1`, lalu `main` berisi sembilan section bernomor, dan `footer` kontak baku Tokosaya.
5. **Hubungkan seluruh CDN.** Sambungkan Bootstrap 5.3.3, Bootstrap Icons 1.11.3, Google Fonts (Poppins + Inter), dan `css/style.css`; beri komentar starter tanpa file JavaScript Bootstrap.
6. **Verifikasi token warna.** Buka `styleguide.html` di Chrome; bandingkan setiap kartu warna dengan nilainya: `--clr-primary` harus tampil indigo `#4F46E5`, `--clr-accent` amber `#F59E0B`, dan sembilan lainnya sesuai tabel 12.4.
7. **Uji struktur dokumen.** Pastikan satu `h1`, jenjang heading nggak melompat (h1 → h2 → h3), setiap label form terhubung `id`, dan ikon dekoratif memakai `aria-hidden="true"`.
8. **Inspeksi dengan DevTools.** Pilih salah satu kartu, panel **Elements**: periksa nilai `background-color` menyandang `var(--clr-primary)`; bandingkan jarak antar kartu (24 piksel) dan jarak dalam kartu (16 piksel).

### Kode

Blok pertama adalah file `css/style.css` yang melengkapi token dengan seluruh kelas komponen styleguide:

```css
File: tokosaya-bootstrap/css/style.css

/* ============================================================
   tokosaya-bootstrap/css/style.css - Design token + komponen
   Dipakai bersama Bootstrap 5.3.3 (CDN CSS) - Bab 12
   ============================================================ */

/* ===== 1. Design token Tokosaya (satu sumber kebenaran) ===== */
:root {
  --clr-primary: #4F46E5;      /* indigo - tombol & link utama */
  --clr-primary-dark: #4338CA;
  --clr-accent: #F59E0B;       /* amber - badge & sorotan */
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

/* ===== 2. Fondasi halaman ===== */
body {
  font-family: var(--font-body);
  color: var(--clr-body);
  background-color: var(--clr-bg);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--clr-dark);
}

.text-harga {
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--clr-dark);
}

.type-contoh {
  font-family: var(--font-heading);
  color: var(--clr-dark);
}

/* ===== 3. Tombol - matriks varian (12.7) ===== */
/* kustom */
.btn-utama {
  /* variabel internal Bootstrap 5.3.3 buat sorotan fokus; ⚠ version-sensitive:
     periksa dokumentasi resmi terbaru (getbootstrap.com) */
  --bs-btn-focus-shadow-rgb: 79, 70, 229;
  background-color: var(--clr-primary);
  border-color: var(--clr-primary);
  color: #FFFFFF;
  border-radius: var(--radius);
}
.btn-utama:hover,
.btn-utama:focus {
  background-color: var(--clr-primary-dark);
  border-color: var(--clr-primary-dark);
  color: #FFFFFF;
}
.btn-outline-toko {
  --bs-btn-focus-shadow-rgb: 79, 70, 229;
  background-color: transparent;
  border: 1px solid var(--clr-primary);
  color: var(--clr-primary);
  border-radius: var(--radius);
}
.btn-outline-toko:hover,
.btn-outline-toko:focus {
  background-color: var(--clr-primary);
  border-color: var(--clr-primary);
  color: #FFFFFF;
}
.btn-netral {
  --bs-btn-focus-shadow-rgb: 79, 70, 229;
  background-color: var(--clr-surface);
  border: 1px solid var(--clr-border);
  color: var(--clr-body);
  border-radius: var(--radius);
}
.btn-netral:hover,
.btn-netral:focus {
  border-color: var(--clr-primary);
  color: var(--clr-primary);
}

/* ===== 4. Kartu produk ===== */
/* kustom */
.p-kartu {
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  background-color: var(--clr-surface);
  box-shadow: var(--shadow-card);
}
.p-kartu .card-title {
  font-family: var(--font-heading);
  color: var(--clr-dark);
}
.p-kartu i {
  color: var(--clr-border);   /* ikon kategori lembut, nggak berebut dengan judul */
}

/* ===== 5. Kartu warna (swatch) ===== */
/* kustom */
.swatch {
  background-color: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  padding: 8px;
}
.swatch-blok {
  height: 64px;
  border-radius: 8px;
  border: 1px solid var(--clr-border);
}
.warna-primary { background-color: var(--clr-primary); }
.warna-primary-dark { background-color: var(--clr-primary-dark); }
.warna-accent { background-color: var(--clr-accent); }
.warna-dark { background-color: var(--clr-dark); }
.warna-body { background-color: var(--clr-body); }
.warna-bg { background-color: var(--clr-bg); }
.warna-surface { background-color: var(--clr-surface); }
.warna-border { background-color: var(--clr-border); }
.warna-success { background-color: var(--clr-success); }
.warna-danger { background-color: var(--clr-danger); }
.swatch-nama {
  font-size: 0.875rem;
  color: var(--clr-body);
}

/* ===== 6. Bar skala jarak (8 piksel) ===== */
/* kustom */
.sp-bar {
  height: 16px;
  background-color: var(--clr-primary);
  border-radius: 8px;
}
.sp-8 { width: 8px; }
.sp-16 { width: 16px; }
.sp-24 { width: 24px; }
.sp-32 { width: 32px; }
.sp-48 { width: 48px; }
.sp-64 { width: 64px; }
.sp-label { font-size: 0.875rem; color: var(--clr-body); }

/* ===== 7. Badge - mapping empat status dataset ===== */
/* kustom */
.badge-terjual { background-color: var(--clr-accent); color: var(--clr-dark); }
.badge-tersedia { background-color: var(--clr-success); color: #FFFFFF; }
.badge-limited { background-color: var(--clr-danger); color: #FFFFFF; }
.badge-baru { background-color: var(--clr-primary); color: #FFFFFF; }
.badge-netral { background-color: var(--clr-border); color: var(--clr-dark); }

/* ===== 8. Alert - latar tint tanpa menambah warna baru ===== */
/* kustom */
.alert-toko {
  border: 1px solid;
  border-radius: var(--radius);
}
.alert-sukses { background-color: rgba(22, 163, 74, 0.10); border-color: var(--clr-success); }
.alert-info-toko { background-color: rgba(79, 70, 229, 0.08); border-color: var(--clr-primary); }
.alert-peringatan { background-color: rgba(245, 158, 11, 0.12); border-color: var(--clr-accent); }
.alert-bahaya { background-color: rgba(220, 38, 38, 0.10); border-color: var(--clr-danger); }
.alert-sukses i { color: var(--clr-success); }
.alert-info-toko i { color: var(--clr-primary); }
.alert-peringatan i { color: var(--clr-accent); }
.alert-bahaya i { color: var(--clr-danger); }
```

Penjelasan: file ini disusun dalam delapan grup berurutan—token dulu, lalu fondasi, lalu satu grup per komponen—supaya siapa pun membacanya mulai dari sumbernya. Setiap kelas diberi komentar `/* kustom */` sesuai aturan buku; tiga varian tombol menetapkan variabel `--bs-btn-focus-shadow-rgb` supaya sorotan fokus keyboard ikut berwarna indigo, bukan biru bawaan Bootstrap. Tint alert ditulis dengan `rgba()` biar latar tipis tetap mengikuti warna token tanpa menambah nilai baru; ini persis teknik "turun tanpa menambah" yang dibahas pada 12.4. Nama `alert-info-toko` sengaja dibedakan dari `.alert-info` Bootstrap biar keduanya nggak saling menimpa.

Blok kedua adalah file `styleguide.html` yang mendokumentasikan semuanya dalam satu halaman:

```html
File: tokosaya-bootstrap/styleguide.html

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Styleguide Tokosaya v1.0</title>
  <!-- Tanpa paket JavaScript Bootstrap (JavaScript di luar cakupan mata kuliah) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="container py-4">
    <header class="mb-5">
      <h1>Styleguide Tokosaya</h1>
      <p class="lead">Dokumentasi visual satu halaman: semua token, semua komponen, semua varian sah.</p>
      <p class="small text-secondary mb-0">Versi 1.0 · Dikelola tim web Tokosaya · Tagline: "Belanja Tepat, Kirim Cepat"</p>
    </header>

    <main>
      <!-- 1. Warna -->
      <section id="warna" class="mb-5">
        <h2>1. Warna (Design Token)</h2>
        <p>Puluh token warna baku; gunakan sesuai peran semantik - jangan menempatkan nilai mentah.</p>
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">
          <div class="col">
            <div class="swatch">
              <div class="swatch-blok warna-primary"></div>
              <p class="swatch-nama mb-0">clr-primary<br><small>#4F46E5</small></p>
            </div>
          </div>
          <div class="col">
            <div class="swatch">
              <div class="swatch-blok warna-primary-dark"></div>
              <p class="swatch-nama mb-0">clr-primary-dark<br><small>#4338CA</small></p>
            </div>
          </div>
          <div class="col">
            <div class="swatch">
              <div class="swatch-blok warna-accent"></div>
              <p class="swatch-nama mb-0">clr-accent<br><small>#F59E0B</small></p>
            </div>
          </div>
          <div class="col">
            <div class="swatch">
              <div class="swatch-blok warna-dark"></div>
              <p class="swatch-nama mb-0">clr-dark<br><small>#1E293B</small></p>
            </div>
          </div>
          <div class="col">
            <div class="swatch">
              <div class="swatch-blok warna-body"></div>
              <p class="swatch-nama mb-0">clr-body<br><small>#334155</small></p>
            </div>
          </div>
          <div class="col">
            <div class="swatch">
              <div class="swatch-blok warna-bg"></div>
              <p class="swatch-nama mb-0">clr-bg<br><small>#F8FAFC</small></p>
            </div>
          </div>
          <div class="col">
            <div class="swatch">
              <div class="swatch-blok warna-surface"></div>
              <p class="swatch-nama mb-0">clr-surface<br><small>#FFFFFF</small></p>
            </div>
          </div>
          <div class="col">
            <div class="swatch">
              <div class="swatch-blok warna-border"></div>
              <p class="swatch-nama mb-0">clr-border<br><small>#E2E8F0</small></p>
            </div>
          </div>
          <div class="col">
            <div class="swatch">
              <div class="swatch-blok warna-success"></div>
              <p class="swatch-nama mb-0">clr-success<br><small>#16A34A</small></p>
            </div>
          </div>
          <div class="col">
            <div class="swatch">
              <div class="swatch-blok warna-danger"></div>
              <p class="swatch-nama mb-0">clr-danger<br><small>#DC2626</small></p>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Tipografi -->
      <section id="tipografi" class="mb-5">
        <h2>2. Tipografi</h2>
        <p>Poppins untuk judul (tegas), Inter untuk paragraf (nyaman dibaca lama).</p>
        <div class="mb-3">
          <p class="h1 type-contoh mb-0">Peralatan Kerja Digital untuk Semua</p>
          <small class="text-secondary">H1 - Poppins 700 - judul hero</small>
        </div>
        <div class="mb-3">
          <p class="h2 type-contoh mb-0">Katalog Aksesori Input</p>
          <small class="text-secondary">H2 - Poppins 600 - judul halaman/section</small>
        </div>
        <div class="mb-3">
          <p class="h3 type-contoh mb-0">Keyboard Mekanis KX-210</p>
          <small class="text-secondary">H3 - Poppins 600 - judul kartu/komponen</small>
        </div>
        <div class="mb-3">
          <p class="lead mb-0">Keyboard, mouse, hingga monitor - pilih perangkat kerja Anda dengan harga UMKM yang jujur.</p>
          <small class="text-secondary">Lead - Inter 400 - subjudul hero</small>
        </div>
        <div class="mb-3">
          <p class="mb-0">Keyboard mekanis 87 tombol dengan switch biru untuk kerja lama yang nyaman.</p>
          <small class="text-secondary">Paragraf - Inter 400 - teks utama</small>
        </div>
        <div>
          <small>Keyboard, mouse, hingga aksesori komputer - Tokosaya.</small>
          <small class="text-secondary d-block">Kecil - Inter 500 - keterangan</small>
        </div>
      </section>

      <!-- 3. Spasi -->
      <section id="spasi" class="mb-5">
        <h2>3. Spasi (Skala 8 piksel)</h2>
        <p>Semua jarak kelipatan 8: gunakan utilitas Bootstrap yang sama pada tabel 12.6.</p>
        <ul class="list-unstyled mb-0">
          <li class="d-flex align-items-center gap-3 mb-2">
            <span class="sp-bar sp-8"></span><span class="sp-label">8px - jarak dalam komponen (ikon-teks)</span>
          </li>
          <li class="d-flex align-items-center gap-3 mb-2">
            <span class="sp-bar sp-16"></span><span class="sp-label">16px - jarak label-input, antar baris elemen</span>
          </li>
          <li class="d-flex align-items-center gap-3 mb-2">
            <span class="sp-bar sp-24"></span><span class="sp-label">24px - jarak antar kartu dalam grid</span>
          </li>
          <li class="d-flex align-items-center gap-3 mb-2">
            <span class="sp-bar sp-32"></span><span class="sp-label">32px - jarak antar kelompok form</span>
          </li>
          <li class="d-flex align-items-center gap-3 mb-2">
            <span class="sp-bar sp-48"></span><span class="sp-label">48px - jarak antar section</span>
          </li>
          <li class="d-flex align-items-center gap-3">
            <span class="sp-bar sp-64"></span><span class="sp-label">64px - jarak besar header/footer</span>
          </li>
        </ul>
      </section>

      <!-- 4. Tombol -->
      <section id="tombol" class="mb-5">
        <h2>4. Tombol</h2>
        <p>Tiga jenis (utama, outline, netral) x tiga ukuran; satu tombol utama per layar.</p>
        <h3>Utama - aksi paling penting</h3>
        <div class="d-flex flex-wrap gap-3 mb-4">
          <button type="button" class="btn btn-utama btn-lg">Lihat Katalog</button>
          <button type="button" class="btn btn-utama">Lihat Katalog</button>
          <button type="button" class="btn btn-utama btn-sm">Lihat Katalog</button>
          <button type="button" class="btn btn-utama" disabled>Stok Habis</button>
        </div>
        <h3>Outline - aksi penting kedua</h3>
        <div class="d-flex flex-wrap gap-3 mb-4">
          <button type="button" class="btn btn-outline-toko btn-lg">Tambah ke Keranjang</button>
          <button type="button" class="btn btn-outline-toko">Tambah ke Keranjang</button>
          <button type="button" class="btn btn-outline-toko btn-sm">Tambah ke Keranjang</button>
          <button type="button" class="btn btn-outline-toko" disabled>Tak Tersedia</button>
        </div>
        <h3>Netral - tindakan pendamping</h3>
        <div class="d-flex flex-wrap gap-3">
          <button type="button" class="btn btn-netral btn-lg">Bandingkan</button>
          <button type="button" class="btn btn-netral">Bandingkan</button>
          <button type="button" class="btn btn-netral btn-sm">Bandingkan</button>
          <button type="button" class="btn btn-netral" disabled>Nonaktif</button>
        </div>
      </section>

      <!-- 5. Kartu -->
      <section id="kartu" class="mb-5">
        <h2>5. Kartu Produk</h2>
        <p>Enam bagian tetap; varian hanya dari badge status, bukan dari wujud.</p>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <article class="card p-kartu h-100">
              <div class="card-body d-flex flex-column gap-2">
                <div class="d-flex justify-content-between align-items-start">
                  <span class="badge badge-terjual">Best Seller</span>
                  <i class="bi bi-display" aria-hidden="true"></i>
                </div>
                <h3 class="h5 card-title mb-0">Monitor IPS 24" MR-241</h3>
                <p class="text-secondary small mb-0">Layar</p>
                <p class="mb-0">Monitor IPS 24 inci full HD yang jernih untuk kerja tabel dan laporan.</p>
                <p class="h5 text-harga mb-0">Rp1.899.000</p>
                <div class="d-flex gap-2 mt-2">
                  <button type="button" class="btn btn-utama btn-sm">Tambah ke Keranjang</button>
                  <button type="button" class="btn btn-netral btn-sm">Detail</button>
                </div>
              </div>
            </article>
          </div>
          <div class="col">
            <article class="card p-kartu h-100">
              <div class="card-body d-flex flex-column gap-2">
                <div class="d-flex justify-content-between align-items-start">
                  <span class="badge badge-limited">Stok Terbatas</span>
                  <i class="bi bi-bluetooth" aria-hidden="true"></i>
                </div>
                <h3 class="h5 card-title mb-0">Speaker Bluetooth BT-5</h3>
                <p class="text-secondary small mb-0">Audio</p>
                <p class="mb-0">Speaker bluetooth portabel dengan suara bersih untuk presentasi kelompok.</p>
                <p class="h5 text-harga mb-0">Rp285.000</p>
                <div class="d-flex gap-2 mt-2">
                  <button type="button" class="btn btn-outline-toko btn-sm">Tambah ke Keranjang</button>
                  <button type="button" class="btn btn-netral btn-sm">Detail</button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 6. Badge -->
      <section id="badge" class="mb-5">
        <h2>6. Badge</h2>
        <p>Mapping baku: kuning = terlaris, hijau = aman, merah = urgensi, indigo = baru.</p>
        <div class="d-flex flex-wrap gap-2">
          <span class="badge badge-terjual">Best Seller</span>
          <span class="badge badge-tersedia">Tersedia</span>
          <span class="badge badge-limited">Stok Terbatas</span>
          <span class="badge badge-baru">Baru</span>
          <span class="badge badge-netral">Diproses</span>
        </div>
      </section>

      <!-- 7. Alert -->
      <section id="alert" class="mb-5">
        <h2>7. Alert</h2>
        <p>Latar tint dari token; ikon warna token, teks gelap; tanpa tombol tutup (butuh JavaScript).</p>
        <div class="alert alert-sukses d-flex align-items-center gap-2" role="alert">
          <i class="bi bi-check-circle-fill" aria-hidden="true"></i>
          <p class="mb-0">Pesanan berhasil dibuat. Kiriman disiapkan hari ini.</p>
        </div>
        <div class="alert alert-info-toko d-flex align-items-center gap-2" role="alert">
          <i class="bi bi-info-circle-fill" aria-hidden="true"></i>
          <p class="mb-0">Gratis ongkos kirim untuk belanja di atas Rp500.000 (wilayah Jabodetabek).</p>
        </div>
        <div class="alert alert-peringatan d-flex align-items-center gap-2" role="alert">
          <i class="bi bi-exclamation-triangle-fill" aria-hidden="true"></i>
          <p class="mb-0">Stok BT-5 tinggal sedikit - selesaikan pesanan sebelum minggu ini berakhir.</p>
        </div>
        <div class="alert alert-bahaya d-flex align-items-center gap-2" role="alert">
          <i class="bi bi-x-circle-fill" aria-hidden="true"></i>
          <p class="mb-0">Keranjang masih kosong - jelajahi katalog untuk mulai belanja.</p>
        </div>
      </section>

      <!-- 8. Form -->
      <section id="form" class="mb-5">
        <h2>8. Form</h2>
        <p>Status valid statis via kelas <code>is-valid</code> dan <code>is-invalid</code> - tanpa JavaScript.</p>
        <form action="#" method="get">
          <div class="row g-3">
            <div class="col-md-6">
              <label for="nama" class="form-label">Nama Lengkap</label>
              <input type="text" class="form-control is-valid" id="nama" name="nama" value="Aisyah Putri" required>
              <div class="valid-feedback">Nama terisi - bagus.</div>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control is-invalid" id="email" name="email" value="aisyah-kotak-pos" required>
              <div class="invalid-feedback">Format email belum benar - gunakan tanda @ dan titik.</div>
            </div>
            <div class="col-12">
              <label for="kategori" class="form-label">Kategori Pertanyaan</label>
              <select class="form-select" id="kategori" name="kategori">
                <option value="" selected>Pilih kategori</option>
                <option value="produk">Produk</option>
                <option value="pengiriman">Pengiriman</option>
                <option value="pengembalian">Pengembalian</option>
              </select>
            </div>
            <div class="col-12">
              <label for="pesan" class="form-label">Pesan</label>
              <textarea id="pesan" name="pesan" class="form-control" rows="3"
                placeholder="Tulis pertanyaan Anda tentang katalog Tokosaya."></textarea>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="setuju" name="setuju">
                <label class="form-check-label" for="setuju">Saya setuju dengan ketentuan layanan Tokosaya.</label>
              </div>
            </div>
            <div class="col-12 d-flex gap-2">
              <button type="submit" class="btn btn-utama">Kirim</button>
              <button type="reset" class="btn btn-netral">Hapus</button>
            </div>
          </div>
        </form>
      </section>

      <!-- 9. Navigasi -->
      <section id="navigasi" class="mb-5">
        <h2>9. Navigasi</h2>
        <p>Navbar desktop statis (perilaku buka-tutup membutuhkan JavaScript - lihat catatan 12.7) plus breadcrumb.</p>
        <nav class="site-nav navbar navbar-expand-lg" aria-label="Contoh navigasi Tokosaya">
          <div class="container-fluid px-0">
            <a class="navbar-brand" href="#">Tokosaya</a>
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Beranda</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Katalog</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Tentang</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Kontak</a></li>
            </ul>
            <a class="nav-link ms-auto" href="#" aria-label="Keranjang belanja">
              <i class="bi bi-cart3" aria-hidden="true"></i>
            </a>
          </div>
        </nav>
        <nav aria-label="Contoh breadcrumb" class="mt-3">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="#">Beranda</a></li>
            <li class="breadcrumb-item"><a href="#">Katalog</a></li>
            <li class="breadcrumb-item active" aria-current="page">Keyboard Mekanis KX-210</li>
          </ol>
        </nav>
      </section>
    </main>

    <footer class="border-top pt-4 mt-5">
      <p class="mb-1">© 2026 Tokosaya - Belanja Tepat, Kirim Cepat.</p>
      <p class="mb-0 small text-secondary">Jl. Digital Raya No. 10, Jakarta · halo@tokosaya.id · (021) 555-0199</p>
    </footer>
  </div>
</body>
</html>
```

Penjelasan: file ini adalah konsumen pertama dari `css/style.css` dan berisi sembilan section yang tersusun berurutan. Section warna menampilkan sepuluh swatch dengan kelas `warna-*`, lengkap dengan nama dan nilai heksanya; section tipografi memakai kelas skala Bootstrap (`h1`–`h3`, `lead`, `small`) di atas elemen `<p>` biar sampelnya nggak merusak jenjang heading dokumen; section tombol menampilkan matriks 3 jenis — 4 status termasuk varian `disabled`; dua kartu produk memuat dataset MR-241 dan BT-5 dengan badge status berbeda serta ikon kategori yang diberi warna `var(--clr-border)` supaya nggak berebut perhatian dengan judul; alert memakai `role="alert"`, struktur flex Bootstrap, dan ikon dekoratif `aria-hidden`; form memakai kelas statis `is-valid`/`is-invalid` buat mendemonstrasikan status tanpa JavaScript; dan navigasi memakai `aria-current="page"` buat item aktif. Navbar memakai `navbar-expand-lg`, jadi menu desktop tampil penuh di layar lebar; di layar sempit, tanpa JavaScript susunannya akan menumpuk, dan batas ini memang dicatat di dokumentasi sebagai v1.

Urutan sembilan section ini mengikuti alur materi bab: tiga section pertama (warna, tipografi, spasi) menampilkan token; enam section berikutnya (tombol, kartu, badge, alert, form, navigasi) menampilkan komponen. Penomoran pada judul section membuat susunan halamannya mudah dibaca semua orang, dan kalau nanti ada section baru, nomornya tinggal dilanjutkan dari nomor terakhir (kayak dibahas pada Tugas 1).

### Penjelasan Kode

**`css/style.css`.** Menaruh blok token di bagian paling atas berarti nilai warna, huruf, lengkung, bayangan, dan basis jarak hanya hidup di satu tempat. Jadi, pas `--clr-primary` diubah, tombol utama, swatch, badge "Baru", garis fokus, dan latar ikon alert ikut berubah sekaligus. Pola variannya mengikuti konvensi Bootstrap: kelas dasar `btn` menyediakan kerangka (padding, teks, transisi), sedangkan tiga kelas kustom menyediakan warna dari token. Karena `style.css` dimuat setelah CSS CDN, urutan kaskade membuat aturan inilah yang jadi hasil akhirnya. Kelas yang mengonsumsi `--bs-btn-focus-shadow-rgb` juga membuat sorotan fokus (akan dibahas lebih jauh di Bab 13) tetap indigo dan konsisten.

**`styleguide.html`.** Halaman ini memakai kontainer `.container` bawaan Bootstrap dengan utilitas jarak (`py-4`, `mb-5`, `gap-3`, `g-3`) yang semuanya bergerak di atas skala 8 piksel; inilah contoh praktis pemetaan pada tabel 12.6. Swatch memakai `row-cols-*` biar jumlah kolom otomatis menyesuaikan lebar layar; kartu warna `warna-surface` dan `warna-border` tetap terlihat karena `.swatch-blok` diberi tepi `var(--clr-border)`—detail kecil yang penting buat warna yang mirip latarnya. Struktur heading juga dijaga rapi: satu `h1`, lalu `h2` per section, dan `h3` per kelompok komponen (tombol) atau kartu—tanpa lompatan heading. Pada bagian form, `is-valid` menampilkan `valid-feedback` bawaan, sedangkan `is-invalid` menampilkan `invalid-feedback` merah; keduanya adalah kelas status murni CSS Bootstrap yang aman dipakai tanpa JavaScript.

### Hasil yang Diharapkan

Kalau langkah-langkah di atas kamu ikuti, `styleguide.html` akan menampilkan hal-hal berikut:

1. Sepuluh kartu warna dengan nama token dan nilai heksa yang sesuai (indigo `#4F46E5`, amber `#F59E0B`, hijau `#16A34A`, merah `#DC2626`, dan enam lagi sesuai tabel 12.4).
2. Enam sampel tipografi dari judul hero Poppins 700 hingga keterangan kecil Inter 500, masing-masing diberi label perannya.
3. Enam bar skala jarak (8/16/24/32/48/64 piksel) bernilai berbeda panjang pada barisnya.
4. Tiga grup tombol (utama, outline, netral) masing-masing dalam tiga ukuran plus satu varian nonaktif — total 12 tombol.
5. Dua kartu produk dataset (MR-241 dengan badge Best Seller, BT-5 dengan badge Stok Terbatas) yang struktur bagiannya identik, hanya badge dan ikonnya berbeda.
6. Lima badge dataset + satu badge netral; empat alert (sukses, info, peringatan, bahaya) berlatar tint dan ikon berwarna token; form dengan satu input valid (tanda hijau) dan satu input nggak valid (tanda merah) yang tampak langsung tanpa mengetik apa pun; navbar dan breadcrumb dengan link aktif indigo.
7. Satu-satunya `h1` adalah "Styleguide Tokosaya"; urutan heading nggak melompat; tagline dan kontak baku tampil di header/footer.

Secara terukur, ukuran file `css/style.css` bertambah sekitar 180 baris; semua kelas di styleguide mengonsumsi token lewat `var()`; nggak ada properti warna dengan nilai mentah di luar blok `:root` (label heksa pada swatch hanyalah teks dokumentasi, bukan gaya); dan utilitas jarak yang dipakai hanya `gap-2/3/4` serta `m-2/3/4/5`, yang tetap sejalan dengan skala 8 piksel.

### Troubleshooting

**Masalah:** Halaman styleguide menampilkan tanpa gaya sama sekali (semua teks hitam polos, tanpa kartu dan warna indigo).

**Penyebab:** Link CDN Bootstrap di `<head>` belum benar (salah ketik pada URL `bootstrap@5.3.3`) atau halaman dibuka tanpa koneksi internet, jadi CSS Bootstrap dan ikon ikut gagal dimuat.

**Solusi:** Periksa panel Network DevTools dan tanda merah pada baris CDN; pastikan `href` persis `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css` dan link Bootstrap Icons 1.11.3; sambungkan internet lalu muat ulang.

**Pencegahan:** Salin URL CDN dari KONTRAK §4 (teknologi terkunci) tanpa mengubah satu huruf; jangan mengetik ulang URL secara manual.

**Masalah:** Tombol kustom tampak polos (tanpa latar indigo, tanpa padding) meskipun kelas `btn-utama` udah ditulis.

**Penyebab:** Kelas `btn-utama` dipakai tanpa kelas dasar `btn`, sehingga kerangka tombol Bootstrap (bentuk, padding, transisi) nggak ikut terpasang; pola Bootstrap adalah kelas dasar + kelas varian.

**Solusi:** Ubah markup menjadi `class="btn btn-utama"`; lakukan juga buat `btn-outline-toko` dan `btn-netral`.

**Pencegahan:** Ingat pola dua lapis Bootstrap (Bab 9): kelas dasar menyediakan bentuk, kelas varian menyediakan warna; selalu cek styleguide sebagai pembanding.

**Masalah:** Semua tombol tetap biru (bukan indigo Tokosaya) walaupun kelas varian udah ada.

**Penyebab:** `css/style.css` nggak tertaut di `styleguide.html`, atau link `<link>` ke `css/style.css` ditulis sebelum link CDN Bootstrap sehingga aturan kustom ditimpa nilai baku Bootstrap.

**Solusi:** Pastikan urutan di `head`: CSS Bootstrap 5.3.3 dan Bootstrap Icons dulu, Google Fonts, lalu `css/style.css` paling bawah.

**Pencegahan:** Ingat sifat kaskade (Bab 3): file yang dimuat paling akhir memenangkan aturan dengan spesifisitas setara.

**Masalah:** Kartu warna `clr-surface` dan `clr-bg` tampak "hilang" (putih di atas putih).

**Penyebab:** Kelas `.swatch-blok` memang sengaja bertepi `var(--clr-border)`, tetapi kalau kelas tersebut terlewat (atau `.swatch` nggak menopang padding), kartu putih benar-benar menyatu dengan latar.

**Solusi:** Tambahkan kembali kelas `.swatch-blok` yang berisi `border: 1px solid var(--clr-border)` dan pastikan `.swatch` memuat `padding: 8px`.

**Pencegahan:** Buat warna yang mirip latar halaman, selalu sediakan garis tepi atau label pada swatch sejak desain pertama.

## Studi Kasus

**Design system kampus: kenapa tim SI membutuhkannya.** Amati kasus fiktif tetapi lazim berikut. Universitas Andalankara mengelola website pusat plus puluhan sub-website fakultas, program studi, unit layanan, dan laboratorium. Selama bertahun-tahun setiap unit menyusun halamannya sendiri: satu fakultas memilih tombol biru dengan teks biru muda, unit lain menyukai garis tepi tebal, dan dua unit menamai menu layanan akademik dengan label berbeda. Dampaknya bukan sekadar estetika: calon mahasiswa menduga halaman dengan wajah asing bukan milik universitas, staf unit baru menghabiskan waktu mingguan buat memahami halaman unit lain, setiap pembaruan identitas visual kampus harus disusun ulang di belasan sub-website, dan tim SI terus menjawab pertanyaan "yang warna mana yang benar?".

Solusi yang diambil kampus tersebut sama persis dengan yang kamu pelajari di bab ini, hanya dalam skala lebih besar: menetapkan satu design system dengan satu halaman styleguide pusat. Lapisan tokennya menetapkan warna institusi (satu merah, satu emas), pasangan huruf buat judul dan paragraf, dan skala jarak 8 piksel; lapisan komponennya menetapkan bentuk tombol (buka portal, unduh file), kartu berita fakultas, dan tiga varian form layanan (pendaftaran, pengajuan data, surat keterangan); lapisan aturannya menjelaskan mana peran yang sah: merah institusi cuma buat pesan bahaya, hijau cuma buat konfirmasi sukses. Seluruh sub-website dibangun ulang secara bertahap dengan menyalin pola dari styleguide, dan setiap varian baru terdokumentasi lebih dulu.

Hasilnya dinilai secara kualitatif tanpa diarang: halaman unit baru selesai lebih cepat karena anggota menyalin komponen baku, penyelarasan identitas visual cukup mengganti token pusat, penyerahan proyek ke anggota baru menimbulkan sedikit pertanyaan, dan keluhan pengguna bergeser dari "kebingungan visual" ke "isu materi" — tanda yang diharapkan dari sebuah sistem layanan. Perlu diketahui pula biayanya yang jujur: menyusun sistem menuntut komitmen waktu di awal, aturan perlu dijaga secara disiplin, dan styleguide harus dipelihara biar nggak jadi dokumen usang. Kasus ini cermin masalah Rara pada apersepsi; dan justru karena hal serupa, design system dikembangkan di industri, layanan publik, dan kampus: dengan sistem, tim SI menjaga konsistensi secara tertulis, bukan dengan mengandalkan selera masing-masing.

Kaitkan kasus ini dengan materi bab: hukum kedekatan dan kemiripan memandu penataan sub-website serupa; token semantik membuat pembaruan identitas kampus jadi satu perubahan; matriks varian mengendalikan bentuk tiga form layanan; dan styleguide pusat memungkinkan anggota baru memeriksa wajah keseluruhan dalam satu pembukaan. Proyek berkelanjutan kamu di Tokosaya menjalankan pola yang sama dalam skala mini lewat `styleguide.html`.

## Latihan Mandiri

1. Amati satu website layanan kampus (portal akademik, perpustakaan, atau e-ujian). Identifikasi empat prinsip 12.1 di dalamnya dan tulis satu paragraf per prinsip: satu contoh penerapan yang baik dan satu cacat yang ditemukan.
2. Buat tabel matrix varian buat komponen badge Tokosaya: baris = empat badge dataset (Best Seller, Tersedia, Stok Terbatas, Baru), kolom = token, makna, dan kelas varian yang diusulkan. Bandingkan usulanmu dengan bagian 12.7.
3. Cari tiga nilai jarak yang menyimpang dari kelipatan 8 piksel pada halaman web pilihanmu (pakai inspektur elemen browser) dan susun proposal perbaikannya memakai utilitas Bootstrap pada tabel 12.6.
4. Rancang perpanjangan token semantik buat aplikasi perpustakaan kampus: kebutuhan warna "buku tersedia", "sedang dipinjam", dan "terlambat". Tulis nama token, nilai yang diusulkan (dari palet Tokosaya atau tint dari token yang ada), dan alasannya.
5. Perbaiki satu halaman profil pribadimu sendiri memakai empat alat visual pada 12.2 dan dokumentasikan tiga perubahan: apa yang diubah, alat apa yang dipakai, dan kenapa hierarkinya membaik.
6. Tulis halaman styleguide mini (dua token warna + satu komponen tombol dua varian + satu kartu produk sederhana) buat proyek toko buku sekolahmu sendiri, dari awal sampai akhir, memakai pola dua file (token CSS + halaman HTML).

## Tugas

1. **Tugas individu — styleguide yang lengkap.** Lengkapi `styleguide.html` Tokosaya dengan section baru bernomor 10 yang berisi lima pasangan Do & Don't warna (misalnya tombol utama indigo vs tombol hijau; teks gelap di latar terang vs teks amber di latar putih) beserta satu kalimat alasan tiap pasangan. Keluaran yang dikumpulkan: file `styleguide.html` yang diperbarui dan catatan singkat (maksimal satu halaman). Kriteria: pasangan menggunakan token yang ada, penjelasan menyebut alasan contrast atau kemiripan, markup memenuhi aturan semantik buku (satu h1, label terhubung, tanpa gaya inline).
2. **Tugas kelompok (2–3 orang) — audit konsistensi.** Dengan `styleguide.html` sebagai satu sumber kebenaran, periksa tiga halaman riil proyek (`index.html`, `katalog.html`, halaman form/checkout) dan daftarkan semua perbedaan dari styleguide (warna, ukuran, jarak, label tombol). Keluaran yang dikumpulkan: satu tabel audit (kolom: halaman, temuan, token yang seharusnya, status perbaikan) plus usulan penambahan varian kalau ada. Kriteria: temuan merujuk prinsip atau token yang dilanggar, bukan selera pribadi.

## Refleksi

1. Sebelum bab ini, kapan terakhir kamu merasa "halaman ini kurang nyaman" tapi nggak mampu menjelaskan sebabnya; sekarang, bisa nggak kamu menunjukkan penyebabnya dengan istilah bab ini?
2. Di titik mana timmu terdorong menambah token baru? Apakah token itu benar-benar peran baru, atau nilai lama yang belum dinamai?
3. Styleguide yang nggak dipelihara berubah jadi dokumen yang menyesatkan. Siapa yang sebaiknya bertugas memelihara styleguide di proyek Tokosaya kamu, dan dengan ritme yang kayak apa?
4. Pas satu pihak meminta halaman yang seharusnya seragam tampil berbeda, argumen desain apa yang kamu pakai buat menolak atau menyetujuinya — dan di mana batas fleksibilitas yang sehat?

## Rangkuman

1. UI adalah wajah visual antarmuka; UX adalah pengalaman menyeluruh, dan keduanya dipandu oleh hierarki, konsistensi, usability, dan affordance.
2. Hukum gestalt menyederhanakan persepsi: kedekatan menganggap elemen yang berdempel satu kelompok; kemiripan menganggap elemen yang serupa serumpun.
3. Whitespace, alignment, contrast, dan repetition adalah empat alat visual yang menerjemahkan prinsip-prinsip di atas menjadi keputusan konkret.
4. Design system menyatukan token, komponen, pola, dan dokumentasi dalam satu sumber kebenaran yang mempercepat produksi dan memudahkan pemeliharaan.
5. Token semantik menamai peran (kayak `--clr-danger` buat merah `#DC2626`), sehingga perubahan nilai nggak mengubah seluruh halaman.
6. Tipografi Tokosaya memisahkan peran: Poppins buat judul, Inter buat paragraf, dengan skala ukuran Bootstrap sebagai kerangkanya.
7. Skala jarak 8 piksel mengurangi keputusan jarak dan dapat dipetakan dengan rapi ke utilitas Bootstrap berlangkah 4 piksel.
8. Komponen memiliki matriks varian yang menetapkan semua wajah sah: jenis, ukuran, dan status; varian di luar matriks nggak boleh lahir tanpa dokumentasi.
9. Styleguide adalah satu halaman yang menampilkan semua token dan semua komponen — konsumen pertama `css/style.css` dan pembanding setiap halaman produksi.
10. Kejujuran sistem: varian baru lahir bersama dokumentasinya, dan token yang tak dikonsumsi lewat `var()` adalah token yang nggak berlaku.

Bab ini menuntaskan bangunan visualmu; Bab 13 mengujinya pada dua dimensi yang belum diuji: apakah halaman tetap baik di layar sempit (responsive web design) dan apakah semua tombol dan pesan benar-benar terakses oleh semua pengguna (aksesibilitas, WCAG 2.2). Token dan komponen yang tersusun dalam styleguide hari ini adalah alat utama buat kedua audit itu: kontras yang dihitung dari token, jenjang heading yang disiplin, dan label yang terikat pada input adalah pintu masuknya — audit responsif dan aksesibilitas penuh atas seluruh proyek Tokosaya.

## Evaluasi

### Pilihan Ganda

1. Pernyataan yang paling tepat mengenai *design system* adalah…
   A. koleksi alat desain berbayar yang dipakai perusahaan besar
   B. kumpulan token, komponen, pola, dan aturan pemakaian yang terdokumentasi sebagai satu sumber kebenaran
   C. template siap pakai yang menggantikan halaman riil proyek
   D. file CSS raksasa yang berisi semua gaya tanpa dokumentasi

2. Pada form kontak Tokosaya, jarak label-input 8 piksel sedangkan jarak antarkelompok (identitas dan pengiriman) 24 piksel. Prinsip persepsi yang diterapkan adalah…
   A. hukum kemiripan
   B. hukum kedekatan
   C. affordance
   D. contrast

3. Contoh elemen yang affordancenya benar untuk aksi "unduh file akademik" adalah…
   A. teks abu-abu 12 piksel tanpa garis bawah di dalam paragraf
   B. tombol berlatar indigo dengan ikon unduhan dan teks "Unduh File"
   C. judul Poppins 700 tanpa pembeda apa pun
   D. gambar berukuran besar tanpa teks pendamping

4. Alasan utama memakai token semantik (misalnya `--clr-danger` alih-alih nilai heksa) adalah…
   A. token semantik lebih pendek untuk diketik
   B. browser memberi peringatan bila nilai mentah dipakai
   C. peran lebih stabil daripada nilai, sehingga nilai berganti tanpa mengubah pemakaian
   D. token semantik mempercepat pemuatan halaman

5. Pasangan jarak berikut yang TIDAK termasuk skala 8 piksel Tokosaya adalah…
   A. 8 dan 16 piksel
   B. 24 dan 32 piksel
   C. 30 dan 45 piksel
   D. 48 dan 64 piksel

6. Untuk memberi jarak bawah 16 piksel antara dua paragraf, kelas utilitas Bootstrap yang tepat adalah…
   A. `mb-3`
   B. `mb-2`
   C. `mb-4`
   D. `m-5`

7. Tujuan utama halaman styleguide pada design system adalah…
   A. menggantikan halaman riil selama pengembangan
   B. menyimpan arsip produk yang pernah dijual
   C. mendokumentasikan semua token dan komponen sehingga pola dapat diperiksa dan disalin
   D. mengelola transaksi penjualan Tokosaya

8. Tim promo membuat tombol "ajukan pengembalian" berwarna hijau `--clr-success` padahal itu aksi utama halaman. Cacat utama desain ini adalah…
   A. hijau tidak boleh dipakai pada tombol apa pun di seluruh proyek
   B. warna semantik dipakai dengan peran yang mengacaukan maknanya (hijau terikat pesan sukses, bukan aksi utama)
   C. tombol seharusnya memakai teks kuning agar tampak aktif
   D. tidak ada cacat; hijau adalah warna baku tombol utama Bootstrap

### Benar atau Salah

1. Hierarki visual hanya dapat dibangun melalui perbedaan warna pada teks.
2. Mengubah nilai `--clr-primary` pada blok token akan menyesuaikan tombol, badge, dan swatch yang mengonsumsinya melalui `var()`.
3. Matriks varian memuat semua varian sah sebuah komponen sehingga varian di luar matriks mudah dikenali sebagai pelanggaran.
4. Whitespace adalah ruang tidak produktif yang sebaiknya dihilangkan agar halaman lebih padat.

### Analisis Kode

**Soal 1.** Perhatikan cuplikan dari file uji latihan (bukan artefak final proyek):

```css
File: tokosaya-bootstrap/uji-analisis-1.css

.btn-promo-campuran {
  background-color: #4F46E5;
  border-color: #4F46E5;
  color: #FFFFFF;
  border-radius: 8px;
}
```

Tugas Anda: (a) sebutkan dua cacat cuplikan ini di mata design system Tokosaya beserta alasannya; (b) tulis ulang dua properti pertama yang memperbaiki cacat tersebut.

**Soal 2.** Perhatikan potongan halaman styleguide berikut:

```html
File: tokosaya-bootstrap/uji-analisis-2.html

<h1>Styleguide Tokosaya</h1>
<section>
  <h3>Warna Ajaib</h3>
  <div class="swatch">
    <div class="swatch-blok"></div>
  </div>
</section>
```

Tugas Anda: (a) sebutkan cacat struktur heading pada potongan ini dan mengapa itu masalah; (b) tulis perbaikannya minimal dua baris yang melengkapi kartu warna agar dokumentasinya bermanfaat.

### Soal Praktik

1. Dengan mengikuti struktur styleguide Tokosaya, tambahkan section baru "Do & Don't Warna" ke `styleguide.html` yang berisi dua pasangan contoh (satu pasangan disarankan, satu pasangan terlarang) beserta penjelasan satu kalimat. Tulis markup lengkap yang akan Anda tempel dan tentukan posisi section itu dalam urutan halaman.
2. Anda diminta menyusun styleguide mini (satu halaman) untuk aplikasi perpustakaan kampus: dua token warna semantik, satu skala jarak, dan satu tombol utama. Tulis blok `:root`, satu blok komponen tombol yang mengonsumsi token, dan kerangka HTML halaman styleguidenya.

### Kunci Jawaban

<details>
<summary>Klik untuk melihat kunci jawaban</summary>

**Pilihan Ganda:**

1. **B** — design system adalah token + komponen + pola + aturan yang terdokumentasi sebagai satu sumber kebenaran; opsi lain mengacaukannya dengan alat berbayar atau file gaya tanpa dokumentasi.
2. **B** — jarak yang berbeda antar kelompok memanfaatkan hukum kedekatan: dekat berarti satu kelompok, jauh berarti kelompok terpisah.
3. **B** — affordance benar saat isyarat visual (latar, ikon, label) sepadan dengan aksinya.
4. **C** — nilai berganti, makna peran tetap; seluruh pemakaian ikut berganti lewat `var()`.
5. **C** — 30 dan 45 piksel bukan kelipatan 8; skala baku adalah 8/16/24/32/48/64.
6. **A** — `mb-3` setara 1 rem = 16 piksel; `mb-2` = 8 piksel, `mb-4` = 24 piksel, `m-5` = 48 piksel.
7. **C** — styleguide mendokumentasikan token dan komponen untuk ditinjau dan disalin, bukan menggantikan halaman riil.
8. **B** — hijau tetap warna sah secara umum, tetapi pada sistem Tokosaya hijau terikat pesan sukses; aksi utama memakai warna utama indigo sesuai matriks varian.

**Benar atau Salah:**

1. **Salah** — hierarki dibangun dari ukuran, bobot, posisi, jarak, dan contrast, bukan warna saja.
2. **Benar** — semua pemakaian lewat `var()` mengikuti nilai token terbaru seketika.
3. **Benar** — matriks varian adalah daftar varian sah; varian di luarnya harus melalui dokumentasi.
4. **Salah** — whitespace memikul tugas penataan: napas, kelompok, dan fokus; ia bukan ruang sia-sia.

**Analisis Kode (ringkas):**

- Soal 1: (a) nilai warna ditulis mentah dua kali alih-alih `var(--clr-primary)`, sehingga perubahan identitas tidak ikut mempengaruhi aturan ini; disamping itu `border-radius: 8px` melanggar token `--radius` (12 piksel); (b) ganti dua baris pertama menjadi `background-color: var(--clr-primary);` dan `border-color: var(--clr-primary);`.
- Soal 2: (a) heading melompat dari `h1` langsung ke `h3` — jenjang heading harus berurutan (h1 → h2 → h3) agar struktur dokumen bermakna bagi pembaca dan alat bantu; (b) kartu warna kehilangan kelas warna (`warna-*`), nama token, dan nilai heksa — dokumentasi yang nilainya tak terbaca tidak dapat dipatuhi; perbaikan contoh: `<div class="swatch-blok warna-primary"></div>` dan `<p class="swatch-nama mb-0">clr-primary<br><small>#4F46E5</small></p>`.

**Soal Praktik (ringkasan):**

1. Jawaban lengkap memuat `<section id="dodont" class="mb-5">` dengan `h2`, ditempatkan setelah section navigasi agar nomor urut halaman tetap rapi; dua pasangan contoh memakai kelas varian yang sah, pasangan terlarang ditandai label "don't", dan setiap pasangan diberi satu kalimat alasan berbasis contrast atau kemiripan — tanpa menambah warna atau nilai baru di luar token.
2. Jawaban lengkap memuat blok `:root` dengan dua token semantik (misalnya `--clr-primary` dan `--clr-danger` untuk layanan perpustakaan), skala jarak 8/16/24/32/48/64 piksel, satu kelas tombol utama yang mengonsumsi token via `var()`, dan kerangka HTML satu `h1` dengan satu `section` per bagian; skor naik bila ada label token dan aturan pemakaian singkat.

</details>

## Referensi

1. Duckett, J. (2011). *HTML & CSS: Design and Build Websites*. Indianapolis: John Wiley & Sons.
2. Krug, S. (2014). *Don't Make Me Think, Revisited: A Common Sense Approach to Web and Mobile Usability* (3rd ed.). San Francisco: New Riders.
3. Norman, D. A. (2013). *The Design of Everyday Things* (Revised ed.). New York: Basic Books.
4. Bootstrap Team. (2024). *Bootstrap 5.3 documentation: components and theming*. getbootstrap.com (diakses 12 Januari 2026).
5. Robbins, J. N. (2018). *Learning Web Design* (5th ed.). Sebastopol: O'Reilly Media.