# Kunci Jawaban & Rubrik — Bab 14: Implementasi Desain Figma ke HTML CSS

> Kunci + pembahasan pilihan ganda (15) · poin jawaban + bobot skor essay (5) · langkah solusi + kriteria penilaian lab (10)
> File soal bab ini: [soal-pilihan-ganda.md](soal-pilihan-ganda.md) · [soal-essay.md](soal-essay.md) · [soal-praktikum-lab.md](soal-praktikum-lab.md)

---

### Kunci Pilihan Ganda

1. **C** — Token dinamai menurut peran agar tetap bermakna ketika desainer mengganti nilai warnanya; `--clr-primary` tetap masuk akal walau indigo berubah menjadi hijau.
2. **A** — Fill adalah warna latar objek (padanan `background-color`), sedangkan stroke adalah garis tepinya (padanan `border`).
3. **B** — Interaktivitas JavaScript di luar cakupan mata kuliah, sehingga bab ini melatih translasi keadaan sebagai tampilan statis dengan kelas status disertai catatan perilaku.
4. **D** — Pembaca yang disiplin masuk dari frame terluar, lalu membedah layer anak hingga ke bawah, seperti membaca struktur HTML dari elemen terluar.
5. **C** — Dua penyimpangan sekaligus: warna aksen ditulis sebagai hex mentah, bukan `var(--clr-accent)`, dan radius 8 px tidak memakai token `var(--radius)` yang bernilai 12 px.
6. **B** — Spesifikasi meminta gutter 24 px lewat `g-4` pada root 16 px sekaligus menuntut `col-12 col-md-4` agar tiga kartu sejajar di desktop dan satu kolom penuh di layar kecil.
7. **A** — Text style "Heading/Card Title" dipetakan apa adanya: Poppins (token `--font-heading`), ketebalan 500, 18 px, dan line-height 1,4.
8. **C** — Badge aksen memakai `var(--clr-accent)` untuk latar dan `var(--clr-dark)` untuk teks, bukan hex baru dan bukan token semantik lain.
9. **B** — `col-12` membuat kolom menumpuk penuh di bawah breakpoint lg, sedangkan `col-lg-7` dan `col-lg-5` memberlakukan rasio 7 : 5 pada layar ≥ 992 px.
10. **D** — Sesuai pola lima langkah translasi: utilitas Bootstrap mengurus susunan, sedangkan warna dan ukuran presisi ditangani kelas kustom yang mengonsumsi token.
11. **B** — Atribut dimensi tetap dipasangkan dengan `img-fluid` supaya ukuran aset tidak mengalahkan batas kolom dan gambar tidak mendorong kolom lain turun.
12. **A** — Utilitas `rounded-3` menimpa aturan kustom akibat kaskade; cara yang benar adalah menghapus utilitasnya, bukan memaksa kemenangan dengan `!important` atau mengubah token.
13. **C** — Pembaca layar butuh `alt` yang menjelaskan isi dan tujuan gambar; `alt="gambar"` tidak bermakna dan `role="img"` tidak menggantikan teks alternatif.
14. **A** — Checklist 14.7 diverifikasi lewat panel Computed DevTools dengan pembanding lembar spesifikasi; selisih kecil karena pembulatan dicatat sebagai toleransi ± 2 px.
15. **D** — Ketika berkas desain tidak tersedia, spesifikasi desain tekstual bernilai presisi plus fidelity checklist adalah mitigasi yang membuat keputusan desain tetap terukur.

### Jawaban Essay

1. **Poin inti:**
   - Sisi pengembang: ukuran, jarak, dan warna ditaksir dengan mata sehingga tombol meleset, jarak berubah-ubah, dan judul diperkecil sesuka hati; implementasi kehilangan keputusan desain yang seharusnya disalin.
   - Sisi pengembang: keadaan yang tidak tertulis (hover/focus, empty state keranjang kosong, batas baris nama produk, format harga) tidak pernah direncanakan sehingga muncul sebagai cacat di akhir.
   - Sisi desainer: menerima hasil yang tidak setia dan harus mengirim revisi berulang ("warna badge salah", "jarak kartu berubah", "font judul harus Poppins").
   - Sisi desainer: keputusan yang tidak tertulis akan ditafsir bebas, sehingga niat desain tidak pernah terbukti di layar.
   **Skor:** 1 + 1 + 1 + 1 + 1 = 5 (tiap akibat yang benar dan beralasan bernilai 1, kelengkapan sisi pengembang dan desainer masing-masing 2, kualitas alasan 1).

