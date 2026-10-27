// bab-05 · 21 — badge "Best Seller" sebagai inline-block: padding 8 px 16 px
// benar-benar dipakai browser, jadi kotaknya 120 x 38 px.
// Pita padding yang lebar di kiri-kanan itu yang jadi area klik badge.
export default {
  id: '21',
  slide: 'Contoh: Badge Tokosaya Butuh inline-block',
  pattern: 'mockup',
  alt: 'Badge Best Seller: content 88 x 22 piksel, padding 8 16 8 16 piksel, lebar total 120 piksel, sebagai display inline-block.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 88, h: 22, label: 'Best Seller' },
    padding: [8, 16, 8, 16],
    border: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    footer: 'display: inline-block',
  },
}
