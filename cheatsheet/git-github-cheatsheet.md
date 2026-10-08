## 1. Apa itu Git?

**Git adalah alat untuk mengelola versi kode/program.**

Bayangkan kamu sedang membuat website. Hari ini kamu punya:

```text
website/
├── index.html
├── style.css
└── script.js
```

Besok kamu mengubah banyak hal. Ternyata website-nya rusak.

Tanpa Git, kamu mungkin harus membuat salinan:

```text
website/
website-final/
website-final-2/
website-final-beneran/
website-final-beneran-fix/
```

😅

Dengan **Git**, kamu bisa menyimpan riwayat perubahan:

```text
Versi 1 → Versi 2 → Versi 3 → Versi 4
```

Dan kalau Versi 4 rusak, kamu bisa melihat atau kembali ke versi sebelumnya.

### Analogi sederhananya

Git seperti **"Save Point" dalam game**.

Misalnya:

```text
Awal
 ↓
Save Point 1
 ↓
Save Point 2
 ↓
Save Point 3
```

Setiap kali kamu merasa perubahanmu sudah bagus, kamu bisa membuat sebuah **commit**.

Contoh:

```bash
git add .
git commit -m "Membuat halaman utama"
```

Jadi:

> **Git = alat untuk mencatat dan mengelola riwayat perubahan project.**

Git berjalan di komputer kamu dan bisa digunakan tanpa internet.

---

# 2. Apa itu GitHub?

**GitHub adalah layanan online untuk menyimpan repository Git.**

Kalau Git adalah alatnya, GitHub adalah tempat online untuk menyimpan dan berbagi project yang menggunakan Git.

Analogi:

```text
Git
 ↓
alat untuk mengelola project

GitHub
 ↓
tempat online untuk menyimpan project tersebut
```

Misalnya project kamu ada di laptop:

```text
Laptop
└── website/
    ├── index.html
    ├── style.css
    └── script.js
```

Kamu bisa menggunakan Git untuk mencatat perubahan, lalu mengirim project tersebut ke GitHub:

```text
Laptop
   │
   │ git push
   ↓
GitHub
└── website/
    ├── index.html
    ├── style.css
    └── script.js
```

Dengan begitu project kamu tersimpan secara online.

---

## Kenapa GitHub berguna?

### 1. Backup

Kalau laptop rusak, project masih ada di GitHub.

### 2. Kolaborasi

Misalnya kamu dan temanmu mengerjakan project yang sama.

```text
Kamu ─────┐
          ↓
       GitHub
          ↑
          │
Teman ────┘
```

Kalian bisa bekerja pada project yang sama.

### 3. Menampilkan project

GitHub juga sering digunakan developer untuk menunjukkan project mereka.

Misalnya repository:

```text
github.com/nama-kamu/website-ku
```

Orang lain bisa melihat kode yang kamu buat.

---

# 3. Apa itu GitHub Pages?

Nah, ini yang menarik.

**GitHub Pages adalah fitur GitHub untuk mempublikasikan website secara gratis.**

Misalnya kamu punya:

```text
index.html
style.css
script.js
```

Biasanya kalau ingin website bisa diakses orang lain, kamu membutuhkan **hosting**.

GitHub Pages bisa menjadi hosting untuk website tertentu, terutama website statis.

Contohnya:

```text
Project kamu
     ↓
GitHub repository
     ↓
GitHub Pages
     ↓
Website online
```

Misalnya repository kamu bernama:

```text
portfolio
```

GitHub Pages dapat membuatnya tersedia di alamat seperti:

```text
https://username.github.io/portfolio/
```

Sedangkan untuk repository khusus bernama:

```text
username.github.io
```

website-nya bisa berada di:

```text
https://username.github.io/
```

---

# Jadi apa perbedaan ketiganya?

| Teknologi        | Fungsi                                                              |
| ---------------- | ------------------------------------------------------------------- |
| **Git**          | Mengelola versi/riwayat kode                                        |
| **GitHub**       | Menyimpan repository Git secara online dan memfasilitasi kolaborasi |
| **GitHub Pages** | Mempublikasikan website dari repository GitHub                      |

Cara mengingatnya:

> **Git = alat**
> **GitHub = tempat**
> **GitHub Pages = cara membuat website dari tempat tersebut menjadi online**

---

# Contoh dari awal sampai website online

Misalnya kamu ingin membuat portfolio.

### Langkah 1 — Buat website

```text
portfolio/
├── index.html
├── style.css
└── script.js
```

### Langkah 2 — Aktifkan Git

Di folder tersebut:

```bash
git init
```

Sekarang folder tersebut menjadi repository Git.

### Langkah 3 — Simpan perubahan pertama

```bash
git add .
git commit -m "Initial commit"
```

Git sekarang mencatat versi pertama project kamu.

### Langkah 4 — Upload ke GitHub

Repository GitHub dibuat, lalu project dikirim:

```bash
git push
```

Sekarang:

```text
Laptop
   │
   │ git push
   ↓
GitHub
   │
   │ GitHub Pages
   ↓
Website
```

### Langkah 5 — Website bisa diakses

Orang lain dapat membuka alamat website kamu melalui browser.

---

# Analogi paling gampang

Bayangkan kamu seorang penulis buku.

**Git**

📚 Buku + catatan semua revisi.

> "Bab 1 dulu seperti ini, lalu saya ubah menjadi seperti ini."

**GitHub**

☁️ Perpustakaan online tempat kamu menyimpan buku tersebut.

> "Buku saya tersimpan online dan bisa dibagikan kepada orang lain."

**GitHub Pages**

🌐 Toko/perpustakaan yang memungkinkan orang **membaca bukunya langsung melalui website**.

---

## Satu hal penting

GitHub Pages **bukan pengganti Git atau GitHub**.

Hubungannya kira-kira:

```text
                  ┌──────────────┐
                  │     Git      │
                  │ version      │
                  │ control      │
                  └──────┬───────┘
                         │
                         ↓
                  ┌──────────────┐
                  │    GitHub    │
                  │ repository   │
                  └──────┬───────┘
                         │
                         ↓
                  ┌──────────────┐
                  │ GitHub Pages │
                  │   hosting    │
                  └──────┬───────┘
                         │
                         ↓
                    🌐 Website
```

