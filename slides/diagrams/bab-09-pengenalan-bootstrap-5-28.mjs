// bab-09 · 28 — dua alat untuk dua jenis gaya: utility sekali pakai lawan kelas
// kustom untuk pola berulang. Bentuk 2 lawan 3; hanya sisi kustom yang beraksen
// karena di situlah identitas Tokosaya disimpan.
export default {
  id: '28',
  slide: 'Utility atau CSS Kustom',
  pattern: 'beforeAfter',
  alt: 'Utility dipakai buat gaya umum sekali pakai seperti jarak, perataan, tampil, dan sembunyi; kelas kustom dipakai saat pola berulang diangkat jadi kelas seperti produk-card dan produk-harga, dan identitas merek tetap berpangkal design token di :root.',
  data: {
    left: {
      title: 'UTILITY',
      tone: 'neutral',
      items: ['gaya umum sekali pakai', 'jarak, perataan, tampil, sembunyi'],
    },
    right: {
      title: 'KELAS KUSTOM',
      tone: 'acc',
      items: [
        'pola berulang diangkat jadi kelas kustom',
        'contoh: produk-card, produk-harga',
        'identitas merek tetap berpangkal design token',
      ],
    },
  },
}
