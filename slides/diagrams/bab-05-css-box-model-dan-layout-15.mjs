// bab-05 · 15 — kartu statistik SIAKAD setelah padding dirapikan ke skala 8.
// padding 40 px bikin kartu terlalu tinggi; 24 px masih langkah skala 8.
// Tinggi content 64 px itu dua baris teks statistik: 24 px label + 8 px jarak +
// 32 px angka. Semua angka bisa dijumlah sendiri di panel kanan:
// lebar 240 + 24 + 24 + 4 + 4 = 296, tinggi 64 + 24 + 24 + 4 + 4 = 120.
// border sengaja 4 px, bukan 1 px: pita 1 px hilang di skala gambar.
export default {
  id: '15',
  slide: 'Contoh: Studi Kasus: Dashboard SIAKAD',
  pattern: 'mockup',
  alt: 'Kartu statistik SIAKAD: content 240 x 64 piksel, padding 24 piksel, border 4 piksel, sehingga lebar total 296 piksel; padding 24 itu dari skala 8.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 240, h: 64, label: 'kartu statistik' },
    padding: [24, 24, 24, 24],
    border: [4, 4, 4, 4],
    margin: [0, 0, 0, 0],
    footer: 'dari skala 8',
  },
}
