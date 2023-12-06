<template>
  <HeroSection :style="themeStyles">
    <HeroContainer class="container">
      <ImgContainer>
        <img
          class="photo"
          src="../../../src/assets/imges/my-photo.jpg"
          width="380"
          alt="Dmytro Smirnov photo"
        />
      </ImgContainer>
      <HeroInfoContainer>
        <HeroName>
          {{ $t("name_main") }}
        </HeroName>
        <HeroWork>
          {{ $t("post_main") }}
        </HeroWork>
        <HeroDescription>
          {{ $t("title_main") }}
        </HeroDescription>
        <router-link class="hero-link" to="/about">
          {{ $t("button_main") }}
        </router-link>
      </HeroInfoContainer>
    </HeroContainer>
  </HeroSection>
</template>

<script>
import {
  HeroSection,
  HeroContainer,
  ImgContainer,
  HeroInfoContainer,
  HeroName,
  HeroWork,
  HeroDescription,
} from "./MainComponent.styled.js";

export default {
  components: {
    HeroSection,
    HeroContainer,
    ImgContainer,
    HeroInfoContainer,
    HeroName,
    HeroWork,
    HeroDescription,
  },
  computed: {
    themeStyles() {
      return {
        backgroundColor: this.$store.state.isThemeDark
          ? "rgba(40, 40, 40, 0.8)"
          : "rgba(255, 255, 255)",
        backdropFilter: "blur(10px)",
        color: this.$store.state.isThemeDark ? "white" : "black",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.photo {
  border-radius: 50%;
}

.hero-link {
  padding: 10px;
  border-radius: 12px;

  cursor: pointer;
  background-color: #c2893c;
  color: white;

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #854f04;
  }
}
</style>
