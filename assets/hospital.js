/* Virtual hospital simulation (Three.js r128 + scenes.js kit).
   A 3D ward the learner can turn and zoom, eight members of staff to question, a night shift
   played in fast-forward, then a decision whose consequences are shown "six months later".
   Content comes from window.SIM_PP (data/sim-pp.js). Progress is kept in this browser only. */
(function(){
  'use strict';
  const D = window.SIM_PP, K = window.Scenes && Scenes._kit;
  const KEY = 'saih_sim_pp_v1';
  function h(tag, a){ const e = document.createElement(tag); a = a || {};
    Object.keys(a).forEach(k => { const v = a[k]; if (k === 'class') e.className = v; else if (k === 'html') e.innerHTML = v;
      else if (k.indexOf('on') === 0 && typeof v === 'function') e.addEventListener(k.slice(2), v); else if (v === true) e.setAttribute(k, ''); else if (v !== false && v != null) e.setAttribute(k, v); });
    for (let i = 2; i < arguments.length; i++){ const c = arguments[i]; if (c == null || c === false) continue; (Array.isArray(c) ? c : [c]).forEach(x => { if (x != null && x !== false) e.append(x.nodeType ? x : document.createTextNode(String(x))); }); }
    return e; }
  const clear = n => { while (n.firstChild) n.removeChild(n.firstChild); return n; };
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random()*(i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const clamp = v => Math.max(0, Math.min(100, Math.round(v)));
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  function load(){ try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch(e){ return {}; } }
  function save(o){ try { localStorage.setItem(KEY, JSON.stringify(o)); } catch(e){} }

  /* ---------------- state ---------------- */
  let S;
  function fresh(){ S = { phase: 0, measures: [], talked: {}, right: 0, rootOK: null, fixes: [], option: null, conds: [] }; }
  fresh();

  /* ---------------- 3D world ---------------- */
  const W = { ok: false };
  function world(stage){
    if (!window.THREE || !K) return;
    try {
      const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); renderer.setClearColor(0x0A1222, 1);
      stage.prepend(renderer.domElement);
      const scene = new THREE.Scene(); scene.fog = new THREE.Fog(0x0A1222, 18, 40);
      const camera = new THREE.PerspectiveCamera(45, 16/9, 0.1, 100);
      const amb = new THREE.AmbientLight(0x8fb4ff, 0.6); scene.add(amb);
      const sun = new THREE.DirectionalLight(0xffffff, 0.95); sun.position.set(5, 10, 7); scene.add(sun);
      const lamp = new THREE.PointLight(0xfff1c1, 0.0, 9); lamp.position.set(0, 2.2, 0.3); scene.add(lamp);
      const ward = K.buildWard({ scene }, 0, 0, 1);
      // walls (low, so the camera can see in)
      const wm = new THREE.MeshStandardMaterial({ color: 0x334155, transparent: true, opacity: 0.55 });
      [[0, -3.55, 11, 0.1], [0, 3.55, 11, 0.1], [-5.55, 0, 0.1, 7.2], [5.55, 0, 0.1, 7.2]].forEach(w => { const m = new THREE.Mesh(new THREE.BoxGeometry(w[2], 0.8, w[3]), wm); m.position.set(w[0], 0.4, w[1]); ward.W.add(m); });
      // bed numbers
      ward.beds.forEach((b, i) => { const l = K.label('Bed ' + (i + 1), { scale: 0.3, border: 'rgba(148,163,184,.6)' }); const v = new THREE.Vector3(); b.getWorldPosition(v); l.position.set(v.x, -0.35, v.z + (i < 3 ? -1.25 : 1.25)); scene.add(l); });
      // the separate alert screen
      const scr = K.screenTex(); const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.95), new THREE.MeshBasicMaterial({ map: scr.t }));
      screen.position.set(0, 1.45, 0.05); ward.W.add(screen); scr.draw('0', 'alerts waiting', '#14532d');
      const sl = K.label('Separate alert screen', { scale: 0.32, border: K.COL.amber }); sl.position.set(0, 1.0, 0.1); scene.add(sl);
      // night nurses
      const nurses = [K.figure('cyan', 0.95), K.figure('cyan', 0.95)]; nurses[0].position.set(-0.6, 0.04, 0.8); nurses[1].position.set(0.6, 0.04, 0.8); nurses.forEach(n => { n.visible = false; ward.W.add(n); });
      // the eight people
      const people = D.roles.map(r => {
        const f = K.figure(r.c); f.position.set(r.pos[0], 0.04, r.pos[1]); f.userData.role = r.id; ward.W.add(f);
        const tag = K.label(r.role, { scale: 0.3, border: K.COL[r.c] || K.COL.cyan }); scene.add(tag);
        const mark = K.label('?', { scale: 0.42, border: K.COL.amber, color: '#FBBF24' }); scene.add(mark);
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.04, 8, 36), new THREE.MeshBasicMaterial({ color: 0xFBBF24, transparent: true, opacity: 0.85 }));
        ring.rotation.x = Math.PI/2; ring.position.y = 0.06; f.add(ring);
        return { r, f, tag, mark, ring };
      });
      const ghosts = [[-13, -10], [0, -12], [13, -10]].map(p => { const g = K.buildWard({ scene }, p[0], p[1], 0.7); g.W.visible = false; return g; });
      // camera control: drag to turn, wheel or pinch to zoom
      const tgt = new THREE.Vector3(0, -1.2, 0); let th = 0.0, ph = 0.95, rad = 13.5, drag = null, moved = 0, auto = true;
      function place(){ camera.position.set(tgt.x + rad*Math.sin(ph)*Math.sin(th), tgt.y + rad*Math.cos(ph), tgt.z + rad*Math.sin(ph)*Math.cos(th)); camera.lookAt(tgt); }
      const el = renderer.domElement; el.style.touchAction = 'none';
      const pts = new Map();
      el.addEventListener('pointerdown', e => { pts.set(e.pointerId, [e.clientX, e.clientY]); drag = [e.clientX, e.clientY]; moved = 0; auto = false; el.setPointerCapture(e.pointerId); });
      el.addEventListener('pointermove', e => {
        if (pts.has(e.pointerId) && pts.size === 2){ const prev = [...pts.values()]; pts.set(e.pointerId, [e.clientX, e.clientY]); const now = [...pts.values()];
          const d0 = Math.hypot(prev[0][0]-prev[1][0], prev[0][1]-prev[1][1]), d1 = Math.hypot(now[0][0]-now[1][0], now[0][1]-now[1][1]); rad = Math.max(7, Math.min(20, rad*(d0/(d1||1)))); moved += 10; return; }
        if (drag){ const dx = e.clientX - drag[0], dy = e.clientY - drag[1]; moved += Math.abs(dx) + Math.abs(dy); th -= dx*0.006; ph = Math.max(0.35, Math.min(1.35, ph - dy*0.004)); drag = [e.clientX, e.clientY]; pts.set(e.pointerId, drag); }
        else hover(e); });
      const up = e => { pts.delete(e.pointerId); if (drag && moved < 6) pick(e); drag = null; };
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', e => { pts.delete(e.pointerId); drag = null; });
      el.addEventListener('wheel', e => { e.preventDefault(); rad = Math.max(7, Math.min(20, rad + Math.sign(e.deltaY)*0.8)); auto = false; }, { passive: false });
      const ray = new THREE.Raycaster(), mv = new THREE.Vector2();
      function hit(e){ const r = el.getBoundingClientRect(); mv.set(((e.clientX - r.left)/r.width)*2 - 1, -((e.clientY - r.top)/r.height)*2 + 1); ray.setFromCamera(mv, camera);
        const xs = ray.intersectObjects(people.map(p => p.f), true); if (!xs.length) return null; let o = xs[0].object; while (o && !o.userData.role) o = o.parent; return o ? o.userData.role : null; }
      function hover(e){ el.style.cursor = (W.clickable && hit(e)) ? 'pointer' : 'grab'; }
      function pick(e){ if (!W.clickable) return; const id = hit(e); if (id && W.onPick) W.onPick(id); }
      // animation
      let night = 0, nightGoal = 0, last = performance.now(), running = true, ghostOn = false, outcomeGood = null;
      const tmp = new THREE.Vector3();
      function frame(now){
        if (!running) return; const dt = Math.min(0.05, (now - last)/1000); last = now;
        if (auto && !reduced()) th += dt*0.06;
        place();
        night += (nightGoal - night)*Math.min(1, dt*1.5);
        amb.intensity = 0.6 - night*0.42; sun.intensity = 0.95 - night*0.8; lamp.intensity = night*1.2;
        renderer.setClearColor(new THREE.Color(0x0A1222).lerp(new THREE.Color(0x03060d), night), 1);
        people.forEach(p => { p.f.getWorldPosition(tmp);
          p.tag.position.set(tmp.x, tmp.y + 1.55, tmp.z); p.mark.position.set(tmp.x, tmp.y + 2.05, tmp.z);
          const done = !!S.talked[p.r.id];
          p.mark.visible = W.clickable && !done; p.ring.visible = W.clickable && !done; p.f.visible = !W.nightMode; p.tag.visible = !W.nightMode;
          if (p.ring.visible && !reduced()) p.ring.scale.setScalar(1 + 0.12*Math.sin(now/220));
          p.f.userData.mat.emissiveIntensity = done ? 0.08 : 0.3; });
        nurses.forEach(n => n.visible = !!W.nightMode);
        if (W.nurseGoal) nurses.forEach((n, i) => { const g = W.nurseGoal[i]; n.position.x += (g[0] - n.position.x)*Math.min(1, dt*1.2); n.position.z += (g[1] - n.position.z)*Math.min(1, dt*1.2); });
        ward.beds.forEach((b, i) => { const L = b.userData.light; let c = '#4ADE80', pulse = 0;
          if (W.nightMode && W.hour != null){ const hr = W.hour; if ((Math.floor(now/700) + i*2) % 5 < 2 && hr >= 21) { c = '#FBBF24'; pulse = 1; }
            if (i === 4 && hr >= 2 && hr < 5.5){ c = '#FBBF24'; pulse = 1; } if (i === 4 && hr >= 3 && hr < 5.5) c = '#F87171'; if (i === 4 && hr >= 5.5) { c = '#94A3B8'; pulse = 0; } }
          if (outcomeGood != null) c = outcomeGood ? '#4ADE80' : (i % 2 ? '#FBBF24' : '#4ADE80');
          L.material.color.lerp(new THREE.Color(c), Math.min(1, dt*4)); L.material.emissive.lerp(new THREE.Color(c), Math.min(1, dt*4)); L.material.emissiveIntensity = 0.6 + pulse*0.4*Math.abs(Math.sin(now/180)); });
        ghosts.forEach(g => g.W.visible = ghostOn);
        renderer.render(scene, camera); requestAnimationFrame(frame);
      }
      const ro = new ResizeObserver(() => { const w = stage.clientWidth, hh = stage.clientHeight; renderer.setSize(w, hh, false); camera.aspect = w/hh; camera.updateProjectionMatrix(); }); ro.observe(stage);
      requestAnimationFrame(frame);
      Object.assign(W, { ok: true, scr, setNight(v){ nightGoal = v; }, setGhosts(v){ ghostOn = v; }, setOutcome(v){ outcomeGood = v; }, focus(x, z){ tgt.set(x, -1.2, z); },
        resetView(){ th = 0; ph = 0.95; rad = 13.5; tgt.set(0, -1.2, 0); auto = true; }, stop(){ running = false; ro.disconnect(); } });
    } catch(e){ console.error(e); }
  }

  /* ---------------- page ---------------- */
  let stage, hud, panel, chipsHost;
  const PHASES = ['Briefing', 'Success measures', 'Question the team', 'Night shift', 'Your decision', 'Six months later'];
  function drawHud(extra){
    clear(hud);
    hud.append(h('span', { class: 'hchip' }, `Stage ${S.phase + 1} of ${PHASES.length}: ${PHASES[S.phase]}`));
    if (S.phase >= 2) hud.append(h('span', { class: 'hchip' }, `👥 Interviews ${Object.keys(S.talked).length} / ${D.roles.length}`));
    if (extra) hud.append(h('span', { class: 'hchip big' }, extra));
  }
  function stepper(){ return h('div', { class: 'simsteps' }, PHASES.map((p, i) => h('span', { class: i < S.phase ? 'ok' : i === S.phase ? 'on' : '' }, (i < S.phase ? '✓ ' : '') + p))); }
  function go(n){ S.phase = n; W.clickable = (n === 2); W.nightMode = (n === 3); drawHud(); clear(panel); panel.append(stepper()); [brief, measures, investigate, nightShift, decide, outcome][n](); if (n) panel.scrollIntoView({ block: 'start', behavior: reduced() ? 'auto' : 'smooth' }); }

  /* 1. briefing */
  function brief(){
    const t = h('table', { class: 't' }, h('tbody', {}, D.results.map(r => h('tr', {}, h('td', {}, h('b', {}, r[0])), h('td', {}, r[1])))));
    const best = load();
    panel.append(h('div', { class: 'card' }, h('h2', {}, 'Your briefing'), h('p', { html: D.brief }),
      h('h3', {}, 'The pilot results pack'), h('div', { class: 'tablewrap' }, t),
      h('p', { class: 'muted small' }, 'Turn the ward by dragging it, and zoom with the mouse wheel or two fingers. This is a made-up case and its figures are illustrative.'),
      best.best != null ? h('p', { class: 'chip' }, `Your best result so far: ${best.best}%`) : null,
      h('button', { class: 'btn', onclick: () => go(1) }, 'Start the simulation →')));
  }

  /* 2. success measures */
  function measures(){
    const M = D.measures, sel = new Set(), card = h('div', { class: 'card' }, h('h2', {}, 'Agree what success means'), h('p', { html: M.intro }));
    const list = h('div'), out = h('div'), btn = h('button', { class: 'btn', disabled: true }, 'Lock in these measures');
    const opts = shuffle(M.options.map((o, i) => i));
    function draw(){ clear(list); opts.forEach(i => { const o = M.options[i]; list.append(h('button', { class: 'opt' + (sel.has(i) ? ' sel' : ''), 'aria-pressed': String(sel.has(i)), onclick: () => { if (btn.dataset.done) return; sel.has(i) ? sel.delete(i) : (sel.size < M.pick && sel.add(i)); draw(); } }, (sel.has(i) ? '☑ ' : '☐ ') + o.t)); }); btn.disabled = sel.size !== M.pick || !!btn.dataset.done; }
    btn.onclick = () => { btn.dataset.done = 1; btn.disabled = true; S.measures = [...sel]; const good = S.measures.filter(i => M.options[i].good).length;
      const ul = h('ul', { class: 'whylist' }, M.options.map(o => h('li', { html: (o.good ? '🟢 ' : '⚪ ') + '<b>' + o.t + '.</b> ' + o.why })));
      out.append(h('div', { class: 'fb ' + (good === 3 ? 'good' : good === 2 ? 'mid' : 'bad') }, h('b', {}, `You chose ${good} of the 3 strongest measures.`), ul),
        h('button', { class: 'btn', style: 'margin-top:12px', onclick: () => go(2) }, 'Go onto the ward →')); draw(); };
    draw(); card.append(list, btn, out); panel.append(card);
  }

  /* 3. investigate: click people in 3D or use the buttons */
  function investigate(){
    const card = h('div', { class: 'card' }, h('h2', {}, 'Question the team'),
      h('p', {}, `Eight people each know one thing that nobody else does. Click a person on the ward (look for the pulsing rings), or use the buttons below. Talk to at least ${D.minInterviews} before the night shift; all eight is better.`));
    chipsHost = h('div', { class: 'row', role: 'list' }); const talk = h('div'), next = h('div', { style: 'margin-top:12px' });
    card.append(chipsHost, talk, next); panel.append(card);
    function chips(){ clear(chipsHost); D.roles.forEach(r => chipsHost.append(h('button', { class: 'btn ' + (S.talked[r.id] ? 'ghost' : 'alt'), role: 'listitem', onclick: () => open(r.id) }, (S.talked[r.id] ? '✓ ' : '💬 ') + r.role)));
      clear(next); const n = Object.keys(S.talked).length; drawHud();
      if (n >= D.minInterviews) next.append(h('button', { class: 'btn', onclick: () => go(3) }, n < D.roles.length ? `Start the night shift (${D.roles.length - n} not yet heard) →` : 'Everyone heard. Start the night shift →')); }
    function open(id){
      const r = D.roles.find(x => x.id === id); clear(talk);
      const box = h('div', { class: 'talk' }, h('div', { class: 'who' }, h('b', {}, r.name), h('span', { class: 'muted' }, ' · ' + r.role)),
        h('p', { class: 'small muted' }, 'Cares about: ' + r.cares), h('blockquote', {}, '“' + r.says + '”'));
      if (!S.talked[id]){
        box.append(h('p', {}, h('b', {}, r.q)));
        const fb = h('div'); const btns = [];
        shuffle(r.options.map((o, i) => i)).forEach(i => { const b = h('button', { class: 'opt', onclick: () => {
          if (S.talked[id]) return; const ok = i === r.answer; S.talked[id] = ok ? 2 : 1; if (ok) S.right++;
          btns.forEach(x => x.disabled = true); b.classList.add(ok ? 'right' : 'wrong'); if (!ok) btns.forEach(x => { if (x.dataset.i == r.answer) x.classList.add('right'); });
          fb.append(h('div', { class: 'fb ' + (ok ? 'good' : 'bad'), html: '<b>' + (ok ? 'Good insight. ' : 'Not quite. ') + '</b>' + r.why })); chips(); } }, r.options[i]); b.dataset.i = i; btns.push(b); box.append(b); });
        box.append(fb);
      } else box.append(h('p', { class: 'small muted' }, 'You have already spoken to ' + r.name.split(' ')[0] + '.'));
      talk.append(box); if (W.ok) W.focus(r.pos[0]*0.6, r.pos[1]*0.6);
      talk.scrollIntoView({ block: 'nearest', behavior: reduced() ? 'auto' : 'smooth' });
    }
    W.onPick = open; chips();
  }

  /* 4. night shift in fast-forward */
  function nightShift(){
    const N = D.night, card = h('div', { class: 'card' }, h('h2', {}, 'Night shift, in fast-forward'), h('p', {}, 'Watch the ward from 20:00 to 08:00. Keep an eye on bed 5 and on the alert screen.'));
    const cap = h('div', { class: 'nightcap', 'aria-live': 'polite' }), btn = h('button', { class: 'btn' }, '▶ Play the night shift'), after = h('div');
    card.append(btn, cap, after); panel.append(card);
    if (W.ok){ W.resetView(); W.hour = 19; W.scr.draw('0', 'alerts waiting', '#14532d'); }
    btn.onclick = () => {
      btn.disabled = true; if (W.ok) W.setNight(1);
      const total = reduced() ? 7000 : 21000, t0 = performance.now(); let ci = -1;
      (function tick(){
        const f = Math.min(1, (performance.now() - t0)/total), hr = 20 + f*12, shown = hr % 24;
        W.hour = shown; W.nurseGoal = shown >= 23 || shown < 5.5 ? [[-3.6, -1.3], [3.6, 1.3]] : shown >= 5.5 && shown < 8 ? [[3.6, -1.3], [0.6, 0.8]] : [[-0.6, 0.8], [0.6, 0.8]];
        const unread = Math.round(Math.min(37, Math.max(0, (hr - 20.5)*3.4)));
        if (W.ok) W.scr.draw(String(unread), 'unread alerts', unread > 20 ? '#991b1b' : unread > 5 ? '#92400e' : '#14532d');
        const clock = `${String(Math.floor(shown)).padStart(2, '0')}:${String(Math.floor((shown % 1)*60)).padStart(2, '0')}`; drawHud('🕒 ' + clock);
        const idx = N.captions.reduce((a, c, i) => ((c[0] < 20 ? c[0] + 24 : c[0]) <= hr ? i : a), -1);
        if (idx !== ci){ ci = idx; clear(cap); if (idx >= 0) cap.append(h('p', {}, N.captions[idx][1])); }
        if (f < 1) requestAnimationFrame(tick); else { if (W.ok) W.setNight(0.35); question(); }
      })();
    };
    function question(){
      const q = h('div', { class: 'talk' }, h('p', {}, h('b', {}, N.q))); const fb = h('div'); const btns = [];
      shuffle(N.options.map((o, i) => i)).forEach(i => { const b = h('button', { class: 'opt', onclick: () => {
        if (S.rootOK != null) return; S.rootOK = i === N.answer; btns.forEach(x => x.disabled = true); b.classList.add(S.rootOK ? 'right' : 'wrong');
        fb.append(h('div', { class: 'fb ' + (S.rootOK ? 'good' : 'bad'), html: '<b>' + (S.rootOK ? 'Exactly. ' : 'Not quite. ') + '</b>' + N.why })); fixes(); } }, N.options[i]); btns.push(b); q.append(b); });
      q.append(fb); after.append(q);
    }
    function fixes(){
      const F = N.fixes, sel = new Set(), box = h('div', { class: 'talk' }, h('p', { html: F.intro })), list = h('div'), out = h('div'), b = h('button', { class: 'btn', disabled: true }, 'Lock in these changes');
      const order = shuffle(F.options.map((o, i) => i));
      function draw(){ clear(list); order.forEach(i => { const o = F.options[i]; list.append(h('button', { class: 'opt' + (sel.has(i) ? ' sel' : ''), onclick: () => { if (b.dataset.done) return; sel.has(i) ? sel.delete(i) : (sel.size < F.pick && sel.add(i)); draw(); } }, (sel.has(i) ? '☑ ' : '☐ ') + o.t)); }); b.disabled = sel.size !== F.pick || !!b.dataset.done; }
      b.onclick = () => { b.dataset.done = 1; b.disabled = true; S.fixes = [...sel].map(i => F.options[i].id); const pts = [...sel].reduce((a, i) => a + F.options[i].good, 0);
        out.append(h('div', { class: 'fb ' + (pts >= 4 ? 'good' : pts >= 2 ? 'mid' : 'bad') }, h('ul', { class: 'whylist' }, F.options.map(o => h('li', { html: (o.good === 2 ? '🟢 ' : o.good === 1 ? '🟡 ' : '🔴 ') + '<b>' + o.t + '.</b> ' + o.why })))),
          h('button', { class: 'btn', style: 'margin-top:12px', onclick: () => go(4) }, 'Go to the board meeting →')); draw(); };
      draw(); box.append(list, b, out); after.append(box); box.scrollIntoView({ block: 'nearest', behavior: reduced() ? 'auto' : 'smooth' });
    }
  }

  /* 5. decision and conditions */
  function decide(){
    if (W.ok){ W.setNight(0); W.resetView(); }
    const Dc = D.decision, card = h('div', { class: 'card' }, h('h2', {}, 'The board meeting'), h('p', {}, 'Choose your recommendation, then the conditions you attach to it.'));
    const opts = h('div'), conds = h('div'), out = h('div'), b = h('button', { class: 'btn', disabled: true, style: 'margin-top:12px' }, 'Make my recommendation');
    function draw(){
      clear(opts); Dc.options.forEach(o => opts.append(h('button', { class: 'opt' + (S.option === o.id ? ' sel' : ''), onclick: () => { S.option = o.id; draw(); } }, (S.option === o.id ? '◉ ' : '○ ') + o.t)));
      clear(conds); conds.append(h('h3', { style: 'margin-top:14px' }, 'Conditions'), h('p', { class: 'small muted' }, Dc.conditionsIntro));
      Dc.conditions.forEach(c => { const on = S.conds.indexOf(c.id) >= 0; conds.append(h('button', { class: 'opt' + (on ? ' sel' : ''), 'aria-pressed': String(on), onclick: () => { on ? S.conds.splice(S.conds.indexOf(c.id), 1) : S.conds.push(c.id); draw(); } }, (on ? '☑ ' : '☐ ') + c.t)); });
      b.disabled = !S.option;
    }
    b.onclick = () => go(5);
    draw(); card.append(opts, conds, b, out); panel.append(card);
  }

  /* 6. outcome */
  function score(){
    const ess = id => S.conds.indexOf(id) >= 0, harm = D.decision.conditions.filter(c => c.kind === 'harmful' && ess(c.id)).length;
    const essN = D.decision.conditions.filter(c => c.kind === 'essential' && ess(c.id)).length;
    const goodM = S.measures.filter(i => D.measures.options[i].good).length, talked = Object.keys(S.talked).length;
    const fx = id => S.fixes.indexOf(id) >= 0, o = S.option;
    let safety = 35 + (ess('dcb') ? 10 : 0) + (ess('integ') ? 10 : 0) + (ess('age') ? 8 : 0) + (ess('off') ? 8 : 0) + (S.rootOK ? 8 : 0) + (fx('handheld') ? 10 : 0) - (fx('lower') ? 12 : 0) - harm*12;
    let trust = 30 + talked*3 + S.right*2 + (ess('patient') ? 12 : 0) + (fx('tune') ? 10 : 0) - (fx('remind') ? 10 : 0) - (fx('lower') ? 8 : 0);
    let value = 35 + goodM*8 + (ess('dpia') ? 8 : 0) + (ess('integ') ? 5 : 0) - (ess('contract') ? 20 : 0);
    if (o === 'go'){ if (essN < 5){ safety -= 25; trust -= 10; } value -= 5; }
    if (o === 'cond'){ value += 12; if (essN < 4) safety -= 10; }
    if (o === 'extend'){ value += 8; safety += fx('handheld') ? 4 : -6; }
    if (o === 'stop'){ safety = Math.min(safety, 60); value -= 15; trust = Math.min(trust, 65); }
    safety = clamp(safety); trust = clamp(trust); value = clamp(value);
    return { safety, trust, value, overall: Math.round((safety + trust + value)/3), essN, harm, goodM, talked };
  }
  function story(sc){
    const ess = id => S.conds.indexOf(id) >= 0, fx = id => S.fixes.indexOf(id) >= 0, L = [];
    const o = S.option;
    if (o === 'go') L.push(sc.essN >= 5 ? '🟡 The tool went live on all 20 wards at once. Your conditions kept most risks in check, but there was no chance to learn ward by ward, and two wards struggled in the first month.' : '🔴 The tool went live on all 20 wards before the gaps were fixed. Within weeks, the night-shift problem from the pilot appeared on every ward.');
    if (o === 'cond') L.push('🟢 The board backed “go with conditions”. The first four wards went live in month four, once the conditions were met.');
    if (o === 'extend') L.push(fx('handheld') ? '🟢 The six-month extension tested alerts on handhelds at night. It answered one clear question, and the board now has the evidence to decide.' : '🟡 The pilot was extended, but without a clear change to test. The council is at risk of pilot purgatory.');
    if (o === 'stop') L.push('🟡 The pilot was stopped and the lessons were written up. The risks ended, but so did the early warnings that helped seven patients during the pilot.');
    if (o !== 'stop'){
      L.push(ess('integ') || fx('handheld') ? '🟢 Alerts now reach nurses’ handhelds. The share looked at within 30 minutes rose above 70%, day and night.' : '🔴 Alerts still go to a separate screen. On night shifts, most are not opened.');
      L.push(ess('dcb') ? '🟢 The clinical safety officer signed off each new ward, and the night-shift hazard is in the hazard log with its controls.' : '🔴 New wards went live without an updated safety case. An internal audit has paused the roll-out.');
      L.push(ess('dpia') ? '🟢 The updated data protection assessment was approved without delay.' : '🟡 The data protection officer flagged that the assessment still covers only the pilot wards.');
      L.push(ess('age') ? '🟢 Monthly reports by age group showed the gap for patients over 85, and the supplier is retraining the model with local data.' : '🟡 Nobody is checking results by age group, so the gap for very elderly patients is unknown.');
      L.push(ess('off') ? '🟢 A clear switch-off point is agreed, so staff know exactly what would pause the tool.' : '🟡 There is no agreed switch-off point. If results slip, the decision will be argued about in the middle of a problem.');
    }
    L.push(ess('patient') ? '🟢 Families receive a short leaflet written with patients, and every nurse can explain the tool in one sentence.' : '🟡 Families still ask whether a computer decides who gets seen first, and get different answers.');
    if (fx('tune')) L.push('🟢 Re-tuning the threshold with nurses cut alerts to about 8 per ward per day, and staff say the alerts now feel worth reading.');
    if (fx('lower')) L.push('🔴 Lowering the threshold added more alerts to a screen nobody was watching. Alert fatigue got worse.');
    if (ess('contract')) L.push('🔴 The three-year contract was signed before the fixes were proven. There is now no easy way out if the conditions are not met.');
    if (ess('skip')) L.push('🔴 Skipping local checks on new wards meant a drop in accuracy on one surgical-medical ward went unnoticed for two months.');
    return L;
  }
  function outcome(){
    const sc = score(), prev = load(); const best = Math.max(prev.best || 0, sc.overall); save({ best, last: sc.overall, plays: (prev.plays || 0) + 1 });
    if (W.ok){ W.setOutcome(sc.safety >= 60); W.setGhosts(S.option !== 'stop' && sc.safety >= 60); W.resetView();
      const hand = S.option !== 'stop' && (S.conds.indexOf('integ') >= 0 || S.fixes.indexOf('handheld') >= 0);
      if (S.option === 'stop') W.scr.draw('OFF', 'pilot ended', '#334155'); else if (hand) W.scr.draw('2', 'sent to handhelds', '#14532d'); else W.scr.draw('31', 'unread alerts', '#991b1b'); }
    const st = sc.overall >= 85 ? '★★★' : sc.overall >= 65 ? '★★☆' : sc.overall >= 45 ? '★☆☆' : '☆☆☆';
    const bar = (n, v) => h('div', { class: 'dimbar' }, h('span', {}, n), h('div', { class: 'bar' }, h('i', { style: `width:${v}%;background:${v >= 70 ? 'var(--good)' : v >= 45 ? 'var(--warn)' : 'var(--bad)'}` })), h('b', {}, String(v)));
    panel.append(h('div', { class: 'card' }, h('h2', {}, 'Six months later'), h('div', { class: 'stars' }, st), h('p', {}, h('b', {}, `Overall: ${sc.overall}%`), best > sc.overall ? ` · your best is ${best}%` : ''),
      bar('Patient safety', sc.safety), bar('Staff trust', sc.trust), bar('Value and readiness', sc.value),
      h('ul', { class: 'whylist', style: 'margin-top:12px' }, story(sc).map(t => h('li', {}, t))),
      h('div', { class: 'blk keyc', style: 'margin-top:12px' }, h('span', { class: 'tag' }, 'What a strong run looks like'),
        h('div', { html: 'Choose shared success measures that the tool could fail; hear all eight people; see that the night-shift weakness and the separate screen are <b>one linked hazard</b>; fix the workflow (handhelds and a re-tuned threshold); then recommend <b>go with conditions</b> or a focused <b>extension</b>, with all six essential conditions and neither harmful one.' })),
      h('div', { class: 'row', style: 'margin-top:12px' }, h('button', { class: 'btn', onclick: () => { fresh(); if (W.ok){ W.setOutcome(null); W.setGhosts(false); } go(0); } }, '↺ Play again with different choices'),
        h('a', { class: 'btn alt', href: 'chapter.html?ch=pp#review' }, '🧠 Daily review'), h('a', { class: 'btn alt', href: 'chapter.html?ch=pp' }, 'Back to the workshop'))));
  }

  function mount(){
    const main = document.getElementById('main');
    main.append(h('div', { class: 'hero' }, h('div', { class: 'eyebrow' }, 'Workshop · 3D simulation'), h('h1', {}, '🏥 Virtual hospital: ' + D.title),
      h('p', { class: 'lead' }, 'You are in charge of the decision. Walk the ward, question the team, watch a night shift and make the call. Your choices decide what happens six months later.')));
    stage = h('div', { class: 'stage simstage', role: 'img', 'aria-label': 'Interactive 3D model of a hospital ward with eight members of staff' });
    hud = h('div', { class: 'hud' }); stage.append(hud);
    main.append(stage);
    if (!(window.THREE && K)) stage.append(h('div', { class: 'scene-fallback' }, '3D is not available in this browser. You can still play using the buttons below.'));
    panel = h('div', { id: 'simpanel', style: 'margin-top:14px' }); main.append(panel);
    world(stage); go(0);
  }
  window.SimPP = { mount, _state: () => S, _score: score };
})();
