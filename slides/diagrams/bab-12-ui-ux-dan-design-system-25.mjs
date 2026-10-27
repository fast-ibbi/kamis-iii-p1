// bab-12 · 25 — design system sebagai containment, bukan sebagai daftar bullet:
// lima isi ("token, komponen, pola, aturan, dokumentasi") menggantung dari satu
// berkas induk. Contoh isinya diambil dari kelas dan token yang sudah dipakai
// sepanjang bab ini: --clr-primary, --radius, p-kartu, .btn-utama, styleguide.html.
export default {
  id: '25',
  slide: 'Contoh: Apa Itu Design System',
  pattern: 'tree',
  alt: 'Satu berkas induk Design System Tokosaya dengan lima cabang: token, komponen, pola, aturan, dan dokumentasi.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'Design System Tokosaya',
      children: [
        { label: 'token' },
        { label: 'komponen' },
        { label: 'pola' },
        { label: 'aturan' },
        { label: 'dokumentasi' },
      ],
    },
  },
}
