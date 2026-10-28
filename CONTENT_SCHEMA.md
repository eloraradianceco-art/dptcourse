# Subject content schema

Each subject is one file: `data/<id>.js`. It registers itself on load:

```js
(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "gross-anatomy",            // kebab-case, same as filename
  track: "found",                 // "prereq" | "found" | "clinical"
  order: 1,                       // position within its track
  code: "DPT 610",                // course code: PRE 1xx-2xx for prereqs, DPT 6xx for foundations, DPT 7xx for clinical
  title: "Gross Anatomy",
  credits: 6,                     // typical credit hours
  desc: "One or two sentences on what the course covers and why a PT needs it.",
  objectives: [                   // 4-6, each starting with a verb
    "Identify the origin, insertion, innervation, and action of major limb muscles"
  ],
  units: [                        // 4-5 units, in teaching order
    {
      t: "Upper Extremity",       // unit title
      sub: "Shoulder girdle, brachial plexus, elbow, wrist, hand",   // short subtitle
      guide: [                    // 5-8 bullets: the study sheet. HTML allowed: <b>, <i>, <span class='formula'>...</span>
        "<b>Rotator cuff (SITS)</b>: supraspinatus, infraspinatus, teres minor, subscapularis."
      ],
      assignment: {               // the coursework item for this unit
        title: "Brachial plexus map",
        task: "What to do, concretely, 2-4 sentences. Applied, clinical where possible.",
        deliverable: "What the finished product is (e.g., one-page diagram, SOAP note, 300-word case write-up)."
      },
      gen: [],                    // leave empty (only the stats course uses number generators)
      qs: [                       // 10 questions
        ["Question text?", ["CORRECT answer", "wrong", "wrong", "wrong"], "Explanation: why correct is right and the key trap in the distractors."]
      ]
    }
  ]
});
```

## Question rules
- The **first option is always the correct one** (the engine shuffles).
- Exactly 4 options, all distinct, similar length and plausibility. No "all of the above" / "none of the above".
- Mix recall with application: at least 4 of 10 per unit should be clinical vignettes or "which is best / next step" items.
- Explanations: 1-2 sentences, teach the reasoning.
- Must be factually correct per current mainstream PT education (APTA, NPTE content outline, standard texts). If a fact is contested or varies by source, don't ask it.
- No question text duplicated anywhere in the file.
- Plain straight quotes inside JS strings must be escaped or use the other quote type.

Validate with: `node tools/validate.js data/<id>.js`
