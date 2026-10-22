import {createNarrationOwner,mergeStored} from './ext/demos/story-library/narration-transport.js';
import {story,fresh,valid,journey,choose,rewind,artFor} from './engine.js';
import {createBookAudio} from './audio.js';
const SAVE='casey.thirteenth-lantern.story.v1';
const PAGE_ART=Object.freeze({
  "last-bus": {
    "src": "ext/media/horror/thirteenth-last-bus.png",
    "caption": "The last bus into October · Thirteenth Lantern"
  },
  "festival-records": {
    "src": "ext/media/horror/thirteenth-market.png",
    "caption": "A market of bottled memories · Thirteenth Lantern"
  },
  "festival-children": {
    "src": "ext/media/horror/thirteenth-shadows.png",
    "caption": "Shadows at the fountain · Thirteenth Lantern"
  },
  "festival-collectors": {
    "src": "ext/media/horror/thirteenth-procession.png",
    "caption": "The paper collectors · Thirteenth Lantern"
  },
  "manor-guestbook": {
    "src": "ext/media/horror/thirteenth-guestbook.png",
    "caption": "A guestbook without a host · Thirteenth Lantern"
  },
  "coatroom-faces": {
    "src": "ext/media/horror/thirteenth-coatroom.png",
    "caption": "What the guests left behind · Thirteenth Lantern"
  },
  "portrait-winter": {
    "src": "ext/media/horror/thirteenth-winter-portrait.png",
    "caption": "The winter painted over · Thirteenth Lantern"
  },
  "thirteenth-plate": {
    "src": "ext/media/horror/thirteenth-dining-place.png",
    "caption": "Dinner for an absent guest · Thirteenth Lantern"
  },
  "stairs-listen": {
    "src": "ext/media/horror/thirteenth-listening-stair.png",
    "caption": "The staircase that listens · Thirteenth Lantern"
  },
  "iona-workroom": {
    "src": "ext/media/horror/thirteenth-iona-workroom.png",
    "caption": "Iona’s interrupted work · Thirteenth Lantern"
  },
  "bellwrought-room": {
    "src": "ext/media/horror/thirteenth-daniel-room.png",
    "caption": "The room Daniel could not leave · Thirteenth Lantern"
  },
  "cellar-covenant": {
    "src": "ext/media/horror/thirteenth-cellar-covenant.png",
    "caption": "The agreement under the floor · Thirteenth Lantern"
  },
  "bone-orchard": {
    "src": "ext/media/horror/thirteenth-bone-orchard.png",
    "caption": "Apples that remember teeth · Thirteenth Lantern"
  },
  "quiet-coffin": {
    "src": "ext/media/horror/thirteenth-quiet-coffin.png",
    "caption": "The coffin that held a voice · Thirteenth Lantern"
  },
  "king-audience": {
    "src": "ext/media/horror/thirteenth-king-audience.png",
    "caption": "The king who had been listening · Thirteenth Lantern"
  },
  "sleepers-gallery": {
    "src": "ext/media/horror/thirteenth-sleepers-gallery.png",
    "caption": "Thirteen separate breaths · Thirteenth Lantern"
  },
  "winter-window": {
    "src": "ext/media/horror/thirteenth-winter-window.png",
    "caption": "The window where winter waited · Thirteenth Lantern"
  },
  "iona-clock": {
    "src": "ext/media/horror/thirteenth-iona-clock.png",
    "caption": "A clock with no spare life · Thirteenth Lantern"
  },
  "names-at-dawn": {
    "src": "ext/media/horror/thirteenth-names-at-dawn.png",
    "caption": "The names at dawn · Thirteenth Lantern"
  },
  "winter-finished": {
    "src": "ext/media/horror/thirteenth-winter-finished.png",
    "caption": "The winter allowed to end · Thirteenth Lantern"
  },
  "archive-open": {
    "src": "ext/media/horror/thirteenth-archive-open.png",
    "caption": "The archive with no locked shelf · Thirteenth Lantern"
  },
  "borrowed-witness": {
    "src": "ext/media/horror/thirteenth-borrowed-witness.png",
    "caption": "The witness who paid · Thirteenth Lantern"
  },
  "children-home": {
    "src": "ext/media/horror/thirteenth-doors-inward.png",
    "caption": "The doors that opened inward · Thirteenth Lantern"
  },
  "lantern-common": {
    "src": "ext/media/horror/thirteenth-light-common.png",
    "caption": "A light nobody owned · Thirteenth Lantern"
  },
  "monsters-unbound": {
    "src": "ext/media/horror/thirteenth-monsters-unbound.png",
    "caption": "Those who were more than their shapes · Thirteenth Lantern"
  },
  "long-watch": {
    "src": "ext/media/horror/thirteenth-long-watch.png",
    "caption": "The long watch honestly named · Thirteenth Lantern"
  },
  "crown-broken": {
    "src": "ext/media/horror/thirteenth-crown-broken.png",
    "caption": "The crown in the river · Thirteenth Lantern"
  },
  "dawn-road": {
    "src": "ext/media/horror/thirteenth-dawn-road.png",
    "caption": "The road beyond the festival · Thirteenth Lantern"
  },
  "town-unmasked": {
    "src": "ext/media/horror/thirteenth-town-unmasked.png",
    "caption": "The festival that stopped applauding · Thirteenth Lantern"
  },
  "one-more-year": {
    "src": "ext/media/horror/thirteenth-one-more-year.png",
    "caption": "One more year is still a bargain · Thirteenth Lantern"
  },
  "sexton-water": {
    "src": "ext/media/horror/thirteenth-sexton-water.png",
    "caption": "The keeper of the drowned names · Thirteenth Lantern"
  },
  "cantor-threshold": {
    "src": "ext/media/horror/thirteenth-cantor-threshold.png",
    "caption": "The choir with one empty throat · Thirteenth Lantern"
  },
  "unclaimed-room": {
    "src": "ext/media/horror/thirteenth-unclaimed-room.png",
    "caption": "The waiting room of the unclaimed · Thirteenth Lantern"
  },
  "grave-count": {
    "src": "ext/media/horror/thirteenth-grave-count.png",
    "caption": "The graveyard's unfinished count · Thirteenth Lantern"
  },
  "river-letter": {
    "src": "ext/media/horror/thirteenth-river-letter.png",
    "caption": "A letter from before the flood · Thirteenth Lantern"
  },
  "castle-road": {
    "src": "ext/media/horror/thirteenth-castle-road.png",
    "caption": "The road that returned the footsteps · Thirteenth Lantern"
  },
  "widow-doors": {
    "src": "ext/media/horror/thirteenth-widow-doors.png",
    "caption": "The doors the widow held open · Thirteenth Lantern"
  },
  "cantor-court": {
    "src": "ext/media/horror/thirteenth-cantor-court.png",
    "caption": "The court of perfect excuses · Thirteenth Lantern"
  },
  "sexton-ledger": {
    "src": "ext/media/horror/thirteenth-sexton-ledger.png",
    "caption": "The ledger of those who could not sign · Thirteenth Lantern"
  },
  "wolf-stair": {
    "src": "ext/media/horror/thirteenth-wolf-stair.png",
    "caption": "The creature on the ward stair · Thirteenth Lantern"
  },
  "crown-chain": {
    "src": "ext/media/horror/thirteenth-crown-chain.png",
    "caption": "The chain above the empty chair · Thirteenth Lantern"
  },
  "names-flame": {
    "src": "ext/media/horror/thirteenth-names-flame.png",
    "caption": "What the flame is allowed to keep · Thirteenth Lantern"
  },
  "home-handles": {
    "src": "ext/media/horror/thirteenth-home-handles.png",
    "caption": "A handle on the inside · Thirteenth Lantern"
  },
  "school-bell": {
    "src": "ext/media/horror/thirteenth-school-bell.png",
    "caption": "The bell that must learn a different call · Thirteenth Lantern"
  },
  "town-answer": {
    "src": "ext/media/horror/thirteenth-town-answer.png",
    "caption": "The town on the other side of the window · Thirteenth Lantern"
  },
  "king-debt": {
    "src": "ext/media/horror/thirteenth-king-debt.png",
    "caption": "The place offered beside the King · Thirteenth Lantern"
  },
  "memory-price": {
    "src": "ext/media/horror/thirteenth-memory-price.png",
    "caption": "The memory nobody else can offer · Thirteenth Lantern"
  },
  "last-breath": {
    "src": "ext/media/horror/thirteenth-last-breath.png",
    "caption": "The last breath before morning · Thirteenth Lantern"
  }
});
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function createBookApp({root=document,storage,audioFactory=createBookAudio,autostart=new URLSearchParams(window.location?.search||'').get('autostart')==='1'}={}){
 const $=id=>root.querySelector('#'+id);
 let state=fresh(),hasSave=false,storageOK=true,started=false,choosing=false,musicOn=true,voiceOn=true,playing=false,suspended=true,destroyed=false,audioEpoch=0,viewDepth=null,lastPositionTick=-1;
 if(storage===undefined){try{storage=globalThis.localStorage;}catch{storage=null;}}
 if(!storage)storageOK=false;
 try{const saved=JSON.parse(storage?.getItem(SAVE)||'null');if(valid(saved)){state=saved;hasSave=saved.path.length>0;}}catch{storageOK=false;}
 const audio=audioFactory({onStatus:text=>{if(!destroyed)$('audio-status').textContent=text||'';},onError:error=>{if(!destroyed)$('audio-status').textContent=error?.message||'The text is available. Replay retries recorded narration.';}});
  const owner=createNarrationOwner({bookId:'thirteenth-lantern',onSuspend:()=>stopSound()});
  const view=()=>journey(viewDepth===null?state:{version:state.version,path:state.path.slice(0,viewDepth)});
  const narrativeOptions=()=>{const latest=view().latest;return latest?{consequence:{pageId:latest.pageId,choice:latest.choice}}:{};};
  function checkpoints(){
   const options=Array.from({length:state.path.length+1},(_,depth)=>{const p=journey({version:state.version,path:state.path.slice(0,depth)}).page;return '<option value="'+depth+'">'+(depth+1)+' · '+esc(p.title)+(depth===state.path.length?' · current':'')+'</option>';});
   $('route-checkpoints').innerHTML=options.join('');$('route-checkpoints').value=String(viewDepth??state.path.length);
   $('route-current').hidden=viewDepth===null;$('back').disabled=viewDepth!==null||!state.path.length;
  }
 function save(){hasSave=state.path.length>0;try{storage.setItem(SAVE,JSON.stringify(state));storageOK=true;}catch{storageOK=false;}$('saved').textContent=storageOK?'Saved on this device.':'Kept in this tab only.';$('resume').hidden=!hasSave;}
 function read(page,options={}){if(!playing||suspended||destroyed||root.hidden)return Promise.resolve();const epoch=audioEpoch;return Promise.resolve(audio.read(page,options)).catch(()=>{if(!destroyed&&epoch===audioEpoch)$('audio-status').textContent='The text is available. Replay retries recorded narration.';});}
 function picture(page){const art=PAGE_ART[page.id]||artFor(page);$('scene').src=art.src;$('scene').alt=page.title+' · '+art.caption;$('scene-caption').textContent=art.caption;}
 function render({consequence=null,focus=true,narrate=true,opening=false}={}){
  if(destroyed)return;
  const displayed=view(),page=displayed.page;audioEpoch++;started=true;$('landing').hidden=true;$('reader').hidden=false;
  $('chapter').textContent=displayed.ending?'ENDING':`CHAPTER ${page.chapter} · ${story.chapters.find(c=>c.id===page.chapter).title}`;
  $('page-title').textContent=page.title;picture(page);
  const latest=displayed.latest;const unit=page.id+'|'+(latest?'choice:'+latest.pageId+':'+latest.choice.id:'');if(audio.position?.().unit!==unit)audio.stopNarration(true);
  $('passage').innerHTML=(latest?`<aside class="last-choice"><strong>${esc(latest.choice.label)}</strong><p>${esc(latest.choice.consequence)}</p></aside>`:'')+page.paragraphs.map(text=>`<p>${esc(text)}</p>`).join('')+(page.dialogue||[]).map(line=>`<blockquote class="dialogue"><cite>${esc(story.characters.find(c=>c.id===line.speaker)?.name||line.speaker)}</cite>${esc(line.text)}</blockquote>`).join('');
  $('passage').scrollTop=0;$('back').disabled=!state.path.length;$('choices').replaceChildren();
  if(displayed.ending){const button=root.createElement('button');button.className='primary';button.textContent='Begin another journey';button.onclick=()=>cover();$('choices').append(button);}
  else if(viewDepth===null) page.choices.forEach((choice,index)=>{const button=root.createElement('button');button.className='choice';button.dataset.choice=String(index);button.innerHTML=`${esc(choice.label)}<span aria-hidden="true">›</span>`;button.onclick=event=>{if(event?.detail>1)return;chooseAction(index);};$('choices').append(button);});
  checkpoints();soundControls();if(viewDepth!==null){$('choices').textContent='Earlier checkpoint · your current journey is unchanged.';}const readingColumn=root.querySelector('.story-page');if(readingColumn)readingColumn.scrollTop=0;if(focus)$('page-title').focus({preventScroll:true});if(narrate&&voiceOn&&playing)void read(page,narrativeOptions());
 }
 function chooseAction(index){
  if(destroyed||choosing||!started||viewDepth!==null||journey(state).ending)return false;
  const page=journey(state).page,choice=page.choices[index];if(!choice)return false;
  choosing=true;viewDepth=null;state=choose(state,index);save();if(playing)audio.effect(journey(state).ending?'ending':'turn');render({consequence:{pageId:page.id,choice}});queueMicrotask(()=>choosing=false);return true;
 }
 function cover(){stopSound();if(destroyed)return;audioEpoch++;audio.stopNarration();started=false;soundControls();$('landing').hidden=false;$('reader').hidden=true;$('resume').hidden=!hasSave;$('start').focus({preventScroll:true});}
 function soundControls(){
  $('play').textContent=playing?'Pause':'Play';$('play').setAttribute('aria-pressed',String(playing));$('play').setAttribute('aria-label',playing?'Pause narration and music':'Play narration and music');
 }
 function stopSound(){playing=false;audioEpoch++;audio.suspend();owner.release();soundControls();}
 function playSound(){
  if(destroyed||root.hidden||!started||!owner.claim())return;playing=true;suspended=false;audioEpoch++;const epoch=audioEpoch;soundControls();
  audio.setMusic(musicOn);audio.setVoice(voiceOn);
  void Promise.resolve(audio.start({activation:true})).then(()=>{if(!destroyed&&playing&&!suspended&&epoch===audioEpoch&&voiceOn)return read(view().page,narrativeOptions());}).catch(()=>{if(epoch===audioEpoch){stopSound();$('audio-status').textContent='Sound could not start. Press Play to retry.';}});
 }
 function begin(resume=false){if(destroyed)return;stopSound();viewDepth=null;suspended=false;if(!resume){state=fresh();save();}render({opening:true,narrate:false});}
 $('play').onclick=()=>playing?stopSound():playSound();soundControls();
  $('rewind-audio').onclick=()=>audio.skip(-15);$('forward-audio').onclick=()=>audio.skip(15);
  $('route-checkpoints').onchange=()=>{stopSound();const n=Number($('route-checkpoints').value);if(Number.isInteger(n)&&n>=0&&n<=state.path.length){viewDepth=n===state.path.length?null:n;render({narrate:false});}};
  $('route-current').onclick=()=>{stopSound();viewDepth=null;render({narrate:false});};
  $('return-library').onclick=()=>{stopSound();if(window.parent!==window)window.parent.postMessage({type:'storybook-library'},window.location.origin);else window.location.href='https://caseyshingledecker.com/demos/story-library/library.html';};
 $('start').onclick=()=>begin(false);$('resume').onclick=()=>begin(true);$('resume').hidden=!hasSave;
 $('home-link').onclick=event=>{event.preventDefault();cover();};
 $('back').onclick=()=>{if(destroyed||!state.path.length)return;viewDepth=null;state=rewind(state);save();if(playing)audio.effect('turn');render();};
 $('read-again').onclick=()=>{if(destroyed)return;audio.restart();if(!playing)playSound();else{audioEpoch++;void read(view().page,narrativeOptions());}};
 $('music').onclick=()=>{if(destroyed)return;musicOn=!musicOn;audio.setMusic(musicOn);$('music').textContent=musicOn?'Music on':'Music off';$('music').setAttribute('aria-pressed',String(musicOn));};
 $('voice').onclick=()=>{if(destroyed)return;audioEpoch++;voiceOn=!voiceOn;audio.setVoice(voiceOn);$('voice').textContent=voiceOn?'Voice on':'Voice off';$('voice').setAttribute('aria-pressed',String(voiceOn));if(voiceOn&&playing){suspended=false;void Promise.resolve(audio.start()).catch(()=>{});void read(view().page,narrativeOptions());}};
 const unload=()=>{playing=false;soundControls();audioEpoch++;suspended=true;audio.suspend();};
 const visibility=()=>{if(root.hidden)unload();};
 const message=event=>{if(event.origin===window.location?.origin&&event.source===window.parent&&event.data?.type==='storybook-suspend')unload();};
 root.addEventListener('visibilitychange',visibility);window.addEventListener('pagehide',unload);window.addEventListener('message',message);
 $('audio-status').textContent='Press Play when you want narration and music.';
 return {get state(){return structuredClone(state);},get started(){return started;},begin,choose:chooseAction,cover,render,suspend:unload,destroy(){if(destroyed)return;destroyed=true;unload();audio.dispose();owner.destroy();root.removeEventListener('visibilitychange',visibility);window.removeEventListener('pagehide',unload);window.removeEventListener('message',message);}};
}
if(typeof document!=='undefined')createBookApp();

