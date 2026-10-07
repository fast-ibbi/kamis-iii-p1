# Kontrak Revisi Casual Buku Ajar

Kontrak ini mengikat setiap perubahan yang dilakukan pada revisi "kata-kata lebih casual"
di `buku/`. Disepakati sebelum menyentuh berkas, supaya bab 8 (UTS) dan bab 16 (UAS) yang
belum ditulis, serta revisi berikutnya, memakai aturan yang sama.

**Ruang lingkup:**

| Sasaran | Nada | Istilah | Mojibake |
|---|---|---|---|
| `buku/*.md` (14 berkas) | ya | ya | ya |
| `slides/*.md` (2 berkas) | tidak | ya | tidak |
| `readme.md` | tidak | ya | tidak |

---

## 1. Kamus istilah

Prinsip: buang padanan yang terasa **dibuat-buat**, pertahankan kata Indonesia yang memang
dipakai sehari-hari.

### Diganti ke bentuk Inggris

| Lama | Baru | Catatan |
|---|---|---|
| peramban | browser | |
| pranala | link | |
| tautan | link | |
| berkas | file | |
| situs | website | |
| ponsel | HP | |
| tata letak | layout | |
| selektor | selector | |
| galat | error | |
| peladen | server | |
| gawai | gadget | |

### Tetap Indonesia (kata biasa, bukan istilah teknis)

`layar` · `kotak` · `halaman` · `tombol` · `pengguna` · `perangkat` · `warna` · `jarak` ·
`nilai` · `properti` · `huruf` · `daftar` · `gambar` · `judul` · `navigasi` · `unduh` ·
`unggah` · `komputer`

### Berlakunya kamus

Kamus istilah berlaku di **seluruh berkas** — termasuk 4 bagian akademik yang nadanya
tidak diubah, dan termasuk **komentar di dalam blok kode**.

Yang **tidak** boleh dikenai kamus:

- nama class / id / berkas di dalam kode (mis. `.badge-tersedia`, `img/foto-profil.png`);
- teks yang tampil di dalam HTML contoh (isi website Tokosaya, copy brand, `<title>`,
  `<h1>`, `<p>`, `alt`, label tombol);
- judul apa pun (`##` dan `###`);
- potongan kode yang memuat istilah itu sebagai nilai/properti.

Dua kebijakan ini terpisah: **istilah = seluruh berkas. Nada = hanya 12 bagian** (lihat §2).
Jadi "Capaian Pembelajaran" tetap berbunyi "mahasiswa mampu …" dan tetap memakai verba Bloom,
tetapi menulis `file`, bukan `berkas`.

---

## 2. Nada per bagian

17 bagian berulang di setiap bab. Perlakuan dibagi tiga.

### A. Casual (12 bagian) — `Anda` → `kamu`, kalimat dipendekkan

1. `Deskripsi Singkat`
2. `Kata Kunci`
3. `Apersepsi`
4. `Materi Pembelajaran`
5. `Konsep Penting`
6. `Penjelasan Kode`
7. `Praktikum` (termasuk subjudul di dalamnya)
8. `Studi Kasus`
9. `Latihan Mandiri`
10. `Tugas`
11. `Refleksi`
12. `Rangkuman`

### B. Formal (4 bagian) — nada TIDAK diubah

13. `Tujuan Pembelajaran` — verba Bloom, pola "mahasiswa mampu"
14. `Capaian Pembelajaran` — rujukan CPMK, bahasa kurikulum
15. `Evaluasi` — soal pilihan ganda + kunci jawaban; jangan ubah kalimat soal
16. `Referensi` — sitasi

Nada di bagian ini dibiarkan persis. Yang boleh berubah hanya istilah (§1) dan mojibake (§4).

### C. Khusus

