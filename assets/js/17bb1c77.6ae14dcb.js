"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[60440],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(t),f=a,d=g["".concat(s,".").concat(f)]||g[f]||u[f]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(67294),a=t(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var n=e.lazy,t=e.block,a=e.defaultValue,u=e.values,g=e.groupId,f=e.className,d=o(),m=d.tabGroupChoices,v=d.setTabGroupChoices,h=(0,r.useState)(a),k=h[0],b=h[1],y=r.Children.toArray(e.children),N=[];if(null!=g){var w=m[g];null!=w&&w!==k&&u.some((function(e){return e.value===w}))&&b(w)}var P=function(e){var n=e.currentTarget,t=N.indexOf(n),r=u[t].value;b(r),null!=g&&(v(g,r),setTimeout((function(){var e,t,r,a,o,i,l,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,t>=0&&o<=c&&a<=l&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},x=function(e){var n,t;switch(e.keyCode){case p:var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case c:var a=N.indexOf(e.target)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},f)},u.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:P,onClick:P},t)}))),n?(0,r.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},79443:function(e,n,t){var r=(0,t(67294).createContext)(void 0);n.Z=r},36052:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),i=(t(55064),t(58215),{id:"verification",title:"Verification"}),l=void 0,s={unversionedId:"verification",id:"version-1.13/verification",isDocsHomePage:!1,title:"Verification",description:"- Console logs",source:"@site/versioned_docs/version-1.13/verification.mdx",sourceDirName:".",slug:"/verification",permalink:"/docs/1.13/verification",version:"1.13",frontMatter:{id:"verification",title:"Verification"},sidebar:"version-1.13/docs",previous:{title:"Trace Viewer",permalink:"/docs/1.13/trace-viewer"},next:{title:"Videos",permalink:"/docs/1.13/videos"}},c=[{value:"Console logs",id:"console-logs",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Page errors",id:"page-errors",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Page events",id:"page-events",children:[{value:"API reference",id:"api-reference-2",children:[]}]}],p={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#console-logs"},"Console logs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#page-errors"},"Page errors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#page-events"},"Page events"))),(0,o.kt)("h2",{id:"console-logs"},"Console logs"),(0,o.kt)("p",null,"Console messages logged in the page can be brought into the Playwright context."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Listen for all console logs\npage.on('console', msg => console.log(msg.text()))\n\n// Listen for all console events and handle errors\npage.on('console', msg => {\n  if (msg.type() === 'error')\n    console.log(`Error text: \"${msg.text()}\"`);\n});\n\n// Get the next console log\nconst [msg] = await Promise.all([\n  page.waitForEvent('console'),\n  // Issue console.log inside the page\n  page.evaluate(() => {\n    console.log('hello', 42, { foo: 'bar' });\n  }),\n]);\n\n// Deconstruct console log arguments\nawait msg.args[0].jsonValue() // hello\nawait msg.args[1].jsonValue() // 42\n")),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-consolemessage",title:"ConsoleMessage"},"ConsoleMessage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-event-console"},"page.on('console')"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"page-errors"},"Page errors"),(0,o.kt)("p",null,"Listen for uncaught exceptions in the page with the ",(0,o.kt)("inlineCode",{parentName:"p"},"pagerror")," event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Log all uncaught errors to the terminal\npage.on('pageerror', exception => {\n  console.log(`Uncaught exception: \"${exception}\"`);\n});\n\n// Navigate to a page with an exception.\nawait page.goto('data:text/html,<script>throw new Error(\"Test\")<\/script>');\n")),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-event-page-error"},"page.on('pageerror')"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"page-events"},"Page events"),(0,o.kt)("h4",{id:"requestfailed"},(0,o.kt)("inlineCode",{parentName:"h4"},'"requestfailed"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),(0,o.kt)("h4",{id:"dialog---handle-alert-confirm-prompt"},(0,o.kt)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"page.on('dialog', dialog => {\n  dialog.accept();\n});\n")),(0,o.kt)("h4",{id:"popup---handle-popup-windows"},(0,o.kt)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('#open')\n]);\n")),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-event-request-failed"},"page.on('requestfailed')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-event-dialog"},"page.on('dialog')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.13/api/class-page#page-event-popup"},"page.on('popup')"))))}u.isMDXComponent=!0},86010:function(e,n,t){function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);