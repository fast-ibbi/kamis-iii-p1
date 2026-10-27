// bab-15 · 21 — empat langkah membaca kaskade, bukan menebak.
// "Hipotesis tunggal, satu perubahan, lanjut verifikasi ulang" jadi label panah
// terakhir: itu syarat masuk ke langkah verifikasi, bukan langkah tersendiri.
export default {
  id: '21',
  slide: 'Debugging CSS di DevTools',
  pattern: 'flow',
  alt: 'Empat langkah debugging CSS: mulai dari pertanyaan kenapa elemen tampil begitu, reproduksi sampai syarat cacatnya ketemu, isolasi ke elemen terkecil yang gagal, lalu verifikasi ulang dengan satu hipotesis dan satu perubahan.',
  data: {
    steps: [
      { label: 'Pertanyaan', note: 'kenapa elemen tampil begitu' },
      { label: 'Reproduksi', note: 'ambil tangkapan layar' },
      { label: 'Isolasi', note: 'elemen terkecil yang gagal' },
      { label: 'Verifikasi ulang', note: 'lihat lagi di halaman itu', tone: 'acc' },
    ],
    edges: ['temukan syarat cacat', 'pilih elemen terkecil', 'satu perubahan'],
  },
}
