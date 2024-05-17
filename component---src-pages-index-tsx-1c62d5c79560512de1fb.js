/*! For license information please see component---src-pages-index-tsx-1c62d5c79560512de1fb.js.LICENSE.txt */
"use strict";(self.webpackChunklisbon_satsummit_io=self.webpackChunklisbon_satsummit_io||[]).push([[691],{6063:function(t,e,a){a.r(e),a.d(e,{Head:function(){return Pt},default:function(){return Gt}});var r=a(7294),n=a(3717),o=a(2757),s=a(2675),i=a(6554),A=a(7030),c=a(3179),l=a(780),m=a(5432),d=a(5893),f=(0,i.G)((function(t,e){const{borderLeftWidth:a,borderBottomWidth:r,borderTopWidth:n,borderRightWidth:o,borderWidth:s,borderStyle:i,borderColor:f,...g}=(0,A.mq)("Divider",t),{className:p,orientation:u="horizontal",__css:w,...b}=(0,c.Lr)(t),B={vertical:{borderLeftWidth:a||o||s||"1px",height:"100%"},horizontal:{borderBottomWidth:r||n||s||"1px",width:"100%"}};return(0,d.jsx)(l.m.hr,{ref:e,"aria-orientation":u,...b,__css:{...g,border:"0",borderColor:f,borderStyle:i,...B[u],...w},className:(0,m.cx)("chakra-divider",p)})}));f.displayName="Divider";var g=a(5227),[p,u]=(0,g.k)({strict:!1,name:"ButtonGroupContext"});function w(t){const{children:e,className:a,...n}=t,o=(0,r.isValidElement)(e)?(0,r.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,s=(0,m.cx)("chakra-button__icon",a);return(0,d.jsx)(l.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...n,className:s,children:o})}w.displayName="ButtonIcon";var b=a(1136);function B(t){const{label:e,placement:a,spacing:n="0.5rem",children:o=(0,d.jsx)(b.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:i,...A}=t,c=(0,m.cx)("chakra-button__spinner",s),f="start"===a?"marginEnd":"marginStart",g=(0,r.useMemo)((()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[f]:e?n:0,fontSize:"1em",lineHeight:"normal",...i})),[i,e,f,n]);return(0,d.jsx)(l.m.div,{className:c,...A,__css:g,children:o})}function y(...t){return e=>{t.forEach((t=>{!function(t,e){if(null!=t)if("function"!=typeof t)try{t.current=e}catch(a){throw new Error(`Cannot assign value '${e}' to ref '${t}'`)}else t(e)}(t,e)}))}}function h(...t){return(0,r.useMemo)((()=>y(...t)),t)}B.displayName="ButtonSpinner";var x=(0,i.G)(((t,e)=>{const a=u(),n=(0,A.mq)("Button",{...a,...t}),{isDisabled:o=(null==a?void 0:a.isDisabled),isLoading:s,isActive:i,children:f,leftIcon:g,rightIcon:p,loadingText:w,iconSpacing:b="0.5rem",type:y,spinner:x,spinnerPlacement:D="start",className:E,as:Q,...v}=(0,c.Lr)(t),F=(0,r.useMemo)((()=>{const t={...null==n?void 0:n._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...n,...!!a&&{_focus:t}}}),[n,a]),{ref:I,type:M}=function(t){const[e,a]=(0,r.useState)(!t);return{ref:(0,r.useCallback)((t=>{t&&a("BUTTON"===t.tagName)}),[]),type:e?"button":void 0}}(Q),Y={rightIcon:p,leftIcon:g,iconSpacing:b,children:f};return(0,d.jsxs)(l.m.button,{ref:h(e,I),as:Q,type:null!=y?y:M,"data-active":(0,m.PB)(i),"data-loading":(0,m.PB)(s),__css:F,className:(0,m.cx)("chakra-button",E),...v,disabled:o||s,children:[s&&"start"===D&&(0,d.jsx)(B,{className:"chakra-button__spinner--start",label:w,placement:"start",spacing:b,children:x}),s?w||(0,d.jsx)(l.m.span,{opacity:0,children:(0,d.jsx)(C,{...Y})}):(0,d.jsx)(C,{...Y}),s&&"end"===D&&(0,d.jsx)(B,{className:"chakra-button__spinner--end",label:w,placement:"end",spacing:b,children:x})]})}));function C(t){const{leftIcon:e,rightIcon:a,children:r,iconSpacing:n}=t;return(0,d.jsxs)(d.Fragment,{children:[e&&(0,d.jsx)(w,{marginEnd:n,children:e}),r,a&&(0,d.jsx)(w,{marginStart:n,children:a})]})}x.displayName="Button";var D=a(2474),E=a(353),Q=a(7747),v=(0,i.G)((function(t,e){const{htmlWidth:a,htmlHeight:r,alt:n,...o}=t;return(0,d.jsx)("img",{width:a,height:r,ref:e,alt:n,...o})}));v.displayName="NativeImage";var F=a(6245);function I(t,e=[]){const a=Object.assign({},t);for(const r of e)r in a&&delete a[r];return a}var M=(0,i.G)((function(t,e){const{fallbackSrc:a,fallback:n,src:o,srcSet:s,align:i,fit:A,loading:c,ignoreFallback:m,crossOrigin:f,fallbackStrategy:g="beforeLoadOrError",referrerPolicy:p,...u}=t,w=null!=c||m||!(void 0!==a||void 0!==n),b=function(t){const{loading:e,src:a,srcSet:n,onLoad:o,onError:s,crossOrigin:i,sizes:A,ignoreFallback:c}=t,[l,m]=(0,r.useState)("pending");(0,r.useEffect)((()=>{m(a?"loading":"pending")}),[a]);const d=(0,r.useRef)(),f=(0,r.useCallback)((()=>{if(!a)return;g();const t=new Image;t.src=a,i&&(t.crossOrigin=i),n&&(t.srcset=n),A&&(t.sizes=A),e&&(t.loading=e),t.onload=t=>{g(),m("loaded"),null==o||o(t)},t.onerror=t=>{g(),m("failed"),null==s||s(t)},d.current=t}),[a,i,n,A,o,s,e]),g=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return(0,F.G)((()=>{if(!c)return"loading"===l&&f(),()=>{g()}}),[l,f,c]),c?"loaded":l}({...t,crossOrigin:f,ignoreFallback:w}),B=((t,e)=>"loaded"!==t&&"beforeLoadOrError"===e||"failed"===t&&"onError"===e)(b,g),y={ref:e,objectFit:A,objectPosition:i,...w?u:I(u,["onError","onLoad"])};return B?n||(0,d.jsx)(l.m.img,{as:v,className:"chakra-image__placeholder",src:a,...y}):(0,d.jsx)(l.m.img,{as:v,src:o,srcSet:s,crossOrigin:f,loading:c,referrerPolicy:p,className:"chakra-image",...y})}));M.displayName="Image";var Y="data:image/png;base64,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",L=a.p+"static/banner--cloud-big@2x-91583d35491acff92073b3e6414942a0.png",N=a(7170),H=a.p+"static/banner--mountain-big@2x-9a71db931aa50ae896be7fdece64759c.png",O=a.p+"static/banner--mountain-medium@2x-cbf85d0ee89fdb3e404b7d942ee94b2f.png",S="data:image/png;base64,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",G=a.p+"static/banner--satellite@2x-a8eb2bc07baf14cdb5f799e0815258d4.png";function P(){return r.createElement(Q.xu,{position:"relative",bg:"primary.500",minHeight:{base:"20rem",md:"36rem"},paddingX:{base:"8",md:"16"},paddingY:{base:"8",md:"16"},display:"flex",flexFlow:"column",justifyContent:"center",alignItems:{base:"start",md:"center"},pointerEvents:"none"},r.createElement(n.k,{id:"banner--headline",position:"relative",zIndex:"5",height:"100%",flexFlow:{base:"column",md:"row"},gap:"4",pointerEvents:"auto"},r.createElement(o.X,{as:"h1",textTransform:"uppercase",display:"inline-flex",flexFlow:"column",color:"base.500"},r.createElement(s.x,{as:"span",fontSize:{base:"4rem",md:"8rem"},lineHeight:"1"},"Satsummit"),r.createElement(Q.xu,{as:"span",display:"flex",alignItems:"start",justifyContent:"end",gap:{base:"2",md:"4"},pr:{base:"2",md:"4"},mt:{base:"-2",md:"-4"}},r.createElement(s.x,{as:"span",textAlign:"right",fontSize:{base:"1.75rem",md:"3.5rem"},lineHeight:"0.875",mt:{base:"2",md:"4"}},"goes",r.createElement("br",{style:{lineHeight:"0.875"}})," to"),r.createElement(s.x,{as:"span",fontSize:{base:"4rem",md:"8rem"},lineHeight:"1",position:"relative",zIndex:"1",_before:{content:'""',backgroundColor:"secondary.500",position:"absolute",width:"100%",height:"0.5em",bottom:"0.05em",zIndex:"-1"}},"Lisbon"))),r.createElement(Q.xu,{bg:"base.500",color:"white",position:"absolute",bottom:{base:"-6rem",md:"-7.5rem",lg:"-5.5rem"},left:{base:"1.25rem",md:"16rem",lg:"6.5rem"},transform:{md:"translateX(calc(-100% - 1rem))"},alignSelf:{base:"start",md:"center"},p:"4",_after:{position:"absolute",content:'""',width:"1.5rem",height:"1rem",background:"base.500",left:{base:"0",lg:"auto"},right:{lg:"0"},bottom:"100%",clipPath:"polygon(100% 0, 0% 100%, 100% 100%)"}},r.createElement(o.X,{as:"p",textTransform:"uppercase",fontSize:{base:"1.5rem",md:"2rem"},lineHeight:"1",whiteSpace:"nowrap"},"November",r.createElement("br",null),"18 & 19, 2024"))),r.createElement(M,{src:Y,alt:"A plain yellow shape illustrating the sun over a deep blue sky.",position:"absolute",zIndex:"1",top:{base:"3rem",md:"auto"},bottom:{base:"auto",md:"19rem"},left:{base:"1rem",md:"calc(50% + 6rem)"},width:{base:"6rem",md:"12rem"}}),r.createElement(M,{src:G,alt:"A piece of collage illustrating a satellite.",position:"absolute",zIndex:"6",top:{base:"-1.5rem",md:"-2rem",lg:"-4rem"},right:{base:"4%",sm:"8%",md:"calc(50% + 8rem)"},width:{base:"10rem",sm:"12rem",md:"16rem",lg:"20rem"}}),r.createElement(Q.xu,{id:"banner--background",position:"absolute",inset:"0",overflowX:"hidden"},r.createElement(Q.xu,{id:"banner--clouds",position:"absolute",zIndex:"2",inset:{base:"0",md:"0 0 0 calc(50%)"},transform:{base:"none",md:"translateX(-50%)"},width:{base:"132rem",md:"134rem",lg:"136rem"},overflow:"hidden"},r.createElement(M,{src:L,alt:"A piece of collage illustrating big clouds.",position:"absolute",bottom:"0",right:{base:"20rem",md:"calc(50% + 14rem)"},width:{base:"32rem",md:"52rem",lg:"54rem"}}),r.createElement(M,{src:N.Z,alt:"A piece of collage illustrating small clouds.",position:"absolute",bottom:"0",left:{base:"22rem",md:"calc(50% + 24rem)"},width:{base:"26rem",md:"42rem",lg:"44rem"}})),r.createElement(Q.xu,{id:"banner--mountains",position:"absolute",zIndex:"3",inset:{base:"0",md:"0 0 0 calc(50%)"},transform:{base:"none",md:"translateX(-50%)"},width:"98rem",overflow:"hidden"},r.createElement(M,{src:S,alt:"A plain white triangle shape illustrating a smaller mountain next to a summit.",position:"absolute",right:"calc(50% + 25rem)",bottom:"0",width:{base:"16rem",md:"22rem",lg:"24rem"}}),r.createElement(M,{src:O,alt:"A plain white triangle shape illustrating an average mountain next to a summit.",position:"absolute",left:{base:"10rem",md:"calc(50% - 3rem)"},bottom:"0",width:{base:"28rem",md:"50rem",lg:"52rem"}}),r.createElement(M,{src:H,alt:"A plain white triangle shape illustrating a summit.",position:"absolute",left:{base:"-12rem",md:"50%"},transform:{base:"none",md:"translateX(-50%)"},bottom:"0",width:{base:"46rem",md:"78rem",lg:"80rem"}}))))}var k=a(6500),J=a(4001),X=a(9674),z=(a(6751),a(434),a(8679),a(8202),a(7278),d.Fragment);function R(t,e,a){return X.h.call(e,"css")?d.jsx(X.E,(0,X.c)(t,e),a):d.jsx(t,e,a)}var K=a(917),T=Object.defineProperty,V=(t,e,a)=>(((t,e,a)=>{e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a})(t,"symbol"!=typeof e?e+"":e,a),a),U=new Map,j=new WeakMap,q=0,Z=void 0;function W(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(a=t.root,a?(j.has(a)||(q+=1,j.set(a,q.toString())),j.get(a)):"0"):t[e]}`;var a})).toString()}function _(t,e,a={},r=Z){if(void 0===window.IntersectionObserver&&void 0!==r){const n=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:"number"==typeof a.threshold?a.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:o,elements:s}=function(t){const e=W(t);let a=U.get(e);if(!a){const r=new Map;let n;const o=new IntersectionObserver((e=>{e.forEach((e=>{var a;const o=e.isIntersecting&&n.some((t=>e.intersectionRatio>=t));t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=o),null==(a=r.get(e.target))||a.forEach((t=>{t(o,e)}))}))}),t);n=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),a={id:e,observer:o,elements:r},U.set(e,a)}return a}(a),i=s.get(t)||[];return s.has(t)||s.set(t,i),i.push(e),o.observe(t),function(){i.splice(i.indexOf(e),1),0===i.length&&(s.delete(t),o.unobserve(t)),0===s.size&&(o.disconnect(),U.delete(n))}}var $=class extends r.Component{constructor(t){super(t),V(this,"node",null),V(this,"_unobserveCb",null),V(this,"handleNode",(t=>{this.node&&(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()})),V(this,"handleChange",((t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),function(t){return"function"!=typeof t.children}(this.props)||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)})),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:a,trackVisibility:r,delay:n,fallbackInView:o}=this.props;this._unobserveCb=_(this.node,this.handleChange,{threshold:t,root:e,rootMargin:a,trackVisibility:r,delay:n},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if("function"==typeof t){const{inView:e,entry:a}=this.state;return t({inView:e,entry:a,ref:this.handleNode})}const{as:e,triggerOnce:a,threshold:n,root:o,rootMargin:s,onChange:i,skip:A,trackVisibility:c,delay:l,initialInView:m,fallbackInView:d,...f}=this.props;return r.createElement(e||"div",{ref:this.handleNode,...f},t)}};function tt({threshold:t,delay:e,trackVisibility:a,rootMargin:n,root:o,triggerOnce:s,skip:i,initialInView:A,fallbackInView:c,onChange:l}={}){var m;const[d,f]=r.useState(null),g=r.useRef(),[p,u]=r.useState({inView:!!A,entry:void 0});g.current=l,r.useEffect((()=>{if(i||!d)return;let r;return r=_(d,((t,e)=>{u({inView:t,entry:e}),g.current&&g.current(t,e),e.isIntersecting&&s&&r&&(r(),r=void 0)}),{root:o,rootMargin:n,threshold:t,trackVisibility:a,delay:e},c),()=>{r&&r()}}),[Array.isArray(t)?t.toString():t,d,o,n,s,i,a,c,e]);const w=null==(m=p.entry)?void 0:m.target,b=r.useRef();d||!w||s||i||b.current===w||(b.current=w,u({inView:!!A,entry:void 0}));const B=[f,p.inView,p.entry];return B.ref=B[0],B.inView=B[1],B.entry=B[2],B}var et=a(4954);K.F4`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,K.F4`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,K.F4`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,K.F4`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,K.F4`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,K.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,K.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,K.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,K.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,K.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,K.F4`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,K.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,K.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const at=K.F4`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,rt=K.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nt=K.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ot=K.F4`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,st=K.F4`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,it=K.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,At=K.F4`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ct=K.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lt=K.F4`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mt=K.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,dt=K.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ft=K.F4`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gt=K.F4`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function pt(t,e){return a=>a?t():e()}function ut(t){return pt(t,(()=>null))}function wt(t){return ut((()=>({opacity:0})))(t)}const bt=t=>{const{cascade:e=!1,damping:a=.5,delay:n=0,duration:o=1e3,fraction:s=0,keyframes:i=it,triggerOnce:A=!1,className:c,style:l,childClassName:m,childStyle:d,children:f,onVisibilityChange:g}=t,p=(0,r.useMemo)((()=>function({duration:t=1e3,delay:e=0,timingFunction:a="ease",keyframes:r=it,iterationCount:n=1}){return K.iv`
    animation-duration: ${t}ms;
    animation-timing-function: ${a};
    animation-delay: ${e}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:i,duration:o})),[o,i]);return null==f?null:"string"==typeof(u=f)||"number"==typeof u||"boolean"==typeof u?R(yt,{...t,animationStyles:p,children:String(f)}):(0,et.isFragment)(f)?R(ht,{...t,animationStyles:p}):R(z,{children:r.Children.map(f,((i,f)=>{if(!(0,r.isValidElement)(i))return null;const u=n+(e?f*o*a:0);switch(i.type){case"ol":case"ul":return R(K.ms,{children:({cx:e})=>R(i.type,{...i.props,className:e(c,i.props.className),style:Object.assign({},l,i.props.style),children:R(bt,{...t,children:i.props.children})})});case"li":return R($,{threshold:s,triggerOnce:A,onChange:g,children:({inView:t,ref:e})=>R(K.ms,{children:({cx:a})=>R(i.type,{...i.props,ref:e,className:a(m,i.props.className),css:ut((()=>p))(t),style:Object.assign({},d,i.props.style,wt(!t),{animationDelay:u+"ms"})})})});default:return R($,{threshold:s,triggerOnce:A,onChange:g,children:({inView:t,ref:e})=>R("div",{ref:e,className:c,css:ut((()=>p))(t),style:Object.assign({},l,wt(!t),{animationDelay:u+"ms"}),children:R(K.ms,{children:({cx:t})=>R(i.type,{...i.props,className:t(m,i.props.className),style:Object.assign({},d,i.props.style)})})})})}}))});var u},Bt={display:"inline-block",whiteSpace:"pre"},yt=t=>{const{animationStyles:e,cascade:a=!1,damping:r=.5,delay:n=0,duration:o=1e3,fraction:s=0,triggerOnce:i=!1,className:A,style:c,children:l,onVisibilityChange:m}=t,{ref:d,inView:f}=tt({triggerOnce:i,threshold:s,onChange:m});return pt((()=>R("div",{ref:d,className:A,style:Object.assign({},c,Bt),children:l.split("").map(((t,a)=>R("span",{css:ut((()=>e))(f),style:{animationDelay:n+a*o*r+"ms"},children:t},a)))})),(()=>R(ht,{...t,children:l})))(a)},ht=t=>{const{animationStyles:e,fraction:a=0,triggerOnce:r=!1,className:n,style:o,children:s,onVisibilityChange:i}=t,{ref:A,inView:c}=tt({triggerOnce:r,threshold:a,onChange:i});return R("div",{ref:A,className:n,css:ut((()=>e))(c),style:Object.assign({},o,wt(!c)),children:s})};K.F4`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,K.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,K.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,K.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,K.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,K.F4`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,K.F4`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,K.F4`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,K.F4`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,K.F4`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const xt=K.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Ct=K.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Dt=K.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Et=K.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Qt=K.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,vt=K.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Ft=K.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,It=K.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Mt=K.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Yt=K.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Lt=K.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Nt=K.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ht=K.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const Ot=t=>{const{big:e=!1,direction:a,reverse:n=!1,...o}=t,s=(0,r.useMemo)((()=>function(t,e,a){switch(a){case"bottom-left":return e?Ct:rt;case"bottom-right":return e?Dt:nt;case"down":return t?e?Qt:st:e?Et:ot;case"left":return t?e?Ft:At:e?vt:it;case"right":return t?e?Mt:lt:e?It:ct;case"top-left":return e?Yt:mt;case"top-right":return e?Lt:dt;case"up":return t?e?Ht:gt:e?Nt:ft;default:return e?xt:at}}(e,n,a)),[e,a,n]);return R(bt,{keyframes:s,...o})};K.F4`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,K.F4`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,K.F4`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,K.F4`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,K.F4`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;K.F4`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,K.F4`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,K.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,K.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;K.F4`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,K.F4`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,K.F4`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,K.F4`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,K.F4`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,K.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,K.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,K.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,K.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,K.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;K.F4`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,K.F4`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,K.F4`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,K.F4`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,K.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,K.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,K.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,K.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;K.F4`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,K.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,K.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,K.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,K.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,K.F4`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,K.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,K.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,K.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,K.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const St=(0,i.G)(((t,e)=>r.createElement(l.m.div,Object.assign({as:Ot,ref:e},t))));function Gt(){return r.createElement(E.Z,null,r.createElement(P,null),r.createElement(n.k,{flexFlow:"column",gap:"8",py:{base:"8",md:"12",lg:"20"},px:{base:"4",md:"8",lg:"12"},position:"relative",zIndex:"30",mt:{base:"0",md:"-16",lg:"-32"}},r.createElement(k.qF,{alignItems:"end"},r.createElement(St,{direction:"up",triggerOnce:!0,gridColumn:{base:"1/-1",md:"1/ span 4",lg:"2/ span 5"}},r.createElement(k.zG,{display:"flex",flexFlow:"column",gap:{base:"4",lg:"8"}},r.createElement(o.X,{size:"2xl"},"About"),r.createElement(s.x,null,r.createElement("strong",null,"SatSummit")," convenes leaders in the satellite industry and experts in global development for 2 days of presentations and in-depth conversations on solving the world's most critical development challenges with satellite data."))),r.createElement(St,{direction:"up",triggerOnce:!0,gridColumn:"1/-1",display:{md:"none"}},r.createElement(f,{borderColor:"base.200a",size:"md"})),r.createElement(St,{direction:"up",triggerOnce:!0,gridColumn:{base:"1/-1",md:"5/ span 4",lg:"7/ span 5"}},r.createElement(k.zG,{display:"flex",flexFlow:"column",gap:{base:"4",lg:"8"}},r.createElement(o.X,{size:"2xl"},"Stay tuned"),r.createElement(s.x,null,"From climate change to population growth to natural resource availability, earth observation data offers insights into today's biggest global issues."),r.createElement(s.x,null,"Stay tuned for more information on ",r.createElement("strong",null,"SatSummit")," ","going to ",r.createElement("strong",null,"Lisbon, Portugal"),"!"),r.createElement(x,{as:"a",href:"http://23425005.hs-sites.com/en-us/lisbon-satsummit-2024",colorScheme:"primary",alignSelf:"start",rightIcon:r.createElement(D.KYK,null),size:{base:"md",lg:"lg"}},"Be notified"))))))}const Pt=()=>r.createElement(J.Z,{title:"Save the Date"})},4415:function(t,e){var a,r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.server_context"),m=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),u=Symbol.for("react.offscreen");function w(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case o:case i:case s:case d:case f:return t;default:switch(t=t&&t.$$typeof){case l:case c:case m:case p:case g:case A:return t;default:return e}}case n:return e}}}a=Symbol.for("react.module.reference"),e.isFragment=function(t){return w(t)===o}},4954:function(t,e,a){t.exports=a(4415)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1c62d5c79560512de1fb.js.map