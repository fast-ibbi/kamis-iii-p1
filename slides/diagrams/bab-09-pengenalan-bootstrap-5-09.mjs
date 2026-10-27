// bab-09 · 09 (slide ke-9) — dua penulis, satu angka. Kartu produk dengan padding
// 16 px dan border 1 px: 280 + 16 + 16 + 1 + 1 = 314 px, sama di halaman mana pun
// karena `p-3` membawa skalanya sendiri.
export default {
  id: '09',
  slide: 'Contoh: Manfaat Memakai Framework',
  pattern: 'mockup',
  alt: 'Kartu produk dari dua penulis berbeda tetap sama: content 280 x 96 piksel, padding 16 piksel, border 1 piksel, lebar total 314 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 280, h: 96, label: 'kartu produk' },
    padding: [16, 16, 16, 16],
    border: [1, 1, 1, 1],
    margin: [0, 0, 0, 0],
  },
}
