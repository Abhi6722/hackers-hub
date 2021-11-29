"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4086],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8448:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),o=n(7294),i=n(1048),a=n(2713);var l=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3309),s=n(6010),p="tabItem_vU9c";function u(e){var t,n,r,i=e.lazy,a=e.block,u=e.defaultValue,d=e.values,m=e.groupId,k=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,c.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===u?u:null!=(t=null!=u?u:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),b=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,o.useState)(y),C=N[0],O=N[1],D=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=b[m];null!=T&&T!==C&&v.some((function(e){return e.value===T}))&&O(T)}var x=function(e){var t=e.currentTarget,n=D.indexOf(t),r=v[n].value;r!==C&&(E(t),O(r),null!=m&&w(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=D.indexOf(e.currentTarget)+1;n=D[r]||D[0];break;case"ArrowLeft":var o=D.indexOf(e.currentTarget)-1;n=D[o]||D[D.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},k)},v.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":C===t}),key:t,ref:function(e){return D.push(e)},onKeyDown:j,onFocus:x,onClick:x},null!=n?n:t)}))),i?(0,o.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,i.Z)();return o.createElement(u,(0,r.Z)({key:String(t)},e))}},2713:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},9428:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=(n(7225),n(8448),["components"]),l={id:"wdio-docker-service",title:"Docker Service",custom_edit_url:"https://github.com/stsvilik/wdio-docker-service/edit/master//README.md"},c=void 0,s={unversionedId:"wdio-docker-service",id:"wdio-docker-service",isDocsHomePage:!1,title:"Docker Service",description:"wdio-docker-service is a 3rd party package, for more information please see GitHub | npm",source:"@site/docs/_wdio-docker-service.md",sourceDirName:".",slug:"/wdio-docker-service",permalink:"/docs/wdio-docker-service",editUrl:"https://github.com/stsvilik/wdio-docker-service/edit/master//README.md",tags:[],version:"current",frontMatter:{id:"wdio-docker-service",title:"Docker Service",custom_edit_url:"https://github.com/stsvilik/wdio-docker-service/edit/master//README.md"},sidebar:"docs",previous:{title:"Report Portal Service",permalink:"/docs/wdio-reportportal-service"},next:{title:"UI5 Service",permalink:"/docs/wdio-ui5-service"}},p=[{value:"Why use it?",id:"why-use-it",children:[],level:2},{value:"How it works",id:"how-it-works",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Options",id:"options",children:[{value:"dockerOptions",id:"dockeroptions",children:[],level:3},{value:"dockerOptions.image",id:"dockeroptionsimage",children:[],level:3},{value:"dockerOptions.healthCheck",id:"dockeroptionshealthcheck",children:[],level:3},{value:"dockerOptions.options",id:"dockeroptionsoptions",children:[],level:3},{value:"dockerOptions.args",id:"dockeroptionsargs",children:[],level:3},{value:"dockerOptions.command",id:"dockeroptionscommand",children:[],level:3},{value:"onDockerReady",id:"ondockerready",children:[],level:3},{value:"dockerLogs",id:"dockerlogs",children:[],level:3}],level:2},{value:"Testing Use Cases / Recipes",id:"testing-use-cases--recipes",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"wdio-docker-service is a 3rd party package, for more information please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stsvilik/wdio-docker-service"},"GitHub")," | ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wdio-docker-service"},"npm"))),(0,i.kt)("p",null,"This service is intended for use with ",(0,i.kt)("a",{parentName:"p",href:"http://webdriver.io/"},"WebdriverIO")," and it helps run functional/integration tests\nagainst/using containerized applications. It uses popular ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," service (installed separately) to run containers."),(0,i.kt)("h2",{id:"why-use-it"},"Why use it?"),(0,i.kt)("p",null,'Ideally your tests would run in some variety of CI/CD pipeline where often there are no "real" browsers and other resources\nyour application depends on. With advent of Docker practically all necessary application dependencies can be containerized.\nWith this service you may run your application container or a ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/docker-selenium"},"docker-selenium")," in your CI and in complete isolation\n(assuming CI can have Docker installed as a dependency). Same may apply to local development if your application needs to have a level\nof isolation from your main OS."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"Service will run an existing docker image and once its ready, will initiate WebdriverIO tests that should run against your containerized application."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wdio-docker-service --save-dev\n")),(0,i.kt)("p",null,"Instructions on how to install WebdriverIO can be found ",(0,i.kt)("a",{parentName:"p",href:"http://webdriver.io/guide/getstarted/install.html"},"here"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"By default, Google Chrome, Firefox and PhantomJS are available when installed on the host system.\nIn order to use the service you need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," to your service array:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// wdio.conf.js\nexports.config = {\n   // ...\n   services: ['docker'],\n   // ...\n};\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"dockeroptions"},"dockerOptions"),(0,i.kt)("p",null,"Various options required to run docker container"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"{ \n    options: {\n        rm: true\n    }\n}")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"dockerOptions: {\n    image: 'selenium/standalone-chrome',\n    healthCheck: 'http://localhost:4444',\n    options: {\n        p: ['4444:4444'],\n        shmSize: '2g'\n    }\n}\n")),(0,i.kt)("h3",{id:"dockeroptionsimage"},"dockerOptions.image"),(0,i.kt)("p",null,"Docker container name tag. Could be local or from Docker HUB."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("p",null,"Required: ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("h3",{id:"dockeroptionshealthcheck"},"dockerOptions.healthCheck"),(0,i.kt)("p",null,"Configuration which checks your containers' readiness before initiating tests. Normally this would be a localhost url.\nIf healthCheck is not configured, Webdriver will start running tests immediately after Docker container starts, which\nmaybe too early considering that it takes time for web service to start inside a Docker container."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String|Object")),(0,i.kt)("p",null,"Options for Object use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"url")," - url to an app running inside your container"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"maxRetries")," - number of retries until healthcheck fails. Default: 10"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"inspectInterval")," - interval between each retry in ms. Default: 500"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"startDelay")," - initial delay to begin healthcheck in ms. Default: 0")),(0,i.kt)("p",null,"Example 1 (String): ",(0,i.kt)("inlineCode",{parentName:"p"},"healthCheck: 'http://localhost:4444'")),(0,i.kt)("p",null,"Example 2 (Object):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"healthCheck: {\n    url: 'http://localhost:4444',\n    maxRetries: 3,\n    inspectInterval: 1000,\n    startDelay: 2000\n}\n")),(0,i.kt)("h3",{id:"dockeroptionsoptions"},"dockerOptions.options"),(0,i.kt)("p",null,"Map of options used by ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," command. For more details on ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command click ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/edge/engine/reference/commandline/run/"},"here"),"."),(0,i.kt)("p",null,"Any single-letter option will be converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"-[option]")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"d: true")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"-d"),"). "),(0,i.kt)("p",null,"Any option of two-character or more will\nbe converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"--[option]")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"rm: true")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"--rm"),"). "),(0,i.kt)("p",null,"For options that may be used more than once\n(i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"-e"),",",(0,i.kt)("inlineCode",{parentName:"p"},"-add-host"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--expose"),", etc.), please use array notation (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},'e: ["NODE_ENV=development", "FOO=bar"]'),")."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"options: {\n    e: ['NODE_ENV=development', 'PROXY=http://myproxy:80']\n    p: ['4444:4444', '5900:5900'],\n    shmSize: '2g'\n}\n")),(0,i.kt)("h3",{id:"dockeroptionsargs"},"dockerOptions.args"),(0,i.kt)("p",null,"Any arguments you may want to pass into container. Corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"[ARG...]")," in Docker run CLI."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("h3",{id:"dockeroptionscommand"},"dockerOptions.command"),(0,i.kt)("p",null,"Any command you may want to pass into container. Corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"[COMMAND]")," in Docker run CLI."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("h3",{id:"ondockerready"},"onDockerReady"),(0,i.kt)("p",null,"A callback method which is called when Docker application is ready. Readiness is determined by ability to ping ",(0,i.kt)("inlineCode",{parentName:"p"},"healthCheck")," url."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Function")),(0,i.kt)("h3",{id:"dockerlogs"},"dockerLogs"),(0,i.kt)("p",null,"Path to where logs from docker container should be stored"),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("h2",{id:"testing-use-cases--recipes"},"Testing Use Cases / Recipes"),(0,i.kt)("p",null,"Please visit our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stsvilik/wdio-docker-service/wiki"},"Wiki")," for more details."))}d.isMDXComponent=!0}}]);