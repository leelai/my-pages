import{I as B}from"./index.ce986e95.js";import{B as h}from"./TableImg.171b6a34.js";import"./BasicForm.6e81b3df.js";import{P as S}from"./index.31e4d04d.js";import{av as E,a as v,v as F,ax as e,o as i,j as d,z as s,n as f,h as I,aA as b,F as g,B as C}from"./index.bd9f6489.js";import"./index.d1dcc2bb.js";import"./useWindowSizeFn.6e1ce129.js";import"./FullscreenOutlined.91a5fbf2.js";import"./useForm.42d60da3.js";import"./index.f09c72a3.js";import"./Checkbox.e442cb96.js";import"./index.c0347b23.js";import"./index.4e4d0287.js";import"./index.29f355fa.js";import"./index.3f6cce78.js";import"./index.27ebcf1a.js";import"./uuid.2b29000c.js";import"./index.3283953e.js";import"./_baseIteratee.b26f7809.js";import"./get.10e6e01a.js";import"./DeleteOutlined.90ed9b00.js";import"./index.8904630b.js";import"./useRefs.6dead725.js";import"./Form.66d80fde.js";import"./Col.defd5b36.js";import"./useFlexGapSupport.7acea96f.js";import"./useSize.622adb41.js";import"./index.ead911b9.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.fb14a935.js";import"./eagerComputed.919a558b.js";import"./index.921b6783.js";import"./scrollTo.5579b759.js";import"./index.142d629a.js";/* empty css              *//* empty css               */import"./index.d58f5720.js";import"./index.f3c3b38d.js";import"./index.91c44e2b.js";import"./download.b4f86c3c.js";import"./base64Conver.08b9f4ec.js";import"./index.f4f3d31f.js";import"./index.4c28a311.js";import"./uniqBy.d4f83baf.js";import"./index.74614e52.js";import"./index.3f036e75.js";import"./useContentViewHeight.277415d3.js";import"./ArrowLeftOutlined.d12d1b3a.js";import"./index.2d4835a2.js";import"./transButton.48e18dfd.js";const k=v({components:{BasicTable:h,ImpExcel:B,PageWrapper:S},setup(){const t=F([]);function c(p){t.value=[];for(const n of p){const{header:u,results:l,meta:{sheetName:m}}=n,o=[];for(const r of u)o.push({title:r,dataIndex:r});t.value.push({title:m,dataSource:l,columns:o})}}return{loadDataSuccess:c,tableListRef:t}}}),D=C(" \u5BFC\u5165Excel ");function P(t,c,p,n,u,l){const m=e("a-button"),o=e("ImpExcel"),r=e("BasicTable"),_=e("PageWrapper");return i(),d(_,{title:"excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B"},{default:s(()=>[f(o,{onSuccess:t.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:s(()=>[f(m,{class:"m-3"},{default:s(()=>[D]),_:1})]),_:1},8,["onSuccess"]),(i(!0),I(g,null,b(t.tableListRef,(a,x)=>(i(),d(r,{key:x,title:a.title,columns:a.columns,dataSource:a.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}var Ct=E(k,[["render",P]]);export{Ct as default};
