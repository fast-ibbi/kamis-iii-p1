# Bab 11 — Form

**Folder:** `bab-11-form/` · **Titik tolak:** `bab-10-komponen/`
**Pratinjau:** `index.html` (bagian Kontak) dan `komponen.html`

## Inti bab ini

Bagian kontak berubah dari kartu alamat pasif menjadi form yang bisa diisi. Aturan yang
ditegakkan sepanjang bab: **setiap medan punya `label` yang terlihat** — `placeholder`
bukan pengganti label. Ditambah `fieldset`/`legend` untuk mengelompokkan, `input-group`
untuk awalan `@`, `autocomplete` untuk data diri, dan status validasi statis di halaman
komponen.

Form dikirim lewat `mailto:` karena proyek tidak punya server, dan tidak ada JavaScript
yang memeriksa isian — validasi bergantung pada atribut HTML (`required`, `type`).

## Yang berubah dari Bab 10

| Berkas | Perubahan |
| --- | --- |
| `index.html` | 272 → 343 baris. `address` di kolom kiri diganti `<form>` lengkap |
| `komponen.html` | 278 → 309 baris. Seksi baru: status validasi form |
| `css/style.css` | 178 → 201 baris. Gaya label, cincin fokus, placeholder, legend |

## Rincian pekerjaan

### 1. Form di bagian kontak

```html
<form action="mailto:rizky.ardiansyah@mail.utn.ac.id" method="post" enctype="text/plain">
```

Enam kelompok medan:

| Kelompok | Medan | Detail yang diajarkan |
| --- | --- | --- |
| Data diri | `fieldset` + `legend` "Data diri" | Pengelompokan semantik, bukan sekadar jarak |
| Nama | `label for="nama"` + `input#nama` | `autocomplete="name"`, `required`, `form-text` penjelas |
| Surel | `div.input-group` + `span.input-group-text` `@` | `type="email"`, `autocomplete="email"`, `aria-describedby="surel-at surel-bantuan"` |
| Subjek | `select.form-select` + `option value=""` | Opsi kosong sebagai keadaan awal, `required` |
| Kolaborasi | `fieldset` + tiga `radio` berlabel | Semua `radio` berbagi `name="kolaborasi"` |
| Pesan | `textarea rows="4"` | `required`, `form-text` "Sebutkan tenggat dan tautan" |
| Persetujuan | `checkbox` + label kalimat penuh | `required` |

Tombol kirim: `button.btn.btn-cv[type=submit]` dengan ikon `bi-send` `aria-hidden`.

### 2. Kolom kanan dirombak

| Sebelum (Bab 10) | Sesudah (Bab 11) |
| --- | --- |
| `col-lg-5`: ajakan + tombol `mailto` | `address` kartu + kartu "Waktu balasan" |
| — | Jam balasan: Senin–Jumat 08.00–17.00 WIB |

Alamat surel/telepon tidak dihapus, hanya pindah ke kolom kanan sebagai rujukan.

### 3. Status validasi statis di `komponen.html`

Seksi baru "Status validasi form", empat medan berdampingan dalam `row g-4`:

| Medan | Kelas | Umpan balik |
| --- | --- | --- |
| Surel benar | `form-control is-valid` | `valid-feedback d-block` |
| Surel salah | `form-control is-invalid` + `aria-invalid="true"` | `invalid-feedback d-block` |
| Nonaktif | `disabled` | — |
| Hanya baca | `readonly` | Nilai bisa disalin, tidak bisa diubah |

Ditutup catatan: status ini **statis** — warnanya datang dari kelas `is-valid` /
`is-invalid`, bukan dari pemeriksaan JavaScript.

### 4. Tambahan `style.css`

```css
.form-label { color: var(--clr-dark); font-weight: 600; }

.form-control:focus,
.form-select:focus,
.form-check-input:focus {
  border-color: var(--clr-primary);
  box-shadow: 0 0 0 0.25rem rgba(15, 118, 110, 0.25);
}

.form-control::placeholder { color: var(--clr-muted); opacity: 1; }

fieldset legend { font-size: 0.875rem; letter-spacing: 0.04em; }
```

Cincin fokus memakai `rgba(15, 118, 110, 0.25)` — nilai turunan `--clr-primary`
(`#0F766E`). Ini satu-satunya nilai heksa/RGB baru di bab ini dan sengaja dikomentari
sebagai turunan token.

## Berkas di folder ini

| Berkas | Isi |
| --- | --- |
| `index.html` | Beranda dengan form kontak enam kelompok medan |
| `tentang.html` | Sama seperti Bab 10 |
| `komponen.html` | Rig + seksi status validasi form |
| `css/style.css` | v3 lanjutan: gaya form, cincin fokus, placeholder |

## Cara memeriksa

1. Setiap `input` punya `label` dengan `for` yang cocok. Klik teks label — fokus harus
   pindah ke medan.
2. Tekan Tab dari awal form: urutan fokus mengikuti urutan dokumen dan cincin fokus
   terlihat di setiap medan.
3. `autocomplete="name"` dan `autocomplete="email"` terbaca di DevTools › Accessibility;
   ini yang membuat pengisian otomatis browser bekerja.
4. Kosongkan nama lalu tekan Kirim: browser menolak lewat validasi HTML karena `required`
   — tanpa satu baris JavaScript.

## Yang dibawa ke Bab 12

Halaman komponen sudah menampung sepuluh seksi tanpa nomor dan tanpa aturan pemakaian.
Bab 12 menggantinya dengan `styleguide.html` berisi 14 bagian bernomor — token, tipe,
jarak, komponen — ditambah seksi **Do dan Don't**.
