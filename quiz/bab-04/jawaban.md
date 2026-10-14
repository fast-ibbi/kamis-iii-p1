# Kunci Jawaban & Rubrik — Bab 04: Tipografi dan Visual Design CSS

> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)
> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)

---

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
