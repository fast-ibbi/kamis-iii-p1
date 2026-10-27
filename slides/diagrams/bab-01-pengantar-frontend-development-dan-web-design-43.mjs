// bab-01 · 43 — peta dokumen halaman profil-mahasiswa: satu h1, dua h2, empat li.
// Yang dijaga gambar ini: level heading tidak melompat, dan butir daftar selalu
// menggantung di bawah heading yang benar.
// CATATAN GEOMETRI: sebuah induk yang cuma punya SATU anak digambar pada y yang
// sama dengan anaknya, jadi keduanya terbaca seperti saudara. Karena itu tiap h2
// di sini wajib punya minimal dua li.
export default {
  id: '43',
  slide: 'Contoh: Empat Disiplin Struktur',
  pattern: 'tree',
  alt: 'Pohon dokumen profil-mahasiswa: h1 Andi Pratama menaungi h2 Bidang Minat dan h2 Keterampilan, masing-masing menaungi butir li tanpa lompatan level.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'h1 Andi Pratama',
      children: [
        {
          label: 'h2 Bidang Minat',
          children: [
            { label: 'li Desain antarmuka web' },
            { label: 'li Sistem informasi manajemen' },
          ],
        },
        {
          label: 'h2 Keterampilan',
          children: [
            { label: 'li Menuliskan dokumen HTML dasar' },
            { label: 'li Menata folder proyek' },
          ],
        },
      ],
    },
  },
}
