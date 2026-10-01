Tentu. Berikut saya buatkan **cheatsheet shortcut VS Code yang paling sering digunakan untuk web development**, terutama untuk **HTML, CSS, JavaScript, dan workflow sehari-hari**.

# ⌨️ VS Code Shortcut Cheatsheet — Web Development

> **Catatan:**
> `Ctrl` = Windows/Linux
> `Cmd` = macOS
>
> Karena shortcut Windows dan macOS berbeda, saya tuliskan keduanya jika berbeda.

---

## 1. ⭐ Shortcut Dasar yang Wajib Hafal

| Fungsi            | Windows/Linux      | macOS              |
| ----------------- | ------------------ | ------------------ |
| Save              | `Ctrl + S`         | `Cmd + S`          |
| Save All          | `Ctrl + K`, `S`    | `Cmd + Option + S` |
| Undo              | `Ctrl + Z`         | `Cmd + Z`          |
| Redo              | `Ctrl + Y`         | `Cmd + Shift + Z`  |
| Copy              | `Ctrl + C`         | `Cmd + C`          |
| Cut               | `Ctrl + X`         | `Cmd + X`          |
| Paste             | `Ctrl + V`         | `Cmd + V`          |
| Select All        | `Ctrl + A`         | `Cmd + A`          |
| Find              | `Ctrl + F`         | `Cmd + F`          |
| Replace           | `Ctrl + H`         | `Cmd + Option + F` |
| Close Tab         | `Ctrl + W`         | `Cmd + W`          |
| Reopen Closed Tab | `Ctrl + Shift + T` | `Cmd + Shift + T`  |

### ⭐ Paling penting

Kalau baru mulai VS Code, hafalkan:

```text
Ctrl/Cmd + S     → Save
Ctrl/Cmd + Z     → Undo
Ctrl/Cmd + Shift + Z → Redo
Ctrl/Cmd + F     → Find
Ctrl/Cmd + H     → Replace
Ctrl/Cmd + W     → Close tab
```

---

# 2. 📁 Membuka dan Mengelola File

### Quick Open

```text
Ctrl + P
```

macOS:

```text
Cmd + P
```

Digunakan untuk **mencari dan membuka file dengan cepat**.

Misalnya project memiliki:

```text
index.html
about.html
contact.html
style.css
script.js
```

Tekan:

```text
Ctrl + P
```

kemudian ketik:

```text
style.css
```

dan tekan `Enter`.

Tidak perlu mencari file melalui Explorer.

---

# 3. 🔎 Command Palette

```text
Ctrl + Shift + P
```

macOS:

```text
Cmd + Shift + P
```

Ini salah satu shortcut **paling penting di VS Code**.

Command Palette memungkinkan kamu mencari hampir semua command VS Code.

Contoh:

```text
> Format Document
> Rename Symbol
> Git: Commit
> Developer: Reload Window
> Preferences: Open Settings
```

### Tips

Kalau kamu tidak tahu shortcut sebuah fitur:

```text
Ctrl + Shift + P
```

kemudian cari nama fiturnya.

---

# 4. 🖥️ Membuka Terminal

```text
Ctrl + `
```

macOS:

```text
Ctrl + `
```

