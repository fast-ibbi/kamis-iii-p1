// bab-12 · 04 — kisah Rara dibaca sebagai rantai sebab, bukan sebagai daftar.
// Tiga simpul, bukan empat: `flow` menyisakan 100 unit per celah untuk label
// panah kalau simpulnya empat, dan label dua baris selebar 82 unit di celah
// 100 unit itu menempel ke kotak sebelah (temuan review). Dengan tiga simpul
// celahnya 118 unit, jadi "tanpa aturan tertulis" tetap terbaca utuh.
// Semua label diambil dari slide ini sendiri: "Tokosaya sejak 2019",
// "dua desainer lepas dan satu penulis konten", dan kutipan "takut salah klik
// pada website palsu".
export default {
  id: '04',
  slide: 'Contoh: Saat Aturan Visual Cuma Ada di Kepala Orang',
  pattern: 'flow',
  alt: 'Rantai tiga simpul: Tokosaya 2019 dikerjakan dua orang, lalu tim membesar karena Rara merekrut dua desainer lepas dan satu penulis konten, dan karena tak ada aturan tertulis pembeli jadi ragu dan takut website palsu.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'Tokosaya 2019', note: 'dikerjakan dua orang' },
      { label: 'Tim membesar', note: 'dua desainer lepas, satu penulis konten' },
      { label: 'Pembeli ragu', note: 'takut website palsu', tone: 'red' },
    ],
    edges: ['Rara merekrut', 'tanpa aturan tertulis'],
  },
}
