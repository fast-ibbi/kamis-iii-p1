// bab-15 · 17 — navbar Tokosaya tanpa satu aturan kustom: brand 160 px plus
// empat menu 120 px, gap 16 px, sisa 416 px dibagi rata oleh space-between.
export default {
  id: '17',
  slide: 'Contoh: Utilitas Dulu, Kustom Seperlunya',
  pattern: 'mockup',
  alt: 'Navbar dalam kontainer 1120 piksel dengan justify-content space-between: brand 160 piksel dan empat menu 120 piksel, gap 16 piksel, sisa 416 piksel terbagi rata menjadi 104 piksel di antara lima item.',
  imgWidth: 1120,
  data: {
    kind: 'flex',
    justify: 'space-between',
    container: 1120,
    gap: 16,
    items: [
      { label: 'brand', basis: 160 },
      { label: 'index', basis: 120 },
      { label: 'katalog', basis: 120 },
      { label: 'produk', basis: 120 },
      { label: 'kontak', basis: 120 },
    ],
  },
}
