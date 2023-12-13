<template>
  <Projects>
    <div class="container">
      <FlexContainer>
        <ListOfProjects
          v-for="project in this.$store.state.projects"
          :key="project.id"
          :project="project"
        />
      </FlexContainer>
    </div>
  </Projects>
</template>

<script>
import ListOfProjects from "../ListOfProjects/ListOfProjects.vue";
import { Projects, FlexContainer } from "./ContainerOfProjects.styled";

export default {
  name: "ContainerOfProjects",
  components: { ListOfProjects, Projects, FlexContainer },
};
</script>

<style lang="scss" scoped></style>
