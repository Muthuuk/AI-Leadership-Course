/* Strategic AI Leadership in Healthcare - activity engine. No dependencies. */
(function(){
'use strict';
var CHAPTER_NUMBERS=[1,2,3,4];
var LATER=[
 'Chapter 5: Data Readiness as a Strategic Foundation','Chapter 6: AI Technical Challenges and Their Strategic Implications',
 'Chapter 7: The Toothbrush Test: AI Tools for Daily Clinical Practice','Chapter 8: Building the Business Case for Healthcare AI',
 'Chapter 9: AI Awareness, Literacy, and Training Strategy','Chapter 10: The Pilot Approach','Chapter 11: Scaling from Pilot to Enterprise',
 'Chapter 12: Workforce Transformation and New Roles','Chapter 13: AI Governance, Ethics, and Patient Trust','Chapter 14: National AI Healthcare Strategy',
 'Chapter 15: Regulatory Strategy','Chapter 16: National Data Infrastructure and Interoperability','Chapter 17: Cybersecurity, Future Strategy, and the Five-Year Roadmap'];
var LEVELS=[[0,'Newcomer'],[0.12,'Explorer'],[0.3,'Navigator'],[0.55,'Strategist'],[0.8,'Champion']];

/* ---------- helpers ---------- */
function add(e,c){if(c==null||c===false)return;if(Array.isArray(c)){c.forEach(function(x){add(e,x);});return;}e.appendChild(typeof c==='string'?document.createTextNode(c):c);}
function h(tag,props){
  var e=document.createElement(tag); props=props||{};
  Object.keys(props).forEach(function(k){
    var v=props[k];
    if(k==='class')e.className=v; else if(k==='html')e.innerHTML=v;
    else if(k.indexOf('on')===0&&typeof v==='function')e.addEventListener(k.slice(2),v);
    else if(k==='draggable')e.setAttribute(k,v?'true':'false'); else if(v===true)e.setAttribute(k,''); else if(v!==false&&v!=null)e.setAttribute(k,v);
  });
  for(var i=2;i<arguments.length;i++){add(e,arguments[i]);}
  return e;
}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function clear(n){while(n.firstChild)n.removeChild(n.firstChild);return n;}
function pct(f){return Math.round(f*100);}
function stars(f){return f>=0.9?'★★★':f>=0.7?'★★☆':f>=0.4?'★☆☆':'☆☆☆';}
function toast(msg){var t=h('div',{class:'toast',role:'status'},msg);document.body.appendChild(t);setTimeout(function(){t.remove();},1900);}

/* ---------- progress store (localStorage, with safe fallback) ---------- */
var Store={key:'saih_course_v1',d:null,
  load:function(){try{this.d=JSON.parse(localStorage.getItem(this.key));}catch(e){} if(!this.d||typeof this.d!=='object')this.d={name:'',s:{}}; if(!this.d.s)this.d.s={};},
  save:function(){try{localStorage.setItem(this.key,JSON.stringify(this.d));}catch(e){}},
  get:function(ch,k){return (this.d.s[ch]||{})[k];},
  best:function(ch,k,f){var c=this.d.s[ch]=this.d.s[ch]||{}; var old=c[k]; if(old===undefined||f>old)c[k]=Math.round(f*1000)/1000; this.save(); return old===undefined?f:Math.max(old,f);},
  reset:function(){this.d={name:this.d.name||'',s:{}};this.save();},
  setName:function(n){this.d.name=n;this.save();}
};
Store.load();

function keysFor(c){var k=[];c.lessons.forEach(function(l){l.activities.forEach(function(a,i){k.push({key:l.id+'.'+i,w:10});});});k.push({key:'quiz',w:30});k.push({key:'boss',w:30});return k;}
function chStats(c){
  var ks=keysFor(c),n=0,got=0,xp=0,max=0,sum=0;
  ks.forEach(function(k){var v=Store.get(c.num,k.key);max+=k.w;if(v!==undefined){n++;xp+=Math.round(v*k.w);sum+=v*k.w;}});
  return {done:n,total:ks.length,xp:xp,max:max,score:max?sum/max:0,complete:n===ks.length};
}
function allStats(){
  var xp=0,max=0,done=0,comp=0,sc=0,cs=[];
  CHAPTER_NUMBERS.forEach(function(n){var c=(window.COURSE_DATA||{})[n];if(!c)return;var s=chStats(c);xp+=s.xp;max+=s.max;if(s.complete)comp++;sc+=s.score;cs.push(s);});
  var frac=max?xp/max:0,lvl=LEVELS[0][1];LEVELS.forEach(function(L){if(frac>=L[0])lvl=L[1];});
  return {xp:xp,max:max,level:lvl,complete:comp,chapters:cs.length,avg:cs.length?sc/cs.length:0};
}

/* ---------- activity frame ---------- */
var LABEL={mcq:'Quiz',tf:'Myth or fact',sort:'Drag and drop',order:'Put in order',match:'Matching',cloze:'Fill the gaps',hunt:'Red flag hunt',scenario:'Scenario',rush:'Speed round',memory:'Memory game',allocate:'Budget game',selfassess:'Self-check'};
var A={}; // activity renderers: A[type](body, act, finish)

function runActivity(host,act,opts){
  // opts: {ch,key,weight,onScored}
  var tries=0;
  var frame=h('section',{class:'act '+act.type,'aria-label':act.title||LABEL[act.type]});
  var head=h('div',{class:'ah'},h('span',{class:'badge'},LABEL[act.type]||act.type),h('h3',{},act.title||''));
  frame.appendChild(head);
  if(act.intro)frame.appendChild(h('p',{class:'intro',html:act.intro}));
  var body=h('div'),res=h('div');
  frame.appendChild(body);frame.appendChild(res);host.appendChild(frame);
  var prev=Store.get(opts.ch,opts.key);
  if(prev!==undefined)head.appendChild(h('span',{class:'chip',style:'margin-left:auto'},'Best '+pct(prev)+'%'));
  function start(){
    clear(body);clear(res);
    A[act.type](body,act,function(f,msg){
      var eff=f*(tries>0&&act.type!=='scenario'&&act.type!=='selfassess'?0.5:1);
      var old=Store.get(opts.ch,opts.key);
      Store.best(opts.ch,opts.key,eff);
      var gain=Math.max(0,Math.round(eff*opts.weight)-Math.round((old||0)*opts.weight));
      clear(res);
      var cls=f>=0.8?'good':f>=0.5?'mid':'bad';
      res.appendChild(h('div',{class:'fb '+cls},
        h('div',{class:'result'},(msg||'')+(act.type==='selfassess'?'':' Score: '+pct(f)+'%')+(gain?'  (+'+gain+' XP)':'')),
        (f<1&&act.type!=='selfassess')?h('button',{class:'btn alt',onclick:function(){tries++;start();}},'Try again (counts half)'):null));
      if(gain)toast('+'+gain+' XP');
      if(opts.onScored)opts.onScored(eff);
    });
  }
  start();
  return frame;
}

/* ---------- MCQ ---------- */
function mcqCore(body,q,cb,noHint){
  body.appendChild(h('p',{html:'<b>'+q.q+'</b>'}));
  var done=false,btns=[],fb=h('div');
  q.options.forEach(function(o,i){
    var b=h('button',{class:'opt',html:'<b>'+'ABCD'[i]+'.</b> '+o,onclick:function(){
      if(done)return;done=true;
      btns.forEach(function(x,j){x.disabled=true;if(j===q.answer)x.classList.add('right');else if(j===i)x.classList.add('wrong');});
      var ok=i===q.answer;
      fb.appendChild(h('div',{class:'fb '+(ok?'good':'bad'),html:'<b>'+(ok?'Correct. ':'Not quite. ')+'</b>'+q.why}));
      cb(ok);
    }});
    btns.push(b);body.appendChild(b);
  });
  if(q.hint&&!noHint){var hb=h('button',{class:'btn ghost small',onclick:function(){hb.replaceWith(h('p',{class:'muted',html:'Hint: '+q.hint}));}},'Need a hint?');body.appendChild(hb);}
  body.appendChild(fb);
}
A.mcq=function(body,act,finish){mcqCore(body,act,function(ok){finish(ok?1:0,ok?'Well done.':'Read the explanation, then try again.');});};

/* ---------- True / False ---------- */
A.tf=function(body,act,finish){
  var i=0,right=0,items=shuffle(act.items);
  function show(){
    clear(body);
    if(i>=items.length){finish(right/items.length,'You got '+right+' of '+items.length+'.');return;}
    var it=items[i];
    body.appendChild(h('div',{class:'stepdots'},items.map(function(_,k){return h('i',{class:k<=i?'on':''});})));
    body.appendChild(h('p',{html:'<b>'+it.s+'</b>'}));
    var fb=h('div'),row=h('div',{class:'row'}),answered=false;
    [['Fact',true],['Myth',false]].forEach(function(p){
      row.appendChild(h('button',{class:'btn alt',onclick:function(){
        if(answered)return;answered=true;var ok=(p[1]===it.a);if(ok)right++;
        fb.appendChild(h('div',{class:'fb '+(ok?'good':'bad'),html:'<b>'+(ok?'Correct: ':'Not quite: ')+'it is a '+(it.a?'fact':'myth')+'.</b> '+it.why}));
        fb.appendChild(h('button',{class:'btn',style:'margin-top:10px',onclick:function(){i++;show();}},i+1<items.length?'Next':'See result'));
        Array.prototype.forEach.call(row.children,function(b){b.disabled=true;});
      }},p[0]));
    });
    body.appendChild(row);body.appendChild(fb);
  }
  show();
};

/* ---------- Sort (drag into boxes) ---------- */
A.sort=function(body,act,finish){
  var items=act.items,place=items.map(function(){return -1;}),sel=-1,checked=false,order=shuffle(items.map(function(_,i){return i;}));
  var area=h('div');body.appendChild(h('p',{class:'muted small'},'Drag a card into a box. On a phone, tap a card, then tap a box.'));body.appendChild(area);
  var whyHost=h('div');body.appendChild(whyHost);
  var checkBtn=h('button',{class:'btn',disabled:true,onclick:check},'Check my answers');body.appendChild(h('div',{style:'margin-top:12px'},checkBtn));
  function card(i){
    var c=h('div',{class:'item'+(sel===i?' pick':''),draggable:!checked,tabindex:0,role:'button','data-i':i},items[i].t);
    if(checked)c.classList.add(place[i]===items[i].b?'ok':'no');
    c.addEventListener('dragstart',function(e){e.dataTransfer.setData('text/plain',String(i));sel=i;});
    c.addEventListener('click',function(e){e.stopPropagation();if(checked)return;if(place[i]>=0&&sel>=0&&sel!==i){put(place[i]);return;}if(place[i]>=0){place[i]=-1;sel=-1;}else sel=(sel===i?-1:i);draw();});
    c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();c.click();}});
    return c;
  }
  function put(bi){if(sel<0||checked)return;place[sel]=bi;sel=-1;draw();}
  function draw(){
    clear(area);
    var pool=h('div',{class:'pool','aria-label':'Cards to sort'});
    var rest=order.filter(function(i){return place[i]<0;});
    rest.forEach(function(i){pool.appendChild(card(i));});
    if(!rest.length)pool.appendChild(h('span',{class:'muted'},checked?'All sorted.':'All cards placed. Tap a placed card to take it back.'));
    area.appendChild(pool);
    var bk=h('div',{class:'buckets n'+act.buckets.length});
    act.buckets.forEach(function(name,bi){
      var box=h('div',{class:'bucket',tabindex:0,role:'button','aria-label':'Box: '+name},h('h4',{},name));
      var its=h('div',{class:'items'});
      order.filter(function(i){return place[i]===bi;}).forEach(function(i){its.appendChild(card(i));});
      box.appendChild(its);
      box.addEventListener('click',function(){put(bi);});
      box.addEventListener('keydown',function(e){if(e.key==='Enter')put(bi);});
      box.addEventListener('dragover',function(e){e.preventDefault();box.classList.add('over');});
      box.addEventListener('dragleave',function(){box.classList.remove('over');});
      box.addEventListener('drop',function(e){e.preventDefault();box.classList.remove('over');var i=parseInt(e.dataTransfer.getData('text/plain'),10);if(!isNaN(i)){sel=i;put(bi);}});
      bk.appendChild(box);
    });
    area.appendChild(bk);
    checkBtn.disabled=checked||place.some(function(p){return p<0;});
  }
  function check(){
    checked=true;draw();
    var ok=0,ul=h('ul',{class:'whylist'});
    items.forEach(function(it,i){if(place[i]===it.b)ok++;else ul.appendChild(h('li',{html:'<b>'+it.t+'</b> belongs in "'+act.buckets[it.b]+'". '+it.why}));});
    clear(whyHost);if(ul.children.length)whyHost.appendChild(h('div',{class:'fb bad'},h('b',{},'Let us look at the ones that moved:'),ul));
    checkBtn.disabled=true;
    finish(ok/items.length,'You placed '+ok+' of '+items.length+' correctly.');
  }
  draw();
};

