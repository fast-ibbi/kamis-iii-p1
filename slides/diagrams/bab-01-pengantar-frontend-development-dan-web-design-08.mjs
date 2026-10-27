// bab-01 · 08 — frontend dan backend sebagai dua model kerja yang berdampingan.
// Tiap baris menjawab baris pasangannya: tempat kerja, teknologi, fokus, hasil,
// dan cara pengguna menilainya. Aksen cuma di sisi frontend, karena itu sisi
// yang dibangun sepanjang buku ini.
export default {
  id: '08',
  slide: 'Frontend vs Backend',
  pattern: 'beforeAfter',
  alt: 'Frontend bekerja di browser pengguna dengan HTML, CSS, dan framework antarmuka; backend bekerja di server dengan bahasa server dan basis data. Fokus frontend tampilan dan aksesibilitas, fokus backend keandalan dan keamanan.',
  data: {
    left: {
      title: 'FRONTEND',
      tone: 'acc',
      items: [
        'bekerja di browser pengguna',
        'HTML, CSS, framework antarmuka',
        'tampilan, responsif, aksesibilitas',
        'kartu produk, tombol, formulir',
        'dinilai rapi dan mudah',
      ],
    },
    right: {
      title: 'BACKEND',
      tone: 'neutral',
      items: [
        'bekerja di server',
        'bahasa server plus basis data',
        'keandalan, keamanan, kinerja',
        'stok berkurang, pesanan tersimpan',
        'dinilai cepat, akurat, nggak bocor',
      ],
    },
  },
}
