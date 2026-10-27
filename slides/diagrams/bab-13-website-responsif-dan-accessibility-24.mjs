// bab-13 · 24 — siapa yang dilayani satu halaman, bukan satu orang.
// Pohon tiga tingkat, bukan satu root dengan empat anak: tanpa cucu, setengah
// kanan kanvas kosong dan pohonnya duduk di kiri gambar. Tiap kelompok pengguna
// membawa perbaikan yang dia butuhkan (alt, urutan fokus, kontras, gambar
// ringan), jadi cabangnya juga yang menamai pekerjaannya. Sembilan simpul —
// batas atas pola ini — supaya labelnya masih terbaca di proyektor.
// Label bersaudara memakai awalan "pengguna" yang sama: kalau dua baris pertama
// berawalan dan dua berikutnya tidak, barisnya terbaca seperti bukan saudara.
export default {
  id: '24',
  slide: 'Contoh: Aksesibilitas Itu Soal Siapa yang Bisa Pakai',
  pattern: 'tree',
  alt: 'Pohon dari satu root Pengguna Tokosaya yang bercabang empat: pengguna screen reader dengan alt yang bermakna, pengguna cuma keyboard dengan urutan fokus, pengguna dengan penglihatan terbatas dengan kontras, dan pengguna koneksi lambat dengan gambar yang ringan.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'Pengguna Tokosaya',
      children: [
        {
          label: 'pengguna screen reader',
          tone: 'acc',
          children: [{ label: 'alt yang bermakna' }],
        },
        {
          label: 'pengguna cuma keyboard',
          children: [{ label: 'urutan fokus' }],
        },
        {
          label: 'pengguna dengan penglihatan terbatas',
          children: [{ label: 'kontras' }],
        },
        {
          label: 'pengguna koneksi lambat',
          children: [{ label: 'gambar yang ringan' }],
        },
      ],
    },
  },
}
