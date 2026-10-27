// bab-05 · 23 — lima nilai position sebagai cabang dari satu properti.
// `tree` membuang `note`, jadi perilakunya ditempel ke label tiap simpul.
export default {
  id: '23',
  slide: 'Lima Nilai position',
  pattern: 'tree',
  alt: 'Properti position punya lima nilai: static ikut alur dokumen, relative bergeser dari posisinya, absolute lepas dari alur, fixed menempel viewport, sticky ikut alur sampai titik geser.',
  data: {
    root: {
      label: 'position',
      children: [
        { label: 'static — bawaan, ikut alur dokumen' },
        { label: 'relative — bergeser dari posisinya' },
        { label: 'absolute — lepas dari alur' },
        { label: 'fixed — menempel viewport' },
        { label: 'sticky — ikut alur sampai titik geser' },
      ],
    },
  },
}
