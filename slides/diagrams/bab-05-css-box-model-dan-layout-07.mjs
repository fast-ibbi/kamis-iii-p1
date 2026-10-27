// bab-05 · 07 — padding vs margin sebagai dua model mental yang berbeda.
// Bentuk 2 lawan 2: tiap baris menjawab baris pasangannya. "Ruang napas dalam
// kartu" tidak digambar — fakta itu tinggal di catatan penyaji.
export default {
  id: '07',
  slide: 'Padding dan Margin Bukan Hal yang Sama',
  pattern: 'beforeAfter',
  alt: 'Padding adalah bagian dari tubuh elemen, jadi latar dan area klik ikut memenuhinya; margin berada di luar kotak, transparan, dan cuma menahan jarak ke kotak tetangga.',
  data: {
    left: {
      title: 'PADDING',
      tone: 'acc',
      items: [
        'bagian dari tubuh elemen itu sendiri',
        'klik dan latar ikut memenuhi seluruh area padding',
      ],
    },
    right: {
      title: 'MARGIN',
      tone: 'neutral',
      items: [
        'berada di luar kotak dan selalu transparan',
        'cuma menahan jarak ke kotak tetangga',
      ],
    },
  },
}
