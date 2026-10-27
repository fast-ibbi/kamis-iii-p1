// bab-15 · 28b — urutan tab di halaman kontak: pengguna menekan Tab berturut-
// turut dan halaman mengembalikan fokus yang berbeda tiap kali.
export default {
  id: '28b',
  slide: 'Contoh: Lima Pemeriksaan Aksesibilitas dan Alatnya',
  pattern: 'sequence',
  alt: 'Urutan tab di halaman kontak: Tab pertama memberi fokus ke skip link, Tab kedua ke input surel, lalu Tab ketiga melanjutkan ke tombol kirim.',
  imgWidth: 1120,
  data: {
    actors: ['Pengguna', 'Halaman kontak'],
    messages: [
      { from: 'Pengguna', to: 'Halaman kontak', label: 'Tab pertama' },
      { from: 'Halaman kontak', to: 'Pengguna', label: 'fokus skip link' },
      { from: 'Pengguna', to: 'Halaman kontak', label: 'Tab kedua' },
      { from: 'Halaman kontak', to: 'Pengguna', label: 'fokus input surel' },
      { from: 'Pengguna', to: 'Halaman kontak', label: 'Tab ketiga' },
    ],
  },
}
