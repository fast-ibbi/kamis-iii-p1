// bab-01 · 23 — lencana sekecil apa pun tetap kotak ber-pita.
// Judul slide ini sengaja "Contoh: Lencana *Best Seller*": slide konsepnya sudah
// berjudul "Contoh Kecil: Lencana *Best Seller*", jadi menyalin utuh judul itu akan
// menghasilkan "Contoh: Contoh Kecil: ..." yang terbaca gagap.
// Content 96 × 24 px dari teks "Best Seller", padding 8 px, border 1 px:
// 96 + 8 + 8 + 1 + 1 = 114 px. Angka ini yang membuktikan Bootstrap cuma
// membungkus hal yang sama dengan satu kelas.
export default {
  id: '23',
  slide: 'Contoh: Lencana *Best Seller*',
  pattern: 'mockup',
  alt: 'Lencana Best Seller dengan content 96 kali 24 piksel, padding 8 piksel, border 1 piksel, dan lebar total 114 piksel; Bootstrap menyelesaikannya dengan satu kelas badge.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 96, h: 24, label: 'Best Seller' },
    padding: [8, 8, 8, 8],
    border: [1, 1, 1, 1],
    margin: [0, 0, 0, 0],
    footer: 'kelas badge',
  },
}
