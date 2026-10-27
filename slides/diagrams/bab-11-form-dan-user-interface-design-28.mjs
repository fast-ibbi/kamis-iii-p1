// bab-11 · 28 — pertanyaan judulnya dua: HTML polos tampil beda antar browser,
// dan kelas Bootstrap yang merapikannya. Dulu gambar hanya menjawab mb-3, dan
// kotak box-model-nya menggambar tepi content padahal border-nya 0.
// Angka mb-3 (16 px, 0 0 16 0) tetap dibawa di baris kedua panel kanan.
export default {
  id: '28',
  slide: 'Contoh: Kenapa Kelas Form Bootstrap',
  pattern: 'beforeAfter',
  alt: 'Kiri HTML polos: tampil beda antar browser, jarak antar kelompok belum konsisten, hasilnya terasa mentah. Kanan dengan kelas Bootstrap: tampilan diseragamkan, mb-3 memberi jarak 16 px antar kelompok, form-label dan form-control bikin hasilnya rapi.',
  data: {
    left: {
      title: 'HTML POLOS',
      tone: 'red',
      items: [
        'tampil beda antar browser',
        'jarak antar kelompok belum konsisten',
        'hasilnya terasa mentah',
      ],
    },
    right: {
      title: 'KELAS BOOTSTRAP',
      tone: 'acc',
      items: [
        'tampilan diseragamkan',
        'mb-3 memberi jarak 16 px antar kelompok',
        'form-label dan form-control bikin hasilnya rapi',
      ],
    },
  },
}
