"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6315],{4137:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8448:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},r)}},7225:function(e,r,t){t.d(r,{Z:function(){return d}});var n=t(7462),o=t(7294),a=t(1048),i=t(2713);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3309),c=t(6010),s="tabItem_vU9c";function p(e){var r,t,n,a=e.lazy,i=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var r=e.props;return{value:r.value,label:r.label}})),h=(0,u.lx)(b,(function(e,r){return e.value===r.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(r=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(n=v[0])?void 0:n.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),w=g.tabGroupChoices,k=g.setTabGroupChoices,O=(0,o.useState)(y),E=O[0],C=O[1],N=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=w[f];null!=j&&j!==E&&b.some((function(e){return e.value===j}))&&C(j)}var x=function(e){var r=e.currentTarget,t=N.indexOf(r),n=b[t].value;n!==E&&(T(r),C(n),null!=f&&k(f,n))},D=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.currentTarget)+1;t=N[n]||N[0];break;case"ArrowLeft":var o=N.indexOf(e.currentTarget)-1;t=N[o]||N[N.length-1]}null==(r=t)||r.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},m)},b.map((function(e){var r=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:E===r?0:-1,"aria-selected":E===r,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":E===r}),key:r,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:x,onClick:x},null!=t?t:r)}))),a?(0,o.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,r){return(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==E})}))))}function d(e){var r=(0,a.Z)();return o.createElement(p,(0,n.Z)({key:String(r)},e))}},2713:function(e,r,t){var n=(0,t(7294).createContext)(void 0);r.Z=n},5779:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=t(7462),o=t(3366),a=(t(7294),t(4137)),i=(t(7225),t(8448),["components"]),l={id:"concise-reporter",title:"Concise Reporter",custom_edit_url:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-concise-reporter/README.md"},u=void 0,c={unversionedId:"concise-reporter",id:"concise-reporter",isDocsHomePage:!1,title:"Concise Reporter",description:"A WebdriverIO plugin to report in concise style.",source:"@site/docs/_concise-reporter.md",sourceDirName:".",slug:"/concise-reporter",permalink:"/docs/concise-reporter",editUrl:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-concise-reporter/README.md",tags:[],version:"current",frontMatter:{id:"concise-reporter",title:"Concise Reporter",custom_edit_url:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-concise-reporter/README.md"},sidebar:"docs",previous:{title:"Allure Reporter",permalink:"/docs/allure-reporter"},next:{title:"Dot Reporter",permalink:"/docs/dot-reporter"}},s=[{value:"Installation",id:"installation",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2}],p={toc:s};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A WebdriverIO plugin to report in concise style.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The easiest way is to keep ",(0,a.kt)("inlineCode",{parentName:"p"},"@wdio/concise-reporter")," as a devDependency in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", via:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @wdio/concise-reporter --save-dev\n")),(0,a.kt)("p",null,"Instructions on how to install ",(0,a.kt)("inlineCode",{parentName:"p"},"WebdriverIO")," can be found ",(0,a.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted"},"here"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The following code shows the default wdio test runner configuration. Just add ",(0,a.kt)("inlineCode",{parentName:"p"},"'concise'")," as a reporter\nto the array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nmodule.exports = {\n  // ...\n  reporters: ['dot', 'concise'],\n  // ...\n};\n")))}d.isMDXComponent=!0}}]);