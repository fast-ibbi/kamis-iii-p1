// bab-06 · 05 — wireframe desainer dibaca sebagai revisi: keadaan sebelum lawan
// brief yang harus dicapai. Bentuk 2 lawan 2, baris kiri dan kanan menjawab
// pertanyaan yang sama (link, Keranjang, penekukan, kartu gepeng).
// Tidak ada nama properti di gambar ini: `justify-content`, `flex-basis`, dan
// `flex-grow` baru diajarkan beberapa slide setelah ini, jadi angkanya tinggal di
// catatan penyaji sampai propertinya diperkenalkan.
export default {
  id: '05',
  slide: 'Contoh: Wireframe Baru dari Desainer',
  pattern: 'beforeAfter',
  alt: 'Dua panel berisi empat baris berpasangan. Panel kiri sebelum revisi: logo dan empat link belum terpisah, Keranjang belum di ujung kanan, delapan kartu dipaksa muat satu baris, kartu gepeng, teksnya rusak. Panel kanan sesudah revisi: logo tetap di kiri, empat link ke kanan, tombol Keranjang paling ujung, delapan kartu boleh turun baris, kartu tetap 250 px, teksnya utuh.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'SEBELUM REVISI',
      tone: 'red',
      items: [
        'logo dan empat link belum terpisah',
        'Keranjang belum di ujung kanan',
        'delapan kartu dipaksa muat satu baris',
        'kartu gepeng, teksnya rusak',
      ],
    },
    right: {
      title: 'SESUDAH REVISI',
      tone: 'acc',
      items: [
        'logo tetap di kiri, empat link ke kanan',
        'tombol Keranjang paling ujung',
        'delapan kartu boleh turun baris',
        'kartu tetap 250 px, teksnya utuh',
      ],
    },
  },
}
