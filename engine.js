import story from './story-data.js';
export {story};
const dimensions=['memory','mercy','courage'];
const byChapter=new Map(story.chapters.map(c=>[c.id,story.passages.filter(p=>p.chapter===c.id)]));
const expanded=new Set(Array.from({length:243},(_,i)=>i).filter(i=>Math.floor((i+1)*179/243)>Math.floor(i*179/243)));
const number=path=>path.reduce((n,i)=>n*3+i,0);
export function isDecision(path){return path.length<5||path.length===5&&expanded.has(number(path));}
export function passageFor(path){if(!isDecision(path))return null;const pages=byChapter.get(path.length+1);return pages[number(path)%pages.length];}
function dominant(values,last={}){
 const maximum=Math.max(...dimensions.map(k=>values[k]));
 const candidates=dimensions.filter(k=>values[k]===maximum);
 return candidates.sort((a,b)=>(last[b]||0)-(last[a]||0)||dimensions.indexOf(a)-dimensions.indexOf(b))[0];
}
export function resolutionFor(choice){return choice.resolutionTag||({memory:'witness',mercy:'release',courage:'defy'}[dominant(choice.values)]);}
export function fresh(){return {version:1,path:[]};}
export function valid(state){
 if(!state||state.version!==1||!Array.isArray(state.path)||state.path.length>6||state.path.some(i=>!Number.isInteger(i)||i<0||i>2))return false;
 for(let i=0;i<state.path.length;i++)if(!isDecision(state.path.slice(0,i)))return false;
 return true;
}
export function journey(state){
 if(!valid(state))throw Error('Invalid story path');
 const totals={memory:0,mercy:0,courage:0},flags=new Set(),history=[];
 for(let i=0;i<state.path.length;i++){
  const page=passageFor(state.path.slice(0,i)),choice=page.choices[state.path[i]];
  for(const key of dimensions)totals[key]+=choice.values[key];
  choice.flags.forEach(flag=>flags.add(flag));history.push({pageId:page.id,title:page.title,choiceIndex:state.path[i],choice});
 }
 const latest=history.at(-1),disposition=dominant(totals,latest?.choice.values),resolution=latest?resolutionFor(latest.choice):null;
 const ending=!isDecision(state.path)?story.endings.find(e=>e.disposition===disposition&&e.resolutionTag===resolution):null;
 if(!isDecision(state.path)&&!ending)throw Error('This choice has no authored ending');
 return {history,latest,totals,flags:[...flags],disposition,resolution,ending,page:ending||passageFor(state.path)};
}
export function choose(state,index){if(!valid(state)||!isDecision(state.path)||!Number.isInteger(index)||index<0||index>2)throw Error('Choose one of the three available actions');return {version:1,path:[...state.path,index]};}
export function rewind(state){if(!valid(state))throw Error('Invalid story path');return {version:1,path:state.path.slice(0,-1)};}
export function enumerateRoutes(){
 const routes=[];function visit(state){if(!isDecision(state.path)){routes.push({...state,...journey(state)});return;}for(let i=0;i<3;i++)visit(choose(state,i));}visit(fresh());return routes;
}
export function artFor(page){
 const art=story.art[page.art];
 if(!art?.src||!art?.caption)throw Error('Missing authored horror illustration for '+page.id);
 return art;
}
