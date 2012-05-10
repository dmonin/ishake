//     Zepto.js
//     (c) 2010-2012 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===a&&(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length>>>0,e=0,f;if(typeof b!="function")throw new TypeError;if(d==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}while(!0);while(e<d)e in c&&(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function w(a){return v.call(a)=="[object Function]"}function x(a){return a instanceof Object}function y(b){var c,d;if(v.call(b)!=="[object Object]")return!1;d=typeof b.constructor=="function"&&b.constructor.prototype;if(!d||!hasOwnProperty.call(d,"isPrototypeOf"))return!1;for(c in b);return c===a||hasOwnProperty.call(b,c)}function z(a){return a instanceof Array}function A(a){return typeof a.length=="number"}function B(b){return b.filter(function(b){return b!==a&&b!==null})}function C(a){return a.length>0?[].concat.apply([],a):a}function D(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})}function E(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function F(a){return a.filter(function(a,b,c){return c.indexOf(a)==b})}function G(a){return a in i?i[a]:i[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function H(a,b){return typeof b=="number"&&!k[E(a)]?b+"px":b}function I(a){var b,c;return h[a]||(b=g.createElement(a),g.body.appendChild(b),c=j(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),h[a]=c),h[a]}function J(b,c){c===a&&(c=l.test(b)&&RegExp.$1),c in q||(c="*");var d=q[c];return d.innerHTML=""+b,f.call(d.childNodes)}function K(a,b){return a=a||e,a.__proto__=K.prototype,a.selector=b||"",a}function L(b,d){if(!b)return K();if(d!==a)return L(d).find(b);if(w(b))return L(g).ready(b);if(b instanceof K)return b;var e;return z(b)?e=B(b):y(b)?(e=[L.extend({},b)],b=null):m.indexOf(b.nodeType)>=0||b===window?(e=[b],b=null):l.test(b)?(e=J(b.trim(),RegExp.$1),b=null):b.nodeType&&b.nodeType==3?e=[b]:e=c(g,b),K(e,b)}function M(b,c){return c===a?L(b):L(b).filter(c)}function N(a,b,c,d){return w(b)?b.call(a,c,d):b}function O(a,b,c){var d=a%2?b:b.parentNode;d&&d.insertBefore(c,a?a==1?d.firstChild:a==2?b:null:b.nextSibling)}function P(a,b){b(a);for(var c in a.childNodes)P(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=window.document,h={},i={},j=g.defaultView.getComputedStyle,k={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+)[^>]*>/,m=[1,9,11],n=["after","prepend","before","append"],o=g.createElement("table"),p=g.createElement("tr"),q={tr:g.createElement("tbody"),tbody:o,thead:o,tfoot:o,td:p,th:p,"*":g.createElement("div")},r=/complete|loaded|interactive/,s=/^\.([\w-]+)$/,t=/^#([\w-]+)$/,u=/^[\w-]+$/,v={}.toString;return L.extend=function(c){return f.call(arguments,1).forEach(function(d){for(b in d)d[b]!==a&&(c[b]=d[b])}),c},L.qsa=c=function(a,b){var c;return a===g&&t.test(b)?(c=a.getElementById(RegExp.$1))?[c]:e:a.nodeType!==1&&a.nodeType!==9?e:f.call(s.test(b)?a.getElementsByClassName(RegExp.$1):u.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},L.isFunction=w,L.isObject=x,L.isArray=z,L.isPlainObject=y,L.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},L.map=function(a,b){var c,d=[],e,f;if(A(a))for(e=0;e<a.length;e++)c=b(a[e],e),c!=null&&d.push(c);else for(f in a)c=b(a[f],f),c!=null&&d.push(c);return C(d)},L.each=function(a,b){var c,d;if(A(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},L.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,indexOf:e.indexOf,concat:e.concat,map:function(a){return L.map(this,function(b,c){return a.call(b,c,b)})},slice:function(){return L(f.apply(this,arguments))},ready:function(a){return r.test(g.readyState)?a(L):g.addEventListener("DOMContentLoaded",function(){a(L)},!1),this},get:function(b){return b===a?f.call(this):this[b]},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return this.forEach(function(b,c){a.call(b,c,b)}),this},filter:function(a){return L([].filter.call(this,function(b){return b.parentNode&&c(b.parentNode,a).indexOf(b)>=0}))},add:function(a,b){return L(F(this.concat(L(a,b))))},is:function(a){return this.length>0&&L(this[0]).filter(a).length>0},not:function(b){var c=[];if(w(b)&&b.call!==a)this.each(function(a){b.call(this,a)||c.push(this)});else{var d=typeof b=="string"?this.filter(b):A(b)&&w(b.item)?f.call(b):L(b);this.forEach(function(a){d.indexOf(a)<0&&c.push(a)})}return L(c)},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!x(a)?a:L(a)},last:function(){var a=this[this.length-1];return a&&!x(a)?a:L(a)},find:function(a){var b;return this.length==1?b=c(this[0],a):b=this.map(function(){return c(this,a)}),L(b)},closest:function(a,b){var d=this[0],e=c(b||g,a);e.length||(d=null);while(d&&e.indexOf(d)<0)d=d!==b&&d!==g&&d.parentNode;return L(d)},parents:function(a){var b=[],c=this;while(c.length>0)c=L.map(c,function(a){if((a=a.parentNode)&&a!==g&&b.indexOf(a)<0)return b.push(a),a});return M(b,a)},parent:function(a){return M(F(this.pluck("parentNode")),a)},children:function(a){return M(this.map(function(){return f.call(this.children)}),a)},siblings:function(a){return M(this.map(function(a,b){return f.call(b.parentNode.children).filter(function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return this.map(function(){return this[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),j(this,"").getPropertyValue("display")=="none"&&(this.style.display=I(this.nodeName))})},replaceWith:function(a){return this.each(function(){L(this).before(a).remove()})},wrap:function(a){return this.each(function(){L(this).wrapAll(L(a)[0].cloneNode(!1))})},wrapAll:function(a){return this[0]&&(L(this[0]).before(a=L(a)),a.append(this)),this},unwrap:function(){return this.parent().each(function(){L(this).replaceWith(L(this).children())}),this},hide:function(){return this.css("display","none")},toggle:function(b){return(b===a?this.css("display")=="none":b)?this.show():this.hide()},prev:function(){return L(this.pluck("previousElementSibling"))},next:function(){return L(this.pluck("nextElementSibling"))},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var c=this.innerHTML;L(this).empty().append(N(this,b,a,c))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(x(c))for(b in c)this.setAttribute(b,c[b]);else this.setAttribute(c,N(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.removeAttribute(a)})},data:function(a,b){return this.attr("data-"+a,b)},val:function(b){return b===a?this.length>0?this[0].value:a:this.each(function(a){this.value=N(this,b,a,this.value)})},offset:function(){if(this.length==0)return null;var a=this[0].getBoundingClientRect();return{left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:a.width,height:a.height}},css:function(c,d){if(d===a&&typeof c=="string")return this.length==0?a:this[0].style[D(c)]||j(this[0],"").getPropertyValue(c);var e="";for(b in c)e+=E(b)+":"+H(b,c[b])+";";return typeof c=="string"&&(e=E(c)+":"+H(c,d)),this.each(function(){this.style.cssText+=";"+e})},index:function(a){return a?this.indexOf(L(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return this.length<1?!1:G(a).test(this[0].className)},addClass:function(a){return this.each(function(b){d=[];var c=this.className,e=N(this,a,b,c);e.split(/\s+/g).forEach(function(a){L(this).hasClass(a)||d.push(a)},this),d.length&&(this.className+=(c?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){if(b===a)return this.className="";d=this.className,N(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(G(a)," ")}),this.className=d.trim()})},toggleClass:function(b,c){return this.each(function(d){var e=N(this,b,d,this.className);(c===a?!L(this).hasClass(e):c)?L(this).addClass(e):L(this).removeClass(e)})}},["width","height"].forEach(function(b){L.fn[b]=function(c){var d,e=b.replace(/./,function(a){return a[0].toUpperCase()});return c===a?this[0]==window?window["inner"+e]:this[0]==g?g.documentElement["offset"+e]:(d=this.offset())&&d[b]:this.each(function(a){var d=L(this);d.css(b,N(this,c,a,d[b]()))})}}),n.forEach(function(a,b){L.fn[a]=function(a){var c=x(a)?a:J(a);if(!("length"in c)||c.nodeType)c=[c];if(c.length<1)return this;var d=this.length,e=d>1,f=b<2;return this.each(function(a,g){for(var h=0;h<c.length;h++){var i=c[f?c.length-h-1:h];P(i,function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&window.eval.call(window,a.innerHTML)}),e&&a<d-1&&(i=i.cloneNode(!0)),O(b,g,i)}})},L.fn[b%2?a+"To":"insert"+(b?"Before":"After")]=function(b){return L(b)[a](this),this}}),K.prototype=L.fn,L}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(a){function f(a){return a._zid||(a._zid=d++)}function g(a,b,d,e){b=h(b);if(b.ns)var g=i(b.ns);return(c[f(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||g.test(a.ns))&&(!d||a.fn==d)&&(!e||a.sel==e)})}function h(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function i(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function j(b,c,d){a.isObject(b)?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function k(b,d,e,g,i,k){k=!!k;var l=f(b),m=c[l]||(c[l]=[]);j(d,e,function(c,d){var e=i&&i(d,c),f=e||d,j=function(a){var c=f.apply(b,[a].concat(a.data));return c===!1&&a.preventDefault(),c},l=a.extend(h(c),{fn:d,proxy:j,sel:g,del:e,i:m.length});m.push(l),b.addEventListener(l.e,j,k)})}function l(a,b,d,e){var h=f(a);j(b||"",d,function(b,d){g(a,b,d,e).forEach(function(b){delete c[h][b.i],a.removeEventListener(b.e,b.proxy,!1)})})}function p(b){var c=a.extend({originalEvent:b},b);return a.each(o,function(a,d){c[a]=function(){return this[d]=m,b[a].apply(b,arguments)},c[d]=n}),c}function q(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var b=a.qsa,c={},d=1,e={};e.click=e.mousedown=e.mouseup=e.mousemove="MouseEvents",a.event={add:k,remove:l},a.fn.bind=function(a,b){return this.each(function(){k(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){l(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){k(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return l(d,b,a),c}})})};var m=function(){return!0},n=function(){return!1},o={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,c,d){var e=!1;if(c=="blur"||c=="focus")a.iswebkit?c=c=="blur"?"focusout":c=="focus"?"focusin":c:e=!0;return this.each(function(f,g){k(g,c,d,b,function(c){return function(d){var e,f=a(d.target).closest(b,g).get(0);if(f)return e=a.extend(p(d),{currentTarget:f,liveFired:g}),c.apply(f,[e].concat([].slice.call(arguments,1)))}},e)})},a.fn.undelegate=function(a,b,c){return this.each(function(){l(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return c===undefined||a.isFunction(c)?this.bind(b,c):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return c===undefined||a.isFunction(c)?this.unbind(b,c):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){return typeof b=="string"&&(b=a.Event(b)),q(b),b.data=c,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,h){d=p(typeof b=="string"?a.Event(b):b),d.data=c,d.target=h,a.each(g(h,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){if(a)this.bind(b,a);else if(this.length)try{this.get(0)[b]()}catch(c){}return this}}),a.Event=function(a,b){var c=document.createEvent(e[a]||"Events"),d=!0;if(b)for(var f in b)f=="bubbles"?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c}}(Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&&a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&&a.match(/TouchPad/),j=a.match(/(BlackBerry).*Version\/([\d.]+)/);if(c.webkit=!!d)c.version=d[1];e&&(b.android=!0,b.version=e[2]),g&&(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,".")),f&&(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,".")),h&&(b.webos=!0,b.version=h[2]),i&&(b.touchpad=!0),j&&(b.blackberry=!0,b.version=j[2])}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a,b){function k(a){return a.toLowerCase()}function l(a){return d?d+a:k(a)}var c="",d,e,f,g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},h=window.document,i=h.createElement("div"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;a.each(g,function(a,e){if(i.style[a+"TransitionProperty"]!==b)return c="-"+k(a)+"-",d=e,!1}),a.fx={off:d===b&&i.style.transitionProperty===b,cssPrefix:c,transitionEnd:l("TransitionEnd"),animationEnd:l("AnimationEnd")},a.fn.animate=function(b,c,d,e){return a.isObject(c)&&(d=c.easing,e=c.complete,c=c.duration),c&&(c/=1e3),this.anim(b,c,d,e)},a.fn.anim=function(d,e,f,g){var h,i={},k,l=this,m,n=a.fx.transitionEnd;e===b&&(e=.4),a.fx.off&&(e=0);if(typeof d=="string")i[c+"animation-name"]=d,i[c+"animation-duration"]=e+"s",n=a.fx.animationEnd;else{for(k in d)j.test(k)?(h||(h=[]),h.push(k+"("+d[k]+")")):i[k]=d[k];h&&(i[c+"transform"]=h.join(" ")),a.fx.off||(i[c+"transition"]="all "+e+"s "+(f||""))}return m=function(b){if(typeof b!="undefined"){if(b.target!==b.currentTarget)return;a(b.target).unbind(n,arguments.callee)}var d={};d[c+"transition"]=d[c+"animation-name"]="none",a(this).css(d),g&&g.call(this)},e>0&&this.bind(n,m),setTimeout(function(){l.css(i),e<=0&&setTimeout(function(){l.each(function(){m.call(this)})},0)},0),this},i=null}(Zepto),function(a){function h(b,c,d){var e=a.Event(c);return a(b).trigger(e,d),!e.defaultPrevented}function i(a,b,c,e){if(a.global)return h(b||d,c,e)}function j(b){b.global&&a.active++===0&&i(b,null,"ajaxStart")}function k(b){b.global&&!--a.active&&i(b,null,"ajaxStop")}function l(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||i(b,c,"ajaxBeforeSend",[a,b])===!1)return!1;i(b,c,"ajaxSend",[a,b])}function m(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),i(c,d,"ajaxSuccess",[b,c,a]),o(e,b,c)}function n(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),i(d,e,"ajaxError",[c,d,a]),o(b,c,d)}function o(a,b,c){var d=c.context;c.complete.call(d,b,a),i(c,d,"ajaxComplete",[b,c]),k(c)}function p(){}function r(b,d,e,f){var g=a.isArray(d);a.each(d,function(d,h){f&&(d=e?f:f+"["+(g?"":d)+"]"),!f&&g?b.add(h.name,h.value):(e?a.isArray(h):c(h))?r(b,h,e,d):b.add(d,h)})}var b=0,c=a.isObject,d=window.document,e,f,g=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;a.active=0,a.ajaxJSONP=function(c){var e="jsonp"+ ++b,f=d.createElement("script"),g=function(){a(f).remove(),e in window&&(window[e]=p),o("abort",h,c)},h={abort:g},i;return c.error&&(f.onerror=function(){h.abort(),c.error()}),window[e]=function(b){clearTimeout(i),a(f).remove(),delete window[e],m(b,h,c)},f.src=c.url.replace(/=\?/,"="+e),a("head").append(f),c.timeout>0&&(i=setTimeout(function(){h.abort(),o("timeout",h,c)},c.timeout)),h},a.ajaxSettings={type:"GET",beforeSend:p,success:p,error:p,complete:p,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},crossDomain:!1,timeout:0},a.ajax=function(b){var d=a.extend({},b||{});for(e in a.ajaxSettings)d[e]===undefined&&(d[e]=a.ajaxSettings[e]);j(d),d.crossDomain||(d.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(d.url)&&RegExp.$2!=window.location.host);if(/=\?/.test(d.url))return a.ajaxJSONP(d);d.url||(d.url=window.location.toString()),d.data&&!d.contentType&&(d.contentType="application/x-www-form-urlencoded"),c(d.data)&&(d.data=a.param(d.data));if(d.type.match(/get/i)&&d.data){var g=d.data;d.url.match(/\?.*=/)?g="&"+g:g[0]!="?"&&(g="?"+g),d.url+=g}var h=d.accepts[d.dataType],i={},k=/^([\w-]+:)\/\//.test(d.url)?RegExp.$1:window.location.protocol,o=a.ajaxSettings.xhr(),q;d.crossDomain||(i["X-Requested-With"]="XMLHttpRequest"),h&&(i.Accept=h),d.headers=a.extend(i,d.headers||{}),o.onreadystatechange=function(){if(o.readyState==4){clearTimeout(q);var a,b=!1;if(o.status>=200&&o.status<300||o.status==0&&k=="file:"){if(h=="application/json"&&!/^\s*$/.test(o.responseText))try{a=JSON.parse(o.responseText)}catch(c){b=c}else a=o.responseText;b?n(b,"parsererror",o,d):m(a,o,d)}else n(null,"error",o,d)}};var r="async"in d?d.async:!0;o.open(d.type,d.url,r),d.contentType&&(d.headers["Content-Type"]=d.contentType);for(f in d.headers)o.setRequestHeader(f,d.headers[f]);return l(o,d)===!1?(o.abort(),!1):(d.timeout>0&&(q=setTimeout(function(){o.onreadystatechange=p,o.abort(),n(null,"timeout",o,d)},d.timeout)),o.send(d.data),o)},a.get=function(b,c){return a.ajax({url:b,success:c})},a.post=function(b,c,d,e){return a.isFunction(c)&&(e=e||d,d=c,c=null),a.ajax({type:"POST",url:b,data:c,success:d,dataType:e})},a.getJSON=function(b,c){return a.ajax({url:b,success:c,dataType:"json"})},a.fn.load=function(b,c){if(!this.length)return this;var e=this,f=b.split(/\s/),h;return f.length>1&&(b=f[0],h=f[1]),a.get(b,function(b){e.html(h?a(d.createElement("div")).html(b.replace(g,"")).find(h).html():b),c&&c.call(e)}),this};var q=encodeURIComponent;a.param=function(a,b){var c=[];return c.add=function(a,b){this.push(q(a)+"="+q(b))},r(c,a,b),c.join("&").replace("%20","+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&(d!="radio"&&d!="checkbox"||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a){function d(a){return"tagName"in a?a:a.parentNode}function e(a,b,c,d){var e=Math.abs(a-b),f=Math.abs(c-d);return e>=f?a-b>0?"Left":"Right":c-d>0?"Up":"Down"}function g(){b.last&&Date.now()-b.last>=f&&(b.el.trigger("longTap"),b={})}var b={},c,f=750;a(document).ready(function(){a(document.body).bind("touchstart",function(e){var h=Date.now(),i=h-(b.last||h);b.el=a(d(e.touches[0].target)),c&&clearTimeout(c),b.x1=e.touches[0].pageX,b.y1=e.touches[0].pageY,i>0&&i<=250&&(b.isDoubleTap=!0),b.last=h,setTimeout(g,f)}).bind("touchmove",function(a){b.x2=a.touches[0].pageX,b.y2=a.touches[0].pageY}).bind("touchend",function(a){b.isDoubleTap?(b.el.trigger("doubleTap"),b={}):b.x2>0||b.y2>0?((Math.abs(b.x1-b.x2)>30||Math.abs(b.y1-b.y2)>30)&&b.el.trigger("swipe")&&b.el.trigger("swipe"+e(b.x1,b.x2,b.y1,b.y2)),b.x1=b.x2=b.y1=b.y2=b.last=0):"last"in b&&(b.el.trigger("tap"),c=setTimeout(function(){c=null,b.el.trigger("singleTap"),b={}},250))}).bind("touchcancel",function(){b={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}})}(Zepto);


//
// Generated on Sun Feb 12 2012 01:57:32 GMT+0000 (MPST) by Nodejitsu, Inc (Using Codesurgeon).
// Version 1.0.9-1
//

