import{u as m}from"./useContextMenu.f9259e08.js";import{av as d,a as C,cC as _,ax as l,o as f,j as x,z as t,n as a,B as c,E as b}from"./index.bd9f6489.js";import{P as h}from"./index.31e4d04d.js";import"./index.ead911b9.js";import"./index.74614e52.js";import"./index.3f036e75.js";import"./useSize.622adb41.js";import"./eagerComputed.919a558b.js";import"./useWindowSizeFn.6e1ce129.js";import"./useContentViewHeight.277415d3.js";import"./ArrowLeftOutlined.d12d1b3a.js";import"./index.2d4835a2.js";import"./transButton.48e18dfd.js";const w=C({components:{CollapseContainer:_,PageWrapper:h},setup(){const[e]=m(),{createMessage:n}=b();function s(o){e({event:o,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})}function i(o){e({event:o,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}return{handleContext:s,handleMultipleContext:i}}}),N=c(" Right Click on me "),g=c(" Right Click on me ");function k(e,n,s,i,o,M){const r=l("a-button"),p=l("CollapseContainer"),u=l("PageWrapper");return f(),x(u,{title:"\u53F3\u952E\u83DC\u5355\u793A\u4F8B"},{default:t(()=>[a(p,{title:"Simple"},{default:t(()=>[a(r,{type:"primary",onContextmenu:e.handleContext},{default:t(()=>[N]),_:1},8,["onContextmenu"])]),_:1}),a(p,{title:"Multiple",class:"mt-4"},{default:t(()=>[a(r,{type:"primary",onContextmenu:e.handleMultipleContext},{default:t(()=>[g]),_:1},8,["onContextmenu"])]),_:1})]),_:1})}var D=d(w,[["render",k]]);export{D as default};
