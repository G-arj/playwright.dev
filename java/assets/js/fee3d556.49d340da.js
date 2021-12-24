"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5385],{83474:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=a(87462),o=a(63366),l=(a(67294),a(3905)),r=(a(26396),a(58215),["components"]),i={id:"locators",title:"Locators"},s=void 0,c={unversionedId:"locators",id:"locators",isDocsHomePage:!1,title:"Locators",description:"Locator]s are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment. Locator can be created with the [Page.locator(selector[, options]) method.",source:"@site/docs/locators.mdx",sourceDirName:".",slug:"/locators",permalink:"/java/docs/next/locators",tags:[],version:"current",frontMatter:{id:"locators",title:"Locators"},sidebar:"docs",previous:{title:"Input",permalink:"/java/docs/next/input"},next:{title:"Multithreading",permalink:"/java/docs/next/multithreading"}},p=[{value:"Strictness",id:"strictness",children:[],level:2},{value:"Lists",id:"lists",children:[],level:2},{value:"Locator vs ElementHandle",id:"locator-vs-elementhandle",children:[],level:2}],d={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-locator",title:"Locator"},"Locator"),"s are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment. Locator can be created with the ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page#page-locator"},"Page.locator(selector[, options])")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Locator locator = page.locator("text=Submit");\nlocator.click();\n')),(0,l.kt)("p",null,"Every time locator is used for some action, up-to-date DOM element is located in the page. So in the snippet below, underlying DOM element is going to be located twice, prior to every action. This means that if the DOM changes in between the calls due to re-render, the new element corresponding to the locator will be used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Locator locator = page.locator("text=Submit");\nlocator.hover();\nlocator.click();\n')),(0,l.kt)("h2",{id:"strictness"},"Strictness"),(0,l.kt)("p",null,"Locators are strict. This means that all operations on locators that imply some target DOM element will throw an exception if more than one element matches given selector."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Throws if there are several buttons in DOM:\npage.locator("button").click();\n\n// Works because we explicitly tell locator to pick the first element:\npage.locator("button").first().click();\n\n// Works because count knows what to do with multiple matches:\npage.locator("button").count();\n')),(0,l.kt)("h2",{id:"lists"},"Lists"),(0,l.kt)("p",null,"You can also use locators to work with the element lists."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Locate elements, this locator points to a list.\nLocator rows = page.locator("table tr");\n\n// Pattern 1: use locator methods to calculate text on the whole list.\nList<String> texts = rows.allTextContents();\n\n// Pattern 2: do something with each element in the list.\nint count = rows.count()\nfor (int i = 0; i < count; ++i)\n  System.out.println(rows.nth(i).textContent());\n\n// Pattern 3: resolve locator to elements on page and map them to their text content.\n// Note: the code inside evaluateAll runs in page, you can call any DOM apis there.\nObject texts = rows.evaluateAll("list => list.map(element => element.textContent)");\n')),(0,l.kt)("h2",{id:"locator-vs-elementhandle"},"Locator vs ElementHandle"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"We only recommend using ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," in the rare cases when you need to perform extensive DOM traversal on a static page. For all user actions and assertions use locator instead."))),(0,l.kt)("p",null,"The difference between the ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-locator",title:"Locator"},"Locator")," and ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is that the latter points to a particular element, while Locator captures the logic of how to retrieve that element."),(0,l.kt)("p",null,"In the example below, handle points to a particular DOM element on page. If that element changes text or is used by React to render an entirely different component, handle is still pointing to that very stale DOM element. This can lead to unexpected behaviors."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ElementHandle handle = page.querySelector("text=Submit");\nhandle.hover();\nhandle.click();\n')),(0,l.kt)("p",null,"With the locator, every time the locator is used, up-to-date DOM element is located in the page using the selector. So in the snippet below, underlying DOM element is going to be located twice."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Locator locator = page.locator("text=Submit");\nlocator.hover();\nlocator.click();\n')))}h.isMDXComponent=!0}}]);