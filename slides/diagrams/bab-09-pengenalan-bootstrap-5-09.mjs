// bab-09 · 09 (slide ke-9) — dua penulis, satu angka: dua panel sejajar yang isinya
// sama persis baris per baris. 280 + 16 + 16 + 1 + 1 = 314 px di halaman mana pun,
// karena `p-3` membawa skalanya sendiri.
export default {
  id: '09',
  slide: 'Contoh: Manfaat Memakai Framework',
  pattern: 'beforeAfter',
  alt: 'Dua penulis, satu angka: Penulis A dan Penulis B sama-sama menulis kartu produk dengan content 280 x 96 piksel, padding 16 piksel, border 1 piksel, jadi lebar total 314 piksel di kedua halaman.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'PENULIS A',
      tone: 'neutral',
      items: ['content 280 × 96 px', 'padding 16 px', 'border 1 px', 'lebar total 314 px'],
    },
    right: {
      title: 'PENULIS B',
      tone: 'acc',
      items: ['content 280 × 96 px', 'padding 16 px', 'border 1 px', 'lebar total 314 px'],
    },
  },
}
