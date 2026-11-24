const ts=require('typescript'),fs=require('fs'),path=require('path'),Module=require('module');
function load(f){const src=fs.readFileSync(f,'utf8');const out=ts.transpileModule(src,{compilerOptions:{module:'commonjs',target:'es2019'}}).outputText;const m=new Module(f);m.filename=f;m.paths=Module._nodeModulePaths(path.dirname(f));m.require=(p)=>{if(p.startsWith('.')){let r=path.resolve(path.dirname(f),p);if(!fs.existsSync(r+'.ts'))r+='/index';return load(r+'.ts')}return require(p)};m._compile(out,f);return m.exports}
const {NEW_SUBURB_PAGES:P}=load(path.resolve('lib/suburbs-new.ts'));
const all=new Set();
const {AREA_PAGES}=load(path.resolve('lib/areas.ts'));AREA_PAGES.forEach(p=>all.add(p.slug));
const wc=p=>[p.intro,...p.sections.map(s=>s.body),...(p.extra||[]),...(p.faqs||[]).map(f=>f.a)].join(' ').split(/\s+/).length;
const w=P.map(wc).sort((a,b)=>a-b);
console.log('n',P.length,'min',w[0],'median',w[w.length>>1],'max',w[w.length-1],'<250',w.filter(x=>x<250).length);
const SA=Object.keys(load(path.resolve('lib/suburbs-search-a.ts')).SEARCH_A),SB=Object.keys(load(path.resolve('lib/suburbs-search-b.ts')).SEARCH_B);
const names=new Set(P.map(p=>p.city));
console.log('search keys w/o page:',[...SA,...SB].filter(k=>!names.has(k)));
console.log('pages w/o search para:',P.filter(p=>!(SA.includes(p.city)||SB.includes(p.city))).map(p=>p.city).join(', '));
console.log('low nearby:',P.filter(p=>p.nearby.filter(s=>all.has(s)).length<2).map(p=>p.slug+':'+p.nearby.filter(s=>all.has(s)).length).join(', '));
