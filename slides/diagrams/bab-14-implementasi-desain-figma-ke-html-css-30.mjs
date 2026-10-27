// bab-14 · 30 — dua pasang keadaan yang di Figma butuh JavaScript, di praktikum
// ini ditampilkan statis. Dua pasang ini dipisah warnanya: pasangan menu netral,
// pasangan keranjang memakai aksen, supaya tidak terbaca sebagai satu rantai
// empat langkah. Label keranjang sengaja dibuat sepanjang sama biar dua chip itu
// sama-sama dua baris, bukan satu vs dua.
export default {
  id: '30',
  slide: 'Contoh: Keadaan Interaktif Ditranslasi Statis',
  pattern: 'stateMachine',
  alt: 'Empat keadaan dalam dua pasang: menu tertutup dan menu terbuka (netral) berpindah lewat klik menu dan klik lagi; keranjang masih kosong dan keranjang sudah terisi (beraksen) berpindah lewat tambah item dan hapus item.',
  imgWidth: 1120,
  data: {
    initial: 'tertutup',
    states: [
      { id: 'tertutup', label: 'menu tertutup', tone: 'neutral' },
      { id: 'terbuka', label: 'menu terbuka', tone: 'neutral' },
      { id: 'kosong', label: 'keranjang masih kosong', tone: 'acc' },
      { id: 'terisi', label: 'keranjang sudah terisi', tone: 'acc' },
    ],
    transitions: [
      { from: 'tertutup', to: 'terbuka', label: 'klik menu' },
      { from: 'terbuka', to: 'tertutup', label: 'klik lagi' },
      { from: 'kosong', to: 'terisi', label: 'tambah item' },
      { from: 'terisi', to: 'kosong', label: 'hapus item' },
    ],
  },
}
