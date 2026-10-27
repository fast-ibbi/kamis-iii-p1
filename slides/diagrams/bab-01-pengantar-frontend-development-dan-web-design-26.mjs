// bab-01 · 26 — keluhan pengguna di kiri, daftar periksa di kanan.
// Tiga baris, berpasangan baris demi baris. Tanpa footer: item kanan butuh dua
// baris, dan footer akan menabraknya. `mono: false` dipaksa karena tanda kurung
// nama panel bikin kit menebak kolom kanan sebagai kode.
export default {
  id: '26',
  slide: 'Membaca Gejala, Bukan Menebak',
  pattern: 'beforeAfter',
  alt: 'Tiga keluhan klien dan yang diperiksa untuk masing-masing: tombol hilang diperiksa di panel Elements, tulisan menabrak logo diperiksa lewat device toolbar, versi lama muncul diperiksa dengan memuat ulang halaman.',
  data: {
    left: {
      title: 'KELUHAN KLIEN',
      tone: 'red',
      mono: false,
      items: [
        'Tombolnya hilang pas dibuka dari HP',
        'Tulisannya menabrak logo',
        'Masih tampil versi yang lama',
      ],
    },
    right: {
      title: 'YANG DIPERIKSA',
      tone: 'acc',
      mono: false,
      items: [
        'Elemen benar ada di struktur? (Elements)',
        'Berapa lebar layar pengguna? (device toolbar)',
        'Halaman udah dimuat ulang dengan F5?',
      ],
    },
  },
}
