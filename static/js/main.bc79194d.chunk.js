(this["webpackJsonpgithub-eggs"]=this["webpackJsonpgithub-eggs"]||[]).push([[0],{33:function(e,s,t){},34:function(e,s,t){"use strict";t.r(s);var c=t(1),r=t.n(c),i=t(19),a=t.n(i),n=t(3),l=t(20),o=t.n(l),j=t(22),d=function(e,s){switch(s.type){case"ADD_BOOKMARKED":return[].concat(Object(j.a)(e),[s.repo]);case"DELETE_BOOKMARKED":return e.filter((function(e){return e.id!==s.id}));case"GET_BOOKMARKED_REPOS":return s.repos}},u=t(0);console.log(o.a);var b=Object(c.createContext)({}),h=function(e){var s=e.children,t=Object(c.useState)(),r=Object(n.a)(t,2),i=r[0],a=r[1],l=Object(c.useState)(),o=Object(n.a)(l,2),j=o[0],h=o[1],O=Object(c.useState)(),m=Object(n.a)(O,2),p=m[0],x=m[1],_=Object(c.useState)(),g=Object(n.a)(_,2),v=g[0],f=g[1],N=Object(c.useState)(!1),k=Object(n.a)(N,2),y=k[0],S=k[1],E=Object(c.useReducer)(d,[]),R=Object(n.a)(E,2),C=R[0],B=R[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("bookmarkedRepos"));console.log(e),e&&B({type:"GET_BOOKMARKED_REPOS",repos:e})}),[]);return Object(u.jsx)(b.Provider,{value:{repos:i,users:p,searchEverything:function(e){e.length>2?(S(!0),fetch("https://api.github.com/search/repositories?q=".concat(e)).then((function(e){return e.json()})).then((function(e){h(e.total_count),a(e.items)})),fetch("https://api.github.com/search/users?q=".concat(e)).then((function(e){return e.json()})).then((function(e){f(e.total_count),x(e.items)}))):S(!1)},repoCount:j,userCount:v,isSearched:y,bookmarkedRepos:C,dispatch:B,deleteBookmarkedRepo:function(e){B({type:"DELETE_BOOKMARKED",id:e})}},children:s})},O=t.p+"static/media/search-pc.3aa4aa46.svg",m=t(5),p=t(2),x=t.p+"static/media/repository.763f1257.svg",_=t.p+"static/media/repositories.e82444e6.svg",g=t.p+"static/media/users.b3429583.svg",v=t.p+"static/media/bookmarkblack.466f48e7.svg",f=function(){var e=Object(c.useContext)(b),s=e.repoCount,t=e.userCount,r=e.bookmarkedRepos;return Object(u.jsxs)("div",{className:"side-bar-search-results",children:[Object(u.jsx)(m.b,{to:"/github-eggs/",children:Object(u.jsxs)("div",{className:"side-bar-search-results__repositories",children:[Object(u.jsx)("img",{src:_,alt:"repo"}),Object(u.jsx)("p",{className:"result-title",children:"Repositories"}),Object(u.jsx)("p",{className:"quantity",children:null!==s&&void 0!==s?s:0})]})}),Object(u.jsx)(m.b,{to:"/github-eggs/search-users",children:Object(u.jsxs)("div",{className:"side-bar-search-results__users",children:[Object(u.jsx)("img",{src:g,alt:"users"}),Object(u.jsx)("p",{className:"result-title",children:"Users"}),Object(u.jsx)("p",{className:"quantity",children:null!==t&&void 0!==t?t:0})]})}),Object(u.jsx)(m.b,{to:"/github-eggs/search-bookmarks",children:Object(u.jsxs)("div",{className:"side-bar-search-results__bookmarked ",children:[Object(u.jsx)("img",{src:v,alt:"bookmarked"}),Object(u.jsx)("p",{className:"result-title",children:"Bookmarked"}),Object(u.jsxs)("p",{className:"quantity",children:[" ",r&&r.length," "]})]})})]})},N=function(){var e=Object(c.useContext)(b),s=e.bookmarkedRepos,t=(e.dispatch,e.deleteBookmarkedRepo);return console.log(s),Object(u.jsxs)("div",{className:"main-search-results bookmarked-repos",children:[Object(u.jsx)(f,{}),Object(u.jsxs)("div",{className:"main-search-results__repository-results",children:[Object(u.jsx)("div",{className:"main-search-results__repository-results__title",children:Object(u.jsxs)("h2",{children:[s?s.length:0," Bookmarked Repository Results"]})}),s&&s.map((function(e){return Object(u.jsxs)("div",{className:"main-search-results__repository-results__result",children:[Object(u.jsxs)("div",{className:"main-search-results__repository-results__result__title",children:[Object(u.jsx)("img",{src:x,alt:"repo"}),Object(u.jsx)(m.b,{to:"/github-eggs/repo-details/".concat(e.id),children:Object(u.jsxs)("h4",{children:[" ",e.full_name," "]})})]}),Object(u.jsxs)("p",{children:[" ",e.description," "]}),Object(u.jsx)("button",{className:"bookmarked-delete-button button-delete",onClick:function(){return t(e.id)},children:"Delete Bookmark"})]},e.id)}))]})]})},k=function(){var e=Object(c.useContext)(b),s=e.repos,t=e.repoCount;return Object(u.jsxs)("div",{className:"main-search-results",children:[Object(u.jsx)(f,{}),Object(u.jsxs)("div",{className:"main-search-results__repository-results",children:[Object(u.jsx)("div",{className:"main-search-results__repository-results__title",children:Object(u.jsxs)("h2",{children:[" ",null!==t&&void 0!==t?t:0," Repository Results"]})}),s&&s.map((function(e){return Object(u.jsxs)("div",{className:"main-search-results__repository-results__result",children:[Object(u.jsxs)("div",{className:"main-search-results__repository-results__result__title",children:[Object(u.jsx)("img",{src:x,alt:"repo"}),Object(u.jsx)(m.b,{to:"/github-eggs/repo-details/".concat(e.id),children:Object(u.jsx)("h4",{children:e.name})})]}),Object(u.jsx)("p",{children:e.description})]},e.id)}))]})]})},y=function(e){var s=e.id,t=Object(c.useContext)(b).repos,r=Object(c.useContext)(b).bookmarkedRepos,i=Object(c.useState)(),a=Object(n.a)(i,2),l=a[0],o=a[1],j=Object(c.useState)(),d=Object(n.a)(j,2),h=d[0],O=d[1];return Object(c.useEffect)((function(){var e=null===t||void 0===t?void 0:t.find((function(e){return e.id==s}));o(e)}),[]),Object(c.useEffect)((function(){var e=null===r||void 0===r?void 0:r.find((function(e){return e.id==s}));O(e)}),[]),Object(u.jsx)("div",{className:"repo-detail-main",children:l?Object(u.jsx)("p",{children:l.description}):Object(u.jsxs)("p",{children:[" ",h&&h.description," "]})})},S=t.p+"static/media/repolink.3463bc29.svg",E=t.p+"static/media/bookmarkblue.9727142e.svg",R=t.p+"static/media/bookmark.116ece47.svg",C=t.p+"static/media/watch.0fc57707.svg",B=t.p+"static/media/star.efdbc6ca.svg",q=t.p+"static/media/fork.83c4dec2.svg",D=t.p+"static/media/branches.805eea9b.svg",K=t.p+"static/media/issues.950382de.svg",w=t.p+"static/media/pullrequests.66ee4e85.svg",A=function(e){var s=e.id,t=Object(c.useContext)(b).repos,r=Object(c.useState)(),i=Object(n.a)(r,2),a=i[0],l=i[1],o=Object(c.useState)(),j=Object(n.a)(o,2),d=j[0],h=j[1],O=Object(c.useState)(),m=Object(n.a)(O,2),p=m[0],_=m[1],g=Object(c.useContext)(b),v=g.bookmarkedRepos,f=g.dispatch,N=g.deleteBookmarkedRepo,k=Object(c.useState)(),y=Object(n.a)(k,2),A=(y[0],y[1]),M=Object(c.useState)(),F=Object(n.a)(M,2),L=F[0],P=F[1];Object(c.useEffect)((function(){var e=null===t||void 0===t?void 0:t.find((function(e){return e.id==s}));l(e)}),[]),Object(c.useEffect)((function(){var e=null===v||void 0===v?void 0:v.find((function(e){return e.id==s}));A(e)}),[]),Object(c.useEffect)((function(){v&&(localStorage.setItem("bookmarkedRepos",JSON.stringify(v)),-1!==v.indexOf(a)?P(!0):P(!1))}),[v]),Object(c.useEffect)((function(){a&&(fetch("https://api.github.com/repos/".concat(a.owner.login,"/").concat(a.name,"/pulls")).then((function(e){return e.json()})).then((function(e){return _(e.length)})),fetch("https://api.github.com/repos/".concat(a.owner.login,"/").concat(a.name,"/branches")).then((function(e){return e.json()})).then((function(e){return h(e.length)})))}),[a]);return console.log(p,d),Object(u.jsxs)("div",{className:"repo-details-side-bar",children:[a?Object(u.jsxs)("div",{className:"repo-details-side-bar__description",children:[Object(u.jsx)("img",{src:x,alt:"repo"}),Object(u.jsxs)("h2",{children:[" ",a.name," "]}),Object(u.jsx)("p",{children:a.owner.login}),Object(u.jsxs)("div",{className:"repo-details-side-bar__description__repo-link",children:[Object(u.jsx)("img",{src:S,alt:"repolink"}),Object(u.jsxs)("p",{children:[" ",a.name," "]})]}),Object(u.jsxs)("div",{className:"repo-details-side-bar__quantity",children:[Object(u.jsxs)("div",{className:"repo-details-side-bar__quantity__watch",children:[Object(u.jsx)("img",{src:C,alt:"svg"})," ",Object(u.jsx)("p",{className:"text",children:"Watch"}),Object(u.jsx)("p",{className:"count",children:a.watchers_count})]}),Object(u.jsxs)("div",{className:"repo-details-side-bar__quantity__star",children:[Object(u.jsx)("img",{src:B,alt:"svg"})," ",Object(u.jsx)("p",{className:"text",children:"Star"}),Object(u.jsx)("p",{className:"count",children:a.stargazers_count})]}),Object(u.jsxs)("div",{className:"repo-details-side-bar__quantity__fork",children:[Object(u.jsx)("img",{src:q,alt:"svg"})," ",Object(u.jsx)("p",{className:"text",children:"Fork"}),Object(u.jsx)("p",{className:"count",children:a.forks_count})]}),Object(u.jsxs)("div",{className:"repo-details-side-bar__quantity__branches",children:[Object(u.jsx)("img",{src:D,alt:"svg"}),Object(u.jsx)("p",{className:"text",children:"Branches"}),Object(u.jsx)("p",{className:"count",children:d})]}),Object(u.jsxs)("div",{className:"repo-details-side-bar__quantity__issues",children:[Object(u.jsx)("img",{src:K,alt:"svg"})," ",Object(u.jsx)("p",{className:"text",children:"Issues"}),Object(u.jsx)("p",{className:"count",children:a.open_issues_count})]}),Object(u.jsxs)("div",{className:"repo-details-side-bar__quantity__pull-requests",children:[Object(u.jsx)("img",{src:w,alt:"svg"}),Object(u.jsx)("p",{className:"text",children:"Pull Requests"}),Object(u.jsx)("p",{className:"count",children:p})]})]})]}):Object(u.jsx)("p",{children:"Loading"}),L?Object(u.jsxs)("button",{onClick:function(){return N(a.id)},className:"repo-details-side-bar__button button-delete",children:[Object(u.jsx)("img",{src:R,alt:""})," Delete From Bookmarks"]}):Object(u.jsxs)("button",{onClick:function(){f({type:"ADD_BOOKMARKED",repo:a})},className:"repo-details-side-bar__button",children:[Object(u.jsx)("img",{src:E,alt:""})," Add to Bookmarks"]})]})},M=function(e){return Object(u.jsxs)("div",{className:"repo-details",children:[Object(u.jsx)(A,{id:e.match.params.id}),Object(u.jsx)(y,{id:e.match.params.id})]})},F=function(e){var s=e.id,t=Object(c.useContext)(b).users,r=null===t||void 0===t?void 0:t.find((function(e){return e.id==s})),i=Object(c.useState)(r),a=Object(n.a)(i,1)[0],l=a.avatar_url,o=a.login,j=a.html_url,d=a.type;return Object(u.jsx)("div",{className:"side-bar-user-details",children:a&&Object(u.jsxs)("div",{className:"side-bar-user-details__user-information",children:[Object(u.jsx)("img",{src:l,alt:""}),Object(u.jsxs)("h3",{children:[o," "]}),Object(u.jsx)("p",{children:j}),Object(u.jsx)("p",{className:"side-bar-user-details__user-information__desc",children:d})]})})},L=function(e){var s=e.id,t=Object(c.useContext)(b).users,r=null===t||void 0===t?void 0:t.find((function(e){return e.id==s})),i=Object(c.useState)(r),a=Object(n.a)(i,1)[0],l=Object(c.useState)(),o=Object(n.a)(l,2),j=o[0],d=o[1];return Object(c.useEffect)((function(){fetch("https://api.github.com/users/".concat(a.login,"/repos")).then((function(e){return e.json()})).then((function(e){return d(e)}))}),[]),Object(u.jsx)("div",{className:"user-detail-main",children:j?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"user-detail-main__title",children:[Object(u.jsx)("h3",{children:"Repositories "}),Object(u.jsx)("div",{className:"user-detail-main__title__number-box",children:j.length})]}),j.map((function(e){return Object(u.jsxs)("div",{className:"user-detail-main__repo",children:[Object(u.jsxs)("div",{className:"user-detail-main__repo__repo-title",children:[Object(u.jsx)("img",{src:x,alt:"repo"}),Object(u.jsxs)("h4",{children:[" ",e.name," "]})]}),Object(u.jsx)("p",{children:e.description})]},e.id)}))]}):Object(u.jsx)("p",{children:"Loading.."})})},P=function(e){return Object(u.jsxs)("div",{className:"user-details",children:[Object(u.jsx)(F,{id:e.match.params.id}),Object(u.jsx)(L,{id:e.match.params.id})]})},T=function(){var e=Object(c.useContext)(b),s=e.users,t=e.userCount;return Object(u.jsxs)("div",{className:"main-search-results",children:[Object(u.jsx)(f,{}),Object(u.jsxs)("div",{className:"main-search-results__repository-results",children:[Object(u.jsx)("div",{className:"main-search-results__repository-results__title",children:Object(u.jsxs)("h2",{children:[null!==t&&void 0!==t?t:0," User Results"]})}),s&&s.map((function(e){return Object(u.jsxs)("div",{className:"main-search-results__repository-results__result",children:[Object(u.jsxs)("div",{className:"main-search-results__repository-results__result__title",children:[Object(u.jsx)("img",{className:"user-picture",src:e.avatar_url,alt:"user"}),Object(u.jsx)(m.b,{to:"/github-eggs/user-details/".concat(e.id),children:Object(u.jsx)("h4",{children:e.login})})]}),Object(u.jsx)("p",{children:e.type})]},e.id)}))]})]})},I=function(){return Object(u.jsx)("div",{className:"search-results",children:Object(u.jsx)(m.a,{children:Object(u.jsxs)(p.c,{children:[Object(u.jsx)(p.a,{path:"/github-eggs/user-details/:id",component:P}),Object(u.jsx)(p.a,{path:"/github-eggs/repo-details/:id",component:M}),Object(u.jsx)(p.a,{path:"/github-eggs/search-bookmarks",component:N}),Object(u.jsx)(p.a,{path:"/github-eggs/search-users",component:T}),Object(u.jsx)(p.a,{exact:!0,path:"/github-eggs",component:k})]})})})},J=function(){var e=Object(c.useContext)(b).isSearched;return Object(u.jsx)("div",{children:e?Object(u.jsx)(I,{}):Object(u.jsx)("div",{className:"blank-search-page",children:Object(u.jsxs)("div",{className:"blank-search-page__items",children:[Object(u.jsx)("img",{src:O,alt:"search-pc"}),Object(u.jsx)("p",{children:"Search results will appear here"})]})})})},G=t.p+"static/media/logo.ca9b8f0d.svg",U=t.p+"static/media/search.2cf3f7c5.svg",z=function(){var e=Object(c.useContext)(b).searchEverything;return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{className:"logo-box",children:Object(u.jsx)("img",{className:"logo",src:G,alt:"logo"})}),Object(u.jsxs)("div",{className:"header__search",children:[Object(u.jsx)("img",{src:U,className:"header__search__icon",alt:"search-icon"}),Object(u.jsx)("input",{onChange:function(s){return e(s.target.value)},type:"search",className:"header__search__input",placeholder:"Search..."})]}),Object(u.jsx)(m.a,{children:Object(u.jsx)(m.b,{to:"/github-eggs/search-bookmarks",children:Object(u.jsxs)("div",{className:"header__bookmarks",children:[Object(u.jsx)("img",{src:R,className:"header__bookmark-icon",alt:"bookmark-icon"}),Object(u.jsx)("p",{children:"Bookmarks"})]})})})]})},W=(t(33),function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(z,{}),Object(u.jsx)(J,{})]})}),H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(s){var t=s.getCLS,c=s.getFID,r=s.getFCP,i=s.getLCP,a=s.getTTFB;t(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(h,{children:Object(u.jsx)(W,{})})}),document.getElementById("root")),H()}},[[34,1,2]]]);
//# sourceMappingURL=main.bc79194d.chunk.js.map