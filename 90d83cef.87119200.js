(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{387:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(674)),o=(a(678),a(679),{id:"release-notes",title:"Release notes"}),l={unversionedId:"release-notes",id:"release-notes",isDocsHomePage:!1,title:"Release notes",description:"- Version 1.8",source:"@site/docs/release-notes.mdx",slug:"/release-notes",permalink:"/docs/next/release-notes",version:"current"},s=[{value:"Version 1.8",id:"version-18",children:[]},{value:"Version 1.7",id:"version-17",children:[]}],c={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#version-18"}),"Version 1.8")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#version-17"}),"Version 1.7"))),Object(i.b)("h2",{id:"version-18"},"Version 1.8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/selectors#selecting-elements-based-on-layout"}),"Selecting elements based on layout")," with ",Object(i.b)("inlineCode",{parentName:"p"},":left-of()"),", ",Object(i.b)("inlineCode",{parentName:"p"},":right-of()"),", ",Object(i.b)("inlineCode",{parentName:"p"},":above()")," and ",Object(i.b)("inlineCode",{parentName:"p"},":below()"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Playwright now includes ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/cli"}),"command line interface"),", former playwright-cli."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ npx playwright --help\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-page#pageselectoptionselector-values-options"}),"page.selectOption(selector, values[, options])")," now waits for the options to be present.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"New methods to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./actionability#assertions"}),"assert element state")," like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-page#pageiseditableselector-options"}),"page.isEditable(selector[, options])"),"."))),Object(i.b)("h4",{id:"new-apis"},"New APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleischecked"}),"elementHandle.isChecked()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleisdisabled"}),"elementHandle.isDisabled()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleiseditable"}),"elementHandle.isEditable()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleisenabled"}),"elementHandle.isEnabled()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleishidden"}),"elementHandle.isHidden()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleisvisible"}),"elementHandle.isVisible()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageischeckedselector-options"}),"page.isChecked(selector[, options])"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageisdisabledselector-options"}),"page.isDisabled(selector[, options])"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageiseditableselector-options"}),"page.isEditable(selector[, options])"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageisenabledselector-options"}),"page.isEnabled(selector[, options])"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageishiddenselector-options"}),"page.isHidden(selector[, options])"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageisvisibleselector-options"}),"page.isVisible(selector[, options])"),"."),Object(i.b)("li",{parentName:"ul"},"New option ",Object(i.b)("inlineCode",{parentName:"li"},"'editable'")," in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandlewaitforelementstatestate-options"}),"elementHandle.waitForElementState(state[, options])"),".")),Object(i.b)("h4",{id:"browser-versions"},"Browser Versions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Chromium 90.0.4392.0"),Object(i.b)("li",{parentName:"ul"},"Mozilla Firefox 85.0b5"),Object(i.b)("li",{parentName:"ul"},"WebKit 14.1")),Object(i.b)("h2",{id:"version-17"},"Version 1.7"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"New Java SDK"),": ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-java"}),"Playwright for Java")," is now on par with ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright"}),"JavaScript"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-python"}),"Python")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-sharp"}),"C# bindings"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Browser storage API"),": New convenience APIs to save and load browser storage state (cookies, local storage) to simplify automation scenarios with authentication."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"New CSS selectors"),": We heard your feedback for more flexible selectors and have revamped the selectors implementation. Playwright 1.7 introduces ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/selectors"}),"new CSS extensions")," and there's more coming soon."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"New website"),": The docs website at ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://playwright.dev/"}),"playwright.dev")," has been updated and is now built with ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://v2.docusaurus.io/"}),"Docusaurus"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Support for Apple Silicon"),": Playwright browser binaries for WebKit and Chromium are now built for Apple Silicon.")),Object(i.b)("h4",{id:"new-apis-1"},"New APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browsercontextstoragestateoptions"}),"browserContext.storageState([options])")," to get current state for later reuse."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"storageState")," option in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-browser#browsernewpageoptions"}),"browser.newPage([options])")," to setup browser context state.")),Object(i.b)("h4",{id:"browser-versions-1"},"Browser Versions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Chromium 89.0.4344.0"),Object(i.b)("li",{parentName:"ul"},"Mozilla Firefox 84.0b9"),Object(i.b)("li",{parentName:"ul"},"WebKit 14.1")))}b.isMDXComponent=!0},674:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,O=p["".concat(o,".").concat(u)]||p[u]||m[u]||i;return a?r.a.createElement(O,l(l({ref:t},c),{},{components:a})):r.a.createElement(O,l({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},675:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},676:function(e,t,a){"use strict";var n=a(0),r=a(677);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},677:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},678:function(e,t,a){"use strict";a(0),a(676),a(675),a(55)},679:function(e,t,a){"use strict";a(3),a(0)}}]);