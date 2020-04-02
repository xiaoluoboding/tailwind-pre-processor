<template>
  <div class="tailwindless container">
    <div class="mb-6">
      <button>默认按钮</button>
    </div>
    <div class="mb-6">
      <!-- Using utilities: -->
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Tailwind Button
      </button>
    </div>
    <div class="post-list grid grid-cols-3 gap-4 mb-16">
      <div v-for="n in 6" :key="n">
        <PostCard />
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from './PostCard'

export default {
  name: 'Tailwindless',
  components: {
    PostCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
