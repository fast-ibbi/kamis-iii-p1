// bab-05 · 09 — dari width 280 px ke 304 px di layar.
// Slide ini tetap memuat blok kode; diagram hanya menempati sisa ruang di bawahnya.
export default {
  id: '09',
  slide: 'Angka width Cuma Sepotong Kotak',
  pattern: 'flow',
  alt: 'Lebar 280 piksel hanya area konten; padding 16 piksel kiri-kanan dan border 4 piksel kiri-kanan ditambahkan di luarnya, sehingga lebarnya 304 piksel.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: '280 px', note: 'area konten' },
      { label: '+ padding', note: 'kiri 16 px, kanan 16 px' },
      { label: '+ border', note: 'kiri 4 px, kanan 4 px' },
      { label: '304 px', note: 'lebar di layar', tone: 'acc' },
    ],
    edges: ['+', '+', '='],
  },
}
