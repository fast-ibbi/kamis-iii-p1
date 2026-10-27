// bab-15 · 14 — urutan baca style.css: token :root di puncak, lalu base,
// komponen, dan halaman. Urutan lapisnya sendiri yang jadi isi gambar.
export default {
  id: '14',
  slide: 'Contoh: CSS yang Bersih',
  pattern: 'layers',
  alt: 'Empat lapis file style.css dari atas: token :root untuk warna, radius, dan jarak, lalu base untuk reset dan tipografi dasar, lalu komponen untuk kartu dan tombol, terakhir halaman untuk gaya khusus kontak.',
  imgWidth: 1120,
  data: {
    layers: [
      { label: 'token :root', note: 'warna, radius, jarak' },
      { label: 'base', note: 'reset dan tipografi dasar' },
      { label: 'komponen', note: 'kartu dan tombol' },
      { label: 'halaman', note: 'gaya khusus kontak' },
    ],
  },
}
