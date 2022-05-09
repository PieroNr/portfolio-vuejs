<template lang="fr">
<div>
  <menuToggle />
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
  export default {
    name: "ProjectPage",
    transition: "page",
    components: {
        menuToggle
    }
  };

</script>

<style>
@import '../assets/css/main.css';
</style>