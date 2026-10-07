# BAB 11 — Form dan User Interface Design

## Deskripsi Singkat

Di bab ini, kamu akan belajar tentang formulir (*form*) sebagai antarmuka utama buat mengumpulkan data pengguna secara terstruktur. Yang dibahas meliputi prinsip desain form, elemen HTML form, kelas form Bootstrap 5.3, layout form dua kolom, status visual, fokus, dan aksesibilitas form. Materi ini melanjutkan proyek **Tokosaya** yang sejak Bab 10 udah punya halaman katalog berbasis Bootstrap; sekarang kamu akan menambah halaman `keranjang.html` (checkout visual statis) dan membangun ulang `kontak.html`. Di bab berikutnya, semua keputusan visual Tokosaya akan dirangkum jadi sebuah *design system* yang terdokumentasi.

## Tujuan Pembelajaran

Setelah mempelajari bab ini, mahasiswa mampu:

1. menjelaskan empat prinsip desain form (satu kolom, label terlihat, pengelompokan dan progres, tombol aksi yang jelas) beserta alasannya;
2. mengidentifikasi elemen HTML form: `label`, `input` dengan berbagai *type*, `textarea`, `select`, `checkbox`, `radio`, `fieldset`/`legend`, dan `button`;
3. mengimplementasikan kelas form Bootstrap (`form-label`, `form-control`, `form-text`, `form-check`, `form-select`, `input-group`) pada halaman kontak Tokosaya;
4. merancang layout form dua kolom yang responsif memakai `row`/`col` di dalam elemen `form`;
5. menerapkan status visual statis (`is-valid`, `is-invalid`, `disabled`, `readonly`) beserta pesan `valid-feedback` dan `invalid-feedback`;
6. menganalisis cacat desain sebuah form yang buruk dan menyusun perbaikannya secara sistematis;
7. mengevaluasi halaman form dengan checklist aksesibilitas dasar: label terhubung, urutan tab logis, dan atribut `autocomplete`.

## Capaian Pembelajaran

Bab ini berkontribusi pada dua capaian program mata kuliah berikut.

- **CPMK 3 — Mengimplementasikan antarmuka web statis:** mahasiswa membangun halaman keranjang dan formulir kontak yang responsif memakai HTML5 semantik, kelas form Bootstrap 5.3, dan CSS kustom sesuai design token Tokosaya.
- **CPMK 4 — Mengevaluasi kualitas antarmuka:** mahasiswa menilai sebuah form memakai checklist prinsip desain dan aksesibilitas, lalu merumuskan perbaikan yang dapat dilaksanakan tanpa JavaScript.

Sub-capaian khusus bab ini: (1) menulis markup form Bootstrap yang valid dan konsisten; (2) menyusun layout responsif satu-dua kolom dengan utilitas grid; (3) memakai status visual sebagai bahasa antarmuka; (4) menerapkan praktik aksesibilitas dasar pada form.

## Kata Kunci

formulir (*form*) — antarmuka terstruktur buat mengumpulkan input pengguna; kontrol formulir (*form control*) — medan isian kayak input, select, dan textarea; label eksplisit — nama medan yang selalu terlihat dan terhubung lewat atribut `for`–`id`; *placeholder* — teks contoh di dalam medan yang hilang pas diketik; *input group* — pembungkus Bootstrap yang menggabungkan medan dengan awalan, satuan, atau tombol; umpan balik (*feedback*) — pesan valid/nggak valid yang tampil di dekat medan; status elemen (*state*) — kondisi visual kayak *disabled*, *readonly*, valid, dan nggak valid; aliran fokus (*focus order*) — urutan medan yang dilalui tombol Tab sesuai urutan DOM; *autocomplete* — petunjuk pengisian otomatis yang sekaligus menyatakan tujuan medan; aksesibilitas formulir — desain form yang bisa dipakai semua pengguna, termasuk pengguna pembaca layar.

## Apersepsi

Bayangkan ada seorang mahasiswa bernama Rani yang ingin membeli *flash drive* dan keyboard dari Tokosaya buat keperluan tugas akhirnya. Setelah menambahkan dua produk ke keranjang, ia masuk ke tahap pembayaran. Masalahnya, di sana ia bertemu form yang bikin ragu: kolom nama tanpa label, nomor telepon tanpa petunjuk format, dan kupon dengan pesan error yang cuma berbunyi "error kode 7". Rani jadi mengisi alamat sambil menebak-nebak, lalu dua kali salah mengetik email. Akhirnya transaksi gagal dan pesanannya batal.

Cerita sederhana ini menunjukkan inti mata kuliah sistem informasi: *sistem informasi hidup dari data, dan form adalah pintu masuk data itu*. Kalau formnya buruk, masalahnya bukan cuma pengguna jadi kesal; data yang masuk pun bisa salah — alamat keliru tersimpan di basis data, pesanan gagal diantar, atau layanan publik ikut tersendat. Jadi, kualitas data sebuah organisasi, baik UMKM maupun universitas, bergantung banget pada kualitas form yang dipakai buat mengumpulkannya.

Kabar baiknya, sebagian besar masalah form bukan soal teknologi canggih, tetapi soal desain yang rapi: label yang selalu terlihat, medan yang dikelompokkan, instruksi yang jelas, dan tombol yang langsung memberi tahu apa yang akan terjadi. Semua itu bisa kamu wujudkan cukup dengan HTML dan kelas Bootstrap — tanpa satu baris JavaScript pun. Lewat bab ini, kamu akan melatih cara merancang form Tokosaya dengan standar itu.

## Materi Pembelajaran

Materi bab ini dibagi jadi tujuh subbab yang bergerak dari konsep dasar ke implementasi: prinsip desain, elemen HTML, kelas form Bootstrap, layout kompleks, status visual, fokus, dan aksesibilitas.

### 11.1 Prinsip Desain Form

Formulir (*form*) adalah kumpulan kontrol yang dipakai buat mengumpulkan informasi dari pengguna lalu mengirimkannya sebagai satu kesatuan. Contohnya ada di mana-mana: form pendaftaran mahasiswa baru, form pengajuan cuti di kantor, form peminjaman buku di perpustakaan, sampai form checkout di toko daring. Dalam konteks sistem informasi, form adalah lapisan antarmuka dari proses bisnis "pengumpulan data": apa pun yang kamu tentukan di form, itulah yang nantinya masuk ke sistem.

Kenapa form perlu dirancang dengan serius? Karena di titik inilah layanan digital paling mudah gagal. Pengguna datang dengan tujuan yang jelas — mendaftar, memesan, mengajukan — tetapi waktu dan kesabarannya terbatas. Kebingungan kecil kayak label yang hilang, instruksi yang kabur, atau tombol yang artinya nggak jelas bisa membuat mereka berhenti di tengah jalan. Steve Krug merangkum prinsipnya lewat kalimat terkenal: jangan membuat pengguna harus berpikir. Form yang baik mengurangi keputusan yang perlu diambil pengguna, bukan malah menambahnya.

Empat prinsip berikut menjadi dasar seluruh materi bab ini.

- **Satu kolom (*single column*).** Medan disusun vertikal dari atas ke bawah dalam satu aliran. Alasannya: mata manusia membaca melompat sedikit melintasi baris, nggak melompat jauh melintasi kolom; pada HP, dua kolom membuat medan sempit dan salah ketik meningkat. Form satu kolom juga lebih mudah dipindai dengan pembaca layar.
- **Label yang selalu terlihat.** Setiap medan punya label permanen di atasnya, bukan sekadar teks di dalam medan yang hilang pas pengguna mengetik. Label terlihat adalah tanda alamat medan; *placeholder* hanyalah contoh isian.
- **Pengelompokan dan progres.** Medan yang sebanding diguguskan — data pribadi, alamat, pembelian — dengan batas visual jelas. Buat proses panjang kayak checkout, langkah-langkahnya ditampilkan bertahap sehingga pengguna tahu posisinya dan sisa pekerjaan.
- **Tombol aksi yang jelas (*clear call to action*).** Satu tombol utama per halaman, dengan label yang menyatakan akibatnya, misalnya "Kirim Pesan" atau "Lanjut ke Pembayaran". Tombol ganda dengan gaya sama membuat pengguna berpikir dua kali; justru itu yang harus dihindari.

Coba terapkan prinsip ini pada alur belanja Tokosaya. Halaman keranjang Tokosaya punya tiga zona: daftar item yang dipesan, pilihan pengiriman, dan ringkasan biaya dengan satu tombol utama "Lanjut ke Pembayaran". Ketiganya dipisahkan dengan ruang dan garis, bukan ditumpuk menjadi satu blok besar. Pas kamu membangunnya di Praktikum, perhatikan bahwa setiap keputusan visual di sana punya alasan.

Gampangnya begini: form itu mirip formulir administrasi di gedung akademik. Formulir yang isinya satu kolom, judulnya jelas, dan kotak tanda tangannya ada di akhir pasti lebih enak dipakai mahasiswa. Sebaliknya, formulir yang menumpuk isian ke kiri dan kanan tanpa label malah mengundang salah isi. Prinsip desain form di kertas dan di layar hampir sama; bedanya, di layar kita bisa memberi umpan balik langsung, dan itu dibahas pada 11.5.

### 11.2 Elemen Form

Sebelum membahas gaya tampilannya, kamu perlu paham dulu bahan penyusun form: elemen HTML5. Setiap elemen punya peran semantik, jadi bukan sekadar kotak isian.

**`label` dan atribut `for`.** Label adalah pasangan resmi sebuah medan. Nilai `for` pada label harus sama dengan `id` pada medan. Hubungan ini penting ke dua arah: pas pengguna mengeklik label, fokus pindah ke medan; pas *screen reader* membaca medan, labelnya ikut dibacakan. Tanpa hubungan `for`-`id`, form mungkin masih terlihat rapi, tetapi aksesibilitasnya langsung turun. Karena itu, aturan buku ini sederhana: setiap medan wajib punya `<label for="id">` yang benar-benar terhubung.

**`input` dan semantik *type*.** Perilaku elemen `input` berubah sesuai atribut *type*nya. `type="email"` menyesuaikan keyboard HP dan memicu pemeriksaan format bawaan browser; `type="tel"` biasanya memunculkan pad angka; `type="password"` menyamarkan teks; sedangkan `type="date"`, `type="number"`, dan `type="url"` punya keyboard serta pembatasannya masing-masing. Jadi, pilihan *type* menentukan keyboard yang muncul sekaligus aturan dasar yang dipakai — semuanya gratis, tanpa JavaScript. Tabel berikut merangkum *type* yang paling sering dipakai di website kayak Tokosaya.

| *Type* | Kegunaan | Contoh penggunaan Tokosaya |
|---|---|---|
| `text` | teks bebas pendek | kode kupon, catatan penerima |
| `email` | alamat surel dengan format khusus | email kontak, email pelanggan |
| `tel` | nomor telepon (pad angka) | telepon penerima kiriman |
| `number` | angka dengan batas min/maks | jumlah unit produk |
| `password` | teks tersamar | login pelanggan (kalau ada) |
| `date` | tanggal melalui pemilih bawaan | tanggal pengambilan barang |
| `search` | kolom pencarian | pencarian produk katalog |

