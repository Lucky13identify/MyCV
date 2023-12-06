<template>
  <section class="hero" :style="themeStyles">
    <div class="container hero-container animate__animated">
      <div class="img-container">
        <img
          class="photo"
          src="../../../src/assets/imges/my-photo.jpg"
          width="380"
          alt="Dmytro Smirnov photo"
        />
      </div>
      <div class="hero-info">
        <p class="hero-name">
          {{ $t("name_main") }}
        </p>
        <p class="hero-work">
          {{ $t("post_main") }}
        </p>
        <p class="hero-description">
          {{ $t("title_main") }}
        </p>
        <router-link class="hero-link" to="/about">
          {{ $t("button_main") }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
.hero {
  padding-top: 80px;
  padding-bottom: 30px;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
}
.hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;

    animation-name: fadeIn;
    animation-duration: 1.5s;
  }
  @media screen and (min-width: 1200px) {
    gap: 0;
    display: flex;
  }
}

.img-container {
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
}

.photo {
  border-radius: 50%;
}

.hero-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  text-align: center;

  @media screen and (min-width: 768px) {
    display: block;
    margin-top: 0px;
    width: 720px;

    text-align: left;
  }
  @media screen and (min-width: 1200px) {
    width: 800px;
  }
}

.hero-name {
  margin-bottom: 10px;

  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0px;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1200px) {
    margin: 0px;

    font-size: 70px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0px;
  }
}

.hero-work {
  margin-bottom: 25px;

  font-size: 30px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 40px;

    font-size: 40px;
    font-weight: 500;
    line-height: 130px;
    letter-spacing: 0px;
    margin: 0px;
  }
}

.hero-description {
  margin: 0px;

  padding-bottom: 30px;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0px;
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
