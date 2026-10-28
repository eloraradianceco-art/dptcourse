# Course content schema (v2)

Each course is one file: `data/<id>.js`. It registers itself on load:

```js
(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "gross-anatomy",            // kebab-case, same as filename
  track: "found",                 // "prereq" | "found" | "clinical"
  order: 1,                       // position within its track
  code: "DPT 610",
  title: "Gross Anatomy",
  credits: 6,                     // typical credit hours
  desc: "Two or three sentences on what the course covers and why a PT needs it.",
  objectives: [ "Verb-first learning objective", "..." ],          // 5-7
  references: [ "Moore KL, Dalley AF, Agur AMR. Clinically Oriented Anatomy. Wolters Kluwer." ],  // 3-5 standard textbooks / guidelines (no editions or years needed)
  units: [                        // see unit counts in your instructions; in teaching order
    {
      t: "Upper Extremity",
      sub: "Shoulder girdle, brachial plexus, elbow, wrist, hand",
      lesson: [                   // THE READING. 5-8 paragraphs, 500-800 words total. Teaches the unit like a good lecturer:
                                  // concepts, mechanisms, why it matters clinically, a worked example. HTML allowed: <b>, <i>, <span class='formula'>.
        "Paragraph one...",
        "Paragraph two..."
      ],
      guide: [                    // 6-8 bullets: the condensed study sheet / exam review. HTML allowed.
        "<b>Rotator cuff (SITS)</b>: supraspinatus, infraspinatus, teres minor, subscapularis."
      ],
      terms: [                    // 10-12 key terms for flashcards: [term, one-sentence definition]
        ["Brachial plexus", "Network of nerves from the C5-T1 ventral rami that supplies the upper limb."]
      ],
      assignment: {
        title: "Brachial plexus map",
        task: "What to do, concretely, 2-4 sentences. Applied and clinical where possible.",
        deliverable: "What the finished product is."
      },
      gen: [],                    // leave empty (only Research Statistics uses number generators)
      qs: [                       // 15 questions
        ["Question text?", ["CORRECT answer", "wrong", "wrong", "wrong"], "Explanation: why correct is right and the trap in the distractors."]
      ]
    }
  ]
});
```

## Question rules
- The **first option is always the correct one** (the engine shuffles).
- Exactly 4 options, all distinct, **similar length** and plausibility. Do not make the correct answer the longest option most of the time (the validator flags this).
- No "all of the above" / "none of the above".
- Mix recall with application: at least 6 of 15 per unit are clinical vignettes or "BEST / MOST appropriate / NEXT step" items, NPTE style.
- Explanations: 1-3 sentences, teach the reasoning and why the tempting distractor is wrong.
- Must be correct per current mainstream PT education (APTA, NPTE content outline, standard texts, current CPGs). If a fact is contested or a number varies by source, don't ask it as a single number.
- No question text duplicated anywhere (the validator checks across all files).
- Escape quotes inside JS strings correctly.

Validate with: `node tools/validate.js data/<id>.js` (and `node tools/validate.js` for all files).
