# Bab 7 — Grid dan responsif

**Folder:** `bab-07-grid/` · **Titik tolak:** `bab-06-flexbox/`
**Pratinjau:** `index.html` dan `tentang.html`

## Inti bab ini

Baris kartu pindah dari Flexbox ke Grid. Alasannya konkret: Flexbox membiarkan tinggi
kartu berbeda dalam satu baris, sedangkan Grid menyamakan tinggi seluruh item pada satu
baris. Bab ini juga menambahkan dua media query mobile-first dan membungkus tabel
pendidikan agar bisa digulir tanpa membuat halaman meluber.

Markup beranda tidak berubah sama sekali — seluruh pekerjaan ada di CSS.

## Yang berubah dari Bab 6

| Berkas | Perubahan |
| --- | --- |
| `css/style.css` | 366 → 410 baris. `.proyek-list` jadi Grid, kartu jadi flex kolom, dua media query, `.table-scroll` |
| `tentang.html` | Tabel pendidikan dibungkus `div.table-scroll` |
| `index.html` | Tidak berubah |

## Rincian pekerjaan

### 1. Baris kartu menjadi Grid

| Sebelum (Bab 6) | Sesudah (Bab 7) |
| --- | --- |
| `display: flex; flex-wrap: wrap; justify-content: center` | `display: grid` |
| `flex: 1 1 300px; max-width: 380px` | `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`; `max-width: none` |

`auto-fit` + `minmax(280px, 1fr)` menghasilkan jumlah kolom yang menyesuaikan lebar
sendiri: satu kolom di ponsel, dua di tablet, tiga di desktop — tanpa media query untuk
jumlah kolom.

### 2. Kartu jadi flex kolom

```css
.proyek-card { display: flex; flex-direction: column; }
.proyek-body { display: flex; flex-direction: column; flex: 1; }
.proyek-meta { margin: auto 0 0; }   /* didorong ke dasar kartu */
```

`margin: auto 0 0` pada `.proyek-meta` membuat baris "Peran · Lihat detail" selalu
menempel di dasar kartu. Inilah alasan Grid dipakai: semua kartu pada satu baris sama
tinggi, jadi dasar kartu bisa disejajarkan.

### 3. Tabel yang bisa digulir

| Berkas | Perubahan |
| --- | --- |
| `tentang.html` | `<table>` dibungkus `<div class="table-scroll">` |
| `css/style.css` | `.table-scroll { overflow-x: auto; }` |

Tabel pendidikan punya empat kolom dan tetap terbaca di 375 px — yang bergulir hanya
wadahnya, bukan seluruh halaman.

### 4. Media query mobile-first

```css
@media (min-width: 768px) {
  .hero {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    text-align: left;
  }
  .hero figure { grid-column: 2; grid-row: 1 / span 3; }
  .hero .lead  { max-width: 52ch; }
}

@media (min-width: 992px) {
  .proyek-list { grid-template-columns: repeat(3, 1fr); }
  section { padding-left: calc(var(--space-unit) * 6);
            padding-right: calc(var(--space-unit) * 6); }
}
```

- Gaya dasar ditulis untuk layar sempit; media query hanya **menambah**.
- Di 768 px hero berubah dari satu kolom terpusat menjadi dua kolom rata kiri, dengan
  gambar menempati kolom kanan sepanjang tiga baris teks.
- Di 992 px jumlah kolom kartu dikunci tiga dan padding halaman melebar.

## Berkas di folder ini

| Berkas | Isi |
| --- | --- |
| `index.html` | Sama seperti Bab 6 |
| `tentang.html` | Tabel pendidikan di dalam `.table-scroll` |
| `css/style.css` | v2 final: Grid `auto-fit`, kartu flex kolom, dua media query |

## Cara memeriksa

1. `.proyek-list` memakai `repeat(auto-fit, minmax(280px, 1fr))` di bawah 992 px.
   Ubah `280px` di DevTools ke `400px` dan hitung ulang kolomnya.
2. Ubah lebar dari 375 → 768: hero berubah dari satu kolom terpusat menjadi dua kolom
   rata kiri.
3. Kartu pada satu baris kini sama tinggi; hapus `margin: auto 0 0` pada `.proyek-meta`
   dan perhatikan tautan "Lihat detail" naik ke tengah kartu.
4. Perkecil jendela di halaman tentang: tabel pendidikan digulir di dalam wadahnya,
   halaman tidak meluber ke samping.

## Yang dibawa ke Bab 9

Bab 7 adalah puncak CSS tulisan sendiri: 410 baris untuk tata letak, tipografi, dan
komponen. Bab 9 membuang hampir semua aturan tata letak itu dan menggantinya dengan
Bootstrap 5.3.3 — CSS menyusut menjadi 178 baris yang hanya berisi token, tipografi, dan
overlay palet.

> Catatan: tidak ada folder Bab 8 pada contoh ini. Bab 8 di slide tidak berdeck, jadi
> lompatan `bab-07` → `bab-09` memang disengaja.
