(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{92:function(a,e,t){"use strict";t.r(e);var n=t(0),i=t.n(n),l=t(99),c=t(102),r=t(112),m=t(98);var s=function(a){const{metadata:e}=a,{previousPage:t,nextPage:n}=e;return i.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},i.a.createElement("div",{className:"pagination-nav__item"},t&&i.a.createElement(m.a,{className:"pagination-nav__link",to:t},i.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),i.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&i.a.createElement(m.a,{className:"pagination-nav__link",to:n},i.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))},o=t(105);e.default=function(a){const{metadata:e,items:t,sidebar:n}=a,{siteConfig:{title:m}}=Object(l.a)(),{blogDescription:d,blogTitle:p,permalink:v}=e,g="/"===v?m:p;return i.a.createElement(c.a,{title:g,description:d},i.a.createElement("div",{className:"container margin-vert--lg"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--2"},i.a.createElement(o.a,{sidebar:n})),i.a.createElement("main",{className:"col col--8"},t.map((({content:a})=>i.a.createElement(r.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},i.a.createElement(a,null)))),i.a.createElement(s,{metadata:e})))))}}}]);