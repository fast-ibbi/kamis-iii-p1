// bab-10 · 04 — kartu produk diukur di layar HP: content gambar 360 × 160 px
// ditambah border 1 px di tiap sisi, jadi lebar total 362 px. Angka itulah yang
// bergeser kalau tiap anggota tim menulis bingkai kartunya sendiri.
// Semua angka datang dari deck: 360 piksel (Uji Tiga Lebar Layar), 160 piksel
// (tinggi `card-img-top` di tabel troubleshooting), dan 1px (border .produk-card
// di praktikum style.css).
export default {
  id: '04',
  slide: 'Contoh: Elemen yang Benar-Benar Disentuh Pengguna',
  pattern: 'mockup',
  alt: 'Kartu produk di layar 360 piksel: content 360 kali 160 px berisi gambar kartu, border 1 px di tiap sisi, lebar total 362 px, dengan overflow hidden yang memotong gambar mengikuti radius.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 360, h: 160, label: 'gambar kartu' },
    padding: [0, 0, 0, 0],
    border: [1, 1, 1, 1],
    margin: [0, 0, 0, 0],
    footer: 'overflow: hidden',
  },
}
