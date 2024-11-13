"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([["4226"],{2449:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(6674),u=n(7990);function a(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=(0,i.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1),m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(y,t);var e,n,o,a,m,h=(e=y,n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,r=d(e);return t=n?Reflect.construct(r,arguments,d(this).constructor):r.apply(this,arguments),function(t,e){return e&&("object"===c(e)||"function"==typeof e)?e:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function y(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,y),h.apply(this,arguments)}return o=y,a=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var t=window.document;t.getElementById(u.COMMENT_COUNT_SCRIPT_ID)?p():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),u.COMMENT_COUNT_SCRIPT_ID,t.body)}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)(u.COMMENT_COUNT_SCRIPT_ID,t.body),window.DISQUSWIDGETS=void 0,(0,i.removeResources)()}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config),n=t.children,o=t.className,i=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++){if(n=i[r],!(e.indexOf(n)>=0))Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}}return o}(t,["shortname","config","children","className"]);return r.default.createElement("span",s({},i,{className:"".concat(u.COMMENT_COUNT_CLASS).concat(o?" ".concat(o):""),"data-disqus-identifier":e.identifier,"data-disqus-url":e.url}),n)}}],l(o.prototype,a),y}(r.default.Component);e.CommentCount=m,m.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired,className:o.default.string,children:o.default.node}},5890:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var r=u(n(7294)),o=u(n(5697)),i=n(7990);function u(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(p,t);var e,n,o,i,u,d=(e=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,r=f(e);return t=n?Reflect.construct(r,arguments,f(this).constructor):r.apply(this,arguments),function(t,e){return e&&("object"===a(e)||"function"==typeof e)?e:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function p(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,p),d.apply(this,arguments)}return o=p,i=[{key:"getSrc",value:function(){var t=Number(this.props.commentId).toString(36),e=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(t,"?p=").concat(e,"&m=").concat(n)}},{key:"render",value:function(){var t=this.props,e=t.width,n=t.height,o=(t.commentId,t.showMedia,t.showParentComment,function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++){if(n=i[r],!(e.indexOf(n)>=0))Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}}return o}(t,["width","height","commentId","showMedia","showParentComment"]));return r.default.createElement("iframe",c({},o,{src:this.getSrc(),width:e,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}],s(o.prototype,i),p}(r.default.Component);e.CommentEmbed=d,d.defaultProps={showMedia:!0,showParentComment:!0,width:i.COMMENT_EMBED_WIDTH,height:i.COMMENT_EMBED_HEIGHT},d.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number,className:o.default.string}},4811:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(6674),u=n(7990);function a(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(h,t);var e,n,o,a,p,m=(e=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,r=d(e);return t=n?Reflect.construct(r,arguments,d(this).constructor):r.apply(this,arguments),function(t,e){return e&&("object"===c(e)||"function"==typeof e)?e:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function h(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,h),m.apply(this,arguments)}return o=h,a=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var t=window.document;window&&window.DISQUS&&t.getElementById(u.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),u.EMBED_SCRIPT_ID,t.body))}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)(u.EMBED_SCRIPT_ID,t.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=t.getElementById(u.THREAD_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,i.removeResources)()}},{key:"getDisqusConfig",value:function(t){return function(){var e=this;this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.category_id=t.categoryID,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,t.sso&&(this.sso=t.sso),t.language&&(this.language=t.language),u.CALLBACKS.forEach(function(n){e.callbacks[n]=[t[n]]})}}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config,function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++){if(n=i[r],!(e.indexOf(n)>=0))Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}}return o}(t,["shortname","config"]));return r.default.createElement("div",s({},e,{id:u.THREAD_ID}))}}],l(o.prototype,a),h}(r.default.Component);e.DiscussionEmbed=p,p.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func,sso:o.default.shape({name:o.default.string,button:o.default.string,icon:o.default.string,url:o.default.string,logout:o.default.string,profile_url:o.default.string,width:o.default.string,height:o.default.string})}).isRequired}},4573:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.Recommendations=void 0;var r=a(n(7294)),o=a(n(5697)),i=n(6674),u=n(7990);function a(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(h,t);var e,n,o,a,p,m=(e=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,r=d(e);return t=n?Reflect.construct(r,arguments,d(this).constructor):r.apply(this,arguments),function(t,e){return e&&("object"===c(e)||"function"==typeof e)?e:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function h(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,h),m.apply(this,arguments)}return o=h,a=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.language=t.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(u.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),u.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,i.removeScript)(u.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(t){window.DISQUS_RECOMMENDATIONS=void 0}var t=window.document.getElementById(u.RECOMMENDATIONS_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,i.removeResources)()}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config,function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++){if(n=i[r],!(e.indexOf(n)>=0))Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}}return o}(t,["shortname","config"]));return r.default.createElement("div",s({},e,{id:u.RECOMMENDATIONS_ID}))}}],l(o.prototype,a),h}(r.default.Component);e.Recommendations=p,p.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string})}},7990:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.CALLBACKS=e.RECOMMENDATIONS_SCRIPT_ID=e.RECOMMENDATIONS_ID=e.COMMENT_EMBED_HEIGHT=e.COMMENT_EMBED_WIDTH=e.COMMENT_COUNT_SCRIPT_ID=e.COMMENT_COUNT_CLASS=e.EMBED_SCRIPT_ID=e.THREAD_ID=void 0;e.THREAD_ID="disqus_thread";e.EMBED_SCRIPT_ID="dsq-embed-scr";e.COMMENT_COUNT_CLASS="disqus-comment-count";e.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr";e.COMMENT_EMBED_WIDTH=420;e.COMMENT_EMBED_HEIGHT=320;e.RECOMMENDATIONS_ID="disqus_recommendations";e.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr";e.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},3944:function(t,e,n){Object.defineProperty(e,"DiscussionEmbed",{enumerable:!0,get:function(){return i.DiscussionEmbed}});var r=n(2449),o=n(5890),i=n(4811),u=n(4573),a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed,Recommendations:u.Recommendations}},6674:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(t,e,n){var r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach(function(t){return t.remove()})},e.debounce=function(t,e,n){var r;return function(){var o=this,i=arguments,u=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,!n&&t.apply(o,i)},e),u&&t.apply(o,i)}},e.isReactElement=u,e.shallowComparison=function t(e,n){var r,a=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,u=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,o=t},f:function(){try{!u&&null!=r.return&&r.return()}finally{if(a)throw o}}}}(new Set(Object.keys(e),Object.keys(n)));try{for(a.s();!(r=a.n()).done;){var c=r.value;if("object"===o(e[c])){if(t(e[c],n[c]))return!0}else if(e[c]!==n[c]&&!u(e[c]))return!0}}catch(t){a.e(t)}finally{a.f()}return!1};var r=function(t){return t&&t.__esModule?t:{default:t}}(n(7294));function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function u(t){return!!r.default.isValidElement(t)||!!Array.isArray(t)&&t.some(function(t){return r.default.isValidElement(t)})}},1080:function(t,e,n){n.d(e,{Z:()=>T});var r=n("5893");n("7294");var o=n("7026"),i=n("4183");function u(t){let{children:e,className:n}=t;return(0,r.jsx)("article",{className:n,children:e})}var a=n("3012");let c="title_f1Hy";function s(t){let{className:e}=t,{metadata:n,isBlogPostPage:u}=(0,i.nO)(),{permalink:s,title:l}=n;return(0,r.jsx)(u?"h1":"h2",{className:(0,o.Z)(c,e),children:u?l:(0,r.jsx)(a.Z,{to:s,children:l})})}var l=n("6025"),f=n("3115"),d=n("1437");let p="container_mt6G";function m(t){let{readingTime:e}=t,n=function(){let{selectMessage:t}=(0,f.c)();return e=>{let n=Math.ceil(e);return t(n,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(e)})}function h(t){let{date:e,formattedDate:n}=t;return(0,r.jsx)("time",{dateTime:e,children:n})}function y(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function g(t){let e,{className:n}=t,{metadata:u}=(0,i.nO)(),{date:a,readingTime:c}=u,s=(0,d.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,o.Z)(p,"margin-vert--md",n),children:[(0,r.jsx)(h,{date:a,formattedDate:(e=a,s.format(new Date(e)))}),void 0!==c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{}),(0,r.jsx)(m,{readingTime:c})]})]})}var b=n("1389");let v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function O(t){let{className:e}=t,{metadata:{authors:n},assets:u}=(0,i.nO)();if(0===n.length)return null;let a=n.every(t=>{let{name:e}=t;return!e}),c=1===n.length;return(0,r.jsx)("div",{className:(0,o.Z)("margin-top--md margin-bottom--sm",a?v.imageOnlyAuthorRow:"row",e),children:n.map((t,e)=>(0,r.jsx)("div",{className:(0,o.Z)(!a&&(c?"col col--12":"col col--6"),a?v.imageOnlyAuthorCol:v.authorCol),children:(0,r.jsx)(b.Z,{author:{...t,imageURL:u.authorsImageUrls[e]??t.imageURL}})},e))})}function _(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(s,{}),(0,r.jsx)(g,{}),(0,r.jsx)(O,{})]})}var w=n("8365"),S=n("4295");function C(t){let{children:e,className:n}=t,{isBlogPostPage:u}=(0,i.nO)();return(0,r.jsx)("div",{id:u?w.blogPostContainerID:void 0,className:(0,o.Z)("markdown",n),children:(0,r.jsx)(S.Z,{children:e})})}var I=n("4681"),j=n("9230"),E=n("2501");function D(){return(0,r.jsx)("b",{children:(0,r.jsx)(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function M(t){let{blogPostTitle:e,...n}=t;return(0,r.jsx)(a.Z,{"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:e}),...n,children:(0,r.jsx)(D,{})})}function R(){let{metadata:t,isBlogPostPage:e}=(0,i.nO)(),{tags:n,title:u,editUrl:a,hasTruncateMarker:c,lastUpdatedBy:s,lastUpdatedAt:l}=t,f=!e&&c,d=n.length>0;if(!(d||f||a))return null;if(!e)return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[d&&(0,r.jsx)("div",{className:(0,o.Z)("col",{"col--9":f}),children:(0,r.jsx)(E.Z,{tags:n})}),f&&(0,r.jsx)("div",{className:(0,o.Z)("col text--right",{"col--3":d}),children:(0,r.jsx)(M,{blogPostTitle:u,to:t.permalink})})]});{let t=!!(a||l||s);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[d&&(0,r.jsx)("div",{className:(0,o.Z)("row","margin-top--sm",I.k.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(E.Z,{tags:n})})}),t&&(0,r.jsx)(j.Z,{className:(0,o.Z)("margin-top--sm",I.k.blog.blogFooterEditMetaRow),editUrl:a,lastUpdatedAt:l,lastUpdatedBy:s})]})}}function T(t){let{children:e,className:n}=t,a=function(){let{isBlogPostPage:t}=(0,i.nO)();return t?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(u,{className:(0,o.Z)(a,n),children:[(0,r.jsx)(_,{}),(0,r.jsx)(C,{children:e}),(0,r.jsx)(R,{})]})}},790:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(5893);n(7294);var o=n(7026),i=n(3012);function u(t){let{permalink:e,title:n,subLabel:u,isNext:a}=t;return(0,r.jsxs)(i.Z,{className:(0,o.Z)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:e,children:[u&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:u}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},8627:function(t,e,n){n.d(e,{Z:()=>a});var r=n("5893");n("7294");var o=n("7026"),i=n("3012");let u={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function a(t){let{permalink:e,label:n,count:a,description:c}=t;return(0,r.jsxs)(i.Z,{href:e,title:c,className:(0,o.Z)(u.tag,a?u.tagWithCount:u.tagRegular),children:[n,a&&(0,r.jsx)("span",{children:a})]})}},2501:function(t,e,n){n.d(e,{Z:()=>s});var r=n("5893");n("7294");var o=n("7026"),i=n("6025"),u=n("8627");let a="tags_jXut",c="tag_QGVx";function s(t){let{tags:e}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,o.Z)(a,"padding--none","margin-left--sm"),children:e.map(t=>(0,r.jsx)("li",{className:c,children:(0,r.jsx)(u.Z,{...t})},t.permalink))})]})}}}]);