(function (exports) {


/*
 * browser.js: Browser specific functionality for director.
 *
 * (C) 2011, Nodejitsu Inc.
 * MIT LICENSE
 *
 */

if (!Array.prototype.filter) {
  Array.prototype.filter = function(filter, that) {
    var other = [], v;
    for (var i = 0, n = this.length; i < n; i++) {
      if (i in this && filter.call(that, v = this[i], i, this)) {
        other.push(v);
      }
    }
    return other;
  };
}

if (!Array.isArray){
  Array.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };
}

var dloc = document.location;

var listener = {
  mode: 'modern',
  hash: location.hash,

  check: function () {
    var h = location.hash;
    if (h != this.hash) {
      this.hash = h;
      this.onHashChanged();
    }
  },

  fire: function () {
    if (this.mode === 'modern') {
      window.onhashchange();
    }
    else {
      this.onHashChanged();
    }
  },

  init: function (fn) {
    var self = this;

    if (!window.Router.listeners) {
      window.Router.listeners = [];
    }

    function onchange() {
      for (var i = 0, l = window.Router.listeners.length; i < l; i++) {
        window.Router.listeners[i]();
      }
    }

    //note IE8 is being counted as 'modern' because it has the hashchange event
    if ('onhashchange' in window && (document.documentMode === undefined
      || document.documentMode > 7)) {
      window.onhashchange = onchange;
      this.mode = 'modern';
    }
    else {
      //
      // IE support, based on a concept by Erik Arvidson ...
      //
      var frame = document.createElement('iframe');
      frame.id = 'state-frame';
      frame.style.display = 'none';
      document.body.appendChild(frame);
      this.writeFrame('');

      if ('onpropertychange' in document && 'attachEvent' in document) {
        document.attachEvent('onpropertychange', function () {
          if (event.propertyName === 'location') {
            self.check();
          }
        });
      }

      window.setInterval(function () { self.check(); }, 50);

      this.onHashChanged = onchange;
      this.mode = 'legacy';
    }

    window.Router.listeners.push(fn);

    return this.mode;
  },

  destroy: function (fn) {
    if (!window.Router || !window.Router.listeners) {
      return;
    }

    var listeners = window.Router.listeners;

    for (var i = listeners.length - 1; i >= 0; i--) {
      if (listeners[i] === fn) {
        listeners.splice(i, 1);
      }
    }
  },

  setHash: function (s) {
    // Mozilla always adds an entry to the history
    if (this.mode === 'legacy') {
      this.writeFrame(s);
    }

    location.hash = (s[0] === '/') ? s : '/' + s;
    return this;
  },

  writeFrame: function (s) {
    // IE support...
    var f = document.getElementById('state-frame');
    var d = f.contentDocument || f.contentWindow.document;
    d.open();
    d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
    d.close();
  },

  syncHash: function () {
    // IE support...
    var s = this._hash;
    if (s != location.hash) {
      location.hash = s;
    }
    return this;
  },

  onHashChanged: function () {}
};

var Router = exports.Router = function (routes) {
  if (!(this instanceof Router)) return new Router(routes);

  this.params   = {};
  this.routes   = {};
  this.methods  = ['on', 'once', 'after', 'before'];
  this._methods = {};

  this._insert = this.insert;
  this.insert = this.insertEx;

  this.configure();
  this.mount(routes || {});
};

Router.prototype.init = function (r) {
  var self = this;
  this.handler = function() {
    var hash = location.hash.replace(/^#/, '');
    self.dispatch('on', hash);
  };

  if (location.hash === '' && r) {
    location.hash = r;
  }

  if (location.hash.length > 0) {
    this.handler();
  }

  listener.init(this.handler);
  return this;
};

Router.prototype.explode = function () {
  var v = location.hash;
  if (v[1] === '/') { v=v.slice(1) }
  return v.slice(1, v.length).split("/");
};

Router.prototype.setRoute = function (i, v, val) {
  var url = this.explode();

  if (typeof i === 'number' && typeof v === 'string') {
    url[i] = v;
  }
  else if (typeof val === 'string') {
    url.splice(i, v, s);
  }
  else {
    url = [i];
  }

  listener.setHash(url.join('/'));
  return url;
};

//
// ### function insertEx(method, path, route, parent)
// #### @method {string} Method to insert the specific `route`.
// #### @path {Array} Parsed path to insert the `route` at.
// #### @route {Array|function} Route handlers to insert.
// #### @parent {Object} **Optional** Parent "routes" to insert into.
// insert a callback that will only occur once per the matched route.
//
Router.prototype.insertEx = function(method, path, route, parent) {
  if (method === "once") {
    method = "on";
    route = function(route) {
      var once = false;
      return function() {
        if (once) return;
        once = true;
        return route.apply(this, arguments);
      };
    }(route);
  }
  return this._insert(method, path, route, parent);
};


Router.prototype.getState = function () {
  return this.state;
};

Router.prototype.getRoute = function (v) {
  var ret = v;

  if (typeof v === "number") {
    ret = this.explode()[v];
  }
  else if (typeof v === "string"){
    var h = this.explode();
    ret = h.indexOf(v);
  }
  else {
    ret = this.explode();
  }

  return ret;
};

Router.prototype.destroy = function () {
  listener.destroy(this.handler);
  return this;
};function _every(arr, iterator) {
    for (var i = 0; i < arr.length; i += 1) {
        if (iterator(arr[i], i, arr) === false) {
            return;
        }
    }
}

function _flatten(arr) {
    var flat = [];
    for (var i = 0, n = arr.length; i < n; i++) {
        flat = flat.concat(arr[i]);
    }
    return flat;
}

function _asyncEverySeries(arr, iterator, callback) {
    if (!arr.length) {
        return callback();
    }
    var completed = 0;
    (function iterate() {
        iterator(arr[completed], function(err) {
            if (err || err === false) {
                callback(err);
                callback = function() {};
            } else {
                completed += 1;
                if (completed === arr.length) {
                    callback();
                } else {
                    iterate();
                }
            }
        });
    })();
}

function paramifyString(str, params, mod) {
    mod = str;
    for (var param in params) {
        if (params.hasOwnProperty(param)) {
            mod = params[param](str);
            if (mod !== str) {
                break;
            }
        }
    }
    return mod === str ? "([._a-zA-Z0-9-]+)" : mod;
}

function regifyString(str, params) {
    if (~str.indexOf("*")) {
        str = str.replace(/\*/g, "([_.()!\\ %@&a-zA-Z0-9-]+)");
    }
    var captures = str.match(/:([^\/]+)/ig), length;
    if (captures) {
        length = captures.length;
        for (var i = 0; i < length; i++) {
            str = str.replace(captures[i], paramifyString(captures[i], params));
        }
    }
    return str;
}

Router.prototype.configure = function(options) {
    options = options || {};
    for (var i = 0; i < this.methods.length; i++) {
        this._methods[this.methods[i]] = true;
    }
    this.recurse = options.recurse || this.recurse || false;
    this.async = options.async || false;
    this.delimiter = options.delimiter || "/";
    this.strict = typeof options.strict === "undefined" ? true : options.strict;
    this.notfound = options.notfound;
    this.resource = options.resource;
    this.every = {
        after: options.after || null,
        before: options.before || null,
        on: options.on || null
    };
    return this;
};

Router.prototype.param = function(token, matcher) {
    if (token[0] !== ":") {
        token = ":" + token;
    }
    var compiled = new RegExp(token, "g");
    this.params[token] = function(str) {
        return str.replace(compiled, matcher.source || matcher);
    };
};

Router.prototype.on = Router.prototype.route = function(method, path, route) {
    var self = this;
    if (!route && typeof path == "function") {
        route = path;
        path = method;
        method = "on";
    }
    if (path.source) {
        path = path.source.replace(/\\\//ig, "/");
    }
    if (Array.isArray(method)) {
        return method.forEach(function(m) {
            self.on(m.toLowerCase(), path, route);
        });
    }
    this.insert(method, this.scope.concat(path.split(new RegExp(this.delimiter))), route);
};

Router.prototype.dispatch = function(method, path, callback) {
    var self = this, fns = this.traverse(method, path, this.routes, ""), invoked = this._invoked, after;
    this._invoked = true;
    if (!fns || fns.length === 0) {
        this.last = [];
        if (typeof this.notfound === "function") {
            this.invoke([ this.notfound ], {
                method: method,
                path: path
            }, callback);
        }
        return false;
    }
    if (this.recurse === "forward") {
        fns = fns.reverse();
    }
    function updateAndInvoke() {
        self.last = fns.after;
        self.invoke(self.runlist(fns), self, callback);
    }
    after = this.every && this.every.after ? [ this.every.after ].concat(this.last) : [ this.last ];
    if (after && after.length > 0 && invoked) {
        if (this.async) {
            this.invoke(after, this, updateAndInvoke);
        } else {
            this.invoke(after, this);
            updateAndInvoke();
        }
        return true;
    }
    updateAndInvoke();
    return true;
};

Router.prototype.invoke = function(fns, thisArg, callback) {
    var self = this;
    if (this.async) {
        _asyncEverySeries(fns, function apply(fn, next) {
            if (Array.isArray(fn)) {
                return _asyncEverySeries(fn, apply, next);
            } else if (typeof fn == "function") {
                fn.apply(thisArg, fns.captures.concat(next));
            }
        }, function() {
            if (callback) {
                callback.apply(thisArg, arguments);
            }
        });
    } else {
        _every(fns, function apply(fn) {
            if (Array.isArray(fn)) {
                return _every(fn, apply);
            } else if (typeof fn === "function") {
                return fn.apply(thisArg, fns.captures || null);
            } else if (typeof fn === "string" && self.resource) {
                self.resource[fn].apply(thisArg, fns.captures || null);
            }
        });
    }
};

Router.prototype.traverse = function(method, path, routes, regexp) {
    var fns = [], current, exact, match, next, that;
    if (path === this.delimiter && routes[method]) {
        next = [ [ routes.before, routes[method] ].filter(Boolean) ];
        next.after = [ routes.after ].filter(Boolean);
        next.matched = true;
        next.captures = [];
        return next;
    }
    for (var r in routes) {
        if (routes.hasOwnProperty(r) && (!this._methods[r] || this._methods[r] && typeof routes[r] === "object" && !Array.isArray(routes[r]))) {
            current = exact = regexp + this.delimiter + r;
            if (!this.strict) {
                exact += "[" + this.delimiter + "]?";
            }
            match = path.match(new RegExp("^" + exact));
            if (!match) {
                continue;
            }
            if (match[0] && match[0] == path && routes[r][method]) {
                next = [ [ routes[r].before, routes[r][method] ].filter(Boolean) ];
                next.after = [ routes[r].after ].filter(Boolean);
                next.matched = true;
                next.captures = match.slice(1);
                if (this.recurse && routes === this.routes) {
                    next.push([ routes["before"], routes["on"] ].filter(Boolean));
                    next.after = next.after.concat([ routes["after"] ].filter(Boolean));
                }
                return next;
            }
            next = this.traverse(method, path, routes[r], current);
            if (next.matched) {
                if (next.length > 0) {
                    fns = fns.concat(next);
                }
                if (this.recurse) {
                    fns.push([ routes[r].before, routes[r].on ].filter(Boolean));
                    next.after = next.after.concat([ routes[r].after ].filter(Boolean));
                    if (routes === this.routes) {
                        fns.push([ routes["before"], routes["on"] ].filter(Boolean));
                        next.after = next.after.concat([ routes["after"] ].filter(Boolean));
                    }
                }
                fns.matched = true;
                fns.captures = next.captures;
                fns.after = next.after;
                return fns;
            }
        }
    }
    return false;
};

Router.prototype.insert = function(method, path, route, parent) {
    var methodType, parentType, isArray, nested, part;
    path = path.filter(function(p) {
        return p && p.length > 0;
    });
    parent = parent || this.routes;
    part = path.shift();
    if (/\:|\*/.test(part) && !/\\d|\\w/.test(part)) {
        part = regifyString(part, this.params);
    }
    if (path.length > 0) {
        parent[part] = parent[part] || {};
        return this.insert(method, path, route, parent[part]);
    }
    if (!part && !path.length && parent === this.routes) {
        methodType = typeof parent[method];
        switch (methodType) {
          case "function":
            parent[method] = [ parent[method], route ];
            return;
          case "object":
            parent[method].push(route);
            return;
          case "undefined":
            parent[method] = route;
            return;
        }
        return;
    }
    parentType = typeof parent[part];
    isArray = Array.isArray(parent[part]);
    if (parent[part] && !isArray && parentType == "object") {
        methodType = typeof parent[part][method];
        switch (methodType) {
          case "function":
            parent[part][method] = [ parent[part][method], route ];
            return;
          case "object":
            parent[part][method].push(route);
            return;
          case "undefined":
            parent[part][method] = route;
            return;
        }
    } else if (parentType == "undefined") {
        nested = {};
        nested[method] = route;
        parent[part] = nested;
        return;
    }
    throw new Error("Invalid route context: " + parentType);
};



Router.prototype.extend = function(methods) {
    var self = this, len = methods.length, i;
    for (i = 0; i < len; i++) {
        (function(method) {
            self._methods[method] = true;
            self[method] = function() {
                var extra = arguments.length === 1 ? [ method, "" ] : [ method ];
                self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
            };
        })(methods[i]);
    }
};

Router.prototype.runlist = function(fns) {
    var runlist = this.every && this.every.before ? [ this.every.before ].concat(_flatten(fns)) : _flatten(fns);
    if (this.every && this.every.on) {
        runlist.push(this.every.on);
    }
    runlist.captures = fns.captures;
    runlist.source = fns.source;
    return runlist;
};

Router.prototype.mount = function(routes, path) {
    if (!routes || typeof routes !== "object" || Array.isArray(routes)) {
        return;
    }
    var self = this;
    path = path || [];
    function insertOrMount(route, local) {
        var rename = route, parts = route.split(self.delimiter), routeType = typeof routes[route], isRoute = parts[0] === "" || !self._methods[parts[0]], event = isRoute ? "on" : rename;
        if (isRoute) {
            rename = rename.slice(self.delimiter.length);
            parts.shift();
        }
        if (isRoute && routeType === "object" && !Array.isArray(routes[route])) {
            local = local.concat(parts);
            self.mount(routes[route], local);
            return;
        }
        if (isRoute) {
            local = local.concat(rename.split(self.delimiter));
        }
        self.insert(event, local, routes[route]);
    }
    for (var route in routes) {
        if (routes.hasOwnProperty(route)) {
            insertOrMount(route, path.slice(0));
        }
    }
};



}(window));
/*!
 * Amplify Store - Persistent Client-Side Storage @VERSION
 * 
 * Copyright 2011 appendTo LLC. (http://appendto.com/team)
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 * 
 * http://amplifyjs.com
 */
(function( amplify, undefined ) {

var store = amplify.store = function( key, value, options, type ) {
	var type = store.type;
	if ( options && options.type && options.type in store.types ) {
		type = options.type;
	}
	return store.types[ type ]( key, value, options || {} );
};

store.types = {};
store.type = null;
store.addType = function( type, storage ) {
	if ( !store.type ) {
		store.type = type;
	}

	store.types[ type ] = storage;
	store[ type ] = function( key, value, options ) {
		options = options || {};
		options.type = type;
		return store( key, value, options );
	};
}
store.error = function() {
	return "amplify.store quota exceeded"; 
};

var rprefix = /^__amplify__/;
function createFromStorageInterface( storageType, storage ) {
	store.addType( storageType, function( key, value, options ) {
		var storedValue, parsed, i, remove,
			ret = value,
			now = (new Date()).getTime();

		if ( !key ) {
			ret = {};
			remove = [];
			i = 0;
			try {
				// accessing the length property works around a localStorage bug
				// in Firefox 4.0 where the keys don't update cross-page
				// we assign to key just to avoid Closure Compiler from removing
				// the access as "useless code"
				// https://bugzilla.mozilla.org/show_bug.cgi?id=662511
				key = storage.length;

				while ( key = storage.key( i++ ) ) {
					if ( rprefix.test( key ) ) {
						parsed = JSON.parse( storage.getItem( key ) );
						if ( parsed.expires && parsed.expires <= now ) {
							remove.push( key );
						} else {
							ret[ key.replace( rprefix, "" ) ] = parsed.data;
						}
					}
				}
				while ( key = remove.pop() ) {
					storage.removeItem( key );
				}
			} catch ( error ) {}
			return ret;
		}

		// protect against name collisions with direct storage
		key = "__amplify__" + key;

		if ( value === undefined ) {
			storedValue = storage.getItem( key );
			parsed = storedValue ? JSON.parse( storedValue ) : { expires: -1 };
			if ( parsed.expires && parsed.expires <= now ) {
				storage.removeItem( key );
			} else {
				return parsed.data;
			}
		} else {
			if ( value === null ) {
				storage.removeItem( key );
			} else {
				parsed = JSON.stringify({
					data: value,
					expires: options.expires ? now + options.expires : null
				});
				try {
					storage.setItem( key, parsed );
				// quota exceeded
				} catch( error ) {
					// expire old data and try again
					store[ storageType ]();
					try {
						storage.setItem( key, parsed );
					} catch( error ) {
						throw store.error();
					}
				}
			}
		}

		return ret;
	});
}

// localStorage + sessionStorage
// IE 8+, Firefox 3.5+, Safari 4+, Chrome 4+, Opera 10.5+, iPhone 2+, Android 2+
for ( var webStorageType in { localStorage: 1, sessionStorage: 1 } ) {
	// try/catch for file protocol in Firefox
	try {
		if ( window[ webStorageType ].getItem ) {
			createFromStorageInterface( webStorageType, window[ webStorageType ] );
		}
	} catch( e ) {}
}

// globalStorage
// non-standard: Firefox 2+
// https://developer.mozilla.org/en/dom/storage#globalStorage
if ( !store.types.localStorage && window.globalStorage ) {
	// try/catch for file protocol in Firefox
	try {
		createFromStorageInterface( "globalStorage",
			window.globalStorage[ window.location.hostname ] );
		// Firefox 2.0 and 3.0 have sessionStorage and globalStorage
		// make sure we default to globalStorage
		// but don't default to globalStorage in 3.5+ which also has localStorage
		if ( store.type === "sessionStorage" ) {
			store.type = "globalStorage";
		}
	} catch( e ) {}
}

// userData
// non-standard: IE 5+
// http://msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx
(function() {
	// IE 9 has quirks in userData that are a huge pain
	// rather than finding a way to detect these quirks
	// we just don't register userData if we have localStorage
	if ( store.types.localStorage ) {
		return;
	}

	// append to html instead of body so we can do this from the head
	var div = document.createElement( "div" ),
		attrKey = "amplify";
	div.style.display = "none";
	document.getElementsByTagName( "head" )[ 0 ].appendChild( div );

	// we can't feature detect userData support
	// so just try and see if it fails
	// surprisingly, even just adding the behavior isn't enough for a failure
	// so we need to load the data as well
	try {
		div.addBehavior( "#default#userdata" );
		div.load( attrKey );
	} catch( e ) {
		div.parentNode.removeChild( div );
		return;
	}

	store.addType( "userData", function( key, value, options ) {
		div.load( attrKey );
		var attr, parsed, prevValue, i, remove,
			ret = value,
			now = (new Date()).getTime();

		if ( !key ) {
			ret = {};
			remove = [];
			i = 0;
			while ( attr = div.XMLDocument.documentElement.attributes[ i++ ] ) {
				parsed = JSON.parse( attr.value );
				if ( parsed.expires && parsed.expires <= now ) {
					remove.push( attr.name );
				} else {
					ret[ attr.name ] = parsed.data;
				}
			}
			while ( key = remove.pop() ) {
				div.removeAttribute( key );
			}
			div.save( attrKey );
			return ret;
		}

		// convert invalid characters to dashes
		// http://www.w3.org/TR/REC-xml/#NT-Name
		// simplified to assume the starting character is valid
		// also removed colon as it is invalid in HTML attribute names
		key = key.replace( /[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-" );
		// adjust invalid starting character to deal with our simplified sanitization
		key = key.replace( /^-/, "_-" );

		if ( value === undefined ) {
			attr = div.getAttribute( key );
			parsed = attr ? JSON.parse( attr ) : { expires: -1 };
			if ( parsed.expires && parsed.expires <= now ) {
				div.removeAttribute( key );
			} else {
				return parsed.data;
			}
		} else {
			if ( value === null ) {
				div.removeAttribute( key );
			} else {
				// we need to get the previous value in case we need to rollback
				prevValue = div.getAttribute( key );
				parsed = JSON.stringify({
					data: value,
					expires: (options.expires ? (now + options.expires) : null)
				});
				div.setAttribute( key, parsed );
			}
		}

		try {
			div.save( attrKey );
		// quota exceeded
		} catch ( error ) {
			// roll the value back to the previous value
			if ( prevValue === null ) {
				div.removeAttribute( key );
			} else {
				div.setAttribute( key, prevValue );
			}

			// expire old data and try again
			store.userData();
			try {
				div.setAttribute( key, parsed );
				div.save( attrKey );
			} catch ( error ) {
				// roll the value back to the previous value
				if ( prevValue === null ) {
					div.removeAttribute( key );
				} else {
					div.setAttribute( key, prevValue );
				}
				throw store.error();
			}
		}
		return ret;
	});
}() );

// in-memory storage
// fallback for all browsers to enable the API even if we can't persist data
(function() {
	var memory = {},
		timeout = {};

	function copy( obj ) {
		return obj === undefined ? undefined : JSON.parse( JSON.stringify( obj ) );
	}

	store.addType( "memory", function( key, value, options ) {
		if ( !key ) {
			return copy( memory );
		}

		if ( value === undefined ) {
			return copy( memory[ key ] );
		}

		if ( timeout[ key ] ) {
			clearTimeout( timeout[ key ] );
			delete timeout[ key ];
		}

		if ( value === null ) {
			delete memory[ key ];
			return null;
		}

		memory[ key ] = value;
		if ( options.expires ) {
			timeout[ key ] = setTimeout(function() {
				delete memory[ key ];
				delete timeout[ key ];
			}, options.expires );
		}

		return value;
	});
}() );

}( this.amplify = this.amplify || {} ) );
(function(w, d){
	
	var matchesSelector = function(node, selector){
			var root = d.documentElement,
				matches = root.matchesSelector || root.mozMatchesSelector || root.webkitMatchesSelector || root.msMatchesSelector;
			return matches.call(node, selector);
		},
		closest = function(node, selector){
			var matches = false;
			do {
				matches = matchesSelector(node, selector);
			} while (!matches && (node = node.parentNode) && node.ownerDocument);
			return matches ? node : false;
		};
	
	var abs = Math.abs,
		noop = function(){},
		defaults = {
			noScroll: false,
			activeClass: 'tappable-active',
			onTap: noop,
			onStart: noop,
			onMove: noop,
			onMoveOut: noop,
			onMoveIn: noop,
			onEnd: noop,
			onCancel: noop,
			allowClick: false,
			boundMargin: 50,
			noScrollDelay: 0,
			activeClassDelay: 0,
			inactiveClassDelay: 0
		},
		supportTouch = 'ontouchend' in document,
		events = {
			start: supportTouch ? 'touchstart' : 'mousedown',
			move: supportTouch ? 'touchmove' : 'mousemove',
			end: supportTouch ? 'touchend' : 'mouseup'
		},
		getTargetByCoords = function(x, y){
			var el = d.elementFromPoint(x, y);
			if (el.nodeType == 3) el = el.parentNode;
			return el;
		},
		getTarget = function(e){
			var el = e.target;
			if (el) return el;
			var touch = e.targetTouches[0];
			return getTargetByCoords(touch.clientX, touch.clientY);
		},
		clean = function(str){
			return str.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
		},
		addClass = function(el, className){
			if (!className) return;
			if (el.classList){
				el.classList.add(className);
				return;
			}
			if (clean(el.className).indexOf(className) > -1) return;
			el.className = clean(el.className + ' ' + className);
		},
		removeClass = function(el, className){
			if (!className) return;
			if (el.classList){
				el.classList.remove(className);
				return;
			}
			el.className = el.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)'), '$1');
		};
	
	w.tappable = function(selector, opts){
		if (typeof opts == 'function') opts = { onTap: opts };
		var options = {};
		for (var key in defaults) options[key] = opts[key] || defaults[key];
		
		var el = options.containerElement || d.body,
			startX,
			startY,
			startTarget,
			elBound,
			cancel = false,
			moveOut = false,
			activeClass = options.activeClass,
			activeClassDelay = options.activeClassDelay,
			activeClassTimeout,
			inactiveClassDelay = options.inactiveClassDelay,
			inactiveClassTimeout,
			noScroll = options.noScroll,
			noScrollDelay = options.noScrollDelay,
			noScrollTimeout,
			boundMargin = options.boundMargin;
		
		el.addEventListener(events.start, function(e){
			var target = closest(getTarget(e), selector);
			if (!target) return;
			
			if (activeClassDelay){
				clearTimeout(activeClassTimeout);
				activeClassTimeout = setTimeout(function(){
					addClass(target, activeClass);
				}, activeClassDelay)
			} else {
				addClass(target, activeClass);
			}
			if (inactiveClassDelay) clearTimeout(inactiveClassTimeout);
			
			startX = e.clientX;
			startY = e.clientY;
			if (!startX || !startY){
				var touch = e.targetTouches[0];
				startX = touch.clientX;
				startY = touch.clientY;
			}
			startTarget = target;
			cancel = false;
			moveOut = false;
			elBound = noScroll ? target.getBoundingClientRect() : null;
			
			if (noScrollDelay){
				clearTimeout(noScrollTimeout);
				noScroll = false; // set false first, then true after a delay
				noScrollTimeout = setTimeout(function(){
					noScroll = true;
				}, noScrollDelay);
			}
			options.onStart.call(el, e, target);
		}, false);
		
		el.addEventListener(events.move, function(e){
			if (!startTarget) return;
			
			if (noScroll){
				e.preventDefault();
			} else {
				clearTimeout(activeClassTimeout);
			}
			
			var target = e.target,
				x = e.clientX,
				y = e.clientY;
			if (!target || !x || !y){ // The event might have a target but no clientX/Y
				var touch = e.changedTouches[0];
				if (!x) x = touch.clientX;
				if (!y) y = touch.clientY;
				if (!target) target = getTargetByCoords(x, y);
			}
			
			if (noScroll){
				if (x>elBound.left-boundMargin && x<elBound.right+boundMargin && y>elBound.top-boundMargin && y<elBound.bottom+boundMargin){ // within element's boundary
					moveOut = false;
					addClass(startTarget, activeClass);
					options.onMoveIn.call(el, e, target);
				} else {
					moveOut = true;
					removeClass(startTarget, activeClass);
					options.onMoveOut.call(el, e, target);
				}
			} else if (!cancel && Math.abs(y - startY) > 10){
				cancel = true;
				removeClass(startTarget, activeClass);
				options.onCancel.call(target, e);
			}
			
			options.onMove.call(el, e, target);
		}, false);
		
		el.addEventListener(events.end, function(e){
			if (!startTarget) return;
			
			clearTimeout(activeClassTimeout);
			if (inactiveClassDelay){
				if (activeClassDelay && !cancel) addClass(startTarget, activeClass);
				var activeTarget = startTarget;
				inactiveClassTimeout = setTimeout(function(){
					removeClass(activeTarget, activeClass);
				}, inactiveClassDelay);
			} else {
				removeClass(startTarget, activeClass);
			}
			
			options.onEnd.call(el, e, startTarget);
			
			var rightClick = e.which == 3 || e.button == 2;
			if (!cancel && !moveOut && !rightClick){
				var target = startTarget;
				setTimeout(function(){
					options.onTap.call(el, e, target);
				}, 1);
			}
			
			startTarget = null;
		}, false);
		
		el.addEventListener('touchcancel', function(e){
			if (!startTarget) return;
			removeClass(startTarget, activeClass);
			startTarget = null;
			options.onCancel.call(el, e);
		}, false);
		
		if (!options.allowClick) el.addEventListener('click', function(e){
			var target = closest(e.target, selector);
			if (target) e.preventDefault();
		}, false);
	};
	
})(window, document);
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-borderimage-flexbox-cssanimations-csstransforms3d-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;","<style>",a,"</style>"].join(""),k.id=h,(l?k:m).innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e});var G=function(a,c){var d=a.join(""),f=c.length;w(d,function(a,c){var d=b.styleSheets[b.styleSheets.length-1],g=d?d.cssRules&&d.cssRules[0]?d.cssRules[0].cssText:d.cssText||"":"",h=a.childNodes,i={};while(f--)i[h[f].id]=h[f];e.csstransforms3d=(i.csstransforms3d&&i.csstransforms3d.offsetLeft)===9&&i.csstransforms3d.offsetHeight===3},f,c)}([,["@media (",m.join("transform-3d),("),h,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join("")],[,"csstransforms3d"]);q.flexbox=function(){return F("flexOrder")},q.borderimage=function(){return F("borderImage")},q.cssanimations=function(){return F("animationName")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d),a};for(var H in q)y(q,H)&&(v=H.toLowerCase(),e[v]=q[H](),t.push((e[v]?"":"no-")+v));return z(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*!
 * iScroll Lite base on iScroll v4.1.6 ~ Copyright (c) 2011 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */

(function(){
var m = Math,
	mround = function (r) { return r >> 0; },
	vendor = (/webkit/i).test(navigator.appVersion) ? 'webkit' :
		(/firefox/i).test(navigator.userAgent) ? 'Moz' :
		'opera' in window ? 'O' : '',

    // Browser capabilities
    isAndroid = (/android/gi).test(navigator.appVersion),
    isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
    isPlaybook = (/playbook/gi).test(navigator.appVersion),
    isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),

    has3d = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix(),
    hasTouch = 'ontouchstart' in window && !isTouchPad,
    hasTransform = vendor + 'Transform' in document.documentElement.style,
    hasTransitionEnd = isIDevice || isPlaybook,

	nextFrame = (function() {
	    return window.requestAnimationFrame
			|| window.webkitRequestAnimationFrame
			|| window.mozRequestAnimationFrame
			|| window.oRequestAnimationFrame
			|| window.msRequestAnimationFrame
			|| function(callback) { return setTimeout(callback, 17); }
	})(),
	cancelFrame = (function () {
	    return window.cancelRequestAnimationFrame
			|| window.webkitCancelAnimationFrame
			|| window.webkitCancelRequestAnimationFrame
			|| window.mozCancelRequestAnimationFrame
			|| window.oCancelRequestAnimationFrame
			|| window.msCancelRequestAnimationFrame
			|| clearTimeout
	})(),

	// Events
	RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
	START_EV = hasTouch ? 'touchstart' : 'mousedown',
	MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
	END_EV = hasTouch ? 'touchend' : 'mouseup',
	CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',

	// Helpers
	trnOpen = 'translate' + (has3d ? '3d(' : '('),
	trnClose = has3d ? ',0)' : ')',

	// Constructor
	iScroll = function (el, options) {
		var that = this,
			doc = document,
			i;

		that.wrapper = typeof el == 'object' ? el : doc.getElementById(el);
		that.wrapper.style.overflow = 'hidden';
		that.scroller = that.wrapper.children[0];

		// Default options
		that.options = {
			hScroll: true,
			vScroll: true,
			x: 0,
			y: 0,
			bounce: true,
			bounceLock: false,
			momentum: true,
			lockDirection: true,
			useTransform: true,
			useTransition: false,

			// Events
			onRefresh: null,
			onBeforeScrollStart: function (e) { e.preventDefault(); },
			onScrollStart: null,
			onBeforeScrollMove: null,
			onScrollMove: null,
			onBeforeScrollEnd: null,
			onScrollEnd: null,
			onTouchEnd: null,
			onDestroy: null
		};

		// User defined options
		for (i in options) that.options[i] = options[i];

		// Set starting position
		that.x = that.options.x;
		that.y = that.options.y;

		// Normalize options
		that.options.useTransform = hasTransform ? that.options.useTransform : false;
		that.options.hScrollbar = that.options.hScroll && that.options.hScrollbar;
		that.options.vScrollbar = that.options.vScroll && that.options.vScrollbar;
		that.options.useTransition = hasTransitionEnd && that.options.useTransition;

		// Set some default styles
		that.scroller.style[vendor + 'TransitionProperty'] = that.options.useTransform ? '-' + vendor.toLowerCase() + '-transform' : 'top left';
		that.scroller.style[vendor + 'TransitionDuration'] = '0';
		that.scroller.style[vendor + 'TransformOrigin'] = '0 0';
		if (that.options.useTransition) that.scroller.style[vendor + 'TransitionTimingFunction'] = 'cubic-bezier(0.33,0.66,0.66,1)';
		
		if (that.options.useTransform) that.scroller.style[vendor + 'Transform'] = trnOpen + that.x + 'px,' + that.y + 'px' + trnClose;
		else that.scroller.style.cssText += ';position:absolute;top:' + that.y + 'px;left:' + that.x + 'px';

		that.refresh();

		that._bind(RESIZE_EV, window);
		that._bind(START_EV);
		if (!hasTouch) that._bind('mouseout', that.wrapper);
	};

// Prototype
iScroll.prototype = {
	enabled: true,
	x: 0,
	y: 0,
	steps: [],
	scale: 1,
	
	handleEvent: function (e) {
		var that = this;
		switch(e.type) {
			case START_EV:
				if (!hasTouch && e.button !== 0) return;
				that._start(e);
				break;
			case MOVE_EV: that._move(e); break;
			case END_EV:
			case CANCEL_EV: that._end(e); break;
			case RESIZE_EV: that._resize(); break;
			case 'mouseout': that._mouseout(e); break;
			case 'webkitTransitionEnd': that._transitionEnd(e); break;
		}
	},

	_resize: function () {
		this.refresh();
	},
	
	_pos: function (x, y) {
		x = this.hScroll ? x : 0;
		y = this.vScroll ? y : 0;

		if (this.options.useTransform) {
			this.scroller.style[vendor + 'Transform'] = trnOpen + x + 'px,' + y + 'px' + trnClose + ' scale(' + this.scale + ')';
		} else {
			x = mround(x);
			y = mround(y);
			this.scroller.style.left = x + 'px';
			this.scroller.style.top = y + 'px';
		}

		this.x = x;
		this.y = y;
	},

	_start: function (e) {
		var that = this,
			point = hasTouch ? e.touches[0] : e,
			matrix, x, y;

		if (!that.enabled) return;

		if (that.options.onBeforeScrollStart) that.options.onBeforeScrollStart.call(that, e);
		
		if (that.options.useTransition) that._transitionTime(0);

		that.moved = false;
		that.animating = false;
		that.zoomed = false;
		that.distX = 0;
		that.distY = 0;
		that.absDistX = 0;
		that.absDistY = 0;
		that.dirX = 0;
		that.dirY = 0;

		if (that.options.momentum) {
			if (that.options.useTransform) {
				// Very lame general purpose alternative to CSSMatrix
				matrix = getComputedStyle(that.scroller, null)[vendor + 'Transform'].replace(/[^0-9-.,]/g, '').split(',');
				x = matrix[4] * 1;
				y = matrix[5] * 1;
			} else {
				x = getComputedStyle(that.scroller, null).left.replace(/[^0-9-]/g, '') * 1;
				y = getComputedStyle(that.scroller, null).top.replace(/[^0-9-]/g, '') * 1;
			}
			
			if (x != that.x || y != that.y) {
				if (that.options.useTransition) that._unbind('webkitTransitionEnd');
				else cancelFrame(that.aniTime);
				that.steps = [];
				that._pos(x, y);
			}
		}

		that.startX = that.x;
		that.startY = that.y;
		that.pointX = point.pageX;
		that.pointY = point.pageY;

		that.startTime = e.timeStamp || Date.now();

		if (that.options.onScrollStart) that.options.onScrollStart.call(that, e);

		that._bind(MOVE_EV);
		that._bind(END_EV);
		that._bind(CANCEL_EV);
	},
	
	_move: function (e) {
		var that = this,
			point = hasTouch ? e.touches[0] : e,
			deltaX = point.pageX - that.pointX,
			deltaY = point.pageY - that.pointY,
			newX = that.x + deltaX,
			newY = that.y + deltaY,
			timestamp = e.timeStamp || Date.now();

		if (that.options.onBeforeScrollMove) that.options.onBeforeScrollMove.call(that, e);

		that.pointX = point.pageX;
		that.pointY = point.pageY;

		// Slow down if outside of the boundaries
		if (newX > 0 || newX < that.maxScrollX) {
			newX = that.options.bounce ? that.x + (deltaX / 2) : newX >= 0 || that.maxScrollX >= 0 ? 0 : that.maxScrollX;
		}
		if (newY > 0 || newY < that.maxScrollY) { 
			newY = that.options.bounce ? that.y + (deltaY / 2) : newY >= 0 || that.maxScrollY >= 0 ? 0 : that.maxScrollY;
		}

		that.distX += deltaX;
		that.distY += deltaY;
		that.absDistX = m.abs(that.distX);
		that.absDistY = m.abs(that.distY);

		if (that.absDistX < 6 && that.absDistY < 6) {
			return;
		}

		// Lock direction
		if (that.options.lockDirection) {
			if (that.absDistX > that.absDistY + 5) {
				newY = that.y;
				deltaY = 0;
			} else if (that.absDistY > that.absDistX + 5) {
				newX = that.x;
				deltaX = 0;
			}
		}

		that.moved = true;
		that._pos(newX, newY);
		that.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		that.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if (timestamp - that.startTime > 300) {
			that.startTime = timestamp;
			that.startX = that.x;
			that.startY = that.y;
		}
		
		if (that.options.onScrollMove) that.options.onScrollMove.call(that, e);
	},
	
	_end: function (e) {
		if (hasTouch && e.touches.length != 0) return;

		var that = this,
			point = hasTouch ? e.changedTouches[0] : e,
			target, ev,
			momentumX = { dist:0, time:0 },
			momentumY = { dist:0, time:0 },
			duration = (e.timeStamp || Date.now()) - that.startTime,
			newPosX = that.x,
			newPosY = that.y,
			newDuration;

		that._unbind(MOVE_EV);
		that._unbind(END_EV);
		that._unbind(CANCEL_EV);

		if (that.options.onBeforeScrollEnd) that.options.onBeforeScrollEnd.call(that, e);

		if (!that.moved) {
			if (hasTouch) {
				// Find the last touched element
				target = point.target;
				while (target.nodeType != 1) target = target.parentNode;

				if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
					ev = document.createEvent('MouseEvents');
					ev.initMouseEvent('click', true, true, e.view, 1,
						point.screenX, point.screenY, point.clientX, point.clientY,
						e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
						0, null);
					ev._fake = true;
					target.dispatchEvent(ev);
				}
			}

			that._resetPos(200);

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		if (duration < 300 && that.options.momentum) {
			momentumX = newPosX ? that._momentum(newPosX - that.startX, duration, -that.x, that.scrollerW - that.wrapperW + that.x, that.options.bounce ? that.wrapperW : 0) : momentumX;
			momentumY = newPosY ? that._momentum(newPosY - that.startY, duration, -that.y, (that.maxScrollY < 0 ? that.scrollerH - that.wrapperH + that.y : 0), that.options.bounce ? that.wrapperH : 0) : momentumY;

			newPosX = that.x + momentumX.dist;
			newPosY = that.y + momentumY.dist;

 			if ((that.x > 0 && newPosX > 0) || (that.x < that.maxScrollX && newPosX < that.maxScrollX)) momentumX = { dist:0, time:0 };
 			if ((that.y > 0 && newPosY > 0) || (that.y < that.maxScrollY && newPosY < that.maxScrollY)) momentumY = { dist:0, time:0 };
		}

		if (momentumX.dist || momentumY.dist) {
			newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);

			that.scrollTo(mround(newPosX), mround(newPosY), newDuration);

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		that._resetPos(200);
		if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
	},
	
	_resetPos: function (time) {
		var that = this,
			resetX = that.x >= 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x,
			resetY = that.y >= 0 || that.maxScrollY > 0 ? 0 : that.y < that.maxScrollY ? that.maxScrollY : that.y;

		if (resetX == that.x && resetY == that.y) {
			if (that.moved) {
				if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);		// Execute custom code on scroll end
				that.moved = false;
			}

			return;
		}

		that.scrollTo(resetX, resetY, time || 0);
	},
	
	_mouseout: function (e) {
		var t = e.relatedTarget;

		if (!t) {
			this._end(e);
			return;
		}

		while (t = t.parentNode) if (t == this.wrapper) return;
		
		this._end(e);
	},

	_transitionEnd: function (e) {
		var that = this;

		if (e.target != that.scroller) return;

		that._unbind('webkitTransitionEnd');
		
		that._startAni();
	},

	/**
	 *
	 * Utilities
	 *
	 */
	_startAni: function () {
		var that = this,
			startX = that.x, startY = that.y,
			startTime = Date.now(),
			step, easeOut,
			animate;

		if (that.animating) return;

		if (!that.steps.length) {
			that._resetPos(400);
			return;
		}

		step = that.steps.shift();

		if (step.x == startX && step.y == startY) step.time = 0;

		that.animating = true;
		that.moved = true;

		if (that.options.useTransition) {
			that._transitionTime(step.time);
			that._pos(step.x, step.y);
			that.animating = false;
			if (step.time) that._bind('webkitTransitionEnd');
			else that._resetPos(0);
			return;
		}
		
		animate = function () {
			var now = Date.now(),
				newX, newY;

			if (now >= startTime + step.time) {
				that._pos(step.x, step.y);
				that.animating = false;
				if (that.options.onAnimationEnd) that.options.onAnimationEnd.call(that);			// Execute custom code on animation end
				that._startAni();
				return;
			}

			now = (now - startTime) / step.time - 1;
			easeOut = m.sqrt(1 - now * now);
			newX = (step.x - startX) * easeOut + startX;
			newY = (step.y - startY) * easeOut + startY;
			that._pos(newX, newY);
			if (that.animating) that.aniTime = nextFrame(animate);
		};
		
		animate();
	},

	_transitionTime: function (time) {
		this.scroller.style[vendor + 'TransitionDuration'] = time + 'ms';
	},
	
	_momentum: function (dist, time, maxDistUpper, maxDistLower, size) {
		var deceleration = 0.0006,
			speed = m.abs(dist) / time,
			newDist = (speed * speed) / (2 * deceleration),
			newTime = 0, outsideDist = 0;

		// Proportinally reduce speed if we are outside of the boundaries 
		if (dist > 0 && newDist > maxDistUpper) {
			outsideDist = size / (6 / (newDist / speed * deceleration));
			maxDistUpper = maxDistUpper + outsideDist;
			speed = speed * maxDistUpper / newDist;
			newDist = maxDistUpper;
		} else if (dist < 0 && newDist > maxDistLower) {
			outsideDist = size / (6 / (newDist / speed * deceleration));
			maxDistLower = maxDistLower + outsideDist;
			speed = speed * maxDistLower / newDist;
			newDist = maxDistLower;
		}

		newDist = newDist * (dist < 0 ? -1 : 1);
		newTime = speed / deceleration;

		return { dist: newDist, time: mround(newTime) };
	},

	_offset: function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;
			
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		} 

		return { left: left, top: top };
	},

	_bind: function (type, el, bubble) {
		(el || this.scroller).addEventListener(type, this, !!bubble);
	},

	_unbind: function (type, el, bubble) {
		(el || this.scroller).removeEventListener(type, this, !!bubble);
	},


	/**
	 *
	 * Public methods
	 *
	 */
	destroy: function () {
		var that = this;

		that.scroller.style[vendor + 'Transform'] = '';

		// Remove the event listeners
		that._unbind(RESIZE_EV, window);
		that._unbind(START_EV);
		that._unbind(MOVE_EV);
		that._unbind(END_EV);
		that._unbind(CANCEL_EV);
		that._unbind('mouseout', that.wrapper);
		if (that.options.useTransition) that._unbind('webkitTransitionEnd');
		
		if (that.options.onDestroy) that.options.onDestroy.call(that);
	},

	refresh: function () {
		var that = this,
			offset;

		that.wrapperW = that.wrapper.clientWidth;
		that.wrapperH = that.wrapper.clientHeight;

		that.scrollerW = that.scroller.offsetWidth;
		that.scrollerH = that.scroller.offsetHeight;
		that.maxScrollX = that.wrapperW - that.scrollerW;
		that.maxScrollY = that.wrapperH - that.scrollerH;
		that.dirX = 0;
		that.dirY = 0;

		that.hScroll = that.options.hScroll && that.maxScrollX < 0;
		that.vScroll = that.options.vScroll && (!that.options.bounceLock && !that.hScroll || that.scrollerH > that.wrapperH);

		offset = that._offset(that.wrapper);
		that.wrapperOffsetLeft = -offset.left;
		that.wrapperOffsetTop = -offset.top;


		that.scroller.style[vendor + 'TransitionDuration'] = '0';

		that._resetPos(200);
	},

	scrollTo: function (x, y, time, relative) {
		var that = this,
			step = x,
			i, l;

		that.stop();

		if (!step.length) step = [{ x: x, y: y, time: time, relative: relative }];
		
		for (i=0, l=step.length; i<l; i++) {
			if (step[i].relative) { step[i].x = that.x - step[i].x; step[i].y = that.y - step[i].y; }
			that.steps.push({ x: step[i].x, y: step[i].y, time: step[i].time || 0 });
		}

		that._startAni();
	},

	scrollToElement: function (el, time) {
		var that = this, pos;
		el = el.nodeType ? el : that.scroller.querySelector(el);
		if (!el) return;

		pos = that._offset(el);
		pos.left += that.wrapperOffsetLeft;
		pos.top += that.wrapperOffsetTop;

		pos.left = pos.left > 0 ? 0 : pos.left < that.maxScrollX ? that.maxScrollX : pos.left;
		pos.top = pos.top > 0 ? 0 : pos.top < that.maxScrollY ? that.maxScrollY : pos.top;
		time = time === undefined ? m.max(m.abs(pos.left)*2, m.abs(pos.top)*2) : time;

		that.scrollTo(pos.left, pos.top, time);
	},

	disable: function () {
		this.stop();
		this._resetPos(0);
		this.enabled = false;

		// If disabled after touchstart we make sure that there are no left over events
		this._unbind(MOVE_EV);
		this._unbind(END_EV);
		this._unbind(CANCEL_EV);
	},
	
	enable: function () {
		this.enabled = true;
	},
	
	stop: function () {
		cancelFrame(this.aniTime);
		this.steps = [];
		this.moved = false;
		this.animating = false;
	}
};

if (typeof exports !== 'undefined') exports.iScroll = iScroll;
else window.iScroll = iScroll;

})();
iShake = {
    ui: {},
    lang: {},
    view: {},
    model: {},
    repository: {},
    
    util: {        
        /**
         * Returns the index of the first element of an array with a specified
         * value, or -1 if the element is not present in the array. This method
         * doesn't type conversion.
         * 
         * @param {Array} arr The array to be searched.
         * @param {Object} item Object we are searching
         */
        indexOf : function(arr, item)
        {
            for (var i = 0; i < arr.length; i++)
            {
                if (arr[i] == item)
                {
                    return i;
                }
            }
            
            return -1;
        },
        
        /**
         * Sorts array of objects by alphabet
         * @param {Array} data Array with objects to be sorted
         * @param {string} propertyName Name of property by which object must be
         *      sorted
         */
        sortByAlphabet: function(data, propertyName)
        {
            return data.sort(function(a, b) {
                if (a[propertyName] > b[propertyName])
                {
                    return 1;
                }
                else if (a[propertyName] < b[propertyName])
                {
                    return -1;
                }
                
                return 0;
            });
        }
    }
};

