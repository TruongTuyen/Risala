/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransitions-forcetouch-mq !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,u;for(var a in g)if(g.hasOwnProperty(a)){if(e=[],t=g[a],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],u=s.split("."),1===u.length?Modernizr[u[0]]=o:(!Modernizr[u[0]]||Modernizr[u[0]]instanceof Boolean||(Modernizr[u[0]]=new Boolean(Modernizr[u[0]])),Modernizr[u[0]][u[1]]=o),_.push((o?"":"no-")+u.join("-"))}}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function u(){var e=t.body;return e||(e=s(E?"svg":"body"),e.fake=!0),e}function a(e,n,r,o){var i,a,l,f,d="modernizr",p=s("div"),c=u();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:d+(r+1),p.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+d,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(c)),a=n(p,e),c.fake?(c.parentNode.removeChild(c),S.style.overflow=f,S.offsetHeight):p.parentNode.removeChild(p),!!a}function l(e,t){return!!~(""+e).indexOf(t)}function f(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?f(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(t[o])+":"+r+")");return i=i.join(" or "),a("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return n}function v(e,t,o,u){function a(){d&&(delete P.style,delete P.modElem)}if(u=r(u,"undefined")?!1:u,!r(o,"undefined")){var f=m(e,o);if(!r(f,"undefined"))return f}for(var d,p,c,v,y,h=["modernizr","tspan","samp"];!P.style&&h.length;)d=!0,P.modElem=s(h.shift()),P.style=P.modElem.style;for(c=e.length,p=0;c>p;p++)if(v=e[p],y=P.style[v],l(v,"-")&&(v=i(v)),P.style[v]!==n){if(u||r(o,"undefined"))return a(),"pfx"==t?v:!0;try{P.style[v]=o}catch(g){}if(P.style[v]!=y)return a(),"pfx"==t?v:!0}return a(),!1}function y(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),u=(e+" "+O.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?v(u,t,o,i):(u=(e+" "+z.join(s+" ")+s).split(" "),d(u,t,n))}function h(e,t,r){return y(e,n,n,t,r)}var g=[],C={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){g.push({name:e,fn:t,options:n})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var _=[],S=t.documentElement,E="svg"===S.nodeName.toLowerCase(),w=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=s(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=s("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();C.hasEvent=w;var x=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return a("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();C.mq=x;var b="Moz O ms Webkit",O=C._config.usePrefixes?b.split(" "):[];C._cssomPrefixes=O;var T=function(t){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var s=0;o>s;s++){var u=prefixes[s],a=u.toUpperCase()+"_"+r;if(a in i)return"@-"+u.toLowerCase()+"-"+t}return!1};C.atRule=T;var z=C._config.usePrefixes?b.toLowerCase().split(" "):[];C._domPrefixes=z;var A={elem:s("modernizr")};Modernizr._q.push(function(){delete A.elem});var P={style:A.elem.style};Modernizr._q.unshift(function(){delete P.style}),C.testAllProps=y;var M=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?T(e):(-1!=e.indexOf("-")&&(e=i(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("forcetouch",function(){return w(M("mouseforcewillbegin",e,!1),e)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1}),C.testAllProps=h,Modernizr.addTest("csstransitions",h("transition","all",!0)),o(),delete C.addTest,delete C.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);