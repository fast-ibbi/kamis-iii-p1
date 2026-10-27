// bab-04 · 20 — satu kata "warna" dengan tiga tugas yang berbeda.
// `tree` membuang note, jadi tugasnya ditempel ke label tiap simpul. Kalimat
// penutup soal kebisingan visual tinggal di catatan penyaji.
export default {
  id: '20',
  slide: 'Tiga Tugas Warna di Antarmuka',
  pattern: 'tree',
  alt: 'Warna di antarmuka punya tiga tugas: membangun identitas brand lewat warna utama, mengarahkan perhatian dengan warna aksen, dan menyampaikan makna lewat warna semantik.',
  data: {
    root: {
      label: 'tiga tugas warna',
      children: [
        { label: 'identitas brand lewat warna utama' },
        { label: 'mengarahkan perhatian dengan warna aksen' },
        { label: 'menyampaikan makna lewat warna semantik' },
      ],
    },
  },
}