17. `Contoh Kode` — tiga perlakuan berbeda di dalam satu bagian:
    - **prosa pembuka di luar pagar kode** (mis. "Dua contoh berikut adalah dokumen HTML lengkap yang
      bisa Anda ketik…", baris "Penjelasan: …") → **ikut casual** seperti 12 bagian lain;
    - **komentar di dalam pagar kode** → ikut casual;
    - **teks yang tampil di HTML contoh** → tidak disentuh.

### Judul

**230 judul `##` dan 283 judul `###` tidak disentuh sama sekali.** Alasannya: tidak ada satu pun
judul yang memuat istilah lama (jadi tidak ada yang perlu diperbaiki), ada **18 rujukan silang**
"subbab X.Y" yang menunjuk nomor subbab, dan judul adalah alat navigasi.

Label struktural di dalam `Praktikum` (`### Tujuan Praktikum`, `### Kebutuhan`, `### Persiapan`,
`### Langkah Kerja`, `### Kode`, `### Penjelasan Kode`, `### Hasil yang Diharapkan`,
`### Troubleshooting`) juga dibiarkan identik, karena dipakai sebagai penanda yang sama di 13 bab.

---

## 3. Leksikon

### Dipakai

| Baku | Casual |
|---|---|
| tidak | nggak |
| bagaimana | gimana |
| seperti | kayak |
| sudah | udah |
| untuk / agar | buat |
| sangat | banget |
| saat / ketika | pas |
| apabila / jika | kalau |
| mengapa | kenapa |

### Dilarang

- Partikel gaul: `sih` `deh` `nih` `dong` `kok`
- Singkatan chat: `yg` `gak` `tp` `dgn` `krn`
- Huruf kecil semua, emoji, "wkwk", gaya berteriak

Ejaan tetap baku di luar tabel di atas. Kalimat tetap lengkap dan bertanda baca benar.
Kalau ragu antara "lebih casual" dan "lebih jelas", pilih **lebih jelas**.

### Bentuk `-nya`

Mengikuti PUEBI, `-nya` ditulis **serangkai** pada kata: `filenya`, `linknya`, `browsernya`,
`gridnya`, `hovernya`, `headingnya`, `formnya`.

Tanda hubung hanya dipakai bila pangkalnya singkatan huruf kapital atau angka: `HP-nya`,
`CSS-nya`, `90-an`.

Bentuk campur (`hover-nya` di sebelah `filenya`) adalah ketidakkonsistenan dan harus diseragamkan.

---

## 4. Mojibake (perbaikan pra-ada)

| Bab | Pola | Titik | Perbaikan |
|---|---|---|---|
| 09 | setiap angka diawali `?` | 1.729 | hapus `?` sebelum angka |
| 12 | `?` tanpa spasi = em-dash | 38 | `?` → `—` tanpa spasi |
| 03 | ` ? ` = em-dash | 32 | ` ? ` → ` — ` |
| 09 | ` ? ` = em-dash | 16 | ` ? ` → ` — ` |
| 11 | ` ? ` = em-dash | 26 | ` ? ` → ` — ` |
| 12 | ` ? ` = em-dash | 1 | ` ? ` → ` — ` |

Contoh:

```
BAB ?9 — Pengenalan Bootstrap ?5      ->  BAB 9 — Pengenalan Bootstrap 5
bootstrap@?5.?3.?3                    ->  bootstrap@5.3.3
dipilih ? dan blok deklarasi          ->  dipilih — dan blok deklarasi
properti?nilai                        ->  properti—nilai
tokoh fiktif kita?Rara                ->  tokoh fiktif kita—Rara
```

Perbaikan ini mekanis dan **tidak** boleh mengubah gaya bahasa apa pun.

---

## 5. Line ending & pengodean

- Semua berkas → **LF**.
- `bab-14` punya BOM di awal → **dibuang**.
- Asal: bab-01, 07, 09, 10, 11, 13 = CRLF; bab-02, 03, 04, 05, 06, 12, 15 = LF;
  bab-14 = campur + BOM.

Konsekuensi: diff pada 6 bab CRLF akan tampak mengubah seluruh baris. Perubahan nyata bisa
dilihat dengan `git diff --ignore-cr-at-eol`.

---

## 6. Perbaikan struktur (commit terpisah)

Kerusakan ini ditemukan saat penelusuran, bukan bagian dari revisi gaya. Dikerjakan sebagai
commit sendiri supaya bisa dibuang tanpa mengganggu revisi nada.

| Bab | Baris | Masalah | Perbaikan |
|---|---|---|---|
| 01 | 303 | pagar nyasar: 15 pagar (ganjil) → separuh bab dirender sebagai kode, termasuk Daftar Pustaka | hapus baris 303, tutup span inline di akhir baris 302 |
| 14 | 546/547 | span kode inline terbelah dua baris | jadikan satu span utuh |
| 14 | 1304 | span kode inline tidak ditutup | tutup span-nya |

---

## 7. Daftar periksa verifikasi

Dijalankan setelah semua commit, hasilnya dilaporkan per bab (14 baris × 8 kolom).

| # | Pemeriksaan | Harapan |
|---|---|---|
| 1 | Mojibake: ` ? ` dan `?<angka>` di luar URL | 0 |
| 2 | Istilah lama di prosa (`peramban` `pranala` `berkas` `tautan` `situs` `ponsel` `tata letak` `selektor` `galat` `peladen` `gawai`) | 0 |
| 3 | `Anda` di 12 bagian casual / di 4 bagian formal | 0 / ~28 (dibiarkan, dilaporkan) |
| 4 | Blok kode: jumlah pagar & isi kode non-komentar | 182 → 182, identik (kecuali baris mojibake bab-09, didaftarkan) |
| 5 | Struktur markdown: jumlah `##` + `###`, jumlah tabel, jumlah baris tabel | sama |
| 6 | Line ending: CRLF / BOM | 0 / 0 |
| 7 | Leksikon di 12 bagian casual naik, di 4 bagian formal tidak berubah | sesuai |
| 8 | Kata terlarang (`sih` `deh` `nih` `dong` `kok`, `yg` `gak` `tp` `dgn` `krn`) | 0 |

---

## 8. Kesalahan isi yang ditemukan

Diperbaiki sekaligus, dengan daftar ini sebagai lampiran agar bisa diperiksa satu per satu.

| Bab | Lokasi | Sebelum | Sesudah | Alasan |
|---|---|---|---|---|
| 13 | `Kata Kunci`, `clamp()` | "fungsi CSS untuk nilai **bergengsi** antara batas minimum dan maksimum" | "fungsi CSS buat ngekang nilai di antara batas minimum dan maksimum" | `clamp()` membatasi/mengurung nilai; "bergengsi" = *prestigious*, tidak berhubungan |

---

## 9. Urutan commit

```
1.  checkpoint: 14 bab sebelum revisi casual
2.  fix: mojibake (~1.845 titik, 4 bab)                <- mekanis
3.  fix: struktur markdown (bab-01 pagar, bab-14 span) <- mekanis
4.  chore: seragamkan istilah + line ending LF         <- mekanis
5.  style(bab-01): nada casual
    ...
18. style(bab-15): nada casual
19. docs: laporan verifikasi + kesalahan isi
```

Commit 2–4 mekanis dan bisa diperiksa dengan sedikit perintah. Commit 5–18 adalah bagian
subjektif, dikerjakan satu per bab supaya bisa dibatalkan satu per bab.

---

## 10. Yang tidak diketahui

Ditulis terbuka, bukan disamarkan.

1. **Kode contoh belum pernah diverifikasi jalan.** Tidak ada folder `tokosaya-css/` atau
   `tokosaya-bootstrap/` di repo, jadi tidak ada pembanding. Pemeriksaan #4 hanya membuktikan
   kode **tidak berubah**, bukan bahwa kode itu **benar**.
2. **Bab 8 (UTS) dan bab 16 (UAS) belum ada berkasnya**, padahal `readme.md` mencantumkan
   16 pertemuan. Jumlah bab di `buku/` = 14.

---

## 11. Laporan pelaksanaan

Dijalankan setelah seluruh commit. Baseline kode & struktur = `6261631`
(setelah perbaikan struktur), baseline mojibake & istilah = `71d2f69` (checkpoint).

### 11.1 Hasil 8 pemeriksaan

```
bab  mojb istil  Anda  Anda |    pagar      ##     ###     tabel  kode | CRLF BOM terl |  nggak gimana kayak buat  tidak bagaim
01      0     0     0     1 |  14/14   17/17   22/22     54/54       0 |    0   0    0 |     32      7    38   62     0      2
02      0     0     0     4 |  22/22   17/17   21/21     25/25       0 |    0   0    0 |     31      2    19   85     0      1
03      0     0     0     0 |  56/56   17/17   21/21     39/39       0 |    0   0    0 |     38      3    21   57     0      0
04      0     0     0     1 |  26/26   17/17   24/24     59/59       0 |    0   0    0 |     33      4    22   73     1      0
05      0     0     0     0 |  34/34   17/17   19/19     24/24       0 |    0   0    0 |     41      4    17   32     2      0
06      0     0     0     4 |  26/26   17/17   22/22     24/24       0 |    0   0    0 |     32      4    11   40     1      0
07      0     0     0     5 |  36/36   17/17   19/19     29/29       0 |    0   0    0 |     37      1    13   49     1      0
09      0     0     0     0 |  12/12   17/17   21/21     53/53       0 |    0   0    0 |     26      1    16   61     1      0
10      0     0     0     1 |  44/44   17/17   20/20     33/33       0 |    0   0    0 |     44      2    14   62     0      0
11      0     0     0     0 |  26/26   17/17   20/20     38/38       0 |    0   0    0 |     41      0    26   51     0      0
12      0     0     0     5 |  22/22   17/17   21/21     90/90       0 |    0   0    0 |     45      5    22   71     0      0
13      0     0     0     2 |  22/22   17/17   25/25     61/61       0 |    0   0    0 |     46      0    20   39     1      0
14      0     0     0     2 |  14/14   17/17   20/20     67/67       0 |    0   0    0 |     21      1    14   29     0      0
15      0     0     0     3 |  14/14   17/17   21/21     42/42       0 |    0   0    0 |     45      1     5   43     0      0

  kolom pagar/##/###/tabel = SEKARANG/BASELINE (harus sama)
  TOTAL  mojibake=0  istilah-lama-prosa=0  istilah-lama-dalam-kode=37 (boleh)
         Anda-casual=0  Anda-formal=28 (dibiarkan)
         CRLF=0  BOM=0  baris-kode-berbeda=0  kata-terlarang-baru=0
  LEKSIKON 12 bagian casual, checkpoint -> sekarang:
         nggak 0 -> 512   gimana 0 -> 35   kayak 0 -> 258   buat 58 -> 754
         tidak 487 -> 7   bagaimana 33 -> 3
  STATUS: SEMUA LULUS
```

Skala pekerjaan: **20 commit revisi** (ditambah 1 commit dokumentasi ini), 17 berkas,
2.224 baris ditambah / 2.227 dihapus.
Selisih 3 baris itu **disengaja dan terdokumentasi** — persis perbaikan struktur
bab-01 (1 pagar nyasar) dan bab-14 (2 span inline yang dijadikan satu baris).

### 11.2 Kesalahan isi yang diperbaiki

| Bab | Lokasi | Sebelum | Sesudah | Alasan |
|---|---|---|---|---|
| 13 | `Kata Kunci`, `clamp()` | "nilai **bergengsi** antara batas minimum dan maksimum" | "nilai yang dibatasi antara batas minimum dan maksimum" | `clamp()` mengurung nilai; "bergengsi" = *prestigious*, tidak berhubungan |
| 13 | 7 tempat di prosa | `ponselu` (mis. "header jadi tinggi di ponselu") | `ponsel` / `HP` | `ponsel` + huruf `u` nyasar. 5 diperbaiki saat revisi nada; 1 di bagian `Evaluasi` diperbaiki terpisah |
| 15 | `Evaluasi` | "dari ponselnya" | "dari HP-nya" | Bentuk bersufiks yang lolos dari pass istilah |
| 03 | `Contoh Kode` | "spectrum selector" | "spektrum selector" | Kata Inggris yang tidak perlu; **bukan** salah makna, jadi dicatat terpisah dari daftar ini |

### 11.3 Kerusakan struktur pra-ada yang ditemukan & diperbaiki

| Bab | Masalah | Dampak | Perbaikan |
|---|---|---|---|
| 01 | 1 pagar nyasar (total 15, ganjil) + span inline tak ditutup di baris 302 | seluruh sisa bab dirender sebagai kode, termasuk Daftar Pustaka | pagar dibuang, span ditutup |
| 14 | 2 span kode inline terbelah dua baris | backtick tampil sebagai teks | masing-masing dijadikan satu baris |

### 11.4 Bug yang saya buat sendiri, dan perbaikannya

Ditulis terbuka karena semuanya menyentuh berkas.

1. **Regex istilah memakai `(?![A-Za-z])`**, sehingga bentuk bersufiks tidak pernah
   cocok: `tata letaknya`, `ponselnya`, `berkasnya` lolos. Ditemukan karena agen
   revisi bab-14 memperbaiki `tata letaknya` sendiri. Pemindaian ulang menemukan
   0 sisa setelah diperbaiki.
2. **Blok kode indentasi (4 spasi) tidak dikenali.** bab-09 memakai 320 baris
   blok indentasi (blok pagar-nya hanya 6). Akibatnya pass istilah mengubah
   2 baris **teks HTML tampilan** di bab-09 (`tata letak`→`layout`,
   `ponsel`→`HP`). Keduanya sudah dikembalikan. Agen revisi nada tidak melakukan
   kesalahan ini (0 perubahan non-komentar di blok indentasi, diperiksa di 4 bab
   yang memilikinya).
3. **Premis line ending saya salah.** Saya memberi tahu bahwa menyeragamkan ke LF
   akan menghasilkan ~6.300 baris derau diff. Itu tidak benar: repo ini
   `core.autocrlf=true` dan semua berkas sudah tersimpan LF di dalam git, sehingga
   `git diff` tidak berubah sama sekali. Pilihan itu tetap dijalankan (hasilnya
   tetap benar), tetapi bukan karena alasan yang saya sebutkan.
4. **Aturan mojibake pertama saya salah.** `Bab 1?8` adalah **rentang** (1–8),
   sedangkan `?2?0?1?1` adalah **2011**. Menerapkan aturan hapus-`?` lebih dulu
   akan menghasilkan `Bab 18`. Ditangkap sebelum menyentuh berkas dengan uji
   regex pada teks asli.

### 11.5 Penyimpangan kecil yang perlu kamu tahu

- **3 partikel percakapan pra-ada di dalam kutipan ikut terhapus.** Baseline
  memuat `deh` (bab-04), `kok` (bab-09), `kok` (bab-14) di dalam tanda kutip,
  mis. `bukan ke perasaan "kok kurang mirip"` menjadi `"kurang mirip"`. Hasilnya
  0 kata terlarang, tetapi 3 kutipan berubah kata. Ini konsekuensi dari leksikon
  yang melarang partikel tersebut.
- **`-nya` dan posesif diseragamkan dengan aturan tata bahasa, bukan sekadar
  gaya.** Posesif jadi serangkai (`kampusmu`, `membantumu`), sedangkan `kamu`
  sebagai subjek tetap terpisah (`supaya kamu bisa`, `pas kamu membuka`). Jadi
  buku ini memang memuat dua bentuk — itu disengaja, bukan sisa yang terlewat.

### 11.6 Kesalahan isi yang DITEMUKAN tetapi TIDAK diperbaiki

Semuanya perlu keputusanmu; tidak ada yang saya ubah.

| Bab | Temuan | Kenapa tidak saya ubah |
|---|---|---|
| 13 | Bagian 14.3 dan kunci `Evaluasi` menulis `g-4` memberi "24 px di setiap sisi kolom". Bootstrap membagi setengah gutter per sisi (12 px), jadi jaraknya 24 px. Kalimatnya bertentangan sendiri. | klaim teknis; perlu kamu putuskan mana yang benar |
| 14 | Pohon 14.5 menulis `<h3>` untuk "Spesifikasi Singkat", sedangkan spesifikasi F dan `produk.html` memakai `h2` | inkonsistensi antar bagian |
| 14 | Spesifikasi D menulis "Katalog, tentang, Kontak" — `tentang` huruf kecil | salah ketik |
| 03 | `<h2>Narasiswa</h2>` pada seksi `#kontak` | kata yang tampaknya salah, **tetapi** berada di teks HTML tampilan yang tidak boleh diubah. Mungkin maksudnya "Narahubung" |
| 03 | "singkatan ( shorthand)" dan "mengabdiakannya" | kerapian, di luar nada |

### 11.7 Yang masih tidak diketahui

1. **Kode contoh belum diverifikasi jalan.** Tidak ada folder `tokosaya-css/`
   atau `tokosaya-bootstrap/` di repo, jadi tidak ada pembanding. Pemeriksaan 4
   hanya membuktikan kode **tidak berubah**, bukan bahwa kode itu **benar**.
2. **bab 8 (UTS) dan bab 16 (UAS) belum ada berkasnya**, padahal `readme.md`
   mencantumkan 16 pertemuan. Kalau ditulis nanti, pakai kontrak ini.

### 11.8 Menjalankan ulang pemeriksaan

```
python scripts/verify-revisi.py
```

Skrip membandingkan working tree dengan commit baseline yang disebut di atas
dan mencetak tabel 14 baris di 11.1.
