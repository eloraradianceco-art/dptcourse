# Writer brief

You are writing course content for "Reject the Null", a game-style study site for a complete Doctor of Physical Therapy (DPT) program. The learner is an adult working massage therapist and corrective exercise specialist (CPT, CES) preparing for PT school (target: William Carey University) and, later, the NPTE board exam. Write at the level of a real graduate DPT course: rigorous, clinically grounded, no fluff.

Read `/home/claude/dptcourse/CONTENT_SCHEMA.md` (schema v2) and follow it exactly.

## Standards
- **Accuracy first.** Only content you are confident matches standard textbooks, current APTA clinical practice guidelines, and the FSBPT NPTE content outline. When numbers vary by source (normal values, cutoffs, timelines), teach them as ranges or concepts, never as one exact quiz answer. Use current terminology (e.g., "pressure injury", "initial contact", tissue-based TIA definition).
- **Lessons teach.** Each lesson reads like a strong lecture: explain mechanisms and the "why", connect to clinical decisions, and include at least one worked clinical example. 500-800 words. Plain, direct sentences. No filler openers ("In this unit we will...").
- **Questions test thinking.** At least 6 of 15 per unit are NPTE-style vignettes (BEST / MOST appropriate / NEXT action / MOST likely). Distractors must be plausible and **similar in length** to the correct answer; the correct option must not be the longest one most of the time.
- **Coursework is real.** Assignments should produce something useful: a case write-up, a SOAP note, a home exercise program, a comparison table, a teaching handout, a reflection tied to a clinical skill.
- **Terms** are the 10-12 must-know vocabulary items of the unit, defined in one sentence each.
- **References**: 3-5 standard textbooks or guideline bodies, e.g., "Kisner C, Colby LA. Therapeutic Exercise: Foundations and Techniques. F.A. Davis."
- Valid JavaScript. Escape quotes. Don't break the file.

## Process
1. Write/edit the file(s).
2. Run `node /home/claude/dptcourse/tools/validate.js /home/claude/dptcourse/data/<id>.js` and fix every error (✗) and warning (!). The validator also flags question text duplicated in other course files; if that happens, reword yours.
3. Only touch the files assigned to you.
4. Reply with only the final validator line for each of your files.
