// Lists questions where the correct (first) option is clearly the longest. Usage: node tools/lengthbias.js data/<id>.js
const fs = require("fs"), vm = require("vm");
for (const f of process.argv.slice(2)) {
  const ctx = { window: {} }; vm.createContext(ctx); vm.runInContext(fs.readFileSync(f, "utf8"), ctx);
  const s = ctx.window.SUBJECTS[0]; let n = 0, b = 0;
  s.units.forEach((u, ui) => u.qs.forEach((q, qi) => { n++; const L = q[1].map(o => String(o).length);
    if (L[0] > Math.max(...L.slice(1)) * 1.15) { b++; console.log(`unit ${ui + 1} q${qi + 1}: [${L.join(", ")}] ${String(q[0]).slice(0, 70)}`); } }));
  console.log(`${s.id}: ${b}/${n} biased (${Math.round(b / n * 100)}%)`);
}
