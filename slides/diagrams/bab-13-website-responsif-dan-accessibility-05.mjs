// bab-13 · 05 — dua strategi menulis gaya, dibandingkan pada lima baris yang sama.
// Bentuk 2 lawan 2: tiap baris kanan menjawab baris kiri (gaya dasar, arah media
// query, sasaran, risiko, kompensasi). Aksen cuma di sisi mobile-first, karena itu
// yang dipilih untuk Tokosaya. Kalimat "keduanya sama-sama sah" tetap di slide.
export default {
  id: '05',
  slide: 'Mobile-First vs Desktop-First',
  pattern: 'beforeAfter',
  alt: 'Mobile-first menulis gaya dasar untuk layar kecil dengan min-width yang menaik, cocok buat website pelanggan umum, dan kompensasinya merancang ruang buat layar lebar; desktop-first menulis gaya dasar layar besar dengan max-width yang menurun, dan kompensasinya menguji layar kecil sejak awal.',
  data: {
    left: {
      title: 'MOBILE-FIRST',
      tone: 'acc',
      items: [
        'gaya dasar: layar kecil, satu kolom',
        'media query min-width, menaik',
        'cocok buat website pelanggan umum',
        'risiko: layar besar terasa kosong',
        'kompensasi: desain ruang buat layar lebar',
      ],
    },
    right: {
      title: 'DESKTOP-FIRST',
      tone: 'neutral',
      items: [
        'gaya dasar: layar besar, multi kolom',
        'media query max-width, menurun',
        'cocok buat dashboard staf, data padat',
        'risiko: HP jadi tambalan',
        'kompensasi: uji 320–576 px sejak awal',
      ],
    },
  },
}
