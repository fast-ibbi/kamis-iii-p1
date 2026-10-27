// bab-12 · 18 — alignment yang bisa dilihat: tiga elemen hero berhenti di garis
// kolom pertama yang sama. Grid 12 kolom, gutter 24 piksel, lebar 1120 piksel.
// Garis kolom putus-putus itulah "garis tak terlihat" yang disebut slide ini:
// di CSS tidak pernah digambar, di sini digambar supaya bisa ditunjuk.
// Tombolnya span 2, bukan span 4: 2 x 71 + 24 = 166 piksel, dan angka itu
// sama dengan lebar tombol Lihat Katalog di slide Contoh: Affordance.
export default {
  id: '18',
  slide: 'Contoh: Alignment',
  pattern: 'mockup',
  alt: 'Tiga elemen hero Tokosaya di grid 12 kolom: judul span 12, paragraf span 8, dan tombol span 2 selebar 166 piksel, ketiganya mulai di garis kolom pertama yang sama.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 24,
    container: 1120,
    rows: [
      [{ label: 'judul', span: 12 }],
      [{ label: 'paragraf', span: 8 }],
      [{ label: 'tombol', span: 2 }],
    ],
  },
}
