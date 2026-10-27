// bab-06 · 04 — dua alat, dua pertanyaan yang dijawabnya.
// Bentuk 2 lawan 2: baris kiri dan kanan menjawab pertanyaan yang sama. Riwayat
// `float` dan margin negatif tidak digambar — fakta itu tinggal di catatan penyaji.
export default {
  id: '04',
  slide: 'Kenapa Box Model Belum Cukup',
  pattern: 'beforeAfter',
  alt: 'Box model mengatur kotak satu per satu dan menjawab ukuran serta jarak satu kotak; flexbox membagi ruang antarkotak dan menjawab sisa ruang yang dibagi.',
  data: {
    left: {
      title: 'BOX MODEL',
      tone: 'neutral',
      items: ['mengatur kotak satu per satu', 'menjawab ukuran dan jarak satu kotak'],
    },
    right: {
      title: 'FLEXBOX',
      tone: 'acc',
      items: ['membagi ruang antarkotak', 'menjawab sisa ruang yang dibagi'],
    },
  },
}
