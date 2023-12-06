<template>
  <Header>{{ $t("work_header_about") }}</Header>
  <FlexContainer>
    <FlexElement>
      <Subtitle>{{ $t("crowe_about") }} (2021 - 2022)</Subtitle>
      <Description>
        <ContainerDescription>
          <HeaderDescription>{{ $t("position") }}:</HeaderDescription>
          <p class="text-description" :style="themeStyles">
            {{ $t("crowe_position_about") }}
          </p>
        </ContainerDescription>
        <ContainerDescription>
          <HeaderDescription>{{ $t("description") }}:</HeaderDescription>
          <p class="text-description" :style="themeStyles">
            {{ $t("crowe_description_about") }}
          </p>
        </ContainerDescription>
        <ContainerDescription>
          <HeaderDescription>{{ $t("achievements") }}:</HeaderDescription>
          <p class="text-description" :style="themeStyles">
            {{ $t("crowe_achievements_about") }}
          </p>
        </ContainerDescription>
      </Description>
    </FlexElement>
    <FlexElement>
      <Subtitle>{{ $t("baker_about") }} (2019 - 2021)</Subtitle>
      <Description>
        <ContainerDescription>
          <HeaderDescription>{{ $t("position") }}:</HeaderDescription>
          <p class="text-description" :style="themeStyles">
            {{ $t("baker_position_about") }}
          </p>
        </ContainerDescription>
        <ContainerDescription>
          <HeaderDescription>{{ $t("description") }}:</HeaderDescription>
          <p class="text-description" :style="themeStyles">
            {{ $t("baker_description_about") }}
          </p>
        </ContainerDescription>
      </Description>
    </FlexElement>
  </FlexContainer>
</template>

<script>
import {
  Header,
  FlexContainer,
  FlexElement,
  Subtitle,
  Description,
  ContainerDescription,
  HeaderDescription,
} from "./WorkExperience.styled";

export default {
  components: {
    Header,
    FlexContainer,
    FlexElement,
    Subtitle,
    Description,
    ContainerDescription,
    HeaderDescription,
  },
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
.text-description {
  width: 100%;
  color: var(--color);
}
</style>
