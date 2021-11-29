"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8661],{4137:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,w=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(w,i(i({ref:n},c),{},{components:t})):r.createElement(w,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8448:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},7225:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(7462),a=t(7294),o=t(1048),i=t(2713);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(3309),u=t(6010),c="tabItem_vU9c";function d(e){var n,t,r,o=e.lazy,i=e.block,d=e.defaultValue,p=e.values,m=e.groupId,w=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:b.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,s.lx)(v,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===d?d:null!=(n=null!=d?d:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=b[0])?void 0:r.props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),k=g.tabGroupChoices,y=g.setTabGroupChoices,N=(0,a.useState)(f),T=N[0],W=N[1],O=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=k[m];null!=j&&j!==T&&v.some((function(e){return e.value===j}))&&W(j)}var E=function(e){var n=e.currentTarget,t=O.indexOf(n),r=v[t].value;r!==T&&(x(n),W(r),null!=m&&y(m,r))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;t=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},w)},v.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":T===n}),key:n,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:E,onClick:E},null!=t?t:n)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function p(e){var n=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},2713:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},3393:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return w}});var r=t(7462),a=t(3366),o=(t(7294),t(4137)),i=t(7225),l=t(8448),s=["components"],u={id:"newWindow",title:"newWindow",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/newWindow.ts"},c=void 0,d={unversionedId:"api/browser/newWindow",id:"api/browser/newWindow",isDocsHomePage:!1,title:"newWindow",description:"Open new window in browser. This command is the equivalent function to window.open(). This command does not",source:"@site/docs/api/browser/_newWindow.md",sourceDirName:"api/browser",slug:"/api/browser/newWindow",permalink:"/docs/api/browser/newWindow",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/newWindow.ts",tags:[],version:"current",frontMatter:{id:"newWindow",title:"newWindow",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/newWindow.ts"},sidebar:"api",previous:{title:"mockRestoreAll",permalink:"/docs/api/browser/mockRestoreAll"},next:{title:"overwriteCommand",permalink:"/docs/api/browser/overwriteCommand"}},p=[{value:"Usage",id:"usage",children:[],level:5},{value:"Parameters",id:"parameters",children:[],level:5},{value:"Example",id:"example",children:[],level:5}],m={toc:p};function w(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Open new window in browser. This command is the equivalent function to ",(0,o.kt)("inlineCode",{parentName:"p"},"window.open()"),". This command does not\nwork in mobile environments."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," When calling this command you automatically switch to the new window."),(0,o.kt)("h5",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"browser.newWindow(url, { windowName, windowFeatures })\n")),(0,o.kt)("h5",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Details"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,(0,o.kt)("var",null,"url"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"String")),(0,o.kt)("td",{parentName:"tr",align:null},"website URL to open")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,(0,o.kt)("var",null,"options")),(0,o.kt)("br",null),(0,o.kt)("span",{class:"label labelWarning"},"optional")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"NewWindowOptions")),(0,o.kt)("td",{parentName:"tr",align:null},"newWindow command options")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,(0,o.kt)("var",null,"options.windowName")),(0,o.kt)("br",null),(0,o.kt)("span",{class:"label labelWarning"},"optional")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"String")),(0,o.kt)("td",{parentName:"tr",align:null},"name of the new window")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,(0,o.kt)("var",null,"options.windowFeatures")),(0,o.kt)("br",null),(0,o.kt)("span",{class:"label labelWarning"},"optional")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"String")),(0,o.kt)("td",{parentName:"tr",align:null},"features of opened window (e.g. size, position, scrollbars, etc.)")))),(0,o.kt)("h5",{id:"example"},"Example"),(0,o.kt)(i.Z,{defaultValue:"async",className:"runtime",values:[{label:"Asynchronous Mode",value:"async"},{label:"Synchronous Mode",value:"sync"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="newWindowSync.js"',title:'"newWindowSync.js"'},"it('should open a new tab', async () => {\n    await browser.url('https://google.com')\n    console.log(await browser.getTitle()) // outputs: \"Google\"\n\n    await browser.newWindow('https://webdriver.io', {\n        windowName: 'WebdriverIO window',\n        windowFeature: 'width=420,height=230,resizable,scrollbars=yes,status=1',\n    })\n    console.log(await browser.getTitle()) // outputs: \"WebdriverIO \xb7 Next-gen browser and mobile automation test framework for Node.js\"\n\n    const handles = await browser.getWindowHandles()\n    await browser.switchToWindow(handles[1])\n    await browser.closeWindow()\n    await browser.switchToWindow(handles[0])\n    console.log(await browser.getTitle()) // outputs: \"Google\"\n});\n"))),(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="newWindowSync.js"',title:'"newWindowSync.js"'},"it('should open a new tab', () => {\n    browser.url('https://google.com')\n    console.log(browser.getTitle()) // outputs: \"Google\"\n\n    browser.newWindow('https://webdriver.io', {\n        windowName: 'WebdriverIO window',\n        windowFeature: 'width=420,height=230,resizable,scrollbars=yes,status=1',\n    })\n    console.log(browser.getTitle()) // outputs: \"WebdriverIO \xb7 Next-gen browser and mobile automation test framework for Node.js\"\n\n    const handles = browser.getWindowHandles()\n    browser.switchToWindow(handles[1])\n    browser.closeWindow()\n    browser.switchToWindow(handles[0])\n    console.log(browser.getTitle()) // outputs: \"Google\"\n});\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Synchronous Mode will depcrecated with Node.js v16. With an update to the\nunderlying Chromium version it became technically impossible to provide the\nsame synchronous behavior. We recommend to start transition to asynchronous\ncommand execution. For more information, see our ",(0,o.kt)("a",{href:"https://github.com/webdriverio/webdriverio/discussions/6702"},"RFC"),"."))))))}w.isMDXComponent=!0}}]);