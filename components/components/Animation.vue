<template>
  <div class="container mx-auto">
    <div class="animation-component mb-8 grid grid-cols-1 gap-4 w-4/5 mx-auto">
      <div class="flex items-center p-8">
        <h1 class="text-2xl font-semibold">Animation</h1>
        <dl class="items-center ml-2 px-3 py-1 rounded-full text-center text-sm font-medium leading-4 bg-green-100 text-green-900">
          <dd>v1.6.0+</dd>
        </dl>
      </div>
      <!-- Spin -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Spin</figcaption>
        <div class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8">
          <div class="flex justify-center">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 cursor-not-allowed"
              disabled="disabled"
            >
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing
            </button>
          </div>
        </div>
      </figure>
      <!-- Ping -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Ping</figcaption>
        <div class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8">
          <div class="flex justify-center">
            <span class="relative inline-flex rounded-md shadow-sm">
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-gray-400 text-base leading-6 font-medium rounded-md text-gray-800 bg-white hover:text-gray-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
              >Transactions</button>
              <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"
                ></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </span>
          </div>
        </div>
      </figure>
      <!-- Pulse -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Pulse</figcaption>
        <div class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8">
          <div class="flex justify-center">
            <div class="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div class="flex space-x-4 animate-pulse">
                <div class="rounded-full bg-gray-400 h-12 w-12"></div>
                <div class="flex-1 space-y-4 py-1">
                  <div class="h-4 bg-gray-400 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-400 rounded"></div>
                    <div class="h-4 bg-gray-400 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </figure>
      <!-- Bounce -->
      <figure class="p-8">
        <figcaption class="text-gray-700 text-lg mb-2 font-semibold">Bounce</figcaption>
        <div class="rounded-lg overflow-hidden border border-gray-400 p-4 bg-white text-center py-8">
          <div class="flex justify-center">
            <svg
              class="animate-bounce w-6 h-6 text-gray-900"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>
