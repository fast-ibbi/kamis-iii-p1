// bab-14 · 12 — hirarki frame dan layer di Figma sebagai pohon tiga tingkat.
// Yang dibedah cuma satu cabang, karena itulah cara membacanya: masuk dari frame
// terluar, lalu turun ke anak-anaknya satu per satu.
export default {
  id: '12',
  slide: 'Contoh: Frame dan Layer di Figma',
  pattern: 'tree',
  alt: 'Frame 1440 px bercabang tiga: header, section produk-detail yang berisi layer gambar dan panel harga, lalu footer.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'Frame 1440 px',
      children: [
        { label: 'header' },
        { label: 'section produk-detail', children: [{ label: 'gambar' }, { label: 'panel harga' }] },
        { label: 'footer' },
      ],
    },
  },
}
