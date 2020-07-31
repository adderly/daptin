(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{a8e1:function(t,a,n){"use strict";n.r(a);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-breadcrumbs",{scopedSlots:e._u([{key:"separator",fn:function(){return[a("q-icon",{attrs:{size:"1.2em",name:"arrow_forward",color:"black"}})]},proxy:!0}])},[a("q-breadcrumbs-el",{attrs:{label:"Integrations",icon:"fas fa-bolt"}}),a("q-breadcrumbs-el",{attrs:{label:"API Catalogue",icon:"fas fa-plug"}})],1)],1),a("q-separator"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3 col-lg-4 col-6 col-sm-8 col-xs-12 q-pa-md"},[a("q-input",{attrs:{label:"Search"},model:{value:e.filterWord,callback:function(t){e.filterWord=t},expression:"filterWord"}})],1)]),a("div",{staticClass:"row"},e._l(e.filteredIntegrations,(function(t){return a("div",{staticClass:"col-4 col-xl-3 col-lg-4 col-xs-12 col-sm-6 q-pa-md"},[a("q-card",[a("q-card-section",[a("span",{staticClass:"text-h6",staticStyle:{"text-overflow":"ellipsis",overflow:"hidden","white-space":"nowrap",display:"-webkit-box","-webkit-line-clamp":"1","-webkit-box-orient":"vertical"}},[e._v(e._s(t.name))])]),a("q-card-section",[a("span",[e._v("Format")]),a("span",{staticClass:"text-bold float-right"},[e._v(e._s(t.specification_format))])]),a("q-card-section",[a("span",[e._v("Language")]),a("span",{staticClass:"text-bold float-right"},[e._v(e._s(t.specification_language))])]),a("q-card-section",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("q-btn",{staticClass:"float-right",attrs:{size:"sm",label:"Edit integration"},on:{click:function(a){return e.showEditIntegration(t)}}})],1)])])],1)],1)})),0),a("q-page-sticky",{staticStyle:{"z-index":"3000"},attrs:{position:"bottom-right",offset:[20,20]}},[a("q-btn",{attrs:{fab:"",icon:"add",color:"primary"},on:{click:function(t){e.showCreateIntegrationDrawer=!0}}})],1),a("q-drawer",{attrs:{overlay:"","content-class":"bg-grey-3",width:400,side:"right"},model:{value:e.showCreateIntegrationDrawer,callback:function(t){e.showCreateIntegrationDrawer=t},expression:"showCreateIntegrationDrawer"}},[a("q-scroll-area",{staticClass:"fit row"},[a("div",{staticClass:"q-pa-md"},[a("span",{staticClass:"text-h6"},[e._v("Create integration")]),a("q-form",{staticClass:"q-gutter-md"},[a("file-upload",{ref:"upload",staticClass:"bg-grey-3",staticStyle:{height:"300px",width:"100%"},attrs:{multiple:!0,drop:!0,"drop-directory":!1,"post-action":"/post.method","put-action":"/put.method"},on:{"input-file":e.fileAdded},model:{value:e.specFile,callback:function(t){e.specFile=t},expression:"specFile"}},[a("div",{staticClass:"container"},[0==e.specFile.length?a("span",{staticClass:"vertical-middle",staticStyle:{"padding-top":"40%"}},[e._v("Drop files or click to select "),a("br")]):e._e(),e.specFile.length>0?a("div",{staticClass:"row"},e._l(e.specFile,(function(t){return a("div",{staticClass:"col-12"},[e._v(e._s(t.name)+" - Error: "+e._s(t.error)+", Success:\n                    "+e._s(t.success)+"\n                  ")])})),0):e._e()])]),a("q-btn",{attrs:{color:"primary",loading:e.fileIsBeingLoaded},on:{click:function(t){return e.createIntegration()}}},[e._v("Create")]),a("q-btn",{on:{click:function(t){e.showCreateIntegrationDrawer=!1}}},[e._v("Cancel")])],1)],1)])],1),a("q-drawer",{attrs:{overlay:"","content-class":"bg-grey-3",width:400,side:"right"},model:{value:e.showEditIntegrationDrawer,callback:function(t){e.showEditIntegrationDrawer=t},expression:"showEditIntegrationDrawer"}},[a("q-scroll-area",{staticClass:"fit row"},[a("div",{staticClass:"q-pa-md"},[a("span",{staticClass:"text-h6"},[e._v("Edit integration")]),a("q-form",{staticClass:"q-gutter-md"},[a("q-input",{attrs:{disable:"",label:"Name"},model:{value:e.newIntegration.name,callback:function(t){e.$set(e.newIntegration,"name",t)},expression:"newIntegration.name"}}),a("q-btn",{attrs:{color:"negative"},on:{click:function(t){return e.deleteIntegration()}}},[e._v("Delete")]),a("q-btn",{staticClass:"float-right",on:{click:function(t){e.showEditIntegrationDrawer=!1}}},[e._v("Cancel")])],1)],1)])],1)],1)},o=[],r=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("456d"),n("28a5"),n("551c"),n("06db"),n("7f7f"),n("aef6"),n("f751"),n("c47a")),s=n.n(r),c=n("2f62");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=n("651e"),g={name:"ApiCataloguePage",methods:d(d({fileAdded:function(t){var a=t.file,n=this;this.fileIsBeingLoaded=!0,console.log("File to read",a);var i=Object.assign({},this.newIntegration);a.name.toLowerCase().endsWith(".yaml")||a.type.toLowerCase().endsWith("yaml")?i.specification_format="yaml":i.specification_format="json";var o=new Promise((function(t,n){var i=a.name,o=(a.type,new FileReader);o.onload=function(e){t(e)},o.onerror=function(){console.log("Failed to load file onerror",e,arguments),n(i)},o.readAsDataURL(a)}));o.then((function(t){console.log("Spec file added",i,n.specFile),console.log("File data",t);var a=atob(t.target.result.split("base64,")[1]);switch(a.indexOf("openapi: 3")>-1&&(i.specification_language="openapiv3"),a.indexOf("openapi: 2")>-1&&(i.specification_language="openapiv2"),a.indexOf("swagger: 2")>-1&&(i.specification_language="openapiv2"),a.indexOf('"openapi": "3')>-1&&(i.specification_language="openapiv3"),a.indexOf('"openapi": "2')>-1&&(i.specification_language="openapiv2"),a.indexOf('"swagger": "2.0"')>-1&&(i.specification_language="openapiv2"),a.indexOf('"swagger": "3.0"')>-1&&(i.specification_language="openapiv3"),i.specification_format){case"json":try{var o=JSON.parse(a);i.name=o.info?o.info.name?o.info.name:o.info.title:o.host}catch(e){console.log("Failed to parse json content",e)}break;case"yaml":try{o=f.load(a);i.name=o.info?o.info.name:o.host}catch(e){console.log("Failed to parse yaml content",e)}break;default:i.name="new integration"}i.specification=a,n.createIntegration(i),n.fileIsBeingLoaded=!1}))},showEditIntegration:function(e){this.selectedIntegration=e,this.showEditIntegrationDrawer=!0,this.newIntegration.name=e.name,this.newIntegration.root_path=e.root_path},deleteIntegration:function(){var e=this;console.log("Delete integration",this.selectedIntegration),this.deleteRow({tableName:"integration",reference_id:this.selectedIntegration.id}).then((function(t){e.showEditIntegrationDrawer=!1,e.selectedIntegration={},e.$q.notify({title:"Success",message:"Integration deleted"}),e.refresh()})).catch((function(t){e.$q.notify({title:"Failed",message:JSON.stringify(t)})}))},editIntegration:function(){var e=this;console.log("Delete integration",this.selectedIntegration),this.newIntegration.tableName="integration",this.newIntegration.id=this.selectedIntegration.id,this.updateRow(this.newIntegration).then((function(t){e.showEditIntegrationDrawer=!1,e.selectedIntegration={},e.$q.notify({title:"Success",message:"Integration updated"}),e.refresh()})).catch((function(t){e.$q.notify({title:"Failed",message:JSON.stringify(t)})}))},createIntegration:function(e){var t=this;console.log("new integration",e),e.tableName="integration",t.createRow(e).then((function(e){t.user={},t.$q.notify({message:"cloud integration created"}),t.refresh()})).catch((function(e){e instanceof Array?t.$q.notify({message:e[0].title}):t.$q.notify({message:"Failed to create integration"})}))}},Object(c["b"])(["loadData","getTableSchema","createRow","deleteRow","updateRow","executeAction"])),{},{refresh:function(){var e="integration",t=this;this.loadData({tableName:e,params:{fields:"name,specification_language,specification_format",page:{size:500}}}).then((function(e){console.log("Loaded data",e),t.integrations=e.data}))}}),data:function(){return d({text:"",fileIsBeingLoaded:!1,filterWord:null,selectedIntegration:{},showHelp:!1,specFile:[],newIntegration:{name:null,enable:!0,specification_format:null,specification:null,authentication_type:"token",authentication_specification:"{}",specification_language:null},showCreateIntegrationDrawer:!1,showEditIntegrationDrawer:!1,filter:null,integrations:[],columns:[{name:"name",field:"name",label:"cloud name",align:"left",sortable:!0}]},Object(c["d"])([]))},mounted:function(){this.refresh()},computed:d(d({filteredIntegrations:function(){var e=this;return console.log("filtered integragtions",e.filterWord,e.integrations),e.filterWord?this.integrations.filter((function(t){return t.name.toLowerCase().indexOf(e.filterWord.toLowerCase())>-1})):this.integrations}},Object(c["c"])(["selectedTable"])),Object(c["d"])([])),watch:{}},p=g,u=n("2877"),h=n("ead5"),m=n("0016"),w=n("079e"),b=n("eb85"),v=n("27f9"),I=n("f09f"),y=n("a370"),_=n("9c40"),C=n("de5e"),q=n("9404"),O=n("4983"),x=n("0378"),D=n("7d53"),k=n("eebe"),j=n.n(k),F=Object(u["a"])(p,i,o,!1,null,null,null);a["default"]=F.exports;j()(F,"components",{QBreadcrumbs:h["a"],QIcon:m["a"],QBreadcrumbsEl:w["a"],QSeparator:b["a"],QInput:v["a"],QCard:I["a"],QCardSection:y["a"],QBtn:_["a"],QPageSticky:C["a"],QDrawer:q["a"],QScrollArea:O["a"],QForm:x["a"],QFile:D["a"]})}}]);