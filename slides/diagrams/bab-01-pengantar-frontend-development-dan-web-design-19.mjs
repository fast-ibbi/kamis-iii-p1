// bab-01 · 19 — tiga topi dipakai berurutan dalam satu kepala.
// Panahnya yang penting: catatan kebutuhan menyeberang jadi rancangan, rancangan
// jadi halaman. Kalau panah pertama bolong, tahap ketiga tidak punya bahan.
export default {
  id: '19',
  slide: 'Contoh: Tiga Topi di Tim Kecil',
  pattern: 'flow',
  alt: 'Tiga peran berurutan: Analis mencatat kebutuhan, catatan itu jadi rancangan bagi Perancang yang menata pilihan visual, lalu rancangan jadi halaman yang ditulis Implementer dengan HTML dan CSS.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'Analis', note: 'mencatat kebutuhan' },
      { label: 'Perancang', note: 'menata pilihan visual' },
      { label: 'Implementer', note: 'menulis HTML dan CSS' },
    ],
    edges: ['jadi rancangan', 'jadi halaman'],
  },
}
