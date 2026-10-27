// bab-14 · 23 — token sebagai tiga lapis nilai: dari gaya berlabel di Figma, ke blok
// `:root`, lalu ke kelas komponen. Aksen cuma di lapis terakhir, tempat nilainya
// dipakai; aturan penamaan peran tinggal di catatan penyaji.
export default {
  id: '23',
  slide: 'Token Tiga Lapis, Nama Berperan',
  pattern: 'layers',
  alt: 'Tiga lapis token: color style dan text style di Figma, lalu blok :root di css/style.css, lalu pemakaiannya di kelas komponen lewat nilai token.',
  data: {
    layers: [
      { label: 'color style dan text style', note: 'di Figma', tone: 'neutral' },
      { label: 'blok :root', note: 'di css/style.css', tone: 'neutral' },
      { label: 'pemakaiannya di kelas komponen', note: 'nilai token', tone: 'acc' },
    ],
  },
}
