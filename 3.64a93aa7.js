(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return h}));var n=r(0),o=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=o.a.createContext({}),s=function(t){var e=o.a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=s(t.components);return o.a.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},y=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,a=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(r),y=n,h=p["".concat(a,".").concat(y)]||p[y]||f[y]||i;return r?o.a.createElement(h,c(c({ref:e},u),{},{components:r})):o.a.createElement(h,c({ref:e},u))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,a=new Array(i);a[0]=y;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},161:function(t,e,r){"use strict";const n=(t,{target:e=document.body}={})=>{const r=document.createElement("textarea"),n=document.activeElement;r.value=t,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),e.append(r),r.select(),r.selectionStart=0,r.selectionEnd=t.length;let a=!1;try{a=document.execCommand("copy")}catch(c){}return r.remove(),i&&(o.removeAllRanges(),o.addRange(i)),n&&n.focus(),a};t.exports=n,t.exports.default=n},162:function(t,e){function r(t){let e,r=[];for(let n of t.split(",").map((t=>t.trim())))if(/^-?\d+$/.test(n))r.push(parseInt(n,10));else if(e=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[t,n,o,i]=e;if(n&&i){n=parseInt(n),i=parseInt(i);const t=n<i?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(i+=t);for(let e=n;e!==i;e+=t)r.push(e)}}return r}e.default=r,t.exports=r},163:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,l,"next",t)}function l(t){n(a,o,i,c,l,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},164:function(t,e,r){t.exports=r(223)},167:function(t,e,r){"use strict";function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}r.d(e,"a",(function(){return c}));var o=r(23);function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,e,r){return a=i()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&Object(o.a)(i,r.prototype),i},a.apply(null,arguments)}function c(t){var e="function"==typeof Map?new Map:void 0;return c=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return a(t,arguments,n(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Object(o.a)(i,t)},c(t)}},168:function(t,e,r){"use strict";var n=r(3),o=r(0),i=r.n(o),a=r(145),c=r(169),l=r(7),u=r(144),s=r(143),p=(r(76),r(77)),f=r.n(p),y=["id"],h=function(t){return function(e){var r,n=e.id,o=Object(l.a)(e,y),a=Object(s.useThemeConfig)().navbar.hideOnScroll;return n?i.a.createElement(t,o,i.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(u.a)("anchor",(r={},r[f.a.enhancedAnchor]=!a,r)),id:n}),o.children,i.a.createElement("a",{className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):i.a.createElement(t,o)}},d=r(78),g=r.n(d),v={code:function(t){var e=t.children;return"string"==typeof e?e.includes("\n")?i.a.createElement(c.a,t):i.a.createElement("code",t):e},a:function(t){return i.a.createElement(a.a,t)},pre:function(t){return i.a.createElement("div",Object(n.a)({className:g.a.mdxCodeBlock},t))},h1:h("h1"),h2:h("h2"),h3:h("h3"),h4:h("h4"),h5:h("h5"),h6:h("h6")};e.a=v},170:function(t,e,r){"use strict";var n={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},o=r(173),i=r(143);e.a=function(){var t=Object(i.useThemeConfig)().prism,e=Object(o.a)().isDarkTheme,r=t.theme||n,a=t.darkTheme||r;return e?a:r}},171:function(t,e,r){"use strict";r.d(e,"b",(function(){return a}));var n=r(22),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i=r(0),a={Prism:n.a,theme:o};function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}var u=/\r\n|\r|\n/,s=function(t){0===t.length?t.push({types:["plain"],content:"\n",empty:!0}):1===t.length&&""===t[0].content&&(t[0].content="\n",t[0].empty=!0)},p=function(t,e){var r=t.length;return r>0&&t[r-1]===e?t:t.concat(e)},f=function(t,e){var r=t.plain,n=Object.create(null),o=t.styles.reduce((function(t,r){var n=r.languages,o=r.style;return n&&!n.includes(e)||r.types.forEach((function(e){var r=l({},t[e],o);t[e]=r})),t}),n);return o.root=r,o.plain=l({},r,{backgroundColor:null}),o};function y(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(r[n]=t[n]);return r}var h=function(t){function e(){for(var e=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];t.apply(this,r),c(this,"getThemeDict",(function(t){if(void 0!==e.themeDict&&t.theme===e.prevTheme&&t.language===e.prevLanguage)return e.themeDict;e.prevTheme=t.theme,e.prevLanguage=t.language;var r=t.theme?f(t.theme,t.language):void 0;return e.themeDict=r})),c(this,"getLineProps",(function(t){var r=t.key,n=t.className,o=t.style,i=l({},y(t,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=e.getThemeDict(e.props);return void 0!==a&&(i.style=a.plain),void 0!==o&&(i.style=void 0!==i.style?l({},i.style,o):o),void 0!==r&&(i.key=r),n&&(i.className+=" "+n),i})),c(this,"getStyleForToken",(function(t){var r=t.types,n=t.empty,o=r.length,i=e.getThemeDict(e.props);if(void 0!==i){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return i[r[0]];var a=n?{display:"inline-block"}:{},c=r.map((function(t){return i[t]}));return Object.assign.apply(Object,[a].concat(c))}})),c(this,"getTokenProps",(function(t){var r=t.key,n=t.className,o=t.style,i=t.token,a=l({},y(t,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:e.getStyleForToken(i),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?l({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),c(this,"tokenize",(function(t,e,r,n){var o={code:e,grammar:r,language:n,tokens:[]};t.hooks.run("before-tokenize",o);var i=o.tokens=t.tokenize(o.code,o.grammar,o.language);return t.hooks.run("after-tokenize",o),i}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(){var t=this.props,e=t.Prism,r=t.language,n=t.code,o=t.children,i=this.getThemeDict(this.props),a=e.languages[r];return o({tokens:function(t){for(var e=[[]],r=[t],n=[0],o=[t.length],i=0,a=0,c=[],l=[c];a>-1;){for(;(i=n[a]++)<o[a];){var f=void 0,y=e[a],h=r[a][i];if("string"==typeof h?(y=a>0?y:["plain"],f=h):(y=p(y,h.type),h.alias&&(y=p(y,h.alias)),f=h.content),"string"==typeof f){var d=f.split(u),g=d.length;c.push({types:y,content:d[0]});for(var v=1;v<g;v++)s(c),l.push(c=[]),c.push({types:y,content:d[v]})}else a++,e.push(y),r.push(f),n.push(0),o.push(f.length)}a--,e.pop(),r.pop(),n.pop(),o.pop()}return s(c),l}(void 0!==a?this.tokenize(e,n,a,r):[n]),className:"prism-code language-"+r,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},e}(i.Component);e.a=h},223:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n=p;return function(o,i){if(n===y)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=y;var l=s(t,e,r);if("normal"===l.type){if(n=r.done?h:f,l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=h,r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",y="executing",h="completed",d={};function g(){}function v(){}function m(){}var b={};l(b,i,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(N([])));O&&O!==r&&n.call(O,i)&&(b=O);var k=m.prototype=g.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var l=s(t[o],t,i);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(p).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:_}}function _(){return{value:e,done:!0}}return v.prototype=m,l(k,"constructor",m),l(m,"constructor",v),v.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(j.prototype),l(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(k),l(k,c,"Generator"),l(k,i,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);