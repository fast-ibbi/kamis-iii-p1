// bab-04 · 28 — ambang AA memotong satu rentang kontras di dua titik.
// `layers` salah bentuk di sini: empat lebar pita yang sama tinggi menyatakan
// keempat nilai itu setara, padahal rentangnya 1:1 sampai 21:1. Jadi dipakai
// `beforeAfter`: dua model keputusan, di bawah ambang dan di atas ambang, dengan
// baris yang berpasangan — batas, teks normal, teks besar.
export default {
  id: '28',
  slide: 'Contoh: Contrast Ratio dan Ambang AA',
  pattern: 'beforeAfter',
  alt: 'Dua kolom keputusan ambang AA: kolom kiri gagal ambang AA berisi 1:1 teks tidak terlihat sebagai batas bawah, teks normal di bawah 4,5:1, dan teks besar 24 px di bawah 3:1; kolom kanan lolos ambang AA berisi 21:1 hitam di atas putih sebagai batas atas, teks normal minimal 4,5:1, dan teks besar 24 px cukup 3:1.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'GAGAL AMBANG AA',
      tone: 'red',
      items: [
        '1:1 teks tidak terlihat, batas bawah',
        'teks normal di bawah 4,5:1',
        'teks besar 24 px di bawah 3:1',
      ],
    },
    right: {
      title: 'LOLOS AMBANG AA',
      tone: 'acc',
      items: [
        '21:1 hitam di atas putih, batas atas',
        'teks normal minimal 4,5:1',
        'teks besar 24 px cukup 3:1',
      ],
    },
  },
}
