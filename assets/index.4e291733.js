var c=(n,o,t)=>new Promise((_,u)=>{var r=e=>{try{a(t.next(e))}catch(s){u(s)}},i=e=>{try{a(t.throw(e))}catch(s){u(s)}},a=e=>e.done?_(e.value):Promise.resolve(e.value).then(r,i);a((t=t.apply(n,o)).next())});import{a as l,ax as d,o as p,h as B,n as F,z as C,B as m,m as x,fj as h}from"./index.bd9f6489.js";const f={class:"request-box"},y=m(" \u70B9\u51FB\u4F1A\u91CD\u65B0\u53D1\u8D77\u8BF7\u6C425\u6B21 "),D=x("p",null,"\u6253\u5F00\u6D4F\u89C8\u5668\u7684network\u9762\u677F\uFF0C\u53EF\u4EE5\u770B\u5230\u53D1\u51FA\u4E86\u516D\u6B21\u8BF7\u6C42",-1),E=l({setup(n){const o=()=>c(this,null,function*(){yield h()});return(t,_)=>{const u=d("a-button");return p(),B("div",f,[F(u,{onClick:o,type:"primary"},{default:C(()=>[y]),_:1}),D])}}});export{E as default};
