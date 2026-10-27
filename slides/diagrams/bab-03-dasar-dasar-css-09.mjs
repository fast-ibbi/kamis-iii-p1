// bab-03 · 09 — satu file gaya pusat, empat halaman Tokosaya menempel ke situ.
// `tree` karena hubungannya containment: keempat halaman menarik gaya dari satu
// berkas yang sama lewat `<link>`.
export default {
  id: '09',
  slide: 'Contoh: Satu Gaya Pusat, Banyak Halaman',
  pattern: 'tree',
  alt: 'Satu file style.css memberi gaya ke empat halaman Tokosaya sekaligus: index.html, katalog.html, tentang.html, dan kontak.html.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'style.css',
      children: [
        { label: 'index.html' },
        { label: 'katalog.html' },
        { label: 'tentang.html' },
        { label: 'kontak.html' },
      ],
    },
  },
}
