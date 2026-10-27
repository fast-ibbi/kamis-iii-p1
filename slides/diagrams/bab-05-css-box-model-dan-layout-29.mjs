// bab-05 · 29 (slide ke-28) — dua resep untuk teks panjang, berdampingan.
// Baris 1 menjawab baris 1: apa yang terjadi pada katanya. Baris 2: apa yang
// terjadi pada kotaknya. Baris 3: dukungan browsernya. Contohnya satu nama
// 60 huruf di kartu WC-720 (kartu 280 px, padding badan 16 px, border 1 px,
// jadi content 280 − 16 − 16 − 1 − 1 = 246 px).
// id 29 dipakai karena id 28 sudah terpakai spec "Skala Jarak Delapan Piksel".
export default {
  id: '29',
  slide: 'Contoh: Teks Panjang: Dua Resep Lain',
  pattern: 'beforeAfter',
  alt: 'Dua resep berdampingan untuk nama 60 huruf yang sama. Resep 1 break-word: kata 60 huruf dipatahkan di tengah, kotak tetap 280 px, tanpa prefiks vendor. Resep 2 line-clamp: nama berhenti di dua baris, sisanya diganti tanda elipsis, masih butuh prefiks webkit.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'RESEP 1 · break-word',
      tone: 'acc',
      items: [
        'kata 60 huruf dipatahkan di tengah',
        'kotak tetap 280 px, teks turun baris',
        'tanpa prefiks vendor',
      ],
    },
    right: {
      title: 'RESEP 2 · line-clamp',
      tone: 'neutral',
      items: [
        'nama berhenti di dua baris',
        'sisanya diganti tanda elipsis',
        'masih butuh prefiks webkit',
      ],
    },
  },
}
