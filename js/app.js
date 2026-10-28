/* Reject the Null — DPT program engine */
(function(){
const $=s=>document.querySelector(s);
const app=()=>$("#app");
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=a=>a[Math.floor(Math.random()*a.length)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const P=window.PROGRAM;

const TRACKS=[
 {id:"prereq",name:"Prerequisites",note:"What William Carey requires before you apply, plus GRE prep."},
 {id:"found",name:"DPT Year 1 · Foundations",note:"Basic, movement, and clinical sciences."},
 {id:"clinical",name:"DPT Years 2–3 · Clinical Practice",note:"Patient management across every practice area, clinical education, and board review."}
];
const RANKS=[[0,"Pre-PT Student"],[500,"PT Applicant"],[2000,"Admitted Student"],[5000,"DPT Year 1"],[9000,"DPT Year 2"],[14000,"DPT Year 3"],[20000,"Board Candidate"],[28000,"Doctor of Physical Therapy"]];

/* ---------- state ---------- */
const KEY="dpt-state-v2";
const fresh=()=>({xp:0,units:{},finals:{},finalPct:{},done:{},read:{},known:{},cardsDone:{},missed:[],npte:{history:[]},session:null,last:null,adm:{gpa:"",gre:"",hours:"",checks:{}}});
let S=fresh();
try{const s=JSON.parse(localStorage.getItem(KEY)||"null");if(s)S=Object.assign(fresh(),s);else migrate()}catch(e){}
S.npte=S.npte||{history:[]};S.adm=Object.assign({gpa:"",gre:"",hours:"",checks:{}},S.adm||{});
function migrate(){try{const o=JSON.parse(localStorage.getItem("rtn-state")||"null");if(!o)return;
  S.xp=o.xp||0;Object.entries(o.stars||{}).forEach(([i,v])=>{if(v)S.units["research-statistics:"+i]=v});
  S.missed=(o.missed||[]).map(id=>"research-statistics:"+id.replace("-",":"));save();}catch(e){}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}

let SUBJ=[],BYID={},TERM={};
const uk=(sid,u)=>sid+":"+u;
const clearedIn=s=>s.units.filter((_,u)=>S.units[uk(s.id,u)]>0).length;
const unitOpen=(s,u)=>u===0||S.units[uk(s.id,u-1)]>0;
const totalUnits=()=>SUBJ.reduce((n,s)=>n+s.units.length,0);
const totalCleared=()=>SUBJ.reduce((n,s)=>n+clearedIn(s),0);
const rankOf=xp=>{let i=0;RANKS.forEach((r,k)=>{if(xp>=r[0])i=k});return {name:RANKS[i][1],floor:RANKS[i][0],next:RANKS[i+1]||null}};
const letter=p=>p>=.9?"A":p>=.8?"B":p>=.7?"C":p>=.6?"D":"F";
const points={A:4,B:3,C:2,D:1,F:0};
function gpa(){let q=0,c=0;SUBJ.forEach(s=>{const p=S.finalPct[s.id];if(p!=null&&S.finals[s.id]&&s.credits){q+=points[letter(p)]*s.credits;c+=s.credits}});return c?(q/c).toFixed(2):"—"}
function knownCount(s,u){return (s.units[u].terms||[]).filter((_,t)=>S.known[`${s.id}:${u}:${t}`]).length}

/* ---------- loading & routing ---------- */
function load(){
  app().innerHTML=`<p class="loading eyebrow">Loading courses…</p>`;
  let left=window.MANIFEST.length;
  const done=()=>{if(--left>0)return;
    P.terms.forEach((t,i)=>t.courses.forEach((c,j)=>TERM[c]={term:t.name,idx:i*20+j}));
    P.prereqOrder.forEach((c,i)=>{if(!TERM[c])TERM[c]={term:"Prerequisite",idx:-100+i}});
    SUBJ=(window.SUBJECTS||[]).slice().sort((a,b)=>((TERM[a.id]||{idx:999}).idx)-((TERM[b.id]||{idx:999}).idx));
    SUBJ.forEach(s=>BYID[s.id]=s);route();};
  window.MANIFEST.forEach(id=>{const sc=document.createElement("script");sc.src="data/"+id+".js";sc.onload=done;sc.onerror=done;document.head.appendChild(sc)});
}
function route(){
  const h=decodeURIComponent(location.hash.slice(1));const [a,b]=h.split("/");
  if(a==="plan")return renderPlan();
  if(a==="admissions")return renderAdmissions();
  if(a==="transcript")return renderTranscript();
  if(a==="npte")return renderNpte();
  if(BYID[a]){if(b!=null&&BYID[a].units[+b])return renderUnit(BYID[a],+b);return renderCourse(BYID[a])}
  renderHome();
}
window.addEventListener("hashchange",()=>{UT=null;N=null;route()});
function go(hash){N=null;if((location.hash.slice(1)||"")===hash)route();else location.hash=hash}
function top(){window.scrollTo(0,0)}

/* ---------- shared pieces ---------- */
function starsHTML(n,max=3){let s="";for(let i=0;i<max;i++)s+=i<n?"★":`<span class="off">★</span>`;return `<span class="stars" aria-label="${n} of ${max} stars">${s}</span>`}
function curveSVG(frac){
  const W=600,H=170,pad=24,base=140;const pts=[];
  for(let i=0;i<=120;i++){const z=-3.2+6.4*i/120;pts.push([pad+(W-2*pad)*i/120,base-110*Math.exp(-z*z/2)])}
  const line=pts.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" ");const cut=pad+(W-2*pad)*frac;
  let ticks="";[-3,-2,-1,0,1,2,3].forEach(z=>{const x=pad+(W-2*pad)*(z+3.2)/6.4;ticks+=`<line x1="${x}" y1="${base}" x2="${x}" y2="${base+5}" stroke="var(--muted)"/><text x="${x}" y="${base+20}" text-anchor="middle" font-size="12" font-family="IBM Plex Mono, monospace" fill="var(--muted)">${z>0?"+"+z:z}σ</text>`});
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Program progress shown as area under a normal curve"><defs><clipPath id="cp"><rect x="0" y="0" width="${cut}" height="${H}"/></clipPath></defs>
   <path d="${line} L ${W-pad} ${base} L ${pad} ${base} Z" fill="var(--fill)" clip-path="url(#cp)"/><path d="${line}" fill="none" stroke="var(--ink)" stroke-width="2"/>
   <line x1="${pad}" y1="${base}" x2="${W-pad}" y2="${base}" stroke="var(--line)" stroke-width="1.5"/>
   ${frac>0&&frac<1?`<line x1="${cut}" y1="20" x2="${cut}" y2="${base}" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 3"/>`:""}${ticks}</svg>`;
}
function header(active){
  const rk=rankOf(S.xp);const pct=rk.next?Math.min(100,(S.xp-rk.floor)/(rk.next[0]-rk.floor)*100):100;
  const nav=[["","Courses"],["plan","Semester plan"],["admissions","Admissions"],["transcript","Transcript"],["npte","NPTE mock"]];
  return `<div class="top"><div><div class="eyebrow">Doctor of Physical Therapy · study program</div><h1><a href="#" class="plain">Reject the Null</a></h1></div>
   <div class="rank"><span class="eyebrow">Rank</span><b>${rk.name}</b><span class="mono muted small">${S.xp.toLocaleString()} XP${rk.next?" · "+(rk.next[0]-S.xp).toLocaleString()+" to "+rk.next[1]:""}</span><div class="xpbar"><i style="width:${pct}%"></i></div></div></div>
   <nav class="nav">${nav.map(([h,l])=>`<a href="#${h}" class="${active===h?"on":""}">${l}</a>`).join("")}</nav>`;
}

/* ---------- home ---------- */
function renderHome(){
  const tu=totalUnits(),tc=totalCleared(),frac=tu?tc/tu:0;
  const finals=SUBJ.filter(s=>S.finals[s.id]).length;
  const tracks=TRACKS.map(t=>{
    const list=SUBJ.filter(s=>s.track===t.id);if(!list.length)return"";
    const cr=list.reduce((n,s)=>n+s.credits,0);
    return `<section class="track t-${t.id}"><div class="track-h"><h2>${t.name}</h2><span class="mono muted small">${list.length} courses · ${cr} cr</span></div>
     <p class="muted small">${t.note}</p>
     <div class="grid">${list.map(s=>{const c=clearedIn(s),n=s.units.length;return `
      <a class="subj t-${t.id}" href="#${s.id}">
        <span class="code">${s.code}${s.credits?" · "+s.credits+" cr":""}</span><h3>${s.title}</h3>
        <div class="pbar"><i style="width:${c/n*100}%"></i></div>
        <span class="meta"><span>${c}/${n} units</span><span>${S.finals[s.id]?"Final "+letter(S.finalPct[s.id]||0):(TERM[s.id]||{}).term||""}</span></span>
      </a>`}).join("")}</div></section>`}).join("");
  const last=S.last&&BYID[S.last.sid]&&BYID[S.last.sid].units[S.last.u]?S.last:null;
  const sess=S.session&&S.session.type==="npte"?S.session:null;
  app().innerHTML=`${header("")}
   <div class="panel curve"><div class="cap"><span class="eyebrow">Area under the curve = program complete</span><span class="big mono">${Math.round(frac*100)}%</span></div>${curveSVG(frac)}
    <div class="stats4"><div><span class="eyebrow">Units</span><b>${tc}/${tu}</b></div><div><span class="eyebrow">Finals</span><b>${finals}/${SUBJ.length}</b></div><div><span class="eyebrow">GPA</span><b>${gpa()}</b></div><div><span class="eyebrow">Missed</span><b>${S.missed.length}</b></div></div></div>
   ${last||sess||S.missed.length?`<div class="panel"><div class="row between wrapgap">
     ${last?`<div><span class="eyebrow">Pick up where you left off</span><h3>${BYID[last.sid].title}: ${BYID[last.sid].units[last.u].t}</h3></div><a class="btn primary" href="#${last.sid}/${last.u}">Continue</a>`:""}
     </div>
     <div class="row">${sess?`<a class="btn" href="#npte">Resume NPTE mock (${sess.i}/${sess.qids.length})</a>`:""}${S.missed.length?`<button class="btn" onclick="RTN.start({type:'review'})">Review ${S.missed.length} missed</button>`:""}</div></div>`:""}
   ${tracks}
   <div class="row between"><span class="toast">Progress saves on this device.</span><button class="linkish" id="rst" onclick="RTN.reset()">Reset all progress</button></div>`;
  top();
}
let resetArm=false;
function reset(){if(!resetArm){resetArm=true;$("#rst").textContent="Tap again to erase everything";return}
  S=fresh();try{localStorage.removeItem("rtn-state")}catch(e){}save();resetArm=false;renderHome()}

/* ---------- semester plan ---------- */
function statusCell(id){const s=BYID[id];if(!s)return `<span class="muted">—</span>`;
  if(S.finals[id])return `<span class="chip ok">${letter(S.finalPct[id]||0)}</span>`;
  const c=clearedIn(s);return c?`<span class="chip">${c}/${s.units.length}</span>`:`<span class="chip">—</span>`}
function courseRow(id){const s=BYID[id];if(!s)return"";return `<tr><td class="mono">${s.code}</td><td><a href="#${id}">${s.title}</a></td><td class="num">${s.credits}</td><td class="num">${statusCell(id)}</td></tr>`}
function renderPlan(){
  let total=0;
  const terms=P.terms.map(t=>{const cr=t.courses.reduce((n,c)=>n+((BYID[c]||{}).credits||0),0);total+=cr;
    return `<div class="panel"><div class="row between"><h3>${t.name}</h3><span class="mono muted small">${cr} cr</span></div>
     <div class="tablewrap"><table><thead><tr><th>Code</th><th>Course</th><th class="num">Cr</th><th class="num">Status</th></tr></thead><tbody>${t.courses.map(courseRow).join("")}</tbody></table></div></div>`}).join("");
  const pre=P.prereqs.map(r=>{const done=r.courses.every(c=>S.finals[c]);return `<tr><td>${done?"✓ ":""}${r.req}</td><td>${r.courses.map(c=>BYID[c]?`<a href="#${c}">${BYID[c].title}</a>`:"").join(", ")}</td></tr>`}).join("");
  app().innerHTML=`${header("plan")}
   <div><h2>Semester plan</h2><p class="muted">A representative 3-year DPT sequence, modeled on how CAPTE-accredited programs order their courses. Your program's official plan of study may differ.</p></div>
   <div class="panel"><h3>Before you apply · prerequisites</h3><div class="tablewrap"><table><thead><tr><th>William Carey requirement</th><th>Course here</th></tr></thead><tbody>${pre}</tbody></table></div></div>
   ${terms}
   <div class="panel"><div class="row between"><h3>Total DPT credits</h3><span class="big mono">${total}</span></div><p class="muted small">Most DPT programs total roughly 100–130 credit hours over about 3 years.</p></div>`;
  top();
}

/* ---------- admissions ---------- */
function renderAdmissions(){
  const A=S.adm;const preDone=P.prereqs.filter(r=>r.courses.every(c=>S.finals[c])).length;
  const greN=parseInt(A.gre,10),hrsN=parseFloat(A.hours),gpaN=parseFloat(A.gpa);
  const status=(ok,txt)=>`<span class="chip ${ok?"ok":""}">${ok?"✓ ":""}${txt}</span>`;
  app().innerHTML=`${header("admissions")}
   <div><h2>Admissions tracker</h2><p class="muted">William Carey University DPT requirements, as listed on the program's admissions page. Confirm every cycle with the program before you apply.</p></div>
   <div class="panel"><h3>Your numbers</h3>
    <div class="form3">
     <label>Prereq GPA<input id="adm-gpa" inputmode="decimal" value="${esc(A.gpa)}" placeholder="e.g. 3.4" onchange="RTN.adm('gpa',this.value)"></label>
     <label>GRE total<input id="adm-gre" inputmode="numeric" value="${esc(A.gre)}" placeholder="e.g. 300" onchange="RTN.adm('gre',this.value)"></label>
     <label>Observation hours<input id="adm-hrs" inputmode="decimal" value="${esc(A.hours)}" placeholder="e.g. 12" onchange="RTN.adm('hours',this.value)"></label>
    </div>
    <div class="row">${status(gpaN>=3,"GPA ≥ 3.0")}${status(greN>=290,"GRE ≥ 290")}${status(hrsN>=40,"40+ hours")}${status(preDone===P.prereqs.length,`Prereq courses ${preDone}/${P.prereqs.length} here`)}</div></div>
   <div class="panel"><h3>Checklist</h3>
    ${P.admissions.items.map((it,i)=>`<label class="check"><input type="checkbox" id="adm-${i}" ${A.checks[i]?"checked":""} onchange="RTN.admCheck(${i},this.checked)"> <span>${esc(it)}</span></label>`).join("")}
    <p class="small muted">Source: <a href="${P.admissions.source}" target="_blank" rel="noopener">William Carey University, DPT admission requirements</a></p></div>
   <div class="panel"><h3>Prerequisite courses</h3><div class="tablewrap"><table><thead><tr><th>Requirement</th><th>Study here</th><th class="num">Status</th></tr></thead><tbody>
    ${P.prereqs.map(r=>`<tr><td>${r.req}</td><td>${r.courses.map(c=>BYID[c]?`<a href="#${c}">${BYID[c].title}</a>`:"").join("<br>")}</td><td class="num">${r.courses.every(c=>S.finals[c])?`<span class="chip ok">✓</span>`:`<span class="chip">${r.courses.filter(c=>S.finals[c]).length}/${r.courses.length}</span>`}</td></tr>`).join("")}
   </tbody></table></div><p class="small muted">Studying here prepares you for these courses and for credit-by-exam options. The program requires transcripted college credit with a lab for the sciences.</p></div>`;
  top();
}
function adm(k,v){S.adm[k]=String(v).trim();save();renderAdmissions()}
function admCheck(i,on){S.adm.checks[i]=on;save()}

/* ---------- transcript ---------- */
function renderTranscript(){
  const rows=t=>SUBJ.filter(s=>s.track===t).map(s=>{const p=S.finalPct[s.id];const ok=S.finals[s.id];
    return `<tr><td class="mono">${s.code}</td><td><a href="#${s.id}">${s.title}</a></td><td class="num">${s.credits}</td><td class="num mono">${ok?Math.round(p*100)+"%":"—"}</td><td class="num"><b>${ok?letter(p):clearedIn(s)?"IP":"—"}</b></td></tr>`}).join("");
  const earned=SUBJ.filter(s=>S.finals[s.id]).reduce((n,s)=>n+s.credits,0),all=SUBJ.reduce((n,s)=>n+s.credits,0);
  app().innerHTML=`${header("transcript")}
   <div><h2>Transcript</h2><p class="muted">Grades come from your best passing final exam score in each course. IP = in progress.</p></div>
   <div class="panel"><div class="stats4"><div><span class="eyebrow">GPA</span><b>${gpa()}</b></div><div><span class="eyebrow">Credits earned</span><b>${earned}/${all}</b></div><div><span class="eyebrow">Courses passed</span><b>${SUBJ.filter(s=>S.finals[s.id]).length}/${SUBJ.length}</b></div><div><span class="eyebrow">Coursework done</span><b>${Object.values(S.done).filter(Boolean).length}</b></div></div></div>
   ${TRACKS.map(t=>`<div class="panel"><h3>${t.name}</h3><div class="tablewrap"><table><thead><tr><th>Code</th><th>Course</th><th class="num">Cr</th><th class="num">Score</th><th class="num">Grade</th></tr></thead><tbody>${rows(t.id)}</tbody></table></div></div>`).join("")}`;
  top();
}

/* ---------- course page ---------- */
function renderCourse(s){
  const c=clearedIn(s),n=s.units.length;const allDone=c===n;const fin=S.finals[s.id]||0;
  const nodes=s.units.map((u,i)=>{const st=S.units[uk(s.id,i)]||0,open=unitOpen(s,i),k=uk(s.id,i);const tn=(u.terms||[]).length;
    return `<div class="node ${st?"done":open?"open":"locked"}"><div class="rail"><div class="dot">${st?"✓":i+1}</div><div class="stem"></div></div>
     <div class="ucard"><div class="row between"><span class="eyebrow">Unit ${i+1}</span>${starsHTML(st)}</div>
      <h3>${u.t}</h3><p>${u.sub}</p>
      <div class="row">${u.lesson?`<span class="chip ${S.read[k]?"ok":""}">${S.read[k]?"✓ ":""}Lesson</span>`:""}${tn?`<span class="chip ${knownCount(s,i)===tn?"ok":""}">Terms ${knownCount(s,i)}/${tn}</span>`:""}<span class="chip ${S.done[k]?"ok":""}">${S.done[k]?"✓ ":""}Coursework</span><span class="chip">${u.qs.length} Qs</span></div>
      <div class="row"><a class="btn primary" href="#${s.id}/${i}">Open unit</a>${open?`<button class="btn" onclick="RTN.start({type:'unit',sid:'${s.id}',u:${i}})">${st?"Replay round":"Quick round"}</button>`:""}</div></div></div>`}).join("");
  app().innerHTML=`${header("")}
   <div class="row"><a class="linkish" href="#">← All courses</a></div>
   <div class="panel syl t-${s.track}" style="border-top:3px solid var(--tc)">
    <span class="eyebrow" style="color:var(--tc)">${s.code} · ${s.credits} credit hours · ${(TERM[s.id]||{}).term||""}</span>
    <h2>${s.title}</h2><p>${s.desc}</p>
    <div class="pbar"><i style="width:${c/n*100}%"></i></div><span class="mono muted small">${c}/${n} units cleared${fin?` · Final: ${letter(S.finalPct[s.id]||0)} (${Math.round((S.finalPct[s.id]||0)*100)}%)`:""}</span>
    <details><summary>Learning objectives</summary><ul>${s.objectives.map(o=>`<li>${o}</li>`).join("")}</ul></details>
    ${s.references?`<details><summary>Textbooks & references</summary><ul>${s.references.map(r=>`<li>${esc(r)}</li>`).join("")}</ul></details>`:""}
   </div>
   <div class="path">${nodes}
    <div class="node boss ${fin?"done":allDone?"open":"locked"}"><div class="rail"><div class="dot">${fin?"✓":"F"}</div><div class="stem"></div></div>
     <div class="ucard"><div class="row between"><span class="eyebrow">Final exam</span>${starsHTML(fin)}</div>
      <h3>${s.title} Final</h3><p>20 questions drawn from every unit. 5 lives, 16 correct (80%) to pass. Your best score sets your transcript grade. Unlocks when all units are cleared.</p>
      <div class="row"><button class="btn primary" ${allDone?"":"disabled"} onclick="RTN.start({type:'final',sid:'${s.id}'})">Take the final</button></div></div></div>
   </div>
   <span class="toast">Each unit: read the lesson, learn the terms, do the coursework, then clear the round (6 of 8 with 3 lives). Units unlock in order.</span>`;
  top();
}

/* ---------- unit page ---------- */
let UT=null; // {sid,u,tab,fc:{order,i,flip}}
function renderUnit(s,i,tab){
  if(!UT||UT.sid!==s.id||UT.u!==i)UT={sid:s.id,u:i,tab:"lesson",fc:null};
  if(tab)UT.tab=tab;
  S.last={sid:s.id,u:i};save();
  const u=s.units[i],k=uk(s.id,i);
  const tabs=[["lesson","Lesson",!!u.lesson],["guide","Guide",true],["cards","Flashcards",!!(u.terms&&u.terms.length)],["work","Coursework",true]].filter(t=>t[2]);
  if(!tabs.some(t=>t[0]===UT.tab))UT.tab=tabs[0][0];
  let body="";
  if(UT.tab==="lesson")body=`<article class="panel lesson">${u.lesson.map(p=>`<p>${p}</p>`).join("")}
     <div class="row">${S.read[k]?`<span class="chip ok">✓ Read</span>`:`<button class="btn" onclick="RTN.markRead('${s.id}',${i})">Mark lesson read <span class="mono small">+10 XP</span></button>`}<button class="btn" onclick="RTN.tab('guide')">Study guide →</button></div></article>`;
  else if(UT.tab==="guide")body=`<div class="panel guide"><ul>${u.guide.map(g=>`<li>${g}</li>`).join("")}</ul></div>`;
  else if(UT.tab==="cards")body=cardsHTML(s,i);
  else{const a=u.assignment;body=`<div class="assign"><span class="lbl">Coursework</span><h3>${esc(a.title)}</h3><p>${esc(a.task)}</p>
    <p class="muted small"><b>Deliverable:</b> ${esc(a.deliverable)}</p>
    <label class="check"><input type="checkbox" id="hw-${s.id}-${i}" ${S.done[k]?"checked":""} onchange="RTN.hw('${s.id}',${i},this.checked)"> Mark complete <span class="mono muted small">+25 XP</span></label></div>`;}
  const open=unitOpen(s,i);
  app().innerHTML=`<div class="row"><a class="linkish" href="#${s.id}">← ${s.title}</a></div>
   <div><span class="eyebrow">${s.code} · Unit ${i+1} of ${s.units.length}</span><h2>${u.t}</h2><p class="muted">${u.sub}</p></div>
   <div class="tabs" role="tablist">${tabs.map(([id,l])=>`<button role="tab" aria-selected="${UT.tab===id}" class="${UT.tab===id?"on":""}" onclick="RTN.tab('${id}')">${l}</button>`).join("")}</div>
   ${body}
   <div class="panel"><div class="row between wrapgap"><div><h3>Test yourself</h3><p class="muted small">${open?`Round: 8 of ${u.qs.length} questions, 6 to clear. Drill: all ${u.qs.length}, no lives.`:"Clear the previous unit to unlock this round. You can still drill the questions."}</p></div>${starsHTML(S.units[k]||0)}</div>
    <div class="row"><button class="btn primary" ${open?"":"disabled"} onclick="RTN.start({type:'unit',sid:'${s.id}',u:${i}})">Start round</button><button class="btn" onclick="RTN.start({type:'drill',sid:'${s.id}',u:${i}})">Drill all ${u.qs.length}</button>
    ${i<s.units.length-1?`<a class="btn" href="#${s.id}/${i+1}">Next unit →</a>`:""}</div></div>`;
  if(!tab)top();
}
function tab(t){renderUnit(BYID[UT.sid],UT.u,t)}
function markRead(sid,i){const k=uk(sid,i);if(!S.read[k]){S.read[k]=true;S.xp+=10;save()}renderUnit(BYID[sid],i,"lesson")}
function hw(sid,i,on){const k=uk(sid,i);if(on&&!S.done[k]){S.done[k]=true;S.xp+=25}else if(!on&&S.done[k]){S.done[k]=false;S.xp=Math.max(0,S.xp-25)}save()}

/* flashcards */
function cardsHTML(s,i){
  const terms=s.units[i].terms;
  if(!UT.fc)UT.fc={order:shuffle(terms.map((_,t)=>t)),i:0,flip:false};
  const fc=UT.fc;const kc=knownCount(s,i);
  if(fc.i>=fc.order.length)return `<div class="panel result"><h3>Deck done</h3><p class="muted">${kc} of ${terms.length} terms marked known.</p>
    <div class="row" style="justify-content:center"><button class="btn primary" onclick="RTN.fc('restart')">Go again</button>${kc<terms.length?`<button class="btn" onclick="RTN.fc('unknown')">Only the ones I missed</button>`:""}</div></div>`;
  const t=fc.order[fc.i];const [term,def]=terms[t];
  return `<div class="row between"><span class="mono muted small">Card ${fc.i+1}/${fc.order.length} · ${kc}/${terms.length} known</span><button class="linkish" onclick="RTN.fc('restart')">Shuffle</button></div>
   <button class="card ${fc.flip?"flipped":""}" onclick="RTN.fc('flip')" aria-label="Flip card"><span class="eyebrow">${fc.flip?"Definition":"Term · tap to flip"}</span><span class="cardtext">${fc.flip?esc(def):esc(term)}</span></button>
   <div class="row" style="justify-content:center"><button class="btn" onclick="RTN.fc('again')">Again</button><button class="btn primary" onclick="RTN.fc('got')">Got it</button></div>`;
}
function fc(action){
  const s=BYID[UT.sid],i=UT.u,f=UT.fc,terms=s.units[i].terms;
  if(action==="flip")f.flip=!f.flip;
  else if(action==="got"){const key=`${s.id}:${i}:${f.order[f.i]}`;S.known[key]=true;f.i++;f.flip=false;
    if(knownCount(s,i)===terms.length&&!S.cardsDone[uk(s.id,i)]){S.cardsDone[uk(s.id,i)]=true;S.xp+=15}save();}
  else if(action==="again"){S.known[`${s.id}:${i}:${f.order[f.i]}`]=false;f.order.push(f.order[f.i]);f.i++;f.flip=false;save();}
  else if(action==="restart")UT.fc=null;
  else if(action==="unknown")UT.fc={order:shuffle(terms.map((_,t)=>t).filter(t=>!S.known[`${s.id}:${i}:${t}`])),i:0,flip:false};
  renderUnit(s,i,"cards");
}

/* ---------- rounds ---------- */
let R=null;
function bankQ(s,u,k){const [q,o,e]=s.units[u].qs[k];return {q,o,e,id:`${s.id}:${u}:${k}`,label:s.title+" · "+s.units[u].t}}
function genQ(s,u,name){const [q,o,e]=window.GEN[name]();return {q,o,e,id:null,label:s.title+" · "+s.units[u].t}}
function fromId(id){const p=id.split(":");const s=BYID[p[0]];if(!s)return null;const u=+p[1],k=+p[2];if(!s.units[u]||!s.units[u].qs[k])return null;return bankQ(s,u,k)}
function poolOf(subjects){const pool=[];subjects.forEach(s=>s.units.forEach((u,ui)=>u.qs.forEach((_,k)=>pool.push(`${s.id}:${ui}:${k}`))));return pool}
function start(m){
  let qs,label,lives=3,need,mult=1,sub="";
  if(m.type==="unit"){const s=BYID[m.sid],u=s.units[m.u];const g=u.gen||[];const ng=Math.min(g.length,3);
    qs=shuffle([...shuffle(u.qs.map((_,k)=>k)).slice(0,8-ng).map(k=>bankQ(s,m.u,k)),...shuffle(g).slice(0,ng).map(x=>genQ(s,m.u,x))]);
    label=`${s.code} · Unit ${m.u+1}`;sub=u.t;need=6;}
  else if(m.type==="drill"){const s=BYID[m.sid],u=s.units[m.u];qs=shuffle(u.qs.map((_,k)=>bankQ(s,m.u,k)));label=`${s.code} · Unit ${m.u+1} drill`;sub=u.t;lives=99;need=0;}
  else if(m.type==="final"){const s=BYID[m.sid];qs=shuffle(poolOf([s])).slice(0,20).map(id=>{const q=fromId(id);const [,u]=id.split(":");const g=s.units[+u].gen||[];return g.length&&Math.random()<.25?genQ(s,+u,pick(g)):q});
    label=`${s.code} · Final exam`;sub=s.title;lives=5;need=16;mult=2;}
  else{qs=shuffle(S.missed).map(fromId).filter(Boolean).slice(0,15);if(!qs.length){S.missed=[];save();return renderHome()}label="Review deck";sub="Your missed questions";lives=99;need=0;}
  if(!qs.length)return renderHome();
  R={m,qs,label,sub,i:0,lives,maxLives:lives,need,mult,correct:0,streak:0,best:0,xp:0,marks:[]};
  renderQ();
}
function qCard(q,mixedLabel){
  R.order=shuffle(q.o.map((t,k)=>({t,ok:k===0})));
  return `<div class="panel qcard"><span class="eyebrow">${mixedLabel}</span><div class="qtext">${q.q}</div>
   <div class="opts">${R.order.map((o,k)=>`<button class="opt" id="o${k}" onclick="RTN.answer(${k})"><span>${"ABCD"[k]}</span><span>${o.t}</span></button>`).join("")}</div><div id="fb"></div></div>`;
}
function renderQ(){
  const q=R.qs[R.i];
  const pips=R.qs.length<=25?`<div class="pips">${R.qs.map((_,k)=>`<i class="${k<R.i?(R.marks[k]?"ok":"no"):k===R.i?"cur":""}"></i>`).join("")}</div>`:`<span class="mono small muted">${R.i+1}/${R.qs.length}</span>`;
  const lives=R.maxLives<20?`<div class="lives" aria-label="${R.lives} lives left">${Array.from({length:R.maxLives},(_,k)=>`<i class="${k<R.lives?"":"lost"}"></i>`).join("")}</div>`:"";
  const back=R.m.sid?(R.m.u!=null?`${R.m.sid}/${R.m.u}`:R.m.sid):"";
  app().innerHTML=`<div class="hud"><button class="linkish" onclick="RTN.go('${back}')">← Quit</button><span class="eyebrow">${R.label}</span>${lives}</div>
   <div class="hud">${pips}<span class="streak">${R.streak>1?"Streak ×"+R.streak:""}</span></div>
   ${qCard(q,R.m.type==="unit"||R.m.type==="drill"?R.sub:q.label)}`;
}
function reveal(k){
  const ok=R.order[k].ok;
  R.order.forEach((o,j)=>{const b=$("#o"+j);b.disabled=true;if(o.ok)b.classList.add("right");else if(j===k)b.classList.add("wrong")});
  return ok;
}
function answer(k){
  if(N)return npteAnswer(k);
  if(R.answered===R.i)return;R.answered=R.i;
  const q=R.qs[R.i];const ok=reveal(k);R.marks[R.i]=ok;
  if(ok){R.correct++;R.streak++;R.best=Math.max(R.best,R.streak);R.xp+=(R.m.type==="drill"?5:(10+Math.min(10,2*(R.streak-1)))*R.mult);
    if(q.id&&R.m.type==="review")S.missed=S.missed.filter(x=>x!==q.id);}
  else{R.streak=0;R.lives--;if(q.id&&!S.missed.includes(q.id))S.missed.push(q.id)}
  save();
  const last=R.i===R.qs.length-1||R.lives<=0;
  $("#fb").innerHTML=`<div class="fb ${ok?"":"no"}"><b>${ok?"Correct.":"Not quite."}</b> ${q.e}</div>
    <div class="row" style="margin-top:12px"><button class="btn primary" id="nx" onclick="${last?"RTN.finish()":"RTN.next()"}">${last?"See results":"Next question"}</button></div>`;
  $("#nx").focus({preventScroll:true});$("#fb").scrollIntoView({behavior:"smooth",block:"nearest"});
}
function next(){R.i++;renderQ()}
function finish(){
  const m=R.m,total=R.qs.length,out=R.lives<=0;let stars=0,pass=false,title,msg;
  const answered=R.marks.length;const pct=R.correct/total;
  if(m.type==="review"||m.type==="drill"){pass=true;title=m.type==="drill"?`Drill: ${Math.round(R.correct/answered*100)}%`:"Review complete";msg=m.type==="review"?(S.missed.length?`${S.missed.length} still in your deck.`:"Deck cleared."):"Missed questions went to your review deck."}
  else{
    pass=!out&&R.correct>=R.need;
    if(pass)stars=pct===1?3:pct>=(m.type==="unit"?.875:.9)?2:1;
    if(pass)R.xp+=m.type==="final"?100:50;
    if(m.type==="unit"&&pass)S.units[uk(m.sid,m.u)]=Math.max(S.units[uk(m.sid,m.u)]||0,stars);
    if(m.type==="final"&&pass){S.finals[m.sid]=Math.max(S.finals[m.sid]||0,stars);S.finalPct[m.sid]=Math.max(S.finalPct[m.sid]||0,pct)}
    title=pass?"p < .05 · Null rejected":"Fail to reject";
    msg=pass?(m.type==="final"?`Course passed. Grade: ${letter(S.finalPct[m.sid])}.`:"Unit cleared."):out?"Out of lives. Go back through the lesson and terms, then run it again.":`You needed ${R.need} correct. Go back through the lesson and terms, then run it again.`;
  }
  S.xp+=R.xp;save();
  const s=m.sid?BYID[m.sid]:null;
  const nextUnit=m.type==="unit"&&pass&&m.u<s.units.length-1;
  const finalReady=m.type==="unit"&&pass&&clearedIn(s)===s.units.length&&!S.finals[s.id];
  const again=JSON.stringify(m).replace(/"/g,"'");
  app().innerHTML=`<div class="panel result"><span class="eyebrow">${R.label}</span>
    <div class="score mono">${R.correct}/${total}</div><h2>${title}</h2>${m.type==="unit"||m.type==="final"?starsHTML(stars):""}
    <p class="muted" style="max-width:44ch">${msg}</p><p class="mono">+${R.xp} XP · best streak ${R.best}</p>
    <div class="row" style="justify-content:center">
      ${nextUnit?`<button class="btn primary" onclick="RTN.go('${s.id}/${m.u+1}')">Next unit</button>`:""}
      ${finalReady?`<button class="btn primary" onclick="RTN.start({type:'final',sid:'${s.id}'})">Take the final</button>`:""}
      <button class="btn ${nextUnit||finalReady?"":"primary"}" onclick="RTN.start(${again})">Run it again</button>
      ${s&&m.u!=null?`<button class="btn" onclick="RTN.go('${s.id}/${m.u}')">Back to unit</button>`:""}
      <button class="btn" onclick="RTN.go('${s?s.id:""}')">${s?"Course page":"All courses"}</button></div></div>`;
  top();
}

/* ---------- NPTE mock ---------- */
let N=null;
function buildNpte(n){
  const ids=[],areas=[];
  P.npte.forEach((a,ai)=>{const subs=a.courses.map(c=>BYID[c]).filter(Boolean);const pool=shuffle(poolOf(subs));const k=Math.round(n*a.share);pool.slice(0,k).forEach(id=>{ids.push(id);areas.push(ai)})});
  while(ids.length>n){ids.pop();areas.pop()}
  const order=shuffle(ids.map((_,i)=>i));
  return {qids:order.map(i=>ids[i]),areas:order.map(i=>areas[i])};
}
function renderNpte(){
  N=null;const sess=S.session&&S.session.type==="npte"?S.session:null;const H=S.npte.history||[];const last=H[H.length-1];
  app().innerHTML=`${header("npte")}
   <div><h2>NPTE mock exam</h2><p class="muted">Questions are drawn from every DPT course and weighted to approximate the FSBPT content outline by body system and non-system area. The real NPTE has 225 questions in 5 sections of 45, with 5 hours of testing time and a scheduled break after section 2, scored on a 200–800 scale with 600 to pass. Percent correct here is a readiness signal, not a scaled score. Confirm current exam details at <a href="https://www.fsbpt.org" target="_blank" rel="noopener">fsbpt.org</a>.</p></div>
   ${sess?`<div class="panel" style="border:2px solid var(--accent)"><span class="eyebrow">In progress</span><h3>${sess.kind==="full"?"Full mock":"Section practice"}: ${sess.i}/${sess.qids.length} answered</h3><div class="row"><button class="btn primary" onclick="RTN.npteResume()">Resume</button><button class="btn" id="abandon" onclick="RTN.npteAbandon()">Abandon</button></div></div>`:""}
   <div class="grid">
    <div class="panel"><span class="eyebrow">45 questions · about 60 min</span><h3>Section practice</h3><p class="muted small">One NPTE-length section of 45. Good for a weekly check-in.</p><button class="btn primary" onclick="RTN.npteStart('section')" ${sess?"disabled":""}>Start section</button></div>
    <div class="panel"><span class="eyebrow">225 questions · 5 sections · 5 hrs</span><h3>Full-length mock</h3><p class="muted small">Exam-day stamina. Progress saves after every answer, so you can stop and resume.</p><button class="btn primary" onclick="RTN.npteStart('full')" ${sess?"disabled":""}>Start full mock</button></div>
   </div>
   ${last?npteReport(last,"Last attempt"):""}
   ${H.length>1?`<div class="panel"><h3>History</h3><div class="tablewrap"><table><thead><tr><th>Date</th><th>Type</th><th class="num">Score</th></tr></thead><tbody>${H.slice().reverse().map(h=>`<tr><td class="mono">${new Date(h.date).toLocaleDateString()}</td><td>${h.kind==="full"?"Full mock":"Section"}</td><td class="num mono">${h.correct}/${h.total} (${Math.round(h.correct/h.total*100)}%)</td></tr>`).join("")}</tbody></table></div></div>`:""}`;
  top();
}
function npteReport(h,title){
  const rows=P.npte.map((a,ai)=>{const t=h.byArea[ai]||[0,0];const p=t[1]?t[0]/t[1]:0;return `<div class="arow"><span>${a.area}</span><div class="pbar"><i style="width:${p*100}%;background:${p>=.7?"var(--good)":p>=.6?"var(--gold)":"var(--bad)"}"></i></div><span class="mono small">${t[1]?Math.round(p*100)+"%":"—"}</span></div>`}).join("");
  const pct=h.correct/h.total;
  return `<div class="panel"><div class="row between"><h3>${title}</h3><span class="big mono">${Math.round(pct*100)}%</span></div>
   <p class="muted small">${h.correct}/${h.total} correct · ${h.kind==="full"?"Full mock":"Section"} · ${pct>=.7?"On track: keep sharpening your weakest area below.":pct>=.6?"Close: target the red and yellow areas.":"Build the base: go back to the courses in your weakest areas."}</p>
   <div class="areas">${rows}</div></div>`;
}
function npteStart(kind){const n=kind==="full"?225:45;const b=buildNpte(n);S.session={type:"npte",kind,qids:b.qids,areas:b.areas,marks:[],i:0,started:Date.now()};save();npteResume()}
function npteAbandon(){const b=$("#abandon");if(b.dataset.arm){S.session=null;save();renderNpte()}else{b.dataset.arm=1;b.textContent="Tap again to abandon"}}
function npteResume(){N=S.session;npteQ()}
function npteQ(){
  const s=N;if(s.i>=s.qids.length)return npteFinish();
  const q=fromId(s.qids[s.i]);if(!q){s.marks[s.i]=null;s.i++;save();return npteQ()}
  const sec=Math.floor(s.i/45)+1,secs=Math.ceil(s.qids.length/45);
  const mins=Math.floor((Date.now()-s.started)/60000);
  app().innerHTML=`<div class="hud"><button class="linkish" onclick="RTN.go('npte')">← Save &amp; exit</button><span class="eyebrow">NPTE mock · Section ${sec}/${secs}</span><span class="mono small muted">${s.i+1}/${s.qids.length} · ${mins} min</span></div>
   <div class="pbar"><i style="width:${s.i/s.qids.length*100}%;background:var(--accent)"></i></div>
   ${qCard(q,P.npte[s.areas[s.i]].area)}`;
}
function npteAnswer(k){
  const s=N;if(s.answeredAt===s.i)return;s.answeredAt=s.i;
  const id=s.qids[s.i];const q=fromId(id);const ok=reveal(k);s.marks[s.i]=ok;
  if(!ok&&!S.missed.includes(id))S.missed.push(id);
  s.i++;S.session=s;save();
  const endSec=s.i%45===0&&s.i<s.qids.length;const last=s.i>=s.qids.length;
  $("#fb").innerHTML=`<div class="fb ${ok?"":"no"}"><b>${ok?"Correct.":"Not quite."}</b> ${q.e}</div>
   <div class="row" style="margin-top:12px"><button class="btn primary" id="nx" onclick="RTN.npteNext()">${last?"See results":endSec?`${s.i===90?"Take your break, then start":"Start"} section ${s.i/45+1}`:"Next question"}</button></div>`;
  $("#nx").focus({preventScroll:true});$("#fb").scrollIntoView({behavior:"smooth",block:"nearest"});
}
function npteNext(){npteQ()}
function npteFinish(){
  const s=N;const byArea={};let correct=0,total=0;
  s.marks.forEach((m,i)=>{if(m==null)return;total++;if(m)correct++;const a=s.areas[i];byArea[a]=byArea[a]||[0,0];byArea[a][1]++;if(m)byArea[a][0]++});
  const h={kind:s.kind,date:Date.now(),correct,total,byArea};
  S.npte.history.push(h);S.xp+=correct*10;S.session=null;N=null;save();
  go("npte");
}

window.RTN={start,answer,next,finish,hw,reset,go,tab,markRead,fc,adm,admCheck,npteStart,npteResume,npteAbandon,npteNext};
load();
})();
