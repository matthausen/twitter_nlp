(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{225:function(e,a,t){e.exports=t(430)},230:function(e,a,t){},231:function(e,a,t){},430:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(13),c=t.n(l),o=(t(230),t(231),t(107)),i=t.n(o),m=t(175),s=t(112),u=t(108),p=t(176),E=t.n(p),d=t(4),h=t(192),g=t(480),f=t(489),b=t(481),y=t(482),v=t(486),w=t(63),O=t(485),j=t(483),x=t(484),S=t(487),N=t(488),B=t(432),M=t(193),P=t.n(M),C=t(195),k=t.n(C),I=t(194),D=t.n(I),T=t(469),A=t(471),R=t(472),z=t(473),H=t(178),J=t.n(H),L=t(179),V=t.n(L),W=t(180),F=t.n(W),G=t(181),K=t.n(G),$=t(182),X=t.n($),q=t(81),U=t.n(q),Y=r.a.createElement("div",null,r.a.createElement(T.a,{button:!0},r.a.createElement(A.a,null,r.a.createElement(J.a,null)),r.a.createElement(R.a,{primary:"Dashboard"})),r.a.createElement(T.a,{button:!0},r.a.createElement(A.a,null,r.a.createElement(V.a,null)),r.a.createElement(R.a,{primary:"Orders"})),r.a.createElement(T.a,{button:!0},r.a.createElement(A.a,null,r.a.createElement(F.a,null)),r.a.createElement(R.a,{primary:"Customers"})),r.a.createElement(T.a,{button:!0},r.a.createElement(A.a,null,r.a.createElement(K.a,null)),r.a.createElement(R.a,{primary:"Reports"})),r.a.createElement(T.a,{button:!0},r.a.createElement(A.a,null,r.a.createElement(X.a,null)),r.a.createElement(R.a,{primary:"Integrations"}))),Q=r.a.createElement("div",null,r.a.createElement(z.a,{inset:!0},"Saved reports"),r.a.createElement(T.a,{button:!0},r.a.createElement(A.a,null,r.a.createElement(U.a,null)),r.a.createElement(R.a,{primary:"Current month"})),r.a.createElement(T.a,{button:!0},r.a.createElement(A.a,null,r.a.createElement(U.a,null)),r.a.createElement(R.a,{primary:"Last quarter"})),r.a.createElement(T.a,{button:!0},r.a.createElement(A.a,null,r.a.createElement(U.a,null)),r.a.createElement(R.a,{primary:"Year-end sale"}))),Z=t(40);function _(e){return r.a.createElement(w.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function ee(e,a){return{time:e,amount:a}}var ae=[ee("00:00",0),ee("03:00",300),ee("06:00",600),ee("09:00",800),ee("12:00",1500),ee("15:00",2e3),ee("18:00",2400),ee("21:00",2400),ee("24:00",void 0)];function te(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,"Today"),r.a.createElement(Z.d,null,r.a.createElement(Z.c,{data:ae,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(Z.e,{dataKey:"time"}),r.a.createElement(Z.f,null,r.a.createElement(Z.a,{angle:270,position:"left",style:{textAnchor:"middle"}},"Sales ($)")),r.a.createElement(Z.b,{type:"monotone",dataKey:"amount",stroke:"#556CD6",dot:!1}))))}var ne=t(474),re=Object(h.a)({depositContext:{flex:1}});function le(){var e=re();return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,"Recent Deposits"),r.a.createElement(w.a,{component:"p",variant:"h4"},"$3,024.00"),r.a.createElement(w.a,{color:"textSecondary",className:e.depositContext},"on 15 March, 2019"),r.a.createElement("div",null,r.a.createElement(ne.a,{color:"primary",href:"javascript:;"},"View balance")))}var ce=t(475),oe=t(479),ie=t(478),me=t(476),se=t(477);function ue(e,a,t,n,r,l){return{id:e,date:a,name:t,shipTo:n,paymentMethod:r,amount:l}}var pe=[ue(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),ue(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),ue(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),ue(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),ue(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)],Ee=Object(h.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function de(){var e=Ee();return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,"Recent Orders"),r.a.createElement(ce.a,{size:"small"},r.a.createElement(me.a,null,r.a.createElement(se.a,null,r.a.createElement(ie.a,null,"Date"),r.a.createElement(ie.a,null,"Name"),r.a.createElement(ie.a,null,"Ship To"),r.a.createElement(ie.a,null,"Payment Method"),r.a.createElement(ie.a,{align:"right"},"Sale Amount"))),r.a.createElement(oe.a,null,pe.map((function(e){return r.a.createElement(se.a,{key:e.id},r.a.createElement(ie.a,null,e.date),r.a.createElement(ie.a,null,e.name),r.a.createElement(ie.a,null,e.shipTo),r.a.createElement(ie.a,null,e.paymentMethod),r.a.createElement(ie.a,{align:"right"},e.amount))})))),r.a.createElement("div",{className:e.seeMore},r.a.createElement(ne.a,{color:"primary",href:"javascript:;"},"See more orders")))}function he(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function ge(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?he(t,!0).forEach((function(a){Object(u.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):he(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var fe=Object(h.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:ge({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(u.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function be(){var e=fe(),a=Object(n.useState)(!0),t=Object(s.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)({}),u=Object(s.a)(o,2),p=u[0],h=u[1],M="http://127.0.0.1:5000/";Object(n.useEffect)((function(){!function(){T.apply(this,arguments)}()}),[]);var C={tweet:"military"},I={header:{"Content-Type":"application/json"}};function T(){return(T=Object(m.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post(M,C,I);case 2:a=e.sent,h(a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("Response: ",p);var A=Object(d.a)(e.paper,e.fixedHeight);return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,null),r.a.createElement(b.a,{position:"absolute",className:Object(d.a)(e.appBar,l&&e.appBarShift)},r.a.createElement(y.a,{className:e.toolbar},r.a.createElement(j.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(d.a)(e.menuButton,l&&e.menuButtonHidden)},r.a.createElement(P.a,null)),r.a.createElement(w.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Dashboard"),r.a.createElement(j.a,{color:"inherit"},r.a.createElement(x.a,{badgeContent:4,color:"secondary"},r.a.createElement(D.a,null))))),r.a.createElement(f.a,{variant:"permanent",classes:{paper:Object(d.a)(e.drawerPaper,!l&&e.drawerPaperClose)},open:l},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(j.a,{onClick:function(){c(!1)}},r.a.createElement(k.a,null))),r.a.createElement(O.a,null),r.a.createElement(v.a,null,Y),r.a.createElement(O.a,null),r.a.createElement(v.a,null,Q)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(S.a,{maxWidth:"lg",className:e.container},r.a.createElement(N.a,{container:!0,spacing:3},r.a.createElement(N.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(B.a,{className:A},r.a.createElement(te,null))),r.a.createElement(N.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(B.a,{className:A},r.a.createElement(le,null))),r.a.createElement(N.a,{item:!0,xs:12},r.a.createElement(B.a,{className:e.paper},r.a.createElement(de,null)))))))}var ye=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(be,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[225,1,2]]]);
//# sourceMappingURL=main.3f9fa55d.chunk.js.map