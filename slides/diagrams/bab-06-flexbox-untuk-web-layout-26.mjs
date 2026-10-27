// bab-06 · 26 — dua urutan yang tidak lagi sama setelah `order` dipakai.
// Hanya sisi dokumen yang diberi aksen: itu urutan yang dipegang pembaca layar.
// Sisa fakta (angka kecil mendahului, dipakai hemat) tinggal di catatan penyaji.
export default {
  id: '26',
  slide: 'order dan Disiplinnya',
  pattern: 'beforeAfter',
  alt: 'Urutan visual diurutkan berdasarkan nilai order dan bisa berbeda; urutan dokumen HTML tetap asli, dan pembaca layar serta tombol Tab ikut urutan dokumen.',
  data: {
    left: {
      title: 'URUTAN VISUAL',
      tone: 'neutral',
      items: ['diurutkan berdasarkan nilai order, default 0', 'order cuma mengubah urutan visual'],
    },
    right: {
      title: 'URUTAN DOKUMEN',
      tone: 'acc',
      items: ['urutan dokumen HTML tetap asli', 'pembaca layar dan tombol Tab ikut urutan dokumen'],
    },
  },
}
