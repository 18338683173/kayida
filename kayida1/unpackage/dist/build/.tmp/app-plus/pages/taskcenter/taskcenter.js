(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/taskcenter/taskcenter"],{"0a1f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62"),u=r(n("4dc3"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){n.e("components/uni-list/uni-list").then(function(){return resolve(n("e7b9"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/uni-list-item/uni-list-item").then(function(){return resolve(n("0488"))}.bind(null,n)).catch(n.oe)},l={components:{uniList:c,uniListItem:f},computed:s({},(0,i.mapState)(["userInfo"])),data:function(){return{items:["任务大厅","提交任务","任务记录"],current:0,task_list:"",task_explain:"",submit_task:"",none:0}},onLoad:function(){var t=this,e={user_id:this.userInfo.user_id,token:this.userInfo.token,sign:(0,u.default)(this.userInfo.user_id+this.userInfo.token)};this.request.httpRequest("api/task/index",e,"GET").then((function(e){t.task_list=e.data.retval})),this.request.httpRequest("api/task/tips",e,"GET").then((function(e){t.task_explain=e.data.retval.content}));var n={type:1,user_id:this.userInfo.user_id,token:this.userInfo.token,sign:(0,u.default)(this.userInfo.user_id+this.userInfo.token)};this.request.httpRequest("api/taskOrder/index",n,"GET").then((function(e){t.submit_task=e.data.retval}))},methods:{getTask:function(e,n){t.navigateTo({url:"../gettask/gettask?id="+e+"&name="+n})},toUploading:function(e,n){0===n&&t.navigateTo({url:"../uploading/uploading?id="+e})},toLobby:function(){0!==this.current&&(this.current=0)},toSubmit:function(){var t=this;1!==this.current&&(this.current=1);var e={type:1,user_id:this.userInfo.user_id,token:this.userInfo.token,sign:(0,u.default)(this.userInfo.user_id+this.userInfo.token)};this.request.httpRequest("api/taskOrder/index",e,"GET").then((function(e){t.submit_task=e.data.retval,t.submit_task.length<1?t.none=1:t.none=0}))},toRecord:function(){2!==this.current&&(this.current=2)},toAudit:function(e){t.navigateTo({url:"../toaudit/toaudit?type="+e})}}};e.default=l}).call(this,n("6e42")["default"])},"164e":function(t,e,n){"use strict";n.r(e);var i=n("0a1f"),u=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=u.a},"2bc5":function(t,e,n){"use strict";(function(t){n("cb51"),n("921b");i(n("66fd"));var e=i(n("7640"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},7640:function(t,e,n){"use strict";n.r(e);var i=n("b656"),u=n("164e");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("a7bc");var o,s=n("f0c5"),a=Object(s["a"])(u["default"],i["b"],i["c"],!1,null,"47a646b8",null,!1,i["a"],o);e["default"]=a.exports},a7bc:function(t,e,n){"use strict";var i=n("bfce"),u=n.n(i);u.a},b656:function(t,e,n){"use strict";var i={"uni-list":function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"e7b9"))},"uni-list-item":function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"0488"))}},u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},bfce:function(t,e,n){}},[["2bc5","common/runtime","common/vendor"]]]);