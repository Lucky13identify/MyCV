<template>
  <ThemeProvider :theme="currentTheme">
    <HeaderComponent />
    <RouterView />
    <teleport to="#modal">
      <transition name="fade">
        <ModalWindow v-if="$store.state.isModalOpen"
      /></transition>
    </teleport>
    <teleport to="#modal">
      <transition name="fade-left" class="animate__animated">
        <ModalMenu v-if="$store.state.isModalPhoneOpen"
      /></transition>
    </teleport>
    <teleport to="#modal">
      <transition name="fade-right" class="animate__animated">
        <ModalContact v-if="$store.state.isModalPhoneContactsOpen"
      /></transition> </teleport
  ></ThemeProvider>
</template>

<script>
import HeaderComponent from "./components/Header/HeaderComponent.vue";
import ModalMenu from "./components/ModalMenu/ModalMenu";
import ModalContact from "./components/ModalContacts/ModalContact";
import ModalWindow from "./components/Modal/ModalWindow";
import { ThemeProvider } from "vue3-styled-components";
import { lightTheme, darkTheme } from "./styles/styles";

export default {
  name: "App",
  components: {
    HeaderComponent,
    ModalWindow,
    ModalMenu,
    ModalContact,
    ThemeProvider,
  },

  computed: {
    currentTheme() {
      return this.$store.state.isThemeDark ? darkTheme : lightTheme;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-right-enter-active {
  animation-name: fadeInRight;
}
.fade-right-leave-active {
  animation-name: fadeOutRight;
}

.fade-left-enter-active {
  animation-name: fadeInLeft;
}
.fade-left-leave-active {
  animation-name: fadeOutLeft;
}
</style>
