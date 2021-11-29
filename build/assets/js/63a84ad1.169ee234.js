"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6032],{4137:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return p}});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},m=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),p=i,f=c["".concat(s,".").concat(p)]||c[p]||d[p]||a;return r?o.createElement(f,n(n({ref:t},m),{},{components:r})):o.createElement(f,n({ref:t},m))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var u=2;u<a;u++)n[u]=r[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8448:function(e,t,r){var o=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",hidden:r,className:i},t)}},7225:function(e,t,r){r.d(t,{Z:function(){return c}});var o=r(7462),i=r(7294),a=r(1048),n=r(2713);var l=function(){var e=(0,i.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(3309),u=r(6010),m="tabItem_vU9c";function d(e){var t,r,o,a=e.lazy,n=e.block,d=e.defaultValue,c=e.values,p=e.groupId,f=e.className,b=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=c?c:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,s.lx)(w,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==v&&!w.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),g=k.tabGroupChoices,N=k.setTabGroupChoices,y=(0,i.useState)(v),E=y[0],O=y[1],T=[],_=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var x=g[p];null!=x&&x!==E&&w.some((function(e){return e.value===x}))&&O(x)}var I=function(e){var t=e.currentTarget,r=T.indexOf(t),o=w[r].value;o!==E&&(_(t),O(o),null!=p&&N(p,o))},j=function(e){var t,r=null;switch(e.key){case"ArrowRight":var o=T.indexOf(e.currentTarget)+1;r=T[o]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;r=T[i]||T[T.length-1]}null==(t=r)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},f)},w.map((function(e){var t=e.value,r=e.label;return i.createElement("li",{role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,className:(0,u.Z)("tabs__item",m,{"tabs__item--active":E===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:I,onClick:I},null!=r?r:t)}))),a?(0,i.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function c(e){var t=(0,a.Z)();return i.createElement(d,(0,o.Z)({key:String(t)},e))}},2713:function(e,t,r){var o=(0,r(7294).createContext)(void 0);t.Z=o},3921:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var o=r(7462),i=r(3366),a=(r(7294),r(4137)),n=(r(7225),r(8448),["components"]),l={id:"wdio-wait-for",title:"Library of useful expected conditions Service",custom_edit_url:"https://github.com/webdriverio/wdio-wait-for/edit/master//README.md"},s=void 0,u={unversionedId:"wdio-wait-for",id:"wdio-wait-for",isDocsHomePage:!1,title:"Library of useful expected conditions Service",description:"wdio-wait-for is a 3rd party package, for more information please see GitHub | npm",source:"@site/docs/_wdio-wait-for.md",sourceDirName:".",slug:"/wdio-wait-for",permalink:"/docs/wdio-wait-for",editUrl:"https://github.com/webdriverio/wdio-wait-for/edit/master//README.md",tags:[],version:"current",frontMatter:{id:"wdio-wait-for",title:"Library of useful expected conditions Service",custom_edit_url:"https://github.com/webdriverio/wdio-wait-for/edit/master//README.md"},sidebar:"docs",previous:{title:"OCR service for Appium Native Apps Service",permalink:"/docs/wdio-ocr-service"},next:{title:"Auto-detect missing imports w/eslint Service",permalink:"/docs/wdio-eslinter-service"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"API",id:"api",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Import",id:"import",children:[{value:"JavaScript",id:"javascript",children:[],level:4},{value:"TypeScript",id:"typescript",children:[],level:4}],level:3},{value:"Wait for alert",id:"wait-for-alert",children:[],level:3},{value:"Wait for number of elements to be",id:"wait-for-number-of-elements-to-be",children:[],level:3}],level:2},{value:"License",id:"license",children:[],level:2},{value:"Author",id:"author",children:[],level:2}],d={toc:m};function c(e){var t=e.components,r=(0,i.Z)(e,n);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"wdio-wait-for is a 3rd party package, for more information please see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/wdio-wait-for"},"GitHub")," | ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wdio-wait-for"},"npm"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"wdio-wait-for is a Node.js library for ",(0,a.kt)("a",{parentName:"p",href:"http://webdriver.io/"},"WebdriverIO")," that supplies a set of common conditions that provides functionalities to wait for certain conditions till a defined task is complete.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To use wdio-wait-for in your project, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D wdio-wait-for\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," if you use the WDIO Testrunner this package will be already included."),(0,a.kt)("h2",{id:"api"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/./docs/modules.md"},"API")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/browser_alertispresent.md"},"alertIsPresent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/browser_numberofwindowstobe_.md"},"numberOfWindowsToBe\u200b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/browser_titlecontains.md"},"titleContains")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/browser_titleis.md"},"titleIs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/browser_urlcontains.md"},"urlContains")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/browser_urlis.md"},"urlIs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/element_elementtobeclickable.md"},"elementToBeClickable")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/element_elementtobeenabled.md"},"elementToBeEnabled")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/element_elementtobeselected.md"},"elementToBeSelected")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/element_invisibilityof.md"},"invisibilityOf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/element_numberofelementstobe.md"},"numberOfElementsToBe")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/element_numberofelementstobelessthan.md"},"numberOfElementsToBeLessThan")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/element_numberofelementstobemorethan_.md"},"numberOfElementsToBeMoreThan\u200b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/element_presenceof.md"},"presenceOf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/element_sizeofelementtobe.md"},"sizeOfElementToBe")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/element_stalenessof.md"},"stalenessOf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/element_texttobepresentinelement.md"},"textToBePresentInElement")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/element_texttobepresentinelementvalue.md"},"textToBePresentInElementValue")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/element_visibilityof.md"},"visibilityOf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/logical_and.md"},"and")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/logical_not.md"},"not")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/docs/modules/logical_or.md"},"or"))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"import"},"Import"),(0,a.kt)("h4",{id:"javascript"},"JavaScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// import all methods\nconst EC = require('wdio-wait-for');\n\nbrowser.waitUntil(EC.alertIsPresent(), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the alert to be present' })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// import specific method\nconst { alertIsPresent } = require('wdio-wait-for');\n\nbrowser.waitUntil(alertIsPresent(), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the alert to be present' })\n")),(0,a.kt)("h4",{id:"typescript"},"TypeScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// import all methods\nimport * as EC from 'wdio-wait-for';\n\nbrowser.waitUntil(EC.elementToBeEnabled('input'), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the element to be enabled' })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// import specific method\nimport { elementToBeEnabled } from 'wdio-wait-for';\n\nbrowser.waitUntil(elementToBeEnabled('input'), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the element to be enabled' })\n")),(0,a.kt)("h3",{id:"wait-for-alert"},"Wait for alert"),(0,a.kt)("p",null,"This code code snippet shows how to use conditions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"browser.waitUntil(alertIsPresent(), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the alert to be present' })\n")),(0,a.kt)("h3",{id:"wait-for-number-of-elements-to-be"},"Wait for number of elements to be"),(0,a.kt)("p",null,"This code code snippet shows how to use conditions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"browser.waitUntil(numberOfElementsToBe('.links', 2), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the 2 elements' })\n")),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"wdio-wait-for is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/wdio-wait-for/blob/master/./LICENSE"},"MIT licensed"),"."),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"Yevhen Laichenkov ",(0,a.kt)("a",{parentName:"p",href:"mailto:elaichenkov@gmail.com"},"elaichenkov@gmail.com")))}c.isMDXComponent=!0}}]);