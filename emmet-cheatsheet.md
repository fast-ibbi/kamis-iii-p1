# Cheatsheet Emmet — VS Code

Emmet adalah fitur bawaan **Visual Studio Code** yang memungkinkan kita menulis HTML/CSS dengan sintaks singkat, lalu mengembangkannya menjadi kode lengkap.

> **Cara dasar:** ketik Emmet → tekan `Tab` atau `Enter` sesuai konfigurasi VS Code.

---

## 1. Membuat Tag HTML

### Tag sederhana

```text
div
```

menjadi:

```html
<div></div>
```

Contoh:

```text
p
```

```html
<p></p>
```

```text
h1
```

```html
<h1></h1>
```

---

## 2. Membuat Class — `.`

Gunakan `.` untuk membuat class.

```text
div.container
```

menjadi:

```html
<div class="container"></div>
```

Contoh:

```text
p.text
```

```html
<p class="text"></p>
```

### Beberapa class

```text
div.container.main
```

menjadi:

```html
<div class="container main"></div>
```

---

## 3. Membuat ID — `#`

Gunakan `#` untuk membuat ID.

```text
div#header
```

menjadi:

```html
<div id="header"></div>
```

Contoh:

```text
section#about
```

```html
<section id="about"></section>
```

### ID + Class

```text
div#header.container
```

menjadi:

```html
<div id="header" class="container"></div>
```

---

# 4. Child — `>`

Digunakan untuk membuat **elemen di dalam elemen lain**.

```text
ul>li
```

menjadi:

```html
<ul>
    <li></li>
</ul>
```

Contoh:

```text
div>h1
```

menjadi:

```html
<div>
    <h1></h1>
</div>
```

### Contoh yang sering digunakan

```text
nav>ul>li
```

menjadi:

```html
<nav>
    <ul>
        <li></li>
    </ul>
</nav>
```

---

# 5. Sibling — `+`

Digunakan untuk membuat **elemen sejajar/setingkat**.

```text
h1+p
```

menjadi:

```html
<h1></h1>
<p></p>
```

Contoh:

```text
header+main+footer
```

menjadi:

```html
<header></header>
<main></main>
<footer></footer>
```

---

# 6. Multiplication — `*`

Digunakan untuk membuat beberapa elemen sekaligus.

```text
li*5
```

menjadi:

```html
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
```

Contoh:

```text
div.card*3
```

menjadi:

```html
<div class="card"></div>
<div class="card"></div>
<div class="card"></div>
```

---

# 7. Text — `{}`

Gunakan `{}` untuk memasukkan teks.

```text
h1{Hello World}
```

menjadi:

```html
<h1>Hello World</h1>
```

Contoh:

```text
p{Belajar Emmet di VS Code}
```

menjadi:

```html
<p>Belajar Emmet di VS Code</p>
```

---

# 8. Attribute — `[]`

Gunakan `[]` untuk membuat attribute.

```text
input[type=text]
```

menjadi:

```html
<input type="text">
```

Contoh:

```text
input[type=email]
```

```html
<input type="email">
```

### Attribute `placeholder`

```text
input[type=text][placeholder="Nama Lengkap"]
```

menjadi:

```html
<input type="text" placeholder="Nama Lengkap">
```

---

# 9. Numbering — `$`

`$` digunakan untuk membuat nomor otomatis.

```text
li.item$*5
```

menjadi:

```html
<li class="item1"></li>
<li class="item2"></li>
<li class="item3"></li>
<li class="item4"></li>
<li class="item5"></li>
```

Bisa juga digunakan pada text:

```text
li{Item $}*5
```

menjadi:

```html
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 4</li>
<li>Item 5</li>
```

---

# 10. Grouping — `()`

Parentheses digunakan untuk mengelompokkan struktur.

Contoh:

```text
(header>h1)+(main>p)+(footer>p)
```

menjadi:

```html
<header>
    <h1></h1>
</header>

<main>
    <p></p>
</main>

<footer>
    <p></p>
</footer>
```

---

# 11. Kombinasi Emmet

Ini bagian yang paling sering digunakan.

### Navbar sederhana

```text
nav>ul>li*4>a
```

menjadi:

```html
<nav>
    <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
    </ul>
</nav>
```

