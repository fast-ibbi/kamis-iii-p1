// bab-15 · 26 — satu putaran uji: lulus, temuan, diperbaiki, lalu diuji ulang.
// Cabang regresi digambar sebagai panah balik karena cacat yang kambuh tetap
// berakhir di keadaan temuan, bukan keadaan tersendiri.
export default {
  id: '26',
  slide: 'Contoh: Browser Testing dan Uji Ulang Regresi',
  pattern: 'stateMachine',
  alt: 'Tiga keadaan pengujian: lulus, temuan, dan diperbaiki, dengan panah sapu, ubah CSS, uji ulang, dan panah balik regresi dari diperbaiki ke temuan.',
  imgWidth: 1120,
  data: {
    initial: 'lulus',
    states: [
      { id: 'lulus', label: 'lulus', tone: 'green' },
      { id: 'temuan', label: 'temuan', tone: 'red' },
      { id: 'diperbaiki', label: 'diperbaiki', tone: 'acc' },
    ],
    transitions: [
      { from: 'lulus', to: 'temuan', label: 'sapu' },
      { from: 'temuan', to: 'diperbaiki', label: 'ubah CSS' },
      { from: 'diperbaiki', to: 'lulus', label: 'uji ulang' },
      { from: 'diperbaiki', to: 'temuan', label: 'regresi' },
    ],
  },
}
