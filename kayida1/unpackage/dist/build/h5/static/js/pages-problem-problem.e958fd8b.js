(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-problem-problem"],{"02a9":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".con[data-v-d3ef1d5e]{background:#f7f7f7}.con .problem-main[data-v-d3ef1d5e]{padding:%?10?% %?40?%}.con .problem-main .problem-card[data-v-d3ef1d5e]{background:#fff;margin-top:%?20?%;height:%?66?%;line-height:%?66?%;padding:0 %?20?%;font-size:%?30?%;color:#00abfa;font-weight:700;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;border-radius:%?120?%;box-shadow:%?-8?% 0 %?5?% #b1b2b2}.con .problem-main .problem-card .problem-card-text[data-v-d3ef1d5e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.con .problem-main .problem-card .ask[data-v-d3ef1d5e]{width:%?48?%;height:%?48?%;margin-top:%?10?%;margin-left:%?10?%}.con .problem-main .problem-card uni-view[data-v-d3ef1d5e]{margin-left:%?10?%}.con .problem-main .problem-card .question[data-v-d3ef1d5e]{width:%?28?%;height:%?44?%;margin-left:%?10?%;margin-top:%?10?%}",""])},4363:function(t,e,a){"use strict";a.r(e);var n=a("f5a2"),i=a("45f7");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("861d");var o,d=a("f0c5"),s=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"d3ef1d5e",null,!1,n["a"],o);e["default"]=s.exports},"45f7":function(t,e,a){"use strict";a.r(e);var n=a("a429"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},"861d":function(t,e,a){"use strict";var n=a("8a0a"),i=a.n(n);i.a},"8a0a":function(t,e,a){var n=a("02a9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("a1e68aa6",n,!0,{sourceMap:!1,shadowMode:!1})},a429:function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("cebc")),r=a("2f62"),o=(n(a("4dc3")),{computed:(0,i.default)({},(0,r.mapState)(["userInfo"])),data:function(){return{problem_list:""}},methods:{toProDetail:function(t){uni.navigateTo({url:"../problemdetail/problemdetail?index="+t})}},onLoad:function(){var t=this;this.request.httpRequest("api/problem/index","GET").then(function(e){t.problem_list=e.data.retval})}});e.default=o},f5a2:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"con"},[a("v-uni-view",{staticClass:"problem-main top"},t._l(t.problem_list,function(e,n){return a("v-uni-view",{key:n,staticClass:"problem-card flex",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProDetail(n)}}},[a("v-uni-image",{staticClass:"ask",attrs:{src:"../../static/user/ask.png",mode:""}}),a("v-uni-view",{staticClass:"problem-card-text"},[t._v(t._s(e.title))]),a("v-uni-image",{staticClass:"question",attrs:{src:"../../static/user/question_mark.png",mode:""}})],1)}),1)],1)},r=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return r}),a.d(e,"a",function(){return n})}}]);