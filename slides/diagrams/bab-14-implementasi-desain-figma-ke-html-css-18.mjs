// bab-14 · 18 — frame 1440 px dipotong margin 150 px di dua sisi, sisanya
// kontainer 1140 px. Gambar ini yang membuat angka (1140 − 11 × 24) ÷ 12 = 73
// masuk akal: pengurangannya diambil dari lebar frame, bukan dari perasaan.
export default {
  id: '18',
  slide: 'Contoh: Hitung Grid dan Kelas Bootstrap',
  pattern: 'mockup',
  alt: 'Frame 1440 px: margin 150 px di kiri dan kanan, content 1140 x 96 px, lebar total 1440 px, dan satu kolom grid 73 px.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 1140, h: 96, label: 'kontainer' },
    padding: [0, 0, 0, 0],
    border: [0, 0, 0, 0],
    margin: [0, 150, 0, 150],
    footer: 'frame 1440 px',
  },
}
