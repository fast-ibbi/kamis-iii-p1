// bab-11 · 23 — fieldset sebagai wadah: legend jadi judul, tiga radio jadi isi.
// Konteks kelompok terbawa karena radionya memang anak dari fieldset itu.
export default {
  id: '23',
  slide: 'Contoh: fieldset dan legend',
  pattern: 'tree',
  alt: 'Satu fieldset Pilihan Pengiriman memuat legend sebagai judul kelompok dan tiga radio di dalamnya: radio pertama, radio kedua, dan radio ketiga.',
  data: {
    root: {
      label: 'fieldset Pilihan Pengiriman',
      children: [
        { label: 'legend' },
        { label: 'radio pertama' },
        { label: 'radio kedua' },
        { label: 'radio ketiga' },
      ],
    },
  },
}
