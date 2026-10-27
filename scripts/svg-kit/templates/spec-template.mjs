// Spec template — copy to <deckDir>/diagrams/<deckSlug>-<NN>.mjs and edit.
//
// The spec supplies DATA ONLY. It never supplies a coordinate: the pattern owns
// geometry, spacing, wrapping and text fitting. If you want to place a box by
// hand, the content is wrong for every pattern in the set.
//
// Run:  node <skill>/scripts/build.mjs slides/<deck>.md --dry
// Then: node <skill>/scripts/build.mjs slides/<deck>.md --png <NN>

export default {
  // Sequential, unique within the deck. Also the SVG filename suffix.
  id: '01',

  // The EXACT `## ` heading of the slide this draws. Not a paraphrase, not an
  // index. The build fails with a near-match list if it cannot find it.
  slide: 'Judul Slide Yang Persis',

  // One of: flow | layers | beforeAfter | tree | sequence | stateMachine
  pattern: 'flow',

  // Optional: <title>/aria-label text for screen readers.
  alt: 'Satu kalimat yang menjelaskan hubungan yang digambar.',

  // Optional: how wide the image sits on the slide. Defaults per pattern.
  // imgWidth: 1120,

  // The pattern's payload — see references/patterns.md for the contract.
  data: {
    steps: [
      { label: 'UI', note: 'tekan tombol' },
      { label: 'State', note: 'dispatch' },
      { label: 'View', note: 'render ulang' },
    ],
    edges: ['dispatch', 'render'],
  },

  // Optional: force a canvas size instead of letting content decide.
  // canvas: [1160, 300],
}
