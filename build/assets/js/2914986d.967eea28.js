"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4047],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8448:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(1048),l=n(2713);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3309),c=n(6010),s="tabItem_vU9c";function p(e){var t,n,r,o=e.lazy,l=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),g=w.tabGroupChoices,k=w.setTabGroupChoices,O=(0,a.useState)(b),T=O[0],E=O[1],D=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=g[m];null!=C&&C!==T&&h.some((function(e){return e.value===C}))&&E(C)}var N=function(e){var t=e.currentTarget,n=D.indexOf(t),r=h[n].value;r!==T&&(x(t),E(r),null!=m&&k(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=D.indexOf(e.currentTarget)+1;n=D[r]||D[0];break;case"ArrowLeft":var a=D.indexOf(e.currentTarget)-1;n=D[a]||D[D.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},f)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":T===t}),key:t,ref:function(e){return D.push(e)},onKeyDown:j,onFocus:N,onClick:N},null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},2713:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},9169:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),l=(n(7225),n(8448),["components"]),i={id:"wdio-cleanuptotal-service",title:"CleanupTotal Service",custom_edit_url:"https://github.com/tzurp/cleanup-total/edit/master//README.md"},u=void 0,c={unversionedId:"wdio-cleanuptotal-service",id:"wdio-cleanuptotal-service",isDocsHomePage:!1,title:"CleanupTotal Service",description:"wdio-cleanuptotal-service is a 3rd party package, for more information please see GitHub | npm",source:"@site/docs/_wdio-cleanuptotal-service.md",sourceDirName:".",slug:"/wdio-cleanuptotal-service",permalink:"/docs/wdio-cleanuptotal-service",editUrl:"https://github.com/tzurp/cleanup-total/edit/master//README.md",tags:[],version:"current",frontMatter:{id:"wdio-cleanuptotal-service",title:"CleanupTotal Service",custom_edit_url:"https://github.com/tzurp/cleanup-total/edit/master//README.md"},sidebar:"docs",previous:{title:"PerformanceTotal Service",permalink:"/docs/wdio-performancetotal-service"},next:{title:"AWS Device Farm Service",permalink:"/docs/wdio-aws-device-farm-service"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"wdio-cleanuptotal-service is a 3rd party package, for more information please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tzurp/cleanup-total"},"GitHub")," | ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wdio-cleanuptotal-service"},"npm"))),(0,o.kt)("p",null,"With this plugin for ",(0,o.kt)("a",{parentName:"p",href:"https://webdriver.io/"},"webdriver.io")," it is easy to properly cleanup after each test.\nCleanup after test might get complicated. For example: Lets say you are creating a bank account and then adding an investment plan and depositing there some money. If you try to delete the account you'd probably get a refusion because the account is not empty. ",(0,o.kt)("b",null,"cleanup-total")," helps you to do it systematically by 'marking' each entity you create for deletion right after its creation. When the test is finished, ",(0,o.kt)("b",null,"cleanup-total")," would delete the investment plan, the deposit and the account in the right order."),(0,o.kt)("h2",null,"Installation"),"The easiest way to install this module as a (dev-)dependency is by using the following command:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install wdio-cleanuptotal-service --save-dev\n")),(0,o.kt)("h2",null,"Usage"),(0,o.kt)("p",null,"Add wdio-cleanuptotal-service to your ",(0,o.kt)("inlineCode",{parentName:"p"},"wdio.conf.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"exports.config = {\n  // ...\n  services: ['cleanuptotal']\n  // ...\n};\n")),(0,o.kt)("p",null,"or with the service options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"exports.config = {\n  // ...\n  services: [\n      ['cleanuptotal',\n        {\n          // TODO: you can put here any logger function\n            customLoggerMethod: allureReporter.addStep\n        }]\n      ]\n  // ...\n};\n")),(0,o.kt)("h2",null,"Usage in test"),(0,o.kt)("p",null,"Just import ",(0,o.kt)("b",null,"cleanuptotal")," where you need it, whether it be your test file or any other class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import { cleanuptotal } from "wdio-cleanuptotal-service";\n\nit("should keep things tidy", () => {\n            // ...\n\n            const accountId = createAccount("John Blow");\n            \n            cleanupTotal.addCleanup(async () => { await deleteAccount(accountId) }); // TODO: mark for deletion * \n\n            addInvestmentPlan(accountId, "ModRisk");\n\n            cleanupTotal.addCleanup(async () => { await removeInvestmentPlan(accountId) }); // TODO: mark for deletion *\n            \n            deposit(accountId, 1000000);\n\n            cleanupTotal.addCleanup(async () => { await removeDeposit(accountId) }); // TODO: mark for deletion *\n\n            //...\n        });\n\n        // TODO: * Please note that the actual execution of the cleanup code would take palce AFTER test completion.\n')),(0,o.kt)("h2",null,"Typescript support"),(0,o.kt)("p",null,"Typescript is supported for this plugin."))}d.isMDXComponent=!0}}]);