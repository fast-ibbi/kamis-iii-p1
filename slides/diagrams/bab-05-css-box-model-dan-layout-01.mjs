// bab-05 · 01 — anatomi kotak: content, padding, border, margin pada satu skala.
// Angka pada legend sengaja diambil dari contoh di slide: content 300 × 150,
// padding 16, border 2, margin 24. Caption di slide menyebut angka yang sama,
// sehingga lolos gerbang provenance `--strict`.
export default {
  id: '01',
  slide: 'Diagram: Empat Lapisan Kotak',
  pattern: 'mockup',
  alt: 'Kotak CSS berlapis dari dalam ke luar: content 300 × 150 px, padding 16 px, border 2 px, dan margin 24 px.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 300, h: 150 },
    padding: [16, 16, 16, 16],
    border: [2, 2, 2, 2],
    margin: [24, 24, 24, 24],
  },
}
