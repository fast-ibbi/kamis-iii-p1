// bab-09 · 12 — enam kelompok fasilitas Bootstrap 5 sebagai peta.
// `tree` membuang `note`, jadi isi tiap kelompok ditempel ke label simpulnya;
// contoh ikon yang dipasang terpisah tinggal di catatan penyaji.
export default {
  id: '12',
  slide: 'Enam Kelompok Fasilitas',
  pattern: 'tree',
  alt: 'Enam kelompok fasilitas Bootstrap 5: layout berisi container dan grid system, content berisi reboot, tipografi, dan tabel, forms berisi gaya elemen isian, components berisi navbar, kartu, dan badge, helpers berisi kelas bantu kombinasi, utilities berisi kelas kecil buat jarak.',
  data: {
    root: {
      label: 'Bootstrap 5',
      children: [
        { label: 'Layout — container dan grid system' },
        { label: 'Content — reboot, tipografi, tabel' },
        { label: 'Forms — gaya elemen isian' },
        { label: 'Components — navbar, kartu, badge' },
        { label: 'Helpers — kelas bantu kombinasi' },
        { label: 'Utilities — kelas kecil buat jarak' },
      ],
    },
  },
}
