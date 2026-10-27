// bab-01 · 21 — isi folder proyek Tokosaya. `tree` membuang `note`, jadi peran
// tiap berkas ditempel langsung ke label simpulnya.
export default {
  id: '21',
  slide: 'Pola Folder Proyek Tokosaya',
  pattern: 'tree',
  alt: 'Satu folder proyek berisi index.html untuk beranda, katalog.html untuk daftar produk, tentang.html dan kontak.html, satu file css/style.css bersama, dan folder img berisi gambar berakhiran svg.',
  data: {
    root: {
      label: 'Folder proyek',
      children: [
        { label: 'index.html — halaman beranda' },
        { label: 'katalog.html — daftar produk' },
        { label: 'tentang.html, kontak.html — profil toko dan formulir' },
        { label: 'css/style.css — satu file gaya bersama' },
        { label: 'img/ — gambar produk dan logo berakhiran .svg' },
      ],
    },
  },
}
