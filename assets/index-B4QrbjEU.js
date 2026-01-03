(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function f(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(d){if(d.ep)return;d.ep=!0;const h=f(d);fetch(d.href,h)}})();function rh(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Dr={exports:{}},Mn={};var Pm;function ch(){if(Pm)return Mn;Pm=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(r,d,h){var p=null;if(h!==void 0&&(p=""+h),d.key!==void 0&&(p=""+d.key),"key"in d){h={};for(var z in d)z!=="key"&&(h[z]=d[z])}else h=d;return d=h.ref,{$$typeof:u,type:r,key:p,ref:d!==void 0?d:null,props:h}}return Mn.Fragment=c,Mn.jsx=f,Mn.jsxs=f,Mn}var td;function sh(){return td||(td=1,Dr.exports=ch()),Dr.exports}var s=sh(),_r={exports:{}},F={};var ed;function fh(){if(ed)return F;ed=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),U=Symbol.iterator;function X(b){return b===null||typeof b!="object"?null:(b=U&&b[U]||b["@@iterator"],typeof b=="function"?b:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,Q={};function Z(b,_,B){this.props=b,this.context=_,this.refs=Q,this.updater=B||L}Z.prototype.isReactComponent={},Z.prototype.setState=function(b,_){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,_,"setState")},Z.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function V(){}V.prototype=Z.prototype;function $(b,_,B){this.props=b,this.context=_,this.refs=Q,this.updater=B||L}var jt=$.prototype=new V;jt.constructor=$,K(jt,Z.prototype),jt.isPureReactComponent=!0;var bt=Array.isArray;function Tt(){}var I={H:null,A:null,T:null,S:null},Ot=Object.prototype.hasOwnProperty;function Lt(b,_,B){var Y=B.ref;return{$$typeof:u,type:b,key:_,ref:Y!==void 0?Y:null,props:B}}function pe(b,_){return Lt(b.type,_,b.props)}function Re(b){return typeof b=="object"&&b!==null&&b.$$typeof===u}function Wt(b){var _={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(B){return _[B]})}var Oa=/\/+/g;function He(b,_){return typeof b=="object"&&b!==null&&b.key!=null?Wt(""+b.key):_.toString(36)}function Ae(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Tt,Tt):(b.status="pending",b.then(function(_){b.status==="pending"&&(b.status="fulfilled",b.value=_)},function(_){b.status==="pending"&&(b.status="rejected",b.reason=_)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function R(b,_,B,Y,P){var at=typeof b;(at==="undefined"||at==="boolean")&&(b=null);var ft=!1;if(b===null)ft=!0;else switch(at){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(b.$$typeof){case u:case c:ft=!0;break;case N:return ft=b._init,R(ft(b._payload),_,B,Y,P)}}if(ft)return P=P(b),ft=Y===""?"."+He(b,0):Y,bt(P)?(B="",ft!=null&&(B=ft.replace(Oa,"$&/")+"/"),R(P,_,B,"",function(ql){return ql})):P!=null&&(Re(P)&&(P=pe(P,B+(P.key==null||b&&b.key===P.key?"":(""+P.key).replace(Oa,"$&/")+"/")+ft)),_.push(P)),1;ft=0;var Kt=Y===""?".":Y+":";if(bt(b))for(var Ct=0;Ct<b.length;Ct++)Y=b[Ct],at=Kt+He(Y,Ct),ft+=R(Y,_,B,at,P);else if(Ct=X(b),typeof Ct=="function")for(b=Ct.call(b),Ct=0;!(Y=b.next()).done;)Y=Y.value,at=Kt+He(Y,Ct++),ft+=R(Y,_,B,at,P);else if(at==="object"){if(typeof b.then=="function")return R(Ae(b),_,B,Y,P);throw _=String(b),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return ft}function H(b,_,B){if(b==null)return b;var Y=[],P=0;return R(b,Y,"","",function(at){return _.call(B,at,P++)}),Y}function W(b){if(b._status===-1){var _=b._result;_=_(),_.then(function(B){(b._status===0||b._status===-1)&&(b._status=1,b._result=B)},function(B){(b._status===0||b._status===-1)&&(b._status=2,b._result=B)}),b._status===-1&&(b._status=0,b._result=_)}if(b._status===1)return b._result.default;throw b._result}var pt=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},vt={map:H,forEach:function(b,_,B){H(b,function(){_.apply(this,arguments)},B)},count:function(b){var _=0;return H(b,function(){_++}),_},toArray:function(b){return H(b,function(_){return _})||[]},only:function(b){if(!Re(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return F.Activity=T,F.Children=vt,F.Component=Z,F.Fragment=f,F.Profiler=d,F.PureComponent=$,F.StrictMode=r,F.Suspense=v,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,F.__COMPILER_RUNTIME={__proto__:null,c:function(b){return I.H.useMemoCache(b)}},F.cache=function(b){return function(){return b.apply(null,arguments)}},F.cacheSignal=function(){return null},F.cloneElement=function(b,_,B){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var Y=K({},b.props),P=b.key;if(_!=null)for(at in _.key!==void 0&&(P=""+_.key),_)!Ot.call(_,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&_.ref===void 0||(Y[at]=_[at]);var at=arguments.length-2;if(at===1)Y.children=B;else if(1<at){for(var ft=Array(at),Kt=0;Kt<at;Kt++)ft[Kt]=arguments[Kt+2];Y.children=ft}return Lt(b.type,P,Y)},F.createContext=function(b){return b={$$typeof:p,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:h,_context:b},b},F.createElement=function(b,_,B){var Y,P={},at=null;if(_!=null)for(Y in _.key!==void 0&&(at=""+_.key),_)Ot.call(_,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(P[Y]=_[Y]);var ft=arguments.length-2;if(ft===1)P.children=B;else if(1<ft){for(var Kt=Array(ft),Ct=0;Ct<ft;Ct++)Kt[Ct]=arguments[Ct+2];P.children=Kt}if(b&&b.defaultProps)for(Y in ft=b.defaultProps,ft)P[Y]===void 0&&(P[Y]=ft[Y]);return Lt(b,at,P)},F.createRef=function(){return{current:null}},F.forwardRef=function(b){return{$$typeof:z,render:b}},F.isValidElement=Re,F.lazy=function(b){return{$$typeof:N,_payload:{_status:-1,_result:b},_init:W}},F.memo=function(b,_){return{$$typeof:x,type:b,compare:_===void 0?null:_}},F.startTransition=function(b){var _=I.T,B={};I.T=B;try{var Y=b(),P=I.S;P!==null&&P(B,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(Tt,pt)}catch(at){pt(at)}finally{_!==null&&B.types!==null&&(_.types=B.types),I.T=_}},F.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},F.use=function(b){return I.H.use(b)},F.useActionState=function(b,_,B){return I.H.useActionState(b,_,B)},F.useCallback=function(b,_){return I.H.useCallback(b,_)},F.useContext=function(b){return I.H.useContext(b)},F.useDebugValue=function(){},F.useDeferredValue=function(b,_){return I.H.useDeferredValue(b,_)},F.useEffect=function(b,_){return I.H.useEffect(b,_)},F.useEffectEvent=function(b){return I.H.useEffectEvent(b)},F.useId=function(){return I.H.useId()},F.useImperativeHandle=function(b,_,B){return I.H.useImperativeHandle(b,_,B)},F.useInsertionEffect=function(b,_){return I.H.useInsertionEffect(b,_)},F.useLayoutEffect=function(b,_){return I.H.useLayoutEffect(b,_)},F.useMemo=function(b,_){return I.H.useMemo(b,_)},F.useOptimistic=function(b,_){return I.H.useOptimistic(b,_)},F.useReducer=function(b,_,B){return I.H.useReducer(b,_,B)},F.useRef=function(b){return I.H.useRef(b)},F.useState=function(b){return I.H.useState(b)},F.useSyncExternalStore=function(b,_,B){return I.H.useSyncExternalStore(b,_,B)},F.useTransition=function(){return I.H.useTransition()},F.version="19.2.3",F}var ad;function Zr(){return ad||(ad=1,_r.exports=fh()),_r.exports}var A=Zr();const Wa=rh(A);var Ur={exports:{}},Dn={},Hr={exports:{}},Br={};var ld;function mh(){return ld||(ld=1,(function(u){function c(R,H){var W=R.length;R.push(H);t:for(;0<W;){var pt=W-1>>>1,vt=R[pt];if(0<d(vt,H))R[pt]=H,R[W]=vt,W=pt;else break t}}function f(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var H=R[0],W=R.pop();if(W!==H){R[0]=W;t:for(var pt=0,vt=R.length,b=vt>>>1;pt<b;){var _=2*(pt+1)-1,B=R[_],Y=_+1,P=R[Y];if(0>d(B,W))Y<vt&&0>d(P,B)?(R[pt]=P,R[Y]=W,pt=Y):(R[pt]=B,R[_]=W,pt=_);else if(Y<vt&&0>d(P,W))R[pt]=P,R[Y]=W,pt=Y;else break t}}return H}function d(R,H){var W=R.sortIndex-H.sortIndex;return W!==0?W:R.id-H.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var p=Date,z=p.now();u.unstable_now=function(){return p.now()-z}}var v=[],x=[],N=1,T=null,U=3,X=!1,L=!1,K=!1,Q=!1,Z=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function jt(R){for(var H=f(x);H!==null;){if(H.callback===null)r(x);else if(H.startTime<=R)r(x),H.sortIndex=H.expirationTime,c(v,H);else break;H=f(x)}}function bt(R){if(K=!1,jt(R),!L)if(f(v)!==null)L=!0,Tt||(Tt=!0,Wt());else{var H=f(x);H!==null&&Ae(bt,H.startTime-R)}}var Tt=!1,I=-1,Ot=5,Lt=-1;function pe(){return Q?!0:!(u.unstable_now()-Lt<Ot)}function Re(){if(Q=!1,Tt){var R=u.unstable_now();Lt=R;var H=!0;try{t:{L=!1,K&&(K=!1,V(I),I=-1),X=!0;var W=U;try{e:{for(jt(R),T=f(v);T!==null&&!(T.expirationTime>R&&pe());){var pt=T.callback;if(typeof pt=="function"){T.callback=null,U=T.priorityLevel;var vt=pt(T.expirationTime<=R);if(R=u.unstable_now(),typeof vt=="function"){T.callback=vt,jt(R),H=!0;break e}T===f(v)&&r(v),jt(R)}else r(v);T=f(v)}if(T!==null)H=!0;else{var b=f(x);b!==null&&Ae(bt,b.startTime-R),H=!1}}break t}finally{T=null,U=W,X=!1}H=void 0}}finally{H?Wt():Tt=!1}}}var Wt;if(typeof $=="function")Wt=function(){$(Re)};else if(typeof MessageChannel<"u"){var Oa=new MessageChannel,He=Oa.port2;Oa.port1.onmessage=Re,Wt=function(){He.postMessage(null)}}else Wt=function(){Z(Re,0)};function Ae(R,H){I=Z(function(){R(u.unstable_now())},H)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(R){R.callback=null},u.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ot=0<R?Math.floor(1e3/R):5},u.unstable_getCurrentPriorityLevel=function(){return U},u.unstable_next=function(R){switch(U){case 1:case 2:case 3:var H=3;break;default:H=U}var W=U;U=H;try{return R()}finally{U=W}},u.unstable_requestPaint=function(){Q=!0},u.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=U;U=R;try{return H()}finally{U=W}},u.unstable_scheduleCallback=function(R,H,W){var pt=u.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?pt+W:pt):W=pt,R){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=W+vt,R={id:N++,callback:H,priorityLevel:R,startTime:W,expirationTime:vt,sortIndex:-1},W>pt?(R.sortIndex=W,c(x,R),f(v)===null&&R===f(x)&&(K?(V(I),I=-1):K=!0,Ae(bt,W-pt))):(R.sortIndex=vt,c(v,R),L||X||(L=!0,Tt||(Tt=!0,Wt()))),R},u.unstable_shouldYield=pe,u.unstable_wrapCallback=function(R){var H=U;return function(){var W=U;U=H;try{return R.apply(this,arguments)}finally{U=W}}}})(Br)),Br}var nd;function dh(){return nd||(nd=1,Hr.exports=mh()),Hr.exports}var qr={exports:{}},kt={};var id;function ph(){if(id)return kt;id=1;var u=Zr();function c(v){var x="https://react.dev/errors/"+v;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)x+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+v+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var r={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(v,x,N){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:T==null?null:""+T,children:v,containerInfo:x,implementation:N}}var p=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(v,x){if(v==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,kt.createPortal=function(v,x){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(c(299));return h(v,x,null,N)},kt.flushSync=function(v){var x=p.T,N=r.p;try{if(p.T=null,r.p=2,v)return v()}finally{p.T=x,r.p=N,r.d.f()}},kt.preconnect=function(v,x){typeof v=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,r.d.C(v,x))},kt.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},kt.preinit=function(v,x){if(typeof v=="string"&&x&&typeof x.as=="string"){var N=x.as,T=z(N,x.crossOrigin),U=typeof x.integrity=="string"?x.integrity:void 0,X=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;N==="style"?r.d.S(v,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:T,integrity:U,fetchPriority:X}):N==="script"&&r.d.X(v,{crossOrigin:T,integrity:U,fetchPriority:X,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},kt.preinitModule=function(v,x){if(typeof v=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var N=z(x.as,x.crossOrigin);r.d.M(v,{crossOrigin:N,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&r.d.M(v)},kt.preload=function(v,x){if(typeof v=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var N=x.as,T=z(N,x.crossOrigin);r.d.L(v,N,{crossOrigin:T,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},kt.preloadModule=function(v,x){if(typeof v=="string")if(x){var N=z(x.as,x.crossOrigin);r.d.m(v,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:N,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else r.d.m(v)},kt.requestFormReset=function(v){r.d.r(v)},kt.unstable_batchedUpdates=function(v,x){return v(x)},kt.useFormState=function(v,x,N){return p.H.useFormState(v,x,N)},kt.useFormStatus=function(){return p.H.useHostTransitionStatus()},kt.version="19.2.3",kt}var ud;function hh(){if(ud)return qr.exports;ud=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),qr.exports=ph(),qr.exports}var od;function gh(){if(od)return Dn;od=1;var u=dh(),c=Zr(),f=hh();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function p(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function z(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function v(t){if(h(t)!==t)throw Error(r(188))}function x(t){var e=t.alternate;if(!e){if(e=h(t),e===null)throw Error(r(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return v(n),t;if(i===l)return v(n),e;i=i.sibling}throw Error(r(188))}if(a.return!==l.return)a=n,l=i;else{for(var o=!1,m=n.child;m;){if(m===a){o=!0,a=n,l=i;break}if(m===l){o=!0,l=n,a=i;break}m=m.sibling}if(!o){for(m=i.child;m;){if(m===a){o=!0,a=i,l=n;break}if(m===l){o=!0,l=i,a=n;break}m=m.sibling}if(!o)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:e}function N(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=N(t),e!==null)return e;t=t.sibling}return null}var T=Object.assign,U=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),$=Symbol.for("react.context"),jt=Symbol.for("react.forward_ref"),bt=Symbol.for("react.suspense"),Tt=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),Lt=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),Re=Symbol.iterator;function Wt(t){return t===null||typeof t!="object"?null:(t=Re&&t[Re]||t["@@iterator"],typeof t=="function"?t:null)}var Oa=Symbol.for("react.client.reference");function He(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Oa?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case K:return"Fragment";case Z:return"Profiler";case Q:return"StrictMode";case bt:return"Suspense";case Tt:return"SuspenseList";case Lt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case L:return"Portal";case $:return t.displayName||"Context";case V:return(t._context.displayName||"Context")+".Consumer";case jt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return e=t.displayName||null,e!==null?e:He(t.type)||"Memo";case Ot:e=t._payload,t=t._init;try{return He(t(e))}catch{}}return null}var Ae=Array.isArray,R=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},pt=[],vt=-1;function b(t){return{current:t}}function _(t){0>vt||(t.current=pt[vt],pt[vt]=null,vt--)}function B(t,e){vt++,pt[vt]=t.current,t.current=e}var Y=b(null),P=b(null),at=b(null),ft=b(null);function Kt(t,e){switch(B(at,e),B(P,t),B(Y,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?zm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=zm(e),t=Em(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}_(Y),B(Y,t)}function Ct(){_(Y),_(P),_(at)}function ql(t){t.memoizedState!==null&&B(ft,t);var e=Y.current,a=Em(e,t.type);e!==a&&(B(P,t),B(Y,a))}function Ln(t){P.current===t&&(_(Y),_(P)),ft.current===t&&(_(ft),Nn._currentValue=W)}var pu,Fr;function Ca(t){if(pu===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);pu=e&&e[1]||"",Fr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pu+t+Fr}var hu=!1;function gu(t,e){if(!t||hu)return"";hu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(O){var w=O}Reflect.construct(t,[],D)}else{try{D.call()}catch(O){w=O}t.call(D.prototype)}}else{try{throw Error()}catch(O){w=O}(D=t())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(O){if(O&&w&&typeof O.stack=="string")return[O.stack,w.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],m=i[1];if(o&&m){var g=o.split(`
`),j=m.split(`
`);for(n=l=0;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;for(;n<j.length&&!j[n].includes("DetermineComponentFrameRoot");)n++;if(l===g.length||n===j.length)for(l=g.length-1,n=j.length-1;1<=l&&0<=n&&g[l]!==j[n];)n--;for(;1<=l&&0<=n;l--,n--)if(g[l]!==j[n]){if(l!==1||n!==1)do if(l--,n--,0>n||g[l]!==j[n]){var C=`
`+g[l].replace(" at new "," at ");return t.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",t.displayName)),C}while(1<=l&&0<=n);break}}}finally{hu=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ca(a):""}function Yd(t,e){switch(t.tag){case 26:case 27:case 5:return Ca(t.type);case 16:return Ca("Lazy");case 13:return t.child!==e&&e!==null?Ca("Suspense Fallback"):Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 15:return gu(t.type,!1);case 11:return gu(t.type.render,!1);case 1:return gu(t.type,!0);case 31:return Ca("Activity");default:return""}}function Ir(t){try{var e="",a=null;do e+=Yd(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var xu=Object.prototype.hasOwnProperty,vu=u.unstable_scheduleCallback,yu=u.unstable_cancelCallback,Ld=u.unstable_shouldYield,Gd=u.unstable_requestPaint,le=u.unstable_now,Xd=u.unstable_getCurrentPriorityLevel,Pr=u.unstable_ImmediatePriority,tc=u.unstable_UserBlockingPriority,Gn=u.unstable_NormalPriority,Qd=u.unstable_LowPriority,ec=u.unstable_IdlePriority,Zd=u.log,Vd=u.unstable_setDisableYieldValue,Yl=null,ne=null;function na(t){if(typeof Zd=="function"&&Vd(t),ne&&typeof ne.setStrictMode=="function")try{ne.setStrictMode(Yl,t)}catch{}}var ie=Math.clz32?Math.clz32:Jd,kd=Math.log,Kd=Math.LN2;function Jd(t){return t>>>=0,t===0?32:31-(kd(t)/Kd|0)|0}var Xn=256,Qn=262144,Zn=4194304;function Ra(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Vn(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var m=l&134217727;return m!==0?(l=m&~i,l!==0?n=Ra(l):(o&=m,o!==0?n=Ra(o):a||(a=m&~t,a!==0&&(n=Ra(a))))):(m=l&~i,m!==0?n=Ra(m):o!==0?n=Ra(o):a||(a=l&~t,a!==0&&(n=Ra(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function Ll(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Wd(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ac(){var t=Zn;return Zn<<=1,(Zn&62914560)===0&&(Zn=4194304),t}function bu(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Gl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $d(t,e,a,l,n,i){var o=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var m=t.entanglements,g=t.expirationTimes,j=t.hiddenUpdates;for(a=o&~a;0<a;){var C=31-ie(a),D=1<<C;m[C]=0,g[C]=-1;var w=j[C];if(w!==null)for(j[C]=null,C=0;C<w.length;C++){var O=w[C];O!==null&&(O.lane&=-536870913)}a&=~D}l!==0&&lc(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(o&~e))}function lc(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-ie(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function nc(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-ie(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function ic(t,e){var a=e&-e;return a=(a&42)!==0?1:Su(a),(a&(t.suspendedLanes|e))!==0?0:a}function Su(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function uc(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:km(t.type))}function oc(t,e){var a=H.p;try{return H.p=t,e()}finally{H.p=a}}var ia=Math.random().toString(36).slice(2),Gt="__reactFiber$"+ia,$t="__reactProps$"+ia,Pa="__reactContainer$"+ia,Eu="__reactEvents$"+ia,Fd="__reactListeners$"+ia,Id="__reactHandles$"+ia,rc="__reactResources$"+ia,Xl="__reactMarker$"+ia;function ju(t){delete t[Gt],delete t[$t],delete t[Eu],delete t[Fd],delete t[Id]}function tl(t){var e=t[Gt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Pa]||a[Gt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Cm(t);t!==null;){if(a=t[Gt])return a;t=Cm(t)}return e}t=a,a=t.parentNode}return null}function el(t){if(t=t[Gt]||t[Pa]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ql(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function al(t){var e=t[rc];return e||(e=t[rc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function qt(t){t[Xl]=!0}var cc=new Set,sc={};function Ma(t,e){ll(t,e),ll(t+"Capture",e)}function ll(t,e){for(sc[t]=e,t=0;t<e.length;t++)cc.add(e[t])}var Pd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fc={},mc={};function tp(t){return xu.call(mc,t)?!0:xu.call(fc,t)?!1:Pd.test(t)?mc[t]=!0:(fc[t]=!0,!1)}function kn(t,e,a){if(tp(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Kn(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Be(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function he(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ep(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wu(t){if(!t._valueTracker){var e=dc(t)?"checked":"value";t._valueTracker=ep(t,e,""+t[e])}}function pc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=dc(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function Jn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ap=/[\n"\\]/g;function ge(t){return t.replace(ap,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Tu(t,e,a,l,n,i,o,m){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+he(e)):t.value!==""+he(e)&&(t.value=""+he(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?Au(t,o,he(e)):a!=null?Au(t,o,he(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.name=""+he(m):t.removeAttribute("name")}function hc(t,e,a,l,n,i,o,m){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){wu(t);return}a=a!=null?""+he(a):"",e=e!=null?""+he(e):a,m||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=m?t.checked:!!l,t.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),wu(t)}function Au(t,e,a){e==="number"&&Jn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function nl(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+he(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function gc(t,e,a){if(e!=null&&(e=""+he(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+he(a):""}function xc(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(r(92));if(Ae(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=he(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),wu(t)}function il(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var lp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vc(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||lp.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function yc(t,e,a){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&vc(t,n,l)}else for(var i in e)e.hasOwnProperty(i)&&vc(t,i,e[i])}function Nu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var np=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ip=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wn(t){return ip.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qe(){}var Ou=null;function Cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ul=null,ol=null;function bc(t){var e=el(t);if(e&&(t=e.stateNode)){var a=t[$t]||null;t:switch(t=e.stateNode,e.type){case"input":if(Tu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ge(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[$t]||null;if(!n)throw Error(r(90));Tu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&pc(l)}break t;case"textarea":gc(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&nl(t,!!a.multiple,e,!1)}}}var Ru=!1;function Sc(t,e,a){if(Ru)return t(e,a);Ru=!0;try{var l=t(e);return l}finally{if(Ru=!1,(ul!==null||ol!==null)&&(Hi(),ul&&(e=ul,t=ol,ol=ul=null,bc(e),t)))for(e=0;e<t.length;e++)bc(t[e])}}function Zl(t,e){var a=t.stateNode;if(a===null)return null;var l=a[$t]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,e,typeof a));return a}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(Ye)try{var Vl={};Object.defineProperty(Vl,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Vl,Vl),window.removeEventListener("test",Vl,Vl)}catch{Mu=!1}var ua=null,Du=null,$n=null;function zc(){if($n)return $n;var t,e=Du,a=e.length,l,n="value"in ua?ua.value:ua.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var o=a-t;for(l=1;l<=o&&e[a-l]===n[i-l];l++);return $n=n.slice(t,1<l?1-l:void 0)}function Fn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function In(){return!0}function Ec(){return!1}function Ft(t){function e(a,l,n,i,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var m in t)t.hasOwnProperty(m)&&(a=t[m],this[m]=a?a(i):i[m]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?In:Ec,this.isPropagationStopped=Ec,this}return T(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=In)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=In)},persist:function(){},isPersistent:In}),e}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pn=Ft(Da),kl=T({},Da,{view:0,detail:0}),up=Ft(kl),_u,Uu,Kl,ti=T({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kl&&(Kl&&t.type==="mousemove"?(_u=t.screenX-Kl.screenX,Uu=t.screenY-Kl.screenY):Uu=_u=0,Kl=t),_u)},movementY:function(t){return"movementY"in t?t.movementY:Uu}}),jc=Ft(ti),op=T({},ti,{dataTransfer:0}),rp=Ft(op),cp=T({},kl,{relatedTarget:0}),Hu=Ft(cp),sp=T({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),fp=Ft(sp),mp=T({},Da,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dp=Ft(mp),pp=T({},Da,{data:0}),wc=Ft(pp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vp(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xp[t])?!!e[t]:!1}function Bu(){return vp}var yp=T({},kl,{key:function(t){if(t.key){var e=hp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(t){return t.type==="keypress"?Fn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bp=Ft(yp),Sp=T({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tc=Ft(Sp),zp=T({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),Ep=Ft(zp),jp=T({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),wp=Ft(jp),Tp=T({},ti,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ap=Ft(Tp),Np=T({},Da,{newState:0,oldState:0}),Op=Ft(Np),Cp=[9,13,27,32],qu=Ye&&"CompositionEvent"in window,Jl=null;Ye&&"documentMode"in document&&(Jl=document.documentMode);var Rp=Ye&&"TextEvent"in window&&!Jl,Ac=Ye&&(!qu||Jl&&8<Jl&&11>=Jl),Nc=" ",Oc=!1;function Cc(t,e){switch(t){case"keyup":return Cp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rl=!1;function Mp(t,e){switch(t){case"compositionend":return Rc(e);case"keypress":return e.which!==32?null:(Oc=!0,Nc);case"textInput":return t=e.data,t===Nc&&Oc?null:t;default:return null}}function Dp(t,e){if(rl)return t==="compositionend"||!qu&&Cc(t,e)?(t=zc(),$n=Du=ua=null,rl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ac&&e.locale!=="ko"?null:e.data;default:return null}}var _p={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_p[t.type]:e==="textarea"}function Dc(t,e,a,l){ul?ol?ol.push(l):ol=[l]:ul=l,e=Qi(e,"onChange"),0<e.length&&(a=new Pn("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Wl=null,$l=null;function Up(t){gm(t,0)}function ei(t){var e=Ql(t);if(pc(e))return t}function _c(t,e){if(t==="change")return e}var Uc=!1;if(Ye){var Yu;if(Ye){var Lu="oninput"in document;if(!Lu){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),Lu=typeof Hc.oninput=="function"}Yu=Lu}else Yu=!1;Uc=Yu&&(!document.documentMode||9<document.documentMode)}function Bc(){Wl&&(Wl.detachEvent("onpropertychange",qc),$l=Wl=null)}function qc(t){if(t.propertyName==="value"&&ei($l)){var e=[];Dc(e,$l,t,Cu(t)),Sc(Up,e)}}function Hp(t,e,a){t==="focusin"?(Bc(),Wl=e,$l=a,Wl.attachEvent("onpropertychange",qc)):t==="focusout"&&Bc()}function Bp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ei($l)}function qp(t,e){if(t==="click")return ei(e)}function Yp(t,e){if(t==="input"||t==="change")return ei(e)}function Lp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ue=typeof Object.is=="function"?Object.is:Lp;function Fl(t,e){if(ue(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!xu.call(e,n)||!ue(t[n],e[n]))return!1}return!0}function Yc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lc(t,e){var a=Yc(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Yc(a)}}function Gc(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gc(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Jn(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Jn(t.document)}return e}function Gu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Gp=Ye&&"documentMode"in document&&11>=document.documentMode,cl=null,Xu=null,Il=null,Qu=!1;function Qc(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qu||cl==null||cl!==Jn(l)||(l=cl,"selectionStart"in l&&Gu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Il&&Fl(Il,l)||(Il=l,l=Qi(Xu,"onSelect"),0<l.length&&(e=new Pn("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=cl)))}function _a(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var sl={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},Zu={},Zc={};Ye&&(Zc=document.createElement("div").style,"AnimationEvent"in window||(delete sl.animationend.animation,delete sl.animationiteration.animation,delete sl.animationstart.animation),"TransitionEvent"in window||delete sl.transitionend.transition);function Ua(t){if(Zu[t])return Zu[t];if(!sl[t])return t;var e=sl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Zc)return Zu[t]=e[a];return t}var Vc=Ua("animationend"),kc=Ua("animationiteration"),Kc=Ua("animationstart"),Xp=Ua("transitionrun"),Qp=Ua("transitionstart"),Zp=Ua("transitioncancel"),Jc=Ua("transitionend"),Wc=new Map,Vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vu.push("scrollEnd");function Ne(t,e){Wc.set(t,e),Ma(e,[t])}var ai=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xe=[],fl=0,ku=0;function li(){for(var t=fl,e=ku=fl=0;e<t;){var a=xe[e];xe[e++]=null;var l=xe[e];xe[e++]=null;var n=xe[e];xe[e++]=null;var i=xe[e];if(xe[e++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}i!==0&&$c(a,n,i)}}function ni(t,e,a,l){xe[fl++]=t,xe[fl++]=e,xe[fl++]=a,xe[fl++]=l,ku|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ku(t,e,a,l){return ni(t,e,a,l),ii(t)}function Ha(t,e){return ni(t,null,null,e),ii(t)}function $c(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-ie(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function ii(t){if(50<Sn)throw Sn=0,lr=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ml={};function Vp(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oe(t,e,a,l){return new Vp(t,e,a,l)}function Ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Le(t,e){var a=t.alternate;return a===null?(a=oe(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fc(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ui(t,e,a,l,n,i){var o=0;if(l=t,typeof t=="function")Ju(t)&&(o=1);else if(typeof t=="string")o=$0(t,a,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Lt:return t=oe(31,a,e,n),t.elementType=Lt,t.lanes=i,t;case K:return Ba(a.children,n,i,e);case Q:o=8,n|=24;break;case Z:return t=oe(12,a,e,n|2),t.elementType=Z,t.lanes=i,t;case bt:return t=oe(13,a,e,n),t.elementType=bt,t.lanes=i,t;case Tt:return t=oe(19,a,e,n),t.elementType=Tt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $:o=10;break t;case V:o=9;break t;case jt:o=11;break t;case I:o=14;break t;case Ot:o=16,l=null;break t}o=29,a=Error(r(130,t===null?"null":typeof t,"")),l=null}return e=oe(o,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function Ba(t,e,a,l){return t=oe(7,t,l,e),t.lanes=a,t}function Wu(t,e,a){return t=oe(6,t,null,e),t.lanes=a,t}function Ic(t){var e=oe(18,null,null,0);return e.stateNode=t,e}function $u(t,e,a){return e=oe(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Pc=new WeakMap;function ve(t,e){if(typeof t=="object"&&t!==null){var a=Pc.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Ir(e)},Pc.set(t,e),e)}return{value:t,source:e,stack:Ir(e)}}var dl=[],pl=0,oi=null,Pl=0,ye=[],be=0,oa=null,Me=1,De="";function Ge(t,e){dl[pl++]=Pl,dl[pl++]=oi,oi=t,Pl=e}function ts(t,e,a){ye[be++]=Me,ye[be++]=De,ye[be++]=oa,oa=t;var l=Me;t=De;var n=32-ie(l)-1;l&=~(1<<n),a+=1;var i=32-ie(e)+n;if(30<i){var o=n-n%5;i=(l&(1<<o)-1).toString(32),l>>=o,n-=o,Me=1<<32-ie(e)+n|a<<n|l,De=i+t}else Me=1<<i|a<<n|l,De=t}function Fu(t){t.return!==null&&(Ge(t,1),ts(t,1,0))}function Iu(t){for(;t===oi;)oi=dl[--pl],dl[pl]=null,Pl=dl[--pl],dl[pl]=null;for(;t===oa;)oa=ye[--be],ye[be]=null,De=ye[--be],ye[be]=null,Me=ye[--be],ye[be]=null}function es(t,e){ye[be++]=Me,ye[be++]=De,ye[be++]=oa,Me=e.id,De=e.overflow,oa=t}var Xt=null,St=null,ot=!1,ra=null,Se=!1,Pu=Error(r(519));function ca(t){var e=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tn(ve(e,t)),Pu}function as(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[Gt]=t,e[$t]=l,a){case"dialog":nt("cancel",e),nt("close",e);break;case"iframe":case"object":case"embed":nt("load",e);break;case"video":case"audio":for(a=0;a<En.length;a++)nt(En[a],e);break;case"source":nt("error",e);break;case"img":case"image":case"link":nt("error",e),nt("load",e);break;case"details":nt("toggle",e);break;case"input":nt("invalid",e),hc(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":nt("invalid",e);break;case"textarea":nt("invalid",e),xc(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||bm(e.textContent,a)?(l.popover!=null&&(nt("beforetoggle",e),nt("toggle",e)),l.onScroll!=null&&nt("scroll",e),l.onScrollEnd!=null&&nt("scrollend",e),l.onClick!=null&&(e.onclick=qe),e=!0):e=!1,e||ca(t,!0)}function ls(t){for(Xt=t.return;Xt;)switch(Xt.tag){case 5:case 31:case 13:Se=!1;return;case 27:case 3:Se=!0;return;default:Xt=Xt.return}}function hl(t){if(t!==Xt)return!1;if(!ot)return ls(t),ot=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vr(t.type,t.memoizedProps)),a=!a),a&&St&&ca(t),ls(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));St=Om(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));St=Om(t)}else e===27?(e=St,Ea(t.type)?(t=Er,Er=null,St=t):St=e):St=Xt?Ee(t.stateNode.nextSibling):null;return!0}function qa(){St=Xt=null,ot=!1}function to(){var t=ra;return t!==null&&(ee===null?ee=t:ee.push.apply(ee,t),ra=null),t}function tn(t){ra===null?ra=[t]:ra.push(t)}var eo=b(null),Ya=null,Xe=null;function sa(t,e,a){B(eo,e._currentValue),e._currentValue=a}function Qe(t){t._currentValue=eo.current,_(eo)}function ao(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function lo(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;t:for(;i!==null;){var m=i;i=n;for(var g=0;g<e.length;g++)if(m.context===e[g]){i.lanes|=a,m=i.alternate,m!==null&&(m.lanes|=a),ao(i.return,a,t),l||(o=null);break t}i=m.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(r(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),ao(o,a,t),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===t){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function gl(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(r(387));if(o=o.memoizedProps,o!==null){var m=n.type;ue(n.pendingProps.value,o.value)||(t!==null?t.push(m):t=[m])}}else if(n===ft.current){if(o=n.alternate,o===null)throw Error(r(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Nn):t=[Nn])}n=n.return}t!==null&&lo(e,t,a,l),e.flags|=262144}function ri(t){for(t=t.firstContext;t!==null;){if(!ue(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function La(t){Ya=t,Xe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Qt(t){return ns(Ya,t)}function ci(t,e){return Ya===null&&La(t),ns(t,e)}function ns(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Xe===null){if(t===null)throw Error(r(308));Xe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Xe=Xe.next=e;return a}var kp=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Kp=u.unstable_scheduleCallback,Jp=u.unstable_NormalPriority,Dt={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function no(){return{controller:new kp,data:new Map,refCount:0}}function en(t){t.refCount--,t.refCount===0&&Kp(Jp,function(){t.controller.abort()})}var an=null,io=0,xl=0,vl=null;function Wp(t,e){if(an===null){var a=an=[];io=0,xl=cr(),vl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return io++,e.then(is,is),e}function is(){if(--io===0&&an!==null){vl!==null&&(vl.status="fulfilled");var t=an;an=null,xl=0,vl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function $p(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var us=R.S;R.S=function(t,e){Zf=le(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Wp(t,e),us!==null&&us(t,e)};var Ga=b(null);function uo(){var t=Ga.current;return t!==null?t:yt.pooledCache}function si(t,e){e===null?B(Ga,Ga.current):B(Ga,e.pool)}function os(){var t=uo();return t===null?null:{parent:Dt._currentValue,pool:t}}var yl=Error(r(460)),oo=Error(r(474)),fi=Error(r(542)),mi={then:function(){}};function rs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function cs(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(qe,qe),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,fs(t),t;default:if(typeof e.status=="string")e.then(qe,qe);else{if(t=yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,fs(t),t}throw Qa=e,yl}}function Xa(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qa=a,yl):a}}var Qa=null;function ss(){if(Qa===null)throw Error(r(459));var t=Qa;return Qa=null,t}function fs(t){if(t===yl||t===fi)throw Error(r(483))}var bl=null,ln=0;function di(t){var e=ln;return ln+=1,bl===null&&(bl=[]),cs(bl,t,e)}function nn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function pi(t,e){throw e.$$typeof===U?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function ms(t){function e(S,y){if(t){var E=S.deletions;E===null?(S.deletions=[y],S.flags|=16):E.push(y)}}function a(S,y){if(!t)return null;for(;y!==null;)e(S,y),y=y.sibling;return null}function l(S){for(var y=new Map;S!==null;)S.key!==null?y.set(S.key,S):y.set(S.index,S),S=S.sibling;return y}function n(S,y){return S=Le(S,y),S.index=0,S.sibling=null,S}function i(S,y,E){return S.index=E,t?(E=S.alternate,E!==null?(E=E.index,E<y?(S.flags|=67108866,y):E):(S.flags|=67108866,y)):(S.flags|=1048576,y)}function o(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function m(S,y,E,M){return y===null||y.tag!==6?(y=Wu(E,S.mode,M),y.return=S,y):(y=n(y,E),y.return=S,y)}function g(S,y,E,M){var k=E.type;return k===K?C(S,y,E.props.children,M,E.key):y!==null&&(y.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ot&&Xa(k)===y.type)?(y=n(y,E.props),nn(y,E),y.return=S,y):(y=ui(E.type,E.key,E.props,null,S.mode,M),nn(y,E),y.return=S,y)}function j(S,y,E,M){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=$u(E,S.mode,M),y.return=S,y):(y=n(y,E.children||[]),y.return=S,y)}function C(S,y,E,M,k){return y===null||y.tag!==7?(y=Ba(E,S.mode,M,k),y.return=S,y):(y=n(y,E),y.return=S,y)}function D(S,y,E){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Wu(""+y,S.mode,E),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case X:return E=ui(y.type,y.key,y.props,null,S.mode,E),nn(E,y),E.return=S,E;case L:return y=$u(y,S.mode,E),y.return=S,y;case Ot:return y=Xa(y),D(S,y,E)}if(Ae(y)||Wt(y))return y=Ba(y,S.mode,E,null),y.return=S,y;if(typeof y.then=="function")return D(S,di(y),E);if(y.$$typeof===$)return D(S,ci(S,y),E);pi(S,y)}return null}function w(S,y,E,M){var k=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return k!==null?null:m(S,y,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case X:return E.key===k?g(S,y,E,M):null;case L:return E.key===k?j(S,y,E,M):null;case Ot:return E=Xa(E),w(S,y,E,M)}if(Ae(E)||Wt(E))return k!==null?null:C(S,y,E,M,null);if(typeof E.then=="function")return w(S,y,di(E),M);if(E.$$typeof===$)return w(S,y,ci(S,E),M);pi(S,E)}return null}function O(S,y,E,M,k){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return S=S.get(E)||null,m(y,S,""+M,k);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case X:return S=S.get(M.key===null?E:M.key)||null,g(y,S,M,k);case L:return S=S.get(M.key===null?E:M.key)||null,j(y,S,M,k);case Ot:return M=Xa(M),O(S,y,E,M,k)}if(Ae(M)||Wt(M))return S=S.get(E)||null,C(y,S,M,k,null);if(typeof M.then=="function")return O(S,y,E,di(M),k);if(M.$$typeof===$)return O(S,y,E,ci(y,M),k);pi(y,M)}return null}function q(S,y,E,M){for(var k=null,rt=null,G=y,et=y=0,ut=null;G!==null&&et<E.length;et++){G.index>et?(ut=G,G=null):ut=G.sibling;var ct=w(S,G,E[et],M);if(ct===null){G===null&&(G=ut);break}t&&G&&ct.alternate===null&&e(S,G),y=i(ct,y,et),rt===null?k=ct:rt.sibling=ct,rt=ct,G=ut}if(et===E.length)return a(S,G),ot&&Ge(S,et),k;if(G===null){for(;et<E.length;et++)G=D(S,E[et],M),G!==null&&(y=i(G,y,et),rt===null?k=G:rt.sibling=G,rt=G);return ot&&Ge(S,et),k}for(G=l(G);et<E.length;et++)ut=O(G,S,et,E[et],M),ut!==null&&(t&&ut.alternate!==null&&G.delete(ut.key===null?et:ut.key),y=i(ut,y,et),rt===null?k=ut:rt.sibling=ut,rt=ut);return t&&G.forEach(function(Na){return e(S,Na)}),ot&&Ge(S,et),k}function J(S,y,E,M){if(E==null)throw Error(r(151));for(var k=null,rt=null,G=y,et=y=0,ut=null,ct=E.next();G!==null&&!ct.done;et++,ct=E.next()){G.index>et?(ut=G,G=null):ut=G.sibling;var Na=w(S,G,ct.value,M);if(Na===null){G===null&&(G=ut);break}t&&G&&Na.alternate===null&&e(S,G),y=i(Na,y,et),rt===null?k=Na:rt.sibling=Na,rt=Na,G=ut}if(ct.done)return a(S,G),ot&&Ge(S,et),k;if(G===null){for(;!ct.done;et++,ct=E.next())ct=D(S,ct.value,M),ct!==null&&(y=i(ct,y,et),rt===null?k=ct:rt.sibling=ct,rt=ct);return ot&&Ge(S,et),k}for(G=l(G);!ct.done;et++,ct=E.next())ct=O(G,S,et,ct.value,M),ct!==null&&(t&&ct.alternate!==null&&G.delete(ct.key===null?et:ct.key),y=i(ct,y,et),rt===null?k=ct:rt.sibling=ct,rt=ct);return t&&G.forEach(function(oh){return e(S,oh)}),ot&&Ge(S,et),k}function xt(S,y,E,M){if(typeof E=="object"&&E!==null&&E.type===K&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case X:t:{for(var k=E.key;y!==null;){if(y.key===k){if(k=E.type,k===K){if(y.tag===7){a(S,y.sibling),M=n(y,E.props.children),M.return=S,S=M;break t}}else if(y.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ot&&Xa(k)===y.type){a(S,y.sibling),M=n(y,E.props),nn(M,E),M.return=S,S=M;break t}a(S,y);break}else e(S,y);y=y.sibling}E.type===K?(M=Ba(E.props.children,S.mode,M,E.key),M.return=S,S=M):(M=ui(E.type,E.key,E.props,null,S.mode,M),nn(M,E),M.return=S,S=M)}return o(S);case L:t:{for(k=E.key;y!==null;){if(y.key===k)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){a(S,y.sibling),M=n(y,E.children||[]),M.return=S,S=M;break t}else{a(S,y);break}else e(S,y);y=y.sibling}M=$u(E,S.mode,M),M.return=S,S=M}return o(S);case Ot:return E=Xa(E),xt(S,y,E,M)}if(Ae(E))return q(S,y,E,M);if(Wt(E)){if(k=Wt(E),typeof k!="function")throw Error(r(150));return E=k.call(E),J(S,y,E,M)}if(typeof E.then=="function")return xt(S,y,di(E),M);if(E.$$typeof===$)return xt(S,y,ci(S,E),M);pi(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,y!==null&&y.tag===6?(a(S,y.sibling),M=n(y,E),M.return=S,S=M):(a(S,y),M=Wu(E,S.mode,M),M.return=S,S=M),o(S)):a(S,y)}return function(S,y,E,M){try{ln=0;var k=xt(S,y,E,M);return bl=null,k}catch(G){if(G===yl||G===fi)throw G;var rt=oe(29,G,null,S.mode);return rt.lanes=M,rt.return=S,rt}}}var Za=ms(!0),ds=ms(!1),fa=!1;function ro(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function co(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(st&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=ii(t),$c(t,null,a),e}return ni(t,l,e,a),ii(t)}function un(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,nc(t,a)}}function so(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var fo=!1;function on(){if(fo){var t=vl;if(t!==null)throw t}}function rn(t,e,a,l){fo=!1;var n=t.updateQueue;fa=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,m=n.shared.pending;if(m!==null){n.shared.pending=null;var g=m,j=g.next;g.next=null,o===null?i=j:o.next=j,o=g;var C=t.alternate;C!==null&&(C=C.updateQueue,m=C.lastBaseUpdate,m!==o&&(m===null?C.firstBaseUpdate=j:m.next=j,C.lastBaseUpdate=g))}if(i!==null){var D=n.baseState;o=0,C=j=g=null,m=i;do{var w=m.lane&-536870913,O=w!==m.lane;if(O?(it&w)===w:(l&w)===w){w!==0&&w===xl&&(fo=!0),C!==null&&(C=C.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});t:{var q=t,J=m;w=e;var xt=a;switch(J.tag){case 1:if(q=J.payload,typeof q=="function"){D=q.call(xt,D,w);break t}D=q;break t;case 3:q.flags=q.flags&-65537|128;case 0:if(q=J.payload,w=typeof q=="function"?q.call(xt,D,w):q,w==null)break t;D=T({},D,w);break t;case 2:fa=!0}}w=m.callback,w!==null&&(t.flags|=64,O&&(t.flags|=8192),O=n.callbacks,O===null?n.callbacks=[w]:O.push(w))}else O={lane:w,tag:m.tag,payload:m.payload,callback:m.callback,next:null},C===null?(j=C=O,g=D):C=C.next=O,o|=w;if(m=m.next,m===null){if(m=n.shared.pending,m===null)break;O=m,m=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);C===null&&(g=D),n.baseState=g,n.firstBaseUpdate=j,n.lastBaseUpdate=C,i===null&&(n.shared.lanes=0),va|=o,t.lanes=o,t.memoizedState=D}}function ps(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function hs(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ps(a[t],e)}var Sl=b(null),hi=b(0);function gs(t,e){t=Ie,B(hi,t),B(Sl,e),Ie=t|e.baseLanes}function mo(){B(hi,Ie),B(Sl,Sl.current)}function po(){Ie=hi.current,_(Sl),_(hi)}var re=b(null),ze=null;function pa(t){var e=t.alternate;B(Rt,Rt.current&1),B(re,t),ze===null&&(e===null||Sl.current!==null||e.memoizedState!==null)&&(ze=t)}function ho(t){B(Rt,Rt.current),B(re,t),ze===null&&(ze=t)}function xs(t){t.tag===22?(B(Rt,Rt.current),B(re,t),ze===null&&(ze=t)):ha()}function ha(){B(Rt,Rt.current),B(re,re.current)}function ce(t){_(re),ze===t&&(ze=null),_(Rt)}var Rt=b(0);function gi(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Sr(a)||zr(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ze=0,tt=null,ht=null,_t=null,xi=!1,zl=!1,Va=!1,vi=0,cn=0,El=null,Fp=0;function At(){throw Error(r(321))}function go(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ue(t[a],e[a]))return!1;return!0}function xo(t,e,a,l,n,i){return Ze=i,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,R.H=t===null||t.memoizedState===null?tf:Mo,Va=!1,i=a(l,n),Va=!1,zl&&(i=ys(e,a,l,n)),vs(t),i}function vs(t){R.H=mn;var e=ht!==null&&ht.next!==null;if(Ze=0,_t=ht=tt=null,xi=!1,cn=0,El=null,e)throw Error(r(300));t===null||Ut||(t=t.dependencies,t!==null&&ri(t)&&(Ut=!0))}function ys(t,e,a,l){tt=t;var n=0;do{if(zl&&(El=null),cn=0,zl=!1,25<=n)throw Error(r(301));if(n+=1,_t=ht=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=ef,i=e(a,l)}while(zl);return i}function Ip(){var t=R.H,e=t.useState()[0];return e=typeof e.then=="function"?sn(e):e,t=t.useState()[0],(ht!==null?ht.memoizedState:null)!==t&&(tt.flags|=1024),e}function vo(){var t=vi!==0;return vi=0,t}function yo(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function bo(t){if(xi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}xi=!1}Ze=0,_t=ht=tt=null,zl=!1,cn=vi=0,El=null}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?tt.memoizedState=_t=t:_t=_t.next=t,_t}function Mt(){if(ht===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=ht.next;var e=_t===null?tt.memoizedState:_t.next;if(e!==null)_t=e,ht=t;else{if(t===null)throw tt.alternate===null?Error(r(467)):Error(r(310));ht=t,t={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},_t===null?tt.memoizedState=_t=t:_t=_t.next=t}return _t}function yi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sn(t){var e=cn;return cn+=1,El===null&&(El=[]),t=cs(El,t,e),e=tt,(_t===null?e.memoizedState:_t.next)===null&&(e=e.alternate,R.H=e===null||e.memoizedState===null?tf:Mo),t}function bi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return sn(t);if(t.$$typeof===$)return Qt(t)}throw Error(r(438,String(t)))}function So(t){var e=null,a=tt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=tt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=yi(),tt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=pe;return e.index++,a}function Ve(t,e){return typeof e=="function"?e(t):e}function Si(t){var e=Mt();return zo(e,ht,t)}function zo(t,e,a){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var m=o=null,g=null,j=e,C=!1;do{var D=j.lane&-536870913;if(D!==j.lane?(it&D)===D:(Ze&D)===D){var w=j.revertLane;if(w===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),D===xl&&(C=!0);else if((Ze&w)===w){j=j.next,w===xl&&(C=!0);continue}else D={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},g===null?(m=g=D,o=i):g=g.next=D,tt.lanes|=w,va|=w;D=j.action,Va&&a(i,D),i=j.hasEagerState?j.eagerState:a(i,D)}else w={lane:D,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},g===null?(m=g=w,o=i):g=g.next=w,tt.lanes|=D,va|=D;j=j.next}while(j!==null&&j!==e);if(g===null?o=i:g.next=m,!ue(i,t.memoizedState)&&(Ut=!0,C&&(a=vl,a!==null)))throw a;t.memoizedState=i,t.baseState=o,t.baseQueue=g,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Eo(t){var e=Mt(),a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do i=t(i,o.action),o=o.next;while(o!==n);ue(i,e.memoizedState)||(Ut=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function bs(t,e,a){var l=tt,n=Mt(),i=ot;if(i){if(a===void 0)throw Error(r(407));a=a()}else a=e();var o=!ue((ht||n).memoizedState,a);if(o&&(n.memoizedState=a,Ut=!0),n=n.queue,To(Es.bind(null,l,n,t),[t]),n.getSnapshot!==e||o||_t!==null&&_t.memoizedState.tag&1){if(l.flags|=2048,jl(9,{destroy:void 0},zs.bind(null,l,n,a,e),null),yt===null)throw Error(r(349));i||(Ze&127)!==0||Ss(l,e,a)}return a}function Ss(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=tt.updateQueue,e===null?(e=yi(),tt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function zs(t,e,a,l){e.value=a,e.getSnapshot=l,js(e)&&ws(t)}function Es(t,e,a){return a(function(){js(e)&&ws(t)})}function js(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ue(t,a)}catch{return!0}}function ws(t){var e=Ha(t,2);e!==null&&ae(e,t,2)}function jo(t){var e=Jt();if(typeof t=="function"){var a=t;if(t=a(),Va){na(!0);try{a()}finally{na(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:t},e}function Ts(t,e,a,l){return t.baseState=a,zo(t,ht,typeof l=="function"?l:Ve)}function Pp(t,e,a,l,n){if(ji(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};R.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,As(e,i)):(i.next=a.next,e.pending=a.next=i)}}function As(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=R.T,o={};R.T=o;try{var m=a(n,l),g=R.S;g!==null&&g(o,m),Ns(t,e,m)}catch(j){wo(t,e,j)}finally{i!==null&&o.types!==null&&(i.types=o.types),R.T=i}}else try{i=a(n,l),Ns(t,e,i)}catch(j){wo(t,e,j)}}function Ns(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Os(t,e,l)},function(l){return wo(t,e,l)}):Os(t,e,a)}function Os(t,e,a){e.status="fulfilled",e.value=a,Cs(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,As(t,a)))}function wo(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,Cs(e),e=e.next;while(e!==l)}t.action=null}function Cs(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Rs(t,e){return e}function Ms(t,e){if(ot){var a=yt.formState;if(a!==null){t:{var l=tt;if(ot){if(St){e:{for(var n=St,i=Se;n.nodeType!==8;){if(!i){n=null;break e}if(n=Ee(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){St=Ee(n.nextSibling),l=n.data==="F!";break t}}ca(l)}l=!1}l&&(e=a[0])}}return a=Jt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:e},a.queue=l,a=Fs.bind(null,tt,l),l.dispatch=a,l=jo(!1),i=Ro.bind(null,tt,!1,l.queue),l=Jt(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=Pp.bind(null,tt,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function Ds(t){var e=Mt();return _s(e,ht,t)}function _s(t,e,a){if(e=zo(t,e,Rs)[0],t=Si(Ve)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=sn(e)}catch(o){throw o===yl?fi:o}else l=e;e=Mt();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(tt.flags|=2048,jl(9,{destroy:void 0},t0.bind(null,n,a),null)),[l,i,t]}function t0(t,e){t.action=e}function Us(t){var e=Mt(),a=ht;if(a!==null)return _s(e,a,t);Mt(),e=e.memoizedState,a=Mt();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function jl(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=tt.updateQueue,e===null&&(e=yi(),tt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function Hs(){return Mt().memoizedState}function zi(t,e,a,l){var n=Jt();tt.flags|=t,n.memoizedState=jl(1|e,{destroy:void 0},a,l===void 0?null:l)}function Ei(t,e,a,l){var n=Mt();l=l===void 0?null:l;var i=n.memoizedState.inst;ht!==null&&l!==null&&go(l,ht.memoizedState.deps)?n.memoizedState=jl(e,i,a,l):(tt.flags|=t,n.memoizedState=jl(1|e,i,a,l))}function Bs(t,e){zi(8390656,8,t,e)}function To(t,e){Ei(2048,8,t,e)}function e0(t){tt.flags|=4;var e=tt.updateQueue;if(e===null)e=yi(),tt.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function qs(t){var e=Mt().memoizedState;return e0({ref:e,nextImpl:t}),function(){if((st&2)!==0)throw Error(r(440));return e.impl.apply(void 0,arguments)}}function Ys(t,e){return Ei(4,2,t,e)}function Ls(t,e){return Ei(4,4,t,e)}function Gs(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xs(t,e,a){a=a!=null?a.concat([t]):null,Ei(4,4,Gs.bind(null,e,t),a)}function Ao(){}function Qs(t,e){var a=Mt();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&go(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function Zs(t,e){var a=Mt();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&go(e,l[1]))return l[0];if(l=t(),Va){na(!0);try{t()}finally{na(!1)}}return a.memoizedState=[l,e],l}function No(t,e,a){return a===void 0||(Ze&1073741824)!==0&&(it&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=kf(),tt.lanes|=t,va|=t,a)}function Vs(t,e,a,l){return ue(a,e)?a:Sl.current!==null?(t=No(t,a,l),ue(t,e)||(Ut=!0),t):(Ze&42)===0||(Ze&1073741824)!==0&&(it&261930)===0?(Ut=!0,t.memoizedState=a):(t=kf(),tt.lanes|=t,va|=t,e)}function ks(t,e,a,l,n){var i=H.p;H.p=i!==0&&8>i?i:8;var o=R.T,m={};R.T=m,Ro(t,!1,e,a);try{var g=n(),j=R.S;if(j!==null&&j(m,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var C=$p(g,l);fn(t,e,C,me(t))}else fn(t,e,l,me(t))}catch(D){fn(t,e,{then:function(){},status:"rejected",reason:D},me())}finally{H.p=i,o!==null&&m.types!==null&&(o.types=m.types),R.T=o}}function a0(){}function Oo(t,e,a,l){if(t.tag!==5)throw Error(r(476));var n=Ks(t).queue;ks(t,n,e,W,a===null?a0:function(){return Js(t),a(l)})}function Ks(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:W},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Js(t){var e=Ks(t);e.next===null&&(e=t.alternate.memoizedState),fn(t,e.next.queue,{},me())}function Co(){return Qt(Nn)}function Ws(){return Mt().memoizedState}function $s(){return Mt().memoizedState}function l0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=me();t=ma(a);var l=da(e,t,a);l!==null&&(ae(l,e,a),un(l,e,a)),e={cache:no()},t.payload=e;return}e=e.return}}function n0(t,e,a){var l=me();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ji(t)?Is(e,a):(a=Ku(t,e,a,l),a!==null&&(ae(a,t,l),Ps(a,e,l)))}function Fs(t,e,a){var l=me();fn(t,e,a,l)}function fn(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ji(t))Is(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,m=i(o,a);if(n.hasEagerState=!0,n.eagerState=m,ue(m,o))return ni(t,e,n,0),yt===null&&li(),!1}catch{}if(a=Ku(t,e,n,l),a!==null)return ae(a,t,l),Ps(a,e,l),!0}return!1}function Ro(t,e,a,l){if(l={lane:2,revertLane:cr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ji(t)){if(e)throw Error(r(479))}else e=Ku(t,a,l,2),e!==null&&ae(e,t,2)}function ji(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function Is(t,e){zl=xi=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Ps(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,nc(t,a)}}var mn={readContext:Qt,use:bi,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useLayoutEffect:At,useInsertionEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useSyncExternalStore:At,useId:At,useHostTransitionStatus:At,useFormState:At,useActionState:At,useOptimistic:At,useMemoCache:At,useCacheRefresh:At};mn.useEffectEvent=At;var tf={readContext:Qt,use:bi,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:Bs,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,zi(4194308,4,Gs.bind(null,e,t),a)},useLayoutEffect:function(t,e){return zi(4194308,4,t,e)},useInsertionEffect:function(t,e){zi(4,2,t,e)},useMemo:function(t,e){var a=Jt();e=e===void 0?null:e;var l=t();if(Va){na(!0);try{t()}finally{na(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=Jt();if(a!==void 0){var n=a(e);if(Va){na(!0);try{a(e)}finally{na(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=n0.bind(null,tt,t),[l.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:function(t){t=jo(t);var e=t.queue,a=Fs.bind(null,tt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Ao,useDeferredValue:function(t,e){var a=Jt();return No(a,t,e)},useTransition:function(){var t=jo(!1);return t=ks.bind(null,tt,t.queue,!0,!1),Jt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=tt,n=Jt();if(ot){if(a===void 0)throw Error(r(407));a=a()}else{if(a=e(),yt===null)throw Error(r(349));(it&127)!==0||Ss(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,Bs(Es.bind(null,l,i,t),[t]),l.flags|=2048,jl(9,{destroy:void 0},zs.bind(null,l,i,a,e),null),a},useId:function(){var t=Jt(),e=yt.identifierPrefix;if(ot){var a=De,l=Me;a=(l&~(1<<32-ie(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=vi++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Fp++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Co,useFormState:Ms,useActionState:Ms,useOptimistic:function(t){var e=Jt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Ro.bind(null,tt,!0,a),a.dispatch=e,[t,e]},useMemoCache:So,useCacheRefresh:function(){return Jt().memoizedState=l0.bind(null,tt)},useEffectEvent:function(t){var e=Jt(),a={impl:t};return e.memoizedState=a,function(){if((st&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Mo={readContext:Qt,use:bi,useCallback:Qs,useContext:Qt,useEffect:To,useImperativeHandle:Xs,useInsertionEffect:Ys,useLayoutEffect:Ls,useMemo:Zs,useReducer:Si,useRef:Hs,useState:function(){return Si(Ve)},useDebugValue:Ao,useDeferredValue:function(t,e){var a=Mt();return Vs(a,ht.memoizedState,t,e)},useTransition:function(){var t=Si(Ve)[0],e=Mt().memoizedState;return[typeof t=="boolean"?t:sn(t),e]},useSyncExternalStore:bs,useId:Ws,useHostTransitionStatus:Co,useFormState:Ds,useActionState:Ds,useOptimistic:function(t,e){var a=Mt();return Ts(a,ht,t,e)},useMemoCache:So,useCacheRefresh:$s};Mo.useEffectEvent=qs;var ef={readContext:Qt,use:bi,useCallback:Qs,useContext:Qt,useEffect:To,useImperativeHandle:Xs,useInsertionEffect:Ys,useLayoutEffect:Ls,useMemo:Zs,useReducer:Eo,useRef:Hs,useState:function(){return Eo(Ve)},useDebugValue:Ao,useDeferredValue:function(t,e){var a=Mt();return ht===null?No(a,t,e):Vs(a,ht.memoizedState,t,e)},useTransition:function(){var t=Eo(Ve)[0],e=Mt().memoizedState;return[typeof t=="boolean"?t:sn(t),e]},useSyncExternalStore:bs,useId:Ws,useHostTransitionStatus:Co,useFormState:Us,useActionState:Us,useOptimistic:function(t,e){var a=Mt();return ht!==null?Ts(a,ht,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:So,useCacheRefresh:$s};ef.useEffectEvent=qs;function Do(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:T({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var _o={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=me(),n=ma(l);n.payload=e,a!=null&&(n.callback=a),e=da(t,n,l),e!==null&&(ae(e,t,l),un(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=me(),n=ma(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=da(t,n,l),e!==null&&(ae(e,t,l),un(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=me(),l=ma(a);l.tag=2,e!=null&&(l.callback=e),e=da(t,l,a),e!==null&&(ae(e,t,a),un(e,t,a))}};function af(t,e,a,l,n,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,o):e.prototype&&e.prototype.isPureReactComponent?!Fl(a,l)||!Fl(n,i):!0}function lf(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&_o.enqueueReplaceState(e,e.state,null)}function ka(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=T({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function nf(t){ai(t)}function uf(t){console.error(t)}function of(t){ai(t)}function wi(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function rf(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Uo(t,e,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){wi(t,e)},a}function cf(t){return t=ma(t),t.tag=3,t}function sf(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){rf(e,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){rf(e,a,l),typeof n!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function i0(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&gl(e,a,n,!0),a=re.current,a!==null){switch(a.tag){case 31:case 13:return ze===null?Bi():a.alternate===null&&Nt===0&&(Nt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===mi?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),ur(t,l,n)),!1;case 22:return a.flags|=65536,l===mi?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),ur(t,l,n)),!1}throw Error(r(435,a.tag))}return ur(t,l,n),Bi(),!1}if(ot)return e=re.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==Pu&&(t=Error(r(422),{cause:l}),tn(ve(t,a)))):(l!==Pu&&(e=Error(r(423),{cause:l}),tn(ve(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=ve(l,a),n=Uo(t.stateNode,l,n),so(t,n),Nt!==4&&(Nt=2)),!1;var i=Error(r(520),{cause:l});if(i=ve(i,a),bn===null?bn=[i]:bn.push(i),Nt!==4&&(Nt=2),e===null)return!0;l=ve(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=Uo(a.stateNode,l,t),so(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ya===null||!ya.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=cf(n),sf(n,t,a,l),so(a,n),!1}a=a.return}while(a!==null);return!1}var Ho=Error(r(461)),Ut=!1;function Zt(t,e,a,l){e.child=t===null?ds(e,null,a,l):Za(e,t.child,a,l)}function ff(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var o={};for(var m in l)m!=="ref"&&(o[m]=l[m])}else o=l;return La(e),l=xo(t,e,a,o,i,n),m=vo(),t!==null&&!Ut?(yo(t,e,n),ke(t,e,n)):(ot&&m&&Fu(e),e.flags|=1,Zt(t,e,l,n),e.child)}function mf(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Ju(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,df(t,e,i,l,n)):(t=ui(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Zo(t,n)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:Fl,a(o,l)&&t.ref===e.ref)return ke(t,e,n)}return e.flags|=1,t=Le(i,l),t.ref=e.ref,t.return=e,e.child=t}function df(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(Fl(i,l)&&t.ref===e.ref)if(Ut=!1,e.pendingProps=l=i,Zo(t,n))(t.flags&131072)!==0&&(Ut=!0);else return e.lanes=t.lanes,ke(t,e,n)}return Bo(t,e,a,l,n)}function pf(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return hf(t,e,i,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&si(e,i!==null?i.cachePool:null),i!==null?gs(e,i):mo(),xs(e);else return l=e.lanes=536870912,hf(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(si(e,i.cachePool),gs(e,i),ha(),e.memoizedState=null):(t!==null&&si(e,null),mo(),ha());return Zt(t,e,n,a),e.child}function dn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function hf(t,e,a,l,n){var i=uo();return i=i===null?null:{parent:Dt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&si(e,null),mo(),xs(e),t!==null&&gl(t,e,l,!0),e.childLanes=n,null}function Ti(t,e){return e=Ni({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function gf(t,e,a){return Za(e,t.child,null,a),t=Ti(e,e.pendingProps),t.flags|=2,ce(e),e.memoizedState=null,t}function u0(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(ot){if(l.mode==="hidden")return t=Ti(e,l),e.lanes=536870912,dn(null,t);if(ho(e),(t=St)?(t=Nm(t,Se),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:oa!==null?{id:Me,overflow:De}:null,retryLane:536870912,hydrationErrors:null},a=Ic(t),a.return=e,e.child=a,Xt=e,St=null)):t=null,t===null)throw ca(e);return e.lanes=536870912,null}return Ti(e,l)}var i=t.memoizedState;if(i!==null){var o=i.dehydrated;if(ho(e),n)if(e.flags&256)e.flags&=-257,e=gf(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(r(558));else if(Ut||gl(t,e,a,!1),n=(a&t.childLanes)!==0,Ut||n){if(l=yt,l!==null&&(o=ic(l,a),o!==0&&o!==i.retryLane))throw i.retryLane=o,Ha(t,o),ae(l,t,o),Ho;Bi(),e=gf(t,e,a)}else t=i.treeContext,St=Ee(o.nextSibling),Xt=e,ot=!0,ra=null,Se=!1,t!==null&&es(e,t),e=Ti(e,l),e.flags|=4096;return e}return t=Le(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ai(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Bo(t,e,a,l,n){return La(e),a=xo(t,e,a,l,void 0,n),l=vo(),t!==null&&!Ut?(yo(t,e,n),ke(t,e,n)):(ot&&l&&Fu(e),e.flags|=1,Zt(t,e,a,n),e.child)}function xf(t,e,a,l,n,i){return La(e),e.updateQueue=null,a=ys(e,l,a,n),vs(t),l=vo(),t!==null&&!Ut?(yo(t,e,i),ke(t,e,i)):(ot&&l&&Fu(e),e.flags|=1,Zt(t,e,a,i),e.child)}function vf(t,e,a,l,n){if(La(e),e.stateNode===null){var i=ml,o=a.contextType;typeof o=="object"&&o!==null&&(i=Qt(o)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=_o,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},ro(e),o=a.contextType,i.context=typeof o=="object"&&o!==null?Qt(o):ml,i.state=e.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Do(e,a,o,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&_o.enqueueReplaceState(i,i.state,null),rn(e,l,i,n),on(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var m=e.memoizedProps,g=ka(a,m);i.props=g;var j=i.context,C=a.contextType;o=ml,typeof C=="object"&&C!==null&&(o=Qt(C));var D=a.getDerivedStateFromProps;C=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",m=e.pendingProps!==m,C||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(m||j!==o)&&lf(e,i,l,o),fa=!1;var w=e.memoizedState;i.state=w,rn(e,l,i,n),on(),j=e.memoizedState,m||w!==j||fa?(typeof D=="function"&&(Do(e,a,D,l),j=e.memoizedState),(g=fa||af(e,a,g,l,w,j,o))?(C||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=j),i.props=l,i.state=j,i.context=o,l=g):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,co(t,e),o=e.memoizedProps,C=ka(a,o),i.props=C,D=e.pendingProps,w=i.context,j=a.contextType,g=ml,typeof j=="object"&&j!==null&&(g=Qt(j)),m=a.getDerivedStateFromProps,(j=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==D||w!==g)&&lf(e,i,l,g),fa=!1,w=e.memoizedState,i.state=w,rn(e,l,i,n),on();var O=e.memoizedState;o!==D||w!==O||fa||t!==null&&t.dependencies!==null&&ri(t.dependencies)?(typeof m=="function"&&(Do(e,a,m,l),O=e.memoizedState),(C=fa||af(e,a,C,l,w,O,g)||t!==null&&t.dependencies!==null&&ri(t.dependencies))?(j||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,O,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,O,g)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=O),i.props=l,i.state=O,i.context=g,l=C):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Ai(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=Za(e,t.child,null,n),e.child=Za(e,null,a,n)):Zt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=ke(t,e,n),t}function yf(t,e,a,l){return qa(),e.flags|=256,Zt(t,e,a,l),e.child}var qo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yo(t){return{baseLanes:t,cachePool:os()}}function Lo(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=fe),t}function bf(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,o;if((o=i)||(o=t!==null&&t.memoizedState===null?!1:(Rt.current&2)!==0),o&&(n=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(ot){if(n?pa(e):ha(),(t=St)?(t=Nm(t,Se),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:oa!==null?{id:Me,overflow:De}:null,retryLane:536870912,hydrationErrors:null},a=Ic(t),a.return=e,e.child=a,Xt=e,St=null)):t=null,t===null)throw ca(e);return zr(t)?e.lanes=32:e.lanes=536870912,null}var m=l.children;return l=l.fallback,n?(ha(),n=e.mode,m=Ni({mode:"hidden",children:m},n),l=Ba(l,n,a,null),m.return=e,l.return=e,m.sibling=l,e.child=m,l=e.child,l.memoizedState=Yo(a),l.childLanes=Lo(t,o,a),e.memoizedState=qo,dn(null,l)):(pa(e),Go(e,m))}var g=t.memoizedState;if(g!==null&&(m=g.dehydrated,m!==null)){if(i)e.flags&256?(pa(e),e.flags&=-257,e=Xo(t,e,a)):e.memoizedState!==null?(ha(),e.child=t.child,e.flags|=128,e=null):(ha(),m=l.fallback,n=e.mode,l=Ni({mode:"visible",children:l.children},n),m=Ba(m,n,a,null),m.flags|=2,l.return=e,m.return=e,l.sibling=m,e.child=l,Za(e,t.child,null,a),l=e.child,l.memoizedState=Yo(a),l.childLanes=Lo(t,o,a),e.memoizedState=qo,e=dn(null,l));else if(pa(e),zr(m)){if(o=m.nextSibling&&m.nextSibling.dataset,o)var j=o.dgst;o=j,l=Error(r(419)),l.stack="",l.digest=o,tn({value:l,source:null,stack:null}),e=Xo(t,e,a)}else if(Ut||gl(t,e,a,!1),o=(a&t.childLanes)!==0,Ut||o){if(o=yt,o!==null&&(l=ic(o,a),l!==0&&l!==g.retryLane))throw g.retryLane=l,Ha(t,l),ae(o,t,l),Ho;Sr(m)||Bi(),e=Xo(t,e,a)}else Sr(m)?(e.flags|=192,e.child=t.child,e=null):(t=g.treeContext,St=Ee(m.nextSibling),Xt=e,ot=!0,ra=null,Se=!1,t!==null&&es(e,t),e=Go(e,l.children),e.flags|=4096);return e}return n?(ha(),m=l.fallback,n=e.mode,g=t.child,j=g.sibling,l=Le(g,{mode:"hidden",children:l.children}),l.subtreeFlags=g.subtreeFlags&65011712,j!==null?m=Le(j,m):(m=Ba(m,n,a,null),m.flags|=2),m.return=e,l.return=e,l.sibling=m,e.child=l,dn(null,l),l=e.child,m=t.child.memoizedState,m===null?m=Yo(a):(n=m.cachePool,n!==null?(g=Dt._currentValue,n=n.parent!==g?{parent:g,pool:g}:n):n=os(),m={baseLanes:m.baseLanes|a,cachePool:n}),l.memoizedState=m,l.childLanes=Lo(t,o,a),e.memoizedState=qo,dn(t.child,l)):(pa(e),a=t.child,t=a.sibling,a=Le(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=a,e.memoizedState=null,a)}function Go(t,e){return e=Ni({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ni(t,e){return t=oe(22,t,null,e),t.lanes=0,t}function Xo(t,e,a){return Za(e,t.child,null,a),t=Go(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Sf(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),ao(t.return,e,a)}function Qo(t,e,a,l,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=i)}function zf(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var o=Rt.current,m=(o&2)!==0;if(m?(o=o&1|2,e.flags|=128):o&=1,B(Rt,o),Zt(t,e,l,a),l=ot?Pl:0,!m&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sf(t,a,e);else if(t.tag===19)Sf(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&gi(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),Qo(e,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&gi(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Qo(e,!0,a,null,i,l);break;case"together":Qo(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function ke(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),va|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(gl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,a=Le(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Le(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Zo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ri(t)))}function o0(t,e,a){switch(e.tag){case 3:Kt(e,e.stateNode.containerInfo),sa(e,Dt,t.memoizedState.cache),qa();break;case 27:case 5:ql(e);break;case 4:Kt(e,e.stateNode.containerInfo);break;case 10:sa(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,ho(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(pa(e),e.flags|=128,null):(a&e.child.childLanes)!==0?bf(t,e,a):(pa(e),t=ke(t,e,a),t!==null?t.sibling:null);pa(e);break;case 19:var n=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(gl(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return zf(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),B(Rt,Rt.current),l)break;return null;case 22:return e.lanes=0,pf(t,e,a,e.pendingProps);case 24:sa(e,Dt,t.memoizedState.cache)}return ke(t,e,a)}function Ef(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ut=!0;else{if(!Zo(t,a)&&(e.flags&128)===0)return Ut=!1,o0(t,e,a);Ut=(t.flags&131072)!==0}else Ut=!1,ot&&(e.flags&1048576)!==0&&ts(e,Pl,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=Xa(e.elementType),e.type=t,typeof t=="function")Ju(t)?(l=ka(t,l),e.tag=1,e=vf(null,e,t,l,a)):(e.tag=0,e=Bo(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===jt){e.tag=11,e=ff(null,e,t,l,a);break t}else if(n===I){e.tag=14,e=mf(null,e,t,l,a);break t}}throw e=He(t)||t,Error(r(306,e,""))}}return e;case 0:return Bo(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=ka(l,e.pendingProps),vf(t,e,l,n,a);case 3:t:{if(Kt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,co(t,e),rn(e,l,null,a);var o=e.memoizedState;if(l=o.cache,sa(e,Dt,l),l!==i.cache&&lo(e,[Dt],a,!0),on(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=yf(t,e,l,a);break t}else if(l!==n){n=ve(Error(r(424)),e),tn(n),e=yf(t,e,l,a);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,St=Ee(t.firstChild),Xt=e,ot=!0,ra=null,Se=!0,a=ds(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qa(),l===n){e=ke(t,e,a);break t}Zt(t,e,l,a)}e=e.child}return e;case 26:return Ai(t,e),t===null?(a=_m(e.type,null,e.pendingProps,null))?e.memoizedState=a:ot||(a=e.type,t=e.pendingProps,l=Zi(at.current).createElement(a),l[Gt]=e,l[$t]=t,Vt(l,a,t),qt(l),e.stateNode=l):e.memoizedState=_m(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ql(e),t===null&&ot&&(l=e.stateNode=Rm(e.type,e.pendingProps,at.current),Xt=e,Se=!0,n=St,Ea(e.type)?(Er=n,St=Ee(l.firstChild)):St=n),Zt(t,e,e.pendingProps.children,a),Ai(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ot&&((n=l=St)&&(l=B0(l,e.type,e.pendingProps,Se),l!==null?(e.stateNode=l,Xt=e,St=Ee(l.firstChild),Se=!1,n=!0):n=!1),n||ca(e)),ql(e),n=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,l=i.children,vr(n,i)?l=null:o!==null&&vr(n,o)&&(e.flags|=32),e.memoizedState!==null&&(n=xo(t,e,Ip,null,null,a),Nn._currentValue=n),Ai(t,e),Zt(t,e,l,a),e.child;case 6:return t===null&&ot&&((t=a=St)&&(a=q0(a,e.pendingProps,Se),a!==null?(e.stateNode=a,Xt=e,St=null,t=!0):t=!1),t||ca(e)),null;case 13:return bf(t,e,a);case 4:return Kt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Za(e,null,l,a):Zt(t,e,l,a),e.child;case 11:return ff(t,e,e.type,e.pendingProps,a);case 7:return Zt(t,e,e.pendingProps,a),e.child;case 8:return Zt(t,e,e.pendingProps.children,a),e.child;case 12:return Zt(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,sa(e,e.type,l.value),Zt(t,e,l.children,a),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,La(e),n=Qt(n),l=l(n),e.flags|=1,Zt(t,e,l,a),e.child;case 14:return mf(t,e,e.type,e.pendingProps,a);case 15:return df(t,e,e.type,e.pendingProps,a);case 19:return zf(t,e,a);case 31:return u0(t,e,a);case 22:return pf(t,e,a,e.pendingProps);case 24:return La(e),l=Qt(Dt),t===null?(n=uo(),n===null&&(n=yt,i=no(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},ro(e),sa(e,Dt,n)):((t.lanes&a)!==0&&(co(t,e),rn(e,null,null,a),on()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),sa(e,Dt,l)):(l=i.cache,sa(e,Dt,l),l!==n.cache&&lo(e,[Dt],a,!0))),Zt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function Ke(t){t.flags|=4}function Vo(t,e,a,l,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if($f())t.flags|=8192;else throw Qa=mi,oo}else t.flags&=-16777217}function jf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ym(e))if($f())t.flags|=8192;else throw Qa=mi,oo}function Oi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ac():536870912,t.lanes|=e,Nl|=e)}function pn(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function r0(t,e,a){var l=e.pendingProps;switch(Iu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return zt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Qe(Dt),Ct(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(hl(e)?Ke(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,to())),zt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Ke(e),i!==null?(zt(e),jf(e,i)):(zt(e),Vo(e,n,null,l,a))):i?i!==t.memoizedState?(Ke(e),zt(e),jf(e,i)):(zt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ke(e),zt(e),Vo(e,n,t,l,a)),null;case 27:if(Ln(e),a=at.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ke(e);else{if(!l){if(e.stateNode===null)throw Error(r(166));return zt(e),null}t=Y.current,hl(e)?as(e):(t=Rm(n,l,a),e.stateNode=t,Ke(e))}return zt(e),null;case 5:if(Ln(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Ke(e);else{if(!l){if(e.stateNode===null)throw Error(r(166));return zt(e),null}if(i=Y.current,hl(e))as(e);else{var o=Zi(at.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}i[Gt]=e,i[$t]=l;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=i;t:switch(Vt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ke(e)}}return zt(e),Vo(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Ke(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(r(166));if(t=at.current,hl(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=Xt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[Gt]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||bm(t.nodeValue,a)),t||ca(e,!0)}else t=Zi(t).createTextNode(l),t[Gt]=e,e.stateNode=t}return zt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=hl(e),a!==null){if(t===null){if(!l)throw Error(r(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Gt]=e}else qa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;zt(e),t=!1}else a=to(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(ce(e),e):(ce(e),null);if((e.flags&128)!==0)throw Error(r(558))}return zt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=hl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(r(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[Gt]=e}else qa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;zt(e),n=!1}else n=to(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ce(e),e):(ce(e),null)}return ce(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Oi(e,e.updateQueue),zt(e),null);case 4:return Ct(),t===null&&dr(e.stateNode.containerInfo),zt(e),null;case 10:return Qe(e.type),zt(e),null;case 19:if(_(Rt),l=e.memoizedState,l===null)return zt(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)pn(l,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=gi(t),i!==null){for(e.flags|=128,pn(l,!1),t=i.updateQueue,e.updateQueue=t,Oi(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Fc(a,t),a=a.sibling;return B(Rt,Rt.current&1|2),ot&&Ge(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&le()>_i&&(e.flags|=128,n=!0,pn(l,!1),e.lanes=4194304)}else{if(!n)if(t=gi(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Oi(e,t),pn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ot)return zt(e),null}else 2*le()-l.renderingStartTime>_i&&a!==536870912&&(e.flags|=128,n=!0,pn(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=le(),t.sibling=null,a=Rt.current,B(Rt,n?a&1|2:a&1),ot&&Ge(e,l.treeForkCount),t):(zt(e),null);case 22:case 23:return ce(e),po(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),a=e.updateQueue,a!==null&&Oi(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&_(Ga),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Qe(Dt),zt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function c0(t,e){switch(Iu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qe(Dt),Ct(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ln(e),null;case 31:if(e.memoizedState!==null){if(ce(e),e.alternate===null)throw Error(r(340));qa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ce(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));qa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _(Rt),null;case 4:return Ct(),null;case 10:return Qe(e.type),null;case 22:case 23:return ce(e),po(),t!==null&&_(Ga),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Qe(Dt),null;case 25:return null;default:return null}}function wf(t,e){switch(Iu(e),e.tag){case 3:Qe(Dt),Ct();break;case 26:case 27:case 5:Ln(e);break;case 4:Ct();break;case 31:e.memoizedState!==null&&ce(e);break;case 13:ce(e);break;case 19:_(Rt);break;case 10:Qe(e.type);break;case 22:case 23:ce(e),po(),t!==null&&_(Ga);break;case 24:Qe(Dt)}}function hn(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,o=a.inst;l=i(),o.destroy=l}a=a.next}while(a!==n)}}catch(m){dt(e,e.return,m)}}function ga(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var o=l.inst,m=o.destroy;if(m!==void 0){o.destroy=void 0,n=e;var g=a,j=m;try{j()}catch(C){dt(n,g,C)}}}l=l.next}while(l!==i)}}catch(C){dt(e,e.return,C)}}function Tf(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{hs(e,a)}catch(l){dt(t,t.return,l)}}}function Af(t,e,a){a.props=ka(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){dt(t,e,l)}}function gn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){dt(t,e,n)}}function _e(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){dt(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){dt(t,e,n)}else a.current=null}function Nf(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){dt(t,t.return,n)}}function ko(t,e,a){try{var l=t.stateNode;R0(l,t.type,a,e),l[$t]=e}catch(n){dt(t,t.return,n)}}function Of(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ea(t.type)||t.tag===4}function Ko(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Of(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ea(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jo(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=qe));else if(l!==4&&(l===27&&Ea(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Jo(t,e,a),t=t.sibling;t!==null;)Jo(t,e,a),t=t.sibling}function Ci(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&Ea(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ci(t,e,a),t=t.sibling;t!==null;)Ci(t,e,a),t=t.sibling}function Cf(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vt(e,l,a),e[Gt]=t,e[$t]=a}catch(i){dt(t,t.return,i)}}var Je=!1,Ht=!1,Wo=!1,Rf=typeof WeakSet=="function"?WeakSet:Set,Yt=null;function s0(t,e){if(t=t.containerInfo,gr=Fi,t=Xc(t),Gu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var o=0,m=-1,g=-1,j=0,C=0,D=t,w=null;e:for(;;){for(var O;D!==a||n!==0&&D.nodeType!==3||(m=o+n),D!==i||l!==0&&D.nodeType!==3||(g=o+l),D.nodeType===3&&(o+=D.nodeValue.length),(O=D.firstChild)!==null;)w=D,D=O;for(;;){if(D===t)break e;if(w===a&&++j===n&&(m=o),w===i&&++C===l&&(g=o),(O=D.nextSibling)!==null)break;D=w,w=D.parentNode}D=O}a=m===-1||g===-1?null:{start:m,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(xr={focusedElem:t,selectionRange:a},Fi=!1,Yt=e;Yt!==null;)if(e=Yt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Yt=t;else for(;Yt!==null;){switch(e=Yt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=e,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var q=ka(a.type,n);t=l.getSnapshotBeforeUpdate(q,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(J){dt(a,a.return,J)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)br(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":br(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,Yt=t;break}Yt=e.return}}function Mf(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:$e(t,a),l&4&&hn(5,a);break;case 1:if($e(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(o){dt(a,a.return,o)}else{var n=ka(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){dt(a,a.return,o)}}l&64&&Tf(a),l&512&&gn(a,a.return);break;case 3:if($e(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{hs(t,e)}catch(o){dt(a,a.return,o)}}break;case 27:e===null&&l&4&&Cf(a);case 26:case 5:$e(t,a),e===null&&l&4&&Nf(a),l&512&&gn(a,a.return);break;case 12:$e(t,a);break;case 31:$e(t,a),l&4&&Uf(t,a);break;case 13:$e(t,a),l&4&&Hf(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=y0.bind(null,a),Y0(t,a))));break;case 22:if(l=a.memoizedState!==null||Je,!l){e=e!==null&&e.memoizedState!==null||Ht,n=Je;var i=Ht;Je=l,(Ht=e)&&!i?Fe(t,a,(a.subtreeFlags&8772)!==0):$e(t,a),Je=n,Ht=i}break;case 30:break;default:$e(t,a)}}function Df(t){var e=t.alternate;e!==null&&(t.alternate=null,Df(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ju(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Et=null,It=!1;function We(t,e,a){for(a=a.child;a!==null;)_f(t,e,a),a=a.sibling}function _f(t,e,a){if(ne&&typeof ne.onCommitFiberUnmount=="function")try{ne.onCommitFiberUnmount(Yl,a)}catch{}switch(a.tag){case 26:Ht||_e(a,e),We(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ht||_e(a,e);var l=Et,n=It;Ea(a.type)&&(Et=a.stateNode,It=!1),We(t,e,a),wn(a.stateNode),Et=l,It=n;break;case 5:Ht||_e(a,e);case 6:if(l=Et,n=It,Et=null,We(t,e,a),Et=l,It=n,Et!==null)if(It)try{(Et.nodeType===9?Et.body:Et.nodeName==="HTML"?Et.ownerDocument.body:Et).removeChild(a.stateNode)}catch(i){dt(a,e,i)}else try{Et.removeChild(a.stateNode)}catch(i){dt(a,e,i)}break;case 18:Et!==null&&(It?(t=Et,Tm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Hl(t)):Tm(Et,a.stateNode));break;case 4:l=Et,n=It,Et=a.stateNode.containerInfo,It=!0,We(t,e,a),Et=l,It=n;break;case 0:case 11:case 14:case 15:ga(2,a,e),Ht||ga(4,a,e),We(t,e,a);break;case 1:Ht||(_e(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Af(a,e,l)),We(t,e,a);break;case 21:We(t,e,a);break;case 22:Ht=(l=Ht)||a.memoizedState!==null,We(t,e,a),Ht=l;break;default:We(t,e,a)}}function Uf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Hl(t)}catch(a){dt(e,e.return,a)}}}function Hf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Hl(t)}catch(a){dt(e,e.return,a)}}function f0(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Rf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Rf),e;default:throw Error(r(435,t.tag))}}function Ri(t,e){var a=f0(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var n=b0.bind(null,t,l);l.then(n,n)}})}function Pt(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,o=e,m=o;t:for(;m!==null;){switch(m.tag){case 27:if(Ea(m.type)){Et=m.stateNode,It=!1;break t}break;case 5:Et=m.stateNode,It=!1;break t;case 3:case 4:Et=m.stateNode.containerInfo,It=!0;break t}m=m.return}if(Et===null)throw Error(r(160));_f(i,o,n),Et=null,It=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Bf(e,t),e=e.sibling}var Oe=null;function Bf(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Pt(e,t),te(t),l&4&&(ga(3,t,t.return),hn(3,t),ga(5,t,t.return));break;case 1:Pt(e,t),te(t),l&512&&(Ht||a===null||_e(a,a.return)),l&64&&Je&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Oe;if(Pt(e,t),te(t),l&512&&(Ht||a===null||_e(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Xl]||i[Gt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Vt(i,l,a),i[Gt]=t,qt(i),l=i;break t;case"link":var o=Bm("link","href",n).get(l+(a.href||""));if(o){for(var m=0;m<o.length;m++)if(i=o[m],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(m,1);break e}}i=n.createElement(l),Vt(i,l,a),n.head.appendChild(i);break;case"meta":if(o=Bm("meta","content",n).get(l+(a.content||""))){for(m=0;m<o.length;m++)if(i=o[m],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(m,1);break e}}i=n.createElement(l),Vt(i,l,a),n.head.appendChild(i);break;default:throw Error(r(468,l))}i[Gt]=t,qt(i),l=i}t.stateNode=l}else qm(n,t.type,t.stateNode);else t.stateNode=Hm(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?qm(n,t.type,t.stateNode):Hm(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&ko(t,t.memoizedProps,a.memoizedProps)}break;case 27:Pt(e,t),te(t),l&512&&(Ht||a===null||_e(a,a.return)),a!==null&&l&4&&ko(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Pt(e,t),te(t),l&512&&(Ht||a===null||_e(a,a.return)),t.flags&32){n=t.stateNode;try{il(n,"")}catch(q){dt(t,t.return,q)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,ko(t,n,a!==null?a.memoizedProps:n)),l&1024&&(Wo=!0);break;case 6:if(Pt(e,t),te(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(q){dt(t,t.return,q)}}break;case 3:if(Ki=null,n=Oe,Oe=Vi(e.containerInfo),Pt(e,t),Oe=n,te(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Hl(e.containerInfo)}catch(q){dt(t,t.return,q)}Wo&&(Wo=!1,qf(t));break;case 4:l=Oe,Oe=Vi(t.stateNode.containerInfo),Pt(e,t),te(t),Oe=l;break;case 12:Pt(e,t),te(t);break;case 31:Pt(e,t),te(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ri(t,l)));break;case 13:Pt(e,t),te(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Di=le()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ri(t,l)));break;case 22:n=t.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,j=Je,C=Ht;if(Je=j||n,Ht=C||g,Pt(e,t),Ht=C,Je=j,te(t),l&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||g||Je||Ht||Ka(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){g=a=e;try{if(i=g.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{m=g.stateNode;var D=g.memoizedProps.style,w=D!=null&&D.hasOwnProperty("display")?D.display:null;m.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(q){dt(g,g.return,q)}}}else if(e.tag===6){if(a===null){g=e;try{g.stateNode.nodeValue=n?"":g.memoizedProps}catch(q){dt(g,g.return,q)}}}else if(e.tag===18){if(a===null){g=e;try{var O=g.stateNode;n?Am(O,!0):Am(g.stateNode,!1)}catch(q){dt(g,g.return,q)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ri(t,a))));break;case 19:Pt(e,t),te(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ri(t,l)));break;case 30:break;case 21:break;default:Pt(e,t),te(t)}}function te(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Of(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var n=a.stateNode,i=Ko(t);Ci(t,i,n);break;case 5:var o=a.stateNode;a.flags&32&&(il(o,""),a.flags&=-33);var m=Ko(t);Ci(t,m,o);break;case 3:case 4:var g=a.stateNode.containerInfo,j=Ko(t);Jo(t,j,g);break;default:throw Error(r(161))}}catch(C){dt(t,t.return,C)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;qf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function $e(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Mf(t,e.alternate,e),e=e.sibling}function Ka(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ga(4,e,e.return),Ka(e);break;case 1:_e(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Af(e,e.return,a),Ka(e);break;case 27:wn(e.stateNode);case 26:case 5:_e(e,e.return),Ka(e);break;case 22:e.memoizedState===null&&Ka(e);break;case 30:Ka(e);break;default:Ka(e)}t=t.sibling}}function Fe(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,o=i.flags;switch(i.tag){case 0:case 11:case 15:Fe(n,i,a),hn(4,i);break;case 1:if(Fe(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(j){dt(l,l.return,j)}if(l=i,n=l.updateQueue,n!==null){var m=l.stateNode;try{var g=n.shared.hiddenCallbacks;if(g!==null)for(n.shared.hiddenCallbacks=null,n=0;n<g.length;n++)ps(g[n],m)}catch(j){dt(l,l.return,j)}}a&&o&64&&Tf(i),gn(i,i.return);break;case 27:Cf(i);case 26:case 5:Fe(n,i,a),a&&l===null&&o&4&&Nf(i),gn(i,i.return);break;case 12:Fe(n,i,a);break;case 31:Fe(n,i,a),a&&o&4&&Uf(n,i);break;case 13:Fe(n,i,a),a&&o&4&&Hf(n,i);break;case 22:i.memoizedState===null&&Fe(n,i,a),gn(i,i.return);break;case 30:break;default:Fe(n,i,a)}e=e.sibling}}function $o(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&en(a))}function Fo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&en(t))}function Ce(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yf(t,e,a,l),e=e.sibling}function Yf(t,e,a,l){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ce(t,e,a,l),n&2048&&hn(9,e);break;case 1:Ce(t,e,a,l);break;case 3:Ce(t,e,a,l),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&en(t)));break;case 12:if(n&2048){Ce(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,o=i.id,m=i.onPostCommit;typeof m=="function"&&m(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(g){dt(e,e.return,g)}}else Ce(t,e,a,l);break;case 31:Ce(t,e,a,l);break;case 13:Ce(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,o=e.alternate,e.memoizedState!==null?i._visibility&2?Ce(t,e,a,l):xn(t,e):i._visibility&2?Ce(t,e,a,l):(i._visibility|=2,wl(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),n&2048&&$o(o,e);break;case 24:Ce(t,e,a,l),n&2048&&Fo(e.alternate,e);break;default:Ce(t,e,a,l)}}function wl(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,o=e,m=a,g=l,j=o.flags;switch(o.tag){case 0:case 11:case 15:wl(i,o,m,g,n),hn(8,o);break;case 23:break;case 22:var C=o.stateNode;o.memoizedState!==null?C._visibility&2?wl(i,o,m,g,n):xn(i,o):(C._visibility|=2,wl(i,o,m,g,n)),n&&j&2048&&$o(o.alternate,o);break;case 24:wl(i,o,m,g,n),n&&j&2048&&Fo(o.alternate,o);break;default:wl(i,o,m,g,n)}e=e.sibling}}function xn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:xn(a,l),n&2048&&$o(l.alternate,l);break;case 24:xn(a,l),n&2048&&Fo(l.alternate,l);break;default:xn(a,l)}e=e.sibling}}var vn=8192;function Tl(t,e,a){if(t.subtreeFlags&vn)for(t=t.child;t!==null;)Lf(t,e,a),t=t.sibling}function Lf(t,e,a){switch(t.tag){case 26:Tl(t,e,a),t.flags&vn&&t.memoizedState!==null&&F0(a,Oe,t.memoizedState,t.memoizedProps);break;case 5:Tl(t,e,a);break;case 3:case 4:var l=Oe;Oe=Vi(t.stateNode.containerInfo),Tl(t,e,a),Oe=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=vn,vn=16777216,Tl(t,e,a),vn=l):Tl(t,e,a));break;default:Tl(t,e,a)}}function Gf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function yn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Yt=l,Qf(l,t)}Gf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xf(t),t=t.sibling}function Xf(t){switch(t.tag){case 0:case 11:case 15:yn(t),t.flags&2048&&ga(9,t,t.return);break;case 3:yn(t);break;case 12:yn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Mi(t)):yn(t);break;default:yn(t)}}function Mi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Yt=l,Qf(l,t)}Gf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ga(8,e,e.return),Mi(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Mi(e));break;default:Mi(e)}t=t.sibling}}function Qf(t,e){for(;Yt!==null;){var a=Yt;switch(a.tag){case 0:case 11:case 15:ga(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:en(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Yt=l;else t:for(a=t;Yt!==null;){l=Yt;var n=l.sibling,i=l.return;if(Df(l),l===a){Yt=null;break t}if(n!==null){n.return=i,Yt=n;break t}Yt=i}}}var m0={getCacheForType:function(t){var e=Qt(Dt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Qt(Dt).controller.signal}},d0=typeof WeakMap=="function"?WeakMap:Map,st=0,yt=null,lt=null,it=0,mt=0,se=null,xa=!1,Al=!1,Io=!1,Ie=0,Nt=0,va=0,Ja=0,Po=0,fe=0,Nl=0,bn=null,ee=null,tr=!1,Di=0,Zf=0,_i=1/0,Ui=null,ya=null,Bt=0,ba=null,Ol=null,Pe=0,er=0,ar=null,Vf=null,Sn=0,lr=null;function me(){return(st&2)!==0&&it!==0?it&-it:R.T!==null?cr():uc()}function kf(){if(fe===0)if((it&536870912)===0||ot){var t=Qn;Qn<<=1,(Qn&3932160)===0&&(Qn=262144),fe=t}else fe=536870912;return t=re.current,t!==null&&(t.flags|=32),fe}function ae(t,e,a){(t===yt&&(mt===2||mt===9)||t.cancelPendingCommit!==null)&&(Cl(t,0),Sa(t,it,fe,!1)),Gl(t,a),((st&2)===0||t!==yt)&&(t===yt&&((st&2)===0&&(Ja|=a),Nt===4&&Sa(t,it,fe,!1)),Ue(t))}function Kf(t,e,a){if((st&6)!==0)throw Error(r(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Ll(t,e),n=l?g0(t,e):ir(t,e,!0),i=l;do{if(n===0){Al&&!l&&Sa(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!p0(a)){n=ir(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var m=t;n=bn;var g=m.current.memoizedState.isDehydrated;if(g&&(Cl(m,o).flags|=256),o=ir(m,o,!1),o!==2){if(Io&&!g){m.errorRecoveryDisabledLanes|=i,Ja|=i,n=4;break t}i=ee,ee=n,i!==null&&(ee===null?ee=i:ee.push.apply(ee,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){Cl(t,0),Sa(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Sa(l,e,fe,!xa);break t;case 2:ee=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(n=Di+300-le(),10<n)){if(Sa(l,e,fe,!xa),Vn(l,0,!0)!==0)break t;Pe=e,l.timeoutHandle=jm(Jf.bind(null,l,a,ee,Ui,tr,e,fe,Ja,Nl,xa,i,"Throttled",-0,0),n);break t}Jf(l,a,ee,Ui,tr,e,fe,Ja,Nl,xa,i,null,-0,0)}}break}while(!0);Ue(t)}function Jf(t,e,a,l,n,i,o,m,g,j,C,D,w,O){if(t.timeoutHandle=-1,D=e.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qe},Lf(e,i,D);var q=(i&62914560)===i?Di-le():(i&4194048)===i?Zf-le():0;if(q=I0(D,q),q!==null){Pe=i,t.cancelPendingCommit=q(am.bind(null,t,e,i,a,l,n,o,m,g,C,D,null,w,O)),Sa(t,i,o,!j);return}}am(t,e,i,a,l,n,o,m,g)}function p0(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ue(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sa(t,e,a,l){e&=~Po,e&=~Ja,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-ie(n),o=1<<i;l[i]=-1,n&=~o}a!==0&&lc(t,a,e)}function Hi(){return(st&6)===0?(zn(0),!1):!0}function nr(){if(lt!==null){if(mt===0)var t=lt.return;else t=lt,Xe=Ya=null,bo(t),bl=null,ln=0,t=lt;for(;t!==null;)wf(t.alternate,t),t=t.return;lt=null}}function Cl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,_0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Pe=0,nr(),yt=t,lt=a=Le(t.current,null),it=e,mt=0,se=null,xa=!1,Al=Ll(t,e),Io=!1,Nl=fe=Po=Ja=va=Nt=0,ee=bn=null,tr=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-ie(l),i=1<<n;e|=t[n],l&=~i}return Ie=e,li(),a}function Wf(t,e){tt=null,R.H=mn,e===yl||e===fi?(e=ss(),mt=3):e===oo?(e=ss(),mt=4):mt=e===Ho?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,se=e,lt===null&&(Nt=1,wi(t,ve(e,t.current)))}function $f(){var t=re.current;return t===null?!0:(it&4194048)===it?ze===null:(it&62914560)===it||(it&536870912)!==0?t===ze:!1}function Ff(){var t=R.H;return R.H=mn,t===null?mn:t}function If(){var t=R.A;return R.A=m0,t}function Bi(){Nt=4,xa||(it&4194048)!==it&&re.current!==null||(Al=!0),(va&134217727)===0&&(Ja&134217727)===0||yt===null||Sa(yt,it,fe,!1)}function ir(t,e,a){var l=st;st|=2;var n=Ff(),i=If();(yt!==t||it!==e)&&(Ui=null,Cl(t,e)),e=!1;var o=Nt;t:do try{if(mt!==0&&lt!==null){var m=lt,g=se;switch(mt){case 8:nr(),o=6;break t;case 3:case 2:case 9:case 6:re.current===null&&(e=!0);var j=mt;if(mt=0,se=null,Rl(t,m,g,j),a&&Al){o=0;break t}break;default:j=mt,mt=0,se=null,Rl(t,m,g,j)}}h0(),o=Nt;break}catch(C){Wf(t,C)}while(!0);return e&&t.shellSuspendCounter++,Xe=Ya=null,st=l,R.H=n,R.A=i,lt===null&&(yt=null,it=0,li()),o}function h0(){for(;lt!==null;)Pf(lt)}function g0(t,e){var a=st;st|=2;var l=Ff(),n=If();yt!==t||it!==e?(Ui=null,_i=le()+500,Cl(t,e)):Al=Ll(t,e);t:do try{if(mt!==0&&lt!==null){e=lt;var i=se;e:switch(mt){case 1:mt=0,se=null,Rl(t,e,i,1);break;case 2:case 9:if(rs(i)){mt=0,se=null,tm(e);break}e=function(){mt!==2&&mt!==9||yt!==t||(mt=7),Ue(t)},i.then(e,e);break t;case 3:mt=7;break t;case 4:mt=5;break t;case 7:rs(i)?(mt=0,se=null,tm(e)):(mt=0,se=null,Rl(t,e,i,7));break;case 5:var o=null;switch(lt.tag){case 26:o=lt.memoizedState;case 5:case 27:var m=lt;if(o?Ym(o):m.stateNode.complete){mt=0,se=null;var g=m.sibling;if(g!==null)lt=g;else{var j=m.return;j!==null?(lt=j,qi(j)):lt=null}break e}}mt=0,se=null,Rl(t,e,i,5);break;case 6:mt=0,se=null,Rl(t,e,i,6);break;case 8:nr(),Nt=6;break t;default:throw Error(r(462))}}x0();break}catch(C){Wf(t,C)}while(!0);return Xe=Ya=null,R.H=l,R.A=n,st=a,lt!==null?0:(yt=null,it=0,li(),Nt)}function x0(){for(;lt!==null&&!Ld();)Pf(lt)}function Pf(t){var e=Ef(t.alternate,t,Ie);t.memoizedProps=t.pendingProps,e===null?qi(t):lt=e}function tm(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=xf(a,e,e.pendingProps,e.type,void 0,it);break;case 11:e=xf(a,e,e.pendingProps,e.type.render,e.ref,it);break;case 5:bo(e);default:wf(a,e),e=lt=Fc(e,Ie),e=Ef(a,e,Ie)}t.memoizedProps=t.pendingProps,e===null?qi(t):lt=e}function Rl(t,e,a,l){Xe=Ya=null,bo(e),bl=null,ln=0;var n=e.return;try{if(i0(t,n,e,a,it)){Nt=1,wi(t,ve(a,t.current)),lt=null;return}}catch(i){if(n!==null)throw lt=n,i;Nt=1,wi(t,ve(a,t.current)),lt=null;return}e.flags&32768?(ot||l===1?t=!0:Al||(it&536870912)!==0?t=!1:(xa=t=!0,(l===2||l===9||l===3||l===6)&&(l=re.current,l!==null&&l.tag===13&&(l.flags|=16384))),em(e,t)):qi(e)}function qi(t){var e=t;do{if((e.flags&32768)!==0){em(e,xa);return}t=e.return;var a=r0(e.alternate,e,Ie);if(a!==null){lt=a;return}if(e=e.sibling,e!==null){lt=e;return}lt=e=t}while(e!==null);Nt===0&&(Nt=5)}function em(t,e){do{var a=c0(t.alternate,t);if(a!==null){a.flags&=32767,lt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){lt=t;return}lt=t=a}while(t!==null);Nt=6,lt=null}function am(t,e,a,l,n,i,o,m,g){t.cancelPendingCommit=null;do Yi();while(Bt!==0);if((st&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=ku,$d(t,a,i,o,m,g),t===yt&&(lt=yt=null,it=0),Ol=e,ba=t,Pe=a,er=i,ar=n,Vf=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,S0(Gn,function(){return om(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=H.p,H.p=2,o=st,st|=4;try{s0(t,e,a)}finally{st=o,H.p=n,R.T=l}}Bt=1,lm(),nm(),im()}}function lm(){if(Bt===1){Bt=0;var t=ba,e=Ol,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=H.p;H.p=2;var n=st;st|=4;try{Bf(e,t);var i=xr,o=Xc(t.containerInfo),m=i.focusedElem,g=i.selectionRange;if(o!==m&&m&&m.ownerDocument&&Gc(m.ownerDocument.documentElement,m)){if(g!==null&&Gu(m)){var j=g.start,C=g.end;if(C===void 0&&(C=j),"selectionStart"in m)m.selectionStart=j,m.selectionEnd=Math.min(C,m.value.length);else{var D=m.ownerDocument||document,w=D&&D.defaultView||window;if(w.getSelection){var O=w.getSelection(),q=m.textContent.length,J=Math.min(g.start,q),xt=g.end===void 0?J:Math.min(g.end,q);!O.extend&&J>xt&&(o=xt,xt=J,J=o);var S=Lc(m,J),y=Lc(m,xt);if(S&&y&&(O.rangeCount!==1||O.anchorNode!==S.node||O.anchorOffset!==S.offset||O.focusNode!==y.node||O.focusOffset!==y.offset)){var E=D.createRange();E.setStart(S.node,S.offset),O.removeAllRanges(),J>xt?(O.addRange(E),O.extend(y.node,y.offset)):(E.setEnd(y.node,y.offset),O.addRange(E))}}}}for(D=[],O=m;O=O.parentNode;)O.nodeType===1&&D.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<D.length;m++){var M=D[m];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Fi=!!gr,xr=gr=null}finally{st=n,H.p=l,R.T=a}}t.current=e,Bt=2}}function nm(){if(Bt===2){Bt=0;var t=ba,e=Ol,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=H.p;H.p=2;var n=st;st|=4;try{Mf(t,e.alternate,e)}finally{st=n,H.p=l,R.T=a}}Bt=3}}function im(){if(Bt===4||Bt===3){Bt=0,Gd();var t=ba,e=Ol,a=Pe,l=Vf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Bt=5:(Bt=0,Ol=ba=null,um(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(ya=null),zu(a),e=e.stateNode,ne&&typeof ne.onCommitFiberRoot=="function")try{ne.onCommitFiberRoot(Yl,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=R.T,n=H.p,H.p=2,R.T=null;try{for(var i=t.onRecoverableError,o=0;o<l.length;o++){var m=l[o];i(m.value,{componentStack:m.stack})}}finally{R.T=e,H.p=n}}(Pe&3)!==0&&Yi(),Ue(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===lr?Sn++:(Sn=0,lr=t):Sn=0,zn(0)}}function um(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,en(e)))}function Yi(){return lm(),nm(),im(),om()}function om(){if(Bt!==5)return!1;var t=ba,e=er;er=0;var a=zu(Pe),l=R.T,n=H.p;try{H.p=32>a?32:a,R.T=null,a=ar,ar=null;var i=ba,o=Pe;if(Bt=0,Ol=ba=null,Pe=0,(st&6)!==0)throw Error(r(331));var m=st;if(st|=4,Xf(i.current),Yf(i,i.current,o,a),st=m,zn(0,!1),ne&&typeof ne.onPostCommitFiberRoot=="function")try{ne.onPostCommitFiberRoot(Yl,i)}catch{}return!0}finally{H.p=n,R.T=l,um(t,e)}}function rm(t,e,a){e=ve(a,e),e=Uo(t.stateNode,e,2),t=da(t,e,2),t!==null&&(Gl(t,2),Ue(t))}function dt(t,e,a){if(t.tag===3)rm(t,t,a);else for(;e!==null;){if(e.tag===3){rm(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ya===null||!ya.has(l))){t=ve(a,t),a=cf(2),l=da(e,a,2),l!==null&&(sf(a,l,e,t),Gl(l,2),Ue(l));break}}e=e.return}}function ur(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new d0;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(Io=!0,n.add(a),t=v0.bind(null,t,e,a),e.then(t,t))}function v0(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,yt===t&&(it&a)===a&&(Nt===4||Nt===3&&(it&62914560)===it&&300>le()-Di?(st&2)===0&&Cl(t,0):Po|=a,Nl===it&&(Nl=0)),Ue(t)}function cm(t,e){e===0&&(e=ac()),t=Ha(t,e),t!==null&&(Gl(t,e),Ue(t))}function y0(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),cm(t,a)}function b0(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(e),cm(t,a)}function S0(t,e){return vu(t,e)}var Li=null,Ml=null,or=!1,Gi=!1,rr=!1,za=0;function Ue(t){t!==Ml&&t.next===null&&(Ml===null?Li=Ml=t:Ml=Ml.next=t),Gi=!0,or||(or=!0,E0())}function zn(t,e){if(!rr&&Gi){rr=!0;do for(var a=!1,l=Li;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var o=l.suspendedLanes,m=l.pingedLanes;i=(1<<31-ie(42|t)+1)-1,i&=n&~(o&~m),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,dm(l,i))}else i=it,i=Vn(l,l===yt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ll(l,i)||(a=!0,dm(l,i));l=l.next}while(a);rr=!1}}function z0(){sm()}function sm(){Gi=or=!1;var t=0;za!==0&&D0()&&(t=za);for(var e=le(),a=null,l=Li;l!==null;){var n=l.next,i=fm(l,e);i===0?(l.next=null,a===null?Li=n:a.next=n,n===null&&(Ml=a)):(a=l,(t!==0||(i&3)!==0)&&(Gi=!0)),l=n}Bt!==0&&Bt!==5||zn(t),za!==0&&(za=0)}function fm(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var o=31-ie(i),m=1<<o,g=n[o];g===-1?((m&a)===0||(m&l)!==0)&&(n[o]=Wd(m,e)):g<=e&&(t.expiredLanes|=m),i&=~m}if(e=yt,a=it,a=Vn(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(mt===2||mt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&yu(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ll(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&yu(l),zu(a)){case 2:case 8:a=tc;break;case 32:a=Gn;break;case 268435456:a=ec;break;default:a=Gn}return l=mm.bind(null,t),a=vu(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&yu(l),t.callbackPriority=2,t.callbackNode=null,2}function mm(t,e){if(Bt!==0&&Bt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yi()&&t.callbackNode!==a)return null;var l=it;return l=Vn(t,t===yt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Kf(t,l,e),fm(t,le()),t.callbackNode!=null&&t.callbackNode===a?mm.bind(null,t):null)}function dm(t,e){if(Yi())return null;Kf(t,e,!0)}function E0(){U0(function(){(st&6)!==0?vu(Pr,z0):sm()})}function cr(){if(za===0){var t=xl;t===0&&(t=Xn,Xn<<=1,(Xn&261888)===0&&(Xn=256)),za=t}return za}function pm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Wn(""+t)}function hm(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function j0(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=pm((n[$t]||null).action),o=l.submitter;o&&(e=(e=o[$t]||null)?pm(e.formAction):o.getAttribute("formAction"),e!==null&&(i=e,o=null));var m=new Pn("action","action",null,l,n);t.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(za!==0){var g=o?hm(n,o):new FormData(n);Oo(a,{pending:!0,data:g,method:n.method,action:i},null,g)}}else typeof i=="function"&&(m.preventDefault(),g=o?hm(n,o):new FormData(n),Oo(a,{pending:!0,data:g,method:n.method,action:i},i,g))},currentTarget:n}]})}}for(var sr=0;sr<Vu.length;sr++){var fr=Vu[sr],w0=fr.toLowerCase(),T0=fr[0].toUpperCase()+fr.slice(1);Ne(w0,"on"+T0)}Ne(Vc,"onAnimationEnd"),Ne(kc,"onAnimationIteration"),Ne(Kc,"onAnimationStart"),Ne("dblclick","onDoubleClick"),Ne("focusin","onFocus"),Ne("focusout","onBlur"),Ne(Xp,"onTransitionRun"),Ne(Qp,"onTransitionStart"),Ne(Zp,"onTransitionCancel"),Ne(Jc,"onTransitionEnd"),ll("onMouseEnter",["mouseout","mouseover"]),ll("onMouseLeave",["mouseout","mouseover"]),ll("onPointerEnter",["pointerout","pointerover"]),ll("onPointerLeave",["pointerout","pointerover"]),Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(En));function gm(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var o=l.length-1;0<=o;o--){var m=l[o],g=m.instance,j=m.currentTarget;if(m=m.listener,g!==i&&n.isPropagationStopped())break t;i=m,n.currentTarget=j;try{i(n)}catch(C){ai(C)}n.currentTarget=null,i=g}else for(o=0;o<l.length;o++){if(m=l[o],g=m.instance,j=m.currentTarget,m=m.listener,g!==i&&n.isPropagationStopped())break t;i=m,n.currentTarget=j;try{i(n)}catch(C){ai(C)}n.currentTarget=null,i=g}}}}function nt(t,e){var a=e[Eu];a===void 0&&(a=e[Eu]=new Set);var l=t+"__bubble";a.has(l)||(xm(e,t,2,!1),a.add(l))}function mr(t,e,a){var l=0;e&&(l|=4),xm(a,t,l,e)}var Xi="_reactListening"+Math.random().toString(36).slice(2);function dr(t){if(!t[Xi]){t[Xi]=!0,cc.forEach(function(a){a!=="selectionchange"&&(A0.has(a)||mr(a,!1,t),mr(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xi]||(e[Xi]=!0,mr("selectionchange",!1,e))}}function xm(t,e,a,l){switch(km(e)){case 2:var n=eh;break;case 8:n=ah;break;default:n=Nr}a=n.bind(null,e,a,t),n=void 0,!Mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function pr(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var m=l.stateNode.containerInfo;if(m===n)break;if(o===4)for(o=l.return;o!==null;){var g=o.tag;if((g===3||g===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;m!==null;){if(o=tl(m),o===null)return;if(g=o.tag,g===5||g===6||g===26||g===27){l=i=o;continue t}m=m.parentNode}}l=l.return}Sc(function(){var j=i,C=Cu(a),D=[];t:{var w=Wc.get(t);if(w!==void 0){var O=Pn,q=t;switch(t){case"keypress":if(Fn(a)===0)break t;case"keydown":case"keyup":O=bp;break;case"focusin":q="focus",O=Hu;break;case"focusout":q="blur",O=Hu;break;case"beforeblur":case"afterblur":O=Hu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Ep;break;case Vc:case kc:case Kc:O=fp;break;case Jc:O=wp;break;case"scroll":case"scrollend":O=up;break;case"wheel":O=Ap;break;case"copy":case"cut":case"paste":O=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Tc;break;case"toggle":case"beforetoggle":O=Op}var J=(e&4)!==0,xt=!J&&(t==="scroll"||t==="scrollend"),S=J?w!==null?w+"Capture":null:w;J=[];for(var y=j,E;y!==null;){var M=y;if(E=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||E===null||S===null||(M=Zl(y,S),M!=null&&J.push(jn(y,M,E))),xt)break;y=y.return}0<J.length&&(w=new O(w,q,null,a,C),D.push({event:w,listeners:J}))}}if((e&7)===0){t:{if(w=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",w&&a!==Ou&&(q=a.relatedTarget||a.fromElement)&&(tl(q)||q[Pa]))break t;if((O||w)&&(w=C.window===C?C:(w=C.ownerDocument)?w.defaultView||w.parentWindow:window,O?(q=a.relatedTarget||a.toElement,O=j,q=q?tl(q):null,q!==null&&(xt=h(q),J=q.tag,q!==xt||J!==5&&J!==27&&J!==6)&&(q=null)):(O=null,q=j),O!==q)){if(J=jc,M="onMouseLeave",S="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(J=Tc,M="onPointerLeave",S="onPointerEnter",y="pointer"),xt=O==null?w:Ql(O),E=q==null?w:Ql(q),w=new J(M,y+"leave",O,a,C),w.target=xt,w.relatedTarget=E,M=null,tl(C)===j&&(J=new J(S,y+"enter",q,a,C),J.target=E,J.relatedTarget=xt,M=J),xt=M,O&&q)e:{for(J=N0,S=O,y=q,E=0,M=S;M;M=J(M))E++;M=0;for(var k=y;k;k=J(k))M++;for(;0<E-M;)S=J(S),E--;for(;0<M-E;)y=J(y),M--;for(;E--;){if(S===y||y!==null&&S===y.alternate){J=S;break e}S=J(S),y=J(y)}J=null}else J=null;O!==null&&vm(D,w,O,J,!1),q!==null&&xt!==null&&vm(D,xt,q,J,!0)}}t:{if(w=j?Ql(j):window,O=w.nodeName&&w.nodeName.toLowerCase(),O==="select"||O==="input"&&w.type==="file")var rt=_c;else if(Mc(w))if(Uc)rt=Yp;else{rt=Bp;var G=Hp}else O=w.nodeName,!O||O.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?j&&Nu(j.elementType)&&(rt=_c):rt=qp;if(rt&&(rt=rt(t,j))){Dc(D,rt,a,C);break t}G&&G(t,w,j),t==="focusout"&&j&&w.type==="number"&&j.memoizedProps.value!=null&&Au(w,"number",w.value)}switch(G=j?Ql(j):window,t){case"focusin":(Mc(G)||G.contentEditable==="true")&&(cl=G,Xu=j,Il=null);break;case"focusout":Il=Xu=cl=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Qc(D,a,C);break;case"selectionchange":if(Gp)break;case"keydown":case"keyup":Qc(D,a,C)}var et;if(qu)t:{switch(t){case"compositionstart":var ut="onCompositionStart";break t;case"compositionend":ut="onCompositionEnd";break t;case"compositionupdate":ut="onCompositionUpdate";break t}ut=void 0}else rl?Cc(t,a)&&(ut="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(Ac&&a.locale!=="ko"&&(rl||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&rl&&(et=zc()):(ua=C,Du="value"in ua?ua.value:ua.textContent,rl=!0)),G=Qi(j,ut),0<G.length&&(ut=new wc(ut,t,null,a,C),D.push({event:ut,listeners:G}),et?ut.data=et:(et=Rc(a),et!==null&&(ut.data=et)))),(et=Rp?Mp(t,a):Dp(t,a))&&(ut=Qi(j,"onBeforeInput"),0<ut.length&&(G=new wc("onBeforeInput","beforeinput",null,a,C),D.push({event:G,listeners:ut}),G.data=et)),j0(D,t,j,a,C)}gm(D,e)})}function jn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Qi(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Zl(t,a),n!=null&&l.unshift(jn(t,n,i)),n=Zl(t,e),n!=null&&l.push(jn(t,n,i))),t.tag===3)return l;t=t.return}return[]}function N0(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function vm(t,e,a,l,n){for(var i=e._reactName,o=[];a!==null&&a!==l;){var m=a,g=m.alternate,j=m.stateNode;if(m=m.tag,g!==null&&g===l)break;m!==5&&m!==26&&m!==27||j===null||(g=j,n?(j=Zl(a,i),j!=null&&o.unshift(jn(a,j,g))):n||(j=Zl(a,i),j!=null&&o.push(jn(a,j,g)))),a=a.return}o.length!==0&&t.push({event:e,listeners:o})}var O0=/\r\n?/g,C0=/\u0000|\uFFFD/g;function ym(t){return(typeof t=="string"?t:""+t).replace(O0,`
`).replace(C0,"")}function bm(t,e){return e=ym(e),ym(t)===e}function gt(t,e,a,l,n,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||il(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&il(t,""+l);break;case"className":Kn(t,"class",l);break;case"tabIndex":Kn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Kn(t,a,l);break;case"style":yc(t,l,i);break;case"data":if(e!=="object"){Kn(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Wn(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&gt(t,e,"name",n.name,n,null),gt(t,e,"formEncType",n.formEncType,n,null),gt(t,e,"formMethod",n.formMethod,n,null),gt(t,e,"formTarget",n.formTarget,n,null)):(gt(t,e,"encType",n.encType,n,null),gt(t,e,"method",n.method,n,null),gt(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Wn(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=qe);break;case"onScroll":l!=null&&nt("scroll",t);break;case"onScrollEnd":l!=null&&nt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Wn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":nt("beforetoggle",t),nt("toggle",t),kn(t,"popover",l);break;case"xlinkActuate":Be(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Be(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Be(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Be(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Be(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Be(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Be(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":kn(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=np.get(a)||a,kn(t,a,l))}}function hr(t,e,a,l,n,i){switch(a){case"style":yc(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof l=="string"?il(t,l):(typeof l=="number"||typeof l=="bigint")&&il(t,""+l);break;case"onScroll":l!=null&&nt("scroll",t);break;case"onScrollEnd":l!=null&&nt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=qe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sc.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),i=t[$t]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,n);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):kn(t,a,l)}}}function Vt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":nt("error",t),nt("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:gt(t,e,i,o,a,null)}}n&&gt(t,e,"srcSet",a.srcSet,a,null),l&&gt(t,e,"src",a.src,a,null);return;case"input":nt("invalid",t);var m=i=o=n=null,g=null,j=null;for(l in a)if(a.hasOwnProperty(l)){var C=a[l];if(C!=null)switch(l){case"name":n=C;break;case"type":o=C;break;case"checked":g=C;break;case"defaultChecked":j=C;break;case"value":i=C;break;case"defaultValue":m=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(137,e));break;default:gt(t,e,l,C,a,null)}}hc(t,i,m,g,j,o,n,!1);return;case"select":nt("invalid",t),l=o=i=null;for(n in a)if(a.hasOwnProperty(n)&&(m=a[n],m!=null))switch(n){case"value":i=m;break;case"defaultValue":o=m;break;case"multiple":l=m;default:gt(t,e,n,m,a,null)}e=i,a=o,t.multiple=!!l,e!=null?nl(t,!!l,e,!1):a!=null&&nl(t,!!l,a,!0);return;case"textarea":nt("invalid",t),i=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(m=a[o],m!=null))switch(o){case"value":l=m;break;case"defaultValue":n=m;break;case"children":i=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(r(91));break;default:gt(t,e,o,m,a,null)}xc(t,l,n,i);return;case"option":for(g in a)a.hasOwnProperty(g)&&(l=a[g],l!=null)&&(g==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":gt(t,e,g,l,a,null));return;case"dialog":nt("beforetoggle",t),nt("toggle",t),nt("cancel",t),nt("close",t);break;case"iframe":case"object":nt("load",t);break;case"video":case"audio":for(l=0;l<En.length;l++)nt(En[l],t);break;case"image":nt("error",t),nt("load",t);break;case"details":nt("toggle",t);break;case"embed":case"source":case"link":nt("error",t),nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(l=a[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:gt(t,e,j,l,a,null)}return;default:if(Nu(e)){for(C in a)a.hasOwnProperty(C)&&(l=a[C],l!==void 0&&hr(t,e,C,l,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!=null&&gt(t,e,m,l,a,null))}function R0(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,m=null,g=null,j=null,C=null;for(O in a){var D=a[O];if(a.hasOwnProperty(O)&&D!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":g=D;default:l.hasOwnProperty(O)||gt(t,e,O,null,l,D)}}for(var w in l){var O=l[w];if(D=a[w],l.hasOwnProperty(w)&&(O!=null||D!=null))switch(w){case"type":i=O;break;case"name":n=O;break;case"checked":j=O;break;case"defaultChecked":C=O;break;case"value":o=O;break;case"defaultValue":m=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,e));break;default:O!==D&&gt(t,e,w,O,l,D)}}Tu(t,o,m,g,j,C,i,n);return;case"select":O=o=m=w=null;for(i in a)if(g=a[i],a.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":O=g;default:l.hasOwnProperty(i)||gt(t,e,i,null,l,g)}for(n in l)if(i=l[n],g=a[n],l.hasOwnProperty(n)&&(i!=null||g!=null))switch(n){case"value":w=i;break;case"defaultValue":m=i;break;case"multiple":o=i;default:i!==g&&gt(t,e,n,i,l,g)}e=m,a=o,l=O,w!=null?nl(t,!!a,w,!1):!!l!=!!a&&(e!=null?nl(t,!!a,e,!0):nl(t,!!a,a?[]:"",!1));return;case"textarea":O=w=null;for(m in a)if(n=a[m],a.hasOwnProperty(m)&&n!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:gt(t,e,m,null,l,n)}for(o in l)if(n=l[o],i=a[o],l.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":w=n;break;case"defaultValue":O=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==i&&gt(t,e,o,n,l,i)}gc(t,w,O);return;case"option":for(var q in a)w=a[q],a.hasOwnProperty(q)&&w!=null&&!l.hasOwnProperty(q)&&(q==="selected"?t.selected=!1:gt(t,e,q,null,l,w));for(g in l)w=l[g],O=a[g],l.hasOwnProperty(g)&&w!==O&&(w!=null||O!=null)&&(g==="selected"?t.selected=w&&typeof w!="function"&&typeof w!="symbol":gt(t,e,g,w,l,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in a)w=a[J],a.hasOwnProperty(J)&&w!=null&&!l.hasOwnProperty(J)&&gt(t,e,J,null,l,w);for(j in l)if(w=l[j],O=a[j],l.hasOwnProperty(j)&&w!==O&&(w!=null||O!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,e));break;default:gt(t,e,j,w,l,O)}return;default:if(Nu(e)){for(var xt in a)w=a[xt],a.hasOwnProperty(xt)&&w!==void 0&&!l.hasOwnProperty(xt)&&hr(t,e,xt,void 0,l,w);for(C in l)w=l[C],O=a[C],!l.hasOwnProperty(C)||w===O||w===void 0&&O===void 0||hr(t,e,C,w,l,O);return}}for(var S in a)w=a[S],a.hasOwnProperty(S)&&w!=null&&!l.hasOwnProperty(S)&&gt(t,e,S,null,l,w);for(D in l)w=l[D],O=a[D],!l.hasOwnProperty(D)||w===O||w==null&&O==null||gt(t,e,D,w,l,O)}function Sm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function M0(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,o=n.initiatorType,m=n.duration;if(i&&m&&Sm(o)){for(o=0,m=n.responseEnd,l+=1;l<a.length;l++){var g=a[l],j=g.startTime;if(j>m)break;var C=g.transferSize,D=g.initiatorType;C&&Sm(D)&&(g=g.responseEnd,o+=C*(g<m?1:(m-j)/(g-j)))}if(--l,e+=8*(i+o)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gr=null,xr=null;function Zi(t){return t.nodeType===9?t:t.ownerDocument}function zm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Em(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function vr(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yr=null;function D0(){var t=window.event;return t&&t.type==="popstate"?t===yr?!1:(yr=t,!0):(yr=null,!1)}var jm=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,wm=typeof Promise=="function"?Promise:void 0,U0=typeof queueMicrotask=="function"?queueMicrotask:typeof wm<"u"?function(t){return wm.resolve(null).then(t).catch(H0)}:jm;function H0(t){setTimeout(function(){throw t})}function Ea(t){return t==="head"}function Tm(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),Hl(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")wn(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,wn(a);for(var i=a.firstChild;i;){var o=i.nextSibling,m=i.nodeName;i[Xl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=o}}else a==="body"&&wn(t.ownerDocument.body);a=n}while(a);Hl(e)}function Am(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function br(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":br(a),ju(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function B0(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Xl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ee(t.nextSibling),t===null)break}return null}function q0(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ee(t.nextSibling),t===null))return null;return t}function Nm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ee(t.nextSibling),t===null))return null;return t}function Sr(t){return t.data==="$?"||t.data==="$~"}function zr(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Y0(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ee(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Er=null;function Om(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Ee(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Rm(t,e,a){switch(e=Zi(a),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function wn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ju(t)}var je=new Map,Mm=new Set;function Vi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ta=H.d;H.d={f:L0,r:G0,D:X0,C:Q0,L:Z0,m:V0,X:K0,S:k0,M:J0};function L0(){var t=ta.f(),e=Hi();return t||e}function G0(t){var e=el(t);e!==null&&e.tag===5&&e.type==="form"?Js(e):ta.r(t)}var Dl=typeof document>"u"?null:document;function Dm(t,e,a){var l=Dl;if(l&&typeof e=="string"&&e){var n=ge(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Mm.has(n)||(Mm.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),Vt(e,"link",t),qt(e),l.head.appendChild(e)))}}function X0(t){ta.D(t),Dm("dns-prefetch",t,null)}function Q0(t,e){ta.C(t,e),Dm("preconnect",t,e)}function Z0(t,e,a){ta.L(t,e,a);var l=Dl;if(l&&t&&e){var n='link[rel="preload"][as="'+ge(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ge(a.imageSizes)+'"]')):n+='[href="'+ge(t)+'"]';var i=n;switch(e){case"style":i=_l(t);break;case"script":i=Ul(t)}je.has(i)||(t=T({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),je.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(Tn(i))||e==="script"&&l.querySelector(An(i))||(e=l.createElement("link"),Vt(e,"link",t),qt(e),l.head.appendChild(e)))}}function V0(t,e){ta.m(t,e);var a=Dl;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+ge(l)+'"][href="'+ge(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ul(t)}if(!je.has(i)&&(t=T({rel:"modulepreload",href:t},e),je.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(An(i)))return}l=a.createElement("link"),Vt(l,"link",t),qt(l),a.head.appendChild(l)}}}function k0(t,e,a){ta.S(t,e,a);var l=Dl;if(l&&t){var n=al(l).hoistableStyles,i=_l(t);e=e||"default";var o=n.get(i);if(!o){var m={loading:0,preload:null};if(o=l.querySelector(Tn(i)))m.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":e},a),(a=je.get(i))&&jr(t,a);var g=o=l.createElement("link");qt(g),Vt(g,"link",t),g._p=new Promise(function(j,C){g.onload=j,g.onerror=C}),g.addEventListener("load",function(){m.loading|=1}),g.addEventListener("error",function(){m.loading|=2}),m.loading|=4,ki(o,e,l)}o={type:"stylesheet",instance:o,count:1,state:m},n.set(i,o)}}}function K0(t,e){ta.X(t,e);var a=Dl;if(a&&t){var l=al(a).hoistableScripts,n=Ul(t),i=l.get(n);i||(i=a.querySelector(An(n)),i||(t=T({src:t,async:!0},e),(e=je.get(n))&&wr(t,e),i=a.createElement("script"),qt(i),Vt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function J0(t,e){ta.M(t,e);var a=Dl;if(a&&t){var l=al(a).hoistableScripts,n=Ul(t),i=l.get(n);i||(i=a.querySelector(An(n)),i||(t=T({src:t,async:!0,type:"module"},e),(e=je.get(n))&&wr(t,e),i=a.createElement("script"),qt(i),Vt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function _m(t,e,a,l){var n=(n=at.current)?Vi(n):null;if(!n)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=_l(a.href),a=al(n).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_l(a.href);var i=al(n).hoistableStyles,o=i.get(t);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,o),(i=n.querySelector(Tn(t)))&&!i._p&&(o.instance=i,o.state.loading=5),je.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},je.set(t,a),i||W0(n,t,a,o.state))),e&&l===null)throw Error(r(528,""));return o}if(e&&l!==null)throw Error(r(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ul(a),a=al(n).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function _l(t){return'href="'+ge(t)+'"'}function Tn(t){return'link[rel="stylesheet"]['+t+"]"}function Um(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function W0(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Vt(e,"link",a),qt(e),t.head.appendChild(e))}function Ul(t){return'[src="'+ge(t)+'"]'}function An(t){return"script[async]"+t}function Hm(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+ge(a.href)+'"]');if(l)return e.instance=l,qt(l),l;var n=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),qt(l),Vt(l,"style",n),ki(l,a.precedence,t),e.instance=l;case"stylesheet":n=_l(a.href);var i=t.querySelector(Tn(n));if(i)return e.state.loading|=4,e.instance=i,qt(i),i;l=Um(a),(n=je.get(n))&&jr(l,n),i=(t.ownerDocument||t).createElement("link"),qt(i);var o=i;return o._p=new Promise(function(m,g){o.onload=m,o.onerror=g}),Vt(i,"link",l),e.state.loading|=4,ki(i,a.precedence,t),e.instance=i;case"script":return i=Ul(a.src),(n=t.querySelector(An(i)))?(e.instance=n,qt(n),n):(l=a,(n=je.get(i))&&(l=T({},a),wr(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),qt(n),Vt(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,ki(l,a.precedence,t));return e.instance}function ki(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,o=0;o<l.length;o++){var m=l[o];if(m.dataset.precedence===e)i=m;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function jr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function wr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ki=null;function Bm(t,e,a){if(Ki===null){var l=new Map,n=Ki=new Map;n.set(a,l)}else n=Ki,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[Xl]||i[Gt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(e)||"";o=t+o;var m=l.get(o);m?m.push(i):l.set(o,[i])}}return l}function qm(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function $0(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Ym(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function F0(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=_l(l.href),i=e.querySelector(Tn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ji.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,qt(i);return}i=e.ownerDocument||e,l=Um(l),(n=je.get(n))&&jr(l,n),i=i.createElement("link"),qt(i);var o=i;o._p=new Promise(function(m,g){o.onload=m,o.onerror=g}),Vt(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ji.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Tr=0;function I0(t,e){return t.stylesheets&&t.count===0&&$i(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&$i(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Tr===0&&(Tr=62500*M0());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$i(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Tr?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ji(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$i(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Wi=null;function $i(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wi=new Map,e.forEach(P0,t),Wi=null,Ji.call(t))}function P0(t,e){if(!(e.state.loading&4)){var a=Wi.get(t);if(a)var l=a.get(null);else{a=new Map,Wi.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=e.instance,o=n.getAttribute("data-precedence"),i=a.get(o)||l,i===l&&a.set(null,n),a.set(o,n),this.count++,l=Ji.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var Nn={$$typeof:$,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function th(t,e,a,l,n,i,o,m,g){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.hiddenUpdates=bu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Lm(t,e,a,l,n,i,o,m,g,j,C,D){return t=new th(t,e,a,o,g,j,C,D,m),e=1,i===!0&&(e|=24),i=oe(3,null,null,e),t.current=i,i.stateNode=t,e=no(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},ro(i),t}function Gm(t){return t?(t=ml,t):ml}function Xm(t,e,a,l,n,i){n=Gm(n),l.context===null?l.context=n:l.pendingContext=n,l=ma(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=da(t,l,e),a!==null&&(ae(a,t,e),un(a,t,e))}function Qm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Ar(t,e){Qm(t,e),(t=t.alternate)&&Qm(t,e)}function Zm(t){if(t.tag===13||t.tag===31){var e=Ha(t,67108864);e!==null&&ae(e,t,67108864),Ar(t,67108864)}}function Vm(t){if(t.tag===13||t.tag===31){var e=me();e=Su(e);var a=Ha(t,e);a!==null&&ae(a,t,e),Ar(t,e)}}var Fi=!0;function eh(t,e,a,l){var n=R.T;R.T=null;var i=H.p;try{H.p=2,Nr(t,e,a,l)}finally{H.p=i,R.T=n}}function ah(t,e,a,l){var n=R.T;R.T=null;var i=H.p;try{H.p=8,Nr(t,e,a,l)}finally{H.p=i,R.T=n}}function Nr(t,e,a,l){if(Fi){var n=Or(l);if(n===null)pr(t,e,l,Ii,a),Km(t,l);else if(nh(n,t,e,a,l))l.stopPropagation();else if(Km(t,l),e&4&&-1<lh.indexOf(t)){for(;n!==null;){var i=el(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Ra(i.pendingLanes);if(o!==0){var m=i;for(m.pendingLanes|=2,m.entangledLanes|=2;o;){var g=1<<31-ie(o);m.entanglements[1]|=g,o&=~g}Ue(i),(st&6)===0&&(_i=le()+500,zn(0))}}break;case 31:case 13:m=Ha(i,2),m!==null&&ae(m,i,2),Hi(),Ar(i,2)}if(i=Or(l),i===null&&pr(t,e,l,Ii,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else pr(t,e,l,null,a)}}function Or(t){return t=Cu(t),Cr(t)}var Ii=null;function Cr(t){if(Ii=null,t=tl(t),t!==null){var e=h(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=p(e),t!==null)return t;t=null}else if(a===31){if(t=z(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ii=t,null}function km(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xd()){case Pr:return 2;case tc:return 8;case Gn:case Qd:return 32;case ec:return 268435456;default:return 32}default:return 32}}var Rr=!1,ja=null,wa=null,Ta=null,On=new Map,Cn=new Map,Aa=[],lh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Km(t,e){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ta=null;break;case"pointerover":case"pointerout":On.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(e.pointerId)}}function Rn(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=el(e),e!==null&&Zm(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function nh(t,e,a,l,n){switch(e){case"focusin":return ja=Rn(ja,t,e,a,l,n),!0;case"dragenter":return wa=Rn(wa,t,e,a,l,n),!0;case"mouseover":return Ta=Rn(Ta,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return On.set(i,Rn(On.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Cn.set(i,Rn(Cn.get(i)||null,t,e,a,l,n)),!0}return!1}function Jm(t){var e=tl(t.target);if(e!==null){var a=h(e);if(a!==null){if(e=a.tag,e===13){if(e=p(a),e!==null){t.blockedOn=e,oc(t.priority,function(){Vm(a)});return}}else if(e===31){if(e=z(a),e!==null){t.blockedOn=e,oc(t.priority,function(){Vm(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Or(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Ou=l,a.target.dispatchEvent(l),Ou=null}else return e=el(a),e!==null&&Zm(e),t.blockedOn=a,!1;e.shift()}return!0}function Wm(t,e,a){Pi(t)&&a.delete(e)}function ih(){Rr=!1,ja!==null&&Pi(ja)&&(ja=null),wa!==null&&Pi(wa)&&(wa=null),Ta!==null&&Pi(Ta)&&(Ta=null),On.forEach(Wm),Cn.forEach(Wm)}function tu(t,e){t.blockedOn===e&&(t.blockedOn=null,Rr||(Rr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,ih)))}var eu=null;function $m(t){eu!==t&&(eu=t,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){eu===t&&(eu=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(Cr(l||a)===null)continue;break}var i=el(a);i!==null&&(t.splice(e,3),e-=3,Oo(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Hl(t){function e(g){return tu(g,t)}ja!==null&&tu(ja,t),wa!==null&&tu(wa,t),Ta!==null&&tu(Ta,t),On.forEach(e),Cn.forEach(e);for(var a=0;a<Aa.length;a++){var l=Aa[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)Jm(a),a.blockedOn===null&&Aa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],o=n[$t]||null;if(typeof i=="function")o||$m(a);else if(o){var m=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[$t]||null)m=o.formAction;else if(Cr(n)!==null)continue}else m=o.action;typeof m=="function"?a[l+1]=m:(a.splice(l,3),l-=3),$m(a)}}}function Fm(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function Mr(t){this._internalRoot=t}au.prototype.render=Mr.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var a=e.current,l=me();Xm(a,l,t,e,null,null)},au.prototype.unmount=Mr.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xm(t.current,2,null,t,null,null),Hi(),e[Pa]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=uc();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Aa.length&&e!==0&&e<Aa[a].priority;a++);Aa.splice(a,0,t),a===0&&Jm(t)}};var Im=c.version;if(Im!=="19.2.3")throw Error(r(527,Im,"19.2.3"));H.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=x(e),t=t!==null?N(t):null,t=t===null?null:t.stateNode,t};var uh={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{Yl=lu.inject(uh),ne=lu}catch{}}return Dn.createRoot=function(t,e){if(!d(t))throw Error(r(299));var a=!1,l="",n=nf,i=uf,o=of;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=Lm(t,1,!1,null,null,a,l,null,n,i,o,Fm),t[Pa]=e.current,dr(t),new Mr(e)},Dn.hydrateRoot=function(t,e,a){if(!d(t))throw Error(r(299));var l=!1,n="",i=nf,o=uf,m=of,g=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(g=a.formState)),e=Lm(t,1,!0,e,a??null,l,n,g,i,o,m,Fm),e.context=Gm(null),a=e.current,l=me(),l=Su(l),n=ma(l),n.callback=null,da(a,n,l),a=l,e.current.lanes=a,Gl(e,a),Ue(e),t[Pa]=e.current,dr(t),new au(e)},Dn.version="19.2.3",Dn}var rd;function xh(){if(rd)return Ur.exports;rd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),Ur.exports=gh(),Ur.exports}var vh=xh();var cd="popstate";function yh(u={}){function c(d,h){let{pathname:p="/",search:z="",hash:v=""}=$a(d.location.hash.substring(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),Xr("",{pathname:p,search:z,hash:v},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function f(d,h){let p=d.document.querySelector("base"),z="";if(p&&p.getAttribute("href")){let v=d.location.href,x=v.indexOf("#");z=x===-1?v:v.slice(0,x)}return z+"#"+(typeof h=="string"?h:Hn(h))}function r(d,h){we(d.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`)}return Sh(c,f,r,u)}function wt(u,c){if(u===!1||u===null||typeof u>"u")throw new Error(c)}function we(u,c){if(!u){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function bh(){return Math.random().toString(36).substring(2,10)}function sd(u,c){return{usr:u.state,key:u.key,idx:c}}function Xr(u,c,f=null,r){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof c=="string"?$a(c):c,state:f,key:c&&c.key||r||bh()}}function Hn({pathname:u="/",search:c="",hash:f=""}){return c&&c!=="?"&&(u+=c.charAt(0)==="?"?c:"?"+c),f&&f!=="#"&&(u+=f.charAt(0)==="#"?f:"#"+f),u}function $a(u){let c={};if(u){let f=u.indexOf("#");f>=0&&(c.hash=u.substring(f),u=u.substring(0,f));let r=u.indexOf("?");r>=0&&(c.search=u.substring(r),u=u.substring(0,r)),u&&(c.pathname=u)}return c}function Sh(u,c,f,r={}){let{window:d=document.defaultView,v5Compat:h=!1}=r,p=d.history,z="POP",v=null,x=N();x==null&&(x=0,p.replaceState({...p.state,idx:x},""));function N(){return(p.state||{idx:null}).idx}function T(){z="POP";let Q=N(),Z=Q==null?null:Q-x;x=Q,v&&v({action:z,location:K.location,delta:Z})}function U(Q,Z){z="PUSH";let V=Xr(K.location,Q,Z);f&&f(V,Q),x=N()+1;let $=sd(V,x),jt=K.createHref(V);try{p.pushState($,"",jt)}catch(bt){if(bt instanceof DOMException&&bt.name==="DataCloneError")throw bt;d.location.assign(jt)}h&&v&&v({action:z,location:K.location,delta:1})}function X(Q,Z){z="REPLACE";let V=Xr(K.location,Q,Z);f&&f(V,Q),x=N();let $=sd(V,x),jt=K.createHref(V);p.replaceState($,"",jt),h&&v&&v({action:z,location:K.location,delta:0})}function L(Q){return zh(Q)}let K={get action(){return z},get location(){return u(d,p)},listen(Q){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(cd,T),v=Q,()=>{d.removeEventListener(cd,T),v=null}},createHref(Q){return c(d,Q)},createURL:L,encodeLocation(Q){let Z=L(Q);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:U,replace:X,go(Q){return p.go(Q)}};return K}function zh(u,c=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),wt(f,"No window.location.(origin|href) available to create URL");let r=typeof u=="string"?u:Hn(u);return r=r.replace(/ $/,"%20"),!c&&r.startsWith("//")&&(r=f+r),new URL(r,f)}function xd(u,c,f="/"){return Eh(u,c,f,!1)}function Eh(u,c,f,r){let d=typeof c=="string"?$a(c):c,h=aa(d.pathname||"/",f);if(h==null)return null;let p=vd(u);jh(p);let z=null;for(let v=0;z==null&&v<p.length;++v){let x=Uh(h);z=Dh(p[v],x,r)}return z}function vd(u,c=[],f=[],r="",d=!1){let h=(p,z,v=d,x)=>{let N={relativePath:x===void 0?p.path||"":x,caseSensitive:p.caseSensitive===!0,childrenIndex:z,route:p};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(r)&&v)return;wt(N.relativePath.startsWith(r),`Absolute route path "${N.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(r.length)}let T=ea([r,N.relativePath]),U=f.concat(N);p.children&&p.children.length>0&&(wt(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),vd(p.children,c,U,T,v)),!(p.path==null&&!p.index)&&c.push({path:T,score:Rh(T,p.index),routesMeta:U})};return u.forEach((p,z)=>{if(p.path===""||!p.path?.includes("?"))h(p,z);else for(let v of yd(p.path))h(p,z,!0,v)}),c}function yd(u){let c=u.split("/");if(c.length===0)return[];let[f,...r]=c,d=f.endsWith("?"),h=f.replace(/\?$/,"");if(r.length===0)return d?[h,""]:[h];let p=yd(r.join("/")),z=[];return z.push(...p.map(v=>v===""?h:[h,v].join("/"))),d&&z.push(...p),z.map(v=>u.startsWith("/")&&v===""?"/":v)}function jh(u){u.sort((c,f)=>c.score!==f.score?f.score-c.score:Mh(c.routesMeta.map(r=>r.childrenIndex),f.routesMeta.map(r=>r.childrenIndex)))}var wh=/^:[\w-]+$/,Th=3,Ah=2,Nh=1,Oh=10,Ch=-2,fd=u=>u==="*";function Rh(u,c){let f=u.split("/"),r=f.length;return f.some(fd)&&(r+=Ch),c&&(r+=Ah),f.filter(d=>!fd(d)).reduce((d,h)=>d+(wh.test(h)?Th:h===""?Nh:Oh),r)}function Mh(u,c){return u.length===c.length&&u.slice(0,-1).every((r,d)=>r===c[d])?u[u.length-1]-c[c.length-1]:0}function Dh(u,c,f=!1){let{routesMeta:r}=u,d={},h="/",p=[];for(let z=0;z<r.length;++z){let v=r[z],x=z===r.length-1,N=h==="/"?c:c.slice(h.length)||"/",T=ou({path:v.relativePath,caseSensitive:v.caseSensitive,end:x},N),U=v.route;if(!T&&x&&f&&!r[r.length-1].route.index&&(T=ou({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},N)),!T)return null;Object.assign(d,T.params),p.push({params:d,pathname:ea([h,T.pathname]),pathnameBase:Yh(ea([h,T.pathnameBase])),route:U}),T.pathnameBase!=="/"&&(h=ea([h,T.pathnameBase]))}return p}function ou(u,c){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[f,r]=_h(u.path,u.caseSensitive,u.end),d=c.match(f);if(!d)return null;let h=d[0],p=h.replace(/(.)\/+$/,"$1"),z=d.slice(1);return{params:r.reduce((x,{paramName:N,isOptional:T},U)=>{if(N==="*"){let L=z[U]||"";p=h.slice(0,h.length-L.length).replace(/(.)\/+$/,"$1")}const X=z[U];return T&&!X?x[N]=void 0:x[N]=(X||"").replace(/%2F/g,"/"),x},{}),pathname:h,pathnameBase:p,pattern:u}}function _h(u,c=!1,f=!0){we(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let r=[],d="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,z,v)=>(r.push({paramName:z,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(r.push({paramName:"*"}),d+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?d+="\\/*$":u!==""&&u!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,c?void 0:"i"),r]}function Uh(u){try{return u.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return we(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),u}}function aa(u,c){if(c==="/")return u;if(!u.toLowerCase().startsWith(c.toLowerCase()))return null;let f=c.endsWith("/")?c.length-1:c.length,r=u.charAt(f);return r&&r!=="/"?null:u.slice(f)||"/"}var bd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hh=u=>bd.test(u);function Bh(u,c="/"){let{pathname:f,search:r="",hash:d=""}=typeof u=="string"?$a(u):u,h;if(f)if(Hh(f))h=f;else{if(f.includes("//")){let p=f;f=f.replace(/\/\/+/g,"/"),we(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${f}`)}f.startsWith("/")?h=md(f.substring(1),"/"):h=md(f,c)}else h=c;return{pathname:h,search:Lh(r),hash:Gh(d)}}function md(u,c){let f=c.replace(/\/+$/,"").split("/");return u.split("/").forEach(d=>{d===".."?f.length>1&&f.pop():d!=="."&&f.push(d)}),f.length>1?f.join("/"):"/"}function Yr(u,c,f,r){return`Cannot include a '${u}' character in a manually specified \`to.${c}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function qh(u){return u.filter((c,f)=>f===0||c.route.path&&c.route.path.length>0)}function Sd(u){let c=qh(u);return c.map((f,r)=>r===c.length-1?f.pathname:f.pathnameBase)}function zd(u,c,f,r=!1){let d;typeof u=="string"?d=$a(u):(d={...u},wt(!d.pathname||!d.pathname.includes("?"),Yr("?","pathname","search",d)),wt(!d.pathname||!d.pathname.includes("#"),Yr("#","pathname","hash",d)),wt(!d.search||!d.search.includes("#"),Yr("#","search","hash",d)));let h=u===""||d.pathname==="",p=h?"/":d.pathname,z;if(p==null)z=f;else{let T=c.length-1;if(!r&&p.startsWith("..")){let U=p.split("/");for(;U[0]==="..";)U.shift(),T-=1;d.pathname=U.join("/")}z=T>=0?c[T]:"/"}let v=Bh(d,z),x=p&&p!=="/"&&p.endsWith("/"),N=(h||p===".")&&f.endsWith("/");return!v.pathname.endsWith("/")&&(x||N)&&(v.pathname+="/"),v}var ea=u=>u.join("/").replace(/\/\/+/g,"/"),Yh=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),Lh=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,Gh=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,Xh=class{constructor(u,c,f,r=!1){this.status=u,this.statusText=c||"",this.internal=r,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function Qh(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function Zh(u){return u.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ed=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function jd(u,c){let f=u;if(typeof f!="string"||!bd.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let r=f,d=!1;if(Ed)try{let h=new URL(window.location.href),p=f.startsWith("//")?new URL(h.protocol+f):new URL(f),z=aa(p.pathname,c);p.origin===h.origin&&z!=null?f=z+p.search+p.hash:d=!0}catch{we(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:d,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var wd=["POST","PUT","PATCH","DELETE"];new Set(wd);var Vh=["GET",...wd];new Set(Vh);var Bl=A.createContext(null);Bl.displayName="DataRouter";var su=A.createContext(null);su.displayName="DataRouterState";var kh=A.createContext(!1),Td=A.createContext({isTransitioning:!1});Td.displayName="ViewTransition";var Kh=A.createContext(new Map);Kh.displayName="Fetchers";var Jh=A.createContext(null);Jh.displayName="Await";var Te=A.createContext(null);Te.displayName="Navigation";var Bn=A.createContext(null);Bn.displayName="Location";var la=A.createContext({outlet:null,matches:[],isDataRoute:!1});la.displayName="Route";var Vr=A.createContext(null);Vr.displayName="RouteError";var Ad="REACT_ROUTER_ERROR",Wh="REDIRECT",$h="ROUTE_ERROR_RESPONSE";function Fh(u){if(u.startsWith(`${Ad}:${Wh}:{`))try{let c=JSON.parse(u.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function Ih(u){if(u.startsWith(`${Ad}:${$h}:{`))try{let c=JSON.parse(u.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Xh(c.status,c.statusText,c.data)}catch{}}function Ph(u,{relative:c}={}){wt(qn(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:r}=A.useContext(Te),{hash:d,pathname:h,search:p}=Yn(u,{relative:c}),z=h;return f!=="/"&&(z=h==="/"?f:ea([f,h])),r.createHref({pathname:z,search:p,hash:d})}function qn(){return A.useContext(Bn)!=null}function Fa(){return wt(qn(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Bn).location}var Nd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Od(u){A.useContext(Te).static||A.useLayoutEffect(u)}function tg(){let{isDataRoute:u}=A.useContext(la);return u?dg():eg()}function eg(){wt(qn(),"useNavigate() may be used only in the context of a <Router> component.");let u=A.useContext(Bl),{basename:c,navigator:f}=A.useContext(Te),{matches:r}=A.useContext(la),{pathname:d}=Fa(),h=JSON.stringify(Sd(r)),p=A.useRef(!1);return Od(()=>{p.current=!0}),A.useCallback((v,x={})=>{if(we(p.current,Nd),!p.current)return;if(typeof v=="number"){f.go(v);return}let N=zd(v,JSON.parse(h),d,x.relative==="path");u==null&&c!=="/"&&(N.pathname=N.pathname==="/"?c:ea([c,N.pathname])),(x.replace?f.replace:f.push)(N,x.state,x)},[c,f,h,d,u])}A.createContext(null);function Yn(u,{relative:c}={}){let{matches:f}=A.useContext(la),{pathname:r}=Fa(),d=JSON.stringify(Sd(f));return A.useMemo(()=>zd(u,JSON.parse(d),r,c==="path"),[u,d,r,c])}function ag(u,c){return Cd(u,c)}function Cd(u,c,f,r,d){wt(qn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=A.useContext(Te),{matches:p}=A.useContext(la),z=p[p.length-1],v=z?z.params:{},x=z?z.pathname:"/",N=z?z.pathnameBase:"/",T=z&&z.route;{let V=T&&T.path||"";Md(x,!T||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let U=Fa(),X;if(c){let V=typeof c=="string"?$a(c):c;wt(N==="/"||V.pathname?.startsWith(N),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${N}" but pathname "${V.pathname}" was given in the \`location\` prop.`),X=V}else X=U;let L=X.pathname||"/",K=L;if(N!=="/"){let V=N.replace(/^\//,"").split("/");K="/"+L.replace(/^\//,"").split("/").slice(V.length).join("/")}let Q=xd(u,{pathname:K});we(T||Q!=null,`No routes matched location "${X.pathname}${X.search}${X.hash}" `),we(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${X.pathname}${X.search}${X.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=og(Q&&Q.map(V=>Object.assign({},V,{params:Object.assign({},v,V.params),pathname:ea([N,h.encodeLocation?h.encodeLocation(V.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?N:ea([N,h.encodeLocation?h.encodeLocation(V.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathnameBase])})),p,f,r,d);return c&&Z?A.createElement(Bn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...X},navigationType:"POP"}},Z):Z}function lg(){let u=mg(),c=Qh(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),f=u instanceof Error?u.stack:null,r="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:r},h={padding:"2px 4px",backgroundColor:r},p=null;return console.error("Error handled by React Router default ErrorBoundary:",u),p=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:h},"ErrorBoundary")," or"," ",A.createElement("code",{style:h},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},c),f?A.createElement("pre",{style:d},f):null,p)}var ng=A.createElement(lg,null),Rd=class extends A.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,c){return c.location!==u.location||c.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:c.error,location:c.location,revalidation:u.revalidation||c.revalidation}}componentDidCatch(u,c){this.props.onError?this.props.onError(u,c):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const f=Ih(u.digest);f&&(u=f)}let c=u!==void 0?A.createElement(la.Provider,{value:this.props.routeContext},A.createElement(Vr.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?A.createElement(ig,{error:u},c):c}};Rd.contextType=kh;var Lr=new WeakMap;function ig({children:u,error:c}){let{basename:f}=A.useContext(Te);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let r=Fh(c.digest);if(r){let d=Lr.get(c);if(d)throw d;let h=jd(r.location,f);if(Ed&&!Lr.get(c))if(h.isExternal||r.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:r.replace}));throw Lr.set(c,p),p}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return u}function ug({routeContext:u,match:c,children:f}){let r=A.useContext(Bl);return r&&r.static&&r.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=c.route.id),A.createElement(la.Provider,{value:u},f)}function og(u,c=[],f=null,r=null,d=null){if(u==null){if(!f)return null;if(f.errors)u=f.matches;else if(c.length===0&&!f.initialized&&f.matches.length>0)u=f.matches;else return null}let h=u,p=f?.errors;if(p!=null){let N=h.findIndex(T=>T.route.id&&p?.[T.route.id]!==void 0);wt(N>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,N+1))}let z=!1,v=-1;if(f)for(let N=0;N<h.length;N++){let T=h[N];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(v=N),T.route.id){let{loaderData:U,errors:X}=f,L=T.route.loader&&!U.hasOwnProperty(T.route.id)&&(!X||X[T.route.id]===void 0);if(T.route.lazy||L){z=!0,v>=0?h=h.slice(0,v+1):h=[h[0]];break}}}let x=f&&r?(N,T)=>{r(N,{location:f.location,params:f.matches?.[0]?.params??{},unstable_pattern:Zh(f.matches),errorInfo:T})}:void 0;return h.reduceRight((N,T,U)=>{let X,L=!1,K=null,Q=null;f&&(X=p&&T.route.id?p[T.route.id]:void 0,K=T.route.errorElement||ng,z&&(v<0&&U===0?(Md("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),L=!0,Q=null):v===U&&(L=!0,Q=T.route.hydrateFallbackElement||null)));let Z=c.concat(h.slice(0,U+1)),V=()=>{let $;return X?$=K:L?$=Q:T.route.Component?$=A.createElement(T.route.Component,null):T.route.element?$=T.route.element:$=N,A.createElement(ug,{match:T,routeContext:{outlet:N,matches:Z,isDataRoute:f!=null},children:$})};return f&&(T.route.ErrorBoundary||T.route.errorElement||U===0)?A.createElement(Rd,{location:f.location,revalidation:f.revalidation,component:K,error:X,children:V(),routeContext:{outlet:null,matches:Z,isDataRoute:!0},onError:x}):V()},null)}function kr(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rg(u){let c=A.useContext(Bl);return wt(c,kr(u)),c}function cg(u){let c=A.useContext(su);return wt(c,kr(u)),c}function sg(u){let c=A.useContext(la);return wt(c,kr(u)),c}function Kr(u){let c=sg(u),f=c.matches[c.matches.length-1];return wt(f.route.id,`${u} can only be used on routes that contain a unique "id"`),f.route.id}function fg(){return Kr("useRouteId")}function mg(){let u=A.useContext(Vr),c=cg("useRouteError"),f=Kr("useRouteError");return u!==void 0?u:c.errors?.[f]}function dg(){let{router:u}=rg("useNavigate"),c=Kr("useNavigate"),f=A.useRef(!1);return Od(()=>{f.current=!0}),A.useCallback(async(d,h={})=>{we(f.current,Nd),f.current&&(typeof d=="number"?await u.navigate(d):await u.navigate(d,{fromRouteId:c,...h}))},[u,c])}var dd={};function Md(u,c,f){!c&&!dd[u]&&(dd[u]=!0,we(!1,f))}A.memo(pg);function pg({routes:u,future:c,state:f,onError:r}){return Cd(u,void 0,f,r,c)}function Un(u){wt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hg({basename:u="/",children:c=null,location:f,navigationType:r="POP",navigator:d,static:h=!1,unstable_useTransitions:p}){wt(!qn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let z=u.replace(/^\/*/,"/"),v=A.useMemo(()=>({basename:z,navigator:d,static:h,unstable_useTransitions:p,future:{}}),[z,d,h,p]);typeof f=="string"&&(f=$a(f));let{pathname:x="/",search:N="",hash:T="",state:U=null,key:X="default"}=f,L=A.useMemo(()=>{let K=aa(x,z);return K==null?null:{location:{pathname:K,search:N,hash:T,state:U,key:X},navigationType:r}},[z,x,N,T,U,X,r]);return we(L!=null,`<Router basename="${z}"> is not able to match the URL "${x}${N}${T}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:A.createElement(Te.Provider,{value:v},A.createElement(Bn.Provider,{children:c,value:L}))}function gg({children:u,location:c}){return ag(Qr(u),c)}function Qr(u,c=[]){let f=[];return A.Children.forEach(u,(r,d)=>{if(!A.isValidElement(r))return;let h=[...c,d];if(r.type===A.Fragment){f.push.apply(f,Qr(r.props.children,h));return}wt(r.type===Un,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),wt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let p={id:r.props.id||h.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(p.children=Qr(r.props.children,h)),f.push(p)}),f}var iu="get",uu="application/x-www-form-urlencoded";function fu(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function xg(u){return fu(u)&&u.tagName.toLowerCase()==="button"}function vg(u){return fu(u)&&u.tagName.toLowerCase()==="form"}function yg(u){return fu(u)&&u.tagName.toLowerCase()==="input"}function bg(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Sg(u,c){return u.button===0&&(!c||c==="_self")&&!bg(u)}var nu=null;function zg(){if(nu===null)try{new FormData(document.createElement("form"),0),nu=!1}catch{nu=!0}return nu}var Eg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gr(u){return u!=null&&!Eg.has(u)?(we(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uu}"`),null):u}function jg(u,c){let f,r,d,h,p;if(vg(u)){let z=u.getAttribute("action");r=z?aa(z,c):null,f=u.getAttribute("method")||iu,d=Gr(u.getAttribute("enctype"))||uu,h=new FormData(u)}else if(xg(u)||yg(u)&&(u.type==="submit"||u.type==="image")){let z=u.form;if(z==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=u.getAttribute("formaction")||z.getAttribute("action");if(r=v?aa(v,c):null,f=u.getAttribute("formmethod")||z.getAttribute("method")||iu,d=Gr(u.getAttribute("formenctype"))||Gr(z.getAttribute("enctype"))||uu,h=new FormData(z,u),!zg()){let{name:x,type:N,value:T}=u;if(N==="image"){let U=x?`${x}.`:"";h.append(`${U}x`,"0"),h.append(`${U}y`,"0")}else x&&h.append(x,T)}}else{if(fu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=iu,r=null,d=uu,p=u}return h&&d==="text/plain"&&(p=h,h=void 0),{action:r,method:f.toLowerCase(),encType:d,formData:h,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Jr(u,c){if(u===!1||u===null||typeof u>"u")throw new Error(c)}function wg(u,c,f){let r=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return r.pathname==="/"?r.pathname=`_root.${f}`:c&&aa(r.pathname,c)==="/"?r.pathname=`${c.replace(/\/$/,"")}/_root.${f}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${f}`,r}async function Tg(u,c){if(u.id in c)return c[u.id];try{let f=await import(u.module);return c[u.id]=f,f}catch(f){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ag(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Ng(u,c,f){let r=await Promise.all(u.map(async d=>{let h=c.routes[d.route.id];if(h){let p=await Tg(h,f);return p.links?p.links():[]}return[]}));return Mg(r.flat(1).filter(Ag).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function pd(u,c,f,r,d,h){let p=(v,x)=>f[x]?v.route.id!==f[x].route.id:!0,z=(v,x)=>f[x].pathname!==v.pathname||f[x].route.path?.endsWith("*")&&f[x].params["*"]!==v.params["*"];return h==="assets"?c.filter((v,x)=>p(v,x)||z(v,x)):h==="data"?c.filter((v,x)=>{let N=r.routes[v.route.id];if(!N||!N.hasLoader)return!1;if(p(v,x)||z(v,x))return!0;if(v.route.shouldRevalidate){let T=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function Og(u,c,{includeHydrateFallback:f}={}){return Cg(u.map(r=>{let d=c.routes[r.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),f&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function Cg(u){return[...new Set(u)]}function Rg(u){let c={},f=Object.keys(u).sort();for(let r of f)c[r]=u[r];return c}function Mg(u,c){let f=new Set;return new Set(c),u.reduce((r,d)=>{let h=JSON.stringify(Rg(d));return f.has(h)||(f.add(h),r.push({key:h,link:d})),r},[])}function Dd(){let u=A.useContext(Bl);return Jr(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Dg(){let u=A.useContext(su);return Jr(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Wr=A.createContext(void 0);Wr.displayName="FrameworkContext";function _d(){let u=A.useContext(Wr);return Jr(u,"You must render this element inside a <HydratedRouter> element"),u}function _g(u,c){let f=A.useContext(Wr),[r,d]=A.useState(!1),[h,p]=A.useState(!1),{onFocus:z,onBlur:v,onMouseEnter:x,onMouseLeave:N,onTouchStart:T}=c,U=A.useRef(null);A.useEffect(()=>{if(u==="render"&&p(!0),u==="viewport"){let K=Z=>{Z.forEach(V=>{p(V.isIntersecting)})},Q=new IntersectionObserver(K,{threshold:.5});return U.current&&Q.observe(U.current),()=>{Q.disconnect()}}},[u]),A.useEffect(()=>{if(r){let K=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(K)}}},[r]);let X=()=>{d(!0)},L=()=>{d(!1),p(!1)};return f?u!=="intent"?[h,U,{}]:[h,U,{onFocus:_n(z,X),onBlur:_n(v,L),onMouseEnter:_n(x,X),onMouseLeave:_n(N,L),onTouchStart:_n(T,X)}]:[!1,U,{}]}function _n(u,c){return f=>{u&&u(f),f.defaultPrevented||c(f)}}function Ug({page:u,...c}){let{router:f}=Dd(),r=A.useMemo(()=>xd(f.routes,u,f.basename),[f.routes,u,f.basename]);return r?A.createElement(Bg,{page:u,matches:r,...c}):null}function Hg(u){let{manifest:c,routeModules:f}=_d(),[r,d]=A.useState([]);return A.useEffect(()=>{let h=!1;return Ng(u,c,f).then(p=>{h||d(p)}),()=>{h=!0}},[u,c,f]),r}function Bg({page:u,matches:c,...f}){let r=Fa(),{manifest:d,routeModules:h}=_d(),{basename:p}=Dd(),{loaderData:z,matches:v}=Dg(),x=A.useMemo(()=>pd(u,c,v,d,r,"data"),[u,c,v,d,r]),N=A.useMemo(()=>pd(u,c,v,d,r,"assets"),[u,c,v,d,r]),T=A.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let L=new Set,K=!1;if(c.forEach(Z=>{let V=d.routes[Z.route.id];!V||!V.hasLoader||(!x.some($=>$.route.id===Z.route.id)&&Z.route.id in z&&h[Z.route.id]?.shouldRevalidate||V.hasClientLoader?K=!0:L.add(Z.route.id))}),L.size===0)return[];let Q=wg(u,p,"data");return K&&L.size>0&&Q.searchParams.set("_routes",c.filter(Z=>L.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[Q.pathname+Q.search]},[p,z,r,d,x,c,u,h]),U=A.useMemo(()=>Og(N,d),[N,d]),X=Hg(N);return A.createElement(A.Fragment,null,T.map(L=>A.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...f})),U.map(L=>A.createElement("link",{key:L,rel:"modulepreload",href:L,...f})),X.map(({key:L,link:K})=>A.createElement("link",{key:L,nonce:f.nonce,...K})))}function qg(...u){return c=>{u.forEach(f=>{typeof f=="function"?f(c):f!=null&&(f.current=c)})}}var Yg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Yg&&(window.__reactRouterVersion="7.11.0")}catch{}function Lg({basename:u,children:c,unstable_useTransitions:f,window:r}){let d=A.useRef();d.current==null&&(d.current=yh({window:r,v5Compat:!0}));let h=d.current,[p,z]=A.useState({action:h.action,location:h.location}),v=A.useCallback(x=>{f===!1?z(x):A.startTransition(()=>z(x))},[f]);return A.useLayoutEffect(()=>h.listen(v),[h,v]),A.createElement(hg,{basename:u,children:c,location:p.location,navigationType:p.action,navigator:h,unstable_useTransitions:f})}var Ud=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,de=A.forwardRef(function({onClick:c,discover:f="render",prefetch:r="none",relative:d,reloadDocument:h,replace:p,state:z,target:v,to:x,preventScrollReset:N,viewTransition:T,unstable_defaultShouldRevalidate:U,...X},L){let{basename:K,unstable_useTransitions:Q}=A.useContext(Te),Z=typeof x=="string"&&Ud.test(x),V=jd(x,K);x=V.to;let $=Ph(x,{relative:d}),[jt,bt,Tt]=_g(r,X),I=Zg(x,{replace:p,state:z,target:v,preventScrollReset:N,relative:d,viewTransition:T,unstable_defaultShouldRevalidate:U,unstable_useTransitions:Q});function Ot(pe){c&&c(pe),pe.defaultPrevented||I(pe)}let Lt=A.createElement("a",{...X,...Tt,href:V.absoluteURL||$,onClick:V.isExternal||h?c:Ot,ref:qg(L,bt),target:v,"data-discover":!Z&&f==="render"?"true":void 0});return jt&&!Z?A.createElement(A.Fragment,null,Lt,A.createElement(Ug,{page:$})):Lt});de.displayName="Link";var Gg=A.forwardRef(function({"aria-current":c="page",caseSensitive:f=!1,className:r="",end:d=!1,style:h,to:p,viewTransition:z,children:v,...x},N){let T=Yn(p,{relative:x.relative}),U=Fa(),X=A.useContext(su),{navigator:L,basename:K}=A.useContext(Te),Q=X!=null&&Wg(T)&&z===!0,Z=L.encodeLocation?L.encodeLocation(T).pathname:T.pathname,V=U.pathname,$=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;f||(V=V.toLowerCase(),$=$?$.toLowerCase():null,Z=Z.toLowerCase()),$&&K&&($=aa($,K)||$);const jt=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let bt=V===Z||!d&&V.startsWith(Z)&&V.charAt(jt)==="/",Tt=$!=null&&($===Z||!d&&$.startsWith(Z)&&$.charAt(Z.length)==="/"),I={isActive:bt,isPending:Tt,isTransitioning:Q},Ot=bt?c:void 0,Lt;typeof r=="function"?Lt=r(I):Lt=[r,bt?"active":null,Tt?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let pe=typeof h=="function"?h(I):h;return A.createElement(de,{...x,"aria-current":Ot,className:Lt,ref:N,style:pe,to:p,viewTransition:z},typeof v=="function"?v(I):v)});Gg.displayName="NavLink";var Xg=A.forwardRef(({discover:u="render",fetcherKey:c,navigate:f,reloadDocument:r,replace:d,state:h,method:p=iu,action:z,onSubmit:v,relative:x,preventScrollReset:N,viewTransition:T,unstable_defaultShouldRevalidate:U,...X},L)=>{let{unstable_useTransitions:K}=A.useContext(Te),Q=Kg(),Z=Jg(z,{relative:x}),V=p.toLowerCase()==="get"?"get":"post",$=typeof z=="string"&&Ud.test(z),jt=bt=>{if(v&&v(bt),bt.defaultPrevented)return;bt.preventDefault();let Tt=bt.nativeEvent.submitter,I=Tt?.getAttribute("formmethod")||p,Ot=()=>Q(Tt||bt.currentTarget,{fetcherKey:c,method:I,navigate:f,replace:d,state:h,relative:x,preventScrollReset:N,viewTransition:T,unstable_defaultShouldRevalidate:U});K&&f!==!1?A.startTransition(()=>Ot()):Ot()};return A.createElement("form",{ref:L,method:V,action:Z,onSubmit:r?v:jt,...X,"data-discover":!$&&u==="render"?"true":void 0})});Xg.displayName="Form";function Qg(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hd(u){let c=A.useContext(Bl);return wt(c,Qg(u)),c}function Zg(u,{target:c,replace:f,state:r,preventScrollReset:d,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:z,unstable_useTransitions:v}={}){let x=tg(),N=Fa(),T=Yn(u,{relative:h});return A.useCallback(U=>{if(Sg(U,c)){U.preventDefault();let X=f!==void 0?f:Hn(N)===Hn(T),L=()=>x(u,{replace:X,state:r,preventScrollReset:d,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:z});v?A.startTransition(()=>L()):L()}},[N,x,T,f,r,c,u,d,h,p,z,v])}var Vg=0,kg=()=>`__${String(++Vg)}__`;function Kg(){let{router:u}=Hd("useSubmit"),{basename:c}=A.useContext(Te),f=fg(),r=u.fetch,d=u.navigate;return A.useCallback(async(h,p={})=>{let{action:z,method:v,encType:x,formData:N,body:T}=jg(h,c);if(p.navigate===!1){let U=p.fetcherKey||kg();await r(U,f,p.action||z,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:N,body:T,formMethod:p.method||v,formEncType:p.encType||x,flushSync:p.flushSync})}else await d(p.action||z,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:N,body:T,formMethod:p.method||v,formEncType:p.encType||x,replace:p.replace,state:p.state,fromRouteId:f,flushSync:p.flushSync,viewTransition:p.viewTransition})},[r,d,c,f])}function Jg(u,{relative:c}={}){let{basename:f}=A.useContext(Te),r=A.useContext(la);wt(r,"useFormAction must be used inside a RouteContext");let[d]=r.matches.slice(-1),h={...Yn(u||".",{relative:c})},p=Fa();if(u==null){h.search=p.search;let z=new URLSearchParams(h.search),v=z.getAll("index");if(v.some(N=>N==="")){z.delete("index"),v.filter(T=>T).forEach(T=>z.append("index",T));let N=z.toString();h.search=N?`?${N}`:""}}return(!u||u===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(h.pathname=h.pathname==="/"?f:ea([f,h.pathname])),Hn(h)}function Wg(u,{relative:c}={}){let f=A.useContext(Td);wt(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Hd("useViewTransitionState"),d=Yn(u,{relative:c});if(!f.isTransitioning)return!1;let h=aa(f.currentLocation.pathname,r)||f.currentLocation.pathname,p=aa(f.nextLocation.pathname,r)||f.nextLocation.pathname;return ou(d.pathname,p)!=null||ou(d.pathname,h)!=null}const mu=()=>{const[u,c]=A.useState(!1),f=A.useRef(null),r=()=>{c(!u)};A.useEffect(()=>{const h=p=>{f.current&&!f.current.contains(p.target)&&c(!1)};return document.addEventListener("click",h),()=>{document.removeEventListener("click",h)}},[]);const d=()=>{c(!1)};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        // In your Navbar component's <style> tag, change:
html {
  height: auto;
  scroll-behavior: auto;  /* Change from smooth to auto */
}


        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          background-color: #f8f9fa;
        }

        nav {
         background-color: #ffffff;
         padding: 0.8rem 5rem;
         box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
         position: sticky;  /* Change from fixed to sticky */
         top: 0;
         width: 100%;
         z-index: 1000;
        }


        .nav-container {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0.5rem 1rem;
        }

        .logo img {
          max-height: 50px;
          width: auto;
          display: block;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
        }

        .nav-links a {
          color: #333;
          text-decoration: none;
          font-size: 1.3rem;
          font-weight: 500;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .nav-links a:hover {
          background-color: #f0f0f0;
          color: #d43737;
        }

        .menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          padding: 0.1rem;
          color: #333;
          position: absolute;
          right: 1rem;
          cursor: pointer;
          width: 30px;
          text-align: center;
          line-height: 1;
          z-index: 1002;
        }

        /* 1538px breakpoint */
        @media (max-width: 1538px) {
          .nav-container {
            max-width: 1280px;
          }
          .logo {
            font-size: 1.4rem;
          }
          .nav-links a {
            font-size: 1.2rem;
          }
        }

        /* 1280px breakpoint */
        @media (max-width: 1280px) {
          nav {
            padding: 0.8rem 4rem;
          }
          .nav-container {
            max-width: 1024px;
          }
          .logo {
            font-size: 1.2rem;
          }
          .logo img {
            max-height: 45px;
          }
          .nav-links a {
            font-size: 1rem;
          }
        }

        /* 1025px breakpoint */
        @media (max-width: 1025px) {
          nav {
            padding: 0.8rem 3rem;
          }
          .nav-container {
            max-width: 900px;
          }
          .logo img {
            max-height: 40px;
          }
          .nav-links {
            gap: 1.2rem;
          }
        }

        /* 768px breakpoint - HAMBURGER MENU STARTS HERE */
        @media (max-width: 768px) {
          nav {
            padding: 0.8rem 2rem;
          }
          
          .menu-btn {
            display: block;
          }
          
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            width: 90%;
            margin: 0 auto;
            background: white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            border-radius: 8px;
            z-index: 1001;
            gap: 0;
          }
          
          .nav-links.active {
            display: flex;
          }
          
          .nav-links li {
            width: 100%;
            text-align: center;
            border-bottom: 1px solid #f0f0f0;
          }
          
          .nav-links li:last-child {
            border-bottom: none;
          }
          
          .nav-links a {
            display: block;
            width: 100%;
            padding: 0.8rem 1rem;
            font-size: 1rem;
          }
          
          .logo img {
            max-height: 38px;
          }
        }

        /* 640px breakpoint */
        @media (max-width: 640px) {
          nav {
            padding: 0.8rem 1.5rem;
          }
          
          .logo img {
            max-height: 36px;
          }
          
          .nav-links {
            top: 55px;
          }
        }

        /* 470px breakpoint */
        @media (max-width: 470px) {
          nav {
            padding: 0.8rem 1.2rem;
          }
          
          .logo {
            padding: 0.5rem 0;
            padding-left: 0;
          }
          
          .logo img {
            max-height: 35px;
          }
          
          .menu-btn {
            font-size: 1.3rem;
            right: 1rem;
          }
        }

        /* 425px breakpoint */
        @media (max-width: 425px) {
          nav {
            padding: 0.8rem 1rem;
          }
          
          .logo img {
            max-height: 32px;
          }
        }

        /* 375px breakpoint */
        @media (max-width: 375px) {
          nav {
            padding: 0.8rem 0.8rem;
          }
          
          .logo img {
            max-height: 30px;
          }
          
          .menu-btn {
            font-size: 1.2rem;
          }
        }

        /* 320px breakpoint */
        @media (max-width: 320px) {
          nav {
            padding: 0.8rem 0.5rem;
          }
          
          .logo img {
            max-height: 28px;
          }
          
          .menu-btn {
            font-size: 1.1rem;
            right: 0.5rem;
          }
          
          .nav-links {
            width: 95%;
            padding: 0.8rem;
          }
          
          .nav-links a {
            font-size: 0.9rem;
            padding: 0.7rem 0.8rem;
          }
        }
      `}),s.jsx("nav",{children:s.jsxs("div",{className:"nav-container",ref:f,children:[s.jsx(de,{to:"/",className:"logo",children:s.jsx("img",{src:"img/merit logo.png",alt:"Logo"})}),s.jsx("button",{className:"menu-btn",onClick:r,children:u?"✕":"☰"}),s.jsxs("ul",{className:`nav-links ${u?"active":""}`,children:[s.jsx("li",{children:s.jsx(de,{to:"/",onClick:d,children:"Home"})}),s.jsx("li",{children:s.jsx(de,{to:"/price",onClick:d,children:"Pricing"})}),s.jsx("li",{children:s.jsx(de,{to:"/portfolio",onClick:d,children:"Portfolio"})}),s.jsx("li",{children:s.jsx(de,{to:"/about",onClick:d,children:"About"})})]})]})})]})},$g=()=>{const[u,c]=A.useState(0),f=A.useRef([]),r=1e4,d=A.useRef(null),h=[{video:"/merit-solution/vid/vedio1.mp4",hasOverlay:!1},{video:"/merit-solution/vid/vedio2.mp4",hasOverlay:!0,title:"Inspiring Design",description:"Elevate your digital presence with Merit Solution. Our innovative solutions create captivating experiences that truly engage your audience.",link:"#taofeek"}],p=N=>{c(N),f.current.forEach(X=>{const L=X?.querySelector("video");L&&L.pause()});const U=f.current[N]?.querySelector("video");U&&(U.currentTime=0,U.play())},z=()=>{const N=(u+1)%h.length;p(N)},v=()=>{d.current&&clearInterval(d.current),d.current=setInterval(z,r)},x=N=>{u!==N&&(p(N),v())};return A.useEffect(()=>{d.current=setInterval(z,r);const N=T=>{if(T.key==="ArrowLeft"){const U=(u-1+h.length)%h.length;p(U),v()}else if(T.key==="ArrowRight"){const U=(u+1)%h.length;p(U),v()}};return document.addEventListener("keydown",N),()=>{d.current&&clearInterval(d.current),document.removeEventListener("keydown",N)}},[u]),s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .fslider-container {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          margin-top: 0;
        }


        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          z-index: 1;
        }


        .slide.active {
          opacity: 1;
          z-index: 2;
        }


        .slide video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }


        .content-overlay {
          position: absolute;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          max-width: 600px;
          padding: 1rem;
          color: rgba(0, 0, 0, 0.829);
          z-index: 3;
          backdrop-filter: blur(5px);
          border-radius: 15px;
          animation: slideIn 3s ease-out;
        }


        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translate(100px, -50%);
          }
          to {
            opacity: 1;
            transform: translate(0, -50%);
          }
        }


        .content-overlay h2 {
          font-size: 4rem;
          line-height: 1;
          margin-bottom: 1rem;
          font-weight: 800;
          text-shadow: 2px 2px 4px rgba(240, 1, 1, 0.459);
        }


        .content-overlay p {
          font-size: 1rem;
          margin-bottom: 2rem;
          line-height: 1.6;
          text-shadow: 1px 1px 2px rgba(131, 122, 122, 0.3);
        }


        .cta-button {
          display: inline-block;
          padding: 14px 28px;
          background-color: #ff4d4d;
          color: rgb(255, 255, 255);
          text-decoration: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.4s ease;
          border: 2px solid transparent;
          text-transform: uppercase;
          letter-spacing: 1px;
        }


        .cta-button:hover {
          background-color: transparent;
          border-color: #ff4d4d;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
          color: #ff4d4d;
        }


        .slider-nav {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
          z-index: 3;
        }


        .slider-dot {
          width: 12px;
          height: 12px;
          border: 2px solid rgb(255, 255, 255);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.4s ease;
        }


        .slider-dot.active {
          background-color: #ff00008a;
          transform: scale(1.2);
        }


        @media (max-width: 768px) {
          .fslider-container { height: 80vh; }
          .slide video { height: 80vh; }
          .content-overlay {
            left: 50%;
            right: auto;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 50%;
          }
          .content-overlay h2 { font-size: 1.6rem; }
          .content-overlay p { font-size: 1rem; }
        }


        @media (max-width: 640px) {
          .fslider-container { height: 70vh; }
          .slide video { height: 70vh; }
          .content-overlay { display: none; }
        }


        @media (max-width: 470px) {
          .fslider-container { height: 60vh; }
          .slide video { height: 60vh; }
        }
      `}),s.jsxs("div",{className:"fslider-container",children:[h.map((N,T)=>s.jsxs("div",{ref:U=>f.current[T]=U,className:`slide ${u===T?"active":""}`,children:[s.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:s.jsx("source",{src:N.video,type:"video/mp4"})}),N.hasOverlay&&s.jsxs("div",{className:"content-overlay",children:[s.jsx("h2",{children:N.title}),s.jsx("p",{children:N.description}),s.jsx("a",{href:N.link,className:"cta-button",children:"Explore More"})]})]},T)),s.jsx("div",{className:"slider-nav",children:h.map((N,T)=>s.jsx("div",{className:`slider-dot ${u===T?"active":""}`,onClick:()=>x(T)},T))})]})]})};function Fg(){const[u,c]=A.useState(null),f=[{icon:"fas fa-chart-line",title:"SEO Optimization",description:"Boost your website's visibility with our expert SEO services to rank higher and attract more organic traffic."},{icon:"fas fa-paint-brush",title:"UI/UX Design",description:"Create stunning user experiences that engage visitors and convert them into loyal customers."},{icon:"fas fa-laptop-code",title:"Website Design",description:"Custom websites that perfectly reflect your brand identity while delivering exceptional performance."},{icon:"fas fa-hashtag",title:"Social Media",description:"Engage your audience across all platforms with strategic content that builds brand loyalty."},{icon:"fas fa-pen-fancy",title:"Content Writing",description:"Engage, inform, and inspire your audience with powerful, SEO-optimized content."},{icon:"fas fa-palette",title:"Graphics Design",description:"Creative visual solutions that captivate your audience and elevate your brand identity."}];return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .services-wrapper {
          background: white;
          padding: 80px 20px;
        }

        .services-container {
          max-width: 1265px;
          margin: 0 auto;
        }

        .services-intro {
          text-align: center;
          margin-bottom: 60px;
        }

        @keyframes continuousPopUp {
          0%, 100% {
            transform: scale(1) translateY(0);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          }
          10% {
            transform: scale(1.08) translateY(-10px);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          }
          20% {
            transform: scale(1) translateY(0);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          }
        }

        .services-main-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 25px;
          position: relative;
        }

        .services-subtitle {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #555;
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .services-grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service-card-item {
          background: #f8f9fa;
          border-radius: 20px;
          padding: 40px 30px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
          animation: continuousPopUp 6s ease-in-out infinite;
        }

        .service-card-item:nth-child(1) {
          animation-delay: 0s;
        }

        .service-card-item:nth-child(2) {
          animation-delay: 1s;
        }

        .service-card-item:nth-child(3) {
          animation-delay: 2s;
        }

        .service-card-item:nth-child(4) {
          animation-delay: 3s;
        }

        .service-card-item:nth-child(5) {
          animation-delay: 4s;
        }

        .service-card-item:nth-child(6) {
          animation-delay: 5s;
        }

        .service-card-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 77, 77, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .service-card-item:hover {
          animation-play-state: paused;
          transform: translateY(-12px) scale(1.02) !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15) !important;
        }

        .service-card-item:hover::before {
          left: 100%;
        }

        .service-icon-box {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ff4d4d, #ff8080);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          transition: all 0.4s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .service-card-item:hover .service-icon-box {
          transform: rotate(360deg) scale(1.1);
          background: linear-gradient(135deg, #ff8080, #ff4d4d);
        }

        .service-icon-box i {
          color: white;
          font-size: 2rem;
        }

        .service-card-title {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .service-card-description {
          color: #666;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        /* Tablet - 768px to 1024px */
        @media (max-width: 1024px) {
          .services-wrapper {
            padding: 60px 30px;
          }

          .services-grid-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        /* Mobile - below 768px */
        @media (max-width: 768px) {
          .services-wrapper {
            padding: 50px 20px;
          }

          .services-intro {
            margin-bottom: 40px;
          }

          .services-grid-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .service-card-item {
            padding: 30px 25px;
          }

          .service-icon-box {
            width: 70px;
            height: 70px;
          }

          .service-icon-box i {
            font-size: 1.7rem;
          }

          .service-card-title {
            font-size: 1.3rem;
          }

          .service-card-description {
            font-size: 1rem;
          }
        }

        /* Small Mobile - below 480px */
        @media (max-width: 480px) {
          .services-wrapper {
            padding: 40px 15px;
          }

          .service-card-item {
            padding: 25px 20px;
          }

          .service-icon-box {
            width: 60px;
            height: 60px;
          }

          .service-icon-box i {
            font-size: 1.5rem;
          }
        }
      `}),s.jsx("section",{className:"services-wrapper",children:s.jsxs("div",{className:"services-container",children:[s.jsxs("div",{className:"services-intro",children:[s.jsx("h2",{className:"services-main-title",children:"Our Digital Services"}),s.jsx("p",{className:"services-subtitle",children:"We offer a comprehensive suite of digital services designed to help your business thrive in the online world. From creating stunning websites and optimizing them for search engines to managing your social media presence, our team of experts is here to help you achieve your digital goals."})]}),s.jsx("div",{className:"services-grid-container",children:f.map((r,d)=>s.jsxs("div",{className:"service-card-item",onMouseEnter:()=>c(d),onMouseLeave:()=>c(null),children:[s.jsx("div",{className:"service-icon-box",children:s.jsx("i",{className:r.icon})}),s.jsx("h3",{className:"service-card-title",children:r.title}),s.jsx("p",{className:"service-card-description",children:r.description})]},d))})]})})]})}function Ig(){const[u,c]=A.useState(0),f=["/merit-solution/img/design-1210160_1920.jpg","/merit-solution/img/seo-1210158_1920.jpg","/merit-solution/img/web.jpg","/merit-solution/img/internet-2224603_1920.jpg"];A.useEffect(()=>{const h=setInterval(()=>{c(p=>(p+1)%f.length)},5e3);return()=>clearInterval(h)},[f.length]);const r=h=>{c(h)},d={section:{padding:"0 20px",backgroundColor:"#f8f9fa",display:"flex",justifyContent:"center",marginTop:"120px"},container:{maxWidth:"1265px",backgroundColor:"#660000",borderRadius:"10px",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.1)",overflow:"hidden",display:"flex",flexWrap:"wrap"},textContent:{flex:1,minWidth:"300px",padding:"60px",display:"flex",flexDirection:"column",justifyContent:"center"},title:{fontSize:"clamp(1.5rem, 4vw, 2.5rem)",marginBottom:"25px",color:"#ffffff"},paragraph:{marginBottom:"20px",color:"#ffffff",lineHeight:1.7,fontSize:"clamp(1rem, 2.5vw, 1.2rem)"},carouselWrapper:{flex:1,minWidth:"400px",position:"relative",overflow:"hidden",minHeight:"500px"},carouselContainer:{width:"100%",height:"100%",position:"relative"},slideImage:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",opacity:0,transition:"opacity 1s ease-in-out"},slideImageActive:{opacity:1},dotsContainer:{position:"absolute",bottom:"30px",left:0,right:0,display:"flex",justifyContent:"center",gap:"12px",zIndex:10},dot:{width:"14px",height:"14px",borderRadius:"50%",backgroundColor:"#ff4d4d",cursor:"pointer",transition:"background-color 0.3s"},dotActive:{backgroundColor:"white"}};return s.jsx("section",{style:d.section,children:s.jsxs("div",{style:d.container,children:[s.jsxs("div",{style:d.textContent,children:[s.jsx("h2",{style:d.title,children:"Our Amazing Features"}),s.jsx("p",{style:d.paragraph,children:"At Merits Solutions, we craft responsive, mobile-friendly websites with custom layouts that reflect your brand's unique identity. We integrate SEO best practices, fast load times, and easy-to-use content management systems—giving you full control of your site. Your website will be secure, with SSL protection, privacy policy setup, and spam prevention built in."}),s.jsx("p",{style:d.paragraph,children:"To boost engagement, we offer features like contact forms, live chat, newsletter signup, and seamless social media integration. Need more? We provide e-commerce solutions, booking systems, portfolios, blogs, and client testimonials. Plus, we offer premium add-ons like custom animations, multilingual support, performance tracking, and ongoing maintenance plans."})]}),s.jsxs("div",{style:d.carouselWrapper,children:[s.jsx("div",{style:d.carouselContainer,children:f.map((h,p)=>s.jsx("img",{src:h,alt:`Feature ${p+1}`,style:{...d.slideImage,...u===p?d.slideImageActive:{}}},p))}),s.jsx("div",{style:d.dotsContainer,children:f.map((h,p)=>s.jsx("span",{onClick:()=>r(p),onMouseEnter:z=>z.target.style.backgroundColor="rgba(255, 255, 255, 0.8)",onMouseLeave:z=>z.target.style.backgroundColor=u===p?"white":"#ff4d4d",style:{...d.dot,...u===p?d.dotActive:{}}},p))})]})]})})}function Pg(){const[u,c]=A.useState([]),f=A.useRef([]);A.useEffect(()=>{const h={root:null,rootMargin:"0px",threshold:.1},p=new IntersectionObserver(z=>{z.forEach(v=>{if(!v.isIntersecting)return;const x=f.current.indexOf(v.target);x!==-1&&c(N=>N.includes(x)?N:[...N,x]),p.unobserve(v.target)})},h);return f.current.forEach(z=>z&&p.observe(z)),()=>p.disconnect()},[]);const r=h=>{const p=f.current[h];p&&(p.style.transform="translateY(-2px) scale(1.01)",setTimeout(()=>{p.style.transform=""},180))},d=[{number:"STEP 1",title:"Creative Briefing",description:`In this free consultation, we'll discuss your goals and project 
details to ensure we understand your vision. If you're ready to move forward, we'll 
schedule a follow-up call to plan the next steps.`,image:"img/people-working-together-animation-studio.jpg",alt:"Creative Briefing"},{number:"STEP 2",title:"Strategic Planning",description:`Once you decide to move forward with your project, we'll have a call to 
review the details and outline everything needed to bring your vision to life.`,image:"img/business-corporate-people-working-concept.jpg",alt:"Strategic Planning"},{number:"STEP 3",title:"Project",description:`Once we have all the necessary details, we'll begin your project promptly. 
After completing the first draft, we'll send a request to schedule a call to review 
the finished work together.`,image:"img/student-849822_1280.jpg",alt:"Project Execution"}];return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .stgs-section {
          background-color: #f5f7fb;
          padding: clamp(35px, 6vw, 80px) clamp(10px, 3vw, 20px) clamp(45px, 7vw, 90px);
        }

        .stgs-inner {
          width: 100%;
          max-width: 1265px;
          margin: 0 auto;
        }

        .stgs-title {
          text-align: center;
          font-size: clamp(1.6rem, 4vw, 3.3rem);
          color: #2f3b46;
          margin: 0 0 clamp(22px, 3.5vw, 45px);
          font-weight: 800;
          letter-spacing: 0.2px;
        }

        .stgs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: clamp(18px, 2vw, 20px);
          justify-content: center;
        }

        @media (min-width: 768px) {
          .stgs-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .stgs-card {
          background-color: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 26px rgba(16, 24, 40, 0.12);
          cursor: pointer;
          transition: transform 180ms ease, box-shadow 180ms ease;
          opacity: 0;
          transform: translateY(18px);
        }

        .stgs-card.active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 700ms ease, transform 700ms ease;
        }

        .stgs-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 34px rgba(16, 24, 40, 0.16);
        }

        .stgs-img {
          width: 100%;
          height: clamp(140px, 20vw, 185px);
          object-fit: cover;
          display: block;
        }

        .stgs-body {
          padding: clamp(16px, 2vw, 22px) clamp(16px, 2vw, 22px) clamp(20px, 2.5vw, 26px);
          text-align: center;
        }

        .stgs-pill {
          display: inline-block;
          background-color: #ff4d4d;
          color: #fff;
          font-weight: 700;
          font-size: clamp(11px, 1.2vw, 14px);
          padding: clamp(7px, 1vw, 10px) clamp(14px, 1.8vw, 20px);
          border-radius: 8px;
          margin-top: 4px;
          margin-bottom: clamp(10px, 1.2vw, 14px);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          box-shadow: 0 10px 25px rgba(255, 77, 77, 0.35);
          transition: all 0.3s ease;
        }

        .stgs-pill:hover {
          background-color: #e60000;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(255, 77, 77, 0.4);
        }

        .stgs-card-title {
          margin: 0 0 12px;
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 800;
          color: #2f3b46;
        }

        .stgs-desc {
          margin: 0;
          color: #6b7280;
          line-height: 1.7;
          font-size: clamp(13px, 1.4vw, 15.5px);
          white-space: pre-line;
        }

        .stgs-button-wrap {
          text-align: center;
          margin-top: clamp(28px, 4vw, 50px);
        }

        .cta-button {
          display: inline-block;
          padding: clamp(12px, 1.5vw, 14px) clamp(22px, 2.5vw, 28px);
          background-color: #ff4d4d;
          color: rgb(255, 255, 255);
          text-decoration: none;
          border-radius: 8px;
          font-size: clamp(0.8rem, 1vw, 0.9rem);
          font-weight: 600;
          transition: all 0.4s ease;
          border: 2px solid transparent;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
        }

        .cta-button:hover {
          background-color: transparent !important;
          border-color: #ff4d4d !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3) !important;
          color: #ff4d4d !important;
        }

        /* Ensures 3-column layout from tablet to desktop */
        @media (max-width: 767px) {
          .stgs-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }
        }
      `}),s.jsx("section",{className:"stgs-section",children:s.jsxs("div",{className:"stgs-inner",children:[s.jsx("h2",{className:"stgs-title",children:"Steps to Get Started"}),s.jsx("div",{className:"stgs-grid",children:d.map((h,p)=>s.jsxs("div",{ref:z=>f.current[p]=z,className:`stgs-card ${u.includes(p)?"active":""}`,onClick:()=>r(p),children:[s.jsx("img",{src:h.image,alt:h.alt,className:"stgs-img"}),s.jsxs("div",{className:"stgs-body",children:[s.jsx("div",{className:"stgs-pill",children:h.number}),s.jsx("h3",{className:"stgs-card-title",children:h.title}),s.jsxs("p",{className:"stgs-desc",children:['"',h.description,'"']})]})]},p))}),s.jsx("div",{className:"stgs-button-wrap",children:s.jsx("a",{href:"#letgobook",className:"cta-button",children:"BOOK US NOW"})})]})})]})}function t1(){const[u,c]=A.useState([]),f=A.useRef([]);A.useEffect(()=>{const h={root:null,rootMargin:"0px",threshold:.2},p=new IntersectionObserver(z=>{z.forEach(v=>{if(v.isIntersecting){const x=f.current.indexOf(v.target);x!==-1&&!u.includes(x)&&c(N=>[...N,x]),p.unobserve(v.target)}})},h);return f.current.forEach(z=>z&&p.observe(z)),()=>p.disconnect()},[]);const r=[{title:"1. Research & Strategy",description:"Understanding your business needs and audience to create a strategy that aligns with your goals.",image:"img/ai-generated-8876530_640.png",alt:"Research & Strategy"},{title:"2. Prototyping",description:"Creating wireframes and interactive prototypes in Figma to visualize the user experience.",image:"img/template-1599663_1920.png",alt:"Wireframing & Prototyping"},{title:"3. UI/UX Design",description:"Designing a clean and modern interface that is user-friendly and aesthetically pleasing.",image:"img/ui-8827392_1920.jpg",alt:"UI/UX Design"},{title:"4. Development & Testing",description:"Building the website with clean code, followed by rigorous testing for performance and compatibility.",image:"img/freelance-work-7308505_1920.png",alt:"Development & Testing"},{title:"5. Launch & Maintenance",description:"Deploying your website and providing continuous support to ensure long-term success.",image:"img/spaceship-8598172_1920.jpg",alt:"Launch & Maintenance"}],d={section:{padding:"80px 0"},container:{maxWidth:"1365px",margin:"0 auto",padding:"0 20px"},sectionTitle:{textAlign:"center",marginBottom:"60px",position:"relative"},titleText:{fontSize:"clamp(24px, 5vw, 60px)",display:"inline-block",background:"#ff4d4d",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent",marginBottom:"15px",fontWeight:800},timeline:{position:"relative",maxWidth:"1265px",margin:"0 auto",padding:"20px 0"},timelineLine:{position:"absolute",top:0,bottom:0,left:"50%",width:"4px",background:"#ff4d4d",transform:"translateX(-50%)",borderRadius:"2px"},timelineItem:{position:"relative",padding:"20px 0",width:"50%",marginBottom:"30px",opacity:0,transform:"translateY(30px)",transition:"opacity 0.6s ease, transform 0.6s ease"},timelineItemActive:{opacity:1,transform:"translateY(0)"},timelineContent:{background:"white",padding:"20px",borderRadius:"10px",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.1)",position:"relative"},timelineDot:{position:"absolute",width:"20px",height:"20px",background:"white",border:"4px solid #ff4d4d",borderRadius:"50%",top:"50%",zIndex:2,boxShadow:"0 0 0 4px #ff4d4d"},timelineFlex:{display:"flex",alignItems:"center",gap:"15px"},timelineImg:{width:"250px",height:"250px",borderRadius:"8px",objectFit:"cover",flexShrink:0},timelineText:{flexGrow:1},timelineTitle:{fontSize:"22px",marginBottom:"10px",color:"#ff4d4d",fontWeight:700},timelineDescription:{fontSize:"19px",color:"#666",lineHeight:1.6,margin:0}};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .timeline-item-odd {
          left: 0;
          padding-right: 40px;
        }
        
        .timeline-item-even {
          left: 50%;
          padding-left: 40px;
        }
        
        .timeline-dot-odd {
          right: -10px;
          transform: translateY(-50%);
        }
        
        .timeline-dot-even {
          left: -10px;
          transform: translateY(-50%);
        }
        
        .timeline-content-odd:after {
          content: '';
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 10px 0 10px 10px;
          border-style: solid;
          border-color: transparent transparent transparent white;
        }
        
        .timeline-content-even:after {
          content: '';
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 10px 10px 10px 0;
          border-style: solid;
          border-color: transparent white transparent transparent;
        }

        @media (max-width: 1265px) {
          .timeline-img-custom {
            width: 200px !important;
            height: 200px !important;
          }
          .timeline-content-custom {
            padding: 15px !important;
          }
          .timeline-title-custom {
            font-size: 20px !important;
          }
          .timeline-desc-custom {
            font-size: 15px !important;
          }
        }

        @media (max-width: 768px) {
          .timeline-line-custom {
            left: 20px !important;
          }
          .timeline-item-custom {
            width: 100% !important;
            left: 0 !important;
            padding: 0 0 0 50px !important;
          }
          .timeline-dot-custom {
            left: 10px !important;
            right: auto !important;
          }
          .timeline-content-custom:after {
            display: none !important;
          }
          .timeline-flex-custom {
            flex-direction: column !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
          .timeline-img-custom {
            width: 100% !important;
            height: auto !important;
            max-width: 100% !important;
            margin-bottom: 15px !important;
          }
          .timeline-text-custom {
            width: 100% !important;
          }
          .section-title-custom h2 {
            font-size: 28px !important;
          }
          .process-section-custom {
            padding: 50px 0 !important;
          }
        }

        @media (max-width: 480px) {
          .timeline-item-custom {
            padding-left: 40px !important;
          }
          .timeline-content-custom {
            padding: 15px !important;
          }
          .timeline-title-custom {
            font-size: 18px !important;
          }
          .timeline-desc-custom {
            font-size: 14px !important;
          }
          .section-title-custom h2 {
            font-size: 24px !important;
          }
        }

        @media (max-width: 360px) {
          .timeline-item-custom {
            padding-left: 35px !important;
          }
          .timeline-dot-custom {
            width: 16px !important;
            height: 16px !important;
          }
        }
      `}),s.jsx("section",{className:"process-section-custom",style:d.section,children:s.jsxs("div",{style:d.container,children:[s.jsx("div",{className:"section-title-custom",style:d.sectionTitle,children:s.jsx("h2",{style:d.titleText,children:"OUR Workflow Timeline"})}),s.jsxs("div",{style:d.timeline,children:[s.jsx("div",{className:"timeline-line-custom",style:d.timelineLine}),r.map((h,p)=>{const z=p%2===0;return s.jsx("div",{ref:v=>f.current[p]=v,className:`timeline-item-custom ${z?"timeline-item-odd":"timeline-item-even"}`,style:{...d.timelineItem,...u.includes(p)?d.timelineItemActive:{}},children:s.jsxs("div",{className:`timeline-content-custom ${z?"timeline-content-odd":"timeline-content-even"}`,style:d.timelineContent,children:[s.jsx("div",{className:`timeline-dot-custom ${z?"timeline-dot-odd":"timeline-dot-even"}`,style:d.timelineDot}),s.jsxs("div",{className:"timeline-flex-custom",style:d.timelineFlex,children:[s.jsx("img",{src:h.image,alt:h.alt,className:"timeline-img-custom",style:d.timelineImg}),s.jsxs("div",{className:"timeline-text-custom",style:d.timelineText,children:[s.jsx("h3",{className:"timeline-title-custom",style:d.timelineTitle,children:h.title}),s.jsx("p",{className:"timeline-desc-custom",style:d.timelineDescription,children:h.description})]})]})]})},p)})]})]})})]})}var Bd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},hd=Wa.createContext&&Wa.createContext(Bd),e1=["attr","size","title"];function a1(u,c){if(u==null)return{};var f=l1(u,c),r,d;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(u);for(d=0;d<h.length;d++)r=h[d],!(c.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(u,r)&&(f[r]=u[r])}return f}function l1(u,c){if(u==null)return{};var f={};for(var r in u)if(Object.prototype.hasOwnProperty.call(u,r)){if(c.indexOf(r)>=0)continue;f[r]=u[r]}return f}function ru(){return ru=Object.assign?Object.assign.bind():function(u){for(var c=1;c<arguments.length;c++){var f=arguments[c];for(var r in f)Object.prototype.hasOwnProperty.call(f,r)&&(u[r]=f[r])}return u},ru.apply(this,arguments)}function gd(u,c){var f=Object.keys(u);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(u);c&&(r=r.filter(function(d){return Object.getOwnPropertyDescriptor(u,d).enumerable})),f.push.apply(f,r)}return f}function cu(u){for(var c=1;c<arguments.length;c++){var f=arguments[c]!=null?arguments[c]:{};c%2?gd(Object(f),!0).forEach(function(r){n1(u,r,f[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(f)):gd(Object(f)).forEach(function(r){Object.defineProperty(u,r,Object.getOwnPropertyDescriptor(f,r))})}return u}function n1(u,c,f){return c=i1(c),c in u?Object.defineProperty(u,c,{value:f,enumerable:!0,configurable:!0,writable:!0}):u[c]=f,u}function i1(u){var c=u1(u,"string");return typeof c=="symbol"?c:c+""}function u1(u,c){if(typeof u!="object"||!u)return u;var f=u[Symbol.toPrimitive];if(f!==void 0){var r=f.call(u,c);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(u)}function qd(u){return u&&u.map((c,f)=>Wa.createElement(c.tag,cu({key:f},c.attr),qd(c.child)))}function Ia(u){return c=>Wa.createElement(o1,ru({attr:cu({},u.attr)},c),qd(u.child))}function o1(u){var c=f=>{var{attr:r,size:d,title:h}=u,p=a1(u,e1),z=d||f.size||"1em",v;return f.className&&(v=f.className),u.className&&(v=(v?v+" ":"")+u.className),Wa.createElement("svg",ru({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},f.attr,r,p,{className:v,style:cu(cu({color:u.color||f.color},f.style),u.style),height:z,width:z,xmlns:"http://www.w3.org/2000/svg"}),h&&Wa.createElement("title",null,h),u.children)};return hd!==void 0?Wa.createElement(hd.Consumer,null,f=>c(f)):c(Bd)}function r1(u){return Ia({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(u)}function c1(u){return Ia({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(u)}function s1(u){return Ia({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(u)}function f1(u){return Ia({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"},child:[]}]})(u)}function m1(u){return Ia({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(u)}function d1(u){return Ia({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(u)}function p1(u){return Ia({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(u)}function h1(){const[u,c]=A.useState([]),f=A.useRef([]);A.useEffect(()=>{const h={root:null,rootMargin:"0px",threshold:.1},p=new IntersectionObserver(z=>{z.forEach(v=>{if(v.isIntersecting){const x=f.current.indexOf(v.target);x!==-1&&!u.includes(x)&&c(N=>[...N,x])}})},h);return f.current.forEach(z=>z&&p.observe(z)),()=>p.disconnect()},[]);const r=[{icon:s.jsx(m1,{}),title:"Creative Innovation",description:"Pushing boundaries with cutting-edge design solutions that captivate and inspire your audience."},{icon:s.jsx(s1,{}),title:"Premium Quality",description:"Delivering excellence in every pixel with meticulous attention to detail and flawless execution."},{icon:s.jsx(r1,{}),title:"Rapid Development",description:"Fast-paced delivery without compromising quality, ensuring your project launches on time and exceeds expectations."},{icon:s.jsx(f1,{}),title:"24/7 Dedication",description:"Round-the-clock support and commitment to your success, ensuring peace of mind throughout your project."}],d={section:{paddingBottom:"60px",paddingTop:"60px",background:"#f8f9fa",position:"relative",overflow:"hidden"},outerContainer:{padding:"0 20px"},container:{maxWidth:"1265px",margin:"0 auto",position:"relative",zIndex:1},sectionHeader:{textAlign:"center",marginBottom:"60px"},title:{fontSize:"2.8rem",fontWeight:800,color:"#212529",marginBottom:"15px",position:"relative",display:"inline-block"},titleUnderline:{content:'""',position:"absolute",width:"80px",height:"4px",background:"#ff4d4d",bottom:"-10px",left:"50%",transform:"translateX(-50%)",borderRadius:"2px"},subtitle:{fontSize:"1.2rem",color:"#555",maxWidth:"700px",margin:"0 auto",lineHeight:1.6},benefitsGrid:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"25px"},benefitCard:{background:"white",borderRadius:"16px",padding:"40px 30px",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.1)",position:"relative",overflow:"hidden",border:"1px solid rgb(0, 0, 0)",textAlign:"center",opacity:0,transform:"translateY(30px)",transition:"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"},benefitCardActive:{opacity:1,transform:"translateY(0)"},benefitIcon:{width:"80px",height:"80px",background:"linear-gradient(135deg, #ff4d4d, #ff4d4d)",borderRadius:"20px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"1.8rem",margin:"0 auto 25px",transition:"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"},benefitTitle:{fontSize:"1.5rem",fontWeight:700,color:"#212529",marginBottom:"15px"},benefitDescription:{color:"#666",lineHeight:1.6,fontSize:"1rem",margin:0}};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .benefit-card-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #ff4d4d, #ff4d4d);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: 0;
        }

        .benefit-card-wrapper:hover::before {
          opacity: 1;
        }

        .benefit-card-wrapper:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15) !important;
        }

        .benefit-card-wrapper:hover .benefit-icon-inner {
          transform: rotate(10deg) scale(1.1);
          background: #ff00008a !important;
        }

        /* Large Desktop - 4 columns */
        @media (min-width: 1024px) {
          .benefits-grid-custom {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }

        /* Tablet - 4 columns */
        @media (max-width: 1023px) and (min-width: 768px) {
          .benefits-grid-custom {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 20px !important;
          }
          .benefit-card-wrapper {
            padding: 35px 25px !important;
          }
          .benefit-title-custom {
            font-size: 1.3rem !important;
          }
          .benefit-desc-custom {
            font-size: 0.9rem !important;
          }
        }

        /* Mobile - 1 column */
        @media (max-width: 767px) {
          .section-header-title {
            font-size: 1.8rem !important;
          }
          
          .section-header-subtitle {
            font-size: 1.1rem !important;
          }
          
          .benefits-grid-custom {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .benefit-card-wrapper {
            padding: 30px 25px !important;
          }
        }

        @media (max-width: 480px) {
          .section-header-title {
            font-size: 1.5rem !important;
          }
        }
      `}),s.jsx("section",{style:d.section,children:s.jsx("div",{style:d.outerContainer,children:s.jsxs("div",{style:d.container,children:[s.jsxs("div",{style:d.sectionHeader,children:[s.jsxs("h2",{className:"section-header-title",style:d.title,children:["Why Choose Us",s.jsx("div",{style:d.titleUnderline})]}),s.jsx("p",{className:"section-header-subtitle",style:d.subtitle,children:"Elevate your digital presence with our innovative design solutions and unparalleled expertise"})]}),s.jsx("div",{className:"benefits-grid-custom",style:d.benefitsGrid,children:r.map((h,p)=>s.jsxs("div",{ref:z=>f.current[p]=z,className:"benefit-card-wrapper",style:{...d.benefitCard,...u.includes(p)?d.benefitCardActive:{},animationDelay:`${p*.1}s`},children:[s.jsx("div",{className:"benefit-icon-inner",style:d.benefitIcon,children:h.icon}),s.jsxs("div",{children:[s.jsx("h3",{className:"benefit-title-custom",style:d.benefitTitle,children:h.title}),s.jsx("p",{className:"benefit-desc-custom",style:d.benefitDescription,children:h.description})]})]},p))})]})})})]})}function g1(){const u={section:{width:"100%",maxWidth:"1265px",height:"400px",margin:"120px auto",position:"relative",overflow:"hidden",padding:"0 20px"},outerWrapper:{backgroundColor:"#f8f9fa",width:"100%"},imageContainer:{width:"100%",height:"100%",position:"relative"},backgroundImage:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"},blurOverlay:{position:"absolute",top:0,right:0,width:"70%",height:"100%",background:"linear-gradient(to right, transparent 6%, #000000d0 50%, rgba(0, 0, 0, 0.342) 100%)",backdropFilter:"blur(10%)",WebkitBackdropFilter:"blur(10%)",zIndex:10,display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 200px",borderRadius:"10px"},blurContent:{maxWidth:"550px",color:"#fffdfd"},title:{fontSize:"2.5rem",marginBottom:"15px",fontWeight:700},description:{fontSize:"1.1rem",marginBottom:"25px",opacity:.8,lineHeight:1.6},buttonGroup:{display:"flex",gap:"15px"},button:{display:"inline-block",padding:"18px 100px",backgroundColor:"#ff4d4d",color:"rgb(255, 255, 255)",textDecoration:"none",borderRadius:"8px",fontSize:"1.2rem",fontWeight:600,transition:"all 0.4s ease",border:"2px solid transparent",textTransform:"uppercase",letterSpacing:"1px",marginTop:"20px",cursor:"pointer"}};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .btn-custom:hover {
          background-color: transparent !important;
          border-color: #ff4d4d !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
          color: #ff4d4d !important;
        }

        @media (max-width: 1024px) {
          .image-section-custom {
            height: 350px !important;
            margin: 100px auto !important;
          }

          .blur-overlay-custom {
            width: 100% !important;
            padding: 0 60px !important;
            align-items: center !important;
            text-align: center !important;
          }

          .blur-content-custom {
            max-width: 100% !important;
          }

          .blur-title-custom {
            font-size: 2.2rem !important;
          }

          .blur-desc-custom {
            font-size: 1rem !important;
          }

          .btn-custom {
            padding: 10px 20px !important;
          }
        }

        @media (max-width: 768px) {
          .blur-title-custom {
            font-size: 2rem !important;
          }

          .blur-desc-custom {
            font-size: 0.95rem !important;
          }
        }

        @media (max-width: 480px) {
          .image-section-custom {
            height: 300px !important;
            margin: 80px auto !important;
          }

          .blur-overlay-custom {
            padding: 0 30px !important;
          }

          .blur-title-custom {
            font-size: 1.6rem !important;
          }

          .blur-desc-custom {
            font-size: 0.9rem !important;
            margin-bottom: 20px !important;
          }

          .btn-custom {
            font-size: 0.95rem !important;
            padding: 10px 18px !important;
          }
        }

        @media (max-width: 375px) {
          .blur-title-custom {
            font-size: 1.4rem !important;
          }

          .blur-desc-custom {
            font-size: 0.85rem !important;
          }

          .btn-custom {
            width: 100% !important;
            padding: 12px !important;
            font-size: 1rem !important;
          }
        }
      `}),s.jsx("div",{style:u.outerWrapper,children:s.jsx("section",{className:"image-section-custom",style:u.section,children:s.jsxs("div",{style:u.imageContainer,children:[s.jsx("img",{src:"img/pc-1207886_1920.jpg",alt:"Scenic landscape",style:u.backgroundImage}),s.jsx("div",{className:"blur-overlay-custom",style:u.blurOverlay,children:s.jsxs("div",{className:"blur-content-custom",style:u.blurContent,children:[s.jsx("h2",{className:"blur-title-custom",style:u.title,children:"Discover Our Unique Story"}),s.jsx("p",{className:"blur-desc-custom",style:u.description,children:"Uncover the hidden narrative behind our journey."}),s.jsx("div",{style:u.buttonGroup,children:s.jsx("a",{href:"about.html",className:"btn-custom",style:u.button,children:"Get Started"})})]})})]})})})]})}function x1(){const u=[{src:"img/full-template-578-first-portfolio.jpg",alt:"Portfolio 1"},{src:"img/full-template-580-woox-travel.jpg",alt:"Portfolio 2"},{src:"img/full-template-572-designer.jpg",alt:"Portfolio 3"},{src:"img/full-template-574-mexant.jpg",alt:"Portfolio 4"},{src:"img/full-health.jpg",alt:"Portfolio 5"},{src:"img/fullnew.jpg",alt:"Portfolio 6"},{src:"img/full-template-581-kind-heart-charity.jpg",alt:"Portfolio 7"},{src:"img/full-template-586-scholar.jpg",alt:"Portfolio 8"},{src:"img/full-template-587-tiya-golf-club.jpg",alt:"Portfolio 9"},{src:"img/full-template-591-villa-agency.jpg",alt:"Portfolio 10"}],c=()=>{window.scrollTo(0,0)},f={section:{background:"#330000",padding:"20px 0",position:"relative",overflow:"hidden",minHeight:"90vh",display:"flex",alignItems:"center"},sectionContent:{display:"flex",justifyContent:"flex-start",position:"relative",width:"100%"},portfolioHeader:{position:"absolute",right:"120px",top:"50%",transform:"translateY(-50%)",color:"white",width:"450px",zIndex:10,textAlign:"left",padding:"25px",background:"rgba(42, 15, 15, 0.9)",borderRadius:"20px"},portfolioTitle:{fontSize:"3.5rem",marginBottom:"15px",color:"#fff",fontWeight:800,lineHeight:1.2},portfolioSubtitle:{fontSize:"1.2rem",color:"#94a3b8",lineHeight:1.6,paddingBottom:"20px"},portfolioButton:{display:"inline-block",padding:"16px 32px",backgroundColor:"#ff4d4d",color:"rgb(255, 255, 255)",textDecoration:"none",borderRadius:"8px",fontSize:"1.1rem",fontWeight:600,transition:"all 0.4s ease",border:"2px solid transparent",textTransform:"uppercase",letterSpacing:"1px",marginTop:"15px",cursor:"pointer"},sliderContainer:{width:"100%",overflow:"hidden",position:"relative"},sliderTrack:{display:"flex",gap:"30px",padding:"20px 0"},sliderItem:{width:"auto",height:"860px",borderRadius:"20px",overflow:"hidden",position:"relative",flexShrink:0},sliderImg:{width:"auto",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.5s ease"},fadeLeft:{position:"absolute",top:0,left:0,width:"80px",height:"100%",zIndex:2,pointerEvents:"none",background:"linear-gradient(to right, #330000, transparent)"},fadeRight:{position:"absolute",top:0,right:0,width:"80px",height:"100%",zIndex:2,pointerEvents:"none",background:"linear-gradient(to left, #330000, transparent)"}};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-track {
          animation: scroll 50s linear infinite;
        }

        .slider-item-custom:hover img {
          transform: scale(1.05);
        }

        .portfolio-button-custom:hover {
          background-color: transparent !important;
          border-color: #ff4d4d !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
          color: #ff4d4d !important;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .portfolio-section-custom {
            padding: 15px 0 !important;
            min-height: 70vh !important;
          }
          .portfolio-header-custom {
            right: 60px !important;
            width: 380px !important;
            padding: 22px !important;
          }
          .portfolio-title-custom {
            font-size: 2.5rem !important;
          }
          .portfolio-subtitle-custom {
            font-size: 1.05rem !important;
          }
          .slider-item-custom {
            height: 650px !important;
          }
        }

        /* Mobile landscape & small tablets */
        @media (max-width: 768px) {
          .portfolio-section-custom {
            padding: 40px 0 !important;
            min-height: auto !important;
            flex-direction: column !important;
          }
          .portfolio-section-content {
            flex-direction: column !important;
          }
          .portfolio-header-custom {
            position: relative !important;
            right: auto !important;
            top: auto !important;
            transform: none !important;
            width: 90% !important;
            max-width: 500px !important;
            margin: 0 auto 30px !important;
            padding: 25px !important;
            text-align: center !important;
          }
          .portfolio-title-custom {
            font-size: 2.2rem !important;
          }
          .portfolio-subtitle-custom {
            font-size: 1rem !important;
          }
          .slider-item-custom {
            height: 500px !important;
          }
          .slider-track-custom {
            gap: 20px !important;
          }
        }

        /* Mobile portrait */
        @media (max-width: 480px) {
          .portfolio-section-custom {
            padding: 30px 0 !important;
          }
          .portfolio-header-custom {
            width: 85% !important;
            padding: 20px 18px !important;
            margin-bottom: 25px !important;
          }
          .portfolio-title-custom {
            font-size: 1.8rem !important;
            margin-bottom: 12px !important;
          }
          .portfolio-subtitle-custom {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
            padding-bottom: 15px !important;
          }
          .portfolio-button-custom {
            font-size: 0.9rem !important;
            padding: 12px 24px !important;
          }
          .slider-item-custom {
            height: 400px !important;
          }
          .slider-track-custom {
            gap: 15px !important;
          }
          .fade-left-custom, .fade-right-custom {
            width: 40px !important;
          }
        }

        /* Small mobile */
        @media (max-width: 375px) {
          .portfolio-header-custom {
            width: 90% !important;
            padding: 18px 15px !important;
          }
          .portfolio-title-custom {
            font-size: 1.6rem !important;
          }
          .portfolio-subtitle-custom {
            font-size: 0.85rem !important;
          }
          .portfolio-button-custom {
            font-size: 0.85rem !important;
            padding: 10px 20px !important;
          }
          .slider-item-custom {
            height: 350px !important;
          }
        }
      `}),s.jsx("section",{className:"portfolio-section-custom",style:f.section,children:s.jsxs("div",{className:"portfolio-section-content",style:f.sectionContent,children:[s.jsxs("div",{className:"portfolio-header-custom",style:f.portfolioHeader,children:[s.jsx("h2",{className:"portfolio-title-custom",style:f.portfolioTitle,children:"Our Creative Journey"}),s.jsx("p",{className:"portfolio-subtitle-custom",style:f.portfolioSubtitle,children:"Discover our most impactful projects that showcase our passion for innovative design and flawless execution"}),s.jsx(de,{to:"/portfolio",onClick:c,className:"portfolio-button-custom",style:f.portfolioButton,children:"check our portfolio"})]}),s.jsxs("div",{style:f.sliderContainer,children:[s.jsx("div",{className:"fade-left-custom",style:f.fadeLeft}),s.jsx("div",{className:"fade-right-custom",style:f.fadeRight}),s.jsxs("div",{className:"animate-track slider-track-custom",style:f.sliderTrack,children:[u.map((r,d)=>s.jsx("div",{className:"slider-item-custom",style:f.sliderItem,children:s.jsx("img",{src:r.src,alt:r.alt,style:f.sliderImg})},`first-${d}`)),u.map((r,d)=>s.jsx("div",{className:"slider-item-custom",style:f.sliderItem,children:s.jsx("img",{src:r.src,alt:r.alt,style:f.sliderImg})},`second-${d}`))]})]})]})})]})}function $r(){const[u,c]=A.useState({fullName:"",email:"",phone:"",service:"",requirements:""}),[f,r]=A.useState(!1),d=z=>{const{name:v,value:x}=z.target;c(N=>({...N,[v]:x}))},h=async z=>{if(z.preventDefault(),!u.fullName||!u.email||!u.phone||!u.service){alert("Please fill in all required fields.");return}r(!0);try{const v=new FormData;v.append("access_key","42b767c1-7b37-4f28-be80-41c30165e209"),v.append("name",u.fullName),v.append("email",u.email),v.append("phone",u.phone),v.append("service",u.service),v.append("requirements",u.requirements),v.append("subject",`Quote Request from ${u.fullName}`);const x=`
        New Quote Request:
        Name: ${u.fullName}
        Email: ${u.email}
        Phone: ${u.phone}
        Service: ${u.service}
        Requirements: ${u.requirements}
      `;v.append("message",x);const T=await(await fetch("https://api.web3forms.com/submit",{method:"POST",body:v})).json();if(T.success)alert("Your quote request has been sent successfully!"),c({fullName:"",email:"",phone:"",service:"",requirements:""});else throw new Error(T.message||"Failed to send the request.")}catch(v){alert("Error sending request. Please try again."),console.error("Submission error:",v)}finally{r(!1)}},p={section:{position:"relative",backgroundImage:"url('img/chairs-2181919_1920.jpg')",paddingTop:"100px",paddingBottom:"100px",backgroundAttachment:"scroll",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:1},bookingContainer:{maxWidth:"1300px",margin:"0 auto",padding:"0 20px"},bookingForm:{background:"white",padding:"30px",borderRadius:"15px",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.1)",marginBottom:"40px",width:"100%",maxWidth:"1300px",margin:"0 auto 40px"},formTitle:{textAlign:"center",color:"#2c3e50",marginBottom:"30px",fontSize:"50px",fontWeight:700},formRow:{display:"flex",gap:"20px",marginBottom:"20px"},formGroup:{flex:1},label:{display:"block",marginBottom:"8px",color:"#2c3e50",fontWeight:500},input:{width:"100%",padding:"12px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"16px",transition:"border-color 0.3s",boxSizing:"border-box",color:"#2c3e50"},textarea:{width:"100%",padding:"12px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"16px",height:"120px",resize:"vertical",marginBottom:"20px",transition:"border-color 0.3s",boxSizing:"border-box",color:"#2c3e50"},button:{display:"block",width:"100%",padding:"18px 36px",backgroundColor:"#ff4d4d",color:"rgb(255, 255, 255)",textDecoration:"none",borderRadius:"8px",fontSize:"1.2rem",fontWeight:600,transition:"all 0.4s ease",border:"2px solid transparent",textTransform:"uppercase",letterSpacing:"1px",cursor:"pointer"},contactSection:{background:"white",marginTop:"50px",padding:"30px",borderRadius:"15px",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.1)"},contactTitle:{textAlign:"center",color:"#2c3e50",marginBottom:"30px",fontSize:"34px",fontWeight:700},contactGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"30px",textAlign:"center"},contactItem:{padding:"20px",display:"flex",flexDirection:"column",alignItems:"center"},contactIcon:{fontSize:"1.5rem",color:"#ff4d4d",marginBottom:"1rem"},contactHeading:{color:"#ff4d4d",marginBottom:"10px",fontSize:"18px",fontWeight:600},contactText:{color:"#2c3e50",lineHeight:1.6,margin:0}};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        /* Fix for iOS background blur and size issues */
        .appointment-section-custom {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }

        /* Desktop - use fixed attachment */
        @media (min-width: 1025px) {
          .appointment-section-custom {
            background-attachment: fixed !important;
          }
        }

        /* iOS and mobile - disable fixed and optimize image */
        @media (max-width: 1024px) {
          .appointment-section-custom {
            background-attachment: scroll !important;
            background-size: cover !important;
            background-position: center center !important;
          }
        }

        .appointment-input,
        .appointment-select,
        .appointment-textarea {
          color: #2c3e50 !important;
        }


        .appointment-input:focus,
        .appointment-select:focus,
        .appointment-textarea:focus {
          outline: none;
          border-color: #ff4d4d !important;
        }


        .appointment-button:hover {
          background-color: transparent !important;
          border-color: #ff4d4d !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
          color: #ff4d4d !important;
        }


        .appointment-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }


        @media (max-width: 1024px) {
          .appointment-section-custom {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .booking-container-custom {
            max-width: 90% !important;
          }
          .booking-form-custom {
            padding: 25px !important;
          }
          .form-title-custom {
            font-size: 42px !important;
          }
          .contact-grid-custom {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 15px !important;
          }
          .contact-item-custom {
            padding: 15px !important;
          }
          .contact-heading-custom {
            font-size: 18px !important;
          }
          .contact-text-custom {
            font-size: 14px !important;
          }
        }


        @media (max-width: 768px) {
          .appointment-section-custom {
            padding-top: 70px !important;
            padding-bottom: 70px !important;
          }
          .booking-container-custom {
            max-width: 95% !important;
          }
          .form-title-custom {
            font-size: 32px !important;
            margin-bottom: 20px !important;
          }
          .booking-form-custom {
            padding: 20px !important;
          }
          .form-row-custom {
            flex-direction: column !important;
            gap: 15px !important;
          }
          .contact-grid-custom {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 10px !important;
          }
          .appointment-button {
            font-size: 1.1rem !important;
            padding: 16px 30px !important;
          }
        }


        @media (max-width: 620px) {
          .appointment-section-custom {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
          .booking-container-custom {
            padding: 0 15px !important;
          }
          .form-title-custom {
            font-size: 28px !important;
          }
          .contact-grid-custom {
            grid-template-columns: repeat(1, 1fr) !important;
            gap: 15px !important;
          }
          .contact-item-custom {
            padding: 10px !important;
          }
          .contact-title-custom {
            font-size: 26px !important;
          }
        }


        @media (max-width: 425px) {
          .appointment-section-custom {
            padding-top: 50px !important;
            padding-bottom: 50px !important;
          }
          .booking-form-custom {
            padding: 15px !important;
            border-radius: 10px !important;
          }
          .form-title-custom {
            font-size: 24px !important;
            margin-bottom: 15px !important;
          }
          .contact-section-custom {
            padding: 20px !important;
            margin-top: 30px !important;
          }
          .contact-title-custom {
            font-size: 22px !important;
            margin-bottom: 20px !important;
          }
          .appointment-button {
            font-size: 1rem !important;
            padding: 14px 28px !important;
          }
          .appointment-label {
            font-size: 14px !important;
          }
          .appointment-input,
          .appointment-select,
          .appointment-textarea {
            padding: 10px !important;
            font-size: 14px !important;
          }
        }


        @media (max-width: 375px) {
          .appointment-section-custom {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .booking-container-custom {
            padding: 0 10px !important;
          }
          .booking-form-custom {
            padding: 15px !important;
          }
          .form-title-custom {
            font-size: 22px !important;
          }
          .contact-heading-custom {
            font-size: 16px !important;
          }
          .contact-text-custom {
            font-size: 13px !important;
          }
          .appointment-textarea {
            height: 100px !important;
          }
          .appointment-button {
            padding: 12px 24px !important;
          }
        }


        @media (max-width: 320px) {
          .appointment-section-custom {
            padding-top: 30px !important;
            padding-bottom: 30px !important;
          }
          .booking-form-custom {
            padding: 12px !important;
            border-radius: 8px !important;
          }
          .form-title-custom {
            font-size: 20px !important;
            margin-bottom: 12px !important;
          }
          .form-row-custom {
            gap: 10px !important;
            margin-bottom: 10px !important;
          }
          .contact-section-custom {
            padding: 15px !important;
            margin-top: 25px !important;
            border-radius: 8px !important;
          }
          .contact-title-custom {
            font-size: 20px !important;
            margin-bottom: 15px !important;
          }
          .contact-item-custom {
            padding: 8px !important;
          }
          .contact-heading-custom {
            font-size: 15px !important;
            margin-bottom: 5px !important;
          }
          .contact-text-custom {
            font-size: 12px !important;
          }
          .contact-icon-custom {
            font-size: 1rem !important;
            margin-bottom: 0.5rem !important;
          }
          .appointment-button {
            font-size: 0.9rem !important;
            padding: 10px 20px !important;
          }
          .appointment-input,
          .appointment-select,
          .appointment-textarea {
            padding: 8px !important;
            font-size: 13px !important;
            border-radius: 6px !important;
          }
          .appointment-textarea {
            height: 80px !important;
            margin-bottom: 15px !important;
          }
          .appointment-label {
            margin-bottom: 5px !important;
            font-size: 13px !important;
          }
        }
      `}),s.jsx("section",{className:"appointment-section-custom",style:p.section,id:"letgobook",children:s.jsxs("div",{className:"booking-container-custom",style:p.bookingContainer,children:[s.jsxs("div",{className:"booking-form-custom",style:p.bookingForm,children:[s.jsx("h2",{className:"form-title-custom",style:p.formTitle,children:"Get a Quote"}),s.jsxs("form",{onSubmit:h,children:[s.jsxs("div",{className:"form-row-custom",style:p.formRow,children:[s.jsxs("div",{style:p.formGroup,children:[s.jsx("label",{htmlFor:"fullName",className:"appointment-label",style:p.label,children:"Full Name"}),s.jsx("input",{type:"text",id:"fullName",name:"fullName",value:u.fullName,onChange:d,required:!0,className:"appointment-input",style:p.input})]}),s.jsxs("div",{style:p.formGroup,children:[s.jsx("label",{htmlFor:"email",className:"appointment-label",style:p.label,children:"Email"}),s.jsx("input",{type:"email",id:"email",name:"email",value:u.email,onChange:d,required:!0,className:"appointment-input",style:p.input})]})]}),s.jsxs("div",{className:"form-row-custom",style:p.formRow,children:[s.jsxs("div",{style:p.formGroup,children:[s.jsx("label",{htmlFor:"phone",className:"appointment-label",style:p.label,children:"Phone Number"}),s.jsx("input",{type:"tel",id:"phone",name:"phone",value:u.phone,onChange:d,required:!0,className:"appointment-input",style:p.input})]}),s.jsxs("div",{style:p.formGroup,children:[s.jsx("label",{htmlFor:"service",className:"appointment-label",style:p.label,children:"Select Service"}),s.jsxs("select",{id:"service",name:"service",value:u.service,onChange:d,required:!0,className:"appointment-select appointment-input",style:p.input,children:[s.jsx("option",{value:"",children:"Choose a service"}),s.jsx("option",{value:"Content Writing",children:"Content Writing"}),s.jsx("option",{value:"Social Media Setup",children:"Social Media Setup"}),s.jsx("option",{value:"Additional Pages",children:"Additional Pages"}),s.jsx("option",{value:"Google my business setup",children:"Google my business setup"}),s.jsx("option",{value:"SEO Optimization",children:"SEO Optimization"}),s.jsx("option",{value:"Graphic design",children:"Graphic design"}),s.jsx("option",{value:"Website Maintenance",children:"Website Maintenance"}),s.jsx("option",{value:"Web Hosting & Domain Management",children:"Web Hosting & Domain Management"}),s.jsx("option",{value:"UX & UI Design",children:"UX & UI Design"}),s.jsx("option",{value:"Other service",children:"Other service"})]})]})]}),s.jsxs("div",{style:p.formGroup,children:[s.jsx("label",{htmlFor:"requirements",className:"appointment-label",style:p.label,children:"Special Requirements"}),s.jsx("textarea",{id:"requirements",name:"requirements",value:u.requirements,onChange:d,placeholder:"Any special requirements or notes...",className:"appointment-textarea",style:p.textarea})]}),s.jsx("button",{type:"submit",disabled:f,className:"appointment-button",style:p.button,children:f?"Sending...":"Book Appointment"})]})]}),s.jsxs("div",{className:"contact-section-custom",style:p.contactSection,children:[s.jsx("h2",{className:"contact-title-custom",style:p.contactTitle,children:"Contact Information"}),s.jsxs("div",{className:"contact-grid-custom",style:p.contactGrid,children:[s.jsxs("div",{className:"contact-item-custom",style:p.contactItem,children:[s.jsx(d1,{className:"contact-icon-custom",style:p.contactIcon}),s.jsx("h3",{className:"contact-heading-custom",style:p.contactHeading,children:"Address"}),s.jsx("p",{className:"contact-text-custom",style:p.contactText,children:"Red deer, Alberta"})]}),s.jsxs("div",{className:"contact-item-custom",style:p.contactItem,children:[s.jsx(p1,{className:"contact-icon-custom",style:p.contactIcon}),s.jsx("h3",{className:"contact-heading-custom",style:p.contactHeading,children:"Phone"}),s.jsx("p",{className:"contact-text-custom",style:p.contactText,children:"(403) 307-4521"})]}),s.jsxs("div",{className:"contact-item-custom",style:p.contactItem,children:[s.jsx(c1,{className:"contact-icon-custom",style:p.contactIcon}),s.jsx("h3",{className:"contact-heading-custom",style:p.contactHeading,children:"Email"}),s.jsx("p",{className:"contact-text-custom",style:p.contactText,children:"Makinde.taofeek95@gmail.com"})]})]})]})]})})]})}function du(){const u=()=>{window.scrollTo(0,0)},c={footer:{backgroundColor:"#190000",color:"white",padding:"1rem 0",fontFamily:"Arial, sans-serif"},footerContent:{maxWidth:"1300px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"2rem",padding:"0 2rem"},footerSection:{marginBottom:"0.2rem"},heading:{color:"#ffffff",fontSize:"1.4rem",marginBottom:"0.2rem",fontWeight:"bold"},text:{color:"#b89494",textDecoration:"none",lineHeight:1.6,fontSize:"0.9rem",margin:"0.3rem 0"},link:{color:"#b89494",textDecoration:"none",lineHeight:1.6,fontSize:"0.9rem",transition:"color 0.3s ease"},contactInfo:{display:"flex",flexDirection:"column",gap:"0.5rem"},footerBottom:{textAlign:"center",padding:"1rem 0",backgroundColor:"#000000",fontSize:"0.8rem",color:"#ffffff",marginTop:"0.6rem"}};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .footer-link:hover {
          color: #0b81cf6e !important;
        }

        /* For medium screens (max-width: 768px) */
        @media (max-width: 768px) {
          .footer-content-custom {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .footer-heading-custom {
            font-size: 1.2rem !important;
          }

          .footer-text-custom,
          .footer-link {
            font-size: 1rem !important;
          }
        }

        /* For small screens (max-width: 480px) */
        @media (max-width: 480px) {
          .footer-content-custom {
            grid-template-columns: 1fr !important;
            padding: 0 1rem !important;
          }

          .footer-heading-custom {
            font-size: 1rem !important;
          }

          .footer-text-custom,
          .footer-link {
            font-size: 0.9rem !important;
          }

          .contact-info-custom {
            gap: 0.3rem !important;
          }

          .footer-bottom-custom {
            font-size: 0.9rem !important;
          }
        }
      `}),s.jsxs("footer",{style:c.footer,children:[s.jsxs("div",{className:"footer-content-custom",style:c.footerContent,children:[s.jsxs("div",{style:c.footerSection,children:[s.jsx("h3",{className:"footer-heading-custom",style:c.heading,children:"Merit Solution"}),s.jsx("p",{className:"footer-text-custom",style:c.text,children:"Creating beautiful and functional websites tailored to your needs."})]}),s.jsxs("div",{style:c.footerSection,children:[s.jsx("h3",{className:"footer-heading-custom",style:c.heading,children:"Portfolio"}),s.jsx("p",{style:c.text,children:s.jsx(de,{to:"/portfolio",onClick:u,className:"footer-link",style:c.link,children:"Check our portfolio"})})]}),s.jsxs("div",{style:c.footerSection,children:[s.jsx("h3",{className:"footer-heading-custom",style:c.heading,children:"Services"}),s.jsx("p",{style:c.text,children:s.jsx(de,{to:"/price",onClick:u,className:"footer-link",style:c.link,children:"Website Design"})}),s.jsx("p",{style:c.text,children:s.jsx(de,{to:"/price",onClick:u,className:"footer-link",style:c.link,children:"Graphics Design"})}),s.jsx("p",{style:c.text,children:s.jsx(de,{to:"/price",onClick:u,className:"footer-link",style:c.link,children:"UI/UX Design"})}),s.jsx("p",{style:c.text,children:s.jsx(de,{to:"/price",onClick:u,className:"footer-link",style:c.link,children:"SEO Optimization"})})]}),s.jsxs("div",{style:c.footerSection,children:[s.jsx("h3",{className:"footer-heading-custom",style:c.heading,children:"Contact"}),s.jsxs("div",{className:"contact-info-custom",style:c.contactInfo,children:[s.jsxs("p",{className:"footer-text-custom",style:c.text,children:["Email:"," ",s.jsx("a",{href:"mailto:Meritsolution@gmail.com",className:"footer-link",style:c.link,children:"Meritsolution@gmail.com"})]}),s.jsxs("p",{className:"footer-text-custom",style:c.text,children:["Phone:"," ",s.jsx("a",{href:"tel:+14033074521",className:"footer-link",style:c.link,children:"(403) 307-4521"})]}),s.jsx("p",{className:"footer-text-custom",style:c.text,children:"Address: Red Deer, Canada"})]})]})]}),s.jsx("div",{className:"footer-bottom-custom",style:c.footerBottom,children:s.jsx("p",{children:"© 2025 Merit solution. All rights reserved."})})]})]})}function v1(){return s.jsxs("div",{children:[s.jsx(mu,{}),s.jsx($g,{}),s.jsx(Fg,{}),s.jsx(Ig,{}),s.jsx(Pg,{}),s.jsx(t1,{}),s.jsx(h1,{}),s.jsx(g1,{}),s.jsx(x1,{}),s.jsx($r,{}),s.jsx(du,{})]})}const y1=()=>{const u=[{name:"Basic",price:"$400",billing:"/project",features:["5-page website","Basic SEO","Contact form","Mobile-friendly","2 revisions"],image:"img/web-1738159_1920.jpg",popular:!1},{name:"Pro",price:"$999",billing:"/project",features:["10-page website","Advanced SEO","Custom forms","E-commerce","4 revisions"],image:"img/online-web-design.jpg",popular:!0},{name:"Business",price:"$1,499",billing:"/project",features:["15-page website","Premium SEO","Advanced store","Blog system","6 revisions"],image:"img/office-5067104_1280.jpg",popular:!1},{name:"Enterprise",price:"$2,000",billing:"/project",features:["Unlimited pages","Enterprise SEO","Custom features","Full E-commerce","Unlimited revisions"],image:"img/building-4803602_1920.jpg",popular:!1},{name:"E-commerce",price:"$3,000",billing:"/project",features:["Full store setup","Unlimited products","Multiple payments","Inventory system","6 revisions"],image:"img/online-4275963.jpg",popular:!1},{name:"Custom",price:"$4,000",billing:"/project",features:["Custom webapp","API integration","Database setup","Custom features","Unlimited support"],image:"img/lee-campbell-DtDlVpy-vvQ-unsplash.jpg",popular:!1}],c={container:{maxWidth:"1265px",margin:"60px auto",padding:"5rem 1.5rem"},header:{textAlign:"center",marginBottom:"3rem"},headerH1:{fontSize:"clamp(2rem, 5vw, 4rem)",marginBottom:"1rem",color:"#333"},headerP:{fontSize:"clamp(1rem, 2.5vw, 1.5rem)",color:"#666",maxWidth:"700px",margin:"0 auto"},pricingPlans:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2rem"},plan:{backgroundColor:"white",borderRadius:"8px",overflow:"hidden",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.05)",transition:"transform 0.3s ease, box-shadow 0.3s ease",position:"relative"},planPopular:{backgroundColor:"white",borderRadius:"8px",overflow:"hidden",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.05)",transition:"transform 0.3s ease, box-shadow 0.3s ease",position:"relative",border:"2px solid #ff3333",transform:"scale(1.05)"},popularBadge:{position:"absolute",top:"1rem",right:"1rem",backgroundColor:"#ff3333",color:"white",padding:"0.25rem 0.75rem",fontSize:"0.8rem",fontWeight:"600",borderRadius:"8px",letterSpacing:"0.5px",zIndex:10},planHeader:{padding:"3rem 2rem 2rem",textAlign:"center",borderBottom:"1px solid #e0e0e0",position:"relative",backgroundSize:"cover",backgroundPosition:"center",color:"white",zIndex:1},planHeaderOverlay:{content:"",position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))",zIndex:-1},planName:{fontSize:"clamp(1.25rem, 3vw, 1.5rem)",fontWeight:"600",marginBottom:"1rem",position:"relative",zIndex:2,color:"white"},planPrice:{fontSize:"clamp(1.8rem, 4vw, 2.5rem)",fontWeight:"700",color:"#ff3333",marginBottom:"0.5rem",position:"relative",zIndex:2,textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"},planBilling:{fontSize:"clamp(0.75rem, 2vw, 0.9rem)",color:"white",position:"relative",zIndex:2},planFeatures:{padding:"2rem"},feature:{display:"flex",alignItems:"center",marginBottom:"1rem"},featureIcon:{marginRight:"0.75rem",color:"#ff3333",fontSize:"1.2rem"},featureSpan:{fontSize:"clamp(0.9rem, 2.2vw, 1rem)",color:"#333"},planCta:{padding:"0 2rem 2rem",textAlign:"center"}};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .plan:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .plan-popular:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .cta-button {
          display: inline-block;
          padding: 14px 28px;
          background-color: #ff4d4d;
          color: rgb(255, 255, 255);
          text-decoration: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.4s ease;
          border: 2px solid transparent;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
        }

        .cta-button:hover {
          background-color: transparent !important;
          border-color: #ff4d4d !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
          color: #ff4d4d !important;
        }

        /* Large Desktop */
        @media (min-width: 1025px) {
          .cta-button {
            padding: 16px 32px;
            font-size: 1rem;
          }
        }

        /* Tablet: 768px - 1024px - 3 columns */
        @media (max-width: 1024px) {
          .pricing-plans-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem !important;
          }

          .plan-popular {
            transform: scale(1) !important;
          }

          .cta-button {
            padding: 14px 28px;
            font-size: 0.9rem;
          }

          .container-section {
            padding: 4rem 1.5rem !important;
          }
        }

        /* Mobile landscape: 640px - 767px - 2 columns */
        @media (max-width: 767px) {
          .pricing-plans-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }

          .plan-popular {
            transform: scale(1) !important;
          }

          .plan-popular:hover {
            transform: translateY(-5px) !important;
          }

          .cta-button {
            padding: 12px 24px;
            font-size: 0.85rem;
          }

          .container-section {
            padding: 3rem 1.25rem !important;
          }
        }

        /* Mobile portrait: below 640px - 1 column */
        @media (max-width: 639px) {
          .pricing-plans-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .feature-item {
            flex-direction: row;
            align-items: center;
          }

          .cta-button {
            padding: 14px 28px;
            font-size: 0.9rem;
          }

          .container-section {
            padding: 2.5rem 1rem !important;
            margin: 40px auto !important;
          }
        }

        /* Small mobile: below 480px */
        @media (max-width: 479px) {
          .cta-button {
            padding: 12px 24px;
            font-size: 0.85rem;
          }
        }

        /* Extra small mobile: below 375px */
        @media (max-width: 374px) {
          .container-section {
            padding: 2rem 0.75rem !important;
          }

          .cta-button {
            padding: 10px 20px;
            font-size: 0.8rem;
          }

          .plan-features {
            padding: 1.5rem !important;
          }

          .plan-cta {
            padding: 0 1.5rem 1.5rem !important;
          }
        }
      `}),s.jsxs("section",{className:"container-section",style:c.container,children:[s.jsxs("div",{style:c.header,children:[s.jsx("h1",{style:c.headerH1,children:"Choose Your Perfect Plan"}),s.jsx("p",{style:c.headerP,children:"Select the ideal package that fits your business needs. All plans include our premium support and regular updates."})]}),s.jsx("div",{className:"pricing-plans-grid",style:c.pricingPlans,children:u.map((f,r)=>s.jsxs("div",{className:f.popular?"plan-popular":"plan",style:f.popular?c.planPopular:c.plan,children:[f.popular&&s.jsx("div",{style:c.popularBadge,children:"Popular"}),s.jsxs("div",{style:{...c.planHeader,backgroundImage:`url('${f.image}')`},children:[s.jsx("div",{style:c.planHeaderOverlay}),s.jsx("h3",{style:c.planName,children:f.name}),s.jsx("div",{style:c.planPrice,children:f.price}),s.jsx("div",{style:c.planBilling,children:f.billing})]}),s.jsx("div",{className:"plan-features",style:c.planFeatures,children:f.features.map((d,h)=>s.jsxs("div",{className:"feature-item",style:c.feature,children:[s.jsx("span",{style:c.featureIcon,children:"✓"}),s.jsx("span",{style:c.featureSpan,children:d})]},h))}),s.jsx("div",{className:"plan-cta",style:c.planCta,children:s.jsx("a",{href:"#letgobook",className:"cta-button",children:"Get Started"})})]},r))})]})]})};function b1(){const u={section:{width:"100%",maxWidth:"1265px",height:"400px",margin:"120px auto",position:"relative",overflow:"hidden",padding:"0 20px"},outerWrapper:{backgroundColor:"#f8f9fa",width:"100%"},imageContainer:{width:"100%",height:"100%",position:"relative"},backgroundImage:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"},blurOverlay:{position:"absolute",top:0,right:0,width:"70%",height:"100%",background:"linear-gradient(to right, transparent 6%, #000000d0 50%, rgba(0, 0, 0, 0.342) 100%)",backdropFilter:"blur(10%)",WebkitBackdropFilter:"blur(10%)",zIndex:10,display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 200px",borderRadius:"10px"},blurContent:{maxWidth:"550px",color:"#fffdfd"},title:{fontSize:"2.5rem",marginBottom:"15px",fontWeight:700},description:{fontSize:"1.1rem",marginBottom:"25px",opacity:.8,lineHeight:1.6},buttonGroup:{display:"flex",gap:"15px"},button:{display:"inline-block",padding:"18px 100px",backgroundColor:"#ff4d4d",color:"rgb(255, 255, 255)",textDecoration:"none",borderRadius:"8px",fontSize:"1.2rem",fontWeight:600,transition:"all 0.4s ease",border:"2px solid transparent",textTransform:"uppercase",letterSpacing:"1px",marginTop:"20px",cursor:"pointer"}};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .btn-custom:hover {
          background-color: transparent !important;
          border-color: #ff4d4d !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3);
          color: #ff4d4d !important;
        }

        @media (max-width: 1024px) {
          .image-section-custom {
            height: 350px !important;
            margin: 100px auto !important;
          }

          .blur-overlay-custom {
            width: 100% !important;
            padding: 0 60px !important;
            align-items: center !important;
            text-align: center !important;
          }

          .blur-content-custom {
            max-width: 100% !important;
          }

          .blur-title-custom {
            font-size: 2.2rem !important;
          }

          .blur-desc-custom {
            font-size: 1rem !important;
          }

          .btn-custom {
            padding: 10px 20px !important;
          }
        }

        @media (max-width: 768px) {
          .blur-title-custom {
            font-size: 2rem !important;
          }

          .blur-desc-custom {
            font-size: 0.95rem !important;
          }
        }

        @media (max-width: 480px) {
          .image-section-custom {
            height: 300px !important;
            margin: 80px auto !important;
          }

          .blur-overlay-custom {
            padding: 0 30px !important;
          }

          .blur-title-custom {
            font-size: 1.6rem !important;
          }

          .blur-desc-custom {
            font-size: 0.9rem !important;
            margin-bottom: 20px !important;
          }

          .btn-custom {
            font-size: 0.95rem !important;
            padding: 10px 18px !important;
          }
        }

        @media (max-width: 375px) {
          .blur-title-custom {
            font-size: 1.4rem !important;
          }

          .blur-desc-custom {
            font-size: 0.85rem !important;
          }

          .btn-custom {
            width: 100% !important;
            padding: 12px !important;
            font-size: 1rem !important;
          }
        }
      `}),s.jsx("div",{style:u.outerWrapper,children:s.jsx("section",{className:"image-section-custom",style:u.section,children:s.jsxs("div",{style:u.imageContainer,children:[s.jsx("img",{src:"img/women-8080878_1920.png",alt:"Scenic landscape",style:u.backgroundImage}),s.jsx("div",{className:"blur-overlay-custom",style:u.blurOverlay,children:s.jsxs("div",{className:"blur-content-custom",style:u.blurContent,children:[s.jsx("h2",{className:"blur-title-custom",style:u.title,children:"Explore More Flexible Plans"}),s.jsx("p",{className:"blur-desc-custom",style:u.description,children:"Find the perfect fit with our additional flexible plans."}),s.jsx("div",{style:u.buttonGroup,children:s.jsx("a",{href:"about.html",className:"btn-custom",style:u.button,children:"Get Started"})})]})})]})})})]})}function S1(){const[u,c]=A.useState([]),f=A.useRef([]);A.useEffect(()=>{const d=new IntersectionObserver(h=>{h.forEach(p=>{if(p.isIntersecting){const z=parseInt(p.target.dataset.index);c(v=>[...v,z])}})},{threshold:.1});return f.current.forEach(h=>{h&&d.observe(h)}),()=>d.disconnect()},[]);const r=[{title:"Content Writing",description:"We create engaging content that delivers your message seamlessly.",price:"$99 / 500 WORDS"},{title:"Social Media Setup",description:"Let us set up your Facebook Business Page with a professional look.",price:"$99 / Project"},{title:"Additional Pages",description:"Add more pages to your website as your business grows.",price:"$99 / Page"},{title:"Google My Business Setup",description:"Boost your local search visibility with a properly set up Google listing.",price:"$99 / Project"},{title:"SEO Optimization",description:"Improve rankings and drive organic traffic with expert SEO.",price:"$99 / Project"},{title:"Graphic Design",description:"Custom logos, business cards, social media graphics, and more.",price:"$99 / Project"},{title:"Website Maintenance",description:"Keep your site secure and updated with our maintenance services.",price:"Get a Quote"},{title:"Web Hosting & Domain",description:"Reliable web hosting and domain management solutions.",price:"$49 / Project"},{title:"UX & UI Design",description:"Enhance your website's usability and appeal with expert UX/UI design.",price:"Get a Quote"}];return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .pricing-section {
          padding: 60px 20px;
          background: white;
        }

        .pricing-main-title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 30px;
          text-align: center;
          font-weight: 700;
        }

        .pricing-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          max-width: 1265px;
          margin: 0 auto;
        }

        .pricing-card {
          background: #ffffff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.6s ease;
          text-align: left;
          opacity: 0;
          transform: translateX(-50px);
        }

        .pricing-card:nth-child(even) {
          transform: translateX(50px);
        }

        .pricing-card.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .pricing-card-title {
          margin-bottom: 10px;
          color: #222;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .pricing-card-desc {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }

        .pricing-card-price {
          display: inline-block;
          margin-top: 15px;
          font-weight: bold;
          color: #ff3333;
          font-size: 1.2rem;
        }

        /* Tablet - 1024px */
        @media (max-width: 1024px) {
          .pricing-section {
            padding: 50px 30px;
          }

          .pricing-main-title {
            font-size: 2.2rem;
          }

          .pricing-container {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
          }

          .pricing-card {
            padding: 22px;
          }
        }

        /* Mobile - 768px */
        @media (max-width: 768px) {
          .pricing-section {
            padding: 40px 20px;
          }

          .pricing-main-title {
            font-size: 2rem;
            margin-bottom: 25px;
          }

          .pricing-container {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 18px;
          }

          .pricing-card {
            padding: 20px;
          }

          .pricing-card-title {
            font-size: 1.3rem;
          }

          .pricing-card-desc {
            font-size: 0.95rem;
          }

          .pricing-card-price {
            font-size: 1.1rem;
          }
        }

        /* Mobile - 640px */
        @media (max-width: 640px) {
          .pricing-container {
            grid-template-columns: 1fr;
          }
        }

        /* Small Mobile - 480px */
        @media (max-width: 480px) {
          .pricing-section {
            padding: 40px 15px;
          }

          .pricing-main-title {
            font-size: 1.8rem;
          }

          .pricing-card {
            padding: 18px;
          }

          .pricing-card-title {
            font-size: 1.2rem;
          }

          .pricing-card-desc {
            font-size: 0.9rem;
          }
        }

        /* Extra Small Mobile - 375px */
        @media (max-width: 375px) {
          .pricing-main-title {
            font-size: 1.6rem;
          }

          .pricing-card {
            padding: 16px;
          }

          .pricing-card-price {
            font-size: 1rem;
            margin-top: 12px;
          }
        }

        /* Extra Small Mobile - 320px */
        @media (max-width: 320px) {
          .pricing-section {
            padding: 30px 10px;
          }

          .pricing-main-title {
            font-size: 1.5rem;
          }

          .pricing-card {
            padding: 15px;
          }

          .pricing-card-title {
            font-size: 1.1rem;
          }

          .pricing-card-desc {
            font-size: 0.85rem;
          }
        }
      `}),s.jsxs("section",{className:"pricing-section",id:"ourprice",children:[s.jsx("h2",{className:"pricing-main-title",children:"Our Services & Pricing"}),s.jsx("div",{className:"pricing-container",children:r.map((d,h)=>s.jsxs("div",{ref:p=>f.current[h]=p,"data-index":h,className:`pricing-card ${u.includes(h)?"visible":""}`,children:[s.jsx("h3",{className:"pricing-card-title",children:d.title}),s.jsx("p",{className:"pricing-card-desc",children:d.description}),s.jsx("span",{className:"pricing-card-price",children:d.price})]},h))})]})]})}function z1(){return s.jsxs("div",{children:[s.jsx(mu,{}),s.jsx(y1,{}),s.jsx(b1,{}),s.jsx(S1,{}),s.jsx($r,{}),s.jsx(du,{})]})}function E1(){const u=[{src:"img/full-template-578-first-portfolio.jpg",alt:"Portfolio 1"},{src:"img/full-template-580-woox-travel.jpg",alt:"Portfolio 2"},{src:"img/full-template-572-designer.jpg",alt:"Portfolio 3"},{src:"img/full-template-574-mexant.jpg",alt:"Portfolio 4"},{src:"img/full-health.jpg",alt:"Portfolio 5"},{src:"img/fullnew.jpg",alt:"Portfolio 6"},{src:"img/full-template-581-kind-heart-charity.jpg",alt:"Portfolio 7"},{src:"img/full-template-586-scholar.jpg",alt:"Portfolio 8"},{src:"img/full-template-587-tiya-golf-club.jpg",alt:"Portfolio 9"},{src:"img/full-template-591-villa-agency.jpg",alt:"Portfolio 10"}];return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .portfolio-section {
          background: #330000;
          padding: 30px 0;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          gap: 30px;
          align-items: center;
        }

        .first-slider-wrapper {
          position: relative;
          width: 100%;
          min-height: 900px;
        }

        .portfolio-header {
          position: absolute;
          right: 120px;
          top: 50%;
          transform: translateY(-50%);
          color: white;
          width: 450px;
          z-index: 10;
          text-align: left;
          padding: 30px;
          background: rgba(42, 15, 15, 0.9);
          border-radius: 20px;
        }

        .portfolio-title {
          font-size: 3.5rem;
          margin-bottom: 20px;
          color: #fff;
          font-weight: 800;
          line-height: 1.2;
        }

        .portfolio-subtitle {
          font-size: 1.2rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 0;
        }

        .slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .slider-track {
          display: flex;
          gap: 30px;
          padding: 20px 0;
          width: fit-content;
        }

        .slider-track-left {
          animation: scrollLeft 50s linear infinite;
        }

        .slider-track-right {
          animation: scrollRight 50s linear infinite;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }

        .slider-item {
          width: auto;
          height: 860px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }

        .slider-item:hover img {
          transform: scale(1.05);
        }

        .slider-item img {
          width: auto;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .fade-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(to right, #330000, transparent);
        }

        .fade-right {
          position: absolute;
          top: 0;
          right: 0;
          width: 80px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(to left, #330000, transparent);
        }

        @media (max-width: 1024px) {
          .portfolio-title {
            font-size: 2.8rem;
          }
          .portfolio-subtitle {
            font-size: 1.1rem;
          }
          .portfolio-header {
            width: 100%;
            max-width: 400px;
            padding: 20px;
          }
          .slider-item {
            height: 650px;
          }
          .first-slider-wrapper {
            min-height: 700px;
          }
        }

        @media (max-width: 768px) {
          .portfolio-section {
            padding: 40px 0;
          }
          .portfolio-title {
            font-size: 2.2rem;
          }
          .portfolio-subtitle {
            font-size: 1rem;
          }
          .portfolio-header {
            position: relative;
            max-width: 90%;
            left: auto;
            right: auto;
            top: auto;
            transform: none;
            margin: 0 auto 30px;
            text-align: center;
          }
          .slider-item {
            height: 500px;
          }
          .first-slider-wrapper {
            min-height: auto;
          }
        }

        @media (max-width: 480px) {
          .portfolio-section {
            padding: 30px 0;
          }
          .portfolio-title {
            font-size: 1.8rem;
          }
          .portfolio-subtitle {
            font-size: 0.9rem;
          }
          .slider-item {
            height: 400px;
          }
          .fade-left, .fade-right {
            width: 40px;
          }
        }

        @media (max-width: 375px) {
          .portfolio-title {
            font-size: 1.6rem;
          }
          .portfolio-subtitle {
            font-size: 0.85rem;
          }
          .slider-item {
            height: 350px;
          }
        }
      `}),s.jsxs("section",{className:"portfolio-section",children:[s.jsxs("div",{className:"first-slider-wrapper",children:[s.jsxs("div",{className:"portfolio-header",children:[s.jsx("h2",{className:"portfolio-title",children:"Our Creative Journey"}),s.jsx("p",{className:"portfolio-subtitle",children:"Discover our most impactful projects that showcase our passion for innovative design and flawless execution"})]}),s.jsxs("div",{className:"slider-container",children:[s.jsx("div",{className:"fade-left"}),s.jsx("div",{className:"fade-right"}),s.jsxs("div",{className:"slider-track slider-track-left",children:[u.map((c,f)=>s.jsx("div",{className:"slider-item",children:s.jsx("img",{src:c.src,alt:c.alt})},`left-1-${f}`)),u.map((c,f)=>s.jsx("div",{className:"slider-item",children:s.jsx("img",{src:c.src,alt:c.alt})},`left-2-${f}`))]})]})]}),s.jsxs("div",{className:"slider-container",children:[s.jsx("div",{className:"fade-left"}),s.jsx("div",{className:"fade-right"}),s.jsxs("div",{className:"slider-track slider-track-right",children:[u.map((c,f)=>s.jsx("div",{className:"slider-item",children:s.jsx("img",{src:c.src,alt:c.alt})},`right-1-${f}`)),u.map((c,f)=>s.jsx("div",{className:"slider-item",children:s.jsx("img",{src:c.src,alt:c.alt})},`right-2-${f}`))]})]})]})]})}function j1(){const u={heroBlock:{display:"flex",minHeight:"100vh",padding:"80px 40px",background:"#ffffff"},mainWrapper:{display:"flex",maxWidth:"1265px",margin:"0 auto",borderRadius:"10px",overflow:"hidden",backgroundColor:"#fff"},infoArea:{flex:1,padding:"11px",display:"flex",flexDirection:"column",justifyContent:"center"},visualArea:{flex:1.2,position:"relative",overflow:"hidden"},visualAreaImg:{position:"absolute",width:"100%",height:"80%",objectFit:"cover",borderRadius:"20px"},h1:{fontSize:"clamp(2rem, 6vw, 3rem)",marginBottom:"20px",color:"#ff4d4d"},h3:{fontSize:"clamp(1.2rem, 5vw, 1.5rem)",fontWeight:500,color:"#4a5568",marginBottom:"20px"},cont:{fontSize:"clamp(1rem, 4vw, 1.1rem)",marginBottom:"30px",color:"#4a5568"}};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        @media (max-width: 1024px) {
          .hero-block-custom {
            padding: 60px 30px !important;
          }
          .main-wrapper-custom {
            padding: 20px !important;
          }
          .info-area-custom {
            padding: 20px !important;
          }
          .h1-custom {
            font-size: 2.2rem !important;
          }
          .h3-custom {
            font-size: 1.3rem !important;
          }
          .cont-custom {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 768px) {
          .hero-block-custom {
            padding: 50px 25px !important;
          }
          .info-area-custom {
            padding: 15px !important;
          }
          .h1-custom {
            font-size: 1.9rem !important;
          }
          .h3-custom {
            font-size: 1.2rem !important;
          }
          .cont-custom {
            font-size: 0.95rem !important;
          }
        }

        @media (max-width: 600px) {
          .main-wrapper-custom {
            flex-direction: column-reverse !important;
          }
          .visual-area-custom {
            height: 200px !important;
            margin-bottom: 20px !important;
          }
          .visual-area-img-custom {
            border-radius: 10px !important;
          }
          .info-area-custom {
            padding: 15px !important;
          }
          .h1-custom {
            font-size: 1.8rem !important;
          }
          .h3-custom {
            font-size: 1.1rem !important;
          }
          .cont-custom {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-block-custom {
            padding: 40px 15px !important;
          }
          .visual-area-custom {
            height: 180px !important;
          }
          .visual-area-img-custom {
            border-radius: 8px !important;
          }
          .h1-custom {
            font-size: 1.7rem !important;
          }
          .h3-custom {
            font-size: 1rem !important;
          }
          .cont-custom {
            font-size: 0.85rem !important;
          }
        }

        @media (max-width: 375px) {
          .hero-block-custom {
            padding: 30px 10px !important;
          }
          .visual-area-custom {
            height: 220px !important;
          }
          .visual-area-img-custom {
            height: 100% !important;
            border-radius: 5px !important;
          }
          .info-area-custom {
            padding: 10px !important;
          }
          .h1-custom {
            font-size: 1.5rem !important;
          }
          .h3-custom {
            font-size: 0.95rem !important;
          }
          .cont-custom {
            font-size: 0.8rem !important;
          }
        }
      `}),s.jsx("section",{className:"hero-block-custom",style:u.heroBlock,children:s.jsxs("div",{className:"main-wrapper-custom",style:u.mainWrapper,children:[s.jsxs("div",{className:"info-area-custom",style:u.infoArea,children:[s.jsx("h1",{className:"h1-custom",style:u.h1,children:"Web Design Maestro"}),s.jsx("h3",{className:"h3-custom",style:u.h3,children:"Turning visions into high-impact digital realities"}),s.jsx("p",{className:"cont-custom",style:u.cont,children:"With over a decade of experience in crafting bespoke websites, We help businesses transform their online presence through design that not only looks stunning but performs flawlessly. At Merits Solutions, we blend creative vision with technical mastery to build websites that engage, convert, and leave a lasting impression."}),s.jsx("p",{className:"cont-custom",style:u.cont,children:"Each project begins with listening — to your goals, your challenges, and your audience. From there, we design strategically, ensuring every pixel and line of code serves a purpose. Because we believe great web design isn't just about beauty — it's about building digital experiences that move people and grow businesses."})]}),s.jsx("div",{className:"visual-area-custom",style:u.visualArea,children:s.jsx("img",{className:"visual-area-img-custom",src:"img/plans-1867745_1920.jpg",alt:"Web Design Portfolio Preview",style:u.visualAreaImg})})]})})]})}function w1(){const[u,c]=A.useState(null),f=[{name:"Sarah Johnson",role:"Marketing Director",image:"img/woman-2112292_1920.jpg",rating:5,text:"The product exceeded all my expectations. The customer service team was incredibly helpful throughout the entire process. I'll definitely be recommending this to my colleagues!",date:"March 15, 2025"},{name:"Michael Chen",role:"Tech Entrepreneur",image:"img/man-3803551_1920.jpg",rating:5,text:"This solution streamlined our entire workflow. We've seen a 40% increase in productivity since implementing it just three months ago. The onboarding process was seamless.",date:"March 28, 2025"},{name:"Emma Rodriguez",role:"Small Business Owner",image:"img/business-man-4226023_1920.jpg",rating:4,text:"As a small business owner, I needed an affordable solution that didn't compromise on quality. This product delivered exactly that. The only thing I'd suggest improving is the mobile app interface.",date:"April 1, 2025"}];return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        @keyframes continuousPopUp {
          0%, 100% {
            transform: scale(1) translateY(0);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          }
          10% {
            transform: scale(1.05) translateY(-10px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          }
          20% {
            transform: scale(1) translateY(0);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          }
        }

        @keyframes moveLineLeftFull {
          0% {
            left: 100%;
            opacity: 0;
          }
          5% {
            opacity: 0.3;
          }
          95% {
            opacity: 0.3;
          }
          100% {
            left: -100%;
            opacity: 0;
          }
        }

        .review-card-animated {
          animation: continuousPopUp 9s ease-in-out infinite;
        }

        .review-card-animated:nth-child(1) {
          animation-delay: 0s;
        }

        .review-card-animated:nth-child(2) {
          animation-delay: 3s;
        }

        .review-card-animated:nth-child(3) {
          animation-delay: 6s;
        }

        .review-card-animated:hover {
          animation-play-state: paused;
          transform: translateY(-10px) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
        }

        .animated-line-bg {
          position: absolute;
          height: 2px;
          background: #ff4d4d;
          animation: moveLineLeftFull linear infinite;
          opacity: 0;
          z-index: 0;
        }

        .animated-line-bg:nth-child(1) {
          top: 12%;
          width: 200px;
          animation-duration: 8s;
          animation-delay: 0s;
        }

        .animated-line-bg:nth-child(2) {
          top: 22%;
          width: 350px;
          animation-duration: 12s;
          animation-delay: 2s;
        }

        .animated-line-bg:nth-child(3) {
          top: 35%;
          width: 150px;
          animation-duration: 9s;
          animation-delay: 4s;
        }

        .animated-line-bg:nth-child(4) {
          top: 48%;
          width: 280px;
          animation-duration: 11s;
          animation-delay: 1s;
        }

        .animated-line-bg:nth-child(5) {
          top: 60%;
          width: 180px;
          animation-duration: 10s;
          animation-delay: 5s;
        }

        .animated-line-bg:nth-child(6) {
          top: 72%;
          width: 120px;
          animation-duration: 7s;
          animation-delay: 3s;
        }

        .animated-line-bg:nth-child(7) {
          top: 82%;
          width: 240px;
          animation-duration: 13s;
          animation-delay: 6s;
        }

        .animated-line-bg:nth-child(8) {
          top: 92%;
          width: 160px;
          animation-duration: 8.5s;
          animation-delay: 2.5s;
        }

        /* Desktop - 3 columns */
        .reviews-container-custom {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
          position: relative;
          z-index: 1;
        }

        /* Tablet - 3 columns but smaller */
        @media (max-width: 1024px) and (min-width: 769px) {
          .reviews-container-custom {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem !important;
          }
          .section-title-custom h2 {
            font-size: 2.2rem !important;
          }
          .section-title-custom p {
            font-size: 1rem !important;
          }
          .review-card-custom {
            padding: 1.5rem !important;
          }
          .customer-info-custom h3 {
            font-size: 1.1rem !important;
          }
          .rating-custom {
            font-size: 1.1rem !important;
          }
          .review-text-custom {
            font-size: 0.95rem !important;
          }
          .customer-img-custom {
            width: 55px !important;
            height: 55px !important;
          }
        }

        /* Mobile - 1 column */
        @media (max-width: 768px) {
          .reviews-container-custom {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .review-card-custom {
            max-width: 500px !important;
            margin: 0 auto !important;
            padding: 1.5rem !important;
          }
          .section-title-custom h2 {
            font-size: 1.9rem !important;
          }
          .section-title-custom p {
            font-size: 0.95rem !important;
          }
          .customer-info-custom h3 {
            font-size: 1.1rem !important;
          }
          .rating-custom {
            font-size: 1.1rem !important;
          }
          .review-text-custom {
            font-size: 0.95rem !important;
          }
          .quote-icon-custom {
            font-size: 3rem !important;
          }
        }

        @media (max-width: 576px) {
          .review-card-custom {
            max-width: 400px !important;
            padding: 1.3rem !important;
          }
          .section-title-custom h2 {
            font-size: 1.7rem !important;
          }
          .section-title-custom p {
            font-size: 0.9rem !important;
          }
          .customer-info-custom h3 {
            font-size: 1rem !important;
          }
          .review-text-custom {
            font-size: 0.9rem !important;
          }
          .review-date-custom {
            font-size: 0.8rem !important;
          }
          .quote-icon-custom {
            font-size: 2.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .testimonials-container-main {
            padding: 4rem 1.5rem !important;
          }
          .review-card-custom {
            max-width: 340px !important;
            padding: 1.2rem !important;
          }
          .section-title-custom h2 {
            font-size: 1.6rem !important;
          }
          .section-title-custom p {
            font-size: 0.85rem !important;
          }
          .customer-img-custom {
            width: 50px !important;
            height: 50px !important;
          }
          .customer-info-custom h3 {
            font-size: 0.95rem !important;
          }
          .review-text-custom {
            font-size: 0.85rem !important;
          }
          .review-date-custom {
            font-size: 0.75rem !important;
          }
          .quote-icon-custom {
            font-size: 2rem !important;
          }
        }

        @media (max-width: 375px) {
          .testimonials-container-main {
            padding: 3.5rem 1rem !important;
          }
          .review-card-custom {
            max-width: 300px !important;
            padding: 1rem !important;
          }
          .section-title-custom h2 {
            font-size: 1.5rem !important;
          }
          .section-title-custom p {
            font-size: 0.8rem !important;
          }
          .customer-img-custom {
            width: 45px !important;
            height: 45px !important;
          }
          .customer-info-custom h3 {
            font-size: 0.9rem !important;
          }
          .customer-info-custom span {
            font-size: 0.8rem !important;
          }
          .review-text-custom {
            font-size: 0.8rem !important;
          }
          .review-date-custom {
            font-size: 0.7rem !important;
          }
          .quote-icon-custom {
            font-size: 1.8rem !important;
          }
        }
      `}),s.jsxs("section",{className:"testimonials-container-main",style:{maxWidth:"1200px",margin:"0 auto",padding:"5rem 2rem",position:"relative",overflow:"hidden"},children:[s.jsx("div",{className:"animated-line-bg"}),s.jsx("div",{className:"animated-line-bg"}),s.jsx("div",{className:"animated-line-bg"}),s.jsx("div",{className:"animated-line-bg"}),s.jsx("div",{className:"animated-line-bg"}),s.jsx("div",{className:"animated-line-bg"}),s.jsx("div",{className:"animated-line-bg"}),s.jsx("div",{className:"animated-line-bg"}),s.jsxs("div",{className:"section-title-custom",style:{textAlign:"center",marginBottom:"3rem",position:"relative",zIndex:2},children:[s.jsx("h2",{style:{fontSize:"2.5rem",fontWeight:700,color:"#2d3748",marginBottom:"1rem"},children:"What Our Customers Say"}),s.jsx("p",{style:{fontSize:"1.1rem",color:"#718096",maxWidth:"600px",margin:"0 auto"},children:"Read the success stories from our satisfied customers around the world"}),s.jsx("div",{style:{content:"",position:"absolute",bottom:"-10px",left:"50%",transform:"translateX(-50%)",width:"80px",height:"4px",background:"linear-gradient(90deg,#ff3333,#ff3333)",borderRadius:"2px"}})]}),s.jsx("div",{className:"reviews-container-custom",children:f.map((r,d)=>s.jsxs("div",{className:"review-card-custom review-card-animated",onMouseEnter:()=>c(d),onMouseLeave:()=>c(null),style:{background:"white",borderRadius:"16px",padding:"2rem",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.05)",transition:"transform 0.3s ease, box-shadow 0.3s ease",position:"relative",overflow:"hidden"},children:[s.jsx("div",{style:{content:"",position:"absolute",top:0,left:0,width:"100%",height:"5px",background:"linear-gradient(90deg,#ff3333,#ff333377)"}}),s.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"1.5rem"},children:[s.jsx("img",{src:r.image,alt:r.name,className:"customer-img-custom",style:{width:"60px",height:"60px",borderRadius:"50%",objectFit:"cover",marginRight:"1rem",border:"3px solid #f3f4f6"}}),s.jsxs("div",{className:"customer-info-custom",children:[s.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"0.2rem",color:"#2d3748"},children:r.name}),s.jsx("span",{style:{fontSize:"0.9rem",color:"#718096"},children:r.role})]})]}),s.jsx("div",{className:"rating-custom",style:{display:"flex",marginBottom:"1rem",color:"#ff3333",fontSize:"1.2rem"},children:[...Array(5)].map((h,p)=>s.jsx("span",{children:p<r.rating?"★":"☆"},p))}),s.jsx("p",{className:"review-text-custom",style:{color:"#4a5568",lineHeight:1.7,marginBottom:"1rem"},children:r.text}),s.jsx("span",{className:"review-date-custom",style:{fontSize:"0.85rem",color:"#a0aec0",display:"block",textAlign:"right"},children:r.date}),s.jsx("div",{className:"quote-icon-custom",style:{position:"absolute",bottom:"20px",right:"20px",opacity:.1,fontSize:"4rem",color:"#6366f1"},children:'"'})]},d))})]})]})}function T1(){return s.jsxs("div",{children:[s.jsx(mu,{}),s.jsx(E1,{}),s.jsx(j1,{}),s.jsx($r,{}),s.jsx(w1,{}),s.jsx(du,{})]})}function A1(){const[u,c]=A.useState([]),f=A.useRef([]);A.useEffect(()=>{const p=new IntersectionObserver(z=>{z.forEach(v=>{if(v.isIntersecting){const x=f.current.indexOf(v.target);x!==-1&&!u.includes(x)&&c(N=>[...N,x])}})},{threshold:.1});return f.current.forEach(z=>{z&&p.observe(z)}),()=>p.disconnect()},[]);const r=p=>{p&&!f.current.includes(p)&&f.current.push(p)},d=p=>({opacity:u.includes(p)?1:0,transform:u.includes(p)?"translateY(0)":"translateY(20px)",transition:"opacity 0.6s ease, transform 0.6s ease"}),h=[{num:"1",title:"Research",description:"Understanding user needs and market requirements"},{num:"2",title:"Design",description:"Creating wireframes and interactive prototypes"},{num:"3",title:"Develop",description:"Building responsive and accessible solutions"},{num:"4",title:"Deliver",description:"Testing and refining the final product"}];return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .header-title-custom::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background-color: #ff4d4d;
        }

        .about-section-h2::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 5px;
          background-color: #ff4d4d;
        }

        .design-section-h2::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 5px;
          background-color: #ff4d4d;
        }

        @media (max-width: 768px) {
          .design-steps-custom {
            flex-direction: column !important;
          }
          .step-custom {
            margin-bottom: 20px !important;
          }
          .container-custom {
            padding: 80px 15px !important;
          }
          .about-section-custom,
          .design-section-custom {
            padding: 30px 20px !important;
          }
          .header-title-custom {
            font-size: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          .container-custom {
            padding: 60px 10px !important;
          }
          .header-title-custom {
            font-size: 1.8rem !important;
          }
          .about-section-h2,
          .design-section-h2 {
            font-size: 1.5rem !important;
          }
          .about-content-custom {
            font-size: 0.95rem !important;
          }
          .step-num-custom {
            font-size: 2rem !important;
          }
          .step-title-custom {
            font-size: 1.1rem !important;
          }
        }
      `}),s.jsx("section",{className:"container-custom",style:{maxWidth:"1300px",margin:"0 auto",padding:"120px 20px"},children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"60px"},children:[s.jsx("div",{style:{textAlign:"center",marginBottom:"20px"},children:s.jsx("h1",{className:"header-title-custom",style:{fontSize:"2.5rem",color:"#2c3e50",marginBottom:"10px",position:"relative",display:"inline-block"},children:"MERITS SOLUTION"})}),s.jsxs("div",{ref:r,className:"about-section-custom",style:{...d(0),backgroundColor:"white",borderRadius:"10px",padding:"40px",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.1)"},children:[s.jsx("h2",{className:"about-section-h2",style:{color:"#2c3e50",fontSize:"1.8rem",marginBottom:"20px",position:"relative",paddingLeft:"15px"},children:"About Our Company"}),s.jsxs("div",{className:"about-content-custom",style:{fontSize:"1.05rem",color:"#555",textAlign:"justify"},children:[s.jsx("p",{children:"Founded in 2015, we are a leading digital solutions provider committed to delivering exceptional web experiences. Our team of passionate developers and designers works tirelessly to transform your digital vision into reality."}),s.jsx("br",{}),s.jsx("p",{children:"We pride ourselves on our customer-centric approach, ensuring that each project is tailored to meet the unique needs of our clients. With a track record of successful projects across various industries including e-commerce, healthcare, and education, we bring expertise and innovation to every engagement."}),s.jsx("br",{}),s.jsx("p",{children:"Our commitment to excellence has earned us recognition as a trusted partner for businesses of all sizes. We leverage cutting-edge technologies and best practices to ensure your digital presence not only meets but exceeds industry standards. Whether you're a startup looking to establish your online presence or an enterprise seeking digital transformation, we have the expertise to help you succeed."})]})]}),s.jsxs("div",{ref:r,className:"design-section-custom",style:{...d(1),backgroundColor:"white",borderRadius:"10px",padding:"40px",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.1)"},children:[s.jsx("h2",{className:"design-section-h2",style:{color:"#2c3e50",fontSize:"1.8rem",marginBottom:"30px",position:"relative",paddingLeft:"15px"},children:"Design Philosophy"}),s.jsx("div",{className:"design-steps-custom",style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:"20px"},children:h.map((p,z)=>s.jsxs("div",{ref:r,className:"step-custom",style:{...d(z+2),flex:"1 1 250px",backgroundColor:"#f3ecec",borderRadius:"8px",padding:"25px",textAlign:"center",transition:"transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease",cursor:"pointer",position:"relative",overflow:"hidden"},onMouseEnter:v=>{v.currentTarget.style.transform="translateY(-10px)",v.currentTarget.style.boxShadow="0 10px 20px rgba(0, 0, 0, 0.411)"},onMouseLeave:v=>{v.currentTarget.style.transform=u.includes(z+2)?"translateY(0)":"translateY(20px)",v.currentTarget.style.boxShadow="none"},children:[s.jsx("div",{className:"step-num-custom",style:{fontSize:"2.5rem",fontWeight:"bold",color:"#ff4d4d",marginBottom:"10px"},children:p.num}),s.jsx("div",{className:"step-title-custom",style:{fontSize:"1.3rem",fontWeight:"bold",color:"#2c3e50",marginBottom:"15px"},children:p.title}),s.jsx("div",{style:{fontSize:"1rem",color:"#666"},children:p.description})]},z))})]})]})})]})}function N1(){return s.jsxs("div",{children:[s.jsx(mu,{}),s.jsx(A1,{}),s.jsx(du,{})]})}function O1(){return s.jsx(Lg,{children:s.jsxs(gg,{children:[s.jsx(Un,{path:"/",element:s.jsx(v1,{})}),s.jsx(Un,{path:"/price",element:s.jsx(z1,{})}),s.jsx(Un,{path:"/portfolio",element:s.jsx(T1,{})}),s.jsx(Un,{path:"/about",element:s.jsx(N1,{})})]})})}vh.createRoot(document.getElementById("root")).render(s.jsx(A.StrictMode,{children:s.jsx(O1,{})}));
