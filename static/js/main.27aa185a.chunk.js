(this["webpackJsonpeditorial-page-scroll-animation"]=this["webpackJsonpeditorial-page-scroll-animation"]||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(4),c=r.n(i),s=(r(12),r(2)),o=r(6),l=r(5),u=r(1);u.a.registerPlugin(l.a);var m=function(){var e=function(){var e=function(){return{width:window.innerWidth,height:window.innerHeight}},t=Object(a.useState)(e),r=Object(o.a)(t,2),n=r[0],i=r[1];return Object(a.useEffect)((function(){var t=function(){i(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),n}(),t=Object(a.useRef)(null),r=Object(a.useRef)(null),i=Object(a.useRef)(null),c=Object(a.useRef)(null),l=Object(a.useRef)(null),m=Object(a.useRef)(null),g=Object(a.useRef)(null),d=Object(a.useRef)(null),f=Object(a.useRef)(null),p=Object(a.useRef)(null),b=Object(a.useRef)(null),h=Object(a.useRef)(null),E=Object(a.useRef)(null),v=Object(a.useRef)(null),O=Object(a.useRef)(null),j=Object(a.useRef)(null),N={ease:.1,curr:0,prev:0,rounded:0},w=Object(a.useCallback)((function(){N.curr=window.scrollY,N.prev+=(N.curr-N.prev)*N.ease,N.rounded=Math.round(100*N.prev)/100,t.current.style.transform="translateY(-".concat(N.rounded,"px)"),requestAnimationFrame((function(){return w()}))}),[N]),y=Object(a.useCallback)((function(){var e={duration:.8,y:-80,opacity:0};u.a.to(l.current,Object(s.a)({scrollTrigger:{trigger:l.current,start:"center 30%",scrub:!0}},e)),u.a.to(g.current,Object(s.a)({scrollTrigger:{trigger:g.current,start:"center 13%",scrub:!0}},e)),u.a.to(d.current,Object(s.a)({scrollTrigger:{trigger:d.current,start:"center 30%",scrub:!0}},e)),u.a.to(f.current,{scrollTrigger:{trigger:f.current,start:"center 60%",scrub:!0},y:-60,duration:.8}),u.a.to(p.current,{scrollTrigger:{trigger:p.current,start:"center 60%",scrub:!0},autoAlpha:0,duration:.1}),u.a.to(b.current,{scrollTrigger:{trigger:b.current,start:"center 60%",scrub:!0},autoAlpha:0,duration:.1}),u.a.to(h.current,{scrollTrigger:{trigger:h.current,start:"center 100%",scrub:!0},y:-300,filter:"contrast(1)",duration:.8}),u.a.to(E.current,{scrollTrigger:{trigger:E.current,start:"center 100%",scrub:!0,toggleClass:"reveal"}}),u.a.to(v.current,{scrollTrigger:{trigger:v.current,start:"center 100%",scrub:!0,toggleClass:"reveal"}}),u.a.to(v.current,{scrollTrigger:{trigger:O.current,start:"30% 100%",scrub:!0},y:600,height:"300px"}),u.a.to(j.current,{scrollTrigger:{trigger:O.current,start:"0 100%",scrub:!0},y:-100,autoAlpha:1})}),[]);return Object(a.useEffect)((function(){requestAnimationFrame((function(){return w()})),y()}),[w,y]),Object(a.useEffect)((function(){document.body.style.height="".concat(t.current.getBoundingClientRect().height,"px")}),[e.height]),n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container",ref:t},n.a.createElement("div",{className:"intro"},n.a.createElement("div",{className:"nav"},n.a.createElement("div",{className:"nav__logo",ref:i},"m."),n.a.createElement("ul",{className:"navigation",ref:r},n.a.createElement("li",{className:"navigation__item"},n.a.createElement("a",{href:"#",className:"navigation__link"},"Instagram")),n.a.createElement("li",{className:"navigation__item"},n.a.createElement("a",{href:"#",className:"navigation__link"},"Twitter")),n.a.createElement("li",{className:"navigation__item"},n.a.createElement("a",{href:"#",className:"navigation__link"},"Youtube")),n.a.createElement("li",{className:"navigation__item"},n.a.createElement("a",{href:"#",className:"navigation__link"},"Pinterest")))),n.a.createElement("div",{className:"intro-center"},n.a.createElement("span",{ref:l},"clothing"),n.a.createElement("figure",{ref:m},n.a.createElement("img",{src:"https://images.unsplash.com/photo-1580870858053-8d0764624f4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2270&q=80",alt:""})),n.a.createElement("span",{className:"top",ref:g},"Imported"),n.a.createElement("div",{className:"text",ref:d},"in Accra ",n.a.createElement("span",null,"0'03'439'2"))),n.a.createElement("div",{className:"intro-bottom",ref:c},n.a.createElement("div",{className:"intro-bottom-list",ref:p},"Volume 02."),n.a.createElement("div",{className:"intro-bottom-list",ref:f},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente ad commodi cumque saepe asperiores quaerat aut, explicabo."),n.a.createElement("div",{className:"intro-bottom-list",ref:b},"By Lorem Ipsum."))),n.a.createElement("div",{className:"section section--one"},n.a.createElement("figure",{className:"img-bg"},n.a.createElement("img",{src:"https://images.unsplash.com/photo-1534320309096-17ce1f77021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2158&q=80",alt:""})),n.a.createElement("div",{className:"wrapper-img"},n.a.createElement("figure",{className:"img-reveal",ref:h},n.a.createElement("img",{src:"https://images.unsplash.com/photo-1596432150438-3ef028cca147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",alt:""})))),n.a.createElement("div",{className:"section section--two"},n.a.createElement("h1",{ref:E},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dignissimos repellendus tenetur, sequi, nostrum aliquam corrupti aut accusamus itaque tempore nemo blanditiis a cumque vitae ducimus, dolorum explicabo corporis eveniet?"),n.a.createElement("figure",{ref:v},n.a.createElement("img",{src:"https://images.unsplash.com/photo-1586753513812-462ed2a82584?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",alt:""}))),n.a.createElement("div",{className:"section section--third",ref:O},n.a.createElement("h1",{ref:j},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita officia nobis in illum magnam pariatur autem impedit unde voluptas. Commodi obcaecati totam doloremque consectetur repudiandae odio laudantium cumque ipsam non?"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,r){e.exports=r(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.27aa185a.chunk.js.map