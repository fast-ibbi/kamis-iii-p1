// bab-01 · 30 — alamat dibaca sebagai tiga kotak berurutan, bukan satu kata ajaib.
// Label panahnya adalah pemisah aslinya: `://` lalu `/`. Karena itu kotak ketiga
// TIDAK diawali garis miring — garis miringnya sudah jadi label panah, jadi alamat
// yang terbaca persis https://tokosaya.id/katalog.html, bukan versi bergaris miring ganda.
export default {
  id: '30',
  slide: 'Contoh: Domain, Hosting, dan URL',
  pattern: 'flow',
  alt: 'Alamat https://tokosaya.id/katalog.html dipecah tiga kotak: https sebagai skema, tokosaya.id sebagai domain, dan katalog.html sebagai jalur file, dengan label panah :// lalu / sehingga rangkaiannya terbaca utuh tanpa garis miring ganda.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'https', note: 'skema' },
      { label: 'tokosaya.id', note: 'domain' },
      { label: 'katalog.html', note: 'jalur file' },
    ],
    edges: ['://', '/'],
  },
}
