"use strict";(this.webpackChunkBTCSimulator=this.webpackChunkBTCSimulator||[]).push([[528],{5334:(e,t,r)=>{r.d(t,{TW:()=>l,UA:()=>a,dA:()=>o});var n=r(7591),s=r(1134);const a=(0,n.f)((e=>e.setHours(0,0,0,0)),((e,t)=>e.setDate(e.getDate()+t)),((e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*s.rR)/s.Nm),(e=>e.getDate()-1)),o=(a.range,(0,n.f)((e=>{e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCDate(e.getUTCDate()+t)}),((e,t)=>(t-e)/s.Nm),(e=>e.getUTCDate()-1))),l=(o.range,(0,n.f)((e=>{e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCDate(e.getUTCDate()+t)}),((e,t)=>(t-e)/s.Nm),(e=>Math.floor(e/s.Nm))));l.range},1134:(e,t,r)=>{r.d(t,{Fq:()=>l,JJ:()=>a,MP:()=>u,Nm:()=>o,Pv:()=>g,Tt:()=>n,rR:()=>s});const n=1e3,s=60*n,a=60*s,o=24*a,l=7*o,g=30*o,u=365*o},4612:(e,t,r)=>{r.d(t,{Ag:()=>a,pz:()=>o});var n=r(7591),s=r(1134);const a=(0,n.f)((e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*s.Tt-e.getMinutes()*s.rR)}),((e,t)=>{e.setTime(+e+t*s.JJ)}),((e,t)=>(t-e)/s.JJ),(e=>e.getHours())),o=(a.range,(0,n.f)((e=>{e.setUTCMinutes(0,0,0)}),((e,t)=>{e.setTime(+e+t*s.JJ)}),((e,t)=>(t-e)/s.JJ),(e=>e.getUTCHours())));o.range},7591:(e,t,r)=>{r.d(t,{f:()=>a});const n=new Date,s=new Date;function a(e,t,r,o){function l(t){return e(t=0===arguments.length?new Date:new Date(+t)),t}return l.floor=t=>(e(t=new Date(+t)),t),l.ceil=r=>(e(r=new Date(r-1)),t(r,1),e(r),r),l.round=e=>{const t=l(e),r=l.ceil(e);return e-t<r-e?t:r},l.offset=(e,r)=>(t(e=new Date(+e),null==r?1:Math.floor(r)),e),l.range=(r,n,s)=>{const a=[];if(r=l.ceil(r),s=null==s?1:Math.floor(s),!(r<n&&s>0))return a;let o;do{a.push(o=new Date(+r)),t(r,s),e(r)}while(o<r&&r<n);return a},l.filter=r=>a((t=>{if(t>=t)for(;e(t),!r(t);)t.setTime(t-1)}),((e,n)=>{if(e>=e)if(n<0)for(;++n<=0;)for(;t(e,-1),!r(e););else for(;--n>=0;)for(;t(e,1),!r(e););})),r&&(l.count=(t,a)=>(n.setTime(+t),s.setTime(+a),e(n),e(s),Math.floor(r(n,s))),l.every=e=>(e=Math.floor(e),isFinite(e)&&e>0?e>1?l.filter(o?t=>o(t)%e==0:t=>l.count(0,t)%e==0):l:null)),l}},3298:(e,t,r)=>{r.d(t,{vD:()=>o,wX:()=>a});var n=r(7591),s=r(1134);const a=(0,n.f)((e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*s.Tt)}),((e,t)=>{e.setTime(+e+t*s.rR)}),((e,t)=>(t-e)/s.rR),(e=>e.getMinutes())),o=(a.range,(0,n.f)((e=>{e.setUTCSeconds(0,0)}),((e,t)=>{e.setTime(+e+t*s.rR)}),((e,t)=>(t-e)/s.rR),(e=>e.getUTCMinutes())));o.range},5878:(e,t,r)=>{r.d(t,{R6:()=>a,Ui:()=>s});var n=r(7591);const s=(0,n.f)((e=>{e.setDate(1),e.setHours(0,0,0,0)}),((e,t)=>{e.setMonth(e.getMonth()+t)}),((e,t)=>t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear())),(e=>e.getMonth())),a=(s.range,(0,n.f)((e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)}),((e,t)=>t.getUTCMonth()-e.getUTCMonth()+12*(t.getUTCFullYear()-e.getUTCFullYear())),(e=>e.getUTCMonth())));a.range},5030:(e,t,r)=>{r.d(t,{R:()=>a});var n=r(7591),s=r(1134);const a=(0,n.f)((e=>{e.setTime(e-e.getMilliseconds())}),((e,t)=>{e.setTime(+e+t*s.Tt)}),((e,t)=>(t-e)/s.Tt),(e=>e.getUTCSeconds()));a.range},433:(e,t,r)=>{r.d(t,{yE:()=>F,Cf:()=>D,lk:()=>h,$Z:()=>M});var n=r(321),s=r(6946),a=r(1134),o=r(7591);const l=(0,o.f)((()=>{}),((e,t)=>{e.setTime(+e+t)}),((e,t)=>t-e));l.every=e=>(e=Math.floor(e),isFinite(e)&&e>0?e>1?(0,o.f)((t=>{t.setTime(Math.floor(t/e)*e)}),((t,r)=>{t.setTime(+t+r*e)}),((t,r)=>(r-t)/e)):l:null);l.range;var g=r(5030),u=r(3298),T=r(4612),i=r(5334),f=r(8926),C=r(5878),U=r(4355);function c(e,t,r,o,u,T){const i=[[g.R,1,a.Tt],[g.R,5,5*a.Tt],[g.R,15,15*a.Tt],[g.R,30,30*a.Tt],[T,1,a.rR],[T,5,5*a.rR],[T,15,15*a.rR],[T,30,30*a.rR],[u,1,a.JJ],[u,3,3*a.JJ],[u,6,6*a.JJ],[u,12,12*a.JJ],[o,1,a.Nm],[o,2,2*a.Nm],[r,1,a.Fq],[t,1,a.Pv],[t,3,3*a.Pv],[e,1,a.MP]];function f(t,r,o){const g=Math.abs(r-t)/o,u=(0,n.A)((([,,e])=>e)).right(i,g);if(u===i.length)return e.every((0,s.sG)(t/a.MP,r/a.MP,o));if(0===u)return l.every(Math.max((0,s.sG)(t,r,o),1));const[T,f]=i[g/i[u-1][2]<i[u][2]/g?u-1:u];return T.every(f)}return[function(e,t,r){const n=t<e;n&&([e,t]=[t,e]);const s=r&&"function"==typeof r.range?r:f(e,t,r),a=s?s.range(e,+t+1):[];return n?a.reverse():a},f]}const[M,h]=c(U.Mb,C.R6,f.Hl,i.TW,T.pz,u.vD),[D,F]=c(U.he,C.Ui,f.YP,i.UA,T.Ag,u.wX)},8926:(e,t,r)=>{r.d(t,{AB:()=>l,Hl:()=>U,Mo:()=>T,YP:()=>o,pT:()=>D,rt:()=>c});var n=r(7591),s=r(1134);function a(e){return(0,n.f)((t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)}),((e,t)=>{e.setDate(e.getDate()+7*t)}),((e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*s.rR)/s.Fq))}const o=a(0),l=a(1),g=a(2),u=a(3),T=a(4),i=a(5),f=a(6);o.range,l.range,g.range,u.range,T.range,i.range,f.range;function C(e){return(0,n.f)((t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCDate(e.getUTCDate()+7*t)}),((e,t)=>(t-e)/s.Fq))}const U=C(0),c=C(1),M=C(2),h=C(3),D=C(4),F=C(5),m=C(6);U.range,c.range,M.range,h.range,D.range,F.range,m.range},4355:(e,t,r)=>{r.d(t,{Mb:()=>a,he:()=>s});var n=r(7591);const s=(0,n.f)((e=>{e.setMonth(0,1),e.setHours(0,0,0,0)}),((e,t)=>{e.setFullYear(e.getFullYear()+t)}),((e,t)=>t.getFullYear()-e.getFullYear()),(e=>e.getFullYear()));s.every=e=>isFinite(e=Math.floor(e))&&e>0?(0,n.f)((t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)}),((t,r)=>{t.setFullYear(t.getFullYear()+r*e)})):null;s.range;const a=(0,n.f)((e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)}),((e,t)=>t.getUTCFullYear()-e.getUTCFullYear()),(e=>e.getUTCFullYear()));a.every=e=>isFinite(e=Math.floor(e))&&e>0?(0,n.f)((t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),((t,r)=>{t.setUTCFullYear(t.getUTCFullYear()+r*e)})):null;a.range}}]);