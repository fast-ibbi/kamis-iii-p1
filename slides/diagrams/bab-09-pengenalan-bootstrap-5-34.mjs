// bab-09 · 34 (slide ke-34) — `px-4 py-2` dibongkar jadi empat angka: padding atas 8,
// kanan 24, bawah 8, kiri 24. Lebar total 280 + 24 + 24 = 328 px; tinggi 96 + 8 + 8.
export default {
  id: '34',
  slide: 'Contoh: Pola Nama Kelas Utility',
  pattern: 'mockup',
  alt: 'Kotak dengan px-4 py-2: content isi kartu 280 x 96 piksel dan padding 8 24 8 24 piksel, jadi lebar total 328 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 280, h: 96, label: 'isi kartu' },
    padding: [8, 24, 8, 24],
    border: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
  },
}
