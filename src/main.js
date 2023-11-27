import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import store from "./vuex/store";
import { createI18n } from "vue-i18n";

const SkillsPage = () => import("./pages/Skills/SkillsPage.vue");
const ProjectsPage = () => import("./pages/Projects/ProjectsPage.vue");
const MainPage = () => import("./pages/MainPage/MainPage.vue");
const AboutMePage = () => import("./pages/AboutMe/AboutMePage.vue");

const initialLocale = localStorage.getItem("currentLanguage") || "ua";

const i18n = createI18n({
  locale: initialLocale,
  messages: {
    en: require("./languages/en.json"),
    ua: require("./languages/ua.json"),
  },
});

localStorage.setItem("isThemeDark", JSON.stringify(store.state.isThemeDark));
localStorage.setItem("currentLanguage", i18n.global.locale);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: "Home", path: "/", component: MainPage },
    { name: "About", path: "/about", component: AboutMePage },
    { name: "Skills", path: "/skills", component: SkillsPage },
    { name: "Projects", path: "/projects", component: ProjectsPage },
  ],
});

createApp(App).use(router).use(store).use(i18n).mount("#app");
