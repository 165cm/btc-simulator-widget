!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BTCSimulator=t():e.BTCSimulator=t()}(this,(()=>(()=>{"use strict";var e,t={944:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var r=a(6540),n=a(5338),l=a(4653),c=a(6691),o=a(7984),s=a(3495),m=a(8687),i=a(6279),d=a(6085),u=a(379),p=a(2107),f=a(8623);const v=new class{constructor(){this.price=15e6}async getPrice(){try{return console.log("Returning fixed price for MVP:",this.price),this.price}catch(e){return console.error("Price fetch simulation error:",e),this.price}}};function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},h.apply(null,arguments)}const x=({className:e,children:t,...a})=>r.createElement("div",h({className:`rounded-lg border bg-card text-card-foreground shadow-sm ${e}`},a),t),E=({className:e,children:t,...a})=>r.createElement("div",h({className:`flex flex-col space-y-1.5 p-6 ${e}`},a),t),g=({className:e,children:t,...a})=>r.createElement("h3",h({className:`text-lg font-semibold leading-none tracking-tight ${e}`},a),t),N=({className:e,children:t,...a})=>r.createElement("div",h({className:`p-6 pt-0 ${e}`},a),t),b=({value:e,onValueChange:t,min:a,max:n,step:l,className:c})=>r.createElement("input",{type:"range",min:a,max:n,step:l,value:e[0],onChange:e=>t([parseFloat(e.target.value)]),className:`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${c}`}),y=()=>{const[e,t]=(0,r.useState)(15e6),[a,n]=(0,r.useState)(1e4),[h,y]=(0,r.useState)(15),[w,S]=(0,r.useState)(45e6),[M,k]=(0,r.useState)(!0),[C,O]=(0,r.useState)(null);(0,r.useEffect)((()=>{const e=async()=>{try{k(!0),console.log("APIキーの確認:",process.env.COINMARKETCAP_API_KEY);const e=await v.getPrice();console.log("取得した価格:",e),e&&(t(e),S(3*e))}catch(e){console.error("価格取得エラーの詳細:",e),O("価格の取得に失敗しました")}finally{k(!1)}};e();const a=setInterval(e,36e5);return()=>clearInterval(a)}),[]);const T=[{name:"NVIDIA",cap:3.44,icon:d.A,color:"#76B900"},{name:"金（ゴールド）",cap:13.3,icon:u.A,color:"#FFD700"},{name:"Mag-7企業",cap:16.42,icon:d.A,color:"#4285F4"},{name:"S&P500",cap:45.84,icon:p.A,color:"#0A4595"}],j=e=>e/150*196e5/1e12,B=(j(e),j(w)),$=(()=>{const t=12*h,r=w/e,n=Math.pow(r,1/t)-1,l=[];let c=0,o=0;for(let r=0;r<=t;r++){const t=e*Math.pow(1+n,r);r>0&&(c+=a/t,o+=a),r%12==0&&l.push({year:2025+r/12,価値:Math.round(c*t),投資額:o})}return{data:l,totalBTC:c,totalInvestment:o,finalValue:c*w,roi:(c*w-o)/o*100}})();return M?r.createElement("div",{className:"flex justify-center items-center h-64"},"Loading..."):C?r.createElement("div",{className:"text-red-500 text-center p-4"},C):r.createElement(x,{className:"w-full max-w-3xl mx-auto"},r.createElement(E,null,r.createElement(g,{className:"text-lg md:text-xl font-bold text-center"},"ビットコイン積立シミュレーター")),r.createElement(N,{className:"p-3 md:p-6"},r.createElement("div",{className:"space-y-4 md:space-y-6"},r.createElement("div",{className:"space-y-4"},r.createElement("div",null,r.createElement("label",{className:"block text-sm font-medium mb-2"},"月間投資額（円）"),r.createElement("select",{value:a,onChange:e=>n(Number(e.target.value)),className:"w-full p-2 border rounded text-base md:text-sm"},r.createElement("option",{value:5e3},"5,000円"),r.createElement("option",{value:1e4},"10,000円"),r.createElement("option",{value:3e4},"30,000円"),r.createElement("option",{value:5e4},"50,000円"))),r.createElement("div",{className:"space-y-2"},r.createElement("label",{className:"block text-sm font-medium"},"積立期間"),r.createElement("div",{className:"px-2"},r.createElement(b,{value:[h],onValueChange:e=>y(e[0]),max:30,min:5,step:5,className:"my-4"}),r.createElement("div",{className:"text-center text-sm"},h,"年間（",2025+h,"年まで）"))),r.createElement("div",{className:"space-y-2"},r.createElement("label",{className:"block text-sm font-medium"},"予想BTC価格（現在の",Math.round(w/e*10)/10,"倍）"),r.createElement("div",{className:"px-2"},r.createElement(b,{value:[w],onValueChange:e=>S(1e6*Math.round(e/1e6)),max:20*e,min:e,step:1e6,className:"my-4"}),r.createElement("div",{className:"text-center text-sm"},w>=1e8?`${Math.floor(w/1e8)}億${Math.floor(w%1e8/1e4)}万円`:`${Math.round(w).toLocaleString()}円`)))),r.createElement("div",{className:"bg-blue-50 p-3 md:p-4 rounded-lg"},r.createElement("div",{className:"flex items-center justify-between mb-2"},r.createElement("h3",{className:"text-sm font-medium"},"時価総額比較"),r.createElement("div",{className:"text-xs text-blue-600"},"予想: ",B.toFixed(1),"兆ドル")),r.createElement("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2"},T.map(((e,t)=>{const a=e.icon,n=B<=e.cap&&(0===t||B>T[t-1].cap);return r.createElement("div",{key:e.name,className:"flex items-center p-1.5 rounded "+(n?"bg-blue-100":"")},r.createElement(a,{style:{color:e.color},className:"w-4 h-4 mr-1.5"}),r.createElement("div",{className:"min-w-0"},r.createElement("div",{className:"text-sm truncate"},e.name),r.createElement("div",{className:"text-xs text-gray-600"},e.cap,"兆ドル")))})))),r.createElement("div",{className:"bg-gray-50 p-3 md:p-4 rounded-lg"},r.createElement("h3",{className:"text-sm font-medium mb-3"},"シミュレーション結果"),r.createElement("div",{className:"grid grid-cols-2 gap-3 mb-4"},r.createElement("div",null,r.createElement("div",{className:"text-xs text-gray-600"},"総投資額"),r.createElement("div",{className:"text-sm font-medium"},Math.round($.totalInvestment).toLocaleString(),"円")),r.createElement("div",null,r.createElement("div",{className:"text-xs text-gray-600"},"最終評価額"),r.createElement("div",{className:"text-sm font-medium"},Math.round($.finalValue).toLocaleString(),"円")),r.createElement("div",null,r.createElement("div",{className:"text-xs text-gray-600"},"取得BTC数"),r.createElement("div",{className:"text-sm font-medium"},$.totalBTC.toFixed(8)," BTC")),r.createElement("div",null,r.createElement("div",{className:"text-xs text-gray-600"},"投資収益率"),r.createElement("div",{className:"text-sm font-medium"},Math.round($.roi),"%"))),r.createElement("div",{className:"h-48 md:h-64"},r.createElement(l.u,{width:"100%",height:"100%"},r.createElement(c.b,{data:$.data,margin:{top:5,right:5,bottom:5,left:5}},r.createElement(o.W,{dataKey:"year",tick:{fontSize:12},tickFormatter:e=>e.toString().slice(-2)}),r.createElement(s.h,{tick:{fontSize:12},tickFormatter:e=>e>=1e8?`${Math.floor(e/1e4)}万`:`${Math.round(e/1e4)}万`}),r.createElement(m.m,{formatter:e=>e>=1e8?[`${Math.floor(e/1e8)}億${Math.floor(e%1e8/1e4)}万円`]:[`${Math.round(e/1e4)}万円`],labelFormatter:e=>`${e}年`}),r.createElement(i.N,{type:"monotone",dataKey:"価値",stroke:"#2563eb",name:"評価額",strokeWidth:2}),r.createElement(i.N,{type:"monotone",dataKey:"投資額",stroke:"#9ca3af",name:"投資額",strokeWidth:2}))))),r.createElement("div",{className:"text-center space-y-2"},r.createElement("div",{className:"text-xs text-gray-500"},"※ このシミュレーションは参考値です。実際の投資成果を保証するものではありません。"),r.createElement("a",{href:"https://www.nomadkazoku.com/bitcoin-jidou-tsumitate/",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center text-sm text-blue-600 hover:text-blue-800"},"コストを抑えたBTCの積立投資を検討してみる",r.createElement(f.A,{className:"w-4 h-4 ml-1"}))))))};function w(e,t={}){const a=document.getElementById(e);if(a)try{return(0,n.H)(a).render(r.createElement(r.StrictMode,null,r.createElement(y,t))),!0}catch(e){return console.error("Error mounting BTCSimulator:",e),!1}return!1}"undefined"!=typeof window&&(window.BTCSimulator={mount:w});const S={mount:w}}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var l=a[e]={id:e,loaded:!1,exports:{}};return t[e].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}r.m=t,e=[],r.O=(t,a,n,l)=>{if(!a){var c=1/0;for(i=0;i<e.length;i++){for(var[a,n,l]=e[i],o=!0,s=0;s<a.length;s++)(!1&l||c>=l)&&Object.keys(r.O).every((e=>r.O[e](a[s])))?a.splice(s--,1):(o=!1,l<c&&(c=l));if(o){e.splice(i--,1);var m=n();void 0!==m&&(t=m)}}return t}l=l||0;for(var i=e.length;i>0&&e[i-1][2]>l;i--)e[i]=e[i-1];e[i]=[a,n,l]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,l,[c,o,s]=a,m=0;if(c.some((t=>0!==e[t]))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(s)var i=s(r)}for(t&&t(a);m<c.length;m++)l=c[m],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(i)},a=this.webpackChunkBTCSimulator=this.webpackChunkBTCSimulator||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=r.O(void 0,[121],(()=>r(944)));return r.O(n)})()));