<template lang="fr">

<cursorMouse />
</template>


<script>
  import cursorMouse from "../components/cursorMouse.vue";
  import loading from "../components/loading.vue";
  export default {
    name: "ErrorPage",
    layout: 'error',
    transition: "page",
    components: {
      cursorMouse,
      loading
    },
    
   
    };
</script>