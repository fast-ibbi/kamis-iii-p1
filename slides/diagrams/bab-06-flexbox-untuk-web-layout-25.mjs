// bab-06 · 25 — basis dulu, baru kelebihan dibagi: dua kolom 240 px, gap 16 px,
// sisa 624 px yang jadi bahan `flex-grow`. Pita amber selebar 624 px itulah yang
// dipecah grow 1 : 2 menjadi 208 px dan 416 px di prosa.
export default {
  id: '25',
  slide: 'Contoh: Mengatur Ukuran Item',
  pattern: 'mockup',
  alt: 'Dua kolom di wadah 1120 px: kolom konten dan kolom samping masing-masing basis 240 px dengan gap 16 px, menyisakan 624 px yang menjadi bahan flex-grow.',
  imgWidth: 1120,
  data: {
    kind: 'flex',
    justify: 'flex-start',
    container: 1120,
    gap: 16,
    items: [
      { label: 'kolom konten', basis: 240 },
      { label: 'kolom samping', basis: 240 },
    ],
  },
}
