# Reject the Null · DPT

A full Doctor of Physical Therapy study program, played as a game.

**Play:** https://eloraradianceco-art.github.io/dptcourse/

## What's inside

| Track | Courses |
|---|---|
| **Prerequisites** | A&P I, A&P II, General Biology, General Chemistry, Physics for Health Sciences, Psychology & Lifespan Development, Medical Terminology, Research Statistics |
| **DPT Year 1 · Foundations** | Gross Anatomy, Neuroscience, Kinesiology & Biomechanics, Exercise Physiology, Pathophysiology, Pharmacology, Examination & Evaluation, Therapeutic Exercise, Physical Agents & Modalities |
| **DPT Years 2–3 · Clinical** | Musculoskeletal, Neuromuscular, Cardiopulmonary, Integumentary, Pediatrics, Geriatrics, Differential Diagnosis, Evidence-Based Practice, Professional Practice |
| **Capstone** | Board Exam Simulator (NPTE-style, 25 mixed questions) |

26 courses · 134 units · 1,300+ questions. Every course has a syllabus with objectives, units with a study guide and a coursework assignment, and a final exam.

## How it plays
- Clear a unit: 6 of 8 correct with 3 lives. Units unlock in order.
- Final exam: 15 questions, 12 to pass. Unlocks after all units.
- Missed questions go to a global review deck.
- XP and ranks run from Pre-PT Student to Doctor of Physical Therapy.
- Progress saves in the browser (localStorage), per device.

## Structure
```
index.html          app shell
css/style.css       styles (light + dark)
js/app.js           game engine
js/gen.js           number-question generators (stats)
js/manifest.js      list of course files to load
data/<course>.js    one file per course
tools/validate.js   content validator: node tools/validate.js
CONTENT_SCHEMA.md   how to write a course file
```

## Adding or editing a course
1. Edit or create `data/<id>.js` following `CONTENT_SCHEMA.md`.
2. Add new ids to `js/manifest.js`.
3. Run `node tools/validate.js`.

Content is written for study and review, not as a substitute for program coursework or clinical judgment.
