"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4698],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(67294),a=r(79443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,p=e.values,f=e.groupId,d=e.className,m=o(),v=m.tabGroupChoices,h=m.setTabGroupChoices,b=(0,n.useState)(a),g=b[0],y=b[1],k=n.Children.toArray(e.children),E=[];if(null!=f){var w=v[f];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&y(w)}var O=function(e){var t=e.currentTarget,r=E.indexOf(t),n=p[r].value;y(n),null!=f&&(h(f,n),setTimeout((function(){var e,r,n,a,o,s,i,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,c=s.innerWidth,r>=0&&o<=c&&a<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case u:var n=E.indexOf(e.target)+1;r=E[n]||E[0];break;case c:var a=E.indexOf(e.target)-1;r=E[a]||E[E.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},d)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:N,onFocus:O,onClick:O},r)}))),t?(0,n.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},33746:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),s=(r(55064),r(58215),{id:"class-testerror",title:"TestError"}),i=void 0,l={unversionedId:"api/class-testerror",id:"version-1.16/api/class-testerror",isDocsHomePage:!1,title:"TestError",description:"Information about an error thrown during test execution.",source:"@site/versioned_docs/version-1.16/api/class-testerror.mdx",sourceDirName:"api",slug:"/api/class-testerror",permalink:"/docs/api/class-testerror",version:"1.16",frontMatter:{id:"class-testerror",title:"TestError"},sidebar:"version-1.16/api",previous:{title:"TestConfig",permalink:"/docs/api/class-testconfig"},next:{title:"TestInfo",permalink:"/docs/api/class-testinfo"}},c=[{value:"testError.message",id:"test-error-message",children:[]},{value:"testError.stack",id:"test-error-stack",children:[]},{value:"testError.value",id:"test-error-value",children:[]}],u={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Information about an error thrown during test execution."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-testerror#test-error-message"},"testError.message")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-testerror#test-error-stack"},"testError.stack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-testerror#test-error-value"},"testError.value"))),(0,o.kt)("h2",{id:"test-error-message"},"testError.message"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,o.kt)("p",null,"Error message. Set when ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error"},"Error")," (or its subclass) has been thrown."),(0,o.kt)("h2",{id:"test-error-stack"},"testError.stack"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,o.kt)("p",null,"Error stack. Set when ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error"},"Error")," (or its subclass) has been thrown."),(0,o.kt)("h2",{id:"test-error-value"},"testError.value"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,o.kt)("p",null,"The value that was thrown. Set when anything except the ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error"},"Error")," (or its subclass) has been thrown."))}p.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);