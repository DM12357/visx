_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[80],{"+fu8":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var r=n("aWzz"),a=n.n(r),i=n("ERkP"),o=n.n(i),c=n("O94r"),u=n.n(c);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l={position:"absolute",backgroundColor:"white",color:"#666666",padding:".3rem .5rem",borderRadius:"3px",fontSize:"14px",boxShadow:"0 1px 2px rgba(33,33,33,0.2)",lineHeight:"1em",pointerEvents:"none"};function d(e){var t=e.className,n=e.top,r=e.left,a=e.offsetLeft,i=void 0===a?10:a,c=e.offsetTop,d=void 0===c?10:c,f=e.style,p=void 0===f?l:f,m=e.children,h=e.unstyled,g=void 0!==h&&h,b=e.applyPositionStyle,y=void 0!==b&&b,v=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["className","top","left","offsetLeft","offsetTop","style","children","unstyled","applyPositionStyle"]);return o.a.createElement("div",s({className:u()("visx-tooltip",t),style:s({top:null==n||null==d?n:n+d,left:null==r||null==i?r:r+i},y&&{position:"absolute"},!g&&p)},v),m)}d.propTypes={children:a.a.node,className:a.a.string,left:a.a.number,offsetLeft:a.a.number,offsetTop:a.a.number,top:a.a.number,applyPositionStyle:a.a.bool,unstyled:a.a.bool}},"/B0Q":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n("W1cA");const a=Symbol("implicit");function i(){var e=new Map,t=[],n=[],o=a;function c(r){var i=r+"",c=e.get(i);if(!c){if(o!==a)return o;e.set(i,c=t.push(r))}return n[(c-1)%n.length]}return c.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new Map;for(const r of n){const n=r+"";e.has(n)||e.set(n,t.push(r))}return c},c.range=function(e){return arguments.length?(n=Array.from(e),c):n.slice()},c.unknown=function(e){return arguments.length?(o=e,c):o},c.copy=function(){return i(t,n).unknown(o)},r.b.apply(c,arguments),c}},"0yDh":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("aWzz"),a=n.n(r),i=n("ERkP"),o=n.n(i),c=n("O94r"),u=n.n(c),s=n("VFFr");function l(e){var t=e.id,n=e.width,r=e.height,a=e.path,i=e.fill,c=void 0===i?"transparent":i,l=e.stroke,d=e.strokeWidth,f=e.strokeDasharray,p=e.strokeLinecap,m=void 0===p?"square":p,h=e.shapeRendering,g=void 0===h?"auto":h,b=e.background,y=e.className;return o.a.createElement(s.a,{id:t,width:n,height:r},!!b&&o.a.createElement("rect",{width:n,height:r,fill:b}),o.a.createElement("path",{className:u()("visx-pattern-path",y),d:a,fill:c,stroke:l,strokeWidth:d,strokeDasharray:f,strokeLinecap:m,shapeRendering:g}))}function d(e){var t=e.id,n=e.width,r=e.height,a=e.fill,i=e.stroke,c=e.strokeWidth,s=e.strokeDasharray,d=e.strokeLinecap,f=e.shapeRendering,p=e.background,m=e.className;return o.a.createElement(l,{className:u()("visx-pattern-wave",m),path:"M 0 "+r/2+" c "+r/8+" "+-r/4+" , "+3*r/8+" "+-r/4+" , "+r/2+" 0\n             c "+r/8+" "+r/4+" , "+3*r/8+" "+r/4+" , "+r/2+" 0 M "+-r/2+" "+r/2+"\n             c "+r/8+" "+r/4+" , "+3*r/8+" "+r/4+" , "+r/2+" 0 M "+r+" "+r/2+"\n             c "+r/8+" "+-r/4+" , "+3*r/8+" "+-r/4+" , "+r/2+" 0",id:t,width:n,height:r,fill:a,stroke:i,strokeWidth:c,strokeDasharray:s,strokeLinecap:d,shapeRendering:f,background:p})}l.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,path:a.a.string,fill:a.a.string,className:a.a.string,background:a.a.string,stroke:a.a.string,strokeWidth:a.a.oneOfType([a.a.number,a.a.string]),strokeDasharray:a.a.oneOfType([a.a.string,a.a.number]),strokeLinecap:a.a.oneOf(["square","butt","round","inherit"]),shapeRendering:a.a.oneOfType([a.a.string,a.a.number])},d.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,fill:a.a.string,className:a.a.string,background:a.a.string,stroke:a.a.string,strokeWidth:a.a.oneOfType([a.a.number,a.a.string]),strokeDasharray:a.a.oneOfType([a.a.string,a.a.number]),strokeLinecap:a.a.oneOf(["square","butt","round","inherit"]),shapeRendering:a.a.oneOfType([a.a.string,a.a.number])}},"4HNP":function(e){e.exports=JSON.parse('{"name":"@visx/demo-radar","description":"Standalone visx radar chart demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/point":"latest","@visx/scale":"latest","@visx/shape":"latest","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","radar"]}')},"67po":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("uKU/"),a=n("xx0A"),i=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function o(e){return i(Object(r.a)(),e)}},COA0:function(e,t,n){"use strict";n.r(t);var r=n("jg1C"),a=(n("ERkP"),n("zjfJ")),i=n("HbGN"),o=n("O94r"),c=n.n(o);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){var t=e.top,n=void 0===t?0:t,a=e.left,o=void 0===a?0:a,u=e.transform,l=e.className,d=e.children,f=e.innerRef,p=Object(i.a)(e,["top","left","transform","className","children","innerRef"]);return Object(r.jsx)("g",s(s({ref:f,className:c()("visx-group",l),transform:u||"translate(".concat(o,", ").concat(n,")")},p),{},{children:d}))}try{l.displayName="Group",l.__docgenInfo={description:"",displayName:"Group",props:{top:{defaultValue:{value:0},description:"Top offset applied to `<g/>`.",name:"top",required:!1,type:{name:"number | undefined"}},left:{defaultValue:{value:0},description:"Left offset applied to `<g/>`.",name:"left",required:!1,type:{name:"number | undefined"}},transform:{defaultValue:null,description:"Override `top` and `left` to provide the entire `transform` string.",name:"transform",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"className to apply to `<g/>`.",name:"className",required:!1,type:{name:"string | undefined"}},innerRef:{defaultValue:null,description:"ref to underlying `<g/>`.",name:"innerRef",required:!1,type:{name:"((instance: SVGGElement | null) => void) | RefObject<SVGGElement> | null | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-group/src/Group.tsx#Group"]={docgenInfo:l.__docgenInfo,name:"Group",path:"../visx-group/src/Group.tsx#Group"})}catch(O){}var d=n("QnPE"),f=n("Jpdw"),p=n("Ohz0"),m=n("VWZE"),h=n("li05"),g=n("ICwK"),b=n("x401"),y=[l],v=[f.default,p.default,m.default,h.default,g.default,b.default];t.default=function(){return Object(r.jsx)(d.a,{components:y,examples:v,readme:'# @visx/group\n\n<a title="@visx/group npm downloads" href="https://www.npmjs.com/package/@visx/group">\n  <img src="https://img.shields.io/npm/dm/@visx/group.svg?style=flat-square" />\n</a>\n\n`<Group />` provides a simplified API for SVG `<g />` elements, which are containers for other SVG\nobjects. You may pass in a `top` and `left` margin (instead of `transform={translate(...)}`) and a\n`className`.\n\n## Installation\n\n```\nnpm install --save @visx/group\n```\n',visxPackage:"group"})}},"Cf/J":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("aWzz"),a=n.n(r),i=n("ERkP"),o=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){var t=e.children,n=e.id,r=e.from,a=e.to,i=e.x1,u=e.y1,s=e.x2,l=e.y2,d=e.fromOffset,f=void 0===d?"0%":d,p=e.fromOpacity,m=void 0===p?1:p,h=e.toOffset,g=void 0===h?"100%":h,b=e.toOpacity,y=void 0===b?1:b,v=e.rotate,O=e.transform,x=e.vertical,j=void 0===x||x,k=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),w=i,E=s,R=u,S=l;return!j||w||E||R||S||(w="0",E="0",R="0",S="1"),o.a.createElement("defs",null,o.a.createElement("linearGradient",c({id:n,x1:w,y1:R,x2:E,y2:S,gradientTransform:v?"rotate("+v+")":O},k),!!t&&t,!t&&o.a.createElement("stop",{offset:f,stopColor:r,stopOpacity:m}),!t&&o.a.createElement("stop",{offset:g,stopColor:a,stopOpacity:y})))}u.propTypes={id:a.a.string.isRequired,from:a.a.string,to:a.a.string,x1:a.a.oneOfType([a.a.string,a.a.number]),x2:a.a.oneOfType([a.a.string,a.a.number]),y1:a.a.oneOfType([a.a.string,a.a.number]),y2:a.a.oneOfType([a.a.string,a.a.number]),fromOffset:a.a.oneOfType([a.a.string,a.a.number]),fromOpacity:a.a.oneOfType([a.a.string,a.a.number]),toOffset:a.a.oneOfType([a.a.string,a.a.number]),toOpacity:a.a.oneOfType([a.a.string,a.a.number]),rotate:a.a.oneOfType([a.a.string,a.a.number]),transform:a.a.string,children:a.a.node,vertical:a.a.bool}},"D+es":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("/B0Q"),a=n("xx0A"),i=Object(a.b)("domain","range","reverse","unknown");function o(e){return i(Object(r.a)(),e)}},HbGN:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},ICwK:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("jg1C"),a=(n("ERkP"),n("4Jcw")),i=n("i9k6"),o=n("uVo9");n.d(t,"packageJson",(function(){return o}));var c={background:"#8a88e3"},u={color:"#ffffff",zIndex:1};function s(){return Object(r.jsx)(i.a,{title:"Stats Plots",description:"<BoxPlot /> & <ViolinPlot />",exampleRenderer:a.a,exampleUrl:"/statsplot",tileStyles:c,detailsStyles:u})}},J4UP:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const r=1/4294967296;function a(e=Math.random()){let t=0|(0<=e&&e<1?e/r:Math.abs(e));return()=>(t=1664525*t+1013904223|0,r*(t>>>0))}},Jpdw:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("jg1C"),a=(n("ERkP"),n("XMEZ")),i=n("i9k6"),o=n("ePAY");n.d(t,"packageJson",(function(){return o}));var c={background:"#f5f2e3"},u={color:"#333"};function s(){return Object(r.jsx)(i.a,{title:"Patterns",description:"<Pattern />",exampleRenderer:a.a,exampleUrl:"/patterns",tileStyles:c,detailsStyles:u})}},Ohz0:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("jg1C"),a=(n("ERkP"),n("Xln+")),i=n("i9k6"),o=n("4HNP");n.d(t,"packageJson",(function(){return o}));var c={background:a.a},u={color:a.c};function s(){return Object(r.jsx)(i.a,{title:"Radar",description:"<Shape.Line /> + <Shape.LineRadial />",exampleRenderer:a.b,exampleUrl:"/radar",tileStyles:c,detailsStyles:u})}},Qinw:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ERkP"),a=n.n(r),i=n("Cf/J");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.from,n=void 0===t?"#F02FC2":t,r=e.to,c=void 0===r?"#6094EA":r,u=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["from","to"]);return a.a.createElement(i.a,o({from:n,to:c},u))}},QnoR:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("ERkP");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){var t=Object(r.useState)(a({tooltipOpen:!1},e)),n=t[0],i=t[1],o=Object(r.useCallback)((function(e){return i("function"===typeof e?function(t){t.tooltipOpen;var n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["tooltipOpen"]);return a({},e(n),{tooltipOpen:!0})}:{tooltipOpen:!0,tooltipLeft:e.tooltipLeft,tooltipTop:e.tooltipTop,tooltipData:e.tooltipData})}),[i]),c=Object(r.useCallback)((function(){return i({tooltipOpen:!1,tooltipLeft:void 0,tooltipTop:void 0,tooltipData:void 0})}),[i]);return{tooltipOpen:n.tooltipOpen,tooltipLeft:n.tooltipLeft,tooltipTop:n.tooltipTop,tooltipData:n.tooltipData,updateTooltip:i,showTooltip:o,hideTooltip:c}}},"U+Fi":function(e,t,n){"use strict";n.r(t);var r=n("JmwF");n.d(t,"Group",(function(){return r.a}))},VWZE:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("jg1C"),a=(n("ERkP"),n("Vo8A")),i=n("i9k6"),o=n("qXbg");n.d(t,"packageJson",(function(){return o}));var c={background:"#7f82e3"},u={color:"rgb(93,30,91)"},s={animate:!1,margin:{top:20,right:20,bottom:80,left:20}};function l(){return Object(r.jsx)(i.a,{title:"Pies & donuts",description:"<Shape.Pie />",exampleProps:s,exampleRenderer:a.a,exampleUrl:"/pies",tileStyles:c,detailsStyles:u})}},Vo8A:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n("zygG"),a=n("zjfJ"),i=n("jg1C"),o=n("ERkP"),c=n("c73+"),u=n.n(c),s=n("D+es"),l=n("JmwF"),d=n("Qinw"),f=n("ykvB"),p=n.n(f),m=n("eEjM"),h=n.n(m),g=n("0yf5");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=p.a.slice(0,4),O=Object.keys(h.a[0]).filter((function(e){return"date"!==e})),x=O.map((function(e){return{label:e,usage:Number(h.a[0][e])}})),j=function(e){return e.usage},k=function(e){return e.frequency},w=Object(s.a)({domain:O,range:["rgba(255,255,255,0.7)","rgba(255,255,255,0.6)","rgba(255,255,255,0.5)","rgba(255,255,255,0.4)","rgba(255,255,255,0.3)","rgba(255,255,255,0.2)","rgba(255,255,255,0.1)"]}),E=Object(s.a)({domain:v.map((function(e){return e.letter})),range:["rgba(93,30,91,1)","rgba(93,30,91,0.8)","rgba(93,30,91,0.6)","rgba(93,30,91,0.4)"]}),R={top:20,right:20,bottom:20,left:20};function S(e){var t=e.width,n=e.height,r=e.margin,a=void 0===r?R:r,c=e.animate,s=void 0===c||c,f=Object(o.useState)(null),p=f[0],m=f[1],h=Object(o.useState)(null),g=h[0],b=h[1];if(t<10)return null;var O=t-a.left-a.right,S=n-a.top-a.bottom,P=Math.min(O,S)/2,A=S/2,T=O/2;return Object(i.jsxs)("svg",{width:t,height:n,children:[Object(i.jsx)(d.a,{id:"visx-pie-gradient"}),Object(i.jsx)("rect",{rx:14,width:t,height:n,fill:"url('#visx-pie-gradient')"}),Object(i.jsxs)(l.a,{top:A+a.top,left:T+a.left,children:[Object(i.jsx)(u.a,{data:p?x.filter((function(e){return e.label===p})):x,pieValue:j,outerRadius:P,innerRadius:P-50,cornerRadius:3,padAngle:.005,children:function(e){return Object(i.jsx)(M,y(y({},e),{},{animate:s,getKey:function(e){return e.data.label},onClickDatum:function(e){var t=e.data.label;return s&&m(p&&p===t?null:t)},getColor:function(e){return w(e.data.label)}}))}}),Object(i.jsx)(u.a,{data:g?v.filter((function(e){return e.letter===g})):v,pieValue:k,pieSortValues:function(){return-1},outerRadius:P-65,children:function(e){return Object(i.jsx)(M,y(y({},e),{},{animate:s,getKey:function(e){return e.data.letter},onClickDatum:function(e){var t=e.data.letter;return s&&b(g&&g===t?null:t)},getColor:function(e){var t=e.data.letter;return E(t)}}))}})]}),s&&Object(i.jsx)("text",{textAnchor:"end",x:t-16,y:n-16,fill:"white",fontSize:11,fontWeight:300,pointerEvents:"none",children:"Click segments to update"})]})}var P=function(e){var t=e.endAngle;return{startAngle:t>Math.PI?2*Math.PI:0,endAngle:t>Math.PI?2*Math.PI:0,opacity:0}},A=function(e){return{startAngle:e.startAngle,endAngle:e.endAngle,opacity:1}};function M(e){var t=e.animate,n=e.arcs,a=e.path,o=e.getKey,c=e.getColor,u=e.onClickDatum;return Object(g.useTransition)(n,{from:t?P:A,enter:A,update:A,leave:t?P:A,keys:o})((function(e,t,n){var s=n.key,l=a.centroid(t),d=Object(r.a)(l,2),f=d[0],p=d[1],m=t.endAngle-t.startAngle>=.1;return Object(i.jsxs)("g",{children:[Object(i.jsx)(g.animated.path,{d:Object(g.interpolate)([e.startAngle,e.endAngle],(function(e,n){return a(y(y({},t),{},{startAngle:e,endAngle:n}))})),fill:c(t),onClick:function(){return u(t)},onTouchStart:function(){return u(t)}}),m&&Object(i.jsx)(g.animated.g,{style:{opacity:e.opacity},children:Object(i.jsx)("text",{fill:"white",x:f,y:p,dy:".33em",fontSize:9,textAnchor:"middle",pointerEvents:"none",children:o(t)})})]},s)}))}try{S.displayName="Example",S.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},animate:{defaultValue:{value:!0},description:"",name:"animate",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-shape-pie/Example.tsx#Example"]={docgenInfo:S.__docgenInfo,name:"Example",path:"src/sandboxes/visx-shape-pie/Example.tsx#Example"})}catch(T){}},XMEZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("jg1C"),a=n("ERkP"),i=n.n(a),o=n("g2fB"),c=n("JmwF"),u=n("a49c"),s=n("VFFr"),l=n("dKJj"),d=n("0yDh"),f={top:0,left:0,right:0,bottom:80},p=[function(e){var t=e.id;return Object(r.jsx)(u.a,{id:t,height:6,width:6,stroke:"black",strokeWidth:1})},function(e){var t=e.id,n=e.prefersReducedMotion;return Object(r.jsxs)(s.a,{id:t,width:10,height:10,children:[!n&&Object(r.jsx)("animateTransform",{attributeType:"xml",attributeName:"patternTransform",type:"translate",from:"0 0",to:"0 30",dur:"10s",repeatCount:"indefinite"}),Object(r.jsx)("circle",{cx:5,cy:5,r:"3",stroke:"none",fill:"black","transform-origin":"center"})]})},function(e){var t=e.id;return Object(r.jsx)(u.a,{id:t,height:6,width:6,stroke:"black",strokeWidth:1,orientation:["horizontal"]})},function(e){var t=e.id;return Object(r.jsx)(u.a,{id:t,height:6,width:6,stroke:"black",strokeWidth:1,orientation:["diagonal"]})},function(e){var t=e.id;return Object(r.jsx)(u.a,{id:t,height:6,width:6,stroke:"black",strokeWidth:1,orientation:["diagonalRightToLeft"]})},function(e){var t=e.id;return Object(r.jsx)(u.a,{id:t,height:6,width:6,stroke:"black",strokeWidth:1,orientation:["vertical","horizontal"]})},function(e){var t=e.id;return Object(r.jsx)(l.a,{id:t,height:10,width:10,fill:"black",complement:!0})},function(e){var t=e.id,n=e.prefersReducedMotion;return Object(r.jsxs)(s.a,{id:t,width:10,height:10,children:[!n&&Object(r.jsx)("animateTransform",{attributeType:"xml",attributeName:"patternTransform",type:"translate",from:"0 0",to:"50 0",dur:"10s",repeatCount:"indefinite"}),Object(r.jsx)("path",{d:"M 0 ".concat(5," c ").concat(1.25," ").concat(-2.5," , ").concat(3.75," ").concat(-2.5," , ").concat(5," 0\n               c ").concat(1.25," ").concat(2.5," , ").concat(3.75," ").concat(2.5," , ").concat(5," 0 M ").concat(-5," ").concat(5,"\n               c ").concat(1.25," ").concat(2.5," , ").concat(3.75," ").concat(2.5," , ").concat(5," 0 M ").concat(10," ").concat(5,"\n               c ").concat(1.25," ").concat(-2.5," , ").concat(3.75," ").concat(-2.5," , ").concat(5," 0"),fill:"none",stroke:"black",strokeWidth:1})]})},function(e){var t=e.id;return Object(r.jsx)(d.a,{id:t,height:6,width:6,fill:"transparent",stroke:"black",strokeWidth:1})}];function m(e){var t=e.width,n=e.height,a=e.margin,u=void 0===a?f:a,s=window.matchMedia("(prefers-reduced-motion: reduce)"),l=!s||!!s.matches,d=p.length/3,m=Math.max((t-u.left-u.right)/3,0),h=Math.max((n-u.bottom-u.top)/d,0);return t>=10?Object(r.jsxs)("svg",{width:t,height:n,children:[Object(r.jsx)("rect",{x:0,y:0,width:t,height:n,fill:"#f5f2e3",rx:14}),Object(r.jsx)(c.a,{top:u.top,left:u.left,children:p.map((function(e,t){var n=t%3,a=Math.floor(t/3),c="visx-pattern-demo-".concat(t,"-").concat(a,"-").concat(n);return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)(e,{id:c,prefersReducedMotion:l}),Object(r.jsx)(o.a,{fill:"url(#".concat(c,")"),x:n*m,y:a*h,width:m,height:h,rx:14})]},c)}))})]}):null}try{m.displayName="Example",m.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; left: number; right: number; bottom: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-pattern/Example.tsx#Example"]={docgenInfo:m.__docgenInfo,name:"Example",path:"src/sandboxes/visx-pattern/Example.tsx#Example"})}catch(h){}},"Xln+":function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n("fGyu"),a=n("jg1C"),i=(n("ERkP"),n("JmwF")),o=n("ykvB"),c=n.n(o),u=n("67po"),s=n("rkTo"),l=n("rySy"),d=n("WqRU"),f="#f5810c",p="#FAF7E9",m=c.a.slice(2,12),h=function(e){return e.frequency};var g={top:40,left:80,right:80,bottom:80};function b(e){var t,n=e.width,o=e.height,c=e.levels,b=void 0===c?5:c,y=e.margin,v=void 0===y?g:y,O=n-v.left-v.right,x=o-v.top-v.bottom,j=Math.min(O,x)/2,k=Object(u.a)({range:[0,2*Math.PI],domain:[360,0]}),w=Object(u.a)({range:[0,j],domain:[0,Math.max.apply(Math,Object(r.a)(m.map(h)))]}),E=(t=m.length,Object(r.a)(new Array(t+1)).map((function(e,n){return{angle:n*(360/t)}}))),R=function(e,t){var n=2*Math.PI/e;return Object(r.a)(new Array(e)).map((function(e,r){return{x:t*Math.sin(r*n),y:t*Math.cos(r*n)}}))}(m.length,j),S=function(e,t,n){var r=2*Math.PI/e.length,a=new Array(e.length).fill({x:0,y:0}),i=new Array(e.length+1).fill("").reduce((function(i,o,c){if(c>e.length)return i;var u=t(n(e[c-1]))*Math.sin(c*r),s=t(n(e[c-1]))*Math.cos(c*r);return a[c-1]={x:u,y:s},i+"".concat(u,",").concat(s," ")}));return{points:a,pointString:i}}(m,(function(e){var t;return null!==(t=w(e))&&void 0!==t?t:0}),h),P=new s.a({x:0,y:0});return n<10?null:Object(a.jsxs)("svg",{width:n,height:o,children:[Object(a.jsx)("rect",{fill:p,width:n,height:o,rx:14}),Object(a.jsxs)(i.a,{top:o/2-v.top,left:n/2,children:[Object(r.a)(new Array(b)).map((function(e,t){return Object(a.jsx)(l.a,{data:E,angle:function(e){var t;return null!==(t=k(e.angle))&&void 0!==t?t:0},radius:(t+1)*j/b,fill:"none",stroke:"#d9d9d9",strokeWidth:2,strokeOpacity:.8,strokeLinecap:"round"},"web-".concat(t))})),Object(r.a)(new Array(m.length)).map((function(e,t){return Object(a.jsx)(d.a,{from:P,to:R[t],stroke:"#d9d9d9"},"radar-line-".concat(t))})),Object(a.jsx)("polygon",{points:S.pointString,fill:"#ff9933",fillOpacity:.3,stroke:"#ff9933",strokeWidth:1}),S.points.map((function(e,t){return Object(a.jsx)("circle",{cx:e.x,cy:e.y,r:4,fill:f},"radar-point-".concat(t))}))]})]})}try{b.displayName="Example",b.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},levels:{defaultValue:{value:5},description:"",name:"levels",required:!1,type:{name:"number | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-radar/Example.tsx#Example"]={docgenInfo:b.__docgenInfo,name:"Example",path:"src/sandboxes/visx-radar/Example.tsx#Example"})}catch(y){}},YaE3:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=function(e,t,n){e=+e,t=+t,n=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+n;for(var r=-1,a=0|Math.max(0,Math.ceil((t-e)/n)),i=new Array(a);++r<a;)i[r]=e+r*n;return i},a=n("W1cA"),i=n("/B0Q");function o(){var e,t,n=Object(i.a)().unknown(void 0),c=n.domain,u=n.range,s=0,l=1,d=!1,f=0,p=0,m=.5;function h(){var n=c().length,a=l<s,i=a?l:s,o=a?s:l;e=(o-i)/Math.max(1,n-f+2*p),d&&(e=Math.floor(e)),i+=(o-i-e*(n-f))*m,t=e*(1-f),d&&(i=Math.round(i),t=Math.round(t));var h=r(n).map((function(t){return i+e*t}));return u(a?h.reverse():h)}return delete n.unknown,n.domain=function(e){return arguments.length?(c(e),h()):c()},n.range=function(e){return arguments.length?([s,l]=e,s=+s,l=+l,h()):[s,l]},n.rangeRound=function(e){return[s,l]=e,s=+s,l=+l,d=!0,h()},n.bandwidth=function(){return t},n.step=function(){return e},n.round=function(e){return arguments.length?(d=!!e,h()):d},n.padding=function(e){return arguments.length?(f=Math.min(1,p=+e),h()):f},n.paddingInner=function(e){return arguments.length?(f=Math.min(1,e),h()):f},n.paddingOuter=function(e){return arguments.length?(p=+e,h()):p},n.align=function(e){return arguments.length?(m=Math.max(0,Math.min(1,e)),h()):m},n.copy=function(){return o(c(),[s,l]).round(d).paddingInner(f).paddingOuter(p).align(m)},a.b.apply(h(),arguments)}function c(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return c(t())},e}function u(){return c(o.apply(null,arguments).paddingInner(1))}},YbF1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/group",function(){return n("COA0")}])},Zbhd:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("PB0s"),a=n("XAd9"),i=n("Cyas"),o=n("VBI3");function c(e,t,n,c){var u,s=Object(r.c)(e,t,n);switch((c=Object(a.a)(null==c?",f":c)).type){case"s":var l=Math.max(Math.abs(e),Math.abs(t));return null!=c.precision||isNaN(u=function(e,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(t)/3)))-Object(i.a)(Math.abs(e)))}(s,l))||(c.precision=u),Object(o.b)(c,l);case"":case"e":case"g":case"p":case"r":null!=c.precision||isNaN(u=function(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Object(i.a)(t)-Object(i.a)(e))+1}(s,Math.max(Math.abs(e),Math.abs(t))))||(c.precision=u-("e"===c.type));break;case"f":case"%":null!=c.precision||isNaN(u=function(e){return Math.max(0,-Object(i.a)(Math.abs(e)))}(s))||(c.precision=u-2*("%"===c.type))}return Object(o.a)(c)}},"c73+":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=e.className,n=e.top,c=e.left,s=e.data,l=void 0===s?[]:s,d=e.centroid,f=e.innerRadius,p=void 0===f?0:f,m=e.outerRadius,h=e.cornerRadius,g=e.startAngle,b=e.endAngle,y=e.padAngle,v=e.padRadius,O=e.pieSort,x=e.pieSortValues,j=e.pieValue,k=e.children,w=e.fill,E=void 0===w?"":w,R=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"]),S=(0,o.arc)({innerRadius:p,outerRadius:m,cornerRadius:h,padRadius:v}),P=(0,o.pie)({startAngle:g,endAngle:b,padAngle:y,value:j,sort:O,sortValues:x}),A=P(l);return k?r.default.createElement(r.default.Fragment,null,k({arcs:A,path:S,pie:P})):r.default.createElement(i.Group,{className:"visx-pie-arcs-group",top:n,left:c},A.map((function(e,n){return r.default.createElement("g",{key:"pie-arc-"+n},r.default.createElement("path",u({className:(0,a.default)("visx-pie-arc",t),d:S(e)||"",fill:null==E||"string"===typeof E?E:E(e)},R)),null==d?void 0:d(S.centroid(e),e))})))};var r=c(n("ERkP")),a=c(n("O94r")),i=n("U+Fi"),o=n("m2mA");function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}},"cc+0":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("YaE3"),a=n("xx0A"),i=Object(a.b)("domain","range","reverse","align","padding","round");function o(e){return i(Object(r.a)(),e)}},dKJj:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("aWzz"),a=n.n(r),i=n("ERkP"),o=n.n(i),c=n("O94r"),u=n.n(c),s=n("VFFr");function l(e){var t,n=e.id,r=e.width,a=e.height,i=e.radius,c=void 0===i?2:i,l=e.fill,d=e.stroke,f=e.strokeWidth,p=e.strokeDasharray,m=e.background,h=e.complement,g=void 0!==h&&h,b=e.className;return g&&(t=[[0,0],[0,a],[r,0],[r,a]]),o.a.createElement(s.a,{id:n,width:r,height:a},!!m&&o.a.createElement("rect",{width:r,height:a,fill:m}),o.a.createElement("circle",{className:u()("visx-pattern-circle",b),cx:r/2,cy:a/2,r:c,fill:l,stroke:d,strokeWidth:f,strokeDasharray:p}),t&&t.map((function(e){var t=e[0],r=e[1];return o.a.createElement("circle",{key:n+"-complement-"+t+"-"+r,className:u()("visx-pattern-circle visx-pattern-circle-complement",b),cx:t,cy:r,r:c,fill:l,stroke:d,strokeWidth:f,strokeDasharray:p})})))}l.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,radius:a.a.number,fill:a.a.string,className:a.a.string,stroke:a.a.string,strokeWidth:a.a.oneOfType([a.a.number,a.a.string]),strokeDasharray:a.a.oneOfType([a.a.number,a.a.string]),complement:a.a.bool,background:a.a.string}},ePAY:function(e){e.exports=JSON.parse('{"name":"@visx/demo-pattern","description":"Standalone visx pattern demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/group":"latest","@visx/pattern":"latest","@visx/responsive":"latest","@visx/shape":"latest","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx"]}')},g2fB:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),o=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){var t=e.className,n=e.innerRef,r=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["className","innerRef"]);return a.a.createElement("rect",c({ref:n,className:o()("visx-bar",t)},r))}},li05:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("jg1C"),a=(n("ERkP"),n("GtZW")),i=n("i9k6"),o=n("a41g");n.d(t,"packageJson",(function(){return o}));var c={background:a.a},u={color:a.b},s={margin:{top:0,left:10,right:10,bottom:76}};function l(){return Object(r.jsx)(i.a,{title:"Treemap",description:"<Hierarchy.Treemap />",exampleProps:s,exampleRenderer:a.c,exampleUrl:"/treemap",tileStyles:c,detailsStyles:u})}},qXbg:function(e){e.exports=JSON.parse('{"name":"@visx/demo-shape-pie","description":"Standalone visx pie demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/gradient":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","react-spring":"^9.2.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","pie","shape","donut"]}')},"uKU/":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var r=n("PB0s"),a=n("2+fR"),i=n("W1cA"),o=n("Zbhd");function c(e){var t=e.domain;return e.ticks=function(e){var n=t();return Object(r.a)(n[0],n[n.length-1],null==e?10:e)},e.tickFormat=function(e,n){var r=t();return Object(o.a)(r[0],r[r.length-1],null==e?10:e,n)},e.nice=function(n){null==n&&(n=10);var a,i,o=t(),c=0,u=o.length-1,s=o[c],l=o[u],d=10;for(l<s&&(i=s,s=l,l=i,i=c,c=u,u=i);d-- >0;){if((i=Object(r.b)(s,l,n))===a)return o[c]=s,o[u]=l,t(o);if(i>0)s=Math.floor(s/i)*i,l=Math.ceil(l/i)*i;else{if(!(i<0))break;s=Math.ceil(s*i)/i,l=Math.floor(l*i)/i}a=i}return e},e}function u(){var e=Object(a.b)();return e.copy=function(){return Object(a.a)(e,u())},i.b.apply(e,arguments),c(e)}},ykvB:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=[{letter:"A",frequency:.08167},{letter:"B",frequency:.01492},{letter:"C",frequency:.02782},{letter:"D",frequency:.04253},{letter:"E",frequency:.12702},{letter:"F",frequency:.02288},{letter:"G",frequency:.02015},{letter:"H",frequency:.06094},{letter:"I",frequency:.06966},{letter:"J",frequency:.00153},{letter:"K",frequency:.00772},{letter:"L",frequency:.04025},{letter:"M",frequency:.02406},{letter:"N",frequency:.06749},{letter:"O",frequency:.07507},{letter:"P",frequency:.01929},{letter:"Q",frequency:95e-5},{letter:"R",frequency:.05987},{letter:"S",frequency:.06327},{letter:"T",frequency:.09056},{letter:"U",frequency:.02758},{letter:"V",frequency:.00978},{letter:"W",frequency:.0236},{letter:"X",frequency:.0015},{letter:"Y",frequency:.01974},{letter:"Z",frequency:74e-5}];t.default=r},zjfJ:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},zygG:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("HO86");function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(u){c=!0,a=u}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return i}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["YbF1",0,2,1,3,4,5,7,8,9,10,11,12,13,14,15,16,19,26,25,32,31]]]);