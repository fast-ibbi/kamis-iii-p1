#!/usr/bin/env python3
"""Verifikasi revisi casual buku — 8 pemeriksaan dari REVISI-CASUAL.md §11.1.

Jalankan dari akar repo:  python scripts/verify-revisi.py

Baseline:
  kode + struktur  -> commit 6261631 (SETELAH perbaikan struktur)
  mojibake/istilah -> commit 71d2f69 (checkpoint, sebelum semuanya)

Pakai:  python verify-revisi.py
"""
import re, subprocess, os

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_CODE = '6261631'   # setelah perbaikan struktur
BASE_CKPT = '71d2f69'   # checkpoint awal

CASUAL = {'Deskripsi Singkat','Kata Kunci','Apersepsi','Materi Pembelajaran','Konsep Penting',
          'Penjelasan Kode','Praktikum','Studi Kasus','Latihan Mandiri','Tugas','Refleksi',
          'Rangkuman','Contoh Kode'}
FORMAL = {'Tujuan Pembelajaran','Capaian Pembelajaran','Evaluasi','Referensi'}

LAMA = ['tata letak','peramban','pranala','berkas','tautan','situs','ponsel','selektor','galat',
        'peladen','gawai']
TERLARANG = [r'\bsih\b', r'\bdeh\b', r'\bnih\b', r'\bdong\b', r'\bkok\b',
             r'\byg\b', r'\bgak\b', r'\btp\b', r'\bdgn\b', r'\bkrn\b']

def sh(*a):
    return subprocess.run(a, cwd=REPO, capture_output=True, text=True, encoding='utf-8').stdout

def cur(path):  return open(os.path.join(REPO, path), encoding='utf-8').read()
def base(c, p): return sh('git','show', f'{c}:{p}')
def norm(s):    return s.replace('\r\n','\n')
def rxl(t):
    # Sufiks wajib ikut cocok: tanpa ini 'tata letaknya', 'ponselnya',
    # 'berkasnya' lolos dari pemeriksaan maupun penggantian.
    return re.compile(r'(?<![A-Za-z])' + t.replace(' ', r'[ \t]+')
                      + r'(?:nya|mu|ku|kan|lah|pun)?(?![A-Za-z])', re.I)

def masks(text):
    """Kembalikan (fenced, indented) sebagai list boolean per baris.

    Markdown mengenal DUA bentuk blok kode:
      ```  pagar
      4 spasi indentasi
    Keduanya harus diperlakukan sebagai kode. bab-09 memakai 320 baris
    blok indentasi, jadi mengabaikannya membuat isi HTML tampilan
    terhitung sebagai prosa.
    """
    L = norm(text).split('\n')
    fenced = [False]*len(L); inb = False
    for i, l in enumerate(L):
        if l.lstrip().startswith('```'):
            inb = not inb; fenced[i] = True; continue
        fenced[i] = inb
    ind = [False]*len(L); i = 0
    # Baris menjorok >=4 spasi TIDAK otomatis blok kode: lanjutan item list juga
    # menjorok. Blok indentasi baru sah kalau baris pertamanya berbentuk kode.
    CODE_HEAD = re.compile(
        r'^(?:<!DOCTYPE|<[a-zA-Z/!]|\{|/\*|//|#!|'
        r'[.#@][A-Za-z][\w-]*\s*[,{]|'
        r'[a-z-]+\s*:\s*\S|'
        r'@[a-z]+\s)')
    while i < len(L):
        if not fenced[i] and re.match(r'^ {4,}\S', L[i]):
            j = i
            while j < len(L) and not fenced[j] and (re.match(r'^ {4,}', L[j]) or L[j].strip()==''):
                j += 1
            first = next((L[k].strip() for k in range(i, j) if L[k].strip()), '')
            if CODE_HEAD.match(first):
                for k in range(i, j): ind[k] = True
            i = j
        else:
            i += 1
    return fenced, ind

def walk(text):
    """Hasilkan (heading, baris, di_dalam_kode, baris_komentar)."""
    fenced, ind = masks(text)
    L = norm(text).split('\n')
    incode = css = html = False
    h = None
    for i, l in enumerate(L):
        is_fence = l.lstrip().startswith('```')
        if is_fence:
            incode = not incode
        in_code = incode or ind[i] or is_fence
        iscom = False
        if in_code and not is_fence:
            if css:
                iscom = True
                if '*/' in l: css = False
            elif html:
                iscom = True
                if '-->' in l: html = False
            else:
                i1,i2,h1,h2 = l.find('/*'),l.find('*/'),l.find('<!--'),l.find('-->')
                if i1 >= 0 and i2 > i1: iscom = True
                elif i1 >= 0: css = True; iscom = True
                if h1 >= 0 and h2 > h1: iscom = True
                elif h1 >= 0: html = True; iscom = True
        if not in_code and l.startswith('## '):
            h = l[3:].strip()
        yield h, l, in_code, iscom

