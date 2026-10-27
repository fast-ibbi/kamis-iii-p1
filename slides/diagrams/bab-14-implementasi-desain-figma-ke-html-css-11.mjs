// bab-14 · 11 — auto layout dan Flexbox sebagai dua model, dua baris berpasangan:
// arah ditentukan apa, dan jarak diatur apa. Fakta bahwa auto layout menata anak
// secara otomatis tinggal di catatan penyaji.
export default {
  id: '11',
  slide: 'Auto Layout Itu Flexbox',
  pattern: 'beforeAfter',
  alt: 'Auto layout menentukan arah anak bisa searah baris, kolom, atau keduanya, dan jarak antaranak serta padding di tepinya; padanan CSS-nya flex-direction menentukan arah dan gap mengatur jarak.',
  data: {
    left: {
      title: 'AUTO LAYOUT',
      tone: 'neutral',
      items: ['arahnya bisa searah baris, kolom, atau keduanya', 'ada jarak antaranak dan padding di tepinya'],
    },
    right: {
      title: 'FLEXBOX',
      tone: 'acc',
      items: ['flex-direction menentukan arah', 'gap mengatur jarak'],
    },
  },
}