iShake.App = function()
{
    var currentView,
        pageTransition = null;
    
    /**
     * Switches the view
     * @param {string} viewName name of destination view
     * @param {string} id optionaly id of selected item
     */
    function switchPage(viewName, id) {
        if (navigator.onLine)
        {
            _gaq.push(['_trackPageview', viewName]);
        }
        
        var nextView = $('#view-' + viewName);
//        nextView.css('height', window.innerHeight + 'px');

        if (!currentView || !Modernizr.cssanimations)
        {
            $('.view').addClass('hidden');
            nextView.removeClass('hidden');
        }
        else if (currentView.name == viewName)
        {
            return;                           
        }
        else
        {
            var isFlip = viewName == 'home' || currentView.name == 'home' || 
                         viewName == 'homeback' || currentView.name == 'homeback';                
                
            if (!Modernizr.csstransforms3d)
            {
                isFlip = false;                
            }
            
            if (isFlip)
            {
                pageTransition.flip({
                    to: nextView,
                    from: currentView.el,
                    direction: viewName == 'home' || viewName == 'homeback' ? 'clockwise' : 'anticlockwise'
                });
            }
            else
            {
                var pages = ['home', 'lists', 'online', 'list', 'listedit', 'item', 'login', 'register'],
                    dir = pages.indexOf(viewName) > pages.indexOf(currentView.name) ?
                            'rtl' : 'ltr';
                        
                pageTransition.slide({
                    to: nextView,
                    from: currentView.el,
                    direction: dir
                }); 
            }
        }      
        
        if (currentView && currentView.unload)
        {
            currentView.unload();
        }
        
        currentView = new iShake.view[viewName](viewName, nextView, id);
        
        app.updateOnlineStatus();
    }
    
    return {
        server: 'http://ishake-app.com',
        lang: 'en',
        
        /**
         * Initializes the application
         */
        run: function() {
            pageTransition = new iShake.ui.PageTransition($(document.body));
            
            // this pre-saves heigh of viewPort, due to unknow reason it returns
            // 0 later in mobile opera
            this.winHeight = $(window).height();
            
            this.initLanguage();
            this.initMenu();
            this.initRouting();
            this.initTouches();
        },
        
        /**
         * Returns localized string for specified label key
         * @param {string} label
         * @return {string}
         */
        getMsg: function(label)
        {
            if (!label)
            {
                return label;
            }
            
            return iShake.lang[this.lang][label] || label;
        },
        
        /**
         * Initializes navigator language replaces with data-label attribute
         * 
         */
        initLanguage: function()
        {
            var languages = ['en', 'de'],
                language = navigator.language.substr(0, 2);
                
            this.lang = languages.indexOf(language) != -1 ? language : 'en';
            
            var me = this;
            $('[data-label]').each(function(index, el) {
                el = $(el);
                el.html(me.getMsg(el.data('label')));
            });            
        },
        
        /**
         * Initializes drop down navigation
         */
        initMenu: function()
        {
            var isTouch = "ontouchstart" in window,
                evt = isTouch ? 'touchstart' : 'mousedown';
            
            if (navigator.userAgent.match(/opera/i))
            {
                evt = 'click';
            }
            
            
            var me = this,
                menu = $('#menu');
            
            $('.menu-button').on(evt, function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                menu.addClass('visible');
                
                var page = location.hash.replace('#/', '');
                page = page || 'home';
                menu.addClass('menu-' + page);
                
                if (me.timerId)
                {
                    clearTimeout(me.timerId);
                }
                
                me.timerId = setTimeout(function() {
                    $(document.body).one(evt, function(e) {
                       e.preventDefault();
                       e.stopPropagation();
                       
                       if (e.target.hash)
                       {
                            location.hash = e.target.hash;
                       }
                       
                       if (!$(e.target).hasClass('menu-button'))
                       {
                           menu.removeClass('visible menu-home menu-lists menu-online');
                           
                       }                       
                    });
                }, 100);                
            });
            
            $('#menu-li-logout').on(evt, function(e) {
                e.preventDefault();
                e.stopPropagation();
                menu.removeClass('visible menu-home menu-lists menu-online');
                
                // Logging out from facebook
                FB.logout(function(response) {
                    
                });
                
                // Logging out locally
                iShake.repository.user.current(null);
                iShake.repository.user.listIds([]);
                    
                // Deleting session on server
                app.request('/user/logout', function() {
                    app.updateLoginStatus();
                    iShake.ui.notify.alert('user.logoutsuccess');
                });
            });
        },
        
        /**
         * Initializes hash history routing
         */
        initRouting: function() {
            var routes = {
                '/': function() {        
                    switchPage('home');
                },
                
                '/lists': function() {
                    switchPage('lists');
                },
                
                '/lists/(\\d+)': function(id) {
                    switchPage('lists', id);
                },
                
                '/homeback': {
                    on: function(){
                        switchPage('homeback');
                    }
                },
                
                '/list/(\\d+)': {
                    on: function(id){
                        switchPage('list', id);
                    }
                },
                
                '/listedit/(\\d+)': {
                    on: function(id){
                        switchPage('listedit', id);
                    }
                },
                
                '/online': function() {
                    switchPage('online');
                },
                
                '/register': function() {
                    switchPage('register');
                },
                
                '/login': function() {
                    switchPage('login');
                },
                
                '/item/(\\d+)': {
                    on: function(id){                    
                        switchPage('item', id);
                    }
                }
            };
            
            var initialRoute = iShake.repository.list.currentId() ? '/' : '/lists';
            
            Router(routes).configure({
                on: function(){                    
                    app.updateOnlineStatus();
                },
                notfound: function() {
                    location.hash = '/';
                }
            }).init(initialRoute);   
        },
        
        /**
         * Initializes touch effects
         */
        initTouches: function()
        {
            tappable('.header-button, .button, .icon-button', {
                containerElement: document.body,
                noScroll: true,
                onTap: function(e, target) {
                    if (target.tagName.toLowerCase() == 'a' && target.hash)
                    {
                        location.hash = target.hash;                    
                    }
                }
            });
            
            tappable('.menu-li-a', {
                containerElement: document.body,
                noScroll: true,
                onStart: function(e, target) {
                    location.hash = target.hash;                                        
                }
            });
            
            
//            tappable('.tableview .item-content', {
//                containerElement: document.body,
//                allowClick: true,
//		activeClassDelay: 80,
//		inactiveClassDelay: 1000,
//
//                onTap: function(e, target) {
//                    if (target.tagName.toLowerCase() == 'a' && target.hash)
//                    {
//                        location.hash = target.hash;
//                    }
//                    
//                }
//            });
            
            tappable('.disclosure', {
                containerElement: document.body,
                onTap: function(e, target) {
                    if (target.tagName.toLowerCase() == 'a' && target.hash)
                    {
                        location.hash = target.hash;
                    }
                    
                }
            });
            
            tappable('.facebook-login', {
                containerElement: document.body
            });
        },
        
        /**
         * A wrapper method to access external api
         * @param {string} path API url
         * @param {Function} callback Callback method
         * @param {Object} scope Scope in which callback method will be called
         * @param {Object} data Additional data to be sent
         * @param {boolean} silent defines whether to show loader, default is
         *      false
         *      
         */
        request: function(path, callback, scope, data, silent) {
            if (!navigator.onLine)
            {
                return;
            }
            
            app.setLoading(!silent);
            
            data = data || {};
            
            var user = iShake.repository.user.current(),
                me = this;
            data.sessionId = user && user.sessionId;
            
            $.ajax({
                type: 'POST',
                data: data,
                url: this.server + path,
                dataType: 'json',
                success: function(response) {
                    app.setLoading(false);
                    if (callback)
                    {
                        callback.call(scope, response);
                    }
                    
                    me.updateOnlineStatus(true);
                },
                error: function(xhr, type) {
                    app.setLoading(false);
                    iShake.ui.notify.alert('no-connection', null, 'error');
                    
                    me.updateOnlineStatus(false);
                }
            });
        },
        
        /**
         * Controls visibility of loader
         * @param {boolean} isLoading true if loader should be visible
         */
        setLoading: function(isLoading)
        {
            $('#loader').toggleClass('visible', isLoading);
        },
        
        /**
         * Displays no connection warning.
         * 
         * @param {boolean} isVisible true if no connection warning should be
         *      visible
         */
        showNoConnection: function(isVisible)
        {
            var display = isVisible ? 'block' : 'none';
            $('#no-connection-msg').css('display', display);
        },
        
        /**
         * Updates UI according user login status
         */
        updateLoginStatus: function()
        {
            var isLogged = iShake.repository.user.current();
            $(document.body).toggleClass('logged', !!isLogged);
        },
        
        /**
         * Updates UI according online connection status
         * @param {boolean} onlineStatus defines whether device has internet
         *      connection
         */
        updateOnlineStatus : function(onlineStatus)
        {
            onlineStatus = typeof onlineStatus != 'undefined' ? onlineStatus : navigator.onLine;
            $(document.body).toggleClass('offline', !onlineStatus);            
            this.showNoConnection(false);              
        },
        
        /**
         * Returns current logged user
         * @return {Object}
         */
        user: function() {
            return iShake.repository.user.current();
        }
        
    };
}
iShake.lang.de = {
    
    'common.no-connection': 'Keine Verbindung!',
    'common.back': 'Zurück',
    'common.edit': 'Bearbeiten',
    'common.finish': 'Fertig',
    'common.delete': 'Löschen',
    'common.save': 'Speichern',
    'common.shake': 'Schütteln!',
    'common.start': 'Starten!',
    'common.login': 'Login',
    'common.register': 'Registrieren',
    'common.error': 'Fehler',
    
    'menu.iShake': 'iShake',
    'menu.mylists': 'Meine Listen',
    'menu.onlinelists': 'Online listen',
    'menu.logout': 'Abmelden',
    
    'home.list-finished': 'Glückwunsch! Sie haben alle Karten gemacht.',

    'lists.hd': 'Meine Listen',
    'lists.new-list': 'Liste hinzufügen...',
    'lists.list-deleted': 'Diese Liste wurde vom Besitzer gelöscht.',
    
    'online.hd': 'Online Listen',
    
    'listedit.public': 'Diese Liste ist öffentlich',
    'listedit.name': 'Name',
    
    'list.new-item': 'Eintrag hinzufügen...',
    
    'item.text': 'Text',
    'item.backside': 'Rückseite',
    'item.backside-text': 'Text auf der Rückseite',
    
    'listedit.confirm-delete-list-hd': 'Bist Du sicher?',
    'listedit.confirm-delete-list-bd': 'Bist Du sicher, dass Du diese Liste löschen möchtest?',
    
    'item.confirm-delete-item-hd': 'Bist Du sicher?',
    'item.confirm-delete-item-bd': 'Bist Du sicher, dass Du diesen Eintrtag löschen möchtest?',
    
    
    // List edit form
    'listedit.list-saved-hd': 'Gespeichert',
    'listedit.list-saved-bd': 'Deine Liste wurde gespeichert.',
    
    // Item edit form
    'item.item-saved-hd': 'Gespeichert',
    'item.item-saved-bd': 'Eintrag wurde gespeichert.',
    
    // Registration-form
    'registration.username-empty': 'Bitte gib Deinen Benutzernamen.',
    'registration.username-exists': 'Dieser Benutzername ist bereit besetzt.',
    'registration.username-alphanum' : 'Dein Benutzername darf nur alphanumerische Zeichen enthalten (a-z, 0-9).',
    'registration.username-length': 'Dein Benutzername muss 4-12 Zeichen lang sein.',
    'registration.email-empty': 'Bitte gib Deine E-Mail Adresse an.',
    'registration.email-email': 'E-Mail Adresse ist ungültig.',
    'registration.email-exists': 'Benutzer mit dieser E-Mail Adresse existiert bereits.',
    'registration.password-empty': 'Bitte gib Dein Passwort ein.',
    'registration.password-length': 'Passwort muss mindestens 6 Zeichen enthalten.',
    'registration.password-repeat': 'Die Passwörter stimmen nicht überein.',
    
    // Login form
    'login.username-empty': 'Bitte gib Deinen Benutzernamen ein.',
    'login.password-empty': 'Bitte gib Dein Passwort ein.',
    'login.username-wrong': 'Benutzernamen oder Passwort ist inkorrekt.',
    
    
    'user.username': 'Benutzername',
    'user.password': 'Passwort',
    'user.password-repeat': 'Passwort wiederholen',
    'user.email': 'E-Mail',
    'user.signinwith': 'Anmelden mit',
    'user.logoutsuccess': 'Du bist erfolgreich abgemeldet.'
};
/**
 * @author Phil Teare
 * using wikipedia data
 */
