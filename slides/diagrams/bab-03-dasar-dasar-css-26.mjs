// bab-03 · 26 — properti teks yang diwarisi lawan properti kotak yang tidak.
// Dua panel sejajar, bukan tabel tiga kolom: yang dibandingkan cuma dua kelompok.
export default {
  id: '26',
  slide: 'Inheritance: yang Diwarisi dan Bukan',
  pattern: 'beforeAfter',
  alt: 'Properti teks seperti color, font-family, dan line-height diwariskan ke anak; properti kotak seperti border, padding, margin, dan background-color tidak diwariskan.',
  data: {
    left: {
      title: 'DIWARISKAN',
      tone: 'acc',
      items: ['color', 'font-family', 'line-height'],
    },
    right: {
      title: 'TIDAK DIWARISKAN',
      tone: 'neutral',
      items: ['border', 'padding', 'margin', 'background-color'],
    },
  },
}
