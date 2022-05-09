<template></template>
<style>
.jelly-blob {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  mix-blend-mode: difference;
  background: black;
  border-radius: 150px;
  transform-origin: 50% 50%;
  transform: translate(-50%, -50%);
  will-change: width, height, transform, border;
  z-index: 999;
  pointer-events: none;
  mix-blend-mode: difference;
}
</style>
<script>
import { gsap } from "gsap";

export default {
  name: "cursorMouse",
};
</script>
