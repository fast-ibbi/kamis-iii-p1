// bab-14 · 04 — kiriman desain tanpa angka, dan empat angka yang sebenarnya
// dibutuhkan. Panel kanan sengaja memuat nilai yang muncul lagi di slide grid,
// token, dan radius, jadi gambar ini berfungsi sebagai janji bab.
export default {
  id: '04',
  slide: 'Contoh: Desain Udah Jadi, Tapi Hasilnya Meleset',
  pattern: 'beforeAfter',
  alt: 'Dua panel: yang dikirim cuma satu gambar rapi sehingga ukuran ditaksir mata, jarak cuma ditebak, dan judul diperkecil sendiri; yang dibutuhkan adalah frame 1440 px, judul 32 px, gutter 24 px, dan radius 12 px.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'YANG DIKIRIM',
      tone: 'red',
      items: [
        'satu gambar rapi',
        'ukuran ditaksir mata',
        'jarak cuma ditebak',
        'judul diperkecil sendiri',
      ],
    },
    right: {
      title: 'YANG DIBUTUHKAN',
      tone: 'acc',
      items: ['frame 1440 px', 'judul 32 px', 'gutter 24 px', 'radius 12 px'],
    },
  },
}
