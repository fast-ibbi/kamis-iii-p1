// bab-05 · 39 — empat langkah memeriksa kotak di DevTools.
// Rantai, bukan daftar: tiap langkah cuma berguna kalau langkah sebelumnya sudah
// dijalankan, dan langkah terakhir yang menutup putarannya adalah pembuktian angka.
// Labelnya sengaja pendek supaya muat di chip; penjelasannya tinggal di catatan.
export default {
  id: '39',
  slide: 'Cara Memeriksa Kotak di DevTools',
  pattern: 'flow',
  imgWidth: 1160,
  alt: 'Empat langkah memeriksa kotak: inspeksi elemen lewat klik kanan, baca diagram kotak di panel Computed, uji box-sizing dengan mematikannya, lalu hitung ulang content ditambah padding dan border.',
  data: {
    steps: [
      { label: 'Inspeksi', note: 'klik kanan elemen' },
      { label: 'Computed', note: 'baca diagram kotak' },
      { label: 'Uji box-sizing', note: 'matikan sebentar' },
      { label: 'Hitung ulang', note: 'cocokkan angkanya', tone: 'acc' },
    ],
    edges: ['lalu', 'lalu', 'lalu'],
  },
}
