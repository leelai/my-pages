import{a as r,v as u,a7 as l,o as s,j as m,z as d,m as p,bl as c,i as f}from"./index.bd9f6489.js";import{C as h}from"./index.236c0de6.js";import"./index.f3b8477d.js";/* empty css               */import{u as g}from"./useECharts.8599b108.js";import"./index.6d0b402d.js";import"./index.4c28a311.js";import"./Col.defd5b36.js";import"./useFlexGapSupport.7acea96f.js";import"./useRefs.6dead725.js";import"./PlusOutlined.565d8708.js";const z=r({props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,a=u(null),{setOptions:o}=g(a);return l(()=>t.loading,()=>{t.loading||o({tooltip:{trigger:"item"},series:[{name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"\u7535\u5B50\u4EA7\u54C1"},{value:310,name:"\u670D\u88C5"},{value:274,name:"\u5316\u5986\u54C1"},{value:400,name:"\u5BB6\u5C45"}].sort(function(i,n){return i.value-n.value}),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*400}}]})},{immediate:!0}),(i,n)=>(s(),m(f(h),{title:"\u6210\u4EA4\u5360\u6BD4",loading:e.loading},{default:d(()=>[p("div",{ref_key:"chartRef",ref:a,style:c({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{z as default};
