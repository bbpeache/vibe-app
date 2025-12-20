(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function RI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fv={exports:{}},Pu={},jv={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),CI=Symbol.for("react.portal"),PI=Symbol.for("react.fragment"),NI=Symbol.for("react.strict_mode"),bI=Symbol.for("react.profiler"),DI=Symbol.for("react.provider"),OI=Symbol.for("react.context"),LI=Symbol.for("react.forward_ref"),VI=Symbol.for("react.suspense"),MI=Symbol.for("react.memo"),FI=Symbol.for("react.lazy"),ag=Symbol.iterator;function jI(t){return t===null||typeof t!="object"?null:(t=ag&&t[ag]||t["@@iterator"],typeof t=="function"?t:null)}var Uv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zv=Object.assign,Bv={};function vs(t,e,n){this.props=t,this.context=e,this.refs=Bv,this.updater=n||Uv}vs.prototype.isReactComponent={};vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $v(){}$v.prototype=vs.prototype;function ef(t,e,n){this.props=t,this.context=e,this.refs=Bv,this.updater=n||Uv}var tf=ef.prototype=new $v;tf.constructor=ef;zv(tf,vs.prototype);tf.isPureReactComponent=!0;var lg=Array.isArray,Wv=Object.prototype.hasOwnProperty,nf={current:null},qv={key:!0,ref:!0,__self:!0,__source:!0};function Hv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Wv.call(e,r)&&!qv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ca,type:t,key:s,ref:o,props:i,_owner:nf.current}}function UI(t,e){return{$$typeof:ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ca}function zI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ug=/\/+/g;function qc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zI(""+t.key):e.toString(36)}function vl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ca:case CI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+qc(o,0):r,lg(i)?(n="",t!=null&&(n=t.replace(ug,"$&/")+"/"),vl(i,e,n,"",function(d){return d})):i!=null&&(rf(i)&&(i=UI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ug,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",lg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+qc(s,l);o+=vl(s,e,n,u,i)}else if(u=jI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+qc(s,l++),o+=vl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var r=[],i=0;return vl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function BI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},_l={transition:null},$I={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:_l,ReactCurrentOwner:nf};function Kv(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!rf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=vs;ee.Fragment=PI;ee.Profiler=bI;ee.PureComponent=ef;ee.StrictMode=NI;ee.Suspense=VI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$I;ee.act=Kv;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=zv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Wv.call(e,u)&&!qv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:ca,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:OI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DI,_context:t},t.Consumer=t};ee.createElement=Hv;ee.createFactory=function(t){var e=Hv.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:LI,render:t}};ee.isValidElement=rf;ee.lazy=function(t){return{$$typeof:FI,_payload:{_status:-1,_result:t},_init:BI}};ee.memo=function(t,e){return{$$typeof:MI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=_l.transition;_l.transition={};try{t()}finally{_l.transition=e}};ee.unstable_act=Kv;ee.useCallback=function(t,e){return vt.current.useCallback(t,e)};ee.useContext=function(t){return vt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return vt.current.useEffect(t,e)};ee.useId=function(){return vt.current.useId()};ee.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return vt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};ee.useRef=function(t){return vt.current.useRef(t)};ee.useState=function(t){return vt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return vt.current.useTransition()};ee.version="18.3.1";jv.exports=ee;var H=jv.exports;const lr=RI(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WI=H,qI=Symbol.for("react.element"),HI=Symbol.for("react.fragment"),KI=Object.prototype.hasOwnProperty,GI=WI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QI={key:!0,ref:!0,__self:!0,__source:!0};function Gv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)KI.call(e,r)&&!QI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qI,type:t,key:s,ref:o,props:i,_owner:GI.current}}Pu.Fragment=HI;Pu.jsx=Gv;Pu.jsxs=Gv;Fv.exports=Pu;var m=Fv.exports,Dd={},Qv={exports:{}},Lt={},Yv={exports:{}},Jv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var Z=B.length;B.push(Q);e:for(;0<Z;){var ve=Z-1>>>1,ue=B[ve];if(0<i(ue,Q))B[ve]=Q,B[Z]=ue,Z=ve;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],Z=B.pop();if(Z!==Q){B[0]=Z;e:for(var ve=0,ue=B.length,Ce=ue>>>1;ve<Ce;){var In=2*(ve+1)-1,Tn=B[In],Sn=In+1,An=B[Sn];if(0>i(Tn,Z))Sn<ue&&0>i(An,Tn)?(B[ve]=An,B[Sn]=Z,ve=Sn):(B[ve]=Tn,B[In]=Z,ve=In);else if(Sn<ue&&0>i(An,Z))B[ve]=An,B[Sn]=Z,ve=Sn;else break e}}return Q}function i(B,Q){var Z=B.sortIndex-Q.sortIndex;return Z!==0?Z:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],f=1,p=null,y=3,_=!1,R=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(B){for(var Q=n(d);Q!==null;){if(Q.callback===null)r(d);else if(Q.startTime<=B)r(d),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(d)}}function D(B){if(N=!1,x(B),!R)if(n(u)!==null)R=!0,Ps(z);else{var Q=n(d);Q!==null&&En(D,Q.startTime-B)}}function z(B,Q){R=!1,N&&(N=!1,A(v),v=-1),_=!0;var Z=y;try{for(x(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||B&&!k());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,y=p.priorityLevel;var ue=ve(p.expirationTime<=Q);Q=t.unstable_now(),typeof ue=="function"?p.callback=ue:p===n(u)&&r(u),x(Q)}else r(u);p=n(u)}if(p!==null)var Ce=!0;else{var In=n(d);In!==null&&En(D,In.startTime-Q),Ce=!1}return Ce}finally{p=null,y=Z,_=!1}}var j=!1,I=null,v=-1,E=5,S=-1;function k(){return!(t.unstable_now()-S<E)}function C(){if(I!==null){var B=t.unstable_now();S=B;var Q=!0;try{Q=I(!0,B)}finally{Q?T():(j=!1,I=null)}}else j=!1}var T;if(typeof w=="function")T=function(){w(C)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,Vr=ht.port2;ht.port1.onmessage=C,T=function(){Vr.postMessage(null)}}else T=function(){O(C,0)};function Ps(B){I=B,j||(j=!0,T())}function En(B,Q){v=O(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||_||(R=!0,Ps(z))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var Z=y;y=Q;try{return B()}finally{y=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=y;y=B;try{return Q()}finally{y=Z}},t.unstable_scheduleCallback=function(B,Q,Z){var ve=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ve+Z:ve):Z=ve,B){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Z+ue,B={id:f++,callback:Q,priorityLevel:B,startTime:Z,expirationTime:ue,sortIndex:-1},Z>ve?(B.sortIndex=Z,e(d,B),n(u)===null&&B===n(d)&&(N?(A(v),v=-1):N=!0,En(D,Z-ve))):(B.sortIndex=ue,e(u,B),R||_||(R=!0,Ps(z))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var Q=y;return function(){var Z=y;y=Q;try{return B.apply(this,arguments)}finally{y=Z}}}})(Jv);Yv.exports=Jv;var YI=Yv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JI=H,Ot=YI;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xv=new Set,Co={};function hi(t,e){Ji(t,e),Ji(t+"Capture",e)}function Ji(t,e){for(Co[t]=e,t=0;t<e.length;t++)Xv.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Od=Object.prototype.hasOwnProperty,XI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cg={},dg={};function ZI(t){return Od.call(dg,t)?!0:Od.call(cg,t)?!1:XI.test(t)?dg[t]=!0:(cg[t]=!0,!1)}function eT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tT(t,e,n,r){if(e===null||typeof e>"u"||eT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var sf=/[\-:]([a-z])/g;function of(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sf,of);Xe[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sf,of);Xe[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sf,of);Xe[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function af(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tT(e,n,i,r)&&(n=null),r||i===null?ZI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=JI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),xi=Symbol.for("react.portal"),Ri=Symbol.for("react.fragment"),lf=Symbol.for("react.strict_mode"),Ld=Symbol.for("react.profiler"),Zv=Symbol.for("react.provider"),e_=Symbol.for("react.context"),uf=Symbol.for("react.forward_ref"),Vd=Symbol.for("react.suspense"),Md=Symbol.for("react.suspense_list"),cf=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),t_=Symbol.for("react.offscreen"),hg=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=hg&&t[hg]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Hc;function no(t){if(Hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hc=e&&e[1]||""}return`
`+Hc+t}var Kc=!1;function Gc(t,e){if(!t||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?no(t):""}function nT(t){switch(t.tag){case 5:return no(t.type);case 16:return no("Lazy");case 13:return no("Suspense");case 19:return no("SuspenseList");case 0:case 2:case 15:return t=Gc(t.type,!1),t;case 11:return t=Gc(t.type.render,!1),t;case 1:return t=Gc(t.type,!0),t;default:return""}}function Fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ri:return"Fragment";case xi:return"Portal";case Ld:return"Profiler";case lf:return"StrictMode";case Vd:return"Suspense";case Md:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case e_:return(t.displayName||"Context")+".Consumer";case Zv:return(t._context.displayName||"Context")+".Provider";case uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cf:return e=t.displayName||null,e!==null?e:Fd(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return Fd(t(e))}catch{}}return null}function rT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fd(e);case 8:return e===lf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function n_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iT(t){var e=n_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=iT(t))}function r_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=n_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jd(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function i_(t,e){e=e.checked,e!=null&&af(t,"checked",e,!1)}function Ud(t,e){i_(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zd(t,e.type,n):e.hasOwnProperty("defaultValue")&&zd(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zd(t,e,n){(e!=="number"||jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ro=Array.isArray;function Ui(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Bd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(ro(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function s_(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function o_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?o_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,a_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sT=["Webkit","ms","Moz","O"];Object.keys(fo).forEach(function(t){sT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fo[e]=fo[t]})});function l_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fo.hasOwnProperty(t)&&fo[t]?(""+e).trim():e+"px"}function u_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=l_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var oT=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wd(t,e){if(e){if(oT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function qd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hd=null;function df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kd=null,zi=null,Bi=null;function yg(t){if(t=fa(t)){if(typeof Kd!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Lu(e),Kd(t.stateNode,t.type,e))}}function c_(t){zi?Bi?Bi.push(t):Bi=[t]:zi=t}function d_(){if(zi){var t=zi,e=Bi;if(Bi=zi=null,yg(t),e)for(t=0;t<e.length;t++)yg(e[t])}}function h_(t,e){return t(e)}function f_(){}var Qc=!1;function p_(t,e,n){if(Qc)return t(e,n);Qc=!0;try{return h_(t,e,n)}finally{Qc=!1,(zi!==null||Bi!==null)&&(f_(),d_())}}function No(t,e){var n=t.stateNode;if(n===null)return null;var r=Lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var Gd=!1;if(Mn)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Gd=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Gd=!1}function aT(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var po=!1,Ul=null,zl=!1,Qd=null,lT={onError:function(t){po=!0,Ul=t}};function uT(t,e,n,r,i,s,o,l,u){po=!1,Ul=null,aT.apply(lT,arguments)}function cT(t,e,n,r,i,s,o,l,u){if(uT.apply(this,arguments),po){if(po){var d=Ul;po=!1,Ul=null}else throw Error(M(198));zl||(zl=!0,Qd=d)}}function fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vg(t){if(fi(t)!==t)throw Error(M(188))}function dT(t){var e=t.alternate;if(!e){if(e=fi(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vg(i),t;if(s===r)return vg(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function g_(t){return t=dT(t),t!==null?y_(t):null}function y_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=y_(t);if(e!==null)return e;t=t.sibling}return null}var v_=Ot.unstable_scheduleCallback,_g=Ot.unstable_cancelCallback,hT=Ot.unstable_shouldYield,fT=Ot.unstable_requestPaint,Ne=Ot.unstable_now,pT=Ot.unstable_getCurrentPriorityLevel,hf=Ot.unstable_ImmediatePriority,__=Ot.unstable_UserBlockingPriority,Bl=Ot.unstable_NormalPriority,mT=Ot.unstable_LowPriority,w_=Ot.unstable_IdlePriority,Nu=null,pn=null;function gT(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Nu,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:_T,yT=Math.log,vT=Math.LN2;function _T(t){return t>>>=0,t===0?32:31-(yT(t)/vT|0)|0}var Za=64,el=4194304;function io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $l(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=io(l):(s&=o,s!==0&&(r=io(s)))}else o=n&~i,o!==0?r=io(o):s!==0&&(r=io(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function wT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ET(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=wT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Yd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function E_(){var t=Za;return Za<<=1,!(Za&4194240)&&(Za=64),t}function Yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function IT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ff(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function I_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var T_,pf,S_,A_,k_,Jd=!1,tl=[],ur=null,cr=null,dr=null,bo=new Map,Do=new Map,nr=[],TT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wg(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(e.pointerId)}}function Hs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fa(e),e!==null&&pf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ST(t,e,n,r,i){switch(e){case"focusin":return ur=Hs(ur,t,e,n,r,i),!0;case"dragenter":return cr=Hs(cr,t,e,n,r,i),!0;case"mouseover":return dr=Hs(dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bo.set(s,Hs(bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Do.set(s,Hs(Do.get(s)||null,t,e,n,r,i)),!0}return!1}function x_(t){var e=Wr(t.target);if(e!==null){var n=fi(e);if(n!==null){if(e=n.tag,e===13){if(e=m_(n),e!==null){t.blockedOn=e,k_(t.priority,function(){S_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hd=r,n.target.dispatchEvent(r),Hd=null}else return e=fa(n),e!==null&&pf(e),t.blockedOn=n,!1;e.shift()}return!0}function Eg(t,e,n){wl(t)&&n.delete(e)}function AT(){Jd=!1,ur!==null&&wl(ur)&&(ur=null),cr!==null&&wl(cr)&&(cr=null),dr!==null&&wl(dr)&&(dr=null),bo.forEach(Eg),Do.forEach(Eg)}function Ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Jd||(Jd=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,AT)))}function Oo(t){function e(i){return Ks(i,t)}if(0<tl.length){Ks(tl[0],t);for(var n=1;n<tl.length;n++){var r=tl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ur!==null&&Ks(ur,t),cr!==null&&Ks(cr,t),dr!==null&&Ks(dr,t),bo.forEach(e),Do.forEach(e),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)x_(n),n.blockedOn===null&&nr.shift()}var $i=Hn.ReactCurrentBatchConfig,Wl=!0;function kT(t,e,n,r){var i=ae,s=$i.transition;$i.transition=null;try{ae=1,mf(t,e,n,r)}finally{ae=i,$i.transition=s}}function xT(t,e,n,r){var i=ae,s=$i.transition;$i.transition=null;try{ae=4,mf(t,e,n,r)}finally{ae=i,$i.transition=s}}function mf(t,e,n,r){if(Wl){var i=Xd(t,e,n,r);if(i===null)od(t,e,r,ql,n),wg(t,r);else if(ST(i,t,e,n,r))r.stopPropagation();else if(wg(t,r),e&4&&-1<TT.indexOf(t)){for(;i!==null;){var s=fa(i);if(s!==null&&T_(s),s=Xd(t,e,n,r),s===null&&od(t,e,r,ql,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else od(t,e,r,null,n)}}var ql=null;function Xd(t,e,n,r){if(ql=null,t=df(r),t=Wr(t),t!==null)if(e=fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=m_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ql=t,null}function R_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pT()){case hf:return 1;case __:return 4;case Bl:case mT:return 16;case w_:return 536870912;default:return 16}default:return 16}}var ir=null,gf=null,El=null;function C_(){if(El)return El;var t,e=gf,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return El=i.slice(t,1<r?1-r:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function Ig(){return!1}function Vt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nl:Ig,this.isPropagationStopped=Ig,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yf=Vt(_s),ha=Ee({},_s,{view:0,detail:0}),RT=Vt(ha),Jc,Xc,Gs,bu=Ee({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gs&&(Gs&&t.type==="mousemove"?(Jc=t.screenX-Gs.screenX,Xc=t.screenY-Gs.screenY):Xc=Jc=0,Gs=t),Jc)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),Tg=Vt(bu),CT=Ee({},bu,{dataTransfer:0}),PT=Vt(CT),NT=Ee({},ha,{relatedTarget:0}),Zc=Vt(NT),bT=Ee({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),DT=Vt(bT),OT=Ee({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LT=Vt(OT),VT=Ee({},_s,{data:0}),Sg=Vt(VT),MT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jT[t])?!!e[t]:!1}function vf(){return UT}var zT=Ee({},ha,{key:function(t){if(t.key){var e=MT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vf,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BT=Vt(zT),$T=Ee({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ag=Vt($T),WT=Ee({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vf}),qT=Vt(WT),HT=Ee({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),KT=Vt(HT),GT=Ee({},bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QT=Vt(GT),YT=[9,13,27,32],_f=Mn&&"CompositionEvent"in window,mo=null;Mn&&"documentMode"in document&&(mo=document.documentMode);var JT=Mn&&"TextEvent"in window&&!mo,P_=Mn&&(!_f||mo&&8<mo&&11>=mo),kg=" ",xg=!1;function N_(t,e){switch(t){case"keyup":return YT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ci=!1;function XT(t,e){switch(t){case"compositionend":return b_(e);case"keypress":return e.which!==32?null:(xg=!0,kg);case"textInput":return t=e.data,t===kg&&xg?null:t;default:return null}}function ZT(t,e){if(Ci)return t==="compositionend"||!_f&&N_(t,e)?(t=C_(),El=gf=ir=null,Ci=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return P_&&e.locale!=="ko"?null:e.data;default:return null}}var e2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!e2[t.type]:e==="textarea"}function D_(t,e,n,r){c_(r),e=Hl(e,"onChange"),0<e.length&&(n=new yf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var go=null,Lo=null;function t2(t){W_(t,0)}function Du(t){var e=bi(t);if(r_(e))return t}function n2(t,e){if(t==="change")return e}var O_=!1;if(Mn){var ed;if(Mn){var td="oninput"in document;if(!td){var Cg=document.createElement("div");Cg.setAttribute("oninput","return;"),td=typeof Cg.oninput=="function"}ed=td}else ed=!1;O_=ed&&(!document.documentMode||9<document.documentMode)}function Pg(){go&&(go.detachEvent("onpropertychange",L_),Lo=go=null)}function L_(t){if(t.propertyName==="value"&&Du(Lo)){var e=[];D_(e,Lo,t,df(t)),p_(t2,e)}}function r2(t,e,n){t==="focusin"?(Pg(),go=e,Lo=n,go.attachEvent("onpropertychange",L_)):t==="focusout"&&Pg()}function i2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Du(Lo)}function s2(t,e){if(t==="click")return Du(e)}function o2(t,e){if(t==="input"||t==="change")return Du(e)}function a2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:a2;function Vo(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Od.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function Ng(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bg(t,e){var n=Ng(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ng(n)}}function V_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?V_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function M_(){for(var t=window,e=jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jl(t.document)}return e}function wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function l2(t){var e=M_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&V_(n.ownerDocument.documentElement,n)){if(r!==null&&wf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bg(n,s);var o=bg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var u2=Mn&&"documentMode"in document&&11>=document.documentMode,Pi=null,Zd=null,yo=null,eh=!1;function Dg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;eh||Pi==null||Pi!==jl(r)||(r=Pi,"selectionStart"in r&&wf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&Vo(yo,r)||(yo=r,r=Hl(Zd,"onSelect"),0<r.length&&(e=new yf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Pi)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ni={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},nd={},F_={};Mn&&(F_=document.createElement("div").style,"AnimationEvent"in window||(delete Ni.animationend.animation,delete Ni.animationiteration.animation,delete Ni.animationstart.animation),"TransitionEvent"in window||delete Ni.transitionend.transition);function Ou(t){if(nd[t])return nd[t];if(!Ni[t])return t;var e=Ni[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in F_)return nd[t]=e[n];return t}var j_=Ou("animationend"),U_=Ou("animationiteration"),z_=Ou("animationstart"),B_=Ou("transitionend"),$_=new Map,Og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){$_.set(t,e),hi(e,[t])}for(var rd=0;rd<Og.length;rd++){var id=Og[rd],c2=id.toLowerCase(),d2=id[0].toUpperCase()+id.slice(1);Cr(c2,"on"+d2)}Cr(j_,"onAnimationEnd");Cr(U_,"onAnimationIteration");Cr(z_,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(B_,"onTransitionEnd");Ji("onMouseEnter",["mouseout","mouseover"]);Ji("onMouseLeave",["mouseout","mouseover"]);Ji("onPointerEnter",["pointerout","pointerover"]);Ji("onPointerLeave",["pointerout","pointerover"]);hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h2=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Lg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cT(r,e,void 0,t),t.currentTarget=null}function W_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Lg(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Lg(i,l,d),s=u}}}if(zl)throw t=Qd,zl=!1,Qd=null,t}function pe(t,e){var n=e[sh];n===void 0&&(n=e[sh]=new Set);var r=t+"__bubble";n.has(r)||(q_(e,t,2,!1),n.add(r))}function sd(t,e,n){var r=0;e&&(r|=4),q_(n,t,r,e)}var il="_reactListening"+Math.random().toString(36).slice(2);function Mo(t){if(!t[il]){t[il]=!0,Xv.forEach(function(n){n!=="selectionchange"&&(h2.has(n)||sd(n,!1,t),sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[il]||(e[il]=!0,sd("selectionchange",!1,e))}}function q_(t,e,n,r){switch(R_(e)){case 1:var i=kT;break;case 4:i=xT;break;default:i=mf}n=i.bind(null,e,n,t),i=void 0,!Gd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function od(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Wr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}p_(function(){var d=s,f=df(n),p=[];e:{var y=$_.get(t);if(y!==void 0){var _=yf,R=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":_=BT;break;case"focusin":R="focus",_=Zc;break;case"focusout":R="blur",_=Zc;break;case"beforeblur":case"afterblur":_=Zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=PT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=qT;break;case j_:case U_:case z_:_=DT;break;case B_:_=KT;break;case"scroll":_=RT;break;case"wheel":_=QT;break;case"copy":case"cut":case"paste":_=LT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ag}var N=(e&4)!==0,O=!N&&t==="scroll",A=N?y!==null?y+"Capture":null:y;N=[];for(var w=d,x;w!==null;){x=w;var D=x.stateNode;if(x.tag===5&&D!==null&&(x=D,A!==null&&(D=No(w,A),D!=null&&N.push(Fo(w,D,x)))),O)break;w=w.return}0<N.length&&(y=new _(y,R,null,n,f),p.push({event:y,listeners:N}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",y&&n!==Hd&&(R=n.relatedTarget||n.fromElement)&&(Wr(R)||R[Fn]))break e;if((_||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,_?(R=n.relatedTarget||n.toElement,_=d,R=R?Wr(R):null,R!==null&&(O=fi(R),R!==O||R.tag!==5&&R.tag!==6)&&(R=null)):(_=null,R=d),_!==R)){if(N=Tg,D="onMouseLeave",A="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(N=Ag,D="onPointerLeave",A="onPointerEnter",w="pointer"),O=_==null?y:bi(_),x=R==null?y:bi(R),y=new N(D,w+"leave",_,n,f),y.target=O,y.relatedTarget=x,D=null,Wr(f)===d&&(N=new N(A,w+"enter",R,n,f),N.target=x,N.relatedTarget=O,D=N),O=D,_&&R)t:{for(N=_,A=R,w=0,x=N;x;x=Ii(x))w++;for(x=0,D=A;D;D=Ii(D))x++;for(;0<w-x;)N=Ii(N),w--;for(;0<x-w;)A=Ii(A),x--;for(;w--;){if(N===A||A!==null&&N===A.alternate)break t;N=Ii(N),A=Ii(A)}N=null}else N=null;_!==null&&Vg(p,y,_,N,!1),R!==null&&O!==null&&Vg(p,O,R,N,!0)}}e:{if(y=d?bi(d):window,_=y.nodeName&&y.nodeName.toLowerCase(),_==="select"||_==="input"&&y.type==="file")var z=n2;else if(Rg(y))if(O_)z=o2;else{z=i2;var j=r2}else(_=y.nodeName)&&_.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(z=s2);if(z&&(z=z(t,d))){D_(p,z,n,f);break e}j&&j(t,y,d),t==="focusout"&&(j=y._wrapperState)&&j.controlled&&y.type==="number"&&zd(y,"number",y.value)}switch(j=d?bi(d):window,t){case"focusin":(Rg(j)||j.contentEditable==="true")&&(Pi=j,Zd=d,yo=null);break;case"focusout":yo=Zd=Pi=null;break;case"mousedown":eh=!0;break;case"contextmenu":case"mouseup":case"dragend":eh=!1,Dg(p,n,f);break;case"selectionchange":if(u2)break;case"keydown":case"keyup":Dg(p,n,f)}var I;if(_f)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ci?N_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(P_&&n.locale!=="ko"&&(Ci||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ci&&(I=C_()):(ir=f,gf="value"in ir?ir.value:ir.textContent,Ci=!0)),j=Hl(d,v),0<j.length&&(v=new Sg(v,t,null,n,f),p.push({event:v,listeners:j}),I?v.data=I:(I=b_(n),I!==null&&(v.data=I)))),(I=JT?XT(t,n):ZT(t,n))&&(d=Hl(d,"onBeforeInput"),0<d.length&&(f=new Sg("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:d}),f.data=I))}W_(p,e)})}function Fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=No(t,n),s!=null&&r.unshift(Fo(t,s,i)),s=No(t,e),s!=null&&r.push(Fo(t,s,i))),t=t.return}return r}function Ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=No(n,s),u!=null&&o.unshift(Fo(n,u,l))):i||(u=No(n,s),u!=null&&o.push(Fo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var f2=/\r\n?/g,p2=/\u0000|\uFFFD/g;function Mg(t){return(typeof t=="string"?t:""+t).replace(f2,`
`).replace(p2,"")}function sl(t,e,n){if(e=Mg(e),Mg(t)!==e&&n)throw Error(M(425))}function Kl(){}var th=null,nh=null;function rh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ih=typeof setTimeout=="function"?setTimeout:void 0,m2=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,g2=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(t){return Fg.resolve(null).then(t).catch(y2)}:ih;function y2(t){setTimeout(function(){throw t})}function ad(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Oo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oo(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ws=Math.random().toString(36).slice(2),ln="__reactFiber$"+ws,jo="__reactProps$"+ws,Fn="__reactContainer$"+ws,sh="__reactEvents$"+ws,v2="__reactListeners$"+ws,_2="__reactHandles$"+ws;function Wr(t){var e=t[ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fn]||n[ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jg(t);t!==null;){if(n=t[ln])return n;t=jg(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[ln]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Lu(t){return t[jo]||null}var oh=[],Di=-1;function Pr(t){return{current:t}}function ge(t){0>Di||(t.current=oh[Di],oh[Di]=null,Di--)}function he(t,e){Di++,oh[Di]=t.current,t.current=e}var Er={},dt=Pr(Er),St=Pr(!1),ei=Er;function Xi(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function At(t){return t=t.childContextTypes,t!=null}function Gl(){ge(St),ge(dt)}function Ug(t,e,n){if(dt.current!==Er)throw Error(M(168));he(dt,e),he(St,n)}function H_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,rT(t)||"Unknown",i));return Ee({},n,r)}function Ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,ei=dt.current,he(dt,t),he(St,St.current),!0}function zg(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=H_(t,e,ei),r.__reactInternalMemoizedMergedChildContext=t,ge(St),ge(dt),he(dt,t)):ge(St),he(St,n)}var Cn=null,Vu=!1,ld=!1;function K_(t){Cn===null?Cn=[t]:Cn.push(t)}function w2(t){Vu=!0,K_(t)}function Nr(){if(!ld&&Cn!==null){ld=!0;var t=0,e=ae;try{var n=Cn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cn=null,Vu=!1}catch(i){throw Cn!==null&&(Cn=Cn.slice(t+1)),v_(hf,Nr),i}finally{ae=e,ld=!1}}return null}var Oi=[],Li=0,Yl=null,Jl=0,Mt=[],Ft=0,ti=null,Pn=1,Nn="";function zr(t,e){Oi[Li++]=Jl,Oi[Li++]=Yl,Yl=t,Jl=e}function G_(t,e,n){Mt[Ft++]=Pn,Mt[Ft++]=Nn,Mt[Ft++]=ti,ti=t;var r=Pn;t=Nn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pn=1<<32-Xt(e)+i|n<<i|r,Nn=s+t}else Pn=1<<s|n<<i|r,Nn=t}function Ef(t){t.return!==null&&(zr(t,1),G_(t,1,0))}function If(t){for(;t===Yl;)Yl=Oi[--Li],Oi[Li]=null,Jl=Oi[--Li],Oi[Li]=null;for(;t===ti;)ti=Mt[--Ft],Mt[Ft]=null,Nn=Mt[--Ft],Mt[Ft]=null,Pn=Mt[--Ft],Mt[Ft]=null}var Dt=null,Pt=null,ye=!1,Jt=null;function Q_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dt=t,Pt=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ti!==null?{id:Pn,overflow:Nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dt=t,Pt=null,!0):!1;default:return!1}}function ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lh(t){if(ye){var e=Pt;if(e){var n=e;if(!Bg(t,e)){if(ah(t))throw Error(M(418));e=hr(n.nextSibling);var r=Dt;e&&Bg(t,e)?Q_(r,n):(t.flags=t.flags&-4097|2,ye=!1,Dt=t)}}else{if(ah(t))throw Error(M(418));t.flags=t.flags&-4097|2,ye=!1,Dt=t}}}function $g(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function ol(t){if(t!==Dt)return!1;if(!ye)return $g(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rh(t.type,t.memoizedProps)),e&&(e=Pt)){if(ah(t))throw Y_(),Error(M(418));for(;e;)Q_(t,e),e=hr(e.nextSibling)}if($g(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Dt?hr(t.stateNode.nextSibling):null;return!0}function Y_(){for(var t=Pt;t;)t=hr(t.nextSibling)}function Zi(){Pt=Dt=null,ye=!1}function Tf(t){Jt===null?Jt=[t]:Jt.push(t)}var E2=Hn.ReactCurrentBatchConfig;function Qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function al(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wg(t){var e=t._init;return e(t._payload)}function J_(t){function e(A,w){if(t){var x=A.deletions;x===null?(A.deletions=[w],A.flags|=16):x.push(w)}}function n(A,w){if(!t)return null;for(;w!==null;)e(A,w),w=w.sibling;return null}function r(A,w){for(A=new Map;w!==null;)w.key!==null?A.set(w.key,w):A.set(w.index,w),w=w.sibling;return A}function i(A,w){return A=gr(A,w),A.index=0,A.sibling=null,A}function s(A,w,x){return A.index=x,t?(x=A.alternate,x!==null?(x=x.index,x<w?(A.flags|=2,w):x):(A.flags|=2,w)):(A.flags|=1048576,w)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,w,x,D){return w===null||w.tag!==6?(w=md(x,A.mode,D),w.return=A,w):(w=i(w,x),w.return=A,w)}function u(A,w,x,D){var z=x.type;return z===Ri?f(A,w,x.props.children,D,x.key):w!==null&&(w.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===er&&Wg(z)===w.type)?(D=i(w,x.props),D.ref=Qs(A,w,x),D.return=A,D):(D=Cl(x.type,x.key,x.props,null,A.mode,D),D.ref=Qs(A,w,x),D.return=A,D)}function d(A,w,x,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==x.containerInfo||w.stateNode.implementation!==x.implementation?(w=gd(x,A.mode,D),w.return=A,w):(w=i(w,x.children||[]),w.return=A,w)}function f(A,w,x,D,z){return w===null||w.tag!==7?(w=Yr(x,A.mode,D,z),w.return=A,w):(w=i(w,x),w.return=A,w)}function p(A,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return w=md(""+w,A.mode,x),w.return=A,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ya:return x=Cl(w.type,w.key,w.props,null,A.mode,x),x.ref=Qs(A,null,w),x.return=A,x;case xi:return w=gd(w,A.mode,x),w.return=A,w;case er:var D=w._init;return p(A,D(w._payload),x)}if(ro(w)||Ws(w))return w=Yr(w,A.mode,x,null),w.return=A,w;al(A,w)}return null}function y(A,w,x,D){var z=w!==null?w.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return z!==null?null:l(A,w,""+x,D);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ya:return x.key===z?u(A,w,x,D):null;case xi:return x.key===z?d(A,w,x,D):null;case er:return z=x._init,y(A,w,z(x._payload),D)}if(ro(x)||Ws(x))return z!==null?null:f(A,w,x,D,null);al(A,x)}return null}function _(A,w,x,D,z){if(typeof D=="string"&&D!==""||typeof D=="number")return A=A.get(x)||null,l(w,A,""+D,z);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ya:return A=A.get(D.key===null?x:D.key)||null,u(w,A,D,z);case xi:return A=A.get(D.key===null?x:D.key)||null,d(w,A,D,z);case er:var j=D._init;return _(A,w,x,j(D._payload),z)}if(ro(D)||Ws(D))return A=A.get(x)||null,f(w,A,D,z,null);al(w,D)}return null}function R(A,w,x,D){for(var z=null,j=null,I=w,v=w=0,E=null;I!==null&&v<x.length;v++){I.index>v?(E=I,I=null):E=I.sibling;var S=y(A,I,x[v],D);if(S===null){I===null&&(I=E);break}t&&I&&S.alternate===null&&e(A,I),w=s(S,w,v),j===null?z=S:j.sibling=S,j=S,I=E}if(v===x.length)return n(A,I),ye&&zr(A,v),z;if(I===null){for(;v<x.length;v++)I=p(A,x[v],D),I!==null&&(w=s(I,w,v),j===null?z=I:j.sibling=I,j=I);return ye&&zr(A,v),z}for(I=r(A,I);v<x.length;v++)E=_(I,A,v,x[v],D),E!==null&&(t&&E.alternate!==null&&I.delete(E.key===null?v:E.key),w=s(E,w,v),j===null?z=E:j.sibling=E,j=E);return t&&I.forEach(function(k){return e(A,k)}),ye&&zr(A,v),z}function N(A,w,x,D){var z=Ws(x);if(typeof z!="function")throw Error(M(150));if(x=z.call(x),x==null)throw Error(M(151));for(var j=z=null,I=w,v=w=0,E=null,S=x.next();I!==null&&!S.done;v++,S=x.next()){I.index>v?(E=I,I=null):E=I.sibling;var k=y(A,I,S.value,D);if(k===null){I===null&&(I=E);break}t&&I&&k.alternate===null&&e(A,I),w=s(k,w,v),j===null?z=k:j.sibling=k,j=k,I=E}if(S.done)return n(A,I),ye&&zr(A,v),z;if(I===null){for(;!S.done;v++,S=x.next())S=p(A,S.value,D),S!==null&&(w=s(S,w,v),j===null?z=S:j.sibling=S,j=S);return ye&&zr(A,v),z}for(I=r(A,I);!S.done;v++,S=x.next())S=_(I,A,v,S.value,D),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?v:S.key),w=s(S,w,v),j===null?z=S:j.sibling=S,j=S);return t&&I.forEach(function(C){return e(A,C)}),ye&&zr(A,v),z}function O(A,w,x,D){if(typeof x=="object"&&x!==null&&x.type===Ri&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ya:e:{for(var z=x.key,j=w;j!==null;){if(j.key===z){if(z=x.type,z===Ri){if(j.tag===7){n(A,j.sibling),w=i(j,x.props.children),w.return=A,A=w;break e}}else if(j.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===er&&Wg(z)===j.type){n(A,j.sibling),w=i(j,x.props),w.ref=Qs(A,j,x),w.return=A,A=w;break e}n(A,j);break}else e(A,j);j=j.sibling}x.type===Ri?(w=Yr(x.props.children,A.mode,D,x.key),w.return=A,A=w):(D=Cl(x.type,x.key,x.props,null,A.mode,D),D.ref=Qs(A,w,x),D.return=A,A=D)}return o(A);case xi:e:{for(j=x.key;w!==null;){if(w.key===j)if(w.tag===4&&w.stateNode.containerInfo===x.containerInfo&&w.stateNode.implementation===x.implementation){n(A,w.sibling),w=i(w,x.children||[]),w.return=A,A=w;break e}else{n(A,w);break}else e(A,w);w=w.sibling}w=gd(x,A.mode,D),w.return=A,A=w}return o(A);case er:return j=x._init,O(A,w,j(x._payload),D)}if(ro(x))return R(A,w,x,D);if(Ws(x))return N(A,w,x,D);al(A,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,w!==null&&w.tag===6?(n(A,w.sibling),w=i(w,x),w.return=A,A=w):(n(A,w),w=md(x,A.mode,D),w.return=A,A=w),o(A)):n(A,w)}return O}var es=J_(!0),X_=J_(!1),Xl=Pr(null),Zl=null,Vi=null,Sf=null;function Af(){Sf=Vi=Zl=null}function kf(t){var e=Xl.current;ge(Xl),t._currentValue=e}function uh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Wi(t,e){Zl=t,Sf=Vi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Wt(t){var e=t._currentValue;if(Sf!==t)if(t={context:t,memoizedValue:e,next:null},Vi===null){if(Zl===null)throw Error(M(308));Vi=t,Zl.dependencies={lanes:0,firstContext:t}}else Vi=Vi.next=t;return e}var qr=null;function xf(t){qr===null?qr=[t]:qr.push(t)}function Z_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xf(e)):(n.next=i.next,i.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jn(t,n)}return i=r.interleaved,i===null?(e.next=e,xf(r)):(e.next=i.next,i.next=e),r.interleaved=e,jn(t,n)}function Tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ff(t,n)}}function qg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function eu(t,e,n,r){var i=t.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=d=u=null,l=s;do{var y=l.lane,_=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,N=l;switch(y=e,_=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){p=R.call(_,p,y);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,y=typeof R=="function"?R.call(_,p,y):R,y==null)break e;p=Ee({},p,y);break e;case 2:tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else _={eventTime:_,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=_,u=p):f=f.next=_,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ri|=o,t.lanes=o,t.memoizedState=p}}function Hg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var pa={},mn=Pr(pa),Uo=Pr(pa),zo=Pr(pa);function Hr(t){if(t===pa)throw Error(M(174));return t}function Cf(t,e){switch(he(zo,e),he(Uo,t),he(mn,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$d(e,t)}ge(mn),he(mn,e)}function ts(){ge(mn),ge(Uo),ge(zo)}function t0(t){Hr(zo.current);var e=Hr(mn.current),n=$d(e,t.type);e!==n&&(he(Uo,t),he(mn,n))}function Pf(t){Uo.current===t&&(ge(mn),ge(Uo))}var _e=Pr(0);function tu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ud=[];function Nf(){for(var t=0;t<ud.length;t++)ud[t]._workInProgressVersionPrimary=null;ud.length=0}var Sl=Hn.ReactCurrentDispatcher,cd=Hn.ReactCurrentBatchConfig,ni=0,we=null,Fe=null,$e=null,nu=!1,vo=!1,Bo=0,I2=0;function it(){throw Error(M(321))}function bf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function Df(t,e,n,r,i,s){if(ni=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?k2:x2,t=n(r,i),vo){s=0;do{if(vo=!1,Bo=0,25<=s)throw Error(M(301));s+=1,$e=Fe=null,e.updateQueue=null,Sl.current=R2,t=n(r,i)}while(vo)}if(Sl.current=ru,e=Fe!==null&&Fe.next!==null,ni=0,$e=Fe=we=null,nu=!1,e)throw Error(M(300));return t}function Of(){var t=Bo!==0;return Bo=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?we.memoizedState=$e=t:$e=$e.next=t,$e}function qt(){if(Fe===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=$e===null?we.memoizedState:$e.next;if(e!==null)$e=e,Fe=t;else{if(t===null)throw Error(M(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},$e===null?we.memoizedState=$e=t:$e=$e.next=t}return $e}function $o(t,e){return typeof e=="function"?e(t):e}function dd(t){var e=qt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var f=d.lane;if((ni&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var p={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,we.lanes|=f,ri|=f}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,tn(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,ri|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hd(t){var e=qt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function n0(){}function r0(t,e){var n=we,r=qt(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,Lf(o0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Wo(9,s0.bind(null,n,r,i,e),void 0,null),We===null)throw Error(M(349));ni&30||i0(n,e,i)}return i}function i0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function s0(t,e,n,r){e.value=n,e.getSnapshot=r,a0(e)&&l0(t)}function o0(t,e,n){return n(function(){a0(e)&&l0(t)})}function a0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function l0(t){var e=jn(t,1);e!==null&&Zt(e,t,1,-1)}function Kg(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},e.queue=t,t=t.dispatch=A2.bind(null,we,t),[e.memoizedState,t]}function Wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function u0(){return qt().memoizedState}function Al(t,e,n,r){var i=an();we.flags|=t,i.memoizedState=Wo(1|e,n,void 0,r===void 0?null:r)}function Mu(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&bf(r,o.deps)){i.memoizedState=Wo(e,n,s,r);return}}we.flags|=t,i.memoizedState=Wo(1|e,n,s,r)}function Gg(t,e){return Al(8390656,8,t,e)}function Lf(t,e){return Mu(2048,8,t,e)}function c0(t,e){return Mu(4,2,t,e)}function d0(t,e){return Mu(4,4,t,e)}function h0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function f0(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4,4,h0.bind(null,e,t),n)}function Vf(){}function p0(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function m0(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function g0(t,e,n){return ni&21?(tn(n,e)||(n=E_(),we.lanes|=n,ri|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function T2(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=cd.transition;cd.transition={};try{t(!1),e()}finally{ae=n,cd.transition=r}}function y0(){return qt().memoizedState}function S2(t,e,n){var r=mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},v0(t))_0(e,n);else if(n=Z_(t,e,n,r),n!==null){var i=gt();Zt(n,t,r,i),w0(n,e,r)}}function A2(t,e,n){var r=mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(v0(t))_0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,tn(l,o)){var u=e.interleaved;u===null?(i.next=i,xf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Z_(t,e,i,r),n!==null&&(i=gt(),Zt(n,t,r,i),w0(n,e,r))}}function v0(t){var e=t.alternate;return t===we||e!==null&&e===we}function _0(t,e){vo=nu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function w0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ff(t,n)}}var ru={readContext:Wt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},k2={readContext:Wt,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:Gg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Al(4194308,4,h0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Al(4194308,4,t,e)},useInsertionEffect:function(t,e){return Al(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=S2.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:Kg,useDebugValue:Vf,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=Kg(!1),e=t[0];return t=T2.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=an();if(ye){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),We===null)throw Error(M(349));ni&30||i0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gg(o0.bind(null,r,s,t),[t]),r.flags|=2048,Wo(9,s0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=We.identifierPrefix;if(ye){var n=Nn,r=Pn;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=I2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},x2={readContext:Wt,useCallback:p0,useContext:Wt,useEffect:Lf,useImperativeHandle:f0,useInsertionEffect:c0,useLayoutEffect:d0,useMemo:m0,useReducer:dd,useRef:u0,useState:function(){return dd($o)},useDebugValue:Vf,useDeferredValue:function(t){var e=qt();return g0(e,Fe.memoizedState,t)},useTransition:function(){var t=dd($o)[0],e=qt().memoizedState;return[t,e]},useMutableSource:n0,useSyncExternalStore:r0,useId:y0,unstable_isNewReconciler:!1},R2={readContext:Wt,useCallback:p0,useContext:Wt,useEffect:Lf,useImperativeHandle:f0,useInsertionEffect:c0,useLayoutEffect:d0,useMemo:m0,useReducer:hd,useRef:u0,useState:function(){return hd($o)},useDebugValue:Vf,useDeferredValue:function(t){var e=qt();return Fe===null?e.memoizedState=t:g0(e,Fe.memoizedState,t)},useTransition:function(){var t=hd($o)[0],e=qt().memoizedState;return[t,e]},useMutableSource:n0,useSyncExternalStore:r0,useId:y0,unstable_isNewReconciler:!1};function Qt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ch(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fu={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),i=mr(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,i),e!==null&&(Zt(e,t,i,r),Tl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),i=mr(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,i),e!==null&&(Zt(e,t,i,r),Tl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=mr(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=fr(t,i,r),e!==null&&(Zt(e,t,r,n),Tl(e,t,r))}};function Qg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(n,r)||!Vo(i,s):!0}function E0(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(i=At(e)?ei:dt.current,r=e.contextTypes,s=(r=r!=null)?Xi(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fu.enqueueReplaceState(e,e.state,null)}function dh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Rf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Wt(s):(s=At(e)?ei:dt.current,i.context=Xi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ch(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fu.enqueueReplaceState(i,i.state,null),eu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ns(t,e){try{var n="",r=e;do n+=nT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var C2=typeof WeakMap=="function"?WeakMap:Map;function I0(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){su||(su=!0,Ih=r),hh(t,e)},n}function T0(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hh(t,e),typeof r!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new C2;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=$2.bind(null,t,e,n),e.then(t,t))}function Xg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var P2=Hn.ReactCurrentOwner,Tt=!1;function mt(t,e,n,r){e.child=t===null?X_(e,null,n,r):es(e,t.child,n,r)}function ey(t,e,n,r,i){n=n.render;var s=e.ref;return Wi(e,i),r=Df(t,e,n,r,s,i),n=Of(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(ye&&n&&Ef(e),e.flags|=1,mt(t,e,r,i),e.child)}function ty(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Wf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,S0(t,e,s,r,i)):(t=Cl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(o,r)&&t.ref===e.ref)return Un(t,e,i)}return e.flags|=1,t=gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function S0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Vo(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,Un(t,e,i)}return fh(t,e,n,r,i)}function A0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Fi,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(Fi,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(Fi,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(Fi,Rt),Rt|=r;return mt(t,e,i,n),e.child}function k0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fh(t,e,n,r,i){var s=At(n)?ei:dt.current;return s=Xi(e,s),Wi(e,i),n=Df(t,e,n,r,s,i),r=Of(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(ye&&r&&Ef(e),e.flags|=1,mt(t,e,n,i),e.child)}function ny(t,e,n,r,i){if(At(n)){var s=!0;Ql(e)}else s=!1;if(Wi(e,i),e.stateNode===null)kl(t,e),E0(e,n,r),dh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Wt(d):(d=At(n)?ei:dt.current,d=Xi(e,d));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Yg(e,o,r,d),tr=!1;var y=e.memoizedState;o.state=y,eu(e,r,o,i),u=e.memoizedState,l!==r||y!==u||St.current||tr?(typeof f=="function"&&(ch(e,n,f,r),u=e.memoizedState),(l=tr||Qg(e,n,l,r,y,u,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,e0(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Qt(e.type,l),o.props=d,p=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Wt(u):(u=At(n)?ei:dt.current,u=Xi(e,u));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||y!==u)&&Yg(e,o,r,u),tr=!1,y=e.memoizedState,o.state=y,eu(e,r,o,i);var R=e.memoizedState;l!==p||y!==R||St.current||tr?(typeof _=="function"&&(ch(e,n,_,r),R=e.memoizedState),(d=tr||Qg(e,n,d,r,y,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return ph(t,e,n,r,s,i)}function ph(t,e,n,r,i,s){k0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zg(e,n,!1),Un(t,e,s);r=e.stateNode,P2.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=es(e,t.child,null,s),e.child=es(e,null,l,s)):mt(t,e,l,s),e.memoizedState=r.state,i&&zg(e,n,!0),e.child}function x0(t){var e=t.stateNode;e.pendingContext?Ug(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ug(t,e.context,!1),Cf(t,e.containerInfo)}function ry(t,e,n,r,i){return Zi(),Tf(i),e.flags|=256,mt(t,e,n,r),e.child}var mh={dehydrated:null,treeContext:null,retryLane:0};function gh(t){return{baseLanes:t,cachePool:null,transitions:null}}function R0(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(_e,i&1),t===null)return lh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zu(o,r,0,null),t=Yr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gh(n),e.memoizedState=mh,t):Mf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return N2(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=gr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=gr(l,s):(s=Yr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?gh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mh,r}return s=t.child,t=s.sibling,r=gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Mf(t,e){return e=zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ll(t,e,n,r){return r!==null&&Tf(r),es(e,t.child,null,n),t=Mf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function N2(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fd(Error(M(422))),ll(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=zu({mode:"visible",children:r.children},i,0,null),s=Yr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&es(e,t.child,null,o),e.child.memoizedState=gh(o),e.memoizedState=mh,s);if(!(e.mode&1))return ll(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=fd(s,r,void 0),ll(t,e,o,r)}if(l=(o&t.childLanes)!==0,Tt||l){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jn(t,i),Zt(r,t,i,-1))}return $f(),r=fd(Error(M(421))),ll(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=W2.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=hr(i.nextSibling),Dt=e,ye=!0,Jt=null,t!==null&&(Mt[Ft++]=Pn,Mt[Ft++]=Nn,Mt[Ft++]=ti,Pn=t.id,Nn=t.overflow,ti=e),e=Mf(e,r.children),e.flags|=4096,e)}function iy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),uh(t.return,e,n)}function pd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function C0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(mt(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&iy(t,n,e);else if(t.tag===19)iy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&tu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&tu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pd(e,!0,n,null,s);break;case"together":pd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ri|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function b2(t,e,n){switch(e.tag){case 3:x0(e),Zi();break;case 5:t0(e);break;case 1:At(e.type)&&Ql(e);break;case 4:Cf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(Xl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?R0(t,e,n):(he(_e,_e.current&1),t=Un(t,e,n),t!==null?t.sibling:null);he(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return C0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,A0(t,e,n)}return Un(t,e,n)}var P0,yh,N0,b0;P0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yh=function(){};N0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hr(mn.current);var s=null;switch(n){case"input":i=jd(t,i),r=jd(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Bd(t,i),r=Bd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Kl)}Wd(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Co.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Co.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};b0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ys(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function D2(t,e,n){var r=e.pendingProps;switch(If(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return At(e.type)&&Gl(),st(e),null;case 3:return r=e.stateNode,ts(),ge(St),ge(dt),Nf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jt!==null&&(Ah(Jt),Jt=null))),yh(t,e),st(e),null;case 5:Pf(e);var i=Hr(zo.current);if(n=e.type,t!==null&&e.stateNode!=null)N0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return st(e),null}if(t=Hr(mn.current),ol(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ln]=e,r[jo]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<so.length;i++)pe(so[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":fg(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":mg(r,s),pe("invalid",r)}Wd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&sl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&sl(r.textContent,l,t),i=["children",""+l]):Co.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":Ja(r),pg(r,s,!0);break;case"textarea":Ja(r),gg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Kl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=o_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ln]=e,t[jo]=r,P0(t,e,!1,!1),e.stateNode=t;e:{switch(o=qd(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<so.length;i++)pe(so[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":fg(t,r),i=jd(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),pe("invalid",t);break;case"textarea":mg(t,r),i=Bd(t,r),pe("invalid",t);break;default:i=r}Wd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?u_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&a_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Po(t,u):typeof u=="number"&&Po(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Co.hasOwnProperty(s)?u!=null&&s==="onScroll"&&pe("scroll",t):u!=null&&af(t,s,u,o))}switch(n){case"input":Ja(t),pg(t,r,!1);break;case"textarea":Ja(t),gg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ui(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ui(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)b0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Hr(zo.current),Hr(mn.current),ol(e)){if(r=e.stateNode,n=e.memoizedProps,r[ln]=e,(s=r.nodeValue!==n)&&(t=Dt,t!==null))switch(t.tag){case 3:sl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ln]=e,e.stateNode=r}return st(e),null;case 13:if(ge(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&Pt!==null&&e.mode&1&&!(e.flags&128))Y_(),Zi(),e.flags|=98560,s=!1;else if(s=ol(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[ln]=e}else Zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else Jt!==null&&(Ah(Jt),Jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?je===0&&(je=3):$f())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return ts(),yh(t,e),t===null&&Mo(e.stateNode.containerInfo),st(e),null;case 10:return kf(e.type._context),st(e),null;case 17:return At(e.type)&&Gl(),st(e),null;case 19:if(ge(_e),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ys(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tu(t),o!==null){for(e.flags|=128,Ys(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>rs&&(e.flags|=128,r=!0,Ys(s,!1),e.lanes=4194304)}else{if(!r)if(t=tu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return st(e),null}else 2*Ne()-s.renderingStartTime>rs&&n!==1073741824&&(e.flags|=128,r=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=_e.current,he(_e,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Bf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function O2(t,e){switch(If(e),e.tag){case 1:return At(e.type)&&Gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ts(),ge(St),ge(dt),Nf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pf(e),null;case 13:if(ge(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(_e),null;case 4:return ts(),null;case 10:return kf(e.type._context),null;case 22:case 23:return Bf(),null;case 24:return null;default:return null}}var ul=!1,lt=!1,L2=typeof WeakSet=="function"?WeakSet:Set,W=null;function Mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function vh(t,e,n){try{n()}catch(r){Se(t,e,r)}}var sy=!1;function V2(t,e){if(th=Wl,t=M_(),wf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,f=0,p=t,y=null;t:for(;;){for(var _;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(_=p.firstChild)!==null;)y=p,p=_;for(;;){if(p===t)break t;if(y===n&&++d===i&&(l=o),y===s&&++f===r&&(u=o),(_=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(nh={focusedElem:t,selectionRange:n},Wl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,O=R.memoizedState,A=e.stateNode,w=A.getSnapshotBeforeUpdate(e.elementType===e.type?N:Qt(e.type,N),O);A.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(D){Se(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return R=sy,sy=!1,R}function _o(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vh(e,n,s)}i=i.next}while(i!==r)}}function ju(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function _h(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D0(t){var e=t.alternate;e!==null&&(t.alternate=null,D0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ln],delete e[jo],delete e[sh],delete e[v2],delete e[_2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function O0(t){return t.tag===5||t.tag===3||t.tag===4}function oy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||O0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kl));else if(r!==4&&(t=t.child,t!==null))for(wh(t,e,n),t=t.sibling;t!==null;)wh(t,e,n),t=t.sibling}function Eh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Eh(t,e,n),t=t.sibling;t!==null;)Eh(t,e,n),t=t.sibling}var Ke=null,Yt=!1;function Xn(t,e,n){for(n=n.child;n!==null;)L0(t,e,n),n=n.sibling}function L0(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Nu,n)}catch{}switch(n.tag){case 5:lt||Mi(n,e);case 6:var r=Ke,i=Yt;Ke=null,Xn(t,e,n),Ke=r,Yt=i,Ke!==null&&(Yt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Yt?(t=Ke,n=n.stateNode,t.nodeType===8?ad(t.parentNode,n):t.nodeType===1&&ad(t,n),Oo(t)):ad(Ke,n.stateNode));break;case 4:r=Ke,i=Yt,Ke=n.stateNode.containerInfo,Yt=!0,Xn(t,e,n),Ke=r,Yt=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vh(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!lt&&(Mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Xn(t,e,n),lt=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function ay(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new L2),e.forEach(function(r){var i=q2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Yt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Yt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Yt=!0;break e}l=l.return}if(Ke===null)throw Error(M(160));L0(s,o,i),Ke=null,Yt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Se(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)V0(e,t),e=e.sibling}function V0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),on(t),r&4){try{_o(3,t,t.return),ju(3,t)}catch(N){Se(t,t.return,N)}try{_o(5,t,t.return)}catch(N){Se(t,t.return,N)}}break;case 1:Gt(e,t),on(t),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(Gt(e,t),on(t),r&512&&n!==null&&Mi(n,n.return),t.flags&32){var i=t.stateNode;try{Po(i,"")}catch(N){Se(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&i_(i,s),qd(l,o);var d=qd(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?u_(i,p):f==="dangerouslySetInnerHTML"?a_(i,p):f==="children"?Po(i,p):af(i,f,p,d)}switch(l){case"input":Ud(i,s);break;case"textarea":s_(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Ui(i,!!s.multiple,_,!1):y!==!!s.multiple&&(s.defaultValue!=null?Ui(i,!!s.multiple,s.defaultValue,!0):Ui(i,!!s.multiple,s.multiple?[]:"",!1))}i[jo]=s}catch(N){Se(t,t.return,N)}}break;case 6:if(Gt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Se(t,t.return,N)}}break;case 3:if(Gt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(e.containerInfo)}catch(N){Se(t,t.return,N)}break;case 4:Gt(e,t),on(t);break;case 13:Gt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Uf=Ne())),r&4&&ay(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(d=lt)||f,Gt(e,t),lt=d):Gt(e,t),on(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(y=W,_=y.child,y.tag){case 0:case 11:case 14:case 15:_o(4,y,y.return);break;case 1:Mi(y,y.return);var R=y.stateNode;if(typeof R.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){Se(r,n,N)}}break;case 5:Mi(y,y.return);break;case 22:if(y.memoizedState!==null){uy(p);continue}}_!==null?(_.return=y,W=_):uy(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=l_("display",o))}catch(N){Se(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(N){Se(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Gt(e,t),on(t),r&4&&ay(t);break;case 21:break;default:Gt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(O0(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Po(i,""),r.flags&=-33);var s=oy(t);Eh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=oy(t);wh(t,l,o);break;default:throw Error(M(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function M2(t,e,n){W=t,M0(t)}function M0(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ul;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||lt;l=ul;var d=lt;if(ul=o,(lt=u)&&!d)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?cy(i):u!==null?(u.return=o,W=u):cy(i);for(;s!==null;)W=s,M0(s),s=s.sibling;W=i,ul=l,lt=d}ly(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):ly(t)}}function ly(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||ju(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Oo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}lt||e.flags&512&&_h(e)}catch(y){Se(e,e.return,y)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function uy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function cy(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ju(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Se(e,i,u)}}var s=e.return;try{_h(e)}catch(u){Se(e,s,u)}break;case 5:var o=e.return;try{_h(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var F2=Math.ceil,iu=Hn.ReactCurrentDispatcher,Ff=Hn.ReactCurrentOwner,Ut=Hn.ReactCurrentBatchConfig,ie=0,We=null,Oe=null,Ye=0,Rt=0,Fi=Pr(0),je=0,qo=null,ri=0,Uu=0,jf=0,wo=null,Et=null,Uf=0,rs=1/0,Rn=null,su=!1,Ih=null,pr=null,cl=!1,sr=null,ou=0,Eo=0,Th=null,xl=-1,Rl=0;function gt(){return ie&6?Ne():xl!==-1?xl:xl=Ne()}function mr(t){return t.mode&1?ie&2&&Ye!==0?Ye&-Ye:E2.transition!==null?(Rl===0&&(Rl=E_()),Rl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:R_(t.type)),t):1}function Zt(t,e,n,r){if(50<Eo)throw Eo=0,Th=null,Error(M(185));da(t,n,r),(!(ie&2)||t!==We)&&(t===We&&(!(ie&2)&&(Uu|=n),je===4&&rr(t,Ye)),kt(t,r),n===1&&ie===0&&!(e.mode&1)&&(rs=Ne()+500,Vu&&Nr()))}function kt(t,e){var n=t.callbackNode;ET(t,e);var r=$l(t,t===We?Ye:0);if(r===0)n!==null&&_g(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_g(n),e===1)t.tag===0?w2(dy.bind(null,t)):K_(dy.bind(null,t)),g2(function(){!(ie&6)&&Nr()}),n=null;else{switch(I_(r)){case 1:n=hf;break;case 4:n=__;break;case 16:n=Bl;break;case 536870912:n=w_;break;default:n=Bl}n=q0(n,F0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function F0(t,e){if(xl=-1,Rl=0,ie&6)throw Error(M(327));var n=t.callbackNode;if(qi()&&t.callbackNode!==n)return null;var r=$l(t,t===We?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=au(t,r);else{e=r;var i=ie;ie|=2;var s=U0();(We!==t||Ye!==e)&&(Rn=null,rs=Ne()+500,Qr(t,e));do try{z2();break}catch(l){j0(t,l)}while(!0);Af(),iu.current=s,ie=i,Oe!==null?e=0:(We=null,Ye=0,e=je)}if(e!==0){if(e===2&&(i=Yd(t),i!==0&&(r=i,e=Sh(t,i))),e===1)throw n=qo,Qr(t,0),rr(t,r),kt(t,Ne()),n;if(e===6)rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!j2(i)&&(e=au(t,r),e===2&&(s=Yd(t),s!==0&&(r=s,e=Sh(t,s))),e===1))throw n=qo,Qr(t,0),rr(t,r),kt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Br(t,Et,Rn);break;case 3:if(rr(t,r),(r&130023424)===r&&(e=Uf+500-Ne(),10<e)){if($l(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ih(Br.bind(null,t,Et,Rn),e);break}Br(t,Et,Rn);break;case 4:if(rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*F2(r/1960))-r,10<r){t.timeoutHandle=ih(Br.bind(null,t,Et,Rn),r);break}Br(t,Et,Rn);break;case 5:Br(t,Et,Rn);break;default:throw Error(M(329))}}}return kt(t,Ne()),t.callbackNode===n?F0.bind(null,t):null}function Sh(t,e){var n=wo;return t.current.memoizedState.isDehydrated&&(Qr(t,e).flags|=256),t=au(t,e),t!==2&&(e=Et,Et=n,e!==null&&Ah(e)),t}function Ah(t){Et===null?Et=t:Et.push.apply(Et,t)}function j2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~jf,e&=~Uu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function dy(t){if(ie&6)throw Error(M(327));qi();var e=$l(t,0);if(!(e&1))return kt(t,Ne()),null;var n=au(t,e);if(t.tag!==0&&n===2){var r=Yd(t);r!==0&&(e=r,n=Sh(t,r))}if(n===1)throw n=qo,Qr(t,0),rr(t,e),kt(t,Ne()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,Et,Rn),kt(t,Ne()),null}function zf(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(rs=Ne()+500,Vu&&Nr())}}function ii(t){sr!==null&&sr.tag===0&&!(ie&6)&&qi();var e=ie;ie|=1;var n=Ut.transition,r=ae;try{if(Ut.transition=null,ae=1,t)return t()}finally{ae=r,Ut.transition=n,ie=e,!(ie&6)&&Nr()}}function Bf(){Rt=Fi.current,ge(Fi)}function Qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,m2(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(If(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gl();break;case 3:ts(),ge(St),ge(dt),Nf();break;case 5:Pf(r);break;case 4:ts();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:kf(r.type._context);break;case 22:case 23:Bf()}n=n.return}if(We=t,Oe=t=gr(t.current,null),Ye=Rt=e,je=0,qo=null,jf=Uu=ri=0,Et=wo=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qr=null}return t}function j0(t,e){do{var n=Oe;try{if(Af(),Sl.current=ru,nu){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nu=!1}if(ni=0,$e=Fe=we=null,vo=!1,Bo=0,Ff.current=null,n===null||n.return===null){je=1,qo=e,Oe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ye,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=Xg(o);if(_!==null){_.flags&=-257,Zg(_,o,l,s,e),_.mode&1&&Jg(s,d,e),e=_,u=d;var R=e.updateQueue;if(R===null){var N=new Set;N.add(u),e.updateQueue=N}else R.add(u);break e}else{if(!(e&1)){Jg(s,d,e),$f();break e}u=Error(M(426))}}else if(ye&&l.mode&1){var O=Xg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Zg(O,o,l,s,e),Tf(ns(u,l));break e}}s=u=ns(u,l),je!==4&&(je=2),wo===null?wo=[s]:wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var A=I0(s,u,e);qg(s,A);break e;case 1:l=u;var w=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(pr===null||!pr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=T0(s,l,e);qg(s,D);break e}}s=s.return}while(s!==null)}B0(n)}catch(z){e=z,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function U0(){var t=iu.current;return iu.current=ru,t===null?ru:t}function $f(){(je===0||je===3||je===2)&&(je=4),We===null||!(ri&268435455)&&!(Uu&268435455)||rr(We,Ye)}function au(t,e){var n=ie;ie|=2;var r=U0();(We!==t||Ye!==e)&&(Rn=null,Qr(t,e));do try{U2();break}catch(i){j0(t,i)}while(!0);if(Af(),ie=n,iu.current=r,Oe!==null)throw Error(M(261));return We=null,Ye=0,je}function U2(){for(;Oe!==null;)z0(Oe)}function z2(){for(;Oe!==null&&!hT();)z0(Oe)}function z0(t){var e=W0(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?B0(t):Oe=e,Ff.current=null}function B0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=O2(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Oe=null;return}}else if(n=D2(n,e,Rt),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);je===0&&(je=5)}function Br(t,e,n){var r=ae,i=Ut.transition;try{Ut.transition=null,ae=1,B2(t,e,n,r)}finally{Ut.transition=i,ae=r}return null}function B2(t,e,n,r){do qi();while(sr!==null);if(ie&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(IT(t,s),t===We&&(Oe=We=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,q0(Bl,function(){return qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var o=ae;ae=1;var l=ie;ie|=4,Ff.current=null,V2(t,n),V0(n,t),l2(nh),Wl=!!th,nh=th=null,t.current=n,M2(n),fT(),ie=l,ae=o,Ut.transition=s}else t.current=n;if(cl&&(cl=!1,sr=t,ou=i),s=t.pendingLanes,s===0&&(pr=null),gT(n.stateNode),kt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(su)throw su=!1,t=Ih,Ih=null,t;return ou&1&&t.tag!==0&&qi(),s=t.pendingLanes,s&1?t===Th?Eo++:(Eo=0,Th=t):Eo=0,Nr(),null}function qi(){if(sr!==null){var t=I_(ou),e=Ut.transition,n=ae;try{if(Ut.transition=null,ae=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,ou=0,ie&6)throw Error(M(331));var i=ie;for(ie|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(W=d;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:_o(8,f,s)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var y=f.sibling,_=f.return;if(D0(f),f===d){W=null;break}if(y!==null){y.return=_,W=y;break}W=_}}}var R=s.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_o(9,s,s.return)}var A=s.sibling;if(A!==null){A.return=s.return,W=A;break e}W=s.return}}var w=t.current;for(W=w;W!==null;){o=W;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,W=x;else e:for(o=w;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ju(9,l)}}catch(z){Se(l,l.return,z)}if(l===o){W=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,W=D;break e}W=l.return}}if(ie=i,Nr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Nu,t)}catch{}r=!0}return r}finally{ae=n,Ut.transition=e}}return!1}function hy(t,e,n){e=ns(n,e),e=I0(t,e,1),t=fr(t,e,1),e=gt(),t!==null&&(da(t,1,e),kt(t,e))}function Se(t,e,n){if(t.tag===3)hy(t,t,n);else for(;e!==null;){if(e.tag===3){hy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))){t=ns(n,t),t=T0(e,t,1),e=fr(e,t,1),t=gt(),e!==null&&(da(e,1,t),kt(e,t));break}}e=e.return}}function $2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Ye&n)===n&&(je===4||je===3&&(Ye&130023424)===Ye&&500>Ne()-Uf?Qr(t,0):jf|=n),kt(t,e)}function $0(t,e){e===0&&(t.mode&1?(e=el,el<<=1,!(el&130023424)&&(el=4194304)):e=1);var n=gt();t=jn(t,e),t!==null&&(da(t,e,n),kt(t,n))}function W2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$0(t,n)}function q2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),$0(t,n)}var W0;W0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,b2(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,ye&&e.flags&1048576&&G_(e,Jl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;kl(t,e),t=e.pendingProps;var i=Xi(e,dt.current);Wi(e,n),i=Df(null,e,r,t,i,n);var s=Of();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,At(r)?(s=!0,Ql(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rf(e),i.updater=Fu,e.stateNode=i,i._reactInternals=e,dh(e,r,t,n),e=ph(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&Ef(e),mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(kl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=K2(r),t=Qt(r,t),i){case 0:e=fh(null,e,r,t,n);break e;case 1:e=ny(null,e,r,t,n);break e;case 11:e=ey(null,e,r,t,n);break e;case 14:e=ty(null,e,r,Qt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),fh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),ny(t,e,r,i,n);case 3:e:{if(x0(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,e0(t,e),eu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ns(Error(M(423)),e),e=ry(t,e,r,n,i);break e}else if(r!==i){i=ns(Error(M(424)),e),e=ry(t,e,r,n,i);break e}else for(Pt=hr(e.stateNode.containerInfo.firstChild),Dt=e,ye=!0,Jt=null,n=X_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zi(),r===i){e=Un(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return t0(e),t===null&&lh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,rh(r,i)?o=null:s!==null&&rh(r,s)&&(e.flags|=32),k0(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&lh(e),null;case 13:return R0(t,e,n);case 4:return Cf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=es(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),ey(t,e,r,i,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(Xl,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!St.current){e=Un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ln(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),uh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),uh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Wi(e,n),i=Wt(i),r=r(i),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,i=Qt(r,e.pendingProps),i=Qt(r.type,i),ty(t,e,r,i,n);case 15:return S0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),kl(t,e),e.tag=1,At(r)?(t=!0,Ql(e)):t=!1,Wi(e,n),E0(e,r,i),dh(e,r,i,n),ph(null,e,r,!0,t,n);case 19:return C0(t,e,n);case 22:return A0(t,e,n)}throw Error(M(156,e.tag))};function q0(t,e){return v_(t,e)}function H2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new H2(t,e,n,r)}function Wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function K2(t){if(typeof t=="function")return Wf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uf)return 11;if(t===cf)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Wf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ri:return Yr(n.children,i,s,e);case lf:o=8,i|=8;break;case Ld:return t=jt(12,n,e,i|2),t.elementType=Ld,t.lanes=s,t;case Vd:return t=jt(13,n,e,i),t.elementType=Vd,t.lanes=s,t;case Md:return t=jt(19,n,e,i),t.elementType=Md,t.lanes=s,t;case t_:return zu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zv:o=10;break e;case e_:o=9;break e;case uf:o=11;break e;case cf:o=14;break e;case er:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function zu(t,e,n,r){return t=jt(22,t,r,e),t.elementType=t_,t.lanes=n,t.stateNode={isHidden:!1},t}function md(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function gd(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function G2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yc(0),this.expirationTimes=Yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qf(t,e,n,r,i,s,o,l,u){return t=new G2(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(s),t}function Q2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function H0(t){if(!t)return Er;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(At(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(At(n))return H_(t,n,e)}return e}function K0(t,e,n,r,i,s,o,l,u){return t=qf(n,r,!0,t,i,s,o,l,u),t.context=H0(null),n=t.current,r=gt(),i=mr(n),s=Ln(r,i),s.callback=e??null,fr(n,s,i),t.current.lanes=i,da(t,i,r),kt(t,r),t}function Bu(t,e,n,r){var i=e.current,s=gt(),o=mr(i);return n=H0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fr(i,e,o),t!==null&&(Zt(t,i,o,s),Tl(t,i,o)),o}function lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hf(t,e){fy(t,e),(t=t.alternate)&&fy(t,e)}function Y2(){return null}var G0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kf(t){this._internalRoot=t}$u.prototype.render=Kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Bu(t,e,null,null)};$u.prototype.unmount=Kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ii(function(){Bu(null,t,null,null)}),e[Fn]=null}};function $u(t){this._internalRoot=t}$u.prototype.unstable_scheduleHydration=function(t){if(t){var e=A_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&x_(t)}};function Gf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function py(){}function J2(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=lu(o);s.call(d)}}var o=K0(e,r,t,0,null,!1,!1,"",py);return t._reactRootContainer=o,t[Fn]=o.current,Mo(t.nodeType===8?t.parentNode:t),ii(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=lu(u);l.call(d)}}var u=qf(t,0,!1,null,null,!1,!1,"",py);return t._reactRootContainer=u,t[Fn]=u.current,Mo(t.nodeType===8?t.parentNode:t),ii(function(){Bu(e,u,n,r)}),u}function qu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=lu(o);l.call(u)}}Bu(e,o,t,i)}else o=J2(n,e,t,i,r);return lu(o)}T_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=io(e.pendingLanes);n!==0&&(ff(e,n|1),kt(e,Ne()),!(ie&6)&&(rs=Ne()+500,Nr()))}break;case 13:ii(function(){var r=jn(t,1);if(r!==null){var i=gt();Zt(r,t,1,i)}}),Hf(t,1)}};pf=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=gt();Zt(e,t,134217728,n)}Hf(t,134217728)}};S_=function(t){if(t.tag===13){var e=mr(t),n=jn(t,e);if(n!==null){var r=gt();Zt(n,t,e,r)}Hf(t,e)}};A_=function(){return ae};k_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Kd=function(t,e,n){switch(e){case"input":if(Ud(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Lu(r);if(!i)throw Error(M(90));r_(r),Ud(r,i)}}}break;case"textarea":s_(t,n);break;case"select":e=n.value,e!=null&&Ui(t,!!n.multiple,e,!1)}};h_=zf;f_=ii;var X2={usingClientEntryPoint:!1,Events:[fa,bi,Lu,c_,d_,zf]},Js={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z2={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=g_(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||Y2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Nu=dl.inject(Z2),pn=dl}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X2;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gf(e))throw Error(M(200));return Q2(t,e,null,n)};Lt.createRoot=function(t,e){if(!Gf(t))throw Error(M(299));var n=!1,r="",i=G0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=qf(t,1,!1,null,null,n,!1,r,i),t[Fn]=e.current,Mo(t.nodeType===8?t.parentNode:t),new Kf(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=g_(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return ii(t)};Lt.hydrate=function(t,e,n){if(!Wu(e))throw Error(M(200));return qu(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!Gf(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=G0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=K0(e,null,t,1,n??null,i,!1,s,o),t[Fn]=e.current,Mo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $u(e)};Lt.render=function(t,e,n){if(!Wu(e))throw Error(M(200));return qu(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!Wu(t))throw Error(M(40));return t._reactRootContainer?(ii(function(){qu(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1};Lt.unstable_batchedUpdates=zf;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wu(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return qu(t,e,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function Q0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q0)}catch(t){console.error(t)}}Q0(),Qv.exports=Lt;var eS=Qv.exports,my=eS;Dd.createRoot=my.createRoot,Dd.hydrateRoot=my.hydrateRoot;var gy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},J0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let y=(l&15)<<2|d>>6,_=d&63;u||(_=64,o||(y=64)),r.push(n[f],n[p],n[y],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Y0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||p==null)throw new nS;const y=s<<2|l>>4;if(r.push(y),d!==64){const _=l<<4&240|d>>2;if(r.push(_),p!==64){const R=d<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rS=function(t){const e=Y0(t);return J0.encodeByteArray(e,!0)},uu=function(t){return rS(t).replace(/\./g,"")},X0=function(t){try{return J0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function cu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!iS(n)||(t[n]=cu(t[n],e[n]));return t}function iS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=()=>Z0().__FIREBASE_DEFAULTS__,oS=()=>{if(typeof process>"u"||typeof gy>"u")return;const t=gy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&X0(t[1]);return e&&JSON.parse(e)},Hu=()=>{try{return sS()||oS()||aS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lS=t=>{var e,n;return(n=(e=Hu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uS=t=>{const e=lS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ew=()=>{var t;return(t=Hu())===null||t===void 0?void 0:t.config},cS=t=>{var e;return(e=Hu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[uu(JSON.stringify(n)),uu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Qf(){var t;const e=(t=Hu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pS(){return typeof window<"u"||tw()}function tw(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function mS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rw(){const t=Me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gS(){return!Qf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function du(){try{return typeof indexedDB=="object"}catch{return!1}}function yS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="FirebaseError";class yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vS,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}}class pi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_S(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new yt(i,l,r)}}function _S(t,e){return t.replace(wS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ES(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(vy(s)&&vy(o)){if(!kh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ji(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function oo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function iw(t,e){const n=new IS(t,e);return n.subscribe.bind(n)}class IS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yd),i.error===void 0&&(i.error=yd),i.complete===void 0&&(i.complete=yd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kS(e))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$r){return this.instances.has(e)}getOptions(e=$r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$r){return this.component?this.component.multipleInstances?e:$r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AS(t){return t===$r?void 0:t}function kS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=[];var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const ow={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},xS=te.INFO,RS={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},CS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=RS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ku{constructor(e){this.name=e,this._logLevel=xS,this._logHandler=CS,this._userLogHandler=null,Jf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ow[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}function PS(t){Jf.forEach(e=>{e.setLogLevel(t)})}function NS(t,e){for(const n of Jf){let r=null;e&&e.level&&(r=ow[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const l=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:te[s].toLowerCase(),message:l,args:o,type:i.name})}}}const bS=(t,e)=>e.some(n=>t instanceof n);let _y,wy;function DS(){return _y||(_y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OS(){return wy||(wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aw=new WeakMap,xh=new WeakMap,lw=new WeakMap,vd=new WeakMap,Xf=new WeakMap;function LS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&aw.set(n,t)}).catch(()=>{}),Xf.set(e,t),e}function VS(t){if(xh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xh.set(t,e)}let Rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MS(t){Rh=t(Rh)}function FS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_d(this),e,...n);return lw.set(r,e.sort?e.sort():[e]),yr(r)}:OS().includes(t)?function(...e){return t.apply(_d(this),e),yr(aw.get(this))}:function(...e){return yr(t.apply(_d(this),e))}}function jS(t){return typeof t=="function"?FS(t):(t instanceof IDBTransaction&&VS(t),bS(t,DS())?new Proxy(t,Rh):t)}function yr(t){if(t instanceof IDBRequest)return LS(t);if(vd.has(t))return vd.get(t);const e=jS(t);return e!==t&&(vd.set(t,e),Xf.set(e,t)),e}const _d=t=>Xf.get(t);function US(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=yr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(yr(o.result),u.oldVersion,u.newVersion,yr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const zS=["get","getKey","getAll","getAllKeys","count"],BS=["put","add","delete","clear"],wd=new Map;function Ey(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wd.get(e))return wd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return wd.set(e,s),s}MS(t=>({...t,get:(e,n,r)=>Ey(e,n)||t.get(e,n,r),has:(e,n)=>!!Ey(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hu="@firebase/app",Ch="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Ku("@firebase/app"),qS="@firebase/app-compat",HS="@firebase/analytics-compat",KS="@firebase/analytics",GS="@firebase/app-check-compat",QS="@firebase/app-check",YS="@firebase/auth",JS="@firebase/auth-compat",XS="@firebase/database",ZS="@firebase/data-connect",eA="@firebase/database-compat",tA="@firebase/functions",nA="@firebase/functions-compat",rA="@firebase/installations",iA="@firebase/installations-compat",sA="@firebase/messaging",oA="@firebase/messaging-compat",aA="@firebase/performance",lA="@firebase/performance-compat",uA="@firebase/remote-config",cA="@firebase/remote-config-compat",dA="@firebase/storage",hA="@firebase/storage-compat",fA="@firebase/firestore",pA="@firebase/vertexai-preview",mA="@firebase/firestore-compat",gA="firebase",yA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]",vA={[hu]:"fire-core",[qS]:"fire-core-compat",[KS]:"fire-analytics",[HS]:"fire-analytics-compat",[QS]:"fire-app-check",[GS]:"fire-app-check-compat",[YS]:"fire-auth",[JS]:"fire-auth-compat",[XS]:"fire-rtdb",[ZS]:"fire-data-connect",[eA]:"fire-rtdb-compat",[tA]:"fire-fn",[nA]:"fire-fn-compat",[rA]:"fire-iid",[iA]:"fire-iid-compat",[sA]:"fire-fcm",[oA]:"fire-fcm-compat",[aA]:"fire-perf",[lA]:"fire-perf-compat",[uA]:"fire-rc",[cA]:"fire-rc-compat",[dA]:"fire-gcs",[hA]:"fire-gcs-compat",[fA]:"fire-fst",[mA]:"fire-fst-compat",[pA]:"fire-vertex","fire-js":"fire-js",[gA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map,is=new Map,ss=new Map;function Ho(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function uw(t,e){t.container.addOrOverwriteComponent(e)}function Sr(t){const e=t.name;if(ss.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;ss.set(e,t);for(const n of Tr.values())Ho(n,t);for(const n of is.values())Ho(n,t);return!0}function Zf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _A(t,e,n=Ir){Zf(t,e).clearInstance(n)}function cw(t){return t.options!==void 0}function Ae(t){return t.settings!==void 0}function wA(){ss.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new pi("app","Firebase",EA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dw=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA extends dw{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const l=e;super(l.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,en(hu,Ch,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){tp(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw zt.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=yA;function ep(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ir,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(n||(n=ew()),!n)throw zt.create("no-options");const s=Tr.get(i);if(s){if(kh(n,s.options)&&kh(r,s.config))return s;throw zt.create("duplicate-app",{appName:i})}const o=new sw(i);for(const u of ss.values())o.addComponent(u);const l=new dw(n,r,o);return Tr.set(i,l),l}function TA(t,e){if(pS()&&!tw())throw zt.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;cw(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=d=>[...d].reduce((f,p)=>Math.imul(31,f)+p.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw zt.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=is.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const l=new sw(s);for(const d of ss.values())l.addComponent(d);const u=new IA(n,e,s,l);return is.set(s,u),u}function hw(t=Ir){const e=Tr.get(t);if(!e&&t===Ir&&ew())return ep();if(!e)throw zt.create("no-app",{appName:t});return e}function SA(){return Array.from(Tr.values())}async function tp(t){let e=!1;const n=t.name;Tr.has(n)?(e=!0,Tr.delete(n)):is.has(n)&&t.decRefCount()<=0&&(is.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function en(t,e,n){var r;let i=(r=vA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}Sr(new zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function fw(t,e){if(t!==null&&typeof t!="function")throw zt.create("invalid-log-argument");NS(t,e)}function pw(t){PS(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="firebase-heartbeat-database",kA=1,Ko="firebase-heartbeat-store";let Ed=null;function mw(){return Ed||(Ed=US(AA,kA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw zt.create("idb-open",{originalErrorMessage:t.message})})),Ed}async function xA(t){try{const n=(await mw()).transaction(Ko),r=await n.objectStore(Ko).get(gw(t));return await n.done,r}catch(e){if(e instanceof yt)Bn.warn(e.message);else{const n=zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function Iy(t,e){try{const r=(await mw()).transaction(Ko,"readwrite");await r.objectStore(Ko).put(e,gw(t)),await r.done}catch(n){if(n instanceof yt)Bn.warn(n.message);else{const r=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function gw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=1024,CA=30*24*60*60*1e3;class PA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ty();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=CA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ty(),{heartbeatsToSend:r,unsentEntries:i}=NA(this._heartbeatsCache.heartbeats),s=uu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Bn.warn(n),""}}}function Ty(){return new Date().toISOString().substring(0,10)}function NA(t,e=RA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return du()?yS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sy(t){return uu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(t){Sr(new zn("platform-logger",e=>new $S(e),"PRIVATE")),Sr(new zn("heartbeat",e=>new PA(e),"PRIVATE")),en(hu,Ch,t),en(hu,Ch,"esm2017"),en("fire-js","")}DA("");const OA=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:yt,SDK_VERSION:br,_DEFAULT_ENTRY_NAME:Ir,_addComponent:Ho,_addOrOverwriteComponent:uw,_apps:Tr,_clearComponents:wA,_components:ss,_getProvider:Zf,_isFirebaseApp:cw,_isFirebaseServerApp:Ae,_registerComponent:Sr,_removeServiceInstance:_A,_serverApps:is,deleteApp:tp,getApp:hw,getApps:SA,initializeApp:ep,initializeServerApp:TA,onLog:fw,registerVersion:en,setLogLevel:pw},Symbol.toStringTag,{value:"Module"}));var Ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr,yw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function E(){}E.prototype=v.prototype,I.D=v.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(S,k,C){for(var T=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)T[ht-2]=arguments[ht];return v.prototype[k].apply(S,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,v,E){E||(E=0);var S=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)S[k]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(k=0;16>k;++k)S[k]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=I.g[0],E=I.g[1],k=I.g[2];var C=I.g[3],T=v+(C^E&(k^C))+S[0]+3614090360&4294967295;v=E+(T<<7&4294967295|T>>>25),T=C+(k^v&(E^k))+S[1]+3905402710&4294967295,C=v+(T<<12&4294967295|T>>>20),T=k+(E^C&(v^E))+S[2]+606105819&4294967295,k=C+(T<<17&4294967295|T>>>15),T=E+(v^k&(C^v))+S[3]+3250441966&4294967295,E=k+(T<<22&4294967295|T>>>10),T=v+(C^E&(k^C))+S[4]+4118548399&4294967295,v=E+(T<<7&4294967295|T>>>25),T=C+(k^v&(E^k))+S[5]+1200080426&4294967295,C=v+(T<<12&4294967295|T>>>20),T=k+(E^C&(v^E))+S[6]+2821735955&4294967295,k=C+(T<<17&4294967295|T>>>15),T=E+(v^k&(C^v))+S[7]+4249261313&4294967295,E=k+(T<<22&4294967295|T>>>10),T=v+(C^E&(k^C))+S[8]+1770035416&4294967295,v=E+(T<<7&4294967295|T>>>25),T=C+(k^v&(E^k))+S[9]+2336552879&4294967295,C=v+(T<<12&4294967295|T>>>20),T=k+(E^C&(v^E))+S[10]+4294925233&4294967295,k=C+(T<<17&4294967295|T>>>15),T=E+(v^k&(C^v))+S[11]+2304563134&4294967295,E=k+(T<<22&4294967295|T>>>10),T=v+(C^E&(k^C))+S[12]+1804603682&4294967295,v=E+(T<<7&4294967295|T>>>25),T=C+(k^v&(E^k))+S[13]+4254626195&4294967295,C=v+(T<<12&4294967295|T>>>20),T=k+(E^C&(v^E))+S[14]+2792965006&4294967295,k=C+(T<<17&4294967295|T>>>15),T=E+(v^k&(C^v))+S[15]+1236535329&4294967295,E=k+(T<<22&4294967295|T>>>10),T=v+(k^C&(E^k))+S[1]+4129170786&4294967295,v=E+(T<<5&4294967295|T>>>27),T=C+(E^k&(v^E))+S[6]+3225465664&4294967295,C=v+(T<<9&4294967295|T>>>23),T=k+(v^E&(C^v))+S[11]+643717713&4294967295,k=C+(T<<14&4294967295|T>>>18),T=E+(C^v&(k^C))+S[0]+3921069994&4294967295,E=k+(T<<20&4294967295|T>>>12),T=v+(k^C&(E^k))+S[5]+3593408605&4294967295,v=E+(T<<5&4294967295|T>>>27),T=C+(E^k&(v^E))+S[10]+38016083&4294967295,C=v+(T<<9&4294967295|T>>>23),T=k+(v^E&(C^v))+S[15]+3634488961&4294967295,k=C+(T<<14&4294967295|T>>>18),T=E+(C^v&(k^C))+S[4]+3889429448&4294967295,E=k+(T<<20&4294967295|T>>>12),T=v+(k^C&(E^k))+S[9]+568446438&4294967295,v=E+(T<<5&4294967295|T>>>27),T=C+(E^k&(v^E))+S[14]+3275163606&4294967295,C=v+(T<<9&4294967295|T>>>23),T=k+(v^E&(C^v))+S[3]+4107603335&4294967295,k=C+(T<<14&4294967295|T>>>18),T=E+(C^v&(k^C))+S[8]+1163531501&4294967295,E=k+(T<<20&4294967295|T>>>12),T=v+(k^C&(E^k))+S[13]+2850285829&4294967295,v=E+(T<<5&4294967295|T>>>27),T=C+(E^k&(v^E))+S[2]+4243563512&4294967295,C=v+(T<<9&4294967295|T>>>23),T=k+(v^E&(C^v))+S[7]+1735328473&4294967295,k=C+(T<<14&4294967295|T>>>18),T=E+(C^v&(k^C))+S[12]+2368359562&4294967295,E=k+(T<<20&4294967295|T>>>12),T=v+(E^k^C)+S[5]+4294588738&4294967295,v=E+(T<<4&4294967295|T>>>28),T=C+(v^E^k)+S[8]+2272392833&4294967295,C=v+(T<<11&4294967295|T>>>21),T=k+(C^v^E)+S[11]+1839030562&4294967295,k=C+(T<<16&4294967295|T>>>16),T=E+(k^C^v)+S[14]+4259657740&4294967295,E=k+(T<<23&4294967295|T>>>9),T=v+(E^k^C)+S[1]+2763975236&4294967295,v=E+(T<<4&4294967295|T>>>28),T=C+(v^E^k)+S[4]+1272893353&4294967295,C=v+(T<<11&4294967295|T>>>21),T=k+(C^v^E)+S[7]+4139469664&4294967295,k=C+(T<<16&4294967295|T>>>16),T=E+(k^C^v)+S[10]+3200236656&4294967295,E=k+(T<<23&4294967295|T>>>9),T=v+(E^k^C)+S[13]+681279174&4294967295,v=E+(T<<4&4294967295|T>>>28),T=C+(v^E^k)+S[0]+3936430074&4294967295,C=v+(T<<11&4294967295|T>>>21),T=k+(C^v^E)+S[3]+3572445317&4294967295,k=C+(T<<16&4294967295|T>>>16),T=E+(k^C^v)+S[6]+76029189&4294967295,E=k+(T<<23&4294967295|T>>>9),T=v+(E^k^C)+S[9]+3654602809&4294967295,v=E+(T<<4&4294967295|T>>>28),T=C+(v^E^k)+S[12]+3873151461&4294967295,C=v+(T<<11&4294967295|T>>>21),T=k+(C^v^E)+S[15]+530742520&4294967295,k=C+(T<<16&4294967295|T>>>16),T=E+(k^C^v)+S[2]+3299628645&4294967295,E=k+(T<<23&4294967295|T>>>9),T=v+(k^(E|~C))+S[0]+4096336452&4294967295,v=E+(T<<6&4294967295|T>>>26),T=C+(E^(v|~k))+S[7]+1126891415&4294967295,C=v+(T<<10&4294967295|T>>>22),T=k+(v^(C|~E))+S[14]+2878612391&4294967295,k=C+(T<<15&4294967295|T>>>17),T=E+(C^(k|~v))+S[5]+4237533241&4294967295,E=k+(T<<21&4294967295|T>>>11),T=v+(k^(E|~C))+S[12]+1700485571&4294967295,v=E+(T<<6&4294967295|T>>>26),T=C+(E^(v|~k))+S[3]+2399980690&4294967295,C=v+(T<<10&4294967295|T>>>22),T=k+(v^(C|~E))+S[10]+4293915773&4294967295,k=C+(T<<15&4294967295|T>>>17),T=E+(C^(k|~v))+S[1]+2240044497&4294967295,E=k+(T<<21&4294967295|T>>>11),T=v+(k^(E|~C))+S[8]+1873313359&4294967295,v=E+(T<<6&4294967295|T>>>26),T=C+(E^(v|~k))+S[15]+4264355552&4294967295,C=v+(T<<10&4294967295|T>>>22),T=k+(v^(C|~E))+S[6]+2734768916&4294967295,k=C+(T<<15&4294967295|T>>>17),T=E+(C^(k|~v))+S[13]+1309151649&4294967295,E=k+(T<<21&4294967295|T>>>11),T=v+(k^(E|~C))+S[4]+4149444226&4294967295,v=E+(T<<6&4294967295|T>>>26),T=C+(E^(v|~k))+S[11]+3174756917&4294967295,C=v+(T<<10&4294967295|T>>>22),T=k+(v^(C|~E))+S[2]+718787259&4294967295,k=C+(T<<15&4294967295|T>>>17),T=E+(C^(k|~v))+S[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+k&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var E=v-this.blockSize,S=this.B,k=this.h,C=0;C<v;){if(k==0)for(;C<=E;)i(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<v;)if(S[k++]=I.charCodeAt(C++),k==this.blockSize){i(this,S),k=0;break}}else for(;C<v;)if(S[k++]=I[C++],k==this.blockSize){i(this,S),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var E=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=E&255,E/=256;for(this.u(I),I=Array(16),v=E=0;4>v;++v)for(var S=0;32>S;S+=8)I[E++]=this.g[v]>>>S&255;return I};function s(I,v){var E=l;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=v(I)}function o(I,v){this.h=v;for(var E=[],S=!0,k=I.length-1;0<=k;k--){var C=I[k]|0;S&&C==v||(E[k]=C,S=!1)}this.g=E}var l={};function u(I){return-128<=I&&128>I?s(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return O(d(-I));for(var v=[],E=1,S=0;I>=E;S++)v[S]=I/E|0,E*=4294967296;return new o(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return O(f(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=d(Math.pow(v,8)),S=p,k=0;k<I.length;k+=8){var C=Math.min(8,I.length-k),T=parseInt(I.substring(k,k+C),v);8>C?(C=d(Math.pow(v,C)),S=S.j(C).add(d(T))):(S=S.j(E),S=S.add(d(T)))}return S}var p=u(0),y=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var I=0,v=1,E=0;E<this.g.length;E++){var S=this.i(E);I+=(0<=S?S:4294967296+S)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(N(this))return"-"+O(this).toString(I);for(var v=d(Math.pow(I,6)),E=this,S="";;){var k=D(E,v).g;E=A(E,k.j(v));var C=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=k,R(E))return C+S;for(;6>C.length;)C="0"+C;S=C+S}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function N(I){return I.h==-1}t.l=function(I){return I=A(this,I),N(I)?-1:R(I)?0:1};function O(I){for(var v=I.g.length,E=[],S=0;S<v;S++)E[S]=~I.g[S];return new o(E,~I.h).add(y)}t.abs=function(){return N(this)?O(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],S=0,k=0;k<=v;k++){var C=S+(this.i(k)&65535)+(I.i(k)&65535),T=(C>>>16)+(this.i(k)>>>16)+(I.i(k)>>>16);S=T>>>16,C&=65535,T&=65535,E[k]=T<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function A(I,v){return I.add(O(v))}t.j=function(I){if(R(this)||R(I))return p;if(N(this))return N(I)?O(this).j(O(I)):O(O(this).j(I));if(N(I))return O(this.j(O(I)));if(0>this.l(_)&&0>I.l(_))return d(this.m()*I.m());for(var v=this.g.length+I.g.length,E=[],S=0;S<2*v;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var k=0;k<I.g.length;k++){var C=this.i(S)>>>16,T=this.i(S)&65535,ht=I.i(k)>>>16,Vr=I.i(k)&65535;E[2*S+2*k]+=T*Vr,w(E,2*S+2*k),E[2*S+2*k+1]+=C*Vr,w(E,2*S+2*k+1),E[2*S+2*k+1]+=T*ht,w(E,2*S+2*k+1),E[2*S+2*k+2]+=C*ht,w(E,2*S+2*k+2)}for(S=0;S<v;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=v;S<2*v;S++)E[S]=0;return new o(E,0)};function w(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function x(I,v){this.g=I,this.h=v}function D(I,v){if(R(v))throw Error("division by zero");if(R(I))return new x(p,p);if(N(I))return v=D(O(I),v),new x(O(v.g),O(v.h));if(N(v))return v=D(I,O(v)),new x(O(v.g),v.h);if(30<I.g.length){if(N(I)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var E=y,S=v;0>=S.l(I);)E=z(E),S=z(S);var k=j(E,1),C=j(S,1);for(S=j(S,2),E=j(E,2);!R(S);){var T=C.add(S);0>=T.l(I)&&(k=k.add(E),C=T),S=j(S,1),E=j(E,1)}return v=A(I,k.j(v)),new x(k,v)}for(k=p;0<=I.l(v);){for(E=Math.max(1,Math.floor(I.m()/v.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),C=d(E),T=C.j(v);N(T)||0<T.l(I);)E-=S,C=d(E),T=C.j(v);R(C)&&(C=y),k=k.add(C),I=A(I,T)}return new x(k,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],S=0;S<v;S++)E[S]=this.i(S)&I.i(S);return new o(E,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],S=0;S<v;S++)E[S]=this.i(S)|I.i(S);return new o(E,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],S=0;S<v;S++)E[S]=this.i(S)^I.i(S);return new o(E,this.h^I.h)};function z(I){for(var v=I.g.length+1,E=[],S=0;S<v;S++)E[S]=I.i(S)<<1|I.i(S-1)>>>31;return new o(E,I.h)}function j(I,v){var E=v>>5;v%=32;for(var S=I.g.length-E,k=[],C=0;C<S;C++)k[C]=0<v?I.i(C+E)>>>v|I.i(C+E+1)<<32-v:I.i(C+E);return new o(k,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,Jr=o}).apply(typeof Ay<"u"?Ay:typeof self<"u"?self:typeof window<"u"?window:{});var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vw,ao,_w,Pl,Ph,ww,Ew,Iw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,h){return a==Array.prototype||a==Object.prototype||(a[c]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof hl=="object"&&hl];for(var c=0;c<a.length;++c){var h=a[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var h=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in h))break e;h=h[P]}a=a[a.length-1],g=h[a],c=c(g),c!=g&&c!=null&&e(h,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var h=0,g=!1,P={next:function(){if(!g&&h<a.length){var b=h++;return{value:c(b,a[b]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,h){return a.call.apply(a.bind,arguments)}function p(a,c,h){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function y(a,c,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,y.apply(null,arguments)}function _(a,c){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,c){function h(){}h.prototype=c.prototype,a.aa=c.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(g,P,b){for(var U=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)U[ce-2]=arguments[ce];return c.prototype[P].apply(g,U)}}function N(a){const c=a.length;if(0<c){const h=Array(c);for(let g=0;g<c;g++)h[g]=a[g];return h}return[]}function O(a,c){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(u(g)){const P=a.length||0,b=g.length||0;a.length=P+b;for(let U=0;U<b;U++)a[P+U]=g[U]}else a.push(g)}}class A{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var z=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function j(a,c,h){for(const g in a)c.call(h,a[g],g,a)}function I(a,c){for(const h in a)c.call(void 0,a[h],h,a)}function v(a){const c={};for(const h in a)c[h]=a[h];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,c){let h,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(h in g)a[h]=g[h];for(let b=0;b<E.length;b++)h=E[b],Object.prototype.hasOwnProperty.call(g,h)&&(a[h]=g[h])}}function k(a){var c=1;a=a.split(":");const h=[];for(;0<c&&a.length;)h.push(a.shift()),c--;return a.length&&h.push(a.join(":")),h}function C(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class ht{constructor(){this.h=this.g=null}add(c,h){const g=Vr.get();g.set(c,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Vr=new A(()=>new Ps,a=>a.reset());class Ps{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let En,B=!1,Q=new ht,Z=()=>{const a=l.Promise.resolve(void 0);En=()=>{a.then(ve)}};var ve=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(h){C(h)}var c=Vr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var In=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return a}();function Tn(a,c){if(Ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(z){e:{try{D(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else h=="mouseover"?c=a.fromElement:h=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Sn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Tn.aa.h.call(this)}}R(Tn,Ce);var Sn={2:"touch",3:"pen",4:"mouse"};Tn.prototype.h=function(){Tn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var An="closure_listenable_"+(1e6*Math.random()|0),J1=0;function X1(a,c,h,g,P){this.listener=a,this.proxy=null,this.src=c,this.type=h,this.capture=!!g,this.ha=P,this.key=++J1,this.da=this.fa=!1}function Na(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ba(a){this.src=a,this.g={},this.h=0}ba.prototype.add=function(a,c,h,g,P){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var U=Tc(a,c,g,P);return-1<U?(c=a[U],h||(c.fa=!1)):(c=new X1(c,this.src,b,!!g,P),c.fa=h,a.push(c)),c};function Ic(a,c){var h=c.type;if(h in a.g){var g=a.g[h],P=Array.prototype.indexOf.call(g,c,void 0),b;(b=0<=P)&&Array.prototype.splice.call(g,P,1),b&&(Na(c),a.g[h].length==0&&(delete a.g[h],a.h--))}}function Tc(a,c,h,g){for(var P=0;P<a.length;++P){var b=a[P];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==g)return P}return-1}var Sc="closure_lm_"+(1e6*Math.random()|0),Ac={};function lm(a,c,h,g,P){if(Array.isArray(c)){for(var b=0;b<c.length;b++)lm(a,c[b],h,g,P);return null}return h=dm(h),a&&a[An]?a.K(c,h,d(g)?!!g.capture:!1,P):Z1(a,c,h,!1,g,P)}function Z1(a,c,h,g,P,b){if(!c)throw Error("Invalid event type");var U=d(P)?!!P.capture:!!P,ce=xc(a);if(ce||(a[Sc]=ce=new ba(a)),h=ce.add(c,h,g,U,b),h.proxy)return h;if(g=eI(),h.proxy=g,g.src=a,g.listener=h,a.addEventListener)In||(P=U),P===void 0&&(P=!1),a.addEventListener(c.toString(),g,P);else if(a.attachEvent)a.attachEvent(cm(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function eI(){function a(h){return c.call(a.src,a.listener,h)}const c=tI;return a}function um(a,c,h,g,P){if(Array.isArray(c))for(var b=0;b<c.length;b++)um(a,c[b],h,g,P);else g=d(g)?!!g.capture:!!g,h=dm(h),a&&a[An]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],h=Tc(b,h,g,P),-1<h&&(Na(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=xc(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Tc(c,h,g,P)),(h=-1<a?c[a]:null)&&kc(h))}function kc(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[An])Ic(c.i,a);else{var h=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(h,g,a.capture):c.detachEvent?c.detachEvent(cm(h),g):c.addListener&&c.removeListener&&c.removeListener(g),(h=xc(c))?(Ic(h,a),h.h==0&&(h.src=null,c[Sc]=null)):Na(a)}}}function cm(a){return a in Ac?Ac[a]:Ac[a]="on"+a}function tI(a,c){if(a.da)a=!0;else{c=new Tn(c,this);var h=a.listener,g=a.ha||a.src;a.fa&&kc(a),a=h.call(g,c)}return a}function xc(a){return a=a[Sc],a instanceof ba?a:null}var Rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function dm(a){return typeof a=="function"?a:(a[Rc]||(a[Rc]=function(c){return a.handleEvent(c)}),a[Rc])}function tt(){ue.call(this),this.i=new ba(this),this.M=this,this.F=null}R(tt,ue),tt.prototype[An]=!0,tt.prototype.removeEventListener=function(a,c,h,g){um(this,a,c,h,g)};function ft(a,c){var h,g=a.F;if(g)for(h=[];g;g=g.F)h.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Ce(c,a);else if(c instanceof Ce)c.target=c.target||a;else{var P=c;c=new Ce(g,a),S(c,P)}if(P=!0,h)for(var b=h.length-1;0<=b;b--){var U=c.g=h[b];P=Da(U,g,!0,c)&&P}if(U=c.g=a,P=Da(U,g,!0,c)&&P,P=Da(U,g,!1,c)&&P,h)for(b=0;b<h.length;b++)U=c.g=h[b],P=Da(U,g,!1,c)&&P}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var h=a.g[c],g=0;g<h.length;g++)Na(h[g]);delete a.g[c],a.h--}}this.F=null},tt.prototype.K=function(a,c,h,g){return this.i.add(String(a),c,!1,h,g)},tt.prototype.L=function(a,c,h,g){return this.i.add(String(a),c,!0,h,g)};function Da(a,c,h,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,b=0;b<c.length;++b){var U=c[b];if(U&&!U.da&&U.capture==h){var ce=U.listener,He=U.ha||U.src;U.fa&&Ic(a.i,U),P=ce.call(He,g)!==!1&&P}}return P&&!g.defaultPrevented}function hm(a,c,h){if(typeof a=="function")h&&(a=y(a,h));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function fm(a){a.g=hm(()=>{a.g=null,a.i&&(a.i=!1,fm(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class nI extends ue{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:fm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ns(a){ue.call(this),this.h=a,this.g={}}R(Ns,ue);var pm=[];function mm(a){j(a.g,function(c,h){this.g.hasOwnProperty(h)&&kc(c)},a),a.g={}}Ns.prototype.N=function(){Ns.aa.N.call(this),mm(this)},Ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cc=l.JSON.stringify,rI=l.JSON.parse,iI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Pc(){}Pc.prototype.h=null;function gm(a){return a.h||(a.h=a.i())}function ym(){}var bs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Nc(){Ce.call(this,"d")}R(Nc,Ce);function bc(){Ce.call(this,"c")}R(bc,Ce);var Mr={},vm=null;function Oa(){return vm=vm||new tt}Mr.La="serverreachability";function _m(a){Ce.call(this,Mr.La,a)}R(_m,Ce);function Ds(a){const c=Oa();ft(c,new _m(c))}Mr.STAT_EVENT="statevent";function wm(a,c){Ce.call(this,Mr.STAT_EVENT,a),this.stat=c}R(wm,Ce);function pt(a){const c=Oa();ft(c,new wm(c,a))}Mr.Ma="timingevent";function Em(a,c){Ce.call(this,Mr.Ma,a),this.size=c}R(Em,Ce);function Os(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ls(){this.g=!0}Ls.prototype.xa=function(){this.g=!1};function sI(a,c,h,g,P,b){a.info(function(){if(a.g)if(b)for(var U="",ce=b.split("&"),He=0;He<ce.length;He++){var se=ce[He].split("=");if(1<se.length){var nt=se[0];se=se[1];var rt=nt.split("_");U=2<=rt.length&&rt[1]=="type"?U+(nt+"="+se+"&"):U+(nt+"=redacted&")}}else U=null;else U=b;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+c+`
`+h+`
`+U})}function oI(a,c,h,g,P,b,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+c+`
`+h+`
`+b+" "+U})}function vi(a,c,h,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+lI(a,h)+(g?" "+g:"")})}function aI(a,c){a.info(function(){return"TIMEOUT: "+c})}Ls.prototype.info=function(){};function lI(a,c){if(!a.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var g=h[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var b=P[0];if(b!="noop"&&b!="stop"&&b!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return Cc(h)}catch{return c}}var La={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Im={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dc;function Va(){}R(Va,Pc),Va.prototype.g=function(){return new XMLHttpRequest},Va.prototype.i=function(){return{}},Dc=new Va;function Qn(a,c,h,g){this.j=a,this.i=c,this.l=h,this.R=g||1,this.U=new Ns(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tm}function Tm(){this.i=null,this.g="",this.h=!1}var Sm={},Oc={};function Lc(a,c,h){a.L=1,a.v=Ua(kn(c)),a.m=h,a.P=!0,Am(a,null)}function Am(a,c){a.F=Date.now(),Ma(a),a.A=kn(a.v);var h=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),jm(h.i,"t",g),a.C=0,h=a.j.J,a.h=new Tm,a.g=rg(a.j,h?c:null,!a.m),0<a.O&&(a.M=new nI(y(a.Y,a,a.g),a.O)),c=a.U,h=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(pm[0]=P.toString()),P=pm);for(var b=0;b<P.length;b++){var U=lm(h,P[b],g||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Ds(),sI(a.i,a.u,a.A,a.l,a.R,a.m)}Qn.prototype.ca=function(a){a=a.target;const c=this.M;c&&xn(a)==3?c.j():this.Y(a)},Qn.prototype.Y=function(a){try{if(a==this.g)e:{const rt=xn(this.g);var c=this.g.Ba();const Ei=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Hm(this.g)))){this.J||rt!=4||c==7||(c==8||0>=Ei?Ds(3):Ds(2)),Vc(this);var h=this.g.Z();this.X=h;t:if(km(this)){var g=Hm(this.g);a="";var P=g.length,b=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),Vs(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(b&&c==P-1)});g.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=h==200,oI(this.i,this.u,this.A,this.l,this.R,rt,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,He=this.g;if((ce=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ce)){var se=ce;break t}}se=null}if(h=se)vi(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mc(this,h);else{this.o=!1,this.s=3,pt(12),Fr(this),Vs(this);break e}}if(this.P){h=!0;let Kt;for(;!this.J&&this.C<U.length;)if(Kt=uI(this,U),Kt==Oc){rt==4&&(this.s=4,pt(14),h=!1),vi(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==Sm){this.s=4,pt(15),vi(this.i,this.l,U,"[Invalid Chunk]"),h=!1;break}else vi(this.i,this.l,Kt,null),Mc(this,Kt);if(km(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||U.length!=0||this.h.h||(this.s=1,pt(16),h=!1),this.o=this.o&&h,!h)vi(this.i,this.l,U,"[Invalid Chunked Response]"),Fr(this),Vs(this);else if(0<U.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),$c(nt),nt.M=!0,pt(11))}}else vi(this.i,this.l,U,null),Mc(this,U);rt==4&&Fr(this),this.o&&!this.J&&(rt==4?Zm(this.j,this):(this.o=!1,Ma(this)))}else kI(this.g),h==400&&0<U.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Fr(this),Vs(this)}}}catch{}finally{}};function km(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function uI(a,c){var h=a.C,g=c.indexOf(`
`,h);return g==-1?Oc:(h=Number(c.substring(h,g)),isNaN(h)?Sm:(g+=1,g+h>c.length?Oc:(c=c.slice(g,g+h),a.C=g+h,c)))}Qn.prototype.cancel=function(){this.J=!0,Fr(this)};function Ma(a){a.S=Date.now()+a.I,xm(a,a.I)}function xm(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Os(y(a.ba,a),c)}function Vc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(aI(this.i,this.A),this.L!=2&&(Ds(),pt(17)),Fr(this),this.s=2,Vs(this)):xm(this,this.S-a)};function Vs(a){a.j.G==0||a.J||Zm(a.j,a)}function Fr(a){Vc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,mm(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Mc(a,c){try{var h=a.j;if(h.G!=0&&(h.g==a||Fc(h.h,a))){if(!a.K&&Fc(h.h,a)&&h.G==3){try{var g=h.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)Ha(h),Wa(h);else break e;Bc(h),pt(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=Os(y(h.Za,h),6e3));if(1>=Pm(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ur(h,11)}else if((a.K||h.g==a)&&Ha(h),!w(c))for(P=h.Da.g.parse(c),c=0;c<P.length;c++){let se=P[c];if(h.T=se[0],se=se[1],h.G==2)if(se[0]=="c"){h.K=se[1],h.ia=se[2];const nt=se[3];nt!=null&&(h.la=nt,h.j.info("VER="+h.la));const rt=se[4];rt!=null&&(h.Aa=rt,h.j.info("SVER="+h.Aa));const Ei=se[5];Ei!=null&&typeof Ei=="number"&&0<Ei&&(g=1.5*Ei,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const Kt=a.g;if(Kt){const Ga=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ga){var b=g.h;b.g||Ga.indexOf("spdy")==-1&&Ga.indexOf("quic")==-1&&Ga.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(jc(b,b.h),b.h=null))}if(g.D){const Wc=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Wc&&(g.ya=Wc,fe(g.I,g.D,Wc))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var U=a;if(g.qa=ng(g,g.J?g.ia:null,g.W),U.K){Nm(g.h,U);var ce=U,He=g.L;He&&(ce.I=He),ce.B&&(Vc(ce),Ma(ce)),g.g=U}else Jm(g);0<h.i.length&&qa(h)}else se[0]!="stop"&&se[0]!="close"||Ur(h,7);else h.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Ur(h,7):zc(h):se[0]!="noop"&&h.l&&h.l.ta(se),h.v=0)}}Ds(4)}catch{}}var cI=class{constructor(a,c){this.g=a,this.map=c}};function Rm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Pm(a){return a.h?1:a.g?a.g.size:0}function Fc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function jc(a,c){a.g?a.g.add(c):a.h=c}function Nm(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Rm.prototype.cancel=function(){if(this.i=bm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const h of a.g.values())c=c.concat(h.D);return c}return N(a.i)}function dI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],h=a.length,g=0;g<h;g++)c.push(a[g]);return c}c=[],h=0;for(g in a)c[h++]=a[g];return c}function hI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var h=0;h<a;h++)c.push(h);return c}c=[],h=0;for(const g in a)c[h++]=g;return c}}}function Dm(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var h=hI(a),g=dI(a),P=g.length,b=0;b<P;b++)c.call(void 0,g[b],h&&h[b],a)}var Om=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fI(a,c){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var g=a[h].indexOf("="),P=null;if(0<=g){var b=a[h].substring(0,g);P=a[h].substring(g+1)}else b=a[h];c(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function jr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof jr){this.h=a.h,Fa(this,a.j),this.o=a.o,this.g=a.g,ja(this,a.s),this.l=a.l;var c=a.i,h=new js;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Lm(this,h),this.m=a.m}else a&&(c=String(a).match(Om))?(this.h=!1,Fa(this,c[1]||"",!0),this.o=Ms(c[2]||""),this.g=Ms(c[3]||"",!0),ja(this,c[4]),this.l=Ms(c[5]||"",!0),Lm(this,c[6]||"",!0),this.m=Ms(c[7]||"")):(this.h=!1,this.i=new js(null,this.h))}jr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Fs(c,Vm,!0),":");var h=this.g;return(h||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Fs(c,Vm,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Fs(h,h.charAt(0)=="/"?gI:mI,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Fs(h,vI)),a.join("")};function kn(a){return new jr(a)}function Fa(a,c,h){a.j=h?Ms(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ja(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Lm(a,c,h){c instanceof js?(a.i=c,_I(a.i,a.h)):(h||(c=Fs(c,yI)),a.i=new js(c,a.h))}function fe(a,c,h){a.i.set(c,h)}function Ua(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ms(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Fs(a,c,h){return typeof a=="string"?(a=encodeURI(a).replace(c,pI),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Vm=/[#\/\?@]/g,mI=/[#\?:]/g,gI=/[#\?]/g,yI=/[#\?@]/g,vI=/#/g;function js(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Yn(a){a.g||(a.g=new Map,a.h=0,a.i&&fI(a.i,function(c,h){a.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=js.prototype,t.add=function(a,c){Yn(this),this.i=null,a=_i(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(c),this.h+=1,this};function Mm(a,c){Yn(a),c=_i(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Fm(a,c){return Yn(a),c=_i(a,c),a.g.has(c)}t.forEach=function(a,c){Yn(this),this.g.forEach(function(h,g){h.forEach(function(P){a.call(c,P,g,this)},this)},this)},t.na=function(){Yn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let g=0;g<c.length;g++){const P=a[g];for(let b=0;b<P.length;b++)h.push(c[g])}return h},t.V=function(a){Yn(this);let c=[];if(typeof a=="string")Fm(this,a)&&(c=c.concat(this.g.get(_i(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)c=c.concat(a[h])}return c},t.set=function(a,c){return Yn(this),this.i=null,a=_i(this,a),Fm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function jm(a,c,h){Mm(a,c),0<h.length&&(a.i=null,a.g.set(_i(a,c),N(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var g=c[h];const b=encodeURIComponent(String(g)),U=this.V(g);for(g=0;g<U.length;g++){var P=b;U[g]!==""&&(P+="="+encodeURIComponent(String(U[g]))),a.push(P)}}return this.i=a.join("&")};function _i(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function _I(a,c){c&&!a.j&&(Yn(a),a.i=null,a.g.forEach(function(h,g){var P=g.toLowerCase();g!=P&&(Mm(this,g),jm(this,P,h))},a)),a.j=c}function wI(a,c){const h=new Ls;if(l.Image){const g=new Image;g.onload=_(Jn,h,"TestLoadImage: loaded",!0,c,g),g.onerror=_(Jn,h,"TestLoadImage: error",!1,c,g),g.onabort=_(Jn,h,"TestLoadImage: abort",!1,c,g),g.ontimeout=_(Jn,h,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function EI(a,c){const h=new Ls,g=new AbortController,P=setTimeout(()=>{g.abort(),Jn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(b=>{clearTimeout(P),b.ok?Jn(h,"TestPingServer: ok",!0,c):Jn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Jn(h,"TestPingServer: error",!1,c)})}function Jn(a,c,h,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(h)}catch{}}function II(){this.g=new iI}function TI(a,c,h){const g=h||"";try{Dm(a,function(P,b){let U=P;d(P)&&(U=Cc(P)),c.push(g+b+"="+encodeURIComponent(U))})}catch(P){throw c.push(g+"type="+encodeURIComponent("_badmap")),P}}function za(a){this.l=a.Ub||null,this.j=a.eb||!1}R(za,Pc),za.prototype.g=function(){return new Ba(this.l,this.j)},za.prototype.i=function(a){return function(){return a}}({});function Ba(a,c){tt.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ba,tt),t=Ba.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Um(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Um(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Us(this):zs(this),this.readyState==3&&Um(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Us(this))},t.Qa=function(a){this.g&&(this.response=a,Us(this))},t.ga=function(){this.g&&Us(this)};function Us(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zs(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=c.next();return a.join(`\r
`)};function zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function zm(a){let c="";return j(a,function(h,g){c+=g,c+=":",c+=h,c+=`\r
`}),c}function Uc(a,c,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=zm(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):fe(a,c,h))}function Te(a){tt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Te,tt);var SI=/^https?$/i,AI=["POST","PUT"];t=Te.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dc.g(),this.v=this.o?gm(this.o):gm(Dc),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){Bm(this,b);return}if(a=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)h.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const b of g.keys())h.set(b,g.get(b));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(AI,c,void 0))||g||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,U]of h)this.g.setRequestHeader(b,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qm(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){Bm(this,b)}};function Bm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,$m(a),$a(a)}function $m(a){a.A||(a.A=!0,ft(a,"complete"),ft(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ft(this,"complete"),ft(this,"abort"),$a(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$a(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Wm(this):this.bb())},t.bb=function(){Wm(this)};function Wm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||xn(a)!=4||a.Z()!=2)){if(a.u&&xn(a)==4)hm(a.Ea,0,a);else if(ft(a,"readystatechange"),xn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var g;if(g=U===0){var P=String(a.D).match(Om)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!SI.test(P?P.toLowerCase():"")}h=g}if(h)ft(a,"complete"),ft(a,"success");else{a.m=6;try{var b=2<xn(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",$m(a)}}finally{$a(a)}}}}function $a(a,c){if(a.g){qm(a);const h=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ft(a,"ready");try{h.onreadystatechange=g}catch{}}}function qm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function xn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),rI(c)}};function Hm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function kI(a){const c={};a=(a.g&&2<=xn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var h=k(a[g]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[P]||[];c[P]=b,b.push(h)}I(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bs(a,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||c}function Km(a){this.Aa=0,this.i=[],this.j=new Ls,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bs("baseRetryDelayMs",5e3,a),this.cb=Bs("retryDelaySeedMs",1e4,a),this.Wa=Bs("forwardChannelMaxRetries",2,a),this.wa=Bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Rm(a&&a.concurrentRequestLimit),this.Da=new II,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Km.prototype,t.la=8,t.G=1,t.connect=function(a,c,h,g){pt(0),this.W=a,this.H=c||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=ng(this,null,this.W),qa(this)};function zc(a){if(Gm(a),a.G==3){var c=a.U++,h=kn(a.I);if(fe(h,"SID",a.K),fe(h,"RID",c),fe(h,"TYPE","terminate"),$s(a,h),c=new Qn(a,a.j,c),c.L=2,c.v=Ua(kn(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=rg(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ma(c)}tg(a)}function Wa(a){a.g&&($c(a),a.g.cancel(),a.g=null)}function Gm(a){Wa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ha(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function qa(a){if(!Cm(a.h)&&!a.s){a.s=!0;var c=a.Ga;En||Z(),B||(En(),B=!0),Q.add(c,a),a.B=0}}function xI(a,c){return Pm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Os(y(a.Ga,a,c),eg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Qn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=v(b),S(b,this.S)):b=this.S),this.m!==null||this.O||(P.H=b,b=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Ym(this,P,c),h=kn(this.I),fe(h,"RID",a),fe(h,"CVER",22),this.D&&fe(h,"X-HTTP-Session-Id",this.D),$s(this,h),b&&(this.O?c="headers="+encodeURIComponent(String(zm(b)))+"&"+c:this.m&&Uc(h,this.m,b)),jc(this.h,P),this.Ua&&fe(h,"TYPE","init"),this.P?(fe(h,"$req",c),fe(h,"SID","null"),P.T=!0,Lc(P,h,null)):Lc(P,h,c),this.G=2}}else this.G==3&&(a?Qm(this,a):this.i.length==0||Cm(this.h)||Qm(this))};function Qm(a,c){var h;c?h=c.l:h=a.U++;const g=kn(a.I);fe(g,"SID",a.K),fe(g,"RID",h),fe(g,"AID",a.T),$s(a,g),a.m&&a.o&&Uc(g,a.m,a.o),h=new Qn(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Ym(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),jc(a.h,h),Lc(h,g,c)}function $s(a,c){a.H&&j(a.H,function(h,g){fe(c,g,h)}),a.l&&Dm({},function(h,g){fe(c,g,h)})}function Ym(a,c,h){h=Math.min(a.i.length,h);var g=a.l?y(a.l.Na,a.l,a):null;e:{var P=a.i;let b=-1;for(;;){const U=["count="+h];b==-1?0<h?(b=P[0].g,U.push("ofs="+b)):b=0:U.push("ofs="+b);let ce=!0;for(let He=0;He<h;He++){let se=P[He].g;const nt=P[He].map;if(se-=b,0>se)b=Math.max(0,P[He].g-100),ce=!1;else try{TI(nt,U,"req"+se+"_")}catch{g&&g(nt)}}if(ce){g=U.join("&");break e}}}return a=a.i.splice(0,h),c.D=a,g}function Jm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;En||Z(),B||(En(),B=!0),Q.add(c,a),a.v=0}}function Bc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Os(y(a.Fa,a),eg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Xm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Os(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Wa(this),Xm(this))};function $c(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Xm(a){a.g=new Qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=kn(a.qa);fe(c,"RID","rpc"),fe(c,"SID",a.K),fe(c,"AID",a.T),fe(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(c,"TO",a.ja),fe(c,"TYPE","xmlhttp"),$s(a,c),a.m&&a.o&&Uc(c,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=Ua(kn(c)),h.m=null,h.P=!0,Am(h,a)}t.Za=function(){this.C!=null&&(this.C=null,Wa(this),Bc(this),pt(19))};function Ha(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Zm(a,c){var h=null;if(a.g==c){Ha(a),$c(a),a.g=null;var g=2}else if(Fc(a.h,c))h=c.D,Nm(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;g=Oa(),ft(g,new Em(g,h)),qa(a)}else Jm(a);else if(P=c.s,P==3||P==0&&0<c.X||!(g==1&&xI(a,c)||g==2&&Bc(a)))switch(h&&0<h.length&&(c=a.h,c.i=c.i.concat(h)),P){case 1:Ur(a,5);break;case 4:Ur(a,10);break;case 3:Ur(a,6);break;default:Ur(a,2)}}}function eg(a,c){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*c}function Ur(a,c){if(a.j.info("Error code "+c),c==2){var h=y(a.fb,a),g=a.Xa;const P=!g;g=new jr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fa(g,"https"),Ua(g),P?wI(g.toString(),h):EI(g.toString(),h)}else pt(2);a.G=0,a.l&&a.l.sa(c),tg(a),Gm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function tg(a){if(a.G=0,a.ka=[],a.l){const c=bm(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function ng(a,c,h){var g=h instanceof jr?kn(h):new jr(h);if(g.g!="")c&&(g.g=c+"."+g.g),ja(g,g.s);else{var P=l.location;g=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var b=new jr(null);g&&Fa(b,g),c&&(b.g=c),P&&ja(b,P),h&&(b.l=h),g=b}return h=a.D,c=a.ya,h&&c&&fe(g,h,c),fe(g,"VER",a.la),$s(a,g),g}function rg(a,c,h){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Te(new za({eb:h})):new Te(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ig(){}t=ig.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ka(){}Ka.prototype.g=function(a,c){return new xt(a,c)};function xt(a,c){tt.call(this),this.g=new Km(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!w(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new wi(this)}R(xt,tt),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){zc(this.g)},xt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=Cc(a),a=h);c.i.push(new cI(c.Ya++,a)),c.G==3&&qa(c)},xt.prototype.N=function(){this.g.l=null,delete this.j,zc(this.g),delete this.g,xt.aa.N.call(this)};function sg(a){Nc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const h in c){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(sg,Nc);function og(){bc.call(this),this.status=1}R(og,bc);function wi(a){this.g=a}R(wi,ig),wi.prototype.ua=function(){ft(this.g,"a")},wi.prototype.ta=function(a){ft(this.g,new sg(a))},wi.prototype.sa=function(a){ft(this.g,new og)},wi.prototype.ra=function(){ft(this.g,"b")},Ka.prototype.createWebChannel=Ka.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Iw=function(){return new Ka},Ew=function(){return Oa()},ww=Mr,Ph={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},La.NO_ERROR=0,La.TIMEOUT=8,La.HTTP_ERROR=6,Pl=La,Im.COMPLETE="complete",_w=Im,ym.EventType=bs,bs.OPEN="a",bs.CLOSE="b",bs.ERROR="c",bs.MESSAGE="d",tt.prototype.listen=tt.prototype.K,ao=ym,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,vw=Te}).apply(typeof hl<"u"?hl:typeof self<"u"?self:typeof window<"u"?window:{});const ky="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let at=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new Ku("@firebase/firestore");function Xs(){return si.logLevel}function q(t,...e){if(si.logLevel<=te.DEBUG){const n=e.map(np);si.debug(`Firestore (${Is}): ${t}`,...n)}}function $n(t,...e){if(si.logLevel<=te.ERROR){const n=e.map(np);si.error(`Firestore (${Is}): ${t}`,...n)}}function os(t,...e){if(si.logLevel<=te.WARN){const n=e.map(np);si.warn(`Firestore (${Is}): ${t}`,...n)}}function np(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function le(t,e){t||G()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class VA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class MA{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new Tw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new at(e)}}class FA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new FA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class UA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){le(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new UA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=BA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function as(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ue(0,0))}static max(){return new Y(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Go.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Go?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Go{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const $A=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Go{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return $A.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(me.fromString(e))}static fromName(e){return new K(me.fromString(e).popFirst(5))}static empty(){return new K(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new me(e.slice()))}}function WA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new Ar(i,K.empty(),e)}function qA(t){return new Ar(t.readTime,t.key,-1)}class Ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ar(Y.min(),K.empty(),-1)}static max(){return new Ar(Y.max(),K.empty(),-1)}}function HA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==KA)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function QA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ga(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}rp.oe=-1;function Gu(t){return t==null}function fu(t){return t===0&&1/t==-1/0}function YA(t){return typeof t=="number"&&Number.isInteger(t)&&!fu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Aw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fl(this.root,e,this.comparator,!1)}getReverseIterator(){return new fl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fl(this.root,e,this.comparator,!0)}}class fl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=i??Ge.EMPTY,this.right=s??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ry(this.data.getIterator())}getIteratorFrom(e){return new Ry(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Ry{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Je(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new kw("Invalid base64 string: "+s):s}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const JA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(le(!!t),typeof t=="string"){let e=0;const n=JA.exec(t);if(le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function oi(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sp(t){const e=t.mapValue.fields.__previous_value__;return ip(e)?sp(e):e}function Qo(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n,r,i,s,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl={mapValue:{}};function ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ip(t)?4:ek(t)?9007199254740991:ZA(t)?10:11:G()}function vn(t,e){if(t===e)return!0;const n=ai(t);if(n!==ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qo(t).isEqual(Qo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kr(i.timestampValue),l=kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return oi(i.bytesValue).isEqual(oi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Pe(i.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(i.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Pe(i.integerValue)===Pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Pe(i.doubleValue),l=Pe(s.doubleValue);return o===l?fu(o)===fu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(xy(o)!==xy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!vn(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function Jo(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=ai(t),r=ai(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Pe(s.integerValue||s.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Cy(t.timestampValue,e.timestampValue);case 4:return Cy(Qo(t),Qo(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=oi(s),u=oi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=oe(l[d],u[d]);if(f!==0)return f}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(Pe(s.latitude),Pe(o.latitude));return l!==0?l:oe(Pe(s.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Py(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,f;const p=s.fields||{},y=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=y.value)===null||u===void 0?void 0:u.arrayValue,N=oe(((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Py(_,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===pl.mapValue&&o===pl.mapValue)return 0;if(s===pl.mapValue)return 1;if(o===pl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const y=oe(u[p],f[p]);if(y!==0)return y;const _=ls(l[u[p]],d[f[p]]);if(_!==0)return _}return oe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function Cy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=kr(t),r=kr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Py(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ls(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function us(t){return Nh(t)}function Nh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return oi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Nh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Nh(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function Ny(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function bh(t){return!!t&&"integerValue"in t}function op(t){return!!t&&"arrayValue"in t}function by(t){return!!t&&"nullValue"in t}function Dy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nl(t){return!!t&&"mapValue"in t}function ZA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ek(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Io(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Nl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){mi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(Io(this.value))}}function xw(t){const e=[];return mi(t.fields,(n,r)=>{const i=new Qe([n]);if(Nl(r)){const s=xw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ut(e,0,Y.min(),Y.min(),Y.min(),It.empty(),0)}static newFoundDocument(e,n,r,i){return new ut(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new ut(e,2,n,Y.min(),Y.min(),It.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,Y.min(),Y.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.position=e,this.inclusive=n}}function Oy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ls(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ly(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n="asc"){this.field=e,this.dir=n}}function tk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{}class Le extends Rw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new rk(e,n,r):n==="array-contains"?new ok(e,r):n==="in"?new ak(e,r):n==="not-in"?new lk(e,r):n==="array-contains-any"?new uk(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ik(e,r):new sk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ls(n,this.value)):n!==null&&ai(this.value)===ai(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends Rw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new nn(e,n)}matches(e){return Cw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Cw(t){return t.op==="and"}function Pw(t){return nk(t)&&Cw(t)}function nk(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function Dh(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+us(t.value);if(Pw(t))return t.filters.map(e=>Dh(e)).join(",");{const e=t.filters.map(n=>Dh(n)).join(",");return`${t.op}(${e})`}}function Nw(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&vn(r.value,i.value)}(t,e):t instanceof nn?function(r,i){return i instanceof nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Nw(o,i.filters[l]),!0):!1}(t,e):void G()}function bw(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${us(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(bw).join(" ,")+"}"}(t):"Filter"}class rk extends Le{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class ik extends Le{constructor(e,n){super(e,"in",n),this.keys=Dw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sk extends Le{constructor(e,n){super(e,"not-in",n),this.keys=Dw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class ok extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return op(n)&&Jo(n.arrayValue,this.value)}}class ak extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jo(this.value.arrayValue,n)}}class lk extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jo(this.value.arrayValue,n)}}class uk extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!op(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Vy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ck(t,e,n,r,i,s,o)}function ap(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Gu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),e.ue=n}return e.ue}function lp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Nw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ly(t.startAt,e.startAt)&&Ly(t.endAt,e.endAt)}function Oh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function dk(t,e,n,r,i,s,o,l){return new Ts(t,e,n,r,i,s,o,l)}function Qu(t){return new Ts(t)}function My(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ow(t){return t.collectionGroup!==null}function To(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(Qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Xo(s,r))}),n.has(Qe.keyField().canonicalString())||e.ce.push(new Xo(Qe.keyField(),r))}return e.ce}function gn(t){const e=J(t);return e.le||(e.le=hk(e,To(t))),e.le}function hk(t,e){if(t.limitType==="F")return Vy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Xo(i.field,s)});const n=t.endAt?new pu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pu(t.startAt.position,t.startAt.inclusive):null;return Vy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Lh(t,e){const n=t.filters.concat([e]);return new Ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function mu(t,e,n){return new Ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yu(t,e){return lp(gn(t),gn(e))&&t.limitType===e.limitType}function Lw(t){return`${ap(gn(t))}|lt:${t.limitType}`}function Si(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>bw(i)).join(", ")}]`),Gu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>us(i)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function Ju(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of To(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=Oy(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,To(r),i)||r.endAt&&!function(o,l,u){const d=Oy(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,To(r),i))}(t,e)}function fk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Vw(t){return(e,n)=>{let r=!1;for(const i of To(t)){const s=pk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function pk(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?ls(u,d):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Aw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=new Ie(K.comparator);function Wn(){return mk}const Mw=new Ie(K.comparator);function lo(...t){let e=Mw;for(const n of t)e=e.insert(n.key,n);return e}function Fw(t){let e=Mw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return So()}function jw(){return So()}function So(){return new Ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const gk=new Ie(K.comparator),yk=new Je(K.comparator);function ne(...t){let e=yk;for(const n of t)e=e.add(n);return e}const vk=new Je(oe);function _k(){return vk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fu(e)?"-0":e}}function Uw(t){return{integerValue:""+t}}function zw(t,e){return YA(e)?Uw(e):up(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this._=void 0}}function wk(t,e,n){return t instanceof Zo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ip(s)&&(s=sp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ea?$w(t,e):t instanceof ta?Ww(t,e):function(i,s){const o=Bw(i,s),l=Fy(o)+Fy(i.Pe);return bh(o)&&bh(i.Pe)?Uw(l):up(i.serializer,l)}(t,e)}function Ek(t,e,n){return t instanceof ea?$w(t,e):t instanceof ta?Ww(t,e):n}function Bw(t,e){return t instanceof na?function(r){return bh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Zo extends Xu{}class ea extends Xu{constructor(e){super(),this.elements=e}}function $w(t,e){const n=qw(e);for(const r of t.elements)n.some(i=>vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ta extends Xu{constructor(e){super(),this.elements=e}}function Ww(t,e){let n=qw(e);for(const r of t.elements)n=n.filter(i=>!vn(i,r));return{arrayValue:{values:n}}}class na extends Xu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Fy(t){return Pe(t.integerValue||t.doubleValue)}function qw(t){return op(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n){this.field=e,this.transform=n}}function Ik(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ea&&i instanceof ea||r instanceof ta&&i instanceof ta?as(r.elements,i.elements,vn):r instanceof na&&i instanceof na?vn(r.Pe,i.Pe):r instanceof Zo&&i instanceof Zo}(t.transform,e.transform)}class Tk{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zu{}function Kw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cp(t.key,Bt.none()):new ya(t.key,t.data,Bt.none());{const n=t.data,r=It.empty();let i=new Je(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Dr(t.key,r,new Nt(i.toArray()),Bt.none())}}function Sk(t,e,n){t instanceof ya?function(i,s,o){const l=i.value.clone(),u=Uy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(i,s,o){if(!bl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Uy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Gw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ao(t,e,n,r){return t instanceof ya?function(s,o,l,u){if(!bl(s.precondition,o))return l;const d=s.value.clone(),f=zy(s.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(s,o,l,u){if(!bl(s.precondition,o))return l;const d=zy(s.fieldTransforms,u,o),f=o.data;return f.setAll(Gw(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return bl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Ak(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Bw(r.transform,i||null);s!=null&&(n===null&&(n=It.empty()),n.set(r.field,s))}return n||null}function jy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&as(r,i,(s,o)=>Ik(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ya extends Zu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dr extends Zu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Gw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Uy(t,e,n){const r=new Map;le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Ek(o,l,n[i]))}return r}function zy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,wk(s,o,e))}return r}class cp extends Zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kk extends Zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Sk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Kw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>jy(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>jy(n,r))}}class dp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length);let i=function(){return gk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new dp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,re;function Pk(t){switch(t){default:return G();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Qw(t){if(t===void 0)return $n("GRPC error has no .code"),L.UNKNOWN;switch(t){case be.OK:return L.OK;case be.CANCELLED:return L.CANCELLED;case be.UNKNOWN:return L.UNKNOWN;case be.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case be.INTERNAL:return L.INTERNAL;case be.UNAVAILABLE:return L.UNAVAILABLE;case be.UNAUTHENTICATED:return L.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case be.NOT_FOUND:return L.NOT_FOUND;case be.ALREADY_EXISTS:return L.ALREADY_EXISTS;case be.PERMISSION_DENIED:return L.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case be.ABORTED:return L.ABORTED;case be.OUT_OF_RANGE:return L.OUT_OF_RANGE;case be.UNIMPLEMENTED:return L.UNIMPLEMENTED;case be.DATA_LOSS:return L.DATA_LOSS;default:return G()}}(re=be||(be={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=new Jr([4294967295,4294967295],0);function By(t){const e=Nk().encode(t),n=new yw;return n.update(e),new Uint8Array(n.digest())}function $y(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([i,s],0)]}class hp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new uo(`Invalid padding: ${n}`);if(r<0)throw new uo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new uo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new uo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Jr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Jr.fromNumber(r)));return i.compare(bk)===1&&(i=new Jr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=By(e),[r,i]=$y(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new hp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=By(e),[r,i]=$y(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class uo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,va.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ec(Y.min(),i,new Ie(oe),Wn(),ne())}}class va{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new va(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Yw{constructor(e,n){this.targetId=e,this.me=n}}class Jw{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Wy{constructor(){this.fe=0,this.ge=Hy(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new va(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Hy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Dk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Wn(),this.qe=qy(),this.Qe=new Ie(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Oh(s))if(r===0){const o=new K(s.path);this.Ue(n,o,ut.newNoDocument(o,Y.min()))}else le(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=oi(r).toUint8Array()}catch(u){if(u instanceof kw)return os("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new hp(o,i,s)}catch(u){return os(u instanceof uo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Oh(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ut.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ec(e,n,this.Qe,this.ke,r);return this.ke=Wn(),this.qe=qy(),this.Qe=new Ie(oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Wy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Wy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function qy(){return new Ie(K.comparator)}function Hy(){return new Ie(K.comparator)}const Ok={asc:"ASCENDING",desc:"DESCENDING"},Lk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vk={and:"AND",or:"OR"};class Mk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vh(t,e){return t.useProto3Json||Gu(e)?e:{value:e}}function gu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Fk(t,e){return gu(t,e.toTimestamp())}function yn(t){return le(!!t),Y.fromTimestamp(function(n){const r=kr(n);return new Ue(r.seconds,r.nanos)}(t))}function fp(t,e){return Mh(t,e).canonicalString()}function Mh(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Zw(t){const e=me.fromString(t);return le(iE(e)),e}function Fh(t,e){return fp(t.databaseId,e.path)}function Id(t,e){const n=Zw(e);if(n.get(1)!==t.databaseId.projectId)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(tE(n))}function eE(t,e){return fp(t.databaseId,e)}function jk(t){const e=Zw(t);return e.length===4?me.emptyPath():tE(e)}function jh(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tE(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ky(t,e,n){return{name:Fh(t,e),fields:n.value.mapValue.fields}}function Uk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(le(f===void 0||typeof f=="string"),Ze.fromBase64String(f||"")):(le(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?L.UNKNOWN:Qw(d.code);return new $(f,d.message||"")}(o);n=new Jw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Id(t,r.document.name),s=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):Y.min(),l=new It({mapValue:{fields:r.document.fields}}),u=ut.newFoundDocument(i,s,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Dl(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Id(t,r.document),s=r.readTime?yn(r.readTime):Y.min(),o=ut.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Dl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Id(t,r.document),s=r.removedTargetIds||[];n=new Dl([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Ck(i,s),l=r.targetId;n=new Yw(l,o)}}return n}function zk(t,e){let n;if(e instanceof ya)n={update:Ky(t,e.key,e.value)};else if(e instanceof cp)n={delete:Fh(t,e.key)};else if(e instanceof Dr)n={update:Ky(t,e.key,e.data),updateMask:Yk(e.fieldMask)};else{if(!(e instanceof kk))return G();n={verify:Fh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Zo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ea)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ta)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof na)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Fk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function Bk(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?yn(i.updateTime):yn(s);return o.isEqual(Y.min())&&(o=yn(s)),new Tk(o,i.transformResults||[])}(n,e))):[]}function $k(t,e){return{documents:[eE(t,e.path)]}}function Wk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=eE(t,i);const s=function(d){if(d.length!==0)return rE(nn.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(y){return{field:Ai(y.field),direction:Kk(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Vh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function qk(t){let e=jk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const y=nE(p);return y instanceof nn&&Pw(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(R){return new Xo(ki(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,Gu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(p){const y=!!p.before,_=p.values||[];return new pu(_,y)}(n.startAt));let d=null;return n.endAt&&(d=function(p){const y=!p.before,_=p.values||[];return new pu(_,y)}(n.endAt)),dk(e,i,o,s,l,"F",u,d)}function Hk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function nE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ki(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ki(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ki(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ki(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>nE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function Kk(t){return Ok[t]}function Gk(t){return Lk[t]}function Qk(t){return Vk[t]}function Ai(t){return{fieldPath:t.canonicalString()}}function ki(t){return Qe.fromServerFormat(t.fieldPath)}function rE(t){return t instanceof Le?function(n){if(n.op==="=="){if(Dy(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NAN"}};if(by(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dy(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NAN"}};if(by(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ai(n.field),op:Gk(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(i=>rE(i));return r.length===1?r[0]:{compositeFilter:{op:Qk(n.op),filters:r}}}(t):G()}function Yk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function iE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.ct=e}}function Xk(t){const e=qk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(){this.un=new ex}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Ar.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class ex{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new cs(0)}static kn(){return new cs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(){this.changes=new Ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ao(r.mutation,i,Nt.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=lo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Wn();const o=So(),l=function(){return So()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Dr)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),Ao(f.mutation,d,f.mutation.getFieldMask(),Ue.now())):o.set(d.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var p;return l.set(d,new nx(f,(p=o.get(d))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=So();let i=new Ie((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||Nt.empty();f=l.applyToLocalView(d,f),r.set(u,f);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,p=jw();f.forEach(y=>{if(!s.has(y)){const _=Kw(n.get(y),r.get(y));_!==null&&p.set(y,_),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ow(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Kr());let l=-1,u=s;return o.next(d=>V.forEach(d,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ne())).next(f=>({batchId:l,changes:Fw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=lo();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const d=function(p,y){return new Ts(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))});let l=lo();return o.forEach((u,d)=>{const f=s.get(u);f!==void 0&&Ao(f.mutation,d,Nt.empty(),Ue.now()),Ju(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:yn(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Xk(i.bundledQuery),readTime:yn(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(){this.overlays=new Ie(K.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Kr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Kr(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Kr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Rk(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(){this.Tr=new Je(Be.Er),this.dr=new Je(Be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Be(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new me([])),r=new Be(n,e),i=new Be(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new me([])),r=new Be(n,e),i=new Be(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Be(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Je(Be.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(oe);return n.forEach(i=>{const s=new Be(i,0),o=new Be(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Be(new K(s),0);let l=new Je(oe);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Be(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.Mr=e,this.docs=function(){return new Ie(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Wn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Wn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||HA(qA(f),r)<=0||(i.has(f.key)||Ju(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ux(this)}getSize(e){return V.resolve(this.size)}}class ux extends tx{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.persistence=e,this.Nr=new Ss(n=>ap(n),lp),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pp,this.targetCount=0,this.kr=cs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n){this.qr={},this.overlays={},this.Qr=new rp(0),this.Kr=!1,this.Kr=!0,this.$r=new ox,this.referenceDelegate=e(this),this.Ur=new cx(this),this.indexManager=new Zk,this.remoteDocumentCache=function(i){return new lx(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Jk(n),this.Gr=new ix(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new ax(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new hx(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class hx extends GA{constructor(e){super(),this.currentSequenceNumber=e}}class mp{constructor(e){this.persistence=e,this.Jr=new pp,this.Yr=null}static Zr(e){return new mp(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return gS()?8:QA(Me())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new fx;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Xs()<=te.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Si(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Xs()<=te.DEBUG&&q("QueryEngine","Query:",Si(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Xs()<=te.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Si(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):V.resolve())}Yi(e,n){if(My(n))return V.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=mu(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,mu(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return My(n)||i.isEqual(Y.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?V.resolve(null):(Xs()<=te.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Si(n)),this.rs(e,o,n,WA(i,-1)).next(l=>l))})}ts(e,n){let r=new Je(Vw(e));return n.forEach((i,s)=>{Ju(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Xs()<=te.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Si(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ar.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ie(oe),this._s=new Ss(s=>ap(s),lp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function gx(t,e,n,r){return new mx(t,e,n,r)}async function sE(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const d of i){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function yx(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const p=d.batch,y=p.keys();let _=V.resolve();return y.forEach(R=>{_=_.next(()=>f.getEntry(u,R)).next(N=>{const O=d.docVersions.get(R);le(O!==null),N.version.compareTo(O)<0&&(p.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),f.addEntry(N)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function oE(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function vx(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const y=i.get(p);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let _=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(Ze.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),i=i.insert(p,_),function(N,O,A){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(y,_,f)&&l.push(n.Ur.updateTargetData(s,_))});let u=Wn(),d=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(_x(s,o,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(Y.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function _x(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Wn();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function wx(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ex(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Uh(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ga(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Gy(t,e,n){const r=J(t);let i=Y.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const p=J(u),y=p._s.get(f);return y!==void 0?V.resolve(p.os.get(y)):p.Ur.getTargetData(d,f)}(r,o,gn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ne())).next(l=>(Ix(r,fk(e),l),{documents:l,Ts:s})))}function Ix(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Qy{constructor(){this.activeTargetIds=_k()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tx{constructor(){this.so=new Qy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Qy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml=null;function Td(){return ml===null?ml=function(){return 268435456+Math.round(2147483648*Math.random())}():ml++,"0x"+ml.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class xx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Td(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw os("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Is}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Ax[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Td();return new Promise((o,l)=>{const u=new vw;u.setWithCredentials(!0),u.listenOnce(_w.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Pl.NO_ERROR:const f=u.getResponseJson();q(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Pl.TIMEOUT:q(ot,`RPC '${e}' ${s} timed out`),l(new $(L.DEADLINE_EXCEEDED,"Request time out"));break;case Pl.HTTP_ERROR:const p=u.getStatus();if(q(ot,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const _=y==null?void 0:y.error;if(_&&_.status&&_.message){const R=function(O){const A=O.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(A)>=0?A:L.UNKNOWN}(_.status);l(new $(R,_.message))}else l(new $(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(L.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{q(ot,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);q(ot,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Td(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Iw(),l=Ew(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(ot,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let y=!1,_=!1;const R=new kx({Io:O=>{_?q(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(y||(q(ot,`Opening RPC '${e}' stream ${i} transport.`),p.open(),y=!0),q(ot,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},To:()=>p.close()}),N=(O,A,w)=>{O.listen(A,x=>{try{w(x)}catch(D){setTimeout(()=>{throw D},0)}})};return N(p,ao.EventType.OPEN,()=>{_||(q(ot,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),N(p,ao.EventType.CLOSE,()=>{_||(_=!0,q(ot,`RPC '${e}' stream ${i} transport closed`),R.So())}),N(p,ao.EventType.ERROR,O=>{_||(_=!0,os(ot,`RPC '${e}' stream ${i} transport errored:`,O),R.So(new $(L.UNAVAILABLE,"The operation could not be completed")))}),N(p,ao.EventType.MESSAGE,O=>{var A;if(!_){const w=O.data[0];le(!!w);const x=w,D=x.error||((A=x[0])===null||A===void 0?void 0:A.error);if(D){q(ot,`RPC '${e}' stream ${i} received error:`,D);const z=D.status;let j=function(E){const S=be[E];if(S!==void 0)return Qw(S)}(z),I=D.message;j===void 0&&(j=L.INTERNAL,I="Unknown error status: "+z+" with message "+D.message),_=!0,R.So(new $(j,I)),p.close()}else q(ot,`RPC '${e}' stream ${i} received:`,w),R.bo(w)}}),N(l,ww.STAT_EVENT,O=>{O.stat===Ph.PROXY?q(ot,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Ph.NOPROXY&&q(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Sd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){return new Mk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new aE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rx extends lE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Uk(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?yn(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=jh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Oh(u)?{documents:$k(s,u)}:{query:Wk(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Xw(s,o.resumeToken);const d=Vh(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=gu(s,o.snapshotVersion.toTimestamp());const d=Vh(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=Hk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=jh(this.serializer),n.removeTarget=e,this.a_(n)}}class Cx extends lE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Bk(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=jh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zk(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Mh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Mh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Nx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($n(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{gi(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=J(u);d.L_.add(4),await _a(d),d.q_.set("Unknown"),d.L_.delete(4),await nc(d)}(this))})}),this.q_=new Nx(r,i)}}async function nc(t){if(gi(t))for(const e of t.B_)await e(!0)}async function _a(t){for(const e of t.B_)await e(!1)}function uE(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),wp(n)?_p(n):As(n).r_()&&vp(n,e))}function yp(t,e){const n=J(t),r=As(n);n.N_.delete(e),r.r_()&&cE(n,e),n.N_.size===0&&(r.r_()?r.o_():gi(n)&&n.q_.set("Unknown"))}function vp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}As(t).A_(e)}function cE(t,e){t.Q_.xe(e),As(t).R_(e)}function _p(t){t.Q_=new Dk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),As(t).start(),t.q_.v_()}function wp(t){return gi(t)&&!As(t).n_()&&t.N_.size>0}function gi(t){return J(t).L_.size===0}function dE(t){t.Q_=void 0}async function Dx(t){t.q_.set("Online")}async function Ox(t){t.N_.forEach((e,n)=>{vp(t,e)})}async function Lx(t,e){dE(t),wp(t)?(t.q_.M_(e),_p(t)):t.q_.set("Unknown")}async function Vx(t,e,n){if(t.q_.set("Online"),e instanceof Jw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yu(t,r)}else if(e instanceof Dl?t.Q_.Ke(e):e instanceof Yw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await oE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),cE(s,u);const p=new or(f.target,u,d,f.sequenceNumber);vp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await yu(t,r)}}async function yu(t,e,n){if(!ga(e))throw e;t.L_.add(1),await _a(t),t.q_.set("Offline"),n||(n=()=>oE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await nc(t)})}function hE(t,e){return e().catch(n=>yu(t,n,e))}async function rc(t){const e=J(t),n=xr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Mx(e);)try{const i=await wx(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Fx(e,i)}catch(i){await yu(e,i)}fE(e)&&pE(e)}function Mx(t){return gi(t)&&t.O_.length<10}function Fx(t,e){t.O_.push(e);const n=xr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function fE(t){return gi(t)&&!xr(t).n_()&&t.O_.length>0}function pE(t){xr(t).start()}async function jx(t){xr(t).p_()}async function Ux(t){const e=xr(t);for(const n of t.O_)e.m_(n.mutations)}async function zx(t,e,n){const r=t.O_.shift(),i=dp.from(r,e,n);await hE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await rc(t)}async function Bx(t,e){e&&xr(t).V_&&await async function(r,i){if(function(o){return Pk(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();xr(r).s_(),await hE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await rc(r)}}(t,e),fE(t)&&pE(t)}async function Jy(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=gi(n);n.L_.add(3),await _a(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await nc(n)}async function $x(t,e){const n=J(t);e?(n.L_.delete(2),await nc(n)):e||(n.L_.add(2),await _a(n),n.q_.set("Unknown"))}function As(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new Rx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Dx.bind(null,t),Ro:Ox.bind(null,t),mo:Lx.bind(null,t),d_:Vx.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),wp(t)?_p(t):t.q_.set("Unknown")):(await t.K_.stop(),dE(t))})),t.K_}function xr(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new Cx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:jx.bind(null,t),mo:Bx.bind(null,t),f_:Ux.bind(null,t),g_:zx.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await rc(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ep(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ip(t,e){if($n("AsyncQueue",`${e}: ${t}`),ga(t))return new $(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=lo(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new Hi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(){this.W_=new Ie(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ds{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ds(e,n,Hi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class qx{constructor(){this.queries=Zy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=Zy(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(L.ABORTED,"Firestore shutting down"))}}function Zy(){return new Ss(t=>Lw(t),Yu)}async function mE(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Wx,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Ip(o,`Initialization of query '${Si(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Tp(n)}async function gE(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Hx(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Tp(n)}function Kx(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Tp(t){t.Y_.forEach(e=>{e.next()})}var zh,ev;(ev=zh||(zh={})).ea="default",ev.Cache="cache";class yE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==zh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.key=e}}class _E{constructor(e){this.key=e}}class Gx{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=Vw(e),this.Ra=new Hi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Xy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const y=i.get(f),_=Ju(this.query,p)?p:null,R=!!y&&this.mutatedKeys.has(y.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;y&&_?y.data.isEqual(_.data)?R!==N&&(r.track({type:3,doc:_}),O=!0):this.ga(y,_)||(r.track({type:2,doc:_}),O=!0,(u&&this.Aa(_,u)>0||d&&this.Aa(_,d)<0)&&(l=!0)):!y&&_?(r.track({type:0,doc:_}),O=!0):y&&!_&&(r.track({type:1,doc:y}),O=!0,(u||d)&&(l=!0)),O&&(_?(o=o.add(_),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(_,R){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return N(_)-N(R)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new ds(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Xy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new _E(r))}),this.da.forEach(r=>{e.has(r)||n.push(new vE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ds.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Qx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Yx{constructor(e){this.key=e,this.va=!1}}class Jx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ss(l=>Lw(l),Yu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(K.comparator),this.Na=new Map,this.La=new pp,this.Ba={},this.ka=new Map,this.qa=cs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Xx(t,e,n=!0){const r=AE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await wE(r,e,n,!0),i}async function Zx(t,e){const n=AE(t);await wE(n,e,!0,!1)}async function wE(t,e,n,r){const i=await Ex(t.localStore,gn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await eR(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&uE(t.remoteStore,i),l}async function eR(t,e,n,r,i){t.Ka=(p,y,_)=>async function(N,O,A,w){let x=O.view.ma(A);x.ns&&(x=await Gy(N.localStore,O.query,!1).then(({documents:I})=>O.view.ma(I,x)));const D=w&&w.targetChanges.get(O.targetId),z=w&&w.targetMismatches.get(O.targetId)!=null,j=O.view.applyChanges(x,N.isPrimaryClient,D,z);return nv(N,O.targetId,j.wa),j.snapshot}(t,p,y,_);const s=await Gy(t.localStore,e,!0),o=new Gx(e,s.Ts),l=o.ma(s.documents),u=va.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);nv(t,n,d.wa);const f=new Qx(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function tR(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Yu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Uh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&yp(r.remoteStore,i.targetId),Bh(r,i.targetId)}).catch(ma)):(Bh(r,i.targetId),await Uh(r.localStore,i.targetId,!0))}async function nR(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yp(n.remoteStore,r.targetId))}async function rR(t,e,n){const r=cR(t);try{const i=await function(o,l){const u=J(o),d=Ue.now(),f=l.reduce((_,R)=>_.add(R.key),ne());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let R=Wn(),N=ne();return u.cs.getEntries(_,f).next(O=>{R=O,R.forEach((A,w)=>{w.isValidDocument()||(N=N.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,R)).next(O=>{p=O;const A=[];for(const w of l){const x=Ak(w,p.get(w.key).overlayedDocument);x!=null&&A.push(new Dr(w.key,x,xw(x.value.mapValue),Bt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,d,A,l)}).next(O=>{y=O;const A=O.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(_,O.batchId,A)})}).then(()=>({batchId:y.batchId,changes:Fw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new Ie(oe)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await wa(r,i.changes),await rc(r.remoteStore)}catch(i){const s=Ip(i,"Failed to persist write");n.reject(s)}}async function EE(t,e){const n=J(t);try{const r=await vx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?le(o.va):i.removedDocuments.size>0&&(le(o.va),o.va=!1))}),await wa(n,r,e)}catch(r){await ma(r)}}function tv(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let d=!1;u.queries.forEach((f,p)=>{for(const y of p.j_)y.Z_(l)&&(d=!0)}),d&&Tp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iR(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ie(K.comparator);o=o.insert(s,ut.newNoDocument(s,Y.min()));const l=ne().add(s),u=new ec(Y.min(),new Map,new Ie(oe),o,l);await EE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Sp(r)}else await Uh(r.localStore,e,!1).then(()=>Bh(r,e,n)).catch(ma)}async function sR(t,e){const n=J(t),r=e.batch.batchId;try{const i=await yx(n.localStore,e);TE(n,r,null),IE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wa(n,i)}catch(i){await ma(i)}}async function oR(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(p=>(le(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);TE(r,e,n),IE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wa(r,i)}catch(i){await ma(i)}}function IE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function TE(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Bh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||SE(t,r)})}function SE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(yp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Sp(t))}function nv(t,e,n){for(const r of n)r instanceof vE?(t.La.addReference(r.key,e),aR(t,r)):r instanceof _E?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||SE(t,r.key)):G()}function aR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Sp(t))}function Sp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(me.fromString(e)),r=t.qa.next();t.Na.set(r,new Yx(n)),t.Oa=t.Oa.insert(n,r),uE(t.remoteStore,new or(gn(Qu(n.path)),r,"TargetPurposeLimboResolution",rp.oe))}}async function wa(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const p=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){i.push(d);const p=gp.Wi(u.targetId,d);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(d,y=>V.forEach(y.$i,_=>f.persistence.referenceDelegate.addReference(p,y.targetId,_)).next(()=>V.forEach(y.Ui,_=>f.persistence.referenceDelegate.removeReference(p,y.targetId,_)))))}catch(p){if(!ga(p))throw p;q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const y=p.targetId;if(!p.fromCache){const _=f.os.get(y),R=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(y,N)}}}(r.localStore,s))}async function lR(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await sE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wa(n,r.hs)}}function uR(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function AE(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=EE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iR.bind(null,e),e.Ca.d_=Hx.bind(null,e.eventManager),e.Ca.$a=Kx.bind(null,e.eventManager),e}function cR(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oR.bind(null,e),e}class vu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return gx(this.persistence,new px,e.initialUser,this.serializer)}Ga(e){return new dx(mp.Zr,this.serializer)}Wa(e){return new Tx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vu.provider={build:()=>new vu};class $h{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lR.bind(null,this.syncEngine),await $x(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qx}()}createDatastore(e){const n=tc(e.databaseInfo.databaseId),r=function(s){return new xx(s)}(e.databaseInfo);return function(s,o,l,u){return new Px(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new bx(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>tv(this.syncEngine,n,0),function(){return Yy.D()?new Yy:new Sx}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,f){const p=new Jx(i,s,o,l,u,d);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await _a(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}$h.provider={build:()=>new $h};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=Sw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ip(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ad(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hR(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Jy(e.remoteStore,i)),t._onlineComponents=e}async function hR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ad(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;os("Error using user provided cache. Falling back to memory cache: "+n),await Ad(t,new vu)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Ad(t,new vu);return t._offlineComponents}async function xE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await rv(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await rv(t,new $h))),t._onlineComponents}function fR(t){return xE(t).then(e=>e.syncEngine)}async function Wh(t){const e=await xE(t),n=e.eventManager;return n.onListen=Xx.bind(null,e.syncEngine),n.onUnlisten=tR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Zx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nR.bind(null,e.syncEngine),n}function pR(t,e,n={}){const r=new vr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const f=new kE({next:y=>{f.Za(),o.enqueueAndForget(()=>gE(s,p));const _=y.docs.has(l);!_&&y.fromCache?d.reject(new $(L.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&y.fromCache&&u&&u.source==="server"?d.reject(new $(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),p=new yE(Qu(l.path),f,{includeMetadataChanges:!0,_a:!0});return mE(s,p)}(await Wh(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t,e,n){if(!n)throw new $(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mR(t,e,n,r){if(e===!0&&r===!0)throw new $(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sv(t){if(!K.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ov(t){if(K.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ic(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function $t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ic(t);throw new $(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function gR(t,e){if(e<=0)throw new $(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new av({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new av(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new LA;switch(r.type){case"firstParty":return new jA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=iv.get(n);r&&(q("ComponentProvider","Removing Datastore"),iv.delete(n),r.terminate())}(this),Promise.resolve()}}function yR(t,e,n,r={}){var i;const s=(t=$t(t,sc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=at.MOCK_USER;else{l=hS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new $(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new at(d)}t._authCredentials=new VA(new Tw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Or(this.firestore,e,this._query)}}class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class _r extends Or{constructor(e,n,r){super(e,n,Qu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new K(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function rn(t,e,...n){if(t=X(t),CE("collection","path",e),t instanceof sc){const r=me.fromString(e,...n);return ov(r),new _r(t,null,r)}{if(!(t instanceof ct||t instanceof _r))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return ov(r),new _r(t.firestore,null,r)}}function _n(t,e,...n){if(t=X(t),arguments.length===1&&(e=Sw.newId()),CE("doc","path",e),t instanceof sc){const r=me.fromString(e,...n);return sv(r),new ct(t,null,new K(r))}{if(!(t instanceof ct||t instanceof _r))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return sv(r),new ct(t.firestore,t instanceof _r?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new aE(this,"async_queue_retry"),this.Vu=()=>{const r=Sd();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Sd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Sd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new vr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ga(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw $n("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Ep.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function uv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Rr extends sc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new lv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lv(e),this._firestoreClient=void 0,await e}}}function vR(t,e){const n=typeof t=="object"?t:hw(),r=typeof t=="string"?t:"(default)",i=Zf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=uS("firestore");s&&yR(i,...s)}return i}function Ap(t){if(t._terminated)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_R(t),t._firestoreClient}function _R(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,f){return new XA(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,RE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new dR(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(Ze.fromBase64String(e))}catch(n){throw new $(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=/^__.*__$/;class ER{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ya(e,this.data,n,this.fieldTransforms)}}class PE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function NE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Rp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return _u(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(NE(this.Cu)&&wR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class IR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||tc(e)}Qu(e,n,r,i=!1){return new Rp({Cu:e,methodName:n,qu:r,path:Qe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ac(t){const e=t._freezeSettings(),n=tc(t._databaseId);return new IR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bE(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Np("Data must be an object, but it was:",o,r);const l=DE(r,o);let u,d;if(s.merge)u=new Nt(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const y=qh(e,p,n);if(!o.contains(y))throw new $(L.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);LE(f,y)||f.push(y)}u=new Nt(f),d=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=o.fieldTransforms;return new ER(new It(l),u,d)}class lc extends Ea{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lc}}class Cp extends Ea{_toFieldTransform(e){return new Hw(e.path,new Zo)}isEqual(e){return e instanceof Cp}}class Pp extends Ea{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new na(e.serializer,zw(e.serializer,this.$u));return new Hw(e.path,n)}isEqual(e){return e instanceof Pp&&this.$u===e.$u}}function TR(t,e,n,r){const i=t.Qu(1,e,n);Np("Data must be an object, but it was:",i,r);const s=[],o=It.empty();mi(r,(u,d)=>{const f=bp(e,u,n);d=X(d);const p=i.Nu(f);if(d instanceof lc)s.push(f);else{const y=Ia(d,p);y!=null&&(s.push(f),o.set(f,y))}});const l=new Nt(s);return new PE(o,l,i.fieldTransforms)}function SR(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[qh(e,r,n)],u=[i];if(s.length%2!=0)throw new $(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(qh(e,s[y])),u.push(s[y+1]);const d=[],f=It.empty();for(let y=l.length-1;y>=0;--y)if(!LE(d,l[y])){const _=l[y];let R=u[y];R=X(R);const N=o.Nu(_);if(R instanceof lc)d.push(_);else{const O=Ia(R,N);O!=null&&(d.push(_),f.set(_,O))}}const p=new Nt(d);return new PE(f,p,o.fieldTransforms)}function AR(t,e,n,r=!1){return Ia(n,t.Qu(r?4:3,e))}function Ia(t,e){if(OE(t=X(t)))return Np("Unsupported field value:",e,t),DE(t,e);if(t instanceof Ea)return function(r,i){if(!NE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ia(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=X(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:gu(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gu(i.serializer,s)}}if(r instanceof kp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hs)return{bytesValue:Xw(i.serializer,r._byteString)};if(r instanceof ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:fp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof xp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return up(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ic(r)}`)}(t,e)}function DE(t,e){const n={};return Aw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mi(t,(r,i)=>{const s=Ia(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function OE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof kp||t instanceof hs||t instanceof ct||t instanceof Ea||t instanceof xp)}function Np(t,e,n){if(!OE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ic(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function qh(t,e,n){if((e=X(e))instanceof oc)return e._internalPath;if(typeof e=="string")return bp(t,e);throw _u("Field path arguments must be of type string or ",t,!1,void 0,n)}const kR=new RegExp("[~\\*/\\[\\]]");function bp(t,e,n){if(e.search(kR)>=0)throw _u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oc(...e.split("."))._internalPath}catch{throw _u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _u(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(L.INVALID_ARGUMENT,l+t+u)}function LE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(uc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xR extends VE{data(){return super.data()}}function uc(t,e){return typeof e=="string"?bp(t,e):e instanceof oc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dp{}class Op extends Dp{}function fs(t,e,...n){let r=[];e instanceof Dp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Lp).length,l=s.filter(u=>u instanceof cc).length;if(o>1||o>0&&l>0)throw new $(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class cc extends Op{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cc(e,n,r)}_apply(e){const n=this._parse(e);return ME(e._query,n),new Or(e.firestore,e.converter,Lh(e._query,n))}_parse(e){const n=ac(e.firestore);return function(s,o,l,u,d,f,p){let y;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){dv(p,f);const _=[];for(const R of p)_.push(cv(u,s,R));y={arrayValue:{values:_}}}else y=cv(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||dv(p,f),y=AR(l,o,p,f==="in"||f==="not-in");return Le.create(d,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function CR(t,e,n){const r=e,i=uc("where",t);return cc._create(i,r,n)}class Lp extends Dp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Lp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)ME(o,u),o=Lh(o,u)}(e._query,n),new Or(e.firestore,e.converter,Lh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Vp extends Op{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Vp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xo(s,o)}(e._query,this._field,this._direction);return new Or(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ts(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function ra(t,e="asc"){const n=e,r=uc("orderBy",t);return Vp._create(r,n)}class Mp extends Op{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Mp(e,n,r)}_apply(e){return new Or(e.firestore,e.converter,mu(e._query,this._limit,this._limitType))}}function wu(t){return gR("limit",t),Mp._create("limit",t,"F")}function cv(t,e,n){if(typeof(n=X(n))=="string"){if(n==="")throw new $(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ow(e)&&n.indexOf("/")!==-1)throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!K.isDocumentKey(r))throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ny(t,new K(r))}if(n instanceof ct)return Ny(t,n._key);throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ic(n)}.`)}function dv(t,e){if(!Array.isArray(t)||t.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ME(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class PR{convertValue(e,n="none"){switch(ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return mi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Pe(o.doubleValue));return new xp(s)}convertGeoPoint(e){return new kp(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=sp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);le(iE(r));const i=new Yo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||$n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jE extends VE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(uc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ol extends jE{data(e={}){return super.data(e)}}class NR{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new co(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ol(this._firestore,this._userDataWriter,r.key,r,new co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ol(i._firestore,i._userDataWriter,l.doc.key,l.doc,new co(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ol(i._firestore,i._userDataWriter,l.doc.key,l.doc,new co(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:bR(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t){t=$t(t,ct);const e=$t(t.firestore,Rr);return pR(Ap(e),t._key).then(n=>zE(e,t,n))}class UE extends PR{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function DR(t,e,n){t=$t(t,ct);const r=$t(t.firestore,Rr),i=FE(t.converter,e);return dc(r,[bE(ac(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Bt.none())])}function Ta(t,e,n,...r){t=$t(t,ct);const i=$t(t.firestore,Rr),s=ac(i);let o;return o=typeof(e=X(e))=="string"||e instanceof oc?SR(s,"updateDoc",t._key,e,n,r):TR(s,"updateDoc",t._key,e),dc(i,[o.toMutation(t._key,Bt.exists(!0))])}function OR(t){return dc($t(t.firestore,Rr),[new cp(t._key,Bt.none())])}function ia(t,e){const n=$t(t.firestore,Rr),r=_n(t),i=FE(t.converter,e);return dc(n,[bE(ac(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function ps(t,...e){var n,r,i;t=X(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||uv(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(uv(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,d,f;if(t instanceof ct)d=$t(t.firestore,Rr),f=Qu(t._key.path),u={next:p=>{e[o]&&e[o](zE(d,t,p))},error:e[o+1],complete:e[o+2]};else{const p=$t(t,Or);d=$t(p.firestore,Rr),f=p._query;const y=new UE(d);u={next:_=>{e[o]&&e[o](new NR(d,y,p,_))},error:e[o+1],complete:e[o+2]},RR(t._query)}return function(y,_,R,N){const O=new kE(N),A=new yE(_,O,R);return y.asyncQueue.enqueueAndForget(async()=>mE(await Wh(y),A)),()=>{O.Za(),y.asyncQueue.enqueueAndForget(async()=>gE(await Wh(y),A))}}(Ap(d),f,l,u)}function dc(t,e){return function(r,i){const s=new vr;return r.asyncQueue.enqueueAndForget(async()=>rR(await fR(r),i,s)),s.promise}(Ap(t),e)}function zE(t,e,n){const r=n.docs.get(e._key),i=new UE(t);return new jE(t,i,e._key,r,new co(n.hasPendingWrites,n.fromCache),e.converter)}function ms(){return new Cp("serverTimestamp")}function Fp(t){return new Pp("increment",t)}(function(e,n=!0){(function(i){Is=i})(br),Sr(new zn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Rr(new MA(r.getProvider("auth-internal")),new zA(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new $(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yo(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),en(ky,"4.7.3",e),en(ky,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n){this._delegate=e,this.firebase=n,Ho(e,new zn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),tp(this._delegate)))}_getService(e,n=Ir){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ir){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Ho(this._delegate,e)}_addOrOverwriteComponent(e){uw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},fv=new pi("app-compat","Firebase",VR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:en,setLogLevel:pw,onLog:fw,apps:null,SDK_VERSION:br,INTERNAL:{registerComponent:l,removeApp:r,useAsService:u,modularAPIs:OA}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(d){delete e[d]}function i(d){if(d=d||Ir,!yy(e,d))throw fv.create("no-app",{appName:d});return e[d]}i.App=t;function s(d,f={}){const p=ep(d,f);if(yy(e,p.name))return e[p.name];const y=new t(p,n);return e[p.name]=y,y}function o(){return Object.keys(e).map(d=>e[d])}function l(d){const f=d.name,p=f.replace("-compat","");if(Sr(d)&&d.type==="PUBLIC"){const y=(_=i())=>{if(typeof _[p]!="function")throw fv.create("invalid-app-argument",{appName:f});return _[p]()};d.serviceProps!==void 0&&cu(y,d.serviceProps),n[p]=y,t.prototype[p]=function(..._){return this._getService.bind(this,f).apply(this,d.multipleInstances?_:[])}}return d.type==="PUBLIC"?n[p]:null}function u(d,f){return f==="serverAuth"?null:f}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(){const t=MR(LR);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:BE,extendNamespace:e,createSubscribe:iw,ErrorFactory:pi,deepExtend:cu});function e(n){cu(t,n)}return t}const FR=BE();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=new Ku("@firebase/app-compat"),jR="@firebase/app-compat",UR="0.2.43";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(t){en(jR,UR,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const t=Z0();if(t.firebase!==void 0){pv.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=t.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&pv.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const ks=FR;zR();var BR="firebase",$R="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ks.registerVersion(BR,$R,"app-compat");function jp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Zs={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Ti={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function $E(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qR=WR,HR=$E,WE=new pi("auth","Firebase",$E());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new Ku("@firebase/auth");function KR(t,...e){Eu.logLevel<=te.WARN&&Eu.warn(`Auth (${br}): ${t}`,...e)}function Ll(t,...e){Eu.logLevel<=te.ERROR&&Eu.error(`Auth (${br}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,...e){throw zp(t,...e)}function ze(t,...e){return zp(t,...e)}function Up(t,e,n){const r=Object.assign(Object.assign({},HR()),{[e]:n});return new pi("auth","Firebase",r).create(e,{appName:t.name})}function qe(t){return Up(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xs(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&et(t,"argument-error"),Up(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return WE.create(t,...e)}function F(t,e,...n){if(!t)throw zp(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ll(e),new Error(e)}function sn(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Bp(){return mv()==="http:"||mv()==="https:"}function mv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bp()||nw()||"connection"in navigator)?navigator.onLine:!0}function QR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=fS()||Yf()}get(){return GR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=new Sa(3e4,6e4);function xe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Re(t,e,n,r,i={}){return HE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Es(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return mS()||(d.referrerPolicy="no-referrer"),qE.fetch()(KE(t,t.config.apiHost,n,l),d)})}async function HE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YR),e);try{const i=new ZR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ho(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ho(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ho(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Up(t,f,d);et(t,f)}}catch(i){if(i instanceof yt)throw i;et(t,"network-request-failed",{message:String(i)})}}async function Kn(t,e,n,r,i={}){const s=await Re(t,e,n,r,i);return"mfaPendingCredential"in s&&et(t,"multi-factor-auth-required",{_serverResponse:s}),s}function KE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$p(t.config,i):`${t.config.apiScheme}://${i}`}function XR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),JR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ze(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t){return t!==void 0&&t.getResponse!==void 0}function yv(t){return t!==void 0&&t.enterprise!==void 0}class eC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return XR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(t){return(await Re(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function nC(t,e){return Re(t,"GET","/v2/recaptchaConfig",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(t,e){return Re(t,"POST","/v1/accounts:delete",e)}async function iC(t,e){return Re(t,"POST","/v1/accounts:update",e)}async function GE(t,e){return Re(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sC(t,e=!1){const n=X(t),r=await n.getIdToken(e),i=hc(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ko(kd(i.auth_time)),issuedAtTime:ko(kd(i.iat)),expirationTime:ko(kd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kd(t){return Number(t)*1e3}function hc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ll("JWT malformed, contained fewer than 3 sections"),null;try{const i=X0(n);return i?JSON.parse(i):(Ll("Failed to decode base64 JWT payload"),null)}catch(i){return Ll("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vv(t){const e=hc(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yt&&oC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ko(this.lastLoginAt),this.creationTime=ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qn(t,GE(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?QE(s.providerUserInfo):[],l=uC(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Hh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function lC(t){const e=X(t);await oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function QE(t){return t.map(e=>{var{providerId:n}=e,r=jp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t,e){const n=await HE(t,{},async()=>{const r=Es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=KE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",qE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dC(t,e){return Re(t,"POST","/v2/accounts:revokeToken",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){F(e.length!==0,"internal-error");const n=vv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ki;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ki,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sC(this,e)}reload(){return lC(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ae(this.auth.app))return Promise.reject(qe(this.auth));const e=await this.getIdToken();return await qn(this,rC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,A=(d=n.createdAt)!==null&&d!==void 0?d:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:D,isAnonymous:z,providerData:j,stsTokenManager:I}=n;F(x&&I,e,"internal-error");const v=Ki.fromJSON(this.name,I);F(typeof x=="string",e,"internal-error"),Zn(p,e.name),Zn(y,e.name),F(typeof D=="boolean",e,"internal-error"),F(typeof z=="boolean",e,"internal-error"),Zn(_,e.name),Zn(R,e.name),Zn(N,e.name),Zn(O,e.name),Zn(A,e.name),Zn(w,e.name);const E=new bn({uid:x,auth:e,email:y,emailVerified:D,displayName:p,isAnonymous:z,photoURL:R,phoneNumber:_,tenantId:N,stsTokenManager:v,createdAt:A,lastLoginAt:w});return j&&Array.isArray(j)&&(E.providerData=j.map(S=>Object.assign({},S))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ki;i.updateFromServerResponse(n);const s=new bn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];F(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?QE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ki;l.updateFromIdToken(r);const u=new bn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Hh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=new Map;function bt(t){sn(t instanceof Function,"Expected a class definition");let e=_v.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_v.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}YE.type="NONE";const gs=YE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t,e,n){return`firebase:${t}:${e}:${n}`}class Gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gi(bt(gs),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||bt(gs);const o=Xr(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){const p=bn._fromJSON(e,f);d!==s&&(l=p),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Gi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new Gi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(JE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(t1(e))return"Blackberry";if(n1(e))return"Webos";if(XE(e))return"Safari";if((e.includes("chrome/")||ZE(e))&&!e.includes("edge/"))return"Chrome";if(Aa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function JE(t=Me()){return/firefox\//i.test(t)}function XE(t=Me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZE(t=Me()){return/crios\//i.test(t)}function e1(t=Me()){return/iemobile/i.test(t)}function Aa(t=Me()){return/android/i.test(t)}function t1(t=Me()){return/blackberry/i.test(t)}function n1(t=Me()){return/webos/i.test(t)}function ka(t=Me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hC(t=Me()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function fC(t=Me()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pC(){return rw()&&document.documentMode===10}function r1(t=Me()){return ka(t)||Aa(t)||n1(t)||t1(t)||/windows phone/i.test(t)||e1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(t,e=[]){let n;switch(t){case"Browser":n=wv(Me());break;case"Worker":n=`${wv(Me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${br}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e={}){return Re(t,"GET","/v2/passwordPolicy",xe(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=6;class vC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ev(this),this.idTokenSubscription=new Ev(this),this.beforeStateQueue=new mC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=WE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Gi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await GE(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ae(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ae(this.app))return Promise.reject(qe(this));const n=e?X(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ae(this.app)?Promise.reject(qe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ae(this.app)?Promise.reject(qe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gC(this),n=new vC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Gi.create(this,[bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ke(t){return X(t)}class Ev{constructor(e){this.auth=e,this.observer=null,this.addObserver=iw(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wC(t){xa=t}function Wp(t){return xa.loadJS(t)}function EC(){return xa.recaptchaV2Script}function IC(){return xa.recaptchaEnterpriseScript}function TC(){return xa.gapiScript}function s1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const SC="recaptcha-enterprise",AC="NO_RECAPTCHA";class kC{constructor(e){this.type=SC,this.auth=ke(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{nC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new eC(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;yv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(AC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&yv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=IC();u.length!==0&&(u+=l),Wp(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Iv(t,e,n,r=!1){const i=new kC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function aa(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Iv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Iv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function xC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RC(t,e,n){const r=ke(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=o1(e),{host:o,port:l}=CC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||PC()}function o1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CC(t){const e=o1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Tv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Tv(o)}}}function Tv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e){return Re(t,"POST","/v1/accounts:resetPassword",xe(t,e))}async function NC(t,e){return Re(t,"POST","/v1/accounts:update",e)}async function bC(t,e){return Re(t,"POST","/v1/accounts:signUp",e)}async function DC(t,e){return Re(t,"POST","/v1/accounts:update",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,e){return Kn(t,"POST","/v1/accounts:signInWithPassword",xe(t,e))}async function fc(t,e){return Re(t,"POST","/v1/accounts:sendOobCode",xe(t,e))}async function LC(t,e){return fc(t,e)}async function VC(t,e){return fc(t,e)}async function MC(t,e){return fc(t,e)}async function FC(t,e){return fc(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e){return Kn(t,"POST","/v1/accounts:signInWithEmailLink",xe(t,e))}async function UC(t,e){return Kn(t,"POST","/v1/accounts:signInWithEmailLink",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends Rs{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new la(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new la(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return aa(e,n,"signInWithPassword",OC);case"emailLink":return jC(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return aa(e,r,"signUpPassword",bC);case"emailLink":return UC(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t,e){return Kn(t,"POST","/v1/accounts:signInWithIdp",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="http://localhost";class wn extends Rs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new wn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vn(e,n)}buildRequest(){const e={requestUri:zC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Es(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(t,e){return Re(t,"POST","/v1/accounts:sendVerificationCode",xe(t,e))}async function $C(t,e){return Kn(t,"POST","/v1/accounts:signInWithPhoneNumber",xe(t,e))}async function WC(t,e){const n=await Kn(t,"POST","/v1/accounts:signInWithPhoneNumber",xe(t,e));if(n.temporaryProof)throw ho(t,"account-exists-with-different-credential",n);return n}const qC={USER_NOT_FOUND:"user-not-found"};async function HC(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Kn(t,"POST","/v1/accounts:signInWithPhoneNumber",xe(t,n),qC)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Rs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Zr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Zr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return $C(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return WC(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return HC(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Zr({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GC(t){const e=ji(oo(t)).link,n=e?ji(oo(e)).deep_link_id:null,r=ji(oo(t)).deep_link_id;return(r?ji(oo(r)).link:null)||r||n||e||t}class pc{constructor(e){var n,r,i,s,o,l;const u=ji(oo(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=KC((i=u.mode)!==null&&i!==void 0?i:null);F(d&&f&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=GC(e);try{return new pc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.providerId=Lr.PROVIDER_ID}static credential(e,n){return la._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pc.parseLink(n);return F(r,"argument-error"),la._fromEmailAndCode(e,r.code,r.tenantId)}}Lr.PROVIDER_ID="password";Lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends Gn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Qi extends Cs{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return F("providerId"in n&&"signInMethod"in n,"argument-error"),wn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return F(e.idToken||e.accessToken,"argument-error"),wn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Qi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Qi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new Qi(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Cs{constructor(){super("facebook.com")}static credential(e){return wn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Cs{constructor(){super("github.com")}static credential(e){return wn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="http://localhost";class ys extends Rs{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Vn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ys(r,s)}static _create(e,n){return new ys(e,n)}buildRequest(){return{requestUri:QC,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC="saml.";class Iu extends Gn{constructor(e){F(e.startsWith(YC),"argument-error"),super(e)}static credentialFromResult(e){return Iu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Iu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ys.fromJSON(e);return F(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ys._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Cs{constructor(){super("twitter.com")}static credential(e,n){return wn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t,e){return Kn(t,"POST","/v1/accounts:signUp",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await bn._fromIdTokenResponse(e,r,i),o=Sv(r);return new Ht({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Sv(r);return new Ht({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Sv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(t){var e;if(Ae(t.app))return Promise.reject(qe(t));const n=ke(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ht({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await l1(n,{returnSecureToken:!0}),i=await Ht._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends yt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tu(e,n,r,i)}}function u1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tu._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e){const n=X(t);await mc(!0,n,e);const{providerUserInfo:r}=await iC(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=c1(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function qp(t,e,n=!1){const r=await qn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ht._forOperation(t,"link",r)}async function mc(t,e,n){await oa(e);const r=c1(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";F(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(t,e,n=!1){const{auth:r}=t;if(Ae(r.app))return Promise.reject(qe(r));const i="reauthenticate";try{const s=await qn(t,u1(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=hc(s.idToken);F(o,r,"internal-error");const{sub:l}=o;return F(t.uid===l,r,"user-mismatch"),Ht._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&et(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(t,e,n=!1){if(Ae(t.app))return Promise.reject(qe(t));const r="signIn",i=await u1(t,r,e),s=await Ht._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function gc(t,e){return h1(ke(t),e)}async function f1(t,e){const n=X(t);return await mc(!1,n,e.providerId),qp(n,e)}async function p1(t,e){return d1(X(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC(t,e){return Kn(t,"POST","/v1/accounts:signInWithCustomToken",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e){if(Ae(t.app))return Promise.reject(qe(t));const n=ke(t),r=await ZC(n,{token:e,returnSecureToken:!0}),i=await Ht._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Hp._fromServerResponse(e,n):"totpInfo"in n?Kp._fromServerResponse(e,n):et(e,"internal-error")}}class Hp extends Ra{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Hp(n)}}class Kp extends Ra{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Kp(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(t,e,n){var r;F(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),F(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(F(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(F(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(t){const e=ke(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tP(t,e,n){const r=ke(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&yc(r,i,n),await aa(r,i,"getOobCode",VC)}async function nP(t,e,n){await a1(X(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Gp(t),r})}async function rP(t,e){await DC(X(t),{oobCode:e})}async function m1(t,e){const n=X(t),r=await a1(n,{oobCode:e}),i=r.requestType;switch(F(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":F(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":F(r.mfaInfo,n,"internal-error");default:F(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Ra._fromServerResponse(ke(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function iP(t,e){const{data:n}=await m1(X(t),e);return n.email}async function sP(t,e,n){if(Ae(t.app))return Promise.reject(qe(t));const r=ke(t),o=await aa(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",l1).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Gp(t),u}),l=await Ht._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function oP(t,e,n){return Ae(t.app)?Promise.reject(qe(t)):gc(X(t),Lr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Gp(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(t,e,n){const r=ke(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){F(l.handleCodeInApp,r,"argument-error"),l&&yc(r,o,l)}s(i,n),await aa(r,i,"getOobCode",MC)}function lP(t,e){const n=pc.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function uP(t,e,n){if(Ae(t.app))return Promise.reject(qe(t));const r=X(t),i=Lr.credentialWithLink(e,n||sa());return F(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),gc(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(t,e){return Re(t,"POST","/v1/accounts:createAuthUri",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP(t,e){const n=Bp()?sa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await cP(X(t),r);return i||[]}async function hP(t,e){const n=X(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&yc(n.auth,i,e);const{email:s}=await LC(n.auth,i);s!==t.email&&await t.reload()}async function fP(t,e,n){const r=X(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&yc(r.auth,s,n);const{email:o}=await FC(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(t,e){return Re(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=X(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await qn(r,pP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function gP(t,e){const n=X(t);return Ae(n.auth.app)?Promise.reject(qe(n.auth)):g1(n,e,null)}function yP(t,e){return g1(X(t),null,e)}async function g1(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await qn(t,NC(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=hc(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new Yi(s,l)}}if(!r)return null;switch(r){case"facebook.com":return new _P(s,i);case"github.com":return new wP(s,i);case"google.com":return new EP(s,i);case"twitter.com":return new IP(s,i,t.screenName||null);case"custom":case"anonymous":return new Yi(s,null);default:return new Yi(s,r,i)}}class Yi{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class y1 extends Yi{constructor(e,n,r,i){super(e,n,r),this.username=i}}class _P extends Yi{constructor(e,n){super(e,"facebook.com",n)}}class wP extends y1{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class EP extends Yi{constructor(e,n){super(e,"google.com",n)}}class IP extends y1{constructor(e,n,r){super(e,"twitter.com",n,r)}}function TP(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:vP(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Gr("enroll",e,n)}static _fromMfaPendingCredential(e){return new Gr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Gr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Gr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ke(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(l=>Ra._fromServerResponse(r,l));F(i.mfaPendingCredential,r,"internal-error");const o=Gr._fromMfaPendingCredential(i.mfaPendingCredential);return new Qp(o,s,async l=>{const u=await l._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const d=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const f=await Ht._fromIdTokenResponse(r,n.operationType,d);return await r._updateCurrentUser(f.user),f;case"reauthenticate":return F(n.user,r,"internal-error"),Ht._forOperation(n.user,n.operationType,d);default:et(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function SP(t,e){var n;const r=X(t),i=e;return F(e.customData.operationType,r,"argument-error"),F((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Qp._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t,e){return Re(t,"POST","/v2/accounts/mfaEnrollment:start",xe(t,e))}function kP(t,e){return Re(t,"POST","/v2/accounts/mfaEnrollment:finalize",xe(t,e))}function xP(t,e){return Re(t,"POST","/v2/accounts/mfaEnrollment:withdraw",xe(t,e))}class Yp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Ra._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Yp(e)}async getSession(){return Gr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await qn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await qn(this.user,xP(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const xd=new WeakMap;function RP(t){const e=X(t);return xd.has(e)||xd.set(e,Yp._fromUser(e)),xd.get(e)}const Su="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Su,"1"),this.storage.removeItem(Su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=1e3,PP=10;class _1 extends v1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=r1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);pC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_1.type="LOCAL";const Jp=_1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1 extends v1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}w1.type="SESSION";const li=w1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await NP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=Ca("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return window}function DP(t){De().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(){return typeof De().WorkerGlobalScope<"u"&&typeof De().importScripts=="function"}async function OP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function VP(){return Xp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="firebaseLocalStorageDb",MP=1,Au="firebaseLocalStorage",I1="fbase_key";class Pa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _c(t,e){return t.transaction([Au],e?"readwrite":"readonly").objectStore(Au)}function FP(){const t=indexedDB.deleteDatabase(E1);return new Pa(t).toPromise()}function Kh(){const t=indexedDB.open(E1,MP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Au,{keyPath:I1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Au)?e(r):(r.close(),await FP(),e(await Kh()))})})}async function Av(t,e,n){const r=_c(t,!0).put({[I1]:e,value:n});return new Pa(r).toPromise()}async function jP(t,e){const n=_c(t,!1).get(e),r=await new Pa(n).toPromise();return r===void 0?null:r.value}function kv(t,e){const n=_c(t,!0).delete(e);return new Pa(n).toPromise()}const UP=800,zP=3;class T1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vc._getInstance(VP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OP(),!this.activeServiceWorker)return;this.sender=new bP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kh();return await Av(e,Su,"1"),await kv(e,Su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Av(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_c(i,!1).getAll();return new Pa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}T1.type="LOCAL";const ua=T1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t,e){return Re(t,"POST","/v2/accounts/mfaSignIn:start",xe(t,e))}function $P(t,e){return Re(t,"POST","/v2/accounts/mfaSignIn:finalize",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=500,qP=6e4,gl=1e12;class HP{constructor(e){this.auth=e,this.counter=gl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new KP(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||gl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||gl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||gl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class KP{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;F(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=GP(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},qP)},WP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function GP(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=s1("rcb"),QP=new Sa(3e4,6e4);class YP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=De().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return F(JP(n),e,"argument-error"),this.shouldResolveImmediately(n)&&gv(De().grecaptcha)?Promise.resolve(De().grecaptcha):new Promise((r,i)=>{const s=De().setTimeout(()=>{i(ze(e,"network-request-failed"))},QP.get());De()[Rd]=()=>{De().clearTimeout(s),delete De()[Rd];const l=De().grecaptcha;if(!l||!gv(l)){i(ze(e,"internal-error"));return}const u=l.render;l.render=(d,f)=>{const p=u(d,f);return this.counter++,p},this.hostLanguage=n,r(l)};const o=`${EC()}?${Es({onload:Rd,render:"explicit",hl:n})}`;Wp(o).catch(()=>{clearTimeout(s),i(ze(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=De().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function JP(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class XP{async load(e){return new HP(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="recaptcha",ZP={theme:"light",type:"image"};let eN=class{constructor(e,n,r=Object.assign({},ZP)){this.parameters=r,this.type=S1,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ke(e),this.isInvisible=this.parameters.size==="invisible",F(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;F(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new XP:new YP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){F(!this.parameters.sitekey,this.auth,"argument-error"),F(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),F(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=De()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){F(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){F(Bp()&&!Xp(),this.auth,"internal-error"),await tN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await tC(this.auth);F(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return F(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function tN(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Zr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function nN(t,e,n){if(Ae(t.app))return Promise.reject(qe(t));const r=ke(t),i=await wc(r,e,X(n));return new Zp(i,s=>gc(r,s))}async function rN(t,e,n){const r=X(t);await mc(!1,r,"phone");const i=await wc(r.auth,e,X(n));return new Zp(i,s=>f1(r,s))}async function iN(t,e,n){const r=X(t);if(Ae(r.auth.app))return Promise.reject(qe(r.auth));const i=await wc(r.auth,e,X(n));return new Zp(i,s=>p1(r,s))}async function wc(t,e,n){var r;const i=await n.verify();try{F(typeof i=="string",t,"argument-error"),F(n.type===S1,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return F(o.type==="enroll",t,"internal-error"),(await AP(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{F(o.type==="signin",t,"internal-error");const l=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return F(l,t,"missing-multi-factor-info"),(await BP(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await BC(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function sN(t,e){const n=X(t);if(Ae(n.auth.app))return Promise.reject(qe(n.auth));await qp(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui=class Vl{constructor(e){this.providerId=Vl.PROVIDER_ID,this.auth=ke(e)}verifyPhoneNumber(e,n){return wc(this.auth,e,X(n))}static credential(e,n){return Zr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Vl.credentialFromTaggedObject(n)}static credentialFromError(e){return Vl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Zr._fromTokenResponse(n,r):null}};ui.PROVIDER_ID="phone";ui.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t,e){return e?bt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em extends Rs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oN(t){return h1(t.auth,new em(t),t.bypassAuthState)}function aN(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),d1(n,new em(t),t.bypassAuthState)}async function lN(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),qp(n,new em(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oN;case"linkViaPopup":case"linkViaRedirect":return lN;case"reauthViaPopup":case"reauthViaRedirect":return aN;default:et(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=new Sa(2e3,1e4);async function cN(t,e,n){if(Ae(t.app))return Promise.reject(ze(t,"operation-not-supported-in-this-environment"));const r=ke(t);xs(t,e,Gn);const i=yi(r,n);return new Dn(r,"signInViaPopup",e,i).executeNotNull()}async function dN(t,e,n){const r=X(t);if(Ae(r.auth.app))return Promise.reject(ze(r.auth,"operation-not-supported-in-this-environment"));xs(r.auth,e,Gn);const i=yi(r.auth,n);return new Dn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function hN(t,e,n){const r=X(t);xs(r.auth,e,Gn);const i=yi(r.auth,n);return new Dn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Dn extends A1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uN.get())};e()}}Dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="pendingRedirect",xo=new Map;class pN extends A1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xo.get(this.auth._key());if(!e){try{const r=await mN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xo.set(this.auth._key(),e)}return this.bypassAuthState||xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mN(t,e){const n=x1(e),r=k1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function tm(t,e){return k1(t)._set(x1(e),"true")}function gN(){xo.clear()}function nm(t,e){xo.set(t._key(),e)}function k1(t){return bt(t._redirectPersistence)}function x1(t){return Xr(fN,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(t,e,n){return vN(t,e,n)}async function vN(t,e,n){if(Ae(t.app))return Promise.reject(qe(t));const r=ke(t);xs(t,e,Gn),await r._initializationPromise;const i=yi(r,n);return await tm(i,r),i._openRedirect(r,e,"signInViaRedirect")}function _N(t,e,n){return wN(t,e,n)}async function wN(t,e,n){const r=X(t);if(xs(r.auth,e,Gn),Ae(r.auth.app))return Promise.reject(qe(r.auth));await r.auth._initializationPromise;const i=yi(r.auth,n);await tm(i,r.auth);const s=await R1(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function EN(t,e,n){return IN(t,e,n)}async function IN(t,e,n){const r=X(t);xs(r.auth,e,Gn),await r.auth._initializationPromise;const i=yi(r.auth,n);await mc(!1,r,e.providerId),await tm(i,r.auth);const s=await R1(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function TN(t,e){return await ke(t)._initializationPromise,Ec(t,e,!1)}async function Ec(t,e,n=!1){if(Ae(t.app))return Promise.reject(qe(t));const r=ke(t),i=yi(r,e),o=await new pN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function R1(t){const e=Ca(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=10*60*1e3;class C1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!P1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ze(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SN&&this.cachedEventUids.clear(),this.cachedEventUids.has(xv(e))}saveEventToCache(e){this.cachedEventUids.add(xv(e)),this.lastProcessedEventTime=Date.now()}}function xv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function P1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return P1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(t,e={}){return Re(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xN=/^https?/;async function RN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await N1(t);for(const n of e)try{if(CN(n))return}catch{}et(t,"unauthorized-domain")}function CN(t){const e=sa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xN.test(n))return!1;if(kN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=new Sa(3e4,6e4);function Rv(){const t=De().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NN(t){return new Promise((e,n)=>{var r,i,s;function o(){Rv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rv(),n(ze(t,"network-request-failed"))},timeout:PN.get()})}if(!((i=(r=De().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=De().gapi)===null||s===void 0)&&s.load)o();else{const l=s1("iframefcb");return De()[l]=()=>{gapi.load?o():n(ze(t,"network-request-failed"))},Wp(`${TC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ml=null,e})}let Ml=null;function bN(t){return Ml=Ml||NN(t),Ml}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=new Sa(5e3,15e3),ON="__/auth/iframe",LN="emulator/auth/iframe",VN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FN(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$p(e,LN):`https://${t.config.authDomain}/${ON}`,r={apiKey:e.apiKey,appName:t.name,v:br},i=MN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Es(r).slice(1)}`}async function jN(t){const e=await bN(t),n=De().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:FN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ze(t,"network-request-failed"),l=De().setTimeout(()=>{s(o)},DN.get());function u(){De().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zN=500,BN=600,$N="_blank",WN="http://localhost";class Cv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qN(t,e,n,r=zN,i=BN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},UN),{width:r.toString(),height:i.toString(),top:s,left:o}),d=Me().toLowerCase();n&&(l=ZE(d)?$N:n),JE(d)&&(e=e||WN,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[_,R])=>`${y}${_}=${R},`,"");if(fC(d)&&l!=="_self")return HN(e||"",l),new Cv(null);const p=window.open(e||"",l,f);F(p,t,"popup-blocked");try{p.focus()}catch{}return new Cv(p)}function HN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN="__/auth/handler",GN="emulator/auth/handler",QN=encodeURIComponent("fac");async function Gh(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:br,eventId:i};if(e instanceof Gn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ES(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(e instanceof Cs){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${QN}=${encodeURIComponent(u)}`:"";return`${YN(t)}?${Es(l).slice(1)}${d}`}function YN({config:t}){return t.emulator?$p(t,GN):`https://${t.authDomain}/${KN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="webStorageSupport";class JN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=li,this._completeRedirectFn=Ec,this._overrideRedirectResult=nm}async _openPopup(e,n,r,i){var s;sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Gh(e,n,r,sa(),i);return qN(e,o,Ca())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Gh(e,n,r,sa(),i);return DP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jN(e),r=new C1(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cd,{type:Cd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cd];o!==void 0&&n(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return r1()||XE()||ka()}}const XN=JN;class ZN{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return fn("unexpected MultiFactorSessionType")}}}class rm extends ZN{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rm(e)}_finalizeEnroll(e,n,r){return kP(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return $P(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class b1{constructor(){}static assertion(e){return rm._fromCredential(e)}}b1.FACTOR_ID="phone";var Pv="@firebase/auth",Nv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function n4(t){Sr(new zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i1(t)},d=new _C(r,i,s,u);return xC(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sr(new zn("auth-internal",e=>{const n=ke(e.getProvider("auth").getImmediate());return(r=>new e4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Pv,Nv,t4(t)),en(Pv,Nv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4=5*60;cS("authIdTokenMaxAge");function i4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ze("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",i4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});n4("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4=2e3;async function o4(t,e,n){var r;const{BuildInfo:i}=ci();sn(e.sessionId,"AuthEvent did not contain a session ID");const s=await d4(e.sessionId),o={};return ka()?o.ibi=i.packageName:Aa()?o.apn=i.packageName:et(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Gh(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function a4(t){const{BuildInfo:e}=ci(),n={};ka()?n.iosBundleId=e.packageName:Aa()?n.androidPackageName=e.packageName:et(t,"operation-not-supported-in-this-environment"),await N1(t,n)}function l4(t){const{cordova:e}=ci();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,hC()?"_blank":"_system","location=yes"),n(i)})})}async function u4(t,e,n){const{cordova:r}=ci();let i=()=>{};try{await new Promise((s,o)=>{let l=null;function u(){var p;s();const y=(p=r.plugins.browsertab)===null||p===void 0?void 0:p.close;typeof y=="function"&&y(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function d(){l||(l=window.setTimeout(()=>{o(ze(t,"redirect-cancelled-by-user"))},s4))}function f(){(document==null?void 0:document.visibilityState)==="visible"&&d()}e.addPassiveListener(u),document.addEventListener("resume",d,!1),Aa()&&document.addEventListener("visibilitychange",f,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",d,!1),document.removeEventListener("visibilitychange",f,!1),l&&window.clearTimeout(l)}})}finally{i()}}function c4(t){var e,n,r,i,s,o,l,u,d,f;const p=ci();F(typeof((e=p==null?void 0:p.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),F(typeof((n=p==null?void 0:p.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),F(typeof((s=(i=(r=p==null?void 0:p.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),F(typeof((u=(l=(o=p==null?void 0:p.cordova)===null||o===void 0?void 0:o.plugins)===null||l===void 0?void 0:l.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),F(typeof((f=(d=p==null?void 0:p.cordova)===null||d===void 0?void 0:d.InAppBrowser)===null||f===void 0?void 0:f.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function d4(t){const e=h4(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function h4(t){if(sn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=20;class p4 extends C1{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function m4(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:v4(),postBody:null,tenantId:t.tenantId,error:ze(t,"no-auth-event")}}function g4(t,e){return Qh()._set(Yh(t),e)}async function bv(t){const e=await Qh()._get(Yh(t));return e&&await Qh()._remove(Yh(t)),e}function y4(t,e){var n,r;const i=w4(e);if(i.includes("/__/auth/callback")){const s=Fl(i),o=s.firebaseError?_4(decodeURIComponent(s.firebaseError)):null,l=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=l?ze(l):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function v4(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<f4;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Qh(){return bt(Jp)}function Yh(t){return Xr("authEvent",t.config.apiKey,t.name)}function _4(t){try{return JSON.parse(t)}catch{return null}}function w4(t){const e=Fl(t),n=e.link?decodeURIComponent(e.link):void 0,r=Fl(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Fl(i).link||i||r||n||t}function Fl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return ji(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E4=500;class I4{constructor(){this._redirectPersistence=li,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ec,this._overrideRedirectResult=nm}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new p4(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){et(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){c4(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),gN(),await this._originValidation(e);const o=m4(e,r,i);await g4(e,o);const l=await o4(e,o,n),u=await l4(l);return u4(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=a4(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ci(),o=setTimeout(async()=>{await bv(e),n.onEvent(Dv())},E4),l=async f=>{clearTimeout(o);const p=await bv(e);let y=null;p&&(f!=null&&f.url)&&(y=y4(p,f.url)),n.onEvent(y||Dv())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,l);const u=i,d=`${s.packageName.toLowerCase()}://`;ci().handleOpenURL=async f=>{if(f.toLowerCase().startsWith(d)&&l({url:f}),typeof u=="function")try{u(f)}catch(p){console.error(p)}}}}const T4=I4;function Dv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ze("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S4(t,e){ke(t)._logFramework(e)}var A4="@firebase/auth-compat",k4="0.5.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4=1e3;function Ro(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function R4(){return Ro()==="http:"||Ro()==="https:"}function D1(t=Me()){return!!((Ro()==="file:"||Ro()==="ionic:"||Ro()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function C4(){return Yf()||Qf()}function P4(){return rw()&&(document==null?void 0:document.documentMode)===11}function N4(t=Me()){return/Edge\/\d+/.test(t)}function b4(t=Me()){return P4()||N4(t)}function O1(){try{const t=self.localStorage,e=Ca();if(t)return t.setItem(e,"1"),t.removeItem(e),b4()?du():!0}catch{return im()&&du()}return!1}function im(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Pd(){return(R4()||nw()||D1())&&!C4()&&O1()&&!im()}function L1(){return D1()&&typeof document<"u"}async function D4(){return L1()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},x4);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function O4(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct={LOCAL:"local",NONE:"none",SESSION:"session"},eo=F,V1="persistence";function L4(t,e){if(eo(Object.values(Ct).includes(e),t,"invalid-persistence-type"),Yf()){eo(e!==Ct.SESSION,t,"unsupported-persistence-type");return}if(Qf()){eo(e===Ct.NONE,t,"unsupported-persistence-type");return}if(im()){eo(e===Ct.NONE||e===Ct.LOCAL&&du(),t,"unsupported-persistence-type");return}eo(e===Ct.NONE||O1(),t,"unsupported-persistence-type")}async function Jh(t){await t._initializationPromise;const e=M1(),n=Xr(V1,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function V4(t,e){const n=M1();if(!n)return[];const r=Xr(V1,t,e);switch(n.getItem(r)){case Ct.NONE:return[gs];case Ct.LOCAL:return[ua,li];case Ct.SESSION:return[li];default:return[]}}function M1(){var t;try{return((t=O4())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4=F;class ar{constructor(){this.browserResolver=bt(XN),this.cordovaResolver=bt(T4),this.underlyingResolver=null,this._redirectPersistence=li,this._completeRedirectFn=Ec,this._overrideRedirectResult=nm}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return L1()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return M4(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await D4();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(t){return t.unwrap()}function F4(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j4(t){return j1(t)}function U4(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new z4(t,SP(t,e))}else if(r){const i=j1(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function j1(t){const{_tokenResponse:e}=t instanceof yt?t.customData:t;if(!e)return null;if(!(t instanceof yt)&&"temporaryProof"in e&&"phoneNumber"in e)return ui.credentialFromResult(t);const n=e.providerId;if(!n||n===Zs.PASSWORD)return null;let r;switch(n){case Zs.GOOGLE:r=cn;break;case Zs.FACEBOOK:r=un;break;case Zs.GITHUB:r=dn;break;case Zs.TWITTER:r=hn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:l,nonce:u}=e;return!s&&!o&&!i&&!l?null:l?n.startsWith("saml.")?ys._create(n,l):wn._fromParams({providerId:n,signInMethod:n,pendingToken:l,idToken:i,accessToken:s}):new Qi(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof yt?r.credentialFromError(t):r.credentialFromResult(t)}function wt(t,e){return e.catch(n=>{throw n instanceof yt&&U4(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:j4(n),additionalUserInfo:TP(n),user:On.getOrCreate(i)}})}async function Xh(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>wt(t,n.confirm(r))}}class z4{constructor(e,n){this.resolver=n,this.auth=F4(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return wt(F1(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this._delegate=e,this.multiFactor=RP(e)}static getOrCreate(e){return On.USER_MAP.has(e)||On.USER_MAP.set(e,new On(e)),On.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return wt(this.auth,f1(this._delegate,e))}async linkWithPhoneNumber(e,n){return Xh(this.auth,rN(this._delegate,e,n))}async linkWithPopup(e){return wt(this.auth,hN(this._delegate,e,ar))}async linkWithRedirect(e){return await Jh(ke(this.auth)),EN(this._delegate,e,ar)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return wt(this.auth,p1(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Xh(this.auth,iN(this._delegate,e,n))}reauthenticateWithPopup(e){return wt(this.auth,dN(this._delegate,e,ar))}async reauthenticateWithRedirect(e){return await Jh(ke(this.auth)),_N(this._delegate,e,ar)}sendEmailVerification(e){return hP(this._delegate,e)}async unlink(e){return await XC(this._delegate,e),this}updateEmail(e){return gP(this._delegate,e)}updatePassword(e){return yP(this._delegate,e)}updatePhoneNumber(e){return sN(this._delegate,e)}updateProfile(e){return mP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return fP(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}On.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=F;class Zh{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;to(r,"invalid-api-key",{appName:e.name}),to(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?ar:void 0;this._delegate=n.initialize({options:{persistence:B4(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(qR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?On.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){RC(this._delegate,e,n)}applyActionCode(e){return rP(this._delegate,e)}checkActionCode(e){return m1(this._delegate,e)}confirmPasswordReset(e,n){return nP(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return wt(this._delegate,sP(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return dP(this._delegate,e)}isSignInWithEmailLink(e){return lP(this._delegate,e)}async getRedirectResult(){to(Pd(),this._delegate,"operation-not-supported-in-this-environment");const e=await TN(this._delegate,ar);return e?wt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){S4(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Ov(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Ov(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return aP(this._delegate,e,n)}sendPasswordResetEmail(e,n){return tP(this._delegate,e,n||void 0)}async setPersistence(e){L4(this._delegate,e);let n;switch(e){case Ct.SESSION:n=li;break;case Ct.LOCAL:n=await bt(ua)._isAvailable()?ua:Jp;break;case Ct.NONE:n=gs;break;default:return et("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return wt(this._delegate,JC(this._delegate))}signInWithCredential(e){return wt(this._delegate,gc(this._delegate,e))}signInWithCustomToken(e){return wt(this._delegate,eP(this._delegate,e))}signInWithEmailAndPassword(e,n){return wt(this._delegate,oP(this._delegate,e,n))}signInWithEmailLink(e,n){return wt(this._delegate,uP(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Xh(this._delegate,nN(this._delegate,e,n))}async signInWithPopup(e){return to(Pd(),this._delegate,"operation-not-supported-in-this-environment"),wt(this._delegate,cN(this._delegate,e,ar))}async signInWithRedirect(e){return to(Pd(),this._delegate,"operation-not-supported-in-this-environment"),await Jh(this._delegate),yN(this._delegate,e,ar)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return iP(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Zh.Persistence=Ct;function Ov(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&On.getOrCreate(o)),error:e,complete:n}}function B4(t,e){const n=V4(t,e);if(typeof self<"u"&&!n.includes(ua)&&n.push(ua),typeof window<"u")for(const r of[Jp,li])n.includes(r)||n.push(r);return n.includes(gs)||n.push(gs),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.providerId="phone",this._delegate=new ui(F1(ks.auth()))}static credential(e,n){return ui.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}sm.PHONE_SIGN_IN_METHOD=ui.PHONE_SIGN_IN_METHOD;sm.PROVIDER_ID=ui.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4=F;class W4{constructor(e,n,r=ks.app()){var i;$4((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new eN(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q4="auth-compat";function H4(t){t.INTERNAL.registerComponent(new zn(q4,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Zh(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ti.EMAIL_SIGNIN,PASSWORD_RESET:Ti.PASSWORD_RESET,RECOVER_EMAIL:Ti.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ti.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ti.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ti.VERIFY_EMAIL}},EmailAuthProvider:Lr,FacebookAuthProvider:un,GithubAuthProvider:dn,GoogleAuthProvider:cn,OAuthProvider:Qi,SAMLAuthProvider:Iu,PhoneAuthProvider:sm,PhoneMultiFactorGenerator:b1,RecaptchaVerifier:W4,TwitterAuthProvider:hn,Auth:Zh,AuthCredential:Rs,Error:yt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(A4,k4)}H4(ks);const K4={apiKey:"AIzaSyA9Z-yCFrrHCSZBEAOwAfn7o0QoJQf2Lso",authDomain:"vibe-app-37c4a.firebaseapp.com",projectId:"vibe-app-37c4a",storageBucket:"vibe-app-37c4a.firebasestorage.app",messagingSenderId:"596796342540",appId:"1:596796342540:web:5dc0a810af5274ce26c929",measurementId:"G-448Z5N2QPB"},G4=ks.initializeApp(K4),ku=ks.auth(),Ve=vR(G4);var U1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Lv=lr.createContext&&lr.createContext(U1),Q4=["attr","size","title"];function Y4(t,e){if(t==null)return{};var n=J4(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function J4(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function xu(){return xu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xu.apply(this,arguments)}function Vv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ru(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vv(Object(n),!0).forEach(function(r){X4(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function X4(t,e,n){return e=Z4(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z4(t){var e=eb(t,"string");return typeof e=="symbol"?e:e+""}function eb(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function z1(t){return t&&t.map((e,n)=>lr.createElement(e.tag,Ru({key:n},e.attr),z1(e.child)))}function de(t){return e=>lr.createElement(tb,xu({attr:Ru({},t.attr)},e),z1(t.child))}function tb(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=Y4(t,Q4),l=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),lr.createElement("svg",xu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Ru(Ru({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&lr.createElement("title",null,s),t.children)};return Lv!==void 0?lr.createElement(Lv.Consumer,null,n=>e(n)):e(U1)}function B1(t){return de({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"},child:[]}]})(t)}function nb(t){return de({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"},child:[]}]})(t)}function Cu(t){return de({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"},child:[]}]})(t)}function rb(t){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"},child:[]}]})(t)}function ib(t){return de({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"},child:[]}]})(t)}function sb(t){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"},child:[]}]})(t)}function ob(t){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"},child:[]}]})(t)}function ab(t){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"},child:[]}]})(t)}function lb(t){return de({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"},child:[]}]})(t)}function ub(t){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"},child:[]}]})(t)}function om(t){return de({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"},child:[]}]})(t)}function $1(t){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"},child:[]}]})(t)}function cb(t){return de({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"},child:[]}]})(t)}function W1(t){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"},child:[]}]})(t)}function db(t){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"},child:[]}]})(t)}function q1(t){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"},child:[]}]})(t)}function H1(t){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"},child:[]}]})(t)}function K1(t){return de({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"},child:[]}]})(t)}function Nd(t){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M205 34.8c11.5 5.1 19 16.6 19 29.2l0 64 112 0c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96l-96 0 0 64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"},child:[]}]})(t)}function hb(t){return de({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"},child:[]}]})(t)}function fb(t){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"},child:[]}]})(t)}function G1(t){return de({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"},child:[]}]})(t)}function pb(t){return de({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"},child:[]}]})(t)}function di(t){return de({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"},child:[]}]})(t)}function mb(t){return de({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"},child:[]}]})(t)}function gb(t){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"},child:[]}]})(t)}function yb(t){return de({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"},child:[]}]})(t)}const vb=({post:t,currentUserUid:e,onCommentClick:n})=>{const[r,i]=H.useState(!1),[s,o]=H.useState(t.likes||0),l=async()=>{const d=!r;i(d),o(p=>d?p+1:p-1);const f=_n(Ve,"posts",t.id);await Ta(f,{likes:Fp(d?1:-1)})},u=async()=>{window.confirm("Bu gönderiyi silmek istediğine emin misin?")&&await OR(_n(Ve,"posts",t.id))};return m.jsxs("div",{className:"bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl p-4 mb-3 relative overflow-hidden group transition-all hover:bg-white/[0.07]",children:[m.jsxs("div",{className:"flex justify-between items-start mb-2",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("img",{src:`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.uid}`,alt:"avatar",className:"w-10 h-10 rounded-full border border-white/10 bg-gray-800 object-cover"}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center gap-1",children:[m.jsx("h4",{className:"font-bold text-[15px]",children:t.username}),t.verified&&m.jsx(sb,{className:"text-accent text-xs"}),t.goldBadge&&m.jsx("span",{className:"text-[9px] bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-1.5 py-0.5 rounded font-black",children:"VIBE"})]}),(t.userUniversity||t.userDepartment)&&m.jsxs("div",{className:"flex items-center gap-1 text-[11px] text-accent/80 font-medium my-0.5",children:[m.jsx(om,{}),m.jsx("span",{className:"truncate max-w-[200px]",children:[t.userUniversity,t.userDepartment].filter(Boolean).join(" • ")})]}),!t.userUniversity&&!t.userDepartment&&m.jsx("span",{className:"text-xs text-gray-500",children:"Az önce"})]})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[(t.userUniversity||t.userDepartment)&&m.jsx("span",{className:"text-xs text-gray-500",children:"Az önce"}),t.uid===e&&m.jsx("button",{onClick:u,className:"text-gray-600 hover:text-red-500 p-2 transition-colors",title:"Sil",children:m.jsx(G1,{size:12})})]})]}),m.jsx("div",{className:"text-[15px] text-gray-200 leading-relaxed mb-3 whitespace-pre-wrap break-words",children:t.content}),t.image&&m.jsx("div",{className:"mb-3 rounded-lg overflow-hidden border border-white/5 bg-black/20",children:m.jsx("img",{src:t.image,alt:"Post content",className:"w-full h-auto max-h-[400px] object-cover",loading:"lazy"})}),t.signature&&m.jsx("div",{className:"text-[11px] text-gray-500 italic mb-3 opacity-60",children:t.signature}),m.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-white/5",children:[m.jsxs("div",{className:"flex gap-6",children:[m.jsxs("button",{onClick:l,className:`flex items-center gap-2 text-sm transition-colors ${r?"text-red-500":"text-gray-400 hover:text-red-500"}`,children:[r?m.jsx($1,{}):m.jsx(yb,{}),m.jsx("span",{children:s})]}),m.jsxs("button",{onClick:n,className:"flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors",children:[m.jsx(gb,{}),m.jsx("span",{children:t.commentCount||0})]}),m.jsx("button",{className:"flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors",children:m.jsx(mb,{})})]}),m.jsx("button",{className:"text-gray-400 hover:text-white transition-colors",children:m.jsx(hb,{})})]})]})},Mv=["from-purple-600 to-blue-600","from-red-500 to-orange-500","from-pink-500 to-rose-500","from-green-400 to-emerald-600","from-gray-900 to-black","from-indigo-500 via-purple-500 to-pink-500"],_b=({user:t,onClose:e})=>{const[n,r]=H.useState(""),[i,s]=H.useState(null),[o,l]=H.useState(Mv[0]),[u,d]=H.useState(!1),f=H.useRef(null),p=_=>{if(_.target.files&&_.target.files[0]){const R=_.target.files[0];if(R.size>2*1024*1024){alert("Resim boyutu çok yüksek. Lütfen daha küçük bir resim seç.");return}const N=new FileReader;N.onload=O=>{var A;(A=O.target)!=null&&A.result&&s(O.target.result)},N.readAsDataURL(R)}},y=async()=>{if(!(!n.trim()&&!i||u)){d(!0);try{await ia(rn(Ve,"stories"),{uid:t.uid,username:t.username,avatar:t.avatar,image:i,text:n,color:o,timestamp:ms(),viewed:!1}),e()}catch(_){console.error("Error sharing story:",_),alert("Hikaye paylaşılamadı.")}finally{d(!1)}}};return m.jsxs("div",{className:"absolute inset-0 z-[150] bg-black flex flex-col animate-fade-in",children:[m.jsxs("div",{className:"absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/60 to-transparent",children:[m.jsx("button",{onClick:e,className:"text-white bg-black/20 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors",children:m.jsx(di,{size:20})}),m.jsx("button",{onClick:y,disabled:u||!n&&!i,className:"bg-white text-black px-6 py-2 rounded-full font-bold disabled:opacity-50 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-105 transition-all",children:u?"...":"Paylaş"})]}),m.jsxs("div",{className:`flex-1 relative flex items-center justify-center bg-gradient-to-br ${o} overflow-hidden`,children:[i&&m.jsxs("div",{className:"absolute inset-0 bg-black flex items-center justify-center",children:[m.jsx("img",{src:i,className:"w-full h-full object-cover opacity-50 blur-xl absolute inset-0"}),m.jsx("img",{src:i,className:"relative z-10 max-w-full max-h-full object-contain shadow-2xl"}),m.jsx("button",{onClick:()=>s(null),className:"absolute top-20 right-4 z-30 bg-black/50 p-2 rounded-full text-white hover:bg-red-500 transition-colors",children:m.jsx(di,{})})]}),m.jsx("textarea",{value:n,onChange:_=>r(_.target.value),placeholder:"Hikayeni yaz...",maxLength:150,className:`relative z-20 w-full max-w-sm bg-transparent text-white text-center text-2xl font-bold outline-none placeholder-white/50 resize-none overflow-hidden mx-6 p-2 ${i?"drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/40 rounded-xl backdrop-blur-sm":""}`,rows:i?2:4})]}),m.jsxs("div",{className:"p-6 bg-surface border-t border-white/10 flex flex-col gap-4 pb-10",children:[!i&&m.jsx("div",{className:"flex justify-center gap-3 overflow-x-auto no-scrollbar py-2 px-1",children:Mv.map(_=>m.jsx("button",{onClick:()=>l(_),className:`w-10 h-10 rounded-full bg-gradient-to-br ${_} border-2 transition-transform hover:scale-110 shadow-lg ${o===_?"border-white scale-110":"border-transparent"}`},_))}),m.jsxs("div",{className:"flex items-center justify-center gap-8 text-white",children:[m.jsxs("button",{onClick:()=>{var _;return(_=f.current)==null?void 0:_.click()},className:"flex flex-col items-center gap-2 group",children:[m.jsx("div",{className:"w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-primary group-hover:border-primary transition-all shadow-neon",children:m.jsx(W1,{size:20})}),m.jsx("span",{className:"text-xs text-gray-400 group-hover:text-white transition-colors",children:"Galeri"})]}),m.jsxs("button",{onClick:()=>s(null),className:"flex flex-col items-center gap-2 group",children:[m.jsx("div",{className:"w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-accent group-hover:border-accent transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]",children:m.jsx(q1,{size:20})}),m.jsx("span",{className:"text-xs text-gray-400 group-hover:text-white transition-colors",children:"Arkaplan"})]})]}),m.jsx("input",{type:"file",ref:f,className:"hidden",accept:"image/*",onChange:p})]})]})},wb=({story:t,onClose:e})=>{const[n,r]=H.useState(0);return H.useEffect(()=>{const i=setInterval(()=>{r(s=>s>=100?(clearInterval(i),e(),100):s+2)},100);return()=>clearInterval(i)},[e]),m.jsxs("div",{className:"absolute inset-0 z-[200] bg-black flex flex-col animate-fade-in",children:[m.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-white/20 z-30",children:m.jsx("div",{className:"h-full bg-white transition-all duration-100 ease-linear",style:{width:`${n}%`}})}),m.jsxs("div",{className:"absolute top-4 left-4 z-30 flex items-center gap-3",children:[m.jsx("img",{src:t.avatar,className:"w-10 h-10 rounded-full border-2 border-primary"}),m.jsx("span",{className:"font-bold text-white drop-shadow-md",children:t.username}),m.jsx("span",{className:"text-white/70 text-xs drop-shadow-md",children:"Az önce"})]}),m.jsx("button",{onClick:e,className:"absolute top-4 right-4 z-30 text-white p-2 bg-black/20 rounded-full backdrop-blur-sm",children:m.jsx(di,{size:20})}),m.jsxs("div",{className:`flex-1 flex items-center justify-center relative p-6 bg-gradient-to-br ${t.color||"from-gray-900 to-black"}`,onClick:()=>e(),children:[t.image&&m.jsxs(m.Fragment,{children:[m.jsx("img",{src:t.image,className:"absolute inset-0 w-full h-full object-cover opacity-40 blur-lg scale-110"}),m.jsx("img",{src:t.image,className:"relative z-10 max-h-full max-w-full rounded-lg shadow-2xl"})]}),t.text&&m.jsx("div",{className:`relative z-20 text-center font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] ${t.image?"absolute bottom-20 text-2xl bg-black/50 p-4 rounded-xl backdrop-blur-sm":"text-3xl"}`,children:t.text})]})]})},Eb=({user:t,onCommentClick:e})=>{const[n,r]=H.useState([]),[i,s]=H.useState([]),[o,l]=H.useState("all"),[u,d]=H.useState(!1),[f,p]=H.useState(null);H.useEffect(()=>{const _=fs(rn(Ve,"posts"),ra("timestamp","desc"),wu(50)),R=ps(_,A=>{const w=[];A.forEach(x=>w.push({...x.data(),id:x.id})),r(w)}),N=fs(rn(Ve,"stories"),ra("timestamp","desc"),wu(20)),O=ps(N,A=>{const w=[];A.forEach(x=>w.push({...x.data(),id:x.id})),s(w)});return()=>{R(),O()}},[]);const y=n.filter(_=>o==="media"?_.content.includes("http")||_.image:!0);return m.jsxs("div",{className:"flex flex-col h-full bg-black pb-24",children:[m.jsx("div",{className:"shrink-0 w-full overflow-x-auto no-scrollbar pt-3 pb-2 border-b border-white/5 bg-surface/30 backdrop-blur-sm z-10",children:m.jsxs("div",{className:"flex gap-3 px-4 items-start",children:[m.jsxs("div",{onClick:()=>d(!0),className:"flex flex-col items-center gap-1 shrink-0 cursor-pointer group",children:[m.jsxs("div",{className:"w-[60px] h-[60px] rounded-full border border-dashed border-gray-500 flex items-center justify-center bg-white/5 group-hover:border-primary transition-colors relative",children:[m.jsx(K1,{className:"text-primary text-xl"}),m.jsx("div",{className:"absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform"})]}),m.jsx("span",{className:"text-[10px] text-gray-400 font-medium",children:"Ekle"})]}),i.map(_=>m.jsxs("div",{onClick:()=>p(_),className:"flex flex-col items-center gap-1 shrink-0 cursor-pointer group",children:[m.jsx("div",{className:"w-[60px] h-[60px] rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 group-hover:scale-105 transition-transform",children:m.jsx("div",{className:"w-full h-full rounded-full border-2 border-black overflow-hidden relative bg-gray-800",children:m.jsx("img",{src:_.avatar||`https://api.dicebear.com/7.x/avataaars/svg?seed=${_.uid}`,alt:_.username,className:"w-full h-full object-cover"})})}),m.jsx("span",{className:"text-[10px] text-gray-300 w-14 truncate text-center",children:_.username})]},_.id))]})}),m.jsxs("div",{className:"shrink-0 px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-black/50 sticky top-0 z-10 backdrop-blur-md",children:[m.jsx(bd,{label:"Tümü",active:o==="all",onClick:()=>l("all")}),m.jsx(bd,{label:"Medya",active:o==="media",onClick:()=>l("media")}),m.jsx(bd,{label:"Kaydedilenler",active:o==="saved",onClick:()=>l("saved")})]}),m.jsxs("div",{className:"flex-1 overflow-y-auto no-scrollbar px-2 pt-2",children:[y.map(_=>m.jsx(vb,{post:_,currentUserUid:t.uid,onCommentClick:()=>e(_)},_.id)),y.length===0&&m.jsxs("div",{className:"flex flex-col items-center justify-center py-20 opacity-50",children:[m.jsx("div",{className:"text-4xl mb-2",children:"📭"}),m.jsx("div",{className:"text-sm",children:"Henüz gönderi yok."})]})]}),u&&m.jsx(_b,{user:t,onClose:()=>d(!1)}),f&&m.jsx(wb,{story:f,onClose:()=>p(null)})]})},bd=({label:t,active:e,onClick:n})=>m.jsx("button",{onClick:n,className:`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all whitespace-nowrap border ${e?"bg-primary border-primary text-white shadow-[0_0_10px_rgba(124,58,237,0.4)]":"bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"}`,children:t}),Ib=({currentUser:t})=>{const[e,n]=H.useState([]),[r,i]=H.useState(""),[s,o]=H.useState(null),l=H.useRef(null);H.useEffect(()=>{const d=fs(rn(Ve,"chat"),ra("timestamp","desc"),wu(50)),f=ps(d,p=>{const y=[];p.forEach(_=>y.push({..._.data(),id:_.id})),n(y.reverse())});return()=>f()},[]),H.useEffect(()=>{var d;(d=l.current)==null||d.scrollIntoView({behavior:"smooth"})},[e]);const u=async()=>{if(r.trim())try{await ia(rn(Ve,"chat"),{uid:t.uid,username:t.username,text:r,timestamp:ms(),replyTo:s?{id:s.id,username:s.username,text:s.text.substring(0,50)+(s.text.length>50?"...":"")}:null}),i(""),o(null)}catch(d){console.error("Error sending",d)}};return m.jsxs("div",{className:"flex flex-col h-full relative pb-20 bg-black",children:[m.jsxs("div",{className:"flex-1 overflow-y-auto px-3 pt-4 pb-4 space-y-4 no-scrollbar",children:[e.map(d=>{const f=d.uid===t.uid;return m.jsxs("div",{className:`flex flex-col ${f?"items-end":"items-start"} animate-fade-in group`,children:[d.replyTo&&m.jsxs("div",{className:"text-[10px] bg-white/5 px-3 py-1.5 rounded-t-xl mb-[-5px] mx-1 max-w-[80%] opacity-80 border-l-2 border-primary flex items-center gap-1",children:[m.jsx(fb,{className:"text-[8px] text-gray-500 transform scale-x-[-1]"}),m.jsxs("span",{className:"font-bold text-accent",children:["@",d.replyTo.username,":"]}),m.jsx("span",{className:"truncate max-w-[100px] text-gray-400",children:d.replyTo.text})]}),m.jsx("div",{className:"relative max-w-[85%] flex items-center gap-2",children:f?m.jsxs(m.Fragment,{children:[m.jsx("button",{onClick:()=>o(d),className:"text-gray-600 hover:text-accent p-2 opacity-50 hover:opacity-100 transition-opacity",title:"Yanıtla",children:m.jsx(Nd,{size:12})}),m.jsx("div",{className:"px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed relative z-10 bg-primary text-white rounded-br-sm shadow-[0_0_15px_rgba(124,58,237,0.2)]",children:d.text})]}):m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed relative z-10 bg-white/10 text-white rounded-bl-sm border border-white/5",children:[m.jsx("div",{className:"text-[10px] text-accent mb-0.5 opacity-80 font-bold",children:d.username}),d.text]}),m.jsx("button",{onClick:()=>o(d),className:"text-gray-600 hover:text-accent p-2 opacity-50 hover:opacity-100 transition-opacity",title:"Yanıtla",children:m.jsx(Nd,{size:12})})]})}),m.jsx("span",{className:"text-[9px] text-gray-600 mt-1 px-1",children:"Az önce"})]},d.id)}),m.jsx("div",{ref:l})]}),m.jsx("div",{className:"absolute bottom-20 left-0 w-full px-3 z-50",children:m.jsxs("div",{className:"bg-surface/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl",children:[s&&m.jsxs("div",{className:"bg-white/5 px-4 py-2 flex justify-between items-center text-xs border-b border-white/5 animate-slide-up",children:[m.jsxs("div",{className:"flex items-center gap-2 truncate overflow-hidden",children:[m.jsx(Nd,{className:"text-primary shrink-0"}),m.jsxs("div",{className:"flex flex-col overflow-hidden",children:[m.jsx("span",{className:"text-gray-400 text-[10px]",children:"Yanıtlanıyor:"}),m.jsxs("div",{className:"flex gap-1 truncate",children:[m.jsx("span",{className:"font-bold text-white",children:s.username}),m.jsxs("span",{className:"text-gray-500 truncate",children:['"',s.text,'"']})]})]})]}),m.jsx("button",{onClick:()=>o(null),className:"text-gray-400 hover:text-red-500 p-2",children:m.jsx(di,{})})]}),m.jsxs("div",{className:"flex items-center gap-2 p-2",children:[m.jsx("input",{type:"text",value:r,onChange:d=>i(d.target.value),onKeyDown:d=>d.key==="Enter"&&u(),placeholder:s?"Yanıtını yaz...":"Mesaj yaz...",className:"flex-1 bg-black/50 text-white px-4 py-3 rounded-2xl outline-none placeholder-gray-500 text-sm border border-transparent focus:border-primary/50 transition-colors",autoComplete:"off"}),m.jsx("button",{onClick:u,className:`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-neon hover:scale-105 ${r.trim()?"bg-primary":"bg-gray-700 opacity-50"}`,children:m.jsx(H1,{className:"text-sm translate-x-[-1px] translate-y-[1px]"})})]})]})})]})},Tb=({user:t,isMe:e})=>{const n=t.themeColor||"#7C3AED",r=(i,s)=>{const o=parseInt(i.slice(1,3),16),l=parseInt(i.slice(3,5),16),u=parseInt(i.slice(5,7),16);return`rgba(${o}, ${l}, ${u}, ${s})`};return m.jsxs("div",{className:"h-full overflow-y-auto no-scrollbar pb-24 animate-fade-in",children:[m.jsxs("div",{className:"pt-10 pb-6 px-4 rounded-b-[30px] border-b border-white/5 text-center relative transition-colors duration-500",style:{background:`linear-gradient(to bottom, ${r(n,.2)}, transparent)`},children:[m.jsxs("div",{className:"relative inline-block",children:[m.jsx("img",{src:t.avatar,className:"w-24 h-24 rounded-full border-4 mx-auto mb-4 bg-black object-cover",style:{borderColor:n,boxShadow:`0 0 30px ${r(n,.3)}`}}),t.goldBadge&&m.jsx("div",{className:"absolute -right-2 -bottom-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[9px] font-black px-2 py-0.5 rounded shadow-lg",children:"VIBE"})]}),m.jsxs("h2",{className:"text-2xl font-bold flex items-center justify-center gap-2",children:[t.username,t.verified&&m.jsx("span",{className:"text-sm",style:{color:n},children:"✓"})]}),(t.university||t.department)&&m.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm mt-1 font-medium bg-white/5 w-fit mx-auto px-3 py-1 rounded-full border border-white/10 mb-2",style:{color:n},children:[m.jsx(om,{}),m.jsx("span",{children:[t.university,t.department].filter(Boolean).join(" • ")})]}),m.jsx("p",{className:"text-gray-400 text-sm mt-1 max-w-[80%] mx-auto",children:t.bio||"VIBE User"}),m.jsxs("div",{className:"flex justify-center gap-8 mt-6 bg-white/5 mx-auto w-fit px-6 py-3 rounded-2xl border border-white/5",children:[m.jsxs("div",{className:"text-center",children:[m.jsx("div",{className:"text-xl font-bold",style:{color:n},children:t.postCount||0}),m.jsx("div",{className:"text-[10px] text-gray-500 uppercase tracking-wider",children:"Post"})]}),m.jsxs("div",{className:"text-center",children:[m.jsx("div",{className:"text-xl font-bold text-white",children:"42"}),m.jsx("div",{className:"text-[10px] text-gray-500 uppercase tracking-wider",children:"Takipçi"})]})]})]}),m.jsx("div",{className:"p-4",children:e&&m.jsx("button",{onClick:()=>ku.signOut(),className:"w-full py-3 bg-white/5 border border-white/10 rounded-xl text-red-400 font-semibold hover:bg-red-500/10 transition-colors",children:"Çıkış Yap"})})]})},Sb=()=>m.jsxs("div",{className:"h-full overflow-y-auto no-scrollbar p-4 pb-24 animate-fade-in",children:[m.jsx("h2",{className:"text-2xl font-black mb-4",children:"Keşfet"}),m.jsxs("div",{className:"relative mb-6",children:[m.jsx(db,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"}),m.jsx("input",{type:"text",placeholder:"Ara: Kullanıcı, içerik...",className:"w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-primary/50 text-sm"})]}),m.jsxs("div",{className:"bg-gradient-to-r from-indigo-600 to-cyan-500 p-6 rounded-2xl relative overflow-hidden mb-6 shadow-neon",children:[m.jsxs("div",{className:"relative z-10",children:[m.jsx("h3",{className:"text-xl font-bold",children:"Gündem"}),m.jsx("p",{className:"text-white/80 text-sm",children:"Toplulukta neler konuşuluyor?"})]}),m.jsx(lb,{className:"absolute -right-2 -bottom-4 text-9xl text-white opacity-20 rotate-[-15deg]"})]}),m.jsx("div",{className:"grid grid-cols-2 gap-3",children:[1,2,3,4].map(t=>m.jsxs("div",{className:"bg-white/5 border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 cursor-pointer transition-colors",children:[m.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full opacity-80"}),m.jsxs("div",{className:"font-bold text-sm",children:["Trend #",t]})]},t))})]}),Ab=[{name:"Purple",hex:"#7C3AED"},{name:"Cyan",hex:"#06b6d4"},{name:"Green",hex:"#10b981"},{name:"Red",hex:"#ef4444"},{name:"Pink",hex:"#ec4899"},{name:"Orange",hex:"#f97316"}],kb=({user:t,onUpdate:e,onBack:n})=>{const[r,i]=H.useState(t.username),[s,o]=H.useState(t.bio||""),[l,u]=H.useState(t.avatar),[d,f]=H.useState(t.university||""),[p,y]=H.useState(t.department||""),[_,R]=H.useState(t.themeColor||"#7C3AED"),[N,O]=H.useState(!1),[A,w]=H.useState(!1),[x,D]=H.useState(null),[z,j]=H.useState(1),I=H.useRef(null),v=k=>{if(k.target.files&&k.target.files[0]){const C=new FileReader;C.onload=T=>{var ht;(ht=T.target)!=null&&ht.result&&(D(T.target.result),w(!0),j(1))},C.readAsDataURL(k.target.files[0])}},E=()=>{!I.current||!x||(u(x),w(!1),D(null))},S=async()=>{if(r.trim()){O(!0);try{const k=_n(Ve,"users",t.uid);await Ta(k,{username:r,bio:s,avatar:l,university:d,department:p,themeColor:_}),e()}catch(k){console.error("Error updating profile",k),alert("Hata oluştu.")}finally{O(!1)}}};return m.jsxs("div",{className:"h-full bg-black flex flex-col animate-fade-in relative",children:[m.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-white/10",children:[m.jsx("button",{onClick:n,className:"text-gray-400 hover:text-white",children:m.jsx(B1,{})}),m.jsx("h2",{className:"font-bold text-lg",children:"Profili Düzenle"}),m.jsx("button",{onClick:S,disabled:N,className:"text-primary font-bold disabled:opacity-50",style:{color:_},children:N?"...":m.jsx(ib,{})})]}),m.jsxs("div",{className:"p-6 flex flex-col items-center gap-6 overflow-y-auto no-scrollbar",children:[m.jsxs("div",{className:"relative group",children:[m.jsx("img",{src:l,className:"w-28 h-28 rounded-full border-4 object-cover bg-gray-800",style:{borderColor:_},alt:"Avatar"}),m.jsxs("label",{className:"absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform text-white",style:{backgroundColor:_},children:[m.jsx(rb,{className:"text-xs"}),m.jsx("input",{type:"file",className:"hidden",accept:"image/*",onChange:v})]})]}),m.jsxs("div",{className:"w-full space-y-5",children:[m.jsxs("div",{className:"flex flex-col gap-2",children:[m.jsxs("label",{className:"text-xs text-gray-500 uppercase tracking-wider font-bold ml-1 flex items-center gap-1",children:[m.jsx(q1,{})," Tema Rengi"]}),m.jsx("div",{className:"flex gap-3 justify-center bg-white/5 p-4 rounded-xl border border-white/10",children:Ab.map(k=>m.jsx("button",{onClick:()=>R(k.hex),className:`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${_===k.hex?"border-white scale-110":"border-transparent"}`,style:{backgroundColor:k.hex},title:k.name},k.hex))})]}),m.jsxs("div",{className:"flex flex-col gap-2",children:[m.jsx("label",{className:"text-xs text-gray-500 uppercase tracking-wider font-bold ml-1",children:"Kullanıcı Adı"}),m.jsx("input",{type:"text",value:r,onChange:k=>i(k.target.value),className:"w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-opacity-100 transition-colors",style:{borderColor:"rgba(255,255,255,0.1)"},placeholder:"@kullaniciadi"})]}),m.jsxs("div",{className:"flex flex-col gap-2",children:[m.jsxs("label",{className:"text-xs text-gray-500 uppercase tracking-wider font-bold ml-1 flex items-center gap-1",children:[m.jsx(om,{})," Eğitim Bilgileri"]}),m.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[m.jsx("input",{type:"text",value:d,onChange:k=>f(k.target.value),className:"w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-opacity-100 transition-colors",placeholder:"Üniversite Adı"}),m.jsx("input",{type:"text",value:p,onChange:k=>y(k.target.value),className:"w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-opacity-100 transition-colors",placeholder:"Bölüm"})]})]}),m.jsxs("div",{className:"flex flex-col gap-2",children:[m.jsx("label",{className:"text-xs text-gray-500 uppercase tracking-wider font-bold ml-1",children:"Biyografi"}),m.jsx("textarea",{value:s,onChange:k=>o(k.target.value),className:"w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-opacity-100 transition-colors resize-none h-24",placeholder:"Kendinden bahset...",maxLength:150}),m.jsxs("div",{className:"text-right text-xs text-gray-600",children:[s.length,"/150"]})]})]}),m.jsx("p",{className:"text-xs text-gray-600 text-center mt-4",children:"Değişikliklerin anında yansır. VIBE OS v4.1"})]}),A&&x&&m.jsx("div",{className:"absolute inset-0 z-50 bg-black flex flex-col items-center justify-center animate-fade-in p-4",children:m.jsxs("div",{className:"w-full max-w-sm bg-surface rounded-2xl border border-white/10 overflow-hidden flex flex-col h-[500px]",children:[m.jsxs("div",{className:"p-4 border-b border-white/10 flex justify-between items-center",children:[m.jsx("h3",{className:"font-bold",children:"Fotoğrafı Düzenle"}),m.jsx("button",{onClick:()=>{w(!1),D(null)},children:m.jsx(di,{})})]}),m.jsxs("div",{className:"flex-1 bg-black relative flex items-center justify-center overflow-hidden",children:[m.jsx("div",{className:"relative w-[250px] h-[250px] rounded-full border-2 border-white overflow-hidden shadow-[0_0_0_9999px_rgba(0,0,0,0.7)] z-10",children:m.jsx("img",{src:x,style:{transform:`scale(${z})`},className:"w-full h-full object-cover transition-transform origin-center",alt:"Crop Preview"})}),m.jsx("img",{src:x,className:"absolute inset-0 w-full h-full object-cover opacity-20 blur-md"})]}),m.jsxs("div",{className:"p-6 bg-surface border-t border-white/10",children:[m.jsx("label",{className:"text-xs text-gray-500 mb-2 block",children:"Yakınlaştır"}),m.jsx("input",{type:"range",min:"1",max:"3",step:"0.1",value:z,onChange:k=>j(parseFloat(k.target.value)),className:"w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"}),m.jsxs("div",{className:"flex gap-4 mt-6",children:[m.jsx("button",{onClick:()=>{w(!1),D(null)},className:"flex-1 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white",children:"İptal"}),m.jsx("button",{onClick:E,className:"flex-1 py-3 rounded-xl text-white font-bold shadow-lg",style:{backgroundColor:_},children:"Kaydet"})]})]})]})})]})},xb=({onBack:t})=>{const[e,n]=H.useState([]);return H.useEffect(()=>{const r=fs(rn(Ve,"notifications"),ra("timestamp","desc"),wu(20)),i=ps(r,s=>{const o=[];s.forEach(l=>o.push({...l.data(),id:l.id})),n(o),o.forEach(async l=>{l.read||await Ta(_n(Ve,"notifications",l.id),{read:!0})})});return()=>i()},[]),m.jsxs("div",{className:"h-full overflow-y-auto no-scrollbar pb-24 animate-fade-in flex flex-col",children:[m.jsxs("div",{className:"flex items-center gap-3 p-4 border-b border-white/5 sticky top-0 bg-black/80 backdrop-blur-md z-10",children:[m.jsx("button",{onClick:t,className:"text-gray-400 hover:text-white transition-colors",children:m.jsx(B1,{})}),m.jsx("h2",{className:"text-xl font-black",children:"Bildirimler"})]}),m.jsxs("div",{className:"flex flex-col",children:[e.map(r=>m.jsxs("div",{className:`flex items-center gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-colors ${r.read?"":"bg-primary/5"}`,children:[m.jsxs("div",{className:"relative",children:[m.jsx("img",{src:r.avatar,className:"w-12 h-12 rounded-full bg-gray-800 object-cover"}),m.jsx("div",{className:`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white border border-black ${r.type==="like"?"bg-red-500":"bg-primary"}`,children:r.type==="like"?m.jsx($1,{}):m.jsx(Cu,{})})]}),m.jsxs("div",{className:"flex-1",children:[m.jsx("p",{className:"text-sm text-gray-200",children:r.message}),m.jsx("span",{className:"text-[10px] text-gray-500",children:"Az önce"})]}),!r.read&&m.jsx("div",{className:"w-2 h-2 rounded-full bg-accent animate-pulse"})]},r.id)),e.length===0&&m.jsx("div",{className:"text-center text-gray-500 mt-10 p-4",children:"Henüz yeni bir VIBE yok."})]})]})},Rb=()=>{const[t,e]=H.useState(!0),[n,r]=H.useState(""),[i,s]=H.useState(""),[o,l]=H.useState(""),[u,d]=H.useState(""),f=async()=>{d("");try{if(t)await ku.signInWithEmailAndPassword(n,i);else{if(!o)throw new Error("Kullanıcı adı gerekli.");const p=await ku.createUserWithEmailAndPassword(n,i);p.user&&(await p.user.updateProfile({displayName:o}),await DR(_n(Ve,"users",p.user.uid),{uid:p.user.uid,username:o,email:n,postCount:0,verified:!1,createdAt:ms()}))}}catch(p){let y=p.message;y.includes("auth/invalid-email")&&(y="Geçersiz email."),y.includes("auth/missing-password")&&(y="Şifre giriniz."),y.includes("auth/invalid-credential")&&(y="Hatalı bilgi."),d(y)}};return m.jsxs("div",{className:"w-full h-screen bg-black flex flex-col items-center justify-center p-6 text-center",children:[m.jsx(Cu,{className:"text-5xl text-primary mb-6 animate-pulse"}),m.jsx("h1",{className:"text-4xl font-black mb-2",children:"VIBE OS"}),m.jsx("p",{className:"text-gray-500 mb-8 text-sm",children:"v4.0 React Edition"}),m.jsxs("div",{className:"w-full max-w-xs space-y-3",children:[!t&&m.jsx("input",{type:"text",placeholder:"Kullanıcı Adı",className:"w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none text-white focus:border-primary",value:o,onChange:p=>l(p.target.value)}),m.jsx("input",{type:"email",placeholder:"Email",className:"w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none text-white focus:border-primary",value:n,onChange:p=>r(p.target.value)}),m.jsx("input",{type:"password",placeholder:"Şifre",className:"w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none text-white focus:border-primary",value:i,onChange:p=>s(p.target.value)}),u&&m.jsx("p",{className:"text-red-500 text-xs",children:u}),m.jsx("button",{onClick:f,className:"w-full bg-primary text-white font-bold py-3 rounded-xl shadow-neon hover:scale-105 transition-transform",children:t?"Giriş Yap":"Kayıt Ol"}),m.jsx("button",{onClick:()=>e(!t),className:"text-gray-400 text-sm mt-4 hover:text-white",children:t?"Hesabın yok mu? Kayıt Ol":"Giriş Yap"})]})]})},Cb=({user:t,onClose:e})=>{const[n,r]=H.useState(""),[i,s]=H.useState(null),[o,l]=H.useState(!1),u=H.useRef(null),d=p=>{if(p.target.files&&p.target.files[0]){const y=p.target.files[0];if(y.size>500*1024){alert("Resim boyutu çok büyük! Lütfen daha küçük bir resim seçin.");return}const _=new FileReader;_.onload=R=>{var N;(N=R.target)!=null&&N.result&&s(R.target.result)},_.readAsDataURL(y)}},f=async()=>{if(!(!n.trim()&&!i||o)){l(!0);try{await ia(rn(Ve,"posts"),{uid:t.uid,username:t.username,content:n,image:i,likes:0,commentCount:0,verified:t.verified||!1,goldBadge:t.goldBadge||!1,userUniversity:t.university||null,userDepartment:t.department||null,signature:t.postCount?`User #${t.uid.slice(0,5)}`:"",timestamp:ms()}),await Ta(_n(Ve,"users",t.uid),{postCount:Fp(1)}),await ia(rn(Ve,"notifications"),{type:"post",uid:t.uid,username:t.username,avatar:t.avatar,message:`${t.username} yeni bir gönderi VIBEladı.`,timestamp:ms(),read:!1}),e()}catch(p){console.error(p),alert("Hata oluştu.")}finally{l(!1)}}};return m.jsx("div",{className:"absolute inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in",children:m.jsxs("div",{className:"w-full h-full max-w-md bg-surface border border-white/10 rounded-2xl flex flex-col relative overflow-hidden animate-slide-up shadow-2xl",children:[m.jsxs("div",{className:"flex justify-between items-center p-4 border-b border-white/10",children:[m.jsx("h3",{className:"text-lg font-bold",children:"Yeni Gönderi"}),m.jsx("button",{onClick:e,className:"w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10",children:m.jsx(di,{})})]}),m.jsxs("div",{className:"p-4 flex-1 overflow-y-auto",children:[m.jsx("textarea",{className:"w-full min-h-[100px] bg-transparent text-white resize-none outline-none text-lg placeholder-gray-500",placeholder:"Neler oluyor?",value:n,onChange:p=>r(p.target.value),maxLength:280}),i&&m.jsxs("div",{className:"relative mt-4 rounded-xl overflow-hidden border border-white/10 group",children:[m.jsx("img",{src:i,className:"w-full h-auto max-h-[250px] object-cover"}),m.jsx("button",{onClick:()=>s(null),className:"absolute top-2 right-2 bg-black/50 p-2 rounded-full text-white hover:bg-red-500 transition-colors",children:m.jsx(G1,{size:12})})]})]}),m.jsxs("div",{className:"p-4 border-t border-white/10 flex items-center justify-between",children:[m.jsxs("div",{className:"flex gap-2",children:[m.jsx("button",{onClick:()=>{var p;return(p=u.current)==null?void 0:p.click()},className:"text-primary hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors",children:m.jsx(W1,{size:20})}),m.jsx("input",{type:"file",ref:u,className:"hidden",accept:"image/*",onChange:d})]}),m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsxs("div",{className:"text-xs text-gray-500",children:[n.length,"/280"]}),m.jsx("button",{onClick:f,disabled:o||!n.trim()&&!i,className:"bg-primary text-white px-6 py-2 rounded-full font-bold shadow-neon disabled:opacity-50 disabled:shadow-none transition-all",children:o?"...":"Paylaş"})]})]})]})})},Pb=({post:t,currentUser:e,onClose:n})=>{const[r,i]=H.useState([]),[s,o]=H.useState(""),[l,u]=H.useState(!1);H.useEffect(()=>{const f=rn(Ve,"posts",t.id,"comments"),p=fs(f,ra("timestamp","asc")),y=ps(p,_=>{const R=[];_.forEach(N=>R.push({...N.data(),id:N.id})),i(R)});return()=>y()},[t.id]);const d=async()=>{if(!(!s.trim()||l)){u(!0);try{await ia(rn(Ve,"posts",t.id,"comments"),{uid:e.uid,username:e.username,avatar:e.avatar,text:s,timestamp:ms()}),await Ta(_n(Ve,"posts",t.id),{commentCount:Fp(1)}),o("")}catch(f){console.error(f)}finally{u(!1)}}};return m.jsx("div",{className:"absolute inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center animate-fade-in",children:m.jsxs("div",{className:"w-full h-[80%] sm:h-[600px] sm:max-w-md bg-surface border-t sm:border border-white/10 rounded-t-3xl sm:rounded-3xl flex flex-col relative overflow-hidden animate-slide-up shadow-2xl",children:[m.jsxs("div",{className:"flex justify-between items-center p-4 border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-10",children:[m.jsx("h3",{className:"text-lg font-bold",children:"Yorumlar"}),m.jsx("button",{onClick:n,className:"w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10",children:m.jsx(di,{})})]}),m.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[r.length===0&&m.jsx("div",{className:"text-center text-gray-500 mt-10",children:"İlk yorumu sen yap!"}),r.map(f=>m.jsxs("div",{className:"flex gap-3",children:[m.jsx("img",{src:f.avatar,className:"w-8 h-8 rounded-full bg-gray-800 object-cover shrink-0"}),m.jsxs("div",{className:"flex flex-col",children:[m.jsxs("div",{className:"bg-white/5 p-3 rounded-2xl rounded-tl-none",children:[m.jsx("span",{className:"font-bold text-xs text-primary block mb-1",children:f.username}),m.jsx("p",{className:"text-sm text-gray-200",children:f.text})]}),m.jsx("span",{className:"text-[10px] text-gray-500 ml-2 mt-1",children:"Az önce"})]})]},f.id))]}),m.jsx("div",{className:"p-3 border-t border-white/10 bg-black/80 pb-6 sm:pb-3",children:m.jsxs("div",{className:"flex items-center gap-2 bg-white/5 rounded-full px-2 py-1 border border-white/5",children:[m.jsx("input",{type:"text",value:s,onChange:f=>o(f.target.value),placeholder:"Yorum ekle...",className:"flex-1 bg-transparent px-4 py-3 outline-none text-white placeholder-gray-500 text-sm",onKeyDown:f=>f.key==="Enter"&&d()}),m.jsx("button",{onClick:d,disabled:!s.trim()||l,className:"w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-neon disabled:opacity-50",children:m.jsx(H1,{size:12})})]})})]})})},Nb=()=>{const[t,e]=H.useState(null),[n,r]=H.useState(!0),[i,s]=H.useState("feed"),[o,l]=H.useState(0),[u,d]=H.useState(!1),[f,p]=H.useState(!0),[y,_]=H.useState(null);H.useEffect(()=>{const N=ku.onAuthStateChanged(async O=>{if(O){try{const A=await hv(_n(Ve,"users",O.uid));A.exists()?e({...A.data(),uid:O.uid}):e({uid:O.uid,email:O.email,username:O.displayName||"User",avatar:`https://api.dicebear.com/7.x/avataaars/svg?seed=${O.uid}`})}catch(A){console.error("Error fetching user",A)}setTimeout(()=>p(!1),800)}else e(null),p(!1);r(!1)});return()=>N()},[]),H.useEffect(()=>{if(!t)return;const N=fs(rn(Ve,"notifications"),CR("read","==",!1)),O=ps(N,A=>{l(A.size)});return()=>O()},[t]);const R=async()=>{if(!t)return;const N=await hv(_n(Ve,"users",t.uid));N.exists()&&e({...N.data(),uid:t.uid})};return n?m.jsx("div",{className:"h-screen w-full bg-black flex items-center justify-center text-primary",children:m.jsx(Cu,{className:"text-4xl animate-pulse"})}):t?f?m.jsxs("div",{className:"fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-center transition-opacity duration-500",children:[m.jsx(Cu,{className:"text-6xl text-primary mb-6 drop-shadow-[0_0_30px_rgba(124,58,237,0.8)]"}),m.jsxs("h1",{className:"text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-primary mb-4",children:["Senin VIBE'ın",m.jsx("br",{}),"Nedir?"]})]}):m.jsx("div",{className:"w-full h-[100dvh] bg-black text-white overflow-hidden flex justify-center",children:m.jsxs("div",{className:"w-full max-w-[500px] h-full flex flex-col relative bg-surface/50 shadow-2xl backdrop-blur-sm border-x border-white/5",children:[m.jsxs("header",{className:"shrink-0 h-[60px] px-5 flex items-center justify-between bg-black/80 backdrop-blur-md border-b border-white/10 z-20",children:[m.jsxs("div",{className:"cursor-pointer group relative",onClick:()=>s("feed"),children:[m.jsx("h1",{className:"text-3xl font-black tracking-tighter italic select-none",children:m.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-text-shimmer animate-logo-glow",children:"VIBE"})}),m.jsx("div",{className:"absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 blur-sm opacity-50"})]}),m.jsxs("div",{className:"flex gap-5 text-lg",children:[m.jsxs("button",{onClick:()=>s("notifications"),className:`relative transition-colors hover:scale-110 transform duration-200 ${i==="notifications"?"text-primary":"hover:text-primary"}`,children:[m.jsx(nb,{}),o>0&&m.jsx("span",{className:"absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] flex items-center justify-center font-bold border border-black animate-pulse",children:o})]}),m.jsx("button",{onClick:()=>s("settings"),className:`hover:text-primary transition-colors hover:rotate-90 transform duration-300 ${i==="settings"?"text-primary":""}`,children:m.jsx(ub,{})})]})]}),m.jsxs("main",{className:"flex-1 overflow-hidden relative",children:[i==="feed"&&m.jsx(Eb,{user:t,onCommentClick:N=>_(N)}),i==="explore"&&m.jsx(Sb,{}),i==="chat"&&m.jsx(Ib,{currentUser:t}),i==="profile"&&m.jsx(Tb,{user:t,isMe:!0}),i==="settings"&&m.jsx(kb,{user:t,onUpdate:R,onBack:()=>s("profile")}),i==="notifications"&&m.jsx(xb,{onBack:()=>s("feed")})]}),i!=="settings"&&i!=="notifications"&&m.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] h-[65px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex justify-around items-center px-2 z-40 shadow-[0_10px_40px_rgba(0,0,0,0.5)]",children:[m.jsx(yl,{icon:m.jsx(cb,{}),active:i==="feed",onClick:()=>s("feed")}),m.jsx(yl,{icon:m.jsx(ab,{}),active:i==="explore",onClick:()=>s("explore")}),m.jsx("button",{onClick:()=>d(!0),className:"mb-8 w-14 h-14 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center text-white text-xl shadow-[0_0_20px_rgba(124,58,237,0.6)] hover:scale-110 transition-transform border border-white/20",children:m.jsx(K1,{})}),m.jsx(yl,{icon:m.jsx(ob,{}),active:i==="chat",onClick:()=>s("chat")}),m.jsx(yl,{icon:m.jsx(pb,{}),active:i==="profile",onClick:()=>s("profile")})]}),u&&m.jsx(Cb,{user:t,onClose:()=>d(!1)}),y&&m.jsx(Pb,{post:y,currentUser:t,onClose:()=>_(null)})]})}):m.jsx(Rb,{})},yl=({icon:t,active:e,onClick:n})=>m.jsx("button",{onClick:n,className:`w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${e?"bg-white/10 text-accent -translate-y-1 shadow-[0_0_10px_rgba(34,211,238,0.3)]":"text-gray-400 hover:text-white"}`,children:t}),Q1=document.createElement("style");Q1.innerHTML=`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
`;document.head.appendChild(Q1);const am=document.createElement("script");am.src="https://cdn.tailwindcss.com";document.head.appendChild(am);am.onload=()=>{tailwind.config={theme:{extend:{colors:{primary:"var(--primary)",surface:"var(--surface-color)",accent:"var(--accent)"},boxShadow:{neon:"0 0 15px var(--primary-glow)"}}}}};const Y1=document.getElementById("root");if(!Y1)throw new Error("Failed to find the root element");const bb=Dd.createRoot(Y1);bb.render(m.jsx(lr.StrictMode,{children:m.jsx(Nb,{})}));
