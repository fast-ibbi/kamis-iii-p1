// bab-15 · 19 — batas praktis: kartu di col-md-4 sudah 357 px dari kelas baku,
// jadi tidak ada yang perlu ditimpa !important.
export default {
  id: '19',
  slide: 'Contoh: Aturan Jaga dan Batas Praktis',
  pattern: 'mockup',
  alt: 'Kartu produk: content 323 kali 96 piksel, padding 16 piksel, border 1 piksel, lebar total 357 piksel, semuanya dari kelas Bootstrap tanpa important.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 323, h: 96, label: 'isi kartu' },
    padding: [16, 16, 16, 16],
    border: [1, 1, 1, 1],
    margin: [0, 0, 0, 0],
    footer: 'tanpa !important',
  },
}
