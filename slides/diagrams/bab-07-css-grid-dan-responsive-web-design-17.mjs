// bab-07 · 17 — dua strategi kaskade, berpasangan baris demi baris.
// Desktop-first ditandai merah karena ia kebiasaan yang ditinggalkan, bukan
// karena salah; satu-satunya elemen beraksen biru ada di kanan.
export default {
  id: '17',
  slide: 'Kenapa Mobile-First',
  pattern: 'beforeAfter',
  alt: 'Desktop-first memakai max-width sehingga gaya desktop dibatalkan satu per satu dan kaskadenya jadi tempat berburu bug; mobile-first menulis gaya dasar buat layar kecil dulu, menumpuk gaya tambahan, dan kodenya bergerak naik.',
  data: {
    left: {
      title: 'DESKTOP-FIRST',
      tone: 'red',
      items: [
        'gaya desktop dulu, lalu dibatalkan satu per satu',
        'memakai max-width',
        'kaskadenya berubah jadi tempat berburu bug',
      ],
    },
    right: {
      title: 'MOBILE-FIRST',
      tone: 'acc',
      items: [
        'gaya dasar ditulis buat layar kecil dulu',
        'gaya tambahan ditumpuk buat layar yang makin besar',
        'kode bergerak naik',
      ],
    },
  },
}