/* ---------- Order ---------- */
A.order=function(body,act,finish){
  var n=act.items.length,idx=shuffle(act.items.map(function(_,i){return i;})),checked=false,dragFrom=-1;
  if(idx.every(function(v,i){return v===i;}))idx.push(idx.shift());
  var ol=h('ol',{class:'ol'});body.appendChild(h('p',{class:'muted small'},'Drag the steps, or use the arrow buttons, to put them in the right order.'));body.appendChild(ol);
  var out=h('div');var btn=h('button',{class:'btn',style:'margin-top:12px',onclick:check},'Check the order');body.appendChild(btn);body.appendChild(out);
  function move(a,b){if(b<0||b>=n||checked)return;var t=idx.splice(a,1)[0];idx.splice(b,0,t);draw();}
  function draw(){
    clear(ol);
    idx.forEach(function(v,p){
      var li=h('li',{draggable:!checked},h('span',{class:'n'},String(p+1)),h('span',{class:'tx',html:act.items[v]}));
      if(checked)li.classList.add(v===p?'ok':'no');
      if(!checked){
        li.appendChild(h('button',{'aria-label':'Move up',onclick:function(){move(p,p-1);}},'▲'));
        li.appendChild(h('button',{'aria-label':'Move down',onclick:function(){move(p,p+1);}},'▼'));
      }
      li.addEventListener('dragstart',function(e){dragFrom=p;e.dataTransfer.setData('text/plain',String(p));li.classList.add('drag');});
      li.addEventListener('dragend',function(){li.classList.remove('drag');});
      li.addEventListener('dragover',function(e){e.preventDefault();});
      li.addEventListener('drop',function(e){e.preventDefault();if(dragFrom>=0)move(dragFrom,p);dragFrom=-1;});
      ol.appendChild(li);
    });
  }
  function check(){
    checked=true;var ok=0;idx.forEach(function(v,p){if(v===p)ok++;});draw();btn.disabled=true;
    var good=h('ol',{class:'whylist'});act.items.forEach(function(t){good.appendChild(h('li',{html:t}));});
    clear(out);out.appendChild(h('div',{class:'fb '+(ok===n?'good':'bad')},h('b',{},ok===n?'Perfect order. ':'The correct order is:'),ok===n?null:good,act.why?h('p',{html:act.why}):null));
    finish(ok/n,ok+' of '+n+' steps in the right place.');
  }
  draw();
};

