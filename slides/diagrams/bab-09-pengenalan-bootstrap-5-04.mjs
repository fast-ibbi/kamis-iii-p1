// bab-09 · 04 (slide ke-4) — kartu produk yang disalin ke halaman keranjang dengan
// padding 14 px, bukan 16 px. Aritmetikanya bisa diperiksa sendiri:
// 280 + 14 + 14 + 1 + 1 = 310 px, sedangkan kartu aslinya 314 px.
export default {
  id: '04',
  slide: 'Contoh: Pekerjaan yang Mulai Menumpuk',
  pattern: 'mockup',
  alt: 'Kartu produk hasil salinan: content 280 x 96 piksel, padding 14 piksel, border 1 piksel, lebar total 310 piksel — empat piksel lebih ramping dari kartu aslinya.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 280, h: 96, label: 'kartu produk' },
    padding: [14, 14, 14, 14],
    border: [1, 1, 1, 1],
    margin: [0, 0, 0, 0],
  },
}
