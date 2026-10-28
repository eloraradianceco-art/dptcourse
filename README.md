# Reject the Null · DPT Program

A complete Doctor of Physical Therapy study program, played as a game, from prerequisites through NPTE board prep.

**Play:** https://eloraradianceco-art.github.io/dptcourse/

## Program at a glance

44 courses · 242 units · 3,630 questions · 2,850+ flashcard terms · about 150,000 words of lessons

| Track | Courses |
|---|---|
| **Prerequisites** (matched to William Carey University's DPT requirements) | General Biology I & II, General Chemistry I & II, Physics I & II, Anatomy & Physiology I & II, Psychology & Lifespan Development, Research Statistics, Medical Terminology, GRE Preparation |
| **DPT Year 1 · Foundations** | Gross Anatomy, Patient Care Skills & Functional Mobility, Neuroscience, Kinesiology & Biomechanics, Exercise Physiology, Examination & Evaluation, Pathophysiology, Pharmacology, Therapeutic Exercise, Physical Agents & Modalities, Motor Control & Motor Learning, Diagnostic Imaging & Lab Values, Pain Science & Psychosocial Care, Health Promotion & Nutrition |
| **DPT Years 2–3 · Clinical Practice** | Evidence-Based Practice, Musculoskeletal, Cardiopulmonary, Integumentary, Differential Diagnosis, Neuromuscular, Vestibular Rehabilitation, Prosthetics/Orthotics & Assistive Technology, Acute Care, Pediatrics, Geriatrics, Pelvic Health, Oncology & Lymphatic, Sports PT, Health Care Management, Professional Practice & Ethics, Clinical Education, Capstone: Clinical Reasoning & NPTE Review |

## Every course includes
- Syllabus: description, learning objectives, credit hours, standard textbooks
- Units, each with a **lesson** (500–800 words), **study guide**, **flashcards**, a **coursework assignment**, and a 15-question bank
- Unit rounds (8 questions, 3 lives), drill mode (all questions), and a **final exam** (20 questions, 80% to pass) that sets your transcript grade

## Program tools
- **Semester plan:** prerequisites mapped to William Carey's requirements, plus a representative 9-term, 114-credit DPT sequence
- **Admissions tracker:** GPA, GRE, observation hours, and the application checklist
- **Transcript:** letter grades, credits earned, GPA
- **NPTE mock:** 45-question sections or a full 225-question, 5-section mock weighted to the FSBPT content outline, with results by content area; saves after every answer
- **Review deck:** every missed question across the program

## Quality
Every course was written to standard DPT texts and current APTA/JOSPT clinical practice guidelines, then independently fact-checked. Values that vary by source are taught as ranges. `tools/validate.js` enforces structure, unique questions across all courses, and limits on answer-length bias.

## Structure
```
index.html           app shell
css/style.css        styles (light + dark)
js/app.js            engine
js/curriculum.js     prerequisites, semester plan, admissions, NPTE blueprint
js/manifest.js       course files to load
js/gen.js            number-question generators (statistics)
data/<course>.js     one file per course (schema: CONTENT_SCHEMA.md)
tools/validate.js    node tools/validate.js
tools/lengthbias.js  node tools/lengthbias.js data/<course>.js
```

Progress saves in the browser (localStorage), per device. Content is for study and review. It doesn't replace program coursework, clinical instruction, or professional judgment. Confirm admissions and exam details with the program, ETS, and FSBPT.
