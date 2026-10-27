// bab-14 · 18 — frame 1440 px dipotong margin 150 px di dua sisi, sisanya
// kontainer 1140 px yang dipecah jadi dua belas track. Ruler dan garis kolom
// yang membuat angka (1140 − 11 × 24) ÷ 12 = 73 bisa diperiksa di gambar,
// bukan cuma di kalimat.
export default {
  id: '18',
  slide: 'Contoh: Hitung Grid dan Kelas Bootstrap',
  pattern: 'mockup',
  alt: 'Denah dua belas kolom di atas kontainer 1140 px dengan gutter 24 px: ruler bernomor 1 sampai 12, satu baris .col-12 penuh, lalu dua sel col-6 masing-masing setengah lebar.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 24,
    container: 1140,
    rows: [
      [{ label: '.col-12', span: 12 }],
      [{ label: 'col-6', span: 6 }, { label: 'col-6', span: 6 }],
    ],
    footer: 'kontainer 1140 px',
  },
}
