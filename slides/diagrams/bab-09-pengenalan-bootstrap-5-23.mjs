// bab-09 · 23 (slide ke-23) — container lawan container-fluid di layar 1200 px.
// Dua panel dengan baris yang saling menjawab: baris 1 isi halaman, baris 2 margin,
// baris 3 lebar total. 1140 + 30 + 30 = 1200 px di kiri, 1200 + 0 + 0 = 1200 px di kanan.
export default {
  id: '23',
  slide: 'Contoh: Container dan Container Fluid',
  pattern: 'beforeAfter',
  alt: 'Dua panel sejajar di layar 1200 piksel: .container mengisi 1140 piksel dengan margin 30 piksel kiri dan 30 piksel kanan sehingga lebar totalnya 1200 piksel, sedangkan .container-fluid mengisi 1200 piksel penuh dengan margin 0 piksel dan lebar total 1200 piksel.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'CONTAINER',
      tone: 'acc',
      items: ['isi halaman 1140 px', 'margin 30 px kiri dan 30 px kanan', 'lebar total 1200 px'],
    },
    right: {
      title: 'CONTAINER-FLUID',
      tone: 'neutral',
      items: ['isi halaman 1200 px', 'margin 0 px kiri dan 0 px kanan', 'lebar total 1200 px'],
    },
  },
}