2. **Poin inti:**
   - Membaca frame: identifikasi frame terluar (1440/768/375 px), telusuri hirarki layer dari atas ke bawah, baca fill/stroke di panel kanan, baca auto layout (arah, gap, padding) sebagai padanan Flexbox.
   - Membaca grid dan tipografi: catat jumlah kolom, gutter, dan margin kontainer; baca text style dan color style berlabel dari daftar Local styles.
   - Lapis token: setiap color style menjadi satu CSS custom property di `:root`, dan setiap text style menjadi aturan tipografi yang menyalin nilai gaya.
   - Lapis utilitas: grid dan susunan diserahkan ke `.container`, `.row`, `col-*`, dan `g-4` sesuai spesifikasi.
   - Lapis kustom: warna, radius, dan ukuran presisi ditulis pada kelas komponen yang mengonsumsi token (`var(--clr-…)`, `var(--radius)`), dengan komentar `/* kustom */`.
   **Skor:** membaca frame dan grid 2 + pemetaan tiga lapis 3 = 5.

3. **Poin inti:**
   - Perhitungan: lebar kolom = (kontainer − 11 × gutter) ÷ 12 = (1140 − 11 × 24) ÷ 12 = 876 ÷ 12 = 73 px.
   - Kolom gabungan: dua kolom = 2 × 73 + 24 = 170 px, sehingga kombinasi 6+6, 4+4+4, atau 8+4 tetap terasa rapi karena 12 mudah dibagi.
   - Alasan 73 px tidak ditulis di CSS: Bootstrap sudah menyediakan penerjemah grid lewat `.row` dan `col-*`, sedangkan `.container` berhenti tumbuh di 1140 px pada breakpoint xl.
   - Nilai diwakili oleh kelas: `col-lg-7`, `col-lg-5`, `col-12 col-md-4` beserta `g-4` untuk gutter 24 px, dan token untuk jarak yang dipakai berulang.
   - Satu sumber kebenaran: menuliskan 73 px di tiap komponen justru membuat celah antarkartu berbeda-beda dan sulit diaudit.
   **Skor:** perhitungan benar 2 + penjelasan kolom gabungan 1 + alasan implementasi Bootstrap 2 = 5.

4. **Poin inti:**
   - Alat: DevTools Chrome dengan panel Inspect, membaca nilai terhitung pada tab Computed untuk elemen terpilih (tipografi, jarak, radius, grid, kontainer).
   - Prosedur: jalankan checklist sembilan item satu per satu, bandingkan nilai terhitung dengan lembar spesifikasi, bukan dengan perasaan "kurang mirip".
   - Selisih kecil: selisih akibat pembulatan browser dicatat sebagai toleransi ± 2 px dan tidak perlu diperbaiki.
   - Selisih besar atau arahnya salah: diperbaiki karena biasanya menandakan nilai yang disalin meleset, misalnya hex liar, radius di luar token, atau jarak di luar kelipatan 8 px.
   - Kebiasaan pendukung: uji bertahap per komponen (selesaikan satu komponen, bandingkan, lanjut) dan catat hasilnya dalam daftar berbentuk tabel.
   **Skor:** alat dan cara baca 2 + toleransi 1 + tindakan atas selisih besar 1 + kebiasaan uji bertahap 1 = 5.

5. **Poin inti:**
   - "Warna badge salah": kemungkinan penyebabnya nilai hex ditulis langsung pada selector komponen atau memakai utilitas warna Bootstrap, bukan `var(--clr-accent)`/`var(--clr-dark)`; pemeriksaannya panel `:root` DevTools plus pencarian karakter `#` pada CSS, lalu perbaiki ke pemanggilan token.
   - "Jarak kartu berubah": kemungkinan penyebabnya `row` ditulis tanpa `g-4` atau nilai padding di luar kelipatan 8 px; periksa `gap`/`padding` di panel Computed dan sesuaikan dengan spesifikasi.
   - "Font judul harus Poppins": kemungkinan penyebabnya keluarga font tidak dimuat lewat Google Fonts, urutan pemanggilan salah, atau kelas heading memakai font body; periksa daftar `@font-face`/link CDN dan `font-family` terhitung pada elemen judul, lalu pastikan fallback `sans-serif` tetap ada.
   **Skor:** tiga penyebab tepat 3 + tiga langkah perbaikan tepat 2 = 5.

### Jawaban Praktikum Lab

