"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9482],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(67294),n=a(79443);var i=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(86010),o="tabItem_1uMI",p="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,u=e.values,m=e.groupId,d=e.className,g=i(),k=g.tabGroupChoices,f=g.setTabGroupChoices,h=(0,r.useState)(n),N=h[0],y=h[1],w=r.Children.toArray(e.children),b=[];if(null!=m){var v=k[m];null!=v&&v!==N&&u.some((function(e){return e.value===v}))&&y(v)}var x=function(e){var t=e.currentTarget,a=b.indexOf(t),r=u[a].value;y(r),null!=m&&(f(m,r),setTimeout((function(){var e,a,r,n,i,l,o,s;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,a>=0&&i<=s&&n<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},P=function(e){var t,a;switch(e.keyCode){case c:var r=b.indexOf(e.target)+1;a=b[r]||b[0];break;case s:var n=b.indexOf(e.target)-1;a=b[n]||b[b.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},u.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:P,onFocus:x,onClick:x},a)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,a){var r=(0,a(67294).createContext)(void 0);t.Z=r},38578:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),l=(a(55064),a(58215),{id:"protractor",title:"Migrating from Protractor"}),o=void 0,p={unversionedId:"protractor",id:"protractor",isDocsHomePage:!1,title:"Migrating from Protractor",description:"- Migration Principes",source:"@site/docs/protractor.mdx",sourceDirName:".",slug:"/protractor",permalink:"/docs/next/protractor",version:"current",frontMatter:{id:"protractor",title:"Migrating from Protractor"},sidebar:"docs",previous:{title:"Videos",permalink:"/docs/next/videos"},next:{title:"Docker",permalink:"/docs/next/docker"}},s=[{value:"Migration Principes",id:"migration-principes",children:[]},{value:"Cheat Sheet",id:"cheat-sheet",children:[]},{value:"Example",id:"example",children:[]},{value:"Polyfilling <code>waitForAngular</code>",id:"polyfilling-waitforangular",children:[]},{value:"Playwright Test Super Powers",id:"playwright-test-super-powers",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],c={toc:s};function u(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#migration-principes"},"Migration Principes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cheat-sheet"},"Cheat Sheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#example"},"Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#polyfilling-waitforangular"},"Polyfilling ",(0,i.kt)("inlineCode",{parentName:"a"},"waitForAngular"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#playwright-test-super-powers"},"Playwright Test Super Powers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#further-reading"},"Further Reading"))),(0,i.kt)("h2",{id:"migration-principes"},"Migration Principes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'No need for "webdriver-manager" / Selenium.'),(0,i.kt)("li",{parentName:"ul"},"Protractor\u2019s ",(0,i.kt)("a",{parentName:"li",href:"https://www.protractortest.org/#/api?view=ElementFinder"},"ElementFinder")," \u21c4 ",(0,i.kt)("a",{parentName:"li",href:"./api/class-locator"},"Playwright Test Locator")),(0,i.kt)("li",{parentName:"ul"},"Protractor\u2019s ",(0,i.kt)("a",{parentName:"li",href:"https://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngular"},(0,i.kt)("inlineCode",{parentName:"a"},"waitForAngular"))," \u21c4 Playwright Test ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/actionability"},"auto-waiting")),(0,i.kt)("li",{parentName:"ul"},"Don\u2019t forget to await in Playwright Test")),(0,i.kt)("h2",{id:"cheat-sheet"},"Cheat Sheet"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Protractor"),(0,i.kt)("th",{parentName:"tr",align:null},"Playwright Test"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.buttonText('...'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'page.locator(\'button, input[type="button"], input[type="submit"] >> text="..."\')'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.css('...'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator('...')"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.cssContainingText('..1..', '..2..'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator('..1.. >> text=..2..')"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.id('...'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator('#...')"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.model('...'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator('[ng-model=\"...\"]')"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.repeater('...'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator('[ng-repeat=\"...\"]')"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.xpath('...'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator('xpath=...')"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element.all")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"browser.get(url)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await page.goto(url)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"browser.getCurrentUrl()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.url()"))))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Protractor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"describe('angularjs homepage todo list', function() {\n  it('should add a todo', function() {\n    browser.get('https://angularjs.org');\n\n    element(by.model('todoList.todoText')).sendKeys('first test');\n    element(by.css('[value=\"add\"]')).click();\n\n    var todoList = element.all(by.repeater('todo in todoList.todos'));\n    expect(todoList.count()).toEqual(3);\n    expect(todoList.get(2).getText()).toEqual('first test');\n\n    // You wrote your first test, cross it off the list\n    todoList.get(2).element(by.css('input')).click();\n    var completedAmount = element.all(by.css('.done-true'));\n    expect(completedAmount.count()).toEqual(2);\n  });\n});\n")),(0,i.kt)("p",null,"Line-by-line migration to Playwright Test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test'); // 1\n\ntest.describe('angularjs homepage todo list', function() {\n  test('should add a todo', async function({page}) { // 2, 3\n    await page.goto('https://angularjs.org'); // 4\n\n    await page.locator('[ng-model=\"todoList.todoText\"]').fill('first test');\n    await page.locator('[value=\"add\"]').click();\n\n    var todoList = page.locator('[ng-repeat=\"todo in todoList.todos\"]'); // 5\n    await expect(todoList).toHaveCount(3);\n    await expect(todoList.nth(2)).toHaveText('first test', {\n      useInnerText: true,\n    });\n\n    // You wrote your first test, cross it off the list\n    await todoList.nth(2).locator('input').click();\n    var completedAmount = page.locator('.done-true');\n    await expect(completedAmount).toHaveCount(2);\n  });\n}\n")),(0,i.kt)("p",null,"Migration highlights (see inline comments in the Playwright Test code snippet):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Each Playwright Test file has explicit import of the ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"expect")," functions"),(0,i.kt)("li",{parentName:"ol"},"Test function is marked with ",(0,i.kt)("inlineCode",{parentName:"li"},"async")),(0,i.kt)("li",{parentName:"ol"},"Playwright Test is given a ",(0,i.kt)("inlineCode",{parentName:"li"},"page")," as one of its parameters. This is one of the many ",(0,i.kt)("a",{parentName:"li",href:"./api/class-fixtures"},"useful fixtures")," in Playwright Test."),(0,i.kt)("li",{parentName:"ol"},"Almost all Playwright calls are prefixed with ",(0,i.kt)("inlineCode",{parentName:"li"},"await")),(0,i.kt)("li",{parentName:"ol"},"Locator creation with ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-locator"},"page.locator(selector)")," is one of the few methods that is sync.")),(0,i.kt)("h2",{id:"polyfilling-waitforangular"},"Polyfilling ",(0,i.kt)("inlineCode",{parentName:"h2"},"waitForAngular")),(0,i.kt)("p",null,"Playwright Test has built-in ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/actionability"},"auto-waiting")," that makes protractor's ",(0,i.kt)("a",{parentName:"p",href:"https://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngular"},(0,i.kt)("inlineCode",{parentName:"a"},"waitForAngular"))," unneeded in general case."),(0,i.kt)("p",null,"However, it might come handy in some edge cases. Here's how to polyfill ",(0,i.kt)("inlineCode",{parentName:"p"},"waitForAngular")," function in Playwright Test:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure you have protractor installed in your package.json")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Polyfill function"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"async function waitForAngular(page) {\n\u200bconst clientSideScripts = require('protractor/built/clientsidescripts.js');\n\n\u200basync function executeScriptAsync(page, script, ...scriptArgs) {\n  \u200bawait page.evaluate(`\n    \u200bnew Promise((resolve, reject) => {\n      \u200bconst callback = (errMessage) => {\n        \u200bif (errMessage)\n          \u200breject(new Error(errMessage));\n        \u200belse\n          \u200bresolve();\n      \u200b};\n      \u200b(function() {${script}}).apply(null, [...${JSON.stringify(scriptArgs)}, callback]);\n    \u200b})\n  \u200b`);\n\u200b}\n\n\u200bawait executeScriptAsync(page, clientSideScripts.waitForAngular, '');\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Polyfill usage"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const page = await context.newPage();\nawait page.goto('https://example.org');\nawait waitForAngular(page);\n")))),(0,i.kt)("h2",{id:"playwright-test-super-powers"},"Playwright Test Super Powers"),(0,i.kt)("p",null,"Once you're on Playwright Test, you get a lot!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Full zero-configuration TypeScript support"),(0,i.kt)("li",{parentName:"ul"},"Run tests across ",(0,i.kt)("strong",{parentName:"li"},"all web engines")," (Chrome, Firefox, Safari) on ",(0,i.kt)("strong",{parentName:"li"},"any popular operating system")," (Windows, MacOS, Ubuntu)"),(0,i.kt)("li",{parentName:"ul"},"Full support for multiple origins, ",(0,i.kt)("a",{parentName:"li",href:"./api/class-frame"},"(i)frames"),", ",(0,i.kt)("a",{parentName:"li",href:"./multi-pages"},"tabs and contexts")),(0,i.kt)("li",{parentName:"ul"},"Run tests in parallel across multiple browsers"),(0,i.kt)("li",{parentName:"ul"},"Built-in test artifact collection: ",(0,i.kt)("a",{parentName:"li",href:"./test-configuration#record-video"},"video recording"),", ",(0,i.kt)("a",{parentName:"li",href:"./test-configuration#automatic-screenshots"},"screenshots")," and ",(0,i.kt)("a",{parentName:"li",href:"./test-configuration#record-test-trace"},"playwright traces"))),(0,i.kt)("p",null,"Also you get all these \u2728 awesome tools \u2728 that come bundled with Playwright Test:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./inspector"},"Playwright Inspector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./auth#code-generation"},"Playwright Test Code generation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./trace-viewer"},"Playwright Tracing")," for post-mortem debugging")),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,"Learn more about Playwright Test runner:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./intro"},"Getting Started")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./test-fixtures"},"Fixtures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./api/class-locator"},"Locators")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./selectors"},"Selectors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./test-assertions"},"Assertions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./actionability"},"Auto-waiting"))))}u.isMDXComponent=!0},86010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);