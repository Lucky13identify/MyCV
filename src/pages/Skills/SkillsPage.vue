<template>
  <div class="container-style" :style="themeStyles">
    <section class="skills animate__animated">
      <div class="container">
        <h2 class="skills-header">{{ $t("tech_header_skills") }}</h2>
        <div class="flex-container">
          <TechSkills />
          <LibrariesSkills />
          <BuildersSkills />
          <DatabasesSkills />
          <FeaturesSkills />
          <LibrariesForProjectsSkills />
        </div>
        <div class="soft-container">
          <div>
            <h2 class="skills-header">{{ $t("soft_header_skills") }}</h2>
            <SoftSkills />
          </div>
          <div>
            <h2 class="skills-header">{{ $t("languages_header_skills") }}</h2>
            <LanguagesSkills />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BuildersSkills from "../../components/Skills/BuildersSkills";
import DatabasesSkills from "../../components/Skills/DatabasesSkills.vue";
import FeaturesSkills from "../../components/Skills/FeaturesSkills.vue";
import LanguagesSkills from "../../components/Skills/LanguagesSkills.vue";
import LibrariesForProjectsSkills from "../../components/Skills/LibrariesForProjectsSkills.vue";
import LibrariesSkills from "../../components/Skills/LibrariesSkills.vue";
import SoftSkills from "../../components/Skills/SoftSkills.vue";
import TechSkills from "../../components/Skills/TechSkills.vue";

export default {
  name: "SkillsPage",
  components: {
    BuildersSkills,
    DatabasesSkills,
    FeaturesSkills,
    LanguagesSkills,
    LibrariesForProjectsSkills,
    LibrariesSkills,
    SoftSkills,
    TechSkills,
  },
  computed: {
    themeStyles() {
      return {
        backgroundColor: this.$store.state.isThemeDark
          ? "rgba(40, 40, 40, 0.8)"
          : "rgba(255, 255, 255)",
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
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}

.skills {
  padding-top: 40px;
  padding-bottom: 40px;
  animation-name: fadeIn;
  animation-duration: 1.5s;
}

.skills-header {
  margin-bottom: 30px;

  font-weight: 700;
  font-size: 22px;
  line-height: 1.4;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.soft-container {
  display: flex;
  flex-wrap: wrap;

  margin-top: 80px;
  gap: 50px;
}
</style>
