<template lang="fr">
<div>
  <loading v-if="isLoading != 'false' "></loading>
  <menuToggle />
  <cursorMouse />
  
  <div class="container projects">

    <div class="projects-content">
    <div class="blue projects-content__firstSlide">
      
      <p class="firstSlide__text">Etre polyvalent est une force dans le domaine du web, par exemple pour faire face 
        aux divers imprévus dans une équipe. Aussi compétent côté front-end et back-end avec une légère touche de création. 
        Devman est le couteau suisse des développeur !</p>
      <div class="firstSlide__img">
        <img src="../assets/svg/min/Homme.svg" alt="">
      </div>
      <img src="../assets/img/scroll.gif" alt="" class="scroll">

      

    </div>

    <div id="panels" class="projects-content-content">

      <div id="panels-container"  class="projects-content-content__slide">
        <article id="panel-1" class="slide secondSlide">
          <div class="slide-container">
            <div class="slide-container-row">

              <div class="slide-container-row-text">

                <h2 class="slide-container-row-text__titleSecond">Hangover - 2022 (Current project)</h2>
                <b>Scholl project (HETIC) - <span style="color: red;">unpublished</span></b>

                <p class="slide-container-row-text__smallt">
                  Hangover is a digital services platform for music events. It will consist of a management interface, interactive display and a mobile application. You will find an interactive map to find your friends, find your way around the space, find the sorting points, the information points, the rescue, the shopping stands, but also on a social side with the possibility to share images and messages for a live display on giant interactive screens, or to share these same contents on his profile as well as in his news feed. 
                  </p>
                <div class="slide-container-row-text-tech">
                  <span>React Native</span>
                  <span>Three</span>
                  <span>Vue</span>
                  <span>Symfony</span>
                </div>
                <div class="slide-container-row-text-link">
                  
                </div>

                
              </div>

              <div class="slide-container-row-img">

                <img src="../assets/img/projects/Hangover-1.png" alt="">
                <img src="../assets/img/projects/Hangover-2.png" alt="">
                

              </div>
              
            </div>
          </div>
        </article>
        <article id="panel-2" class="slide">
          <div class="slide-container">
            <div class="slide-container-row">
              <div class="slide-container-row-text">

                <h2 class="slide-container-row-text__titleSecond">Pilot-i - 2022 (Current project)</h2>
                <b>Pro project - <span style="color: red;">Private</span></b>

                <p class="slide-container-row-text__smallt">
                  Pilot-i is an internal tool at the Pôle-Emploi IT Division. Create and develop as part of my alternation. The objective is to facilitate, centralize and enhance access to the information available from the incubator and on past and current start-ups under incubation. 

                  The project sets up a real work team and sees its influence increase every day.
                  </p>
                <div class="slide-container-row-text-tech">
                  <span>Angular</span>
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>Docker</span>
                </div>


                
              </div>

              <div class="slide-container-row-img">

                <img src="../assets/img/projects/Piloti.png" alt="">
                
                

              </div>
              
            </div>
          </div>
        </article>
        <article id="panel-3" class="slide">
          <div class="slide-container">
            <div class="slide-container-row">
              <div class="slide-container-row-text">

                <h2 class="slide-container-row-text__titleSecond">WebResponsable - 2021</h2>
                <b>School project</b>

                <p class="slide-container-row-text__smallt">
                  Webresponsable is a project within the framework of my Webdesign license. The goal was to create an informative and accessible web hazard warning platform for all ages in 1 week.
                  My version of this platform contains several instructional articles as well as quizzes to verify the knowledge acquired by the user.
                  Wordpress has helped me to create articles more simply as well as to link them to the different quizzes and offers a good content management.

                  </p>
                <div class="slide-container-row-text-tech">
                  <span>Wordpress</span>
                </div>
                <div class="slide-container-row-text-link"> 
                  <a href="https://webresponsable.pieronr.fr/" target="_blank"
              rel="noopener noreferrer">Website</a>
                </div>


                
              </div>

              <div class="slide-container-row-img">

                <img src="../assets/img/projects/Webresponsable-1.png" alt="">
                
                
                

              </div>
              
            </div>
          </div>
        </article>
        <article id="panel-4" class="slide">
          <div class="slide-container">
            <div class="slide-container-row">
              <div class="slide-container-row-text">

                <h2 class="slide-container-row-text__titleSecond">Apto Band - 2021</h2>
                <b>School project</b>

                <p class="slide-container-row-text__smallt">
                  Apto Band is a group Webdesign License project. The objective was to produce a single-product e-commerce website promoting a smart watch of our choice and to introduce us to the use of the wooCommerce plugin of Wordpress as well as to the purchasing process.
                  We use wordpress for the plugin as well as for simple management of different versions of our product

                  </p>
                <div class="slide-container-row-text-tech">
                  <span>Wordpress</span>
                </div>
                <div class="slide-container-row-text-link"> 
                  <a href="https://github.com/PieroNr/WP_APTO_Theme" target="_blank"
              rel="noopener noreferrer">Github</a>
                  <a href="https://aptoband.pieronr.fr/" target="_blank"
              rel="noopener noreferrer">Website</a>
                </div>


                
              </div>

              <div class="slide-container-row-img">

                <img src="../assets/img/projects/Aptoband.png" alt="">
                
                
                

              </div>
            </div>
          </div>
        </article>
        <article id="panel-5" class="slide">
          <div class="slide-container">
            <div class="slide-container-row">
              <div class="slide-container-row-text">

                <h2 class="slide-container-row-text__titleSecond">Website Maison de la Négritude - 2020</h2>
                <b>School project</b>

                <p class="slide-container-row-text__smallt">
                  This project is part of the Webdesign License. The objective was the redesign of a site of our knowledge. I chose the site of a museum near me whose human rights exhibitions I love. I was able to take the menu tree and improve the design by evaluating the competition.
                  I use Wordpress for static content management as well as for its accessibility and translation plugins.

                  </p>
                <div class="slide-container-row-text-tech">
                  <span>Wordpress</span>
                </div>
                <div class="slide-container-row-text-link"> 
                  <a href="https://museenegritude.pieronr.fr/" target="_blank"
              rel="noopener noreferrer">Website</a>
                </div>


                
              </div>

              <div class="slide-container-row-img">

                <img src="../assets/img/projects/Musee.png" alt="">
                
                
                

              </div>
            </div>
          </div>
        </article>
        <article id="panel-6" class="slide">
          <div class="slide-container">
            <div class="slide-container-row">
              <div class="slide-container-row-text">

                <h2 class="slide-container-row-text__titleSecond">Others... - 2018 -> 2022</h2>
                <b>Various</b>

                <p class="slide-container-row-text__smallt">
                  Since 2018 I have been able to carry out many projects, whether professional, academic or personal, ranging from design creation to website development. You can find some of these on my Instagram or on my Github.

                  </p>
                <div class="slide-container-row-text-link"> 
                  <a href="https://github.com/PieroNr" target="_blank"
              rel="noopener noreferrer">Github</a>
                  <a href="https://www.instagram.com/beastcartoondraft/?hl=fr" target="_blank"
              rel="noopener noreferrer">Instagram</a>
                </div>


                
              </div>

              <div class="slide-container-row-img">

                <img src="../assets/img/projects/Instagram.png" alt="">
                <img src="../assets/img/projects/Instagram-2.png" alt="">
                
                
                

              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="proxy"></div>
    </div>
    </div>


    


      
  </div>
