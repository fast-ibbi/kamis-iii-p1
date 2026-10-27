// bab-06 · 08 — rantai satu deklarasi: dari CSS ke anak yang jadi flex item.
// Pola `flow`, bukan mockup: yang digambar di sini urutan sebab-akibat, bukan
// geometri — tidak ada lebar atau sisa ruang yang bisa diperiksa mata.
// Label tepi sengaja satu-dua kata: celah antarkotak cuma 118 px, dan `flow`
// memusatkan label di celah itu, jadi label sepanjang "satu deklarasi di wadah"
// akan menimpa tepi kedua kotak.
export default {
  id: '08',
  slide: 'Contoh: Apa Itu Flexbox',
  pattern: 'flow',
  alt: 'Tiga tahap: display flex ditulis di induk, anak langsung jadi flex item, lalu item mengalir di satu jalur.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'display: flex ditulis di induk' },
      { label: 'anak langsung jadi flex item' },
      { label: 'mengalir di satu jalur' },
    ],
    edges: ['deklarasi', 'satu arah'],
  },
}
