/* Number-question generators. A unit lists generator names in its `gen` array. */
(function(){
const rnd=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pick=a=>a[Math.floor(Math.random()*a.length)];
const r2=x=>Math.round(x*100)/100, r1=x=>Math.round(x*10)/10;
function mk(q,correct,distract,e){
  const c=String(correct);const set=new Set([c]);const out=[];
  for(const d of distract){const s=String(d);if(!set.has(s)){set.add(s);out.push(s)}if(out.length===3)break}
  let k=1;while(out.length<3){const n=parseFloat(correct);const s=isNaN(n)?c+"?":String(r2(n+k*(k%2?1.5:-1.5)));if(!set.has(s)){set.add(s);out.push(s)}k++}
  return [q,[c,...out],e];
}
window.GEN={
 mean(){const a=Array.from({length:5},()=>rnd(2,20));const s=a.reduce((x,y)=>x+y,0);const m=r1(s/5);const md=[...a].sort((x,y)=>x-y)[2];
  return mk(`Five patients rate soreness: <span class="mono">${a.join(", ")}</span>. What is the mean?`,m,[md,r1(s/4),r1(m+1.2),r1(m-0.8)],`Sum = ${s}. Mean = ${s} ÷ 5 = ${m}.`)},
 median(){const a=Array.from({length:7},()=>rnd(10,60));const s=[...a].sort((x,y)=>x-y);const md=s[3];const m=r1(a.reduce((x,y)=>x+y,0)/7);
  return mk(`Session lengths (min): <span class="mono">${a.join(", ")}</span>. What is the median?`,md,[a[3],m,s[2],s[4]],`Sorted: ${s.join(", ")}. The 4th of 7 values is ${md}.`)},
 z(){const mu=pick([30,40,50,60,100]);const sd=pick([4,5,8,10,15]);const z=pick([-2,-1.5,-1,-0.5,0.5,1,1.5,2,2.5]);const x=mu+z*sd;
  return mk(`Grip strength norms: μ = ${mu} kg, σ = ${sd} kg. A patient scores ${x} kg. What is their z-score?`,z,[-z,r2((x-mu)/(sd*sd)),z*2,r2(x/mu)],`z = (${x} − ${mu}) / ${sd} = ${z}.`)},
 pct(){const p=pick([["+1","16%","above"],["−1","16%","below"],["+2","2.5%","above"],["−2","2.5%","below"],["±1","68%","between"],["±2","95%","between"]]);
  const q=p[2]==="between"?`What percent of scores fall between z = ${p[0].replace("±","−")} and z = ${p[0].replace("±","+")}?`:`What percent of scores fall ${p[2]} z = ${p[0]}?`;
  return mk(q,p[1],["16%","2.5%","68%","95%","34%","50%"].filter(v=>v!==p[1]).sort(()=>Math.random()-.5),`Empirical rule: 68% within ±1, 95% within ±2. The tails split what's left equally.`)},
 se(){const sd=pick([6,8,10,12,15,20,24]);const n=pick([4,9,16,25,36,64,100]);const se=r2(sd/Math.sqrt(n));
  return mk(`Population SD = ${sd}, sample size n = ${n}. What is the standard error of the mean?`,se,[r2(sd/n),r2(sd/(n-1)),r2(se*2),r2(sd*Math.sqrt(n)/10)],`SE = σ / √n = ${sd} / ${Math.sqrt(n)} = ${se}.`)},
 df(){const a=rnd(10,40),b=rnd(10,40);return mk(`Independent t-test with groups of ${a} and ${b}. Degrees of freedom?`,a+b-2,[a+b,a+b-1,a-1,b-1],`df = n₁ + n₂ − 2 = ${a} + ${b} − 2 = ${a+b-2}.`)},
 r2(){const r=pick([.3,.4,.5,.6,.7,.8,.9,-.5,-.6,-.7]);const v=Math.round(r*r*100);
  return mk(`r = ${r} between hip strength and single-leg hop distance. What percent of variance in hop distance is explained?`,v+"%",[Math.round(Math.abs(r)*100)+"%",(100-v)+"%",Math.round(Math.abs(r)*50)+"%"],`r² = (${r})² = ${r2(r*r)} → ${v}%.`)},
 reg(){const b=pick([.3,.4,.5]);const age=pick([20,25,30,35,40,45,50,55,60]);const y=r1(60-b*age);
  return mk(`Predicted VO₂max = 60 − ${b} × age. Predicted VO₂max for a ${age}-year-old?`,y,[r1(60+b*age),r1(b*age),60-age,r1(y+5)],`ŷ = 60 − ${b} × ${age} = 60 − ${r1(b*age)} = ${y}.`)},
 sens(){const tp=rnd(30,90),fn=rnd(5,30),fp=rnd(5,30),tn=rnd(40,120);const which=Math.random()<.5;
  const sn=Math.round(tp/(tp+fn)*100),sp=Math.round(tn/(tn+fp)*100),ppv=Math.round(tp/(tp+fp)*100),acc=Math.round((tp+tn)/(tp+tn+fp+fn)*100);
  const q=`Special test vs. MRI: TP = ${tp}, FN = ${fn}, FP = ${fp}, TN = ${tn}. What is the ${which?"sensitivity":"specificity"}?`;
  return which?mk(q,sn+"%",[sp+"%",ppv+"%",acc+"%"],`Sensitivity = TP / (TP + FN) = ${tp} / ${tp+fn} = ${sn}%.`)
              :mk(q,sp+"%",[sn+"%",ppv+"%",acc+"%"],`Specificity = TN / (TN + FP) = ${tn} / ${tn+fp} = ${sp}%.`)}
};
})();
