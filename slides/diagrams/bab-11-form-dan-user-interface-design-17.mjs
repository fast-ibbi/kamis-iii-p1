// bab-11 · 17 — jebakan tombol tanpa type di dalam form.
// Rantai bawaannya: tanpa type, dianggap tombol kirim, form langsung terkirim.
export default {
  id: '17',
  slide: 'button dan Perilaku Bawaannya',
  pattern: 'flow',
  alt: 'Tombol pendamping tanpa type di dalam form dianggap tombol kirim, sehingga form langsung terkirim tanpa sengaja.',
  data: {
    steps: [
      { label: 'Tombol Pakai', note: 'tombol pendamping kupon' },
      { label: 'Dianggap tombol kirim', note: 'perilaku bawaan HTML' },
      { label: 'Form terkirim', note: 'tanpa sengaja', tone: 'acc' },
    ],
    edges: ['lupa type', 'langsung'],
  },
}