/* ---------- Match ---------- */
A.match=function(body,act,finish){
  var n=act.pairs.length,rOrder=shuffle(act.pairs.map(function(_,i){return i;})),link={},sel=-1,checked=false;
  var cols=h('div',{class:'mcols'}),L=h('div'),R=h('div');cols.appendChild(L);cols.appendChild(R);
  body.appendChild(h('p',{class:'muted small'},'Tap a term on the left, then tap its match on the right. Tap a matched card to undo.'));body.appendChild(cols);
  var out=h('div'),btn=h('button',{class:'btn',style:'margin-top:12px',disabled:true,onclick:check},'Check my matches');body.appendChild(btn);body.appendChild(out);
  function rOwner(r){for(var l in link)if(link[l]===r)return +l;return -1;}
  function draw(){
    clear(L);clear(R);
    act.pairs.forEach(function(p,i){
      var b=h('button',{class:'mbtn'+(sel===i?' sel':'')+(link[i]!==undefined?' paired':''),html:p.l},link[i]!==undefined?h('span',{class:'pn'},String(i+1)):null);
      if(checked)b.classList.add(link[i]===i?'ok':'no');
      b.addEventListener('click',function(){if(checked)return;if(link[i]!==undefined){delete link[i];sel=-1;}else sel=(sel===i?-1:i);draw();});L.appendChild(b);
    });
    rOrder.forEach(function(r){
      var o=rOwner(r);
      var b=h('button',{class:'mbtn'+(o>=0?' paired':''),html:act.pairs[r].r},o>=0?h('span',{class:'pn'},String(o+1)):null);
      if(checked&&o>=0)b.classList.add(o===r?'ok':'no');
      b.addEventListener('click',function(){
        if(checked)return;
        if(o>=0&&sel<0){delete link[o];draw();return;}
        if(sel<0)return;
        if(o>=0)delete link[o];
        link[sel]=r;sel=-1;draw();
      });R.appendChild(b);
    });
    btn.disabled=checked||Object.keys(link).length<n;
  }
  function check(){
    checked=true;var ok=0;for(var l in link)if(link[l]===+l)ok++;draw();btn.disabled=true;
    var ul=h('ul',{class:'whylist'});act.pairs.forEach(function(p,i){if(link[i]!==i)ul.appendChild(h('li',{html:'<b>'+p.l+'</b> matches: '+p.r}));});
    if(ul.children.length)out.appendChild(h('div',{class:'fb bad'},h('b',{},'These matches should be:'),ul));
    finish(ok/n,ok+' of '+n+' matched correctly.');
  }
  draw();
};

