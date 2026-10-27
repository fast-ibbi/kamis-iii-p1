// bab-03 · 12 — tiga jenis selector sebagai cabang dari satu konsep.
// `tree` membuang `note`, jadi kapan-pakainya ditempel ke label simpul; bentuk
// penulisan `p`, `.hero-title`, dan `#pengantar` tinggal di catatan penyaji.
export default {
  id: '12',
  slide: 'Tiga Selector Dasar',
  pattern: 'tree',
  alt: 'Tiga jenis selector bercabang dari satu konsep: elemen untuk aturan global semua elemen bertipe itu, class untuk gaya yang dipakai ulang di banyak elemen, dan id untuk satu titik jangkar khusus per halaman.',
  data: {
    root: {
      label: 'selector',
      children: [
        { label: 'elemen — global buat semua elemen bertipe itu' },
        { label: 'class — gaya yang dipakai ulang di banyak elemen' },
        { label: 'id — satu titik jangkar khusus per halaman' },
      ],
    },
  },
}
