"use strict";(self["webpackChunkmy_cv"]=self["webpackChunkmy_cv"]||[]).push([[285],{5285:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var s=n(3396),a=n(7139);const r={key:0,class:"container"},i={key:1,class:"flex-container"};function o(e,t,n,o,c,l){const p=(0,s.up)("ContainerOfProjects"),d=(0,s.up)("PulseLoader");return(0,s.wg)(),(0,s.iD)("div",{class:"container-style animate__animated",style:(0,a.j5)(l.themeStyles)},[this.$store.state.projects.length>0?((0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(p)])):((0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(d)]))],4)}const c={class:"projects"},l={class:"container"},p={class:"flex-container"};function d(e,t,n,a,r,i){const o=(0,s.up)("ListOfProjects");return(0,s.wg)(),(0,s.iD)("section",c,[(0,s._)("div",l,[(0,s._)("ul",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.$store.state.projects,(e=>((0,s.wg)(),(0,s.j4)(o,{key:e.id,project:e},null,8,["project"])))),128))])])])}const u=["href"],h={class:"img-container"},m=["src"],y={class:"info-container"},g={class:"project-name"},v={class:"flex-container"};function f(e,t,n,r,i,o){return(0,s.wg)(),(0,s.iD)("li",{class:"project",style:(0,a.j5)(o.themeStyles)},[(0,s._)("a",{class:"project-link",href:n.project.page_link},[(0,s._)("div",h,[(0,s._)("img",{width:"350",height:"210",class:"project-img",src:n.project.img,alt:""},null,8,m)])],8,u),(0,s._)("div",y,[(0,s._)("h2",g,(0,a.zw)(i.getProjectName(n.project,e.$i18n)),1),(0,s._)("div",v,[(0,s._)("button",{class:"project-button",type:"button",onClick:t[0]||(t[0]=(...e)=>o.openModal&&o.openModal(...e))},(0,a.zw)(e.$t("button_main")),1)])])],4)}var j=n(8938);function D(e,t){const n=t.locale;return e.name[n]}var _={data(){return{ModalWindow:j.Z,getProjectName:D}},methods:{openModal(){this.$store.commit("openModal",!0),this.$store.dispatch("fetchProjectFromServer",this.project.id)}},props:["project"],computed:{themeStyles(){return{"--background-color":this.$store.state.isThemeDark?"none":"#E0E0E0","--border-color":this.$store.state.isThemeDark?"1px solid grey":"none","--shadow":this.$store.state.isThemeDark?"0 20px 16px -16px rgba(194, 137, 60, 0.8)":"0 20px 16px -16px rgba(0, 0, 0, 0.6)"}}}},b=n(89);const k=(0,b.Z)(_,[["render",f],["__scopeId","data-v-7ca31b04"]]);var w=k,S={name:"ContainerOfProjects",components:{ListOfProjects:w}};const P=(0,b.Z)(S,[["render",d],["__scopeId","data-v-432ae5d8"]]);var x=P,$=n(9242);const C={class:"v-spinner"};function z(e,t,n,r,i,o){return(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",C,[(0,s._)("div",{class:"v-pulse v-pulse1",style:(0,a.j5)([i.spinnerStyle,i.spinnerDelay1])},null,4),(0,s._)("div",{class:"v-pulse v-pulse2",style:(0,a.j5)([i.spinnerStyle,i.spinnerDelay2])},null,4),(0,s._)("div",{class:"v-pulse v-pulse3",style:(0,a.j5)([i.spinnerStyle,i.spinnerDelay3])},null,4)],512)),[[$.F8,n.loading]])}var M={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}};const T=(0,b.Z)(M,[["render",z]]);var F=T,L={name:"ProjectsPage",components:{ContainerOfProjects:x,PulseLoader:F},created(){this.fetchData()},methods:{fetchData(){this.$store.dispatch("fetchDataFromServer")}},computed:{themeStyles(){return{backgroundColor:this.$store.state.isThemeDark?"rgba(40, 40, 40, 0.8)":"rgba(255, 255, 255)",color:this.$store.state.isThemeDark?"white":"black"}}}};const O=(0,b.Z)(L,[["render",o],["__scopeId","data-v-469815fc"]]);var Z=O}}]);
//# sourceMappingURL=285.ee83ff25.js.map