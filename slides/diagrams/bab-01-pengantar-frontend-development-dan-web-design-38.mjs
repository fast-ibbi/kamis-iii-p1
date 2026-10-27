// bab-01 · 38 — dua tempat mengetik HTML, tiga baris pembanding.
// Sumbu yang sama untuk tiap baris: apa yang terjadi pada berkas HTML di tiap alat.
// Baris 1 = karakter tersembunyi, baris 2 = bantuan saat mengetik tag, baris 3 =
// apakah kesalahannya kelihatan. Pengolah kata bukan alat tulis kode.
export default {
  id: '38',
  slide: 'Contoh: Perangkat Kerja: VS Code dan Chrome',
  pattern: 'beforeAfter',
  alt: 'Tiga baris berpasangan: pengolah kata menyimpan karakter tak terlihat, tag diketik tanpa bantuan, dan kerusakan tanpa pesan galat; VS Code hanya menyimpan karakter yang diketik, memberi pelengkapan otomatis tag, dan kesalahan ditandai warna.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'PENGOLAH KATA',
      tone: 'red',
      items: ['karakter tak terlihat', 'tag diketik tanpa bantuan', 'kerusakan tanpa pesan galat'],
    },
    right: {
      title: 'VS CODE',
      tone: 'acc',
      items: ['hanya karakter yang diketik', 'pelengkapan otomatis tag', 'kesalahan ditandai warna'],
    },
  },
}
