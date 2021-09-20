"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[61927],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),o=n(79443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(86010),c="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var p=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,d=e.groupId,f=e.className,m=i(),y=m.tabGroupChoices,v=m.setTabGroupChoices,h=(0,r.useState)(o),b=h[0],g=h[1],k=r.Children.toArray(e.children),w=[];if(null!=d){var O=y[d];null!=O&&O!==b&&p.some((function(e){return e.value===O}))&&g(O)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;g(r),null!=d&&(v(d,r),setTimeout((function(){var e,n,r,o,i,a,c,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,i=e.right,a=window,c=a.innerHeight,l=a.innerWidth,n>=0&&i<=l&&o<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case l:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,a.Z)("tabs__item",c,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},95241:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=(n(55064),n(58215),{id:"test-typescript",title:"Advanced: TypeScript"}),c=void 0,s={unversionedId:"test-typescript",id:"version-1.14/test-typescript",isDocsHomePage:!1,title:"Advanced: TypeScript",description:"Manually compile tests with TypeScript",source:"@site/versioned_docs/version-1.14/test-typescript.mdx",sourceDirName:".",slug:"/test-typescript",permalink:"/docs/1.14/test-typescript",version:"1.14",frontMatter:{id:"test-typescript",title:"Advanced: TypeScript"},sidebar:"version-1.14/docs",previous:{title:"Advanced: fixtures",permalink:"/docs/1.14/test-fixtures"},next:{title:"Auto-waiting",permalink:"/docs/1.14/actionability"}},l=[{value:"Manually compile tests with TypeScript",id:"manually-compile-tests-with-typescript",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"manually-compile-tests-with-typescript"},"Manually compile tests with TypeScript"),(0,i.kt)("p",null,"Playwright Test supports TypeScript out the box. We automatically transform TypeScript code to javascript to run it."),(0,i.kt)("p",null,"However if you find that the TypeScript code is not being transpiled correctly, you can perform your own TypeScript compilation before sending the tests to Playwright."),(0,i.kt)("p",null,"First I add a ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file inside my tests directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "target": "ESNext",\n        "module": "commonjs",\n        "moduleResolution": "Node",\n        "sourceMap": true,\n        "outDir": "../tests-out",\n    }\n}\n')),(0,i.kt)("p",null,"In my ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", I have two scripts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "pretest": "tsc --incremental -p tests/tsconfig.json",\n    "test": "playwright test -c tests-out"\n  }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pretest")," script runs typescript on the tests. ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," will run the tests that have been generated to the ",(0,i.kt)("inlineCode",{parentName:"p"},"tests-out")," directory. The ",(0,i.kt)("inlineCode",{parentName:"p"},"-c")," argument configures the test runner to look for tests inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"tests-out")," directory."),(0,i.kt)("p",null,"Then ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test")," will build the tests and run them."))}p.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);