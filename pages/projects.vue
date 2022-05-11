<template lang="fr">
<div>
  <loading v-if="isLoading != 'false' "></loading>
  <menuToggle />
  <cursorMouse />
  <div class="projects-container">

    <div class="projects-overlay">

    </div>

    <div class="projects">
        <div class="project">
            <div class="project-fond"> </div>
            <div class="project-title">
                <h2> Projet de site web ayant pour but la vente d'une montre connecté </h2>
            </div>

            <div class="project-image">
                <img src="../assets/svg/min/montre.svg">
            </div>
        </div>
        <div class="projects-navigation">
            <span class="projects-montre"> <img src="../assets/svg/montre.svg"> </img> </span>
            <span class="projects-musee"> <img src="../assets/svg/montre.svg"> </img> </span>
            <span class="projects-webResponsables"> <img src="../assets/svg/montre.svg"> </img> </span>
            <span class="projects-festival"> <img src="../assets/svg/montre.svg"> </img> </span>
            <span class="projects-dashboard"> <img src="../assets/svg/montre.svg"> </img> </span>
            <span class="projects-autreProjet"> <img src="../assets/svg/montre.svg"> </img> </span>
        </div>
    </div>

    


      
  </div>
</div>
</template>

<script>
  import menuToggle from '../components/menu-toggle.vue'
  import cursorMouse from "../components/cursorMouse.vue";
  import loading from "../components/loading.vue";
  export default {
    name: "ProjectPage",
    transition: "page",
    data() {
      return {
        isLoading: sessionStorage.getItem("loading"),
      };
    },
    components: {
        menuToggle,
        cursorMouse,
        loading
    },
    mounted(){
      if (this.isLoading != "false" || this.isLoading == undefined) {
      setTimeout(() => {
        sessionStorage.setItem("loading", false);
        this.isLoading = "false";
      }, 3000);
    }
    }
  };

</script>

<style>
@import '../assets/css/main.css';
</style>