# Selection — which slides earn a diagram

A diagram is not decoration and it is not a reward for writing a slide. It earns
its place only when **the relationships are the content** — when a student who
reads the same words as prose has to reconstruct a structure in their head.

Target: **3–6 diagrams per chapter**. If you are producing ten, you are illustrating
slides that wanted to stay text, and the diagrams start competing with each other.

## The test

Ask, for one slide at a time:

1. **What is the relationship?** Name it. "A depends on B", "these two models differ
   on the same axis", "this event changes that mode", "these messages happen in
   this order". If you cannot name the relationship in one clause, stop — the slide
   is not relational.
2. **Does one of the six patterns fit it?** See `patterns.md`. If none fits, stop.
   The closed set is deliberate: forcing content into a pattern produces a picture
   that teaches less than the text did.
3. **Does the slide already say it?** If the bullets already form a clean three-item
   list, the diagram adds nothing but ink.

## What qualifies

| Relationship | Pattern | Example from this course |
|---|---|---|
| A → B → C with named steps between | `flow` | event → state → render |
| Strata, each on the one below | `layers` | RN app / bridge / native |
| Two models, parallel rows | `beforeAfter` | imperative vs declarative |
| Containment | `tree` | `App` → `Header`, `Body` → `List` |
| Ordered exchange | `sequence` | login handshake |
| Modes + events | `stateMachine` | form: idle → loading → ok/err |

## What does not qualify

- **A definition.** "State is data that can change." One sentence, no structure.
- **A plain comparison** of two options on several criteria. That is a GFM table,
  and the academic theme styles tables properly. `beforeAfter` is for *models*,
  not for spec sheets.
- **A list of peers** — five hooks, four lifecycle methods, six Expo features.
  Numbered bullets, or a two-column list.
- **Anything already a code block.** Do not draw a picture of code.
- **A slide that is already full.** Marp will not shrink a diagram that overflows
  vertically. If the slide has a heading, a body, and a diagram, the diagram wins
  the space argument or it doesn't belong.

## One per slide, maximum

The deck lint enforces this and so does the build: two specs bound to the same
heading is an error. When you want two pictures on one slide, that is the signal
that the slide is two slides.

## Choosing the width

`imgWidth` controls `![w:…]` in the deck. Defaults are set per pattern (1120 for
wide patterns, 1040 for `stateMachine`). Use:

- `1120` — the diagram is the slide's main content under a heading
- `900` or less — a diagram that shares the slide with three or more bullets
- `720` — a small structure beside a paragraph

Remember the theme is 1280×720 with a 54px top pad and a heading rule. A caption
below the image costs roughly 40px. If the diagram plus those exceed 720px at the
chosen width, it will clip — pick a smaller width.

## Labels come from the slide

Diagrams are content, not decoration. Every string you draw should be traceable to
the slide it belongs to (or to that chapter's material). The build prints a
provenance report naming any label it could not find on the slide; with `--strict`
those become errors.

Two legitimate exceptions, both worth stating in the presenter notes:

- a **connector word** the picture needs but the prose implies ("dispatch")
- a **grouping label** that names a set the slide lists without naming

Never invent a participant, a layer, or a step that the material does not contain.
A plausible-looking invention reads as established fact to a student who trusts
the slide.
