// bab-11 · 21 — dua kontrol, dua aturan: checkbox boleh banyak, radio cuma satu.
// Kedua sisi memakai tone yang sama karena keduanya sama-sama benar — warna di
// sini hanya penanda panel, bukan penilaian. Tiga baris yang berpasangan:
// berapa yang boleh dipilih, aturan kelompoknya, lalu tempat pemakaiannya.
export default {
  id: '21',
  slide: 'Contoh: checkbox dan radio',
  pattern: 'beforeAfter',
  alt: 'Kiri checkbox: boleh dipilih lebih dari satu sekaligus, tiap kotak berdiri sendiri, cocok buat persetujuan dan langganan. Kanan radio: cuma boleh satu pilihan per kelompok, satu kelompok wajib name yang sama, cocok buat pilihan sesi ujian.',
  data: {
    left: {
      title: 'CHECKBOX',
      tone: 'acc',
      items: [
        'boleh dipilih lebih dari satu sekaligus',
        'tiap kotak berdiri sendiri',
        'cocok buat persetujuan dan langganan',
      ],
    },
    right: {
      title: 'RADIO',
      tone: 'acc',
      items: [
        'cuma boleh satu pilihan per kelompok',
        'satu kelompok wajib name yang sama',
        'cocok buat pilihan sesi ujian',
      ],
    },
  },
}
