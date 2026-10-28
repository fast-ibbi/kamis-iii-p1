// bab-05 · 05 — lima nilai position sebagai satu keluarga, supaya mahasiswa
// melihat bahwa kelimanya adalah nilai dari properti yang sama, bukan properti
// yang berbeda-beda.
export default {
  id: '05',
  slide: 'Diagram: Lima Nilai position',
  pattern: 'tree',
  alt: 'Properti position memiliki lima nilai: static, relative, absolute, fixed, dan sticky.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'position',
      children: [
        { label: 'static' },
        { label: 'relative' },
        { label: 'absolute' },
        { label: 'fixed' },
        { label: 'sticky' },
      ],
    },
  },
}
