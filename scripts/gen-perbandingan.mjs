#!/usr/bin/env node
// Membuat contoh-cv/PERBANDINGAN.md: tautan & perintah untuk membandingkan
// tiap tag tahap contoh-cv tanpa mengunduh zip.
//
// Pakai: node scripts/gen-perbandingan.mjs
// Jalankan ulang setiap kali tag contoh-cv/* dibuat atau dipindahkan.

import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const REPO = 'fast-ibbi/kamis-iii-p1';
const OUT = resolve(ROOT, 'contoh-cv/PERBANDINGAN.md');

const git = (...args) =>
  execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' }).trim();

const tags = git('tag', '-l', 'contoh-cv/*', '--sort=version:refname')
  .split('\n')
  .filter(Boolean);

if (tags.length === 0) {
  console.error('tidak ada tag contoh-cv/*; jalankan dulu pembuatan tag-nya.');
  process.exit(1);
}

const babOf = (tag) => tag.replace(/^contoh-cv\/bab-(\d+)-.*$/, '$1');
const sha = (tag) => git('rev-parse', '--short', `${tag}^{commit}`);
const subject = (tag) => git('tag', '-l', tag, '--format=%(contents:subject)');
const shortstat = (a, b) => {
  // '--' wajib: nama tag juga berupa path (contoh-cv/bab-01-...), tanpa itu git
  // menganggapnya argumen ambigu (revision vs filename).
  const raw = git('diff', '--shortstat', a, b, '--').replace(/^ /, '');
  if (!raw) return '_tidak ada perubahan berkas_';
  return raw
    .replace(/(\d+) files? changed/, '$1 berkas')
    .replace(/(\d+) insertions?\(\+\)/, '$1 baris ditambah')
    .replace(/(\d+) deletions?\(-\)/, '$1 baris dihapus');
};

const compare = (a, b) => `https://github.com/${REPO}/compare/${a}...${b}`;
const first = tags[0];
const last = tags[tags.length - 1];
const pad = (n) => String(n).padStart(2, '0');

const lines = [];
const push = (...xs) => lines.push(...xs);

push(
  '# Perbandingan antar tahap (tanpa unduh zip)',
  '',
  'Empat belas tahap di `contoh-cv/` juga ditandai sebagai **git tag**, satu per tahap.',
  'Halaman ini mengumpulkan cara membandingkan kode antar tahap — diff berwarna di GitHub',
  'atau di terminal — supaya tidak perlu mengunduh zip tiap tag lalu membandingkan manual.',
  '',
  'Setiap tautan di bawah menampilkan diff berwarna (*unified* maupun *split*) beserta',
  'daftar berkas yang berubah. Karena tiap tahap adalah commit tersendiri, `compare`',
  'selalu memperlihatkan selisih nyata, bukan "no commits".',
  '',
  '---',
  '',
  '## Tahap N → tahap N+1',
  '',
  '| Dari | Ke | Perubahan | Bandingkan |',
  '| --- | --- | --- | --- |',
);

for (let i = 1; i < tags.length; i += 1) {
  const a = tags[i - 1];
  const b = tags[i];
  push(
    `| \`${pad(babOf(a))}\` | \`${pad(babOf(b))}\` | ${shortstat(a, b)} | ` +
      `[diff ${babOf(a)} → ${babOf(b)}](${compare(a, b)}) |`,
  );
}

