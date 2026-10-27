# Auditing a whole deck

For when the request is deck-sized — "visualise this chapter", "convert all this text
into images", "students should not have to read this" — rather than "this slide needs
a picture". Single-diagram work follows SKILL.md and stays insert-only. This file
describes the larger pass, which may add slides.

The whole difference: a single diagram is a formatting decision, a deck pass is a
teaching decision about 30–50 slides at once.

## Step 1 — get the facts, not the verdicts

```bash
node <skill>/scripts/build.mjs slides/bab-05-dasar-react-native.md --audit
```

Prints one row per slide: `NN CODE TBL IMG BUL CHARS HEADING`. Read-only — it exits
before any spec is loaded, so it cannot write.

The script reports what is **on** the slide. It deliberately never says whether a
slide should have a diagram, because that cannot be computed: a table and a
relationship are both "a table" to a parser. `--json` gives the same data.
The command is available from v-latest (it is an addition to `build.mjs`).

## Step 2 — apply the judgement

Read `pedagogy.md` first. Then, per slide, in this order:

**Skip without further thought when the facts show it**

| Facts | Why |
|---|---|
| `IMG` ≥ 1 | already drawn |
| `TBL` ≥ 2, no `IMG` | a spec sheet is already in its clearest form — `beforeAfter` is for models, not criteria lists |
| `CODE` ≥ 1, nothing else | never draw a picture of code |
| `BUL` = 0, `CHARS` < 150 | a title or a statement, not a structure |

**Then judge the rest by hand**

- A definition ("state is data that can change") — skip. One sentence, no structure.
- A list of peers (five hooks, six properties) — skip, it wants an aligned list.
- A cycle — **skip unless you accept a chain.** `flow` is one-way; drawing a loop as
  a pipeline misrepresents it. If you draw it anyway, say so in the `alt`.
- A narrative that reads well as a story — skip. A case study with presenter notes
  saying "read this as a story" is already doing its job.

**Skip is a successful outcome, not a gap.** A chapter with 33 text slides commonly
yields 8–11 drawings. Producing one per slide means illustrating slides that wanted
to stay text.

## Step 3 — check the pattern mix before writing anything

Count the patterns you propose. If more than half land on one pattern, the deck will
read as a template and later diagrams will look like filler. Reframe, do not
decorate:

- a timeline is `flow` (2013 → 2015 → today), not `beforeAfter`
- containment is `tree` (View cannot hold raw text), not `beforeAfter`
- screen zones are `layers` (notch → safe area → content), not `beforeAfter`

Then **cut anything whose only justification is diversity.** A wrong pattern is worse
than a missing diagram.

## Step 4 — price it in slides, out loud

Splitting (step 5) grows the deck. State the before/after count before writing:

> 38 slides → 46 slides. Eight new slides, each a heading and one picture.

If the growth is more than roughly 10%, say what it costs in teaching time and get an
explicit answer. Two costs are easy to miss:

- **Presenter notes go blank** on new slides unless you write them. Empty presenter
  view lands exactly when a picture is on screen.
- **Legibility beats fitting.** See step 6 — a picture that fits at a small width may
  be unreadable.

## Step 5 — splitting

Only in a deck pass. Conventions that keep it reviewable:

```markdown
## Image: Dua Sumber Gambar
- five bullets, untouched

---

## Diagram: Image: Dua Sumber Gambar
![w:1120](assets/diagrams/…-09.svg)
```

- Heading is `Diagram: <judul asli>`. Mechanical, invents nothing, obvious in the PDF
  outline. Headings must be unique — `build.mjs` errors if a spec's heading matches
  two slides.
- The picture slide goes **after** the prose slide. A picture of a concept the
  student has not met yet is decoration.
- **Never delete bullets to make room.** Splitting exists so prose survives intact.
- Notes are optional. Blank is honest; duplicating the prose slide's notes is worse
  (two copies of one idea drift apart). If you leave them blank, record that as an
  accepted cost.

## Step 6 — the width trap

The kit's 14px floor is in **SVG units**. On the slide the whole canvas is scaled by
`imgWidth ÷ canvasWidth`:

| canvas | `![w:]` | scale | 14px label renders at |
|---|---|---|---|
| 1160 | 1120 | 0.97 | **13.5px** — fine |
| 1160 | 720 | 0.62 | **8.7px** — unreadable |

`build.mjs` now warns when the effective size drops under 13px, naming the spec and
the arithmetic. The fix is to raise `imgWidth` — a slide holding only a heading and a
picture has room for `w:1120`, and raising the width is always better than shrinking
the type. If a slide is too full for the width it needs, that is the signal to split.

**Fit is not legible.** A diagram can pass every assert and still be unreadable.

## Step 7 — verify numerically, claim nothing you did not do

Without eyes, these checks are still real: effective px (step 6), ink bounding box
against the 720px frame, text bbox against its box, element overlap, and Marp's own
`--images png` export measured for lowest-ink y.

These checks are **not** possible without eyes, and the list belongs in the report:

- a `beforeAfter` whose left row 2 does not answer right row 2
- an arc that reads as the wrong direction
- labels in an order that confuses
- a `tree` where parent and child sit on one line (see quirks)

So: never claim a visual check you did not perform, never write "looks good", and
label every claim **measured** or **unverified**. Measurement is not sight.

## Kit quirks worth knowing before you are surprised

| Symptom | Cause |
|---|---|
| a `tree` node's `note` is missing | `tree` renders `label` only; `note` is silently dropped |
| `tree` parent and child look like siblings | a parent with a **single** child gets a zero-height elbow, so both sit on one y. Give the parent two children |
| `sequence` labels have a lifeline through them | the label centres on the actor gap; a two-column span crosses a middle lifeline. Prefer adjacent actors |
| every label reports "not on the slide" | provenance reads the **bound** slide; a `Diagram:` slide has no prose. Expected — verify against the prose slide by hand |
| `beforeAfter` numbers have no disc | the badge is a bare digit; four-panel diagrams lean on it, so check the rows still read as matched |
| `layers` cannot show an inset | bands are equal height, so "safe area" looks like a full slice of the screen rather than a margin |
