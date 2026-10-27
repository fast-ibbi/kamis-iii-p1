// bab-09 · 21 — dua susunan markup: kolom di luar row melawan kolom di dalam row.
// Bentuk 2 lawan 2; tiap baris kanan menjawab baris kiri. Catatan bahwa kesalahan
// ini lumrah pada pemula tinggal di catatan penyaji.
export default {
  id: '21',
  slide: 'Kolom Wajib Anak Langsung dari row',
  pattern: 'beforeAfter',
  alt: 'Tanpa row, kolom ditaruh langsung di dalam container sehingga gutter dan penyelajanan ikut lepas; di dalam row, kolom jadi anak langsung dari row dan padding kolom dikompensasi margin negatif baris.',
  data: {
    left: {
      title: 'TANPA ROW',
      tone: 'red',
      items: ['kolom ditaruh langsung di dalam container', 'gutter dan penyelajanan ikut lepas'],
    },
    right: {
      title: 'DI DALAM ROW',
      tone: 'acc',
      items: [
        'kolom jadi anak langsung dari row',
        'padding kolom dikompensasi margin negatif baris',
      ],
    },
  },
}
