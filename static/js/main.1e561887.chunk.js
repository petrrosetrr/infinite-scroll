(this["webpackJsonpinfinite-scroll"]=this["webpackJsonpinfinite-scroll"]||[]).push([[0],{20:function(e,t,n){e.exports={image:"Img_image__2szvK"}},27:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(19),o=n.n(r),s=(n(27),n(6)),i=n.n(s),u=n(10),l=n(4),p=n(20),j=n.n(p),b=n(1),f=a.a.memo((function(e){var t=e.src;return Object(b.jsx)("img",{className:j.a.image,src:t})})),d=n(8),m=n.n(d),O=n(9),h=n.n(O),x=n(21),_=n(22),v=n.n(_);var g=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([]),s=Object(l.a)(o,2),i=s[0],p=s[1],j=Object(c.useRef)(),d=Object(c.useRef)(),O=function(e){var t=Object(c.useState)({status:"pending",data:[]}),n=Object(l.a)(t,2),a=n[0],r=n[1],o=Object(c.useCallback)(Object(x.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get(e);case 3:n=t.sent,r({data:n.data,status:"fulfilled"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r({data:[],status:"rejected"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e]);return Object(c.useEffect)((function(){o()}),[o,e]),a}("https://jsonplaceholder.typicode.com/photos?_page=".concat(n,"&_limit=10"));return Object(c.useEffect)((function(){d.current=new IntersectionObserver((function(){r((function(e){return e+1}))}),{rootMargin:"0px 0px 250px 0px"}),d.current.observe(j.current)}),[]),Object(c.useEffect)((function(){"fulfilled"===O.status&&p([].concat(Object(u.a)(i),Object(u.a)(O.data)))}),[O]),Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)("div",{className:"container ".concat(m.a.scrollComponent),children:"fulfilled"===O.status?i.map((function(e,t){return Object(b.jsx)(f,{src:e.url},t)})):""}),Object(b.jsx)("div",{ref:j,className:m.a.bottom})]})};var w=function(){return Object(b.jsxs)("div",{className:i.a.app,children:[Object(b.jsx)("header",{className:i.a.header,children:Object(b.jsx)("div",{className:"container ".concat(i.a.container),children:Object(b.jsx)("h1",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"Infinite scroll demo"})})}),Object(b.jsx)(g,{})]})};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={app:"App_app__1P-Lc",header:"App_header__35ut0",container:"App_container__30Q4s"}},8:function(e,t,n){e.exports={scrollComponent:"ScrollComponent_scrollComponent__3gBga",bottom:"ScrollComponent_bottom__2WbNz"}}},[[48,1,2]]]);
//# sourceMappingURL=main.1e561887.chunk.js.map