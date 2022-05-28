import{B as C}from"./BasicForm.6e81b3df.js";import{av as B,a as c,cC as E,v as P,ax as i,o as b,j as F,z as e,m as a,n as s,E as v,B as l}from"./index.bd9f6489.js";import{P as k}from"./index.31e4d04d.js";/* empty css              *//* empty css               */import"./index.ead911b9.js";import"./index.f09c72a3.js";import"./Checkbox.e442cb96.js";import"./index.c0347b23.js";import"./index.27ebcf1a.js";import"./index.29f355fa.js";import"./index.3f6cce78.js";import"./index.d58f5720.js";import"./get.10e6e01a.js";import"./index.4e4d0287.js";import"./index.3283953e.js";import"./_baseIteratee.b26f7809.js";import"./DeleteOutlined.90ed9b00.js";import"./index.8904630b.js";import"./useRefs.6dead725.js";import"./Form.66d80fde.js";import"./Col.defd5b36.js";import"./useFlexGapSupport.7acea96f.js";import"./useSize.622adb41.js";import"./index.f3c3b38d.js";import"./index.d1dcc2bb.js";import"./useWindowSizeFn.6e1ce129.js";import"./FullscreenOutlined.91a5fbf2.js";import"./index.91c44e2b.js";import"./index.921b6783.js";import"./uuid.2b29000c.js";import"./download.b4f86c3c.js";import"./base64Conver.08b9f4ec.js";import"./index.f4f3d31f.js";import"./index.4c28a311.js";import"./uniqBy.d4f83baf.js";import"./index.74614e52.js";import"./index.3f036e75.js";import"./eagerComputed.919a558b.js";import"./useContentViewHeight.277415d3.js";import"./ArrowLeftOutlined.d12d1b3a.js";import"./index.2d4835a2.js";import"./transButton.48e18dfd.js";const _=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:t=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}],$=c({components:{BasicForm:C,CollapseContainer:E,PageWrapper:k},setup(){const t=P(null),{createMessage:o}=v();return{formElRef:t,schemas:_,handleSubmit:r=>{o.success("click search,values:"+JSON.stringify(r))},setProps(r){const p=t.value;!p||p.setProps(r)}}}}),D={class:"mb-4"},A=l(" \u66F4\u6539labelWidth "),g=l(" \u8FD8\u539FlabelWidth "),S=l(" \u66F4\u6539Size "),h=l(" \u8FD8\u539FSize "),w=l(" \u7981\u7528\u8868\u5355 "),W=l(" \u89E3\u9664\u7981\u7528 "),R=l(" \u7D27\u51D1\u8868\u5355 "),z=l(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD "),N=l(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E "),O={class:"mb-4"},G=l(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE "),y=l(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE "),V=l(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE "),I=l(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE "),M=l(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE "),j=l(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE "),J=l(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE "),T=l(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ");function q(t,o,r,p,H,K){const u=i("a-button"),m=i("BasicForm"),d=i("CollapseContainer"),f=i("PageWrapper");return b(),F(f,{title:"Ref\u64CD\u4F5C\u793A\u4F8B"},{default:e(()=>[a("div",D,[s(u,{onClick:o[0]||(o[0]=n=>t.setProps({labelWidth:150})),class:"mr-2"},{default:e(()=>[A]),_:1}),s(u,{onClick:o[1]||(o[1]=n=>t.setProps({labelWidth:120})),class:"mr-2"},{default:e(()=>[g]),_:1}),s(u,{onClick:o[2]||(o[2]=n=>t.setProps({size:"large"})),class:"mr-2"},{default:e(()=>[S]),_:1}),s(u,{onClick:o[3]||(o[3]=n=>t.setProps({size:"default"})),class:"mr-2"},{default:e(()=>[h]),_:1}),s(u,{onClick:o[4]||(o[4]=n=>t.setProps({disabled:!0})),class:"mr-2"},{default:e(()=>[w]),_:1}),s(u,{onClick:o[5]||(o[5]=n=>t.setProps({disabled:!1})),class:"mr-2"},{default:e(()=>[W]),_:1}),s(u,{onClick:o[6]||(o[6]=n=>t.setProps({compact:!0})),class:"mr-2"},{default:e(()=>[R]),_:1}),s(u,{onClick:o[7]||(o[7]=n=>t.setProps({compact:!1})),class:"mr-2"},{default:e(()=>[z]),_:1}),s(u,{onClick:o[8]||(o[8]=n=>t.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:e(()=>[N]),_:1})]),a("div",O,[s(u,{onClick:o[9]||(o[9]=n=>t.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:e(()=>[G]),_:1}),s(u,{onClick:o[10]||(o[10]=n=>t.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:e(()=>[y]),_:1}),s(u,{onClick:o[11]||(o[11]=n=>t.setProps({showResetButton:!1})),class:"mr-2"},{default:e(()=>[V]),_:1}),s(u,{onClick:o[12]||(o[12]=n=>t.setProps({showResetButton:!0})),class:"mr-2"},{default:e(()=>[I]),_:1}),s(u,{onClick:o[13]||(o[13]=n=>t.setProps({showSubmitButton:!1})),class:"mr-2"},{default:e(()=>[M]),_:1}),s(u,{onClick:o[14]||(o[14]=n=>t.setProps({showSubmitButton:!0})),class:"mr-2"},{default:e(()=>[j]),_:1}),s(u,{onClick:o[15]||(o[15]=n=>t.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:e(()=>[J]),_:1}),s(u,{onClick:o[16]||(o[16]=n=>t.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:e(()=>[T]),_:1})]),s(d,{title:"\u4F7F\u7528ref\u8C03\u7528\u8868\u5355\u5185\u90E8\u51FD\u6570\u793A\u4F8B"},{default:e(()=>[s(m,{schemas:t.schemas,ref:"formElRef",labelWidth:100,onSubmit:t.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var yo=B($,[["render",q]]);export{yo as default};