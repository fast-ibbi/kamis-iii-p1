// bab-06 · 09 — peran dua sumbu bertukar saat arah diganti.
// Tiap baris memasangkan sumbu yang sama: main axis lawan main axis, cross axis
// lawan cross axis. Isi blok `text` lama dipindahkan apa adanya ke catatan penyaji.
export default {
  id: '09',
  slide: 'Peran Sumbu Bertukar',
  pattern: 'beforeAfter',
  alt: 'Pada flex-direction row, main axis horizontal kiri ke kanan dan cross axis vertikal atas ke bawah; pada column, main axis vertikal atas ke bawah dan cross axis horizontal kiri ke kanan.',
  data: {
    left: {
      title: 'flex-direction: row',
      tone: 'neutral',
      items: ['main axis horizontal, kiri ke kanan', 'cross axis vertikal, atas ke bawah'],
    },
    right: {
      title: 'flex-direction: column',
      tone: 'acc',
      items: ['main axis vertikal, atas ke bawah', 'cross axis horizontal, kiri ke kanan'],
    },
  },
}
