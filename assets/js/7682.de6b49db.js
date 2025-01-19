"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([["7682"],{7173:function(){},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return u}});var r=n(67294);let o={},i=r.createContext(o);function u(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),r.createElement(i.Provider,{value:t},e.children)}},63109:function(e,t,n){n.d(t,{Z:()=>d});var r=n("85893"),o=n("67294"),i=n("20115"),u=n("7714"),l=n("34834"),c=n("75507");function a(e,t,n,r,o,i,u){let l=[],a=u.reduce((e,t)=>e+t,0);for(let s=0;s<e.length-1;s+=1){let f=t.map((e,t)=>({photo:e,index:t})).slice(e[s],e[s+1]),d=u.reduce((e,t,n)=>e+(i[s]-i[n])*t,0),h=(o-(e.length-2)*n-2*(e.length-1)*r-d)*u[s]/a;l.push({photos:f.map(({photo:e,index:t})=>({photo:e,index:t,width:h,height:h/(0,c.bC)(e)})),variables:{adjustedGaps:d,columnRatio:u[s]}})}return{tracks:l,variables:{totalRatio:a}}}let s=(0,o.forwardRef)(function({photos:e,breakpoints:t,defaultContainerWidth:n,...i},s){let{containerRef:f,containerWidth:d}=(0,u.e)(s,t,n),{spacing:h,padding:p,columns:g,...v}=function(e,{columns:t,...n}){return{...n,...(0,c.Vo)(e,n),columns:(0,c.F4)(t,e,[5,4,3,2],1)}}(d,{photos:e,...i}),m=(0,o.useMemo)(()=>void 0!==d&&void 0!==h&&void 0!==p&&void 0!==g?function e(t,n,r,o,i){let{tracks:u,variables:l}=function(e,t,n,r,o,i){var u;let l=[],s=[];if(e.length<=i){let o=e.length>0?e.reduce((e,t)=>e+(0,c.bC)(t),0)/e.length:1;for(let t=0;t<i;t+=1)l[t]=2*n,s[t]=t<e.length?(0,c.bC)(e[t]):o;return a(Array.from({length:i+1},(t,n)=>Math.min(n,e.length)),e,t,n,r,l,s)}let f=(e.reduce((e,t)=>e+o/(0,c.bC)(t),0)+t*(e.length-i)+2*n*e.length)/i,d=function(e,t,n){let r=[n];for(let o=n,i=t;i>0;i-=1)[o]=e.get(o)[i],r.push(o);return r.reverse()}(function(e,t,n,r){let o=new Map,i=new Set;i.add(0);for(let n=0;n<t;n+=1){let u=[...i.keys()];i.clear(),u.forEach(u=>{let l=n>0?o.get(u)[n][1]:0;e(u).forEach(([e,c])=>{let a=o.get(e);a||(a=[],o.set(e,a));let s=l+c,f=a[n+1];(!f||f[1]>s&&(f[1]/s>1.0001||u<f[0]))&&(a[n+1]=[u,s]),n<t-1&&e!==r&&i.add(e)})})}return o}(r=>{let i=[],u=1.5*f,l=o/(0,c.bC)(e[r])+2*n;for(let a=r+1;a<e.length+1&&(i.push([a,(f-l)**2]),!(l>u)&&a!==e.length);a+=1)l+=o/(0,c.bC)(e[a])+t+2*n;return i},i,0,u=e.length),i,u);for(let r=0;r<d.length-1;r+=1){let o=e.slice(d[r],d[r+1]);l[r]=t*(o.length-1)+2*n*o.length,s[r]=1/o.reduce((e,t)=>e+1/(0,c.bC)(t),0)}return a(d,e,t,n,r,l,s)}(t,n,r,o,(o-n*(i-1)-2*r*i)/i,i);return u.some(e=>e.photos.some(({width:e,height:t})=>e<0||t<0))?i>1?e(t,n,r,o,i-1):void 0:{tracks:u,spacing:n,padding:r,containerWidth:o,variables:{columns:i,...l}}}(e,h,p,d,g):void 0,[e,h,p,d,g]);return(0,r.jsx)(l.Z,{layout:"columns",ref:f,model:m,...v})}),f=(0,o.forwardRef)(function({photos:e,breakpoints:t,defaultContainerWidth:n,...i},a){let{containerRef:s,containerWidth:f}=(0,u.e)(a,t,n),{spacing:d,padding:h,columns:p,...g}=function(e,{columns:t,...n}){return{...n,...(0,c.Vo)(e,n),columns:(0,c.F4)(t,e,[5,4,3,2],1)}}(f,{photos:e,...i}),v=(0,o.useMemo)(()=>void 0!==f&&void 0!==d&&void 0!==h&&void 0!==p?function e(t,n,r,o,i){let u=(o-n*(i-1)-2*r*i)/i;if(u<=0)return i>1?e(t,n,r,o,i-1):void 0;let l=[];for(let e=0;e<i;e+=1)l[e]=0;let a=t.reduce((e,t,o)=>{let i=l.reduce((e,t,n)=>t<l[e]-1?n:e,0);return l[i]=l[i]+u/(0,c.bC)(t)+n+2*r,e[i].push({photo:t,index:o}),e},Array.from({length:i},()=>[]));return{spacing:n,padding:r,containerWidth:o,variables:{columns:i},tracks:a.map(e=>({photos:e.map(({photo:e,index:t})=>({photo:e,index:t,width:u,height:u/(0,c.bC)(e)}))}))}}(e,d,h,f,p):void 0,[e,d,h,f,p]);return(0,r.jsx)(l.Z,{layout:"masonry",ref:s,model:v,...g})}),d=(0,o.forwardRef)(function({layout:e,...t},n){return"rows"===e?(0,r.jsx)(i.Z,{ref:n,...t}):"columns"===e?(0,r.jsx)(s,{ref:n,...t}):"masonry"===e?(0,r.jsx)(f,{ref:n,...t}):null})},7714:function(e,t,n){n.d(t,{e:function(){return i}});var r=n(67294);function o(e,[t,n]){let[r,o]=e;return void 0!==r&&void 0!==o&&void 0!==t&&void 0!==n&&t>r&&t-r<=20&&n<o?[r,n]:r!==t||o!==n?[t,n]:e}function i(e,t,n){let[[i],u]=(0,r.useReducer)(o,[n]),l=function(e){let t=(0,r.useRef)(e);return(!e||!t.current||e.length!==t.current.length||t.current.some((t,n)=>t!==e[n]))&&(t.current=e),t.current}(t),c=(0,r.useRef)();return{containerRef:(0,r.useCallback)(t=>{c.current?.disconnect(),c.current=void 0;let n=()=>u([function(e,t){let n=e?.clientWidth;if(void 0!==n&&t&&t.length>0){let e=[...t.filter(e=>e>0)].sort((e,t)=>t-e);e.push(Math.floor(e[e.length-1]/2)),n=e.find((t,r)=>t<=n||r===e.length-1)}return n}(t,l),window.innerWidth-document.documentElement.clientWidth]);n(),t&&"undefined"!=typeof ResizeObserver&&(c.current=new ResizeObserver(n),c.current.observe(t)),"function"==typeof e?e(t):e&&(e.current=t)},[e,l]),containerWidth:i}}},20115:function(e,t,n){n.d(t,{Z:()=>a});var r=n("85893"),o=n("67294"),i=n("7714"),u=n("34834"),l=n("75507");function c(e,t,n,r){return(t-(e.length-1)*n-2*r*e.length)/e.reduce((e,t)=>e+(0,l.bC)(t),0)}let a=(0,o.forwardRef)(function({photos:e,breakpoints:t,defaultContainerWidth:n,...a},s){let{containerRef:f,containerWidth:d}=(0,i.e)(s,t,n),{spacing:h,padding:p,targetRowHeight:g,minPhotos:v,maxPhotos:m,...b}=function(e,{photos:t,targetRowHeight:n,rowConstraints:r,...o}){let{spacing:i,padding:u,componentsProps:c,render:a}=(0,l.Vo)(e,o),{singleRowMaxHeight:s,minPhotos:f,maxPhotos:d}=(0,l.bq)(r,e)||{};if(void 0!==s&&void 0!==i&&void 0!==u){let e=Math.floor(t.reduce((e,{width:t,height:n})=>e+t/n*s-2*u,u*t.length*2+i*(t.length-1)));e>0&&(c.container={...c.container},c.container.style={maxWidth:e,...c.container.style})}return{...o,targetRowHeight:(0,l.F4)(n,e,[e=>e/5,e=>e/4,e=>e/3,e=>e/2]),render:a,spacing:i,padding:u,minPhotos:f,maxPhotos:d,componentsProps:c}}(d,{photos:e,...a}),w=(0,o.useMemo)(()=>void 0!==d&&void 0!==h&&void 0!==p&&void 0!==g?function(e,t,n,r,o,i,u){var a;let s=(0,l.NM)(r/o/Math.min(...e.map(e=>(0,l.bC)(e))))+(i||0)+2,f=function(e,t){if(!e)return;let n=[];for(let r=t;void 0!==r;r=e.get(r))n.push(r);return n.reverse()}(function(e,t,n){var r;let o=new Map,i=new Set,u=new Map;u.set(0,0);let l=function(e){let t=0,n=[],r=(t,r)=>0>e(n[t],n[r]),o=(e,t)=>{let r=n[e];n[e]=n[t],n[t]=r},i=e=>{let t=e,n=Math.floor(t/2);for(;t>1&&r(n,t);)o(n,t),n=Math.floor((t=n)/2)},u=e=>{let n=e,i=2*n;for(;i<=t&&(i<t&&r(i,i+1)&&(i+=1),r(n,i));)o(n,i),i=2*(n=i)};return{push:e=>{n[t+=1]=e,i(t)},pop:()=>{if(0===t)return;o(1,t),t-=1;let e=n.pop();return u(1),e},size:()=>t}}((r=e=>e[1],(e,t)=>r(t)-r(e)));for(l.push([t,0]);l.size()>0;){let[t,n]=l.pop();if(!i.has(t)){let r=e(t);i.add(t),r.forEach((e,r)=>{let i=n+e,c=o.get(r),a=u.get(r);(void 0===a||a>i&&(a/i>1.005||void 0!==c&&c<t))&&(u.set(r,i),l.push([r,i]),o.set(r,t))})}}return u.has(n)?o:void 0}(l=>{let a=new Map;a.set(l,0);let f=Math.min(s,u||1/0);for(let u=l+(i||1);u<e.length+1&&!(u-l>f);u+=1){let i=function(e,t,n,r,o,i,u){let l=e.slice(t,n),a=c(l,r,o,i);return a>0?(a-u)**2*l.length:void 0}(e,l,u,r,t,n,o);if(void 0===i)break;a.set(u,i)}return a},0,a=e.length),a);if(!f)return;let d=[];for(let o=1;o<f.length;o+=1){let i=e.map((e,t)=>({photo:e,index:t})).slice(f[o-1],f[o]),u=c(i.map(({photo:e})=>e),r,t,n);d.push({photos:i.map(({photo:e,index:t})=>({photo:e,index:t,width:u*(0,l.bC)(e),height:u}))})}return{spacing:t,padding:n,containerWidth:r,tracks:d,horizontal:!0}}(e,h,p,d,g,v,m):void 0,[e,h,p,d,g,v,m]);return(0,r.jsx)(u.Z,{layout:"rows",ref:f,model:w,...b})})},34834:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(85893),o=n(67294),i=n(75507);let u=(0,o.forwardRef)(function({as:e,render:t,context:n,classes:o=[],variables:u={},style:l,className:c,children:a,...s},f){let d=(0,i.Wy)(...(Array.isArray(o)?o:[o]).filter(e=>"string"==typeof e).map(i.Nc),c),h={style:{...Object.fromEntries(Object.entries(u).map(([e,t])=>[(0,i.gJ)(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),"number"==typeof t?(0,i.NM)(t,5):t])),...l},className:d,children:a,...s};if(t){let e=t({ref:f,...h},n);if(e)return e}return(0,r.jsx)(e||"div",{ref:f,...h})}),l=(0,o.forwardRef)(function({photo:e,index:t,width:n,height:o,onClick:l,render:{wrapper:c,link:a,button:s,image:f,extras:d}={},componentsProps:{link:h,button:p,wrapper:g,image:v}={}},m){let b;let{src:w,alt:y,title:M,href:C}=e,j={photo:e,index:t,width:(0,i.NM)(n,3),height:(0,i.NM)(o,3)};return b=C?{...h,as:"a",render:a,classes:["photo","link"],href:C,onClick:l}:l?{...p,as:"button",type:"button",render:s,classes:["photo","button"],onClick:l}:{...g,render:c,classes:"photo"},(0,r.jsxs)(u,{ref:m,variables:{photoWidth:j.width,photoHeight:j.height},...{context:j,...b},children:[(0,r.jsx)(u,{as:"img",classes:"image",render:f,...{src:w,alt:y,title:M,context:j,...v}}),d?.({},j)]})}),c=(0,o.forwardRef)(function({layout:e,sizes:t,model:n,skeleton:c,onClick:a,render:{container:s,track:f,photo:d,...h}={},componentsProps:{container:p,track:g,link:v,button:m,wrapper:b,image:w}={}},y){let{spacing:M,padding:C,containerWidth:j,tracks:x,variables:k,horizontal:R}=n||{};return(0,r.jsxs)(u,{role:"group","aria-label":"Photo album",...p,variables:{spacing:M,padding:C,containerWidth:j,...k},classes:["",e],render:s,ref:y,children:[void 0!==M&&void 0!==C&&void 0!==j&&x?.map(({photos:e,variables:n},c)=>{let s=e.length,p=R?s:x.length;return o.createElement(u,{...g,key:c,render:f,classes:"track",variables:{trackSize:s,...n}},e.map(e=>{let{photo:n,index:o,width:u}=e,c=a?e=>{a({event:e,photo:n,index:o})}:void 0;if(d){let t=d({onClick:c},e);if(t)return t}let s=e=>n.label?{"aria-label":n.label,...e}:e;return r.jsx(l,{onClick:c,render:h,componentsProps:{image:{loading:"lazy",decoding:"async",...i.pO(n,t,u,j,p,M,C),...i.Wg(w,e)},link:s(i.Wg(v,e)),button:s(i.Wg(m,e)),wrapper:i.Wg(b,e)},...e},n.key??n.src)}))}),void 0===j&&c]})})},75507:function(e,t,n){function r(...e){return[...e].filter(Boolean).join(" ")}function o(e){return["react-photo-album",e].filter(Boolean).join("--")}function i(e){return`--${o(e)}`}function u({width:e,height:t}){return e/t}n.d(t,{F4:function(){return s},NM:function(){return d},Nc:function(){return o},Vo:function(){return f},Wg:function(){return c},Wy:function(){return r},bC:function(){return u},bq:function(){return a},gJ:function(){return i},pO:function(){return h}});let l=Object.freeze([1200,600,300,0]);function c(e,t){return"function"==typeof e?e(t):e}function a(e,t){return void 0!==t?c(e,t):void 0}function s(e,t,n,r=0){if(void 0===t)return;let o=a(e,t);return Math.round(Math.max(void 0===o?c(n[Math.max(l.findIndex(e=>e<=t),0)],t):o,r))}function f(e,{spacing:t,padding:n,componentsProps:r,render:o}){return{spacing:s(t,e,[20,15,10,5]),padding:s(n,e,[0,0,0,0]),componentsProps:c(r,e)||{},render:c(o,e)}}function d(e,t=0){let n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function h(e,t,n,r,o,i,u){let l,c;let a=e=>{let t=i*(o-1)+2*u*o;return`calc((${e.match(/^\s*calc\((.*)\)\s*$/)?.[1]??e} - ${t}px) / ${d((r-t)/n,5)})`},s=e.srcSet;return s&&s.length>0&&(l=s.concat(s.some(({width:t})=>t===e.width)?[]:[{src:e.src,width:e.width,height:e.height}]).sort((e,t)=>e.width-t.width).map(e=>`${e.src} ${e.width}w`).join(", ")),{srcSet:l,sizes:t?.size?(t.sizes||[]).map(({viewport:e,size:t})=>`${e} ${a(t)}`).concat(a(t.size)).join(", "):`${Math.ceil(n/r*100)}vw`}}}}]);