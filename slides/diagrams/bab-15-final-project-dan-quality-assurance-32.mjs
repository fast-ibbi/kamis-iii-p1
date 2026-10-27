// bab-15 · 32 — katalog: delapan produk baku di grid 12 kolom, empat kartu
// selebar 3 kolom per baris, dengan harga satu format.
export default {
  id: '32',
  slide: 'Contoh: Checklist Rilis 1/3 — Isi, Brand, dan Meta',
  pattern: 'mockup',
  alt: 'Katalog dalam grid 12 kolom bergutter 24 piksel: dua baris berisi empat kartu produk selebar 3 kolom, dua di antaranya KX-210 dan WC-720, dengan harga Rp650.000.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 24,
    container: 1120,
    rows: [
      [
        { label: 'KX-210', span: 3 },
        { label: 'WC-720', span: 3 },
        { label: 'produk', span: 3 },
        { label: 'produk', span: 3 },
      ],
      [
        { label: 'produk', span: 3 },
        { label: 'produk', span: 3 },
        { label: 'produk', span: 3 },
        { label: 'produk', span: 3 },
      ],
    ],
    footer: 'Rp650.000',
  },
}
