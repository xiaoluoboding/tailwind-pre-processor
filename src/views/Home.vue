<template>
  <div class="home flex justify-center items-center">
    <TailwindLess />
  </div>
</template>

<script>
// @ is an alias to /src
import TailwindLess from '@/components/TailwindLess.vue'

export default {
  name: 'Home',
  components: {
    TailwindLess
  }
}
</script>

<style lang="less" scoped>
</style>
