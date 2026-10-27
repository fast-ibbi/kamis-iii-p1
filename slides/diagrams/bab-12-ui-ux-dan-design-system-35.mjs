// bab-12 · 35 — panjang baris digambar sebagai span di grid 12 kolom: paragraf
// dibatasi span 8, baris selebar halaman span 12. Aturan aslinya di slide ini
// adalah 60 sampai 75 karakter; span 8 di sini cuma cara menggambar batas itu,
// dan catatan penyaji menyebutnya supaya angka 8 tidak dikira keramat.
export default {
  id: '35',
  slide: 'Contoh: Disiplin Tipografi',
  pattern: 'mockup',
  alt: 'Grid 12 kolom membandingkan dua panjang baris: paragraf yang dibatasi 8 kolom untuk menjaga 60 sampai 75 karakter, dan baris selebar halaman 12 kolom yang terlalu panjang.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 24,
    container: 1120,
    rows: [
      [{ label: '60 sampai 75 karakter', span: 8 }],
      [{ label: 'selebar halaman', span: 12 }],
    ],
  },
}
