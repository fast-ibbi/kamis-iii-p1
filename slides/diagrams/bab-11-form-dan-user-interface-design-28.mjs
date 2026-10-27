// bab-11 · 28 — mb-3 itu margin yang cuma tumbuh ke bawah.
// Content 360 x 88 px, margin 0 0 16 0 px, jadi lebar total tetap 360 px
// sementara tinggi kotak bertambah 16 px. Pita ambernya cuma ada di bawah.
export default {
  id: '28',
  slide: 'Contoh: Kenapa Kelas Form Bootstrap',
  pattern: 'mockup',
  alt: 'Satu kelompok medan 360 kali 88 piksel dengan mb-3: pita margin 0 0 16 0 piksel hanya muncul di bawah kotak, sehingga lebar total tetap 360 piksel dan jarak ke kelompok berikutnya 16 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 360, h: 88, label: 'satu kelompok medan' },
    padding: [0, 0, 0, 0],
    border: [0, 0, 0, 0],
    margin: [0, 0, 16, 0],
    footer: 'mb-3 = 16 px',
  },
}
