// bab-13 · 24 — siapa yang dilayani satu halaman, bukan satu orang.
// Empat cabang, bukan enam bullet: satu root pengguna dan empat kelompok yang
// masing-masing menuntut perbaikan berbeda (alt, urutan fokus, kontras, berat
// gambar). Rincian perbaikan tinggal di prosa slide.
export default {
  id: '24',
  slide: 'Contoh: Aksesibilitas Itu Soal Siapa yang Bisa Pakai',
  pattern: 'tree',
  alt: 'Pohon dari satu root Pengguna Tokosaya yang bercabang empat: pengguna screen reader, pengguna cuma keyboard, pengguna dengan penglihatan terbatas, dan pengguna koneksi lambat.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'Pengguna Tokosaya',
      children: [
        { label: 'pengguna screen reader', tone: 'acc' },
        { label: 'pengguna cuma keyboard' },
        { label: 'penglihatan terbatas' },
        { label: 'koneksi lambat' },
      ],
    },
  },
}
