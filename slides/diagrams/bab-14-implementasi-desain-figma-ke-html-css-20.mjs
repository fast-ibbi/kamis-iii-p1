// bab-14 · 20 — panel Local styles di Figma punya dua cabang saja: text style
// dan color style. Isi tiap cabang diwakili contoh ujung-ujungnya (Title 1
// terbesar, Caption terkecil) supaya angkanya tetap dari tabel deck ini.
export default {
  id: '20',
  slide: 'Contoh: Text Style dan Color Style',
  pattern: 'tree',
  alt: 'Panel Local styles bercabang dua: text style berisi Title 1 32 px sampai Caption 14 px, dan color style berisi Warna/Primary #4F46E5 serta Warna/Body #334155.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'Local styles',
      children: [
        {
          label: 'text style',
          children: [{ label: 'Title 1 32 px' }, { label: 'Caption 14 px' }],
        },
        {
          label: 'color style',
          children: [{ label: 'Warna/Primary #4F46E5' }, { label: 'Warna/Body #334155' }],
        },
      ],
    },
  },
}
