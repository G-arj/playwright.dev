"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[20830],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),o=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,s=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=o(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(m,i(i({ref:e},c),{},{components:r})):n.createElement(m,i({ref:e},c))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=r.length,i=new Array(s);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var o=2;o<s;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(t,e,r){var n=r(67294);e.Z=function(t){var e=t.children,r=t.hidden,a=t.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},e)}},55064:function(t,e,r){r.d(e,{Z:function(){return u}});var n=r(67294),a=r(79443);var s=function(){var t=(0,n.useContext)(a.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},i=r(86010),l="tabItem_1uMI",p="tabItemActive_2DSg";var o=37,c=39;var u=function(t){var e=t.lazy,r=t.block,a=t.defaultValue,u=t.values,d=t.groupId,f=t.className,m=s(),h=m.tabGroupChoices,k=m.setTabGroupChoices,v=(0,n.useState)(a),y=v[0],b=v[1],g=n.Children.toArray(t.children),S=[];if(null!=d){var N=h[d];null!=N&&N!==y&&u.some((function(t){return t.value===N}))&&b(N)}var x=function(t){var e=t.currentTarget,r=S.indexOf(e),n=u[r].value;b(n),null!=d&&(k(d,n),setTimeout((function(){var t,r,n,a,s,i,l,o;(t=e.getBoundingClientRect(),r=t.top,n=t.left,a=t.bottom,s=t.right,i=window,l=i.innerHeight,o=i.innerWidth,r>=0&&s<=o&&a<=l&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(p),setTimeout((function(){return e.classList.remove(p)}),2e3))}),150))},O=function(t){var e,r;switch(t.keyCode){case c:var n=S.indexOf(t.target)+1;r=S[n]||S[0];break;case o:var a=S.indexOf(t.target)-1;r=S[a]||S[S.length-1]}null==(e=r)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},f)},u.map((function(t){var e=t.value,r=t.label;return n.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===e}),key:e,ref:function(t){return S.push(t)},onKeyDown:O,onFocus:x,onClick:x},r)}))),e?(0,n.cloneElement)(g.filter((function(t){return t.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==y})}))))}},79443:function(t,e,r){var n=(0,r(67294).createContext)(void 0);e.Z=n},40861:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return u}});var n=r(22122),a=r(19756),s=(r(67294),r(3905)),i=(r(55064),r(58215),{id:"class-teststep",title:"TestStep"}),l=void 0,p={unversionedId:"api/class-teststep",id:"api/class-teststep",isDocsHomePage:!1,title:"TestStep",description:"Represents a step in the [TestRun].",source:"@site/docs/api/class-teststep.mdx",sourceDirName:"api",slug:"/api/class-teststep",permalink:"/docs/next/api/class-teststep",version:"current",frontMatter:{id:"class-teststep",title:"TestStep"},sidebar:"api",previous:{title:"TestResult",permalink:"/docs/next/api/class-testresult"},next:{title:"Android",permalink:"/docs/next/api/class-android"}},o=[{value:"testStep.titlePath()",id:"test-step-title-path",children:[]},{value:"testStep.category",id:"test-step-category",children:[]},{value:"testStep.duration",id:"test-step-duration",children:[]},{value:"testStep.error",id:"test-step-error",children:[]},{value:"testStep.parent",id:"test-step-parent",children:[]},{value:"testStep.startTime",id:"test-step-start-time",children:[]},{value:"testStep.steps",id:"test-step-steps",children:[]},{value:"testStep.title",id:"test-step-title",children:[]}],c={toc:o};function u(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Represents a step in the ","[TestRun]","."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-teststep#test-step-title-path"},"testStep.titlePath()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-teststep#test-step-category"},"testStep.category")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-teststep#test-step-duration"},"testStep.duration")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-teststep#test-step-error"},"testStep.error")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-teststep#test-step-parent"},"testStep.parent")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-teststep#test-step-start-time"},"testStep.startTime")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-teststep#test-step-steps"},"testStep.steps")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-teststep#test-step-title"},"testStep.title"))),(0,s.kt)("h2",{id:"test-step-title-path"},"testStep.titlePath()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"test-step-title-path-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,s.kt)("a",{href:"#test-step-title-path-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns a list of step titles from the root step down to this step."),(0,s.kt)("h2",{id:"test-step-category"},"testStep.category"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,s.kt)("p",null,"Step category to differentiate steps with different origin and verbosity. Built-in categories are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"hook")," for fixtures and hooks initialization and teardown"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expect")," for expect calls"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"pw:api")," for Playwright API calls."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"test.step")," for test.step API calls.")),(0,s.kt)("h2",{id:"test-step-duration"},"testStep.duration"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,s.kt)("p",null,"Running time in milliseconds."),(0,s.kt)("h2",{id:"test-step-error"},"testStep.error"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testerror",title:"TestError"},"TestError"),">")),(0,s.kt)("p",null,"An error thrown during the step execution, if any."),(0,s.kt)("h2",{id:"test-step-parent"},"testStep.parent"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-teststep",title:"TestStep"},"TestStep"),">")),(0,s.kt)("p",null,"Parent step, if any."),(0,s.kt)("h2",{id:"test-step-start-time"},"testStep.startTime"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<","[Date]",">")),(0,s.kt)("p",null,"Start time of this particular test step."),(0,s.kt)("h2",{id:"test-step-steps"},"testStep.steps"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-teststep",title:"TestStep"},"TestStep"),">",">")),(0,s.kt)("p",null,"List of steps inside this step."),(0,s.kt)("h2",{id:"test-step-title"},"testStep.title"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,s.kt)("p",null,"User-friendly test step title."))}u.isMDXComponent=!0},86010:function(t,e,r){function n(t){var e,r,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=n(t[e]))&&(a&&(a+=" "),a+=r);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,r=0,a="";r<arguments.length;)(t=arguments[r++])&&(e=n(t))&&(a&&(a+=" "),a+=e);return a}r.d(e,{Z:function(){return a}})}}]);