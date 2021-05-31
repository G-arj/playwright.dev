(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(393)),o=(n(396),n(397),{id:"test-cli",title:"Advanced Command Line"}),l={unversionedId:"test-cli",id:"test-cli",isDocsHomePage:!1,title:"Advanced Command Line",description:"`sh",source:"@site/docs/test-cli.mdx",slug:"/test-cli",permalink:"/docs/next/test-cli",version:"current",sidebar:"docs",previous:{title:"Advanced Fixtures",permalink:"/docs/next/test-fixtures"},next:{title:"Advanced Configuration",permalink:"/docs/next/test-advanced"}},c=[],s={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# Ask for help!\nnpx playwright test --help\n")),Object(i.b)("p",null,"Arguments passed to ",Object(i.b)("inlineCode",{parentName:"p"},"npx playwright test")," are treated as a filter for test files. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"npx playwright test my-spec")," will only run tests from files with ",Object(i.b)("inlineCode",{parentName:"p"},"my-spec")," in the name."),Object(i.b)("p",null,"All the options are available in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/test-configuration"}),"configuration file"),". However, selected options can be passed to a command line and take a priority over the configuration file."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--headed"),": Run tests in headed browsers. Useful for debugging."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--browser"),": Run test in a specific browser. Available options are  ",Object(i.b)("inlineCode",{parentName:"li"},'"chromium"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"firefox"'),", ",Object(i.b)("inlineCode",{parentName:"li"},'"webkit"')," or ",Object(i.b)("inlineCode",{parentName:"li"},'"all"')," to run tests in all three browsers at the same time."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-c <file>")," or ",Object(i.b)("inlineCode",{parentName:"li"},"--config <file>"),": Configuration file. If not passed, defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"playwright.config.ts")," or ",Object(i.b)("inlineCode",{parentName:"li"},"playwright.config.js")," in the current directory."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-c <dir>")," or ",Object(i.b)("inlineCode",{parentName:"li"},"--config <dir>"),": Directory with the tests to run without configuration file."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--forbid-only"),": Whether to disallow ",Object(i.b)("inlineCode",{parentName:"li"},"test.only"),". Useful on CI."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-g <grep>")," or ",Object(i.b)("inlineCode",{parentName:"li"},"--grep <grep>"),": Only run tests matching this regular expression. For example, this will run ",Object(i.b)("inlineCode",{parentName:"li"},"'should add to cart'")," when passed ",Object(i.b)("inlineCode",{parentName:"li"},'-g="add to cart"'),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--global-timeout <number>"),": Total timeout for the whole test run in milliseconds. By default, there is no global timeout."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--list"),": List all the tests, but do not run them."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--max-failures <N>")," or ",Object(i.b)("inlineCode",{parentName:"li"},"-x"),": Stop after the first ",Object(i.b)("inlineCode",{parentName:"li"},"N")," test failures. Passing ",Object(i.b)("inlineCode",{parentName:"li"},"-x")," stops after the first failure."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--output <dir>"),": Directory for artifacts produced by tests, defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"test-results"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--project <name>"),": Only run tests from one of the specified ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/test-advanced#projects"}),"projects"),". Defaults to running all projects defined in the configuration file."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--quiet"),": Whether to suppress stdout and stderr from the tests."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--repeat-each <N>"),": Run each test ",Object(i.b)("inlineCode",{parentName:"li"},"N")," times, defaults to one."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--reporter <reporter>"),": Choose a reporter: minimalist ",Object(i.b)("inlineCode",{parentName:"li"},"dot"),", concise ",Object(i.b)("inlineCode",{parentName:"li"},"line")," or detailed ",Object(i.b)("inlineCode",{parentName:"li"},"list"),". See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/test-reporters"}),"reporters")," for more information."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--retries <number>"),": The maximum number of ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/test-retries"}),"retries")," for flaky tests, defaults to zero (no retries)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--shard <shard>"),": ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/test-parallel#shards"}),"Shard")," tests and execute only selected shard, specified in the form ",Object(i.b)("inlineCode",{parentName:"li"},"current/all"),", 1-based, for example ",Object(i.b)("inlineCode",{parentName:"li"},"3/5"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--timeout <number>"),": Maximum timeout in milliseconds for each test, defaults to 10 seconds."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--update-snapshots")," or ",Object(i.b)("inlineCode",{parentName:"li"},"-u"),": Whether to update ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/test-snapshots"}),"snapshots")," with actual results instead of comparing them. Use this when snapshot expectations have changed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--workers <number>")," or ",Object(i.b)("inlineCode",{parentName:"li"},"-j <number>"),": The maximum number of concurrent worker processes that run in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/test-parallel"}),"parallel"),".")))}b.isMDXComponent=!0},392:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";var r=n(0),a=n(395);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},396:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(394),o=n(392),l=n(55),c=n.n(l),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=Object(i.a)(),f=d.tabGroupChoices,O=d.setTabGroupChoices,j=Object(r.useState)(l),h=j[0],N=j[1],y=r.Children.toArray(e.children);if(null!=p){var C=f[p];null!=C&&C!==h&&u.some((function(e){return e.value===C}))&&N(C)}var g=function(e){N(e),null!=p&&O(p,e)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},397:function(e,t,n){"use strict";var r=n(3),a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);