<template>
  <Container class="container">
    <button
      type="button"
      class="light"
      :style="themeStyles"
      @click="onChangeTheme"
    >
      <svg class="icon" height="25 " width="25">
        <use :href="icon + '#brightness-contrast'"></use>
      </svg>
    </button>
    <FlagContainer>
      <Flag type="button" :style="themeStyles" @click="changeLanguage('en')">
        <span class="fi fi-gb"></span>
      </Flag>
      <Flag type="button" :style="themeStyles" @click="changeLanguage('ua')">
        <span class="fi fi-ua"></span>
      </Flag>
    </FlagContainer>
  </Container>
</template>

<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import icon from "../../assets/icons/symbol-defs.svg";
import { Container, Flag, FlagContainer } from "./HeaderSettings.styled.js";

export default {
  components: { Container, Flag, FlagContainer },
  data() {
    return {
      icon,
      isThemeDark: JSON.parse(localStorage.getItem("isThemeDark")) || false,
    };
  },
  methods: {
    onChangeTheme() {
      this.isThemeDark = !this.isThemeDark;
      this.$store.commit("changeTheme", this.isThemeDark);
      localStorage.setItem("isThemeDark", JSON.stringify(this.isThemeDark));
    },

    changeLanguage(lang) {
      this.$i18n.locale = lang;

      localStorage.setItem("currentLanguage", lang);
    },

    created() {
      const storedLanguage = localStorage.getItem("currentLanguage");
      if (storedLanguage) {
        this.$i18n.locale = storedLanguage;
      }
    },
  },

  computed: {
    themeStyles() {
      return {
        "--bg-color": this.$store.state.isThemeDark
          ? "rgba(30, 30, 30, 0.6)"
          : "white",
        "--fill-color": this.$store.state.isThemeDark ? "gold" : "darkblue",
        "--color": this.$store.state.isThemeDark ? "gold" : "white",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.light {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  border-radius: 50%;

  border: none;

  cursor: pointer;
  background-color: transparent;
  fill: var(--color);

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--bg-color);
    fill: var(--fill-color);
  }
}
</style>
