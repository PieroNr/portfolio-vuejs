<template lang="fr">
<div class="container home" >
  <loading v-if="isLoading != 'false' "></loading>
  <menuToggle />
  <div class="home-content" @wheel="horizontalScroll" ref="wrapper" >
  <section class="home-content-grid">

    <figure class="home-content-grid__cell">
      <div class="cell-content">
        <img class="cell-content__img" src="../assets/img/profil.webp" >
        <span class="cell-content__text --bigt">YOSH !</span>
      </div>
    </figure>

    <figure class="home-content-grid__cell">
      <div class="cell-content" >
        <div class="cell-content-textContent">
          <h1 class="cell-content__text --titleFirst">
            <span> - DEVMAN - </span>
            <span> FULLSTACK DEVELOPER WEB </span>
          </h1>
        </div>
      </div>
    </figure>

    <figure class="home-content-grid__cell">
      <div class="cell-content">
        <img class="cell-content__img --woman" src="../assets/svg/min/woman-glasses.svg" >
        <div>
          <img class="cell-content__img --bubble" src="../assets/svg/min/bubble-1.svg" >
          <p class="cell-content__text --smallt">Passionné de web, de programmation,  de création et d’expériences digitales. J’aime prendre part à des projets toujours plus inovants et originals et je m’investis au maximum en tant que développeur fullstack. </p>
          <div class="button-wrapper">
            <NuxtLink class="button" to="/projects" title="PROJECTS ->"></NuxtLink>
          </div>
        </div>
      </div>
    </figure>
    
     <figure class="home-content-grid__cell">
      <div class="cell-content">
        <img class="cell-content__img --light" src="../assets/svg/min/light-1.svg" >
      </div>
    </figure>

    <figure class="home-content-grid__cell">
      <div class="cell-content">
        <img class="cell-content__img --eye" src="../assets/svg/min/yeux.svg" >
      </div>
    </figure>

    <figure class="home-content-grid__cell">
      <div class="cell-content">
        <div class="cell-content-textContent">
          <h2 class="cell-content__text --titleSecond">
            <span> WEB DEVELOPER</span>
            <span> DESIGNER</span>
            <span> BASED IN PARIS, FR</span>
          </h2>
        </div>
      </div>
    </figure>

    <figure class="home-content-grid__cell">
      <div class="cell-content">
      </div>
    </figure>

    <figure class="home-content-grid__cell">
      <div class="cell-content">
        <div class="cell-content-textContent">
          <h2 class="cell-content__text --titleSecond">
            <span> LAST PROJECT :</span>
          </h2>
        </div>
        <img class="cell-content__img --tabletProject" src="../assets/svg/min/project-tablet.svg" >
      </div>
    </figure>

    <figure class="home-content-grid__cell">
      <div class="cell-content">
      </div>
    </figure>
  
    <figure class="home-content-grid__cell">
      <div class="cell-content">
          <h3 class="cell-content__text --titleThird">
            <span>Contact:</span>
          </h3>
          <a href="https://www.linkedin.com/in/piero-neri-39719b195/" target="_blank"><img class="cell-content__img --linkedin" src="../assets/img/Linkedin.png" > </a>
          <a href="https://www.instagram.com/beastcartoondraft/?hl=fr" target="_blank"><img class="cell-content__img --instagram" src="../assets/img/Instagram.png" ></a>
          
      </div>
    </figure>

    <figure class="home-content-grid__cell">
      <div class="cell-content">
        <img class="cell-content__img --phone" src="../assets/svg/min/phone.svg" >
      </div>
    </figure>

    <figure class="home-content-grid__cell">
      <div class="cell-content">  
      </div>
    </figure>

    <figure class="home-content-grid__cell">
      <div class="cell-content">
        <h2 class="cell-content__text --titleSecond">
          MULTIDISCIPLINAIRE
        </h2>
        <p  class="cell-content__text --smallt">Etre polyvalent est une force dans le domaine du web, par 
        exemple pour faire face aux divers imprévus dans une 
        équipe. Aussi compétent côté front-end et back-end avec 
        une légère touche de création. Devman est le couteau 
        suisse des développeur ! </p>
        <div class="button-wrapper">
          <NuxtLink class="button" to="/skills" title="COMPÉTENCES ->"></NuxtLink>
        </div>
      </div>        
    </figure>
    
  
    
    <div class="home-content-grid__copyright">2022 Piero NERI</div>
    
    

  </section>
  </div>
</div>
</div>
</template>

<script>
import menuToggle from "../components/menu-toggle.vue";
import loading from "../components/loading.vue";
import $ from "jquery";
export default {
  name: "IndexPage",
  transition: "page",
  data() {
    return {
      isLoading: sessionStorage.getItem("loading"),
    };
  },
  components: {
    menuToggle,
    loading,
  },

  mounted() {
    if (this.isLoading != "false" || this.isLoading == undefined) {
      setTimeout(() => {
        sessionStorage.setItem("loading", false);
        this.isLoading = "false";
      }, 3000);
    }
  },

  methods: {
    horizontalScroll(e) {
      $("body").scrollLeft += e.deltaY;
    },
  },
};
</script>

<style>
@import "../assets/css/main.css";
</style>