iShake.lang.de.isoLangs = {
    "ab":{
        "name":"Abkhaz",
        "nativeName":"аҧсуа"
    },
    "aa":{
        "name":"Afar",
        "nativeName":"Afaraf"
    },
    "af":{
        "name":"Afrikaans",
        "nativeName":"Afrikaans"
    },
    "ak":{
        "name":"Akan",
        "nativeName":"Akan"
    },
    "sq":{
        "name":"Albanian",
        "nativeName":"Shqip"
    },
    "am":{
        "name":"Amharic",
        "nativeName":"አማርኛ"
    },
    "ar":{
        "name":"Arabic",
        "nativeName":"العربية"
    },
    "an":{
        "name":"Aragonese",
        "nativeName":"Aragonés"
    },
    "hy":{
        "name":"Armenian",
        "nativeName":"Հայերեն"
    },
    "as":{
        "name":"Assamese",
        "nativeName":"অসমীয়া"
    },
    "av":{
        "name":"Avaric",
        "nativeName":"авар мацӀ, магӀарул мацӀ"
    },
    "ae":{
        "name":"Avestan",
        "nativeName":"avesta"
    },
    "ay":{
        "name":"Aymara",
        "nativeName":"aymar aru"
    },
    "az":{
        "name":"Azerbaijani",
        "nativeName":"azərbaycan dili"
    },
    "bm":{
        "name":"Bambara",
        "nativeName":"bamanankan"
    },
    "ba":{
        "name":"Bashkir",
        "nativeName":"башҡорт теле"
    },
    "eu":{
        "name":"Basque",
        "nativeName":"euskara, euskera"
    },
    "be":{
        "name":"Belarusian",
        "nativeName":"Беларуская"
    },
    "bn":{
        "name":"Bengali",
        "nativeName":"বাংলা"
    },
    "bh":{
        "name":"Bihari",
        "nativeName":"भोजपुरी"
    },
    "bi":{
        "name":"Bislama",
        "nativeName":"Bislama"
    },
    "bs":{
        "name":"Bosnian",
        "nativeName":"bosanski jezik"
    },
    "br":{
        "name":"Breton",
        "nativeName":"brezhoneg"
    },
    "bg":{
        "name":"Bulgarian",
        "nativeName":"български език"
    },
    "my":{
        "name":"Burmese",
        "nativeName":"ဗမာစာ"
    },
    "ca":{
        "name":"Catalan; Valencian",
        "nativeName":"Català"
    },
    "ch":{
        "name":"Chamorro",
        "nativeName":"Chamoru"
    },
    "ce":{
        "name":"Chechen",
        "nativeName":"нохчийн мотт"
    },
    "ny":{
        "name":"Chichewa; Chewa; Nyanja",
        "nativeName":"chiCheŵa, chinyanja"
    },
    "zh":{
        "name":"Chinese",
        "nativeName":"中文 (Zhōngwén), 汉语, 漢語"
    },
    "cv":{
        "name":"Chuvash",
        "nativeName":"чӑваш чӗлхи"
    },
    "kw":{
        "name":"Cornish",
        "nativeName":"Kernewek"
    },
    "co":{
        "name":"Corsican",
        "nativeName":"corsu, lingua corsa"
    },
    "cr":{
        "name":"Cree",
        "nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"
    },
    "hr":{
        "name":"Croatian",
        "nativeName":"hrvatski"
    },
    "cs":{
        "name":"Czech",
        "nativeName":"česky, čeština"
    },
    "da":{
        "name":"Danish",
        "nativeName":"dansk"
    },
    "dv":{
        "name":"Divehi; Dhivehi; Maldivian;",
        "nativeName":"ދިވެހި"
    },
    "nl":{
        "name":"Dutch",
        "nativeName":"Nederlands, Vlaams"
    },
    "en":{
        "name":"English",
        "nativeName":"English"
    },
    "eo":{
        "name":"Esperanto",
        "nativeName":"Esperanto"
    },
    "et":{
        "name":"Estonian",
        "nativeName":"eesti, eesti keel"
    },
    "ee":{
        "name":"Ewe",
        "nativeName":"Eʋegbe"
    },
    "fo":{
        "name":"Faroese",
        "nativeName":"føroyskt"
    },
    "fj":{
        "name":"Fijian",
        "nativeName":"vosa Vakaviti"
    },
    "fi":{
        "name":"Finnish",
        "nativeName":"suomi, suomen kieli"
    },
    "fr":{
        "name":"French",
        "nativeName":"français, langue française"
    },
    "ff":{
        "name":"Fula; Fulah; Pulaar; Pular",
        "nativeName":"Fulfulde, Pulaar, Pular"
    },
    "gl":{
        "name":"Galician",
        "nativeName":"Galego"
    },
    "ka":{
        "name":"Georgian",
        "nativeName":"ქართული"
    },
    "de":{
        "name":"German",
        "nativeName":"Deutsch"
    },
    "el":{
        "name":"Greek, Modern",
        "nativeName":"Ελληνικά"
    },
    "gn":{
        "name":"Guaraní",
        "nativeName":"Avañeẽ"
    },
    "gu":{
        "name":"Gujarati",
        "nativeName":"ગુજરાતી"
    },
    "ht":{
        "name":"Haitian; Haitian Creole",
        "nativeName":"Kreyòl ayisyen"
    },
    "ha":{
        "name":"Hausa",
        "nativeName":"Hausa, هَوُسَ"
    },
    "he":{
        "name":"Hebrew (modern)",
        "nativeName":"עברית"
    },
    "hz":{
        "name":"Herero",
        "nativeName":"Otjiherero"
    },
    "hi":{
        "name":"Hindi",
        "nativeName":"हिन्दी, हिंदी"
    },
    "ho":{
        "name":"Hiri Motu",
        "nativeName":"Hiri Motu"
    },
    "hu":{
        "name":"Hungarian",
        "nativeName":"Magyar"
    },
    "ia":{
        "name":"Interlingua",
        "nativeName":"Interlingua"
    },
    "id":{
        "name":"Indonesian",
        "nativeName":"Bahasa Indonesia"
    },
    "ie":{
        "name":"Interlingue",
        "nativeName":"Originally called Occidental; then Interlingue after WWII"
    },
    "ga":{
        "name":"Irish",
        "nativeName":"Gaeilge"
    },
    "ig":{
        "name":"Igbo",
        "nativeName":"Asụsụ Igbo"
    },
    "ik":{
        "name":"Inupiaq",
        "nativeName":"Iñupiaq, Iñupiatun"
    },
    "io":{
        "name":"Ido",
        "nativeName":"Ido"
    },
    "is":{
        "name":"Icelandic",
        "nativeName":"Íslenska"
    },
    "it":{
        "name":"Italian",
        "nativeName":"Italiano"
    },
    "iu":{
        "name":"Inuktitut",
        "nativeName":"ᐃᓄᒃᑎᑐᑦ"
    },
    "ja":{
        "name":"Japanese",
        "nativeName":"日本語 (にほんご／にっぽんご)"
    },
    "jv":{
        "name":"Javanese",
        "nativeName":"basa Jawa"
    },
    "kl":{
        "name":"Kalaallisut, Greenlandic",
        "nativeName":"kalaallisut, kalaallit oqaasii"
    },
    "kn":{
        "name":"Kannada",
        "nativeName":"ಕನ್ನಡ"
    },
    "kr":{
        "name":"Kanuri",
        "nativeName":"Kanuri"
    },
    "ks":{
        "name":"Kashmiri",
        "nativeName":"कश्मीरी, كشميري‎"
    },
    "kk":{
        "name":"Kazakh",
        "nativeName":"Қазақ тілі"
    },
    "km":{
        "name":"Khmer",
        "nativeName":"ភាសាខ្មែរ"
    },
    "ki":{
        "name":"Kikuyu, Gikuyu",
        "nativeName":"Gĩkũyũ"
    },
    "rw":{
        "name":"Kinyarwanda",
        "nativeName":"Ikinyarwanda"
    },
    "ky":{
        "name":"Kirghiz, Kyrgyz",
        "nativeName":"кыргыз тили"
    },
    "kv":{
        "name":"Komi",
        "nativeName":"коми кыв"
    },
    "kg":{
        "name":"Kongo",
        "nativeName":"KiKongo"
    },
    "ko":{
        "name":"Korean",
        "nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"
    },
    "ku":{
        "name":"Kurdish",
        "nativeName":"Kurdî, كوردی‎"
    },
    "kj":{
        "name":"Kwanyama, Kuanyama",
        "nativeName":"Kuanyama"
    },
    "la":{
        "name":"Latin",
        "nativeName":"latine, lingua latina"
    },
    "lb":{
        "name":"Luxembourgish, Letzeburgesch",
        "nativeName":"Lëtzebuergesch"
    },
    "lg":{
        "name":"Luganda",
        "nativeName":"Luganda"
    },
    "li":{
        "name":"Limburgish, Limburgan, Limburger",
        "nativeName":"Limburgs"
    },
    "ln":{
        "name":"Lingala",
        "nativeName":"Lingála"
    },
    "lo":{
        "name":"Lao",
        "nativeName":"ພາສາລາວ"
    },
    "lt":{
        "name":"Lithuanian",
        "nativeName":"lietuvių kalba"
    },
    "lu":{
        "name":"Luba-Katanga",
        "nativeName":""
    },
    "lv":{
        "name":"Latvian",
        "nativeName":"latviešu valoda"
    },
    "gv":{
        "name":"Manx",
        "nativeName":"Gaelg, Gailck"
    },
    "mk":{
        "name":"Macedonian",
        "nativeName":"македонски јазик"
    },
    "mg":{
        "name":"Malagasy",
        "nativeName":"Malagasy fiteny"
    },
    "ms":{
        "name":"Malay",
        "nativeName":"bahasa Melayu, بهاس ملايو‎"
    },
    "ml":{
        "name":"Malayalam",
        "nativeName":"മലയാളം"
    },
    "mt":{
        "name":"Maltese",
        "nativeName":"Malti"
    },
    "mi":{
        "name":"Māori",
        "nativeName":"te reo Māori"
    },
    "mr":{
        "name":"Marathi (Marāṭhī)",
        "nativeName":"मराठी"
    },
    "mh":{
        "name":"Marshallese",
        "nativeName":"Kajin M̧ajeļ"
    },
    "mn":{
        "name":"Mongolian",
        "nativeName":"монгол"
    },
    "na":{
        "name":"Nauru",
        "nativeName":"Ekakairũ Naoero"
    },
    "nv":{
        "name":"Navajo, Navaho",
        "nativeName":"Diné bizaad, Dinékʼehǰí"
    },
    "nb":{
        "name":"Norwegian Bokmål",
        "nativeName":"Norsk bokmål"
    },
    "nd":{
        "name":"North Ndebele",
        "nativeName":"isiNdebele"
    },
    "ne":{
        "name":"Nepali",
        "nativeName":"नेपाली"
    },
    "ng":{
        "name":"Ndonga",
        "nativeName":"Owambo"
    },
    "nn":{
        "name":"Norwegian Nynorsk",
        "nativeName":"Norsk nynorsk"
    },
    "no":{
        "name":"Norwegian",
        "nativeName":"Norsk"
    },
    "ii":{
        "name":"Nuosu",
        "nativeName":"ꆈꌠ꒿ Nuosuhxop"
    },
    "nr":{
        "name":"South Ndebele",
        "nativeName":"isiNdebele"
    },
    "oc":{
        "name":"Occitan",
        "nativeName":"Occitan"
    },
    "oj":{
        "name":"Ojibwe, Ojibwa",
        "nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"
    },
    "cu":{
        "name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
        "nativeName":"ѩзыкъ словѣньскъ"
    },
    "om":{
        "name":"Oromo",
        "nativeName":"Afaan Oromoo"
    },
    "or":{
        "name":"Oriya",
        "nativeName":"ଓଡ଼ିଆ"
    },
    "os":{
        "name":"Ossetian, Ossetic",
        "nativeName":"ирон æвзаг"
    },
    "pa":{
        "name":"Panjabi, Punjabi",
        "nativeName":"ਪੰਜਾਬੀ, پنجابی‎"
    },
    "pi":{
        "name":"Pāli",
        "nativeName":"पाऴि"
    },
    "fa":{
        "name":"Persian",
        "nativeName":"فارسی"
    },
    "pl":{
        "name":"Polish",
        "nativeName":"polski"
    },
    "ps":{
        "name":"Pashto, Pushto",
        "nativeName":"پښتو"
    },
    "pt":{
        "name":"Portuguese",
        "nativeName":"Português"
    },
    "qu":{
        "name":"Quechua",
        "nativeName":"Runa Simi, Kichwa"
    },
    "rm":{
        "name":"Romansh",
        "nativeName":"rumantsch grischun"
    },
    "rn":{
        "name":"Kirundi",
        "nativeName":"kiRundi"
    },
    "ro":{
        "name":"Romanian, Moldavian, Moldovan",
        "nativeName":"română"
    },
    "ru":{
        "name":"Russian",
        "nativeName":"русский язык"
    },
    "sa":{
        "name":"Sanskrit (Saṁskṛta)",
        "nativeName":"संस्कृतम्"
    },
    "sc":{
        "name":"Sardinian",
        "nativeName":"sardu"
    },
    "sd":{
        "name":"Sindhi",
        "nativeName":"सिन्धी, سنڌي، سندھی‎"
    },
    "se":{
        "name":"Northern Sami",
        "nativeName":"Davvisámegiella"
    },
    "sm":{
        "name":"Samoan",
        "nativeName":"gagana faa Samoa"
    },
    "sg":{
        "name":"Sango",
        "nativeName":"yângâ tî sängö"
    },
    "sr":{
        "name":"Serbian",
        "nativeName":"српски језик"
    },
    "gd":{
        "name":"Scottish Gaelic; Gaelic",
        "nativeName":"Gàidhlig"
    },
    "sn":{
        "name":"Shona",
        "nativeName":"chiShona"
    },
    "si":{
        "name":"Sinhala, Sinhalese",
        "nativeName":"සිංහල"
    },
    "sk":{
        "name":"Slovak",
        "nativeName":"slovenčina"
    },
    "sl":{
        "name":"Slovene",
        "nativeName":"slovenščina"
    },
    "so":{
        "name":"Somali",
        "nativeName":"Soomaaliga, af Soomaali"
    },
    "st":{
        "name":"Southern Sotho",
        "nativeName":"Sesotho"
    },
    "es":{
        "name":"Spanish; Castilian",
        "nativeName":"español, castellano"
    },
    "su":{
        "name":"Sundanese",
        "nativeName":"Basa Sunda"
    },
    "sw":{
        "name":"Swahili",
        "nativeName":"Kiswahili"
    },
    "ss":{
        "name":"Swati",
        "nativeName":"SiSwati"
    },
    "sv":{
        "name":"Swedish",
        "nativeName":"svenska"
    },
    "ta":{
        "name":"Tamil",
        "nativeName":"தமிழ்"
    },
    "te":{
        "name":"Telugu",
        "nativeName":"తెలుగు"
    },
    "tg":{
        "name":"Tajik",
        "nativeName":"тоҷикӣ, toğikī, تاجیکی‎"
    },
    "th":{
        "name":"Thai",
        "nativeName":"ไทย"
    },
    "ti":{
        "name":"Tigrinya",
        "nativeName":"ትግርኛ"
    },
    "bo":{
        "name":"Tibetan Standard, Tibetan, Central",
        "nativeName":"བོད་ཡིག"
    },
    "tk":{
        "name":"Turkmen",
        "nativeName":"Türkmen, Түркмен"
    },
    "tl":{
        "name":"Tagalog",
        "nativeName":"Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
    },
    "tn":{
        "name":"Tswana",
        "nativeName":"Setswana"
    },
    "to":{
        "name":"Tonga (Tonga Islands)",
        "nativeName":"faka Tonga"
    },
    "tr":{
        "name":"Turkish",
        "nativeName":"Türkçe"
    },
    "ts":{
        "name":"Tsonga",
        "nativeName":"Xitsonga"
    },
    "tt":{
        "name":"Tatar",
        "nativeName":"татарча, tatarça, تاتارچا‎"
    },
    "tw":{
        "name":"Twi",
        "nativeName":"Twi"
    },
    "ty":{
        "name":"Tahitian",
        "nativeName":"Reo Tahiti"
    },
    "ug":{
        "name":"Uighur, Uyghur",
        "nativeName":"Uyƣurqə, ئۇيغۇرچە‎"
    },
    "uk":{
        "name":"Ukrainian",
        "nativeName":"українська"
    },
    "ur":{
        "name":"Urdu",
        "nativeName":"اردو"
    },
    "uz":{
        "name":"Uzbek",
        "nativeName":"zbek, Ўзбек, أۇزبېك‎"
    },
    "ve":{
        "name":"Venda",
        "nativeName":"Tshivenḓa"
    },
    "vi":{
        "name":"Vietnamese",
        "nativeName":"Tiếng Việt"
    },
    "vo":{
        "name":"Volapük",
        "nativeName":"Volapük"
    },
    "wa":{
        "name":"Walloon",
        "nativeName":"Walon"
    },
    "cy":{
        "name":"Welsh",
        "nativeName":"Cymraeg"
    },
    "wo":{
        "name":"Wolof",
        "nativeName":"Wollof"
    },
    "fy":{
        "name":"Western Frisian",
        "nativeName":"Frysk"
    },
    "xh":{
        "name":"Xhosa",
        "nativeName":"isiXhosa"
    },
    "yi":{
        "name":"Yiddish",
        "nativeName":"ייִדיש"
    },
    "yo":{
        "name":"Yoruba",
        "nativeName":"Yorùbá"
    },
    "za":{
        "name":"Zhuang, Chuang",
        "nativeName":"Saɯ cueŋƅ, Saw cuengh"
    }
};
iShake.lang.en = {
    
    'common.no-connection': 'No connection!',
    'common.back': 'Back',
    'common.edit': 'Edit',
    'common.finish': 'Finish',
    'common.delete': 'Delete',
    'common.save': 'Save',
    'common.shake': 'Shake!',
    'common.start': 'Start!',
    'common.login': 'Login',
    'common.register': 'Register',
    'common.error': 'Error',
    
    'menu.iShake': 'iShake',
    'menu.mylists': 'My lists',
    'menu.onlinelists': 'Online lists',
    'menu.logout': 'Log out',
    
    'home.list-finished': 'Congratulations! You have completed all cards.',

    'lists.hd': 'My lists',
    'lists.new-list': 'Add list...',
    'lists.list-deleted': 'Sorry, this list was deleted by user.',
    
    'online.hd': 'Online lists',
    
    'listedit.public': 'This list is public',
    'listedit.name': 'Name',
    
    'list.new-item': 'Add item...',
    
    'item.text': 'Text',
    'item.backside': 'Backside',
    'item.backside-text': 'Text on backside',
    
    'listedit.confirm-delete-list-hd': 'Are you sure?',
    'listedit.confirm-delete-list-bd': 'Are you sure that you want to delete this list?',
    
    'item.confirm-delete-item-hd': 'Are you sure?',
    'item.confirm-delete-item-bd': 'Are you sure that you want to delete this item?',
    
    
    // List edit form
    'listedit.list-saved-hd': 'Saved',
    'listedit.list-saved-bd': 'Your list has been saved.',
    
    // Item edit form
    'item.item-saved-hd': 'Saved',
    'item.item-saved-bd': 'Item has been saved.',
    
    // Registration-form
    'registration.username-empty': 'Please enter your username.',
    'registration.username-exists': 'This username is already taken.',
    'registration.username-alphanum' : 'Your username may contain only alpha numeric characters (a-z, 0-9).',
    'registration.username-length': 'Your username must contain 4-12 characters.',
    'registration.email-empty': 'Please enter your e-mail.',
    'registration.email-email': 'Not a valid e-mail address.',
    'registration.email-exists': 'Username with this e-mail address already exists.',
    'registration.password-empty': 'Please enter your password',
    'registration.password-length': 'Your password must be at least 6 characters long.',
    'registration.password-repeat': 'Passwords do not match.',
    
    // Login form
    'login.username-empty': 'Please enter your username.',
    'login.password-empty': 'Please enter your password.',
    'login.username-wrong': 'Username or password is incorrect.',
    
    
    'user.username': 'Username',
    'user.password': 'Password',
    'user.password-repeat': 'Repeat password',
    'user.email': 'E-mail',
    'user.signinwith': 'Sign in with',
    'user.logoutsuccess': 'You have been successfully logged out.'
};
/**
 * @author Phil Teare
 * using wikipedia data
 */
