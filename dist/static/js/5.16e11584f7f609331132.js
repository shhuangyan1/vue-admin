webpackJsonp([5],{"81hm":function(e,o,t){e.exports=t.p+"static/img/bg2.ee3e0f3.jpg"},BInn:function(e,o,t){o=e.exports=t("BkJT")(!1),o.push([e.i,"body,html{margin:0;height:100%;font-size:14px}.login-page{height:100%;background:url("+t("81hm")+") no-repeat #f0f0f0;background-size:100%}.login-page-form{text-align:center;position:fixed;top:50%;left:50%;width:360px;margin:-200px 0 0 -180px}.login-page-form h1{color:#555;font-size:24px}.login-form{background:#fff;padding:12px 24px 36px;border-radius:8px;-webkit-box-shadow:0 0 10px rgba(0,0,0,.1);box-shadow:0 0 10px rgba(0,0,0,.1)}.login-form .el-button{width:100%}.login-copy-right{color:#999}",""])},FoQm:function(e,o,t){var r=t("BInn");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("8bSs")("8b888ef6",r,!0)},qzG6:function(e,o,t){"use strict";function r(e){t("FoQm")}Object.defineProperty(o,"__esModule",{value:!0});var n={name:"Login",data:function(){return{form:{name:"",pass:""}}},methods:{submitForm:function(e){var o=this;this.$refs[e].validate(function(e){e&&o.$router.push("/work")})}}},a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"login-page"},[t("div",{staticClass:"login-page-form"},[t("h1",[e._v("金爱农运营后台")]),e._v(" "),t("el-form",{ref:"login",staticClass:"login-form",attrs:{model:e.form}},[t("el-form-item",{attrs:{label:"用户名",prop:"name",rules:{required:!0,message:"用户名不能为空"}}},[t("el-input",{attrs:{type:"text",placeholder:"请输入登录名/手机号"},model:{value:e.form.name,callback:function(o){e.$set(e.form,"name",o)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"pass",rules:{required:!0,message:"密码不能为空"}}},[t("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.pass,callback:function(o){e.$set(e.form,"pass",o)},expression:"form.pass"}})],1),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(o){e.submitForm("login")}}},[e._v("点击登录")])],1),e._v(" "),t("p",{staticClass:"login-copy-right"},[e._v("© 2017 浙江金爱农网络科技有限公司")])],1)])},s=[],i={render:a,staticRenderFns:s},l=i,p=t("/Xao"),f=r,m=p(n,l,!1,f,null,null);o.default=m.exports}});