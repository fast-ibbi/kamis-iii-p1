// bab-06 · 13 — lorong sebagai wadah: tiga pintu kamar 240 px, sisa 400 px dibagi
// `space-between` jadi dua celah 200 px. Panjang lorong 1120 px sama dengan lebar
// isi halaman yang dipakai di bab ini, dan 240 px adalah basis kolom footer
// Tokosaya, jadi tidak ada angka baru yang datang dari luar deck.
// `align-items` tidak bisa digambar di sini: mockup flex hanya satu baris.
export default {
  id: '13',
  slide: 'Contoh: Analogi Lorong Asrama',
  pattern: 'mockup',
  alt: 'Lorong 1120 px berisi tiga pintu kamar selebar 240 px; sisa 400 px dibagi space-between menjadi dua celah 200 px sehingga pintu pertama dan terakhir menempel ujung lorong.',
  imgWidth: 1120,
  data: {
    kind: 'flex',
    justify: 'space-between',
    container: 1120,
    gap: 0,
    items: [
      { label: 'pintu kamar', basis: 240 },
      { label: 'pintu kamar', basis: 240 },
      { label: 'pintu kamar', basis: 240 },
    ],
    footer: 'lorong 1120 px',
  },
}
