// bab-15 · 10 — empat konvensi penamaan diuji dengan tiga pasang nama file:
// yang gagal karena spasi dan huruf besar, yang lolos karena kebab-case.
export default {
  id: '10',
  slide: 'Contoh: Empat Konvensi Penamaan',
  pattern: 'beforeAfter',
  alt: 'Tiga nama file yang gagal di hosting berpasangan dengan versi kebab-case-nya: Produk Baru.html menjadi produk-baru.html, IMG Keyboard.svg menjadi produk-keyboard-kx210.svg, dan style2.css menjadi css atau style.css.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'NAMA YANG GAGAL',
      tone: 'red',
      mono: true,
      items: ['Produk Baru.html', 'IMG Keyboard.svg', 'style2.css'],
    },
    right: {
      title: 'NAMA YANG LOLOS',
      tone: 'acc',
      mono: true,
      items: ['produk-baru.html', 'produk-keyboard-kx210.svg', 'css/style.css'],
    },
  },
}
