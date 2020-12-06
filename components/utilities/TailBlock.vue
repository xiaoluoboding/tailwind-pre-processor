<template>
  <figure class="p-8">
    <figcaption class="text-gray-700 text-lg mb-2 font-semibold">{{name}}</figcaption>
    <div class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8">
      <div class="flex justify-center">
        <slot></slot>
      </div>
    </div>
  </figure>
</template>

<script>
export default {
  name: 'TailBlock',
  props: {
    name: String
  }
}
</script>

<style>

</style>
