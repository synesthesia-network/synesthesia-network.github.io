(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(96)),a={id:"problems",title:"Known Problems"},s={unversionedId:"vision/problems",id:"vision/problems",isDocsHomePage:!1,title:"Known Problems",description:"This page describes the known problems with implementing the vision of Synesthesia.",source:"@site/docs/vision/problems.md",slug:"/vision/problems",permalink:"/docs/vision/problems",editUrl:"https://github.com/synesthesia-network/synesthesia-network.github.io/edit/master/docs/vision/problems.md",version:"current",sidebar:"docs",previous:{title:"Tokens",permalink:"/docs/vision/tokens"},next:{title:"Specifications",permalink:"/docs/specs"}},c=[{value:"Front Running",id:"front-running",children:[]},{value:"Other",id:"other",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page describes the known problems with implementing the vision of Synesthesia."),Object(i.b)("h2",{id:"front-running"},"Front Running"),Object(i.b)("p",null,"Synesthesia Network will look to allow users to grow their balance by performing positive actions on\nthe network. A common example of this is providing a proof that the chain should perform a certain\naction."),Object(i.b)("p",null,"Such a proof would be feeless to provide and reward the user if done correctly."),Object(i.b)("p",null,"However, a current problem with this is that any trivial and user friendly design would be\nsusceptible to front running, where another user can observe the positive action, and submit a\ntransaction themselves that takes priority and claims the reward."),Object(i.b)("p",null,'Even worse, the original user may be penalized for submitting "repeated" data.'),Object(i.b)("p",null,"A solution to this could involve a commit and reveal scheme to all proofs, but this is generally not\nsuper user friendly to design, especially given the delay between the two steps."),Object(i.b)("h2",{id:"other"},"Other"),Object(i.b)("p",null,"Have you found other problems to our vision?"),Object(i.b)("p",null,"If so, please let us know by opening an issue with that information."))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(f,s(s({ref:t},l),{},{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);