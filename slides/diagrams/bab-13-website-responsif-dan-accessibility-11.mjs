// bab-13 · 11 — tabel lebar yang cuma masuk akal di desktop.
// Grid 8 kolom, gutter 16 px, container 1120 px: track 126 px, jadi 8 × 126 +
// 7 × 16 = 1120. Di HP 360 px tabel ini meluber 760 px — angka itu ditulis di
// slide, gambar cuma membuktikan dari mana 1120 px datang.
export default {
  id: '11',
  slide: 'Contoh: Desktop-First: Kapan Masih Masuk Akal',
  pattern: 'mockup',
  alt: 'Tabel dashboard 8 kolom dalam wadah 1120 px dengan gutter 16 px: enam kolom isi berjajar lalu dua kolom aksi, semuanya di atas penggaris kolom 1 sampai 8.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 8,
    gutter: 16,
    container: 1120,
    rows: [
      [
        { label: 'kolom isi', span: 6 },
        { label: 'kolom aksi', span: 2 },
      ],
    ],
    footer: 'gutter 16 px',
  },
}
