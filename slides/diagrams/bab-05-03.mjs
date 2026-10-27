// bab-05 · 03 — dugaan awal mahasiswa vs penyebab sebenarnya.
// Kolom "Yang terlihat" tidak masuk gambar: ketiga gejalanya diceritakan pembicara
// dan tinggal di catatan penyaji.
export default {
  id: '03',
  slide: 'Tiga Gejala, Satu Akar',
  pattern: 'beforeAfter',
  alt: 'Tiga dugaan awal yang salah, dan penyebab sebenarnya di tiap baris: induk belum relative, mode content-box, dan belum ada skala jarak.',
  data: {
    left: {
      title: 'DUGAAN AWAL',
      tone: 'red',
      items: ['salah tulis HTML', 'kontainer kekecilan', 'desainnya beda'],
    },
    right: {
      title: 'YANG SEBENARNYA',
      tone: 'acc',
      items: [
        'induknya belum relative',
        'mode content-box menambah padding',
        'belum ada skala jarak tetap',
      ],
    },
  },
}
