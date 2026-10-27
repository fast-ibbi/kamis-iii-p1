// bab-12 · 13 — affordance yang bisa dihitung: pita padding ikut jadi area
// yang bisa ditekan. Angkanya diturunkan dari grid slide Alignment: satu tombol
// hero menempati 2 kolom dari 12 kolom selebar 1120 piksel dengan gutter 24,
// jadi 2 x 71 + 24 = 166 piksel. Padding 16 piksel di keempat sisi menyisakan
// content 134 x 24 piksel, dan 24 + 16 + 16 = 56 piksel tingginya.
// `mockupBox` tidak punya opsi radius, jadi lengkung 12 piksel tidak diklaim
// di sini; footer menyebut tinggi total supaya angka 56 bisa dicocokkan.
export default {
  id: '13',
  slide: 'Contoh: Affordance',
  pattern: 'mockup',
  alt: 'Tombol Lihat Katalog: content 134 x 24 piksel, padding 16 piksel di keempat sisi, lebar total 166 piksel atau dua kolom grid, dan tinggi total 56 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 134, h: 24, label: 'Lihat Katalog' },
    padding: [16, 16, 16, 16],
    border: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    footer: 'tinggi total 56 piksel',
  },
}
