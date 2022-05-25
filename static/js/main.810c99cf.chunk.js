(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(8),c=n.n(s),a=n(4),o=n(2),r=n(3),i=n.n(r),l=n(1),u=n.n(l),j=(n(14),n(0)),d=function(){return Object(j.jsx)("div",{className:"Loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},m=(n(16),u.a.memo((function(e){var t=e.posts,n=e.selectedPostId,s=e.loadPost,c=e.changePostId,a=e.toggleShowDetailsHandler;return Object(j.jsxs)("div",{className:"PostsList",children:[Object(j.jsx)("h2",{children:"Posts:"}),Object(j.jsx)(j.Fragment,{children:t.length>0?Object(j.jsx)("ul",{className:"PostsList__list",children:t.map((function(e){return Object(j.jsxs)("li",{className:"PostsList__item",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"[User #".concat(e.userId,"]: ")}),e.body]}),Object(j.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){c(e,e.id),a(!0)},children:n===e.id?"Closed":"Open"})]},e.id)}))}):Object(j.jsx)(j.Fragment,{children:s?Object(j.jsx)(d,{}):Object(j.jsx)("h3",{children:"User has no posts"})})})]})}))),b=n(5),O=n(7),h=(n(17),function(e,t){return fetch("".concat("https://mate.academy/students-api").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}),p=u.a.memo((function(e){var t=e.selectedPostId,n=e.changeReload,s=Object(l.useState)({name:"",email:"",body:""}),c=Object(o.a)(s,2),r=c[0],u=c[1],d=Object(l.useState)(!0),m=Object(o.a)(d,2),p=m[0],f=m[1],x=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,v=function(e){var t=e.target,n=t.name,s=t.value;u((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},n,s))})),f(!0)},_=function(){u({name:"",email:"",body:""})};Object(l.useEffect)((function(){_()}),[t]);var N=Object(l.useMemo)((function(){return r.name.length>0&&x.test(r.email)&&r.body.length>0}),[r.name,r.email,r.body]),g=function(){var e=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s=t,c=r.name,a=r.email,o=r.body,h("/comments",{method:"POST",body:JSON.stringify({postId:s,name:c,email:a,body:o}),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:n(),_();case 4:case"end":return e.stop()}var s,c,a,o}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),N?g():f(!1)},children:[Object(j.jsx)("div",{className:"form-field",children:Object(j.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:r.name,onChange:v})}),Object(j.jsx)("div",{className:"form-field",children:Object(j.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:r.email,onChange:v})}),Object(j.jsx)("div",{className:"form-field",children:Object(j.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input NewCommentForm__input--textarea",value:r.body,onChange:v})}),Object(j.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"}),!p&&Object(j.jsx)("p",{className:"NewCommentForm__warning-message",children:"Enter valid data!"})]})})),f=(n(18),function(e){return h("/posts/".concat(e))}),x=u.a.memo((function(e){var t=e.selectedPostId,n=e.toggleDetails,s=e.toggleShowDetailsHandler,c=Object(l.useState)([]),r=Object(o.a)(c,2),u=r[0],m=r[1],b=Object(l.useState)(),O=Object(o.a)(b,2),x=O[0],v=O[1],_=Object(l.useState)(!1),N=Object(o.a)(_,2),g=N[0],w=N[1],P=Object(l.useState)(!1),y=Object(o.a)(P,2),S=y[0],C=y[1],D=function(){C((function(e){return!e}))},I=Object(l.useCallback)(Object(a.a)(i.a.mark((function e(){var n,c,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([(i=t,h("/comments?postId=".concat(i))),f(t)]);case 2:n=e.sent,c=Object(o.a)(n,2),a=c[0],r=c[1],m(a),v(r),s(!1);case 9:case"end":return e.stop()}var i}),e)}))),[]);return Object(l.useEffect)((function(){I()}),[t,S,n]),Object(j.jsxs)("div",{className:"PostDetails",children:[Object(j.jsx)("h2",{children:"Post details:"}),n?Object(j.jsx)(d,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("section",{className:"PostDetails__post",children:Object(j.jsx)("p",{children:null===x||void 0===x?void 0:x.body})}),Object(j.jsxs)("section",{className:"PostDetails__comments",children:[u.length>0?Object(j.jsx)("button",{type:"button",className:"button",onClick:function(){w((function(e){return!e}))},children:"".concat(g?"Show":"Hide","\n                    ").concat(u.length,"\n                    ").concat(u.length>1?"comments":"comment")}):Object(j.jsx)("p",{className:"PostDetails__comments--no-comments",children:"So far, no comments..."}),!g&&Object(j.jsx)("ul",{className:"PostDetails__list",children:u.map((function(e){return Object(j.jsxs)("li",{className:"PostDetails__list-item",children:[Object(j.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:Object(a.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n=e.id,h("/comments/".concat(n),{method:"DELETE"});case 2:D();case 3:case"end":return t.stop()}var n}),t)}))),children:"X"}),Object(j.jsx)("p",{children:e.body})]},e.id)}))})]})]}),Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(j.jsx)(p,{selectedPostId:t,changeReload:D})})})]})})),v=u.a.memo((function(e){var t=e.users,n=e.selectedUserId,s=e.changeUser,c=e.setLoadPost;return Object(j.jsxs)("label",{children:["Select a user: \xa0",Object(j.jsxs)("select",{className:"App__user-selector",value:n,onChange:function(e){s(e),c(!0)},children:[Object(j.jsx)("option",{value:"0",children:"All users"}),t.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})})),_=(n(19),n(20),function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(l.useState)([]),r=Object(o.a)(c,2),u=r[0],d=r[1],b=Object(l.useState)(0),O=Object(o.a)(b,2),p=O[0],f=O[1],_=Object(l.useState)(0),N=Object(o.a)(_,2),g=N[0],w=N[1],P=Object(l.useState)(!0),y=Object(o.a)(P,2),S=y[0],C=y[1],D=Object(l.useState)(!1),I=Object(o.a)(D,2),k=I[0],F=I[1],E=function(e){F(e)},L=Object(l.useCallback)(Object(a.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/users");case 2:t=e.sent,d(t),C(!1);case 5:case"end":return e.stop()}}),e)}))),[]),A=Object(l.useCallback)(Object(a.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h((n=g)?"/posts?userId=".concat(n):"/posts");case 2:t=e.sent,s(t),C(!1);case 5:case"end":return e.stop()}var n}),e)}))),[g]);Object(l.useEffect)((function(){L()}),[]),Object(l.useEffect)((function(){A()}),[g]);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App__header",children:Object(j.jsx)(v,{users:u,selectedUserId:g,changeUser:function(e){w(+e.target.value)},setLoadPost:C})}),Object(j.jsxs)("main",{className:"App__main",children:[Object(j.jsx)("div",{className:"App__sidebar",children:Object(j.jsx)(m,{posts:n,selectedPostId:p,changePostId:function(e,t){f(p===e.id?0:t)},loadPost:S,toggleShowDetailsHandler:E})}),Object(j.jsx)("div",{className:"App__content",children:0!==p&&Object(j.jsx)(x,{selectedPostId:p,toggleDetails:k,toggleShowDetailsHandler:E})})]})]})});c.a.render(Object(j.jsx)(_,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.810c99cf.chunk.js.map