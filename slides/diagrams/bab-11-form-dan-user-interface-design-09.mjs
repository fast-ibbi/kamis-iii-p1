// bab-11 · 09 — denah keranjang Tokosaya: tiga zona di atas 12 kolom.
// 8 + 4 = 12, jadi zona kiri dan kanan berdiri berdampingan, bukan menumpuk.
// Gutter 16 px dipakai supaya batas antarzona bisa diukur, bukan cuma dirasakan.
export default {
  id: '09',
  slide: 'Contoh: Pengelompokan dan Progres',
  pattern: 'mockup',
  alt: 'Denah 12 kolom halaman keranjang: Daftar item selebar 8 kolom dengan Ringkasan biaya 4 kolom, lalu Pilihan pengiriman 8 kolom dengan Tombol utama 4 kolom, dipisahkan gutter 16 piksel.',
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
      [
        { label: 'Pilihan pengiriman', span: 8 },
        { label: 'Tombol utama', span: 4 },
      ],
    ],
    footer: 'gutter 16 px',
  },
}
