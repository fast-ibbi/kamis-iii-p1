# BAB 4 — Typography dan Visual Design dengan CSS

## Deskripsi Singkat

Bab ini menyempurnakan halaman Tokosaya dari "dokumen yang terbaca" menjadi "halaman yang berkarakter brand". Anda akan belajar tipografi web, memuat *font* resmi melalui Google Fonts, menyusun skala dan hierarki visual, menata sistem warna yang berkontras, serta mengekspresikannya sebagai *design token* berupa CSS *custom properties*. Praktikum membangun *landing page* Tokosaya dengan tipe dan warna terkurasi. Bab 5 kemudian membahas *box model* yang menjadi fondasi setiap *layout* yang rapi.

## Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa diharapkan mampu:

1. Menjelaskan peran tipografi dalam keterbacaan, identitas, dan pengalaman pengguna halaman web.
2. Mengimplementasikan Google Fonts (Poppins dan Inter) beserta *fallback stack* yang aman pada proyek Tokosaya.
3. Menerapkan properti tipografi dasar: *font-size*, *font-weight*, *line-height*, *letter-spacing*, *text-align*, *text-decoration*, dan *text-transform*.
4. Merancang skala tipografi berbasis `rem` dan hierarki visual yang konsisten, termasuk penggunaan `clamp()` secara ringkas.
5. Membangun sistem warna Tokosaya (indigo, amber, *slate*) lengkap dengan warna semantik dan pertimbangan rasio kontras WCAG.
6. Mengimplementasikan *border-radius*, *box-shadow*, *opacity*, dan *background* (solid dan *linear-gradient*) sesuai pola desain halaman.
7. Menerapkan design token sebagai CSS *custom properties* pada `:root` dan mengevaluasi manfaatnya untuk konsistensi antarhalaman.

## Capaian Pembelajaran

| Kode | Sub-Capaian | CPMK | Pertemuan | Asesmen |
|---|---|---|---|---|
| S4.1 | Menyusun tipografi web (Google Fonts, skala, hierarki) | CPMK 3, CPMK 7 | 4 | Praktikum, tugas |
| S4.2 | Membangun palet warna berkontras + token CSS | CPMK 3, CPMK 7 | 4, 12 | Praktikum, evaluasi bab |

Kedua sub-capaian berpijak pada CPMK 3 "Menerapkan CSS untuk membangun visual antarmuka" dan menyiapkan CPMK 7 "Menerapkan prinsip dasar UI/UX dan menyusun mini design system" yang dikembangkan penuh pada Bab 12.

## Kata Kunci

*typography* (tipografi — pilihan dan pengaturan huruf untuk keterbacaan dan identitas), *web font* (font diunduh dari layanan daring agar tampil konsisten di semua perangkat), *fallback stack* (daftar font pengganti bila font utama gagal dimuat), *type scale* (skala tipografi — rangkaian ukuran huruf yang beraturan), *visual hierarchy* (hierarki visual — susunan penekanan yang memandu mata pembaca), *contrast ratio* (rasio kontras — ukuran kejelasan teks terhadap latarnya, ambang AA 4,5:1 dan 3:1), *warna semantik* (warna yang bermakna status: sukses, bahaya, perhatian), *linear-gradient* (gradien berarah dari satu warna menuju warna lain), *CSS custom properties* (variabel CSS — nilai bernama yang dapat dirujuk dengan `var()`), *design token* (nilai keputusan desain bernama yang dihimpun di satu tempat agar seragam di seluruh antarmuka).

## Apersepsi

Kini bayangkan posisi Anda sebagai mahasiswa magang di bagian pengembangan website Tokosaya. Pada Bab 3 Anda berhasil menulis `style.css` versi pertama: teks berwarna, link berubah warna, dan halaman terbaca. Namun saat rapat pekanan, manajer konten menyampaikan sesuatu yang mengubah cara Anda melihat pekerjaan ini. Ia memaparkan dua tampilan beranda yang isinya persis sama, lalu menanyakan versi mana yang membuat pelanggan percaya. Versi pertama memakai font dan warna acak: judul kecil, paragraf besar, tombol abu-abu tipis. Versi kedua judulnya besar dan tegas, paragrafnya tenang, tombolnya indigo tegas dengan tagline "Belanja Tepat, Kirim Cepat". Hampir seluruh ruangan memilih versi kedua tanpa ragu.

Mengapa begitu, padahal kedua halaman menyampaikan teks yang sama? Sebab pembaca tidak hanya membaca kata; ia membaca bentuknya. Ukuran yang seimbang, jarak baris yang lega, dan warna yang konsisten memberi sinyal "website ini rapi, produknya pun jujur dan teratur". Dalam dunia sistem informasi, sinyal ini bukan kosmetik belaka. Website layanan akademik, portal rumah sakit, dan katalog UMKM memuat informasi penting yang kekeliruan membacanya berakibat nyata; tipografi dan warna yang baik menurunkan beban kognitif pembaca dan mempercepat keputusan.

Masalahnya, tanpa aturan main, tampilan rapi begitu mudah luruh: satu pengembang memakai warna biru, yang lain ungu, dan ukuran judul berubah setiap kali ada bug yang diperbaiki. Di sinilah bab ini memberi dua senjata: tipografi dan sistem warna sebagai disiplin desain yang diatur lewat CSS, serta *design token* berbasis CSS *custom properties* yang meredam kebiasaan "warna sembarangan" karena semuanya dikendalikan dari satu pusat di `:root`. Di akhir bab, Anda akan menerima tugas yang sama dengan praktik magang tadi: mengangkat landing page Tokosaya dari "terbaca" menjadi "berkarakter brand".

## Materi Pembelajaran

### 4.1 Typography dan Perannya dalam Web Design

*Typography* (tipografi) adalah seni dan teknik menyusun huruf — memilih jenisnya, menata ukuran, jarak, dan bobotnya — supaya teks mudah dibaca dan menyampaikan karakter. Dua istilah sering tertukar: *typeface* adalah keluarga desain huruf (misalnya Poppins), sedangkan *font* adalah wujud spesifik dari typeface dengan berat dan gaya tertentu (misalnya Poppins *Bold* 700). Dalam percakapan sehari-hari keduanya kerap dipakai saling menggantikan, tetapi membedakannya membantu Anda berbicara tepat dengan desainer.

Mengapa tipografi begitu penting dalam *web design*? Alasannya sederhana tapi kuat: mayoritas antarmuka web adalah teks. Judul produk, deskripsi, label form, pesan status, dan link semuanya huruf. Ketika teks ditata buruk — ukuran tidak beraturan, jarak baris sesak, semua kata dicetak tebal — pembaca lelah sebelum menemukan informasi yang ia cari. Prinsip desain produk Norman (2013) berbunyi: desain yang baik jujur mengkomunikasikan fungsinya. Pada teks, kejujuran itu diwujudkan melalui hierarki: judul tampak seperti judul, penjelasan tampak seperti penjelasan, tombol tampak seperti barang yang bisa ditekan.

Tipografi juga membentuk *identitas*. Typeface seperti "suara" teks: Poppins yang bulat dan geometris terasa ramah dan modern; Inter yang tenang dan tegak dirancang untuk antarmuka sehingga nyaman dibaca lama. Tokosaya menempatkan Poppins untuk judul agar terasa hangat sebagaimana toko UMKM, dan Inter untuk teks isi karena pembeli menghabiskan waktu membaca deskripsi produk. Kombinasi dua typeface ini pola yang umum di industri: satu untuk kepala, satu untuk badan teks.

Konteks sistem informasi memperkuat pembelajaran ini. Di sistem akademik, mahasiswa memindai jadwal kuliah dan transkrip dalam hitungan detik; hierarki ukuran yang benar membuat kolom penting menonjol. Di portal rumah sakit, instruksi waktu minum obat harus tetap jelas bagi pengguna usia lanjut, artinya ukuran teks tidak boleh terlalu kecil. Di katalog perpustakaan digital, jarak baris yang lapang membantu pembaca dengan kelelahan mata. Dalam semua contoh itu, tipografi adalah alat komunikasi layanan, bukan sekadar dekorasi.

Analogi praktis: tipografi adalah pakaian teks — tidak mengubah isi pembicaraan, tetapi menentukan kesan pertama dan kepercayaan pendengarnya. Anda akan memakainya lewat dua lapisan: memuat font yang tepat (4.2), mengaturnya dengan properti tipografi (4.3), di atas skala yang disiplin (4.4).

### 4.2 Menggunakan Google Fonts

Secara bawaan, browser memakai font sistem yang tampilannya beda di setiap perangkat. Windows menampilkan satu keluarga font, macOS yang lain, HP Android lagi. Untuk brand seperti Tokosaya, perbedaan itu melemahkan konsistensi: identitas visual harus sama persis di laptop pembeli maupun ponselnya. Solusinya adalah *web font*, yaitu font yang diunduh dari layanan daring saat halaman dibuka. Layanan paling umum dan gratis adalah Google Fonts (fonts.google.com), yang menyimpan ribuan typeface berlisensi terbuka.

Menyiapkan web font di HTML dilakukan dengan menaruh tag `<link>` di dalam `<head>` yang menunjuk ke file font Google Fonts. Untuk seluruh proyek Tokosaya pada buku ini, kita memakai URL terkunci berikut — salin persis seperti ini di setiap halaman:

```html
File: tokosaya-css/index.html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap">
```

Tag `<link>` di atas dimulai dari dua *preconnect* — instruksi agar browser menyiapkan jalur (membuka koneksi lebih awal) ke server font, sehingga unduhan sesudahnya lebih cepat. URL utama memuat dua parameter yang perlu Anda baca paham: `family=` meminta keluarga font beserta daftar ketebalan (`wght@400;500;600;700` untuk Poppins dan `400;500;600` untuk Inter), dan `display=swap` menyuruh browser menampilkan teks memakai font cadangan *sementara* web font belum selesai diunduh. Tanpa `swap`, pembaca di jaringan lambat bisa menatap ruang kosong; dengan `swap`, teks selalu terbaca, hanya "berganti pakaian" sesaat. Pola di atas mengikuti dokumentasi resmi Google Fonts di fonts.google.com.

