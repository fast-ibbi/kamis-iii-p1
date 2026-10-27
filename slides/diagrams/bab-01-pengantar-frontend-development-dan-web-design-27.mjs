// bab-01 · 27 — halaman dan aset menggantung di bawah satu website.
// Bentuk containment, bukan daftar: satu website memuat banyak halaman, dan satu
// aset seperti style.css dipakai bersama oleh semua halaman.
export default {
  id: '27',
  slide: 'Contoh: Anatomi Sebuah Website',
  pattern: 'tree',
  alt: 'Satu Website berisi dua Halaman, index.html dan katalog.html, serta sekumpulan Aset berupa style.css dan gambar produk.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'Website',
      children: [
        { label: 'Halaman', children: [{ label: 'index.html' }, { label: 'katalog.html' }] },
        { label: 'Aset', children: [{ label: 'style.css' }, { label: 'gambar produk' }] },
      ],
    },
  },
}
