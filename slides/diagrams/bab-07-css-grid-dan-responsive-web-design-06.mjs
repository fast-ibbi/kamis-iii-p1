// bab-07 · 06 — satu denah 12 kolom, tiga baris dengan pembagian berbeda.
// Yang dijaga gambar ini: jumlah butir boleh berubah, garis kolomnya tidak.
// Penggaris 1–12 di atas sel adalah satu-satunya cara mahasiswa bisa menunjuk
// kolom mana yang ditempati sebuah butir.
export default {
  id: '06',
  slide: 'Contoh: Apa Itu CSS Grid',
  pattern: 'mockup',
  alt: 'Denah 12 kolom dengan penggaris bernomor: baris span 12 penuh, baris span 4 dan span 8, baris span 3, span 3, dan span 6, dengan gutter 16 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 16,
    container: 1120,
    rows: [
      [{ label: 'span 12', span: 12 }],
      [{ label: 'span 4', span: 4 }, { label: 'span 8', span: 8 }],
      [
        { label: 'span 3', span: 3 },
        { label: 'span 3', span: 3 },
        { label: 'span 6', span: 6 },
      ],
    ],
    footer: 'gutter 16 px',
  },
}
