import{a as P,H as _,v as w,K as S,J as I,_ as R,c0 as B,R as G,S as s,n as f,T as g,G as T}from"./index.bd9f6489.js";import{V as U}from"./Checkbox.e442cb96.js";var V=globalThis&&globalThis.__rest||function(o,r){var l={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&r.indexOf(e)<0&&(l[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(o);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(o,e[t])&&(l[e[t]]=o[e[t]]);return l},N=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:T.any,name:String,id:String,autofocus:{type:Boolean,default:void 0},onChange:Function,onFocus:Function,onBlur:Function,onClick:Function,"onUpdate:checked":Function,"onUpdate:value":Function}},H=P({name:"ARadio",props:N(),setup:function(r,l){var e=l.emit,t=l.expose,v=l.slots,h=_(),p=w(),c=S("radioGroupContext",void 0),C=I("radio",r),d=C.prefixCls,b=C.direction,m=function(){p.value.focus()},x=function(){p.value.blur()};t({focus:m,blur:x});var y=function(n){var u=n.target.checked;e("update:checked",u),e("update:value",u),e("change",n),h.onFieldChange()},k=function(n){e("change",n),c&&c.onRadioChange&&c.onRadioChange(n)};return function(){var a,n=c;r.prefixCls;var u=r.id,j=u===void 0?h.id.value:u,F=V(r,["prefixCls","id"]),i=R({prefixCls:d.value,id:j},B(F,["onUpdate:checked","onUpdate:value"]));n?(i.name=n.props.name,i.onChange=k,i.checked=r.value===n.stateValue.value,i.disabled=r.disabled||n.props.disabled):i.onChange=y;var O=G((a={},s(a,"".concat(d.value,"-wrapper"),!0),s(a,"".concat(d.value,"-wrapper-checked"),i.checked),s(a,"".concat(d.value,"-wrapper-disabled"),i.disabled),s(a,"".concat(d.value,"-wrapper-rtl"),b.value==="rtl"),a));return f("label",{class:O},[f(U,g(g({},i),{},{type:"radio",ref:p}),null),v.default&&f("span",null,[v.default()])])}}});export{H as R,N as r};
