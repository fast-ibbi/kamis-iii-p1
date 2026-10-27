// bab-12 · 28 — lima manfaat digambar sebagai lima pasangan yang saling
// menjawab, bukan sebagai pohon lima daun yang isinya persis butir induknya.
// Panel kiri menyebut harga kalau design system tidak ada, panel kanan manfaat
// yang dibayar: konsistensi, kecepatan, pemeliharaan, komunikasi, adaptasi —
// baris 1 lawan baris 1, sampai baris 5 lawan baris 5. Pohon lima daun yang
// lama juga kembar dengan Contoh: Apa Itu Design System, jadi bentuknya diganti.
export default {
  id: '28',
  slide: 'Contoh: Lima Manfaat Design System',
  pattern: 'beforeAfter',
  alt: 'Dua panel berpasangan baris per baris: tanpa design system, tiap halaman menafsir warna sendiri, dimulai dari nol, ganti satu warna sisanya ketinggalan, tiap komponen punya nama sendiri, anggota baru harus bertanya ke orang; dengan design system, semua halaman lahir dari token yang sama, tim menyalin pola, ganti satu token semua halaman ikut berubah, satu kosakata buat menyebut komponen, anggota baru cukup membaca satu halaman.',
  imgWidth: 1080,
  data: {
    left: {
      title: 'TANPA DESIGN SYSTEM',
      tone: 'red',
      items: [
        'tiap halaman menafsir warna sendiri',
        'tiap halaman dimulai dari nol',
        'ganti satu warna dan sisanya ketinggalan',
        'tiap komponen punya nama sendiri',
        'anggota baru harus bertanya ke orang',
      ],
    },
    right: {
      title: 'DENGAN DESIGN SYSTEM',
      tone: 'acc',
      items: [
        'konsistensi: semua halaman lahir dari token yang sama',
        'kecepatan: tim menyalin pola dan tidak mulai dari nol',
        'pemeliharaan: ganti satu token dan semua halaman ikut berubah',
        'komunikasi: satu kosakata buat menyebut komponen',
        'adaptasi: anggota baru cukup membaca satu halaman',
      ],
    },
  },
}