**`textarea`.** Buat isian panjang kayak pesan, pakailah `textarea` dengan atribut `rows` buat mengatur tinggi awalnya. `textarea` menyimpan isi di antara tag pembuka dan penutup, berbeda dari `input` yang menyimpannya pada atribut `value`.

**`select` dan `option`.** Kalau pilihan yang tersedia udah jelas dan terbatas, kayak kategori produk atau program studi, `select` lebih tepat daripada `text`: salah ketik berkurang dan data jadi lebih seragam. Atribut `selected` menandai pilihan awal. Buat daftar panjang yang perlu dikelompokkan, elemen `optgroup` dengan atribut `label` membantu pembacaan.

**`checkbox` dan `radio`.** Checkbox memungkinkan lebih dari satu pilihan sekaligus (misalnya persetujuan atau langganan), sedangkan radio cuma mengizinkan satu pilihan dalam satu kelompok. Radio yang satu kelompok wajib memakai atribut `name` yang sama — dari situlah browser tahu bahwa pilihannya saling meniadakan. Kalau checkbox atau radio masih satu pertanyaan, bungkuslah dengan `fieldset`.

**`fieldset` dan `legend`.** Pasangan ini dipakai buat mengelompokkan medan yang saling berhubungan sekaligus memberi judul kelompoknya. Browser dan pembaca layar mengenali `fieldset` sebagai satu unit, jadi pas pengguna pembaca layar masuk ke radio kedua, konteks kelompoknya tetap terbawa. Pakailah pasangan ini setiap kali ada lebih dari satu radio atau checkbox yang masih saling terkait.

**`button`.** Di dalam sebuah `form`, tombol tanpa atribut *type* otomatis dianggap sebagai tombol kirim (submit) — itulah perilaku bawaan HTML. Jadi, kalau tombolnya cuma dipakai buat aksi visual atau pendamping, beri `type="button"` supaya form nggak terkirim tanpa sengaja.

Contoh berikut merangkai semua elemen dasar itu ke dalam satu halaman latihan mandiri. Halaman ini sengaja ditulis dengan HTML murni tanpa gaya Bootstrap supaya perhatianmu tetap ke struktur elemennya.

File: tokosaya-bootstrap/latihan/elemen-form.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Latihan 11.2 — Elemen Form Dasar</title>
</head>
<body>
  <h1>Formulir Latihan Data Pendaftar</h1>

  <!-- Form latihan: struktur elemen, bukan gaya visual -->
  <form action="#" method="get">
    <fieldset>
      <legend>Data Pendaftar</legend>

      <p>
        <label for="nim">Nomor Induk Mahasiswa</label>
        <input type="text" id="nim" name="nim">
      </p>

      <p>
        <label for="email-kampus">Email Kampus</label>
        <input type="email" id="email-kampus" name="email-kampus">
      </p>

      <p>
        <label for="telepon">Nomor Telepon</label>
        <input type="tel" id="telepon" name="telepon">
      </p>

      <p>
        <label for="angkatan">Angkatan</label>
        <select id="angkatan" name="angkatan">
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025" selected>2025</option>
        </select>
      </p>

      <p>
        <label for="catatan">Catatan Tambahan</label>
        <textarea id="catatan" name="catatan" rows="4" cols="40"></textarea>
      </p>
    </fieldset>

    <fieldset>
      <legend>Program Studi</legend>

      <p>
        <input type="radio" name="prodi" id="prodi-si" value="si" checked>
        <label for="prodi-si">Sistem Informasi</label>
      </p>
      <p>
        <input type="radio" name="prodi" id="prodi-sd" value="sd">
        <label for="prodi-sd">Sains Data</label>
      </p>
    </fieldset>

    <p>
      <input type="checkbox" id="setuju-tatib" name="setuju-tatib" checked>
      <label for="setuju-tatib">Saya menyetujui tata tertib penggunaan layanan.</label>
    </p>

    <p>
      <button type="submit">Kirim Pendaftaran</button>
      <button type="button">Batal</button>
    </p>
  </form>
</body>
</html>
```

Penjelasan: dari contoh ini, ada tiga hal yang paling penting buatmu perhatikan. Pertama, setiap `label` terhubung ke medan lewat pasangan `for`–`id`, termasuk pada radio dan checkbox — hubungan inilah yang membuat klik pada label dan pembacaan layar bekerja benar. Kedua, kedua radio memakai `name="prodi"` yang sama sehingga browser membacanya sebagai satu kelompok pilihan tunggal. Ketiga, pemilihan atribut `type` yang tepat (`email`, `tel`) cukup dilakukan sekali di markup tanpa skrip apa pun.

### 11.3 Bootstrap Form

Kalau form dibangun cuma dengan HTML polos, hasilnya biasanya masih terasa mentah: tampilannya bisa berbeda antar browser dan jaraknya belum konsisten. Bootstrap membantu merapikan semuanya lewat sekumpulan kelas form. Pola dasarnya sederhana dan akan sering kamu ulang: satu pembungkus `div` dengan `mb-3`, lalu di dalamnya ada satu `label` berkelas `form-label` dan satu medan berkelas `form-control`.

`mb-3` memberi jarak antar kelompok medan supaya form terasa punya "napas". Kelompok ini bukan sekadar hiasan: pengguna biasanya memindai form per unit (label + medan [+ bantuan]), dan jarak antarunit itulah yang membantu mata membaca dengan cepat. Dua kelas utamanya juga mudah diingat: `form-label` mengatur tipografi label dan jaraknya ke medan, sedangkan `form-control` merapikan tampilan medan isian (lebar penuh, bingkai, radius, warna fokus). Buat elemen `select`, Bootstrap menyediakan kelas khusus `form-select` karena struktur internalnya memang berbeda. Tabel berikut merangkum kelas yang akan kamu pakai di bab ini.

| Kelas | Dipasang pada | Peran |
|---|---|---|
| `mb-3` | pembungkus kelompok | jarak antar kelompok medan |
| `form-label` | `label` | tipografi dan jarak label |
| `form-control` | `input`, `textarea` | gaya medan isian |
| `form-select` | `select` | gaya pilihan tarik-turun |
| `form-text` | pembungkus kecil | teks bantuan di bawah medan |
| `form-check-input` | `checkbox`, `radio` | gaya kotak pilihan |
| `form-check-label` | `label` pilihan | nama pilihan |
| `input-group`, `input-group-text` | pembungkus, lampiran | awalan/sufiks tergabung pada medan |
| `is-valid` / `is-invalid` | medan | status visual (lihat 11.5) |
| `valid-feedback` / `invalid-feedback` | pembungkus pesan | pesan status di bawah medan |

*Input group* layak diperhatikan khusus. Pola ini menggabungkan sebuah medan dengan lampiran statis: tanda `@` di depan nama pengguna, satuan `Rp` di depan angka, atau tombol di ujung medan kayak tombol "Pakai" pada bidang kupon. Kelas pembungkusnya `input-group`, sedangkan lampirannya memakai `input-group-text`. Secara konsep, ini membantu konteks isian terbaca langsung, jadi pengguna nggak perlu menebak satuan atau arti kolomnya.

`form-text` adalah teks bantuan yang selalu tampil di bawah medan — perannya berbeda dari pesan status yang baru muncul pas ada kondisi valid atau nggak valid. Teks bantuan yang bagus biasanya berisi format yang diharapkan, alasan data diminta, atau info tentang bagian yang nggak wajib diisi. Supaya hubungan bantuan ini terbaca secara semantik, gunakan pola `aria-describedby` yang dibahas di 11.7.

Berikut potongan pola dasar yang akan jadi tulang punggung halaman kontak Tokosaya. Potongan ini diambil dari halaman final yang dibangun di Praktikum.

File: tokosaya-bootstrap/kontak.html

```html
<!-- Cuplikan: pola dasar kelompok medan; halaman lengkap di Praktikum -->
<div class="mb-3">
  <label for="email" class="form-label">Alamat Email</label>
  <input type="email" class="form-control" id="email" name="email"
         placeholder="nama@contoh.id" autocomplete="email" required
         aria-describedby="bantuan-email">
  <div class="form-text" id="bantuan-email">
    Kami membalas ke email ini maksimal satu hari kerja.
  </div>
</div>
```

Penjelasan: satu kelompok kecil ini langsung memperlihatkan empat keputusan desain. `label for="email"` terhubung ke `id="email"`, jadi labelnya eksplisit dan fokusnya tepat; `form-control` menyeragamkan tampilan medan; `form-text` memberi konteks kenapa data itu diminta; sedangkan atribut `autocomplete="email"` membantu browser mengisi ulang data secara otomatis.

Anatomi satu unit form ini bisa kamu bayangkan kayak skema berikut (ilustrasi struktur — bukan kode yang perlu dijalankan).

```
<div class="mb-3">                      <- kelompok satu medan
  |- <label  class="form-label">        <- nama medan, selalu terlihat
  |- <input  class="form-control">      <- medan isian
  `- <div    class="form-text">         <- teks bantuan permanen (ops.)
</div>
```

Satu catatan versi yang perlu kamu tahu: dalam dokumentasi resmi Bootstrap 5.3, starter template buat website produksi memuat file JavaScript Bootstrap yang digabung. Di buku ini, kontraknya diganti menjadi komentar `<!-- Tanpa bootstrap.bundle (JavaScript di luar cakupan mata kuliah) -->`. Pada file latihan di bab ini, komentarnya ditulis sebagai `<!-- Tanpa Bootstrap JS ... -->`; maknanya tetap sama, cuma penulisannya yang disesuaikan dengan konteks bab yang memang belum membahas JavaScript.

### 11.4 Layout Form Kompleks

Form satu kolom memang jadi pilihan default yang aman, tetapi ada beberapa medan yang memang lebih enak ditaruh berdampingan: nama depan dan belakang, kota dan kode pos, atau berangkat dan tujuan. Bootstrap menyelesaikan ini lewat utilitas grid yang udah kamu pelajari di Bab 9: bungkus beberapa medan dalam satu `row`, lalu beri masing-masing `col`. Dengan `col-md-6`, dua medan akan berdampingan pada layar sedang ke atas dan otomatis menumpuk jadi satu kolom di HP — persis sesuai prinsip "satu kolom di layar kecil".

Gutter vertikal `g-3` (jarak antar sel grid) fungsinya sepadan dengan `mb-3` pada pola dasar: yang satu mengatur jarak antarbaris di dalam `row`, yang lain mengatur jarak antarkelompok di luar `row`. Pilih satu pola lalu pakai dengan konsisten; kalau keduanya dicampur di satu area tanpa alasan, ritme jaraknya jadi terasa acak. Buat medan yang jarang dipasangkan — misalnya `textarea` — biarkan `col-12` supaya lebarnya penuh.

Kasus layout yang paling mudah dibaca di Tokosaya adalah halaman checkout: ini bukan satu form besar, melainkan halaman yang menggabungkan daftar item, pilihan pengiriman (sebuah form), dan ringkasan biaya di sisi kanan. Struktur umumnya dua kolom di layar besar: `col-lg-8` buat isi transaksi dan `col-lg-4` buat ringkasan yang tetap terlihat utuh. Skema berikut memperlihatkan pembagiannya (ilustrasi struktur, bukan kode).

