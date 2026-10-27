// bab-12 · 11 — dua label tombol yang isinya persis dari slide Usability:
// "Klik di sini" memaksa pengguna mencari konteks, "Lihat Katalog" langsung
// menyampaikan tujuan. Sumbunya sama (satu label tombol), jadi beforeAfter.
export default {
  id: '11',
  slide: 'Contoh: Usability',
  pattern: 'beforeAfter',
  alt: 'Dua panel label tombol: Klik di sini memaksa pengguna mencari konteks dan berpikir keras sebelum mengklik, sedangkan Lihat Katalog langsung menyampaikan tujuan sebelum diklik.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'KLIK DI SINI',
      tone: 'red',
      items: [
        'memaksa pengguna mencari konteks',
        'tujuan tombol tidak terbaca',
        'berpikir keras sebelum mengklik',
      ],
    },
    right: {
      title: 'LIHAT KATALOG',
      tone: 'acc',
      items: [
        'langsung menyampaikan tujuan',
        'tujuan sudah terbaca sebelum diklik',
        'tidak perlu berpikir keras',
      ],
    },
  },
}