iShake.lang.en.isoLangs = {
    "ab":{
        "name":"Abkhaz",
        "nativeName":"аҧсуа"
    },
    "aa":{
        "name":"Afar",
        "nativeName":"Afaraf"
    },
    "af":{
        "name":"Afrikaans",
        "nativeName":"Afrikaans"
    },
    "ak":{
        "name":"Akan",
        "nativeName":"Akan"
    },
    "sq":{
        "name":"Albanian",
        "nativeName":"Shqip"
    },
    "am":{
        "name":"Amharic",
        "nativeName":"አማርኛ"
    },
    "ar":{
        "name":"Arabic",
        "nativeName":"العربية"
    },
    "an":{
        "name":"Aragonese",
        "nativeName":"Aragonés"
    },
    "hy":{
        "name":"Armenian",
        "nativeName":"Հայերեն"
    },
    "as":{
        "name":"Assamese",
        "nativeName":"অসমীয়া"
    },
    "av":{
        "name":"Avaric",
        "nativeName":"авар мацӀ, магӀарул мацӀ"
    },
    "ae":{
        "name":"Avestan",
        "nativeName":"avesta"
    },
    "ay":{
        "name":"Aymara",
        "nativeName":"aymar aru"
    },
    "az":{
        "name":"Azerbaijani",
        "nativeName":"azərbaycan dili"
    },
    "bm":{
        "name":"Bambara",
        "nativeName":"bamanankan"
    },
    "ba":{
        "name":"Bashkir",
        "nativeName":"башҡорт теле"
    },
    "eu":{
        "name":"Basque",
        "nativeName":"euskara, euskera"
    },
    "be":{
        "name":"Belarusian",
        "nativeName":"Беларуская"
    },
    "bn":{
        "name":"Bengali",
        "nativeName":"বাংলা"
    },
    "bh":{
        "name":"Bihari",
        "nativeName":"भोजपुरी"
    },
    "bi":{
        "name":"Bislama",
        "nativeName":"Bislama"
    },
    "bs":{
        "name":"Bosnian",
        "nativeName":"bosanski jezik"
    },
    "br":{
        "name":"Breton",
        "nativeName":"brezhoneg"
    },
    "bg":{
        "name":"Bulgarian",
        "nativeName":"български език"
    },
    "my":{
        "name":"Burmese",
        "nativeName":"ဗမာစာ"
    },
    "ca":{
        "name":"Catalan; Valencian",
        "nativeName":"Català"
    },
    "ch":{
        "name":"Chamorro",
        "nativeName":"Chamoru"
    },
    "ce":{
        "name":"Chechen",
        "nativeName":"нохчийн мотт"
    },
    "ny":{
        "name":"Chichewa; Chewa; Nyanja",
        "nativeName":"chiCheŵa, chinyanja"
    },
    "zh":{
        "name":"Chinese",
        "nativeName":"中文 (Zhōngwén), 汉语, 漢語"
    },
    "cv":{
        "name":"Chuvash",
        "nativeName":"чӑваш чӗлхи"
    },
    "kw":{
        "name":"Cornish",
        "nativeName":"Kernewek"
    },
    "co":{
        "name":"Corsican",
        "nativeName":"corsu, lingua corsa"
    },
    "cr":{
        "name":"Cree",
        "nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"
    },
    "hr":{
        "name":"Croatian",
        "nativeName":"hrvatski"
    },
    "cs":{
        "name":"Czech",
        "nativeName":"česky, čeština"
    },
    "da":{
        "name":"Danish",
        "nativeName":"dansk"
    },
    "dv":{
        "name":"Divehi; Dhivehi; Maldivian;",
        "nativeName":"ދިވެހި"
    },
    "nl":{
        "name":"Dutch",
        "nativeName":"Nederlands, Vlaams"
    },
    "en":{
        "name":"English",
        "nativeName":"English"
    },
    "eo":{
        "name":"Esperanto",
        "nativeName":"Esperanto"
    },
    "et":{
        "name":"Estonian",
        "nativeName":"eesti, eesti keel"
    },
    "ee":{
        "name":"Ewe",
        "nativeName":"Eʋegbe"
    },
    "fo":{
        "name":"Faroese",
        "nativeName":"føroyskt"
    },
    "fj":{
        "name":"Fijian",
        "nativeName":"vosa Vakaviti"
    },
    "fi":{
        "name":"Finnish",
        "nativeName":"suomi, suomen kieli"
    },
    "fr":{
        "name":"French",
        "nativeName":"français, langue française"
    },
    "ff":{
        "name":"Fula; Fulah; Pulaar; Pular",
        "nativeName":"Fulfulde, Pulaar, Pular"
    },
    "gl":{
        "name":"Galician",
        "nativeName":"Galego"
    },
    "ka":{
        "name":"Georgian",
        "nativeName":"ქართული"
    },
    "de":{
        "name":"German",
        "nativeName":"Deutsch"
    },
    "el":{
        "name":"Greek, Modern",
        "nativeName":"Ελληνικά"
    },
    "gn":{
        "name":"Guaraní",
        "nativeName":"Avañeẽ"
    },
    "gu":{
        "name":"Gujarati",
        "nativeName":"ગુજરાતી"
    },
    "ht":{
        "name":"Haitian; Haitian Creole",
        "nativeName":"Kreyòl ayisyen"
    },
    "ha":{
        "name":"Hausa",
        "nativeName":"Hausa, هَوُسَ"
    },
    "he":{
        "name":"Hebrew (modern)",
        "nativeName":"עברית"
    },
    "hz":{
        "name":"Herero",
        "nativeName":"Otjiherero"
    },
    "hi":{
        "name":"Hindi",
        "nativeName":"हिन्दी, हिंदी"
    },
    "ho":{
        "name":"Hiri Motu",
        "nativeName":"Hiri Motu"
    },
    "hu":{
        "name":"Hungarian",
        "nativeName":"Magyar"
    },
    "ia":{
        "name":"Interlingua",
        "nativeName":"Interlingua"
    },
    "id":{
        "name":"Indonesian",
        "nativeName":"Bahasa Indonesia"
    },
    "ie":{
        "name":"Interlingue",
        "nativeName":"Originally called Occidental; then Interlingue after WWII"
    },
    "ga":{
        "name":"Irish",
        "nativeName":"Gaeilge"
    },
    "ig":{
        "name":"Igbo",
        "nativeName":"Asụsụ Igbo"
    },
    "ik":{
        "name":"Inupiaq",
        "nativeName":"Iñupiaq, Iñupiatun"
    },
    "io":{
        "name":"Ido",
        "nativeName":"Ido"
    },
    "is":{
        "name":"Icelandic",
        "nativeName":"Íslenska"
    },
    "it":{
        "name":"Italian",
        "nativeName":"Italiano"
    },
    "iu":{
        "name":"Inuktitut",
        "nativeName":"ᐃᓄᒃᑎᑐᑦ"
    },
    "ja":{
        "name":"Japanese",
        "nativeName":"日本語 (にほんご／にっぽんご)"
    },
    "jv":{
        "name":"Javanese",
        "nativeName":"basa Jawa"
    },
    "kl":{
        "name":"Kalaallisut, Greenlandic",
        "nativeName":"kalaallisut, kalaallit oqaasii"
    },
    "kn":{
        "name":"Kannada",
        "nativeName":"ಕನ್ನಡ"
    },
    "kr":{
        "name":"Kanuri",
        "nativeName":"Kanuri"
    },
    "ks":{
        "name":"Kashmiri",
        "nativeName":"कश्मीरी, كشميري‎"
    },
    "kk":{
        "name":"Kazakh",
        "nativeName":"Қазақ тілі"
    },
    "km":{
        "name":"Khmer",
        "nativeName":"ភាសាខ្មែរ"
    },
    "ki":{
        "name":"Kikuyu, Gikuyu",
        "nativeName":"Gĩkũyũ"
    },
    "rw":{
        "name":"Kinyarwanda",
        "nativeName":"Ikinyarwanda"
    },
    "ky":{
        "name":"Kirghiz, Kyrgyz",
        "nativeName":"кыргыз тили"
    },
    "kv":{
        "name":"Komi",
        "nativeName":"коми кыв"
    },
    "kg":{
        "name":"Kongo",
        "nativeName":"KiKongo"
    },
    "ko":{
        "name":"Korean",
        "nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"
    },
    "ku":{
        "name":"Kurdish",
        "nativeName":"Kurdî, كوردی‎"
    },
    "kj":{
        "name":"Kwanyama, Kuanyama",
        "nativeName":"Kuanyama"
    },
    "la":{
        "name":"Latin",
        "nativeName":"latine, lingua latina"
    },
    "lb":{
        "name":"Luxembourgish, Letzeburgesch",
        "nativeName":"Lëtzebuergesch"
    },
    "lg":{
        "name":"Luganda",
        "nativeName":"Luganda"
    },
    "li":{
        "name":"Limburgish, Limburgan, Limburger",
        "nativeName":"Limburgs"
    },
    "ln":{
        "name":"Lingala",
        "nativeName":"Lingála"
    },
    "lo":{
        "name":"Lao",
        "nativeName":"ພາສາລາວ"
    },
    "lt":{
        "name":"Lithuanian",
        "nativeName":"lietuvių kalba"
    },
    "lu":{
        "name":"Luba-Katanga",
        "nativeName":""
    },
    "lv":{
        "name":"Latvian",
        "nativeName":"latviešu valoda"
    },
    "gv":{
        "name":"Manx",
        "nativeName":"Gaelg, Gailck"
    },
    "mk":{
        "name":"Macedonian",
        "nativeName":"македонски јазик"
    },
    "mg":{
        "name":"Malagasy",
        "nativeName":"Malagasy fiteny"
    },
    "ms":{
        "name":"Malay",
        "nativeName":"bahasa Melayu, بهاس ملايو‎"
    },
    "ml":{
        "name":"Malayalam",
        "nativeName":"മലയാളം"
    },
    "mt":{
        "name":"Maltese",
        "nativeName":"Malti"
    },
    "mi":{
        "name":"Māori",
        "nativeName":"te reo Māori"
    },
    "mr":{
        "name":"Marathi (Marāṭhī)",
        "nativeName":"मराठी"
    },
    "mh":{
        "name":"Marshallese",
        "nativeName":"Kajin M̧ajeļ"
    },
    "mn":{
        "name":"Mongolian",
        "nativeName":"монгол"
    },
    "na":{
        "name":"Nauru",
        "nativeName":"Ekakairũ Naoero"
    },
    "nv":{
        "name":"Navajo, Navaho",
        "nativeName":"Diné bizaad, Dinékʼehǰí"
    },
    "nb":{
        "name":"Norwegian Bokmål",
        "nativeName":"Norsk bokmål"
    },
    "nd":{
        "name":"North Ndebele",
        "nativeName":"isiNdebele"
    },
    "ne":{
        "name":"Nepali",
        "nativeName":"नेपाली"
    },
    "ng":{
        "name":"Ndonga",
        "nativeName":"Owambo"
    },
    "nn":{
        "name":"Norwegian Nynorsk",
        "nativeName":"Norsk nynorsk"
    },
    "no":{
        "name":"Norwegian",
        "nativeName":"Norsk"
    },
    "ii":{
        "name":"Nuosu",
        "nativeName":"ꆈꌠ꒿ Nuosuhxop"
    },
    "nr":{
        "name":"South Ndebele",
        "nativeName":"isiNdebele"
    },
    "oc":{
        "name":"Occitan",
        "nativeName":"Occitan"
    },
    "oj":{
        "name":"Ojibwe, Ojibwa",
        "nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"
    },
    "cu":{
        "name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
        "nativeName":"ѩзыкъ словѣньскъ"
    },
    "om":{
        "name":"Oromo",
        "nativeName":"Afaan Oromoo"
    },
    "or":{
        "name":"Oriya",
        "nativeName":"ଓଡ଼ିଆ"
    },
    "os":{
        "name":"Ossetian, Ossetic",
        "nativeName":"ирон æвзаг"
    },
    "pa":{
        "name":"Panjabi, Punjabi",
        "nativeName":"ਪੰਜਾਬੀ, پنجابی‎"
    },
    "pi":{
        "name":"Pāli",
        "nativeName":"पाऴि"
    },
    "fa":{
        "name":"Persian",
        "nativeName":"فارسی"
    },
    "pl":{
        "name":"Polish",
        "nativeName":"polski"
    },
    "ps":{
        "name":"Pashto, Pushto",
        "nativeName":"پښتو"
    },
    "pt":{
        "name":"Portuguese",
        "nativeName":"Português"
    },
    "qu":{
        "name":"Quechua",
        "nativeName":"Runa Simi, Kichwa"
    },
    "rm":{
        "name":"Romansh",
        "nativeName":"rumantsch grischun"
    },
    "rn":{
        "name":"Kirundi",
        "nativeName":"kiRundi"
    },
    "ro":{
        "name":"Romanian, Moldavian, Moldovan",
        "nativeName":"română"
    },
    "ru":{
        "name":"Russian",
        "nativeName":"русский язык"
    },
    "sa":{
        "name":"Sanskrit (Saṁskṛta)",
        "nativeName":"संस्कृतम्"
    },
    "sc":{
        "name":"Sardinian",
        "nativeName":"sardu"
    },
    "sd":{
        "name":"Sindhi",
        "nativeName":"सिन्धी, سنڌي، سندھی‎"
    },
    "se":{
        "name":"Northern Sami",
        "nativeName":"Davvisámegiella"
    },
    "sm":{
        "name":"Samoan",
        "nativeName":"gagana faa Samoa"
    },
    "sg":{
        "name":"Sango",
        "nativeName":"yângâ tî sängö"
    },
    "sr":{
        "name":"Serbian",
        "nativeName":"српски језик"
    },
    "gd":{
        "name":"Scottish Gaelic; Gaelic",
        "nativeName":"Gàidhlig"
    },
    "sn":{
        "name":"Shona",
        "nativeName":"chiShona"
    },
    "si":{
        "name":"Sinhala, Sinhalese",
        "nativeName":"සිංහල"
    },
    "sk":{
        "name":"Slovak",
        "nativeName":"slovenčina"
    },
    "sl":{
        "name":"Slovene",
        "nativeName":"slovenščina"
    },
    "so":{
        "name":"Somali",
        "nativeName":"Soomaaliga, af Soomaali"
    },
    "st":{
        "name":"Southern Sotho",
        "nativeName":"Sesotho"
    },
    "es":{
        "name":"Spanish; Castilian",
        "nativeName":"español, castellano"
    },
    "su":{
        "name":"Sundanese",
        "nativeName":"Basa Sunda"
    },
    "sw":{
        "name":"Swahili",
        "nativeName":"Kiswahili"
    },
    "ss":{
        "name":"Swati",
        "nativeName":"SiSwati"
    },
    "sv":{
        "name":"Swedish",
        "nativeName":"svenska"
    },
    "ta":{
        "name":"Tamil",
        "nativeName":"தமிழ்"
    },
    "te":{
        "name":"Telugu",
        "nativeName":"తెలుగు"
    },
    "tg":{
        "name":"Tajik",
        "nativeName":"тоҷикӣ, toğikī, تاجیکی‎"
    },
    "th":{
        "name":"Thai",
        "nativeName":"ไทย"
    },
    "ti":{
        "name":"Tigrinya",
        "nativeName":"ትግርኛ"
    },
    "bo":{
        "name":"Tibetan Standard, Tibetan, Central",
        "nativeName":"བོད་ཡིག"
    },
    "tk":{
        "name":"Turkmen",
        "nativeName":"Türkmen, Түркмен"
    },
    "tl":{
        "name":"Tagalog",
        "nativeName":"Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
    },
    "tn":{
        "name":"Tswana",
        "nativeName":"Setswana"
    },
    "to":{
        "name":"Tonga (Tonga Islands)",
        "nativeName":"faka Tonga"
    },
    "tr":{
        "name":"Turkish",
        "nativeName":"Türkçe"
    },
    "ts":{
        "name":"Tsonga",
        "nativeName":"Xitsonga"
    },
    "tt":{
        "name":"Tatar",
        "nativeName":"татарча, tatarça, تاتارچا‎"
    },
    "tw":{
        "name":"Twi",
        "nativeName":"Twi"
    },
    "ty":{
        "name":"Tahitian",
        "nativeName":"Reo Tahiti"
    },
    "ug":{
        "name":"Uighur, Uyghur",
        "nativeName":"Uyƣurqə, ئۇيغۇرچە‎"
    },
    "uk":{
        "name":"Ukrainian",
        "nativeName":"українська"
    },
    "ur":{
        "name":"Urdu",
        "nativeName":"اردو"
    },
    "uz":{
        "name":"Uzbek",
        "nativeName":"zbek, Ўзбек, أۇزبېك‎"
    },
    "ve":{
        "name":"Venda",
        "nativeName":"Tshivenḓa"
    },
    "vi":{
        "name":"Vietnamese",
        "nativeName":"Tiếng Việt"
    },
    "vo":{
        "name":"Volapük",
        "nativeName":"Volapük"
    },
    "wa":{
        "name":"Walloon",
        "nativeName":"Walon"
    },
    "cy":{
        "name":"Welsh",
        "nativeName":"Cymraeg"
    },
    "wo":{
        "name":"Wolof",
        "nativeName":"Wollof"
    },
    "fy":{
        "name":"Western Frisian",
        "nativeName":"Frysk"
    },
    "xh":{
        "name":"Xhosa",
        "nativeName":"isiXhosa"
    },
    "yi":{
        "name":"Yiddish",
        "nativeName":"ייִדיש"
    },
    "yo":{
        "name":"Yoruba",
        "nativeName":"Yorùbá"
    },
    "za":{
        "name":"Zhuang, Chuang",
        "nativeName":"Saɯ cueŋƅ, Saw cuengh"
    }
};
/**
 * Vector
 * 
 * @param {Object} acceleration Acceleration object
 */
