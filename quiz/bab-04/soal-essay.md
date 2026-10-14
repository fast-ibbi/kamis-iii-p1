# Soal Essay — Bab 04: Tipografi dan Visual Design CSS

> Frontend Development & Web Design · Semester III · _Bank Soal per Bab_
> 5 soal essay · tingkat kesulitan campuran (C2–C5)
> Poin jawaban + bobot skor: [jawaban.md](jawaban.md) · Bank lengkap 14 bab: [soal-essay.md](../soal-essay.md)

---

**Essay (5 soal)**

1. Web font dari Google Fonts diunduh saat halaman dibuka, sehingga unduhannya bisa gagal atau lambat. Jelaskan peran *fallback stack* dan parameter `display=swap` dalam menghadapi kondisi tersebut, lalu uraikan apa yang akan dialami pembaca Tokosaya jika keduanya tidak dipakai.

2. Skala tipografi Tokosaya berisi level Display 3rem, Heading 2 1.875rem, Body 1rem, Kecil 0.875rem, dan Label 0.75rem. Jelaskan bagaimana rangkaian level itu membentuk *visual hierarchy* pada landing page Tokosaya, mulai dari judul hero sampai label badge. Sebutkan pula properti lain selain `font-size` yang ikut membangun hierarki tersebut.

3. Seorang anggota tim menyerahkan potongan CSS untuk halaman kampanye Tokosaya berikut.

```css
html {
  font-family: 'Poppins', Inter;
}

h1 {
  font-size: 14px;
}

.produk-hero p {
  font-size: 18px;
  line-height: 1.1;
}

.banner-ongkir {
  background-color: #F59E0B;
  color: #FFFFFF;
  font-size: 10px;
}

.label-kode {
  font-size: 0.75rem;
  text-transform: uppercase;
}
```

Identifikasi minimal tiga masalah pada potongan itu dari sisi hierarki, *fallback stack*, kontras, dan penataan label kecil. Untuk setiap masalah, jelaskan akibatnya bagi pembaca lalu tuliskan perbaikannya memakai skala dan token Tokosaya.

4. Perhatikan potongan berikut.

```html
<section class="cta" style="--clr-primary: #16A34A;">
  <p>Tanya dulu, baru beli.</p>
  <a href="kontak.html" class="cta-button">Hubungi Kami</a>
</section>
```

Dengan CSS `html { color: var(--clr-body); }` dan `.cta-button { background-color: var(--clr-primary); }`, jelaskan mengapa tombol pada section itu berubah warna padahal token `--clr-primary` di `:root` tidak diubah, dan mengapa paragraf di dalamnya juga tidak otomatis menjadi hijau. Kaitkan penjelasanmu dengan sifat *custom properties* dan kaskade, lalu nyatakan kapan penimpaan token seperti ini masih dapat diterima dan kapan sebaiknya dihindari.

5. Seorang rekan berargumen: "Untuk proyek sekecil Tokosaya, design token cuma menambah pekerjaan. Tulis saja warna dan ukurannya langsung di setiap aturan." Susun evaluasi terhadap argumen itu dengan minimal tiga alasan yang memakai contoh nyata dari landing page Tokosaya. Sertakan pula satu situasi ketika keputusan untuk tidak memakai token justru tepat.