Berapa pun indahnya typeface, sesekali unduhannya gagal — jaringan kampus menghalangi website pihak ketiga, atau browser lama tidak sanggup. Karena itu setiap pemakaian font wajib diiringi *fallback stack*: daftar cadangan yang dipisah koma, dari font yang paling diinginkan hingga kategori generik. Untuk Tokosaya kita menuliskannya:

```css
File: tokosaya-css/css/style.css
html {
  /* fallback stack: Inter lalu sans-serif generik */
  font-family: 'Inter', sans-serif;
}

h1, h2, h3 {
  font-family: 'Poppins', sans-serif;
}
```

Browser membaca daftar itu dari kiri ke kanan. Bila Inter tersedia, semua teks memakai Inter; bila tidak, pindah ke `sans-serif` generik milik perangkat. Halaman tidak pernah tampil tanpa huruf. Ketika menulis `font-family`, ingat tiga aturan kecil: nama yang mengandung spasi ditutup tanda kutip; penulisan kata tidak peka huruf besar-kecil; dan selalu akhiri stack dengan kategori generik (`sans-serif`, `serif`, atau `monospace`) sebagai jaring pengaman terakhir. Aturan ini terlihat sepele, tetapi lalainya adalah salah satu penyebab tampilan berubah sendiri di komputer klien.

### 4.3 Properti Tipografi

Dengan font terpasang, tugas Anda berikutnya adalah "menyetir" tampilannya. CSS menyediakan sekelompok properti bertema teks yang menjadi alat harian Anda. Tabel berikut merangkum yang paling kerap dipakai, kaitannya dengan konteks Tokosaya:

| Properti | Fungsi | Praktik umum di Tokosaya |
|---|---|---|
| `font-size` | Ukuran huruf | Dinyatakan dalam `rem` agar mengikuti skala (lihat 4.4) |
| `font-weight` | Ketebalan | 400 isi teks; 500/600 subjudul; 700 judul |
| `line-height` | Tinggi baris | 1,6 untuk paragraf; 1,2 untuk judul besar |
| `letter-spacing` | Jarak antarhuruf | Sedikit negatif untuk judul besar, positif untuk label kecil |
| `text-align` | Perataan | Rata kiri secara bawaan; `center` hanya di hero dan CTA |
| `text-decoration` | Garis hias teks | `none` untuk link menu; `underline` dipertahankan di link dalam paragraf |
| `text-transform` | Ubah bentuk huruf | `uppercase` untuk label kategori dan badge |
| `text-indent`, `white-space` | Dukungan lanjutan | Jarang dipakai pada pemula; pelajari bila dibutuhkan |

*Line-height* layak diberi perhatian khusus karena paling menentukan kenyamanan membaca. Nilai tanpa satuan seperti `1.6` berarti "1,6 × ukuran font", sehingga ikut membesar bila font dibesarkan — inilah alasan menuliskan `1.6` lebih andal daripada `24px`. Aturan praktis: teks panjang butuh baris yang longgar (1,5–1,7), sedangkan judul justru terlihat lebih kompak dan kuat dengan baris ketat (1,1–1,25). Coba rasakan bedanya saat membaca paragraf di Tokosaya dan di portal berita: perbedaan nyamannya bukan magis, melainkan pilihan angka yang disiplin.

*Letter-spacing* bekerja berlawanan arah pada dua ujung tangga ukuran: judul raksasa jadi lebih "bernapas" bila jaraknya dirapatkan (`-0.02em`), sementara label kapital kecil butuh jarak yang direnggangkan (`0.08em`) supaya tidak menyerupai gumpalan. Dua properti sering dilupakan pemula: `text-transform` yang menyelamatkan Anda dari mengetik kapital manual (KONTEN tetap ditulis "Konten" di HTML lalu diubah tampilannya), dan `text-decoration` yang perlu dinetralkan pada menu agar link tidak semua bergaris bawah.

Ingat pula konsep *inheritance* (warisan) dari Bab 3: properti teks seperti `font-family`, `color`, dan `line-height` diwariskan secara alami ke turunannya, sedangkan `font-size` dan jarak tidak. Karena itu pola praktik buku ini meletakkan warna dan *font-family* pada `html` atau `body`, baru mengecualikan elemen yang memang berbeda — kebiasaan yang menekan jumlah baris CSS dan konflik *kaskade* (*cascade*).

### 4.4 Skala Tipografi dan Hierarki Visual

Bayangkan memasuki halaman di mana setiap judul ditulis dengan ukuran yang jualan: 19px di sini, 21px sana, 23px di seberang. Mata pembaca takkan menemukan "pintu masuk". Solusinya adalah *type scale* (skala tipografi): rangkaian ukuran yang beraturan, biasanya berbentuk rasio, dari mana semua ukuran teks diambil. Skala mengubah keputusan ukuran dari rasa ("kayaknya terlalu kecil, deh") menjadi keputusan sistem ("ini level 3, jadi 1.25rem"). Untuk Tokosaya kita memakai skala berbasis `rem` — satuan yang mengacu pada ukuran font akar `html`, sehingga skala tetap koheren sekaligus siap disesuaikan responsif di Bab 13.

| Level | Ukuran | Rem (basis 16px) | Peran |
|---|---|---|---|
| Display | 48px | 3rem | Judul hero beranda |
| Heading 1 | 36px | 2.25rem | Judul utama halaman |
| Heading 2 | 30px | 1.875rem | Judul section |
| Heading 3 | 24px | 1.5rem | Judul kartu/kolom |
| Body besar | 20px | 1.25rem | Subjudul hero/CTA |
| Subjudul kartu | 18px | 1.125rem | Nama produk, lead section |
| Body | 16px | 1rem | Paragraf standar |
| Kecil | 14px | 0.875rem | Keterangan, tabel |
| Label | 12px | 0.75rem | Badge, label form |

Skala itu menggerakkan *visual hierarchy* (hierarki visual): tatanan penekanan yang memandu mata pembaca dari yang paling penting ke yang pendukung. Hierarki bukan sekadar urutan besar-kecil; ia memadukan ukuran, ketebalan, warna, dan ruang. Judul hero menang karena paling besar dan paling tebal; judul section menang atas teks isi karena lebih besar dan gelap; teks pendukung menyerah karena paling kecil dan paling redup. Sebagai peta bentuk, perhatikan ilustrasi berikut (bukan kode):

```text
Hierarki visual sebagai piramida perhatian

        [ Display 3rem ]          <- mata masuk di sini
       [   Heading 2    ]
      [     Body 1rem      ]
     [ Keterangan 0.875rem   ]
    [  Label 0.75rem (badge)   ]
makin ke bawah: makin kecil, makin redup, makin pendukung
```

CSS membuat hierarki ini hidup dengan satu trik: `clamp()`. Fungsi `clamp(min, preferred, max)` mengeket kunci ukuran sehingga teks tidak pernah terlalu kecil di HP maupun terlalu raksasa di monitor lebar. `font-size: clamp(2.25rem, 5vw, 3rem)` berarti: minimal 2,25rem, idealnya 5 persen lebar layar (pilih tengah keduanya yang tercapai), maksimal 3rem. Pola ini membumikan skala pada berbagai layar tanpa perlu penuh media query — media query dibedah penuh di Bab 7, dan pengembangannya di Bab 13.

Dua disiplin turut menopang hierarki, meskipun terdengar teknis: heading HTML tidak melompat level (`h1` ke `h2` ke `h3`) dan hanya ada satu `h1` per halaman — aturan yang sudah Anda terapkan di Bab 2. Perlu diingat: skala dan heading bukanlah hal yang sama; skala mengatur ukuran tampilan, sedangkan heading menyatakan makna. Mereka bekerja berpasangan seperti gelar jabatan dan seragamnya: gelar tetap benar walau seragamnya diganti, dan seragam tetap rapi selama ukurannya berasal dari skala.

### 4.5 Sistem Warna dan Kontras

*Sistem warna* (*color system*) adalah kumpulan warna terpilih yang berperan masing-masing, bukan tumpukan warna enak-dilihat. Warna di antarmuka memiliki tiga tugas: membangun identitas (brand), memandu alur perhatian (aksen pada elemen penting), dan mengomunikasikan makna (warna semantik). Tanpa peran yang jelas, warna berubah dari alat komunikasi menjadi kebisingan.

Palet Tokosaya terkunci sebagai berikut — dan inilah yang membedakan toko "berwarna" dari toko "berwarna-warni". Warna utama (*primary*) adalah indigo `#4F46E5`, digunakan untuk tombol dan link utama; warna gelapnya `#4338CA` untuk keadaan *hover* dan latar gradien. Warna aksen (*accent*) adalah amber `#F59E0B`, disediakan untuk sorotan seperti badge "Best Seller". Keluarga *slate* menjadi tulang punggung netral: `#1E293B` untuk heading dan teks tegas, `#334155` untuk teks paragraf, `#F8FAFC` untuk latar halaman, `#FFFFFF` untuk permukaan kartu, dan `#E2E8F0` untuk garis pemisah. Dua warna semantik menutup palet: hijau sukses `#16A34A` dan merah bahaya `#DC2626`.

Warna semantik adalah warna yang pembelanya paham maknanya tanpa membaca teks: hijau untuk status berhasil atau "tersedia", merah untuk error atau "habis", amber untuk perlu-perhatian. Di website perpustakaan, badge hijau "Dikembalikan" dan merah "Terlambat" menghemat pembaca dari mencermati satu per satu. Di Tokosaya, "Tersedia" ditandai hijau, "Best Seller" diberi amber sebagai penarik perhatian, "Baru" berindigo, dan "Stok Terbatas" disorot merah sebagai sinyal urgensi.

Namun, warna hanya bekerja bila cukup kontras. Ukurannya adalah *contrast ratio*: perbandingan luminansi warna teks dengan warna latarnya, dari 1:1 (tidak terlihat) hingga 21:1 (hitam murni di putih murni). Standar WCAG 2.2 menetapkan ambang *AA*: teks berukuran normal butuh minimal 4,5:1; teks besar (sekitar 24px, atau sekitar 18,7px yang dicetak tebal) cukup 3:1 (WCAG 2.2, kriteria 1.4.3). Dengan perhitungan yang disajikan standar ini, mari amati palet Tokosaya:

