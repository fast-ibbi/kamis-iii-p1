// bab-11 · 05 — satu form, lima kontrol yang menggantung padanya.
// Akar pohonnya satu form; itulah arti "terkirim sebagai satu kesatuan".
// Label sengaja tidak ikut jadi anak: label bukan kontrol, ia hanya nama medan.
export default {
  id: '05',
  slide: 'Contoh: Form Itu Pintu Masuk Data',
  imgWidth: 1080,
  pattern: 'tree',
  alt: 'Satu form kontak Tokosaya menaungi lima kontrol: input nama, input email, select kategori, textarea pesan, dan tombol Kirim Pesan, semuanya terkirim sebagai satu kesatuan.',
  data: {
    root: {
      label: 'form kontak Tokosaya',
      children: [
        { label: 'input nama' },
        { label: 'input email' },
        { label: 'select kategori' },
        { label: 'textarea pesan' },
        { label: 'tombol Kirim Pesan' },
      ],
    },
  },
}