/* ---------- Cloze ---------- */
A.cloze=function(body,act,finish){
  var parts=[],re=/\{\{([^}]+)\}\}/g,last=0,m,ans=[];
  while((m=re.exec(act.text))){parts.push({t:act.text.slice(last,m.index)});parts.push({g:ans.length});ans.push(m[1].trim());last=re.lastIndex;}
  parts.push({t:act.text.slice(last)});
  var words=ans.concat(act.extra||[]).map(function(w,i){return {w:w,id:i};}),shown=shuffle(words),fill=ans.map(function(){return null;}),focus=-1,checked=false;
  var txt=h('p',{class:'clz'}),bank=h('div',{class:'bank'});
  body.appendChild(h('p',{class:'muted small'},'Drag a word into a gap, or tap a word to fill the next empty gap.'));body.appendChild(txt);body.appendChild(bank);
  var out=h('div'),btn=h('button',{class:'btn',disabled:true,onclick:check},'Check my answers');body.appendChild(btn);body.appendChild(out);
  function put(g,id){if(checked)return;var o=fill.indexOf(id);if(o>=0)fill[o]=null;fill[g]=id;focus=-1;draw();}
  function draw(){
    clear(txt);clear(bank);
    parts.forEach(function(p){
      if(p.t!==undefined){txt.appendChild(document.createRange().createContextualFragment(p.t));return;}
      var g=p.g,id=fill[g];
      var s=h('span',{class:'gap'+(focus===g?' focus':''),tabindex:0,role:'button'},id===null?' ':words[id].w);
      if(checked)s.classList.add(words[id]&&words[id].w.toLowerCase()===ans[g].toLowerCase()?'ok':'no');
      s.addEventListener('click',function(){if(checked)return;if(fill[g]!==null){fill[g]=null;focus=g;}else focus=g;draw();});
      s.addEventListener('dragover',function(e){e.preventDefault();});
      s.addEventListener('drop',function(e){e.preventDefault();var id=parseInt(e.dataTransfer.getData('text/plain'),10);if(!isNaN(id))put(g,id);});
      txt.appendChild(s);
    });
    shown.forEach(function(w){
      var b=h('span',{class:'word'+(fill.indexOf(w.id)>=0?' used':''),draggable:true,tabindex:0,role:'button'},w.w);
      b.addEventListener('dragstart',function(e){e.dataTransfer.setData('text/plain',String(w.id));});
      b.addEventListener('click',function(){var g=focus>=0?focus:fill.indexOf(null);if(g>=0)put(g,w.id);});
      b.addEventListener('keydown',function(e){if(e.key==='Enter')b.click();});
      bank.appendChild(b);
    });
    btn.disabled=checked||fill.some(function(f){return f===null;});
  }
  function check(){
    checked=true;var ok=0;ans.forEach(function(a,g){if(fill[g]!==null&&words[fill[g]].w.toLowerCase()===a.toLowerCase())ok++;});draw();btn.disabled=true;
    var wrong=ans.filter(function(a,g){return !(fill[g]!==null&&words[fill[g]].w.toLowerCase()===a.toLowerCase());});
    clear(out);
    if(wrong.length)out.appendChild(h('div',{class:'fb bad'},h('b',{},'Missing words: '),wrong.join(', ')+'.',act.why?h('p',{html:act.why}):null));
    else if(act.why)out.appendChild(h('div',{class:'fb good',html:act.why}));
    finish(ok/ans.length,ok+' of '+ans.length+' gaps correct.');
  }
  draw();
};

/* ---------- Red flag hunt ---------- */
A.hunt=function(body,act,finish){
  var chunks=[],re=/\[\[(.+?)\|(.+?)\]\]|\(\((.+?)\|(.+?)\)\)/g,last=0,m;
  function plain(t){var ms=t.match(/[^.;:,!?]+[.;:,!?]*\s*/g)||[];ms.forEach(function(s){if(s.trim())chunks.push({t:s.trim(),k:'p'});});}
  while((m=re.exec(act.passage))){plain(act.passage.slice(last,m.index));
    if(m[1])chunks.push({t:m[1],k:'f',why:m[2]});else chunks.push({t:m[3],k:'d',why:m[4]});last=re.lastIndex;}
  plain(act.passage.slice(last));
  var flags=chunks.filter(function(c){return c.k==='f';}).length,mark=chunks.map(function(){return false;}),checked=false;
  var box=h('div',{class:'passage'});body.appendChild(h('p',{class:'muted small'},'Tap any phrase that worries you. Tap again to un-mark. There are '+flags+' red flags hidden here.'));body.appendChild(box);
  var out=h('div'),btn=h('button',{class:'btn',onclick:check},'Reveal the red flags');body.appendChild(btn);body.appendChild(out);
  function draw(){
    clear(box);
    chunks.forEach(function(c,i){
      var cls='chunk';
      if(checked){ if(c.k==='f')cls+=mark[i]?' hit':' miss'; else if(mark[i])cls+=' fp'; else if(c.k==='d')cls+=' decoy'; }
      else if(mark[i])cls+=' mark';
      var s=h('span',{class:cls,tabindex:0,role:'button','aria-pressed':String(mark[i])},c.t);
      s.addEventListener('click',function(){if(checked)return;mark[i]=!mark[i];draw();});
      s.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();s.click();}});
      box.appendChild(s);box.appendChild(document.createTextNode(' '));
    });
  }
  function check(){
    checked=true;btn.disabled=true;
    var found=0,wrong=0;chunks.forEach(function(c,i){if(mark[i]){if(c.k==='f')found++;else wrong++;}});
    draw();
    var ul=h('ul',{class:'whylist'});
    chunks.forEach(function(c,i){
      if(c.k==='f')ul.appendChild(h('li',{html:(mark[i]?'✅ ':'❌ missed: ')+'<b>"'+c.t+'"</b> '+c.why}));
      else if(c.k==='d')ul.appendChild(h('li',{html:'💡 <b>"'+c.t+'"</b> is fine. '+c.why}));
    });
    if(wrong)ul.appendChild(h('li',{html:'⚠️ You marked '+wrong+' phrase'+(wrong>1?'s':'')+' that '+(wrong>1?'were':'was')+' not a problem.'}));
    out.appendChild(h('div',{class:'fb '+(found===flags&&!wrong?'good':'mid')},ul));
    var f=Math.max(0,(found-0.5*wrong)/flags);
    finish(Math.min(1,f),'You spotted '+found+' of '+flags+' red flags'+(wrong?' (and marked '+wrong+' by mistake).':'.'));
  }
  draw();
};

/* ---------- Scenario (branching) ---------- */
function scenMax(a){
  var memo={};
  function best(id){ if(id===null||id===undefined)return 0; if(memo[id]!==undefined)return memo[id];
    var s=a.steps.filter(function(x){return x.id===id;})[0],b=0;
    s.choices.forEach(function(c){b=Math.max(b,c.score+best(c.next));}); return memo[id]=b;}
  return best(a.start);
}
A.scenario=function(body,act,finish){
  var steps={},total=0,max=scenMax(act),path=[],cur=act.start,count=0;
  act.steps.forEach(function(s){steps[s.id]=s;});
  var setup=h('div',{class:'hook',html:act.setup});body.appendChild(setup);
  var host=h('div',{class:'scn'});body.appendChild(host);
  function show(){
    clear(host);count++;
    var s=steps[cur];
    var st=h('div',{class:'step'});
    st.appendChild(h('p',{html:'<b>'+s.text+'</b>'}));
    var fb=h('div'),btns=[],chosen=false;
    shuffle(s.choices).forEach(function(c){
      var b=h('button',{class:'opt',html:c.label,onclick:function(){
        if(chosen)return;chosen=true;total+=c.score;path.push({label:c.label,score:c.score});
        btns.forEach(function(x){x.disabled=true;});b.classList.add(c.score===2?'right':c.score===1?'sel':'wrong');
        fb.appendChild(h('div',{class:'fb '+(c.score===2?'good':c.score===1?'mid':'bad'),html:'<b>'+(c.score===2?'Strong choice. ':c.score===1?'Reasonable, but not the best. ':'Risky choice. ')+'</b>'+c.fb}));
        fb.appendChild(h('button',{class:'btn',style:'margin-top:10px',onclick:function(){ if(c.next){cur=c.next;show();}else end(); }},c.next?'Continue':'See how it went'));
      }});btns.push(b);st.appendChild(b);
    });
    st.appendChild(fb);host.appendChild(st);
  }
  function end(){
    clear(host);var f=max?Math.min(1,total/max):1;
    var recap=h('ul',{class:'whylist'});path.forEach(function(p){recap.appendChild(h('li',{html:(p.score===2?'🟢 ':p.score===1?'🟡 ':'🔴 ')+p.label}));});
    host.appendChild(h('div',{class:'fb '+(f>=0.8?'good':f>=0.5?'mid':'bad')},h('div',{class:'stars'},stars(f)),h('p',{html:'<b>Decision score: '+total+' out of a possible '+max+'.</b> '+(f>=0.8?'You led this well: you balanced speed, safety and the people involved.':f>=0.5?'A sound effort, but a few choices left risk on the table. Replay to find the strongest route.':'Several choices created avoidable risk. Replay and look closely at the feedback.')}),h('p',{class:'small'},'Your path:'),recap));
    finish(f,'Scenario complete.');
  }
  show();
};

