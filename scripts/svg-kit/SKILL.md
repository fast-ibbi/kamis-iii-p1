---
name: slide-diagrams
description: Author SVG teaching diagrams for Marp lecture slides — picks the slides where a relationship is the content, writes a small data-only spec, and renders a theme-matched SVG into the deck. Use when writing or revising a slide deck and a concept needs a picture students can actually read, when asked to "buat diagram", "gambar penjelasan", "visualisasikan slide", "tambah diagram ke deck", or when a slide's structure (flow, layers, before/after, tree, sequence, state machine) is being described in prose.
---

# Slide Diagrams

Turn the relational parts of a Marp deck into SVGs that survive a projector: six
fixed patterns, no hand-placed coordinates, text measured before it is drawn, and
a build that refuses to emit anything illegible.

**What this skill produces:** one `.mjs` spec per diagram in `<deckDir>/diagrams/`,
one `.svg` per diagram in `<deckDir>/assets/diagrams/`, and exactly one added
`![w:…](…)` line per diagram in the deck.

**What this skill does NOT do:** draw anything outside the six patterns, edit the
prose of a slide, rebuild diagrams in decks you are not working on, or claim a
diagram looks right without having looked at it.

## Quick start

```bash
# see what is actually on each slide, before deciding anything
node <skill>/scripts/build.mjs slides/bab-16-dasar-react.md --audit

# validate + preview the plan, write nothing
node <skill>/scripts/build.mjs slides/bab-16-dasar-react.md --dry

# build the SVGs and wire them into the deck
node <skill>/scripts/build.mjs slides/bab-16-dasar-react.md

# rasterize one diagram so you can actually look at it
node <skill>/scripts/build.mjs slides/bab-16-dasar-react.md --png 03

# enforce label provenance against the slide text
node <skill>/scripts/build.mjs slides/bab-16-dasar-react.md --strict
```

`<skill>` = the directory holding this file. No install step, no dependencies,
no browser.

## The workflow

### 1. Read the deck before deciding anything

Split the file on `## ` headings. For each slide, name the relationship the slide
is about, in one clause. Do this for the whole deck up front — deciding slide by
slide produces five diagrams on the first four slides and none afterwards.

### 2. Apply the selection test

Read `references/pedagogy.md`. Only slides whose **relationships are the content**
qualify, and only 3–6 per chapter. A slide that does not fit one of the six
patterns does not get a diagram — that is a successful outcome, not a gap.

A **whole deck at once** ("visualise this chapter", "convert this text to images") is
a different pass with different rules — follow `references/deck-audit.md`. It adds the
facts table, the 3–6 override, the split convention and the width check.

Then read `references/patterns.md` for the data contract of each pattern you picked.

### 3. Write one spec per diagram

`<deckDir>/diagrams/<deckSlug>-<NN>.mjs`, numbered sequentially. Copy the shape
from `templates/spec-template.mjs`.

```js
export default {
  id: '05',
  slide: 'Deklaratif vs Imperatif',   // the EXACT ## heading, character for character
  pattern: 'beforeAfter',
  alt: 'Imperatif mengurus tiap elemen; deklaratif cukup mendeklarasikan tampilan.',
  data: {
    left:  { title: 'IMPERATIF',  tone: 'red', items: ['querySelector tiap elemen'] },
    right: { title: 'DEKLARATIF', tone: 'acc', items: ['deklarasikan tampilan untuk state'] },
  },
}
```

Labels follow the language of the deck. In this course that is Indonesian, with
API names, file names and language keywords left in their original form.

### 4. Build, and treat a FitError as a content decision

```
error spec 05 (bab-16-05.mjs) does not fit its pattern:
      panel title on a neutral panel: "Aplikasi React Native yang berjalan di atas mesin JavaScript"
      needs 3 lines at 17px but only 2 fit in this box. Trim it to fit — do not shrink the font.
```

The message names the offending string and tells you what to do. Shorten the text,
split the diagram, or pick a pattern with more room. **Never** lower a font size,
edit `lib/` to widen a box, or add a seventh pattern to make something fit — the
failure is telling you the content is too dense for the picture, which is real
information about the slide.

### 5. Verify — numerically, and honestly

Run the build. It now reports, per diagram, the smallest label size **as it will
appear on the slide** (`font × imgWidth ÷ canvas`), and warns under 13px. Fix a
warning by raising `imgWidth`, never by shrinking the type.

Numeric checks that need no eyes: effective px, ink bounding box against the frame,
text bbox against its box, element overlap. Rasterize with `--png <id>` when a
rasterizer exists; if the tools report that the model cannot view images, say so in
the report.

These cannot be checked without eyes, and the report must say so: a `beforeAfter`
whose rows do not correspond, an arc pointing the wrong way, labels in a confusing
order, a `tree` collapsed onto one line. So never claim a visual check you did not
perform, never write "looks good", and label every claim measured or unverified.
**Measurement is not sight.**