| Pasangan warna | Rasio kontras (perhitungan WCAG) | Status untuk teks kecil |
|---|---|---|
| `#334155` di atas `#F8FAFC` (teks isi) | ± 9,9:1 | Lolos |
| `#1E293B` di atas `#F8FAFC` (heading) | ± 14:1 | Lolos |
| Putih di atas `#4F46E5` (tombol indigo) | ± 6,3:1 | Lolos |
| Putih di atas `#4338CA` (tombol indigo gelap) | ± 7,9:1 | Lolos |
| `#1E293B` di atas `#F59E0B` (teks di badge amber) | ± 6,8:1 | Lolos |
| `#16A34A` di atas putih (teks hijau murni) | ± 3,3:1 | TIDAK lolos 4,5:1 |
| `#DC2626` di atas putih (teks merah murni) | ± 4,8:1 | Lolos tipis |

Tabel itu menyimpan pelajaran penting yang sering menghantam pemula: hijau dan ungu-biru pekat kerap gagal sebagai warna teks kecil di latar terang, meskipun tampaknya jelas. Hijau `#16A34A` di atas putih hanya ± 3,3:1 — cukup untuk teks sangat besar, gagal untuk label kecil. Karena itu pada badge Tokosaya kita membunuh dua burung: warna semantik diterapkan lewat latar tipis (*tint*, dibuat dengan `rgba()` dari warna token), sedangkan teks memakai warna gelap yang jauh di atas ambang. Pelajaran umumnya: verifikasi setiap kombinasi baru dengan penghitung kontras; jangan mempercayai mata di layar yang terlalu terang. Verifikasi mendalam beserta *focus state* dibahas kembali pada Bab 13.

### 4.6 Background: Solid dan Gradient

Properti `background-color` mengisi permukaan dengan satu warna solid dan menjadi andalan sehari-hari: badan halaman `#F8FAFC`, kartu `#FFFFFF`. Namun, warna solid punya satu keterbatasan psikologis: ia datar. Untuk area khusus seperti *hero* — bagian besar di puncak halaman yang menampung pesan utama — desainer sering menginginkan kedalaman. Di sinilah *linear-gradient* masuk.

Fungsi `linear-gradient(arah, warna1, warna2, ...)` menghasilkan gambar gradasi dari satu warna ke warna berikutnya sepanjang arah tertentu. Arah bisa kata (`to bottom`, `to bottom right`) atau sudut berderajat (`180deg`). Contoh hero Tokosaya mencampur indigo utama dengan versi gelapnya:

```css
File: tokosaya-css/css/style.css
/* Hero: gradien indigo dari primary menuju primary-dark */
.hero {
  background-image: linear-gradient(to bottom right, #4F46E5, #4338CA);
}
```

`to bottom right` memulai warna dari pojok kiri atas (indigo) lalu menggesernya diagonal ke pojok kanan bawah (indigo gelap). Anda bisa meminta tiga titik batas warna (*color stops*) untuk kesan lebih kaya, tetapi gradien dua warna yang senada biasanya cukup dan lebih mudah dirawat. Gradien pun tak harus mencolok: kombinasi `#1E293B` ke `#334155` berarah ke bawah sering dipakai untuk *footer* agar kaki halaman terasa berat dan memegang perhatian sesaat.

Dua aturan penggunaan perlu Anda pegang. Pertama, gunakan gradien seperti bumbu: satu-dua titik per halaman (hero, CTA), bukan pada setiap kartu; permukaan membaca seperti kartu produk tetap solid putih. Kedua, amati kontras teks di atasnya: putih di atas gradien indigo adalah ± 6,3:1 hingga 7,9:1 — aman, karena ujung paling terang pun masih di atas 4,5:1. Bila gradien Anda lebih terang di salah sisi, pergelapkan warna mulainya atau tambahkan lapisan gelap tipis di belakang teks. Banner pendaftaran pelatihan di portal kampus bekerja dengan prinsip sama: area bersemangat, teks tetap terbaca.

### 4.7 Membulat dan Melembutkan

Tiga properti terakhir dari perangkat visual CSS memungkinkan halaman terasa "bernapas" tanpa gambar tambahan: *border-radius*, *box-shadow*, dan *opacity*. Ketiganya bekerja seperti bingkai dan tata ruang interior: meredam tajamnya sudut, memberi rasa kedalaman.

*Border-radius* membulatkan pojok kotak. Nilainya bisa satu angka (`border-radius: 12px` — membulatkan semua pojok, pilihan untuk Tokosaya), per pojok (`border-radius: 12px 12px 0 0` untuk kartu yang menyatu dengan tab di atasnya), atau angka setengah dimensi (`999px`) yang menjadikan pill sempurna untuk tombol dan badge. Angka yang lebih besar dari setengah lebar elemen otomatis dibatasi, sehingga `999px` menjadi pola "pil" yang aman di semua ukuran.

*Box-shadow* memberi bayangan di belakang kotak dan bekerja seperti tumpukan kertas di meja: semakin "tinggi" kertasnya, semakin lebar bayangannya. Sintaksnya `box-shadow: offsetX offsetY blur spread warna`. Tokosaya menyimpan bayangan kartu dalam token `--shadow-card: 0 8px 24px rgba(15, 23, 42, 0.08)`: offset vertikal 8px, kabur 24px, dan warna hitam-kebiru hampir transparan (8%). Bayangan lembut seperti ini memberi rasa terangkat tanpa kontur kasar. Gunakan secara hemat: kartu produk dan panel form pantas "terangkat"; paragraf biasa tidak.

*Opacity* menyetel tembus pandang seluruh elemen dari `1` (pekat) hingga `0` (tak terlihat). Penerapan paling berguna: meredupkan elemen yang nonaktif (kartu habis stok) dan membentuk warna berlapis — `rgba()` hanya menyetel tembus pandang warna, sehingga `rgba(22, 163, 74, 0.12)` di latar putih menghasilkan tint hijau muda yang tepat untuk badge. Trik ini satu kunci yang membuka banyak pintu visual nanti: tint, garis halus, dan overlay.

### 4.8 Design Token: CSS Custom Properties

Sekarang kita menutup lingkaran dengan lapisan yang menyatukan semua itu. Coba hitung berapa kali indigo `#4F46E5` muncul di satu halaman Tokosaya: tombol, link, keranjang, gradien hero, badge "Baru". Bila besok warna brand ditukar dan Anda memikul penggantian di sepuluh tempat empat file CSS, pasti ada satu tempat terlewat — dan kontrak visual brand retak. Solusinya adalah *design token*: nilai keputusan desain yang diberi nama dan disimpan di satu tempat agar seluruh antarmuka merujuk ke sana.

CSS menyediakan mekanisme token resminya: *CSS custom properties* (CSS variables). Token dinyatakan dengan awalan dua tanda hubung — `--clr-primary: #4F46E5;` — biasanya di dalam `:root`, selector yang menyasar akar dokumen sehingga variabelnya tersedia seluruh halaman, lalu dirujuk dengan `var(--clr-primary)`. Beda dengan nilai CSS biasa, custom properties ikut diwariskan (*inheritance*): token pada `:root` otomatis tersedia bagi seluruh elemen, dan bila dinyatakan ulang di suatu elemen, hanya elemen itu beserta keturunannya yang memakai nilai baru. Pola "terapkan di atas, timpa bila perlu" ini masih kaskade yang Anda kuasai di Bab 3 — kali ini yang "menetes" adalah variabel, bukan properti biasa. Berikut token baku Tokosaya sesuai spek proyek — gunakan persis ini di `css/style.css`:

```css
File: tokosaya-css/css/style.css
:root {
  --clr-primary: #4F46E5;      /* indigo — tombol & link utama */
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
```

Blok ini valid CSS utuh yang dapat diketik dan disimpan. Perhatikan penamaannya: kebab-case, berawalan `--clr-` untuk warna dan `--font-` untuk tipografi. Nama mengungkap makna (`--clr-primary`), bukan nilai (`--indigo`): jika suatu saat warna brand bergeser dari indigo ke biru, hanya satu baris yang berubah. Token jarak `--space-unit` bekerja lewat `calc()`: `padding: calc(var(--space-unit) * 3)` menghasilkan 24px, dan seluruh jarak halaman mengikuti kelipatan 8px — skala 8/16/24/32/48/64 yang akan Anda kunci pada Bab 12.

Kapan memakai token? Setiap nilai yang harus konsisten: warna brand, warna semantik, font, radius, bayangan, satuan jarak. Kapan tidak? Nilai yang memang sekali pakai — token yang terlalu banyak sama buruknya dengan warna yang berantakan. Di proyek ini token menjadi dasar: Bab 5 memakainya untuk mengatur jarak komponen, Bab 12 menaikkan statusnya menjadi *design system*, dan saat Bootstrap tiba di Bab 9 Anda akan menyadari framework itu pun menyimpan keputusannya sebagai custom properties — buku ini mengajarkan Anda menuliskannya sendiri lebih dulu.

```text
Ilustrasi alir token (bukan kode):

  :root { --clr-primary: #4F46E5; }
          |
          | var(--clr-primary)  diwariskan ke seluruh halaman
          v
  .btn    .link   .hero    .badge--baru
  tombol   tautan  gradien   badge
          |
          v
  Ubah nilai di :root (satu tempat) -> SEMUA komponen ikut berubah
```

## Konsep Penting

