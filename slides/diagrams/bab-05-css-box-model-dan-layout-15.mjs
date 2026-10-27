// bab-05 · 15 — kenapa padding 40 px bikin kartu statistik SIAKAD terlalu tinggi.
// Pertanyaannya sengaja beda dari spec 12: di sana pertanyaannya "max-width
// memotong apa?", jadi yang digambar pita kotaknya. Di sini pertanyaannya
// "padding mana yang dipakai, dan berapa ongkosnya?", jadi yang dibandingkan
// dua nilai padding pada kartu yang isinya sama persis.
// Tinggi content 64 px (label 24 + jarak 8 + angka 32) dan border 4 px tiap sisi
// tidak berubah di kedua panel, jadi selisihnya murni dari padding:
// 64 + 40 + 40 + 4 + 4 = 152 px lawan 64 + 24 + 24 + 4 + 4 = 120 px.
// Selisih 152 - 120 = 32 px per kartu. Tanpa footer: tiga baris sudah mengisi
// panel sampai tepi bawah, jadi catatan kaki akan menabrak baris ketiga
// (beforeAfter menaruh footer 32 px dari tepi bawah panel, bukan di bawah baris).
export default {
  id: '15',
  slide: 'Contoh: Studi Kasus: Dashboard SIAKAD',
  pattern: 'beforeAfter',
  alt: 'Dua panel kartu statistik SIAKAD dengan isi dan border yang sama: kiri padding 40 px per sisi dengan tinggi kartu 152 px, kanan padding 24 px per sisi dengan tinggi kartu 120 px.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'PADDING 40 PX',
      tone: 'red',
      items: [
        'content 240 × 64 px',
        'padding 40 px per sisi',
        'tinggi kartu 152 px',
      ],
    },
    right: {
      title: 'PADDING 24 PX',
      tone: 'acc',
      items: [
        'content 240 × 64 px',
        'padding 24 px per sisi',
        'tinggi kartu 120 px',
      ],
    },
  },
}
