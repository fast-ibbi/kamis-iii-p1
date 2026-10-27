// bab-11 · 04 — rantai kegagalan Rani di checkout, satu langkah menular ke langkah lain.
// Empat tahap, tiga label panah: ragu → menebak → salah ketik, dan ujungnya batal.
export default {
  id: '04',
  slide: 'Contoh: Rani dan Form yang Bikin Ragu',
  pattern: 'flow',
  alt: 'Empat tahap checkout: kolom Nama tanpa label bikin ragu, Telepon tanpa petunjuk format bikin menebak, Kupon yang cuma berbunyi error kode 7 bikin salah ketik, dan ujungnya transaksi batal karena dua kali salah mengetik email.',
  data: {
    steps: [
      { label: 'Nama', note: 'nggak punya label' },
      { label: 'Telepon', note: 'nggak ada petunjuk format' },
      { label: 'Kupon', note: 'error kode 7' },
      { label: 'Transaksi batal', note: 'dua kali salah mengetik email', tone: 'red' },
    ],
    edges: ['ragu', 'menebak', 'salah ketik'],
  },
}
