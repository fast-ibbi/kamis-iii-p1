// bab-09 · 07 (slide ke-7) — rantai tiga simpul: kelas di HTML, aturan di file
// pustaka, lalu tampilan. Yang digambar cuma arah alirannya; contoh kelas
// `col-lg-3` tinggal di catatan penyaji dan di label simpul pertama.
export default {
  id: '07',
  slide: 'Contoh: Apa Itu CSS Framework',
  pattern: 'flow',
  alt: 'Kelas di HTML dibaca browser, dicocokkan ke file pustaka yang memegang aturan siap pakai, lalu aturan diterapkan sehingga tampilan jadi tanpa CSS sendiri.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'HTML', note: 'class="col-lg-3"' },
      { label: 'File pustaka', note: 'aturan siap pakai' },
      { label: 'Tampilan', note: 'jadi tanpa CSS sendiri', tone: 'acc' },
    ],
    edges: ['dibaca browser', 'aturan diterapkan'],
  },
}
