// bab-12 · 04 — kisah Rara dibaca sebagai rantai, bukan sebagai daftar.
// Semua angka dan label diambil dari slide ini sendiri: "Tokosaya sejak 2019",
// "dua desainer lepas", "dalam dua minggu, tombol indigo berubah jadi tiga
// warna", dan kutipan "takut salah klik pada website palsu". Rantai inilah yang
// menjelaskan kenapa ketiadaan aturan tertulis berujung pada keraguan pembeli.
export default {
  id: '04',
  slide: 'Contoh: Saat Aturan Visual Cuma Ada di Kepala Orang',
  pattern: 'flow',
  alt: 'Rantai empat simpul: Tokosaya 2019 dikerjakan dua orang, tim membesar karena Rara merekrut dua desainer lepas, dalam dua minggu lahir tiga warna dan tiga lengkung, lalu kepercayaan turun sampai pembeli ragu.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'Tokosaya 2019', note: 'dikerjakan dua orang' },
      { label: 'Tim membesar', note: 'dua desainer lepas' },
      { label: 'Dua minggu', note: 'tiga warna, tiga lengkung' },
      { label: 'Pembeli ragu', note: 'takut website palsu', tone: 'red' },
    ],
    edges: ['Rara merekrut', 'tanpa aturan tertulis', 'kepercayaan turun'],
  },
}
