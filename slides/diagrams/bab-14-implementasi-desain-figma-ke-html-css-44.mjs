// bab-14 · 44 — urutan kerja praktikum sebagai rantai lima langkah, sama dengan
// lima butir di slide "Langkah Kerja Praktikum". Dua hal yang gampang hilang
// ditaruh sebagai catatan: aturan dasar halaman di langkah token, dan uji lebar
// di langkah checklist. Langkah terakhir jadi aksen karena di situ kesetiaan
// diperiksa.
export default {
  id: '44',
  slide: 'Contoh: Langkah Kerja Praktikum',
  pattern: 'flow',
  alt: 'Lima langkah berurutan: spesifikasi, kerangka HTML, token di blok :root dengan aturan dasar halaman, kelas per komponen, lalu checklist setelah uji 1440, 768, 375 piksel.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'Spesifikasi', tone: 'neutral' },
      { label: 'Kerangka', tone: 'neutral' },
      { label: 'Token', note: 'aturan dasar halaman', tone: 'neutral' },
      { label: 'Kelas', tone: 'neutral' },
      { label: 'Checklist', note: 'uji 1440, 768, 375', tone: 'acc' },
    ],
    edges: ['lalu susun', 'token dulu', 'sesuai angka', 'terakhir'],
  },
}
