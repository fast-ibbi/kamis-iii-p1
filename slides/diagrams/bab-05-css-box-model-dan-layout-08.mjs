// bab-05 · 08 — margin vertikal runtuh vs padding yang bisa diprediksi.
// Aritmetika 16 + 24 tinggal di catatan penyaji (sudah ada di sana); gambar
// menahan aturannya, bukan hitungannya.
export default {
  id: '08',
  slide: 'Margin Vertikal Bisa Runtuh',
  pattern: 'beforeAfter',
  imgWidth: 1160,
  alt: 'Margin bawah dan margin atas bertetangga tidak dijumlahkan, yang dipakai nilai paling besar; padding tidak punya perilaku runtuh ini.',
  data: {
    left: {
      title: 'MARGIN',
      tone: 'red',
      items: [
        'margin bawah dan margin atas bertetangga tidak dijumlahkan',
        'yang dipakai adalah nilai yang paling besar',
      ],
    },
    right: {
      title: 'PADDING',
      tone: 'acc',
      items: [
        'tidak punya perilaku runtuh ini',
        'lebih aman distandarkan lewat padding kontainer',
      ],
    },
  },
}
