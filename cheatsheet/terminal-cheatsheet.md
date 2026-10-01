# Catatan Dasar Terminal / Command Line

Terminal digunakan untuk berinteraksi dengan komputer melalui perintah teks. Beberapa perintah dasar berikut sangat sering digunakan saat bekerja dengan folder, file, Git, dan Visual Studio Code.

---

## 1. `pwd` — Mengetahui Folder yang Sedang Aktif

### Fungsi

`pwd` adalah singkatan dari **Print Working Directory**.

Digunakan untuk melihat **lokasi folder saat ini** di terminal.

### Sintaks

```bash
pwd
```

### Contoh

```bash
$ pwd
/Users/john/Documents/project
```

Artinya, terminal saat ini sedang berada di folder:

```text
project
```

yang berada di dalam:

```text
Documents
└── project
```

### Kapan digunakan?

Gunakan `pwd` ketika kamu bingung:

> "Sekarang saya sedang berada di folder mana?"

Misalnya sebelum menjalankan perintah yang berhubungan dengan file, kamu bisa mengecek lokasi terlebih dahulu.

---

# 2. `cd` — Berpindah Folder

### Fungsi

`cd` adalah singkatan dari **Change Directory**.

Digunakan untuk **berpindah dari satu folder ke folder lainnya**.

### Sintaks

```bash
cd nama-folder
```

### Contoh

Misalnya struktur folder:

```text
Documents
├── project
├── belajar
└── tugas
```

Jika saat ini berada di `Documents`:

```bash
pwd
```

hasil:

```text
/Users/john/Documents
```

Kemudian ingin masuk ke folder `project`:

```bash
cd project
```

Sekarang posisi menjadi:

```text
/Users/john/Documents/project
```

### Kembali ke folder sebelumnya

Gunakan:

```bash
cd ..
```

`..` berarti **folder satu tingkat di atas**.

Contoh:

```text
Documents
└── project
```

Jika berada di:

```text
Documents/project
```

kemudian menjalankan:

```bash
cd ..
```

maka kembali ke:

```text
Documents
```

### Kembali ke Home Directory

```bash
cd ~
```

atau cukup:

```bash
cd
```

### Catatan

Di macOS/Linux, istilah yang lebih tepat adalah **directory**, bukan drive. `cd` digunakan untuk berpindah **directory/folder**.

---

# 3. `clear` — Membersihkan Tampilan Terminal

### Fungsi

Membersihkan tulisan/perintah yang sebelumnya tampil di terminal.

### Sintaks

```bash
clear
```

### Contoh

Sebelum:

```text
$ pwd
/Users/john/Documents

$ ls
project
belajar
tugas

$ cd project

$ ls
index.html
style.css
script.js
```

Kemudian:

```bash
clear
```

Terminal akan terlihat bersih sehingga kamu bisa mulai bekerja dari tampilan kosong.

### Catatan

`clear` **tidak menghapus file atau folder**.

Perintah ini hanya membersihkan tampilan terminal.

---

# 4. `mkdir` — Membuat Folder Baru

### Fungsi

`mkdir` adalah singkatan dari **Make Directory**.

Digunakan untuk membuat folder baru.

### Sintaks

```bash
mkdir nama-folder
```

### Contoh

```bash
mkdir project
```

Akan membuat:

```text
project/
```

### Contoh penggunaan

Misalnya kamu sedang berada di:

```text
Documents
```

Kemudian:

```bash
mkdir belajar-programming
```

Hasilnya:

```text
Documents
└── belajar-programming
```

Kemudian masuk ke folder tersebut:

```bash
cd belajar-programming
```

### Membuat beberapa folder sekaligus

```bash
mkdir frontend backend database
```

Hasil:

```text
frontend/
backend/
database/
```

---

# 5. `ls` / `ll` — Melihat Isi Folder

## `ls`

### Fungsi

`ls` adalah singkatan dari **List**.

Digunakan untuk melihat file dan folder yang ada di directory saat ini.

### Sintaks

```bash
ls
```

### Contoh

Misalnya folder:

```text
project/
├── index.html
├── style.css
├── script.js
└── images/
```

Jika menjalankan:

```bash
ls
```

hasilnya kurang lebih:

```text
images
index.html
script.js
style.css
```

---

## `ll`

Pada banyak shell Linux/macOS, `ll` merupakan alias untuk menampilkan daftar file dalam format yang lebih detail. Namun, **`ll` bukan perintah standar yang tersedia di semua terminal**.

Contoh:

```bash
ll
```

bisa menghasilkan:

```text
-rw-r--r--  1 john  staff   1250 Oct  1 index.html
-rw-r--r--  1 john  staff    800 Oct  1 style.css
drwxr-xr-x  5 john  staff    160 Oct  1 images
```

Alternatif yang lebih umum dan portabel:

```bash
ls -l
```

### `ls -a`

Untuk melihat file tersembunyi:

```bash
ls -a
```

Contohnya akan menampilkan:

```text
.
..
.git
index.html
style.css
```

File/folder yang diawali `.` biasanya merupakan file tersembunyi di macOS/Linux.

---

# 6. `mv` — Memindahkan atau Rename File/Folder

`mv` adalah singkatan dari **Move**.

Menariknya, `mv` memiliki **dua fungsi utama**:

1. Memindahkan file/folder
2. Mengubah nama file/folder

---

## A. Rename File

### Sintaks

```bash
mv nama-file-lama nama-file-baru
```

### Contoh

Awalnya:

```text
index.html
```

Jalankan:

```bash
mv index.html home.html
```

Hasil:

```text
home.html
```

Jadi:

