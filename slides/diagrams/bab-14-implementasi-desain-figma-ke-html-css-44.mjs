// bab-14 · 44 — urutan kerja praktikum sebagai rantai lima langkah.
// Langkah terakhir jadi aksen karena di situlah kesetiaan diperiksa.
export default {
  id: '44',
  slide: 'Contoh: Langkah Kerja Praktikum',
  pattern: 'flow',
  alt: 'Lima langkah berurutan: spesifikasi, kerangka HTML, token di blok :root, kelas per komponen, lalu uji lebar 1440, 768, dan 375 piksel.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'Spesifikasi', tone: 'neutral' },
      { label: 'Kerangka', tone: 'neutral' },
      { label: 'Token', tone: 'neutral' },
      { label: 'Kelas', tone: 'neutral' },
      { label: 'Uji lebar', tone: 'acc' },
    ],
    edges: ['lalu susun', 'token dulu', 'sesuai angka', 'terakhir'],
  },
}
