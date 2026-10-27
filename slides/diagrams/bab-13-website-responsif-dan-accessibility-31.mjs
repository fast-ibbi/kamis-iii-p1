// bab-13 · 31 — satu pasangan warna, dua nasib: yang berubah cuma warna teks.
// Sumbu yang sama (rasio kontras), jadi beforeAfter memang bentuk yang benar:
// putih di atas amber 2,1:1 gagal AA, teks gelap di atas amber yang sama 6,8:1
// lolos. Amber = --clr-accent #F59E0B, teks gelap = --clr-dark #1E293B.
export default {
  id: '31',
  slide: 'Contoh: Kontras AA: 4,5:1 dan 3:1',
  pattern: 'beforeAfter',
  alt: 'Dua panel: teks putih di atas amber dengan rasio 2,1:1 yang gagal AA karena ambang teks normal 4,5:1; dan teks gelap di atas amber yang sama dengan rasio 6,8:1 yang lolos AA.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'PUTIH DI ATAS AMBER',
      tone: 'neutral',
      items: ['rasio 2,1:1', 'ambang teks normal 4,5:1', 'gagal AA'],
    },
    right: {
      title: 'TEKS GELAP DI ATAS AMBER',
      tone: 'acc',
      items: ['rasio 6,8:1', 'di atas 4,5:1', 'lolos AA'],
    },
  },
}