Tanda `` ` `` adalah **backtick**, biasanya berada di dekat tombol `1` pada keyboard.

Ini sangat berguna untuk web development karena kamu sering menggunakan:

```bash
npm install
npm run dev
git status
git add .
git commit
```

---

# 5. 📑 Membuka Explorer

```text
Ctrl + Shift + E
```

macOS:

```text
Cmd + Shift + E
```

Membuka sidebar **Explorer**.

---

# 6. 🔍 Search di Seluruh Project

```text
Ctrl + Shift + F
```

macOS:

```text
Cmd + Shift + F
```

Ini sangat berguna dalam project web.

Misalnya kamu mencari:

```text
navbar
```

VS Code akan mencari `navbar` di seluruh project.

Contoh:

```text
src/
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   └── Home.jsx
└── App.jsx
```

Kalau mencari:

```text
navbar
```

VS Code bisa menemukan semua file yang mengandung kata tersebut.

---

# 7. 🔄 Replace di Seluruh Project

Buka:

```text
Ctrl + Shift + H
```

macOS:

```text
Cmd + Shift + H
```

Misalnya ingin mengubah:

```text
oldName
```

menjadi:

```text
newName
```

VS Code dapat mengganti semua kemunculan dalam project.

⚠️ Gunakan dengan hati-hati karena perubahan bisa terjadi di banyak file sekaligus.

---

# 8. ✏️ Edit Banyak Baris Sekaligus

## Multi Cursor

```text
Alt + Click
```

Windows/Linux:

```text
Alt + Click
```

macOS:

```text
Option + Click
```

Contoh:

```html
<p>Apple</p>
<p>Apple</p>
<p>Apple</p>
```

Kamu bisa membuat beberapa cursor lalu mengedit semuanya sekaligus.

---

# 9. ➕ Menambahkan Cursor di Baris Atas/Bawah

### Windows/Linux

```text
Ctrl + Alt + ↑
Ctrl + Alt + ↓
```

### macOS

```text
Cmd + Option + ↑
Cmd + Option + ↓
```

Berguna ketika ingin mengetik kode yang sama di beberapa baris.

---

# 10. 🔁 Duplicate Line

### Windows/Linux

```text
Shift + Alt + ↑
Shift + Alt + ↓
```

### macOS

```text
Shift + Option + ↑
Shift + Option + ↓
```

Misalnya:

```html
<div class="card"></div>
```

Tekan:

```text
Shift + Alt + ↓
```

menjadi:

```html
<div class="card"></div>
<div class="card"></div>
```

---

# 11. 🗑️ Delete Line

### Windows/Linux

```text
Shift + Ctrl + K
```

### macOS

```text
Cmd + Shift + K
```

Menghapus seluruh baris tempat cursor berada.

---

# 12. ↕️ Memindahkan Baris

### Windows/Linux

```text
Alt + ↑
Alt + ↓
```

### macOS

```text
Option + ↑
Option + ↓
```

Contoh:

```html
<h1>Hello</h1>
<p>Welcome</p>
<button>Click</button>
```

Cursor berada di:

```html
<p>Welcome</p>
```

Tekan:

```text
Alt + ↑
```

hasil:

```html
<p>Welcome</p>
<h1>Hello</h1>
<button>Click</button>
```

Sangat berguna untuk merapikan HTML.

---

# 13. 🔢 Select Line

### Windows/Linux

```text
Ctrl + L
```

### macOS

```text
Cmd + L
```

Memilih satu baris tempat cursor berada.

---

# 14. 📐 Format Document

### Windows

```text
Shift + Alt + F
```

### macOS

```text
Shift + Option + F
```

Digunakan untuk merapikan formatting kode.

Contoh:

```html
<div><h1>Hello</h1><p>World</p></div>
```

Setelah format:

```html
<div>
    <h1>Hello</h1>
    <p>World</p>
</div>
```

Sangat berguna untuk HTML, CSS, JavaScript, JSON, dan banyak bahasa lainnya.

---

# 15. 💡 Quick Fix

### Windows/Linux

```text
Ctrl + .
```

### macOS

```text
Cmd + .
```

Menampilkan solusi atau tindakan yang disarankan VS Code.

Contohnya ketika ada warning/error tertentu.

---

# 16. ✏️ Rename Symbol

### Windows/Linux

```text
F2
```

### macOS

```text
F2
```

Sangat berguna saat bekerja dengan JavaScript/TypeScript.

Misalnya:

```javascript
const username = "John";
console.log(username);
```

Rename `username` menggunakan:

```text
F2
```

menjadi:

```javascript
const userName = "John";
console.log(userName);
```

VS Code dapat mengubah referensi yang terkait.

---

# 17. 🧭 Go to Definition

```text
F12
```

Digunakan untuk pergi ke **definisi** function, variable, class, component, dan sebagainya.

Contoh:

```javascript
import Header from "./Header";
```

Kamu bisa menekan `F12` pada `Header` untuk menuju definisinya.

---

# 18. 🔙 Go Back / Forward

### Back

```text
Alt + ←
```

### Forward

```text
Alt + →
```

macOS:

```text
Ctrl + -
Ctrl + Shift + -
```

Sangat berguna setelah berpindah-pindah antar file menggunakan `F12`.

---

# 19. 🧩 Toggle Sidebar

```text
Ctrl + B
```

macOS:

```text
Cmd + B
```

Menyembunyikan atau menampilkan sidebar.

Sangat berguna ketika ingin mendapatkan area coding yang lebih luas.

---

# 20. 🖥️ Zen Mode

```text
Ctrl + K
Z
```

macOS:

```text
Cmd + K
Z
```

Membuat VS Code menjadi mode fokus.

Sidebar dan beberapa elemen UI disembunyikan sehingga fokus pada kode.

Untuk keluar biasanya tekan:

```text
Esc
```

---

# 21. 🔀 Split Editor

```text
Ctrl + \
```

macOS:

```text
Cmd + \
```

Membagi editor menjadi beberapa bagian.

Contoh:

```text
┌───────────────┬───────────────┐
│ index.html    │ style.css     │
│               │               │
│               │               │
└───────────────┴───────────────┘
```

Sangat berguna untuk web development karena sering perlu melihat:

```text
HTML ↔ CSS
HTML ↔ JavaScript
Component ↔ CSS
```

---

# 22. 🔢 Go to Line

```text
Ctrl + G
```

macOS:

```text
Cmd + G
```

Masukkan nomor baris.

Misalnya:

```text
250
```

VS Code langsung menuju baris 250.

---

# 23. 🔍 Zoom Editor

### Zoom In

```text
Ctrl + +
```

### Zoom Out

```text
Ctrl + -
```

### Reset

```text
Ctrl + 0
```

macOS menggunakan `Cmd`.

---

# 24. 📝 Comment Code

Ini **sangat penting untuk web development**.

## Single-line comment

### Windows/Linux

```text
Ctrl + /
```

### macOS

```text
Cmd + /
```

Contoh HTML:

```html
<!-- Ini adalah komentar -->
```

JavaScript:

```javascript
// Ini adalah komentar
```

CSS:

```css
/* Ini adalah komentar */
```

---

# 25. 📦 Block Comment

### Windows/Linux

```text
Shift + Alt + A
```

### macOS

```text
Shift + Option + A
```

Contoh:

```javascript
/*
  Ini adalah
  block comment
*/
```

---

# 26. 🧠 IntelliSense / Autocomplete

Biasanya cukup mengetik kode dan VS Code akan memberikan suggestion.

Misalnya:

```javascript
console.
```

VS Code akan menampilkan:

```text
log
error
warn
info
...
```

Tekan:

```text
Enter
```

untuk memilih suggestion.

---

# 27. 🔥 Emmet

Untuk HTML/CSS, Emmet sangat penting.

Contoh:

```text
!
```

lalu:

```text
Tab
```

menghasilkan template HTML.

Contoh:

```text
div.container>h1{Hello}+p{Welcome}
```

tekan:

```text
Tab
```

menghasilkan:

```html
<div class="container">
    <h1>Hello</h1>
    <p>Welcome</p>
