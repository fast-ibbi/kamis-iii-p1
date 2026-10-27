// bab-11 · 05 — satu form, empat kontrol yang menggantung padanya.
// Akar pohonnya satu form; itulah arti "terkirim sebagai satu kesatuan".
export default {
  id: '05',
  slide: 'Contoh: Form Itu Pintu Masuk Data',
  pattern: 'tree',
  alt: 'Satu form kontak Tokosaya menaungi empat kontrol: label Pesan, input email, select kategori, dan tombol Kirim Pesan, semuanya terkirim sebagai satu kesatuan.',
  data: {
    root: {
      label: 'form kontak Tokosaya',
      children: [
        { label: 'label Pesan' },
        { label: 'input email' },
        { label: 'select kategori' },
        { label: 'tombol Kirim Pesan' },
      ],
    },
  },
}
