// bab-03 · 27 — lima satuan CSS dan acuan masing-masing.
// Kelimanya alternatif, bukan bertingkat: yang membedakan hanya acuannya. Jadi
// `tree` (lima cabang dari satu konsep), bukan `layers` yang menyiratkan strata.
// Urutan cabang sengaja sama dengan urutan butir di slide konsep "Lima Satuan CSS",
// supaya dua slide berurutan tidak saling bertentangan tanpa penjelasan.
export default {
  id: '27',
  slide: 'Contoh: Lima Satuan CSS',
  pattern: 'tree',
  alt: 'Lima satuan CSS bercabang dari satu konsep, masing-masing dengan acuannya: px nilai tetap, % ikut kotak induk, em ikut font elemen sendiri, rem ikut font akar, dan vw dan vh ikut viewport.',
  imgWidth: 600,
  data: {
    // Kanvas 650 = tepi kanan isi tree satu tingkat (x 626) + padding 24. Di 1160
    // sisa kanan kosong ~46% dan labelnya cuma mengecil saat diskalakan ke slide.
    // imgWidth 600 menjaga tinggi gambar 330px supaya tiga baris prosa tetap
    // berada di atas nomor halaman.
    canvas: [650, 358],
    root: {
      label: 'Satuan CSS',
      children: [
        { label: 'px nilai tetap' },
        { label: '% ikut kotak induk' },
        { label: 'em ikut font elemen sendiri' },
        { label: 'rem ikut font akar' },
        { label: 'vw dan vh ikut viewport' },
      ],
    },
  },
}
