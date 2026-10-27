// bab-14 · 16 — empat pembagian baris di grid dua belas kolom Tokosaya:
// 12, 6 + 6, 4 + 4 + 4, dan 8 + 4. Penggaris 1–12 di atas dipakai supaya kelas
// bisa menunjuk kolom yang ditempati tiap butir. Kontainer 1140 dan gutter 24
// adalah angka yang sama dengan slide hitung grid.
export default {
  id: '16',
  slide: 'Contoh: Column Grid Dua Belas Kolom',
  pattern: 'mockup',
  alt: 'Denah 12 kolom dengan penggaris bernomor: baris span 12 penuh, baris span 6 dan span 6, baris span 4 tiga kali, dan baris span 8 lalu span 4, dengan gutter 24 px.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 24,
    container: 1140,
    rows: [
      [{ label: 'span 12', span: 12 }],
      [{ label: 'span 6', span: 6 }, { label: 'span 6', span: 6 }],
      [{ label: 'span 4', span: 4 }, { label: 'span 4', span: 4 }, { label: 'span 4', span: 4 }],
      [{ label: 'span 8', span: 8 }, { label: 'span 4', span: 4 }],
    ],
    footer: 'gutter 24 px',
  },
}