/* ---------- Speed round ---------- */
A.rush=function(body,act,finish){
  var n=act.buckets.length;
  body.appendChild(h('p',{class:'muted small'},'Sort each card into the right group before the clock runs out. Keyboard: keys 1, 2'+(n>2?', 3':'')+'.'));
  var area=h('div');body.appendChild(area);
  var startBtn=h('button',{class:'btn',onclick:go},'Start the '+act.seconds+'-second round');area.appendChild(startBtn);
  function go(){
    clear(area);
    var items=shuffle(act.items),i=0,right=0,wrong=0,left=act.seconds,missed=[],streak=0,best=0,over=false;
    var hud=h('div',{class:'row',style:'justify-content:space-between'});
    var tEl=h('span',{class:'timer'},String(left)+'s'),sEl=h('span',{class:'chip'},'Score 0');
    hud.appendChild(tEl);hud.appendChild(sEl);area.appendChild(hud);
    var card=h('div',{class:'rushcard'});area.appendChild(card);
    var bt=h('div',{class:'rushbtns n'+n});
    act.buckets.forEach(function(b,bi){bt.appendChild(h('button',{class:'btn',onclick:function(){pick(bi);}},(bi+1)+'. '+b));});
    area.appendChild(bt);
    var iv=setInterval(function(){left--;tEl.textContent=left+'s';if(left<=0)stop();},1000);
    function key(e){var k=parseInt(e.key,10);if(k>=1&&k<=n)pick(k-1);}
    document.addEventListener('keydown',key);
    function cardShow(){card.textContent=items[i%items.length].t;}
    function pick(bi){
      if(over)return;var it=items[i%items.length];
      if(it.b===bi){right++;streak++;best=Math.max(best,streak);}
      else{wrong++;streak=0;missed.push(it);card.classList.remove('shake');void card.offsetWidth;card.classList.add('shake');}
      sEl.textContent='Score '+right+(streak>2?'  🔥'+streak:'');i++;
      if(i>=items.length)stop();else cardShow();
    }
    function stop(){
      if(over)return;over=true;clearInterval(iv);document.removeEventListener('keydown',key);
      var f=Math.max(0,Math.min(1,(right-0.5*wrong)/items.length));
      clear(area);
      var ul=h('ul',{class:'whylist'});
      missed.slice(0,8).forEach(function(it){ul.appendChild(h('li',{html:'<b>'+it.t+'</b> goes in "'+act.buckets[it.b]+'".'}));});
      area.appendChild(h('div',{class:'fb '+(f>=0.8?'good':'mid')},h('p',{html:'<b>Time! '+right+' right, '+wrong+' wrong, best streak '+best+'.</b> '+(i<items.length?'You sorted '+i+' of '+items.length+' cards.':'')}),missed.length?h('div',{},h('b',{},'Cards to remember:'),ul):null));
      finish(f,'Round over.');
    }
    cardShow();
  }
};

/* ---------- Memory ---------- */
A.memory=function(body,act,finish){
  var cards=[];act.pairs.forEach(function(p,i){cards.push({p:i,t:p.a});cards.push({p:i,t:p.b});});
  cards=shuffle(cards);var open=[],matched={},moves=0,lock=false;
  var info=h('p',{class:'muted small'},'Flip two cards at a time. Match each term with its meaning. Moves: 0');
  var grid=h('div',{class:'mem'});body.appendChild(info);body.appendChild(grid);
  function draw(){
    clear(grid);
    cards.forEach(function(c,i){
      var up=open.indexOf(i)>=0||matched[c.p];
      var d=h('button',{class:'mc'+(matched[c.p]?' done':up?' up':' back'),'aria-label':up?c.t:'Hidden card'},up?c.t:'?');
      d.addEventListener('click',function(){
        if(lock||up)return;open.push(i);draw();
        if(open.length===2){moves++;info.textContent='Flip two cards at a time. Match each term with its meaning. Moves: '+moves;
          if(cards[open[0]].p===cards[open[1]].p){matched[cards[i].p]=true;open=[];draw();
            if(Object.keys(matched).length===act.pairs.length){var f=Math.max(0.5,Math.min(1,act.pairs.length*2/moves));finish(f,'All pairs found in '+moves+' moves.');}}
          else{lock=true;setTimeout(function(){open=[];lock=false;draw();},900);}}
      });
      grid.appendChild(d);
    });
  }
  draw();
};

