// bab-09 · 42 (slide ke-42) — peran warna bawaan Bootstrap lawan palet Tokosaya.
// Dua baris yang sepadan: baris 1 soal primary, baris 2 soal warning. Jadi panel
// kiri dan kanan dibaca berpasangan dari atas ke bawah, bukan sebagai dua daftar.
export default {
  id: '42',
  slide: 'Contoh: Palet Bootstrap Bukan Palet Tokosaya',
  pattern: 'beforeAfter',
  alt: 'Dua panel sejajar, baris per baris: baris pertama primary bawaan Bootstrap berarti biru, sedangkan palet Tokosaya menggesernya jadi indigo #4F46E5; baris kedua warning bawaan Bootstrap berarti kuning, sedangkan Tokosaya memakai amber.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'BAWAAN BOOTSTRAP',
      tone: 'neutral',
      items: ['primary berarti biru', 'warning berarti kuning'],
    },
    right: {
      title: 'PALET TOKOSAYA',
      tone: 'acc',
      items: ['primary jadi indigo #4F46E5', 'warning jadi amber'],
    },
  },
}
