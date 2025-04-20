import{o as y,p as d,q as f,t as g,r as i,_ as x,n as t,M as w,L as S,O as j,S as M,v as k}from"./components-3ecdOc5d.js";/**
 * @remix-run/react v2.16.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function O({getKey:o,...l}){let{isSpaMode:c}=y(),r=d(),h=f();g({getKey:o,storageKey:a});let p=i.useMemo(()=>{if(!o)return null;let e=o(r,h);return e!==r.key?e:null},[]);if(c)return null;let u=((e,m)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let n=JSON.parse(sessionStorage.getItem(e)||"{}")[m||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(s){console.error(s),sessionStorage.removeItem(e)}}).toString();return i.createElement("script",x({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${u})(${JSON.stringify(a)}, ${JSON.stringify(p)})`}}))}const R="/animation-showcase/assets/global-BjxhtfMV.css",v=()=>[{rel:"stylesheet",href:R},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap"}];function L(){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(w,{}),t.jsx(S,{})]}),t.jsxs("body",{children:[t.jsx(j,{}),t.jsx(O,{}),t.jsx(M,{}),t.jsx(k,{})]})]})}export{L as default,v as links};
