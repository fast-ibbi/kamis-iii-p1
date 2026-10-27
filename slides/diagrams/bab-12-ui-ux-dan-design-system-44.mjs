// bab-12 · 44 — styleguide sebagai satu halaman: isinya (swatch warna, sampel
// tipografi, skala jarak, catatan do and don't, varian tombol) diletakkan di
// grid 12 kolom yang sama dengan halaman lain, jadi halaman dokumentasi pun
// tunduk pada sistem yang didokumentasikannya.
export default {
  id: '44',
  slide: 'Contoh: Styleguide: Satu Halaman, Semua Token',
  pattern: 'mockup',
  alt: 'Halaman styleguide.html di grid 12 kolom: h1 selebar 12 kolom, swatch warna span 4 dengan sampel tipografi span 8, skala jarak span 6 dengan catatan do and don\'t span 6, dan varian tombol selebar 12 kolom.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 24,
    container: 1120,
    rows: [
      [{ label: 'h1', span: 12 }],
      [
        { label: 'swatch warna', span: 4 },
        { label: 'sampel tipografi', span: 8 },
      ],
      [
        { label: 'skala jarak', span: 6 },
        { label: "do and don't", span: 6 },
      ],
      [{ label: 'varian tombol', span: 12 }],
    ],
  },
}
