"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[614],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var d=2;d<a;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3688:function(e,t,n){n.d(t,{S:function(){return w}});var i=n(7294);function o(e){return e&&e.origin?e.origin:"https://stackblitz.com"}function a(){return Math.random().toString(36).substring(7)}function l(e){var t="";return e?(e.forceEmbedLayout&&(t+="embed=1"),e.clickToLoad&&(t+=(t.length?"&":"")+"ctl=1"),e.openFile&&(t+=(t.length?"&":"")+"file="+e.openFile),!e.view||"preview"!==e.view&&"editor"!==e.view||(t+=(t.length?"&":"")+"view="+e.view),e.theme&&(t+=(t.length?"&":"")+"theme="+e.theme),e.hideExplorer&&(t+=(t.length?"&":"")+"hideExplorer=1"),e.hideNavigation&&(t+=(t.length?"&":"")+"hideNavigation=1;"),e.hideDevTools&&(t+=(t.length?"&":"")+"hidedevtools=1"),e.initialPath&&(t+=(t.length?"&":"")+"initialpath="+encodeURIComponent(e.initialPath)),"number"==typeof e.devToolsHeight&&e.devToolsHeight>0&&e.devToolsHeight<100&&(t+=(t.length?"&":"")+"devtoolsheight="+e.devToolsHeight),t.length?"?"+t:t):t}function r(e,t,n){if(null===e.parentNode)throw new Error("Invalid Element");t.id=e.id,c(t,n),e.parentNode.replaceChild(t,e)}function s(e){if("string"==typeof e){var t=document.getElementById(e);if(null!==t)return t}else if(e instanceof HTMLElement)return e;throw new Error("Invalid Element")}function d(e){return e&&!1===e.newWindow?"_self":"_blank"}function c(e,t){t&&(t.hasOwnProperty("height")&&(e.height=""+t.height),t.hasOwnProperty("width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}var p=function(e){var t=this;this.pending={},this.port=e,this.port.onmessage=function(e){if(e.data.payload.__reqid){var n=e.data.payload.__reqid,i=e.data.payload.__success;if(t.pending[n]){if(delete e.data.payload.__reqid,delete e.data.payload.__success,i){var o=0===Object.keys(e.data.payload).length&&e.data.payload.constructor===Object?null:e.data.payload;t.pending[n].resolve(o)}else{var a=e.data.payload.error?e.data.type+": "+e.data.payload.error:e.data.type;t.pending[n].reject(a)}delete t.pending[n]}}}};p.prototype.request=function(e){var t=this,n=a();return new Promise((function(i,o){t.pending[n]={resolve:i,reject:o},e.payload.__reqid=n,t.port.postMessage(e)}))};var u=function(e,t){var n=this;this.rdc=new p(e),this.preview={},Object.defineProperty(this.preview,"origin",{value:t.previewOrigin,writable:!1}),this.editor={openFile:function(e){return n.rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})}}};u.prototype.applyFsDiff=function(e){return this.rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},u.prototype.getFsSnapshot=function(){return this.rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},u.prototype.getDependencies=function(){return this.rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})};var m=[],h=function(e){var t=this;this.id=a(),this.element=e,this.pending=new Promise((function(e,n){var i=function(n){n.data.action&&"SDK_INIT_SUCCESS"===n.data.action&&n.data.id===t.id&&(t.vm=new u(n.ports[0],n.data.payload),e(t.vm),a())},o=function(){t.element.contentWindow&&t.element.contentWindow.postMessage({action:"SDK_INIT",id:t.id},"*")};function a(){window.clearInterval(r),window.removeEventListener("message",i)}window.addEventListener("message",i),o();var l=0,r=window.setInterval((function(){if(t.vm)a();else{if(l>=20)return a(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void m.forEach((function(e,n){e.id===t.id&&m.splice(n,1)}));l++,o()}}),500)})),m.push(this)},f=["typescript","create-react-app","angular-cli","javascript","polymer","vue"];function y(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function g(e){-1===f.indexOf(e.template)&&console.warn("Unsupported project template, must be one of: "+f.join(", "));var t=document.createElement("form");return t.method="POST",t.setAttribute("style","display:none;"),t.appendChild(y("project[title]",e.title)),t.appendChild(y("project[description]",e.description)),t.appendChild(y("project[template]",e.template)),e.tags&&e.tags.forEach((function(e){t.appendChild(y("project[tags][]",e))})),e.dependencies&&t.appendChild(y("project[dependencies]",JSON.stringify(e.dependencies))),e.settings&&t.appendChild(y("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(n){t.appendChild(y("project[files]["+n+"]",e.files[n]))})),t}function k(e,t){var n=g(e);return n.action=o(t)+"/run"+l(t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('sb').submit();<\/script></body></html>"}function v(e,t){var n=g(e);n.action=o(t)+"/run"+l(t),n.target=d(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}var E={connect:function(e){if(!e||!e.contentWindow)return Promise.reject("Provided element is not an iframe.");var t=function(e){var t=e instanceof Element?"element":"id";return m.find((function(n){return n[t]===e}))||null}(e);return t?t.pending:new h(e).pending},openGithubProject:function(e,t){window.open(o(t)+"/github/"+e+l(t),d(t))},openProject:function(e,t){v(e,t)},openProjectId:function(e,t){window.open(o(t)+"/edit/"+e+l(t),d(t))},embedGithubProject:function(e,t,n){var i=s(e),a=document.createElement("iframe");return a.src=o(n)+"/github/"+t+l(n),r(i,a,n),E.connect(a)},embedProject:function(e,t,n){var i=s(e),o=k(t,n),a=document.createElement("iframe");return r(i,a,n),a.contentDocument&&a.contentDocument.write(o),E.connect(a)},embedProjectId:function(e,t,n){var i=s(e),a=document.createElement("iframe");return a.src=o(n)+"/edit/"+t+l(n),r(i,a,n),E.connect(a)}},N=E,b=n(5350),S={core:{"@ngneat/elf":"latest"},entities:{"@ngneat/elf-entities":"latest"},requests:{"@ngneat/elf-requests":"latest"},pagination:{"@ngneat/elf-pagination":"latest"},devtools:{"@ngneat/elf-devtools":"latest"},persist:{"@ngneat/elf-persist-state":"latest"},history:{"@ngneat/elf-state-history":"latest"},rxjs:{rxjs:"latest"},immer:{immer:"latest"}};function w(e){var t=e.src,n=e.packages,o=void 0===n?[]:n,a=(0,i.useRef)(),l=["core","rxjs"].concat(o),r=(0,b.Z)().isDarkTheme;return(0,i.useEffect)((function(){var e=l.reduce((function(e,t){return Object.assign(e,S[t]),e}),{});N.embedProject(a.current,{description:"this is descrption",title:"Elf Core",files:{"index.html":"","index.ts":t},template:"typescript",dependencies:e,settings:{compile:{clearConsole:!0}}},{hideDevTools:!1,devToolsHeight:99,theme:r?"dark":"light",height:"500px"})}),[]),i.createElement("section",{style:{height:"500px"}},i.createElement("div",{ref:a}))}},2924:function(e,t,n){var i=n(7294).createContext(void 0);t.Z=i},5350:function(e,t,n){var i=n(7294),o=n(2924);t.Z=function(){var e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},5764:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=n(3117),o=n(102),a=(n(7294),n(3905)),l=n(3688),r=["components"],s={},d="Entities",c={unversionedId:"features/entities/entities",id:"features/entities/entities",isDocsHomePage:!1,title:"Entities",description:"This feature enables the store to act as an entities store. You can think of an entities state as a table in a database,",source:"@site/docs/features/entities/entities.mdx",sourceDirName:"features/entities",slug:"/features/entities/entities",permalink:"/elf/docs/features/entities/entities",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/entities/entities.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"The Repository Pattern",permalink:"/elf/docs/repository"},next:{title:"UI Entities",permalink:"/elf/docs/features/entities/ui-entities"}},p=[{value:"Queries",id:"queries",children:[{value:"<code>selectAll</code>",id:"selectall",children:[],level:3},{value:"<code>selectAllApply</code>",id:"selectallapply",children:[],level:3},{value:"<code>selectEntities</code>",id:"selectentities",children:[],level:3},{value:"<code>selectEntity</code>",id:"selectentity",children:[],level:3},{value:"<code>selectEntityByPredicate</code>",id:"selectentitybypredicate",children:[],level:3},{value:"<code>selectMany</code>",id:"selectmany",children:[],level:3},{value:"<code>selectManyByPredicate</code>",id:"selectmanybypredicate",children:[],level:3},{value:"<code>selectFirst</code>",id:"selectfirst",children:[],level:3},{value:"<code>selectLast</code>",id:"selectlast",children:[],level:3},{value:"<code>selectEntitiesCount</code>",id:"selectentitiescount",children:[],level:3},{value:"<code>selectEntitiesCountByPredicate</code>",id:"selectentitiescountbypredicate",children:[],level:3},{value:"<code>getEntities</code>",id:"getentities",children:[],level:3},{value:"<code>getEntity</code>",id:"getentity",children:[],level:3},{value:"<code>hasEntity</code>",id:"hasentity",children:[],level:3}],level:2},{value:"Mutations",id:"mutations",children:[{value:"<code>setEntities</code>",id:"setentities",children:[],level:3},{value:"<code>setEntitiesMap</code>",id:"setentitiesmap",children:[],level:3},{value:"<code>addEntities</code>",id:"addentities",children:[],level:3},{value:"<code>addEntitiesFifo</code>",id:"addentitiesfifo",children:[],level:3},{value:"<code>updateEntities</code>",id:"updateentities",children:[],level:3},{value:"<code>updateEntitiesByPredicate</code>",id:"updateentitiesbypredicate",children:[],level:3},{value:"<code>updateAllEntities</code>",id:"updateallentities",children:[],level:3},{value:"<code>upsertEntities</code>",id:"upsertentities",children:[],level:3},{value:"<code>upsertEntitiesById</code>",id:"upsertentitiesbyid",children:[],level:3},{value:"<code>updateEntitiesIds</code>",id:"updateentitiesids",children:[],level:3},{value:"<code>deleteEntities</code>",id:"deleteentities",children:[],level:3},{value:"<code>deleteEntitiesByPredicate</code>",id:"deleteentitiesbypredicate",children:[],level:3},{value:"<code>deleteAllEntities</code>",id:"deleteallentities",children:[],level:3}],level:2},{value:"idKey",id:"idkey",children:[],level:2},{value:"initialValue",id:"initialvalue",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"entities"},"Entities"),(0,a.kt)("p",null,"This feature enables the store to act as an entities store. You can think of an ",(0,a.kt)("inlineCode",{parentName:"p"},"entities")," state as a table in a database,\nwhere each table represents a flat collection of similar entities. Elf's entities state simplifies the process, giving you\neverything you need to manage it."),(0,a.kt)("p",null,"First, you need to install the package by using the CLI command ",(0,a.kt)("inlineCode",{parentName:"p"},"elf-cli install")," and selecting the entities package,\nor via npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ngneat/elf-entities\n")),(0,a.kt)("p",null,"To use this feature, provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"withEntities")," props factory function in the ",(0,a.kt)("inlineCode",{parentName:"p"},"createStore")," call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from '@ngneat/elf';\nimport { withEntities } from '@ngneat/elf-entities';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst todosStore = createStore({ name: 'todos' }, withEntities<Todo>());\n")),(0,a.kt)(l.S,{src:"import { createStore } from '@ngneat/elf';\nimport { selectAll, setEntities, withEntities } from '@ngneat/elf-entities';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst todosStore = createStore({ name: 'todos' }, withEntities<Todo>());\n\ntodosStore.pipe(selectAll()).subscribe((todos) => {\n  console.log(todos);\n});\n\ntodosStore.update(\n  setEntities([\n    { id: 1, label: 'one ' },\n    { id: 2, label: 'two' },\n  ])\n);\n",packages:["entities"],mdxType:"LiveDemo"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"This will allow you to use the following ready-made mutations and queries:"),(0,a.kt)("h2",{id:"queries"},"Queries"),(0,a.kt)("h3",{id:"selectall"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectAll")),(0,a.kt)("p",null,"Select the entire store's entity collection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectAll } from '@ngneat/elf-entities';\n\nconst todos$ = todosStore.pipe(selectAll());\n")),(0,a.kt)("h3",{id:"selectallapply"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectAllApply")),(0,a.kt)("p",null,"Select the entire store's entity collection, and apply a ",(0,a.kt)("inlineCode",{parentName:"p"},"filter/map"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectAllApply } from '@ngneat/elf-entities';\n\nconst titles$ = todosStore.pipe(\n  selectAllApply({\n    mapEntity: (e) => e.title,\n    filterEntity: (e) => e.completed,\n  })\n);\n")),(0,a.kt)("p",null,"In the above example, it'll first apply the ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," and then the ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," function."),(0,a.kt)("h3",{id:"selectentities"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectEntities")),(0,a.kt)("p",null,"Select the entire store's entity collection as object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectEntities } from '@ngneat/elf-entities';\n\nconst todos$ = todosStore.pipe(selectEntities());\n")),(0,a.kt)("h3",{id:"selectentity"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectEntity")),(0,a.kt)("p",null,"Select an entity or a slice of an entity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectEntity } from '@ngneat/elf-entities';\n\nconst todo$ = todosStore.pipe(selectEntity(id));\nconst title$ = todosStore.pipe(selectEntity(id, { pluck: 'title' }));\nconst title$ = todosStore.pipe(selectEntity(id, { pluck: (e) => e.title }));\n")),(0,a.kt)("h3",{id:"selectentitybypredicate"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectEntityByPredicate")),(0,a.kt)("p",null,"Select an entity from the store by predicate:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectEntityByPredicate } from '@ngneat/elf-entities';\n\nconst todo$ = todosStore.pipe(\n  selectEntityByPredicate(({ completed }) => !completed)\n);\nconst title$ = todosStore.pipe(\n  selectEntityByPredicate(({ completed }) => !completed, {\n    pluck: 'title',\n    idKey: '_id',\n  })\n);\nconst title$ = todosStore.pipe(\n  selectEntityByPredicate(({ completed }) => !completed, {\n    pluck: (e) => e.title,\n    idKey: '_id',\n  })\n);\n")),(0,a.kt)("h3",{id:"selectmany"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectMany")),(0,a.kt)("p",null,"Select multiple entities from the store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectMany } from '@ngneat/elf-entities';\n\nconst todos$ = todosStore.pipe(selectMany([id, id]));\nconst titles$ = todosStore.pipe(selectMany(id, { pluck: 'title' }));\nconst titles$ = todosStore.pipe(selectMany(id, { pluck: (e) => e.title }));\n")),(0,a.kt)("h3",{id:"selectmanybypredicate"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectManyByPredicate")),(0,a.kt)("p",null,"Select multiple entities from the store by predicate:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectManyByPredicate } from '@ngneat/elf-entities';\n\nconst todos$ = todosStore.pipe(\n  selectManyByPredicate((entity) => entity.completed === false)\n);\nconst titles$ = todosStore.pipe(\n  selectManyByPredicate((entity) => entity.completed === false, {\n    pluck: 'title',\n  })\n);\nconst titles$ = todosStore.pipe(\n  selectManyByPredicate((entity) => entity.completed === false, {\n    pluck: (e) => e.title,\n  })\n);\n")),(0,a.kt)("h3",{id:"selectfirst"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectFirst")),(0,a.kt)("p",null,"Select the first entity from the store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectFirst } from '@ngneat/elf-entities';\n\nconst first$ = todosStore.pipe(selectFirst());\n")),(0,a.kt)("h3",{id:"selectlast"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectLast")),(0,a.kt)("p",null,"Select the last entity from the store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectLast } from '@ngneat/elf-entities';\n\nconst last$ = todosStore.pipe(selectLast());\n")),(0,a.kt)("h3",{id:"selectentitiescount"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectEntitiesCount")),(0,a.kt)("p",null,"Select the store's entity collection size:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectEntitiesCount } from '@ngneat/elf-entities';\n\nconst count$ = todosStore.pipe(selectEntitiesCount());\n")),(0,a.kt)("h3",{id:"selectentitiescountbypredicate"},(0,a.kt)("inlineCode",{parentName:"h3"},"selectEntitiesCountByPredicate")),(0,a.kt)("p",null,"Select the store's entity collection size:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectEntitiesCountByPredicate } from '@ngneat/elf-entities';\n\nconst count$ = todosStore.pipe(\n  selectEntitiesCountByPredicate((entity) => entity.completed)\n);\n")),(0,a.kt)("h3",{id:"getentities"},(0,a.kt)("inlineCode",{parentName:"h3"},"getEntities")),(0,a.kt)("p",null,"Get the entity collection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { getEntities } from '@ngneat/elf-entities';\n\nconst todos = todosStore.query(getEntities());\n")),(0,a.kt)("h3",{id:"getentity"},(0,a.kt)("inlineCode",{parentName:"h3"},"getEntity")),(0,a.kt)("p",null,"Get an entity by id:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { getEntity } from '@ngneat/elf-entities';\n\nconst todo = todosStore.query(getEntity(id));\n")),(0,a.kt)("h3",{id:"hasentity"},(0,a.kt)("inlineCode",{parentName:"h3"},"hasEntity")),(0,a.kt)("p",null,"Returns whether an entity exists:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { hasEntity } from '@ngneat/elf-entities';\n\nif (todosStore.query(hasEntity(id))) {\n}\n")),(0,a.kt)("h2",{id:"mutations"},"Mutations"),(0,a.kt)("h3",{id:"setentities"},(0,a.kt)("inlineCode",{parentName:"h3"},"setEntities")),(0,a.kt)("p",null,"Replace current collection with the provided collection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { setEntities } from '@ngneat/elf-entities';\n\ntodosStore.update(setEntities([todo, todo]));\n")),(0,a.kt)("h3",{id:"setentitiesmap"},(0,a.kt)("inlineCode",{parentName:"h3"},"setEntitiesMap")),(0,a.kt)("p",null,"Replace current collection with the provided map:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { setEntitiesMap } from '@ngneat/elf-entities';\n\nconst todos = {\n  1: {\n    id: 1,\n    task: 'Buy milk',\n  },\n  2: {\n    id: 2,\n    task: 'Fix car',\n  },\n};\ntodosStore.update(setEntitiesMap(todos));\n")),(0,a.kt)("h3",{id:"addentities"},(0,a.kt)("inlineCode",{parentName:"h3"},"addEntities")),(0,a.kt)("p",null,"Add an entity or entities to the store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { addEntities } from '@ngneat/elf-entities';\n\ntodosStore.update(addEntities(todo));\n\ntodosStore.update(addEntities([todo, todo]));\n\ntodosStore.update(addEntities([todo, todo], { prepend: true }));\n")),(0,a.kt)("h3",{id:"addentitiesfifo"},(0,a.kt)("inlineCode",{parentName:"h3"},"addEntitiesFifo")),(0,a.kt)("p",null,"Add an entity or entities to the store using fifo strategy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { addEntitiesFifo } from '@ngneat/elf-entities';\n\ntodosStore.update(addEntitiesFifo([entity, entity]), { limit: 3 });\n")),(0,a.kt)("h3",{id:"updateentities"},(0,a.kt)("inlineCode",{parentName:"h3"},"updateEntities")),(0,a.kt)("p",null,"Update an entity or entities in the store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { updateEntities } from '@ngneat/elf-entities';\n\ntodosStore.update(updateEntities(id, { name }));\n\ntodosStore.update(updateEntities(id, (entity) => ({ ...entity, name })));\n\ntodosStore.update(updateEntities([id, id, id], { open: true }));\n")),(0,a.kt)("h3",{id:"updateentitiesbypredicate"},(0,a.kt)("inlineCode",{parentName:"h3"},"updateEntitiesByPredicate")),(0,a.kt)("p",null,"Update an entity or entities in the store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { updateEntitiesByPredicate } from '@ngneat/elf-entities';\n\ntodosStore.update(\n  updateEntitiesByPredicate(({ count }) => count === 0, { open: false })\n);\n\ntodosStore.update(\n  updateEntitiesByPredicate(({ count }) => count === 0),\n  (entity) => ({ ...entity, open: false })\n);\n")),(0,a.kt)("h3",{id:"updateallentities"},(0,a.kt)("inlineCode",{parentName:"h3"},"updateAllEntities")),(0,a.kt)("p",null,"Update all entities in the store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { updateAllEntities } from '@ngneat/elf-entities';\n\ntodosStore.update(updateAllEntities({ name: 'elf' }));\n\ntodosStore.update(\n  updateAllEntities((entity) => ({ ...entity, count: entity.count + 1 }))\n);\n")),(0,a.kt)("h3",{id:"upsertentities"},(0,a.kt)("inlineCode",{parentName:"h3"},"upsertEntities")),(0,a.kt)("p",null,"Add or update entities."),(0,a.kt)("p",null,"To identify entities in the store, every entity must have an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property. Any partial entities will be merged with the existing ones:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { upsertEntitiesBy } from '@ngneat/elf-entities';\n\ntodosStore.update(upsertEntities({ id: '1', happy: true }));\n\ntodosStore.update(\n  upsertEntities([\n    { id: '1', happy: true },\n    { id: '2', name: 'elf 2', happy: false },\n  ])\n);\n")),(0,a.kt)("h3",{id:"upsertentitiesbyid"},(0,a.kt)("inlineCode",{parentName:"h3"},"upsertEntitiesById")),(0,a.kt)("p",null,"Insert or update an entity. When the id isn't found, it creates a new entity; otherwise, it performs an update:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { upsertEntitiesById } from '@ngneat/elf-entities';\n\nconst creator = (id) => createTodo(id);\n\ntodosStore.update(\n  upsertEntitiesById(1, {\n    updater: { name: 'elf' },\n    creator,\n  })\n);\n\ntodosStore.update(\n  upsertEntitiesById([1, 2], {\n    updater: (entity) => ({ ...entity, count: entity.count + 1 }),\n    creator,\n  })\n);\n")),(0,a.kt)("p",null,"To perform a merge between a new entity and an ",(0,a.kt)("inlineCode",{parentName:"p"},"updater")," result, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeUpdaterWithCreator")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"todosStore.update(\n  upsertEntitiesById([1, 2], {\n    updater: (entity) => ({ ...entity, name }),\n    creator,\n    // highlight-next-line\n    mergeUpdaterWithCreator: true,\n  })\n);\n")),(0,a.kt)("p",null,"The above example will first create the entity using the ",(0,a.kt)("em",{parentName:"p"},"creator")," method, then pass the result to the ",(0,a.kt)("em",{parentName:"p"},"updater")," method, and merge both."),(0,a.kt)("h3",{id:"updateentitiesids"},(0,a.kt)("inlineCode",{parentName:"h3"},"updateEntitiesIds")),(0,a.kt)("p",null,"Update id of an entity or entities in the store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { updateEntitiesIds } from '@ngneat/elf-entities';\n\ntodosStore.update(updateEntitiesIds(oldId, newId));\n\ntodosStore.update(updateEntitiesIds([oldId1, oldId2], [newId1, newId2]));\n")),(0,a.kt)("p",null,'The most common use case for this is "optimistic updates":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function addTodo(todo: Todo) {\n  const tempId = generateRandomId();\n  todosStore.update(addEntities({ ...todo, id: tempId }));\n\n  addTodoToServer(todo).then(\n    (response) => {\n      todosStore.update(\n        updateEntitiesIds(tempId, response.id),\n        updateEntities(response.id, response)\n      );\n    },\n    (error) => {\n      todosStore.update(deleteEntities(tempId));\n      // handle error\n    }\n  );\n}\n")),(0,a.kt)("h3",{id:"deleteentities"},(0,a.kt)("inlineCode",{parentName:"h3"},"deleteEntities")),(0,a.kt)("p",null,"Delete an entity or entities from the store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { deleteEntities } from '@ngneat/elf-entities';\n\ntodosStore.update(deleteEntities(id));\ntodosStore.update(deleteEntities([id, id]));\n")),(0,a.kt)("h3",{id:"deleteentitiesbypredicate"},(0,a.kt)("inlineCode",{parentName:"h3"},"deleteEntitiesByPredicate")),(0,a.kt)("p",null,"Delete an entity or entities from the store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { deleteEntitiesByPredicate } from '@ngneat/elf-entities';\n\ntodosStore.update(deleteEntitiesByPredicate(({ completed }) => completed));\n")),(0,a.kt)("h3",{id:"deleteallentities"},(0,a.kt)("inlineCode",{parentName:"h3"},"deleteAllEntities")),(0,a.kt)("p",null,"Delete all entities from the store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { deleteAllEntities } from '@ngneat/elf-entities';\n\ntodosStore.update(deleteAllEntities());\n")),(0,a.kt)("h2",{id:"idkey"},"idKey"),(0,a.kt)("p",null,"By default, Elf takes the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," key from the entity ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," field. To change it, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"idKey")," option to\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"withEntities")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from '@ngneat/elf';\nimport { addEntities } from '@ngneat/elf-entities';\n\ninterface Todo {\n  _id: number;\n  label: string;\n}\n\nconst todosStore = createStore(\n  { name: 'todos' },\n  withEntities<Todo, '_id'>({ idKey: '_id' })\n);\n")),(0,a.kt)("h2",{id:"initialvalue"},"initialValue"),(0,a.kt)("p",null,"In case that you need to start the ",(0,a.kt)("inlineCode",{parentName:"p"},"entities")," state with a value, you can specify it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"initialValue")," configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from '@ngneat/elf';\n\nconst store = createStore(\n  { name },\n  withEntities<Widget>({ initialValue: [{ id: 1, name: '' }] })\n);\n")))}m.isMDXComponent=!0}}]);