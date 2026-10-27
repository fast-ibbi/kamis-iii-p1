# The seven patterns — data contracts

A spec names a pattern and hands it data. It never supplies a coordinate: the
pattern owns geometry, wrapping, and text fitting. These are the only seven
patterns that exist. If content fits none of them, that is the answer to
"should this slide have a diagram" — it should not.

Read this table first, then the section for the pattern you picked.

| Pattern | The relationship it shows | Capacity | Default `![w:]` |
|---|---|---|---|
| `flow` | A goes to B goes to C, with named steps between | 2–5 stages, exactly `n-1` edge labels | 1120 |
| `layers` | Strata, each sitting on the one below | 2–6 layers | 1120 |
| `beforeAfter` | Two mental models side by side, parallel rows | 1–5 items per side | 1120 |
| `tree` | Containment: what hangs off what | ≤ 9 nodes, depth ≤ 3 levels | 1120 |
| `sequence` | Messages exchanged over time | 2–4 actors, 2–7 messages | 1120 |
| `stateMachine` | Modes and the events that change them | 2–5 states | 1040 |
| `mockup` | CSS geometry drawn to scale — zones, free space, spans | 1 box, or 2–5 flex items, or 1–4 grid rows | 1120 |

Every spec is one `.mjs` file exporting one object:

