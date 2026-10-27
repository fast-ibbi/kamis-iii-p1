// bab-12 · 23 — do dan don't warna, tiga baris berpasangan.
// Hijau untuk yang dianjurkan, merah untuk yang dilarang; tidak ada aksen biru
// di gambar ini supaya pasangan warnanya tetap satu-satunya sinyal.
export default {
  id: '23',
  slide: "Do dan Don't Warna",
  pattern: 'beforeAfter',
  alt: 'Tiga aturan warna yang dianjurkan berdampingan dengan tiga larangan: satu warna utama, pasangan semantik tetap, catat di styleguide lawan merah kedua, warna sebagai satu-satunya makna, dan nilai mentah di luar root.',
  data: {
    left: {
      title: 'DO',
      tone: 'green',
      items: [
        'satu warna utama buat semua aksi penting',
        'hijau sukses, merah bahaya, kuning sorotan',
        'catat pasangan warna dan teks di styleguide',
      ],
    },
    right: {
      title: "DON'T",
      tone: 'red',
      items: [
        'bikin merah kedua yang mirip',
        'pakai warna sebagai satu-satunya penyampai makna',
        'tulis nilai mentah di luar :root',
      ],
    },
  },
}
