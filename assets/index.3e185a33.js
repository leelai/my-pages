import{av as _,a as C,I as E,bc as B,v as D,f,i as a,ax as r,o as h,j as v,z as l,B as o,t as A,n as p,m as e}from"./index.bd9f6489.js";import{P as k}from"./index.31e4d04d.js";import"./index.74614e52.js";import"./index.3f036e75.js";import"./useSize.622adb41.js";import"./eagerComputed.919a558b.js";import"./useWindowSizeFn.6e1ce129.js";import"./useContentViewHeight.277415d3.js";import"./ArrowLeftOutlined.d12d1b3a.js";import"./index.2d4835a2.js";import"./transButton.48e18dfd.js";const b=C({name:"TestMenu",components:{PageWrapper:k,Input:E},setup(){const{currentRoute:u,replace:t}=B(),n=D("");return{value:n,handleClickGo:()=>{const{name:s}=a(u);t({name:s,params:{id:a(n)}})},params:f(()=>a(u).params)}}}),g=e("br",null,null,-1),I=o(" \u8F93\u5165\u53C2\u6570\u5207\u6362\u8DEF\u7531\uFF1A "),P=o("\u5207\u6362\u8DEF\u7531"),$=e("br",null,null,-1),x=o(" \u5207\u6362\u8DEF\u7531\u540E "),y=e("ul",null,[e("li",null,"\u53EF\u5237\u65B0\u9875\u9762\u6D4B\u8BD5\u8DEF\u7531\u53C2\u6570\u60C5\u51B5\u662F\u5426\u6B63\u5E38\u3002"),e("li",null,"\u53EF\u4E8E\u5DE6\u4FA7\u83DC\u5355\u4E2D\u5C55\u5F00\u5B50\u83DC\u5355\uFF0C\u70B9\u51FB\u6D4B\u8BD5\u53C2\u6570\u662F\u5426\u643A\u5E26\u6B63\u5E38\u3002")],-1);function G(u,t,n,i,s,N){const c=r("Input"),F=r("a-button"),m=r("PageWrapper");return h(),v(m,{title:"\u5E26\u53C2\u6570\u83DC\u5355\uFF08\u8DEF\u7531\uFF09",content:"\u652F\u6301\u591A\u7EA7\u53C2\u6570"},{default:l(()=>[o(" \u5F53\u524D\u53C2\u6570\uFF1A"+A(u.params)+" ",1),g,I,p(c,{value:u.value,"onUpdate:value":t[0]||(t[0]=d=>u.value=d),placeholder:"\u5EFA\u8BAE\u4E3Aurl\u6807\u51C6\u5B57\u7B26\uFF0C\u8F93\u5165\u540E\u70B9\u51FB\u5207\u6362"},null,8,["value"]),p(F,{type:"primary",onClick:u.handleClickGo},{default:l(()=>[P]),_:1},8,["onClick"]),$,x,y]),_:1})}var H=_(b,[["render",G]]);export{H as default};
