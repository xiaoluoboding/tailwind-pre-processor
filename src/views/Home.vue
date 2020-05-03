<template>
  <div class="home flex justify-center items-center">
    <TailwindPlayground />
  </div>
</template>

<script>
// @ is an alias to /src
import TailwindPlayground from '@/components/TailwindPlayground.vue'

export default {
  name: 'Home',
  components: {
    TailwindPlayground
  }
}
</script>

<style lang="less" scoped>
</style>
