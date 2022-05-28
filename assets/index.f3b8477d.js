import{v as B,cb as we,M as Je,a as fe,f as J,n as c,c1 as ne,R as he,S as D,L as We,_ as Z,cc as G,a6 as _,N as De,a7 as pe,cd as Lt,b6 as Mt,ce as Kt,cf as Ot,G as Qe,a4 as Wt,K as Dt,bb as Ft,cg as ct,T as ue,ch as pt,X as st,ci as Be,cj as jt,ar as xt,Q as zt,$ as Ht,ck as Vt,c0 as Gt,c4 as Ze,J as Ut,cl as $t,cm as dt,c6 as Xt,Y as Yt}from"./index.bd9f6489.js";import{u as Zt}from"./useRefs.6dead725.js";import{P as Jt}from"./PlusOutlined.565d8708.js";function Qt(p){var e=B(),t=B(!1);function l(){for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];t.value||(we.cancel(e.value),e.value=we(function(){p.apply(void 0,i)}))}return Je(function(){t.value=!0,we.cancel(e.value)}),l}function qt(p){var e=B([]),t=B(typeof p=="function"?p():p),l=Qt(function(){var i=t.value;e.value.forEach(function(r){i=r(i)}),e.value=[],t.value=i});function a(i){e.value.push(i),l()}return[t,a]}var ea=fe({name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var l=t.expose,a=t.attrs,i=B();function r(v){var b;!((b=e.tab)===null||b===void 0)&&b.disabled||e.onClick(v)}l({domRef:i});function s(v){var b;v.preventDefault(),v.stopPropagation(),e.editable.onEdit("remove",{key:(b=e.tab)===null||b===void 0?void 0:b.key,event:v})}var o=J(function(){var v;return e.editable&&e.closable!==!1&&!(!((v=e.tab)===null||v===void 0)&&v.disabled)});return function(){var v,b,h=e.prefixCls,g=e.id,L=e.active,k=e.tab,F=k.key,I=k.tab,z=k.disabled,x=k.closeIcon,u=e.renderWrapper,w=e.removeAriaLabel,H=e.editable,M=e.onFocus,P="".concat(h,"-tab"),K=c("div",{key:F,ref:i,class:he(P,(v={},D(v,"".concat(P,"-with-remove"),o.value),D(v,"".concat(P,"-active"),L),D(v,"".concat(P,"-disabled"),z),v)),style:a.style,onClick:r},[c("div",{role:"tab","aria-selected":L,id:g&&"".concat(g,"-tab-").concat(F),class:"".concat(P,"-btn"),"aria-controls":g&&"".concat(g,"-panel-").concat(F),"aria-disabled":z,tabindex:z?null:0,onClick:function(O){O.stopPropagation(),r(O)},onKeydown:function(O){[ne.SPACE,ne.ENTER].includes(O.which)&&(O.preventDefault(),r(O))},onFocus:M},[typeof I=="function"?I():I]),o.value&&c("button",{type:"button","aria-label":w||"remove",tabindex:0,class:"".concat(P,"-remove"),onClick:function(O){O.stopPropagation(),s(O)}},[(x==null?void 0:x())||((b=H.removeIcon)===null||b===void 0?void 0:b.call(H))||"\xD7"])]);return u?u(K):K}}}),ft={width:0,height:0,left:0,top:0};function ta(p,e){var t=B(new Map);return We(function(){for(var l,a,i=new Map,r=p.value,s=e.value.get((l=r[0])===null||l===void 0?void 0:l.key)||ft,o=s.left+s.width,v=0;v<r.length;v+=1){var b=r[v].key,h=e.value.get(b);h||(h=e.value.get((a=r[v-1])===null||a===void 0?void 0:a.key)||ft);var g=i.get(b)||Z({},h);g.right=o-g.left-g.width,i.set(b,g)}t.value=new Map(i)}),t}var Tt=fe({name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var l=t.expose,a=t.attrs,i=B();return l({domRef:i}),function(){var r=e.prefixCls,s=e.editable,o=e.locale;return!s||s.showAdd===!1?null:c("button",{ref:i,type:"button",class:"".concat(r,"-nav-add"),style:a.style,"aria-label":(o==null?void 0:o.addAriaLabel)||"Add tab",onClick:function(b){s.onEdit("add",{event:b})}},[s.addIcon?s.addIcon():"+"])}}}),aa={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Qe.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}},na=fe({name:"OperationNode",inheritAttrs:!1,props:aa,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var l=t.attrs,a=t.slots,i=G(!1),r=_(i,2),s=r[0],o=r[1],v=G(null),b=_(v,2),h=b[0],g=b[1],L=function(u){for(var w=e.tabs.filter(function(U){return!U.disabled}),H=w.findIndex(function(U){return U.key===h.value})||0,M=w.length,P=0;P<M;P+=1){H=(H+u+M)%M;var K=w[H];if(!K.disabled){g(K.key);return}}},k=function(u){var w=u.which;if(!s.value){[ne.DOWN,ne.SPACE,ne.ENTER].includes(w)&&(o(!0),u.preventDefault());return}switch(w){case ne.UP:L(-1),u.preventDefault();break;case ne.DOWN:L(1),u.preventDefault();break;case ne.ESC:o(!1);break;case ne.SPACE:case ne.ENTER:h.value!==null&&e.onTabClick(h.value,u);break}},F=J(function(){return"".concat(e.id,"-more-popup")}),I=J(function(){return h.value!==null?"".concat(F.value,"-").concat(h.value):null}),z=function(u,w){u.preventDefault(),u.stopPropagation(),e.editable.onEdit("remove",{key:w,event:u})};return De(function(){pe(h,function(){var x=document.getElementById(I.value);x&&x.scrollIntoView&&x.scrollIntoView(!1)},{flush:"post",immediate:!0})}),pe(s,function(){s.value||g(null)}),function(){var x,u=e.prefixCls,w=e.id,H=e.tabs,M=e.locale,P=e.mobile,K=e.moreIcon,U=K===void 0?((x=a.moreIcon)===null||x===void 0?void 0:x.call(a))||c(Lt,null,null):K,O=e.moreTransitionName,j=e.editable,ve=e.tabBarGutter,m=e.rtl,n=e.onTabClick,d="".concat(u,"-dropdown"),T=M==null?void 0:M.dropdownAriaLabel,W=D({},m?"marginRight":"marginLeft",ve);H.length||(W.visibility="hidden",W.order=1);var R=he(D({},"".concat(d,"-rtl"),m)),E=P?null:c(Ot,{prefixCls:d,trigger:["hover"],visible:s.value,transitionName:O,onVisibleChange:o,overlayClassName:R,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return c(Mt,{onClick:function(A){var $=A.key,ie=A.domEvent;n($,ie),o(!1)},id:F.value,tabindex:-1,role:"listbox","aria-activedescendant":I.value,selectedKeys:[h.value],"aria-label":T!==void 0?T:"expanded dropdown"},{default:function(){return[H.map(function(A){var $,ie,Te=j&&A.closable!==!1&&!A.disabled;return c(Kt,{key:A.key,id:"".concat(F.value,"-").concat(A.key),role:"option","aria-controls":w&&"".concat(w,"-panel-").concat(A.key),disabled:A.disabled},{default:function(){return[c("span",null,[typeof A.tab=="function"?A.tab():A.tab]),Te&&c("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(d,"-menu-item-remove"),onClick:function(ce){ce.stopPropagation(),z(ce,A.key)}},[(($=A.closeIcon)===null||$===void 0?void 0:$.call(A))||((ie=j.removeIcon)===null||ie===void 0?void 0:ie.call(j))||"\xD7"])]}})})]}})},default:function(){return c("button",{type:"button",class:"".concat(u,"-nav-more"),style:W,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":F.value,id:"".concat(w,"-more"),"aria-expanded":s.value,onKeydown:k},[U])}});return c("div",{class:he("".concat(u,"-nav-operations"),l.class),style:l.style},[E,c(Tt,{prefixCls:u,locale:M,editable:j},null)])}}}),Ct=Symbol("tabsContextKey"),kt=function(e){Wt(Ct,e)},It=function(){return Dt(Ct,{tabs:B([]),prefixCls:B()})};fe({name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var l=t.slots;return kt(Ft(e)),function(){var a;return(a=l.default)===null||a===void 0?void 0:a.call(l)}}});var ia=.1,bt=.01,Oe=20,yt=Math.pow(.995,Oe);function ra(p,e){var t=G(),l=_(t,2),a=l[0],i=l[1],r=G(0),s=_(r,2),o=s[0],v=s[1],b=G(0),h=_(b,2),g=h[0],L=h[1],k=G(),F=_(k,2),I=F[0],z=F[1],x=B();function u(m){var n=m.touches[0],d=n.screenX,T=n.screenY;i({x:d,y:T}),clearInterval(x.value)}function w(m){if(!!a.value){m.preventDefault();var n=m.touches[0],d=n.screenX,T=n.screenY,W=d-a.value.x,R=T-a.value.y;e(W,R),i({x:d,y:T});var E=Date.now();L(E-o.value),v(E),z({x:W,y:R})}}function H(){if(!!a.value){var m=I.value;if(i(null),z(null),m){var n=m.x/g.value,d=m.y/g.value,T=Math.abs(n),W=Math.abs(d);if(Math.max(T,W)<ia)return;var R=n,E=d;x.value=setInterval(function(){if(Math.abs(R)<bt&&Math.abs(E)<bt){clearInterval(x.value);return}R*=yt,E*=yt,e(R*Oe,E*Oe)},Oe)}}}var M=B();function P(m){var n=m.deltaX,d=m.deltaY,T=0,W=Math.abs(n),R=Math.abs(d);W===R?T=M.value==="x"?n:d:W>R?(T=n,M.value="x"):(T=d,M.value="y"),e(-T,-T)&&m.preventDefault()}var K=B({onTouchStart:u,onTouchMove:w,onTouchEnd:H,onWheel:P});function U(m){K.value.onTouchStart(m)}function O(m){K.value.onTouchMove(m)}function j(m){K.value.onTouchEnd(m)}function ve(m){K.value.onWheel(m)}De(function(){var m,n;document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",j,{passive:!1}),(m=p.value)===null||m===void 0||m.addEventListener("touchstart",U,{passive:!1}),(n=p.value)===null||n===void 0||n.addEventListener("wheel",ve,{passive:!1})}),Je(function(){document.removeEventListener("touchmove",O),document.removeEventListener("touchend",j)})}function mt(p,e){var t=B(p);function l(a){var i=typeof a=="function"?a(t.value):a;i!==t.value&&e(i,t.value),t.value=i}return[t,l]}var ht={width:0,height:0,left:0,top:0,right:0},la=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:Qe.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}},gt=fe({name:"TabNavList",inheritAttrs:!1,props:la(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var l=t.attrs,a=t.slots,i=It(),r=i.tabs,s=i.prefixCls,o=B(),v=B(),b=B(),h=B(),g=Zt(),L=_(g,2),k=L[0],F=L[1],I=J(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),z=mt(0,function(y,S){I.value&&e.onTabScroll&&e.onTabScroll({direction:y>S?"left":"right"})}),x=_(z,2),u=x[0],w=x[1],H=mt(0,function(y,S){!I.value&&e.onTabScroll&&e.onTabScroll({direction:y>S?"top":"bottom"})}),M=_(H,2),P=M[0],K=M[1],U=G(0),O=_(U,2),j=O[0],ve=O[1],m=G(0),n=_(m,2),d=n[0],T=n[1],W=G(null),R=_(W,2),E=R[0],xe=R[1],ge=G(null),A=_(ge,2),$=A[0],ie=A[1],Te=G(0),Se=_(Te,2),Ce=Se[0],ce=Se[1],Ae=G(0),Q=_(Ae,2),Fe=Q[0],Re=Q[1],Ne=qt(new Map),Le=_(Ne,2),je=Le[0],ke=Le[1],Me=ta(r,je),Et=J(function(){return"".concat(s.value,"-nav-operations-hidden")}),Ie=B(0),Pe=B(0);We(function(){I.value?e.rtl?(Ie.value=0,Pe.value=Math.max(0,j.value-E.value)):(Ie.value=Math.min(0,E.value-j.value),Pe.value=0):(Ie.value=Math.min(0,$.value-d.value),Pe.value=0)});var ze=function(S){return S<Ie.value?Ie.value:S>Pe.value?Pe.value:S},qe=B(),_t=G(),et=_(_t,2),He=et[0],tt=et[1],Ve=function(){tt(Date.now())},Ge=function(){clearTimeout(qe.value)},at=function(S,f){S(function(N){var C=ze(N+f);return C})};ra(o,function(y,S){if(I.value){if(E.value>=j.value)return!1;at(w,y)}else{if($.value>=d.value)return!1;at(K,S)}return Ge(),Ve(),!0}),pe(He,function(){Ge(),He.value&&(qe.value=setTimeout(function(){tt(0)},100))});var nt=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,f=Me.value.get(S)||{width:0,height:0,left:0,right:0,top:0};if(I.value){var N=u.value;e.rtl?f.right<u.value?N=f.right:f.right+f.width>u.value+E.value&&(N=f.right+f.width-E.value):f.left<-u.value?N=-f.left:f.left+f.width>-u.value+E.value&&(N=-(f.left+f.width-E.value)),K(0),w(ze(N))}else{var C=P.value;f.top<-P.value?C=-f.top:f.top+f.height>-P.value+$.value&&(C=-(f.top+f.height-$.value)),w(0),K(ze(C))}},Ue=B(0),$e=B(0);We(function(){var y,S,f,N,C,X,Y,be=Me.value;["top","bottom"].includes(e.tabPosition)?(S="width",C=E.value,X=j.value,Y=Ce.value,f=e.rtl?"right":"left",N=Math.abs(u.value)):(S="height",C=$.value,X=j.value,Y=Fe.value,f="top",N=-P.value);var q=C;X+Y>C&&X<C&&(q=C-Y);var re=r.value;if(!re.length){var le;return le=[0,0],Ue.value=le[0],$e.value=le[1],le}for(var ye=re.length,V=ye,te=0;te<ye;te+=1){var ae=be.get(re[te].key)||ht;if(ae[f]+ae[S]>N+q){V=te-1;break}}for(var oe=0,ee=ye-1;ee>=0;ee-=1){var me=be.get(re[ee].key)||ht;if(me[f]<N){oe=ee+1;break}}return y=[oe,V],Ue.value=y[0],$e.value=y[1],y});var Xe=function(){var S,f,N,C,X,Y=((S=o.value)===null||S===void 0?void 0:S.offsetWidth)||0,be=((f=o.value)===null||f===void 0?void 0:f.offsetHeight)||0,q=((N=h.value)===null||N===void 0?void 0:N.$el)||{},re=q.offsetWidth||0,le=q.offsetHeight||0;xe(Y),ie(be),ce(re),Re(le);var ye=(((C=v.value)===null||C===void 0?void 0:C.offsetWidth)||0)-re,V=(((X=v.value)===null||X===void 0?void 0:X.offsetHeight)||0)-le;ve(ye),T(V),ke(function(){var te=new Map;return r.value.forEach(function(ae){var oe=ae.key,ee,me=F.value.get(oe),de=((ee=me)===null||ee===void 0?void 0:ee.$el)||me;de&&te.set(oe,{width:de.offsetWidth,height:de.offsetHeight,left:de.offsetLeft,top:de.offsetTop})}),te})},it=J(function(){return[].concat(st(r.value.slice(0,Ue.value)),st(r.value.slice($e.value+1)))}),Bt=G(),rt=_(Bt,2),wt=rt[0],At=rt[1],se=J(function(){return Me.value.get(e.activeKey)}),lt=B(),ot=function(){we.cancel(lt.value)};pe([se,I,function(){return e.rtl}],function(){var y={};se.value&&(I.value?(e.rtl?y.right=Be(se.value.right):y.left=Be(se.value.left),y.width=Be(se.value.width)):(y.top=Be(se.value.top),y.height=Be(se.value.height))),ot(),lt.value=we(function(){At(y)})}),pe([function(){return e.activeKey},se,Me,I],function(){nt()},{flush:"post"}),pe([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return r.value}],function(){Xe()},{flush:"post"});var Ye=function(S){var f=S.position,N=S.prefixCls,C=S.extra;if(!C)return null;var X=C==null?void 0:C({position:f});return X?c("div",{class:"".concat(N,"-extra-content")},[X]):null};return Je(function(){Ge(),ot()}),function(){var y,S=e.id,f=e.animated,N=e.activeKey,C=e.rtl,X=e.editable,Y=e.locale,be=e.tabPosition,q=e.tabBarGutter,re=e.onTabClick,le=l.class,ye=l.style,V=s.value,te=!!it.value.length,ae="".concat(V,"-nav-wrap"),oe,ee,me,de;I.value?C?(ee=u.value>0,oe=u.value+E.value<j.value):(oe=u.value<0,ee=-u.value+E.value<j.value):(me=P.value<0,de=-P.value+$.value<d.value);var Ke={};be==="top"||be==="bottom"?Ke[C?"marginRight":"marginLeft"]=typeof q=="number"?"".concat(q,"px"):q:Ke.marginTop=typeof q=="number"?"".concat(q,"px"):q;var ut=r.value.map(function(Ee,vt){var _e=Ee.key;return c(ea,{id:S,prefixCls:V,key:_e,tab:Ee,style:vt===0?void 0:Ke,closable:Ee.closable,editable:X,active:_e===N,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:k(_e),onClick:function(Nt){re(_e,Nt)},onFocus:function(){nt(_e),Ve(),o.value&&(C||(o.value.scrollLeft=0),o.value.scrollTop=0)}},a)});return c("div",{role:"tablist",class:he("".concat(V,"-nav"),le),style:ye,onKeydown:function(){Ve()}},[c(Ye,{position:"left",prefixCls:V,extra:a.leftExtra},null),c(ct,{onResize:Xe},{default:function(){return[c("div",{class:he(ae,(y={},D(y,"".concat(ae,"-ping-left"),oe),D(y,"".concat(ae,"-ping-right"),ee),D(y,"".concat(ae,"-ping-top"),me),D(y,"".concat(ae,"-ping-bottom"),de),y)),ref:o},[c(ct,{onResize:Xe},{default:function(){return[c("div",{ref:v,class:"".concat(V,"-nav-list"),style:{transform:"translate(".concat(u.value,"px, ").concat(P.value,"px)"),transition:He.value?"none":void 0}},[ut,c(Tt,{ref:h,prefixCls:V,locale:Y,editable:X,style:Z(Z({},ut.length===0?void 0:Ke),{visibility:te?"hidden":null})},null),c("div",{class:he("".concat(V,"-ink-bar"),D({},"".concat(V,"-ink-bar-animated"),f.inkBar)),style:wt.value},null)])]}})])]}}),c(na,ue(ue({},e),{},{removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:b,prefixCls:V,tabs:it.value,class:!te&&Et.value}),pt(a,["moreIcon"])),c(Ye,{position:"right",prefixCls:V,extra:a.rightExtra},null),c(Ye,{position:"right",prefixCls:V,extra:a.tabBarExtraContent},null)])}}}),oa=fe({name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=It(),l=t.tabs,a=t.prefixCls;return function(){var i=e.id,r=e.activeKey,s=e.animated,o=e.tabPosition,v=e.rtl,b=e.destroyInactiveTabPane,h=s.tabPane,g=a.value,L=l.value.findIndex(function(k){return k.key===r});return c("div",{class:"".concat(g,"-content-holder")},[c("div",{class:["".concat(g,"-content"),"".concat(g,"-content-").concat(o),D({},"".concat(g,"-content-animated"),h)],style:L&&h?D({},v?"marginRight":"marginLeft","-".concat(L,"00%")):null},[l.value.map(function(k){return jt(k.node,{key:k.key,prefixCls:g,tabKey:k.key,id:i,animated:h,active:k.key===r,destroyInactiveTabPane:b})})])])}}}),St=0,Pt=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:Qe.any}};function ua(p){return p.map(function(e){if(Ht(e)){for(var t=Z({},e.props||{}),l=0,a=Object.entries(t);l<a.length;l++){var i=_(a[l],2),r=i[0],s=i[1];delete t[r],t[Vt(r)]=s}var o=e.children||{},v=e.key!==void 0?e.key:void 0,b=t.tab,h=b===void 0?o.tab:b,g=t.disabled,L=t.forceRender,k=t.closable,F=t.animated,I=t.active,z=t.destroyInactiveTabPane;return Z(Z({key:v},t),{node:e,closeIcon:o.closeIcon,tab:h,disabled:g===""||g,forceRender:L===""||L,closable:k===""||k,animated:F===""||F,active:I===""||I,destroyInactiveTabPane:z===""||z})}return null}).filter(function(e){return e})}var va=fe({name:"InternalTabs",inheritAttrs:!1,props:Z(Z({},xt(Pt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var l=t.attrs,a=t.slots;Ze(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Ze(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Ze(a.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var i=Ut("tabs",e),r=i.prefixCls,s=i.direction,o=i.size,v=i.rootPrefixCls,b=J(function(){return s.value==="rtl"}),h=J(function(){var n=e.animated,d=e.tabPosition;return n===!1||["left","right"].includes(d)?{inkBar:!1,tabPane:!1}:n===!0?{inkBar:!0,tabPane:!0}:Z({inkBar:!0,tabPane:!1},Yt(n)==="object"?n:{})}),g=G(!1),L=_(g,2),k=L[0],F=L[1];De(function(){F($t())});var I=dt(function(){var n;return(n=e.tabs[0])===null||n===void 0?void 0:n.key},{value:J(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),z=_(I,2),x=z[0],u=z[1],w=G(function(){return e.tabs.findIndex(function(n){return n.key===x.value})}),H=_(w,2),M=H[0],P=H[1];We(function(){var n,d=e.tabs.findIndex(function(T){return T.key===x.value});d===-1&&(d=Math.max(0,Math.min(M.value,e.tabs.length-1)),u((n=e.tabs[d])===null||n===void 0?void 0:n.key)),P(d)});var K=dt(null,{value:J(function(){return e.id})}),U=_(K,2),O=U[0],j=U[1],ve=J(function(){return k.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});De(function(){e.id||(j("rc-tabs-".concat(St)),St+=1)});var m=function(d,T){var W,R;(W=e.onTabClick)===null||W===void 0||W.call(e,d,T);var E=d!==x.value;u(d),E&&((R=e.onChange)===null||R===void 0||R.call(e,d))};return kt({tabs:J(function(){return e.tabs}),prefixCls:r}),function(){var n,d=e.id,T=e.type,W=e.tabBarGutter,R=e.tabBarStyle,E=e.locale,xe=e.destroyInactiveTabPane,ge=e.renderTabBar,A=ge===void 0?a.renderTabBar:ge,$=e.onTabScroll,ie=e.hideAdd,Te=e.centered,Se={id:O.value,activeKey:x.value,animated:h.value,tabPosition:ve.value,rtl:b.value,mobile:k.value},Ce;T==="editable-card"&&(Ce={onEdit:function(Re,Ne){var Le=Ne.key,je=Ne.event,ke;(ke=e.onEdit)===null||ke===void 0||ke.call(e,Re==="add"?je:Le,Re)},removeIcon:function(){return c(Xt,null,null)},addIcon:a.addIcon?a.addIcon:function(){return c(Jt,null,null)},showAdd:ie!==!0});var ce,Ae=Z(Z({},Se),{moreTransitionName:"".concat(v.value,"-slide-up"),editable:Ce,locale:E,tabBarGutter:W,onTabClick:m,onTabScroll:$,style:R});A?ce=A(Z(Z({},Ae),{DefaultTabBar:gt})):ce=c(gt,Ae,pt(a,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var Q=r.value;return c("div",ue(ue({},l),{},{id:d,class:he(Q,"".concat(Q,"-").concat(ve.value),(n={},D(n,"".concat(Q,"-").concat(o.value),o.value),D(n,"".concat(Q,"-card"),["card","editable-card"].includes(T)),D(n,"".concat(Q,"-editable-card"),T==="editable-card"),D(n,"".concat(Q,"-centered"),Te),D(n,"".concat(Q,"-mobile"),k.value),D(n,"".concat(Q,"-editable"),T==="editable-card"),D(n,"".concat(Q,"-rtl"),b.value),n),l.class)}),[ce,c(oa,ue(ue({destroyInactiveTabPane:xe},Se),{},{animated:h.value}),null)])}}}),fa=fe({name:"ATabs",inheritAttrs:!1,props:xt(Pt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var l=t.attrs,a=t.slots,i=t.emit,r=function(o){i("update:activeKey",o),i("change",o)};return function(){var s,o=ua(zt((s=a.default)===null||s===void 0?void 0:s.call(a)));return c(va,ue(ue(ue({},Gt(e,["onUpdate:activeKey"])),l),{},{onChange:r,tabs:o}),a)}}});export{fa as T};
