<template lang="fr">
  <div id="wrapper" class="wrapper">
  <section class="grid">

    <figure>
      <img src="data:image/jpeg;base64,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" alt="">
      <figcaption>
        <div><div><h3>Starlord</h3></div></div>
      </figcaption>
    </figure>

    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/2.jpg" alt="">
      <figcaption>
        <div><div><h3>Starlord</h3></div></div>
      </figcaption>
    </figure>

    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/2.jpg" alt="">
      <figcaption>
        <div><div><h3>Starlord</h3></div></div>
      </figcaption>
    </figure>
    
     <figure>
      <img src="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/5/6/c/56ccc14967_50165554_greffe-penism-adobe-stock.jpg" alt="">
      <figcaption>
        <div><div><h3>Ms Marvel</h3></div></div>
      </figcaption>
    </figure>

    <figure>
      
      <img src="../assets/svg/yeux.svg" >
      <figcaption>
        <div><div><h3>Starlord</h3></div></div>
      </figcaption>
    </figure>

    <figure>
      <img src="https://assets.aboutkidshealth.ca/akhassets/Paraphimosis_MED_ILL_FR.png?RenditionID=19" alt="">
      <figcaption>
        <div><div><h3>Spider-Man</h3></div></div>
      </figcaption>
    </figure>

    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/4.jpg" alt="">
      <figcaption>
        <div><div><h3>Black Panther</h3></div></div>
      </figcaption>
    </figure>

    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/5.jpg" alt="">
      <figcaption>
        <div><div><h3>Venom</h3></div></div>
      </figcaption>
    </figure>

    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/6.jpg" alt="">
      <figcaption>
        <div><div><h3>Thanos</h3></div></div>
      </figcaption>
    </figure>

    <!--<figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/3.jpg" alt="">
      <figcaption>
        <div><div><h3>Spider-Man</h3></div></div>
      </figcaption>
    </figure>
    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/4.jpg" alt="">
      <figcaption>
        <div><div><h3>Black Panther</h3></div></div>
      </figcaption>
    </figure>
    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/5.jpg" alt="">
      <figcaption>
        <div><div><h3>Venom</h3></div></div>
      </figcaption>
    </figure>
    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/6.jpg" alt="">
      <figcaption>
        <div><div><h3>Thanos</h3></div></div>
      </figcaption>
    </figure>
    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/7.jpg" alt="">
      <figcaption>
        <div><div><h3>Iron Man</h3></div></div>
      </figcaption>
    </figure>
    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/8.jpg" alt="">
      <figcaption>
        <div><div><h3>Thor</h3></div></div>
      </figcaption>
    </figure>
    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/9.jpg" alt="">
      <figcaption>
        <div><div><h3>Captain America</h3></div></div>
      </figcaption>
    </figure>
    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/10.jpg" alt="">
      <figcaption>
        <div><div><h3>Black Widow</h3></div></div>
      </figcaption>
    </figure>
    <figure>
      <div class="content"></div>
      <figcaption>
        <div><div><h3>Test 1</h3></div></div>
      </figcaption>
    </figure>  -->
    
    <div class="copyright">2017 Marvel</div>
  </section>
  </div>
</div>
</template>


<style>
  /* ===== FONTS ===== */
@import url('https://fonts.googleapis.com/css?family=Marvel:400,700');

/* ========= VARIABLES ========= */
:root {
  --main-color: #000000;
  --border-width: 0.8vw;
  --gutter: 1vw;
}

body {
  margin: 1.5vw 2vw 2vw;
  font-family: 'Marvel', sans-serif;
  font-weight: 700;
  overflow-y: hidden;
  /*mouse-wh */
}

/* ==== GRID ==== */
.grid {
  position: relative;
  display: grid;
  height: 95vh;
  width: 2000px;
  grid-template-columns: 1.6fr 1fr .33fr .6fr 0.03fr 0.08fr 1fr 0.12fr .33fr 1fr;
  grid-template-rows: 1fr .5fr 1.2fr 0.1fr 0.3fr 0.6fr;
  grid-gap: var(--gutter);
}

.grid figure {
  overflow: hidden;
  background: var(--main-color);
  position: relative;
  opacity: 1;
  transition: .2s;

  /* Fix for Safari 10 */
  display: flex;
  flex-direction: column;
}

.grid figure img {
  vertical-align: middle;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .2s;
  will-change: transform;
  clip-path:
    polygon(
      var(--border-width) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) calc(100% - var(--border-width)),
      var(--border-width) calc(100% - var(--border-width))
    );

  /* Fix for Safari 10 */
  flex-grow: 1;
}

