// bab-02 · 29 — dokumen index.html dan lima kelompok pemeriksaan markupnya.
// Nilai tambah gambar ini adalah PENGELOMPOKAN, bukan urutan: daftar bullet di
// slide sebelumnya sudah urut dari atas ke bawah. Jadi gambar ini memakai `tree`
// (satu dokumen, lima kelompok bukti yang berdiri sendiri), bukan `flow` empat
// kartu — slide 26 sudah memakai flow untuk urutan langkah, dan dua flow yang
// bentuknya sama tidak bisa dibedakan saat recap.
// Tanpa label form: index.html di praktikum ini belum punya form, jadi setiap
// label di sini punya buktinya di Beranda.
export default {
  id: '29',
  slide: 'Contoh: Cek Markup Semantik',
  pattern: 'tree',
  alt: 'Satu dokumen index.html dengan lima kelompok pemeriksaan: dokumen diawali DOCTYPE dan html lang, head berisi charset, viewport, description, dan title unik, heading berisi satu h1 lalu h2, konten berupa tabel buat data dan gambar alt, serta bagian berupa landmark dan teks link.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'index.html',
      children: [
        { label: 'DOCTYPE dan html lang="id"' },
        { label: 'head: charset, viewport, description, title unik' },
        { label: 'heading: satu h1 lalu h2' },
        { label: 'konten: tabel buat data, gambar alt' },
        { label: 'bagian: landmark dan teks link' },
      ],
    },
  },
}