iShake.model.Vector = function(acceleration) {
    this.update(acceleration);
}

iShake.model.Vector.prototype = {
    
    /**
     * Compares stores vector with specified vector and determines whether
     * move of devices is big enough, that it shaking
     *
     * @param {Object} vector 
     * @return {boolean}
     */
    isShaking: function(vector) {
        var dx = Math.abs(vector.x - this.x),
            dy = Math.abs(vector.y - this.y),
            dz = Math.abs(vector.y - this.y),
            threshold = 18;
        
        if (dx > threshold ||
            dy > threshold ||
            dz > threshold)
        {
            return true;
        }        

        return false;
    },
    
    /**
     * Updates vector
     *
     * @param {Object} acceleration object with acceleration data
     */
    update: function(acceleration) {
        this.x = acceleration.x;
        this.y = acceleration.y;
        this.z = acceleration.z;
    }
};
/**
 * List Repository
 *
 */
iShake.repository.list = {
    lists: amplify.store('lists') || {},
    currentId_: amplify.store('currentListId') || 0,
    
    /**
     * Returns currently selected list id
     * @param {integer} id Optional ID, if specified, stores new id value
     * @return {integer}
     */
    currentId: function(id) {
        if (id)
        {
            this.currentId_ = id;
            amplify.store('currentListId', id);
        }
        
        return this.currentId_ || 0;        
    },
    
    /**
     * Stores locally specified lists
     *
     * @param {Array} listData An array with list objects
     * @return {Array.<iShake.ui.model.List>}
     */
    add: function(listData) {
        var lists = [], list;
        for (var i = 0; i < listData.length; i++)
        {
            // storing lists
            list = listData[i];
            this.lists[listData[i].id] = list;
            
            lists.push(list);
        }

        amplify.store('lists', this.lists);
        
        return lists;
    },
    
    /**
     * Creates a new list with specified name
     * 
     * @param {string} name Name of the list
     * @param {Function} callback Callback funtion
     * @param {Object} scope Callback scope
     */
    create: function(name, callback, scope) {
        app.request('/list/add', function(data) {
            var listIds = iShake.repository.user.listIds();
            listIds.push(data.list.id);
            iShake.repository.user.listIds(listIds);
            var list = this.add([data.list])[0];            
            
            if (callback)
            {
                callback.call(scope, list);
            }
        }, this, {
            name: name,
            language: navigator.language
        });
    },
    
    /**
     * Adds a new item to the list
     *
     * @param {string} listId Id of list, where the item should be added
     * @param {string} name Name of item
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     */
    addItem: function(listId, name, callback, scope) {
        app.request('/list-item/add', function(data) {
            var list = this.lists[listId];
            if (list && list.items)
            {
                list.items.push(data.item);
                amplify.store('lists', this.lists);
            }
            
            if (callback)
            {
                callback.call(scope, data.item);
            }
            
        }, this, {
            listId: listId,
            text: name
        });
    },
    
    /**
     * Loads lists from server. Lists can be filterd with options object.
     * 
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     * @param {Object} options Configuration filter
     */
    all: function(callback, scope, options) {
        /*
         * startLists
         */
        app.request('/list/all', function(data) {
            var lists = data.lists;
            
            lists = this.add(lists);
            
            callback.call(scope, lists);
            
        }, this, options);
    },
    
    /**
     * Gets single list from server
     * @param {integer} id Id of list
     * @param {Function} callback Callback object
     * @param {Object} scope Callback scope object
     * @param {Object} options Object with fetch parameters
     */
    get: function(id, callback, scope, options) {
        if (!id)
        {
            throw new Error('id is undefined');
        }
        
        options = options || {};
        
        if (this.lists[id] && this.lists[id].items && !options.remote)
        {
            callback.call(scope, this.lists[id]);
        }
        else
        {
            app.request('/list/get/id/' + id, function(data) {
                this.lists[id] = data.list;
                amplify.store('lists', this.lists);
                callback.call(scope, this.lists[id]);
            }, this, null, options.silent);
        }
    },
    
    /**
     * Returns list item with specified id
     * 
     * @param {integer} id Item's id
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     */
    item: function(id, callback, scope) {
        app.request('/list-item/get', function(data) {
            if (callback)
            {
                callback.call(scope, data.item);
            }
        }, this, {
            id: id
        });
    },
    
    /**
     * Updates list
     * 
     * @param {Object} list List data
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     */
    update: function(list, callback, scope) {
        app.request('/list/update', function(data) {
            
            this.lists[data.id] = data;
            amplify.store('lists', this.lists);
            
            if (typeof callback == 'function')
            {
                callback.call(scope, this.lists[data.id]);
            }
        }, this, {
            id: list.id,
            name: list.name, 
            isPublic: list.isPublic,
            category: list.category,
            language: list.language
        });
    },
    
    /**
     * Updates list item
     * 
     * @param {Object} item List item
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     */
    updateItem: function(item, callback, scope) {
        app.request('/list-item/update', function(data) {
            this.lists[data.list.id]  = data.list;
            amplify.store('lists', this.lists);
            
            if (callback)
            {
                callback.call(scope, data.item);
            }
        }, this, {
            id: item.id,
            text: item.text,
            hasBackside: item.hasBackside,
            backsideText: item.backsideText
        });
    },
    
    /**
     * Deletes list
     * 
     * @param {Object} list List data
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     */
    remove: function(list, callback, scope) {
        delete this.lists[list.id];
        amplify.store('lists', this.lists);
        
        var listIds = iShake.repository.user.listIds(),
            index = iShake.util.indexOf(listIds, list.id);
        
        if (index != -1)
        {
            listIds.splice(index, 1);
            iShake.repository.user.listIds(listIds);
        }
        
        
        app.request('/list/delete', function(data) {
            if (typeof callback == 'function')
            {
                callback.call(scope);
            }
            
            }, this, {
                id: list.id
            }
        );
    },
    
    /**
     * Removes an item from specified list
     * 
     * @param {Object} item Item to be deleted
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     */
    removeItem: function(item, callback, scope) {
        app.request('/list-item/delete', function(data) {
            this.lists[data.list.id]  = data.list;
            amplify.store('lists', this.lists);
           
            if (callback)
            {
                callback.call(scope, data.item);
            }
        }, this, {
            id: item.id
        });
    }
};
iShake.repository.user = {
    user_: null,
    listIds_: null,
    completedItemIds_: amplify.store('completedids') || [],
    
    /**
     * Returns currently loaded user
     * 
     * @param {Object} userData if provided stores currently loaded user
     */
    current: function(userData) {
        if (userData)
        {
            this.user_ = userData;
            amplify.store('user', userData);
        }

        if (!this.user_)
        {
            this.user_ = amplify.store('user');
        }
        
        if (userData === null)
        {
            amplify.store('user', null, {expires: 0});
            this.user_ = null;
        }

        return this.user_;
    },
    
    /**
     * Stores that user has answered the question
     * 
     * @param {Array.<integer>} ids Array with list items
     */
    completedItemIds: function(ids) {
        if (ids)
        {
            this.completedItemIds_ = ids;        
            amplify.store('completedids', this.completedItemIds_);        
        }
            
        return this.completedItemIds_;
    },
    
    /**
     * Stores selected by user list ids
     * 
     * @param {Array} listIds Array of list ids
     */
    listIds: function(listIds) {
        var user = this.current();
        
        if (listIds)
        {
            var currentId = iShake.repository.list.currentId();
            if (listIds.length && $.inArray(currentId, listIds) == -1)
            {
                iShake.repository.list.currentId(listIds[0]);
            }            
        }
        
        if (listIds && user)
        {
            user.listIds = listIds;         
            app.request('/user/set-list-ids', null, null, {
                listIds: listIds
            });
            
            amplify.store('user', user);
        }
        else if (listIds)
        {
            this.listIds_ = listIds;                        
            amplify.store('listIds', listIds);
        }
        
        if (user)
        {
            this.listIds_ = this.current().listIds;                        
        }
        else
        {
            this.listIds_ = this.listIds_ || amplify.store('listIds') || [];
        }
        
        return this.listIds_;
    },
    
    /**
     * Loads user lists
     * 
     * @param {Function} callback Callback function
     * @param {Object} scope Callback object
     */
    lists: function(callback, scope) {
        var listIds = this.listIds(),
            listRepo = iShake.repository.list;
            
        if (!listIds || listIds.length == 0)
        {
            listIds = listIds || [];
            
            listRepo.all(function(lists) {
                for (var i = 0; i < lists.length; i++)
                {
                    listIds.push(lists[i].id);
                }
                
                this.listIds(listIds);
                
                callback.call(scope, lists);
                
                }, this, {ids: [52, 13]}
            );
        }
        else
        {
            var lists = [], list;
            for (var i = 0; i < listIds.length; i++)
            {
                list = listRepo.lists[listIds[i]];
                
                // one of the lists is not in cache
                if (!list)
                {
                    listRepo.get(listIds[i], function() {
                        this.lists(callback, scope);                        
                    }, this);
                    return;
                }
                
                lists.push(list);
            }
            callback.call(scope, lists);
        }
    },
    
    /**
     * Removes doubly stored items
     */
    repair: function() {
        var listIds = this.listIds();
        
        //removes doubles (there should be no doubles in the list)
        for (var i = listIds.length - 1; i >= 0; i--) 
        {
            if ($.inArray(Number(listIds[i]), listIds, i + 1) != -1 ||
                $.inArray(String(listIds[i]), listIds, i + 1) != -1) 
            {
                listIds.splice(i, 1);
            }
        }
        
        this.listIds(listIds);
    },
    
    /**
     * Refreshes user data and lists
     *
     * @param {Function} callback Callback function
     * @param {Object} scope Callback scope
     */
    refresh: function(callback, scope) {
        app.request('/user/get', function(data) {
            this.current(data.user);
            iShake.repository.list.add(data.lists);

            if (callback) {
                callback.call(scope);
            }
        }, this);        
    },
    
    /**
     * Sets facebook
     */
    setFacebook: function() {
        app.request('/user/facebook-login', function(data) {
            iShake.repository.user.current(data.user);            
            iShake.repository.list.add(data.lists);
            app.updateLoginStatus();
        });
    }
};
/**
 * Form component
 * 
 * @param {Element} el Form element
 * @param {string} url Post-Back URL
 * @param {Function} callback Callback function
 * @param {Object} scope Callback scope
 */
