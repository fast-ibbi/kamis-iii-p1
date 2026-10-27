// bab-11 · 12 — rantai pasangan for–id sampai ke pembaca layar.
// Tiga tahap: sambungannya, akibatnya untuk pengguna, dan akibatnya untuk alat bantu.
export default {
  id: '12',
  slide: 'label dan Pasangan for–id',
  pattern: 'flow',
  alt: 'Nilai for pada label sama dengan id medan, sehingga klik label memindahkan fokus ke medannya, dan pembaca layar membacakan label sebagai nama medan.',
  data: {
    steps: [
      { label: 'for dan id', note: 'nilainya harus sama' },
      { label: 'Fokus pindah', note: 'tanpa mouse' },
      { label: 'Nama medan', note: 'pembaca layar membacakan label', tone: 'acc' },
    ],
    edges: ['klik label', 'fokus di medan'],
  },
}
