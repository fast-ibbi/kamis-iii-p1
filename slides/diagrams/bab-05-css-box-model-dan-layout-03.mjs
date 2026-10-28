// bab-05 · 03 — satu properti, tiga nilai dasar. `tree` sengaja hanya satu
// tingkat: `note` dibuang oleh pattern ini, dan tiga anak dengan masing-masing
// satu cucu akan tampak sejajar karena elbow setinggi nol.
export default {
  id: '03',
  slide: 'Diagram: Tiga Jenis Kotak',
  pattern: 'tree',
  alt: 'Properti display memiliki tiga nilai dasar: block, inline, dan inline-block.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'display',
      children: [{ label: 'block' }, { label: 'inline' }, { label: 'inline-block' }],
    },
  },
}
