# The six patterns — data contracts

A spec names a pattern and hands it data. It never supplies a coordinate: the
pattern owns geometry, wrapping, and text fitting. These are the only six
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

Every spec is one `.mjs` file exporting one object:

```js
export default {
  id: '05',                       // required (or derive from the -NN.mjs filename)
  slide: 'Deklaratif vs Imperatif', // required: the EXACT `## ` heading
  pattern: 'beforeAfter',         // required: one of the six
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
