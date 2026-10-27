// bab-07 · 03 — dua keluhan pemilik toko, dan alat yang menanganinya.
// Bentuk 2 lawan 2: tiap baris kanan menjawab baris kiri. Ketiga gejalanya
// diceritakan pembicara dan tinggal di catatan penyaji.
export default {
  id: '03',
  slide: 'Dua Permintaan, Dua Masalah',
  pattern: 'beforeAfter',
  alt: 'Dua kebutuhan dan yang menanganinya: menyusun baris dan kolom sekaligus ditangani CSS Grid, halaman tetap layak di berbagai layar ditangani responsive web design.',
  data: {
    left: {
      title: 'KEBUTUHAN',
      tone: 'neutral',
      items: ['menyusun baris dan kolom sekaligus', 'halaman tetap layak di berbagai layar'],
    },
    right: {
      title: 'YANG MENANGANINYA',
      tone: 'acc',
      items: ['CSS Grid', 'responsive web design'],
    },
  },
}
