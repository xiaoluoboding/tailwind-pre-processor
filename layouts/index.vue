<template>
  <div class="site-layout-wrapper">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'Layout',
  components: {
    Header
  }
}
</script>

<style>

</style>