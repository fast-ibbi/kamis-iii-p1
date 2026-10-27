// bab-15 · 24 — lima titik pemindaian dipetakan ke satu halaman: navigasi, hero,
// tiga kartu produk, lalu form, dan footer sebagai titik kelima.
export default {
  id: '24',
  slide: 'Contoh: Pemindai Lima Titik',
  pattern: 'mockup',
  alt: 'Satu halaman dalam grid 12 kolom bergutter 24 piksel: baris navigasi penuh, baris hero penuh, tiga kartu produk selebar 4 kolom, dan baris form penuh, dengan catatan bahwa footer diperiksa terakhir.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 24,
    container: 1120,
    rows: [
      [{ label: 'navigasi', span: 12 }],
      [{ label: 'hero', span: 12 }],
      [
        { label: 'kartu produk', span: 4 },
        { label: 'kartu produk', span: 4 },
        { label: 'kartu produk', span: 4 },
      ],
      [{ label: 'form', span: 12 }],
    ],
    footer: 'footer diperiksa terakhir',
  },
}
