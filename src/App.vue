<template>
  <div id="app">
    <navigation></navigation>
    <router-view />
    <footer-page></footer-page>
  </div>
</template>

<script>
import navigation from "./components/navigation.vue";
import footerPage from "./components/footer-page.vue";

export default {
  components: {
    navigation,
    footerPage,
  },
};
</script>

<style>

</style>
