import{a as n,bc as p,i,o as _,h as l}from"./index.bd9f6489.js";const d=n({setup(u){const{currentRoute:s,replace:a}=p(),{params:e,query:o}=i(s),{path:r,_redirect_type:c="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return a(c==="name"?{name:t,query:o,params:e}:{path:t.startsWith("/")?t:"/"+t,query:o}),(f,h)=>(_(),l("div"))}});export{d as default};