| Konsep | Inti yang harus diingat |
|---|---|
| Tipografi | Menyusun huruf untuk keterbacaan + identitas; mayoritas antarmuka adalah teks |
| Typeface vs font | Typeface = keluarga desain huruf; font = wujud spesifik (berat/gaya) |
| Web font | Font daring (Google Fonts) menjaga tampilan konsisten di semua perangkat |
| Fallback stack | Daftar font koma-koma, ditutup kategori generik, menangani kegagalan unduh |
| display=swap | Teks tetap terbaca memakai font cadangan saat web font belum selesai |
| Line-height unitless | 1.6 untuk paragraf, 1.1–1.25 untuk judul; ikut membesar bersama font |
| Type scale | Rangkaian ukuran rem yang disiplin: 3 / 2.25 / 1.875 / 1.25 / 1 / 0.875 / 0.75 |
| clamp() | `clamp(min, preferred, max)` menjaga ukuran teks di semua lebar layar |
| Warna semantik | Hijau sukses, merah bahaya, amber sorotan — makna konsisten antarhalaman |
| Contrast ratio | AA tetap 4,5:1 (teks normal), 3:1 (teks besar); verifikasi tiap kombinasi |
| linear-gradient | `linear-gradient(arah, warna...)` untuk hero/CTA; solid untuk kartu |
| border-radius | 12px untuk kartu Tokosaya; 999px untuk pill; per-pojok bila dibutuhkan |
| box-shadow | Membangun rasa elevasi; bayangan kartu Tokosaya disimpan sebagai token |
| CSS custom properties | Dinyatakan di `:root`, dirujuk `var()`, diwariskan turunannya, dapat ditimpa |
| Design token | Nilai desain bernama: konsisten, ganti sekali, jadi fondasi design system |

## Contoh Kode

Tiga contoh berikut berdiri sendiri: halaman demo tipografi HTML, lembar gayanya, dan demonstrasi token. Ketik ulang ketiganya di dalam folder `tokosaya-css/` untuk melihat seluruh materi bab dalam satu wadah kecil.

### Contoh 1 — Halaman demo tipografi

```html
File: tokosaya-css/demo-tipografi.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo Tipografi Tokosaya</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap">
  <link rel="stylesheet" href="css/demo-tipografi.css">
</head>
<body>
  <main class="demo-card">
    <h1>Tokosaya</h1>
    <p class="demo-lead">Belanja Tepat, Kirim Cepat.</p>

    <h2>Produk Unggulan</h2>
    <article>
      <h3>Keyboard Mekanis KX-210</h3>
      <p>Keyboard mekanis 87 tombol dengan switch biru.</p>
      <span class="demo-badge demo-badge--sorotan">Best Seller</span>
    </article>

    <p class="demo-note">Skala berjalan dari 3rem ke 0.75rem tanpa ukuran liar.</p>
  </main>
</body>
</html>
```

### Contoh 2 — Lembar gaya demo tipografi

```css
File: tokosaya-css/css/demo-tipografi.css
:root {
  --clr-primary: #4F46E5;
  --clr-primary-dark: #4338CA;
  --clr-accent: #F59E0B;
  --clr-dark: #1E293B;
  --clr-body: #334155;
  --clr-bg: #F8FAFC;
  --clr-surface: #FFFFFF;
  --clr-border: #E2E8F0;
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  --radius: 12px;
  --shadow-card: 0 8px 24px rgba(15, 23, 42, 0.08);
  --space-unit: 8px;
}

html {
  font-family: var(--font-body);
  color: var(--clr-body);
  background-color: var(--clr-bg);
  line-height: 1.6;
}

.demo-card {
  max-width: 640px;
  margin: calc(var(--space-unit) * 8) auto;
  padding: calc(var(--space-unit) * 5);
  background-color: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
}

h1, h2, h3 {
  font-family: var(--font-heading);
  color: var(--clr-dark);
  line-height: 1.2;
}

h1 { font-size: clamp(2.25rem, 5vw, 3rem); }
h2 { font-size: 1.875rem; margin-top: calc(var(--space-unit) * 4); }
h3 { font-size: 1.5rem; }

.demo-lead {
  font-size: 1.25rem;
  color: var(--clr-primary);
}

.demo-badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.demo-badge--sorotan {
  background-color: var(--clr-accent);
  color: var(--clr-dark); /* teks gelap agar kontras di atas amber */
}

.demo-note {
  font-size: 0.875rem;
  color: var(--clr-body);
}
```

### Contoh 3 — Demonstrasi penimpaan token pada sub-pohon

```html
File: tokosaya-css/demo-token.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo Penimpaan Token Tokosaya</title>
  <link rel="stylesheet" href="css/demo-tipografi.css">
</head>
<body>
  <!-- khusus demonstrasi: inline style demi melihat penimpaan token pada sub-pohon -->
  <main class="demo-card">
    <p>Paragraf ini memakai warna token global --clr-body.</p>
    <article style="color: var(--clr-primary);">
      <h3>Kartu ini menimpa warna teksnya memakai var(--clr-primary)</h3>
      <p>Paragraf di dalamnya ikut kebiru karena mewarisi color dari articletnya.</p>
    </article>
  </main>
</body>
</html>
```

## Penjelasan Kode

Pada **Contoh 1 dan Contoh 2**, alurnya patut dibaca sebagai satu kesatuan. HTML menarik font lewat tiga tag `<link>` (dua *preconnect*, satu stylesheet) dan memuat CSS secara eksternal — pola standar Bab 3, kini bertambah baris font. CSS membuka lembar gaya dengan blok `:root` berisi seluruh token baku Tokosaya; inilah "buku warna" halaman. Keputusan selanjutnya menulis ulang makna, bukan nilai: `font-family: var(--font-heading)` dan `border-radius: var(--radius)` berbunyi seperti kalimat, dan bila besok Poppins digantikan, hanya satu baris token yang berubah.

Perhatikan pula pembagian kerja tipografi yang sengaja ditampilkan: paragraf memakai `line-height: 1.6` (nilai tanpa satuan yang ikut membesar), judul memakai 1,2 yang rapat supaya terasa kokoh, dan `h1` memakai `clamp(2.25rem, 5vw, 3rem)` supaya tetap proporsional antara HP dan desktop tanpa media query. Badge "Best Seller" melekat pada tiga kesepakatan sekaligus: warna amber sebagai identitas visual, teks gelap agar kontrasnya dijamin, dan `text-transform: uppercase` + `letter-spacing: 0.08em` agar kapital mungil tidak menjadi gumpal — kombinasi properti tipografi yang diperkenalkan di 4.3. Jarak menggunakan `calc(var(--space-unit) * n)` supaya seluruh ritme jarak mengikuti kelipatan 8px.

Pada **Contoh 3**, demonstrasi (satu-satunya penggunaan *inline style* di bab ini, sengaja diberi label) memakai `style="color: var(--clr-primary)"` pada elemen `<article>`. Karena custom properties ikut *inheritance*, nilai token menurun ke tiap anaknya: paragraf di dalam `<article>` ikut kebiru tanpa CSS tambahan, sementara `h3` tetap gelap karena warnanya diatur langsung oleh stylesheet. Inilah beda token dengan konstanta pada file terpisah: token hidup di lingkup kaskade. Gunakan penimpaan semacam ini secara terbatas (semisal versi gelap dari suatu panel), karena bila terlalu sering Anda akan kehilangan jejak nilai mana yang menang di tiap titik.

## Praktikum

### Tujuan Praktikum

Membangun awal *landing page* Tokosaya (`tokosaya-css/index.html`) yang terdiri dari hero dan dua section — Sorotan Produk dan CTA — dengan seluruh tipografi dan warna dikendalikan design token (CSS custom properties) sesuai spek bab ini. Praktikum mengubah apa yang Anda pelajari di 4.1–4.8 menjadi halaman yang benar-benar menampilkan karakter brand: font Poppins + Inter terpola, palet indigo/amber/slate terpasang, dan hierarki visual terukur.

### Kebutuhan

1. Hasil proyek Bab 3 (folder `tokosaya-css/` berisi `index.html`, `tentang.html`, `kontak.html`, dan `css/style.css`) — atau Anda dapat memulai folder baru mengikuti langkah persiapan.
2. Editor Visual Studio Code.
3. Google Chrome (atau browser chromium) — hanya untuk membuka dan mengamati halaman, tanpa inspeksi khusus.
4. Koneksi internet untuk menarik Google Fonts (bila offline, halaman tetap terbuka dengan font cadangan — justru itu bagian pelajaran *fallback stack*).
5. Daftar token Tokosaya pada subbab 4.8 bab ini sebagai acuan nilai warna.

### Persiapan

1. Pastikan struktur folder Anda sebagai berikut: `tokosaya-css/index.html` dan `tokosaya-css/css/style.css`. Jika folder proyek belum ada, buat dua folder: `tokosaya-css/` beserta subfolder `css/`.
2. Buka `index.html` lama Anda. Kita akan menimpa isinya dengan versi landing page baru; bila ingin menyimpan versi Bab 2, salin dulu sebagai `index-lama.html`.
3. Buka `css/style.css` dan perhatikan aturan yang ada di sana dari Bab 3. Praktikum ini menimpa isi file dengan struktur yang lebih rapi; pindahkan dulu apa pun yang ingin dijaga ke catatan Anda.
4. Siapkan satu jendela bertuliskan token Tokosaya (4.8) untuk keperluan pemeriksaan silang.

### Langkah Kerja

1. Tulis kerangka `index.html`: deklarasi `<!DOCTYPE html>`, atribut `lang="id"`, `meta charset` + `meta viewport`, `<title>` "Tokosaya — Belanja Tepat, Kirim Cepat", tiga tag `<link>` Google Fonts, dan tag `<link rel="stylesheet" href="css/style.css">`.
2. Bangun `<header class="site-header">` berisi navbar statis: logo teks "Tokosaya", link navigasi baku (Beranda, Katalog, Tentang, Kontak) dan kata "Keranjang" di kanan — target link dipetakan pada bagian Kode.
3. Bangun hero: `h1` judul baku "Peralatan Kerja Digital untuk Semua", paragraf subjudul, tombol `<a>` "Lihat Katalog" yang meluncur ke `#produk`.
4. Bangun section `#produk` dengan judul `h2`, paragraf lead, dan grid kartu 8 produk baku Tokosaya (setiap kartu: badge, `h3` nama, label kategori, paragraf deskripsi, harga).
5. Bangun section CTA berlatar gradien dengan tagline "Belanja Tepat, Kirim Cepat" dan tombol menuju `#kontak`.
6. Tutup halaman dengan `<footer class="site-footer">` berisi kontak baku: Jl. Digital Raya No. 10, Jakarta; halo@tokosaya.id; (021) 555-0199.
7. Buka `css/style.css` dan tulis blok token `:root` lengkap (persis 4.8), lalu reset ringkas (mengatur `*` dengan margin 0, box-sizing border-box, dan `img { display: block; max-width: 100%; }`).
8. Tulis tipografi dasar: `html` memakai `var(--font-body)`; `h1`–`h3` memakai `var(--font-heading)` dan hierarki skala 4.4; paragraf memakai `--clr-body`; heading memakai `--clr-dark`.
9. Tulis style hero (gradien indigo, teks putih), badge (base + 4 varian semantik), kartu produk, section CTA, dan footer memanfaatkan token; akhiri dengan satu *media query* ringkas untuk menyusun kartu menjadi satu kolom di layar sempit.
10. Buka `index.html` di browser; amati tampilan di lebar sempit (geser jendela) dan lebar; cocokkan warna pada jendela pengamatan token di Persiapan.

