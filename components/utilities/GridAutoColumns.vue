<template>
  <div class="container mx-auto">
    <div class="animation-component mb-8 grid grid-cols-1 gap-4 w-4/5 mx-auto">
      <div class="flex items-center p-8">
        <h1 class="text-2xl font-semibold">GridAutoColumns</h1>
        <dl class="items-center ml-2 px-3 py-1 rounded-full text-center text-sm font-medium leading-4 bg-green-100 text-green-900">
          <dd>v1.9.0+</dd>
        </dl>
      </div>

      <!-- Grid Auto Columns -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Grid Auto Columns</figcaption>
        <div class="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div class="grid grid-flow-col auto-cols-max">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </figure>

      <!-- Dotted Outline -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Dotted Outline</figcaption>
        <div class="rounded-lg overflow-hidden border border-gray-400 flex">
          <div class="min-w-0 flex-1 bg-white p-6 flex items-center justify-center">
            <button type="button" class="px-4 py-2 rounded font-medium bg-blue-600 text-white focus:outline-black">Button A</button>
          </div>
          <div class="min-w-0 flex-1 bg-blue-700 p-6 flex items-center justify-center">
            <button type="button" class="px-4 py-2 rounded font-medium bg-white text-gray-900 focus:outline-white">Button B</button>
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>
