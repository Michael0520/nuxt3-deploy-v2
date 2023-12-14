import{v as Z,r as g,x as ee,y as te,z as ne,A as j,B as R,C as se,D as re,h as C,E as G,k as U,G as B,H as ae,I as oe,o as A,c as F,a as v,J as ie,K as ce,L as J,M as Y,N as ue,f as M,O as le,t as V,d as fe,g as de,P as he,Q as pe,R as ye,b as E,S as K,w as L,T as me}from"./entry.7af1ef99.js";import{_ as ge}from"./_plugin-vue_export-helper.c27b6911.js";function _e(...n){var p;const s=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(s);let[r,t,e={}]=n;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=se(),o=()=>null,l=()=>a.isHydrating?a.payload.data[r]:a.static.data[r];e.server=e.server??!0,e.default=e.default??o,e.getCachedData=e.getCachedData??l,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??Z.deep;const c=()=>![null,void 0].includes(e.getCachedData(r));if(!a._asyncData[r]||!e.immediate){(p=a.payload._errors)[r]??(p[r]=null);const m=e.deep?g:ee;a._asyncData[r]={data:m(e.getCachedData(r)??e.default()),pending:g(!c()),error:te(a.payload._errors,r),status:g("idle")}}const i={...a._asyncData[r]};i.refresh=i.execute=(m={})=>{if(a._asyncDataPromises[r]){if(m.dedupe===!1)return a._asyncDataPromises[r];a._asyncDataPromises[r].cancelled=!0}if((m._initial||a.isHydrating&&m._initial!==!1)&&c())return Promise.resolve(e.getCachedData(r));i.pending.value=!0,i.status.value="pending";const w=new Promise((d,y)=>{try{d(t(a))}catch(b){y(b)}}).then(d=>{if(w.cancelled)return a._asyncDataPromises[r];let y=d;e.transform&&(y=e.transform(d)),e.pick&&(y=ve(y,e.pick)),a.payload.data[r]=y,i.data.value=y,i.error.value=null,i.status.value="success"}).catch(d=>{if(w.cancelled)return a._asyncDataPromises[r];i.error.value=re(d),i.data.value=C(e.default()),i.status.value="error"}).finally(()=>{w.cancelled||(i.pending.value=!1,delete a._asyncDataPromises[r])});return a._asyncDataPromises[r]=w,a._asyncDataPromises[r]};const f=()=>i.refresh({_initial:!0}),h=e.server!==!1&&a.payload.serverRendered;{const m=G();if(m&&!m._nuxtOnBeforeMountCbs){m._nuxtOnBeforeMountCbs=[];const d=m._nuxtOnBeforeMountCbs;m&&(ne(()=>{d.forEach(y=>{y()}),d.splice(0,d.length)}),j(()=>d.splice(0,d.length)))}h&&a.isHydrating&&(i.error.value||c())?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):m&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?m._nuxtOnBeforeMountCbs.push(f):e.immediate&&f(),e.watch&&R(e.watch,()=>i.refresh());const w=a.hook("app:data:refresh",async d=>{(!d||d.includes(r))&&await i.refresh()});m&&j(w)}const u=Promise.resolve(a._asyncDataPromises[r]).then(()=>i);return Object.assign(u,i),u}function ve(n,s){const r={};for(const t of s)r[t]=n[t];return r}const H=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function we(n,s){s?s={...H,...s}:s=H;const r=Q(s);return r.dispatch(n),r.toString()}const xe=Object.freeze(["prototype","__proto__","constructor"]);function Q(n){let s="",r=new Map;const t=e=>{s+=e};return{toString(){return s},getContext(){return r},dispatch(e){return n.replacer&&(e=n.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const a=Object.prototype.toString.call(e);let o="";const l=a.length;l<10?o="unknown:["+a+"]":o=a.slice(8,l-1),o=o.toLowerCase();let c=null;if((c=r.get(e))===void 0)r.set(e,r.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](e):n.ignoreUnknown||this.unkown(e,o);else{let i=Object.keys(e);n.unorderedObjects&&(i=i.sort());let f=[];n.respectType!==!1&&!W(e)&&(f=xe),n.excludeKeys&&(i=i.filter(u=>!n.excludeKeys(u)),f=f.filter(u=>!n.excludeKeys(u))),t("object:"+(i.length+f.length)+":");const h=u=>{this.dispatch(u),t(":"),n.excludeValues||this.dispatch(e[u]),t(",")};for(const u of i)h(u);for(const u of f)h(u)}},array(e,a){if(a=a===void 0?n.unorderedArrays!==!1:a,t("array:"+e.length+":"),!a||e.length<=1){for(const c of e)this.dispatch(c);return}const o=new Map,l=e.map(c=>{const i=Q(n);i.dispatch(c);for(const[f,h]of i.getContext())o.set(f,h);return i.toString()});return r=o,l.sort(),this.array(l,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,a){if(t(a),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),W(e)?this.dispatch("[native]"):this.dispatch(e.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),n.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const a=[...e];return this.array(a,n.unorderedSets!==!1)},set(e){t("set:");const a=[...e];return this.array(a,n.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(n.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const X="[native code] }",be=X.length;function W(n){return typeof n!="function"?!1:Function.prototype.toString.call(n).slice(-be)===X}class D{constructor(s,r){s=this.words=s||[],this.sigBytes=r===void 0?s.length*4:r}toString(s){return(s||ke).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let r=0;r<s.sigBytes;r++){const t=s.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=t<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<s.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=s.words[r>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new D([...this.words])}}const ke={stringify(n){const s=[];for(let r=0;r<n.sigBytes;r++){const t=n.words[r>>>2]>>>24-r%4*8&255;s.push((t>>>4).toString(16),(t&15).toString(16))}return s.join("")}},De={stringify(n){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let t=0;t<n.sigBytes;t+=3){const e=n.words[t>>>2]>>>24-t%4*8&255,a=n.words[t+1>>>2]>>>24-(t+1)%4*8&255,o=n.words[t+2>>>2]>>>24-(t+2)%4*8&255,l=e<<16|a<<8|o;for(let c=0;c<4&&t*8+c*6<n.sigBytes*8;c++)r.push(s.charAt(l>>>6*(3-c)&63))}return r.join("")}},Se={parse(n){const s=n.length,r=[];for(let t=0;t<s;t++)r[t>>>2]|=(n.charCodeAt(t)&255)<<24-t%4*8;return new D(r,s)}},Be={parse(n){return Se.parse(unescape(encodeURIComponent(n)))}};class Ae{constructor(){this._data=new D,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new D,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=Be.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,r){}_process(s){let r,t=this._data.sigBytes/(this.blockSize*4);s?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,a=Math.min(e*4,this._data.sigBytes);if(e){for(let o=0;o<e;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,e),this._data.sigBytes-=a}return new D(r,a)}}class Ce extends Ae{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const q=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Oe=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],S=[];class Fe extends Ce{constructor(){super(...arguments),this._hash=new D([...q])}reset(){super.reset(),this._hash=new D([...q])}_doProcessBlock(s,r){const t=this._hash.words;let e=t[0],a=t[1],o=t[2],l=t[3],c=t[4],i=t[5],f=t[6],h=t[7];for(let u=0;u<64;u++){if(u<16)S[u]=s[r+u]|0;else{const _=S[u-15],x=(_<<25|_>>>7)^(_<<14|_>>>18)^_>>>3,O=S[u-2],k=(O<<15|O>>>17)^(O<<13|O>>>19)^O>>>10;S[u]=x+S[u-7]+k+S[u-16]}const p=c&i^~c&f,m=e&a^e&o^a&o,w=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),d=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),y=h+d+p+Oe[u]+S[u],b=w+m;h=f,f=i,i=c,c=l+y|0,l=o,o=a,a=e,e=y+b|0}t[0]=t[0]+e|0,t[1]=t[1]+a|0,t[2]=t[2]+o|0,t[3]=t[3]+l|0,t[4]=t[4]+c|0,t[5]=t[5]+i|0,t[6]=t[6]+f|0,t[7]=t[7]+h|0}finalize(s){super.finalize(s);const r=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(t+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Te(n){return new Fe().finalize(n).toString(De)}function $e(n,s={}){const r=typeof n=="string"?n:we(n,s);return Te(r).slice(0,10)}function Me(n,s,r){const[t={},e]=typeof s=="string"?[{},s]:[s,r],a=U(()=>{let k=n;return typeof k=="function"&&(k=k()),B(k)}),o=t.key||$e([e,typeof a.value=="string"?a.value:"",...Ee(t)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const l=o===e?"$f"+o:o;if(!t.baseURL&&typeof a.value=="string"&&a.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:i,default:f,transform:h,pick:u,watch:p,immediate:m,getCachedData:w,deep:d,...y}=t,b=ae({...oe,...y,cache:typeof t.cache=="boolean"?void 0:t.cache}),_={server:c,lazy:i,default:f,transform:h,pick:u,immediate:m,getCachedData:w,deep:d,watch:p===!1?[]:[b,a,...p||[]]};let x;return _e(l,()=>{var I;(I=x==null?void 0:x.abort)==null||I.call(x),x=typeof AbortController<"u"?new AbortController:{};const k=B(t.timeout);return k&&setTimeout(()=>x.abort(),k),(t.$fetch||globalThis.$fetch)(a.value,{signal:x.signal,...b})},_)}function Ee(n){var r;const s=[((r=B(n.method))==null?void 0:r.toUpperCase())||"GET",B(n.baseURL)];for(const t of[n.params||n.query]){const e=B(t);if(!e)continue;const a={},o=Array.isArray(e)?e:Object.entries(e);for(const[l,c]of o)a[B(l)]=B(c);s.push(a)}return s}const Le=""+globalThis.__publicAssetsURL("nuxt.svg"),Ne=""+globalThis.__publicAssetsURL("vite.png"),Pe={},Re={"inline-flex":"","cursor-default":"","text-2xl":"","font-300":""},Ue=v("div",{flex:"","flex-col":"","children:mx-auto":""},[v("img",{"inline-block":"","h-18":"","w-18":"",src:Le}),v("span",{"mt--2":"","text-green5":""},"Nuxt 3")],-1),ze=v("div",{text:"3xl gray4",m:"x-4 y-auto","i-carbon-add":"",transform:"","transition-all-500":"","hover:rotate-135":""},null,-1),Ie=v("div",{flex:"","flex-col":"","children:mx-auto":""},[v("img",{"inline-block":"","h-18":"","w-18":"",src:Ne}),v("span",{"mt--2":"","text-purple5":""},"Vitesse")],-1),je=[Ue,ze,Ie];function Ve(n,s){return A(),F("div",Re,je)}const Ke=ge(Pe,[["render",Ve]]);function $(n){return ie()?(ce(n),!0):!1}function T(n){return typeof n=="function"?n():C(n)}const P=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const He=Object.prototype.toString,We=n=>He.call(n)==="[object Object]",qe=()=>{};function Ge(n,s=1e3,r={}){const{immediate:t=!0,immediateCallback:e=!1}=r;let a=null;const o=g(!1);function l(){a&&(clearInterval(a),a=null)}function c(){o.value=!1,l()}function i(){const f=T(s);f<=0||(o.value=!0,e&&n(),l(),a=setInterval(n,f))}if(t&&P&&i(),J(s)||typeof s=="function"){const f=R(s,()=>{o.value&&P&&i()});$(f)}return $(c),{isActive:o,pause:c,resume:i}}function Je(n){var s;const r=T(n);return(s=r==null?void 0:r.$el)!=null?s:r}const z=P?window:void 0;function N(...n){let s,r,t,e;if(typeof n[0]=="string"||Array.isArray(n[0])?([r,t,e]=n,s=z):[s,r,t,e]=n,!s)return qe;Array.isArray(r)||(r=[r]),Array.isArray(t)||(t=[t]);const a=[],o=()=>{a.forEach(f=>f()),a.length=0},l=(f,h,u,p)=>(f.addEventListener(h,u,p),()=>f.removeEventListener(h,u,p)),c=R(()=>[Je(s),T(e)],([f,h])=>{if(o(),!f)return;const u=We(h)?{...h}:h;a.push(...r.flatMap(p=>t.map(m=>l(f,p,m,u))))},{immediate:!0,flush:"post"}),i=()=>{c(),o()};return $(i),i}function Ye(){const n=g(!1);return G()&&Y(()=>{n.value=!0}),n}function Qe(n){const s=Ye();return U(()=>(s.value,!!n()))}function Xe(n,s={}){const{immediate:r=!0,fpsLimit:t=void 0,window:e=z}=s,a=g(!1),o=t?1e3/t:null;let l=0,c=null;function i(u){if(!a.value||!e)return;const p=u-(l||u);if(o&&p<o){c=e.requestAnimationFrame(i);return}n({delta:p,timestamp:u}),l=u,c=e.requestAnimationFrame(i)}function f(){!a.value&&e&&(a.value=!0,c=e.requestAnimationFrame(i))}function h(){a.value=!1,c!=null&&e&&(e.cancelAnimationFrame(c),c=null)}return r&&f(),$(h),{isActive:ue(a),pause:h,resume:f}}function Ze(n={}){const{window:s=z}=n,r=s==null?void 0:s.navigator,t=Qe(()=>r&&"connection"in r),e=g(!0),a=g(!1),o=g(void 0),l=g(void 0),c=g(void 0),i=g(void 0),f=g(void 0),h=g(void 0),u=g("unknown"),p=t.value&&r.connection;function m(){r&&(e.value=r.onLine,o.value=e.value?void 0:Date.now(),l.value=e.value?Date.now():void 0,p&&(c.value=p.downlink,i.value=p.downlinkMax,h.value=p.effectiveType,f.value=p.rtt,a.value=p.saveData,u.value=p.type))}return s&&(N(s,"offline",()=>{e.value=!1,o.value=Date.now()}),N(s,"online",()=>{e.value=!0,l.value=Date.now()})),p&&N(p,"change",m,!1),m(),{isSupported:t,isOnline:e,saveData:a,offlineAt:o,onlineAt:l,downlink:c,downlinkMax:i,effectiveType:h,rtt:f,type:u}}function et(n={}){const{controls:s=!1,interval:r="requestAnimationFrame"}=n,t=g(new Date),e=()=>t.value=new Date,a=r==="requestAnimationFrame"?Xe(e,{immediate:!0}):Ge(e,r,{immediate:!0});return s?{now:t,...a}:t}function tt(n={}){const{isOnline:s}=Ze(n);return s}const nt=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:Number.POSITIVE_INFINITY,value:31536e6,name:"year"}],st={justNow:"just now",past:n=>n.match(/\d/)?`${n} ago`:n,future:n=>n.match(/\d/)?`in ${n}`:n,month:(n,s)=>n===1?s?"last month":"next month":`${n} month${n>1?"s":""}`,year:(n,s)=>n===1?s?"last year":"next year":`${n} year${n>1?"s":""}`,day:(n,s)=>n===1?s?"yesterday":"tomorrow":`${n} day${n>1?"s":""}`,week:(n,s)=>n===1?s?"last week":"next week":`${n} week${n>1?"s":""}`,hour:n=>`${n} hour${n>1?"s":""}`,minute:n=>`${n} minute${n>1?"s":""}`,second:n=>`${n} second${n>1?"s":""}`,invalid:""};function rt(n){return n.toISOString().slice(0,10)}function at(n,s={}){const{controls:r=!1,updateInterval:t=3e4}=s,{now:e,...a}=et({interval:t,controls:!0}),o=U(()=>ot(new Date(T(n)),s,T(e)));return r?{timeAgo:o,...a}:o}function ot(n,s={},r=Date.now()){var t;const{max:e,messages:a=st,fullDateFormatter:o=rt,units:l=nt,showSecond:c=!1,rounding:i="round"}=s,f=typeof i=="number"?d=>+d.toFixed(i):Math[i],h=+r-+n,u=Math.abs(h);function p(d,y){return f(Math.abs(d)/y.value)}function m(d,y){const b=p(d,y),_=d>0,x=w(y.name,b,_);return w(_?"past":"future",x,_)}function w(d,y,b){const _=a[d];return typeof _=="function"?_(y,b):_.replace("{0}",y.toString())}if(u<6e4&&!c)return a.justNow;if(typeof e=="number"&&u>e)return o(new Date(n));if(typeof e=="string"){const d=(t=l.find(y=>y.name===e))==null?void 0:t.max;if(d&&u>d)return o(new Date(n))}for(const[d,y]of l.entries()){if(p(h,y)<=0&&l[d-1])return m(h,l[d-1]);if(u<y.max)return m(h,y)}return a.invalid}const it={"text-gray:80":""},ct={"text-gray":"","font-500":""},ut={"text-gray":""},lt=M({__name:"PageView",async setup(n){let s,r;const{data:t}=([s,r]=le(()=>Me("/api/pageview","$GYaFMVMIJ4")),s=await s,r(),s),e=at(()=>{var a;return((a=t.value)==null?void 0:a.startAt)||0});return(a,o)=>{var l;return A(),F("div",it,[v("span",ct,V((l=C(t))==null?void 0:l.pageview),1),fe(" page views since "),v("span",ut,V(C(e)),1)])}}}),ft=M({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(n,{slots:s,attrs:r}){const t=g(!1);return Y(()=>{t.value=!0}),e=>{var c;if(t.value)return(c=s.default)==null?void 0:c.call(s);const a=s.fallback||s.placeholder;if(a)return a();const o=e.fallback||e.placeholder||"",l=e.fallbackTag||e.placeholderTag||"span";return F(l,r,o)}}}),dt=["onKeydown"],ht=["disabled"],pt=M({__name:"InputEntry",setup(n){const s=g(""),r=de();function t(){s.value&&r.push(`/hi/${encodeURIComponent(s.value)}`)}return(e,a)=>(A(),F("div",null,[he(v("input",{id:"input","onUpdate:modelValue":a[0]||(a[0]=o=>J(s)?s.value=o:null),placeholder:"What's your name?",type:"text",autocomplete:"off",p:"x-4 y-2",m:"t-5",w:"250px",text:"center",bg:"transparent",border:"~ rounded gray-200 dark:gray-700",outline:"none active:none",onKeydown:ye(t,["enter"])},null,40,dt),[[pe,C(s)]]),v("div",null,[v("button",{"m-3":"","text-sm":"",btn:"",disabled:!C(s),onClick:t}," GO ",8,ht)])]))}}),yt={key:1,"text-gray:80":""},mt=v("div",{italic:"",op50:""},[v("span",{"animate-pulse":""},"Loading...")],-1),wt=M({__name:"index",setup(n){const s=tt();return(r,t)=>{const e=Ke,a=lt,o=ft,l=pt;return A(),F("div",null,[E(e,{"mb-6":""}),(A(),K(me,null,{fallback:L(()=>[mt]),default:L(()=>[E(o,null,{default:L(()=>[C(s)?(A(),K(a,{key:0})):(A(),F("div",yt," You're offline "))]),_:1})]),_:1})),E(l)])}}});export{wt as default};