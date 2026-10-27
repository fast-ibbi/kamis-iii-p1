// bab-12 · 22 — repetition yang bisa dihitung: "delapan kartu katalog memakai
// kelas p-kartu yang sama". Dua baris x empat kartu span 3, grid 12 kolom,
// gutter 24 piksel. Semua sel diberi label yang sama justru karena intinya
// pengulangan wujud, bukan variasi isi.
export default {
  id: '22',
  slide: 'Contoh: Repetition',
  pattern: 'mockup',
  alt: 'Delapan kartu katalog Tokosaya di grid 12 kolom: dua baris berisi empat kartu p-kartu masing-masing selebar 3 kolom dengan gutter 24 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 24,
    container: 1120,
    rows: [
      [
        { label: 'p-kartu', span: 3 },
        { label: 'p-kartu', span: 3 },
        { label: 'p-kartu', span: 3 },
        { label: 'p-kartu', span: 3 },
      ],
      [
        { label: 'p-kartu', span: 3 },
        { label: 'p-kartu', span: 3 },
        { label: 'p-kartu', span: 3 },
        { label: 'p-kartu', span: 3 },
      ],
    ],
  },
}
