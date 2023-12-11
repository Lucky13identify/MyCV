<template>
  <FlexContainer>
    <li>
      <a
        href="https://www.linkedin.com/in/smirnov-dmytro/"
        target="_blank"
        class="contact"
      >
        <Animate class="animate__animated" :style="themeStyles">
          <use :href="icon + '#linkedin'"></use></Animate
      ></a>
    </li>
    <li>
      <a
        href="https://github.com/Lucky13identify"
        target="_blank"
        class="contact"
      >
        <Animate class="animate__animated" :style="themeStyles">
          <use :href="icon + '#github'"></use></Animate
      ></a>
    </li>
    <li>
      <a href="https://t.me/D_Smirnov0113" target="_blank" class="contact">
        <Animate class="animate__animated" :style="themeStyles">
          <use :href="icon + '#telegram'"></use></Animate
      ></a>
    </li>
    <li>
      <a href="mailto:d.smirnov0113@gmail.com" target="_blank" class="contact">
        <Animate class="animate__animated" :style="themeStyles">
          <use :href="icon + '#mail'"></use></Animate
      ></a>
    </li>
  </FlexContainer>
</template>

<script>
import "animate.css";
import icon from "../../assets/icons/symbol-defs.svg";
import { FlexContainer, Animate } from "./ContactsComponent.styled";

export default {
  data() {
    return {
      icon,
    };
  },
  components: { FlexContainer, Animate },
  computed: {
    themeStyles() {
      return {
        "--fill-color": this.$store.state.isThemeDark ? "#c2893c" : "white",
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
