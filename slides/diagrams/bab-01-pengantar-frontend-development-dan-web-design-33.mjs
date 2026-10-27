// bab-01 · 33 — lebar 360 px dari device toolbar, digambar dengan skala.
// Tanpa padding dan tanpa border, jadi lebar total tetap 360 px — angka itulah yang
// dipakai saat menguji halaman di layar HP.
export default {
  id: '33',
  slide: 'Contoh: Chrome DevTools: Mengamati, Bukan Mengeksekusi',
  pattern: 'mockup',
  alt: 'Kotak viewport HP dengan content 360 kali 640 piksel tanpa padding dan tanpa border, jadi lebar total tetap 360 piksel seperti setelan device toolbar.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 360, h: 640, label: 'viewport HP' },
    padding: [0, 0, 0, 0],
    border: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    footer: 'device toolbar',
  },
}
