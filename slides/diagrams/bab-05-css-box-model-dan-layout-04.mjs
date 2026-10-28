// bab-05 · 04 — isi yang lebih panjang dari kotaknya, sebelum dan sesudah aturan.
// Kedua sisi harus sebentuk: tindakan pada kotak, lalu akibatnya pada isi.
export default {
  id: '04',
  slide: 'Diagram: Konten Meluber',
  pattern: 'beforeAfter',
  alt: 'isi menumpang keluar kotak pada visible; memotong isi dan tidak menyediakan cara menggulir pada hidden.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'visible',
      items: ['isi menumpang keluar kotak', 'kotak tidak berubah ukuran'],
    },
    right: {
      title: 'hidden',
      items: ['memotong isi', 'tidak menyediakan cara menggulir'],
    },
  },
}
