var l=(e,s,t)=>new Promise((o,n)=>{var r=a=>{try{p(t.next(a))}catch(c){n(c)}},i=a=>{try{p(t.throw(a))}catch(c){n(c)}},p=a=>a.done?o(a.value):Promise.resolve(a.value).then(r,i);p((t=t.apply(e,s)).next())});import{u}from"./useScript.84c0465b.js";import{av as d,a as f,v as m,N as h,o as w,h as B,bl as _,al as v,i as M}from"./index.bd9f6489.js";const g="https://api.map.baidu.com/getscript?v=3.0&ak=OaBvYmKX3pjF7YFUFeeBCeGdy9Zp7xB2&services=&t=20210201100830&s=1",y=f({name:"BaiduMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=m(null),{toPromise:s}=u({src:g});function t(){return l(this,null,function*(){yield s(),yield v();const o=M(e);if(!o)return;const n=window.BMap,r=new n.Map(o),i=new n.Point(116.404,39.915);r.centerAndZoom(i,15),r.enableScrollWheelZoom(!0)})}return h(()=>{t()}),{wrapRef:e}}});function S(e,s,t,o,n,r){return w(),B("div",{ref:"wrapRef",style:_({height:e.height,width:e.width})},null,4)}var b=d(y,[["render",S]]);export{b as default};
