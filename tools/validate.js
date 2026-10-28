// Usage: node tools/validate.js [data/file.js ...]   (no args = all files in data/)
const fs = require("fs"), path = require("path"), vm = require("vm");
const dir = path.join(__dirname, "..", "data");
const files = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(dir).filter(f => f.endsWith(".js")).map(f => path.join(dir, f));
const GEN = ["mean","median","z","pct","se","df","r2","reg","sens"];
const TRACKS = ["prereq","found","clinical"];
let errors = 0, totalQ = 0, totalU = 0; const ids = new Set();
const err = (f, m) => { errors++; console.log(`✗ ${path.basename(f)}: ${m}`); };
for (const f of files) {
  const ctx = { window: {} }; vm.createContext(ctx);
  try { vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f }); }
  catch (e) { err(f, "JS error: " + e.message); continue; }
  const list = ctx.window.SUBJECTS || [];
  if (list.length !== 1) { err(f, `must register exactly 1 subject, got ${list.length}`); continue; }
  const s = list[0];
  if (path.basename(f, ".js") !== s.id) err(f, `id "${s.id}" must match filename`);
  if (ids.has(s.id)) err(f, "duplicate id"); ids.add(s.id);
  if (!TRACKS.includes(s.track)) err(f, "bad track " + s.track);
  for (const k of ["code","title","desc"]) if (typeof s[k] !== "string" || !s[k]) err(f, "missing " + k);
  if (typeof s.order !== "number" || typeof s.credits !== "number") err(f, "order/credits must be numbers");
  if (!Array.isArray(s.objectives) || s.objectives.length < 3) err(f, "need 3+ objectives");
  if (!Array.isArray(s.units) || s.units.length < 3) { err(f, "need 3+ units"); continue; }
  const seen = new Set();
  s.units.forEach((u, ui) => {
    totalU++;
    const tag = `unit ${ui + 1}`;
    if (!u.t || !u.sub) err(f, tag + " missing t/sub");
    if (!Array.isArray(u.guide) || u.guide.length < 4) err(f, tag + " needs 4+ guide bullets");
    const a = u.assignment || {};
    if (!a.title || !a.task || !a.deliverable) err(f, tag + " assignment needs title/task/deliverable");
    (u.gen || []).forEach(g => { if (!GEN.includes(g)) err(f, tag + " unknown gen " + g); });
    if (!Array.isArray(u.qs) || u.qs.length < 6) err(f, tag + " needs 6+ questions");
    (u.qs || []).forEach((q, qi) => {
      totalQ++;
      const t = `${tag} q${qi + 1}`;
      if (!Array.isArray(q) || q.length !== 3) return err(f, t + " must be [q, options, explanation]");
      const [text, opts, ex] = q;
      if (typeof text !== "string" || text.length < 10) err(f, t + " question text");
      if (!Array.isArray(opts) || opts.length !== 4) err(f, t + " needs exactly 4 options");
      else {
        if (new Set(opts.map(o => String(o).trim().toLowerCase())).size !== 4) err(f, t + " duplicate options");
        if (opts.some(o => /all of the above|none of the above/i.test(o))) err(f, t + " no all/none of the above");
      }
      if (typeof ex !== "string" || ex.length < 15) err(f, t + " explanation too short");
      const key = String(text).trim().toLowerCase();
      if (seen.has(key)) err(f, t + " duplicate question text"); seen.add(key);
    });
  });
  console.log(`✓ ${s.id}: ${s.units.length} units, ${s.units.reduce((n, u) => n + (u.qs || []).length, 0)} questions`);
}
console.log(`\n${files.length} files, ${totalU} units, ${totalQ} questions, ${errors} error(s)`);
process.exit(errors ? 1 : 0);
