// bab-10 · 21 — kartu sebagai wadah konten dan grid sebagai wadah layout.
// Dua panel, baris pertama menjawab baris pertama: kelas pembungkusnya dulu,
// lalu yang dikendalikannya. `card-group` tinggal di catatan penyaji karena ia
// alternatif layout, bukan pasangan dari kartu.
export default {
  id: '21',
  slide: 'Kartu Hidup di Dalam Grid',
  pattern: 'beforeAfter',
  alt: 'Wadah konten berupa card h-100 dengan isi gambar, badge, judul, harga, dan tombol; wadah layout berupa row g-4 yang mengendalikan jarak antarkartu dan col-12 col-sm-6 col-lg-3 yang membagi 1-2-4 kolom.',
  data: {
    left: {
      title: 'WADAH KONTEN',
      tone: 'acc',
      items: ['card h-100 — bingkai kartu produk', 'isi kartu: gambar, badge, judul, harga, tombol'],
    },
    right: {
      title: 'WADAH LAYOUT',
      tone: 'neutral',
      items: [
        'row g-4 mengendalikan jarak antarkartu',
        'col-12 col-sm-6 col-lg-3 membagi 1-2-4 kolom',
      ],
    },
  },
}
