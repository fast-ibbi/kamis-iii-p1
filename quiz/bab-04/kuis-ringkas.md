# Kuis Ringkas — Bab 04: Tipografi dan Visual Design CSS

> Frontend Development & Web Design · Semester III · _Kuis Ringkas per Bab_
> 10 soal (5 pilihan ganda + 5 isian singkat) · estimasi waktu ±15 menit · tingkat kesulitan campuran (C1–C4)
> Kunci + pembahasan: [kunci-kuis-ringkas.md](kunci-kuis-ringkas.md) · Bank lengkap 14 bab: [kuis-ringkas.md](../kuis-ringkas.md)

---

**Bagian A — Pilihan Ganda (5 soal)**

1. Pada pola pemuatan Google Fonts untuk halaman Tokosaya, dua tag `<link rel="preconnect">` diletakkan sebelum tag stylesheet font. Tujuan kedua tag tersebut adalah...
   - A. mengunduh seluruh berkas font lebih dahulu agar halaman tetap menampilkan Poppins dan Inter saat komputer dibuka tanpa internet
   - B. membuka koneksi lebih awal ke server font sehingga proses unduhan berkas font sesudahnya berlangsung lebih cepat
   - C. mengunci daftar ketebalan font yang dipakai proyek agar tampilan konsisten di semua perangkat
   - D. menampilkan teks memakai font cadangan selama berkas web font belum selesai diunduh

2. Judul hero Tokosaya dicetak sangat besar, sedangkan badge dan label kategori berbentuk kapital berukuran kecil. Penerapan `letter-spacing` yang paling sesuai materi bab ini adalah...
   - A. judul dirapatkan (`-0.02em`) dan label kecil direnggangkan (`0.08em`)
   - B. judul direnggangkan (`0.08em`) dan label kecil dirapatkan (`-0.02em`)
   - C. keduanya direnggangkan sama besar (`0.08em`) supaya tampilan seragam
   - D. keduanya dirapatkan sama besar (`-0.02em`) supaya huruf saling mendekat

3. Landing page Tokosaya memuat hero, section Sorotan Produk dengan delapan kartu, dan section CTA. Penerapan latar bergradien yang paling sesuai anjuran bab ini adalah...
   - A. setiap kartu produk diberi `linear-gradient` berbeda supaya katalog tidak monoton
   - B. gradien dipakai pada seluruh permukaan halaman, termasuk kartu dan badan teks
   - C. gradien dipakai terbatas pada hero dan CTA, sedangkan kartu produk tetap berlatar solid putih
   - D. gradien dihindari sama sekali karena halaman UMKM harus tampil polos

4. Kartu Speaker Bluetooth BT-5 berstatus habis stok dan tim ingin kartunya tampak nonaktif — meredup seluruhnya — tanpa menghapus isinya. Deklarasi CSS yang paling tepat untuk maksud tersebut adalah...
   - A. `color: rgba(51, 65, 85, 0.6);`
   - B. `background-color: rgba(255, 255, 255, 0.6);`
   - C. `box-shadow: var(--shadow-card);`
   - D. `opacity: 0.6;`

5. Token `--clr-accent` pada blok `:root` Tokosaya berisi nilai ... dan disediakan untuk ...
   - A. `#16A34A`; status sukses seperti badge "Tersedia"
   - B. `#F59E0B`; sorotan seperti badge "Best Seller"
   - C. `#4338CA`; keadaan hover tombol dan salah satu ujung gradien indigo
   - D. `#DC2626`; sinyal urgensi seperti badge "Stok Terbatas"

**Bagian B — Isian Singkat (5 soal)**

6. Proyek Tokosaya memakai dua keluarga font dari Google Fonts. Sebutkan kedua nama font tersebut beserta peran masing-masing pada halaman.

7. Deklarasi `font-size: clamp(2.25rem, 5vw, 3rem);` dipakai pada judul hero Tokosaya. Jelaskan arti ketiga argumen `clamp()` tersebut dan apa yang terjadi pada ukuran judul saat layar sangat sempit maupun sangat lebar.

8. Di HTML, badge Tokosaya ditulis `Best Seller` apa adanya, tetapi tampil sebagai `BEST SELLER`. Properti tipografi apa yang dipakai beserta nilainya?

9. Badge semantik Tokosaya tidak memakai teks berwarna hijau murni `#16A34A`. Jelaskan pola yang dipakai: apa yang membawa warna semantiknya, warna apa yang dipakai untuk teks, dan mengapa pola itu dipilih.

10. Token Tokosaya dinamai `--clr-primary`, bukan `--indigo`. Jelaskan alasan penamaan seperti itu dan apa keuntungannya ketika warna brand suatu hari diganti.
