// bab-12 · 19 — contrast yang bisa diperiksa, bukan diklaim.
// Sebelumnya slide ini memakai beforeAfter dan menuliskan "judul 32 piksel lawan
// keterangan 14 piksel" di dalam panel yang hurufnya sama besar: gambarnya
// menyangkal teksnya sendiri (temuan review). Kit tidak punya cara menggambar
// dua ukuran huruf, jadi pola diganti ke `mockup` grid dan kontrasnya diukur
// dengan alat yang memang bisa digambar: lebar kolom di grid 12 kolom.
// Baris 1: 6 + 6 = 12 kolom, tidak ada yang menonjol. Baris 2: 9 + 3 = 12 kolom,
// judulnya tiga kali lebih lebar dan selnya diberi warna aksen, jadi tumpuannya
// kelihatan di dua saluran sekaligus — lebar dan warna.
export default {
  id: '19',
  slide: 'Contoh: Contrast',
  pattern: 'mockup',
  alt: 'Dua perlakuan pada satu kartu produk di grid 12 kolom: baris pertama judul dan keterangan masing-masing 6 kolom dan semuanya netral sehingga tidak ada yang menonjol, baris kedua judul 9 kolom berwarna aksen dan keterangan 3 kolom netral sehingga judul jadi satu tumpuan.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 24,
    container: 1120,
    rows: [
      [
        { label: 'judul', span: 6, tone: 'neutral' },
        { label: 'keterangan', span: 6, tone: 'neutral' },
      ],
      [
        { label: 'judul', span: 9, tone: 'acc' },
        { label: 'keterangan', span: 3, tone: 'neutral' },
      ],
    ],
    footer: 'kartu yang sama, dua perlakuan',
  },
}
