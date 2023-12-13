<template>
  <div class="overlay" :style="themeStyles" @click="closeModalOverlay">
    <div class="modal">
      <ButtonContainer>
        <Close type="button" @click="closeModalButton">
          <svg class="icon" height="20 " width="20">
            <use :href="icon + '#cross'"></use>
          </svg>
        </Close>
      </ButtonContainer>
      <List>
        <HeaderMenu />
      </List>
    </div>
  </div>
</template>

<script>
import icon from "../../assets/icons/symbol-defs.svg";
import HeaderMenu from ".././HeaderMenu/HeaderMenu";
import { ButtonContainer, Close, List } from "./ModalMenu.styled";

export default {
  data() {
    return {
      icon,
    };
  },
  components: { HeaderMenu, ButtonContainer, Close, List },
  methods: {
    closeModalOverlay(e) {
      if (e.target.className === "overlay animate__animated") {
        this.$store.commit("openModalMenu", false);
      }
    },
    closeModalButton() {
      this.$store.commit("openModalMenu", false);
    },
  },
  computed: {
    themeStyles() {
      return {
        "--background-color": this.$store.state.isThemeDark
          ? "rgba(40, 40, 40, 1)"
          : "#c2893c",
        "--icon": this.$store.state.isThemeDark ? "white" : "black",
      };
    },
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
  padding: 20px;
  top: 52%;
  left: 28%;
  width: 50%;
  height: 100%;
  border-radius: 15px;

  transform: translate(-50%, -50%);
  background: var(--background-color);

  color: white;
  overflow-y: auto;
}

.icon {
  fill: var(--icon);
  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: white;

    @media screen and (min-width: 1200px) {
      fill: #2a9c68;
    }
  }
}
</style>