iShake.ui.Form = function(el, url, callback, scope)
{
    this.el = el;
    this.url = url;
    this.callback = callback;
    this.scope = scope;
    
    var me = this;
    el.on('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        me.submit();
    });
    el.on('keydown keyup', function(e) {
        var target = $(e.target);
        target.parent().toggleClass('empty', !target.val());
    });
}

iShake.ui.Form.prototype = {
    /**
     * Disposes form
     */
    dispose: function()
    {
        this.el.off('keydown keyup submit');
        this.el[0].reset();
    },
    
    /**
     * Sets form data
     * @param {Object} data Object with form data, where key stands for name of
     *      field.
     */
    setData: function(data)
    {
        var formEl = this.el, el;
        
        for (var key in data)
        {
            el = formEl.find('[name=' + key + ']');
            
            switch (el.attr('type'))
            {
                case 'checkbox':
                    el[0].checked = !!data[key];
                    break;                    
                default:
                    el.val(data[key]);
                    el.parent().toggleClass('empty', !data[key]);
                    break;
            }
        }
    },
    
    /**
     * Submits form
     */
    submit: function()
    {
        app.setLoading(true);
        var data = this.el.serialize();
        app.request(this.url, function(data) {
            app.setLoading(false);
            
            if (!data.success)
            {
                iShake.ui.notify.alert(data.errors[0].message, null, 'error');
            }
            else
            {
                this.callback.call(this.scope, data);
            }  
        }, this, data);        
        
    },
    
    /**
     * Returns value of speicified field element
     * 
     * @param {string} name
     * @return {string}
     */
    val: function(name)
    {
        var el = this.el.find('[name=' + name + ']');
        switch (el.attr('type'))
        {
            case 'checkbox':
                return el.attr('checked') ? '1' : '0';
            default:
                return el.val();
        }
    }
};
/**
 * Input box for new list item
 * 
 * @param {string} defaultText Default empty text
 * @param {Function} callback Callback method
 * @param {Object} scope Callback's scope object
 */
iShake.ui.NewItemInput = function(defaultText, callback, scope)
{
    this.defaultText = defaultText;
    this.callback = callback;
    this.cbScope = scope;
    
}

/**
 * Renders component to specified parent element
 * 
 * @param {Element} parent Container element where input should be rendered
 */
iShake.ui.NewItemInput.prototype.render = function(parent)
{
    var html = [
        '<li class="new-item-li empty">',
            '<span class="new-item">',
                '<span class="item-loader"><span class="spinner"></span></span>',
                '<span class="new-item-wrap"><input type="text" class="new-item-input" name="new" value="" /></span>',
                '<span class="new-item-empty">' + this.defaultText + '</span>',
            '</span>',
            '<span class="disclosure-wrap"><span class="disclosure icon-button plus"></span></span>',
        '</li>'].join('');
    
    
    parent.append(html);
    
    
    var input = $('.new-item-input'),
        me = this;
    
//    input.on('change', function(e) {
//        input.parent().parent().parent().addClass('loading');        
//        me.callback.call(me.cbScope, e.target.value);        
//    });
    
    input.on('keyup keydown', function(e) {
        input.parent().parent().parent().toggleClass('empty', !input.val());

        if (e.keyCode == 13)
        {
            e.target.blur();
        }
    });
    
    $('.new-item-li .plus', parent).on('click', function() {
        input.parent().parent().parent().addClass('loading');        
        me.callback.call(me.cbScope, input.val());
    });
    
    this.input = input;
    
    
}

/**
 * Resets form
 */
iShake.ui.NewItemInput.prototype.reset = function()
{
    this.input.val('');
    
    var li = this.input.parent().parent().parent();
    li.removeClass('loading');
    li.addClass('empty');
}
/**
 * Notification object
 */
iShake.ui.notify = {
    
    /**
     * Alers message
     * 
     * @param {string} message Message to be displayed
     * @param {Function} alertCallback Function to be called after user pressed
     *      okay
     * @param {string} title Title text for message box
     * @param {string} buttonName Button's label
     */
    alert: function(message, alertCallback, title, buttonName)
    {
        if (navigator.notification)
        {
            navigator.notification.alert(app.getMsg(message), 
                                            alertCallback, 
                                            app.getMsg(title), 
                                            app.getMsg(buttonName)
            );
        }
        else
        {
            alert(app.getMsg(message));
        }


    },
    
    /**
     * Shows confirm dialog
     * 
     * @param {string} message Message to be displayed
     * @param {Function} confirmCallback Function to be called after user pressed
     *      okay
     * @param {string} title Title text for message box
     * @param {string} buttonLabels Comma separated list of labels
     */
    confirm: function(message, confirmCallback, title, buttonLabels)
    {
        if (navigator.notification)
        {
            navigator.notification.confirm(app.getMsg(message), 
                                            confirmCallback, 
                                            app.getMsg(title), 
                                            app.getMsg(buttonLabels));
        }
        else
        {
            if (confirm(app.getMsg(message)))
            {
                confirmCallback.call();
            }            
        }
    }
};
/**
 * 
 */
iShake.ui.PageTransition = function() {
    
    
};

iShake.ui.PageTransition.prototype = {
    /**
     * Slides page
     * 
     * @param {Object} opts Flip options
     */
    slide: function(opts) {
        var body = $(document.body),
            inEl = opts.to,
            outEl = opts.from,
            direction = opts.direction,
            slideWise = {
                rtl: ['slide-out-to-left', 'slide-in-from-right'],
                ltr: ['slide-out-to-right', 'slide-in-from-left']
            },
            wise = slideWise[direction],
            reset = function(){
                body.removeClass('sliding'),          
//                inEl.off('webkitAnimationEnd');
                outEl.addClass('hidden');                
                outEl.removeClass(wise[0]);
                inEl.removeClass(wise[1]);                                
            };

        body.addClass('sliding'),          
        inEl.removeClass('hidden');        
        
        // In webkit on android webkitAnimationEnd event was fire just after
        // animation has been completed and elements were set to their
        // original positions, that's why it has been replaced with timer
//        webkitAnimationEnd on android is fired when
//        inEl.on('webkitAnimationEnd', reset);

        setTimeout(reset, 350);
        outEl.addClass(wise[0]);
        inEl.addClass(wise[1]);
    },
    
    /**
     * Flips the page
     * @param {Object} opts Flip options
     */
    flip: function(opts)
    {
        var body = $(document.body),
            inEl = opts.to,
            outEl = opts.from,
            direction = opts.direction,
            flipWise = {
                clockwise: ['flip-out-to-left', 'flip-in-from-left'],
                anticlockwise: ['flip-out-to-right', 'flip-in-from-right']
            },
            wise = flipWise[direction],
            reset = function(){
                inEl.off('webkitAnimationEnd');
                body.removeClass('viewport-flip');
                outEl.addClass('hidden');
                inEl.removeClass('flip');
                outEl.removeClass('flip');
                outEl.removeClass(wise[0]);
                inEl.removeClass(wise[1]);                
            };

            body.addClass('viewport-flip');
            inEl.removeClass('hidden');
            outEl.addClass('flip');
            inEl.addClass('flip');
            inEl.on('webkitAnimationEnd', reset);
            outEl.addClass(wise[0]);
            inEl.addClass(wise[1]);
    }
}
iShake.view = {
    init: function(name, el)
    {
        this.name = name;
        this.el = el;                        
    },
    
    /**
     * Initializes scrolling on android, iOS uses native scrolling via CSS
     */
    initScroll: function()
    {
        if ($.os.android)
        {
            var scrollableEl = $('.scroll', this.el);
            this.scroller = new iScroll(scrollableEl[0]);
            this.scroller.refresh();
        }
    },
    /**
     * Disposes scrolling
     */
    disposeScroll: function()
    {
        if ($.os.android)
        {
            this.scroller.destroy();
        }
    }
};
/**
 * Home view
 */
iShake.view.home = function(name, el)
{
    this.init(name, el);
    
    // Getting current list
    var currentId = iShake.repository.list.currentId();
    if (!currentId)
    {
        location.hash = '/lists';
        return;
    }
    
    this.watchId = 0;
    
    $('#phone').removeClass('animate');        
    this.resultNode = $('#result');        
    
    // Showing loading status
    app.setLoading(true);    
    $('section', el).removeClass('has-backside');
    
    // Display no connection warning after 5 seconds timeout
    this.timerId = setTimeout(function() {
        app.setLoading(false);
        app.showNoConnection(true);
    }, 5000);
    
    // Getting current list data (from local storage if possible)
    iShake.repository.list.get(currentId, this.initMotion, this);
}

iShake.view.home.prototype = {
    /**
     * Defines whether device is shaking
     * @type {boolean}
     */
    isShaking: false,
    
    /**
     * Current list
     */
    currentList_: null,
    
    /**
     * Sets current list
     */
    currentList: function(list)
    {
        if (list)
        {
            var completedIds = iShake.repository.user.completedItemIds(),
                items = list.items;

            // Removing completed items
            for (var i = items.length - 1; i >= 0; i--)
            {
                if (iShake.util.indexOf(completedIds, items[i].id) != -1)
                {
                    items.splice(i, 1);
                }
            }
            
            if (list.items.length == 0)                
            {
                iShake.ui.notify.alert('home.list-finished');
                iShake.repository.list.get(list.id, this.resetList, this, {
                    remote: true
                });
            }

            this.currentList_ = list;
        }
        
        
        return this.currentList_;
    },
    
    /**
     * Initializes motion events
     */
    initMotion: function(list)
    {
        // Setting current list and filtering completed items
        this.currentList(list);
        
        clearTimeout(this.timerId);
        
        // Displays ready to shake animation
        this.el.toggleClass('ready', true);
        
        app.setLoading(false);
        
        // Refreshing current list from server
        if (navigator.onLine)
        {
            iShake.repository.list.get(list.id, function(list) {
                this.currentList(list);                
            }, this, {remote: true, silent: true});
        }
        
        this.currentItem = amplify.store('currentitem') || null;
        
        var me = this;
        
        // Adding Motion listeners
        $(window).on('devicemotion', function(e) {            
            me.onDeviceMotion(e.accelerationIncludingGravity);
        });
        
        // If user comes from homeback view, display current item
        if (this.currentItem)
        {
            this.el.toggleClass('ready', false);
            this.setResult(this.currentItem);
            $('section', this.el).toggleClass('has-backside', 
                this.currentItem.hasBackside);    
            
            
            var completedIds = iShake.repository.user.completedItemIds(),
                alreadyAnswered = iShake.util.indexOf(completedIds, this.currentItem.id) != -1;
            $('.complete', this.el).toggleClass('completed', alreadyAnswered);
        }
        else
        {
            // Displaying shaking phone    
            $('#phone').addClass('animate');
            var msg = $.os.android ? app.getMsg('common.start') : app.getMsg('common.shake');
            $('#phone-text').html(msg);
            
            // Disabling shaking after 8 seconds
            setTimeout(function() {
                $('#phone').removeClass('animate');            
            }, 16000);
        }
                
        // Adding listeners
        var evt = $.os.version ? 'tap' : 'click';
        $('section', this.el).on(evt, function(e) {
            if (!e.target.href && !$(e.target).hasClass('menu-button'))
            {
                me.startShake();
            }            
        });
        
        // Disables vertical move of page while swipeLeft / swipeRight
        this.el.on('touchmove', function(e) {
            e.preventDefault();
        });
        
        $('.complete', this.el).on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            var ids = iShake.repository.user.completedItemIds(),
                target = $(e.target);
            
            if (target.hasClass('completed'))
            {
                var index = iShake.util.indexOf(ids, me.currentItem.id);
                
                if (index != -1)
                {
                    ids.splice(index, 1);
                }
            }
            else
            {
                ids.push(me.currentItem.id);                
            }
            
            iShake.repository.user.completedItemIds(ids);            
            
            var list = me.currentList();
            me.currentList(list);
            target.toggleClass('completed');
        });
        
        // Attaching swipe event listeners
        this.el.on('swipeLeft swipeRight', function(e) {
            e.preventDefault();            
            this.unload();
            
            if (me.currentItem && me.currentItem.hasBackside)
            {
                location.hash = '/homeback';
            }
            
        });
        
        // Android Webkit: Refresh layout
        me.el[0].style.webkitTransform = 'translate(0, 1)';        
        setTimeout(function() {
            me.el[0].style.webkitTransform = 'translate(0, 0)';
        }, 300);
    },
    
    /**
     * Device motion listener, verifies whether Device is shaking and starts
     * shaking animation
     */
    onDeviceMotion: function(acceleration)
    {
        if (!this.vector)
        {
            // Saving move vector
            this.vector = new iShake.model.Vector(acceleration);
            return;
        }
        
        var vector = this.vector,
            isShaking = (vector.isShaking(acceleration));
        
        if (isShaking == true)
        {
            this.startShake();         
        }

        vector.update(acceleration);       
    },
    
    /**
     * Returns random item from current list
     */
    random: function()
    {
        var index = Math.floor(Math.random() * this.currentList().items.length);
        return this.currentList().items[index];
    },
    
    resetList: function(list)
    {
        var completedIds = iShake.repository.user.completedItemIds();
        for (var i = 0; i < list.items.length; i++)
        {
            var index = iShake.util.indexOf(completedIds, list.items[i].id);
            completedIds.splice(index, 1);
        }
        
        iShake.repository.user.completedItemIds(completedIds);
        
        this.currentList(list);
    },
    
    /**
     * Displays text of specified item and centers it's position on the screen
     */
    setResult: function(item)
    {        
        this.resultNode.html(item.text);
        
        var top = (app.winHeight - this.resultNode[0].offsetHeight) / 2 - 40;
        this.resultNode.css({
            top: top + 'px'
        });
    },
    
    /**
     * Starts shaking animation and draws a random item
     */
    startShake: function()
    {
        var me = this;
        
        $('section', me.el).removeClass('has-backside');
        $('.complete', me.el).removeClass('completed');
        
        this.resultNode.addClass('shaking');
        this.el.toggleClass('ready', false);

        if (this.timeout)
        {
            clearTimeout(this.timeout);
        }

        // Stopping animation after specified amount of time
        this.timeout = setTimeout(function() {
            clearInterval(me.interval);
            me.interval = 0;
            me.resultNode.removeClass('shaking');
            
            me.currentItem = me.random();
            me.setResult(me.currentItem);
            
            amplify.store('currentitem', me.currentItem);
            
            me.resultNode.toggleClass('rotate-left', false);
            me.resultNode.toggleClass('rotate-right', false);   
            
            me.isShaking = false;
            
            $('section', me.el).toggleClass('has-backside', me.currentItem.hasBackside);                                    
        }, 2000);

        this.isShaking = true;   
        
        // Animating manually, in case device doesn't support css3 animations.
        if (!Modernizr.cssanimations)
        {
            me.resultNode.toggleClass('rotate-left', true);
        }
        
        // Displays random result
        if (!this.interval)
        {
            var intervalTime = Modernizr.cssanimations ? 300 : 80;
            this.interval = setInterval(function() {
                me.setResult(me.random());
                if (!Modernizr.cssanimations)
                {
                    me.resultNode.toggleClass('rotate-left');
                    me.resultNode.toggleClass('rotate-right');                    
                }
                
            }, intervalTime); 
        }        
    },
    
    /**
     * Disposes view
     */
    unload: function()
    {
        $('#phone').removeClass('animate');    
        $('section', this.el).off('tap');
        $('section', this.el).off('click');
        $('.complete', this.el).off('click');
        this.el.off('swipeLeft swipeRight touchmove');
        $(window).off('devicemotion');
        
    }
};

