// bab-03 · 03 — empat keluhan pemilik Tokosaya dan penyebab yang sebenarnya.
// Tabel dua kolom lama diganti gambar; pasangannya dibacakan dari catatan penyaji.
export default {
  id: '03',
  slide: 'Struktur Rapi, Tampilan Belum',
  pattern: 'beforeAfter',
  alt: 'Empat keluhan pemilik Tokosaya saat membuka pratinjau, dan penyebab sebenarnya di tiap baris: font serif bawaan, gaya bawaan browser, belum ada aturan gaya, dan pesaing yang sudah punya lapisan penataan.',
  data: {
    left: {
      title: 'YANG DIA LIHAT',
      tone: 'red',
      items: [
        'semua huruf terasa sama',
        'link biru tua bergaris bawah',
        'tak ada warna brand Tokosaya',
        'website pesaing tampak rapi',
      ],
    },
    right: {
      title: 'YANG SEBENARNYA TERJADI',
      tone: 'acc',
      items: [
        'browser memakai font serif bawaan',
        'gaya bawaan browser, bukan pilihan kita',
        'belum ada satu aturan gaya pun',
        'mereka udah punya lapisan penataan',
      ],
    },
  },
}
