<template>
  <header class="header" :style="themeStyles">
    <Container class="container" v-if="isWideScreen">
      <OpenButton @click="openModalMenu">
        <svg
          class="animate__animated"
          height="40"
          width="40"
          :style="themeStyles"
        >
          <use :href="icon + '#menu'"></use>
        </svg>
      </OpenButton>
      <HeaderSettings />
      <OpenButton @click="openModalContacts">
        <svg
          class="animate__animated"
          height="40"
          width="40"
          :style="themeStyles"
        >
          <use :href="icon + '#address-book'"></use>
        </svg>
      </OpenButton>
    </Container>
    <div class="container" v-else>
      <List>
        <HeaderMenu />
      </List>
      <HeaderSettings />
      <ContactsComponent />
    </div>
  </header>
</template>

<script>
import ContactsComponent from ".././Contacts/ContactsComponent/ContactsComponent.vue";
import HeaderSettings from ".././HeaderSettings/HeaderSettings";
import HeaderMenu from ".././HeaderMenu/HeaderMenu";
import icon from "../../assets/icons/symbol-defs.svg";
import { Container, OpenButton, List } from "./HeaderComponent.styled";

export default {
  name: "HeaderComponent",
  components: {
    ContactsComponent,
    HeaderSettings,
    HeaderMenu,
    Container,
    OpenButton,
    List,
  },
  data() {
    return { icon, isWideScreen: window.innerWidth < 768 };
  },
  computed: {
    themeStyles() {
      return {
        "--backgroundColor": this.$store.state.isThemeDark
          ? "rgba(30, 30, 30, 0.6)"
          : "radial-gradient(circle, rgba(255, 225, 183, 1) 0%, rgba(194, 137, 60, 1) 67%)",
        "--border": this.$store.state.isThemeDark ? "1px solid grey" : "rnone",
      };
    },
  },
  methods: {
    openModalContacts() {
      this.$store.commit("openModalContacts", true);
    },
    openModalMenu() {
      this.$store.commit("openModalMenu", true);
    },
    handleResize() {
      this.isWideScreen = window.innerWidth < 768;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: baseline;

  background: var(--backgroundColor);
  backdrop-filter: blur(10px);
  border-bottom: var(--border);
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
