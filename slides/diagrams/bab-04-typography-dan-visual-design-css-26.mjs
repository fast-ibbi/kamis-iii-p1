// bab-04 · 26 — dua model pemakaian warna: hiasan yang ramai vs warna yang
// membawa makna. `beforeAfter` dipilih karena tiga warna semantik Tokosaya
// (hijau, amber, indigo) adalah satu model, bukan empat simpul bersaudara di
// bawah satu akar. Merah tidak lagi digambar: di slide induk merah adalah warna
// error/stok habis secara umum, bukan badge keempat Tokosaya.
export default {
  id: '26',
  slide: 'Contoh: Warna Semantik',
  pattern: 'beforeAfter',
  alt: 'Dua kolom: kolom kiri warna hiasan yang dipilih supaya ramai dan tidak punya makna, sehingga status harus ditulis dan dibaca; kolom kanan warna semantik Tokosaya, hijau 16A34A untuk tersedia, amber F59E0B untuk Best Seller, dan indigo 4F46E5 untuk Baru, sehingga maknanya terbaca sebelum teksnya.',
  imgWidth: 1120,
  data: {
    left: {
      title: 'WARNA HIASAN',
      tone: 'red',
      items: [
        'dipilih supaya ramai',
        'tidak ada makna yang menempel',
        'status harus ditulis dan dibaca',
      ],
    },
    right: {
      title: 'WARNA SEMANTIK',
      tone: 'acc',
      items: [
        'satu warna untuk satu makna',
        'hijau 16A34A tersedia, amber F59E0B Best Seller, indigo 4F46E5 Baru',
        'maknanya terbaca sebelum teksnya',
      ],
    },
  },
}