```text
index.html → home.html
```

---

## B. Rename Folder

Misalnya ada:

```text
project-lama/
```

Kemudian:

```bash
mv project-lama project-baru
```

Hasil:

```text
project-baru/
```

---

## C. Memindahkan File ke Folder

Misalnya:

```text
project/
├── index.html
└── images/
```

Kamu ingin memindahkan `index.html` ke folder `images`.

Gunakan:

```bash
mv index.html images/
```

Hasil:

```text
project/
└── images/
    └── index.html
```

### Cara mengingat

```bash
mv sumber tujuan
```

Contoh:

```bash
mv file.txt documents/
```

Artinya:

> Pindahkan `file.txt` ke folder `documents`.

---

# 7. `touch` — Membuat File Baru

### Fungsi

`touch` biasanya digunakan untuk membuat **file kosong baru**.

### Sintaks

```bash
touch nama-file
```

### Contoh

```bash
touch index.html
```

Akan membuat:

```text
index.html
```

Contoh lainnya:

```bash
touch style.css
```

```bash
touch script.js
```

Sehingga:

```text
project/
├── index.html
├── style.css
└── script.js
```

### Membuat beberapa file sekaligus

```bash
touch index.html style.css script.js
```

Akan membuat ketiganya sekaligus.

### Catatan

`touch` tidak berarti "membuka file". Dalam penggunaan dasar, perintah ini digunakan untuk **membuat file kosong** jika file tersebut belum ada.

---

# 8. `rm` — Menghapus File atau Folder

`rm` adalah singkatan dari **Remove**.

⚠️ **Hati-hati dengan perintah ini**, karena file yang dihapus melalui terminal dapat sulit atau tidak mudah dipulihkan.

---

## A. Menghapus File

### Sintaks

```bash
rm nama-file
```

### Contoh

Misalnya:

```text
project/
├── index.html
├── test.html
└── style.css
```

Kemudian:

```bash
rm test.html
```

Hasil:

```text
project/
├── index.html
└── style.css
```

`test.html` sudah dihapus.

---

## B. Menghapus Folder

Folder yang masih berisi file biasanya tidak bisa dihapus hanya dengan:

```bash
rm nama-folder
```

Untuk menghapus folder beserta isinya:

```bash
rm -rf nama-folder
```

Contoh:

```bash
rm -rf test-project
```

Artinya:

> Hapus folder `test-project` beserta seluruh isi di dalamnya.

### Arti `-rf`

```text
-r = recursive
-f = force
```

`-r` memungkinkan penghapusan directory beserta isinya.

`-f` memaksa penghapusan tanpa meminta konfirmasi dalam banyak kondisi.

⚠️ Karena itu, **jangan sembarangan menggunakan `rm -rf`**.

Misalnya jangan langsung menjalankan:

```bash
rm -rf *
```

tanpa benar-benar memahami folder tempat kamu berada.

Sebelum menghapus sesuatu, biasakan:

```bash
pwd
ls
```

untuk memastikan **lokasi dan isi folder**.

---

# 9. `code .` — Membuka Folder di Visual Studio Code

### Fungsi

```bash
code .
```

digunakan untuk membuka **folder yang sedang aktif** menggunakan Visual Studio Code.

Tanda:

```text
.
```

berarti:

> directory/folder saat ini.

### Contoh

Misalnya:

```text
Documents/
└── project/
    ├── index.html
    ├── style.css
    └── script.js
```

Masuk ke folder:

```bash
cd project
```

Kemudian:

```bash
code .
```

Visual Studio Code akan membuka folder:

```text
project
```

sebagai workspace.

---

# Contoh Alur Penggunaan dari Awal

Misalnya kita ingin membuat sebuah project sederhana bernama `belajar-html`.

### 1. Cek lokasi sekarang

```bash
pwd
```

Misalnya hasil:

```text
/Users/john/Documents
```

### 2. Buat folder project

```bash
mkdir belajar-html
```

### 3. Masuk ke folder

```bash
cd belajar-html
```

### 4. Cek lokasi

```bash
pwd
```

Hasil:

```text
/Users/john/Documents/belajar-html
```

### 5. Buat beberapa file

```bash
touch index.html style.css
```

### 6. Lihat isi folder

```bash
ls
```

Hasil:

```text
index.html
style.css
```

### 7. Buka project dengan VS Code

```bash
code .
```

Sekarang folder `belajar-html` akan dibuka di Visual Studio Code.

---

# Ringkasan Perintah

| Perintah | Fungsi                              | Contoh             |
| -------- | ----------------------------------- | ------------------ |
| `pwd`    | Melihat lokasi folder saat ini      | `pwd`              |
| `cd`     | Berpindah folder                    | `cd project`       |
| `cd ..`  | Naik satu folder                    | `cd ..`            |
| `clear`  | Membersihkan tampilan terminal      | `clear`            |
| `mkdir`  | Membuat folder                      | `mkdir project`    |
| `ls`     | Melihat isi folder                  | `ls`               |
| `ls -l`  | Melihat isi folder secara detail    | `ls -l`            |
| `ls -a`  | Melihat file tersembunyi            | `ls -a`            |
| `ll`     | List detail, jika alias tersedia    | `ll`               |
| `mv`     | Memindahkan/rename file atau folder | `mv a.txt b.txt`   |
| `touch`  | Membuat file kosong                 | `touch index.html` |
| `rm`     | Menghapus file                      | `rm test.txt`      |
| `rm -rf` | Menghapus folder beserta isinya     | `rm -rf test`      |
| `code .` | Membuka folder aktif di VS Code     | `code .`           |

