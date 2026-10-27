// bab-03 · 24 — empat langkah memutuskan pemenang saat aturan bertabrakan.
// Menggantikan blok ```text berisi empat langkah bernomor yang isinya sama.
export default {
  id: '24',
  slide: 'Alur Keputusan Kaskade',
  pattern: 'flow',
  alt: 'Empat langkah kaskade: kumpulkan semua aturan yang menyasar elemen, saring berdasar asal, urutkan dengan specificity, lalu bila semuanya setara aturan yang ditulis paling akhir menang.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'Kumpulkan', note: 'semua aturan yang menyasar elemen' },
      { label: 'Saring asal', note: 'user-agent di bawah aturan kita' },
      { label: 'Specificity', note: 'inline, id, class, elemen' },
      { label: 'Urutan tulis', note: 'yang terakhir menang' },
    ],
    edges: ['berdasar asal', 'dengan specificity', 'kalau setara'],
  },
}
