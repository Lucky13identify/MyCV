<template>
  <FlexContainer>
    <Header>{{ $t("header_about") }}</Header>
    <div>
      <Text>{{ $t("text_about_partOne") }}</Text>
      <Text>{{ $t("text_about_partTwo") }}</Text>
      <Text>{{ $t("text_about_partThree") }}</Text>
      <Text>{{ $t("text_about_partFour") }}</Text>
    </div>
  </FlexContainer>
</template>

<script>
import { FlexContainer, Text, Header } from "./AboutMeInfo.styled";

export default {
  name: "AboutMe",
  components: { FlexContainer, Text, Header },
};
</script>

<style lang="scss" scoped></style>
