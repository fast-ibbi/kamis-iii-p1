// bab-04 · 09 — dari font sistem ke web font sebagai rantai sebab-akibat.
// Perangkat yang berbeda (Windows/macOS/Android) tinggal di catatan penyaji dan
// di note tahap kedua; chip hanya menahan nama tahapnya.
export default {
  id: '09',
  slide: 'Font Sistem Berbeda di Tiap Perangkat',
  pattern: 'flow',
  alt: 'Font sistem yang dipakai browser berbeda tiap perangkat, karena itu identitas brand tidak konsisten, dan solusinya adalah web font yang diunduh saat halaman dibuka.',
  data: {
    steps: [
      { label: 'font sistem', note: 'bukan pilihan kita' },
      { label: 'beda tiap perangkat', note: 'Windows, macOS, dan Android' },
      { label: 'brand tidak konsisten', note: 'halaman yang sama, dua perangkat' },
      { label: 'web font', note: 'diunduh saat halaman dibuka', tone: 'acc' },
    ],
    edges: ['karena itu', 'akibatnya', 'solusinya'],
  },
}
