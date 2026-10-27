// bab-12 · 19 — angka 32 dan 14 piksel datang langsung dari slide Contrast:
// "Judul 32 piksel dibanding keterangan 14 piksel". Kedua sisi memakai sumbu
// yang sama (satu kartu produk), jadi beforeAfter. id 19 dipakai karena id 20
// sudah terpakai spec "Token Primitif dan Token Semantik".
export default {
  id: '19',
  slide: 'Contoh: Contrast',
  pattern: 'beforeAfter',
  alt: 'Satu kartu produk dengan dua pengaturan kontras: semua sama membuat tidak ada yang menonjol, sedangkan judul 32 piksel dan keterangan 14 piksel memberi satu tumpuan.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'SEMUA SAMA',
      tone: 'red',
      items: [
        'judul dan keterangan satu ukuran',
        'tidak ada yang menonjol',
        'mata tidak tahu mulai dari mana',
      ],
    },
    right: {
      title: 'ADA TUMPUAN',
      tone: 'acc',
      items: [
        'judul 32 piksel, keterangan 14 piksel',
        'teks --clr-body di kartu putih',
        'satu pembeda, bukan halaman warna-warni',
      ],
    },
  },
}
