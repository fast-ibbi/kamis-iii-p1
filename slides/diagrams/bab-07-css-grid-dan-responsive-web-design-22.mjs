// bab-07 · 22 — dua pola, dan dua jalan di dalam pola galeri.
// `tree` membuang `note`, jadi kerangka tiap pola ditempel ke label simpulnya.
export default {
  id: '22',
  slide: 'Dua Pola Layout Responsif',
  pattern: 'tree',
  alt: 'Pola layout responsif bercabang dua: dashboard admin memakai grid-template-areas, denah digambar ulang di 768 px, berisi header, sidebar navigasi, dan konten; galeri produk punya jalan a jumlah kolom per breakpoint dan jalan b auto-fit dan minmax().',
  data: {
    root: {
      label: 'pola layout responsif',
      children: [
        {
          label: 'dashboard admin',
          children: [
            { label: 'grid-template-areas' },
            { label: 'denah digambar ulang di 768 px' },
            { label: 'header, sidebar navigasi, dan konten' },
          ],
        },
        {
          label: 'galeri produk',
          children: [
            { label: 'jalan a: jumlah kolom per breakpoint' },
            { label: 'jalan b: auto-fit dan minmax()' },
          ],
        },
      ],
    },
  },
}
