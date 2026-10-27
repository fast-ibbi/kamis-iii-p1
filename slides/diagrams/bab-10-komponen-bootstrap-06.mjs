// bab-10 · 06 — komponen itu bukan cuma potongan HTML: ia datang sebagai tumpukan
// lapis yang sudah disiapkan. Slide ini contoh dari "potongan antarmuka siap pakai
// dengan markup standar", jadi yang digambar empat lapis milik satu komponen
// (`card`), bukan penggaris 12 kolom — penggaris itu sudah digambar di bab 9
// (bab-09-pengenalan-bootstrap-5-27.mjs) dan pola 1-2-4 kolom di gambar 21 deck ini.
// Catatan: slide ini duduk di posisi 7, tapi `-07` sudah dipakai spec lama
// ("Batas Tanpa JavaScript"); build mengikat lewat heading, bukan nomor berkas.
export default {
  id: '06',
  slide: 'Contoh: Apa Itu Komponen Antarmuka',
  pattern: 'layers',
  alt: 'Empat lapis satu komponen card: di dasar markup standar div.card dan div.card-body, di atasnya kelas gaya berupa radius, bayangan, jarak, lalu variant warna text-bg-warning, dan di puncak aturan lebar layar col-12 col-sm-6 col-lg-3.',
  imgWidth: 1080,
  data: {
    layers: [
      { label: 'Aturan lebar layar', note: 'col-12 col-sm-6 col-lg-3', tone: 'neutral' },
      { label: 'Variant warna', note: 'text-bg-warning', tone: 'neutral' },
      { label: 'Kelas gaya', note: 'radius, bayangan, jarak', tone: 'neutral' },
      { label: 'Markup standar', note: 'div.card dan div.card-body', tone: 'acc' },
    ],
  },
}
