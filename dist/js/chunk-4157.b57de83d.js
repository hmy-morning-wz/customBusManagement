(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4157","chunk-9015"],{"1b9b":function(t,e,n){"use strict";var r=n("b346"),i=n.n(r);i.a},3040:function(t,e,n){"use strict";function r(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function a(t,e){try{var n=o[t](e),a=n.value}catch(t){return void i(t)}n.done?r(a):Promise.resolve(a).then(s,l)}function s(t){a("next",t)}function l(t){a("throw",t)}s()})}}n.d(e,"a",function(){return r})},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c="object"===typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{u=e.regeneratorRuntime=c?t.exports:{},u.wrap=w;var p="suspendedStart",d="suspendedYield",h="executing",f="completed",g={},m={};m[a]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(P([])));y&&y!==r&&i.call(y,a)&&(m=y);var b=k.prototype=x.prototype=Object.create(m);L.prototype=b.constructor=k,k.constructor=L,k[l]=L.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[s]=function(){return this},u.AsyncIterator=O,u.async=function(t,e,n,r){var i=new O(w(t,e,n,r));return u.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(b),b[l]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=P,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function w(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),a=new z(r||[]);return o._invoke=j(t,n,a),o}function _(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function x(){}function L(){}function k(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){function e(n,r,o,a){var s=_(t[n],t,r);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"===typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(c).then(function(t){l.value=t,o(l)},a)}a(s.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function j(t,e,n){var r=p;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw o;return V()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=C(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var l=_(t,e,n);if("normal"===l.type){if(r=n.done?f:d,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=f,n.method="throw",n.arg=l.arg)}}}function C(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=_(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:V}}function V(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},b346:function(t,e,n){},ce52:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container pull-auto"},[n("div",{staticClass:"map-box"},[n("el-amap",{ref:"map",staticClass:"amap",attrs:{vid:"amap",center:t.center,"map-manager":t.amapManager,zoom:t.zoom,plugin:t.plugin}},[t._l(t.polyline,function(t,e){return n("el-amap-polyline",{key:e,attrs:{path:t.path,strokeColor:t.strokeColor,strokeStyle:t.strokeStyle,events:t.events,mouseover:t.mouseover}})}),t._l(t.markers,function(t,e){return n("el-amap-marker",{key:e,attrs:{position:t.position,icon:t.icon,title:t.title,offset:t.offset,events:t.events,visible:t.visible,draggable:t.draggable,vid:e}})}),n("el-amap-info-window",{attrs:{position:t.currentWindow.position,content:t.currentWindow.content,visible:t.currentWindow.visible}})],2),n("div",{staticClass:"toolbar"},[t.loaded?n("span",[t._v("\n        location: lng = "+t._s(t.lng)+" lat = "+t._s(t.lat)+"\n      ")]):n("span",[t._v("正在定位")])])],1),n("basic-container",[n("avue-crud",{ref:"crud",attrs:{page:t.page,data:t.tableData,"table-loading":t.tableLoading,option:t.tableOption},on:{"current-change":t.currentChange,"refresh-change":t.refreshChange,"size-change":t.sizeChange,"row-update":t.handleUpdate,"row-save":t.handleSave,"row-del":t.rowDel},scopedSlots:t._u([{key:"menu",fn:function(e){return[t.permissions.tcapp_custbussample_edit?n("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small",plain:""},on:{click:function(n){t.handleEdit(e.row,e.index)}}},[t._v("编辑")]):t._e(),t.permissions.tcapp_custbussample_del?n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small",plain:""},on:{click:function(n){t.handleDel(e.row,e.index)}}},[t._v("删除")]):t._e()]}}])},[n("template",{slot:"menuLeft"},[t.permissions.tcapp_custbussample_add?n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.handleAdd}},[t._v("新 增")]):t._e(),n("br"),n("br")],1)],2)],1)],1)},i=[],a=(n("f751"),n("ac6a"),n("c93e")),s=(n("96cf"),n("3040")),l=n("b5c6");function c(t){return Object(l["a"])({url:"/custombus/webapi/custbus/sample/list?city_code=610300",method:"get",params:t})}function u(t){return Object(l["a"])({url:"/tcapp/custbussample/",method:"post",data:t})}function p(t){return Object(l["a"])({url:"/tcapp/custbussample/"+t,method:"delete"})}function d(t){return Object(l["a"])({url:"/custombus/webapi/custbus/sample/".concat(t.id,"/").concat(t.state),method:"put",data:t})}var h={border:!0,index:!0,stripe:!0,menuAlign:"center",align:"center",editBtn:!0,delBtn:!1,addBtn:!1,height:600,dic:[],column:[{label:"出发站点名称",prop:"start_name",align:"center",editVisdiplay:!1},{label:"详细地址",prop:"start_des",align:"center",editVisdiplay:!1},{label:"始发地经度",prop:"start_lon",align:"center",editVisdiplay:!1},{label:"始发地维度",prop:"start_lat",align:"center",editVisdiplay:!1},{label:"到达站点名称",prop:"end_name",align:"center",editVisdiplay:!1},{label:"详细地址",prop:"end_des",align:"center",editVisdiplay:!1},{label:"到达站点经度",prop:"end_lon",align:"center",editVisdiplay:!1},{label:"到达站点纬度",prop:"end_lat",align:"center",editVisdiplay:!1},{label:"出发时间最早",prop:"go_time_start",align:"center",editVisdiplay:!1},{label:"出发时间最晚",prop:"go_time_end",align:"center",editVisdiplay:!1},{label:"回来时间最早",prop:"back_time_start",align:"center",editVisdiplay:!1},{label:"回来时间最晚",prop:"back_time_end",align:"center",editVisdiplay:!1},{label:"范围（米）",prop:"dist_range",align:"center",editVisdiplay:!1},{label:"状态（0未开通1.已开通2.暂不开通）",prop:"state",align:"left",hide:!0}]},f=n("5880"),g=n("8f9b"),m=new g["AMapManager"],v={name:"sample",data:function(){var t=this;return{tableData:[],page:{total:0,currentPage:1,pageSize:100},listQuery:{page:1,size:100},tableLoading:!1,loaded:!1,tableOption:h,amapManager:m,zoom:8,lng:0,lat:0,center:[120.197851,30.230791],plugin:[{pName:"ToolBar",events:{init:function(t){console.log(t)}}},{pName:"Geolocation",events:{init:function(e){e.getCurrentPosition(function(e){e&&e.position&&(console.log("城市数据：",e),t.lng=e.position.lng,t.lat=e.position.lat,t.loaded=!0)})},moveend:function(){},zoomchange:function(){},click:function(e){o.getCurrentPosition(function(e){e&&e.position&&(console.log("城市数据：",e),t.lng=e.position.lng,t.lat=e.position.lat,t.loaded=!0)})}}}],lines:[],selectedLineIndex:-1,markers:[],currentWindow:{position:[120.197851,30.230791],content:"",events:{},visible:!1}}},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getList();case 2:return console.log("tableData",JSON.stringify(this.tableData)),e=[],t.next=6,this.tableData.map(function(t){var r=[];t.start_lon&&t.start_lat&&t.end_lon&&t.end_lat?(r.push([t.start_lon,t.start_lat]),n.markers.push({position:[t.start_lon,t.start_lat],title:t.start_name,label:{content:t.start_name,offset:[0,40]},offset:[-20,-30],events:{click:function(){n.currentWindow.position=[t.start_lon,t.start_lat],n.currentWindow.content=t.start_name,n.currentWindow.visible=!0},dragend:function(t){n.markers[0].position=[t.lnglat.lng,t.lnglat.lat]}},icon:"img/assets/startingpoint.png",visible:!0,draggable:!1,content:"<span>".concat(t.start_name,"</span>")}),r.push([t.end_lon,t.end_lat]),n.markers.push({position:[t.end_lon,t.end_lat],title:t.end_name,label:{content:t.end_name,offset:[0,40]},offset:[-10,-30],events:{click:function(){n.currentWindow.position=[t.end_lon,t.end_lat],n.currentWindow.content=t.end_name,n.currentWindow.visible=!0},dragend:function(t){n.markers[0].position=[t.lnglat.lng,t.lnglat.lat]}},icon:"img/assets/finishingpoint.png",visible:!0,draggable:!1,content:"<span>".concat(t.end_name,"</span>")}),e.push(r)):console.warn("lon or lat is none")});case 6:this.lines=e;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),mounted:function(){},computed:Object(a["a"])({},Object(f["mapGetters"])(["permissions"]),{polyline:function(){console.log("computed  polyline");var t=this,e=this.lines;if(e&&e.length>0){var n=[],r=0;return e.forEach(function(e){var i=r++;n.push({index:i,strokeStyle:t.selectedLineIndex===i?"solid":"dashed",strokeColor:t.selectedLineIndex===i?"#ff0000":"#a2a2a2",path:e,editable:!1,events:{click:function(){t.selectedLineIndex=i,console.log("click at "+t.selectedLineIndex)},mouseover:function(){t.selectedLineIndex=i,console.log("mouseover at "+i)}}})}),console.log(n),console.log(t.selectedLineIndex),n}return[]}}),methods:{getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.tableLoading=!0,t.next=3,c(this.listQuery).then(function(t){e.tableData=t.data.data,e.page.total=t.data.data.length,e.tableLoading=!1});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),currentChange:function(t){this.page.currentPage=t,this.listQuery.page=t,this.getList()},sizeChange:function(t){this.page.pageSize=t,this.listQuery.size=t,this.getList()},handleAdd:function(){this.$refs.crud.rowAdd()},handleEdit:function(t,e){this.$refs.crud.rowEdit(t,e)},handleDel:function(t,e){this.$refs.crud.rowDel(t,e)},rowDel:function(t,e){var n=this;this.$confirm("是否确认删除ID为"+t.id,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return p(t.clientId)}).then(function(t){n.tableData.splice(e,1),n.$message({showClose:!0,message:"删除成功",type:"success"})}).catch(function(t){})},handleUpdate:function(t,e,n){var r=this;d(t).then(function(i){r.tableData.splice(e,1,Object.assign({},t)),r.$message({showClose:!0,message:"修改成功",type:"success"}),n()})},handleSave:function(t,e){var n=this;u(t).then(function(r){n.tableData.push(Object.assign({},t)),n.$message({showClose:!0,message:"添加成功",type:"success"}),e()})},refreshChange:function(){this.getList()}}},y=v,b=(n("1b9b"),n("2877")),w=Object(b["a"])(y,r,i,!1,null,"52d92d35",null);w.options.__file="index.vue";e["default"]=w.exports}}]);