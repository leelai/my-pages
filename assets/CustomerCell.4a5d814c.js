import{B as d,T as l}from"./TableImg.171b6a34.js";import"./BasicForm.6e81b3df.js";import{u as c}from"./useTable.ea6a9095.js";import{av as F,a as g,ax as i,o as _,h as E,n as o,z as e,B as r,t as a}from"./index.bd9f6489.js";import{T}from"./index.27ebcf1a.js";import{A as f}from"./index.3f036e75.js";import{d as x}from"./table.bd14e02e.js";import"./index.f09c72a3.js";import"./Checkbox.e442cb96.js";import"./index.c0347b23.js";import"./index.4e4d0287.js";import"./useForm.42d60da3.js";import"./index.31e4d04d.js";import"./index.74614e52.js";import"./useWindowSizeFn.6e1ce129.js";import"./useContentViewHeight.277415d3.js";import"./ArrowLeftOutlined.d12d1b3a.js";import"./index.2d4835a2.js";import"./useSize.622adb41.js";import"./transButton.48e18dfd.js";import"./index.29f355fa.js";import"./index.3f6cce78.js";import"./uuid.2b29000c.js";import"./index.3283953e.js";import"./_baseIteratee.b26f7809.js";import"./get.10e6e01a.js";import"./DeleteOutlined.90ed9b00.js";import"./index.8904630b.js";import"./useRefs.6dead725.js";import"./Form.66d80fde.js";import"./Col.defd5b36.js";import"./useFlexGapSupport.7acea96f.js";import"./index.d1dcc2bb.js";import"./FullscreenOutlined.91a5fbf2.js";import"./index.ead911b9.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.fb14a935.js";import"./eagerComputed.919a558b.js";import"./index.921b6783.js";import"./scrollTo.5579b759.js";import"./index.142d629a.js";/* empty css              *//* empty css               */import"./index.d58f5720.js";import"./index.f3c3b38d.js";import"./index.91c44e2b.js";import"./download.b4f86c3c.js";import"./base64Conver.08b9f4ec.js";import"./index.f4f3d31f.js";import"./index.4c28a311.js";import"./uniqBy.d4f83baf.js";const A=[{title:"ID",dataIndex:"id"},{title:"\u5934\u50CF",dataIndex:"avatar",width:100},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u56FE\u7247\u5217\u88681",dataIndex:"imgArr",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140},{title:"\u7167\u7247\u5217\u88682",dataIndex:"imgs",width:160},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}],B=g({components:{BasicTable:d,TableImg:l,Tag:T,Avatar:f},setup(){const[u]=c({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:x,columns:A,bordered:!0,showTableSetting:!0});return{registerTable:u}}}),I={class:"p-4"};function C(u,b,h,v,D,w){const m=i("Tag"),s=i("Avatar"),p=i("TableImg"),n=i("BasicTable");return _(),E("div",I,[o(n,{onRegister:u.registerTable},{id:e(({record:t})=>[r(" ID: "+a(t.id),1)]),no:e(({record:t})=>[o(m,{color:"green"},{default:e(()=>[r(a(t.no),1)]),_:2},1024)]),avatar:e(({record:t})=>[o(s,{size:60,src:t.avatar},null,8,["src"])]),img:e(({text:t})=>[o(p,{size:60,simpleShow:!0,imgList:t},null,8,["imgList"])]),imgs:e(({text:t})=>[o(p,{size:60,imgList:t},null,8,["imgList"])]),category:e(({record:t})=>[o(m,{color:"green"},{default:e(()=>[r(a(t.no),1)]),_:2},1024)]),_:1},8,["onRegister"])])}var vt=F(B,[["render",C]]);export{vt as default};