<template>
  <div>
    <nav id="nav-main" class="skew">
      <NuxtLink class="nav-link-home" to="/">
        <img class="nav-link-home__img" src="../assets/img/logo.webp" />
      </NuxtLink>
      <section>
        <NuxtLink class="nav-link" to="/projects">PROJECTS</NuxtLink>
        <NuxtLink class="nav-link" to="/skills">SKILLS</NuxtLink>
        <NuxtLink class="nav-link" to="/about">ABOUT ME</NuxtLink>
      </section>
    </nav>
    <button id="menu-button" class="menu-button">
      <div class="menu-bars" id="menuBox">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </button>
  </div>
</template>

<script>
import $ from "jquery";
import { TimelineMax, Power2, Power4, TweenMax, Elastic } from "gsap";

export default {
  name: "menuToggle",
  transition: "page",
  mounted() {
    var menuAnimation = new TimelineMax({ paused: true });
    var menuAnimationBack = new TimelineMax({ paused: true, reversed: true });
    var navMain = document.getElementById("nav-main");
    var menuButton = document.getElementById("menu-button");
    var toggle = true;
    var colorPalet = ["#E91E78", "#D81F25", "#FED004", "#22B170", "#0171B9"];
    var mqls = [
      window.matchMedia("(min-width: 769px)"),
      window.matchMedia("(min-width: 581px) and (max-width: 768px)"),
      window.matchMedia("(max-width: 580px)"),
    ];

    function mediaqueryresponse(mql) {
      if (mqls[0].matches) {
        menuAnimation.to(
          navMain,
          0.8,
          {
            width: "100vw",
            ease: Power2.easeInOut,
            transform: "translate3d(0,0,0)",
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          },
          0
        );
      }
      if (mqls[1].matches) {
        menuAnimation.to(
          navMain,
          0.8,
          {
            width: "100vw",
            ease: Power2.easeInOut,
            transform: "translate3d(0,0,0)",
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          },
          0
        );
      }
      if (mqls[2].matches) {
        menuAnimation.to(
          navMain,
          0.8,
          {
            width: "100vw",
            ease: Power2.easeInOut,
            transform: "translate3d(0,0,0)",
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          },
          0
        );
      }
    }

    for (var i = 0; i < mqls.length; i++) {
      mediaqueryresponse(mqls[i]);
      mqls[i].addListener(mediaqueryresponse);
    }

    menuAnimationBack
      .to(
        navMain,
        0.55,
        { width: 0, ease: Power4.easeIn, transform: "translate3d(0,0,0)" },
        0
      )
      .to(
        navMain,
        1.4,
        {
          ease: Power2.easeInOut,
          "clip-path": "polygon(0 0, -100% 0, 100% 100%, 0 100%)",
        },
        0
      );

    menuButton.onclick = function () {
      if (toggle) {
        const random = Math.floor(Math.random() * colorPalet.length);
        navMain.style.backgroundColor = colorPalet[random];
      }
      toggle = !toggle;
      toggle === false ? menuAnimation.play(0) : menuAnimationBack.play(0);
    };

    var hoverMouse = function ($el) {
      $el.each(function () {
        var $self = $(this);
        var hover = false;
        var offsetHoverMax = $self.attr("offset-hover-max") || 0.7;
        var offsetHoverMin = $self.attr("offset-hover-min") || 0.5;

        var attachEventsListener = function () {
          $(window).on("mousemove", function (e) {
            //
            var hoverArea = hover ? offsetHoverMax : offsetHoverMin;

            // cursor
            var cursor = {
              x: e.clientX,
              y: e.clientY + $(window).scrollTop(),
            };

            // size
            var width = $self.outerWidth();
            var height = $self.outerHeight();

            // position
            var offset = $self.offset();
            var elPos = {
              x: offset.left + width / 2,
              y: offset.top + height / 2,
            };

            // comparaison
            var x = cursor.x - elPos.x;
            var y = cursor.y - elPos.y;

            // dist
            var dist = Math.sqrt(x * x + y * y);

            // mutex hover
            var mutHover = false;

            // anim
            if (dist < width * hoverArea) {
              mutHover = true;
              if (!hover) {
                hover = true;
              }
              onHover(x, y);
            }

            // reset
            if (!mutHover && hover) {
              onLeave();
              hover = false;
            }
          });
        };

        var onHover = function (x, y) {
          TweenMax.to($self, 0.4, {
            x: x * 0.8,
            y: y * 0.8,
            scale: 0.9,
            rotation: x * 0.1,
            ease: Power2.easeOut,
          });
        };
        var onLeave = function () {
          TweenMax.to($self, 0.7, {
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            ease: Elastic.easeOut.config(1.2, 0.4),
          });
        };

        attachEventsListener();
      });
    };

    hoverMouse($(".nav-link"));
  },
};
</script>

<style>
@import "../assets/css/main.css";
</style>