### Kode

Berikut file HTML lengkap landing page. Perhatikan bahwa semua target link diarahkan ke halaman/bagian yang ada (katalog.html dan produk.html dibangun di bab-bab selanjutnya, jadi link Katalog sementara menuju `#produk`).

```html
File: tokosaya-css/index.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tokosaya — Belanja Tepat, Kirim Cepat</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <div class="site-brand">Tokosaya</div>
    <nav class="site-nav" aria-label="Navigasi utama">
      <a href="index.html" class="site-nav-link">Beranda</a>
      <!-- katalog.html dibangun di Bab 7; sementara diarahkan ke bagian produk -->
      <a href="#produk" class="site-nav-link">Katalog</a>
      <a href="tentang.html" class="site-nav-link">Tentang</a>
      <a href="kontak.html" class="site-nav-link">Kontak</a>
      <a href="#produk" class="site-nav-cart">Keranjang</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <h1 class="hero-title">Peralatan Kerja Digital untuk Semua</h1>
      <p class="hero-subtitle">Keyboard, mouse, hingga monitor — pilih perangkat
        kerja Anda dengan harga UMKM yang jujur.</p>
      <a href="#produk" class="hero-cta">Lihat Katalog</a>
    </section>

    <section id="produk" class="section">
      <h2 class="section-title">Sorotan Produk</h2>
      <p class="section-lead">Delapan produk terpilih dari katalog Tokosaya.</p>

      <div class="produk-grid">
        <article class="produk-card">
          <span class="produk-badge produk-badge--bestseller">Best Seller</span>
          <h3 class="produk-name">Keyboard Mekanis KX-210</h3>
          <p class="produk-kategori">Aksesori Input</p>
          <p class="produk-deskripsi">Keyboard mekanis 87 tombol dengan switch biru untuk kerja lama yang nyaman.</p>
          <p class="produk-harga">Rp650.000</p>
        </article>

        <article class="produk-card">
          <span class="produk-badge produk-badge--tersedia">Tersedia</span>
          <h3 class="produk-name">Mouse Wireless MW-88</h3>
          <p class="produk-kategori">Aksesori Input</p>
          <p class="produk-deskripsi">Mouse wireless 2,4 GHz dengan sensor presisi 1600 DPI.</p>
          <p class="produk-harga">Rp185.000</p>
        </article>

        <article class="produk-card">
          <span class="produk-badge produk-badge--tersedia">Tersedia</span>
          <h3 class="produk-name">Headphone Studio HS-15</h3>
          <p class="produk-kategori">Audio</p>
          <p class="produk-deskripsi">Headphone over-ear dengan bantalan lembut untuk rapat audio jangka panjang.</p>
          <p class="produk-harga">Rp425.000</p>
        </article>

        <article class="produk-card">
          <span class="produk-badge produk-badge--bestseller">Best Seller</span>
          <h3 class="produk-name">Monitor IPS 24" MR-241</h3>
          <p class="produk-kategori">Layar</p>
          <p class="produk-deskripsi">Monitor IPS 24 inci full HD yang jernih untuk kerja tabel dan laporan.</p>
          <p class="produk-harga">Rp1.899.000</p>
        </article>

        <article class="produk-card">
          <span class="produk-badge produk-badge--tersedia">Tersedia</span>
          <h3 class="produk-name">Flash Drive 64GB FD-64</h3>
          <p class="produk-kategori">Penyimpanan</p>
          <p class="produk-deskripsi">Flash drive 64GB untuk arsip dokumen dan tugas mahasiswa.</p>
          <p class="produk-harga">Rp95.000</p>
        </article>

        <article class="produk-card">
          <span class="produk-badge produk-badge--tersedia">Tersedia</span>
          <h3 class="produk-name">Charger Cepat 30W CP-30</h3>
          <p class="produk-kategori">Daya</p>
          <p class="produk-deskripsi">Charger 30W untuk pengisian cepat ponsel dan tablet saat mengetik di kafe.</p>
          <p class="produk-harga">Rp120.000</p>
        </article>

        <article class="produk-card">
          <span class="produk-badge produk-badge--stok-terbatas">Stok Terbatas</span>
          <h3 class="produk-name">Speaker Bluetooth BT-5</h3>
          <p class="produk-kategori">Audio</p>
          <p class="produk-deskripsi">Speaker bluetooth portabel dengan suara bersih untuk presentasi kelompok.</p>
          <p class="produk-harga">Rp285.000</p>
        </article>

        <article class="produk-card">
          <span class="produk-badge produk-badge--baru">Baru</span>
          <h3 class="produk-name">Webcam HD WC-720</h3>
          <p class="produk-kategori">Video</p>
          <p class="produk-deskripsi">Webcam 720p dengan mikrofon bawaan untuk kelas online dan wawancara.</p>
          <p class="produk-harga">Rp310.000</p>
        </article>
      </div>
    </section>

    <section class="cta" id="kontak">
      <h2 class="cta-title">Belanja Tepat, Kirim Cepat</h2>
      <p class="cta-text">Tanya dulu, baru beli — tim Tokosaya siap membantu Anda
        memilih perangkat yang pas dengan kebutuhan dan kantor kecil Anda.</p>
      <a href="kontak.html" class="cta-button">Hubungi Kami</a>
    </section>
  </main>

  <footer class="site-footer">
    <p class="site-footer-brand">Tokosaya</p>
    <p>Jl. Digital Raya No. 10, Jakarta — halo@tokosaya.id — (021) 555-0199</p>
    <p class="site-footer-copy">Edisi pelatihan mahasiswa Sistem Informasi.</p>
  </footer>
</body>
</html>
```

Lanjutkan dengan lembar gaya lengkap; token di bagian atas adalah inti praktikum. *Media query* di bagian akhir hanya dua aturan penataan ringkas — pembahasan penuhnya di Bab 7.

```css
File: tokosaya-css/css/style.css
/* ===== Design token Tokosaya (baku seluruh proyek) ===== */
:root {
  --clr-primary: #4F46E5;      /* indigo — tombol & link utama */
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

/* ===== Reset ringkas ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  display: block;
  max-width: 100%;
}

/* ===== Tipografi dasar (skala rem, lihat 4.4) ===== */
html {
  font-family: var(--font-body);
  color: var(--clr-body);
  background-color: var(--clr-bg);
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: var(--font-heading);
  color: var(--clr-dark);
  line-height: 1.2;
}

a {
  color: var(--clr-primary);
  text-decoration: none;
}

/* ===== Header & navigasi statis ===== */
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(var(--space-unit) * 2) calc(var(--space-unit) * 4);
  background-color: var(--clr-surface);
  border-bottom: 1px solid var(--clr-border);
}

.site-brand {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--clr-dark);
}

.site-nav {
  display: flex;
  gap: calc(var(--space-unit) * 2);
}

.site-nav-link,
.site-nav-cart {
  font-size: 0.875rem;
  color: var(--clr-body);
}

.site-nav-cart {
  font-weight: 600;
  color: var(--clr-primary);
}

/* ===== Hero ===== */
.hero {
  background-image: linear-gradient(to bottom right, var(--clr-primary), var(--clr-primary-dark));
  text-align: center;
  padding: calc(var(--space-unit) * 9) calc(var(--space-unit) * 4);
}

.hero-title {
  font-size: clamp(2.25rem, 5vw, 3rem);
  color: #FFFFFF;
  margin-bottom: var(--space-unit);
}

.hero-subtitle {
  color: #FFFFFF;
  max-width: 34em; /* batasi panjang baris supaya nyaman dibaca */
  margin: 0 auto calc(var(--space-unit) * 3);
}

.hero-cta {
  display: inline-block;
  background-color: #FFFFFF;
  color: var(--clr-primary-dark);
  font-weight: 600;
  padding: calc(var(--space-unit) * 2) calc(var(--space-unit) * 5);
  border-radius: 999px;
}

/* ===== Section umum ===== */
.section {
  max-width: 1080px;
  margin: 0 auto;
  padding: calc(var(--space-unit) * 7) calc(var(--space-unit) * 4);
}

.section-title {
  font-size: 1.875rem;
  margin-bottom: calc(var(--space-unit));
}

.section-lead {
  font-size: 1.125rem;
  margin-bottom: calc(var(--space-unit) * 6);
}

/* ===== Kartu produk ===== */
.produk-grid {
  display: flex;
  flex-wrap: wrap; /* pola ini dibahas tertib di Bab 6 */
  gap: calc(var(--space-unit) * 3);
}

.produk-card {
  flex: 1 1 220px;
  background-color: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  padding: calc(var(--space-unit) * 4);
}

.produk-name {
  font-size: 1.125rem;
  margin: var(--space-unit) 0;
}

.produk-kategori {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--clr-body);
}

.produk-deskripsi {
  font-size: 0.875rem;
}

.produk-harga {
  margin-top: var(--space-unit);
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--clr-dark);
}

/* ===== Badge semantik: teks tetap gelap, warna dibawa latar tint ===== */
.produk-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 2px 10px;
  border-radius: 999px;
}

.produk-badge--bestseller {
  background-color: var(--clr-accent);
  color: var(--clr-dark); /* kontras ± 6,8:1 di atas amber */
}

.produk-badge--tersedia {
  background-color: rgba(22, 163, 74, 0.12);
  color: var(--clr-body); /* hijau murni di latar terang hanya ± 3,3:1 */
}

.produk-badge--stok-terbatas {
  background-color: rgba(220, 38, 38, 0.12);
  color: var(--clr-body);
}

.produk-badge--baru {
  background-color: rgba(79, 70, 229, 0.12);
  color: var(--clr-primary-dark);
}

/* ===== CTA ===== */
.cta {
  background-image: linear-gradient(120deg, var(--clr-primary), var(--clr-primary-dark));
  text-align: center;
  padding: calc(var(--space-unit) * 7) calc(var(--space-unit) * 4);
}

.cta-title {
  color: #FFFFFF;
  font-size: 1.875rem;
}

.cta-text {
  color: #FFFFFF;
  max-width: 40em;
  margin: var(--space-unit) auto calc(var(--space-unit) * 4);
}

.cta-button {
  display: inline-block;
  background-color: #FFFFFF;
  color: var(--clr-primary-dark);
  font-weight: 600;
  padding: calc(var(--space-unit) * 2) calc(var(--space-unit) * 5);
  border-radius: 999px;
}

/* ===== Footer ===== */
.site-footer {
  background-color: var(--clr-dark);
  color: #FFFFFF;
  text-align: center;
  padding: calc(var(--space-unit) * 5);
  font-size: 0.875rem;
}

.site-footer-brand {
  font-family: var(--font-heading);
  font-weight: 700;
}

.site-footer-copy {
  font-size: 0.75rem;
}

/* ===== Responsif ringkas (media query dibahas penuh di Bab 7) ===== */
@media (max-width: 576px) {
  .site-header {
    flex-direction: column;
    gap: calc(var(--space-unit) * 2);
  }

  .produk-card {
    flex: 1 1 100%;
  }
}
```

