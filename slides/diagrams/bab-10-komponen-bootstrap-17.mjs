// bab-10 · 17 — anatomi kelas card sebagai containment.
// `tree` membuang note, jadi peran tiap kelas ditempel ke label simpulnya.
export default {
  id: '17',
  slide: 'Anatomi Kelas Card',
  pattern: 'tree',
  alt: 'Kelas card adalah bingkai kartu; di dalamnya card-img-top menempelkan gambar ke tepi atas, dan card-body membuka ruang isi yang memuat card-title untuk judul serta card-text untuk paragraf.',
  data: {
    root: {
      label: 'card',
      children: [
        { label: 'card-img-top — menempel di tepi atas' },
        {
          label: 'card-body — ruang isi kartu',
          children: [
            { label: 'card-title — judul kartu' },
            { label: 'card-text — paragraf isi kartu' },
          ],
        },
      ],
    },
  },
}
