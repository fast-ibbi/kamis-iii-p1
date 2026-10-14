#!/usr/bin/env node
// QA bank soal: validasi struktur & konsistensi file di quiz/bab-NN/ (bank soal + kuis ringkas)
import { readFileSync, existsSync } from "node:fs";

const ORDER = ["01","02","03","04","05","06","07","09","10","11","12","13","14","15"];
const only = process.argv[2] ? new Set(process.argv[2].split(",")) : null;

let problems = 0;
const log = (s) => console.log(s);
const bad = (s) => { problems++; console.log("  ✗ " + s); };

const read = (p) => existsSync(p) ? readFileSync(p, "utf8") : null;
const fencesBalanced = (t) => ((t.match(/^```/gm) || []).length % 2) === 0;
// buang blok header file per bab (sebelum pemisah '---' pertama)
const stripHeader = (t) => { const i = t.indexOf("\n---\n"); return i === -1 ? t : t.slice(i + 5); };

const checkPG = (bab, t) => {
  if (!t) return;
  t = stripHeader(t);
  const qs = [...t.matchAll(/^(\d+)\.\s/gm)].map(m => +m[1]);
  if (qs.length !== 15) bad(`bab-${bab} PG: jumlah soal ${qs.length} ≠ 15`);
  const expected = Array.from({ length: qs.length }, (_, i) => i + 1);
  if (JSON.stringify(qs) !== JSON.stringify(expected)) bad(`bab-${bab} PG: penomoran tidak urut 1..n`);
  // opsi per soal
  const lines = t.split("\n");
  let cur = null, counts = {};
  for (const l of lines) {
    const q = l.match(/^(\d+)\.\s/);
    if (q) { cur = +q[1]; counts[cur] = 0; continue; }
    if (cur && /^\s*-\s+[A-D]\.\s/.test(l)) counts[cur]++;
  }
  for (const [n, c] of Object.entries(counts)) if (c !== 4) bad(`bab-${bab} PG soal ${n}: ${c} opsi (harus 4)`);
  // kebocoran kunci di file soal
  if (/(Kunci|Jawaban)\s*:\s*[A-D]\b/i.test(t)) bad(`bab-${bab} PG: terindikasi bocor kunci di file soal`);
  if (!fencesBalanced(t)) bad(`bab-${bab} PG: blok kode tidak seimbang`);
  return `PG: ${qs.length} soal`;
};

const checkEssay = (bab, t) => {
  if (!t) return;
  t = stripHeader(t);
  const qs = [...t.matchAll(/^(\d+)\.\s/gm)].map(m => +m[1]);
  if (qs.length !== 5) bad(`bab-${bab} essay: jumlah soal ${qs.length} ≠ 5`);
  if (JSON.stringify(qs) !== JSON.stringify([1, 2, 3, 4, 5])) bad(`bab-${bab} essay: penomoran tidak 1..5`);
  if (!fencesBalanced(t)) bad(`bab-${bab} essay: blok kode tidak seimbang`);
  return `Essay: ${qs.length} soal`;
};

const checkLab = (bab, t) => {
  if (!t) return;
  t = stripHeader(t);
  const labs = [...t.matchAll(/^### Lab (\d+)/gm)].map(m => +m[1]);
  if (labs.length !== 10) bad(`bab-${bab} lab: jumlah lab ${labs.length} ≠ 10`);
  if (JSON.stringify(labs) !== JSON.stringify(Array.from({ length: 10 }, (_, i) => i + 1))) bad(`bab-${bab} lab: penomoran lab tidak 1..10`);
  const tugas = (t.match(/\*\*Tugas:\*\*/g) || []).length;
  const bukti = (t.match(/\*\*Bukti yang dikumpulkan:\*\*/g) || []).length;
  if (tugas !== labs.length) bad(`bab-${bab} lab: ${tugas} bagian Tugas ≠ ${labs.length} lab`);
  if (bukti !== labs.length) bad(`bab-${bab} lab: ${bukti} bagian Bukti ≠ ${labs.length} lab`);
  if (!fencesBalanced(t)) bad(`bab-${bab} lab: blok kode tidak seimbang`);
  return `Lab: ${labs.length} soal`;
};

const checkJawaban = (bab, t) => {
  if (!t) return;
  t = stripHeader(t);
  const keys = [...t.matchAll(/^(\d+)\.\s+\*\*([A-D])\*\*/gm)];
  if (keys.length !== 15) bad(`bab-${bab} jawaban: kunci PG ${keys.length} ≠ 15`);
  const dist = { A: 0, B: 0, C: 0, D: 0 };
  keys.forEach(m => dist[m[2]]++);
  const max = Math.max(...Object.values(dist)), min = Math.min(...Object.values(dist));
  const spread = `A=${dist.A} B=${dist.B} C=${dist.C} D=${dist.D}`;
  if (max - min > 2) bad(`bab-${bab} jawaban: sebaran kunci tidak merata (${spread})`);
  // essay & lab jawaban counts
  const essaySec = t.split("### Jawaban Essay")[1]?.split("### Jawaban Praktikum Lab")[0] || "";
  const labSec = t.split("### Jawaban Praktikum Lab")[1] || "";
  const eN = (essaySec.match(/^\d+\.\s+\*\*Poin/gm) || []).length;
  const lN = (labSec.match(/^\d+\.\s+\*\*Langkah solusi/gm) || []).length;
  if (eN !== 5) bad(`bab-${bab} jawaban: jawaban essay ${eN} ≠ 5`);
  if (lN !== 10) bad(`bab-${bab} jawaban: solusi lab ${lN} ≠ 10`);
  if (!fencesBalanced(t)) bad(`bab-${bab} jawaban: blok kode tidak seimbang`);
  return `Jawaban: kunci ${keys.length} (${spread}) · essay ${eN} · lab ${lN}`;
};

const checkKuis = (bab, t) => {
  if (!t) return;
  t = stripHeader(t);
  const qs = [...t.matchAll(/^(\d+)\.\s/gm)].map(m => +m[1]);
  if (qs.length !== 10) bad(`bab-${bab} kuis: jumlah soal ${qs.length} ≠ 10`);
  const expected = Array.from({ length: qs.length }, (_, i) => i + 1);
  if (JSON.stringify(qs) !== JSON.stringify(expected)) bad(`bab-${bab} kuis: penomoran tidak urut 1..n`);
  // Bagian A (1–5) harus PG dengan 4 opsi; Bagian B (6–10) isian tanpa opsi
  const lines = t.split("\n");
  let cur = null, counts = {};
  for (const l of lines) {
    const q = l.match(/^(\d+)\.\s/);
    if (q) { cur = +q[1]; counts[cur] = 0; continue; }
    if (cur && /^\s*-\s+[A-D]\.\s/.test(l)) counts[cur]++;
  }
  for (let n = 1; n <= 5; n++) if (counts[n] !== 4) bad(`bab-${bab} kuis soal ${n}: ${counts[n] ?? 0} opsi (harus 4)`);
  for (let n = 6; n <= 10; n++) if ((counts[n] ?? 0) !== 0) bad(`bab-${bab} kuis soal ${n}: butir isian tidak boleh punya opsi`);
  if (!/\*\*Bagian A — Pilihan Ganda/.test(t)) bad(`bab-${bab} kuis: judul “Bagian A — Pilihan Ganda” hilang`);
  if (!/\*\*Bagian B — Isian Singkat/.test(t)) bad(`bab-${bab} kuis: judul “Bagian B — Isian Singkat” hilang`);
  if (/(Kunci|Jawaban)\s*:\s*[A-D]\b/i.test(t)) bad(`bab-${bab} kuis: terindikasi bocor kunci di file soal`);
  if (!fencesBalanced(t)) bad(`bab-${bab} kuis: blok kode tidak seimbang`);
  return `Kuis: ${qs.length} soal (5 PG + 5 isian)`;
};

const checkKunciKuis = (bab, t) => {
  if (!t) return;
  t = stripHeader(t);
  // kunci PG: butir 1–5, format `N. **A–D** — pembahasan`
  const pgKeys = [...t.matchAll(/^(\d+)\.\s+\*\*([A-D])\*\*\s+—\s+/gm)].filter(m => +m[1] <= 5);
  if (pgKeys.length !== 5) bad(`bab-${bab} kunci kuis: kunci PG ${pgKeys.length} ≠ 5`);
  const pgNums = pgKeys.map(m => +m[1]);
  if (JSON.stringify(pgNums) !== JSON.stringify([1, 2, 3, 4, 5])) bad(`bab-${bab} kunci kuis: nomor kunci PG bukan 1..5`);
  const dist = { A: 0, B: 0, C: 0, D: 0 };
  pgKeys.forEach(m => dist[m[2]]++);
  const max = Math.max(...Object.values(dist)), min = Math.min(...Object.values(dist));
  const spread = `A=${dist.A} B=${dist.B} C=${dist.C} D=${dist.D}`;
  if (max - min > 2) bad(`bab-${bab} kunci kuis: sebaran kunci tidak merata (${spread})`);
  // kunci isian: butir 6–10, format `N. **jawaban** — pembahasan`
  const isianKeys = [...t.matchAll(/^(\d+)\.\s+\*\*(.+?)\*\*\s+—\s+/gm)].filter(m => +m[1] >= 6);
  if (isianKeys.length !== 5) bad(`bab-${bab} kunci kuis: kunci isian ${isianKeys.length} ≠ 5`);
  const isianNums = isianKeys.map(m => +m[1]);
  if (JSON.stringify(isianNums) !== JSON.stringify([6, 7, 8, 9, 10])) bad(`bab-${bab} kunci kuis: nomor kunci isian bukan 6..10`);
  if (!fencesBalanced(t)) bad(`bab-${bab} kunci kuis: blok kode tidak seimbang`);
  return `Kunci kuis: PG 5 (${spread}) · isian 5`;
};

log("=== QA bank soal & kuis ringkas quiz/bab-NN ===");
for (const bab of ORDER) {
  if (only && !only.has(bab)) continue;
  const pg = read(`quiz/bab-${bab}/soal-pilihan-ganda.md`);
  const essay = read(`quiz/bab-${bab}/soal-essay.md`);
  const lab = read(`quiz/bab-${bab}/soal-praktikum-lab.md`);
  const jwb = read(`quiz/bab-${bab}/jawaban.md`);
  const kuis = read(`quiz/bab-${bab}/kuis-ringkas.md`);
  const kunciKuis = read(`quiz/bab-${bab}/kunci-kuis-ringkas.md`);
  if (!pg || !essay || !lab || !jwb) { log(`Bab ${bab}: [belum lengkap — dilewati]`); continue; }
  if (!kuis) bad(`bab-${bab}: file kuis-ringkas.md belum ada`);
  if (!kunciKuis) bad(`bab-${bab}: file kunci-kuis-ringkas.md belum ada`);
  const r1 = checkPG(bab, pg), r2 = checkEssay(bab, essay), r3 = checkLab(bab, lab), r4 = checkJawaban(bab, jwb);
  const r5 = checkKuis(bab, kuis), r6 = checkKunciKuis(bab, kunciKuis);
  log(`Bab ${bab}: ${[r1, r2, r3, r4, r5, r6].filter(Boolean).join(" · ")}`);
}
log(problems === 0 ? "QA LULUS — 0 masalah" : `QA selesai — ${problems} masalah ditemukan`);
process.exit(problems === 0 ? 0 : 1);
