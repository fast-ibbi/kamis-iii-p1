// bab-14 · 40 — dua kebiasaan fidelity sebagai satu urutan kerja yang berulang
// per komponen: salin nilai, beri nama token, bandingkan, lalu lanjut.
// Catatan tiap tahap sengaja dikosongkan supaya gambarnya tetap satu baris fakta.
export default {
  id: '40',
  slide: 'Contoh: Dua Kebiasaan Menjaga Fidelity',
  pattern: 'flow',
  alt: 'Empat langkah berulang: salin nilai apa adanya, beri nama jadi token, bandingkan, lalu lanjut komponen berikutnya.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'Salin nilai', tone: 'neutral' },
      { label: 'Beri nama', tone: 'neutral' },
      { label: 'Bandingkan', tone: 'neutral' },
      { label: 'Lanjut komponen', tone: 'acc' },
    ],
    edges: ['apa adanya', 'jadi token', 'lalu uji'],
  },
}