```
<main class="container">
  -> div.row.g-4
       |- div.col-lg-8   : tabel item keranjang + fieldset pengiriman
       `- div.col-lg-4   : kartu ringkasan + kupon + tombol utama
```

Cara membaca skema ini mengikuti urutan dokumen HTML: di layar lebar, kedua kolom tampil berdampingan karena totalnya pas dua belas (8 + 4); di bawah titik henti `lg`, keduanya otomatis menumpuk satu per satu — daftar item dulu, ringkasan sesudahnya — sehingga tetap enak dibaca. Pola serupa dipakai pada form kontak dua kolom: medan pendek dipasangkan dalam `col-md-6`, sedangkan medan panjang kayak `textarea` memakai `col-12`. Potongan berikut memperlihatkan pola pasangan nama depan-belakang yang sama akan kamu pakai.

File: tokosaya-bootstrap/kontak.html

```html
<!-- Cuplikan: dua medan bersebelahan di layar ≥ md, menumpuk di HP -->
<div class="row g-3">
  <div class="col-md-6">
    <label for="nama-depan" class="form-label">Nama Depan</label>
    <input type="text" class="form-control" id="nama-depan"
           name="nama-depan" autocomplete="given-name">
  </div>
  <div class="col-md-6">
    <label for="nama-belakang" class="form-label">Nama Belakang</label>
    <input type="text" class="form-control" id="nama-belakang"
           name="nama-belakang" autocomplete="family-name">
  </div>
</div>
```

Penjelasan: `row` mengelompokkan dua kolom, `g-3` memberi jarak antar kolom, dan `col-md-6` membuat masing-masing medan mengambil setengah lebar layar mulai dari titik henti *medium* — di HP keduanya otomatis kembali jadi satu kolom penuh. Atribut `autocomplete` dengan *token* `given-name` dan `family-name` bukan cuma membantu isi ulang, tetapi juga menyatakan tujuan medan dengan lebih jelas.

Ada satu pola lanjutan yang perlu kamu kenali namanya: `col-form-label`. Kelas ini membuat label sejajar secara vertikal dengan medan pas label dan medannya ditempatkan pada `col` yang berbeda dalam satu `row` (misalnya label di kolom kiri, medan di kolom kanan, kayak pola tabel lama). Buat Tokosaya yang memakai pola "label di atas medan", `form-label` udah cukup. Pakailah `col-form-label` cuma kalau labelnya memang diletakkan berdampingan dengan medan.

### 11.5 Status Visual Form

Sebuah antarmuka selalu "berbicara" lewat status. Status (*state*) adalah kondisi sebuah elemen pada satu momen: bisa diklik atau nggak, sedang dibaca atau nggak, benar atau salah. Pada form, dua status dasar datang dari atribut HTML, lalu dua status lainnya berasal dari kelas Bootstrap.

Pertama, atribut `disabled` membuat sebuah medan nggak bisa diedit, nggak ikut terkirim, dan tampil redup. Buat `select`, pasangan yang tepat juga tetap `disabled` (bukan `readonly`) karena pilihannya nggak berisi teks bebas. Kedua, atribut `readonly` membuat medan cuma bisa dibaca: isinya tetap terlihat dan tetap terkirim, tetapi nggak bisa diubah — cocok buat nomor pesanan yang udah terbit. Bootstrap otomatis memberi tampilan berbeda buat kedua status ini lewat CSS pada atribut itu, jadi kamu nggak perlu menambah kelas lagi.

Ketiga dan keempat adalah pasangan kelas visual: `is-valid` dan `is-invalid`. `is-valid` menandai medan yang isiannya memenuhi syarat sehingga Bootstrap memberi bingkai hijau dan ikon centang; `is-invalid` memberi bingkai merah pada medan yang bermasalah. Keduanya berpasangan dengan pembungkus pesan `valid-feedback` dan `invalid-feedback`. Hal pentingnya ada di aturan tampil: `invalid-feedback` baru muncul kalau medan di atasnya memakai `is-invalid`, begitu juga `valid-feedback` dengan `is-valid`. Jadi, pembungkus pesannya boleh udah kamu tulis dari awal; ia baru aktif pas statusnya dipasangkan.

Berikut potongan yang memperlihatkan kedua status sekaligus, kayak yang tampak pada panel demonstrasi status.

File: tokosaya-bootstrap/latihan/status-form.html

```html
<!-- Cuplikan: dua status statis pada form latihan -->
<div class="mb-3">
  <label for="nama-penerima" class="form-label">Nama Penerima</label>
  <input type="text" class="form-control is-valid" id="nama-penerima"
         name="nama-penerima" value="Budi Santoso">
  <div class="valid-feedback">Nama penerima terisi dengan benar.</div>
</div>

<div class="mb-3">
  <label for="kode-kupon" class="form-label">Kode Kupon</label>
  <input type="text" class="form-control is-invalid" id="kode-kupon"
         name="kode-kupon" value="TKSA-00" aria-describedby="bantuan-kupon">
  <div class="invalid-feedback">
    Kode kupon tidak ditemukan. Periksa kembali email promo Anda.
  </div>
  <div class="form-text" id="bantuan-kupon">Format contoh: TKSA-10.</div>
