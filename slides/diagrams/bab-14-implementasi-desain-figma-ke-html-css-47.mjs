// bab-14 · 47 (slide ke-7) — handoff sebagai percakapan dua arah, bukan pengiriman
// file. Tiga fakta berjalan dari desainer ke pengembang; satu balasan balik ke
// desainer ketika angkanya kurang. Angka di sini dipakai ulang di slide grid,
// token, dan radius, jadi gambarnya nyambung ke sisa bab.
// id 47 dipakai karena id 07 sudah terpakai spec "Prototip Bukan Implementasi".
export default {
  id: '47',
  slide: 'Contoh: Apa Itu Handoff',
  pattern: 'sequence',
  alt: 'Percakapan handoff dua arah: desainer mengirim frame 1440 px, kontainer 1140 px, dan 7 color style, lalu pengembang membalas dengan revisi warna badge.',
  imgWidth: 1120,
  data: {
    actors: ['Desainer', 'Pengembang'],
    messages: [
      { from: 'Desainer', to: 'Pengembang', label: 'frame 1440 px' },
      { from: 'Desainer', to: 'Pengembang', label: 'kontainer 1140 px' },
      { from: 'Desainer', to: 'Pengembang', label: '7 color style' },
      { from: 'Pengembang', to: 'Desainer', label: 'revisi warna badge', tone: 'amber' },
    ],
  },
}
