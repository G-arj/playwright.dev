(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{346:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},348:function(e,t,r){"use strict";var n=r(0),a=r(349);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},349:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},350:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(348),c=r(346),l=r(53),i=r.n(l),s=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,l=e.defaultValue,p=e.values,b=e.groupId,f=e.className,m=Object(o.a)(),d=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(n.useState)(l),j=O[0],y=O[1],g=n.Children.toArray(e.children);if(null!=b){var v=d[b];null!=v&&v!==j&&p.some((function(e){return e.value===v}))&&y(v)}var w=function(e){y(e),null!=b&&h(b,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},f)},p.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},351:function(e,t,r){"use strict";var n=r(3),a=r(0),o=r.n(a);t.a=function(e){var t=e.children,r=e.hidden,a=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:r,className:a}),t)}},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(347)),c=(r(350),r(351),{id:"test-parallel",title:"Parallelism and sharding"}),l={unversionedId:"test-parallel",id:"test-parallel",isDocsHomePage:!1,title:"Parallelism and sharding",description:"Playwright Test runs tests in parallel by default, using multiple worker processes.",source:"@site/docs/test-parallel.mdx",slug:"/test-parallel",permalink:"/python/docs/next/test-parallel",version:"current"},i=[{value:"Workers",id:"workers",children:[]},{value:"Shards",id:"shards",children:[]}],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright Test runs tests in parallel by default, using multiple worker processes."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#workers"}),"Workers")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#shards"}),"Shards"))),Object(o.b)("h2",{id:"workers"},"Workers"),Object(o.b)("p",null,"Each worker process creates a new environment to run tests. By default, Playwright Test reuses the worker as much as it can to make testing faster."),Object(o.b)("p",null,"However, test runner will create a new worker when retrying tests, after any test failure, to initialize a new environment, or just to speed up test execution if the worker limit is not reached."),Object(o.b)("p",null,"You can control the maximum number of worker processes via ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/test-cli"}),"command line")," or in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/test-configuration"}),"configuration file"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Run in parallel by default"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Disable parallelization"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test --worker 1\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Control the number of workers"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test --worker 4\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the configuration file"))),Object(o.b)("p",null,"Each worker process is assigned a unique sequential index that is accessible through the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/test-advanced#workerinfo"}),Object(o.b)("inlineCode",{parentName:"a"},"workerInfo"))," object."),Object(o.b)("h2",{id:"shards"},"Shards"),Object(o.b)("p",null,"Playwright Test can shard a test suite, so that it can be executed on multiple machines. For that,  pass ",Object(o.b)("inlineCode",{parentName:"p"},"--shard=x/y")," to the command line. For example, to split the suite into three shards, each running one third of the tests:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test --shard=1/3\nnpx playwright test --shard=2/3\nnpx playwright test --shard=3/3\n")))}u.isMDXComponent=!0}}]);