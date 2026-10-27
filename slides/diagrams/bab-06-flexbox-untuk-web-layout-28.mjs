// bab-06 · 28 — kenapa kelompok kanan dibungkus elemen sendiri.
// `tree` membuang `note`, jadi perilaku penekukan ditempel ke label simpulnya:
// seluruh kelompok kanan turun sebagai satu blok.
export default {
  id: '28',
  slide: 'Pola 1: Navigasi Horizontal',
  pattern: 'tree',
  alt: 'Struktur site-nav: wadah flex punya dua anak langsung, merek dan kelompok kanan; kelompok kanan berisi menu dan keranjang, jadi ia turun sebagai satu blok.',
  data: {
    root: {
      label: 'site-nav',
      children: [
        { label: 'merek' },
        {
          label: 'kelompok kanan — turun sebagai satu blok',
          children: [{ label: 'menu' }, { label: 'keranjang' }],
        },
      ],
    },
  },
}
