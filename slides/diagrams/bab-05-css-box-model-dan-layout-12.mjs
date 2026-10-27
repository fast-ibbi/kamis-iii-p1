// bab-05 · 12 — max-width memotong lebar content, bukan mengecilkan padding.
// Gambar produk dipatok 280 px tapi induk kartunya 240 px, jadi yang menang
// `max-width: 100%`: content turun ke 240 px dan pitanya tetap dihitung di luar.
export default {
  id: '12',
  slide: 'Contoh: Menahan Kotak dengan min dan max',
  pattern: 'mockup',
  alt: 'Kotak gambar produk: content 240 x 96 piksel, padding 16 piksel, border 4 piksel, lebar total 280 piksel setelah max-width 100 persen.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 240, h: 96, label: 'gambar produk' },
    padding: [16, 16, 16, 16],
    border: [4, 4, 4, 4],
    margin: [0, 0, 0, 0],
    footer: 'max-width: 100%',
  },
}
