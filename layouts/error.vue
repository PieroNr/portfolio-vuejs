<template>
  <div class="error-container" ref="errorContainer">
    <NuxtLink class="nav-link" to="/">Home page</NuxtLink>
    <div class="title-error">
      <h1 v-if="error.statusCode === 404">404</h1>
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
  transition: "page",
  mounted() {
    var colorPalet = ["#E91E78", "#D81F25", "#FED004", "#22B170", "#0171B9"];

    const random = Math.floor(Math.random() * colorPalet.length);
    this.$refs.errorContainer.style.backgroundColor = colorPalet[random];
  },
};
</script>

<style>
@import "../assets/css/main.css";
</style>
