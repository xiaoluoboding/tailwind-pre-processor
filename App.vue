<template>
  <div class="site-home antialiased sm:subpixel-antialiased md:antialiased lg:subpixel-antialiased xl:antialiased">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* @import './assets/styles/less/tailwindless.css'; */
/* @import './assets/styles/sass/tailwindsass.css'; */
@import './assets/styles/stylus/tailwindstylus.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

