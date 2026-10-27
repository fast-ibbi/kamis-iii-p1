// bab-12 · 20 — dua cara menamai warna: primitif lawan semantik.
// Baris pertama soal cara menamai, baris kedua soal apa yang terjadi saat
// nilainya diganti. `var()` dan `:root` tidak digambar — fakta itu tinggal
// di catatan penyaji.
export default {
  id: '20',
  slide: 'Token Primitif dan Token Semantik',
  pattern: 'beforeAfter',
  alt: 'Token primitif menyebut nilai tanpa konteks seperti indigo 600, token semantik menyebut peran seperti clr-danger; peran lebih stabil daripada nilai.',
  data: {
    left: {
      title: 'PRIMITIF',
      tone: 'neutral',
      items: [
        'menyebut nilai tanpa konteks: "indigo 600"',
        'nilai mentah #4F46E5 di halaman bikin sistem bocor',
      ],
    },
    right: {
      title: 'SEMANTIK',
      tone: 'acc',
      items: [
        'menyebut peran: --clr-danger buat pesan bahaya',
        'peran lebih stabil daripada nilai',
      ],
    },
  },
}
