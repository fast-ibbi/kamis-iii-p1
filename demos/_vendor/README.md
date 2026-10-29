# Pustaka pihak ketiga untuk demo Bootstrap

Tiga berkas di folder ini disalin apa adanya dari paket resmi, supaya demo Bab 9–12
tetap berjalan tanpa internet dan tanpa CDN saat dipakai di kelas. Demo merujuk
berkas ini lewat jalur relatif (`../_vendor/bootstrap.min.css`), bukan lewat
`https://cdn.jsdelivr.net/...` seperti pada slide praktikum.

| Berkas | Asal | Lisensi |
| --- | --- | --- |
| `bootstrap.min.css` | `bootstrap@5.3.3/dist/css/bootstrap.min.css` | MIT, © 2011–2024 The Bootstrap Authors |
| `bootstrap-icons.min.css` | `bootstrap-icons@1.11.3/font/bootstrap-icons.min.css` | MIT, © The Bootstrap Authors |
| `fonts/bootstrap-icons.woff2`, `fonts/bootstrap-icons.woff` | `bootstrap-icons@1.11.3/font/fonts/` | MIT, © The Bootstrap Authors |

Yang disalin hanya CSS dan berkas font ikon — **tanpa JavaScript**. Ini sejalan
dengan aturan mata kuliah: seluruh halaman dibangun dengan HTML dan CSS saja.

Memperbarui versi berarti mengunduh ulang berkas di atas dari CDN yang sama,
lalu menyesuaikan nomor versi pada tabel ini dan pada blok kode starter template
di `slides/bab-09-pengenalan-bootstrap-5.md`.