</div>
```

Penjelasan: kedua medan memakai struktur kelompok yang sama; yang berubah cuma kelas status dan pembungkus pesannya. Perhatikan bahwa `invalid-feedback` dan `form-text` bisa muncul berdampingan: `form-text` tetap ada sebagai bantuan, sedangkan `invalid-feedback` baru tampil karena `is-invalid` menandai medan. Nilai `value` di sini sengaja diisi langsung di markup supaya statusnya terlihat masuk akal.

Sekarang masuk ke catatan penting yang udah disinggung sejak awal bab. Kelas-kelas di atas hanyalah *styling statis*: kamu menuliskannya sendiri buat mempelajari bentuk visualnya. Dalam website produksi, kelas kayak ini biasanya ditambah dan dilepas otomatis oleh JavaScript Bootstrap sesuai isi pengguna, lengkap dengan kelas pembungkus kayak `was-validated` yang aktif setelah tombol kirim ditekan. Karena mata kuliah ini belum membahas JavaScript, mekanisme verifikasi aslinya nggak kita pakai dulu. Yang penting buatmu pahami sekarang adalah bentuk akhirnya dan kapan elemen-elemen itu muncul. Dua hal yang masih relevan dalam cakupan bab ini: atribut `required` membuat browser menampilkan pesan bawaan pas medan kosong dikirim, dan pesan status di dekat medan tetap jadi penjelas utama — warna saja nggak cukup, kayak dibahas lagi pada 11.7.

### 11.6 Focus dan Keyboard

Fokus (*focus*) adalah status khusus yang menandai elemen aktif sekarang: medan yang sedang diisi atau link yang sedang dituju. Bagi pengguna yang bergantung banget pada keyboard — termasuk pengguna dengan gangguan motorik, pengguna layar besar sambil memegang telepon, atau bahkan kamu sendiri pas tangan belum pindah dari keyboard — fokus adalah penunjuk utama. Karena itu, aturan pertamanya jelas: **gaya fokus harus tetap terlihat.** Bootstrap udah memberi cincin fokus yang cukup jelas pada setiap `form-control`; jangan menghapusnya. Form yang kelihatan "bersih" tetapi nggak punya indikator fokus justru menyulitkan pengguna keyboard.

CSS membedakan dua keadaan: `:focus` aktif pas elemen sedang fokus, apa pun cara pengguna mencapainya (termasuk klik mouse), sedangkan `:focus-visible` biasanya cuma muncul buat fokus yang datang dari navigasi keyboard. Pembagian ini berguna karena fokus yang menonjol banget penting buat pengguna keyboard, tetapi bisa terasa berlebihan kalau selalu muncul setiap kali elemen diklik. Browser modern udah menangani pembedaan ini dengan cukup baik; kalau proyek Tokosaya ingin memberi gaya fokus sendiri, cukup buat satu aturan `:focus-visible` di `css/style.css`, kayak yang udah disiapkan pada Praktikum.

Aliran fokus, atau *tab order*, adalah urutan medan yang dilalui Tombol Tab. Secara bawaan, urutannya mengikuti susunan elemen di dokumen HTML. Itulah sebabnya prinsip "urutan visual = urutan DOM" udah dibahas sejak Bab 2: kalau urutannya logis buat mata dan pembaca layar, biasanya logis juga buat pengguna keyboard. Atribut `tabindex` memang tersedia buat penyesuaian khusus: nilai `0` memasukkan elemen yang biasanya nggak bisa difokuskan, nilai `-1` dipakai buat memindahkan fokus secara programatik, sedangkan nilai positif sebaiknya dihindari karena merusak urutan alami. Buat form yang kamu bangun di bab ini, pilihan terbaik biasanya justru "tanpa `tabindex`".

Ada dua atribut terkait fokus yang perlu dipakai dengan hati-hati. Atribut `autofocus` membuat browser langsung memfokuskan satu medan pas halaman dimuat; pakai ini cuma kalau memang itulah tugas utama halaman, misalnya halaman pencarian sederhana, karena perpindahan fokus otomatis bisa membingungkan pengguna keyboard. Selain itu, menekan tombol Enter di dalam form yang punya tombol kirim bawaan akan mengirim formulir. Ini berguna buat pengguna keyboard, asalkan layoutnya nggak dipenuhi banyak tombol dengan aksi berbeda. Detail kombinasi tombol kadang bisa berbeda antarbrowser, jadi buat kasus khusus kamu tetap perlu mengecek dokumentasi resmi (MDN / getbootstrap.com).

Ada uji singkat yang sering dipakai pemeriksa aksesibilitas, dan sebaiknya kamu biasakan juga: buka halaman form, letakkan tangan di keyboard, lalu tekan Tab berulang dari awal halaman. Amati tiga hal: apakah setiap medan bisa dijangkau, apakah urutan fokusnya mengikuti urutan visual, dan apakah setiap medan punya penanda fokus yang jelas. Tiga pertanyaan ini akan muncul lagi pas audit aksesibilitas di Bab 13.

### 11.7 Aksesibilitas Form

Aksesibilitas (*accessibility*) adalah kemampuan antarmuka buat dipakai oleh semua pengguna, termasuk pengguna *screen reader*, papan ketik, dan pembesaran layar. Pada form, ada tiga praktik dasar yang dampaknya besar: label eksplisit, `placeholder` yang nggak menggantikan label, dan atribut `autocomplete` yang menjelaskan tujuan medan.

**Label eksplisit.** Setiap medan perlu punya label yang terhubung `for`-`id` — praktik yang udah kamu pakai sejak 11.2. Bagi pembaca layar, label itulah nama resmi sebuah medan; tanpa hubungan itu, yang terdengar cuma "kotak isian". Kalau label yang terlihat terasa belum cukup menjelaskan (misalnya buat medan alamat dengan kebutuhan khusus), kamu bisa menambahkan `aria-label` atau `aria-labelledby` sebagai pelengkap, bukan sebagai pengganti label yang terlihat.

**Placeholder bukan label.** Teks *placeholder* akan hilang pas pengguna mulai mengetik, biasanya berkontras lebih lemah, dan nggak bisa diandalkan pembaca layar sebagai nama medan. Jadi, gunakan placeholder cuma buat contoh format — misalnya `nama@domain.id` pada email atau `0812-3456-7890` pada telepon — lalu taruh aturan atau kewajiban isian pada `form-text`. Kalau satu-satunya petunjuk cuma placeholder, pengguna justru kehilangan panduan pas mulai mengisi.

**Atribut `autocomplete`.** Dengan nilai kayak `name`, `email`, `tel`, `given-name`, dan `family-name`, browser bisa mengisi ulang data yang udah pernah disimpan pengguna — hasilnya salah ketik berkurang dan proses isi form jadi lebih cepat. Lebih dari itu, W3C menempatkan identifikasi tujuan medan (WCAG, kriteria 1.3.5) sebagai bagian dari aksesibilitas: medan yang mengumpulkan data pengguna perlu menyatakan tujuannya dengan cara yang bisa diprogram, dan `autocomplete` adalah cara paling sederhana buat melakukannya. Buat form pengiriman barang, WHATWG juga mengenal prefiks kayak `shipping` dan `billing` sebelum *token* nama medan; karena detail nilainya bisa berubah menurut versi, cukup pahami pendekatannya dan cek dokumentasi resmi (MDN) pas benar-benar dipakai.

**Penghubungan teks bantuan.** Teks bantuan `form-text` yang nggak dihubungkan ke medannya akan terdengar kayak paragraf biasa bagi pembaca layar. Pola yang benar sebenarnya sederhana: beri `id` pada `form-text`, lalu hubungkan dari medan dengan `aria-describedby`, persis kayak contoh bidang `email` di 11.3. Atribut kayak `aria-required` memang ada, tetapi dalam praktik dasar bab ini, atribut `required` bawaan HTML udah cukup karena dipahami oleh browser dan pembaca layar sekaligus.

**Pesan status yang dibaca.** Pesan valid atau nggak valid yang tampil sebagai teks di dekat medan memenuhi prinsip penting WCAG: informasi nggak boleh disampaikan lewat warna saja. Bingkai merah pada `is-invalid` nggak banyak membantu pengguna buta warna kalau nggak ada teks pendamping; sebaliknya, pesan `invalid-feedback` yang tertulis membuat masalahnya langsung jelas. Karena itulah desain Tokosaya selalu memasangkan status visual dengan pesan kata-kata, bukan menggantinya.

Kalau seluruh praktik ini terpenuhi, formmu udah memenuhi fondasi WCAG 2.2 yang paling sering dicek: label, tujuan medan, kontras status, dan navigasi keyboard. Pengukuran yang lebih formal — kayak kontras, urutan dokumen, atau pengujian *device* — akan dibahas lagi dengan alatnya sendiri pada Bab 13, pas kamu mengaudit seluruh proyek Tokosaya.

## Konsep Penting

| Konsep | Ringkasan | Dibahas |
|---|---|---|
| Formulir (form) | kontrol terstruktur buat mengumpulkan dan mengirim data pengguna | 11.1 |
| Prinsip satu kolom | aliran membaca vertikal; cuma pasangan medan pendek yang bersebelahan | 11.1, 11.4 |
| Label terlihat | nama medan yang tetap tampil dan terhubung `for`–`id` | 11.1, 11.2, 11.7 |
| Pengelompokan | `fieldset`/`legend` dan `row`/`col` memisahkan bagian yang berbeda makna | 11.2, 11.4 |
| Tombol aksi (CTA) | satu tombol utama per halaman dengan label yang menyatakan akibatnya | 11.1 |
| Input type semantik | `email`, `tel`, `number` menyesuaikan keyboard dan pembatasan isian | 11.2 |
| Pola dasar Bootstrap | `div.mb-3` + `label.form-label` + medan `form-control` | 11.3 |
| `form-text` | teks bantuan permanen; dihubungkan lewat `aria-describedby` | 11.3, 11.7 |
| `input-group` | menggabungkan medan dengan lampiran teks (`@`, `Rp`) atau tombol | 11.3 |
| `row`/`col` dalam form | dua kolom pada `col-md-6`, satu kolom otomatis di HP; gutter `g-3` | 11.4 |
| Layout checkout | daftar item `col-lg-8`, ringkasan `col-lg-4` | 11.4 |
| Status visual statis | `is-valid`/`is-invalid` + `valid-feedback`/`invalid-feedback`; verifikasi asli memakai JavaScript Bootstrap | 11.5 |
| `disabled`/`readonly` | atribut HTML; `readonly` cuma buat medan teks yang tetap terkirim | 11.5 |
| Fokus yang jelas | `:focus-visible`, urutan tab mengikuti urutan dokumen | 11.6 |
| `autocomplete` | isi ulang otomatis sekaligus identifikasi tujuan medan (WCAG 1.3.5) | 11.7 |

## Contoh Kode

Dua contoh berikut melengkapi Praktikum. Contoh pertama menyusun form dua kolom lengkap — pola paling umum buat pendaftaran acara akademik. Contoh kedua membumikan seluruh status visual dalam satu halaman demonstrasi. Keduanya bersifat mandiri dan bisa ditulis ulang mulai dari baris pertama.

**Contoh 1 — Form pendaftaran webinar dua kolom.** Formulir di bawah menyatukan layout dua kolom, `select`, `fieldset` radio sejajar, dan tombol aksi — pola yang nanti kamu cermin pada kasus pendaftaran Ujian Akhir di bagian Studi Kasus.

File: tokosaya-bootstrap/latihan/form-dua-kolom.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pendaftaran Webinar — Latihan Bab 11</title>
  <!-- Bootstrap 5.3.3 via CDN -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <!-- Tanpa Bootstrap JS: JavaScript di luar cakupan mata kuliah -->
</head>
<body class="bg-body-tertiary">
  <main class="container my-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1 class="h3 fw-bold mb-1">Pendaftaran Webinar "Data untuk Keputusan"</h1>
        <p class="text-body-secondary mb-4">Latihan layout form dua kolom.</p>

        <form class="card shadow-sm" action="#" method="get">
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-6">
                <label for="depan" class="form-label">Nama Depan</label>
                <input type="text" class="form-control" id="depan"
                       name="depan" autocomplete="given-name">
              </div>
              <div class="col-md-6">
                <label for="belakang" class="form-label">Nama Belakang</label>
                <input type="text" class="form-control" id="belakang"
                       name="belakang" autocomplete="family-name">
              </div>
              <div class="col-12">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email"
                       name="email" placeholder="nama@kampus.ac.id"
                       autocomplete="email" aria-describedby="bantuan-email" required>
                <div class="form-text" id="bantuan-email">
                  Tautan undangan dikirim ke email ini.
                </div>
              </div>
              <div class="col-md-6">
                <label for="prodi" class="form-label">Program Studi</label>
                <select class="form-select" id="prodi" name="prodi">
                  <option value="" selected>Pilih program studi…</option>
                  <option value="si">Sistem Informasi</option>
                  <option value="ti">Teknik Informatika</option>
                  <option value="mn">Manajemen</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="angkatan" class="form-label">Angkatan</label>
                <input type="number" class="form-control" id="angkatan"
                       name="angkatan" min="2000" max="2030" placeholder="2025">
              </div>
              <div class="col-12">
                <fieldset>
                  <legend class="fs-6 mb-2">Kesediaan Menjadi Pembicara</legend>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="presentasi"
                           id="psn-ya" value="ya" checked>
                    <label class="form-check-label" for="psn-ya">Ya, bersedia</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="presentasi"
                           id="psn-tidak" value="tidak">
                    <label class="form-check-label" for="psn-tidak">Belum untuk kali ini</label>
                  </div>
                </fieldset>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="setuju"
                         name="setuju" required>
                  <label class="form-check-label" for="setuju">
                    Data saya dipakai hanya untuk administrasi acara ini.
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary px-4">Daftar Sekarang</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</body>
</html>
```

Penjelasan singkat: seluruh form memakai dua pola yang dibahas di 11.4 — `row g-3` sebagai pembungkus pasangan medan, dan pembagian `col-md-6` buat dua medan pendek; cuma medan panjang (`email`) yang merentang `col-12` dengan teks bantuan. Tombolnya satu, berlabel "Daftar Sekarang" yang menyatakan akibat jelas.

**Contoh 2: panel demonstrasi status form.** Halaman pendek berikut merangkum seluruh status yang dibahas pada 11.5 sehingga kamu bisa membandingkan tampilannya satu per satu di satu tempat.

File: tokosaya-bootstrap/latihan/status-form.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Demonstrasi Status Form — Latihan Bab 11</title>
  <!-- Bootstrap 5.3.3 via CDN -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <!-- Tanpa Bootstrap JS: JavaScript di luar cakupan mata kuliah -->
</head>
<body class="bg-body-tertiary">
  <main class="container my-5" style="max-width: 560px;">
    <h1 class="h3 fw-bold mb-1">Status Form — Demonstrasi Statis</h1>
    <!-- khusus demonstrasi: status dan gaya ditulis manual -->
    <p class="text-body-secondary mb-4">
      Kelas status ditulis manual untuk mempelajari bentuk visualnya.
    </p>

    <div class="mb-3">
      <label for="demo-valid" class="form-label">Medan Valid</label>
      <input type="text" class="form-control is-valid" id="demo-valid"
             name="demo-valid" value="Data yang memenuhi syarat">
      <div class="valid-feedback">Isian sesuai syarat.</div>
    </div>

    <div class="mb-3">
      <label for="demo-invalid" class="form-label">Medan Tidak Valid</label>
      <input type="text" class="form-control is-invalid" id="demo-invalid"
             name="demo-invalid" value="xx">
      <div class="invalid-feedback">Tulis minimal lima karakter.</div>
    </div>

    <div class="mb-3">
      <label for="demo-readonly" class="form-label">Nomor Pesanan (baca saja)</label>
      <input type="text" class="form-control" id="demo-readonly"
             name="demo-readonly" value="TSA-2026-0001" readonly>
      <div class="form-text">Terbit otomatis, tidak dapat diubah.</div>
    </div>

    <div class="mb-3">
      <label for="demo-disabled" class="form-label">Promo Kedaluwarsa</label>
      <input type="text" class="form-control" id="demo-disabled"
             name="demo-disabled" value="TKSA-05" disabled>
    </div>
  </main>
