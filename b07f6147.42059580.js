(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(136)),i=["components"],c={},p={unversionedId:"content/object",id:"content/object",isDocsHomePage:!1,title:"object",description:"Synth's object generator type mirrors JSON's objects. They generate key/value pairs whose keys are strings and values",source:"@site/docs/content/object.md",slug:"/content/object",permalink:"/synth/content/object",editUrl:"https://github.com/getsynth/synth/edit/master/docs/docs/content/object.md",version:"current",sidebar:"docsSidebar",previous:{title:"string",permalink:"/synth/content/string"},next:{title:"array",permalink:"/synth/content/array"}},l=[],b={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Synth's ",Object(o.b)("inlineCode",{parentName:"p"},"object")," generator type mirrors JSON's objects. They generate key/value pairs whose keys are strings and values\nare any sampled from any other generator type. With an ",Object(o.b)("inlineCode",{parentName:"p"},"object"),", you can compose simpler generators into compound\ngenerators that reflect complex data structures."),Object(o.b)("p",null,"The keys of the JSON object to generate are inlined in the ",Object(o.b)("inlineCode",{parentName:"p"},"object")," keys (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},'"identifier"')," and ",Object(o.b)("inlineCode",{parentName:"p"},'"name"')," below)."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "object",\n  "identifier": {\n    "type": "number",\n    "subtype": "u64",\n    "range": {\n      "low": 0,\n      "high": 100,\n      "step": 1\n    }\n  },\n  "name": {\n    "type": "string",\n    "faker": {\n      "generator": "name"\n    }\n  }\n}\n')),Object(o.b)("p",null,"Values of objects can be any of Synth's generator type (including an other object). In the example above, ",Object(o.b)("inlineCode",{parentName:"p"},'"identifier"'),"\nhas value a ",Object(o.b)("a",{parentName:"p",href:"/content/number"},Object(o.b)("inlineCode",{parentName:"a"},"number"))," type and ",Object(o.b)("inlineCode",{parentName:"p"},'"name"')," has value a ",Object(o.b)("a",{parentName:"p",href:"/content/string"},Object(o.b)("inlineCode",{parentName:"a"},"string"))," type."),Object(o.b)("p",null,"Values of objects can be made nullable by specifying the ",Object(o.b)("inlineCode",{parentName:"p"},'"optional": true')," attribute."),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "object",\n  "email": {\n    "optional": true,\n    "type": "string",\n    "faker": {\n      "generator": "ascii_email"\n    }\n  }\n}\n')),Object(o.b)("p",null,"By default, optional values that are generated as ",Object(o.b)("inlineCode",{parentName:"p"},"null")," will produce a key-value pair of the form ",Object(o.b)("inlineCode",{parentName:"p"},"key: null"),". This behavior can be controlled by specifying the ",Object(o.b)("inlineCode",{parentName:"p"},"skip_when_null: true")," attribute on the object generator."),Object(o.b)("h4",{id:"example-2"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "object",\n  "skip_when_null": true,\n  "email": {\n    "optional": true,\n    "type": "string",\n    "faker": {\n      "generator": "ascii_email"\n    }\n  }\n}\n')),Object(o.b)("p",null,"If a field should have the name ",Object(o.b)("inlineCode",{parentName:"p"},'"type"'),", this would clash with the predefined object attribute of the same name.\nThis can be worked around by changing the name to ",Object(o.b)("inlineCode",{parentName:"p"},'"type_"'),". The additional underscore will be removed in the\ngenerated values."),Object(o.b)("h4",{id:"example-3"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "object",\n  "type_": {\n    "type": "string",\n    "categorical": {\n      "user": 90,\n      "contributor": 8,\n      "admin": 2\n    }\n  }\n}\n')))}s.isMDXComponent=!0},136:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(t),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return t?a.a.createElement(d,c(c({ref:n},l),{},{components:t})):a.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);