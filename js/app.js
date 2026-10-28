/* Reject the Null — DPT course engine */
(function(){
const $=s=>document.querySelector(s);
const app=()=>$("#app");
const rnd=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pick=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

const TRACKS=[
 {id:"prereq",name:"Prerequisites",note:"The science foundation PT programs require before admission."},
 {id:"found",name:"DPT Year 1 · Foundations",note:"Basic and movement sciences: the first year of a DPT program."},
 {id:"clinical",name:"DPT Years 2–3 · Clinical Practice",note:"Patient management across every practice area, plus professional practice."}
];
const RANKS=[[0,"Pre-PT Student"],[300,"PT Applicant"],[900,"DPT Year 1"],[2000,"DPT Year 2"],[3500,"DPT Year 3"],[5500,"Board Candidate"],[8000,"Doctor of Physical Therapy"]];

/* ---------- state ---------- */
const KEY="dpt-state-v2";
let S={xp:0,units:{},finals:{},done:{},missed:[],board:0};
try{const s=JSON.parse(localStorage.getItem(KEY)||"null");if(s)S=Object.assign(S,s);else migrate()}catch(e){}
function migrate(){ // carry over progress from the original single-course version
  try{const o=JSON.parse(localStorage.getItem("rtn-state")||"null");if(!o)return;
    S.xp=o.xp||0;Object.entries(o.stars||{}).forEach(([i,v])=>{if(v)S.units["research-statistics:"+i]=v});
    S.missed=(o.missed||[]).map(id=>"research-statistics:"+id.replace("-",":"));
    if(o.boss)S.finals["research-statistics"]=o.boss;save();}catch(e){}
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}

let SUBJ=[],BYID={};
const uk=(sid,u)=>sid+":"+u;
const clearedIn=s=>s.units.filter((_,u)=>S.units[uk(s.id,u)]>0).length;
const unitOpen=(s,u)=>u===0||S.units[uk(s.id,u-1)]>0;
const totalUnits=()=>SUBJ.reduce((n,s)=>n+s.units.length,0);
const totalCleared=()=>SUBJ.reduce((n,s)=>n+clearedIn(s),0);
const rankOf=xp=>{let i=0;RANKS.forEach((r,k)=>{if(xp>=r[0])i=k});return {name:RANKS[i][1],floor:RANKS[i][0],next:RANKS[i+1]||null}};

/* ---------- loading ---------- */
function load(){
  app().innerHTML=`<p class="loading eyebrow">Loading courses…</p>`;
  let left=window.MANIFEST.length;
  const done=()=>{if(--left>0)return;
    SUBJ=(window.SUBJECTS||[]).slice().sort((a,b)=>TRACKS.findIndex(t=>t.id===a.track)-TRACKS.findIndex(t=>t.id===b.track)||a.order-b.order);
    SUBJ.forEach(s=>BYID[s.id]=s);route();};
  window.MANIFEST.forEach(id=>{const sc=document.createElement("script");sc.src="data/"+id+".js";sc.onload=done;sc.onerror=done;document.head.appendChild(sc)});
}
function route(){const h=decodeURIComponent(location.hash.slice(1));if(BYID[h])renderSubject(BYID[h]);else renderHome()}
window.addEventListener("hashchange",route);
function go(hash){if(location.hash==="#"+hash||(!hash&&!location.hash))route();else location.hash=hash}

/* ---------- pieces ---------- */
function starsHTML(n,max=3){let s="";for(let i=0;i<max;i++)s+=i<n?"★":`<span class="off">★</span>`;return `<span class="stars" aria-label="${n} of ${max} stars">${s}</span>`}
function curveSVG(frac){
  const W=600,H=170,pad=24,base=140;const pts=[];
  for(let i=0;i<=120;i++){const z=-3.2+6.4*i/120;pts.push([pad+(W-2*pad)*i/120,base-110*Math.exp(-z*z/2)])}
  const line=pts.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" ");
  const cut=pad+(W-2*pad)*frac;
  let ticks="";[-3,-2,-1,0,1,2,3].forEach(z=>{const x=pad+(W-2*pad)*(z+3.2)/6.4;ticks+=`<line x1="${x}" y1="${base}" x2="${x}" y2="${base+5}" stroke="var(--muted)"/><text x="${x}" y="${base+20}" text-anchor="middle" font-size="12" font-family="IBM Plex Mono, monospace" fill="var(--muted)">${z>0?"+"+z:z}σ</text>`});
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Program progress shown as area under a normal curve">
   <defs><clipPath id="cp"><rect x="0" y="0" width="${cut}" height="${H}"/></clipPath></defs>
   <path d="${line} L ${W-pad} ${base} L ${pad} ${base} Z" fill="var(--fill)" clip-path="url(#cp)"/>
   <path d="${line}" fill="none" stroke="var(--ink)" stroke-width="2"/>
   <line x1="${pad}" y1="${base}" x2="${W-pad}" y2="${base}" stroke="var(--line)" stroke-width="1.5"/>
   ${frac>0&&frac<1?`<line x1="${cut}" y1="20" x2="${cut}" y2="${base}" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 3"/>`:""}
   ${ticks}</svg>`;
}
function header(){
  const rk=rankOf(S.xp);const pct=rk.next?Math.min(100,(S.xp-rk.floor)/(rk.next[0]-rk.floor)*100):100;
  return `<div class="top"><div><div class="eyebrow">Doctor of Physical Therapy · study program</div><h1><a href="#" style="text-decoration:none">Reject the Null</a></h1></div>
   <div class="rank"><span class="eyebrow">Rank</span><b>${rk.name}</b><span class="mono muted" style="font-size:.8rem">${S.xp} XP${rk.next?" · "+(rk.next[0]-S.xp)+" to "+rk.next[1]:""}</span><div class="xpbar"><i style="width:${pct}%"></i></div></div></div>`;
}

/* ---------- home ---------- */
function renderHome(){
  const tu=totalUnits(),tc=totalCleared(),frac=tu?tc/tu:0;
  const finals=Object.values(S.finals).filter(Boolean).length;
  const assigns=Object.values(S.done).filter(Boolean).length;
  const tracks=TRACKS.map(t=>{
    const list=SUBJ.filter(s=>s.track===t.id);if(!list.length)return"";
    const cr=list.reduce((n,s)=>n+s.credits,0);
    return `<section class="track t-${t.id}"><div class="track-h"><h2>${t.name}</h2><span class="mono muted" style="font-size:.8rem">${list.length} courses · ${cr} cr</span></div>
     <p class="muted" style="font-size:.9rem">${t.note}</p>
     <div class="grid">${list.map(s=>{const c=clearedIn(s),n=s.units.length;return `
      <button class="subj t-${t.id}" onclick="location.hash='${s.id}'">
        <span class="code">${s.code} · ${s.credits} cr</span><h3>${s.title}</h3>
        <div class="pbar"><i style="width:${c/n*100}%"></i></div>
        <span class="meta"><span>${c}/${n} units</span><span>${S.finals[s.id]?"Final ✓":"Final —"}</span></span>
      </button>`}).join("")}</div></section>`}).join("");
  const dptCleared=SUBJ.filter(s=>s.track!=="prereq").every(s=>S.finals[s.id]);
  app().innerHTML=`${header()}
   <div class="panel curve"><div class="cap"><span class="eyebrow">Area under the curve = program complete</span><span class="big mono">${Math.round(frac*100)}%</span></div>${curveSVG(frac)}
    <div class="stats3"><div><span class="eyebrow">Units</span><b>${tc}/${tu}</b></div><div><span class="eyebrow">Finals</span><b>${finals}/${SUBJ.length}</b></div><div><span class="eyebrow">Coursework</span><b>${assigns}/${tu}</b></div></div></div>
   ${S.missed.length?`<div class="panel"><div class="row between"><div><h3>Review deck</h3><p class="muted" style="font-size:.9rem">${S.missed.length} missed question${S.missed.length>1?"s":""} across all courses. Answer them right to clear them.</p></div><button class="btn primary" onclick="RTN.start({type:'review'})">Review</button></div></div>`:""}
   ${tracks}
   <section class="track"><div class="track-h" style="--tc:var(--accent)"><h2>Capstone</h2></div>
    <div class="panel" style="border:2px solid var(--accent)"><div class="row between"><span class="eyebrow">NPTE-style board prep</span>${starsHTML(S.board)}</div>
     <h3>Board Exam Simulator</h3><p class="muted" style="font-size:.92rem">25 mixed questions from every DPT Foundations and Clinical course. 5 lives, 18 correct to pass. Open anytime; ${dptCleared?"you've passed every DPT final, so this is your real dress rehearsal.":"it gets fair once you've worked through the DPT courses."}</p>
     <div class="row"><button class="btn primary" onclick="RTN.start({type:'board'})">Sit the exam</button></div></div></section>
   <div class="row between"><span class="toast">Progress saves on this device.</span><button class="linkish" id="rst" onclick="RTN.reset()">Reset all progress</button></div>`;
  window.scrollTo(0,0);
}
let resetArm=false;
function reset(){if(!resetArm){resetArm=true;$("#rst").textContent="Tap again to erase everything";return}
  S={xp:0,units:{},finals:{},done:{},missed:[],board:0};try{localStorage.removeItem("rtn-state")}catch(e){}save();resetArm=false;renderHome()}

/* ---------- subject ---------- */
function renderSubject(s){
  const c=clearedIn(s),n=s.units.length;const allDone=c===n;
  const nodes=s.units.map((u,i)=>{const st=S.units[uk(s.id,i)]||0,open=unitOpen(s,i),hw=S.done[uk(s.id,i)];
    return `<div class="node ${st?"done":open?"open":"locked"}"><div class="rail"><div class="dot">${st?"✓":i+1}</div><div class="stem"></div></div>
     <div class="ucard"><div class="row between"><span class="eyebrow">Unit ${i+1}</span>${starsHTML(st)}</div>
      <h3>${u.t}</h3><p>${u.sub}</p>
      <div class="row"><span class="chip ${hw?"ok":""}">${hw?"✓ ":""}Coursework: ${esc(u.assignment.title)}</span></div>
      <div class="row"><button class="btn primary" ${open?"":"disabled"} onclick="RTN.start({type:'unit',sid:'${s.id}',u:${i}})">${st?"Replay":"Start"}</button>
       <button class="btn" onclick="RTN.guide('${s.id}',${i})">Study guide</button></div></div></div>`}).join("");
  const fin=S.finals[s.id]||0;
  app().innerHTML=`${header()}
   <div class="row"><button class="linkish" onclick="RTN.go('')">← All courses</button></div>
   <div class="panel syl t-${s.track}" style="border-top:3px solid var(--tc)">
    <span class="eyebrow" style="color:var(--tc)">${s.code} · ${s.credits} credit hours · ${TRACKS.find(t=>t.id===s.track).name}</span>
    <h2>${s.title}</h2><p>${s.desc}</p>
    <div class="pbar"><i style="width:${c/n*100}%"></i></div><span class="mono muted" style="font-size:.8rem">${c}/${n} units cleared</span>
    <details><summary>Learning objectives</summary><ul>${s.objectives.map(o=>`<li>${o}</li>`).join("")}</ul></details>
   </div>
   <div class="path">${nodes}
    <div class="node boss ${fin?"done":allDone?"open":"locked"}"><div class="rail"><div class="dot">${fin?"✓":"F"}</div><div class="stem"></div></div>
     <div class="ucard"><div class="row between"><span class="eyebrow">Final exam</span>${starsHTML(fin)}</div>
      <h3>${s.title} Final</h3><p>15 questions from every unit. 4 lives, 12 correct to pass. Unlocks when all units are cleared.</p>
      <div class="row"><button class="btn primary" ${allDone?"":"disabled"} onclick="RTN.start({type:'final',sid:'${s.id}'})">Take the final</button></div></div></div>
   </div>
   <span class="toast">Clear a unit with 6 of 8 correct before you run out of 3 lives. Units unlock in order.</span>`;
  window.scrollTo(0,0);
}

function renderGuide(sid,i){
  const s=BYID[sid],u=s.units[i],k=uk(sid,i),a=u.assignment;
  app().innerHTML=`<div class="row"><button class="linkish" onclick="RTN.go('${sid}')">← ${s.title}</button></div>
   <div><span class="eyebrow">${s.code} · Unit ${i+1} · Study guide</span><h2>${u.t}</h2><p class="muted">${u.sub}</p></div>
   <div class="panel guide"><ul>${u.guide.map(g=>`<li>${g}</li>`).join("")}</ul></div>
   <div class="assign"><span class="lbl">Coursework</span><h3>${esc(a.title)}</h3><p>${esc(a.task)}</p>
    <p class="muted" style="font-size:.9rem"><b>Deliverable:</b> ${esc(a.deliverable)}</p>
    <label class="check"><input type="checkbox" id="hw-${sid}-${i}" ${S.done[k]?"checked":""} onchange="RTN.hw('${sid}',${i},this.checked)"> Mark complete <span class="mono muted" style="font-weight:400;font-size:.8rem">+25 XP</span></label></div>
   <div class="row"><button class="btn primary" ${unitOpen(s,i)?"":"disabled"} onclick="RTN.start({type:'unit',sid:'${sid}',u:${i}})">${unitOpen(s,i)?"Start the round":"Clear the previous unit first"}</button><button class="btn" onclick="RTN.go('${sid}')">Back to course</button></div>`;
  window.scrollTo(0,0);
}
function hw(sid,i,on){const k=uk(sid,i);if(on&&!S.done[k]){S.done[k]=true;S.xp+=25}else if(!on&&S.done[k]){S.done[k]=false;S.xp=Math.max(0,S.xp-25)}save()}

/* ---------- rounds ---------- */
let R=null;
function bankQ(s,u,k){const [q,o,e]=s.units[u].qs[k];return {q,o,e,id:`${s.id}:${u}:${k}`,label:s.title+" · "+s.units[u].t}}
function genQ(s,u,name){const [q,o,e]=window.GEN[name]();return {q,o,e,id:null,label:s.title+" · "+s.units[u].t}}
function fromId(id){const p=id.split(":");const s=BYID[p[0]];if(!s)return null;const u=+p[1],k=+p[2];if(!s.units[u]||!s.units[u].qs[k])return null;return bankQ(s,u,k)}
function sampleFrom(subjects,n,genRate){
  const pool=[];subjects.forEach(s=>s.units.forEach((u,ui)=>u.qs.forEach((_,k)=>pool.push([s,ui,k]))));
  const picks=shuffle(pool).slice(0,n).map(([s,ui,k])=>{const g=s.units[ui].gen||[];return g.length&&Math.random()<genRate?genQ(s,ui,pick(g)):bankQ(s,ui,k)});
  return picks;
}
function start(m){
  let qs,label,lives=3,need,mult=1,sub="";
  if(m.type==="unit"){const s=BYID[m.sid],u=s.units[m.u];const g=u.gen||[];const ng=Math.min(g.length,3);
    qs=shuffle([...shuffle(u.qs.map((_,k)=>k)).slice(0,8-ng).map(k=>bankQ(s,m.u,k)),...shuffle(g).slice(0,ng).map(x=>genQ(s,m.u,x))]);
    label=`${s.code} · Unit ${m.u+1}`;sub=u.t;need=6;}
  else if(m.type==="final"){const s=BYID[m.sid];qs=sampleFrom([s],15,.3);label=`${s.code} · Final exam`;sub=s.title;lives=4;need=12;mult=2;}
  else if(m.type==="board"){qs=sampleFrom(SUBJ.filter(s=>s.track!=="prereq"),25,0);label="Board Exam Simulator";sub="Mixed DPT content";lives=5;need=18;mult=2;}
  else{qs=shuffle(S.missed).map(fromId).filter(Boolean).slice(0,10);if(!qs.length){S.missed=[];save();return renderHome()}label="Review deck";sub="Your missed questions";lives=99;need=0;}
  if(!qs.length)return renderHome();
  R={m,qs,label,sub,i:0,lives,maxLives:lives,need,mult,correct:0,streak:0,best:0,xp:0,marks:[]};
  renderQ();
}
function renderQ(){
  const q=R.qs[R.i];R.order=shuffle(q.o.map((t,k)=>({t,ok:k===0})));
  const pips=R.qs.map((_,k)=>`<i class="${k<R.i?(R.marks[k]?"ok":"no"):k===R.i?"cur":""}"></i>`).join("");
  const lives=R.maxLives<20?`<div class="lives" aria-label="${R.lives} lives left">${Array.from({length:R.maxLives},(_,k)=>`<i class="${k<R.lives?"":"lost"}"></i>`).join("")}</div>`:"";
  const back=R.m.sid?R.m.sid:"";
  const mixed=R.m.type!=="unit";
  app().innerHTML=`
   <div class="hud"><button class="linkish" onclick="RTN.go('${back}')">← Quit</button><span class="eyebrow">${R.label}</span>${lives}</div>
   <div class="hud"><div class="pips">${pips}</div><span class="streak">${R.streak>1?"Streak ×"+R.streak:""}</span></div>
   <div class="panel qcard">${mixed?`<span class="eyebrow">${q.label}</span>`:`<span class="eyebrow">${R.sub}</span>`}<div class="qtext">${q.q}</div>
     <div class="opts">${R.order.map((o,k)=>`<button class="opt" id="o${k}" onclick="RTN.answer(${k})"><span>${"ABCD"[k]}</span><span>${o.t}</span></button>`).join("")}</div>
     <div id="fb"></div></div>`;
}
function answer(k){
  if(R.answered===R.i)return;R.answered=R.i;
  const q=R.qs[R.i];const ok=R.order[k].ok;
  R.order.forEach((o,j)=>{const b=$("#o"+j);b.disabled=true;if(o.ok)b.classList.add("right");else if(j===k)b.classList.add("wrong")});
  R.marks[R.i]=ok;
  if(ok){R.correct++;R.streak++;R.best=Math.max(R.best,R.streak);R.xp+=(10+Math.min(10,2*(R.streak-1)))*R.mult;
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
  if(m.type==="review"){pass=true;title="Review complete";msg=S.missed.length?`${S.missed.length} still in your deck.`:"Deck cleared."}
  else{
    pass=!out&&R.correct>=R.need;const pctScore=R.correct/total;
    if(pass)stars=pctScore===1?3:pctScore>=(m.type==="unit"?.875:.85)?2:1;
    if(pass)R.xp+=50*R.mult;
    if(m.type==="unit"&&pass)S.units[uk(m.sid,m.u)]=Math.max(S.units[uk(m.sid,m.u)]||0,stars);
    if(m.type==="final"&&pass)S.finals[m.sid]=Math.max(S.finals[m.sid]||0,stars);
    if(m.type==="board"&&pass)S.board=Math.max(S.board,stars);
    const label={unit:"Unit cleared.",final:"Course passed.",board:"You'd pass the boards today."}[m.type];
    title=pass?"p < .05 · Null rejected":"Fail to reject";
    msg=pass?label:out?"Out of lives. Review the study guide and run it again.":`You needed ${R.need} correct. Review the study guide and run it again.`;
  }
  S.xp+=R.xp;save();
  const s=m.sid?BYID[m.sid]:null;
  const nextUnit=m.type==="unit"&&pass&&m.u<s.units.length-1;
  const finalReady=m.type==="unit"&&pass&&m.u===s.units.length-1;
  const again=JSON.stringify(m).replace(/"/g,"'");
  app().innerHTML=`<div class="panel result"><span class="eyebrow">${R.label}</span>
    <div class="score mono">${R.correct}/${total}</div><h2>${title}</h2>${m.type!=="review"?starsHTML(stars):""}
    <p class="muted" style="max-width:44ch">${msg}</p>
    <p class="mono">+${R.xp} XP · best streak ${R.best}</p>
    <div class="row" style="justify-content:center">
      ${nextUnit?`<button class="btn primary" onclick="RTN.guide('${s.id}',${m.u+1})">Next unit</button>`:""}
      ${finalReady?`<button class="btn primary" onclick="RTN.start({type:'final',sid:'${s.id}'})">Take the final</button>`:""}
      <button class="btn ${nextUnit||finalReady?"":"primary"}" onclick="RTN.start(${again})">Run it again</button>
      ${m.type==="unit"&&!pass?`<button class="btn" onclick="RTN.guide('${s.id}',${m.u})">Study guide</button>`:""}
      <button class="btn" onclick="RTN.go('${s?s.id:""}')">${s?"Course page":"All courses"}</button></div></div>`;
  window.scrollTo(0,0);
}

window.RTN={start,answer,next,finish,guide:renderGuide,hw,reset,go};
load();
})();
