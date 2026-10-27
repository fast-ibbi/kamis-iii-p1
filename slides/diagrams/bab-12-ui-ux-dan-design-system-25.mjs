// bab-12 · 25 — design system sebagai containment, dan containment-nya diisi.
// Sebelumnya gambar ini cuma mengulang lima butir induknya (token, komponen,
// pola, aturan, dokumentasi) tanpa menambah satu pun informasi, dan bentuknya
// kembar dengan Contoh: Lima Manfaat empat slide kemudian (temuan review).
// Sekarang setiap cabang yang punya contoh konkret menggantungkan contohnya:
// token -> --clr-primary, komponen -> p-kartu, dokumentasi -> styleguide.html.
// Sembilan simpul, tepat di batas aman `tree`, dan kedalamannya dua level.
export default {
  id: '25',
  slide: 'Contoh: Apa Itu Design System',
  pattern: 'tree',
  alt: 'Satu berkas induk Design System Tokosaya dengan lima cabang, tiga di antaranya membawa contoh: token berisi clr-primary, komponen berisi p-kartu, dokumentasi berisi styleguide.html; cabang pola dan aturan tidak diberi contoh.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'Design System Tokosaya',
      children: [
        { label: 'token', children: [{ label: 'clr-primary' }] },
        { label: 'komponen', children: [{ label: 'p-kartu' }] },
        { label: 'pola' },
        { label: 'aturan' },
        { label: 'dokumentasi', children: [{ label: 'styleguide.html' }] },
      ],
    },
  },
}
