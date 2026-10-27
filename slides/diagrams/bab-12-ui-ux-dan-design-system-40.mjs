// bab-12 · 40 — enam bagian kartu, digambar sebagai enam bagian.
// Sebelumnya gambar ini kotak kosong berlabel "isi kartu": `mockupBox` cuma bisa
// menggambar satu content box, jadi janji "keenam bagian kartu, dari badge
// sampai aksi" tidak pernah muncul di kanvas, dan klaim "radius 12 piksel
// memotong sudut luarnya" juga tidak bisa digambar (rx-nya hardcoded 2/4)
// — keduanya temuan review. Pola diganti `tree`: kelas `p-kartu` sebagai akar,
// keenam bagiannya sebagai cabang, dan lebar 356 piksel dipegang label akar.
// 4 x 71 + 3 x 24 = 356 piksel, sama dengan lebar kartu di slide Konsistensi.
export default {
  id: '40',
  slide: 'Contoh: Kartu Produk',
  pattern: 'tree',
  alt: 'Kelas p-kartu selebar 356 piksel sebagai akar, dengan enam cabang berurutan: badge, ikon, judul, keterangan, harga, dan aksi.',
  imgWidth: 1120,
  data: {
    root: {
      label: 'p-kartu 356 piksel',
      children: [
        { label: 'badge' },
        { label: 'ikon' },
        { label: 'judul' },
        { label: 'keterangan' },
        { label: 'harga' },
        { label: 'aksi' },
      ],
    },
  },
}
