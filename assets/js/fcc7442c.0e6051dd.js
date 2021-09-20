"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[46420],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a=n(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,d=e.groupId,f=e.className,g=i(),v=g.tabGroupChoices,m=g.setTabGroupChoices,h=(0,r.useState)(a),w=h[0],b=h[1],k=r.Children.toArray(e.children),y=[];if(null!=d){var N=v[d];null!=N&&N!==w&&p.some((function(e){return e.value===N}))&&b(N)}var O=function(e){var t=e.currentTarget,n=y.indexOf(t),r=p[n].value;b(r),null!=d&&(m(d,r),setTimeout((function(){var e,n,r,a,i,o,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},P=function(e){var t,n;switch(e.keyCode){case u:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case c:var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:P,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},16913:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=(n(55064),n(58215),{id:"events",title:"Events"}),s=void 0,l={unversionedId:"events",id:"version-1.13/events",isDocsHomePage:!1,title:"Events",description:"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:",source:"@site/versioned_docs/version-1.13/events.mdx",sourceDirName:".",slug:"/events",permalink:"/docs/1.13/events",version:"1.13",frontMatter:{id:"events",title:"Events"},sidebar:"version-1.13/docs",previous:{title:"Emulation",permalink:"/docs/1.13/emulation"},next:{title:"Extensibility",permalink:"/docs/1.13/extensibility"}},c=[{value:"Waiting for event",id:"waiting-for-event",children:[]},{value:"Adding/removing event listener",id:"addingremoving-event-listener",children:[]},{value:"Adding one-off listeners",id:"adding-one-off-listeners",children:[{value:"API reference",id:"api-reference",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#waiting-for-event"},"Waiting for event")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#addingremoving-event-listener"},"Adding/removing event listener")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#adding-one-off-listeners"},"Adding one-off listeners"))),(0,i.kt)("h2",{id:"waiting-for-event"},"Waiting for event"),(0,i.kt)("p",null,"Most of the time, scripts will need to wait for a particular event to happen. Below are some of the typical event awaiting patterns."),(0,i.kt)("p",null,"Wait for a request with the specified url:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Note that Promise.all prevents a race condition\n// between clicking and waiting for the request.\nconst [request] = await Promise.all([\n  page.waitForRequest('**/*logo*.png'),\n  // This action triggers the request\n  page.goto('https://wikipedia.org')\n]);\nconsole.log(request.url());\n")),(0,i.kt)("p",null,"Wait for popup window:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Note that Promise.all prevents a race condition\n// between clicking and waiting for the popup.\nconst [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  // This action triggers the popup\n  page.evaluate('window.open()')\n]);\nawait popup.goto('https://wikipedia.org');\n")),(0,i.kt)("h2",{id:"addingremoving-event-listener"},"Adding/removing event listener"),(0,i.kt)("p",null,"Sometimes, events happen in random time and instead of waiting for them, they need to be handled. Playwright supports traditional language mechanisms for subscribing and unsubscribing from the events:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"page.on('request', request => console.log(`Request sent: ${request.url()}`));\nconst listener = request => console.log(`Request finished: ${request.url()}`);\npage.on('requestfinished', listener);\nawait page.goto('https://wikipedia.org');\n\npage.off('requestfinished', listener);\nawait page.goto('https://www.openstreetmap.org/');\n")),(0,i.kt)("h2",{id:"adding-one-off-listeners"},"Adding one-off listeners"),(0,i.kt)("p",null,"If certain event needs to be handled once, there is a convenience API for that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"page.once('dialog', dialog => dialog.accept(\"2021\"));\nawait page.evaluate(\"prompt('Enter a number:')\");\n")),(0,i.kt)("h3",{id:"api-reference"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-browser",title:"Browser"},"Browser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page",title:"Page"},"Page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-worker",title:"Worker"},"Worker"))))}p.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);