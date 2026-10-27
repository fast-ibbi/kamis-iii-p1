// bab-14 · 48 (slide ke-23) — satu warna, dua nama: color style di Figma dan
// variabel di CSS. Hex-nya identik, jadi yang berubah cuma label; itulah inti
// kalimat "nilai disalin apa adanya" di slide token.
// id 48 dipakai karena id 23 sudah terpakai spec "Token Tiga Lapis, Nama Berperan".
export default {
  id: '48',
  slide: 'Contoh: Warna Berlabel Jadi Token',
  pattern: 'beforeAfter',
  alt: 'Empat baris berpasangan: Warna/Primary #4F46E5 jadi --clr-primary: #4F46E5, Warna/Accent #F59E0B jadi --clr-accent: #F59E0B, Warna/Dark #1E293B jadi --clr-dark: #1E293B, dan Warna/Body #334155 jadi --clr-body: #334155.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'DI FIGMA',
      tone: 'red',
      items: [
        'Warna/Primary #4F46E5',
        'Warna/Accent #F59E0B',
        'Warna/Dark #1E293B',
        'Warna/Body #334155',
      ],
    },
    right: {
      title: 'DI CSS',
      tone: 'acc',
      items: [
        '--clr-primary: #4F46E5',
        '--clr-accent: #F59E0B',
        '--clr-dark: #1E293B',
        '--clr-body: #334155',
      ],
    },
  },
}