1. **Langkah solusi:** Buat berkas latihan dengan urutan pemuatan: Google Fonts → Bootstrap CSS → Bootstrap Icons → `css/style.css`. Susun `<header class="site-nav">` dengan `.container` dan utilitas `d-flex flex-wrap align-items-center justify-content-between gap-3`; daftar link memakai `<ul>` `list-unstyled d-flex gap-4 m-0`; link aktif diberi kelas `site-link--aktif` ditambah `aria-current="page"`; ikon keranjang memakai `<a class="site-ikon" aria-label="Keranjang belanja">` dengan ikon `aria-hidden="true"`. CSS kustom mengisi `.site-nav` (latar token surface, garis bawah 1 px token border, padding vertikal 16 px), `.site-brand` (Poppins 700, 20 px, token primer), `.site-link` (Inter 15 px, token body), dan `.site-ikon` (20 px).
   **Kriteria penilaian:** Struktur semantik dan urutan pemuatan aset 30%, ketepatan nilai spesifikasi via token (latar, border, padding, ukuran, warna) 40%, pemakaian utilitas untuk susunan dan bukti Computed (tinggi ± 72 px, gap 32 px) 20%, label aksesibel ikon 10%.

2. **Langkah solusi:** Tabel pemetaan berisi baris: "Heading/Title 1" → kelas `.page-title` → Poppins 600, 32 px, line-height 1,25; "Body/Paragraph" → aturan `body` → Inter 400, 16 px, line-height 1,6; "Warna/Accent" → `--clr-accent` → `#F59E0B`; "Warna/Border" → `--clr-border` → `#E2E8F0`. Blok `:root` memuat empat token tersebut plus `--font-heading` dan `--font-body`; aturan tipografi menyalin nilai gaya dan mengambil warna/font dari variabel. Penjelasan menegaskan pemetaan sekali pakai banyak: perubahan nilai cukup di `:root`.
   **Kriteria penilaian:** Kelengkapan dan ketepatan tabel pemetaan 40%, blok `:root` benar dan tanpa nilai liar 30%, dua aturan tipografi bertoken 20%, kualitas penjelasan 10%.

3. **Langkah solusi:** Panel disusun dalam `<div class="produk-panel">` dengan urutan sesuai spesifikasi: `<span class="badge-populer">Best Seller</span>`, `<h2 class="produk-nama">`, `<p class="produk-kategori">`, `<p class="produk-harga">`, deskripsi, `<a class="btn-tokosaya">` berisi ikon `bi bi-cart3` dengan `aria-hidden="true"`, lalu dua `<p class="produk-info">` berisi ikon `bi bi-truck` dan `bi bi-headset`. CSS panel: latar `var(--clr-surface)`, border 1 px `var(--clr-border)`, `border-radius: var(--radius)`, padding 24 px, `box-shadow: var(--shadow-card)`. Nilai Computed yang diharapkan: radius 12 px, padding 24 px, harga 24 px warna `#4F46E5`, nama 28 px/600.
   **Kriteria penilaian:** Urutan isi panel sesuai spesifikasi 30%, seluruh warna/ukuran dari token 30%, radius–padding–bayangan tepat 20%, atribut aksesibilitas ikon dan gambar 10%, bukti Computed lengkap 10%.

4. **Langkah solusi:** Struktur: `<section class="produk-terkait">` dengan `<h2 class="section-title">Produk Terkait</h2>` lalu `<div class="row g-4">` berisi tiga `<article class="col-12 col-md-4">`. Tiap kartu memakai `.produk-card` dengan gambar `img-fluid` berdimensi 332×160 dan `alt` deskriptif, badge `.badge-tersedia` (MW-88 dan HS-15) atau `.badge-stok` (BT-5), nama `h3 .produk-card-nama`, harga `.produk-card-harga`, dan tautan `.produk-card-tautan`. Pada 1440 px tiga kartu sejajar; pada 768 px tiap kartu menempati 12 kolom dan bertumpuk dengan jarak vertikal 24 px dari `g-4`; pada 375 px tumpukan tetap satu kolom penuh tanpa teks terpotong.
   **Kriteria penilaian:** Kelas grid `row g-4` + `col-12 col-md-4` tepat 30%, isi dan urutan kartu sesuai spesifikasi G 25%, badge memakai token semantik benar 15%, perilaku responsif terbukti pada tiga lebar 20%, kelengkapan bukti tangkapan layar 10%.

5. **Langkah solusi:** Empat penyimpangan yang diharapkan: (1) `padding: 20px` bukan kelipatan skala 8 px — seharusnya 24 px sesuai spesifikasi panel; (2) `border-radius: 8px` tidak memakai token — seharusnya `var(--radius)` (12 px); (3) latar dan warna ditulis sebagai hex mentah (`#FFFFFF`, `#4F46E5`) — seharusnya `var(--clr-surface)` dan `var(--clr-primary)`; (4) `!important` tidak diperlukan karena tidak ada konflik kaskade, cukup selektor yang tepat; (5) warna info `#94A3B8` terlalu pucat dan di luar token — seharusnya `var(--clr-body)`. Hasil akhir misalnya `.produk-panel { padding: 24px; border-radius: var(--radius); background-color: var(--clr-surface); }`.
   **Kriteria penilaian:** Ketepatan identifikasi penyimpangan (minimal empat) 40%, hasil perbaikan bertoken 30%, penjelasan `!important` 15%, bukti visual akhir 15%.

