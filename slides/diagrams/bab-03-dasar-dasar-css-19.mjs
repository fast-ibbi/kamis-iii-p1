// bab-03 · 19 — lima pseudo-class bercabang dari satu konsep.
// `tree` membuang `note`, jadi acuan tiap pseudo-class ditempel ke label simpul;
// angka outline dan warnanya tinggal di prosa slide.
// Label dijaga satu baris: dulu ":first-child — anak pertama elemen induknya"
// membungkus dua baris dan menyisakan kata "induknya" sendirian di dasar kotak.
export default {
  id: '19',
  slide: 'Contoh: Lima Pseudo-Class Dasar',
  pattern: 'tree',
  alt: 'Lima pseudo-class bercabang dari satu konsep: :hover kursor di atas elemen, :focus menerima fokus keyboard, :first-child anak pertama, :last-child anak terakhir, dan :nth-child() pola odd dan even.',
  imgWidth: 600,
  data: {
    // Kanvas 650 = tepi kanan isi tree satu tingkat (x 626) + padding 24. Di 1160
    // ~46% kanvas kosong dan labelnya cuma mengecil saat diskalakan ke slide.
    // imgWidth 600 menaikkan label 16px ke ~14.8px efektif (dulu 13.2px di w:960)
    // sambil menjaga tinggi gambar 330px supaya prosa tidak menabrak nomor halaman.
    canvas: [650, 358],
    root: {
      label: 'pseudo-class',
      children: [
        { label: ':hover — kursor di atas elemen' },
        { label: ':focus — menerima fokus keyboard' },
        { label: ':first-child — anak pertama' },
        { label: ':last-child — anak terakhir' },
        { label: ':nth-child() — pola odd dan even' },
      ],
    },
  },
}
