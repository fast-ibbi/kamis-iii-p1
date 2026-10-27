// bab-10 · 29 — dua pemakaian ikon yang menuntut atribut aksesibilitas berbeda.
// Sisi kiri (ikon dekoratif) yang dipakai berulang di Tokosaya, jadi ia beraksen;
// sisi kanan netral. Aturan kelas `bi bi-...` tinggal di catatan penyaji.
export default {
  id: '29',
  slide: 'Bootstrap Icons dan Tiga Aturan Praktis',
  pattern: 'beforeAfter',
  alt: 'Ikon dekoratif yang duduk di sebelah kata yang menjelaskan diberi aria-hidden true; ikon yang berdiri sendiri tanpa kata pendamping butuh aria-label.',
  data: {
    left: {
      title: 'IKON DEKORATIF',
      tone: 'acc',
      // The attribute string trips the codeish heuristic on one item only; forcing
      // sans here keeps both panels in the same type, like every other figure.
      mono: false,
      items: ['di sebelah kata yang menjelaskan', 'diberi aria-hidden="true"'],
    },
    right: {
      title: 'IKON BERDIRI SENDIRI',
      tone: 'neutral',
      items: ['tanpa kata pendamping', 'butuh aria-label'],
    },
  },
}
