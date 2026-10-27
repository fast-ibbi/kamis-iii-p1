// bab-13 · 23 — teks link yang cuma menunjuk dirinya sendiri lawan yang menyebut tujuan.
// Bentuk 2 lawan 2: tiap baris kanan memperbaiki baris kiri. Uji "kumpulkan semua link
// jadi satu daftar" tidak digambar — fakta itu tinggal di catatan penyaji.
export default {
  id: '23',
  slide: 'Link yang Jelas Dibaca Sendiri',
  pattern: 'beforeAfter',
  alt: 'Link yang nggak jelas cuma bilang klik di sini atau selengkapnya dan ikon keranjang tanpa aria-label; link yang jelas menyebut tujuannya seperti Lihat katalog keyboard, tetap masuk akal dibaca terpisah, dan ikon keranjang wajib punya aria-label.',
  data: {
    left: {
      title: 'LINK NGGAK JELAS',
      tone: 'neutral',
      items: [
        '"klik di sini" nggak menyebut tujuan',
        '"selengkapnya" nggak menyebut tujuan',
        'ikon keranjang tanpa aria-label',
      ],
    },
    right: {
      title: 'LINK JELAS',
      tone: 'acc',
      items: [
        '"Lihat katalog keyboard" menyebut tujuannya',
        'tetap masuk akal dibaca terpisah',
        'ikon keranjang wajib punya aria-label',
      ],
    },
  },
}
