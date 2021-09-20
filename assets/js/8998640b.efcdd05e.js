"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[14967],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),v=c(t),d=s,b=v["".concat(l,".").concat(d)]||v[d]||p[d]||o;return t?n.createElement(b,a(a({ref:r},u),{},{components:t})):n.createElement(b,a({ref:r},u))}));function d(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=v;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},58215:function(e,r,t){var n=t(67294);r.Z=function(e){var r=e.children,t=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:s},r)}},55064:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(67294),s=t(79443);var o=function(){var e=(0,n.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=t(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var r=e.lazy,t=e.block,s=e.defaultValue,p=e.values,v=e.groupId,d=e.className,b=o(),f=b.tabGroupChoices,m=b.setTabGroupChoices,w=(0,n.useState)(s),h=w[0],k=w[1],y=n.Children.toArray(e.children),g=[];if(null!=v){var S=f[v];null!=S&&S!==h&&p.some((function(e){return e.value===S}))&&k(S)}var O=function(e){var r=e.currentTarget,t=g.indexOf(r),n=p[t].value;k(n),null!=v&&(m(v,n),setTimeout((function(){var e,t,n,s,o,a,i,c;(e=r.getBoundingClientRect(),t=e.top,n=e.left,s=e.bottom,o=e.right,a=window,i=a.innerHeight,c=a.innerWidth,t>=0&&o<=c&&s<=i&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(l),setTimeout((function(){return r.classList.remove(l)}),2e3))}),150))},N=function(e){var r,t;switch(e.keyCode){case u:var n=g.indexOf(e.target)+1;t=g[n]||g[0];break;case c:var s=g.indexOf(e.target)-1;t=g[s]||g[g.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},d)},p.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:h===r?0:-1,"aria-selected":h===r,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":h===r}),key:r,ref:function(e){return g.push(e)},onKeyDown:N,onFocus:O,onClick:O},t)}))),r?(0,n.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==h})}))))}},79443:function(e,r,t){var n=(0,t(67294).createContext)(void 0);r.Z=n},53204:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=t(22122),s=t(19756),o=(t(67294),t(3905)),a=(t(55064),t(58215),{id:"class-browserserver",title:"BrowserServer"}),i=void 0,l={unversionedId:"api/class-browserserver",id:"version-1.14/api/class-browserserver",isDocsHomePage:!1,title:"BrowserServer",description:"- browserServer.on('close')",source:"@site/versioned_docs/version-1.14/api/class-browserserver.mdx",sourceDirName:"api",slug:"/api/class-browserserver",permalink:"/docs/1.14/api/class-browserserver",version:"1.14",frontMatter:{id:"class-browserserver",title:"BrowserServer"},sidebar:"version-1.14/api",previous:{title:"BrowserContext",permalink:"/docs/1.14/api/class-browsercontext"},next:{title:"BrowserType",permalink:"/docs/1.14/api/class-browsertype"}},c=[{value:"browserServer.on(&#39;close&#39;)",id:"browser-server-event-close",children:[]},{value:"browserServer.close()",id:"browser-server-close",children:[]},{value:"browserServer.kill()",id:"browser-server-kill",children:[]},{value:"browserServer.process()",id:"browser-server-process",children:[]},{value:"browserServer.wsEndpoint()",id:"browser-server-ws-endpoint",children:[]}],u={toc:c};function p(e){var r=e.components,t=(0,s.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-browserserver#browser-server-event-close"},"browserServer.on('close')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-browserserver#browser-server-close"},"browserServer.close()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-browserserver#browser-server-kill"},"browserServer.kill()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-browserserver#browser-server-process"},"browserServer.process()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-browserserver#browser-server-ws-endpoint"},"browserServer.wsEndpoint()"))),(0,o.kt)("h2",{id:"browser-server-event-close"},"browserServer.on('close')"),(0,o.kt)("p",null,"Emitted when the browser server closes."),(0,o.kt)("h2",{id:"browser-server-close"},"browserServer.close()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"browser-server-close-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,o.kt)("a",{href:"#browser-server-close-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Closes the browser gracefully and makes sure the process is terminated."),(0,o.kt)("h2",{id:"browser-server-kill"},"browserServer.kill()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"browser-server-kill-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,o.kt)("a",{href:"#browser-server-kill-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Kills the browser process and waits for the process to exit."),(0,o.kt)("h2",{id:"browser-server-process"},"browserServer.process()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"browser-server-process-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/child_process.html",title:"ChildProcess"},"ChildProcess"),">",(0,o.kt)("a",{href:"#browser-server-process-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Spawned browser application process."),(0,o.kt)("h2",{id:"browser-server-ws-endpoint"},"browserServer.wsEndpoint()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"browser-server-ws-endpoint-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,o.kt)("a",{href:"#browser-server-ws-endpoint-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Browser websocket url."),(0,o.kt)("p",null,"Browser websocket endpoint which can be used as an argument to ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-browsertype#browser-type-connect"},"browserType.connect(wsEndpoint[, options])")," to establish connection to the browser."))}p.isMDXComponent=!0},86010:function(e,r,t){function n(e){var r,t,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(s&&(s+=" "),s+=t);else for(r in e)e[r]&&(s&&(s+=" "),s+=r);return s}function s(){for(var e,r,t=0,s="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(s&&(s+=" "),s+=r);return s}t.d(r,{Z:function(){return s}})}}]);