// bab-15 · 40 — skrip tujuh menit dibaca sebagai durasi: satu detik satu px,
// total 450 px di container 480 px, sisa 30 px.
export default {
  id: '40',
  slide: 'Contoh: Skrip Presentasi Tujuh Menit',
  pattern: 'mockup',
  alt: 'Garis waktu presentasi: masalah 60 piksel, solusi 90 piksel, demo tiga breakpoint 180 piksel, bukti QA 60 piksel, dan refleksi 60 piksel, terpakai 450 piksel dari container 480 piksel dengan sisa 30 piksel.',
  imgWidth: 1120,
  data: {
    kind: 'flex',
    justify: 'flex-start',
    container: 480,
    gap: 0,
    items: [
      { label: 'masalah', basis: 60 },
      { label: 'solusi', basis: 90 },
      { label: 'demo tiga breakpoint', basis: 180 },
      { label: 'bukti QA', basis: 60 },
      { label: 'refleksi', basis: 60 },
    ],
  },
}
