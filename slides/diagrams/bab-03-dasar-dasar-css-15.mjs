// bab-03 · 15 — satu set nama class ditulis dua kali: camelCase lawan kebab-case.
// Judul slide ini "Penamaan Class dengan Kebab-Case", jadi sumbu gambarnya notasi,
// bukan tampilan-lawan-peran. Tiap baris kiri berpasangan dengan baris kanan yang
// sama: elemen yang sama, hanya penulisannya yang berbeda.
export default {
  id: '15',
  slide: 'Contoh: Penamaan Class dengan Kebab-Case',
  pattern: 'beforeAfter',
  alt: 'Nama class yang sama ditulis dua cara: camelCase dengan .siteNav, .heroTitle, dan .produkCard, lawan kebab-case dengan .site-nav, .hero-title, dan .produk-card.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'CAMELCASE',
      tone: 'red',
      mono: true,
      items: ['.siteNav', '.heroTitle', '.produkCard'],
    },
    right: {
      title: 'KEBAB-CASE',
      tone: 'acc',
      mono: true,
      items: ['.site-nav', '.hero-title', '.produk-card'],
    },
  },
}
