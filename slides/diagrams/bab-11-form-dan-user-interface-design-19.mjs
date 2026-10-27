// bab-11 · 19 — dua elemen, dua peran: textarea buat isian panjang, select buat
// pilihan terbatas. Dulu gambar ini cuma kotak textarea, padahal judulnya dua topik.
// Angka 320 × 120 / 346 / 134 tetap dibawa di baris ketiga panel kiri.
export default {
  id: '19',
  slide: 'Contoh: textarea dan select',
  pattern: 'beforeAfter',
  alt: 'Kiri textarea: buat isian panjang kayak pesan, area tulis 320 kali 120 piksel dari rows 5, lebar total 346 piksel dan tinggi 134 piksel. Kanan select: buat pilihan yang sudah jelas dan terbatas, pilihannya seragam, dan salah ketik berkurang.',
  data: {
    left: {
      title: 'TEXTAREA',
      tone: 'acc',
      items: [
        'buat isian panjang kayak pesan',
        'area tulis 320 × 120 px',
        'lebar total 346 px, tinggi 134 px',
      ],
    },
    right: {
      title: 'SELECT',
      tone: 'acc',
      items: [
        'buat pilihan yang sudah jelas dan terbatas',
        'pilihannya seragam',
        'salah ketik berkurang',
      ],
    },
  },
}
