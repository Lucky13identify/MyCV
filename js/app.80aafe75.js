(function(){"use strict";var e={2328:function(e,t,o){var n=o(9242),a=o(3396);function s(e,t,o,s,r,i){const l=(0,a.up)("HeaderComponent"),c=(0,a.up)("RouterView"),u=(0,a.up)("ModalWindow"),d=(0,a.up)("ModalMenu"),m=(0,a.up)("ModalContact"),h=(0,a.up)("ThemeProvider");return(0,a.wg)(),(0,a.j4)(h,{theme:i.currentTheme},{default:(0,a.w5)((()=>[(0,a.Wm)(l),(0,a.Wm)(c),((0,a.wg)(),(0,a.j4)(a.lR,{to:"#modal"},[(0,a.Wm)(n.uT,{name:"fade"},{default:(0,a.w5)((()=>[e.$store.state.isModalOpen?((0,a.wg)(),(0,a.j4)(u,{key:0})):(0,a.kq)("",!0)])),_:1})])),((0,a.wg)(),(0,a.j4)(a.lR,{to:"#modal"},[(0,a.Wm)(n.uT,{name:"fade-left",class:"animate__animated"},{default:(0,a.w5)((()=>[e.$store.state.isModalPhoneOpen?((0,a.wg)(),(0,a.j4)(d,{key:0})):(0,a.kq)("",!0)])),_:1})])),((0,a.wg)(),(0,a.j4)(a.lR,{to:"#modal"},[(0,a.Wm)(n.uT,{name:"fade-right",class:"animate__animated"},{default:(0,a.w5)((()=>[e.$store.state.isModalPhoneContactsOpen?((0,a.wg)(),(0,a.j4)(m,{key:0})):(0,a.kq)("",!0)])),_:1})]))])),_:1},8,["theme"])}var r=o(7139);const i={key:0,class:"container"},l=["href"],c=["href"],u={key:1,class:"container"},d={class:"list"};function m(e,t,o,n,s,m){const h=(0,a.up)("HeaderSettings"),_=(0,a.up)("HeaderMenu"),p=(0,a.up)("ContactsComponent");return(0,a.wg)(),(0,a.iD)("header",{class:"header",style:(0,r.j5)(m.themeStyles)},[s.isWideScreen?((0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("button",{class:"open-button",onClick:t[0]||(t[0]=(...e)=>m.openModalMenu&&m.openModalMenu(...e))},[((0,a.wg)(),(0,a.iD)("svg",{class:"animate__animated",height:"40",width:"40",style:(0,r.j5)(m.themeStyles)},[(0,a._)("use",{href:s.icon+"#menu"},null,8,l)],4))]),(0,a.Wm)(h),(0,a._)("button",{class:"open-button",onClick:t[1]||(t[1]=(...e)=>m.openModalContacts&&m.openModalContacts(...e))},[((0,a.wg)(),(0,a.iD)("svg",{class:"animate__animated",height:"40",width:"40",style:(0,r.j5)(m.themeStyles)},[(0,a._)("use",{href:s.icon+"#address-book"},null,8,c)],4))])])):((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("ul",d,[(0,a.Wm)(_)]),(0,a.Wm)(h),(0,a.Wm)(p)]))],4)}const h={href:"https://www.linkedin.com/in/smirnov-dmytro/",target:"_blank",class:"contact"},_=["href"],p={href:"https://github.com/Lucky13identify",target:"_blank",class:"contact"},g=["href"],f={href:"https://t.me/D_Smirnov0113",target:"_blank",class:"contact"},k=["href"],b={href:"mailto:d.smirnov0113@gmail.com",target:"_blank",class:"contact"},v=["href"];function y(e,t,o,n,s,i){const l=(0,a.up)("Animate"),c=(0,a.up)("FlexContainer");return(0,a.wg)(),(0,a.j4)(c,null,{default:(0,a.w5)((()=>[(0,a._)("li",null,[(0,a._)("a",h,[(0,a.Wm)(l,{class:"animate__animated",style:(0,r.j5)(i.themeStyles)},{default:(0,a.w5)((()=>[(0,a._)("use",{href:s.icon+"#linkedin"},null,8,_)])),_:1},8,["style"])])]),(0,a._)("li",null,[(0,a._)("a",p,[(0,a.Wm)(l,{class:"animate__animated",style:(0,r.j5)(i.themeStyles)},{default:(0,a.w5)((()=>[(0,a._)("use",{href:s.icon+"#github"},null,8,g)])),_:1},8,["style"])])]),(0,a._)("li",null,[(0,a._)("a",f,[(0,a.Wm)(l,{class:"animate__animated",style:(0,r.j5)(i.themeStyles)},{default:(0,a.w5)((()=>[(0,a._)("use",{href:s.icon+"#telegram"},null,8,k)])),_:1},8,["style"])])]),(0,a._)("li",null,[(0,a._)("a",b,[(0,a.Wm)(l,{class:"animate__animated",style:(0,r.j5)(i.themeStyles)},{default:(0,a.w5)((()=>[(0,a._)("use",{href:s.icon+"#mail"},null,8,v)])),_:1},8,["style"])])])])),_:1})}var w=o(3884),j=o(7757);const M=j.ZP.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
  width: 100px;

  @media screen and (min-width: 768px) {
    margin: 0;
    gap: 10px;
    width: 100px;
  }
  @media screen and (min-width: 1200px) {
    margin: 0;
    gap: 20px;
    flex-wrap: nowrap;
    width: 200px;
  }
`,D=j.ZP.svg`
  width: 80px;
  height: 80px;

  fill: white;
  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: var(--fill-color);
    animation-name: heartBeat;
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;var T={data(){return{icon:w}},components:{FlexContainer:M,Animate:D},computed:{themeStyles(){return{"--fill-color":this.$store.state.isThemeDark?"#c2893c":"white"}}}},$=o(89);const P=(0,$.Z)(T,[["render",y]]);var S=P;const C=e=>((0,a.dD)("data-v-54d739a3"),e=e(),(0,a.Cn)(),e),O={class:"container"},x={class:"icon",height:"25 ",width:"25"},W=["href"],L={class:"flag-container"},E=C((()=>(0,a._)("span",{class:"fi fi-gb"},null,-1))),I=[E],A=C((()=>(0,a._)("span",{class:"fi fi-ua"},null,-1))),F=[A];function N(e,t,o,n,s,i){return(0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("button",{type:"button",class:"light",style:(0,r.j5)(i.themeStyles),onClick:t[0]||(t[0]=(...e)=>i.onChangeTheme&&i.onChangeTheme(...e))},[((0,a.wg)(),(0,a.iD)("svg",x,[(0,a._)("use",{href:s.icon+"#brightness-contrast"},null,8,W)]))],4),(0,a._)("div",L,[(0,a._)("button",{type:"button",class:"flag",style:(0,r.j5)(i.themeStyles),onClick:t[1]||(t[1]=e=>i.changeLanguage("en"))},I,4),(0,a._)("button",{type:"button",class:"flag",style:(0,r.j5)(i.themeStyles),onClick:t[2]||(t[2]=e=>i.changeLanguage("ua"))},F,4)])])}var z={data(){return{icon:w,isThemeDark:JSON.parse(localStorage.getItem("isThemeDark"))||!1}},methods:{onChangeTheme(){this.isThemeDark=!this.isThemeDark,this.$store.commit("changeTheme",this.isThemeDark),localStorage.setItem("isThemeDark",JSON.stringify(this.isThemeDark))},changeLanguage(e){this.$i18n.locale=e,localStorage.setItem("currentLanguage",e)},created(){const e=localStorage.getItem("currentLanguage");e&&(this.$i18n.locale=e)}},computed:{themeStyles(){return{"--bg-color":this.$store.state.isThemeDark?"rgba(30, 30, 30, 0.6)":"white","--fill-color":this.$store.state.isThemeDark?"gold":"darkblue","--color":this.$store.state.isThemeDark?"gold":"white"}}}};const B=(0,$.Z)(z,[["render",N],["__scopeId","data-v-54d739a3"]]);var q=B;const H={class:"list-item"},Z={class:"list-item"},R={class:"list-item"},U={class:"list-item"};function J(e,t,o,n,s,i){const l=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("li",H,[(0,a.Wm)(l,{style:(0,r.j5)(i.themeStyles),class:"link",to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("home_navigation")),1)])),_:1},8,["style"])]),(0,a._)("li",Z,[(0,a.Wm)(l,{style:(0,r.j5)(i.themeStyles),class:"link",to:"/about"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("about_navigation")),1)])),_:1},8,["style"])]),(0,a._)("li",R,[(0,a.Wm)(l,{style:(0,r.j5)(i.themeStyles),class:"link",to:"/skills"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("skills_navigation")),1)])),_:1},8,["style"])]),(0,a._)("li",U,[(0,a.Wm)(l,{style:(0,r.j5)(i.themeStyles),class:"link",to:"/projects"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("projects_navigation")),1)])),_:1},8,["style"])])],64)}var K={computed:{themeStyles(){return{"--color":this.$store.state.isThemeDark?"#c2893c":"white"}}}};const G=(0,$.Z)(K,[["render",J],["__scopeId","data-v-30fe31c1"]]);var V=G,Y={name:"HeaderComponent",components:{ContactsComponent:S,HeaderSettings:q,HeaderMenu:V},data(){return{icon:w,isWideScreen:window.innerWidth<768}},computed:{themeStyles(){return{"--backgroundColor":this.$store.state.isThemeDark?"rgba(30, 30, 30, 0.6)":"radial-gradient(circle, rgba(255, 225, 183, 1) 0%, rgba(194, 137, 60, 1) 67%)","--border":this.$store.state.isThemeDark?"1px solid grey":"rnone"}}},methods:{openModalContacts(){this.$store.commit("openModalContacts",!0)},openModalMenu(){this.$store.commit("openModalMenu",!0)},handleResize(){this.isWideScreen=window.innerWidth<768}},mounted(){window.addEventListener("resize",this.handleResize)},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}};const Q=(0,$.Z)(Y,[["render",m],["__scopeId","data-v-0bbb5765"]]);var X=Q;const ee={class:"modal"},te={class:"button-container"},oe={class:"icon",height:"20 ",width:"20"},ne=["href"],ae={class:"list"};function se(e,t,o,n,s,i){const l=(0,a.up)("HeaderMenu");return(0,a.wg)(),(0,a.iD)("div",{class:"overlay",style:(0,r.j5)(i.themeStyles),onClick:t[1]||(t[1]=(...e)=>i.closeModalOverlay&&i.closeModalOverlay(...e))},[(0,a._)("div",ee,[(0,a._)("div",te,[(0,a._)("button",{class:"close",type:"button",onClick:t[0]||(t[0]=(...e)=>i.closeModalButton&&i.closeModalButton(...e))},[((0,a.wg)(),(0,a.iD)("svg",oe,[(0,a._)("use",{href:s.icon+"#cross"},null,8,ne)]))])]),(0,a._)("ul",ae,[(0,a.Wm)(l)])])],4)}var re={data(){return{icon:w}},components:{HeaderMenu:V},methods:{closeModalOverlay(e){"overlay animate__animated"===e.target.className&&this.$store.commit("openModalMenu",!1)},closeModalButton(){this.$store.commit("openModalMenu",!1)}},computed:{themeStyles(){return{"--background-color":this.$store.state.isThemeDark?"rgba(40, 40, 40, 1)":"#c2893c","--icon":this.$store.state.isThemeDark?"white":"black"}}}};const ie=(0,$.Z)(re,[["render",se],["__scopeId","data-v-63a0201b"]]);var le=ie;const ce={class:"modal"},ue={class:"button-container"},de={class:"icon",height:"20 ",width:"20"},me=["href"];function he(e,t,o,n,s,i){const l=(0,a.up)("ContactsComponent");return(0,a.wg)(),(0,a.iD)("div",{class:"overlay",style:(0,r.j5)(i.themeStyles),onClick:t[1]||(t[1]=(...e)=>i.closeModalOverlay&&i.closeModalOverlay(...e))},[(0,a._)("div",ce,[(0,a._)("div",ue,[(0,a._)("button",{class:"close",type:"button",onClick:t[0]||(t[0]=(...e)=>i.closeModalButton&&i.closeModalButton(...e))},[((0,a.wg)(),(0,a.iD)("svg",de,[(0,a._)("use",{href:s.icon+"#cross"},null,8,me)]))])]),(0,a.Wm)(l)])],4)}var _e={data(){return{icon:w}},components:{ContactsComponent:S},methods:{closeModalOverlay(e){"overlay animate__animated"===e.target.className&&this.$store.commit("openModalContacts",!1)},closeModalButton(){this.$store.commit("openModalContacts",!1)}},computed:{themeStyles(){return{"--background-color":this.$store.state.isThemeDark?"rgba(40, 40, 40, 1)":"#c2893c","--icon":this.$store.state.isThemeDark?"white":"black"}}}};const pe=(0,$.Z)(_e,[["render",he],["__scopeId","data-v-5e9230e5"]]);var ge=pe,fe=o(3031);const ke={car:"rgba(255, 255, 255)"},be={car:"rgba(40, 40, 40, 0.8)"};var ve={name:"App",components:{HeaderComponent:X,ModalWindow:fe.Z,ModalMenu:le,ModalContact:ge,ThemeProvider:j.f6},computed:{currentTheme(){return this.$store.state.isThemeDark?be:ke}}};const ye=(0,$.Z)(ve,[["render",s],["__scopeId","data-v-799eec5a"]]);var we=ye,je=o(2483),Me=o(65),De=o(4161);De.Z.defaults.baseURL="https://654574c2fe036a2fa95452e8.mockapi.io";const Te=async()=>{try{const{data:e}=await De.Z.get("/projects");return e}catch(e){console.log(e)}},$e=async e=>{try{const{data:t}=await De.Z.get(`/projects/${e}`);return console.log(t),t}catch(t){console.log(t)}},Pe=localStorage.getItem("isThemeDark"),Se=(0,Me.MT)({state(){return{projects:[],oneProject:{},isModalOpen:!1,isModalPhoneOpen:!1,isModalPhoneContactsOpen:!1,isThemeDark:JSON.parse(Pe),isLanguageEng:!1}},mutations:{openModal(e,t){e.isModalOpen=t},openModalMenu(e,t){e.isModalPhoneOpen=t},openModalContacts(e,t){e.isModalPhoneContactsOpen=t},changeTheme(e,t){e.isThemeDark=t},changeLanguage(e,t){e.isLanguageEng=t},setServerData(e,t){e.projects=t},setOneProject(e,t){e.oneProject=t},deleteOneProject(e){e.oneProject={}}},actions:{fetchDataFromServer({commit:e}){Te().then((t=>{e("setServerData",t)})).catch((e=>{console.error("Ошибка при запросе данных с сервера:",e)}))},async fetchProjectFromServer({commit:e},t){try{const o=await $e(t);e("setOneProject",o)}catch(o){console.error("Ошибка при запросе данных с сервера:",o)}}}});var Ce=Se,Oe=o(7853);const xe=()=>o.e(630).then(o.bind(o,630)),We=()=>o.e(833).then(o.bind(o,5833)),Le=()=>o.e(200).then(o.bind(o,4237)),Ee=()=>o.e(404).then(o.bind(o,404)),Ie=localStorage.getItem("currentLanguage")||"ua",Ae=(0,Oe.o)({locale:Ie,messages:{en:o(9761),ua:o(8595)}});localStorage.setItem("isThemeDark",JSON.stringify(Ce.state.isThemeDark)),localStorage.setItem("currentLanguage",Ae.global.locale);const Fe=(0,je.p7)({history:(0,je.r5)(),routes:[{name:"Home",path:"/",component:Le},{name:"About",path:"/about",component:Ee},{name:"Skills",path:"/skills",component:xe},{name:"Projects",path:"/projects",component:We}]}),Ne=(0,n.ri)(we);Ne.use(Fe).use(Ce).use(Ae),Ne.component("ThemeProvider",j.f6),Ne.mount("#app")},3031:function(e,t,o){o.d(t,{Z:function(){return S}});var n=o(3396),a=o(7139);const s={key:0,class:"modal"},r={class:"button-container"},i={class:"icon",height:"20 ",width:"20"},l=["href"],c={class:"img-container"},u=["src"],d={class:"name-container"},m={key:0},h={class:"adding-container"},_={key:0,class:"tech-skill"},p={key:1,class:"tech-skill"},g={key:0,class:"project-notes"},f={class:"fat-header"},k={key:1,class:"project-description"},b={class:"tech-container"},v={class:"link-container"},y=["href"],w=["href"],j=["href"];function M(e,t,o,M,D,T){return e.$store.state.oneProject.name?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"overlay",onClick:t[1]||(t[1]=(...e)=>T.closeModalOverlay&&T.closeModalOverlay(...e)),style:(0,a.j5)(T.themeStyles)},[e.$store.state.isModalOpen?((0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",r,[(0,n._)("button",{class:"close",type:"button",onClick:t[0]||(t[0]=(...e)=>T.closeModalButton&&T.closeModalButton(...e))},[((0,n.wg)(),(0,n.iD)("svg",i,[(0,n._)("use",{href:D.icon+"#cross"},null,8,l)]))])]),(0,n._)("div",c,[(0,n._)("img",{class:"image",src:e.$store.state.oneProject.img},null,8,u)]),(0,n._)("div",d,[e.$store.state.oneProject.name?((0,n.wg)(),(0,n.iD)("h2",m,(0,a.zw)(T.getProjectName(e.$store.state.oneProject)),1)):(0,n.kq)("",!0),(0,n._)("div",h,[e.$store.state.oneProject.type?((0,n.wg)(),(0,n.iD)("p",_,(0,a.zw)(T.getProjectType(e.$store.state.oneProject)),1)):(0,n.kq)("",!0),e.$store.state.oneProject.design_type?((0,n.wg)(),(0,n.iD)("p",p,(0,a.zw)(T.getProjectDesign(e.$store.state.oneProject)),1)):(0,n.kq)("",!0)])]),e.$store.state.oneProject.notes?((0,n.wg)(),(0,n.iD)("p",g,[(0,n._)("span",f,(0,a.zw)(e.$t("notes_modal")),1),(0,n.Uk)((0,a.zw)(T.getProjectNote(e.$store.state.oneProject)),1)])):(0,n.kq)("",!0),(0,n._)("h3",null,(0,a.zw)(e.$t("description_modal")),1),e.$store.state.oneProject.description?((0,n.wg)(),(0,n.iD)("p",k,(0,a.zw)(T.getProjectDescription(e.$store.state.oneProject)),1)):(0,n.kq)("",!0),(0,n._)("h3",null,(0,a.zw)(e.$t("stack_modal")),1),(0,n._)("ul",b,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.$store.state.oneProject.tech_stack,(e=>((0,n.wg)(),(0,n.iD)("li",{class:"tech-skill",key:e.id},(0,a.zw)(e),1)))),128))]),(0,n._)("div",v,[e.$store.state.oneProject.repo_link?((0,n.wg)(),(0,n.iD)("a",{key:0,target:"_blank",class:"link-button",href:e.$store.state.oneProject.repo_link},(0,a.zw)(e.$t("button_front_modal")),9,y)):(0,n.kq)("",!0),e.$store.state.oneProject.backend_link?((0,n.wg)(),(0,n.iD)("a",{key:1,target:"_blank",class:"link-button",href:e.$store.state.oneProject.backend_link},(0,a.zw)(e.$t("button_back_modal")),9,w)):(0,n.kq)("",!0),e.$store.state.oneProject.page_link?((0,n.wg)(),(0,n.iD)("a",{key:2,target:"_blank",class:"link-button",href:e.$store.state.oneProject.page_link},(0,a.zw)(e.$t("button_live_modal")),9,j)):(0,n.kq)("",!0)])])):(0,n.kq)("",!0)],4)):(0,n.kq)("",!0)}var D=o(3884),T={data(){return{icon:D,show:!0}},methods:{getProjectDesign(e){const t=this.$i18n.locale;return e.design_type[t]},getProjectName(e){const t=this.$i18n.locale;return e.name[t]},getProjectType(e){const t=this.$i18n.locale;return e.type[t]},getProjectNote(e){const t=this.$i18n.locale;return e.notes[t]},getProjectDescription(e){const t=this.$i18n.locale;return e.description[t]},closeModalOverlay(e){"overlay"===e.target.className&&(this.$store.commit("openModal",!1),this.$store.commit("deleteOneProject"))},closeModalButton(){this.$store.commit("openModal",!1),this.$store.commit("deleteOneProject")},onEscCloseModal(e){"Escape"===e.key&&this.closeModalButton()}},computed:{themeStyles(){return{"--background-color":this.$store.state.isThemeDark?"rgba(40, 40, 40, 1)":"#f5f5f5","--color":this.$store.state.isThemeDark?"white":"black","--color-tech":this.$store.state.isThemeDark?"white":"#FFFFFF","--icon":this.$store.state.isThemeDark?"white":"black","--overlay":this.$store.state.isThemeDark?"rgba(120, 120, 120, 0.5)":"rgba(18, 20, 23, 0.6)"}}},created(){window.addEventListener("keydown",this.onEscCloseModal)},beforeUnmount(){window.removeEventListener("keydown",this.onEscCloseModal)}},$=o(89);const P=(0,$.Z)(T,[["render",M],["__scopeId","data-v-60091158"]]);var S=P},3884:function(e,t,o){e.exports=o.p+"img/symbol-defs.30d0e106.svg"},9761:function(e){e.exports=JSON.parse('{"home_navigation":"Home","about_navigation":"About","skills_navigation":"Skills","projects_navigation":"Projects","name_main":"Dmytro Smirnov","post_main":"Fullstack developer","title_main":"Welcome to my resume website! Here, you can learn more about me, explore my projects, and get a detailed overview of my skills.","button_main":"Learn more","header_about":"Let\'s get acquainted!","text_about_partOne":"Hello!","text_about_partTwo":"My name is Dmytro.","text_about_partThree":"I am a full-stack developer with a successful track record of completing projects that encompass various libraries, technologies, and frameworks. This website is also a product of my work. My main advantage is persistence and an unwavering goal to achieve success. I have excellent timing during the work process, ensuring that projects are completed on time and even ahead of schedule, as I understand the value of time. The drive for results motivates me to finish every process successfully.","text_about_partFour":"I will be a valuable asset to your company, and together we will achieve great results!","education_header_about":"Education","goit_about":"IT School \'GoIT\'","goit_description_about":"Fullstack developer - my сertificate.","franko_about":"Ivan Franko national university of Lviv","franko_description_about":"Master of accounting and taxation.","krok_about":"Project Managment in «KROK» university ","krok_description_about":"Project planning and execution. Practical lessons in Microsoft Project.","ntu_about":"Kiev National transport university","ntu_description_about":"Bachelor of logistics specialty.","ktek_about":"\'Kiev transport and economic college\' of national transport university","ktek_description_about":"Junior Specialist, organization of transportation services on automobile transport, honors degree.","work_header_about":"Work experience","crowe_about":"AC CROWE Ukraine","crowe_position_about":"Accountant-auditor A2.","crowe_description_about":"Project work on the preparation of financial statements, communication with the client.","crowe_achievements_about":"Prepared and trained interns to work on projects.","baker_about":"Baker Tilly Ukraine","baker_position_about":"Trainee, accountant-auditor A1.","baker_description_about":"Assistance in preparing financial statements in accordance with IFRS. Communication with the client. Teamwork on projects.","position":"Position","description":"Description","achievements":"Achievements","tech_header_skills":"Tech skills","bundlers_skills":"Project bundlers","databases_skills":"Databases","additions_skills":"Additions","vcs_skills":"Version control systems","work_skills":"Work with","web_skills":"Web technologies","languages_header_skills":"Languages","eng_language":"English - intermediate","ua_language":"Ukrainian - native","soft_header_skills":"Soft skills","strong_soft":"Strong-willed","goal_soft":"Goal-oriented","team_soft":"Team-work","deadline_soft":"Meet the deadline","notes_modal":"Notes: ","description_modal":"Description: ","stack_modal":"Tech stack of the project:","button_front_modal":"Frontend repository","button_back_modal":"Backend repository","button_live_modal":"Live page"}')},8595:function(e){e.exports=JSON.parse('{"home_navigation":"Головна","about_navigation":"Про мене","skills_navigation":"Навички","projects_navigation":"Проекти","name_main":"Дмитро Смірнов","post_main":"Fullstack розробник","title_main":"Ласкаво прошу на мій веб-сайт резюме! Тут ви можете дізнатися більше про мене, мої проекти та отримати детальний огляд моїх навичок.","button_main":"Детальніше","header_about":"Давайте знайомитися!","text_about_partOne":"Вітаю!","text_about_partTwo":"Мене звати Дмитро.","text_about_partThree":"Я fullstack розробник та маю досвід успішного завершення проектів, які охоплють різні бібліотеки, технології та фреймворки. Завдяки ним створено і цей веб-сайт. Моєю головною перевагою є наполегливість і невідступна мета досягти успіху. Я маю чудовий таймінг під час робочого процесу. Це гарантує, що проекти завершуватимуться вчасно та, навіть, раніше графіку, оскільки я чудово розумію цінність часу. Жага до результату не дає мені залишати жоден процес незавершеним.","text_about_partFour":"Я буду вагомою ланкою для вашої компанії, і разом ми досягнемо великих результатів!","education_header_about":"Освіта","goit_about":"IT школа \'Goit\'","goit_description_about":"Fullstack розробник - мій сертифікат.","franko_about":"Львівський національний університет імені Івана Франка","franko_description_about":"Магістр бухгалтерського обліку та оподаткування.","krok_about":"Управління проектами, університет \'КРОК\'","krok_description_about":"Планування та реалізація проекту. Практичні заняття в Microsoft Project.","ntu_about":"Національний транспортний університет","ntu_description_about":"Бакалавр за спеціальністю логістика.","ktek_about":"Київський транспортно-економічний коледж Національного транспортного університету","ktek_description_about":"Молодший спеціаліст, організація транспортних послуг на автомобільному транспорті, диплом з відзнакою.","work_header_about":"Досвід роботи","crowe_about":"AC CROWE Україна","crowe_position_about":"Бухгалтер-ревізор A2.","crowe_description_about":"Проектна робота з підготовки фінансової звітності, спілкування з клієнтом.","crowe_achievements_about":"Готував та навчав стажерів для роботи над проектами.","baker_about":"Бейкер тіллі Україна","baker_position_about":"Cтажер, бухгалтер-ревізор A1.","baker_description_about":"Допомога в складанні фінансової звітності за МСФЗ. Спілкування з клієнтом. Командна робота над проектами.","position":"Посада","description":"Опис","achievements":"Досягнення","tech_header_skills":"Технічні скіли","bundlers_skills":"Збірки проекту","databases_skills":"Бази даних","additions_skills":"Додатково","vcs_skills":"Системи контролю версій","work_skills":"Працюю із","web_skills":"Веб технології","languages_header_skills":"Мови","eng_language":"Англійська - середня","ua_language":"Українська - носій","soft_header_skills":"Софт скіли","strong_soft":"Вольовничість","goal_soft":"Цілеспрямованість","team_soft":"Командний гравець","deadline_soft":"Дотримання дедлайнів","notes_modal":"Примітки: ","description_modal":"Опис: ","stack_modal":"Технічний стек проекту:","button_front_modal":"Frontend сховище","button_back_modal":"Backend сховище","button_live_modal":"Жива сторінка"}')}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,s){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],s=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(i=!1,s<r&&(r=s));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,a,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{200:"c0c158f1",404:"ff117190",630:"1892d3a0",833:"6128aab9"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{200:"60681f3b",404:"f164b30b",630:"d725cf10",833:"1b5ec370"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-cv:";o.l=function(n,a,s,r){if(e[n])e[n].push(a);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+s){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+s),i.src=n),e[n]=[a];var m=function(t,o){i.onerror=i.onload=null,clearTimeout(h);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(o)})),t)return t(o)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/MyCV/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,n,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var r=function(o){if(s.onerror=s.onload=null,"load"===o.type)n();else{var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=i,s.parentNode&&s.parentNode.removeChild(s),a(l)}};return s.onerror=s.onload=r,s.href=t,o?o.parentNode.insertBefore(s,o.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var a=o[n],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===e||s===t))return a}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){a=r[n],s=a.getAttribute("data-href");if(s===e||s===t)return a}},n=function(n){return new Promise((function(a,s){var r=o.miniCssF(n),i=o.p+r;if(t(r,i))return a();e(n,i,null,a,s)}))},a={143:0};o.f.miniCss=function(e,t){var o={200:1,404:1,630:1,833:1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};o.f.j=function(t,n){var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var s=new Promise((function(o,n){a=e[t]=[o,n]}));n.push(a[2]=s);var r=o.p+o.u(t),i=new Error,l=function(n){if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",i.name="ChunkLoadError",i.type=s,i.request=r,a[1](i)}};o.l(r,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,r=n[0],i=n[1],l=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var u=l(o)}for(t&&t(n);c<r.length;c++)s=r[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},n=self["webpackChunkmy_cv"]=self["webpackChunkmy_cv"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(2328)}));n=o.O(n)})();
//# sourceMappingURL=app.80aafe75.js.map