// bab-05 · 06 — kartu produk dalam ukuran sebenarnya. Angkanya diturunkan dari
// CSS studi kasus: max-width 320, padding 24 (kiri-kanan), border 1, margin 16.
// content 320 - 48 - 2 = 270; tinggi 220 - 48 - 2 = 170.
export default {
  id: '06',
  slide: 'Diagram: Kartu Produk',
  pattern: 'mockup',
  alt: 'Kartu produk: content 270 × 170 px, padding 24 px, border 1 px, dan margin 16 px di dalam max-width 320 px.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 270, h: 170 },
    padding: [24, 24, 24, 24],
    border: [1, 1, 1, 1],
    margin: [16, 16, 16, 16],
  },
}
