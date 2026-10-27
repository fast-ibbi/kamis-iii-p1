// bab-14 · 06 — lima tahap desain sebagai satu rantai yang urutannya mengikat.
// Tiap panah adalah kata kerja perpindahan tahap; isi tiap tahap ada di note.
export default {
  id: '06',
  slide: 'Rantai Lima Tahap',
  pattern: 'flow',
  alt: 'Lima tahap berurutan: brief berisi tujuan, audiens, dan konten; arsitektur informasi dan sitemap; wireframe berupa layout tanpa hiasan visual; UI design di Figma dengan warna dan ukuran; lalu handoff yang diterjemahkan jadi kode.',
  data: {
    steps: [
      { label: 'Brief', note: 'tujuan, audiens, dan konten', tone: 'neutral' },
      { label: 'Arsitektur informasi', note: 'sitemap halaman', tone: 'neutral' },
      { label: 'Wireframe', note: 'layout tanpa hiasan visual', tone: 'neutral' },
      { label: 'UI design', note: 'warna dan ukuran', tone: 'neutral' },
      { label: 'Handoff', note: 'dibaca lalu diterjemahkan jadi kode', tone: 'acc' },
    ],
    edges: ['dijabarkan', 'dirancang', 'dihias', 'diserahkan'],
  },
}
