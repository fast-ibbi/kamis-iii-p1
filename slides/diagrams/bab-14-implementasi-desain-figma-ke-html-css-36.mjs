// bab-14 · 36 — dua alat ukur berdiri di sumbu yang sama: perasaan dan lembar
// spesifikasi. Angka di panel kanan semuanya angka yang sudah dipakai bab ini.
export default {
  id: '36',
  slide: 'Contoh: Apa Itu Fidelity',
  pattern: 'beforeAfter',
  alt: 'Dua panel: diukur perasaan cuma kelihatannya mirip, kira-kira sudah pas, dan selisih kecil diabaikan; diukur spesifikasi memakai radius 12 px, gutter 24 px, jarak kelipatan 8, dan toleransi plus minus 2 px.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'DIUKUR PERASAAN',
      tone: 'red',
      items: ['kelihatannya mirip', 'kira-kira sudah pas', 'selisih kecil diabaikan'],
    },
    right: {
      title: 'DIUKUR SPESIFIKASI',
      tone: 'acc',
      items: ['radius 12 px', 'gutter 24 px', 'jarak kelipatan 8', 'toleransi ± 2 px'],
    },
  },
}
