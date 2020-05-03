<template>
  <div class="tailwindless container">
    <div class="mb-6 flex justify-between w-4/5 mx-auto">
      <div class="flex space-x-4 bg-gray-300">
        <div class="px-4 py-2 bg-red-200 bg-opacity-75">1</div>
        <div class="px-4 py-2 bg-green-200">2</div>
        <div class="px-4 py-2 bg-blue-200">3</div>
      </div>
      <div class="grid grid-cols-3 divide-x divide-gray-400">
        <div class="px-4 py-2 text-center">1</div>
        <div class="px-4 py-2 text-center">2</div>
        <div class="px-4 py-2 text-center">3</div>
      </div>
    </div>
    <div class="mb-6">
      <!-- Using utilities: -->
      <form class="flex w-full max-w-sm mx-auto">
        <input class="
          flex-1 bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300
          appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight " type="email" placeholder="Your email">
        <button class="ml-4 flex-shrink-0 bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline
          text-white font-bold py-2 px-4 rounded" type="button">
          Sign Up
        </button>
      </form>
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