/* ---------- Allocate (budget game) ---------- */
A.allocate=function(body,act,finish){
  var vals=act.categories.map(function(){return 0;}),total=act.total,unit=act.unit||'',step=total%5===0?5:1,checked=false;
  var left=h('div',{class:'left'}),rows=h('div');
  body.appendChild(left);body.appendChild(rows);
  var out=h('div'),btn=h('button',{class:'btn',style:'margin-top:12px',disabled:true,onclick:check},'Lock in my plan');body.appendChild(btn);body.appendChild(out);
  var vEls=[],sl=[];
  act.categories.forEach(function(c,i){
    var row=h('div',{class:'alloc'},h('div',{html:'<b>'+c.name+'</b><br><span class="muted small">'+c.tip+'</span>'}));
    var v=h('span',{class:'val'},'0'+unit);vEls.push(v);row.appendChild(v);
    var r=h('input',{type:'range',min:'0',max:String(total),step:String(step),value:'0','aria-label':c.name});
    r.addEventListener('input',function(){
      var others=vals.reduce(function(a,b,j){return j===i?a:a+b;},0),nv=Math.min(+r.value,total-others);
      vals[i]=nv;r.value=nv;upd();
    });sl.push(r);row.appendChild(r);rows.appendChild(row);
  });
  function upd(){
    var used=vals.reduce(function(a,b){return a+b;},0),rem=total-used;
    vals.forEach(function(v,i){vEls[i].textContent=v+unit;});
    left.textContent='Left to spend: '+rem+unit;left.className='left'+(rem===0?' zero':'');
    btn.disabled=checked||rem!==0;
  }
  function check(){
    checked=true;btn.disabled=true;sl.forEach(function(s){s.disabled=true;});var ok=0,ul=h('ul',{class:'whylist'});
    act.categories.forEach(function(c,i){
      var v=vals[i],lo=c.ideal[0],hi=c.ideal[1];
      if(v>=lo&&v<=hi){ok++;ul.appendChild(h('li',{html:'✅ <b>'+c.name+' ('+v+unit+'):</b> '+c.ok}));}
      else if(v<lo)ul.appendChild(h('li',{html:'⬇️ <b>'+c.name+' ('+v+unit+', aim for '+lo+'-'+hi+unit+'):</b> '+c.low}));
      else ul.appendChild(h('li',{html:'⬆️ <b>'+c.name+' ('+v+unit+', aim for '+lo+'-'+hi+unit+'):</b> '+c.high}));
    });
    out.appendChild(h('div',{class:'fb '+(ok===act.categories.length?'good':'mid')},ul));
    finish(ok/act.categories.length,ok+' of '+act.categories.length+' categories in a sensible range.');
  }
  upd();
};

/* ---------- Self-assessment ---------- */
A.selfassess=function(body,act,finish){
  var pick=act.dims.map(function(){return 0;}),out=h('div');
  act.dims.forEach(function(d,di){
    var box=h('div',{class:'card'},h('h3',{},d.name),h('p',{html:d.q}));
    var btns=[];
    d.levels.forEach(function(l,li){
      var b=h('button',{class:'lvl',onclick:function(){pick[di]=li+1;btns.forEach(function(x,k){x.classList.toggle('sel',k===li);});go.disabled=pick.some(function(p){return !p;});}},h('b',{},String(li+1)),h('span',{html:l}));
      btns.push(b);box.appendChild(b);
    });
    body.appendChild(box);
  });
  var go=h('button',{class:'btn',disabled:true,onclick:result},'See my result');body.appendChild(go);body.appendChild(out);
  function result(){
    var avg=pick.reduce(function(a,b){return a+b;},0)/pick.length,res=act.results[act.results.length-1];
    for(var i=0;i<act.results.length;i++){if(avg<=act.results[i].upto){res=act.results[i];break;}}
    var low=0;pick.forEach(function(p,i){if(p<pick[low])low=i;});
    clear(out);
    var card=h('div',{class:'fb good'},h('h3',{},'Average '+avg.toFixed(1)+' out of 5: '+res.label),h('p',{html:res.advice}));
    act.dims.forEach(function(d,i){card.appendChild(h('div',{class:'dimbar'},h('span',{},d.name),h('div',{class:'bar'},h('i',{style:'width:'+(pick[i]*20)+'%'})),h('b',{},String(pick[i]))));});
    card.appendChild(h('p',{class:'small',html:'Your lowest area is <b>'+act.dims[low].name+'</b>. That is usually the best place to start closing gaps.'}));
    out.appendChild(card);go.disabled=true;
    finish(1,'Reflection complete.');
  }
};

/* ---------- Teach blocks ---------- */
function teachBlock(b){
  if(b.h)return h('div',{class:'blk'},h('h3',{html:b.h}),h('p',{html:b.p}));
  if(b.key)return h('div',{class:'blk keyc'},h('span',{class:'tag'},'Key idea'),h('div',{html:b.key}));
  if(b.analogy)return h('div',{class:'blk anac'},h('span',{class:'tag'},'Think of it like this'),h('div',{html:b.analogy}));
  if(b.example)return h('div',{class:'blk exc'},h('span',{class:'tag'},'Real example'),h('div',{html:b.example}));
  if(b.warn)return h('div',{class:'blk warnc'},h('span',{class:'tag'},'Watch out'),h('div',{html:b.warn}));
  if(b.list){var ul=h('ul');b.list.forEach(function(x){ul.appendChild(h('li',{html:x}));});return h('div',{class:'blk'},ul);}
  if(b.steps){var ol=h('ol');b.steps.forEach(function(x){ol.appendChild(h('li',{html:x}));});return h('div',{class:'blk'},ol);}
  if(b.table){var t=h('table',{class:'t'}),tr=h('tr');b.table.head.forEach(function(x){tr.appendChild(h('th',{html:x}));});t.appendChild(h('thead',{},tr));
    var tb=h('tbody');b.table.rows.forEach(function(r){var row=h('tr');r.forEach(function(x){row.appendChild(h('td',{html:x}));});tb.appendChild(row);});t.appendChild(tb);return h('div',{class:'blk tablewrap'},t);}
  return h('div');
}

/* ---------- CHAPTER PAGE ---------- */
function loadScript(src,ok,bad){var s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=bad;document.head.appendChild(s);}

