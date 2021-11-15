"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[273],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return p}});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(r),p=o,h=u["".concat(i,".").concat(p)]||u[p]||f[p]||n;return r?a.createElement(h,l(l({ref:t},m),{},{components:r})):a.createElement(h,l({ref:t},m))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8215:function(e,t,r){var a=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return f}});var a=r(7294),o=r(9443);var n=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),c="tabItem_1uMI",i="tabItemActive_2DSg";var s=37,m=39;var f=function(e){var t=e.lazy,r=e.block,o=e.defaultValue,f=e.values,u=e.groupId,p=e.className,h=n(),d=h.tabGroupChoices,k=h.setTabGroupChoices,y=(0,a.useState)(o),v=y[0],b=y[1],g=a.Children.toArray(e.children),x=[];if(null!=u){var N=d[u];null!=N&&N!==v&&f.some((function(e){return e.value===N}))&&b(N)}var w=function(e){var t=e.currentTarget,r=x.indexOf(t),a=f[r].value;b(a),null!=u&&(k(u,a),setTimeout((function(){var e,r,a,o,n,l,c,s;(e=t.getBoundingClientRect(),r=e.top,a=e.left,o=e.bottom,n=e.right,l=window,c=l.innerHeight,s=l.innerWidth,r>=0&&n<=s&&o<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case m:var a=x.indexOf(e.target)+1;r=x[a]||x[0];break;case s:var o=x.indexOf(e.target)-1;r=x[o]||x[x.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},p)},f.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:w,onClick:w},r)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,r){var a=(0,r(7294).createContext)(void 0);t.Z=a},1056:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return f},default:function(){return p}});var a=r(2122),o=r(9756),n=(r(7294),r(3905)),l=r(5064),c=r(8215),i={id:"class-framelocator",title:"FrameLocator"},s=void 0,m={unversionedId:"api/class-framelocator",id:"api/class-framelocator",isDocsHomePage:!1,title:"FrameLocator",description:"FrameLocator represents a view to the iframe on the page. It captures the logic sufficient to retrieve the iframe and locate elements in that iframe. FrameLocator can be created with either page.framelocator(selector) or locator.framelocator(selector) method.",source:"@site/docs/api/class-framelocator.mdx",sourceDirName:"api",slug:"/api/class-framelocator",permalink:"/python/docs/next/api/class-framelocator",version:"current",frontMatter:{id:"class-framelocator",title:"FrameLocator"}},f=[{value:"frame_locator.first",id:"frame-locator-first",children:[]},{value:"frame_locator.frame_locator(selector)",id:"frame-locator-frame-locator",children:[]},{value:"frame_locator.last",id:"frame-locator-last",children:[]},{value:"frame_locator.locator(selector)",id:"frame-locator-locator",children:[]},{value:"frame_locator.nth(index)",id:"frame-locator-nth",children:[]}],u={toc:f};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"FrameLocator represents a view to the ",(0,n.kt)("inlineCode",{parentName:"p"},"iframe")," on the page. It captures the logic sufficient to retrieve the ",(0,n.kt)("inlineCode",{parentName:"p"},"iframe")," and locate elements in that iframe. FrameLocator can be created with either ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-frame-locator"},"page.frame_locator(selector)")," or ",(0,n.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-locator#locator-frame-locator"},"locator.frame_locator(selector)")," method."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'locator = page.frame_locator("my-frame").locator("text=Submit")\nlocator.click()\n'))),(0,n.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},'locator = page.frame_locator("#my-frame").locator("text=Submit")\nawait locator.click()\n')))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Strictness")),(0,n.kt)("p",null,"Frame locators are strict. This means that all operations on frame locators will throw if more than one element matches given selector."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"# Throws if there are several frames in DOM:\npage.frame_locator('.result-frame').locator('button').click()\n\n# Works because we explicitly tell locator to pick the first frame:\npage.frame_locator('.result-frame').first.locator('button').click()\n"))),(0,n.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"# Throws if there are several frames in DOM:\nawait page.frame_locator('.result-frame').locator('button')..click()\n\n# Works because we explicitly tell locator to pick the first frame:\nawait page.frame_locator('.result-frame').first.locator('button')..click()\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-framelocator#frame-locator-first"},"frame_locator.first")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-framelocator#frame-locator-frame-locator"},"frame_locator.frame_locator(selector)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-framelocator#frame-locator-last"},"frame_locator.last")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-framelocator#frame-locator-locator"},"frame_locator.locator(selector)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-framelocator#frame-locator-nth"},"frame_locator.nth(index)"))),(0,n.kt)("h2",{id:"frame-locator-first"},"frame_locator.first"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-first-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,n.kt)("a",{href:"#frame-locator-first-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns locator to the first matching frame."),(0,n.kt)("h2",{id:"frame-locator-frame-locator"},"frame_locator.frame_locator(selector)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"selector"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-option-selector"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," A selector to use when resolving DOM element. See ",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/selectors"},"working with selectors")," for more details.",(0,n.kt)("a",{href:"#frame-locator-frame-locator-option-selector",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,n.kt)("a",{href:"#frame-locator-frame-locator-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"When working with iframes, you can create a frame locator that will enter the iframe and allow selecting elements in that iframe."),(0,n.kt)("h2",{id:"frame-locator-last"},"frame_locator.last"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-last-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,n.kt)("a",{href:"#frame-locator-last-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns locator to the last matching frame."),(0,n.kt)("h2",{id:"frame-locator-locator"},"frame_locator.locator(selector)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"selector"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-selector"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," A selector to use when resolving DOM element. See ",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/selectors"},"working with selectors")," for more details.",(0,n.kt)("a",{href:"#frame-locator-locator-option-selector",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-locator",title:"Locator"},"Locator"),">",(0,n.kt)("a",{href:"#frame-locator-locator-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"The method finds an element matching the specified selector in the FrameLocator's subtree."),(0,n.kt)("h2",{id:"frame-locator-nth"},"frame_locator.nth(index)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"index"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-option-index"})," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">",(0,n.kt)("a",{href:"#frame-locator-nth-option-index",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-return"})," ","<",(0,n.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"},"FrameLocator"),">",(0,n.kt)("a",{href:"#frame-locator-nth-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns locator to the n-th matching frame."))}p.isMDXComponent=!0},6010:function(e,t,r){function a(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);