</div>
```

---

# 28. 🐛 Debug

### Start/Continue

```text
F5
```

### Run Without Debugging

```text
Ctrl + F5
```

### Toggle Breakpoint

```text
F9
```

Breakpoint sangat berguna untuk debugging JavaScript.

---

# 29. 🌐 Shortcut yang Berguna untuk Web Development

Untuk workflow HTML/CSS/JS, saya sarankan hafalkan kelompok berikut.

### HTML

```text
! + Tab
```

→ HTML boilerplate

```text
Ctrl/Cmd + /
```

→ Comment

```text
Shift + Alt/Option + F
```

→ Format

---

### CSS

Gunakan Emmet:

```text
m10
```

→

```css
margin: 10px;
```

```text
p20
```

→

```css
padding: 20px;
```

```text
df
```

→

```css
display: flex;
```

---

### JavaScript

```text
F2
```

→ Rename Symbol

```text
F12
```

→ Go to Definition

```text
Ctrl/Cmd + .
```

→ Quick Fix

```text
F5
```

→ Debug

```text
F9
```

→ Breakpoint

---

# ⭐ 15 Shortcut yang Saya Sarankan Dihafalkan Dulu

Jangan mencoba menghafalkan semuanya sekaligus. Untuk pemula web development, mulai dari ini:

| #  | Shortcut                   | Kegunaan               |
| -- | -------------------------- | ---------------------- |
| 1  | `Ctrl/Cmd + S`             | Save                   |
| 2  | `Ctrl/Cmd + P`             | Cari/buka file         |
| 3  | `Ctrl/Cmd + Shift + P`     | Command Palette        |
| 4  | `Ctrl/Cmd + Shift + F`     | Search seluruh project |
| 5  | `Ctrl/Cmd + F`             | Find                   |
| 6  | `Ctrl/Cmd + H`             | Replace                |
| 7  | `Ctrl/Cmd + /`             | Comment                |
| 8  | `Shift + Alt/Option + F`   | Format document        |
| 9  | `Alt/Option + ↑ ↓`         | Pindah baris           |
| 10 | `Shift + Alt/Option + ↑ ↓` | Duplicate line         |
| 11 | `Ctrl/Cmd + Shift + K`     | Delete line            |
| 12 | `F2`                       | Rename                 |
| 13 | `F12`                      | Go to Definition       |
| 14 | `Ctrl/Cmd + \`             | Split editor           |
| 15 | `` Ctrl + ` ``             | Buka terminal          |

### 🧠 Kalau dibuat seperti "peta kerja"

```text
                VS CODE
                   │
       ┌───────────┼───────────┐
       ↓           ↓           ↓
    EDITING      SEARCH      TERMINAL
       │           │           │
   Ctrl + S    Ctrl + F     Ctrl + `
   Ctrl + Z    Ctrl + H
   Alt + ↑↓    Ctrl + P
   Ctrl + /    Ctrl + Shift + F
       │
       ↓
    CODING
       │
   F2 → Rename
   F12 → Definition
   F9 → Breakpoint
   F5 → Debug
       │
       ↓
   WEB DEV
       │
   Emmet + Tab
   Format Document
   HTML / CSS / JS
```

**Urutan belajar yang enak:** kuasai dulu **Save → Find → Comment → Format → Duplicate/Move Line → Quick Open → Terminal → F2/F12 → Debugging**. Setelah itu baru tambahkan shortcut yang lebih jarang dipakai.
