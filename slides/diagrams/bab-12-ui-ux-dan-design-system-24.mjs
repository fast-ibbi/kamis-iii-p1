// bab-12 · 24 — dua keluarga huruf dan peran yang dipikulnya.
// `tree` membuang note, jadi bobot dan nama elemen (h1, .lead, body) tidak
// ditempel ke simpul — semuanya pindah ke catatan penyaji. Hanya akar yang
// beraksen, dan akar itu sudah beraksen bawaan kit.
export default {
  id: '24',
  slide: 'Sistem Tipografi',
  pattern: 'tree',
  alt: 'Dua keluarga huruf di Tokosaya: Poppins memikul judul hero, judul halaman, dan judul kartu; Inter memikul subjudul dan paragraf.',
  data: {
    root: {
      label: 'Dua keluarga huruf',
      children: [
        {
          label: 'Poppins',
          children: [{ label: 'judul hero' }, { label: 'judul halaman' }, { label: 'judul kartu' }],
        },
        {
          label: 'Inter',
          children: [{ label: 'subjudul' }, { label: 'paragraf' }],
        },
      ],
    },
  },
}
