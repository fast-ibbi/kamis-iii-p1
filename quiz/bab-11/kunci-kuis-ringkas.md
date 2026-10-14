# Kunci Kuis Ringkas — Bab 11: Form dan User Interface Design

> Frontend Development & Web Design · Semester III · _Kunci Kuis Ringkas per Bab_
> Penilaian: 10 butir × 10 poin (total 100) · kunci pilihan ganda + jawaban isian singkat + pembahasan ringkas
> File soal bab ini: [kuis-ringkas.md](kuis-ringkas.md) · Kunci lengkap 14 bab: [kunci-kuis-ringkas.md](../kunci-kuis-ringkas.md)

---

### Bagian A — Pilihan Ganda

1. **B** — `optgroup` membungkus `option` yang sejenis dan atribut `label`-nya memberi nama kelompok di dalam `select`; `fieldset`/`legend` mengelompokkan medan, bukan pilihan di dalam `select`.
2. **C** — `type="tel"` menyesuaikan jenis keyboard sehingga perangkat yang mendukung biasanya menampilkan pad angka; ia tidak otomatis menolak karakter, tidak menyamarkan isian, dan tidak memeriksa kode wilayah.
3. **A** — `textarea` menyimpan isi di antara tag pembuka dan penutup, sedangkan `input` pada atribut `value`; atribut `rows` hanya mengatur tinggi awalnya, sehingga baris yang tampak masih dapat berubah.
4. **D** — `required` memicu pemeriksaan bawaan browser: pengiriman ditahan dan pesan wajib isi ditampilkan, semuanya tanpa JavaScript. Kelas `is-invalid` dan `invalid-feedback` adalah status statis yang ditulis manual, bukan efek `required`.
5. **B** — gaya fokus yang terlihat adalah penunjuk utama bagi pengguna keyboard; bab ini menegaskan cincin fokus jangan dihapus, dan pembedaan `:focus`—`:focus-visible` justru membuat fokus keyboard tetap menonjol tanpa berlebihan.

### Bagian B — Isian Singkat

6. **`form-text` adalah bantuan permanen, sedangkan `invalid-feedback` pesan status yang baru tampil saat medannya memakai `is-invalid`** — teks bantuan menjelaskan format atau alasan data diminta dan selalu ada; pesan status hanya aktif berpasangan dengan kelas status medannya.
7. **`mb-3` memberi jarak antarkelompok medan di luar `row`, sedangkan `g-3` memberi gutter antarsel grid di dalam `row`** — keduanya menjaga ritme jarak; pilih satu pola lalu pakai konsisten agar jaraknya tidak terasa acak.
8. **browser dapat mengisi ulang data yang tersimpan sehingga salah ketik berkurang dan pengisian lebih cepat, sekaligus menyatakan tujuan medan dengan cara yang bisa diprogram (WCAG 1.3.5)** — dua manfaat itu diperoleh dari satu atribut yang sama.
9. **tidak tepat — `select` berisi pilihan tertutup, bukan teks bebas, sehingga status "tidak dapat diubah" untuk `select` memakai `disabled`, dengan konsekuensi isinya tidak ikut terkirim** — `readonly` memang ditujukan untuk medan teks yang isinya tetap terkirim bersama form.
10. **wajar bila medan itu memang tugas utama halaman, contohnya medan pencarian pada halaman pencarian sederhana; dihindari bila bukan, contohnya medan nama pada halaman kontak** — perpindahan fokus otomatis dapat membingungkan pengguna keyboard yang mulai membaca halaman dari awal.
