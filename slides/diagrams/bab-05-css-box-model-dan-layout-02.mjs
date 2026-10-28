// bab-05 · 02 — dua mode perhitungan: content-box menambah, border-box memotong.
// Label diambil kata per kata dari caption slide (350 px, 300 px, content 250 px).
export default {
  id: '02',
  slide: 'Diagram: Ukuran di Dua Mode',
  pattern: 'beforeAfter',
  alt: 'content-box memakai lebar 350 px, border-box memakai lebar 300 px dengan content tinggal 250 px.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'content-box',
      items: ['width 300 px ditambah padding dan border', 'lebar 350 px di layar'],
    },
    right: {
      title: 'border-box',
      items: ['padding dan border diambil dari dalam width', 'lebar 300 px dengan content 250 px'],
    },
  },
}
