// bab-09 · 11 (slide ke-11) — rantai efek senyap dari salah eja kelas. Tiga simpul:
// kelasnya salah ketik, dibaca sebagai kelas asing, lalu gaya nggak muncul padahal
// markup tetap tampak benar.
export default {
  id: '11',
  slide: 'Contoh: Batasan yang Perlu Dipertimbangkan',
  pattern: 'flow',
  alt: 'Kelas class="mb3" yang tanda hubungnya kelewat dibaca apa adanya sebagai kelas asing, nggak ada aturannya, lalu dilewati diam-diam sehingga gaya nggak muncul padahal markup tampak benar.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'class="mb3"', note: 'tanda hubung kelewat' },
      { label: 'kelas asing', note: 'nggak ada aturannya' },
      { label: 'gaya nggak muncul', note: 'markup tetap tampak benar', tone: 'red' },
    ],
    edges: ['dibaca apa adanya', 'dilewati diam-diam'],
  },
}