---

### Navbar dengan teks

```text
nav>ul>li*4>a{Menu $}
```

menjadi:

```html
<nav>
    <ul>
        <li><a href="">Menu 1</a></li>
        <li><a href="">Menu 2</a></li>
        <li><a href="">Menu 3</a></li>
        <li><a href="">Menu 4</a></li>
    </ul>
</nav>
```

---

### Card

```text
div.card>h2{Judul}+p{Deskripsi}+button{Baca Selengkapnya}
```

menjadi:

```html
<div class="card">
    <h2>Judul</h2>
    <p>Deskripsi</p>
    <button>Baca Selengkapnya</button>
</div>
```

---

### Banyak card

```text
div.card*3>h2{Card $}+p{Deskripsi card $}
```

menjadi:

```html
<div class="card">
    <h2>Card 1</h2>
    <p>Deskripsi card 1</p>
</div>

<div class="card">
    <h2>Card 2</h2>
    <p>Deskripsi card 2</p>
</div>

<div class="card">
    <h2>Card 3</h2>
    <p>Deskripsi card 3</p>
</div>
```

---

# 12. Struktur HTML5 dengan `!`

Salah satu Emmet yang **paling sering digunakan**:

```text
!
```

Tekan `Tab`.

Hasilnya:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Ini sangat berguna ketika mulai membuat file HTML baru.

---

# 13. Link

```text
a
```

menghasilkan:

```html
<a href=""></a>
```

Bisa langsung dengan attribute:

```text
a[href="https://example.com"]{Website}
```

menjadi:

```html
<a href="https://example.com">Website</a>
```

---

# 14. Image

```text
img
```

menghasilkan:

```html
<img src="" alt="">
```

Bisa langsung diisi:

```text
img:src
```

atau menggunakan attribute:

```text
img[src="images/photo.jpg"][alt="Foto"]
```

menjadi:

```html
<img src="images/photo.jpg" alt="Foto">
```

---

# 15. Form

Contoh form sederhana:

```text
form>label+input+button
```

menjadi:

```html
<form>
    <label></label>
    <input>
    <button></button>
</form>
```

Lebih lengkap:

```text
form>label{Nama}+input[type=text][placeholder="Masukkan nama"]+button{Submit}
```

menjadi:

```html
<form>
    <label>Nama</label>
    <input type="text" placeholder="Masukkan nama">
    <button>Submit</button>
</form>
```

---

# 16. CSS Emmet

Emmet juga dapat digunakan di CSS.

### Margin

Ketik:

```text
m10
```

menjadi:

```css
margin: 10px;
```

### Padding

```text
p20
```

menjadi:

```css
padding: 20px;
```

### Width

```text
w100
```

menjadi:

```css
width: 100px;
```

### Height

```text
h100
```

menjadi:

```css
height: 100px;
```

### Display Flex

```text
df
```

menjadi:

```css
display: flex;
```

### Position

```text
pos:a
```

menjadi:

```css
position: absolute;
```

---

# Cheatsheet Inti 📝

Kalau baru belajar, **hafalkan yang ini dulu**:

| Emmet         | Hasil / Fungsi                          |
| ------------- | --------------------------------------- |
| `!`           | Template HTML5                          |
| `div`         | `<div></div>`                           |
| `.container`  | Class                                   |
| `#header`     | ID                                      |
| `>`           | Child                                   |
| `+`           | Sibling                                 |
| `*`           | Duplikasi                               |
| `{}`          | Text                                    |
| `[]`          | Attribute                               |
| `$`           | Numbering                               |
| `()`          | Grouping                                |
| `a`           | Link                                    |
| `img`         | Image                                   |
| `ul>li`       | List                                    |
| `nav>ul>li*3` | Navbar/list                             |
| `code .`      | Bukan Emmet — membuka folder di VS Code |

### Pola paling penting

```text
element.class#id>child*jumlah{Text}[attribute]
```

Contoh:

```text
div.card#produk>h2{Produk $}+p{Deskripsi}+button[type=button]{Beli} 
```

Intinya, Emmet memungkinkan kita mengubah:

```text
nav>ul>li*3>a{Menu $}
```

menjadi HTML yang panjang hanya dengan **satu baris + Tab**.
