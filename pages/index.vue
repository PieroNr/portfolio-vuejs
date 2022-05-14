<template lang="fr">
<horizontal-scroll>
<div class="container home" >
  <loading v-if="isLoading != 'false' "></loading>
  <menuToggle />
  <cursorMouse />
  
  <div class="black-overlay"></div>
  <div class="home-content" >
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
            <span> - Piero Neri - </span>
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
          <p class="cell-content__text --smallt">Passionate about web, programming, creation and digital experiences. I like to take part in projects always more inovants and originals and I invest to the maximum as a fullstack developer. </p>
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
        <img id="eye" class="cell-content__img --eye" src="../assets/svg/min/yeux.svg" >
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
        <NuxtLink to="/projects"><img class="cell-content__img --tabletProject" src="../assets/svg/min/project-tablet.svg" ></NuxtLink>
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
          <div class="cell-content-text">
            <p  class="cell-content__text --smallt">
              - LinkedIn : <a href="https://www.linkedin.com/in/piero-neri-39719b195/">Piero Neri</a>
            </p>
            <p  class="cell-content__text --smallt">
              - Instagram : <a href="https://www.instagram.com/beastcartoondraft/?hl=fr">@beastcartoondraft</a>
            </p>
            <p  class="cell-content__text --smallt">
              - Email : <a href="mailto:piero.neri@hotmail.fr">piero.neri@hotmail.fr</a>
            </p>
            <p  class="cell-content__text --smallt">
              - GitHub : <a href="https://github.com/PieroNr">PieroNr</a>
            </p>
          </div>
          
          
      </div>
    </figure>

    <figure class="home-content-grid__cell">
      <div class="cell-content">
        <img class="cell-content__img --phone" src="../assets/svg/min/phone.svg" >
      </div>
    </figure>

    <figure class="home-content-grid__cell">
      <div class="cell-content"> 
        <h2 class="cell-content__text --titleSecond">
            <span> Soon ...</span>
          </h2> 
      </div>
    </figure>

    <figure class="home-content-grid__cell">
      <div class="cell-content">
        <h2 class="cell-content__text --titleSecond">
          MULTIDISCIPLINARY
        </h2>
        <p  class="cell-content__text --smallt">Being versatile is a force in the web domain, by 
        example to deal with the various unforeseen in a 
        team. Also competent front-end and back-end with 
        a touch of creation. Devman is the knife 
        Swiss Developer! </p>
        <div class="button-wrapper">
          <NuxtLink class="button" to="/skills" title="SKILLS ->"></NuxtLink>
        </div>
      </div>        
    </figure>
    
  
    
    <div class="home-content-grid__copyright">2022 Piero NERI</div>
    
    

  </section>
  </div>
</div>
</div>
</horizontal-scroll>
</template>

<script>
import menuToggle from "../components/menu-toggle.vue";
import loading from "../components/loading.vue";
import cursorMouse from "../components/cursorMouse.vue";
import $ from "jquery";
import { TweenLite, TweenMax, Power1, Power2 } from "gsap";
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css';
export default {
  name: "IndexPage",
  transition: "page",
  data() {
    return {
      isLoading: sessionStorage.getItem("loading"),
    };
  },
  beforeCreate: function() {
        document.body.className = 'homeBody';
  },
  destroyed () {
    document.body.classList.remove('homeBody')
  },
  components: {
    menuToggle,
    loading,
    cursorMouse,
    HorizontalScroll
  },

  mounted() {
    if (this.isLoading != "false" || this.isLoading == undefined) {
      setTimeout(() => {
        sessionStorage.setItem("loading", false);
        this.isLoading = "false";
      }, 3000);
    }

    const imgEye = document.getElementById('eye');
    imgEye.parentNode.addEventListener("mouseenter", function( event ) {
      imgEye.src="_nuxt/assets/svg/min/eye_closed.svg";  
    });
    imgEye.parentNode.addEventListener("mouseleave", function( event ) {
      imgEye.src="_nuxt/assets/svg/min/yeux.svg";
    });


    
    
    
    TweenMax.to(".--light", 0.7, {
      y: "-=20px",
      yoyo: true,
      repeat: -1,
      ease: Power2.easeOut, //,
    });
    let nbClick = 3;
    $(".--light").on("click", function () {
      TweenMax.fromTo(
        this,
        0.01,
        { x: -50 },
        { x: 50, clearProps: "x", repeat: 40 }
      );
      TweenMax.fromTo(
        this,
        0.02,
        { y: -50 },
        { y: 50, clearProps: "y", repeat: 20 }
      );
      nbClick--;
      if (nbClick == 0) {
        $(".--light").css("opacity", "0");
        $(".black-overlay").css("display", "block");
        $(".--light").parent().css("background", "black");
        $(".--light").parent().parent().css("z-index", "4");
        $(".--light").after(
          '<p class="cell-content__text --smallt">Oh no... the light bulb... it\'s broken</p>'
        );
      }
    });

    TweenLite.set(".--phone", { transformOrigin: "center top" });

    TweenMax.to(".--phone", 1, {
      rotation: 10,
      repeat: -1,
      ease: Power1.easeOut,
      yoyo: true,
    });
  },
  
  
};
</script>

<style>
@import "../assets/css/main.css";
</style>
