// bab-09 · 42 (slide ke-42) — peran warna bawaan Bootstrap lawan token Tokosaya.
// Dua baris per sisi, sumbu yang sama: arti sebuah nama kelas warna.
export default {
  id: '42',
  slide: 'Contoh: Palet Bootstrap Bukan Palet Tokosaya',
  pattern: 'beforeAfter',
  alt: 'Palet bawaan Bootstrap: primary berarti biru dan warning berarti kuning; palet Tokosaya menggesernya lewat dua token, --clr-primary #4F46E5 indigo dan --bs-primary-rgb 79, 70, 229.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'BAWAAN BOOTSTRAP',
      tone: 'neutral',
      items: ['primary berarti biru', 'warning berarti kuning'],
    },
    right: {
      title: 'TOKOSAYA',
      tone: 'acc',
      items: ['--clr-primary #4F46E5 indigo', '--bs-primary-rgb 79, 70, 229'],
    },
  },
}
