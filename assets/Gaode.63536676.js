var c=(e,r,t)=>new Promise((n,o)=>{var p=a=>{try{s(t.next(a))}catch(i){o(i)}},f=a=>{try{s(t.throw(a))}catch(i){o(i)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(p,f);s((t=t.apply(e,r)).next())});import{u as d}from"./useScript.84c0465b.js";import{av as l,a as u,v as m,N as h,o as w,h as M,bl as _,al as v,i as y}from"./index.bd9f6489.js";const b="https://webapi.amap.com/maps?v=2.0&key=d7bb98e7185300250dd5f918c12f484b",g=u({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=m(null),{toPromise:r}=d({src:b});function t(){return c(this,null,function*(){yield r(),yield v();const n=y(e);if(!n)return;const o=window.AMap;new o.Map(n,{zoom:11,center:[116.397428,39.90923],viewMode:"3D"})})}return h(()=>{t()}),{wrapRef:e}}});function A(e,r,t,n,o,p){return w(),M("div",{ref:"wrapRef",style:_({height:e.height,width:e.width})},null,4)}var x=l(g,[["render",A]]);export{x as default};
