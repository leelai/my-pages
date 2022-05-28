import{a as b,aF as Q,b as Z,f as L,aG as ee,av as G,ax as _,o as C,h as W,n as o,z as $,aB as te,F as ne,aA as oe,j as T,az as ae,ay as M,aC as se,q as re,w as ie,v as N,L as le,i as f,c6 as ce,B as X,d7 as ue,d8 as me,f0 as de,f1 as ge}from"./index.bd9f6489.js";import{I as R}from"./index.921b6783.js";import{P as fe}from"./index.31e4d04d.js";import"./index.74614e52.js";import"./index.3f036e75.js";import"./useSize.622adb41.js";import"./eagerComputed.919a558b.js";import"./useWindowSizeFn.6e1ce129.js";import"./useContentViewHeight.277415d3.js";import"./ArrowLeftOutlined.d12d1b3a.js";import"./index.2d4835a2.js";import"./transButton.48e18dfd.js";const pe=b({name:"ImagePreview",components:{Image:R,PreviewGroup:R.PreviewGroup},props:{functional:Q.bool,imageList:{type:Array}},setup(n){const{prefixCls:u}=Z("image-preview"),i=L(()=>{const{imageList:r}=n;return r?r.map(t=>ee(t)?{src:t,placeholder:!1}:t):[]});return{prefixCls:u,getImageList:i}}});function ve(n,u,i,r,t,h){const d=_("Image"),p=_("PreviewGroup");return C(),W("div",{class:re(n.prefixCls)},[o(p,null,{default:$(()=>[!n.imageList||n.$slots.default?te(n.$slots,"default",{key:0}):(C(!0),W(ne,{key:1},oe(n.getImageList,l=>(C(),T(d,se(M({key:l.src},l)),ae({_:2},[l.placeholder?{name:"placeholder",fn:$(()=>[o(d,M(l,{src:l.placeholder,preview:!1}),null,16,["src"])])}:void 0]),1040))),128))]),_:3})],2)}var _e=G(pe,[["render",ve]]),he="/my-pages/assets/resume.8f27866b.svg",Ie="/my-pages/assets/p-rotate.cb8bbfc3.svg",we="/my-pages/assets/scale.44abde22.svg",Le="/my-pages/assets/unscale.c552f416.svg",Ce="/my-pages/assets/unrotate.ef6a2daf.svg",g;(function(n){n[n.LOADING=0]="LOADING",n[n.DONE=1]="DONE",n[n.FAIL=2]="FAIL"})(g||(g={}));const $e={show:{type:Boolean,default:!1},imageList:{type:[Array],default:null},index:{type:Number,default:0},scaleStep:{type:Number},defaultWidth:{type:Number},maskClosable:{type:Boolean},rememberState:{type:Boolean}},s="img-preview";var ye=b({name:"ImagePreview",props:$e,emits:["img-load","img-error"],setup(n,{expose:u,emit:i}){const r=new Map,t=ie({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:g.LOADING,currentIndex:0,moveX:0,moveY:0,show:n.show}),h=N(null),d=N(null);function p(){Y();const{index:e,imageList:a}=n;if(!a||!a.length)throw new Error("imageList is undefined");t.currentIndex=e,k(a[e])}function l(){t.imgScale=1,t.imgRotate=0,t.imgTop=0,t.imgLeft=0}function Y(){const e=f(h);!e||(e.onmousewheel=y,document.body.addEventListener("DOMMouseScroll",y),document.ondragstart=function(){return!1})}const I=L(()=>{var a;const e=(a=n==null?void 0:n.scaleStep)!=null?a:0;return(e!=null?e:0>0)?e/100:t.imgScale/10});function y(e){e=e||window.event,e.delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&w(I.value),e.delta<0&&w(-I.value)}function w(e){t.imgScale<=.2&&e<0||(t.imgScale+=e)}function F(e){t.imgRotate+=e}function U(){const e=f(d);!e||(e.onmousemove=null)}function k(e){t.status=g.LOADING;const a=new Image;a.src=e,a.onload=c=>{if(t.currentUrl!==e){const m=c.composedPath();if(n.rememberState){r.set(t.currentUrl,{scale:t.imgScale,top:t.imgTop,left:t.imgLeft,rotate:t.imgRotate});const v=r.get(e);v?(t.imgScale=v.scale,t.imgTop=v.top,t.imgRotate=v.rotate,t.imgLeft=v.left):(l(),n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth))}else n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth);m&&i("img-load",{index:t.currentIndex,dom:m[0],url:e})}t.currentUrl=e,t.status=g.DONE},a.onerror=c=>{const m=c.composedPath();m&&i("img-error",{index:t.currentIndex,dom:m[0],url:e}),t.status=g.FAIL}}function P(e){e&&e.stopPropagation(),D()}function D(){t.show=!1,document.body.removeEventListener("DOMMouseScroll",y),document.ondragstart=null}function A(){l()}u({resume:A,close:D,prev:x.bind(null,"left"),next:x.bind(null,"right"),setScale:e=>{e>0&&e<=10&&(t.imgScale=e)},setRotate:e=>{t.imgRotate=e}});function x(e){const{currentIndex:a}=t,{imageList:c}=n;e==="left"&&(t.currentIndex--,a<=0&&(t.currentIndex=c.length-1)),e==="right"&&(t.currentIndex++,a>=c.length-1&&(t.currentIndex=0)),k(c[t.currentIndex])}function z(e){e=e||window.event,t.moveX=e.clientX,t.moveY=e.clientY;const a=f(d);a&&(a.onmousemove=j)}function j(e){e=e||window.event,e.preventDefault();const a=e.clientX-t.moveX,c=e.clientY-t.moveY;t.imgLeft+=a,t.imgTop+=c,t.moveX=e.clientX,t.moveY=e.clientY}const V=L(()=>{const{imgScale:e,imgRotate:a,imgTop:c,imgLeft:m}=t;return{transform:`scale(${e}) rotate(${a}deg)`,marginTop:`${c}px`,marginLeft:`${m}px`,maxWidth:n.defaultWidth?"unset":"100%"}}),E=L(()=>{const{imageList:e}=n;return e.length>1});le(()=>{n.show&&p(),n.imageList&&l()});const q=e=>{n.maskClosable&&e.target&&e.target.classList.contains(`${s}-content`)&&P(e)},H=()=>o("div",{class:`${s}__close`,onClick:P},[o(ce,{class:`${s}__close-icon`},null)]),J=()=>{if(!f(E))return null;const{currentIndex:e}=t,{imageList:a}=n;return o("div",{class:`${s}__index`},[e+1,X(" / "),a.length])},K=()=>o("div",{class:`${s}__controller`},[o("div",{class:`${s}__controller-item`,onClick:()=>w(-I.value)},[o("img",{src:Le},null)]),o("div",{class:`${s}__controller-item`,onClick:()=>w(I.value)},[o("img",{src:we},null)]),o("div",{class:`${s}__controller-item`,onClick:A},[o("img",{src:he},null)]),o("div",{class:`${s}__controller-item`,onClick:()=>F(-90)},[o("img",{src:Ce},null)]),o("div",{class:`${s}__controller-item`,onClick:()=>F(90)},[o("img",{src:Ie},null)])]),O=e=>f(E)?o("div",{class:[`${s}__arrow`,e],onClick:()=>x(e)},[e==="left"?o(ue,null,null):o(me,null,null)]):null;return()=>t.show&&o("div",{class:s,ref:h,onMouseup:U,onClick:q},[o("div",{class:`${s}-content`},[o("img",{style:f(V),class:[`${s}-image`,t.status===g.DONE?"":"hidden"],ref:d,src:t.currentUrl,onMousedown:z},null),H(),J(),K(),O("left"),O("right")])])}});let S=null;function xe(n){var r;if(!de)return;const u={},i=document.createElement("div");return Object.assign(u,{show:!0,index:0,scaleStep:100},n),S=o(ye,u),ge(S,i),document.body.appendChild(i),(r=S.component)==null?void 0:r.exposed}const B=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"],Se=b({components:{PageWrapper:fe,ImagePreview:_e},setup(){function n(){xe({imageList:B,defaultWidth:700,rememberState:!0,onImgLoad:({index:i,url:r,dom:t})=>{i+1,`${r}`}})}return{imgList:B,openImg:n}}}),be=X("\u65E0\u9884\u89C8\u56FE");function Fe(n,u,i,r,t,h){const d=_("ImagePreview"),p=_("a-button"),l=_("PageWrapper");return C(),T(l,{title:"\u56FE\u7247\u9884\u89C8\u793A\u4F8B"},{default:$(()=>[o(d,{imageList:n.imgList},null,8,["imageList"]),o(p,{onClick:n.openImg,type:"primary"},{default:$(()=>[be]),_:1},8,["onClick"])]),_:1})}var Te=G(Se,[["render",Fe]]);export{Te as default};