6. **Langkah solusi:** Urutan akhir: blok `:root` paling atas, lanjut gaya dasar (`body`), lalu komponen (`.produk-panel`), dan terakhir penyesuaian halaman bila ada. Aturan `.panel-hilang` dihapus karena tidak ada elemen di halaman yang memakainya (kode mati). Kelas `.judulBesarMerah` diganti menjadi pola blok-elemen kebab-case (misalnya `.judul-promo`) dengan nilai memakai token (`var(--clr-danger)` dan ukuran pada skala yang disepakati), lalu nama kelas pada HTML disamakan. Komentar `/* kustom */` dipertahankan pada blok yang memang kustom.
   **Kriteria penilaian:** Urutan blok token → dasar → komponen benar 35%, identifikasi dan penghapusan kode mati disertai alasan 25%, penamaan kelas kebab-case pola blok-elemen 25%, kualitas komentar 15%.

7. **Langkah solusi:** Tabel audit memuat pasangan nilai spesifikasi versus Computed, misalnya: `h3` kartu 18 px/500/1,4; `border-radius` kartu 12 px; `padding` kartu 16 px; jarak antarkolom 24 px; lebar `.container` 1140 px pada viewport ≥ 1200 px. Selisih 0–2 px dicatat sebagai toleransi pembulatan; selisih lebih besar ditandai temuan dan diperbaiki dengan menyamakan nilai ke spesifikasi/token.
   **Kriteria penilaian:** Kelengkapan enam pemeriksaan 30%, ketepatan pembacaan panel Computed 30%, penerapan aturan toleransi ± 2 px 20%, perbaikan dan bukti ulang 20%.

8. **Langkah solusi:** Pemeriksaan alt: setiap gambar konten diberi `alt` deskriptif yang menyebut produk dan sudutnya; gambar hias boleh `alt=""`. Pemeriksaan heading: halaman hanya punya satu `h1`, lalu `h2` pada judul section dan `h3` pada nama kartu tanpa lompatan. Pemeriksaan kontras: badge amber `#F59E0B` dengan teks `#1E293B` dan tombol indigo `#4F46E5` dengan teks putih dibaca lewat pembaca warna DevTools; bila salah satu rasio di bawah 4,5 : 1 untuk teks normal, ganti pasangan warnanya ke token yang lebih aman.
   **Kriteria penilaian:** Ketepatan penulisan `alt` 30%, kebenaran urutan heading 25%, pengukuran kontras dan interpretasinya 25%, kualitas perbaikan serta penjelasan dampak 20%.

9. **Langkah solusi:** Panel keranjang dibungkus elemen dengan dua keadaan kelas, misalnya `.keranjang-panel` dan `.keranjang-panel--terbuka`; keadaan terbuka ditata dengan `position: absolute` atau `fixed`, latar `var(--clr-surface)`, border token, radius `var(--radius)`, dan `box-shadow: var(--shadow-card)`. Tombol utama menerima `:focus-visible` dengan outline `3px solid var(--clr-accent)` dan `outline-offset: 2px`. Komentar HTML menyatakan bahwa perilaku buka/tutup sesungguhnya ditangani skrip di luar cakupan mata kuliah.
   **Kriteria penilaian:** Kelas keadaan statis terbentuk dan terlihat jelas 30%, penataan bertoken 25%, gaya fokus yang terlihat dan tidak terpotong 25%, catatan perilaku yang jelas dan jujur 20%.

10. **Langkah solusi:** `catatan-fidelity.txt` berbentuk tabel sembilan baris sesuai checklist 14.7, tiap baris memuat nomor, item pemeriksaan, nilai hasil (misalnya `h1` 32 px, radius 12 px, gutter 24 px, kontainer 1140 px, lebar 1440/768/375 px tanpa kerusakan), dan status lulus/temuan. Item yang gagal diberi tindak lanjut konkret, misalnya "padding 20 px → 24 px" atau "ikon kartu belum konsisten → samakan ke set Bootstrap Icons".
    **Kriteria penilaian:** Sembilan item terisi lengkap 35%, nilai yang dicatat terukur dan sesuai spesifikasi 30%, status temuan disertai tindak lanjut 20%, lampiran tangkapan layar 1440 px dan 375 px 15%.
