"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1788],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=s.createContext({}),c=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(r),f=n,d=h["".concat(l,".").concat(f)]||h[f]||u[f]||a;return r?s.createElement(d,o(o({ref:t},p),{},{components:r})):s.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}h.displayName="MDXCreateElement"},58215:function(e,t,r){var s=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return s.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return u}});var s=r(67294),n=r(79443);var a=function(){var e=(0,s.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=r(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,u=e.values,h=e.groupId,f=e.className,d=a(),m=d.tabGroupChoices,k=d.setTabGroupChoices,b=(0,s.useState)(n),v=b[0],y=b[1],g=s.Children.toArray(e.children),N=[];if(null!=h){var R=m[h];null!=R&&R!==v&&u.some((function(e){return e.value===R}))&&y(R)}var S=function(e){var t=e.currentTarget,r=N.indexOf(t),s=u[r].value;y(s),null!=h&&(k(h,s),setTimeout((function(){var e,r,s,n,a,o,i,c;(e=t.getBoundingClientRect(),r=e.top,s=e.left,n=e.bottom,a=e.right,o=window,i=o.innerHeight,c=o.innerWidth,r>=0&&a<=c&&n<=i&&s>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case p:var s=N.indexOf(e.target)+1;r=N[s]||N[0];break;case c:var n=N.indexOf(e.target)-1;r=N[n]||N[N.length-1]}null==(t=r)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},u.map((function(e){var t=e.value,r=e.label;return s.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:S,onClick:S},r)}))),t?(0,s.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,r){var s=(0,r(67294).createContext)(void 0);t.Z=s},65795:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var s=r(22122),n=r(19756),a=(r(67294),r(3905)),o=(r(55064),r(58215),{id:"class-fetchresponse",title:"FetchResponse"}),i=void 0,l={unversionedId:"api/class-fetchresponse",id:"version-1.15/api/class-fetchresponse",isDocsHomePage:!1,title:"FetchResponse",description:"FetchResponse] class represents responses received from [fetchRequest.fetch(urlOrRequest[, options]).",source:"@site/versioned_docs/version-1.15/api/class-fetchresponse.mdx",sourceDirName:"api",slug:"/api/class-fetchresponse",permalink:"/docs/1.15/api/class-fetchresponse",version:"1.15",frontMatter:{id:"class-fetchresponse",title:"FetchResponse"},sidebar:"version-1.15/api",previous:{title:"FetchRequest",permalink:"/docs/1.15/api/class-fetchrequest"},next:{title:"FileChooser",permalink:"/docs/1.15/api/class-filechooser"}},c=[{value:"fetchResponse.body()",id:"fetch-response-body",children:[]},{value:"fetchResponse.dispose()",id:"fetch-response-dispose",children:[]},{value:"fetchResponse.headers()",id:"fetch-response-headers",children:[]},{value:"fetchResponse.headersArray()",id:"fetch-response-headers-array",children:[]},{value:"fetchResponse.json()",id:"fetch-response-json",children:[]},{value:"fetchResponse.ok()",id:"fetch-response-ok",children:[]},{value:"fetchResponse.status()",id:"fetch-response-status",children:[]},{value:"fetchResponse.statusText()",id:"fetch-response-status-text",children:[]},{value:"fetchResponse.text()",id:"fetch-response-text",children:[]},{value:"fetchResponse.url()",id:"fetch-response-url",children:[]}],p={toc:c};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-fetchresponse",title:"FetchResponse"},"FetchResponse")," class represents responses received from ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.15/api/class-fetchrequest#fetch-request-fetch"},"fetchRequest.fetch(urlOrRequest[, options])"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-fetchresponse#fetch-response-body"},"fetchResponse.body()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-fetchresponse#fetch-response-dispose"},"fetchResponse.dispose()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-fetchresponse#fetch-response-headers"},"fetchResponse.headers()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-fetchresponse#fetch-response-headers-array"},"fetchResponse.headersArray()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-fetchresponse#fetch-response-json"},"fetchResponse.json()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-fetchresponse#fetch-response-ok"},"fetchResponse.ok()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-fetchresponse#fetch-response-status"},"fetchResponse.status()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-fetchresponse#fetch-response-status-text"},"fetchResponse.statusText()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-fetchresponse#fetch-response-text"},"fetchResponse.text()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-fetchresponse#fetch-response-url"},"fetchResponse.url()"))),(0,a.kt)("h2",{id:"fetch-response-body"},"fetchResponse.body()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-body-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">",">",(0,a.kt)("a",{href:"#fetch-response-body-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the buffer with response body."),(0,a.kt)("h2",{id:"fetch-response-dispose"},"fetchResponse.dispose()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-dispose-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,a.kt)("a",{href:"#fetch-response-dispose-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Disposes the body of this response. If not called then the body will stay in memory until the context closes."),(0,a.kt)("h2",{id:"fetch-response-headers"},"fetchResponse.headers()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-headers-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,a.kt)("a",{href:"#fetch-response-headers-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"An object with all the response HTTP headers associated with this response."),(0,a.kt)("h2",{id:"fetch-response-headers-array"},"fetchResponse.headersArray()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-headers-array-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,a.kt)("a",{href:"#fetch-response-headers-array-return",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Name of the header."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Value of the header.")))),(0,a.kt)("p",null,"An array with all the request HTTP headers associated with this response. Header names are not lower-cased. Headers with multiple entries, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,a.kt)("h2",{id:"fetch-response-json"},"fetchResponse.json()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-json-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",">",(0,a.kt)("a",{href:"#fetch-response-json-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the JSON representation of response body."),(0,a.kt)("p",null,"This method will throw if the response body is not parsable via ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.parse"),"."),(0,a.kt)("h2",{id:"fetch-response-ok"},"fetchResponse.ok()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-ok-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">",(0,a.kt)("a",{href:"#fetch-response-ok-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,a.kt)("h2",{id:"fetch-response-status"},"fetchResponse.status()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-status-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">",(0,a.kt)("a",{href:"#fetch-response-status-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,a.kt)("h2",{id:"fetch-response-status-text"},"fetchResponse.statusText()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-status-text-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,a.kt)("a",{href:"#fetch-response-status-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,a.kt)("h2",{id:"fetch-response-text"},"fetchResponse.text()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-text-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,a.kt)("a",{href:"#fetch-response-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the text representation of response body."),(0,a.kt)("h2",{id:"fetch-response-url"},"fetchResponse.url()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"fetch-response-url-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,a.kt)("a",{href:"#fetch-response-url-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the URL of the response."))}u.isMDXComponent=!0},86010:function(e,t,r){function s(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=s(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=s(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);