// bab-13 · 31 — satu pasangan warna, dua nasib: yang berubah cuma warna teks.
// Kedua panel sengaja memakai tone amber yang sama, bukan neutral vs aksen:
// slide ini bilang "latarnya tetap amber yang sama", jadi gambarnya juga harus
// dua panel berwarna sama. Yang dibandingkan di dalamnya rasio teks — 2,1:1
// lawan 6,8:1 di atas ambang teks normal 4,5:1 — bukan reproduksi warna: kit ini
// menggambar panel bertinta, jadi pasangan putih-di-atas-amber yang asli tetap
// dibuka di color picker DevTools, dan catatan presenter menyebut itu.
export default {
  id: '31',
  slide: 'Contoh: Kontras AA: 4,5:1 dan 3:1',
  pattern: 'beforeAfter',
  alt: 'Dua panel amber sejajar, masing-masing menyebut pasangan warna yang diuji. Kiri, putih di atas amber: rasio 2,1:1, ambang teks normal 4,5:1, gagal AA. Kanan, teks gelap di atas amber yang sama: rasio 6,8:1, ambang teks normal 4,5:1, lolos AA.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'PUTIH DI ATAS AMBER',
      tone: 'amber',
      items: ['rasio 2,1:1', 'ambang teks normal 4,5:1', 'gagal AA'],
    },
    right: {
      title: 'TEKS GELAP DI ATAS AMBER',
      tone: 'amber',
      items: ['rasio 6,8:1', 'ambang teks normal 4,5:1', 'lolos AA'],
    },
  },
}
