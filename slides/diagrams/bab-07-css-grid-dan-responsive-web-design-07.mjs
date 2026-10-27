// bab-07 · 07 — dua arah berpikir: konten menuju layout lawan denah menuju konten.
// Baris 1 dan 2 menjawab situasinya, baris 3 menjawab arah berpikirnya. Baris
// `position` sengaja tidak digambar — fakta itu tinggal di catatan penyaji.
export default {
  id: '07',
  slide: 'Grid dan Flexbox: Kapan Pakai yang Mana',
  pattern: 'beforeAfter',
  alt: 'Flexbox bergerak dari konten menuju layout untuk navigasi horizontal dan barisan kartu; Grid bergerak dari denah menuju konten untuk kerangka halaman dan kartu statistik yang harus sebaris sempurna.',
  data: {
    left: {
      title: 'FLEXBOX',
      tone: 'neutral',
      items: [
        'navigasi horizontal, footer multi kolom',
        'barisan kartu dengan panjang isi berbeda',
        'bergerak dari konten menuju layout',
      ],
    },
    right: {
      title: 'GRID',
      tone: 'acc',
      items: [
        'kerangka halaman: header, nav, main, footer',
        'kartu statistik yang harus sebaris sempurna',
        'bergerak dari denah menuju konten',
      ],
    },
  },
}
