// bab-04 · 15 — ukuran yang ditebak vs ukuran yang diambil dari skala.
// Dua baris per sisi, jadi tidak ada footer: fakta penutupnya tinggal di catatan.
export default {
  id: '15',
  slide: 'Ukuran yang Berubah Tanpa Aturan',
  pattern: 'beforeAfter',
  alt: 'Tanpa skala, judul ditulis 19, 21, dan 23 piksel sehingga pembaca tidak menemukan pintu masuk halaman; dengan skala, keputusan ukuran pindah dari rasa ke sistem dan tiap judul punya level yang bisa disebut.',
  data: {
    left: {
      title: 'TANPA SKALA',
      tone: 'red',
      items: [
        '19px di sini, 21px di sana, 23px di tempat lain',
        'pembaca tidak menemukan pintu masuk halamannya',
      ],
    },
    right: {
      title: 'DENGAN SKALA',
      tone: 'acc',
      items: [
        'keputusan ukuran pindah dari rasa ke sistem',
        'ini level 3, jadi 1.25rem',
      ],
    },
  },
}
