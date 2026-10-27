// bab-15 · 03 — satu website, dua pasang mata. Bentuk 2 lawan 2: baris kiri dan
// baris kanan menjawab keadaan yang sama dari dua perangkat. Aksen cuma di sisi
// pemilik toko, karena di situlah cacatnya menyingkap diri.
export default {
  id: '03',
  slide: 'Sempurna di Laptop, Belum Siap di HP',
  pattern: 'beforeAfter',
  alt: 'Website yang tampak matang di laptop tim muncul rusak di HP pemilik toko: katalog bergulir horizontal, kartu produk menumpuk, label form hilang dan pembaca layar bingung.',
  data: {
    left: {
      title: 'DI LAPTOP TIM',
      tone: 'neutral',
      items: [
        'Hero memukau, katalog rapi',
        'Checkout mengalir tanpa hambatan',
        'Semua tombol kelihatan rapi',
      ],
    },
    right: {
      title: 'DI HP PEMILIK TOKO',
      tone: 'acc',
      items: [
        'Katalog muncul dengan gulir horizontal',
        'Kartu produk menumpuk berantakan',
        'Label form hilang, pembaca layar bingung',
      ],
    },
  },
}
