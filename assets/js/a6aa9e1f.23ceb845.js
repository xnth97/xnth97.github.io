"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([["8514"],{61338:function(e,t,n){n.r(t),n.d(t,{default:()=>b});var i=n("85893");n("67294");var a=n("67026"),r=n("87262"),s=n("50357"),l=n("66171"),o=n("60187"),c=n("97914"),d=n("2901"),g=n("26802"),u=n("11199"),p=n("68141");function h(e){let t=(0,p.CS)(e);return(0,i.jsx)(u.Z,{children:(0,i.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function x(e){let{metadata:t}=e,{siteConfig:{title:n}}=(0,r.Z)(),{blogDescription:a,blogTitle:l,permalink:o}=t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.d,{title:"/"===o?n:l,description:a}),(0,i.jsx)(d.Z,{tag:"blog_posts_list"})]})}function f(e){let{metadata:t,items:n,sidebar:a}=e;return(0,i.jsxs)(o.Z,{sidebar:a,children:[(0,i.jsx)(g.Z,{items:n}),(0,i.jsx)(c.Z,{metadata:t})]})}function b(e){return(0,i.jsxs)(s.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogListPage),children:[(0,i.jsx)(x,{...e}),(0,i.jsx)(h,{...e}),(0,i.jsx)(f,{...e})]})}},97914:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(85893);n(67294);var a=n(7670),r=n(68007);function s(e){let{metadata:t}=e,{previousPage:n,nextPage:s}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(r.Z,{permalink:n,title:(0,i.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),s&&(0,i.jsx)(r.Z,{permalink:s,title:(0,i.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},26802:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(85893);n(67294);var a=n(68141),r=n(45796);function s(e){let{items:t,component:n=r.Z}=e;return(0,i.jsx)(i.Fragment,{children:t.map(e=>{let{content:t}=e;return(0,i.jsx)(a.n4,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)})})}},45796:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(85893),a=n(67294),r=n(77352),s=n(53944),l=n(68141),o=n(6735);function c(e){let{metadata:t,isBlogPostPage:c}=(0,l.nO)(),{frontMatter:d,slug:g,title:u}=t,{comments:p=!0}=d,h=(0,o.Z)(),x=async()=>{h&&(document.querySelectorAll(".markdown img:not(.glightbox-applied)").forEach(e=>{if(e.classList.contains("glightbox-applied"))return;let t=document.createElement("a");t.href=e.src,t.classList.add("glightbox"),t.setAttribute("data-gallery","markdown-images"),e.parentNode.insertBefore(t,e),t.appendChild(e),e.classList.add("glightbox-applied")}),(0,(await n.e("1830").then(n.t.bind(n,37727,23))).default)({selector:".glightbox"}))};return(0,a.useEffect)(()=>{setTimeout(()=>{x()},500)},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{...e}),p&&c&&(0,i.jsx)(s.DiscussionEmbed,{shortname:"xnth97",config:{url:g,identifier:g,title:u,language:"en_US"}})]})}}}]);