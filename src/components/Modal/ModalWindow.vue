<template>
  <div
    class="overlay"
    @click="closeModalOverlay"
    :style="themeStyles"
    v-if="$store.state.oneProject.name"
  >
    <div v-if="$store.state.isModalOpen" class="modal">
      <ButtonContainer>
        <Close type="button" @click="closeModalButton">
          <svg class="icon" height="20 " width="20">
            <use :href="icon + '#cross'"></use>
          </svg>
        </Close>
      </ButtonContainer>
      <ImgContainer>
        <img class="image" :src="$store.state.oneProject.img" />
      </ImgContainer>
      <NameContainer>
        <h2 v-if="$store.state.oneProject.name">
          {{ getProjectName($store.state.oneProject) }}
        </h2>
        <AddingContainer>
          <p v-if="$store.state.oneProject.type" class="tech-skill">
            {{ getProjectType($store.state.oneProject) }}
          </p>
          <p v-if="$store.state.oneProject.design_type" class="tech-skill">
            {{ getProjectDesign($store.state.oneProject) }}
          </p>
        </AddingContainer>
      </NameContainer>
      <ProjectNotes v-if="$store.state.oneProject.notes">
        <FatHeader>{{ $t("notes_modal") }} </FatHeader
        >{{ getProjectNote($store.state.oneProject) }}
      </ProjectNotes>
      <h3>{{ $t("description_modal") }}</h3>
      <ProjectDescription v-if="$store.state.oneProject.description">
        {{ getProjectDescription($store.state.oneProject) }}
      </ProjectDescription>
      <h3>{{ $t("stack_modal") }}</h3>
      <TechContainer>
        <li
          class="tech-skill"
          v-for="tech in this.$store.state.oneProject.tech_stack"
          :key="tech.id"
        >
          {{ tech }}
        </li>
      </TechContainer>
      <LinkContainer>
        <LinkButton
          v-if="$store.state.oneProject.repo_link"
          target="_blank"
          :href="$store.state.oneProject.repo_link"
          >{{ $t("button_front_modal") }}</LinkButton
        >
        <LinkButton
          v-if="$store.state.oneProject.backend_link"
          target="_blank"
          :href="$store.state.oneProject.backend_link"
          >{{ $t("button_back_modal") }}</LinkButton
        >
        <LinkButton
          v-if="$store.state.oneProject.page_link"
          target="_blank"
          :href="$store.state.oneProject.page_link"
          >{{ $t("button_live_modal") }}</LinkButton
        >
      </LinkContainer>
    </div>
  </div>
</template>

<script>
import icon from "../../assets/icons/symbol-defs.svg";
import {
  ButtonContainer,
  Close,
  ImgContainer,
  NameContainer,
  AddingContainer,
  ProjectNotes,
  FatHeader,
  ProjectDescription,
  TechContainer,
  LinkContainer,
  LinkButton,
} from "./ModalWindow.styled";

export default {
  data() {
    return {
      icon,
      show: true,
    };
  },
  components: {
    ButtonContainer,
    Close,
    ImgContainer,

    NameContainer,
    AddingContainer,
    ProjectNotes,
    FatHeader,
    ProjectDescription,
    TechContainer,
    LinkContainer,
    LinkButton,
  },
  methods: {
    getProjectDesign(project) {
      const currentLocale = this.$i18n.locale;
      return project.design_type[currentLocale];
    },
    getProjectName(project) {
      const currentLocale = this.$i18n.locale;
      return project.name[currentLocale];
    },
    getProjectType(project) {
      const currentLocale = this.$i18n.locale;
      return project.type[currentLocale];
    },
    getProjectNote(project) {
      const currentLocale = this.$i18n.locale;
      return project.notes[currentLocale];
    },
    getProjectDescription(project) {
      const currentLocale = this.$i18n.locale;
      return project.description[currentLocale];
    },
    closeModalOverlay(e) {
      if (e.target.className === "overlay") {
        this.$store.commit("openModal", false);
        this.$store.commit("deleteOneProject");
      }
    },
    closeModalButton() {
      this.$store.commit("openModal", false);
      this.$store.commit("deleteOneProject");
    },

    onEscCloseModal(event) {
      if (event.key === "Escape") {
        this.closeModalButton();
      }
    },
  },
  computed: {
    themeStyles() {
      return {
        "--background-color": this.$store.state.isThemeDark
          ? "rgba(40, 40, 40, 1)"
          : "#f5f5f5",
        "--color": this.$store.state.isThemeDark ? "white" : "black",
        "--color-tech": this.$store.state.isThemeDark ? "white" : "#FFFFFF",
        "--icon": this.$store.state.isThemeDark ? "white" : "black",
        "--overlay": this.$store.state.isThemeDark
          ? "rgba(120, 120, 120, 0.5)"
          : "rgba(18, 20, 23, 0.6)",
      };
    },
  },
  created() {
    window.addEventListener("keydown", this.onEscCloseModal);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.onEscCloseModal);
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: var(--overlay);
  backdrop-filter: blur(4px);
  z-index: 100;
}
.modal {
  position: relative;
  top: 50%;
  left: 50%;
  width: 270px;
  height: 90%;

  padding: 20px;
  border-radius: 15px;

  background: var(--background-color);
  color: var(--color);
  overflow-y: auto;

  transform: translate(-50%, -50%);

  @media screen and (min-width: 480px) {
    width: 400px;
    height: 90%;
  }

  @media screen and (min-width: 768px) {
    width: 600px;
    height: 90%;
  }
  @media screen and (min-width: 1200px) {
    width: 1000px;
    height: 90%;
  }
}

.icon {
  fill: var(--icon);
  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: #c2893c;
  }
}

.image {
  border-radius: 20px;
}
.name-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
}
.adding-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
}
.tech-skill {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  border-radius: 20px;

  background-color: rgba(194, 137, 60, 0.5);
  color: var(--color-tech);
}
.project-notes {
  margin-bottom: 20px;
}
.fat-header {
  font-weight: bold;
}
.project-description {
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: justify;
}
.tech-container {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  margin-bottom: 60px;
  gap: 10px;
}

.link-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 1200px) {
    justify-content: flex-end;
  }
}

.link-button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;

  width: 90px;
  height: 26px;
  border-radius: 6px;

  background: #c2893c;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out 0s;

  &:hover,
  &:focus {
    background: #854f04;
  }
}
</style>
