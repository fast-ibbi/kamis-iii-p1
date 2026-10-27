// bab-12 · 09 — konsistensi yang bisa diperiksa: dua baris kartu, garis kolom
// yang sama. Angkanya dari slide ini dan slide Jarak: 24 piksel antar kartu,
// lebar halaman 1120 piksel, grid 12 kolom. track = (1120 - 11 x 24) / 12 = 71,
// jadi satu kartu 4 kolom = 4 x 71 + 3 x 24 = 356 piksel.
export default {
  id: '09',
  slide: 'Contoh: Konsistensi',
  pattern: 'mockup',
  alt: 'Dua baris katalog Tokosaya di grid 12 kolom dengan gutter 24 piksel: masing-masing tiga kartu p-kartu selebar 4 kolom, dan baris kedua mulai di garis kolom yang sama dengan baris pertama.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 24,
    container: 1120,
    rows: [
      [
        { label: 'p-kartu', span: 4 },
        { label: 'p-kartu', span: 4 },
        { label: 'p-kartu', span: 4 },
      ],
      [
        { label: 'p-kartu', span: 4 },
        { label: 'p-kartu', span: 4 },
        { label: 'p-kartu', span: 4 },
      ],
    ],
    footer: 'gutter 24 piksel',
  },
}