```js
export default {
  id: '05',                       // required (or derive from the -NN.mjs filename)
  slide: 'Deklaratif vs Imperatif', // required: the EXACT `## ` heading
  pattern: 'beforeAfter',         // required: one of the seven
  alt: '…',                       // optional: <title> text for screen readers
  imgWidth: 1120,                 // optional: override the ![w:] width
  data: { … },                    // required: this pattern's payload
}
```

---

## `flow` — a chain of stages

```js
data: {
  steps: [
    { label: 'UI', note: 'tekan tombol' },
    { label: 'State', note: 'dispatch' },
    { label: 'View', note: 'render ulang', tone: 'acc' },
  ],
  edges: ['dispatch', 'render'],   // exactly steps.length - 1
}
```

- `label` — the stage name, rendered in a tinted chip. Keep it to 1–2 short words.
- `note` — optional quiet line under the chip. One short clause, not a sentence.
- `edges` — the words written on the arrows. These are the *verbs* of the flow.
- `tone` — optional; the last stage defaults to `acc` (the blue accent) and the
  rest to `neutral`. Set it only to mark a stage that matters specially.

Fails when: fewer than 2 or more than 5 stages, `edges` length mismatch, a label
needs more than 2 lines in its chip, or an unbreakable word is wider than a chip.

Use it for: request→handler→response, build→bundle→install, event→state→render.
Do **not** use it for a list of parallel items — that is not a chain.

---

## `layers` — a stack

```js
data: {
  layers: [
    { label: 'Aplikasi React Native', note: 'JavaScript' },
    { label: 'Jembatan (bridge)',     note: 'async · JSON' },
    { label: 'iOS / Android native',  note: 'Swift · Kotlin' },
  ],
}
```

Top-down, first item at the top. `note` is right-aligned and quiet; use it for the
technology or the timing characteristic, not for another sentence.

Fails when: fewer than 2 or more than 6 layers, or a band would be under 52px.

Use it for: architecture strata, the RN rendering stack, network layers, the
storage tiers. The stack order is the content — if order doesn't matter, it isn't
a stack.

---

## `beforeAfter` — two mental models

```js
data: {
  left:  { title: 'IMPERATIF', tone: 'red', items: [
    'querySelector tiap elemen',
    "setText('Halo') manual",
  ]},
  right: { title: 'DEKLARATIF', tone: 'acc', items: [
    'deklarasikan tampilan untuk sebuah state',
    'state berubah, React menyesuaikan DOM',
  ]},
}
```

- `left` defaults to the `red` tone, `right` to `acc`. Override for other pairings.
- `items` get automatic numbered badges — do not type "1." yourself.
- `mono` — optional per-side boolean. If **half or more** of the items look like
  code (parentheses, brackets, `=>`, `const`, `function`), the whole side renders
  monospace so the list stays consistent. Override with `mono: true|false`.
- `footer` — optional one-line summary pinned to the panel bottom.

Fails when: 0 or 6+ items on a side, or an item needs more than 2 lines.

Use it for: imperative vs declarative, class vs function components, wrong vs
right. Both sides should be *the same shape* — matched row counts read best, but
uneven counts are allowed.

---

## `tree` — containment

```js
data: {
  root: { label: 'App', children: [
    { label: 'Header' },
    { label: 'Body', children: [{ label: 'List' }, { label: 'Footer' }] },
  ]},
}
```

- The root is a left-hand chip; children fan out to the right, grandchildren to
  the right again. Depth is capped at three levels.
- `tone` — optional per node.
- Children are connected by orthogonal elbows with arrowheads pointing inward
  (parent → child).

Fails when: more than 9 nodes total, deeper than 3 levels, no children, or a
label needs more than 2 lines.

Use it for: component trees, project structure, a navigation stack. Do not use it
as a general mind-map — a tree of unrelated words is a bulleted list.

---

## `sequence` — messages over time

```js
data: {
  actors: ['Klien', 'Server'],
  messages: [
    { from: 'Klien',  to: 'Server', label: 'POST /login' },
    { from: 'Server', to: 'Klien',  label: '200 + token' },
    { from: 'Klien',  to: 'Server', label: 'GET /me (Bearer)', tone: 'acc' },
  ],
}
```

- Actor names sit in chips across the top; dashed lifelines run down from each.
- `from` and `to` must name an actor exactly.
- `from === to` renders a small self-call loop.
- Messages are drawn strictly top to bottom; the array order **is** the time order.

Fails when: fewer than 2 or more than 4 actors, fewer than 2 or more than 7
messages, an unknown actor name, or a message label too wide for the span.

Use it for: HTTP exchanges, auth handshakes, event ordering. Do not use it when
the order doesn't matter — that's just two boxes and an arrow.

---

## `stateMachine` — modes and events

```js
data: {
  initial: 'idle',                       // optional: draws the entry dot
  states: [
    { id: 'idle',    label: 'idle' },
    { id: 'loading', label: 'loading' },
    { id: 'ok',      label: 'berhasil', tone: 'green' },
    { id: 'err',     label: 'gagal',    tone: 'red' },
  ],
  transitions: [
    { from: 'idle',    to: 'loading', label: 'kirim' },
    { from: 'loading', to: 'ok',      label: 'selesai', tone: 'green' },
    { from: 'loading', to: 'err',     label: 'galat',   tone: 'red' },
    { from: 'err',     to: 'loading', label: 'coba lagi' },
  ],
}
```

States sit in one row. Transitions are routed automatically:

- **adjacent forward** → a straight arrow with the label above it
- **skipping forward** → an arc underneath the row
- **backward** → an arc over the top of the row
- **self** → a small loop above the chip

The router searches for the shallowest arc that does not pass through any other
state's chip, and fails if it cannot find one.

Fails when: fewer than 2 or more than 5 states, no transitions, an unknown state
id, or an unroutable edge (usually caused by too many states for one row).

Use it for: form states, auth states, media playback. If the states form a plain
straight line with no branch and no return, use `flow` instead — it is calmer.

---

## `mockup` — CSS geometry, drawn to scale

This is a local addition (see `FORK.md`). It exists because every other pattern draws
**text in panels**: none of them can show a box, a width, a gap, or a span. For a
frontend course a picture that does not show geometry teaches almost nothing, so this
pattern draws borders, padding bands, free space and column tracks to real scale.

Three layouts, chosen by `data.kind`.

### `kind: 'box'` — the box model

```js
data: {
  kind: 'box',
  content: { w: 240, h: 96, label: 'gambar produk' },
  padding: [16, 16, 16, 16],   // [top, right, bottom, left], CSS px
  border: [4, 4, 4, 4],
  margin: [0, 0, 0, 0],
  footer: 'max-width: 100%',
}
```

Draws nested margin/border/padding/content bands at one uniform scale, next to a
legend listing every value plus a computed `lebar total`. Scale is chosen to fill the
canvas, so the picture shows the RATIO of the bands, not their CSS pixel size.

Fails when: `content` has no positive `w`/`h`, or `content.label` does not fit its box —
shorten or drop the label. `footer` and the row names are drawn labels, so they must
appear in the slide text like any other.

Use it for: padding versus margin, `box-sizing`, `max-width` clamping, border weights.

### `kind: 'flex'` — a flex line's free space

```js
data: {
  kind: 'flex',
  justify: 'space-between',
  container: 1120,
  gap: 24,
  items: [{ label: 'Kartu 1', basis: 280 }, { label: 'Kartu 2', basis: 280 }],
}
```

Items are drawn with their real `basis`; leftover space is drawn as amber regions
labelled in px, so the reader can add it up. The declared `gap` gets its own dimension
callout under the first gap — without it the picture would assert a gap size while
drawing only the free space, and neither number could be checked by eye.

`justify` is one of `flex-start`, `flex-end`, `center`, `space-between`,
`space-around`, `space-evenly`.

Fails when: fewer than 2 or more than 5 items, an item has no positive `basis`, the
items plus gaps exceed `container`, or an item label does not fit its box.

Use it for: `justify-content`, `gap` versus `space-between`, `flex-basis` arithmetic.

### `kind: 'grid'` — columns and spans

```js
data: {
  kind: 'grid',
  columns: 12,
  gutter: 16,
  container: 1120,
  rows: [
    [{ label: 'span 12', span: 12 }],
    [{ label: 'span 4', span: 4 }, { label: 'span 8', span: 8 }],
  ],
  footer: 'gutter 16 px',
}
```

A numbered track ruler sits above the rows, and dashed column lines run from it down
through every row. The lines are drawn **before** the cells, so they only show through
the gutters — which is where a column line actually lives. That ruler plus those lines
are the point of the pattern: without them the cells fill the space where the tracks
would be and the picture teaches nothing about columns.

Fails when: `columns` is outside 2–12, there are fewer than 1 or more than 4 rows, a
row's spans exceed `columns`, or a cell label does not fit.

Use it for: 12-column grids, Bootstrap `col-*`, `span`, gutters.

### What `mockup` deliberately does not do

- No coordinates, same as every other pattern. If you want to place a box by hand, the
  content is wrong for this pattern.
- No arbitrary nested HTML. It draws zones, free space and tracks — not a page.
- It does not relax the 14px floor or the fit checks. A mockup that cannot fit is
  telling you the example has too many parts for one picture.
