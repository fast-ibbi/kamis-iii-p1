// bab-05 · 38 — dua arah batas: menahan dari atas lawan menahan dari bawah.
// Pola `mockup box` tidak bisa menampilkan dua arah sekaligus, jadi yang digambar
// adalah pasangan aturannya, bukan geometrinya. Angka 240 px dan 200 px hanya contoh
// rambu; yang harus terbaca adalah arahnya, dan itu urusan baris item.
export default {
  id: '38',
  slide: 'Batas Atas dan Batas Bawah',
  pattern: 'beforeAfter',
  imgWidth: 1160,
  alt: 'Dua arah batas: max-width menahan kotak dari atas sehingga boleh menyusut, min-width dan min-height menahan dari bawah sehingga boleh membesar.',
  data: {
    left: {
      title: 'BATAS ATAS',
      tone: 'acc',
      items: [
        'max-width: 100%',
        'kotak boleh menyusut, tidak boleh melebar',
        'dipakai gambar dan kartu di layar sempit',
      ],
    },
    right: {
      title: 'BATAS BAWAH',
      tone: 'neutral',
      items: [
        'min-height: 240px',
        'min-width: 200px',
        'kotak boleh membesar, tidak boleh remuk',
      ],
    },
  },
}
