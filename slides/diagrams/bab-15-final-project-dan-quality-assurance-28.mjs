// bab-15 · 28 — lima langkah QA sprint berurutan, tiap panah adalah syarat lolos
// langkah sebelumnya. "45 menit" dan "pekerjaan bareng di layar" tinggal di catatan.
export default {
  id: '28',
  slide: 'Langkah Kerja 1–5',
  pattern: 'flow',
  alt: 'Lima langkah kerja QA sprint berurutan: konfirmasi draft M6, audit struktur di validator W3C, audit responsif tiga breakpoint, audit aksesibilitas lima pemeriksaan, lalu peer review silang.',
  data: {
    steps: [
      { label: 'Draft M6', note: 'lengkap dulu' },
      { label: 'Audit struktur', note: 'validator W3C' },
      { label: 'Audit responsif', note: '360 · 768 · 992 px' },
      { label: 'Audit aksesibilitas', note: 'lima pemeriksaan wajib' },
      { label: 'Peer review', note: 'satu rekan sekelas', tone: 'acc' },
    ],
    edges: ['draft lengkap', 'tanpa kesalahan', 'tiga breakpoint', 'wajib lolos'],
  },
}
