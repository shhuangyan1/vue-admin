webpackJsonp([4],{c6Sc:function(t,n,o){t.exports=o.p+"static/img/bg3.ce136b5.jpg"},otog:function(t,n,o){"use strict";function e(t){o("w6hw")}Object.defineProperty(n,"__esModule",{value:!0});var i={name:"NotFound",data:function(){return{time:10,countdown:""}},methods:{goLogin:function(){this.$router.push("/login")}},mounted:function(){var t=this;this.countdown=setInterval(function(){t.time<=0?t.goLogin():t.time--},1e3)},destroyed:function(){clearInterval(this.countdown)}},s=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"not-found"},[o("p",{staticClass:"title"},[t._v("您要找的页面正在躲猫猫···")]),t._v(" "),o("p",{staticClass:"des"},[t._v("是不是地址输错了？或者页面还在开发中?")]),t._v(" "),o("p",{staticClass:"link"},[[t._v(t._s(t.time))],t._v(" 秒后将为您跳转至"),o("el-button",{attrs:{type:"text"},on:{click:t.goLogin}},[t._v("登录页")])],2)])},c=[],a={render:s,staticRenderFns:c},r=a,u=o("/Xao"),l=e,d=u(i,r,!1,l,null,null);n.default=d.exports},w6hw:function(t,n,o){var e=o("xhjf");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o("8bSs")("1138a736",e,!0)},xhjf:function(t,n,o){n=t.exports=o("BkJT")(!1),n.push([t.i,".not-found{overflow:hidden;margin:0 auto;width:700px;padding-top:400px;font-size:14px;text-align:center;background:url("+o("c6Sc")+") no-repeat 0 50px}.not-found .title{font-weight:700;font-size:24px;color:#00b0ab;margin:0}.not-found .des{color:#999;font-size:14px}",""])}});