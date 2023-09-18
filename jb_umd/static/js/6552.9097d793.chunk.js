"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6552],{99051:function(n,e,t){t.d(e,{d:function(){return s}});var r=t(96902),o=t(69989),i=t(41561),a=t(62009),u=t(29938);function c(n){return n.substring(2).toLowerCase()}function s(n){var e=n.children,t=n.disableReactTree,s=void 0!==t&&t,l=n.mouseEvent,f=void 0===l?"onClick":l,d=n.onClickAway,v=n.touchEvent,m=void 0===v?"onTouchEnd":v,h=r.useRef(!1),p=r.useRef(null),g=r.useRef(!1),Z=r.useRef(!1);r.useEffect((function(){return setTimeout((function(){g.current=!0}),0),function(){g.current=!1}}),[]);var w=(0,o.Z)(e.ref,p),b=(0,i.Z)((function(n){var e=Z.current;Z.current=!1;var t=(0,a.Z)(p.current);!g.current||!p.current||"clientX"in n&&function(n,e){return e.documentElement.clientWidth<n.clientX||e.documentElement.clientHeight<n.clientY}(n,t)||(h.current?h.current=!1:(n.composedPath?n.composedPath().indexOf(p.current)>-1:!t.documentElement.contains(n.target)||p.current.contains(n.target))||!s&&e||d(n))})),E=function(n){return function(t){Z.current=!0;var r=e.props[n];r&&r(t)}},k={ref:w};return!1!==m&&(k[m]=E(m)),r.useEffect((function(){if(!1!==m){var n=c(m),e=(0,a.Z)(p.current),t=function(){h.current=!0};return e.addEventListener(n,b),e.addEventListener("touchmove",t),function(){e.removeEventListener(n,b),e.removeEventListener("touchmove",t)}}}),[b,m]),!1!==f&&(k[f]=E(f)),r.useEffect((function(){if(!1!==f){var n=c(f),e=(0,a.Z)(p.current);return e.addEventListener(n,b),function(){e.removeEventListener(n,b)}}}),[b,f]),(0,u.jsx)(r.Fragment,{children:r.cloneElement(e,k)})}},66552:function(n,e,t){t.d(e,{Z:function(){return L}});var r=t(96234),o=t(56666),i=t(31461),a=t(7896),u=t(96902),c=t(73674),s=t(59253),l=t(99051),f=t(41561),d=t(45342);var v=t(2252),m=t(88636),h=t(53068),p=t(70378),g=t(8281),Z=t(29538),w=t(32914),b=t(29938),E=["onEnter","onExited"],k=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],C=(0,v.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["anchorOrigin".concat((0,p.Z)(t.anchorOrigin.vertical)).concat((0,p.Z)(t.anchorOrigin.horizontal))]]}})((function(n){var e=n.theme,t=n.ownerState;return(0,a.Z)({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===t.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===t.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===t.anchorOrigin.horizontal&&{justifyContent:"flex-end"},(0,o.Z)({},e.breakpoints.up("sm"),(0,a.Z)({},"top"===t.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===t.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===t.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===t.anchorOrigin.horizontal&&{right:24,left:"auto"})))})),x=u.forwardRef((function(n,e){var t=(0,h.Z)({props:n,name:"MuiSnackbar"}),o=(0,m.Z)(),v={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},x=t.action,L=t.anchorOrigin,y=void 0===L?{vertical:"bottom",horizontal:"left"}:L,O=y.vertical,S=y.horizontal,R=t.autoHideDuration,P=void 0===R?null:R,T=t.children,M=t.className,j=t.ClickAwayListenerProps,z=t.ContentProps,B=t.disableWindowBlurListener,D=void 0!==B&&B,A=t.message,N=t.open,H=t.TransitionComponent,W=void 0===H?g.Z:H,_=t.transitionDuration,F=void 0===_?v:_,I=t.TransitionProps,X=void 0===I?{}:I,G=X.onEnter,q=X.onExited,K=(0,i.Z)(t.TransitionProps,E),Y=(0,i.Z)(t,k),J=(0,a.Z)({},t,{anchorOrigin:{vertical:O,horizontal:S},autoHideDuration:P,disableWindowBlurListener:D,TransitionComponent:W,transitionDuration:F}),Q=function(n){var e=n.classes,t=n.anchorOrigin,r={root:["root","anchorOrigin".concat((0,p.Z)(t.vertical)).concat((0,p.Z)(t.horizontal))]};return(0,c.Z)(r,w.h,e)}(J),U=function(n){var e=n.autoHideDuration,t=void 0===e?null:e,r=n.disableWindowBlurListener,o=void 0!==r&&r,i=n.onClose,c=n.open,s=n.resumeHideDuration,l=u.useRef();u.useEffect((function(){if(c)return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)};function n(n){n.defaultPrevented||"Escape"!==n.key&&"Esc"!==n.key||null==i||i(n,"escapeKeyDown")}}),[c,i]);var v=(0,f.Z)((function(n,e){null==i||i(n,e)})),m=(0,f.Z)((function(n){i&&null!=n&&(clearTimeout(l.current),l.current=setTimeout((function(){v(null,"timeout")}),n))}));u.useEffect((function(){return c&&m(t),function(){clearTimeout(l.current)}}),[c,t,m]);var h=function(){clearTimeout(l.current)},p=u.useCallback((function(){null!=t&&m(null!=s?s:.5*t)}),[t,s,m]),g=function(n){return function(e){var t=n.onBlur;null==t||t(e),p()}},Z=function(n){return function(e){var t=n.onFocus;null==t||t(e),h()}},w=function(n){return function(e){var t=n.onMouseEnter;null==t||t(e),h()}},b=function(n){return function(e){var t=n.onMouseLeave;null==t||t(e),p()}};return u.useEffect((function(){if(!o&&c)return window.addEventListener("focus",p),window.addEventListener("blur",h),function(){window.removeEventListener("focus",p),window.removeEventListener("blur",h)}}),[o,p,c]),{getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,d._)(n),r=(0,a.Z)({},t,e);return(0,a.Z)({role:"presentation"},r,{onBlur:g(r),onFocus:Z(r),onMouseEnter:w(r),onMouseLeave:b(r)})},onClickAway:function(n){null==i||i(n,"clickaway")}}}((0,a.Z)({},J)),V=U.getRootProps,$=U.onClickAway,nn=u.useState(!0),en=(0,r.Z)(nn,2),tn=en[0],rn=en[1],on=(0,s.y)({elementType:C,getSlotProps:V,externalForwardedProps:Y,ownerState:J,additionalProps:{ref:e},className:[Q.root,M]});return!N&&tn?null:(0,b.jsx)(l.d,(0,a.Z)({onClickAway:$},j,{children:(0,b.jsx)(C,(0,a.Z)({},on,{children:(0,b.jsx)(W,(0,a.Z)({appear:!0,in:N,timeout:F,direction:"top"===O?"down":"up",onEnter:function(n,e){rn(!1),G&&G(n,e)},onExited:function(n){rn(!0),q&&q(n)}},K,{children:T||(0,b.jsx)(Z.Z,(0,a.Z)({message:A,action:x},z))}))}))}))})),L=x},32914:function(n,e,t){t.d(e,{h:function(){return i}});var r=t(74732),o=t(61235);function i(n){return(0,o.Z)("MuiSnackbar",n)}var a=(0,r.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);e.Z=a},29538:function(n,e,t){var r=t(56666),o=t(31461),i=t(7896),a=t(96902),u=t(37032),c=t(73674),s=t(16644),l=t(2252),f=t(53068),d=t(6880),v=t(13233),m=t(29938),h=["action","className","message","role"],p=(0,l.ZP)(d.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(n){var e=n.theme,t="light"===e.palette.mode?.8:.98,o=(0,s._4)(e.palette.background.default,t);return(0,i.Z)({},e.typography.body2,(0,r.Z)({color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(o),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}))})),g=(0,l.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:function(n,e){return e.message}})({padding:"8px 0"}),Z=(0,l.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:function(n,e){return e.action}})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),w=a.forwardRef((function(n,e){var t=(0,f.Z)({props:n,name:"MuiSnackbarContent"}),r=t.action,a=t.className,s=t.message,l=t.role,d=void 0===l?"alert":l,w=(0,o.Z)(t,h),b=t,E=function(n){var e=n.classes;return(0,c.Z)({root:["root"],action:["action"],message:["message"]},v.A,e)}(b);return(0,m.jsxs)(p,(0,i.Z)({role:d,square:!0,elevation:6,className:(0,u.Z)(E.root,a),ownerState:b,ref:e},w,{children:[(0,m.jsx)(g,{className:E.message,ownerState:b,children:s}),r?(0,m.jsx)(Z,{className:E.action,ownerState:b,children:r}):null]}))}));e.Z=w},13233:function(n,e,t){t.d(e,{A:function(){return i}});var r=t(74732),o=t(61235);function i(n){return(0,o.Z)("MuiSnackbarContent",n)}var a=(0,r.Z)("MuiSnackbarContent",["root","message","action"]);e.Z=a}}]);
//# sourceMappingURL=6552.9097d793.chunk.js.map