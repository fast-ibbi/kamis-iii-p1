// bab-06 · 21 — akibat penekukan, berurutan: baris penuh, baris kedua lahir,
// lalu arti `align-items` berpindah ke antar-baris.
// Aritmetika penekukannya (4 × 250 + 3 × 24 = 1072 px, kartu kelima 1346 px)
// tinggal di prosa; gambar ini soal urutan akibat, bukan lebar.
export default {
  id: '21',
  slide: 'Contoh: Efek Samping Penekukan',
  pattern: 'flow',
  alt: 'Tiga kotak berurutan dengan dua panah berlabel: sisa ruang baris habis, panah flex-wrap, wadah punya dua baris, panah row-gap, lalu align-items urus antar-baris.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'sisa ruang baris habis' },
      { label: 'wadah punya dua baris' },
      { label: 'align-items urus antar-baris' },
    ],
    edges: ['flex-wrap', 'row-gap'],
  },
}
