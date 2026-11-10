/* Facilitator guide: builds the printable role cards and the answer notes from the same data
   the learners see (data/pp.js and data/sim-pp.js), so the guide never goes out of date. */
(function(){
  'use strict';
  const C = (window.COURSE_DATA || {}).pp, D = window.SIM_PP;
  const esc = s => String(s);
  const rc = document.getElementById('rolecards');
  if (rc && D){
    rc.innerHTML = D.roles.map(r => `<div class="rolecard"><div class="eyebrow">Role card</div><h3>${esc(r.role)}</h3>
      <p class="small muted">In the simulation: ${esc(r.name)}</p><p><b>What you care about:</b> ${esc(r.cares)}</p>
      <div class="secret"><b>What only you know</b> (read this aloud when your team reaches you on the ward):<br>“${esc(r.says)}”</div>
      <p class="small" style="margin-top:8px"><b>Why it matters:</b> ${esc(r.why)}</p></div>`).join('');
  }
  const host = document.getElementById('answerhost');
  if (!host || !C) return;
  const li = a => '<ul>' + a.map(x => '<li>' + x + '</li>').join('') + '</ul>';
  function act(a){
    const t = a.type;
    if (t === 'sort') return li(a.items.map(i => `<b>${i.t}</b> → ${a.buckets[i.b]}. <span class="muted">${i.why || ''}</span>`));
    if (t === 'tf') return li(a.items.map(i => `<b>${i.a ? 'Fact' : 'Myth'}:</b> ${i.s} <span class="muted">${i.why}</span>`));
    if (t === 'order') return '<ol>' + a.items.map(i => '<li>' + i + '</li>').join('') + '</ol>' + (a.why ? '<p class="small muted">' + a.why + '</p>' : '');
    if (t === 'match') return li(a.pairs.map(p => `<b>${p.l}</b> → ${p.r}`));
    if (t === 'cloze') { const w = []; a.text.replace(/\{\{([^}]+)\}\}/g, (m, x) => w.push(x)); return `<p>Answers in order: <b>${w.join(', ')}</b>. Distractors: ${(a.extra || []).join(', ')}.</p>`; }
    if (t === 'hunt') { const f = []; a.passage.replace(/\[\[(.+?)\|(.+?)\]\]/g, (m, x, y) => f.push(`<b>“${x}”</b> ${y}`)); return '<p>Red flags:</p>' + li(f); }
    if (t === 'mcq') return `<p>${a.q}<br><b>Answer:</b> ${a.options[a.answer]}. <span class="muted">${a.why}</span></p>`;
    if (t === 'rush') return li(a.items.map(i => `${i.t} → <b>${a.buckets[i.b]}</b>`));
    if (t === 'memory') return li(a.pairs.map(p => `<b>${p.a}</b> = ${p.b}`));
    if (t === 'recall') return li(a.cards.map(c => `<b>${c.f}</b> ${c.b}`));
    if (t === 'allocate') return li(a.categories.map(c => `<b>${c.name}:</b> ${c.ideal[0]} to ${c.ideal[1]} units. ${c.ok}`));
    if (t === 'tune') { const b = a.levels[a.best[0]]; return `<p><b>Best setting:</b> ${b.v}. ${b.fb}</p><p class="small muted">${a.why}</p>`; }
    if (t === 'scenario') return '<p>Strongest choice at each step:</p>' + li(a.steps.map(s => { const c = s.choices.filter(x => x.score === 2).map(x => x.label); return `<b>${s.text}</b><br>${c.join('<br><i>or</i> ')}`; }));
    return '';
  }
  let out = '';
  C.lessons.forEach((l, i) => {
    out += `<h3 style="margin-top:20px">Lesson ${i + 1}: ${l.title}</h3>`;
    l.activities.forEach(a => { out += `<h4>${a.title} <span class="chip">${a.type}</span></h4>` + act(a); });
  });
  out += '<h3 style="margin-top:20px">Workshop quiz</h3><ol>' + C.finalQuiz.questions.map(q => `<li>${q.q}<br><b>${q.options[q.answer]}</b>. <span class="muted">${q.why}</span></li>`).join('') + '</ol>';
  out += '<h3 style="margin-top:20px">Boss level: the board meeting</h3>' + act(C.capstone);
  if (D){
    out += '<h3 style="margin-top:20px">Virtual hospital simulation</h3>';
    out += '<h4>Success measures (the three strongest)</h4>' + li(D.measures.options.filter(o => o.good).map(o => `${o.t}. <span class="muted">${o.why}</span>`));
    out += '<h4>Interview questions</h4>' + li(D.roles.map(r => `<b>${r.role}:</b> ${r.options[r.answer]}`));
    out += `<h4>Night shift: root cause</h4><p><b>${D.night.options[D.night.answer]}.</b> ${D.night.why}</p>`;
    out += '<h4>Best two fixes</h4>' + li(D.night.fixes.options.filter(o => o.good === 2).map(o => `${o.t}. <span class="muted">${o.why}</span>`));
    out += '<h4>Conditions</h4>' + li(D.decision.conditions.map(c => `${c.kind === 'essential' ? '✅ Essential' : '❌ Harmful'}: ${c.t}${c.why ? ' <span class="muted">' + c.why + '</span>' : ''}`));
    out += '<p>A strong run recommends <b>go with conditions</b> or a focused <b>extension</b>, with all six essential conditions and neither harmful one, and scores above 85%.</p>';
  }
  host.innerHTML = out;
})();
