// bab-10 · 20 — tiga utilitas yang dijumlahkan sampai harga sejajar di dasar kartu.
// Edge-nya tanda tambah dan sama dengan, jadi tiap tahap terbaca sebagai suku,
// bukan sebagai sebab-akibat.
export default {
  id: '20',
  slide: 'Kenapa Harga Sejajar di Dasar',
  pattern: 'flow',
  alt: 'h-100 menyamakan tinggi kartu dengan kolom grid, d-flex flex-column menyusun isi menurun, mt-auto mendorong harga ke dasar kartu, sehingga harga sejajar walau deskripsi beda panjang.',
  data: {
    steps: [
      { label: 'h-100', note: 'tinggi kartu ikut kolom grid' },
      { label: 'd-flex flex-column', note: 'isi kartu menyusun menurun' },
      { label: 'mt-auto', note: 'harga didorong ke dasar kartu' },
      { label: 'harga sejajar', note: 'walau deskripsi beda panjang', tone: 'acc' },
    ],
    edges: ['+', '+', '='],
  },
}