</body>
</html>
```

Penjelasan singkat: halaman ini memadukan keempat status medan — valid, nggak valid, *readonly*, dan *disabled* — dalam satu panel supaya perbedaannya terlihat satu sama lain. Atribut `style="max-width"` pada `main` diberi catatan `<!-- khusus demonstrasi -->` karena cuma dimaksudkan mempersempit lebar panel demo, bukan pola produksi.

## Penjelasan Kode

**Contoh 1 — form dua kolom.** Struktur terpenting ada pada pembungkusannya. Satu `form` menampung seluruh medan karena data itu satu kesatuan pendaftaran; di dalamnya setiap kelompok label–medan dibungkus `div` berkelas `col-*` sehingga grid Bootstrap mengatur jarak dan lebar. Alasan memilih `col-md-6` (bukan `col-6`) adalah bahwa pada HP — titik henti di bawah *medium* — medan kembali satu kolom penuh, sementara `col-6` akan tetap membagi layar HP dan membuat isian sempit. Pasangan radio dalam `fieldset` memakai `form-check-inline` karena pilihannya pendek dan saling keterkaitan jelas; checkbox persetujuan ditempatkan terpisah karena maknanya berbeda dari pilihan radio. Atribut `required` pada email dan setuju mengaktifkan pemeriksaan bawaan browser pas tombol kirim ditekan — tanpa satu pun bagian JavaScript.

**Contoh 2 — panel status.** Empat unit pada halaman ini disusun berurutan supaya perbedaannya bisa dibaca berdampingan, kayak galeri status. Kelas `is-valid` dan `is-invalid` mengambil alih warna bingkai medan dan mengaktifkan pembungkus pesan masing-masing; `form-text` tetap hidup di bawahnya sebagai bantuan permanen. Atribut `readonly` dipilih buat nomor pesanan karena isiannya harus tetap terkirim bersama form, sedangkan `disabled` dipakai pada promo yang udah kedaluwarsa dan memang nggak disertakan. Dalam website nyata, penandaan status ini akan dilakukan oleh JavaScript Bootstrap menurut isian pengguna; di sini kelas ditulis manual supaya bentuk visualnya bisa dipelajari — dan itu penuh sesuai tujuan latihan ini.

Kedua contoh mengikuti satu pola yang kini jadi refleksmu: kelompok per medan, label selalu terpasang, kelas utilitas Bootstrap yang dipilih karena perannya, dan CSS kustom diberi komentar `/* kustom */` kalau benar-benar diperlukan. Pola ini akan terlihat lagi pada tiga file Praktikum berikut.

## Praktikum

Praktikum ini menambah dua halaman baru ke proyek `tokosaya-bootstrap/`: halaman **keranjang** (checkout visual statis) dan halaman **kontak** dengan form yang memakai kelas form Bootstrap lengkap dengan status visual statis.

Catatan jujur sebelum memulai: status `is-valid`/`is-invalid` pada praktikum ini ditulis manual sebagai latihan *styling*. Pemverifikasi form sungguhan memakai JavaScript Bootstrap yang menambah/menghapus kelas itu menurut isian pengguna — materi yang berada di luar cakupan mata kuliah ini; kita mempelajari bentuk visualnya saja.

### Tujuan Praktikum

Sesudah praktikum ini, mahasiswa bisa: (1) membangun halaman checkout visual statis dengan utilitas grid dan komponen Bootstrap; (2) menulis form kontak dengan seluruh kelas form baku (`form-label`, `form-control`, `form-text`, `form-check`, `form-select`, `input-group`); (3) menyusun layout form responsif satu-dua kolom dengan `row`/`col`; (4) menerapkan status visual statis beserta pesan feedback; (5) memeriksa hasil dengan inspeksi browser pada beberapa lebar layar.

### Kebutuhan

- Folder `tokosaya-bootstrap/` hasil Bab 9–10 yang memuat `index.html`, `katalog.html`, `tentang.html`, dan `kontak.html` (akan dibangun ulang), serta folder `css/` dan `img/`.
- Visual Studio Code (atau editor pilihanmu) dan Google Chrome dengan DevTools.
- Koneksi internet pas pertama kali membuka halaman, buat memuat CDN Bootstrap 5.3.3, Bootstrap Icons 1.11.3, dan Google Fonts sesuai kontrak bab ini.
- Daftar produk baku Tokosaya (Bab 4): pada praktikum ini dipakai KX-210, MW-88, dan FD-64.

### Persiapan

1. Buka folder `tokosaya-bootstrap/` di VS Code dan pastikan file `css/style.css` berisi design token Bab 4 (bagian `:root`).
2. Pastikan gambar produk ada di `img/` dengan pola nama `produk-<nama>-<kode>.svg` (misal `produk-keyboard-kx210.svg`). Kalau belum ada, salin dari folder `tokosaya-css/img/` hasil Bab 5–8.
3. Siapkan data keranjang sesuai tabel baku: KX-210 (1 unit), MW-88 (2 unit), FD-64 (1 unit).
4. Ingat kontak baku Tokosaya: Jl. Digital Raya No. 10, Jakarta; halo@tokosaya.id; (021) 555-0199.

### Langkah Kerja

1. **Perbarui `css/style.css`.** Buka filenya dan pastikan bagian token serta aturan font tokoh udah sama dengan blok kode di bagian Kode di bawah; kalau kamu udah punya versi Bab 9–10, cukup tambahkan bagian yang belum ada.
2. **Buat `keranjang.html`.** Buat file baru di root folder, ketik ulang blok HTML keranjang dari atas ke bawah, lalu simpan.
3. **Buat ulang `kontak.html`.** Ganti isi versi lama dengan versi form Bootstrap dari blok di bawah, satu blok penuh.
4. **Buka dan periksa visual.** Jalankan `keranjang.html` lewat Live Server atau buka langsung dari penjelajah file; periksa navbar, tabel item, ringkasan, dan tombolnya.
5. **Periksa responsif keranjang.** Di DevTools, mode perangkat seluler, periksa pada lebar 1200px, 768px, dan 375px: pastikan dua kolom di 1200px menumpuk di 375px dan tabel sempit menggulir (bukan melar), bukan meluap melampaui layar.
6. **Periksa status visual kontak.** Di `kontak.html`, pastikan medan nama bertanda hijau dengan pesan `valid-feedback` yang tampil, dan medan email bertanda merah dengan pesan `invalid-feedback` yang tampil keduanya sekaligus hasil kelas yang ditulis manual.
7. **Periksa aliran fokus.** Tekan Tab dari awal dokumen pada kontak.html; catat urutan medan yang dilalui tombol Tab dan bandingkan dengan urutan visualnya.
8. **Kirim uji coba.** Klik tombol "Kirim Pesan" setelah mengisi nama dan email; lihat perubahan URL di address bar (berisi parameter `?nama=...`) — perhatikan bahwa halaman memuat ulang karena belum ada pengolah data (perilaku bawaan `form`).
9. **Rekam pengamatan.** Tuliskan hasil pengamatan langkah 4–8 pada catatan belajarmu; halaman ini akan dipakai ulang pada audit Bab 13.

### Kode

Tiga blok berikut adalah isi lengkap file yang direkomendasikan. Semua halaman memakai CDN Bootstrap 5.3.3 dan Bootstrap Icons 1.11.3 dengan pin yang sama kayak Kontrak.

File: tokosaya-bootstrap/css/style.css

```css
/* kustom — css/style.css versi ringkas buat Bab 11.
   Kalau style.css Bab 9–10 kamu udah lengkap, pertahankan versimu;
   cukup pastikan bagian :root dan aturan font/latar di bawah tersedia. */

:root {
  --clr-primary: #4F46E5;      /* indigo — tombol & link utama */
  --clr-primary-dark: #4338CA;
  --clr-accent: #F59E0B;       /* amber — badge & sorotan */
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

/* kustom — memetakan token ke halaman Bootstrap */
body {
  font-family: var(--font-body);
  color: var(--clr-body);
  background-color: var(--clr-bg);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--clr-dark);
}

/* kustom — fokus tetap terlihat bagi pengguna keyboard (11.6) */
:focus-visible {
  outline: 3px solid var(--clr-primary);
  outline-offset: 2px;
}
```

Penjelasan: file ini lengkap dan bisa dijalankan sendiri, tapi sengaja ringkas. Blok `:root` menyalin token Tokosaya supaya file mandiri; `body` dan heading memetakan font serta warna token ke tema Bootstrap; aturan `:focus-visible` memastikan gaya fokus jelas memakai warna token — diberi komentar `/* kustom */` sesuai kontrak.

File: tokosaya-bootstrap/keranjang.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Keranjang Belanja — Tokosaya</title>
  <!-- Bootstrap 5.3.3 via CDN -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <!-- Bootstrap Icons 1.11.3 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <!-- Poppins + Inter -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <!-- kustom -->
  <link rel="stylesheet" href="css/style.css">
  <!-- Tanpa Bootstrap JS: JavaScript di luar cakupan mata kuliah -->
</head>
<body>
  <header>
    <nav class="navbar navbar-expand-md bg-body-tertiary border-bottom">
      <div class="container justify-content-between">
        <a class="navbar-brand fw-bold" href="index.html">Tokosaya</a>
        <div class="navbar-nav flex-row flex-wrap gap-1">
          <a class="nav-link" href="index.html">Beranda</a>
          <a class="nav-link" href="katalog.html">Katalog</a>
          <a class="nav-link" href="tentang.html">Tentang</a>
          <a class="nav-link" href="kontak.html">Kontak</a>
          <a class="nav-link active d-flex align-items-center gap-1"
             href="keranjang.html" aria-current="page">
            <i class="bi bi-cart3" aria-hidden="true"></i> Keranjang
            <span class="badge text-bg-danger rounded-pill">4</span>
          </a>
        </div>
      </div>
    </nav>
  </header>

  <main class="container my-4">
    <h1 class="mb-1">Keranjang Belanja</h1>
    <p class="text-body-secondary mb-4">
      Tinjau pesanan Anda, pilih pengiriman, lalu lanjutkan ke pembayaran.
    </p>

    <div class="row g-4">
      <!-- kolom kiri: daftar item + pilihan pengiriman -->
      <div class="col-lg-8">
        <div class="table-responsive bg-white rounded border">
          <table class="table align-middle mb-0">
            <caption class="visually-hidden">Daftar produk dalam keranjang</caption>
            <thead class="table-light">
              <tr>
                <th scope="col">Produk</th>
                <th scope="col">Harga</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center gap-3">
                    <img src="img/produk-keyboard-kx210.svg" alt="Keyboard Mekanis KX-210"
                         width="72" height="72" class="rounded border">
                    <div>
                      <div class="fw-semibold">Keyboard Mekanis KX-210</div>
                      <div class="small text-body-secondary">Aksesori Input</div>
                      <span class="badge text-bg-warning">Best Seller</span>
                    </div>
                  </div>
                </td>
                <td>Rp650.000</td>
                <td>1</td>
                <td class="fw-semibold">Rp650.000</td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center gap-3">
                    <img src="img/produk-mouse-mw88.svg" alt="Mouse Wireless MW-88"
                         width="72" height="72" class="rounded border">
                    <div>
                      <div class="fw-semibold">Mouse Wireless MW-88</div>
                      <div class="small text-body-secondary">Aksesori Input · MW-88</div>
                      <span class="badge text-bg-success">Tersedia</span>
                    </div>
                  </div>
                </td>
                <td>Rp185.000</td>
                <td>2</td>
                <td class="fw-semibold">Rp370.000</td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center gap-3">
                    <img src="img/produk-flashdrive-fd64.svg" alt="Flash Drive 64GB FD-64"
                         width="72" height="72" class="rounded border">
                    <div>
                      <div class="fw-semibold">Flash Drive 64GB FD-64</div>
                      <div class="small text-body-secondary">Penyimpanan · FD-64</div>
                      <span class="badge text-bg-success">Tersedia</span>
                    </div>
                  </div>
                </td>
                <td>Rp95.000</td>
                <td>1</td>
                <td class="fw-semibold">Rp95.000</td>
              </tr>
            </tbody>
            <tfoot class="table-light">
              <tr>
                <td colspan="3" class="text-end fw-semibold">Subtotal (4 item)</td>
                <td class="fw-semibold">Rp1.115.000</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <fieldset class="mt-4 mb-3">
          <legend class="small text-uppercase text-body-secondary mb-2">
            Pilihan Pengiriman
          </legend>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="pengiriman"
                   id="kirim-reguler" value="reguler" checked>
            <label class="form-check-label" for="kirim-reguler">
              Reguler (2–3 hari) — Rp20.000
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="pengiriman"
                   id="kirim-sameday" value="sameday">
            <label class="form-check-label" for="kirim-sameday">
              Same Day (hari yang sama) — Rp35.000
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="pengiriman"
                   id="kirim-ambil" value="ambil">
            <label class="form-check-label" for="kirim-ambil">
              Ambil di Toko (Jl. Digital Raya No. 10, Jakarta) — gratis
            </label>
          </div>
        </fieldset>
      </div>

      <!-- kolom kanan: ringkasan + kupon + tombol utama -->
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="h5 fw-bold mb-3">Ringkasan Pesanan</h2>
            <ul class="list-unstyled d-grid gap-2 mb-3 small">
              <li class="d-flex justify-content-between">
                <span>Subtotal (4 item)</span>
                <span>Rp1.115.000</span>
              </li>
              <li class="d-flex justify-content-between">
                <span>Ongkos kirim (Reguler)</span>
                <span>Rp20.000</span>
              </li>
              <li class="d-flex justify-content-between border-top pt-2 fw-bold">
                <span>Total</span>
                <span>Rp1.135.000</span>
              </li>
            </ul>

            <form action="#" method="get">
              <div class="mb-3">
                <label for="kupon" class="form-label">Kode Kupon</label>
                <div class="input-group">
                  <input type="text" class="form-control" id="kupon" name="kupon"
                         placeholder="TKSA-10" aria-describedby="bantuan-kupon">
                  <button class="btn btn-outline-primary" type="button">Pakai</button>
                </div>
                <div class="form-text" id="bantuan-kupon">
                  Kupon diuji saat tombol Pakai ditekan pada tahap pembayaran.
                </div>
              </div>
              <button class="btn btn-primary w-100" type="button">
                Lanjut ke Pembayaran
              </button>
            </form>

            <p class="form-text mt-2 mb-0">
              Halaman ini checkout visual statis; alur pembayaran sungguhan
              memerlukan pemroses data di sisi server.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="border-top py-4 mt-5">
    <div class="container small text-body-secondary">
      <p class="mb-1 fw-semibold">Tokosaya — “Belanja Tepat, Kirim Cepat”</p>
      <p class="mb-0">Jl. Digital Raya No. 10, Jakarta · halo@tokosaya.id · (021) 555-0199</p>
    </div>
  </footer>
</body>
</html>
```