def split_sections(text):
    out, c, buf = [], None, []
    for l in norm(text).split('\n'):
        if l.startswith('## '):
            out.append((c, buf)); c = l[3:].strip(); buf = []
        else:
            buf.append(l)
    out.append((c, buf)); return out

def code_lines(text):
    """Multiset baris kode non-komentar (komentar dibuang, spasi dibuang)."""
    res, css, html = [], False, False
    for h, l, incode, iscom in walk(text):
        if incode and l.lstrip().startswith('```'):
            continue
        if not incode:
            continue
        s = l
        if css:
            if '*/' in s: s = s.split('*/',1)[1]; css = False
            else: continue
        while True:
            i1, i2 = s.find('/*'), s.find('*/')
            if i1 >= 0 and (i2 < 0 or i2 > i1):
                if i2 > i1: s = s[:i1] + s[i2+2:]
                else: s = s[:i1]; css = True; break
            else: break
        if html:
            if '-->' in s: s = s.split('-->',1)[1]; html = False
            else: continue
        h1, h2 = s.find('<!--'), s.find('-->')
        if h1 >= 0:
            if h2 > h1: s = s[:h1] + s[h2+3:]
            else: s = s[:h1]; html = True
        s = s.strip()
        if s: res.append(s)
    return res

def struct(text):
    t = norm(text)
    return (len([l for l in t.split('\n') if l.lstrip().startswith('```')]),
            len(re.findall(r'(?m)^## ', t)),
            len(re.findall(r'(?m)^### ', t)),
            len(re.findall(r'(?m)^\|', t)))

def lex(text, sections):
    body = '\n'.join(l for h, l, ic, ico in walk(text) if h in sections and not ic)
    return {k: len(re.findall(r'(?<![A-Za-z])'+k+r'(?![A-Za-z])', body, re.I))
            for k in ['tidak','bagaimana','seperti','untuk','nggak','gimana','kayak','buat']}

files = sorted(f for f in os.listdir(os.path.join(REPO,'buku')) if f.endswith('.md'))
hdr = (f"{'bab':4} {'mojb':>4} {'istil':>5} {'Anda':>5} {'Anda':>5} | "
       f"{'pagar':>8} {'##':>7} {'###':>7} {'tabel':>9} {'kode':>5} | "
       f"{'CRLF':>4} {'BOM':>3} {'terl':>4} | {'nggak':>6}{'gimana':>7}{'kayak':>6}{'buat':>5} "
       f"{'tidak':>6}{'bagaim':>7}")
print(hdr)
T = dict(mojb=0, prose_lama=0, code_lama=0, anda_cs=0, anda_fm=0, crlf=0, bom=0,
         kode_beda=0, new_terl=0)
