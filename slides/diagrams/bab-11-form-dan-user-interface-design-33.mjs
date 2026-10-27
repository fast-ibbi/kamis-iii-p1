// bab-11 · 33 — input-group: lampiran menempel di ujung medan, tanpa celah.
// Medan kupon 360 px + tombol Pakai 56 px = 416 px, gap 0, jadi sisa 0 px.
// Dulu digambar sebagai dua rect bersudut bulat yang beradu, sehingga sambungannya
// justru terlihat bercelah. Sekarang yang dibandingkan adalah dua perlakuan.
export default {
  id: '33',
  slide: 'Contoh: input-group: Medan dengan Lampiran',
  pattern: 'beforeAfter',
  alt: 'Kiri tanpa input-group: medan kupon dan tombol Pakai berdiri sendiri, jarak tiap elemen diatur terpisah, batas baris isian jadi kabur. Kanan dengan input-group: medan kupon 360 piksel menempel tombol Pakai 56 piksel, gap 0 jadi nggak ada celah, lebar baris 416 piksel dan sisa 0 piksel.',
  data: {
    left: {
      title: 'TANPA INPUT-GROUP',
      tone: 'red',
      items: [
        'medan kupon dan tombol Pakai berdiri sendiri',
        'jarak tiap elemen diatur terpisah',
        'batas baris isian jadi kabur',
      ],
    },
    right: {
      title: 'INPUT-GROUP',
      tone: 'acc',
      items: [
        'medan kupon 360 px menempel tombol Pakai 56 px',
        'gap 0, jadi nggak ada celah',
        'lebar baris 416 px, sisa 0 px',
      ],
    },
  },
}
