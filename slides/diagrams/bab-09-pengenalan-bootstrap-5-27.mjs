// bab-09 · 27 (slide ke-27) — tiga baris denah di container 1140 px dengan gutter
// 24 px: col-12 penuh, dua col-md-6, lalu empat col-lg-3 yang menghabiskan 12 kolom.
export default {
  id: '27',
  slide: 'Contoh: Kelas Kolom yang Wajib Diasah',
  pattern: 'mockup',
  alt: 'Denah 12 kolom: baris col-12 penuh, baris dua col-md-6, dan baris empat col-lg-3, dengan gutter 24 piksel di antara kolom.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 24,
    container: 1140,
    rows: [
      [{ label: 'col-12', span: 12 }],
      [
        { label: 'col-md-6', span: 6 },
        { label: 'col-md-6', span: 6 },
      ],
      [
        { label: 'col-lg-3', span: 3 },
        { label: 'col-lg-3', span: 3 },
        { label: 'col-lg-3', span: 3 },
        { label: 'col-lg-3', span: 3 },
      ],
    ],
    footer: 'gutter 24 px',
  },
}