lex_before = dict(nggak=0, gimana=0, kayak=0, buat=0, tidak=0, bagaimana=0)
lex_now    = dict(nggak=0, gimana=0, kayak=0, buat=0, tidak=0, bagaimana=0)
for fn in files:
    path = f'buku/{fn}'; now = cur(path)
    b_code, b_ckpt = base(BASE_CODE, path), base(BASE_CKPT, path)

    noUrl = re.sub(r'https?://\S+', ' ', now)
    mojb = len(re.findall(r' \? ', noUrl)) + len(re.findall(r'\?\d', noUrl))

    prose_lama = 0
    for h, l, ic, ico in walk(now):
        if ic and not ico:
            continue                      # isi kode: dibiarkan
        if not ic:
            l = re.sub(r'`[^`]*`', ' ', l)  # span kode inline: dibiarkan
        prose_lama += sum(len(rxl(t).findall(l)) for t in LAMA)
    code_lama = sum(sum(len(rxl(t).findall(l)) for t in LAMA) for l in code_lines(now))

    # hanya prosa (di luar pagar) + komentar di dalam pagar.
    # Isi blok kode adalah teks HTML tampilan -> 'Anda' di sana memang dibiarkan.
    def anda_in(sections, text):
        return len(re.findall(r'(?<![A-Za-z])Anda(?![A-Za-z])',
                   '\n'.join(l for h, l, ic, ico in walk(text)
                             if h in sections and ((not ic) or ico))))
    anda_cs = anda_in(CASUAL, now)
    anda_fm = anda_in(FORMAL, now)
    anda_fm_b = anda_in(FORMAL, b_ckpt)

    a, b = sorted(code_lines(b_code)), sorted(code_lines(now))
    kode_beda = 0 if a == b else sum(1 for x, y in zip(a + ['']*abs(len(a)-len(b)),
                                                      b + ['']*abs(len(a)-len(b))) if x != y)

    s0, s1 = struct(b_code), struct(now)
    raw = open(os.path.join(REPO, path), 'rb').read()
    crlf = raw.count(b'\r\n'); bom = 1 if raw.startswith(b'\xef\xbb\xbf') else 0

    tn = sum(len(re.findall(p, norm(now), re.I)) for p in TERLARANG)
    tb = sum(len(re.findall(p, norm(b_ckpt), re.I)) for p in TERLARANG)
    new_terl = max(0, tn - tb)

    lc = lex(now, CASUAL); lb = lex(b_ckpt, CASUAL)
    for k in lex_before: lex_before[k] += lb[k]
    for k in lex_now:    lex_now[k] += lc[k]

    for k, v in [('mojb',mojb),('prose_lama',prose_lama),('code_lama',code_lama),
                 ('anda_cs',anda_cs),('anda_fm',anda_fm),('crlf',crlf),('bom',bom),
                 ('kode_beda',kode_beda),('new_terl',new_terl)]:
        T[k] += v
    if anda_fm != anda_fm_b:
        T['fm_berubah'] = T.get('fm_berubah', 0) + abs(anda_fm - anda_fm_b)
    fm = '  <-- FORMAL ANDA BERUBAH!' if anda_fm != anda_fm_b else ''
    ist = ' <-- PROSA!' if prose_lama else ''
    print(f"{fn[4:6]:4} {mojb:4} {prose_lama:5} {anda_cs:5} {anda_fm:5} | "
          f"{s1[0]:3}/{s0[0]:<4} {s1[1]:2}/{s0[1]:<4} {s1[2]:2}/{s0[2]:<4} {s1[3]:4}/{s0[3]:<4} "
          f"{kode_beda:5} | {crlf:4} {bom:3} {tn:4} | "
          f"{lc['nggak']:6}{lc['gimana']:7}{lc['kayak']:6}{lc['buat']:5}"
          f"{lc['tidak']:6}{lc['bagaimana']:7}{fm}{ist}")

print()
print('  kolom pagar/##/###/tabel = SEKARANG/BASELINE (harus sama)')
print("  kolom 'terl' = jumlah kata terlarang (dialek kutipan pra-ada ikut terhitung)")
print(f"  TOTAL  mojibake={T['mojb']}  istilah-lama-prosa={T['prose_lama']} (harus 0)  "
      f"istilah-lama-dalam-kode={T['code_lama']} (boleh, sengaja)  "
      f"Anda-casual={T['anda_cs']} (harus 0)  Anda-formal={T['anda_fm']} (dibiarkan)")
print(f"         CRLF={T['crlf']}  BOM={T['bom']}  baris-kode-berbeda={T['kode_beda']}  "
      f"kata-terlarang-BARU={T['new_terl']} (harus 0)")
print(f"  LEKSIKON di 12 bagian casual, checkpoint -> sekarang:")
print(f"         santai  nggak {lex_before['nggak']:>4} -> {lex_now['nggak']:<5} "
      f"gimana {lex_before['gimana']:>4} -> {lex_now['gimana']:<5} "
      f"kayak {lex_before['kayak']:>4} -> {lex_now['kayak']:<5} "
      f"buat {lex_before['buat']:>4} -> {lex_now['buat']:<5}")
print(f"         baku    tidak {lex_before['tidak']:>4} -> {lex_now['tidak']:<5} "
      f"bagaimana {lex_before['bagaimana']:>3} -> {lex_now['bagaimana']:<4}")
ok = (T['mojb']==0 and T['prose_lama']==0 and T['anda_cs']==0 and T['crlf']==0
      and T['bom']==0 and T['kode_beda']==0 and T['new_terl']==0
      and T.get('fm_berubah',0)==0)
print('  STATUS:', 'SEMUA LULUS' if ok else 'ADA YANG PERLU DIPERIKSA')
