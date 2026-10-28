# Perbandingan antar tahap (tanpa unduh zip)

Empat belas tahap di `contoh-cv/` juga ditandai sebagai **git tag**, satu per tahap.
Halaman ini mengumpulkan cara membandingkan kode antar tahap — diff berwarna di GitHub
atau di terminal — supaya tidak perlu mengunduh zip tiap tag lalu membandingkan manual.

Setiap tautan di bawah menampilkan diff berwarna (*unified* maupun *split*) beserta
daftar berkas yang berubah. Karena tiap tahap adalah commit tersendiri, `compare`
selalu memperlihatkan selisih nyata, bukan "no commits".

---

## Tahap N → tahap N+1

| Dari | Ke | Perubahan | Bandingkan |
| --- | --- | --- | --- |
| `01` | `02` | 11 berkas, 385 baris ditambah | [diff 01 → 02](https://github.com/fast-ibbi/kamis-iii-p1/compare/contoh-cv/bab-01-profil-html...contoh-cv/bab-02-semantik) |
| `02` | `03` | 12 berkas, 592 baris ditambah | [diff 02 → 03](https://github.com/fast-ibbi/kamis-iii-p1/compare/contoh-cv/bab-02-semantik...contoh-cv/bab-03-css-dasar) |
| `03` | `04` | 12 berkas, 642 baris ditambah | [diff 03 → 04](https://github.com/fast-ibbi/kamis-iii-p1/compare/contoh-cv/bab-03-css-dasar...contoh-cv/bab-04-tipografi) |
| `04` | `05` | 12 berkas, 815 baris ditambah | [diff 04 → 05](https://github.com/fast-ibbi/kamis-iii-p1/compare/contoh-cv/bab-04-tipografi...contoh-cv/bab-05-box-model) |
| `05` | `06` | 12 berkas, 885 baris ditambah | [diff 05 → 06](https://github.com/fast-ibbi/kamis-iii-p1/compare/contoh-cv/bab-05-box-model...contoh-cv/bab-06-flexbox) |
| `06` | `07` | 12 berkas, 896 baris ditambah | [diff 06 → 07](https://github.com/fast-ibbi/kamis-iii-p1/compare/contoh-cv/bab-06-flexbox...contoh-cv/bab-07-grid) |
| `07` | `09` | 12 berkas, 771 baris ditambah | [diff 07 → 09](https://github.com/fast-ibbi/kamis-iii-p1/compare/contoh-cv/bab-07-grid...contoh-cv/bab-09-bootstrap) |
| `09` | `10` | 13 berkas, 1116 baris ditambah | [diff 09 → 10](https://github.com/fast-ibbi/kamis-iii-p1/compare/contoh-cv/bab-09-bootstrap...contoh-cv/bab-10-komponen) |
| `10` | `11` | 13 berkas, 1226 baris ditambah | [diff 10 → 11](https://github.com/fast-ibbi/kamis-iii-p1/compare/contoh-cv/bab-10-komponen...contoh-cv/bab-11-form) |
| `11` | `12` | 13 berkas, 1352 baris ditambah | [diff 11 → 12](https://github.com/fast-ibbi/kamis-iii-p1/compare/contoh-cv/bab-11-form...contoh-cv/bab-12-design-system) |
| `12` | `13` | 14 berkas, 1493 baris ditambah | [diff 12 → 13](https://github.com/fast-ibbi/kamis-iii-p1/compare/contoh-cv/bab-12-design-system...contoh-cv/bab-13-a11y) |
| `13` | `14` | 15 berkas, 1602 baris ditambah | [diff 13 → 14](https://github.com/fast-ibbi/kamis-iii-p1/compare/contoh-cv/bab-13-a11y...contoh-cv/bab-14-figma) |
| `14` | `15` | 16 berkas, 1857 baris ditambah | [diff 14 → 15](https://github.com/fast-ibbi/kamis-iii-p1/compare/contoh-cv/bab-14-figma...contoh-cv/bab-15-final) |

Kolom **Perubahan** memakai keluaran `git diff --shortstat`, bukan ukuran zip.

---

## Tautan lain yang berguna

- Seluruh perjalanan bab 01 → bab 15: <https://github.com/fast-ibbi/kamis-iii-p1/compare/contoh-cv/bab-01-profil-html...contoh-cv/bab-15-final>
- Satu tahap saja dibandingkan `main` saat ini: <https://github.com/fast-ibbi/kamis-iii-p1/compare/main...contoh-cv/bab-15-final>
- Daftar semua tag: <https://github.com/fast-ibbi/kamis-iii-p1/tags> — di halaman itu setiap tag hanya
  menawarkan `zip`/`tar.gz`; untuk melihat **isi perubahannya** pakai tautan `compare/`
  di atas atau skrip di bawah.

### Membaca berkas pada satu tahap (tanpa checkout, tanpa zip)

```text
https://github.com/fast-ibbi/kamis-iii-p1/tree/<tag>/contoh-cv/<folder>
https://github.com/fast-ibbi/kamis-iii-p1/blob/<tag>/contoh-cv/<folder>/index.html
```

Contoh: <https://github.com/fast-ibbi/kamis-iii-p1/tree/contoh-cv/bab-15-final/contoh-cv/bab-15-final>

---

## Di terminal

`scripts/compare-contoh-cv.sh` membungkus semua ini:

```bash
./scripts/compare-contoh-cv.sh                     # daftar tahap + statistik
./scripts/compare-contoh-cv.sh 5                   # kumulatif: bab 1 … bab 5
./scripts/compare-contoh-cv.sh 5 7                 # hanya selisih bab 5 → bab 7
./scripts/compare-contoh-cv.sh 5 7 css/style.css   # satu berkas saja
./scripts/compare-contoh-cv.sh --url 5 7           # cetak tautan GitHub-nya
./scripts/compare-contoh-cv.sh --open 5 7          # buka diff di browser
```

Padanan `git` mentahnya:

```bash
# ringkasan berkas yang berubah antar dua tahap
git diff --stat contoh-cv/bab-05-box-model contoh-cv/bab-06-flexbox --

# diff penuh satu berkas
git diff contoh-cv/bab-05-box-model contoh-cv/bab-06-flexbox -- 'contoh-cv/bab-06-flexbox/css/style.css'

# kata per kata, bukan baris per baris
git diff --word-diff=plain contoh-cv/bab-07-grid contoh-cv/bab-09-bootstrap --

# lihat isi satu berkas pada satu tahap tanpa checkout
git show contoh-cv/bab-10-komponen:contoh-cv/bab-10-komponen/komponen.html | less

# jalankan satu tahap di direktori sementara lalu hapus lagi
git worktree add /tmp/cv-bab-09 contoh-cv/bab-09-bootstrap
(cd /tmp/cv-bab-09/contoh-cv/bab-09-bootstrap && python3 -m http.server 8000)
git worktree remove /tmp/cv-bab-09
```

Tanda `--` di akhir perintah `git diff` **wajib** di sini: nama tag sengaja sama dengan
nama folder, jadi tanpa `--` git menganggapnya argumen ambigu (revision vs path).

Abaikan perbedaan spasi/format agar diff CSS–HTML lebih enak dibaca (`-w`), dan pakai
`--color-moved` bila hanya ada blok yang dipindah:

```bash
git diff -w --stat <tag-lama> <tag-baru> --
git diff --color-moved <tag-lama> <tag-baru> --
```

---

## Daftar tag → commit

| Tag | Commit | Judul |
| --- | --- | --- |
| `contoh-cv/bab-01-profil-html` | [`1e2e602`](https://github.com/fast-ibbi/kamis-iii-p1/commit/1e2e602) | Bab 1 — Profil HTML pertama |
| `contoh-cv/bab-02-semantik` | [`28ae707`](https://github.com/fast-ibbi/kamis-iii-p1/commit/28ae707) | Bab 2 — Struktur semantik |
| `contoh-cv/bab-03-css-dasar` | [`1563f43`](https://github.com/fast-ibbi/kamis-iii-p1/commit/1563f43) | Bab 3 — Dasar-dasar CSS |
| `contoh-cv/bab-04-tipografi` | [`738057a`](https://github.com/fast-ibbi/kamis-iii-p1/commit/738057a) | Bab 4 — Tipografi dan design token |
| `contoh-cv/bab-05-box-model` | [`888e350`](https://github.com/fast-ibbi/kamis-iii-p1/commit/888e350) | Bab 5 — Box model dan kartu proyek |
| `contoh-cv/bab-06-flexbox` | [`fe00a3b`](https://github.com/fast-ibbi/kamis-iii-p1/commit/fe00a3b) | Bab 6 — Flexbox |
| `contoh-cv/bab-07-grid` | [`7faf33f`](https://github.com/fast-ibbi/kamis-iii-p1/commit/7faf33f) | Bab 7 — Grid dan responsif |
| `contoh-cv/bab-09-bootstrap` | [`39de7e0`](https://github.com/fast-ibbi/kamis-iii-p1/commit/39de7e0) | Bab 9 — Bootstrap 5 |
| `contoh-cv/bab-10-komponen` | [`c10c457`](https://github.com/fast-ibbi/kamis-iii-p1/commit/c10c457) | Bab 10 — Komponen |
| `contoh-cv/bab-11-form` | [`4755134`](https://github.com/fast-ibbi/kamis-iii-p1/commit/4755134) | Bab 11 — Form |
| `contoh-cv/bab-12-design-system` | [`b022bee`](https://github.com/fast-ibbi/kamis-iii-p1/commit/b022bee) | Bab 12 — Design system |
| `contoh-cv/bab-13-a11y` | [`72cf40d`](https://github.com/fast-ibbi/kamis-iii-p1/commit/72cf40d) | Bab 13 — Responsif dan aksesibilitas |
| `contoh-cv/bab-14-figma` | [`8387fd3`](https://github.com/fast-ibbi/kamis-iii-p1/commit/8387fd3) | Bab 14 — Figma ke kode |
| `contoh-cv/bab-15-final` | [`1ae73b9`](https://github.com/fast-ibbi/kamis-iii-p1/commit/1ae73b9) | Bab 15 — QA dan rilis |

---

Dokumen ini dibuat oleh `scripts/gen-perbandingan.mjs`. Jalankan ulang setelah tag
dibuat atau dipindahkan:

```bash
node scripts/gen-perbandingan.mjs
```
