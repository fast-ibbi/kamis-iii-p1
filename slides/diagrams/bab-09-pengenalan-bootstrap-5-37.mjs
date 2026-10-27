// bab-09 · 37 (slide ke-37) — navbar di layar 375 px: logo 200 px, gap 24 px, ikon
// keranjang 56 px, jadi 280 px terpakai dan sisa 95 px menganggur karena grow nol.
// Kotak pencarian 400 px tidak dapat tempat — itu yang diganti `d-none d-md-block`.
export default {
  id: '37',
  slide: 'Contoh: Menyembunyikan Elemen dengan d-none d-md-block',
  pattern: 'mockup',
  alt: 'Baris navbar di wadah 375 piksel: logo 200 piksel, gap 24 piksel, ikon keranjang 56 piksel, sisa 95 piksel kosong di kanan; kotak pencarian disembunyikan.',
  imgWidth: 1120,
  data: {
    kind: 'flex',
    justify: 'flex-start',
    container: 375,
    gap: 24,
    items: [
      { label: 'logo', basis: 200 },
      { label: 'ikon keranjang', basis: 56 },
    ],
    footer: 'kotak pencarian disembunyikan',
  },
}
