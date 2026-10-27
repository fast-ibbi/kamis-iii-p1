// bab-05 · 18 — jenis kotak tiap elemen, dan siapa yang menentukan.
// Dua cabang pertama ditetapkan stylesheet browser; cabang inline-block tidak
// pernah datang sendiri, dia cuma ada setelah CSS menulis display:
// inline-block. Karena itu badge duduk di cabang inline (span bawaannya inline)
// dan cabang inline-block dibiarkan tanpa anak — bukan parent beranak tunggal.
export default {
  id: '18',
  slide: 'Contoh: display Menentukan Jenis Kotak',
  pattern: 'tree',
  alt: 'Pohon display: cabang block berisi p dan div, cabang inline berisi span, a, dan badge — bawaannya inline; cabang inline-block — ditulis di CSS, tanpa anggota bawaan.',
  imgWidth: 1000,
  data: {
    root: {
      label: 'display',
      children: [
        { label: 'block', children: [{ label: 'p' }, { label: 'div' }] },
        {
          label: 'inline',
          children: [
            { label: 'span' },
            { label: 'a' },
            { label: 'badge — bawaannya inline' },
          ],
        },
        { label: 'inline-block — ditulis di CSS' },
      ],
    },
  },
}
