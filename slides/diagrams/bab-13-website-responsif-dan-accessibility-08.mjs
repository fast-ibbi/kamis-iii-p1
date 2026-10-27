// bab-13 · 08 — tangga breakpoint sebagai satu arah membesar, bukan tabel empat kolom.
// Tiap panggilan Bootstrap jadi satu tahap; angka di atas panah adalah lebar tempat
// tahap itu mulai berlaku. Aksen di md, breakpoint yang dipakai proyek ini.
export default {
  id: '08',
  slide: 'Tangga Breakpoint Tokosaya',
  pattern: 'flow',
  alt: 'Tangga breakpoint dari kiri ke kanan: base satu kolom dengan navigasi menumpuk, sm mulai 576 px dua kolom, md mulai 768 px tiga kolom dengan navigasi satu baris, lg mulai 992 px empat kolom, xl mulai 1200 px tetap empat kolom.',
  data: {
    steps: [
      { label: 'base', note: '1 kolom · navigasi menumpuk' },
      { label: 'sm', note: '2 kolom · navigasi menumpuk' },
      { label: 'md', note: '3 kolom · navigasi 1 baris', tone: 'acc' },
      { label: 'lg', note: '4 kolom · navigasi 1 baris', tone: 'neutral' },
      { label: 'xl', note: '4 kolom · navigasi 1 baris', tone: 'neutral' },
    ],
    edges: ['576 px', '768 px', '992 px', '1200 px'],
  },
}
