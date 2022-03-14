<template lang="fr">
  <div class="wrapper">
  <h4>Trying to recreate <a target="_blank" href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/full.jpg">this</a> using CSS Grid and Clip-path.</h4>
  <section class="grid">
    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/2.jpg" alt="">
      <figcaption>
        <div><div><h3>Starlord</h3></div></div>
      </figcaption>
    </figure>
    
    <!-- <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/1.jpg" alt="">
      <figcaption>
        <div><div><h3>Ms Marvel</h3></div></div>
      </figcaption>
    </figure>
    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/2.jpg" alt="">
      <figcaption>
        <div><div><h3>Starlord</h3></div></div>
      </figcaption>
    </figure>
    <figure>
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
    </figure> -->
    
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
  --main-color: #ed1c24;
  --border-width: .24vw;
  --gutter: 2vw;
}

body {
  margin: 1.5vw 2vw 2vw;
  font-family: 'Marvel', sans-serif;
  font-weight: 700;
}

/* ==== GRID ==== */
.grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.167fr 0.45fr .225fr 0.3fr 0.8fr;
  grid-template-rows: 0.44fr 0.1875fr 0.4fr .9fr 0.44fr;
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
  grid-row: 1 / 3;
  clip-path: polygon(0 0, 100% 0, 100% 66%, 0% 85%);
}
.grid figure:nth-child(1) img {
  clip-path:
    polygon(
      var(--border-width) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) calc(66% - var(--border-width)),
      var(--border-width) calc(85% - var(--border-width))
    );
  /*min-height: 30.5vw;*/
}

.grid figure:nth-child(2) {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}

.grid figure:nth-child(3) {
  grid-column: 4 / 6;
  grid-row: 1 / 2;
}

.grid figure:nth-child(4) {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  clip-path: polygon(0 22%, 100% 4px, 100% 100%, 0% 100%);
}
.grid figure:nth-child(4) img {
  clip-path:
    polygon(
      var(--border-width) calc(22% + var(--border-width)),
      calc(100% - var(--border-width)) 7px,
      calc(100% - var(--border-width)) calc(100% - var(--border-width)),
      var(--border-width) calc(100% - var(--border-width))
    );
}

.grid figure:nth-child(5) {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
}

.grid figure:nth-child(6) {
  grid-column: 4 / 6;
  grid-row: 2 / 4;
}

.grid figure:nth-child(7) {
  grid-column: 1 / 2;
  grid-row: 4 / 5;
}

.grid figure:nth-child(8) {
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  clip-path: polygon(
    0 0,
    100% 0,
    88% 100%,
    0% 100%
  );
  /*width: 115%;*/
  width: calc(100% + var(--gutter));
}
.grid figure:nth-child(8) img {
  clip-path:
    polygon(
      var(--border-width) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(88% - var(--border-width)) calc(100% - var(--border-width)),
      var(--border-width) calc(100% - var(--border-width))
    );
}

.grid figure:nth-child(9) {
  grid-column: 3 / 5;
  grid-row: 4 / 5;
  clip-path: polygon(12% 0, 100% 0, 100% 100%, 0% 100%);
}
.grid figure:nth-child(9) img {
  clip-path:
    polygon(
      calc(12% + var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) calc(100% - var(--border-width)),
      var(--border-width) calc(100% - var(--border-width))
    );
}

.grid figure:nth-child(11) {
  grid-column: 1 / 3;
  grid-row: 5 / 5;
  clip-path: polygon(0% 0, 100% 0, 100% 50%, 80% 50%, 80% 100%, 0 100%);
}
.grid figure:nth-child(11) img {
  clip-path:
    polygon(
      calc(12% + var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) calc(100% - var(--border-width)),
      var(--border-width) calc(100% - var(--border-width))
    );
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
export default {
  name: "IndexPage",
};


</script>
