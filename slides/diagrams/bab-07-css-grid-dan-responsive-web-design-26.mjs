// bab-07 · 26 — contoh kerja untuk slide Tujuan dan Kebutuhan Praktikum.
// Yang dijaga gambar ini: lebar satu kartu statistik di 1200 px bisa dihitung
// sendiri dari wadah, gutter, dan jumlah kolom. Penggaris 1–4 di atas sel adalah
// satu-satunya cara mahasiswa bisa menunjuk track mana yang ditempati sebuah butir.
export default {
  id: '26',
  slide: 'Contoh: Tujuan dan Kebutuhan Praktikum',
  pattern: 'mockup',
  alt: 'Denah 4 kolom selebar 1200 piksel: baris pertama empat kartu statistik masing-masing 288 piksel, baris kedua tabel pesanan membentang penuh, dengan gutter gap 16 px.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 4,
    gutter: 16,
    container: 1200,
    rows: [
      [
        { label: 'kartu 1', span: 1 },
        { label: 'kartu 2', span: 1 },
        { label: 'kartu 3', span: 1 },
        { label: 'kartu 4', span: 1 },
      ],
      [{ label: 'tabel pesanan', span: 4, tone: 'neutral' }],
    ],
    footer: 'gap 16 px',
  },
}
