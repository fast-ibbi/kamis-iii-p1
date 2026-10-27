// bab-12 · 40 — kartu produk sebagai kotak: lebar 4 kolom dari grid 12 kolom
// (4 x 71 + 3 x 24 = 356 piksel), padding 16 piksel dari aturan "16 di dalam",
// jadi content 324 x 96 piksel dan lebar total 324 + 16 + 16 = 356 piksel.
// 24 piksel "antar kartu" tidak digambar sebagai margin: itu milik gutter grid.
export default {
  id: '40',
  slide: 'Contoh: Kartu Produk',
  pattern: 'mockup',
  alt: 'Kartu produk Tokosaya: content 324 x 96 piksel, padding 16 piksel, lebar total 356 piksel, dengan radius 12 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 324, h: 96, label: 'isi kartu' },
    padding: [16, 16, 16, 16],
    border: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    footer: 'radius 12 piksel',
  },
}
