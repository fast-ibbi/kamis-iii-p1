// bab-03 · 34 — dua cara mengelola aturan gaya, sumbunya sama: kebiasaan.
// `beforeAfter` karena kiri dan kanan memang daftar sejajar: yang bikin susah
// dirawat lawan yang dirawat.
export default {
  id: '34',
  slide: 'Contoh: Kebiasaan yang Bikin CSS Susah Dirawat',
  pattern: 'beforeAfter',
  alt: 'Tiga kebiasaan buruk — !important buat tiap konflik, selector #navigasi ul li a.tautan, dan gaya inline di HTML produksi — dibandingkan dengan kebiasaan yang dirawat: satu file gaya, selector seperlunya, dan membiarkan kaskade bekerja.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'KEBIASAAN BURUK',
      tone: 'red',
      items: ['!important buat tiap konflik', '#navigasi ul li a.tautan', 'gaya inline di HTML produksi'],
    },
    right: {
      title: 'YANG DIRAWAT',
      tone: 'acc',
      items: ['satu file gaya', 'selector seperlunya', 'biarkan kaskade bekerja'],
    },
  },
}
