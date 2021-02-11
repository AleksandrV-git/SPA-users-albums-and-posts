(this["webpackJsonpSPA-users-albums-and-posts"]=this["webpackJsonpSPA-users-albums-and-posts"]||[]).push([[0],{32:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(18),i=s.n(a),r=s(21),o=s(8),l=s(4),u=s(2),m=s(19),j=new function e(t){var s=this;Object(m.a)(this,e),this.getUsers=function(){return fetch(s.baseUrl+"/users",{headers:s.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))},this.getAlbums=function(){return fetch(s.baseUrl+"/albums",{headers:s.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))},this.getPhotos=function(){return fetch(s.baseUrl+"/photos",{headers:s.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))},this.getPosts=function(){return fetch(s.baseUrl+"/posts",{headers:s.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))},this.postMessage=function(e){var t=e.userName,n=e.userId,c=e.title,a=e.body;return fetch(s.baseUrl+"/posts",{method:"POST",headers:s.headers,body:JSON.stringify({userName:t,userId:n,title:c,body:a})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))},this.baseUrl=t.baseUrl,this.headers=t.headers}({baseUrl:"https://jsonplaceholder.typicode.com",headers:{"Content-Type":"application/json"}}),b=s(0);var h=function(){return Object(b.jsxs)("div",{className:"home-container",children:[Object(b.jsx)("h1",{className:"home-container__title",children:"\u041f\u0440\u0438\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043f\u043e\u0441\u0442\u043e\u0432, \u043b\u044c\u0431\u043e\u043c\u043e\u0432 \u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u0445"}),Object(b.jsx)(l.b,{className:"button home-container__button",to:"/users",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}),Object(b.jsx)(l.b,{className:"button home-container__button",to:"/posts",children:"\u041f\u043e\u0441\u0442\u044b"}),Object(b.jsx)(l.b,{className:"button home-container__button",to:"/albums",children:"\u0410\u043b\u044c\u0431\u043e\u043c\u044b"})]})},d=c.a.memo((function(e){var t=e.user,s="".concat(t.address.street,", ").concat(t.address.suite,", ").concat(t.address.city,", ").concat(t.address.zipcode),n="".concat(t.company.name," (catchPhrase: ").concat(t.company.catchPhrase,", bs: ").concat(t.company.bs,")");return Object(b.jsxs)("li",{className:"user-item",children:[Object(b.jsxs)("p",{className:"user-item__text",children:[Object(b.jsx)("span",{className:"user-item__text-appellation",children:"\u0418\u043c\u044f: "}),t.name]}),Object(b.jsxs)("p",{className:"user-item__text",children:[Object(b.jsx)("span",{className:"user-item__text-appellation",children:"\u041d\u0438\u043a: "}),t.username]}),Object(b.jsxs)("p",{className:"user-item__text",children:[Object(b.jsx)("span",{className:"user-item__text-appellation",children:"E-mail: "}),t.email]}),Object(b.jsxs)("p",{className:"user-item__text",children:[Object(b.jsx)("span",{className:"user-item__text-appellation",children:"\u0410\u0434\u0440\u0435\u0441: "}),s]}),Object(b.jsxs)("p",{className:"user-item__text",children:[Object(b.jsx)("span",{className:"user-item__text-appellation",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430: "}),t.phone]}),Object(b.jsxs)("p",{className:"user-item__text",children:[Object(b.jsx)("span",{className:"user-item__text-appellation",children:"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442: "}),t.website]}),Object(b.jsxs)("p",{className:"user-item__text",children:[Object(b.jsx)("span",{className:"user-item__text-appellation",children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f: "}),n]})]})})),p=c.a.memo((function(e){var t=e.users,s=e.getUsers;return c.a.useEffect((function(){s()}),[]),Object(b.jsx)("ul",{className:"user-list",children:t.map((function(e,t){return Object(b.jsx)(d,{user:e},e.id)}))})})),x=s.p+"static/media/user.28e44cb7.png",O=c.a.memo((function(e){var t=e.post;return Object(b.jsxs)("li",{className:"post-item",children:[Object(b.jsxs)("div",{className:"post-item__title-container",children:[Object(b.jsx)("img",{className:"post-item__user-icon",src:x}),Object(b.jsx)("h2",{className:"post-item__title",children:t.ownerName||t.userName||""})]}),Object(b.jsx)("p",{className:"post-item__message-subject",children:t.title}),Object(b.jsx)("p",{className:"post-item__text",children:t.body})]})})),_=c.a.memo((function(e){var t=e.posts,s=e.setPostOwner,n=e.getPostsData;return c.a.useEffect((function(){n()}),[]),Object(b.jsx)("ul",{className:"user-list",children:t.map((function(e,t){return s(e),Object(b.jsx)(O,{post:e},e.id)}))})}));var f=function(e){var t=e.album,s=e.onAlbumClick;return Object(b.jsx)(l.b,{onClick:function(){s("".concat(t.ownerName))},className:"albums-item__link",to:"/SPA-users-albums-and-posts/albums/".concat(t.id),children:Object(b.jsxs)("li",{className:"albums-item",children:[Object(b.jsxs)("div",{className:"albums-item__title-container",children:[Object(b.jsx)("img",{className:"albums-item__user-icon",src:x}),Object(b.jsx)("h2",{className:"albums-item__title",children:t.ownerName})]}),Object(b.jsx)("p",{className:"albums-item__description",children:t.title})]})})},N=c.a.memo((function(e){var t=e.albums,s=e.setAlbumOwner,n=e.getAlbumsData,a=e.onAlbumClick;return c.a.useEffect((function(){n()}),[]),Object(b.jsx)("ul",{className:"album-list",children:t.map((function(e,t){return s(e),Object(b.jsx)(f,{onAlbumClick:a,album:e},e.id)}))})})),g=c.a.memo((function(e){var t=e.photo;return Object(b.jsxs)("li",{className:"photo-item",children:[Object(b.jsx)("img",{className:"photo-item__img",src:t.url,alt:""}),Object(b.jsx)("p",{className:"photo-item__description",children:t.title})]})})),v=c.a.memo((function(e){var t=e.photos,s=e.getPhotos,n=e.currentAlbumOwner,a=Object(u.f)().id,i=t.filter((function(e){return e.albumId==a}));return c.a.useEffect((function(){s()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"section-title",children:n}),Object(b.jsx)("ul",{className:"photo-list",children:i.map((function(e,t){return Object(b.jsx)(g,{photo:e},e.id)}))})]})}));var P=function(e){var t=e.onAddPost,s=c.a.useState(""),n=Object(o.a)(s,2),a=n[0],i=n[1],r=c.a.useState(""),l=Object(o.a)(r,2),u=l[0],m=l[1],j=c.a.useState(""),h=Object(o.a)(j,2),d=h[0],p=h[1];return Object(b.jsxs)("form",{className:"post-form",onSubmit:function(e){e.preventDefault(),t({userName:a,userId:null,title:d,body:u})},name:"postForm",children:[Object(b.jsx)("input",{value:a,onChange:function(e){i(e.target.value)},id:"name",type:"text",name:"name",className:"post-form__input",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"30"}),Object(b.jsx)("input",{value:d,onChange:function(e){p(e.target.value)},id:"title",type:"text",name:"title",className:"post-form__input",placeholder:"\u0422\u0435\u043c\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",required:!0,minLength:"2",maxLength:"30"}),Object(b.jsx)("textarea",{value:u,onChange:function(e){m(e.target.value)},id:"message",type:"text",name:"message",className:"post-form__message-input",placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",required:!0,minLength:"2",maxLength:"1000"}),Object(b.jsx)("button",{className:"button post-form__button",children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})};var A=function(){return Object(b.jsx)("nav",{className:"menu",children:Object(b.jsxs)("ul",{className:"menu__list",children:[Object(b.jsx)("li",{className:"menu__list-item",children:Object(b.jsx)(l.c,{exact:!0,className:"menu__item",activeClassName:"menu__item_active",to:"/users",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),Object(b.jsx)("li",{className:"menu__list-item",children:Object(b.jsx)(l.c,{className:"menu__item",activeClassName:"menu__item_active",to:"/posts",children:"\u041f\u043e\u0441\u0442\u044b"})}),Object(b.jsx)("li",{className:"menu__list-item",children:Object(b.jsx)(l.c,{className:"menu__item",activeClassName:"menu__item_active",to:"/albums",children:"\u0410\u043b\u044c\u0431\u043e\u043c\u044b"})})]})})};var S=function(){var e=c.a.useState([]),t=Object(o.a)(e,2),s=t[0],n=t[1],a=c.a.useState([]),i=Object(o.a)(a,2),m=i[0],d=i[1],x=c.a.useState([]),O=Object(o.a)(x,2),f=O[0],g=O[1],S=c.a.useState([]),y=Object(o.a)(S,2),w=y[0],C=y[1],k=c.a.useState(""),U=Object(o.a)(k,2),I=U[0],L=U[1];function F(){j.getUsers().then((function(e){n(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}return Object(b.jsx)(l.a,{basename:"/SPA-users-albums-and-posts",children:Object(b.jsxs)("div",{className:"root",children:[Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)(l.b,{className:"logo",to:"/",children:"SinglePageApplication"}),Object(b.jsx)(A,{})]}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/",children:Object(b.jsx)(h,{})}),Object(b.jsx)(u.a,{path:"/users",children:Object(b.jsx)(p,{getUsers:F,users:s})}),Object(b.jsxs)(u.a,{path:"/posts",children:[Object(b.jsx)(P,{onAddPost:function(e){j.postMessage(e).then((function(e){d([].concat(Object(r.a)(m),[e]))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(b.jsx)(_,{getPostsData:function(){F(),j.getPosts().then((function(e){d(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},setPostOwner:function(e){var t=s.find((function(t){return t.id===e.userId}));t?e.ownerName=t.name:console.log("\u0438\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u043f\u043e\u0441\u0442\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")},posts:m})]}),Object(b.jsx)(u.a,{exact:!0,path:"/albums",children:Object(b.jsx)(N,{onAlbumClick:L,getAlbumsData:function(){F(),j.getAlbums().then((function(e){g(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},setAlbumOwner:function(e){var t=s.find((function(t){return t.id===e.userId}));t?e.ownerName=t.name:console.log("\u0438\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0430\u043b\u044c\u0431\u043e\u043c\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")},albums:f})}),Object(b.jsx)(u.a,{exact:!0,path:"/albums/:id",children:Object(b.jsx)(v,{getPhotos:function(){j.getPhotos().then((function(e){C(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},photos:w,currentAlbumOwner:I})}),Object(b.jsx)(u.a,{path:"*",children:Object(b.jsx)("p",{children:"Not Found"})})]})]})})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,34)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))};s(32);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.10a0d899.chunk.js.map