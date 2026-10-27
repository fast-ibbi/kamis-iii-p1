// bab-05 · 33 — tumpukan yang benar-benar ada di dalam .produk-media.
// Cuma dua kotak yang bertumpuk: badge (position absolute, z-index 2) di atas
// gambar produk (static, ikut alur). Lapis ketiga adalah .produk-media sendiri,
// kotak position relative yang jadi landasan tumpukan itu.
// Tidak ada z-index 1 di style.css: satu-satunya angka di sana 2, jadi hanya
// angka itu yang digambar.
export default {
  id: '33',
  slide: 'Contoh: z-index pada Elemen Diposisikan',
  pattern: 'layers',
  alt: 'Tiga strata di dalam produk-media: badge Best Seller dengan position absolute, z-index 2 paling depan; gambar produk yang static, ikut alur di bawahnya; dan produk-media sendiri sebagai landasan karena position relative.',
  imgWidth: 1120,
  data: {
    layers: [
      { label: 'badge Best Seller', note: 'position absolute · z-index 2', tone: 'acc' },
      { label: 'gambar produk', note: 'static, ikut alur' },
      { label: 'produk-media', note: 'position relative, landasan' },
    ],
  },
}
