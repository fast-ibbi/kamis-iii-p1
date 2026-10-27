// bab-14 · 19 — lima langkah translasi komponen sebagai rantai kerja.
// Panahnya memakai kata kerja langkah berikutnya, jadi urutannya terbaca dari
// gambar; contoh dan alasan tiap langkah tinggal di catatan penyaji.
export default {
  id: '19',
  slide: 'Lima Langkah Translasi Komponen',
  pattern: 'flow',
  alt: 'Lima langkah berurutan: tulis tujuan komponen, pilih elemen semantik, tentukan kelas Bootstrap, tulis CSS kustom bertoken, lalu bandingkan hasilnya dengan frame asli.',
  data: {
    steps: [
      { label: 'Tujuan', note: 'panel detail produk', tone: 'neutral' },
      { label: 'Elemen semantik', note: 'bukan sekadar kotak pembungkus', tone: 'neutral' },
      { label: 'Kelas Bootstrap', note: 'susunan dan grid', tone: 'neutral' },
      { label: 'CSS kustom', note: 'bertoken, dengan komentar', tone: 'neutral' },
      { label: 'Frame asli', note: 'bandingkan hasilnya', tone: 'acc' },
    ],
    edges: ['pilih', 'tentukan', 'tulis', 'bandingkan'],
  },
}
