<template>
  <div class="container-style" :style="themeStyles">
    <section class="about-me">
      <div class="container animate__animated">
        <div class="about-container">
          <AboutMe />
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              :src="'https://www.youtube.com/embed/YYb3oGi3KGc'"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="info-container">
          <div><EducationExperience /></div>
          <div><WorkExperience /></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AboutMe from "../../components/AboutMe/AboutMeInfo/AboutMeInfo.vue";
import EducationExperience from "../../components/AboutMe/EducationExperience/EducationExperience.vue";
import WorkExperience from "../../components/AboutMe/WorkExperience/WorkExperience.vue";

export default {
  name: "AboutMePage",
  data() {
    return { isWideScreen: window.innerWidth > 768 };
  },
  components: {
    AboutMe,
    EducationExperience,
    WorkExperience,
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
.container-style {
  background-color: rgba(80, 80, 80, 0.4);
  backdrop-filter: blur(10px);
}

.about-me {
  padding-top: 40px;
  padding-bottom: 40px;
}
.animate__animated {
  animation-name: fadeIn;
  animation-duration: 1.5s;
}

.about-container {
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-bottom: 80px;
  width: 100%;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
}
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 40px;
}
.info-container {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 200px;
  }
}
</style>
