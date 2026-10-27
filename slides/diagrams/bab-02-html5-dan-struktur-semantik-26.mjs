// bab-02 · 26 — urutan pemeriksaan halaman sebelum CSS ditambahkan.
// Empat langkah berurutan; tiap langkah hanya berguna setelah langkah sebelumnya.
// Tahap terakhir dapat aksen (bawaan pola), tiga lainnya netral.
export default {
  id: '26',
  slide: 'Periksa Hasil di Browser',
  pattern: 'flow',
  alt: 'Empat langkah memeriksa halaman: buka index.html dan periksa judul tab, baca urutan isi, klik link Tentang lalu kembali, lalu periksa struktur elemen di DevTools.',
  data: {
    steps: [
      { label: 'Buka', note: 'periksa judul tab' },
      { label: 'Baca', note: 'urutan isi dari atas ke bawah' },
      { label: 'Klik', note: 'link Tentang, lalu kembali' },
      { label: 'Periksa', note: 'struktur elemen dengan DevTools', tone: 'acc' },
    ],
    edges: ['lalu', 'lalu', 'lalu'],
  },
}
