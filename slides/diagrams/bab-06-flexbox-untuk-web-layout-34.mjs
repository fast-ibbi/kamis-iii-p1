// bab-06 · 34 — pohon keputusan: situasi mana yang pindah ke Grid.
// Dua cabang, bukan daftar datar: tiap daun menggantung pada alat yang dipilih.
// Kalimat penutup soal satu dimensi tetap di slide, bukan di gambar.
export default {
  id: '34',
  slide: 'Kapan Grid Lebih Baik',
  pattern: 'tree',
  alt: 'Pilihan alat menurut situasi: Flexbox untuk sebaris item dengan panjang alami, kolom footer yang boleh menumpuk, dan menengahkan satu gugus konten; Grid untuk katalog dengan jumlah kolom pasti dan struktur halaman dua dimensi.',
  data: {
    root: {
      label: 'pilih alat',
      children: [
        {
          label: 'Flexbox',
          children: [
            { label: 'sebaris item dengan panjang alami' },
            { label: 'kolom footer yang boleh menumpuk' },
            { label: 'menengahkan satu gugus konten' },
          ],
        },
        {
          label: 'Grid (Bab 7)',
          children: [
            { label: 'katalog dengan jumlah kolom pasti' },
            { label: 'struktur halaman dua dimensi' },
          ],
        },
      ],
    },
  },
}
