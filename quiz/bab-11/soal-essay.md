# Soal Essay — Bab 11: Form dan User Interface Design

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 5 soal essay · tingkat kesulitan campuran (C2–C5)
> Poin jawaban + bobot skor: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-essay.md](../soal-essay.md)

---

**Essay (5 soal)**

1. Uraikan empat prinsip desain form yang dibahas pada Subbab 11.1 dan jelaskan alasan di balik masing-masing prinsip. Kaitkan salah satu prinsip dengan risiko kualitas data yang bisa muncul bila prinsip itu diabaikan pada form checkout Tokosaya.

2. Jelaskan perbedaan peran `checkbox` dan `radio` pada form HTML, lalu terangkan kapan pasangan `fieldset` dan `legend` perlu dipakai. Sertakan satu contoh *markup* singkat untuk kelompok radio yang benar, termasuk penanganan labelnya.

3. Kamu diminta menyusun layout form kontak Tokosaya agar pasangan medan pendek tampil berdampingan pada layar sedang ke atas, sementara medan panjang tetap selebar penuh. Sebutkan kelas-kelas yang kamu pakai (`row`, `g-3`, `col-md-6`, `col-12`), jelaskan fungsi masing-masing, dan jelaskan akibatnya bila `col-md-6` diganti menjadi `col-6`.

4. Sebuah panitia seminar kampus merilis form pendaftaran daring dengan gejala berikut: setiap medan hanya diberi *placeholder* tanpa label; pilihan "Ikut makan siang" dan "Butuh sertifikat" ditulis sebagai radio dengan `name` berbeda; seluruh pesan kesalahan disatukan menjadi "ada isian yang salah" di bawah form; dan tombol pengirimnya diberi label "Proses". Diagnosis keempat gejala itu dengan mengaitkannya pada prinsip atau ketentuan bab ini, lalu usulkan perbaikan konkret untuk masing-masing gejala.

5. Perhatikan potongan form berikut, lalu susun evaluasi aksesibilitasnya.

```html
<div class="mb-3">
  <label for="surel" class="form-label">Email</label>
  <input type="text" class="form-control" id="surel" name="surel"
         placeholder="Alamat email aktif">
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="promo">
  <label class="form-check-label" for="promo">Kirimi saya info promo.</label>
</div>
```

Temukan minimal tiga hal yang belum memenuhi checklist aksesibilitas bab ini (label, tujuan medan, gaya fokus, pesan yang dibaca), jelaskan dampaknya bagi pengguna pembaca layar, dan urutkan perbaikannya dari yang paling mendesak.
