// bab-07 · 26 — contoh kerja untuk slide Tujuan dan Kebutuhan Praktikum.
// Yang dijaga gambar ini: baris kartu statistik adalah satu grid berisi empat
// track sama lebar, dipisah gutter 24 px. Penggaris 1–4 di atas sel adalah
// satu-satunya cara mahasiswa bisa menunjuk track mana yang ditempati sebuah
// butir. Lebar satu kartu (222 px) dihitung di prosa slide, bukan ditulis di sel:
// gambar ini denah struktur, dan container disamakan dengan imgWidth supaya
// gutter 24 px tergambar sebesar labelnya sendiri. Tabel pesanan tidak ikut
// digambar, karena ia bukan butir `.stat-kartu` di deck ini.
export default {
  id: '26',
  slide: 'Contoh: Tujuan dan Kebutuhan Praktikum',
  pattern: 'mockup',
  alt: 'Baris kartu statistik sebagai denah 4 kolom dengan penggaris kolom 1 sampai 4: kartu 1, kartu 2, kartu 3, dan kartu 4 sama lebar, dengan gap 24 px di antaranya.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 4,
    gutter: 24,
    container: 1120,
    rows: [
      [
        { label: 'kartu 1' },
        { label: 'kartu 2' },
        { label: 'kartu 3' },
        { label: 'kartu 4' },
      ],
    ],
    footer: 'gap 24 px',
  },
}
