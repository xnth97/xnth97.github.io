"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([["7048"],{87739:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(85893);n(67294);var s=n(67026),l=n(74385),a=n(66171),r=n(64926);function o(e){let{className:t}=e;return(0,i.jsx)(r.Z,{type:"caution",title:(0,i.jsx)(l.cI,{}),className:(0,s.Z)(t,a.k.common.unlistedBanner),children:(0,i.jsx)(l.eU,{})})}function c(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.T$,{}),(0,i.jsx)(o,{...e})]})}},81046:function(e,t,n){n.d(t,{Z:()=>d});var i=n("85893");n("67294");var s=n("67026"),l=n("74385"),a=n("66171"),r=n("64926");function o(e){let{className:t}=e;return(0,i.jsx)(r.Z,{type:"caution",title:(0,i.jsx)(l.ht,{}),className:(0,s.Z)(t,a.k.common.draftBanner),children:(0,i.jsx)(l.xo,{})})}var c=n("87739");function d(e){let{metadata:t}=e,{unlisted:n,frontMatter:s}=t;return(0,i.jsxs)(i.Fragment,{children:[(n||s.unlisted)&&(0,i.jsx)(c.Z,{}),s.draft&&(0,i.jsx)(o,{})]})}},46487:function(e,t,n){n.r(t),n.d(t,{default:()=>et});var i=n("85893"),s=n("67294"),l=n("50357"),a=n("11934");let r=s.createContext(null);function o(e){let{children:t,content:n}=e,l=(0,s.useMemo)(()=>({metadata:n.metadata,frontMatter:n.frontMatter,assets:n.assets,contentTitle:n.contentTitle,toc:n.toc}),[n]);return(0,i.jsx)(r.Provider,{value:l,children:t})}function c(){let e=(0,s.useContext)(r);if(null===e)throw new a.i6("DocProvider");return e}function d(){let{metadata:e,frontMatter:t,assets:n}=c();return(0,i.jsx)(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n("67026"),m=n("37550"),h=n("7670"),x=n("68007");function b(e){let{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(x.Z,{...t,subLabel:(0,i.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(x.Z,{...n,subLabel:(0,i.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){let{metadata:e}=c();return(0,i.jsx)(b,{previous:e.previous,next:e.next})}var f=n("87262"),p=n("53367"),j=n("18854"),g=n("66171"),_=n("37137"),Z=n("89873");let N={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){let t=N[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function k(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(p.Z,{to:n,onClick:s,children:(0,i.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function L(e){let{className:t,versionMetadata:n}=e,{siteConfig:{title:s}}=(0,f.Z)(),{pluginId:l}=(0,j.gA)({failfast:!0}),{savePreferredVersionName:a}=(0,_.J)(l),{latestDocSuggestion:r,latestVersionSuggestion:o}=(0,j.Jo)(l),c=r??o.docs.find(e=>e.id===o.mainDocId);return(0,i.jsxs)("div",{className:(0,u.Z)(t,g.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(C,{siteTitle:s,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(k,{versionLabel:o.label,to:c.path,onClick:()=>a(o.name)})})]})}function T(e){let{className:t}=e,n=(0,Z.E)();return n.banner?(0,i.jsx)(L,{className:t,versionMetadata:n}):null}function y(e){let{className:t}=e,n=(0,Z.E)();return n.badge?(0,i.jsx)("span",{className:(0,u.Z)(t,g.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var w=n("56671"),B=n("6360");function E(){let{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:l}=e,a=l.length>0,r=!!(t||n||s);return a||r?(0,i.jsxs)("footer",{className:(0,u.Z)(g.k.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,i.jsx)("div",{className:(0,u.Z)("row margin-top--sm",g.k.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(w.Z,{tags:l})})}),r&&(0,i.jsx)(B.Z,{className:(0,u.Z)("margin-top--sm",g.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var I=n("26850"),M=n("86643");let H={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function V(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",H.tocCollapsibleButton,!t&&H.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let A={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function R(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:l}=e,{collapsed:a,toggleCollapsed:r}=(0,I.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.Z)(A.tocCollapsible,!a&&A.tocCollapsibleExpanded,n),children:[(0,i.jsx)(V,{collapsed:a,onClick:r}),(0,i.jsx)(I.z,{lazy:!0,className:A.tocCollapsibleContent,collapsed:a,children:(0,i.jsx)(M.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:l})})]})}function O(){let{toc:e,frontMatter:t}=c();return(0,i.jsx)(R,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(g.k.docs.docTocMobile,"tocMobile_ITEo")})}var F=n("79521");function P(){let{toc:e,frontMatter:t}=c();return(0,i.jsx)(F.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.k.docs.docTocDesktop})}var S=n("46055"),U=n("10666");function z(e){let{children:t}=e,n=function(){let{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.Z)(g.k.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(S.Z,{as:"h1",children:n})}),(0,i.jsx)(U.Z,{children:t})]})}var D=n("86563"),$=n("23868"),q=n("83187");function G(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}function W(){let e=(0,q.ZP)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(p.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(G,{className:"breadcrumbHomeIcon_YNFT"})})})}function J(e){let{children:t,href:n,isLast:s}=e,l="breadcrumbs__link";return s?(0,i.jsx)("span",{className:l,itemProp:"name",children:t}):n?(0,i.jsx)(p.Z,{className:l,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:l,children:t})}function Q(e){let{children:t,active:n,index:s,addMicrodata:l}=e;return(0,i.jsxs)("li",{...l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function X(){let e=(0,D.s1)(),t=(0,$.Ns)();return e?(0,i.jsx)("nav",{className:(0,u.Z)(g.k.docs.docBreadcrumbs,"breadcrumbsContainer_Z_bl"),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(W,{}),e.map((t,n)=>{let s=n===e.length-1,l="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(Q,{active:s,index:n,addMicrodata:!!l,children:(0,i.jsx)(J,{href:l,isLast:s,children:t.label})},n)})]})}):null}var Y=n("81046");let K={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ee(e){let{children:t}=e,n=function(){let{frontMatter:e,toc:t}=c(),n=(0,m.i)(),s=e.hide_table_of_contents,l=!s&&t.length>0;return{hidden:s,mobile:l?(0,i.jsx)(O,{}):void 0,desktop:l&&("desktop"===n||"ssr"===n)?(0,i.jsx)(P,{}):void 0}}(),{metadata:s}=c();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&K.docItemCol),children:[(0,i.jsx)(Y.Z,{metadata:s}),(0,i.jsx)(T,{}),(0,i.jsxs)("div",{className:K.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(X,{}),(0,i.jsx)(y,{}),n.mobile,(0,i.jsx)(z,{children:t}),(0,i.jsx)(E,{})]}),(0,i.jsx)(v,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function et(e){let t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(o,{content:e.content,children:(0,i.jsxs)(l.FG,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(ee,{children:(0,i.jsx)(n,{})})]})})}},68007:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(85893);n(67294);var s=n(67026),l=n(53367);function a(e){let{permalink:t,title:n,subLabel:a,isNext:r}=e;return(0,i.jsxs)(l.Z,{className:(0,s.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},79521:function(e,t,n){n.d(t,{Z:()=>a});var i=n("85893");n("67294");var s=n("67026"),l=n("86643");function a(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,s.Z)("tableOfContents_bqdL","thin-scrollbar",t),children:(0,i.jsx)(l.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},86643:function(e,t,n){n.d(t,{Z:()=>c});var i=n("85893"),s=n("67294"),l=n("66009");function a(e){let t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}var r=n("53367");let o=s.memo(function e(t){let{toc:n,className:s,linkClassName:l,isChild:a}=t;return n.length?(0,i.jsx)("ul",{className:a?void 0:s,children:n.map(t=>(0,i.jsxs)("li",{children:[(0,i.jsx)(r.Z,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,i.jsx)(e,{isChild:!0,toc:t.children,className:s,linkClassName:l})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...m}=e,h=(0,l.L)(),x=d??h.tableOfContents.minHeadingLevel,b=u??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:i,maxHeadingLevel:s}=t;return n.flatMap(t=>{let n=e({toc:t.children,minHeadingLevel:i,maxHeadingLevel:s});return t.level>=i&&t.level<=s?[{...t,children:n}]:n})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t});let i=[];return t.forEach(e=>{let{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):i.push(s)}),i}(t),minHeadingLevel:n,maxHeadingLevel:i}),[t,n,i])}({toc:t,minHeadingLevel:x,maxHeadingLevel:b});return!function(e){let t=(0,s.useRef)(void 0),n=function(){let e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,s.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,s.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:i,linkActiveClassName:s,minHeadingLevel:l,maxHeadingLevel:r}=e;function o(){let e=Array.from(document.getElementsByClassName(i)),o=function(e,t){let{anchorTopOffset:n}=t,i=e.find(e=>a(e).top>=n);if(i){var s;return(s=a(i)).top>0&&s.bottom<window.innerHeight/2?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,i=[];for(let e=t;e<=n;e+=1)i.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:l,maxHeadingLevel:r}),{anchorTopOffset:n.current}),c=e.find(e=>o&&o.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===c?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)})}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}},[e,n])}((0,s.useMemo)(()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:x,maxHeadingLevel:b}},[r,c,x,b])),(0,i.jsx)(o,{toc:v,className:n,linkClassName:r,...m})}},2684:function(e,t,n){n.d(t,{Z:()=>r});var i=n("85893");n("67294");var s=n("67026"),l=n("53367");let a={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function r(e){let{permalink:t,label:n,count:r,description:o}=e;return(0,i.jsxs)(l.Z,{href:t,title:o,className:(0,s.Z)(a.tag,r?a.tagWithCount:a.tagRegular),children:[n,r&&(0,i.jsx)("span",{children:r})]})}},56671:function(e,t,n){n.d(t,{Z:()=>r});var i=n("85893");n("67294");var s=n("67026"),l=n("7670"),a=n("2684");function r(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.Z)("tags_jXut","padding--none","margin-left--sm"),children:t.map(e=>(0,i.jsx)("li",{className:"tag_QGVx",children:(0,i.jsx)(a.Z,{...e})},e.permalink))})]})}},74385:function(e,t,n){n.d(t,{T$:function(){return o},cI:function(){return a},eU:function(){return r},ht:function(){return c},xo:function(){return d}});var i=n(85893);n(67294);var s=n(7670),l=n(11199);function a(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(l.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);