// bab-09 · 18 — tiga lapis grid dari luar ke dalam: container, row, col.
// Pita pertama mendapat aksen bawaan, jadi tone ditulis eksplisit supaya hanya
// pita `col` yang beraksen. Penggaris 12 garis dan kombinasi lazim tidak
// digambar — fakta itu tinggal di catatan penyaji.
export default {
  id: '18',
  slide: 'Tiga Lapis Grid',
  pattern: 'layers',
  alt: 'Tiga lapis grid dari luar ke dalam: container membungkus seluruh baris dan kolom, row menyusun kolom biar sejajar, col berisi konten dan menerima gutter dari row.',
  data: {
    layers: [
      {
        label: 'container',
        note: 'membungkus seluruh baris dan kolom',
        tone: 'neutral',
      },
      {
        label: 'row',
        note: 'menyusun kolom biar sejajar',
        tone: 'neutral',
      },
      {
        label: 'col',
        note: 'berisi konten dan menerima gutter dari row',
        tone: 'acc',
      },
    ],
  },
}
