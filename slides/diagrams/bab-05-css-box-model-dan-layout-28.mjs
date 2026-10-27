// bab-05 · 28 — space-between membagi sisa ruang tanpa peduli skala jarak.
// 1120 − (3 × 280) − (2 × 24) = 232 px sisa, dibagi dua jadi 116 px per celah.
// 116 bukan kelipatan 8, dan itulah poin slidenya: irama jaraknya patah.
export default {
  id: '28',
  slide: 'Contoh: Skala Jarak Delapan Piksel',
  pattern: 'mockup',
  alt: 'Tiga kartu 280 piksel di wadah 1120 piksel dengan gap 24 piksel; space-between membagi sisa 232 piksel menjadi dua celah 116 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'flex',
    justify: 'space-between',
    container: 1120,
    gap: 24,
    items: [
      { label: 'Kartu 1', basis: 280 },
      { label: 'Kartu 2', basis: 280 },
      { label: 'Kartu 3', basis: 280 },
    ],
  },
}
