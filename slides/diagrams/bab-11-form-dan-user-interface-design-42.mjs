// bab-11 · 42 — tiga praktik aksesibilitas, tiga baris berpasangan.
// Judulnya "tiga praktik", jadi gambarnya juga tiga: label yang terlihat,
// autocomplete yang menyebut tujuan medan, dan pesan kesalahan yang tertulis.
// Dulu panel kiri sudah "bingkai merah" lalu panel kanan "menambah warna" —
// mustahil, karena warna merahnya sudah ada di kiri.
export default {
  id: '42',
  slide: 'Contoh: Tiga Praktik Aksesibilitas Form',
  pattern: 'beforeAfter',
  alt: 'Kiri praktik dilanggar: label cuma diganti placeholder, tujuan medan nggak ditandai autocomplete, dan bingkai merah saja tanpa pesan tertulis. Kanan praktik dipenuhi: label terlihat terhubung for–id, autocomplete menyebut tujuan medan, dan pesan kesalahan tertulis di bawah medan.',
  data: {
    left: {
      title: 'PRAKTIK DILANGGAR',
      tone: 'red',
      items: [
        'label cuma diganti placeholder',
        'tujuan medan nggak ditandai autocomplete',
        'bingkai merah saja, tanpa pesan tertulis',
      ],
    },
    right: {
      title: 'PRAKTIK DIPENUHI',
      tone: 'acc',
      items: [
        'label terlihat terhubung for–id',
        'autocomplete menyebut tujuan medan',
        'pesan kesalahan tertulis di bawah medan',
      ],
    },
  },
}
