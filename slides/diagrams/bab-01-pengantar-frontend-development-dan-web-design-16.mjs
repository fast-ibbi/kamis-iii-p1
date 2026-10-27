// bab-01 · 16 — rancangan berubah wujud empat kali sebelum jadi komponen.
// Kit ditaruh di note: Figma, HTML, CSS, lalu CSS framework.
export default {
  id: '16',
  slide: 'Alur Design → Code',
  pattern: 'flow',
  alt: 'Empat wujud berurutan: rancangan dari Figma diuraikan jadi struktur HTML, struktur diberi rupa CSS, lalu dipakai komponen siap pakai dari CSS framework.',
  data: {
    steps: [
      { label: 'Rancangan', note: 'Figma', tone: 'neutral' },
      { label: 'Struktur', note: 'bahasa HTML', tone: 'neutral' },
      { label: 'Rupa', note: 'warna, ukuran, jarak, layout', tone: 'neutral' },
      { label: 'Komponen', note: 'CSS framework', tone: 'acc' },
    ],
    edges: ['diuraikan', 'diberi rupa', 'pakai'],
  },
}
