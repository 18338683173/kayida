(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-platformhandbook-platformhandbook"],{"22bc":function(t,n,e){"use strict";var u,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"con"},[e("v-uni-web-view",{attrs:{src:t.url}})],1)},r=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return u})},5890:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".con[data-v-38139dee]{background:#f7f7f7}",""])},8848:function(t,n,e){"use strict";var u=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("cebc")),r=e("2f62"),o=(u(e("4dc3")),{computed:(0,a.default)({},(0,r.mapState)(["userInfo"])),data:function(){return{url:"",index:""}},methods:{},onLoad:function(t){var n=this;this.index=t.index,this.request.httpRequest("api/notebook/index","GET").then(function(t){n.url=t.data.retval[n.index].url})},onReady:function(){}});n.default=o},"8d1c":function(t,n,e){var u=e("5890");"string"===typeof u&&(u=[[t.i,u,""]]),u.locals&&(t.exports=u.locals);var a=e("4f06").default;a("1378ef88",u,!0,{sourceMap:!1,shadowMode:!1})},dce5:function(t,n,e){"use strict";e.r(n);var u=e("8848"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a},ea0b:function(t,n,e){"use strict";e.r(n);var u=e("22bc"),a=e("dce5");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("f001");var o,c=e("f0c5"),i=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,"38139dee",null,!1,u["a"],o);n["default"]=i.exports},f001:function(t,n,e){"use strict";var u=e("8d1c"),a=e.n(u);a.a}}]);