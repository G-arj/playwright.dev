(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(347)),o=(r(350),r(351),{id:"test-fixtures",title:"Advanced Fixtures"}),s={unversionedId:"test-fixtures",id:"test-fixtures",isDocsHomePage:!1,title:"Advanced Fixtures",description:"- Introduction to fixtures",source:"@site/docs/test-fixtures.mdx",slug:"/test-fixtures",permalink:"/python/docs/next/test-fixtures",version:"current"},u=[{value:"Introduction to fixtures",id:"introduction-to-fixtures",children:[{value:"Without fixtures",id:"without-fixtures",children:[]},{value:"With fixtures",id:"with-fixtures",children:[]}]},{value:"Test fixtures",id:"test-fixtures",children:[]},{value:"Worker fixtures",id:"worker-fixtures",children:[]}],c={toc:u};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#introduction-to-fixtures"}),"Introduction to fixtures")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#test-fixtures"}),"Test fixtures")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#worker-fixtures"}),"Worker fixtures"))),Object(a.b)("br",null),Object(a.b)("h2",{id:"introduction-to-fixtures"},"Introduction to fixtures"),Object(a.b)("p",null,"Playwright Test is based on the concept of the test fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests, which gives Playwright Test following benefits:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Playwright Test runs tests in parallel by default, making your test suite much faster."),Object(a.b)("li",{parentName:"ul"},"Playwright Test can efficiently retry the flaky failures, instead of re-running the whole suite."),Object(a.b)("li",{parentName:"ul"},"You can group tests based on their meaning, instead of their common setup.")),Object(a.b)("p",null,"Here is how typical test environment setup differs between traditional test style and the fixture-based one. We assume a ",Object(a.b)("inlineCode",{parentName:"p"},"TodoPage"),' class that helps interacting with a "todo list" page of the web app.'),Object(a.b)("h3",{id:"without-fixtures"},"Without fixtures"),Object(a.b)("h3",{id:"with-fixtures"},"With fixtures"),Object(a.b)("p",null,"You declare exact fixtures that the test needs and the runner initializes them for each test individually. Tests can use any combinations of the fixtures to tailor precise environment they need. You no longer need to wrap tests in ",Object(a.b)("inlineCode",{parentName:"p"},"describe"),"s that set up environment, everything is declarative and typed."),Object(a.b)("p",null,"There are two types of fixtures: ",Object(a.b)("inlineCode",{parentName:"p"},"test")," and ",Object(a.b)("inlineCode",{parentName:"p"},"worker"),". Test fixtures are set up for each test and worker fixtures are set up for each process that runs test files."),Object(a.b)("h2",{id:"test-fixtures"},"Test fixtures"),Object(a.b)("p",null,"Test fixtures are set up for each test. Consider the following test file:"),Object(a.b)("p",null,"It uses fixtures ",Object(a.b)("inlineCode",{parentName:"p"},"hello")," and ",Object(a.b)("inlineCode",{parentName:"p"},"helloWorld")," that are set up by the framework for each test run."),Object(a.b)("p",null,"Here is how test fixtures are declared and defined. Fixtures can use other fixtures - note how ",Object(a.b)("inlineCode",{parentName:"p"},"helloWorld")," uses ",Object(a.b)("inlineCode",{parentName:"p"},"hello"),"."),Object(a.b)("p",null,"With fixtures, test organization becomes flexible - you can put tests that make sense next to each other based on what they test, not based on the environment they need."),Object(a.b)("h2",{id:"worker-fixtures"},"Worker fixtures"),Object(a.b)("p",null,"Playwright Test uses worker processes to run test files. You can specify the maximum number of workers using ",Object(a.b)("inlineCode",{parentName:"p"},"--workers")," command line option. Similarly to how test fixtures are set up for individual test runs, worker fixtures are set up for each worker process. That's where you can set up services, run servers, etc. Playwright Test will reuse the worker process for as many test files as it can, provided their worker fixtures match and hence environments are identical."),Object(a.b)("p",null,"Here is how the test looks:"),Object(a.b)("p",null,"And here is how fixtures are declared and defined:"))}l.isMDXComponent=!0},346:function(e,t,r){"use strict";function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return p}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),l=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},f=function(e){var t=l(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,p=f["".concat(o,".").concat(d)]||f[d]||b[d]||a;return r?i.a.createElement(p,s(s({ref:t},c),{},{components:r})):i.a.createElement(p,s({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},348:function(e,t,r){"use strict";var n=r(0),i=r(349);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},349:function(e,t,r){"use strict";var n=r(0),i=Object(n.createContext)(void 0);t.a=i},350:function(e,t,r){"use strict";var n=r(0),i=r.n(n),a=r(348),o=r(346),s=r(53),u=r.n(s),c=37,l=39;t.a=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,f=e.values,b=e.groupId,d=e.className,p=Object(a.a)(),h=p.tabGroupChoices,m=p.setTabGroupChoices,O=Object(n.useState)(s),y=O[0],x=O[1],v=n.Children.toArray(e.children);if(null!=b){var j=h[b];null!=j&&j!==y&&f.some((function(e){return e.value===j}))&&x(j)}var w=function(e){x(e),null!=b&&m(b,e)},g=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,r=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(o.a)("tabs__item",u.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case l:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(g,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},351:function(e,t,r){"use strict";var n=r(3),i=r(0),a=r.n(i);t.a=function(e){var t=e.children,r=e.hidden,i=e.className;return a.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:r,className:i}),t)}}}]);