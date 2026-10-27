// bab-13 · 20 — butir A/AA sebagai cabang dari empat prinsip POUR, bukan enam bullet.
// `tree` membuang `note`, jadi butirnya ditempel ke label tiap cabang. Rincian yang
// tidak masuk label (alt kosong buat dekoratif, color picker, lang) tinggal di catatan.
export default {
  id: '20',
  slide: 'Peta Butir A/AA yang Dibahas',
  pattern: 'tree',
  alt: 'Empat prinsip POUR sebagai cabang butir A/AA: Perceivable lewat alt tiap gambar dan kontras teks, Operable lewat keyboard dan skip link, Understandable lewat heading dan link bermakna, Robust lewat label for yang terhubung ke id.',
  data: {
    root: {
      label: 'POUR',
      children: [
        { label: 'Perceivable — alt tiap gambar dan kontras teks' },
        { label: 'Operable — keyboard dan skip link' },
        { label: 'Understandable — heading dan link bermakna' },
        { label: 'Robust — label for terhubung ke id' },
      ],
    },
  },
}
