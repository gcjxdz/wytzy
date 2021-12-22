!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).assetsRetry=e()}(this,function(){"use strict";function u(t){return t}function h(){}function t(t){for(var e=Object.getPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__},r=Object.keys(t);e(t);)r=r.concat(Object.keys(e(t))),t=e(t);return r.filter(function(t){return"constructor"!==t})}function n(t,e){try{return"function"==typeof t[e]}catch(t){return!1}}function f(t){return Array.isArray(t)?t.reduce(function(t,e,r,n){return t[e]=n[(r+1)%n.length],t},{}):t}function y(e,t){return Object.keys(t).filter(function(t){return-1<e.indexOf(t)}).sort(function(t,e){return e.length-t.length})[0]}var e,r,o,g="retryTimes",l="succeeded",b="failed",m="maxRetryCount",E="onRetry",d="onSuccess",O="onFail",j="domain",i="_assetsRetryProxy",p="_assetsRetryOnerror",s="script",c="link",w="data-assets-retry-hooked",A="data-assets-retry-ignore",k="data-retry-id",v=window,R=window.document,a=v.HTMLElement,S=v.HTMLScriptElement,L=v.HTMLStyleElement,T=v.HTMLLinkElement,x=v.HTMLImageElement,_=Object.prototype.hasOwnProperty,M=function(t,e,r){var n=t.indexOf(e);return-1===n?t:t.substring(0,n)+r+t.substring(n+e.length)},N=function(t){return[].slice.call(t)},H=function(e,t,r,n){void 0===r&&(r=h),void 0===n&&(n=!1);var o,i,c,a,u,f=n||e.defer||e.async;"loading"!==R.readyState||/Edge|MSIE|rv:/i.test(navigator.userAgent)||f?(o=R.createElement(s),Object.keys(S.prototype).forEach(function(t){if("src"!==t&&e[t]&&"object"!=typeof e[t])try{o[t]=e[t]}catch(t){}}),o.src=t,o.onload=e.onload,o.onerror=e.onerror,o.setAttribute(k,B()),(i=e.getAttribute("nonce"))&&o.setAttribute("nonce",i),R.getElementsByTagName("head")[0].appendChild(o)):(c=B(),a=e.outerHTML.replace(/data-retry-id="[^"]+"/,"").replace(/src=(?:"[^"]+"|.+)([ >])/,k+"="+c+' src="'+t+'"$1'),R.write(a),(u=R.querySelector("script["+k+'="'+c+'"]'))&&(u.onload=r))},P=function(e){try{return e.rules}catch(t){try{return e.cssRules}catch(t){return null}}},I=function(e,t,r){var n=R.createElement(c);Object.keys(T.prototype).forEach(function(t){if("href"!==t&&e[t]&&"object"!=typeof e[t])try{n[t]=e[t]}catch(t){}}),n.href=t,n.onload=r||e.onload,n.onerror=e.onerror,n.setAttribute(k,B()),R.getElementsByTagName("head")[0].appendChild(n)},C=function(t){return t?t instanceof a?[t.nodeName,t.src,t.href,t.getAttribute(k)].join(";"):"not_supported":"null"},B=function(){return Math.random().toString(36).slice(2)},q=function(t){return t instanceof S||t instanceof x?t.src:t instanceof T?t.href:""},z={},F=function(t,e){var r,n=Z(t,e),o=n[0],i=n[1];return o?(z[o]=z[o]||((r={})[g]=0,r[b]=[],r[l]=[],r),[i,z[o]]):[]},Z=function(t,e){var r,n,o=y(t,e);return o?[(n=o,(r=t).substr(r.indexOf(n)+n.length,r.length)),o]:["",""]};try{r=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),o=0,e=0;e<r;e++)for(var i=arguments[e],c=0,a=i.length;c<a;c++,o++)n[o]=i[c];return n}(t(S.prototype),t(T.prototype)),o={},r.forEach(function(t){o[t]=!0}),e=Object.keys(o)}catch(t){}function $(s,t){var l=t[m],d=f(t[j]),y=t[E];return e.reduce(function(t,r){var e=n(S.prototype,r);return t[r]=e?{value:function(){return s[i][r].apply(s[i],arguments)}}:{set:function(e){var f=s[i];return"onerror"===r?(s[p]=e,void(f.onerror=function(n){if("string"!=typeof n){n.stopPropagation&&n.stopPropagation();var t=function(){return t=s[p],e=f,r=n,"function"!=typeof t?null:t.call(e,r);var t,e,r},e=q(f),r=F(e,d),o=r[0],i=r[1],c=f.hasAttribute(A);if(!o||!i||c)return t();var a=M(e,o,d[o]),u=y(a,e,i);if(null===u)return t();if("string"!=typeof u)throw new Error("a string should be returned in `onRetry` function");i[g]<=l?f instanceof S?H(f,u,h,!0):f instanceof T&&I(f,u):t()}})):"onload"===r?(s._assetsRetryOnload=e,void(s[i].onload=function(t){e&&!e._called&&(e._called=!0,e.call(s[i],t))})):void(f[r]=e)},get:function(){return s[i][r]}},t},{})}var D=function(r){var n=R.createElement;R.createElement=function(t,e){return t===s||t===c?function(t,e){var r;t.setAttribute(w,"true");var n=((r={})[i]=t,r[p]=h,r),o=$(n,e);return Object.defineProperties(n,o),n.onload=h,n.onerror=h,n}(n.call(R,t),r):n.call(R,t,e)}},G=function(r){Object.keys(r).filter(function(t){return n(r,t)}).forEach(function(t){var e=r[t];r[t]=function(){var t=[].slice.call(arguments).map(function(t){return t&&_.call(t,i)?t[i]:t});return e.apply(this,t)}})};var J={};function K(y){function f(t){if(t){var e=t.target||t.srcElement,r=q(e);if(r){var n=F(r,v),o=n[0],i=n[1],c=e instanceof HTMLElement&&e.hasAttribute(A);if(i&&o&&!c){i[g]++,i[b].push(r);var a,u=i[g]>y[m];if(u&&(a=Z(r,v)[0],p(a)),v[o]&&!u){var f=v[o],s=M(r,o,f),l=h(s,r,i);if(null!==l){if("string"!=typeof l)throw new Error("a string should be returned in `onRetry` function");var d=C(e);J[d]||(J[d]=!0,e instanceof S&&!e.getAttribute(w)&&e.src?H(e,l):e instanceof T&&!e.getAttribute(w)&&e.href?I(e,l):e instanceof x&&e.src&&(e.setAttribute(k,B()),e.src=l))}}}}}}var h=y[E],s=y[d],p=y[O],v=y[j];R.addEventListener("error",f,!0),R.addEventListener("load",function(t){var e,r,n,o,i,c,a,u;t&&(e=t.target||t.srcElement,(r=q(e))&&((n=F(r,v))[0],o=n[1],i=Z(r,v)[0],c=function(){o&&o[l].push(r),s(i)},e instanceof T?R.styleSheets&&(a=N(R.styleSheets).filter(function(t){return t.href===e.href})[0],null!==(u=P(a))&&(0!==u.length?c():f(t))):c()))},!0)}function Q(t,e,r,n,o){var i=o[j],c=o[E],a=e.style&&e.style[t];if(a&&!/^url\(["']?data:/.test(a)){var u=a.match(/^url\(["']?(.+?)["']?\)/)||[],f=u[1];if(f){var s=y(f,i);if(s&&i[s]){var l=Object.keys(i).map(function(t){var e=M(f,s,t);return'url("'+c(e,f,null)+'")'}).join(","),d=e.selectorText+("{ "+t.replace(/([a-z])([A-Z])/g,function(t,e,r){return e+"-"+r.toLowerCase()}))+": "+l+" !important; }";try{r.insertRule(d,n.length)}catch(t){r.insertRule(d,0)}}}}}var U={},V=[],W=function(t,o){var i=["backgroundImage","borderImage","listStyleImage"];t.forEach(function(r){var n,t=P(r);null!==t&&((n=N(t)).forEach(function(e){i.forEach(function(t){Q(t,e,r,n,o)})}),r.href&&(U[r.href]=!0),r.ownerNode instanceof L&&V.push(r.ownerNode))})},X=function(t,r){return N(t).filter(function(t){if(!P(t))return!1;if(t.href)return!U[t.href]&&!!y(t.href,r);var e=t.ownerNode;return!(e instanceof L&&-1<V.indexOf(e))})};return function(t){var e,r,n,o;void 0===t&&(t={});try{if("object"!=typeof t[j])throw new Error("opts.domain cannot be non-object.");var i=[m,E,d,O,j],c=Object.keys(t).filter(function(t){return-1===i.indexOf(t)});if(0<c.length)throw new Error("option name: "+c.join(", ")+" is not valid.");var a=((e={})[m]=t[m]||3,e[E]=t[E]||u,e[d]=t[d]||h,e[O]=t[O]||h,e[j]=f(t[j]),e);return D(a),"undefined"!=typeof Node&&G(Node.prototype),"undefined"!=typeof Element&&G(Element.prototype),K(a),r=a,n=R.styleSheets,o=r[j],n&&setInterval(function(){var t=X(R.styleSheets,o);0<t.length&&W(t,r)},250),z}catch(t){v.console&&console.error("[assetsRetry] error captured",t)}}});
//# sourceMappingURL=assets-retry.umd.js.map