<template>
  <div class="jelly-blob" ref="cursor" />
</template>
<script>
import { gsap, Expo } from "gsap";

const pos = { x: 0, y: 0 };
const vel = { x: 0, y: 0 };
const set = {};

export default {
  name: "cursorMouse",
  mounted() {
    window.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.initSetters();
    gsap.ticker.add(this.loop);
  },
  destroyed() {
    gsap.ticker.remove(this.loop);
    window.removeEventListener("mousemove", this.onMouseMove.bind(this));
  },
  methods: {
    onMouseMove: ({ clientX, clientY }) => {
      gsap.to(pos, {
        x: clientX,
        y: clientY,
        duration: 0.95,
        ease: Expo.easeOut,
        onUpdate: () => {
          vel.x = clientX - pos.x;
          vel.y = clientY - pos.y;
        },
      });
    },
    loop() {
      // Calculate angle and scale based on velocity
      const rotation = this.getAngle(vel.x, vel.y); // Mouse Move Angle
      const scale = this.getScale(vel.x, vel.y); // Blob Squeeze Amount

      // Set GSAP quick setter Values on Loop Function
      set.x(pos.x);
      set.y(pos.y);
      set.r(rotation);
      set.sx(3 * scale);
      set.sy(3 * scale);
      set.rt(-rotation);
    },
    // Function for Mouse Move Scale Change
    getScale(diffX, diffY) {
      const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
      return Math.min(distance / 735, 0.35);
    },
    // Function For Mouse Movement Angle in Degrees
    getAngle(diffX, diffY) {
      return (Math.atan2(diffY, diffX) * 180) / Math.PI;
    },
    initSetters() {
      set.x = gsap.quickSetter(this.$refs.cursor, "x", "px");
      set.y = gsap.quickSetter(this.$refs.cursor, "y", "px");
      set.r = gsap.quickSetter(this.$refs.cursor, "rotate", "deg");
      set.sx = gsap.quickSetter(this.$refs.cursor, "scaleX");
      set.sy = gsap.quickSetter(this.$refs.cursor, "scaleY");
      set.rt = gsap.quickSetter(this.$refs.cursor, "rotate", "deg");
    },
  },
};
</script>
