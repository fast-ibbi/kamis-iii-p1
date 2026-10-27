// bab-13 · 05 — dua strategi menulis gaya, dibandingkan pada empat baris yang sama.
// Bentuk 2 lawan 2: tiap baris kanan menjawab baris kiri (gaya dasar, arah media
// query, sasaran, lalu risiko beserta kompensasinya dalam satu baris — risiko
// tanpa pasangannya cuma keluhan). Empat baris, bukan lima: slide ini cuma punya
// beberapa px sisa di bawah, dan baris kelima bikin gambarnya menabrak footer.
// Aksen cuma di sisi mobile-first, karena itu yang dipilih untuk Tokosaya.
export default {
  id: '05',
  slide: 'Mobile-First vs Desktop-First',
  pattern: 'beforeAfter',
  alt: 'Mobile-first: gaya dasar layar kecil, satu kolom; media query min-width, menaik; cocok buat website pelanggan umum; risiko: layar besar terasa kosong — kompensasi: desain ruang buat layar lebar. Desktop-first: gaya dasar layar besar, multi kolom; media query max-width, menurun; cocok buat dashboard staf, data padat; risiko: HP jadi tambalan — kompensasi: uji 320–576 px sejak awal.',
  data: {
    left: {
      title: 'MOBILE-FIRST',
      tone: 'acc',
      items: [
        'gaya dasar: layar kecil, satu kolom',
        'media query min-width, menaik',
        'cocok buat website pelanggan umum',
        'risiko: layar besar terasa kosong — kompensasi: desain ruang buat layar lebar',
      ],
    },
    right: {
      title: 'DESKTOP-FIRST',
      tone: 'neutral',
      items: [
        'gaya dasar: layar besar, multi kolom',
        'media query max-width, menurun',
        'cocok buat dashboard staf, data padat',
        'risiko: HP jadi tambalan — kompensasi: uji 320–576 px sejak awal',
      ],
    },
  },
}
