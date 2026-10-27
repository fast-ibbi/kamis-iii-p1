// bab-11 · 40 — urutan tab = urutan dokumen, bukan urutan yang kelihatan keren.
// Empat perhentian, tiga panah, semuanya panah Tab yang sama.
export default {
  id: '40',
  slide: 'Contoh: Fokus Harus Terlihat dan Urutan Tab',
  pattern: 'flow',
  alt: 'Empat perhentian fokus di form kontak: Nama sebagai perhentian pertama, Email dan medan berikutnya, Kategori karena select ikut kena Tab, lalu Kirim Pesan sebagai perhentian terakhir.',
  data: {
    steps: [
      { label: 'Nama', note: 'perhentian pertama' },
      { label: 'Email', note: 'medan berikutnya' },
      { label: 'Kategori', note: 'select ikut kena Tab' },
      { label: 'Kirim Pesan', note: 'perhentian terakhir', tone: 'acc' },
    ],
    edges: ['Tab', 'Tab', 'Tab'],
  },
}
