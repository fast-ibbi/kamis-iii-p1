// bab-11 · 09 — denah keranjang Tokosaya: tiga zona di atas 12 kolom.
// 8 + 4 = 12, jadi Daftar item dan Ringkasan biaya berdampingan, bukan menumpuk.
// Pilihan pengiriman menyusul di bawah Daftar item, masih di 8 kolom yang sama:
// urutan baca dari atas ke bawah itulah progres yang dibaca pengguna.
export default {
  id: '09',
  slide: 'Contoh: Pengelompokan dan Progres',
  pattern: 'mockup',
  alt: 'Denah 12 kolom halaman keranjang dengan tiga zona: Daftar item selebar 8 kolom berdampingan dengan Ringkasan biaya 4 kolom, lalu Pilihan pengiriman 8 kolom tepat di bawah Daftar item, dipisahkan gutter 16 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 16,
    container: 1120,
    rows: [
      [
        { label: 'Daftar item', span: 8 },
        { label: 'Ringkasan biaya', span: 4 },
      ],
      [{ label: 'Pilihan pengiriman', span: 8 }],
    ],
    footer: 'gutter 16 px',
  },
}
