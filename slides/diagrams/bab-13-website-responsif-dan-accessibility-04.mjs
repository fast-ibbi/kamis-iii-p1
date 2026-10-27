// bab-13 · contoh untuk slide konsep 04 (Rapi di Monitor, Ambruk di HP).
// Berkas ini dinamai -04 karena -05.mjs sudah dipakai diagram Mobile-First vs
// Desktop-First; `id` tetap unik dan build mengikat lewat heading, bukan nomor.
// Box model kartu katalog: content 280 × 96 px + padding 16 px + border 4 px =
// lebar total 320 px. Angka 640 dan 360 px di footer yang bikin "ambruk" itu
// terukur: dua kartu 640 px, layar HP 360 px.
export default {
  id: '04',
  slide: 'Contoh: Rapi di Monitor, Ambruk di HP',
  pattern: 'mockup',
  alt: 'Kotak kartu katalog Tokosaya dari luar ke dalam: margin nol, border 4 px, padding 16 px, dan content 280 kali 96 px berisi gambar produk, dengan lebar total 320 px karena dua kartu butuh 640 px sementara layar HP cuma 360 px.',
  imgWidth: 1120,
  data: {
    kind: 'box',
    content: { w: 280, h: 96, label: 'gambar produk' },
    padding: [16, 16, 16, 16],
    border: [4, 4, 4, 4],
    margin: [0, 0, 0, 0],
    footer: 'dua kartu butuh 640 px, layar HP cuma 360 px',
  },
}
