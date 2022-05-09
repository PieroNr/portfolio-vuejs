<template lang="fr">
<div @wheel="horizontalScroll">
  <loading v-if="isLoading != 'false' "></loading>
  <menuToggle />
  <div id="wrapper-accueil" class="wrapper-accueil"  ref="wrapper">
  <section class="grid">

    <figure>
      <div>
        <img src="../assets/img/profil.png" >
        <p>YOSH !</p>
      </div>
    </figure>

    <figure>
      <div class="background">
        <div class="text">
          <h2>
            <span> - DEVMAN - </span>
            <span> FULLSTACK DEVELOPER WEB </span>
          </h2>
        </div>
      </div>
    </figure>

    <figure>
      <div class="fig-content">
        <img class="cell-img__woman" src="../assets/svg/woman-glasses.svg" >
        <div>
          <img class="cell-img__bubble" src="../assets/svg/bubble-1.svg" >
          <p>Passionné de web, de programmation,  de création et d’expériences digitales. J’aime prendre part à des projets toujours plus inovants et originals et je m’investis au maximum en tant que développeur fullstack. </p>
          <div class="button-wrapper">
            <a class="button" href="#" title="PROJECTS ->"></a>
          </div>
        </div>
      </div>
    </figure>
    
     <figure>
      <div>
        <img src="../assets/svg/light-1.svg" >
      </div>
    </figure>

    <figure>
      <div>
        <img src="../assets/svg/yeux.svg" >
      </div>
    </figure>

    <figure>
      <div>
        <div class="text">
          <h2>
            <span> WEB DEVELOPER</span>
            <span> DESIGNER</span>
            <span> BASED IN PARIS, FR</span>
          </h2>
        </div>
      </div>
    </figure>

    <figure>
      <div>
      </div>
    </figure>

    <figure>
      <div>
        <div class="text">
          <h2>
            <span> LAST PROJECT :</span>
          </h2>
        </div>
        <img src="../assets/svg/project-tablet.svg" >
      </div>
    </figure>

    <figure>
      <div>
      </div>
    </figure>
  
    <figure>
      <div>
          <h3>
            <span>Contact:</span>
          </h3>
          <img src="../assets/img/Instagram.png" >
          <img src="../assets/img/Linkedin.png" > 
      </div>
    </figure>

    <figure>
      <div>
        <img src="../assets/svg/phone.svg" >
      </div>
    </figure>

    <figure>
      <div>  
      </div>
    </figure>

    <figure>
      <div class="text">
      <h2>
        MULTIDISCIPLINAIRE
      </h2>
        <p>Etre polyvalent est une force dans le domaine du web, par 
        exemple pour faire face aux divers imprévus dans une 
        équipe. Aussi compétent côté front-end et back-end avec 
        une légère touche de création. Devman est le couteau 
        suisse des développeur ! </p>
        <div class="button-wrapper">
          <a class="button" href="#" title="COMPÉTENCES ->"></a>
        </div>
      </div>        
    </figure>
    
  
    
    <div class="copyright">2022 ZEENHO</div>
    
    

  </section>
  </div>
</div>
</div>
</template>


<style>


  @import '../assets/css/main.css';


</style>

<script>
  import menuToggle from '../components/menu-toggle.vue'
  import loading from '../components/loading.vue'
  export default {
    name: "IndexPage",
    transition: "page",
    data() {
      return {
        isLoading: sessionStorage.getItem('loading')
      };
    },
    components: {
        menuToggle,
        loading,
    },

    mounted(){
      
      if(this.isLoading != 'false' || this.isLoading == undefined){
        setTimeout(() => {
          sessionStorage.setItem('loading', false);
          this.isLoading = 'false';
        }, 3000);
      }
    },

    methods: {
      horizontalScroll(e){
        
        this.$refs.wrapper.scrollLeft += e.deltaY;
      }
    },
  };
</script>