function chapterPage(){
  var num=parseInt(new URLSearchParams(location.search).get('ch'),10)||1;
  var main=document.getElementById('main'),nav=document.getElementById('nav'),ttl=document.getElementById('ttl'),xpEl=document.getElementById('xp');
  var c;
  loadScript('data/ch0'+num+'.js',function(){c=window.COURSE_DATA[num];if(!c){main.textContent='Chapter not found.';return;}document.title='Chapter '+c.num+': '+c.title;ttl.textContent='Chapter '+c.num+': '+c.title;window.addEventListener('hashchange',route);route();},function(){main.innerHTML='<div class="card">This chapter is not available yet. <a href="index.html">Back to the course home</a>.</div>';});

  function chip(){var s=chStats(c);xpEl.textContent=s.xp+' XP · '+pct(s.done/s.total)+'%';}
  function lessonDone(l){return l.activities.every(function(a,i){return Store.get(c.num,l.id+'.'+i)!==undefined;});}
  function drawNav(cur){
    clear(nav);
    var items=[['overview','Overview',false]];
    c.lessons.forEach(function(l,i){items.push([l.id,(i+1)+'. '+l.title,lessonDone(l)]);});
    items.push(['quiz','Chapter quiz',Store.get(c.num,'quiz')!==undefined]);
    items.push(['boss','Boss level',Store.get(c.num,'boss')!==undefined]);
    items.push(['gloss','Glossary',false]);
    items.forEach(function(it){nav.appendChild(h('a',{href:'#'+it[0],class:(cur===it[0]?'on ':'')+(it[2]?'done':'')},it[1]));});
    var on=nav.querySelector('.on');if(on&&on.scrollIntoView)try{on.scrollIntoView({inline:'center',block:'nearest'});}catch(e){}
  }
  function route(){
    var id=(location.hash||'#overview').slice(1);clear(main);window.scrollTo(0,0);
    var l=c.lessons.filter(function(x){return x.id===id;})[0];
    if(l)lessonView(l);else if(id==='quiz')quizView();else if(id==='boss')bossView();else if(id==='gloss')glossView();else overview();
    drawNav(l?l.id:(['quiz','boss','gloss'].indexOf(id)>=0?id:'overview'));chip();
  }
  function overview(){
    var s=chStats(c),first=null;
    main.appendChild(h('div',{class:'hero'},h('div',{class:'eyebrow'},c.part),h('h1',{},'Chapter '+c.num+': '+c.title),h('p',{class:'lead'},c.tagline),h('p',{class:'muted'},'About '+c.minutes+' minutes · '+c.lessons.length+' lessons · quiz · boss level')));
    if(s.complete)main.appendChild(h('div',{class:'fb good'},h('div',{class:'stars'},stars(s.score)),h('b',{},'Chapter complete. Your score is '+pct(s.score)+'%. '),'Replay any activity to improve it.'));
    else main.appendChild(h('div',{class:'card'},h('div',{class:'row'},h('b',{},'Your progress'),h('span',{class:'muted'},s.done+' of '+s.total+' activities')),h('div',{class:'bar'},h('i',{style:'width:'+pct(s.done/s.total)+'%'}))));
    var ul=h('ul');c.outcomes.forEach(function(o){ul.appendChild(h('li',{html:o}));});
    main.appendChild(h('div',{class:'card'},h('h2',{},'By the end you will be able to'),ul));
    var g=h('div',{class:'grid two'});
    c.lessons.forEach(function(l,i){
      var d=lessonDone(l);if(!d&&!first)first='#'+l.id;
      g.appendChild(h('a',{class:'card chcard',href:'#'+l.id},h('span',{class:'num'},'LESSON '+(i+1)+' · '+l.minutes+' MIN'),h('b',{},l.icon+' '+l.title),h('span',{class:'muted small'},d?'✅ Complete':l.activities.length+' activities')));
    });
    main.appendChild(g);
    if(!first)first='#quiz';
    main.appendChild(h('div',{class:'foot'},h('a',{class:'btn',href:first},s.done?'Continue':'Start Chapter '+c.num),h('a',{class:'btn alt',href:'index.html'},'Course home')));
  }
  function lessonView(l){
    var idx=c.lessons.indexOf(l);
    main.appendChild(h('div',{class:'eyebrow'},'Lesson '+(idx+1)+' of '+c.lessons.length+' · '+l.minutes+' min'));
    main.appendChild(h('h1',{},l.icon+' '+l.title));
    main.appendChild(h('div',{class:'hook',html:l.hook}));
    l.teach.forEach(function(b){main.appendChild(teachBlock(b));});
    main.appendChild(h('h2',{style:'margin-top:26px'},'Now try it'));
    var actHost=h('div');main.appendChild(actHost);
    var frames=[];
    var footer=h('div',{class:'foot'});
    var nextHref=idx+1<c.lessons.length?'#'+c.lessons[idx+1].id:'#quiz';
    var nextBtn=h('a',{class:'btn',href:nextHref},idx+1<c.lessons.length?'Next lesson →':'On to the chapter quiz →');
    footer.appendChild(h('a',{class:'btn alt',href:'#overview'},'← Overview'));footer.appendChild(nextBtn);
    l.activities.forEach(function(a,i){
      var f=runActivity(actHost,a,{ch:c.num,key:l.id+'.'+i,weight:10,onScored:function(){
        if(frames[i+1])frames[i+1].hidden=false;
        chip();drawNav(l.id);
        
      }});
      frames.push(f);
      if(i>0&&Store.get(c.num,l.id+'.'+(i-1))===undefined)f.hidden=true;
    });
    // reveal activities already attempted
    frames.forEach(function(f,i){if(i===0||Store.get(c.num,l.id+'.'+(i-1))!==undefined)f.hidden=false;});
    main.appendChild(footer);
  }
  function quizView(){
    var qs=c.finalQuiz.questions;
    main.appendChild(h('div',{class:'hero'},h('div',{class:'eyebrow'},'Chapter '+c.num),h('h1',{},c.finalQuiz.title||'Chapter quiz'),h('p',{class:'lead'},qs.length+' questions. One try each. Explanations appear after every answer.')));
    var host=h('div');main.appendChild(host);
    var prev=Store.get(c.num,'quiz');
    if(prev!==undefined)main.insertBefore(h('p',{class:'chip'},'Best score so far: '+pct(prev)+'%'),host);
    function begin(){
      var i=0,right=0,miss=[],order=shuffle(qs);
      function next(){
        clear(host);
        if(i>=order.length){
          var f=right/order.length;Store.best(c.num,'quiz',f);chip();drawNav('quiz');
          var ul=h('ul',{class:'whylist'});miss.forEach(function(q){ul.appendChild(h('li',{html:'<b>'+q.q+'</b><br>Right answer: '+q.options[q.answer]}));});
          host.appendChild(h('div',{class:'card'},h('div',{class:'stars'},stars(f)),h('h2',{},'You scored '+right+' out of '+order.length+' ('+pct(f)+'%)'),
            h('p',{},f>=0.7?'Strong result. You are ready for the boss level.':'A good start. Revisit the lessons you found hardest, then retake the quiz.'),miss.length?h('div',{},h('b',{},'Worth another look:'),ul):null,
            h('div',{class:'row',style:'margin-top:12px'},h('button',{class:'btn alt',onclick:begin},'Retake quiz'),h('a',{class:'btn',href:'#boss'},'Boss level →'))));
          toast('+'+Math.round(f*30)+' XP possible');return;
        }
        var card=h('div',{class:'card'});
        card.appendChild(h('div',{class:'stepdots'},order.map(function(_,k){return h('i',{class:k<=i?'on':''});})));
        card.appendChild(h('p',{class:'muted small'},'Question '+(i+1)+' of '+order.length));
        var q=order[i],nb=h('div');
        mcqCore(card,q,function(ok){if(ok)right++;else miss.push(q);nb.appendChild(h('button',{class:'btn',style:'margin-top:12px',onclick:function(){i++;next();}},i+1<order.length?'Next question':'See my score'));},true);
        card.appendChild(nb);host.appendChild(card);
      }
      next();
    }
    host.appendChild(h('button',{class:'btn',onclick:begin},prev!==undefined?'Take the quiz again':'Start the quiz'));
  }
  function bossView(){
    main.appendChild(h('div',{class:'hero'},h('div',{class:'eyebrow'},'Boss level'),h('h1',{},c.capstone.title),h('p',{class:'lead'},c.capstone.intro)));
    var host=h('div');main.appendChild(host);
    runActivity(host,Object.assign({},c.capstone,{title:'Your decisions',intro:'Make each call as the leader in the room.'}),{ch:c.num,key:'boss',weight:30,onScored:function(){chip();drawNav('boss');}});
    var nxt=h('div',{class:'foot'},h('a',{class:'btn alt',href:'#quiz'},'← Quiz'),h('a',{class:'btn',href:'#overview'},'Chapter summary'));
    var tk=h('div',{class:'card'},h('h2',{},'Key takeaways'));var ul=h('ul');c.takeaways.forEach(function(t){ul.appendChild(h('li',{html:t}));});tk.appendChild(ul);main.appendChild(tk);main.appendChild(nxt);
  }
  function glossView(){
    main.appendChild(h('h1',{},'Glossary'));
    var inp=h('input',{type:'search',placeholder:'Search terms…','aria-label':'Search glossary'});main.appendChild(inp);
    var dl=h('dl',{class:'gl'});main.appendChild(dl);
    function draw(){clear(dl);var q=inp.value.toLowerCase();c.glossary.slice().sort(function(a,b){return a.term.localeCompare(b.term);}).forEach(function(g){if(!q||(g.term+g.def).toLowerCase().indexOf(q)>=0){dl.appendChild(h('dt',{html:g.term}));dl.appendChild(h('dd',{html:g.def}));}});}
    inp.addEventListener('input',draw);draw();
  }
}

