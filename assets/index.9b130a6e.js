import{P as W}from"./index.31e4d04d.js";import{av as M,a as X,ax as Y,bP as A,o as L,j as D,z as S,x as q,h as z,B as F}from"./index.bd9f6489.js";import"./index.74614e52.js";import"./index.3f036e75.js";import"./useSize.622adb41.js";import"./eagerComputed.919a558b.js";import"./useWindowSizeFn.6e1ce129.js";import"./useContentViewHeight.277415d3.js";import"./ArrowLeftOutlined.d12d1b3a.js";import"./index.2d4835a2.js";import"./transButton.48e18dfd.js";const l={event:"mousedown",transition:400},x={beforeMount:(e,t)=>{if(t.value===!1)return;const o=e.getAttribute("ripple-background");I(Object.keys(t.modifiers),l);const s=o||x.background,r=x.zIndex;e.addEventListener(l.event,d=>{H({event:d,el:e,background:s,zIndex:r})})},updated(e,t){var s,r;if(!t.value){(s=e==null?void 0:e.clearRipple)==null||s.call(e);return}const o=e.getAttribute("ripple-background");(r=e==null?void 0:e.setBackground)==null||r.call(e,o)}};function H({event:e,el:t,zIndex:o,background:s}){var E,R;const r=parseInt(getComputedStyle(t).borderWidth.replace("px","")),d=e.clientX||e.touches[0].clientX,f=e.clientY||e.touches[0].clientY,g=t.getBoundingClientRect(),{left:B,top:C}=g,{offsetWidth:_,offsetHeight:b}=t,{transition:T}=l,m=d-B,u=f-C,y=Math.max(m,_-m),$=Math.max(u,b-u),N=window.getComputedStyle(t),h=Math.sqrt(y*y+$*$),w=r>0?r:0,a=document.createElement("div"),n=document.createElement("div");a.className="ripple",Object.assign((E=a.style)!=null?E:{},{marginTop:"0px",marginLeft:"0px",width:"1px",height:"1px",transition:`all ${T}ms cubic-bezier(0.4, 0, 0.2, 1)`,borderRadius:"50%",pointerEvents:"none",position:"relative",zIndex:o!=null?o:"9999",backgroundColor:s!=null?s:"rgba(0, 0, 0, 0.12)"}),n.className="ripple-container",Object.assign((R=n.style)!=null?R:{},{position:"absolute",left:`${0-w}px`,top:`${0-w}px`,height:"0",width:"0",pointerEvents:"none",overflow:"hidden"});const v=t.style.position.length>0?t.style.position:getComputedStyle(t).position;v!=="relative"&&(t.style.position="relative"),n.appendChild(a),t.appendChild(n),Object.assign(a.style,{marginTop:`${u}px`,marginLeft:`${m}px`});const{borderTopLeftRadius:k,borderTopRightRadius:P,borderBottomLeftRadius:j,borderBottomRightRadius:O}=N;Object.assign(n.style,{width:`${_}px`,height:`${b}px`,direction:"ltr",borderTopLeftRadius:k,borderTopRightRadius:P,borderBottomLeftRadius:j,borderBottomRightRadius:O}),setTimeout(()=>{var c;const i=`${h*2}px`;Object.assign((c=a.style)!=null?c:{},{width:i,height:i,marginLeft:`${m-h}px`,marginTop:`${u-h}px`})},0);function p(){setTimeout(()=>{a.style.backgroundColor="rgba(0, 0, 0, 0)"},250),setTimeout(()=>{var i;(i=n==null?void 0:n.parentNode)==null||i.removeChild(n)},850),t.removeEventListener("mouseup",p,!1),t.removeEventListener("mouseleave",p,!1),t.removeEventListener("dragstart",p,!1),setTimeout(()=>{let i=!0;for(let c=0;c<t.childNodes.length;c++)t.childNodes[c].className==="ripple-container"&&(i=!1);i&&(t.style.position=v!=="static"?v:"")},l.transition+260)}e.type==="mousedown"?(t.addEventListener("mouseup",p,!1),t.addEventListener("mouseleave",p,!1),t.addEventListener("dragstart",p,!1)):p(),t.setBackground=i=>{!i||(a.style.backgroundColor=i)}}function I(e,t){e.forEach(o=>{isNaN(Number(o))?t.event=o:t.transition=o})}const V=X({components:{PageWrapper:W},directives:{Ripple:x}}),G={class:"demo-box"},J=F("content"),K=[J];function Q(e,t,o,s,r,d){const f=Y("PageWrapper"),g=A("ripple");return L(),D(f,{title:"Ripple\u793A\u4F8B"},{default:S(()=>[q((L(),z("div",G,K)),[[g]])]),_:1})}var ct=M(V,[["render",Q],["__scopeId","data-v-42c234a1"]]);export{ct as default};
