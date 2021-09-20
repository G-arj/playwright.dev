"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6127],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(a),h=o,w=u["".concat(i,".").concat(h)]||u[h]||p[h]||l;return a?n.createElement(w,r(r({ref:t},c),{},{components:a})):n.createElement(w,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),o=a(9443);var l=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=a(6010),d="tabItem_1uMI",i="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,p=e.values,u=e.groupId,h=e.className,w=l(),f=w.tabGroupChoices,m=w.setTabGroupChoices,k=(0,n.useState)(o),y=k[0],g=k[1],v=n.Children.toArray(e.children),b=[];if(null!=u){var N=f[u];null!=N&&N!==y&&p.some((function(e){return e.value===N}))&&g(N)}var x=function(e){var t=e.currentTarget,a=b.indexOf(t),n=p[a].value;g(n),null!=u&&(m(u,n),setTimeout((function(){var e,a,n,o,l,r,d,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,l=e.right,r=window,d=r.innerHeight,s=r.innerWidth,a>=0&&l<=s&&o<=d&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case c:var n=b.indexOf(e.target)+1;a=b[n]||b[0];break;case s:var o=b.indexOf(e.target)-1;a=b[o]||b[b.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},h)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,r.Z)("tabs__item",d,{"tabs__item--active":y===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:O,onFocus:x,onClick:x},a)}))),t?(0,n.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},5942:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=a(2122),o=a(9756),l=(a(7294),a(3905)),r=a(5064),d=a(8215),i={id:"class-download",title:"Download"},s=void 0,c={unversionedId:"api/class-download",id:"version-1.14/api/class-download",isDocsHomePage:!1,title:"Download",description:'Download] objects are dispatched by page via the [page.on("download") event.',source:"@site/versioned_docs/version-1.14/api/class-download.mdx",sourceDirName:"api",slug:"/api/class-download",permalink:"/python/docs/1.14/api/class-download",version:"1.14",frontMatter:{id:"class-download",title:"Download"},sidebar:"version-1.14/api",previous:{title:"Dialog",permalink:"/python/docs/1.14/api/class-dialog"},next:{title:"ElementHandle",permalink:"/python/docs/1.14/api/class-elementhandle"}},p=[{value:"download.cancel()",id:"download-cancel",children:[]},{value:"download.delete()",id:"download-delete",children:[]},{value:"download.failure()",id:"download-failure",children:[]},{value:"download.page",id:"download-page",children:[]},{value:"download.path()",id:"download-path",children:[]},{value:"download.save_as(path)",id:"download-save-as",children:[]},{value:"download.suggested_filename",id:"download-suggested-filename",children:[]},{value:"download.url",id:"download-url",children:[]}],u={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.14/api/class-download",title:"Download"},"Download")," objects are dispatched by page via the ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.14/api/class-page#page-event-download"},'page.on("download")')," event."),(0,l.kt)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed."),(0,l.kt)("p",null,"Download event is emitted once the download starts. Download path becomes available once download completes:"),(0,l.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_download() as download_info:\n    page.click("a")\ndownload = download_info.value\n# wait for download to complete\npath = download.path()\n'))),(0,l.kt)(d.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_download() as download_info:\n    await page.click("a")\ndownload = await download_info.value\n# waits for download to complete\npath = await download.path()\n')))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Browser context ",(0,l.kt)("strong",{parentName:"p"},"must")," be created with the ",(0,l.kt)("inlineCode",{parentName:"p"},"accept_downloads")," set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",(0,l.kt)("inlineCode",{parentName:"p"},"accept_downloads")," is not set, download events are emitted, but the actual download is not performed and user has no access to the downloaded files."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-download#download-cancel"},"download.cancel()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-download#download-delete"},"download.delete()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-download#download-failure"},"download.failure()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-download#download-page"},"download.page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-download#download-path"},"download.path()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-download#download-save-as"},"download.save_as(path)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-download#download-suggested-filename"},"download.suggested_filename")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-download#download-url"},"download.url"))),(0,l.kt)("h2",{id:"download-cancel"},"download.cancel()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-cancel-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#download-cancel-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Cancels a download. Will not fail if the download is already finished or canceled. Upon successful cancellations, ",(0,l.kt)("inlineCode",{parentName:"p"},"download.failure()")," would resolve to ",(0,l.kt)("inlineCode",{parentName:"p"},"'canceled'"),"."),(0,l.kt)("h2",{id:"download-delete"},"download.delete()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-delete-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#download-delete-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Deletes the downloaded file. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-failure"},"download.failure()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-failure-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,l.kt)("a",{href:"#download-failure-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns download error if any. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-page"},"download.page"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-page-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page",title:"Page"},"Page"),">",(0,l.kt)("a",{href:"#download-page-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Get the page that the download belongs to."),(0,l.kt)("h2",{id:"download-path"},"download.path()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-path-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,l.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),">",(0,l.kt)("a",{href:"#download-path-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns path to the downloaded file in case of successful download. The method will wait for the download to finish if necessary. The method throws when connected remotely."),(0,l.kt)("p",null,"Note that the download's file name is a random GUID, use ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.14/api/class-download#download-suggested-filename"},"download.suggested_filename")," to get suggested file name."),(0,l.kt)("h2",{id:"download-save-as"},"download.save_as(path)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-option-path"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,l.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]",">"," Path where the download should be copied.",(0,l.kt)("a",{href:"#download-save-as-option-path",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,l.kt)("a",{href:"#download-save-as-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Copy the download to a user-specified path. It is safe to call this method while the download is still in progress. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-suggested-filename"},"download.suggested_filename"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-suggested-filename-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,l.kt)("a",{href:"#download-suggested-filename-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",(0,l.kt)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",(0,l.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/#downloading-resources"},"whatwg"),". Different browsers can use different logic for computing it."),(0,l.kt)("h2",{id:"download-url"},"download.url"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-url-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,l.kt)("a",{href:"#download-url-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns downloaded url."))}h.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:function(){return o}})}}]);