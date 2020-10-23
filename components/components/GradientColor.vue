<template>
  <div class="container mx-auto">
    <div class="animation-component mb-8 grid grid-cols-1 gap-4 w-4/5 mx-auto">
      <!-- Starting color -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Starting color</figcaption>
        <div
          class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8"
        >
          <div class="flex justify-center">
            <div class="w-full h-24 bg-gradient-to-r from-red-500"></div>
          </div>
        </div>
      </figure>
      <!-- Ending color -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Ending color</figcaption>
        <div
          class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8"
        >
          <div class="flex justify-center">
            <div class="w-full h-24 bg-gradient-to-r from-teal-400 to-blue-500"></div>
          </div>
        </div>
      </figure>
      <!-- Middle color -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Middle color</figcaption>
        <div
          class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8"
        >
          <div class="flex justify-center">
            <div class="w-full h-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
          </div>
        </div>
      </figure>
      <!-- Responsive -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Responsive</figcaption>
        <div
          class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8"
        >
          <div class="flex justify-center">
            <div class="w-full h-24 bg-gradient-to-r from-purple-400 md:from-orange-500"></div>
          </div>
        </div>
      </figure>
      <!-- Hover -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Hover</figcaption>
        <div
          class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8"
        >
          <div class="flex justify-center">
            <button type="button" class="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-4 py-2 rounded">
              Hover me
            </button>
          </div>
        </div>
      </figure>
      <!-- Focus -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Focus</figcaption>
        <div
          class="bg-white rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8"
        >
          <div class="flex justify-center">
            <button type="button" class="bg-gradient-to-r from-teal-400 to-blue-500 focus:from-pink-500 focus:to-orange-500 text-white font-semibold px-4 py-2 rounded">
              Focus me
            </button>
          </div>
        </div>
      </figure>
      <!-- Cropping to text -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Cropping to text</figcaption>
        <div
          class="bg-white rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8"
        >
          <div class="flex justify-center">
            <div class="text-center text-5xl font-extrabold leading-none tracking-tight">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                Hello world
              </span>
            </div>
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>
