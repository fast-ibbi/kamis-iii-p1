// bab-07 · 18 — tangga breakpoint Tokosaya sebagai mode denah yang dinyalakan
// peristiwa: lebar layar melewati batas min-width. mode pertama diberi aksen
// eksplisit supaya cuma satu elemen beraksen di seluruh gambar.
export default {
  id: '18',
  slide: 'Breakpoint Konvensi Tokosaya',
  pattern: 'stateMachine',
  imgWidth: 1120,
  alt: 'Lima mode denah Tokosaya yang menyala berurutan: satu kolom, lalu dua kolom di 576 px, navigasi geser di 768 px, sidebar 240 px di 992 px, dan empat kartu di 1200 px.',
  data: {
    states: [
      { id: 'satu', label: 'satu kolom', tone: 'acc' },
      { id: 'dua', label: 'dua kolom' },
      { id: 'nav', label: 'navigasi geser' },
      { id: 'sidebar', label: 'sidebar 240 px' },
      { id: 'empat', label: 'empat kartu' },
    ],
    transitions: [
      { from: 'satu', to: 'dua', label: '576 px' },
      { from: 'dua', to: 'nav', label: '768 px' },
      { from: 'nav', to: 'sidebar', label: '992 px' },
      { from: 'sidebar', to: 'empat', label: '1200 px' },
    ],
  },
}
