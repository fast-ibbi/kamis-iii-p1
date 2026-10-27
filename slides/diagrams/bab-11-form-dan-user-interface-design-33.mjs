// bab-11 · 33 — input-group: lampiran menempel di ujung medan, tanpa celah.
// Medan kupon 360 px + tombol Pakai 56 px = 416 px, gap 0, jadi sisa 0 px.
// Latar amber tidak muncul sama sekali — itu justru intinya.
export default {
  id: '33',
  slide: 'Contoh: input-group: Medan dengan Lampiran',
  pattern: 'mockup',
  alt: 'Baris input-group selebar 416 piksel: medan kupon 360 piksel langsung menempel pada tombol Pakai 56 piksel dengan gap 0, sehingga sisa ruang 0 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'flex',
    justify: 'flex-start',
    container: 416,
    gap: 0,
    items: [
      { label: 'medan kupon', basis: 360 },
      { label: 'tombol Pakai', basis: 56 },
    ],
  },
}
