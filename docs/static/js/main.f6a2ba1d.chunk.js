(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(8),c=a.n(r),i=a(2),s=a(10),u=(a(15),a(0));function o(e){var t=e.setHeroes,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1];return Object(u.jsx)("form",{className:"form",onSubmit:function(e){e.preventDefault(),c.trim().length>0?(t((function(e){return[c].concat(Object(s.a)(e))})),o("")):console.error("input void, please enter a hero name before submit your request")},children:Object(u.jsx)("input",{onChange:function(e){o(e.target.value)},placeholder:"Search your gif here",type:"text",value:c,className:"searcher"})})}var l=a(7),m=(a(17),a(6)),j=a.n(m),d=a(9),f=function(){var e=Object(d.a)(j.a.mark((function e(t){var a,n,r,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?api_key=NFxoxsrYkc0d1jXPTyypk9DB5KUHltu1&q=".concat(encodeURI(t),"&limit=30"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=(a(19),function(e){var t=e.title,a=e.url;return Object(u.jsxs)("figure",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{className:"gif",src:a,alt:t}),Object(u.jsx)("figcaption",{className:"card-img__title",children:t})]})});var b=function(e){var t=e.hero,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t).data.map((function(e){return Object(u.jsx)(p,Object(l.a)(Object(l.a)({},e),{},{className:"grid"}),e.id)}));return Object(u.jsxs)("div",{className:"search-result",children:[Object(u.jsx)("h2",{className:"animate__animated animate__fadeIn search-term",children:t}),Object(u.jsx)("div",{className:"gif-container",children:a})]})},h=(a(20),function(){var e=Object(n.useState)(["Saitama"]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=a.map((function(e){return Object(u.jsx)(b,{hero:e},e)}));return Object(u.jsxs)("main",{className:"main",children:[Object(u.jsxs)("h1",{className:"animate__animated animate__bounce main__title",children:["GifExpert",Object(u.jsx)("span",{className:"main-title--colored",children:"App"})]}),Object(u.jsx)(o,{setHeroes:r}),c]})});a(21);c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.f6a2ba1d.chunk.js.map