### Penjelasan Kode

File HTML mengikuti anatomi yang sudah Anda pegang sejak Bab 2: satu `h1` unik (judul hero), heading menurun tanpa lompat (`h1` → `h2` section → `h3` produk), dan setiap teks dipasangkan elemen semantiknya (`header`, `nav` dengan `aria-label`, `main`, `section`, `article` per kartu, `footer`). Tiga tag `<link>` pertama menarik Poppins dan Inter sesuai 4.2, dan `css/style.css` dimuat setelahnya. Delapan kartu produk adalah delapan item dataset baku Tokosaya — bandingkan deskripsi dan harga pada kode dengan tabel produk di Bab 1; keduanya harus identik karena dataset inilah yang dipakai lintas bab.

Lembar gaya dibaca dari atas ke bawah mengikuti pola organisasi Bab 3: token, reset, tipografi dasar, lalu komponen per blok dengan komentar berbahasa Indonesia. Token di `:root` sama persis dengan 4.8; setiap warna, font, jarak, radius, dan bayangan diambil lewat `var()`. Anda juga telah mengamati dua teknik yang diperkenalkan materi: `clamp(2.25rem, 5vw, 3rem)` menjaga judul hero agar lega di layar besar tetapi tidak bocor di HP, dan `max-width: 34em` pada `hero-subtitle` membatasi panjang baris teks supaya mata tidak melantai dari sisi kiri ke kanan. Baru setelah semua token bekerja, *media query* satu-satunya menjadi penutup: kartu disusun satu kolom dan header menyusun ke bawah di layar ≤ 576px — itu cukup untuk praktikum ini, selebihnya menunggu Bab 6 dan Bab 7.

Perhatikan juga tiga keputusan "bukan kebetulan". Pertama, warna teks di hero dan CTA ditulis `#FFFFFF` (putih) langsung, bukan token, karena putih teks di gradien indigo adalah keputusan lokal yang tidak dipakai lintas tema; token diberi awalan pada nilai yang memang strategis. Kedua, badge memakai `rgba()` dari warna token sebagai tint latar dan teks gelap — hasil perhitungan kontras di 4.5 (teks `--clr-body`: 8,7:1 pada tint hijau; teks `--clr-dark`: 6,8:1 di atas amber). Ketiga, `border-radius: 999px` membuat pill sempurna pada tombol dan badge tanpa perlu mengukur lebarnya.

### Hasil yang Diharapkan

File terbuka di browser sebagai halaman *landing page* Tokosaya satu kolom. Amati hal-hal berikut (semuanya terukur, bukan sekadar rasa):

- Font judul terlihat bulat-geometris (Poppins); paragraf memakai font tegak yang berbeda (Inter); ciri khasnya tampak pada huruf "a" Poppins yang bulat.
- Hero berlatar gradien indigo diagonal; seluruh teks hero putih; tombol "Lihat Katalog" pill putih dengan teks indigo gelap.
- Judul `h1` ukurannya menurun halus saat jendela dipersempit (efek `clamp`), tanpa pernah di bawah 2,25rem.
- Section Sorotan Produk menampilkan 8 kartu: latar putih, pojok 12px, bayangan lembut; badge berwarna sesuai tabel badge (amber untuk Best Seller, tint hijau untuk Tersedia, tint merah untuk Stok Terbatas, tint indigo untuk Baru).
- Badge seluruhnya terbaca jelas di layar; label kategori berbentuk kapital kecil berjarak (efek `text-transform` + *letter-spacing*).
- Section CTA berlatar gradien dengan tagline dan tombol pill; footer gelap menampilkan kontak baku.
- Pada lebar layar ≤ 576px, header menyusun ke bawah dan kartu produk menjadi satu kolom.
- Ctrl+F memetakan `var(...)`: seluruh warna dipanggil dari token; di luar `:root` hanya `#FFFFFF` (teks pada gradien hero/CTA/footer) yang ditulis langsung sebagai keputusan lokal.

### Troubleshooting

**Masalah:** Font tetap tampil standar sistem; judul tidak terlihat seperti Poppins sebagaimana di contoh.
**Penyebab:** URL Google Fonts salah ketik (cukup satu huruf beda pada `family=`), tag `<link>` tertulis di luar `<head>` sehingga urutan pemuatan acak, atau jaringan memblokir fonts.googleapis.com.
**Solusi:** Bandingkan URL huruf demi huruf dengan kode di atas; pastikan setiap tag `<link>` ada di dalam `<head>`; bila jaringan memblokir font, halaman tetap mesti terbuka dengan font cadangan — itulah perilaku *fallback stack* yang benar, coba ulang saat jaringan kembali.
**Pencegahan:** Simpan URL font di satu catatan proyek; selalu salin URL yang persis terkunci — jangan mengetik manual; uji dahulu pada satu `h1` sebelum dipakai di banyak elemen.

**Masalah:** Semua warna kembali abu-abu default browser; tombol tidak berwarna dan badge tampak putih polos.
**Penyebab:** Penulisan nama token tidak konsisten — misalnya CSS menulis `var(--clr-primari)` atau `var(--clrPrimary)` padahal token terdaftar sebagai `--clr-primary` — sehingga referensi tidak menemukan nilainya.
**Solusi:** Cocokkan nama pada pemanggil `var()` dengan definisi di `:root` huruf demi huruf; pastikan blok `:root` berada di awal `style.css` dan tidak ada typo pada kurung `var()`.
**Pencegahan:** Bila mengetik nama token, salin dari daftar baku; gunakan komentar di sekitar setiap token sebagaimana 4.8; bila nama baru diperlukan, tambahkan ke `:root` dulu baru dirujuk.

**Masalah:** Judul hero terpotong atau memaksa jarak horizontal jauh di layar HP; teks menu header menumpuk keluar kotak.
**Penyebab:** Ukuran judul ditulis angka `px` besar statis, dan `hero-title` tanpa batas lebar; layout header belum disusun ulang di lebar sempit.
**Solusi:** Ganti `font-size` hero dengan `clamp(2.25rem, 5vw, 3rem)`; pastikan *media query* `@media (max-width: 576px)` memuat aturan menyusun header dan kartu satu kolom.
**Pencegahan:** Biasakan semua ukuran teks dalam `rem`/`clamp()` dari skala 4.4; uji halaman dengan menurunkan lebar jendela sebelum dianggap selesai.

**Masalah:** Badge "Tersedia" tampak pudar ketika Anda bereksperimen memakai teks hijau murni di atas latar tint.
**Penyebab:** Warna teks memakai `var(--clr-success)` — di atas tint hijau 12 persen rasio kontrasnya hanya ± 2,8:1, di bawah ambang 4,5:1 teks kecil.
**Solusi:** Ubah warna teks badge menjadi `var(--clr-body)` (± 8,7:1 pada tint yang sama) dan biarkan semantik dibawa oleh wujud latar tint hijau.
**Pencegahan:** Sebelum memakai warna teks, cek rasio kontrasnya terhadap latar riil (bukan dugaan); tetapkan pola "warna semantik ke latar, teks ke warna gelap" untuk semua badge.

## Studi Kasus

Sebuah dinas pelayanan publik kota meminta kelas magang Sistem Informasi meninjau halaman "Pemberitahuan Penyesuaian Tarif Retribusi" di portalnya. Halaman ini penting: warga harus memahami tabel tarif, jadwal pemberlakuan, dan jalur pengaduan. Tim meminta Anda, sebagai orang yang baru berlatih tipografi di Bab 4, menilai dua versi halaman yang mereka siapkan — versi A (lama) dan versi B (usulan) — lalu menjelaskan mana yang hierarkinya baik dan mengapa. Seluruhnya berupa HTML + CSS murni, sehingga setiap temuan bisa Anda terapkan lewat ilmu bab ini.

