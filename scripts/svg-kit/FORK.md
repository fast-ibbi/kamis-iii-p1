# Fork: svg-kit

Salinan `slide-diagrams` milik skill global, dibekukan ke dalam repo supaya build
di GitHub Actions bisa menjalankannya tanpa bergantung pada isi `~/.pi/agent/skills/`.

Sumber: `~/.pi/agent/skills/slide-diagrams/` (lib, scripts, templates, references, SKILL.md).

## Perbedaan dari aslinya

Tiga perbedaan, ketiganya disengaja:

| Berkas | Baris | Perubahan |
|---|---|---|
| `scripts/build.mjs` | deteksi heading slide | `/^##\s+\S/` → `/^#{1,2}\s+\S/` — deck di repo ini memberi judul slide dengan `# ` (h1 Marp), bukan `## `. Heading pertama dalam satu slide yang dipakai, jadi slide pembatas yang punya subjudul `## ` tetap terikat ke judulnya sendiri. |
| `lib/svg-kit.mjs` | `Canvas.rect()` | Menerima opsi `register: false`. Lihat “Pola ketujuh” di bawah. |
| `lib/svg-kit.mjs` | `PATTERNS` | Pola ketujuh `mockup` ditambahkan. |

Pesan galat dan label audit ikut menyebut `# heading` alih-alih `## heading`.

### Pola ketujuh: `mockup`

Kit aslinya menyatakan “six patterns, closed set” dan melarang menyentuh `lib/`.
Repo ini melanggarnya dengan sadar, karena enam pola yang ada semuanya menggambar
**teks berpanel** — tidak ada satu pun yang bisa menunjukkan kotak, lebar, atau
distribusi ruang. Untuk mata kuliah CSS, gambar yang tidak memperlihatkan geometri
hampir tidak mengajar apa pun, jadi pola ini ditambahkan.

Tiga tata letak, semuanya digambar dengan skala sebenarnya:

- `kind: 'box'` — pita margin/border/padding/content bersarang, plus daftar angka
  dan `lebar total` yang dihitung dari angka itu sendiri.
- `kind: 'flex'` — butir dengan `basis` nyata di dalam `container` nyata; sisa ruang
  digambar sebagai pita amber berlabel px, jadi distribusi `justify-content` bisa
  diperiksa sendiri oleh pembaca.
- `kind: 'grid'` — penggaris 12 track bernomor di atas sel ber-`span`, dengan garis
  kolom putus-putus yang turun sampai baris terakhir. Garis itu digambar **sebelum**
  sel, jadi hanya tampak di gutter — persis di tempat garis kolom berada. Tanpa
  garis itu penggarisnya cuma hiasan: pembaca tidak bisa memastikan `span 4` dan
  `span 8` benar-benar mulai dan berhenti di track yang sama.

**Kenapa `register: false` ada.** `finalize()` menolak semua kotak yang bertumpuk,
dan kotak bersarang pada box model bertumpuk menurut definisi — setiap mockup akan
mati oleh pemeriksaan itu. Zona mockup karena itu didaftarkan dengan
`register: false`, dan sebagai gantinya `nested()` menegaskan setiap kotak berada di
dalam induknya. Invariannya tidak hilang, cuma berubah bentuk: dulu “tidak boleh ada
yang bertumpuk”, sekarang “yang bertumpuk harus bersarang penuh”. **Jangan kembalikan
pemeriksaan tumpang-tindih untuk pola `mockup`** tanpa memikirkan ini.

Yang tidak berubah: kontrak spec (tidak ada koordinat), lantai 14 px, pengecekan
muat teks, dan pengecekan geometri. Kalau konten tidak muat, yang diubah tetap spec —
bukan kit.

Tidak ada perubahan lain. Khususnya:

- **Provenance sudah membaca catatan penyaji.** `slide.text` adalah isi slide apa adanya,
  termasuk blok `<!-- … -->`; tidak ada fungsi yang membuang komentar. Jadi `--strict`
  menerima label yang berasal dari prosa tampak **maupun** dari catatan penyaji — penting
  karena di repo ini bullet yang diganti diagram dipindahkan ke catatan. Jangan tambahkan
  penyaring komentar pada `provenance()`.
- `lib/svg-kit.mjs` (geometri, lantai 14 px) tidak disentuh **selain** pola ketujuh
  `mockup` dan opsi `register` di atas. Enam pola lama tidak diubah sama sekali.
  Kalau sebuah konten tidak muat, yang diubah adalah spec — bukan kit.

## Pemakaian

```bash
node scripts/svg-kit/scripts/build.mjs slides/bab-05-….md --audit      # fakta per slide
node scripts/svg-kit/scripts/build.mjs slides/bab-05-….md --dry         # rencana, tanpa tulis
node scripts/svg-kit/scripts/build.mjs slides/bab-05-….md --strict      # tulis + provenance
node scripts/svg-kit/scripts/build.mjs slides/bab-05-….md --png 07      # raster satu diagram
```

Spec tinggal di `slides/diagrams/<slug>-NN.mjs`, SVG keluar ke
`slides/assets/diagrams/<slug>-NN.svg`. Kit hanya menyisipkan satu baris `![w:…](…)`
di bawah judul slide; ia tidak pernah menghapus prosa. Pemindahan bullet ke catatan
dilakukan manual, dan harus verbatim atau nyaris verbatim supaya provenance tetap lolos.

## Kalau skill global diperbarui

Bandingkan `lib/svg-kit.mjs` dan `scripts/build.mjs` dengan sumbernya, lalu pindahkan
perubahan yang relevan. Perbedaan heading dan pola `mockup` di atas harus tetap
dipertahankan — keduanya bukan kelalaian, dan keduanya akan hilang kalau fork ini
di-reset ke salinan aslinya.
