// bab-05 · 30 — padding dan margin berangka sama, efeknya berbeda.
// Padding mewarnai latar dan menambah area klik; margin tetap transparan.
// Karena angkanya sama (16 px), warna pita adalah satu-satunya pembeda —
// jadi pita margin dan padding sengaja dibuat dua tone yang jauh.
export default {
  id: '30',
  slide: 'Contoh: Kapan padding, Kapan margin',
  pattern: 'mockup',
  alt: 'Tombol dengan content 120 x 40 piksel, padding 16 piksel, border 1 piksel, dan margin 16 piksel; pita padding ikut berwarna, pita margin tetap transparan.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 120, h: 40, label: 'Tambah ke Keranjang' },
    padding: [16, 16, 16, 16],
    border: [1, 1, 1, 1],
    margin: [16, 16, 16, 16],
  },
}
