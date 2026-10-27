// bab-11 · 42 — status kesalahan: warna saja vs warna plus kalimat.
// Baris kiri dan kanan sama-sama tiga, jadi bisa dibaca berpasangan.
export default {
  id: '42',
  slide: 'Contoh: Tiga Praktik Aksesibilitas Form',
  pattern: 'beforeAfter',
  alt: 'Kiri: bingkai merah saja, informasi cuma lewat warna, sehingga pengguna buta warna nggak terbantu apa-apa. Kanan: warna dan pesan tertulis, pesan kesalahan tertulis di bawah medan dan dibacakan pembaca layar.',
  data: {
    left: {
      title: 'BINGKAI MERAH SAJA',
      tone: 'red',
      items: [
        'bingkai merah saja',
        'informasi cuma lewat warna',
        'pengguna buta warna nggak terbantu apa-apa',
      ],
    },
    right: {
      title: 'WARNA DAN PESAN TERTULIS',
      tone: 'acc',
      items: [
        'pesan kesalahan tertulis di bawah medan',
        'pesan menyebut cara memperbaikinya',
        'pembaca layar membacakan pesan itu',
      ],
    },
  },
}
