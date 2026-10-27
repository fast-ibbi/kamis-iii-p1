// bab-11 · 40 — urutan tab = urutan dokumen, bukan urutan yang kelihatan keren.
// Lima perhentian mengikuti isi kontak.html yang sebenarnya: Nama, Telepon, Email,
// Kategori, lalu tombol Kirim Pesan. Textarea Pesan juga kena Tab di antaranya,
// dan itu disebut di slide, bukan didiamkan.
export default {
  id: '40',
  slide: 'Contoh: Fokus Harus Terlihat dan Urutan Tab',
  pattern: 'flow',
  alt: 'Lima perhentian fokus di form kontak berurutan: Nama sebagai perhentian pertama, lalu Telepon, Email, dan Kategori karena select ikut kena Tab, dan Kirim Pesan sebagai perhentian terakhir. Textarea Pesan juga kena Tab di antara Kategori dan tombol.',
  data: {
    steps: [
      { label: 'Nama', note: 'perhentian pertama' },
      { label: 'Telepon', note: 'medan kedua' },
      { label: 'Email', note: 'medan ketiga' },
      { label: 'Kategori', note: 'select ikut kena Tab' },
      { label: 'Kirim Pesan', note: 'perhentian terakhir', tone: 'acc' },
    ],
    edges: ['Tab', 'Tab', 'Tab', 'Tab'],
  },
}
