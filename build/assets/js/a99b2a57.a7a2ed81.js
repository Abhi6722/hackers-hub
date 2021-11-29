"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1809],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),l=n(1048),o=n(2713);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3309),s=n(6010),c="tabItem_vU9c";function p(e){var t,n,a,l=e.lazy,o=e.block,p=e.defaultValue,d=e.values,m=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=b[0])?void 0:a.props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=i(),N=h.tabGroupChoices,y=h.setTabGroupChoices,w=(0,r.useState)(f),P=w[0],D=w[1],F=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=N[m];null!=x&&x!==P&&v.some((function(e){return e.value===x}))&&D(x)}var T=function(e){var t=e.currentTarget,n=F.indexOf(t),a=v[n].value;a!==P&&(O(t),D(a),null!=m&&y(m,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=F.indexOf(e.currentTarget)+1;n=F[a]||F[0];break;case"ArrowLeft":var r=F.indexOf(e.currentTarget)-1;n=F[r]||F[F.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},k)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":P===t}),key:t,ref:function(e){return F.push(e)},onKeyDown:j,onFocus:T,onClick:T},null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function d(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},1846:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(4137)),o=n(7225),i=n(8448),u=["components"],s={id:"savePDF",title:"savePDF",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/savePDF.ts"},c=void 0,p={unversionedId:"api/browser/savePDF",id:"api/browser/savePDF",isDocsHomePage:!1,title:"savePDF",description:"Prints the page of the current browsing context to a PDF file on your OS.",source:"@site/docs/api/browser/_savePDF.md",sourceDirName:"api/browser",slug:"/api/browser/savePDF",permalink:"/docs/api/browser/savePDF",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/savePDF.ts",tags:[],version:"current",frontMatter:{id:"savePDF",title:"savePDF",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/savePDF.ts"},sidebar:"api",previous:{title:"reloadSession",permalink:"/docs/api/browser/reloadSession"},next:{title:"saveRecordingScreen",permalink:"/docs/api/browser/saveRecordingScreen"}},d=[{value:"Usage",id:"usage",children:[],level:5},{value:"Parameters",id:"parameters",children:[],level:5},{value:"Example",id:"example",children:[],level:5}],m={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Prints the page of the current browsing context to a PDF file on your OS."),(0,l.kt)("h5",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"browser.savePDF(filepath, { orientation, scale, background, width, height, top, bottom, left, right, shrinkToFit, pageRanges })\n")),(0,l.kt)("h5",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Details"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"filepath"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"path to the generated pdf (",(0,l.kt)("inlineCode",{parentName:"td"},".pdf")," suffix is required) relative to the execution directory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"options")),(0,l.kt)("br",null),(0,l.kt)("span",{class:"label labelWarning"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"PDFPrintOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"Print PDF Options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"options.orientation")),(0,l.kt)("br",null),(0,l.kt)("span",{class:"label labelWarning"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Orientation of PDF page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"options.scale")),(0,l.kt)("br",null),(0,l.kt)("span",{class:"label labelWarning"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Scale of PDF page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"options.background")),(0,l.kt)("br",null),(0,l.kt)("span",{class:"label labelWarning"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Include background of PDF page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"options.width")),(0,l.kt)("br",null),(0,l.kt)("span",{class:"label labelWarning"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Width of PDF page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"options.height")),(0,l.kt)("br",null),(0,l.kt)("span",{class:"label labelWarning"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Height of PDF page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"options.top")),(0,l.kt)("br",null),(0,l.kt)("span",{class:"label labelWarning"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Top padding of PDF page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"options.bottom")),(0,l.kt)("br",null),(0,l.kt)("span",{class:"label labelWarning"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Bottom padding of PDF page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"options.left")),(0,l.kt)("br",null),(0,l.kt)("span",{class:"label labelWarning"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Left padding of PDF page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"options.right")),(0,l.kt)("br",null),(0,l.kt)("span",{class:"label labelWarning"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Right padding of PDF page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"options.shrinkToFit")),(0,l.kt)("br",null),(0,l.kt)("span",{class:"label labelWarning"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Shrink page to fit page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"options.pageRanges")),(0,l.kt)("br",null),(0,l.kt)("span",{class:"label labelWarning"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Array.","<","object",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Range of pages to include in PDF")))),(0,l.kt)("h5",{id:"example"},"Example"),(0,l.kt)(o.Z,{defaultValue:"async",className:"runtime",values:[{label:"Asynchronous Mode",value:"async"},{label:"Synchronous Mode",value:"sync"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="savePDF.js"',title:'"savePDF.js"'},"it('should save a PDF screenshot of the browser view', function () {\n    await browser.savePDF('./some/path/screenshot.pdf');\n});\n"))),(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="savePDF.js"',title:'"savePDF.js"'},"it('should save a PDF screenshot of the browser view', function () {\n    browser.savePDF('./some/path/screenshot.pdf');\n});\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Synchronous Mode will depcrecated with Node.js v16. With an update to the\nunderlying Chromium version it became technically impossible to provide the\nsame synchronous behavior. We recommend to start transition to asynchronous\ncommand execution. For more information, see our ",(0,l.kt)("a",{href:"https://github.com/webdriverio/webdriverio/discussions/6702"},"RFC"),"."))))))}k.isMDXComponent=!0}}]);