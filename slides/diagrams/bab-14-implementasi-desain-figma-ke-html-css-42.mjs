// bab-14 · 42 — anatomi frame produk.html di atas grid dua belas kolom:
// page head penuh, panel detail 7 + 5, lalu tiga kartu 4 + 4 + 4.
// Nama kelas sengaja ditulis apa adanya supaya bisa dicocokkan ke Bootstrap.
export default {
  id: '42',
  slide: 'Contoh: Praktik: Membangun `produk.html`',
  pattern: 'mockup',
  alt: 'Denah 12 kolom halaman produk.html: baris col-12 penuh, baris col-lg-7 dan col-lg-5, lalu tiga kartu col-md-4 dengan gutter 24 px.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 24,
    container: 1140,
    rows: [
      [{ label: '.col-12', span: 12 }],
      [{ label: '.col-lg-7', span: 7 }, { label: '.col-lg-5', span: 5 }],
      [{ label: '.col-md-4', span: 4 }, { label: '.col-md-4', span: 4 }, { label: '.col-md-4', span: 4 }],
    ],
    footer: 'gutter 24 px',
  },
}
