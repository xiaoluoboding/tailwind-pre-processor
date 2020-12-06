<template>
  <div class="container mx-auto">
    <div class="animation-component mb-8 grid grid-cols-1 gap-4 w-4/5 mx-auto">
      <div class="flex items-center p-8">
        <h1 class="text-2xl font-semibold">{{title}}</h1>
        <dl v-if="version" class="items-center ml-2 px-3 py-1 rounded-full text-center text-sm font-medium leading-4 bg-green-100 text-green-900">
          <dd>{{version}}</dd>
        </dl>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TailContent',
  props: {
    title: String,
    version: String
  }
}
</script>

<style>

</style>
