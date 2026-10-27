// bab-11 · 14 — dua tombol setara vs satu aksi utama, baris per baris.
// Kedua sisi sengaja tiga baris supaya baris kiri dan kanan bisa dibaca berpasangan.
export default {
  id: '14',
  slide: 'Contoh: Prinsip Tombol Aksi yang Jelas',
  pattern: 'beforeAfter',
  alt: 'Kiri: dua tombol setara dengan label OK memaksa pengguna menebak dan berpikir dua kali. Kanan: satu tombol utama per halaman dengan label Kirim Pesan yang menyatakan akibatnya, dan tombol pendamping diberi type button.',
  data: {
    left: {
      title: 'DUA TOMBOL SETARA',
      tone: 'red',
      items: [
        'label "OK" memaksa pengguna menebak',
        'dua tombol bergaya sama',
        'pengguna berpikir dua kali',
      ],
    },
    right: {
      title: 'SATU TOMBOL UTAMA',
      tone: 'acc',
      items: [
        '"Kirim Pesan" menyatakan akibatnya',
        'satu tombol utama per halaman',
        'tombol pendamping diberi type button',
      ],
    },
  },
}
