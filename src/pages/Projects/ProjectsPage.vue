<template>
  <div class="container-style animate__animated" :style="themeStyles">
    <div v-if="this.$store.state.projects.length > 0">
      <ContainerOfProjects />
    </div>
    <div v-else class="flex-container"><PulseLoader /></div>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import ContainerOfProjects from "../../components/Projects/ContainerOfProjects/ContainerOfProjects.vue";

export default {
  name: "ProjectsPage",
  components: { ContainerOfProjects, PulseLoader },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.dispatch("fetchDataFromServer");
    },
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
  height: 100%;
  animation-name: fadeIn;
  animation-duration: 1.5s;
}

.flex-container {
  display: flex;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 80px;
}
</style>
