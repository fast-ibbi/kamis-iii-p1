// bab-15 · 12 — kolom surel di kontak.html: satu-satunya geometri yang perlu
// dihitung adalah padding 12 px dan border 1 px di sekitar content 320 × 44 px.
export default {
  id: '12',
  slide: 'Contoh: HTML yang Bersih',
  pattern: 'mockup',
  alt: 'Kotak input surel: content 320 kali 44 piksel, padding 12 piksel, border 1 piksel, lebar total 346 piksel, dengan catatan for surel dan id surel yang saling menyambung.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 320, h: 44, label: 'input surel' },
    padding: [12, 12, 12, 12],
    border: [1, 1, 1, 1],
    margin: [0, 0, 0, 0],
    footer: 'for="surel" id="surel"',
  },
}
