// bab-14 · 25 — dua kehati-hatian sebagai dua cabang, bukan dua paragraf.
// Cabang font memuat panggilan dan penggantinya; cabang kontras memuat pasangan
// warna yang sudah ada di slide token.
export default {
  id: '25',
  slide: 'Contoh: Dua Kehati-hatian Sejak Awal',
  pattern: 'tree',
  alt: 'Dua cabang kehati-hatian: font yang dipanggil lewat Google Fonts dengan fallback sans-serif, dan kontras #334155 di atas #FFFFFF.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'dua kehati-hatian',
      children: [
        {
          label: 'font',
          children: [{ label: 'Google Fonts' }, { label: 'fallback sans-serif' }],
        },
        {
          label: 'kontras',
          children: [{ label: '#334155' }, { label: 'di atas #FFFFFF' }],
        },
      ],
    },
  },
}