File: tokosaya-bootstrap/kontak.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Kontak — Tokosaya</title>
  <!-- Bootstrap 5.3.3 via CDN -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <!-- Bootstrap Icons 1.11.3 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <!-- Poppins + Inter -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <!-- kustom -->
  <link rel="stylesheet" href="css/style.css">
  <!-- Tanpa Bootstrap JS: JavaScript di luar cakupan mata kuliah -->
</head>
<body>
  <header>
    <nav class="navbar navbar-expand-md bg-body-tertiary border-bottom">
      <div class="container justify-content-between">
        <a class="navbar-brand fw-bold" href="index.html">Tokosaya</a>
        <div class="navbar-nav flex-row flex-wrap gap-1">
          <a class="nav-link" href="index.html">Beranda</a>
          <a class="nav-link" href="katalog.html">Katalog</a>
          <a class="nav-link" href="tentang.html">Tentang</a>
          <a class="nav-link active" href="kontak.html" aria-current="page">Kontak</a>
          <a class="nav-link d-flex align-items-center gap-1" href="keranjang.html">
            <i class="bi bi-cart3" aria-hidden="true"></i> Keranjang
            <span class="badge text-bg-danger rounded-pill">4</span>
          </a>
        </div>
      </div>
    </nav>
  </header>

  <main class="container my-4">
    <h1 class="mb-2">Kontak</h1>
    <p class="text-body-secondary mb-4">
      Tim Tokosaya membalas maksimal satu hari kerja.
    </p>

    <div class="row g-4">
      <div class="col-lg-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h2 class="h5 fw-bold mb-3">Informasi Toko</h2>
            <address class="fst-normal mb-0 small">
              <p class="mb-2">
                <i class="bi bi-geo-alt me-2" aria-hidden="true"></i>
                Jl. Digital Raya No. 10, Jakarta
              </p>
              <p class="mb-2">
                <i class="bi bi-envelope me-2" aria-hidden="true"></i>
                <a href="mailto:halo@tokosaya.id">halo@tokosaya.id</a>
              </p>
              <p class="mb-0">
                <i class="bi bi-telephone me-2" aria-hidden="true"></i>
                (021) 555-0199
              </p>
            </address>
          </div>
        </div>
      </div>

      <div class="col-lg-8">
        <div class="alert alert-info small mb-3" role="alert">
          Status hijau/merah pada form ini <strong>ditulis manual</strong>
          (kelas <code>is-valid</code> dan <code>is-invalid</code>) sebagai latihan
          <em>styling</em>. Verifikasi form sungguhan memakai JavaScript Bootstrap
          yang berada di luar cakupan mata kuliah ini.
        </div>

        <form class="card shadow-sm" action="#" method="get">
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-6">
                <label for="nama" class="form-label">Nama Lengkap</label>
                <input type="text" class="form-control is-valid" id="nama"
                       name="nama" placeholder="Budi Santoso" autocomplete="name" required>
                <div class="valid-feedback">Nama terisi dengan benar.</div>
              </div>
              <div class="col-md-6">
                <label for="email" class="form-label">Alamat Email</label>
                <div class="input-group has-validation">
                  <span class="input-group-text" id="awalan-email">@</span>
                  <input type="email" class="form-control is-invalid" id="email"
                         name="email" aria-describedby="awalan-email"
                         autocomplete="email" required>
                  <div class="invalid-feedback">
                    Format email belum tepat — contoh: nama@domain.id.
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <label for="telepon" class="form-label">
                  Nomor Telepon <span class="text-body-secondary">(opsional)</span>
                </label>
                <input type="tel" class="form-control" id="telepon"
                       name="telepon" placeholder="0812-3456-7890" autocomplete="tel"
                       aria-describedby="bantuan-telepon">
                <div class="form-text" id="bantuan-telepon">
                  Gunakan nomor yang aktif menerima pesan.
                </div>
              </div>
              <div class="col-md-6">
                <label for="topik" class="form-label">Topik</label>
                <select class="form-select" id="topik" name="topik">
                  <option value="" selected>Pilih topik…</option>
                  <option value="produk">Pertanyaan Produk</option>
                  <option value="pesanan">Status Pesanan</option>
                  <option value="reseller">Kerja Sama / Reseller</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
              <div class="col-12">
                <label for="pesan" class="form-label">Pesan</label>
                <textarea class="form-control" id="pesan" name="pesan" rows="5"
                          placeholder="Tulis pesan Anda di sini…"
                          aria-describedby="bantuan-pesan"></textarea>
                <div class="form-text" id="bantuan-pesan">
                  Sertakan nomor pesanan bila menyangkut transaksi.
                </div>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="setuju"
                         name="setuju" value="setuju" required>
                  <label class="form-check-label" for="setuju">
                    Saya menyetujui kebijakan privasi Tokosaya.
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Kirim Pesan</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>

  <footer class="border-top py-4 mt-5">
    <div class="container small text-body-secondary">
      <p class="mb-1 fw-semibold">Tokosaya — “Belanja Tepat, Kirim Cepat”</p>
      <p class="mb-0">Jl. Digital Raya No. 10, Jakarta · halo@tokosaya.id · (021) 555-0199</p>
    </div>
  </footer>
