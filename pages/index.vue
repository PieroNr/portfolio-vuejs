<template lang="fr">
  <div id="wrapper-accueil" class="wrapper-accueil">
  <section class="grid">

    <figure>
      <div>
        
      </div>
      <!-- <figcaption>
        <div><div><h3>Starlord</h3></div></div>
      </figcaption> -->
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
      <!-- <figcaption>
        <div><div><h3>Starlord</h3></div></div>
      </figcaption> -->
    </figure>

    <figure>
      <div>
        
      </div>
      <!-- <figcaption>
        <div><div><h3>Starlord</h3></div></div>
      </figcaption> -->
    </figure>
    
     <figure>
      <div>
        
      </div>
      <!-- <figcaption>
        <div><div><h3>Ms Marvel</h3></div></div>
      </figcaption> -->
    </figure>

    <figure>
      <div>
        <img src="../assets/svg/yeux.svg" >
      </div>
      <!-- <figcaption>
        <div><div><h3>Starlord</h3></div></div>
      </figcaption> -->
    </figure>

    <figure>
      <div>
        
      </div>
      <!-- <figcaption>
        <div><div><h3>Spider-Man</h3></div></div>
      </figcaption> -->
    </figure>

    <figure>
      <div>
        
      </div>
      <!-- <figcaption>
        <div><div><h3>Black Panther</h3></div></div>
      </figcaption> -->
    </figure>

    <figure>
      <div>
        
      </div>

      <!-- <figcaption>
        <div><div><h3>Venom</h3></div></div>
      </figcaption> -->

    </figure>

    <figure>
      <div>
        
      </div>
      <!-- <figcaption>
        <div><div><h3>Thanos</h3></div></div>
      </figcaption> -->
    </figure>
  
    <figure>
      <div>
        
      </div>
      <!-- <figcaption>
        <div><div><h3>Thanos</h3></div></div>
      </figcaption> -->
    </figure>
    <figure>
      <div>
        
      </div>
      <!-- <figcaption>
        <div><div><h3>Thanos</h3></div></div>
      </figcaption> -->
    </figure>
    <figure>
      <div>
        
      </div>
      <!-- <figcaption>
        <div><div><h3>Thanos</h3></div></div>
      </figcaption> -->
    </figure>
    <figure>
      <div>
        
      </div>
      <!-- <figcaption>
        <div><div><h3>Thanos</h3></div></div>
      </figcaption> -->
    </figure>
    
  
    
    <div class="copyright">2022 ZEENHO</div>
  </section>
  </div>
</div>
</template>


<style>

  /* ===== FONTS ===== */
  @import url('https://fonts.googleapis.com/css?family=Marvel:400,700');

  @import '../assets/css/main.css';

/* ======= CAPTION ======= */

/* .grid figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 2;
}
.grid figure:nth-child(1) figcaption {
  bottom: 15%;
  height: 17%;
  text-align: left;
  padding-left: 5%;
}

.grid figcaption h3 {
  font-weight: 700;
  color: #fdfdfd;
  margin-left: 10px;
  font-size: calc(.5em + 1.7vw);
  line-height: 1;
}

figure:hover figcaption div {
  transform: none;
}

figure:hover figcaption:before,
figure:hover figcaption:after {
  transform: scaleY(1);
}

figcaption:before,
figcaption:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(237, 28, 36, 0.4);
  height: 150%;
  transition: .3s;
  transform: scaleY(0);
  transform-origin: bottom;
  z-index: -1;
}

figcaption:before {
  clip-path: polygon(0% 0%, 100% 15%, 100% 100%, 0% 100%);
}

figcaption:after {
  height: 120%;
  background: rgba(237, 28, 36, 0.5);
  clip-path: polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%);
}

figcaption div {
  margin: 0;
  transition: .3s transform;
  will-change: transform;
  backface-visibility: hidden;
}

figcaption > div {
  overflow: hidden;
  display: inline-block;
  transform: translateY(100%);
}

figcaption > div div {
  transform: translateY(-100%);
  display: inline-block;
} 

@media (max-width: 800px) {
  .grid figure:nth-child(1) figcaption {
    padding-left: 0;
    height: 40px;
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 200px;
    grid-auto-rows: 200px;
  }
  .grid figure {
    grid-column: auto!important;
    grid-row: auto!important;
    clip-path: unset!important;
  }
  .grid figure:nth-child(2),
  .grid figure:nth-child(8),
  .grid figure:nth-child(9),
  .grid figure:nth-child(10) {
    grid-row: auto / span 2 !important;
    width: auto;
  }
}

@media (max-width: 420px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .grid figure {
    grid-column-end: div 1!important;
    grid-row: auto!important;
  }
} */
  
</style>

<script>
  import test from 'assets/js/scrollLeft.js';
  export default {
    name: "IndexPage",
    mounted(){
      document.addEventListener('wheel', (e) => {
      document.getElementById('#wrapper').scrollLeft += e.deltaY;
    })

    }
  };
</script>
