// bab-13 · 41 — langkah 1–7 sebagai rantai audit, bukan daftar centang.
// `flow` dipilih, bukan `layers`: enam lapisan menuntut kanvas 510 px dan itu
// menghabiskan ruang prosa di slide. Lima tahap (Lighthouse jadi tahap terakhir)
// masih jujur, dan langkah skip link tetap disebut di prosa sebagai pintu masuk
// refactor.
export default {
  id: '41',
  slide: 'Contoh: Langkah Kerja 1–7: Audit Dulu',
  pattern: 'flow',
  alt: 'Rantai lima langkah audit berurutan: audit visual 360 px sampai 1200 px, audit struktur semua img punya alt, audit keyboard Tab dari awal halaman, audit kontras color picker DevTools, lalu Lighthouse kategori Accessibility.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'Audit visual', note: '360 px sampai 1200 px' },
      { label: 'Audit struktur', note: 'semua img punya alt' },
      { label: 'Audit keyboard', note: 'Tab dari awal halaman' },
      { label: 'Audit kontras', note: 'color picker DevTools' },
      { label: 'Lighthouse', note: 'kategori Accessibility', tone: 'acc' },
    ],
    edges: ['lalu', 'lalu', 'lalu', 'lalu'],
  },
}
