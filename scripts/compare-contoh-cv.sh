#!/usr/bin/env bash
# Bandingkan tahap contoh-cv (git tag contoh-cv/bab-*) tanpa mengunduh zip.
#
#   ./scripts/compare-contoh-cv.sh                  daftar tahap + statistik vs tahap sebelumnya
#   ./scripts/compare-contoh-cv.sh 5                kumulatif: bab 1 … bab 5
#   ./scripts/compare-contoh-cv.sh 5 7              hanya selisih bab 5 → bab 7
#   ./scripts/compare-contoh-cv.sh 5 7 css/style.css   satu berkas (relatif ke folder tahap baru)
#   ./scripts/compare-contoh-cv.sh --url 5 7        cetak tautan GitHub compare
#   ./scripts/compare-contoh-cv.sh --open 5 7       buka tautan itu di browser
#
# Opsi tambahan: --stat (default untuk 2 argumen), --word-diff, --name-only
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

REPO="fast-ibbi/kamis-iii-p1"

usage() { sed -n '2,12p' "$0" | sed 's/^# \{0,1\}//'; }

# "5" / "05" / "contoh-cv/bab-05-box-model" -> tag lengkap; kosong bila tidak ada.
resolve_tag() {
  case "$1" in
    contoh-cv/*) printf '%s' "$1"; return 0 ;;
  esac
  case "$1" in
    ''|*[!0-9]*) return 1 ;;
  esac
  local n="$1"
  [ "${#n}" -eq 1 ] && n="0$n"
  local t
  t=$(git tag -l "contoh-cv/bab-$n-*" | head -1)
  [ -n "$t" ] && printf '%s' "$t"
}

all_tags() { git tag -l 'contoh-cv/*' --sort=version:refname; }

folder_of() { printf '%s' "${1#contoh-cv/}"; }

human_stat() {
  sed -E 's/^ *//; s/([0-9]+) files? changed/\1 berkas/;
             s/([0-9]+) insertions?\(\+\)/\1 += baris/;
             s/([0-9]+) deletions?\(-\)/\1 -= baris/'
}

print_url() {
  printf 'https://github.com/%s/compare/%s...%s\n' "$REPO" "$1" "$2"
}

MODE="diff"
ARGS=()
for a in "$@"; do
  case "$a" in
    -h|--help) usage; exit 0 ;;
    --url) MODE="url" ;;
    --open) MODE="open" ;;
    --stat) MODE="stat" ;;
    --word-diff) MODE="word" ;;
    --name-only) MODE="names" ;;
    *) ARGS+=("$a") ;;
  esac
done

TAGS=$(all_tags)
[ -n "$TAGS" ] || { echo "tidak ada tag contoh-cv/*" >&2; exit 1; }

# --- tanpa argumen: daftar tahap + statistik antar tahap berurutan
if [ "${#ARGS[@]}" -eq 0 ]; then
  echo "Tahap contoh-cv (git tag) — perubahan vs tahap sebelumnya"
  echo
  prev=""
  for t in $TAGS; do
    if [ -n "$prev" ]; then
      printf '%-28s %s\n' "$(folder_of "$t")" "$(git diff --shortstat "$prev" "$t" -- | human_stat)"
    else
      printf '%-28s (tahap pertama, %s berkas)\n' "$(folder_of "$t")" \
        "$(git ls-tree -r --name-only "$t" -- contoh-cv/ | grep -c "^$t/" || true)"
    fi
    prev="$t"
  done
  echo
  echo "Bandingkan: $0 <bab> [<bab>] [berkas]   ·   tautan GitHub: $0 --url <bab> <bab>"
  exit 0
fi

# --- satu atau dua bab
a=$(resolve_tag "${ARGS[0]}") || { echo "bab tidak dikenal: ${ARGS[0]}" >&2; exit 1; }
[ -n "$a" ] || { echo "bab tidak dikenal: ${ARGS[0]}" >&2; exit 1; }

if [ "${#ARGS[@]}" -ge 2 ] && [ -z "$(resolve_tag "${ARGS[1]}")" ]; then
  path="${ARGS[1]}"          # argumen kedua bukan bab -> dianggap path
  b="$a"; a=$(git tag -l 'contoh-cv/*' --sort=version:refname | head -1)
elif [ "${#ARGS[@]}" -ge 2 ]; then
  b=$(resolve_tag "${ARGS[1]}")
  path="${ARGS[2]:-}"
else
  b="$a"; a=$(git tag -l 'contoh-cv/*' --sort=version:refname | head -1)
  path=""
fi

# default path: seluruh folder tahap tujuan, supaya diff tidak mencampur tahap lain
if [ -z "${path:-}" ]; then
  pathspec=()
else
  case "$path" in
    contoh-cv/*) pathspec=("$path") ;;
    *) pathspec=("contoh-cv/$(folder_of "$b")/$path") ;;
  esac
fi

case "$MODE" in
  url) print_url "$a" "$b" ;;
  open)
    url=$(print_url "$a" "$b")
    echo "$url"
    if command -v open >/dev/null 2>&1; then open "$url"
    elif command -v xdg-open >/dev/null 2>&1; then xdg-open "$url"
    else echo "buka manual di browser." >&2; fi
    ;;
  names) git diff --name-status "$a" "$b" -- ${pathspec[@]+"${pathspec[@]}"} ;;
  word)  git diff --word-diff=plain --color "$a" "$b" -- ${pathspec[@]+"${pathspec[@]}"} ;;
  stat)  git diff --stat "$a" "$b" -- ${pathspec[@]+"${pathspec[@]}"} ;;
  diff)  git diff --color "$a" "$b" -- ${pathspec[@]+"${pathspec[@]}"} ;;
esac
