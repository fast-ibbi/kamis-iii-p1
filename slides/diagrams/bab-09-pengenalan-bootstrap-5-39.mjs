// bab-09 · 39 (slide ke-39) — tangga ukuran hero Tokosaya, dari yang paling menonjol
// ke bawah: display-5, lead, fs-5. `fw-bold` sengaja tidak ikut tangga: itu bobot
// huruf, bukan ukuran, jadi menaruhnya sebagai lapis keempat adalah salah kategori.
export default {
  id: '39',
  slide: 'Contoh: Utility Tipografi',
  pattern: 'layers',
  alt: 'Tiga lapis ukuran huruf hero Tokosaya dari atas ke bawah: display-5 buat judul hero, lead buat paragraf pengantar, dan fs-5 buat judul kartu produk.',
  imgWidth: 1120,
  data: {
    layers: [
      { label: 'display-5', note: 'judul hero' },
      { label: 'lead', note: 'paragraf pengantar' },
      { label: 'fs-5', note: 'judul kartu produk' },
    ],
  },
}
