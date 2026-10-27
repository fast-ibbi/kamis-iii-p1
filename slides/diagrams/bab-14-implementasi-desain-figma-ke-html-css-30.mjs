// bab-14 · 30 — dua pasang keadaan yang di Figma butuh JavaScript, di praktikum
// ini ditampilkan statis. Dua pasang ini sengaja terpisah: menu dan keranjang
// punya pemicu masing-masing, dan perilakunya dicatat sebagai di luar cakupan.
export default {
  id: '30',
  slide: 'Contoh: Keadaan Interaktif Ditranslasi Statis',
  pattern: 'stateMachine',
  alt: 'Empat keadaan: menu tertutup dan menu terbuka berpindah lewat klik menu dan klik lagi; keranjang kosong dan keranjang terisi berpindah lewat tambah item dan hapus item.',
  imgWidth: 1120,
  data: {
    initial: 'tertutup',
    states: [
      { id: 'tertutup', label: 'menu tertutup' },
      { id: 'terbuka', label: 'menu terbuka' },
      { id: 'kosong', label: 'keranjang kosong' },
      { id: 'terisi', label: 'keranjang terisi' },
    ],
    transitions: [
      { from: 'tertutup', to: 'terbuka', label: 'klik menu' },
      { from: 'terbuka', to: 'tertutup', label: 'klik lagi' },
      { from: 'kosong', to: 'terisi', label: 'tambah item' },
      { from: 'terisi', to: 'kosong', label: 'hapus item' },
    ],
  },
}
