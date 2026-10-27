// bab-03 · 25 — tangga kekuatan specificity, terkuat di pita paling atas.
// Urutannya adalah isinya: tiap pita mengalahkan pita di bawahnya.
export default {
  id: '25',
  slide: 'Membaca Specificity',
  pattern: 'layers',
  alt: 'Tangga specificity dari terkuat ke terlemah: gaya inline menang atas semuanya, selector ID, elemen dengan class, class atau pseudo-class, dan selector elemen yang paling lemah.',
  data: {
    layers: [
      { label: 'Gaya inline', note: '(tertinggi) menang atas semuanya', tone: 'acc' },
      { label: 'Selector ID', note: '(1, 0, 0) menang atas semua class', tone: 'neutral' },
      { label: 'Elemen + class', note: '(0, 1, 1) menang atas class', tone: 'neutral' },
      { label: 'Class atau pseudo-class', note: '(0, 1, 0) menang atas elemen', tone: 'neutral' },
      { label: 'Selector elemen', note: '(0, 0, 1) paling lemah', tone: 'neutral' },
    ],
  },
}