$.extend(iShake.view.home.prototype, iShake.view);
/**
 * Backside of flash card
 * @param {string} name Name of view
 * @param {Element} el View's element
 */
iShake.view.homeback = function(name, el)
{
    this.init(name, el);
    
    // Getting an item from localStorage
    var currentItem = amplify.store('currentitem');
    
    // Setting text
    var backsideText = $('#backside-text');
    backsideText.html(currentItem.backsideText.replace(/[\n]/g, '<br />'));
    
    // Centering position of text
    var winHeight = $(window).height() || app.winHeight;
    var top = (winHeight - backsideText[0].offsetHeight) / 2 - 40;
    backsideText.css({
        top: top + 'px'
    });
        
    var me = this;
    
    // Preventing vertical move of page on swipe events
    this.el.on('touchmove', function(e) {
        e.preventDefault();
    });
    
    // Switching page by swipeLeft / swipeRight events
    $('.scroll', this.el).on('click swipeRight swipeLeft', function(e) {
        me.unload();
        location.hash = '/home';
    });
}

iShake.view.homeback.prototype = {
    
    /**
     * Disposes view
     */
    unload: function() {
        $('section', this.el).off('touchmove swipeRight swipeLeft click');        
    }
};

$.extend(iShake.view.homeback.prototype, iShake.view);
/**
 * Item view
 * @param {string} name View's name
 * @param {Element} el View's element
 * @param {string} id Item's id
 */
iShake.view.item = function(name, el, id)
{
    this.init(name, el);
    
    this.form = new iShake.ui.Form($('form', el));            
    this.enableBackText(false);
    
    this.listRepo = iShake.repository.list;
    this.listRepo.item(id, this.initForm, this);    
}

iShake.view.item.prototype = {
    /**
     * Controls visibility of backtext
     *
     * @param {boolean} isEnabled Defines whether backside text form should be 
     *      visible
     */
    enableBackText: function(isEnabled)
    {
        $('[name=backside_text]').parent().toggleClass('hidden', !isEnabled);
    },
    
    /**
     * Initializes editor form
     *
     * @param {Object} item Initializes
     */
    initForm: function(item)
    {
        this.item = item;
        
        // Setting form data
        this.form.setData({
            'text': item.text,
            'has_backside': item.hasBackside,
            'backside_text': item.backsideText
        });
        
        var me = this;
        
        this.enableBackText(item.hasBackside);
        
        $('[name=has_backside]', this.el).on('change', function(e) {
            me.enableBackText(e.target.checked);
        });
        
        // Save button
        $('.header-button-right', this.el).on('click', function() {            
            me.item.name = me.form.val('name');
            me.item.hasBackside = me.form.val('has_backside');
            me.item.backsideText = me.form.val('backside_text');
            
            me.listRepo.updateItem(me.item, function(listData) {
                iShake.ui.notify.alert('item.item-saved-bd', null, 'item.item-saved-hd');                
            }, me);
        });
        
        // Delete button
        $('.red-button', this.el).on('click', function(e) {            
            iShake.ui.notify.confirm('item.confirm-delete-item-hd', function() {
                me.listRepo.removeItem(me.item, function() {
                    history.back();
                }, me);           
            }, 'item.confirm-delete-item-bd');
        });
    },
    
    /**
     * Disposes view
     */
    unload: function()
    {
        $('.red-button', this.el).off('click');
        this.form.dispose();
        $('.header-button-right', this.el).off('click');        
    }
};

$.extend(iShake.view.item.prototype, iShake.view);
/**
 * View with list items
 * 
 * @param {string} name
 * @param {Element} el
 * @param {string} id
 */
iShake.view.list = function(name, el, id)
{
    this.init(name, el);

    $('section', el).html('');    
    
    this.listRepo = iShake.repository.list;
    this.initData(id);
}

iShake.view.list.prototype = {
    /**
     * Initializes lists data
     * @param {integer} id
     */
    initData: function(id)
    {                
        this.listRepo.get(id, function(data) {
            if (!data)
            {
                iShake.ui.notify.alert('list-deleted');
                
                var listIds = iShake.repository.user.listIds(),
                    index = iShake.util.indexOf(listIds, id);
                
                if (index != -1)
                {
                    listIds.splice(index, 1);
                    iShake.repository.user.listIds(listIds)
                }
                
                location.hash = '#/lists';
                return;
            }
            
            var user = iShake.repository.user.current();
            var canEdit = user && user.username == data.username;
            
            $('.header-button-right', this.el).toggleClass('hidden', !canEdit);
            $('.header-button-right', this.el).attr('href', '#/listedit/' + id);
            
            this.listData = data;
            this.renderItems();            
        }, this);
    },
    onNewItem: function(name)
    {
        this.listRepo.addItem(this.listData.id, name, function(newItemData) {
            this.editor.reset();
            
            var li = document.createElement('li');
            li.innerHTML = '<a class="item-content" href="#/item/' + newItemData.id + '">' + newItemData.text + '</a><span class="disclosure-wrap"></span>';
            $(li).data('id', newItemData.id);

            var editorLi = $('li.new-item-li', this.el);
            editorLi.before(li);
        }, this);
        
    },
    renderItems: function()
    {
        var html = [],
            items = this.listData.items;
        
        iShake.util.sortByAlphabet(items, 'text');
        
        $('#view-list h1').html(this.listData.name);
        
        var user = app.user(),
            canEdit = user && user.username == this.listData.username,
            listName;
            
        
        $('section', this.el).html('<ul class="tableview"></ul>');
        
        for (var i = 0; i < items.length; i++)
        {
            listName = canEdit ? '<a class="item-content" href="#/item/' + 
                                    items[i].id + '">' + items[i].text + 
                                    '</a>' + 
                                  '<span class="disclosure-wrap">' + 
                                  '<a href="#/item/' + 
                                    items[i].id + '" class="disclosure icon-button"></a>' + 
                                  '</span>' :
                                    
                                 '<span class="item-content">' + items[i].text + '</span>';
            
            html.push([
                '<li data-id="' + items[i].id + '">',
                    listName,
                '</li>'
            ].join(''));
        }
        
        $('section ul', this.el).html(html.join(''));                
        
        if (canEdit)
        {
            this.editor = new iShake.ui.NewItemInput(
                app.getMsg('list.new-item'), 
                this.onNewItem,
                this
            );
            this.editor.render($('section ul', this.el));
        }
    },
    unload: function()
    {
         
    }
};

$.extend(iShake.view.list.prototype, iShake.view);

/**
 * List edit view
 * @param {string} name View's name
 * @param {Element} el View's element
 * @param {integer} id List's id
 * 
 */
iShake.view.listedit = function(name, el, id)
{
    this.init(name, el);    
    
    this.form = new iShake.ui.Form($('form', el));
    
    // Initializing dropdown with languages
    if (!iShake.view.listedit.langsInitialized)
    {
        var options = $('select[name=language]')[0].options,
            langName;
            
        for (var isoCode in iShake.lang.de.isoLangs)
        {
            langName = iShake.lang.de.isoLangs[isoCode].name;
            
            // todo: improve perfomance
            if (langName.split(',').length > 1)
            {
                langName = langName.split(',')[0];
            }
            else if(name.split(';').length > 0)
            {
                langName = langName.split(';')[0];
            }
            
            options[options.length] = new Option(langName, isoCode);
        }
        
        iShake.view.listedit.langsInitialized = true;
    }
    
    iShake.repository.list.get(id, this.initForm, this);
}

iShake.view.listedit.prototype = {
    
    /**
     * Initializes form
     * @param {Object} item Object with list data
     */
    initForm: function(item)
    {
        this.item = item;
        
        var me = this;
        
        this.form.setData({
            'name': item.name,
            'language': item.language,
            'category': item.category,
            'is_public': item.isPublic
        });
        
        // Save button
        $('.header-button-right', this.el).on('click', function() {
            
            me.item.name = me.form.val('name');            
            me.item.language = me.form.val('language');
            me.item.category = me.form.val('category');
            me.item.isPublic = me.form.val('is_public');
            
            iShake.repository.list.update(me.item, function(listData) {
                iShake.ui.notify.alert('listedit.list-saved-bd', null, 'listedit.list-saved-hd');                
            }, me);
        });
                
        // Delete button
        $('.red-button', this.el).on('click', function(e) {
            iShake.ui.notify.confirm('listedit.confirm-delete-list-hd', function() {
                iShake.repository.list.remove(me.item, function() {
                    history.go(-2);
                }, me);                
                   
            }, 'listedit.confirm-delete-list-bd');
        });
    },
    
    /**
     * Disposes view
     */
    unload: function()
    {
        this.form.dispose();
        
        $('.red-button', this.el).off('click');
        $('.header-button-right', this.el).off('click');        
    }
};

$.extend(iShake.view.listedit.prototype, iShake.view);
/**
 * Lists view
 * 
 * @param {string} name View's name
 * @param {Element} el View's element
 * @param {integer} id optionally id of list to be added to users lists
 * 
 */
iShake.view.lists = function(name, el, id)
{
    this.init(name, el);
    
    app.updateLoginStatus();
    
    // If id provided, adding list with specified ID to user's lists
    if (id)
    {
        var listIds = iShake.repository.user.listIds();
        
        if (iShake.util.indexOf(listIds, id) == -1)
        {
            listIds.push(id);
            iShake.repository.user.listIds(listIds);            
        }        
    }
    
    this.listRepo = iShake.repository.list;
    
    $('section', el).html('');    
    
    // Back button
    $('.header-button-left', this.el).toggleClass('hidden', !iShake.repository.list.currentId());
    
    // Showing loading animation
    app.setLoading(true);
    
    // Displaying no connection warning after specified timeout
    this.timerId = setTimeout(function() {
        app.setLoading(false);
        app.showNoConnection(true);
    }, 5000);
    
    // Getting user lists
    iShake.repository.user.lists(this.initLists, this);
    
//    iShake.repository.user.repair();
}

iShake.view.lists.prototype = {
    /**
     * Initializes currently selected list and renders listview with lists
     * 
     * @param {Array.<Object>} lists Array of lists to be rendered
     */
    initLists: function(lists)
    {
        app.setLoading(false);
        clearTimeout(this.timerId);
        
        if (!this.listRepo.currentId())
        {
            this.listRepo.currentId(lists[0].id);
        }
        
        this.renderLists(lists);        
    },
    
    /**
     * Processes click event, when user selects one of the lists
     * @param {Event} e
     */
    onClick: function(e)
    {
        var target = $(e.target);
        var id = target.data('id');
        
        if (!id)
        {
            return;
        }
        
        e.preventDefault();
        
        // Storing selected list id in localStorage
        this.listRepo.currentId(id);
        
        amplify.store('currentitem', '');
        
        // Adding selected class
        $('#view-lists .selected').removeClass('selected');
        target.parent().addClass('selected');
        
        // Redirecting to homepage
        setTimeout(function() {
            location.hash = '/';
        }, 500);
    },
    
    /**
     * Processes an event when user created a new list
     * 
     * @param {string} name
     */
    onNewList: function(name)
    {
        this.listRepo.create(name, function(newListData) {
            
            // Creating new list item
            var li = document.createElement('li');
            li.innerHTML = '<span data-id="' + newListData.id + '" class="item-content">' + newListData.name + '</span>' +
                '<a href="#/list/' + newListData.id + '" class="disclosure icon-button"></a>';

            // Inserting list item
            var editorLi = $('li.new-item', this.el);
            editorLi.before(li);
            
            
            this.editor.reset();
            
            // Redirecting to list editor
            location.hash = '#/list/' + newListData.id;
        }, this);
    },
    
    /**
     * Renders list items
     * @param {Array.<Object>} lists An array with list objects
     */
    renderLists: function(lists)
    {
        var html = [],
            me = this;
        
        var selectedId = this.listRepo.currentId();
        
        // Checking wheter user has any lists
        if (lists.length == 0)
        {
            $('section', this.el).html(app.getMsg('lists.no-lists'));
        }
        else
        {
            $('section', this.el).html('<ul class="tableview"></ul>');
        }
        
        iShake.util.sortByAlphabet(lists, 'name');
        
        /**
         * Defines whether list is prefetched in localStorage
         * @type {boolean}
         */
        var hasList = false;
        
        // Rendering items
        for (var i = 0; i < lists.length; i++)
        {
            hasList = !!iShake.repository.list.lists[lists[i].id].items;
            
            html.push([
                '<li class="',
                ((lists[i].id == selectedId) ? ' selected' : ''),
                (hasList ? '' : ' online')
                ,'">',
                    '<span data-id="' + lists[i].id + '" class="item-content">' + lists[i].name + '</span>',
                    '<span class="disclosure-wrap"><a href="#/list/' + lists[i].id + '" class="disclosure icon-button online"></a></span>',
                '</li>'
            ].join(''));
        }
        
        $('section ul', this.el).html(html.join(''));
        
        // Adding event listeners
        $('.item-content', this.el).on('click', function(e) {
            me.onClick(e);
        });
        
        $('a', this.el).on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            location.hash = e.target.hash;
        });
        
        // If user is registered, rendering inline editor
        var user = app.user();
        if (user && user.registered)
        {
            this.editor = new iShake.ui.NewItemInput(
                app.getMsg('lists.new-list'),
                this.onNewList,
                this
            );
                
            this.editor.render($('section ul', this.el));                                
        }        
        
        this.initScroll();
    },
    unload: function()
    {
        this.disposeScroll();
    }
};

$.extend(iShake.view.lists.prototype, iShake.view);
/**
 * Login view
 *
 * @param {string} name View's name
 * @param {Element} el View's element
 */
iShake.view.login = function(name, el)
{
    this.init(name, el);
    
    // Initializing login form
    this.form = new iShake.ui.Form(
        $('form', el), 
        '/user/login/', 
        function(data) {
            iShake.repository.user.current(data.user);            
            iShake.repository.list.add(data.lists);
            app.updateLoginStatus();
            
            location.hash = '/';
        }, this);
    
    var me = this;
    
    // Save button
    $('.header-button-right', el).on('click', function() {
        // Sending data to server
        me.form.submit();
    });
    
    // Facebook login event
    function onFbLogin(response)
    {
        if (response.status == 'connected')
        {
            location.hash = '/lists';                
            iShake.repository.user.setFacebook();
        }
        else if (response.status == 'unknown')
        {
            location.hash = '/lists';
            iShake.repository.user.setFacebook();
        }
    }
    
    // Facebook login button
    $('.facebook-login', this.el).on('click', function() {
        FB.login(onFbLogin);
    });
}

iShake.view.login.prototype = {
    /**
     * Disposes view
     */
    unload: function()
    {
        $('.header-button-right', this.el).off('click');
        this.form.dispose();        
    }
};

$.extend(iShake.view.login.prototype, iShake.view);
/**
 * Online view
 * @param {string} name View's name
 * @param {Element} el View's element
 */
iShake.view.online = function(name, el)
{
    this.init(name, el);
    
    $('section', el).html('');  
    
    this.listRepo = iShake.repository.list;
    
    this.listRepo.all(function(lists) {
        this.data = lists;
        this.renderItems();
    }, this);
    
    
}

iShake.view.online.prototype = {
    /**
     * Processes click event
     * @param {Event} e Browser click event
     */
    onClick: function(e)
    {
//        e.preventDefault();
//        e.stopPropagation();
        
        var target = $(e.target), 
            index,
            userListIds = iShake.repository.user.listIds();
        
        if (target.hasClass('plus'))
        {
            // Adding list to my lists
            target.removeClass('plus');
            target.addClass('minus');
                        
            userListIds.push(target.data('id'));
            
            iShake.repository.user.listIds(userListIds);            
        }
        else if (target.hasClass('minus'))
        {
            target.addClass('plus');
            target.removeClass('minus');
            
            var id = target.data('id');
            index = $.inArray(id, userListIds);            
            userListIds.splice(index, 1);
            
            iShake.repository.user.listIds(userListIds);              
        }
    },
    /**
     * Renders list items
     */
    renderItems: function()
    {
        var html = [],
            items = this.data, 
            me = this,
            userListIds = iShake.repository.user.listIds();
        
        $('section', this.el).html('<ul class="tableview"></ul>');
        
        for (var i = 0; i < items.length; i++)
        {
            var cls = iShake.util.indexOf(userListIds, items[i].id) != -1 ? 'minus' : 'plus';
            html.push([
                '<li>',
                    '<a href="#/list/' + items[i].id + '" data-id="' + items[i].id + '" class="item-content">' + items[i].name + '</a>',
                    '<span class="disclosure-wrap"><span class="disclosure icon-button ' + cls + '" data-id="' + items[i].id + '"></span></span>',
                '</li>'
            ].join(''));
        }
        
        $('section ul', this.el).html(html.join(''));
        $('section li', this.el).on('click', function(e) {
            me.onClick(e);
        });
        
        this.initScroll();
    },
    unload: function()
    {
        this.disposeScroll();
    }
};

$.extend(iShake.view.online.prototype, iShake.view);
/**
 * Registration view
 * 
 * @param {string} name View's name
 * @param {Element} el View's element
 */
iShake.view.register = function(name, el) {
    this.init(name, el);
    
    // Initializing form
    this.form = new iShake.ui.Form($('form', el), 
        '/user/register/', 
        function(data) {
            iShake.repository.user.current(data.user);            
            iShake.repository.list.add(data.lists);
            app.updateLoginStatus();
            location.hash = '/';
        }, this);
    
    var me = this;
    
    // In case user already logged in with facebook, redirecting back to home
    setTimeout(function() {
        FB.getLoginStatus(function(response) {
            location.hash = '/';
        });
    }, 3000);
        
    // Registers save button
    $('.header-button-right', el).on('click', function() {
        
        // Sending data to server
        me.form.submit();
    });
    
    // Initializing facebook login button
    $('.facebook-login', this.el).on('click', function() {
        FB.login(function(response) { 
            if (response.status == 'connected')
            {
                location.hash = '/lists';                
                iShake.repository.user.setFacebook();
            }
        });
    });
}

iShake.view.register.prototype = {
    /**
     * Disposes view
     */
    unload: function() {
        $('.header-button-right', this.el).off('click');
        this.form.dispose();
    }
};

$.extend(iShake.view.register.prototype, iShake.view);