</body>
</html>
```

### Penjelasan Kode

**`css/style.css`.** File ini membawa design token Tokosaya (Bab 4) ke halaman Bootstrap: font Poppins/Inter, warna indigo sebagai aksen, dan latar abu muda. Aturan `:focus-visible` memastikan cincin fokus terlihat jelas pada setiap medan — perbaikan aksesibilitas kecil yang dibahas di 11.6. Bila `style.css` kamu dari Bab 9–10 udah memuat bagian ini, jangan ditimpa; cukup pastikan aturan `:focus-visible` ada.

**`keranjang.html`.** Halaman ini mengikuti pola tiga zona dari 11.4: daftar item di `col-lg-8` (tabel responsif di dalam `table-responsive`), pilihan pengiriman sebagai `fieldset` radio, dan ringkasan biaya di `col-lg-4` berupa kartu. Angka pada tabel dan ringkasan dihitung konsisten dengan dataset baku: 650.000 + 370.000 + 95.000 = Rp1.115.000, plus ongkir Rp20.000 = Rp1.135.000. Kupon memakai pola `input-group` berisikan medan isian dan tombol "Pakai" yang diberi `type="button"` supaya nggak menyerahkan formulir. Tombol "Lanjut ke Pembayaran" adalah satu-satunya tombol utama di halaman, sesuai prinsip CTA di 11.1.

**`kontak.html`.** Form kontak memuat seluruh kelas baku Bab ini: `form-label` pada semua label, `form-control` pada semua medan teks, `form-select` pada topik, `form-check` pada persetujuan, dan dua pola `input-group` (tanda `@` pada email; tombol lampiran). Layout dua kolom memakai `row g-3` dengan pasangan `col-md-6` buat nama–email dan telepon–topik, lalu `col-12` buat textarea (medan panjang nggak berpasangan). Status statis: `is-valid` + `valid-feedback` pada nama, `is-invalid` + `invalid-feedback` pada email, dengan komentar HTML yang menyatakan kelasnya ditulis manual sebagai latihan visual. Atribut `autocomplete` (`name`, `email`, `tel`) dipasang sesuai 11.7, dan setiap `form-text` bantuan terhubung ke medannya melalui `aria-describedby` (`bantuan-telepon`, `bantuan-pesan`) — kecuali medan email yang `aria-describedby`-nya mengarah ke lampiran grup `@` karena itulah teks yang menyandingkan makna isian.

### Hasil yang Diharapkan

Sesudah praktikum, kamu mengamati hal-hal berikut di browser:

- Di lebar 1200px, halaman keranjang menampilkan dua kolom: daftar item ±66% kiri dan kartu ringkasan ±33% kanan (pembagian `col-lg-8`/`col-lg-4`). Di 375px, kedua zona menumpuk satu kolom penuh.
- Kartu ringkasan menampilkan tiga baris biaya dengan angka yang tepat: Subtotal Rp1.115.000, Ongkos kirim Rp20.000, Total Rp1.135.000 (baris total tercetak tebal dan terpisah garis).
- Di form kontak, medan "Nama Lengkap" berbingkai hijau dengan ikon centang dan pesan "Nama terisi dengan benar." tampil di bawahnya; medan "Alamat Email" berbingkai merah dengan pesan "Format email belum tepat — contoh: nama@domain.id." tampil. Keduanya murni akibat kelas statis yang ditulis manual — bukan hasil pengecekan isian.
- Pas kamu menekan Tab berulang di kontak.html, fokus melintasi medan dengan urutan yang sama persis dengan urutan visual: nama, email, telepon, topik, pesan, persetujuan, tombol kirim; setiap medan bertanda cincin fokus yang jelas.
- Menekan "Kirim Pesan" memuat ulang halaman dan menambah parameter pada URL (misal `?nama=...&email=...`) karena `method="get"` — perilaku bawaan HTML, bukan tanda bahwa data terkirim ke mana pun.
- Di folder proyek nggak ada satu pun file JavaScript; kedua halaman cuma memuat HTML, CSS kustom, dan CDN CSS Bootstrap.

### Troubleshooting

**Masalah:** Halaman tampil tanpa gaya Bootstrap sama sekali (tabel polos, tulisan serif bawaan browser).
**Penyebab:** URL CDN pada `<link>` salah ketik, nomor versinya berbeda, atau koneksi internet gagal pas memuat.
**Solusi:** Buka DevTools tab Network, muat ulang halaman, dan pastikan file `bootstrap.min.css` berstatus sukses; salin ulang URL CDN persis dari blok kode di atas (versi 5.3.3).
**Pencegahan:** Simpan satu salinan *starter template* pribadi berisi tiga baris `<link>` baku (Bootstrap, Icons, Fonts) dan mulailah setiap halaman dari salinan itu.

**Masalah:** Pesan `valid-feedback` atau `invalid-feedback` nggak muncul di bawah medan meskipun udah ditulis.
**Penyebab:** Pasangan kelas nggak konsisten: pembungkus `valid-feedback` cuma tampil pas medannya memakai `is-valid`, dan `invalid-feedback` cuma dengan `is-invalid`; kalau kelas statusnya tertukar, pesannya diam.
**Solusi:** Pastikan kelas status pada `input`/`select` dan pembungkus pesannya bernama sama persis (pasangan yang benar ditunjukkan pada 11.5), lalu muat ulang halaman.
**Pencegahan:** Pas menyalin pola dari bab ini, salin satu kelompok medan penuh (label + medan + pesan), bukan cuma potongan medannya.

**Masalah:** Tulisan "Keranjang" di navbar ditampilkan berikut kotak kosong di tempat ikon keranjang seharusnya tampil.
**Penyebab:** CDN Bootstrap Icons nggak dimuat, sehingga font ikon yang menampung lambang `bi bi-cart3` gagal tersedia.
**Solusi:** Tambahkan baris `<link>` Bootstrap Icons 1.11.3 di `<head>` persis kayak di blok kode bagian Kode, lalu muat ulang halaman.
**Pencegahan:** Sisipkan tiga baris CDN (Bootstrap, Icons, Fonts) sebagai satu paket; ikon dan font saling dibutuhkan oleh banyak komponen.

**Masalah:** Di layar lebar, dua medan form kontak tampil berdampingan kayak yang diharapkan, tetapi di HP keduanya tetap tampil bersebelahan dan terlalu sempit.
**Penyebab:** Kelas kolom ditulis `col-6` (gaya selalu dua kolom) alih-alih `col-md-6` (dua kolom cuma mulai dari titik henti *medium*).
**Solusi:** Ganti kelasnya menjadi `col-md-6` dan pastikan keduanya berada di dalam satu `row g-3`, lalu cek lagi di lebar 375px di DevTools.
**Pencegahan:** Ingat aturan Bab 9: `col-[titik-henti]-[angka]` adalah perilaku dari titik henti itu ke atas; HP selalu menerima bentuk satu kolomnya.

**Masalah:** Gambar produk di tabel keranjang nggak tampil (ikon gambar rusak).
**Penyebab:** Nama file atau path nggak cocok dengan isi folder `img/` — misal `produk-fd-64.svg` padahal filenya bernama lain, atau folder `img/` belum disalin dari proyek sebelumnya.
**Solusi:** Cocokkan `src` pada HTML dengan nama file sebenarnya di `img/`, perhatikan huruf besar-kecil (beberapa server web sensitif), lalu muat ulang.
**Pencegahan:** Patuhi penamaan file `kebab-case` yang baku pada Kontrak (`produk-flashdrive-fd64.svg`) sejak pertama membuat file gambar.

## Studi Kasus

Fakultas Teknologi Informasi sebuah universitas membuka form pendaftaran Ujian Akhir Semester daring. Form yang beredar dibangun tergesa-gesa dan berikut gejalanya: ke-18 medan isian disusun dalam tabel tiga kolom yang rapat; "Nama Lengkap" dan "Nomor Pokok Mahasiswa" cuma muncul sebagai teks di dalam medan; tanggal ujian ditulis bebas ("5/1", "5 Jan", "besok") yang lalu menyusahkan petugas pencocokan; pilihan sesi (pagi/sore) berupa dua checkbox tanpa judul kelompok sehingga mahasiswa bisa memilih keduanya sekaligus; tombol pengirimannya satu tombol kecil bertuliskan "OK" di pojok kanan bawah; dan pas ada kesalahan, halaman membalas dengan satu pesan buat semuanya: "ada kolom yang salah".

Masalah-masalah itu bukan kegagalan teknologi, melainkan kegagalan *desain form* — dan semuanya bisa didiagnosis dengan bab ini. Ketiadaan label merujuk pada pelanggaran prinsip 11.1–11.7: label harus selalu terlihat dan terpasang `for`-`id`. Layout tabel tiga kolom menyalahi prinsip satu kolom: 18 medan disajikan sekaligus tanpa pengelompokan, padahal `fieldset`/`legend` udah menyediakan alatnya. Format tanggal bebas muncul karena nggak ada `select`/`type="date"` yang menstandarkan isian. Dua checkbox sesi yang bisa dipilih bersamaan adalah pilihan jenis kontrol yang salah — itu kasus *radio* — dan pesan error satu-satunya adalah kegagalan status per medan yang dibahas di 11.5.

Berikut perbaikannya yang didemokan dengan data kampus yang sama. Penyusunan ulang satu kolom membagi 18 medan menjadi tiga kelompok `fieldset` bertajuk: "Data Mahasiswa", "Pilihan Ujian", "Persetujuan". Label permanen menggantikan *placeholder*; tanggal memakai `type="date"` sehingga formatnya terkunci; sesi memakai satu pasang radio dalam `fieldset` sehingga satu pilihan menghilangkan yang lain; medan `autocomplete="name"` membantu isi ulang; dan tombolnya diberi label "Kirim Pendaftaran" sebagai aksi yang menyatakan akibatnya. Hasilnya: petugas penerimaan mendapatkan data yang konsisten, mahasiswa menyelesaikan proses lebih cepat, dan form itu sendiri menjadi lebih mudah dipakai pengguna pembaca layar — karena label, pengelompokan, dan urutan tab kini tertata.

Pelajaran dari kasus ini terasa lewat proyek Tokosaya kamu sendiri: halaman `kontak.html` yang sama tadi memakai prinsip yang persis sama. Perbedaannya cuma skala: Tokosaya 7 medan, form kampus 18 medan. Prinsip desain form memang nggak berubah skalanya; yang berubah adalah jumlah kelompok `fieldset` dan ketegasanmu mengelolanya.

## Latihan Mandiri

1. Terapkan prinsip desain form 11.1 pada form pendaftaran keanggotaan perpustakaan kampus (medan: nama, NPM, program studi, alamat, persetujuan). Tuliskan empat keputusan desain kamu (pemilihan kontrol, pengelompokan, penataan, label tombol) dan alasan tiap keputusan.
2. Buka `latihan/elemen-form.html` hasil contoh 11.2 dan petakan setiap elemen ke fungsinya: kenapa radio "Program Studi" memakai kelompok `name` yang sama, dan apa peran pasangan `for`-`id` pada tiap label.
3. Tulislah cuplikan HTML medan "Kode Promo" lengkap memakai pola Bootstrap: pembungkus `mb-3`, `label`/`form-label`, `input-group` dengan tombol lampiran `type="button"`, dan `form-text` berisi petunjuk format. Sertakan atribut `autocomplete="off"` dan jelaskan alasannya.
4. Jelaskan perbedaan peran `form-text` dan `invalid-feedback`. Berikan satu contoh pesan yang pantas berada di `form-text` dan satu contoh yang pantas berada di `invalid-feedback` pada form kontak Tokosaya.
5. Buka `kontak.html` hasil Praktikum di Chrome, tekan tombol Tab dari awal halaman, dan catat urutan fokus yang terjadi. Jelaskan kenapa urutan itu mengikuti urutan HTML, dan tuliskan satu perubahan urutan dokumen yang (kalau diperlukan) akan membuat urutan fokusnya lebih logis.
6. Praktik tambahan: salin pola `keranjang.html`, ganti datasetnya jadi 3 produk pilihanmu dari tabel katalog baku (bisa bervariasi jumlahnya), lalu pastikan angka subtotal dan total yang kamu hitung benar. Laporkan angka yang kamu dapatkan.

## Tugas

**Tugas 1 (individu): footer berlangganan Tokosaya.** Tambahkan blok "Berlangganan Info Produk" di atas `<footer>` pada `kontak.html` memakai pola `input-group`: satu `input type="email"` berlabel `form-label`, tombol lampiran "Daftar", satu kolom `form-text` penjelasan, dan satu `form-check` persetujuan. Kumpulkan: file `kontak.html` terbaru dan paragraf 4–6 kalimat yang menjelaskan alasan tiap kelas yang dipakai. Kriteria: seluruh label terhubung, ada teks bantuan, tombol menyatakan aksinya, dan nggak ada bagian JavaScript.

**Tugas 2 (kelompok 2–3 mahasiswa): audit form acara kampus.** Pilih satu form nyata di lingkungan kampusmu (pendaftaran seminar, organisasi, atau laboratorium), dokumentasikan bentuknya (screenshot/tabel medan), uji dengan checklist bab ini (label eksplisit, pengelompokan, kontrol yang tepat, CTA, status, fokus, `autocomplete`), lalu tulis tabel rekomendasi perbaikan: Temuan → Prinsip bab ini → Form perbaikannya (cuplikan HTML). Kumpulkan laporan 3–5 halaman + tabel itu. Kriteria: setiap temuan diikat pada prinsip yang tepat, dan seluruh rekomendasi bisa diimplementasikan dengan HTML/CSS/Bootstrap tanpa JavaScript. Tugas ini menyiapkan milestone M3 (Bab 12) yang meminta halaman form utama kelompokmu.

## Refleksi

1. Prinsip "satu kolom" terasa melambat bagi form panjang. Kapan pengecualiannya benar-benar wajar? Kapan pasangan medan pendek boleh bersebelahan, dan konsekuensinya apa pada HP?
2. Kamu jauh lebih sering mengetik di HP daripada di komputer. Hubungan apa yang kamu temukan antara atribut `type` pada `input` dan pengalaman mengetik kamu sendiri, yang baru kamu sadari setelah 11.2?
3. Pada Praktikum, kelas status ditulis manual demi mempelajari bentuk visualnya. Menurutmu, apa risiko kalau sebuah tim produksi terus menulis kelas itu dengan tangan tanpa pemverifikasi sungguhan yang dijalankan JavaScript — dan desain apa yang meminimalkan risiko itu?
4. Bab 13 adalah audit seluruh proyek Tokosaya. Dari tiga checklist (label, urutan tab, `autocomplete`), mana yang menurutmu paling mudah terlewat pas membangun cepat, dan kenapa?

## Rangkuman

- Formulir adalah pintu masuk data pada sebuah sistem informasi; kualitas desainnya menentukan kualitas data yang terkumpul.
- Empat prinsip desain form: satu kolom, label selalu terlihat, pengelompokan dan progres yang jelas, serta satu tombol aksi utama yang menyatakan akibatnya.
- Setiap medan membutuhkan pasangan `for`-`id` pada labelnya — fondasi aksesibilitas form yang paling mendasar.
- Atribut `type` pada `input` (`email`, `tel`, `number`, `date`) menyaring isian tanpa satu pun skrip.
- Pola dasar Bootstrap: pembungkus `mb-3`, `form-label`, dan `form-control` (atau `form-select` buat pilihan tarik-turun).
- `form-text` adalah bantuan permanen; pasang ia dengan `aria-describedby` supaya pembaca layar ikut membacanya.
- `input-group` menyandingkan medan dengan lampiran statis (`@`, `Rp`) atau tombol pendamping.
- Layout form kompleks memakai utilitas grid: `row g-3` bersama `col-md-6` buat pasangan medan dan `col-lg-8`/`col-lg-4` buat halaman checkout Tokosaya.
- Status visual statis (`is-valid`/`is-invalid` + pesan `valid-feedback`/`invalid-feedback`) dipelajari sebagai *styling*; verifikasi form sungguhan memakai JavaScript Bootstrap yang berada di luar cakupan mata kuliah ini.
- Fokus harusnya selalu terlihat; `:focus-visible` dan urutan dokumen yang logis menyediakan dasarnya tanpa perlu `tabindex` khusus.

**Jembatan ke Bab 12.** Dalam bab ini kamu membuat banyak keputusan kecil yang kini tercerai pada beberapa file: warna aksen, font heading, jarak `mb-3`, bentuk medan, bahasa pesan status. Kalau keputusan-keputusan itu nggak terdokumentasi, dua orang pembuat halaman berbeda akan menghasilkan dua Tokosaya yang berbeda pula. Bab 12 mengambil seluruh keputusan itu dan menaikinya satu tangga: jadi sebuah **design system** — token formal, komponen dengan varian, dan halaman *styleguide* Tokosaya yang terdokumentasi. Yang hari ini kamu tulis berulang-ulang, di bab berikutnya akan ditulis satu kali dan dipakai di mana-mana.

## Evaluasi

### Pilihan Ganda

1. Kelas Bootstrap yang dipakai untuk memberi gaya pada elemen `label` sebuah medan adalah…
A. `label-form`
B. `form-label`
C. `form-control`
D. `form-text`

2. Agar pembaca layar membacakan nama medan dengan benar, atribut `for` pada `<label>` harus bernilai sama dengan…
A. atribut `name` medan
B. atribut `class` medan
C. atribut `id` medan
D. atribut `placeholder` medan

3. Utilitas `mb-3` yang dipasang pada pembungkus satu kelompok medan bertujuan…
A. menambah jarak di bawah kelompok agar antarkelompok terpisah jelas
B. menampilkan teks bantuan di bawah medan
C. mengubah ukuran huruf label
D. memaksa medan berada di tengah halaman

4. Kelas Bootstrap yang tepat untuk elemen `select` adalah…
A. `form-control`
B. `form-select`
C. `select-form`
D. `input-select`

5. Salah satu kegunaan `input-group` pada Tokosaya adalah…
A. menampilkan daftar produk di keranjang
B. menyandingkan medan isian dengan lampiran statis seperti tanda `@` atau tombol pendamping
C. menampilkan pesan kesalahan di bawah medan
D. mengatur lebar layar HP

6. *(sulit ringan)* Pada kontak.html, pesan "Format email belum tepat…" ditulis dalam pembungkus `invalid-feedback`, tetapi tidak muncul di layar. Sebab paling mungkin adalah…
A. medan email belum memakai kelas `form-control`
B. medan email belum memakai kelas `is-invalid`
C. teks pesannya bukan bahasa Indonesia
D. halaman belum memuat Bootstrap Icons

7. Praktik yang benar terkait `placeholder` pada medan form adalah…
A. memakai *placeholder* sebagai pengganti label agar halaman lebih ringkas
B. memakai *placeholder* untuk contoh format isian, sementara label tetap terlihat
C. mengisi `placeholder` dengan nama panjang agar terbaca pembaca layar
D. menghapus label dan menggandanya ke `placeholder` agar konsisten

8. *(sulit ringan)* Tombol utama pada halaman checkout Tokosaya paling tepat diberi label…
A. "OK"
B. "Klik Di Sini"
C. "Lanjut ke Pembayaran"
D. "Submit"

### Benar atau Salah

1. Kelas `col-md-6` membuat dua medan tampil bersebelahan pada layar mulai titik henti *medium*, dan tampil bertumpuk satu kolom di HP.
2. Kelas `is-valid` membuat data medan benar-benar tervalidasi tanpa JavaScript.
3. Pasangan `fieldset`/`legend` tepat dipakai untuk mengelompokkan beberapa radio yang sejenis.
4. Atribut `readonly` membuat medan tidak ikut terkirim bersama form.
5. Atribut `autocomplete` membantu isi ulang otomatis sekaligus menyatakan tujuan medan kepada browser.

### Analisis Kode

1. *(sulit ringan)* Perhatikan potongan berikut.

File: tokosaya-bootstrap/latihan/analisis-a.html

```html
<!-- Potongan A -->
<div>
  <input type="email" class="form-control" id="surel"
         placeholder="Alamat email kampus">
