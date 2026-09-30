// Konfigurasi Marp CLI untuk repo ini (dijalankan dari root, mis. `marp -I slides -o dist`).
//
// Tema tinggal di slides/theme/ supaya deck tetap self-contained: perintah marp yang
// dijalankan dari dalam slides/ memakai slides/marp.config.mjs, sedangkan perintah dari
// root memakai berkas ini. Hanya ada satu salinan tema.
/** @type {import('@marp-team/marp-cli').Config} */
export default {
  // Daftarkan tema di slides/theme agar deck bisa memakai `theme: academic`.
  themeSet: ['./slides/theme'],

  // Wajib untuk PDF/PPTX/PNG bila deck memuat gambar lokal (mis. diagram hasil bake).
  allowLocalFiles: true,

  // Bahasa dokumen HTML hasil konversi (ganti ke 'en' untuk deck berbahasa Inggris).
  lang: 'id',

  // Bookmark PDF berdasarkan slide + heading.
  pdfOutlines: true,

  options: {
    // Jangan ubah baris baru di paragraf menjadi <br> (perilaku CommonMark).
    markdown: { breaks: false },
  },
}
