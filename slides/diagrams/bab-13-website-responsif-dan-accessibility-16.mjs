// bab-13 · 16 — sizes 50vw sebagai aritmetika yang bisa dicek.
// Wadah hero 1120 px dibagi dua: teks 560 px + gambar 560 px = 1120 px, sisa
// 0 px. Karena area gambarnya 560 px, browser berhenti di hero-768.svg, bukan
// hero-1200.svg — rantai keputusan itu yang ditulis di slide.
export default {
  id: '16',
  slide: 'Contoh: Gambar Responsif: `srcset` dan `sizes`',
  pattern: 'mockup',
  alt: 'Baris hero selebar 1120 px dibagi dua dengan basis 560 px: kotak teks hero di kiri dan kotak gambar hero di kanan, tanpa sisa ruang.',
  imgWidth: 1120,
  data: {
    kind: 'flex',
    justify: 'flex-start',
    container: 1120,
    gap: 0,
    items: [
      { label: 'teks hero', basis: 560 },
      { label: 'gambar hero', basis: 560 },
    ],
  },
}
