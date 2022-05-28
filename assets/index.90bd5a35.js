import{av as B,a as h,af as R,v as C,ax as r,o as _,j as y,z as a,n as u,aH as w,al as $,B as n}from"./index.bd9f6489.js";import{A as T}from"./index.91c44e2b.js";import{S as V}from"./index.f3c3b38d.js";import{b as d}from"./index.d1dcc2bb.js";import k from"./Modal1.07fd6879.js";import v from"./Modal2.14581f94.js";import D from"./Modal3.9015da52.js";import b from"./Modal4.588faa94.js";import{P}from"./index.31e4d04d.js";import"./useFlexGapSupport.7acea96f.js";import"./useWindowSizeFn.6e1ce129.js";import"./FullscreenOutlined.91a5fbf2.js";import"./BasicForm.6e81b3df.js";/* empty css              *//* empty css               */import"./index.ead911b9.js";import"./index.f09c72a3.js";import"./Checkbox.e442cb96.js";import"./index.c0347b23.js";import"./index.27ebcf1a.js";import"./index.29f355fa.js";import"./index.3f6cce78.js";import"./index.d58f5720.js";import"./get.10e6e01a.js";import"./index.4e4d0287.js";import"./index.3283953e.js";import"./_baseIteratee.b26f7809.js";import"./DeleteOutlined.90ed9b00.js";import"./index.8904630b.js";import"./useRefs.6dead725.js";import"./Form.66d80fde.js";import"./Col.defd5b36.js";import"./useSize.622adb41.js";import"./index.921b6783.js";import"./uuid.2b29000c.js";import"./download.b4f86c3c.js";import"./base64Conver.08b9f4ec.js";import"./index.f4f3d31f.js";import"./index.4c28a311.js";import"./uniqBy.d4f83baf.js";import"./useForm.42d60da3.js";import"./index.74614e52.js";import"./index.3f036e75.js";import"./eagerComputed.919a558b.js";import"./useContentViewHeight.277415d3.js";import"./ArrowLeftOutlined.d12d1b3a.js";import"./index.2d4835a2.js";import"./transButton.48e18dfd.js";const S=h({components:{Alert:T,Modal1:k,Modal2:v,Modal3:D,Modal4:b,PageWrapper:P,ASpace:V},setup(){const o=R(null),[e,{openModal:F}]=d(),[E,{openModal:M}]=d(),[g,{openModal:i}]=d(),[t,{openModal:p}]=d(),l=C(!1),m=C(null);function c(){p(!0,{data:"content",info:"Info"})}function A(){F(!0)}function f(s){switch(s){case 1:o.value=k;break;case 2:o.value=v;break;case 3:o.value=D;break;default:o.value=b;break}$(()=>{m.value={data:Math.random(),info:"Info222"},l.value=!0})}return{register1:e,openModal1:F,register2:E,openModal2:M,register3:g,openModal3:i,register4:t,openModal4:p,modalVisible:l,userData:m,openTargetModal:f,send:c,currentModal:o,openModalLoading:A}}}),W=n(" \u6253\u5F00\u5F39\u7A97,\u52A0\u8F7D\u52A8\u6001\u6570\u636E\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6(\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F) "),H=n(" \u6253\u5F00\u5F39\u7A97 "),I=n(" \u6253\u5F00\u5F39\u7A97 "),L=n(" \u6253\u5F00\u5F39\u7A97\u5E76\u4F20\u9012\u6570\u636E "),N=n(" \u6253\u5F00\u5F39\u7A971 "),j=n(" \u6253\u5F00\u5F39\u7A972 "),z=n(" \u6253\u5F00\u5F39\u7A973 "),U=n(" \u6253\u5F00\u5F39\u7A974 ");function q(o,e,F,E,M,g){const i=r("Alert"),t=r("a-button"),p=r("a-space"),l=r("Modal1"),m=r("Modal2"),c=r("Modal3"),A=r("Modal4"),f=r("PageWrapper");return _(),y(f,{title:"modal\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:a(()=>[u(i,{message:`\u4F7F\u7528 useModal \u8FDB\u884C\u5F39\u7A97\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8\uFF0C\u53EF\u4EE5\u901A\u8FC7 draggable
    \u53C2\u6570\u8FDB\u884C\u63A7\u5236\u662F\u5426\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F\uFF0C\u5E76\u6F14\u793A\u4E86\u5728Modal\u5185\u52A8\u6001\u52A0\u8F7D\u5185\u5BB9\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6`,"show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:a(()=>[W]),_:1},8,["onClick"]),u(i,{message:"\u5185\u5916\u540C\u65F6\u540C\u65F6\u663E\u793A\u9690\u85CF","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal2},{default:a(()=>[H]),_:1},8,["onClick"]),u(i,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal3},{default:a(()=>[I]),_:1},8,["onClick"]),u(i,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.send},{default:a(()=>[L]),_:1},8,["onClick"]),u(i,{message:"\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6\u7684\u65B9\u5F0F\u5728\u9875\u9762\u5185\u4F7F\u7528\u591A\u4E2A\u5F39\u7A97","show-icon":""}),u(p,null,{default:a(()=>[u(t,{type:"primary",class:"my-4",onClick:e[0]||(e[0]=s=>o.openTargetModal(1))},{default:a(()=>[N]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[1]||(e[1]=s=>o.openTargetModal(2))},{default:a(()=>[j]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[2]||(e[2]=s=>o.openTargetModal(3))},{default:a(()=>[z]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[3]||(e[3]=s=>o.openTargetModal(4))},{default:a(()=>[U]),_:1})]),_:1}),(_(),y(w(o.currentModal),{visible:o.modalVisible,"onUpdate:visible":e[4]||(e[4]=s=>o.modalVisible=s),userData:o.userData},null,8,["visible","userData"])),u(l,{onRegister:o.register1,minHeight:100},null,8,["onRegister"]),u(m,{onRegister:o.register2},null,8,["onRegister"]),u(c,{onRegister:o.register3},null,8,["onRegister"]),u(A,{onRegister:o.register4},null,8,["onRegister"])]),_:1})}var No=B(S,[["render",q]]);export{No as default};
