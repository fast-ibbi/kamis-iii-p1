// bab-05 · 40 — z-index hanya berlaku pada elemen yang diposisikan.
// Bentuk 2 lawan 2: baris kanan menjawab baris kiri. Yang dijawab bukan "berapa
// nilainya" (itu urusan slide berikutnya) melainkan "kenapa kadang diabaikan".
// Judul panel diambil dari istilah CSS-nya sendiri supaya terbaca sebagai keadaan.
export default {
  id: '40',
  slide: 'z-index pada Elemen Diposisikan',
  pattern: 'beforeAfter',
  imgWidth: 1160,
  alt: 'Dua keadaan: pada elemen static, z-index diabaikan sehingga badge kembali ke alur di bawah gambar; pada elemen diposisikan, top dan right diukur dari induk dan z-index 2 menaruh badge di depan.',
  data: {
    left: {
      title: 'STATIC',
      tone: 'red',
      items: [
        'z-index diabaikan browser',
        'badge kembali ke alur di bawah gambar',
      ],
    },
    right: {
      title: 'DIPOSISIKAN',
      tone: 'acc',
      items: [
        'top dan right diukur dari induk',
        'z-index 2 menaruh badge di depan',
      ],
    },
  },
}
