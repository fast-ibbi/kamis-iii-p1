// bab-04 · 07 — dua susunan properti untuk teks yang typeface-nya sama.
// SVG tidak bisa memuat web font, jadi kedua panel membandingkan NILAI
// propertinya, bukan bentuk hurufnya; catatan penyaji menyebut hal itu.
// Angkanya dari bab ini sendiri: 3rem = 48 px dan 1rem = 16 px di basis 16 px.
// Baris kiri dan baris kanan saling berpasangan: ukuran judul, ketebalan, hasil.
export default {
  id: '07',
  slide: 'Contoh: Menyusun Typeface, Bukan Sekadar Memilih',
  pattern: 'beforeAfter',
  alt: 'Dua kolom nilai properti CSS untuk teks Tokosaya: kolom kiri judul 1rem atau 16 px, isi 1rem, semua font-weight 400, sehingga tidak ada yang menonjol; kolom kanan judul 3rem atau 48 px dengan font-weight 700 dan isi tetap 400, sehingga judul terbaca sebagai judul.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'SEKADAR MEMILIH',
      tone: 'red',
      items: [
        'judul 1rem atau 16 px',
        'isi 1rem, semua font-weight 400',
        'tidak ada yang menonjol',
      ],
    },
    right: {
      title: 'MENYUSUN',
      tone: 'acc',
      items: [
        'judul 3rem atau 48 px',
        'font-weight 700, isi tetap 400',
        'judul terbaca sebagai judul',
      ],
    },
  },
}
