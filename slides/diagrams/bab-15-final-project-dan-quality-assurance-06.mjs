// bab-15 · 06 — empat halaman Tokosaya dibaca sebagai grid 4 kolom: satu kolom
// satu halaman, dan tiap halaman menyumbang bagian wajibnya sendiri.
export default {
  id: '06',
  slide: 'Contoh: Sembilan Bagian Wajib di Empat Halaman',
  pattern: 'mockup',
  alt: 'Empat kolom halaman Tokosaya: index dengan hero, katalog dengan delapan produk, produk dengan detail produk, dan kontak dengan form, dalam grid 4 kolom bergutter 24 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 4,
    gutter: 24,
    container: 1120,
    rows: [
      [
        { label: 'index', span: 1 },
        { label: 'katalog', span: 1 },
        { label: 'produk', span: 1 },
        { label: 'kontak', span: 1 },
      ],
      [
        { label: 'hero', span: 1 },
        { label: 'delapan produk', span: 1 },
        { label: 'detail produk', span: 1 },
        { label: 'form', span: 1 },
      ],
    ],
    footer: 'empat halaman saling tersambung',
  },
}
