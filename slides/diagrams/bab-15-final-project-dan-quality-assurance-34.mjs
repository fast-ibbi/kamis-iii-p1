// bab-15 · 34 — empat gejala troubleshooting berpasangan dengan perbaikannya.
// Bentuk 2 lawan 2: baris kiri nomor dua menjawab baris kanan nomor dua. Tanpa
// footer, karena item kanan memang perlu dua baris.
export default {
  id: '34',
  slide: 'Troubleshooting QA',
  pattern: 'beforeAfter',
  alt: 'Empat gejala troubleshooting berpasangan dengan perbaikannya: CSS nggak berubah karena simpan, cache, atau jalur href; banyak error validator karena satu tag paling atas; temuan di halaman lain karena selector terlalu lebar; link 404 karena nama file beda.',
  data: {
    left: {
      title: 'GEJALA',
      tone: 'red',
      items: [
        'Perubahan CSS nggak terlihat',
        'Validator menampilkan banyak error',
        'Temuan muncul di halaman lain',
        'Link 404',
      ],
    },
    right: {
      title: 'PERBAIKAN',
      tone: 'acc',
      items: [
        'cek simpan, cache, dan jalur href',
        'perbaiki yang paling atas dulu',
        'batasi selector ke konteks komponen',
        'samakan nama file di disk dan di markup',
      ],
    },
  },
}