</div>
```

Sebutkan minimal dua cacat pada potongan itu (bagian yang hilang atau melanggar prinsip bab ini), jelaskan akibat masing-masing, lalu tulis ulang potongan versi perbaikan yang lengkap.

2. Perhatikan potongan berikut yang menggandakan pola Tokosaya.

File: tokosaya-bootstrap/latihan/analisis-b.html

```html
<!-- Potongan B -->
<div class="mb-3">
  <label for="telepon" class="form-label">Nomor Telepon</label>
  <input type="tel" class="form-control" id="telepon" name="telepon
         aria-describedby="bantuan-telepon">
  <div class="form-text" id="bantuan-telepon">Format contoh: 0812-3456-7890.</div>
</div>
```

Temukan cacat pada baris kelima potongan (penulisan atribut yang menyebabkan markup tidak valid), jelaskan mengapa ini berbahaya bagi tampilan medan, dan tulis versi yang benar.

### Soal Praktik

1. Bangun halaman `kembalikan-barang.html` untuk Tokosaya berisi form "Pengembalian Produk" dengan medan: nama lengkap, email, nomor pesanan, alasan (select: produk rusak / salah kirim / berubah pikiran), dan persetujuan kebijakan (checkbox). Susun dua kolom responsif untuk pasangan medan pendek dan satu kolom penuh untuk medan panjang. Sertakan label lengkap, `autocomplete`, dan satu `form-text`.
2. Terapkan status visual statis pada halaman tersebut: medan nomor pesanan memakai `is-invalid` beserta `invalid-feedback` bertulis petunjuk format, dan medan nama memakai `is-valid` beserta `valid-feedback`. Beri komentar HTML yang menyatakan kelasnya ditulis manual sebagai latihan.

### Kunci Jawaban

<details>
<summary>Lihat Kunci Jawaban</summary>

**Pilihan Ganda.**

1. **B** — `form-label` adalah kelas baku untuk label medan pada Bootstrap 5; `form-text` untuk teks bantuan, `form-control` untuk medan isian.
2. **C** — nilai `for` label harus sama dengan `id` medan; itulah hubungan yang membentuk label eksplisit.
3. **A** — `mb-3` adalah utilitas jarak (margin-bottom) yang memisahkan unit kelompok medan.
4. **B** — `select` memakai kelas khusus `form-select` karena strukturnya berbeda dari medan teks.
5. **B** — `input-group` menggabungkan medan dengan lampiran statis (teks/tombol) di sisi kanan atau kiri.
6. **B** — pembungkus `invalid-feedback` hanya tampil ketika medannya memakai kelas `is-invalid`; inilah keterkaitan pasangan status-pesan.
7. **B** — *placeholder* dipakai untuk contoh format; nama medan tetap pada label yang selalu terlihat.
8. **C** — CTA menyatakan akibat tindakan; "OK" dan "Klik di sini" memaksa pengguna menebak akibatnya.

**Benar atau Salah.**

1. **Benar** — perilaku `col-md-6`: dua kolom dari titik henti *md* ke atas, satu kolom di bawahnya.
2. **Salah** — `is-valid`/`is-invalid` hanya status visual; verifikasi sungguhan memakai JavaScript Bootstrap yang di luar cakupan.
3. **Benar** — `fieldset`/`legend` melingkupi kelompok radio yang satu makna.
4. **Salah** — `readonly` ikut terkirim; yang tidak ikut terkirim adalah `disabled`.
5. **Benar** — `autocomplete` mengaktifkan isi ulang otomatis dan sekaligus memenuhi identifikasi tujuan medan (WCAG 1.3.5).

**Analisis Kode.**

1. Potongan A kehilangan: (a) `<label>` yang terhubung `for`–`id` sehingga medan tak bernama bagi pembaca layar; (b) pembungkus `mb-3` dan `aria-describedby`/`form-text` bila butuh bantuan; serta (c) `autocomplete="email"`. Versi perbaikan menambahkan `<label for="surel" class="form-label">Alamat Email</label>` di atas medan di dalam pembungkus `div.mb-3`.
2. Potongan B memiliki tanda kutip atribut `name="telepon` yang tidak ditutup, membuat seluruh teks setelahnya dianggap bagian nilai atribut sehingga markup rusak dan bagian selanjutnya (termasuk atribut lain) ikut tertelan. Perbaikannya menutup nilai atribut pada `name="telepon"` dan pemisahan baris yang rapi.

**Soal Praktik.**

1. Jawaban memuat: form dengan `row g-3`, pasangan `col-md-6` dua-dua (nama–email), `col-12` untuk nomor pesanan/alasan/persetujuan, select berkelas `form-select`, checkbox berkelas `form-check-input`, seluruh label berpasangan `for`-`id`, `autocomplete` pada medan identitas, dan satu `form-text` petunjuk format.
2. Jawaban memuat: kelas `is-invalid` + `invalid-feedback` pada medan nomor pesanan, `is-valid` + `valid-feedback` pada medan nama, dan komentar HTML yang menyatakan bahwa kelas status ditulis manual karena verifikasi sungguhan memakai JavaScript Bootstrap di luar cakupan mata kuliah.

</details>

## Referensi

- Bootstrap. (2024). *Forms — Bootstrap v5.3 Documentation*. Diakses dari https://getbootstrap.com/docs/5.3/forms/overview/ pada 14 Januari 2026.
- Duckett, J. (2011). *HTML & CSS: Design and Build Websites*. Indianapolis: Wiley.
- Krug, S. (2014). *Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability* (3rd ed.). San Francisco: New Riders.
- MDN Web Docs. (2025). *HTML input element reference*. Diakses dari https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input pada 14 Januari 2026.
- W3C. (2023). *Web Content Accessibility Guidelines (WCAG) 2.2*. Diakses dari https://www.w3.org/TR/wcag22/ pada 14 Januari 2026.