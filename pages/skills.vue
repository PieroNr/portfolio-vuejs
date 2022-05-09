<template lang="fr">
  <div class="skills">
      <menuToggle />
    <div class="wrapper-skills">
        <section class="grid">
            <SkillsWheel />
        </section>
        <img src="../assets/svg/woman-helmet.svg">
    </div>
  </div>
</template>
<style>

    @import '../assets/css/main.css';

    
</style>
<script>
  import menuToggle from '../components/menu-toggle.vue'
  import SkillsWheel from '../components/skills-wheel.vue'
  export default {
    name: "SkillsPage",
    transition: "page",
    components: {
        menuToggle,
        SkillsWheel

    }
  };


</script>