<template>
  <main class="container mx-auto max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="post-list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
      <div v-for="n in 6" :key="n">
        <PostCard :img-id="n" />
      </div>
    </div>
  </main>
</template>

<script>
import PostCard from './PostCard.vue'

export default {
  name: 'Playground',
  components: {
    PostCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
