// bab-09 · 08 — dua jalur keputusan: menulis CSS sendiri atau memakai framework.
// Bentuk 3 lawan 2: baris kiri menjawab "kapan menulis sendiri", kanan "kapan
// menyerahkannya ke pustaka". Fakta identitas khas tidak digambar — tinggal di
// catatan penyaji.
export default {
  id: '08',
  slide: 'Kapan Sebaiknya Menulis CSS Sendiri',
  pattern: 'beforeAfter',
  alt: 'CSS sendiri dipakai untuk proyek kecil berdesain khas, saat belajar box model, flexbox, dan grid, serta saat pustaka cuma menebal file; framework dipakai untuk pola berulang dan tenggat yang ketat.',
  data: {
    left: {
      title: 'CSS SENDIRI',
      tone: 'acc',
      items: [
        'proyek kecil dengan satu-dua halaman berdesain khas',
        'pas belajar box model, flexbox, dan grid',
        'pas pustaka menebal file buat kebutuhan yang sedikit',
      ],
    },
    right: {
      title: 'FRAMEWORK',
      tone: 'neutral',
      items: ['pola berulang', 'tenggat yang ketat'],
    },
  },
}
