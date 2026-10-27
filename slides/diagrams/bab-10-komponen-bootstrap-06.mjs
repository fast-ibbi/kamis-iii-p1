// bab-10 · 06 — satu baris kelas `col-12 col-sm-6 col-lg-3` sudah membawa aturan
// tampilan untuk tiga lebar uji. Penggaris 1–12 di atas gambar adalah grid 12
// kolom, jadi span tiap baris bisa dijumlah sendiri oleh mahasiswa (3+3+3+3 = 12).
// Catatan: slide ini duduk di posisi 7, tapi `-07` sudah dipakai spec lama
// ("Batas Tanpa JavaScript"); build mengikat lewat heading, bukan nomor berkas.
export default {
  id: '06',
  slide: 'Contoh: Apa Itu Komponen Antarmuka',
  pattern: 'mockup',
  alt: 'Satu resep col-12 col-sm-6 col-lg-3 di grid 12 kolom: baris pertama dua belas kolom, baris kedua dua sel enam kolom, baris ketiga empat sel tiga kolom, untuk tiga lebar uji 360 / 768 / 1200 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'grid',
    columns: 12,
    gutter: 16,
    container: 1120,
    rows: [
      [{ label: 'col-12', span: 12 }],
      [{ label: 'col-sm-6', span: 6 }, { label: 'col-sm-6', span: 6 }],
      [
        { label: 'col-lg-3', span: 3 },
        { label: 'col-lg-3', span: 3 },
        { label: 'col-lg-3', span: 3 },
        { label: 'col-lg-3', span: 3 },
      ],
    ],
    footer: '360 / 768 / 1200 piksel',
  },
}
