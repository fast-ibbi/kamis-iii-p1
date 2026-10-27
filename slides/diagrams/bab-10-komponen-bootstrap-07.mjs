// bab-10 · 07 — dua lapisan komponen: yang dipakai bab ini lawan yang ditinggal.
// Sisi kiri diberi aksen karena itulah yang seluruh bab pakai; sisi kanan sengaja
// netral supaya cuma ada satu elemen beraksen di gambar.
export default {
  id: '07',
  slide: 'Batas Tanpa JavaScript',
  pattern: 'beforeAfter',
  alt: 'Tanpa JavaScript lapisan visual komponen tetap jalan penuh dengan status statis manual dan komponen interaktif yang berhenti seperti storyboard; dengan JavaScript perilaku interaktif datang dari paket resmi Bootstrap.',
  data: {
    left: {
      title: 'TANPA JAVASCRIPT',
      tone: 'acc',
      items: [
        'lapisan visual komponen tetap jalan penuh',
        'status statis ditulis manual: show, collapsed, active, disabled',
        'komponen interaktif jadi versi mati, kayak storyboard',
      ],
    },
    right: {
      title: 'DENGAN JAVASCRIPT',
      tone: 'neutral',
      items: [
        'perilaku interaktif datang dari paket JavaScript resmi Bootstrap',
        'tombol hamburger benar-benar membuka menu',
      ],
    },
  },
}
