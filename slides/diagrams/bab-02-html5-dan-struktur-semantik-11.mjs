// bab-02 · 11 — dua model tautan: relatif (di dalam proyek) lawan absolut (alamat lengkap).
// Blok kode di slide tetap; yang pindah ke catatan hanya bullet "teks link" dan
// "buka tab baru". Satu aksen saja: sisi relatif, karena itulah yang dipakai praktikum.
export default {
  id: '11',
  slide: 'Link yang Jelas',
  pattern: 'beforeAfter',
  alt: 'Link relatif menghubungkan halaman di dalam proyek dan tetap berfungsi walau folder proyek dipindahkan; link absolut menyertakan alamat lengkap dan dipakai kalau memang perlu membuka tab baru.',
  data: {
    left: {
      title: 'LINK RELATIF',
      tone: 'acc',
      items: [
        'href-nya cukup nama file',
        'untuk semua tautan antarahalaman Tokosaya',
      ],
    },
    right: {
      title: 'LINK ABSOLUT',
      tone: 'neutral',
      items: [
        'href-nya alamat lengkap',
        'buka tab baru cuma kalau memang perlu buat link eksternal',
      ],
    },
  },
}
