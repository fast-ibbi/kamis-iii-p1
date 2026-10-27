// bab-01 · 10 — tiga kebutuhan yang bukan frontend, empat yang tetap frontend.
// Bentuk 3 lawan 4: kolom kanan sengaja lebih panjang, karena halaman statis
// memang cukup untuk kebutuhan tampilan Tokosaya.
export default {
  id: '10',
  slide: 'Contoh: Batas Lingkup: yang Bukan Frontend',
  pattern: 'beforeAfter',
  alt: 'Kolom bukan frontend berisi keranjang bertambah, logika bisnis, dan basis data; kolom tetap frontend berisi kartu produk, hero, formulir kontak, dan katalog.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'BUKAN FRONTEND',
      tone: 'red',
      items: ['keranjang bertambah', 'logika bisnis', 'basis data'],
    },
    right: {
      title: 'TETAP FRONTEND',
      tone: 'acc',
      items: ['kartu produk', 'hero', 'formulir kontak', 'katalog'],
    },
  },
}
