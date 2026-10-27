// bab-07 · 07 — dua alat, tiga fakta masing-masing, sebagai pohon keputusan.
// Akar pertanyaannya "kapan pakai yang mana", jadi bentuknya containment, bukan
// dua panel bersebelahan: tiap cabang menjawab pertanyaan yang sama. Fakta yang
// tidak ikut digambar — satu elemen yang digeser sedikit dari alurnya — tetap
// tinggal di catatan penyaji.
export default {
  id: '07',
  slide: 'Grid dan Flexbox: Kapan Pakai yang Mana',
  imgWidth: 1100,
  pattern: 'tree',
  alt: 'Pohon keputusan kapan pakai yang mana, bercabang dua: Flexbox dengan tiga fakta, yaitu bergerak dari konten menuju layout, navigasi horizontal dan footer multi kolom, serta barisan kartu dengan panjang isi berbeda; Grid dengan tiga fakta, yaitu bergerak dari denah menuju konten, kerangka halaman, serta kartu statistik yang harus sebaris sempurna.',
  data: {
    root: {
      label: 'kapan pakai yang mana',
      children: [
        {
          label: 'Flexbox',
          children: [
            { label: 'bergerak dari konten menuju layout' },
            { label: 'navigasi horizontal, footer multi kolom' },
            { label: 'barisan kartu dengan panjang isi berbeda' },
          ],
        },
        {
          label: 'Grid',
          tone: 'acc',
          children: [
            { label: 'bergerak dari denah menuju konten' },
            { label: 'kerangka halaman: header, nav, main, footer' },
            { label: 'kartu statistik yang harus sebaris sempurna' },
          ],
        },
      ],
    },
  },
}
