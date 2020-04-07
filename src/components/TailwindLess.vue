<template>
  <div class="tailwindless container">
    <div class="mb-6">
      <button>默认按钮</button>
    </div>
    <div class="mb-6">
      <!-- Using utilities: -->
      <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="jane@example.com">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Tailwind Button
      </button>
    </div>
    <div class="post-list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
      <div v-for="n in 3" :key="n">
        <PostCard />
      </div>
    </div>
    <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" :src="require('@/assets/icons/chat.svg')" alt="ChitChat Logo">
      </div>
      <div class="ml-6 pt-1">
        <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
        <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
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
