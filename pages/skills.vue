<template lang="fr">
  <div class="container skills">
      <loading v-if="isLoading != 'false' "></loading>
      <menuToggle />
      <cursorMouse />
    <div class="skills-content">
        <section class="skills-content-grid">
            <SkillsWheel />
        </section>
        <img class="skills-content__img" src="../assets/svg/min/woman-helmet.svg">
    </div>
  </div>
</template>

<script>
  import menuToggle from '../components/menu-toggle.vue'
  import SkillsWheel from '../components/skills-wheel.vue'
  import cursorMouse from "../components/cursorMouse.vue";
  import loading from "../components/loading.vue";
  export default {
    name: "SkillsPage",
    transition: "page",
    data() {
      return {
        isLoading: sessionStorage.getItem("loading"),
      };
    },
    components: {
        menuToggle,
        SkillsWheel,
        cursorMouse,
        loading

    },

    mounted() {
      if (this.isLoading != "false" || this.isLoading == undefined) {
      setTimeout(() => {
        sessionStorage.setItem("loading", false);
        this.isLoading = "false";
      }, 3000);
    }
    }
  };
</script>

