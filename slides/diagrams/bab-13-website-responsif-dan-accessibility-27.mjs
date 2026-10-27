// bab-13 · 27 — urutan kejadian skip link: Tab, Enter, lalu lompat.
// `sequence` dipakai karena yang jadi isi slide adalah urutan waktu, bukan daftar
// syarat. Ketiga aktornya berurutan di satu baris supaya label tidak tertusuk lifeline.
export default {
  id: '27',
  slide: 'Skip Link: Link Pertama di Body',
  pattern: 'sequence',
  alt: 'Urutan skip link: pengguna keyboard menekan Tab pertama dan fokus mendarat di skip link, lalu Enter memindahkan fokus ke konten utama.',
  data: {
    actors: ['Pengguna keyboard', 'Skip link', 'Konten utama'],
    messages: [
      { from: 'Pengguna keyboard', to: 'Skip link', label: 'Tab pertama' },
      { from: 'Pengguna keyboard', to: 'Skip link', label: 'Enter' },
      { from: 'Skip link', to: 'Konten utama', label: 'lompat ke konten utama' },
    ],
  },
}
