// bab-09 · 15 (slide ke-15) — satu paket, dua cabang. Bagian CSS yang dipakai lewat
// CDN, bagian JavaScript yang bundle-nya sengaja tidak dimuat.
export default {
  id: '15',
  slide: 'Contoh: Apa Itu Bootstrap 5',
  pattern: 'tree',
  alt: 'Bootstrap 5.3.3 punya dua bagian: CSS yang menyumbang grid 12 kolom dan komponen, serta JavaScript yang bundle tidak dimuat.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'Bootstrap 5.3.3',
      children: [
        { label: 'CSS', tone: 'acc', children: [{ label: 'grid 12 kolom' }, { label: 'komponen' }] },
        { label: 'JavaScript', children: [{ label: 'bundle tidak dimuat', tone: 'red' }] },
      ],
    },
  },
}