</div>
</template>

<script>
import menuToggle from "../components/menu-toggle.vue";
import cursorMouse from "../components/cursorMouse.vue";
import loading from "../components/loading.vue";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/all";

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
    loading,
  },
  mounted() {
    if (this.isLoading != "false" || this.isLoading == undefined) {
      setTimeout(() => {
        sessionStorage.setItem("loading", false);
        this.isLoading = "false";
      }, 3000);
    }

    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, Draggable);

      /* Main navigation */
      let panelsdiv = document.querySelector("#panels"),
        panelsContainer = document.querySelector("#panels-container"),
        tween;
      let elements = gsap.utils.toArray(
        document.querySelectorAll(".slide > *")
      );
      const panels = gsap.utils.toArray("#panels-container .slide");

      /* Panels */
      ScrollTrigger.matchMedia({
        "(min-width: 1300px)": function () {
          tween = gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
              scroller: ".projects-content",
              trigger: "#panels-container",
              pin: true,
              start: "top+=4vw top",
              scrub: 1,
              snap: {
                snapTo: 1 / (panels.length - 1),
                inertia: false,
                duration: { min: 0.1, max: 0.1 },
              },
              end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
            },
          });
        },
        "(max-width: 1299px)": function () {
          tween = gsap.to(panels, {
            yPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
              scroller: ".projects-content",
              trigger: "#panels-container",
              pin: true,
              start: "top+=2vw top",
              scrub: 1,
              snap: {
                snapTo: 1 / (panels.length - 1),
                inertia: false,
                duration: { min: 0.1, max: 0.1 },
              },
              end: () => "+=" + (panelsContainer.offsetHeight - innerHeight),
            },
          });
        },
      });
    },
  },
};
</script>

<style>
@import "../assets/css/main.css";
</style>
