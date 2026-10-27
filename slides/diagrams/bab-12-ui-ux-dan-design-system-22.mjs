// bab-12 · 22 — repetition sebagai keputusan, bukan sebagai pengulangan gambar.
// Sebelumnya slide ini menggambar grid 12 kolom berisi delapan kartu span 3,
// padahal slide Konsistensi dan slide Kartu Produk sudah menetapkan kelas yang
// sama, `p-kartu`, selebar 4 kolom = 356 piksel. Dua lebar untuk satu kelas di
// dalam bab tentang konsistensi (temuan review). Gambar grid-nya juga jadi
// kembar dengan Contoh: Alignment dan Contoh: Disiplin Tipografi, jadi polanya
// diganti `beforeAfter`: baris kiri dan baris kanan menjawab satu sama lain —
// wujud diulang lawan wujud baru tanpa alasan.
export default {
  id: '22',
  slide: 'Contoh: Repetition',
  pattern: 'beforeAfter',
  alt: 'Dua panel bertolak belakang: panel kiri wujud baru tanpa alasan berisi satu kartu dibuat dengan wujud sendiri, lahir komponen kedua yang harus dirawat, dan pola di mata pembaca jadi pecah; panel kanan wujud diulang berisi delapan kartu katalog memakai kelas p-kartu yang sama, satu komponen saja yang dirawat, dan pola terbentuk dan katalog cepat dipindai.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'WUJUD BARU TANPA ALASAN',
      tone: 'red',
      items: [
        'satu kartu dibuat dengan wujud sendiri',
        'lahir komponen kedua yang harus dirawat',
        'pola di mata pembaca jadi pecah',
      ],
    },
    right: {
      title: 'WUJUD DIULANG',
      tone: 'acc',
      items: [
        'delapan kartu katalog memakai kelas p-kartu yang sama',
        'satu komponen saja yang dirawat',
        'pola terbentuk dan katalog cepat dipindai',
      ],
    },
  },
}
