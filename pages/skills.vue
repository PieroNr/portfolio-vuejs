<template lang="fr">
  <div class="container skills">
      <menuToggle />
    <div class="skills-content">
        <section class="skills-content-grid">
            <SkillsWheel />
        </section>
        <img class="skills-content__img" src="../assets/svg/min/woman-helmet.svg">
    </div>
  </div>
</template>

<script>
import menuToggle from "../components/menu-toggle.vue";
import SkillsWheel from "../components/skills-wheel.vue";
export default {
  name: "SkillsPage",
  transition: "page",
  components: {
    menuToggle,
    SkillsWheel,
  },
};
</script>

<style>
@import "../assets/css/main.css";
</style>
