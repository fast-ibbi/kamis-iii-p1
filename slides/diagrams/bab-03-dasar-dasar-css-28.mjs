// bab-03 · 28 — siapa yang menang: kekuatan deklarasi, dari yang paling lemah.
// `!important` bukan sumber aturan keempat, jadi ia ditempelkan ke "aturan kita"
// (penanda darurat pada deklarasi sendiri), bukan digambar sebagai lapisan
// sejajar dengan user-agent. Urutan penulisan dapat tempatnya sebagai catatan di
// pita "aturan kita" — di situlah dua aturan bisa sama kuat dan perlu tiebreaker.
export default {
  id: '28',
  slide: 'Contoh: Kaskade: Siapa yang Menang',
  pattern: 'layers',
  alt: 'Tumpukan kekuatan kaskade: aturan kita + !important di puncak sebagai penanda darurat, aturan kita di tengah dengan catatan kalau setara yang ditulis paling akhir menang, dan gaya bawaan browser sebagai lapisan paling bawah.',
  imgWidth: 1120,
  data: {
    layers: [
      { label: 'Aturan kita + !important', note: 'darurat, hindari jadi kebiasaan', tone: 'red' },
      { label: 'Aturan kita', note: 'kalau setara, yang ditulis paling akhir menang', tone: 'acc' },
      { label: 'Gaya bawaan browser', note: 'user-agent, paling lemah' },
    ],
  },
}
