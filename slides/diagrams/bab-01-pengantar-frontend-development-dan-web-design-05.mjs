// bab-01 · 05 — kalimat klien diterjemahkan jadi tiga kotak header yang bisa diukur.
// Yang dijaga gambar ini: "bisa dilihat / bisa dicari / bisa dihubungi" punya lebar,
// dan jumlahnya harus berhenti di 1120 px. Sisa ruang dibagi space-between, bukan gap.
export default {
  id: '05',
  slide: 'Contoh: Klien Berbicara Bahasa Kebutuhan',
  pattern: 'mockup',
  alt: 'Header selebar 1120 piksel dengan gap 24 piksel berisi Logo Tokosaya 200 piksel, Kotak pencarian 400 piksel, dan Tombol Hubungi 200 piksel; sisa 272 piksel dibagi dua jadi 136 piksel per celah.',
  imgWidth: 1120,
  data: {
    kind: 'flex',
    justify: 'space-between',
    container: 1120,
    gap: 24,
    items: [
      { label: 'Logo Tokosaya', basis: 200 },
      { label: 'Kotak pencarian', basis: 400 },
      { label: 'Tombol Hubungi', basis: 200 },
    ],
  },
}
