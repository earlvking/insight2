webpackJsonp([24],{Rbs7:function(e,t){},ia8w:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("INCx"),o=i.n(s),a=i("mvHQ"),r=i.n(a),l=(i("7+uW"),i("X2Oc")),n=i("diDo"),u=i("8+FI"),c={name:"curd",components:{},data:function(){return{cur_audit_status:"/auditing/confirm",auditVisible:!1,solveVisible:!1,select_vul_status:null,app_id:null,app_id_name:null,status_options:[{value:"0",label:"未审核"}],rules:{vul_name:[{required:!0,message:"请输入漏洞标题",trigger:"blur"}],app_id:[{required:!0,message:"请选择关联应用",trigger:"change"}],layer:[{required:!0,message:"请选择漏洞层面",trigger:"blur"}],vul_type:[{required:!0,message:"请选择漏洞类型",trigger:"blur"}],self_rank:[{required:!0,message:"请填写Rank值",trigger:"blur"}],vul_source:[{required:!0,message:"请选择漏洞来源",trigger:"blur"}]},app_list_url:"/api/app/select",paper_list_url:"/api/paper/list",is_report_visible:!1,is_solution_visible:!1,cronPopover:!1,cron:"",rank:0,links:[],task_type:"立即任务",url:"",md_report:"一、URL地址：\n二、发现方式：\n\n\n请尽量详细描述，保留场景/截图/重现方法等 \n\n\n三、漏洞证明：\n\n\n请在这里写POC\n\n\n",form_errors:[],cur_entity:{},add_url:"/api/vul/add",list_url:"/api/vul/my/list?vul_status=1",del_url:"/api/vul/del",role_list_url:"/api/role/select",del_list:new URLSearchParams,tableData:[],select_word:"",cur_page:1,page_size:10,total:0,multipleSelection:[],editVisible:!1,createVisible:!1,form:{self_rank:"1",layer:10,app_id:-1},role_options:[{value:"__",label:"--"}],static_config:n.b}},created:function(){this.getStatusGroup(),this.getRoleList(),this.getData()},updated:function(){this.$desensitive()},computed:{isShowText:function(){return"{}"==r()(this.cur_entity)},isShowNoOp:function(){return!(this.isShowText||this.isShowConfirmButton||this.isShowAuditButton||this.isShowApplyRetestButton||this.isShowSubmitRetestButton)},isShowAuditDetail:function(){return"/auditing/confirm"==this.cur_audit_status},isShowAuditButton:function(){return!!this.cur_entity&&"10"==this.cur_entity.vul_status},isShowConfirmButton:function(){return!!this.cur_entity&&"40"==this.cur_entity.vul_status},isShowApplyRetestButton:function(){return!!this.cur_entity&&"50"==this.cur_entity.vul_status},isShowSubmitRetestButton:function(){return!!this.cur_entity&&"55"==this.cur_entity.vul_status},colortype:function(){return this.form.self_rank>=0&&this.form.self_rank<6?"success":this.form.self_rank<11?"":this.form.self_rank<16?"danger":this.form.self_rank<=20?"warning":void 0},risklevel:function(){return this.form.self_rank>=0&&this.form.self_rank<6?"低危":this.form.self_rank<11?"中危":this.form.self_rank<16?"高危":this.form.self_rank<=20?"严重":void 0},real_risklevel:function(){return this.form.real_rank>=0&&this.form.real_rank<6?"低危":this.form.real_rank<11?"中危":this.form.real_rank<16?"高危":this.form.real_rank<=20?"严重":void 0}},filters:{getDateDiff_timestamp:function(e){return Object(l.e)(e)},formatDate:function(e){var t=new Date(o()(1e3*e));return Object(l.c)(t,"yyyy-MM-dd HH:mm:ss")},statusFilter:function(e){return{0:"info",1:"success","-1":"danger"}[e]},statusNameFilter:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"其他";n.b[t][e];return n.b[t][e]?n.b[t][e]:i}},methods:{exportCSV:function(){this.$axios({method:"get",url:"/api/vul/my/export?vul_status=1",data:{search:this.select_word,page_index:this.cur_page,page_size:this.page_size,sort:this.sortcolumn,direction:this.sortorder,vul_status:this.select_vul_status},responseType:"blob"}).then(function(e){if(e.data){var t=window.URL.createObjectURL(e.data),i=document.createElement("a");i.style.display="none",i.href=t,i.setAttribute("download","vulns_export.csv"),document.body.appendChild(i),i.click()}})},updateCur_entity:function(){this.form=this.cur_entity,this.form.vul_type=this.cur_entity.vul_type.toString()},statusColor:function(e){return Object(l.g)(e)},rankColor:function(e){return Object(l.f)(e)},pocChange:function(e,t){this.form.vul_poc_html=t},solutionChange:function(e,t){this.form.vul_solution_html=t},$imgAdd:function(e,t){var i=this,s=new FormData;s.append("image",t),this.$axios({url:"/api/image/upload",method:"post",data:s,headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t),i.$refs.poc_editor.$img2Url(e,"api/"+t.data.path)})},$imgAddSolution:function(e,t){var i=this,s=new FormData;s.append("image",t),this.$axios({url:"/api/image/upload",method:"post",data:s,headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t),i.$refs.solution_editor.$img2Url(e,"api/"+t.data.path)})},handleSelect:function(e){this.form.app_id=e.id,this.form.app_name=e.value},handleSelectPaper:function(e){this.form.article_id=e.id,this.form.solution_name=e.value},querySearchAsync:function(e,t){this.$axios.get(this.app_list_url,{params:{search:e}}).then(function(e){var i=new Array;e.data.result.map(function(e){i.push({value:e.appname,id:e.id.toString()})}),t(i)})},querySearchPaperAsync:function(e,t){this.$axios.get(this.paper_list_url,{params:{search:e}}).then(function(e){var i=new Array;e.data.result.map(function(e){i.push({value:e.title,id:e.id})}),t(i)})},handleClose:function(e){this.$confirm("数据还未提交，确认关闭？").then(function(t){e()}).catch(function(e){})},getRoleList:function(){var e=this;this.$axios.get(this.role_list_url,{params:{type:0}}).then(function(t){e.role_options=t.data.result,console.log(e.role_options)})},sortChange:function(e,t,i){this.sortcolumn=e.prop,this.sortorder=e.order,this.getData()},viewUser:function(){if(console.log(this.cur_entity),this.cur_entity.id){var e=this.$router.resolve({name:"n_viewvulndetail",query:{id:this.cur_entity.id}});window.open(e.href,"_blank")}else this.$message.info("请选择数据")},getStatusGroup:function(){var e=this;this.$axios.get("api/vul/my/status/group?vul_status=1").then(function(t){e.status_options=t.data.result})},doCreate:function(e){var t=this;(this.$refs.createForm?this.$refs.createForm:this.$refs.editForm).validate(function(e){e?t.$axios.post(t.add_url,Object(l.h)(t.form)).then(function(e){1==e.data.status?(t.$message.success("操作成功"),t.getData(),u.a.$emit("updateUserInfo","")):t.$message.error("操作失败, 错误码:"+e.data.status+e.data.msg),t.createVisible=!1,t.editVisible=!1}):t.$message.error("提交失败，请填写相应信息")})},doAudit:function(e){var t=this;this.$axios.post("api/"+this.cur_audit_status,Object(l.h)(this.form)).then(function(e){1==e.data.status?(t.$message.success("操作成功"),t.getData()):t.$message.error("操作失败, 错误码:"+e.data.status+e.data.msg),t.auditVisible=!1})},doSolve:function(e){var t=this;this.$axios.post("api/"+this.cur_audit_status,Object(l.h)(this.form)).then(function(e){1==e.data.status?(t.$message.success("操作成功"),t.getData()):t.$message.error("操作失败, 错误码:"+e.data.status+e.data.msg),t.solveVisible=!1})},getData:function(){var e=this;this.$axios.get(this.list_url,{params:{search:this.select_word,page_index:this.cur_page,page_size:this.page_size,sort:this.sortcolumn,direction:this.sortorder,vul_status:this.select_vul_status}}).then(function(t){e.tableData=t.data.result,e.total=t.data.total})},handleSizeChange:function(e){this.page_size=e,this.getData()},handleCurrentChange:function(e){this.cur_page=e,this.getData()},handleCurrentChangeRow:function(e){this.cur_entity=e},search:function(){this.getData()},handleEdit:function(e,t){this.form_errors=[],this.editVisible=!0,this.form=t,delete this.form.create_time,this.form.enable=1==t.enable?"1":"0",this.form.app_name=t.appname,this.form.vul_type=t.vul_type.toString()},handleSelectionChange:function(e){this.multipleSelection=e},dataDel:function(e){var t=this,i=null;if(e)i=e;else{if(this.multipleSelection.length<=0)return void this.$message.info("未选择任何数据");this.del_list=this.multipleSelection.map(function(e){return e.id}),i=this.del_list}this.$confirm("是否确认此操作","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.post(t.del_url,Object(l.h)({id:i})).then(function(e){e.data.status>=1?(t.getData(),t.$message.success("删除成功")):t.$message.error("删除失败, 错误码: "+e.data.status)})}).catch(function(){})},filterVulType:function(e,t,i){return console.log(e,t,i),t[i.property]===e}}},m={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-tickets"}),e._v(" 漏洞\n      ")]),e._v(" "),i("el-breadcrumb-item",[e._v("已完成漏洞")])],1)],1),e._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus",size:"mini"},on:{click:function(t){e.createVisible=!0,e.form={enable:"1"}}}},[e._v("提交漏洞")]),e._v(" "),i("el-input",{staticClass:"handle-input",attrs:{size:"mini",placeholder:"请输入关键词"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search()}},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v(" "),i("el-select",{staticClass:"handle-select mr10",attrs:{size:"mini",placeholder:"状态筛选"},model:{value:e.select_vul_status,callback:function(t){e.select_vul_status=t},expression:"select_vul_status"}},e._l(e.status_options,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}},[i("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),e._v(" "),i("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.count))])])}),1),e._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),i("div",{staticStyle:{float:"right"}},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.isShowText,expression:"isShowText"}],staticStyle:{"font-weight":"400",color:"#606266","font-size":"13px"}},[e._v("请选择一条数据以显示可操作项")]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.isShowNoOp,expression:"isShowNoOp"}],staticStyle:{"font-weight":"400",color:"#606266","font-size":"13px"}},[e._v("无可用的操作")]),e._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isShowAuditButton,expression:"isShowAuditButton"}],attrs:{size:"mini",type:"primary"},on:{click:function(t){e.updateCur_entity(),e.auditVisible=!0}}},[e._v("审核")]),e._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isShowConfirmButton,expression:"isShowConfirmButton"}],attrs:{size:"mini",type:"primary"},on:{click:function(t){e.updateCur_entity(),e.solveVisible=!0,e.cur_audit_status="/auditing/fixing"}}},[e._v("已知悉")]),e._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isShowApplyRetestButton,expression:"isShowApplyRetestButton"}],attrs:{size:"mini",type:"primary"},on:{click:function(t){e.updateCur_entity(),e.solveVisible=!0,e.cur_audit_status="/auditing/retest"}}},[e._v("申请复测")]),e._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isShowSubmitRetestButton,expression:"isShowSubmitRetestButton"}],attrs:{size:"mini",type:"primary"},on:{click:function(t){e.updateCur_entity(),e.solveVisible=!0,e.cur_audit_status="/auditing/fixed"}}},[e._v("提交复测")]),e._v(" "),i("el-button",{attrs:{size:"mini",icon:"iconfont  el-iconCSV1"},on:{click:function(t){return e.exportCSV()}}},[e._v("导出CSV")])],1)],1),e._v(" "),i("el-table",{attrs:{data:e.tableData,border:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange,"current-change":e.handleCurrentChangeRow,"sort-change":e.sortChange}},[i("el-table-column",{attrs:{type:"selection",width:"45"}}),e._v(" "),i("el-table-column",{attrs:{prop:"vul_name",label:"名称","min-width":"150",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"primary-title insight_sensitive",staticStyle:{cursor:"pointer !important"},on:{click:function(i){e.cur_entity=t.row,e.viewUser()}}},[e._v(e._s(t.row.vul_name))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"vul_type",label:"类型","min-width":"100",filters:[{text:"弱口令",value:"10"},{text:"SQL注入漏洞",value:"120"}],"filter-method":e.filterVulType,"filter-placement":"bottom-end"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"in-tag",style:{color:e.statusColor(t.row.vul_type)}},[e._v(e._s(e._f("statusNameFilter")(t.row.vul_type,"VUL_TYPE")))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"self_rank",label:"Rank","min-width":"70",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{style:{color:e.rankColor(t.row.self_rank),"font-weight":"bold"}},[e._v(e._s(t.row.self_rank))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"username",label:"提交人","min-width":"100",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"insight_sensitive"},[e._v(e._s(t.row.username))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"",label:"提交时间","min-width":"80",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tooltip",{attrs:{effect:"light",content:e._f("formatDate")(t.row.submit_time),placement:"right"}},[i("span",[e._v(e._s(e._f("getDateDiff_timestamp")(t.row.submit_time)))])])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"vul_status",label:"状态","min-width":"70",filters:[{text:"弱口令",value:"10"},{text:"SQL注入漏洞",value:"120"}],"filter-method":e.filterVulType,"filter-placement":"bottom-end"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"in-tag",style:{color:e.statusColor(t.row.vul_status)}},[e._v(e._s(e._f("statusNameFilter")(t.row.vul_status,"VUL_STATUS","未处理")))])]}}])})],1),e._v(" "),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{"current-page":e.cur_page,"page-sizes":[10,20,50,100],"page-size":e.page_size,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.cur_page=t},"update:current-page":function(t){e.cur_page=t},"update:pageSize":function(t){e.page_size=t},"update:page-size":function(t){e.page_size=t},"update:total":function(t){e.total=t}}})],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"新增漏洞",visible:e.createVisible,width:"75%","before-close":e.handleClose},on:{"update:visible":function(t){e.createVisible=t}}},[i("el-form",{ref:"createForm",attrs:{model:e.form,"label-width":"150px",rules:e.rules}},[i("el-form-item",{attrs:{label:"漏洞标题",prop:"vul_name"}},[i("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{clearable:"",placeholder:"请输入漏洞名称",size:"mini",type:"text",name:"task_name"},model:{value:e.form.vul_name,callback:function(t){e.$set(e.form,"vul_name",t)},expression:"form.vul_name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"关联应用",prop:"app_id"}},[i("el-autocomplete",{staticStyle:{width:"350px"},attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"请输入关键字",clearable:""},on:{select:e.handleSelect},model:{value:e.form.app_name,callback:function(t){e.$set(e.form,"app_name",t)},expression:"form.app_name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"关联解决方案",prop:"solution_id"}},[i("el-autocomplete",{staticStyle:{width:"350px"},attrs:{"fetch-suggestions":e.querySearchPaperAsync,placeholder:"请输入关键字",clearable:""},on:{select:e.handleSelectPaper},model:{value:e.form.solution_name,callback:function(t){e.$set(e.form,"solution_name",t)},expression:"form.solution_name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"漏洞层面",prop:"layer"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:e.form.layer,callback:function(t){e.$set(e.form,"layer",t)},expression:"form.layer"}},e._l(e.static_config.VUL_LAYER,function(t,s){return i("el-radio-button",{key:t,attrs:{label:s}},[e._v(e._s(t))])}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"漏洞类型",prop:"vul_type"}},[i("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.form.vul_type,callback:function(t){e.$set(e.form,"vul_type",t)},expression:"form.vul_type"}},e._l(e.static_config.VUL_TYPE,function(e,t){return i("el-option",{key:t,attrs:{label:e,value:t}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"Rank值",prop:"self_rank"}},[i("el-input-number",{attrs:{"controls-position":"right",min:0,max:20,size:"mini"},model:{value:e.form.self_rank,callback:function(t){e.$set(e.form,"self_rank",t)},expression:"form.self_rank"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"风险等级",prop:"risklevel"}},[i("el-tag",{attrs:{type:e.colortype,size:"medium"}},[e._v(e._s(e.risklevel))])],1),e._v(" "),i("el-form-item",{attrs:{label:"漏洞来源",prop:"vul_source"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:e.form.vul_source,callback:function(t){e.$set(e.form,"vul_source",t)},expression:"form.vul_source"}},e._l(e.static_config.VUL_SOURCE,function(t,s){return i("el-radio-button",{key:t,attrs:{label:s}},[e._v(e._s(t))])}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"选项"}},[i("el-checkbox",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"显示漏洞证明编辑器",expression:"'显示漏洞证明编辑器'"}],model:{value:e.is_report_visible,callback:function(t){e.is_report_visible=t},expression:"is_report_visible"}},[e._v("漏洞证明")]),e._v(" "),i("el-checkbox",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"显示解决方案编辑器",expression:"'显示解决方案编辑器'"}],model:{value:e.is_solution_visible,callback:function(t){e.is_solution_visible=t},expression:"is_solution_visible"}},[e._v("解决方案")])],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.is_report_visible,expression:"is_report_visible"}],attrs:{label:"漏洞证明"}},[i("mavon-editor",{ref:"poc_editor",on:{change:e.pocChange,imgAdd:e.$imgAdd},model:{value:e.form.vul_poc,callback:function(t){e.$set(e.form,"vul_poc",t)},expression:"form.vul_poc"}})],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.is_solution_visible,expression:"is_solution_visible"}],attrs:{label:"解决方案"}},[i("mavon-editor",{ref:"solution_editor",on:{change:e.solutionChange,imgAdd:e.$imgAddSolution},model:{value:e.form.vul_solution,callback:function(t){e.$set(e.form,"vul_solution",t)},expression:"form.vul_solution"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.doCreate()}}},[e._v("创建")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"编辑漏洞",visible:e.editVisible,width:"80%"},on:{"update:visible":function(t){e.editVisible=t}}},[i("el-form",{ref:"editForm",attrs:{model:e.form,"label-width":"80px",rules:e.rules}},[i("el-form-item",{attrs:{label:"漏洞标题",prop:"vul_name"}},[i("el-input",{attrs:{clearable:"",placeholder:"请输入漏洞名称",size:"mini",type:"text",name:"task_name"},model:{value:e.form.vul_name,callback:function(t){e.$set(e.form,"vul_name",t)},expression:"form.vul_name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"关联应用",prop:"app_id"}},[i("el-autocomplete",{attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"请输入关键字",clearable:""},on:{select:e.handleSelect},model:{value:e.form.app_id_name,callback:function(t){e.$set(e.form,"app_id_name",t)},expression:"form.app_id_name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"漏洞层面",prop:"layer"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:e.form.layer,callback:function(t){e.$set(e.form,"layer",t)},expression:"form.layer"}},e._l(e.static_config.VUL_LAYER,function(t,s){return i("el-radio-button",{key:t,attrs:{label:s}},[e._v(e._s(t))])}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"漏洞类型",prop:"vul_type"}},[i("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.form.vul_type,callback:function(t){e.$set(e.form,"vul_type",t)},expression:"form.vul_type"}},e._l(e.static_config.VUL_TYPE,function(e,t){return i("el-option",{key:t,attrs:{label:e,value:t}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"Rank值",prop:"self_rank"}},[i("el-input-number",{attrs:{"controls-position":"right",min:0,max:20,size:"mini"},model:{value:e.form.self_rank,callback:function(t){e.$set(e.form,"self_rank",t)},expression:"form.self_rank"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"风险等级",prop:"risklevel"}},[i("el-tag",{attrs:{type:e.colortype,size:"medium"}},[e._v(e._s(e.risklevel))])],1),e._v(" "),i("el-form-item",{attrs:{label:"漏洞来源",prop:"vul_source"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:e.form.vul_source,callback:function(t){e.$set(e.form,"vul_source",t)},expression:"form.vul_source"}},e._l(e.static_config.VUL_SOURCE,function(t,s){return i("el-radio-button",{key:t,attrs:{label:s}},[e._v(e._s(t))])}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"选项"}},[i("el-checkbox",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"显示漏洞证明编辑器",expression:"'显示漏洞证明编辑器'"}],model:{value:e.is_report_visible,callback:function(t){e.is_report_visible=t},expression:"is_report_visible"}},[e._v("漏洞证明")]),e._v(" "),i("el-checkbox",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"显示解决方案编辑器",expression:"'显示解决方案编辑器'"}],model:{value:e.is_solution_visible,callback:function(t){e.is_solution_visible=t},expression:"is_solution_visible"}},[e._v("解决方案")])],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.is_report_visible,expression:"is_report_visible"}],attrs:{label:"漏洞证明"}},[i("mavon-editor",{ref:"poc_editor",on:{change:e.pocChange,imgAdd:e.$imgAdd},model:{value:e.form.vul_poc,callback:function(t){e.$set(e.form,"vul_poc",t)},expression:"form.vul_poc"}})],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.is_solution_visible,expression:"is_solution_visible"}],attrs:{label:"解决方案"}},[i("mavon-editor",{ref:"solution_editor",on:{change:e.solutionChange,imgAdd:e.$imgAddSolution},model:{value:e.form.vul_solution,callback:function(t){e.$set(e.form,"vul_solution",t)},expression:"form.vul_solution"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.doCreate()}}},[e._v("修 改")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"审核漏洞",visible:e.auditVisible,width:"50%"},on:{"update:visible":function(t){e.auditVisible=t}}},[i("el-form",{ref:"editForm",attrs:{model:e.form,"label-width":"90px"}},[i("el-form-item",{attrs:{label:"漏洞标题",prop:"vul_name"}},[e._v(e._s(e.form.vul_name))]),e._v(" "),i("el-form-item",{attrs:{label:"漏洞类型",prop:"vul_type"}},[i("el-select",{attrs:{placeholder:"请选择",size:"mini",disabled:!0},model:{value:e.form.vul_type,callback:function(t){e.$set(e.form,"vul_type",t)},expression:"form.vul_type"}},e._l(e.static_config.VUL_TYPE,function(e,t){return i("el-option",{key:t,attrs:{label:e,value:t}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"自评Rank",prop:"self_rank"}},[e._v(e._s(e.form.self_rank))]),e._v(" "),i("el-form-item",{attrs:{label:"风险等级",prop:"risklevel"}},[i("el-tag",{attrs:{type:e.colortype,size:"medium"}},[e._v(e._s(e.risklevel))])],1),e._v(" "),i("el-form-item",{attrs:{label:"审核状态"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:e.cur_audit_status,callback:function(t){e.cur_audit_status=t},expression:"cur_audit_status"}},e._l(e.static_config.VUL_ACTION,function(t,s){return i("el-radio-button",{key:t,attrs:{label:s}},[e._v(e._s(t))])}),1)],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isShowAuditDetail,expression:"isShowAuditDetail"}],attrs:{label:"关联应用",prop:"app_id_name"}},[i("el-autocomplete",{attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"请输入内容"},on:{select:e.handleSelect},model:{value:e.form.app_id_name,callback:function(t){e.$set(e.form,"app_id_name",t)},expression:"form.app_id_name"}})],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isShowAuditDetail,expression:"isShowAuditDetail"}],attrs:{label:"实际Rank",prop:"self_rank"}},[i("el-input-number",{attrs:{"controls-position":"right",min:0,max:20,size:"mini"},model:{value:e.form.real_rank,callback:function(t){e.$set(e.form,"real_rank",t)},expression:"form.real_rank"}})],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isShowAuditDetail,expression:"isShowAuditDetail"}],attrs:{label:"风险等级"}},[i("el-tag",{attrs:{type:e.colortype,size:"medium"}},[e._v(e._s(e.real_risklevel))])],1),e._v(" "),i("el-form-item",{attrs:{label:"回复作者",prop:"return"}},[i("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"详情备注",prop:"return"}},[i("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:e.form.msg,callback:function(t){e.$set(e.form,"msg",t)},expression:"form.msg"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.doAudit()}}},[e._v("审 核")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"处理漏洞",visible:e.solveVisible,width:"50%"},on:{"update:visible":function(t){e.solveVisible=t}}},[i("el-form",{ref:"editForm",attrs:{model:e.form,"label-width":"90px"}},[i("el-form-item",{attrs:{label:"漏洞标题",prop:"vul_name"}},[e._v(e._s(e.form.vul_name))]),e._v(" "),i("el-form-item",{attrs:{label:"漏洞类型",prop:"vul_type"}},[i("el-select",{attrs:{placeholder:"请选择",size:"mini",disabled:!0},model:{value:e.form.vul_type,callback:function(t){e.$set(e.form,"vul_type",t)},expression:"form.vul_type"}},e._l(e.static_config.VUL_TYPE,function(e,t){return i("el-option",{key:t,attrs:{label:e,value:t}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"自评Rank",prop:"self_rank"}},[e._v(e._s(e.form.self_rank))]),e._v(" "),i("el-form-item",{attrs:{label:"风险等级",prop:"risklevel"}},[i("el-tag",{attrs:{type:e.colortype,size:"medium"}},[e._v(e._s(e.risklevel))])],1),e._v(" "),i("el-form-item",{attrs:{label:"回复作者",prop:"return"}},[i("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.doSolve()}}},[e._v("确 认")])],1)],1)],1)},staticRenderFns:[]};var _=i("VU/8")(c,m,!1,function(e){i("Rbs7")},"data-v-3f4a0cc2",null);t.default=_.exports}});