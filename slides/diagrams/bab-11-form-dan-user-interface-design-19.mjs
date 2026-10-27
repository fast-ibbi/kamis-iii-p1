// bab-11 · 19 — tinggi textarea dihitung dari rows, bukan angka ajaib.
// Bootstrap form-control: satu baris teks 24 px, padding 6 12 6 12 px, border 1 px.
// Content 320 x 120 px = lima baris kali 24 px; lebar total 346 px.
export default {
  id: '19',
  slide: 'Contoh: textarea dan select',
  pattern: 'mockup',
  alt: 'Kotak textarea: area tulis 320 kali 120 piksel, dibungkus padding 6 12 6 12 piksel dan border 1 piksel, sehingga lebar totalnya 346 piksel dan tingginya 134 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 320, h: 120, label: 'area tulis' },
    padding: [6, 12, 6, 12],
    border: [1, 1, 1, 1],
    margin: [0, 0, 0, 0],
    footer: 'rows 5 → 5 × 24 px',
  },
}
