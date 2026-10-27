// bab-11 · 23 — yang diuji bukan urutan DOM, tapi apa yang terdengar: tanpa
// fieldset, radio kedua kehilangan nama kelompoknya. Dulu legend digambar sebagai
// saudara radio, jadi terbaca "legend cuma item lain di dalam himpunan".
export default {
  id: '23',
  slide: 'Contoh: fieldset dan legend',
  pattern: 'beforeAfter',
  alt: 'Kiri tanpa fieldset: pembaca layar cuma membacakan radio kedua, pengguna harus menebak kelompok mana, dan tiap radio terasa berdiri sendiri. Kanan dengan fieldset: legend membacakan Pilihan Pengiriman, konteks kelompok terbawa ke radio kedua, dan tiga radio terbaca sebagai satu unit.',
  data: {
    left: {
      title: 'TANPA FIELDSET',
      tone: 'red',
      items: [
        'cuma membacakan "radio kedua"',
        'pengguna harus menebak kelompok mana',
        'tiap radio terasa berdiri sendiri',
      ],
    },
    right: {
      title: 'DENGAN FIELDSET',
      tone: 'acc',
      items: [
        'legend membacakan Pilihan Pengiriman',
        'konteks kelompok terbawa ke radio kedua',
        'tiga radio terbaca sebagai satu unit',
      ],
    },
  },
}