### 6. Report honestly

End with the slide→file table and any provenance misses:

```
  05  beforeAfter  Deklaratif vs Imperatif   slide 3 · 4.5 KB · inserted
  06  flow         Alur State dan Render     slide 4 · 4.0 KB · inserted

not on the slide: "dispatch"   ← the picture needs this word; the prose implies it
```

Say which labels are not on the slide and why. If a diagram's content came from
your own reasoning rather than the material, say so and put it in the presenter
notes.

## Non-negotiables

- **No coordinates.** A spec supplies data; the pattern owns geometry. If you find
  yourself wanting `x`/`y`, the content is wrong for every pattern — say so.
- **Six patterns, closed set.** `flow`, `layers`, `beforeAfter`, `tree`,
  `sequence`, `stateMachine`. Adding a seventh is a library change, not a diagram.
- **Never go below 14px, and never let the slide scale it below 13px.** The kit
  refuses the first; the build warns about the second, because a 1160-unit canvas at
  `w:720` turns a legal 14px label into 8.7px on the projector. Fit is not legible.
- **Insert-only — in single-spec mode.** Adding a picture to one slide gains one
  image line under its heading and nothing else: no reflow, no captions.
  In a **deck pass** (`references/deck-audit.md`) a slide MAY be split instead: keep
  the prose slide intact and add a new slide headed `Diagram: <judul asli>` (unique
  headings — the build rejects duplicates). Never delete bullets to make room.
- **One diagram per slide.** Two specs on one heading is a build error.
- **A spec is authored once.** The build never overwrites it; SVGs are rebuilt
  from specs every run. Edit the spec to change the picture.
- **Scaffolding is not yours to edit.** `lib/` owns geometry; when something cannot
  fit, change the spec, not the kit. `scripts/build.mjs` may gain read-only reporting
  (`--audit`) and warnings, but never a change to how SVGs are emitted.

## Re-runs

- Re-running is safe and idempotent: specs are untouched, SVGs rebuild byte-identical,
  the deck is only updated if a width or path actually changed.
- Editing a spec and re-running rebuilds its SVG and leaves the deck alone.
- Editing a slide's prose does not touch the diagrams (deliberate — tuned pictures
  should not churn because a bullet was reworded).
- Renaming a heading breaks the binding on purpose. The build fails and lists the
  headings it did find, closest match first; fix the spec's `slide` value.

## Options

| Flag | Use |
|---|---|
| `--dry` | validate, print the plan, write nothing |
| `--json` | machine-readable report on stdout |
| `--strict` | labels not found in the slide text become errors |
| `--no-insert` | build SVGs without touching the deck |
| `--png <id>` | rasterize one diagram for inspection |
| `--specs <dir>` | different spec folder (default `<deckDir>/diagrams`) |
| `--out <dir>` | different output folder (default `<deckDir>/assets/diagrams`) |
| `--theme <css>` | different theme file (default `<deckDir>/theme/academic.css`) |
| `--audit` | per-slide facts table (code/table/image/bullets/chars), writes nothing |

Exit codes: `0` ok, `1` build or validation failure, `2` bad usage.

## Theme coupling

Colours and fonts are read from the deck's own theme CSS (`:root` custom properties)
at build time, so diagrams match the deck by construction. Change `--accent` in
`theme/academic.css`, rebuild, and every diagram follows. If the theme file is
missing, the kit falls back to the academic palette and the build says which tokens
it defaulted — it never silently guesses.

## Relationship to marp-slides

`marp-slides` builds decks and owns Mermaid for quick sketches. This skill owns
**student-facing teaching diagrams**. When a slide's content fits one of the six
relational patterns, use this skill rather than a Mermaid fence: Mermaid's layout
engine has no notion of a slide's text budget and cannot produce themed panels,
annotated rows, or routed state arcs.

## Failure modes

| Symptom | Cause | Fix |
|---|---|---|
| `names slide "…" but no ## heading matches` | heading renamed or typo | use the exact heading; the error lists near matches |
| `does not fit its pattern` | too much text or too many items | shorten, split, or pick a bigger pattern |
| `cannot route … without crossing another state` | too many states for one row | drop an intermediate state or use `flow` |
| `two specs both target slide` | two diagrams on one heading | merge, or move one to its own slide |
| diagram missing from the PDF | local images blocked | `--allow-local-files` on the marp command |
| `png: no usable rasterizer` | no rsvg-convert / qlmanage / Chrome | open the `.svg` directly |
| label report is noisy | diagram paraphrases instead of quoting the slide | pull labels from the slide's own words |
| diagram clips the slide bottom | `imgWidth` too large for the remaining space | lower `imgWidth` (see `references/pedagogy.md`) |
