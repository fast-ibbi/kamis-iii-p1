// bab-05 · 25 — dua aturan overflow, dua gejala yang dibereskan.
// Bentuknya perilaku, bukan metrologi kotak: yang dijawab tiap baris adalah
// "apa yang terjadi tanpa aturan" lawan "apa yang terjadi sesudahnya".
// Baris 1 soal sudut gambar di kartu ber-radius 12 px, baris 2 soal tabel
// 480 px di panel 200 px (sisanya 280 px menunggu di dalam panel).
export default {
  id: '25',
  slide: 'Contoh: Potong Melingkar dan Gulir Panel',
  pattern: 'beforeAfter',
  alt: 'Dua keadaan berdampingan. Tanpa aturan: sudut gambar tetap tajam walau kartu beradius 12 px, dan tabel 480 px memanjangkan seluruh halaman. Dengan overflow: overflow hidden memotong gambar ikut sudut kartu, dan overflow y auto menggulir panel 200 px saja.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'TANPA ATURAN',
      tone: 'red',
      items: [
        'sudut gambar tetap tajam walau kartu beradius 12 px',
        'tabel 480 px memanjangkan seluruh halaman',
      ],
    },
    right: {
      title: 'DENGAN overflow',
      tone: 'acc',
      items: [
        'overflow hidden memotong gambar ikut sudut kartu',
        'overflow y auto menggulir panel 200 px saja',
      ],
    },
  },
}
