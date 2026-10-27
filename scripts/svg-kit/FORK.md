# Fork: svg-kit

Salinan `slide-diagrams` milik skill global, dibekukan ke dalam repo supaya build
di GitHub Actions bisa menjalankannya tanpa bergantung pada isi `~/.pi/agent/skills/`.

Sumber: `~/.pi/agent/skills/slide-diagrams/` (lib, scripts, templates, references, SKILL.md).

## Perbedaan dari aslinya

Satu perbedaan, disengaja:

| Berkas | Baris | Perubahan |
|---|---|---|
| `scripts/build.mjs` | deteksi heading slide | `/^##\s+\S/` → `/^#{1,2}\s+\S/` — deck di repo ini memberi judul slide dengan `# ` (h1 Marp), bukan `## `. Heading pertama dalam satu slide yang dipakai, jadi slide pembatas yang punya subjudul `## ` tetap terikat ke judulnya sendiri. |

Pesan galat dan label audit ikut menyebut `# heading` alih-alih `## heading`.

Tidak ada perubahan lain. Khususnya:

- **Provenance sudah membaca catatan penyaji.** `slide.text` adalah isi slide apa adanya,
  termasuk blok `<!-- … -->`; tidak ada fungsi yang membuang komentar. Jadi `--strict`
  menerima label yang berasal dari prosa tampak **maupun** dari catatan penyaji — penting
  karena di repo ini bullet yang diganti diagram dipindahkan ke catatan. Jangan tambahkan
  penyaring komentar pada `provenance()`.
- `lib/svg-kit.mjs` (geometri, enam pola, lantai 14 px) tidak disentuh. Kalau sebuah konten
  tidak muat, yang diubah adalah spec — bukan kit.

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
perubahan yang relevan. Perbedaan heading di atas harus tetap dipertahankan.
