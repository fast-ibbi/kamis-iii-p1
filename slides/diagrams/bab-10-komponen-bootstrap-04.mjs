// bab-10 · 04 — kartu produk di layar HP. Bootstrap 5.3 sudah memasang
// `box-sizing: border-box` global (Bab 5), jadi border 1 px diambil dari DALAM
// lebar kotak: content gambar kartu tinggal 358 × 160 px, bukan 360, dan
// 358 + 1 + 1 = 360 px — lebar totalnya pas selebar layar 360 piksel, tidak lebih.
// Semua angka dari deck: 360 piksel (Uji Tiga Lebar Layar, baris HP), 160 piksel
// (tinggi `card-img-top` di tabel troubleshooting), dan 1px (border .produk-card
// di praktikum style.css). Aritmetikanya ditulis di footer gambar supaya bisa
// diperiksa tanpa mengukur tebal garis: box total = 358 + 1 + 1 = 360 px.
export default {
  id: '04',
  slide: 'Contoh: Elemen yang Benar-Benar Disentuh Pengguna',
  pattern: 'mockup',
  alt: 'Kartu produk di layar 360 piksel: kotak bergaris tepi 1 px di keempat sisi yang isinya content gambar kartu 358 kali 160 px, dengan legenda border 1 px, content 358 kali 160 px, dan lebar total 360 px.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 358, h: 160, label: 'gambar kartu' },
    padding: [0, 0, 0, 0],
    border: [1, 1, 1, 1],
    margin: [0, 0, 0, 0],
    footer: '358 + 1 + 1 = 360 px',
  },
}
