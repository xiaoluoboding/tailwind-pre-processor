<template>
  <section class="card flex justify-center mx-auto">
    <div
      class="
        bg-white border border-solid max-w-sm rounded overflow-hidden shadow-lg
        transform duration-300
        hover:shadow-2xl hover:scale-105"
    >
      <img class="w-full object-scale-down h-64 m-auto" :src="require('@/assets/logo.png')" alt="Sunset in the mountains">
      <div class="px-6 py-4 bg-pink-100 md:bg-green-100 lg:bg-blue-100 xl:bg-red-100 hover:bg-gray-300 hover:text-purple-700">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PostCard'
}
</script>

<style>

</style>
