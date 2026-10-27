// bab-12 · 31 — anatomi navbar: menu baku punya empat butir, keranjang dan
// brand berdiri sendiri. Perilaku (aria-current, tombol buka-tutup, breadcrumb)
// tidak digambar karena `tree` membuang note; semuanya tinggal di catatan.
export default {
  id: '31',
  slide: 'Navigasi',
  pattern: 'tree',
  alt: 'Navbar Tokosaya terdiri dari brand, menu baku berisi Beranda, Katalog, Tentang, Kontak, dan ikon keranjang di kanan.',
  data: {
    root: {
      label: 'Navbar',
      children: [
        { label: 'brand' },
        {
          label: 'menu baku',
          children: [
            { label: 'Beranda' },
            { label: 'Katalog' },
            { label: 'Tentang' },
            { label: 'Kontak' },
          ],
        },
        { label: 'ikon keranjang di kanan' },
      ],
    },
  },
}
