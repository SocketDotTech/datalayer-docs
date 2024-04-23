"use strict";(self.webpackChunkdatalayer_docs=self.webpackChunkdatalayer_docs||[]).push([[7968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"check-connection",title:"Check Connection",sidebar_position:1},l=void 0,i={unversionedId:"dev-resources/APIReference/check-connection",id:"dev-resources/APIReference/check-connection",title:"Check Connection",description:"Checks if there's an active connection between PlugA on ChainA and PlugB on ChainB, and returns the type of switchboard used.",source:"@site/docs/dev-resources/APIReference/CheckConnection.md",sourceDirName:"dev-resources/APIReference",slug:"/dev-resources/APIReference/check-connection",permalink:"/dev-resources/APIReference/check-connection",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"check-connection",title:"Check Connection",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"API Reference",permalink:"/category/api-reference"},next:{title:"Estimate Fees",permalink:"/dev-resources/APIReference/estimate-fees"}},c={},p=[{value:"On-chain",id:"on-chain",level:2},{value:"Off-chain",id:"off-chain",level:2},{value:"Example Request",id:"example-request",level:4},{value:"Response Parameters",id:"response-parameters",level:4}],d={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Checks if there's an active connection between PlugA on ChainA and PlugB on ChainB, and returns the type of switchboard used."),(0,a.kt)("h2",{id:"on-chain"},"On-chain"),(0,a.kt)("p",null,"The connection can be verified on-chain by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"getPlugConfig()")," method on Socket. More on this ",(0,a.kt)("a",{parentName:"p",href:"/Build/testing-dl"},"here"),"."),(0,a.kt)("h2",{id:"off-chain"},"Off-chain"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"GET"))," ",(0,a.kt)("a",{parentName:"p",href:"https://prod.dlapi.socket.tech/check-connection"},"https://prod.dlapi.socket.tech/v1/check-connection")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Header"),":  x-api-key : 2Va1n3HzAS5XfXB8ELhX1aATJwzA1A72sNnJE1a0"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Query Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"slugA"),(0,a.kt)("td",{parentName:"tr",align:null},"Chain A slug")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"slugB"),(0,a.kt)("td",{parentName:"tr",align:null},"Chain B slug")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plugA"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of Plug on Chain A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plugB"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of Plug on Chain B")))),(0,a.kt)("h4",{id:"example-request"},"Example Request"),(0,a.kt)("p",null,"Verifying a connection between Plugs deployed on Goerli and Mumbai testnet"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://prod.dlapi.socket.tech/check-connection?slugA=2999&slugB=10&plugA=0x7b9ed5C43E87DAFB03211651d4FA41fEa1Eb9b3D&plugB=0x1812ff6bd726934f18159164e2927B34949B16a8"},"https://prod.dlapi.socket.tech/v1/check-connection?slugA=2999&slugB=10&plugA=0x7b9ed5C43E87DAFB03211651d4FA41fEa1Eb9b3D&plugB=0x1812ff6bd726934f18159164e2927B34949B16a8")),(0,a.kt)("p",null,"Note : Add the ",(0,a.kt)("em",{parentName:"p"},"x-api-key")," header mentioned above in the request for authentication. "),(0,a.kt)("h4",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"arePlugsConnected"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean value indicating if there's an active connection between Plugs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"aToBIntegrationType"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns type of switchboard used for connection from PlugA to PlugB (",(0,a.kt)("inlineCode",{parentName:"td"},"FAST"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"SLOW"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"NATIVE"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bToAIntegrationType"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns type of switchboard used for connection from PlugB to PlugA  (",(0,a.kt)("inlineCode",{parentName:"td"},"FAST"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"SLOW"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"NATIVE"),")")))))}s.isMDXComponent=!0}}]);