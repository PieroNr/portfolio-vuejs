<template>
<div class="about">
  <loading v-if="isLoading != 'false' "></loading>
  <menuToggle />
    <div class="about-container">
        <div class="bubble-content">
            <img class="bubble-img" src="../assets/svg/bubble-2.svg" >
            <p class="bubble-text"></p>
        </div>
        
        <img class="profil-img" src="../assets/img/profil-2.png" >
        <div class="about-content">
            <img class="logo bounce" src="../assets/img/Logo.png">
            <div class="about-text">
            <p>Hi! I’m Piero Neri. A young <span style="color:blue">Fr</span><span style="color:white">en</span><span style="color:red">ch</span> fullsatck web developer in training since 2018 and currently studying at the Hetic digital school in Montreuil, In the Paris region. I enrich my knowledge every day to apply them in my personal and professional projects. I like to create original designs and user experiences to improve my job. If you’re interested in my profile, let’s team up! </p>
            <div class="contact-links"><a href="https://www.linkedin.com/in/piero-neri-39719b195/" target="_blank">LinkedIn</a><a href="https://github.com/PieroNr" target="_blank">GitHub</a><a href="https://www.instagram.com/beastcartoondraft/?hl=fr" target="_blank">Instagram</a></div>
            <a href="mailto:piero.neri@hotmail.fr" target="_blank">Mail</a>
            </div>
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
  import { TimelineMax  } from 'gsap';
  import $ from 'jquery';
  export default {
    name: "AboutPage",
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

      $(".logo").on("mouseenter", function() {
        var duration = 1;
        TweenMax.to(this, duration / 4, {y:-50, ease:Power1.easeOut});
        TweenMax.to(this, duration / 2, {y:0, ease:Bounce.easeOut, delay:duration / 4});
        });

        TweenLite.set('.about-text',{y:'+120%'})
        TweenLite.set('.profil-img',{x:'-120%'})
        TweenLite.set('.bubble-img',{scale:'0'})

        var lines = new TimelineMax({repeat:0, yoyo:false, delay: 0.5})
        .to('.about-text',1,{y:'0%'})
        .to('.profil-img',1,{x:'0%'})
        
        var nbClicks = 0;
        var bubbleText = ["Aïe", "Ouch", "AAH", "Ok Ok I leave ..."]
        $(".profil-img").on("click", function() {
        TweenMax.to('.bubble-img', 0.2, {scale:1, ease:Power1.easeOut});
        $(".bubble-text").text(bubbleText[nbClicks]);
        nbClicks++;
        if(nbClicks==4){
            TweenMax.to('.profil-img', 1, {x:'-120%', ease:Power1.easeOut});
            TweenMax.to('.bubble-content', 1, {x:'-120%', ease:Power1.easeOut});
        }
        });
        

        
    },
   
    };
</script>