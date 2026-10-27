// bab-05 · 34 — lima gejala dan penyebabnya, berpasangan baris demi baris.
export default {
  id: '34',
  slide: 'Troubleshooting Paling Sering',
  pattern: 'beforeAfter',
  alt: 'Lima gejala kartu produk dan penyebabnya: vertical-align baseline, spasi antar inline-block, margin runtuh, induk tanpa position relative, dan mode content-box yang masih aktif.',
  data: {
    left: {
      title: 'GEJALA',
      tone: 'red',
      items: [
        'kartu sejajar tepi bawah berbeda',
        'ada celah tipis antarkartu',
        'jarak terasa lebih pendek',
        'badge lari ke pojok halaman',
        'kartu meluber dan muncul bilah gulir',
      ],
    },
    right: {
      title: 'PENYEBAB',
      tone: 'acc',
      items: [
        'vertical-align bawaan masih baseline',
        'spasi di HTML antar inline-block',
        'margin vertikal runtuh',
        'induk belum position: relative',
        'mode content-box masih aktif',
      ],
    },
  },
}
