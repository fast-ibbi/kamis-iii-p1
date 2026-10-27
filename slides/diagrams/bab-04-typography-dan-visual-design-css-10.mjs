// bab-04 · 10 — kenapa tipografi penting, dibaca sebagai rantai sebab-akibat.
// Semua label diambil dari kalimat slide ini sendiri: "teks yang ditata asal
// membuat pembaca lelah sebelum menemukan informasinya", lalu obatnya
// "hierarki yang jelas". Angka 3rem dan 1rem datang dari skala bab ini.
export default {
  id: '10',
  slide: 'Contoh: Mengapa Tipografi Penting',
  pattern: 'flow',
  alt: 'Rantai sebab-akibat: teks ditata asal membuat pembaca lelah, akibatnya informasi tidak ditemukan, dan solusinya hierarki yang jelas dengan judul 3rem dan instruksi 1rem.',
  imgWidth: 1120,
  data: {
    steps: [
      { label: 'teks ditata asal', note: 'ukuran dan ketebalan seragam' },
      { label: 'pembaca lelah', note: 'berhenti di tengah kalimat' },
      { label: 'informasi tidak ditemukan', note: 'sebelum sampai ke isinya' },
      { label: 'hierarki yang jelas', note: 'judul tampak seperti judul', tone: 'acc' },
    ],
    edges: ['karena itu', 'akibatnya', 'solusinya'],
  },
}
