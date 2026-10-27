// bab-11 · 21 — dua kontrol, dua aturan: checkbox boleh banyak, radio cuma satu.
// Kedua sisi tiga baris supaya baris pertama bisa dibandingkan langsung.
export default {
  id: '21',
  slide: 'Contoh: checkbox dan radio',
  pattern: 'beforeAfter',
  alt: 'Kiri: checkbox boleh dipilih lebih dari satu sekaligus, tiap kotak berdiri sendiri, cocok buat persetujuan dan langganan. Kanan: radio cuma satu pilihan per kelompok, satu kelompok wajib name yang sama, sehingga pilihannya saling meniadakan.',
  data: {
    left: {
      title: 'CHECKBOX',
      tone: 'acc',
      items: [
        'boleh dipilih lebih dari satu sekaligus',
        'tiap kotak berdiri sendiri',
        'cocok buat persetujuan dan langganan',
      ],
    },
    right: {
      title: 'RADIO',
      tone: 'neutral',
      items: [
        'memilih satu otomatis membatalkan yang lain',
        'satu kelompok wajib name yang sama',
        'dari name itu pilihannya saling meniadakan',
      ],
    },
  },
}
