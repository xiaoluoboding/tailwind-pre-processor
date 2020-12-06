<template>
  <div class="container mx-auto">
    <div class="animation-component mb-8 grid grid-cols-1 gap-4 w-4/5 mx-auto">
      <div class="flex items-center p-8">
        <h1 class="text-2xl font-semibold">Font Variant Numeric</h1>
        <dl class="items-center ml-2 px-3 py-1 rounded-full text-center text-sm font-medium leading-4 bg-green-100 text-green-900">
          <dd>v1.8.0+</dd>
        </dl>
      </div>
      <!-- Ordinal -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Ordinal</figcaption>
        <div
          class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8"
        >
          <div class="flex justify-center">
            <p class="font-source ordinal text-xl text-center text-gray-800">1st</p>
          </div>
        </div>
      </figure>
      <!-- Slashed Zero -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Slashed Zero</figcaption>
        <div
          class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8"
        >
          <div class="flex justify-center">
            <p class="font-source slashed-zero text-xl text-center text-gray-800">0</p>
          </div>
        </div>
      </figure>
      <!-- Lining figures -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Lining figures</figcaption>
        <div
          class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8"
        >
          <div class="flex justify-center">
            <p class="font-source lining-nums text-xl text-center text-gray-800">1234567890</p>
          </div>
        </div>
      </figure>
      <!-- Oldstyle figures -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Oldstyle figures</figcaption>
        <div
          class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8"
        >
          <div class="flex justify-center">
            <p class="font-source oldstyle-nums text-xl text-center text-gray-800">1234567890</p>
          </div>
        </div>
      </figure>
      <!-- Diagonal fractions -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Diagonal fractions</figcaption>
        <div
          class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8"
        >
          <div class="flex justify-center">
            <p class="font-source diagonal-fractions text-xl text-center text-gray-800">1/2 3/4 5/6</p>
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>
