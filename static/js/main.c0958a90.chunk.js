(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var s=c(8),i=c.n(s),n=(c(15),c(10)),a=c(2),r=c(1),j=(c(16),c(17),c(18),c(0)),l=function(e){var t=e.movie;return Object(j.jsx)(j.Fragment,{children:t&&Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("figure",{className:"image is-4by3",children:Object(j.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("div",{className:"media",children:[Object(j.jsx)("div",{className:"media-left",children:Object(j.jsx)("figure",{className:"image is-48x48",children:Object(j.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(j.jsx)("div",{className:"media-content",children:Object(j.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(j.jsxs)("div",{className:"content",children:[t.Plot,Object(j.jsx)("br",{})]})]})]})})},o=function(e){var t=e.movies;return Object(j.jsx)("div",{className:"movies",children:t.map((function(e){return Object(j.jsx)(l,{movie:e},e.imdbID)}))})},d=c(6),b=c(3),m=c.n(b),u=(c(21),c(9)),v=c.n(u),O="http://www.omdbapi.com",x="26d463cc";function h(e){return p.apply(this,arguments)}function p(){return(p=Object(d.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/?apikey=").concat(x,"&t=").concat(t));case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(22);var f=function(){return Object(j.jsxs)("div",{className:"lds-spinner",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})},N=function(e){var t=e.addMovie,c=e.listMovies,s=Object(r.useState)(""),i=Object(a.a)(s,2),n=i[0],o=i[1],b=Object(r.useState)(null),u=Object(a.a)(b,2),O=u[0],x=u[1],p=Object(r.useState)(!1),N=Object(a.a)(p,2),g=N[0],w=N[1],y=Object(r.useState)(!1),k=Object(a.a)(y,2),S=k[0],C=k[1],F=Object(r.useState)(!1),M=Object(a.a)(F,2),I=M[0],T=M[1];function _(e){return!c.some((function(t){return t.imdbID===e.imdbID}))}function D(){return(D=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.prev=1,e.next=4,h(n.trim().toLowerCase());case 4:(t=e.sent).Title?(x(t),_(t)&&T(!1)):w(!0);case 6:return e.prev=6,setTimeout((function(){C(!1)}),500),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})))).apply(this,arguments)}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{className:"find-movie",children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:v()("input",{"is-danger":g}),value:n,onChange:function(e){o(e.target.value),w(!1)}})})]}),(g||I)&&Object(j.jsx)("p",{className:"help is-danger",children:I?"The movie is already on the list":"Can't find a movie with such a title"})]}),Object(j.jsxs)("div",{className:"field is-grouped",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"button",className:"button is-light",onClick:function(){return D.apply(this,arguments)},children:"Find a movie"})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){O&&(o(""),_(O)?t(O):T(!0))},disabled:I,children:"Add to the list"})})]})]}),S?Object(j.jsx)("div",{className:"loader__container",children:Object(j.jsx)(f,{})}):Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{className:"title",children:"Preview"}),Object(j.jsx)(l,{movie:O})]})]})},g=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("div",{className:"page-content",children:Object(j.jsx)(o,{movies:c})}),Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsx)(N,{addMovie:function(e){s([].concat(Object(n.a)(c),[e]))},listMovies:c})})]})};i.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.c0958a90.chunk.js.map