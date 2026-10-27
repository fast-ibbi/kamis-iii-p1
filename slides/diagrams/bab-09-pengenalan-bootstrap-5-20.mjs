// bab-09 · 20 (slide ke-20) — dua model pemuatan yang sama-sama bisa dipakai: dengan
// bundle (interaksi hidup) lawan tanpa bundle (status statis, CSS kustom).
export default {
  id: '20',
  slide: 'Contoh: Tanpa Satu Baris JavaScript',
  pattern: 'beforeAfter',
  alt: 'Dengan bundle, menu lipat dan modal hidup karena file .js ikut dimuat; tanpa bundle, komponen dibaca sebagai markup, status statis, dan navbar mobile lewat CSS kustom.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'DENGAN BUNDLE',
      tone: 'neutral',
      items: ['menu lipat dan modal hidup', 'file .js ikut dimuat'],
    },
    right: {
      title: 'TANPA BUNDLE',
      tone: 'acc',
      items: ['komponen dibaca sebagai markup', 'status statis', 'navbar mobile lewat CSS kustom'],
    },
  },
}
