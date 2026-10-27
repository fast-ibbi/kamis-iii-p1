// bab-13 · 43 — refactor sebagai putaran, bukan daftar centang.
// Tiga keadaan dan satu panah balik: uji ulang 14 yang masih menemukan temuan
// mengembalikan kerja ke refactor. Panah balik itulah isi slide — satu kategori
// per putaran supaya sebab akibatnya kelihatan.
//
// Tanpa `initial`: pola ini menggambar penanda masuk dengan garis bertinta
// `ink`, yang di kit ini berarti putih di atas kanvas putih — yang terlihat cuma
// titik hitam mengambang di kiri chip. Aksennya dipindah ke dua keadaan yang
// memang jadi lingkup judul slide ini, refactor 8–13 dan uji ulang 14; audit 1–7
// sudah selesai di slide sebelumnya dan tetap netral.
export default {
  id: '43',
  slide: 'Contoh: Langkah Kerja 8–14: Refactor dan Uji Ulang',
  pattern: 'stateMachine',
  alt: 'Tiga keadaan dalam satu baris: audit 1–7, panah ada temuan menuju refactor 8–13 yang disorot, panah kategori menuju uji ulang 14 yang juga disorot, dan panah kembali ke refactor berlabel masih ada temuan.',
  imgWidth: 1120,
  data: {
    states: [
      { id: 'audit', label: 'Audit 1–7' },
      { id: 'refactor', label: 'Refactor 8–13', tone: 'acc' },
      { id: 'uji', label: 'Uji ulang 14', tone: 'acc' },
    ],
    transitions: [
      { from: 'audit', to: 'refactor', label: 'ada temuan' },
      { from: 'refactor', to: 'uji', label: 'kategori' },
      { from: 'uji', to: 'refactor', label: 'masih ada temuan' },
    ],
  },
}