Amati ciri-cirinya berikut secara sejajar. Versi A menggunakan hampir semua teks 14px: judul halaman, isi, tabel tarif, dan catatan kaki; satu-satunya penanda penting adalah penebalan acak — beberapa kalimat dicetak tebal karena "tampak penting ketika ditulis dulu". Ia memakai empat jenis font (font berbeda dari tiap penulis konten saat ditempel dari dokumen Word), semua link berwarna abu-abu gelap sama seperti teks, dan banner perhatian menggunakan teks putih 10px di atas latar kuning-amber pekat. Versi B menerapkan satu skala tipografi: judul `h1` memakai Poppins 2.25rem, subjudul lead 1.25rem, isi Inter 1rem dengan `line-height` 1.6, tabel 0.875rem, dan label "Baru Berlaku" berbentuk badge 0.75rem berlatar amber dengan teks gelap. Perbedaannya bisa Anda ringkas dalam tabel berikut:

| Aspek | Versi A (buruk) | Versi B (baik) |
|---|---|---|
| Ukuran | Satu ukuran semua (14px) | Skala bertingkat 0.75–2.25rem |
| Keluarga huruf | Empat font campur adok | Poppins (heading) + Inter (isi) |
| Line-height | 1.0–1.1, terlalu sesak | 1.6 isi, 1.2 judul |
| Emphasis | Tebal acak | Tebal hanya pada angka tarif; sisanya via warna/ukuran |
| Badge | Kapsul putih-kecil samar | Amber + teks gelap, kontras ± 6,8:1 |
| Banner perhatian | Teks putih 10px di amber (tak terbaca) | Teks gelap ≥ 1rem di latar amber terang |

Hasil analisisnya mengajarkan tiga hal yang melampaui rasa. Pertama, hierarki yang baik bekerja dari struktur ke visual, bukan sebaliknya: versi B terbaca karena skala dan *heading* HTML-nya benar (satu `h1`, tidak melompat level), lalu keputusan visual bertumpu di atas struktur itu. Kedua, "penebalan" bukan alat hierarki yang andal — ketika semuanya tebal, tidak ada yang menonjol; versi B memakai penebalan seperlunya dan menitipkan penekanan berikutnya pada ukuran, warna, dan jarak sehingga mata menemukan pintu masuknya sendiri. Ketiga, kontras adalah batas hukum yang tak menawar: banner teks kecil putih di atas amber pada versi A gagal ambang WCAG (teks 10px tak masuk kategori teks besar, dan putih di amber sangat rendah), padahal layar kios di kedinasan sering dibaca dalam cahaya terang oleh warga semua umur.

Kaitannya dengan materi dan profesi SI: halaman layanan publik adalah antarmuka sistem informasi pada pemakainya yang paling beragam — usia, perangkat, literasi digital, hingga akses internet. Keterbacaan itu bukan soal estetika pribadi desainer; ia menentukan apakah warga sanggup menemukan tarif dan tenggat tanpa telepon ke kantor. Di Bab 13 Anda akan mengulang studi kasus semacam ini dengan alat audit formal (WCAG, alat uji kontras), dan di Bab 12 kiat "skala + token" versi B menjadi mini *design system*. Untuk saat ini, cukup simpan pola kerja tim B: tetapkan skala dulu, alokasikan warna semantik kedua, uji kontras ketiga, barulah mempercantik.

## Latihan Mandiri

1. Jelaskan dengan kalimat Anda sendiri perbedaan *typeface* dan *font*, lalu sebutkan satu contoh pasangan keduanya di luar buku ini (bukan Poppins). Sertakan mengapa kombinasi "font heading + font isi" yang berbeda lebih baik daripada satu font untuk semuanya.
2. Seorang teman menulis `font-family: Poppins;` (tanpa tanda kutip dan tanpa fallback). Jelaskan dua masalah pada penulisan itu dan tulis versi perbaikannya lengkap dengan alasan setiap bagian.
3. Hitung nilai piksel dari skala Tokosaya pada basis 16px: 3rem, 1.875rem, 1.25rem, dan 0.75rem. Kemudian nyatakan dalam satu kalimat mengapa memakai `rem` membuat skala ini lebih mudah disesuaikan di Bab 13 dibanding memakai `px` di setiap aturan.
4. Gunakan data tabel kontras pada 4.5: manakah yang dari pasangan berikut yang lolos ambang AA untuk teks kecil di atas latar putih — (a) teks `#4F46E5`, (b) teks `#16A34A`, (c) teks `#1E293B`? Untuk pilihan yang gagal, nyatakan satu teknik perbaikan (misalnya tint + teks gelap) dan jelaskan mengapa teknik itu bekerja.
5. Pada proyek `tokosaya-css/`, ubah nilai `--clr-primary` di `:root` menjadi `#4338CA`, buka `index.html`, lalu catat minimal lima elemen yang tampak berubah. Tulis satu paragraf: mengapa perubahan satu baris membangkitkan efek berantai, dan apa yang terjadi bila warna ditulis langsung di setiap komponen.
6. Buat halaman `latihan/latihan-4-6.html` + CSS berisi hierarki empat tingkat (judul display, judul section, paragraf, keterangan kecil) memakai skala rem pada 4.4 dan token Tokosaya. Bila selesai, periksa: apakah heading-nya melompat level dan apakah hanya ada satu `h1`?

## Tugas

**Tugas 1 (individu) — Laporan Analisis Tipografi.** Pilih satu halaman informasi nyata (informasi akademik, portal layanan publik, atau halaman katalog UMKM, selain halaman latihan buku ini). Analisis hierarki tipografinya dalam laporan 2–3 halaman: ukuran/jarak/keluarga font yang teramati, penilaian hierarki baik/buruk, dan satu usulan perbaikan disertai potongan CSS (token + skala) versi Anda. Keluaran yang dikumpulkan: dokumen laporan (PDF/DOCX) dan `latihan/analisis-4.css`. Kriteria ringkas: ada pengukuran nyata (bukan perkiraan), merujuk ambang kontras WCAG dengan benar, potongan CSS valid dan memakai token.

**Tugas 2 (kelompok 3–4 orang) — Palet alternatif untuk Tokosaya.** Susun satu varian palet baru (tetap memakai struktur token `:root` yang sama, hanya nilai yang berubah: misalnya keluarga hijau-teal untuk *primary*, amber tetap) dan buat `index.html` landing page versi kelompok yang seluruh warnanya lewat token. Keluaran: folder `latihan/palet-kelompok/` berisi 2 file tersebut + tabel kontras pasangan teks-latarnya (minimal 4 baris). Kriteria singkat: semua pasangan teks utama lolos 4,5:1; hanya satu-dua titik gradien; keluarga warna tak lebih dari 3 di luar netral dan semantik.

## Refleksi

1. Sebelum membaca bab ini, bagaimana Anda biasanya memilih ukuran font? Setelah mengenal skala tipografi, keputusan mana dari kebiasaan lama yang kini ingin Anda perbaiki lebih dahulu?
2. Token mengubah cara Anda menulis CSS (nilai → makna). Menurut Anda, perubahan pola pikir ini paling dirasakan saat bekerja sendiri, atau saat bekerja dalam tim? Jelaskan.
3. Dari studi kasus layanan publik: keterbacaan itu soal keadilan akses informasi. Sudahkah Anda pernah gagal membaca sesuatu di layar karena tipografinya? Apa yang seharusnya dilakukan penyajiannya?
4. Jika besok website Tokosaya harus tampil di HP pelanggan dengan kualitas jaringan buruk (font gagal diunduh), apa yang menolong halaman Anda tetap terlihat baik? Kaitkan dengan *fallback stack* dan pilihan font sistem.

## Rangkuman

1. Tipografi adalah seni menyusun huruf; mayoritas antarmuka teks, sehingga tipografi menentukan keterbacaan, hierarki, dan identitas halaman.
2. *Web font* dari Google Fonts (Poppins + Inter di seluruh buku) menjaga konsistensi lintas perangkat; selalu disertai *fallback stack* yang ditutup kategori generik.
3. Properti inti tipografi: `font-size` (rem), `font-weight` (400–700), `line-height` unitless (1,6 isi; 1,2 judul), *letter-spacing*, `text-align`, `text-decoration`, `text-transform`.
4. *Type scale* adalah daftar ukuran yang disiplin (skala Tokosaya: 3 / 2.25 / 1.875 / 1.25 / 1 / 0.875 / 0.75 rem) dan menjadi tulang punggung hierarki visual.
5. `clamp(min, preferred, max)` menjaga ukuran teks antar lebar layar tanpa media query panjang; detail responsif ditunda ke Bab 13.
6. Sistem warna Tokosaya: indigo utama, amber aksen, keluarga slate netral, hijau/merah semantik; warna bermakna, bukan sekadar kumpulan yang enak dilihat.
7. *Contrast ratio* WCAG AA: 4,5:1 teks kecil, 3:1 teks besar; teks hijau murni di latar terang gagal (± 3,3:1), jadi badge memakai tint + teks gelap.
8. *Background* solid untuk permukaan membaca; `linear-gradient` untuk hero/CTA (arah `to bottom right`, `120deg`), dengan kontras teks yang diverifikasi.
9. *Border-radius* (12px kartu, 999px pill), `box-shadow` token `--shadow-card`, dan `opacity`/`rgba` membangun rasa "bernapas" tanpa gambar.
10. *Design token* berupa CSS custom properties pada `:root` menyatukan keputusan desain; dirujuk `var()`, diwariskan turunannya, dan dapat ditimpa secara terbatas pada sub-pohon.

Jembatan ke Bab 5: halaman yang baru Anda bangun telah berwarna dan berkarakter, tetapi mengapa kartu produk perlu jarak dan lapisan, mengapa padding di dalam latar, dan mengapa tombol pill tepat menempel teksnya? Semua itu pekerjaan *box model* — tatanan content, padding, border, dan margin yang menjadi fondasi setiap *layout* di web. Bab 5 membedahnya satu per satu: bagaimana setiap elemen adalah kotak, bagaimana `box-sizing: border-box` menyelamatkan perhitungan lebar, dan bagaimana token `--space-unit` di Bab 4 mulai menggerakkan spacing system yang disiplin. Setelah Bab 5, kartu produk Tokosaya akan berdiri dengan anatomi yang benar, dan Bab 6 pun bisa menyusunnya berjajar dengan Flexbox.

## Evaluasi

### Pilihan Ganda

