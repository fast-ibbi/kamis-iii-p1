// bab-06 · 15 — jarak dari margin tiap anak lawan jarak dari gap.
// Baris kedua sengaja kalimat yang sama dinegasi: itulah bedanya. `row-gap` dan
// `column-gap` tidak digambar, faktanya tinggal di catatan penyaji.
export default {
  id: '15',
  slide: 'gap: Jarak Tanpa Margin Ganda',
  pattern: 'beforeAfter',
  alt: 'Dengan margin, jaraknya dibuat lewat margin-right tiap anak plus :last-child sehingga margin nyempil di tepi terluar; dengan gap, jarak lahir antar item dan tidak ada margin di tepi terluar.',
  data: {
    left: {
      title: 'MARGIN TIAP ANAK',
      tone: 'red',
      items: ['margin-right tiap anak plus :last-child', 'margin nyempil di tepi terluar'],
    },
    right: {
      title: 'GAP',
      tone: 'acc',
      items: ['gap memberi jarak antar-flex item', 'nggak ada margin nyempil di tepi terluar'],
    },
  },
}
