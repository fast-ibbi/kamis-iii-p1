// bab-12 · 35 — panjang baris digambar sebagai span di grid 12 kolom: paragraf
// dibatasi span 6, baris selebar halaman span 12. Span 8 yang lama salah:
// 8 x 71 + 7 x 24 = 739 piksel, terlalu lebar untuk 60 sampai 75 karakter.
// Span 6 memberi 6 x 71 + 5 x 24 = 546 piksel, yang memang memuat 60 sampai 75
// karakter pada teks 16 piksel, jadi label dan gambarnya sekarang cocok.
export default {
  id: '35',
  slide: 'Contoh: Disiplin Tipografi',
  pattern: 'mockup',
  alt: 'Grid 12 kolom membandingkan dua panjang baris: paragraf yang dibatasi 6 kolom atau 546 piksel untuk menjaga 60 sampai 75 karakter, dan baris selebar halaman 12 kolom yang terlalu panjang.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 24,
    container: 1120,
    rows: [
      [{ label: '60 sampai 75 karakter', span: 6 }],
      [{ label: 'selebar halaman', span: 12 }],
    ],
  },
}
