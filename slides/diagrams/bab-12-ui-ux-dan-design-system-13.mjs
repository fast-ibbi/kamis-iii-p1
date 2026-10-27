// bab-12 · 13 — affordance yang bisa dihitung: pita padding ikut jadi area
// yang bisa ditekan. 16 piksel diambil dari aturan padding kartu slide
// Whitespace, dan label tombolnya label aksi yang sama dengan tombol hero
// Tokosaya: 120 + 16 + 16 = 152 piksel, 24 + 16 + 16 = 56 piksel.
export default {
  id: '13',
  slide: 'Contoh: Affordance',
  pattern: 'mockup',
  alt: 'Tombol Lihat Katalog: content 120 x 24 piksel, padding 16 piksel di keempat sisi, lebar total 152 piksel dan tinggi 56 piksel, dengan radius 12 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 120, h: 24, label: 'Lihat Katalog' },
    padding: [16, 16, 16, 16],
    border: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    footer: 'radius 12 piksel',
  },
}
