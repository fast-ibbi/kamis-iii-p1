// bab-07 · 25 — urutan kerja praktikum sebagai rantai, bukan daftar.
// Enam butir aslinya diringkas jadi lima tahap; fakta yang tidak masuk gambar
// (meta viewport, tabel pesanan) tetap tinggal di catatan penyaji.
export default {
  id: '25',
  slide: 'Langkah Kerja Praktikum',
  pattern: 'flow',
  alt: 'Lima tahap praktikum berurutan: tulis admin.html, tulis meta viewport, susun struktur semantik, susun admin.css mobile-first, lalu uji di device toolbar pada 375 sampai 1200 piksel.',
  data: {
    steps: [
      { label: 'admin.html', note: 'DOCTYPE, meta charset' },
      { label: 'meta viewport', note: 'tanpa itu semua media query gagal' },
      { label: 'struktur semantik', note: '.dasbor, header, nav, main, footer' },
      { label: 'admin.css', note: 'mobile-first, semua area bertumpuk' },
      { label: 'device toolbar', note: '375 sampai 1200 piksel' },
    ],
    edges: ['tulis', 'susun', 'susun', 'uji'],
  },
}
