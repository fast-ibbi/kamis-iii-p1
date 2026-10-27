// bab-11 · 08 — label permanen lawan placeholder yang hilang.
// Kolom kiri dapat aksen: label adalah nama medan, placeholder cuma contoh isian.
export default {
  id: '08',
  slide: 'Label Terlihat, Placeholder Bukan Label',
  pattern: 'beforeAfter',
  alt: 'Label: permanen di atas medan dan dibacakan pembaca layar sebagai nama medan. Placeholder: hilang begitu pengguna mulai mengetik, kontrasnya lebih lemah, dan cuma buat contoh format.',
  data: {
    left: {
      title: 'LABEL',
      tone: 'acc',
      items: [
        'setiap medan punya label permanen di atasnya',
        'nama resmi medan buat pembaca layar',
      ],
    },
    right: {
      title: 'PLACEHOLDER',
      tone: 'neutral',
      items: [
        'hilang begitu pengguna mulai mengetik',
        'kontras placeholder biasanya lebih lemah',
        'cuma buat contoh format',
      ],
    },
  },
}
