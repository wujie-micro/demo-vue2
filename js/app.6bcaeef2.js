(function(e){function t(t){for(var r,a,l=t[0],c=t[1],u=t[2],s=0,d=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function l(e){return c.p+"js/"+({Page1:"Page1",Page2:"Page2",Page3:"Page3"}[e]||e)+"."+{Page1:"4d2434da",Page2:"6e00269e",Page3:"5e7c9a00"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={Page1:1,Page3:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({Page1:"Page1",Page2:"Page2",Page3:"Page3"}[e]||e)+"."+{Page1:"21a941b0",Page2:"31d6cfe0",Page3:"c67d5e46"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var u=i[l],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===o))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){u=d[l],s=u.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=l(e);var d=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/demo-vue2/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/home"}},[e._v("首页")]),e._v(" | "),n("router-link",{attrs:{to:"/dialog"}},[e._v("弹窗")]),e._v(" | "),n("router-link",{attrs:{to:"/location"}},[e._v("路由")]),e._v(" | "),n("router-link",{attrs:{to:"/communication"}},[e._v("通信")])],1),n("router-view")],1)},o=[],i=n("2877"),l={},c=Object(i["a"])(l,a,o,!1,null,null,null),u=c.exports,s=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("HelloWorld",{attrs:{msg:"Vue2示例"}}),n("div",{staticClass:"content",staticStyle:{"text-align":"center"}},[n("p",[e._v(" 当前vue版本 "),n("el-tag",{staticStyle:{"vertical-align":"text-top"},attrs:{size:"small"}},[e._v("2.6.11")])],1),n("p",[e._v(" 当前element版本 "),n("el-tag",{staticStyle:{"vertical-align":"text-top"},attrs:{size:"small"}},[e._v("2.15.6")])],1),n("p",[e._v(" 当前ant-design-vue版本 "),n("el-tag",{staticStyle:{"vertical-align":"text-top"},attrs:{size:"small"}},[e._v("1.7.8")])],1),n("p",[n("el-button",{on:{click:function(){return e.open("https://git.woa.com/wujie/wujie/tree/master/examples/vue2")}}},[e._v("仓库地址")])],1)])],1)},f=[],p=n("fdab"),g={data(){return{open:window.open}},components:{HelloWorld:p["a"]}},v=g,m=(n("cccb"),Object(i["a"])(v,d,f,!1,null,null,null)),h=m.exports;r["default"].use(s["a"]);const b=[{path:"/",redirect:"/home"},{path:"/home",component:h},{path:"/dialog",name:"dialog",component:()=>n.e("Page1").then(n.bind(null,"a20a"))},{path:"/communication",name:"communication",component:()=>n.e("Page2").then(n.bind(null,"20fd"))},{path:"/location",name:"location",component:()=>n.e("Page3").then(n.bind(null,"8e3a"))}],_=new s["a"]({routes:b});var P=_,y=n("8bbc"),w=n.n(y),E=n("eedf"),O=n.n(E),j=n("4e4b"),x=n.n(j),S=n("e772"),k=n.n(S),C=n("6ac9"),T=n.n(C),N=n("df33"),U=n.n(N),W=n("5efb"),A=n("9839"),M=n("ed3b"),$=n("681b");n("450d"),n("cbb5"),n("1951"),n("1f1a"),n("6611"),n("06f1"),n("a7cc"),n("b550"),n("2040"),n("5e84"),n("45ec"),n("03ca"),n("a766");if([w.a,O.a,x.a,k.a,T.a,U.a].forEach(e=>r["default"].use(e)),[W["a"],A["a"],M["a"],$["a"]].forEach(e=>r["default"].use(e)),r["default"].config.productionTip=!1,window.__POWERED_BY_WUJIE__){let e;window.__WUJIE_MOUNT=()=>{e=new r["default"]({router:P,render:e=>e(u)}).$mount("#app")},window.__WUJIE_UNMOUNT=()=>{e.$destroy()}}else new r["default"]({router:P,render:e=>e(u)}).$mount("#app")},"5ced":function(e,t,n){},"6e1a":function(e,t,n){},a766:function(e,t,n){},cca5:function(e,t,n){"use strict";n("6e1a")},cccb:function(e,t,n){"use strict";n("5ced")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},fdab:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("h2",{staticClass:"vue-title"},[e._v(e._s(e.msg))])])},a=[],o={name:"HelloWorld",props:{msg:String}},i=o,l=(n("cca5"),n("2877")),c=Object(l["a"])(i,r,a,!1,null,"e3bbe6f8",null);t["a"]=c.exports}});
//# sourceMappingURL=app.6bcaeef2.js.map