1. Peran utama tipografi dalam web design yang paling tepat adalah…
   A. membuat halaman lebih kaya gambar
   B. menata huruf agar terbaca, terhierarki, dan berciri identitas
   C. mempercepat proses kompilasi halaman server
   D. menggantikan kebutuhan layout yang baik
2. Tujuan utama *fallback stack* pada `font-family: 'Poppins', sans-serif;` adalah…
   A. memperindah urutan penulisan properti
   B. memberi cadangan tampilan bila font utama gagal dimuat
   C. mengubah ketebalan font secara otomatis
   D. menonaktifkan font sistem browser
3. Nilai `line-height: 1.6` dipilih secara unitless (tanpa satuan) karena…
   A. browser tidak menerima satuan pada properti ini
   B. nilai mengikuti perkalian ukuran font, sehingga tetap proporsional saat font membesar
   C. hanya unitless yang valid untuk aksesibilitas
   D. membuat penulisan deklarasi lebih pendek
4. Design token utama warna brand Tokosaya pada blok `:root` adalah…
   A. `--clr-accent: #F59E0B`
   B. `--clr-success: #16A34A`
   C. `--clr-primary: #4F46E5`
   D. `--font-heading: 'Poppins', sans-serif`
5. Ambang rasio kontras WCAG level AA untuk teks berukuran normal (bukan teks besar) adalah…
   A. minimal 3:1
   B. minimal 4,5:1
   C. minimal 7:1
   D. tidak ada ketentuan kontras untuk teks kecil
6. Menurut tabel kontras pada 4.5, mengapa badge "Tersedia" Tokosaya tidak memakai teks hijau `#16A34A` murni di atas latar terang? *(butir analisis — tingkat sulit ringan)*
   A. Hijau tidak cocok dengan identitas indigo Tokosaya
   B. Kontrasnya hanya ± 3,3:1, di bawah 4,5:1 untuk teks kecil
   C. Hijau hanya diizinkan untuk tombol, bukan badge
   D. Browser lama tidak mendukung warna hex hijau
7. Untuk membuat judul hero berukuran adaptif pada semua lebar layar tanpa media query berlapis, properti yang tepat adalah…
   A. `font-size: 3rem !important;`
   B. `font-size: 999px;`
   C. `font-size: clamp(2.25rem, 5vw, 3rem);`
   D. `letter-spacing: clamp(0, 8px, 16px);`
8. Sebuah tim hendak mengubah warna brand seluruh halaman Tokosaya dari indigo ke biru laut. Perubahan paling hemat dan aman dilakukan dengan…
   A. mengedit nilai `--clr-primary` (dan `--clr-primary-dark`) di `:root`
   B. mencari-ganti semua tulisan tombol di setiap HTML
   C. menambah aturan CSS baru di akhir file setiap halaman
   D. mengganti keluarga font menjadi biru

### Benar atau Salah

1. `border-radius: 999px` pada tombol menghasilkan bentuk pill karena nilai yang melebihi setengah lebar otomatis dibatasi oleh browser.
2. Token warna semantik sebaiknya ditulis dalam nama nilai (misalnya `--merah`) agar mudah diingat.
3. Heading HTML yang melompat level dari `h1` ke `h4` dapat membusur hierarki meskipun ukuran visualnya diperbaiki lewat CSS.
4. Gradien `linear-gradient(to bottom right, var(--clr-primary), var(--clr-primary-dark))` menempatkan warna pertama di pojok kiri atas.
5. `opacity` pada elemen hanya menyetel tembus pandang warna latarnya, bukan seluruh isinya.

### Analisis Kode

Perhatikan potongan CSS berikut dari sebuah proyek latihan:

```css
File: latihan/eval-04-1.css
p {
  font-size: 1rem;
  color: var(--clr-primari, #94A3B8);
}

h2 {
  font-size: 0.95rem;
  color: #16A34A;
}
```

1. Identifikasi minimal tiga cacat pada potongan tersebut dari sisi hierarki, token, dan kontras, lalu tuliskan perbaikannya satu per satu.

Kemudian amati potongan tombol berikut (di proyek ini token `--clr-primary` terdefinisi, tetapi tidak ada token `--clr-danger`):

```css
File: latihan/eval-04-2.css
:root {
  --clr-primary: #4F46E5;
}

.tombol-hapus {
  background-color: var(--clr-danger);
  color: #FFFFFF;
  border-radius: 999px;
  padding: 12px 20px;
}
```

2. Apa yang terjadi pada tombol ketika halaman dibuka, dan mengapa? Bagaimana cara memperbaikinya agar tombol hapus menampilkan warna merah semantik `#DC2626` tanpa menulis warna mentah berulang-ulang di setiap komponen?

### Soal Praktik

1. Bangun halaman `latihan/latihan-eval-4.html` + lembar gayanya yang memuat: token baku Tokosaya (seluruh variabel pada 4.8), satu judul memakai `clamp()`, satu paragraf `1rem line-height 1.6`, satu badge "Baru" dengan kontras yang lolos AA, dan satu blok teks keterangan 0.875rem. Kumpulkan kedua file plus catatan kontras pasangan warna yang Anda pakai.
2. Rancang varian hero Tokosaya versi gelap: latar `--clr-dark`, teks putih, aksen amber pada satu frasa (dapat memakai `<mark>` bergaya), tombol pill indigo. Pastikan setiap pasangan teks-latar berada di atas 4,5:1 dan catat angka kontrasnya di komentar CSS berbahasa Indonesia.

### Kunci Jawaban

<details>
<summary>Kunci Jawaban Evaluasi</summary>

**Pilihan Ganda:**

1. **B** — tipografi menyusun huruf untuk keterbacaan, hierarki, dan identitas; sisa opsi bercampur dengan urusan server (C) atau layout (D).
2. **B** — cadangan bertujuan agar teks tetap tampil bila 'Poppins' gagal; kategori `sans-serif` adalah jaring pengaman terakhir.
3. **B** — nilai tanpa satuan berarti faktor ukuran font, jadi proporsional ketika font membesar (misal di pengaturan aksesibilitas).
4. **C** — `--clr-primary: #4F46E5` adalah indigo utama untuk tombol dan link; opsi lain adalah aksen, semantik, dan font.
5. **B** — 4,5:1 untuk teks normal; 3:1 (A) berlaku untuk teks besar; 7:1 (C) adalah target level AAA.
6. **B** — teks hijau murni di latar terang ± 3,3:1 (< 4,5:1); solusinya tint hijau + teks gelap yang kontrasnya jauh di atas ambang.
7. **C** — `clamp()` mengeket min/preferred/max sehingga ukuran adaptif (5vw) tanpa keluar dari batas rem.
8. **A** — inilah gunanya token: nilai diubah di satu tempat, semua komponen `var()` ikut berubah.

**Benar atau Salah:**

1. **Benar** — nilai over-limit dibatasi sehingga membentuk pill di semua lebar.
2. **Salah** — token menamai makna, bukan nilai (`--clr-danger` lebih tahan perubahan desain daripada `--merah`).
3. **Benar** — kelalaian struktur heading mengaburkan makna bagi browser/penyandang disabilitas; CSS tidak menambal struktur semantik.
4. **Benar** — arah `to bottom right` bermula dari pojok kiri atas menuju kanan bawah (Bab 4.6).
5. **Salah** — opacity memengaruhi seluruh elemen beserta isinya; untuk meredupkan warna latar saja, gunakan `rgba()`.

**Ringkasan Analisis Kode:**

1. Cacat: (a) hierarki terbalik — `h2` (0.95rem) lebih kecil daripada paragraf (1rem), melanggar skala/hierarki; (b) penamaan token salah (`--clr-primari`, padahal baku `--clr-primary`) sehingga nilai jatuh ke fallback abu-abu `#94A3B8` secara diam-diam; (c) teks hijau murni `#16A34A` di atas latar bawaan putih ± 3,3:1 — di bawah ambang 4,5:1 teks kecil. Perbaikan: pulihkan hierarki dengan 1.875rem untuk `h2`, perbaiki nama token menjadi `--clr-primary`, dan alihkan warna semantik ke pola badge tint + teks gelap (kontras ≥ 4,5:1).
2. Tombol tampil tanpa warna latarnya (transparan) karena `var(--clr-danger)` tidak terdefinisi sehingga properti jatuh ke nilai awalnya (latar transparan). Perbaikan: tambahkan `--clr-danger: #DC2626;` di `:root` sehingga seluruh komponen merujuk token yang sama, bukan menulis `#DC2626` berulang.

**Ringkasan Soal Praktik:**

1. Nilai baik bila: seluruh token baku hadir di `:root`, judul memakai `clamp()` dengan rentang masuk akal, paragraf `1rem/1.6`, badge Baru berlatar `rgba(79, 70, 229, 0.12)` dengan teks `--clr-primary-dark` (± 6,3:1), dan catatan kontras tersedia.
2. Hero gelap lolos bila: teks putih di atas `--clr-dark` (± 14:1), penekanan amber memakai teks gelap di atas latar amber atau pada bagian `<mark>` yang diberi latar tint aman, tombol indigo dengan teks putih (± 6,3:1); nilai kontras dicantumkan pada komentar.

</details>

## Referensi

Duckett, J. (2011). *HTML & CSS: Design and Build Websites*. Indianapolis: Wiley. — Bab tipografi dan warna sebagai pengantar visual yang ringan.

MDN Web Docs. (2025). *Using CSS custom properties (variables)*. Diakses 20 Januari 2026, dari https://developer.mozilla.org/

Robbins, J. N. (2018). *Learning Web Design* (5th ed.). Sebastopol: O'Reilly Media. — Bab tipografi CSS dan warna.

web.dev by Google. (2026). *Prevent layout shifting and flashes of invisible text (FOIT/FOUT)* — best practice memuat web font. Diakses 20 Januari 2026, dari https://web.dev/

W3C. (2023). *Web Content Accessibility Guidelines (WCAG) 2.2* — kriteria 1.4.3 Contrast (Minimum). Diakses 20 Januari 2026, dari https://www.w3.org/TR/wcag22/