figure:hover img {
  /*transform: scale(.995);*/
}

/* ========= LAYOUT AND CLIP-PATH ======== */

.grid figure:nth-child(1) {
  grid-column: 1 / 2;
  grid-row: 1 / 7;
 
}
.grid figure:nth-child(2) {
  grid-column: 2 / 6;
  grid-row: 1 / 3;
  clip-path: polygon(0 0, 100% 0, 100% 63%, 95.5% 63%, 95.5% 100%, 0% 100%);
}
.grid figure:nth-child(2) img {
  clip-path:
    polygon(
      var(--border-width) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) calc(63% - var(--border-width)),
      calc(95.5% - var(--border-width)) calc(63% - var(--border-width)),
      calc(95.5% - var(--border-width)) calc(100% - var(--border-width)),
      var(--border-width) calc(100% - var(--border-width))
    );
  /*min-height: 30.5vw;*/
}

.grid figure:nth-child(3) {
  grid-column: 2 / 4;
  grid-row: 3 / 6;
  clip-path: polygon(0px 0px, 100% 0%, 100% 78%, 72% 78%, 72% 100%, 0% 100%);
}

.grid figure:nth-child(3) img {
  clip-path:
    polygon(
      var(--border-width) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) calc(78% - var(--border-width)),
      calc(72% - var(--border-width)) calc(78% - var(--border-width)),
      calc(72% - var(--border-width)) calc(100% - var(--border-width)),
      var(--border-width) calc(100% - var(--border-width))
    );
  /*min-height: 30.5vw;*/
}


.grid figure:nth-child(4) {
  grid-column: 4 / 5;
  grid-row: 3 / 5;
}

.grid figure:nth-child(5) {
  grid-column: 2 / 2;
  grid-row: 6 / 6;
}

.grid figure:nth-child(6) {
  grid-column: 3 / 7;
  grid-row: 5 / 7;
  clip-path: polygon(0px 0px, 81% 0%, 81% 39%, 100% 39%, 100% 100%, 0% 100%);
}

.grid figure:nth-child(6) img{
  clip-path:
    polygon(
      var(--border-width) var(--border-width),
      calc(81% - var(--border-width)) var(--border-width),
      calc(81% - var(--border-width)) calc(54% - var(--border-width)),
      calc(100% - var(--border-width)) calc(54% - var(--border-width)),
      calc(100% - var(--border-width)) calc(100% - var(--border-width)),
      var(--border-width) calc(100% - var(--border-width))
    );
}

.grid figure:nth-child(7) {
  grid-column: 6 / 9;
  grid-row: 1 / 1;
}

.grid figure:nth-child(8) {
  grid-column: 5 / 9;
  grid-row: 2 / 6;
  clip-path: polygon(0px 0px, 100% 0%, 100% 76%, 87% 76%, 87% 100%, 0% 100%);
}

.grid figure:nth-child(8) img{
  clip-path:
    polygon(
      var(--border-width) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) calc(76% - var(--border-width)),
      calc(87% - var(--border-width)) calc(76% - var(--border-width)),
      calc(87% - var(--border-width)) calc(100% - var(--border-width)),
      var(--border-width) calc(100% - var(--border-width))
    );
}

.grid figure:nth-child(9) {
  grid-column: 7 / 7;
  grid-row: 6 / 6;
}




/* ======= CAPTION ======= */

.grid figcaption {
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

/* Caption effect */

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

/* ========= COPYRIGHT ========= */

.copyright {
  color: var(--main-color);
  text-transform: uppercase;
  position: absolute;
  bottom: 0;
  right: -1.9vw;
  writing-mode: vertical-rl;
  font-size: 1.5vw;
}

/* writing-mode doesn't rotate the copyright symbol */
.copyright:before {
  content: '\00a9';
  display: inline-block;
  transform: rotate(90deg);
}


/* ============== RESPONSIVENESS ============== */

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
}







/* Usual suspects */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a,
a:visited,
a:focus,
a:active,
a:link {
  text-decoration: none;
  outline: 0;
}

a {
  color: var(--main-color);
  transition: .2s ease-in-out;
}

h1, h2, h3, h4 {
  margin: 0 0 1vw;
  font-weight: 700;
}

ul {
  padding: 0;
  list-style: none;
}

  
</style>

<script>
import test from 'assets/js/scrollLeft.js';
export default {
  name: "IndexPage",
};



</script>
