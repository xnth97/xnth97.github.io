"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3089],{4351:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(7294);var a=n(6905),i=n(2263),r=n(8264),o=n(5281),s=n(1460),l=n(9703),d=n(197),g=n(9985),c=n(5742),u=n(136),m=n(5893);function p(e){const t=(0,u.C)(e);return(0,m.jsx)(c.Z,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,i.Z)(),{blogDescription:a,blogTitle:o,permalink:s}=t,l="/"===s?n:o;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.d,{title:l,description:a}),(0,m.jsx)(d.Z,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:n,sidebar:a}=e;return(0,m.jsxs)(s.Z,{sidebar:a,children:[(0,m.jsx)(g.Z,{items:n}),(0,m.jsx)(l.Z,{metadata:t})]})}function f(e){return(0,m.jsxs)(r.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage),children:[(0,m.jsx)(h,{...e}),(0,m.jsx)(p,{...e}),(0,m.jsx)(b,{...e})]})}},9703:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(5999),i=n(2244),r=n(5893);function o(e){const{metadata:t}=e,{previousPage:n,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(i.Z,{permalink:n,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(i.Z,{permalink:o,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(9460),i=n(857),r=n(5893);function o(e){let{items:t,component:n=i.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.n,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},136:(e,t,n)=>{n.d(t,{C:()=>g,i:()=>c});var a=n(4996),i=n(2263),r=n(5102);var o=n(9460);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function d(e,t,n){return e?{image:m({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function g(e){const{siteConfig:t}=(0,i.Z)(),{withBaseUrl:n}=(0,a.C)(),{metadata:{blogDescription:r,blogTitle:o,permalink:g}}=e,c=`${t.url}${g}`;return{"@context":"https://schema.org","@type":"Blog","@id":c,mainEntityOfPage:c,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:r}=e,{date:o,title:g,description:c,lastUpdatedAt:u}=r,m=a.image??i.image,p=i.keywords??[],h=`${t.url}${r.permalink}`,b=u?s(u):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:g,name:g,description:c,datePublished:o,...b?{dateModified:b}:{},...l(r.authors),...d(m,n,g),...p?{keywords:p}:{}}}(e.content,t,n)))}}function c(){const e=function(){const e=(0,r.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,o.C)(),{siteConfig:g}=(0,i.Z)(),{withBaseUrl:c}=(0,a.C)(),{date:u,title:m,description:p,frontMatter:h,lastUpdatedAt:b}=n,f=t.image??h.image,x=h.keywords??[],j=b?s(b):void 0,Z=`${g.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":Z,mainEntityOfPage:Z,url:Z,headline:m,name:m,description:p,datePublished:u,...j?{dateModified:j}:{},...l(n.authors),...d(f,c,m),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${g.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function m(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},857:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var a=n(3665),i=n(3944),r=n(9460),o=n(5893);function s(e){const{metadata:t,isBlogPostPage:n}=(0,r.C)(),{frontMatter:s,slug:l,title:d}=t,{comments:g=!0}=s;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{...e}),g&&n&&(0,o.jsx)(i.qw,{shortname:"xnth97",config:{url:l,identifier:l,title:d,language:"en_US"}})]})}}}]);