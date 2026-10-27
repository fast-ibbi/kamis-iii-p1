// bab-13 · 09 — katalog yang sama di dua ujung strategi mobile-first.
// Grid 12 kolom dengan gutter 16 px: baris atas satu kartu span 12 (base), baris
// bawah empat kartu span 3 (lg). Penggaris 1–12 di atas gambar yang bikin span
// bisa dicek mata; container 1120 px supaya 4 × 268 + 3 × 16 = 1120.
export default {
  id: '09',
  slide: 'Contoh: Kenapa Mobile-First Banyak Dipakai',
  pattern: 'mockup',
  alt: 'Dua baris katalog dalam grid 12 kolom bergutter 16 px: baris pertama satu kartu span 12 yang disebut katalog satu kolom, baris kedua empat kartu span 3 yang berbagi lebar 1120 px.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 16,
    container: 1120,
    rows: [
      [{ label: 'katalog satu kolom', span: 12 }],
      [
        { label: 'kartu', span: 3 },
        { label: 'kartu', span: 3 },
        { label: 'kartu', span: 3 },
        { label: 'kartu', span: 3 },
      ],
    ],
    footer: 'gutter 16 px',
  },
}
