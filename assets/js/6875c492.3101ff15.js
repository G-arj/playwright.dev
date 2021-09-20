"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[48610],{43146:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(67294),a=n(86010),u=n(3905),l=n(24973),s=n(36742),i=n(39306),o=n(87277),c=n(41217),m=n(86146),d="blogPostTitle_GeHD",h="blogPostData_291c",p="blogPostDetailsFull_3kfx";var f=function(e){var t,n,f,v=(n=(0,i.c2)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),g=e.children,D=e.frontMatter,F=e.metadata,E=e.truncated,_=e.isBlogPostPage,b=void 0!==_&&_,k=F.date,A=F.formattedDate,C=F.permalink,w=F.tags,x=F.readingTime,Z=F.title,N=F.editUrl,y=D.author,T=D.image,I=D.keywords,L=D.author_url||D.authorURL,z=D.author_title||D.authorTitle,B=D.author_image_url||D.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(c.Z,{keywords:I,image:T}),r.createElement("article",{className:b?void 0:"margin-bottom--xl"},(f=b?"h1":"h2",r.createElement("header",null,r.createElement(f,{className:d},b?Z:r.createElement(s.Z,{to:C},Z)),r.createElement("div",{className:(0,a.Z)(h,"margin-vert--md")},r.createElement("time",{dateTime:k},A),x&&r.createElement(r.Fragment,null," \xb7 ",v(x))),r.createElement("div",{className:"avatar margin-vert--md"},B&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:L},r.createElement("img",{src:B,alt:y})),r.createElement("div",{className:"avatar__intro"},y&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:L},y)),r.createElement("small",{className:"avatar__subtitle"},z)))))),r.createElement("div",{className:"markdown"},r.createElement(u.Zo,{components:o.Z},g)),(w.length>0||E)&&r.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",(t={},t[p]=b,t))},w.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),w.map((function(e){var t=e.label,n=e.permalink;return r.createElement(s.Z,{key:n,className:"margin-horiz--sm",to:n},t)}))),b&&N&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(m.Z,{editUrl:N})),!b&&E&&r.createElement("div",{className:"col text--right"},r.createElement(s.Z,{to:F.permalink,"aria-label":"Read more about "+Z},r.createElement("b",null,r.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},95601:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(67294),a=n(86010),u=n(36742),l="sidebar_2ahu",s="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",o="sidebarItem_2UVv",c="sidebarItemLink_1RT6",m="sidebarItemLinkActive_12pM",d=n(24973);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,a.Z)(l,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,a.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:i},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:o},r.createElement(u.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:m},e.title))}))))}},69404:function(e,t,n){n.r(t);var r=n(67294),a=n(28258),u=n(43146),l=n(36742),s=n(95601),i=n(24973),o=n(39306);t.default=function(e){var t,n=e.metadata,c=e.items,m=e.sidebar,d=n.allTagsPath,h=n.name,p=n.count,f=(t=(0,o.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),v=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(p),tagName:h});return r.createElement(a.Z,{title:v,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(s.Z,{sidebar:m})),r.createElement("main",{className:"col col--7"},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,v),r.createElement(l.Z,{href:d},r.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.map((function(e){var t=e.content;return r.createElement(u.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))}))))))}},86146:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(24973),u=n(22122),l=n(19756),s=n(86010),i="iconEdit_2_ui",o=function(e){var t=e.className,n=(0,l.Z)(e,["className"]);return r.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function c(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(o,null),r.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},48219:function(e,t,n){var r=n(22122),a=n(19756),u=n(67294),l=n(86010),s=n(36742),i=n(44996),o=n(5977),c=n(39306),m=n(18617),d=n(13919),h="dropdown__link--active";function p(e){var t=e.activeBasePath,n=e.activeBaseRegex,l=e.to,c=e.href,p=e.label,f=e.activeClassName,v=void 0===f?"navbar__link--active":f,g=e.prependBaseUrlToHref,D=e["data-language-prefix"],F=(0,a.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"]),E=(0,i.Z)(l),_=(0,i.Z)(t),b=(0,i.Z)(c,{forcePrependBaseUrl:!0}),k=p&&c&&!(0,d.Z)(c),A=v===h,C=(0,o.TH)();if(D){c="pathname://"+D+C.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+C.hash,F.autoAddBaseUrl=!1,F.target="_self";var w=["java","dotnet","python"].some((function(e){return C.pathname.startsWith("/"+e)}));(C.pathname.startsWith(D)&&w&&D.length>1||1===D.length&&!w)&&(F.className+=" "+v)}return u.createElement(s.Z,(0,r.Z)({},c?{href:g?b:c}:Object.assign({isNavLink:!0,activeClassName:v,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(_)}}:null),F),k?u.createElement("span",null,p,u.createElement(m.Z,A&&{width:12,height:12})):p)}function f(e){var t,n=e.items,s=e.position,i=e.className,o=(0,a.Z)(e,["items","position","className"]),c=(0,u.useRef)(null),m=(0,u.useRef)(null),d=(0,u.useState)(!1),f=d[0],v=d[1];(0,u.useEffect)((function(){var e=function(e){c.current&&!c.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[c]);var g=function(e,t){return void 0===t&&(t=!1),(0,l.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?u.createElement("div",{ref:c,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===s,"dropdown--right":"right"===s,"dropdown--show":f})},u.createElement(p,(0,r.Z)({className:g(i)},o,{onClick:o.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!f))}}),null!=(t=o.children)?t:o.label),u.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var l=e.className,s=(0,a.Z)(e,["className"]);return u.createElement("li",{key:t},u.createElement(p,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var r=c.current.nextElementSibling;r&&r.focus()}},activeClassName:h,className:g(l,!0)},s)))})))):u.createElement(p,(0,r.Z)({className:g(i)},o))}function v(e){var t,n,s,i=e.items,m=e.className,d=(e.position,(0,a.Z)(e,["items","className","position"])),h=(0,u.useRef)(null),f=(0,o.TH)().pathname,v=(0,u.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,c.Mg)(e.to,f)}))))||e})),g=v[0],D=v[1],F=function(e,t){return void 0===t&&(t=!1),(0,l.Z)("menu__link",{"menu__link--sublist":t},e)};if(!i)return u.createElement("li",{className:"menu__list-item"},u.createElement(p,(0,r.Z)({className:F(m)},d)));var E=null!=(t=h.current)&&t.scrollHeight?(null==(n=h.current)?void 0:n.scrollHeight)+"px":void 0;return u.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":g})},u.createElement(p,(0,r.Z)({role:"button",className:F(m,!0)},d,{onClick:function(e){e.preventDefault(),D((function(e){return!e}))}}),null!=(s=d.children)?s:d.label),u.createElement("ul",{className:"menu__list",ref:h,style:{height:g?void 0:E}},i.map((function(e,t){var n=e.className,l=(0,a.Z)(e,["className"]);return u.createElement("li",{className:"menu__list-item",key:t},u.createElement(p,(0,r.Z)({activeClassName:"menu__link--active",className:F(n)},l,{onClick:d.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,["mobile"]),l=n?v:f;return u.createElement(l,r)}},14535:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n(78695),u="loadingRing_3atr";function l(e){var t=e.className;return r.createElement("div",{className:(0,a.Z)(u,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){n.d(t,{w:function(){return c}});var r=n(38173),a=n(92137),u=n(87757),l=n.n(u),s=n(35850),i=n.n(s),o=n(8141);function c(e){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(l().mark((function e(t){var n,a,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+o.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,a=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:i().Index.load(r)}})),u=n.reduce((function(e,t){for(var n,a=(0,r.Z)(t.index.invertedIndex);!(n=a()).done;){var u=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(u[0][0])&&e.add(u[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:a,zhDictionary:Array.from(u)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},83636:function(e,t,n){n.d(t,{Z:function(){return q}});var r=n(8141),a=n(38173),u=n(92137),l=n(87757),s=n.n(l),i=n(67294),o=n(78695),c=n(52263),m=n(10412),d=n(5977),h=n(3551),p=n(88938),f=n(86092),v=n(55401),g=n(85579),D="searchBar_2moK",F="dropdownMenu_17SC",E="suggestion_1kAZ",_="cursor_6rPN",b="hitTree_2sUa",k="hitIcon_3jP2",A="hitPath_3Lax",C="noResultsIcon_1rmk",w="hitFooter_1JML",x="hitWrapper_4Hzp",Z="hitTitle_2AMl",N="hitAction_2kg3",y="noResults_1vI5",T="searchBarContainer_2P1H",I="searchBarLoadingRing_1FtX",L="searchIndexLoading_1eRR",z="input_1tay",B="hint_1WuO",R="suggestions_1cWc",M="dataset_3Xc2",P="empty_2isC";function H(e){var t=e.document,n=e.type,r=e.page,a=e.metadata,u=e.tokens,l=e.isInterOfTree,s=e.isLastOfTree,i=0===n,o=1===n,c=[];l?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):s&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var m=c.map((function(e){return'<span class="'+b+'">'+e+"</span>"})),d='<span class="'+k+'">'+(i?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':o?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",h=['<span class="'+Z+'">'+(0,v.o)(t.t,(0,g.m)(a,"t"),u)+"</span>"];return i||h.push('<span class="'+A+'">'+(0,f.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),u)+"</span>"),[].concat(m,[d,'<span class="'+x+'">'],h,["</span>",'<span class="'+N+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function S(){return'<span class="'+y+'"><span class="'+C+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var j=n(14535);function U(){return W.apply(this,arguments)}function W(){return(W=(0,u.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(24485),n.e(90213)]).then(n.t.bind(n,24485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var q=function(e){var t,n=e.handleSearchBarToggle,l=(0,c.Z)().siteConfig.baseUrl,f=(0,d.k6)(),v=(0,d.TH)(),g=(0,i.useRef)(null),b=(0,i.useRef)("empty"),k=(0,i.useRef)(!1),A=(0,i.useState)(!1),C=A[0],x=A[1],Z=(0,i.useState)(!1),N=Z[0],y=Z[1],W=(0,i.useCallback)((0,u.Z)(s().mark((function e(){var t,n,u,i,o,c,m;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===b.current){e.next=2;break}return e.abrupt("return");case 2:return b.current="loading",x(!0),e.next=6,Promise.all([(0,h.w)(l),U()]);case 6:t=e.sent,n=t[0],u=n.wrappedIndexes,i=n.zhDictionary,o=t[1],c=o(g.current,{hint:!1,autoselect:!0,cssClasses:{root:D,noPrefix:!0,dropdownMenu:F,input:z,hint:B,suggestions:R,suggestion:E,cursor:_,dataset:M,empty:P}},[{source:(0,p.v)(u,i,r.qo),templates:{suggestion:H,empty:S,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),a=l+"search?q="+encodeURIComponent(t);n.href=a,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),f.push(a))}));var u=document.createElement("div");return u.className=w,u.appendChild(n),u}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,u=n.u,l=n.h,s=t.tokens,i=u;if(r.vc&&s.length>0){for(var o,c=new URLSearchParams,m=(0,a.Z)(s);!(o=m()).done;){var d=o.value;c.append(O,d)}i+="?"+c.toString()}l&&(i+=l),f.push(i)})),b.current="done",x(!1),k.current&&((m=g.current).value&&c.autocomplete.open(),m.focus());case 15:case"end":return e.stop()}}),e)}))),[l,f]);(0,i.useEffect)((function(){if(r.vc){var e=m.Z.canUseDOM?new URLSearchParams(v.search).getAll(O):[];0!==e.length&&setTimeout((function(){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}))}}),[v.search]);var q=(0,i.useCallback)((function(){k.current=!0,W(),null==n||n(!0)}),[n,W]),K=(0,i.useCallback)((function(){null==n||n(!1)}),[n]),Q=(0,i.useCallback)((function(){W()}),[W]),V=(0,i.useCallback)((function(e){e.target.value&&y(!0)}),[]);return i.createElement("div",{className:(0,o.Z)("navbar__search",T,(t={},t[L]=C&&N,t))},i.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:Q,onFocus:q,onBlur:K,onChange:V,ref:g}),i.createElement(j.Z,{className:I}))}},88938:function(e,t,n){n.d(t,{v:function(){return c}});var r=n(38173),a=n(35850),u=n.n(a);function l(e,t){var n=[];return function e(a,u){if(0!==a.length){var l=a[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(l))for(var s,i=function(e,t){var n=[];return function e(a,u){for(var l,s=0,i=!1,o=(0,r.Z)(t);!(l=o()).done;){var c=l.value;if(a.substr(0,c.length)===c){var m={missed:u.missed,term:u.term.concat({value:c})};a.length>c.length?e(a.substr(c.length),m):n.push(m),i=!0}else for(var d=c.length-1;d>s;d-=1){var h=c.substr(0,d);if(a.substr(0,d)===h){s=d;var p={missed:u.missed,term:u.term.concat({value:h,trailing:!0})};a.length>d?e(a.substr(d),p):n.push(p),i=!0;break}}}i||(a.length>0?e(a.substr(1),{missed:u.missed+1,term:u.term}):u.term.length>0&&n.push(u))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(l,t),o=(0,r.Z)(i);!(s=o()).done;){var c=s.value,m=u.concat.apply(u,c);e(a.slice(1),m)}else{var d=u.concat({value:l});e(a.slice(1),d)}}else n.push(u)}(e,[]),n}var s=n(8141);function i(e){return o(e).concat(o(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function o(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:u().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?u().Query.wildcard.TRAILING:u().Query.wildcard.NONE}}))}}))}function c(e,t,n){return function(a,o){var c=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return u()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(a,s.dK);if(0!==c.length){var m=function(e,t){var n=l(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:u().Query.presence.REQUIRED,wildcard:u().Query.wildcard.LEADING|u().Query.wildcard.TRAILING}}))}];for(var a,o=(0,r.Z)(n);!(a=o()).done;){var c=a.value;c[c.length-1].maybeTyping=!0}for(var m,d,h=[],p=(0,r.Z)(s.dK);!(m=p()).done;){var f=m.value;if("en"===f)s._k||h.unshift(u().stopWordFilter);else{var v=u()[f];v.stopWordFilter&&h.unshift(v.stopWordFilter)}}if(h.length>0){var g=function(e){return h.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};d=[];for(var D,F=[],E=(0,r.Z)(n);!(D=E()).done;){var _=D.value,b=g(_);d.push(b),b.length<_.length&&b.length>0&&F.push(b)}n.push.apply(n,F)}else d=n.slice();for(var k,A=[],C=(0,r.Z)(d);!(k=C()).done;){var w=k.value;if(w.length>2)for(var x=w.length-1;x>=0;x-=1)A.push(w.slice(0,x).concat(w.slice(x+1)))}return i(n).concat(i(A))}(c,t),d=[],h=function(){for(var t,a=p.value,u=a.term,l=a.tokens,s=function(){var a=t.value,s=a.documents,i=a.index,o=a.type;if(d.push.apply(d,i.query((function(e){for(var t,n=(0,r.Z)(u);!(t=n()).done;){var a=t.value;e.term(a.value,{wildcard:a.wildcard,presence:a.presence})}})).slice(0,n).filter((function(e){return!d.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-d.length).map((function(t){var n=s.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:o,page:0!==o&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:l,score:t.score}}))),d.length>=n)return{v:"break|search"}},i=(0,r.Z)(e);!(t=i()).done;){var o=s();if("object"==typeof o)return o.v}};e:for(var p,f=(0,r.Z)(m);!(p=f()).done;){if("break|search"===h())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,a=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===a&&(a=n.index),r===a?0===t.type?-1:0===n.type?1:t.index-n.index:r-a}))}(d),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(d),o(d)}else o([])}}},98740:function(e,t,n){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},85579:function(e,t,n){function r(e,t){for(var n=[],r=0,a=Object.values(e);r<a.length;r++){var u=a[r];u[t]&&n.push.apply(n,u[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},86092:function(e,t,n){n.d(t,{C:function(){return u}});var r=n(38173),a=n(98740);function u(e,t,n){for(var l,s=[],i=(0,r.Z)(t);!(l=i()).done;){var o=l.value,c=e.toLowerCase().indexOf(o);if(c>=0){c>0&&s.push(u(e.substr(0,c),t)),s.push("<mark>"+(0,a.X)(e.substr(c,o.length))+"</mark>");var m=c+o.length;m<e.length&&s.push(u(e.substr(m),t));break}}return 0===s.length?n?"<mark>"+(0,a.X)(e)+"</mark>":(0,a.X)(e):s.join("")}},55401:function(e,t,n){n.d(t,{o:function(){return i}});var r=n(98740),a=n(86092),u=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function l(e){for(var t=[],n=0,r=e;r.length>0;){var a=r.match(u);if(!a){t.push(r);break}a.index>0&&t.push(r.substr(0,a.index)),t.push(a[0]),n+=a.index+a[0].length,r=e.substr(n)}return t}var s=n(8141);function i(e,t,n,r){void 0===r&&(r=s.Hk);for(var a={chunkIndex:-1},u=o(e,t,n,0,0,a),l=u.slice(0,a.chunkIndex),i=u[a.chunkIndex],c=[i.html],m=u.slice(a.chunkIndex+1),d=i.textLength,h=0,p=0,f=!1,v=!1;d<r;)if((h<=p||0===m.length)&&l.length>0){var g=l.pop();d+g.textLength<=r?(c.unshift(g.html),h+=g.textLength,d+=g.textLength):(f=!0,l.length=0)}else{if(!(m.length>0))break;var D=m.shift();d+D.textLength<=r?(c.push(D.html),p+=D.textLength,d+=D.textLength):(v=!0,m.length=0)}return(f||l.length>0)&&c.unshift("\u2026"),(v||m.length>0)&&c.push("\u2026"),c.join("")}function o(e,t,n,u,s,i){var c=[],m=t[u],d=m[0],h=m[1];if(d<s)(u+=1)<t.length&&c.push.apply(c,o(e,t,n,u,s));else{d>s&&c.push.apply(c,l(e.substring(s,d)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),i&&(i.chunkIndex=c.length),c.push({html:(0,a.C)(e.substr(d,h),n,!0),textLength:h});var p=d+h;(u+=1)<t.length?c.push.apply(c,o(e,t,n,u,p)):p<e.length&&c.push.apply(c,l(e.substr(p)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},8141:function(e,t,n){n.d(t,{vc:function(){return s},rx:function(){return i},dK:function(){return u},_k:function(){return l},Hk:function(){return c},qo:function(){return o},Iz:function(){return m}});var r=n(35850),a=n.n(r);n(88465)(a()),n(64376).w(a()),n(93609)(a());var u=["en","zh"],l=!1,s=null,i="74d37f47",o=10,c=50,m={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},64376:function(e,t,n){function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function a(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return a}})}}]);