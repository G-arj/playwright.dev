"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[890],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=s,h=p["".concat(o,".").concat(m)]||p[m]||c[m]||n;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:s},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),s=a(9443);var n=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var u=37,d=39;var c=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,c=e.values,p=e.groupId,m=e.className,h=n(),k=h.tabGroupChoices,f=h.setTabGroupChoices,v=(0,r.useState)(s),q=v[0],N=v[1],g=r.Children.toArray(e.children),b=[];if(null!=p){var j=k[p];null!=j&&j!==q&&c.some((function(e){return e.value===j}))&&N(j)}var y=function(e){var t=e.currentTarget,a=b.indexOf(t),r=c[a].value;N(r),null!=p&&(f(p,r),setTimeout((function(){var e,a,r,s,n,i,l,u;(e=t.getBoundingClientRect(),a=e.top,r=e.left,s=e.bottom,n=e.right,i=window,l=i.innerHeight,u=i.innerWidth,a>=0&&n<=u&&s<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},R=function(e){var t,a;switch(e.keyCode){case d:var r=b.indexOf(e.target)+1;a=b[r]||b[0];break;case u:var s=b.indexOf(e.target)-1;a=b[s]||b[b.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},c.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":q===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:R,onFocus:y,onClick:y},a)}))),t?(0,r.cloneElement)(g.filter((function(e){return e.props.value===q}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==q})}))))}},9443:function(e,t,a){var r=(0,a(7294).createContext)(void 0);t.Z=r},9162:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var r=a(2122),s=a(9756),n=(a(7294),a(3905)),i=(a(5064),a(8215),{id:"class-request",title:"Request"}),l=void 0,o={unversionedId:"api/class-request",id:"api/class-request",isDocsHomePage:!1,title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/docs/api/class-request.mdx",sourceDirName:"api",slug:"/api/class-request",permalink:"/java/docs/next/api/class-request",version:"current",frontMatter:{id:"class-request",title:"Request"},sidebar:"api",previous:{title:"PlaywrightException",permalink:"/java/docs/next/api/class-playwrightexception"},next:{title:"Response",permalink:"/java/docs/next/api/class-response"}},u=[{value:"Request.allHeaders()",id:"request-all-headers",children:[]},{value:"Request.failure()",id:"request-failure",children:[]},{value:"Request.frame()",id:"request-frame",children:[]},{value:"Request.headers()",id:"request-headers",children:[]},{value:"Request.headersArray()",id:"request-headers-array",children:[]},{value:"Request.isNavigationRequest()",id:"request-is-navigation-request",children:[]},{value:"Request.method()",id:"request-method",children:[]},{value:"Request.postData()",id:"request-post-data",children:[]},{value:"Request.postDataBuffer()",id:"request-post-data-buffer",children:[]},{value:"Request.redirectedFrom()",id:"request-redirected-from",children:[]},{value:"Request.redirectedTo()",id:"request-redirected-to",children:[]},{value:"Request.resourceType()",id:"request-resource-type",children:[]},{value:"Request.response()",id:"request-response",children:[]},{value:"Request.sizes()",id:"request-sizes",children:[]},{value:"Request.timing()",id:"request-timing",children:[]},{value:"Request.url()",id:"request-url",children:[]}],d={toc:u};function c(e){var t=e.components,a=(0,s.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page",title:"Page"},"Page"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-request"},"Page.onRequest(handler)")," emitted when the request is issued by the page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-response"},"Page.onResponse(handler)")," emitted when/if the response status and headers are received for the request."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-request-finished"},"Page.onRequestFinished(handler)")," emitted when the response body is downloaded and the request is complete.")),(0,n.kt)("p",null,"If request fails at some point, then instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page#page-event-request-failed"},"Page.onRequestFailed(handler)")," event is emitted."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,n.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event."))),(0,n.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-all-headers"},"Request.allHeaders()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-failure"},"Request.failure()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-frame"},"Request.frame()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-headers"},"Request.headers()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-headers-array"},"Request.headersArray()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-is-navigation-request"},"Request.isNavigationRequest()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-method"},"Request.method()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-post-data"},"Request.postData()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-post-data-buffer"},"Request.postDataBuffer()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-redirected-from"},"Request.redirectedFrom()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-redirected-to"},"Request.redirectedTo()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-resource-type"},"Request.resourceType()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-response"},"Request.response()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-sizes"},"Request.sizes()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-timing"},"Request.timing()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-url"},"Request.url()"))),(0,n.kt)("h2",{id:"request-all-headers"},"Request.allHeaders()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-all-headers-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",">",(0,n.kt)("a",{href:"#request-all-headers-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"An object with all the request HTTP headers associated with this request. The header names are lower-cased."),(0,n.kt)("h2",{id:"request-failure"},"Request.failure()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-failure-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#request-failure-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"The method returns ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",(0,n.kt)("inlineCode",{parentName:"p"},"requestfailed")," event."),(0,n.kt)("p",null,"Example of logging of all the failed requests:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'page.onRequestFailed(request -> {\n  System.out.println(request.url() + " " + request.failure());\n});\n')),(0,n.kt)("h2",{id:"request-frame"},"Request.frame()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-frame-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-frame",title:"Frame"},"Frame"),">",(0,n.kt)("a",{href:"#request-frame-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-frame",title:"Frame"},"Frame")," that initiated this request."),(0,n.kt)("h2",{id:"request-headers"},"Request.headers()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",">",(0,n.kt)("a",{href:"#request-headers-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DEPRECATED")," Incomplete list of headers as seen by the rendering engine. Use ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-request#request-all-headers"},"Request.allHeaders()")," instead."),(0,n.kt)("h2",{id:"request-headers-array"},"Request.headersArray()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-array-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/List.html",title:"List"},"List"),"<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/List.html",title:"List"},"List"),"<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">>",">",(0,n.kt)("a",{href:"#request-headers-array-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"An array with all the request HTTP headers associated with this request. Unlike ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-request#request-all-headers"},"Request.allHeaders()"),", header names are not lower-cased. Headers with multiple entries, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,n.kt)("h2",{id:"request-is-navigation-request"},"Request.isNavigationRequest()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-is-navigation-request-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">",(0,n.kt)("a",{href:"#request-is-navigation-request-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Whether this request is driving frame's navigation."),(0,n.kt)("h2",{id:"request-method"},"Request.method()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-method-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#request-method-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Request's method (GET, POST, etc.)"),(0,n.kt)("h2",{id:"request-post-data"},"Request.postData()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#request-post-data-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Request's post body, if any."),(0,n.kt)("h2",{id:"request-post-data-buffer"},"Request.postDataBuffer()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-buffer-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">",(0,n.kt)("a",{href:"#request-post-data-buffer-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Request's post body in a binary form, if any."),(0,n.kt)("h2",{id:"request-redirected-from"},"Request.redirectedFrom()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-from-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request",title:"Request"},"Request"),">",(0,n.kt)("a",{href:"#request-redirected-from-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Request that was redirected by the server to this one, if any."),(0,n.kt)("p",null,"When the server responds with a redirect, Playwright creates a new ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-request",title:"Request"},"Request")," object. The two requests are connected by ",(0,n.kt)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",(0,n.kt)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),(0,n.kt)("p",null,"For example, if the website ",(0,n.kt)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",(0,n.kt)("inlineCode",{parentName:"p"},"https://example.com"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Response response = page.navigate("http://example.com");\nSystem.out.println(response.request().redirectedFrom().url()); // "http://example.com"\n')),(0,n.kt)("p",null,"If the website ",(0,n.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Response response = page.navigate("https://google.com");\nSystem.out.println(response.request().redirectedFrom()); // null\n')),(0,n.kt)("h2",{id:"request-redirected-to"},"Request.redirectedTo()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-to-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request",title:"Request"},"Request"),">",(0,n.kt)("a",{href:"#request-redirected-to-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"New request issued by the browser if the server responded with redirect."),(0,n.kt)("p",null,"This method is the opposite of ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-request#request-redirected-from"},"Request.redirectedFrom()"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"System.out.println(request.redirectedFrom().redirectedTo() == request); // true\n")),(0,n.kt)("h2",{id:"request-resource-type"},"Request.resourceType()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-resource-type-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#request-resource-type-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: ",(0,n.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"stylesheet"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"media"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"font"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"texttrack"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"xhr"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"eventsource"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"manifest"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"other"),"."),(0,n.kt)("h2",{id:"request-response"},"Request.response()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-response-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response",title:"Response"},"Response"),">",(0,n.kt)("a",{href:"#request-response-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the matching ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-response",title:"Response"},"Response")," object, or ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),(0,n.kt)("h2",{id:"request-sizes"},"Request.sizes()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-sizes-return"})," ","<","Sizes",">",(0,n.kt)("a",{href:"#request-sizes-return",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"requestBodySize")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," Size of the request body (POST data payload) in bytes. Set to 0 if there was no body."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"requestHeadersSize")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," Total number of bytes from the start of the HTTP request message until (and including) the double CRLF before the body."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"responseBodySize")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," Size of the received response body (encoded) in bytes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"responseHeadersSize")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," Total number of bytes from the start of the HTTP response message until (and including) the double CRLF before the body.")))),(0,n.kt)("p",null,"Returns resource size information for given request."),(0,n.kt)("h2",{id:"request-timing"},"Request.timing()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-timing-return"})," ","<","Timing",">",(0,n.kt)("a",{href:"#request-timing-return",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"startTime")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"domainLookupStart")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"domainLookupEnd")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"connectStart")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"secureConnectionStart")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"connectEnd")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"requestStart")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"responseStart")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"responseEnd")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),(0,n.kt)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",(0,n.kt)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"},"Resource Timing API"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'page.onRequestFinished(request -> {\n  Timing timing = request.timing();\n  System.out.println(timing.responseEnd - timing.startTime);\n});\npage.navigate("http://example.com");\n')),(0,n.kt)("h2",{id:"request-url"},"Request.url()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-url-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,n.kt)("a",{href:"#request-url-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"URL of the request."))}c.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(s&&(s+=" "),s+=a);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function s(){for(var e,t,a=0,s="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(s&&(s+=" "),s+=t);return s}a.d(t,{Z:function(){return s}})}}]);