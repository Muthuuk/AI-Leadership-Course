/* Strategic AI Leadership in Healthcare course: narrated 3D lesson videos.
   A live 3D scene (scenes.js) moves one step for each sentence that Sam, the virtual tutor,
   speaks with the browser's own voice (Web Speech API). Captions highlight word by word,
   soft background music (music.js) plays underneath, and a transcript is always available.
   Nothing is downloaded or sent anywhere: voice, music and 3D are all generated in the browser.

   LessonVideo.mount(host, { video, onWatched, watched }) -> { dispose() } */
(function(){
  'use strict';
  function h(tag, attrs){
    const e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(k => { const v = attrs[k];
      if (k === 'class') e.className = v; else if (k === 'html') e.innerHTML = v;
      else if (k.indexOf('on') === 0 && typeof v === 'function') e.addEventListener(k.slice(2), v);
      else if (v === true) e.setAttribute(k, ''); else if (v !== false && v != null) e.setAttribute(k, v); });
    for (let i = 2; i < arguments.length; i++){ const k = arguments[i]; if (k == null || k === false) continue;
      (Array.isArray(k) ? k : [k]).forEach(x => { if (x != null && x !== false) e.append(x.nodeType ? x : document.createTextNode(String(x))); }); }
    return e;
  }

  const TUTOR_SVG = `<svg viewBox="0 0 200 200"><defs><clipPath id="cc"><circle cx="100" cy="100" r="100"/></clipPath></defs><g clip-path="url(#cc)"><rect width="200" height="200" fill="var(--brand-soft)"/><path d="M14 205 C22 154 58 138 100 136 C142 138 178 154 186 205 Z" fill="#24364A"/><path d="M84 137 L100 168 L116 137 Z" fill="#EEF4F4"/><rect x="70" y="158" width="60" height="22" rx="4" fill="#0B1B33" stroke="#38BDF8" stroke-width="2"/><path d="M78 169 h10 M92 169 h6 M102 169 h18" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/><rect x="88" y="110" width="24" height="32" rx="9" fill="#A9714E"/><g class="tHead"><ellipse cx="70" cy="92" rx="5" ry="8" fill="#B87C58"/><ellipse cx="130" cy="92" rx="5" ry="8" fill="#B87C58"/><ellipse cx="100" cy="88" rx="30" ry="36" fill="#C48A63"/><path d="M66 92 C60 52 84 38 104 40 C128 40 142 58 134 94 C130 76 122 64 102 63 C84 63 72 72 66 92 Z" fill="#2B211C"/><path d="M67 88 C62 108 68 124 76 128 L76 96 Z" fill="#2B211C"/><path d="M133 88 C138 108 132 124 124 128 L124 96 Z" fill="#2B211C"/><path d="M81 76 Q89 72 96 76" fill="none" stroke="#2B211C" stroke-width="2.4" stroke-linecap="round"/><path d="M104 76 Q111 72 119 76" fill="none" stroke="#2B211C" stroke-width="2.4" stroke-linecap="round"/><g class="eyes"><ellipse cx="89" cy="86" rx="3.2" ry="3.6" fill="#1D1714"/><ellipse cx="111" cy="86" rx="3.2" ry="3.6" fill="#1D1714"/></g><circle cx="89" cy="86" r="9" fill="none" stroke="#3B3532" stroke-width="1.5"/><circle cx="111" cy="86" r="9" fill="none" stroke="#3B3532" stroke-width="1.5"/><path d="M98 86 L102 86" stroke="#3B3532" stroke-width="1.5"/><path d="M100 90 Q96 100 101 102" fill="none" stroke="#9C6646" stroke-width="1.8" stroke-linecap="round"/><ellipse class="mouth" cx="100" cy="112" rx="8" ry="1.4" fill="#6E3029"/><path class="smile" d="M92 111 Q100 115 108 111" fill="none" stroke="#6E3029" stroke-width="1.8" stroke-linecap="round"/></g></g></svg>`;

  /* ---- tutor face animation (mouth, blinks, gentle head movement) ---- */
  const T = { el: null, open: 0, target: 0, speaking: false, hasBoundary: false, nextBlink: performance.now() + 2500, blinkT: 0, raf: 0 };
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  function tick(now){
    T.raf = 0;
    if (!T.el || !T.el.isConnected) return;
    const reduce = reduced();
    if (T.speaking && !T.hasBoundary && !reduce) T.target = 0.35 + 0.55*Math.abs(Math.sin(now/95))*(0.6 + 0.4*Math.sin(now/410));
    if (!T.speaking) T.target = 0;
    T.open += (T.target - T.open)*0.35; if (T.hasBoundary) T.target *= 0.86;
    const o = reduce ? (T.speaking ? 0.3 : 0) : T.open;
    const m = T.el.querySelector('.mouth'), sm = T.el.querySelector('.smile'), ey = T.el.querySelector('.eyes'), hd = T.el.querySelector('.tHead');
    if (m){ m.setAttribute('ry', (1.4 + o*5.2).toFixed(2)); m.setAttribute('rx', (8 - o*1.5).toFixed(2)); }
    if (sm) sm.style.opacity = o > 0.15 ? 0 : 1;
    if (now > T.nextBlink){ T.blinkT = now; T.nextBlink = now + 2600 + Math.random()*3200; }
    const b = now - T.blinkT, sy = b < 140 ? Math.abs(1 - 2*b/140) : 1;
    if (ey) ey.setAttribute('transform', `translate(0 ${86*(1 - sy)}) scale(1 ${Math.max(0.1, sy)})`);
    const bob = T.speaking && !reduce ? Math.sin(now/600)*1.2 : 0, tilt = T.speaking && !reduce ? Math.sin(now/1300)*1.6 : 0;
    if (hd) hd.setAttribute('transform', `translate(0 ${bob.toFixed(2)}) rotate(${tilt.toFixed(2)} 100 120)`);
    T.raf = requestAnimationFrame(tick);
  }
  function setSpeaking(v){ T.speaking = v; if (T.el) T.el.classList.toggle('speaking', v); }

  /* ---- voice and settings (kept in this browser only) ---- */
  const KEY = 'saih:video';
  let prefs = { rate: 0.95, voice: '' };
  try { const p = JSON.parse(localStorage.getItem(KEY) || 'null'); if (p && typeof p === 'object') prefs = Object.assign(prefs, p); } catch(e){}
  function savePrefs(){ try { localStorage.setItem(KEY, JSON.stringify(prefs)); } catch(e){} }
  const synth = 'speechSynthesis' in window ? window.speechSynthesis : null;
  let voices = [], voice = null; const voiceListeners = new Set();
  function pickVoice(){
    if (!synth) return;
    voices = synth.getVoices().filter(v => /^en/i.test(v.lang)).sort((a, b) => (b.lang === 'en-GB') - (a.lang === 'en-GB'));
    voice = prefs.voice === '__none' ? null : (voices.find(v => v.name === prefs.voice) || voices.find(v => v.lang === 'en-GB') || voices[0] || null);
    voiceListeners.forEach(f => f());
  }
  if (synth){ pickVoice(); if (synth.addEventListener) synth.addEventListener('voiceschanged', pickVoice); else synth.onvoiceschanged = pickVoice; }
  const WPS = 2.55; // words per second at normal speed, used when there is no voice
  const words = t => t.split(/\s+/).filter(Boolean).length;

  function seg(options, value, onChange, label){
    const w = h('div', { class: 'seg', role: 'group', 'aria-label': label || '' });
    const bs = options.map(([v, t]) => { const b = h('button', { type: 'button', 'aria-pressed': String(v === value) }, t);
      b.onclick = () => { bs.forEach(x => x.setAttribute('aria-pressed', 'false')); b.setAttribute('aria-pressed', 'true'); onChange(v); }; return b; });
    w.append(...bs); return w;
  }

  let active = null; // only one video plays at a time

  function mount(host, opts){
    if (active) active.dispose();
    const video = opts.video, slides = video.slides;
    let si = 0, ui = 0, playing = false, token = 0, timers = [], scene = null, done = !!opts.watched, disposed = false;

    const tag = h('span', { class: 'slidetag' });
    const big = h('button', { class: 'bigplay', type: 'button', 'aria-label': 'Play the lesson video' },
      h('span', { class: 'c', html: '<svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z" fill="#fff"/></svg>' }),
      h('span', { class: 'bl' }, done ? 'Watch again' : 'Play the lesson video'));
    const fsBtn = h('button', { class: 'fsbtn', type: 'button', title: 'Full screen', 'aria-label': 'Full screen' }, '⛶');
    const stage = h('div', { class: 'stage', role: 'img', 'aria-label': 'Animated 3D scene for this lesson' }, tag, big, fsBtn);
    const tutorEl = h('div', { class: 'tutor', 'aria-hidden': 'true', html: TUTOR_SVG });
    const cap = h('div', { class: 'cap', 'aria-live': 'polite' });
    const speakRow = h('div', { class: 'speaker' }, h('div', { class: 'tutor-wrap' }, tutorEl, h('span', {}, 'Sam, your tutor')), cap);
    const playBtn = h('button', { class: 'btn', type: 'button' }, '▶ Play');
    const prevBtn = h('button', { class: 'btn alt', type: 'button', 'aria-label': 'Previous scene' }, '◀');
    const nextBtn = h('button', { class: 'btn alt', type: 'button', 'aria-label': 'Next scene' }, '▶▶');
    const voiceSel = h('select', { 'aria-label': 'Voice' });
    function fillVoices(){
      voiceSel.textContent = '';
      voiceSel.append(h('option', { value: '__none' }, 'No voice: captions only'));
      voices.forEach(v => voiceSel.append(h('option', { value: v.name }, `${v.name} (${v.lang})`)));
      voiceSel.value = voice ? voice.name : '__none';
    }
    fillVoices(); voiceListeners.add(fillVoices);
    voiceSel.onchange = () => { prefs.voice = voiceSel.value; savePrefs(); pickVoice(); if (playing){ stop(); play(); } };
    const rateSel = seg([[0.8, 'Slower'], [0.95, 'Normal'], [1.15, 'Faster']], prefs.rate, v => { prefs.rate = v; savePrefs(); if (playing){ stop(); play(); } }, 'Speaking speed');
    const musicBtn = h('button', { class: 'btn ghost small', type: 'button', title: 'Soft background music while the video plays' });
    const musicTxt = () => { const o = !!(window.Music && Music.isOn()); musicBtn.textContent = o ? '♪ Music on' : '♪ Music off'; musicBtn.setAttribute('aria-pressed', String(o)); };
    musicTxt();
    musicBtn.onclick = () => { if (!window.Music) return; Music.setOn(!Music.isOn()); if (Music.isOn() && playing) Music.play(); musicTxt(); };
    const trBtn = h('button', { class: 'btn ghost small', type: 'button', 'aria-expanded': 'false' }, '📄 Transcript');
    const transcript = h('div', { class: 'transcript', hidden: true },
      slides.map((s, k) => h('div', {}, h('b', {}, `Scene ${k + 1}: ${(s.scene && s.scene.title) || ''}`), h('p', {}, s.say.join(' ')))));
    trBtn.onclick = () => { transcript.hidden = !transcript.hidden; trBtn.setAttribute('aria-expanded', String(!transcript.hidden)); };
    const ctrls = h('div', { class: 'ctrls' }, prevBtn, playBtn, nextBtn, h('span', { class: 'grow' }), musicBtn, rateSel,
      h('label', { class: 'vlabel' }, 'Voice ', voiceSel), trBtn);
    const keyCard = h('div', { class: 'blk keyc', hidden: !done }, h('span', { class: 'tag' }, 'Key point'), h('p', {}, video.keyPoint));
    const note = synth ? null : h('p', { class: 'muted small' }, 'Your browser cannot speak aloud, so the video plays with captions only.');
    const card = h('div', { class: 'card watch' },
      h('div', { class: 'watchhead' }, h('span', { class: 'eyebrow' }, '🎬 Lesson video'), h('span', { class: 'muted small' }, `${slides.length} scenes · about ${Math.max(1, Math.round(slides.reduce((a, s) => a + words(s.say.join(' ')), 0)/WPS/0.95/60))} min`)),
      stage, speakRow, ctrls, note, transcript);
    host.append(card, keyCard);
    T.el = tutorEl; if (!T.raf) T.raf = requestAnimationFrame(tick);

    function showSlide(){
      if (scene) scene.dispose();
      const spec = slides[si].scene;
      scene = window.Scenes ? Scenes.mount(stage, spec) : null;
      stage.setAttribute('aria-label', 'Animated scene: ' + (spec.title || ''));
      tag.textContent = `${si + 1} / ${slides.length}`;
      if (scene){ scene.auto(false); scene.step(0); }
      prevBtn.disabled = si === 0; nextBtn.disabled = si === slides.length - 1;
      caption(-1);
    }
    function caption(ci){
      cap.textContent = ''; const t = slides[si].say[ui] || ''; let pos = 0;
      t.split(/(\s+)/).forEach(part => { if (!part.trim()){ cap.append(part); pos += part.length; return; }
        const s0 = pos, e0 = pos + part.length; pos = e0;
        cap.append(h('span', { class: ci < 0 ? 'w' : (ci >= e0 ? 'w past' : ci >= s0 ? 'w now' : 'w') }, part)); });
    }
    function clearT(){ timers.forEach(clearTimeout); timers = []; }
    function stop(){ playing = false; token++; clearT(); if (synth) synth.cancel(); setSpeaking(false); playBtn.textContent = '▶ Play'; if (window.Music) Music.pause(); }
    function play(){
      if (playing || disposed) return;
      if (done && si === slides.length - 1 && ui >= slides[si].say.length - 1){ si = 0; ui = 0; showSlide(); }
      if (synth) synth.cancel();
      playing = true; big.hidden = true; playBtn.textContent = '⏸ Pause';
      if (window.Music) Music.play();
      speak();
    }
    function speak(){
      const tok = ++token; clearT();
      const text = slides[si].say[ui]; caption(-1); if (scene) scene.step(ui);
      const est = words(text)/(WPS*prefs.rate)*1000;
      const fin = () => { if (tok !== token) return; setSpeaking(false); advance(); };
      if (synth && voice){
        const u = new SpeechSynthesisUtterance(text); u.voice = voice; u.lang = voice.lang; u.rate = prefs.rate; T.hasBoundary = false;
        u.onstart = () => { if (tok === token) setSpeaking(true); };
        u.onboundary = e => { if (tok !== token || e.name === 'sentence') return; T.hasBoundary = true; T.target = 0.55 + Math.random()*0.45; caption(e.charIndex); };
        u.onend = fin;
        u.onerror = e => { if (tok !== token || e.error === 'interrupted' || e.error === 'canceled') return; silent(tok, text, est); };
        synth.speak(u);
        // some browsers never start speaking (or never fire onend): fall back to timed captions
        timers.push(setTimeout(() => { if (tok === token && !T.speaking && !synth.speaking) silent(tok, text, est); }, 2500));
        timers.push(setTimeout(fin, est*2.2 + 4000));
      } else silent(tok, text, est);
    }
    function silent(tok, text, est){
      if (tok !== token) return; clearT(); if (synth) synth.cancel(); T.hasBoundary = false; setSpeaking(true);
      const starts = []; let pos = 0; text.split(/(\s+)/).forEach(p => { if (p.trim()) starts.push(pos); pos += p.length; });
      starts.forEach((c, k) => timers.push(setTimeout(() => { if (tok === token) caption(c); }, est*k/starts.length)));
      timers.push(setTimeout(() => { if (tok !== token) return; setSpeaking(false); advance(); }, est + 300));
    }
    function advance(){
      if (!playing) return; ui++;
      if (ui >= slides[si].say.length){
        if (si >= slides.length - 1){ ui = slides[si].say.length - 1; finish(); return; }
        si++; ui = 0; showSlide(); const tok = token;
        timers.push(setTimeout(() => { if (playing && tok === token) speak(); }, 900)); return;
      }
      speak();
    }
    function finish(){
      stop(); keyCard.hidden = false;
      cap.innerHTML = '<b>End of the video.</b> The key point is below. Then read the lesson notes and try the activities.';
      big.hidden = false; big.querySelector('.bl').textContent = 'Watch again';
      if (!done){ done = true; if (opts.onWatched) opts.onWatched(); }
    }
    playBtn.onclick = () => playing ? stop() : play();
    big.onclick = () => { if (done && !playing){ si = 0; ui = 0; showSlide(); } play(); };
    prevBtn.onclick = () => { const was = playing; stop(); si = Math.max(0, si - 1); ui = 0; showSlide(); if (was) play(); };
    nextBtn.onclick = () => { const was = playing; stop(); si = Math.min(slides.length - 1, si + 1); ui = 0; showSlide(); if (was) play(); };
    fsBtn.onclick = () => {
      const d = document;
      if (d.fullscreenElement || d.webkitFullscreenElement){ (d.exitFullscreen || d.webkitExitFullscreen).call(d); return; }
      const f = card.requestFullscreen || card.webkitRequestFullscreen; if (f) f.call(card);
    };
    const onVis = () => { if (document.hidden && playing) stop(); };
    document.addEventListener('visibilitychange', onVis);
    showSlide();

    const api = { pause(){ if (playing) stop(); }, dispose(){
      if (disposed) return; disposed = true; stop(); if (scene) scene.dispose(); scene = null;
      voiceListeners.delete(fillVoices); document.removeEventListener('visibilitychange', onVis);
      if (T.el === tutorEl) T.el = null; if (active === api) active = null;
    } };
    active = api;
    return api;
  }

  window.addEventListener('pagehide', () => { if (active) active.dispose(); });
  window.LessonVideo = { mount, stopAll(){ if (active) active.dispose(); }, pauseAll(){ if (active) active.pause(); } };
})();