push(
  '',
  'Kolom **Perubahan** memakai keluaran `git diff --shortstat`, bukan ukuran zip.',
  '',
  '---',
  '',
  '## Tautan lain yang berguna',
  '',
  `- Seluruh perjalanan bab ${babOf(first)} → bab ${babOf(last)}: <${compare(first, last)}>`,
  `- Satu tahap saja dibandingkan \`main\` saat ini: <https://github.com/${REPO}/compare/main...${last}>`,
  `- Daftar semua tag: <https://github.com/${REPO}/tags> — di halaman itu setiap tag hanya`,
  '  menawarkan `zip`/`tar.gz`; untuk melihat **isi perubahannya** pakai tautan `compare/`',
  '  di atas atau skrip di bawah.',
  '',
  '### Membaca berkas pada satu tahap (tanpa checkout, tanpa zip)',
  '',
  '```text',
  `https://github.com/${REPO}/tree/<tag>/contoh-cv/<folder>`,
  `https://github.com/${REPO}/blob/<tag>/contoh-cv/<folder>/index.html`,
  '```',
  '',
  `Contoh: <https://github.com/${REPO}/tree/${last}/contoh-cv/${last.replace(/^contoh-cv\//, '')}>`,
  '',
  '---',
  '',
  '## Di terminal',
  '',
  '`scripts/compare-contoh-cv.sh` membungkus semua ini:',
  '',
  '```bash',
  './scripts/compare-contoh-cv.sh                     # daftar tahap + statistik',
  './scripts/compare-contoh-cv.sh 5                   # kumulatif: bab 1 … bab 5',
  './scripts/compare-contoh-cv.sh 5 7                 # hanya selisih bab 5 → bab 7',
  './scripts/compare-contoh-cv.sh 5 7 css/style.css   # satu berkas saja',
  './scripts/compare-contoh-cv.sh --url 5 7           # cetak tautan GitHub-nya',
  './scripts/compare-contoh-cv.sh --open 5 7          # buka diff di browser',
  '```',
  '',
  'Padanan `git` mentahnya:',
  '',
  '```bash',
  '# ringkasan berkas yang berubah antar dua tahap',
  `git diff --stat ${tags[4]} ${tags[5]} --`,
  '',
  '# diff penuh satu berkas',
  `git diff ${tags[4]} ${tags[5]} -- 'contoh-cv/${tags[5].replace(/^contoh-cv\//, '')}/css/style.css'`,
  '',
  '# kata per kata, bukan baris per baris',
  `git diff --word-diff=plain ${tags[6]} ${tags[7]} --`,
  '',
  '# lihat isi satu berkas pada satu tahap tanpa checkout',
  `git show ${tags[8]}:contoh-cv/${tags[8].replace(/^contoh-cv\//, '')}/komponen.html | less`,
  '',
  '# jalankan satu tahap di direktori sementara lalu hapus lagi',
  `git worktree add /tmp/cv-bab-09 ${tags[7]}`,
  '(cd /tmp/cv-bab-09/contoh-cv/bab-09-bootstrap && python3 -m http.server 8000)',
  'git worktree remove /tmp/cv-bab-09',
  '```',
  '',
  'Tanda `--` di akhir perintah `git diff` **wajib** di sini: nama tag sengaja sama dengan',
  'nama folder, jadi tanpa `--` git menganggapnya argumen ambigu (revision vs path).',
  '',
  'Abaikan perbedaan spasi/format agar diff CSS–HTML lebih enak dibaca (`-w`), dan pakai',
  '`--color-moved` bila hanya ada blok yang dipindah:',
  '',
  '```bash',
  'git diff -w --stat <tag-lama> <tag-baru> --',
  'git diff --color-moved <tag-lama> <tag-baru> --',
  '```',
  '',
  '---',
  '',
  '## Daftar tag → commit',
  '',
  '| Tag | Commit | Judul |',
  '| --- | --- | --- |',
);

for (const tag of tags) {
  push(
    `| \`${tag}\` | [\`${sha(tag)}\`](https://github.com/${REPO}/commit/${sha(tag)}) | ${subject(tag)} |`,
  );
}

push(
  '',
  '---',
  '',
  'Dokumen ini dibuat oleh `scripts/gen-perbandingan.mjs`. Jalankan ulang setelah tag',
  'dibuat atau dipindahkan:',
  '',
  '```bash',
  'node scripts/gen-perbandingan.mjs',
  '```',
  '',
);

writeFileSync(OUT, lines.join('\n'), 'utf8');
console.log(`ditulis: contoh-cv/PERBANDINGAN.md (${lines.length} baris, ${tags.length} tag)`);
