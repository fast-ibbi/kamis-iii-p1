// bab-13 · 43 — refactor sebagai putaran, bukan daftar centang.
// Tiga keadaan dan satu panah balik: uji ulang 14 yang masih menemukan temuan
// mengembalikan kerja ke refactor. Panah balik itulah isi slide — satu kategori
// per putaran supaya sebab akibatnya kelihatan.
export default {
  id: '43',
  slide: 'Contoh: Langkah Kerja 8–14: Refactor dan Uji Ulang',
  pattern: 'stateMachine',
  alt: 'Tiga keadaan berurutan: audit 1–7 memberi ada temuan lalu masuk refactor 8–13, satu kategori selesai membawa ke uji ulang 14, dan kalau masih ada temuan panah kembali ke refactor.',
  imgWidth: 1120,
  data: {
    initial: 'audit',
    states: [
      { id: 'audit', label: 'Audit 1–7' },
      { id: 'refactor', label: 'Refactor 8–13' },
      { id: 'uji', label: 'Uji ulang 14' },
    ],
    transitions: [
      { from: 'audit', to: 'refactor', label: 'ada temuan' },
      { from: 'refactor', to: 'uji', label: 'kategori' },
      { from: 'uji', to: 'refactor', label: 'masih ada temuan' },
    ],
  },
}
