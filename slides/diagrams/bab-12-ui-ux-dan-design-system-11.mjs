// bab-12 · 11 — dua label tombol yang isinya persis dari slide Usability:
// "Klik di sini" memaksa pengguna mencari konteks, "Lihat Katalog" langsung
// menyampaikan tujuan. Sumbunya sama (satu label tombol), jadi beforeAfter.
// Baris kiri dan baris kanan sekarang menjawab tiga pertanyaan yang sama —
// apa yang dibuka, apakah konteks harus dicari, apakah tujuan terbaca — karena
// versi lama mengulang pertanyaan kedua dua kali (temuan review).
export default {
  id: '11',
  slide: 'Contoh: Usability',
  pattern: 'beforeAfter',
  alt: 'Dua panel label tombol, tiga baris berpasangan: label Klik di sini tidak menyebut apa yang dibuka, pengguna harus mencari konteks di sekitarnya, dan tujuan tombol tidak terbaca sebelum diklik; label Lihat Katalog menyebut apa yang dibuka, konteks tidak perlu dicari, dan tujuan terbaca sebelum diklik.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'KLIK DI SINI',
      tone: 'red',
      items: [
        'tidak menyebut apa yang dibuka',
        'pengguna harus mencari konteks di sekitarnya',
        'tujuan tombol tidak terbaca sebelum diklik',
      ],
    },
    right: {
      title: 'LIHAT KATALOG',
      tone: 'acc',
      items: [
        'menyebut apa yang dibuka',
        'konteks tidak perlu dicari',
        'tujuan terbaca sebelum diklik',
      ],
    },
  },
}
