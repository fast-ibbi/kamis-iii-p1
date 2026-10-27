// bab-13 · 34 — urutan Tab sebagai rantai, bukan daftar aturan.
// Empat stop di katalog.html mengikuti urutan DOM; catatan di bawah tiap kotak
// menyebut stop keberapa. `tabindex="5"` yang menyimpangkan urutan tinggal di
// prosa, karena yang perlu dilihat kelas adalah rantai yang benar dulu.
export default {
  id: '34',
  slide: 'Contoh: Antarmuka Ramah Keyboard',
  pattern: 'flow',
  alt: 'Empat stop Tab berurutan mengikuti DOM: logo di Tab 1, nav utama di Tab 2, kartu produk di Tab 3, dan tombol keranjang di Tab 4.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'logo', note: 'Tab 1' },
      { label: 'nav utama', note: 'Tab 2' },
      { label: 'kartu produk', note: 'Tab 3' },
      { label: 'tombol keranjang', note: 'Tab 4', tone: 'acc' },
    ],
    edges: ['Tab', 'Tab', 'Tab'],
  },
}
