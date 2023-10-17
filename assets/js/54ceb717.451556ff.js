"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1301],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,k=d["".concat(l,".").concat(m)]||d[m]||s[m]||p;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,r=new Array(p);r[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<p;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2913:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var a=t(7462),i=(t(7294),t(3905));const p={title:"Cocoa \u5e76\u53d1\u7f16\u7a0b\u7b14\u8bb0",date:new Date("2017-03-18T22:18:09.000Z"),tags:["coding","note","ios"]},r=void 0,o={permalink:"/2017/03/18/cocoa-concurrency",source:"@site/blog/2017-03-18-cocoa-concurrency/index.md",title:"Cocoa \u5e76\u53d1\u7f16\u7a0b\u7b14\u8bb0",description:"\u5e76\u53d1\u6240\u63cf\u8ff0\u7684\u6982\u5ff5\u5c31\u662f\u540c\u65f6\u8fd0\u884c\u591a\u4e2a\u4efb\u52a1\u3002\u8fd9\u4e9b\u4efb\u52a1\u53ef\u80fd\u662f\u4ee5\u5728\u5355\u6838 CPU \u4e0a\u4ee5\u5206\u65f6\u7684\u5f62\u5f0f\u540c\u65f6\u8fd0\u884c\uff0c\u4e5f\u53ef\u80fd\u662f\u5728\u591a\u6838 CPU \u4e0a\u4ee5\u771f\u6b63\u7684\u5e76\u884c\u65b9\u5f0f\u6765\u8fd0\u884c\u3002\u5728 iOS/macOS \u4e2d\uff0c\u4e3b\u8981\u63d0\u4f9b\u4e86 pthread, NSThread, NSOperationQueue, Grand Central Dispatch \u548c NSRunloop \u7b49\u65b9\u6cd5\u5b9e\u73b0\u5e76\u53d1\u7f16\u7a0b\u3002",date:"2017-03-18T22:18:09.000Z",formattedDate:"2017\u5e743\u670818\u65e5",tags:[{label:"coding",permalink:"/tags/coding"},{label:"note",permalink:"/tags/note"},{label:"ios",permalink:"/tags/ios"}],readingTime:13.63,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Cocoa \u5e76\u53d1\u7f16\u7a0b\u7b14\u8bb0",date:"2017-03-18T22:18:09.000Z",tags:["coding","note","ios"]},prevItem:{title:"Surface Pro \u4f53\u9a8c",permalink:"/2017/07/10/surface-pro"}},l={authorsImageUrls:[]},u=[{value:"Thread",id:"thread",level:2},{value:"Grand Central Dispatch",id:"grand-central-dispatch",level:2},{value:"Operation Queue",id:"operation-queue",level:2},{value:"RunLoop",id:"runloop",level:2}],c={toc:u},d="wrapper";function s(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5e76\u53d1\u6240\u63cf\u8ff0\u7684\u6982\u5ff5\u5c31\u662f\u540c\u65f6\u8fd0\u884c\u591a\u4e2a\u4efb\u52a1\u3002\u8fd9\u4e9b\u4efb\u52a1\u53ef\u80fd\u662f\u4ee5\u5728\u5355\u6838 CPU \u4e0a\u4ee5\u5206\u65f6\u7684\u5f62\u5f0f\u540c\u65f6\u8fd0\u884c\uff0c\u4e5f\u53ef\u80fd\u662f\u5728\u591a\u6838 CPU \u4e0a\u4ee5\u771f\u6b63\u7684\u5e76\u884c\u65b9\u5f0f\u6765\u8fd0\u884c\u3002\u5728 iOS/macOS \u4e2d\uff0c\u4e3b\u8981\u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"pthread"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"NSThread"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"NSOperationQueue"),", Grand Central Dispatch \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"NSRunloop")," \u7b49\u65b9\u6cd5\u5b9e\u73b0\u5e76\u53d1\u7f16\u7a0b\u3002"),(0,i.kt)("h2",{id:"thread"},"Thread"),(0,i.kt)("p",null,"\u7ebf\u7a0b\uff08thread\uff09\u662f\u7ec4\u6210\u8fdb\u7a0b\u7684\u5b50\u5355\u5143\uff0c\u64cd\u4f5c\u7cfb\u7edf\u7684\u8c03\u5ea6\u5668\u53ef\u4ee5\u5bf9\u7ebf\u7a0b\u8fdb\u884c\u5355\u72ec\u7684\u8c03\u5ea6\u3002\u5b9e\u9645\u4e0a\uff0c\u6240\u6709\u7684\u5e76\u53d1\u7f16\u7a0b API \u90fd\u662f\u6784\u5efa\u4e8e\u7ebf\u7a0b\u4e4b\u4e0a\u7684\uff0c\u5305\u62ec GCD \u548c\u64cd\u4f5c\u961f\u5217\u3002\u591a\u7ebf\u7a0b\u53ef\u4ee5\u5728\u5355\u6838 CPU \u4e0a\u540c\u65f6\uff08\u6216\u8005\u81f3\u5c11\u770b\u4f5c\u540c\u65f6\uff09\u8fd0\u884c\u3002\u64cd\u4f5c\u7cfb\u7edf\u5c06\u5c0f\u7684\u65f6\u95f4\u7247\u5206\u914d\u7ed9\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u8fd9\u6837\u5c31\u80fd\u591f\u8ba9\u7528\u6237\u611f\u89c9\u5230\u6709\u591a\u4e2a\u4efb\u52a1\u5728\u540c\u65f6\u8fdb\u884c\u3002\u5982\u679c CPU \u662f\u591a\u6838\u7684\uff0c\u90a3\u4e48\u7ebf\u7a0b\u5c31\u53ef\u4ee5\u771f\u6b63\u7684\u4ee5\u5e76\u53d1\u65b9\u5f0f\u88ab\u6267\u884c\uff0c\u4ece\u800c\u51cf\u5c11\u4e86\u5b8c\u6210\u67d0\u9879\u64cd\u4f5c\u6240\u9700\u8981\u7684\u603b\u65f6\u95f4\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pthread")," \u662f POSIX \u7684\u7ebf\u7a0b\u6807\u51c6\uff0c\u4f46\u5199\u8d77\u4ee3\u7801\u6bd4\u8f83\u590d\u6742\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"NSThread")," \u662f Objective-C \u5bf9 pthread \u7684\u5c01\u88c5\uff08\u5bf9\u5e94\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Thread")," \u4e3a Swift \u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"pthread")," \u7684\u5c01\u88c5\uff09\uff0c\u66f4\u4fbf\u4e8e\u5728 Cocoa \u73af\u5883\u4e0b\u5f00\u53d1\u3002\u5e38\u7528\u7684\u4f7f\u7528\u65b9\u6cd5\u662f\u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\u5bf9\u8c61\uff0c\u5e76\u8c03\u7528\u5b83\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," \u65b9\u6cd5\u3002\u53ef\u4ee5\u901a\u8fc7\u68c0\u6d4b\u7ebf\u7a0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"isFinished")," \u5c5e\u6027\u5224\u65ad\u7ebf\u7a0b\u662f\u5426\u7ed3\u675f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'let helloThread = Thread {\n    print("Hello World")\n}\nhelloThread.start()\n')),(0,i.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Thread")," \u7684\u5b50\u7c7b\uff0c\u5c06\u9700\u8981\u540e\u53f0\u6267\u884c\u7684\u4ee3\u7801\u5199\u5728\u91cd\u5199\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," \u65b9\u6cd5\u91cc\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"class TestThread: Thread {\n    override func main() {\n        // Code goes here\n    }\n}\n")),(0,i.kt)("p",null,"\u76f4\u63a5\u4f7f\u7528\u7ebf\u7a0b\u53ef\u80fd\u4f1a\u5f15\u53d1\u7684\u4e00\u4e2a\u95ee\u9898\u662f\uff0c\u5982\u679c\u4f60\u7684\u4ee3\u7801\u548c\u6240\u57fa\u4e8e\u7684\u6846\u67b6\u4ee3\u7801\u90fd\u521b\u5efa\u81ea\u5df1\u7684\u7ebf\u7a0b\u65f6\uff0c\u90a3\u4e48\u6d3b\u52a8\u7684\u7ebf\u7a0b\u6570\u91cf\u6709\u53ef\u80fd\u4ee5\u6307\u6570\u7ea7\u589e\u957f\u3002\u4f8b\u5982\uff0c\u5728 8 \u6838 CPU \u4e2d\uff0c\u4f60\u521b\u5efa\u4e86 8 \u4e2a\u7ebf\u7a0b\u6765\u5b8c\u5168\u53d1\u6325 CPU \u6027\u80fd\u3002\u7136\u800c\u5728\u8fd9\u4e9b\u7ebf\u7a0b\u4e2d\u4f60\u7684\u4ee3\u7801\u6240\u8c03\u7528\u7684\u6846\u67b6\u4ee3\u7801\u4e5f\u505a\u4e86\u540c\u6837\u4e8b\u60c5\uff08\u56e0\u4e3a\u5b83\u5e76\u4e0d\u77e5\u9053\u4f60\u5df2\u7ecf\u521b\u5efa\u7684\u8fd9\u4e9b\u7ebf\u7a0b\uff09\uff0c\u8fd9\u6837\u4f1a\u5f88\u5feb\u4ea7\u751f\u6210\u6210\u767e\u4e0a\u5343\u7684\u7ebf\u7a0b\u3002\u4ee3\u7801\u7684\u6bcf\u4e2a\u90e8\u5206\u81ea\u8eab\u90fd\u6ca1\u6709\u95ee\u9898\uff0c\u7136\u800c\u6700\u540e\u5374\u8fd8\u662f\u5bfc\u81f4\u4e86\u95ee\u9898\u3002\u4f7f\u7528\u7ebf\u7a0b\u5e76\u4e0d\u662f\u6ca1\u6709\u4ee3\u4ef7\u7684\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u4f1a\u6d88\u8017\u4e00\u4e9b\u5185\u5b58\u548c\u5185\u6838\u8d44\u6e90\u3002"),(0,i.kt)("h2",{id:"grand-central-dispatch"},"Grand Central Dispatch"),(0,i.kt)("p",null,"GCD \u662f\u81ea macOS 10.6 \u548c iOS 4 \u88ab\u5f15\u5165\u7684\u4e00\u4e2a\u66f4\u65b9\u4fbf\u5145\u5206\u4f7f\u7528\u591a\u6838 CPU \u6027\u80fd\u7684\u6280\u672f\uff0c\u73b0\u5728\u4e5f\u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"libdispatch")," \u88ab\u52a0\u5165 FreeBSD \u7b49\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u3002\u901a\u8fc7 GCD\uff0c\u5f00\u53d1\u8005\u4e0d\u7528\u518d\u76f4\u63a5\u8ddf\u7ebf\u7a0b\u6253\u4ea4\u9053\u4e86\uff0c\u53ea\u9700\u8981\u5411\u961f\u5217\u4e2d\u6dfb\u52a0\u4ee3\u7801\u5757\u5373\u53ef\uff0cGCD \u5728\u540e\u7aef\u7ba1\u7406\u7740\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u3002GCD \u4e0d\u4ec5\u51b3\u5b9a\u7740\u4f60\u7684\u4ee3\u7801\u5757\u5c06\u5728\u54ea\u4e2a\u7ebf\u7a0b\u88ab\u6267\u884c\uff0c\u5b83\u8fd8\u6839\u636e\u53ef\u7528\u7684\u7cfb\u7edf\u8d44\u6e90\u5bf9\u8fd9\u4e9b\u7ebf\u7a0b\u8fdb\u884c\u7ba1\u7406\u3002\u8fd9\u6837\u53ef\u4ee5\u5c06\u5f00\u53d1\u8005\u4ece\u7ebf\u7a0b\u7ba1\u7406\u7684\u5de5\u4f5c\u4e2d\u89e3\u653e\u51fa\u6765\uff0c\u901a\u8fc7\u96c6\u4e2d\u7684\u7ba1\u7406\u7ebf\u7a0b\uff0c\u6765\u7f13\u89e3\u5927\u91cf\u7ebf\u7a0b\u88ab\u521b\u5efa\u7684\u95ee\u9898\u3002GCD \u5e26\u6765\u7684\u53e6\u4e00\u4e2a\u91cd\u8981\u6539\u53d8\u662f\u4f5c\u4e3a\u5f00\u53d1\u8005\u53ef\u4ee5\u5c06\u5de5\u4f5c\u8003\u8651\u4e3a\u4e00\u4e2a\u961f\u5217\uff0c\u800c\u4e0d\u662f\u4e00\u5806\u7ebf\u7a0b\uff0c\u8fd9\u79cd\u5e76\u884c\u7684\u62bd\u8c61\u6a21\u578b\u66f4\u5bb9\u6613\u638c\u63e1\u548c\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"GCD \u7684\u961f\u5217\u5b9e\u9645\u4e0a\u5c31\u662f\u4e00\u7cfb\u5217\u4ee3\u7801\u5757\uff0c\u8fd9\u4e9b\u4ee3\u7801\u53ef\u4ee5\u5728\u4e3b\u7ebf\u7a0b\u6216\u540e\u53f0\u7ebf\u7a0b\u4e2d\u4ee5\u540c\u6b65\u6216\u8005\u5f02\u6b65\u7684\u65b9\u5f0f\u6267\u884c\u3002\u4e00\u65e6\u961f\u5217\u521b\u5efa\u5b8c\u6210\uff0c\u64cd\u4f5c\u7cfb\u7edf\u5c31\u63a5\u7ba1\u4e86\u8fd9\u4e2a\u961f\u5217\uff0c\u5e76\u5c06\u5176\u5206\u914d\u5230\u4efb\u610f\u4e00\u4e2a\u6838\u5fc3\u4e2d\u8fdb\u884c\u5904\u7406\u3002\u4e0d\u7ba1\u6709\u591a\u5c11\u4e2a\u961f\u5217\uff0c\u5b83\u4eec\u90fd\u80fd\u88ab\u7cfb\u7edf\u6b63\u786e\u5730\u7ba1\u7406\uff0c\u8fd9\u4e9b\u90fd\u4e0d\u9700\u8981\u5f00\u53d1\u8005\u8fdb\u884c\u624b\u52a8\u7ba1\u7406\u3002\u961f\u5217\u9075\u5faa FIFO \u6a21\u5f0f\uff08\u5148\u8fdb\u5148\u51fa\uff09\uff0c\u8fd9\u610f\u5473\u7740\u5148\u8fdb\u961f\u5217\u7684\u4efb\u52a1\u4f1a\u5148\u88ab\u6267\u884c\u3002"),(0,i.kt)("p",null,"Objective-C \u548c\u65e9\u671f Swift \u4e2d\u7684 GCD \u4ecd\u4fdd\u7559 C \u98ce\u683c API\uff0c\u5728 Swift 3 \u4e2d GCD \u88ab\u8fdb\u884c\u4e86\u8f83\u5927\u7684\u6539\u53d8\uff0c\u66f4\u52a0\u9762\u5411\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u521b\u5efa\u961f\u5217\uff0c\u53ea\u9700\u8981\u7b80\u5355\u7684\u6784\u9020\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"DispatchQueue")," \u5bf9\u8c61\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'let queue = DispatchQueue(label: "queueIdentifier")\nqueue.async {\n    // \u5f02\u6b65\u6267\u884c\u4ee3\u7801\n}\n')),(0,i.kt)("p",null,"\u8fd9\u91cc\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," \u4e3a\u5f02\u6b65\u6267\u884c\uff0c\u5373\u4efb\u52a1\u5c06\uff08\u51e0\u4e4e\uff09\u540c\u65f6\u6267\u884c\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"sync")," \u65b9\u6cd5\u5219\u4f1a\u5728\u4e32\u884c\u961f\u5217\u91cc\u5c06\u4efb\u52a1\u4e00\u4e2a\u4e2a\u4f9d\u6b21\u6267\u884c\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DispatchQueue")," \u7684\u6784\u9020\u51fd\u6570\u91cc\u5305\u542b\u4e86\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"qos")," \u53c2\u6570\uff0c\u5373\u961f\u5217\u4f18\u5148\u7ea7\uff08Quality of Service\uff09\uff0c\u662f\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"QoSClass")," \u7684\u679a\u4e3e\u7c7b\u578b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public enum QoSClass {\n    case background\n    case utility\n    case `default`\n    case userInitiated\n    case userInteractive\n    case unspecified\n}\n")),(0,i.kt)("p",null,"\u4f7f\u7528\u4e0d\u540c\u4f18\u5148\u7ea7\u7684\u82e5\u5e72\u4e2a\u961f\u5217\u4e4d\u542c\u8d77\u6765\u975e\u5e38\u76f4\u63a5\uff0c\u4e0d\u8fc7\u5f3a\u70c8\u5efa\u8bae\u5728\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u4f7f\u7528\u9ed8\u8ba4\u7684\u4f18\u5148\u7ea7\u961f\u5217\u3002\u5982\u679c\u6267\u884c\u7684\u4efb\u52a1\u9700\u8981\u8bbf\u95ee\u4e00\u4e9b\u5171\u4eab\u7684\u8d44\u6e90\uff0c\u90a3\u4e48\u5728\u4e0d\u540c\u4f18\u5148\u7ea7\u7684\u961f\u5217\u4e2d\u8c03\u5ea6\u8fd9\u4e9b\u4efb\u52a1\u5f88\u5feb\u5c31\u4f1a\u9020\u6210\u4e0d\u53ef\u9884\u671f\u7684\u884c\u4e3a\u3002\u8fd9\u6837\u53ef\u80fd\u4f1a\u5f15\u8d77\u7a0b\u5e8f\u7684\u5b8c\u5168\u6302\u8d77\uff0c\u56e0\u4e3a\u4f4e\u4f18\u5148\u7ea7\u7684\u4efb\u52a1\u963b\u585e\u4e86\u9ad8\u4f18\u5148\u7ea7\u4efb\u52a1\uff0c\u4f7f\u5b83\u4e0d\u80fd\u88ab\u6267\u884c\u3002"),(0,i.kt)("p",null,"GCD \u4e5f\u4e0d\u662f\u603b\u9700\u8981\u521b\u5efa\u961f\u5217\uff0c\u5c24\u5176\u662f\u5e76\u4e0d\u5efa\u8bae\u6539\u53d8\u4f18\u5148\u7ea7\u7684\u65f6\u5019\u3002\u5e38\u7528\u7684\u65b9\u6cd5\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"DispatchQueue.global()"),"\uff0c\u5373\u64cd\u4f5c\u7cfb\u7edf\u521b\u5efa\u7684\u5168\u5c40\u961f\u5217\uff0c\u4e00\u4e2a\u540e\u53f0\u961f\u5217\u7684\u96c6\u5408\u3002\u4ece\u522b\u7684\u961f\u5217\u8bbf\u95ee\u4e3b\u961f\u5217\u4e5f\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"DispatchQueue.main"),"\u3002\u4e3b\u961f\u5217\u7ecf\u5e38\u7528\u4e8e\u66f4\u65b0 UI \u7b49\u64cd\u4f5c\u3002\u4e00\u4e2a\u7b80\u5355\u7684\u4f7f\u7528\u5168\u5c40\u961f\u5217\u8fdb\u884c\u8ba1\u7b97\u5e76\u4ece\u4e3b\u961f\u5217\u66f4\u65b0 UI \u7684\u6817\u5b50\u5982\u4e0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// Global queue\nDispatchQueue.global().async {\n    // Time-comsuming operations\n    for i in 0 ..< 10 {\n        total += i\n    }\n    // Back to main queue\n    DispatchQueue.main.async {\n        // Update UI\n        print(total)\n    }\n}\n")),(0,i.kt)("p",null,"GCD \u8fd8\u6709\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u6982\u5ff5\u53eb ",(0,i.kt)("inlineCode",{parentName:"p"},"DispatchGroup"),"\u3002\u53ef\u4ee5\u628a\u51e0\u4e2a\u76f8\u5173\u7684\u4efb\u52a1\u961f\u5217\u653e\u5230\u4e00\u4e2a\u7ec4\u4e2d\uff0c\u5e38\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"DispatchGroup")," \u5b9e\u4f8b\u65b9\u6cd5\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"wait")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"notify"),"\u3002\u5f53\u4e00\u4e2a\u7ec4\u4e2d\u6240\u6709\u961f\u5217\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u540e\u4f1a\u89e6\u53d1\u961f\u5217\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"notify")," \u65b9\u6cd5\u3002\u4f8b\u5982\u4e00\u4e2a\u7a0b\u5e8f\u5177\u6709\u4e24\u4e2a\u5f02\u6b65\u961f\u5217\u5206\u522b\u4ece\u670d\u52a1\u5668\u4e0b\u8f7d\u6587\u672c\u548c\u56fe\u7247\uff0c\u6587\u672c\u548c\u56fe\u7247\u90fd\u4e0b\u8f7d\u5b8c\u6210\u540e\u4ece\u4e3b\u961f\u5217\u66f4\u65b0 UI\u3002\u6817\u5b50\u5982\u4e0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u521b\u5efa\u961f\u5217\nlet textQueue = DispatchQueue(label: "textQueue")\nlet imageQueue = DispatchQueue(label: "imageQueue")\n// \u521b\u5efa\u7ec4\nlet group = DispatchGroup()\n// \u6587\u672c\u961f\u5217\u5f02\u6b65\u4e0b\u8f7d\ntextQueue.async(group: group) {\n    downloadText()\n}\n// \u56fe\u7247\u961f\u5217\u5f02\u6b65\u4e0b\u8f7d\nimageQueue.async(group: group) {\n    downloadImage()\n}\n// \u4e0b\u8f7d\u5b8c\u6210\u540e\u89e6\u53d1 DispatchGroup \u7684 notify\uff0c\u4ece\u4e3b\u961f\u5217\u66f4\u65b0 UI\ngroup.notify(queue: .main) {\n    updateUI()\n}\n')),(0,i.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u8fd9\u91cc ",(0,i.kt)("inlineCode",{parentName:"p"},"notify")," \u65b9\u6cd5\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"queue")," \u53c2\u6570\u662f\u7ec4\u91cc\u961f\u5217\u6267\u884c\u5b8c\u6bd5\u540e",(0,i.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u5757\u8981\u88ab\u63d0\u4ea4\u5230\u7684\u961f\u5217"),"\u800c\u4e0d\u662f\u7ec4\u6240\u76d1\u542c\u7684\u961f\u5217\uff08\u8fd9\u4e2a\u5173\u7cfb\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," \u65b9\u6cd5\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"group")," \u53c2\u6570\u786e\u5b9a\uff09\uff0c\u56e0\u6b64\u66f4\u65b0 UI \u7684\u4e3b\u961f\u5217\u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"notify")," \u65b9\u6cd5\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"queue")," \u53c2\u6570\u4f20\u5165\u3002"),(0,i.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u5e38\u7528\u7684\u65b9\u6cd5 ",(0,i.kt)("inlineCode",{parentName:"p"},"wait")," \u5373\u7ec4\u53ef\u4ee5\u9009\u62e9\u7b49\u5f85\u7684\u65f6\u95f4\uff0c\u5982\u679c\u5728\u65f6\u95f4\u5185\u6240\u6709\u961f\u5217\u6267\u884c\u5b8c\u6bd5\u5219\u6267\u884c\u67d0\u6bb5\u4ee3\u7801\u5757\uff0c\u5426\u5219\u8d85\u65f6\u9519\u8bef\u6267\u884c\u53e6\u4e00\u6bb5\u4ee3\u7801\u5757\u3002\u57fa\u672c\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u7b49\u5f85\u4e24\u79d2\u949f\nlet result = group.wait(timeout: .now() + 2.0)\nswitch result {\n// \u6210\u529f\u6267\u884c\ncase .success:\n    print("Success")\n// \u8d85\u65f6\ncase .timedOut:\n    print("GG")\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wait")," \u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"DispatchTimeoutResult")," \u679a\u4e3e\uff0c\u5b83\u7684\u6784\u6210\u53ea\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"timedOut")," \u4e24\u79cd\uff0c\u56e0\u6b64\u5e38\u7528 switch-case \u8bed\u53e5\u4f5c\u8fdb\u4e00\u6b65\u7684\u5224\u65ad\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DispatchGroup")," \u4e5f\u53ef\u4ee5\u624b\u52a8\u8fdb\u884c\u8ba1\u6570\u7ba1\u7406\uff0c\u5373 ",(0,i.kt)("inlineCode",{parentName:"p"},"group.enter()")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"group.leave()"),"\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"enter")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"leave")," \u5fc5\u987b\u914d\u5bf9\u3002\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"let group = DispatchGroup()\n// task 1\ngroup.enter()\nTask1.someTask {\n    group.leave()\n}\n// task 2\ngroup.enter()\nTask2.anotherTask {\n    group.leave()\n}\n// \u6240\u6709\u4efb\u52a1\u5b8c\u6210\u540e\ngroup.notify(queue: .global()) {\n    completion()\n}\n")),(0,i.kt)("p",null,"GCD \u8fd8\u6709\u4e00\u79cd\u5e38\u89c1\u7684\u7528\u6cd5\u662f\u505a\u5ef6\u65f6\u64cd\u4f5c\uff0c\u6bd4\u8f83\u7b80\u5355\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"DispatchQueue.main.asyncAfter(deadline: .now() + 3.0) {\n    // \u5ef6\u8fdf\u4e09\u79d2\u6267\u884c\n}\n")),(0,i.kt)("p",null,"\u8fd9\u91cc\u65f6\u95f4\u7684\u7528\u6cd5\u548c\u4e0a\u8ff0 ",(0,i.kt)("inlineCode",{parentName:"p"},"wait")," \u65b9\u6cd5\u7c7b\u4f3c\uff0c\u90fd\u662f\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"DispatchTime")," \u5bf9\u8c61\u3002\u6bd4\u8f83\u6709\u8da3\u7684\u662f\u8fd9\u91cc\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," \u53f7\u5e76\u4e0d\u662f\u6570\u5b66\u8fd0\u7b97\uff0c\u800c\u662f\u5b9e\u73b0\u4e86\u4e00\u4e2a\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"public func +(time: DispatchTime, seconds: Double) -> DispatchTime"),"\u3002"),(0,i.kt)("h2",{id:"operation-queue"},"Operation Queue"),(0,i.kt)("p",null,"\u64cd\u4f5c\u961f\u5217\u662f\u7531 GCD \u63d0\u4f9b\u7684\u4e00\u4e2a\u961f\u5217\u6a21\u578b\u7684 Cocoa \u62bd\u8c61\u3002GCD \u63d0\u4f9b\u4e86\u66f4\u52a0\u5e95\u5c42\u7684\u63a7\u5236\uff0c\u800c\u64cd\u4f5c\u961f\u5217\u5219\u5728 GCD \u4e4b\u4e0a\u5b9e\u73b0\u4e86\u4e00\u4e9b\u65b9\u4fbf\u7684\u529f\u80fd\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"OperationQueue")," \u6709\u4e24\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u961f\u5217\uff1a\u4e3b\u961f\u5217\u548c\u81ea\u5b9a\u4e49\u961f\u5217\u3002\u4e3b\u961f\u5217\u8fd0\u884c\u5728\u4e3b\u7ebf\u7a0b\u4e4b\u4e0a\uff0c\u800c\u81ea\u5b9a\u4e49\u961f\u5217\u5728\u540e\u53f0\u6267\u884c\u3002\u5728\u4e24\u79cd\u7c7b\u578b\u4e2d\uff0c\u8fd9\u4e9b\u961f\u5217\u6240\u5904\u7406\u7684\u4efb\u52a1\u90fd\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Operation")," \u7684\u5b50\u7c7b\u6765\u8868\u8ff0\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u91cd\u5199 ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," \u65b9\u6cd5\u6765\u5b9a\u4e49\u81ea\u5df1\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Operation"),"\u3002\u91cd\u5199 ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," \u5e76\u4e0d\u9700\u8981\u7ba1\u7406\u4e00\u4e9b\u72b6\u6001\u5c5e\u6027\uff08\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"isExecuting")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"isFinished"),"\uff09\uff0c\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," \u65b9\u6cd5\u8fd4\u56de\u7684\u65f6\u5019\u8fd9\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Operation")," \u5c31\u7ed3\u675f\u4e86\u3002\u8fd9\u79cd\u65b9\u5f0f\u4f7f\u7528\u8d77\u6765\u975e\u5e38\u7b80\u5355\uff0c\u4f46\u662f\u7075\u6d3b\u6027\u76f8\u5bf9\u91cd\u5199 ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," \u6765\u8bf4\u8981\u5c11\u4e00\u4e9b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"class TestOperation: Operation {\n    override func main() {\n        // Do something\n    }\n}\n")),(0,i.kt)("p",null,"\u7c7b\u4f3c\u7684\uff0c\u4e5f\u53ef\u4ee5\u6784\u9020 ",(0,i.kt)("inlineCode",{parentName:"p"},"OperationQueue"),"\uff0c\u5e76\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"Operation")," \u6dfb\u52a0\u5230\u961f\u5217\u4e2d\u3002\u6817\u5b50\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u6784\u9020\u64cd\u4f5c\u961f\u5217\nlet operationQueue = OperationQueue()\n// \u6784\u9020 Operation\nlet testOperation = TestOperation()\n// \u6dfb\u52a0 Operation\noperationQueue.addOperation(testOperation)\n// \u6dfb\u52a0\u4ee3\u7801\u5757\noperationQueue.addOperation {\n    // Do something\n}\n")),(0,i.kt)("p",null,"\u4e3b\u961f\u5217\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"OperationQueue.main")," \u8bbf\u95ee\u5230\u3002\u9664\u4e86\u63d0\u4f9b\u57fa\u672c\u7684\u8c03\u5ea6\u64cd\u4f5c\u6216 block \u5916\uff0c\u64cd\u4f5c\u961f\u5217\u8fd8\u63d0\u4f9b\u4e86\u5728 GCD \u4e2d\u4e0d\u592a\u5bb9\u6613\u5904\u7406\u597d\u7684\u7279\u6027\u7684\u529f\u80fd\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"maxConcurrentOperationCount")," \u5c5e\u6027\u6765\u63a7\u5236\u4e00\u4e2a\u7279\u5b9a\u961f\u5217\u4e2d\u53ef\u4ee5\u6709\u591a\u5c11\u4e2a\u64cd\u4f5c\u53c2\u4e0e\u5e76\u53d1\u6267\u884c\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a 1 \u7684\u8bdd\u5c06\u5f97\u5230\u4e00\u4e2a\u4e32\u884c\u961f\u5217\u3002"),(0,i.kt)("p",null,"\u53e6\u5916\u8fd8\u6709\u4e00\u4e2a\u65b9\u4fbf\u7684\u529f\u80fd\u5c31\u662f\u6839\u636e\u961f\u5217\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"Operation")," \u7684\u4f18\u5148\u7ea7\u5bf9\u5176\u8fdb\u884c\u6392\u5e8f\uff0c\u8fd9\u4e0d\u540c\u4e8e GCD \u7684\u961f\u5217\u4f18\u5148\u7ea7\uff0c\u5b83\u53ea\u5f71\u54cd\u5f53\u524d\u961f\u5217\u4e2d\u6240\u6709\u88ab\u8c03\u5ea6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Operation")," \u7684\u6267\u884c\u5148\u540e\u3002\u5982\u679c\u9700\u8981\u8fdb\u4e00\u6b65\u5728\u9664\u4e86 5 \u4e2a\u6807\u51c6\u7684\u4f18\u5148\u7ea7\u4ee5\u5916\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"Operation")," \u7684\u6267\u884c\u987a\u5e8f\u8fdb\u884c\u63a7\u5236\u7684\u8bdd\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"addDependency")," \u65b9\u6cd5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Operation")," \u4e4b\u95f4\u6307\u5b9a\u4f9d\u8d56\u5173\u7cfb\u3002\u5bf9\u4e8e\u9700\u8981\u660e\u786e\u7684\u6267\u884c\u987a\u5e8f\u65f6\uff0c\u64cd\u4f5c\u4f9d\u8d56\u662f\u975e\u5e38\u5f3a\u5927\u7684\u4e00\u4e2a\u673a\u5236\u3002\u5b83\u53ef\u4ee5\u8ba9\u4f60\u521b\u5efa\u4e00\u4e9b\u64cd\u4f5c\u7ec4\uff0c\u5e76\u786e\u4fdd\u8fd9\u4e9b\u64cd\u4f5c\u7ec4\u5728\u4f9d\u8d56\u5b83\u4eec\u7684\u64cd\u4f5c\u88ab\u6267\u884c\u4e4b\u524d\u6267\u884c\uff0c\u6216\u8005\u5728\u5e76\u53d1\u961f\u5217\u4e2d\u4ee5\u4e32\u884c\u7684\u65b9\u5f0f\u6267\u884c\u64cd\u4f5c\u3002"),(0,i.kt)("h2",{id:"runloop"},"RunLoop"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RunLoop")," \u5c31\u662f\u4e00\u7ec4\u5c0f\u7684\u5faa\u73af\uff0c\u5728\u91cc\u9762\u4e0d\u65ad\u5904\u7406\u65b0\u7684\u4e8b\u4ef6\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"RunLoop.main")," \u4e0e\u4e3b\u7ebf\u7a0b\u76f8\u5173\u8d1f\u8d23\u5904\u7406 UI \u4e8b\u4ef6\u3001\u8ba1\u65f6\u5668\u4ee5\u53ca\u5176\u5b83\u5185\u6838\u76f8\u5173\u4e8b\u4ef6\u3002\u6bcf\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"RunLoop")," \u90fd\u548c\u4e00\u4e2a\u7ebf\u7a0b\u76f8\u5173\uff08\u4e00\u4e00\u5bf9\u5e94\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RunLoop")," \u53ef\u4ee5\u8fd0\u884c\u5728\u4e0d\u540c\u7684\u6a21\u5f0f\u4e2d\uff0c\u6bcf\u79cd\u6a21\u5f0f\u90fd\u5b9a\u4e49\u4e86\u4e00\u7ec4\u4e8b\u4ef6\uff0c\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"RunLoop")," \u505a\u51fa\u54cd\u5e94\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"RunLoop.main")," \u6682\u65f6\u6027\u7684\u5c06\u67d0\u4e2a\u4efb\u52a1\u4f18\u5148\u6267\u884c\u3002\u4e00\u4e2a\u5178\u578b\u7684\u6817\u5b50\u662f iOS \u7684\u6eda\u52a8\uff0c\u5728\u8fdb\u884c\u6eda\u52a8\u65f6\u4e3a\u4fdd\u8bc1\u6d41\u7545 ",(0,i.kt)("inlineCode",{parentName:"p"},"RunLoop")," \u5e76\u4e0d\u662f\u8fd0\u884c\u5728\u9ed8\u8ba4\u6a21\u5f0f\u4e2d\uff0c\u56e0\u6b64\u5176\u4ed6\u4efb\u52a1\uff08\u8ba1\u65f6\u5668\u3001UI \u66f4\u65b0\uff09\u5e76\u4e0d\u4f1a\u88ab ",(0,i.kt)("inlineCode",{parentName:"p"},"RunLoop")," \u54cd\u5e94\u3002\u5982\u679c\u9700\u8981\uff0c\u5219\u8981\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"NSRunLoopCommonModes")," \u7684\u6a21\u5f0f\u5e76\u6dfb\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"RunLoop")," \u4e2d\u3002"))}s.isMDXComponent=!0}}]);