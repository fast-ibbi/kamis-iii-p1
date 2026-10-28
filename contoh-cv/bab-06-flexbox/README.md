# Bab 6 — Flexbox

**Folder:** `bab-06-flexbox/` · **Titik tolak:** `bab-05-box-model/`
**Pratinjau:** `index.html` dan `tentang.html`

## Inti bab ini

Empat kawasan berubah dari tumpukan blok menjadi flex container: header, navigasi, hero,
baris kartu, dan footer. Prinsipnya sama di semua tempat — jarak dari `gap`, bukan
`margin` per item; perataan dari `align-items`/`justify-content`, bukan `vertical-align`
atau `inline-block`.

## Yang berubah dari Bab 5

| Berkas | Perubahan |
| --- | --- |
| `index.html` | Kartu proyek dibungkus `div.proyek-list`; footer mendapat `nav.footer-nav` |
| `tentang.html` | Footer mendapat `nav.footer-nav` yang sama |
| `css/style.css` | 324 → 366 baris. Enam blok aturan diubah menjadi flex |

## Rincian pekerjaan

### 1. Header sebagai baris

```css
.site-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-unit);
}
```

Logo di kiri, navigasi di kanan, `flex-wrap` supaya tetap turun baris di layar sempit.

### 2. Navigasi tanpa `inline-block`

| Sebelum (Bab 5) | Sesudah (Bab 6) |
| --- | --- |
| `ul` `margin`, `padding`, `list-style: none` | `display: flex`, `flex-wrap: wrap`, `gap: calc(var(--space-unit) * 1.5)`, `margin: 0` |
| `li` `display: inline-block` + `margin-right` | `li` hanya `margin-right: 0` |
| `li:last-child` aturan khusus | **Dihapus** — `gap` mengurus jarak terakhir |

Ini poin ajarnya: `gap` menghilangkan kebutuhan menetralkan margin item terakhir.

### 3. Hero satu kolom terpusat

```css
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(var(--space-unit) * 2);
  text-align: center;
}
.hero p, .hero figure { margin: 0; }
```

`gap` menggantikan margin bawaan `p` dan `figure`, jadi jarak antaranak konsisten.

### 4. Baris kartu proyek

Markup mendapat satu pembungkus:

```html
<div class="proyek-list">
  <article class="proyek-card"> … </article>   × 6
</div>
```

```css
.proyek-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: calc(var(--space-unit) * 3);
}

.proyek-card {
  flex: 1 1 300px;      /* boleh tumbuh, boleh menyusut, dasar 300 px */
  max-width: 380px;
  margin: 0;            /* margin auto dari Bab 5 dihapus */
}
```

`flex: 1 1 300px` membuat kartu mengisi baris dan membungkus sendiri saat ruang habis —
tanpa satu pun media query.

### 5. Meta kartu jadi baris

`.proyek-meta` memakai `display: flex`, `justify-content: space-between`,
`align-items: center`, dan `gap` sehingga "Peran: frontend" dan "Lihat detail" terpisah
ke dua ujung, tetap membungkus di layar sempit.

### 6. Footer dengan menu

Markup baru di kedua halaman:

```html
<nav class="footer-nav" aria-label="Navigasi footer">
  <a href="index.html">Beranda</a>
  <a href="index.html#proyek">Proyek</a>
  <a href="tentang.html">Tentang</a>
  <a href="index.html#kontak">Kontak</a>
</nav>
```

```css
.site-footer { display: flex; flex-wrap: wrap; align-items: center;
               justify-content: space-between; gap: calc(var(--space-unit) * 2); }
.site-footer .footer-nav { display: flex; gap: calc(var(--space-unit) * 2);
                           margin-left: auto; }
```

`margin-left: auto` mendorong menu ke kanan — teknik flex yang tidak mungkin dilakukan
dengan `margin` biasa.

Baris hak cipta juga digabung: `© 2025 Rizky Ardiansyah. Belajar HTML dan CSS, satu
halaman setiap pertemuan.`

## Berkas di folder ini

| Berkas | Isi |
| --- | --- |
| `index.html` | Beranda + `.proyek-list` + footer dengan `.footer-nav` |
| `tentang.html` | Halaman tentang + footer dengan `.footer-nav` |
| `css/style.css` | v2 lanjutan: flex pada header, nav, hero, `.proyek-list`, `.proyek-meta`, footer |

## Cara memeriksa

1. `.site-nav ul` adalah flex container; jarak antar item datang dari `gap`. Hapus
   `gap` di DevTools — item menempel tanpa margin.
2. Ubah lebar jendela: kartu membungkus sendiri ke baris berikutnya karena
   `flex: 1 1 300px`, bukan karena media query.
3. `.footer-nav` memakai `margin-left: auto`; hapus baris itu dan menu kembali menempel
   ke kiri.
4. Kartu pada satu baris bisa berbeda tinggi bila deskripsinya berbeda panjang — masalah
   yang diselesaikan Grid di Bab 7.

## Yang dibawa ke Bab 7

Flexbox bagus untuk satu dimensi, tetapi baris kartu masih membiarkan tinggi kartu
berbeda dan tidak punya jumlah kolom yang pasti. Bab 7 mengganti `.proyek-list` menjadi
Grid `auto-fit`, membuat kartu setinggi barisnya, dan menambahkan media query
mobile-first.
