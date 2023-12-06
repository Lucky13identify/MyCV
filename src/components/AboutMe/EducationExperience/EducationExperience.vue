<template>
  <Header>{{ $t("education_header_about") }}</Header>
  <FlexContainer>
    <FlexElement>
      <Subtitle>{{ $t("goit_about") }} (2022 - 2023)</Subtitle>
      <p class="description" :style="themeStyles">
        {{ $t("goit_description_about") }}
      </p>
    </FlexElement>
    <FlexElement>
      <Subtitle>{{ $t("franko_about") }} (2021 - 2023)</Subtitle>
      <p class="description" :style="themeStyles">
        {{ $t("franko_description_about") }}
      </p>
    </FlexElement>
    <FlexElement>
      <Subtitle>{{ $t("krok_about") }} (2018 - 2019)</Subtitle>
      <p class="description" :style="themeStyles">
        {{ $t("krok_description_about") }}
      </p>
    </FlexElement>
    <FlexElement>
      <Subtitle>{{ $t("ntu_about") }} (2018 - 2021)</Subtitle>
      <p class="description" :style="themeStyles">
        {{ $t("ntu_description_about") }}
      </p>
    </FlexElement>
    <FlexElement>
      <Subtitle>
        {{ $t("ktek_about") }}
        (2014 - 2018)
      </Subtitle>
      <p class="description" :style="themeStyles">
        {{ $t("ktek_description_about") }}
      </p>
    </FlexElement>
  </FlexContainer>
</template>

<script>
import {
  Header,
  FlexContainer,
  FlexElement,
  Subtitle,
} from "./EducationExperience.styled";

export default {
  components: { Header, FlexContainer, FlexElement, Subtitle },
  computed: {
    themeStyles() {
      return {
        "--color": this.$store.state.isThemeDark
          ? "rgb(150, 150, 150)"
          : "rgb(110, 110, 110)",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.description {
  font-size: 16px;
  width: 100%;
  color: var(--color);
}
</style>
