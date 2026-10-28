// Usage: node tools/validate.js [data/file.js ...]   (no args = all files in data/)
// Checks schema v2 for the given files, and question-text uniqueness across ALL data files.
const fs = require("fs"), path = require("path"), vm = require("vm");
const dir = path.join(__dirname, "..", "data");
const all = fs.readdirSync(dir).filter(f => f.endsWith(".js")).map(f => path.join(dir, f));
const files = process.argv.slice(2).length ? process.argv.slice(2).map(f => path.resolve(f)) : all;
const GEN = ["mean","median","z","pct","se","df","r2","reg","sens"];
const TRACKS = ["prereq","found","clinical"];
let errors = 0, warnings = 0, totalQ = 0, totalU = 0;
const err = (f, m) => { errors++; console.log(`✗ ${path.basename(f)}: ${m}`); };
const warn = (f, m) => { warnings++; console.log(`! ${path.basename(f)}: ${m}`); };
const words = s => String(s).replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;

function load(f) {
  const ctx = { window: {} }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
  return (ctx.window.SUBJECTS || []);
}
// global question index (for cross-file duplicates)
const globalQ = new Map(); const ids = new Map();
for (const f of all) { try { for (const s of load(f)) { ids.set(s.id, (ids.get(s.id) || 0) + 1); (s.units || []).forEach(u => (u.qs || []).forEach(q => { const k = String(q[0]).trim().toLowerCase(); globalQ.set(k, (globalQ.get(k) || []).concat(path.basename(f))); })); } } catch (e) {} }

for (const f of files) {
  let list;
  try { list = load(f); } catch (e) { err(f, "JS error: " + e.message); continue; }
  if (list.length !== 1) { err(f, `must register exactly 1 subject, got ${list.length}`); continue; }
  const s = list[0];
  if (path.basename(f, ".js") !== s.id) err(f, `id "${s.id}" must match filename`);
  if (ids.get(s.id) > 1) err(f, "duplicate course id across files");
  if (!TRACKS.includes(s.track)) err(f, "bad track " + s.track);
  for (const k of ["code","title","desc"]) if (typeof s[k] !== "string" || !s[k]) err(f, "missing " + k);
  if (typeof s.order !== "number" || typeof s.credits !== "number") err(f, "order/credits must be numbers");
  if (!Array.isArray(s.objectives) || s.objectives.length < 4) err(f, "need 4+ objectives");
  if (!Array.isArray(s.references) || s.references.length < 2) err(f, "need 2+ references");
  if (!Array.isArray(s.units) || s.units.length < 4) { err(f, "need 4+ units"); continue; }
  const seen = new Set(); let longest = 0, nq = 0;
  s.units.forEach((u, ui) => {
    totalU++;
    const tag = `unit ${ui + 1}`;
    if (!u.t || !u.sub) err(f, tag + " missing t/sub");
    if (!Array.isArray(u.lesson) || u.lesson.length < 4) err(f, tag + " lesson needs 4+ paragraphs");
    else { const w = u.lesson.reduce((n, p) => n + words(p), 0); if (w < 350) err(f, `${tag} lesson too short (${w} words, need 350+)`); }
    if (!Array.isArray(u.guide) || u.guide.length < 5) err(f, tag + " needs 5+ guide bullets");
    if (!Array.isArray(u.terms) || u.terms.length < 8) err(f, tag + " needs 8+ terms");
    else u.terms.forEach((t, ti) => { if (!Array.isArray(t) || t.length !== 2 || !t[0] || !t[1]) err(f, `${tag} term ${ti + 1} must be [term, definition]`); });
    const a = u.assignment || {};
    if (!a.title || !a.task || !a.deliverable) err(f, tag + " assignment needs title/task/deliverable");
    (u.gen || []).forEach(g => { if (!GEN.includes(g)) err(f, tag + " unknown gen " + g); });
    if (!Array.isArray(u.qs) || u.qs.length < 12) err(f, `${tag} needs 12+ questions (has ${(u.qs || []).length})`);
    (u.qs || []).forEach((q, qi) => {
      totalQ++; nq++;
      const t = `${tag} q${qi + 1}`;
      if (!Array.isArray(q) || q.length !== 3) return err(f, t + " must be [q, options, explanation]");
      const [text, opts, ex] = q;
      if (typeof text !== "string" || text.length < 10) err(f, t + " question text");
      if (!Array.isArray(opts) || opts.length !== 4) err(f, t + " needs exactly 4 options");
      else {
        if (new Set(opts.map(o => String(o).trim().toLowerCase())).size !== 4) err(f, t + " duplicate options");
        if (opts.some(o => /all of the above|none of the above/i.test(o))) err(f, t + " no all/none of the above");
        const L = opts.map(o => String(o).length); if (L[0] > Math.max(...L.slice(1)) * 1.15) longest++;
      }
      if (typeof ex !== "string" || ex.length < 15) err(f, t + " explanation too short");
      const key = String(text).trim().toLowerCase();
      if (seen.has(key)) err(f, t + " duplicate question text"); seen.add(key);
      const where = globalQ.get(key) || []; if (where.filter(w => w !== path.basename(f)).length) err(f, `${t} same question text also in ${where.filter(w => w !== path.basename(f)).join(", ")}`);
    });
  });
  if (nq && longest / nq > 0.4) warn(f, `correct answer is clearly the longest option in ${Math.round(longest / nq * 100)}% of questions (aim under 40%)`);
  console.log(`✓ ${s.id}: ${s.units.length} units, ${nq} questions, ${s.units.reduce((n, u) => n + (u.terms || []).length, 0)} terms, ${s.units.reduce((n, u) => n + (u.lesson || []).reduce((m, p) => m + words(p), 0), 0)} lesson words`);
}
console.log(`\n${files.length} files, ${totalU} units, ${totalQ} questions, ${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
