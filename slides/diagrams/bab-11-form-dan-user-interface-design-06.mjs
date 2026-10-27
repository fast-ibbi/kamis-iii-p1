// bab-11 · 06 — satu akar, empat cabang: empat prinsip desain form.
// `tree` membuang note, jadi inti tiap prinsip ditempel ke label simpulnya.
export default {
  id: '06',
  slide: 'Empat Prinsip Desain Form',
  pattern: 'tree',
  alt: 'Form yang baik berdiri di atas empat prinsip: satu kolom, label terlihat, pengelompokan medan, dan satu tombol aksi yang jelas.',
  data: {
    root: {
      label: 'Form yang baik',
      children: [
        { label: 'Satu kolom — medan disusun vertikal' },
        { label: 'Label terlihat — nama medan permanen' },
        { label: 'Pengelompokan — medan sejenis digugus' },
        { label: 'Tombol aksi — satu tombol utama' },
      ],
    },
  },
}
