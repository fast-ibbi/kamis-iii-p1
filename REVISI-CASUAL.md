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

17. `Contoh Kode` — komentar di dalamnya ikut casual; teks HTML contoh tidak disentuh.

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