/* ---------- HOME PAGE ---------- */
function homePage(){
  var main=document.getElementById('main');
  window.COURSE_DATA=window.COURSE_DATA||{};
  var pending=CHAPTER_NUMBERS.length;
  CHAPTER_NUMBERS.forEach(function(n){loadScript('data/ch0'+n+'.js',function(){if(--pending===0)draw();},function(){if(--pending===0)draw();});});
  function draw(){
    clear(main);
    var st=allStats();
    main.appendChild(h('div',{class:'hero'},h('div',{class:'eyebrow'},'Interactive course'),h('h1',{},'Strategic AI Leadership in Healthcare'),
      h('p',{class:'lead'},'Learn by doing: games, drag-and-drop, puzzles, quizzes and real-life decision scenarios. Based on “A Strategic Guide to AI in Healthcare” by Professor Muthu Ramachandran.'),h('p',{},h('a',{class:'btn',href:'guide.html'},'New here? Read the quick guide'))));
    main.appendChild(h('div',{class:'stats'},
      h('div',{class:'stat'},h('b',{},String(st.xp)),'XP earned'),
      h('div',{class:'stat'},h('b',{},st.level),'Your level'),
      h('div',{class:'stat'},h('b',{},st.complete+' / '+st.chapters),'Chapters complete')));
    main.appendChild(h('h2',{},'Part I: Strategic Foundations'));
    var g=h('div',{class:'grid two'});
    CHAPTER_NUMBERS.forEach(function(n){
      var c=window.COURSE_DATA[n];if(!c)return;var s=chStats(c);
      g.appendChild(h('a',{class:'card chcard',href:'chapter.html?ch='+n},h('span',{class:'num'},'CHAPTER '+n+' · ~'+c.minutes+' MIN'),h('b',{},c.title),h('span',{class:'muted small'},c.tagline),
        h('div',{class:'bar'},h('i',{style:'width:'+pct(s.done/s.total)+'%'})),
        h('span',{class:'small'},s.complete?'✅ Complete · score '+pct(s.score)+'%':s.done?s.done+' of '+s.total+' activities done':'Not started')));
    });
    main.appendChild(g);
    var more=h('div',{class:'card'},h('h3',{},'Coming next'),h('p',{class:'muted small'},'The remaining chapters of the book will be added in later releases.'));
    var ul=h('ul',{class:'small muted'});LATER.forEach(function(t){ul.appendChild(h('li',{},t));});more.appendChild(ul);main.appendChild(more);
    // certificate
    var cert=h('div',{class:'card'},h('h3',{},'Certificate of completion'));
    var done=st.chapters>0&&st.complete===st.chapters;
    cert.appendChild(h('p',{class:'muted small'},done?'Well done. Type your name and print or save your certificate.':'Complete all four chapters to unlock your certificate.'));
    var inp=h('input',{type:'text',placeholder:'Your name',value:Store.d.name||'','aria-label':'Your name'});
    inp.addEventListener('input',function(){Store.setName(inp.value);});
    cert.appendChild(inp);
    cert.appendChild(h('div',{style:'margin-top:10px'},h('button',{class:'btn',disabled:!done,onclick:function(){printCert(st);}},'Print / save as PDF')));
    main.appendChild(cert);
    main.appendChild(h('p',{class:'small muted'},'Your progress is saved in this browser only. ',h('a',{href:'#',onclick:function(e){e.preventDefault();if(confirm('Reset all progress on this device?')){Store.reset();draw();}}},'Reset progress')));
  }
  function printCert(st){
    var old=document.querySelector('.cert');if(old)old.remove();
    var d=new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
    var c=h('div',{class:'cert'},h('h1',{},'Certificate of Completion'),h('p',{},'This certifies that'),h('div',{class:'nm'},Store.d.name||'__________________'),
      h('p',{},'has completed Part I (Chapters 1 to 4) of'),h('h2',{},'Strategic AI Leadership in Healthcare'),h('p',{},'with an average score of '+pct(st.avg)+'%'),
      h('p',{class:'small'},'Based on “A Strategic Guide to AI in Healthcare” by Professor Muthu Ramachandran'),h('p',{},d));
    document.body.appendChild(c);document.body.classList.add('printcert');
    setTimeout(function(){window.print();document.body.classList.remove('printcert');},50);
  }
}

window.SAIH={chapterPage:chapterPage,homePage:homePage,_store:Store,_A:A};
})();
