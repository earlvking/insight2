webpackJsonp([26],{goHw:function(t,e){},nhyX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("INCx"),s=a.n(i),l=(a("7+uW"),a("mw3O"),a("X2Oc")),n=a("diDo"),r=(a("OBUd"),a("eMjc")),o=a.n(r),v=a("l9mu"),c=a.n(v),u=a("38N9"),_=a.n(u),d={data:function(){return{static_config:n.b,viewvul:{self_rank:0}}},computed:{risklevel:function(){return this.viewvul.self_rank>=0&&this.viewvul.self_rank<6?"低危":this.viewvul.self_rank<11?"中危":this.viewvul.self_rank<16?"高危":this.viewvul.self_rank<=20?"严重":"未知"}},updated:function(){this.$desensitive()},created:function(){var t=this;this.$route.query.id?(console.log(this.$route.query.id),this.$axios.get("/api/vul/nget",{params:{id:this.$route.query.id}}).then(function(e){console.log(e.data),t.viewvul=e.data,403==e.data.status_code&&t.$message.error("操作失败, "+e.data.msg)})):this.$route.params.id||this.$router.push("/n_open_vulns"),this.viewvul=this.$route.params},mounted:function(){this.$desensitive()},filters:{getDateDiff_timestamp:function(t){return Object(l.e)(t)},formatDate:function(t){var e=new Date(s()(1e3*t));return Object(l.c)(e,"yyyy-MM-dd HH:mm:ss")},statusNameFilter:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"其他";n.b[e][t];return n.b[e][t]?n.b[e][t]:a}},methods:{doPrint:function(){_()({printable:"vul_report",type:"html",targetStyles:["*"]})},getPdf:function(){var t=this.viewvul.vul_name;o()(document.querySelector("#vul_report"),{allowTaint:!0}).then(function(e){var a=e.width,i=e.height,s=a/592.28*841.89,l=i,n=0,r=592.28/a*i,o=e.toDataURL("image/jpeg",1),v=new c.a("","pt","a4");if(l<s)v.addImage(o,"JPEG",0,0,595.28,r);else for(;l>0;)v.addImage(o,"JPEG",0,n,595.28,r),n-=841.89,(l-=s)>0&&v.addPage();v.save(t+".pdf")})}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-tickets"}),t._v(" 漏洞详情\n      ")])],1)],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"block",attrs:{id:"vul_report"}},[a("el-row",[a("span",{staticClass:"vuln-title insight_sensitive"},[t._v(t._s(t.viewvul.vul_name))]),t._v(" "),a("el-button",{staticStyle:{float:"right","margin-right":"10px"},attrs:{size:"mini"},on:{click:t.getPdf}},[t._v("导出预览PDF")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{size:"mini"},on:{click:t.doPrint}},[t._v("打印")]),t._v(" "),a("br"),t._v(" "),a("hr",{staticStyle:{"margin-top":"20px","margin-bottom":"20px","background-color":"#606266",height:"1px"}}),t._v(" "),a("br")],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:7}},[a("el-form",{staticStyle:{width:"100%"},attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"作者"}},[a("span",{staticClass:"data-content insight_sensitive",attrs:{type:"text"}},[t._v(t._s(t.viewvul.username))])]),t._v(" "),a("el-form-item",{attrs:{label:"解决方案"}},[a("span",{staticStyle:{color:"409eff","font-weight":"bold",cursor:"pointer"},attrs:{type:"text"},on:{click:function(e){return t.$router.push({path:"/n_viewpaperdetail?id="+t.viewvul.article_id})}}},[t._v(t._s(t.viewvul.article_name?t.viewvul.article_name:"无"))])])],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form",{attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"相关应用"}},[a("span",{staticClass:"data-content insight_sensitive",attrs:{type:"text"}},[t._v(t._s(t.viewvul.appname))])]),t._v(" "),a("el-form-item",{attrs:{label:"漏洞类型"}},[a("span",{staticClass:"data-content",attrs:{type:"text"}},[t._v(t._s(t._f("statusNameFilter")(t.viewvul.vul_type,"VUL_TYPE")))])])],1)],1),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-form",{attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"自评Rank"}},[a("span",{staticClass:"data-content",attrs:{type:"text"}},[t._v(t._s(t.viewvul.self_rank))])]),t._v(" "),a("el-form-item",{attrs:{label:"风险等级"}},[0==t.viewvul.vul_level?a("span",{staticClass:"data-content",attrs:{type:"text"}},[t._v(t._s(t.risklevel))]):a("span",{staticClass:"data-content",attrs:{type:"text"}},[t._v(t._s(t._f("statusNameFilter")(t.viewvul.vul_level,"VUL_LEVEL")))])])],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form",{attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"开始时间"}},[0==t.viewvul.notice_time?a("span",{staticClass:"data-content",attrs:{type:"text"}},[t._v("未审核")]):a("span",{staticClass:"data-content",attrs:{type:"text"}},[t._v(t._s(t._f("formatDate")(t.viewvul.notice_time)))])]),t._v(" "),a("el-form-item",{attrs:{label:"结束时间"}},[0==t.viewvul.fix_time?a("span",{staticClass:"data-content",attrs:{type:"text"}},[t._v("未完成")]):a("span",{staticClass:"data-content",attrs:{type:"text"}},[t._v(t._s(t._f("formatDate")(t.viewvul.fix_time)))])])],1)],1)],1),t._v(" "),a("hr",{staticStyle:{"margin-top":"20px","margin-bottom":"20px","background-color":"#606266",height:"1px"}}),t._v(" "),a("div",{staticStyle:{width:"60%"}},[a("div",{staticClass:"markdown-body insight_sensitive",domProps:{innerHTML:t._s(t.marked(t.filterXSS(t.viewvul.vul_poc)))}})]),t._v(" "),a("div",{staticStyle:{width:"60%"}},[a("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.marked(t.filterXSS(t.viewvul.vul_solution)))}})])],1)])])},staticRenderFns:[]};var p=a("VU/8")(d,m,!1,function(t){a("goHw")},"data-v-3ada4355",null);e.default=p.exports}});