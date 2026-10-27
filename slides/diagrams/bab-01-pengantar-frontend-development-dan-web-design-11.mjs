// bab-01 · 11 — lima tahap pengembangan sistem informasi sebagai satu rantai.
// Urutannya yang jadi isi: tiap panah adalah kata kerja perpindahan tahap.
export default {
  id: '11',
  slide: 'Alur Pengembangan Sistem Informasi',
  pattern: 'flow',
  alt: 'Lima tahap berurutan: kebutuhan bisnis dijabarkan lewat analisis, analisis dirancang jadi desain, desain dibangun di implementasi, implementasi diuji lalu dipelihara.',
  data: {
    steps: [
      { label: 'Kebutuhan bisnis', note: 'bisa dilihat dan dihubungi' },
      { label: 'Analisis', note: 'siapa pengunjungnya' },
      { label: 'Desain', note: 'layout halaman, warna, hierarki tombol' },
      { label: 'Implementasi', note: 'frontend mewujudkan rancangan' },
      { label: 'Pengujian', note: 'memeriksa keduanya', tone: 'acc' },
    ],
    edges: ['dijabarkan', 'dirancang', 'dibangun', 'diuji'],
  },
}
