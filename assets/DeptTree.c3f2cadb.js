var p=(a,n,e)=>new Promise((r,o)=>{var s=t=>{try{i(e.next(t))}catch(l){o(l)}},c=t=>{try{i(e.throw(t))}catch(l){o(l)}},i=t=>t.done?r(t.value):Promise.resolve(t.value).then(s,c);i((e=e.apply(a,n)).next())});import{_ as m}from"./index.d1fe8207.js";import{a as d}from"./system.086d8b22.js";import{a as f,v as u,N as _,av as h,ax as v,o as D,h as T,n as B}from"./index.bd9f6489.js";import"./index.4e4d0287.js";import"./useContextMenu.f9259e08.js";import"./index.ead911b9.js";import"./get.10e6e01a.js";const $=f({name:"DeptTree",components:{BasicTree:m},emits:["select"],setup(a,{emit:n}){const e=u([]);function r(){return p(this,null,function*(){e.value=yield d()})}function o(s){n("select",s[0])}return _(()=>{r()}),{treeData:e,handleSelect:o}}}),k={class:"m-4 mr-0 overflow-hidden bg-white"};function w(a,n,e,r,o,s){const c=v("BasicTree");return D(),T("div",k,[B(c,{title:"\u90E8\u95E8\u5217\u8868",toolbar:"",search:"",clickRowToExpand:!1,treeData:a.treeData,fieldNames:{key:"id",title:"deptName"},onSelect:a.handleSelect},null,8,["treeData","onSelect"])])}var L=h($,[["render",w]]);export{L as default};