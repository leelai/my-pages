import{D as f}from"./index.7ce64e67.js";import{B as _}from"./TableImg.171b6a34.js";import"./BasicForm.6e81b3df.js";import{u as l}from"./useTable.ea6a9095.js";import{P as T}from"./index.31e4d04d.js";import{av as h,a as g,ax as r,o as D,j as b,z as B,n as t}from"./index.bd9f6489.js";import{D as c}from"./index.ead911b9.js";import{refundSchema as v,refundData as S,personSchema as y,personData as C,refundTableData as F,refundTableSchema as R,refundTimeTableSchema as E,refundTimeTableData as w}from"./data.b5c86c1b.js";import"./index.cfb4ecf1.js";import"./get.10e6e01a.js";import"./index.f09c72a3.js";import"./Checkbox.e442cb96.js";import"./index.c0347b23.js";import"./index.4e4d0287.js";import"./useForm.42d60da3.js";import"./index.29f355fa.js";import"./index.3f6cce78.js";import"./index.27ebcf1a.js";import"./uuid.2b29000c.js";import"./index.3283953e.js";import"./_baseIteratee.b26f7809.js";import"./DeleteOutlined.90ed9b00.js";import"./index.8904630b.js";import"./useRefs.6dead725.js";import"./Form.66d80fde.js";import"./Col.defd5b36.js";import"./useFlexGapSupport.7acea96f.js";import"./useSize.622adb41.js";import"./useWindowSizeFn.6e1ce129.js";import"./index.d1dcc2bb.js";import"./FullscreenOutlined.91a5fbf2.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.fb14a935.js";import"./eagerComputed.919a558b.js";import"./index.921b6783.js";import"./scrollTo.5579b759.js";import"./index.142d629a.js";/* empty css              *//* empty css               */import"./index.d58f5720.js";import"./index.f3c3b38d.js";import"./index.91c44e2b.js";import"./download.b4f86c3c.js";import"./base64Conver.08b9f4ec.js";import"./index.f4f3d31f.js";import"./index.4c28a311.js";import"./uniqBy.d4f83baf.js";import"./index.74614e52.js";import"./index.3f036e75.js";import"./useContentViewHeight.277415d3.js";import"./ArrowLeftOutlined.d12d1b3a.js";import"./index.2d4835a2.js";import"./transButton.48e18dfd.js";const x=g({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=l({title:"\u9000\u8D27\u5546\u54C1",dataSource:F,columns:R,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:n}),[p]=l({title:"\u9000\u8D27\u8FDB\u5EA6",columns:E,pagination:!1,dataSource:w,showIndexColumn:!1,scroll:{y:300}});function n(s){let a=0,i=0;return s.forEach(o=>{a+=o.t5,i+=o.t6}),[{t1:"\u603B\u8BA1",t5:a,t6:i}]}return{registerRefundTable:e,registerTimeTable:p,refundSchema:v,refundData:S,personSchema:y,personData:C}}});function P(e,p,n,s,a,i){const o=r("Description"),m=r("a-divider"),u=r("BasicTable"),d=r("PageWrapper");return D(),b(d,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:B(()=>[t(o,{size:"middle",title:"\u9000\u6B3E\u7533\u8BF7",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),t(m),t(o,{size:"middle",title:"\u7528\u6237\u4FE1\u606F",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),t(m),t(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),t(m),t(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}var Pe=h(x,[["render",P],["__scopeId","data-v-33e8998f"]]);export{Pe as default};